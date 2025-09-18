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
var i = { exports: {} },
    o = {},
    a = { exports: {} },
    l = {},
    s = Symbol.for('react.element'),
    u = Symbol.for('react.portal'),
    c = Symbol.for('react.fragment'),
    f = Symbol.for('react.strict_mode'),
    d = Symbol.for('react.profiler'),
    p = Symbol.for('react.provider'),
    h = Symbol.for('react.context'),
    v = Symbol.for('react.forward_ref'),
    m = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    y = Symbol.for('react.lazy'),
    b = Symbol.iterator;
var _ = {
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
    ((this.props = e), (this.context = t), (this.refs = k), (this.updater = n || _));
}
function x() {}
function O(e, t, n) {
    ((this.props = e), (this.context = t), (this.refs = k), (this.updater = n || _));
}
((S.prototype.isReactComponent = {}),
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
    (x.prototype = S.prototype));
var E = (O.prototype = new x());
((E.constructor = O), w(E, S.prototype), (E.isPureReactComponent = !0));
var P = Array.isArray,
    C = Object.prototype.hasOwnProperty,
    A = { current: null },
    T = { key: !0, ref: !0, __self: !0, __source: !0 };
function N(e, t, n) {
    var r,
        i = {},
        o = null,
        a = null;
    if (null != t)
        for (r in (void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (o = '' + t.key), t))
            C.call(t, r) && !T.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (1 === l) i.children = n;
    else if (1 < l) {
        for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
        i.children = u;
    }
    if (e && e.defaultProps) for (r in (l = e.defaultProps)) void 0 === i[r] && (i[r] = l[r]);
    return { $$typeof: s, type: e, key: o, ref: a, props: i, _owner: A.current };
}
function j(e) {
    return 'object' == typeof e && null !== e && e.$$typeof === s;
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
function I(e, t, n, r, i) {
    var o = typeof e;
    ('undefined' !== o && 'boolean' !== o) || (e = null);
    var a = !1;
    if (null === e) a = !0;
    else
        switch (o) {
            case 'string':
            case 'number':
                a = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case s:
                    case u:
                        a = !0;
                }
        }
    if (a)
        return (
            (i = i((a = e))),
            (e = '' === r ? '.' + L(a, 0) : r),
            P(i)
                ? ((n = ''),
                  null != e && (n = e.replace(R, '$&/') + '/'),
                  I(i, t, n, '', function (e) {
                      return e;
                  }))
                : null != i &&
                  (j(i) &&
                      (i = (function (e, t) {
                          return { $$typeof: s, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                      })(i, n + (!i.key || (a && a.key === i.key) ? '' : ('' + i.key).replace(R, '$&/') + '/') + e)),
                  t.push(i)),
            1
        );
    if (((a = 0), (r = '' === r ? '.' : r + ':'), P(e)))
        for (var l = 0; l < e.length; l++) {
            var c = r + L((o = e[l]), l);
            a += I(o, t, n, c, i);
        }
    else if (
        ((c = (function (e) {
            return null === e || 'object' != typeof e
                ? null
                : 'function' == typeof (e = (b && e[b]) || e['@@iterator'])
                  ? e
                  : null;
        })(e)),
        'function' == typeof c)
    )
        for (e = c.call(e), l = 0; !(o = e.next()).done; ) a += I((o = o.value), t, n, (c = r + L(o, l++)), i);
    else if ('object' === o)
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
function M(e, t, n) {
    if (null == e) return e;
    var r = [],
        i = 0;
    return (
        I(e, r, '', '', function (e) {
            return t.call(n, e, i++);
        }),
        r
    );
}
function z(e) {
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
var D = { current: null },
    V = { transition: null },
    F = { ReactCurrentDispatcher: D, ReactCurrentBatchConfig: V, ReactCurrentOwner: A };
function B() {
    throw Error('act(...) is not supported in production builds of React.');
}
((l.Children = {
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
        if (!j(e)) throw Error('React.Children.only expected to receive a single React element child.');
        return e;
    },
}),
    (l.Component = S),
    (l.Fragment = c),
    (l.Profiler = d),
    (l.PureComponent = O),
    (l.StrictMode = f),
    (l.Suspense = m),
    (l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
    (l.act = B),
    (l.cloneElement = function (e, t, n) {
        if (null == e)
            throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
        var r = w({}, e.props),
            i = e.key,
            o = e.ref,
            a = e._owner;
        if (null != t) {
            if (
                (void 0 !== t.ref && ((o = t.ref), (a = A.current)),
                void 0 !== t.key && (i = '' + t.key),
                e.type && e.type.defaultProps)
            )
                var l = e.type.defaultProps;
            for (u in t) C.call(t, u) && !T.hasOwnProperty(u) && (r[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
        }
        var u = arguments.length - 2;
        if (1 === u) r.children = n;
        else if (1 < u) {
            l = Array(u);
            for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
            r.children = l;
        }
        return { $$typeof: s, type: e.type, key: i, ref: o, props: r, _owner: a };
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
    (l.createElement = N),
    (l.createFactory = function (e) {
        var t = N.bind(null, e);
        return ((t.type = e), t);
    }),
    (l.createRef = function () {
        return { current: null };
    }),
    (l.forwardRef = function (e) {
        return { $$typeof: v, render: e };
    }),
    (l.isValidElement = j),
    (l.lazy = function (e) {
        return { $$typeof: y, _payload: { _status: -1, _result: e }, _init: z };
    }),
    (l.memo = function (e, t) {
        return { $$typeof: g, type: e, compare: void 0 === t ? null : t };
    }),
    (l.startTransition = function (e) {
        var t = V.transition;
        V.transition = {};
        try {
            e();
        } finally {
            V.transition = t;
        }
    }),
    (l.unstable_act = B),
    (l.useCallback = function (e, t) {
        return D.current.useCallback(e, t);
    }),
    (l.useContext = function (e) {
        return D.current.useContext(e);
    }),
    (l.useDebugValue = function () {}),
    (l.useDeferredValue = function (e) {
        return D.current.useDeferredValue(e);
    }),
    (l.useEffect = function (e, t) {
        return D.current.useEffect(e, t);
    }),
    (l.useId = function () {
        return D.current.useId();
    }),
    (l.useImperativeHandle = function (e, t, n) {
        return D.current.useImperativeHandle(e, t, n);
    }),
    (l.useInsertionEffect = function (e, t) {
        return D.current.useInsertionEffect(e, t);
    }),
    (l.useLayoutEffect = function (e, t) {
        return D.current.useLayoutEffect(e, t);
    }),
    (l.useMemo = function (e, t) {
        return D.current.useMemo(e, t);
    }),
    (l.useReducer = function (e, t, n) {
        return D.current.useReducer(e, t, n);
    }),
    (l.useRef = function (e) {
        return D.current.useRef(e);
    }),
    (l.useState = function (e) {
        return D.current.useState(e);
    }),
    (l.useSyncExternalStore = function (e, t, n) {
        return D.current.useSyncExternalStore(e, t, n);
    }),
    (l.useTransition = function () {
        return D.current.useTransition();
    }),
    (l.version = '18.3.1'),
    (a.exports = l));
var U = a.exports;
const $ = n(U);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var W = U,
    H = Symbol.for('react.element'),
    q = Symbol.for('react.fragment'),
    G = Object.prototype.hasOwnProperty,
    K = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Q = { key: !0, ref: !0, __self: !0, __source: !0 };
function Y(e, t, n) {
    var r,
        i = {},
        o = null,
        a = null;
    for (r in (void 0 !== n && (o = '' + n), void 0 !== t.key && (o = '' + t.key), void 0 !== t.ref && (a = t.ref), t))
        G.call(t, r) && !Q.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
    return { $$typeof: H, type: e, key: o, ref: a, props: i, _owner: K.current };
}
((o.Fragment = q), (o.jsx = Y), (o.jsxs = Y), (i.exports = o));
var X = i.exports,
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
                    for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
            }),
        ee.apply(this, arguments)
    );
};
function te(e, t) {
    var n,
        r,
        i,
        o,
        a = {
            label: 0,
            sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
            },
            trys: [],
            ops: [],
        };
    return (
        (o = { next: l(0), throw: l(1), return: l(2) }),
        'function' == typeof Symbol &&
            (o[Symbol.iterator] = function () {
                return this;
            }),
        o
    );
    function l(l) {
        return function (s) {
            return (function (l) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; o && ((o = 0), l[0] && (a = 0)), a; )
                    try {
                        if (
                            ((n = 1),
                            r &&
                                (i =
                                    2 & l[0]
                                        ? r.return
                                        : l[0]
                                          ? r.throw || ((i = r.return) && i.call(r), 0)
                                          : r.next) &&
                                !(i = i.call(r, l[1])).done)
                        )
                            return i;
                        switch (((r = 0), i && (l = [2 & l[0], i.value]), l[0])) {
                            case 0:
                            case 1:
                                i = l;
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
                                    !((i = a.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== l[0] && 2 !== l[0]))
                                ) {
                                    a = 0;
                                    continue;
                                }
                                if (3 === l[0] && (!i || (l[1] > i[0] && l[1] < i[3]))) {
                                    a.label = l[1];
                                    break;
                                }
                                if (6 === l[0] && a.label < i[1]) {
                                    ((a.label = i[1]), (i = l));
                                    break;
                                }
                                if (i && a.label < i[2]) {
                                    ((a.label = i[2]), a.ops.push(l));
                                    break;
                                }
                                (i[2] && a.ops.pop(), a.trys.pop());
                                continue;
                        }
                        l = t.call(e, a);
                    } catch (s) {
                        ((l = [6, s]), (r = 0));
                    } finally {
                        n = i = 0;
                    }
                if (5 & l[0]) throw l[1];
                return { value: l[0] ? l[1] : void 0, done: !0 };
            })([l, s]);
        };
    }
}
function ne(e, t, n) {
    if (n || 2 === arguments.length)
        for (var r, i = 0, o = t.length; i < o; i++)
            (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
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
    ie = (function (e) {
        function t(t, n, r, i) {
            return (
                e.call(this, ''.concat(t, ': expected ').concat(n, ' to be ').concat(r, ', but got ').concat(i, '.')) ||
                this
            );
        }
        return (
            J(t, e),
            (t.assert = function (e, n, r, i, o) {
                if (!e) throw new t(n, r, i, o);
                return e;
            }),
            t
        );
    })(re),
    oe = (function (e) {
        function t(t, n, r) {
            var i = t.toString(),
                o = n.map(function (e) {
                    return e.name.toString();
                });
            o.push(i);
            var a = o.join(' -> '),
                l = "Could not resolve '".concat(i, "'.");
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
                i = "Could not register '".concat(r, "'.");
            return (n && (i += ' '.concat(n)), e.call(this, i) || this);
        }
        return (J(t, e), t);
    })(re),
    le = { PROXY: 'PROXY', CLASSIC: 'CLASSIC' },
    se = { SINGLETON: 'SINGLETON', TRANSIENT: 'TRANSIENT', SCOPED: 'SCOPED' };
function ue(e) {
    var t = e.length,
        n = 0,
        r = 'EOF',
        i = '',
        o = 0,
        a = 0,
        l = 0;
    return {
        next: function (e) {
            void 0 === e && (e = 0);
            return ((o = e), s(), d());
        },
        done: function () {
            return 'EOF' === r;
        },
    };
    function s() {
        for (i = '', r = 'EOF'; ; ) {
            if (n >= t) return (r = 'EOF');
            var s = e.charAt(n);
            if (ce(s)) n++;
            else
                switch (s) {
                    case '(':
                        return (n++, a++, (r = s));
                    case ')':
                        return (n++, l++, (r = s));
                    case '*':
                    case ',':
                        return (n++, (r = s));
                    case '=':
                        return (
                            n++,
                            0 == (1 & o) &&
                                c(function (e) {
                                    var t = a === l + 1;
                                    return !(',' !== e || !t) || ('(' === e ? (a++, !1) : !(')' !== e || (l++, !t)));
                                }),
                            (r = s)
                        );
                    case '/':
                        n++;
                        var f = e.charAt(n);
                        ('/' === f &&
                            (c(function (e) {
                                return '\n' === e;
                            }, !0),
                            n++),
                            '*' === f &&
                                (c(function (t) {
                                    var r = e.charAt(n + 1);
                                    return '*' === t && '/' === r;
                                }, !0),
                                n++));
                        continue;
                    default:
                        if (he(s)) return (u(), r);
                        n++;
                }
        }
    }
    function u() {
        for (var t, o = e.charAt(n), a = ++n; (t = e.charAt(n)), pe.test(t); ) n++;
        return (
            (i = '' + o + e.substring(a, n)),
            'ident' !== (r = 'function' === i || 'class' === i ? i : 'ident') && (i = ''),
            i
        );
    }
    function c(t, r) {
        for (void 0 === r && (r = !1); n < e.length; ) {
            var i = e.charAt(n);
            if (t(i)) return;
            if (!r) {
                if (ce(i)) {
                    n++;
                    continue;
                }
                if (fe(i)) {
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
                i = e.charAt(n - 1);
            if (r === t && '\\' !== i) return void n++;
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
        return i ? { value: i, type: r } : { type: r };
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
function ve(e) {
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
function ye(e) {
    return {
        resolve: function () {
            return e;
        },
        isLeakSafe: !0,
    };
}
function be(e, t) {
    if (!me(e)) throw new ie('asFunction', 'fn', 'function', e);
    t = xe({ lifetime: se.TRANSIENT }, t, e[ge]);
    var n = Pe(e);
    return ke(we(ee({ resolve: n }, t)));
}
function _e(e, t) {
    if (!me(e)) throw new ie('asClass', 'Type', 'class', e);
    t = xe({ lifetime: se.TRANSIENT }, t, e[ge]);
    var n = Pe(function () {
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
    return Oe(e, {
        setLifetime: t,
        inject: function (e) {
            return we(ee(ee({}, this), { injector: e }));
        },
        transient: Se(t, se.TRANSIENT),
        scoped: Se(t, se.SCOPED),
        singleton: Se(t, se.SINGLETON),
        setInjectionMode: n,
        proxy: Se(n, le.PROXY),
        classic: Se(n, le.CLASSIC),
    });
}
function ke(e) {
    return Oe(e, {
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
function Oe(e, t) {
    return ee(ee({}, e), t);
}
function Ee(e, t) {
    var n,
        r = t(e),
        i = ((n = ne(ne([], Reflect.ownKeys(e.cradle), !0), Reflect.ownKeys(r), !0)), Array.from(new Set(n)));
    return new Proxy(
        {},
        {
            get: function (t, n) {
                return n === Symbol.iterator
                    ? function () {
                          var t, n, i, o, a, l, s, u;
                          return te(this, function (c) {
                              switch (c.label) {
                                  case 0:
                                      for (i in ((t = e.cradle), (n = []), t)) n.push(i);
                                      ((o = 0), (c.label = 1));
                                  case 1:
                                      return o < n.length ? ((i = n[o]) in t ? [4, i] : [3, 3]) : [3, 4];
                                  case 2:
                                      (c.sent(), (c.label = 3));
                                  case 3:
                                      return (o++, [3, 1]);
                                  case 4:
                                      for (s in ((l = []), (a = r))) l.push(s);
                                      ((u = 0), (c.label = 5));
                                  case 5:
                                      return u < l.length ? ((s = l[u]) in a ? [4, s] : [3, 7]) : [3, 8];
                                  case 6:
                                      (c.sent(), (c.label = 7));
                                  case 7:
                                      return (u++, [3, 5]);
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
                return i;
            },
            getOwnPropertyDescriptor: function (e, t) {
                if (i.indexOf(t) > -1) return { enumerable: !0, configurable: !0 };
            },
        },
    );
}
function Pe(e, t) {
    t || (t = e);
    var n = Ce(t);
    return function (t) {
        if ((this.injectionMode || t.options.injectionMode || le.PROXY) !== le.CLASSIC) {
            var r = this.injector ? Ee(t, this.injector) : t.cradle;
            return e(r);
        }
        if (n.length > 0) {
            var i = this.injector
                    ? (function (e, t) {
                          return function (n, r) {
                              return n in t ? t[n] : e.resolve(n, r);
                          };
                      })(t, this.injector(t))
                    : t.resolve,
                o = n.map(function (e) {
                    return i(e.name, { allowUnregistered: e.optional });
                });
            return e.apply(void 0, o);
        }
        return e();
    };
}
function Ce(e) {
    var t = (function (e) {
        var t = ue(e),
            n = t.next,
            r = t.done,
            i = [],
            o = null;
        for (f(); !r(); )
            switch (o.type) {
                case 'class':
                    if ((u(), !c())) return null;
                    f();
                    break;
                case 'function':
                    ('ident' !== (a = f()).type && '*' !== a.type) || f();
                    break;
                case '(':
                    s();
                    break;
                case ')':
                    return i;
                case 'ident':
                    var a,
                        l = { name: o.value, optional: !1 };
                    if ('async' === o.value && (a = f()) && '=' !== a.type) break;
                    return (i.push(l), i);
                default:
                    throw d();
            }
        return i;
        function s() {
            for (var e = { name: '', optional: !1 }; !r(); )
                switch ((f(), o.type)) {
                    case 'ident':
                        e.name = o.value;
                        break;
                    case '=':
                        e.optional = !0;
                        break;
                    case ',':
                        (i.push(e), (e = { name: '', optional: !1 }));
                        break;
                    case ')':
                        return void (e.name && i.push(e));
                    default:
                        throw d();
                }
        }
        function u() {
            for (; !c() && !r(); ) f(1);
        }
        function c() {
            return 'ident' === o.type && 'constructor' === o.value;
        }
        function f(e) {
            return (void 0 === e && (e = 0), (o = n(e)));
        }
        function d() {
            return new SyntaxError(
                'Parsing parameter list, did not expect '
                    .concat(o.type, ' token')
                    .concat(o.value ? ' ('.concat(o.value, ')') : ''),
            );
        }
    })(e.toString());
    if (!t) {
        var n = Object.getPrototypeOf(e);
        return 'function' == typeof n && n !== Function.prototype ? Ce(n) : [];
    }
    return t;
}
var Ae = Symbol('familyTree'),
    Te = Symbol('rollUpRegistrations'),
    Ne = 'AwilixContainerCradle';
function je(e) {
    return (void 0 === e && (e = {}), Re(e));
}
function Re(e, t, n) {
    var r;
    e = ee({ injectionMode: le.PROXY, strict: !1 }, e);
    var i = null != n ? n : [],
        o = {},
        a = new Proxy(
            {},
            {
                get: function (e, t) {
                    return v(t);
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
                    var n = f();
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
                    return Re(e, l, i);
                },
                register: function (n, r) {
                    for (
                        var i = (function (e, t) {
                                var n,
                                    r = e;
                                return 'string' == typeof r || 'symbol' == typeof r ? (((n = {})[e] = t), n) : r;
                            })(n, r),
                            a = ne(ne([], Object.keys(i), !0), Object.getOwnPropertySymbols(i), !0),
                            s = 0,
                            u = a;
                        s < u.length;
                        s++
                    ) {
                        var c = u[s],
                            f = i[c];
                        if (e.strict && f.lifetime === se.SINGLETON && t)
                            throw new ae(c, 'Cannot register a singleton on a scoped container.');
                        o[c] = f;
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
                        (ve(e) ? _e(e, t) : be(e, t)).resolve(l)
                    );
                },
                resolve: v,
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
                                    i = n;
                                return i.dispose
                                    ? Promise.resolve().then(function () {
                                          return i.dispose(r);
                                      })
                                    : Promise.resolve();
                            }),
                        ).then(function () {})
                    );
                },
                getRegistration: h,
            })[Te] = f),
            Object.defineProperty(r, 'registrations', {
                get: function () {
                    return f();
                },
                enumerable: !1,
                configurable: !0,
            }),
            r),
        s = t ? [l].concat(t[Ae]) : [l];
    l[Ae] = s;
    var u,
        c = (u = s)[u.length - 1];
    return l;
    function f() {
        return ee(ee({}, t && t[Te]()), o);
    }
    function d() {
        var e, t, n, r, i;
        return te(this, function (o) {
            switch (o.label) {
                case 0:
                    for (r in ((e = f()), (n = []), (t = e))) n.push(r);
                    ((i = 0), (o.label = 1));
                case 1:
                    return i < n.length ? ((r = n[i]) in t ? [4, r] : [3, 3]) : [3, 4];
                case 2:
                    (o.sent(), (o.label = 3));
                case 3:
                    return (i++, [3, 1]);
                case 4:
                    return [2];
            }
        });
    }
    function p() {
        return Object.prototype.toString.call(a);
    }
    function h(e) {
        var n = o[e];
        return n || (t ? t.getRegistration(e) : null);
    }
    function v(t, n) {
        n = n || {};
        try {
            var r = h(t);
            if (
                i.some(function (e) {
                    return e.name === t;
                })
            )
                throw new oe(t, i, 'Cyclic dependencies detected.');
            if ('toJSON' === t) return p;
            if ('constructor' === t) return je;
            if (!r) {
                switch (t) {
                    case 'inspect':
                    case 'toString':
                        return p;
                    case Symbol.toStringTag:
                        return Ne;
                    case 'then':
                        return;
                    case Symbol.iterator:
                        return d;
                }
                if (n.allowUnregistered) return;
                throw new oe(t, i);
            }
            var o = r.lifetime || se.TRANSIENT;
            if (e.strict && !r.isLeakSafe) {
                var a = i.findIndex(function (e) {
                    var t,
                        n,
                        r = e.lifetime;
                    return (
                        (n = o),
                        ((t = r) === se.SINGLETON && n !== se.SINGLETON) || (t === se.SCOPED && n === se.TRANSIENT)
                    );
                });
                if (a > -1)
                    throw new oe(
                        t,
                        i,
                        "Dependency '"
                            .concat(t.toString(), "' has a shorter lifetime than its ancestor: '")
                            .concat(i[a].name.toString(), "'"),
                    );
            }
            i.push({ name: t, lifetime: o });
            var s = void 0,
                u = void 0;
            switch (o) {
                case se.TRANSIENT:
                    u = r.resolve(l);
                    break;
                case se.SINGLETON:
                    (s = c.cache.get(t))
                        ? (u = s.value)
                        : ((u = r.resolve(e.strict ? c : l)), c.cache.set(t, { resolver: r, value: u }));
                    break;
                case se.SCOPED:
                    if (void 0 !== (s = l.cache.get(t))) {
                        u = s.value;
                        break;
                    }
                    ((u = r.resolve(l)), l.cache.set(t, { resolver: r, value: u }));
                    break;
                default:
                    throw new oe(t, i, 'Unknown lifetime "'.concat(r.lifetime, '"'));
            }
            return (i.pop(), u);
        } catch (f) {
            throw ((i.length = 0), f);
        }
    }
}
var Le = {},
    Ie = { exports: {} },
    Me = {},
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
                o = e[r];
            if (!(0 < i(o, t))) break e;
            ((e[r] = t), (e[n] = o), (n = r));
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
            e: for (var r = 0, o = e.length, a = o >>> 1; r < a; ) {
                var l = 2 * (r + 1) - 1,
                    s = e[l],
                    u = l + 1,
                    c = e[u];
                if (0 > i(s, n))
                    u < o && 0 > i(c, s) ? ((e[r] = c), (e[u] = n), (r = u)) : ((e[r] = s), (e[l] = n), (r = l));
                else {
                    if (!(u < o && 0 > i(c, n))) break e;
                    ((e[r] = c), (e[u] = n), (r = u));
                }
            }
        }
        return t;
    }
    function i(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
    }
    if ('object' == typeof performance && 'function' == typeof performance.now) {
        var o = performance;
        e.unstable_now = function () {
            return o.now();
        };
    } else {
        var a = Date,
            l = a.now();
        e.unstable_now = function () {
            return a.now() - l;
        };
    }
    var s = [],
        u = [],
        c = 1,
        f = null,
        d = 3,
        p = !1,
        h = !1,
        v = !1,
        m = 'function' == typeof setTimeout ? setTimeout : null,
        g = 'function' == typeof clearTimeout ? clearTimeout : null,
        y = 'undefined' != typeof setImmediate ? setImmediate : null;
    function b(e) {
        for (var i = n(u); null !== i; ) {
            if (null === i.callback) r(u);
            else {
                if (!(i.startTime <= e)) break;
                (r(u), (i.sortIndex = i.expirationTime), t(s, i));
            }
            i = n(u);
        }
    }
    function _(e) {
        if (((v = !1), b(e), !h))
            if (null !== n(s)) ((h = !0), j(w));
            else {
                var t = n(u);
                null !== t && R(_, t.startTime - e);
            }
    }
    function w(t, i) {
        ((h = !1), v && ((v = !1), g(O), (O = -1)), (p = !0));
        var o = d;
        try {
            for (b(i), f = n(s); null !== f && (!(f.expirationTime > i) || (t && !C())); ) {
                var a = f.callback;
                if ('function' == typeof a) {
                    ((f.callback = null), (d = f.priorityLevel));
                    var l = a(f.expirationTime <= i);
                    ((i = e.unstable_now()), 'function' == typeof l ? (f.callback = l) : f === n(s) && r(s), b(i));
                } else r(s);
                f = n(s);
            }
            if (null !== f) var c = !0;
            else {
                var m = n(u);
                (null !== m && R(_, m.startTime - i), (c = !1));
            }
            return c;
        } finally {
            ((f = null), (d = o), (p = !1));
        }
    }
    'undefined' != typeof navigator &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var k,
        S = !1,
        x = null,
        O = -1,
        E = 5,
        P = -1;
    function C() {
        return !(e.unstable_now() - P < E);
    }
    function A() {
        if (null !== x) {
            var t = e.unstable_now();
            P = t;
            var n = !0;
            try {
                n = x(!0, t);
            } finally {
                n ? k() : ((S = !1), (x = null));
            }
        } else S = !1;
    }
    if ('function' == typeof y)
        k = function () {
            y(A);
        };
    else if ('undefined' != typeof MessageChannel) {
        var T = new MessageChannel(),
            N = T.port2;
        ((T.port1.onmessage = A),
            (k = function () {
                N.postMessage(null);
            }));
    } else
        k = function () {
            m(A, 0);
        };
    function j(e) {
        ((x = e), S || ((S = !0), k()));
    }
    function R(t, n) {
        O = m(function () {
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
            h || p || ((h = !0), j(w));
        }),
        (e.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
                ? console.error(
                      'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                  )
                : (E = 0 < e ? Math.floor(1e3 / e) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return d;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(s);
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
        (e.unstable_scheduleCallback = function (r, i, o) {
            var a = e.unstable_now();
            switch (
                ('object' == typeof o && null !== o
                    ? (o = 'number' == typeof (o = o.delay) && 0 < o ? a + o : a)
                    : (o = a),
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
                    callback: i,
                    priorityLevel: r,
                    startTime: o,
                    expirationTime: (l = o + l),
                    sortIndex: -1,
                }),
                o > a
                    ? ((r.sortIndex = o),
                      t(u, r),
                      null === n(s) && r === n(u) && (v ? (g(O), (O = -1)) : (v = !0), R(_, o - a)))
                    : ((r.sortIndex = l), t(s, r), h || p || ((h = !0), j(w))),
                r
            );
        }),
        (e.unstable_shouldYield = C),
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
        }));
})(De),
    (ze.exports = De));
var Ve = ze.exports,
    Fe = U,
    Be = Ve;
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
var $e = new Set(),
    We = {};
function He(e, t) {
    (qe(e, t), qe(e + 'Capture', t));
}
function qe(e, t) {
    for (We[e] = t, e = 0; e < t.length; e++) $e.add(t[e]);
}
var Ge = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    Ke = Object.prototype.hasOwnProperty,
    Qe =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ye = {},
    Xe = {};
function Ze(e, t, n, r, i, o, a) {
    ((this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
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
    var i = Je.hasOwnProperty(t) ? Je[t] : null;
    (null !== i
        ? 0 !== i.type
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
        })(t, n, i, r) && (n = null),
        r || null === i
            ? (function (e) {
                  return !!Ke.call(Xe, e) || (!Ke.call(Ye, e) && (Qe.test(e) ? (Xe[e] = !0) : ((Ye[e] = !0), !1)));
              })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
            : i.mustUseProperty
              ? (e[i.propertyName] = null === n ? 3 !== i.type && '' : n)
              : ((t = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                    ? e.removeAttribute(t)
                    : ((n = 3 === (i = i.type) || (4 === i && !0 === n) ? '' : '' + n),
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
var rt = Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    it = Symbol.for('react.element'),
    ot = Symbol.for('react.portal'),
    at = Symbol.for('react.fragment'),
    lt = Symbol.for('react.strict_mode'),
    st = Symbol.for('react.profiler'),
    ut = Symbol.for('react.provider'),
    ct = Symbol.for('react.context'),
    ft = Symbol.for('react.forward_ref'),
    dt = Symbol.for('react.suspense'),
    pt = Symbol.for('react.suspense_list'),
    ht = Symbol.for('react.memo'),
    vt = Symbol.for('react.lazy'),
    mt = Symbol.for('react.offscreen'),
    gt = Symbol.iterator;
function yt(e) {
    return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (gt && e[gt]) || e['@@iterator'])
          ? e
          : null;
}
var bt,
    _t = Object.assign;
function wt(e) {
    if (void 0 === bt)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            bt = (t && t[1]) || '';
        }
    return '\n' + bt + e;
}
var kt = !1;
function St(e, t) {
    if (!e || kt) return '';
    kt = !0;
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
                } catch (u) {
                    var r = u;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (u) {
                    r = u;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (u) {
                r = u;
            }
            e();
        }
    } catch (u) {
        if (u && r && 'string' == typeof u.stack) {
            for (
                var i = u.stack.split('\n'), o = r.stack.split('\n'), a = i.length - 1, l = o.length - 1;
                1 <= a && 0 <= l && i[a] !== o[l];

            )
                l--;
            for (; 1 <= a && 0 <= l; a--, l--)
                if (i[a] !== o[l]) {
                    if (1 !== a || 1 !== l)
                        do {
                            if ((a--, 0 > --l || i[a] !== o[l])) {
                                var s = '\n' + i[a].replace(' at new ', ' at ');
                                return (
                                    e.displayName &&
                                        s.includes('<anonymous>') &&
                                        (s = s.replace('<anonymous>', e.displayName)),
                                    s
                                );
                            }
                        } while (1 <= a && 0 <= l);
                    break;
                }
        }
    } finally {
        ((kt = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? wt(e) : '';
}
function xt(e) {
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
            return (e = St(e.type, !1));
        case 11:
            return (e = St(e.type.render, !1));
        case 1:
            return (e = St(e.type, !0));
        default:
            return '';
    }
}
function Ot(e) {
    if (null == e) return null;
    if ('function' == typeof e) return e.displayName || e.name || null;
    if ('string' == typeof e) return e;
    switch (e) {
        case at:
            return 'Fragment';
        case ot:
            return 'Portal';
        case st:
            return 'Profiler';
        case lt:
            return 'StrictMode';
        case dt:
            return 'Suspense';
        case pt:
            return 'SuspenseList';
    }
    if ('object' == typeof e)
        switch (e.$$typeof) {
            case ct:
                return (e.displayName || 'Context') + '.Consumer';
            case ut:
                return (e._context.displayName || 'Context') + '.Provider';
            case ft:
                var t = e.render;
                return (
                    (e = e.displayName) ||
                        (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'),
                    e
                );
            case ht:
                return null !== (t = e.displayName || null) ? t : Ot(e.type) || 'Memo';
            case vt:
                ((t = e._payload), (e = e._init));
                try {
                    return Ot(e(t));
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
            return Ot(t);
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
function Ct(e) {
    var t = e.type;
    return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
}
function At(e) {
    e._valueTracker ||
        (e._valueTracker = (function (e) {
            var t = Ct(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && 'function' == typeof n.get && 'function' == typeof n.set) {
                var i = n.get,
                    o = n.set;
                return (
                    Object.defineProperty(e, t, {
                        configurable: !0,
                        get: function () {
                            return i.call(this);
                        },
                        set: function (e) {
                            ((r = '' + e), o.call(this, e));
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
function Tt(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = '';
    return (e && (r = Ct(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0));
}
function Nt(e) {
    if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body;
    } catch (t) {
        return e.body;
    }
}
function jt(e, t) {
    var n = t.checked;
    return _t({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
    });
}
function Rt(e, t) {
    var n = null == t.defaultValue ? '' : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
    ((n = Pt(null != t.value ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
        }));
}
function Lt(e, t) {
    null != (t = t.checked) && nt(e, 'checked', t, !1);
}
function It(e, t) {
    Lt(e, t);
    var n = Pt(t.value),
        r = t.type;
    if (null != n)
        'number' === r
            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
    (t.hasOwnProperty('value')
        ? zt(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && zt(e, t.type, Pt(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked));
}
function Mt(e, t, n) {
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
    ('number' === t && Nt(e.ownerDocument) === e) ||
        (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Dt = Array.isArray;
function Vt(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            ((i = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0));
    } else {
        for (n = '' + Pt(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) return ((e[i].selected = !0), void (r && (e[i].defaultSelected = !0)));
            null !== t || e[i].disabled || (t = e[i]);
        }
        null !== t && (t.selected = !0);
    }
}
function Ft(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(Ue(91));
    return _t({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Bt(e, t) {
    var n = t.value;
    if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(Ue(92));
            if (Dt(n)) {
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
function $t(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
}
function Wt(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}
function Ht(e, t) {
    return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? Wt(t)
        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
}
var qt,
    Gt,
    Kt =
        ((Gt = function (e, t) {
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
                      return Gt(e, t);
                  });
              }
            : Gt);
function Qt(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
    }
    e.textContent = t;
}
var Yt = {
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
    Xt = ['Webkit', 'ms', 'Moz', 'O'];
function Zt(e, t, n) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n || 'number' != typeof t || 0 === t || (Yt.hasOwnProperty(e) && Yt[e])
          ? ('' + t).trim()
          : t + 'px';
}
function Jt(e, t) {
    for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf('--'),
                i = Zt(n, t[n], r);
            ('float' === n && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i));
        }
}
Object.keys(Yt).forEach(function (e) {
    Xt.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yt[t] = Yt[e]));
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
    sn = null;
function un(e) {
    if ((e = ra(e))) {
        if ('function' != typeof an) throw Error(Ue(280));
        var t = e.stateNode;
        t && ((t = oa(t)), an(e.stateNode, e.type, t));
    }
}
function cn(e) {
    ln ? (sn ? sn.push(e) : (sn = [e])) : (ln = e);
}
function fn() {
    if (ln) {
        var e = ln,
            t = sn;
        if (((sn = ln = null), un(e), t)) for (e = 0; e < t.length; e++) un(t[e]);
    }
}
function dn(e, t) {
    return e(t);
}
function pn() {}
var hn = !1;
function vn(e, t, n) {
    if (hn) return e(t, n);
    hn = !0;
    try {
        return dn(e, t, n);
    } finally {
        ((hn = !1), (null !== ln || null !== sn) && (pn(), fn()));
    }
}
function mn(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = oa(n);
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
var gn = !1;
if (Ge)
    try {
        var yn = {};
        (Object.defineProperty(yn, 'passive', {
            get: function () {
                gn = !0;
            },
        }),
            window.addEventListener('test', yn, yn),
            window.removeEventListener('test', yn, yn));
    } catch (Gt) {
        gn = !1;
    }
function bn(e, t, n, r, i, o, a, l, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u);
    } catch (c) {
        this.onError(c);
    }
}
var _n = !1,
    wn = null,
    kn = !1,
    Sn = null,
    xn = {
        onError: function (e) {
            ((_n = !0), (wn = e));
        },
    };
function On(e, t, n, r, i, o, a, l, s) {
    ((_n = !1), (wn = null), bn.apply(xn, arguments));
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
function Pn(e) {
    if (13 === e.tag) {
        var t = e.memoizedState;
        if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
    }
    return null;
}
function Cn(e) {
    if (En(e) !== e) throw Error(Ue(188));
}
function An(e) {
    return null !==
        (e = (function (e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = En(e))) throw Error(Ue(188));
                return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var o = i.alternate;
                if (null === o) {
                    if (null !== (r = i.return)) {
                        n = r;
                        continue;
                    }
                    break;
                }
                if (i.child === o.child) {
                    for (o = i.child; o; ) {
                        if (o === n) return (Cn(i), e);
                        if (o === r) return (Cn(i), t);
                        o = o.sibling;
                    }
                    throw Error(Ue(188));
                }
                if (n.return !== r.return) ((n = i), (r = o));
                else {
                    for (var a = !1, l = i.child; l; ) {
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
                    if (!a) {
                        for (l = o.child; l; ) {
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
                        if (!a) throw Error(Ue(189));
                    }
                }
                if (n.alternate !== r) throw Error(Ue(190));
            }
            if (3 !== n.tag) throw Error(Ue(188));
            return n.stateNode.current === n ? e : t;
        })(e))
        ? Tn(e)
        : null;
}
function Tn(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e; ) {
        var t = Tn(e);
        if (null !== t) return t;
        e = e.sibling;
    }
    return null;
}
var Nn = Be.unstable_scheduleCallback,
    jn = Be.unstable_cancelCallback,
    Rn = Be.unstable_shouldYield,
    Ln = Be.unstable_requestPaint,
    In = Be.unstable_now,
    Mn = Be.unstable_getCurrentPriorityLevel,
    zn = Be.unstable_ImmediatePriority,
    Dn = Be.unstable_UserBlockingPriority,
    Vn = Be.unstable_NormalPriority,
    Fn = Be.unstable_LowPriority,
    Bn = Be.unstable_IdlePriority,
    Un = null,
    $n = null;
var Wn = Math.clz32
        ? Math.clz32
        : function (e) {
              return ((e >>>= 0), 0 === e ? 32 : (31 - ((Hn(e) / qn) | 0)) | 0);
          },
    Hn = Math.log,
    qn = Math.LN2;
var Gn = 64,
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
function Yn(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        a = 268435455 & n;
    if (0 !== a) {
        var l = a & ~i;
        0 !== l ? (r = Qn(l)) : 0 !== (o &= a) && (r = Qn(o));
    } else 0 !== (a = n & ~i) ? (r = Qn(a)) : 0 !== o && (r = Qn(o));
    if (0 === r) return 0;
    if (0 !== t && t !== r && 0 == (t & i) && ((i = r & -r) >= (o = t & -t) || (16 === i && 0 != (4194240 & o))))
        return t;
    if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; ) ((i = 1 << (n = 31 - Wn(t))), (r |= e[n]), (t &= ~i));
    return r;
}
function Xn(e, t) {
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
    var e = Gn;
    return (0 == (4194240 & (Gn <<= 1)) && (Gn = 64), e);
}
function er(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function tr(e, t, n) {
    ((e.pendingLanes |= t),
        536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        ((e = e.eventTimes)[(t = 31 - Wn(t))] = n));
}
function nr(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Wn(n),
            i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
    }
}
var rr = 0;
function ir(e) {
    return 1 < (e &= -e) ? (4 < e ? (0 != (268435455 & e) ? 16 : 536870912) : 4) : 1;
}
var or,
    ar,
    lr,
    sr,
    ur,
    cr = !1,
    fr = [],
    dr = null,
    pr = null,
    hr = null,
    vr = new Map(),
    mr = new Map(),
    gr = [],
    yr =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' ',
        );
function br(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            dr = null;
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
            vr.delete(t.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            mr.delete(t.pointerId);
    }
}
function _r(e, t, n, r, i, o) {
    return null === e || e.nativeEvent !== o
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }),
          null !== t && null !== (t = ra(t)) && ar(t),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== i && -1 === t.indexOf(i) && t.push(i), e);
}
function wr(e) {
    var t = na(e.target);
    if (null !== t) {
        var n = En(t);
        if (null !== n)
            if (13 === (t = n.tag)) {
                if (null !== (t = Pn(n)))
                    return (
                        (e.blockedOn = t),
                        void ur(e.priority, function () {
                            lr(n);
                        })
                    );
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
}
function kr(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Rr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return (null !== (t = ra(n)) && ar(t), (e.blockedOn = n), !1);
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        ((rn = r), n.target.dispatchEvent(r), (rn = null), t.shift());
    }
    return !0;
}
function Sr(e, t, n) {
    kr(e) && n.delete(t);
}
function xr() {
    ((cr = !1),
        null !== dr && kr(dr) && (dr = null),
        null !== pr && kr(pr) && (pr = null),
        null !== hr && kr(hr) && (hr = null),
        vr.forEach(Sr),
        mr.forEach(Sr));
}
function Or(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), cr || ((cr = !0), Be.unstable_scheduleCallback(Be.unstable_NormalPriority, xr)));
}
function Er(e) {
    function t(t) {
        return Or(t, e);
    }
    if (0 < fr.length) {
        Or(fr[0], e);
        for (var n = 1; n < fr.length; n++) {
            var r = fr[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        null !== dr && Or(dr, e),
            null !== pr && Or(pr, e),
            null !== hr && Or(hr, e),
            vr.forEach(t),
            mr.forEach(t),
            n = 0;
        n < gr.length;
        n++
    )
        (r = gr[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < gr.length && null === (n = gr[0]).blockedOn; ) (wr(n), null === n.blockedOn && gr.shift());
}
var Pr = rt.ReactCurrentBatchConfig,
    Cr = !0;
function Ar(e, t, n, r) {
    var i = rr,
        o = Pr.transition;
    Pr.transition = null;
    try {
        ((rr = 1), Nr(e, t, n, r));
    } finally {
        ((rr = i), (Pr.transition = o));
    }
}
function Tr(e, t, n, r) {
    var i = rr,
        o = Pr.transition;
    Pr.transition = null;
    try {
        ((rr = 4), Nr(e, t, n, r));
    } finally {
        ((rr = i), (Pr.transition = o));
    }
}
function Nr(e, t, n, r) {
    if (Cr) {
        var i = Rr(e, t, n, r);
        if (null === i) (Co(e, t, r, jr, n), br(e, r));
        else if (
            (function (e, t, n, r, i) {
                switch (t) {
                    case 'focusin':
                        return ((dr = _r(dr, e, t, n, r, i)), !0);
                    case 'dragenter':
                        return ((pr = _r(pr, e, t, n, r, i)), !0);
                    case 'mouseover':
                        return ((hr = _r(hr, e, t, n, r, i)), !0);
                    case 'pointerover':
                        var o = i.pointerId;
                        return (vr.set(o, _r(vr.get(o) || null, e, t, n, r, i)), !0);
                    case 'gotpointercapture':
                        return ((o = i.pointerId), mr.set(o, _r(mr.get(o) || null, e, t, n, r, i)), !0);
                }
                return !1;
            })(i, e, t, n, r)
        )
            r.stopPropagation();
        else if ((br(e, r), 4 & t && -1 < yr.indexOf(e))) {
            for (; null !== i; ) {
                var o = ra(i);
                if ((null !== o && or(o), null === (o = Rr(e, t, n, r)) && Co(e, t, r, jr, n), o === i)) break;
                i = o;
            }
            null !== i && r.stopPropagation();
        } else Co(e, t, r, null, n);
    }
}
var jr = null;
function Rr(e, t, n, r) {
    if (((jr = null), null !== (e = na((e = on(r))))))
        if (null === (t = En(e))) e = null;
        else if (13 === (n = t.tag)) {
            if (null !== (e = Pn(t))) return e;
            e = null;
        } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return ((jr = e), null);
}
function Lr(e) {
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
            switch (Mn()) {
                case zn:
                    return 1;
                case Dn:
                    return 4;
                case Vn:
                case Fn:
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
var Ir = null,
    Mr = null,
    zr = null;
function Dr() {
    if (zr) return zr;
    var e,
        t,
        n = Mr,
        r = n.length,
        i = 'value' in Ir ? Ir.value : Ir.textContent,
        o = i.length;
    for (e = 0; e < r && n[e] === i[e]; e++);
    var a = r - e;
    for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
    return (zr = i.slice(e, 1 < t ? 1 - t : void 0));
}
function Vr(e) {
    var t = e.keyCode;
    return (
        'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
    );
}
function Fr() {
    return !0;
}
function Br() {
    return !1;
}
function Ur(e) {
    function t(t, n, r, i, o) {
        for (var a in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = o),
        (this.currentTarget = null),
        e))
            e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(i) : i[a]));
        return (
            (this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue)
                ? Fr
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
                    (this.isDefaultPrevented = Fr));
            },
            stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                    (e.stopPropagation
                        ? e.stopPropagation()
                        : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                    (this.isPropagationStopped = Fr));
            },
            persist: function () {},
            isPersistent: Fr,
        }),
        t
    );
}
var $r,
    Wr,
    Hr,
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
    Gr = Ur(qr),
    Kr = _t({}, qr, { view: 0, detail: 0 }),
    Qr = Ur(Kr),
    Yr = _t({}, Kr, {
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
        getModifierState: si,
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
                : (e !== Hr &&
                      (Hr && 'mousemove' === e.type
                          ? (($r = e.screenX - Hr.screenX), (Wr = e.screenY - Hr.screenY))
                          : (Wr = $r = 0),
                      (Hr = e)),
                  $r);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : Wr;
        },
    }),
    Xr = Ur(Yr),
    Zr = Ur(_t({}, Yr, { dataTransfer: 0 })),
    Jr = Ur(_t({}, Kr, { relatedTarget: 0 })),
    ei = Ur(_t({}, qr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    ti = _t({}, qr, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    ni = Ur(ti),
    ri = Ur(_t({}, qr, { data: 0 })),
    ii = {
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
    oi = {
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
    ai = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function li(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = ai[e]) && !!t[e];
}
function si() {
    return li;
}
var ui = _t({}, Kr, {
        key: function (e) {
            if (e.key) {
                var t = ii[e.key] || e.key;
                if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
                ? 13 === (e = Vr(e))
                    ? 'Enter'
                    : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? oi[e.keyCode] || 'Unidentified'
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
        getModifierState: si,
        charCode: function (e) {
            return 'keypress' === e.type ? Vr(e) : 0;
        },
        keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
        which: function (e) {
            return 'keypress' === e.type ? Vr(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
    }),
    ci = Ur(ui),
    fi = Ur(
        _t({}, Yr, {
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
    di = Ur(
        _t({}, Kr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: si,
        }),
    ),
    pi = Ur(_t({}, qr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    hi = _t({}, Yr, {
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
    vi = Ur(hi),
    mi = [9, 13, 27, 32],
    gi = Ge && 'CompositionEvent' in window,
    yi = null;
Ge && 'documentMode' in document && (yi = document.documentMode);
var bi = Ge && 'TextEvent' in window && !yi,
    _i = Ge && (!gi || (yi && 8 < yi && 11 >= yi)),
    wi = String.fromCharCode(32),
    ki = !1;
function Si(e, t) {
    switch (e) {
        case 'keyup':
            return -1 !== mi.indexOf(t.keyCode);
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
function xi(e) {
    return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
}
var Oi = !1;
var Ei = {
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
function Pi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return 'input' === t ? !!Ei[e.type] : 'textarea' === t;
}
function Ci(e, t, n, r) {
    (cn(r),
        0 < (t = To(t, 'onChange')).length &&
            ((n = new Gr('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
}
var Ai = null,
    Ti = null;
function Ni(e) {
    ko(e, 0);
}
function ji(e) {
    if (Tt(ia(e))) return e;
}
function Ri(e, t) {
    if ('change' === e) return t;
}
var Li = !1;
if (Ge) {
    var Ii;
    if (Ge) {
        var Mi = 'oninput' in document;
        if (!Mi) {
            var zi = document.createElement('div');
            (zi.setAttribute('oninput', 'return;'), (Mi = 'function' == typeof zi.oninput));
        }
        Ii = Mi;
    } else Ii = !1;
    Li = Ii && (!document.documentMode || 9 < document.documentMode);
}
function Di() {
    Ai && (Ai.detachEvent('onpropertychange', Vi), (Ti = Ai = null));
}
function Vi(e) {
    if ('value' === e.propertyName && ji(Ti)) {
        var t = [];
        (Ci(t, Ti, e, on(e)), vn(Ni, t));
    }
}
function Fi(e, t, n) {
    'focusin' === e ? (Di(), (Ti = n), (Ai = t).attachEvent('onpropertychange', Vi)) : 'focusout' === e && Di();
}
function Bi(e) {
    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return ji(Ti);
}
function Ui(e, t) {
    if ('click' === e) return ji(t);
}
function $i(e, t) {
    if ('input' === e || 'change' === e) return ji(t);
}
var Wi =
    'function' == typeof Object.is
        ? Object.is
        : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
          };
function Hi(e, t) {
    if (Wi(e, t)) return !0;
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ke.call(t, i) || !Wi(e[i], t[i])) return !1;
    }
    return !0;
}
function qi(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Gi(e, t) {
    var n,
        r = qi(e);
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
        r = qi(r);
    }
}
function Ki(e, t) {
    return (
        !(!e || !t) &&
        (e === t ||
            ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                    ? Ki(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
    );
}
function Qi() {
    for (var e = window, t = Nt(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = 'string' == typeof t.contentWindow.location.href;
        } catch (r) {
            n = !1;
        }
        if (!n) break;
        t = Nt((e = t.contentWindow).document);
    }
    return t;
}
function Yi(e) {
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
function Xi(e) {
    var t = Qi(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ki(n.ownerDocument.documentElement, n)) {
        if (null !== r && Yi(n))
            if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
            else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                ((r = void 0 === r.end ? o : Math.min(r.end, i)),
                    !e.extend && o > r && ((i = r), (r = o), (o = i)),
                    (i = Gi(n, o)));
                var a = Gi(n, r);
                i &&
                    a &&
                    (1 !== e.rangeCount ||
                        e.anchorNode !== i.node ||
                        e.anchorOffset !== i.offset ||
                        e.focusNode !== a.node ||
                        e.focusOffset !== a.offset) &&
                    ((t = t.createRange()).setStart(i.node, i.offset),
                    e.removeAllRanges(),
                    o > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
            }
        for (t = [], e = n; (e = e.parentNode); )
            1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for ('function' == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
            (((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
}
var Zi = Ge && 'documentMode' in document && 11 >= document.documentMode,
    Ji = null,
    eo = null,
    to = null,
    no = !1;
function ro(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    no ||
        null == Ji ||
        Ji !== Nt(r) ||
        ('selectionStart' in (r = Ji) && Yi(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                  anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                      .anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              }),
        (to && Hi(to, r)) ||
            ((to = r),
            0 < (r = To(eo, 'onSelect')).length &&
                ((t = new Gr('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Ji))));
}
function io(e, t) {
    var n = {};
    return ((n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n);
}
var oo = {
        animationend: io('Animation', 'AnimationEnd'),
        animationiteration: io('Animation', 'AnimationIteration'),
        animationstart: io('Animation', 'AnimationStart'),
        transitionend: io('Transition', 'TransitionEnd'),
    },
    ao = {},
    lo = {};
function so(e) {
    if (ao[e]) return ao[e];
    if (!oo[e]) return e;
    var t,
        n = oo[e];
    for (t in n) if (n.hasOwnProperty(t) && t in lo) return (ao[e] = n[t]);
    return e;
}
Ge &&
    ((lo = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete oo.animationend.animation, delete oo.animationiteration.animation, delete oo.animationstart.animation),
    'TransitionEvent' in window || delete oo.transitionend.transition);
var uo = so('animationend'),
    co = so('animationiteration'),
    fo = so('animationstart'),
    po = so('transitionend'),
    ho = new Map(),
    vo =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' ',
        );
function mo(e, t) {
    (ho.set(e, t), He(t, [e]));
}
for (var go = 0; go < vo.length; go++) {
    var yo = vo[go];
    mo(yo.toLowerCase(), 'on' + (yo[0].toUpperCase() + yo.slice(1)));
}
(mo(uo, 'onAnimationEnd'),
    mo(co, 'onAnimationIteration'),
    mo(fo, 'onAnimationStart'),
    mo('dblclick', 'onDoubleClick'),
    mo('focusin', 'onFocus'),
    mo('focusout', 'onBlur'),
    mo(po, 'onTransitionEnd'),
    qe('onMouseEnter', ['mouseout', 'mouseover']),
    qe('onMouseLeave', ['mouseout', 'mouseover']),
    qe('onPointerEnter', ['pointerout', 'pointerover']),
    qe('onPointerLeave', ['pointerout', 'pointerover']),
    He('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    He('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    He('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    He('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    He('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    He('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
var bo =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' ',
        ),
    _o = new Set('cancel close invalid load scroll toggle'.split(' ').concat(bo));
function wo(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n),
        (function (e, t, n, r, i, o, a, l, s) {
            if ((On.apply(this, arguments), _n)) {
                if (!_n) throw Error(Ue(198));
                var u = wn;
                ((_n = !1), (wn = null), kn || ((kn = !0), (Sn = u)));
            }
        })(r, t, void 0, e),
        (e.currentTarget = null));
}
function ko(e, t) {
    t = 0 != (4 & t);
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var l = r[a],
                        s = l.instance,
                        u = l.currentTarget;
                    if (((l = l.listener), s !== o && i.isPropagationStopped())) break e;
                    (wo(i, l, u), (o = s));
                }
            else
                for (a = 0; a < r.length; a++) {
                    if (
                        ((s = (l = r[a]).instance),
                        (u = l.currentTarget),
                        (l = l.listener),
                        s !== o && i.isPropagationStopped())
                    )
                        break e;
                    (wo(i, l, u), (o = s));
                }
        }
    }
    if (kn) throw ((e = Sn), (kn = !1), (Sn = null), e);
}
function So(e, t) {
    var n = t[Jo];
    void 0 === n && (n = t[Jo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Po(t, e, 2, !1), n.add(r));
}
function xo(e, t, n) {
    var r = 0;
    (t && (r |= 4), Po(n, e, r, t));
}
var Oo = '_reactListening' + Math.random().toString(36).slice(2);
function Eo(e) {
    if (!e[Oo]) {
        ((e[Oo] = !0),
            $e.forEach(function (t) {
                'selectionchange' !== t && (_o.has(t) || xo(t, !1, e), xo(t, !0, e));
            }));
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[Oo] || ((t[Oo] = !0), xo('selectionchange', !1, t));
    }
}
function Po(e, t, n, r) {
    switch (Lr(t)) {
        case 1:
            var i = Ar;
            break;
        case 4:
            i = Tr;
            break;
        default:
            i = Nr;
    }
    ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !gn || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (i = !0),
        r
            ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
            : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1));
}
function Co(e, t, n, r, i) {
    var o = r;
    if (0 == (1 & t) && 0 == (2 & t) && null !== r)
        e: for (;;) {
            if (null === r) return;
            var a = r.tag;
            if (3 === a || 4 === a) {
                var l = r.stateNode.containerInfo;
                if (l === i || (8 === l.nodeType && l.parentNode === i)) break;
                if (4 === a)
                    for (a = r.return; null !== a; ) {
                        var s = a.tag;
                        if (
                            (3 === s || 4 === s) &&
                            ((s = a.stateNode.containerInfo) === i || (8 === s.nodeType && s.parentNode === i))
                        )
                            return;
                        a = a.return;
                    }
                for (; null !== l; ) {
                    if (null === (a = na(l))) return;
                    if (5 === (s = a.tag) || 6 === s) {
                        r = o = a;
                        continue e;
                    }
                    l = l.parentNode;
                }
            }
            r = r.return;
        }
    vn(function () {
        var r = o,
            i = on(n),
            a = [];
        e: {
            var l = ho.get(e);
            if (void 0 !== l) {
                var s = Gr,
                    u = e;
                switch (e) {
                    case 'keypress':
                        if (0 === Vr(n)) break e;
                    case 'keydown':
                    case 'keyup':
                        s = ci;
                        break;
                    case 'focusin':
                        ((u = 'focus'), (s = Jr));
                        break;
                    case 'focusout':
                        ((u = 'blur'), (s = Jr));
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        s = Jr;
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
                        s = Xr;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        s = Zr;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        s = di;
                        break;
                    case uo:
                    case co:
                    case fo:
                        s = ei;
                        break;
                    case po:
                        s = pi;
                        break;
                    case 'scroll':
                        s = Qr;
                        break;
                    case 'wheel':
                        s = vi;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        s = ni;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        s = fi;
                }
                var c = 0 != (4 & t),
                    f = !c && 'scroll' === e,
                    d = c ? (null !== l ? l + 'Capture' : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                    var v = (p = h).stateNode;
                    if (
                        (5 === p.tag &&
                            null !== v &&
                            ((p = v), null !== d && null != (v = mn(h, d)) && c.push(Ao(h, v, p))),
                        f)
                    )
                        break;
                    h = h.return;
                }
                0 < c.length && ((l = new s(l, u, null, n, i)), a.push({ event: l, listeners: c }));
            }
        }
        if (0 == (7 & t)) {
            if (
                ((s = 'mouseout' === e || 'pointerout' === e),
                (!(l = 'mouseover' === e || 'pointerover' === e) ||
                    n === rn ||
                    !(u = n.relatedTarget || n.fromElement) ||
                    (!na(u) && !u[Zo])) &&
                    (s || l) &&
                    ((l = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window),
                    s
                        ? ((s = r),
                          null !== (u = (u = n.relatedTarget || n.toElement) ? na(u) : null) &&
                              (u !== (f = En(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                              (u = null))
                        : ((s = null), (u = r)),
                    s !== u))
            ) {
                if (
                    ((c = Xr),
                    (v = 'onMouseLeave'),
                    (d = 'onMouseEnter'),
                    (h = 'mouse'),
                    ('pointerout' !== e && 'pointerover' !== e) ||
                        ((c = fi), (v = 'onPointerLeave'), (d = 'onPointerEnter'), (h = 'pointer')),
                    (f = null == s ? l : ia(s)),
                    (p = null == u ? l : ia(u)),
                    ((l = new c(v, h + 'leave', s, n, i)).target = f),
                    (l.relatedTarget = p),
                    (v = null),
                    na(i) === r && (((c = new c(d, h + 'enter', u, n, i)).target = p), (c.relatedTarget = f), (v = c)),
                    (f = v),
                    s && u)
                )
                    e: {
                        for (d = u, h = 0, p = c = s; p; p = No(p)) h++;
                        for (p = 0, v = d; v; v = No(v)) p++;
                        for (; 0 < h - p; ) ((c = No(c)), h--);
                        for (; 0 < p - h; ) ((d = No(d)), p--);
                        for (; h--; ) {
                            if (c === d || (null !== d && c === d.alternate)) break e;
                            ((c = No(c)), (d = No(d)));
                        }
                        c = null;
                    }
                else c = null;
                (null !== s && jo(a, l, s, c, !1), null !== u && null !== f && jo(a, f, u, c, !0));
            }
            if (
                'select' === (s = (l = r ? ia(r) : window).nodeName && l.nodeName.toLowerCase()) ||
                ('input' === s && 'file' === l.type)
            )
                var m = Ri;
            else if (Pi(l))
                if (Li) m = $i;
                else {
                    m = Bi;
                    var g = Fi;
                }
            else
                (s = l.nodeName) &&
                    'input' === s.toLowerCase() &&
                    ('checkbox' === l.type || 'radio' === l.type) &&
                    (m = Ui);
            switch (
                (m && (m = m(e, r))
                    ? Ci(a, m, n, i)
                    : (g && g(e, l, r),
                      'focusout' === e &&
                          (g = l._wrapperState) &&
                          g.controlled &&
                          'number' === l.type &&
                          zt(l, 'number', l.value)),
                (g = r ? ia(r) : window),
                e)
            ) {
                case 'focusin':
                    (Pi(g) || 'true' === g.contentEditable) && ((Ji = g), (eo = r), (to = null));
                    break;
                case 'focusout':
                    to = eo = Ji = null;
                    break;
                case 'mousedown':
                    no = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    ((no = !1), ro(a, n, i));
                    break;
                case 'selectionchange':
                    if (Zi) break;
                case 'keydown':
                case 'keyup':
                    ro(a, n, i);
            }
            var y;
            if (gi)
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
                Oi
                    ? Si(e, n) && (b = 'onCompositionEnd')
                    : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
            (b &&
                (_i &&
                    'ko' !== n.locale &&
                    (Oi || 'onCompositionStart' !== b
                        ? 'onCompositionEnd' === b && Oi && (y = Dr())
                        : ((Mr = 'value' in (Ir = i) ? Ir.value : Ir.textContent), (Oi = !0))),
                0 < (g = To(r, b)).length &&
                    ((b = new ri(b, e, null, n, i)),
                    a.push({ event: b, listeners: g }),
                    y ? (b.data = y) : null !== (y = xi(n)) && (b.data = y))),
                (y = bi
                    ? (function (e, t) {
                          switch (e) {
                              case 'compositionend':
                                  return xi(t);
                              case 'keypress':
                                  return 32 !== t.which ? null : ((ki = !0), wi);
                              case 'textInput':
                                  return (e = t.data) === wi && ki ? null : e;
                              default:
                                  return null;
                          }
                      })(e, n)
                    : (function (e, t) {
                          if (Oi)
                              return 'compositionend' === e || (!gi && Si(e, t))
                                  ? ((e = Dr()), (zr = Mr = Ir = null), (Oi = !1), e)
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
                                  return _i && 'ko' !== t.locale ? null : t.data;
                          }
                      })(e, n)) &&
                    0 < (r = To(r, 'onBeforeInput')).length &&
                    ((i = new ri('onBeforeInput', 'beforeinput', null, n, i)),
                    a.push({ event: i, listeners: r }),
                    (i.data = y)));
        }
        ko(a, t);
    });
}
function Ao(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function To(e, t) {
    for (var n = t + 'Capture', r = []; null !== e; ) {
        var i = e,
            o = i.stateNode;
        (5 === i.tag &&
            null !== o &&
            ((i = o), null != (o = mn(e, n)) && r.unshift(Ao(e, o, i)), null != (o = mn(e, t)) && r.push(Ao(e, o, i))),
            (e = e.return));
    }
    return r;
}
function No(e) {
    if (null === e) return null;
    do {
        e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
}
function jo(e, t, n, r, i) {
    for (var o = t._reactName, a = []; null !== n && n !== r; ) {
        var l = n,
            s = l.alternate,
            u = l.stateNode;
        if (null !== s && s === r) break;
        (5 === l.tag &&
            null !== u &&
            ((l = u),
            i
                ? null != (s = mn(n, o)) && a.unshift(Ao(n, s, l))
                : i || (null != (s = mn(n, o)) && a.push(Ao(n, s, l)))),
            (n = n.return));
    }
    0 !== a.length && e.push({ event: t, listeners: a });
}
var Ro = /\r\n?/g,
    Lo = /\u0000|\uFFFD/g;
function Io(e) {
    return ('string' == typeof e ? e : '' + e).replace(Ro, '\n').replace(Lo, '');
}
function Mo(e, t, n) {
    if (((t = Io(t)), Io(e) !== t && n)) throw Error(Ue(425));
}
function zo() {}
var Do = null,
    Vo = null;
function Fo(e, t) {
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
var Bo = 'function' == typeof setTimeout ? setTimeout : void 0,
    Uo = 'function' == typeof clearTimeout ? clearTimeout : void 0,
    $o = 'function' == typeof Promise ? Promise : void 0,
    Wo =
        'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== $o
              ? function (e) {
                    return $o.resolve(null).then(e).catch(Ho);
                }
              : Bo;
function Ho(e) {
    setTimeout(function () {
        throw e;
    });
}
function qo(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && 8 === i.nodeType))
            if ('/$' === (n = i.data)) {
                if (0 === r) return (e.removeChild(i), void Er(t));
                r--;
            } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
        n = i;
    } while (n);
    Er(t);
}
function Go(e) {
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
function Ko(e) {
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
var Qo = Math.random().toString(36).slice(2),
    Yo = '__reactFiber$' + Qo,
    Xo = '__reactProps$' + Qo,
    Zo = '__reactContainer$' + Qo,
    Jo = '__reactEvents$' + Qo,
    ea = '__reactListeners$' + Qo,
    ta = '__reactHandles$' + Qo;
function na(e) {
    var t = e[Yo];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Zo] || n[Yo])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = Ko(e); null !== e; ) {
                    if ((n = e[Yo])) return n;
                    e = Ko(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function ra(e) {
    return !(e = e[Yo] || e[Zo]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
}
function ia(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(Ue(33));
}
function oa(e) {
    return e[Xo] || null;
}
var aa = [],
    la = -1;
function sa(e) {
    return { current: e };
}
function ua(e) {
    0 > la || ((e.current = aa[la]), (aa[la] = null), la--);
}
function ca(e, t) {
    (la++, (aa[la] = e.current), (e.current = t));
}
var fa = {},
    da = sa(fa),
    pa = sa(!1),
    ha = fa;
function va(e, t) {
    var n = e.type.contextTypes;
    if (!n) return fa;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i,
        o = {};
    for (i in n) o[i] = t[i];
    return (
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        o
    );
}
function ma(e) {
    return null != (e = e.childContextTypes);
}
function ga() {
    (ua(pa), ua(da));
}
function ya(e, t, n) {
    if (da.current !== fa) throw Error(Ue(168));
    (ca(da, t), ca(pa, n));
}
function ba(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
    for (var i in (r = r.getChildContext())) if (!(i in t)) throw Error(Ue(108, Et(e) || 'Unknown', i));
    return _t({}, n, r);
}
function _a(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fa),
        (ha = da.current),
        ca(da, e),
        ca(pa, pa.current),
        !0
    );
}
function wa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(Ue(169));
    (n ? ((e = ba(e, t, ha)), (r.__reactInternalMemoizedMergedChildContext = e), ua(pa), ua(da), ca(da, e)) : ua(pa),
        ca(pa, n));
}
var ka = null,
    Sa = !1,
    xa = !1;
function Oa(e) {
    null === ka ? (ka = [e]) : ka.push(e);
}
function Ea() {
    if (!xa && null !== ka) {
        xa = !0;
        var e = 0,
            t = rr;
        try {
            var n = ka;
            for (rr = 1; e < n.length; e++) {
                var r = n[e];
                do {
                    r = r(!0);
                } while (null !== r);
            }
            ((ka = null), (Sa = !1));
        } catch (i) {
            throw (null !== ka && (ka = ka.slice(e + 1)), Nn(zn, Ea), i);
        } finally {
            ((rr = t), (xa = !1));
        }
    }
    return null;
}
var Pa = [],
    Ca = 0,
    Aa = null,
    Ta = 0,
    Na = [],
    ja = 0,
    Ra = null,
    La = 1,
    Ia = '';
function Ma(e, t) {
    ((Pa[Ca++] = Ta), (Pa[Ca++] = Aa), (Aa = e), (Ta = t));
}
function za(e, t, n) {
    ((Na[ja++] = La), (Na[ja++] = Ia), (Na[ja++] = Ra), (Ra = e));
    var r = La;
    e = Ia;
    var i = 32 - Wn(r) - 1;
    ((r &= ~(1 << i)), (n += 1));
    var o = 32 - Wn(t) + i;
    if (30 < o) {
        var a = i - (i % 5);
        ((o = (r & ((1 << a) - 1)).toString(32)),
            (r >>= a),
            (i -= a),
            (La = (1 << (32 - Wn(t) + i)) | (n << i) | r),
            (Ia = o + e));
    } else ((La = (1 << o) | (n << i) | r), (Ia = e));
}
function Da(e) {
    null !== e.return && (Ma(e, 1), za(e, 1, 0));
}
function Va(e) {
    for (; e === Aa; ) ((Aa = Pa[--Ca]), (Pa[Ca] = null), (Ta = Pa[--Ca]), (Pa[Ca] = null));
    for (; e === Ra; )
        ((Ra = Na[--ja]), (Na[ja] = null), (Ia = Na[--ja]), (Na[ja] = null), (La = Na[--ja]), (Na[ja] = null));
}
var Fa = null,
    Ba = null,
    Ua = !1,
    $a = null;
function Wa(e, t) {
    var n = vf(5, null, null, 0);
    ((n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Ha(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (Fa = e), (Ba = Go(t.firstChild)), !0)
            );
        case 6:
            return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (Fa = e), (Ba = null), !0)
            );
        case 13:
            return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ra ? { id: La, overflow: Ia } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = vf(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (Fa = e),
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
function Ga(e) {
    if (Ua) {
        var t = Ba;
        if (t) {
            var n = t;
            if (!Ha(e, t)) {
                if (qa(e)) throw Error(Ue(418));
                t = Go(n.nextSibling);
                var r = Fa;
                t && Ha(e, t) ? Wa(r, n) : ((e.flags = (-4097 & e.flags) | 2), (Ua = !1), (Fa = e));
            }
        } else {
            if (qa(e)) throw Error(Ue(418));
            ((e.flags = (-4097 & e.flags) | 2), (Ua = !1), (Fa = e));
        }
    }
}
function Ka(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
    Fa = e;
}
function Qa(e) {
    if (e !== Fa) return !1;
    if (!Ua) return (Ka(e), (Ua = !0), !1);
    var t;
    if (
        ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = 'head' !== (t = e.type) && 'body' !== t && !Fo(e.type, e.memoizedProps)),
        t && (t = Ba))
    ) {
        if (qa(e)) throw (Ya(), Error(Ue(418)));
        for (; t; ) (Wa(e, t), (t = Go(t.nextSibling)));
    }
    if ((Ka(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(Ue(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ('/$' === n) {
                        if (0 === t) {
                            Ba = Go(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
            }
            Ba = null;
        }
    } else Ba = Fa ? Go(e.stateNode.nextSibling) : null;
    return !0;
}
function Ya() {
    for (var e = Ba; e; ) e = Go(e.nextSibling);
}
function Xa() {
    ((Ba = Fa = null), (Ua = !1));
}
function Za(e) {
    null === $a ? ($a = [e]) : $a.push(e);
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
            var i = r,
                o = '' + e;
            return null !== t && null !== t.ref && 'function' == typeof t.ref && t.ref._stringRef === o
                ? t.ref
                : (((t = function (e) {
                      var t = i.refs;
                      null === e ? delete t[o] : (t[o] = e);
                  })._stringRef = o),
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
    function i(e, t) {
        return (((e = gf(e, t)).index = 0), (e.sibling = null), e);
    }
    function o(t, n, r) {
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
        return null === t || 6 !== t.tag ? (((t = wf(n, e.mode, r)).return = e), t) : (((t = i(t, n)).return = e), t);
    }
    function s(e, t, n, r) {
        var o = n.type;
        return o === at
            ? c(e, t, n.props.children, r, n.key)
            : null !== t &&
                (t.elementType === o || ('object' == typeof o && null !== o && o.$$typeof === vt && nl(o) === t.type))
              ? (((r = i(t, n.props)).ref = el(e, t, n)), (r.return = e), r)
              : (((r = yf(n.type, n.key, n.props, null, e.mode, r)).ref = el(e, t, n)), (r.return = e), r);
    }
    function u(e, t, n, r) {
        return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = kf(n, e.mode, r)).return = e), t)
            : (((t = i(t, n.children || [])).return = e), t);
    }
    function c(e, t, n, r, o) {
        return null === t || 7 !== t.tag
            ? (((t = bf(n, e.mode, r, o)).return = e), t)
            : (((t = i(t, n)).return = e), t);
    }
    function f(e, t, n) {
        if (('string' == typeof t && '' !== t) || 'number' == typeof t)
            return (((t = wf('' + t, e.mode, n)).return = e), t);
        if ('object' == typeof t && null !== t) {
            switch (t.$$typeof) {
                case it:
                    return (
                        ((n = yf(t.type, t.key, t.props, null, e.mode, n)).ref = el(e, null, t)),
                        (n.return = e),
                        n
                    );
                case ot:
                    return (((t = kf(t, e.mode, n)).return = e), t);
                case vt:
                    return f(e, (0, t._init)(t._payload), n);
            }
            if (Dt(t) || yt(t)) return (((t = bf(t, e.mode, n, null)).return = e), t);
            tl(e, t);
        }
        return null;
    }
    function d(e, t, n, r) {
        var i = null !== t ? t.key : null;
        if (('string' == typeof n && '' !== n) || 'number' == typeof n) return null !== i ? null : l(e, t, '' + n, r);
        if ('object' == typeof n && null !== n) {
            switch (n.$$typeof) {
                case it:
                    return n.key === i ? s(e, t, n, r) : null;
                case ot:
                    return n.key === i ? u(e, t, n, r) : null;
                case vt:
                    return d(e, t, (i = n._init)(n._payload), r);
            }
            if (Dt(n) || yt(n)) return null !== i ? null : c(e, t, n, r, null);
            tl(e, n);
        }
        return null;
    }
    function p(e, t, n, r, i) {
        if (('string' == typeof r && '' !== r) || 'number' == typeof r) return l(t, (e = e.get(n) || null), '' + r, i);
        if ('object' == typeof r && null !== r) {
            switch (r.$$typeof) {
                case it:
                    return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                case ot:
                    return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                case vt:
                    return p(e, t, n, (0, r._init)(r._payload), i);
            }
            if (Dt(r) || yt(r)) return c(t, (e = e.get(n) || null), r, i, null);
            tl(t, r);
        }
        return null;
    }
    return function l(s, u, c, h) {
        if (
            ('object' == typeof c && null !== c && c.type === at && null === c.key && (c = c.props.children),
            'object' == typeof c && null !== c)
        ) {
            switch (c.$$typeof) {
                case it:
                    e: {
                        for (var v = c.key, m = u; null !== m; ) {
                            if (m.key === v) {
                                if ((v = c.type) === at) {
                                    if (7 === m.tag) {
                                        (n(s, m.sibling), ((u = i(m, c.props.children)).return = s), (s = u));
                                        break e;
                                    }
                                } else if (
                                    m.elementType === v ||
                                    ('object' == typeof v && null !== v && v.$$typeof === vt && nl(v) === m.type)
                                ) {
                                    (n(s, m.sibling), ((u = i(m, c.props)).ref = el(s, m, c)), (u.return = s), (s = u));
                                    break e;
                                }
                                n(s, m);
                                break;
                            }
                            (t(s, m), (m = m.sibling));
                        }
                        c.type === at
                            ? (((u = bf(c.props.children, s.mode, h, c.key)).return = s), (s = u))
                            : (((h = yf(c.type, c.key, c.props, null, s.mode, h)).ref = el(s, u, c)),
                              (h.return = s),
                              (s = h));
                    }
                    return a(s);
                case ot:
                    e: {
                        for (m = c.key; null !== u; ) {
                            if (u.key === m) {
                                if (
                                    4 === u.tag &&
                                    u.stateNode.containerInfo === c.containerInfo &&
                                    u.stateNode.implementation === c.implementation
                                ) {
                                    (n(s, u.sibling), ((u = i(u, c.children || [])).return = s), (s = u));
                                    break e;
                                }
                                n(s, u);
                                break;
                            }
                            (t(s, u), (u = u.sibling));
                        }
                        (((u = kf(c, s.mode, h)).return = s), (s = u));
                    }
                    return a(s);
                case vt:
                    return l(s, u, (m = c._init)(c._payload), h);
            }
            if (Dt(c))
                return (function (i, a, l, s) {
                    for (var u = null, c = null, h = a, v = (a = 0), m = null; null !== h && v < l.length; v++) {
                        h.index > v ? ((m = h), (h = null)) : (m = h.sibling);
                        var g = d(i, h, l[v], s);
                        if (null === g) {
                            null === h && (h = m);
                            break;
                        }
                        (e && h && null === g.alternate && t(i, h),
                            (a = o(g, a, v)),
                            null === c ? (u = g) : (c.sibling = g),
                            (c = g),
                            (h = m));
                    }
                    if (v === l.length) return (n(i, h), Ua && Ma(i, v), u);
                    if (null === h) {
                        for (; v < l.length; v++)
                            null !== (h = f(i, l[v], s)) &&
                                ((a = o(h, a, v)), null === c ? (u = h) : (c.sibling = h), (c = h));
                        return (Ua && Ma(i, v), u);
                    }
                    for (h = r(i, h); v < l.length; v++)
                        null !== (m = p(h, i, v, l[v], s)) &&
                            (e && null !== m.alternate && h.delete(null === m.key ? v : m.key),
                            (a = o(m, a, v)),
                            null === c ? (u = m) : (c.sibling = m),
                            (c = m));
                    return (
                        e &&
                            h.forEach(function (e) {
                                return t(i, e);
                            }),
                        Ua && Ma(i, v),
                        u
                    );
                })(s, u, c, h);
            if (yt(c))
                return (function (i, a, l, s) {
                    var u = yt(l);
                    if ('function' != typeof u) throw Error(Ue(150));
                    if (null == (l = u.call(l))) throw Error(Ue(151));
                    for (
                        var c = (u = null), h = a, v = (a = 0), m = null, g = l.next();
                        null !== h && !g.done;
                        v++, g = l.next()
                    ) {
                        h.index > v ? ((m = h), (h = null)) : (m = h.sibling);
                        var y = d(i, h, g.value, s);
                        if (null === y) {
                            null === h && (h = m);
                            break;
                        }
                        (e && h && null === y.alternate && t(i, h),
                            (a = o(y, a, v)),
                            null === c ? (u = y) : (c.sibling = y),
                            (c = y),
                            (h = m));
                    }
                    if (g.done) return (n(i, h), Ua && Ma(i, v), u);
                    if (null === h) {
                        for (; !g.done; v++, g = l.next())
                            null !== (g = f(i, g.value, s)) &&
                                ((a = o(g, a, v)), null === c ? (u = g) : (c.sibling = g), (c = g));
                        return (Ua && Ma(i, v), u);
                    }
                    for (h = r(i, h); !g.done; v++, g = l.next())
                        null !== (g = p(h, i, v, g.value, s)) &&
                            (e && null !== g.alternate && h.delete(null === g.key ? v : g.key),
                            (a = o(g, a, v)),
                            null === c ? (u = g) : (c.sibling = g),
                            (c = g));
                    return (
                        e &&
                            h.forEach(function (e) {
                                return t(i, e);
                            }),
                        Ua && Ma(i, v),
                        u
                    );
                })(s, u, c, h);
            tl(s, c);
        }
        return ('string' == typeof c && '' !== c) || 'number' == typeof c
            ? ((c = '' + c),
              null !== u && 6 === u.tag
                  ? (n(s, u.sibling), ((u = i(u, c)).return = s), (s = u))
                  : (n(s, u), ((u = wf(c, s.mode, h)).return = s), (s = u)),
              a(s))
            : n(s, u);
    };
}
var il = rl(!0),
    ol = rl(!1),
    al = sa(null),
    ll = null,
    sl = null,
    ul = null;
function cl() {
    ul = sl = ll = null;
}
function fl(e) {
    var t = al.current;
    (ua(al), (e._currentValue = t));
}
function dl(e, t, n) {
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
        (ul = sl = null),
        null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (nu = !0), (e.firstContext = null)));
}
function hl(e) {
    var t = e._currentValue;
    if (ul !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), null === sl)) {
            if (null === ll) throw Error(Ue(308));
            ((sl = e), (ll.dependencies = { lanes: 0, firstContext: e }));
        } else sl = sl.next = e;
    return t;
}
var vl = null;
function ml(e) {
    null === vl ? (vl = [e]) : vl.push(e);
}
function gl(e, t, n, r) {
    var i = t.interleaved;
    return (null === i ? ((n.next = n), ml(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), yl(e, r));
}
function yl(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        ((e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return));
    return 3 === n.tag ? n.stateNode : null;
}
var bl = !1;
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
function kl(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Sl(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 0 != (2 & fc))) {
        var i = r.pending;
        return (null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), yl(e, n));
    }
    return (
        null === (i = r.interleaved) ? ((t.next = t), ml(r)) : ((t.next = i.next), (i.next = t)),
        (r.interleaved = t),
        yl(e, n)
    );
}
function xl(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), nr(e, n));
    }
}
function Ol(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
        var i = null,
            o = null;
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
                (null === o ? (i = o = a) : (o = o.next = a), (n = n.next));
            } while (null !== n);
            null === o ? (i = o = t) : (o = o.next = t);
        } else i = o = t;
        return (
            (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
            }),
            void (e.updateQueue = n)
        );
    }
    (null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t));
}
function El(e, t, n, r) {
    var i = e.updateQueue;
    bl = !1;
    var o = i.firstBaseUpdate,
        a = i.lastBaseUpdate,
        l = i.shared.pending;
    if (null !== l) {
        i.shared.pending = null;
        var s = l,
            u = s.next;
        ((s.next = null), null === a ? (o = u) : (a.next = u), (a = s));
        var c = e.alternate;
        null !== c &&
            (l = (c = c.updateQueue).lastBaseUpdate) !== a &&
            (null === l ? (c.firstBaseUpdate = u) : (l.next = u), (c.lastBaseUpdate = s));
    }
    if (null !== o) {
        var f = i.baseState;
        for (a = 0, c = u = s = null, l = o; ; ) {
            var d = l.lane,
                p = l.eventTime;
            if ((r & d) === d) {
                null !== c &&
                    (c = c.next =
                        { eventTime: p, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
                e: {
                    var h = e,
                        v = l;
                    switch (((d = t), (p = n), v.tag)) {
                        case 1:
                            if ('function' == typeof (h = v.payload)) {
                                f = h.call(p, f, d);
                                break e;
                            }
                            f = h;
                            break e;
                        case 3:
                            h.flags = (-65537 & h.flags) | 128;
                        case 0:
                            if (null == (d = 'function' == typeof (h = v.payload) ? h.call(p, f, d) : h)) break e;
                            f = _t({}, f, d);
                            break e;
                        case 2:
                            bl = !0;
                    }
                }
                null !== l.callback &&
                    0 !== l.lane &&
                    ((e.flags |= 64), null === (d = i.effects) ? (i.effects = [l]) : d.push(l));
            } else
                ((p = { eventTime: p, lane: d, tag: l.tag, payload: l.payload, callback: l.callback, next: null }),
                    null === c ? ((u = c = p), (s = f)) : (c = c.next = p),
                    (a |= d));
            if (null === (l = l.next)) {
                if (null === (l = i.shared.pending)) break;
                ((l = (d = l).next), (d.next = null), (i.lastBaseUpdate = d), (i.shared.pending = null));
            }
        }
        if (
            (null === c && (s = f),
            (i.baseState = s),
            (i.firstBaseUpdate = u),
            (i.lastBaseUpdate = c),
            null !== (t = i.shared.interleaved))
        ) {
            i = t;
            do {
                ((a |= i.lane), (i = i.next));
            } while (i !== t);
        } else null === o && (i.shared.lanes = 0);
        ((bc |= a), (e.lanes = a), (e.memoizedState = f));
    }
}
function Pl(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (null !== i) {
                if (((r.callback = null), (r = n), 'function' != typeof i)) throw Error(Ue(191, i));
                i.call(r);
            }
        }
}
var Cl = {},
    Al = sa(Cl),
    Tl = sa(Cl),
    Nl = sa(Cl);
function jl(e) {
    if (e === Cl) throw Error(Ue(174));
    return e;
}
function Rl(e, t) {
    switch ((ca(Nl, t), ca(Tl, e), ca(Al, Cl), (e = t.nodeType))) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ht(null, '');
            break;
        default:
            t = Ht((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
    }
    (ua(Al), ca(Al, t));
}
function Ll() {
    (ua(Al), ua(Tl), ua(Nl));
}
function Il(e) {
    jl(Nl.current);
    var t = jl(Al.current),
        n = Ht(t, e.type);
    t !== n && (ca(Tl, e), ca(Al, n));
}
function Ml(e) {
    Tl.current === e && (ua(Al), ua(Tl));
}
var zl = sa(0);
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
var Vl = [];
function Fl() {
    for (var e = 0; e < Vl.length; e++) Vl[e]._workInProgressVersionPrimary = null;
    Vl.length = 0;
}
var Bl = rt.ReactCurrentDispatcher,
    Ul = rt.ReactCurrentBatchConfig,
    $l = 0,
    Wl = null,
    Hl = null,
    ql = null,
    Gl = !1,
    Kl = !1,
    Ql = 0,
    Yl = 0;
function Xl() {
    throw Error(Ue(321));
}
function Zl(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Wi(e[n], t[n])) return !1;
    return !0;
}
function Jl(e, t, n, r, i, o) {
    if (
        (($l = o),
        (Wl = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Bl.current = null === e || null === e.memoizedState ? Ms : zs),
        (e = n(r, i)),
        Kl)
    ) {
        o = 0;
        do {
            if (((Kl = !1), (Ql = 0), 25 <= o)) throw Error(Ue(301));
            ((o += 1), (ql = Hl = null), (t.updateQueue = null), (Bl.current = Ds), (e = n(r, i)));
        } while (Kl);
    }
    if (((Bl.current = Is), (t = null !== Hl && null !== Hl.next), ($l = 0), (ql = Hl = Wl = null), (Gl = !1), t))
        throw Error(Ue(300));
    return e;
}
function es() {
    var e = 0 !== Ql;
    return ((Ql = 0), e);
}
function ts() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (null === ql ? (Wl.memoizedState = ql = e) : (ql = ql.next = e), ql);
}
function ns() {
    if (null === Hl) {
        var e = Wl.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = Hl.next;
    var t = null === ql ? Wl.memoizedState : ql.next;
    if (null !== t) ((ql = t), (Hl = e));
    else {
        if (null === e) throw Error(Ue(310));
        ((e = {
            memoizedState: (Hl = e).memoizedState,
            baseState: Hl.baseState,
            baseQueue: Hl.baseQueue,
            queue: Hl.queue,
            next: null,
        }),
            null === ql ? (Wl.memoizedState = ql = e) : (ql = ql.next = e));
    }
    return ql;
}
function rs(e, t) {
    return 'function' == typeof t ? t(e) : t;
}
function is(e) {
    var t = ns(),
        n = t.queue;
    if (null === n) throw Error(Ue(311));
    n.lastRenderedReducer = e;
    var r = Hl,
        i = r.baseQueue,
        o = n.pending;
    if (null !== o) {
        if (null !== i) {
            var a = i.next;
            ((i.next = o.next), (o.next = a));
        }
        ((r.baseQueue = i = o), (n.pending = null));
    }
    if (null !== i) {
        ((o = i.next), (r = r.baseState));
        var l = (a = null),
            s = null,
            u = o;
        do {
            var c = u.lane;
            if (($l & c) === c)
                (null !== s &&
                    (s = s.next =
                        {
                            lane: 0,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null,
                        }),
                    (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                };
                (null === s ? ((l = s = f), (a = r)) : (s = s.next = f), (Wl.lanes |= c), (bc |= c));
            }
            u = u.next;
        } while (null !== u && u !== o);
        (null === s ? (a = r) : (s.next = l),
            Wi(r, t.memoizedState) || (nu = !0),
            (t.memoizedState = r),
            (t.baseState = a),
            (t.baseQueue = s),
            (n.lastRenderedState = r));
    }
    if (null !== (e = n.interleaved)) {
        i = e;
        do {
            ((o = i.lane), (Wl.lanes |= o), (bc |= o), (i = i.next));
        } while (i !== e);
    } else null === i && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function os(e) {
    var t = ns(),
        n = t.queue;
    if (null === n) throw Error(Ue(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
    if (null !== i) {
        n.pending = null;
        var a = (i = i.next);
        do {
            ((o = e(o, a.action)), (a = a.next));
        } while (a !== i);
        (Wi(o, t.memoizedState) || (nu = !0),
            (t.memoizedState = o),
            null === t.baseQueue && (t.baseState = o),
            (n.lastRenderedState = o));
    }
    return [o, r];
}
function as() {}
function ls(e, t) {
    var n = Wl,
        r = ns(),
        i = t(),
        o = !Wi(r.memoizedState, i);
    if (
        (o && ((r.memoizedState = i), (nu = !0)),
        (r = r.queue),
        bs(cs.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (null !== ql && 1 & ql.memoizedState.tag))
    ) {
        if (((n.flags |= 2048), hs(9, us.bind(null, n, r, i, t), void 0, null), null === dc)) throw Error(Ue(349));
        0 != (30 & $l) || ss(n, t, i);
    }
    return i;
}
function ss(e, t, n) {
    ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = Wl.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (Wl.updateQueue = t), (t.stores = [e]))
            : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e));
}
function us(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), fs(t) && ds(e));
}
function cs(e, t, n) {
    return n(function () {
        fs(t) && ds(e);
    });
}
function fs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Wi(e, n);
    } catch (r) {
        return !0;
    }
}
function ds(e) {
    var t = yl(e, 1);
    null !== t && Vc(t, e, 1, -1);
}
function ps(e) {
    var t = ts();
    return (
        'function' == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: rs,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Ns.bind(null, Wl, e)),
        [t.memoizedState, e]
    );
}
function hs(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = Wl.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (Wl.updateQueue = t), (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
    );
}
function vs() {
    return ns().memoizedState;
}
function ms(e, t, n, r) {
    var i = ts();
    ((Wl.flags |= e), (i.memoizedState = hs(1 | t, n, void 0, void 0 === r ? null : r)));
}
function gs(e, t, n, r) {
    var i = ns();
    r = void 0 === r ? null : r;
    var o = void 0;
    if (null !== Hl) {
        var a = Hl.memoizedState;
        if (((o = a.destroy), null !== r && Zl(r, a.deps))) return void (i.memoizedState = hs(t, n, o, r));
    }
    ((Wl.flags |= e), (i.memoizedState = hs(1 | t, n, o, r)));
}
function ys(e, t) {
    return ms(8390656, 8, e, t);
}
function bs(e, t) {
    return gs(2048, 8, e, t);
}
function _s(e, t) {
    return gs(4, 2, e, t);
}
function ws(e, t) {
    return gs(4, 4, e, t);
}
function ks(e, t) {
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
function Ss(e, t, n) {
    return ((n = null != n ? n.concat([e]) : null), gs(4, 4, ks.bind(null, t, e), n));
}
function xs() {}
function Os(e, t) {
    var n = ns();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Zl(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Es(e, t) {
    var n = ns();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Zl(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ps(e, t, n) {
    return 0 == (21 & $l)
        ? (e.baseState && ((e.baseState = !1), (nu = !0)), (e.memoizedState = n))
        : (Wi(n, t) || ((n = Jn()), (Wl.lanes |= n), (bc |= n), (e.baseState = !0)), t);
}
function Cs(e, t) {
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
function As() {
    return ns().memoizedState;
}
function Ts(e, t, n) {
    var r = Dc(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), js(e))) Rs(t, n);
    else if (null !== (n = gl(e, t, n, r))) {
        (Vc(n, e, r, zc()), Ls(n, t, r));
    }
}
function Ns(e, t, n) {
    var r = Dc(e),
        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (js(e)) Rs(t, i);
    else {
        var o = e.alternate;
        if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer))
            try {
                var a = t.lastRenderedState,
                    l = o(a, n);
                if (((i.hasEagerState = !0), (i.eagerState = l), Wi(l, a))) {
                    var s = t.interleaved;
                    return (
                        null === s ? ((i.next = i), ml(t)) : ((i.next = s.next), (s.next = i)),
                        void (t.interleaved = i)
                    );
                }
            } catch (u) {}
        null !== (n = gl(e, t, i, r)) && (Vc(n, e, r, (i = zc())), Ls(n, t, r));
    }
}
function js(e) {
    var t = e.alternate;
    return e === Wl || (null !== t && t === Wl);
}
function Rs(e, t) {
    Kl = Gl = !0;
    var n = e.pending;
    (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
}
function Ls(e, t, n) {
    if (0 != (4194240 & n)) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), nr(e, n));
    }
}
var Is = {
        readContext: hl,
        useCallback: Xl,
        useContext: Xl,
        useEffect: Xl,
        useImperativeHandle: Xl,
        useInsertionEffect: Xl,
        useLayoutEffect: Xl,
        useMemo: Xl,
        useReducer: Xl,
        useRef: Xl,
        useState: Xl,
        useDebugValue: Xl,
        useDeferredValue: Xl,
        useTransition: Xl,
        useMutableSource: Xl,
        useSyncExternalStore: Xl,
        useId: Xl,
        unstable_isNewReconciler: !1,
    },
    Ms = {
        readContext: hl,
        useCallback: function (e, t) {
            return ((ts().memoizedState = [e, void 0 === t ? null : t]), e);
        },
        useContext: hl,
        useEffect: ys,
        useImperativeHandle: function (e, t, n) {
            return ((n = null != n ? n.concat([e]) : null), ms(4194308, 4, ks.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
            return ms(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return ms(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = ts();
            return ((t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
        },
        useReducer: function (e, t, n) {
            var r = ts();
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
                (e = e.dispatch = Ts.bind(null, Wl, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            return ((e = { current: e }), (ts().memoizedState = e));
        },
        useState: ps,
        useDebugValue: xs,
        useDeferredValue: function (e) {
            return (ts().memoizedState = e);
        },
        useTransition: function () {
            var e = ps(!1),
                t = e[0];
            return ((e = Cs.bind(null, e[1])), (ts().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = Wl,
                i = ts();
            if (Ua) {
                if (void 0 === n) throw Error(Ue(407));
                n = n();
            } else {
                if (((n = t()), null === dc)) throw Error(Ue(349));
                0 != (30 & $l) || ss(r, t, n);
            }
            i.memoizedState = n;
            var o = { value: n, getSnapshot: t };
            return (
                (i.queue = o),
                ys(cs.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                hs(9, us.bind(null, r, o, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = ts(),
                t = dc.identifierPrefix;
            if (Ua) {
                var n = Ia;
                ((t = ':' + t + 'R' + (n = (La & ~(1 << (32 - Wn(La) - 1))).toString(32) + n)),
                    0 < (n = Ql++) && (t += 'H' + n.toString(32)),
                    (t += ':'));
            } else t = ':' + t + 'r' + (n = Yl++).toString(32) + ':';
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    zs = {
        readContext: hl,
        useCallback: Os,
        useContext: hl,
        useEffect: bs,
        useImperativeHandle: Ss,
        useInsertionEffect: _s,
        useLayoutEffect: ws,
        useMemo: Es,
        useReducer: is,
        useRef: vs,
        useState: function () {
            return is(rs);
        },
        useDebugValue: xs,
        useDeferredValue: function (e) {
            return Ps(ns(), Hl.memoizedState, e);
        },
        useTransition: function () {
            return [is(rs)[0], ns().memoizedState];
        },
        useMutableSource: as,
        useSyncExternalStore: ls,
        useId: As,
        unstable_isNewReconciler: !1,
    },
    Ds = {
        readContext: hl,
        useCallback: Os,
        useContext: hl,
        useEffect: bs,
        useImperativeHandle: Ss,
        useInsertionEffect: _s,
        useLayoutEffect: ws,
        useMemo: Es,
        useReducer: os,
        useRef: vs,
        useState: function () {
            return os(rs);
        },
        useDebugValue: xs,
        useDeferredValue: function (e) {
            var t = ns();
            return null === Hl ? (t.memoizedState = e) : Ps(t, Hl.memoizedState, e);
        },
        useTransition: function () {
            return [os(rs)[0], ns().memoizedState];
        },
        useMutableSource: as,
        useSyncExternalStore: ls,
        useId: As,
        unstable_isNewReconciler: !1,
    };
function Vs(e, t) {
    if (e && e.defaultProps) {
        for (var n in ((t = _t({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
    }
    return t;
}
function Fs(e, t, n, r) {
    ((n = null == (n = n(r, (t = e.memoizedState))) ? t : _t({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n));
}
var Bs = {
    isMounted: function (e) {
        return !!(e = e._reactInternals) && En(e) === e;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = zc(),
            i = Dc(e),
            o = kl(r, i);
        ((o.payload = t), null != n && (o.callback = n), null !== (t = Sl(e, o, i)) && (Vc(t, e, i, r), xl(t, e, i)));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = zc(),
            i = Dc(e),
            o = kl(r, i);
        ((o.tag = 1),
            (o.payload = t),
            null != n && (o.callback = n),
            null !== (t = Sl(e, o, i)) && (Vc(t, e, i, r), xl(t, e, i)));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = zc(),
            r = Dc(e),
            i = kl(n, r);
        ((i.tag = 2), null != t && (i.callback = t), null !== (t = Sl(e, i, r)) && (Vc(t, e, r, n), xl(t, e, r)));
    },
};
function Us(e, t, n, r, i, o, a) {
    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, o, a)
        : !t.prototype || !t.prototype.isPureReactComponent || !Hi(n, r) || !Hi(i, o);
}
function $s(e, t, n) {
    var r = !1,
        i = fa,
        o = t.contextType;
    return (
        'object' == typeof o && null !== o
            ? (o = hl(o))
            : ((i = ma(t) ? ha : da.current), (o = (r = null != (r = t.contextTypes)) ? va(e, i) : fa)),
        (t = new t(n, o)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = Bs),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
    );
}
function Ws(e, t, n, r) {
    ((e = t.state),
        'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Bs.enqueueReplaceState(t, t.state, null));
}
function Hs(e, t, n, r) {
    var i = e.stateNode;
    ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), _l(e));
    var o = t.contextType;
    ('object' == typeof o && null !== o ? (i.context = hl(o)) : ((o = ma(t) ? ha : da.current), (i.context = va(e, o))),
        (i.state = e.memoizedState),
        'function' == typeof (o = t.getDerivedStateFromProps) && (Fs(e, t, o, n), (i.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof i.getSnapshotBeforeUpdate ||
            ('function' != typeof i.UNSAFE_componentWillMount && 'function' != typeof i.componentWillMount) ||
            ((t = i.state),
            'function' == typeof i.componentWillMount && i.componentWillMount(),
            'function' == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(),
            t !== i.state && Bs.enqueueReplaceState(i, i.state, null),
            El(e, n, i, r),
            (i.state = e.memoizedState)),
        'function' == typeof i.componentDidMount && (e.flags |= 4194308));
}
function qs(e, t) {
    try {
        var n = '',
            r = t;
        do {
            ((n += xt(r)), (r = r.return));
        } while (r);
        var i = n;
    } catch (o) {
        i = '\nError generating stack: ' + o.message + '\n' + o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
}
function Gs(e, t, n) {
    return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null };
}
function Ks(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Qs = 'function' == typeof WeakMap ? WeakMap : Map;
function Ys(e, t, n) {
    (((n = kl(-1, n)).tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
        (n.callback = function () {
            (Pc || ((Pc = !0), (Cc = r)), Ks(0, t));
        }),
        n
    );
}
function Xs(e, t, n) {
    (n = kl(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ('function' == typeof r) {
        var i = t.value;
        ((n.payload = function () {
            return r(i);
        }),
            (n.callback = function () {
                Ks(0, t);
            }));
    }
    var o = e.stateNode;
    return (
        null !== o &&
            'function' == typeof o.componentDidCatch &&
            (n.callback = function () {
                (Ks(0, t), 'function' != typeof r && (null === Ac ? (Ac = new Set([this])) : Ac.add(this)));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
            }),
        n
    );
}
function Zs(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new Qs();
        var i = new Set();
        r.set(t, i);
    } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = uf.bind(null, e, t, n)), t.then(e, e));
}
function Js(e) {
    do {
        var t;
        if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e;
        e = e.return;
    } while (null !== e);
    return null;
}
function eu(e, t, n, r, i) {
    return 0 == (1 & e.mode)
        ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                1 === n.tag && (null === n.alternate ? (n.tag = 17) : (((t = kl(-1, 1)).tag = 2), Sl(n, t, 1))),
                (n.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = i), e);
}
var tu = rt.ReactCurrentOwner,
    nu = !1;
function ru(e, t, n, r) {
    t.child = null === e ? ol(t, null, n, r) : il(t, e.child, n, r);
}
function iu(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return (
        pl(t, i),
        (r = Jl(e, t, n, r, o, i)),
        (n = es()),
        null === e || nu
            ? (Ua && n && Da(t), (t.flags |= 1), ru(e, t, r, i), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Pu(e, t, i))
    );
}
function ou(e, t, n, r, i) {
    if (null === e) {
        var o = n.type;
        return 'function' != typeof o ||
            mf(o) ||
            void 0 !== o.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = yf(n.type, null, r, t, t.mode, i)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = o), au(e, t, o, r, i));
    }
    if (((o = e.child), 0 == (e.lanes & i))) {
        var a = o.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : Hi)(a, r) && e.ref === t.ref) return Pu(e, t, i);
    }
    return ((t.flags |= 1), ((e = gf(o, r)).ref = t.ref), (e.return = t), (t.child = e));
}
function au(e, t, n, r, i) {
    if (null !== e) {
        var o = e.memoizedProps;
        if (Hi(o, r) && e.ref === t.ref) {
            if (((nu = !1), (t.pendingProps = r = o), 0 == (e.lanes & i))) return ((t.lanes = e.lanes), Pu(e, t, i));
            0 != (131072 & e.flags) && (nu = !0);
        }
    }
    return uu(e, t, n, r, i);
}
function lu(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = null !== e ? e.memoizedState : null;
    if ('hidden' === r.mode)
        if (0 == (1 & t.mode))
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ca(mc, vc), (vc |= n));
        else {
            if (0 == (1073741824 & n))
                return (
                    (e = null !== o ? o.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    ca(mc, vc),
                    (vc |= e),
                    null
                );
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== o ? o.baseLanes : n),
                ca(mc, vc),
                (vc |= r));
        }
    else (null !== o ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), ca(mc, vc), (vc |= r));
    return (ru(e, t, i, n), t.child);
}
function su(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function uu(e, t, n, r, i) {
    var o = ma(n) ? ha : da.current;
    return (
        (o = va(t, o)),
        pl(t, i),
        (n = Jl(e, t, n, r, o, i)),
        (r = es()),
        null === e || nu
            ? (Ua && r && Da(t), (t.flags |= 1), ru(e, t, n, i), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Pu(e, t, i))
    );
}
function cu(e, t, n, r, i) {
    if (ma(n)) {
        var o = !0;
        _a(t);
    } else o = !1;
    if ((pl(t, i), null === t.stateNode)) (Eu(e, t), $s(t, n, r), Hs(t, n, r, i), (r = !0));
    else if (null === e) {
        var a = t.stateNode,
            l = t.memoizedProps;
        a.props = l;
        var s = a.context,
            u = n.contextType;
        'object' == typeof u && null !== u ? (u = hl(u)) : (u = va(t, (u = ma(n) ? ha : da.current)));
        var c = n.getDerivedStateFromProps,
            f = 'function' == typeof c || 'function' == typeof a.getSnapshotBeforeUpdate;
        (f ||
            ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
                'function' != typeof a.componentWillReceiveProps) ||
            ((l !== r || s !== u) && Ws(t, a, r, u)),
            (bl = !1));
        var d = t.memoizedState;
        ((a.state = d),
            El(t, r, a, i),
            (s = t.memoizedState),
            l !== r || d !== s || pa.current || bl
                ? ('function' == typeof c && (Fs(t, n, c, r), (s = t.memoizedState)),
                  (l = bl || Us(t, n, l, r, d, s, u))
                      ? (f ||
                            ('function' != typeof a.UNSAFE_componentWillMount &&
                                'function' != typeof a.componentWillMount) ||
                            ('function' == typeof a.componentWillMount && a.componentWillMount(),
                            'function' == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()),
                        'function' == typeof a.componentDidMount && (t.flags |= 4194308))
                      : ('function' == typeof a.componentDidMount && (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = s)),
                  (a.props = r),
                  (a.state = s),
                  (a.context = u),
                  (r = l))
                : ('function' == typeof a.componentDidMount && (t.flags |= 4194308), (r = !1)));
    } else {
        ((a = t.stateNode),
            wl(e, t),
            (l = t.memoizedProps),
            (u = t.type === t.elementType ? l : Vs(t.type, l)),
            (a.props = u),
            (f = t.pendingProps),
            (d = a.context),
            'object' == typeof (s = n.contextType) && null !== s
                ? (s = hl(s))
                : (s = va(t, (s = ma(n) ? ha : da.current))));
        var p = n.getDerivedStateFromProps;
        ((c = 'function' == typeof p || 'function' == typeof a.getSnapshotBeforeUpdate) ||
            ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
                'function' != typeof a.componentWillReceiveProps) ||
            ((l !== f || d !== s) && Ws(t, a, r, s)),
            (bl = !1),
            (d = t.memoizedState),
            (a.state = d),
            El(t, r, a, i));
        var h = t.memoizedState;
        l !== f || d !== h || pa.current || bl
            ? ('function' == typeof p && (Fs(t, n, p, r), (h = t.memoizedState)),
              (u = bl || Us(t, n, u, r, d, h, s) || !1)
                  ? (c ||
                        ('function' != typeof a.UNSAFE_componentWillUpdate &&
                            'function' != typeof a.componentWillUpdate) ||
                        ('function' == typeof a.componentWillUpdate && a.componentWillUpdate(r, h, s),
                        'function' == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, h, s)),
                    'function' == typeof a.componentDidUpdate && (t.flags |= 4),
                    'function' == typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ('function' != typeof a.componentDidUpdate ||
                        (l === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 4),
                    'function' != typeof a.getSnapshotBeforeUpdate ||
                        (l === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
              (a.props = r),
              (a.state = h),
              (a.context = s),
              (r = u))
            : ('function' != typeof a.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
              'function' != typeof a.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return fu(e, t, n, r, o, i);
}
function fu(e, t, n, r, i, o) {
    su(e, t);
    var a = 0 != (128 & t.flags);
    if (!r && !a) return (i && wa(t, n, !1), Pu(e, t, o));
    ((r = t.stateNode), (tu.current = t));
    var l = a && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
    return (
        (t.flags |= 1),
        null !== e && a ? ((t.child = il(t, e.child, null, o)), (t.child = il(t, null, l, o))) : ru(e, t, l, o),
        (t.memoizedState = r.state),
        i && wa(t, n, !0),
        t.child
    );
}
function du(e) {
    var t = e.stateNode;
    (t.pendingContext ? ya(0, t.pendingContext, t.pendingContext !== t.context) : t.context && ya(0, t.context, !1),
        Rl(e, t.containerInfo));
}
function pu(e, t, n, r, i) {
    return (Xa(), Za(i), (t.flags |= 256), ru(e, t, n, r), t.child);
}
var hu,
    vu,
    mu,
    gu,
    yu = { dehydrated: null, treeContext: null, retryLane: 0 };
function bu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function _u(e, t, n) {
    var r,
        i = t.pendingProps,
        o = zl.current,
        a = !1,
        l = 0 != (128 & t.flags);
    if (
        ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)),
        r ? ((a = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (o |= 1),
        ca(zl, 1 & o),
        null === e)
    )
        return (
            Ga(t),
            null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 == (1 & t.mode) ? (t.lanes = 1) : '$!' === e.data ? (t.lanes = 8) : (t.lanes = 1073741824), null)
                : ((l = i.children),
                  (e = i.fallback),
                  a
                      ? ((i = t.mode),
                        (a = t.child),
                        (l = { mode: 'hidden', children: l }),
                        0 == (1 & i) && null !== a
                            ? ((a.childLanes = 0), (a.pendingProps = l))
                            : (a = _f(l, i, 0, null)),
                        (e = bf(e, i, n, null)),
                        (a.return = t),
                        (e.return = t),
                        (a.sibling = e),
                        (t.child = a),
                        (t.child.memoizedState = bu(n)),
                        (t.memoizedState = yu),
                        e)
                      : wu(t, l))
        );
    if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
        return (function (e, t, n, r, i, o, a) {
            if (n)
                return 256 & t.flags
                    ? ((t.flags &= -257), ku(e, t, a, (r = Gs(Error(Ue(422))))))
                    : null !== t.memoizedState
                      ? ((t.child = e.child), (t.flags |= 128), null)
                      : ((o = r.fallback),
                        (i = t.mode),
                        (r = _f({ mode: 'visible', children: r.children }, i, 0, null)),
                        ((o = bf(o, i, a, null)).flags |= 2),
                        (r.return = t),
                        (o.return = t),
                        (r.sibling = o),
                        (t.child = r),
                        0 != (1 & t.mode) && il(t, e.child, null, a),
                        (t.child.memoizedState = bu(a)),
                        (t.memoizedState = yu),
                        o);
            if (0 == (1 & t.mode)) return ku(e, t, a, null);
            if ('$!' === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset)) var l = r.dgst;
                return ((r = l), ku(e, t, a, (r = Gs((o = Error(Ue(419))), r, void 0))));
            }
            if (((l = 0 != (a & e.childLanes)), nu || l)) {
                if (null !== (r = dc)) {
                    switch (a & -a) {
                        case 4:
                            i = 2;
                            break;
                        case 16:
                            i = 8;
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
                            i = 32;
                            break;
                        case 536870912:
                            i = 268435456;
                            break;
                        default:
                            i = 0;
                    }
                    0 !== (i = 0 != (i & (r.suspendedLanes | a)) ? 0 : i) &&
                        i !== o.retryLane &&
                        ((o.retryLane = i), yl(e, i), Vc(r, e, i, -1));
                }
                return (Zc(), ku(e, t, a, (r = Gs(Error(Ue(421))))));
            }
            return '$?' === i.data
                ? ((t.flags |= 128), (t.child = e.child), (t = ff.bind(null, e)), (i._reactRetry = t), null)
                : ((e = o.treeContext),
                  (Ba = Go(i.nextSibling)),
                  (Fa = t),
                  (Ua = !0),
                  ($a = null),
                  null !== e &&
                      ((Na[ja++] = La), (Na[ja++] = Ia), (Na[ja++] = Ra), (La = e.id), (Ia = e.overflow), (Ra = t)),
                  (t = wu(t, r.children)),
                  (t.flags |= 4096),
                  t);
        })(e, t, l, i, r, o, n);
    if (a) {
        ((a = i.fallback), (l = t.mode), (r = (o = e.child).sibling));
        var s = { mode: 'hidden', children: i.children };
        return (
            0 == (1 & l) && t.child !== o
                ? (((i = t.child).childLanes = 0), (i.pendingProps = s), (t.deletions = null))
                : ((i = gf(o, s)).subtreeFlags = 14680064 & o.subtreeFlags),
            null !== r ? (a = gf(r, a)) : ((a = bf(a, l, n, null)).flags |= 2),
            (a.return = t),
            (i.return = t),
            (i.sibling = a),
            (t.child = i),
            (i = a),
            (a = t.child),
            (l =
                null === (l = e.child.memoizedState)
                    ? bu(n)
                    : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
            (a.memoizedState = l),
            (a.childLanes = e.childLanes & ~n),
            (t.memoizedState = yu),
            i
        );
    }
    return (
        (e = (a = e.child).sibling),
        (i = gf(a, { mode: 'visible', children: i.children })),
        0 == (1 & t.mode) && (i.lanes = n),
        (i.return = t),
        (i.sibling = null),
        null !== e && (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = i),
        (t.memoizedState = null),
        i
    );
}
function wu(e, t) {
    return (((t = _f({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t));
}
function ku(e, t, n, r) {
    return (
        null !== r && Za(r),
        il(t, e.child, null, n),
        ((e = wu(t, t.pendingProps.children)).flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function Su(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (null !== r && (r.lanes |= t), dl(e.return, t, n));
}
function xu(e, t, n, r, i) {
    var o = e.memoizedState;
    null === o
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i));
}
function Ou(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if ((ru(e, t, r.children, n), 0 != (2 & (r = zl.current)))) ((r = (1 & r) | 2), (t.flags |= 128));
    else {
        if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Su(e, n, t);
                else if (19 === e.tag) Su(e, n, t);
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
    if ((ca(zl, r), 0 == (1 & t.mode))) t.memoizedState = null;
    else
        switch (i) {
            case 'forwards':
                for (n = t.child, i = null; null !== n; )
                    (null !== (e = n.alternate) && null === Dl(e) && (i = n), (n = n.sibling));
                (null === (n = i) ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
                    xu(t, !1, i, n, o));
                break;
            case 'backwards':
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                    if (null !== (e = i.alternate) && null === Dl(e)) {
                        t.child = i;
                        break;
                    }
                    ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
                }
                xu(t, !0, n, null, o);
                break;
            case 'together':
                xu(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Eu(e, t) {
    0 == (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Pu(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (bc |= t.lanes), 0 == (n & t.childLanes))) return null;
    if (null !== e && t.child !== e.child) throw Error(Ue(153));
    if (null !== t.child) {
        for (n = gf((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            ((e = e.sibling), ((n = n.sibling = gf(e, e.pendingProps)).return = t));
        n.sibling = null;
    }
    return t.child;
}
function Cu(e, t) {
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
function Au(e) {
    var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; null !== i; )
            ((n |= i.lanes | i.childLanes),
                (r |= 14680064 & i.subtreeFlags),
                (r |= 14680064 & i.flags),
                (i.return = e),
                (i = i.sibling));
    else
        for (i = e.child; null !== i; )
            ((n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Tu(e, t, n) {
    var r = t.pendingProps;
    switch ((Va(t), t.tag)) {
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
            return (Au(t), null);
        case 1:
        case 17:
            return (ma(t.type) && ga(), Au(t), null);
        case 3:
            return (
                (r = t.stateNode),
                Ll(),
                ua(pa),
                ua(da),
                Fl(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                    (Qa(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                          ((t.flags |= 1024), null !== $a && ($c($a), ($a = null)))),
                vu(e, t),
                Au(t),
                null
            );
        case 5:
            Ml(t);
            var i = jl(Nl.current);
            if (((n = t.type), null !== e && null != t.stateNode))
                (mu(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(Ue(166));
                    return (Au(t), null);
                }
                if (((e = jl(Al.current)), Qa(t))) {
                    ((r = t.stateNode), (n = t.type));
                    var o = t.memoizedProps;
                    switch (((r[Yo] = t), (r[Xo] = o), (e = 0 != (1 & t.mode)), n)) {
                        case 'dialog':
                            (So('cancel', r), So('close', r));
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            So('load', r);
                            break;
                        case 'video':
                        case 'audio':
                            for (i = 0; i < bo.length; i++) So(bo[i], r);
                            break;
                        case 'source':
                            So('error', r);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            (So('error', r), So('load', r));
                            break;
                        case 'details':
                            So('toggle', r);
                            break;
                        case 'input':
                            (Rt(r, o), So('invalid', r));
                            break;
                        case 'select':
                            ((r._wrapperState = { wasMultiple: !!o.multiple }), So('invalid', r));
                            break;
                        case 'textarea':
                            (Bt(r, o), So('invalid', r));
                    }
                    for (var a in (tn(n, o), (i = null), o))
                        if (o.hasOwnProperty(a)) {
                            var l = o[a];
                            'children' === a
                                ? 'string' == typeof l
                                    ? r.textContent !== l &&
                                      (!0 !== o.suppressHydrationWarning && Mo(r.textContent, l, e),
                                      (i = ['children', l]))
                                    : 'number' == typeof l &&
                                      r.textContent !== '' + l &&
                                      (!0 !== o.suppressHydrationWarning && Mo(r.textContent, l, e),
                                      (i = ['children', '' + l]))
                                : We.hasOwnProperty(a) && null != l && 'onScroll' === a && So('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            (At(r), Mt(r, o, !0));
                            break;
                        case 'textarea':
                            (At(r), $t(r));
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            'function' == typeof o.onClick && (r.onclick = zo);
                    }
                    ((r = i), (t.updateQueue = r), null !== r && (t.flags |= 4));
                } else {
                    ((a = 9 === i.nodeType ? i : i.ownerDocument),
                        'http://www.w3.org/1999/xhtml' === e && (e = Wt(n)),
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
                        (e[Yo] = t),
                        (e[Xo] = r),
                        hu(e, t, !1, !1),
                        (t.stateNode = e));
                    e: {
                        switch (((a = nn(n, r)), n)) {
                            case 'dialog':
                                (So('cancel', e), So('close', e), (i = r));
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                (So('load', e), (i = r));
                                break;
                            case 'video':
                            case 'audio':
                                for (i = 0; i < bo.length; i++) So(bo[i], e);
                                i = r;
                                break;
                            case 'source':
                                (So('error', e), (i = r));
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                (So('error', e), So('load', e), (i = r));
                                break;
                            case 'details':
                                (So('toggle', e), (i = r));
                                break;
                            case 'input':
                                (Rt(e, r), (i = jt(e, r)), So('invalid', e));
                                break;
                            case 'option':
                            default:
                                i = r;
                                break;
                            case 'select':
                                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (i = _t({}, r, { value: void 0 })),
                                    So('invalid', e));
                                break;
                            case 'textarea':
                                (Bt(e, r), (i = Ft(e, r)), So('invalid', e));
                        }
                        for (o in (tn(n, i), (l = i)))
                            if (l.hasOwnProperty(o)) {
                                var s = l[o];
                                'style' === o
                                    ? Jt(e, s)
                                    : 'dangerouslySetInnerHTML' === o
                                      ? null != (s = s ? s.__html : void 0) && Kt(e, s)
                                      : 'children' === o
                                        ? 'string' == typeof s
                                            ? ('textarea' !== n || '' !== s) && Qt(e, s)
                                            : 'number' == typeof s && Qt(e, '' + s)
                                        : 'suppressContentEditableWarning' !== o &&
                                          'suppressHydrationWarning' !== o &&
                                          'autoFocus' !== o &&
                                          (We.hasOwnProperty(o)
                                              ? null != s && 'onScroll' === o && So('scroll', e)
                                              : null != s && nt(e, o, s, a));
                            }
                        switch (n) {
                            case 'input':
                                (At(e), Mt(e, r, !1));
                                break;
                            case 'textarea':
                                (At(e), $t(e));
                                break;
                            case 'option':
                                null != r.value && e.setAttribute('value', '' + Pt(r.value));
                                break;
                            case 'select':
                                ((e.multiple = !!r.multiple),
                                    null != (o = r.value)
                                        ? Vt(e, !!r.multiple, o, !1)
                                        : null != r.defaultValue && Vt(e, !!r.multiple, r.defaultValue, !0));
                                break;
                            default:
                                'function' == typeof i.onClick && (e.onclick = zo);
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
            return (Au(t), null);
        case 6:
            if (e && null != t.stateNode) gu(e, t, e.memoizedProps, r);
            else {
                if ('string' != typeof r && null === t.stateNode) throw Error(Ue(166));
                if (((n = jl(Nl.current)), jl(Al.current), Qa(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Yo] = t),
                        (o = r.nodeValue !== n) && null !== (e = Fa))
                    )
                        switch (e.tag) {
                            case 3:
                                Mo(r.nodeValue, n, 0 != (1 & e.mode));
                                break;
                            case 5:
                                !0 !== e.memoizedProps.suppressHydrationWarning &&
                                    Mo(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                    o && (t.flags |= 4);
                } else (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Yo] = t), (t.stateNode = r));
            }
            return (Au(t), null);
        case 13:
            if (
                (ua(zl),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (Ua && null !== Ba && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                    (Ya(), Xa(), (t.flags |= 98560), (o = !1));
                else if (((o = Qa(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!o) throw Error(Ue(318));
                        if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null)) throw Error(Ue(317));
                        o[Yo] = t;
                    } else (Xa(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                    (Au(t), (o = !1));
                } else (null !== $a && ($c($a), ($a = null)), (o = !0));
                if (!o) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) && (null === e || 0 != (1 & zl.current) ? 0 === gc && (gc = 3) : Zc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Au(t),
                  null);
        case 4:
            return (Ll(), vu(e, t), null === e && Eo(t.stateNode.containerInfo), Au(t), null);
        case 10:
            return (fl(t.type._context), Au(t), null);
        case 19:
            if ((ua(zl), null === (o = t.memoizedState))) return (Au(t), null);
            if (((r = 0 != (128 & t.flags)), null === (a = o.rendering)))
                if (r) Cu(o, !1);
                else {
                    if (0 !== gc || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (a = Dl(e))) {
                                for (
                                    t.flags |= 128,
                                        Cu(o, !1),
                                        null !== (r = a.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    null !== n;

                                )
                                    ((e = r),
                                        ((o = n).flags &= 14680066),
                                        null === (a = o.alternate)
                                            ? ((o.childLanes = 0),
                                              (o.lanes = e),
                                              (o.child = null),
                                              (o.subtreeFlags = 0),
                                              (o.memoizedProps = null),
                                              (o.memoizedState = null),
                                              (o.updateQueue = null),
                                              (o.dependencies = null),
                                              (o.stateNode = null))
                                            : ((o.childLanes = a.childLanes),
                                              (o.lanes = a.lanes),
                                              (o.child = a.child),
                                              (o.subtreeFlags = 0),
                                              (o.deletions = null),
                                              (o.memoizedProps = a.memoizedProps),
                                              (o.memoizedState = a.memoizedState),
                                              (o.updateQueue = a.updateQueue),
                                              (o.type = a.type),
                                              (e = a.dependencies),
                                              (o.dependencies =
                                                  null === e
                                                      ? null
                                                      : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling));
                                return (ca(zl, (1 & zl.current) | 2), t.child);
                            }
                            e = e.sibling;
                        }
                    null !== o.tail && In() > Oc && ((t.flags |= 128), (r = !0), Cu(o, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = Dl(a))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            Cu(o, !0),
                            null === o.tail && 'hidden' === o.tailMode && !a.alternate && !Ua)
                        )
                            return (Au(t), null);
                    } else
                        2 * In() - o.renderingStartTime > Oc &&
                            1073741824 !== n &&
                            ((t.flags |= 128), (r = !0), Cu(o, !1), (t.lanes = 4194304));
                o.isBackwards
                    ? ((a.sibling = t.child), (t.child = a))
                    : (null !== (n = o.last) ? (n.sibling = a) : (t.child = a), (o.last = a));
            }
            return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = In()),
                  (t.sibling = null),
                  (n = zl.current),
                  ca(zl, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Au(t), null);
        case 22:
        case 23:
            return (
                Kc(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 != (1 & t.mode)
                    ? 0 != (1073741824 & vc) && (Au(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                    : Au(t),
                null
            );
        case 24:
        case 25:
            return null;
    }
    throw Error(Ue(156, t.tag));
}
function Nu(e, t) {
    switch ((Va(t), t.tag)) {
        case 1:
            return (ma(t.type) && ga(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null);
        case 3:
            return (
                Ll(),
                ua(pa),
                ua(da),
                Fl(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 5:
            return (Ml(t), null);
        case 13:
            if ((ua(zl), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(Ue(340));
                Xa();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return (ua(zl), null);
        case 4:
            return (Ll(), null);
        case 10:
            return (fl(t.type._context), null);
        case 22:
        case 23:
            return (Kc(), null);
        default:
            return null;
    }
}
((hu = function (e, t) {
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
    (vu = function () {}),
    (mu = function (e, t, n, r) {
        var i = e.memoizedProps;
        if (i !== r) {
            ((e = t.stateNode), jl(Al.current));
            var o,
                a = null;
            switch (n) {
                case 'input':
                    ((i = jt(e, i)), (r = jt(e, r)), (a = []));
                    break;
                case 'select':
                    ((i = _t({}, i, { value: void 0 })), (r = _t({}, r, { value: void 0 })), (a = []));
                    break;
                case 'textarea':
                    ((i = Ft(e, i)), (r = Ft(e, r)), (a = []));
                    break;
                default:
                    'function' != typeof i.onClick && 'function' == typeof r.onClick && (e.onclick = zo);
            }
            for (u in (tn(n, r), (n = null), i))
                if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && null != i[u])
                    if ('style' === u) {
                        var l = i[u];
                        for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
                    } else
                        'dangerouslySetInnerHTML' !== u &&
                            'children' !== u &&
                            'suppressContentEditableWarning' !== u &&
                            'suppressHydrationWarning' !== u &&
                            'autoFocus' !== u &&
                            (We.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
            for (u in r) {
                var s = r[u];
                if (((l = null != i ? i[u] : void 0), r.hasOwnProperty(u) && s !== l && (null != s || null != l)))
                    if ('style' === u)
                        if (l) {
                            for (o in l)
                                !l.hasOwnProperty(o) || (s && s.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ''));
                            for (o in s) s.hasOwnProperty(o) && l[o] !== s[o] && (n || (n = {}), (n[o] = s[o]));
                        } else (n || (a || (a = []), a.push(u, n)), (n = s));
                    else
                        'dangerouslySetInnerHTML' === u
                            ? ((s = s ? s.__html : void 0),
                              (l = l ? l.__html : void 0),
                              null != s && l !== s && (a = a || []).push(u, s))
                            : 'children' === u
                              ? ('string' != typeof s && 'number' != typeof s) || (a = a || []).push(u, '' + s)
                              : 'suppressContentEditableWarning' !== u &&
                                'suppressHydrationWarning' !== u &&
                                (We.hasOwnProperty(u)
                                    ? (null != s && 'onScroll' === u && So('scroll', e), a || l === s || (a = []))
                                    : (a = a || []).push(u, s));
            }
            n && (a = a || []).push('style', n);
            var u = a;
            (t.updateQueue = u) && (t.flags |= 4);
        }
    }),
    (gu = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
    }));
var ju = !1,
    Ru = !1,
    Lu = 'function' == typeof WeakSet ? WeakSet : Set,
    Iu = null;
function Mu(e, t) {
    var n = e.ref;
    if (null !== n)
        if ('function' == typeof n)
            try {
                n(null);
            } catch (r) {
                sf(e, t, r);
            }
        else n.current = null;
}
function zu(e, t, n) {
    try {
        n();
    } catch (r) {
        sf(e, t, r);
    }
}
var Du = !1;
function Vu(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var i = (r = r.next);
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                ((i.destroy = void 0), void 0 !== o && zu(t, n, o));
            }
            i = i.next;
        } while (i !== r);
    }
}
function Fu(e, t) {
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
function Bu(e) {
    var t = e.ref;
    if (null !== t) {
        var n = e.stateNode;
        (e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e));
    }
}
function Uu(e) {
    var t = e.alternate;
    (null !== t && ((e.alternate = null), Uu(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[Yo], delete t[Xo], delete t[Jo], delete t[ea], delete t[ta]),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
}
function $u(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function Wu(e) {
    e: for (;;) {
        for (; null === e.sibling; ) {
            if (null === e.return || $u(e.return)) return null;
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
function Hu(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
        ((e = e.stateNode),
            t
                ? 8 === n.nodeType
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = zo)));
    else if (4 !== r && null !== (e = e.child))
        for (Hu(e, t, n), e = e.sibling; null !== e; ) (Hu(e, t, n), (e = e.sibling));
}
function qu(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (4 !== r && null !== (e = e.child))
        for (qu(e, t, n), e = e.sibling; null !== e; ) (qu(e, t, n), (e = e.sibling));
}
var Gu = null,
    Ku = !1;
function Qu(e, t, n) {
    for (n = n.child; null !== n; ) (Yu(e, t, n), (n = n.sibling));
}
function Yu(e, t, n) {
    if ($n && 'function' == typeof $n.onCommitFiberUnmount)
        try {
            $n.onCommitFiberUnmount(Un, n);
        } catch (l) {}
    switch (n.tag) {
        case 5:
            Ru || Mu(n, t);
        case 6:
            var r = Gu,
                i = Ku;
            ((Gu = null),
                Qu(e, t, n),
                (Ku = i),
                null !== (Gu = r) &&
                    (Ku
                        ? ((e = Gu),
                          (n = n.stateNode),
                          8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : Gu.removeChild(n.stateNode)));
            break;
        case 18:
            null !== Gu &&
                (Ku
                    ? ((e = Gu),
                      (n = n.stateNode),
                      8 === e.nodeType ? qo(e.parentNode, n) : 1 === e.nodeType && qo(e, n),
                      Er(e))
                    : qo(Gu, n.stateNode));
            break;
        case 4:
            ((r = Gu), (i = Ku), (Gu = n.stateNode.containerInfo), (Ku = !0), Qu(e, t, n), (Gu = r), (Ku = i));
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ru && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                i = r = r.next;
                do {
                    var o = i,
                        a = o.destroy;
                    ((o = o.tag), void 0 !== a && (0 != (2 & o) || 0 != (4 & o)) && zu(n, t, a), (i = i.next));
                } while (i !== r);
            }
            Qu(e, t, n);
            break;
        case 1:
            if (!Ru && (Mu(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount))
                try {
                    ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
                } catch (l) {
                    sf(n, t, l);
                }
            Qu(e, t, n);
            break;
        case 21:
            Qu(e, t, n);
            break;
        case 22:
            1 & n.mode ? ((Ru = (r = Ru) || null !== n.memoizedState), Qu(e, t, n), (Ru = r)) : Qu(e, t, n);
            break;
        default:
            Qu(e, t, n);
    }
}
function Xu(e) {
    var t = e.updateQueue;
    if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        (null === n && (n = e.stateNode = new Lu()),
            t.forEach(function (t) {
                var r = df.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
            }));
    }
}
function Zu(e, t) {
    var n = t.deletions;
    if (null !== n)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e,
                    a = t,
                    l = a;
                e: for (; null !== l; ) {
                    switch (l.tag) {
                        case 5:
                            ((Gu = l.stateNode), (Ku = !1));
                            break e;
                        case 3:
                        case 4:
                            ((Gu = l.stateNode.containerInfo), (Ku = !0));
                            break e;
                    }
                    l = l.return;
                }
                if (null === Gu) throw Error(Ue(160));
                (Yu(o, a, i), (Gu = null), (Ku = !1));
                var s = i.alternate;
                (null !== s && (s.return = null), (i.return = null));
            } catch (u) {
                sf(i, t, u);
            }
        }
    if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) (Ju(t, e), (t = t.sibling));
}
function Ju(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Zu(t, e), ec(e), 4 & r)) {
                try {
                    (Vu(3, e, e.return), Fu(3, e));
                } catch (v) {
                    sf(e, e.return, v);
                }
                try {
                    Vu(5, e, e.return);
                } catch (v) {
                    sf(e, e.return, v);
                }
            }
            break;
        case 1:
            (Zu(t, e), ec(e), 512 & r && null !== n && Mu(n, n.return));
            break;
        case 5:
            if ((Zu(t, e), ec(e), 512 & r && null !== n && Mu(n, n.return), 32 & e.flags)) {
                var i = e.stateNode;
                try {
                    Qt(i, '');
                } catch (v) {
                    sf(e, e.return, v);
                }
            }
            if (4 & r && null != (i = e.stateNode)) {
                var o = e.memoizedProps,
                    a = null !== n ? n.memoizedProps : o,
                    l = e.type,
                    s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                    try {
                        ('input' === l && 'radio' === o.type && null != o.name && Lt(i, o), nn(l, a));
                        var u = nn(l, o);
                        for (a = 0; a < s.length; a += 2) {
                            var c = s[a],
                                f = s[a + 1];
                            'style' === c
                                ? Jt(i, f)
                                : 'dangerouslySetInnerHTML' === c
                                  ? Kt(i, f)
                                  : 'children' === c
                                    ? Qt(i, f)
                                    : nt(i, c, f, u);
                        }
                        switch (l) {
                            case 'input':
                                It(i, o);
                                break;
                            case 'textarea':
                                Ut(i, o);
                                break;
                            case 'select':
                                var d = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!o.multiple;
                                var p = o.value;
                                null != p
                                    ? Vt(i, !!o.multiple, p, !1)
                                    : d !== !!o.multiple &&
                                      (null != o.defaultValue
                                          ? Vt(i, !!o.multiple, o.defaultValue, !0)
                                          : Vt(i, !!o.multiple, o.multiple ? [] : '', !1));
                        }
                        i[Xo] = o;
                    } catch (v) {
                        sf(e, e.return, v);
                    }
            }
            break;
        case 6:
            if ((Zu(t, e), ec(e), 4 & r)) {
                if (null === e.stateNode) throw Error(Ue(162));
                ((i = e.stateNode), (o = e.memoizedProps));
                try {
                    i.nodeValue = o;
                } catch (v) {
                    sf(e, e.return, v);
                }
            }
            break;
        case 3:
            if ((Zu(t, e), ec(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                    Er(t.containerInfo);
                } catch (v) {
                    sf(e, e.return, v);
                }
            break;
        case 4:
        default:
            (Zu(t, e), ec(e));
            break;
        case 13:
            (Zu(t, e),
                ec(e),
                8192 & (i = e.child).flags &&
                    ((o = null !== i.memoizedState),
                    (i.stateNode.isHidden = o),
                    !o || (null !== i.alternate && null !== i.alternate.memoizedState) || (xc = In())),
                4 & r && Xu(e));
            break;
        case 22:
            if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Ru = (u = Ru) || c), Zu(t, e), (Ru = u)) : Zu(t, e),
                ec(e),
                8192 & r)
            ) {
                if (((u = null !== e.memoizedState), (e.stateNode.isHidden = u) && !c && 0 != (1 & e.mode)))
                    for (Iu = e, c = e.child; null !== c; ) {
                        for (f = Iu = c; null !== Iu; ) {
                            switch (((p = (d = Iu).child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Vu(4, d, d.return);
                                    break;
                                case 1:
                                    Mu(d, d.return);
                                    var h = d.stateNode;
                                    if ('function' == typeof h.componentWillUnmount) {
                                        ((r = d), (n = d.return));
                                        try {
                                            ((t = r),
                                                (h.props = t.memoizedProps),
                                                (h.state = t.memoizedState),
                                                h.componentWillUnmount());
                                        } catch (v) {
                                            sf(r, n, v);
                                        }
                                    }
                                    break;
                                case 5:
                                    Mu(d, d.return);
                                    break;
                                case 22:
                                    if (null !== d.memoizedState) {
                                        ic(f);
                                        continue;
                                    }
                            }
                            null !== p ? ((p.return = d), (Iu = p)) : ic(f);
                        }
                        c = c.sibling;
                    }
                e: for (c = null, f = e; ; ) {
                    if (5 === f.tag) {
                        if (null === c) {
                            c = f;
                            try {
                                ((i = f.stateNode),
                                    u
                                        ? 'function' == typeof (o = i.style).setProperty
                                            ? o.setProperty('display', 'none', 'important')
                                            : (o.display = 'none')
                                        : ((l = f.stateNode),
                                          (a =
                                              null != (s = f.memoizedProps.style) && s.hasOwnProperty('display')
                                                  ? s.display
                                                  : null),
                                          (l.style.display = Zt('display', a))));
                            } catch (v) {
                                sf(e, e.return, v);
                            }
                        }
                    } else if (6 === f.tag) {
                        if (null === c)
                            try {
                                f.stateNode.nodeValue = u ? '' : f.memoizedProps;
                            } catch (v) {
                                sf(e, e.return, v);
                            }
                    } else if (
                        ((22 !== f.tag && 23 !== f.tag) || null === f.memoizedState || f === e) &&
                        null !== f.child
                    ) {
                        ((f.child.return = f), (f = f.child));
                        continue;
                    }
                    if (f === e) break e;
                    for (; null === f.sibling; ) {
                        if (null === f.return || f.return === e) break e;
                        (c === f && (c = null), (f = f.return));
                    }
                    (c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling));
                }
            }
            break;
        case 19:
            (Zu(t, e), ec(e), 4 & r && Xu(e));
        case 21:
    }
}
function ec(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e: {
                for (var n = e.return; null !== n; ) {
                    if ($u(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(Ue(160));
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    (32 & r.flags && (Qt(i, ''), (r.flags &= -33)), qu(e, Wu(e), i));
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo;
                    Hu(e, Wu(e), o);
                    break;
                default:
                    throw Error(Ue(161));
            }
        } catch (a) {
            sf(e, e.return, a);
        }
        e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
}
function tc(e, t, n) {
    ((Iu = e), nc(e));
}
function nc(e, t, n) {
    for (var r = 0 != (1 & e.mode); null !== Iu; ) {
        var i = Iu,
            o = i.child;
        if (22 === i.tag && r) {
            var a = null !== i.memoizedState || ju;
            if (!a) {
                var l = i.alternate,
                    s = (null !== l && null !== l.memoizedState) || Ru;
                l = ju;
                var u = Ru;
                if (((ju = a), (Ru = s) && !u))
                    for (Iu = i; null !== Iu; )
                        ((s = (a = Iu).child),
                            22 === a.tag && null !== a.memoizedState
                                ? oc(i)
                                : null !== s
                                  ? ((s.return = a), (Iu = s))
                                  : oc(i));
                for (; null !== o; ) ((Iu = o), nc(o), (o = o.sibling));
                ((Iu = i), (ju = l), (Ru = u));
            }
            rc(e);
        } else 0 != (8772 & i.subtreeFlags) && null !== o ? ((o.return = i), (Iu = o)) : rc(e);
    }
}
function rc(e) {
    for (; null !== Iu; ) {
        var t = Iu;
        if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
                if (0 != (8772 & t.flags))
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ru || Fu(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (4 & t.flags && !Ru)
                                if (null === n) r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : Vs(t.type, n.memoizedProps);
                                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var o = t.updateQueue;
                            null !== o && Pl(t, o, r);
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
                                var s = t.memoizedProps;
                                switch (t.type) {
                                    case 'button':
                                    case 'input':
                                    case 'select':
                                    case 'textarea':
                                        s.autoFocus && n.focus();
                                        break;
                                    case 'img':
                                        s.src && (n.src = s.src);
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
                                var u = t.alternate;
                                if (null !== u) {
                                    var c = u.memoizedState;
                                    if (null !== c) {
                                        var f = c.dehydrated;
                                        null !== f && Er(f);
                                    }
                                }
                            }
                            break;
                        default:
                            throw Error(Ue(163));
                    }
                Ru || (512 & t.flags && Bu(t));
            } catch (d) {
                sf(t, t.return, d);
            }
        }
        if (t === e) {
            Iu = null;
            break;
        }
        if (null !== (n = t.sibling)) {
            ((n.return = t.return), (Iu = n));
            break;
        }
        Iu = t.return;
    }
}
function ic(e) {
    for (; null !== Iu; ) {
        var t = Iu;
        if (t === e) {
            Iu = null;
            break;
        }
        var n = t.sibling;
        if (null !== n) {
            ((n.return = t.return), (Iu = n));
            break;
        }
        Iu = t.return;
    }
}
function oc(e) {
    for (; null !== Iu; ) {
        var t = Iu;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Fu(4, t);
                    } catch (s) {
                        sf(t, n, s);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if ('function' == typeof r.componentDidMount) {
                        var i = t.return;
                        try {
                            r.componentDidMount();
                        } catch (s) {
                            sf(t, i, s);
                        }
                    }
                    var o = t.return;
                    try {
                        Bu(t);
                    } catch (s) {
                        sf(t, o, s);
                    }
                    break;
                case 5:
                    var a = t.return;
                    try {
                        Bu(t);
                    } catch (s) {
                        sf(t, a, s);
                    }
            }
        } catch (s) {
            sf(t, t.return, s);
        }
        if (t === e) {
            Iu = null;
            break;
        }
        var l = t.sibling;
        if (null !== l) {
            ((l.return = t.return), (Iu = l));
            break;
        }
        Iu = t.return;
    }
}
var ac,
    lc = Math.ceil,
    sc = rt.ReactCurrentDispatcher,
    uc = rt.ReactCurrentOwner,
    cc = rt.ReactCurrentBatchConfig,
    fc = 0,
    dc = null,
    pc = null,
    hc = 0,
    vc = 0,
    mc = sa(0),
    gc = 0,
    yc = null,
    bc = 0,
    _c = 0,
    wc = 0,
    kc = null,
    Sc = null,
    xc = 0,
    Oc = 1 / 0,
    Ec = null,
    Pc = !1,
    Cc = null,
    Ac = null,
    Tc = !1,
    Nc = null,
    jc = 0,
    Rc = 0,
    Lc = null,
    Ic = -1,
    Mc = 0;
function zc() {
    return 0 != (6 & fc) ? In() : -1 !== Ic ? Ic : (Ic = In());
}
function Dc(e) {
    return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & fc) && 0 !== hc
          ? hc & -hc
          : null !== Ja.transition
            ? (0 === Mc && (Mc = Jn()), Mc)
            : 0 !== (e = rr)
              ? e
              : (e = void 0 === (e = window.event) ? 16 : Lr(e.type));
}
function Vc(e, t, n, r) {
    if (50 < Rc) throw ((Rc = 0), (Lc = null), Error(Ue(185)));
    (tr(e, n, r),
        (0 != (2 & fc) && e === dc) ||
            (e === dc && (0 == (2 & fc) && (_c |= n), 4 === gc && Wc(e, hc)),
            Fc(e, r),
            1 === n && 0 === fc && 0 == (1 & t.mode) && ((Oc = In() + 500), Sa && Ea())));
}
function Fc(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
            var a = 31 - Wn(o),
                l = 1 << a,
                s = i[a];
            (-1 === s ? (0 != (l & n) && 0 == (l & r)) || (i[a] = Xn(l, t)) : s <= t && (e.expiredLanes |= l),
                (o &= ~l));
        }
    })(e, t);
    var r = Yn(e, e === dc ? hc : 0);
    if (0 === r) (null !== n && jn(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && jn(n), 1 === t))
            (0 === e.tag
                ? (function (e) {
                      ((Sa = !0), Oa(e));
                  })(Hc.bind(null, e))
                : Oa(Hc.bind(null, e)),
                Wo(function () {
                    0 == (6 & fc) && Ea();
                }),
                (n = null));
        else {
            switch (ir(r)) {
                case 1:
                    n = zn;
                    break;
                case 4:
                    n = Dn;
                    break;
                case 16:
                default:
                    n = Vn;
                    break;
                case 536870912:
                    n = Bn;
            }
            n = pf(n, Bc.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = n));
    }
}
function Bc(e, t) {
    if (((Ic = -1), (Mc = 0), 0 != (6 & fc))) throw Error(Ue(327));
    var n = e.callbackNode;
    if (af() && e.callbackNode !== n) return null;
    var r = Yn(e, e === dc ? hc : 0);
    if (0 === r) return null;
    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = Jc(e, r);
    else {
        t = r;
        var i = fc;
        fc |= 2;
        var o = Xc();
        for ((dc === e && hc === t) || ((Ec = null), (Oc = In() + 500), Qc(e, t)); ; )
            try {
                tf();
                break;
            } catch (l) {
                Yc(e, l);
            }
        (cl(), (sc.current = o), (fc = i), null !== pc ? (t = 0) : ((dc = null), (hc = 0), (t = gc)));
    }
    if (0 !== t) {
        if ((2 === t && 0 !== (i = Zn(e)) && ((r = i), (t = Uc(e, i))), 1 === t))
            throw ((n = yc), Qc(e, 0), Wc(e, r), Fc(e, In()), n);
        if (6 === t) Wc(e, r);
        else {
            if (
                ((i = e.current.alternate),
                0 == (30 & r) &&
                    !(function (e) {
                        for (var t = e; ; ) {
                            if (16384 & t.flags) {
                                var n = t.updateQueue;
                                if (null !== n && null !== (n = n.stores))
                                    for (var r = 0; r < n.length; r++) {
                                        var i = n[r],
                                            o = i.getSnapshot;
                                        i = i.value;
                                        try {
                                            if (!Wi(o(), i)) return !1;
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
                    })(i) &&
                    (2 === (t = Jc(e, r)) && 0 !== (o = Zn(e)) && ((r = o), (t = Uc(e, o))), 1 === t))
            )
                throw ((n = yc), Qc(e, 0), Wc(e, r), Fc(e, In()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(Ue(345));
                case 2:
                case 5:
                    of(e, Sc, Ec);
                    break;
                case 3:
                    if ((Wc(e, r), (130023424 & r) === r && 10 < (t = xc + 500 - In()))) {
                        if (0 !== Yn(e, 0)) break;
                        if (((i = e.suspendedLanes) & r) !== r) {
                            (zc(), (e.pingedLanes |= e.suspendedLanes & i));
                            break;
                        }
                        e.timeoutHandle = Bo(of.bind(null, e, Sc, Ec), t);
                        break;
                    }
                    of(e, Sc, Ec);
                    break;
                case 4:
                    if ((Wc(e, r), (4194240 & r) === r)) break;
                    for (t = e.eventTimes, i = -1; 0 < r; ) {
                        var a = 31 - Wn(r);
                        ((o = 1 << a), (a = t[a]) > i && (i = a), (r &= ~o));
                    }
                    if (
                        ((r = i),
                        10 <
                            (r =
                                (120 > (r = In() - r)
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
                        e.timeoutHandle = Bo(of.bind(null, e, Sc, Ec), r);
                        break;
                    }
                    of(e, Sc, Ec);
                    break;
                default:
                    throw Error(Ue(329));
            }
        }
    }
    return (Fc(e, In()), e.callbackNode === n ? Bc.bind(null, e) : null);
}
function Uc(e, t) {
    var n = kc;
    return (
        e.current.memoizedState.isDehydrated && (Qc(e, t).flags |= 256),
        2 !== (e = Jc(e, t)) && ((t = Sc), (Sc = n), null !== t && $c(t)),
        e
    );
}
function $c(e) {
    null === Sc ? (Sc = e) : Sc.push.apply(Sc, e);
}
function Wc(e, t) {
    for (t &= ~wc, t &= ~_c, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Wn(t),
            r = 1 << n;
        ((e[n] = -1), (t &= ~r));
    }
}
function Hc(e) {
    if (0 != (6 & fc)) throw Error(Ue(327));
    af();
    var t = Yn(e, 0);
    if (0 == (1 & t)) return (Fc(e, In()), null);
    var n = Jc(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = Zn(e);
        0 !== r && ((t = r), (n = Uc(e, r)));
    }
    if (1 === n) throw ((n = yc), Qc(e, 0), Wc(e, t), Fc(e, In()), n);
    if (6 === n) throw Error(Ue(345));
    return ((e.finishedWork = e.current.alternate), (e.finishedLanes = t), of(e, Sc, Ec), Fc(e, In()), null);
}
function qc(e, t) {
    var n = fc;
    fc |= 1;
    try {
        return e(t);
    } finally {
        0 === (fc = n) && ((Oc = In() + 500), Sa && Ea());
    }
}
function Gc(e) {
    null !== Nc && 0 === Nc.tag && 0 == (6 & fc) && af();
    var t = fc;
    fc |= 1;
    var n = cc.transition,
        r = rr;
    try {
        if (((cc.transition = null), (rr = 1), e)) return e();
    } finally {
        ((rr = r), (cc.transition = n), 0 == (6 & (fc = t)) && Ea());
    }
}
function Kc() {
    ((vc = mc.current), ua(mc));
}
function Qc(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), Uo(n)), null !== pc))
        for (n = pc.return; null !== n; ) {
            var r = n;
            switch ((Va(r), r.tag)) {
                case 1:
                    null != (r = r.type.childContextTypes) && ga();
                    break;
                case 3:
                    (Ll(), ua(pa), ua(da), Fl());
                    break;
                case 5:
                    Ml(r);
                    break;
                case 4:
                    Ll();
                    break;
                case 13:
                case 19:
                    ua(zl);
                    break;
                case 10:
                    fl(r.type._context);
                    break;
                case 22:
                case 23:
                    Kc();
            }
            n = n.return;
        }
    if (
        ((dc = e),
        (pc = e = gf(e.current, null)),
        (hc = vc = t),
        (gc = 0),
        (yc = null),
        (wc = _c = bc = 0),
        (Sc = kc = null),
        null !== vl)
    ) {
        for (t = 0; t < vl.length; t++)
            if (null !== (r = (n = vl[t]).interleaved)) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (null !== o) {
                    var a = o.next;
                    ((o.next = i), (r.next = a));
                }
                n.pending = r;
            }
        vl = null;
    }
    return e;
}
function Yc(e, t) {
    for (;;) {
        var n = pc;
        try {
            if ((cl(), (Bl.current = Is), Gl)) {
                for (var r = Wl.memoizedState; null !== r; ) {
                    var i = r.queue;
                    (null !== i && (i.pending = null), (r = r.next));
                }
                Gl = !1;
            }
            if (
                (($l = 0),
                (ql = Hl = Wl = null),
                (Kl = !1),
                (Ql = 0),
                (uc.current = null),
                null === n || null === n.return)
            ) {
                ((gc = 1), (yc = t), (pc = null));
                break;
            }
            e: {
                var o = e,
                    a = n.return,
                    l = n,
                    s = t;
                if (((t = hc), (l.flags |= 32768), null !== s && 'object' == typeof s && 'function' == typeof s.then)) {
                    var u = s,
                        c = l,
                        f = c.tag;
                    if (0 == (1 & c.mode) && (0 === f || 11 === f || 15 === f)) {
                        var d = c.alternate;
                        d
                            ? ((c.updateQueue = d.updateQueue),
                              (c.memoizedState = d.memoizedState),
                              (c.lanes = d.lanes))
                            : ((c.updateQueue = null), (c.memoizedState = null));
                    }
                    var p = Js(a);
                    if (null !== p) {
                        ((p.flags &= -257), eu(p, a, l, 0, t), 1 & p.mode && Zs(o, u, t), (s = u));
                        var h = (t = p).updateQueue;
                        if (null === h) {
                            var v = new Set();
                            (v.add(s), (t.updateQueue = v));
                        } else h.add(s);
                        break e;
                    }
                    if (0 == (1 & t)) {
                        (Zs(o, u, t), Zc());
                        break e;
                    }
                    s = Error(Ue(426));
                } else if (Ua && 1 & l.mode) {
                    var m = Js(a);
                    if (null !== m) {
                        (0 == (65536 & m.flags) && (m.flags |= 256), eu(m, a, l, 0, t), Za(qs(s, l)));
                        break e;
                    }
                }
                ((o = s = qs(s, l)), 4 !== gc && (gc = 2), null === kc ? (kc = [o]) : kc.push(o), (o = a));
                do {
                    switch (o.tag) {
                        case 3:
                            ((o.flags |= 65536), (t &= -t), (o.lanes |= t), Ol(o, Ys(0, s, t)));
                            break e;
                        case 1:
                            l = s;
                            var g = o.type,
                                y = o.stateNode;
                            if (
                                0 == (128 & o.flags) &&
                                ('function' == typeof g.getDerivedStateFromError ||
                                    (null !== y &&
                                        'function' == typeof y.componentDidCatch &&
                                        (null === Ac || !Ac.has(y))))
                            ) {
                                ((o.flags |= 65536), (t &= -t), (o.lanes |= t), Ol(o, Xs(o, l, t)));
                                break e;
                            }
                    }
                    o = o.return;
                } while (null !== o);
            }
            rf(n);
        } catch (b) {
            ((t = b), pc === n && null !== n && (pc = n = n.return));
            continue;
        }
        break;
    }
}
function Xc() {
    var e = sc.current;
    return ((sc.current = Is), null === e ? Is : e);
}
function Zc() {
    ((0 !== gc && 3 !== gc && 2 !== gc) || (gc = 4),
        null === dc || (0 == (268435455 & bc) && 0 == (268435455 & _c)) || Wc(dc, hc));
}
function Jc(e, t) {
    var n = fc;
    fc |= 2;
    var r = Xc();
    for ((dc === e && hc === t) || ((Ec = null), Qc(e, t)); ; )
        try {
            ef();
            break;
        } catch (i) {
            Yc(e, i);
        }
    if ((cl(), (fc = n), (sc.current = r), null !== pc)) throw Error(Ue(261));
    return ((dc = null), (hc = 0), gc);
}
function ef() {
    for (; null !== pc; ) nf(pc);
}
function tf() {
    for (; null !== pc && !Rn(); ) nf(pc);
}
function nf(e) {
    var t = ac(e.alternate, e, vc);
    ((e.memoizedProps = e.pendingProps), null === t ? rf(e) : (pc = t), (uc.current = null));
}
function rf(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), 0 == (32768 & t.flags))) {
            if (null !== (n = Tu(n, t, vc))) return void (pc = n);
        } else {
            if (null !== (n = Nu(n, t))) return ((n.flags &= 32767), void (pc = n));
            if (null === e) return ((gc = 6), void (pc = null));
            ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        }
        if (null !== (t = t.sibling)) return void (pc = t);
        pc = t = e;
    } while (null !== t);
    0 === gc && (gc = 5);
}
function of(e, t, n) {
    var r = rr,
        i = cc.transition;
    try {
        ((cc.transition = null),
            (rr = 1),
            (function (e, t, n, r) {
                do {
                    af();
                } while (null !== Nc);
                if (0 != (6 & fc)) throw Error(Ue(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(Ue(177));
                ((e.callbackNode = null), (e.callbackPriority = 0));
                var o = n.lanes | n.childLanes;
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
                            var i = 31 - Wn(n),
                                o = 1 << i;
                            ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o));
                        }
                    })(e, o),
                    e === dc && ((pc = dc = null), (hc = 0)),
                    (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                        Tc ||
                        ((Tc = !0),
                        pf(Vn, function () {
                            return (af(), null);
                        })),
                    (o = 0 != (15990 & n.flags)),
                    0 != (15990 & n.subtreeFlags) || o)
                ) {
                    ((o = cc.transition), (cc.transition = null));
                    var a = rr;
                    rr = 1;
                    var l = fc;
                    ((fc |= 4),
                        (uc.current = null),
                        (function (e, t) {
                            if (((Do = Cr), Yi((e = Qi())))) {
                                if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
                                else
                                    e: {
                                        var r =
                                            (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection &&
                                            n.getSelection();
                                        if (r && 0 !== r.rangeCount) {
                                            n = r.anchorNode;
                                            var i = r.anchorOffset,
                                                o = r.focusNode;
                                            r = r.focusOffset;
                                            try {
                                                (n.nodeType, o.nodeType);
                                            } catch (_) {
                                                n = null;
                                                break e;
                                            }
                                            var a = 0,
                                                l = -1,
                                                s = -1,
                                                u = 0,
                                                c = 0,
                                                f = e,
                                                d = null;
                                            t: for (;;) {
                                                for (
                                                    var p;
                                                    f !== n || (0 !== i && 3 !== f.nodeType) || (l = a + i),
                                                        f !== o || (0 !== r && 3 !== f.nodeType) || (s = a + r),
                                                        3 === f.nodeType && (a += f.nodeValue.length),
                                                        null !== (p = f.firstChild);

                                                )
                                                    ((d = f), (f = p));
                                                for (;;) {
                                                    if (f === e) break t;
                                                    if (
                                                        (d === n && ++u === i && (l = a),
                                                        d === o && ++c === r && (s = a),
                                                        null !== (p = f.nextSibling))
                                                    )
                                                        break;
                                                    d = (f = d).parentNode;
                                                }
                                                f = p;
                                            }
                                            n = -1 === l || -1 === s ? null : { start: l, end: s };
                                        } else n = null;
                                    }
                                n = n || { start: 0, end: 0 };
                            } else n = null;
                            for (Vo = { focusedElem: e, selectionRange: n }, Cr = !1, Iu = t; null !== Iu; )
                                if (((e = (t = Iu).child), 0 != (1028 & t.subtreeFlags) && null !== e))
                                    ((e.return = t), (Iu = e));
                                else
                                    for (; null !== Iu; ) {
                                        t = Iu;
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
                                                            var v = h.memoizedProps,
                                                                m = h.memoizedState,
                                                                g = t.stateNode,
                                                                y = g.getSnapshotBeforeUpdate(
                                                                    t.elementType === t.type ? v : Vs(t.type, v),
                                                                    m,
                                                                );
                                                            g.__reactInternalSnapshotBeforeUpdate = y;
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
                                                        throw Error(Ue(163));
                                                }
                                        } catch (_) {
                                            sf(t, t.return, _);
                                        }
                                        if (null !== (e = t.sibling)) {
                                            ((e.return = t.return), (Iu = e));
                                            break;
                                        }
                                        Iu = t.return;
                                    }
                            ((h = Du), (Du = !1));
                        })(e, n),
                        Ju(n, e),
                        Xi(Vo),
                        (Cr = !!Do),
                        (Vo = Do = null),
                        (e.current = n),
                        tc(n),
                        Ln(),
                        (fc = l),
                        (rr = a),
                        (cc.transition = o));
                } else e.current = n;
                if (
                    (Tc && ((Tc = !1), (Nc = e), (jc = i)),
                    (o = e.pendingLanes),
                    0 === o && (Ac = null),
                    (function (e) {
                        if ($n && 'function' == typeof $n.onCommitFiberRoot)
                            try {
                                $n.onCommitFiberRoot(Un, e, void 0, 128 == (128 & e.current.flags));
                            } catch (t) {}
                    })(n.stateNode),
                    Fc(e, In()),
                    null !== t)
                )
                    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                        ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
                if (Pc) throw ((Pc = !1), (e = Cc), (Cc = null), e);
                (0 != (1 & jc) && 0 !== e.tag && af(),
                    (o = e.pendingLanes),
                    0 != (1 & o) ? (e === Lc ? Rc++ : ((Rc = 0), (Lc = e))) : (Rc = 0),
                    Ea());
            })(e, t, n, r));
    } finally {
        ((cc.transition = i), (rr = r));
    }
    return null;
}
function af() {
    if (null !== Nc) {
        var e = ir(jc),
            t = cc.transition,
            n = rr;
        try {
            if (((cc.transition = null), (rr = 16 > e ? 16 : e), null === Nc)) var r = !1;
            else {
                if (((e = Nc), (Nc = null), (jc = 0), 0 != (6 & fc))) throw Error(Ue(331));
                var i = fc;
                for (fc |= 4, Iu = e.current; null !== Iu; ) {
                    var o = Iu,
                        a = o.child;
                    if (0 != (16 & Iu.flags)) {
                        var l = o.deletions;
                        if (null !== l) {
                            for (var s = 0; s < l.length; s++) {
                                var u = l[s];
                                for (Iu = u; null !== Iu; ) {
                                    var c = Iu;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Vu(8, c, o);
                                    }
                                    var f = c.child;
                                    if (null !== f) ((f.return = c), (Iu = f));
                                    else
                                        for (; null !== Iu; ) {
                                            var d = (c = Iu).sibling,
                                                p = c.return;
                                            if ((Uu(c), c === u)) {
                                                Iu = null;
                                                break;
                                            }
                                            if (null !== d) {
                                                ((d.return = p), (Iu = d));
                                                break;
                                            }
                                            Iu = p;
                                        }
                                }
                            }
                            var h = o.alternate;
                            if (null !== h) {
                                var v = h.child;
                                if (null !== v) {
                                    h.child = null;
                                    do {
                                        var m = v.sibling;
                                        ((v.sibling = null), (v = m));
                                    } while (null !== v);
                                }
                            }
                            Iu = o;
                        }
                    }
                    if (0 != (2064 & o.subtreeFlags) && null !== a) ((a.return = o), (Iu = a));
                    else
                        e: for (; null !== Iu; ) {
                            if (0 != (2048 & (o = Iu).flags))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Vu(9, o, o.return);
                                }
                            var g = o.sibling;
                            if (null !== g) {
                                ((g.return = o.return), (Iu = g));
                                break e;
                            }
                            Iu = o.return;
                        }
                }
                var y = e.current;
                for (Iu = y; null !== Iu; ) {
                    var b = (a = Iu).child;
                    if (0 != (2064 & a.subtreeFlags) && null !== b) ((b.return = a), (Iu = b));
                    else
                        e: for (a = y; null !== Iu; ) {
                            if (0 != (2048 & (l = Iu).flags))
                                try {
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Fu(9, l);
                                    }
                                } catch (w) {
                                    sf(l, l.return, w);
                                }
                            if (l === a) {
                                Iu = null;
                                break e;
                            }
                            var _ = l.sibling;
                            if (null !== _) {
                                ((_.return = l.return), (Iu = _));
                                break e;
                            }
                            Iu = l.return;
                        }
                }
                if (((fc = i), Ea(), $n && 'function' == typeof $n.onPostCommitFiberRoot))
                    try {
                        $n.onPostCommitFiberRoot(Un, e);
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
function lf(e, t, n) {
    ((e = Sl(e, (t = Ys(0, (t = qs(n, t)), 1)), 1)), (t = zc()), null !== e && (tr(e, 1, t), Fc(e, t)));
}
function sf(e, t, n) {
    if (3 === e.tag) lf(e, e, n);
    else
        for (; null !== t; ) {
            if (3 === t.tag) {
                lf(t, e, n);
                break;
            }
            if (1 === t.tag) {
                var r = t.stateNode;
                if (
                    'function' == typeof t.type.getDerivedStateFromError ||
                    ('function' == typeof r.componentDidCatch && (null === Ac || !Ac.has(r)))
                ) {
                    ((t = Sl(t, (e = Xs(t, (e = qs(n, e)), 1)), 1)), (e = zc()), null !== t && (tr(t, 1, e), Fc(t, e)));
                    break;
                }
            }
            t = t.return;
        }
}
function uf(e, t, n) {
    var r = e.pingCache;
    (null !== r && r.delete(t),
        (t = zc()),
        (e.pingedLanes |= e.suspendedLanes & n),
        dc === e &&
            (hc & n) === n &&
            (4 === gc || (3 === gc && (130023424 & hc) === hc && 500 > In() - xc) ? Qc(e, 0) : (wc |= n)),
        Fc(e, t));
}
function cf(e, t) {
    0 === t && (0 == (1 & e.mode) ? (t = 1) : ((t = Kn), 0 == (130023424 & (Kn <<= 1)) && (Kn = 4194304)));
    var n = zc();
    null !== (e = yl(e, t)) && (tr(e, t, n), Fc(e, n));
}
function ff(e) {
    var t = e.memoizedState,
        n = 0;
    (null !== t && (n = t.retryLane), cf(e, n));
}
function df(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            null !== i && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(Ue(314));
    }
    (null !== r && r.delete(t), cf(e, n));
}
function pf(e, t) {
    return Nn(e, t);
}
function hf(e, t, n, r) {
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
function vf(e, t, n, r) {
    return new hf(e, t, n, r);
}
function mf(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
}
function gf(e, t) {
    var n = e.alternate;
    return (
        null === n
            ? (((n = vf(e.tag, t, e.key, e.mode)).elementType = e.elementType),
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
function yf(e, t, n, r, i, o) {
    var a = 2;
    if (((r = e), 'function' == typeof e)) mf(e) && (a = 1);
    else if ('string' == typeof e) a = 5;
    else
        e: switch (e) {
            case at:
                return bf(n.children, i, o, t);
            case lt:
                ((a = 8), (i |= 8));
                break;
            case st:
                return (((e = vf(12, n, t, 2 | i)).elementType = st), (e.lanes = o), e);
            case dt:
                return (((e = vf(13, n, t, i)).elementType = dt), (e.lanes = o), e);
            case pt:
                return (((e = vf(19, n, t, i)).elementType = pt), (e.lanes = o), e);
            case mt:
                return _f(n, i, o, t);
            default:
                if ('object' == typeof e && null !== e)
                    switch (e.$$typeof) {
                        case ut:
                            a = 10;
                            break e;
                        case ct:
                            a = 9;
                            break e;
                        case ft:
                            a = 11;
                            break e;
                        case ht:
                            a = 14;
                            break e;
                        case vt:
                            ((a = 16), (r = null));
                            break e;
                    }
                throw Error(Ue(130, null == e ? e : typeof e, ''));
        }
    return (((t = vf(a, n, t, i)).elementType = e), (t.type = r), (t.lanes = o), t);
}
function bf(e, t, n, r) {
    return (((e = vf(7, e, r, t)).lanes = n), e);
}
function _f(e, t, n, r) {
    return (((e = vf(22, e, r, t)).elementType = mt), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e);
}
function wf(e, t, n) {
    return (((e = vf(6, e, null, t)).lanes = n), e);
}
function kf(e, t, n) {
    return (
        ((t = vf(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
function Sf(e, t, n, r, i) {
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
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null));
}
function xf(e, t, n, r, i, o, a, l, s) {
    return (
        (e = new Sf(e, t, n, l, s)),
        1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
        (o = vf(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        _l(o),
        e
    );
}
function Of(e) {
    if (!e) return fa;
    e: {
        if (En((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(Ue(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ma(t.type)) {
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
        if (ma(n)) return ba(e, n, t);
    }
    return t;
}
function Ef(e, t, n, r, i, o, a, l, s) {
    return (
        ((e = xf(n, r, !0, e, 0, o, 0, l, s)).context = Of(null)),
        (n = e.current),
        ((o = kl((r = zc()), (i = Dc(n)))).callback = null != t ? t : null),
        Sl(n, o, i),
        (e.current.lanes = i),
        tr(e, i, r),
        Fc(e, r),
        e
    );
}
function Pf(e, t, n, r) {
    var i = t.current,
        o = zc(),
        a = Dc(i);
    return (
        (n = Of(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = kl(o, a)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = Sl(i, t, a)) && (Vc(e, i, a, o), xl(e, i, a)),
        a
    );
}
function Cf(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
}
function Af(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
    }
}
function Tf(e, t) {
    (Af(e, t), (e = e.alternate) && Af(e, t));
}
ac = function (e, t, n) {
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps || pa.current) nu = !0;
        else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                    (nu = !1),
                    (function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                (du(t), Xa());
                                break;
                            case 5:
                                Il(t);
                                break;
                            case 1:
                                ma(t.type) && _a(t);
                                break;
                            case 4:
                                Rl(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context,
                                    i = t.memoizedProps.value;
                                (ca(al, r._currentValue), (r._currentValue = i));
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState))
                                    return null !== r.dehydrated
                                        ? (ca(zl, 1 & zl.current), (t.flags |= 128), null)
                                        : 0 != (n & t.child.childLanes)
                                          ? _u(e, t, n)
                                          : (ca(zl, 1 & zl.current), null !== (e = Pu(e, t, n)) ? e.sibling : null);
                                ca(zl, 1 & zl.current);
                                break;
                            case 19:
                                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                    if (r) return Ou(e, t, n);
                                    t.flags |= 128;
                                }
                                if (
                                    (null !== (i = t.memoizedState) &&
                                        ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                                    ca(zl, zl.current),
                                    r)
                                )
                                    break;
                                return null;
                            case 22:
                            case 23:
                                return ((t.lanes = 0), lu(e, t, n));
                        }
                        return Pu(e, t, n);
                    })(e, t, n)
                );
            nu = 0 != (131072 & e.flags);
        }
    else ((nu = !1), Ua && 0 != (1048576 & t.flags) && za(t, Ta, t.index));
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            (Eu(e, t), (e = t.pendingProps));
            var i = va(t, da.current);
            (pl(t, n), (i = Jl(null, t, r, e, i, n)));
            var o = es();
            return (
                (t.flags |= 1),
                'object' == typeof i && null !== i && 'function' == typeof i.render && void 0 === i.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      ma(r) ? ((o = !0), _a(t)) : (o = !1),
                      (t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null),
                      _l(t),
                      (i.updater = Bs),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      Hs(t, r, e, n),
                      (t = fu(null, t, r, !0, o, n)))
                    : ((t.tag = 0), Ua && o && Da(t), ru(null, t, i, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Eu(e, t),
                    (e = t.pendingProps),
                    (r = (i = r._init)(r._payload)),
                    (t.type = r),
                    (i = t.tag =
                        (function (e) {
                            if ('function' == typeof e) return mf(e) ? 1 : 0;
                            if (null != e) {
                                if ((e = e.$$typeof) === ft) return 11;
                                if (e === ht) return 14;
                            }
                            return 2;
                        })(r)),
                    (e = Vs(r, e)),
                    i)
                ) {
                    case 0:
                        t = uu(null, t, r, e, n);
                        break e;
                    case 1:
                        t = cu(null, t, r, e, n);
                        break e;
                    case 11:
                        t = iu(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ou(null, t, r, Vs(r.type, e), n);
                        break e;
                }
                throw Error(Ue(306, r, ''));
            }
            return t;
        case 0:
            return ((r = t.type), (i = t.pendingProps), uu(e, t, r, (i = t.elementType === r ? i : Vs(r, i)), n));
        case 1:
            return ((r = t.type), (i = t.pendingProps), cu(e, t, r, (i = t.elementType === r ? i : Vs(r, i)), n));
        case 3:
            e: {
                if ((du(t), null === e)) throw Error(Ue(387));
                ((r = t.pendingProps), (i = (o = t.memoizedState).element), wl(e, t), El(t, r, null, n));
                var a = t.memoizedState;
                if (((r = a.element), o.isDehydrated)) {
                    if (
                        ((o = {
                            element: r,
                            isDehydrated: !1,
                            cache: a.cache,
                            pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                            transitions: a.transitions,
                        }),
                        (t.updateQueue.baseState = o),
                        (t.memoizedState = o),
                        256 & t.flags)
                    ) {
                        t = pu(e, t, r, n, (i = qs(Error(Ue(423)), t)));
                        break e;
                    }
                    if (r !== i) {
                        t = pu(e, t, r, n, (i = qs(Error(Ue(424)), t)));
                        break e;
                    }
                    for (
                        Ba = Go(t.stateNode.containerInfo.firstChild),
                            Fa = t,
                            Ua = !0,
                            $a = null,
                            n = ol(t, null, r, n),
                            t.child = n;
                        n;

                    )
                        ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                    if ((Xa(), r === i)) {
                        t = Pu(e, t, n);
                        break e;
                    }
                    ru(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Il(t),
                null === e && Ga(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (a = i.children),
                Fo(r, i) ? (a = null) : null !== o && Fo(r, o) && (t.flags |= 32),
                su(e, t),
                ru(e, t, a, n),
                t.child
            );
        case 6:
            return (null === e && Ga(t), null);
        case 13:
            return _u(e, t, n);
        case 4:
            return (
                Rl(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = il(t, null, r, n)) : ru(e, t, r, n),
                t.child
            );
        case 11:
            return ((r = t.type), (i = t.pendingProps), iu(e, t, r, (i = t.elementType === r ? i : Vs(r, i)), n));
        case 7:
            return (ru(e, t, t.pendingProps, n), t.child);
        case 8:
        case 12:
            return (ru(e, t, t.pendingProps.children, n), t.child);
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (i = t.pendingProps),
                    (o = t.memoizedProps),
                    (a = i.value),
                    ca(al, r._currentValue),
                    (r._currentValue = a),
                    null !== o)
                )
                    if (Wi(o.value, a)) {
                        if (o.children === i.children && !pa.current) {
                            t = Pu(e, t, n);
                            break e;
                        }
                    } else
                        for (null !== (o = t.child) && (o.return = t); null !== o; ) {
                            var l = o.dependencies;
                            if (null !== l) {
                                a = o.child;
                                for (var s = l.firstContext; null !== s; ) {
                                    if (s.context === r) {
                                        if (1 === o.tag) {
                                            (s = kl(-1, n & -n)).tag = 2;
                                            var u = o.updateQueue;
                                            if (null !== u) {
                                                var c = (u = u.shared).pending;
                                                (null === c ? (s.next = s) : ((s.next = c.next), (c.next = s)),
                                                    (u.pending = s));
                                            }
                                        }
                                        ((o.lanes |= n),
                                            null !== (s = o.alternate) && (s.lanes |= n),
                                            dl(o.return, n, t),
                                            (l.lanes |= n));
                                        break;
                                    }
                                    s = s.next;
                                }
                            } else if (10 === o.tag) a = o.type === t.type ? null : o.child;
                            else if (18 === o.tag) {
                                if (null === (a = o.return)) throw Error(Ue(341));
                                ((a.lanes |= n),
                                    null !== (l = a.alternate) && (l.lanes |= n),
                                    dl(a, n, t),
                                    (a = o.sibling));
                            } else a = o.child;
                            if (null !== a) a.return = o;
                            else
                                for (a = o; null !== a; ) {
                                    if (a === t) {
                                        a = null;
                                        break;
                                    }
                                    if (null !== (o = a.sibling)) {
                                        ((o.return = a.return), (a = o));
                                        break;
                                    }
                                    a = a.return;
                                }
                            o = a;
                        }
                (ru(e, t, i.children, n), (t = t.child));
            }
            return t;
        case 9:
            return (
                (i = t.type),
                (r = t.pendingProps.children),
                pl(t, n),
                (r = r((i = hl(i)))),
                (t.flags |= 1),
                ru(e, t, r, n),
                t.child
            );
        case 14:
            return ((i = Vs((r = t.type), t.pendingProps)), ou(e, t, r, (i = Vs(r.type, i)), n));
        case 15:
            return au(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Vs(r, i)),
                Eu(e, t),
                (t.tag = 1),
                ma(r) ? ((e = !0), _a(t)) : (e = !1),
                pl(t, n),
                $s(t, r, i),
                Hs(t, r, i, n),
                fu(null, t, r, !0, e, n)
            );
        case 19:
            return Ou(e, t, n);
        case 22:
            return lu(e, t, n);
    }
    throw Error(Ue(156, t.tag));
};
var Nf =
    'function' == typeof reportError
        ? reportError
        : function (e) {
              console.error(e);
          };
function jf(e) {
    this._internalRoot = e;
}
function Rf(e) {
    this._internalRoot = e;
}
function Lf(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function If(e) {
    return !(
        !e ||
        (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
    );
}
function Mf() {}
function zf(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var a = o;
        if ('function' == typeof i) {
            var l = i;
            i = function () {
                var e = Cf(a);
                l.call(e);
            };
        }
        Pf(t, a, e, i);
    } else
        a = (function (e, t, n, r, i) {
            if (i) {
                if ('function' == typeof r) {
                    var o = r;
                    r = function () {
                        var e = Cf(a);
                        o.call(e);
                    };
                }
                var a = Ef(t, r, e, 0, null, !1, 0, '', Mf);
                return (
                    (e._reactRootContainer = a),
                    (e[Zo] = a.current),
                    Eo(8 === e.nodeType ? e.parentNode : e),
                    Gc(),
                    a
                );
            }
            for (; (i = e.lastChild); ) e.removeChild(i);
            if ('function' == typeof r) {
                var l = r;
                r = function () {
                    var e = Cf(s);
                    l.call(e);
                };
            }
            var s = xf(e, 0, !1, null, 0, !1, 0, '', Mf);
            return (
                (e._reactRootContainer = s),
                (e[Zo] = s.current),
                Eo(8 === e.nodeType ? e.parentNode : e),
                Gc(function () {
                    Pf(t, s, n, r);
                }),
                s
            );
        })(n, t, e, i, r);
    return Cf(a);
}
((Rf.prototype.render = jf.prototype.render =
    function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(Ue(409));
        Pf(e, t, null, null);
    }),
    (Rf.prototype.unmount = jf.prototype.unmount =
        function () {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                (Gc(function () {
                    Pf(null, e, null, null);
                }),
                    (t[Zo] = null));
            }
        }),
    (Rf.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = sr();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < gr.length && 0 !== t && t < gr[n].priority; n++);
            (gr.splice(n, 0, e), 0 === n && wr(e));
        }
    }),
    (or = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Qn(t.pendingLanes);
                    0 !== n && (nr(t, 1 | n), Fc(t, In()), 0 == (6 & fc) && ((Oc = In() + 500), Ea()));
                }
                break;
            case 13:
                (Gc(function () {
                    var t = yl(e, 1);
                    if (null !== t) {
                        var n = zc();
                        Vc(t, e, 1, n);
                    }
                }),
                    Tf(e, 1));
        }
    }),
    (ar = function (e) {
        if (13 === e.tag) {
            var t = yl(e, 134217728);
            if (null !== t) Vc(t, e, 134217728, zc());
            Tf(e, 134217728);
        }
    }),
    (lr = function (e) {
        if (13 === e.tag) {
            var t = Dc(e),
                n = yl(e, t);
            if (null !== n) Vc(n, e, t, zc());
            Tf(e, t);
        }
    }),
    (sr = function () {
        return rr;
    }),
    (ur = function (e, t) {
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
                if ((It(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                    for (n = e; n.parentNode; ) n = n.parentNode;
                    for (
                        n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var i = oa(r);
                            if (!i) throw Error(Ue(90));
                            (Tt(r), It(r, i));
                        }
                    }
                }
                break;
            case 'textarea':
                Ut(e, n);
                break;
            case 'select':
                null != (t = n.value) && Vt(e, !!n.multiple, t, !1);
        }
    }),
    (dn = qc),
    (pn = Gc));
var Df = { usingClientEntryPoint: !1, Events: [ra, ia, oa, cn, fn, qc] },
    Vf = { findFiberByHostInstance: na, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    Ff = {
        bundleType: Vf.bundleType,
        version: Vf.version,
        rendererPackageName: Vf.rendererPackageName,
        rendererConfig: Vf.rendererConfig,
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
            return null === (e = An(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
            Vf.findFiberByHostInstance ||
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
    var Bf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bf.isDisabled && Bf.supportsFiber)
        try {
            ((Un = Bf.inject(Ff)), ($n = Bf));
        } catch (Gt) {}
}
((Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Df),
    (Me.createPortal = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Lf(t)) throw Error(Ue(200));
        return (function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: ot, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
        })(e, t, null, n);
    }),
    (Me.createRoot = function (e, t) {
        if (!Lf(e)) throw Error(Ue(299));
        var n = !1,
            r = '',
            i = Nf;
        return (
            null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
            (t = xf(e, 1, !1, null, 0, n, 0, r, i)),
            (e[Zo] = t.current),
            Eo(8 === e.nodeType ? e.parentNode : e),
            new jf(t)
        );
    }),
    (Me.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
            if ('function' == typeof e.render) throw Error(Ue(188));
            throw ((e = Object.keys(e).join(',')), Error(Ue(268, e)));
        }
        return (e = null === (e = An(t)) ? null : e.stateNode);
    }),
    (Me.flushSync = function (e) {
        return Gc(e);
    }),
    (Me.hydrate = function (e, t, n) {
        if (!If(t)) throw Error(Ue(200));
        return zf(null, e, t, !0, n);
    }),
    (Me.hydrateRoot = function (e, t, n) {
        if (!Lf(e)) throw Error(Ue(405));
        var r = (null != n && n.hydratedSources) || null,
            i = !1,
            o = '',
            a = Nf;
        if (
            (null != n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
            (t = Ef(t, null, e, 1, null != n ? n : null, i, 0, o, a)),
            (e[Zo] = t.current),
            Eo(e),
            r)
        )
            for (e = 0; e < r.length; e++)
                ((i = (i = (n = r[e])._getVersion)(n._source)),
                    null == t.mutableSourceEagerHydrationData
                        ? (t.mutableSourceEagerHydrationData = [n, i])
                        : t.mutableSourceEagerHydrationData.push(n, i));
        return new Rf(t);
    }),
    (Me.render = function (e, t, n) {
        if (!If(t)) throw Error(Ue(200));
        return zf(null, e, t, !1, n);
    }),
    (Me.unmountComponentAtNode = function (e) {
        if (!If(e)) throw Error(Ue(40));
        return (
            !!e._reactRootContainer &&
            (Gc(function () {
                zf(null, null, e, !1, function () {
                    ((e._reactRootContainer = null), (e[Zo] = null));
                });
            }),
            !0)
        );
    }),
    (Me.unstable_batchedUpdates = qc),
    (Me.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!If(n)) throw Error(Ue(200));
        if (null == e || void 0 === e._reactInternals) throw Error(Ue(38));
        return zf(e, t, n, !1, r);
    }),
    (Me.version = '18.3.1-next-f1338f8080-20240426'),
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
    (Ie.exports = Me));
var Uf = Ie.exports,
    $f = Uf;
((Le.createRoot = $f.createRoot), (Le.hydrateRoot = $f.hydrateRoot));
var Wf,
    Hf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ((Wf = Hf),
    (function () {
        var e = {}.hasOwnProperty;
        function t() {
            for (var n = [], r = 0; r < arguments.length; r++) {
                var i = arguments[r];
                if (i) {
                    var o = typeof i;
                    if ('string' === o || 'number' === o) n.push(i);
                    else if (Array.isArray(i)) {
                        if (i.length) {
                            var a = t.apply(null, i);
                            a && n.push(a);
                        }
                    } else if ('object' === o) {
                        if (
                            i.toString !== Object.prototype.toString &&
                            !i.toString.toString().includes('[native code]')
                        ) {
                            n.push(i.toString());
                            continue;
                        }
                        for (var l in i) e.call(i, l) && i[l] && n.push(l);
                    }
                }
            }
            return n.join(' ');
        }
        Wf.exports ? ((t.default = t), (Wf.exports = t)) : (window.classNames = t);
    })());
const qf = n(Hf.exports);
function Gf(e) {
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
var Kf = {};
function Qf() {
    return 'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : Kf;
}
var Yf = Object.assign,
    Xf = Object.getOwnPropertyDescriptor,
    Zf = Object.defineProperty,
    Jf = Object.prototype,
    ed = [];
Object.freeze(ed);
var td = {};
Object.freeze(td);
var nd = 'undefined' != typeof Proxy,
    rd = Object.toString();
function id() {
    nd || Gf('Proxy not available');
}
function od(e) {
    var t = !1;
    return function () {
        if (!t) return ((t = !0), e.apply(this, arguments));
    };
}
var ad = function () {};
function ld(e) {
    return 'function' == typeof e;
}
function sd(e) {
    switch (typeof e) {
        case 'string':
        case 'symbol':
        case 'number':
            return !0;
    }
    return !1;
}
function ud(e) {
    return null !== e && 'object' == typeof e;
}
function cd(e) {
    if (!ud(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (null == t) return !0;
    var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n.toString() === rd;
}
function fd(e) {
    var t = null == e ? void 0 : e.constructor;
    return !!t && ('GeneratorFunction' === t.name || 'GeneratorFunction' === t.displayName);
}
function dd(e, t, n) {
    Zf(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function pd(e, t, n) {
    Zf(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function hd(e, t) {
    var n = 'isMobX' + e;
    return (
        (t.prototype[n] = !0),
        function (e) {
            return ud(e) && !0 === e[n];
        }
    );
}
function vd(e) {
    return e instanceof Map;
}
function md(e) {
    return e instanceof Set;
}
var gd = void 0 !== Object.getOwnPropertySymbols;
var yd =
    'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : gd
          ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            }
          : Object.getOwnPropertyNames;
function bd(e) {
    return null === e ? null : 'object' == typeof e ? '' + e : e;
}
function _d(e, t) {
    return Jf.hasOwnProperty.call(e, t);
}
var wd =
    Object.getOwnPropertyDescriptors ||
    function (e) {
        var t = {};
        return (
            yd(e).forEach(function (n) {
                t[n] = Xf(e, n);
            }),
            t
        );
    };
function kd(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(
                e,
                ((i = r.key),
                (o = void 0),
                'symbol' ==
                typeof (o = (function (e, t) {
                    if ('object' != typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t);
                        if ('object' != typeof r) return r;
                        throw new TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return String(e);
                })(i, 'string'))
                    ? o
                    : String(o)),
                r,
            ));
    }
    var i, o;
}
function Sd(e, t, n) {
    return (t && kd(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function xd() {
    return (
        (xd = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        xd.apply(this, arguments)
    );
}
function Od(e, t) {
    ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Ed(e, t));
}
function Ed(e, t) {
    return (Ed = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return ((e.__proto__ = t), e);
          })(e, t);
}
function Pd(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function Cd(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function Ad(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
        Array.isArray(e) ||
        (n = (function (e, t) {
            if (e) {
                if ('string' == typeof e) return Cd(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? Cd(e, t)
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
var Td = Symbol('mobx-stored-annotations');
function Nd(e) {
    return Object.assign(function (t, n) {
        if (Rd(n)) return e.decorate_20223_(t, n);
        jd(t, n, e);
    }, e);
}
function jd(e, t, n) {
    (_d(e, Td) || dd(e, Td, xd({}, e[Td])),
        (function (e) {
            return e.annotationType_ === Bd;
        })(n) || (e[Td][t] = n));
}
function Rd(e) {
    return 'object' == typeof e && 'string' == typeof e.kind;
}
var Ld = Symbol('mobx administration'),
    Id = (function () {
        function e(e) {
            (void 0 === e && (e = 'Atom'),
                (this.name_ = void 0),
                (this.isPendingUnobservation_ = !1),
                (this.isBeingObserved_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Fp.NOT_TRACKING_),
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
                return dh(this);
            }),
            (t.reportChanged = function () {
                (ch(), ph(this), fh());
            }),
            (t.toString = function () {
                return this.name_;
            }),
            e
        );
    })(),
    Md = hd('Atom', Id);
function zd(e, t, n) {
    (void 0 === t && (t = ad), void 0 === n && (n = ad));
    var r,
        i = new Id(e);
    return (t !== ad && zh(Lh, i, t, r), n !== ad && Mh(i, n), i);
}
var Dd = {
    structural: function (e, t) {
        return om(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
    shallow: function (e, t) {
        return om(e, t, 1);
    },
};
function Vd(e, t, n) {
    return Jh(e)
        ? e
        : Array.isArray(e)
          ? xp.array(e, { name: n })
          : cd(e)
            ? xp.object(e, void 0, { name: n })
            : vd(e)
              ? xp.map(e, { name: n })
              : md(e)
                ? xp.set(e, { name: n })
                : 'function' != typeof e || Th(e) || Yh(e)
                  ? e
                  : fd(e)
                    ? Kh(e)
                    : Ah(n, e);
}
function Fd(e) {
    return e;
}
var Bd = 'override';
function Ud(e, t) {
    return { annotationType_: e, options_: t, make_: $d, extend_: Wd, decorate_20223_: Hd };
}
function $d(e, t, n, r) {
    var i;
    if (null != (i = this.options_) && i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (Th(n.value)) return 1;
    var o = qd(e, this, t, n, !1);
    return (Zf(r, t, o), 2);
}
function Wd(e, t, n, r) {
    var i = qd(e, this, t, n);
    return e.defineProperty_(t, i, r);
}
function Hd(e, t) {
    var n = t.kind,
        r = t.name,
        i = t.addInitializer,
        o = this;
    if ('field' != n) {
        var a, l, s, u, c, f;
        if ('method' == n)
            return (
                Th(e) ||
                    ((l = e),
                    (e = Lp(
                        null != (s = null == (u = o.options_) ? void 0 : u.name) ? s : r.toString(),
                        l,
                        null != (c = null == (f = o.options_) ? void 0 : f.autoAction) && c,
                    ))),
                null != (a = this.options_) &&
                    a.bound &&
                    i(function () {
                        var e = this,
                            t = e[r].bind(e);
                        ((t.isMobxAction = !0), (e[r] = t));
                    }),
                e
            );
        Gf(
            "Cannot apply '" +
                o.annotationType_ +
                "' to '" +
                String(r) +
                "' (kind: " +
                n +
                "):\n'" +
                o.annotationType_ +
                "' can only be used on properties with a function value.",
        );
    } else
        i(function () {
            jd(this, r, o);
        });
}
function qd(e, t, n, r, i) {
    var o, a, l, s, u, c, f, d;
    (void 0 === i && (i = ah.safeDescriptors), (d = r), t.annotationType_, d.value);
    var p,
        h = r.value;
    null != (o = t.options_) && o.bound && (h = h.bind(null != (p = e.proxy_) ? p : e.target_));
    return {
        value: Lp(
            null != (a = null == (l = t.options_) ? void 0 : l.name) ? a : n.toString(),
            h,
            null != (s = null == (u = t.options_) ? void 0 : u.autoAction) && s,
            null != (c = t.options_) && c.bound ? (null != (f = e.proxy_) ? f : e.target_) : void 0,
        ),
        configurable: !i || e.isPlainObject_,
        enumerable: !1,
        writable: !i,
    };
}
function Gd(e, t) {
    return { annotationType_: e, options_: t, make_: Kd, extend_: Qd, decorate_20223_: Yd };
}
function Kd(e, t, n, r) {
    var i;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (
        null != (i = this.options_) &&
        i.bound &&
        (!_d(e.target_, t) || !Yh(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
    )
        return 0;
    if (Yh(n.value)) return 1;
    var o = Xd(e, this, t, n, !1, !1);
    return (Zf(r, t, o), 2);
}
function Qd(e, t, n, r) {
    var i,
        o = Xd(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
    return e.defineProperty_(t, o, r);
}
function Yd(e, t) {
    var n,
        r = t.name,
        i = t.addInitializer;
    return (
        Yh(e) || (e = Kh(e)),
        null != (n = this.options_) &&
            n.bound &&
            i(function () {
                var e = this,
                    t = e[r].bind(e);
                ((t.isMobXFlow = !0), (e[r] = t));
            }),
        e
    );
}
function Xd(e, t, n, r, i, o) {
    var a;
    (void 0 === o && (o = ah.safeDescriptors), (a = r), t.annotationType_, a.value);
    var l,
        s = r.value;
    (Yh(s) || (s = Kh(s)), i) && ((s = s.bind(null != (l = e.proxy_) ? l : e.target_)).isMobXFlow = !0);
    return { value: s, configurable: !o || e.isPlainObject_, enumerable: !1, writable: !o };
}
function Zd(e, t) {
    return { annotationType_: e, options_: t, make_: Jd, extend_: ep, decorate_20223_: tp };
}
function Jd(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function ep(e, t, n, r) {
    var i;
    return (
        (i = n),
        this.annotationType_,
        i.get,
        e.defineComputedProperty_(t, xd({}, this.options_, { get: n.get, set: n.set }), r)
    );
}
function tp(e, t) {
    var n = this,
        r = t.name;
    return (
        (0, t.addInitializer)(function () {
            var t = Dv(this)[Ld],
                i = xd({}, n.options_, { get: e, context: this });
            (i.name || (i.name = 'ObservableObject.' + r.toString()), t.values_.set(r, new Wp(i)));
        }),
        function () {
            return this[Ld].getObservablePropValue_(r);
        }
    );
}
function np(e, t) {
    return { annotationType_: e, options_: t, make_: rp, extend_: ip, decorate_20223_: op };
}
function rp(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function ip(e, t, n, r) {
    var i, o;
    return (
        this.annotationType_,
        e.defineObservableProperty_(
            t,
            n.value,
            null != (i = null == (o = this.options_) ? void 0 : o.enhancer) ? i : Vd,
            r,
        )
    );
}
function op(e, t) {
    var n = this,
        r = t.kind,
        i = t.name,
        o = new WeakSet();
    function a(e, t) {
        var r,
            a,
            l = Dv(e)[Ld],
            s = new Vp(
                t,
                null != (r = null == (a = n.options_) ? void 0 : a.enhancer) ? r : Vd,
                'ObservableObject.' + i.toString(),
                !1,
            );
        (l.values_.set(i, s), o.add(e));
    }
    if ('accessor' == r)
        return {
            get: function () {
                return (o.has(this) || a(this, e.get.call(this)), this[Ld].getObservablePropValue_(i));
            },
            set: function (e) {
                return (o.has(this) || a(this, e), this[Ld].setObservablePropValue_(i, e));
            },
            init: function (e) {
                return (o.has(this) || a(this, e), e);
            },
        };
}
var ap = 'true',
    lp = sp();
function sp(e) {
    return { annotationType_: ap, options_: e, make_: up, extend_: cp, decorate_20223_: fp };
}
function up(e, t, n, r) {
    var i, o, a, l;
    if (n.get) return Cp.make_(e, t, n, r);
    if (n.set) {
        var s = Lp(t.toString(), n.set);
        return r === e.target_
            ? null === e.defineProperty_(t, { configurable: !ah.safeDescriptors || e.isPlainObject_, set: s })
                ? 0
                : 2
            : (Zf(r, t, { configurable: !0, set: s }), 2);
    }
    if (r !== e.target_ && 'function' == typeof n.value)
        return fd(n.value)
            ? (null != (l = this.options_) && l.autoBind ? Kh.bound : Kh).make_(e, t, n, r)
            : (null != (a = this.options_) && a.autoBind ? Ah.bound : Ah).make_(e, t, n, r);
    var u,
        c = !1 === (null == (i = this.options_) ? void 0 : i.deep) ? xp.ref : xp;
    'function' == typeof n.value &&
        null != (o = this.options_) &&
        o.autoBind &&
        (n.value = n.value.bind(null != (u = e.proxy_) ? u : e.target_));
    return c.make_(e, t, n, r);
}
function cp(e, t, n, r) {
    var i, o, a;
    if (n.get) return Cp.extend_(e, t, n, r);
    if (n.set)
        return e.defineProperty_(
            t,
            { configurable: !ah.safeDescriptors || e.isPlainObject_, set: Lp(t.toString(), n.set) },
            r,
        );
    'function' == typeof n.value &&
        null != (i = this.options_) &&
        i.autoBind &&
        (n.value = n.value.bind(null != (a = e.proxy_) ? a : e.target_));
    return (!1 === (null == (o = this.options_) ? void 0 : o.deep) ? xp.ref : xp).extend_(e, t, n, r);
}
function fp(e, t) {
    Gf("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var dp = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
function pp(e) {
    return e || dp;
}
Object.freeze(dp);
var hp = np('observable'),
    vp = np('observable.ref', { enhancer: Fd }),
    mp = np('observable.shallow', {
        enhancer: function (e, t, n) {
            return null == e || Bv(e) || xv(e) || Nv(e) || Lv(e)
                ? e
                : Array.isArray(e)
                  ? xp.array(e, { name: n, deep: !1 })
                  : cd(e)
                    ? xp.object(e, void 0, { name: n, deep: !1 })
                    : vd(e)
                      ? xp.map(e, { name: n, deep: !1 })
                      : md(e)
                        ? xp.set(e, { name: n, deep: !1 })
                        : void 0;
        },
    }),
    gp = np('observable.struct', {
        enhancer: function (e, t) {
            return om(e, t) ? t : e;
        },
    }),
    yp = Nd(hp);
function bp(e) {
    return !0 === e.deep
        ? Vd
        : !1 === e.deep
          ? Fd
          : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
            ? n
            : Vd;
    var t, n, r;
}
function _p(e, t, n) {
    return Rd(t)
        ? hp.decorate_20223_(e, t)
        : sd(t)
          ? void jd(e, t, hp)
          : Jh(e)
            ? e
            : cd(e)
              ? xp.object(e, t, n)
              : Array.isArray(e)
                ? xp.array(e, t)
                : vd(e)
                  ? xp.map(e, t)
                  : md(e)
                    ? xp.set(e, t)
                    : 'object' == typeof e && null !== e
                      ? e
                      : xp.box(e, t);
}
Yf(_p, yp);
var wp,
    kp,
    Sp = {
        box: function (e, t) {
            var n = pp(t);
            return new Vp(e, bp(n), n.name, !0, n.equals);
        },
        array: function (e, t) {
            var n = pp(t);
            return (!1 === ah.useProxies || !1 === n.proxy ? Jv : vv)(e, bp(n), n.name);
        },
        map: function (e, t) {
            var n = pp(t);
            return new Tv(e, bp(n), n.name);
        },
        set: function (e, t) {
            var n = pp(t);
            return new Rv(e, bp(n), n.name);
        },
        object: function (e, t, n) {
            return rm(function () {
                return Uh(
                    !1 === ah.useProxies || !1 === (null == n ? void 0 : n.proxy)
                        ? Dv({}, n)
                        : (function (e, t) {
                              var n, r;
                              return (
                                  id(),
                                  (e = Dv(e, t)),
                                  null != (r = (n = e[Ld]).proxy_) ? r : (n.proxy_ = new Proxy(e, rv))
                              );
                          })({}, n),
                    e,
                    t,
                );
            });
        },
        ref: Nd(vp),
        shallow: Nd(mp),
        deep: yp,
        struct: Nd(gp),
    },
    xp = Yf(_p, Sp),
    Op = 'computed',
    Ep = Zd(Op),
    Pp = Zd('computed.struct', { equals: Dd.structural }),
    Cp = function (e, t) {
        if (Rd(t)) return Ep.decorate_20223_(e, t);
        if (sd(t)) return jd(e, t, Ep);
        if (cd(e)) return Nd(Zd(Op, e));
        var n = cd(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new Wp(n));
    };
(Object.assign(Cp, Ep), (Cp.struct = Nd(Pp)));
var Ap,
    Tp = 0,
    Np = 1,
    jp = null != (wp = null == (kp = Xf(function () {}, 'name')) ? void 0 : kp.configurable) && wp,
    Rp = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
function Lp(e, t, n, r) {
    function i() {
        return Ip(e, n, t, r || this, arguments);
    }
    return (
        void 0 === n && (n = !1),
        (i.isMobxAction = !0),
        (i.toString = function () {
            return t.toString();
        }),
        jp && ((Rp.value = e), Zf(i, 'name', Rp)),
        i
    );
}
function Ip(e, t, n, r, i) {
    var o = (function (e, t, n, r) {
        var i = !1,
            o = 0,
            a = ah.trackingDerivation,
            l = !t || !a;
        ch();
        var s = ah.allowStateChanges;
        l && (Zp(), (s = Mp(!0)));
        var u = eh(!0),
            c = {
                runAsAction_: l,
                prevDerivation_: a,
                prevAllowStateChanges_: s,
                prevAllowStateReads_: u,
                notifySpy_: i,
                startTime_: o,
                actionId_: Np++,
                parentActionId_: Tp,
            };
        return ((Tp = c.actionId_), c);
    })(0, t);
    try {
        return n.apply(r, i);
    } catch (a) {
        throw ((o.error_ = a), a);
    } finally {
        !(function (e) {
            Tp !== e.actionId_ && Gf(30);
            ((Tp = e.parentActionId_), void 0 !== e.error_ && (ah.suppressReactionErrors = !0));
            (zp(e.prevAllowStateChanges_), th(e.prevAllowStateReads_), fh(), e.runAsAction_ && Jp(e.prevDerivation_));
            ah.suppressReactionErrors = !1;
        })(o);
    }
}
function Mp(e) {
    var t = ah.allowStateChanges;
    return ((ah.allowStateChanges = e), t);
}
function zp(e) {
    ah.allowStateChanges = e;
}
Ap = Symbol.toPrimitive;
var Dp,
    Vp = (function (e) {
        function t(t, n, r, i, o) {
            var a;
            return (
                void 0 === r && (r = 'ObservableValue'),
                void 0 === o && (o = Dd.default),
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
                (a.equals = o),
                (a.value_ = n(t, void 0, r)),
                a
            );
        }
        Od(t, e);
        var n = t.prototype;
        return (
            (n.dehanceValue = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
                (this.value_, (e = this.prepareNewValue_(e)) !== ah.UNCHANGED && this.setNewValue_(e));
            }),
            (n.prepareNewValue_ = function (e) {
                if (iv(this)) {
                    var t = av(this, { object: this, type: dv, newValue: e });
                    if (!t) return ah.UNCHANGED;
                    e = t.newValue;
                }
                return (
                    (e = this.enhancer(e, this.value_, this.name_)),
                    this.equals(this.value_, e) ? ah.UNCHANGED : e
                );
            }),
            (n.setNewValue_ = function (e) {
                var t = this.value_;
                ((this.value_ = e),
                    this.reportChanged(),
                    lv(this) && uv(this, { type: dv, object: this, newValue: e, oldValue: t }));
            }),
            (n.get = function () {
                return (this.reportObserved(), this.dehanceValue(this.value_));
            }),
            (n.intercept_ = function (e) {
                return ov(this, e);
            }),
            (n.observe_ = function (e, t) {
                return (
                    t &&
                        e({
                            observableKind: 'value',
                            debugObjectName: this.name_,
                            object: this,
                            type: dv,
                            newValue: this.value_,
                            oldValue: void 0,
                        }),
                    sv(this, e)
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
                return bd(this.get());
            }),
            (n[Ap] = function () {
                return this.valueOf();
            }),
            t
        );
    })(Id);
Dp = Symbol.toPrimitive;
var Fp,
    Bp,
    Up,
    $p,
    Wp = (function () {
        function e(e) {
            ((this.dependenciesState_ = Fp.NOT_TRACKING_),
                (this.observing_ = []),
                (this.newObserving_ = null),
                (this.isBeingObserved_ = !1),
                (this.isPendingUnobservation_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Fp.UP_TO_DATE_),
                (this.unboundDepsCount_ = 0),
                (this.value_ = new qp(null)),
                (this.name_ = void 0),
                (this.triggeredBy_ = void 0),
                (this.isComputing_ = !1),
                (this.isRunningSetter_ = !1),
                (this.derivation = void 0),
                (this.setter_ = void 0),
                (this.isTracing_ = Up.NONE),
                (this.scope_ = void 0),
                (this.equals_ = void 0),
                (this.requiresReaction_ = void 0),
                (this.keepAlive_ = void 0),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                e.get || Gf(31),
                (this.derivation = e.get),
                (this.name_ = e.name || 'ComputedValue'),
                e.set && (this.setter_ = Lp('ComputedValue-setter', e.set)),
                (this.equals_ = e.equals || (e.compareStructural || e.struct ? Dd.structural : Dd.default)),
                (this.scope_ = e.context),
                (this.requiresReaction_ = e.requiresReaction),
                (this.keepAlive_ = !!e.keepAlive));
        }
        var t = e.prototype;
        return (
            (t.onBecomeStale_ = function () {
                !(function (e) {
                    if (e.lowestObserverState_ !== Fp.UP_TO_DATE_) return;
                    ((e.lowestObserverState_ = Fp.POSSIBLY_STALE_),
                        e.observers_.forEach(function (e) {
                            e.dependenciesState_ === Fp.UP_TO_DATE_ &&
                                ((e.dependenciesState_ = Fp.POSSIBLY_STALE_), e.onBecomeStale_());
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
                    (this.isComputing_ && Gf(32, this.name_, this.derivation),
                    0 !== ah.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                ) {
                    if ((dh(this), Kp(this))) {
                        var e = ah.trackingContext;
                        (this.keepAlive_ && !e && (ah.trackingContext = this),
                            this.trackAndCompute() &&
                                (function (e) {
                                    if (e.lowestObserverState_ === Fp.STALE_) return;
                                    ((e.lowestObserverState_ = Fp.STALE_),
                                        e.observers_.forEach(function (t) {
                                            t.dependenciesState_ === Fp.POSSIBLY_STALE_
                                                ? (t.dependenciesState_ = Fp.STALE_)
                                                : t.dependenciesState_ === Fp.UP_TO_DATE_ &&
                                                  (e.lowestObserverState_ = Fp.UP_TO_DATE_);
                                        }));
                                })(this),
                            (ah.trackingContext = e));
                    }
                } else Kp(this) && (this.warnAboutUntrackedRead_(), ch(), (this.value_ = this.computeValue_(!1)), fh());
                var t = this.value_;
                if (Gp(t)) throw t.cause;
                return t;
            }),
            (t.set = function (e) {
                if (this.setter_) {
                    (this.isRunningSetter_ && Gf(33, this.name_), (this.isRunningSetter_ = !0));
                    try {
                        this.setter_.call(this.scope_, e);
                    } finally {
                        this.isRunningSetter_ = !1;
                    }
                } else Gf(34, this.name_);
            }),
            (t.trackAndCompute = function () {
                var e = this.value_,
                    t = this.dependenciesState_ === Fp.NOT_TRACKING_,
                    n = this.computeValue_(!0),
                    r = t || Gp(e) || Gp(n) || !this.equals_(e, n);
                return (r && (this.value_ = n), r);
            }),
            (t.computeValue_ = function (e) {
                this.isComputing_ = !0;
                var t,
                    n = Mp(!1);
                if (e) t = Qp(this, this.derivation, this.scope_);
                else if (!0 === ah.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                else
                    try {
                        t = this.derivation.call(this.scope_);
                    } catch (r) {
                        t = new qp(r);
                    }
                return (zp(n), (this.isComputing_ = !1), t);
            }),
            (t.suspend_ = function () {
                this.keepAlive_ || (Yp(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
                var n = this,
                    r = !0,
                    i = void 0;
                return (function (e, t) {
                    var n, r, i, o, a;
                    void 0 === t && (t = td);
                    var l,
                        s = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun';
                    if (t.scheduler || t.delay) {
                        var u = jh(t),
                            c = !1;
                        l = new hh(
                            s,
                            function () {
                                c ||
                                    ((c = !0),
                                    u(function () {
                                        ((c = !1), l.isDisposed_ || l.track(f));
                                    }));
                            },
                            t.onError,
                            t.requiresObservable,
                        );
                    } else
                        l = new hh(
                            s,
                            function () {
                                this.track(f);
                            },
                            t.onError,
                            t.requiresObservable,
                        );
                    function f() {
                        e(l);
                    }
                    (null != (i = t) && null != (o = i.signal) && o.aborted) || l.schedule_();
                    return l.getDisposer_(null == (a = t) ? void 0 : a.signal);
                })(function () {
                    var o = n.get();
                    if (!r || t) {
                        var a = Zp();
                        (e({
                            observableKind: 'computed',
                            debugObjectName: n.name_,
                            type: dv,
                            object: n,
                            newValue: o,
                            oldValue: i,
                        }),
                            Jp(a));
                    }
                    ((r = !1), (i = o));
                });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
                return this.name_ + '[' + this.derivation.toString() + ']';
            }),
            (t.valueOf = function () {
                return bd(this.get());
            }),
            (t[Dp] = function () {
                return this.valueOf();
            }),
            e
        );
    })(),
    Hp = hd('ComputedValue', Wp);
(((Bp = Fp || (Fp = {}))[(Bp.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
    (Bp[(Bp.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
    (Bp[(Bp.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
    (Bp[(Bp.STALE_ = 2)] = 'STALE_'),
    (($p = Up || (Up = {}))[($p.NONE = 0)] = 'NONE'),
    ($p[($p.LOG = 1)] = 'LOG'),
    ($p[($p.BREAK = 2)] = 'BREAK'));
var qp = function (e) {
    ((this.cause = void 0), (this.cause = e));
};
function Gp(e) {
    return e instanceof qp;
}
function Kp(e) {
    switch (e.dependenciesState_) {
        case Fp.UP_TO_DATE_:
            return !1;
        case Fp.NOT_TRACKING_:
        case Fp.STALE_:
            return !0;
        case Fp.POSSIBLY_STALE_:
            for (var t = eh(!0), n = Zp(), r = e.observing_, i = r.length, o = 0; o < i; o++) {
                var a = r[o];
                if (Hp(a)) {
                    if (ah.disableErrorBoundaries) a.get();
                    else
                        try {
                            a.get();
                        } catch (l) {
                            return (Jp(n), th(t), !0);
                        }
                    if (e.dependenciesState_ === Fp.STALE_) return (Jp(n), th(t), !0);
                }
            }
            return (nh(e), Jp(n), th(t), !1);
    }
}
function Qp(e, t, n) {
    var r = eh(!0);
    (nh(e),
        (e.newObserving_ = new Array(e.observing_.length + 100)),
        (e.unboundDepsCount_ = 0),
        (e.runId_ = ++ah.runId));
    var i,
        o = ah.trackingDerivation;
    if (((ah.trackingDerivation = e), ah.inBatch++, !0 === ah.disableErrorBoundaries)) i = t.call(n);
    else
        try {
            i = t.call(n);
        } catch (a) {
            i = new qp(a);
        }
    return (
        ah.inBatch--,
        (ah.trackingDerivation = o),
        (function (e) {
            for (
                var t = e.observing_,
                    n = (e.observing_ = e.newObserving_),
                    r = Fp.UP_TO_DATE_,
                    i = 0,
                    o = e.unboundDepsCount_,
                    a = 0;
                a < o;
                a++
            ) {
                var l = n[a];
                (0 === l.diffValue_ && ((l.diffValue_ = 1), i !== a && (n[i] = l), i++),
                    l.dependenciesState_ > r && (r = l.dependenciesState_));
            }
            ((n.length = i), (e.newObserving_ = null), (o = t.length));
            for (; o--; ) {
                var s = t[o];
                (0 === s.diffValue_ && sh(s, e), (s.diffValue_ = 0));
            }
            for (; i--; ) {
                var u = n[i];
                1 === u.diffValue_ && ((u.diffValue_ = 0), lh(u, e));
            }
            r !== Fp.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        th(r),
        i
    );
}
function Yp(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) sh(t[n], e);
    e.dependenciesState_ = Fp.NOT_TRACKING_;
}
function Xp(e) {
    var t = Zp();
    try {
        return e();
    } finally {
        Jp(t);
    }
}
function Zp() {
    var e = ah.trackingDerivation;
    return ((ah.trackingDerivation = null), e);
}
function Jp(e) {
    ah.trackingDerivation = e;
}
function eh(e) {
    var t = ah.allowStateReads;
    return ((ah.allowStateReads = e), t);
}
function th(e) {
    ah.allowStateReads = e;
}
function nh(e) {
    if (e.dependenciesState_ !== Fp.UP_TO_DATE_) {
        e.dependenciesState_ = Fp.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = Fp.UP_TO_DATE_;
    }
}
var rh = function () {
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
    ih = !0,
    oh = !1,
    ah = (function () {
        var e = Qf();
        return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ih = !1),
            e.__mobxGlobals && e.__mobxGlobals.version !== new rh().version && (ih = !1),
            ih
                ? e.__mobxGlobals
                    ? ((e.__mobxInstanceCount += 1),
                      e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                      e.__mobxGlobals)
                    : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new rh()))
                : (setTimeout(function () {
                      oh || Gf(35);
                  }, 1),
                  new rh())
        );
    })();
function lh(e, t) {
    (e.observers_.add(t),
        e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_));
}
function sh(e, t) {
    (e.observers_.delete(t), 0 === e.observers_.size && uh(e));
}
function uh(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), ah.pendingUnobservations.push(e));
}
function ch() {
    ah.inBatch++;
}
function fh() {
    if (0 == --ah.inBatch) {
        gh();
        for (var e = ah.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            ((n.isPendingUnobservation_ = !1),
                0 === n.observers_.size &&
                    (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof Wp && n.suspend_()));
        }
        ah.pendingUnobservations = [];
    }
}
function dh(e) {
    var t = ah.trackingDerivation;
    return null !== t
        ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ && ah.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
          e.isBeingObserved_)
        : (0 === e.observers_.size && ah.inBatch > 0 && uh(e), !1);
}
function ph(e) {
    e.lowestObserverState_ !== Fp.STALE_ &&
        ((e.lowestObserverState_ = Fp.STALE_),
        e.observers_.forEach(function (e) {
            (e.dependenciesState_ === Fp.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = Fp.STALE_));
        }));
}
var hh = (function () {
        function e(e, t, n, r) {
            (void 0 === e && (e = 'Reaction'),
                (this.name_ = void 0),
                (this.onInvalidate_ = void 0),
                (this.errorHandler_ = void 0),
                (this.requiresObservable_ = void 0),
                (this.observing_ = []),
                (this.newObserving_ = []),
                (this.dependenciesState_ = Fp.NOT_TRACKING_),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.unboundDepsCount_ = 0),
                (this.isDisposed_ = !1),
                (this.isScheduled_ = !1),
                (this.isTrackPending_ = !1),
                (this.isRunning_ = !1),
                (this.isTracing_ = Up.NONE),
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
                this.isScheduled_ || ((this.isScheduled_ = !0), ah.pendingReactions.push(this), gh());
            }),
            (t.isScheduled = function () {
                return this.isScheduled_;
            }),
            (t.runReaction_ = function () {
                if (!this.isDisposed_) {
                    (ch(), (this.isScheduled_ = !1));
                    var e = ah.trackingContext;
                    if (((ah.trackingContext = this), Kp(this))) {
                        this.isTrackPending_ = !0;
                        try {
                            this.onInvalidate_();
                        } catch (t) {
                            this.reportExceptionInDerivation_(t);
                        }
                    }
                    ((ah.trackingContext = e), fh());
                }
            }),
            (t.track = function (e) {
                if (!this.isDisposed_) {
                    (ch(), (this.isRunning_ = !0));
                    var t = ah.trackingContext;
                    ah.trackingContext = this;
                    var n = Qp(this, e, void 0);
                    ((ah.trackingContext = t),
                        (this.isRunning_ = !1),
                        (this.isTrackPending_ = !1),
                        this.isDisposed_ && Yp(this),
                        Gp(n) && this.reportExceptionInDerivation_(n.cause),
                        fh());
                }
            }),
            (t.reportExceptionInDerivation_ = function (e) {
                var t = this;
                if (this.errorHandler_) this.errorHandler_(e, this);
                else {
                    if (ah.disableErrorBoundaries) throw e;
                    var n = "[mobx] uncaught error in '" + this + "'";
                    (ah.suppressReactionErrors || console.error(n, e),
                        ah.globalReactionErrorHandlers.forEach(function (n) {
                            return n(e, t);
                        }));
                }
            }),
            (t.dispose = function () {
                this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (ch(), Yp(this), fh()));
            }),
            (t.getDisposer_ = function (e) {
                var t = this,
                    n = function n() {
                        (t.dispose(), null == e || null == e.removeEventListener || e.removeEventListener('abort', n));
                    };
                return (null == e || null == e.addEventListener || e.addEventListener('abort', n), (n[Ld] = this), n);
            }),
            (t.toString = function () {
                return 'Reaction[' + this.name_ + ']';
            }),
            (t.trace = function (e) {}),
            e
        );
    })(),
    vh = 100,
    mh = function (e) {
        return e();
    };
function gh() {
    ah.inBatch > 0 || ah.isRunningReactions || mh(yh);
}
function yh() {
    ah.isRunningReactions = !0;
    for (var e = ah.pendingReactions, t = 0; e.length > 0; ) {
        ++t === vh && (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
    }
    ah.isRunningReactions = !1;
}
var bh = hd('Reaction', hh);
var _h = 'action',
    wh = 'autoAction',
    kh = '<unnamed action>',
    Sh = Ud(_h),
    xh = Ud('action.bound', { bound: !0 }),
    Oh = Ud(wh, { autoAction: !0 }),
    Eh = Ud('autoAction.bound', { autoAction: !0, bound: !0 });
function Ph(e) {
    return function (t, n) {
        return ld(t)
            ? Lp(t.name || kh, t, e)
            : ld(n)
              ? Lp(t, n, e)
              : Rd(n)
                ? (e ? Oh : Sh).decorate_20223_(t, n)
                : sd(n)
                  ? jd(t, n, e ? Oh : Sh)
                  : sd(t)
                    ? Nd(Ud(e ? wh : _h, { name: t, autoAction: e }))
                    : void 0;
    };
}
var Ch = Ph(!1);
Object.assign(Ch, Sh);
var Ah = Ph(!0);
function Th(e) {
    return ld(e) && !0 === e.isMobxAction;
}
(Object.assign(Ah, Oh), (Ch.bound = Nd(xh)), (Ah.bound = Nd(Eh)));
var Nh = function (e) {
    return e();
};
function jh(e) {
    return e.scheduler
        ? e.scheduler
        : e.delay
          ? function (t) {
                return setTimeout(t, e.delay);
            }
          : Nh;
}
function Rh(e, t, n) {
    var r, i, o, a;
    void 0 === n && (n = td);
    var l,
        s,
        u,
        c,
        f = null != (r = n.name) ? r : 'Reaction',
        d = Ch(
            f,
            n.onError
                ? ((l = n.onError),
                  (s = t),
                  function () {
                      try {
                          return s.apply(this, arguments);
                      } catch (e) {
                          l.call(this, e);
                      }
                  })
                : t,
        ),
        p = !n.scheduler && !n.delay,
        h = jh(n),
        v = !0,
        m = !1,
        g = n.compareStructural ? Dd.structural : n.equals || Dd.default,
        y = new hh(
            f,
            function () {
                v || p ? b() : m || ((m = !0), h(b));
            },
            n.onError,
            n.requiresObservable,
        );
    function b() {
        if (((m = !1), !y.isDisposed_)) {
            var t = !1;
            (y.track(function () {
                var n = (function (e, t) {
                    var n = Mp(e);
                    try {
                        return t();
                    } finally {
                        zp(n);
                    }
                })(!1, function () {
                    return e(y);
                });
                ((t = v || !g(u, n)), (c = u), (u = n));
            }),
                ((v && n.fireImmediately) || (!v && t)) && d(u, c, y),
                (v = !1));
        }
    }
    return (
        (null != (i = n) && null != (o = i.signal) && o.aborted) || y.schedule_(),
        y.getDisposer_(null == (a = n) ? void 0 : a.signal)
    );
}
var Lh = 'onBO',
    Ih = 'onBUO';
function Mh(e, t, n) {
    return zh(Ih, e, t, n);
}
function zh(e, t, n, r) {
    var i = em(t),
        o = ld(r) ? r : n,
        a = e + 'L';
    return (
        i[a] ? i[a].add(o) : (i[a] = new Set([o])),
        function () {
            var e = i[a];
            e && (e.delete(o), 0 === e.size && delete i[a]);
        }
    );
}
var Dh = 'never',
    Vh = 'always',
    Fh = 'observed';
function Bh(e) {
    !0 === e.isolateGlobalState &&
        (function () {
            if (((ah.pendingReactions.length || ah.inBatch || ah.isRunningReactions) && Gf(36), (oh = !0), ih)) {
                var e = Qf();
                (0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0), (ah = new rh()));
            }
        })();
    var t,
        n,
        r = e.useProxies,
        i = e.enforceActions;
    if (
        (void 0 !== r && (ah.useProxies = r === Vh || (r !== Dh && 'undefined' != typeof Proxy)),
        'ifavailable' === r && (ah.verifyProxies = !0),
        void 0 !== i)
    ) {
        var o = i === Vh ? Vh : i === Fh;
        ((ah.enforceActions = o), (ah.allowStateChanges = !0 !== o && o !== Vh));
    }
    ([
        'computedRequiresReaction',
        'reactionRequiresObservable',
        'observableRequiresReaction',
        'disableErrorBoundaries',
        'safeDescriptors',
    ].forEach(function (t) {
        t in e && (ah[t] = !!e[t]);
    }),
        (ah.allowStateReads = !ah.observableRequiresReaction),
        e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = mh),
            (mh = function (e) {
                return t(function () {
                    return n(e);
                });
            })));
}
function Uh(e, t, n, r) {
    var i = wd(t);
    return (
        rm(function () {
            var t = Dv(e, r)[Ld];
            yd(i).forEach(function (e) {
                t.extend_(e, i[e], !n || !(e in n) || n[e]);
            });
        }),
        e
    );
}
function $h(e) {
    var t,
        n = { name: e.name_ };
    return (
        e.observing_ &&
            e.observing_.length > 0 &&
            (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map($h)),
        n
    );
}
var Wh = 0;
function Hh() {
    this.message = 'FLOW_CANCELLED';
}
Hh.prototype = Object.create(Error.prototype);
var qh = Gd('flow'),
    Gh = Gd('flow.bound', { bound: !0 }),
    Kh = Object.assign(function (e, t) {
        if (Rd(t)) return qh.decorate_20223_(e, t);
        if (sd(t)) return jd(e, t, qh);
        var n = e,
            r = n.name || '<unnamed flow>',
            i = function () {
                var e,
                    t = arguments,
                    i = ++Wh,
                    o = Ch(r + ' - runid: ' + i + ' - init', n).apply(this, t),
                    a = void 0,
                    l = new Promise(function (t, n) {
                        var l = 0;
                        function s(e) {
                            var t;
                            a = void 0;
                            try {
                                t = Ch(r + ' - runid: ' + i + ' - yield ' + l++, o.next).call(o, e);
                            } catch (s) {
                                return n(s);
                            }
                            c(t);
                        }
                        function u(e) {
                            var t;
                            a = void 0;
                            try {
                                t = Ch(r + ' - runid: ' + i + ' - yield ' + l++, o.throw).call(o, e);
                            } catch (s) {
                                return n(s);
                            }
                            c(t);
                        }
                        function c(e) {
                            if (!ld(null == e ? void 0 : e.then))
                                return e.done ? t(e.value) : (a = Promise.resolve(e.value)).then(s, u);
                            e.then(c, n);
                        }
                        ((e = n), s(void 0));
                    });
                return (
                    (l.cancel = Ch(r + ' - runid: ' + i + ' - cancel', function () {
                        try {
                            a && Qh(a);
                            var t = o.return(void 0),
                                n = Promise.resolve(t.value);
                            (n.then(ad, ad), Qh(n), e(new Hh()));
                        } catch (r) {
                            e(r);
                        }
                    })),
                    l
                );
            };
        return ((i.isMobXFlow = !0), i);
    }, qh);
function Qh(e) {
    ld(e.cancel) && e.cancel();
}
function Yh(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function Xh(e, t) {
    if (void 0 === t) return Hp(e);
    if (!1 === Bv(e)) return !1;
    if (!e[Ld].values_.has(t)) return !1;
    var n = em(e, t);
    return Hp(n);
}
function Zh(e, t) {
    return Xh(e, t);
}
function Jh(e) {
    return (function (e, t) {
        return !!e && (Bv(e) || !!e[Ld] || Md(e) || bh(e) || Hp(e));
    })(e);
}
function ev(e, t, n, r) {
    return ld(n)
        ? (function (e, t, n, r) {
              return tm(e, t).observe_(n, r);
          })(e, t, n, r)
        : (function (e, t, n) {
              return tm(e).observe_(t, n);
          })(e, t, n);
}
function tv(e, t) {
    (void 0 === t && (t = void 0), ch());
    try {
        return e.apply(t);
    } finally {
        fh();
    }
}
function nv(e) {
    return e[Ld];
}
Kh.bound = Nd(Gh);
var rv = {
    has: function (e, t) {
        return nv(e).has_(t);
    },
    get: function (e, t) {
        return nv(e).get_(t);
    },
    set: function (e, t, n) {
        var r;
        return !!sd(t) && (null == (r = nv(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
        var n;
        return !!sd(t) && (null == (n = nv(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
        var r;
        return null == (r = nv(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
        return nv(e).ownKeys_();
    },
    preventExtensions: function (e) {
        Gf(13);
    },
};
function iv(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
}
function ov(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
        n.push(t),
        od(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function av(e, t) {
    var n = Zp();
    try {
        for (
            var r = [].concat(e.interceptors_ || []), i = 0, o = r.length;
            i < o && ((t = r[i](t)) && !t.type && Gf(14), t);
            i++
        );
        return t;
    } finally {
        Jp(n);
    }
}
function lv(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
}
function sv(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
        n.push(t),
        od(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function uv(e, t) {
    var n = Zp(),
        r = e.changeListeners_;
    if (r) {
        for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](t);
        Jp(n);
    }
}
function cv(e, t, n) {
    return (
        rm(function () {
            var r = Dv(e, n)[Ld];
            (null != t ||
                (t = (function (e) {
                    return (_d(e, Td) || dd(e, Td, xd({}, e[Td])), e[Td]);
                })(e)),
                yd(t).forEach(function (e) {
                    return r.make_(e, t[e]);
                }));
        }),
        e
    );
}
var fv = 'splice',
    dv = 'update',
    pv = {
        get: function (e, t) {
            var n = e[Ld];
            return t === Ld
                ? n
                : 'length' === t
                  ? n.getArrayLength_()
                  : 'string' != typeof t || isNaN(t)
                    ? _d(mv, t)
                        ? mv[t]
                        : e[t]
                    : n.get_(parseInt(t));
        },
        set: function (e, t, n) {
            var r = e[Ld];
            return (
                'length' === t && r.setArrayLength_(n),
                'symbol' == typeof t || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n),
                !0
            );
        },
        preventExtensions: function () {
            Gf(15);
        },
    },
    hv = (function () {
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
                (this.atom_ = new Id(e)),
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
                return ov(this, e);
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
                    sv(this, e)
                );
            }),
            (t.getArrayLength_ = function () {
                return (this.atom_.reportObserved(), this.values_.length);
            }),
            (t.setArrayLength_ = function (e) {
                ('number' != typeof e || isNaN(e) || e < 0) && Gf('Out of range: ' + e);
                var t = this.values_.length;
                if (e !== t)
                    if (e > t) {
                        for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
                        this.spliceWithArray_(t, 0, n);
                    } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
                (e !== this.lastKnownLength_ && Gf(16),
                    (this.lastKnownLength_ += t),
                    this.legacyMode_ && t > 0 && Zv(e + t + 1));
            }),
            (t.spliceWithArray_ = function (e, t, n) {
                var r = this;
                this.atom_;
                var i = this.values_.length;
                if (
                    (void 0 === e ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
                    (t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e))),
                    void 0 === n && (n = ed),
                    iv(this))
                ) {
                    var o = av(this, { object: this.proxy_, type: fv, index: e, removedCount: t, added: n });
                    if (!o) return ed;
                    ((t = o.removedCount), (n = o.added));
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
                    this.updateArrayLength_(i, a);
                }
                var l = this.spliceItemsIntoValues_(e, t, n);
                return ((0 === t && 0 === n.length) || this.notifyArraySplice_(e, n, l), this.dehanceValues_(l));
            }),
            (t.spliceItemsIntoValues_ = function (e, t, n) {
                var r;
                if (n.length < 1e4) return (r = this.values_).splice.apply(r, [e, t].concat(n));
                var i = this.values_.slice(e, e + t),
                    o = this.values_.slice(e + t);
                this.values_.length += n.length - t;
                for (var a = 0; a < n.length; a++) this.values_[e + a] = n[a];
                for (var l = 0; l < o.length; l++) this.values_[e + n.length + l] = o[l];
                return i;
            }),
            (t.notifyArrayChildUpdate_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    i = lv(this),
                    o =
                        i || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  type: dv,
                                  debugObjectName: this.atom_.name_,
                                  index: e,
                                  newValue: t,
                                  oldValue: n,
                              }
                            : null;
                (this.atom_.reportChanged(), i && uv(this, o));
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    i = lv(this),
                    o =
                        i || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  debugObjectName: this.atom_.name_,
                                  type: fv,
                                  index: e,
                                  removed: n,
                                  added: t,
                                  removedCount: n.length,
                                  addedCount: t.length,
                              }
                            : null;
                (this.atom_.reportChanged(), i && uv(this, o));
            }),
            (t.get_ = function (e) {
                if (!(this.legacyMode_ && e >= this.values_.length))
                    return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]));
                console.warn('[mobx] Out of bounds read: ' + e);
            }),
            (t.set_ = function (e, t) {
                var n = this.values_;
                if ((this.legacyMode_ && e > n.length && Gf(17, e, n.length), e < n.length)) {
                    this.atom_;
                    var r = n[e];
                    if (iv(this)) {
                        var i = av(this, { type: dv, object: this.proxy_, index: e, newValue: t });
                        if (!i) return;
                        t = i.newValue;
                    }
                    (t = this.enhancer_(t, r)) !== r && ((n[e] = t), this.notifyArrayChildUpdate_(e, t, r));
                } else {
                    for (var o = new Array(e + 1 - n.length), a = 0; a < o.length - 1; a++) o[a] = void 0;
                    ((o[o.length - 1] = t), this.spliceWithArray_(n.length, 0, o));
                }
            }),
            e
        );
    })();
function vv(e, t, n, r) {
    return (
        void 0 === n && (n = 'ObservableArray'),
        void 0 === r && (r = !1),
        id(),
        rm(function () {
            var i = new hv(n, t, r, !1);
            pd(i.values_, Ld, i);
            var o = new Proxy(i.values_, pv);
            return ((i.proxy_ = o), e && e.length && i.spliceWithArray_(0, 0, e), o);
        })
    );
}
var mv = {
    clear: function () {
        return this.splice(0);
    },
    replace: function (e) {
        var t = this[Ld];
        return t.spliceWithArray_(0, t.values_.length, e);
    },
    toJSON: function () {
        return this.slice();
    },
    splice: function (e, t) {
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
        var o = this[Ld];
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return o.spliceWithArray_(e);
            case 2:
                return o.spliceWithArray_(e, t);
        }
        return o.spliceWithArray_(e, t, r);
    },
    spliceWithArray: function (e, t, n) {
        return this[Ld].spliceWithArray_(e, t, n);
    },
    push: function () {
        for (var e = this[Ld], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(e.values_.length, 0, n), e.values_.length);
    },
    pop: function () {
        return this.splice(Math.max(this[Ld].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        for (var e = this[Ld], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(0, 0, n), e.values_.length);
    },
    reverse: function () {
        return (ah.trackingDerivation && Gf(37, 'reverse'), this.replace(this.slice().reverse()), this);
    },
    sort: function () {
        ah.trackingDerivation && Gf(37, 'sort');
        var e = this.slice();
        return (e.sort.apply(e, arguments), this.replace(e), this);
    },
    remove: function (e) {
        var t = this[Ld],
            n = t.dehanceValues_(t.values_).indexOf(e);
        return n > -1 && (this.splice(n, 1), !0);
    },
};
function gv(e, t) {
    'function' == typeof Array.prototype[e] && (mv[e] = t(e));
}
function yv(e) {
    return function () {
        var t = this[Ld];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments);
    };
}
function bv(e) {
    return function (t, n) {
        var r = this,
            i = this[Ld];
        return (
            i.atom_.reportObserved(),
            i.dehanceValues_(i.values_)[e](function (e, i) {
                return t.call(n, e, i, r);
            })
        );
    };
}
function _v(e) {
    return function () {
        var t = this,
            n = this[Ld];
        n.atom_.reportObserved();
        var r = n.dehanceValues_(n.values_),
            i = arguments[0];
        return (
            (arguments[0] = function (e, n, r) {
                return i(e, n, r, t);
            }),
            r[e].apply(r, arguments)
        );
    };
}
(gv('at', yv),
    gv('concat', yv),
    gv('flat', yv),
    gv('includes', yv),
    gv('indexOf', yv),
    gv('join', yv),
    gv('lastIndexOf', yv),
    gv('slice', yv),
    gv('toString', yv),
    gv('toLocaleString', yv),
    gv('toSorted', yv),
    gv('toSpliced', yv),
    gv('with', yv),
    gv('every', bv),
    gv('filter', bv),
    gv('find', bv),
    gv('findIndex', bv),
    gv('findLast', bv),
    gv('findLastIndex', bv),
    gv('flatMap', bv),
    gv('forEach', bv),
    gv('map', bv),
    gv('some', bv),
    gv('toReversed', bv),
    gv('reduce', _v),
    gv('reduceRight', _v));
var wv,
    kv,
    Sv = hd('ObservableArrayAdministration', hv);
function xv(e) {
    return ud(e) && Sv(e[Ld]);
}
var Ov = {},
    Ev = 'add',
    Pv = 'delete';
((wv = Symbol.iterator), (kv = Symbol.toStringTag));
var Cv,
    Av,
    Tv = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Vd),
                void 0 === n && (n = 'ObservableMap'),
                (this.enhancer_ = void 0),
                (this.name_ = void 0),
                (this[Ld] = Ov),
                (this.data_ = void 0),
                (this.hasMap_ = void 0),
                (this.keysAtom_ = void 0),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = t),
                (this.name_ = n),
                ld(Map) || Gf(18),
                rm(function () {
                    ((r.keysAtom_ = zd('ObservableMap.keys()')),
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
                if (!ah.trackingDerivation) return this.has_(e);
                var n = this.hasMap_.get(e);
                if (!n) {
                    var r = (n = new Vp(this.has_(e), Fd, 'ObservableMap.key?', !1));
                    (this.hasMap_.set(e, r),
                        Mh(r, function () {
                            return t.hasMap_.delete(e);
                        }));
                }
                return n.get();
            }),
            (t.set = function (e, t) {
                var n = this.has_(e);
                if (iv(this)) {
                    var r = av(this, { type: n ? dv : Ev, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, iv(this)) && !av(this, { type: Pv, object: this, name: e })) return !1;
                if (this.has_(e)) {
                    var n = lv(this),
                        r = n
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: Pv,
                                  object: this,
                                  oldValue: this.data_.get(e).value_,
                                  name: e,
                              }
                            : null;
                    return (
                        tv(function () {
                            var n;
                            (t.keysAtom_.reportChanged(),
                                null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                                t.data_.get(e).setNewValue_(void 0),
                                t.data_.delete(e));
                        }),
                        n && uv(this, r),
                        !0
                    );
                }
                return !1;
            }),
            (t.updateValue_ = function (e, t) {
                var n = this.data_.get(e);
                if ((t = n.prepareNewValue_(t)) !== ah.UNCHANGED) {
                    var r = lv(this),
                        i = r
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: dv,
                                  object: this,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), r && uv(this, i));
                }
            }),
            (t.addValue_ = function (e, t) {
                var n = this;
                (this.keysAtom_,
                    tv(function () {
                        var r,
                            i = new Vp(t, n.enhancer_, 'ObservableMap.key', !1);
                        (n.data_.set(e, i),
                            (t = i.value_),
                            null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                            n.keysAtom_.reportChanged());
                    }));
                var r = lv(this),
                    i = r
                        ? {
                              observableKind: 'map',
                              debugObjectName: this.name_,
                              type: Ev,
                              object: this,
                              name: e,
                              newValue: t,
                          }
                        : null;
                r && uv(this, i);
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
                return sm({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            i = n.value;
                        return { done: r, value: r ? void 0 : e.get(i) };
                    },
                });
            }),
            (t.entries = function () {
                var e = this,
                    t = this.keys();
                return sm({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            i = n.value;
                        return { done: r, value: r ? void 0 : [i, e.get(i)] };
                    },
                });
            }),
            (t[wv] = function () {
                return this.entries();
            }),
            (t.forEach = function (e, t) {
                for (var n, r = Ad(this); !(n = r()).done; ) {
                    var i = n.value,
                        o = i[0],
                        a = i[1];
                    e.call(t, a, o, this);
                }
            }),
            (t.merge = function (e) {
                var t = this;
                return (
                    Nv(e) && (e = new Map(e)),
                    tv(function () {
                        cd(e)
                            ? (function (e) {
                                  var t = Object.keys(e);
                                  if (!gd) return t;
                                  var n = Object.getOwnPropertySymbols(e);
                                  return n.length
                                      ? [].concat(
                                            t,
                                            n.filter(function (t) {
                                                return Jf.propertyIsEnumerable.call(e, t);
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
                              : vd(e)
                                ? (e.constructor !== Map && Gf(19, e),
                                  e.forEach(function (e, n) {
                                      return t.set(n, e);
                                  }))
                                : null != e && Gf(20, e);
                    }),
                    this
                );
            }),
            (t.clear = function () {
                var e = this;
                tv(function () {
                    Xp(function () {
                        for (var t, n = Ad(e.keys()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    tv(function () {
                        for (
                            var n,
                                r = (function (e) {
                                    if (vd(e) || Nv(e)) return e;
                                    if (Array.isArray(e)) return new Map(e);
                                    if (cd(e)) {
                                        var t = new Map();
                                        for (var n in e) t.set(n, e[n]);
                                        return t;
                                    }
                                    return Gf(21, e);
                                })(e),
                                i = new Map(),
                                o = !1,
                                a = Ad(t.data_.keys());
                            !(n = a()).done;

                        ) {
                            var l = n.value;
                            if (!r.has(l))
                                if (t.delete(l)) o = !0;
                                else {
                                    var s = t.data_.get(l);
                                    i.set(l, s);
                                }
                        }
                        for (var u, c = Ad(r.entries()); !(u = c()).done; ) {
                            var f = u.value,
                                d = f[0],
                                p = f[1],
                                h = t.data_.has(d);
                            if ((t.set(d, p), t.data_.has(d))) {
                                var v = t.data_.get(d);
                                (i.set(d, v), h || (o = !0));
                            }
                        }
                        if (!o)
                            if (t.data_.size !== i.size) t.keysAtom_.reportChanged();
                            else
                                for (var m = t.data_.keys(), g = i.keys(), y = m.next(), b = g.next(); !y.done; ) {
                                    if (y.value !== b.value) {
                                        t.keysAtom_.reportChanged();
                                        break;
                                    }
                                    ((y = m.next()), (b = g.next()));
                                }
                        t.data_ = i;
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
                return sv(this, e);
            }),
            (t.intercept_ = function (e) {
                return ov(this, e);
            }),
            Sd(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.keysAtom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: kv,
                    get: function () {
                        return 'Map';
                    },
                },
            ]),
            e
        );
    })(),
    Nv = hd('ObservableMap', Tv);
var jv = {};
((Cv = Symbol.iterator), (Av = Symbol.toStringTag));
var Rv = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Vd),
                void 0 === n && (n = 'ObservableSet'),
                (this.name_ = void 0),
                (this[Ld] = jv),
                (this.data_ = new Set()),
                (this.atom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = void 0),
                (this.name_ = n),
                ld(Set) || Gf(22),
                (this.enhancer_ = function (e, r) {
                    return t(e, r, n);
                }),
                rm(function () {
                    ((r.atom_ = zd(r.name_)), e && r.replace(e));
                }));
        }
        var t = e.prototype;
        return (
            (t.dehanceValue_ = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
                var e = this;
                tv(function () {
                    Xp(function () {
                        for (var t, n = Ad(e.data_.values()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.forEach = function (e, t) {
                for (var n, r = Ad(this); !(n = r()).done; ) {
                    var i = n.value;
                    e.call(t, i, i, this);
                }
            }),
            (t.add = function (e) {
                var t = this;
                if ((this.atom_, iv(this)) && !av(this, { type: Ev, object: this, newValue: e })) return this;
                if (!this.has(e)) {
                    tv(function () {
                        (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
                    });
                    var n = lv(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: Ev,
                                  object: this,
                                  newValue: e,
                              }
                            : null;
                    n && uv(this, r);
                }
                return this;
            }),
            (t.delete = function (e) {
                var t = this;
                if (iv(this) && !av(this, { type: Pv, object: this, oldValue: e })) return !1;
                if (this.has(e)) {
                    var n = lv(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: Pv,
                                  object: this,
                                  oldValue: e,
                              }
                            : null;
                    return (
                        tv(function () {
                            (t.atom_.reportChanged(), t.data_.delete(e));
                        }),
                        n && uv(this, r),
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
                return sm({
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
                return sm({
                    next: function () {
                        return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
                    },
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    Lv(e) && (e = new Set(e)),
                    tv(function () {
                        Array.isArray(e) || md(e)
                            ? (t.clear(),
                              e.forEach(function (e) {
                                  return t.add(e);
                              }))
                            : null != e && Gf('Cannot initialize set from ' + e);
                    }),
                    this
                );
            }),
            (t.observe_ = function (e, t) {
                return sv(this, e);
            }),
            (t.intercept_ = function (e) {
                return ov(this, e);
            }),
            (t.toJSON = function () {
                return Array.from(this);
            }),
            (t.toString = function () {
                return '[object ObservableSet]';
            }),
            (t[Cv] = function () {
                return this.values();
            }),
            Sd(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.atom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: Av,
                    get: function () {
                        return 'Set';
                    },
                },
            ]),
            e
        );
    })(),
    Lv = hd('ObservableSet', Rv),
    Iv = Object.create(null),
    Mv = 'remove',
    zv = (function () {
        function e(e, t, n, r) {
            (void 0 === t && (t = new Map()),
                void 0 === r && (r = lp),
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
                (this.keysAtom_ = new Id('ObservableObject.keys')),
                (this.isPlainObject_ = cd(this.target_)));
        }
        var t = e.prototype;
        return (
            (t.getObservablePropValue_ = function (e) {
                return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
                var n = this.values_.get(e);
                if (n instanceof Wp) return (n.set(t), !0);
                if (iv(this)) {
                    var r = av(this, { type: dv, object: this.proxy_ || this.target_, name: e, newValue: t });
                    if (!r) return null;
                    t = r.newValue;
                }
                if ((t = n.prepareNewValue_(t)) !== ah.UNCHANGED) {
                    var i = lv(this),
                        o = i
                            ? {
                                  type: dv,
                                  observableKind: 'object',
                                  debugObjectName: this.name_,
                                  object: this.proxy_ || this.target_,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), i && uv(this, o));
                }
                return !0;
            }),
            (t.get_ = function (e) {
                return (ah.trackingDerivation && !_d(this.target_, e) && this.has_(e), this.target_[e]);
            }),
            (t.set_ = function (e, t, n) {
                return (
                    void 0 === n && (n = !1),
                    _d(this.target_, e)
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
                if (!ah.trackingDerivation) return e in this.target_;
                this.pendingKeys_ || (this.pendingKeys_ = new Map());
                var t = this.pendingKeys_.get(e);
                return (
                    t ||
                        ((t = new Vp(e in this.target_, Fd, 'ObservableObject.key?', !1)), this.pendingKeys_.set(e, t)),
                    t.get()
                );
            }),
            (t.make_ = function (e, t) {
                if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                    if (!(e in this.target_)) {
                        var n;
                        if (null != (n = this.target_[Td]) && n[e]) return;
                        Gf(1, t.annotationType_, this.name_ + '.' + e.toString());
                    }
                    for (var r = this.target_; r && r !== Jf; ) {
                        var i = Xf(r, e);
                        if (i) {
                            var o = t.make_(this, e, i, r);
                            if (0 === o) return;
                            if (1 === o) break;
                        }
                        r = Object.getPrototypeOf(r);
                    }
                    Uv(this, t, e);
                }
            }),
            (t.extend_ = function (e, t, n, r) {
                if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                    return this.defineProperty_(e, t, r);
                var i = n.extend_(this, e, t, r);
                return (i && Uv(this, n, e), i);
            }),
            (t.defineProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    ch();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (iv(this)) {
                        var i = av(this, { object: this.proxy_ || this.target_, name: e, type: Ev, newValue: t.value });
                        if (!i) return null;
                        var o = i.newValue;
                        t.value !== o && (t = xd({}, t, { value: o }));
                    }
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                    } else Zf(this.target_, e, t);
                    this.notifyPropertyAddition_(e, t.value);
                } finally {
                    fh();
                }
                return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
                (void 0 === r && (r = !1), this.keysAtom_);
                try {
                    ch();
                    var i = this.delete_(e);
                    if (!i) return i;
                    if (iv(this)) {
                        var o = av(this, { object: this.proxy_ || this.target_, name: e, type: Ev, newValue: t });
                        if (!o) return null;
                        t = o.newValue;
                    }
                    var a = Fv(e),
                        l = {
                            configurable: !ah.safeDescriptors || this.isPlainObject_,
                            enumerable: !0,
                            get: a.get,
                            set: a.set,
                        };
                    if (r) {
                        if (!Reflect.defineProperty(this.target_, e, l)) return !1;
                    } else Zf(this.target_, e, l);
                    var s = new Vp(t, n, 'ObservableObject.key', !1);
                    (this.values_.set(e, s), this.notifyPropertyAddition_(e, s.value_));
                } finally {
                    fh();
                }
                return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    ch();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (iv(this))
                        if (!av(this, { object: this.proxy_ || this.target_, name: e, type: Ev, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var i = Fv(e),
                        o = {
                            configurable: !ah.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: i.get,
                            set: i.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, o)) return !1;
                    } else Zf(this.target_, e, o);
                    (this.values_.set(e, new Wp(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    fh();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !_d(this.target_, e))) return !0;
                if (iv(this) && !av(this, { object: this.proxy_ || this.target_, name: e, type: Mv })) return null;
                try {
                    var n, r;
                    ch();
                    var i,
                        o = lv(this),
                        a = this.values_.get(e),
                        l = void 0;
                    if (!a && o) l = null == (i = Xf(this.target_, e)) ? void 0 : i.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (a && (this.values_.delete(e), a instanceof Vp && (l = a.value_), ph(a)),
                        this.keysAtom_.reportChanged(),
                        null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
                        o)
                    ) {
                        var s = {
                            type: Mv,
                            observableKind: 'object',
                            object: this.proxy_ || this.target_,
                            debugObjectName: this.name_,
                            oldValue: l,
                            name: e,
                        };
                        (0, o && uv(this, s));
                    }
                } finally {
                    fh();
                }
                return !0;
            }),
            (t.observe_ = function (e, t) {
                return sv(this, e);
            }),
            (t.intercept_ = function (e) {
                return ov(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
                var n,
                    r,
                    i = lv(this);
                if (i) {
                    var o = i
                        ? {
                              type: Ev,
                              observableKind: 'object',
                              debugObjectName: this.name_,
                              object: this.proxy_ || this.target_,
                              name: e,
                              newValue: t,
                          }
                        : null;
                    i && uv(this, o);
                }
                (null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(!0),
                    this.keysAtom_.reportChanged());
            }),
            (t.ownKeys_ = function () {
                return (this.keysAtom_.reportObserved(), yd(this.target_));
            }),
            (t.keys_ = function () {
                return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
            }),
            e
        );
    })();
function Dv(e, t) {
    var n;
    if (_d(e, Ld)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
        i = new zv(
            e,
            new Map(),
            String(r),
            (function (e) {
                var t;
                return e ? (null != (t = e.defaultDecorator) ? t : sp(e)) : void 0;
            })(t),
        );
    return (dd(e, Ld, i), e);
}
var Vv = hd('ObservableObjectAdministration', zv);
function Fv(e) {
    return (
        Iv[e] ||
        (Iv[e] = {
            get: function () {
                return this[Ld].getObservablePropValue_(e);
            },
            set: function (t) {
                return this[Ld].setObservablePropValue_(e, t);
            },
        })
    );
}
function Bv(e) {
    return !!ud(e) && Vv(e[Ld]);
}
function Uv(e, t, n) {
    var r;
    null == (r = e.target_[Td]) || delete r[n];
}
var $v,
    Wv,
    Hv = Yv(0),
    qv = (function () {
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
    Gv = 0,
    Kv = function () {};
(($v = Kv),
    (Wv = Array.prototype),
    Object.setPrototypeOf
        ? Object.setPrototypeOf($v.prototype, Wv)
        : void 0 !== $v.prototype.__proto__
          ? ($v.prototype.__proto__ = Wv)
          : ($v.prototype = Wv));
var Qv = (function (e, t, n) {
    function r(t, n, r, i) {
        var o;
        return (
            void 0 === r && (r = 'ObservableArray'),
            void 0 === i && (i = !1),
            (o = e.call(this) || this),
            rm(function () {
                var e = new hv(r, n, i, !0);
                ((e.proxy_ = Pd(o)),
                    pd(Pd(o), Ld, e),
                    t && t.length && o.spliceWithArray(0, 0, t),
                    qv && Object.defineProperty(Pd(o), '0', Hv));
            }),
            o
        );
    }
    Od(r, e);
    var i = r.prototype;
    return (
        (i.concat = function () {
            this[Ld].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return Array.prototype.concat.apply(
                this.slice(),
                t.map(function (e) {
                    return xv(e) ? e.slice() : e;
                }),
            );
        }),
        (i[n] = function () {
            var e = this,
                t = 0;
            return sm({
                next: function () {
                    return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
                },
            });
        }),
        Sd(r, [
            {
                key: 'length',
                get: function () {
                    return this[Ld].getArrayLength_();
                },
                set: function (e) {
                    this[Ld].setArrayLength_(e);
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
})(Kv, Symbol.toStringTag, Symbol.iterator);
function Yv(e) {
    return {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this[Ld].get_(e);
        },
        set: function (t) {
            this[Ld].set_(e, t);
        },
    };
}
function Xv(e) {
    Zf(Qv.prototype, '' + e, Yv(e));
}
function Zv(e) {
    if (e > Gv) {
        for (var t = Gv; t < e + 100; t++) Xv(t);
        Gv = e;
    }
}
function Jv(e, t, n) {
    return new Qv(e, t, n);
}
function em(e, t) {
    if ('object' == typeof e && null !== e) {
        if (xv(e)) return (void 0 !== t && Gf(23), e[Ld].atom_);
        if (Lv(e)) return e.atom_;
        if (Nv(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return (n || Gf(25, t, nm(e)), n);
        }
        if (Bv(e)) {
            if (!t) return Gf(26);
            var r = e[Ld].values_.get(t);
            return (r || Gf(27, t, nm(e)), r);
        }
        if (Md(e) || Hp(e) || bh(e)) return e;
    } else if (ld(e) && bh(e[Ld])) return e[Ld];
    Gf(28);
}
function tm(e, t) {
    return (
        e || Gf(29),
        void 0 !== t ? tm(em(e, t)) : Md(e) || Hp(e) || bh(e) || Nv(e) || Lv(e) ? e : e[Ld] ? e[Ld] : void Gf(24, e)
    );
}
function nm(e, t) {
    var n;
    if (void 0 !== t) n = em(e, t);
    else {
        if (Th(e)) return e.name;
        n = Bv(e) || Nv(e) || Lv(e) ? tm(e) : em(e);
    }
    return n.name_;
}
function rm(e) {
    var t = Zp(),
        n = Mp(!0);
    ch();
    try {
        return e();
    } finally {
        (fh(), zp(n), Jp(t));
    }
}
(Object.entries(mv).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && dd(Qv.prototype, t, n);
}),
    Zv(1e3));
var im = Jf.toString;
function om(e, t, n) {
    return (void 0 === n && (n = -1), am(e, t, n));
}
function am(e, t, n, r, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var o = typeof e;
    if ('function' !== o && 'object' !== o && 'object' != typeof t) return !1;
    var a = im.call(e);
    if (a !== im.call(t)) return !1;
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
    ((e = lm(e)), (t = lm(t)));
    var l = '[object Array]' === a;
    if (!l) {
        if ('object' != typeof e || 'object' != typeof t) return !1;
        var s = e.constructor,
            u = t.constructor;
        if (
            s !== u &&
            !(ld(s) && s instanceof s && ld(u) && u instanceof u) &&
            'constructor' in e &&
            'constructor' in t
        )
            return !1;
    }
    if (0 === n) return !1;
    (n < 0 && (n = -1), (i = i || []));
    for (var c = (r = r || []).length; c--; ) if (r[c] === e) return i[c] === t;
    if ((r.push(e), i.push(t), l)) {
        if ((c = e.length) !== t.length) return !1;
        for (; c--; ) if (!am(e[c], t[c], n - 1, r, i)) return !1;
    } else {
        var f,
            d = Object.keys(e);
        if (((c = d.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (!_d(t, (f = d[c])) || !am(e[f], t[f], n - 1, r, i)) return !1;
    }
    return (r.pop(), i.pop(), !0);
}
function lm(e) {
    return xv(e) ? e.slice() : vd(e) || Nv(e) || md(e) || Lv(e) ? Array.from(e.entries()) : e;
}
function sm(e) {
    return ((e[Symbol.iterator] = um), e);
}
function um() {
    return this;
}
(['Symbol', 'Map', 'Set'].forEach(function (e) {
    void 0 === Qf()[e] && Gf("MobX requires global '" + e + "' to be available or polyfilled");
}),
    'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
                return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
            },
            extras: { getDebugName: nm },
            $mobx: Ld,
        }));
const cm = {
        UW3: {
            '。': 6699,
            に: 3897,
            '、': 4784,
            の: 3706,
            が: 4162,
            を: 5769,
            は: 4221,
            と: 2900,
            る: 2971,
            く: 2902,
            も: 3155,
            う: 2242,
            て: 2447,
            で: 3372,
            た: 2217,
            い: 1855,
            な: 2357,
            っ: -1853,
            方: 2814,
            ら: 1353,
            ん: 967,
            ば: 1790,
            '］': 2166,
            か: 1899,
            '，': 3358,
            り: 1013,
            '！': 3252,
            ー: -102,
            や: 2149,
            '？': 3703,
            '．': 2093,
            '・': 1074,
            '…': 2428,
            部: 1732,
            ど: 992,
            ご: -2327,
            '）': 2573,
            ッ: -2137,
            '☆': 2675,
            お: -1495,
            上: 428,
            以: -1870,
            つ: 1078,
            '」': 1608,
            '♪': 2714,
            電: -1669,
            ク: 335,
            だ: 866,
            へ: 2073,
            ろ: 1142,
            笑: 2335,
            ず: 1456,
            面: 475,
            び: 514,
            あ: 1179,
            今: 1080,
            ぐ: 2053,
            分: 1111,
            感: 1389,
            大: -1134,
            京: -1396,
            中: 998,
            人: 486,
            場: -794,
            イ: -568,
            す: 938,
            さ: -599,
            ま: -370,
            利: -681,
            間: 752,
            '０': -870,
            ぁ: 1322,
            フ: -1285,
            ン: -284,
            '「': -1434,
            当: -337,
            き: 530,
            日: 713,
            ス: -901,
            ゃ: 1112,
            後: 1224,
            々: 1435,
            シ: -1196,
            度: 982,
            観: -976,
            食: -517,
            行: -725,
            ド: -995,
            リ: -636,
            え: 728,
            空: 902,
            夜: 1480,
            ア: -700,
            '』': 1404,
            '１': -550,
            体: 1e3,
            秋: 1464,
            入: -819,
            プ: -718,
            昔: 1287,
            '［': -960,
            題: 1113,
            能: -710,
            皆: 1294,
            む: 920,
            学: -552,
            態: -749,
            月: 584,
            係: 701,
            変: 328,
            超: 976,
            ぶ: 672,
            然: 515,
            '〜': 489,
            れ: 295,
            由: 680,
            段: 13,
            非: 768,
            光: -218,
            意: -477,
            ぞ: 825,
            年: 344,
            べ: -711,
            機: -463,
            言: -419,
            ち: 363,
            気: 130,
            み: 275,
            ｏ: -520,
            '＞': 588,
            し: 181,
            け: 159,
            移: -635,
            見: 160,
            ズ: 304,
            自: -352,
            果: 767,
            番: 252,
            色: 469,
            '　': 257,
            ぱ: 454,
            出: -160,
            屋: 338,
            カ: -102,
            メ: -136,
            指: -240,
            店: 203,
            一: -50,
            別: 285,
            頭: 486,
            朝: 270,
            想: 398,
            味: 101,
            生: -160,
            語: 159,
            '”': 215,
            着: -149,
            所: 189,
            '：': 94,
            神: -111,
            応: 149,
            程: 145,
            不: -93,
            料: -76,
            寺: 50,
            水: 54,
            レ: -54,
            パ: -29,
            サ: 33,
            グ: 12,
            有: -16,
        },
        UW4: {
            '。': -7440,
            の: -4018,
            が: -3577,
            に: -4299,
            て: -3839,
            る: -5462,
            '、': -7452,
            は: -3332,
            っ: -4313,
            で: -3120,
            を: -4861,
            う: -2446,
            と: -2917,
            り: -4081,
            ま: -1296,
            た: -1675,
            あ: 501,
            れ: -4326,
            な: -1928,
            そ: 456,
            く: -2884,
            か: -2662,
            ら: -4391,
            ご: 591,
            し: -1725,
            こ: -517,
            だ: -2037,
            き: -2074,
            い: -1531,
            ん: -3821,
            ー: -2899,
            も: -2746,
            み: -1111,
            食: 652,
            行: 411,
            思: 1386,
            す: -1159,
            空: 2526,
            大: 788,
            '」': -5393,
            じ: -2352,
            や: -1257,
            け: -3441,
            め: -1867,
            さ: -1716,
            よ: -643,
            '「': 2301,
            表: 1003,
            日: 695,
            広: 1811,
            場: 333,
            一: 576,
            時: 564,
            ち: -1762,
            冷: 2351,
            京: 614,
            '，': -4205,
            わ: -1624,
            人: 512,
            私: 1957,
            '！': -4469,
            え: -1844,
            ッ: -2189,
            当: 384,
            '・': -677,
            ン: -2078,
            '１': 710,
            方: -816,
            べ: -2964,
            手: 270,
            来: 430,
            ろ: -2793,
            せ: -1498,
            ル: -1178,
            ば: -2432,
            つ: -1195,
            使: 1131,
            '（': 2399,
            持: 180,
            '…': -2208,
            ゆ: -2265,
            '？': -3412,
            '）': -4207,
            ぶ: -2267,
            何: 1291,
            彼: 1247,
            び: -1619,
            笑: -3444,
            本: -1249,
            ど: -697,
            '［': 1760,
            '．': -2874,
            言: 227,
            お: 820,
            ず: -1966,
            イ: -507,
            今: 1002,
            ゃ: -2441,
            見: 386,
            自: 792,
            '２': 533,
            最: 1072,
            用: -716,
            帯: -1138,
            間: -393,
            携: 441,
            多: 1062,
            リ: -707,
            能: -1270,
            '』': -3209,
            '］': -1427,
            気: 235,
            入: 412,
            有: 744,
            ね: -1659,
            白: 451,
            ぁ: -1501,
            ぎ: -1428,
            中: 34,
            ひ: 1076,
            遊: 1409,
            '”': -817,
            風: 673,
            コ: 344,
            ょ: -1527,
            水: 286,
            情: -375,
            '０': -374,
            む: -1261,
            合: -948,
            公: 724,
            ぼ: -949,
            '♪': -1513,
            小: 736,
            僕: 856,
            '☆': -1296,
            '〜': -1156,
            ド: -76,
            楽: 308,
            全: 475,
            書: 411,
            ス: -218,
            二: 481,
            態: -582,
            少: 436,
            不: 505,
            返: -347,
            定: -356,
            ぜ: -907,
            高: 229,
            特: 623,
            祭: 413,
            他: 368,
            づ: -776,
            目: 117,
            ぞ: -935,
            話: 316,
            子: -233,
            ぐ: -840,
            年: -625,
            '３': 22,
            道: 181,
            的: -500,
            ｏ: -489,
            実: 368,
            買: 366,
            無: 192,
            街: 443,
            東: 470,
            物: -204,
            ュ: -434,
            ほ: -176,
            込: -568,
            甘: 383,
            タ: -212,
            換: -278,
            現: 191,
            新: 150,
            夏: 403,
            フ: -157,
            ト: -148,
            げ: -455,
            ざ: -327,
            デ: 174,
            券: -471,
            感: 28,
            秋: 307,
            難: 179,
            外: 153,
            へ: -247,
            ョ: -156,
            流: 254,
            舞: 138,
            サ: 75,
            前: -75,
            店: 101,
            押: 264,
            開: 61,
            '　': -148,
            '＾': -256,
            度: -125,
            '５': 52,
            々: -142,
            写: 159,
            回: -154,
            ラ: -56,
            関: -145,
            安: 63,
            相: 54,
            参: 45,
            百: 45,
            取: -45,
            ム: -41,
            屋: -8,
            通: -8,
            勝: 4,
            美: 4,
        },
        UW5: {
            '。': -2177,
            で: -955,
            す: -681,
            '、': -1011,
            な: -608,
            ま: -353,
            て: 169,
            っ: 964,
            る: 175,
            は: -874,
            き: 1177,
            し: -394,
            お: 345,
            を: -674,
            く: 287,
            こ: 500,
            じ: 886,
            に: -612,
            そ: -421,
            能: 219,
            わ: 710,
            べ: 1871,
            え: 637,
            ん: 1001,
            あ: -271,
            た: 198,
            み: 293,
            い: 345,
            '・': -1082,
            と: -617,
            よ: -587,
            の: -641,
            ろ: -360,
            上: -1087,
            か: 210,
            だ: -338,
            め: 851,
            帯: 303,
            れ: 495,
            ざ: 1494,
            ら: 222,
            ず: 1173,
            さ: -327,
            つ: 1091,
            ル: -472,
            面: 776,
            '」': -1068,
            電: -285,
            ぼ: 1415,
            日: 342,
            が: -272,
            び: 826,
            せ: -303,
            思: -891,
            ち: 572,
            冷: 1123,
            り: 409,
            年: 876,
            使: -1390,
            利: 365,
            葉: 791,
            '！': -384,
            '］': -470,
            合: 255,
            ぶ: 15,
            券: -1133,
            意: 708,
            ぐ: 159,
            バ: -254,
            も: -93,
            う: 325,
            入: -341,
            移: -571,
            ト: -313,
            体: -1085,
            当: 401,
            々: 505,
            分: 173,
            イ: 171,
            見: -272,
            来: -122,
            料: 579,
            寺: -461,
            ぎ: 348,
            手: 179,
            続: -872,
            む: 458,
            通: -209,
            '．': -184,
            タ: 244,
            行: -180,
            '？': -192,
            水: -154,
            先: -562,
            都: 40,
            一: -151,
            ど: -41,
            ば: 209,
            ア: -123,
            学: 49,
            最: -116,
            降: 104,
            ｏ: 95,
            へ: -146,
            何: -176,
            効: 111,
            ン: -30,
            ょ: 90,
            ー: 4,
            '　': -135,
            '（': -67,
            種: 42,
            '７': -101,
            的: -54,
            成: 46,
            ラ: 29,
            Ｎ: 104,
            '１': -29,
            有: -37,
            中: 8,
            場: 4,
        },
        UW2: {
            '。': -1401,
            '、': -1370,
            を: -2403,
            に: -1207,
            が: -653,
            は: -1010,
            か: 18,
            れ: 5,
            っ: 269,
            以: 2215,
            て: -985,
            う: -489,
            全: 1762,
            の: -695,
            そ: -534,
            で: -810,
            だ: 523,
            ゆ: 1668,
            さ: 922,
            く: -812,
            め: 81,
            と: -751,
            も: -813,
            あ: -233,
            一: 1197,
            し: -49,
            ん: 344,
            お: -711,
            食: 981,
            ご: -682,
            き: -556,
            毎: 1671,
            結: 1952,
            彼: 754,
            少: 676,
            最: 445,
            ほ: 1001,
            わ: -118,
            舞: 2257,
            上: -421,
            よ: 577,
            同: 567,
            り: -479,
            機: 1341,
            人: 201,
            意: 531,
            な: -492,
            '「': -482,
            ば: -464,
            関: 745,
            京: -377,
            本: 694,
            い: -79,
            大: 266,
            目: -1004,
            多: 387,
            着: -477,
            つ: -423,
            ケ: -246,
            振: -1313,
            ゃ: 283,
            題: 848,
            手: 663,
            ひ: -1353,
            容: 956,
            水: 335,
            我: -1421,
            る: -207,
            裏: -1437,
            ー: 274,
            ぜ: 567,
            ぱ: 396,
            名: 341,
            フ: -264,
            寺: -551,
            葉: 787,
            ま: -173,
            夕: 826,
            ぶ: 435,
            絶: 1181,
            高: 498,
            今: 276,
            友: 494,
            ら: -91,
            ン: 167,
            た: -109,
            み: -123,
            料: 70,
            イ: -122,
            電: 315,
            冷: -664,
            打: 557,
            メ: -47,
            世: -793,
            パ: 289,
            女: -487,
            ｒ: 990,
            プ: -195,
            取: -360,
            '＾': 149,
            場: 190,
            こ: 161,
            '，': -306,
            落: -499,
            選: 313,
            知: -361,
            極: 748,
            入: -160,
            良: 183,
            ラ: -210,
            ス: 54,
            遊: -310,
            用: -161,
            式: 93,
            々: 80,
            車: 124,
            立: -292,
            下: 154,
            ル: 31,
            甘: 227,
            実: 97,
            重: 159,
            乗: -115,
            当: 94,
            '：': 106,
            '］': -50,
            Ｈ: -84,
            的: 42,
            相: 75,
            三: 58,
            け: 16,
            格: 130,
            正: 100,
            '［': -16,
            日: -25,
            公: -33,
            '４': 20,
            ィ: -12,
            ろ: -4,
        },
        UW6: {
            が: 320,
            '。': -307,
            て: -16,
            で: 219,
            は: 307,
            し: 581,
            入: 621,
            ど: 828,
            あ: -496,
            空: 1589,
            な: 218,
            す: -90,
            だ: 95,
            め: 1415,
            券: 1711,
            さ: 555,
            ご: -283,
            の: 85,
            性: 2064,
            う: 35,
            や: 819,
            り: 578,
            場: -864,
            に: 245,
            つ: 506,
            ろ: 352,
            き: -17,
            っ: 301,
            る: 71,
            か: 231,
            い: 365,
            ら: 65,
            そ: -101,
            ば: 527,
            け: -213,
            ー: -66,
            ん: 324,
            彼: -1272,
            ク: -346,
            ル: 207,
            '０': 626,
            く: 240,
            '、': 180,
            食: -284,
            遊: -906,
            寺: 611,
            '・': -639,
            '：': 1217,
            言: -361,
            ゆ: 755,
            態: 221,
            込: 679,
            を: 85,
            的: 479,
            可: 567,
            タ: 380,
            気: 415,
            思: -111,
            ぱ: 813,
            ま: 170,
            メ: 239,
            お: -18,
            ピ: 780,
            カ: 292,
            送: -896,
            来: -261,
            過: 846,
            イ: -244,
            効: -725,
            シ: -130,
            ケ: -388,
            ず: -403,
            ぶ: -248,
            焼: 643,
            れ: 119,
            広: -150,
            機: 216,
            わ: 60,
            ン: -64,
            方: -235,
            '１': 33,
            こ: 41,
            店: 164,
            印: 360,
            び: 129,
            回: -94,
            ぎ: 280,
            不: 204,
            も: -18,
            自: 123,
            む: 168,
            パ: -112,
            周: 275,
            出: 68,
            参: 114,
            神: 33,
            着: -20,
            間: -4,
            練: 8,
            ゃ: -4,
        },
        UW1: {
            は: -273,
            う: 275,
            ま: 128,
            お: 922,
            ご: 890,
            と: 165,
            が: -385,
            る: -34,
            せ: 210,
            い: -91,
            ん: 289,
            あ: -230,
            で: -127,
            学: 209,
            り: -102,
            浮: 1464,
            に: -344,
            甘: -1424,
            つ: 241,
            バ: 511,
            な: -220,
            て: 60,
            水: 1969,
            '、': -26,
            電: 127,
            当: -1038,
            ふ: 1899,
            ら: 72,
            れ: -44,
            携: -86,
            を: -176,
            そ: 137,
            っ: 194,
            ろ: 303,
            '［': -601,
            ー: 113,
            か: -110,
            間: 572,
            ち: 285,
            ゆ: -428,
            し: -30,
            外: 301,
            フ: -155,
            も: -96,
            '０': 275,
            空: -524,
            ス: -251,
            く: 134,
            自: 412,
            す: 151,
            用: 599,
            さ: -164,
            チ: 183,
            ケ: -196,
            入: 266,
            ツ: 134,
            困: 574,
            利: -371,
            生: 254,
            機: 318,
            安: -400,
            画: -53,
            庭: 619,
            イ: 211,
            '３': -258,
            メ: 96,
            面: -306,
            何: 173,
            こ: 64,
            問: 588,
            方: 124,
            白: -248,
            じ: -49,
            社: 225,
            様: 365,
            田: 137,
            国: -382,
            込: 42,
            の: -31,
            高: 170,
            '。': -17,
            ッ: 117,
            だ: 63,
            新: 178,
            '．': -72,
            ラ: 92,
            使: -79,
            見: 76,
            '？': 113,
            振: 209,
            '！': 65,
            撮: -182,
            券: 79,
            ざ: 120,
            周: 137,
            長: 144,
            や: -42,
            山: 114,
            パ: 63,
            好: 50,
            ペ: 126,
            着: -16,
            め: -12,
            み: -8,
            個: -79,
            上: 12,
            え: -8,
            連: -29,
            ボ: 16,
        },
        BW2: {
            たと: 1475,
            とお: -3875,
            とい: 274,
            うや: -2003,
            ない: -2999,
            のみ: -2622,
            てい: -1296,
            であ: -3302,
            のよ: -838,
            です: -3035,
            たま: -2116,
            いた: -1737,
            の機: -2082,
            ので: -921,
            でき: -2119,
            には: -1012,
            にも: -1213,
            はじ: -2465,
            '、そ': -1810,
            がと: -1022,
            くな: -1771,
            でも: -1689,
            はな: -331,
            のは: -1100,
            ると: -643,
            てお: -2518,
            など: -1807,
            帯電: -1351,
            でし: -1856,
            '、と': -558,
            また: -2737,
            ただ: -2687,
            くし: -1520,
            るよ: -944,
            いも: 709,
            もあ: -935,
            りも: -1014,
            てあ: -2039,
            たい: -1183,
            てみ: -1524,
            そこ: -652,
            もし: -490,
            てく: -1248,
            ども: -675,
            うど: -1684,
            の前: -820,
            のだ: -873,
            なく: -956,
            にな: -362,
            人が: 1674,
            んど: -722,
            もの: -753,
            いま: -421,
            と思: 545,
            れた: -890,
            はい: -770,
            すご: -1196,
            くだ: -1043,
            '・・': -1221,
            てき: -1069,
            がっ: -1494,
            はあ: -1185,
            では: -1027,
            いつ: -659,
            とな: 159,
            時間: -681,
            がし: 280,
            にし: -458,
            うま: -1227,
            たち: -851,
            のお: 458,
            ばい: -968,
            '、な': -145,
            た時: 421,
            のも: -489,
            とか: -782,
            らな: -64,
            なか: -299,
            のか: -278,
            でな: -1003,
            たも: 318,
            とこ: -337,
            もな: -157,
            した: -402,
            もつ: -433,
            いい: -357,
            ード: -523,
            とき: -230,
            もち: -157,
            たよ: -393,
            はで: 41,
            とも: -359,
            いし: -401,
            いよ: -494,
            はず: -333,
            やす: -524,
            と同: -442,
            よう: -175,
            いな: -144,
            ーな: 476,
            るの: -197,
            しい: -297,
            '、１': -643,
            ても: -151,
            りな: 191,
            がよ: 195,
            の１: -539,
            うか: -137,
            '、清': -374,
            今日: -360,
            とす: -127,
            つの: 186,
            '］京': -152,
            うい: -93,
            のが: -101,
            い人: 80,
            けど: -126,
            ーで: 83,
            がち: 62,
            の方: 96,
            らい: -54,
            でい: -33,
            てた: -37,
            どこ: -20,
        },
        BW1: {
            のみ: 3058,
            以上: 1223,
            まま: 2830,
            から: 1723,
            たま: 2162,
            れた: 1494,
            白い: 3534,
            ちが: -2703,
            めて: 969,
            ない: 1045,
            その: -1066,
            では: -518,
            った: 166,
            たと: -948,
            こと: -1455,
            くれ: 922,
            とか: 1688,
            るの: -1593,
            うな: 513,
            たの: -1543,
            のは: 1277,
            より: 1376,
            でも: 667,
            とが: -1393,
            しい: 917,
            かも: -1290,
            ック: 631,
            よう: -1620,
            んな: 471,
            とう: 1085,
            '。・': 2456,
            たら: 949,
            気に: -70,
            ても: 623,
            利用: 1018,
            最近: 1515,
            がと: -1545,
            この: -1039,
            にも: 816,
            もつ: 1694,
            'が、': 1178,
            れて: -1090,
            りが: -96,
            りと: 1198,
            んで: -325,
            まだ: 1343,
            には: 588,
            もう: 1414,
            少し: 1375,
            とき: 1349,
            こそ: 1413,
            りも: 1231,
            れば: 936,
            けど: 1014,
            同じ: 1427,
            ると: 202,
            'た．': 1736,
            まり: 1018,
            いう: 138,
            'は、': 436,
            とい: -725,
            'い、': -329,
            なら: 1251,
            思い: -1273,
            'て、': 702,
            ある: 141,
            って: -196,
            'で、': 572,
            なぜ: 1571,
            りに: 356,
            りの: -399,
            まる: -429,
            れる: 350,
            たい: 242,
            それ: 293,
            もし: 1050,
            の間: 1155,
            など: 1137,
            いの: -369,
            うや: -1096,
            だけ: 391,
            てい: -522,
            とで: 941,
            くて: 680,
            んだ: 515,
            ケー: -781,
            いで: -844,
            普段: 655,
            のも: 725,
            思う: 57,
            えば: 791,
            きな: 687,
            に感: -579,
            いた: 310,
            '、と': 310,
            もの: -538,
            ただ: 398,
            のが: 482,
            てる: 372,
            大変: 401,
            の後: 753,
            る人: 626,
            しか: 96,
            でき: -364,
            るで: 252,
            まぁ: 444,
            使い: -715,
            こう: -591,
            かな: -137,
            買い: -698,
            '！！': 322,
            める: -429,
            'に、': 564,
            '０円': 304,
            '、今': 302,
            ージ: 789,
            する: -159,
            友達: 625,
            クル: 437,
            るに: -442,
            やら: 416,
            '。あ': -619,
            きり: 449,
            'と、': 245,
            の上: 589,
            ため: 524,
            まで: 160,
            'か、': -255,
            うち: 218,
            なく: 149,
            来て: 386,
            きた: 236,
            べき: 424,
            じて: 254,
            ぱり: 342,
            んど: -303,
            '・・': 237,
            だな: -302,
            ろう: -315,
            現在: 281,
            '。３': 274,
            お店: 199,
            てた: 147,
            すら: 190,
            いも: -216,
            にか: 180,
            いな: -98,
            気が: 115,
            たり: 102,
            わら: -71,
            実際: 83,
            とに: -20,
            'も、': 29,
            くさ: -24,
            国人: 24,
            うか: 12,
            は１: 37,
            とは: -4,
        },
        BW3: {
            うま: 4971,
            もの: 3479,
            あり: 1053,
            いた: 712,
            よう: -404,
            いう: 719,
            上が: 1571,
            ます: -943,
            はじ: 3173,
            とう: -693,
            たま: 1383,
            ちが: 1979,
            いい: 1237,
            おり: -2875,
            のみ: 3096,
            可能: 402,
            ちゃ: -1016,
            こと: 899,
            そこ: 647,
            でも: 1643,
            その: 1844,
            なっ: -512,
            とい: -1257,
            ある: -339,
            この: 1656,
            とき: 1917,
            そう: -1050,
            手に: 1242,
            から: -1223,
            持っ: 1098,
            でき: 980,
            かけ: 2909,
            とて: 2245,
            なる: 481,
            はし: 3011,
            ちょ: 1986,
            して: 278,
            とお: 678,
            もら: 2538,
            メー: 364,
            ころ: -190,
            そし: -184,
            かか: 1752,
            もう: 2306,
            どん: -397,
            '・・': -1499,
            より: -1463,
            しま: -93,
            とも: 1038,
            めて: -1778,
            もん: 1078,
            いろ: 832,
            まぁ: 1442,
            だけ: -941,
            した: 813,
            さん: -1566,
            うち: 444,
            きっ: 727,
            よく: 1082,
            すご: 897,
            以上: -807,
            ない: 287,
            ため: 686,
            これ: 1075,
            どう: 296,
            はま: 1041,
            'す。': -152,
            とっ: 917,
            来た: 408,
            しゃ: 1283,
            かっ: -802,
            ただ: 1198,
            しい: -519,
            すぐ: 1094,
            もと: 1264,
            やっ: 422,
            かも: -670,
            める: -1304,
            電車: 121,
            まし: -670,
            いか: 480,
            パソ: 589,
            わか: 691,
            なく: 348,
            いる: 556,
            とこ: 742,
            中で: 414,
            さい: -672,
            みた: -739,
            かつ: 821,
            いて: -372,
            なか: 198,
            なら: -160,
            だい: 680,
            あっ: -93,
            もっ: 626,
            また: -479,
            いや: 732,
            考え: 429,
            うか: -268,
            もつ: 666,
            まだ: 296,
            きま: -514,
            まで: -677,
            お茶: 627,
            こそ: -520,
            とり: 539,
            いら: 621,
            です: -239,
            まり: -596,
            出来: -428,
            つな: 437,
            ほし: -350,
            たい: -238,
            ここ: 552,
            はい: 272,
            行き: -218,
            楽し: 128,
            'し、': -136,
            めっ: 260,
            んは: 438,
            出て: 128,
            いま: 85,
            つけ: 251,
            みが: -374,
            まず: 233,
            だろ: -357,
            ルー: 249,
            がち: -345,
            料理: 8,
            祭り: 214,
            使っ: 109,
            と思: -161,
            ぼく: 329,
            イン: 203,
            逆に: 246,
            'で、': 119,
            どこ: 46,
            ずっ: 121,
            つい: 62,
            ませ: -58,
            あの: 71,
            過ぎ: -95,
            始め: -28,
            まっ: -24,
            程度: -24,
            書い: 12,
        },
        TW3: {
            という: 970,
            もなく: -1899,
            ところ: -1724,
            として: 655,
            '、ある': -2756,
            ている: -1375,
            はない: -473,
            のまま: -961,
            すこと: 710,
            てしま: -1361,
            らない: -1075,
            はそれ: -1539,
            ていく: -289,
            とした: -1169,
            と言っ: -1166,
            ていう: 769,
            である: -749,
            '、なん': -293,
            ること: -49,
            であっ: -812,
            となっ: 229,
            なんで: 574,
            いとこ: 75,
            もいい: -408,
            もあり: -183,
            であり: -535,
            ういう: -120,
            ばいい: -137,
            にして: -37,
            ていた: -66,
            るとき: 108,
            でした: -54,
            うこと: -4,
        },
        TW4: {
            ところ: 2195,
            ように: -1673,
            くらい: 1598,
            'した。': -1569,
            ありま: -1767,
            かなり: 2848,
            できた: 2069,
            'ます。': -1366,
            ような: -2232,
            ことが: -824,
            'いた。': 1066,
            だから: 1092,
            うどん: 1258,
            そうで: -925,
            ことに: -856,
            もちろ: 1697,
            しかし: 1383,
            ことで: 380,
            'ない。': 191,
            ことも: -588,
            'あり、': -595,
            ちなみ: 1130,
            だった: -1150,
            すると: 406,
            'こと。': 683,
            'でも、': 628,
            いろい: 590,
            いかな: 651,
            メール: 256,
            ようで: -896,
            なかな: 669,
            なくな: 253,
            しない: 438,
            ソフト: 512,
            ことを: 255,
            わけで: -234,
            まって: -824,
            なんと: 481,
            すごい: 314,
            してき: 278,
            いえば: 397,
            らしい: 424,
            しかも: 494,
            ことは: -232,
            あたり: -390,
            食べて: 140,
            しても: -174,
            できま: 52,
            なんか: 116,
            なんて: -102,
            いくら: 170,
            観光客: -75,
            いいと: -63,
            'いる。': 37,
            ちょっ: 20,
            そうい: 16,
        },
        TW2: {
            気に入: -4086,
            ではな: -1086,
            とがあ: -1130,
            かもし: -463,
            んでい: -2306,
            そもそ: -1441,
            うにな: -803,
            してい: -406,
            でもあ: -936,
            ったこ: -267,
            しかな: 440,
            ともあ: -757,
            からな: -477,
            えるこ: -436,
            でもな: -207,
            とはい: -59,
            えてい: 50,
            してお: -37,
        },
        TW1: {
            という: 545,
            ていく: 1686,
            ような: 1298,
            '・・・': 1104,
            持って: -1851,
            しかし: 2079,
            てくれ: 1444,
            のまま: 1162,
            かなり: 2083,
            やはり: 1728,
            ながら: 1223,
            ょうど: 1174,
            もなく: 947,
            思った: 811,
            とんど: 1250,
            '、それ': 412,
            'ない、': -1039,
            なんと: -691,
            を利用: -1017,
            がって: -418,
            ひとつ: 732,
            と思う: 251,
            ました: -268,
            である: 267,
            かなか: 698,
            そして: 556,
            っかり: 599,
            '。ただ': 676,
            リーグ: 309,
            きない: 141,
            はその: -68,
            ちろん: 196,
            くさん: 225,
            ること: -271,
            だって: 164,
            なって: -86,
            すごく: 163,
            ろいろ: 54,
            '。その': 16,
            くらい: 4,
        },
    },
    fm = window;
/**
 * @license
 * Copyright 2023 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dm {
    constructor(e) {
        ((this.model = new Map(Object.entries(e).map(([e, t]) => [e, new Map(Object.entries(t))]))),
            (this.baseScore =
                -0.5 *
                [...this.model.values()]
                    .map((e) => [...e.values()])
                    .flat()
                    .reduce((e, t) => e + t, 0)));
    }
    parse(e) {
        if ('' === e) return [];
        const t = this.parseBoundaries(e),
            n = [];
        let r = 0;
        for (const i of t) (n.push(e.slice(r, i)), (r = i));
        return (n.push(e.slice(r)), n);
    }
    parseBoundaries(e) {
        var t, n, r, i, o, a, l, s, u, c, f, d, p;
        const h = [];
        for (let v = 1; v < e.length; v++) {
            let m = this.baseScore;
            ((m +=
                (null === (t = this.model.get('UW1')) || void 0 === t ? void 0 : t.get(e.substring(v - 3, v - 2))) ||
                0),
                (m +=
                    (null === (n = this.model.get('UW2')) || void 0 === n
                        ? void 0
                        : n.get(e.substring(v - 2, v - 1))) || 0),
                (m +=
                    (null === (r = this.model.get('UW3')) || void 0 === r ? void 0 : r.get(e.substring(v - 1, v))) ||
                    0),
                (m +=
                    (null === (i = this.model.get('UW4')) || void 0 === i ? void 0 : i.get(e.substring(v, v + 1))) ||
                    0),
                (m +=
                    (null === (o = this.model.get('UW5')) || void 0 === o
                        ? void 0
                        : o.get(e.substring(v + 1, v + 2))) || 0),
                (m +=
                    (null === (a = this.model.get('UW6')) || void 0 === a
                        ? void 0
                        : a.get(e.substring(v + 2, v + 3))) || 0),
                (m +=
                    (null === (l = this.model.get('BW1')) || void 0 === l ? void 0 : l.get(e.substring(v - 2, v))) ||
                    0),
                (m +=
                    (null === (s = this.model.get('BW2')) || void 0 === s
                        ? void 0
                        : s.get(e.substring(v - 1, v + 1))) || 0),
                (m +=
                    (null === (u = this.model.get('BW3')) || void 0 === u ? void 0 : u.get(e.substring(v, v + 2))) ||
                    0),
                (m +=
                    (null === (c = this.model.get('TW1')) || void 0 === c ? void 0 : c.get(e.substring(v - 3, v))) ||
                    0),
                (m +=
                    (null === (f = this.model.get('TW2')) || void 0 === f
                        ? void 0
                        : f.get(e.substring(v - 2, v + 1))) || 0),
                (m +=
                    (null === (d = this.model.get('TW3')) || void 0 === d
                        ? void 0
                        : d.get(e.substring(v - 1, v + 2))) || 0),
                (m +=
                    (null === (p = this.model.get('TW4')) || void 0 === p ? void 0 : p.get(e.substring(v, v + 3))) ||
                    0),
                m > 0 && h.push(v));
        }
        return h;
    }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const pm = console.assert,
    hm = String.fromCharCode(8203),
    vm = 1,
    mm = 3,
    gm = { Inline: 0, Block: 1, Skip: 2, Break: 3, NoBreak: 4, BreakOpportunity: 5 },
    ym = {
        AREA: gm.Skip,
        BASE: gm.Skip,
        BASEFONT: gm.Skip,
        DATALIST: gm.Skip,
        HEAD: gm.Skip,
        LINK: gm.Skip,
        META: gm.Skip,
        NOEMBED: gm.Skip,
        NOFRAMES: gm.Skip,
        PARAM: gm.Skip,
        RP: gm.Skip,
        SCRIPT: gm.Skip,
        STYLE: gm.Skip,
        TEMPLATE: gm.Skip,
        TITLE: gm.Skip,
        NOSCRIPT: gm.Skip,
        HR: gm.Break,
        LISTING: gm.Skip,
        PLAINTEXT: gm.Skip,
        PRE: gm.Skip,
        XMP: gm.Skip,
        BR: gm.Break,
        RT: gm.Skip,
        WBR: gm.BreakOpportunity,
        INPUT: gm.Skip,
        SELECT: gm.Skip,
        BUTTON: gm.Skip,
        TEXTAREA: gm.Skip,
        ABBR: gm.Skip,
        CODE: gm.Skip,
        IFRAME: gm.Skip,
        TIME: gm.Skip,
        VAR: gm.Skip,
        NOBR: gm.NoBreak,
    },
    bm = new Set([
        'HTML',
        'BODY',
        'ADDRESS',
        'BLOCKQUOTE',
        'CENTER',
        'DIALOG',
        'DIV',
        'FIGURE',
        'FIGCAPTION',
        'FOOTER',
        'FORM',
        'HEADER',
        'LEGEND',
        'LISTING',
        'MAIN',
        'P',
        'ARTICLE',
        'ASIDE',
        'H1',
        'H2',
        'H3',
        'H4',
        'H5',
        'H6',
        'HGROUP',
        'NAV',
        'SECTION',
        'DIR',
        'DD',
        'DL',
        'DT',
        'MENU',
        'OL',
        'UL',
        'LI',
        'TABLE',
        'CAPTION',
        'COL',
        'TR',
        'TD',
        'TH',
        'FIELDSET',
        'DETAILS',
        'SUMMARY',
        'MARQUEE',
    ]),
    _m = 3;
function wm(e) {
    const t = e.nodeName,
        n = ym[t];
    if (void 0 !== n) return n;
    if ('function' == typeof fm.getComputedStyle) {
        const t = fm.getComputedStyle(e);
        switch (t.whiteSpace) {
            case 'nowrap':
            case 'pre':
                return gm.NoBreak;
        }
        const n = t.display;
        if (n)
            return (function (e) {
                return 'inline' === e
                    ? gm.Inline
                    : 'block' === e
                      ? gm.Block
                      : e.startsWith('ruby')
                        ? 'ruby-text' === e
                            ? gm.Skip
                            : gm.Inline
                        : gm.Block;
            })(n);
    }
    return bm.has(t) ? gm.Block : gm.Inline;
}
class km {
    constructor(e) {
        ((this.chunks = []), (this.hasBreakOpportunityAfter = !1), (this.nodeOrText = e));
    }
    get isString() {
        return 'string' == typeof this.nodeOrText;
    }
    get canSplit() {
        return !this.isString;
    }
    get text() {
        return this.isString ? this.nodeOrText : this.nodeOrText.nodeValue;
    }
    get length() {
        var e, t;
        return null !== (t = null === (e = this.text) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0;
    }
    split(e) {
        const t = this.chunks;
        if ((pm(0 === t.length || t.join('') === this.text), t.length <= 1)) return;
        pm(this.canSplit);
        const n = this.nodeOrText;
        if ('string' == typeof e) return void (n.nodeValue = t.join(e));
        const r = n.ownerDocument;
        let i = [];
        for (const o of t) (o && i.push(r.createTextNode(o)), i.push(null));
        (i.pop(), (i = i.map((t) => t || e.cloneNode(!0))), n.replaceWith(...i));
    }
}
class Sm {
    constructor(e) {
        ((this.nodes = []), (this.element = e));
    }
    isEmpty() {
        return 0 === this.nodes.length;
    }
    get text() {
        return this.nodes.map((e) => e.text).join('');
    }
    get lastNode() {
        return this.nodes.length ? this.nodes[this.nodes.length - 1] : void 0;
    }
    setHasBreakOpportunityAfter() {
        const e = this.lastNode;
        e && (e.hasBreakOpportunityAfter = !0);
    }
    getForcedOpportunities() {
        const e = [];
        let t = 0;
        for (const n of this.nodes) {
            if (n.canSplit) {
                const r = n.text;
                if (r) for (let n = 0; n < r.length; ++n) 8203 === r.charCodeAt(n) && e.push(t + n + 1);
            }
            ((t += n.length), n.hasBreakOpportunityAfter && e.push(t));
        }
        return e;
    }
    excludeForcedOpportunities(e) {
        const t = this.getForcedOpportunities();
        if (!t.length) return e;
        const n = new Set(t);
        return e.filter((e) => !n.has(e));
    }
}
class xm {
    constructor(e, t) {
        ((this.separator = hm),
            (this.parser_ = e),
            void 0 !== t &&
                (void 0 !== t.className && (this.className = t.className),
                void 0 !== t.separator && (this.separator = t.separator)));
    }
    static hasChildTextNode(e) {
        for (const t of e.childNodes) if (t.nodeType === _m) return !0;
        return !1;
    }
    applyToElement(e) {
        for (const t of this.getBlocks(e)) (pm(!t.isEmpty()), this.applyToParagraph(t));
    }
    *getBlocks(e, t) {
        if ((pm(e.nodeType === vm), this.className && e.classList.contains(this.className))) return;
        const n = wm(e);
        if (n === gm.Skip) return;
        if (n === gm.Break)
            return (
                t && !t.isEmpty() && (t.setHasBreakOpportunityAfter(), yield t, (t.nodes = [])),
                void pm(!e.firstChild)
            );
        if (n === gm.BreakOpportunity) return void (t && t.setHasBreakOpportunityAfter());
        pm(n === gm.Block || n === gm.Inline || n === gm.NoBreak);
        const r = !t || n === gm.Block,
            i = r ? new Sm(e) : t;
        for (const o of e.childNodes)
            switch (o.nodeType) {
                case vm:
                    for (const e of this.getBlocks(o, i)) yield e;
                    break;
                case mm:
                    if (n === gm.NoBreak) {
                        const e = o.nodeValue;
                        e && i.nodes.push(new km(e));
                        break;
                    }
                    i.nodes.push(new km(o));
            }
        r && !i.isEmpty() && (yield i);
    }
    applyToParagraph(e) {
        if ((pm(e.nodes.length > 0), !e.nodes.some((e) => e.canSplit))) return;
        const t = e.text;
        if (/^\s*$/.test(t)) return;
        const n = this.parser_.parseBoundaries(t);
        if (n.length <= 0) return;
        (pm(n[0] > 0), pm(n.every((e, t) => 0 === t || e > n[t - 1])), pm(n[n.length - 1] < t.length));
        const r = e.excludeForcedOpportunities(n);
        (r.push(t.length + 1), this.splitNodes(e.nodes, r), this.applyBlockStyle(e.element));
    }
    splitNodes(e, t) {
        var n;
        (pm(t.length > 0), pm(t.every((e, n) => 0 === n || e > t[n - 1])));
        const r = e.reduce((e, t) => e + t.length, 0);
        pm(t[t.length - 1] > r);
        let i = 0,
            o = t[0];
        pm(o > 0);
        let a = 0,
            l = null;
        for (const s of e) {
            (pm(o >= a), pm(0 === s.chunks.length));
            const e = s.text;
            if (!e) continue;
            const r = e.length,
                u = a + r;
            if ((pm(!l || l.canSplit), !s.canSplit)) {
                for (
                    l &&
                    o === a &&
                    (0 === l.chunks.length && l.chunks.push(null !== (n = l.text) && void 0 !== n ? n : ''),
                    l.chunks.push(''));
                    o < u;

                )
                    o = t[++i];
                ((l = null), (a = u));
                continue;
            }
            if (((l = s), o >= u)) {
                a = u;
                continue;
            }
            const c = s.chunks;
            let f = 0;
            for (; o < u; ) {
                const n = o - a;
                (pm(n >= f), c.push(e.slice(f, n)), (f = n), (o = t[++i]));
            }
            (pm(f < r), c.push(e.slice(f)), (a = u));
        }
        (pm(a === r), pm(i < t.length), pm(t[i] >= r));
        for (const s of e) s.split(this.separator);
    }
    applyBlockStyle(e) {
        this.className
            ? e.classList.add(this.className)
            : ((e) => {
                  ((e.style.wordBreak = 'keep-all'), (e.style.overflowWrap = 'anywhere'));
              })(e);
    }
}
class Om extends dm {
    constructor(e, t = { separator: hm }) {
        (super(e), (this.htmlProcessor = new xm(this, t)));
    }
    applyElement(e) {
        (console.warn(
            '`applyElement` is deprecated. Please use `applyToElement` instead. `applyElement` will be removed in v0.7.0.',
        ),
            this.applyToElement(e));
    }
    applyToElement(e) {
        this.htmlProcessor.applyToElement(e);
    }
    translateHTMLString(e) {
        if ('' === e) return e;
        const t = ((e) => new fm.DOMParser().parseFromString(e, 'text/html'))(e);
        if (xm.hasChildTextNode(t.body)) {
            const e = t.createElement('span');
            (e.append(...t.body.childNodes), t.body.append(e));
        }
        return (this.applyToElement(t.body.childNodes[0]), t.body.innerHTML);
    }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Em = () => new Om(cm);
var Pm = $m(),
    Cm = (e) => Vm(e, Pm),
    Am = $m();
Cm.write = (e) => Vm(e, Am);
var Tm = $m();
Cm.onStart = (e) => Vm(e, Tm);
var Nm = $m();
Cm.onFrame = (e) => Vm(e, Nm);
var jm = $m();
Cm.onFinish = (e) => Vm(e, jm);
var Rm = [];
Cm.setTimeout = (e, t) => {
    const n = Cm.now() + t,
        r = () => {
            const e = Rm.findIndex((e) => e.cancel == r);
            (~e && Rm.splice(e, 1), (zm -= ~e ? 1 : 0));
        },
        i = { time: n, handler: e, cancel: r };
    return (Rm.splice(Lm(n), 0, i), (zm += 1), Fm(), i);
};
var Lm = (e) => ~(~Rm.findIndex((t) => t.time > e) || ~Rm.length);
((Cm.cancel = (e) => {
    (Tm.delete(e), Nm.delete(e), jm.delete(e), Pm.delete(e), Am.delete(e));
}),
    (Cm.sync = (e) => {
        ((Dm = !0), Cm.batchedUpdates(e), (Dm = !1));
    }),
    (Cm.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            ((t = e), Cm.onStart(n));
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                (Tm.delete(n), (t = null));
            }),
            r
        );
    }));
var Im = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
((Cm.use = (e) => (Im = e)),
    (Cm.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (Cm.batchedUpdates = (e) => e()),
    (Cm.catch = console.error),
    (Cm.frameLoop = 'always'),
    (Cm.advance = () => {
        'demand' !== Cm.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : Um();
    }));
var Mm = -1,
    zm = 0,
    Dm = !1;
function Vm(e, t) {
    Dm ? (t.delete(e), e(0)) : (t.add(e), Fm());
}
function Fm() {
    Mm < 0 && ((Mm = 0), 'demand' !== Cm.frameLoop && Im(Bm));
}
function Bm() {
    ~Mm && (Im(Bm), Cm.batchedUpdates(Um));
}
function Um() {
    const e = Mm;
    Mm = Cm.now();
    const t = Lm(Mm);
    (t && (Wm(Rm.splice(0, t), (e) => e.handler()), (zm -= t)),
        zm ? (Tm.flush(), Pm.flush(e ? Math.min(64, Mm - e) : 16.667), Nm.flush(), Am.flush(), jm.flush()) : (Mm = -1));
}
function $m() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            ((zm += t != e || e.has(n) ? 0 : 1), e.add(n));
        },
        delete: (n) => ((zm -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (zm -= t.size), Wm(t, (t) => t(n) && e.add(t)), (zm += e.size), (t = e));
        },
    };
}
function Wm(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            Cm.catch(n);
        }
    });
}
var Hm = Object.defineProperty,
    qm = {};
function Gm() {}
((e, t) => {
    for (var n in t) Hm(e, n, { get: t[n], enumerable: !0 });
})(qm, {
    assign: () => lg,
    colors: () => ig,
    createStringInterpolator: () => eg,
    skipAnimation: () => og,
    to: () => tg,
    willAdvance: () => ag,
});
var Km = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
function Qm(e, t) {
    if (Km.arr(e)) {
        if (!Km.arr(t) || e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
    }
    return e === t;
}
var Ym = (e, t) => e.forEach(t);
function Xm(e, t, n) {
    if (Km.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Zm = (e) => (Km.und(e) ? [] : Km.arr(e) ? e : [e]);
function Jm(e, t) {
    if (e.size) {
        const n = Array.from(e);
        (e.clear(), Ym(n, t));
    }
}
var eg,
    tg,
    ng = (e, ...t) => Jm(e, (e) => e(...t)),
    rg = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    ig = null,
    og = !1,
    ag = Gm,
    lg = (e) => {
        (e.to && (tg = e.to),
            e.now && (Cm.now = e.now),
            void 0 !== e.colors && (ig = e.colors),
            null != e.skipAnimation && (og = e.skipAnimation),
            e.createStringInterpolator && (eg = e.createStringInterpolator),
            e.requestAnimationFrame && Cm.use(e.requestAnimationFrame),
            e.batchedUpdates && (Cm.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (ag = e.willAdvance),
            e.frameLoop && (Cm.frameLoop = e.frameLoop));
    },
    sg = new Set(),
    ug = [],
    cg = [],
    fg = 0,
    dg = {
        get idle() {
            return !sg.size && !ug.length;
        },
        start(e) {
            fg > e.priority ? (sg.add(e), Cm.onStart(pg)) : (hg(e), Cm(mg));
        },
        advance: mg,
        sort(e) {
            if (fg) Cm.onFrame(() => dg.sort(e));
            else {
                const t = ug.indexOf(e);
                ~t && (ug.splice(t, 1), vg(e));
            }
        },
        clear() {
            ((ug = []), sg.clear());
        },
    };
function pg() {
    (sg.forEach(hg), sg.clear(), Cm(mg));
}
function hg(e) {
    ug.includes(e) || vg(e);
}
function vg(e) {
    ug.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(ug, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function mg(e) {
    const t = cg;
    for (let n = 0; n < ug.length; n++) {
        const r = ug[n];
        ((fg = r.priority), r.idle || (ag(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((fg = 0), ((cg = ug).length = 0), (ug = t).length > 0);
}
var gg = {
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
    yg = '[-+]?\\d*\\.?\\d+',
    bg = yg + '%';
function _g(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var wg = new RegExp('rgb' + _g(yg, yg, yg)),
    kg = new RegExp('rgba' + _g(yg, yg, yg, yg)),
    Sg = new RegExp('hsl' + _g(yg, bg, bg)),
    xg = new RegExp('hsla' + _g(yg, bg, bg, yg)),
    Og = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    Eg = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    Pg = /^#([0-9a-fA-F]{6})$/,
    Cg = /^#([0-9a-fA-F]{8})$/;
function Ag(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function Tg(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        i = 2 * n - r,
        o = Ag(i, r, e + 1 / 3),
        a = Ag(i, r, e),
        l = Ag(i, r, e - 1 / 3);
    return (Math.round(255 * o) << 24) | (Math.round(255 * a) << 16) | (Math.round(255 * l) << 8);
}
function Ng(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function jg(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function Rg(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function Lg(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Ig(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = Pg.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : ig && void 0 !== ig[e]
                ? ig[e]
                : (t = wg.exec(e))
                  ? ((Ng(t[1]) << 24) | (Ng(t[2]) << 16) | (Ng(t[3]) << 8) | 255) >>> 0
                  : (t = kg.exec(e))
                    ? ((Ng(t[1]) << 24) | (Ng(t[2]) << 16) | (Ng(t[3]) << 8) | Rg(t[4])) >>> 0
                    : (t = Og.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = Cg.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = Eg.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = Sg.exec(e))
                            ? (255 | Tg(jg(t[1]), Lg(t[2]), Lg(t[3]))) >>> 0
                            : (t = xg.exec(e))
                              ? (Tg(jg(t[1]), Lg(t[2]), Lg(t[3])) | Rg(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var Mg = (e, t, n) => {
    if (Km.fun(e)) return e;
    if (Km.arr(e)) return Mg({ range: e, output: t, extrapolate: n });
    if (Km.str(e.output[0])) return eg(e);
    const r = e,
        i = r.output,
        o = r.range || [0, 1],
        a = r.extrapolateLeft || r.extrapolate || 'extend',
        l = r.extrapolateRight || r.extrapolate || 'extend',
        s = r.easing || ((e) => e);
    return (e) => {
        const t = (function (e, t) {
            for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
            return n - 1;
        })(e, o);
        return (function (e, t, n, r, i, o, a, l, s) {
            let u = s ? s(e) : e;
            if (u < t) {
                if ('identity' === a) return u;
                'clamp' === a && (u = t);
            }
            if (u > n) {
                if ('identity' === l) return u;
                'clamp' === l && (u = n);
            }
            if (r === i) return r;
            if (t === n) return e <= t ? r : i;
            t === -1 / 0 ? (u = -u) : n === 1 / 0 ? (u -= t) : (u = (u - t) / (n - t));
            ((u = o(u)), r === -1 / 0 ? (u = -u) : i === 1 / 0 ? (u += r) : (u = u * (i - r) + r));
            return u;
        })(e, o[t], o[t + 1], i[t], i[t + 1], s, a, l, r.map);
    };
};
var zg = Symbol.for('FluidValue.get'),
    Dg = Symbol.for('FluidValue.observers'),
    Vg = (e) => Boolean(e && e[zg]),
    Fg = (e) => (e && e[zg] ? e[zg]() : e),
    Bg = (e) => e[Dg] || null;
function Ug(e, t) {
    const n = e[Dg];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
var $g = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            Wg(this, e);
        }
    },
    Wg = (e, t) => Kg(e, zg, t);
function Hg(e, t) {
    if (e[zg]) {
        let n = e[Dg];
        (n || Kg(e, Dg, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function qg(e, t) {
    const n = e[Dg];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[Dg] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
var Gg,
    Kg = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    Qg = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    Yg = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    Xg = new RegExp(`(${Qg.source})(%|[a-z]+)`, 'i'),
    Zg = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    Jg = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    ey = (e) => {
        const [t, n] = ty(e);
        if (!t || rg()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && Jg.test(n) ? ey(n) : n || e;
    },
    ty = (e) => {
        const t = Jg.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    ny = (e, t, n, r, i) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
    ry = (e) => {
        Gg || (Gg = ig ? new RegExp(`(${Object.keys(ig).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => Fg(e).replace(Jg, ey).replace(Yg, Ig).replace(Gg, Ig)),
            n = t.map((e) => e.match(Qg).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => Mg({ ...e, output: t }));
        return (e) => {
            var n;
            const i = !Xg.test(t[0]) && (null == (n = t.find((e) => Xg.test(e))) ? void 0 : n.replace(Qg, ''));
            let o = 0;
            return t[0].replace(Qg, () => `${r[o++](e)}${i || ''}`).replace(Zg, ny);
        };
    },
    iy = 'react-spring: ',
    oy = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${iy}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    ay = oy(console.warn);
var ly = oy(console.warn);
function sy(e) {
    return Km.str(e) && ('#' == e[0] || /\d/.test(e) || (!rg() && Jg.test(e)) || e in (ig || {}));
}
var uy = rg() ? U.useEffect : U.useLayoutEffect,
    cy = () => {
        const e = U.useRef(!1);
        return (
            uy(
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
function fy() {
    const e = U.useState()[1],
        t = cy();
    return () => {
        t.current && e(Math.random());
    };
}
var dy = (e) => U.useEffect(e, py),
    py = [];
function hy(e) {
    const t = U.useRef();
    return (
        U.useEffect(() => {
            t.current = e;
        }),
        t.current
    );
}
var vy = Symbol.for('Animated:node'),
    my = (e) => e && e[vy],
    gy = (e, t) => {
        return ((n = e), (r = vy), (i = t), Object.defineProperty(n, r, { value: i, writable: !0, configurable: !0 }));
        var n, r, i;
    },
    yy = (e) => e && e[vy] && e[vy].getPayload(),
    by = class {
        constructor() {
            gy(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    _y = class extends by {
        constructor(e) {
            (super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                Km.num(this._value) && (this.lastPosition = this._value));
        }
        static create(e) {
            return new _y(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                Km.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            ((this.done = !1),
                Km.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null)));
        }
    },
    wy = class extends _y {
        constructor(e) {
            (super(0), (this._string = null), (this._toString = Mg({ output: [e, e] })));
        }
        static create(e) {
            return new wy(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (Km.str(e)) {
                if (e == this._string) return !1;
                ((this._string = e), (this._value = 1));
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null;
            }
            return !0;
        }
        reset(e) {
            (e && (this._toString = Mg({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
        }
    },
    ky = { dependencies: null },
    Sy = class extends by {
        constructor(e) {
            (super(), (this.source = e), this.setValue(e));
        }
        getValue(e) {
            const t = {};
            return (
                Xm(this.source, (n, r) => {
                    var i;
                    (i = n) && i[vy] === i ? (t[r] = n.getValue(e)) : Vg(n) ? (t[r] = Fg(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            ((this.source = e), (this.payload = this._makePayload(e)));
        }
        reset() {
            this.payload && Ym(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return (Xm(e, this._addToPayload, t), Array.from(t));
            }
        }
        _addToPayload(e) {
            ky.dependencies && Vg(e) && ky.dependencies.add(e);
            const t = yy(e);
            t && Ym(t, (e) => this.add(e));
        }
    },
    xy = class extends Sy {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new xy(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map(Oy)), !0);
        }
    };
function Oy(e) {
    return (sy(e) ? wy : _y).create(e);
}
function Ey(e) {
    const t = my(e);
    return t ? t.constructor : Km.arr(e) ? xy : sy(e) ? wy : _y;
}
var Py = (e, t) => {
        const n = !Km.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return U.forwardRef((r, i) => {
            const o = U.useRef(null),
                a =
                    n &&
                    U.useCallback(
                        (e) => {
                            o.current = (function (e, t) {
                                e && (Km.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(i, e);
                        },
                        [i],
                    ),
                [l, s] = (function (e, t) {
                    const n = new Set();
                    ((ky.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                    return ((e = new Sy(e)), (ky.dependencies = null), [e, n]);
                })(r, t),
                u = fy(),
                c = () => {
                    const e = o.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && u();
                },
                f = new Cy(c, s),
                d = U.useRef();
            (uy(
                () => (
                    (d.current = f),
                    Ym(s, (e) => Hg(e, f)),
                    () => {
                        d.current && (Ym(d.current.deps, (e) => qg(e, d.current)), Cm.cancel(d.current.update));
                    }
                ),
            ),
                U.useEffect(c, []),
                dy(() => () => {
                    const e = d.current;
                    Ym(e.deps, (t) => qg(t, e));
                }));
            const p = t.getComponentProps(l.getValue());
            return U.createElement(e, { ...p, ref: a });
        });
    },
    Cy = class {
        constructor(e, t) {
            ((this.update = e), (this.deps = t));
        }
        eventObserved(e) {
            'change' == e.type && Cm.write(this.update);
        }
    };
var Ay = Symbol.for('AnimatedComponent'),
    Ty = (
        e,
        {
            applyAnimatedValues: t = () => !1,
            createAnimatedStyle: n = (e) => new Sy(e),
            getComponentProps: r = (e) => e,
        } = {},
    ) => {
        const i = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
            o = (e) => {
                const t = Ny(e) || 'Anonymous';
                return (
                    ((e = Km.str(e) ? o[e] || (o[e] = Py(e, i)) : e[Ay] || (e[Ay] = Py(e, i))).displayName =
                        `Animated(${t})`),
                    e
                );
            };
        return (
            Xm(e, (t, n) => {
                (Km.arr(e) && (n = Ny(t)), (o[n] = o(t)));
            }),
            { animated: o }
        );
    },
    Ny = (e) => (Km.str(e) ? e : e && Km.str(e.displayName) ? e.displayName : (Km.fun(e) && e.name) || null);
function jy(e, ...t) {
    return Km.fun(e) ? e(...t) : e;
}
var Ry = (e, t) => !0 === e || !!(t && e && (Km.fun(e) ? e(t) : Zm(e).includes(t))),
    Ly = (e, t) => (Km.obj(e) ? t && e[t] : e),
    Iy = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
    My = (e) => e,
    zy = (e, t = My) => {
        let n = Dy;
        e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
        const r = {};
        for (const i of n) {
            const n = t(e[i], i);
            Km.und(n) || (r[i] = n);
        }
        return r;
    },
    Dy = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
    Vy = {
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
function Fy(e) {
    const t = (function (e) {
        const t = {};
        let n = 0;
        if (
            (Xm(e, (e, r) => {
                Vy[r] || ((t[r] = e), n++);
            }),
            n)
        )
            return t;
    })(e);
    if (t) {
        const n = { to: t };
        return (Xm(e, (e, r) => r in t || (n[r] = e)), n);
    }
    return { ...e };
}
function By(e) {
    return (
        (e = Fg(e)),
        Km.arr(e) ? e.map(By) : sy(e) ? qm.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
    );
}
function Uy(e) {
    for (const t in e) return !0;
    return !1;
}
function $y(e) {
    return Km.fun(e) || (Km.arr(e) && Km.obj(e[0]));
}
function Wy(e, t) {
    var n;
    (null == (n = e.ref) || n.delete(e), null == t || t.delete(e));
}
function Hy(e, t) {
    var n;
    t && e.ref !== t && (null == (n = e.ref) || n.delete(e), t.add(e), (e.ref = t));
}
var qy = { tension: 170, friction: 26, mass: 1, damping: 1, easing: (e) => e, clamp: !1 };
function Gy(e, t) {
    if (Km.und(t.decay)) {
        const n = !Km.und(t.tension) || !Km.und(t.friction);
        ((!n && Km.und(t.frequency) && Km.und(t.damping) && Km.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0));
    } else e.duration = void 0;
}
var Ky = [];
function Qy(e, { key: t, props: n, defaultProps: r, state: i, actions: o }) {
    return new Promise((a, l) => {
        let s,
            u,
            c = Ry(n.cancel ?? (null == r ? void 0 : r.cancel), t);
        if (c) p();
        else {
            Km.und(n.pause) || (i.paused = Ry(n.pause, t));
            let e = null == r ? void 0 : r.pause;
            (!0 !== e && (e = i.paused || Ry(e, t)),
                (s = jy(n.delay || 0, t)),
                e ? (i.resumeQueue.add(d), o.pause()) : (o.resume(), d()));
        }
        function f() {
            (i.resumeQueue.add(d), i.timeouts.delete(u), u.cancel(), (s = u.time - Cm.now()));
        }
        function d() {
            s > 0 && !qm.skipAnimation
                ? ((i.delayed = !0), (u = Cm.setTimeout(p, s)), i.pauseQueue.add(f), i.timeouts.add(u))
                : p();
        }
        function p() {
            (i.delayed && (i.delayed = !1),
                i.pauseQueue.delete(f),
                i.timeouts.delete(u),
                e <= (i.cancelId || 0) && (c = !0));
            try {
                o.start({ ...n, callId: e, cancel: c }, a);
            } catch (t) {
                l(t);
            }
        }
    });
}
var Yy = (e, t) =>
        1 == t.length
            ? t[0]
            : t.some((e) => e.cancelled)
              ? Jy(e.get())
              : t.every((e) => e.noop)
                ? Xy(e.get())
                : Zy(
                      e.get(),
                      t.every((e) => e.finished),
                  ),
    Xy = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
    Zy = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
    Jy = (e) => ({ value: e, cancelled: !0, finished: !1 });
function eb(e, t, n, r) {
    const { callId: i, parentId: o, onRest: a } = t,
        { asyncTo: l, promise: s } = n;
    return o || e !== l || t.reset
        ? (n.promise = (async () => {
              ((n.asyncId = i), (n.asyncTo = e));
              const u = zy(t, (e, t) => ('onRest' === t ? void 0 : e));
              let c, f;
              const d = new Promise((e, t) => ((c = e), (f = t))),
                  p = (e) => {
                      const t = (i <= (n.cancelId || 0) && Jy(r)) || (i !== n.asyncId && Zy(r, !1));
                      if (t) throw ((e.result = t), f(e), e);
                  },
                  h = (e, t) => {
                      const o = new nb(),
                          a = new rb();
                      return (async () => {
                          if (qm.skipAnimation) throw (tb(n), (a.result = Zy(r, !1)), f(a), a);
                          p(o);
                          const l = Km.obj(e) ? { ...e } : { ...t, to: e };
                          ((l.parentId = i),
                              Xm(u, (e, t) => {
                                  Km.und(l[t]) && (l[t] = e);
                              }));
                          const s = await r.start(l);
                          return (
                              p(o),
                              n.paused &&
                                  (await new Promise((e) => {
                                      n.resumeQueue.add(e);
                                  })),
                              s
                          );
                      })();
                  };
              let v;
              if (qm.skipAnimation) return (tb(n), Zy(r, !1));
              try {
                  let t;
                  ((t = Km.arr(e)
                      ? (async (e) => {
                            for (const t of e) await h(t);
                        })(e)
                      : Promise.resolve(e(h, r.stop.bind(r)))),
                      await Promise.all([t.then(c), d]),
                      (v = Zy(r.get(), !0, !1)));
              } catch (m) {
                  if (m instanceof nb) v = m.result;
                  else {
                      if (!(m instanceof rb)) throw m;
                      v = m.result;
                  }
              } finally {
                  i == n.asyncId && ((n.asyncId = o), (n.asyncTo = o ? l : void 0), (n.promise = o ? s : void 0));
              }
              return (
                  Km.fun(a) &&
                      Cm.batchedUpdates(() => {
                          a(v, r, r.item);
                      }),
                  v
              );
          })())
        : s;
}
function tb(e, t) {
    (Jm(e.timeouts, (e) => e.cancel()),
        e.pauseQueue.clear(),
        e.resumeQueue.clear(),
        (e.asyncId = e.asyncTo = e.promise = void 0),
        t && (e.cancelId = t));
}
var nb = class extends Error {
        constructor() {
            super(
                'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
            );
        }
    },
    rb = class extends Error {
        constructor() {
            super('SkipAnimationSignal');
        }
    },
    ib = (e) => e instanceof ab,
    ob = 1,
    ab = class extends $g {
        constructor() {
            (super(...arguments), (this.id = ob++), (this._priority = 0));
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = my(this);
            return e && e.getValue();
        }
        to(...e) {
            return qm.to(this, e);
        }
        interpolate(...e) {
            return (ay(`${iy}The "interpolate" function is deprecated in v9 (use "to" instead)`), qm.to(this, e));
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
            Ug(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            (this.idle || dg.sort(this), Ug(this, { type: 'priority', parent: this, priority: e }));
        }
    },
    lb = Symbol.for('SpringPhase'),
    sb = (e) => (1 & e[lb]) > 0,
    ub = (e) => (2 & e[lb]) > 0,
    cb = (e) => (4 & e[lb]) > 0,
    fb = (e, t) => (t ? (e[lb] |= 3) : (e[lb] &= -3)),
    db = (e, t) => (t ? (e[lb] |= 4) : (e[lb] &= -5)),
    pb = class extends ab {
        constructor(e, t) {
            if (
                (super(),
                (this.animation = new (class {
                    constructor() {
                        ((this.changed = !1),
                            (this.values = Ky),
                            (this.toValues = null),
                            (this.fromValues = Ky),
                            (this.config = new (class {
                                constructor() {
                                    ((this.velocity = 0), Object.assign(this, qy));
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
                !Km.und(e) || !Km.und(t))
            ) {
                const n = Km.obj(e) ? { ...e } : { ...t, from: e };
                (Km.und(n.default) && (n.default = !0), this.start(n));
            }
        }
        get idle() {
            return !(ub(this) || this._state.asyncTo) || cb(this);
        }
        get goal() {
            return Fg(this.animation.to);
        }
        get velocity() {
            const e = my(this);
            return e instanceof _y ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
        }
        get hasAnimated() {
            return sb(this);
        }
        get isAnimating() {
            return ub(this);
        }
        get isPaused() {
            return cb(this);
        }
        get isDelayed() {
            return this._state.delayed;
        }
        advance(e) {
            let t = !0,
                n = !1;
            const r = this.animation;
            let { toValues: i } = r;
            const { config: o } = r,
                a = yy(r.to);
            (!a && Vg(r.to) && (i = Zm(Fg(r.to))),
                r.values.forEach((l, s) => {
                    if (l.done) return;
                    const u = l.constructor == wy ? 1 : a ? a[s].lastPosition : i[s];
                    let c = r.immediate,
                        f = u;
                    if (!c) {
                        if (((f = l.lastPosition), o.tension <= 0)) return void (l.done = !0);
                        let t = (l.elapsedTime += e);
                        const n = r.fromValues[s],
                            i = null != l.v0 ? l.v0 : (l.v0 = Km.arr(o.velocity) ? o.velocity[s] : o.velocity);
                        let a;
                        const d = o.precision || (n == u ? 0.005 : Math.min(1, 0.001 * Math.abs(u - n)));
                        if (Km.und(o.duration))
                            if (o.decay) {
                                const e = !0 === o.decay ? 0.998 : o.decay,
                                    r = Math.exp(-(1 - e) * t);
                                ((f = n + (i / (1 - e)) * (1 - r)),
                                    (c = Math.abs(l.lastPosition - f) <= d),
                                    (a = i * r));
                            } else {
                                a = null == l.lastVelocity ? i : l.lastVelocity;
                                const t = o.restVelocity || d / 10,
                                    r = o.clamp ? 0 : o.bounce,
                                    s = !Km.und(r),
                                    p = n == u ? l.v0 > 0 : n < u;
                                let h,
                                    v = !1;
                                const m = 1,
                                    g = Math.ceil(e / m);
                                for (
                                    let e = 0;
                                    e < g && ((h = Math.abs(a) > t), h || ((c = Math.abs(u - f) <= d), !c));
                                    ++e
                                ) {
                                    s && ((v = f == u || f > u == p), v && ((a = -a * r), (f = u)));
                                    ((a += ((1e-6 * -o.tension * (f - u) + 0.001 * -o.friction * a) / o.mass) * m),
                                        (f += a * m));
                                }
                            }
                        else {
                            let r = 1;
                            (o.duration > 0 &&
                                (this._memoizedDuration !== o.duration &&
                                    ((this._memoizedDuration = o.duration),
                                    l.durationProgress > 0 &&
                                        ((l.elapsedTime = o.duration * l.durationProgress), (t = l.elapsedTime += e))),
                                (r = (o.progress || 0) + t / this._memoizedDuration),
                                (r = r > 1 ? 1 : r < 0 ? 0 : r),
                                (l.durationProgress = r)),
                                (f = n + o.easing(r) * (u - n)),
                                (a = (f - l.lastPosition) / e),
                                (c = 1 == r));
                        }
                        ((l.lastVelocity = a),
                            Number.isNaN(f) && (console.warn('Got NaN while animating:', this), (c = !0)));
                    }
                    (a && !a[s].done && (c = !1), c ? (l.done = !0) : (t = !1), l.setValue(f, o.round) && (n = !0));
                }));
            const l = my(this),
                s = l.getValue();
            if (t) {
                const e = Fg(r.to);
                ((s === e && !n) || o.decay ? n && o.decay && this._onChange(s) : (l.setValue(e), this._onChange(e)),
                    this._stop());
            } else n && this._onChange(s);
        }
        set(e) {
            return (
                Cm.batchedUpdates(() => {
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
            if (ub(this)) {
                const { to: e, config: t } = this.animation;
                Cm.batchedUpdates(() => {
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
                Km.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [Km.obj(e) ? e : { ...t, to: e }]),
                Promise.all(n.map((e) => this._update(e))).then((e) => Yy(this, e))
            );
        }
        stop(e) {
            const { to: t } = this.animation;
            return (
                this._focus(this.get()),
                tb(this._state, e && this._lastCallId),
                Cm.batchedUpdates(() => this._stop(t, e)),
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
            ((n = Km.obj(n) ? n[t] : n),
                (null == n || $y(n)) && (n = void 0),
                (r = Km.obj(r) ? r[t] : r),
                null == r && (r = void 0));
            const i = { to: n, from: r };
            return (
                sb(this) ||
                    (e.reverse && ([n, r] = [r, n]), (r = Fg(r)), Km.und(r) ? my(this) || this._set(n) : this._set(r)),
                i
            );
        }
        _update({ ...e }, t) {
            const { key: n, defaultProps: r } = this;
            (e.default &&
                Object.assign(
                    r,
                    zy(e, (e, t) => (/^on/.test(t) ? Ly(e, n) : e)),
                ),
                _b(this, e, 'onProps'),
                wb(this, 'onProps', e, this));
            const i = this._prepareNode(e);
            if (Object.isFrozen(this))
                throw Error(
                    'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                );
            const o = this._state;
            return Qy(++this._lastCallId, {
                key: n,
                props: e,
                defaultProps: r,
                state: o,
                actions: {
                    pause: () => {
                        cb(this) ||
                            (db(this, !0),
                            ng(o.pauseQueue),
                            wb(this, 'onPause', Zy(this, hb(this, this.animation.to)), this));
                    },
                    resume: () => {
                        cb(this) &&
                            (db(this, !1),
                            ub(this) && this._resume(),
                            ng(o.resumeQueue),
                            wb(this, 'onResume', Zy(this, hb(this, this.animation.to)), this));
                    },
                    start: this._merge.bind(this, i),
                },
            }).then((n) => {
                if (e.loop && n.finished && (!t || !n.noop)) {
                    const t = vb(e);
                    if (t) return this._update(t, !0);
                }
                return n;
            });
        }
        _merge(e, t, n) {
            if (t.cancel) return (this.stop(!0), n(Jy(this)));
            const r = !Km.und(e.to),
                i = !Km.und(e.from);
            if (r || i) {
                if (!(t.callId > this._lastToId)) return n(Jy(this));
                this._lastToId = t.callId;
            }
            const { key: o, defaultProps: a, animation: l } = this,
                { to: s, from: u } = l;
            let { to: c = s, from: f = u } = e;
            (!i || r || (t.default && !Km.und(c)) || (c = f), t.reverse && ([c, f] = [f, c]));
            const d = !Qm(f, u);
            (d && (l.from = f), (f = Fg(f)));
            const p = !Qm(c, s);
            p && this._focus(c);
            const h = $y(t.to),
                { config: v } = l,
                { decay: m, velocity: g } = v;
            ((r || i) && (v.velocity = 0),
                t.config &&
                    !h &&
                    (function (e, t, n) {
                        (n && (Gy((n = { ...n }), t), (t = { ...n, ...t })), Gy(e, t), Object.assign(e, t));
                        for (const a in qy) null == e[a] && (e[a] = qy[a]);
                        let { frequency: r, damping: i } = e;
                        const { mass: o } = e;
                        Km.und(r) ||
                            (r < 0.01 && (r = 0.01),
                            i < 0 && (i = 0),
                            (e.tension = Math.pow((2 * Math.PI) / r, 2) * o),
                            (e.friction = (4 * Math.PI * i * o) / r));
                    })(v, jy(t.config, o), t.config !== a.config ? jy(a.config, o) : void 0));
            let y = my(this);
            if (!y || Km.und(c)) return n(Zy(this, !0));
            const b = Km.und(t.reset) ? i && !t.default : !Km.und(f) && Ry(t.reset, o),
                _ = b ? f : this.get(),
                w = By(c),
                k = Km.num(w) || Km.arr(w) || sy(w),
                S = !h && (!k || Ry(a.immediate || t.immediate, o));
            if (p) {
                const e = Ey(c);
                if (e !== y.constructor) {
                    if (!S)
                        throw Error(
                            `Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`,
                        );
                    y = this._set(w);
                }
            }
            const x = y.constructor;
            let O = Vg(c),
                E = !1;
            if (!O) {
                const e = b || (!sb(this) && d);
                ((p || e) && ((E = Qm(By(_), w)), (O = !E)),
                    ((Qm(l.immediate, S) || S) && Qm(v.decay, m) && Qm(v.velocity, g)) || (O = !0));
            }
            if (
                (E && ub(this) && (l.changed && !b ? (O = !0) : O || this._stop(s)),
                !h &&
                    ((O || Vg(s)) && ((l.values = y.getPayload()), (l.toValues = Vg(c) ? null : x == wy ? [1] : Zm(w))),
                    l.immediate != S && ((l.immediate = S), S || b || this._set(s)),
                    O))
            ) {
                const { onRest: e } = l;
                Ym(bb, (e) => _b(this, t, e));
                const r = Zy(this, hb(this, s));
                (ng(this._pendingCalls, r),
                    this._pendingCalls.add(n),
                    l.changed &&
                        Cm.batchedUpdates(() => {
                            var t;
                            ((l.changed = !b),
                                null == e || e(r, this),
                                b ? jy(a.onRest, r) : null == (t = l.onStart) || t.call(l, r, this));
                        }));
            }
            (b && this._set(_),
                h
                    ? n(eb(t.to, t, this._state, this))
                    : O
                      ? this._start()
                      : ub(this) && !p
                        ? this._pendingCalls.add(n)
                        : n(Xy(_)));
        }
        _focus(e) {
            const t = this.animation;
            e !== t.to && (Bg(this) && this._detach(), (t.to = e), Bg(this) && this._attach());
        }
        _attach() {
            let e = 0;
            const { to: t } = this.animation;
            (Vg(t) && (Hg(t, this), ib(t) && (e = t.priority + 1)), (this.priority = e));
        }
        _detach() {
            const { to: e } = this.animation;
            Vg(e) && qg(e, this);
        }
        _set(e, t = !0) {
            const n = Fg(e);
            if (!Km.und(n)) {
                const e = my(this);
                if (!e || !Qm(n, e.getValue())) {
                    const r = Ey(n);
                    (e && e.constructor == r ? e.setValue(n) : gy(this, r.create(n)),
                        e &&
                            Cm.batchedUpdates(() => {
                                this._onChange(n, t);
                            }));
                }
            }
            return my(this);
        }
        _onStart() {
            const e = this.animation;
            e.changed || ((e.changed = !0), wb(this, 'onStart', Zy(this, hb(this, e.to)), this));
        }
        _onChange(e, t) {
            (t || (this._onStart(), jy(this.animation.onChange, e, this)),
                jy(this.defaultProps.onChange, e, this),
                super._onChange(e, t));
        }
        _start() {
            const e = this.animation;
            (my(this).reset(Fg(e.to)),
                e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                ub(this) || (fb(this, !0), cb(this) || this._resume()));
        }
        _resume() {
            qm.skipAnimation ? this.finish() : dg.start(this);
        }
        _stop(e, t) {
            if (ub(this)) {
                fb(this, !1);
                const n = this.animation;
                (Ym(n.values, (e) => {
                    e.done = !0;
                }),
                    n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                    Ug(this, { type: 'idle', parent: this }));
                const r = t ? Jy(this.get()) : Zy(this.get(), hb(this, e ?? n.to));
                (ng(this._pendingCalls, r), n.changed && ((n.changed = !1), wb(this, 'onRest', r, this)));
            }
        }
    };
function hb(e, t) {
    const n = By(t);
    return Qm(By(e.get()), n);
}
function vb(e, t = e.loop, n = e.to) {
    const r = jy(t);
    if (r) {
        const i = !0 !== r && Fy(r),
            o = (i || e).reverse,
            a = !i || i.reset;
        return mb({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !o || $y(n) ? n : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...i,
        });
    }
}
function mb(e) {
    const { to: t, from: n } = (e = Fy(e)),
        r = new Set();
    return (Km.obj(t) && yb(t, r), Km.obj(n) && yb(n, r), (e.keys = r.size ? Array.from(r) : null), e);
}
function gb(e) {
    const t = mb(e);
    return (Km.und(t.default) && (t.default = zy(t)), t);
}
function yb(e, t) {
    Xm(e, (e, n) => null != e && t.add(n));
}
var bb = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
function _b(e, t, n) {
    e.animation[n] = t[n] !== Iy(t, n) ? Ly(t[n], e.key) : void 0;
}
function wb(e, t, ...n) {
    var r, i, o, a;
    (null == (i = (r = e.animation)[t]) || i.call(r, ...n), null == (a = (o = e.defaultProps)[t]) || a.call(o, ...n));
}
var kb = ['onStart', 'onChange', 'onRest'],
    Sb = 1,
    xb = class {
        constructor(e, t) {
            ((this.id = Sb++),
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
                Km.und(n) || this.springs[t].set(n);
            }
        }
        update(e) {
            return (e && this.queue.push(mb(e)), this);
        }
        start(e) {
            let { queue: t } = this;
            return (
                e ? (t = Zm(e).map(mb)) : (this.queue = []),
                this._flush ? this._flush(this, t) : (Nb(this, t), Ob(this, t))
            );
        }
        stop(e, t) {
            if ((e !== !!e && (t = e), t)) {
                const n = this.springs;
                Ym(Zm(t), (t) => n[t].stop(!!e));
            } else (tb(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
            return this;
        }
        pause(e) {
            if (Km.und(e)) this.start({ pause: !0 });
            else {
                const t = this.springs;
                Ym(Zm(e), (e) => t[e].pause());
            }
            return this;
        }
        resume(e) {
            if (Km.und(e)) this.start({ pause: !1 });
            else {
                const t = this.springs;
                Ym(Zm(e), (e) => t[e].resume());
            }
            return this;
        }
        each(e) {
            Xm(this.springs, e);
        }
        _onFrame() {
            const { onStart: e, onChange: t, onRest: n } = this._events,
                r = this._active.size > 0,
                i = this._changed.size > 0;
            ((r && !this._started) || (i && !this._started)) &&
                ((this._started = !0),
                Jm(e, ([e, t]) => {
                    ((t.value = this.get()), e(t, this, this._item));
                }));
            const o = !r && this._started,
                a = i || (o && n.size) ? this.get() : null;
            (i &&
                t.size &&
                Jm(t, ([e, t]) => {
                    ((t.value = a), e(t, this, this._item));
                }),
                o &&
                    ((this._started = !1),
                    Jm(n, ([e, t]) => {
                        ((t.value = a), e(t, this, this._item));
                    })));
        }
        eventObserved(e) {
            if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
            else {
                if ('idle' != e.type) return;
                this._active.delete(e.parent);
            }
            Cm.onFrame(this._onFrame);
        }
    };
function Ob(e, t) {
    return Promise.all(t.map((t) => Eb(e, t))).then((t) => Yy(e, t));
}
async function Eb(e, t, n) {
    const { keys: r, to: i, from: o, loop: a, onRest: l, onResolve: s } = t,
        u = Km.obj(t.default) && t.default;
    (a && (t.loop = !1), !1 === i && (t.to = null), !1 === o && (t.from = null));
    const c = Km.arr(i) || Km.fun(i) ? i : void 0;
    c
        ? ((t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0))
        : Ym(kb, (n) => {
              const r = t[n];
              if (Km.fun(r)) {
                  const i = e._events[n];
                  ((t[n] = ({ finished: e, cancelled: t }) => {
                      const n = i.get(r);
                      n
                          ? (e || (n.finished = !1), t && (n.cancelled = !0))
                          : i.set(r, { value: null, finished: e || !1, cancelled: t || !1 });
                  }),
                      u && (u[n] = t[n]));
              }
          });
    const f = e._state;
    t.pause === !f.paused
        ? ((f.paused = t.pause), ng(t.pause ? f.pauseQueue : f.resumeQueue))
        : f.paused && (t.pause = !0);
    const d = (r || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
        p = !0 === t.cancel || !0 === Iy(t, 'cancel');
    ((c || (p && f.asyncId)) &&
        d.push(
            Qy(++e._lastAsyncId, {
                props: t,
                state: f,
                actions: {
                    pause: Gm,
                    resume: Gm,
                    start(t, n) {
                        p ? (tb(f, e._lastAsyncId), n(Jy(e))) : ((t.onRest = l), n(eb(c, t, f, e)));
                    },
                },
            }),
        ),
        f.paused &&
            (await new Promise((e) => {
                f.resumeQueue.add(e);
            })));
    const h = Yy(e, await Promise.all(d));
    if (a && h.finished && (!n || !h.noop)) {
        const n = vb(t, a, i);
        if (n) return (Nb(e, [n]), Eb(e, n, !0));
    }
    return (s && Cm.batchedUpdates(() => s(h, e, e.item)), h);
}
function Pb(e, t) {
    const n = { ...e.springs };
    return (
        t &&
            Ym(Zm(t), (e) => {
                (Km.und(e.keys) && (e = mb(e)), Km.obj(e.to) || (e = { ...e, to: void 0 }), Tb(n, e, (e) => Ab(e)));
            }),
        Cb(e, n),
        n
    );
}
function Cb(e, t) {
    Xm(t, (t, n) => {
        e.springs[n] || ((e.springs[n] = t), Hg(t, e));
    });
}
function Ab(e, t) {
    const n = new pb();
    return ((n.key = e), t && Hg(n, t), n);
}
function Tb(e, t, n) {
    t.keys &&
        Ym(t.keys, (r) => {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function Nb(e, t) {
    Ym(t, (t) => {
        Tb(e.springs, t, (t) => Ab(t, e));
    });
}
var jb,
    Rb,
    Lb = ({ children: e, ...t }) => {
        const n = U.useContext(Ib),
            r = t.pause || !!n.pause,
            i = t.immediate || !!n.immediate;
        t = (function (e, t) {
            const [n] = U.useState(() => ({ inputs: t, result: e() })),
                r = U.useRef(),
                i = r.current;
            let o = i;
            o
                ? Boolean(
                      t &&
                          o.inputs &&
                          (function (e, t) {
                              if (e.length !== t.length) return !1;
                              for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                              return !0;
                          })(t, o.inputs),
                  ) || (o = { inputs: t, result: e() })
                : (o = n);
            return (
                U.useEffect(() => {
                    ((r.current = o), i == n && (n.inputs = n.result = void 0));
                }, [o]),
                o.result
            );
        })(() => ({ pause: r, immediate: i }), [r, i]);
        const { Provider: o } = Ib;
        return U.createElement(o, { value: t }, e);
    },
    Ib =
        ((jb = Lb),
        (Rb = {}),
        Object.assign(jb, U.createContext(Rb)),
        (jb.Provider._context = jb),
        (jb.Consumer._context = jb),
        jb);
((Lb.Provider = Ib.Provider), (Lb.Consumer = Ib.Consumer));
var Mb = () => {
    const e = [],
        t = function (t) {
            ly(
                `${iy}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
            );
            const r = [];
            return (
                Ym(e, (e, i) => {
                    if (Km.und(t)) r.push(e.start());
                    else {
                        const o = n(t, e, i);
                        o && r.push(e.start(o));
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
            return (Ym(e, (e) => e.pause(...arguments)), this);
        }),
        (t.resume = function () {
            return (Ym(e, (e) => e.resume(...arguments)), this);
        }),
        (t.set = function (t) {
            Ym(e, (e, n) => {
                const r = Km.fun(t) ? t(n, e) : t;
                r && e.set(r);
            });
        }),
        (t.start = function (t) {
            const n = [];
            return (
                Ym(e, (e, r) => {
                    if (Km.und(t)) n.push(e.start());
                    else {
                        const i = this._getProps(t, e, r);
                        i && n.push(e.start(i));
                    }
                }),
                n
            );
        }),
        (t.stop = function () {
            return (Ym(e, (e) => e.stop(...arguments)), this);
        }),
        (t.update = function (t) {
            return (Ym(e, (e, n) => e.update(this._getProps(t, e, n))), this);
        }));
    const n = function (e, t, n) {
        return Km.fun(e) ? e(n, t) : e;
    };
    return ((t._getProps = n), t);
};
function zb(e, t, n) {
    const r = Km.fun(t) && t;
    r && !n && (n = []);
    const i = U.useMemo(() => (r || 3 == arguments.length ? Mb() : void 0), []),
        o = U.useRef(0),
        a = fy(),
        l = U.useMemo(
            () => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                    const n = Pb(e, t);
                    return o.current > 0 && !l.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                        ? Ob(e, t)
                        : new Promise((r) => {
                              (Cb(e, n),
                                  l.queue.push(() => {
                                      r(Ob(e, t));
                                  }),
                                  a());
                          });
                },
            }),
            [],
        ),
        s = U.useRef([...l.ctrls]),
        u = [],
        c = hy(e) || 0;
    function f(e, n) {
        for (let i = e; i < n; i++) {
            const e = s.current[i] || (s.current[i] = new xb(null, l.flush)),
                n = r ? r(i, e) : t[i];
            n && (u[i] = gb(n));
        }
    }
    (U.useMemo(() => {
        (Ym(s.current.slice(e, c), (e) => {
            (Wy(e, i), e.stop(!0));
        }),
            (s.current.length = e),
            f(c, e));
    }, [e]),
        U.useMemo(() => {
            f(0, Math.min(c, e));
        }, n));
    const d = s.current.map((e, t) => Pb(e, u[t])),
        p = U.useContext(Lb),
        h = hy(p),
        v = p !== h && Uy(p);
    (uy(() => {
        (o.current++, (l.ctrls = s.current));
        const { queue: e } = l;
        (e.length && ((l.queue = []), Ym(e, (e) => e())),
            Ym(s.current, (e, t) => {
                (null == i || i.add(e), v && e.start({ default: p }));
                const n = u[t];
                n && (Hy(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
            }));
    }),
        dy(() => () => {
            Ym(l.ctrls, (e) => e.stop(!0));
        }));
    const m = d.map((e) => ({ ...e }));
    return i ? [m, i] : m;
}
function Db(e, t) {
    const n = Km.fun(e),
        [[r], i] = zb(1, n ? e : [e], n ? [] : t);
    return n || 2 == arguments.length ? [r, i] : r;
}
var Vb = () => Mb(),
    Fb = () => U.useState(Vb)[0],
    Bb = (e, t) => {
        const n = (function (e) {
            const t = U.useRef(null);
            return (null === t.current && (t.current = e()), t.current);
        })(() => new pb(e, t));
        return (
            dy(() => () => {
                n.stop();
            }),
            n
        );
    };
function Ub(e, t, n) {
    const r = Km.fun(t) && t,
        {
            reset: i,
            sort: o,
            trail: a = 0,
            expires: l = !0,
            exitBeforeEnter: s = !1,
            onDestroyed: u,
            ref: c,
            config: f,
        } = r ? r() : t,
        d = U.useMemo(() => (r || 3 == arguments.length ? Mb() : void 0), []),
        p = Zm(e),
        h = [],
        v = U.useRef(null),
        m = i ? null : v.current;
    (uy(() => {
        v.current = h;
    }),
        dy(
            () => (
                Ym(h, (e) => {
                    (null == d || d.add(e.ctrl), (e.ctrl.ref = d));
                }),
                () => {
                    Ym(v.current, (e) => {
                        (e.expired && clearTimeout(e.expirationId), Wy(e.ctrl, d), e.ctrl.stop(!0));
                    });
                }
            ),
        ));
    const g = (function (e, { key: t, keys: n = t }, r) {
            if (null === n) {
                const t = new Set();
                return e.map((e) => {
                    const n = r && r.find((n) => n.item === e && 'leave' !== n.phase && !t.has(n));
                    return n ? (t.add(n), n.key) : $b++;
                });
            }
            return Km.und(n) ? e : Km.fun(n) ? e.map(n) : Zm(n);
        })(p, r ? r() : t, m),
        y = (i && v.current) || [];
    uy(() =>
        Ym(y, ({ ctrl: e, item: t, key: n }) => {
            (Wy(e, d), jy(u, t, n));
        }),
    );
    const b = [];
    if (
        (m &&
            Ym(m, (e, t) => {
                e.expired ? (clearTimeout(e.expirationId), y.push(e)) : ~(t = b[t] = g.indexOf(e.key)) && (h[t] = e);
            }),
        Ym(p, (e, t) => {
            h[t] || ((h[t] = { key: g[t], item: e, phase: 'mount', ctrl: new xb() }), (h[t].ctrl.item = e));
        }),
        b.length)
    ) {
        let e = -1;
        const { leave: n } = r ? r() : t;
        Ym(b, (t, r) => {
            const i = m[r];
            ~t ? ((e = h.indexOf(i)), (h[e] = { ...i, item: p[t] })) : n && h.splice(++e, 0, i);
        });
    }
    Km.fun(o) && h.sort((e, t) => o(e.item, t.item));
    let _ = -a;
    const w = fy(),
        k = zy(t),
        S = new Map(),
        x = U.useRef(new Map()),
        O = U.useRef(!1);
    Ym(h, (e, n) => {
        const i = e.key,
            o = e.phase,
            u = r ? r() : t;
        let d, p;
        const h = jy(u.delay || 0, i);
        if ('mount' == o) ((d = u.enter), (p = 'enter'));
        else {
            const e = g.indexOf(i) < 0;
            if ('leave' != o)
                if (e) ((d = u.leave), (p = 'leave'));
                else {
                    if (!(d = u.update)) return;
                    p = 'update';
                }
            else {
                if (e) return;
                ((d = u.enter), (p = 'enter'));
            }
        }
        if (((d = jy(d, e.item, n)), (d = Km.obj(d) ? Fy(d) : { to: d }), !d.config)) {
            const t = f || k.config;
            d.config = jy(t, e.item, n, p);
        }
        _ += a;
        const y = { ...k, delay: h + _, ref: c, immediate: u.immediate, reset: !1, ...d };
        if ('enter' == p && Km.und(y.from)) {
            const i = r ? r() : t,
                o = Km.und(i.initial) || m ? i.from : i.initial;
            y.from = jy(o, e.item, n);
        }
        const { onResolve: b } = y;
        y.onResolve = (e) => {
            jy(b, e);
            const t = v.current,
                n = t.find((e) => e.key === i);
            if (n && (!e.cancelled || 'update' == n.phase) && n.ctrl.idle) {
                const e = t.every((e) => e.ctrl.idle);
                if ('leave' == n.phase) {
                    const t = jy(l, n.item);
                    if (!1 !== t) {
                        const r = !0 === t ? 0 : t;
                        if (((n.expired = !0), !e && r > 0))
                            return void (r <= 2147483647 && (n.expirationId = setTimeout(w, r)));
                    }
                }
                e && t.some((e) => e.expired) && (x.current.delete(n), s && (O.current = !0), w());
            }
        };
        const E = Pb(e.ctrl, y);
        'leave' === p && s
            ? x.current.set(e, { phase: p, springs: E, payload: y })
            : S.set(e, { phase: p, springs: E, payload: y });
    });
    const E = U.useContext(Lb),
        P = hy(E),
        C = E !== P && Uy(E);
    (uy(() => {
        C &&
            Ym(h, (e) => {
                e.ctrl.start({ default: E });
            });
    }, [E]),
        Ym(S, (e, t) => {
            if (x.current.size) {
                const e = h.findIndex((e) => e.key === t.key);
                h.splice(e, 1);
            }
        }),
        uy(
            () => {
                Ym(x.current.size ? x.current : S, ({ phase: e, payload: t }, n) => {
                    const { ctrl: r } = n;
                    ((n.phase = e),
                        null == d || d.add(r),
                        C && 'enter' == e && r.start({ default: E }),
                        t &&
                            (Hy(r, t.ref),
                            (!r.ref && !d) || O.current ? (r.start(t), O.current && (O.current = !1)) : r.update(t)));
                });
            },
            i ? void 0 : n,
        ));
    const A = (e) =>
        U.createElement(
            U.Fragment,
            null,
            h.map((t, n) => {
                const { springs: r } = S.get(t) || t.ctrl,
                    i = e({ ...r }, t.item, t, n);
                return i && i.type
                    ? U.createElement(i.type, {
                          ...i.props,
                          key: Km.str(t.key) || Km.num(t.key) ? t.key : t.ctrl.id,
                          ref: i.ref,
                      })
                    : i;
            }),
        );
    return d ? [A, d] : A;
}
var $b = 1;
var Wb = class extends ab {
    constructor(e, t) {
        (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = Mg(...t)));
        const n = this._get(),
            r = Ey(n);
        gy(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        (Qm(t, this.get()) || (my(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && qb(this._active) && Gb(this));
    }
    _get() {
        const e = Km.arr(this.source) ? this.source.map(Fg) : Zm(Fg(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !qb(this._active) &&
            ((this.idle = !1),
            Ym(yy(this), (e) => {
                e.done = !1;
            }),
            qm.skipAnimation ? (Cm.batchedUpdates(() => this.advance()), Gb(this)) : dg.start(this));
    }
    _attach() {
        let e = 1;
        (Ym(Zm(this.source), (t) => {
            (Vg(t) && Hg(t, this), ib(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (Ym(Zm(this.source), (e) => {
            Vg(e) && qg(e, this);
        }),
            this._active.clear(),
            Gb(this));
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = Zm(this.source).reduce((e, t) => Math.max(e, (ib(t) ? t.priority : 0) + 1), 0));
    }
};
function Hb(e) {
    return !1 !== e.idle;
}
function qb(e) {
    return !e.size || Array.from(e).every(Hb);
}
function Gb(e) {
    e.idle ||
        ((e.idle = !0),
        Ym(yy(e), (e) => {
            e.done = !0;
        }),
        Ug(e, { type: 'idle', parent: e }));
}
qm.assign({ createStringInterpolator: ry, to: (e, t) => new Wb(e, t) });
var Kb = /^--/;
function Qb(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || Kb.test(e) || (Xb.hasOwnProperty(e) && Xb[e])
          ? ('' + t).trim()
          : t + 'px';
}
var Yb = {};
var Xb = {
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
    Zb = ['Webkit', 'Ms', 'Moz', 'O'];
Xb = Object.keys(Xb).reduce(
    (e, t) => (Zb.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    Xb,
);
var Jb = /^(matrix|translate|scale|rotate|skew)/,
    e_ = /^(translate)/,
    t_ = /^(rotate|skew)/,
    n_ = (e, t) => (Km.num(e) && 0 !== e ? e + t : e),
    r_ = (e, t) => (Km.arr(e) ? e.every((e) => r_(e, t)) : Km.num(e) ? e === t : parseFloat(e) === t),
    i_ = class extends Sy {
        constructor({ x: e, y: t, z: n, ...r }) {
            const i = [],
                o = [];
            ((e || t || n) &&
                (i.push([e || 0, t || 0, n || 0]),
                o.push((e) => [`translate3d(${e.map((e) => n_(e, 'px')).join(',')})`, r_(e, 0)])),
                Xm(r, (e, t) => {
                    if ('transform' === t) (i.push([e || '']), o.push((e) => [e, '' === e]));
                    else if (Jb.test(t)) {
                        if ((delete r[t], Km.und(e))) return;
                        const n = e_.test(t) ? 'px' : t_.test(t) ? 'deg' : '';
                        (i.push(Zm(e)),
                            o.push(
                                'rotate3d' === t
                                    ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${n_(i, n)})`, r_(i, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => n_(e, n)).join(',')})`,
                                          r_(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                i.length && (r.transform = new o_(i, o)),
                super(r));
        }
    },
    o_ = class extends $g {
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
                Ym(this.inputs, (n, r) => {
                    const i = Fg(n[0]),
                        [o, a] = this.transforms[r](Km.arr(i) ? i : n.map(Fg));
                    ((e += ' ' + o), (t = t && a));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && Ym(this.inputs, (e) => Ym(e, (e) => Vg(e) && Hg(e, this)));
        }
        observerRemoved(e) {
            0 == e && Ym(this.inputs, (e) => Ym(e, (e) => Vg(e) && qg(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), Ug(this, e));
        }
    };
qm.assign({ batchedUpdates: Uf.unstable_batchedUpdates, createStringInterpolator: ry, colors: gg });
var a_ = Ty(
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
                { style: r, children: i, scrollTop: o, scrollLeft: a, viewBox: l, ...s } = t,
                u = Object.values(s),
                c = Object.keys(s).map((t) =>
                    n || e.hasAttribute(t) ? t : Yb[t] || (Yb[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                );
            void 0 !== i && (e.textContent = i);
            for (const f in r)
                if (r.hasOwnProperty(f)) {
                    const t = Qb(f, r[f]);
                    Kb.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                }
            (c.forEach((t, n) => {
                e.setAttribute(t, u[n]);
            }),
                void 0 !== o && (e.scrollTop = o),
                void 0 !== a && (e.scrollLeft = a),
                void 0 !== l && e.setAttribute('viewBox', l));
        },
        createAnimatedStyle: (e) => new i_(e),
        getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
    },
).animated;
function l_(e, t) {
    (void 0 === t && (t = 'Illegal state'),
        e ||
            (function (e) {
                throw new Error('[mobx-utils] ' + e);
            })(t));
}
var s_,
    u_ = function (e) {
        return e && e !== Object.prototype && Object.getOwnPropertyNames(e).concat(u_(Object.getPrototypeOf(e)) || []);
    },
    c_ = function (e) {
        return (function (e) {
            var t = u_(e);
            return t.filter(function (e, n) {
                return t.indexOf(e) === n;
            });
        })(e).filter(function (e) {
            return 'constructor' !== e && !~e.indexOf('__');
        });
    },
    f_ = 'pending',
    d_ = 'fulfilled',
    p_ = 'rejected';
function h_(e) {
    switch (this.state) {
        case f_:
            return e.pending && e.pending(this.value);
        case p_:
            return e.rejected && e.rejected(this.value);
        case d_:
            return e.fulfilled ? e.fulfilled(this.value) : this.value;
    }
}
function v_(e, t) {
    if (
        (l_(arguments.length <= 2, 'fromPromise expects up to two arguments'),
        l_(
            'function' == typeof e || ('object' == typeof e && e && 'function' == typeof e.then),
            'Please pass a promise or function to fromPromise',
        ),
        !0 === e.isPromiseBasedObservable)
    )
        return e;
    'function' == typeof e && (e = new Promise(e));
    var n = e;
    (e.then(
        Ch('observableFromPromise-resolve', function (e) {
            ((n.value = e), (n.state = d_));
        }),
        Ch('observableFromPromise-reject', function (e) {
            ((n.value = e), (n.state = p_));
        }),
    ),
        (n.isPromiseBasedObservable = !0),
        (n.case = h_));
    var r = !t || (t.state !== d_ && t.state !== f_) ? void 0 : t.value;
    return (Uh(n, { value: r, state: f_ }, {}, { deep: !1 }), n);
}
(((s_ = v_ || (v_ = {})).reject = Ch('fromPromise.reject', function (e) {
    var t = s_(Promise.reject(e));
    return ((t.state = p_), (t.value = e), t);
})),
    (s_.resolve = Ch('fromPromise.resolve', function (e) {
        void 0 === e && (e = void 0);
        var t = s_(Promise.resolve(e));
        return ((t.state = d_), (t.value = e), t);
    })));
var m_ = function (e, t, n, r) {
    var i,
        o = arguments.length,
        a = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
    else for (var l = e.length - 1; l >= 0; l--) (i = e[l]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
    return (o > 3 && a && Object.defineProperty(t, n, a), a);
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
            cv(this),
            (function (e) {
                Ip(e.name, !1, e, this, void 0);
            })(function () {
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
        m_([xp.ref], e.prototype, 'current', void 0),
        m_([Ch.bound], e.prototype, 'next', null),
        m_([Ch.bound], e.prototype, 'complete', null),
        m_([Ch.bound], e.prototype, 'error', null));
})();
var g_ = function () {
        return (
            (g_ =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            g_.apply(this, arguments)
        );
    },
    y_ = function (e, t, n, r) {
        var i,
            o = arguments.length,
            a = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
            for (var l = e.length - 1; l >= 0; l--)
                (i = e[l]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return (o > 3 && a && Object.defineProperty(t, n, a), a);
    },
    b_ = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
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
            cv(this),
            l_(Bv(e), 'createViewModel expects an observable object'));
        var n = c_(this);
        c_(e).forEach(function (r) {
            var i;
            if (!n.includes(r) && r !== Ld && '__mobxDidRunLazyInitializers' !== r) {
                if (
                    (l_(
                        -1 === b_.indexOf(r),
                        'The propertyname ' + r + ' is reserved and cannot be used with viewModels',
                    ),
                    Zh(e, r))
                ) {
                    var o = tm(e, r),
                        a = o.derivation.bind(t),
                        l = null === (i = o.setter_) || void 0 === i ? void 0 : i.bind(t);
                    t.localComputedValues.set(r, Cp(a, { set: l }));
                }
                var s = Object.getOwnPropertyDescriptor(e, r),
                    u = s ? { enumerable: s.enumerable } : {};
                Object.defineProperty(
                    t,
                    r,
                    g_(g_({}, u), {
                        configurable: !0,
                        get: function () {
                            return Zh(e, r)
                                ? t.localComputedValues.get(r).get()
                                : t.isPropertyDirty(r)
                                  ? t.localValues.get(r)
                                  : t.model[r];
                        },
                        set: Ch(function (n) {
                            Zh(e, r)
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
                Bv(e)
                    ? e[Ld].keys_()
                    : Nv(e) || Lv(e)
                      ? Array.from(e.keys())
                      : xv(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void Gf(5)).forEach(function (e) {
                    var n = t.localValues.get(e),
                        r = t.model[e];
                    xv(r) ? r.replace(n) : Nv(r) ? (r.clear(), r.merge(n)) : Xh(n) || (t.model[e] = n);
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
        y_([Cp], e.prototype, 'isDirty', null),
        y_([Cp], e.prototype, 'changedValues', null),
        y_([Ch.bound], e.prototype, 'submit', null),
        y_([Ch.bound], e.prototype, 'reset', null),
        y_([Ch.bound], e.prototype, 'resetProperty', null));
})();
var __ = (function () {
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
        var i = void 0 === r ? {} : r,
            o = i.name,
            a = void 0 === o ? 'ogm' + ((1e3 * Math.random()) | 0) : o,
            l = i.keyToName,
            s =
                void 0 === l
                    ? function (e) {
                          return '' + e;
                      }
                    : l,
            u = e.call(this) || this;
        (Object.defineProperty(u, '_base', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(u, '_ogmInfoKey', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(u, '_groupBy', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(u, '_keyToName', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(u, '_disposeBaseObserver', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
            }),
            (u._keyToName = s),
            (u._groupBy = n),
            (u._ogmInfoKey = Symbol('ogmInfo' + a)),
            (u._base = t));
        for (var c = 0; c < t.length; c++) u._addItem(t[c]);
        return (
            (u._disposeBaseObserver = ev(u._base, function (e) {
                if ('splice' === e.type)
                    tv(function () {
                        for (var t = 0, n = e.removed; t < n.length; t++) {
                            var r = n[t];
                            u._removeItem(r);
                        }
                        for (var i = 0, o = e.added; i < o.length; i++) {
                            var a = o[i];
                            u._addItem(a);
                        }
                    });
                else {
                    if ('update' !== e.type) throw new Error('illegal state');
                    tv(function () {
                        (u._removeItem(e.oldValue), u._addItem(e.newValue));
                    });
                }
            })),
            u
        );
    }
    (__(t, e),
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
                    i = {
                        groupByValue: n,
                        groupArrIndex: r.length,
                        reaction: Rh(
                            function () {
                                return t._groupBy(e);
                            },
                            function (n, r) {
                                var i = e[t._ogmInfoKey];
                                t._removeFromGroupArr(i.groupByValue, i.groupArrIndex);
                                var o = t._getGroupArr(n),
                                    a = o.length;
                                (o.push(e), (i.groupByValue = n), (i.groupArrIndex = a));
                            },
                        ),
                    };
                (Object.defineProperty(e, this._ogmInfoKey, { configurable: !0, enumerable: !1, value: i }), r.push(e));
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
})(Tv);
var w_ = (function () {
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
                        var i = new Map();
                        (n.set(this.args[r], i), (n = i));
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
    k_ = (function () {
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
                    return (this.last && (this.last.isDisposed = !0), (this.last = new w_(this.store, e)));
                },
            }),
            e
        );
    })(),
    S_ = function () {
        return (
            (S_ =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            S_.apply(this, arguments)
        );
    };
function x_(e, t) {
    if ((void 0 === t && (t = !1), Th(e))) throw new Error("computedFn shouldn't be used on actions");
    var n = !1,
        r = 0,
        i = 'boolean' == typeof t ? { keepAlive: t } : t,
        o = new k_();
    return function () {
        for (var t = this, a = [], l = 0; l < arguments.length; l++) a[l] = arguments[l];
        var s,
            u = o.entry(a);
        if (u.exists()) return u.get().get();
        if (!i.keepAlive && null === ah.trackingDerivation)
            return (
                !n &&
                    ah.computedRequiresReaction &&
                    (console.warn(
                        "invoking a computedFn from outside an reactive context won't be memoized, unless keepAlive is set",
                    ),
                    (n = !0)),
                e.apply(this, a)
            );
        var c = Cp(
            function () {
                return (s = e.apply(t, a));
            },
            S_(S_({}, i), { name: 'computedFn(' + (i.name || e.name) + '#' + ++r + ')' }),
        );
        return (
            u.set(c),
            i.keepAlive ||
                Mh(c, function () {
                    (o.entry(a).delete(),
                        i.onCleanup &&
                            i.onCleanup.apply(
                                i,
                                (function () {
                                    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                                    var r = Array(e),
                                        i = 0;
                                    for (t = 0; t < n; t++)
                                        for (var o = arguments[t], a = 0, l = o.length; a < l; a++, i++) r[i] = o[a];
                                    return r;
                                })([s], a),
                            ),
                        (s = void 0));
                }),
            c.get()
        );
    };
}
if (!U.useState) throw new Error('mobx-react-lite requires React with Hooks support');
if (!cv) throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
function O_(e) {
    e();
}
function E_(e) {
    return $h(em(e, t));
    var t;
}
var P_ = new ((function () {
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
                        (t.registrations.forEach(function (r, i) {
                            n - r.registeredAt >= e && (t.finalize(r.value), t.registrations.delete(i));
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
    C_ = { exports: {} },
    A_ = {},
    T_ = U;
var N_ =
        'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    j_ = T_.useState,
    R_ = T_.useEffect,
    L_ = T_.useLayoutEffect,
    I_ = T_.useDebugValue;
function M_(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !N_(e, n);
    } catch (r) {
        return !0;
    }
}
var z_ =
    'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
              return t();
          }
        : function (e, t) {
              var n = t(),
                  r = j_({ inst: { value: n, getSnapshot: t } }),
                  i = r[0].inst,
                  o = r[1];
              return (
                  L_(
                      function () {
                          ((i.value = n), (i.getSnapshot = t), M_(i) && o({ inst: i }));
                      },
                      [e, n, t],
                  ),
                  R_(
                      function () {
                          return (
                              M_(i) && o({ inst: i }),
                              e(function () {
                                  M_(i) && o({ inst: i });
                              })
                          );
                      },
                      [e],
                  ),
                  I_(n),
                  n
              );
          };
((A_.useSyncExternalStore = void 0 !== T_.useSyncExternalStore ? T_.useSyncExternalStore : z_), (C_.exports = A_));
var D_,
    V_,
    F_ = C_.exports;
function B_(e) {
    e.reaction = new hh('observer'.concat(e.name), function () {
        var t;
        ((e.stateVersion = Symbol()), null === (t = e.onStoreChange) || void 0 === t || t.call(e));
    });
}
var U_ = 'function' == typeof Symbol && Symbol.for,
    $_ =
        null !==
            (V_ =
                null === (D_ = Object.getOwnPropertyDescriptor(function () {}, 'name')) || void 0 === D_
                    ? void 0
                    : D_.configurable) &&
        void 0 !== V_ &&
        V_,
    W_ = U_
        ? Symbol.for('react.forward_ref')
        : 'function' == typeof U.forwardRef &&
          U.forwardRef(function (e) {
              return null;
          }).$$typeof,
    H_ = U_
        ? Symbol.for('react.memo')
        : 'function' == typeof U.memo &&
          U.memo(function (e) {
              return null;
          }).$$typeof;
function q_(e, t) {
    if (H_ && e.$$typeof === H_)
        throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
        );
    var n = (void 0, !1),
        r = e,
        i = e.displayName || e.name;
    if (W_ && e.$$typeof === W_ && ((n = !0), 'function' != typeof (r = e.render)))
        throw new Error('[mobx-react-lite] `render` property of ForwardRef was not a function');
    var o = function (e, t) {
        return (function (e, t) {
            void 0 === t && (t = 'observed');
            var n = $.useRef(null);
            if (!n.current) {
                var r = {
                    reaction: null,
                    onStoreChange: null,
                    stateVersion: Symbol(),
                    name: t,
                    subscribe: function (e) {
                        return (
                            P_.unregister(r),
                            (r.onStoreChange = e),
                            r.reaction || (B_(r), (r.stateVersion = Symbol())),
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
            var i,
                o,
                a = n.current;
            if (
                (a.reaction || (B_(a), P_.register(n, a, a)),
                $.useDebugValue(a.reaction, E_),
                F_.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot),
                a.reaction.track(function () {
                    try {
                        i = e();
                    } catch (t) {
                        o = t;
                    }
                }),
                o)
            )
                throw o;
            return i;
        })(function () {
            return r(e, t);
        }, i);
    };
    return (
        (o.displayName = e.displayName),
        $_ && Object.defineProperty(o, 'name', { value: e.name, writable: !0, configurable: !0 }),
        e.contextTypes && (o.contextTypes = e.contextTypes),
        n && (o = U.forwardRef(o)),
        (function (e, t) {
            Object.keys(e).forEach(function (n) {
                K_[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
            });
        })(e, (o = U.memo(o))),
        o
    );
}
var G_,
    K_ = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function Q_(e) {
    var t,
        n,
        r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
        if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = Q_(e[t])) && (r && (r += ' '), (r += n));
        else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
}
((G_ = Uf.unstable_batchedUpdates) || (G_ = O_), Bh({ reactionScheduler: G_ }), P_.finalizeAllImmediately);
const Y_ = (e) => ('boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e),
    X_ = function () {
        for (var e, t, n = 0, r = ''; n < arguments.length; )
            (e = arguments[n++]) && (t = Q_(e)) && (r && (r += ' '), (r += t));
        return r;
    },
    Z_ = (e, t) => (n) => {
        var r;
        if (null == (null == t ? void 0 : t.variants))
            return X_(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        const { variants: i, defaultVariants: o } = t,
            a = Object.keys(i).map((e) => {
                const t = null == n ? void 0 : n[e],
                    r = null == o ? void 0 : o[e];
                if (null === t) return null;
                const a = Y_(t) || Y_(r);
                return i[e][a];
            }),
            l =
                n &&
                Object.entries(n).reduce((e, t) => {
                    let [n, r] = t;
                    return (void 0 === r || (e[n] = r), e);
                }, {}),
            s =
                null == t || null === (r = t.compoundVariants) || void 0 === r
                    ? void 0
                    : r.reduce((e, t) => {
                          let { class: n, className: r, ...i } = t;
                          return Object.entries(i).every((e) => {
                              let [t, n] = e;
                              return Array.isArray(n) ? n.includes({ ...o, ...l }[t]) : { ...o, ...l }[t] === n;
                          })
                              ? [...e, n, r]
                              : e;
                      }, []);
        return X_(e, a, s, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
    };
var J_ = (function () {
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
                        var i = r[n];
                        e.call(t, i[1], i[0]);
                    }
                }),
                t
            );
        })();
    })(),
    ew = 'undefined' != typeof window && 'undefined' != typeof document && window.document === document,
    tw =
        'undefined' != typeof global && global.Math === Math
            ? global
            : 'undefined' != typeof self && self.Math === Math
              ? self
              : 'undefined' != typeof window && window.Math === Math
                ? window
                : Function('return this')(),
    nw =
        'function' == typeof requestAnimationFrame
            ? requestAnimationFrame.bind(tw)
            : function (e) {
                  return setTimeout(function () {
                      return e(Date.now());
                  }, 1e3 / 60);
              };
var rw = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
    iw = 'undefined' != typeof MutationObserver,
    ow = (function () {
        function e() {
            ((this.connected_ = !1),
                (this.mutationEventsAdded_ = !1),
                (this.mutationsObserver_ = null),
                (this.observers_ = []),
                (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                (this.refresh = (function (e, t) {
                    var n = !1,
                        r = !1,
                        i = 0;
                    function o() {
                        (n && ((n = !1), e()), r && l());
                    }
                    function a() {
                        nw(o);
                    }
                    function l() {
                        var e = Date.now();
                        if (n) {
                            if (e - i < 2) return;
                            r = !0;
                        } else ((n = !0), (r = !1), setTimeout(a, t));
                        i = e;
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
                ew &&
                    !this.connected_ &&
                    (document.addEventListener('transitionend', this.onTransitionEnd_),
                    window.addEventListener('resize', this.refresh),
                    iw
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
                ew &&
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
                rw.some(function (e) {
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
    aw = function (e, t) {
        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var i = r[n];
            Object.defineProperty(e, i, { value: t[i], enumerable: !1, writable: !1, configurable: !0 });
        }
        return e;
    },
    lw = function (e) {
        return (e && e.ownerDocument && e.ownerDocument.defaultView) || tw;
    },
    sw = hw(0, 0, 0, 0);
function uw(e) {
    return parseFloat(e) || 0;
}
function cw(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce(function (t, n) {
        return t + uw(e['border-' + n + '-width']);
    }, 0);
}
function fw(e) {
    var t = e.offsetWidth,
        n = e.offsetHeight;
    if (!t && !n) return sw;
    var r = lw(e).getComputedStyle(e),
        i = (function (e) {
            for (var t = {}, n = 0, r = ['top', 'right', 'bottom', 'left']; n < r.length; n++) {
                var i = r[n],
                    o = e['padding-' + i];
                t[i] = uw(o);
            }
            return t;
        })(r),
        o = i.left + i.right,
        a = i.top + i.bottom,
        l = uw(r.width),
        s = uw(r.height);
    if (
        ('border-box' === r.boxSizing &&
            (Math.round(l + o) !== t && (l -= cw(r, 'left', 'right') + o),
            Math.round(s + a) !== n && (s -= cw(r, 'top', 'bottom') + a)),
        !(function (e) {
            return e === lw(e).document.documentElement;
        })(e))
    ) {
        var u = Math.round(l + o) - t,
            c = Math.round(s + a) - n;
        (1 !== Math.abs(u) && (l -= u), 1 !== Math.abs(c) && (s -= c));
    }
    return hw(i.left, i.top, l, s);
}
var dw =
    'undefined' != typeof SVGGraphicsElement
        ? function (e) {
              return e instanceof lw(e).SVGGraphicsElement;
          }
        : function (e) {
              return e instanceof lw(e).SVGElement && 'function' == typeof e.getBBox;
          };
function pw(e) {
    return ew
        ? dw(e)
            ? (function (e) {
                  var t = e.getBBox();
                  return hw(0, 0, t.width, t.height);
              })(e)
            : fw(e)
        : sw;
}
function hw(e, t, n, r) {
    return { x: e, y: t, width: n, height: r };
}
var vw = (function () {
        function e(e) {
            ((this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = hw(0, 0, 0, 0)),
                (this.target = e));
        }
        return (
            (e.prototype.isActive = function () {
                var e = pw(this.target);
                return ((this.contentRect_ = e), e.width !== this.broadcastWidth || e.height !== this.broadcastHeight);
            }),
            (e.prototype.broadcastRect = function () {
                var e = this.contentRect_;
                return ((this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e);
            }),
            e
        );
    })(),
    mw = (function () {
        return function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                l,
                s,
                u =
                    ((r = (n = t).x),
                    (i = n.y),
                    (o = n.width),
                    (a = n.height),
                    (l = 'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
                    (s = Object.create(l.prototype)),
                    aw(s, { x: r, y: i, width: o, height: a, top: i, right: r + o, bottom: a + i, left: r }),
                    s);
            aw(this, { target: e, contentRect: u });
        };
    })(),
    gw = (function () {
        function e(e, t, n) {
            if (((this.activeObservations_ = []), (this.observations_ = new J_()), 'function' != typeof e))
                throw new TypeError('The callback provided as parameter 1 is not a function.');
            ((this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = n));
        }
        return (
            (e.prototype.observe = function (e) {
                if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                if ('undefined' != typeof Element && Element instanceof Object) {
                    if (!(e instanceof lw(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var t = this.observations_;
                    t.has(e) || (t.set(e, new vw(e)), this.controller_.addObserver(this), this.controller_.refresh());
                }
            }),
            (e.prototype.unobserve = function (e) {
                if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                if ('undefined' != typeof Element && Element instanceof Object) {
                    if (!(e instanceof lw(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
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
                            return new mw(e.target, e.broadcastRect());
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
    yw = 'undefined' != typeof WeakMap ? new WeakMap() : new J_(),
    bw = (function () {
        return function e(t) {
            if (!(this instanceof e)) throw new TypeError('Cannot call a class as a function.');
            if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
            var n = ow.getInstance(),
                r = new gw(t, n, this);
            yw.set(this, r);
        };
    })();
['observe', 'unobserve', 'disconnect'].forEach(function (e) {
    bw.prototype[e] = function () {
        var t;
        return (t = yw.get(this))[e].apply(t, arguments);
    };
});
var _w = void 0 !== tw.ResizeObserver ? tw.ResizeObserver : bw,
    ww = {};
class kw extends Error {
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
const Sw = r(
    Object.freeze(
        Object.defineProperty({ __proto__: null, TypeGuardError: kw }, Symbol.toStringTag, { value: 'Module' }),
    ),
);
Object.defineProperty(ww, '__esModule', { value: !0 });
var xw = (ww._assertGuard = void 0);
const Ow = Sw;
xw = ww._assertGuard = (e, t, n) => {
    if (!0 === e) throw n ? n(t) : new Ow.TypeGuardError(t);
    return !1;
};
var Ew = /^--/;
function Pw(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || Ew.test(e) || (Aw.hasOwnProperty(e) && Aw[e])
          ? ('' + t).trim()
          : t + 'px';
}
var Cw = {};
var Aw = {
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
    Tw = ['Webkit', 'Ms', 'Moz', 'O'];
Aw = Object.keys(Aw).reduce(
    (e, t) => (Tw.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    Aw,
);
var Nw = /^(matrix|translate|scale|rotate|skew)/,
    jw = /^(translate)/,
    Rw = /^(rotate|skew)/,
    Lw = (e, t) => (Km.num(e) && 0 !== e ? e + t : e),
    Iw = (e, t) => (Km.arr(e) ? e.every((e) => Iw(e, t)) : Km.num(e) ? e === t : parseFloat(e) === t),
    Mw = class extends Sy {
        constructor({ x: e, y: t, z: n, ...r }) {
            const i = [],
                o = [];
            ((e || t || n) &&
                (i.push([e || 0, t || 0, n || 0]),
                o.push((e) => [`translate3d(${e.map((e) => Lw(e, 'px')).join(',')})`, Iw(e, 0)])),
                Xm(r, (e, t) => {
                    if ('transform' === t) (i.push([e || '']), o.push((e) => [e, '' === e]));
                    else if (Nw.test(t)) {
                        if ((delete r[t], Km.und(e))) return;
                        const n = jw.test(t) ? 'px' : Rw.test(t) ? 'deg' : '';
                        (i.push(Zm(e)),
                            o.push(
                                'rotate3d' === t
                                    ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${Lw(i, n)})`, Iw(i, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => Lw(e, n)).join(',')})`,
                                          Iw(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                i.length && (r.transform = new zw(i, o)),
                super(r));
        }
    },
    zw = class extends $g {
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
                Ym(this.inputs, (n, r) => {
                    const i = Fg(n[0]),
                        [o, a] = this.transforms[r](Km.arr(i) ? i : n.map(Fg));
                    ((e += ' ' + o), (t = t && a));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && Ym(this.inputs, (e) => Ym(e, (e) => Vg(e) && Hg(e, this)));
        }
        observerRemoved(e) {
            0 == e && Ym(this.inputs, (e) => Ym(e, (e) => Vg(e) && qg(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), Ug(this, e));
        }
    };
qm.assign({ batchedUpdates: Uf.unstable_batchedUpdates, createStringInterpolator: ry, colors: gg });
var Dw = Ty(
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
                    { className: r, style: i, children: o, scrollTop: a, scrollLeft: l, viewBox: s, ...u } = t,
                    c = Object.values(u),
                    f = Object.keys(u).map((t) =>
                        n || e.hasAttribute(t)
                            ? t
                            : Cw[t] || (Cw[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                    );
                void 0 !== o && (e.textContent = o);
                for (const d in i)
                    if (i.hasOwnProperty(d)) {
                        const t = Pw(d, i[d]);
                        Ew.test(d) ? e.style.setProperty(d, t) : (e.style[d] = t);
                    }
                (f.forEach((t, n) => {
                    e.setAttribute(t, c[n]);
                }),
                    void 0 !== r && (e.className = r),
                    void 0 !== a && (e.scrollTop = a),
                    void 0 !== l && (e.scrollLeft = l),
                    void 0 !== s && e.setAttribute('viewBox', s));
            },
            createAnimatedStyle: (e) => new Mw(e),
            getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
        },
    ).animated,
    Vw = /^--/;
function Fw(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || Vw.test(e) || (Uw.hasOwnProperty(e) && Uw[e])
          ? ('' + t).trim()
          : t + 'px';
}
var Bw = {};
var Uw = {
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
    $w = ['Webkit', 'Ms', 'Moz', 'O'];
Uw = Object.keys(Uw).reduce(
    (e, t) => ($w.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    Uw,
);
var Ww = /^(matrix|translate|scale|rotate|skew)/,
    Hw = /^(translate)/,
    qw = /^(rotate|skew)/,
    Gw = (e, t) => (Km.num(e) && 0 !== e ? e + t : e),
    Kw = (e, t) => (Km.arr(e) ? e.every((e) => Kw(e, t)) : Km.num(e) ? e === t : parseFloat(e) === t),
    Qw = class extends Sy {
        constructor({ x: e, y: t, z: n, ...r }) {
            const i = [],
                o = [];
            ((e || t || n) &&
                (i.push([e || 0, t || 0, n || 0]),
                o.push((e) => [`translate3d(${e.map((e) => Gw(e, 'px')).join(',')})`, Kw(e, 0)])),
                Xm(r, (e, t) => {
                    if ('transform' === t) (i.push([e || '']), o.push((e) => [e, '' === e]));
                    else if (Ww.test(t)) {
                        if ((delete r[t], Km.und(e))) return;
                        const n = Hw.test(t) ? 'px' : qw.test(t) ? 'deg' : '';
                        (i.push(Zm(e)),
                            o.push(
                                'rotate3d' === t
                                    ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${Gw(i, n)})`, Kw(i, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => Gw(e, n)).join(',')})`,
                                          Kw(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                i.length && (r.transform = new Yw(i, o)),
                super(r));
        }
    },
    Yw = class extends $g {
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
                Ym(this.inputs, (n, r) => {
                    const i = Fg(n[0]),
                        [o, a] = this.transforms[r](Km.arr(i) ? i : n.map(Fg));
                    ((e += ' ' + o), (t = t && a));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && Ym(this.inputs, (e) => Ym(e, (e) => Vg(e) && Hg(e, this)));
        }
        observerRemoved(e) {
            0 == e && Ym(this.inputs, (e) => Ym(e, (e) => Vg(e) && qg(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), Ug(this, e));
        }
    };
qm.assign({ batchedUpdates: Uf.unstable_batchedUpdates, createStringInterpolator: ry, colors: gg });
var Xw = Ty(
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
                { className: r, style: i, children: o, scrollTop: a, scrollLeft: l, viewBox: s, ...u } = t,
                c = Object.values(u),
                f = Object.keys(u).map((t) =>
                    n || e.hasAttribute(t) ? t : Bw[t] || (Bw[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                );
            void 0 !== o && (e.textContent = o);
            for (const d in i)
                if (i.hasOwnProperty(d)) {
                    const t = Fw(d, i[d]);
                    Vw.test(d) ? e.style.setProperty(d, t) : (e.style[d] = t);
                }
            (f.forEach((t, n) => {
                e.setAttribute(t, c[n]);
            }),
                void 0 !== r && (e.className = r),
                void 0 !== a && (e.scrollTop = a),
                void 0 !== l && (e.scrollLeft = l),
                void 0 !== s && e.setAttribute('viewBox', s));
        },
        createAnimatedStyle: (e) => new Qw(e),
        getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
    },
).animated;
export {
    xb as C,
    $ as R,
    xw as _,
    ye as a,
    _e as b,
    je as c,
    be as d,
    qf as e,
    Ch as f,
    x_ as g,
    Dd as h,
    Le as i,
    X as j,
    Z_ as k,
    Em as l,
    Db as m,
    a_ as n,
    xp as o,
    _w as p,
    q_ as q,
    U as r,
    zb as s,
    Dw as t,
    Xp as u,
    Ub as v,
    Fb as w,
    Xw as x,
    Bb as y,
};
