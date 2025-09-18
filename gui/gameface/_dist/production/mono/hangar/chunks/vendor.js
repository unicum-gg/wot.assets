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
    a = {},
    o = { exports: {} },
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
        a = null,
        o = null;
    if (null != t)
        for (r in (void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (a = '' + t.key), t))
            C.call(t, r) && !T.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (1 === l) i.children = n;
    else if (1 < l) {
        for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
        i.children = u;
    }
    if (e && e.defaultProps) for (r in (l = e.defaultProps)) void 0 === i[r] && (i[r] = l[r]);
    return { $$typeof: s, type: e, key: a, ref: o, props: i, _owner: A.current };
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
    var a = typeof e;
    ('undefined' !== a && 'boolean' !== a) || (e = null);
    var o = !1;
    if (null === e) o = !0;
    else
        switch (a) {
            case 'string':
            case 'number':
                o = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case s:
                    case u:
                        o = !0;
                }
        }
    if (o)
        return (
            (i = i((o = e))),
            (e = '' === r ? '.' + L(o, 0) : r),
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
                      })(i, n + (!i.key || (o && o.key === i.key) ? '' : ('' + i.key).replace(R, '$&/') + '/') + e)),
                  t.push(i)),
            1
        );
    if (((o = 0), (r = '' === r ? '.' : r + ':'), P(e)))
        for (var l = 0; l < e.length; l++) {
            var c = r + L((a = e[l]), l);
            o += I(a, t, n, c, i);
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
        for (e = c.call(e), l = 0; !(a = e.next()).done; ) o += I((a = a.value), t, n, (c = r + L(a, l++)), i);
    else if ('object' === a)
        throw (
            (t = String(e)),
            Error(
                'Objects are not valid as a React child (found: ' +
                    ('[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
                    '). If you meant to render a collection of children, use an array instead.',
            )
        );
    return o;
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
            a = e.ref,
            o = e._owner;
        if (null != t) {
            if (
                (void 0 !== t.ref && ((a = t.ref), (o = A.current)),
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
        return { $$typeof: s, type: e.type, key: i, ref: a, props: r, _owner: o };
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
    (o.exports = l));
var U = o.exports;
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
    q = Symbol.for('react.element'),
    H = Symbol.for('react.fragment'),
    G = Object.prototype.hasOwnProperty,
    K = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Q = { key: !0, ref: !0, __self: !0, __source: !0 };
function Y(e, t, n) {
    var r,
        i = {},
        a = null,
        o = null;
    for (r in (void 0 !== n && (a = '' + n), void 0 !== t.key && (a = '' + t.key), void 0 !== t.ref && (o = t.ref), t))
        G.call(t, r) && !Q.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
    return { $$typeof: q, type: e, key: a, ref: o, props: i, _owner: K.current };
}
((a.Fragment = H), (a.jsx = Y), (a.jsxs = Y), (i.exports = a));
var X = i.exports,
    J = function (e, t) {
        return (J =
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
    (J(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())));
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
        a,
        o = {
            label: 0,
            sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
            },
            trys: [],
            ops: [],
        };
    return (
        (a = { next: l(0), throw: l(1), return: l(2) }),
        'function' == typeof Symbol &&
            (a[Symbol.iterator] = function () {
                return this;
            }),
        a
    );
    function l(l) {
        return function (s) {
            return (function (l) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; a && ((a = 0), l[0] && (o = 0)), o; )
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
                                return (o.label++, { value: l[1], done: !1 });
                            case 5:
                                (o.label++, (r = l[1]), (l = [0]));
                                continue;
                            case 7:
                                ((l = o.ops.pop()), o.trys.pop());
                                continue;
                            default:
                                if (
                                    !((i = o.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== l[0] && 2 !== l[0]))
                                ) {
                                    o = 0;
                                    continue;
                                }
                                if (3 === l[0] && (!i || (l[1] > i[0] && l[1] < i[3]))) {
                                    o.label = l[1];
                                    break;
                                }
                                if (6 === l[0] && o.label < i[1]) {
                                    ((o.label = i[1]), (i = l));
                                    break;
                                }
                                if (i && o.label < i[2]) {
                                    ((o.label = i[2]), o.ops.push(l));
                                    break;
                                }
                                (i[2] && o.ops.pop(), o.trys.pop());
                                continue;
                        }
                        l = t.call(e, o);
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
        for (var r, i = 0, a = t.length; i < a; i++)
            (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
    return e.concat(r || Array.prototype.slice.call(t));
}
'function' == typeof SuppressedError && SuppressedError;
var re = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (Z(t, e), t);
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
            return (Z(t, e), t);
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
            Z(t, e),
            (t.assert = function (e, n, r, i, a) {
                if (!e) throw new t(n, r, i, a);
                return e;
            }),
            t
        );
    })(re),
    ae = (function (e) {
        function t(t, n, r) {
            var i = t.toString(),
                a = n.map(function (e) {
                    return e.name.toString();
                });
            a.push(i);
            var o = a.join(' -> '),
                l = "Could not resolve '".concat(i, "'.");
            return (
                r && (l += ' '.concat(r)),
                (l += '\n\n'),
                (l += 'Resolution path: '.concat(o)),
                e.call(this, l) || this
            );
        }
        return (Z(t, e), t);
    })(re),
    oe = (function (e) {
        function t(t, n) {
            var r = t.toString(),
                i = "Could not register '".concat(r, "'.");
            return (n && (i += ' '.concat(n)), e.call(this, i) || this);
        }
        return (Z(t, e), t);
    })(re),
    le = { PROXY: 'PROXY', CLASSIC: 'CLASSIC' },
    se = { SINGLETON: 'SINGLETON', TRANSIENT: 'TRANSIENT', SCOPED: 'SCOPED' };
function ue(e) {
    var t = e.length,
        n = 0,
        r = 'EOF',
        i = '',
        a = 0,
        o = 0,
        l = 0;
    return {
        next: function (e) {
            void 0 === e && (e = 0);
            return ((a = e), s(), d());
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
                        return (n++, o++, (r = s));
                    case ')':
                        return (n++, l++, (r = s));
                    case '*':
                    case ',':
                        return (n++, (r = s));
                    case '=':
                        return (
                            n++,
                            0 == (1 & a) &&
                                c(function (e) {
                                    var t = o === l + 1;
                                    return !(',' !== e || !t) || ('(' === e ? (o++, !1) : !(')' !== e || (l++, !t)));
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
        for (var t, a = e.charAt(n), o = ++n; (t = e.charAt(n)), pe.test(t); ) n++;
        return (
            (i = '' + a + e.substring(o, n)),
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
                          var t, n, i, a, o, l, s, u;
                          return te(this, function (c) {
                              switch (c.label) {
                                  case 0:
                                      for (i in ((t = e.cradle), (n = []), t)) n.push(i);
                                      ((a = 0), (c.label = 1));
                                  case 1:
                                      return a < n.length ? ((i = n[a]) in t ? [4, i] : [3, 3]) : [3, 4];
                                  case 2:
                                      (c.sent(), (c.label = 3));
                                  case 3:
                                      return (a++, [3, 1]);
                                  case 4:
                                      for (s in ((l = []), (o = r))) l.push(s);
                                      ((u = 0), (c.label = 5));
                                  case 5:
                                      return u < l.length ? ((s = l[u]) in o ? [4, s] : [3, 7]) : [3, 8];
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
                a = n.map(function (e) {
                    return i(e.name, { allowUnregistered: e.optional });
                });
            return e.apply(void 0, a);
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
            a = null;
        for (f(); !r(); )
            switch (a.type) {
                case 'class':
                    if ((u(), !c())) return null;
                    f();
                    break;
                case 'function':
                    ('ident' !== (o = f()).type && '*' !== o.type) || f();
                    break;
                case '(':
                    s();
                    break;
                case ')':
                    return i;
                case 'ident':
                    var o,
                        l = { name: a.value, optional: !1 };
                    if ('async' === a.value && (o = f()) && '=' !== o.type) break;
                    return (i.push(l), i);
                default:
                    throw d();
            }
        return i;
        function s() {
            for (var e = { name: '', optional: !1 }; !r(); )
                switch ((f(), a.type)) {
                    case 'ident':
                        e.name = a.value;
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
            return 'ident' === a.type && 'constructor' === a.value;
        }
        function f(e) {
            return (void 0 === e && (e = 0), (a = n(e)));
        }
        function d() {
            return new SyntaxError(
                'Parsing parameter list, did not expect '
                    .concat(a.type, ' token')
                    .concat(a.value ? ' ('.concat(a.value, ')') : ''),
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
        a = {},
        o = new Proxy(
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
                    return Array.from(o);
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
                cradle: o,
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
                            o = ne(ne([], Object.keys(i), !0), Object.getOwnPropertySymbols(i), !0),
                            s = 0,
                            u = o;
                        s < u.length;
                        s++
                    ) {
                        var c = u[s],
                            f = i[c];
                        if (e.strict && f.lifetime === se.SINGLETON && t)
                            throw new oe(c, 'Cannot register a singleton on a scoped container.');
                        a[c] = f;
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
        return ee(ee({}, t && t[Te]()), a);
    }
    function d() {
        var e, t, n, r, i;
        return te(this, function (a) {
            switch (a.label) {
                case 0:
                    for (r in ((e = f()), (n = []), (t = e))) n.push(r);
                    ((i = 0), (a.label = 1));
                case 1:
                    return i < n.length ? ((r = n[i]) in t ? [4, r] : [3, 3]) : [3, 4];
                case 2:
                    (a.sent(), (a.label = 3));
                case 3:
                    return (i++, [3, 1]);
                case 4:
                    return [2];
            }
        });
    }
    function p() {
        return Object.prototype.toString.call(o);
    }
    function h(e) {
        var n = a[e];
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
                throw new ae(t, i, 'Cyclic dependencies detected.');
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
                throw new ae(t, i);
            }
            var a = r.lifetime || se.TRANSIENT;
            if (e.strict && !r.isLeakSafe) {
                var o = i.findIndex(function (e) {
                    var t,
                        n,
                        r = e.lifetime;
                    return (
                        (n = a),
                        ((t = r) === se.SINGLETON && n !== se.SINGLETON) || (t === se.SCOPED && n === se.TRANSIENT)
                    );
                });
                if (o > -1)
                    throw new ae(
                        t,
                        i,
                        "Dependency '"
                            .concat(t.toString(), "' has a shorter lifetime than its ancestor: '")
                            .concat(i[o].name.toString(), "'"),
                    );
            }
            i.push({ name: t, lifetime: a });
            var s = void 0,
                u = void 0;
            switch (a) {
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
                    throw new ae(t, i, 'Unknown lifetime "'.concat(r.lifetime, '"'));
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
                a = e[r];
            if (!(0 < i(a, t))) break e;
            ((e[r] = t), (e[n] = a), (n = r));
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
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
                var l = 2 * (r + 1) - 1,
                    s = e[l],
                    u = l + 1,
                    c = e[u];
                if (0 > i(s, n))
                    u < a && 0 > i(c, s) ? ((e[r] = c), (e[u] = n), (r = u)) : ((e[r] = s), (e[l] = n), (r = l));
                else {
                    if (!(u < a && 0 > i(c, n))) break e;
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
        var a = performance;
        e.unstable_now = function () {
            return a.now();
        };
    } else {
        var o = Date,
            l = o.now();
        e.unstable_now = function () {
            return o.now() - l;
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
        var a = d;
        try {
            for (b(i), f = n(s); null !== f && (!(f.expirationTime > i) || (t && !C())); ) {
                var o = f.callback;
                if ('function' == typeof o) {
                    ((f.callback = null), (d = f.priorityLevel));
                    var l = o(f.expirationTime <= i);
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
            ((f = null), (d = a), (p = !1));
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
        (e.unstable_scheduleCallback = function (r, i, a) {
            var o = e.unstable_now();
            switch (
                ('object' == typeof a && null !== a
                    ? (a = 'number' == typeof (a = a.delay) && 0 < a ? o + a : o)
                    : (a = o),
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
                    startTime: a,
                    expirationTime: (l = a + l),
                    sortIndex: -1,
                }),
                a > o
                    ? ((r.sortIndex = a),
                      t(u, r),
                      null === n(s) && r === n(u) && (v ? (g(O), (O = -1)) : (v = !0), R(_, a - o)))
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
function qe(e, t) {
    (He(e, t), He(e + 'Capture', t));
}
function He(e, t) {
    for (We[e] = t, e = 0; e < t.length; e++) $e.add(t[e]);
}
var Ge = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    Ke = Object.prototype.hasOwnProperty,
    Qe =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ye = {},
    Xe = {};
function Je(e, t, n, r, i, a, o) {
    ((this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = a),
        (this.removeEmptyString = o));
}
var Ze = {};
('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        Ze[e] = new Je(e, 0, !1, e, null, !1, !1);
    }),
    [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
        var t = e[0];
        Ze[t] = new Je(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
        Ze[e] = new Je(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
        Ze[e] = new Je(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (e) {
            Ze[e] = new Je(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
        Ze[e] = new Je(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
        Ze[e] = new Je(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
        Ze[e] = new Je(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
        Ze[e] = new Je(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
var et = /[\-:]([a-z])/g;
function tt(e) {
    return e[1].toUpperCase();
}
function nt(e, t, n, r) {
    var i = Ze.hasOwnProperty(t) ? Ze[t] : null;
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
        Ze[t] = new Je(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
        var t = e.replace(et, tt);
        Ze[t] = new Je(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(et, tt);
        Ze[t] = new Je(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
        Ze[e] = new Je(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Ze.xlinkHref = new Je('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        Ze[e] = new Je(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
var rt = Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    it = Symbol.for('react.element'),
    at = Symbol.for('react.portal'),
    ot = Symbol.for('react.fragment'),
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
                var i = u.stack.split('\n'), a = r.stack.split('\n'), o = i.length - 1, l = a.length - 1;
                1 <= o && 0 <= l && i[o] !== a[l];

            )
                l--;
            for (; 1 <= o && 0 <= l; o--, l--)
                if (i[o] !== a[l]) {
                    if (1 !== o || 1 !== l)
                        do {
                            if ((o--, 0 > --l || i[o] !== a[l])) {
                                var s = '\n' + i[o].replace(' at new ', ' at ');
                                return (
                                    e.displayName &&
                                        s.includes('<anonymous>') &&
                                        (s = s.replace('<anonymous>', e.displayName)),
                                    s
                                );
                            }
                        } while (1 <= o && 0 <= l);
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
        case ot:
            return 'Fragment';
        case at:
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
                    a = n.set;
                return (
                    Object.defineProperty(e, t, {
                        configurable: !0,
                        get: function () {
                            return i.call(this);
                        },
                        set: function (e) {
                            ((r = '' + e), a.call(this, e));
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
function qt(e, t) {
    return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? Wt(t)
        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
}
var Ht,
    Gt,
    Kt =
        ((Gt = function (e, t) {
            if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e) e.innerHTML = t;
            else {
                for (
                    (Ht = Ht || document.createElement('div')).innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                        t = Ht.firstChild;
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
function Jt(e, t, n) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n || 'number' != typeof t || 0 === t || (Yt.hasOwnProperty(e) && Yt[e])
          ? ('' + t).trim()
          : t + 'px';
}
function Zt(e, t) {
    for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf('--'),
                i = Jt(n, t[n], r);
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
function an(e) {
    return (
        (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
    );
}
var on = null,
    ln = null,
    sn = null;
function un(e) {
    if ((e = no(e))) {
        if ('function' != typeof on) throw Error(Ue(280));
        var t = e.stateNode;
        t && ((t = io(t)), on(e.stateNode, e.type, t));
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
    var r = io(n);
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
function bn(e, t, n, r, i, a, o, l, s) {
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
function On(e, t, n, r, i, a, o, l, s) {
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
                var a = i.alternate;
                if (null === a) {
                    if (null !== (r = i.return)) {
                        n = r;
                        continue;
                    }
                    break;
                }
                if (i.child === a.child) {
                    for (a = i.child; a; ) {
                        if (a === n) return (Cn(i), e);
                        if (a === r) return (Cn(i), t);
                        a = a.sibling;
                    }
                    throw Error(Ue(188));
                }
                if (n.return !== r.return) ((n = i), (r = a));
                else {
                    for (var o = !1, l = i.child; l; ) {
                        if (l === n) {
                            ((o = !0), (n = i), (r = a));
                            break;
                        }
                        if (l === r) {
                            ((o = !0), (r = i), (n = a));
                            break;
                        }
                        l = l.sibling;
                    }
                    if (!o) {
                        for (l = a.child; l; ) {
                            if (l === n) {
                                ((o = !0), (n = a), (r = i));
                                break;
                            }
                            if (l === r) {
                                ((o = !0), (r = a), (n = i));
                                break;
                            }
                            l = l.sibling;
                        }
                        if (!o) throw Error(Ue(189));
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
              return ((e >>>= 0), 0 === e ? 32 : (31 - ((qn(e) / Hn) | 0)) | 0);
          },
    qn = Math.log,
    Hn = Math.LN2;
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
        a = e.pingedLanes,
        o = 268435455 & n;
    if (0 !== o) {
        var l = o & ~i;
        0 !== l ? (r = Qn(l)) : 0 !== (a &= o) && (r = Qn(a));
    } else 0 !== (o = n & ~i) ? (r = Qn(o)) : 0 !== a && (r = Qn(a));
    if (0 === r) return 0;
    if (0 !== t && t !== r && 0 == (t & i) && ((i = r & -r) >= (a = t & -t) || (16 === i && 0 != (4194240 & a))))
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
function Jn(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
}
function Zn() {
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
var ar,
    or,
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
function _r(e, t, n, r, i, a) {
    return null === e || e.nativeEvent !== a
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }),
          null !== t && null !== (t = no(t)) && or(t),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== i && -1 === t.indexOf(i) && t.push(i), e);
}
function wr(e) {
    var t = to(e.target);
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
        if (null !== n) return (null !== (t = no(n)) && or(t), (e.blockedOn = n), !1);
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
        a = Pr.transition;
    Pr.transition = null;
    try {
        ((rr = 1), Nr(e, t, n, r));
    } finally {
        ((rr = i), (Pr.transition = a));
    }
}
function Tr(e, t, n, r) {
    var i = rr,
        a = Pr.transition;
    Pr.transition = null;
    try {
        ((rr = 4), Nr(e, t, n, r));
    } finally {
        ((rr = i), (Pr.transition = a));
    }
}
function Nr(e, t, n, r) {
    if (Cr) {
        var i = Rr(e, t, n, r);
        if (null === i) (Pa(e, t, r, jr, n), br(e, r));
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
                        var a = i.pointerId;
                        return (vr.set(a, _r(vr.get(a) || null, e, t, n, r, i)), !0);
                    case 'gotpointercapture':
                        return ((a = i.pointerId), mr.set(a, _r(mr.get(a) || null, e, t, n, r, i)), !0);
                }
                return !1;
            })(i, e, t, n, r)
        )
            r.stopPropagation();
        else if ((br(e, r), 4 & t && -1 < yr.indexOf(e))) {
            for (; null !== i; ) {
                var a = no(i);
                if ((null !== a && ar(a), null === (a = Rr(e, t, n, r)) && Pa(e, t, r, jr, n), a === i)) break;
                i = a;
            }
            null !== i && r.stopPropagation();
        } else Pa(e, t, r, null, n);
    }
}
var jr = null;
function Rr(e, t, n, r) {
    if (((jr = null), null !== (e = to((e = an(r))))))
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
        a = i.length;
    for (e = 0; e < r && n[e] === i[e]; e++);
    var o = r - e;
    for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
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
    function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
            e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
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
    qr,
    Hr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Gr = Ur(Hr),
    Kr = _t({}, Hr, { view: 0, detail: 0 }),
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
                : (e !== qr &&
                      (qr && 'mousemove' === e.type
                          ? (($r = e.screenX - qr.screenX), (Wr = e.screenY - qr.screenY))
                          : (Wr = $r = 0),
                      (qr = e)),
                  $r);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : Wr;
        },
    }),
    Xr = Ur(Yr),
    Jr = Ur(_t({}, Yr, { dataTransfer: 0 })),
    Zr = Ur(_t({}, Kr, { relatedTarget: 0 })),
    ei = Ur(_t({}, Hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    ti = _t({}, Hr, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    ni = Ur(ti),
    ri = Ur(_t({}, Hr, { data: 0 })),
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
    ai = {
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
    oi = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function li(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = oi[e]) && !!t[e];
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
                  ? ai[e.keyCode] || 'Unidentified'
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
    pi = Ur(_t({}, Hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
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
        0 < (t = Aa(t, 'onChange')).length &&
            ((n = new Gr('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
}
var Ai = null,
    Ti = null;
function Ni(e) {
    wa(e, 0);
}
function ji(e) {
    if (Tt(ro(e))) return e;
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
        (Ci(t, Ti, e, an(e)), vn(Ni, t));
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
function qi(e, t) {
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
function Hi(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Gi(e, t) {
    var n,
        r = Hi(e);
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
        r = Hi(r);
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
                    a = Math.min(r.start, i);
                ((r = void 0 === r.end ? a : Math.min(r.end, i)),
                    !e.extend && a > r && ((i = r), (r = a), (a = i)),
                    (i = Gi(n, a)));
                var o = Gi(n, r);
                i &&
                    o &&
                    (1 !== e.rangeCount ||
                        e.anchorNode !== i.node ||
                        e.anchorOffset !== i.offset ||
                        e.focusNode !== o.node ||
                        e.focusOffset !== o.offset) &&
                    ((t = t.createRange()).setStart(i.node, i.offset),
                    e.removeAllRanges(),
                    a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
            }
        for (t = [], e = n; (e = e.parentNode); )
            1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for ('function' == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
            (((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
}
var Ji = Ge && 'documentMode' in document && 11 >= document.documentMode,
    Zi = null,
    ea = null,
    ta = null,
    na = !1;
function ra(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    na ||
        null == Zi ||
        Zi !== Nt(r) ||
        ('selectionStart' in (r = Zi) && Yi(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                  anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                      .anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              }),
        (ta && qi(ta, r)) ||
            ((ta = r),
            0 < (r = Aa(ea, 'onSelect')).length &&
                ((t = new Gr('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Zi))));
}
function ia(e, t) {
    var n = {};
    return ((n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n);
}
var aa = {
        animationend: ia('Animation', 'AnimationEnd'),
        animationiteration: ia('Animation', 'AnimationIteration'),
        animationstart: ia('Animation', 'AnimationStart'),
        transitionend: ia('Transition', 'TransitionEnd'),
    },
    oa = {},
    la = {};
function sa(e) {
    if (oa[e]) return oa[e];
    if (!aa[e]) return e;
    var t,
        n = aa[e];
    for (t in n) if (n.hasOwnProperty(t) && t in la) return (oa[e] = n[t]);
    return e;
}
Ge &&
    ((la = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete aa.animationend.animation, delete aa.animationiteration.animation, delete aa.animationstart.animation),
    'TransitionEvent' in window || delete aa.transitionend.transition);
var ua = sa('animationend'),
    ca = sa('animationiteration'),
    fa = sa('animationstart'),
    da = sa('transitionend'),
    pa = new Map(),
    ha =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' ',
        );
function va(e, t) {
    (pa.set(e, t), qe(t, [e]));
}
for (var ma = 0; ma < ha.length; ma++) {
    var ga = ha[ma];
    va(ga.toLowerCase(), 'on' + (ga[0].toUpperCase() + ga.slice(1)));
}
(va(ua, 'onAnimationEnd'),
    va(ca, 'onAnimationIteration'),
    va(fa, 'onAnimationStart'),
    va('dblclick', 'onDoubleClick'),
    va('focusin', 'onFocus'),
    va('focusout', 'onBlur'),
    va(da, 'onTransitionEnd'),
    He('onMouseEnter', ['mouseout', 'mouseover']),
    He('onMouseLeave', ['mouseout', 'mouseover']),
    He('onPointerEnter', ['pointerout', 'pointerover']),
    He('onPointerLeave', ['pointerout', 'pointerover']),
    qe('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    qe('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    qe('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    qe('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    qe('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    qe('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
var ya =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' ',
        ),
    ba = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ya));
function _a(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n),
        (function (e, t, n, r, i, a, o, l, s) {
            if ((On.apply(this, arguments), _n)) {
                if (!_n) throw Error(Ue(198));
                var u = wn;
                ((_n = !1), (wn = null), kn || ((kn = !0), (Sn = u)));
            }
        })(r, t, void 0, e),
        (e.currentTarget = null));
}
function wa(e, t) {
    t = 0 != (4 & t);
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var a = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var l = r[o],
                        s = l.instance,
                        u = l.currentTarget;
                    if (((l = l.listener), s !== a && i.isPropagationStopped())) break e;
                    (_a(i, l, u), (a = s));
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (
                        ((s = (l = r[o]).instance),
                        (u = l.currentTarget),
                        (l = l.listener),
                        s !== a && i.isPropagationStopped())
                    )
                        break e;
                    (_a(i, l, u), (a = s));
                }
        }
    }
    if (kn) throw ((e = Sn), (kn = !1), (Sn = null), e);
}
function ka(e, t) {
    var n = t[Ja];
    void 0 === n && (n = t[Ja] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Ea(t, e, 2, !1), n.add(r));
}
function Sa(e, t, n) {
    var r = 0;
    (t && (r |= 4), Ea(n, e, r, t));
}
var xa = '_reactListening' + Math.random().toString(36).slice(2);
function Oa(e) {
    if (!e[xa]) {
        ((e[xa] = !0),
            $e.forEach(function (t) {
                'selectionchange' !== t && (ba.has(t) || Sa(t, !1, e), Sa(t, !0, e));
            }));
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[xa] || ((t[xa] = !0), Sa('selectionchange', !1, t));
    }
}
function Ea(e, t, n, r) {
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
function Pa(e, t, n, r, i) {
    var a = r;
    if (0 == (1 & t) && 0 == (2 & t) && null !== r)
        e: for (;;) {
            if (null === r) return;
            var o = r.tag;
            if (3 === o || 4 === o) {
                var l = r.stateNode.containerInfo;
                if (l === i || (8 === l.nodeType && l.parentNode === i)) break;
                if (4 === o)
                    for (o = r.return; null !== o; ) {
                        var s = o.tag;
                        if (
                            (3 === s || 4 === s) &&
                            ((s = o.stateNode.containerInfo) === i || (8 === s.nodeType && s.parentNode === i))
                        )
                            return;
                        o = o.return;
                    }
                for (; null !== l; ) {
                    if (null === (o = to(l))) return;
                    if (5 === (s = o.tag) || 6 === s) {
                        r = a = o;
                        continue e;
                    }
                    l = l.parentNode;
                }
            }
            r = r.return;
        }
    vn(function () {
        var r = a,
            i = an(n),
            o = [];
        e: {
            var l = pa.get(e);
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
                        ((u = 'focus'), (s = Zr));
                        break;
                    case 'focusout':
                        ((u = 'blur'), (s = Zr));
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        s = Zr;
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
                        s = Jr;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        s = di;
                        break;
                    case ua:
                    case ca:
                    case fa:
                        s = ei;
                        break;
                    case da:
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
                            ((p = v), null !== d && null != (v = mn(h, d)) && c.push(Ca(h, v, p))),
                        f)
                    )
                        break;
                    h = h.return;
                }
                0 < c.length && ((l = new s(l, u, null, n, i)), o.push({ event: l, listeners: c }));
            }
        }
        if (0 == (7 & t)) {
            if (
                ((s = 'mouseout' === e || 'pointerout' === e),
                (!(l = 'mouseover' === e || 'pointerover' === e) ||
                    n === rn ||
                    !(u = n.relatedTarget || n.fromElement) ||
                    (!to(u) && !u[Xa])) &&
                    (s || l) &&
                    ((l = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window),
                    s
                        ? ((s = r),
                          null !== (u = (u = n.relatedTarget || n.toElement) ? to(u) : null) &&
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
                    (f = null == s ? l : ro(s)),
                    (p = null == u ? l : ro(u)),
                    ((l = new c(v, h + 'leave', s, n, i)).target = f),
                    (l.relatedTarget = p),
                    (v = null),
                    to(i) === r && (((c = new c(d, h + 'enter', u, n, i)).target = p), (c.relatedTarget = f), (v = c)),
                    (f = v),
                    s && u)
                )
                    e: {
                        for (d = u, h = 0, p = c = s; p; p = Ta(p)) h++;
                        for (p = 0, v = d; v; v = Ta(v)) p++;
                        for (; 0 < h - p; ) ((c = Ta(c)), h--);
                        for (; 0 < p - h; ) ((d = Ta(d)), p--);
                        for (; h--; ) {
                            if (c === d || (null !== d && c === d.alternate)) break e;
                            ((c = Ta(c)), (d = Ta(d)));
                        }
                        c = null;
                    }
                else c = null;
                (null !== s && Na(o, l, s, c, !1), null !== u && null !== f && Na(o, f, u, c, !0));
            }
            if (
                'select' === (s = (l = r ? ro(r) : window).nodeName && l.nodeName.toLowerCase()) ||
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
                    ? Ci(o, m, n, i)
                    : (g && g(e, l, r),
                      'focusout' === e &&
                          (g = l._wrapperState) &&
                          g.controlled &&
                          'number' === l.type &&
                          zt(l, 'number', l.value)),
                (g = r ? ro(r) : window),
                e)
            ) {
                case 'focusin':
                    (Pi(g) || 'true' === g.contentEditable) && ((Zi = g), (ea = r), (ta = null));
                    break;
                case 'focusout':
                    ta = ea = Zi = null;
                    break;
                case 'mousedown':
                    na = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    ((na = !1), ra(o, n, i));
                    break;
                case 'selectionchange':
                    if (Ji) break;
                case 'keydown':
                case 'keyup':
                    ra(o, n, i);
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
                0 < (g = Aa(r, b)).length &&
                    ((b = new ri(b, e, null, n, i)),
                    o.push({ event: b, listeners: g }),
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
                    0 < (r = Aa(r, 'onBeforeInput')).length &&
                    ((i = new ri('onBeforeInput', 'beforeinput', null, n, i)),
                    o.push({ event: i, listeners: r }),
                    (i.data = y)));
        }
        wa(o, t);
    });
}
function Ca(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Aa(e, t) {
    for (var n = t + 'Capture', r = []; null !== e; ) {
        var i = e,
            a = i.stateNode;
        (5 === i.tag &&
            null !== a &&
            ((i = a), null != (a = mn(e, n)) && r.unshift(Ca(e, a, i)), null != (a = mn(e, t)) && r.push(Ca(e, a, i))),
            (e = e.return));
    }
    return r;
}
function Ta(e) {
    if (null === e) return null;
    do {
        e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
}
function Na(e, t, n, r, i) {
    for (var a = t._reactName, o = []; null !== n && n !== r; ) {
        var l = n,
            s = l.alternate,
            u = l.stateNode;
        if (null !== s && s === r) break;
        (5 === l.tag &&
            null !== u &&
            ((l = u),
            i
                ? null != (s = mn(n, a)) && o.unshift(Ca(n, s, l))
                : i || (null != (s = mn(n, a)) && o.push(Ca(n, s, l)))),
            (n = n.return));
    }
    0 !== o.length && e.push({ event: t, listeners: o });
}
var ja = /\r\n?/g,
    Ra = /\u0000|\uFFFD/g;
function La(e) {
    return ('string' == typeof e ? e : '' + e).replace(ja, '\n').replace(Ra, '');
}
function Ia(e, t, n) {
    if (((t = La(t)), La(e) !== t && n)) throw Error(Ue(425));
}
function Ma() {}
var za = null,
    Da = null;
function Va(e, t) {
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
var Fa = 'function' == typeof setTimeout ? setTimeout : void 0,
    Ba = 'function' == typeof clearTimeout ? clearTimeout : void 0,
    Ua = 'function' == typeof Promise ? Promise : void 0,
    $a =
        'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== Ua
              ? function (e) {
                    return Ua.resolve(null).then(e).catch(Wa);
                }
              : Fa;
function Wa(e) {
    setTimeout(function () {
        throw e;
    });
}
function qa(e, t) {
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
function Ha(e) {
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
function Ga(e) {
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
var Ka = Math.random().toString(36).slice(2),
    Qa = '__reactFiber$' + Ka,
    Ya = '__reactProps$' + Ka,
    Xa = '__reactContainer$' + Ka,
    Ja = '__reactEvents$' + Ka,
    Za = '__reactListeners$' + Ka,
    eo = '__reactHandles$' + Ka;
function to(e) {
    var t = e[Qa];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Xa] || n[Qa])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = Ga(e); null !== e; ) {
                    if ((n = e[Qa])) return n;
                    e = Ga(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function no(e) {
    return !(e = e[Qa] || e[Xa]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
}
function ro(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(Ue(33));
}
function io(e) {
    return e[Ya] || null;
}
var ao = [],
    oo = -1;
function lo(e) {
    return { current: e };
}
function so(e) {
    0 > oo || ((e.current = ao[oo]), (ao[oo] = null), oo--);
}
function uo(e, t) {
    (oo++, (ao[oo] = e.current), (e.current = t));
}
var co = {},
    fo = lo(co),
    po = lo(!1),
    ho = co;
function vo(e, t) {
    var n = e.type.contextTypes;
    if (!n) return co;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i,
        a = {};
    for (i in n) a[i] = t[i];
    return (
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = a)),
        a
    );
}
function mo(e) {
    return null != (e = e.childContextTypes);
}
function go() {
    (so(po), so(fo));
}
function yo(e, t, n) {
    if (fo.current !== co) throw Error(Ue(168));
    (uo(fo, t), uo(po, n));
}
function bo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
    for (var i in (r = r.getChildContext())) if (!(i in t)) throw Error(Ue(108, Et(e) || 'Unknown', i));
    return _t({}, n, r);
}
function _o(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || co),
        (ho = fo.current),
        uo(fo, e),
        uo(po, po.current),
        !0
    );
}
function wo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(Ue(169));
    (n ? ((e = bo(e, t, ho)), (r.__reactInternalMemoizedMergedChildContext = e), so(po), so(fo), uo(fo, e)) : so(po),
        uo(po, n));
}
var ko = null,
    So = !1,
    xo = !1;
function Oo(e) {
    null === ko ? (ko = [e]) : ko.push(e);
}
function Eo() {
    if (!xo && null !== ko) {
        xo = !0;
        var e = 0,
            t = rr;
        try {
            var n = ko;
            for (rr = 1; e < n.length; e++) {
                var r = n[e];
                do {
                    r = r(!0);
                } while (null !== r);
            }
            ((ko = null), (So = !1));
        } catch (i) {
            throw (null !== ko && (ko = ko.slice(e + 1)), Nn(zn, Eo), i);
        } finally {
            ((rr = t), (xo = !1));
        }
    }
    return null;
}
var Po = [],
    Co = 0,
    Ao = null,
    To = 0,
    No = [],
    jo = 0,
    Ro = null,
    Lo = 1,
    Io = '';
function Mo(e, t) {
    ((Po[Co++] = To), (Po[Co++] = Ao), (Ao = e), (To = t));
}
function zo(e, t, n) {
    ((No[jo++] = Lo), (No[jo++] = Io), (No[jo++] = Ro), (Ro = e));
    var r = Lo;
    e = Io;
    var i = 32 - Wn(r) - 1;
    ((r &= ~(1 << i)), (n += 1));
    var a = 32 - Wn(t) + i;
    if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (i -= o),
            (Lo = (1 << (32 - Wn(t) + i)) | (n << i) | r),
            (Io = a + e));
    } else ((Lo = (1 << a) | (n << i) | r), (Io = e));
}
function Do(e) {
    null !== e.return && (Mo(e, 1), zo(e, 1, 0));
}
function Vo(e) {
    for (; e === Ao; ) ((Ao = Po[--Co]), (Po[Co] = null), (To = Po[--Co]), (Po[Co] = null));
    for (; e === Ro; )
        ((Ro = No[--jo]), (No[jo] = null), (Io = No[--jo]), (No[jo] = null), (Lo = No[--jo]), (No[jo] = null));
}
var Fo = null,
    Bo = null,
    Uo = !1,
    $o = null;
function Wo(e, t) {
    var n = vf(5, null, null, 0);
    ((n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function qo(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (Fo = e), (Bo = Ha(t.firstChild)), !0)
            );
        case 6:
            return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (Fo = e), (Bo = null), !0)
            );
        case 13:
            return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ro ? { id: Lo, overflow: Io } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = vf(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (Fo = e),
                (Bo = null),
                !0)
            );
        default:
            return !1;
    }
}
function Ho(e) {
    return 0 != (1 & e.mode) && 0 == (128 & e.flags);
}
function Go(e) {
    if (Uo) {
        var t = Bo;
        if (t) {
            var n = t;
            if (!qo(e, t)) {
                if (Ho(e)) throw Error(Ue(418));
                t = Ha(n.nextSibling);
                var r = Fo;
                t && qo(e, t) ? Wo(r, n) : ((e.flags = (-4097 & e.flags) | 2), (Uo = !1), (Fo = e));
            }
        } else {
            if (Ho(e)) throw Error(Ue(418));
            ((e.flags = (-4097 & e.flags) | 2), (Uo = !1), (Fo = e));
        }
    }
}
function Ko(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
    Fo = e;
}
function Qo(e) {
    if (e !== Fo) return !1;
    if (!Uo) return (Ko(e), (Uo = !0), !1);
    var t;
    if (
        ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = 'head' !== (t = e.type) && 'body' !== t && !Va(e.type, e.memoizedProps)),
        t && (t = Bo))
    ) {
        if (Ho(e)) throw (Yo(), Error(Ue(418)));
        for (; t; ) (Wo(e, t), (t = Ha(t.nextSibling)));
    }
    if ((Ko(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(Ue(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ('/$' === n) {
                        if (0 === t) {
                            Bo = Ha(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
            }
            Bo = null;
        }
    } else Bo = Fo ? Ha(e.stateNode.nextSibling) : null;
    return !0;
}
function Yo() {
    for (var e = Bo; e; ) e = Ha(e.nextSibling);
}
function Xo() {
    ((Bo = Fo = null), (Uo = !1));
}
function Jo(e) {
    null === $o ? ($o = [e]) : $o.push(e);
}
var Zo = rt.ReactCurrentBatchConfig;
function el(e, t, n) {
    if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
        if (n._owner) {
            if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(Ue(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(Ue(147, e));
            var i = r,
                a = '' + e;
            return null !== t && null !== t.ref && 'function' == typeof t.ref && t.ref._stringRef === a
                ? t.ref
                : (((t = function (e) {
                      var t = i.refs;
                      null === e ? delete t[a] : (t[a] = e);
                  })._stringRef = a),
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
    function a(t, n, r) {
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
        return (e && null === t.alternate && (t.flags |= 2), t);
    }
    function l(e, t, n, r) {
        return null === t || 6 !== t.tag ? (((t = wf(n, e.mode, r)).return = e), t) : (((t = i(t, n)).return = e), t);
    }
    function s(e, t, n, r) {
        var a = n.type;
        return a === ot
            ? c(e, t, n.props.children, r, n.key)
            : null !== t &&
                (t.elementType === a || ('object' == typeof a && null !== a && a.$$typeof === vt && nl(a) === t.type))
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
    function c(e, t, n, r, a) {
        return null === t || 7 !== t.tag
            ? (((t = bf(n, e.mode, r, a)).return = e), t)
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
                case at:
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
                case at:
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
                case at:
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
            ('object' == typeof c && null !== c && c.type === ot && null === c.key && (c = c.props.children),
            'object' == typeof c && null !== c)
        ) {
            switch (c.$$typeof) {
                case it:
                    e: {
                        for (var v = c.key, m = u; null !== m; ) {
                            if (m.key === v) {
                                if ((v = c.type) === ot) {
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
                        c.type === ot
                            ? (((u = bf(c.props.children, s.mode, h, c.key)).return = s), (s = u))
                            : (((h = yf(c.type, c.key, c.props, null, s.mode, h)).ref = el(s, u, c)),
                              (h.return = s),
                              (s = h));
                    }
                    return o(s);
                case at:
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
                    return o(s);
                case vt:
                    return l(s, u, (m = c._init)(c._payload), h);
            }
            if (Dt(c))
                return (function (i, o, l, s) {
                    for (var u = null, c = null, h = o, v = (o = 0), m = null; null !== h && v < l.length; v++) {
                        h.index > v ? ((m = h), (h = null)) : (m = h.sibling);
                        var g = d(i, h, l[v], s);
                        if (null === g) {
                            null === h && (h = m);
                            break;
                        }
                        (e && h && null === g.alternate && t(i, h),
                            (o = a(g, o, v)),
                            null === c ? (u = g) : (c.sibling = g),
                            (c = g),
                            (h = m));
                    }
                    if (v === l.length) return (n(i, h), Uo && Mo(i, v), u);
                    if (null === h) {
                        for (; v < l.length; v++)
                            null !== (h = f(i, l[v], s)) &&
                                ((o = a(h, o, v)), null === c ? (u = h) : (c.sibling = h), (c = h));
                        return (Uo && Mo(i, v), u);
                    }
                    for (h = r(i, h); v < l.length; v++)
                        null !== (m = p(h, i, v, l[v], s)) &&
                            (e && null !== m.alternate && h.delete(null === m.key ? v : m.key),
                            (o = a(m, o, v)),
                            null === c ? (u = m) : (c.sibling = m),
                            (c = m));
                    return (
                        e &&
                            h.forEach(function (e) {
                                return t(i, e);
                            }),
                        Uo && Mo(i, v),
                        u
                    );
                })(s, u, c, h);
            if (yt(c))
                return (function (i, o, l, s) {
                    var u = yt(l);
                    if ('function' != typeof u) throw Error(Ue(150));
                    if (null == (l = u.call(l))) throw Error(Ue(151));
                    for (
                        var c = (u = null), h = o, v = (o = 0), m = null, g = l.next();
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
                            (o = a(y, o, v)),
                            null === c ? (u = y) : (c.sibling = y),
                            (c = y),
                            (h = m));
                    }
                    if (g.done) return (n(i, h), Uo && Mo(i, v), u);
                    if (null === h) {
                        for (; !g.done; v++, g = l.next())
                            null !== (g = f(i, g.value, s)) &&
                                ((o = a(g, o, v)), null === c ? (u = g) : (c.sibling = g), (c = g));
                        return (Uo && Mo(i, v), u);
                    }
                    for (h = r(i, h); !g.done; v++, g = l.next())
                        null !== (g = p(h, i, v, g.value, s)) &&
                            (e && null !== g.alternate && h.delete(null === g.key ? v : g.key),
                            (o = a(g, o, v)),
                            null === c ? (u = g) : (c.sibling = g),
                            (c = g));
                    return (
                        e &&
                            h.forEach(function (e) {
                                return t(i, e);
                            }),
                        Uo && Mo(i, v),
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
              o(s))
            : n(s, u);
    };
}
var il = rl(!0),
    al = rl(!1),
    ol = lo(null),
    ll = null,
    sl = null,
    ul = null;
function cl() {
    ul = sl = ll = null;
}
function fl(e) {
    var t = ol.current;
    (so(ol), (e._currentValue = t));
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
            a = null;
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
                (null === a ? (i = a = o) : (a = a.next = o), (n = n.next));
            } while (null !== n);
            null === a ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        return (
            (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: a,
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
    var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        l = i.shared.pending;
    if (null !== l) {
        i.shared.pending = null;
        var s = l,
            u = s.next;
        ((s.next = null), null === o ? (a = u) : (o.next = u), (o = s));
        var c = e.alternate;
        null !== c &&
            (l = (c = c.updateQueue).lastBaseUpdate) !== o &&
            (null === l ? (c.firstBaseUpdate = u) : (l.next = u), (c.lastBaseUpdate = s));
    }
    if (null !== a) {
        var f = i.baseState;
        for (o = 0, c = u = s = null, l = a; ; ) {
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
                    (o |= d));
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
                ((o |= i.lane), (i = i.next));
            } while (i !== t);
        } else null === a && (i.shared.lanes = 0);
        ((bc |= o), (e.lanes = o), (e.memoizedState = f));
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
    Al = lo(Cl),
    Tl = lo(Cl),
    Nl = lo(Cl);
function jl(e) {
    if (e === Cl) throw Error(Ue(174));
    return e;
}
function Rl(e, t) {
    switch ((uo(Nl, t), uo(Tl, e), uo(Al, Cl), (e = t.nodeType))) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : qt(null, '');
            break;
        default:
            t = qt((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
    }
    (so(Al), uo(Al, t));
}
function Ll() {
    (so(Al), so(Tl), so(Nl));
}
function Il(e) {
    jl(Nl.current);
    var t = jl(Al.current),
        n = qt(t, e.type);
    t !== n && (uo(Tl, e), uo(Al, n));
}
function Ml(e) {
    Tl.current === e && (so(Al), so(Tl));
}
var zl = lo(0);
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
    ql = null,
    Hl = null,
    Gl = !1,
    Kl = !1,
    Ql = 0,
    Yl = 0;
function Xl() {
    throw Error(Ue(321));
}
function Jl(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Wi(e[n], t[n])) return !1;
    return !0;
}
function Zl(e, t, n, r, i, a) {
    if (
        (($l = a),
        (Wl = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Bl.current = null === e || null === e.memoizedState ? Ms : zs),
        (e = n(r, i)),
        Kl)
    ) {
        a = 0;
        do {
            if (((Kl = !1), (Ql = 0), 25 <= a)) throw Error(Ue(301));
            ((a += 1), (Hl = ql = null), (t.updateQueue = null), (Bl.current = Ds), (e = n(r, i)));
        } while (Kl);
    }
    if (((Bl.current = Is), (t = null !== ql && null !== ql.next), ($l = 0), (Hl = ql = Wl = null), (Gl = !1), t))
        throw Error(Ue(300));
    return e;
}
function es() {
    var e = 0 !== Ql;
    return ((Ql = 0), e);
}
function ts() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (null === Hl ? (Wl.memoizedState = Hl = e) : (Hl = Hl.next = e), Hl);
}
function ns() {
    if (null === ql) {
        var e = Wl.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = ql.next;
    var t = null === Hl ? Wl.memoizedState : Hl.next;
    if (null !== t) ((Hl = t), (ql = e));
    else {
        if (null === e) throw Error(Ue(310));
        ((e = {
            memoizedState: (ql = e).memoizedState,
            baseState: ql.baseState,
            baseQueue: ql.baseQueue,
            queue: ql.queue,
            next: null,
        }),
            null === Hl ? (Wl.memoizedState = Hl = e) : (Hl = Hl.next = e));
    }
    return Hl;
}
function rs(e, t) {
    return 'function' == typeof t ? t(e) : t;
}
function is(e) {
    var t = ns(),
        n = t.queue;
    if (null === n) throw Error(Ue(311));
    n.lastRenderedReducer = e;
    var r = ql,
        i = r.baseQueue,
        a = n.pending;
    if (null !== a) {
        if (null !== i) {
            var o = i.next;
            ((i.next = a.next), (a.next = o));
        }
        ((r.baseQueue = i = a), (n.pending = null));
    }
    if (null !== i) {
        ((a = i.next), (r = r.baseState));
        var l = (o = null),
            s = null,
            u = a;
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
                (null === s ? ((l = s = f), (o = r)) : (s = s.next = f), (Wl.lanes |= c), (bc |= c));
            }
            u = u.next;
        } while (null !== u && u !== a);
        (null === s ? (o = r) : (s.next = l),
            Wi(r, t.memoizedState) || (nu = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = s),
            (n.lastRenderedState = r));
    }
    if (null !== (e = n.interleaved)) {
        i = e;
        do {
            ((a = i.lane), (Wl.lanes |= a), (bc |= a), (i = i.next));
        } while (i !== e);
    } else null === i && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function as(e) {
    var t = ns(),
        n = t.queue;
    if (null === n) throw Error(Ue(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        a = t.memoizedState;
    if (null !== i) {
        n.pending = null;
        var o = (i = i.next);
        do {
            ((a = e(a, o.action)), (o = o.next));
        } while (o !== i);
        (Wi(a, t.memoizedState) || (nu = !0),
            (t.memoizedState = a),
            null === t.baseQueue && (t.baseState = a),
            (n.lastRenderedState = a));
    }
    return [a, r];
}
function os() {}
function ls(e, t) {
    var n = Wl,
        r = ns(),
        i = t(),
        a = !Wi(r.memoizedState, i);
    if (
        (a && ((r.memoizedState = i), (nu = !0)),
        (r = r.queue),
        bs(cs.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || a || (null !== Hl && 1 & Hl.memoizedState.tag))
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
    var a = void 0;
    if (null !== ql) {
        var o = ql.memoizedState;
        if (((a = o.destroy), null !== r && Jl(r, o.deps))) return void (i.memoizedState = hs(t, n, a, r));
    }
    ((Wl.flags |= e), (i.memoizedState = hs(1 | t, n, a, r)));
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
    return null !== r && null !== t && Jl(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Es(e, t) {
    var n = ns();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Jl(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ps(e, t, n) {
    return 0 == (21 & $l)
        ? (e.baseState && ((e.baseState = !1), (nu = !0)), (e.memoizedState = n))
        : (Wi(n, t) || ((n = Zn()), (Wl.lanes |= n), (bc |= n), (e.baseState = !0)), t);
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
        var a = e.alternate;
        if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
            try {
                var o = t.lastRenderedState,
                    l = a(o, n);
                if (((i.hasEagerState = !0), (i.eagerState = l), Wi(l, o))) {
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
            if (Uo) {
                if (void 0 === n) throw Error(Ue(407));
                n = n();
            } else {
                if (((n = t()), null === dc)) throw Error(Ue(349));
                0 != (30 & $l) || ss(r, t, n);
            }
            i.memoizedState = n;
            var a = { value: n, getSnapshot: t };
            return (
                (i.queue = a),
                ys(cs.bind(null, r, a, e), [e]),
                (r.flags |= 2048),
                hs(9, us.bind(null, r, a, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = ts(),
                t = dc.identifierPrefix;
            if (Uo) {
                var n = Io;
                ((t = ':' + t + 'R' + (n = (Lo & ~(1 << (32 - Wn(Lo) - 1))).toString(32) + n)),
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
            return Ps(ns(), ql.memoizedState, e);
        },
        useTransition: function () {
            return [is(rs)[0], ns().memoizedState];
        },
        useMutableSource: os,
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
        useReducer: as,
        useRef: vs,
        useState: function () {
            return as(rs);
        },
        useDebugValue: xs,
        useDeferredValue: function (e) {
            var t = ns();
            return null === ql ? (t.memoizedState = e) : Ps(t, ql.memoizedState, e);
        },
        useTransition: function () {
            return [as(rs)[0], ns().memoizedState];
        },
        useMutableSource: os,
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
            a = kl(r, i);
        ((a.payload = t), null != n && (a.callback = n), null !== (t = Sl(e, a, i)) && (Vc(t, e, i, r), xl(t, e, i)));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = zc(),
            i = Dc(e),
            a = kl(r, i);
        ((a.tag = 1),
            (a.payload = t),
            null != n && (a.callback = n),
            null !== (t = Sl(e, a, i)) && (Vc(t, e, i, r), xl(t, e, i)));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = zc(),
            r = Dc(e),
            i = kl(n, r);
        ((i.tag = 2), null != t && (i.callback = t), null !== (t = Sl(e, i, r)) && (Vc(t, e, r, n), xl(t, e, r)));
    },
};
function Us(e, t, n, r, i, a, o) {
    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, a, o)
        : !t.prototype || !t.prototype.isPureReactComponent || !qi(n, r) || !qi(i, a);
}
function $s(e, t, n) {
    var r = !1,
        i = co,
        a = t.contextType;
    return (
        'object' == typeof a && null !== a
            ? (a = hl(a))
            : ((i = mo(t) ? ho : fo.current), (a = (r = null != (r = t.contextTypes)) ? vo(e, i) : co)),
        (t = new t(n, a)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = Bs),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i),
            (e.__reactInternalMemoizedMaskedChildContext = a)),
        t
    );
}
function Ws(e, t, n, r) {
    ((e = t.state),
        'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Bs.enqueueReplaceState(t, t.state, null));
}
function qs(e, t, n, r) {
    var i = e.stateNode;
    ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), _l(e));
    var a = t.contextType;
    ('object' == typeof a && null !== a ? (i.context = hl(a)) : ((a = mo(t) ? ho : fo.current), (i.context = vo(e, a))),
        (i.state = e.memoizedState),
        'function' == typeof (a = t.getDerivedStateFromProps) && (Fs(e, t, a, n), (i.state = e.memoizedState)),
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
function Hs(e, t) {
    try {
        var n = '',
            r = t;
        do {
            ((n += xt(r)), (r = r.return));
        } while (r);
        var i = n;
    } catch (a) {
        i = '\nError generating stack: ' + a.message + '\n' + a.stack;
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
    var a = e.stateNode;
    return (
        null !== a &&
            'function' == typeof a.componentDidCatch &&
            (n.callback = function () {
                (Ks(0, t), 'function' != typeof r && (null === Ac ? (Ac = new Set([this])) : Ac.add(this)));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
            }),
        n
    );
}
function Js(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new Qs();
        var i = new Set();
        r.set(t, i);
    } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = uf.bind(null, e, t, n)), t.then(e, e));
}
function Zs(e) {
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
    t.child = null === e ? al(t, null, n, r) : il(t, e.child, n, r);
}
function iu(e, t, n, r, i) {
    n = n.render;
    var a = t.ref;
    return (
        pl(t, i),
        (r = Zl(e, t, n, r, a, i)),
        (n = es()),
        null === e || nu
            ? (Uo && n && Do(t), (t.flags |= 1), ru(e, t, r, i), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Pu(e, t, i))
    );
}
function au(e, t, n, r, i) {
    if (null === e) {
        var a = n.type;
        return 'function' != typeof a ||
            mf(a) ||
            void 0 !== a.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = yf(n.type, null, r, t, t.mode, i)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = a), ou(e, t, a, r, i));
    }
    if (((a = e.child), 0 == (e.lanes & i))) {
        var o = a.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : qi)(o, r) && e.ref === t.ref) return Pu(e, t, i);
    }
    return ((t.flags |= 1), ((e = gf(a, r)).ref = t.ref), (e.return = t), (t.child = e));
}
function ou(e, t, n, r, i) {
    if (null !== e) {
        var a = e.memoizedProps;
        if (qi(a, r) && e.ref === t.ref) {
            if (((nu = !1), (t.pendingProps = r = a), 0 == (e.lanes & i))) return ((t.lanes = e.lanes), Pu(e, t, i));
            0 != (131072 & e.flags) && (nu = !0);
        }
    }
    return uu(e, t, n, r, i);
}
function lu(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        a = null !== e ? e.memoizedState : null;
    if ('hidden' === r.mode)
        if (0 == (1 & t.mode))
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), uo(mc, vc), (vc |= n));
        else {
            if (0 == (1073741824 & n))
                return (
                    (e = null !== a ? a.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    uo(mc, vc),
                    (vc |= e),
                    null
                );
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== a ? a.baseLanes : n),
                uo(mc, vc),
                (vc |= r));
        }
    else (null !== a ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n), uo(mc, vc), (vc |= r));
    return (ru(e, t, i, n), t.child);
}
function su(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function uu(e, t, n, r, i) {
    var a = mo(n) ? ho : fo.current;
    return (
        (a = vo(t, a)),
        pl(t, i),
        (n = Zl(e, t, n, r, a, i)),
        (r = es()),
        null === e || nu
            ? (Uo && r && Do(t), (t.flags |= 1), ru(e, t, n, i), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Pu(e, t, i))
    );
}
function cu(e, t, n, r, i) {
    if (mo(n)) {
        var a = !0;
        _o(t);
    } else a = !1;
    if ((pl(t, i), null === t.stateNode)) (Eu(e, t), $s(t, n, r), qs(t, n, r, i), (r = !0));
    else if (null === e) {
        var o = t.stateNode,
            l = t.memoizedProps;
        o.props = l;
        var s = o.context,
            u = n.contextType;
        'object' == typeof u && null !== u ? (u = hl(u)) : (u = vo(t, (u = mo(n) ? ho : fo.current)));
        var c = n.getDerivedStateFromProps,
            f = 'function' == typeof c || 'function' == typeof o.getSnapshotBeforeUpdate;
        (f ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((l !== r || s !== u) && Ws(t, o, r, u)),
            (bl = !1));
        var d = t.memoizedState;
        ((o.state = d),
            El(t, r, o, i),
            (s = t.memoizedState),
            l !== r || d !== s || po.current || bl
                ? ('function' == typeof c && (Fs(t, n, c, r), (s = t.memoizedState)),
                  (l = bl || Us(t, n, l, r, d, s, u))
                      ? (f ||
                            ('function' != typeof o.UNSAFE_componentWillMount &&
                                'function' != typeof o.componentWillMount) ||
                            ('function' == typeof o.componentWillMount && o.componentWillMount(),
                            'function' == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()),
                        'function' == typeof o.componentDidMount && (t.flags |= 4194308))
                      : ('function' == typeof o.componentDidMount && (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = u),
                  (r = l))
                : ('function' == typeof o.componentDidMount && (t.flags |= 4194308), (r = !1)));
    } else {
        ((o = t.stateNode),
            wl(e, t),
            (l = t.memoizedProps),
            (u = t.type === t.elementType ? l : Vs(t.type, l)),
            (o.props = u),
            (f = t.pendingProps),
            (d = o.context),
            'object' == typeof (s = n.contextType) && null !== s
                ? (s = hl(s))
                : (s = vo(t, (s = mo(n) ? ho : fo.current))));
        var p = n.getDerivedStateFromProps;
        ((c = 'function' == typeof p || 'function' == typeof o.getSnapshotBeforeUpdate) ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((l !== f || d !== s) && Ws(t, o, r, s)),
            (bl = !1),
            (d = t.memoizedState),
            (o.state = d),
            El(t, r, o, i));
        var h = t.memoizedState;
        l !== f || d !== h || po.current || bl
            ? ('function' == typeof p && (Fs(t, n, p, r), (h = t.memoizedState)),
              (u = bl || Us(t, n, u, r, d, h, s) || !1)
                  ? (c ||
                        ('function' != typeof o.UNSAFE_componentWillUpdate &&
                            'function' != typeof o.componentWillUpdate) ||
                        ('function' == typeof o.componentWillUpdate && o.componentWillUpdate(r, h, s),
                        'function' == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, h, s)),
                    'function' == typeof o.componentDidUpdate && (t.flags |= 4),
                    'function' == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ('function' != typeof o.componentDidUpdate ||
                        (l === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 4),
                    'function' != typeof o.getSnapshotBeforeUpdate ||
                        (l === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
              (o.props = r),
              (o.state = h),
              (o.context = s),
              (r = u))
            : ('function' != typeof o.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
              'function' != typeof o.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return fu(e, t, n, r, a, i);
}
function fu(e, t, n, r, i, a) {
    su(e, t);
    var o = 0 != (128 & t.flags);
    if (!r && !o) return (i && wo(t, n, !1), Pu(e, t, a));
    ((r = t.stateNode), (tu.current = t));
    var l = o && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
    return (
        (t.flags |= 1),
        null !== e && o ? ((t.child = il(t, e.child, null, a)), (t.child = il(t, null, l, a))) : ru(e, t, l, a),
        (t.memoizedState = r.state),
        i && wo(t, n, !0),
        t.child
    );
}
function du(e) {
    var t = e.stateNode;
    (t.pendingContext ? yo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && yo(0, t.context, !1),
        Rl(e, t.containerInfo));
}
function pu(e, t, n, r, i) {
    return (Xo(), Jo(i), (t.flags |= 256), ru(e, t, n, r), t.child);
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
        a = zl.current,
        o = !1,
        l = 0 != (128 & t.flags);
    if (
        ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)),
        r ? ((o = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (a |= 1),
        uo(zl, 1 & a),
        null === e)
    )
        return (
            Go(t),
            null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 == (1 & t.mode) ? (t.lanes = 1) : '$!' === e.data ? (t.lanes = 8) : (t.lanes = 1073741824), null)
                : ((l = i.children),
                  (e = i.fallback),
                  o
                      ? ((i = t.mode),
                        (o = t.child),
                        (l = { mode: 'hidden', children: l }),
                        0 == (1 & i) && null !== o
                            ? ((o.childLanes = 0), (o.pendingProps = l))
                            : (o = _f(l, i, 0, null)),
                        (e = bf(e, i, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = bu(n)),
                        (t.memoizedState = yu),
                        e)
                      : wu(t, l))
        );
    if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated))
        return (function (e, t, n, r, i, a, o) {
            if (n)
                return 256 & t.flags
                    ? ((t.flags &= -257), ku(e, t, o, (r = Gs(Error(Ue(422))))))
                    : null !== t.memoizedState
                      ? ((t.child = e.child), (t.flags |= 128), null)
                      : ((a = r.fallback),
                        (i = t.mode),
                        (r = _f({ mode: 'visible', children: r.children }, i, 0, null)),
                        ((a = bf(a, i, o, null)).flags |= 2),
                        (r.return = t),
                        (a.return = t),
                        (r.sibling = a),
                        (t.child = r),
                        0 != (1 & t.mode) && il(t, e.child, null, o),
                        (t.child.memoizedState = bu(o)),
                        (t.memoizedState = yu),
                        a);
            if (0 == (1 & t.mode)) return ku(e, t, o, null);
            if ('$!' === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset)) var l = r.dgst;
                return ((r = l), ku(e, t, o, (r = Gs((a = Error(Ue(419))), r, void 0))));
            }
            if (((l = 0 != (o & e.childLanes)), nu || l)) {
                if (null !== (r = dc)) {
                    switch (o & -o) {
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
                    0 !== (i = 0 != (i & (r.suspendedLanes | o)) ? 0 : i) &&
                        i !== a.retryLane &&
                        ((a.retryLane = i), yl(e, i), Vc(r, e, i, -1));
                }
                return (Jc(), ku(e, t, o, (r = Gs(Error(Ue(421))))));
            }
            return '$?' === i.data
                ? ((t.flags |= 128), (t.child = e.child), (t = ff.bind(null, e)), (i._reactRetry = t), null)
                : ((e = a.treeContext),
                  (Bo = Ha(i.nextSibling)),
                  (Fo = t),
                  (Uo = !0),
                  ($o = null),
                  null !== e &&
                      ((No[jo++] = Lo), (No[jo++] = Io), (No[jo++] = Ro), (Lo = e.id), (Io = e.overflow), (Ro = t)),
                  (t = wu(t, r.children)),
                  (t.flags |= 4096),
                  t);
        })(e, t, l, i, r, a, n);
    if (o) {
        ((o = i.fallback), (l = t.mode), (r = (a = e.child).sibling));
        var s = { mode: 'hidden', children: i.children };
        return (
            0 == (1 & l) && t.child !== a
                ? (((i = t.child).childLanes = 0), (i.pendingProps = s), (t.deletions = null))
                : ((i = gf(a, s)).subtreeFlags = 14680064 & a.subtreeFlags),
            null !== r ? (o = gf(r, o)) : ((o = bf(o, l, n, null)).flags |= 2),
            (o.return = t),
            (i.return = t),
            (i.sibling = o),
            (t.child = i),
            (i = o),
            (o = t.child),
            (l =
                null === (l = e.child.memoizedState)
                    ? bu(n)
                    : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
            (o.memoizedState = l),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = yu),
            i
        );
    }
    return (
        (e = (o = e.child).sibling),
        (i = gf(o, { mode: 'visible', children: i.children })),
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
        null !== r && Jo(r),
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
    var a = e.memoizedState;
    null === a
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.renderingStartTime = 0),
          (a.last = r),
          (a.tail = n),
          (a.tailMode = i));
}
function Ou(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
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
    if ((uo(zl, r), 0 == (1 & t.mode))) t.memoizedState = null;
    else
        switch (i) {
            case 'forwards':
                for (n = t.child, i = null; null !== n; )
                    (null !== (e = n.alternate) && null === Dl(e) && (i = n), (n = n.sibling));
                (null === (n = i) ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
                    xu(t, !1, i, n, a));
                break;
            case 'backwards':
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                    if (null !== (e = i.alternate) && null === Dl(e)) {
                        t.child = i;
                        break;
                    }
                    ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
                }
                xu(t, !0, n, null, a);
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
    if (!Uo)
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
    switch ((Vo(t), t.tag)) {
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
            return (mo(t.type) && go(), Au(t), null);
        case 3:
            return (
                (r = t.stateNode),
                Ll(),
                so(po),
                so(fo),
                Fl(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                    (Qo(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                          ((t.flags |= 1024), null !== $o && ($c($o), ($o = null)))),
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
                if (((e = jl(Al.current)), Qo(t))) {
                    ((r = t.stateNode), (n = t.type));
                    var a = t.memoizedProps;
                    switch (((r[Qa] = t), (r[Ya] = a), (e = 0 != (1 & t.mode)), n)) {
                        case 'dialog':
                            (ka('cancel', r), ka('close', r));
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            ka('load', r);
                            break;
                        case 'video':
                        case 'audio':
                            for (i = 0; i < ya.length; i++) ka(ya[i], r);
                            break;
                        case 'source':
                            ka('error', r);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            (ka('error', r), ka('load', r));
                            break;
                        case 'details':
                            ka('toggle', r);
                            break;
                        case 'input':
                            (Rt(r, a), ka('invalid', r));
                            break;
                        case 'select':
                            ((r._wrapperState = { wasMultiple: !!a.multiple }), ka('invalid', r));
                            break;
                        case 'textarea':
                            (Bt(r, a), ka('invalid', r));
                    }
                    for (var o in (tn(n, a), (i = null), a))
                        if (a.hasOwnProperty(o)) {
                            var l = a[o];
                            'children' === o
                                ? 'string' == typeof l
                                    ? r.textContent !== l &&
                                      (!0 !== a.suppressHydrationWarning && Ia(r.textContent, l, e),
                                      (i = ['children', l]))
                                    : 'number' == typeof l &&
                                      r.textContent !== '' + l &&
                                      (!0 !== a.suppressHydrationWarning && Ia(r.textContent, l, e),
                                      (i = ['children', '' + l]))
                                : We.hasOwnProperty(o) && null != l && 'onScroll' === o && ka('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            (At(r), Mt(r, a, !0));
                            break;
                        case 'textarea':
                            (At(r), $t(r));
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            'function' == typeof a.onClick && (r.onclick = Ma);
                    }
                    ((r = i), (t.updateQueue = r), null !== r && (t.flags |= 4));
                } else {
                    ((o = 9 === i.nodeType ? i : i.ownerDocument),
                        'http://www.w3.org/1999/xhtml' === e && (e = Wt(n)),
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
                        (e[Qa] = t),
                        (e[Ya] = r),
                        hu(e, t, !1, !1),
                        (t.stateNode = e));
                    e: {
                        switch (((o = nn(n, r)), n)) {
                            case 'dialog':
                                (ka('cancel', e), ka('close', e), (i = r));
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                (ka('load', e), (i = r));
                                break;
                            case 'video':
                            case 'audio':
                                for (i = 0; i < ya.length; i++) ka(ya[i], e);
                                i = r;
                                break;
                            case 'source':
                                (ka('error', e), (i = r));
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                (ka('error', e), ka('load', e), (i = r));
                                break;
                            case 'details':
                                (ka('toggle', e), (i = r));
                                break;
                            case 'input':
                                (Rt(e, r), (i = jt(e, r)), ka('invalid', e));
                                break;
                            case 'option':
                            default:
                                i = r;
                                break;
                            case 'select':
                                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (i = _t({}, r, { value: void 0 })),
                                    ka('invalid', e));
                                break;
                            case 'textarea':
                                (Bt(e, r), (i = Ft(e, r)), ka('invalid', e));
                        }
                        for (a in (tn(n, i), (l = i)))
                            if (l.hasOwnProperty(a)) {
                                var s = l[a];
                                'style' === a
                                    ? Zt(e, s)
                                    : 'dangerouslySetInnerHTML' === a
                                      ? null != (s = s ? s.__html : void 0) && Kt(e, s)
                                      : 'children' === a
                                        ? 'string' == typeof s
                                            ? ('textarea' !== n || '' !== s) && Qt(e, s)
                                            : 'number' == typeof s && Qt(e, '' + s)
                                        : 'suppressContentEditableWarning' !== a &&
                                          'suppressHydrationWarning' !== a &&
                                          'autoFocus' !== a &&
                                          (We.hasOwnProperty(a)
                                              ? null != s && 'onScroll' === a && ka('scroll', e)
                                              : null != s && nt(e, a, s, o));
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
                                    null != (a = r.value)
                                        ? Vt(e, !!r.multiple, a, !1)
                                        : null != r.defaultValue && Vt(e, !!r.multiple, r.defaultValue, !0));
                                break;
                            default:
                                'function' == typeof i.onClick && (e.onclick = Ma);
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
                if (((n = jl(Nl.current)), jl(Al.current), Qo(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Qa] = t),
                        (a = r.nodeValue !== n) && null !== (e = Fo))
                    )
                        switch (e.tag) {
                            case 3:
                                Ia(r.nodeValue, n, 0 != (1 & e.mode));
                                break;
                            case 5:
                                !0 !== e.memoizedProps.suppressHydrationWarning &&
                                    Ia(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                    a && (t.flags |= 4);
                } else (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Qa] = t), (t.stateNode = r));
            }
            return (Au(t), null);
        case 13:
            if (
                (so(zl),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (Uo && null !== Bo && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                    (Yo(), Xo(), (t.flags |= 98560), (a = !1));
                else if (((a = Qo(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!a) throw Error(Ue(318));
                        if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(Ue(317));
                        a[Qa] = t;
                    } else (Xo(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                    (Au(t), (a = !1));
                } else (null !== $o && ($c($o), ($o = null)), (a = !0));
                if (!a) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) && (null === e || 0 != (1 & zl.current) ? 0 === gc && (gc = 3) : Jc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Au(t),
                  null);
        case 4:
            return (Ll(), vu(e, t), null === e && Oa(t.stateNode.containerInfo), Au(t), null);
        case 10:
            return (fl(t.type._context), Au(t), null);
        case 19:
            if ((so(zl), null === (a = t.memoizedState))) return (Au(t), null);
            if (((r = 0 != (128 & t.flags)), null === (o = a.rendering)))
                if (r) Cu(a, !1);
                else {
                    if (0 !== gc || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (o = Dl(e))) {
                                for (
                                    t.flags |= 128,
                                        Cu(a, !1),
                                        null !== (r = o.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    null !== n;

                                )
                                    ((e = r),
                                        ((a = n).flags &= 14680066),
                                        null === (o = a.alternate)
                                            ? ((a.childLanes = 0),
                                              (a.lanes = e),
                                              (a.child = null),
                                              (a.subtreeFlags = 0),
                                              (a.memoizedProps = null),
                                              (a.memoizedState = null),
                                              (a.updateQueue = null),
                                              (a.dependencies = null),
                                              (a.stateNode = null))
                                            : ((a.childLanes = o.childLanes),
                                              (a.lanes = o.lanes),
                                              (a.child = o.child),
                                              (a.subtreeFlags = 0),
                                              (a.deletions = null),
                                              (a.memoizedProps = o.memoizedProps),
                                              (a.memoizedState = o.memoizedState),
                                              (a.updateQueue = o.updateQueue),
                                              (a.type = o.type),
                                              (e = o.dependencies),
                                              (a.dependencies =
                                                  null === e
                                                      ? null
                                                      : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling));
                                return (uo(zl, (1 & zl.current) | 2), t.child);
                            }
                            e = e.sibling;
                        }
                    null !== a.tail && In() > Oc && ((t.flags |= 128), (r = !0), Cu(a, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = Dl(o))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            Cu(a, !0),
                            null === a.tail && 'hidden' === a.tailMode && !o.alternate && !Uo)
                        )
                            return (Au(t), null);
                    } else
                        2 * In() - a.renderingStartTime > Oc &&
                            1073741824 !== n &&
                            ((t.flags |= 128), (r = !0), Cu(a, !1), (t.lanes = 4194304));
                a.isBackwards
                    ? ((o.sibling = t.child), (t.child = o))
                    : (null !== (n = a.last) ? (n.sibling = o) : (t.child = o), (a.last = o));
            }
            return null !== a.tail
                ? ((t = a.tail),
                  (a.rendering = t),
                  (a.tail = t.sibling),
                  (a.renderingStartTime = In()),
                  (t.sibling = null),
                  (n = zl.current),
                  uo(zl, r ? (1 & n) | 2 : 1 & n),
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
    switch ((Vo(t), t.tag)) {
        case 1:
            return (mo(t.type) && go(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null);
        case 3:
            return (
                Ll(),
                so(po),
                so(fo),
                Fl(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 5:
            return (Ml(t), null);
        case 13:
            if ((so(zl), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(Ue(340));
                Xo();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return (so(zl), null);
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
            var a,
                o = null;
            switch (n) {
                case 'input':
                    ((i = jt(e, i)), (r = jt(e, r)), (o = []));
                    break;
                case 'select':
                    ((i = _t({}, i, { value: void 0 })), (r = _t({}, r, { value: void 0 })), (o = []));
                    break;
                case 'textarea':
                    ((i = Ft(e, i)), (r = Ft(e, r)), (o = []));
                    break;
                default:
                    'function' != typeof i.onClick && 'function' == typeof r.onClick && (e.onclick = Ma);
            }
            for (u in (tn(n, r), (n = null), i))
                if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && null != i[u])
                    if ('style' === u) {
                        var l = i[u];
                        for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
                    } else
                        'dangerouslySetInnerHTML' !== u &&
                            'children' !== u &&
                            'suppressContentEditableWarning' !== u &&
                            'suppressHydrationWarning' !== u &&
                            'autoFocus' !== u &&
                            (We.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
            for (u in r) {
                var s = r[u];
                if (((l = null != i ? i[u] : void 0), r.hasOwnProperty(u) && s !== l && (null != s || null != l)))
                    if ('style' === u)
                        if (l) {
                            for (a in l)
                                !l.hasOwnProperty(a) || (s && s.hasOwnProperty(a)) || (n || (n = {}), (n[a] = ''));
                            for (a in s) s.hasOwnProperty(a) && l[a] !== s[a] && (n || (n = {}), (n[a] = s[a]));
                        } else (n || (o || (o = []), o.push(u, n)), (n = s));
                    else
                        'dangerouslySetInnerHTML' === u
                            ? ((s = s ? s.__html : void 0),
                              (l = l ? l.__html : void 0),
                              null != s && l !== s && (o = o || []).push(u, s))
                            : 'children' === u
                              ? ('string' != typeof s && 'number' != typeof s) || (o = o || []).push(u, '' + s)
                              : 'suppressContentEditableWarning' !== u &&
                                'suppressHydrationWarning' !== u &&
                                (We.hasOwnProperty(u)
                                    ? (null != s && 'onScroll' === u && ka('scroll', e), o || l === s || (o = []))
                                    : (o = o || []).push(u, s));
            }
            n && (o = o || []).push('style', n);
            var u = o;
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
                var a = i.destroy;
                ((i.destroy = void 0), void 0 !== a && zu(t, n, a));
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
            (delete t[Qa], delete t[Ya], delete t[Ja], delete t[Za], delete t[eo]),
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
function qu(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
        ((e = e.stateNode),
            t
                ? 8 === n.nodeType
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Ma)));
    else if (4 !== r && null !== (e = e.child))
        for (qu(e, t, n), e = e.sibling; null !== e; ) (qu(e, t, n), (e = e.sibling));
}
function Hu(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (4 !== r && null !== (e = e.child))
        for (Hu(e, t, n), e = e.sibling; null !== e; ) (Hu(e, t, n), (e = e.sibling));
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
                      8 === e.nodeType ? qa(e.parentNode, n) : 1 === e.nodeType && qa(e, n),
                      Er(e))
                    : qa(Gu, n.stateNode));
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
                    var a = i,
                        o = a.destroy;
                    ((a = a.tag), void 0 !== o && (0 != (2 & a) || 0 != (4 & a)) && zu(n, t, o), (i = i.next));
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
function Ju(e, t) {
    var n = t.deletions;
    if (null !== n)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var a = e,
                    o = t,
                    l = o;
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
                (Yu(a, o, i), (Gu = null), (Ku = !1));
                var s = i.alternate;
                (null !== s && (s.return = null), (i.return = null));
            } catch (u) {
                sf(i, t, u);
            }
        }
    if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) (Zu(t, e), (t = t.sibling));
}
function Zu(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Ju(t, e), ec(e), 4 & r)) {
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
            (Ju(t, e), ec(e), 512 & r && null !== n && Mu(n, n.return));
            break;
        case 5:
            if ((Ju(t, e), ec(e), 512 & r && null !== n && Mu(n, n.return), 32 & e.flags)) {
                var i = e.stateNode;
                try {
                    Qt(i, '');
                } catch (v) {
                    sf(e, e.return, v);
                }
            }
            if (4 & r && null != (i = e.stateNode)) {
                var a = e.memoizedProps,
                    o = null !== n ? n.memoizedProps : a,
                    l = e.type,
                    s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                    try {
                        ('input' === l && 'radio' === a.type && null != a.name && Lt(i, a), nn(l, o));
                        var u = nn(l, a);
                        for (o = 0; o < s.length; o += 2) {
                            var c = s[o],
                                f = s[o + 1];
                            'style' === c
                                ? Zt(i, f)
                                : 'dangerouslySetInnerHTML' === c
                                  ? Kt(i, f)
                                  : 'children' === c
                                    ? Qt(i, f)
                                    : nt(i, c, f, u);
                        }
                        switch (l) {
                            case 'input':
                                It(i, a);
                                break;
                            case 'textarea':
                                Ut(i, a);
                                break;
                            case 'select':
                                var d = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!a.multiple;
                                var p = a.value;
                                null != p
                                    ? Vt(i, !!a.multiple, p, !1)
                                    : d !== !!a.multiple &&
                                      (null != a.defaultValue
                                          ? Vt(i, !!a.multiple, a.defaultValue, !0)
                                          : Vt(i, !!a.multiple, a.multiple ? [] : '', !1));
                        }
                        i[Ya] = a;
                    } catch (v) {
                        sf(e, e.return, v);
                    }
            }
            break;
        case 6:
            if ((Ju(t, e), ec(e), 4 & r)) {
                if (null === e.stateNode) throw Error(Ue(162));
                ((i = e.stateNode), (a = e.memoizedProps));
                try {
                    i.nodeValue = a;
                } catch (v) {
                    sf(e, e.return, v);
                }
            }
            break;
        case 3:
            if ((Ju(t, e), ec(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                    Er(t.containerInfo);
                } catch (v) {
                    sf(e, e.return, v);
                }
            break;
        case 4:
        default:
            (Ju(t, e), ec(e));
            break;
        case 13:
            (Ju(t, e),
                ec(e),
                8192 & (i = e.child).flags &&
                    ((a = null !== i.memoizedState),
                    (i.stateNode.isHidden = a),
                    !a || (null !== i.alternate && null !== i.alternate.memoizedState) || (xc = In())),
                4 & r && Xu(e));
            break;
        case 22:
            if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Ru = (u = Ru) || c), Ju(t, e), (Ru = u)) : Ju(t, e),
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
                                        ? 'function' == typeof (a = i.style).setProperty
                                            ? a.setProperty('display', 'none', 'important')
                                            : (a.display = 'none')
                                        : ((l = f.stateNode),
                                          (o =
                                              null != (s = f.memoizedProps.style) && s.hasOwnProperty('display')
                                                  ? s.display
                                                  : null),
                                          (l.style.display = Jt('display', o))));
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
            (Ju(t, e), ec(e), 4 & r && Xu(e));
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
                    (32 & r.flags && (Qt(i, ''), (r.flags &= -33)), Hu(e, Wu(e), i));
                    break;
                case 3:
                case 4:
                    var a = r.stateNode.containerInfo;
                    qu(e, Wu(e), a);
                    break;
                default:
                    throw Error(Ue(161));
            }
        } catch (o) {
            sf(e, e.return, o);
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
            a = i.child;
        if (22 === i.tag && r) {
            var o = null !== i.memoizedState || ju;
            if (!o) {
                var l = i.alternate,
                    s = (null !== l && null !== l.memoizedState) || Ru;
                l = ju;
                var u = Ru;
                if (((ju = o), (Ru = s) && !u))
                    for (Iu = i; null !== Iu; )
                        ((s = (o = Iu).child),
                            22 === o.tag && null !== o.memoizedState
                                ? ac(i)
                                : null !== s
                                  ? ((s.return = o), (Iu = s))
                                  : ac(i));
                for (; null !== a; ) ((Iu = a), nc(a), (a = a.sibling));
                ((Iu = i), (ju = l), (Ru = u));
            }
            rc(e);
        } else 0 != (8772 & i.subtreeFlags) && null !== a ? ((a.return = i), (Iu = a)) : rc(e);
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
                            var a = t.updateQueue;
                            null !== a && Pl(t, a, r);
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
                                Pl(t, o, n);
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
function ac(e) {
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
                    var a = t.return;
                    try {
                        Bu(t);
                    } catch (s) {
                        sf(t, a, s);
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Bu(t);
                    } catch (s) {
                        sf(t, o, s);
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
var oc,
    lc = Math.ceil,
    sc = rt.ReactCurrentDispatcher,
    uc = rt.ReactCurrentOwner,
    cc = rt.ReactCurrentBatchConfig,
    fc = 0,
    dc = null,
    pc = null,
    hc = 0,
    vc = 0,
    mc = lo(0),
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
          : null !== Zo.transition
            ? (0 === Mc && (Mc = Zn()), Mc)
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
            1 === n && 0 === fc && 0 == (1 & t.mode) && ((Oc = In() + 500), So && Eo())));
}
function Fc(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
            var o = 31 - Wn(a),
                l = 1 << o,
                s = i[o];
            (-1 === s ? (0 != (l & n) && 0 == (l & r)) || (i[o] = Xn(l, t)) : s <= t && (e.expiredLanes |= l),
                (a &= ~l));
        }
    })(e, t);
    var r = Yn(e, e === dc ? hc : 0);
    if (0 === r) (null !== n && jn(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && jn(n), 1 === t))
            (0 === e.tag
                ? (function (e) {
                      ((So = !0), Oo(e));
                  })(qc.bind(null, e))
                : Oo(qc.bind(null, e)),
                $a(function () {
                    0 == (6 & fc) && Eo();
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
    if (of() && e.callbackNode !== n) return null;
    var r = Yn(e, e === dc ? hc : 0);
    if (0 === r) return null;
    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = Zc(e, r);
    else {
        t = r;
        var i = fc;
        fc |= 2;
        var a = Xc();
        for ((dc === e && hc === t) || ((Ec = null), (Oc = In() + 500), Qc(e, t)); ; )
            try {
                tf();
                break;
            } catch (l) {
                Yc(e, l);
            }
        (cl(), (sc.current = a), (fc = i), null !== pc ? (t = 0) : ((dc = null), (hc = 0), (t = gc)));
    }
    if (0 !== t) {
        if ((2 === t && 0 !== (i = Jn(e)) && ((r = i), (t = Uc(e, i))), 1 === t))
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
                                            a = i.getSnapshot;
                                        i = i.value;
                                        try {
                                            if (!Wi(a(), i)) return !1;
                                        } catch (o) {
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
                    (2 === (t = Zc(e, r)) && 0 !== (a = Jn(e)) && ((r = a), (t = Uc(e, a))), 1 === t))
            )
                throw ((n = yc), Qc(e, 0), Wc(e, r), Fc(e, In()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(Ue(345));
                case 2:
                case 5:
                    af(e, Sc, Ec);
                    break;
                case 3:
                    if ((Wc(e, r), (130023424 & r) === r && 10 < (t = xc + 500 - In()))) {
                        if (0 !== Yn(e, 0)) break;
                        if (((i = e.suspendedLanes) & r) !== r) {
                            (zc(), (e.pingedLanes |= e.suspendedLanes & i));
                            break;
                        }
                        e.timeoutHandle = Fa(af.bind(null, e, Sc, Ec), t);
                        break;
                    }
                    af(e, Sc, Ec);
                    break;
                case 4:
                    if ((Wc(e, r), (4194240 & r) === r)) break;
                    for (t = e.eventTimes, i = -1; 0 < r; ) {
                        var o = 31 - Wn(r);
                        ((a = 1 << o), (o = t[o]) > i && (i = o), (r &= ~a));
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
                        e.timeoutHandle = Fa(af.bind(null, e, Sc, Ec), r);
                        break;
                    }
                    af(e, Sc, Ec);
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
        2 !== (e = Zc(e, t)) && ((t = Sc), (Sc = n), null !== t && $c(t)),
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
function qc(e) {
    if (0 != (6 & fc)) throw Error(Ue(327));
    of();
    var t = Yn(e, 0);
    if (0 == (1 & t)) return (Fc(e, In()), null);
    var n = Zc(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = Jn(e);
        0 !== r && ((t = r), (n = Uc(e, r)));
    }
    if (1 === n) throw ((n = yc), Qc(e, 0), Wc(e, t), Fc(e, In()), n);
    if (6 === n) throw Error(Ue(345));
    return ((e.finishedWork = e.current.alternate), (e.finishedLanes = t), af(e, Sc, Ec), Fc(e, In()), null);
}
function Hc(e, t) {
    var n = fc;
    fc |= 1;
    try {
        return e(t);
    } finally {
        0 === (fc = n) && ((Oc = In() + 500), So && Eo());
    }
}
function Gc(e) {
    null !== Nc && 0 === Nc.tag && 0 == (6 & fc) && of();
    var t = fc;
    fc |= 1;
    var n = cc.transition,
        r = rr;
    try {
        if (((cc.transition = null), (rr = 1), e)) return e();
    } finally {
        ((rr = r), (cc.transition = n), 0 == (6 & (fc = t)) && Eo());
    }
}
function Kc() {
    ((vc = mc.current), so(mc));
}
function Qc(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), Ba(n)), null !== pc))
        for (n = pc.return; null !== n; ) {
            var r = n;
            switch ((Vo(r), r.tag)) {
                case 1:
                    null != (r = r.type.childContextTypes) && go();
                    break;
                case 3:
                    (Ll(), so(po), so(fo), Fl());
                    break;
                case 5:
                    Ml(r);
                    break;
                case 4:
                    Ll();
                    break;
                case 13:
                case 19:
                    so(zl);
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
                    a = n.pending;
                if (null !== a) {
                    var o = a.next;
                    ((a.next = i), (r.next = o));
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
                (Hl = ql = Wl = null),
                (Kl = !1),
                (Ql = 0),
                (uc.current = null),
                null === n || null === n.return)
            ) {
                ((gc = 1), (yc = t), (pc = null));
                break;
            }
            e: {
                var a = e,
                    o = n.return,
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
                    var p = Zs(o);
                    if (null !== p) {
                        ((p.flags &= -257), eu(p, o, l, 0, t), 1 & p.mode && Js(a, u, t), (s = u));
                        var h = (t = p).updateQueue;
                        if (null === h) {
                            var v = new Set();
                            (v.add(s), (t.updateQueue = v));
                        } else h.add(s);
                        break e;
                    }
                    if (0 == (1 & t)) {
                        (Js(a, u, t), Jc());
                        break e;
                    }
                    s = Error(Ue(426));
                } else if (Uo && 1 & l.mode) {
                    var m = Zs(o);
                    if (null !== m) {
                        (0 == (65536 & m.flags) && (m.flags |= 256), eu(m, o, l, 0, t), Jo(Hs(s, l)));
                        break e;
                    }
                }
                ((a = s = Hs(s, l)), 4 !== gc && (gc = 2), null === kc ? (kc = [a]) : kc.push(a), (a = o));
                do {
                    switch (a.tag) {
                        case 3:
                            ((a.flags |= 65536), (t &= -t), (a.lanes |= t), Ol(a, Ys(0, s, t)));
                            break e;
                        case 1:
                            l = s;
                            var g = a.type,
                                y = a.stateNode;
                            if (
                                0 == (128 & a.flags) &&
                                ('function' == typeof g.getDerivedStateFromError ||
                                    (null !== y &&
                                        'function' == typeof y.componentDidCatch &&
                                        (null === Ac || !Ac.has(y))))
                            ) {
                                ((a.flags |= 65536), (t &= -t), (a.lanes |= t), Ol(a, Xs(a, l, t)));
                                break e;
                            }
                    }
                    a = a.return;
                } while (null !== a);
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
function Jc() {
    ((0 !== gc && 3 !== gc && 2 !== gc) || (gc = 4),
        null === dc || (0 == (268435455 & bc) && 0 == (268435455 & _c)) || Wc(dc, hc));
}
function Zc(e, t) {
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
    var t = oc(e.alternate, e, vc);
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
function af(e, t, n) {
    var r = rr,
        i = cc.transition;
    try {
        ((cc.transition = null),
            (rr = 1),
            (function (e, t, n, r) {
                do {
                    of();
                } while (null !== Nc);
                if (0 != (6 & fc)) throw Error(Ue(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(Ue(177));
                ((e.callbackNode = null), (e.callbackPriority = 0));
                var a = n.lanes | n.childLanes;
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
                                a = 1 << i;
                            ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a));
                        }
                    })(e, a),
                    e === dc && ((pc = dc = null), (hc = 0)),
                    (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                        Tc ||
                        ((Tc = !0),
                        pf(Vn, function () {
                            return (of(), null);
                        })),
                    (a = 0 != (15990 & n.flags)),
                    0 != (15990 & n.subtreeFlags) || a)
                ) {
                    ((a = cc.transition), (cc.transition = null));
                    var o = rr;
                    rr = 1;
                    var l = fc;
                    ((fc |= 4),
                        (uc.current = null),
                        (function (e, t) {
                            if (((za = Cr), Yi((e = Qi())))) {
                                if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
                                else
                                    e: {
                                        var r =
                                            (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection &&
                                            n.getSelection();
                                        if (r && 0 !== r.rangeCount) {
                                            n = r.anchorNode;
                                            var i = r.anchorOffset,
                                                a = r.focusNode;
                                            r = r.focusOffset;
                                            try {
                                                (n.nodeType, a.nodeType);
                                            } catch (_) {
                                                n = null;
                                                break e;
                                            }
                                            var o = 0,
                                                l = -1,
                                                s = -1,
                                                u = 0,
                                                c = 0,
                                                f = e,
                                                d = null;
                                            t: for (;;) {
                                                for (
                                                    var p;
                                                    f !== n || (0 !== i && 3 !== f.nodeType) || (l = o + i),
                                                        f !== a || (0 !== r && 3 !== f.nodeType) || (s = o + r),
                                                        3 === f.nodeType && (o += f.nodeValue.length),
                                                        null !== (p = f.firstChild);

                                                )
                                                    ((d = f), (f = p));
                                                for (;;) {
                                                    if (f === e) break t;
                                                    if (
                                                        (d === n && ++u === i && (l = o),
                                                        d === a && ++c === r && (s = o),
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
                            for (Da = { focusedElem: e, selectionRange: n }, Cr = !1, Iu = t; null !== Iu; )
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
                        Zu(n, e),
                        Xi(Da),
                        (Cr = !!za),
                        (Da = za = null),
                        (e.current = n),
                        tc(n),
                        Ln(),
                        (fc = l),
                        (rr = o),
                        (cc.transition = a));
                } else e.current = n;
                if (
                    (Tc && ((Tc = !1), (Nc = e), (jc = i)),
                    (a = e.pendingLanes),
                    0 === a && (Ac = null),
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
                (0 != (1 & jc) && 0 !== e.tag && of(),
                    (a = e.pendingLanes),
                    0 != (1 & a) ? (e === Lc ? Rc++ : ((Rc = 0), (Lc = e))) : (Rc = 0),
                    Eo());
            })(e, t, n, r));
    } finally {
        ((cc.transition = i), (rr = r));
    }
    return null;
}
function of() {
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
                    var a = Iu,
                        o = a.child;
                    if (0 != (16 & Iu.flags)) {
                        var l = a.deletions;
                        if (null !== l) {
                            for (var s = 0; s < l.length; s++) {
                                var u = l[s];
                                for (Iu = u; null !== Iu; ) {
                                    var c = Iu;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Vu(8, c, a);
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
                            var h = a.alternate;
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
                            Iu = a;
                        }
                    }
                    if (0 != (2064 & a.subtreeFlags) && null !== o) ((o.return = a), (Iu = o));
                    else
                        e: for (; null !== Iu; ) {
                            if (0 != (2048 & (a = Iu).flags))
                                switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Vu(9, a, a.return);
                                }
                            var g = a.sibling;
                            if (null !== g) {
                                ((g.return = a.return), (Iu = g));
                                break e;
                            }
                            Iu = a.return;
                        }
                }
                var y = e.current;
                for (Iu = y; null !== Iu; ) {
                    var b = (o = Iu).child;
                    if (0 != (2064 & o.subtreeFlags) && null !== b) ((b.return = o), (Iu = b));
                    else
                        e: for (o = y; null !== Iu; ) {
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
                            if (l === o) {
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
                if (((fc = i), Eo(), $n && 'function' == typeof $n.onPostCommitFiberRoot))
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
    ((e = Sl(e, (t = Ys(0, (t = Hs(n, t)), 1)), 1)), (t = zc()), null !== e && (tr(e, 1, t), Fc(e, t)));
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
                    ((t = Sl(t, (e = Xs(t, (e = Hs(n, e)), 1)), 1)), (e = zc()), null !== t && (tr(t, 1, e), Fc(t, e)));
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
function yf(e, t, n, r, i, a) {
    var o = 2;
    if (((r = e), 'function' == typeof e)) mf(e) && (o = 1);
    else if ('string' == typeof e) o = 5;
    else
        e: switch (e) {
            case ot:
                return bf(n.children, i, a, t);
            case lt:
                ((o = 8), (i |= 8));
                break;
            case st:
                return (((e = vf(12, n, t, 2 | i)).elementType = st), (e.lanes = a), e);
            case dt:
                return (((e = vf(13, n, t, i)).elementType = dt), (e.lanes = a), e);
            case pt:
                return (((e = vf(19, n, t, i)).elementType = pt), (e.lanes = a), e);
            case mt:
                return _f(n, i, a, t);
            default:
                if ('object' == typeof e && null !== e)
                    switch (e.$$typeof) {
                        case ut:
                            o = 10;
                            break e;
                        case ct:
                            o = 9;
                            break e;
                        case ft:
                            o = 11;
                            break e;
                        case ht:
                            o = 14;
                            break e;
                        case vt:
                            ((o = 16), (r = null));
                            break e;
                    }
                throw Error(Ue(130, null == e ? e : typeof e, ''));
        }
    return (((t = vf(o, n, t, i)).elementType = e), (t.type = r), (t.lanes = a), t);
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
function xf(e, t, n, r, i, a, o, l, s) {
    return (
        (e = new Sf(e, t, n, l, s)),
        1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
        (a = vf(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (a.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        _l(a),
        e
    );
}
function Of(e) {
    if (!e) return co;
    e: {
        if (En((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(Ue(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (mo(t.type)) {
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
        if (mo(n)) return bo(e, n, t);
    }
    return t;
}
function Ef(e, t, n, r, i, a, o, l, s) {
    return (
        ((e = xf(n, r, !0, e, 0, a, 0, l, s)).context = Of(null)),
        (n = e.current),
        ((a = kl((r = zc()), (i = Dc(n)))).callback = null != t ? t : null),
        Sl(n, a, i),
        (e.current.lanes = i),
        tr(e, i, r),
        Fc(e, r),
        e
    );
}
function Pf(e, t, n, r) {
    var i = t.current,
        a = zc(),
        o = Dc(i);
    return (
        (n = Of(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = kl(a, o)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = Sl(i, t, o)) && (Vc(e, i, o, a), xl(e, i, o)),
        o
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
oc = function (e, t, n) {
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps || po.current) nu = !0;
        else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                    (nu = !1),
                    (function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                (du(t), Xo());
                                break;
                            case 5:
                                Il(t);
                                break;
                            case 1:
                                mo(t.type) && _o(t);
                                break;
                            case 4:
                                Rl(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context,
                                    i = t.memoizedProps.value;
                                (uo(ol, r._currentValue), (r._currentValue = i));
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState))
                                    return null !== r.dehydrated
                                        ? (uo(zl, 1 & zl.current), (t.flags |= 128), null)
                                        : 0 != (n & t.child.childLanes)
                                          ? _u(e, t, n)
                                          : (uo(zl, 1 & zl.current), null !== (e = Pu(e, t, n)) ? e.sibling : null);
                                uo(zl, 1 & zl.current);
                                break;
                            case 19:
                                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                    if (r) return Ou(e, t, n);
                                    t.flags |= 128;
                                }
                                if (
                                    (null !== (i = t.memoizedState) &&
                                        ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                                    uo(zl, zl.current),
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
    else ((nu = !1), Uo && 0 != (1048576 & t.flags) && zo(t, To, t.index));
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            (Eu(e, t), (e = t.pendingProps));
            var i = vo(t, fo.current);
            (pl(t, n), (i = Zl(null, t, r, e, i, n)));
            var a = es();
            return (
                (t.flags |= 1),
                'object' == typeof i && null !== i && 'function' == typeof i.render && void 0 === i.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      mo(r) ? ((a = !0), _o(t)) : (a = !1),
                      (t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null),
                      _l(t),
                      (i.updater = Bs),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      qs(t, r, e, n),
                      (t = fu(null, t, r, !0, a, n)))
                    : ((t.tag = 0), Uo && a && Do(t), ru(null, t, i, n), (t = t.child)),
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
                        t = au(null, t, r, Vs(r.type, e), n);
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
                ((r = t.pendingProps), (i = (a = t.memoizedState).element), wl(e, t), El(t, r, null, n));
                var o = t.memoizedState;
                if (((r = o.element), a.isDehydrated)) {
                    if (
                        ((a = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions,
                        }),
                        (t.updateQueue.baseState = a),
                        (t.memoizedState = a),
                        256 & t.flags)
                    ) {
                        t = pu(e, t, r, n, (i = Hs(Error(Ue(423)), t)));
                        break e;
                    }
                    if (r !== i) {
                        t = pu(e, t, r, n, (i = Hs(Error(Ue(424)), t)));
                        break e;
                    }
                    for (
                        Bo = Ha(t.stateNode.containerInfo.firstChild),
                            Fo = t,
                            Uo = !0,
                            $o = null,
                            n = al(t, null, r, n),
                            t.child = n;
                        n;

                    )
                        ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                    if ((Xo(), r === i)) {
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
                null === e && Go(t),
                (r = t.type),
                (i = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (o = i.children),
                Va(r, i) ? (o = null) : null !== a && Va(r, a) && (t.flags |= 32),
                su(e, t),
                ru(e, t, o, n),
                t.child
            );
        case 6:
            return (null === e && Go(t), null);
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
                    (a = t.memoizedProps),
                    (o = i.value),
                    uo(ol, r._currentValue),
                    (r._currentValue = o),
                    null !== a)
                )
                    if (Wi(a.value, o)) {
                        if (a.children === i.children && !po.current) {
                            t = Pu(e, t, n);
                            break e;
                        }
                    } else
                        for (null !== (a = t.child) && (a.return = t); null !== a; ) {
                            var l = a.dependencies;
                            if (null !== l) {
                                o = a.child;
                                for (var s = l.firstContext; null !== s; ) {
                                    if (s.context === r) {
                                        if (1 === a.tag) {
                                            (s = kl(-1, n & -n)).tag = 2;
                                            var u = a.updateQueue;
                                            if (null !== u) {
                                                var c = (u = u.shared).pending;
                                                (null === c ? (s.next = s) : ((s.next = c.next), (c.next = s)),
                                                    (u.pending = s));
                                            }
                                        }
                                        ((a.lanes |= n),
                                            null !== (s = a.alternate) && (s.lanes |= n),
                                            dl(a.return, n, t),
                                            (l.lanes |= n));
                                        break;
                                    }
                                    s = s.next;
                                }
                            } else if (10 === a.tag) o = a.type === t.type ? null : a.child;
                            else if (18 === a.tag) {
                                if (null === (o = a.return)) throw Error(Ue(341));
                                ((o.lanes |= n),
                                    null !== (l = o.alternate) && (l.lanes |= n),
                                    dl(o, n, t),
                                    (o = a.sibling));
                            } else o = a.child;
                            if (null !== o) o.return = a;
                            else
                                for (o = a; null !== o; ) {
                                    if (o === t) {
                                        o = null;
                                        break;
                                    }
                                    if (null !== (a = o.sibling)) {
                                        ((a.return = o.return), (o = a));
                                        break;
                                    }
                                    o = o.return;
                                }
                            a = o;
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
            return ((i = Vs((r = t.type), t.pendingProps)), au(e, t, r, (i = Vs(r.type, i)), n));
        case 15:
            return ou(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Vs(r, i)),
                Eu(e, t),
                (t.tag = 1),
                mo(r) ? ((e = !0), _o(t)) : (e = !1),
                pl(t, n),
                $s(t, r, i),
                qs(t, r, i, n),
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
    var a = n._reactRootContainer;
    if (a) {
        var o = a;
        if ('function' == typeof i) {
            var l = i;
            i = function () {
                var e = Cf(o);
                l.call(e);
            };
        }
        Pf(t, o, e, i);
    } else
        o = (function (e, t, n, r, i) {
            if (i) {
                if ('function' == typeof r) {
                    var a = r;
                    r = function () {
                        var e = Cf(o);
                        a.call(e);
                    };
                }
                var o = Ef(t, r, e, 0, null, !1, 0, '', Mf);
                return (
                    (e._reactRootContainer = o),
                    (e[Xa] = o.current),
                    Oa(8 === e.nodeType ? e.parentNode : e),
                    Gc(),
                    o
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
                (e[Xa] = s.current),
                Oa(8 === e.nodeType ? e.parentNode : e),
                Gc(function () {
                    Pf(t, s, n, r);
                }),
                s
            );
        })(n, t, e, i, r);
    return Cf(o);
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
                    (t[Xa] = null));
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
    (ar = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Qn(t.pendingLanes);
                    0 !== n && (nr(t, 1 | n), Fc(t, In()), 0 == (6 & fc) && ((Oc = In() + 500), Eo()));
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
    (or = function (e) {
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
    (on = function (e, t, n) {
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
                            var i = io(r);
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
    (dn = Hc),
    (pn = Gc));
var Df = { usingClientEntryPoint: !1, Events: [no, ro, io, cn, fn, Hc] },
    Vf = { findFiberByHostInstance: to, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
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
            return { $$typeof: at, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
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
            (e[Xa] = t.current),
            Oa(8 === e.nodeType ? e.parentNode : e),
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
            a = '',
            o = Nf;
        if (
            (null != n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
            (t = Ef(t, null, e, 1, null != n ? n : null, i, 0, a, o)),
            (e[Xa] = t.current),
            Oa(e),
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
                    ((e._reactRootContainer = null), (e[Xa] = null));
                });
            }),
            !0)
        );
    }),
    (Me.unstable_batchedUpdates = Hc),
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
var Uf = Ie.exports;
const $f = n(Uf);
var Wf = Uf;
((Le.createRoot = Wf.createRoot), (Le.hydrateRoot = Wf.hydrateRoot));
var qf,
    Hf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ((qf = Hf),
    (function () {
        var e = {}.hasOwnProperty;
        function t() {
            for (var n = [], r = 0; r < arguments.length; r++) {
                var i = arguments[r];
                if (i) {
                    var a = typeof i;
                    if ('string' === a || 'number' === a) n.push(i);
                    else if (Array.isArray(i)) {
                        if (i.length) {
                            var o = t.apply(null, i);
                            o && n.push(o);
                        }
                    } else if ('object' === a) {
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
        qf.exports ? ((t.default = t), (qf.exports = t)) : (window.classNames = t);
    })());
const Gf = n(Hf.exports);
function Kf(e) {
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
var Qf = {};
function Yf() {
    return 'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : Qf;
}
var Xf = Object.assign,
    Jf = Object.getOwnPropertyDescriptor,
    Zf = Object.defineProperty,
    ed = Object.prototype,
    td = [];
Object.freeze(td);
var nd = {};
Object.freeze(nd);
var rd = 'undefined' != typeof Proxy,
    id = Object.toString();
function ad() {
    rd || Kf('Proxy not available');
}
function od(e) {
    var t = !1;
    return function () {
        if (!t) return ((t = !0), e.apply(this, arguments));
    };
}
var ld = function () {};
function sd(e) {
    return 'function' == typeof e;
}
function ud(e) {
    switch (typeof e) {
        case 'string':
        case 'symbol':
        case 'number':
            return !0;
    }
    return !1;
}
function cd(e) {
    return null !== e && 'object' == typeof e;
}
function fd(e) {
    if (!cd(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (null == t) return !0;
    var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n.toString() === id;
}
function dd(e) {
    var t = null == e ? void 0 : e.constructor;
    return !!t && ('GeneratorFunction' === t.name || 'GeneratorFunction' === t.displayName);
}
function pd(e, t, n) {
    Zf(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function hd(e, t, n) {
    Zf(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function vd(e, t) {
    var n = 'isMobX' + e;
    return (
        (t.prototype[n] = !0),
        function (e) {
            return cd(e) && !0 === e[n];
        }
    );
}
function md(e) {
    return e instanceof Map;
}
function gd(e) {
    return e instanceof Set;
}
var yd = void 0 !== Object.getOwnPropertySymbols;
var bd =
    'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : yd
          ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            }
          : Object.getOwnPropertyNames;
function _d(e) {
    return null === e ? null : 'object' == typeof e ? '' + e : e;
}
function wd(e, t) {
    return ed.hasOwnProperty.call(e, t);
}
var kd =
    Object.getOwnPropertyDescriptors ||
    function (e) {
        var t = {};
        return (
            bd(e).forEach(function (n) {
                t[n] = Jf(e, n);
            }),
            t
        );
    };
function Sd(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(
                e,
                ((i = r.key),
                (a = void 0),
                'symbol' ==
                typeof (a = (function (e, t) {
                    if ('object' != typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t);
                        if ('object' != typeof r) return r;
                        throw new TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return String(e);
                })(i, 'string'))
                    ? a
                    : String(a)),
                r,
            ));
    }
    var i, a;
}
function xd(e, t, n) {
    return (t && Sd(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function Od() {
    return (
        (Od = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Od.apply(this, arguments)
    );
}
function Ed(e, t) {
    ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Pd(e, t));
}
function Pd(e, t) {
    return (Pd = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return ((e.__proto__ = t), e);
          })(e, t);
}
function Cd(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function Ad(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function Td(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
        Array.isArray(e) ||
        (n = (function (e, t) {
            if (e) {
                if ('string' == typeof e) return Ad(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? Ad(e, t)
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
var Nd = Symbol('mobx-stored-annotations');
function jd(e) {
    return Object.assign(function (t, n) {
        if (Ld(n)) return e.decorate_20223_(t, n);
        Rd(t, n, e);
    }, e);
}
function Rd(e, t, n) {
    (wd(e, Nd) || pd(e, Nd, Od({}, e[Nd])),
        (function (e) {
            return e.annotationType_ === Ud;
        })(n) || (e[Nd][t] = n));
}
function Ld(e) {
    return 'object' == typeof e && 'string' == typeof e.kind;
}
var Id = Symbol('mobx administration'),
    Md = (function () {
        function e(e) {
            (void 0 === e && (e = 'Atom'),
                (this.name_ = void 0),
                (this.isPendingUnobservation_ = !1),
                (this.isBeingObserved_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Bp.NOT_TRACKING_),
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
                return ph(this);
            }),
            (t.reportChanged = function () {
                (fh(), hh(this), dh());
            }),
            (t.toString = function () {
                return this.name_;
            }),
            e
        );
    })(),
    zd = vd('Atom', Md);
function Dd(e, t, n) {
    (void 0 === t && (t = ld), void 0 === n && (n = ld));
    var r,
        i = new Md(e);
    return (t !== ld && Fh(zh, i, t, r), n !== ld && Vh(i, n), i);
}
var Vd = {
    structural: function (e, t) {
        return sm(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
    shallow: function (e, t) {
        return sm(e, t, 1);
    },
};
function Fd(e, t, n) {
    return nv(e)
        ? e
        : Array.isArray(e)
          ? Op.array(e, { name: n })
          : fd(e)
            ? Op.object(e, void 0, { name: n })
            : md(e)
              ? Op.map(e, { name: n })
              : gd(e)
                ? Op.set(e, { name: n })
                : 'function' != typeof e || jh(e) || Zh(e)
                  ? e
                  : dd(e)
                    ? Xh(e)
                    : Th(n, e);
}
function Bd(e) {
    return e;
}
var Ud = 'override';
function $d(e, t) {
    return { annotationType_: e, options_: t, make_: Wd, extend_: qd, decorate_20223_: Hd };
}
function Wd(e, t, n, r) {
    var i;
    if (null != (i = this.options_) && i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (jh(n.value)) return 1;
    var a = Gd(e, this, t, n, !1);
    return (Zf(r, t, a), 2);
}
function qd(e, t, n, r) {
    var i = Gd(e, this, t, n);
    return e.defineProperty_(t, i, r);
}
function Hd(e, t) {
    var n = t.kind,
        r = t.name,
        i = t.addInitializer,
        a = this;
    if ('field' != n) {
        var o, l, s, u, c, f;
        if ('method' == n)
            return (
                jh(e) ||
                    ((l = e),
                    (e = Ip(
                        null != (s = null == (u = a.options_) ? void 0 : u.name) ? s : r.toString(),
                        l,
                        null != (c = null == (f = a.options_) ? void 0 : f.autoAction) && c,
                    ))),
                null != (o = this.options_) &&
                    o.bound &&
                    i(function () {
                        var e = this,
                            t = e[r].bind(e);
                        ((t.isMobxAction = !0), (e[r] = t));
                    }),
                e
            );
        Kf(
            "Cannot apply '" +
                a.annotationType_ +
                "' to '" +
                String(r) +
                "' (kind: " +
                n +
                "):\n'" +
                a.annotationType_ +
                "' can only be used on properties with a function value.",
        );
    } else
        i(function () {
            Rd(this, r, a);
        });
}
function Gd(e, t, n, r, i) {
    var a, o, l, s, u, c, f, d;
    (void 0 === i && (i = lh.safeDescriptors), (d = r), t.annotationType_, d.value);
    var p,
        h = r.value;
    null != (a = t.options_) && a.bound && (h = h.bind(null != (p = e.proxy_) ? p : e.target_));
    return {
        value: Ip(
            null != (o = null == (l = t.options_) ? void 0 : l.name) ? o : n.toString(),
            h,
            null != (s = null == (u = t.options_) ? void 0 : u.autoAction) && s,
            null != (c = t.options_) && c.bound ? (null != (f = e.proxy_) ? f : e.target_) : void 0,
        ),
        configurable: !i || e.isPlainObject_,
        enumerable: !1,
        writable: !i,
    };
}
function Kd(e, t) {
    return { annotationType_: e, options_: t, make_: Qd, extend_: Yd, decorate_20223_: Xd };
}
function Qd(e, t, n, r) {
    var i;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (
        null != (i = this.options_) &&
        i.bound &&
        (!wd(e.target_, t) || !Zh(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
    )
        return 0;
    if (Zh(n.value)) return 1;
    var a = Jd(e, this, t, n, !1, !1);
    return (Zf(r, t, a), 2);
}
function Yd(e, t, n, r) {
    var i,
        a = Jd(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
    return e.defineProperty_(t, a, r);
}
function Xd(e, t) {
    var n,
        r = t.name,
        i = t.addInitializer;
    return (
        Zh(e) || (e = Xh(e)),
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
function Jd(e, t, n, r, i, a) {
    var o;
    (void 0 === a && (a = lh.safeDescriptors), (o = r), t.annotationType_, o.value);
    var l,
        s = r.value;
    (Zh(s) || (s = Xh(s)), i) && ((s = s.bind(null != (l = e.proxy_) ? l : e.target_)).isMobXFlow = !0);
    return { value: s, configurable: !a || e.isPlainObject_, enumerable: !1, writable: !a };
}
function Zd(e, t) {
    return { annotationType_: e, options_: t, make_: ep, extend_: tp, decorate_20223_: np };
}
function ep(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function tp(e, t, n, r) {
    var i;
    return (
        (i = n),
        this.annotationType_,
        i.get,
        e.defineComputedProperty_(t, Od({}, this.options_, { get: n.get, set: n.set }), r)
    );
}
function np(e, t) {
    var n = this,
        r = t.name;
    return (
        (0, t.addInitializer)(function () {
            var t = Bv(this)[Id],
                i = Od({}, n.options_, { get: e, context: this });
            (i.name || (i.name = 'ObservableObject.' + r.toString()), t.values_.set(r, new qp(i)));
        }),
        function () {
            return this[Id].getObservablePropValue_(r);
        }
    );
}
function rp(e, t) {
    return { annotationType_: e, options_: t, make_: ip, extend_: ap, decorate_20223_: op };
}
function ip(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function ap(e, t, n, r) {
    var i, a;
    return (
        this.annotationType_,
        e.defineObservableProperty_(
            t,
            n.value,
            null != (i = null == (a = this.options_) ? void 0 : a.enhancer) ? i : Fd,
            r,
        )
    );
}
function op(e, t) {
    var n = this,
        r = t.kind,
        i = t.name,
        a = new WeakSet();
    function o(e, t) {
        var r,
            o,
            l = Bv(e)[Id],
            s = new Fp(
                t,
                null != (r = null == (o = n.options_) ? void 0 : o.enhancer) ? r : Fd,
                'ObservableObject.' + i.toString(),
                !1,
            );
        (l.values_.set(i, s), a.add(e));
    }
    if ('accessor' == r)
        return {
            get: function () {
                return (a.has(this) || o(this, e.get.call(this)), this[Id].getObservablePropValue_(i));
            },
            set: function (e) {
                return (a.has(this) || o(this, e), this[Id].setObservablePropValue_(i, e));
            },
            init: function (e) {
                return (a.has(this) || o(this, e), e);
            },
        };
}
var lp = 'true',
    sp = up();
function up(e) {
    return { annotationType_: lp, options_: e, make_: cp, extend_: fp, decorate_20223_: dp };
}
function cp(e, t, n, r) {
    var i, a, o, l;
    if (n.get) return Ap.make_(e, t, n, r);
    if (n.set) {
        var s = Ip(t.toString(), n.set);
        return r === e.target_
            ? null === e.defineProperty_(t, { configurable: !lh.safeDescriptors || e.isPlainObject_, set: s })
                ? 0
                : 2
            : (Zf(r, t, { configurable: !0, set: s }), 2);
    }
    if (r !== e.target_ && 'function' == typeof n.value)
        return dd(n.value)
            ? (null != (l = this.options_) && l.autoBind ? Xh.bound : Xh).make_(e, t, n, r)
            : (null != (o = this.options_) && o.autoBind ? Th.bound : Th).make_(e, t, n, r);
    var u,
        c = !1 === (null == (i = this.options_) ? void 0 : i.deep) ? Op.ref : Op;
    'function' == typeof n.value &&
        null != (a = this.options_) &&
        a.autoBind &&
        (n.value = n.value.bind(null != (u = e.proxy_) ? u : e.target_));
    return c.make_(e, t, n, r);
}
function fp(e, t, n, r) {
    var i, a, o;
    if (n.get) return Ap.extend_(e, t, n, r);
    if (n.set)
        return e.defineProperty_(
            t,
            { configurable: !lh.safeDescriptors || e.isPlainObject_, set: Ip(t.toString(), n.set) },
            r,
        );
    'function' == typeof n.value &&
        null != (i = this.options_) &&
        i.autoBind &&
        (n.value = n.value.bind(null != (o = e.proxy_) ? o : e.target_));
    return (!1 === (null == (a = this.options_) ? void 0 : a.deep) ? Op.ref : Op).extend_(e, t, n, r);
}
function dp(e, t) {
    Kf("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var pp = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
function hp(e) {
    return e || pp;
}
Object.freeze(pp);
var vp = rp('observable'),
    mp = rp('observable.ref', { enhancer: Bd }),
    gp = rp('observable.shallow', {
        enhancer: function (e, t, n) {
            return null == e || Wv(e) || Pv(e) || Lv(e) || zv(e)
                ? e
                : Array.isArray(e)
                  ? Op.array(e, { name: n, deep: !1 })
                  : fd(e)
                    ? Op.object(e, void 0, { name: n, deep: !1 })
                    : md(e)
                      ? Op.map(e, { name: n, deep: !1 })
                      : gd(e)
                        ? Op.set(e, { name: n, deep: !1 })
                        : void 0;
        },
    }),
    yp = rp('observable.struct', {
        enhancer: function (e, t) {
            return sm(e, t) ? t : e;
        },
    }),
    bp = jd(vp);
function _p(e) {
    return !0 === e.deep
        ? Fd
        : !1 === e.deep
          ? Bd
          : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
            ? n
            : Fd;
    var t, n, r;
}
function wp(e, t, n) {
    return Ld(t)
        ? vp.decorate_20223_(e, t)
        : ud(t)
          ? void Rd(e, t, vp)
          : nv(e)
            ? e
            : fd(e)
              ? Op.object(e, t, n)
              : Array.isArray(e)
                ? Op.array(e, t)
                : md(e)
                  ? Op.map(e, t)
                  : gd(e)
                    ? Op.set(e, t)
                    : 'object' == typeof e && null !== e
                      ? e
                      : Op.box(e, t);
}
Xf(wp, bp);
var kp,
    Sp,
    xp = {
        box: function (e, t) {
            var n = hp(t);
            return new Fp(e, _p(n), n.name, !0, n.equals);
        },
        array: function (e, t) {
            var n = hp(t);
            return (!1 === lh.useProxies || !1 === n.proxy ? nm : yv)(e, _p(n), n.name);
        },
        map: function (e, t) {
            var n = hp(t);
            return new Rv(e, _p(n), n.name);
        },
        set: function (e, t) {
            var n = hp(t);
            return new Mv(e, _p(n), n.name);
        },
        object: function (e, t, n) {
            return om(function () {
                return qh(
                    !1 === lh.useProxies || !1 === (null == n ? void 0 : n.proxy)
                        ? Bv({}, n)
                        : (function (e, t) {
                              var n, r;
                              return (
                                  ad(),
                                  (e = Bv(e, t)),
                                  null != (r = (n = e[Id]).proxy_) ? r : (n.proxy_ = new Proxy(e, ov))
                              );
                          })({}, n),
                    e,
                    t,
                );
            });
        },
        ref: jd(mp),
        shallow: jd(gp),
        deep: bp,
        struct: jd(yp),
    },
    Op = Xf(wp, xp),
    Ep = 'computed',
    Pp = Zd(Ep),
    Cp = Zd('computed.struct', { equals: Vd.structural }),
    Ap = function (e, t) {
        if (Ld(t)) return Pp.decorate_20223_(e, t);
        if (ud(t)) return Rd(e, t, Pp);
        if (fd(e)) return jd(Zd(Ep, e));
        var n = fd(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new qp(n));
    };
(Object.assign(Ap, Pp), (Ap.struct = jd(Cp)));
var Tp,
    Np = 0,
    jp = 1,
    Rp = null != (kp = null == (Sp = Jf(function () {}, 'name')) ? void 0 : Sp.configurable) && kp,
    Lp = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
function Ip(e, t, n, r) {
    function i() {
        return Mp(e, n, t, r || this, arguments);
    }
    return (
        void 0 === n && (n = !1),
        (i.isMobxAction = !0),
        (i.toString = function () {
            return t.toString();
        }),
        Rp && ((Lp.value = e), Zf(i, 'name', Lp)),
        i
    );
}
function Mp(e, t, n, r, i) {
    var a = (function (e, t, n, r) {
        var i = !1,
            a = 0,
            o = lh.trackingDerivation,
            l = !t || !o;
        fh();
        var s = lh.allowStateChanges;
        l && (Zp(), (s = zp(!0)));
        var u = th(!0),
            c = {
                runAsAction_: l,
                prevDerivation_: o,
                prevAllowStateChanges_: s,
                prevAllowStateReads_: u,
                notifySpy_: i,
                startTime_: a,
                actionId_: jp++,
                parentActionId_: Np,
            };
        return ((Np = c.actionId_), c);
    })(0, t);
    try {
        return n.apply(r, i);
    } catch (o) {
        throw ((a.error_ = o), o);
    } finally {
        !(function (e) {
            Np !== e.actionId_ && Kf(30);
            ((Np = e.parentActionId_), void 0 !== e.error_ && (lh.suppressReactionErrors = !0));
            (Dp(e.prevAllowStateChanges_), nh(e.prevAllowStateReads_), dh(), e.runAsAction_ && eh(e.prevDerivation_));
            lh.suppressReactionErrors = !1;
        })(a);
    }
}
function zp(e) {
    var t = lh.allowStateChanges;
    return ((lh.allowStateChanges = e), t);
}
function Dp(e) {
    lh.allowStateChanges = e;
}
Tp = Symbol.toPrimitive;
var Vp,
    Fp = (function (e) {
        function t(t, n, r, i, a) {
            var o;
            return (
                void 0 === r && (r = 'ObservableValue'),
                void 0 === a && (a = Vd.default),
                ((o = e.call(this, r) || this).enhancer = void 0),
                (o.name_ = void 0),
                (o.equals = void 0),
                (o.hasUnreportedChange_ = !1),
                (o.interceptors_ = void 0),
                (o.changeListeners_ = void 0),
                (o.value_ = void 0),
                (o.dehancer = void 0),
                (o.enhancer = n),
                (o.name_ = r),
                (o.equals = a),
                (o.value_ = n(t, void 0, r)),
                o
            );
        }
        Ed(t, e);
        var n = t.prototype;
        return (
            (n.dehanceValue = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
                (this.value_, (e = this.prepareNewValue_(e)) !== lh.UNCHANGED && this.setNewValue_(e));
            }),
            (n.prepareNewValue_ = function (e) {
                if (lv(this)) {
                    var t = uv(this, { object: this, type: vv, newValue: e });
                    if (!t) return lh.UNCHANGED;
                    e = t.newValue;
                }
                return (
                    (e = this.enhancer(e, this.value_, this.name_)),
                    this.equals(this.value_, e) ? lh.UNCHANGED : e
                );
            }),
            (n.setNewValue_ = function (e) {
                var t = this.value_;
                ((this.value_ = e),
                    this.reportChanged(),
                    cv(this) && dv(this, { type: vv, object: this, newValue: e, oldValue: t }));
            }),
            (n.get = function () {
                return (this.reportObserved(), this.dehanceValue(this.value_));
            }),
            (n.intercept_ = function (e) {
                return sv(this, e);
            }),
            (n.observe_ = function (e, t) {
                return (
                    t &&
                        e({
                            observableKind: 'value',
                            debugObjectName: this.name_,
                            object: this,
                            type: vv,
                            newValue: this.value_,
                            oldValue: void 0,
                        }),
                    fv(this, e)
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
                return _d(this.get());
            }),
            (n[Tp] = function () {
                return this.valueOf();
            }),
            t
        );
    })(Md);
Vp = Symbol.toPrimitive;
var Bp,
    Up,
    $p,
    Wp,
    qp = (function () {
        function e(e) {
            ((this.dependenciesState_ = Bp.NOT_TRACKING_),
                (this.observing_ = []),
                (this.newObserving_ = null),
                (this.isBeingObserved_ = !1),
                (this.isPendingUnobservation_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Bp.UP_TO_DATE_),
                (this.unboundDepsCount_ = 0),
                (this.value_ = new Gp(null)),
                (this.name_ = void 0),
                (this.triggeredBy_ = void 0),
                (this.isComputing_ = !1),
                (this.isRunningSetter_ = !1),
                (this.derivation = void 0),
                (this.setter_ = void 0),
                (this.isTracing_ = $p.NONE),
                (this.scope_ = void 0),
                (this.equals_ = void 0),
                (this.requiresReaction_ = void 0),
                (this.keepAlive_ = void 0),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                e.get || Kf(31),
                (this.derivation = e.get),
                (this.name_ = e.name || 'ComputedValue'),
                e.set && (this.setter_ = Ip('ComputedValue-setter', e.set)),
                (this.equals_ = e.equals || (e.compareStructural || e.struct ? Vd.structural : Vd.default)),
                (this.scope_ = e.context),
                (this.requiresReaction_ = e.requiresReaction),
                (this.keepAlive_ = !!e.keepAlive));
        }
        var t = e.prototype;
        return (
            (t.onBecomeStale_ = function () {
                !(function (e) {
                    if (e.lowestObserverState_ !== Bp.UP_TO_DATE_) return;
                    ((e.lowestObserverState_ = Bp.POSSIBLY_STALE_),
                        e.observers_.forEach(function (e) {
                            e.dependenciesState_ === Bp.UP_TO_DATE_ &&
                                ((e.dependenciesState_ = Bp.POSSIBLY_STALE_), e.onBecomeStale_());
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
                    (this.isComputing_ && Kf(32, this.name_, this.derivation),
                    0 !== lh.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                ) {
                    if ((ph(this), Qp(this))) {
                        var e = lh.trackingContext;
                        (this.keepAlive_ && !e && (lh.trackingContext = this),
                            this.trackAndCompute() &&
                                (function (e) {
                                    if (e.lowestObserverState_ === Bp.STALE_) return;
                                    ((e.lowestObserverState_ = Bp.STALE_),
                                        e.observers_.forEach(function (t) {
                                            t.dependenciesState_ === Bp.POSSIBLY_STALE_
                                                ? (t.dependenciesState_ = Bp.STALE_)
                                                : t.dependenciesState_ === Bp.UP_TO_DATE_ &&
                                                  (e.lowestObserverState_ = Bp.UP_TO_DATE_);
                                        }));
                                })(this),
                            (lh.trackingContext = e));
                    }
                } else Qp(this) && (this.warnAboutUntrackedRead_(), fh(), (this.value_ = this.computeValue_(!1)), dh());
                var t = this.value_;
                if (Kp(t)) throw t.cause;
                return t;
            }),
            (t.set = function (e) {
                if (this.setter_) {
                    (this.isRunningSetter_ && Kf(33, this.name_), (this.isRunningSetter_ = !0));
                    try {
                        this.setter_.call(this.scope_, e);
                    } finally {
                        this.isRunningSetter_ = !1;
                    }
                } else Kf(34, this.name_);
            }),
            (t.trackAndCompute = function () {
                var e = this.value_,
                    t = this.dependenciesState_ === Bp.NOT_TRACKING_,
                    n = this.computeValue_(!0),
                    r = t || Kp(e) || Kp(n) || !this.equals_(e, n);
                return (r && (this.value_ = n), r);
            }),
            (t.computeValue_ = function (e) {
                this.isComputing_ = !0;
                var t,
                    n = zp(!1);
                if (e) t = Yp(this, this.derivation, this.scope_);
                else if (!0 === lh.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                else
                    try {
                        t = this.derivation.call(this.scope_);
                    } catch (r) {
                        t = new Gp(r);
                    }
                return (Dp(n), (this.isComputing_ = !1), t);
            }),
            (t.suspend_ = function () {
                this.keepAlive_ || (Xp(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
                var n = this,
                    r = !0,
                    i = void 0;
                return Rh(function () {
                    var a = n.get();
                    if (!r || t) {
                        var o = Zp();
                        (e({
                            observableKind: 'computed',
                            debugObjectName: n.name_,
                            type: vv,
                            object: n,
                            newValue: a,
                            oldValue: i,
                        }),
                            eh(o));
                    }
                    ((r = !1), (i = a));
                });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
                return this.name_ + '[' + this.derivation.toString() + ']';
            }),
            (t.valueOf = function () {
                return _d(this.get());
            }),
            (t[Vp] = function () {
                return this.valueOf();
            }),
            e
        );
    })(),
    Hp = vd('ComputedValue', qp);
(((Up = Bp || (Bp = {}))[(Up.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
    (Up[(Up.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
    (Up[(Up.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
    (Up[(Up.STALE_ = 2)] = 'STALE_'),
    ((Wp = $p || ($p = {}))[(Wp.NONE = 0)] = 'NONE'),
    (Wp[(Wp.LOG = 1)] = 'LOG'),
    (Wp[(Wp.BREAK = 2)] = 'BREAK'));
var Gp = function (e) {
    ((this.cause = void 0), (this.cause = e));
};
function Kp(e) {
    return e instanceof Gp;
}
function Qp(e) {
    switch (e.dependenciesState_) {
        case Bp.UP_TO_DATE_:
            return !1;
        case Bp.NOT_TRACKING_:
        case Bp.STALE_:
            return !0;
        case Bp.POSSIBLY_STALE_:
            for (var t = th(!0), n = Zp(), r = e.observing_, i = r.length, a = 0; a < i; a++) {
                var o = r[a];
                if (Hp(o)) {
                    if (lh.disableErrorBoundaries) o.get();
                    else
                        try {
                            o.get();
                        } catch (l) {
                            return (eh(n), nh(t), !0);
                        }
                    if (e.dependenciesState_ === Bp.STALE_) return (eh(n), nh(t), !0);
                }
            }
            return (rh(e), eh(n), nh(t), !1);
    }
}
function Yp(e, t, n) {
    var r = th(!0);
    (rh(e),
        (e.newObserving_ = new Array(e.observing_.length + 100)),
        (e.unboundDepsCount_ = 0),
        (e.runId_ = ++lh.runId));
    var i,
        a = lh.trackingDerivation;
    if (((lh.trackingDerivation = e), lh.inBatch++, !0 === lh.disableErrorBoundaries)) i = t.call(n);
    else
        try {
            i = t.call(n);
        } catch (o) {
            i = new Gp(o);
        }
    return (
        lh.inBatch--,
        (lh.trackingDerivation = a),
        (function (e) {
            for (
                var t = e.observing_,
                    n = (e.observing_ = e.newObserving_),
                    r = Bp.UP_TO_DATE_,
                    i = 0,
                    a = e.unboundDepsCount_,
                    o = 0;
                o < a;
                o++
            ) {
                var l = n[o];
                (0 === l.diffValue_ && ((l.diffValue_ = 1), i !== o && (n[i] = l), i++),
                    l.dependenciesState_ > r && (r = l.dependenciesState_));
            }
            ((n.length = i), (e.newObserving_ = null), (a = t.length));
            for (; a--; ) {
                var s = t[a];
                (0 === s.diffValue_ && uh(s, e), (s.diffValue_ = 0));
            }
            for (; i--; ) {
                var u = n[i];
                1 === u.diffValue_ && ((u.diffValue_ = 0), sh(u, e));
            }
            r !== Bp.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        nh(r),
        i
    );
}
function Xp(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) uh(t[n], e);
    e.dependenciesState_ = Bp.NOT_TRACKING_;
}
function Jp(e) {
    var t = Zp();
    try {
        return e();
    } finally {
        eh(t);
    }
}
function Zp() {
    var e = lh.trackingDerivation;
    return ((lh.trackingDerivation = null), e);
}
function eh(e) {
    lh.trackingDerivation = e;
}
function th(e) {
    var t = lh.allowStateReads;
    return ((lh.allowStateReads = e), t);
}
function nh(e) {
    lh.allowStateReads = e;
}
function rh(e) {
    if (e.dependenciesState_ !== Bp.UP_TO_DATE_) {
        e.dependenciesState_ = Bp.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = Bp.UP_TO_DATE_;
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
    oh = !1,
    lh = (function () {
        var e = Yf();
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
                      oh || Kf(35);
                  }, 1),
                  new ih())
        );
    })();
function sh(e, t) {
    (e.observers_.add(t),
        e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_));
}
function uh(e, t) {
    (e.observers_.delete(t), 0 === e.observers_.size && ch(e));
}
function ch(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), lh.pendingUnobservations.push(e));
}
function fh() {
    lh.inBatch++;
}
function dh() {
    if (0 == --lh.inBatch) {
        yh();
        for (var e = lh.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            ((n.isPendingUnobservation_ = !1),
                0 === n.observers_.size &&
                    (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof qp && n.suspend_()));
        }
        lh.pendingUnobservations = [];
    }
}
function ph(e) {
    var t = lh.trackingDerivation;
    return null !== t
        ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ && lh.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
          e.isBeingObserved_)
        : (0 === e.observers_.size && lh.inBatch > 0 && ch(e), !1);
}
function hh(e) {
    e.lowestObserverState_ !== Bp.STALE_ &&
        ((e.lowestObserverState_ = Bp.STALE_),
        e.observers_.forEach(function (e) {
            (e.dependenciesState_ === Bp.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = Bp.STALE_));
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
                (this.dependenciesState_ = Bp.NOT_TRACKING_),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.unboundDepsCount_ = 0),
                (this.isDisposed_ = !1),
                (this.isScheduled_ = !1),
                (this.isTrackPending_ = !1),
                (this.isRunning_ = !1),
                (this.isTracing_ = $p.NONE),
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
                this.isScheduled_ || ((this.isScheduled_ = !0), lh.pendingReactions.push(this), yh());
            }),
            (t.isScheduled = function () {
                return this.isScheduled_;
            }),
            (t.runReaction_ = function () {
                if (!this.isDisposed_) {
                    (fh(), (this.isScheduled_ = !1));
                    var e = lh.trackingContext;
                    if (((lh.trackingContext = this), Qp(this))) {
                        this.isTrackPending_ = !0;
                        try {
                            this.onInvalidate_();
                        } catch (t) {
                            this.reportExceptionInDerivation_(t);
                        }
                    }
                    ((lh.trackingContext = e), dh());
                }
            }),
            (t.track = function (e) {
                if (!this.isDisposed_) {
                    (fh(), (this.isRunning_ = !0));
                    var t = lh.trackingContext;
                    lh.trackingContext = this;
                    var n = Yp(this, e, void 0);
                    ((lh.trackingContext = t),
                        (this.isRunning_ = !1),
                        (this.isTrackPending_ = !1),
                        this.isDisposed_ && Xp(this),
                        Kp(n) && this.reportExceptionInDerivation_(n.cause),
                        dh());
                }
            }),
            (t.reportExceptionInDerivation_ = function (e) {
                var t = this;
                if (this.errorHandler_) this.errorHandler_(e, this);
                else {
                    if (lh.disableErrorBoundaries) throw e;
                    var n = "[mobx] uncaught error in '" + this + "'";
                    (lh.suppressReactionErrors || console.error(n, e),
                        lh.globalReactionErrorHandlers.forEach(function (n) {
                            return n(e, t);
                        }));
                }
            }),
            (t.dispose = function () {
                this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (fh(), Xp(this), dh()));
            }),
            (t.getDisposer_ = function (e) {
                var t = this,
                    n = function n() {
                        (t.dispose(), null == e || null == e.removeEventListener || e.removeEventListener('abort', n));
                    };
                return (null == e || null == e.addEventListener || e.addEventListener('abort', n), (n[Id] = this), n);
            }),
            (t.toString = function () {
                return 'Reaction[' + this.name_ + ']';
            }),
            (t.trace = function (e) {}),
            e
        );
    })(),
    mh = 100,
    gh = function (e) {
        return e();
    };
function yh() {
    lh.inBatch > 0 || lh.isRunningReactions || gh(bh);
}
function bh() {
    lh.isRunningReactions = !0;
    for (var e = lh.pendingReactions, t = 0; e.length > 0; ) {
        ++t === mh && (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
    }
    lh.isRunningReactions = !1;
}
var _h = vd('Reaction', vh);
var wh = 'action',
    kh = 'autoAction',
    Sh = '<unnamed action>',
    xh = $d(wh),
    Oh = $d('action.bound', { bound: !0 }),
    Eh = $d(kh, { autoAction: !0 }),
    Ph = $d('autoAction.bound', { autoAction: !0, bound: !0 });
function Ch(e) {
    return function (t, n) {
        return sd(t)
            ? Ip(t.name || Sh, t, e)
            : sd(n)
              ? Ip(t, n, e)
              : Ld(n)
                ? (e ? Eh : xh).decorate_20223_(t, n)
                : ud(n)
                  ? Rd(t, n, e ? Eh : xh)
                  : ud(t)
                    ? jd($d(e ? kh : wh, { name: t, autoAction: e }))
                    : void 0;
    };
}
var Ah = Ch(!1);
Object.assign(Ah, xh);
var Th = Ch(!0);
function Nh(e) {
    return Mp(e.name, !1, e, this, void 0);
}
function jh(e) {
    return sd(e) && !0 === e.isMobxAction;
}
function Rh(e, t) {
    var n, r, i, a, o;
    void 0 === t && (t = nd);
    var l,
        s = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun';
    if (!t.scheduler && !t.delay)
        l = new vh(
            s,
            function () {
                this.track(f);
            },
            t.onError,
            t.requiresObservable,
        );
    else {
        var u = Ih(t),
            c = !1;
        l = new vh(
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
    }
    function f() {
        e(l);
    }
    return (
        (null != (i = t) && null != (a = i.signal) && a.aborted) || l.schedule_(),
        l.getDisposer_(null == (o = t) ? void 0 : o.signal)
    );
}
(Object.assign(Th, Eh), (Ah.bound = jd(Oh)), (Th.bound = jd(Ph)));
var Lh = function (e) {
    return e();
};
function Ih(e) {
    return e.scheduler
        ? e.scheduler
        : e.delay
          ? function (t) {
                return setTimeout(t, e.delay);
            }
          : Lh;
}
function Mh(e, t, n) {
    var r, i, a, o;
    void 0 === n && (n = nd);
    var l,
        s,
        u,
        c,
        f = null != (r = n.name) ? r : 'Reaction',
        d = Ah(
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
        h = Ih(n),
        v = !0,
        m = !1,
        g = n.compareStructural ? Vd.structural : n.equals || Vd.default,
        y = new vh(
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
                    var n = zp(e);
                    try {
                        return t();
                    } finally {
                        Dp(n);
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
        (null != (i = n) && null != (a = i.signal) && a.aborted) || y.schedule_(),
        y.getDisposer_(null == (o = n) ? void 0 : o.signal)
    );
}
var zh = 'onBO',
    Dh = 'onBUO';
function Vh(e, t, n) {
    return Fh(Dh, e, t, n);
}
function Fh(e, t, n, r) {
    var i = rm(t),
        a = sd(r) ? r : n,
        o = e + 'L';
    return (
        i[o] ? i[o].add(a) : (i[o] = new Set([a])),
        function () {
            var e = i[o];
            e && (e.delete(a), 0 === e.size && delete i[o]);
        }
    );
}
var Bh = 'never',
    Uh = 'always',
    $h = 'observed';
function Wh(e) {
    !0 === e.isolateGlobalState &&
        (function () {
            if (((lh.pendingReactions.length || lh.inBatch || lh.isRunningReactions) && Kf(36), (oh = !0), ah)) {
                var e = Yf();
                (0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0), (lh = new ih()));
            }
        })();
    var t,
        n,
        r = e.useProxies,
        i = e.enforceActions;
    if (
        (void 0 !== r && (lh.useProxies = r === Uh || (r !== Bh && 'undefined' != typeof Proxy)),
        'ifavailable' === r && (lh.verifyProxies = !0),
        void 0 !== i)
    ) {
        var a = i === Uh ? Uh : i === $h;
        ((lh.enforceActions = a), (lh.allowStateChanges = !0 !== a && a !== Uh));
    }
    ([
        'computedRequiresReaction',
        'reactionRequiresObservable',
        'observableRequiresReaction',
        'disableErrorBoundaries',
        'safeDescriptors',
    ].forEach(function (t) {
        t in e && (lh[t] = !!e[t]);
    }),
        (lh.allowStateReads = !lh.observableRequiresReaction),
        e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = gh),
            (gh = function (e) {
                return t(function () {
                    return n(e);
                });
            })));
}
function qh(e, t, n, r) {
    var i = kd(t);
    return (
        om(function () {
            var t = Bv(e, r)[Id];
            bd(i).forEach(function (e) {
                t.extend_(e, i[e], !n || !(e in n) || n[e]);
            });
        }),
        e
    );
}
function Hh(e) {
    var t,
        n = { name: e.name_ };
    return (
        e.observing_ &&
            e.observing_.length > 0 &&
            (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(Hh)),
        n
    );
}
var Gh = 0;
function Kh() {
    this.message = 'FLOW_CANCELLED';
}
Kh.prototype = Object.create(Error.prototype);
var Qh = Kd('flow'),
    Yh = Kd('flow.bound', { bound: !0 }),
    Xh = Object.assign(function (e, t) {
        if (Ld(t)) return Qh.decorate_20223_(e, t);
        if (ud(t)) return Rd(e, t, Qh);
        var n = e,
            r = n.name || '<unnamed flow>',
            i = function () {
                var e,
                    t = arguments,
                    i = ++Gh,
                    a = Ah(r + ' - runid: ' + i + ' - init', n).apply(this, t),
                    o = void 0,
                    l = new Promise(function (t, n) {
                        var l = 0;
                        function s(e) {
                            var t;
                            o = void 0;
                            try {
                                t = Ah(r + ' - runid: ' + i + ' - yield ' + l++, a.next).call(a, e);
                            } catch (s) {
                                return n(s);
                            }
                            c(t);
                        }
                        function u(e) {
                            var t;
                            o = void 0;
                            try {
                                t = Ah(r + ' - runid: ' + i + ' - yield ' + l++, a.throw).call(a, e);
                            } catch (s) {
                                return n(s);
                            }
                            c(t);
                        }
                        function c(e) {
                            if (!sd(null == e ? void 0 : e.then))
                                return e.done ? t(e.value) : (o = Promise.resolve(e.value)).then(s, u);
                            e.then(c, n);
                        }
                        ((e = n), s(void 0));
                    });
                return (
                    (l.cancel = Ah(r + ' - runid: ' + i + ' - cancel', function () {
                        try {
                            o && Jh(o);
                            var t = a.return(void 0),
                                n = Promise.resolve(t.value);
                            (n.then(ld, ld), Jh(n), e(new Kh()));
                        } catch (r) {
                            e(r);
                        }
                    })),
                    l
                );
            };
        return ((i.isMobXFlow = !0), i);
    }, Qh);
function Jh(e) {
    sd(e.cancel) && e.cancel();
}
function Zh(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function ev(e, t) {
    if (void 0 === t) return Hp(e);
    if (!1 === Wv(e)) return !1;
    if (!e[Id].values_.has(t)) return !1;
    var n = rm(e, t);
    return Hp(n);
}
function tv(e, t) {
    return ev(e, t);
}
function nv(e) {
    return (function (e, t) {
        return !!e && (Wv(e) || !!e[Id] || zd(e) || _h(e) || Hp(e));
    })(e);
}
function rv(e, t, n, r) {
    return sd(n)
        ? (function (e, t, n, r) {
              return im(e, t).observe_(n, r);
          })(e, t, n, r)
        : (function (e, t, n) {
              return im(e).observe_(t, n);
          })(e, t, n);
}
function iv(e, t) {
    (void 0 === t && (t = void 0), fh());
    try {
        return e.apply(t);
    } finally {
        dh();
    }
}
function av(e) {
    return e[Id];
}
Xh.bound = jd(Yh);
var ov = {
    has: function (e, t) {
        return av(e).has_(t);
    },
    get: function (e, t) {
        return av(e).get_(t);
    },
    set: function (e, t, n) {
        var r;
        return !!ud(t) && (null == (r = av(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
        var n;
        return !!ud(t) && (null == (n = av(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
        var r;
        return null == (r = av(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
        return av(e).ownKeys_();
    },
    preventExtensions: function (e) {
        Kf(13);
    },
};
function lv(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
}
function sv(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
        n.push(t),
        od(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function uv(e, t) {
    var n = Zp();
    try {
        for (
            var r = [].concat(e.interceptors_ || []), i = 0, a = r.length;
            i < a && ((t = r[i](t)) && !t.type && Kf(14), t);
            i++
        );
        return t;
    } finally {
        eh(n);
    }
}
function cv(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
}
function fv(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
        n.push(t),
        od(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function dv(e, t) {
    var n = Zp(),
        r = e.changeListeners_;
    if (r) {
        for (var i = 0, a = (r = r.slice()).length; i < a; i++) r[i](t);
        eh(n);
    }
}
function pv(e, t, n) {
    return (
        om(function () {
            var r = Bv(e, n)[Id];
            (null != t ||
                (t = (function (e) {
                    return (wd(e, Nd) || pd(e, Nd, Od({}, e[Nd])), e[Nd]);
                })(e)),
                bd(t).forEach(function (e) {
                    return r.make_(e, t[e]);
                }));
        }),
        e
    );
}
var hv = 'splice',
    vv = 'update',
    mv = {
        get: function (e, t) {
            var n = e[Id];
            return t === Id
                ? n
                : 'length' === t
                  ? n.getArrayLength_()
                  : 'string' != typeof t || isNaN(t)
                    ? wd(bv, t)
                        ? bv[t]
                        : e[t]
                    : n.get_(parseInt(t));
        },
        set: function (e, t, n) {
            var r = e[Id];
            return (
                'length' === t && r.setArrayLength_(n),
                'symbol' == typeof t || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n),
                !0
            );
        },
        preventExtensions: function () {
            Kf(15);
        },
    },
    gv = (function () {
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
                (this.atom_ = new Md(e)),
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
                return sv(this, e);
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
                    fv(this, e)
                );
            }),
            (t.getArrayLength_ = function () {
                return (this.atom_.reportObserved(), this.values_.length);
            }),
            (t.setArrayLength_ = function (e) {
                ('number' != typeof e || isNaN(e) || e < 0) && Kf('Out of range: ' + e);
                var t = this.values_.length;
                if (e !== t)
                    if (e > t) {
                        for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
                        this.spliceWithArray_(t, 0, n);
                    } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
                (e !== this.lastKnownLength_ && Kf(16),
                    (this.lastKnownLength_ += t),
                    this.legacyMode_ && t > 0 && tm(e + t + 1));
            }),
            (t.spliceWithArray_ = function (e, t, n) {
                var r = this;
                this.atom_;
                var i = this.values_.length;
                if (
                    (void 0 === e ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
                    (t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e))),
                    void 0 === n && (n = td),
                    lv(this))
                ) {
                    var a = uv(this, { object: this.proxy_, type: hv, index: e, removedCount: t, added: n });
                    if (!a) return td;
                    ((t = a.removedCount), (n = a.added));
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
                    var o = n.length - t;
                    this.updateArrayLength_(i, o);
                }
                var l = this.spliceItemsIntoValues_(e, t, n);
                return ((0 === t && 0 === n.length) || this.notifyArraySplice_(e, n, l), this.dehanceValues_(l));
            }),
            (t.spliceItemsIntoValues_ = function (e, t, n) {
                var r;
                if (n.length < 1e4) return (r = this.values_).splice.apply(r, [e, t].concat(n));
                var i = this.values_.slice(e, e + t),
                    a = this.values_.slice(e + t);
                this.values_.length += n.length - t;
                for (var o = 0; o < n.length; o++) this.values_[e + o] = n[o];
                for (var l = 0; l < a.length; l++) this.values_[e + n.length + l] = a[l];
                return i;
            }),
            (t.notifyArrayChildUpdate_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    i = cv(this),
                    a =
                        i || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  type: vv,
                                  debugObjectName: this.atom_.name_,
                                  index: e,
                                  newValue: t,
                                  oldValue: n,
                              }
                            : null;
                (this.atom_.reportChanged(), i && dv(this, a));
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    i = cv(this),
                    a =
                        i || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  debugObjectName: this.atom_.name_,
                                  type: hv,
                                  index: e,
                                  removed: n,
                                  added: t,
                                  removedCount: n.length,
                                  addedCount: t.length,
                              }
                            : null;
                (this.atom_.reportChanged(), i && dv(this, a));
            }),
            (t.get_ = function (e) {
                if (!(this.legacyMode_ && e >= this.values_.length))
                    return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]));
                console.warn('[mobx] Out of bounds read: ' + e);
            }),
            (t.set_ = function (e, t) {
                var n = this.values_;
                if ((this.legacyMode_ && e > n.length && Kf(17, e, n.length), e < n.length)) {
                    this.atom_;
                    var r = n[e];
                    if (lv(this)) {
                        var i = uv(this, { type: vv, object: this.proxy_, index: e, newValue: t });
                        if (!i) return;
                        t = i.newValue;
                    }
                    (t = this.enhancer_(t, r)) !== r && ((n[e] = t), this.notifyArrayChildUpdate_(e, t, r));
                } else {
                    for (var a = new Array(e + 1 - n.length), o = 0; o < a.length - 1; o++) a[o] = void 0;
                    ((a[a.length - 1] = t), this.spliceWithArray_(n.length, 0, a));
                }
            }),
            e
        );
    })();
function yv(e, t, n, r) {
    return (
        void 0 === n && (n = 'ObservableArray'),
        void 0 === r && (r = !1),
        ad(),
        om(function () {
            var i = new gv(n, t, r, !1);
            hd(i.values_, Id, i);
            var a = new Proxy(i.values_, mv);
            return ((i.proxy_ = a), e && e.length && i.spliceWithArray_(0, 0, e), a);
        })
    );
}
var bv = {
    clear: function () {
        return this.splice(0);
    },
    replace: function (e) {
        var t = this[Id];
        return t.spliceWithArray_(0, t.values_.length, e);
    },
    toJSON: function () {
        return this.slice();
    },
    splice: function (e, t) {
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
        var a = this[Id];
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return a.spliceWithArray_(e);
            case 2:
                return a.spliceWithArray_(e, t);
        }
        return a.spliceWithArray_(e, t, r);
    },
    spliceWithArray: function (e, t, n) {
        return this[Id].spliceWithArray_(e, t, n);
    },
    push: function () {
        for (var e = this[Id], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(e.values_.length, 0, n), e.values_.length);
    },
    pop: function () {
        return this.splice(Math.max(this[Id].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        for (var e = this[Id], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(0, 0, n), e.values_.length);
    },
    reverse: function () {
        return (lh.trackingDerivation && Kf(37, 'reverse'), this.replace(this.slice().reverse()), this);
    },
    sort: function () {
        lh.trackingDerivation && Kf(37, 'sort');
        var e = this.slice();
        return (e.sort.apply(e, arguments), this.replace(e), this);
    },
    remove: function (e) {
        var t = this[Id],
            n = t.dehanceValues_(t.values_).indexOf(e);
        return n > -1 && (this.splice(n, 1), !0);
    },
};
function _v(e, t) {
    'function' == typeof Array.prototype[e] && (bv[e] = t(e));
}
function wv(e) {
    return function () {
        var t = this[Id];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments);
    };
}
function kv(e) {
    return function (t, n) {
        var r = this,
            i = this[Id];
        return (
            i.atom_.reportObserved(),
            i.dehanceValues_(i.values_)[e](function (e, i) {
                return t.call(n, e, i, r);
            })
        );
    };
}
function Sv(e) {
    return function () {
        var t = this,
            n = this[Id];
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
(_v('at', wv),
    _v('concat', wv),
    _v('flat', wv),
    _v('includes', wv),
    _v('indexOf', wv),
    _v('join', wv),
    _v('lastIndexOf', wv),
    _v('slice', wv),
    _v('toString', wv),
    _v('toLocaleString', wv),
    _v('toSorted', wv),
    _v('toSpliced', wv),
    _v('with', wv),
    _v('every', kv),
    _v('filter', kv),
    _v('find', kv),
    _v('findIndex', kv),
    _v('findLast', kv),
    _v('findLastIndex', kv),
    _v('flatMap', kv),
    _v('forEach', kv),
    _v('map', kv),
    _v('some', kv),
    _v('toReversed', kv),
    _v('reduce', Sv),
    _v('reduceRight', Sv));
var xv,
    Ov,
    Ev = vd('ObservableArrayAdministration', gv);
function Pv(e) {
    return cd(e) && Ev(e[Id]);
}
var Cv = {},
    Av = 'add',
    Tv = 'delete';
((xv = Symbol.iterator), (Ov = Symbol.toStringTag));
var Nv,
    jv,
    Rv = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Fd),
                void 0 === n && (n = 'ObservableMap'),
                (this.enhancer_ = void 0),
                (this.name_ = void 0),
                (this[Id] = Cv),
                (this.data_ = void 0),
                (this.hasMap_ = void 0),
                (this.keysAtom_ = void 0),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = t),
                (this.name_ = n),
                sd(Map) || Kf(18),
                om(function () {
                    ((r.keysAtom_ = Dd('ObservableMap.keys()')),
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
                if (!lh.trackingDerivation) return this.has_(e);
                var n = this.hasMap_.get(e);
                if (!n) {
                    var r = (n = new Fp(this.has_(e), Bd, 'ObservableMap.key?', !1));
                    (this.hasMap_.set(e, r),
                        Vh(r, function () {
                            return t.hasMap_.delete(e);
                        }));
                }
                return n.get();
            }),
            (t.set = function (e, t) {
                var n = this.has_(e);
                if (lv(this)) {
                    var r = uv(this, { type: n ? vv : Av, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, lv(this)) && !uv(this, { type: Tv, object: this, name: e })) return !1;
                if (this.has_(e)) {
                    var n = cv(this),
                        r = n
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: Tv,
                                  object: this,
                                  oldValue: this.data_.get(e).value_,
                                  name: e,
                              }
                            : null;
                    return (
                        iv(function () {
                            var n;
                            (t.keysAtom_.reportChanged(),
                                null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                                t.data_.get(e).setNewValue_(void 0),
                                t.data_.delete(e));
                        }),
                        n && dv(this, r),
                        !0
                    );
                }
                return !1;
            }),
            (t.updateValue_ = function (e, t) {
                var n = this.data_.get(e);
                if ((t = n.prepareNewValue_(t)) !== lh.UNCHANGED) {
                    var r = cv(this),
                        i = r
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: vv,
                                  object: this,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), r && dv(this, i));
                }
            }),
            (t.addValue_ = function (e, t) {
                var n = this;
                (this.keysAtom_,
                    iv(function () {
                        var r,
                            i = new Fp(t, n.enhancer_, 'ObservableMap.key', !1);
                        (n.data_.set(e, i),
                            (t = i.value_),
                            null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                            n.keysAtom_.reportChanged());
                    }));
                var r = cv(this),
                    i = r
                        ? {
                              observableKind: 'map',
                              debugObjectName: this.name_,
                              type: Av,
                              object: this,
                              name: e,
                              newValue: t,
                          }
                        : null;
                r && dv(this, i);
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
                return fm({
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
                return fm({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            i = n.value;
                        return { done: r, value: r ? void 0 : [i, e.get(i)] };
                    },
                });
            }),
            (t[xv] = function () {
                return this.entries();
            }),
            (t.forEach = function (e, t) {
                for (var n, r = Td(this); !(n = r()).done; ) {
                    var i = n.value,
                        a = i[0],
                        o = i[1];
                    e.call(t, o, a, this);
                }
            }),
            (t.merge = function (e) {
                var t = this;
                return (
                    Lv(e) && (e = new Map(e)),
                    iv(function () {
                        fd(e)
                            ? (function (e) {
                                  var t = Object.keys(e);
                                  if (!yd) return t;
                                  var n = Object.getOwnPropertySymbols(e);
                                  return n.length
                                      ? [].concat(
                                            t,
                                            n.filter(function (t) {
                                                return ed.propertyIsEnumerable.call(e, t);
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
                              : md(e)
                                ? (e.constructor !== Map && Kf(19, e),
                                  e.forEach(function (e, n) {
                                      return t.set(n, e);
                                  }))
                                : null != e && Kf(20, e);
                    }),
                    this
                );
            }),
            (t.clear = function () {
                var e = this;
                iv(function () {
                    Jp(function () {
                        for (var t, n = Td(e.keys()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    iv(function () {
                        for (
                            var n,
                                r = (function (e) {
                                    if (md(e) || Lv(e)) return e;
                                    if (Array.isArray(e)) return new Map(e);
                                    if (fd(e)) {
                                        var t = new Map();
                                        for (var n in e) t.set(n, e[n]);
                                        return t;
                                    }
                                    return Kf(21, e);
                                })(e),
                                i = new Map(),
                                a = !1,
                                o = Td(t.data_.keys());
                            !(n = o()).done;

                        ) {
                            var l = n.value;
                            if (!r.has(l))
                                if (t.delete(l)) a = !0;
                                else {
                                    var s = t.data_.get(l);
                                    i.set(l, s);
                                }
                        }
                        for (var u, c = Td(r.entries()); !(u = c()).done; ) {
                            var f = u.value,
                                d = f[0],
                                p = f[1],
                                h = t.data_.has(d);
                            if ((t.set(d, p), t.data_.has(d))) {
                                var v = t.data_.get(d);
                                (i.set(d, v), h || (a = !0));
                            }
                        }
                        if (!a)
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
                return fv(this, e);
            }),
            (t.intercept_ = function (e) {
                return sv(this, e);
            }),
            xd(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.keysAtom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: Ov,
                    get: function () {
                        return 'Map';
                    },
                },
            ]),
            e
        );
    })(),
    Lv = vd('ObservableMap', Rv);
var Iv = {};
((Nv = Symbol.iterator), (jv = Symbol.toStringTag));
var Mv = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Fd),
                void 0 === n && (n = 'ObservableSet'),
                (this.name_ = void 0),
                (this[Id] = Iv),
                (this.data_ = new Set()),
                (this.atom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = void 0),
                (this.name_ = n),
                sd(Set) || Kf(22),
                (this.enhancer_ = function (e, r) {
                    return t(e, r, n);
                }),
                om(function () {
                    ((r.atom_ = Dd(r.name_)), e && r.replace(e));
                }));
        }
        var t = e.prototype;
        return (
            (t.dehanceValue_ = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
                var e = this;
                iv(function () {
                    Jp(function () {
                        for (var t, n = Td(e.data_.values()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.forEach = function (e, t) {
                for (var n, r = Td(this); !(n = r()).done; ) {
                    var i = n.value;
                    e.call(t, i, i, this);
                }
            }),
            (t.add = function (e) {
                var t = this;
                if ((this.atom_, lv(this)) && !uv(this, { type: Av, object: this, newValue: e })) return this;
                if (!this.has(e)) {
                    iv(function () {
                        (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
                    });
                    var n = cv(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: Av,
                                  object: this,
                                  newValue: e,
                              }
                            : null;
                    n && dv(this, r);
                }
                return this;
            }),
            (t.delete = function (e) {
                var t = this;
                if (lv(this) && !uv(this, { type: Tv, object: this, oldValue: e })) return !1;
                if (this.has(e)) {
                    var n = cv(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: Tv,
                                  object: this,
                                  oldValue: e,
                              }
                            : null;
                    return (
                        iv(function () {
                            (t.atom_.reportChanged(), t.data_.delete(e));
                        }),
                        n && dv(this, r),
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
                return fm({
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
                return fm({
                    next: function () {
                        return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
                    },
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    zv(e) && (e = new Set(e)),
                    iv(function () {
                        Array.isArray(e) || gd(e)
                            ? (t.clear(),
                              e.forEach(function (e) {
                                  return t.add(e);
                              }))
                            : null != e && Kf('Cannot initialize set from ' + e);
                    }),
                    this
                );
            }),
            (t.observe_ = function (e, t) {
                return fv(this, e);
            }),
            (t.intercept_ = function (e) {
                return sv(this, e);
            }),
            (t.toJSON = function () {
                return Array.from(this);
            }),
            (t.toString = function () {
                return '[object ObservableSet]';
            }),
            (t[Nv] = function () {
                return this.values();
            }),
            xd(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.atom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: jv,
                    get: function () {
                        return 'Set';
                    },
                },
            ]),
            e
        );
    })(),
    zv = vd('ObservableSet', Mv),
    Dv = Object.create(null),
    Vv = 'remove',
    Fv = (function () {
        function e(e, t, n, r) {
            (void 0 === t && (t = new Map()),
                void 0 === r && (r = sp),
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
                (this.keysAtom_ = new Md('ObservableObject.keys')),
                (this.isPlainObject_ = fd(this.target_)));
        }
        var t = e.prototype;
        return (
            (t.getObservablePropValue_ = function (e) {
                return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
                var n = this.values_.get(e);
                if (n instanceof qp) return (n.set(t), !0);
                if (lv(this)) {
                    var r = uv(this, { type: vv, object: this.proxy_ || this.target_, name: e, newValue: t });
                    if (!r) return null;
                    t = r.newValue;
                }
                if ((t = n.prepareNewValue_(t)) !== lh.UNCHANGED) {
                    var i = cv(this),
                        a = i
                            ? {
                                  type: vv,
                                  observableKind: 'object',
                                  debugObjectName: this.name_,
                                  object: this.proxy_ || this.target_,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), i && dv(this, a));
                }
                return !0;
            }),
            (t.get_ = function (e) {
                return (lh.trackingDerivation && !wd(this.target_, e) && this.has_(e), this.target_[e]);
            }),
            (t.set_ = function (e, t, n) {
                return (
                    void 0 === n && (n = !1),
                    wd(this.target_, e)
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
                if (!lh.trackingDerivation) return e in this.target_;
                this.pendingKeys_ || (this.pendingKeys_ = new Map());
                var t = this.pendingKeys_.get(e);
                return (
                    t ||
                        ((t = new Fp(e in this.target_, Bd, 'ObservableObject.key?', !1)), this.pendingKeys_.set(e, t)),
                    t.get()
                );
            }),
            (t.make_ = function (e, t) {
                if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                    if (!(e in this.target_)) {
                        var n;
                        if (null != (n = this.target_[Nd]) && n[e]) return;
                        Kf(1, t.annotationType_, this.name_ + '.' + e.toString());
                    }
                    for (var r = this.target_; r && r !== ed; ) {
                        var i = Jf(r, e);
                        if (i) {
                            var a = t.make_(this, e, i, r);
                            if (0 === a) return;
                            if (1 === a) break;
                        }
                        r = Object.getPrototypeOf(r);
                    }
                    qv(this, t, e);
                }
            }),
            (t.extend_ = function (e, t, n, r) {
                if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                    return this.defineProperty_(e, t, r);
                var i = n.extend_(this, e, t, r);
                return (i && qv(this, n, e), i);
            }),
            (t.defineProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    fh();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (lv(this)) {
                        var i = uv(this, { object: this.proxy_ || this.target_, name: e, type: Av, newValue: t.value });
                        if (!i) return null;
                        var a = i.newValue;
                        t.value !== a && (t = Od({}, t, { value: a }));
                    }
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                    } else Zf(this.target_, e, t);
                    this.notifyPropertyAddition_(e, t.value);
                } finally {
                    dh();
                }
                return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
                (void 0 === r && (r = !1), this.keysAtom_);
                try {
                    fh();
                    var i = this.delete_(e);
                    if (!i) return i;
                    if (lv(this)) {
                        var a = uv(this, { object: this.proxy_ || this.target_, name: e, type: Av, newValue: t });
                        if (!a) return null;
                        t = a.newValue;
                    }
                    var o = $v(e),
                        l = {
                            configurable: !lh.safeDescriptors || this.isPlainObject_,
                            enumerable: !0,
                            get: o.get,
                            set: o.set,
                        };
                    if (r) {
                        if (!Reflect.defineProperty(this.target_, e, l)) return !1;
                    } else Zf(this.target_, e, l);
                    var s = new Fp(t, n, 'ObservableObject.key', !1);
                    (this.values_.set(e, s), this.notifyPropertyAddition_(e, s.value_));
                } finally {
                    dh();
                }
                return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    fh();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (lv(this))
                        if (!uv(this, { object: this.proxy_ || this.target_, name: e, type: Av, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var i = $v(e),
                        a = {
                            configurable: !lh.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: i.get,
                            set: i.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, a)) return !1;
                    } else Zf(this.target_, e, a);
                    (this.values_.set(e, new qp(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    dh();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !wd(this.target_, e))) return !0;
                if (lv(this) && !uv(this, { object: this.proxy_ || this.target_, name: e, type: Vv })) return null;
                try {
                    var n, r;
                    fh();
                    var i,
                        a = cv(this),
                        o = this.values_.get(e),
                        l = void 0;
                    if (!o && a) l = null == (i = Jf(this.target_, e)) ? void 0 : i.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (o && (this.values_.delete(e), o instanceof Fp && (l = o.value_), hh(o)),
                        this.keysAtom_.reportChanged(),
                        null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
                        a)
                    ) {
                        var s = {
                            type: Vv,
                            observableKind: 'object',
                            object: this.proxy_ || this.target_,
                            debugObjectName: this.name_,
                            oldValue: l,
                            name: e,
                        };
                        (0, a && dv(this, s));
                    }
                } finally {
                    dh();
                }
                return !0;
            }),
            (t.observe_ = function (e, t) {
                return fv(this, e);
            }),
            (t.intercept_ = function (e) {
                return sv(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
                var n,
                    r,
                    i = cv(this);
                if (i) {
                    var a = i
                        ? {
                              type: Av,
                              observableKind: 'object',
                              debugObjectName: this.name_,
                              object: this.proxy_ || this.target_,
                              name: e,
                              newValue: t,
                          }
                        : null;
                    i && dv(this, a);
                }
                (null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(!0),
                    this.keysAtom_.reportChanged());
            }),
            (t.ownKeys_ = function () {
                return (this.keysAtom_.reportObserved(), bd(this.target_));
            }),
            (t.keys_ = function () {
                return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
            }),
            e
        );
    })();
function Bv(e, t) {
    var n;
    if (wd(e, Id)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
        i = new Fv(
            e,
            new Map(),
            String(r),
            (function (e) {
                var t;
                return e ? (null != (t = e.defaultDecorator) ? t : up(e)) : void 0;
            })(t),
        );
    return (pd(e, Id, i), e);
}
var Uv = vd('ObservableObjectAdministration', Fv);
function $v(e) {
    return (
        Dv[e] ||
        (Dv[e] = {
            get: function () {
                return this[Id].getObservablePropValue_(e);
            },
            set: function (t) {
                return this[Id].setObservablePropValue_(e, t);
            },
        })
    );
}
function Wv(e) {
    return !!cd(e) && Uv(e[Id]);
}
function qv(e, t, n) {
    var r;
    null == (r = e.target_[Nd]) || delete r[n];
}
var Hv,
    Gv,
    Kv = Zv(0),
    Qv = (function () {
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
    Yv = 0,
    Xv = function () {};
((Hv = Xv),
    (Gv = Array.prototype),
    Object.setPrototypeOf
        ? Object.setPrototypeOf(Hv.prototype, Gv)
        : void 0 !== Hv.prototype.__proto__
          ? (Hv.prototype.__proto__ = Gv)
          : (Hv.prototype = Gv));
var Jv = (function (e, t, n) {
    function r(t, n, r, i) {
        var a;
        return (
            void 0 === r && (r = 'ObservableArray'),
            void 0 === i && (i = !1),
            (a = e.call(this) || this),
            om(function () {
                var e = new gv(r, n, i, !0);
                ((e.proxy_ = Cd(a)),
                    hd(Cd(a), Id, e),
                    t && t.length && a.spliceWithArray(0, 0, t),
                    Qv && Object.defineProperty(Cd(a), '0', Kv));
            }),
            a
        );
    }
    Ed(r, e);
    var i = r.prototype;
    return (
        (i.concat = function () {
            this[Id].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return Array.prototype.concat.apply(
                this.slice(),
                t.map(function (e) {
                    return Pv(e) ? e.slice() : e;
                }),
            );
        }),
        (i[n] = function () {
            var e = this,
                t = 0;
            return fm({
                next: function () {
                    return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
                },
            });
        }),
        xd(r, [
            {
                key: 'length',
                get: function () {
                    return this[Id].getArrayLength_();
                },
                set: function (e) {
                    this[Id].setArrayLength_(e);
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
})(Xv, Symbol.toStringTag, Symbol.iterator);
function Zv(e) {
    return {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this[Id].get_(e);
        },
        set: function (t) {
            this[Id].set_(e, t);
        },
    };
}
function em(e) {
    Zf(Jv.prototype, '' + e, Zv(e));
}
function tm(e) {
    if (e > Yv) {
        for (var t = Yv; t < e + 100; t++) em(t);
        Yv = e;
    }
}
function nm(e, t, n) {
    return new Jv(e, t, n);
}
function rm(e, t) {
    if ('object' == typeof e && null !== e) {
        if (Pv(e)) return (void 0 !== t && Kf(23), e[Id].atom_);
        if (zv(e)) return e.atom_;
        if (Lv(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return (n || Kf(25, t, am(e)), n);
        }
        if (Wv(e)) {
            if (!t) return Kf(26);
            var r = e[Id].values_.get(t);
            return (r || Kf(27, t, am(e)), r);
        }
        if (zd(e) || Hp(e) || _h(e)) return e;
    } else if (sd(e) && _h(e[Id])) return e[Id];
    Kf(28);
}
function im(e, t) {
    return (
        e || Kf(29),
        void 0 !== t ? im(rm(e, t)) : zd(e) || Hp(e) || _h(e) || Lv(e) || zv(e) ? e : e[Id] ? e[Id] : void Kf(24, e)
    );
}
function am(e, t) {
    var n;
    if (void 0 !== t) n = rm(e, t);
    else {
        if (jh(e)) return e.name;
        n = Wv(e) || Lv(e) || zv(e) ? im(e) : rm(e);
    }
    return n.name_;
}
function om(e) {
    var t = Zp(),
        n = zp(!0);
    fh();
    try {
        return e();
    } finally {
        (dh(), Dp(n), eh(t));
    }
}
(Object.entries(bv).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && pd(Jv.prototype, t, n);
}),
    tm(1e3));
var lm = ed.toString;
function sm(e, t, n) {
    return (void 0 === n && (n = -1), um(e, t, n));
}
function um(e, t, n, r, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var a = typeof e;
    if ('function' !== a && 'object' !== a && 'object' != typeof t) return !1;
    var o = lm.call(e);
    if (o !== lm.call(t)) return !1;
    switch (o) {
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
    ((e = cm(e)), (t = cm(t)));
    var l = '[object Array]' === o;
    if (!l) {
        if ('object' != typeof e || 'object' != typeof t) return !1;
        var s = e.constructor,
            u = t.constructor;
        if (
            s !== u &&
            !(sd(s) && s instanceof s && sd(u) && u instanceof u) &&
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
        for (; c--; ) if (!um(e[c], t[c], n - 1, r, i)) return !1;
    } else {
        var f,
            d = Object.keys(e);
        if (((c = d.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (!wd(t, (f = d[c])) || !um(e[f], t[f], n - 1, r, i)) return !1;
    }
    return (r.pop(), i.pop(), !0);
}
function cm(e) {
    return Pv(e) ? e.slice() : md(e) || Lv(e) || gd(e) || zv(e) ? Array.from(e.entries()) : e;
}
function fm(e) {
    return ((e[Symbol.iterator] = dm), e);
}
function dm() {
    return this;
}
(['Symbol', 'Map', 'Set'].forEach(function (e) {
    void 0 === Yf()[e] && Kf("MobX requires global '" + e + "' to be available or polyfilled");
}),
    'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
                return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
            },
            extras: { getDebugName: am },
            $mobx: Id,
        }));
const pm = {
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
    hm = window;
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
class vm {
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
        var t, n, r, i, a, o, l, s, u, c, f, d, p;
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
                    (null === (a = this.model.get('UW5')) || void 0 === a
                        ? void 0
                        : a.get(e.substring(v + 1, v + 2))) || 0),
                (m +=
                    (null === (o = this.model.get('UW6')) || void 0 === o
                        ? void 0
                        : o.get(e.substring(v + 2, v + 3))) || 0),
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
 */ const mm = console.assert,
    gm = String.fromCharCode(8203),
    ym = 1,
    bm = 3,
    _m = { Inline: 0, Block: 1, Skip: 2, Break: 3, NoBreak: 4, BreakOpportunity: 5 },
    wm = {
        AREA: _m.Skip,
        BASE: _m.Skip,
        BASEFONT: _m.Skip,
        DATALIST: _m.Skip,
        HEAD: _m.Skip,
        LINK: _m.Skip,
        META: _m.Skip,
        NOEMBED: _m.Skip,
        NOFRAMES: _m.Skip,
        PARAM: _m.Skip,
        RP: _m.Skip,
        SCRIPT: _m.Skip,
        STYLE: _m.Skip,
        TEMPLATE: _m.Skip,
        TITLE: _m.Skip,
        NOSCRIPT: _m.Skip,
        HR: _m.Break,
        LISTING: _m.Skip,
        PLAINTEXT: _m.Skip,
        PRE: _m.Skip,
        XMP: _m.Skip,
        BR: _m.Break,
        RT: _m.Skip,
        WBR: _m.BreakOpportunity,
        INPUT: _m.Skip,
        SELECT: _m.Skip,
        BUTTON: _m.Skip,
        TEXTAREA: _m.Skip,
        ABBR: _m.Skip,
        CODE: _m.Skip,
        IFRAME: _m.Skip,
        TIME: _m.Skip,
        VAR: _m.Skip,
        NOBR: _m.NoBreak,
    },
    km = new Set([
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
    Sm = 3;
function xm(e) {
    const t = e.nodeName,
        n = wm[t];
    if (void 0 !== n) return n;
    if ('function' == typeof hm.getComputedStyle) {
        const t = hm.getComputedStyle(e);
        switch (t.whiteSpace) {
            case 'nowrap':
            case 'pre':
                return _m.NoBreak;
        }
        const n = t.display;
        if (n)
            return (function (e) {
                return 'inline' === e
                    ? _m.Inline
                    : 'block' === e
                      ? _m.Block
                      : e.startsWith('ruby')
                        ? 'ruby-text' === e
                            ? _m.Skip
                            : _m.Inline
                        : _m.Block;
            })(n);
    }
    return km.has(t) ? _m.Block : _m.Inline;
}
class Om {
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
        if ((mm(0 === t.length || t.join('') === this.text), t.length <= 1)) return;
        mm(this.canSplit);
        const n = this.nodeOrText;
        if ('string' == typeof e) return void (n.nodeValue = t.join(e));
        const r = n.ownerDocument;
        let i = [];
        for (const a of t) (a && i.push(r.createTextNode(a)), i.push(null));
        (i.pop(), (i = i.map((t) => t || e.cloneNode(!0))), n.replaceWith(...i));
    }
}
class Em {
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
class Pm {
    constructor(e, t) {
        ((this.separator = gm),
            (this.parser_ = e),
            void 0 !== t &&
                (void 0 !== t.className && (this.className = t.className),
                void 0 !== t.separator && (this.separator = t.separator)));
    }
    static hasChildTextNode(e) {
        for (const t of e.childNodes) if (t.nodeType === Sm) return !0;
        return !1;
    }
    applyToElement(e) {
        for (const t of this.getBlocks(e)) (mm(!t.isEmpty()), this.applyToParagraph(t));
    }
    *getBlocks(e, t) {
        if ((mm(e.nodeType === ym), this.className && e.classList.contains(this.className))) return;
        const n = xm(e);
        if (n === _m.Skip) return;
        if (n === _m.Break)
            return (
                t && !t.isEmpty() && (t.setHasBreakOpportunityAfter(), yield t, (t.nodes = [])),
                void mm(!e.firstChild)
            );
        if (n === _m.BreakOpportunity) return void (t && t.setHasBreakOpportunityAfter());
        mm(n === _m.Block || n === _m.Inline || n === _m.NoBreak);
        const r = !t || n === _m.Block,
            i = r ? new Em(e) : t;
        for (const a of e.childNodes)
            switch (a.nodeType) {
                case ym:
                    for (const e of this.getBlocks(a, i)) yield e;
                    break;
                case bm:
                    if (n === _m.NoBreak) {
                        const e = a.nodeValue;
                        e && i.nodes.push(new Om(e));
                        break;
                    }
                    i.nodes.push(new Om(a));
            }
        r && !i.isEmpty() && (yield i);
    }
    applyToParagraph(e) {
        if ((mm(e.nodes.length > 0), !e.nodes.some((e) => e.canSplit))) return;
        const t = e.text;
        if (/^\s*$/.test(t)) return;
        const n = this.parser_.parseBoundaries(t);
        if (n.length <= 0) return;
        (mm(n[0] > 0), mm(n.every((e, t) => 0 === t || e > n[t - 1])), mm(n[n.length - 1] < t.length));
        const r = e.excludeForcedOpportunities(n);
        (r.push(t.length + 1), this.splitNodes(e.nodes, r), this.applyBlockStyle(e.element));
    }
    splitNodes(e, t) {
        var n;
        (mm(t.length > 0), mm(t.every((e, n) => 0 === n || e > t[n - 1])));
        const r = e.reduce((e, t) => e + t.length, 0);
        mm(t[t.length - 1] > r);
        let i = 0,
            a = t[0];
        mm(a > 0);
        let o = 0,
            l = null;
        for (const s of e) {
            (mm(a >= o), mm(0 === s.chunks.length));
            const e = s.text;
            if (!e) continue;
            const r = e.length,
                u = o + r;
            if ((mm(!l || l.canSplit), !s.canSplit)) {
                for (
                    l &&
                    a === o &&
                    (0 === l.chunks.length && l.chunks.push(null !== (n = l.text) && void 0 !== n ? n : ''),
                    l.chunks.push(''));
                    a < u;

                )
                    a = t[++i];
                ((l = null), (o = u));
                continue;
            }
            if (((l = s), a >= u)) {
                o = u;
                continue;
            }
            const c = s.chunks;
            let f = 0;
            for (; a < u; ) {
                const n = a - o;
                (mm(n >= f), c.push(e.slice(f, n)), (f = n), (a = t[++i]));
            }
            (mm(f < r), c.push(e.slice(f)), (o = u));
        }
        (mm(o === r), mm(i < t.length), mm(t[i] >= r));
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
class Cm extends vm {
    constructor(e, t = { separator: gm }) {
        (super(e), (this.htmlProcessor = new Pm(this, t)));
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
        const t = ((e) => new hm.DOMParser().parseFromString(e, 'text/html'))(e);
        if (Pm.hasChildTextNode(t.body)) {
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
 */ const Am = () => new Cm(pm);
var Tm = Hm(),
    Nm = (e) => Um(e, Tm),
    jm = Hm();
Nm.write = (e) => Um(e, jm);
var Rm = Hm();
Nm.onStart = (e) => Um(e, Rm);
var Lm = Hm();
Nm.onFrame = (e) => Um(e, Lm);
var Im = Hm();
Nm.onFinish = (e) => Um(e, Im);
var Mm = [];
Nm.setTimeout = (e, t) => {
    const n = Nm.now() + t,
        r = () => {
            const e = Mm.findIndex((e) => e.cancel == r);
            (~e && Mm.splice(e, 1), (Fm -= ~e ? 1 : 0));
        },
        i = { time: n, handler: e, cancel: r };
    return (Mm.splice(zm(n), 0, i), (Fm += 1), $m(), i);
};
var zm = (e) => ~(~Mm.findIndex((t) => t.time > e) || ~Mm.length);
((Nm.cancel = (e) => {
    (Rm.delete(e), Lm.delete(e), Im.delete(e), Tm.delete(e), jm.delete(e));
}),
    (Nm.sync = (e) => {
        ((Bm = !0), Nm.batchedUpdates(e), (Bm = !1));
    }),
    (Nm.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            ((t = e), Nm.onStart(n));
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                (Rm.delete(n), (t = null));
            }),
            r
        );
    }));
var Dm = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
((Nm.use = (e) => (Dm = e)),
    (Nm.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (Nm.batchedUpdates = (e) => e()),
    (Nm.catch = console.error),
    (Nm.frameLoop = 'always'),
    (Nm.advance = () => {
        'demand' !== Nm.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : qm();
    }));
var Vm = -1,
    Fm = 0,
    Bm = !1;
function Um(e, t) {
    Bm ? (t.delete(e), e(0)) : (t.add(e), $m());
}
function $m() {
    Vm < 0 && ((Vm = 0), 'demand' !== Nm.frameLoop && Dm(Wm));
}
function Wm() {
    ~Vm && (Dm(Wm), Nm.batchedUpdates(qm));
}
function qm() {
    const e = Vm;
    Vm = Nm.now();
    const t = zm(Vm);
    (t && (Gm(Mm.splice(0, t), (e) => e.handler()), (Fm -= t)),
        Fm ? (Rm.flush(), Tm.flush(e ? Math.min(64, Vm - e) : 16.667), Lm.flush(), jm.flush(), Im.flush()) : (Vm = -1));
}
function Hm() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            ((Fm += t != e || e.has(n) ? 0 : 1), e.add(n));
        },
        delete: (n) => ((Fm -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (Fm -= t.size), Gm(t, (t) => t(n) && e.add(t)), (Fm += e.size), (t = e));
        },
    };
}
function Gm(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            Nm.catch(n);
        }
    });
}
var Km = Object.defineProperty,
    Qm = {};
function Ym() {}
((e, t) => {
    for (var n in t) Km(e, n, { get: t[n], enumerable: !0 });
})(Qm, {
    assign: () => cg,
    colors: () => lg,
    createStringInterpolator: () => rg,
    skipAnimation: () => sg,
    to: () => ig,
    willAdvance: () => ug,
});
var Xm = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
function Jm(e, t) {
    if (Xm.arr(e)) {
        if (!Xm.arr(t) || e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
    }
    return e === t;
}
var Zm = (e, t) => e.forEach(t);
function eg(e, t, n) {
    if (Xm.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var tg = (e) => (Xm.und(e) ? [] : Xm.arr(e) ? e : [e]);
function ng(e, t) {
    if (e.size) {
        const n = Array.from(e);
        (e.clear(), Zm(n, t));
    }
}
var rg,
    ig,
    ag = (e, ...t) => ng(e, (e) => e(...t)),
    og = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    lg = null,
    sg = !1,
    ug = Ym,
    cg = (e) => {
        (e.to && (ig = e.to),
            e.now && (Nm.now = e.now),
            void 0 !== e.colors && (lg = e.colors),
            null != e.skipAnimation && (sg = e.skipAnimation),
            e.createStringInterpolator && (rg = e.createStringInterpolator),
            e.requestAnimationFrame && Nm.use(e.requestAnimationFrame),
            e.batchedUpdates && (Nm.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (ug = e.willAdvance),
            e.frameLoop && (Nm.frameLoop = e.frameLoop));
    },
    fg = new Set(),
    dg = [],
    pg = [],
    hg = 0,
    vg = {
        get idle() {
            return !fg.size && !dg.length;
        },
        start(e) {
            hg > e.priority ? (fg.add(e), Nm.onStart(mg)) : (gg(e), Nm(bg));
        },
        advance: bg,
        sort(e) {
            if (hg) Nm.onFrame(() => vg.sort(e));
            else {
                const t = dg.indexOf(e);
                ~t && (dg.splice(t, 1), yg(e));
            }
        },
        clear() {
            ((dg = []), fg.clear());
        },
    };
function mg() {
    (fg.forEach(gg), fg.clear(), Nm(bg));
}
function gg(e) {
    dg.includes(e) || yg(e);
}
function yg(e) {
    dg.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(dg, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function bg(e) {
    const t = pg;
    for (let n = 0; n < dg.length; n++) {
        const r = dg[n];
        ((hg = r.priority), r.idle || (ug(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((hg = 0), ((pg = dg).length = 0), (dg = t).length > 0);
}
var _g = {
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
    wg = '[-+]?\\d*\\.?\\d+',
    kg = wg + '%';
function Sg(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var xg = new RegExp('rgb' + Sg(wg, wg, wg)),
    Og = new RegExp('rgba' + Sg(wg, wg, wg, wg)),
    Eg = new RegExp('hsl' + Sg(wg, kg, kg)),
    Pg = new RegExp('hsla' + Sg(wg, kg, kg, wg)),
    Cg = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    Ag = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    Tg = /^#([0-9a-fA-F]{6})$/,
    Ng = /^#([0-9a-fA-F]{8})$/;
function jg(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function Rg(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        i = 2 * n - r,
        a = jg(i, r, e + 1 / 3),
        o = jg(i, r, e),
        l = jg(i, r, e - 1 / 3);
    return (Math.round(255 * a) << 24) | (Math.round(255 * o) << 16) | (Math.round(255 * l) << 8);
}
function Lg(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Ig(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function Mg(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function zg(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Dg(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = Tg.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : lg && void 0 !== lg[e]
                ? lg[e]
                : (t = xg.exec(e))
                  ? ((Lg(t[1]) << 24) | (Lg(t[2]) << 16) | (Lg(t[3]) << 8) | 255) >>> 0
                  : (t = Og.exec(e))
                    ? ((Lg(t[1]) << 24) | (Lg(t[2]) << 16) | (Lg(t[3]) << 8) | Mg(t[4])) >>> 0
                    : (t = Cg.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = Ng.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = Ag.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = Eg.exec(e))
                            ? (255 | Rg(Ig(t[1]), zg(t[2]), zg(t[3]))) >>> 0
                            : (t = Pg.exec(e))
                              ? (Rg(Ig(t[1]), zg(t[2]), zg(t[3])) | Mg(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var Vg = (e, t, n) => {
    if (Xm.fun(e)) return e;
    if (Xm.arr(e)) return Vg({ range: e, output: t, extrapolate: n });
    if (Xm.str(e.output[0])) return rg(e);
    const r = e,
        i = r.output,
        a = r.range || [0, 1],
        o = r.extrapolateLeft || r.extrapolate || 'extend',
        l = r.extrapolateRight || r.extrapolate || 'extend',
        s = r.easing || ((e) => e);
    return (e) => {
        const t = (function (e, t) {
            for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
            return n - 1;
        })(e, a);
        return (function (e, t, n, r, i, a, o, l, s) {
            let u = s ? s(e) : e;
            if (u < t) {
                if ('identity' === o) return u;
                'clamp' === o && (u = t);
            }
            if (u > n) {
                if ('identity' === l) return u;
                'clamp' === l && (u = n);
            }
            if (r === i) return r;
            if (t === n) return e <= t ? r : i;
            t === -1 / 0 ? (u = -u) : n === 1 / 0 ? (u -= t) : (u = (u - t) / (n - t));
            ((u = a(u)), r === -1 / 0 ? (u = -u) : i === 1 / 0 ? (u += r) : (u = u * (i - r) + r));
            return u;
        })(e, a[t], a[t + 1], i[t], i[t + 1], s, o, l, r.map);
    };
};
var Fg = Symbol.for('FluidValue.get'),
    Bg = Symbol.for('FluidValue.observers'),
    Ug = (e) => Boolean(e && e[Fg]),
    $g = (e) => (e && e[Fg] ? e[Fg]() : e),
    Wg = (e) => e[Bg] || null;
function qg(e, t) {
    const n = e[Bg];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
var Hg = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            Gg(this, e);
        }
    },
    Gg = (e, t) => Xg(e, Fg, t);
function Kg(e, t) {
    if (e[Fg]) {
        let n = e[Bg];
        (n || Xg(e, Bg, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function Qg(e, t) {
    const n = e[Bg];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[Bg] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
var Yg,
    Xg = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    Jg = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    Zg = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    ey = new RegExp(`(${Jg.source})(%|[a-z]+)`, 'i'),
    ty = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    ny = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    ry = (e) => {
        const [t, n] = iy(e);
        if (!t || og()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && ny.test(n) ? ry(n) : n || e;
    },
    iy = (e) => {
        const t = ny.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    ay = (e, t, n, r, i) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
    oy = (e) => {
        Yg || (Yg = lg ? new RegExp(`(${Object.keys(lg).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => $g(e).replace(ny, ry).replace(Zg, Dg).replace(Yg, Dg)),
            n = t.map((e) => e.match(Jg).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => Vg({ ...e, output: t }));
        return (e) => {
            var n;
            const i = !ey.test(t[0]) && (null == (n = t.find((e) => ey.test(e))) ? void 0 : n.replace(Jg, ''));
            let a = 0;
            return t[0].replace(Jg, () => `${r[a++](e)}${i || ''}`).replace(ty, ay);
        };
    },
    ly = 'react-spring: ',
    sy = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${ly}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    uy = sy(console.warn);
var cy = sy(console.warn);
function fy(e) {
    return Xm.str(e) && ('#' == e[0] || /\d/.test(e) || (!og() && ny.test(e)) || e in (lg || {}));
}
var dy = og() ? U.useEffect : U.useLayoutEffect,
    py = () => {
        const e = U.useRef(!1);
        return (
            dy(
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
function hy() {
    const e = U.useState()[1],
        t = py();
    return () => {
        t.current && e(Math.random());
    };
}
var vy = (e) => U.useEffect(e, my),
    my = [];
function gy(e) {
    const t = U.useRef();
    return (
        U.useEffect(() => {
            t.current = e;
        }),
        t.current
    );
}
var yy = Symbol.for('Animated:node'),
    by = (e) => e && e[yy],
    _y = (e, t) => {
        return ((n = e), (r = yy), (i = t), Object.defineProperty(n, r, { value: i, writable: !0, configurable: !0 }));
        var n, r, i;
    },
    wy = (e) => e && e[yy] && e[yy].getPayload(),
    ky = class {
        constructor() {
            _y(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    Sy = class extends ky {
        constructor(e) {
            (super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                Xm.num(this._value) && (this.lastPosition = this._value));
        }
        static create(e) {
            return new Sy(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                Xm.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            ((this.done = !1),
                Xm.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null)));
        }
    },
    xy = class extends Sy {
        constructor(e) {
            (super(0), (this._string = null), (this._toString = Vg({ output: [e, e] })));
        }
        static create(e) {
            return new xy(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (Xm.str(e)) {
                if (e == this._string) return !1;
                ((this._string = e), (this._value = 1));
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null;
            }
            return !0;
        }
        reset(e) {
            (e && (this._toString = Vg({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
        }
    },
    Oy = { dependencies: null },
    Ey = class extends ky {
        constructor(e) {
            (super(), (this.source = e), this.setValue(e));
        }
        getValue(e) {
            const t = {};
            return (
                eg(this.source, (n, r) => {
                    var i;
                    (i = n) && i[yy] === i ? (t[r] = n.getValue(e)) : Ug(n) ? (t[r] = $g(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            ((this.source = e), (this.payload = this._makePayload(e)));
        }
        reset() {
            this.payload && Zm(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return (eg(e, this._addToPayload, t), Array.from(t));
            }
        }
        _addToPayload(e) {
            Oy.dependencies && Ug(e) && Oy.dependencies.add(e);
            const t = wy(e);
            t && Zm(t, (e) => this.add(e));
        }
    },
    Py = class extends Ey {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new Py(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map(Cy)), !0);
        }
    };
function Cy(e) {
    return (fy(e) ? xy : Sy).create(e);
}
function Ay(e) {
    const t = by(e);
    return t ? t.constructor : Xm.arr(e) ? Py : fy(e) ? xy : Sy;
}
var Ty = (e, t) => {
        const n = !Xm.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return U.forwardRef((r, i) => {
            const a = U.useRef(null),
                o =
                    n &&
                    U.useCallback(
                        (e) => {
                            a.current = (function (e, t) {
                                e && (Xm.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(i, e);
                        },
                        [i],
                    ),
                [l, s] = (function (e, t) {
                    const n = new Set();
                    ((Oy.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                    return ((e = new Ey(e)), (Oy.dependencies = null), [e, n]);
                })(r, t),
                u = hy(),
                c = () => {
                    const e = a.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && u();
                },
                f = new Ny(c, s),
                d = U.useRef();
            (dy(
                () => (
                    (d.current = f),
                    Zm(s, (e) => Kg(e, f)),
                    () => {
                        d.current && (Zm(d.current.deps, (e) => Qg(e, d.current)), Nm.cancel(d.current.update));
                    }
                ),
            ),
                U.useEffect(c, []),
                vy(() => () => {
                    const e = d.current;
                    Zm(e.deps, (t) => Qg(t, e));
                }));
            const p = t.getComponentProps(l.getValue());
            return U.createElement(e, { ...p, ref: o });
        });
    },
    Ny = class {
        constructor(e, t) {
            ((this.update = e), (this.deps = t));
        }
        eventObserved(e) {
            'change' == e.type && Nm.write(this.update);
        }
    };
var jy = Symbol.for('AnimatedComponent'),
    Ry = (
        e,
        {
            applyAnimatedValues: t = () => !1,
            createAnimatedStyle: n = (e) => new Ey(e),
            getComponentProps: r = (e) => e,
        } = {},
    ) => {
        const i = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
            a = (e) => {
                const t = Ly(e) || 'Anonymous';
                return (
                    ((e = Xm.str(e) ? a[e] || (a[e] = Ty(e, i)) : e[jy] || (e[jy] = Ty(e, i))).displayName =
                        `Animated(${t})`),
                    e
                );
            };
        return (
            eg(e, (t, n) => {
                (Xm.arr(e) && (n = Ly(t)), (a[n] = a(t)));
            }),
            { animated: a }
        );
    },
    Ly = (e) => (Xm.str(e) ? e : e && Xm.str(e.displayName) ? e.displayName : (Xm.fun(e) && e.name) || null);
function Iy(e, ...t) {
    return Xm.fun(e) ? e(...t) : e;
}
var My = (e, t) => !0 === e || !!(t && e && (Xm.fun(e) ? e(t) : tg(e).includes(t))),
    zy = (e, t) => (Xm.obj(e) ? t && e[t] : e),
    Dy = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
    Vy = (e) => e,
    Fy = (e, t = Vy) => {
        let n = By;
        e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
        const r = {};
        for (const i of n) {
            const n = t(e[i], i);
            Xm.und(n) || (r[i] = n);
        }
        return r;
    },
    By = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
    Uy = {
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
function $y(e) {
    const t = (function (e) {
        const t = {};
        let n = 0;
        if (
            (eg(e, (e, r) => {
                Uy[r] || ((t[r] = e), n++);
            }),
            n)
        )
            return t;
    })(e);
    if (t) {
        const n = { to: t };
        return (eg(e, (e, r) => r in t || (n[r] = e)), n);
    }
    return { ...e };
}
function Wy(e) {
    return (
        (e = $g(e)),
        Xm.arr(e) ? e.map(Wy) : fy(e) ? Qm.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
    );
}
function qy(e) {
    for (const t in e) return !0;
    return !1;
}
function Hy(e) {
    return Xm.fun(e) || (Xm.arr(e) && Xm.obj(e[0]));
}
function Gy(e, t) {
    var n;
    (null == (n = e.ref) || n.delete(e), null == t || t.delete(e));
}
function Ky(e, t) {
    var n;
    t && e.ref !== t && (null == (n = e.ref) || n.delete(e), t.add(e), (e.ref = t));
}
var Qy = { default: { tension: 170, friction: 26 }, stiff: { tension: 210, friction: 20 } },
    Yy = { ...Qy.default, mass: 1, damping: 1, easing: (e) => e, clamp: !1 };
function Xy(e, t) {
    if (Xm.und(t.decay)) {
        const n = !Xm.und(t.tension) || !Xm.und(t.friction);
        ((!n && Xm.und(t.frequency) && Xm.und(t.damping) && Xm.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0));
    } else e.duration = void 0;
}
var Jy = [];
function Zy(e, { key: t, props: n, defaultProps: r, state: i, actions: a }) {
    return new Promise((o, l) => {
        let s,
            u,
            c = My(n.cancel ?? (null == r ? void 0 : r.cancel), t);
        if (c) p();
        else {
            Xm.und(n.pause) || (i.paused = My(n.pause, t));
            let e = null == r ? void 0 : r.pause;
            (!0 !== e && (e = i.paused || My(e, t)),
                (s = Iy(n.delay || 0, t)),
                e ? (i.resumeQueue.add(d), a.pause()) : (a.resume(), d()));
        }
        function f() {
            (i.resumeQueue.add(d), i.timeouts.delete(u), u.cancel(), (s = u.time - Nm.now()));
        }
        function d() {
            s > 0 && !Qm.skipAnimation
                ? ((i.delayed = !0), (u = Nm.setTimeout(p, s)), i.pauseQueue.add(f), i.timeouts.add(u))
                : p();
        }
        function p() {
            (i.delayed && (i.delayed = !1),
                i.pauseQueue.delete(f),
                i.timeouts.delete(u),
                e <= (i.cancelId || 0) && (c = !0));
            try {
                a.start({ ...n, callId: e, cancel: c }, o);
            } catch (t) {
                l(t);
            }
        }
    });
}
var eb = (e, t) =>
        1 == t.length
            ? t[0]
            : t.some((e) => e.cancelled)
              ? rb(e.get())
              : t.every((e) => e.noop)
                ? tb(e.get())
                : nb(
                      e.get(),
                      t.every((e) => e.finished),
                  ),
    tb = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
    nb = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
    rb = (e) => ({ value: e, cancelled: !0, finished: !1 });
function ib(e, t, n, r) {
    const { callId: i, parentId: a, onRest: o } = t,
        { asyncTo: l, promise: s } = n;
    return a || e !== l || t.reset
        ? (n.promise = (async () => {
              ((n.asyncId = i), (n.asyncTo = e));
              const u = Fy(t, (e, t) => ('onRest' === t ? void 0 : e));
              let c, f;
              const d = new Promise((e, t) => ((c = e), (f = t))),
                  p = (e) => {
                      const t = (i <= (n.cancelId || 0) && rb(r)) || (i !== n.asyncId && nb(r, !1));
                      if (t) throw ((e.result = t), f(e), e);
                  },
                  h = (e, t) => {
                      const a = new ob(),
                          o = new lb();
                      return (async () => {
                          if (Qm.skipAnimation) throw (ab(n), (o.result = nb(r, !1)), f(o), o);
                          p(a);
                          const l = Xm.obj(e) ? { ...e } : { ...t, to: e };
                          ((l.parentId = i),
                              eg(u, (e, t) => {
                                  Xm.und(l[t]) && (l[t] = e);
                              }));
                          const s = await r.start(l);
                          return (
                              p(a),
                              n.paused &&
                                  (await new Promise((e) => {
                                      n.resumeQueue.add(e);
                                  })),
                              s
                          );
                      })();
                  };
              let v;
              if (Qm.skipAnimation) return (ab(n), nb(r, !1));
              try {
                  let t;
                  ((t = Xm.arr(e)
                      ? (async (e) => {
                            for (const t of e) await h(t);
                        })(e)
                      : Promise.resolve(e(h, r.stop.bind(r)))),
                      await Promise.all([t.then(c), d]),
                      (v = nb(r.get(), !0, !1)));
              } catch (m) {
                  if (m instanceof ob) v = m.result;
                  else {
                      if (!(m instanceof lb)) throw m;
                      v = m.result;
                  }
              } finally {
                  i == n.asyncId && ((n.asyncId = a), (n.asyncTo = a ? l : void 0), (n.promise = a ? s : void 0));
              }
              return (
                  Xm.fun(o) &&
                      Nm.batchedUpdates(() => {
                          o(v, r, r.item);
                      }),
                  v
              );
          })())
        : s;
}
function ab(e, t) {
    (ng(e.timeouts, (e) => e.cancel()),
        e.pauseQueue.clear(),
        e.resumeQueue.clear(),
        (e.asyncId = e.asyncTo = e.promise = void 0),
        t && (e.cancelId = t));
}
var ob = class extends Error {
        constructor() {
            super(
                'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
            );
        }
    },
    lb = class extends Error {
        constructor() {
            super('SkipAnimationSignal');
        }
    },
    sb = (e) => e instanceof cb,
    ub = 1,
    cb = class extends Hg {
        constructor() {
            (super(...arguments), (this.id = ub++), (this._priority = 0));
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = by(this);
            return e && e.getValue();
        }
        to(...e) {
            return Qm.to(this, e);
        }
        interpolate(...e) {
            return (uy(`${ly}The "interpolate" function is deprecated in v9 (use "to" instead)`), Qm.to(this, e));
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
            qg(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            (this.idle || vg.sort(this), qg(this, { type: 'priority', parent: this, priority: e }));
        }
    },
    fb = Symbol.for('SpringPhase'),
    db = (e) => (1 & e[fb]) > 0,
    pb = (e) => (2 & e[fb]) > 0,
    hb = (e) => (4 & e[fb]) > 0,
    vb = (e, t) => (t ? (e[fb] |= 3) : (e[fb] &= -3)),
    mb = (e, t) => (t ? (e[fb] |= 4) : (e[fb] &= -5)),
    gb = class extends cb {
        constructor(e, t) {
            if (
                (super(),
                (this.animation = new (class {
                    constructor() {
                        ((this.changed = !1),
                            (this.values = Jy),
                            (this.toValues = null),
                            (this.fromValues = Jy),
                            (this.config = new (class {
                                constructor() {
                                    ((this.velocity = 0), Object.assign(this, Yy));
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
                !Xm.und(e) || !Xm.und(t))
            ) {
                const n = Xm.obj(e) ? { ...e } : { ...t, from: e };
                (Xm.und(n.default) && (n.default = !0), this.start(n));
            }
        }
        get idle() {
            return !(pb(this) || this._state.asyncTo) || hb(this);
        }
        get goal() {
            return $g(this.animation.to);
        }
        get velocity() {
            const e = by(this);
            return e instanceof Sy ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
        }
        get hasAnimated() {
            return db(this);
        }
        get isAnimating() {
            return pb(this);
        }
        get isPaused() {
            return hb(this);
        }
        get isDelayed() {
            return this._state.delayed;
        }
        advance(e) {
            let t = !0,
                n = !1;
            const r = this.animation;
            let { toValues: i } = r;
            const { config: a } = r,
                o = wy(r.to);
            (!o && Ug(r.to) && (i = tg($g(r.to))),
                r.values.forEach((l, s) => {
                    if (l.done) return;
                    const u = l.constructor == xy ? 1 : o ? o[s].lastPosition : i[s];
                    let c = r.immediate,
                        f = u;
                    if (!c) {
                        if (((f = l.lastPosition), a.tension <= 0)) return void (l.done = !0);
                        let t = (l.elapsedTime += e);
                        const n = r.fromValues[s],
                            i = null != l.v0 ? l.v0 : (l.v0 = Xm.arr(a.velocity) ? a.velocity[s] : a.velocity);
                        let o;
                        const d = a.precision || (n == u ? 0.005 : Math.min(1, 0.001 * Math.abs(u - n)));
                        if (Xm.und(a.duration))
                            if (a.decay) {
                                const e = !0 === a.decay ? 0.998 : a.decay,
                                    r = Math.exp(-(1 - e) * t);
                                ((f = n + (i / (1 - e)) * (1 - r)),
                                    (c = Math.abs(l.lastPosition - f) <= d),
                                    (o = i * r));
                            } else {
                                o = null == l.lastVelocity ? i : l.lastVelocity;
                                const t = a.restVelocity || d / 10,
                                    r = a.clamp ? 0 : a.bounce,
                                    s = !Xm.und(r),
                                    p = n == u ? l.v0 > 0 : n < u;
                                let h,
                                    v = !1;
                                const m = 1,
                                    g = Math.ceil(e / m);
                                for (
                                    let e = 0;
                                    e < g && ((h = Math.abs(o) > t), h || ((c = Math.abs(u - f) <= d), !c));
                                    ++e
                                ) {
                                    s && ((v = f == u || f > u == p), v && ((o = -o * r), (f = u)));
                                    ((o += ((1e-6 * -a.tension * (f - u) + 0.001 * -a.friction * o) / a.mass) * m),
                                        (f += o * m));
                                }
                            }
                        else {
                            let r = 1;
                            (a.duration > 0 &&
                                (this._memoizedDuration !== a.duration &&
                                    ((this._memoizedDuration = a.duration),
                                    l.durationProgress > 0 &&
                                        ((l.elapsedTime = a.duration * l.durationProgress), (t = l.elapsedTime += e))),
                                (r = (a.progress || 0) + t / this._memoizedDuration),
                                (r = r > 1 ? 1 : r < 0 ? 0 : r),
                                (l.durationProgress = r)),
                                (f = n + a.easing(r) * (u - n)),
                                (o = (f - l.lastPosition) / e),
                                (c = 1 == r));
                        }
                        ((l.lastVelocity = o),
                            Number.isNaN(f) && (console.warn('Got NaN while animating:', this), (c = !0)));
                    }
                    (o && !o[s].done && (c = !1), c ? (l.done = !0) : (t = !1), l.setValue(f, a.round) && (n = !0));
                }));
            const l = by(this),
                s = l.getValue();
            if (t) {
                const e = $g(r.to);
                ((s === e && !n) || a.decay ? n && a.decay && this._onChange(s) : (l.setValue(e), this._onChange(e)),
                    this._stop());
            } else n && this._onChange(s);
        }
        set(e) {
            return (
                Nm.batchedUpdates(() => {
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
            if (pb(this)) {
                const { to: e, config: t } = this.animation;
                Nm.batchedUpdates(() => {
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
                Xm.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [Xm.obj(e) ? e : { ...t, to: e }]),
                Promise.all(n.map((e) => this._update(e))).then((e) => eb(this, e))
            );
        }
        stop(e) {
            const { to: t } = this.animation;
            return (
                this._focus(this.get()),
                ab(this._state, e && this._lastCallId),
                Nm.batchedUpdates(() => this._stop(t, e)),
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
            ((n = Xm.obj(n) ? n[t] : n),
                (null == n || Hy(n)) && (n = void 0),
                (r = Xm.obj(r) ? r[t] : r),
                null == r && (r = void 0));
            const i = { to: n, from: r };
            return (
                db(this) ||
                    (e.reverse && ([n, r] = [r, n]), (r = $g(r)), Xm.und(r) ? by(this) || this._set(n) : this._set(r)),
                i
            );
        }
        _update({ ...e }, t) {
            const { key: n, defaultProps: r } = this;
            (e.default &&
                Object.assign(
                    r,
                    Fy(e, (e, t) => (/^on/.test(t) ? zy(e, n) : e)),
                ),
                xb(this, e, 'onProps'),
                Ob(this, 'onProps', e, this));
            const i = this._prepareNode(e);
            if (Object.isFrozen(this))
                throw Error(
                    'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                );
            const a = this._state;
            return Zy(++this._lastCallId, {
                key: n,
                props: e,
                defaultProps: r,
                state: a,
                actions: {
                    pause: () => {
                        hb(this) ||
                            (mb(this, !0),
                            ag(a.pauseQueue),
                            Ob(this, 'onPause', nb(this, yb(this, this.animation.to)), this));
                    },
                    resume: () => {
                        hb(this) &&
                            (mb(this, !1),
                            pb(this) && this._resume(),
                            ag(a.resumeQueue),
                            Ob(this, 'onResume', nb(this, yb(this, this.animation.to)), this));
                    },
                    start: this._merge.bind(this, i),
                },
            }).then((n) => {
                if (e.loop && n.finished && (!t || !n.noop)) {
                    const t = bb(e);
                    if (t) return this._update(t, !0);
                }
                return n;
            });
        }
        _merge(e, t, n) {
            if (t.cancel) return (this.stop(!0), n(rb(this)));
            const r = !Xm.und(e.to),
                i = !Xm.und(e.from);
            if (r || i) {
                if (!(t.callId > this._lastToId)) return n(rb(this));
                this._lastToId = t.callId;
            }
            const { key: a, defaultProps: o, animation: l } = this,
                { to: s, from: u } = l;
            let { to: c = s, from: f = u } = e;
            (!i || r || (t.default && !Xm.und(c)) || (c = f), t.reverse && ([c, f] = [f, c]));
            const d = !Jm(f, u);
            (d && (l.from = f), (f = $g(f)));
            const p = !Jm(c, s);
            p && this._focus(c);
            const h = Hy(t.to),
                { config: v } = l,
                { decay: m, velocity: g } = v;
            ((r || i) && (v.velocity = 0),
                t.config &&
                    !h &&
                    (function (e, t, n) {
                        (n && (Xy((n = { ...n }), t), (t = { ...n, ...t })), Xy(e, t), Object.assign(e, t));
                        for (const o in Yy) null == e[o] && (e[o] = Yy[o]);
                        let { frequency: r, damping: i } = e;
                        const { mass: a } = e;
                        Xm.und(r) ||
                            (r < 0.01 && (r = 0.01),
                            i < 0 && (i = 0),
                            (e.tension = Math.pow((2 * Math.PI) / r, 2) * a),
                            (e.friction = (4 * Math.PI * i * a) / r));
                    })(v, Iy(t.config, a), t.config !== o.config ? Iy(o.config, a) : void 0));
            let y = by(this);
            if (!y || Xm.und(c)) return n(nb(this, !0));
            const b = Xm.und(t.reset) ? i && !t.default : !Xm.und(f) && My(t.reset, a),
                _ = b ? f : this.get(),
                w = Wy(c),
                k = Xm.num(w) || Xm.arr(w) || fy(w),
                S = !h && (!k || My(o.immediate || t.immediate, a));
            if (p) {
                const e = Ay(c);
                if (e !== y.constructor) {
                    if (!S)
                        throw Error(
                            `Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`,
                        );
                    y = this._set(w);
                }
            }
            const x = y.constructor;
            let O = Ug(c),
                E = !1;
            if (!O) {
                const e = b || (!db(this) && d);
                ((p || e) && ((E = Jm(Wy(_), w)), (O = !E)),
                    ((Jm(l.immediate, S) || S) && Jm(v.decay, m) && Jm(v.velocity, g)) || (O = !0));
            }
            if (
                (E && pb(this) && (l.changed && !b ? (O = !0) : O || this._stop(s)),
                !h &&
                    ((O || Ug(s)) && ((l.values = y.getPayload()), (l.toValues = Ug(c) ? null : x == xy ? [1] : tg(w))),
                    l.immediate != S && ((l.immediate = S), S || b || this._set(s)),
                    O))
            ) {
                const { onRest: e } = l;
                Zm(Sb, (e) => xb(this, t, e));
                const r = nb(this, yb(this, s));
                (ag(this._pendingCalls, r),
                    this._pendingCalls.add(n),
                    l.changed &&
                        Nm.batchedUpdates(() => {
                            var t;
                            ((l.changed = !b),
                                null == e || e(r, this),
                                b ? Iy(o.onRest, r) : null == (t = l.onStart) || t.call(l, r, this));
                        }));
            }
            (b && this._set(_),
                h
                    ? n(ib(t.to, t, this._state, this))
                    : O
                      ? this._start()
                      : pb(this) && !p
                        ? this._pendingCalls.add(n)
                        : n(tb(_)));
        }
        _focus(e) {
            const t = this.animation;
            e !== t.to && (Wg(this) && this._detach(), (t.to = e), Wg(this) && this._attach());
        }
        _attach() {
            let e = 0;
            const { to: t } = this.animation;
            (Ug(t) && (Kg(t, this), sb(t) && (e = t.priority + 1)), (this.priority = e));
        }
        _detach() {
            const { to: e } = this.animation;
            Ug(e) && Qg(e, this);
        }
        _set(e, t = !0) {
            const n = $g(e);
            if (!Xm.und(n)) {
                const e = by(this);
                if (!e || !Jm(n, e.getValue())) {
                    const r = Ay(n);
                    (e && e.constructor == r ? e.setValue(n) : _y(this, r.create(n)),
                        e &&
                            Nm.batchedUpdates(() => {
                                this._onChange(n, t);
                            }));
                }
            }
            return by(this);
        }
        _onStart() {
            const e = this.animation;
            e.changed || ((e.changed = !0), Ob(this, 'onStart', nb(this, yb(this, e.to)), this));
        }
        _onChange(e, t) {
            (t || (this._onStart(), Iy(this.animation.onChange, e, this)),
                Iy(this.defaultProps.onChange, e, this),
                super._onChange(e, t));
        }
        _start() {
            const e = this.animation;
            (by(this).reset($g(e.to)),
                e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                pb(this) || (vb(this, !0), hb(this) || this._resume()));
        }
        _resume() {
            Qm.skipAnimation ? this.finish() : vg.start(this);
        }
        _stop(e, t) {
            if (pb(this)) {
                vb(this, !1);
                const n = this.animation;
                (Zm(n.values, (e) => {
                    e.done = !0;
                }),
                    n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                    qg(this, { type: 'idle', parent: this }));
                const r = t ? rb(this.get()) : nb(this.get(), yb(this, e ?? n.to));
                (ag(this._pendingCalls, r), n.changed && ((n.changed = !1), Ob(this, 'onRest', r, this)));
            }
        }
    };
function yb(e, t) {
    const n = Wy(t);
    return Jm(Wy(e.get()), n);
}
function bb(e, t = e.loop, n = e.to) {
    const r = Iy(t);
    if (r) {
        const i = !0 !== r && $y(r),
            a = (i || e).reverse,
            o = !i || i.reset;
        return _b({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !a || Hy(n) ? n : void 0,
            from: o ? e.from : void 0,
            reset: o,
            ...i,
        });
    }
}
function _b(e) {
    const { to: t, from: n } = (e = $y(e)),
        r = new Set();
    return (Xm.obj(t) && kb(t, r), Xm.obj(n) && kb(n, r), (e.keys = r.size ? Array.from(r) : null), e);
}
function wb(e) {
    const t = _b(e);
    return (Xm.und(t.default) && (t.default = Fy(t)), t);
}
function kb(e, t) {
    eg(e, (e, n) => null != e && t.add(n));
}
var Sb = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
function xb(e, t, n) {
    e.animation[n] = t[n] !== Dy(t, n) ? zy(t[n], e.key) : void 0;
}
function Ob(e, t, ...n) {
    var r, i, a, o;
    (null == (i = (r = e.animation)[t]) || i.call(r, ...n), null == (o = (a = e.defaultProps)[t]) || o.call(a, ...n));
}
var Eb = ['onStart', 'onChange', 'onRest'],
    Pb = 1,
    Cb = class {
        constructor(e, t) {
            ((this.id = Pb++),
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
                Xm.und(n) || this.springs[t].set(n);
            }
        }
        update(e) {
            return (e && this.queue.push(_b(e)), this);
        }
        start(e) {
            let { queue: t } = this;
            return (
                e ? (t = tg(e).map(_b)) : (this.queue = []),
                this._flush ? this._flush(this, t) : (Ib(this, t), Ab(this, t))
            );
        }
        stop(e, t) {
            if ((e !== !!e && (t = e), t)) {
                const n = this.springs;
                Zm(tg(t), (t) => n[t].stop(!!e));
            } else (ab(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
            return this;
        }
        pause(e) {
            if (Xm.und(e)) this.start({ pause: !0 });
            else {
                const t = this.springs;
                Zm(tg(e), (e) => t[e].pause());
            }
            return this;
        }
        resume(e) {
            if (Xm.und(e)) this.start({ pause: !1 });
            else {
                const t = this.springs;
                Zm(tg(e), (e) => t[e].resume());
            }
            return this;
        }
        each(e) {
            eg(this.springs, e);
        }
        _onFrame() {
            const { onStart: e, onChange: t, onRest: n } = this._events,
                r = this._active.size > 0,
                i = this._changed.size > 0;
            ((r && !this._started) || (i && !this._started)) &&
                ((this._started = !0),
                ng(e, ([e, t]) => {
                    ((t.value = this.get()), e(t, this, this._item));
                }));
            const a = !r && this._started,
                o = i || (a && n.size) ? this.get() : null;
            (i &&
                t.size &&
                ng(t, ([e, t]) => {
                    ((t.value = o), e(t, this, this._item));
                }),
                a &&
                    ((this._started = !1),
                    ng(n, ([e, t]) => {
                        ((t.value = o), e(t, this, this._item));
                    })));
        }
        eventObserved(e) {
            if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
            else {
                if ('idle' != e.type) return;
                this._active.delete(e.parent);
            }
            Nm.onFrame(this._onFrame);
        }
    };
function Ab(e, t) {
    return Promise.all(t.map((t) => Tb(e, t))).then((t) => eb(e, t));
}
async function Tb(e, t, n) {
    const { keys: r, to: i, from: a, loop: o, onRest: l, onResolve: s } = t,
        u = Xm.obj(t.default) && t.default;
    (o && (t.loop = !1), !1 === i && (t.to = null), !1 === a && (t.from = null));
    const c = Xm.arr(i) || Xm.fun(i) ? i : void 0;
    c
        ? ((t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0))
        : Zm(Eb, (n) => {
              const r = t[n];
              if (Xm.fun(r)) {
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
        ? ((f.paused = t.pause), ag(t.pause ? f.pauseQueue : f.resumeQueue))
        : f.paused && (t.pause = !0);
    const d = (r || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
        p = !0 === t.cancel || !0 === Dy(t, 'cancel');
    ((c || (p && f.asyncId)) &&
        d.push(
            Zy(++e._lastAsyncId, {
                props: t,
                state: f,
                actions: {
                    pause: Ym,
                    resume: Ym,
                    start(t, n) {
                        p ? (ab(f, e._lastAsyncId), n(rb(e))) : ((t.onRest = l), n(ib(c, t, f, e)));
                    },
                },
            }),
        ),
        f.paused &&
            (await new Promise((e) => {
                f.resumeQueue.add(e);
            })));
    const h = eb(e, await Promise.all(d));
    if (o && h.finished && (!n || !h.noop)) {
        const n = bb(t, o, i);
        if (n) return (Ib(e, [n]), Tb(e, n, !0));
    }
    return (s && Nm.batchedUpdates(() => s(h, e, e.item)), h);
}
function Nb(e, t) {
    const n = { ...e.springs };
    return (
        t &&
            Zm(tg(t), (e) => {
                (Xm.und(e.keys) && (e = _b(e)), Xm.obj(e.to) || (e = { ...e, to: void 0 }), Lb(n, e, (e) => Rb(e)));
            }),
        jb(e, n),
        n
    );
}
function jb(e, t) {
    eg(t, (t, n) => {
        e.springs[n] || ((e.springs[n] = t), Kg(t, e));
    });
}
function Rb(e, t) {
    const n = new gb();
    return ((n.key = e), t && Kg(n, t), n);
}
function Lb(e, t, n) {
    t.keys &&
        Zm(t.keys, (r) => {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function Ib(e, t) {
    Zm(t, (t) => {
        Lb(e.springs, t, (t) => Rb(t, e));
    });
}
var Mb,
    zb,
    Db = ({ children: e, ...t }) => {
        const n = U.useContext(Vb),
            r = t.pause || !!n.pause,
            i = t.immediate || !!n.immediate;
        t = (function (e, t) {
            const [n] = U.useState(() => ({ inputs: t, result: e() })),
                r = U.useRef(),
                i = r.current;
            let a = i;
            a
                ? Boolean(
                      t &&
                          a.inputs &&
                          (function (e, t) {
                              if (e.length !== t.length) return !1;
                              for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                              return !0;
                          })(t, a.inputs),
                  ) || (a = { inputs: t, result: e() })
                : (a = n);
            return (
                U.useEffect(() => {
                    ((r.current = a), i == n && (n.inputs = n.result = void 0));
                }, [a]),
                a.result
            );
        })(() => ({ pause: r, immediate: i }), [r, i]);
        const { Provider: a } = Vb;
        return U.createElement(a, { value: t }, e);
    },
    Vb =
        ((Mb = Db),
        (zb = {}),
        Object.assign(Mb, U.createContext(zb)),
        (Mb.Provider._context = Mb),
        (Mb.Consumer._context = Mb),
        Mb);
((Db.Provider = Vb.Provider), (Db.Consumer = Vb.Consumer));
var Fb = () => {
    const e = [],
        t = function (t) {
            cy(
                `${ly}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
            );
            const r = [];
            return (
                Zm(e, (e, i) => {
                    if (Xm.und(t)) r.push(e.start());
                    else {
                        const a = n(t, e, i);
                        a && r.push(e.start(a));
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
            return (Zm(e, (e) => e.pause(...arguments)), this);
        }),
        (t.resume = function () {
            return (Zm(e, (e) => e.resume(...arguments)), this);
        }),
        (t.set = function (t) {
            Zm(e, (e, n) => {
                const r = Xm.fun(t) ? t(n, e) : t;
                r && e.set(r);
            });
        }),
        (t.start = function (t) {
            const n = [];
            return (
                Zm(e, (e, r) => {
                    if (Xm.und(t)) n.push(e.start());
                    else {
                        const i = this._getProps(t, e, r);
                        i && n.push(e.start(i));
                    }
                }),
                n
            );
        }),
        (t.stop = function () {
            return (Zm(e, (e) => e.stop(...arguments)), this);
        }),
        (t.update = function (t) {
            return (Zm(e, (e, n) => e.update(this._getProps(t, e, n))), this);
        }));
    const n = function (e, t, n) {
        return Xm.fun(e) ? e(n, t) : e;
    };
    return ((t._getProps = n), t);
};
function Bb(e, t, n) {
    const r = Xm.fun(t) && t;
    r && !n && (n = []);
    const i = U.useMemo(() => (r || 3 == arguments.length ? Fb() : void 0), []),
        a = U.useRef(0),
        o = hy(),
        l = U.useMemo(
            () => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                    const n = Nb(e, t);
                    return a.current > 0 && !l.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                        ? Ab(e, t)
                        : new Promise((r) => {
                              (jb(e, n),
                                  l.queue.push(() => {
                                      r(Ab(e, t));
                                  }),
                                  o());
                          });
                },
            }),
            [],
        ),
        s = U.useRef([...l.ctrls]),
        u = [],
        c = gy(e) || 0;
    function f(e, n) {
        for (let i = e; i < n; i++) {
            const e = s.current[i] || (s.current[i] = new Cb(null, l.flush)),
                n = r ? r(i, e) : t[i];
            n && (u[i] = wb(n));
        }
    }
    (U.useMemo(() => {
        (Zm(s.current.slice(e, c), (e) => {
            (Gy(e, i), e.stop(!0));
        }),
            (s.current.length = e),
            f(c, e));
    }, [e]),
        U.useMemo(() => {
            f(0, Math.min(c, e));
        }, n));
    const d = s.current.map((e, t) => Nb(e, u[t])),
        p = U.useContext(Db),
        h = gy(p),
        v = p !== h && qy(p);
    (dy(() => {
        (a.current++, (l.ctrls = s.current));
        const { queue: e } = l;
        (e.length && ((l.queue = []), Zm(e, (e) => e())),
            Zm(s.current, (e, t) => {
                (null == i || i.add(e), v && e.start({ default: p }));
                const n = u[t];
                n && (Ky(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
            }));
    }),
        vy(() => () => {
            Zm(l.ctrls, (e) => e.stop(!0));
        }));
    const m = d.map((e) => ({ ...e }));
    return i ? [m, i] : m;
}
function Ub(e, t) {
    const n = Xm.fun(e),
        [[r], i] = Bb(1, n ? e : [e], n ? [] : t);
    return n || 2 == arguments.length ? [r, i] : r;
}
var $b = (e, t) => {
    const n = (function (e) {
        const t = U.useRef(null);
        return (null === t.current && (t.current = e()), t.current);
    })(() => new gb(e, t));
    return (
        vy(() => () => {
            n.stop();
        }),
        n
    );
};
function Wb(e, t, n) {
    const r = Xm.fun(t) && t,
        {
            reset: i,
            sort: a,
            trail: o = 0,
            expires: l = !0,
            exitBeforeEnter: s = !1,
            onDestroyed: u,
            ref: c,
            config: f,
        } = r ? r() : t,
        d = U.useMemo(() => (r || 3 == arguments.length ? Fb() : void 0), []),
        p = tg(e),
        h = [],
        v = U.useRef(null),
        m = i ? null : v.current;
    (dy(() => {
        v.current = h;
    }),
        vy(
            () => (
                Zm(h, (e) => {
                    (null == d || d.add(e.ctrl), (e.ctrl.ref = d));
                }),
                () => {
                    Zm(v.current, (e) => {
                        (e.expired && clearTimeout(e.expirationId), Gy(e.ctrl, d), e.ctrl.stop(!0));
                    });
                }
            ),
        ));
    const g = (function (e, { key: t, keys: n = t }, r) {
            if (null === n) {
                const t = new Set();
                return e.map((e) => {
                    const n = r && r.find((n) => n.item === e && 'leave' !== n.phase && !t.has(n));
                    return n ? (t.add(n), n.key) : qb++;
                });
            }
            return Xm.und(n) ? e : Xm.fun(n) ? e.map(n) : tg(n);
        })(p, r ? r() : t, m),
        y = (i && v.current) || [];
    dy(() =>
        Zm(y, ({ ctrl: e, item: t, key: n }) => {
            (Gy(e, d), Iy(u, t, n));
        }),
    );
    const b = [];
    if (
        (m &&
            Zm(m, (e, t) => {
                e.expired ? (clearTimeout(e.expirationId), y.push(e)) : ~(t = b[t] = g.indexOf(e.key)) && (h[t] = e);
            }),
        Zm(p, (e, t) => {
            h[t] || ((h[t] = { key: g[t], item: e, phase: 'mount', ctrl: new Cb() }), (h[t].ctrl.item = e));
        }),
        b.length)
    ) {
        let e = -1;
        const { leave: n } = r ? r() : t;
        Zm(b, (t, r) => {
            const i = m[r];
            ~t ? ((e = h.indexOf(i)), (h[e] = { ...i, item: p[t] })) : n && h.splice(++e, 0, i);
        });
    }
    Xm.fun(a) && h.sort((e, t) => a(e.item, t.item));
    let _ = -o;
    const w = hy(),
        k = Fy(t),
        S = new Map(),
        x = U.useRef(new Map()),
        O = U.useRef(!1);
    Zm(h, (e, n) => {
        const i = e.key,
            a = e.phase,
            u = r ? r() : t;
        let d, p;
        const h = Iy(u.delay || 0, i);
        if ('mount' == a) ((d = u.enter), (p = 'enter'));
        else {
            const e = g.indexOf(i) < 0;
            if ('leave' != a)
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
        if (((d = Iy(d, e.item, n)), (d = Xm.obj(d) ? $y(d) : { to: d }), !d.config)) {
            const t = f || k.config;
            d.config = Iy(t, e.item, n, p);
        }
        _ += o;
        const y = { ...k, delay: h + _, ref: c, immediate: u.immediate, reset: !1, ...d };
        if ('enter' == p && Xm.und(y.from)) {
            const i = r ? r() : t,
                a = Xm.und(i.initial) || m ? i.from : i.initial;
            y.from = Iy(a, e.item, n);
        }
        const { onResolve: b } = y;
        y.onResolve = (e) => {
            Iy(b, e);
            const t = v.current,
                n = t.find((e) => e.key === i);
            if (n && (!e.cancelled || 'update' == n.phase) && n.ctrl.idle) {
                const e = t.every((e) => e.ctrl.idle);
                if ('leave' == n.phase) {
                    const t = Iy(l, n.item);
                    if (!1 !== t) {
                        const r = !0 === t ? 0 : t;
                        if (((n.expired = !0), !e && r > 0))
                            return void (r <= 2147483647 && (n.expirationId = setTimeout(w, r)));
                    }
                }
                e && t.some((e) => e.expired) && (x.current.delete(n), s && (O.current = !0), w());
            }
        };
        const E = Nb(e.ctrl, y);
        'leave' === p && s
            ? x.current.set(e, { phase: p, springs: E, payload: y })
            : S.set(e, { phase: p, springs: E, payload: y });
    });
    const E = U.useContext(Db),
        P = gy(E),
        C = E !== P && qy(E);
    (dy(() => {
        C &&
            Zm(h, (e) => {
                e.ctrl.start({ default: E });
            });
    }, [E]),
        Zm(S, (e, t) => {
            if (x.current.size) {
                const e = h.findIndex((e) => e.key === t.key);
                h.splice(e, 1);
            }
        }),
        dy(
            () => {
                Zm(x.current.size ? x.current : S, ({ phase: e, payload: t }, n) => {
                    const { ctrl: r } = n;
                    ((n.phase = e),
                        null == d || d.add(r),
                        C && 'enter' == e && r.start({ default: E }),
                        t &&
                            (Ky(r, t.ref),
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
                          key: Xm.str(t.key) || Xm.num(t.key) ? t.key : t.ctrl.id,
                          ref: i.ref,
                      })
                    : i;
            }),
        );
    return d ? [A, d] : A;
}
var qb = 1;
var Hb = class extends cb {
    constructor(e, t) {
        (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = Vg(...t)));
        const n = this._get(),
            r = Ay(n);
        _y(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        (Jm(t, this.get()) || (by(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && Kb(this._active) && Qb(this));
    }
    _get() {
        const e = Xm.arr(this.source) ? this.source.map($g) : tg($g(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !Kb(this._active) &&
            ((this.idle = !1),
            Zm(wy(this), (e) => {
                e.done = !1;
            }),
            Qm.skipAnimation ? (Nm.batchedUpdates(() => this.advance()), Qb(this)) : vg.start(this));
    }
    _attach() {
        let e = 1;
        (Zm(tg(this.source), (t) => {
            (Ug(t) && Kg(t, this), sb(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (Zm(tg(this.source), (e) => {
            Ug(e) && Qg(e, this);
        }),
            this._active.clear(),
            Qb(this));
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = tg(this.source).reduce((e, t) => Math.max(e, (sb(t) ? t.priority : 0) + 1), 0));
    }
};
function Gb(e) {
    return !1 !== e.idle;
}
function Kb(e) {
    return !e.size || Array.from(e).every(Gb);
}
function Qb(e) {
    e.idle ||
        ((e.idle = !0),
        Zm(wy(e), (e) => {
            e.done = !0;
        }),
        qg(e, { type: 'idle', parent: e }));
}
Qm.assign({ createStringInterpolator: oy, to: (e, t) => new Hb(e, t) });
var Yb = /^--/;
function Xb(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || Yb.test(e) || (Zb.hasOwnProperty(e) && Zb[e])
          ? ('' + t).trim()
          : t + 'px';
}
var Jb = {};
var Zb = {
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
    e_ = ['Webkit', 'Ms', 'Moz', 'O'];
Zb = Object.keys(Zb).reduce(
    (e, t) => (e_.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    Zb,
);
var t_ = /^(matrix|translate|scale|rotate|skew)/,
    n_ = /^(translate)/,
    r_ = /^(rotate|skew)/,
    i_ = (e, t) => (Xm.num(e) && 0 !== e ? e + t : e),
    a_ = (e, t) => (Xm.arr(e) ? e.every((e) => a_(e, t)) : Xm.num(e) ? e === t : parseFloat(e) === t),
    o_ = class extends Ey {
        constructor({ x: e, y: t, z: n, ...r }) {
            const i = [],
                a = [];
            ((e || t || n) &&
                (i.push([e || 0, t || 0, n || 0]),
                a.push((e) => [`translate3d(${e.map((e) => i_(e, 'px')).join(',')})`, a_(e, 0)])),
                eg(r, (e, t) => {
                    if ('transform' === t) (i.push([e || '']), a.push((e) => [e, '' === e]));
                    else if (t_.test(t)) {
                        if ((delete r[t], Xm.und(e))) return;
                        const n = n_.test(t) ? 'px' : r_.test(t) ? 'deg' : '';
                        (i.push(tg(e)),
                            a.push(
                                'rotate3d' === t
                                    ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${i_(i, n)})`, a_(i, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => i_(e, n)).join(',')})`,
                                          a_(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                i.length && (r.transform = new l_(i, a)),
                super(r));
        }
    },
    l_ = class extends Hg {
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
                Zm(this.inputs, (n, r) => {
                    const i = $g(n[0]),
                        [a, o] = this.transforms[r](Xm.arr(i) ? i : n.map($g));
                    ((e += ' ' + a), (t = t && o));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && Zm(this.inputs, (e) => Zm(e, (e) => Ug(e) && Kg(e, this)));
        }
        observerRemoved(e) {
            0 == e && Zm(this.inputs, (e) => Zm(e, (e) => Ug(e) && Qg(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), qg(this, e));
        }
    };
Qm.assign({ batchedUpdates: Uf.unstable_batchedUpdates, createStringInterpolator: oy, colors: _g });
var s_ = Ry(
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
                { style: r, children: i, scrollTop: a, scrollLeft: o, viewBox: l, ...s } = t,
                u = Object.values(s),
                c = Object.keys(s).map((t) =>
                    n || e.hasAttribute(t) ? t : Jb[t] || (Jb[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                );
            void 0 !== i && (e.textContent = i);
            for (const f in r)
                if (r.hasOwnProperty(f)) {
                    const t = Xb(f, r[f]);
                    Yb.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                }
            (c.forEach((t, n) => {
                e.setAttribute(t, u[n]);
            }),
                void 0 !== a && (e.scrollTop = a),
                void 0 !== o && (e.scrollLeft = o),
                void 0 !== l && e.setAttribute('viewBox', l));
        },
        createAnimatedStyle: (e) => new o_(e),
        getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
    },
).animated;
function u_(e, t) {
    (void 0 === t && (t = 'Illegal state'),
        e ||
            (function (e) {
                throw new Error('[mobx-utils] ' + e);
            })(t));
}
var c_,
    f_ = function (e) {
        return e && e !== Object.prototype && Object.getOwnPropertyNames(e).concat(f_(Object.getPrototypeOf(e)) || []);
    },
    d_ = function (e) {
        return (function (e) {
            var t = f_(e);
            return t.filter(function (e, n) {
                return t.indexOf(e) === n;
            });
        })(e).filter(function (e) {
            return 'constructor' !== e && !~e.indexOf('__');
        });
    },
    p_ = 'pending',
    h_ = 'fulfilled',
    v_ = 'rejected';
function m_(e) {
    switch (this.state) {
        case p_:
            return e.pending && e.pending(this.value);
        case v_:
            return e.rejected && e.rejected(this.value);
        case h_:
            return e.fulfilled ? e.fulfilled(this.value) : this.value;
    }
}
function g_(e, t) {
    if (
        (u_(arguments.length <= 2, 'fromPromise expects up to two arguments'),
        u_(
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
            ((n.value = e), (n.state = h_));
        }),
        Ah('observableFromPromise-reject', function (e) {
            ((n.value = e), (n.state = v_));
        }),
    ),
        (n.isPromiseBasedObservable = !0),
        (n.case = m_));
    var r = !t || (t.state !== h_ && t.state !== p_) ? void 0 : t.value;
    return (qh(n, { value: r, state: p_ }, {}, { deep: !1 }), n);
}
(((c_ = g_ || (g_ = {})).reject = Ah('fromPromise.reject', function (e) {
    var t = c_(Promise.reject(e));
    return ((t.state = v_), (t.value = e), t);
})),
    (c_.resolve = Ah('fromPromise.resolve', function (e) {
        void 0 === e && (e = void 0);
        var t = c_(Promise.resolve(e));
        return ((t.state = h_), (t.value = e), t);
    })));
var y_ = function (e, t, n, r) {
    var i,
        a = arguments.length,
        o = a < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
    else for (var l = e.length - 1; l >= 0; l--) (i = e[l]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
    return (a > 3 && o && Object.defineProperty(t, n, o), o);
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
            pv(this),
            Nh(function () {
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
        y_([Op.ref], e.prototype, 'current', void 0),
        y_([Ah.bound], e.prototype, 'next', null),
        y_([Ah.bound], e.prototype, 'complete', null),
        y_([Ah.bound], e.prototype, 'error', null));
})();
var b_ = function () {
        return (
            (b_ =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            b_.apply(this, arguments)
        );
    },
    __ = function (e, t, n, r) {
        var i,
            a = arguments.length,
            o = a < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
        else
            for (var l = e.length - 1; l >= 0; l--)
                (i = e[l]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
        return (a > 3 && o && Object.defineProperty(t, n, o), o);
    },
    w_ = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
!(function () {
    function e(e) {
        var t = this;
        (Object.defineProperty(this, 'model', { enumerable: !0, configurable: !0, writable: !0, value: e }),
            Object.defineProperty(this, 'localValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: Op.map({}),
            }),
            Object.defineProperty(this, 'localComputedValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: Op.map({}),
            }),
            Object.defineProperty(this, 'isPropertyDirty', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    return t.localValues.has(e);
                },
            }),
            pv(this),
            u_(Wv(e), 'createViewModel expects an observable object'));
        var n = d_(this);
        d_(e).forEach(function (r) {
            var i;
            if (!n.includes(r) && r !== Id && '__mobxDidRunLazyInitializers' !== r) {
                if (
                    (u_(
                        -1 === w_.indexOf(r),
                        'The propertyname ' + r + ' is reserved and cannot be used with viewModels',
                    ),
                    tv(e, r))
                ) {
                    var a = im(e, r),
                        o = a.derivation.bind(t),
                        l = null === (i = a.setter_) || void 0 === i ? void 0 : i.bind(t);
                    t.localComputedValues.set(r, Ap(o, { set: l }));
                }
                var s = Object.getOwnPropertyDescriptor(e, r),
                    u = s ? { enumerable: s.enumerable } : {};
                Object.defineProperty(
                    t,
                    r,
                    b_(b_({}, u), {
                        configurable: !0,
                        get: function () {
                            return tv(e, r)
                                ? t.localComputedValues.get(r).get()
                                : t.isPropertyDirty(r)
                                  ? t.localValues.get(r)
                                  : t.model[r];
                        },
                        set: Ah(function (n) {
                            tv(e, r)
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
                Wv(e)
                    ? e[Id].keys_()
                    : Lv(e) || zv(e)
                      ? Array.from(e.keys())
                      : Pv(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void Kf(5)).forEach(function (e) {
                    var n = t.localValues.get(e),
                        r = t.model[e];
                    Pv(r) ? r.replace(n) : Lv(r) ? (r.clear(), r.merge(n)) : ev(n) || (t.model[e] = n);
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
        __([Ap], e.prototype, 'isDirty', null),
        __([Ap], e.prototype, 'changedValues', null),
        __([Ah.bound], e.prototype, 'submit', null),
        __([Ah.bound], e.prototype, 'reset', null),
        __([Ah.bound], e.prototype, 'resetProperty', null));
})();
var k_ = (function () {
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
            a = i.name,
            o = void 0 === a ? 'ogm' + ((1e3 * Math.random()) | 0) : a,
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
            (u._ogmInfoKey = Symbol('ogmInfo' + o)),
            (u._base = t));
        for (var c = 0; c < t.length; c++) u._addItem(t[c]);
        return (
            (u._disposeBaseObserver = rv(u._base, function (e) {
                if ('splice' === e.type)
                    iv(function () {
                        for (var t = 0, n = e.removed; t < n.length; t++) {
                            var r = n[t];
                            u._removeItem(r);
                        }
                        for (var i = 0, a = e.added; i < a.length; i++) {
                            var o = a[i];
                            u._addItem(o);
                        }
                    });
                else {
                    if ('update' !== e.type) throw new Error('illegal state');
                    iv(function () {
                        (u._removeItem(e.oldValue), u._addItem(e.newValue));
                    });
                }
            })),
            u
        );
    }
    (k_(t, e),
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
                        ((n = Op([], { name: 'GroupArray[' + this._keyToName(t) + ']', deep: !1 })),
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
                        reaction: Mh(
                            function () {
                                return t._groupBy(e);
                            },
                            function (n, r) {
                                var i = e[t._ogmInfoKey];
                                t._removeFromGroupArr(i.groupByValue, i.groupArrIndex);
                                var a = t._getGroupArr(n),
                                    o = a.length;
                                (a.push(e), (i.groupByValue = n), (i.groupArrIndex = o));
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
})(Rv);
var S_ = (function () {
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
    x_ = (function () {
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
                    return (this.last && (this.last.isDisposed = !0), (this.last = new S_(this.store, e)));
                },
            }),
            e
        );
    })(),
    O_ = function () {
        return (
            (O_ =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            O_.apply(this, arguments)
        );
    };
function E_(e, t) {
    if ((void 0 === t && (t = !1), jh(e))) throw new Error("computedFn shouldn't be used on actions");
    var n = !1,
        r = 0,
        i = 'boolean' == typeof t ? { keepAlive: t } : t,
        a = new x_();
    return function () {
        for (var t = this, o = [], l = 0; l < arguments.length; l++) o[l] = arguments[l];
        var s,
            u = a.entry(o);
        if (u.exists()) return u.get().get();
        if (!i.keepAlive && null === lh.trackingDerivation)
            return (
                !n &&
                    lh.computedRequiresReaction &&
                    (console.warn(
                        "invoking a computedFn from outside an reactive context won't be memoized, unless keepAlive is set",
                    ),
                    (n = !0)),
                e.apply(this, o)
            );
        var c = Ap(
            function () {
                return (s = e.apply(t, o));
            },
            O_(O_({}, i), { name: 'computedFn(' + (i.name || e.name) + '#' + ++r + ')' }),
        );
        return (
            u.set(c),
            i.keepAlive ||
                Vh(c, function () {
                    (a.entry(o).delete(),
                        i.onCleanup &&
                            i.onCleanup.apply(
                                i,
                                (function () {
                                    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                                    var r = Array(e),
                                        i = 0;
                                    for (t = 0; t < n; t++)
                                        for (var a = arguments[t], o = 0, l = a.length; o < l; o++, i++) r[i] = a[o];
                                    return r;
                                })([s], o),
                            ),
                        (s = void 0));
                }),
            c.get()
        );
    };
}
if (!U.useState) throw new Error('mobx-react-lite requires React with Hooks support');
if (!pv) throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
function P_(e) {
    e();
}
function C_(e) {
    return Hh(rm(e, t));
    var t;
}
var A_ = new ((function () {
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
    T_ = { exports: {} },
    N_ = {},
    j_ = U;
var R_ =
        'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    L_ = j_.useState,
    I_ = j_.useEffect,
    M_ = j_.useLayoutEffect,
    z_ = j_.useDebugValue;
function D_(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !R_(e, n);
    } catch (r) {
        return !0;
    }
}
var V_ =
    'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
              return t();
          }
        : function (e, t) {
              var n = t(),
                  r = L_({ inst: { value: n, getSnapshot: t } }),
                  i = r[0].inst,
                  a = r[1];
              return (
                  M_(
                      function () {
                          ((i.value = n), (i.getSnapshot = t), D_(i) && a({ inst: i }));
                      },
                      [e, n, t],
                  ),
                  I_(
                      function () {
                          return (
                              D_(i) && a({ inst: i }),
                              e(function () {
                                  D_(i) && a({ inst: i });
                              })
                          );
                      },
                      [e],
                  ),
                  z_(n),
                  n
              );
          };
((N_.useSyncExternalStore = void 0 !== j_.useSyncExternalStore ? j_.useSyncExternalStore : V_), (T_.exports = N_));
var F_,
    B_,
    U_ = T_.exports;
function $_(e) {
    e.reaction = new vh('observer'.concat(e.name), function () {
        var t;
        ((e.stateVersion = Symbol()), null === (t = e.onStoreChange) || void 0 === t || t.call(e));
    });
}
var W_ = 'function' == typeof Symbol && Symbol.for,
    q_ =
        null !==
            (B_ =
                null === (F_ = Object.getOwnPropertyDescriptor(function () {}, 'name')) || void 0 === F_
                    ? void 0
                    : F_.configurable) &&
        void 0 !== B_ &&
        B_,
    H_ = W_
        ? Symbol.for('react.forward_ref')
        : 'function' == typeof U.forwardRef &&
          U.forwardRef(function (e) {
              return null;
          }).$$typeof,
    G_ = W_
        ? Symbol.for('react.memo')
        : 'function' == typeof U.memo &&
          U.memo(function (e) {
              return null;
          }).$$typeof;
function K_(e, t) {
    if (G_ && e.$$typeof === G_)
        throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
        );
    var n = (void 0, !1),
        r = e,
        i = e.displayName || e.name;
    if (H_ && e.$$typeof === H_ && ((n = !0), 'function' != typeof (r = e.render)))
        throw new Error('[mobx-react-lite] `render` property of ForwardRef was not a function');
    var a = function (e, t) {
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
                            A_.unregister(r),
                            (r.onStoreChange = e),
                            r.reaction || ($_(r), (r.stateVersion = Symbol())),
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
                a,
                o = n.current;
            if (
                (o.reaction || ($_(o), A_.register(n, o, o)),
                $.useDebugValue(o.reaction, C_),
                U_.useSyncExternalStore(o.subscribe, o.getSnapshot, o.getSnapshot),
                o.reaction.track(function () {
                    try {
                        i = e();
                    } catch (t) {
                        a = t;
                    }
                }),
                a)
            )
                throw a;
            return i;
        })(function () {
            return r(e, t);
        }, i);
    };
    return (
        (a.displayName = e.displayName),
        q_ && Object.defineProperty(a, 'name', { value: e.name, writable: !0, configurable: !0 }),
        e.contextTypes && (a.contextTypes = e.contextTypes),
        n && (a = U.forwardRef(a)),
        (function (e, t) {
            Object.keys(e).forEach(function (n) {
                Y_[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
            });
        })(e, (a = U.memo(a))),
        a
    );
}
var Q_,
    Y_ = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function X_(e, t) {
    return U.useState(function () {
        return Op(e(), t, { autoBind: !0 });
    })[0];
}
function J_(e) {
    var t,
        n,
        r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
        if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = J_(e[t])) && (r && (r += ' '), (r += n));
        else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
}
((Q_ = Uf.unstable_batchedUpdates) || (Q_ = P_), Wh({ reactionScheduler: Q_ }), A_.finalizeAllImmediately);
const Z_ = (e) => ('boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e),
    ew = function () {
        for (var e, t, n = 0, r = ''; n < arguments.length; )
            (e = arguments[n++]) && (t = J_(e)) && (r && (r += ' '), (r += t));
        return r;
    },
    tw = (e, t) => (n) => {
        var r;
        if (null == (null == t ? void 0 : t.variants))
            return ew(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        const { variants: i, defaultVariants: a } = t,
            o = Object.keys(i).map((e) => {
                const t = null == n ? void 0 : n[e],
                    r = null == a ? void 0 : a[e];
                if (null === t) return null;
                const o = Z_(t) || Z_(r);
                return i[e][o];
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
                              return Array.isArray(n) ? n.includes({ ...a, ...l }[t]) : { ...a, ...l }[t] === n;
                          })
                              ? [...e, n, r]
                              : e;
                      }, []);
        return ew(e, o, s, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
    };
var nw, rw, iw, aw;
function ow(e) {
    return {
        lang: (null == e ? void 0 : e.lang) ?? (null == nw ? void 0 : nw.lang),
        message: null == e ? void 0 : e.message,
        abortEarly: (null == e ? void 0 : e.abortEarly) ?? (null == nw ? void 0 : nw.abortEarly),
        abortPipeEarly: (null == e ? void 0 : e.abortPipeEarly) ?? (null == nw ? void 0 : nw.abortPipeEarly),
    };
}
function lw(e) {
    return null == rw ? void 0 : rw.get(e);
}
function sw(e) {
    return null == iw ? void 0 : iw.get(e);
}
function uw(e, t) {
    var n;
    return null == (n = null == aw ? void 0 : aw.get(e)) ? void 0 : n.get(t);
}
function cw(e) {
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
function fw(e, t, n, r, i) {
    const a = i && 'input' in i ? i.input : n.value,
        o = (null == i ? void 0 : i.expected) ?? e.expects ?? null,
        l = (null == i ? void 0 : i.received) ?? cw(a),
        s = {
            kind: e.kind,
            type: e.type,
            input: a,
            expected: o,
            received: l,
            message: `Invalid ${t}: ${o ? `Expected ${o} but r` : 'R'}eceived ${l}`,
            requirement: e.requirement,
            path: null == i ? void 0 : i.path,
            issues: null == i ? void 0 : i.issues,
            lang: r.lang,
            abortEarly: r.abortEarly,
            abortPipeEarly: r.abortPipeEarly,
        },
        u = 'schema' === e.kind,
        c =
            (null == i ? void 0 : i.message) ??
            e.message ??
            uw(e.reference, s.lang) ??
            (u ? sw(s.lang) : null) ??
            r.message ??
            lw(s.lang);
    (void 0 !== c && (s.message = 'function' == typeof c ? c(s) : c),
        u && (n.typed = !1),
        n.issues ? n.issues.push(s) : (n.issues = [s]));
}
function dw(e) {
    return { version: 1, vendor: 'valibot', validate: (t) => e['~run']({ value: t }, ow()) };
}
var pw = class extends Error {
    constructor(e) {
        (super(e[0].message), (this.name = 'ValiError'), (this.issues = e));
    }
};
function hw(e) {
    return {
        kind: 'validation',
        type: 'integer',
        reference: hw,
        async: !1,
        expects: null,
        requirement: Number.isInteger,
        message: e,
        '~run'(e, t) {
            return (e.typed && !this.requirement(e.value) && fw(this, 'integer', e, t), e);
        },
    };
}
function vw(e, t) {
    return {
        kind: 'validation',
        type: 'min_length',
        reference: vw,
        async: !1,
        expects: `>=${e}`,
        requirement: e,
        message: t,
        '~run'(e, t) {
            return (
                e.typed &&
                    e.value.length < this.requirement &&
                    fw(this, 'length', e, t, { received: `${e.value.length}` }),
                e
            );
        },
    };
}
function mw(e, t) {
    return {
        kind: 'validation',
        type: 'min_value',
        reference: mw,
        async: !1,
        expects: `>=${e instanceof Date ? e.toJSON() : cw(e)}`,
        requirement: e,
        message: t,
        '~run'(e, t) {
            return (
                !e.typed ||
                    e.value >= this.requirement ||
                    fw(this, 'value', e, t, { received: e.value instanceof Date ? e.value.toJSON() : cw(e.value) }),
                e
            );
        },
    };
}
function gw(e) {
    return {
        kind: 'transformation',
        type: 'transform',
        reference: gw,
        async: !1,
        operation: e,
        '~run'(e) {
            return ((e.value = this.operation(e.value)), e);
        },
    };
}
function yw(e, t, n) {
    return 'function' == typeof e.fallback ? e.fallback(t, n) : e.fallback;
}
function bw(e, t, n) {
    return 'function' == typeof e.default ? e.default(t, n) : e.default;
}
function _w(e, t) {
    return {
        kind: 'schema',
        type: 'array',
        reference: _w,
        expects: 'Array',
        async: !1,
        item: e,
        message: t,
        get '~standard'() {
            return dw(this);
        },
        '~run'(e, t) {
            var n;
            const r = e.value;
            if (Array.isArray(r)) {
                ((e.typed = !0), (e.value = []));
                for (let i = 0; i < r.length; i++) {
                    const a = r[i],
                        o = this.item['~run']({ value: a }, t);
                    if (o.issues) {
                        const l = { type: 'array', origin: 'value', input: r, key: i, value: a };
                        for (const t of o.issues)
                            (t.path ? t.path.unshift(l) : (t.path = [l]), null == (n = e.issues) || n.push(t));
                        if ((e.issues || (e.issues = o.issues), t.abortEarly)) {
                            e.typed = !1;
                            break;
                        }
                    }
                    (o.typed || (e.typed = !1), e.value.push(o.value));
                }
            } else fw(this, 'type', e, t);
            return e;
        },
    };
}
function ww(e) {
    return {
        kind: 'schema',
        type: 'boolean',
        reference: ww,
        expects: 'boolean',
        async: !1,
        message: e,
        get '~standard'() {
            return dw(this);
        },
        '~run'(e, t) {
            return ('boolean' == typeof e.value ? (e.typed = !0) : fw(this, 'type', e, t), e);
        },
    };
}
function kw(e) {
    return {
        kind: 'schema',
        type: 'number',
        reference: kw,
        expects: 'number',
        async: !1,
        message: e,
        get '~standard'() {
            return dw(this);
        },
        '~run'(e, t) {
            return ('number' != typeof e.value || isNaN(e.value) ? fw(this, 'type', e, t) : (e.typed = !0), e);
        },
    };
}
function Sw(e, t) {
    return {
        kind: 'schema',
        type: 'object',
        reference: Sw,
        expects: 'Object',
        async: !1,
        entries: e,
        message: t,
        get '~standard'() {
            return dw(this);
        },
        '~run'(e, t) {
            var n;
            const r = e.value;
            if (r && 'object' == typeof r) {
                ((e.typed = !0), (e.value = {}));
                for (const i in this.entries) {
                    const a = this.entries[i];
                    if (
                        i in r ||
                        (('exact_optional' === a.type || 'optional' === a.type || 'nullish' === a.type) &&
                            void 0 !== a.default)
                    ) {
                        const o = i in r ? r[i] : bw(a),
                            l = a['~run']({ value: o }, t);
                        if (l.issues) {
                            const a = { type: 'object', origin: 'value', input: r, key: i, value: o };
                            for (const t of l.issues)
                                (t.path ? t.path.unshift(a) : (t.path = [a]), null == (n = e.issues) || n.push(t));
                            if ((e.issues || (e.issues = l.issues), t.abortEarly)) {
                                e.typed = !1;
                                break;
                            }
                        }
                        (l.typed || (e.typed = !1), (e.value[i] = l.value));
                    } else if (void 0 !== a.fallback) e.value[i] = yw(a);
                    else if (
                        'exact_optional' !== a.type &&
                        'optional' !== a.type &&
                        'nullish' !== a.type &&
                        (fw(this, 'key', e, t, {
                            input: void 0,
                            expected: `"${i}"`,
                            path: [{ type: 'object', origin: 'key', input: r, key: i, value: r[i] }],
                        }),
                        t.abortEarly)
                    )
                        break;
                }
            } else fw(this, 'type', e, t);
            return e;
        },
    };
}
function xw(e, t) {
    return {
        kind: 'schema',
        type: 'optional',
        reference: xw,
        expects: `(${e.expects} | undefined)`,
        async: !1,
        wrapped: e,
        default: t,
        get '~standard'() {
            return dw(this);
        },
        '~run'(e, t) {
            return void 0 === e.value && (void 0 !== this.default && (e.value = bw(this, e, t)), void 0 === e.value)
                ? ((e.typed = !0), e)
                : this.wrapped['~run'](e, t);
        },
    };
}
function Ow(e) {
    return {
        kind: 'schema',
        type: 'string',
        reference: Ow,
        expects: 'string',
        async: !1,
        message: e,
        get '~standard'() {
            return dw(this);
        },
        '~run'(e, t) {
            return ('string' == typeof e.value ? (e.typed = !0) : fw(this, 'type', e, t), e);
        },
    };
}
function Ew(e, t, n) {
    const r = e['~run']({ value: t }, ow(n));
    if (r.issues) throw new pw(r.issues);
    return r.value;
}
function Pw(...e) {
    return {
        ...e[0],
        pipe: e,
        get '~standard'() {
            return dw(this);
        },
        '~run'(t, n) {
            for (const r of e)
                if ('metadata' !== r.kind) {
                    if (t.issues && ('schema' === r.kind || 'transformation' === r.kind)) {
                        t.typed = !1;
                        break;
                    }
                    (t.issues && (n.abortEarly || n.abortPipeEarly)) || (t = r['~run'](t, n));
                }
            return t;
        },
    };
}
var Cw = {};
class Aw extends Error {
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
const Tw = r(
    Object.freeze(
        Object.defineProperty({ __proto__: null, TypeGuardError: Aw }, Symbol.toStringTag, { value: 'Module' }),
    ),
);
Object.defineProperty(Cw, '__esModule', { value: !0 });
var Nw = (Cw._assertGuard = void 0);
const jw = Tw;
Nw = Cw._assertGuard = (e, t, n) => {
    if (!0 === e) throw n ? n(t) : new jw.TypeGuardError(t);
    return !1;
};
var Rw = /^--/;
function Lw(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || Rw.test(e) || (Mw.hasOwnProperty(e) && Mw[e])
          ? ('' + t).trim()
          : t + 'px';
}
var Iw = {};
var Mw = {
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
    zw = ['Webkit', 'Ms', 'Moz', 'O'];
Mw = Object.keys(Mw).reduce(
    (e, t) => (zw.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    Mw,
);
var Dw = /^(matrix|translate|scale|rotate|skew)/,
    Vw = /^(translate)/,
    Fw = /^(rotate|skew)/,
    Bw = (e, t) => (Xm.num(e) && 0 !== e ? e + t : e),
    Uw = (e, t) => (Xm.arr(e) ? e.every((e) => Uw(e, t)) : Xm.num(e) ? e === t : parseFloat(e) === t),
    $w = class extends Ey {
        constructor({ x: e, y: t, z: n, ...r }) {
            const i = [],
                a = [];
            ((e || t || n) &&
                (i.push([e || 0, t || 0, n || 0]),
                a.push((e) => [`translate3d(${e.map((e) => Bw(e, 'px')).join(',')})`, Uw(e, 0)])),
                eg(r, (e, t) => {
                    if ('transform' === t) (i.push([e || '']), a.push((e) => [e, '' === e]));
                    else if (Dw.test(t)) {
                        if ((delete r[t], Xm.und(e))) return;
                        const n = Vw.test(t) ? 'px' : Fw.test(t) ? 'deg' : '';
                        (i.push(tg(e)),
                            a.push(
                                'rotate3d' === t
                                    ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${Bw(i, n)})`, Uw(i, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => Bw(e, n)).join(',')})`,
                                          Uw(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                i.length && (r.transform = new Ww(i, a)),
                super(r));
        }
    },
    Ww = class extends Hg {
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
                Zm(this.inputs, (n, r) => {
                    const i = $g(n[0]),
                        [a, o] = this.transforms[r](Xm.arr(i) ? i : n.map($g));
                    ((e += ' ' + a), (t = t && o));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && Zm(this.inputs, (e) => Zm(e, (e) => Ug(e) && Kg(e, this)));
        }
        observerRemoved(e) {
            0 == e && Zm(this.inputs, (e) => Zm(e, (e) => Ug(e) && Qg(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), qg(this, e));
        }
    };
Qm.assign({ batchedUpdates: Uf.unstable_batchedUpdates, createStringInterpolator: oy, colors: _g });
var qw = Ry(
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
                    { className: r, style: i, children: a, scrollTop: o, scrollLeft: l, viewBox: s, ...u } = t,
                    c = Object.values(u),
                    f = Object.keys(u).map((t) =>
                        n || e.hasAttribute(t)
                            ? t
                            : Iw[t] || (Iw[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                    );
                void 0 !== a && (e.textContent = a);
                for (const d in i)
                    if (i.hasOwnProperty(d)) {
                        const t = Lw(d, i[d]);
                        Rw.test(d) ? e.style.setProperty(d, t) : (e.style[d] = t);
                    }
                (f.forEach((t, n) => {
                    e.setAttribute(t, c[n]);
                }),
                    void 0 !== r && (e.className = r),
                    void 0 !== o && (e.scrollTop = o),
                    void 0 !== l && (e.scrollLeft = l),
                    void 0 !== s && e.setAttribute('viewBox', s));
            },
            createAnimatedStyle: (e) => new $w(e),
            getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
        },
    ).animated,
    Hw = (function () {
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
    Gw = 'undefined' != typeof window && 'undefined' != typeof document && window.document === document,
    Kw =
        'undefined' != typeof global && global.Math === Math
            ? global
            : 'undefined' != typeof self && self.Math === Math
              ? self
              : 'undefined' != typeof window && window.Math === Math
                ? window
                : Function('return this')(),
    Qw =
        'function' == typeof requestAnimationFrame
            ? requestAnimationFrame.bind(Kw)
            : function (e) {
                  return setTimeout(function () {
                      return e(Date.now());
                  }, 1e3 / 60);
              };
var Yw = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
    Xw = 'undefined' != typeof MutationObserver,
    Jw = (function () {
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
                    function a() {
                        (n && ((n = !1), e()), r && l());
                    }
                    function o() {
                        Qw(a);
                    }
                    function l() {
                        var e = Date.now();
                        if (n) {
                            if (e - i < 2) return;
                            r = !0;
                        } else ((n = !0), (r = !1), setTimeout(o, t));
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
                Gw &&
                    !this.connected_ &&
                    (document.addEventListener('transitionend', this.onTransitionEnd_),
                    window.addEventListener('resize', this.refresh),
                    Xw
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
                Gw &&
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
                Yw.some(function (e) {
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
    Zw = function (e, t) {
        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var i = r[n];
            Object.defineProperty(e, i, { value: t[i], enumerable: !1, writable: !1, configurable: !0 });
        }
        return e;
    },
    ek = function (e) {
        return (e && e.ownerDocument && e.ownerDocument.defaultView) || Kw;
    },
    tk = lk(0, 0, 0, 0);
function nk(e) {
    return parseFloat(e) || 0;
}
function rk(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce(function (t, n) {
        return t + nk(e['border-' + n + '-width']);
    }, 0);
}
function ik(e) {
    var t = e.offsetWidth,
        n = e.offsetHeight;
    if (!t && !n) return tk;
    var r = ek(e).getComputedStyle(e),
        i = (function (e) {
            for (var t = {}, n = 0, r = ['top', 'right', 'bottom', 'left']; n < r.length; n++) {
                var i = r[n],
                    a = e['padding-' + i];
                t[i] = nk(a);
            }
            return t;
        })(r),
        a = i.left + i.right,
        o = i.top + i.bottom,
        l = nk(r.width),
        s = nk(r.height);
    if (
        ('border-box' === r.boxSizing &&
            (Math.round(l + a) !== t && (l -= rk(r, 'left', 'right') + a),
            Math.round(s + o) !== n && (s -= rk(r, 'top', 'bottom') + o)),
        !(function (e) {
            return e === ek(e).document.documentElement;
        })(e))
    ) {
        var u = Math.round(l + a) - t,
            c = Math.round(s + o) - n;
        (1 !== Math.abs(u) && (l -= u), 1 !== Math.abs(c) && (s -= c));
    }
    return lk(i.left, i.top, l, s);
}
var ak =
    'undefined' != typeof SVGGraphicsElement
        ? function (e) {
              return e instanceof ek(e).SVGGraphicsElement;
          }
        : function (e) {
              return e instanceof ek(e).SVGElement && 'function' == typeof e.getBBox;
          };
function ok(e) {
    return Gw
        ? ak(e)
            ? (function (e) {
                  var t = e.getBBox();
                  return lk(0, 0, t.width, t.height);
              })(e)
            : ik(e)
        : tk;
}
function lk(e, t, n, r) {
    return { x: e, y: t, width: n, height: r };
}
var sk = (function () {
        function e(e) {
            ((this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = lk(0, 0, 0, 0)),
                (this.target = e));
        }
        return (
            (e.prototype.isActive = function () {
                var e = ok(this.target);
                return ((this.contentRect_ = e), e.width !== this.broadcastWidth || e.height !== this.broadcastHeight);
            }),
            (e.prototype.broadcastRect = function () {
                var e = this.contentRect_;
                return ((this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e);
            }),
            e
        );
    })(),
    uk = (function () {
        return function (e, t) {
            var n,
                r,
                i,
                a,
                o,
                l,
                s,
                u =
                    ((r = (n = t).x),
                    (i = n.y),
                    (a = n.width),
                    (o = n.height),
                    (l = 'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
                    (s = Object.create(l.prototype)),
                    Zw(s, { x: r, y: i, width: a, height: o, top: i, right: r + a, bottom: o + i, left: r }),
                    s);
            Zw(this, { target: e, contentRect: u });
        };
    })(),
    ck = (function () {
        function e(e, t, n) {
            if (((this.activeObservations_ = []), (this.observations_ = new Hw()), 'function' != typeof e))
                throw new TypeError('The callback provided as parameter 1 is not a function.');
            ((this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = n));
        }
        return (
            (e.prototype.observe = function (e) {
                if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                if ('undefined' != typeof Element && Element instanceof Object) {
                    if (!(e instanceof ek(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var t = this.observations_;
                    t.has(e) || (t.set(e, new sk(e)), this.controller_.addObserver(this), this.controller_.refresh());
                }
            }),
            (e.prototype.unobserve = function (e) {
                if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                if ('undefined' != typeof Element && Element instanceof Object) {
                    if (!(e instanceof ek(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
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
                            return new uk(e.target, e.broadcastRect());
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
    fk = 'undefined' != typeof WeakMap ? new WeakMap() : new Hw(),
    dk = (function () {
        return function e(t) {
            if (!(this instanceof e)) throw new TypeError('Cannot call a class as a function.');
            if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
            var n = Jw.getInstance(),
                r = new ck(t, n, this);
            fk.set(this, r);
        };
    })();
['observe', 'unobserve', 'disconnect'].forEach(function (e) {
    dk.prototype[e] = function () {
        var t;
        return (t = fk.get(this))[e].apply(t, arguments);
    };
});
var pk = void 0 !== Kw.ResizeObserver ? Kw.ResizeObserver : dk,
    hk = /^--/;
function vk(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || hk.test(e) || (gk.hasOwnProperty(e) && gk[e])
          ? ('' + t).trim()
          : t + 'px';
}
var mk = {};
var gk = {
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
    yk = ['Webkit', 'Ms', 'Moz', 'O'];
gk = Object.keys(gk).reduce(
    (e, t) => (yk.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    gk,
);
var bk = /^(matrix|translate|scale|rotate|skew)/,
    _k = /^(translate)/,
    wk = /^(rotate|skew)/,
    kk = (e, t) => (Xm.num(e) && 0 !== e ? e + t : e),
    Sk = (e, t) => (Xm.arr(e) ? e.every((e) => Sk(e, t)) : Xm.num(e) ? e === t : parseFloat(e) === t),
    xk = class extends Ey {
        constructor({ x: e, y: t, z: n, ...r }) {
            const i = [],
                a = [];
            ((e || t || n) &&
                (i.push([e || 0, t || 0, n || 0]),
                a.push((e) => [`translate3d(${e.map((e) => kk(e, 'px')).join(',')})`, Sk(e, 0)])),
                eg(r, (e, t) => {
                    if ('transform' === t) (i.push([e || '']), a.push((e) => [e, '' === e]));
                    else if (bk.test(t)) {
                        if ((delete r[t], Xm.und(e))) return;
                        const n = _k.test(t) ? 'px' : wk.test(t) ? 'deg' : '';
                        (i.push(tg(e)),
                            a.push(
                                'rotate3d' === t
                                    ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${kk(i, n)})`, Sk(i, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => kk(e, n)).join(',')})`,
                                          Sk(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                i.length && (r.transform = new Ok(i, a)),
                super(r));
        }
    },
    Ok = class extends Hg {
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
                Zm(this.inputs, (n, r) => {
                    const i = $g(n[0]),
                        [a, o] = this.transforms[r](Xm.arr(i) ? i : n.map($g));
                    ((e += ' ' + a), (t = t && o));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && Zm(this.inputs, (e) => Zm(e, (e) => Ug(e) && Kg(e, this)));
        }
        observerRemoved(e) {
            0 == e && Zm(this.inputs, (e) => Zm(e, (e) => Ug(e) && Qg(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), qg(this, e));
        }
    };
(Qm.assign({ batchedUpdates: Uf.unstable_batchedUpdates, createStringInterpolator: oy, colors: _g }),
    Ry(
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
                    { className: r, style: i, children: a, scrollTop: o, scrollLeft: l, viewBox: s, ...u } = t,
                    c = Object.values(u),
                    f = Object.keys(u).map((t) =>
                        n || e.hasAttribute(t)
                            ? t
                            : mk[t] || (mk[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                    );
                void 0 !== a && (e.textContent = a);
                for (const d in i)
                    if (i.hasOwnProperty(d)) {
                        const t = vk(d, i[d]);
                        hk.test(d) ? e.style.setProperty(d, t) : (e.style[d] = t);
                    }
                (f.forEach((t, n) => {
                    e.setAttribute(t, c[n]);
                }),
                    void 0 !== r && (e.className = r),
                    void 0 !== o && (e.scrollTop = o),
                    void 0 !== l && (e.scrollLeft = l),
                    void 0 !== s && e.setAttribute('viewBox', s));
            },
            createAnimatedStyle: (e) => new xk(e),
            getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
        },
    ));
export {
    Sw as A,
    xw as B,
    kw as C,
    Ow as D,
    Qy as E,
    qw as F,
    $b as G,
    Bb as H,
    X_ as I,
    Pw as J,
    ww as K,
    vw as L,
    gw as M,
    _w as N,
    hw as O,
    mw as P,
    $ as R,
    Nw as _,
    ye as a,
    _e as b,
    je as c,
    be as d,
    Ah as e,
    Gf as f,
    E_ as g,
    Vd as h,
    Le as i,
    X as j,
    tw as k,
    Am as l,
    Ub as m,
    s_ as n,
    Op as o,
    $f as p,
    Nh as q,
    U as r,
    Rh as s,
    Uf as t,
    Jp as u,
    pk as v,
    Wb as w,
    K_ as x,
    Mh as y,
    Ew as z,
};
