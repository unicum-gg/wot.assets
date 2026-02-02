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
var a = { exports: {} },
    i = {},
    o = { exports: {} },
    l = {},
    u = Symbol.for('react.element'),
    s = Symbol.for('react.portal'),
    c = Symbol.for('react.fragment'),
    f = Symbol.for('react.strict_mode'),
    d = Symbol.for('react.profiler'),
    p = Symbol.for('react.provider'),
    h = Symbol.for('react.context'),
    v = Symbol.for('react.forward_ref'),
    g = Symbol.for('react.suspense'),
    m = Symbol.for('react.memo'),
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
    N = { key: !0, ref: !0, __self: !0, __source: !0 };
function j(e, t, n) {
    var r,
        a = {},
        i = null,
        o = null;
    if (null != t)
        for (r in (void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (i = '' + t.key), t))
            C.call(t, r) && !N.hasOwnProperty(r) && (a[r] = t[r]);
    var l = arguments.length - 2;
    if (1 === l) a.children = n;
    else if (1 < l) {
        for (var s = Array(l), c = 0; c < l; c++) s[c] = arguments[c + 2];
        a.children = s;
    }
    if (e && e.defaultProps) for (r in (l = e.defaultProps)) void 0 === a[r] && (a[r] = l[r]);
    return { $$typeof: u, type: e, key: i, ref: o, props: a, _owner: A.current };
}
function T(e) {
    return 'object' == typeof e && null !== e && e.$$typeof === u;
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
function z(e, t, n, r, a) {
    var i = typeof e;
    ('undefined' !== i && 'boolean' !== i) || (e = null);
    var o = !1;
    if (null === e) o = !0;
    else
        switch (i) {
            case 'string':
            case 'number':
                o = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case u:
                    case s:
                        o = !0;
                }
        }
    if (o)
        return (
            (a = a((o = e))),
            (e = '' === r ? '.' + L(o, 0) : r),
            P(a)
                ? ((n = ''),
                  null != e && (n = e.replace(R, '$&/') + '/'),
                  z(a, t, n, '', function (e) {
                      return e;
                  }))
                : null != a &&
                  (T(a) &&
                      (a = (function (e, t) {
                          return { $$typeof: u, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                      })(a, n + (!a.key || (o && o.key === a.key) ? '' : ('' + a.key).replace(R, '$&/') + '/') + e)),
                  t.push(a)),
            1
        );
    if (((o = 0), (r = '' === r ? '.' : r + ':'), P(e)))
        for (var l = 0; l < e.length; l++) {
            var c = r + L((i = e[l]), l);
            o += z(i, t, n, c, a);
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
        for (e = c.call(e), l = 0; !(i = e.next()).done; ) o += z((i = i.value), t, n, (c = r + L(i, l++)), a);
    else if ('object' === i)
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
function I(e, t, n) {
    if (null == e) return e;
    var r = [],
        a = 0;
    return (
        z(e, r, '', '', function (e) {
            return t.call(n, e, a++);
        }),
        r
    );
}
function D(e) {
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
var M = { current: null },
    V = { transition: null },
    F = { ReactCurrentDispatcher: M, ReactCurrentBatchConfig: V, ReactCurrentOwner: A };
function U() {
    throw Error('act(...) is not supported in production builds of React.');
}
((l.Children = {
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
        if (!T(e)) throw Error('React.Children.only expected to receive a single React element child.');
        return e;
    },
}),
    (l.Component = S),
    (l.Fragment = c),
    (l.Profiler = d),
    (l.PureComponent = O),
    (l.StrictMode = f),
    (l.Suspense = g),
    (l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
    (l.act = U),
    (l.cloneElement = function (e, t, n) {
        if (null == e)
            throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
        var r = w({}, e.props),
            a = e.key,
            i = e.ref,
            o = e._owner;
        if (null != t) {
            if (
                (void 0 !== t.ref && ((i = t.ref), (o = A.current)),
                void 0 !== t.key && (a = '' + t.key),
                e.type && e.type.defaultProps)
            )
                var l = e.type.defaultProps;
            for (s in t) C.call(t, s) && !N.hasOwnProperty(s) && (r[s] = void 0 === t[s] && void 0 !== l ? l[s] : t[s]);
        }
        var s = arguments.length - 2;
        if (1 === s) r.children = n;
        else if (1 < s) {
            l = Array(s);
            for (var c = 0; c < s; c++) l[c] = arguments[c + 2];
            r.children = l;
        }
        return { $$typeof: u, type: e.type, key: a, ref: i, props: r, _owner: o };
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
    (l.createElement = j),
    (l.createFactory = function (e) {
        var t = j.bind(null, e);
        return ((t.type = e), t);
    }),
    (l.createRef = function () {
        return { current: null };
    }),
    (l.forwardRef = function (e) {
        return { $$typeof: v, render: e };
    }),
    (l.isValidElement = T),
    (l.lazy = function (e) {
        return { $$typeof: y, _payload: { _status: -1, _result: e }, _init: D };
    }),
    (l.memo = function (e, t) {
        return { $$typeof: m, type: e, compare: void 0 === t ? null : t };
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
    (l.unstable_act = U),
    (l.useCallback = function (e, t) {
        return M.current.useCallback(e, t);
    }),
    (l.useContext = function (e) {
        return M.current.useContext(e);
    }),
    (l.useDebugValue = function () {}),
    (l.useDeferredValue = function (e) {
        return M.current.useDeferredValue(e);
    }),
    (l.useEffect = function (e, t) {
        return M.current.useEffect(e, t);
    }),
    (l.useId = function () {
        return M.current.useId();
    }),
    (l.useImperativeHandle = function (e, t, n) {
        return M.current.useImperativeHandle(e, t, n);
    }),
    (l.useInsertionEffect = function (e, t) {
        return M.current.useInsertionEffect(e, t);
    }),
    (l.useLayoutEffect = function (e, t) {
        return M.current.useLayoutEffect(e, t);
    }),
    (l.useMemo = function (e, t) {
        return M.current.useMemo(e, t);
    }),
    (l.useReducer = function (e, t, n) {
        return M.current.useReducer(e, t, n);
    }),
    (l.useRef = function (e) {
        return M.current.useRef(e);
    }),
    (l.useState = function (e) {
        return M.current.useState(e);
    }),
    (l.useSyncExternalStore = function (e, t, n) {
        return M.current.useSyncExternalStore(e, t, n);
    }),
    (l.useTransition = function () {
        return M.current.useTransition();
    }),
    (l.version = '18.3.1'),
    (o.exports = l));
var B = o.exports;
const $ = n(B);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var W = B,
    H = Symbol.for('react.element'),
    K = Symbol.for('react.fragment'),
    q = Object.prototype.hasOwnProperty,
    G = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Q = { key: !0, ref: !0, __self: !0, __source: !0 };
function Y(e, t, n) {
    var r,
        a = {},
        i = null,
        o = null;
    for (r in (void 0 !== n && (i = '' + n), void 0 !== t.key && (i = '' + t.key), void 0 !== t.ref && (o = t.ref), t))
        q.call(t, r) && !Q.hasOwnProperty(r) && (a[r] = t[r]);
    if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
    return { $$typeof: H, type: e, key: i, ref: o, props: a, _owner: G.current };
}
((i.Fragment = K), (i.jsx = Y), (i.jsxs = Y), (a.exports = i));
var X = a.exports,
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
        i,
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
                for (; i && ((i = 0), l[0] && (o = 0)), o; )
                    try {
                        if (
                            ((n = 1),
                            r &&
                                (a =
                                    2 & l[0]
                                        ? r.return
                                        : l[0]
                                          ? r.throw || ((a = r.return) && a.call(r), 0)
                                          : r.next) &&
                                !(a = a.call(r, l[1])).done)
                        )
                            return a;
                        switch (((r = 0), a && (l = [2 & l[0], a.value]), l[0])) {
                            case 0:
                            case 1:
                                a = l;
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
                                    !((a = o.trys), (a = a.length > 0 && a[a.length - 1]) || (6 !== l[0] && 2 !== l[0]))
                                ) {
                                    o = 0;
                                    continue;
                                }
                                if (3 === l[0] && (!a || (l[1] > a[0] && l[1] < a[3]))) {
                                    o.label = l[1];
                                    break;
                                }
                                if (6 === l[0] && o.label < a[1]) {
                                    ((o.label = a[1]), (a = l));
                                    break;
                                }
                                if (a && o.label < a[2]) {
                                    ((o.label = a[2]), o.ops.push(l));
                                    break;
                                }
                                (a[2] && o.ops.pop(), o.trys.pop());
                                continue;
                        }
                        l = t.call(e, o);
                    } catch (u) {
                        ((l = [6, u]), (r = 0));
                    } finally {
                        n = a = 0;
                    }
                if (5 & l[0]) throw l[1];
                return { value: l[0] ? l[1] : void 0, done: !0 };
            })([l, u]);
        };
    }
}
function ne(e, t, n) {
    if (n || 2 === arguments.length)
        for (var r, a = 0, i = t.length; a < i; a++)
            (!r && a in t) || (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
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
    ae = (function (e) {
        function t(t, n, r, a) {
            return (
                e.call(this, ''.concat(t, ': expected ').concat(n, ' to be ').concat(r, ', but got ').concat(a, '.')) ||
                this
            );
        }
        return (
            J(t, e),
            (t.assert = function (e, n, r, a, i) {
                if (!e) throw new t(n, r, a, i);
                return e;
            }),
            t
        );
    })(re),
    ie = (function (e) {
        function t(t, n, r) {
            var a = t.toString(),
                i = n.map(function (e) {
                    return e.name.toString();
                });
            i.push(a);
            var o = i.join(' -> '),
                l = "Could not resolve '".concat(a, "'.");
            return (
                r && (l += ' '.concat(r)),
                (l += '\n\n'),
                (l += 'Resolution path: '.concat(o)),
                e.call(this, l) || this
            );
        }
        return (J(t, e), t);
    })(re),
    oe = (function (e) {
        function t(t, n) {
            var r = t.toString(),
                a = "Could not register '".concat(r, "'.");
            return (n && (a += ' '.concat(n)), e.call(this, a) || this);
        }
        return (J(t, e), t);
    })(re),
    le = { PROXY: 'PROXY', CLASSIC: 'CLASSIC' },
    ue = { SINGLETON: 'SINGLETON', TRANSIENT: 'TRANSIENT', SCOPED: 'SCOPED' };
function se(e) {
    var t = e.length,
        n = 0,
        r = 'EOF',
        a = '',
        i = 0,
        o = 0,
        l = 0;
    return {
        next: function (e) {
            void 0 === e && (e = 0);
            return ((i = e), u(), d());
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
                        return (n++, o++, (r = u));
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
                                    var t = o === l + 1;
                                    return !(',' !== e || !t) || ('(' === e ? (o++, !1) : !(')' !== e || (l++, !t)));
                                }),
                            (r = u)
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
                        if (he(u)) return (s(), r);
                        n++;
                }
        }
    }
    function s() {
        for (var t, i = e.charAt(n), o = ++n; (t = e.charAt(n)), pe.test(t); ) n++;
        return (
            (a = '' + i + e.substring(o, n)),
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
function ve(e) {
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
var me = Symbol('Awilix Resolver Config');
function ye(e) {
    return {
        resolve: function () {
            return e;
        },
        isLeakSafe: !0,
    };
}
function be(e, t) {
    if (!ge(e)) throw new ae('asFunction', 'fn', 'function', e);
    t = xe({ lifetime: ue.TRANSIENT }, t, e[me]);
    var n = Pe(e);
    return ke(we(ee({ resolve: n }, t)));
}
function _e(e, t) {
    if (!ge(e)) throw new ae('asClass', 'Type', 'class', e);
    t = xe({ lifetime: ue.TRANSIENT }, t, e[me]);
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
        transient: Se(t, ue.TRANSIENT),
        scoped: Se(t, ue.SCOPED),
        singleton: Se(t, ue.SINGLETON),
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
        a = ((n = ne(ne([], Reflect.ownKeys(e.cradle), !0), Reflect.ownKeys(r), !0)), Array.from(new Set(n)));
    return new Proxy(
        {},
        {
            get: function (t, n) {
                return n === Symbol.iterator
                    ? function () {
                          var t, n, a, i, o, l, u, s;
                          return te(this, function (c) {
                              switch (c.label) {
                                  case 0:
                                      for (a in ((t = e.cradle), (n = []), t)) n.push(a);
                                      ((i = 0), (c.label = 1));
                                  case 1:
                                      return i < n.length ? ((a = n[i]) in t ? [4, a] : [3, 3]) : [3, 4];
                                  case 2:
                                      (c.sent(), (c.label = 3));
                                  case 3:
                                      return (i++, [3, 1]);
                                  case 4:
                                      for (u in ((l = []), (o = r))) l.push(u);
                                      ((s = 0), (c.label = 5));
                                  case 5:
                                      return s < l.length ? ((u = l[s]) in o ? [4, u] : [3, 7]) : [3, 8];
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
                return a;
            },
            getOwnPropertyDescriptor: function (e, t) {
                if (a.indexOf(t) > -1) return { enumerable: !0, configurable: !0 };
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
            var a = this.injector
                    ? (function (e, t) {
                          return function (n, r) {
                              return n in t ? t[n] : e.resolve(n, r);
                          };
                      })(t, this.injector(t))
                    : t.resolve,
                i = n.map(function (e) {
                    return a(e.name, { allowUnregistered: e.optional });
                });
            return e.apply(void 0, i);
        }
        return e();
    };
}
function Ce(e) {
    var t = (function (e) {
        var t = se(e),
            n = t.next,
            r = t.done,
            a = [],
            i = null;
        for (f(); !r(); )
            switch (i.type) {
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
                        l = { name: i.value, optional: !1 };
                    if ('async' === i.value && (o = f()) && '=' !== o.type) break;
                    return (a.push(l), a);
                default:
                    throw d();
            }
        return a;
        function u() {
            for (var e = { name: '', optional: !1 }; !r(); )
                switch ((f(), i.type)) {
                    case 'ident':
                        e.name = i.value;
                        break;
                    case '=':
                        e.optional = !0;
                        break;
                    case ',':
                        (a.push(e), (e = { name: '', optional: !1 }));
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
            return 'ident' === i.type && 'constructor' === i.value;
        }
        function f(e) {
            return (void 0 === e && (e = 0), (i = n(e)));
        }
        function d() {
            return new SyntaxError(
                'Parsing parameter list, did not expect '
                    .concat(i.type, ' token')
                    .concat(i.value ? ' ('.concat(i.value, ')') : ''),
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
    Ne = Symbol('rollUpRegistrations'),
    je = 'AwilixContainerCradle';
function Te(e) {
    return (void 0 === e && (e = {}), Re(e));
}
function Re(e, t, n) {
    var r;
    e = ee({ injectionMode: le.PROXY, strict: !1 }, e);
    var a = null != n ? n : [],
        i = {},
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
                    return Re(e, l, a);
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
                        i[c] = f;
                    }
                    return l;
                },
                build: function (e, t) {
                    if (e && e.resolve) return e.resolve(l);
                    var n = 'build',
                        r = 'targetOrResolver';
                    return (
                        ae.assert(e, n, r, 'a registration, function or class', e),
                        ae.assert('function' == typeof e, n, r, 'a function or class', e),
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
        u = t ? [l].concat(t[Ae]) : [l];
    l[Ae] = u;
    var s,
        c = (s = u)[s.length - 1];
    return l;
    function f() {
        return ee(ee({}, t && t[Ne]()), i);
    }
    function d() {
        var e, t, n, r, a;
        return te(this, function (i) {
            switch (i.label) {
                case 0:
                    for (r in ((e = f()), (n = []), (t = e))) n.push(r);
                    ((a = 0), (i.label = 1));
                case 1:
                    return a < n.length ? ((r = n[a]) in t ? [4, r] : [3, 3]) : [3, 4];
                case 2:
                    (i.sent(), (i.label = 3));
                case 3:
                    return (a++, [3, 1]);
                case 4:
                    return [2];
            }
        });
    }
    function p() {
        return Object.prototype.toString.call(o);
    }
    function h(e) {
        var n = i[e];
        return n || (t ? t.getRegistration(e) : null);
    }
    function v(t, n) {
        n = n || {};
        try {
            var r = h(t);
            if (
                a.some(function (e) {
                    return e.name === t;
                })
            )
                throw new ie(t, a, 'Cyclic dependencies detected.');
            if ('toJSON' === t) return p;
            if ('constructor' === t) return Te;
            if (!r) {
                switch (t) {
                    case 'inspect':
                    case 'toString':
                        return p;
                    case Symbol.toStringTag:
                        return je;
                    case 'then':
                        return;
                    case Symbol.iterator:
                        return d;
                }
                if (n.allowUnregistered) return;
                throw new ie(t, a);
            }
            var i = r.lifetime || ue.TRANSIENT;
            if (e.strict && !r.isLeakSafe) {
                var o = a.findIndex(function (e) {
                    var t,
                        n,
                        r = e.lifetime;
                    return (
                        (n = i),
                        ((t = r) === ue.SINGLETON && n !== ue.SINGLETON) || (t === ue.SCOPED && n === ue.TRANSIENT)
                    );
                });
                if (o > -1)
                    throw new ie(
                        t,
                        a,
                        "Dependency '"
                            .concat(t.toString(), "' has a shorter lifetime than its ancestor: '")
                            .concat(a[o].name.toString(), "'"),
                    );
            }
            a.push({ name: t, lifetime: i });
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
                    throw new ie(t, a, 'Unknown lifetime "'.concat(r.lifetime, '"'));
            }
            return (a.pop(), s);
        } catch (f) {
            throw ((a.length = 0), f);
        }
    }
}
var Le = {},
    ze = { exports: {} },
    Ie = {},
    De = { exports: {} },
    Me = {};
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
            if (!(0 < a(i, t))) break e;
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
            e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
                var l = 2 * (r + 1) - 1,
                    u = e[l],
                    s = l + 1,
                    c = e[s];
                if (0 > a(u, n))
                    s < i && 0 > a(c, u) ? ((e[r] = c), (e[s] = n), (r = s)) : ((e[r] = u), (e[l] = n), (r = l));
                else {
                    if (!(s < i && 0 > a(c, n))) break e;
                    ((e[r] = c), (e[s] = n), (r = s));
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
        var i = performance;
        e.unstable_now = function () {
            return i.now();
        };
    } else {
        var o = Date,
            l = o.now();
        e.unstable_now = function () {
            return o.now() - l;
        };
    }
    var u = [],
        s = [],
        c = 1,
        f = null,
        d = 3,
        p = !1,
        h = !1,
        v = !1,
        g = 'function' == typeof setTimeout ? setTimeout : null,
        m = 'function' == typeof clearTimeout ? clearTimeout : null,
        y = 'undefined' != typeof setImmediate ? setImmediate : null;
    function b(e) {
        for (var a = n(s); null !== a; ) {
            if (null === a.callback) r(s);
            else {
                if (!(a.startTime <= e)) break;
                (r(s), (a.sortIndex = a.expirationTime), t(u, a));
            }
            a = n(s);
        }
    }
    function _(e) {
        if (((v = !1), b(e), !h))
            if (null !== n(u)) ((h = !0), T(w));
            else {
                var t = n(s);
                null !== t && R(_, t.startTime - e);
            }
    }
    function w(t, a) {
        ((h = !1), v && ((v = !1), m(O), (O = -1)), (p = !0));
        var i = d;
        try {
            for (b(a), f = n(u); null !== f && (!(f.expirationTime > a) || (t && !C())); ) {
                var o = f.callback;
                if ('function' == typeof o) {
                    ((f.callback = null), (d = f.priorityLevel));
                    var l = o(f.expirationTime <= a);
                    ((a = e.unstable_now()), 'function' == typeof l ? (f.callback = l) : f === n(u) && r(u), b(a));
                } else r(u);
                f = n(u);
            }
            if (null !== f) var c = !0;
            else {
                var g = n(s);
                (null !== g && R(_, g.startTime - a), (c = !1));
            }
            return c;
        } finally {
            ((f = null), (d = i), (p = !1));
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
        var N = new MessageChannel(),
            j = N.port2;
        ((N.port1.onmessage = A),
            (k = function () {
                j.postMessage(null);
            }));
    } else
        k = function () {
            g(A, 0);
        };
    function T(e) {
        ((x = e), S || ((S = !0), k()));
    }
    function R(t, n) {
        O = g(function () {
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
            h || p || ((h = !0), T(w));
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
        (e.unstable_scheduleCallback = function (r, a, i) {
            var o = e.unstable_now();
            switch (
                ('object' == typeof i && null !== i
                    ? (i = 'number' == typeof (i = i.delay) && 0 < i ? o + i : o)
                    : (i = o),
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
                    callback: a,
                    priorityLevel: r,
                    startTime: i,
                    expirationTime: (l = i + l),
                    sortIndex: -1,
                }),
                i > o
                    ? ((r.sortIndex = i),
                      t(s, r),
                      null === n(u) && r === n(s) && (v ? (m(O), (O = -1)) : (v = !0), R(_, i - o)))
                    : ((r.sortIndex = l), t(u, r), h || p || ((h = !0), T(w))),
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
})(Me),
    (De.exports = Me));
var Ve = De.exports,
    Fe = B,
    Ue = Ve;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Be(e) {
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
    (Ke(e, t), Ke(e + 'Capture', t));
}
function Ke(e, t) {
    for (We[e] = t, e = 0; e < t.length; e++) $e.add(t[e]);
}
var qe = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    Ge = Object.prototype.hasOwnProperty,
    Qe =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ye = {},
    Xe = {};
function Ze(e, t, n, r, a, i, o) {
    ((this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = a),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = o));
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
    var a = Je.hasOwnProperty(t) ? Je[t] : null;
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
                  return !!Ge.call(Xe, e) || (!Ge.call(Ye, e) && (Qe.test(e) ? (Xe[e] = !0) : ((Ye[e] = !0), !1)));
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
    at = Symbol.for('react.element'),
    it = Symbol.for('react.portal'),
    ot = Symbol.for('react.fragment'),
    lt = Symbol.for('react.strict_mode'),
    ut = Symbol.for('react.profiler'),
    st = Symbol.for('react.provider'),
    ct = Symbol.for('react.context'),
    ft = Symbol.for('react.forward_ref'),
    dt = Symbol.for('react.suspense'),
    pt = Symbol.for('react.suspense_list'),
    ht = Symbol.for('react.memo'),
    vt = Symbol.for('react.lazy'),
    gt = Symbol.for('react.offscreen'),
    mt = Symbol.iterator;
function yt(e) {
    return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (mt && e[mt]) || e['@@iterator'])
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
                var a = s.stack.split('\n'), i = r.stack.split('\n'), o = a.length - 1, l = i.length - 1;
                1 <= o && 0 <= l && a[o] !== i[l];
            )
                l--;
            for (; 1 <= o && 0 <= l; o--, l--)
                if (a[o] !== i[l]) {
                    if (1 !== o || 1 !== l)
                        do {
                            if ((o--, 0 > --l || a[o] !== i[l])) {
                                var u = '\n' + a[o].replace(' at new ', ' at ');
                                return (
                                    e.displayName &&
                                        u.includes('<anonymous>') &&
                                        (u = u.replace('<anonymous>', e.displayName)),
                                    u
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
        case it:
            return 'Portal';
        case ut:
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
            case st:
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
                var a = n.get,
                    i = n.set;
                return (
                    Object.defineProperty(e, t, {
                        configurable: !0,
                        get: function () {
                            return a.call(this);
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
function Nt(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = '';
    return (e && (r = Ct(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0));
}
function jt(e) {
    if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body;
    } catch (t) {
        return e.body;
    }
}
function Tt(e, t) {
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
function zt(e, t) {
    Lt(e, t);
    var n = Pt(t.value),
        r = t.type;
    if (null != n)
        'number' === r
            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
    (t.hasOwnProperty('value')
        ? Dt(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && Dt(e, t.type, Pt(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked));
}
function It(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
        ((t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t));
    }
    ('' !== (n = e.name) && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        '' !== n && (e.name = n));
}
function Dt(e, t, n) {
    ('number' === t && jt(e.ownerDocument) === e) ||
        (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Mt = Array.isArray;
function Vt(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
        for (n = 0; n < e.length; n++)
            ((a = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0));
    } else {
        for (n = '' + Pt(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n) return ((e[a].selected = !0), void (r && (e[a].defaultSelected = !0)));
            null !== t || e[a].disabled || (t = e[a]);
        }
        null !== t && (t.selected = !0);
    }
}
function Ft(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(Be(91));
    return _t({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Ut(e, t) {
    var n = t.value;
    if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(Be(92));
            if (Mt(n)) {
                if (1 < n.length) throw Error(Be(93));
                n = n[0];
            }
            t = n;
        }
        (null == t && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: Pt(n) };
}
function Bt(e, t) {
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
var Kt,
    qt,
    Gt =
        ((qt = function (e, t) {
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
                      return qt(e, t);
                  });
              }
            : qt);
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
                a = Zt(n, t[n], r);
            ('float' === n && (n = 'cssFloat'), r ? e.setProperty(n, a) : (e[n] = a));
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
        if (en[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(Be(137, e));
        if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(Be(60));
            if ('object' != typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
                throw Error(Be(61));
        }
        if (null != t.style && 'object' != typeof t.style) throw Error(Be(62));
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
    un = null;
function sn(e) {
    if ((e = no(e))) {
        if ('function' != typeof on) throw Error(Be(280));
        var t = e.stateNode;
        t && ((t = ao(t)), on(e.stateNode, e.type, t));
    }
}
function cn(e) {
    ln ? (un ? un.push(e) : (un = [e])) : (ln = e);
}
function fn() {
    if (ln) {
        var e = ln,
            t = un;
        if (((un = ln = null), sn(e), t)) for (e = 0; e < t.length; e++) sn(t[e]);
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
        ((hn = !1), (null !== ln || null !== un) && (pn(), fn()));
    }
}
function gn(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = ao(n);
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
    if (n && 'function' != typeof n) throw Error(Be(231, t, typeof n));
    return n;
}
var mn = !1;
if (qe)
    try {
        var yn = {};
        (Object.defineProperty(yn, 'passive', {
            get: function () {
                mn = !0;
            },
        }),
            window.addEventListener('test', yn, yn),
            window.removeEventListener('test', yn, yn));
    } catch (qt) {
        mn = !1;
    }
function bn(e, t, n, r, a, i, o, l, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s);
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
function On(e, t, n, r, a, i, o, l, u) {
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
    if (En(e) !== e) throw Error(Be(188));
}
function An(e) {
    return null !==
        (e = (function (e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = En(e))) throw Error(Be(188));
                return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                    if (null !== (r = a.return)) {
                        n = r;
                        continue;
                    }
                    break;
                }
                if (a.child === i.child) {
                    for (i = a.child; i; ) {
                        if (i === n) return (Cn(a), e);
                        if (i === r) return (Cn(a), t);
                        i = i.sibling;
                    }
                    throw Error(Be(188));
                }
                if (n.return !== r.return) ((n = a), (r = i));
                else {
                    for (var o = !1, l = a.child; l; ) {
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
                    if (!o) {
                        for (l = i.child; l; ) {
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
                        if (!o) throw Error(Be(189));
                    }
                }
                if (n.alternate !== r) throw Error(Be(190));
            }
            if (3 !== n.tag) throw Error(Be(188));
            return n.stateNode.current === n ? e : t;
        })(e))
        ? Nn(e)
        : null;
}
function Nn(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e; ) {
        var t = Nn(e);
        if (null !== t) return t;
        e = e.sibling;
    }
    return null;
}
var jn = Ue.unstable_scheduleCallback,
    Tn = Ue.unstable_cancelCallback,
    Rn = Ue.unstable_shouldYield,
    Ln = Ue.unstable_requestPaint,
    zn = Ue.unstable_now,
    In = Ue.unstable_getCurrentPriorityLevel,
    Dn = Ue.unstable_ImmediatePriority,
    Mn = Ue.unstable_UserBlockingPriority,
    Vn = Ue.unstable_NormalPriority,
    Fn = Ue.unstable_LowPriority,
    Un = Ue.unstable_IdlePriority,
    Bn = null,
    $n = null;
var Wn = Math.clz32
        ? Math.clz32
        : function (e) {
              return ((e >>>= 0), 0 === e ? 32 : (31 - ((Hn(e) / Kn) | 0)) | 0);
          },
    Hn = Math.log,
    Kn = Math.LN2;
var qn = 64,
    Gn = 4194304;
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
        a = e.suspendedLanes,
        i = e.pingedLanes,
        o = 268435455 & n;
    if (0 !== o) {
        var l = o & ~a;
        0 !== l ? (r = Qn(l)) : 0 !== (i &= o) && (r = Qn(i));
    } else 0 !== (o = n & ~a) ? (r = Qn(o)) : 0 !== i && (r = Qn(i));
    if (0 === r) return 0;
    if (0 !== t && t !== r && 0 == (t & a) && ((a = r & -r) >= (i = t & -t) || (16 === a && 0 != (4194240 & i))))
        return t;
    if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; ) ((a = 1 << (n = 31 - Wn(t))), (r |= e[n]), (t &= ~a));
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
    var e = qn;
    return (0 == (4194240 & (qn <<= 1)) && (qn = 64), e);
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
            a = 1 << r;
        ((a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a));
    }
}
var rr = 0;
function ar(e) {
    return 1 < (e &= -e) ? (4 < e ? (0 != (268435455 & e) ? 16 : 536870912) : 4) : 1;
}
var ir,
    or,
    lr,
    ur,
    sr,
    cr = !1,
    fr = [],
    dr = null,
    pr = null,
    hr = null,
    vr = new Map(),
    gr = new Map(),
    mr = [],
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
            gr.delete(t.pointerId);
    }
}
function _r(e, t, n, r, a, i) {
    return null === e || e.nativeEvent !== i
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }),
          null !== t && null !== (t = no(t)) && or(t),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== a && -1 === t.indexOf(a) && t.push(a), e);
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
                        void sr(e.priority, function () {
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
        gr.forEach(Sr));
}
function Or(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), cr || ((cr = !0), Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, xr)));
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
            gr.forEach(t),
            n = 0;
        n < mr.length;
        n++
    )
        (r = mr[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < mr.length && null === (n = mr[0]).blockedOn; ) (wr(n), null === n.blockedOn && mr.shift());
}
var Pr = rt.ReactCurrentBatchConfig,
    Cr = !0;
function Ar(e, t, n, r) {
    var a = rr,
        i = Pr.transition;
    Pr.transition = null;
    try {
        ((rr = 1), jr(e, t, n, r));
    } finally {
        ((rr = a), (Pr.transition = i));
    }
}
function Nr(e, t, n, r) {
    var a = rr,
        i = Pr.transition;
    Pr.transition = null;
    try {
        ((rr = 4), jr(e, t, n, r));
    } finally {
        ((rr = a), (Pr.transition = i));
    }
}
function jr(e, t, n, r) {
    if (Cr) {
        var a = Rr(e, t, n, r);
        if (null === a) (Pi(e, t, r, Tr, n), br(e, r));
        else if (
            (function (e, t, n, r, a) {
                switch (t) {
                    case 'focusin':
                        return ((dr = _r(dr, e, t, n, r, a)), !0);
                    case 'dragenter':
                        return ((pr = _r(pr, e, t, n, r, a)), !0);
                    case 'mouseover':
                        return ((hr = _r(hr, e, t, n, r, a)), !0);
                    case 'pointerover':
                        var i = a.pointerId;
                        return (vr.set(i, _r(vr.get(i) || null, e, t, n, r, a)), !0);
                    case 'gotpointercapture':
                        return ((i = a.pointerId), gr.set(i, _r(gr.get(i) || null, e, t, n, r, a)), !0);
                }
                return !1;
            })(a, e, t, n, r)
        )
            r.stopPropagation();
        else if ((br(e, r), 4 & t && -1 < yr.indexOf(e))) {
            for (; null !== a; ) {
                var i = no(a);
                if ((null !== i && ir(i), null === (i = Rr(e, t, n, r)) && Pi(e, t, r, Tr, n), i === a)) break;
                a = i;
            }
            null !== a && r.stopPropagation();
        } else Pi(e, t, r, null, n);
    }
}
var Tr = null;
function Rr(e, t, n, r) {
    if (((Tr = null), null !== (e = to((e = an(r))))))
        if (null === (t = En(e))) e = null;
        else if (13 === (n = t.tag)) {
            if (null !== (e = Pn(t))) return e;
            e = null;
        } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return ((Tr = e), null);
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
            switch (In()) {
                case Dn:
                    return 1;
                case Mn:
                    return 4;
                case Vn:
                case Fn:
                    return 16;
                case Un:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var zr = null,
    Ir = null,
    Dr = null;
function Mr() {
    if (Dr) return Dr;
    var e,
        t,
        n = Ir,
        r = n.length,
        a = 'value' in zr ? zr.value : zr.textContent,
        i = a.length;
    for (e = 0; e < r && n[e] === a[e]; e++);
    var o = r - e;
    for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
    return (Dr = a.slice(e, 1 < t ? 1 - t : void 0));
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
function Ur() {
    return !1;
}
function Br(e) {
    function t(t, n, r, a, i) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = a),
        (this.target = i),
        (this.currentTarget = null),
        e))
            e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
        return (
            (this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue)
                ? Fr
                : Ur),
            (this.isPropagationStopped = Ur),
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
    qr = Br(Kr),
    Gr = _t({}, Kr, { view: 0, detail: 0 }),
    Qr = Br(Gr),
    Yr = _t({}, Gr, {
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
        getModifierState: ua,
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
    Xr = Br(Yr),
    Zr = Br(_t({}, Yr, { dataTransfer: 0 })),
    Jr = Br(_t({}, Gr, { relatedTarget: 0 })),
    ea = Br(_t({}, Kr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    ta = _t({}, Kr, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    na = Br(ta),
    ra = Br(_t({}, Kr, { data: 0 })),
    aa = {
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
    ia = {
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
    oa = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function la(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = oa[e]) && !!t[e];
}
function ua() {
    return la;
}
var sa = _t({}, Gr, {
        key: function (e) {
            if (e.key) {
                var t = aa[e.key] || e.key;
                if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
                ? 13 === (e = Vr(e))
                    ? 'Enter'
                    : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? ia[e.keyCode] || 'Unidentified'
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
        getModifierState: ua,
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
    ca = Br(sa),
    fa = Br(
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
    da = Br(
        _t({}, Gr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ua,
        }),
    ),
    pa = Br(_t({}, Kr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    ha = _t({}, Yr, {
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
    va = Br(ha),
    ga = [9, 13, 27, 32],
    ma = qe && 'CompositionEvent' in window,
    ya = null;
qe && 'documentMode' in document && (ya = document.documentMode);
var ba = qe && 'TextEvent' in window && !ya,
    _a = qe && (!ma || (ya && 8 < ya && 11 >= ya)),
    wa = String.fromCharCode(32),
    ka = !1;
function Sa(e, t) {
    switch (e) {
        case 'keyup':
            return -1 !== ga.indexOf(t.keyCode);
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
function xa(e) {
    return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
}
var Oa = !1;
var Ea = {
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
function Pa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return 'input' === t ? !!Ea[e.type] : 'textarea' === t;
}
function Ca(e, t, n, r) {
    (cn(r),
        0 < (t = Ai(t, 'onChange')).length &&
            ((n = new qr('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
}
var Aa = null,
    Na = null;
function ja(e) {
    wi(e, 0);
}
function Ta(e) {
    if (Nt(ro(e))) return e;
}
function Ra(e, t) {
    if ('change' === e) return t;
}
var La = !1;
if (qe) {
    var za;
    if (qe) {
        var Ia = 'oninput' in document;
        if (!Ia) {
            var Da = document.createElement('div');
            (Da.setAttribute('oninput', 'return;'), (Ia = 'function' == typeof Da.oninput));
        }
        za = Ia;
    } else za = !1;
    La = za && (!document.documentMode || 9 < document.documentMode);
}
function Ma() {
    Aa && (Aa.detachEvent('onpropertychange', Va), (Na = Aa = null));
}
function Va(e) {
    if ('value' === e.propertyName && Ta(Na)) {
        var t = [];
        (Ca(t, Na, e, an(e)), vn(ja, t));
    }
}
function Fa(e, t, n) {
    'focusin' === e ? (Ma(), (Na = n), (Aa = t).attachEvent('onpropertychange', Va)) : 'focusout' === e && Ma();
}
function Ua(e) {
    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Ta(Na);
}
function Ba(e, t) {
    if ('click' === e) return Ta(t);
}
function $a(e, t) {
    if ('input' === e || 'change' === e) return Ta(t);
}
var Wa =
    'function' == typeof Object.is
        ? Object.is
        : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
          };
function Ha(e, t) {
    if (Wa(e, t)) return !0;
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var a = n[r];
        if (!Ge.call(t, a) || !Wa(e[a], t[a])) return !1;
    }
    return !0;
}
function Ka(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function qa(e, t) {
    var n,
        r = Ka(e);
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
        r = Ka(r);
    }
}
function Ga(e, t) {
    return (
        !(!e || !t) &&
        (e === t ||
            ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                    ? Ga(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
    );
}
function Qa() {
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
function Ya(e) {
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
function Xa(e) {
    var t = Qa(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ga(n.ownerDocument.documentElement, n)) {
        if (null !== r && Ya(n))
            if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
            else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
                e = e.getSelection();
                var a = n.textContent.length,
                    i = Math.min(r.start, a);
                ((r = void 0 === r.end ? i : Math.min(r.end, a)),
                    !e.extend && i > r && ((a = r), (r = i), (i = a)),
                    (a = qa(n, i)));
                var o = qa(n, r);
                a &&
                    o &&
                    (1 !== e.rangeCount ||
                        e.anchorNode !== a.node ||
                        e.anchorOffset !== a.offset ||
                        e.focusNode !== o.node ||
                        e.focusOffset !== o.offset) &&
                    ((t = t.createRange()).setStart(a.node, a.offset),
                    e.removeAllRanges(),
                    i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
            }
        for (t = [], e = n; (e = e.parentNode); )
            1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for ('function' == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
            (((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
}
var Za = qe && 'documentMode' in document && 11 >= document.documentMode,
    Ja = null,
    ei = null,
    ti = null,
    ni = !1;
function ri(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    ni ||
        null == Ja ||
        Ja !== jt(r) ||
        ('selectionStart' in (r = Ja) && Ya(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                  anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                      .anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              }),
        (ti && Ha(ti, r)) ||
            ((ti = r),
            0 < (r = Ai(ei, 'onSelect')).length &&
                ((t = new qr('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Ja))));
}
function ai(e, t) {
    var n = {};
    return ((n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n);
}
var ii = {
        animationend: ai('Animation', 'AnimationEnd'),
        animationiteration: ai('Animation', 'AnimationIteration'),
        animationstart: ai('Animation', 'AnimationStart'),
        transitionend: ai('Transition', 'TransitionEnd'),
    },
    oi = {},
    li = {};
function ui(e) {
    if (oi[e]) return oi[e];
    if (!ii[e]) return e;
    var t,
        n = ii[e];
    for (t in n) if (n.hasOwnProperty(t) && t in li) return (oi[e] = n[t]);
    return e;
}
qe &&
    ((li = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete ii.animationend.animation, delete ii.animationiteration.animation, delete ii.animationstart.animation),
    'TransitionEvent' in window || delete ii.transitionend.transition);
var si = ui('animationend'),
    ci = ui('animationiteration'),
    fi = ui('animationstart'),
    di = ui('transitionend'),
    pi = new Map(),
    hi =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' ',
        );
function vi(e, t) {
    (pi.set(e, t), He(t, [e]));
}
for (var gi = 0; gi < hi.length; gi++) {
    var mi = hi[gi];
    vi(mi.toLowerCase(), 'on' + (mi[0].toUpperCase() + mi.slice(1)));
}
(vi(si, 'onAnimationEnd'),
    vi(ci, 'onAnimationIteration'),
    vi(fi, 'onAnimationStart'),
    vi('dblclick', 'onDoubleClick'),
    vi('focusin', 'onFocus'),
    vi('focusout', 'onBlur'),
    vi(di, 'onTransitionEnd'),
    Ke('onMouseEnter', ['mouseout', 'mouseover']),
    Ke('onMouseLeave', ['mouseout', 'mouseover']),
    Ke('onPointerEnter', ['pointerout', 'pointerover']),
    Ke('onPointerLeave', ['pointerout', 'pointerover']),
    He('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    He('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    He('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    He('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    He('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    He('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
var yi =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' ',
        ),
    bi = new Set('cancel close invalid load scroll toggle'.split(' ').concat(yi));
function _i(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n),
        (function (e, t, n, r, a, i, o, l, u) {
            if ((On.apply(this, arguments), _n)) {
                if (!_n) throw Error(Be(198));
                var s = wn;
                ((_n = !1), (wn = null), kn || ((kn = !0), (Sn = s)));
            }
        })(r, t, void 0, e),
        (e.currentTarget = null));
}
function wi(e, t) {
    t = 0 != (4 & t);
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            a = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var l = r[o],
                        u = l.instance,
                        s = l.currentTarget;
                    if (((l = l.listener), u !== i && a.isPropagationStopped())) break e;
                    (_i(a, l, s), (i = u));
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (
                        ((u = (l = r[o]).instance),
                        (s = l.currentTarget),
                        (l = l.listener),
                        u !== i && a.isPropagationStopped())
                    )
                        break e;
                    (_i(a, l, s), (i = u));
                }
        }
    }
    if (kn) throw ((e = Sn), (kn = !1), (Sn = null), e);
}
function ki(e, t) {
    var n = t[Zi];
    void 0 === n && (n = t[Zi] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Ei(t, e, 2, !1), n.add(r));
}
function Si(e, t, n) {
    var r = 0;
    (t && (r |= 4), Ei(n, e, r, t));
}
var xi = '_reactListening' + Math.random().toString(36).slice(2);
function Oi(e) {
    if (!e[xi]) {
        ((e[xi] = !0),
            $e.forEach(function (t) {
                'selectionchange' !== t && (bi.has(t) || Si(t, !1, e), Si(t, !0, e));
            }));
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[xi] || ((t[xi] = !0), Si('selectionchange', !1, t));
    }
}
function Ei(e, t, n, r) {
    switch (Lr(t)) {
        case 1:
            var a = Ar;
            break;
        case 4:
            a = Nr;
            break;
        default:
            a = jr;
    }
    ((n = a.bind(null, t, n, e)),
        (a = void 0),
        !mn || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (a = !0),
        r
            ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
            : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1));
}
function Pi(e, t, n, r, a) {
    var i = r;
    if (0 == (1 & t) && 0 == (2 & t) && null !== r)
        e: for (;;) {
            if (null === r) return;
            var o = r.tag;
            if (3 === o || 4 === o) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
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
                for (; null !== l; ) {
                    if (null === (o = to(l))) return;
                    if (5 === (u = o.tag) || 6 === u) {
                        r = i = o;
                        continue e;
                    }
                    l = l.parentNode;
                }
            }
            r = r.return;
        }
    vn(function () {
        var r = i,
            a = an(n),
            o = [];
        e: {
            var l = pi.get(e);
            if (void 0 !== l) {
                var u = qr,
                    s = e;
                switch (e) {
                    case 'keypress':
                        if (0 === Vr(n)) break e;
                    case 'keydown':
                    case 'keyup':
                        u = ca;
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
                        u = Xr;
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
                        u = da;
                        break;
                    case si:
                    case ci:
                    case fi:
                        u = ea;
                        break;
                    case di:
                        u = pa;
                        break;
                    case 'scroll':
                        u = Qr;
                        break;
                    case 'wheel':
                        u = va;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        u = na;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        u = fa;
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
                            ((p = v), null !== d && null != (v = gn(h, d)) && c.push(Ci(h, v, p))),
                        f)
                    )
                        break;
                    h = h.return;
                }
                0 < c.length && ((l = new u(l, s, null, n, a)), o.push({ event: l, listeners: c }));
            }
        }
        if (0 == (7 & t)) {
            if (
                ((u = 'mouseout' === e || 'pointerout' === e),
                (!(l = 'mouseover' === e || 'pointerover' === e) ||
                    n === rn ||
                    !(s = n.relatedTarget || n.fromElement) ||
                    (!to(s) && !s[Xi])) &&
                    (u || l) &&
                    ((l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window),
                    u
                        ? ((u = r),
                          null !== (s = (s = n.relatedTarget || n.toElement) ? to(s) : null) &&
                              (s !== (f = En(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                              (s = null))
                        : ((u = null), (s = r)),
                    u !== s))
            ) {
                if (
                    ((c = Xr),
                    (v = 'onMouseLeave'),
                    (d = 'onMouseEnter'),
                    (h = 'mouse'),
                    ('pointerout' !== e && 'pointerover' !== e) ||
                        ((c = fa), (v = 'onPointerLeave'), (d = 'onPointerEnter'), (h = 'pointer')),
                    (f = null == u ? l : ro(u)),
                    (p = null == s ? l : ro(s)),
                    ((l = new c(v, h + 'leave', u, n, a)).target = f),
                    (l.relatedTarget = p),
                    (v = null),
                    to(a) === r && (((c = new c(d, h + 'enter', s, n, a)).target = p), (c.relatedTarget = f), (v = c)),
                    (f = v),
                    u && s)
                )
                    e: {
                        for (d = s, h = 0, p = c = u; p; p = Ni(p)) h++;
                        for (p = 0, v = d; v; v = Ni(v)) p++;
                        for (; 0 < h - p; ) ((c = Ni(c)), h--);
                        for (; 0 < p - h; ) ((d = Ni(d)), p--);
                        for (; h--; ) {
                            if (c === d || (null !== d && c === d.alternate)) break e;
                            ((c = Ni(c)), (d = Ni(d)));
                        }
                        c = null;
                    }
                else c = null;
                (null !== u && ji(o, l, u, c, !1), null !== s && null !== f && ji(o, f, s, c, !0));
            }
            if (
                'select' === (u = (l = r ? ro(r) : window).nodeName && l.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === l.type)
            )
                var g = Ra;
            else if (Pa(l))
                if (La) g = $a;
                else {
                    g = Ua;
                    var m = Fa;
                }
            else
                (u = l.nodeName) &&
                    'input' === u.toLowerCase() &&
                    ('checkbox' === l.type || 'radio' === l.type) &&
                    (g = Ba);
            switch (
                (g && (g = g(e, r))
                    ? Ca(o, g, n, a)
                    : (m && m(e, l, r),
                      'focusout' === e &&
                          (m = l._wrapperState) &&
                          m.controlled &&
                          'number' === l.type &&
                          Dt(l, 'number', l.value)),
                (m = r ? ro(r) : window),
                e)
            ) {
                case 'focusin':
                    (Pa(m) || 'true' === m.contentEditable) && ((Ja = m), (ei = r), (ti = null));
                    break;
                case 'focusout':
                    ti = ei = Ja = null;
                    break;
                case 'mousedown':
                    ni = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    ((ni = !1), ri(o, n, a));
                    break;
                case 'selectionchange':
                    if (Za) break;
                case 'keydown':
                case 'keyup':
                    ri(o, n, a);
            }
            var y;
            if (ma)
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
                Oa
                    ? Sa(e, n) && (b = 'onCompositionEnd')
                    : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
            (b &&
                (_a &&
                    'ko' !== n.locale &&
                    (Oa || 'onCompositionStart' !== b
                        ? 'onCompositionEnd' === b && Oa && (y = Mr())
                        : ((Ir = 'value' in (zr = a) ? zr.value : zr.textContent), (Oa = !0))),
                0 < (m = Ai(r, b)).length &&
                    ((b = new ra(b, e, null, n, a)),
                    o.push({ event: b, listeners: m }),
                    y ? (b.data = y) : null !== (y = xa(n)) && (b.data = y))),
                (y = ba
                    ? (function (e, t) {
                          switch (e) {
                              case 'compositionend':
                                  return xa(t);
                              case 'keypress':
                                  return 32 !== t.which ? null : ((ka = !0), wa);
                              case 'textInput':
                                  return (e = t.data) === wa && ka ? null : e;
                              default:
                                  return null;
                          }
                      })(e, n)
                    : (function (e, t) {
                          if (Oa)
                              return 'compositionend' === e || (!ma && Sa(e, t))
                                  ? ((e = Mr()), (Dr = Ir = zr = null), (Oa = !1), e)
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
                                  return _a && 'ko' !== t.locale ? null : t.data;
                          }
                      })(e, n)) &&
                    0 < (r = Ai(r, 'onBeforeInput')).length &&
                    ((a = new ra('onBeforeInput', 'beforeinput', null, n, a)),
                    o.push({ event: a, listeners: r }),
                    (a.data = y)));
        }
        wi(o, t);
    });
}
function Ci(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Ai(e, t) {
    for (var n = t + 'Capture', r = []; null !== e; ) {
        var a = e,
            i = a.stateNode;
        (5 === a.tag &&
            null !== i &&
            ((a = i), null != (i = gn(e, n)) && r.unshift(Ci(e, i, a)), null != (i = gn(e, t)) && r.push(Ci(e, i, a))),
            (e = e.return));
    }
    return r;
}
function Ni(e) {
    if (null === e) return null;
    do {
        e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
}
function ji(e, t, n, r, a) {
    for (var i = t._reactName, o = []; null !== n && n !== r; ) {
        var l = n,
            u = l.alternate,
            s = l.stateNode;
        if (null !== u && u === r) break;
        (5 === l.tag &&
            null !== s &&
            ((l = s),
            a
                ? null != (u = gn(n, i)) && o.unshift(Ci(n, u, l))
                : a || (null != (u = gn(n, i)) && o.push(Ci(n, u, l)))),
            (n = n.return));
    }
    0 !== o.length && e.push({ event: t, listeners: o });
}
var Ti = /\r\n?/g,
    Ri = /\u0000|\uFFFD/g;
function Li(e) {
    return ('string' == typeof e ? e : '' + e).replace(Ti, '\n').replace(Ri, '');
}
function zi(e, t, n) {
    if (((t = Li(t)), Li(e) !== t && n)) throw Error(Be(425));
}
function Ii() {}
var Di = null,
    Mi = null;
function Vi(e, t) {
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
var Fi = 'function' == typeof setTimeout ? setTimeout : void 0,
    Ui = 'function' == typeof clearTimeout ? clearTimeout : void 0,
    Bi = 'function' == typeof Promise ? Promise : void 0,
    $i =
        'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== Bi
              ? function (e) {
                    return Bi.resolve(null).then(e).catch(Wi);
                }
              : Fi;
function Wi(e) {
    setTimeout(function () {
        throw e;
    });
}
function Hi(e, t) {
    var n = t,
        r = 0;
    do {
        var a = n.nextSibling;
        if ((e.removeChild(n), a && 8 === a.nodeType))
            if ('/$' === (n = a.data)) {
                if (0 === r) return (e.removeChild(a), void Er(t));
                r--;
            } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
        n = a;
    } while (n);
    Er(t);
}
function Ki(e) {
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
function qi(e) {
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
var Gi = Math.random().toString(36).slice(2),
    Qi = '__reactFiber$' + Gi,
    Yi = '__reactProps$' + Gi,
    Xi = '__reactContainer$' + Gi,
    Zi = '__reactEvents$' + Gi,
    Ji = '__reactListeners$' + Gi,
    eo = '__reactHandles$' + Gi;
function to(e) {
    var t = e[Qi];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Xi] || n[Qi])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = qi(e); null !== e; ) {
                    if ((n = e[Qi])) return n;
                    e = qi(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function no(e) {
    return !(e = e[Qi] || e[Xi]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
}
function ro(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(Be(33));
}
function ao(e) {
    return e[Yi] || null;
}
var io = [],
    oo = -1;
function lo(e) {
    return { current: e };
}
function uo(e) {
    0 > oo || ((e.current = io[oo]), (io[oo] = null), oo--);
}
function so(e, t) {
    (oo++, (io[oo] = e.current), (e.current = t));
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
    var a,
        i = {};
    for (a in n) i[a] = t[a];
    return (
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
    );
}
function go(e) {
    return null != (e = e.childContextTypes);
}
function mo() {
    (uo(po), uo(fo));
}
function yo(e, t, n) {
    if (fo.current !== co) throw Error(Be(168));
    (so(fo, t), so(po, n));
}
function bo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
    for (var a in (r = r.getChildContext())) if (!(a in t)) throw Error(Be(108, Et(e) || 'Unknown', a));
    return _t({}, n, r);
}
function _o(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || co),
        (ho = fo.current),
        so(fo, e),
        so(po, po.current),
        !0
    );
}
function wo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(Be(169));
    (n ? ((e = bo(e, t, ho)), (r.__reactInternalMemoizedMergedChildContext = e), uo(po), uo(fo), so(fo, e)) : uo(po),
        so(po, n));
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
        } catch (a) {
            throw (null !== ko && (ko = ko.slice(e + 1)), jn(Dn, Eo), a);
        } finally {
            ((rr = t), (xo = !1));
        }
    }
    return null;
}
var Po = [],
    Co = 0,
    Ao = null,
    No = 0,
    jo = [],
    To = 0,
    Ro = null,
    Lo = 1,
    zo = '';
function Io(e, t) {
    ((Po[Co++] = No), (Po[Co++] = Ao), (Ao = e), (No = t));
}
function Do(e, t, n) {
    ((jo[To++] = Lo), (jo[To++] = zo), (jo[To++] = Ro), (Ro = e));
    var r = Lo;
    e = zo;
    var a = 32 - Wn(r) - 1;
    ((r &= ~(1 << a)), (n += 1));
    var i = 32 - Wn(t) + a;
    if (30 < i) {
        var o = a - (a % 5);
        ((i = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (a -= o),
            (Lo = (1 << (32 - Wn(t) + a)) | (n << a) | r),
            (zo = i + e));
    } else ((Lo = (1 << i) | (n << a) | r), (zo = e));
}
function Mo(e) {
    null !== e.return && (Io(e, 1), Do(e, 1, 0));
}
function Vo(e) {
    for (; e === Ao; ) ((Ao = Po[--Co]), (Po[Co] = null), (No = Po[--Co]), (Po[Co] = null));
    for (; e === Ro; )
        ((Ro = jo[--To]), (jo[To] = null), (zo = jo[--To]), (jo[To] = null), (Lo = jo[--To]), (jo[To] = null));
}
var Fo = null,
    Uo = null,
    Bo = !1,
    $o = null;
function Wo(e, t) {
    var n = vf(5, null, null, 0);
    ((n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Ho(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (Fo = e), (Uo = Ki(t.firstChild)), !0)
            );
        case 6:
            return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (Fo = e), (Uo = null), !0)
            );
        case 13:
            return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ro ? { id: Lo, overflow: zo } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = vf(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (Fo = e),
                (Uo = null),
                !0)
            );
        default:
            return !1;
    }
}
function Ko(e) {
    return 0 != (1 & e.mode) && 0 == (128 & e.flags);
}
function qo(e) {
    if (Bo) {
        var t = Uo;
        if (t) {
            var n = t;
            if (!Ho(e, t)) {
                if (Ko(e)) throw Error(Be(418));
                t = Ki(n.nextSibling);
                var r = Fo;
                t && Ho(e, t) ? Wo(r, n) : ((e.flags = (-4097 & e.flags) | 2), (Bo = !1), (Fo = e));
            }
        } else {
            if (Ko(e)) throw Error(Be(418));
            ((e.flags = (-4097 & e.flags) | 2), (Bo = !1), (Fo = e));
        }
    }
}
function Go(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
    Fo = e;
}
function Qo(e) {
    if (e !== Fo) return !1;
    if (!Bo) return (Go(e), (Bo = !0), !1);
    var t;
    if (
        ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = 'head' !== (t = e.type) && 'body' !== t && !Vi(e.type, e.memoizedProps)),
        t && (t = Uo))
    ) {
        if (Ko(e)) throw (Yo(), Error(Be(418)));
        for (; t; ) (Wo(e, t), (t = Ki(t.nextSibling)));
    }
    if ((Go(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(Be(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ('/$' === n) {
                        if (0 === t) {
                            Uo = Ki(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
            }
            Uo = null;
        }
    } else Uo = Fo ? Ki(e.stateNode.nextSibling) : null;
    return !0;
}
function Yo() {
    for (var e = Uo; e; ) e = Ki(e.nextSibling);
}
function Xo() {
    ((Uo = Fo = null), (Bo = !1));
}
function Zo(e) {
    null === $o ? ($o = [e]) : $o.push(e);
}
var Jo = rt.ReactCurrentBatchConfig;
function el(e, t, n) {
    if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
        if (n._owner) {
            if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(Be(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(Be(147, e));
            var a = r,
                i = '' + e;
            return null !== t && null !== t.ref && 'function' == typeof t.ref && t.ref._stringRef === i
                ? t.ref
                : (((t = function (e) {
                      var t = a.refs;
                      null === e ? delete t[i] : (t[i] = e);
                  })._stringRef = i),
                  t);
        }
        if ('string' != typeof e) throw Error(Be(284));
        if (!n._owner) throw Error(Be(290, e));
    }
    return e;
}
function tl(e, t) {
    throw (
        (e = Object.prototype.toString.call(t)),
        Error(Be(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e))
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
    function a(e, t) {
        return (((e = mf(e, t)).index = 0), (e.sibling = null), e);
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
    function o(t) {
        return (e && null === t.alternate && (t.flags |= 2), t);
    }
    function l(e, t, n, r) {
        return null === t || 6 !== t.tag ? (((t = wf(n, e.mode, r)).return = e), t) : (((t = a(t, n)).return = e), t);
    }
    function u(e, t, n, r) {
        var i = n.type;
        return i === ot
            ? c(e, t, n.props.children, r, n.key)
            : null !== t &&
                (t.elementType === i || ('object' == typeof i && null !== i && i.$$typeof === vt && nl(i) === t.type))
              ? (((r = a(t, n.props)).ref = el(e, t, n)), (r.return = e), r)
              : (((r = yf(n.type, n.key, n.props, null, e.mode, r)).ref = el(e, t, n)), (r.return = e), r);
    }
    function s(e, t, n, r) {
        return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = kf(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
    }
    function c(e, t, n, r, i) {
        return null === t || 7 !== t.tag
            ? (((t = bf(n, e.mode, r, i)).return = e), t)
            : (((t = a(t, n)).return = e), t);
    }
    function f(e, t, n) {
        if (('string' == typeof t && '' !== t) || 'number' == typeof t)
            return (((t = wf('' + t, e.mode, n)).return = e), t);
        if ('object' == typeof t && null !== t) {
            switch (t.$$typeof) {
                case at:
                    return (
                        ((n = yf(t.type, t.key, t.props, null, e.mode, n)).ref = el(e, null, t)),
                        (n.return = e),
                        n
                    );
                case it:
                    return (((t = kf(t, e.mode, n)).return = e), t);
                case vt:
                    return f(e, (0, t._init)(t._payload), n);
            }
            if (Mt(t) || yt(t)) return (((t = bf(t, e.mode, n, null)).return = e), t);
            tl(e, t);
        }
        return null;
    }
    function d(e, t, n, r) {
        var a = null !== t ? t.key : null;
        if (('string' == typeof n && '' !== n) || 'number' == typeof n) return null !== a ? null : l(e, t, '' + n, r);
        if ('object' == typeof n && null !== n) {
            switch (n.$$typeof) {
                case at:
                    return n.key === a ? u(e, t, n, r) : null;
                case it:
                    return n.key === a ? s(e, t, n, r) : null;
                case vt:
                    return d(e, t, (a = n._init)(n._payload), r);
            }
            if (Mt(n) || yt(n)) return null !== a ? null : c(e, t, n, r, null);
            tl(e, n);
        }
        return null;
    }
    function p(e, t, n, r, a) {
        if (('string' == typeof r && '' !== r) || 'number' == typeof r) return l(t, (e = e.get(n) || null), '' + r, a);
        if ('object' == typeof r && null !== r) {
            switch (r.$$typeof) {
                case at:
                    return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case it:
                    return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case vt:
                    return p(e, t, n, (0, r._init)(r._payload), a);
            }
            if (Mt(r) || yt(r)) return c(t, (e = e.get(n) || null), r, a, null);
            tl(t, r);
        }
        return null;
    }
    return function l(u, s, c, h) {
        if (
            ('object' == typeof c && null !== c && c.type === ot && null === c.key && (c = c.props.children),
            'object' == typeof c && null !== c)
        ) {
            switch (c.$$typeof) {
                case at:
                    e: {
                        for (var v = c.key, g = s; null !== g; ) {
                            if (g.key === v) {
                                if ((v = c.type) === ot) {
                                    if (7 === g.tag) {
                                        (n(u, g.sibling), ((s = a(g, c.props.children)).return = u), (u = s));
                                        break e;
                                    }
                                } else if (
                                    g.elementType === v ||
                                    ('object' == typeof v && null !== v && v.$$typeof === vt && nl(v) === g.type)
                                ) {
                                    (n(u, g.sibling), ((s = a(g, c.props)).ref = el(u, g, c)), (s.return = u), (u = s));
                                    break e;
                                }
                                n(u, g);
                                break;
                            }
                            (t(u, g), (g = g.sibling));
                        }
                        c.type === ot
                            ? (((s = bf(c.props.children, u.mode, h, c.key)).return = u), (u = s))
                            : (((h = yf(c.type, c.key, c.props, null, u.mode, h)).ref = el(u, s, c)),
                              (h.return = u),
                              (u = h));
                    }
                    return o(u);
                case it:
                    e: {
                        for (g = c.key; null !== s; ) {
                            if (s.key === g) {
                                if (
                                    4 === s.tag &&
                                    s.stateNode.containerInfo === c.containerInfo &&
                                    s.stateNode.implementation === c.implementation
                                ) {
                                    (n(u, s.sibling), ((s = a(s, c.children || [])).return = u), (u = s));
                                    break e;
                                }
                                n(u, s);
                                break;
                            }
                            (t(u, s), (s = s.sibling));
                        }
                        (((s = kf(c, u.mode, h)).return = u), (u = s));
                    }
                    return o(u);
                case vt:
                    return l(u, s, (g = c._init)(c._payload), h);
            }
            if (Mt(c))
                return (function (a, o, l, u) {
                    for (var s = null, c = null, h = o, v = (o = 0), g = null; null !== h && v < l.length; v++) {
                        h.index > v ? ((g = h), (h = null)) : (g = h.sibling);
                        var m = d(a, h, l[v], u);
                        if (null === m) {
                            null === h && (h = g);
                            break;
                        }
                        (e && h && null === m.alternate && t(a, h),
                            (o = i(m, o, v)),
                            null === c ? (s = m) : (c.sibling = m),
                            (c = m),
                            (h = g));
                    }
                    if (v === l.length) return (n(a, h), Bo && Io(a, v), s);
                    if (null === h) {
                        for (; v < l.length; v++)
                            null !== (h = f(a, l[v], u)) &&
                                ((o = i(h, o, v)), null === c ? (s = h) : (c.sibling = h), (c = h));
                        return (Bo && Io(a, v), s);
                    }
                    for (h = r(a, h); v < l.length; v++)
                        null !== (g = p(h, a, v, l[v], u)) &&
                            (e && null !== g.alternate && h.delete(null === g.key ? v : g.key),
                            (o = i(g, o, v)),
                            null === c ? (s = g) : (c.sibling = g),
                            (c = g));
                    return (
                        e &&
                            h.forEach(function (e) {
                                return t(a, e);
                            }),
                        Bo && Io(a, v),
                        s
                    );
                })(u, s, c, h);
            if (yt(c))
                return (function (a, o, l, u) {
                    var s = yt(l);
                    if ('function' != typeof s) throw Error(Be(150));
                    if (null == (l = s.call(l))) throw Error(Be(151));
                    for (
                        var c = (s = null), h = o, v = (o = 0), g = null, m = l.next();
                        null !== h && !m.done;
                        v++, m = l.next()
                    ) {
                        h.index > v ? ((g = h), (h = null)) : (g = h.sibling);
                        var y = d(a, h, m.value, u);
                        if (null === y) {
                            null === h && (h = g);
                            break;
                        }
                        (e && h && null === y.alternate && t(a, h),
                            (o = i(y, o, v)),
                            null === c ? (s = y) : (c.sibling = y),
                            (c = y),
                            (h = g));
                    }
                    if (m.done) return (n(a, h), Bo && Io(a, v), s);
                    if (null === h) {
                        for (; !m.done; v++, m = l.next())
                            null !== (m = f(a, m.value, u)) &&
                                ((o = i(m, o, v)), null === c ? (s = m) : (c.sibling = m), (c = m));
                        return (Bo && Io(a, v), s);
                    }
                    for (h = r(a, h); !m.done; v++, m = l.next())
                        null !== (m = p(h, a, v, m.value, u)) &&
                            (e && null !== m.alternate && h.delete(null === m.key ? v : m.key),
                            (o = i(m, o, v)),
                            null === c ? (s = m) : (c.sibling = m),
                            (c = m));
                    return (
                        e &&
                            h.forEach(function (e) {
                                return t(a, e);
                            }),
                        Bo && Io(a, v),
                        s
                    );
                })(u, s, c, h);
            tl(u, c);
        }
        return ('string' == typeof c && '' !== c) || 'number' == typeof c
            ? ((c = '' + c),
              null !== s && 6 === s.tag
                  ? (n(u, s.sibling), ((s = a(s, c)).return = u), (u = s))
                  : (n(u, s), ((s = wf(c, u.mode, h)).return = u), (u = s)),
              o(u))
            : n(u, s);
    };
}
var al = rl(!0),
    il = rl(!1),
    ol = lo(null),
    ll = null,
    ul = null,
    sl = null;
function cl() {
    sl = ul = ll = null;
}
function fl(e) {
    var t = ol.current;
    (uo(ol), (e._currentValue = t));
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
        (sl = ul = null),
        null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (ns = !0), (e.firstContext = null)));
}
function hl(e) {
    var t = e._currentValue;
    if (sl !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), null === ul)) {
            if (null === ll) throw Error(Be(308));
            ((ul = e), (ll.dependencies = { lanes: 0, firstContext: e }));
        } else ul = ul.next = e;
    return t;
}
var vl = null;
function gl(e) {
    null === vl ? (vl = [e]) : vl.push(e);
}
function ml(e, t, n, r) {
    var a = t.interleaved;
    return (null === a ? ((n.next = n), gl(t)) : ((n.next = a.next), (a.next = n)), (t.interleaved = n), yl(e, r));
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
        var a = r.pending;
        return (null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)), (r.pending = t), yl(e, n));
    }
    return (
        null === (a = r.interleaved) ? ((t.next = t), gl(r)) : ((t.next = a.next), (a.next = t)),
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
        var a = null,
            i = null;
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
                (null === i ? (a = i = o) : (i = i.next = o), (n = n.next));
            } while (null !== n);
            null === i ? (a = i = t) : (i = i.next = t);
        } else a = i = t;
        return (
            (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
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
    var a = e.updateQueue;
    bl = !1;
    var i = a.firstBaseUpdate,
        o = a.lastBaseUpdate,
        l = a.shared.pending;
    if (null !== l) {
        a.shared.pending = null;
        var u = l,
            s = u.next;
        ((u.next = null), null === o ? (i = s) : (o.next = s), (o = u));
        var c = e.alternate;
        null !== c &&
            (l = (c = c.updateQueue).lastBaseUpdate) !== o &&
            (null === l ? (c.firstBaseUpdate = s) : (l.next = s), (c.lastBaseUpdate = u));
    }
    if (null !== i) {
        var f = a.baseState;
        for (o = 0, c = s = u = null, l = i; ; ) {
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
                    ((e.flags |= 64), null === (d = a.effects) ? (a.effects = [l]) : d.push(l));
            } else
                ((p = { eventTime: p, lane: d, tag: l.tag, payload: l.payload, callback: l.callback, next: null }),
                    null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                    (o |= d));
            if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                ((l = (d = l).next), (d.next = null), (a.lastBaseUpdate = d), (a.shared.pending = null));
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
                ((o |= a.lane), (a = a.next));
            } while (a !== t);
        } else null === i && (a.shared.lanes = 0);
        ((bc |= o), (e.lanes = o), (e.memoizedState = f));
    }
}
function Pl(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                a = r.callback;
            if (null !== a) {
                if (((r.callback = null), (r = n), 'function' != typeof a)) throw Error(Be(191, a));
                a.call(r);
            }
        }
}
var Cl = {},
    Al = lo(Cl),
    Nl = lo(Cl),
    jl = lo(Cl);
function Tl(e) {
    if (e === Cl) throw Error(Be(174));
    return e;
}
function Rl(e, t) {
    switch ((so(jl, t), so(Nl, e), so(Al, Cl), (e = t.nodeType))) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ht(null, '');
            break;
        default:
            t = Ht((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
    }
    (uo(Al), so(Al, t));
}
function Ll() {
    (uo(Al), uo(Nl), uo(jl));
}
function zl(e) {
    Tl(jl.current);
    var t = Tl(Al.current),
        n = Ht(t, e.type);
    t !== n && (so(Nl, e), so(Al, n));
}
function Il(e) {
    Nl.current === e && (uo(Al), uo(Nl));
}
var Dl = lo(0);
function Ml(e) {
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
var Ul = rt.ReactCurrentDispatcher,
    Bl = rt.ReactCurrentBatchConfig,
    $l = 0,
    Wl = null,
    Hl = null,
    Kl = null,
    ql = !1,
    Gl = !1,
    Ql = 0,
    Yl = 0;
function Xl() {
    throw Error(Be(321));
}
function Zl(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Wa(e[n], t[n])) return !1;
    return !0;
}
function Jl(e, t, n, r, a, i) {
    if (
        (($l = i),
        (Wl = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Ul.current = null === e || null === e.memoizedState ? Iu : Du),
        (e = n(r, a)),
        Gl)
    ) {
        i = 0;
        do {
            if (((Gl = !1), (Ql = 0), 25 <= i)) throw Error(Be(301));
            ((i += 1), (Kl = Hl = null), (t.updateQueue = null), (Ul.current = Mu), (e = n(r, a)));
        } while (Gl);
    }
    if (((Ul.current = zu), (t = null !== Hl && null !== Hl.next), ($l = 0), (Kl = Hl = Wl = null), (ql = !1), t))
        throw Error(Be(300));
    return e;
}
function eu() {
    var e = 0 !== Ql;
    return ((Ql = 0), e);
}
function tu() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (null === Kl ? (Wl.memoizedState = Kl = e) : (Kl = Kl.next = e), Kl);
}
function nu() {
    if (null === Hl) {
        var e = Wl.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = Hl.next;
    var t = null === Kl ? Wl.memoizedState : Kl.next;
    if (null !== t) ((Kl = t), (Hl = e));
    else {
        if (null === e) throw Error(Be(310));
        ((e = {
            memoizedState: (Hl = e).memoizedState,
            baseState: Hl.baseState,
            baseQueue: Hl.baseQueue,
            queue: Hl.queue,
            next: null,
        }),
            null === Kl ? (Wl.memoizedState = Kl = e) : (Kl = Kl.next = e));
    }
    return Kl;
}
function ru(e, t) {
    return 'function' == typeof t ? t(e) : t;
}
function au(e) {
    var t = nu(),
        n = t.queue;
    if (null === n) throw Error(Be(311));
    n.lastRenderedReducer = e;
    var r = Hl,
        a = r.baseQueue,
        i = n.pending;
    if (null !== i) {
        if (null !== a) {
            var o = a.next;
            ((a.next = i.next), (i.next = o));
        }
        ((r.baseQueue = a = i), (n.pending = null));
    }
    if (null !== a) {
        ((i = a.next), (r = r.baseState));
        var l = (o = null),
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
                var f = {
                    lane: c,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null,
                };
                (null === u ? ((l = u = f), (o = r)) : (u = u.next = f), (Wl.lanes |= c), (bc |= c));
            }
            s = s.next;
        } while (null !== s && s !== i);
        (null === u ? (o = r) : (u.next = l),
            Wa(r, t.memoizedState) || (ns = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = u),
            (n.lastRenderedState = r));
    }
    if (null !== (e = n.interleaved)) {
        a = e;
        do {
            ((i = a.lane), (Wl.lanes |= i), (bc |= i), (a = a.next));
        } while (a !== e);
    } else null === a && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function iu(e) {
    var t = nu(),
        n = t.queue;
    if (null === n) throw Error(Be(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        a = n.pending,
        i = t.memoizedState;
    if (null !== a) {
        n.pending = null;
        var o = (a = a.next);
        do {
            ((i = e(i, o.action)), (o = o.next));
        } while (o !== a);
        (Wa(i, t.memoizedState) || (ns = !0),
            (t.memoizedState = i),
            null === t.baseQueue && (t.baseState = i),
            (n.lastRenderedState = i));
    }
    return [i, r];
}
function ou() {}
function lu(e, t) {
    var n = Wl,
        r = nu(),
        a = t(),
        i = !Wa(r.memoizedState, a);
    if (
        (i && ((r.memoizedState = a), (ns = !0)),
        (r = r.queue),
        bu(cu.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (null !== Kl && 1 & Kl.memoizedState.tag))
    ) {
        if (((n.flags |= 2048), hu(9, su.bind(null, n, r, a, t), void 0, null), null === dc)) throw Error(Be(349));
        0 != (30 & $l) || uu(n, t, a);
    }
    return a;
}
function uu(e, t, n) {
    ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = Wl.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (Wl.updateQueue = t), (t.stores = [e]))
            : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e));
}
function su(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), fu(t) && du(e));
}
function cu(e, t, n) {
    return n(function () {
        fu(t) && du(e);
    });
}
function fu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Wa(e, n);
    } catch (r) {
        return !0;
    }
}
function du(e) {
    var t = yl(e, 1);
    null !== t && Vc(t, e, 1, -1);
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
        (e = e.dispatch = ju.bind(null, Wl, e)),
        [t.memoizedState, e]
    );
}
function hu(e, t, n, r) {
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
function vu() {
    return nu().memoizedState;
}
function gu(e, t, n, r) {
    var a = tu();
    ((Wl.flags |= e), (a.memoizedState = hu(1 | t, n, void 0, void 0 === r ? null : r)));
}
function mu(e, t, n, r) {
    var a = nu();
    r = void 0 === r ? null : r;
    var i = void 0;
    if (null !== Hl) {
        var o = Hl.memoizedState;
        if (((i = o.destroy), null !== r && Zl(r, o.deps))) return void (a.memoizedState = hu(t, n, i, r));
    }
    ((Wl.flags |= e), (a.memoizedState = hu(1 | t, n, i, r)));
}
function yu(e, t) {
    return gu(8390656, 8, e, t);
}
function bu(e, t) {
    return mu(2048, 8, e, t);
}
function _u(e, t) {
    return mu(4, 2, e, t);
}
function wu(e, t) {
    return mu(4, 4, e, t);
}
function ku(e, t) {
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
function Su(e, t, n) {
    return ((n = null != n ? n.concat([e]) : null), mu(4, 4, ku.bind(null, t, e), n));
}
function xu() {}
function Ou(e, t) {
    var n = nu();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Zl(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Eu(e, t) {
    var n = nu();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Zl(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Pu(e, t, n) {
    return 0 == (21 & $l)
        ? (e.baseState && ((e.baseState = !1), (ns = !0)), (e.memoizedState = n))
        : (Wa(n, t) || ((n = Jn()), (Wl.lanes |= n), (bc |= n), (e.baseState = !0)), t);
}
function Cu(e, t) {
    var n = rr;
    ((rr = 0 !== n && 4 > n ? n : 4), e(!0));
    var r = Bl.transition;
    Bl.transition = {};
    try {
        (e(!1), t());
    } finally {
        ((rr = n), (Bl.transition = r));
    }
}
function Au() {
    return nu().memoizedState;
}
function Nu(e, t, n) {
    var r = Mc(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Tu(e))) Ru(t, n);
    else if (null !== (n = ml(e, t, n, r))) {
        (Vc(n, e, r, Dc()), Lu(n, t, r));
    }
}
function ju(e, t, n) {
    var r = Mc(e),
        a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Tu(e)) Ru(t, a);
    else {
        var i = e.alternate;
        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer))
            try {
                var o = t.lastRenderedState,
                    l = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), Wa(l, o))) {
                    var u = t.interleaved;
                    return (
                        null === u ? ((a.next = a), gl(t)) : ((a.next = u.next), (u.next = a)),
                        void (t.interleaved = a)
                    );
                }
            } catch (s) {}
        null !== (n = ml(e, t, a, r)) && (Vc(n, e, r, (a = Dc())), Lu(n, t, r));
    }
}
function Tu(e) {
    var t = e.alternate;
    return e === Wl || (null !== t && t === Wl);
}
function Ru(e, t) {
    Gl = ql = !0;
    var n = e.pending;
    (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
}
function Lu(e, t, n) {
    if (0 != (4194240 & n)) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), nr(e, n));
    }
}
var zu = {
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
    Iu = {
        readContext: hl,
        useCallback: function (e, t) {
            return ((tu().memoizedState = [e, void 0 === t ? null : t]), e);
        },
        useContext: hl,
        useEffect: yu,
        useImperativeHandle: function (e, t, n) {
            return ((n = null != n ? n.concat([e]) : null), gu(4194308, 4, ku.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
            return gu(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return gu(4, 2, e, t);
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
                (e = e.dispatch = Nu.bind(null, Wl, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            return ((e = { current: e }), (tu().memoizedState = e));
        },
        useState: pu,
        useDebugValue: xu,
        useDeferredValue: function (e) {
            return (tu().memoizedState = e);
        },
        useTransition: function () {
            var e = pu(!1),
                t = e[0];
            return ((e = Cu.bind(null, e[1])), (tu().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = Wl,
                a = tu();
            if (Bo) {
                if (void 0 === n) throw Error(Be(407));
                n = n();
            } else {
                if (((n = t()), null === dc)) throw Error(Be(349));
                0 != (30 & $l) || uu(r, t, n);
            }
            a.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
                (a.queue = i),
                yu(cu.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                hu(9, su.bind(null, r, i, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = tu(),
                t = dc.identifierPrefix;
            if (Bo) {
                var n = zo;
                ((t = ':' + t + 'R' + (n = (Lo & ~(1 << (32 - Wn(Lo) - 1))).toString(32) + n)),
                    0 < (n = Ql++) && (t += 'H' + n.toString(32)),
                    (t += ':'));
            } else t = ':' + t + 'r' + (n = Yl++).toString(32) + ':';
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Du = {
        readContext: hl,
        useCallback: Ou,
        useContext: hl,
        useEffect: bu,
        useImperativeHandle: Su,
        useInsertionEffect: _u,
        useLayoutEffect: wu,
        useMemo: Eu,
        useReducer: au,
        useRef: vu,
        useState: function () {
            return au(ru);
        },
        useDebugValue: xu,
        useDeferredValue: function (e) {
            return Pu(nu(), Hl.memoizedState, e);
        },
        useTransition: function () {
            return [au(ru)[0], nu().memoizedState];
        },
        useMutableSource: ou,
        useSyncExternalStore: lu,
        useId: Au,
        unstable_isNewReconciler: !1,
    },
    Mu = {
        readContext: hl,
        useCallback: Ou,
        useContext: hl,
        useEffect: bu,
        useImperativeHandle: Su,
        useInsertionEffect: _u,
        useLayoutEffect: wu,
        useMemo: Eu,
        useReducer: iu,
        useRef: vu,
        useState: function () {
            return iu(ru);
        },
        useDebugValue: xu,
        useDeferredValue: function (e) {
            var t = nu();
            return null === Hl ? (t.memoizedState = e) : Pu(t, Hl.memoizedState, e);
        },
        useTransition: function () {
            return [iu(ru)[0], nu().memoizedState];
        },
        useMutableSource: ou,
        useSyncExternalStore: lu,
        useId: Au,
        unstable_isNewReconciler: !1,
    };
function Vu(e, t) {
    if (e && e.defaultProps) {
        for (var n in ((t = _t({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
    }
    return t;
}
function Fu(e, t, n, r) {
    ((n = null == (n = n(r, (t = e.memoizedState))) ? t : _t({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n));
}
var Uu = {
    isMounted: function (e) {
        return !!(e = e._reactInternals) && En(e) === e;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Dc(),
            a = Mc(e),
            i = kl(r, a);
        ((i.payload = t), null != n && (i.callback = n), null !== (t = Sl(e, i, a)) && (Vc(t, e, a, r), xl(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Dc(),
            a = Mc(e),
            i = kl(r, a);
        ((i.tag = 1),
            (i.payload = t),
            null != n && (i.callback = n),
            null !== (t = Sl(e, i, a)) && (Vc(t, e, a, r), xl(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Dc(),
            r = Mc(e),
            a = kl(n, r);
        ((a.tag = 2), null != t && (a.callback = t), null !== (t = Sl(e, a, r)) && (Vc(t, e, r, n), xl(t, e, r)));
    },
};
function Bu(e, t, n, r, a, i, o) {
    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, i, o)
        : !t.prototype || !t.prototype.isPureReactComponent || !Ha(n, r) || !Ha(a, i);
}
function $u(e, t, n) {
    var r = !1,
        a = co,
        i = t.contextType;
    return (
        'object' == typeof i && null !== i
            ? (i = hl(i))
            : ((a = go(t) ? ho : fo.current), (i = (r = null != (r = t.contextTypes)) ? vo(e, a) : co)),
        (t = new t(n, i)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = Uu),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    );
}
function Wu(e, t, n, r) {
    ((e = t.state),
        'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Uu.enqueueReplaceState(t, t.state, null));
}
function Hu(e, t, n, r) {
    var a = e.stateNode;
    ((a.props = n), (a.state = e.memoizedState), (a.refs = {}), _l(e));
    var i = t.contextType;
    ('object' == typeof i && null !== i ? (a.context = hl(i)) : ((i = go(t) ? ho : fo.current), (a.context = vo(e, i))),
        (a.state = e.memoizedState),
        'function' == typeof (i = t.getDerivedStateFromProps) && (Fu(e, t, i, n), (a.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof a.getSnapshotBeforeUpdate ||
            ('function' != typeof a.UNSAFE_componentWillMount && 'function' != typeof a.componentWillMount) ||
            ((t = a.state),
            'function' == typeof a.componentWillMount && a.componentWillMount(),
            'function' == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
            t !== a.state && Uu.enqueueReplaceState(a, a.state, null),
            El(e, n, a, r),
            (a.state = e.memoizedState)),
        'function' == typeof a.componentDidMount && (e.flags |= 4194308));
}
function Ku(e, t) {
    try {
        var n = '',
            r = t;
        do {
            ((n += xt(r)), (r = r.return));
        } while (r);
        var a = n;
    } catch (i) {
        a = '\nError generating stack: ' + i.message + '\n' + i.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
}
function qu(e, t, n) {
    return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null };
}
function Gu(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Qu = 'function' == typeof WeakMap ? WeakMap : Map;
function Yu(e, t, n) {
    (((n = kl(-1, n)).tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
        (n.callback = function () {
            (Pc || ((Pc = !0), (Cc = r)), Gu(0, t));
        }),
        n
    );
}
function Xu(e, t, n) {
    (n = kl(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ('function' == typeof r) {
        var a = t.value;
        ((n.payload = function () {
            return r(a);
        }),
            (n.callback = function () {
                Gu(0, t);
            }));
    }
    var i = e.stateNode;
    return (
        null !== i &&
            'function' == typeof i.componentDidCatch &&
            (n.callback = function () {
                (Gu(0, t), 'function' != typeof r && (null === Ac ? (Ac = new Set([this])) : Ac.add(this)));
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
        var a = new Set();
        r.set(t, a);
    } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
    a.has(n) || (a.add(n), (e = sf.bind(null, e, t, n)), t.then(e, e));
}
function Ju(e) {
    do {
        var t;
        if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e;
        e = e.return;
    } while (null !== e);
    return null;
}
function es(e, t, n, r, a) {
    return 0 == (1 & e.mode)
        ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                1 === n.tag && (null === n.alternate ? (n.tag = 17) : (((t = kl(-1, 1)).tag = 2), Sl(n, t, 1))),
                (n.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = a), e);
}
var ts = rt.ReactCurrentOwner,
    ns = !1;
function rs(e, t, n, r) {
    t.child = null === e ? il(t, null, n, r) : al(t, e.child, n, r);
}
function as(e, t, n, r, a) {
    n = n.render;
    var i = t.ref;
    return (
        pl(t, a),
        (r = Jl(e, t, n, r, i, a)),
        (n = eu()),
        null === e || ns
            ? (Bo && n && Mo(t), (t.flags |= 1), rs(e, t, r, a), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Ps(e, t, a))
    );
}
function is(e, t, n, r, a) {
    if (null === e) {
        var i = n.type;
        return 'function' != typeof i ||
            gf(i) ||
            void 0 !== i.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = yf(n.type, null, r, t, t.mode, a)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = i), os(e, t, i, r, a));
    }
    if (((i = e.child), 0 == (e.lanes & a))) {
        var o = i.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : Ha)(o, r) && e.ref === t.ref) return Ps(e, t, a);
    }
    return ((t.flags |= 1), ((e = mf(i, r)).ref = t.ref), (e.return = t), (t.child = e));
}
function os(e, t, n, r, a) {
    if (null !== e) {
        var i = e.memoizedProps;
        if (Ha(i, r) && e.ref === t.ref) {
            if (((ns = !1), (t.pendingProps = r = i), 0 == (e.lanes & a))) return ((t.lanes = e.lanes), Ps(e, t, a));
            0 != (131072 & e.flags) && (ns = !0);
        }
    }
    return ss(e, t, n, r, a);
}
function ls(e, t, n) {
    var r = t.pendingProps,
        a = r.children,
        i = null !== e ? e.memoizedState : null;
    if ('hidden' === r.mode)
        if (0 == (1 & t.mode))
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), so(gc, vc), (vc |= n));
        else {
            if (0 == (1073741824 & n))
                return (
                    (e = null !== i ? i.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    so(gc, vc),
                    (vc |= e),
                    null
                );
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== i ? i.baseLanes : n),
                so(gc, vc),
                (vc |= r));
        }
    else (null !== i ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), so(gc, vc), (vc |= r));
    return (rs(e, t, a, n), t.child);
}
function us(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function ss(e, t, n, r, a) {
    var i = go(n) ? ho : fo.current;
    return (
        (i = vo(t, i)),
        pl(t, a),
        (n = Jl(e, t, n, r, i, a)),
        (r = eu()),
        null === e || ns
            ? (Bo && r && Mo(t), (t.flags |= 1), rs(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Ps(e, t, a))
    );
}
function cs(e, t, n, r, a) {
    if (go(n)) {
        var i = !0;
        _o(t);
    } else i = !1;
    if ((pl(t, a), null === t.stateNode)) (Es(e, t), $u(t, n, r), Hu(t, n, r, a), (r = !0));
    else if (null === e) {
        var o = t.stateNode,
            l = t.memoizedProps;
        o.props = l;
        var u = o.context,
            s = n.contextType;
        'object' == typeof s && null !== s ? (s = hl(s)) : (s = vo(t, (s = go(n) ? ho : fo.current)));
        var c = n.getDerivedStateFromProps,
            f = 'function' == typeof c || 'function' == typeof o.getSnapshotBeforeUpdate;
        (f ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((l !== r || u !== s) && Wu(t, o, r, s)),
            (bl = !1));
        var d = t.memoizedState;
        ((o.state = d),
            El(t, r, o, a),
            (u = t.memoizedState),
            l !== r || d !== u || po.current || bl
                ? ('function' == typeof c && (Fu(t, n, c, r), (u = t.memoizedState)),
                  (l = bl || Bu(t, n, l, r, d, u, s))
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
                  (r = l))
                : ('function' == typeof o.componentDidMount && (t.flags |= 4194308), (r = !1)));
    } else {
        ((o = t.stateNode),
            wl(e, t),
            (l = t.memoizedProps),
            (s = t.type === t.elementType ? l : Vu(t.type, l)),
            (o.props = s),
            (f = t.pendingProps),
            (d = o.context),
            'object' == typeof (u = n.contextType) && null !== u
                ? (u = hl(u))
                : (u = vo(t, (u = go(n) ? ho : fo.current))));
        var p = n.getDerivedStateFromProps;
        ((c = 'function' == typeof p || 'function' == typeof o.getSnapshotBeforeUpdate) ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((l !== f || d !== u) && Wu(t, o, r, u)),
            (bl = !1),
            (d = t.memoizedState),
            (o.state = d),
            El(t, r, o, a));
        var h = t.memoizedState;
        l !== f || d !== h || po.current || bl
            ? ('function' == typeof p && (Fu(t, n, p, r), (h = t.memoizedState)),
              (s = bl || Bu(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                        ('function' != typeof o.UNSAFE_componentWillUpdate &&
                            'function' != typeof o.componentWillUpdate) ||
                        ('function' == typeof o.componentWillUpdate && o.componentWillUpdate(r, h, u),
                        'function' == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, h, u)),
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
              (o.context = u),
              (r = s))
            : ('function' != typeof o.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
              'function' != typeof o.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return fs(e, t, n, r, i, a);
}
function fs(e, t, n, r, a, i) {
    us(e, t);
    var o = 0 != (128 & t.flags);
    if (!r && !o) return (a && wo(t, n, !1), Ps(e, t, i));
    ((r = t.stateNode), (ts.current = t));
    var l = o && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
    return (
        (t.flags |= 1),
        null !== e && o ? ((t.child = al(t, e.child, null, i)), (t.child = al(t, null, l, i))) : rs(e, t, l, i),
        (t.memoizedState = r.state),
        a && wo(t, n, !0),
        t.child
    );
}
function ds(e) {
    var t = e.stateNode;
    (t.pendingContext ? yo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && yo(0, t.context, !1),
        Rl(e, t.containerInfo));
}
function ps(e, t, n, r, a) {
    return (Xo(), Zo(a), (t.flags |= 256), rs(e, t, n, r), t.child);
}
var hs,
    vs,
    gs,
    ms,
    ys = { dehydrated: null, treeContext: null, retryLane: 0 };
function bs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function _s(e, t, n) {
    var r,
        a = t.pendingProps,
        i = Dl.current,
        o = !1,
        l = 0 != (128 & t.flags);
    if (
        ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
        r ? ((o = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (i |= 1),
        so(Dl, 1 & i),
        null === e)
    )
        return (
            qo(t),
            null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 == (1 & t.mode) ? (t.lanes = 1) : '$!' === e.data ? (t.lanes = 8) : (t.lanes = 1073741824), null)
                : ((l = a.children),
                  (e = a.fallback),
                  o
                      ? ((a = t.mode),
                        (o = t.child),
                        (l = { mode: 'hidden', children: l }),
                        0 == (1 & a) && null !== o
                            ? ((o.childLanes = 0), (o.pendingProps = l))
                            : (o = _f(l, a, 0, null)),
                        (e = bf(e, a, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = bs(n)),
                        (t.memoizedState = ys),
                        e)
                      : ws(t, l))
        );
    if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
        return (function (e, t, n, r, a, i, o) {
            if (n)
                return 256 & t.flags
                    ? ((t.flags &= -257), ks(e, t, o, (r = qu(Error(Be(422))))))
                    : null !== t.memoizedState
                      ? ((t.child = e.child), (t.flags |= 128), null)
                      : ((i = r.fallback),
                        (a = t.mode),
                        (r = _f({ mode: 'visible', children: r.children }, a, 0, null)),
                        ((i = bf(i, a, o, null)).flags |= 2),
                        (r.return = t),
                        (i.return = t),
                        (r.sibling = i),
                        (t.child = r),
                        0 != (1 & t.mode) && al(t, e.child, null, o),
                        (t.child.memoizedState = bs(o)),
                        (t.memoizedState = ys),
                        i);
            if (0 == (1 & t.mode)) return ks(e, t, o, null);
            if ('$!' === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset)) var l = r.dgst;
                return ((r = l), ks(e, t, o, (r = qu((i = Error(Be(419))), r, void 0))));
            }
            if (((l = 0 != (o & e.childLanes)), ns || l)) {
                if (null !== (r = dc)) {
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
                        a !== i.retryLane &&
                        ((i.retryLane = a), yl(e, a), Vc(r, e, a, -1));
                }
                return (Zc(), ks(e, t, o, (r = qu(Error(Be(421))))));
            }
            return '$?' === a.data
                ? ((t.flags |= 128), (t.child = e.child), (t = ff.bind(null, e)), (a._reactRetry = t), null)
                : ((e = i.treeContext),
                  (Uo = Ki(a.nextSibling)),
                  (Fo = t),
                  (Bo = !0),
                  ($o = null),
                  null !== e &&
                      ((jo[To++] = Lo), (jo[To++] = zo), (jo[To++] = Ro), (Lo = e.id), (zo = e.overflow), (Ro = t)),
                  (t = ws(t, r.children)),
                  (t.flags |= 4096),
                  t);
        })(e, t, l, a, r, i, n);
    if (o) {
        ((o = a.fallback), (l = t.mode), (r = (i = e.child).sibling));
        var u = { mode: 'hidden', children: a.children };
        return (
            0 == (1 & l) && t.child !== i
                ? (((a = t.child).childLanes = 0), (a.pendingProps = u), (t.deletions = null))
                : ((a = mf(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
            null !== r ? (o = mf(r, o)) : ((o = bf(o, l, n, null)).flags |= 2),
            (o.return = t),
            (a.return = t),
            (a.sibling = o),
            (t.child = a),
            (a = o),
            (o = t.child),
            (l =
                null === (l = e.child.memoizedState)
                    ? bs(n)
                    : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
            (o.memoizedState = l),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = ys),
            a
        );
    }
    return (
        (e = (o = e.child).sibling),
        (a = mf(o, { mode: 'visible', children: a.children })),
        0 == (1 & t.mode) && (a.lanes = n),
        (a.return = t),
        (a.sibling = null),
        null !== e && (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a
    );
}
function ws(e, t) {
    return (((t = _f({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t));
}
function ks(e, t, n, r) {
    return (
        null !== r && Zo(r),
        al(t, e.child, null, n),
        ((e = ws(t, t.pendingProps.children)).flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function Ss(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (null !== r && (r.lanes |= t), dl(e.return, t, n));
}
function xs(e, t, n, r, a) {
    var i = e.memoizedState;
    null === i
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a })
        : ((i.isBackwards = t),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = r),
          (i.tail = n),
          (i.tailMode = a));
}
function Os(e, t, n) {
    var r = t.pendingProps,
        a = r.revealOrder,
        i = r.tail;
    if ((rs(e, t, r.children, n), 0 != (2 & (r = Dl.current)))) ((r = (1 & r) | 2), (t.flags |= 128));
    else {
        if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ss(e, n, t);
                else if (19 === e.tag) Ss(e, n, t);
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
    if ((so(Dl, r), 0 == (1 & t.mode))) t.memoizedState = null;
    else
        switch (a) {
            case 'forwards':
                for (n = t.child, a = null; null !== n; )
                    (null !== (e = n.alternate) && null === Ml(e) && (a = n), (n = n.sibling));
                (null === (n = a) ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)),
                    xs(t, !1, a, n, i));
                break;
            case 'backwards':
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                    if (null !== (e = a.alternate) && null === Ml(e)) {
                        t.child = a;
                        break;
                    }
                    ((e = a.sibling), (a.sibling = n), (n = a), (a = e));
                }
                xs(t, !0, n, null, i);
                break;
            case 'together':
                xs(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Es(e, t) {
    0 == (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ps(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (bc |= t.lanes), 0 == (n & t.childLanes))) return null;
    if (null !== e && t.child !== e.child) throw Error(Be(153));
    if (null !== t.child) {
        for (n = mf((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            ((e = e.sibling), ((n = n.sibling = mf(e, e.pendingProps)).return = t));
        n.sibling = null;
    }
    return t.child;
}
function Cs(e, t) {
    if (!Bo)
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
function As(e) {
    var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var a = e.child; null !== a; )
            ((n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling));
    else
        for (a = e.child; null !== a; )
            ((n |= a.lanes | a.childLanes), (r |= a.subtreeFlags), (r |= a.flags), (a.return = e), (a = a.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Ns(e, t, n) {
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
            return (As(t), null);
        case 1:
        case 17:
            return (go(t.type) && mo(), As(t), null);
        case 3:
            return (
                (r = t.stateNode),
                Ll(),
                uo(po),
                uo(fo),
                Fl(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                    (Qo(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                          ((t.flags |= 1024), null !== $o && ($c($o), ($o = null)))),
                vs(e, t),
                As(t),
                null
            );
        case 5:
            Il(t);
            var a = Tl(jl.current);
            if (((n = t.type), null !== e && null != t.stateNode))
                (gs(e, t, n, r, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(Be(166));
                    return (As(t), null);
                }
                if (((e = Tl(Al.current)), Qo(t))) {
                    ((r = t.stateNode), (n = t.type));
                    var i = t.memoizedProps;
                    switch (((r[Qi] = t), (r[Yi] = i), (e = 0 != (1 & t.mode)), n)) {
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
                            for (a = 0; a < yi.length; a++) ki(yi[a], r);
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
                            (Rt(r, i), ki('invalid', r));
                            break;
                        case 'select':
                            ((r._wrapperState = { wasMultiple: !!i.multiple }), ki('invalid', r));
                            break;
                        case 'textarea':
                            (Ut(r, i), ki('invalid', r));
                    }
                    for (var o in (tn(n, i), (a = null), i))
                        if (i.hasOwnProperty(o)) {
                            var l = i[o];
                            'children' === o
                                ? 'string' == typeof l
                                    ? r.textContent !== l &&
                                      (!0 !== i.suppressHydrationWarning && zi(r.textContent, l, e),
                                      (a = ['children', l]))
                                    : 'number' == typeof l &&
                                      r.textContent !== '' + l &&
                                      (!0 !== i.suppressHydrationWarning && zi(r.textContent, l, e),
                                      (a = ['children', '' + l]))
                                : We.hasOwnProperty(o) && null != l && 'onScroll' === o && ki('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            (At(r), It(r, i, !0));
                            break;
                        case 'textarea':
                            (At(r), $t(r));
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            'function' == typeof i.onClick && (r.onclick = Ii);
                    }
                    ((r = a), (t.updateQueue = r), null !== r && (t.flags |= 4));
                } else {
                    ((o = 9 === a.nodeType ? a : a.ownerDocument),
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
                        (e[Qi] = t),
                        (e[Yi] = r),
                        hs(e, t, !1, !1),
                        (t.stateNode = e));
                    e: {
                        switch (((o = nn(n, r)), n)) {
                            case 'dialog':
                                (ki('cancel', e), ki('close', e), (a = r));
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                (ki('load', e), (a = r));
                                break;
                            case 'video':
                            case 'audio':
                                for (a = 0; a < yi.length; a++) ki(yi[a], e);
                                a = r;
                                break;
                            case 'source':
                                (ki('error', e), (a = r));
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                (ki('error', e), ki('load', e), (a = r));
                                break;
                            case 'details':
                                (ki('toggle', e), (a = r));
                                break;
                            case 'input':
                                (Rt(e, r), (a = Tt(e, r)), ki('invalid', e));
                                break;
                            case 'option':
                            default:
                                a = r;
                                break;
                            case 'select':
                                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (a = _t({}, r, { value: void 0 })),
                                    ki('invalid', e));
                                break;
                            case 'textarea':
                                (Ut(e, r), (a = Ft(e, r)), ki('invalid', e));
                        }
                        for (i in (tn(n, a), (l = a)))
                            if (l.hasOwnProperty(i)) {
                                var u = l[i];
                                'style' === i
                                    ? Jt(e, u)
                                    : 'dangerouslySetInnerHTML' === i
                                      ? null != (u = u ? u.__html : void 0) && Gt(e, u)
                                      : 'children' === i
                                        ? 'string' == typeof u
                                            ? ('textarea' !== n || '' !== u) && Qt(e, u)
                                            : 'number' == typeof u && Qt(e, '' + u)
                                        : 'suppressContentEditableWarning' !== i &&
                                          'suppressHydrationWarning' !== i &&
                                          'autoFocus' !== i &&
                                          (We.hasOwnProperty(i)
                                              ? null != u && 'onScroll' === i && ki('scroll', e)
                                              : null != u && nt(e, i, u, o));
                            }
                        switch (n) {
                            case 'input':
                                (At(e), It(e, r, !1));
                                break;
                            case 'textarea':
                                (At(e), $t(e));
                                break;
                            case 'option':
                                null != r.value && e.setAttribute('value', '' + Pt(r.value));
                                break;
                            case 'select':
                                ((e.multiple = !!r.multiple),
                                    null != (i = r.value)
                                        ? Vt(e, !!r.multiple, i, !1)
                                        : null != r.defaultValue && Vt(e, !!r.multiple, r.defaultValue, !0));
                                break;
                            default:
                                'function' == typeof a.onClick && (e.onclick = Ii);
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
            return (As(t), null);
        case 6:
            if (e && null != t.stateNode) ms(e, t, e.memoizedProps, r);
            else {
                if ('string' != typeof r && null === t.stateNode) throw Error(Be(166));
                if (((n = Tl(jl.current)), Tl(Al.current), Qo(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Qi] = t),
                        (i = r.nodeValue !== n) && null !== (e = Fo))
                    )
                        switch (e.tag) {
                            case 3:
                                zi(r.nodeValue, n, 0 != (1 & e.mode));
                                break;
                            case 5:
                                !0 !== e.memoizedProps.suppressHydrationWarning &&
                                    zi(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                    i && (t.flags |= 4);
                } else (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Qi] = t), (t.stateNode = r));
            }
            return (As(t), null);
        case 13:
            if (
                (uo(Dl),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (Bo && null !== Uo && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                    (Yo(), Xo(), (t.flags |= 98560), (i = !1));
                else if (((i = Qo(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!i) throw Error(Be(318));
                        if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(Be(317));
                        i[Qi] = t;
                    } else (Xo(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                    (As(t), (i = !1));
                } else (null !== $o && ($c($o), ($o = null)), (i = !0));
                if (!i) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) && (null === e || 0 != (1 & Dl.current) ? 0 === mc && (mc = 3) : Zc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  As(t),
                  null);
        case 4:
            return (Ll(), vs(e, t), null === e && Oi(t.stateNode.containerInfo), As(t), null);
        case 10:
            return (fl(t.type._context), As(t), null);
        case 19:
            if ((uo(Dl), null === (i = t.memoizedState))) return (As(t), null);
            if (((r = 0 != (128 & t.flags)), null === (o = i.rendering)))
                if (r) Cs(i, !1);
                else {
                    if (0 !== mc || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (o = Ml(e))) {
                                for (
                                    t.flags |= 128,
                                        Cs(i, !1),
                                        null !== (r = o.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    null !== n;
                                )
                                    ((e = r),
                                        ((i = n).flags &= 14680066),
                                        null === (o = i.alternate)
                                            ? ((i.childLanes = 0),
                                              (i.lanes = e),
                                              (i.child = null),
                                              (i.subtreeFlags = 0),
                                              (i.memoizedProps = null),
                                              (i.memoizedState = null),
                                              (i.updateQueue = null),
                                              (i.dependencies = null),
                                              (i.stateNode = null))
                                            : ((i.childLanes = o.childLanes),
                                              (i.lanes = o.lanes),
                                              (i.child = o.child),
                                              (i.subtreeFlags = 0),
                                              (i.deletions = null),
                                              (i.memoizedProps = o.memoizedProps),
                                              (i.memoizedState = o.memoizedState),
                                              (i.updateQueue = o.updateQueue),
                                              (i.type = o.type),
                                              (e = o.dependencies),
                                              (i.dependencies =
                                                  null === e
                                                      ? null
                                                      : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling));
                                return (so(Dl, (1 & Dl.current) | 2), t.child);
                            }
                            e = e.sibling;
                        }
                    null !== i.tail && zn() > Oc && ((t.flags |= 128), (r = !0), Cs(i, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = Ml(o))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            Cs(i, !0),
                            null === i.tail && 'hidden' === i.tailMode && !o.alternate && !Bo)
                        )
                            return (As(t), null);
                    } else
                        2 * zn() - i.renderingStartTime > Oc &&
                            1073741824 !== n &&
                            ((t.flags |= 128), (r = !0), Cs(i, !1), (t.lanes = 4194304));
                i.isBackwards
                    ? ((o.sibling = t.child), (t.child = o))
                    : (null !== (n = i.last) ? (n.sibling = o) : (t.child = o), (i.last = o));
            }
            return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = zn()),
                  (t.sibling = null),
                  (n = Dl.current),
                  so(Dl, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (As(t), null);
        case 22:
        case 23:
            return (
                Gc(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 != (1 & t.mode)
                    ? 0 != (1073741824 & vc) && (As(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                    : As(t),
                null
            );
        case 24:
        case 25:
            return null;
    }
    throw Error(Be(156, t.tag));
}
function js(e, t) {
    switch ((Vo(t), t.tag)) {
        case 1:
            return (go(t.type) && mo(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null);
        case 3:
            return (
                Ll(),
                uo(po),
                uo(fo),
                Fl(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 5:
            return (Il(t), null);
        case 13:
            if ((uo(Dl), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(Be(340));
                Xo();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return (uo(Dl), null);
        case 4:
            return (Ll(), null);
        case 10:
            return (fl(t.type._context), null);
        case 22:
        case 23:
            return (Gc(), null);
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
    (vs = function () {}),
    (gs = function (e, t, n, r) {
        var a = e.memoizedProps;
        if (a !== r) {
            ((e = t.stateNode), Tl(Al.current));
            var i,
                o = null;
            switch (n) {
                case 'input':
                    ((a = Tt(e, a)), (r = Tt(e, r)), (o = []));
                    break;
                case 'select':
                    ((a = _t({}, a, { value: void 0 })), (r = _t({}, r, { value: void 0 })), (o = []));
                    break;
                case 'textarea':
                    ((a = Ft(e, a)), (r = Ft(e, r)), (o = []));
                    break;
                default:
                    'function' != typeof a.onClick && 'function' == typeof r.onClick && (e.onclick = Ii);
            }
            for (s in (tn(n, r), (n = null), a))
                if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s])
                    if ('style' === s) {
                        var l = a[s];
                        for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
                    } else
                        'dangerouslySetInnerHTML' !== s &&
                            'children' !== s &&
                            'suppressContentEditableWarning' !== s &&
                            'suppressHydrationWarning' !== s &&
                            'autoFocus' !== s &&
                            (We.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
            for (s in r) {
                var u = r[s];
                if (((l = null != a ? a[s] : void 0), r.hasOwnProperty(s) && u !== l && (null != u || null != l)))
                    if ('style' === s)
                        if (l) {
                            for (i in l)
                                !l.hasOwnProperty(i) || (u && u.hasOwnProperty(i)) || (n || (n = {}), (n[i] = ''));
                            for (i in u) u.hasOwnProperty(i) && l[i] !== u[i] && (n || (n = {}), (n[i] = u[i]));
                        } else (n || (o || (o = []), o.push(s, n)), (n = u));
                    else
                        'dangerouslySetInnerHTML' === s
                            ? ((u = u ? u.__html : void 0),
                              (l = l ? l.__html : void 0),
                              null != u && l !== u && (o = o || []).push(s, u))
                            : 'children' === s
                              ? ('string' != typeof u && 'number' != typeof u) || (o = o || []).push(s, '' + u)
                              : 'suppressContentEditableWarning' !== s &&
                                'suppressHydrationWarning' !== s &&
                                (We.hasOwnProperty(s)
                                    ? (null != u && 'onScroll' === s && ki('scroll', e), o || l === u || (o = []))
                                    : (o = o || []).push(s, u));
            }
            n && (o = o || []).push('style', n);
            var s = o;
            (t.updateQueue = s) && (t.flags |= 4);
        }
    }),
    (ms = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
    }));
var Ts = !1,
    Rs = !1,
    Ls = 'function' == typeof WeakSet ? WeakSet : Set,
    zs = null;
function Is(e, t) {
    var n = e.ref;
    if (null !== n)
        if ('function' == typeof n)
            try {
                n(null);
            } catch (r) {
                uf(e, t, r);
            }
        else n.current = null;
}
function Ds(e, t, n) {
    try {
        n();
    } catch (r) {
        uf(e, t, r);
    }
}
var Ms = !1;
function Vs(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var a = (r = r.next);
        do {
            if ((a.tag & e) === e) {
                var i = a.destroy;
                ((a.destroy = void 0), void 0 !== i && Ds(t, n, i));
            }
            a = a.next;
        } while (a !== r);
    }
}
function Fs(e, t) {
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
function Us(e) {
    var t = e.ref;
    if (null !== t) {
        var n = e.stateNode;
        (e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e));
    }
}
function Bs(e) {
    var t = e.alternate;
    (null !== t && ((e.alternate = null), Bs(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[Qi], delete t[Yi], delete t[Zi], delete t[Ji], delete t[eo]),
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
function Ws(e) {
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
function Hs(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
        ((e = e.stateNode),
            t
                ? 8 === n.nodeType
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Ii)));
    else if (4 !== r && null !== (e = e.child))
        for (Hs(e, t, n), e = e.sibling; null !== e; ) (Hs(e, t, n), (e = e.sibling));
}
function Ks(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (4 !== r && null !== (e = e.child))
        for (Ks(e, t, n), e = e.sibling; null !== e; ) (Ks(e, t, n), (e = e.sibling));
}
var qs = null,
    Gs = !1;
function Qs(e, t, n) {
    for (n = n.child; null !== n; ) (Ys(e, t, n), (n = n.sibling));
}
function Ys(e, t, n) {
    if ($n && 'function' == typeof $n.onCommitFiberUnmount)
        try {
            $n.onCommitFiberUnmount(Bn, n);
        } catch (l) {}
    switch (n.tag) {
        case 5:
            Rs || Is(n, t);
        case 6:
            var r = qs,
                a = Gs;
            ((qs = null),
                Qs(e, t, n),
                (Gs = a),
                null !== (qs = r) &&
                    (Gs
                        ? ((e = qs),
                          (n = n.stateNode),
                          8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : qs.removeChild(n.stateNode)));
            break;
        case 18:
            null !== qs &&
                (Gs
                    ? ((e = qs),
                      (n = n.stateNode),
                      8 === e.nodeType ? Hi(e.parentNode, n) : 1 === e.nodeType && Hi(e, n),
                      Er(e))
                    : Hi(qs, n.stateNode));
            break;
        case 4:
            ((r = qs), (a = Gs), (qs = n.stateNode.containerInfo), (Gs = !0), Qs(e, t, n), (qs = r), (Gs = a));
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Rs && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                a = r = r.next;
                do {
                    var i = a,
                        o = i.destroy;
                    ((i = i.tag), void 0 !== o && (0 != (2 & i) || 0 != (4 & i)) && Ds(n, t, o), (a = a.next));
                } while (a !== r);
            }
            Qs(e, t, n);
            break;
        case 1:
            if (!Rs && (Is(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount))
                try {
                    ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
                } catch (l) {
                    uf(n, t, l);
                }
            Qs(e, t, n);
            break;
        case 21:
            Qs(e, t, n);
            break;
        case 22:
            1 & n.mode ? ((Rs = (r = Rs) || null !== n.memoizedState), Qs(e, t, n), (Rs = r)) : Qs(e, t, n);
            break;
        default:
            Qs(e, t, n);
    }
}
function Xs(e) {
    var t = e.updateQueue;
    if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        (null === n && (n = e.stateNode = new Ls()),
            t.forEach(function (t) {
                var r = df.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
            }));
    }
}
function Zs(e, t) {
    var n = t.deletions;
    if (null !== n)
        for (var r = 0; r < n.length; r++) {
            var a = n[r];
            try {
                var i = e,
                    o = t,
                    l = o;
                e: for (; null !== l; ) {
                    switch (l.tag) {
                        case 5:
                            ((qs = l.stateNode), (Gs = !1));
                            break e;
                        case 3:
                        case 4:
                            ((qs = l.stateNode.containerInfo), (Gs = !0));
                            break e;
                    }
                    l = l.return;
                }
                if (null === qs) throw Error(Be(160));
                (Ys(i, o, a), (qs = null), (Gs = !1));
                var u = a.alternate;
                (null !== u && (u.return = null), (a.return = null));
            } catch (s) {
                uf(a, t, s);
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
                    (Vs(3, e, e.return), Fs(3, e));
                } catch (v) {
                    uf(e, e.return, v);
                }
                try {
                    Vs(5, e, e.return);
                } catch (v) {
                    uf(e, e.return, v);
                }
            }
            break;
        case 1:
            (Zs(t, e), ec(e), 512 & r && null !== n && Is(n, n.return));
            break;
        case 5:
            if ((Zs(t, e), ec(e), 512 & r && null !== n && Is(n, n.return), 32 & e.flags)) {
                var a = e.stateNode;
                try {
                    Qt(a, '');
                } catch (v) {
                    uf(e, e.return, v);
                }
            }
            if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                    o = null !== n ? n.memoizedProps : i,
                    l = e.type,
                    u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                    try {
                        ('input' === l && 'radio' === i.type && null != i.name && Lt(a, i), nn(l, o));
                        var s = nn(l, i);
                        for (o = 0; o < u.length; o += 2) {
                            var c = u[o],
                                f = u[o + 1];
                            'style' === c
                                ? Jt(a, f)
                                : 'dangerouslySetInnerHTML' === c
                                  ? Gt(a, f)
                                  : 'children' === c
                                    ? Qt(a, f)
                                    : nt(a, c, f, s);
                        }
                        switch (l) {
                            case 'input':
                                zt(a, i);
                                break;
                            case 'textarea':
                                Bt(a, i);
                                break;
                            case 'select':
                                var d = a._wrapperState.wasMultiple;
                                a._wrapperState.wasMultiple = !!i.multiple;
                                var p = i.value;
                                null != p
                                    ? Vt(a, !!i.multiple, p, !1)
                                    : d !== !!i.multiple &&
                                      (null != i.defaultValue
                                          ? Vt(a, !!i.multiple, i.defaultValue, !0)
                                          : Vt(a, !!i.multiple, i.multiple ? [] : '', !1));
                        }
                        a[Yi] = i;
                    } catch (v) {
                        uf(e, e.return, v);
                    }
            }
            break;
        case 6:
            if ((Zs(t, e), ec(e), 4 & r)) {
                if (null === e.stateNode) throw Error(Be(162));
                ((a = e.stateNode), (i = e.memoizedProps));
                try {
                    a.nodeValue = i;
                } catch (v) {
                    uf(e, e.return, v);
                }
            }
            break;
        case 3:
            if ((Zs(t, e), ec(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                    Er(t.containerInfo);
                } catch (v) {
                    uf(e, e.return, v);
                }
            break;
        case 4:
        default:
            (Zs(t, e), ec(e));
            break;
        case 13:
            (Zs(t, e),
                ec(e),
                8192 & (a = e.child).flags &&
                    ((i = null !== a.memoizedState),
                    (a.stateNode.isHidden = i),
                    !i || (null !== a.alternate && null !== a.alternate.memoizedState) || (xc = zn())),
                4 & r && Xs(e));
            break;
        case 22:
            if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Rs = (s = Rs) || c), Zs(t, e), (Rs = s)) : Zs(t, e),
                ec(e),
                8192 & r)
            ) {
                if (((s = null !== e.memoizedState), (e.stateNode.isHidden = s) && !c && 0 != (1 & e.mode)))
                    for (zs = e, c = e.child; null !== c; ) {
                        for (f = zs = c; null !== zs; ) {
                            switch (((p = (d = zs).child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Vs(4, d, d.return);
                                    break;
                                case 1:
                                    Is(d, d.return);
                                    var h = d.stateNode;
                                    if ('function' == typeof h.componentWillUnmount) {
                                        ((r = d), (n = d.return));
                                        try {
                                            ((t = r),
                                                (h.props = t.memoizedProps),
                                                (h.state = t.memoizedState),
                                                h.componentWillUnmount());
                                        } catch (v) {
                                            uf(r, n, v);
                                        }
                                    }
                                    break;
                                case 5:
                                    Is(d, d.return);
                                    break;
                                case 22:
                                    if (null !== d.memoizedState) {
                                        ac(f);
                                        continue;
                                    }
                            }
                            null !== p ? ((p.return = d), (zs = p)) : ac(f);
                        }
                        c = c.sibling;
                    }
                e: for (c = null, f = e; ; ) {
                    if (5 === f.tag) {
                        if (null === c) {
                            c = f;
                            try {
                                ((a = f.stateNode),
                                    s
                                        ? 'function' == typeof (i = a.style).setProperty
                                            ? i.setProperty('display', 'none', 'important')
                                            : (i.display = 'none')
                                        : ((l = f.stateNode),
                                          (o =
                                              null != (u = f.memoizedProps.style) && u.hasOwnProperty('display')
                                                  ? u.display
                                                  : null),
                                          (l.style.display = Zt('display', o))));
                            } catch (v) {
                                uf(e, e.return, v);
                            }
                        }
                    } else if (6 === f.tag) {
                        if (null === c)
                            try {
                                f.stateNode.nodeValue = s ? '' : f.memoizedProps;
                            } catch (v) {
                                uf(e, e.return, v);
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
            (Zs(t, e), ec(e), 4 & r && Xs(e));
        case 21:
    }
}
function ec(e) {
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
                throw Error(Be(160));
            }
            switch (r.tag) {
                case 5:
                    var a = r.stateNode;
                    (32 & r.flags && (Qt(a, ''), (r.flags &= -33)), Ks(e, Ws(e), a));
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo;
                    Hs(e, Ws(e), i);
                    break;
                default:
                    throw Error(Be(161));
            }
        } catch (o) {
            uf(e, e.return, o);
        }
        e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
}
function tc(e, t, n) {
    ((zs = e), nc(e));
}
function nc(e, t, n) {
    for (var r = 0 != (1 & e.mode); null !== zs; ) {
        var a = zs,
            i = a.child;
        if (22 === a.tag && r) {
            var o = null !== a.memoizedState || Ts;
            if (!o) {
                var l = a.alternate,
                    u = (null !== l && null !== l.memoizedState) || Rs;
                l = Ts;
                var s = Rs;
                if (((Ts = o), (Rs = u) && !s))
                    for (zs = a; null !== zs; )
                        ((u = (o = zs).child),
                            22 === o.tag && null !== o.memoizedState
                                ? ic(a)
                                : null !== u
                                  ? ((u.return = o), (zs = u))
                                  : ic(a));
                for (; null !== i; ) ((zs = i), nc(i), (i = i.sibling));
                ((zs = a), (Ts = l), (Rs = s));
            }
            rc(e);
        } else 0 != (8772 & a.subtreeFlags) && null !== i ? ((i.return = a), (zs = i)) : rc(e);
    }
}
function rc(e) {
    for (; null !== zs; ) {
        var t = zs;
        if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
                if (0 != (8772 & t.flags))
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Rs || Fs(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (4 & t.flags && !Rs)
                                if (null === n) r.componentDidMount();
                                else {
                                    var a = t.elementType === t.type ? n.memoizedProps : Vu(t.type, n.memoizedProps);
                                    r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var i = t.updateQueue;
                            null !== i && Pl(t, i, r);
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
                                        null !== f && Er(f);
                                    }
                                }
                            }
                            break;
                        default:
                            throw Error(Be(163));
                    }
                Rs || (512 & t.flags && Us(t));
            } catch (d) {
                uf(t, t.return, d);
            }
        }
        if (t === e) {
            zs = null;
            break;
        }
        if (null !== (n = t.sibling)) {
            ((n.return = t.return), (zs = n));
            break;
        }
        zs = t.return;
    }
}
function ac(e) {
    for (; null !== zs; ) {
        var t = zs;
        if (t === e) {
            zs = null;
            break;
        }
        var n = t.sibling;
        if (null !== n) {
            ((n.return = t.return), (zs = n));
            break;
        }
        zs = t.return;
    }
}
function ic(e) {
    for (; null !== zs; ) {
        var t = zs;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Fs(4, t);
                    } catch (u) {
                        uf(t, n, u);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if ('function' == typeof r.componentDidMount) {
                        var a = t.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            uf(t, a, u);
                        }
                    }
                    var i = t.return;
                    try {
                        Us(t);
                    } catch (u) {
                        uf(t, i, u);
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Us(t);
                    } catch (u) {
                        uf(t, o, u);
                    }
            }
        } catch (u) {
            uf(t, t.return, u);
        }
        if (t === e) {
            zs = null;
            break;
        }
        var l = t.sibling;
        if (null !== l) {
            ((l.return = t.return), (zs = l));
            break;
        }
        zs = t.return;
    }
}
var oc,
    lc = Math.ceil,
    uc = rt.ReactCurrentDispatcher,
    sc = rt.ReactCurrentOwner,
    cc = rt.ReactCurrentBatchConfig,
    fc = 0,
    dc = null,
    pc = null,
    hc = 0,
    vc = 0,
    gc = lo(0),
    mc = 0,
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
    Nc = !1,
    jc = null,
    Tc = 0,
    Rc = 0,
    Lc = null,
    zc = -1,
    Ic = 0;
function Dc() {
    return 0 != (6 & fc) ? zn() : -1 !== zc ? zc : (zc = zn());
}
function Mc(e) {
    return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & fc) && 0 !== hc
          ? hc & -hc
          : null !== Jo.transition
            ? (0 === Ic && (Ic = Jn()), Ic)
            : 0 !== (e = rr)
              ? e
              : (e = void 0 === (e = window.event) ? 16 : Lr(e.type));
}
function Vc(e, t, n, r) {
    if (50 < Rc) throw ((Rc = 0), (Lc = null), Error(Be(185)));
    (tr(e, n, r),
        (0 != (2 & fc) && e === dc) ||
            (e === dc && (0 == (2 & fc) && (_c |= n), 4 === mc && Wc(e, hc)),
            Fc(e, r),
            1 === n && 0 === fc && 0 == (1 & t.mode) && ((Oc = zn() + 500), So && Eo())));
}
function Fc(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
            var o = 31 - Wn(i),
                l = 1 << o,
                u = a[o];
            (-1 === u ? (0 != (l & n) && 0 == (l & r)) || (a[o] = Xn(l, t)) : u <= t && (e.expiredLanes |= l),
                (i &= ~l));
        }
    })(e, t);
    var r = Yn(e, e === dc ? hc : 0);
    if (0 === r) (null !== n && Tn(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && Tn(n), 1 === t))
            (0 === e.tag
                ? (function (e) {
                      ((So = !0), Oo(e));
                  })(Hc.bind(null, e))
                : Oo(Hc.bind(null, e)),
                $i(function () {
                    0 == (6 & fc) && Eo();
                }),
                (n = null));
        else {
            switch (ar(r)) {
                case 1:
                    n = Dn;
                    break;
                case 4:
                    n = Mn;
                    break;
                case 16:
                default:
                    n = Vn;
                    break;
                case 536870912:
                    n = Un;
            }
            n = pf(n, Uc.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = n));
    }
}
function Uc(e, t) {
    if (((zc = -1), (Ic = 0), 0 != (6 & fc))) throw Error(Be(327));
    var n = e.callbackNode;
    if (of() && e.callbackNode !== n) return null;
    var r = Yn(e, e === dc ? hc : 0);
    if (0 === r) return null;
    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = Jc(e, r);
    else {
        t = r;
        var a = fc;
        fc |= 2;
        var i = Xc();
        for ((dc === e && hc === t) || ((Ec = null), (Oc = zn() + 500), Qc(e, t)); ; )
            try {
                tf();
                break;
            } catch (l) {
                Yc(e, l);
            }
        (cl(), (uc.current = i), (fc = a), null !== pc ? (t = 0) : ((dc = null), (hc = 0), (t = mc)));
    }
    if (0 !== t) {
        if ((2 === t && 0 !== (a = Zn(e)) && ((r = a), (t = Bc(e, a))), 1 === t))
            throw ((n = yc), Qc(e, 0), Wc(e, r), Fc(e, zn()), n);
        if (6 === t) Wc(e, r);
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
                                            i = a.getSnapshot;
                                        a = a.value;
                                        try {
                                            if (!Wa(i(), a)) return !1;
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
                    })(a) &&
                    (2 === (t = Jc(e, r)) && 0 !== (i = Zn(e)) && ((r = i), (t = Bc(e, i))), 1 === t))
            )
                throw ((n = yc), Qc(e, 0), Wc(e, r), Fc(e, zn()), n);
            switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(Be(345));
                case 2:
                case 5:
                    af(e, Sc, Ec);
                    break;
                case 3:
                    if ((Wc(e, r), (130023424 & r) === r && 10 < (t = xc + 500 - zn()))) {
                        if (0 !== Yn(e, 0)) break;
                        if (((a = e.suspendedLanes) & r) !== r) {
                            (Dc(), (e.pingedLanes |= e.suspendedLanes & a));
                            break;
                        }
                        e.timeoutHandle = Fi(af.bind(null, e, Sc, Ec), t);
                        break;
                    }
                    af(e, Sc, Ec);
                    break;
                case 4:
                    if ((Wc(e, r), (4194240 & r) === r)) break;
                    for (t = e.eventTimes, a = -1; 0 < r; ) {
                        var o = 31 - Wn(r);
                        ((i = 1 << o), (o = t[o]) > a && (a = o), (r &= ~i));
                    }
                    if (
                        ((r = a),
                        10 <
                            (r =
                                (120 > (r = zn() - r)
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
                        e.timeoutHandle = Fi(af.bind(null, e, Sc, Ec), r);
                        break;
                    }
                    af(e, Sc, Ec);
                    break;
                default:
                    throw Error(Be(329));
            }
        }
    }
    return (Fc(e, zn()), e.callbackNode === n ? Uc.bind(null, e) : null);
}
function Bc(e, t) {
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
    if (0 != (6 & fc)) throw Error(Be(327));
    of();
    var t = Yn(e, 0);
    if (0 == (1 & t)) return (Fc(e, zn()), null);
    var n = Jc(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = Zn(e);
        0 !== r && ((t = r), (n = Bc(e, r)));
    }
    if (1 === n) throw ((n = yc), Qc(e, 0), Wc(e, t), Fc(e, zn()), n);
    if (6 === n) throw Error(Be(345));
    return ((e.finishedWork = e.current.alternate), (e.finishedLanes = t), af(e, Sc, Ec), Fc(e, zn()), null);
}
function Kc(e, t) {
    var n = fc;
    fc |= 1;
    try {
        return e(t);
    } finally {
        0 === (fc = n) && ((Oc = zn() + 500), So && Eo());
    }
}
function qc(e) {
    null !== jc && 0 === jc.tag && 0 == (6 & fc) && of();
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
function Gc() {
    ((vc = gc.current), uo(gc));
}
function Qc(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), Ui(n)), null !== pc))
        for (n = pc.return; null !== n; ) {
            var r = n;
            switch ((Vo(r), r.tag)) {
                case 1:
                    null != (r = r.type.childContextTypes) && mo();
                    break;
                case 3:
                    (Ll(), uo(po), uo(fo), Fl());
                    break;
                case 5:
                    Il(r);
                    break;
                case 4:
                    Ll();
                    break;
                case 13:
                case 19:
                    uo(Dl);
                    break;
                case 10:
                    fl(r.type._context);
                    break;
                case 22:
                case 23:
                    Gc();
            }
            n = n.return;
        }
    if (
        ((dc = e),
        (pc = e = mf(e.current, null)),
        (hc = vc = t),
        (mc = 0),
        (yc = null),
        (wc = _c = bc = 0),
        (Sc = kc = null),
        null !== vl)
    ) {
        for (t = 0; t < vl.length; t++)
            if (null !== (r = (n = vl[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                    i = n.pending;
                if (null !== i) {
                    var o = i.next;
                    ((i.next = a), (r.next = o));
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
            if ((cl(), (Ul.current = zu), ql)) {
                for (var r = Wl.memoizedState; null !== r; ) {
                    var a = r.queue;
                    (null !== a && (a.pending = null), (r = r.next));
                }
                ql = !1;
            }
            if (
                (($l = 0),
                (Kl = Hl = Wl = null),
                (Gl = !1),
                (Ql = 0),
                (sc.current = null),
                null === n || null === n.return)
            ) {
                ((mc = 1), (yc = t), (pc = null));
                break;
            }
            e: {
                var i = e,
                    o = n.return,
                    l = n,
                    u = t;
                if (((t = hc), (l.flags |= 32768), null !== u && 'object' == typeof u && 'function' == typeof u.then)) {
                    var s = u,
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
                    var p = Ju(o);
                    if (null !== p) {
                        ((p.flags &= -257), es(p, o, l, 0, t), 1 & p.mode && Zu(i, s, t), (u = s));
                        var h = (t = p).updateQueue;
                        if (null === h) {
                            var v = new Set();
                            (v.add(u), (t.updateQueue = v));
                        } else h.add(u);
                        break e;
                    }
                    if (0 == (1 & t)) {
                        (Zu(i, s, t), Zc());
                        break e;
                    }
                    u = Error(Be(426));
                } else if (Bo && 1 & l.mode) {
                    var g = Ju(o);
                    if (null !== g) {
                        (0 == (65536 & g.flags) && (g.flags |= 256), es(g, o, l, 0, t), Zo(Ku(u, l)));
                        break e;
                    }
                }
                ((i = u = Ku(u, l)), 4 !== mc && (mc = 2), null === kc ? (kc = [i]) : kc.push(i), (i = o));
                do {
                    switch (i.tag) {
                        case 3:
                            ((i.flags |= 65536), (t &= -t), (i.lanes |= t), Ol(i, Yu(0, u, t)));
                            break e;
                        case 1:
                            l = u;
                            var m = i.type,
                                y = i.stateNode;
                            if (
                                0 == (128 & i.flags) &&
                                ('function' == typeof m.getDerivedStateFromError ||
                                    (null !== y &&
                                        'function' == typeof y.componentDidCatch &&
                                        (null === Ac || !Ac.has(y))))
                            ) {
                                ((i.flags |= 65536), (t &= -t), (i.lanes |= t), Ol(i, Xu(i, l, t)));
                                break e;
                            }
                    }
                    i = i.return;
                } while (null !== i);
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
    var e = uc.current;
    return ((uc.current = zu), null === e ? zu : e);
}
function Zc() {
    ((0 !== mc && 3 !== mc && 2 !== mc) || (mc = 4),
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
        } catch (a) {
            Yc(e, a);
        }
    if ((cl(), (fc = n), (uc.current = r), null !== pc)) throw Error(Be(261));
    return ((dc = null), (hc = 0), mc);
}
function ef() {
    for (; null !== pc; ) nf(pc);
}
function tf() {
    for (; null !== pc && !Rn(); ) nf(pc);
}
function nf(e) {
    var t = oc(e.alternate, e, vc);
    ((e.memoizedProps = e.pendingProps), null === t ? rf(e) : (pc = t), (sc.current = null));
}
function rf(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), 0 == (32768 & t.flags))) {
            if (null !== (n = Ns(n, t, vc))) return void (pc = n);
        } else {
            if (null !== (n = js(n, t))) return ((n.flags &= 32767), void (pc = n));
            if (null === e) return ((mc = 6), void (pc = null));
            ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        }
        if (null !== (t = t.sibling)) return void (pc = t);
        pc = t = e;
    } while (null !== t);
    0 === mc && (mc = 5);
}
function af(e, t, n) {
    var r = rr,
        a = cc.transition;
    try {
        ((cc.transition = null),
            (rr = 1),
            (function (e, t, n, r) {
                do {
                    of();
                } while (null !== jc);
                if (0 != (6 & fc)) throw Error(Be(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(Be(177));
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
                            var a = 31 - Wn(n),
                                i = 1 << a;
                            ((t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i));
                        }
                    })(e, i),
                    e === dc && ((pc = dc = null), (hc = 0)),
                    (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                        Nc ||
                        ((Nc = !0),
                        pf(Vn, function () {
                            return (of(), null);
                        })),
                    (i = 0 != (15990 & n.flags)),
                    0 != (15990 & n.subtreeFlags) || i)
                ) {
                    ((i = cc.transition), (cc.transition = null));
                    var o = rr;
                    rr = 1;
                    var l = fc;
                    ((fc |= 4),
                        (sc.current = null),
                        (function (e, t) {
                            if (((Di = Cr), Ya((e = Qa())))) {
                                if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
                                else
                                    e: {
                                        var r =
                                            (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection &&
                                            n.getSelection();
                                        if (r && 0 !== r.rangeCount) {
                                            n = r.anchorNode;
                                            var a = r.anchorOffset,
                                                i = r.focusNode;
                                            r = r.focusOffset;
                                            try {
                                                (n.nodeType, i.nodeType);
                                            } catch (_) {
                                                n = null;
                                                break e;
                                            }
                                            var o = 0,
                                                l = -1,
                                                u = -1,
                                                s = 0,
                                                c = 0,
                                                f = e,
                                                d = null;
                                            t: for (;;) {
                                                for (
                                                    var p;
                                                    f !== n || (0 !== a && 3 !== f.nodeType) || (l = o + a),
                                                        f !== i || (0 !== r && 3 !== f.nodeType) || (u = o + r),
                                                        3 === f.nodeType && (o += f.nodeValue.length),
                                                        null !== (p = f.firstChild);
                                                )
                                                    ((d = f), (f = p));
                                                for (;;) {
                                                    if (f === e) break t;
                                                    if (
                                                        (d === n && ++s === a && (l = o),
                                                        d === i && ++c === r && (u = o),
                                                        null !== (p = f.nextSibling))
                                                    )
                                                        break;
                                                    d = (f = d).parentNode;
                                                }
                                                f = p;
                                            }
                                            n = -1 === l || -1 === u ? null : { start: l, end: u };
                                        } else n = null;
                                    }
                                n = n || { start: 0, end: 0 };
                            } else n = null;
                            for (Mi = { focusedElem: e, selectionRange: n }, Cr = !1, zs = t; null !== zs; )
                                if (((e = (t = zs).child), 0 != (1028 & t.subtreeFlags) && null !== e))
                                    ((e.return = t), (zs = e));
                                else
                                    for (; null !== zs; ) {
                                        t = zs;
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
                                                                g = h.memoizedState,
                                                                m = t.stateNode,
                                                                y = m.getSnapshotBeforeUpdate(
                                                                    t.elementType === t.type ? v : Vu(t.type, v),
                                                                    g,
                                                                );
                                                            m.__reactInternalSnapshotBeforeUpdate = y;
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
                                                        throw Error(Be(163));
                                                }
                                        } catch (_) {
                                            uf(t, t.return, _);
                                        }
                                        if (null !== (e = t.sibling)) {
                                            ((e.return = t.return), (zs = e));
                                            break;
                                        }
                                        zs = t.return;
                                    }
                            ((h = Ms), (Ms = !1));
                        })(e, n),
                        Js(n, e),
                        Xa(Mi),
                        (Cr = !!Di),
                        (Mi = Di = null),
                        (e.current = n),
                        tc(n),
                        Ln(),
                        (fc = l),
                        (rr = o),
                        (cc.transition = i));
                } else e.current = n;
                if (
                    (Nc && ((Nc = !1), (jc = e), (Tc = a)),
                    (i = e.pendingLanes),
                    0 === i && (Ac = null),
                    (function (e) {
                        if ($n && 'function' == typeof $n.onCommitFiberRoot)
                            try {
                                $n.onCommitFiberRoot(Bn, e, void 0, 128 == (128 & e.current.flags));
                            } catch (t) {}
                    })(n.stateNode),
                    Fc(e, zn()),
                    null !== t)
                )
                    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                        ((a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest }));
                if (Pc) throw ((Pc = !1), (e = Cc), (Cc = null), e);
                (0 != (1 & Tc) && 0 !== e.tag && of(),
                    (i = e.pendingLanes),
                    0 != (1 & i) ? (e === Lc ? Rc++ : ((Rc = 0), (Lc = e))) : (Rc = 0),
                    Eo());
            })(e, t, n, r));
    } finally {
        ((cc.transition = a), (rr = r));
    }
    return null;
}
function of() {
    if (null !== jc) {
        var e = ar(Tc),
            t = cc.transition,
            n = rr;
        try {
            if (((cc.transition = null), (rr = 16 > e ? 16 : e), null === jc)) var r = !1;
            else {
                if (((e = jc), (jc = null), (Tc = 0), 0 != (6 & fc))) throw Error(Be(331));
                var a = fc;
                for (fc |= 4, zs = e.current; null !== zs; ) {
                    var i = zs,
                        o = i.child;
                    if (0 != (16 & zs.flags)) {
                        var l = i.deletions;
                        if (null !== l) {
                            for (var u = 0; u < l.length; u++) {
                                var s = l[u];
                                for (zs = s; null !== zs; ) {
                                    var c = zs;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Vs(8, c, i);
                                    }
                                    var f = c.child;
                                    if (null !== f) ((f.return = c), (zs = f));
                                    else
                                        for (; null !== zs; ) {
                                            var d = (c = zs).sibling,
                                                p = c.return;
                                            if ((Bs(c), c === s)) {
                                                zs = null;
                                                break;
                                            }
                                            if (null !== d) {
                                                ((d.return = p), (zs = d));
                                                break;
                                            }
                                            zs = p;
                                        }
                                }
                            }
                            var h = i.alternate;
                            if (null !== h) {
                                var v = h.child;
                                if (null !== v) {
                                    h.child = null;
                                    do {
                                        var g = v.sibling;
                                        ((v.sibling = null), (v = g));
                                    } while (null !== v);
                                }
                            }
                            zs = i;
                        }
                    }
                    if (0 != (2064 & i.subtreeFlags) && null !== o) ((o.return = i), (zs = o));
                    else
                        e: for (; null !== zs; ) {
                            if (0 != (2048 & (i = zs).flags))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Vs(9, i, i.return);
                                }
                            var m = i.sibling;
                            if (null !== m) {
                                ((m.return = i.return), (zs = m));
                                break e;
                            }
                            zs = i.return;
                        }
                }
                var y = e.current;
                for (zs = y; null !== zs; ) {
                    var b = (o = zs).child;
                    if (0 != (2064 & o.subtreeFlags) && null !== b) ((b.return = o), (zs = b));
                    else
                        e: for (o = y; null !== zs; ) {
                            if (0 != (2048 & (l = zs).flags))
                                try {
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Fs(9, l);
                                    }
                                } catch (w) {
                                    uf(l, l.return, w);
                                }
                            if (l === o) {
                                zs = null;
                                break e;
                            }
                            var _ = l.sibling;
                            if (null !== _) {
                                ((_.return = l.return), (zs = _));
                                break e;
                            }
                            zs = l.return;
                        }
                }
                if (((fc = a), Eo(), $n && 'function' == typeof $n.onPostCommitFiberRoot))
                    try {
                        $n.onPostCommitFiberRoot(Bn, e);
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
    ((e = Sl(e, (t = Yu(0, (t = Ku(n, t)), 1)), 1)), (t = Dc()), null !== e && (tr(e, 1, t), Fc(e, t)));
}
function uf(e, t, n) {
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
                    ((t = Sl(t, (e = Xu(t, (e = Ku(n, e)), 1)), 1)), (e = Dc()), null !== t && (tr(t, 1, e), Fc(t, e)));
                    break;
                }
            }
            t = t.return;
        }
}
function sf(e, t, n) {
    var r = e.pingCache;
    (null !== r && r.delete(t),
        (t = Dc()),
        (e.pingedLanes |= e.suspendedLanes & n),
        dc === e &&
            (hc & n) === n &&
            (4 === mc || (3 === mc && (130023424 & hc) === hc && 500 > zn() - xc) ? Qc(e, 0) : (wc |= n)),
        Fc(e, t));
}
function cf(e, t) {
    0 === t && (0 == (1 & e.mode) ? (t = 1) : ((t = Gn), 0 == (130023424 & (Gn <<= 1)) && (Gn = 4194304)));
    var n = Dc();
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
                a = e.memoizedState;
            null !== a && (n = a.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(Be(314));
    }
    (null !== r && r.delete(t), cf(e, n));
}
function pf(e, t) {
    return jn(e, t);
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
function gf(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
}
function mf(e, t) {
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
function yf(e, t, n, r, a, i) {
    var o = 2;
    if (((r = e), 'function' == typeof e)) gf(e) && (o = 1);
    else if ('string' == typeof e) o = 5;
    else
        e: switch (e) {
            case ot:
                return bf(n.children, a, i, t);
            case lt:
                ((o = 8), (a |= 8));
                break;
            case ut:
                return (((e = vf(12, n, t, 2 | a)).elementType = ut), (e.lanes = i), e);
            case dt:
                return (((e = vf(13, n, t, a)).elementType = dt), (e.lanes = i), e);
            case pt:
                return (((e = vf(19, n, t, a)).elementType = pt), (e.lanes = i), e);
            case gt:
                return _f(n, a, i, t);
            default:
                if ('object' == typeof e && null !== e)
                    switch (e.$$typeof) {
                        case st:
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
                throw Error(Be(130, null == e ? e : typeof e, ''));
        }
    return (((t = vf(o, n, t, a)).elementType = e), (t.type = r), (t.lanes = i), t);
}
function bf(e, t, n, r) {
    return (((e = vf(7, e, r, t)).lanes = n), e);
}
function _f(e, t, n, r) {
    return (((e = vf(22, e, r, t)).elementType = gt), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e);
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
function Sf(e, t, n, r, a) {
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
        (this.onRecoverableError = a),
        (this.mutableSourceEagerHydrationData = null));
}
function xf(e, t, n, r, a, i, o, l, u) {
    return (
        (e = new Sf(e, t, n, l, u)),
        1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
        (i = vf(3, null, null, t)),
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
function Of(e) {
    if (!e) return co;
    e: {
        if (En((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(Be(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (go(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (null !== t);
        throw Error(Be(171));
    }
    if (1 === e.tag) {
        var n = e.type;
        if (go(n)) return bo(e, n, t);
    }
    return t;
}
function Ef(e, t, n, r, a, i, o, l, u) {
    return (
        ((e = xf(n, r, !0, e, 0, i, 0, l, u)).context = Of(null)),
        (n = e.current),
        ((i = kl((r = Dc()), (a = Mc(n)))).callback = null != t ? t : null),
        Sl(n, i, a),
        (e.current.lanes = a),
        tr(e, a, r),
        Fc(e, r),
        e
    );
}
function Pf(e, t, n, r) {
    var a = t.current,
        i = Dc(),
        o = Mc(a);
    return (
        (n = Of(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = kl(i, o)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = Sl(a, t, o)) && (Vc(e, a, o, i), xl(e, a, o)),
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
function Nf(e, t) {
    (Af(e, t), (e = e.alternate) && Af(e, t));
}
oc = function (e, t, n) {
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps || po.current) ns = !0;
        else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                    (ns = !1),
                    (function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                (ds(t), Xo());
                                break;
                            case 5:
                                zl(t);
                                break;
                            case 1:
                                go(t.type) && _o(t);
                                break;
                            case 4:
                                Rl(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context,
                                    a = t.memoizedProps.value;
                                (so(ol, r._currentValue), (r._currentValue = a));
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState))
                                    return null !== r.dehydrated
                                        ? (so(Dl, 1 & Dl.current), (t.flags |= 128), null)
                                        : 0 != (n & t.child.childLanes)
                                          ? _s(e, t, n)
                                          : (so(Dl, 1 & Dl.current), null !== (e = Ps(e, t, n)) ? e.sibling : null);
                                so(Dl, 1 & Dl.current);
                                break;
                            case 19:
                                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                    if (r) return Os(e, t, n);
                                    t.flags |= 128;
                                }
                                if (
                                    (null !== (a = t.memoizedState) &&
                                        ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                                    so(Dl, Dl.current),
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
    else ((ns = !1), Bo && 0 != (1048576 & t.flags) && Do(t, No, t.index));
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            (Es(e, t), (e = t.pendingProps));
            var a = vo(t, fo.current);
            (pl(t, n), (a = Jl(null, t, r, e, a, n)));
            var i = eu();
            return (
                (t.flags |= 1),
                'object' == typeof a && null !== a && 'function' == typeof a.render && void 0 === a.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      go(r) ? ((i = !0), _o(t)) : (i = !1),
                      (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
                      _l(t),
                      (a.updater = Uu),
                      (t.stateNode = a),
                      (a._reactInternals = t),
                      Hu(t, r, e, n),
                      (t = fs(null, t, r, !0, i, n)))
                    : ((t.tag = 0), Bo && i && Mo(t), rs(null, t, a, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Es(e, t),
                    (e = t.pendingProps),
                    (r = (a = r._init)(r._payload)),
                    (t.type = r),
                    (a = t.tag =
                        (function (e) {
                            if ('function' == typeof e) return gf(e) ? 1 : 0;
                            if (null != e) {
                                if ((e = e.$$typeof) === ft) return 11;
                                if (e === ht) return 14;
                            }
                            return 2;
                        })(r)),
                    (e = Vu(r, e)),
                    a)
                ) {
                    case 0:
                        t = ss(null, t, r, e, n);
                        break e;
                    case 1:
                        t = cs(null, t, r, e, n);
                        break e;
                    case 11:
                        t = as(null, t, r, e, n);
                        break e;
                    case 14:
                        t = is(null, t, r, Vu(r.type, e), n);
                        break e;
                }
                throw Error(Be(306, r, ''));
            }
            return t;
        case 0:
            return ((r = t.type), (a = t.pendingProps), ss(e, t, r, (a = t.elementType === r ? a : Vu(r, a)), n));
        case 1:
            return ((r = t.type), (a = t.pendingProps), cs(e, t, r, (a = t.elementType === r ? a : Vu(r, a)), n));
        case 3:
            e: {
                if ((ds(t), null === e)) throw Error(Be(387));
                ((r = t.pendingProps), (a = (i = t.memoizedState).element), wl(e, t), El(t, r, null, n));
                var o = t.memoizedState;
                if (((r = o.element), i.isDehydrated)) {
                    if (
                        ((i = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions,
                        }),
                        (t.updateQueue.baseState = i),
                        (t.memoizedState = i),
                        256 & t.flags)
                    ) {
                        t = ps(e, t, r, n, (a = Ku(Error(Be(423)), t)));
                        break e;
                    }
                    if (r !== a) {
                        t = ps(e, t, r, n, (a = Ku(Error(Be(424)), t)));
                        break e;
                    }
                    for (
                        Uo = Ki(t.stateNode.containerInfo.firstChild),
                            Fo = t,
                            Bo = !0,
                            $o = null,
                            n = il(t, null, r, n),
                            t.child = n;
                        n;
                    )
                        ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                    if ((Xo(), r === a)) {
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
                zl(t),
                null === e && qo(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (o = a.children),
                Vi(r, a) ? (o = null) : null !== i && Vi(r, i) && (t.flags |= 32),
                us(e, t),
                rs(e, t, o, n),
                t.child
            );
        case 6:
            return (null === e && qo(t), null);
        case 13:
            return _s(e, t, n);
        case 4:
            return (
                Rl(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = al(t, null, r, n)) : rs(e, t, r, n),
                t.child
            );
        case 11:
            return ((r = t.type), (a = t.pendingProps), as(e, t, r, (a = t.elementType === r ? a : Vu(r, a)), n));
        case 7:
            return (rs(e, t, t.pendingProps, n), t.child);
        case 8:
        case 12:
            return (rs(e, t, t.pendingProps.children, n), t.child);
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (a = t.pendingProps),
                    (i = t.memoizedProps),
                    (o = a.value),
                    so(ol, r._currentValue),
                    (r._currentValue = o),
                    null !== i)
                )
                    if (Wa(i.value, o)) {
                        if (i.children === a.children && !po.current) {
                            t = Ps(e, t, n);
                            break e;
                        }
                    } else
                        for (null !== (i = t.child) && (i.return = t); null !== i; ) {
                            var l = i.dependencies;
                            if (null !== l) {
                                o = i.child;
                                for (var u = l.firstContext; null !== u; ) {
                                    if (u.context === r) {
                                        if (1 === i.tag) {
                                            (u = kl(-1, n & -n)).tag = 2;
                                            var s = i.updateQueue;
                                            if (null !== s) {
                                                var c = (s = s.shared).pending;
                                                (null === c ? (u.next = u) : ((u.next = c.next), (c.next = u)),
                                                    (s.pending = u));
                                            }
                                        }
                                        ((i.lanes |= n),
                                            null !== (u = i.alternate) && (u.lanes |= n),
                                            dl(i.return, n, t),
                                            (l.lanes |= n));
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (10 === i.tag) o = i.type === t.type ? null : i.child;
                            else if (18 === i.tag) {
                                if (null === (o = i.return)) throw Error(Be(341));
                                ((o.lanes |= n),
                                    null !== (l = o.alternate) && (l.lanes |= n),
                                    dl(o, n, t),
                                    (o = i.sibling));
                            } else o = i.child;
                            if (null !== o) o.return = i;
                            else
                                for (o = i; null !== o; ) {
                                    if (o === t) {
                                        o = null;
                                        break;
                                    }
                                    if (null !== (i = o.sibling)) {
                                        ((i.return = o.return), (o = i));
                                        break;
                                    }
                                    o = o.return;
                                }
                            i = o;
                        }
                (rs(e, t, a.children, n), (t = t.child));
            }
            return t;
        case 9:
            return (
                (a = t.type),
                (r = t.pendingProps.children),
                pl(t, n),
                (r = r((a = hl(a)))),
                (t.flags |= 1),
                rs(e, t, r, n),
                t.child
            );
        case 14:
            return ((a = Vu((r = t.type), t.pendingProps)), is(e, t, r, (a = Vu(r.type, a)), n));
        case 15:
            return os(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : Vu(r, a)),
                Es(e, t),
                (t.tag = 1),
                go(r) ? ((e = !0), _o(t)) : (e = !1),
                pl(t, n),
                $u(t, r, a),
                Hu(t, r, a, n),
                fs(null, t, r, !0, e, n)
            );
        case 19:
            return Os(e, t, n);
        case 22:
            return ls(e, t, n);
    }
    throw Error(Be(156, t.tag));
};
var jf =
    'function' == typeof reportError
        ? reportError
        : function (e) {
              console.error(e);
          };
function Tf(e) {
    this._internalRoot = e;
}
function Rf(e) {
    this._internalRoot = e;
}
function Lf(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function zf(e) {
    return !(
        !e ||
        (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
    );
}
function If() {}
function Df(e, t, n, r, a) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if ('function' == typeof a) {
            var l = a;
            a = function () {
                var e = Cf(o);
                l.call(e);
            };
        }
        Pf(t, o, e, a);
    } else
        o = (function (e, t, n, r, a) {
            if (a) {
                if ('function' == typeof r) {
                    var i = r;
                    r = function () {
                        var e = Cf(o);
                        i.call(e);
                    };
                }
                var o = Ef(t, r, e, 0, null, !1, 0, '', If);
                return (
                    (e._reactRootContainer = o),
                    (e[Xi] = o.current),
                    Oi(8 === e.nodeType ? e.parentNode : e),
                    qc(),
                    o
                );
            }
            for (; (a = e.lastChild); ) e.removeChild(a);
            if ('function' == typeof r) {
                var l = r;
                r = function () {
                    var e = Cf(u);
                    l.call(e);
                };
            }
            var u = xf(e, 0, !1, null, 0, !1, 0, '', If);
            return (
                (e._reactRootContainer = u),
                (e[Xi] = u.current),
                Oi(8 === e.nodeType ? e.parentNode : e),
                qc(function () {
                    Pf(t, u, n, r);
                }),
                u
            );
        })(n, t, e, a, r);
    return Cf(o);
}
((Rf.prototype.render = Tf.prototype.render =
    function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(Be(409));
        Pf(e, t, null, null);
    }),
    (Rf.prototype.unmount = Tf.prototype.unmount =
        function () {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                (qc(function () {
                    Pf(null, e, null, null);
                }),
                    (t[Xi] = null));
            }
        }),
    (Rf.prototype.unstable_scheduleHydration = function (e) {
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
                    0 !== n && (nr(t, 1 | n), Fc(t, zn()), 0 == (6 & fc) && ((Oc = zn() + 500), Eo()));
                }
                break;
            case 13:
                (qc(function () {
                    var t = yl(e, 1);
                    if (null !== t) {
                        var n = Dc();
                        Vc(t, e, 1, n);
                    }
                }),
                    Nf(e, 1));
        }
    }),
    (or = function (e) {
        if (13 === e.tag) {
            var t = yl(e, 134217728);
            if (null !== t) Vc(t, e, 134217728, Dc());
            Nf(e, 134217728);
        }
    }),
    (lr = function (e) {
        if (13 === e.tag) {
            var t = Mc(e),
                n = yl(e, t);
            if (null !== n) Vc(n, e, t, Dc());
            Nf(e, t);
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
    (on = function (e, t, n) {
        switch (t) {
            case 'input':
                if ((zt(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                    for (n = e; n.parentNode; ) n = n.parentNode;
                    for (
                        n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var a = ao(r);
                            if (!a) throw Error(Be(90));
                            (Nt(r), zt(r, a));
                        }
                    }
                }
                break;
            case 'textarea':
                Bt(e, n);
                break;
            case 'select':
                null != (t = n.value) && Vt(e, !!n.multiple, t, !1);
        }
    }),
    (dn = Kc),
    (pn = qc));
var Mf = { usingClientEntryPoint: !1, Events: [no, ro, ao, cn, fn, Kc] },
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
    var Uf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Uf.isDisabled && Uf.supportsFiber)
        try {
            ((Bn = Uf.inject(Ff)), ($n = Uf));
        } catch (qt) {}
}
((Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mf),
    (Ie.createPortal = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Lf(t)) throw Error(Be(200));
        return (function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: it, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
        })(e, t, null, n);
    }),
    (Ie.createRoot = function (e, t) {
        if (!Lf(e)) throw Error(Be(299));
        var n = !1,
            r = '',
            a = jf;
        return (
            null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
            (t = xf(e, 1, !1, null, 0, n, 0, r, a)),
            (e[Xi] = t.current),
            Oi(8 === e.nodeType ? e.parentNode : e),
            new Tf(t)
        );
    }),
    (Ie.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
            if ('function' == typeof e.render) throw Error(Be(188));
            throw ((e = Object.keys(e).join(',')), Error(Be(268, e)));
        }
        return (e = null === (e = An(t)) ? null : e.stateNode);
    }),
    (Ie.flushSync = function (e) {
        return qc(e);
    }),
    (Ie.hydrate = function (e, t, n) {
        if (!zf(t)) throw Error(Be(200));
        return Df(null, e, t, !0, n);
    }),
    (Ie.hydrateRoot = function (e, t, n) {
        if (!Lf(e)) throw Error(Be(405));
        var r = (null != n && n.hydratedSources) || null,
            a = !1,
            i = '',
            o = jf;
        if (
            (null != n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
            (t = Ef(t, null, e, 1, null != n ? n : null, a, 0, i, o)),
            (e[Xi] = t.current),
            Oi(e),
            r)
        )
            for (e = 0; e < r.length; e++)
                ((a = (a = (n = r[e])._getVersion)(n._source)),
                    null == t.mutableSourceEagerHydrationData
                        ? (t.mutableSourceEagerHydrationData = [n, a])
                        : t.mutableSourceEagerHydrationData.push(n, a));
        return new Rf(t);
    }),
    (Ie.render = function (e, t, n) {
        if (!zf(t)) throw Error(Be(200));
        return Df(null, e, t, !1, n);
    }),
    (Ie.unmountComponentAtNode = function (e) {
        if (!zf(e)) throw Error(Be(40));
        return (
            !!e._reactRootContainer &&
            (qc(function () {
                Df(null, null, e, !1, function () {
                    ((e._reactRootContainer = null), (e[Xi] = null));
                });
            }),
            !0)
        );
    }),
    (Ie.unstable_batchedUpdates = Kc),
    (Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!zf(n)) throw Error(Be(200));
        if (null == e || void 0 === e._reactInternals) throw Error(Be(38));
        return Df(e, t, n, !1, r);
    }),
    (Ie.version = '18.3.1-next-f1338f8080-20240426'),
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
    (ze.exports = Ie));
var Bf = ze.exports,
    $f = Bf;
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
                var a = arguments[r];
                if (a) {
                    var i = typeof a;
                    if ('string' === i || 'number' === i) n.push(a);
                    else if (Array.isArray(a)) {
                        if (a.length) {
                            var o = t.apply(null, a);
                            o && n.push(o);
                        }
                    } else if ('object' === i) {
                        if (
                            a.toString !== Object.prototype.toString &&
                            !a.toString.toString().includes('[native code]')
                        ) {
                            n.push(a.toString());
                            continue;
                        }
                        for (var l in a) e.call(a, l) && a[l] && n.push(l);
                    }
                }
            }
            return n.join(' ');
        }
        Wf.exports ? ((t.default = t), (Wf.exports = t)) : (window.classNames = t);
    })());
const Kf = n(Hf.exports);
function qf(e) {
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
var Gf = {};
function Qf() {
    return 'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : Gf;
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
function ad() {
    nd || qf('Proxy not available');
}
function id(e) {
    var t = !1;
    return function () {
        if (!t) return ((t = !0), e.apply(this, arguments));
    };
}
var od = function () {};
function ld(e) {
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
function sd(e) {
    return null !== e && 'object' == typeof e;
}
function cd(e) {
    if (!sd(e)) return !1;
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
            return sd(e) && !0 === e[n];
        }
    );
}
function vd(e) {
    return e instanceof Map;
}
function gd(e) {
    return e instanceof Set;
}
var md = void 0 !== Object.getOwnPropertySymbols;
var yd =
    'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : md
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
                ((a = r.key),
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
                })(a, 'string'))
                    ? i
                    : String(i)),
                r,
            ));
    }
    var a, i;
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
var Nd = Symbol('mobx-stored-annotations');
function jd(e) {
    return Object.assign(function (t, n) {
        if (Rd(n)) return e.decorate_20223_(t, n);
        Td(t, n, e);
    }, e);
}
function Td(e, t, n) {
    (_d(e, Nd) || dd(e, Nd, xd({}, e[Nd])),
        (function (e) {
            return e.annotationType_ === Ud;
        })(n) || (e[Nd][t] = n));
}
function Rd(e) {
    return 'object' == typeof e && 'string' == typeof e.kind;
}
var Ld = Symbol('mobx administration'),
    zd = (function () {
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
    Id = hd('Atom', zd);
function Dd(e, t, n) {
    (void 0 === t && (t = od), void 0 === n && (n = od));
    var r,
        a = new zd(e);
    return (t !== od && Dh(Lh, a, t, r), n !== od && Ih(a, n), a);
}
var Md = {
    structural: function (e, t) {
        return ig(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
    shallow: function (e, t) {
        return ig(e, t, 1);
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
              : gd(e)
                ? xp.set(e, { name: n })
                : 'function' != typeof e || Nh(e) || Yh(e)
                  ? e
                  : fd(e)
                    ? Gh(e)
                    : Ah(n, e);
}
function Fd(e) {
    return e;
}
var Ud = 'override';
function Bd(e, t) {
    return { annotationType_: e, options_: t, make_: $d, extend_: Wd, decorate_20223_: Hd };
}
function $d(e, t, n, r) {
    var a;
    if (null != (a = this.options_) && a.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (Nh(n.value)) return 1;
    var i = Kd(e, this, t, n, !1);
    return (Zf(r, t, i), 2);
}
function Wd(e, t, n, r) {
    var a = Kd(e, this, t, n);
    return e.defineProperty_(t, a, r);
}
function Hd(e, t) {
    var n = t.kind,
        r = t.name,
        a = t.addInitializer,
        i = this;
    if ('field' != n) {
        var o, l, u, s, c, f;
        if ('method' == n)
            return (
                Nh(e) ||
                    ((l = e),
                    (e = Lp(
                        null != (u = null == (s = i.options_) ? void 0 : s.name) ? u : r.toString(),
                        l,
                        null != (c = null == (f = i.options_) ? void 0 : f.autoAction) && c,
                    ))),
                null != (o = this.options_) &&
                    o.bound &&
                    a(function () {
                        var e = this,
                            t = e[r].bind(e);
                        ((t.isMobxAction = !0), (e[r] = t));
                    }),
                e
            );
        qf(
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
        a(function () {
            Td(this, r, i);
        });
}
function Kd(e, t, n, r, a) {
    var i, o, l, u, s, c, f, d;
    (void 0 === a && (a = oh.safeDescriptors), (d = r), t.annotationType_, d.value);
    var p,
        h = r.value;
    null != (i = t.options_) && i.bound && (h = h.bind(null != (p = e.proxy_) ? p : e.target_));
    return {
        value: Lp(
            null != (o = null == (l = t.options_) ? void 0 : l.name) ? o : n.toString(),
            h,
            null != (u = null == (s = t.options_) ? void 0 : s.autoAction) && u,
            null != (c = t.options_) && c.bound ? (null != (f = e.proxy_) ? f : e.target_) : void 0,
        ),
        configurable: !a || e.isPlainObject_,
        enumerable: !1,
        writable: !a,
    };
}
function qd(e, t) {
    return { annotationType_: e, options_: t, make_: Gd, extend_: Qd, decorate_20223_: Yd };
}
function Gd(e, t, n, r) {
    var a;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (
        null != (a = this.options_) &&
        a.bound &&
        (!_d(e.target_, t) || !Yh(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
    )
        return 0;
    if (Yh(n.value)) return 1;
    var i = Xd(e, this, t, n, !1, !1);
    return (Zf(r, t, i), 2);
}
function Qd(e, t, n, r) {
    var a,
        i = Xd(e, this, t, n, null == (a = this.options_) ? void 0 : a.bound);
    return e.defineProperty_(t, i, r);
}
function Yd(e, t) {
    var n,
        r = t.name,
        a = t.addInitializer;
    return (
        Yh(e) || (e = Gh(e)),
        null != (n = this.options_) &&
            n.bound &&
            a(function () {
                var e = this,
                    t = e[r].bind(e);
                ((t.isMobXFlow = !0), (e[r] = t));
            }),
        e
    );
}
function Xd(e, t, n, r, a, i) {
    var o;
    (void 0 === i && (i = oh.safeDescriptors), (o = r), t.annotationType_, o.value);
    var l,
        u = r.value;
    (Yh(u) || (u = Gh(u)), a) && ((u = u.bind(null != (l = e.proxy_) ? l : e.target_)).isMobXFlow = !0);
    return { value: u, configurable: !i || e.isPlainObject_, enumerable: !1, writable: !i };
}
function Zd(e, t) {
    return { annotationType_: e, options_: t, make_: Jd, extend_: ep, decorate_20223_: tp };
}
function Jd(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function ep(e, t, n, r) {
    var a;
    return (
        (a = n),
        this.annotationType_,
        a.get,
        e.defineComputedProperty_(t, xd({}, this.options_, { get: n.get, set: n.set }), r)
    );
}
function tp(e, t) {
    var n = this,
        r = t.name;
    return (
        (0, t.addInitializer)(function () {
            var t = Mv(this)[Ld],
                a = xd({}, n.options_, { get: e, context: this });
            (a.name || (a.name = 'ObservableObject.' + r.toString()), t.values_.set(r, new Wp(a)));
        }),
        function () {
            return this[Ld].getObservablePropValue_(r);
        }
    );
}
function np(e, t) {
    return { annotationType_: e, options_: t, make_: rp, extend_: ap, decorate_20223_: ip };
}
function rp(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function ap(e, t, n, r) {
    var a, i;
    return (
        this.annotationType_,
        e.defineObservableProperty_(
            t,
            n.value,
            null != (a = null == (i = this.options_) ? void 0 : i.enhancer) ? a : Vd,
            r,
        )
    );
}
function ip(e, t) {
    var n = this,
        r = t.kind,
        a = t.name,
        i = new WeakSet();
    function o(e, t) {
        var r,
            o,
            l = Mv(e)[Ld],
            u = new Vp(
                t,
                null != (r = null == (o = n.options_) ? void 0 : o.enhancer) ? r : Vd,
                'ObservableObject.' + a.toString(),
                !1,
            );
        (l.values_.set(a, u), i.add(e));
    }
    if ('accessor' == r)
        return {
            get: function () {
                return (i.has(this) || o(this, e.get.call(this)), this[Ld].getObservablePropValue_(a));
            },
            set: function (e) {
                return (i.has(this) || o(this, e), this[Ld].setObservablePropValue_(a, e));
            },
            init: function (e) {
                return (i.has(this) || o(this, e), e);
            },
        };
}
var op = 'true',
    lp = up();
function up(e) {
    return { annotationType_: op, options_: e, make_: sp, extend_: cp, decorate_20223_: fp };
}
function sp(e, t, n, r) {
    var a, i, o, l;
    if (n.get) return Cp.make_(e, t, n, r);
    if (n.set) {
        var u = Lp(t.toString(), n.set);
        return r === e.target_
            ? null === e.defineProperty_(t, { configurable: !oh.safeDescriptors || e.isPlainObject_, set: u })
                ? 0
                : 2
            : (Zf(r, t, { configurable: !0, set: u }), 2);
    }
    if (r !== e.target_ && 'function' == typeof n.value)
        return fd(n.value)
            ? (null != (l = this.options_) && l.autoBind ? Gh.bound : Gh).make_(e, t, n, r)
            : (null != (o = this.options_) && o.autoBind ? Ah.bound : Ah).make_(e, t, n, r);
    var s,
        c = !1 === (null == (a = this.options_) ? void 0 : a.deep) ? xp.ref : xp;
    'function' == typeof n.value &&
        null != (i = this.options_) &&
        i.autoBind &&
        (n.value = n.value.bind(null != (s = e.proxy_) ? s : e.target_));
    return c.make_(e, t, n, r);
}
function cp(e, t, n, r) {
    var a, i, o;
    if (n.get) return Cp.extend_(e, t, n, r);
    if (n.set)
        return e.defineProperty_(
            t,
            { configurable: !oh.safeDescriptors || e.isPlainObject_, set: Lp(t.toString(), n.set) },
            r,
        );
    'function' == typeof n.value &&
        null != (a = this.options_) &&
        a.autoBind &&
        (n.value = n.value.bind(null != (o = e.proxy_) ? o : e.target_));
    return (!1 === (null == (i = this.options_) ? void 0 : i.deep) ? xp.ref : xp).extend_(e, t, n, r);
}
function fp(e, t) {
    qf("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var dp = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
function pp(e) {
    return e || dp;
}
Object.freeze(dp);
var hp = np('observable'),
    vp = np('observable.ref', { enhancer: Fd }),
    gp = np('observable.shallow', {
        enhancer: function (e, t, n) {
            return null == e || Uv(e) || xv(e) || jv(e) || Lv(e)
                ? e
                : Array.isArray(e)
                  ? xp.array(e, { name: n, deep: !1 })
                  : cd(e)
                    ? xp.object(e, void 0, { name: n, deep: !1 })
                    : vd(e)
                      ? xp.map(e, { name: n, deep: !1 })
                      : gd(e)
                        ? xp.set(e, { name: n, deep: !1 })
                        : void 0;
        },
    }),
    mp = np('observable.struct', {
        enhancer: function (e, t) {
            return ig(e, t) ? t : e;
        },
    }),
    yp = jd(hp);
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
        : ud(t)
          ? void Td(e, t, hp)
          : Jh(e)
            ? e
            : cd(e)
              ? xp.object(e, t, n)
              : Array.isArray(e)
                ? xp.array(e, t)
                : vd(e)
                  ? xp.map(e, t)
                  : gd(e)
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
            return (!1 === oh.useProxies || !1 === n.proxy ? Jv : vv)(e, bp(n), n.name);
        },
        map: function (e, t) {
            var n = pp(t);
            return new Nv(e, bp(n), n.name);
        },
        set: function (e, t) {
            var n = pp(t);
            return new Rv(e, bp(n), n.name);
        },
        object: function (e, t, n) {
            return rg(function () {
                return Bh(
                    !1 === oh.useProxies || !1 === (null == n ? void 0 : n.proxy)
                        ? Mv({}, n)
                        : (function (e, t) {
                              var n, r;
                              return (
                                  ad(),
                                  (e = Mv(e, t)),
                                  null != (r = (n = e[Ld]).proxy_) ? r : (n.proxy_ = new Proxy(e, rv))
                              );
                          })({}, n),
                    e,
                    t,
                );
            });
        },
        ref: jd(vp),
        shallow: jd(gp),
        deep: yp,
        struct: jd(mp),
    },
    xp = Yf(_p, Sp),
    Op = 'computed',
    Ep = Zd(Op),
    Pp = Zd('computed.struct', { equals: Md.structural }),
    Cp = function (e, t) {
        if (Rd(t)) return Ep.decorate_20223_(e, t);
        if (ud(t)) return Td(e, t, Ep);
        if (cd(e)) return jd(Zd(Op, e));
        var n = cd(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new Wp(n));
    };
(Object.assign(Cp, Ep), (Cp.struct = jd(Pp)));
var Ap,
    Np = 0,
    jp = 1,
    Tp = null != (wp = null == (kp = Xf(function () {}, 'name')) ? void 0 : kp.configurable) && wp,
    Rp = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
function Lp(e, t, n, r) {
    function a() {
        return zp(e, n, t, r || this, arguments);
    }
    return (
        void 0 === n && (n = !1),
        (a.isMobxAction = !0),
        (a.toString = function () {
            return t.toString();
        }),
        Tp && ((Rp.value = e), Zf(a, 'name', Rp)),
        a
    );
}
function zp(e, t, n, r, a) {
    var i = (function (e, t, n, r) {
        var a = !1,
            i = 0,
            o = oh.trackingDerivation,
            l = !t || !o;
        ch();
        var u = oh.allowStateChanges;
        l && (Zp(), (u = Ip(!0)));
        var s = eh(!0),
            c = {
                runAsAction_: l,
                prevDerivation_: o,
                prevAllowStateChanges_: u,
                prevAllowStateReads_: s,
                notifySpy_: a,
                startTime_: i,
                actionId_: jp++,
                parentActionId_: Np,
            };
        return ((Np = c.actionId_), c);
    })(0, t);
    try {
        return n.apply(r, a);
    } catch (o) {
        throw ((i.error_ = o), o);
    } finally {
        !(function (e) {
            Np !== e.actionId_ && qf(30);
            ((Np = e.parentActionId_), void 0 !== e.error_ && (oh.suppressReactionErrors = !0));
            (Dp(e.prevAllowStateChanges_), th(e.prevAllowStateReads_), fh(), e.runAsAction_ && Jp(e.prevDerivation_));
            oh.suppressReactionErrors = !1;
        })(i);
    }
}
function Ip(e) {
    var t = oh.allowStateChanges;
    return ((oh.allowStateChanges = e), t);
}
function Dp(e) {
    oh.allowStateChanges = e;
}
Ap = Symbol.toPrimitive;
var Mp,
    Vp = (function (e) {
        function t(t, n, r, a, i) {
            var o;
            return (
                void 0 === r && (r = 'ObservableValue'),
                void 0 === i && (i = Md.default),
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
                (o.equals = i),
                (o.value_ = n(t, void 0, r)),
                o
            );
        }
        Od(t, e);
        var n = t.prototype;
        return (
            (n.dehanceValue = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
                (this.value_, (e = this.prepareNewValue_(e)) !== oh.UNCHANGED && this.setNewValue_(e));
            }),
            (n.prepareNewValue_ = function (e) {
                if (av(this)) {
                    var t = ov(this, { object: this, type: dv, newValue: e });
                    if (!t) return oh.UNCHANGED;
                    e = t.newValue;
                }
                return (
                    (e = this.enhancer(e, this.value_, this.name_)),
                    this.equals(this.value_, e) ? oh.UNCHANGED : e
                );
            }),
            (n.setNewValue_ = function (e) {
                var t = this.value_;
                ((this.value_ = e),
                    this.reportChanged(),
                    lv(this) && sv(this, { type: dv, object: this, newValue: e, oldValue: t }));
            }),
            (n.get = function () {
                return (this.reportObserved(), this.dehanceValue(this.value_));
            }),
            (n.intercept_ = function (e) {
                return iv(this, e);
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
                    uv(this, e)
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
    })(zd);
Mp = Symbol.toPrimitive;
var Fp,
    Up,
    Bp,
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
                (this.value_ = new Kp(null)),
                (this.name_ = void 0),
                (this.triggeredBy_ = void 0),
                (this.isComputing_ = !1),
                (this.isRunningSetter_ = !1),
                (this.derivation = void 0),
                (this.setter_ = void 0),
                (this.isTracing_ = Bp.NONE),
                (this.scope_ = void 0),
                (this.equals_ = void 0),
                (this.requiresReaction_ = void 0),
                (this.keepAlive_ = void 0),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                e.get || qf(31),
                (this.derivation = e.get),
                (this.name_ = e.name || 'ComputedValue'),
                e.set && (this.setter_ = Lp('ComputedValue-setter', e.set)),
                (this.equals_ = e.equals || (e.compareStructural || e.struct ? Md.structural : Md.default)),
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
                    (this.isComputing_ && qf(32, this.name_, this.derivation),
                    0 !== oh.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                ) {
                    if ((dh(this), Gp(this))) {
                        var e = oh.trackingContext;
                        (this.keepAlive_ && !e && (oh.trackingContext = this),
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
                            (oh.trackingContext = e));
                    }
                } else Gp(this) && (this.warnAboutUntrackedRead_(), ch(), (this.value_ = this.computeValue_(!1)), fh());
                var t = this.value_;
                if (qp(t)) throw t.cause;
                return t;
            }),
            (t.set = function (e) {
                if (this.setter_) {
                    (this.isRunningSetter_ && qf(33, this.name_), (this.isRunningSetter_ = !0));
                    try {
                        this.setter_.call(this.scope_, e);
                    } finally {
                        this.isRunningSetter_ = !1;
                    }
                } else qf(34, this.name_);
            }),
            (t.trackAndCompute = function () {
                var e = this.value_,
                    t = this.dependenciesState_ === Fp.NOT_TRACKING_,
                    n = this.computeValue_(!0),
                    r = t || qp(e) || qp(n) || !this.equals_(e, n);
                return (r && (this.value_ = n), r);
            }),
            (t.computeValue_ = function (e) {
                this.isComputing_ = !0;
                var t,
                    n = Ip(!1);
                if (e) t = Qp(this, this.derivation, this.scope_);
                else if (!0 === oh.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                else
                    try {
                        t = this.derivation.call(this.scope_);
                    } catch (r) {
                        t = new Kp(r);
                    }
                return (Dp(n), (this.isComputing_ = !1), t);
            }),
            (t.suspend_ = function () {
                this.keepAlive_ || (Yp(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
                var n = this,
                    r = !0,
                    a = void 0;
                return (function (e, t) {
                    var n, r, a, i, o;
                    void 0 === t && (t = td);
                    var l,
                        u = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun';
                    if (t.scheduler || t.delay) {
                        var s = Th(t),
                            c = !1;
                        l = new hh(
                            u,
                            function () {
                                c ||
                                    ((c = !0),
                                    s(function () {
                                        ((c = !1), l.isDisposed_ || l.track(f));
                                    }));
                            },
                            t.onError,
                            t.requiresObservable,
                        );
                    } else
                        l = new hh(
                            u,
                            function () {
                                this.track(f);
                            },
                            t.onError,
                            t.requiresObservable,
                        );
                    function f() {
                        e(l);
                    }
                    (null != (a = t) && null != (i = a.signal) && i.aborted) || l.schedule_();
                    return l.getDisposer_(null == (o = t) ? void 0 : o.signal);
                })(function () {
                    var i = n.get();
                    if (!r || t) {
                        var o = Zp();
                        (e({
                            observableKind: 'computed',
                            debugObjectName: n.name_,
                            type: dv,
                            object: n,
                            newValue: i,
                            oldValue: a,
                        }),
                            Jp(o));
                    }
                    ((r = !1), (a = i));
                });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
                return this.name_ + '[' + this.derivation.toString() + ']';
            }),
            (t.valueOf = function () {
                return bd(this.get());
            }),
            (t[Mp] = function () {
                return this.valueOf();
            }),
            e
        );
    })(),
    Hp = hd('ComputedValue', Wp);
(((Up = Fp || (Fp = {}))[(Up.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
    (Up[(Up.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
    (Up[(Up.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
    (Up[(Up.STALE_ = 2)] = 'STALE_'),
    (($p = Bp || (Bp = {}))[($p.NONE = 0)] = 'NONE'),
    ($p[($p.LOG = 1)] = 'LOG'),
    ($p[($p.BREAK = 2)] = 'BREAK'));
var Kp = function (e) {
    ((this.cause = void 0), (this.cause = e));
};
function qp(e) {
    return e instanceof Kp;
}
function Gp(e) {
    switch (e.dependenciesState_) {
        case Fp.UP_TO_DATE_:
            return !1;
        case Fp.NOT_TRACKING_:
        case Fp.STALE_:
            return !0;
        case Fp.POSSIBLY_STALE_:
            for (var t = eh(!0), n = Zp(), r = e.observing_, a = r.length, i = 0; i < a; i++) {
                var o = r[i];
                if (Hp(o)) {
                    if (oh.disableErrorBoundaries) o.get();
                    else
                        try {
                            o.get();
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
        (e.runId_ = ++oh.runId));
    var a,
        i = oh.trackingDerivation;
    if (((oh.trackingDerivation = e), oh.inBatch++, !0 === oh.disableErrorBoundaries)) a = t.call(n);
    else
        try {
            a = t.call(n);
        } catch (o) {
            a = new Kp(o);
        }
    return (
        oh.inBatch--,
        (oh.trackingDerivation = i),
        (function (e) {
            for (
                var t = e.observing_,
                    n = (e.observing_ = e.newObserving_),
                    r = Fp.UP_TO_DATE_,
                    a = 0,
                    i = e.unboundDepsCount_,
                    o = 0;
                o < i;
                o++
            ) {
                var l = n[o];
                (0 === l.diffValue_ && ((l.diffValue_ = 1), a !== o && (n[a] = l), a++),
                    l.dependenciesState_ > r && (r = l.dependenciesState_));
            }
            ((n.length = a), (e.newObserving_ = null), (i = t.length));
            for (; i--; ) {
                var u = t[i];
                (0 === u.diffValue_ && uh(u, e), (u.diffValue_ = 0));
            }
            for (; a--; ) {
                var s = n[a];
                1 === s.diffValue_ && ((s.diffValue_ = 0), lh(s, e));
            }
            r !== Fp.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        th(r),
        a
    );
}
function Yp(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) uh(t[n], e);
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
    var e = oh.trackingDerivation;
    return ((oh.trackingDerivation = null), e);
}
function Jp(e) {
    oh.trackingDerivation = e;
}
function eh(e) {
    var t = oh.allowStateReads;
    return ((oh.allowStateReads = e), t);
}
function th(e) {
    oh.allowStateReads = e;
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
    ah = !0,
    ih = !1,
    oh = (function () {
        var e = Qf();
        return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ah = !1),
            e.__mobxGlobals && e.__mobxGlobals.version !== new rh().version && (ah = !1),
            ah
                ? e.__mobxGlobals
                    ? ((e.__mobxInstanceCount += 1),
                      e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                      e.__mobxGlobals)
                    : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new rh()))
                : (setTimeout(function () {
                      ih || qf(35);
                  }, 1),
                  new rh())
        );
    })();
function lh(e, t) {
    (e.observers_.add(t),
        e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_));
}
function uh(e, t) {
    (e.observers_.delete(t), 0 === e.observers_.size && sh(e));
}
function sh(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), oh.pendingUnobservations.push(e));
}
function ch() {
    oh.inBatch++;
}
function fh() {
    if (0 == --oh.inBatch) {
        mh();
        for (var e = oh.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            ((n.isPendingUnobservation_ = !1),
                0 === n.observers_.size &&
                    (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof Wp && n.suspend_()));
        }
        oh.pendingUnobservations = [];
    }
}
function dh(e) {
    var t = oh.trackingDerivation;
    return null !== t
        ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ && oh.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
          e.isBeingObserved_)
        : (0 === e.observers_.size && oh.inBatch > 0 && sh(e), !1);
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
                (this.isTracing_ = Bp.NONE),
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
                this.isScheduled_ || ((this.isScheduled_ = !0), oh.pendingReactions.push(this), mh());
            }),
            (t.isScheduled = function () {
                return this.isScheduled_;
            }),
            (t.runReaction_ = function () {
                if (!this.isDisposed_) {
                    (ch(), (this.isScheduled_ = !1));
                    var e = oh.trackingContext;
                    if (((oh.trackingContext = this), Gp(this))) {
                        this.isTrackPending_ = !0;
                        try {
                            this.onInvalidate_();
                        } catch (t) {
                            this.reportExceptionInDerivation_(t);
                        }
                    }
                    ((oh.trackingContext = e), fh());
                }
            }),
            (t.track = function (e) {
                if (!this.isDisposed_) {
                    (ch(), (this.isRunning_ = !0));
                    var t = oh.trackingContext;
                    oh.trackingContext = this;
                    var n = Qp(this, e, void 0);
                    ((oh.trackingContext = t),
                        (this.isRunning_ = !1),
                        (this.isTrackPending_ = !1),
                        this.isDisposed_ && Yp(this),
                        qp(n) && this.reportExceptionInDerivation_(n.cause),
                        fh());
                }
            }),
            (t.reportExceptionInDerivation_ = function (e) {
                var t = this;
                if (this.errorHandler_) this.errorHandler_(e, this);
                else {
                    if (oh.disableErrorBoundaries) throw e;
                    var n = "[mobx] uncaught error in '" + this + "'";
                    (oh.suppressReactionErrors || console.error(n, e),
                        oh.globalReactionErrorHandlers.forEach(function (n) {
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
    gh = function (e) {
        return e();
    };
function mh() {
    oh.inBatch > 0 || oh.isRunningReactions || gh(yh);
}
function yh() {
    oh.isRunningReactions = !0;
    for (var e = oh.pendingReactions, t = 0; e.length > 0; ) {
        ++t === vh && (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, a = n.length; r < a; r++) n[r].runReaction_();
    }
    oh.isRunningReactions = !1;
}
var bh = hd('Reaction', hh);
var _h = 'action',
    wh = 'autoAction',
    kh = '<unnamed action>',
    Sh = Bd(_h),
    xh = Bd('action.bound', { bound: !0 }),
    Oh = Bd(wh, { autoAction: !0 }),
    Eh = Bd('autoAction.bound', { autoAction: !0, bound: !0 });
function Ph(e) {
    return function (t, n) {
        return ld(t)
            ? Lp(t.name || kh, t, e)
            : ld(n)
              ? Lp(t, n, e)
              : Rd(n)
                ? (e ? Oh : Sh).decorate_20223_(t, n)
                : ud(n)
                  ? Td(t, n, e ? Oh : Sh)
                  : ud(t)
                    ? jd(Bd(e ? wh : _h, { name: t, autoAction: e }))
                    : void 0;
    };
}
var Ch = Ph(!1);
Object.assign(Ch, Sh);
var Ah = Ph(!0);
function Nh(e) {
    return ld(e) && !0 === e.isMobxAction;
}
(Object.assign(Ah, Oh), (Ch.bound = jd(xh)), (Ah.bound = jd(Eh)));
var jh = function (e) {
    return e();
};
function Th(e) {
    return e.scheduler
        ? e.scheduler
        : e.delay
          ? function (t) {
                return setTimeout(t, e.delay);
            }
          : jh;
}
function Rh(e, t, n) {
    var r, a, i, o;
    void 0 === n && (n = td);
    var l,
        u,
        s,
        c,
        f = null != (r = n.name) ? r : 'Reaction',
        d = Ch(
            f,
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
        h = Th(n),
        v = !0,
        g = !1,
        m = n.compareStructural ? Md.structural : n.equals || Md.default,
        y = new hh(
            f,
            function () {
                v || p ? b() : g || ((g = !0), h(b));
            },
            n.onError,
            n.requiresObservable,
        );
    function b() {
        if (((g = !1), !y.isDisposed_)) {
            var t = !1;
            (y.track(function () {
                var n = (function (e, t) {
                    var n = Ip(e);
                    try {
                        return t();
                    } finally {
                        Dp(n);
                    }
                })(!1, function () {
                    return e(y);
                });
                ((t = v || !m(s, n)), (c = s), (s = n));
            }),
                ((v && n.fireImmediately) || (!v && t)) && d(s, c, y),
                (v = !1));
        }
    }
    return (
        (null != (a = n) && null != (i = a.signal) && i.aborted) || y.schedule_(),
        y.getDisposer_(null == (o = n) ? void 0 : o.signal)
    );
}
var Lh = 'onBO',
    zh = 'onBUO';
function Ih(e, t, n) {
    return Dh(zh, e, t, n);
}
function Dh(e, t, n, r) {
    var a = eg(t),
        i = ld(r) ? r : n,
        o = e + 'L';
    return (
        a[o] ? a[o].add(i) : (a[o] = new Set([i])),
        function () {
            var e = a[o];
            e && (e.delete(i), 0 === e.size && delete a[o]);
        }
    );
}
var Mh = 'never',
    Vh = 'always',
    Fh = 'observed';
function Uh(e) {
    !0 === e.isolateGlobalState &&
        (function () {
            if (((oh.pendingReactions.length || oh.inBatch || oh.isRunningReactions) && qf(36), (ih = !0), ah)) {
                var e = Qf();
                (0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0), (oh = new rh()));
            }
        })();
    var t,
        n,
        r = e.useProxies,
        a = e.enforceActions;
    if (
        (void 0 !== r && (oh.useProxies = r === Vh || (r !== Mh && 'undefined' != typeof Proxy)),
        'ifavailable' === r && (oh.verifyProxies = !0),
        void 0 !== a)
    ) {
        var i = a === Vh ? Vh : a === Fh;
        ((oh.enforceActions = i), (oh.allowStateChanges = !0 !== i && i !== Vh));
    }
    ([
        'computedRequiresReaction',
        'reactionRequiresObservable',
        'observableRequiresReaction',
        'disableErrorBoundaries',
        'safeDescriptors',
    ].forEach(function (t) {
        t in e && (oh[t] = !!e[t]);
    }),
        (oh.allowStateReads = !oh.observableRequiresReaction),
        e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = gh),
            (gh = function (e) {
                return t(function () {
                    return n(e);
                });
            })));
}
function Bh(e, t, n, r) {
    var a = wd(t);
    return (
        rg(function () {
            var t = Mv(e, r)[Ld];
            yd(a).forEach(function (e) {
                t.extend_(e, a[e], !n || !(e in n) || n[e]);
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
var Kh = qd('flow'),
    qh = qd('flow.bound', { bound: !0 }),
    Gh = Object.assign(function (e, t) {
        if (Rd(t)) return Kh.decorate_20223_(e, t);
        if (ud(t)) return Td(e, t, Kh);
        var n = e,
            r = n.name || '<unnamed flow>',
            a = function () {
                var e,
                    t = arguments,
                    a = ++Wh,
                    i = Ch(r + ' - runid: ' + a + ' - init', n).apply(this, t),
                    o = void 0,
                    l = new Promise(function (t, n) {
                        var l = 0;
                        function u(e) {
                            var t;
                            o = void 0;
                            try {
                                t = Ch(r + ' - runid: ' + a + ' - yield ' + l++, i.next).call(i, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function s(e) {
                            var t;
                            o = void 0;
                            try {
                                t = Ch(r + ' - runid: ' + a + ' - yield ' + l++, i.throw).call(i, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function c(e) {
                            if (!ld(null == e ? void 0 : e.then))
                                return e.done ? t(e.value) : (o = Promise.resolve(e.value)).then(u, s);
                            e.then(c, n);
                        }
                        ((e = n), u(void 0));
                    });
                return (
                    (l.cancel = Ch(r + ' - runid: ' + a + ' - cancel', function () {
                        try {
                            o && Qh(o);
                            var t = i.return(void 0),
                                n = Promise.resolve(t.value);
                            (n.then(od, od), Qh(n), e(new Hh()));
                        } catch (r) {
                            e(r);
                        }
                    })),
                    l
                );
            };
        return ((a.isMobXFlow = !0), a);
    }, Kh);
function Qh(e) {
    ld(e.cancel) && e.cancel();
}
function Yh(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function Xh(e, t) {
    if (void 0 === t) return Hp(e);
    if (!1 === Uv(e)) return !1;
    if (!e[Ld].values_.has(t)) return !1;
    var n = eg(e, t);
    return Hp(n);
}
function Zh(e, t) {
    return Xh(e, t);
}
function Jh(e) {
    return (function (e, t) {
        return !!e && (Uv(e) || !!e[Ld] || Id(e) || bh(e) || Hp(e));
    })(e);
}
function ev(e, t, n, r) {
    return ld(n)
        ? (function (e, t, n, r) {
              return tg(e, t).observe_(n, r);
          })(e, t, n, r)
        : (function (e, t, n) {
              return tg(e).observe_(t, n);
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
Gh.bound = jd(qh);
var rv = {
    has: function (e, t) {
        return nv(e).has_(t);
    },
    get: function (e, t) {
        return nv(e).get_(t);
    },
    set: function (e, t, n) {
        var r;
        return !!ud(t) && (null == (r = nv(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
        var n;
        return !!ud(t) && (null == (n = nv(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
        var r;
        return null == (r = nv(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
        return nv(e).ownKeys_();
    },
    preventExtensions: function (e) {
        qf(13);
    },
};
function av(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
}
function iv(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
        n.push(t),
        id(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function ov(e, t) {
    var n = Zp();
    try {
        for (
            var r = [].concat(e.interceptors_ || []), a = 0, i = r.length;
            a < i && ((t = r[a](t)) && !t.type && qf(14), t);
            a++
        );
        return t;
    } finally {
        Jp(n);
    }
}
function lv(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
}
function uv(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
        n.push(t),
        id(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function sv(e, t) {
    var n = Zp(),
        r = e.changeListeners_;
    if (r) {
        for (var a = 0, i = (r = r.slice()).length; a < i; a++) r[a](t);
        Jp(n);
    }
}
function cv(e, t, n) {
    return (
        rg(function () {
            var r = Mv(e, n)[Ld];
            (null != t ||
                (t = (function (e) {
                    return (_d(e, Nd) || dd(e, Nd, xd({}, e[Nd])), e[Nd]);
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
                    ? _d(gv, t)
                        ? gv[t]
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
            qf(15);
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
                (this.atom_ = new zd(e)),
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
                return iv(this, e);
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
                    uv(this, e)
                );
            }),
            (t.getArrayLength_ = function () {
                return (this.atom_.reportObserved(), this.values_.length);
            }),
            (t.setArrayLength_ = function (e) {
                ('number' != typeof e || isNaN(e) || e < 0) && qf('Out of range: ' + e);
                var t = this.values_.length;
                if (e !== t)
                    if (e > t) {
                        for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
                        this.spliceWithArray_(t, 0, n);
                    } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
                (e !== this.lastKnownLength_ && qf(16),
                    (this.lastKnownLength_ += t),
                    this.legacyMode_ && t > 0 && Zv(e + t + 1));
            }),
            (t.spliceWithArray_ = function (e, t, n) {
                var r = this;
                this.atom_;
                var a = this.values_.length;
                if (
                    (void 0 === e ? (e = 0) : e > a ? (e = a) : e < 0 && (e = Math.max(0, a + e)),
                    (t = 1 === arguments.length ? a - e : null == t ? 0 : Math.max(0, Math.min(t, a - e))),
                    void 0 === n && (n = ed),
                    av(this))
                ) {
                    var i = ov(this, { object: this.proxy_, type: fv, index: e, removedCount: t, added: n });
                    if (!i) return ed;
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
                    var o = n.length - t;
                    this.updateArrayLength_(a, o);
                }
                var l = this.spliceItemsIntoValues_(e, t, n);
                return ((0 === t && 0 === n.length) || this.notifyArraySplice_(e, n, l), this.dehanceValues_(l));
            }),
            (t.spliceItemsIntoValues_ = function (e, t, n) {
                var r;
                if (n.length < 1e4) return (r = this.values_).splice.apply(r, [e, t].concat(n));
                var a = this.values_.slice(e, e + t),
                    i = this.values_.slice(e + t);
                this.values_.length += n.length - t;
                for (var o = 0; o < n.length; o++) this.values_[e + o] = n[o];
                for (var l = 0; l < i.length; l++) this.values_[e + n.length + l] = i[l];
                return a;
            }),
            (t.notifyArrayChildUpdate_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    a = lv(this),
                    i =
                        a || r
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
                (this.atom_.reportChanged(), a && sv(this, i));
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    a = lv(this),
                    i =
                        a || r
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
                (this.atom_.reportChanged(), a && sv(this, i));
            }),
            (t.get_ = function (e) {
                if (!(this.legacyMode_ && e >= this.values_.length))
                    return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]));
                console.warn('[mobx] Out of bounds read: ' + e);
            }),
            (t.set_ = function (e, t) {
                var n = this.values_;
                if ((this.legacyMode_ && e > n.length && qf(17, e, n.length), e < n.length)) {
                    this.atom_;
                    var r = n[e];
                    if (av(this)) {
                        var a = ov(this, { type: dv, object: this.proxy_, index: e, newValue: t });
                        if (!a) return;
                        t = a.newValue;
                    }
                    (t = this.enhancer_(t, r)) !== r && ((n[e] = t), this.notifyArrayChildUpdate_(e, t, r));
                } else {
                    for (var i = new Array(e + 1 - n.length), o = 0; o < i.length - 1; o++) i[o] = void 0;
                    ((i[i.length - 1] = t), this.spliceWithArray_(n.length, 0, i));
                }
            }),
            e
        );
    })();
function vv(e, t, n, r) {
    return (
        void 0 === n && (n = 'ObservableArray'),
        void 0 === r && (r = !1),
        ad(),
        rg(function () {
            var a = new hv(n, t, r, !1);
            pd(a.values_, Ld, a);
            var i = new Proxy(a.values_, pv);
            return ((a.proxy_ = i), e && e.length && a.spliceWithArray_(0, 0, e), i);
        })
    );
}
var gv = {
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
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
        var i = this[Ld];
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
        return (oh.trackingDerivation && qf(37, 'reverse'), this.replace(this.slice().reverse()), this);
    },
    sort: function () {
        oh.trackingDerivation && qf(37, 'sort');
        var e = this.slice();
        return (e.sort.apply(e, arguments), this.replace(e), this);
    },
    remove: function (e) {
        var t = this[Ld],
            n = t.dehanceValues_(t.values_).indexOf(e);
        return n > -1 && (this.splice(n, 1), !0);
    },
};
function mv(e, t) {
    'function' == typeof Array.prototype[e] && (gv[e] = t(e));
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
            a = this[Ld];
        return (
            a.atom_.reportObserved(),
            a.dehanceValues_(a.values_)[e](function (e, a) {
                return t.call(n, e, a, r);
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
            a = arguments[0];
        return (
            (arguments[0] = function (e, n, r) {
                return a(e, n, r, t);
            }),
            r[e].apply(r, arguments)
        );
    };
}
(mv('at', yv),
    mv('concat', yv),
    mv('flat', yv),
    mv('includes', yv),
    mv('indexOf', yv),
    mv('join', yv),
    mv('lastIndexOf', yv),
    mv('slice', yv),
    mv('toString', yv),
    mv('toLocaleString', yv),
    mv('toSorted', yv),
    mv('toSpliced', yv),
    mv('with', yv),
    mv('every', bv),
    mv('filter', bv),
    mv('find', bv),
    mv('findIndex', bv),
    mv('findLast', bv),
    mv('findLastIndex', bv),
    mv('flatMap', bv),
    mv('forEach', bv),
    mv('map', bv),
    mv('some', bv),
    mv('toReversed', bv),
    mv('reduce', _v),
    mv('reduceRight', _v));
var wv,
    kv,
    Sv = hd('ObservableArrayAdministration', hv);
function xv(e) {
    return sd(e) && Sv(e[Ld]);
}
var Ov = {},
    Ev = 'add',
    Pv = 'delete';
((wv = Symbol.iterator), (kv = Symbol.toStringTag));
var Cv,
    Av,
    Nv = (function () {
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
                ld(Map) || qf(18),
                rg(function () {
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
                if (!oh.trackingDerivation) return this.has_(e);
                var n = this.hasMap_.get(e);
                if (!n) {
                    var r = (n = new Vp(this.has_(e), Fd, 'ObservableMap.key?', !1));
                    (this.hasMap_.set(e, r),
                        Ih(r, function () {
                            return t.hasMap_.delete(e);
                        }));
                }
                return n.get();
            }),
            (t.set = function (e, t) {
                var n = this.has_(e);
                if (av(this)) {
                    var r = ov(this, { type: n ? dv : Ev, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, av(this)) && !ov(this, { type: Pv, object: this, name: e })) return !1;
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
                        n && sv(this, r),
                        !0
                    );
                }
                return !1;
            }),
            (t.updateValue_ = function (e, t) {
                var n = this.data_.get(e);
                if ((t = n.prepareNewValue_(t)) !== oh.UNCHANGED) {
                    var r = lv(this),
                        a = r
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
                    (n.setNewValue_(t), r && sv(this, a));
                }
            }),
            (t.addValue_ = function (e, t) {
                var n = this;
                (this.keysAtom_,
                    tv(function () {
                        var r,
                            a = new Vp(t, n.enhancer_, 'ObservableMap.key', !1);
                        (n.data_.set(e, a),
                            (t = a.value_),
                            null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                            n.keysAtom_.reportChanged());
                    }));
                var r = lv(this),
                    a = r
                        ? {
                              observableKind: 'map',
                              debugObjectName: this.name_,
                              type: Ev,
                              object: this,
                              name: e,
                              newValue: t,
                          }
                        : null;
                r && sv(this, a);
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
                return ug({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            a = n.value;
                        return { done: r, value: r ? void 0 : e.get(a) };
                    },
                });
            }),
            (t.entries = function () {
                var e = this,
                    t = this.keys();
                return ug({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            a = n.value;
                        return { done: r, value: r ? void 0 : [a, e.get(a)] };
                    },
                });
            }),
            (t[wv] = function () {
                return this.entries();
            }),
            (t.forEach = function (e, t) {
                for (var n, r = Ad(this); !(n = r()).done; ) {
                    var a = n.value,
                        i = a[0],
                        o = a[1];
                    e.call(t, o, i, this);
                }
            }),
            (t.merge = function (e) {
                var t = this;
                return (
                    jv(e) && (e = new Map(e)),
                    tv(function () {
                        cd(e)
                            ? (function (e) {
                                  var t = Object.keys(e);
                                  if (!md) return t;
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
                                ? (e.constructor !== Map && qf(19, e),
                                  e.forEach(function (e, n) {
                                      return t.set(n, e);
                                  }))
                                : null != e && qf(20, e);
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
                                    if (vd(e) || jv(e)) return e;
                                    if (Array.isArray(e)) return new Map(e);
                                    if (cd(e)) {
                                        var t = new Map();
                                        for (var n in e) t.set(n, e[n]);
                                        return t;
                                    }
                                    return qf(21, e);
                                })(e),
                                a = new Map(),
                                i = !1,
                                o = Ad(t.data_.keys());
                            !(n = o()).done;
                        ) {
                            var l = n.value;
                            if (!r.has(l))
                                if (t.delete(l)) i = !0;
                                else {
                                    var u = t.data_.get(l);
                                    a.set(l, u);
                                }
                        }
                        for (var s, c = Ad(r.entries()); !(s = c()).done; ) {
                            var f = s.value,
                                d = f[0],
                                p = f[1],
                                h = t.data_.has(d);
                            if ((t.set(d, p), t.data_.has(d))) {
                                var v = t.data_.get(d);
                                (a.set(d, v), h || (i = !0));
                            }
                        }
                        if (!i)
                            if (t.data_.size !== a.size) t.keysAtom_.reportChanged();
                            else
                                for (var g = t.data_.keys(), m = a.keys(), y = g.next(), b = m.next(); !y.done; ) {
                                    if (y.value !== b.value) {
                                        t.keysAtom_.reportChanged();
                                        break;
                                    }
                                    ((y = g.next()), (b = m.next()));
                                }
                        t.data_ = a;
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
                return uv(this, e);
            }),
            (t.intercept_ = function (e) {
                return iv(this, e);
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
    jv = hd('ObservableMap', Nv);
var Tv = {};
((Cv = Symbol.iterator), (Av = Symbol.toStringTag));
var Rv = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Vd),
                void 0 === n && (n = 'ObservableSet'),
                (this.name_ = void 0),
                (this[Ld] = Tv),
                (this.data_ = new Set()),
                (this.atom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = void 0),
                (this.name_ = n),
                ld(Set) || qf(22),
                (this.enhancer_ = function (e, r) {
                    return t(e, r, n);
                }),
                rg(function () {
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
                    var a = n.value;
                    e.call(t, a, a, this);
                }
            }),
            (t.add = function (e) {
                var t = this;
                if ((this.atom_, av(this)) && !ov(this, { type: Ev, object: this, newValue: e })) return this;
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
                    n && sv(this, r);
                }
                return this;
            }),
            (t.delete = function (e) {
                var t = this;
                if (av(this) && !ov(this, { type: Pv, object: this, oldValue: e })) return !1;
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
                        n && sv(this, r),
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
                return ug({
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
                return ug({
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
                        Array.isArray(e) || gd(e)
                            ? (t.clear(),
                              e.forEach(function (e) {
                                  return t.add(e);
                              }))
                            : null != e && qf('Cannot initialize set from ' + e);
                    }),
                    this
                );
            }),
            (t.observe_ = function (e, t) {
                return uv(this, e);
            }),
            (t.intercept_ = function (e) {
                return iv(this, e);
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
    zv = Object.create(null),
    Iv = 'remove',
    Dv = (function () {
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
                (this.keysAtom_ = new zd('ObservableObject.keys')),
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
                if (av(this)) {
                    var r = ov(this, { type: dv, object: this.proxy_ || this.target_, name: e, newValue: t });
                    if (!r) return null;
                    t = r.newValue;
                }
                if ((t = n.prepareNewValue_(t)) !== oh.UNCHANGED) {
                    var a = lv(this),
                        i = a
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
                    (n.setNewValue_(t), a && sv(this, i));
                }
                return !0;
            }),
            (t.get_ = function (e) {
                return (oh.trackingDerivation && !_d(this.target_, e) && this.has_(e), this.target_[e]);
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
                if (!oh.trackingDerivation) return e in this.target_;
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
                        if (null != (n = this.target_[Nd]) && n[e]) return;
                        qf(1, t.annotationType_, this.name_ + '.' + e.toString());
                    }
                    for (var r = this.target_; r && r !== Jf; ) {
                        var a = Xf(r, e);
                        if (a) {
                            var i = t.make_(this, e, a, r);
                            if (0 === i) return;
                            if (1 === i) break;
                        }
                        r = Object.getPrototypeOf(r);
                    }
                    Bv(this, t, e);
                }
            }),
            (t.extend_ = function (e, t, n, r) {
                if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                    return this.defineProperty_(e, t, r);
                var a = n.extend_(this, e, t, r);
                return (a && Bv(this, n, e), a);
            }),
            (t.defineProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    ch();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (av(this)) {
                        var a = ov(this, { object: this.proxy_ || this.target_, name: e, type: Ev, newValue: t.value });
                        if (!a) return null;
                        var i = a.newValue;
                        t.value !== i && (t = xd({}, t, { value: i }));
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
                    var a = this.delete_(e);
                    if (!a) return a;
                    if (av(this)) {
                        var i = ov(this, { object: this.proxy_ || this.target_, name: e, type: Ev, newValue: t });
                        if (!i) return null;
                        t = i.newValue;
                    }
                    var o = Fv(e),
                        l = {
                            configurable: !oh.safeDescriptors || this.isPlainObject_,
                            enumerable: !0,
                            get: o.get,
                            set: o.set,
                        };
                    if (r) {
                        if (!Reflect.defineProperty(this.target_, e, l)) return !1;
                    } else Zf(this.target_, e, l);
                    var u = new Vp(t, n, 'ObservableObject.key', !1);
                    (this.values_.set(e, u), this.notifyPropertyAddition_(e, u.value_));
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
                    if (av(this))
                        if (!ov(this, { object: this.proxy_ || this.target_, name: e, type: Ev, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var a = Fv(e),
                        i = {
                            configurable: !oh.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: a.get,
                            set: a.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, i)) return !1;
                    } else Zf(this.target_, e, i);
                    (this.values_.set(e, new Wp(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    fh();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !_d(this.target_, e))) return !0;
                if (av(this) && !ov(this, { object: this.proxy_ || this.target_, name: e, type: Iv })) return null;
                try {
                    var n, r;
                    ch();
                    var a,
                        i = lv(this),
                        o = this.values_.get(e),
                        l = void 0;
                    if (!o && i) l = null == (a = Xf(this.target_, e)) ? void 0 : a.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (o && (this.values_.delete(e), o instanceof Vp && (l = o.value_), ph(o)),
                        this.keysAtom_.reportChanged(),
                        null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
                        i)
                    ) {
                        var u = {
                            type: Iv,
                            observableKind: 'object',
                            object: this.proxy_ || this.target_,
                            debugObjectName: this.name_,
                            oldValue: l,
                            name: e,
                        };
                        (0, i && sv(this, u));
                    }
                } finally {
                    fh();
                }
                return !0;
            }),
            (t.observe_ = function (e, t) {
                return uv(this, e);
            }),
            (t.intercept_ = function (e) {
                return iv(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
                var n,
                    r,
                    a = lv(this);
                if (a) {
                    var i = a
                        ? {
                              type: Ev,
                              observableKind: 'object',
                              debugObjectName: this.name_,
                              object: this.proxy_ || this.target_,
                              name: e,
                              newValue: t,
                          }
                        : null;
                    a && sv(this, i);
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
function Mv(e, t) {
    var n;
    if (_d(e, Ld)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
        a = new Dv(
            e,
            new Map(),
            String(r),
            (function (e) {
                var t;
                return e ? (null != (t = e.defaultDecorator) ? t : up(e)) : void 0;
            })(t),
        );
    return (dd(e, Ld, a), e);
}
var Vv = hd('ObservableObjectAdministration', Dv);
function Fv(e) {
    return (
        zv[e] ||
        (zv[e] = {
            get: function () {
                return this[Ld].getObservablePropValue_(e);
            },
            set: function (t) {
                return this[Ld].setObservablePropValue_(e, t);
            },
        })
    );
}
function Uv(e) {
    return !!sd(e) && Vv(e[Ld]);
}
function Bv(e, t, n) {
    var r;
    null == (r = e.target_[Nd]) || delete r[n];
}
var $v,
    Wv,
    Hv = Yv(0),
    Kv = (function () {
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
    qv = 0,
    Gv = function () {};
(($v = Gv),
    (Wv = Array.prototype),
    Object.setPrototypeOf
        ? Object.setPrototypeOf($v.prototype, Wv)
        : void 0 !== $v.prototype.__proto__
          ? ($v.prototype.__proto__ = Wv)
          : ($v.prototype = Wv));
var Qv = (function (e, t, n) {
    function r(t, n, r, a) {
        var i;
        return (
            void 0 === r && (r = 'ObservableArray'),
            void 0 === a && (a = !1),
            (i = e.call(this) || this),
            rg(function () {
                var e = new hv(r, n, a, !0);
                ((e.proxy_ = Pd(i)),
                    pd(Pd(i), Ld, e),
                    t && t.length && i.spliceWithArray(0, 0, t),
                    Kv && Object.defineProperty(Pd(i), '0', Hv));
            }),
            i
        );
    }
    Od(r, e);
    var a = r.prototype;
    return (
        (a.concat = function () {
            this[Ld].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return Array.prototype.concat.apply(
                this.slice(),
                t.map(function (e) {
                    return xv(e) ? e.slice() : e;
                }),
            );
        }),
        (a[n] = function () {
            var e = this,
                t = 0;
            return ug({
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
})(Gv, Symbol.toStringTag, Symbol.iterator);
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
    if (e > qv) {
        for (var t = qv; t < e + 100; t++) Xv(t);
        qv = e;
    }
}
function Jv(e, t, n) {
    return new Qv(e, t, n);
}
function eg(e, t) {
    if ('object' == typeof e && null !== e) {
        if (xv(e)) return (void 0 !== t && qf(23), e[Ld].atom_);
        if (Lv(e)) return e.atom_;
        if (jv(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return (n || qf(25, t, ng(e)), n);
        }
        if (Uv(e)) {
            if (!t) return qf(26);
            var r = e[Ld].values_.get(t);
            return (r || qf(27, t, ng(e)), r);
        }
        if (Id(e) || Hp(e) || bh(e)) return e;
    } else if (ld(e) && bh(e[Ld])) return e[Ld];
    qf(28);
}
function tg(e, t) {
    return (
        e || qf(29),
        void 0 !== t ? tg(eg(e, t)) : Id(e) || Hp(e) || bh(e) || jv(e) || Lv(e) ? e : e[Ld] ? e[Ld] : void qf(24, e)
    );
}
function ng(e, t) {
    var n;
    if (void 0 !== t) n = eg(e, t);
    else {
        if (Nh(e)) return e.name;
        n = Uv(e) || jv(e) || Lv(e) ? tg(e) : eg(e);
    }
    return n.name_;
}
function rg(e) {
    var t = Zp(),
        n = Ip(!0);
    ch();
    try {
        return e();
    } finally {
        (fh(), Dp(n), Jp(t));
    }
}
(Object.entries(gv).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && dd(Qv.prototype, t, n);
}),
    Zv(1e3));
var ag = Jf.toString;
function ig(e, t, n) {
    return (void 0 === n && (n = -1), og(e, t, n));
}
function og(e, t, n, r, a) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var i = typeof e;
    if ('function' !== i && 'object' !== i && 'object' != typeof t) return !1;
    var o = ag.call(e);
    if (o !== ag.call(t)) return !1;
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
    ((e = lg(e)), (t = lg(t)));
    var l = '[object Array]' === o;
    if (!l) {
        if ('object' != typeof e || 'object' != typeof t) return !1;
        var u = e.constructor,
            s = t.constructor;
        if (
            u !== s &&
            !(ld(u) && u instanceof u && ld(s) && s instanceof s) &&
            'constructor' in e &&
            'constructor' in t
        )
            return !1;
    }
    if (0 === n) return !1;
    (n < 0 && (n = -1), (a = a || []));
    for (var c = (r = r || []).length; c--; ) if (r[c] === e) return a[c] === t;
    if ((r.push(e), a.push(t), l)) {
        if ((c = e.length) !== t.length) return !1;
        for (; c--; ) if (!og(e[c], t[c], n - 1, r, a)) return !1;
    } else {
        var f,
            d = Object.keys(e);
        if (((c = d.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (!_d(t, (f = d[c])) || !og(e[f], t[f], n - 1, r, a)) return !1;
    }
    return (r.pop(), a.pop(), !0);
}
function lg(e) {
    return xv(e) ? e.slice() : vd(e) || jv(e) || gd(e) || Lv(e) ? Array.from(e.entries()) : e;
}
function ug(e) {
    return ((e[Symbol.iterator] = sg), e);
}
function sg() {
    return this;
}
(['Symbol', 'Map', 'Set'].forEach(function (e) {
    void 0 === Qf()[e] && qf("MobX requires global '" + e + "' to be available or polyfilled");
}),
    'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
                return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
            },
            extras: { getDebugName: ng },
            $mobx: Ld,
        }));
var cg = Eg(),
    fg = (e) => kg(e, cg),
    dg = Eg();
fg.write = (e) => kg(e, dg);
var pg = Eg();
fg.onStart = (e) => kg(e, pg);
var hg = Eg();
fg.onFrame = (e) => kg(e, hg);
var vg = Eg();
fg.onFinish = (e) => kg(e, vg);
var gg = [];
fg.setTimeout = (e, t) => {
    const n = fg.now() + t,
        r = () => {
            const e = gg.findIndex((e) => e.cancel == r);
            (~e && gg.splice(e, 1), (_g -= ~e ? 1 : 0));
        },
        a = { time: n, handler: e, cancel: r };
    return (gg.splice(mg(n), 0, a), (_g += 1), Sg(), a);
};
var mg = (e) => ~(~gg.findIndex((t) => t.time > e) || ~gg.length);
((fg.cancel = (e) => {
    (pg.delete(e), hg.delete(e), vg.delete(e), cg.delete(e), dg.delete(e));
}),
    (fg.sync = (e) => {
        ((wg = !0), fg.batchedUpdates(e), (wg = !1));
    }),
    (fg.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            ((t = e), fg.onStart(n));
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                (pg.delete(n), (t = null));
            }),
            r
        );
    }));
var yg = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
((fg.use = (e) => (yg = e)),
    (fg.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (fg.batchedUpdates = (e) => e()),
    (fg.catch = console.error),
    (fg.frameLoop = 'always'),
    (fg.advance = () => {
        'demand' !== fg.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : Og();
    }));
var bg = -1,
    _g = 0,
    wg = !1;
function kg(e, t) {
    wg ? (t.delete(e), e(0)) : (t.add(e), Sg());
}
function Sg() {
    bg < 0 && ((bg = 0), 'demand' !== fg.frameLoop && yg(xg));
}
function xg() {
    ~bg && (yg(xg), fg.batchedUpdates(Og));
}
function Og() {
    const e = bg;
    bg = fg.now();
    const t = mg(bg);
    (t && (Pg(gg.splice(0, t), (e) => e.handler()), (_g -= t)),
        _g ? (pg.flush(), cg.flush(e ? Math.min(64, bg - e) : 16.667), hg.flush(), dg.flush(), vg.flush()) : (bg = -1));
}
function Eg() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            ((_g += t != e || e.has(n) ? 0 : 1), e.add(n));
        },
        delete: (n) => ((_g -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (_g -= t.size), Pg(t, (t) => t(n) && e.add(t)), (_g += e.size), (t = e));
        },
    };
}
function Pg(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            fg.catch(n);
        }
    });
}
var Cg = Object.defineProperty,
    Ag = {};
((e, t) => {
    for (var n in t) Cg(e, n, { get: t[n], enumerable: !0 });
})(Ag, {
    assign: () => Fg,
    colors: () => Dg,
    createStringInterpolator: () => Rg,
    skipAnimation: () => Mg,
    to: () => Lg,
    willAdvance: () => Vg,
});
var Ng = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
var jg = (e, t) => e.forEach(t);
function Tg(e, t, n) {
    if (Ng.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Rg,
    Lg,
    zg = (e) => (Ng.und(e) ? [] : Ng.arr(e) ? e : [e]),
    Ig = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    Dg = null,
    Mg = !1,
    Vg = function () {},
    Fg = (e) => {
        (e.to && (Lg = e.to),
            e.now && (fg.now = e.now),
            void 0 !== e.colors && (Dg = e.colors),
            null != e.skipAnimation && (Mg = e.skipAnimation),
            e.createStringInterpolator && (Rg = e.createStringInterpolator),
            e.requestAnimationFrame && fg.use(e.requestAnimationFrame),
            e.batchedUpdates && (fg.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (Vg = e.willAdvance),
            e.frameLoop && (fg.frameLoop = e.frameLoop));
    },
    Ug = new Set(),
    Bg = [],
    $g = [],
    Wg = 0,
    Hg = {
        get idle() {
            return !Ug.size && !Bg.length;
        },
        start(e) {
            Wg > e.priority ? (Ug.add(e), fg.onStart(Kg)) : (qg(e), fg(Qg));
        },
        advance: Qg,
        sort(e) {
            if (Wg) fg.onFrame(() => Hg.sort(e));
            else {
                const t = Bg.indexOf(e);
                ~t && (Bg.splice(t, 1), Gg(e));
            }
        },
        clear() {
            ((Bg = []), Ug.clear());
        },
    };
function Kg() {
    (Ug.forEach(qg), Ug.clear(), fg(Qg));
}
function qg(e) {
    Bg.includes(e) || Gg(e);
}
function Gg(e) {
    Bg.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(Bg, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function Qg(e) {
    const t = $g;
    for (let n = 0; n < Bg.length; n++) {
        const r = Bg[n];
        ((Wg = r.priority), r.idle || (Vg(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((Wg = 0), (($g = Bg).length = 0), (Bg = t).length > 0);
}
var Yg = '[-+]?\\d*\\.?\\d+',
    Xg = Yg + '%';
function Zg(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var Jg = new RegExp('rgb' + Zg(Yg, Yg, Yg)),
    em = new RegExp('rgba' + Zg(Yg, Yg, Yg, Yg)),
    tm = new RegExp('hsl' + Zg(Yg, Xg, Xg)),
    nm = new RegExp('hsla' + Zg(Yg, Xg, Xg, Yg)),
    rm = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    am = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    im = /^#([0-9a-fA-F]{6})$/,
    om = /^#([0-9a-fA-F]{8})$/;
function lm(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function um(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - r,
        i = lm(a, r, e + 1 / 3),
        o = lm(a, r, e),
        l = lm(a, r, e - 1 / 3);
    return (Math.round(255 * i) << 24) | (Math.round(255 * o) << 16) | (Math.round(255 * l) << 8);
}
function sm(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function cm(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function fm(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function dm(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function pm(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = im.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : Dg && void 0 !== Dg[e]
                ? Dg[e]
                : (t = Jg.exec(e))
                  ? ((sm(t[1]) << 24) | (sm(t[2]) << 16) | (sm(t[3]) << 8) | 255) >>> 0
                  : (t = em.exec(e))
                    ? ((sm(t[1]) << 24) | (sm(t[2]) << 16) | (sm(t[3]) << 8) | fm(t[4])) >>> 0
                    : (t = rm.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = om.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = am.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = tm.exec(e))
                            ? (255 | um(cm(t[1]), dm(t[2]), dm(t[3]))) >>> 0
                            : (t = nm.exec(e))
                              ? (um(cm(t[1]), dm(t[2]), dm(t[3])) | fm(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var hm = (e, t, n) => {
    if (Ng.fun(e)) return e;
    if (Ng.arr(e)) return hm({ range: e, output: t, extrapolate: n });
    if (Ng.str(e.output[0])) return Rg(e);
    const r = e,
        a = r.output,
        i = r.range || [0, 1],
        o = r.extrapolateLeft || r.extrapolate || 'extend',
        l = r.extrapolateRight || r.extrapolate || 'extend',
        u = r.easing || ((e) => e);
    return (e) => {
        const t = (function (e, t) {
            for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
            return n - 1;
        })(e, i);
        return (function (e, t, n, r, a, i, o, l, u) {
            let s = u ? u(e) : e;
            if (s < t) {
                if ('identity' === o) return s;
                'clamp' === o && (s = t);
            }
            if (s > n) {
                if ('identity' === l) return s;
                'clamp' === l && (s = n);
            }
            if (r === a) return r;
            if (t === n) return e <= t ? r : a;
            t === -1 / 0 ? (s = -s) : n === 1 / 0 ? (s -= t) : (s = (s - t) / (n - t));
            ((s = i(s)), r === -1 / 0 ? (s = -s) : a === 1 / 0 ? (s += r) : (s = s * (a - r) + r));
            return s;
        })(e, i[t], i[t + 1], a[t], a[t + 1], u, o, l, r.map);
    };
};
var vm = Symbol.for('FluidValue.get'),
    gm = Symbol.for('FluidValue.observers'),
    mm = (e) => Boolean(e && e[vm]),
    ym = (e) => (e && e[vm] ? e[vm]() : e);
function bm(e, t) {
    const n = e[gm];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
var _m = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            wm(this, e);
        }
    },
    wm = (e, t) => Om(e, vm, t);
function km(e, t) {
    if (e[vm]) {
        let n = e[gm];
        (n || Om(e, gm, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function Sm(e, t) {
    const n = e[gm];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[gm] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
var xm,
    Om = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    Em = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    Pm = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    Cm = new RegExp(`(${Em.source})(%|[a-z]+)`, 'i'),
    Am = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    Nm = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    jm = (e) => {
        const [t, n] = Tm(e);
        if (!t || Ig()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && Nm.test(n) ? jm(n) : n || e;
    },
    Tm = (e) => {
        const t = Nm.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    Rm = (e, t, n, r, a) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${a})`,
    Lm = (e) => {
        xm || (xm = Dg ? new RegExp(`(${Object.keys(Dg).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => ym(e).replace(Nm, jm).replace(Pm, pm).replace(xm, pm)),
            n = t.map((e) => e.match(Em).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => hm({ ...e, output: t }));
        return (e) => {
            var n;
            const a = !Cm.test(t[0]) && (null == (n = t.find((e) => Cm.test(e))) ? void 0 : n.replace(Em, ''));
            let i = 0;
            return t[0].replace(Em, () => `${r[i++](e)}${a || ''}`).replace(Am, Rm);
        };
    },
    zm = 'react-spring: ',
    Im = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${zm}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    Dm = Im(console.warn);
function Mm(e) {
    return Ng.str(e) && ('#' == e[0] || /\d/.test(e) || (!Ig() && Nm.test(e)) || e in (Dg || {}));
}
Im(console.warn);
var Vm = Ig() ? B.useEffect : B.useLayoutEffect;
function Fm() {
    const e = B.useState()[1],
        t = (() => {
            const e = B.useRef(!1);
            return (
                Vm(
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
var Um = [],
    Bm = Symbol.for('Animated:node'),
    $m = (e) => e && e[Bm],
    Wm = (e, t) => {
        return ((n = e), (r = Bm), (a = t), Object.defineProperty(n, r, { value: a, writable: !0, configurable: !0 }));
        var n, r, a;
    },
    Hm = (e) => e && e[Bm] && e[Bm].getPayload(),
    Km = class {
        constructor() {
            Wm(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    qm = class extends Km {
        constructor(e) {
            (super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                Ng.num(this._value) && (this.lastPosition = this._value));
        }
        static create(e) {
            return new qm(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                Ng.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            ((this.done = !1),
                Ng.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null)));
        }
    },
    Gm = class extends qm {
        constructor(e) {
            (super(0), (this._string = null), (this._toString = hm({ output: [e, e] })));
        }
        static create(e) {
            return new Gm(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (Ng.str(e)) {
                if (e == this._string) return !1;
                ((this._string = e), (this._value = 1));
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null;
            }
            return !0;
        }
        reset(e) {
            (e && (this._toString = hm({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
        }
    },
    Qm = { dependencies: null },
    Ym = class extends Km {
        constructor(e) {
            (super(), (this.source = e), this.setValue(e));
        }
        getValue(e) {
            const t = {};
            return (
                Tg(this.source, (n, r) => {
                    var a;
                    (a = n) && a[Bm] === a ? (t[r] = n.getValue(e)) : mm(n) ? (t[r] = ym(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            ((this.source = e), (this.payload = this._makePayload(e)));
        }
        reset() {
            this.payload && jg(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return (Tg(e, this._addToPayload, t), Array.from(t));
            }
        }
        _addToPayload(e) {
            Qm.dependencies && mm(e) && Qm.dependencies.add(e);
            const t = Hm(e);
            t && jg(t, (e) => this.add(e));
        }
    },
    Xm = class extends Ym {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new Xm(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map(Zm)), !0);
        }
    };
function Zm(e) {
    return (Mm(e) ? Gm : qm).create(e);
}
var Jm = (e, t) => {
        const n = !Ng.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return B.forwardRef((r, a) => {
            const i = B.useRef(null),
                o =
                    n &&
                    B.useCallback(
                        (e) => {
                            i.current = (function (e, t) {
                                e && (Ng.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(a, e);
                        },
                        [a],
                    ),
                [l, u] = (function (e, t) {
                    const n = new Set();
                    ((Qm.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                    return ((e = new Ym(e)), (Qm.dependencies = null), [e, n]);
                })(r, t),
                s = Fm(),
                c = () => {
                    const e = i.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && s();
                },
                f = new ey(c, u),
                d = B.useRef();
            var p;
            (Vm(
                () => (
                    (d.current = f),
                    jg(u, (e) => km(e, f)),
                    () => {
                        d.current && (jg(d.current.deps, (e) => Sm(e, d.current)), fg.cancel(d.current.update));
                    }
                ),
            ),
                B.useEffect(c, []),
                (p = () => () => {
                    const e = d.current;
                    jg(e.deps, (t) => Sm(t, e));
                }),
                B.useEffect(p, Um));
            const h = t.getComponentProps(l.getValue());
            return B.createElement(e, { ...h, ref: o });
        });
    },
    ey = class {
        constructor(e, t) {
            ((this.update = e), (this.deps = t));
        }
        eventObserved(e) {
            'change' == e.type && fg.write(this.update);
        }
    };
var ty,
    ny,
    ry = Symbol.for('AnimatedComponent'),
    ay = (e) => (Ng.str(e) ? e : e && Ng.str(e.displayName) ? e.displayName : (Ng.fun(e) && e.name) || null),
    iy = (e) => e instanceof ly,
    oy = 1,
    ly = class extends _m {
        constructor() {
            (super(...arguments), (this.id = oy++), (this._priority = 0));
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = $m(this);
            return e && e.getValue();
        }
        to(...e) {
            return Ag.to(this, e);
        }
        interpolate(...e) {
            return (Dm(`${zm}The "interpolate" function is deprecated in v9 (use "to" instead)`), Ag.to(this, e));
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
            bm(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            (this.idle || Hg.sort(this), bm(this, { type: 'priority', parent: this, priority: e }));
        }
    },
    uy = ({ children: e, ...t }) => {
        const n = B.useContext(sy),
            r = t.pause || !!n.pause,
            a = t.immediate || !!n.immediate;
        t = (function (e, t) {
            const [n] = B.useState(() => ({ inputs: t, result: e() })),
                r = B.useRef(),
                a = r.current;
            let i = a;
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
                B.useEffect(() => {
                    ((r.current = i), a == n && (n.inputs = n.result = void 0));
                }, [i]),
                i.result
            );
        })(() => ({ pause: r, immediate: a }), [r, a]);
        const { Provider: i } = sy;
        return B.createElement(i, { value: t }, e);
    },
    sy =
        ((ty = uy),
        (ny = {}),
        Object.assign(ty, B.createContext(ny)),
        (ty.Provider._context = ty),
        (ty.Consumer._context = ty),
        ty);
((uy.Provider = sy.Provider), (uy.Consumer = sy.Consumer));
var cy = class extends ly {
    constructor(e, t) {
        (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = hm(...t)));
        const n = this._get(),
            r = (function (e) {
                const t = $m(e);
                return t ? t.constructor : Ng.arr(e) ? Xm : Mm(e) ? Gm : qm;
            })(n);
        Wm(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        ((function (e, t) {
            if (Ng.arr(e)) {
                if (!Ng.arr(t) || e.length !== t.length) return !1;
                for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                return !0;
            }
            return e === t;
        })(t, this.get()) || ($m(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && dy(this._active) && py(this));
    }
    _get() {
        const e = Ng.arr(this.source) ? this.source.map(ym) : zg(ym(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !dy(this._active) &&
            ((this.idle = !1),
            jg(Hm(this), (e) => {
                e.done = !1;
            }),
            Ag.skipAnimation ? (fg.batchedUpdates(() => this.advance()), py(this)) : Hg.start(this));
    }
    _attach() {
        let e = 1;
        (jg(zg(this.source), (t) => {
            (mm(t) && km(t, this), iy(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (jg(zg(this.source), (e) => {
            mm(e) && Sm(e, this);
        }),
            this._active.clear(),
            py(this));
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = zg(this.source).reduce((e, t) => Math.max(e, (iy(t) ? t.priority : 0) + 1), 0));
    }
};
function fy(e) {
    return !1 !== e.idle;
}
function dy(e) {
    return !e.size || Array.from(e).every(fy);
}
function py(e) {
    e.idle ||
        ((e.idle = !0),
        jg(Hm(e), (e) => {
            e.done = !0;
        }),
        bm(e, { type: 'idle', parent: e }));
}
Ag.assign({ createStringInterpolator: Lm, to: (e, t) => new cy(e, t) });
var hy = /^--/;
function vy(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || hy.test(e) || (my.hasOwnProperty(e) && my[e])
          ? ('' + t).trim()
          : t + 'px';
}
var gy = {};
var my = {
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
    yy = ['Webkit', 'Ms', 'Moz', 'O'];
my = Object.keys(my).reduce(
    (e, t) => (yy.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    my,
);
var by = /^(matrix|translate|scale|rotate|skew)/,
    _y = /^(translate)/,
    wy = /^(rotate|skew)/,
    ky = (e, t) => (Ng.num(e) && 0 !== e ? e + t : e),
    Sy = (e, t) => (Ng.arr(e) ? e.every((e) => Sy(e, t)) : Ng.num(e) ? e === t : parseFloat(e) === t),
    xy = class extends Ym {
        constructor({ x: e, y: t, z: n, ...r }) {
            const a = [],
                i = [];
            ((e || t || n) &&
                (a.push([e || 0, t || 0, n || 0]),
                i.push((e) => [`translate3d(${e.map((e) => ky(e, 'px')).join(',')})`, Sy(e, 0)])),
                Tg(r, (e, t) => {
                    if ('transform' === t) (a.push([e || '']), i.push((e) => [e, '' === e]));
                    else if (by.test(t)) {
                        if ((delete r[t], Ng.und(e))) return;
                        const n = _y.test(t) ? 'px' : wy.test(t) ? 'deg' : '';
                        (a.push(zg(e)),
                            i.push(
                                'rotate3d' === t
                                    ? ([e, t, r, a]) => [`rotate3d(${e},${t},${r},${ky(a, n)})`, Sy(a, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => ky(e, n)).join(',')})`,
                                          Sy(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                a.length && (r.transform = new Oy(a, i)),
                super(r));
        }
    },
    Oy = class extends _m {
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
                jg(this.inputs, (n, r) => {
                    const a = ym(n[0]),
                        [i, o] = this.transforms[r](Ng.arr(a) ? a : n.map(ym));
                    ((e += ' ' + i), (t = t && o));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && jg(this.inputs, (e) => jg(e, (e) => mm(e) && km(e, this)));
        }
        observerRemoved(e) {
            0 == e && jg(this.inputs, (e) => jg(e, (e) => mm(e) && Sm(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), bm(this, e));
        }
    };
function Ey(e, t) {
    (void 0 === t && (t = 'Illegal state'),
        e ||
            (function (e) {
                throw new Error('[mobx-utils] ' + e);
            })(t));
}
(Ag.assign({
    batchedUpdates: Bf.unstable_batchedUpdates,
    createStringInterpolator: Lm,
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
            createAnimatedStyle: n = (e) => new Ym(e),
            getComponentProps: r = (e) => e,
        } = {},
    ) => {
        const a = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
            i = (e) => {
                const t = ay(e) || 'Anonymous';
                return (
                    ((e = Ng.str(e) ? i[e] || (i[e] = Jm(e, a)) : e[ry] || (e[ry] = Jm(e, a))).displayName =
                        `Animated(${t})`),
                    e
                );
            };
        Tg(e, (t, n) => {
            (Ng.arr(e) && (n = ay(t)), (i[n] = i(t)));
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
                    { style: r, children: a, scrollTop: i, scrollLeft: o, viewBox: l, ...u } = t,
                    s = Object.values(u),
                    c = Object.keys(u).map((t) =>
                        n || e.hasAttribute(t)
                            ? t
                            : gy[t] || (gy[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                    );
                void 0 !== a && (e.textContent = a);
                for (const f in r)
                    if (r.hasOwnProperty(f)) {
                        const t = vy(f, r[f]);
                        hy.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                    }
                (c.forEach((t, n) => {
                    e.setAttribute(t, s[n]);
                }),
                    void 0 !== i && (e.scrollTop = i),
                    void 0 !== o && (e.scrollLeft = o),
                    void 0 !== l && e.setAttribute('viewBox', l));
            },
            createAnimatedStyle: (e) => new xy(e),
            getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
        },
    ));
var Py,
    Cy = function (e) {
        return e && e !== Object.prototype && Object.getOwnPropertyNames(e).concat(Cy(Object.getPrototypeOf(e)) || []);
    },
    Ay = function (e) {
        return (function (e) {
            var t = Cy(e);
            return t.filter(function (e, n) {
                return t.indexOf(e) === n;
            });
        })(e).filter(function (e) {
            return 'constructor' !== e && !~e.indexOf('__');
        });
    },
    Ny = 'pending',
    jy = 'fulfilled',
    Ty = 'rejected';
function Ry(e) {
    switch (this.state) {
        case Ny:
            return e.pending && e.pending(this.value);
        case Ty:
            return e.rejected && e.rejected(this.value);
        case jy:
            return e.fulfilled ? e.fulfilled(this.value) : this.value;
    }
}
function Ly(e, t) {
    if (
        (Ey(arguments.length <= 2, 'fromPromise expects up to two arguments'),
        Ey(
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
            ((n.value = e), (n.state = jy));
        }),
        Ch('observableFromPromise-reject', function (e) {
            ((n.value = e), (n.state = Ty));
        }),
    ),
        (n.isPromiseBasedObservable = !0),
        (n.case = Ry));
    var r = !t || (t.state !== jy && t.state !== Ny) ? void 0 : t.value;
    return (Bh(n, { value: r, state: Ny }, {}, { deep: !1 }), n);
}
(((Py = Ly || (Ly = {})).reject = Ch('fromPromise.reject', function (e) {
    var t = Py(Promise.reject(e));
    return ((t.state = Ty), (t.value = e), t);
})),
    (Py.resolve = Ch('fromPromise.resolve', function (e) {
        void 0 === e && (e = void 0);
        var t = Py(Promise.resolve(e));
        return ((t.state = jy), (t.value = e), t);
    })));
var zy = function (e, t, n, r) {
    var a,
        i = arguments.length,
        o = i < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
    else for (var l = e.length - 1; l >= 0; l--) (a = e[l]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, n, o) : a(t, n)) || o);
    return (i > 3 && o && Object.defineProperty(t, n, o), o);
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
                zp(e.name, !1, e, this, void 0);
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
        zy([xp.ref], e.prototype, 'current', void 0),
        zy([Ch.bound], e.prototype, 'next', null),
        zy([Ch.bound], e.prototype, 'complete', null),
        zy([Ch.bound], e.prototype, 'error', null));
})();
var Iy = function () {
        return (
            (Iy =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e;
                }),
            Iy.apply(this, arguments)
        );
    },
    Dy = function (e, t, n, r) {
        var a,
            i = arguments.length,
            o = i < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
        else
            for (var l = e.length - 1; l >= 0; l--)
                (a = e[l]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, n, o) : a(t, n)) || o);
        return (i > 3 && o && Object.defineProperty(t, n, o), o);
    },
    My = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
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
            Ey(Uv(e), 'createViewModel expects an observable object'));
        var n = Ay(this);
        Ay(e).forEach(function (r) {
            var a;
            if (!n.includes(r) && r !== Ld && '__mobxDidRunLazyInitializers' !== r) {
                if (
                    (Ey(
                        -1 === My.indexOf(r),
                        'The propertyname ' + r + ' is reserved and cannot be used with viewModels',
                    ),
                    Zh(e, r))
                ) {
                    var i = tg(e, r),
                        o = i.derivation.bind(t),
                        l = null === (a = i.setter_) || void 0 === a ? void 0 : a.bind(t);
                    t.localComputedValues.set(r, Cp(o, { set: l }));
                }
                var u = Object.getOwnPropertyDescriptor(e, r),
                    s = u ? { enumerable: u.enumerable } : {};
                Object.defineProperty(
                    t,
                    r,
                    Iy(Iy({}, s), {
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
                Uv(e)
                    ? e[Ld].keys_()
                    : jv(e) || Lv(e)
                      ? Array.from(e.keys())
                      : xv(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void qf(5)).forEach(function (e) {
                    var n = t.localValues.get(e),
                        r = t.model[e];
                    xv(r) ? r.replace(n) : jv(r) ? (r.clear(), r.merge(n)) : Xh(n) || (t.model[e] = n);
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
        Dy([Cp], e.prototype, 'isDirty', null),
        Dy([Cp], e.prototype, 'changedValues', null),
        Dy([Ch.bound], e.prototype, 'submit', null),
        Dy([Ch.bound], e.prototype, 'reset', null),
        Dy([Ch.bound], e.prototype, 'resetProperty', null));
})();
var Vy = (function () {
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
        var a = void 0 === r ? {} : r,
            i = a.name,
            o = void 0 === i ? 'ogm' + ((1e3 * Math.random()) | 0) : i,
            l = a.keyToName,
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
            (s._ogmInfoKey = Symbol('ogmInfo' + o)),
            (s._base = t));
        for (var c = 0; c < t.length; c++) s._addItem(t[c]);
        return (
            (s._disposeBaseObserver = ev(s._base, function (e) {
                if ('splice' === e.type)
                    tv(function () {
                        for (var t = 0, n = e.removed; t < n.length; t++) {
                            var r = n[t];
                            s._removeItem(r);
                        }
                        for (var a = 0, i = e.added; a < i.length; a++) {
                            var o = i[a];
                            s._addItem(o);
                        }
                    });
                else {
                    if ('update' !== e.type) throw new Error('illegal state');
                    tv(function () {
                        (s._removeItem(e.oldValue), s._addItem(e.newValue));
                    });
                }
            })),
            s
        );
    }
    (Vy(t, e),
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
                    a = {
                        groupByValue: n,
                        groupArrIndex: r.length,
                        reaction: Rh(
                            function () {
                                return t._groupBy(e);
                            },
                            function (n, r) {
                                var a = e[t._ogmInfoKey];
                                t._removeFromGroupArr(a.groupByValue, a.groupArrIndex);
                                var i = t._getGroupArr(n),
                                    o = i.length;
                                (i.push(e), (a.groupByValue = n), (a.groupArrIndex = o));
                            },
                        ),
                    };
                (Object.defineProperty(e, this._ogmInfoKey, { configurable: !0, enumerable: !1, value: a }), r.push(e));
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
})(Nv);
var Fy = (function () {
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
                        var a = new Map();
                        (n.set(this.args[r], a), (n = a));
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
    Uy = (function () {
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
                    return (this.last && (this.last.isDisposed = !0), (this.last = new Fy(this.store, e)));
                },
            }),
            e
        );
    })(),
    By = function () {
        return (
            (By =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e;
                }),
            By.apply(this, arguments)
        );
    };
function $y(e, t) {
    if ((void 0 === t && (t = !1), Nh(e))) throw new Error("computedFn shouldn't be used on actions");
    var n = !1,
        r = 0,
        a = 'boolean' == typeof t ? { keepAlive: t } : t,
        i = new Uy();
    return function () {
        for (var t = this, o = [], l = 0; l < arguments.length; l++) o[l] = arguments[l];
        var u,
            s = i.entry(o);
        if (s.exists()) return s.get().get();
        if (!a.keepAlive && null === oh.trackingDerivation)
            return (
                !n &&
                    oh.computedRequiresReaction &&
                    (console.warn(
                        "invoking a computedFn from outside an reactive context won't be memoized, unless keepAlive is set",
                    ),
                    (n = !0)),
                e.apply(this, o)
            );
        var c = Cp(
            function () {
                return (u = e.apply(t, o));
            },
            By(By({}, a), { name: 'computedFn(' + (a.name || e.name) + '#' + ++r + ')' }),
        );
        return (
            s.set(c),
            a.keepAlive ||
                Ih(c, function () {
                    (i.entry(o).delete(),
                        a.onCleanup &&
                            a.onCleanup.apply(
                                a,
                                (function () {
                                    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                                    var r = Array(e),
                                        a = 0;
                                    for (t = 0; t < n; t++)
                                        for (var i = arguments[t], o = 0, l = i.length; o < l; o++, a++) r[a] = i[o];
                                    return r;
                                })([u], o),
                            ),
                        (u = void 0));
                }),
            c.get()
        );
    };
}
if (!B.useState) throw new Error('mobx-react-lite requires React with Hooks support');
if (!cv) throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
function Wy(e) {
    e();
}
function Hy(e) {
    return $h(eg(e, t));
    var t;
}
var Ky = new ((function () {
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
                        (t.registrations.forEach(function (r, a) {
                            n - r.registeredAt >= e && (t.finalize(r.value), t.registrations.delete(a));
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
    qy = { exports: {} },
    Gy = {},
    Qy = B;
var Yy =
        'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    Xy = Qy.useState,
    Zy = Qy.useEffect,
    Jy = Qy.useLayoutEffect,
    eb = Qy.useDebugValue;
function tb(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Yy(e, n);
    } catch (r) {
        return !0;
    }
}
var nb =
    'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
              return t();
          }
        : function (e, t) {
              var n = t(),
                  r = Xy({ inst: { value: n, getSnapshot: t } }),
                  a = r[0].inst,
                  i = r[1];
              return (
                  Jy(
                      function () {
                          ((a.value = n), (a.getSnapshot = t), tb(a) && i({ inst: a }));
                      },
                      [e, n, t],
                  ),
                  Zy(
                      function () {
                          return (
                              tb(a) && i({ inst: a }),
                              e(function () {
                                  tb(a) && i({ inst: a });
                              })
                          );
                      },
                      [e],
                  ),
                  eb(n),
                  n
              );
          };
((Gy.useSyncExternalStore = void 0 !== Qy.useSyncExternalStore ? Qy.useSyncExternalStore : nb), (qy.exports = Gy));
var rb,
    ab,
    ib = qy.exports;
function ob(e) {
    e.reaction = new hh('observer'.concat(e.name), function () {
        var t;
        ((e.stateVersion = Symbol()), null === (t = e.onStoreChange) || void 0 === t || t.call(e));
    });
}
var lb = 'function' == typeof Symbol && Symbol.for,
    ub =
        null !==
            (ab =
                null === (rb = Object.getOwnPropertyDescriptor(function () {}, 'name')) || void 0 === rb
                    ? void 0
                    : rb.configurable) &&
        void 0 !== ab &&
        ab,
    sb = lb
        ? Symbol.for('react.forward_ref')
        : 'function' == typeof B.forwardRef &&
          B.forwardRef(function (e) {
              return null;
          }).$$typeof,
    cb = lb
        ? Symbol.for('react.memo')
        : 'function' == typeof B.memo &&
          B.memo(function (e) {
              return null;
          }).$$typeof;
function fb(e, t) {
    if (cb && e.$$typeof === cb)
        throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
        );
    var n = (void 0, !1),
        r = e,
        a = e.displayName || e.name;
    if (sb && e.$$typeof === sb && ((n = !0), 'function' != typeof (r = e.render)))
        throw new Error('[mobx-react-lite] `render` property of ForwardRef was not a function');
    var i = function (e, t) {
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
                            Ky.unregister(r),
                            (r.onStoreChange = e),
                            r.reaction || (ob(r), (r.stateVersion = Symbol())),
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
            var a,
                i,
                o = n.current;
            if (
                (o.reaction || (ob(o), Ky.register(n, o, o)),
                $.useDebugValue(o.reaction, Hy),
                ib.useSyncExternalStore(o.subscribe, o.getSnapshot, o.getSnapshot),
                o.reaction.track(function () {
                    try {
                        a = e();
                    } catch (t) {
                        i = t;
                    }
                }),
                i)
            )
                throw i;
            return a;
        })(function () {
            return r(e, t);
        }, a);
    };
    return (
        (i.displayName = e.displayName),
        ub && Object.defineProperty(i, 'name', { value: e.name, writable: !0, configurable: !0 }),
        e.contextTypes && (i.contextTypes = e.contextTypes),
        n && (i = B.forwardRef(i)),
        (function (e, t) {
            Object.keys(e).forEach(function (n) {
                pb[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
            });
        })(e, (i = B.memo(i))),
        i
    );
}
var db,
    pb = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function hb(e) {
    var t,
        n,
        r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
        if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = hb(e[t])) && (r && (r += ' '), (r += n));
        else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
}
((db = Bf.unstable_batchedUpdates) || (db = Wy), Uh({ reactionScheduler: db }), Ky.finalizeAllImmediately);
const vb = (e) => ('boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e),
    gb = function () {
        for (var e, t, n = 0, r = ''; n < arguments.length; )
            (e = arguments[n++]) && (t = hb(e)) && (r && (r += ' '), (r += t));
        return r;
    },
    mb = (e, t) => (n) => {
        var r;
        if (null == (null == t ? void 0 : t.variants))
            return gb(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        const { variants: a, defaultVariants: i } = t,
            o = Object.keys(a).map((e) => {
                const t = null == n ? void 0 : n[e],
                    r = null == i ? void 0 : i[e];
                if (null === t) return null;
                const o = vb(t) || vb(r);
                return a[e][o];
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
                          let { class: n, className: r, ...a } = t;
                          return Object.entries(a).every((e) => {
                              let [t, n] = e;
                              return Array.isArray(n) ? n.includes({ ...i, ...l }[t]) : { ...i, ...l }[t] === n;
                          })
                              ? [...e, n, r]
                              : e;
                      }, []);
        return gb(e, o, u, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
    };
var yb = {};
class bb extends Error {
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
const _b = r(
    Object.freeze(
        Object.defineProperty({ __proto__: null, TypeGuardError: bb }, Symbol.toStringTag, { value: 'Module' }),
    ),
);
Object.defineProperty(yb, '__esModule', { value: !0 });
var wb = (yb._assertGuard = void 0);
const kb = _b;
wb = yb._assertGuard = (e, t, n) => {
    if (!0 === e) throw n ? n(t) : new kb.TypeGuardError(t);
    return !1;
};
var Sb = {};
Object.defineProperty(Sb, '__esModule', { value: !0 });
var xb = (Sb._accessExpressionAsString = void 0);
xb = Sb._accessExpressionAsString = (e) => (Ob(e) ? `.${e}` : `[${JSON.stringify(e)}]`);
const Ob = (e) => !1 === Eb(e) && /^[a-zA-Z_$][a-zA-Z_$0-9]*$/g.test(e),
    Eb = (e) => Pb.has(e),
    Pb = new Set([
        'break',
        'case',
        'catch',
        'class',
        'const',
        'continue',
        'debugger',
        'default',
        'delete',
        'do',
        'else',
        'enum',
        'export',
        'extends',
        'false',
        'finally',
        'for',
        'function',
        'if',
        'import',
        'in',
        'instanceof',
        'new',
        'null',
        'return',
        'super',
        'switch',
        'this',
        'throw',
        'true',
        'try',
        'typeof',
        'var',
        'void',
        'while',
        'with',
    ]);
export {
    $ as R,
    wb as _,
    ye as a,
    _e as b,
    Te as c,
    be as d,
    Kf as e,
    Ch as f,
    $y as g,
    Md as h,
    Le as i,
    X as j,
    mb as k,
    xb as l,
    fb as m,
    xp as o,
    B as r,
    Xp as u,
};
