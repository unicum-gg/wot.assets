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
    u = Symbol.for('react.element'),
    s = Symbol.for('react.portal'),
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
    j = { key: !0, ref: !0, __self: !0, __source: !0 };
function N(e, t, n) {
    var r,
        i = {},
        a = null,
        o = null;
    if (null != t)
        for (r in (void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (a = '' + t.key), t))
            C.call(t, r) && !j.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (1 === l) i.children = n;
    else if (1 < l) {
        for (var s = Array(l), c = 0; c < l; c++) s[c] = arguments[c + 2];
        i.children = s;
    }
    if (e && e.defaultProps) for (r in (l = e.defaultProps)) void 0 === i[r] && (i[r] = l[r]);
    return { $$typeof: u, type: e, key: a, ref: o, props: i, _owner: A.current };
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
function z(e, t, n, r, i) {
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
                    case u:
                    case s:
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
                  z(i, t, n, '', function (e) {
                      return e;
                  }))
                : null != i &&
                  (T(i) &&
                      (i = (function (e, t) {
                          return { $$typeof: u, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                      })(i, n + (!i.key || (o && o.key === i.key) ? '' : ('' + i.key).replace(R, '$&/') + '/') + e)),
                  t.push(i)),
            1
        );
    if (((o = 0), (r = '' === r ? '.' : r + ':'), P(e)))
        for (var l = 0; l < e.length; l++) {
            var c = r + L((a = e[l]), l);
            o += z(a, t, n, c, i);
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
        for (e = c.call(e), l = 0; !(a = e.next()).done; ) o += z((a = a.value), t, n, (c = r + L(a, l++)), i);
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
function I(e, t, n) {
    if (null == e) return e;
    var r = [],
        i = 0;
    return (
        z(e, r, '', '', function (e) {
            return t.call(n, e, i++);
        }),
        r
    );
}
function M(e) {
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
    (l.Suspense = m),
    (l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
    (l.act = U),
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
            for (s in t) C.call(t, s) && !j.hasOwnProperty(s) && (r[s] = void 0 === t[s] && void 0 !== l ? l[s] : t[s]);
        }
        var s = arguments.length - 2;
        if (1 === s) r.children = n;
        else if (1 < s) {
            l = Array(s);
            for (var c = 0; c < s; c++) l[c] = arguments[c + 2];
            r.children = l;
        }
        return { $$typeof: u, type: e.type, key: i, ref: a, props: r, _owner: o };
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
    (l.isValidElement = T),
    (l.lazy = function (e) {
        return { $$typeof: y, _payload: { _status: -1, _result: e }, _init: M };
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
    (l.unstable_act = U),
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
        return function (u) {
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
                    } catch (u) {
                        ((l = [6, u]), (r = 0));
                    } finally {
                        n = i = 0;
                    }
                if (5 & l[0]) throw l[1];
                return { value: l[0] ? l[1] : void 0, done: !0 };
            })([l, u]);
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
        return (J(t, e), t);
    })(re),
    oe = (function (e) {
        function t(t, n) {
            var r = t.toString(),
                i = "Could not register '".concat(r, "'.");
            return (n && (i += ' '.concat(n)), e.call(this, i) || this);
        }
        return (J(t, e), t);
    })(re),
    le = { PROXY: 'PROXY', CLASSIC: 'CLASSIC' },
    ue = { SINGLETON: 'SINGLETON', TRANSIENT: 'TRANSIENT', SCOPED: 'SCOPED' };
function se(e) {
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
            return ((a = e), u(), d());
        },
        done: function () {
            return 'EOF' === r;
        },
    };
    function u() {
        for (i = '', r = 'EOF'; ; ) {
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
                            0 == (1 & a) &&
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
    var t = se(e.toString()),
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
    t = xe({ lifetime: ue.TRANSIENT }, t, e[ge]);
    var n = Pe(e);
    return ke(we(ee({ resolve: n }, t)));
}
function _e(e, t) {
    if (!me(e)) throw new ie('asClass', 'Type', 'class', e);
    t = xe({ lifetime: ue.TRANSIENT }, t, e[ge]);
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
        i = ((n = ne(ne([], Reflect.ownKeys(e.cradle), !0), Reflect.ownKeys(r), !0)), Array.from(new Set(n)));
    return new Proxy(
        {},
        {
            get: function (t, n) {
                return n === Symbol.iterator
                    ? function () {
                          var t, n, i, a, o, l, u, s;
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
        var t = se(e),
            n = t.next,
            r = t.done,
            i = [],
            a = null;
        for (f(); !r(); )
            switch (a.type) {
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
        function u() {
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
        function s() {
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
    je = Symbol('rollUpRegistrations'),
    Ne = 'AwilixContainerCradle';
function Te(e) {
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
                            u = 0,
                            s = o;
                        u < s.length;
                        u++
                    ) {
                        var c = s[u],
                            f = i[c];
                        if (e.strict && f.lifetime === ue.SINGLETON && t)
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
            })[je] = f),
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
        return ee(ee({}, t && t[je]()), a);
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
            if ('constructor' === t) return Te;
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
            var a = r.lifetime || ue.TRANSIENT;
            if (e.strict && !r.isLeakSafe) {
                var o = i.findIndex(function (e) {
                    var t,
                        n,
                        r = e.lifetime;
                    return (
                        (n = a),
                        ((t = r) === ue.SINGLETON && n !== ue.SINGLETON) || (t === ue.SCOPED && n === ue.TRANSIENT)
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
            var u = void 0,
                s = void 0;
            switch (a) {
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
                    throw new ae(t, i, 'Unknown lifetime "'.concat(r.lifetime, '"'));
            }
            return (i.pop(), s);
        } catch (f) {
            throw ((i.length = 0), f);
        }
    }
}
var Le = {},
    ze = { exports: {} },
    Ie = {},
    Me = { exports: {} },
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
                    u = e[l],
                    s = l + 1,
                    c = e[s];
                if (0 > i(u, n))
                    s < a && 0 > i(c, u) ? ((e[r] = c), (e[s] = n), (r = s)) : ((e[r] = u), (e[l] = n), (r = l));
                else {
                    if (!(s < a && 0 > i(c, n))) break e;
                    ((e[r] = c), (e[s] = n), (r = s));
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
    var u = [],
        s = [],
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
        for (var i = n(s); null !== i; ) {
            if (null === i.callback) r(s);
            else {
                if (!(i.startTime <= e)) break;
                (r(s), (i.sortIndex = i.expirationTime), t(u, i));
            }
            i = n(s);
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
    function w(t, i) {
        ((h = !1), v && ((v = !1), g(O), (O = -1)), (p = !0));
        var a = d;
        try {
            for (b(i), f = n(u); null !== f && (!(f.expirationTime > i) || (t && !C())); ) {
                var o = f.callback;
                if ('function' == typeof o) {
                    ((f.callback = null), (d = f.priorityLevel));
                    var l = o(f.expirationTime <= i);
                    ((i = e.unstable_now()), 'function' == typeof l ? (f.callback = l) : f === n(u) && r(u), b(i));
                } else r(u);
                f = n(u);
            }
            if (null !== f) var c = !0;
            else {
                var m = n(s);
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
        var j = new MessageChannel(),
            N = j.port2;
        ((j.port1.onmessage = A),
            (k = function () {
                N.postMessage(null);
            }));
    } else
        k = function () {
            m(A, 0);
        };
    function T(e) {
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
                      t(s, r),
                      null === n(u) && r === n(s) && (v ? (g(O), (O = -1)) : (v = !0), R(_, a - o)))
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
})(De),
    (Me.exports = De));
var Ve = Me.exports,
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
function Ze(e, t, n, r, i, a, o) {
    ((this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = a),
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
    at = Symbol.for('react.portal'),
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
                var i = s.stack.split('\n'), a = r.stack.split('\n'), o = i.length - 1, l = a.length - 1;
                1 <= o && 0 <= l && i[o] !== a[l];
            )
                l--;
            for (; 1 <= o && 0 <= l; o--, l--)
                if (i[o] !== a[l]) {
                    if (1 !== o || 1 !== l)
                        do {
                            if ((o--, 0 > --l || i[o] !== a[l])) {
                                var u = '\n' + i[o].replace(' at new ', ' at ');
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
        case at:
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
function jt(e) {
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
        ? Mt(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && Mt(e, t.type, Pt(t.defaultValue)),
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
function Mt(e, t, n) {
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
    if (null != t.dangerouslySetInnerHTML) throw Error(Be(91));
    return _t({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Ut(e, t) {
    var n = t.value;
    if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(Be(92));
            if (Dt(n)) {
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
        t && ((t = io(t)), on(e.stateNode, e.type, t));
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
    if (n && 'function' != typeof n) throw Error(Be(231, t, typeof n));
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
function bn(e, t, n, r, i, a, o, l, u) {
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
function On(e, t, n, r, i, a, o, l, u) {
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
                    throw Error(Be(188));
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
                        if (!o) throw Error(Be(189));
                    }
                }
                if (n.alternate !== r) throw Error(Be(190));
            }
            if (3 !== n.tag) throw Error(Be(188));
            return n.stateNode.current === n ? e : t;
        })(e))
        ? jn(e)
        : null;
}
function jn(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e; ) {
        var t = jn(e);
        if (null !== t) return t;
        e = e.sibling;
    }
    return null;
}
var Nn = Ue.unstable_scheduleCallback,
    Tn = Ue.unstable_cancelCallback,
    Rn = Ue.unstable_shouldYield,
    Ln = Ue.unstable_requestPaint,
    zn = Ue.unstable_now,
    In = Ue.unstable_getCurrentPriorityLevel,
    Mn = Ue.unstable_ImmediatePriority,
    Dn = Ue.unstable_UserBlockingPriority,
    Vn = Ue.unstable_NormalPriority,
    Fn = Ue.unstable_LowPriority,
    Un = Ue.unstable_IdlePriority,
    Bn = null,
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
var ar,
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
        mr.forEach(Sr));
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
function jr(e, t, n, r) {
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
        if (null === i) (Pa(e, t, r, Tr, n), br(e, r));
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
                if ((null !== a && ar(a), null === (a = Rr(e, t, n, r)) && Pa(e, t, r, Tr, n), a === i)) break;
                i = a;
            }
            null !== i && r.stopPropagation();
        } else Pa(e, t, r, null, n);
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
                case Mn:
                    return 1;
                case Dn:
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
    Mr = null;
function Dr() {
    if (Mr) return Mr;
    var e,
        t,
        n = Ir,
        r = n.length,
        i = 'value' in zr ? zr.value : zr.textContent,
        a = i.length;
    for (e = 0; e < r && n[e] === i[e]; e++);
    var o = r - e;
    for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
    return (Mr = i.slice(e, 1 < t ? 1 - t : void 0));
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
    Gr = Br(Hr),
    Kr = _t({}, Hr, { view: 0, detail: 0 }),
    Qr = Br(Kr),
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
        getModifierState: ui,
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
    Xr = Br(Yr),
    Zr = Br(_t({}, Yr, { dataTransfer: 0 })),
    Jr = Br(_t({}, Kr, { relatedTarget: 0 })),
    ei = Br(_t({}, Hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    ti = _t({}, Hr, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    ni = Br(ti),
    ri = Br(_t({}, Hr, { data: 0 })),
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
function ui() {
    return li;
}
var si = _t({}, Kr, {
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
        getModifierState: ui,
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
    ci = Br(si),
    fi = Br(
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
    di = Br(
        _t({}, Kr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ui,
        }),
    ),
    pi = Br(_t({}, Hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
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
    vi = Br(hi),
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
    ji = null;
function Ni(e) {
    wa(e, 0);
}
function Ti(e) {
    if (jt(ro(e))) return e;
}
function Ri(e, t) {
    if ('change' === e) return t;
}
var Li = !1;
if (Ge) {
    var zi;
    if (Ge) {
        var Ii = 'oninput' in document;
        if (!Ii) {
            var Mi = document.createElement('div');
            (Mi.setAttribute('oninput', 'return;'), (Ii = 'function' == typeof Mi.oninput));
        }
        zi = Ii;
    } else zi = !1;
    Li = zi && (!document.documentMode || 9 < document.documentMode);
}
function Di() {
    Ai && (Ai.detachEvent('onpropertychange', Vi), (ji = Ai = null));
}
function Vi(e) {
    if ('value' === e.propertyName && Ti(ji)) {
        var t = [];
        (Ci(t, ji, e, an(e)), vn(Ni, t));
    }
}
function Fi(e, t, n) {
    'focusin' === e ? (Di(), (ji = n), (Ai = t).attachEvent('onpropertychange', Vi)) : 'focusout' === e && Di();
}
function Ui(e) {
    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Ti(ji);
}
function Bi(e, t) {
    if ('click' === e) return Ti(t);
}
function $i(e, t) {
    if ('input' === e || 'change' === e) return Ti(t);
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
var Zi = Ge && 'documentMode' in document && 11 >= document.documentMode,
    Ji = null,
    ea = null,
    ta = null,
    na = !1;
function ra(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    na ||
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
        (ta && qi(ta, r)) ||
            ((ta = r),
            0 < (r = Aa(ea, 'onSelect')).length &&
                ((t = new Gr('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Ji))));
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
function ua(e) {
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
var sa = ua('animationend'),
    ca = ua('animationiteration'),
    fa = ua('animationstart'),
    da = ua('transitionend'),
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
(va(sa, 'onAnimationEnd'),
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
        (function (e, t, n, r, i, a, o, l, u) {
            if ((On.apply(this, arguments), _n)) {
                if (!_n) throw Error(Be(198));
                var s = wn;
                ((_n = !1), (wn = null), kn || ((kn = !0), (Sn = s)));
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
                        u = l.instance,
                        s = l.currentTarget;
                    if (((l = l.listener), u !== a && i.isPropagationStopped())) break e;
                    (_a(i, l, s), (a = u));
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (
                        ((u = (l = r[o]).instance),
                        (s = l.currentTarget),
                        (l = l.listener),
                        u !== a && i.isPropagationStopped())
                    )
                        break e;
                    (_a(i, l, s), (a = u));
                }
        }
    }
    if (kn) throw ((e = Sn), (kn = !1), (Sn = null), e);
}
function ka(e, t) {
    var n = t[Za];
    void 0 === n && (n = t[Za] = new Set());
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
            i = jr;
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
                        var u = o.tag;
                        if (
                            (3 === u || 4 === u) &&
                            ((u = o.stateNode.containerInfo) === i || (8 === u.nodeType && u.parentNode === i))
                        )
                            return;
                        o = o.return;
                    }
                for (; null !== l; ) {
                    if (null === (o = to(l))) return;
                    if (5 === (u = o.tag) || 6 === u) {
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
                var u = Gr,
                    s = e;
                switch (e) {
                    case 'keypress':
                        if (0 === Vr(n)) break e;
                    case 'keydown':
                    case 'keyup':
                        u = ci;
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
                        u = di;
                        break;
                    case sa:
                    case ca:
                    case fa:
                        u = ei;
                        break;
                    case da:
                        u = pi;
                        break;
                    case 'scroll':
                        u = Qr;
                        break;
                    case 'wheel':
                        u = vi;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        u = ni;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        u = fi;
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
                0 < c.length && ((l = new u(l, s, null, n, i)), o.push({ event: l, listeners: c }));
            }
        }
        if (0 == (7 & t)) {
            if (
                ((u = 'mouseout' === e || 'pointerout' === e),
                (!(l = 'mouseover' === e || 'pointerover' === e) ||
                    n === rn ||
                    !(s = n.relatedTarget || n.fromElement) ||
                    (!to(s) && !s[Xa])) &&
                    (u || l) &&
                    ((l = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window),
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
                        ((c = fi), (v = 'onPointerLeave'), (d = 'onPointerEnter'), (h = 'pointer')),
                    (f = null == u ? l : ro(u)),
                    (p = null == s ? l : ro(s)),
                    ((l = new c(v, h + 'leave', u, n, i)).target = f),
                    (l.relatedTarget = p),
                    (v = null),
                    to(i) === r && (((c = new c(d, h + 'enter', s, n, i)).target = p), (c.relatedTarget = f), (v = c)),
                    (f = v),
                    u && s)
                )
                    e: {
                        for (d = s, h = 0, p = c = u; p; p = ja(p)) h++;
                        for (p = 0, v = d; v; v = ja(v)) p++;
                        for (; 0 < h - p; ) ((c = ja(c)), h--);
                        for (; 0 < p - h; ) ((d = ja(d)), p--);
                        for (; h--; ) {
                            if (c === d || (null !== d && c === d.alternate)) break e;
                            ((c = ja(c)), (d = ja(d)));
                        }
                        c = null;
                    }
                else c = null;
                (null !== u && Na(o, l, u, c, !1), null !== s && null !== f && Na(o, f, s, c, !0));
            }
            if (
                'select' === (u = (l = r ? ro(r) : window).nodeName && l.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === l.type)
            )
                var m = Ri;
            else if (Pi(l))
                if (Li) m = $i;
                else {
                    m = Ui;
                    var g = Fi;
                }
            else
                (u = l.nodeName) &&
                    'input' === u.toLowerCase() &&
                    ('checkbox' === l.type || 'radio' === l.type) &&
                    (m = Bi);
            switch (
                (m && (m = m(e, r))
                    ? Ci(o, m, n, i)
                    : (g && g(e, l, r),
                      'focusout' === e &&
                          (g = l._wrapperState) &&
                          g.controlled &&
                          'number' === l.type &&
                          Mt(l, 'number', l.value)),
                (g = r ? ro(r) : window),
                e)
            ) {
                case 'focusin':
                    (Pi(g) || 'true' === g.contentEditable) && ((Ji = g), (ea = r), (ta = null));
                    break;
                case 'focusout':
                    ta = ea = Ji = null;
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
                    if (Zi) break;
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
                        : ((Ir = 'value' in (zr = i) ? zr.value : zr.textContent), (Oi = !0))),
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
                                  ? ((e = Dr()), (Mr = Ir = zr = null), (Oi = !1), e)
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
function ja(e) {
    if (null === e) return null;
    do {
        e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
}
function Na(e, t, n, r, i) {
    for (var a = t._reactName, o = []; null !== n && n !== r; ) {
        var l = n,
            u = l.alternate,
            s = l.stateNode;
        if (null !== u && u === r) break;
        (5 === l.tag &&
            null !== s &&
            ((l = s),
            i
                ? null != (u = mn(n, a)) && o.unshift(Ca(n, u, l))
                : i || (null != (u = mn(n, a)) && o.push(Ca(n, u, l)))),
            (n = n.return));
    }
    0 !== o.length && e.push({ event: t, listeners: o });
}
var Ta = /\r\n?/g,
    Ra = /\u0000|\uFFFD/g;
function La(e) {
    return ('string' == typeof e ? e : '' + e).replace(Ta, '\n').replace(Ra, '');
}
function za(e, t, n) {
    if (((t = La(t)), La(e) !== t && n)) throw Error(Be(425));
}
function Ia() {}
var Ma = null,
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
    Ua = 'function' == typeof clearTimeout ? clearTimeout : void 0,
    Ba = 'function' == typeof Promise ? Promise : void 0,
    $a =
        'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== Ba
              ? function (e) {
                    return Ba.resolve(null).then(e).catch(Wa);
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
    Za = '__reactEvents$' + Ka,
    Ja = '__reactListeners$' + Ka,
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
    throw Error(Be(33));
}
function io(e) {
    return e[Ya] || null;
}
var ao = [],
    oo = -1;
function lo(e) {
    return { current: e };
}
function uo(e) {
    0 > oo || ((e.current = ao[oo]), (ao[oo] = null), oo--);
}
function so(e, t) {
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
    (uo(po), uo(fo));
}
function yo(e, t, n) {
    if (fo.current !== co) throw Error(Be(168));
    (so(fo, t), so(po, n));
}
function bo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
    for (var i in (r = r.getChildContext())) if (!(i in t)) throw Error(Be(108, Et(e) || 'Unknown', i));
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
        } catch (i) {
            throw (null !== ko && (ko = ko.slice(e + 1)), Nn(Mn, Eo), i);
        } finally {
            ((rr = t), (xo = !1));
        }
    }
    return null;
}
var Po = [],
    Co = 0,
    Ao = null,
    jo = 0,
    No = [],
    To = 0,
    Ro = null,
    Lo = 1,
    zo = '';
function Io(e, t) {
    ((Po[Co++] = jo), (Po[Co++] = Ao), (Ao = e), (jo = t));
}
function Mo(e, t, n) {
    ((No[To++] = Lo), (No[To++] = zo), (No[To++] = Ro), (Ro = e));
    var r = Lo;
    e = zo;
    var i = 32 - Wn(r) - 1;
    ((r &= ~(1 << i)), (n += 1));
    var a = 32 - Wn(t) + i;
    if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (i -= o),
            (Lo = (1 << (32 - Wn(t) + i)) | (n << i) | r),
            (zo = a + e));
    } else ((Lo = (1 << a) | (n << i) | r), (zo = e));
}
function Do(e) {
    null !== e.return && (Io(e, 1), Mo(e, 1, 0));
}
function Vo(e) {
    for (; e === Ao; ) ((Ao = Po[--Co]), (Po[Co] = null), (jo = Po[--Co]), (Po[Co] = null));
    for (; e === Ro; )
        ((Ro = No[--To]), (No[To] = null), (zo = No[--To]), (No[To] = null), (Lo = No[--To]), (No[To] = null));
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
function qo(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (Fo = e), (Uo = Ha(t.firstChild)), !0)
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
function Ho(e) {
    return 0 != (1 & e.mode) && 0 == (128 & e.flags);
}
function Go(e) {
    if (Bo) {
        var t = Uo;
        if (t) {
            var n = t;
            if (!qo(e, t)) {
                if (Ho(e)) throw Error(Be(418));
                t = Ha(n.nextSibling);
                var r = Fo;
                t && qo(e, t) ? Wo(r, n) : ((e.flags = (-4097 & e.flags) | 2), (Bo = !1), (Fo = e));
            }
        } else {
            if (Ho(e)) throw Error(Be(418));
            ((e.flags = (-4097 & e.flags) | 2), (Bo = !1), (Fo = e));
        }
    }
}
function Ko(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
    Fo = e;
}
function Qo(e) {
    if (e !== Fo) return !1;
    if (!Bo) return (Ko(e), (Bo = !0), !1);
    var t;
    if (
        ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = 'head' !== (t = e.type) && 'body' !== t && !Va(e.type, e.memoizedProps)),
        t && (t = Uo))
    ) {
        if (Ho(e)) throw (Yo(), Error(Be(418)));
        for (; t; ) (Wo(e, t), (t = Ha(t.nextSibling)));
    }
    if ((Ko(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(Be(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ('/$' === n) {
                        if (0 === t) {
                            Uo = Ha(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
            }
            Uo = null;
        }
    } else Uo = Fo ? Ha(e.stateNode.nextSibling) : null;
    return !0;
}
function Yo() {
    for (var e = Uo; e; ) e = Ha(e.nextSibling);
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
    function u(e, t, n, r) {
        var a = n.type;
        return a === ot
            ? c(e, t, n.props.children, r, n.key)
            : null !== t &&
                (t.elementType === a || ('object' == typeof a && null !== a && a.$$typeof === vt && nl(a) === t.type))
              ? (((r = i(t, n.props)).ref = el(e, t, n)), (r.return = e), r)
              : (((r = yf(n.type, n.key, n.props, null, e.mode, r)).ref = el(e, t, n)), (r.return = e), r);
    }
    function s(e, t, n, r) {
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
                    return n.key === i ? u(e, t, n, r) : null;
                case at:
                    return n.key === i ? s(e, t, n, r) : null;
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
                    return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                case at:
                    return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                case vt:
                    return p(e, t, n, (0, r._init)(r._payload), i);
            }
            if (Dt(r) || yt(r)) return c(t, (e = e.get(n) || null), r, i, null);
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
                case it:
                    e: {
                        for (var v = c.key, m = s; null !== m; ) {
                            if (m.key === v) {
                                if ((v = c.type) === ot) {
                                    if (7 === m.tag) {
                                        (n(u, m.sibling), ((s = i(m, c.props.children)).return = u), (u = s));
                                        break e;
                                    }
                                } else if (
                                    m.elementType === v ||
                                    ('object' == typeof v && null !== v && v.$$typeof === vt && nl(v) === m.type)
                                ) {
                                    (n(u, m.sibling), ((s = i(m, c.props)).ref = el(u, m, c)), (s.return = u), (u = s));
                                    break e;
                                }
                                n(u, m);
                                break;
                            }
                            (t(u, m), (m = m.sibling));
                        }
                        c.type === ot
                            ? (((s = bf(c.props.children, u.mode, h, c.key)).return = u), (u = s))
                            : (((h = yf(c.type, c.key, c.props, null, u.mode, h)).ref = el(u, s, c)),
                              (h.return = u),
                              (u = h));
                    }
                    return o(u);
                case at:
                    e: {
                        for (m = c.key; null !== s; ) {
                            if (s.key === m) {
                                if (
                                    4 === s.tag &&
                                    s.stateNode.containerInfo === c.containerInfo &&
                                    s.stateNode.implementation === c.implementation
                                ) {
                                    (n(u, s.sibling), ((s = i(s, c.children || [])).return = u), (u = s));
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
                    return l(u, s, (m = c._init)(c._payload), h);
            }
            if (Dt(c))
                return (function (i, o, l, u) {
                    for (var s = null, c = null, h = o, v = (o = 0), m = null; null !== h && v < l.length; v++) {
                        h.index > v ? ((m = h), (h = null)) : (m = h.sibling);
                        var g = d(i, h, l[v], u);
                        if (null === g) {
                            null === h && (h = m);
                            break;
                        }
                        (e && h && null === g.alternate && t(i, h),
                            (o = a(g, o, v)),
                            null === c ? (s = g) : (c.sibling = g),
                            (c = g),
                            (h = m));
                    }
                    if (v === l.length) return (n(i, h), Bo && Io(i, v), s);
                    if (null === h) {
                        for (; v < l.length; v++)
                            null !== (h = f(i, l[v], u)) &&
                                ((o = a(h, o, v)), null === c ? (s = h) : (c.sibling = h), (c = h));
                        return (Bo && Io(i, v), s);
                    }
                    for (h = r(i, h); v < l.length; v++)
                        null !== (m = p(h, i, v, l[v], u)) &&
                            (e && null !== m.alternate && h.delete(null === m.key ? v : m.key),
                            (o = a(m, o, v)),
                            null === c ? (s = m) : (c.sibling = m),
                            (c = m));
                    return (
                        e &&
                            h.forEach(function (e) {
                                return t(i, e);
                            }),
                        Bo && Io(i, v),
                        s
                    );
                })(u, s, c, h);
            if (yt(c))
                return (function (i, o, l, u) {
                    var s = yt(l);
                    if ('function' != typeof s) throw Error(Be(150));
                    if (null == (l = s.call(l))) throw Error(Be(151));
                    for (
                        var c = (s = null), h = o, v = (o = 0), m = null, g = l.next();
                        null !== h && !g.done;
                        v++, g = l.next()
                    ) {
                        h.index > v ? ((m = h), (h = null)) : (m = h.sibling);
                        var y = d(i, h, g.value, u);
                        if (null === y) {
                            null === h && (h = m);
                            break;
                        }
                        (e && h && null === y.alternate && t(i, h),
                            (o = a(y, o, v)),
                            null === c ? (s = y) : (c.sibling = y),
                            (c = y),
                            (h = m));
                    }
                    if (g.done) return (n(i, h), Bo && Io(i, v), s);
                    if (null === h) {
                        for (; !g.done; v++, g = l.next())
                            null !== (g = f(i, g.value, u)) &&
                                ((o = a(g, o, v)), null === c ? (s = g) : (c.sibling = g), (c = g));
                        return (Bo && Io(i, v), s);
                    }
                    for (h = r(i, h); !g.done; v++, g = l.next())
                        null !== (g = p(h, i, v, g.value, u)) &&
                            (e && null !== g.alternate && h.delete(null === g.key ? v : g.key),
                            (o = a(g, o, v)),
                            null === c ? (s = g) : (c.sibling = g),
                            (c = g));
                    return (
                        e &&
                            h.forEach(function (e) {
                                return t(i, e);
                            }),
                        Bo && Io(i, v),
                        s
                    );
                })(u, s, c, h);
            tl(u, c);
        }
        return ('string' == typeof c && '' !== c) || 'number' == typeof c
            ? ((c = '' + c),
              null !== s && 6 === s.tag
                  ? (n(u, s.sibling), ((s = i(s, c)).return = u), (u = s))
                  : (n(u, s), ((s = wf(c, u.mode, h)).return = u), (u = s)),
              o(u))
            : n(u, s);
    };
}
var il = rl(!0),
    al = rl(!1),
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
        var u = l,
            s = u.next;
        ((u.next = null), null === o ? (a = s) : (o.next = s), (o = u));
        var c = e.alternate;
        null !== c &&
            (l = (c = c.updateQueue).lastBaseUpdate) !== o &&
            (null === l ? (c.firstBaseUpdate = s) : (l.next = s), (c.lastBaseUpdate = u));
    }
    if (null !== a) {
        var f = i.baseState;
        for (o = 0, c = s = u = null, l = a; ; ) {
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
                    null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                    (o |= d));
            if (null === (l = l.next)) {
                if (null === (l = i.shared.pending)) break;
                ((l = (d = l).next), (d.next = null), (i.lastBaseUpdate = d), (i.shared.pending = null));
            }
        }
        if (
            (null === c && (u = f),
            (i.baseState = u),
            (i.firstBaseUpdate = s),
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
                if (((r.callback = null), (r = n), 'function' != typeof i)) throw Error(Be(191, i));
                i.call(r);
            }
        }
}
var Cl = {},
    Al = lo(Cl),
    jl = lo(Cl),
    Nl = lo(Cl);
function Tl(e) {
    if (e === Cl) throw Error(Be(174));
    return e;
}
function Rl(e, t) {
    switch ((so(Nl, t), so(jl, e), so(Al, Cl), (e = t.nodeType))) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : qt(null, '');
            break;
        default:
            t = qt((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
    }
    (uo(Al), so(Al, t));
}
function Ll() {
    (uo(Al), uo(jl), uo(Nl));
}
function zl(e) {
    Tl(Nl.current);
    var t = Tl(Al.current),
        n = qt(t, e.type);
    t !== n && (so(jl, e), so(Al, n));
}
function Il(e) {
    jl.current === e && (uo(Al), uo(jl));
}
var Ml = lo(0);
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
var Ul = rt.ReactCurrentDispatcher,
    Bl = rt.ReactCurrentBatchConfig,
    $l = 0,
    Wl = null,
    ql = null,
    Hl = null,
    Gl = !1,
    Kl = !1,
    Ql = 0,
    Yl = 0;
function Xl() {
    throw Error(Be(321));
}
function Zl(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Wi(e[n], t[n])) return !1;
    return !0;
}
function Jl(e, t, n, r, i, a) {
    if (
        (($l = a),
        (Wl = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Ul.current = null === e || null === e.memoizedState ? Iu : Mu),
        (e = n(r, i)),
        Kl)
    ) {
        a = 0;
        do {
            if (((Kl = !1), (Ql = 0), 25 <= a)) throw Error(Be(301));
            ((a += 1), (Hl = ql = null), (t.updateQueue = null), (Ul.current = Du), (e = n(r, i)));
        } while (Kl);
    }
    if (((Ul.current = zu), (t = null !== ql && null !== ql.next), ($l = 0), (Hl = ql = Wl = null), (Gl = !1), t))
        throw Error(Be(300));
    return e;
}
function eu() {
    var e = 0 !== Ql;
    return ((Ql = 0), e);
}
function tu() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (null === Hl ? (Wl.memoizedState = Hl = e) : (Hl = Hl.next = e), Hl);
}
function nu() {
    if (null === ql) {
        var e = Wl.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = ql.next;
    var t = null === Hl ? Wl.memoizedState : Hl.next;
    if (null !== t) ((Hl = t), (ql = e));
    else {
        if (null === e) throw Error(Be(310));
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
function ru(e, t) {
    return 'function' == typeof t ? t(e) : t;
}
function iu(e) {
    var t = nu(),
        n = t.queue;
    if (null === n) throw Error(Be(311));
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
            u = null,
            s = a;
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
        } while (null !== s && s !== a);
        (null === u ? (o = r) : (u.next = l),
            Wi(r, t.memoizedState) || (ns = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = u),
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
function au(e) {
    var t = nu(),
        n = t.queue;
    if (null === n) throw Error(Be(311));
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
        (Wi(a, t.memoizedState) || (ns = !0),
            (t.memoizedState = a),
            null === t.baseQueue && (t.baseState = a),
            (n.lastRenderedState = a));
    }
    return [a, r];
}
function ou() {}
function lu(e, t) {
    var n = Wl,
        r = nu(),
        i = t(),
        a = !Wi(r.memoizedState, i);
    if (
        (a && ((r.memoizedState = i), (ns = !0)),
        (r = r.queue),
        bu(cu.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || a || (null !== Hl && 1 & Hl.memoizedState.tag))
    ) {
        if (((n.flags |= 2048), hu(9, su.bind(null, n, r, i, t), void 0, null), null === dc)) throw Error(Be(349));
        0 != (30 & $l) || uu(n, t, i);
    }
    return i;
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
        return !Wi(e, n);
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
        (e = e.dispatch = Nu.bind(null, Wl, e)),
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
function mu(e, t, n, r) {
    var i = tu();
    ((Wl.flags |= e), (i.memoizedState = hu(1 | t, n, void 0, void 0 === r ? null : r)));
}
function gu(e, t, n, r) {
    var i = nu();
    r = void 0 === r ? null : r;
    var a = void 0;
    if (null !== ql) {
        var o = ql.memoizedState;
        if (((a = o.destroy), null !== r && Zl(r, o.deps))) return void (i.memoizedState = hu(t, n, a, r));
    }
    ((Wl.flags |= e), (i.memoizedState = hu(1 | t, n, a, r)));
}
function yu(e, t) {
    return mu(8390656, 8, e, t);
}
function bu(e, t) {
    return gu(2048, 8, e, t);
}
function _u(e, t) {
    return gu(4, 2, e, t);
}
function wu(e, t) {
    return gu(4, 4, e, t);
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
    return ((n = null != n ? n.concat([e]) : null), gu(4, 4, ku.bind(null, t, e), n));
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
        : (Wi(n, t) || ((n = Jn()), (Wl.lanes |= n), (bc |= n), (e.baseState = !0)), t);
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
function ju(e, t, n) {
    var r = Dc(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Tu(e))) Ru(t, n);
    else if (null !== (n = gl(e, t, n, r))) {
        (Vc(n, e, r, Mc()), Lu(n, t, r));
    }
}
function Nu(e, t, n) {
    var r = Dc(e),
        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Tu(e)) Ru(t, i);
    else {
        var a = e.alternate;
        if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
            try {
                var o = t.lastRenderedState,
                    l = a(o, n);
                if (((i.hasEagerState = !0), (i.eagerState = l), Wi(l, o))) {
                    var u = t.interleaved;
                    return (
                        null === u ? ((i.next = i), ml(t)) : ((i.next = u.next), (u.next = i)),
                        void (t.interleaved = i)
                    );
                }
            } catch (s) {}
        null !== (n = gl(e, t, i, r)) && (Vc(n, e, r, (i = Mc())), Lu(n, t, r));
    }
}
function Tu(e) {
    var t = e.alternate;
    return e === Wl || (null !== t && t === Wl);
}
function Ru(e, t) {
    Kl = Gl = !0;
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
            return ((n = null != n ? n.concat([e]) : null), mu(4194308, 4, ku.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
            return mu(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return mu(4, 2, e, t);
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
                (e = e.dispatch = ju.bind(null, Wl, e)),
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
                i = tu();
            if (Bo) {
                if (void 0 === n) throw Error(Be(407));
                n = n();
            } else {
                if (((n = t()), null === dc)) throw Error(Be(349));
                0 != (30 & $l) || uu(r, t, n);
            }
            i.memoizedState = n;
            var a = { value: n, getSnapshot: t };
            return (
                (i.queue = a),
                yu(cu.bind(null, r, a, e), [e]),
                (r.flags |= 2048),
                hu(9, su.bind(null, r, a, n, t), void 0, null),
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
            return Pu(nu(), ql.memoizedState, e);
        },
        useTransition: function () {
            return [iu(ru)[0], nu().memoizedState];
        },
        useMutableSource: ou,
        useSyncExternalStore: lu,
        useId: Au,
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
            var t = nu();
            return null === ql ? (t.memoizedState = e) : Pu(t, ql.memoizedState, e);
        },
        useTransition: function () {
            return [au(ru)[0], nu().memoizedState];
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
        var r = Mc(),
            i = Dc(e),
            a = kl(r, i);
        ((a.payload = t), null != n && (a.callback = n), null !== (t = Sl(e, a, i)) && (Vc(t, e, i, r), xl(t, e, i)));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Mc(),
            i = Dc(e),
            a = kl(r, i);
        ((a.tag = 1),
            (a.payload = t),
            null != n && (a.callback = n),
            null !== (t = Sl(e, a, i)) && (Vc(t, e, i, r), xl(t, e, i)));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Mc(),
            r = Dc(e),
            i = kl(n, r);
        ((i.tag = 2), null != t && (i.callback = t), null !== (t = Sl(e, i, r)) && (Vc(t, e, r, n), xl(t, e, r)));
    },
};
function Bu(e, t, n, r, i, a, o) {
    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, a, o)
        : !t.prototype || !t.prototype.isPureReactComponent || !qi(n, r) || !qi(i, a);
}
function $u(e, t, n) {
    var r = !1,
        i = co,
        a = t.contextType;
    return (
        'object' == typeof a && null !== a
            ? (a = hl(a))
            : ((i = mo(t) ? ho : fo.current), (a = (r = null != (r = t.contextTypes)) ? vo(e, i) : co)),
        (t = new t(n, a)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = Uu),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i),
            (e.__reactInternalMemoizedMaskedChildContext = a)),
        t
    );
}
function Wu(e, t, n, r) {
    ((e = t.state),
        'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Uu.enqueueReplaceState(t, t.state, null));
}
function qu(e, t, n, r) {
    var i = e.stateNode;
    ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), _l(e));
    var a = t.contextType;
    ('object' == typeof a && null !== a ? (i.context = hl(a)) : ((a = mo(t) ? ho : fo.current), (i.context = vo(e, a))),
        (i.state = e.memoizedState),
        'function' == typeof (a = t.getDerivedStateFromProps) && (Fu(e, t, a, n), (i.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof i.getSnapshotBeforeUpdate ||
            ('function' != typeof i.UNSAFE_componentWillMount && 'function' != typeof i.componentWillMount) ||
            ((t = i.state),
            'function' == typeof i.componentWillMount && i.componentWillMount(),
            'function' == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(),
            t !== i.state && Uu.enqueueReplaceState(i, i.state, null),
            El(e, n, i, r),
            (i.state = e.memoizedState)),
        'function' == typeof i.componentDidMount && (e.flags |= 4194308));
}
function Hu(e, t) {
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
function Gu(e, t, n) {
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
function Yu(e, t, n) {
    (((n = kl(-1, n)).tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
        (n.callback = function () {
            (Pc || ((Pc = !0), (Cc = r)), Ku(0, t));
        }),
        n
    );
}
function Xu(e, t, n) {
    (n = kl(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ('function' == typeof r) {
        var i = t.value;
        ((n.payload = function () {
            return r(i);
        }),
            (n.callback = function () {
                Ku(0, t);
            }));
    }
    var a = e.stateNode;
    return (
        null !== a &&
            'function' == typeof a.componentDidCatch &&
            (n.callback = function () {
                (Ku(0, t), 'function' != typeof r && (null === Ac ? (Ac = new Set([this])) : Ac.add(this)));
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
        var i = new Set();
        r.set(t, i);
    } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = sf.bind(null, e, t, n)), t.then(e, e));
}
function Ju(e) {
    do {
        var t;
        if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e;
        e = e.return;
    } while (null !== e);
    return null;
}
function es(e, t, n, r, i) {
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
var ts = rt.ReactCurrentOwner,
    ns = !1;
function rs(e, t, n, r) {
    t.child = null === e ? al(t, null, n, r) : il(t, e.child, n, r);
}
function is(e, t, n, r, i) {
    n = n.render;
    var a = t.ref;
    return (
        pl(t, i),
        (r = Jl(e, t, n, r, a, i)),
        (n = eu()),
        null === e || ns
            ? (Bo && n && Do(t), (t.flags |= 1), rs(e, t, r, i), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Ps(e, t, i))
    );
}
function as(e, t, n, r, i) {
    if (null === e) {
        var a = n.type;
        return 'function' != typeof a ||
            mf(a) ||
            void 0 !== a.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = yf(n.type, null, r, t, t.mode, i)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = a), os(e, t, a, r, i));
    }
    if (((a = e.child), 0 == (e.lanes & i))) {
        var o = a.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : qi)(o, r) && e.ref === t.ref) return Ps(e, t, i);
    }
    return ((t.flags |= 1), ((e = gf(a, r)).ref = t.ref), (e.return = t), (t.child = e));
}
function os(e, t, n, r, i) {
    if (null !== e) {
        var a = e.memoizedProps;
        if (qi(a, r) && e.ref === t.ref) {
            if (((ns = !1), (t.pendingProps = r = a), 0 == (e.lanes & i))) return ((t.lanes = e.lanes), Ps(e, t, i));
            0 != (131072 & e.flags) && (ns = !0);
        }
    }
    return ss(e, t, n, r, i);
}
function ls(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        a = null !== e ? e.memoizedState : null;
    if ('hidden' === r.mode)
        if (0 == (1 & t.mode))
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), so(mc, vc), (vc |= n));
        else {
            if (0 == (1073741824 & n))
                return (
                    (e = null !== a ? a.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    so(mc, vc),
                    (vc |= e),
                    null
                );
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== a ? a.baseLanes : n),
                so(mc, vc),
                (vc |= r));
        }
    else (null !== a ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n), so(mc, vc), (vc |= r));
    return (rs(e, t, i, n), t.child);
}
function us(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function ss(e, t, n, r, i) {
    var a = mo(n) ? ho : fo.current;
    return (
        (a = vo(t, a)),
        pl(t, i),
        (n = Jl(e, t, n, r, a, i)),
        (r = eu()),
        null === e || ns
            ? (Bo && r && Do(t), (t.flags |= 1), rs(e, t, n, i), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Ps(e, t, i))
    );
}
function cs(e, t, n, r, i) {
    if (mo(n)) {
        var a = !0;
        _o(t);
    } else a = !1;
    if ((pl(t, i), null === t.stateNode)) (Es(e, t), $u(t, n, r), qu(t, n, r, i), (r = !0));
    else if (null === e) {
        var o = t.stateNode,
            l = t.memoizedProps;
        o.props = l;
        var u = o.context,
            s = n.contextType;
        'object' == typeof s && null !== s ? (s = hl(s)) : (s = vo(t, (s = mo(n) ? ho : fo.current)));
        var c = n.getDerivedStateFromProps,
            f = 'function' == typeof c || 'function' == typeof o.getSnapshotBeforeUpdate;
        (f ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((l !== r || u !== s) && Wu(t, o, r, s)),
            (bl = !1));
        var d = t.memoizedState;
        ((o.state = d),
            El(t, r, o, i),
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
                : (u = vo(t, (u = mo(n) ? ho : fo.current))));
        var p = n.getDerivedStateFromProps;
        ((c = 'function' == typeof p || 'function' == typeof o.getSnapshotBeforeUpdate) ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((l !== f || d !== u) && Wu(t, o, r, u)),
            (bl = !1),
            (d = t.memoizedState),
            (o.state = d),
            El(t, r, o, i));
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
    return fs(e, t, n, r, a, i);
}
function fs(e, t, n, r, i, a) {
    us(e, t);
    var o = 0 != (128 & t.flags);
    if (!r && !o) return (i && wo(t, n, !1), Ps(e, t, a));
    ((r = t.stateNode), (ts.current = t));
    var l = o && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
    return (
        (t.flags |= 1),
        null !== e && o ? ((t.child = il(t, e.child, null, a)), (t.child = il(t, null, l, a))) : rs(e, t, l, a),
        (t.memoizedState = r.state),
        i && wo(t, n, !0),
        t.child
    );
}
function ds(e) {
    var t = e.stateNode;
    (t.pendingContext ? yo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && yo(0, t.context, !1),
        Rl(e, t.containerInfo));
}
function ps(e, t, n, r, i) {
    return (Xo(), Zo(i), (t.flags |= 256), rs(e, t, n, r), t.child);
}
var hs,
    vs,
    ms,
    gs,
    ys = { dehydrated: null, treeContext: null, retryLane: 0 };
function bs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function _s(e, t, n) {
    var r,
        i = t.pendingProps,
        a = Ml.current,
        o = !1,
        l = 0 != (128 & t.flags);
    if (
        ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)),
        r ? ((o = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (a |= 1),
        so(Ml, 1 & a),
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
                        (t.child.memoizedState = bs(n)),
                        (t.memoizedState = ys),
                        e)
                      : ws(t, l))
        );
    if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated))
        return (function (e, t, n, r, i, a, o) {
            if (n)
                return 256 & t.flags
                    ? ((t.flags &= -257), ks(e, t, o, (r = Gu(Error(Be(422))))))
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
                        (t.child.memoizedState = bs(o)),
                        (t.memoizedState = ys),
                        a);
            if (0 == (1 & t.mode)) return ks(e, t, o, null);
            if ('$!' === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset)) var l = r.dgst;
                return ((r = l), ks(e, t, o, (r = Gu((a = Error(Be(419))), r, void 0))));
            }
            if (((l = 0 != (o & e.childLanes)), ns || l)) {
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
                return (Zc(), ks(e, t, o, (r = Gu(Error(Be(421))))));
            }
            return '$?' === i.data
                ? ((t.flags |= 128), (t.child = e.child), (t = ff.bind(null, e)), (i._reactRetry = t), null)
                : ((e = a.treeContext),
                  (Uo = Ha(i.nextSibling)),
                  (Fo = t),
                  (Bo = !0),
                  ($o = null),
                  null !== e &&
                      ((No[To++] = Lo), (No[To++] = zo), (No[To++] = Ro), (Lo = e.id), (zo = e.overflow), (Ro = t)),
                  (t = ws(t, r.children)),
                  (t.flags |= 4096),
                  t);
        })(e, t, l, i, r, a, n);
    if (o) {
        ((o = i.fallback), (l = t.mode), (r = (a = e.child).sibling));
        var u = { mode: 'hidden', children: i.children };
        return (
            0 == (1 & l) && t.child !== a
                ? (((i = t.child).childLanes = 0), (i.pendingProps = u), (t.deletions = null))
                : ((i = gf(a, u)).subtreeFlags = 14680064 & a.subtreeFlags),
            null !== r ? (o = gf(r, o)) : ((o = bf(o, l, n, null)).flags |= 2),
            (o.return = t),
            (i.return = t),
            (i.sibling = o),
            (t.child = i),
            (i = o),
            (o = t.child),
            (l =
                null === (l = e.child.memoizedState)
                    ? bs(n)
                    : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
            (o.memoizedState = l),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = ys),
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
function ws(e, t) {
    return (((t = _f({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t));
}
function ks(e, t, n, r) {
    return (
        null !== r && Zo(r),
        il(t, e.child, null, n),
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
function xs(e, t, n, r, i) {
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
function Os(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
    if ((rs(e, t, r.children, n), 0 != (2 & (r = Ml.current)))) ((r = (1 & r) | 2), (t.flags |= 128));
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
    if ((so(Ml, r), 0 == (1 & t.mode))) t.memoizedState = null;
    else
        switch (i) {
            case 'forwards':
                for (n = t.child, i = null; null !== n; )
                    (null !== (e = n.alternate) && null === Dl(e) && (i = n), (n = n.sibling));
                (null === (n = i) ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
                    xs(t, !1, i, n, a));
                break;
            case 'backwards':
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                    if (null !== (e = i.alternate) && null === Dl(e)) {
                        t.child = i;
                        break;
                    }
                    ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
                }
                xs(t, !0, n, null, a);
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
        for (n = gf((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            ((e = e.sibling), ((n = n.sibling = gf(e, e.pendingProps)).return = t));
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
function js(e, t, n) {
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
            return (mo(t.type) && go(), As(t), null);
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
            var i = Tl(Nl.current);
            if (((n = t.type), null !== e && null != t.stateNode))
                (ms(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(Be(166));
                    return (As(t), null);
                }
                if (((e = Tl(Al.current)), Qo(t))) {
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
                            (Ut(r, a), ka('invalid', r));
                    }
                    for (var o in (tn(n, a), (i = null), a))
                        if (a.hasOwnProperty(o)) {
                            var l = a[o];
                            'children' === o
                                ? 'string' == typeof l
                                    ? r.textContent !== l &&
                                      (!0 !== a.suppressHydrationWarning && za(r.textContent, l, e),
                                      (i = ['children', l]))
                                    : 'number' == typeof l &&
                                      r.textContent !== '' + l &&
                                      (!0 !== a.suppressHydrationWarning && za(r.textContent, l, e),
                                      (i = ['children', '' + l]))
                                : We.hasOwnProperty(o) && null != l && 'onScroll' === o && ka('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            (At(r), It(r, a, !0));
                            break;
                        case 'textarea':
                            (At(r), $t(r));
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            'function' == typeof a.onClick && (r.onclick = Ia);
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
                        hs(e, t, !1, !1),
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
                                (Rt(e, r), (i = Tt(e, r)), ka('invalid', e));
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
                                (Ut(e, r), (i = Ft(e, r)), ka('invalid', e));
                        }
                        for (a in (tn(n, i), (l = i)))
                            if (l.hasOwnProperty(a)) {
                                var u = l[a];
                                'style' === a
                                    ? Jt(e, u)
                                    : 'dangerouslySetInnerHTML' === a
                                      ? null != (u = u ? u.__html : void 0) && Kt(e, u)
                                      : 'children' === a
                                        ? 'string' == typeof u
                                            ? ('textarea' !== n || '' !== u) && Qt(e, u)
                                            : 'number' == typeof u && Qt(e, '' + u)
                                        : 'suppressContentEditableWarning' !== a &&
                                          'suppressHydrationWarning' !== a &&
                                          'autoFocus' !== a &&
                                          (We.hasOwnProperty(a)
                                              ? null != u && 'onScroll' === a && ka('scroll', e)
                                              : null != u && nt(e, a, u, o));
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
                                    null != (a = r.value)
                                        ? Vt(e, !!r.multiple, a, !1)
                                        : null != r.defaultValue && Vt(e, !!r.multiple, r.defaultValue, !0));
                                break;
                            default:
                                'function' == typeof i.onClick && (e.onclick = Ia);
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
            if (e && null != t.stateNode) gs(e, t, e.memoizedProps, r);
            else {
                if ('string' != typeof r && null === t.stateNode) throw Error(Be(166));
                if (((n = Tl(Nl.current)), Tl(Al.current), Qo(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Qa] = t),
                        (a = r.nodeValue !== n) && null !== (e = Fo))
                    )
                        switch (e.tag) {
                            case 3:
                                za(r.nodeValue, n, 0 != (1 & e.mode));
                                break;
                            case 5:
                                !0 !== e.memoizedProps.suppressHydrationWarning &&
                                    za(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                    a && (t.flags |= 4);
                } else (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Qa] = t), (t.stateNode = r));
            }
            return (As(t), null);
        case 13:
            if (
                (uo(Ml),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (Bo && null !== Uo && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                    (Yo(), Xo(), (t.flags |= 98560), (a = !1));
                else if (((a = Qo(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!a) throw Error(Be(318));
                        if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(Be(317));
                        a[Qa] = t;
                    } else (Xo(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                    (As(t), (a = !1));
                } else (null !== $o && ($c($o), ($o = null)), (a = !0));
                if (!a) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) && (null === e || 0 != (1 & Ml.current) ? 0 === gc && (gc = 3) : Zc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  As(t),
                  null);
        case 4:
            return (Ll(), vs(e, t), null === e && Oa(t.stateNode.containerInfo), As(t), null);
        case 10:
            return (fl(t.type._context), As(t), null);
        case 19:
            if ((uo(Ml), null === (a = t.memoizedState))) return (As(t), null);
            if (((r = 0 != (128 & t.flags)), null === (o = a.rendering)))
                if (r) Cs(a, !1);
                else {
                    if (0 !== gc || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (o = Dl(e))) {
                                for (
                                    t.flags |= 128,
                                        Cs(a, !1),
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
                                return (so(Ml, (1 & Ml.current) | 2), t.child);
                            }
                            e = e.sibling;
                        }
                    null !== a.tail && zn() > Oc && ((t.flags |= 128), (r = !0), Cs(a, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = Dl(o))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            Cs(a, !0),
                            null === a.tail && 'hidden' === a.tailMode && !o.alternate && !Bo)
                        )
                            return (As(t), null);
                    } else
                        2 * zn() - a.renderingStartTime > Oc &&
                            1073741824 !== n &&
                            ((t.flags |= 128), (r = !0), Cs(a, !1), (t.lanes = 4194304));
                a.isBackwards
                    ? ((o.sibling = t.child), (t.child = o))
                    : (null !== (n = a.last) ? (n.sibling = o) : (t.child = o), (a.last = o));
            }
            return null !== a.tail
                ? ((t = a.tail),
                  (a.rendering = t),
                  (a.tail = t.sibling),
                  (a.renderingStartTime = zn()),
                  (t.sibling = null),
                  (n = Ml.current),
                  so(Ml, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (As(t), null);
        case 22:
        case 23:
            return (
                Kc(),
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
function Ns(e, t) {
    switch ((Vo(t), t.tag)) {
        case 1:
            return (mo(t.type) && go(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null);
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
            if ((uo(Ml), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(Be(340));
                Xo();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return (uo(Ml), null);
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
    (ms = function (e, t, n, r) {
        var i = e.memoizedProps;
        if (i !== r) {
            ((e = t.stateNode), Tl(Al.current));
            var a,
                o = null;
            switch (n) {
                case 'input':
                    ((i = Tt(e, i)), (r = Tt(e, r)), (o = []));
                    break;
                case 'select':
                    ((i = _t({}, i, { value: void 0 })), (r = _t({}, r, { value: void 0 })), (o = []));
                    break;
                case 'textarea':
                    ((i = Ft(e, i)), (r = Ft(e, r)), (o = []));
                    break;
                default:
                    'function' != typeof i.onClick && 'function' == typeof r.onClick && (e.onclick = Ia);
            }
            for (s in (tn(n, r), (n = null), i))
                if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && null != i[s])
                    if ('style' === s) {
                        var l = i[s];
                        for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
                    } else
                        'dangerouslySetInnerHTML' !== s &&
                            'children' !== s &&
                            'suppressContentEditableWarning' !== s &&
                            'suppressHydrationWarning' !== s &&
                            'autoFocus' !== s &&
                            (We.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
            for (s in r) {
                var u = r[s];
                if (((l = null != i ? i[s] : void 0), r.hasOwnProperty(s) && u !== l && (null != u || null != l)))
                    if ('style' === s)
                        if (l) {
                            for (a in l)
                                !l.hasOwnProperty(a) || (u && u.hasOwnProperty(a)) || (n || (n = {}), (n[a] = ''));
                            for (a in u) u.hasOwnProperty(a) && l[a] !== u[a] && (n || (n = {}), (n[a] = u[a]));
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
                                    ? (null != u && 'onScroll' === s && ka('scroll', e), o || l === u || (o = []))
                                    : (o = o || []).push(s, u));
            }
            n && (o = o || []).push('style', n);
            var s = o;
            (t.updateQueue = s) && (t.flags |= 4);
        }
    }),
    (gs = function (e, t, n, r) {
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
function Ms(e, t, n) {
    try {
        n();
    } catch (r) {
        uf(e, t, r);
    }
}
var Ds = !1;
function Vs(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var i = (r = r.next);
        do {
            if ((i.tag & e) === e) {
                var a = i.destroy;
                ((i.destroy = void 0), void 0 !== a && Ms(t, n, a));
            }
            i = i.next;
        } while (i !== r);
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
            (delete t[Qa], delete t[Ya], delete t[Za], delete t[Ja], delete t[eo]),
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
function qs(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
        ((e = e.stateNode),
            t
                ? 8 === n.nodeType
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Ia)));
    else if (4 !== r && null !== (e = e.child))
        for (qs(e, t, n), e = e.sibling; null !== e; ) (qs(e, t, n), (e = e.sibling));
}
function Hs(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (4 !== r && null !== (e = e.child))
        for (Hs(e, t, n), e = e.sibling; null !== e; ) (Hs(e, t, n), (e = e.sibling));
}
var Gs = null,
    Ks = !1;
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
            var r = Gs,
                i = Ks;
            ((Gs = null),
                Qs(e, t, n),
                (Ks = i),
                null !== (Gs = r) &&
                    (Ks
                        ? ((e = Gs),
                          (n = n.stateNode),
                          8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : Gs.removeChild(n.stateNode)));
            break;
        case 18:
            null !== Gs &&
                (Ks
                    ? ((e = Gs),
                      (n = n.stateNode),
                      8 === e.nodeType ? qa(e.parentNode, n) : 1 === e.nodeType && qa(e, n),
                      Er(e))
                    : qa(Gs, n.stateNode));
            break;
        case 4:
            ((r = Gs), (i = Ks), (Gs = n.stateNode.containerInfo), (Ks = !0), Qs(e, t, n), (Gs = r), (Ks = i));
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Rs && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                i = r = r.next;
                do {
                    var a = i,
                        o = a.destroy;
                    ((a = a.tag), void 0 !== o && (0 != (2 & a) || 0 != (4 & a)) && Ms(n, t, o), (i = i.next));
                } while (i !== r);
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
            var i = n[r];
            try {
                var a = e,
                    o = t,
                    l = o;
                e: for (; null !== l; ) {
                    switch (l.tag) {
                        case 5:
                            ((Gs = l.stateNode), (Ks = !1));
                            break e;
                        case 3:
                        case 4:
                            ((Gs = l.stateNode.containerInfo), (Ks = !0));
                            break e;
                    }
                    l = l.return;
                }
                if (null === Gs) throw Error(Be(160));
                (Ys(a, o, i), (Gs = null), (Ks = !1));
                var u = i.alternate;
                (null !== u && (u.return = null), (i.return = null));
            } catch (s) {
                uf(i, t, s);
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
                var i = e.stateNode;
                try {
                    Qt(i, '');
                } catch (v) {
                    uf(e, e.return, v);
                }
            }
            if (4 & r && null != (i = e.stateNode)) {
                var a = e.memoizedProps,
                    o = null !== n ? n.memoizedProps : a,
                    l = e.type,
                    u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                    try {
                        ('input' === l && 'radio' === a.type && null != a.name && Lt(i, a), nn(l, o));
                        var s = nn(l, a);
                        for (o = 0; o < u.length; o += 2) {
                            var c = u[o],
                                f = u[o + 1];
                            'style' === c
                                ? Jt(i, f)
                                : 'dangerouslySetInnerHTML' === c
                                  ? Kt(i, f)
                                  : 'children' === c
                                    ? Qt(i, f)
                                    : nt(i, c, f, s);
                        }
                        switch (l) {
                            case 'input':
                                zt(i, a);
                                break;
                            case 'textarea':
                                Bt(i, a);
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
                        uf(e, e.return, v);
                    }
            }
            break;
        case 6:
            if ((Zs(t, e), ec(e), 4 & r)) {
                if (null === e.stateNode) throw Error(Be(162));
                ((i = e.stateNode), (a = e.memoizedProps));
                try {
                    i.nodeValue = a;
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
                8192 & (i = e.child).flags &&
                    ((a = null !== i.memoizedState),
                    (i.stateNode.isHidden = a),
                    !a || (null !== i.alternate && null !== i.alternate.memoizedState) || (xc = zn())),
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
                                        ic(f);
                                        continue;
                                    }
                            }
                            null !== p ? ((p.return = d), (zs = p)) : ic(f);
                        }
                        c = c.sibling;
                    }
                e: for (c = null, f = e; ; ) {
                    if (5 === f.tag) {
                        if (null === c) {
                            c = f;
                            try {
                                ((i = f.stateNode),
                                    s
                                        ? 'function' == typeof (a = i.style).setProperty
                                            ? a.setProperty('display', 'none', 'important')
                                            : (a.display = 'none')
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
                    var i = r.stateNode;
                    (32 & r.flags && (Qt(i, ''), (r.flags &= -33)), Hs(e, Ws(e), i));
                    break;
                case 3:
                case 4:
                    var a = r.stateNode.containerInfo;
                    qs(e, Ws(e), a);
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
        var i = zs,
            a = i.child;
        if (22 === i.tag && r) {
            var o = null !== i.memoizedState || Ts;
            if (!o) {
                var l = i.alternate,
                    u = (null !== l && null !== l.memoizedState) || Rs;
                l = Ts;
                var s = Rs;
                if (((Ts = o), (Rs = u) && !s))
                    for (zs = i; null !== zs; )
                        ((u = (o = zs).child),
                            22 === o.tag && null !== o.memoizedState
                                ? ac(i)
                                : null !== u
                                  ? ((u.return = o), (zs = u))
                                  : ac(i));
                for (; null !== a; ) ((zs = a), nc(a), (a = a.sibling));
                ((zs = i), (Ts = l), (Rs = s));
            }
            rc(e);
        } else 0 != (8772 & i.subtreeFlags) && null !== a ? ((a.return = i), (zs = a)) : rc(e);
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
                                    var i = t.elementType === t.type ? n.memoizedProps : Vu(t.type, n.memoizedProps);
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
function ic(e) {
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
function ac(e) {
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
                        var i = t.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            uf(t, i, u);
                        }
                    }
                    var a = t.return;
                    try {
                        Us(t);
                    } catch (u) {
                        uf(t, a, u);
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
    jc = !1,
    Nc = null,
    Tc = 0,
    Rc = 0,
    Lc = null,
    zc = -1,
    Ic = 0;
function Mc() {
    return 0 != (6 & fc) ? zn() : -1 !== zc ? zc : (zc = zn());
}
function Dc(e) {
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
            (e === dc && (0 == (2 & fc) && (_c |= n), 4 === gc && Wc(e, hc)),
            Fc(e, r),
            1 === n && 0 === fc && 0 == (1 & t.mode) && ((Oc = zn() + 500), So && Eo())));
}
function Fc(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
            var o = 31 - Wn(a),
                l = 1 << o,
                u = i[o];
            (-1 === u ? (0 != (l & n) && 0 == (l & r)) || (i[o] = Xn(l, t)) : u <= t && (e.expiredLanes |= l),
                (a &= ~l));
        }
    })(e, t);
    var r = Yn(e, e === dc ? hc : 0);
    if (0 === r) (null !== n && Tn(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && Tn(n), 1 === t))
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
                    n = Mn;
                    break;
                case 4:
                    n = Dn;
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
        var i = fc;
        fc |= 2;
        var a = Xc();
        for ((dc === e && hc === t) || ((Ec = null), (Oc = zn() + 500), Qc(e, t)); ; )
            try {
                tf();
                break;
            } catch (l) {
                Yc(e, l);
            }
        (cl(), (uc.current = a), (fc = i), null !== pc ? (t = 0) : ((dc = null), (hc = 0), (t = gc)));
    }
    if (0 !== t) {
        if ((2 === t && 0 !== (i = Zn(e)) && ((r = i), (t = Bc(e, i))), 1 === t))
            throw ((n = yc), Qc(e, 0), Wc(e, r), Fc(e, zn()), n);
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
                    (2 === (t = Jc(e, r)) && 0 !== (a = Zn(e)) && ((r = a), (t = Bc(e, a))), 1 === t))
            )
                throw ((n = yc), Qc(e, 0), Wc(e, r), Fc(e, zn()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
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
                        if (((i = e.suspendedLanes) & r) !== r) {
                            (Mc(), (e.pingedLanes |= e.suspendedLanes & i));
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
                        e.timeoutHandle = Fa(af.bind(null, e, Sc, Ec), r);
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
function qc(e) {
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
function Hc(e, t) {
    var n = fc;
    fc |= 1;
    try {
        return e(t);
    } finally {
        0 === (fc = n) && ((Oc = zn() + 500), So && Eo());
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
    ((vc = mc.current), uo(mc));
}
function Qc(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), Ua(n)), null !== pc))
        for (n = pc.return; null !== n; ) {
            var r = n;
            switch ((Vo(r), r.tag)) {
                case 1:
                    null != (r = r.type.childContextTypes) && go();
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
                    uo(Ml);
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
            if ((cl(), (Ul.current = zu), Gl)) {
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
                (sc.current = null),
                null === n || null === n.return)
            ) {
                ((gc = 1), (yc = t), (pc = null));
                break;
            }
            e: {
                var a = e,
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
                        ((p.flags &= -257), es(p, o, l, 0, t), 1 & p.mode && Zu(a, s, t), (u = s));
                        var h = (t = p).updateQueue;
                        if (null === h) {
                            var v = new Set();
                            (v.add(u), (t.updateQueue = v));
                        } else h.add(u);
                        break e;
                    }
                    if (0 == (1 & t)) {
                        (Zu(a, s, t), Zc());
                        break e;
                    }
                    u = Error(Be(426));
                } else if (Bo && 1 & l.mode) {
                    var m = Ju(o);
                    if (null !== m) {
                        (0 == (65536 & m.flags) && (m.flags |= 256), es(m, o, l, 0, t), Zo(Hu(u, l)));
                        break e;
                    }
                }
                ((a = u = Hu(u, l)), 4 !== gc && (gc = 2), null === kc ? (kc = [a]) : kc.push(a), (a = o));
                do {
                    switch (a.tag) {
                        case 3:
                            ((a.flags |= 65536), (t &= -t), (a.lanes |= t), Ol(a, Yu(0, u, t)));
                            break e;
                        case 1:
                            l = u;
                            var g = a.type,
                                y = a.stateNode;
                            if (
                                0 == (128 & a.flags) &&
                                ('function' == typeof g.getDerivedStateFromError ||
                                    (null !== y &&
                                        'function' == typeof y.componentDidCatch &&
                                        (null === Ac || !Ac.has(y))))
                            ) {
                                ((a.flags |= 65536), (t &= -t), (a.lanes |= t), Ol(a, Xu(a, l, t)));
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
    var e = uc.current;
    return ((uc.current = zu), null === e ? zu : e);
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
    if ((cl(), (fc = n), (uc.current = r), null !== pc)) throw Error(Be(261));
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
    ((e.memoizedProps = e.pendingProps), null === t ? rf(e) : (pc = t), (sc.current = null));
}
function rf(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), 0 == (32768 & t.flags))) {
            if (null !== (n = js(n, t, vc))) return void (pc = n);
        } else {
            if (null !== (n = Ns(n, t))) return ((n.flags &= 32767), void (pc = n));
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
                if (0 != (6 & fc)) throw Error(Be(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(Be(177));
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
                        jc ||
                        ((jc = !0),
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
                        (sc.current = null),
                        (function (e, t) {
                            if (((Ma = Cr), Yi((e = Qi())))) {
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
                                                u = -1,
                                                s = 0,
                                                c = 0,
                                                f = e,
                                                d = null;
                                            t: for (;;) {
                                                for (
                                                    var p;
                                                    f !== n || (0 !== i && 3 !== f.nodeType) || (l = o + i),
                                                        f !== a || (0 !== r && 3 !== f.nodeType) || (u = o + r),
                                                        3 === f.nodeType && (o += f.nodeValue.length),
                                                        null !== (p = f.firstChild);
                                                )
                                                    ((d = f), (f = p));
                                                for (;;) {
                                                    if (f === e) break t;
                                                    if (
                                                        (d === n && ++s === i && (l = o),
                                                        d === a && ++c === r && (u = o),
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
                            for (Da = { focusedElem: e, selectionRange: n }, Cr = !1, zs = t; null !== zs; )
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
                                                                m = h.memoizedState,
                                                                g = t.stateNode,
                                                                y = g.getSnapshotBeforeUpdate(
                                                                    t.elementType === t.type ? v : Vu(t.type, v),
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
                            ((h = Ds), (Ds = !1));
                        })(e, n),
                        Js(n, e),
                        Xi(Da),
                        (Cr = !!Ma),
                        (Da = Ma = null),
                        (e.current = n),
                        tc(n),
                        Ln(),
                        (fc = l),
                        (rr = o),
                        (cc.transition = a));
                } else e.current = n;
                if (
                    (jc && ((jc = !1), (Nc = e), (Tc = i)),
                    (a = e.pendingLanes),
                    0 === a && (Ac = null),
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
                        ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
                if (Pc) throw ((Pc = !1), (e = Cc), (Cc = null), e);
                (0 != (1 & Tc) && 0 !== e.tag && of(),
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
        var e = ir(Tc),
            t = cc.transition,
            n = rr;
        try {
            if (((cc.transition = null), (rr = 16 > e ? 16 : e), null === Nc)) var r = !1;
            else {
                if (((e = Nc), (Nc = null), (Tc = 0), 0 != (6 & fc))) throw Error(Be(331));
                var i = fc;
                for (fc |= 4, zs = e.current; null !== zs; ) {
                    var a = zs,
                        o = a.child;
                    if (0 != (16 & zs.flags)) {
                        var l = a.deletions;
                        if (null !== l) {
                            for (var u = 0; u < l.length; u++) {
                                var s = l[u];
                                for (zs = s; null !== zs; ) {
                                    var c = zs;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Vs(8, c, a);
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
                            zs = a;
                        }
                    }
                    if (0 != (2064 & a.subtreeFlags) && null !== o) ((o.return = a), (zs = o));
                    else
                        e: for (; null !== zs; ) {
                            if (0 != (2048 & (a = zs).flags))
                                switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Vs(9, a, a.return);
                                }
                            var g = a.sibling;
                            if (null !== g) {
                                ((g.return = a.return), (zs = g));
                                break e;
                            }
                            zs = a.return;
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
                if (((fc = i), Eo(), $n && 'function' == typeof $n.onPostCommitFiberRoot))
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
    ((e = Sl(e, (t = Yu(0, (t = Hu(n, t)), 1)), 1)), (t = Mc()), null !== e && (tr(e, 1, t), Fc(e, t)));
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
                    ((t = Sl(t, (e = Xu(t, (e = Hu(n, e)), 1)), 1)), (e = Mc()), null !== t && (tr(t, 1, e), Fc(t, e)));
                    break;
                }
            }
            t = t.return;
        }
}
function sf(e, t, n) {
    var r = e.pingCache;
    (null !== r && r.delete(t),
        (t = Mc()),
        (e.pingedLanes |= e.suspendedLanes & n),
        dc === e &&
            (hc & n) === n &&
            (4 === gc || (3 === gc && (130023424 & hc) === hc && 500 > zn() - xc) ? Qc(e, 0) : (wc |= n)),
        Fc(e, t));
}
function cf(e, t) {
    0 === t && (0 == (1 & e.mode) ? (t = 1) : ((t = Kn), 0 == (130023424 & (Kn <<= 1)) && (Kn = 4194304)));
    var n = Mc();
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
            throw Error(Be(314));
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
            case ut:
                return (((e = vf(12, n, t, 2 | i)).elementType = ut), (e.lanes = a), e);
            case dt:
                return (((e = vf(13, n, t, i)).elementType = dt), (e.lanes = a), e);
            case pt:
                return (((e = vf(19, n, t, i)).elementType = pt), (e.lanes = a), e);
            case mt:
                return _f(n, i, a, t);
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
function xf(e, t, n, r, i, a, o, l, u) {
    return (
        (e = new Sf(e, t, n, l, u)),
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
        if (En((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(Be(170));
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
        throw Error(Be(171));
    }
    if (1 === e.tag) {
        var n = e.type;
        if (mo(n)) return bo(e, n, t);
    }
    return t;
}
function Ef(e, t, n, r, i, a, o, l, u) {
    return (
        ((e = xf(n, r, !0, e, 0, a, 0, l, u)).context = Of(null)),
        (n = e.current),
        ((a = kl((r = Mc()), (i = Dc(n)))).callback = null != t ? t : null),
        Sl(n, a, i),
        (e.current.lanes = i),
        tr(e, i, r),
        Fc(e, r),
        e
    );
}
function Pf(e, t, n, r) {
    var i = t.current,
        a = Mc(),
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
function jf(e, t) {
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
                                mo(t.type) && _o(t);
                                break;
                            case 4:
                                Rl(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context,
                                    i = t.memoizedProps.value;
                                (so(ol, r._currentValue), (r._currentValue = i));
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState))
                                    return null !== r.dehydrated
                                        ? (so(Ml, 1 & Ml.current), (t.flags |= 128), null)
                                        : 0 != (n & t.child.childLanes)
                                          ? _s(e, t, n)
                                          : (so(Ml, 1 & Ml.current), null !== (e = Ps(e, t, n)) ? e.sibling : null);
                                so(Ml, 1 & Ml.current);
                                break;
                            case 19:
                                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                    if (r) return Os(e, t, n);
                                    t.flags |= 128;
                                }
                                if (
                                    (null !== (i = t.memoizedState) &&
                                        ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                                    so(Ml, Ml.current),
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
    else ((ns = !1), Bo && 0 != (1048576 & t.flags) && Mo(t, jo, t.index));
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            (Es(e, t), (e = t.pendingProps));
            var i = vo(t, fo.current);
            (pl(t, n), (i = Jl(null, t, r, e, i, n)));
            var a = eu();
            return (
                (t.flags |= 1),
                'object' == typeof i && null !== i && 'function' == typeof i.render && void 0 === i.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      mo(r) ? ((a = !0), _o(t)) : (a = !1),
                      (t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null),
                      _l(t),
                      (i.updater = Uu),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      qu(t, r, e, n),
                      (t = fs(null, t, r, !0, a, n)))
                    : ((t.tag = 0), Bo && a && Do(t), rs(null, t, i, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Es(e, t),
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
                    (e = Vu(r, e)),
                    i)
                ) {
                    case 0:
                        t = ss(null, t, r, e, n);
                        break e;
                    case 1:
                        t = cs(null, t, r, e, n);
                        break e;
                    case 11:
                        t = is(null, t, r, e, n);
                        break e;
                    case 14:
                        t = as(null, t, r, Vu(r.type, e), n);
                        break e;
                }
                throw Error(Be(306, r, ''));
            }
            return t;
        case 0:
            return ((r = t.type), (i = t.pendingProps), ss(e, t, r, (i = t.elementType === r ? i : Vu(r, i)), n));
        case 1:
            return ((r = t.type), (i = t.pendingProps), cs(e, t, r, (i = t.elementType === r ? i : Vu(r, i)), n));
        case 3:
            e: {
                if ((ds(t), null === e)) throw Error(Be(387));
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
                        t = ps(e, t, r, n, (i = Hu(Error(Be(423)), t)));
                        break e;
                    }
                    if (r !== i) {
                        t = ps(e, t, r, n, (i = Hu(Error(Be(424)), t)));
                        break e;
                    }
                    for (
                        Uo = Ha(t.stateNode.containerInfo.firstChild),
                            Fo = t,
                            Bo = !0,
                            $o = null,
                            n = al(t, null, r, n),
                            t.child = n;
                        n;
                    )
                        ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                    if ((Xo(), r === i)) {
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
                null === e && Go(t),
                (r = t.type),
                (i = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (o = i.children),
                Va(r, i) ? (o = null) : null !== a && Va(r, a) && (t.flags |= 32),
                us(e, t),
                rs(e, t, o, n),
                t.child
            );
        case 6:
            return (null === e && Go(t), null);
        case 13:
            return _s(e, t, n);
        case 4:
            return (
                Rl(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = il(t, null, r, n)) : rs(e, t, r, n),
                t.child
            );
        case 11:
            return ((r = t.type), (i = t.pendingProps), is(e, t, r, (i = t.elementType === r ? i : Vu(r, i)), n));
        case 7:
            return (rs(e, t, t.pendingProps, n), t.child);
        case 8:
        case 12:
            return (rs(e, t, t.pendingProps.children, n), t.child);
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (i = t.pendingProps),
                    (a = t.memoizedProps),
                    (o = i.value),
                    so(ol, r._currentValue),
                    (r._currentValue = o),
                    null !== a)
                )
                    if (Wi(a.value, o)) {
                        if (a.children === i.children && !po.current) {
                            t = Ps(e, t, n);
                            break e;
                        }
                    } else
                        for (null !== (a = t.child) && (a.return = t); null !== a; ) {
                            var l = a.dependencies;
                            if (null !== l) {
                                o = a.child;
                                for (var u = l.firstContext; null !== u; ) {
                                    if (u.context === r) {
                                        if (1 === a.tag) {
                                            (u = kl(-1, n & -n)).tag = 2;
                                            var s = a.updateQueue;
                                            if (null !== s) {
                                                var c = (s = s.shared).pending;
                                                (null === c ? (u.next = u) : ((u.next = c.next), (c.next = u)),
                                                    (s.pending = u));
                                            }
                                        }
                                        ((a.lanes |= n),
                                            null !== (u = a.alternate) && (u.lanes |= n),
                                            dl(a.return, n, t),
                                            (l.lanes |= n));
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (10 === a.tag) o = a.type === t.type ? null : a.child;
                            else if (18 === a.tag) {
                                if (null === (o = a.return)) throw Error(Be(341));
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
                (rs(e, t, i.children, n), (t = t.child));
            }
            return t;
        case 9:
            return (
                (i = t.type),
                (r = t.pendingProps.children),
                pl(t, n),
                (r = r((i = hl(i)))),
                (t.flags |= 1),
                rs(e, t, r, n),
                t.child
            );
        case 14:
            return ((i = Vu((r = t.type), t.pendingProps)), as(e, t, r, (i = Vu(r.type, i)), n));
        case 15:
            return os(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Vu(r, i)),
                Es(e, t),
                (t.tag = 1),
                mo(r) ? ((e = !0), _o(t)) : (e = !1),
                pl(t, n),
                $u(t, r, i),
                qu(t, r, i, n),
                fs(null, t, r, !0, e, n)
            );
        case 19:
            return Os(e, t, n);
        case 22:
            return ls(e, t, n);
    }
    throw Error(Be(156, t.tag));
};
var Nf =
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
function Mf(e, t, n, r, i) {
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
                var o = Ef(t, r, e, 0, null, !1, 0, '', If);
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
                    var e = Cf(u);
                    l.call(e);
                };
            }
            var u = xf(e, 0, !1, null, 0, !1, 0, '', If);
            return (
                (e._reactRootContainer = u),
                (e[Xa] = u.current),
                Oa(8 === e.nodeType ? e.parentNode : e),
                Gc(function () {
                    Pf(t, u, n, r);
                }),
                u
            );
        })(n, t, e, i, r);
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
                (Gc(function () {
                    Pf(null, e, null, null);
                }),
                    (t[Xa] = null));
            }
        }),
    (Rf.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = ur();
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
                    0 !== n && (nr(t, 1 | n), Fc(t, zn()), 0 == (6 & fc) && ((Oc = zn() + 500), Eo()));
                }
                break;
            case 13:
                (Gc(function () {
                    var t = yl(e, 1);
                    if (null !== t) {
                        var n = Mc();
                        Vc(t, e, 1, n);
                    }
                }),
                    jf(e, 1));
        }
    }),
    (or = function (e) {
        if (13 === e.tag) {
            var t = yl(e, 134217728);
            if (null !== t) Vc(t, e, 134217728, Mc());
            jf(e, 134217728);
        }
    }),
    (lr = function (e) {
        if (13 === e.tag) {
            var t = Dc(e),
                n = yl(e, t);
            if (null !== n) Vc(n, e, t, Mc());
            jf(e, t);
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
                            var i = io(r);
                            if (!i) throw Error(Be(90));
                            (jt(r), zt(r, i));
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
    var Uf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Uf.isDisabled && Uf.supportsFiber)
        try {
            ((Bn = Uf.inject(Ff)), ($n = Uf));
        } catch (Gt) {}
}
((Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Df),
    (Ie.createPortal = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Lf(t)) throw Error(Be(200));
        return (function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: at, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
        })(e, t, null, n);
    }),
    (Ie.createRoot = function (e, t) {
        if (!Lf(e)) throw Error(Be(299));
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
        return Gc(e);
    }),
    (Ie.hydrate = function (e, t, n) {
        if (!zf(t)) throw Error(Be(200));
        return Mf(null, e, t, !0, n);
    }),
    (Ie.hydrateRoot = function (e, t, n) {
        if (!Lf(e)) throw Error(Be(405));
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
    (Ie.render = function (e, t, n) {
        if (!zf(t)) throw Error(Be(200));
        return Mf(null, e, t, !1, n);
    }),
    (Ie.unmountComponentAtNode = function (e) {
        if (!zf(e)) throw Error(Be(40));
        return (
            !!e._reactRootContainer &&
            (Gc(function () {
                Mf(null, null, e, !1, function () {
                    ((e._reactRootContainer = null), (e[Xa] = null));
                });
            }),
            !0)
        );
    }),
    (Ie.unstable_batchedUpdates = Hc),
    (Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!zf(n)) throw Error(Be(200));
        if (null == e || void 0 === e._reactInternals) throw Error(Be(38));
        return Mf(e, t, n, !1, r);
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
    qf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ((Wf = qf),
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
        Wf.exports ? ((t.default = t), (Wf.exports = t)) : (window.classNames = t);
    })());
const Hf = n(qf.exports);
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
function ad(e) {
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
var jd = Symbol('mobx-stored-annotations');
function Nd(e) {
    return Object.assign(function (t, n) {
        if (Rd(n)) return e.decorate_20223_(t, n);
        Td(t, n, e);
    }, e);
}
function Td(e, t, n) {
    (_d(e, jd) || dd(e, jd, xd({}, e[jd])),
        (function (e) {
            return e.annotationType_ === Ud;
        })(n) || (e[jd][t] = n));
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
function Md(e, t, n) {
    (void 0 === t && (t = od), void 0 === n && (n = od));
    var r,
        i = new zd(e);
    return (t !== od && Mh(Lh, i, t, r), n !== od && Ih(i, n), i);
}
var Dd = {
    structural: function (e, t) {
        return am(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
    shallow: function (e, t) {
        return am(e, t, 1);
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
                : 'function' != typeof e || jh(e) || Yh(e)
                  ? e
                  : fd(e)
                    ? Kh(e)
                    : Ah(n, e);
}
function Fd(e) {
    return e;
}
var Ud = 'override';
function Bd(e, t) {
    return { annotationType_: e, options_: t, make_: $d, extend_: Wd, decorate_20223_: qd };
}
function $d(e, t, n, r) {
    var i;
    if (null != (i = this.options_) && i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (jh(n.value)) return 1;
    var a = Hd(e, this, t, n, !1);
    return (Zf(r, t, a), 2);
}
function Wd(e, t, n, r) {
    var i = Hd(e, this, t, n);
    return e.defineProperty_(t, i, r);
}
function qd(e, t) {
    var n = t.kind,
        r = t.name,
        i = t.addInitializer,
        a = this;
    if ('field' != n) {
        var o, l, u, s, c, f;
        if ('method' == n)
            return (
                jh(e) ||
                    ((l = e),
                    (e = Lp(
                        null != (u = null == (s = a.options_) ? void 0 : s.name) ? u : r.toString(),
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
        Gf(
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
            Td(this, r, a);
        });
}
function Hd(e, t, n, r, i) {
    var a, o, l, u, s, c, f, d;
    (void 0 === i && (i = oh.safeDescriptors), (d = r), t.annotationType_, d.value);
    var p,
        h = r.value;
    null != (a = t.options_) && a.bound && (h = h.bind(null != (p = e.proxy_) ? p : e.target_));
    return {
        value: Lp(
            null != (o = null == (l = t.options_) ? void 0 : l.name) ? o : n.toString(),
            h,
            null != (u = null == (s = t.options_) ? void 0 : s.autoAction) && u,
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
    var a = Xd(e, this, t, n, !1, !1);
    return (Zf(r, t, a), 2);
}
function Qd(e, t, n, r) {
    var i,
        a = Xd(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
    return e.defineProperty_(t, a, r);
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
function Xd(e, t, n, r, i, a) {
    var o;
    (void 0 === a && (a = oh.safeDescriptors), (o = r), t.annotationType_, o.value);
    var l,
        u = r.value;
    (Yh(u) || (u = Kh(u)), i) && ((u = u.bind(null != (l = e.proxy_) ? l : e.target_)).isMobXFlow = !0);
    return { value: u, configurable: !a || e.isPlainObject_, enumerable: !1, writable: !a };
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
    return { annotationType_: e, options_: t, make_: rp, extend_: ip, decorate_20223_: ap };
}
function rp(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function ip(e, t, n, r) {
    var i, a;
    return (
        this.annotationType_,
        e.defineObservableProperty_(
            t,
            n.value,
            null != (i = null == (a = this.options_) ? void 0 : a.enhancer) ? i : Vd,
            r,
        )
    );
}
function ap(e, t) {
    var n = this,
        r = t.kind,
        i = t.name,
        a = new WeakSet();
    function o(e, t) {
        var r,
            o,
            l = Dv(e)[Ld],
            u = new Vp(
                t,
                null != (r = null == (o = n.options_) ? void 0 : o.enhancer) ? r : Vd,
                'ObservableObject.' + i.toString(),
                !1,
            );
        (l.values_.set(i, u), a.add(e));
    }
    if ('accessor' == r)
        return {
            get: function () {
                return (a.has(this) || o(this, e.get.call(this)), this[Ld].getObservablePropValue_(i));
            },
            set: function (e) {
                return (a.has(this) || o(this, e), this[Ld].setObservablePropValue_(i, e));
            },
            init: function (e) {
                return (a.has(this) || o(this, e), e);
            },
        };
}
var op = 'true',
    lp = up();
function up(e) {
    return { annotationType_: op, options_: e, make_: sp, extend_: cp, decorate_20223_: fp };
}
function sp(e, t, n, r) {
    var i, a, o, l;
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
            ? (null != (l = this.options_) && l.autoBind ? Kh.bound : Kh).make_(e, t, n, r)
            : (null != (o = this.options_) && o.autoBind ? Ah.bound : Ah).make_(e, t, n, r);
    var s,
        c = !1 === (null == (i = this.options_) ? void 0 : i.deep) ? xp.ref : xp;
    'function' == typeof n.value &&
        null != (a = this.options_) &&
        a.autoBind &&
        (n.value = n.value.bind(null != (s = e.proxy_) ? s : e.target_));
    return c.make_(e, t, n, r);
}
function cp(e, t, n, r) {
    var i, a, o;
    if (n.get) return Cp.extend_(e, t, n, r);
    if (n.set)
        return e.defineProperty_(
            t,
            { configurable: !oh.safeDescriptors || e.isPlainObject_, set: Lp(t.toString(), n.set) },
            r,
        );
    'function' == typeof n.value &&
        null != (i = this.options_) &&
        i.autoBind &&
        (n.value = n.value.bind(null != (o = e.proxy_) ? o : e.target_));
    return (!1 === (null == (a = this.options_) ? void 0 : a.deep) ? xp.ref : xp).extend_(e, t, n, r);
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
            return null == e || Uv(e) || xv(e) || Nv(e) || Lv(e)
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
            return am(e, t) ? t : e;
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
            return (!1 === oh.useProxies || !1 === n.proxy ? Jv : vv)(e, bp(n), n.name);
        },
        map: function (e, t) {
            var n = pp(t);
            return new jv(e, bp(n), n.name);
        },
        set: function (e, t) {
            var n = pp(t);
            return new Rv(e, bp(n), n.name);
        },
        object: function (e, t, n) {
            return rm(function () {
                return Bh(
                    !1 === oh.useProxies || !1 === (null == n ? void 0 : n.proxy)
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
        if (ud(t)) return Td(e, t, Ep);
        if (cd(e)) return Nd(Zd(Op, e));
        var n = cd(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new Wp(n));
    };
(Object.assign(Cp, Ep), (Cp.struct = Nd(Pp)));
var Ap,
    jp = 0,
    Np = 1,
    Tp = null != (wp = null == (kp = Xf(function () {}, 'name')) ? void 0 : kp.configurable) && wp,
    Rp = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
function Lp(e, t, n, r) {
    function i() {
        return zp(e, n, t, r || this, arguments);
    }
    return (
        void 0 === n && (n = !1),
        (i.isMobxAction = !0),
        (i.toString = function () {
            return t.toString();
        }),
        Tp && ((Rp.value = e), Zf(i, 'name', Rp)),
        i
    );
}
function zp(e, t, n, r, i) {
    var a = (function (e, t, n, r) {
        var i = !1,
            a = 0,
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
                notifySpy_: i,
                startTime_: a,
                actionId_: Np++,
                parentActionId_: jp,
            };
        return ((jp = c.actionId_), c);
    })(0, t);
    try {
        return n.apply(r, i);
    } catch (o) {
        throw ((a.error_ = o), o);
    } finally {
        !(function (e) {
            jp !== e.actionId_ && Gf(30);
            ((jp = e.parentActionId_), void 0 !== e.error_ && (oh.suppressReactionErrors = !0));
            (Mp(e.prevAllowStateChanges_), th(e.prevAllowStateReads_), fh(), e.runAsAction_ && Jp(e.prevDerivation_));
            oh.suppressReactionErrors = !1;
        })(a);
    }
}
function Ip(e) {
    var t = oh.allowStateChanges;
    return ((oh.allowStateChanges = e), t);
}
function Mp(e) {
    oh.allowStateChanges = e;
}
Ap = Symbol.toPrimitive;
var Dp,
    Vp = (function (e) {
        function t(t, n, r, i, a) {
            var o;
            return (
                void 0 === r && (r = 'ObservableValue'),
                void 0 === a && (a = Dd.default),
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
                if (iv(this)) {
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
                return av(this, e);
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
Dp = Symbol.toPrimitive;
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
                (this.value_ = new Hp(null)),
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
                    0 !== oh.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                ) {
                    if ((dh(this), Kp(this))) {
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
                    n = Ip(!1);
                if (e) t = Qp(this, this.derivation, this.scope_);
                else if (!0 === oh.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                else
                    try {
                        t = this.derivation.call(this.scope_);
                    } catch (r) {
                        t = new Hp(r);
                    }
                return (Mp(n), (this.isComputing_ = !1), t);
            }),
            (t.suspend_ = function () {
                this.keepAlive_ || (Yp(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
                var n = this,
                    r = !0,
                    i = void 0;
                return (function (e, t) {
                    var n, r, i, a, o;
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
                    (null != (i = t) && null != (a = i.signal) && a.aborted) || l.schedule_();
                    return l.getDisposer_(null == (o = t) ? void 0 : o.signal);
                })(function () {
                    var a = n.get();
                    if (!r || t) {
                        var o = Zp();
                        (e({
                            observableKind: 'computed',
                            debugObjectName: n.name_,
                            type: dv,
                            object: n,
                            newValue: a,
                            oldValue: i,
                        }),
                            Jp(o));
                    }
                    ((r = !1), (i = a));
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
    qp = hd('ComputedValue', Wp);
(((Up = Fp || (Fp = {}))[(Up.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
    (Up[(Up.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
    (Up[(Up.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
    (Up[(Up.STALE_ = 2)] = 'STALE_'),
    (($p = Bp || (Bp = {}))[($p.NONE = 0)] = 'NONE'),
    ($p[($p.LOG = 1)] = 'LOG'),
    ($p[($p.BREAK = 2)] = 'BREAK'));
var Hp = function (e) {
    ((this.cause = void 0), (this.cause = e));
};
function Gp(e) {
    return e instanceof Hp;
}
function Kp(e) {
    switch (e.dependenciesState_) {
        case Fp.UP_TO_DATE_:
            return !1;
        case Fp.NOT_TRACKING_:
        case Fp.STALE_:
            return !0;
        case Fp.POSSIBLY_STALE_:
            for (var t = eh(!0), n = Zp(), r = e.observing_, i = r.length, a = 0; a < i; a++) {
                var o = r[a];
                if (qp(o)) {
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
    var i,
        a = oh.trackingDerivation;
    if (((oh.trackingDerivation = e), oh.inBatch++, !0 === oh.disableErrorBoundaries)) i = t.call(n);
    else
        try {
            i = t.call(n);
        } catch (o) {
            i = new Hp(o);
        }
    return (
        oh.inBatch--,
        (oh.trackingDerivation = a),
        (function (e) {
            for (
                var t = e.observing_,
                    n = (e.observing_ = e.newObserving_),
                    r = Fp.UP_TO_DATE_,
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
                var u = t[a];
                (0 === u.diffValue_ && uh(u, e), (u.diffValue_ = 0));
            }
            for (; i--; ) {
                var s = n[i];
                1 === s.diffValue_ && ((s.diffValue_ = 0), lh(s, e));
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
    ih = !0,
    ah = !1,
    oh = (function () {
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
                      ah || Gf(35);
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
        gh();
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
                this.isScheduled_ || ((this.isScheduled_ = !0), oh.pendingReactions.push(this), gh());
            }),
            (t.isScheduled = function () {
                return this.isScheduled_;
            }),
            (t.runReaction_ = function () {
                if (!this.isDisposed_) {
                    (ch(), (this.isScheduled_ = !1));
                    var e = oh.trackingContext;
                    if (((oh.trackingContext = this), Kp(this))) {
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
                        Gp(n) && this.reportExceptionInDerivation_(n.cause),
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
    mh = function (e) {
        return e();
    };
function gh() {
    oh.inBatch > 0 || oh.isRunningReactions || mh(yh);
}
function yh() {
    oh.isRunningReactions = !0;
    for (var e = oh.pendingReactions, t = 0; e.length > 0; ) {
        ++t === vh && (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
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
                    ? Nd(Bd(e ? wh : _h, { name: t, autoAction: e }))
                    : void 0;
    };
}
var Ch = Ph(!1);
Object.assign(Ch, Sh);
var Ah = Ph(!0);
function jh(e) {
    return ld(e) && !0 === e.isMobxAction;
}
(Object.assign(Ah, Oh), (Ch.bound = Nd(xh)), (Ah.bound = Nd(Eh)));
var Nh = function (e) {
    return e();
};
function Th(e) {
    return e.scheduler
        ? e.scheduler
        : e.delay
          ? function (t) {
                return setTimeout(t, e.delay);
            }
          : Nh;
}
function Rh(e, t, n) {
    var r, i, a, o;
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
                    var n = Ip(e);
                    try {
                        return t();
                    } finally {
                        Mp(n);
                    }
                })(!1, function () {
                    return e(y);
                });
                ((t = v || !g(s, n)), (c = s), (s = n));
            }),
                ((v && n.fireImmediately) || (!v && t)) && d(s, c, y),
                (v = !1));
        }
    }
    return (
        (null != (i = n) && null != (a = i.signal) && a.aborted) || y.schedule_(),
        y.getDisposer_(null == (o = n) ? void 0 : o.signal)
    );
}
var Lh = 'onBO',
    zh = 'onBUO';
function Ih(e, t, n) {
    return Mh(zh, e, t, n);
}
function Mh(e, t, n, r) {
    var i = em(t),
        a = ld(r) ? r : n,
        o = e + 'L';
    return (
        i[o] ? i[o].add(a) : (i[o] = new Set([a])),
        function () {
            var e = i[o];
            e && (e.delete(a), 0 === e.size && delete i[o]);
        }
    );
}
var Dh = 'never',
    Vh = 'always',
    Fh = 'observed';
function Uh(e) {
    !0 === e.isolateGlobalState &&
        (function () {
            if (((oh.pendingReactions.length || oh.inBatch || oh.isRunningReactions) && Gf(36), (ah = !0), ih)) {
                var e = Qf();
                (0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0), (oh = new rh()));
            }
        })();
    var t,
        n,
        r = e.useProxies,
        i = e.enforceActions;
    if (
        (void 0 !== r && (oh.useProxies = r === Vh || (r !== Dh && 'undefined' != typeof Proxy)),
        'ifavailable' === r && (oh.verifyProxies = !0),
        void 0 !== i)
    ) {
        var a = i === Vh ? Vh : i === Fh;
        ((oh.enforceActions = a), (oh.allowStateChanges = !0 !== a && a !== Vh));
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
            (n = mh),
            (mh = function (e) {
                return t(function () {
                    return n(e);
                });
            })));
}
function Bh(e, t, n, r) {
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
function qh() {
    this.message = 'FLOW_CANCELLED';
}
qh.prototype = Object.create(Error.prototype);
var Hh = Gd('flow'),
    Gh = Gd('flow.bound', { bound: !0 }),
    Kh = Object.assign(function (e, t) {
        if (Rd(t)) return Hh.decorate_20223_(e, t);
        if (ud(t)) return Td(e, t, Hh);
        var n = e,
            r = n.name || '<unnamed flow>',
            i = function () {
                var e,
                    t = arguments,
                    i = ++Wh,
                    a = Ch(r + ' - runid: ' + i + ' - init', n).apply(this, t),
                    o = void 0,
                    l = new Promise(function (t, n) {
                        var l = 0;
                        function u(e) {
                            var t;
                            o = void 0;
                            try {
                                t = Ch(r + ' - runid: ' + i + ' - yield ' + l++, a.next).call(a, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function s(e) {
                            var t;
                            o = void 0;
                            try {
                                t = Ch(r + ' - runid: ' + i + ' - yield ' + l++, a.throw).call(a, e);
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
                    (l.cancel = Ch(r + ' - runid: ' + i + ' - cancel', function () {
                        try {
                            o && Qh(o);
                            var t = a.return(void 0),
                                n = Promise.resolve(t.value);
                            (n.then(od, od), Qh(n), e(new qh()));
                        } catch (r) {
                            e(r);
                        }
                    })),
                    l
                );
            };
        return ((i.isMobXFlow = !0), i);
    }, Hh);
function Qh(e) {
    ld(e.cancel) && e.cancel();
}
function Yh(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function Xh(e, t) {
    if (void 0 === t) return qp(e);
    if (!1 === Uv(e)) return !1;
    if (!e[Ld].values_.has(t)) return !1;
    var n = em(e, t);
    return qp(n);
}
function Zh(e, t) {
    return Xh(e, t);
}
function Jh(e) {
    return (function (e, t) {
        return !!e && (Uv(e) || !!e[Ld] || Id(e) || bh(e) || qp(e));
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
        Gf(13);
    },
};
function iv(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
}
function av(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
        n.push(t),
        ad(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function ov(e, t) {
    var n = Zp();
    try {
        for (
            var r = [].concat(e.interceptors_ || []), i = 0, a = r.length;
            i < a && ((t = r[i](t)) && !t.type && Gf(14), t);
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
function uv(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
        n.push(t),
        ad(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function sv(e, t) {
    var n = Zp(),
        r = e.changeListeners_;
    if (r) {
        for (var i = 0, a = (r = r.slice()).length; i < a; i++) r[i](t);
        Jp(n);
    }
}
function cv(e, t, n) {
    return (
        rm(function () {
            var r = Dv(e, n)[Ld];
            (null != t ||
                (t = (function (e) {
                    return (_d(e, jd) || dd(e, jd, xd({}, e[jd])), e[jd]);
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
                return av(this, e);
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
                    var a = ov(this, { object: this.proxy_, type: fv, index: e, removedCount: t, added: n });
                    if (!a) return ed;
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
                    i = lv(this),
                    a =
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
                (this.atom_.reportChanged(), i && sv(this, a));
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    i = lv(this),
                    a =
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
                (this.atom_.reportChanged(), i && sv(this, a));
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
                        var i = ov(this, { type: dv, object: this.proxy_, index: e, newValue: t });
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
function vv(e, t, n, r) {
    return (
        void 0 === n && (n = 'ObservableArray'),
        void 0 === r && (r = !1),
        id(),
        rm(function () {
            var i = new hv(n, t, r, !1);
            pd(i.values_, Ld, i);
            var a = new Proxy(i.values_, pv);
            return ((i.proxy_ = a), e && e.length && i.spliceWithArray_(0, 0, e), a);
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
        var a = this[Ld];
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
        return (oh.trackingDerivation && Gf(37, 'reverse'), this.replace(this.slice().reverse()), this);
    },
    sort: function () {
        oh.trackingDerivation && Gf(37, 'sort');
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
    return sd(e) && Sv(e[Ld]);
}
var Ov = {},
    Ev = 'add',
    Pv = 'delete';
((wv = Symbol.iterator), (kv = Symbol.toStringTag));
var Cv,
    Av,
    jv = (function () {
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
                    ((r.keysAtom_ = Md('ObservableMap.keys()')),
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
                if (iv(this)) {
                    var r = ov(this, { type: n ? dv : Ev, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, iv(this)) && !ov(this, { type: Pv, object: this, name: e })) return !1;
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
                    (n.setNewValue_(t), r && sv(this, i));
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
                r && sv(this, i);
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
                return um({
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
                return um({
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
                        a = i[0],
                        o = i[1];
                    e.call(t, o, a, this);
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
                                a = !1,
                                o = Ad(t.data_.keys());
                            !(n = o()).done;
                        ) {
                            var l = n.value;
                            if (!r.has(l))
                                if (t.delete(l)) a = !0;
                                else {
                                    var u = t.data_.get(l);
                                    i.set(l, u);
                                }
                        }
                        for (var s, c = Ad(r.entries()); !(s = c()).done; ) {
                            var f = s.value,
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
                return uv(this, e);
            }),
            (t.intercept_ = function (e) {
                return av(this, e);
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
    Nv = hd('ObservableMap', jv);
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
                ld(Set) || Gf(22),
                (this.enhancer_ = function (e, r) {
                    return t(e, r, n);
                }),
                rm(function () {
                    ((r.atom_ = Md(r.name_)), e && r.replace(e));
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
                if ((this.atom_, iv(this)) && !ov(this, { type: Ev, object: this, newValue: e })) return this;
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
                if (iv(this) && !ov(this, { type: Pv, object: this, oldValue: e })) return !1;
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
                return um({
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
                return um({
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
                return uv(this, e);
            }),
            (t.intercept_ = function (e) {
                return av(this, e);
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
    Mv = (function () {
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
                if (iv(this)) {
                    var r = ov(this, { type: dv, object: this.proxy_ || this.target_, name: e, newValue: t });
                    if (!r) return null;
                    t = r.newValue;
                }
                if ((t = n.prepareNewValue_(t)) !== oh.UNCHANGED) {
                    var i = lv(this),
                        a = i
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
                    (n.setNewValue_(t), i && sv(this, a));
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
                        if (null != (n = this.target_[jd]) && n[e]) return;
                        Gf(1, t.annotationType_, this.name_ + '.' + e.toString());
                    }
                    for (var r = this.target_; r && r !== Jf; ) {
                        var i = Xf(r, e);
                        if (i) {
                            var a = t.make_(this, e, i, r);
                            if (0 === a) return;
                            if (1 === a) break;
                        }
                        r = Object.getPrototypeOf(r);
                    }
                    Bv(this, t, e);
                }
            }),
            (t.extend_ = function (e, t, n, r) {
                if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                    return this.defineProperty_(e, t, r);
                var i = n.extend_(this, e, t, r);
                return (i && Bv(this, n, e), i);
            }),
            (t.defineProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    ch();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (iv(this)) {
                        var i = ov(this, { object: this.proxy_ || this.target_, name: e, type: Ev, newValue: t.value });
                        if (!i) return null;
                        var a = i.newValue;
                        t.value !== a && (t = xd({}, t, { value: a }));
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
                        var a = ov(this, { object: this.proxy_ || this.target_, name: e, type: Ev, newValue: t });
                        if (!a) return null;
                        t = a.newValue;
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
                    if (iv(this))
                        if (!ov(this, { object: this.proxy_ || this.target_, name: e, type: Ev, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var i = Fv(e),
                        a = {
                            configurable: !oh.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: i.get,
                            set: i.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, a)) return !1;
                    } else Zf(this.target_, e, a);
                    (this.values_.set(e, new Wp(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    fh();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !_d(this.target_, e))) return !0;
                if (iv(this) && !ov(this, { object: this.proxy_ || this.target_, name: e, type: Iv })) return null;
                try {
                    var n, r;
                    ch();
                    var i,
                        a = lv(this),
                        o = this.values_.get(e),
                        l = void 0;
                    if (!o && a) l = null == (i = Xf(this.target_, e)) ? void 0 : i.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (o && (this.values_.delete(e), o instanceof Vp && (l = o.value_), ph(o)),
                        this.keysAtom_.reportChanged(),
                        null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
                        a)
                    ) {
                        var u = {
                            type: Iv,
                            observableKind: 'object',
                            object: this.proxy_ || this.target_,
                            debugObjectName: this.name_,
                            oldValue: l,
                            name: e,
                        };
                        (0, a && sv(this, u));
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
                return av(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
                var n,
                    r,
                    i = lv(this);
                if (i) {
                    var a = i
                        ? {
                              type: Ev,
                              observableKind: 'object',
                              debugObjectName: this.name_,
                              object: this.proxy_ || this.target_,
                              name: e,
                              newValue: t,
                          }
                        : null;
                    i && sv(this, a);
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
        i = new Mv(
            e,
            new Map(),
            String(r),
            (function (e) {
                var t;
                return e ? (null != (t = e.defaultDecorator) ? t : up(e)) : void 0;
            })(t),
        );
    return (dd(e, Ld, i), e);
}
var Vv = hd('ObservableObjectAdministration', Mv);
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
    null == (r = e.target_[jd]) || delete r[n];
}
var $v,
    Wv,
    qv = Yv(0),
    Hv = (function () {
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
        var a;
        return (
            void 0 === r && (r = 'ObservableArray'),
            void 0 === i && (i = !1),
            (a = e.call(this) || this),
            rm(function () {
                var e = new hv(r, n, i, !0);
                ((e.proxy_ = Pd(a)),
                    pd(Pd(a), Ld, e),
                    t && t.length && a.spliceWithArray(0, 0, t),
                    Hv && Object.defineProperty(Pd(a), '0', qv));
            }),
            a
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
            return um({
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
        if (Uv(e)) {
            if (!t) return Gf(26);
            var r = e[Ld].values_.get(t);
            return (r || Gf(27, t, nm(e)), r);
        }
        if (Id(e) || qp(e) || bh(e)) return e;
    } else if (ld(e) && bh(e[Ld])) return e[Ld];
    Gf(28);
}
function tm(e, t) {
    return (
        e || Gf(29),
        void 0 !== t ? tm(em(e, t)) : Id(e) || qp(e) || bh(e) || Nv(e) || Lv(e) ? e : e[Ld] ? e[Ld] : void Gf(24, e)
    );
}
function nm(e, t) {
    var n;
    if (void 0 !== t) n = em(e, t);
    else {
        if (jh(e)) return e.name;
        n = Uv(e) || Nv(e) || Lv(e) ? tm(e) : em(e);
    }
    return n.name_;
}
function rm(e) {
    var t = Zp(),
        n = Ip(!0);
    ch();
    try {
        return e();
    } finally {
        (fh(), Mp(n), Jp(t));
    }
}
(Object.entries(mv).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && dd(Qv.prototype, t, n);
}),
    Zv(1e3));
var im = Jf.toString;
function am(e, t, n) {
    return (void 0 === n && (n = -1), om(e, t, n));
}
function om(e, t, n, r, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var a = typeof e;
    if ('function' !== a && 'object' !== a && 'object' != typeof t) return !1;
    var o = im.call(e);
    if (o !== im.call(t)) return !1;
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
    ((e = lm(e)), (t = lm(t)));
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
    (n < 0 && (n = -1), (i = i || []));
    for (var c = (r = r || []).length; c--; ) if (r[c] === e) return i[c] === t;
    if ((r.push(e), i.push(t), l)) {
        if ((c = e.length) !== t.length) return !1;
        for (; c--; ) if (!om(e[c], t[c], n - 1, r, i)) return !1;
    } else {
        var f,
            d = Object.keys(e);
        if (((c = d.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (!_d(t, (f = d[c])) || !om(e[f], t[f], n - 1, r, i)) return !1;
    }
    return (r.pop(), i.pop(), !0);
}
function lm(e) {
    return xv(e) ? e.slice() : vd(e) || Nv(e) || md(e) || Lv(e) ? Array.from(e.entries()) : e;
}
function um(e) {
    return ((e[Symbol.iterator] = sm), e);
}
function sm() {
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
var cm = Em(),
    fm = (e) => km(e, cm),
    dm = Em();
fm.write = (e) => km(e, dm);
var pm = Em();
fm.onStart = (e) => km(e, pm);
var hm = Em();
fm.onFrame = (e) => km(e, hm);
var vm = Em();
fm.onFinish = (e) => km(e, vm);
var mm = [];
fm.setTimeout = (e, t) => {
    const n = fm.now() + t,
        r = () => {
            const e = mm.findIndex((e) => e.cancel == r);
            (~e && mm.splice(e, 1), (_m -= ~e ? 1 : 0));
        },
        i = { time: n, handler: e, cancel: r };
    return (mm.splice(gm(n), 0, i), (_m += 1), Sm(), i);
};
var gm = (e) => ~(~mm.findIndex((t) => t.time > e) || ~mm.length);
((fm.cancel = (e) => {
    (pm.delete(e), hm.delete(e), vm.delete(e), cm.delete(e), dm.delete(e));
}),
    (fm.sync = (e) => {
        ((wm = !0), fm.batchedUpdates(e), (wm = !1));
    }),
    (fm.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            ((t = e), fm.onStart(n));
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                (pm.delete(n), (t = null));
            }),
            r
        );
    }));
var ym = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
((fm.use = (e) => (ym = e)),
    (fm.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (fm.batchedUpdates = (e) => e()),
    (fm.catch = console.error),
    (fm.frameLoop = 'always'),
    (fm.advance = () => {
        'demand' !== fm.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : Om();
    }));
var bm = -1,
    _m = 0,
    wm = !1;
function km(e, t) {
    wm ? (t.delete(e), e(0)) : (t.add(e), Sm());
}
function Sm() {
    bm < 0 && ((bm = 0), 'demand' !== fm.frameLoop && ym(xm));
}
function xm() {
    ~bm && (ym(xm), fm.batchedUpdates(Om));
}
function Om() {
    const e = bm;
    bm = fm.now();
    const t = gm(bm);
    (t && (Pm(mm.splice(0, t), (e) => e.handler()), (_m -= t)),
        _m ? (pm.flush(), cm.flush(e ? Math.min(64, bm - e) : 16.667), hm.flush(), dm.flush(), vm.flush()) : (bm = -1));
}
function Em() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            ((_m += t != e || e.has(n) ? 0 : 1), e.add(n));
        },
        delete: (n) => ((_m -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (_m -= t.size), Pm(t, (t) => t(n) && e.add(t)), (_m += e.size), (t = e));
        },
    };
}
function Pm(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            fm.catch(n);
        }
    });
}
var Cm = Object.defineProperty,
    Am = {};
function jm() {}
((e, t) => {
    for (var n in t) Cm(e, n, { get: t[n], enumerable: !0 });
})(Am, {
    assign: () => Wm,
    colors: () => Um,
    createStringInterpolator: () => Mm,
    skipAnimation: () => Bm,
    to: () => Dm,
    willAdvance: () => $m,
});
var Nm = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
function Tm(e, t) {
    if (Nm.arr(e)) {
        if (!Nm.arr(t) || e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
    }
    return e === t;
}
var Rm = (e, t) => e.forEach(t);
function Lm(e, t, n) {
    if (Nm.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var zm = (e) => (Nm.und(e) ? [] : Nm.arr(e) ? e : [e]);
function Im(e, t) {
    if (e.size) {
        const n = Array.from(e);
        (e.clear(), Rm(n, t));
    }
}
var Mm,
    Dm,
    Vm = (e, ...t) => Im(e, (e) => e(...t)),
    Fm = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    Um = null,
    Bm = !1,
    $m = jm,
    Wm = (e) => {
        (e.to && (Dm = e.to),
            e.now && (fm.now = e.now),
            void 0 !== e.colors && (Um = e.colors),
            null != e.skipAnimation && (Bm = e.skipAnimation),
            e.createStringInterpolator && (Mm = e.createStringInterpolator),
            e.requestAnimationFrame && fm.use(e.requestAnimationFrame),
            e.batchedUpdates && (fm.batchedUpdates = e.batchedUpdates),
            e.willAdvance && ($m = e.willAdvance),
            e.frameLoop && (fm.frameLoop = e.frameLoop));
    },
    qm = new Set(),
    Hm = [],
    Gm = [],
    Km = 0,
    Qm = {
        get idle() {
            return !qm.size && !Hm.length;
        },
        start(e) {
            Km > e.priority ? (qm.add(e), fm.onStart(Ym)) : (Xm(e), fm(Jm));
        },
        advance: Jm,
        sort(e) {
            if (Km) fm.onFrame(() => Qm.sort(e));
            else {
                const t = Hm.indexOf(e);
                ~t && (Hm.splice(t, 1), Zm(e));
            }
        },
        clear() {
            ((Hm = []), qm.clear());
        },
    };
function Ym() {
    (qm.forEach(Xm), qm.clear(), fm(Jm));
}
function Xm(e) {
    Hm.includes(e) || Zm(e);
}
function Zm(e) {
    Hm.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(Hm, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function Jm(e) {
    const t = Gm;
    for (let n = 0; n < Hm.length; n++) {
        const r = Hm[n];
        ((Km = r.priority), r.idle || ($m(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((Km = 0), ((Gm = Hm).length = 0), (Hm = t).length > 0);
}
var eg = {
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
    tg = '[-+]?\\d*\\.?\\d+',
    ng = tg + '%';
function rg(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var ig = new RegExp('rgb' + rg(tg, tg, tg)),
    ag = new RegExp('rgba' + rg(tg, tg, tg, tg)),
    og = new RegExp('hsl' + rg(tg, ng, ng)),
    lg = new RegExp('hsla' + rg(tg, ng, ng, tg)),
    ug = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    sg = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    cg = /^#([0-9a-fA-F]{6})$/,
    fg = /^#([0-9a-fA-F]{8})$/;
function dg(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function pg(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        i = 2 * n - r,
        a = dg(i, r, e + 1 / 3),
        o = dg(i, r, e),
        l = dg(i, r, e - 1 / 3);
    return (Math.round(255 * a) << 24) | (Math.round(255 * o) << 16) | (Math.round(255 * l) << 8);
}
function hg(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function vg(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function mg(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function gg(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function yg(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = cg.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : Um && void 0 !== Um[e]
                ? Um[e]
                : (t = ig.exec(e))
                  ? ((hg(t[1]) << 24) | (hg(t[2]) << 16) | (hg(t[3]) << 8) | 255) >>> 0
                  : (t = ag.exec(e))
                    ? ((hg(t[1]) << 24) | (hg(t[2]) << 16) | (hg(t[3]) << 8) | mg(t[4])) >>> 0
                    : (t = ug.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = fg.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = sg.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = og.exec(e))
                            ? (255 | pg(vg(t[1]), gg(t[2]), gg(t[3]))) >>> 0
                            : (t = lg.exec(e))
                              ? (pg(vg(t[1]), gg(t[2]), gg(t[3])) | mg(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var bg = (e, t, n) => {
    if (Nm.fun(e)) return e;
    if (Nm.arr(e)) return bg({ range: e, output: t, extrapolate: n });
    if (Nm.str(e.output[0])) return Mm(e);
    const r = e,
        i = r.output,
        a = r.range || [0, 1],
        o = r.extrapolateLeft || r.extrapolate || 'extend',
        l = r.extrapolateRight || r.extrapolate || 'extend',
        u = r.easing || ((e) => e);
    return (e) => {
        const t = (function (e, t) {
            for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
            return n - 1;
        })(e, a);
        return (function (e, t, n, r, i, a, o, l, u) {
            let s = u ? u(e) : e;
            if (s < t) {
                if ('identity' === o) return s;
                'clamp' === o && (s = t);
            }
            if (s > n) {
                if ('identity' === l) return s;
                'clamp' === l && (s = n);
            }
            if (r === i) return r;
            if (t === n) return e <= t ? r : i;
            t === -1 / 0 ? (s = -s) : n === 1 / 0 ? (s -= t) : (s = (s - t) / (n - t));
            ((s = a(s)), r === -1 / 0 ? (s = -s) : i === 1 / 0 ? (s += r) : (s = s * (i - r) + r));
            return s;
        })(e, a[t], a[t + 1], i[t], i[t + 1], u, o, l, r.map);
    };
};
var _g = Symbol.for('FluidValue.get'),
    wg = Symbol.for('FluidValue.observers'),
    kg = (e) => Boolean(e && e[_g]),
    Sg = (e) => (e && e[_g] ? e[_g]() : e),
    xg = (e) => e[wg] || null;
function Og(e, t) {
    const n = e[wg];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
var Eg = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            Pg(this, e);
        }
    },
    Pg = (e, t) => Ng(e, _g, t);
function Cg(e, t) {
    if (e[_g]) {
        let n = e[wg];
        (n || Ng(e, wg, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function Ag(e, t) {
    const n = e[wg];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[wg] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
var jg,
    Ng = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    Tg = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    Rg = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    Lg = new RegExp(`(${Tg.source})(%|[a-z]+)`, 'i'),
    zg = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    Ig = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    Mg = (e) => {
        const [t, n] = Dg(e);
        if (!t || Fm()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && Ig.test(n) ? Mg(n) : n || e;
    },
    Dg = (e) => {
        const t = Ig.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    Vg = (e, t, n, r, i) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
    Fg = (e) => {
        jg || (jg = Um ? new RegExp(`(${Object.keys(Um).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => Sg(e).replace(Ig, Mg).replace(Rg, yg).replace(jg, yg)),
            n = t.map((e) => e.match(Tg).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => bg({ ...e, output: t }));
        return (e) => {
            var n;
            const i = !Lg.test(t[0]) && (null == (n = t.find((e) => Lg.test(e))) ? void 0 : n.replace(Tg, ''));
            let a = 0;
            return t[0].replace(Tg, () => `${r[a++](e)}${i || ''}`).replace(zg, Vg);
        };
    },
    Ug = 'react-spring: ',
    Bg = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${Ug}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    $g = Bg(console.warn);
var Wg = Bg(console.warn);
function qg(e) {
    return Nm.str(e) && ('#' == e[0] || /\d/.test(e) || (!Fm() && Ig.test(e)) || e in (Um || {}));
}
var Hg = Fm() ? B.useEffect : B.useLayoutEffect,
    Gg = () => {
        const e = B.useRef(!1);
        return (
            Hg(
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
function Kg() {
    const e = B.useState()[1],
        t = Gg();
    return () => {
        t.current && e(Math.random());
    };
}
var Qg = (e) => B.useEffect(e, Yg),
    Yg = [];
function Xg(e) {
    const t = B.useRef();
    return (
        B.useEffect(() => {
            t.current = e;
        }),
        t.current
    );
}
var Zg = Symbol.for('Animated:node'),
    Jg = (e) => e && e[Zg],
    ey = (e, t) => {
        return ((n = e), (r = Zg), (i = t), Object.defineProperty(n, r, { value: i, writable: !0, configurable: !0 }));
        var n, r, i;
    },
    ty = (e) => e && e[Zg] && e[Zg].getPayload(),
    ny = class {
        constructor() {
            ey(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    ry = class extends ny {
        constructor(e) {
            (super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                Nm.num(this._value) && (this.lastPosition = this._value));
        }
        static create(e) {
            return new ry(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                Nm.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            ((this.done = !1),
                Nm.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null)));
        }
    },
    iy = class extends ry {
        constructor(e) {
            (super(0), (this._string = null), (this._toString = bg({ output: [e, e] })));
        }
        static create(e) {
            return new iy(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (Nm.str(e)) {
                if (e == this._string) return !1;
                ((this._string = e), (this._value = 1));
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null;
            }
            return !0;
        }
        reset(e) {
            (e && (this._toString = bg({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
        }
    },
    ay = { dependencies: null },
    oy = class extends ny {
        constructor(e) {
            (super(), (this.source = e), this.setValue(e));
        }
        getValue(e) {
            const t = {};
            return (
                Lm(this.source, (n, r) => {
                    var i;
                    (i = n) && i[Zg] === i ? (t[r] = n.getValue(e)) : kg(n) ? (t[r] = Sg(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            ((this.source = e), (this.payload = this._makePayload(e)));
        }
        reset() {
            this.payload && Rm(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return (Lm(e, this._addToPayload, t), Array.from(t));
            }
        }
        _addToPayload(e) {
            ay.dependencies && kg(e) && ay.dependencies.add(e);
            const t = ty(e);
            t && Rm(t, (e) => this.add(e));
        }
    },
    ly = class extends oy {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new ly(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map(uy)), !0);
        }
    };
function uy(e) {
    return (qg(e) ? iy : ry).create(e);
}
function sy(e) {
    const t = Jg(e);
    return t ? t.constructor : Nm.arr(e) ? ly : qg(e) ? iy : ry;
}
var cy = (e, t) => {
        const n = !Nm.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return B.forwardRef((r, i) => {
            const a = B.useRef(null),
                o =
                    n &&
                    B.useCallback(
                        (e) => {
                            a.current = (function (e, t) {
                                e && (Nm.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(i, e);
                        },
                        [i],
                    ),
                [l, u] = (function (e, t) {
                    const n = new Set();
                    ((ay.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                    return ((e = new oy(e)), (ay.dependencies = null), [e, n]);
                })(r, t),
                s = Kg(),
                c = () => {
                    const e = a.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && s();
                },
                f = new fy(c, u),
                d = B.useRef();
            (Hg(
                () => (
                    (d.current = f),
                    Rm(u, (e) => Cg(e, f)),
                    () => {
                        d.current && (Rm(d.current.deps, (e) => Ag(e, d.current)), fm.cancel(d.current.update));
                    }
                ),
            ),
                B.useEffect(c, []),
                Qg(() => () => {
                    const e = d.current;
                    Rm(e.deps, (t) => Ag(t, e));
                }));
            const p = t.getComponentProps(l.getValue());
            return B.createElement(e, { ...p, ref: o });
        });
    },
    fy = class {
        constructor(e, t) {
            ((this.update = e), (this.deps = t));
        }
        eventObserved(e) {
            'change' == e.type && fm.write(this.update);
        }
    };
var dy = Symbol.for('AnimatedComponent'),
    py = (
        e,
        {
            applyAnimatedValues: t = () => !1,
            createAnimatedStyle: n = (e) => new oy(e),
            getComponentProps: r = (e) => e,
        } = {},
    ) => {
        const i = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
            a = (e) => {
                const t = hy(e) || 'Anonymous';
                return (
                    ((e = Nm.str(e) ? a[e] || (a[e] = cy(e, i)) : e[dy] || (e[dy] = cy(e, i))).displayName =
                        `Animated(${t})`),
                    e
                );
            };
        return (
            Lm(e, (t, n) => {
                (Nm.arr(e) && (n = hy(t)), (a[n] = a(t)));
            }),
            { animated: a }
        );
    },
    hy = (e) => (Nm.str(e) ? e : e && Nm.str(e.displayName) ? e.displayName : (Nm.fun(e) && e.name) || null);
function vy(e, ...t) {
    return Nm.fun(e) ? e(...t) : e;
}
var my = (e, t) => !0 === e || !!(t && e && (Nm.fun(e) ? e(t) : zm(e).includes(t))),
    gy = (e, t) => (Nm.obj(e) ? t && e[t] : e),
    yy = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
    by = (e) => e,
    _y = (e, t = by) => {
        let n = wy;
        e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
        const r = {};
        for (const i of n) {
            const n = t(e[i], i);
            Nm.und(n) || (r[i] = n);
        }
        return r;
    },
    wy = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
    ky = {
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
function Sy(e) {
    const t = (function (e) {
        const t = {};
        let n = 0;
        if (
            (Lm(e, (e, r) => {
                ky[r] || ((t[r] = e), n++);
            }),
            n)
        )
            return t;
    })(e);
    if (t) {
        const n = { to: t };
        return (Lm(e, (e, r) => r in t || (n[r] = e)), n);
    }
    return { ...e };
}
function xy(e) {
    return (
        (e = Sg(e)),
        Nm.arr(e) ? e.map(xy) : qg(e) ? Am.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
    );
}
function Oy(e) {
    for (const t in e) return !0;
    return !1;
}
function Ey(e) {
    return Nm.fun(e) || (Nm.arr(e) && Nm.obj(e[0]));
}
function Py(e, t) {
    var n;
    (null == (n = e.ref) || n.delete(e), null == t || t.delete(e));
}
function Cy(e, t) {
    var n;
    t && e.ref !== t && (null == (n = e.ref) || n.delete(e), t.add(e), (e.ref = t));
}
var Ay = { tension: 170, friction: 26, mass: 1, damping: 1, easing: (e) => e, clamp: !1 };
function jy(e, t) {
    if (Nm.und(t.decay)) {
        const n = !Nm.und(t.tension) || !Nm.und(t.friction);
        ((!n && Nm.und(t.frequency) && Nm.und(t.damping) && Nm.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0));
    } else e.duration = void 0;
}
var Ny = [];
function Ty(e, { key: t, props: n, defaultProps: r, state: i, actions: a }) {
    return new Promise((o, l) => {
        let u,
            s,
            c = my(n.cancel ?? (null == r ? void 0 : r.cancel), t);
        if (c) p();
        else {
            Nm.und(n.pause) || (i.paused = my(n.pause, t));
            let e = null == r ? void 0 : r.pause;
            (!0 !== e && (e = i.paused || my(e, t)),
                (u = vy(n.delay || 0, t)),
                e ? (i.resumeQueue.add(d), a.pause()) : (a.resume(), d()));
        }
        function f() {
            (i.resumeQueue.add(d), i.timeouts.delete(s), s.cancel(), (u = s.time - fm.now()));
        }
        function d() {
            u > 0 && !Am.skipAnimation
                ? ((i.delayed = !0), (s = fm.setTimeout(p, u)), i.pauseQueue.add(f), i.timeouts.add(s))
                : p();
        }
        function p() {
            (i.delayed && (i.delayed = !1),
                i.pauseQueue.delete(f),
                i.timeouts.delete(s),
                e <= (i.cancelId || 0) && (c = !0));
            try {
                a.start({ ...n, callId: e, cancel: c }, o);
            } catch (t) {
                l(t);
            }
        }
    });
}
var Ry = (e, t) =>
        1 == t.length
            ? t[0]
            : t.some((e) => e.cancelled)
              ? Iy(e.get())
              : t.every((e) => e.noop)
                ? Ly(e.get())
                : zy(
                      e.get(),
                      t.every((e) => e.finished),
                  ),
    Ly = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
    zy = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
    Iy = (e) => ({ value: e, cancelled: !0, finished: !1 });
function My(e, t, n, r) {
    const { callId: i, parentId: a, onRest: o } = t,
        { asyncTo: l, promise: u } = n;
    return a || e !== l || t.reset
        ? (n.promise = (async () => {
              ((n.asyncId = i), (n.asyncTo = e));
              const s = _y(t, (e, t) => ('onRest' === t ? void 0 : e));
              let c, f;
              const d = new Promise((e, t) => ((c = e), (f = t))),
                  p = (e) => {
                      const t = (i <= (n.cancelId || 0) && Iy(r)) || (i !== n.asyncId && zy(r, !1));
                      if (t) throw ((e.result = t), f(e), e);
                  },
                  h = (e, t) => {
                      const a = new Vy(),
                          o = new Fy();
                      return (async () => {
                          if (Am.skipAnimation) throw (Dy(n), (o.result = zy(r, !1)), f(o), o);
                          p(a);
                          const l = Nm.obj(e) ? { ...e } : { ...t, to: e };
                          ((l.parentId = i),
                              Lm(s, (e, t) => {
                                  Nm.und(l[t]) && (l[t] = e);
                              }));
                          const u = await r.start(l);
                          return (
                              p(a),
                              n.paused &&
                                  (await new Promise((e) => {
                                      n.resumeQueue.add(e);
                                  })),
                              u
                          );
                      })();
                  };
              let v;
              if (Am.skipAnimation) return (Dy(n), zy(r, !1));
              try {
                  let t;
                  ((t = Nm.arr(e)
                      ? (async (e) => {
                            for (const t of e) await h(t);
                        })(e)
                      : Promise.resolve(e(h, r.stop.bind(r)))),
                      await Promise.all([t.then(c), d]),
                      (v = zy(r.get(), !0, !1)));
              } catch (m) {
                  if (m instanceof Vy) v = m.result;
                  else {
                      if (!(m instanceof Fy)) throw m;
                      v = m.result;
                  }
              } finally {
                  i == n.asyncId && ((n.asyncId = a), (n.asyncTo = a ? l : void 0), (n.promise = a ? u : void 0));
              }
              return (
                  Nm.fun(o) &&
                      fm.batchedUpdates(() => {
                          o(v, r, r.item);
                      }),
                  v
              );
          })())
        : u;
}
function Dy(e, t) {
    (Im(e.timeouts, (e) => e.cancel()),
        e.pauseQueue.clear(),
        e.resumeQueue.clear(),
        (e.asyncId = e.asyncTo = e.promise = void 0),
        t && (e.cancelId = t));
}
var Vy = class extends Error {
        constructor() {
            super(
                'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
            );
        }
    },
    Fy = class extends Error {
        constructor() {
            super('SkipAnimationSignal');
        }
    },
    Uy = (e) => e instanceof $y,
    By = 1,
    $y = class extends Eg {
        constructor() {
            (super(...arguments), (this.id = By++), (this._priority = 0));
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = Jg(this);
            return e && e.getValue();
        }
        to(...e) {
            return Am.to(this, e);
        }
        interpolate(...e) {
            return ($g(`${Ug}The "interpolate" function is deprecated in v9 (use "to" instead)`), Am.to(this, e));
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
            Og(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            (this.idle || Qm.sort(this), Og(this, { type: 'priority', parent: this, priority: e }));
        }
    },
    Wy = Symbol.for('SpringPhase'),
    qy = (e) => (1 & e[Wy]) > 0,
    Hy = (e) => (2 & e[Wy]) > 0,
    Gy = (e) => (4 & e[Wy]) > 0,
    Ky = (e, t) => (t ? (e[Wy] |= 3) : (e[Wy] &= -3)),
    Qy = (e, t) => (t ? (e[Wy] |= 4) : (e[Wy] &= -5)),
    Yy = class extends $y {
        constructor(e, t) {
            if (
                (super(),
                (this.animation = new (class {
                    constructor() {
                        ((this.changed = !1),
                            (this.values = Ny),
                            (this.toValues = null),
                            (this.fromValues = Ny),
                            (this.config = new (class {
                                constructor() {
                                    ((this.velocity = 0), Object.assign(this, Ay));
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
                !Nm.und(e) || !Nm.und(t))
            ) {
                const n = Nm.obj(e) ? { ...e } : { ...t, from: e };
                (Nm.und(n.default) && (n.default = !0), this.start(n));
            }
        }
        get idle() {
            return !(Hy(this) || this._state.asyncTo) || Gy(this);
        }
        get goal() {
            return Sg(this.animation.to);
        }
        get velocity() {
            const e = Jg(this);
            return e instanceof ry ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
        }
        get hasAnimated() {
            return qy(this);
        }
        get isAnimating() {
            return Hy(this);
        }
        get isPaused() {
            return Gy(this);
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
                o = ty(r.to);
            (!o && kg(r.to) && (i = zm(Sg(r.to))),
                r.values.forEach((l, u) => {
                    if (l.done) return;
                    const s = l.constructor == iy ? 1 : o ? o[u].lastPosition : i[u];
                    let c = r.immediate,
                        f = s;
                    if (!c) {
                        if (((f = l.lastPosition), a.tension <= 0)) return void (l.done = !0);
                        let t = (l.elapsedTime += e);
                        const n = r.fromValues[u],
                            i = null != l.v0 ? l.v0 : (l.v0 = Nm.arr(a.velocity) ? a.velocity[u] : a.velocity);
                        let o;
                        const d = a.precision || (n == s ? 0.005 : Math.min(1, 0.001 * Math.abs(s - n)));
                        if (Nm.und(a.duration))
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
                                    u = !Nm.und(r),
                                    p = n == s ? l.v0 > 0 : n < s;
                                let h,
                                    v = !1;
                                const m = 1,
                                    g = Math.ceil(e / m);
                                for (
                                    let e = 0;
                                    e < g && ((h = Math.abs(o) > t), h || ((c = Math.abs(s - f) <= d), !c));
                                    ++e
                                ) {
                                    u && ((v = f == s || f > s == p), v && ((o = -o * r), (f = s)));
                                    ((o += ((1e-6 * -a.tension * (f - s) + 0.001 * -a.friction * o) / a.mass) * m),
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
                                (f = n + a.easing(r) * (s - n)),
                                (o = (f - l.lastPosition) / e),
                                (c = 1 == r));
                        }
                        ((l.lastVelocity = o),
                            Number.isNaN(f) && (console.warn('Got NaN while animating:', this), (c = !0)));
                    }
                    (o && !o[u].done && (c = !1), c ? (l.done = !0) : (t = !1), l.setValue(f, a.round) && (n = !0));
                }));
            const l = Jg(this),
                u = l.getValue();
            if (t) {
                const e = Sg(r.to);
                ((u === e && !n) || a.decay ? n && a.decay && this._onChange(u) : (l.setValue(e), this._onChange(e)),
                    this._stop());
            } else n && this._onChange(u);
        }
        set(e) {
            return (
                fm.batchedUpdates(() => {
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
            if (Hy(this)) {
                const { to: e, config: t } = this.animation;
                fm.batchedUpdates(() => {
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
                Nm.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [Nm.obj(e) ? e : { ...t, to: e }]),
                Promise.all(n.map((e) => this._update(e))).then((e) => Ry(this, e))
            );
        }
        stop(e) {
            const { to: t } = this.animation;
            return (
                this._focus(this.get()),
                Dy(this._state, e && this._lastCallId),
                fm.batchedUpdates(() => this._stop(t, e)),
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
            ((n = Nm.obj(n) ? n[t] : n),
                (null == n || Ey(n)) && (n = void 0),
                (r = Nm.obj(r) ? r[t] : r),
                null == r && (r = void 0));
            const i = { to: n, from: r };
            return (
                qy(this) ||
                    (e.reverse && ([n, r] = [r, n]), (r = Sg(r)), Nm.und(r) ? Jg(this) || this._set(n) : this._set(r)),
                i
            );
        }
        _update({ ...e }, t) {
            const { key: n, defaultProps: r } = this;
            (e.default &&
                Object.assign(
                    r,
                    _y(e, (e, t) => (/^on/.test(t) ? gy(e, n) : e)),
                ),
                rb(this, e, 'onProps'),
                ib(this, 'onProps', e, this));
            const i = this._prepareNode(e);
            if (Object.isFrozen(this))
                throw Error(
                    'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                );
            const a = this._state;
            return Ty(++this._lastCallId, {
                key: n,
                props: e,
                defaultProps: r,
                state: a,
                actions: {
                    pause: () => {
                        Gy(this) ||
                            (Qy(this, !0),
                            Vm(a.pauseQueue),
                            ib(this, 'onPause', zy(this, Xy(this, this.animation.to)), this));
                    },
                    resume: () => {
                        Gy(this) &&
                            (Qy(this, !1),
                            Hy(this) && this._resume(),
                            Vm(a.resumeQueue),
                            ib(this, 'onResume', zy(this, Xy(this, this.animation.to)), this));
                    },
                    start: this._merge.bind(this, i),
                },
            }).then((n) => {
                if (e.loop && n.finished && (!t || !n.noop)) {
                    const t = Zy(e);
                    if (t) return this._update(t, !0);
                }
                return n;
            });
        }
        _merge(e, t, n) {
            if (t.cancel) return (this.stop(!0), n(Iy(this)));
            const r = !Nm.und(e.to),
                i = !Nm.und(e.from);
            if (r || i) {
                if (!(t.callId > this._lastToId)) return n(Iy(this));
                this._lastToId = t.callId;
            }
            const { key: a, defaultProps: o, animation: l } = this,
                { to: u, from: s } = l;
            let { to: c = u, from: f = s } = e;
            (!i || r || (t.default && !Nm.und(c)) || (c = f), t.reverse && ([c, f] = [f, c]));
            const d = !Tm(f, s);
            (d && (l.from = f), (f = Sg(f)));
            const p = !Tm(c, u);
            p && this._focus(c);
            const h = Ey(t.to),
                { config: v } = l,
                { decay: m, velocity: g } = v;
            ((r || i) && (v.velocity = 0),
                t.config &&
                    !h &&
                    (function (e, t, n) {
                        (n && (jy((n = { ...n }), t), (t = { ...n, ...t })), jy(e, t), Object.assign(e, t));
                        for (const o in Ay) null == e[o] && (e[o] = Ay[o]);
                        let { frequency: r, damping: i } = e;
                        const { mass: a } = e;
                        Nm.und(r) ||
                            (r < 0.01 && (r = 0.01),
                            i < 0 && (i = 0),
                            (e.tension = Math.pow((2 * Math.PI) / r, 2) * a),
                            (e.friction = (4 * Math.PI * i * a) / r));
                    })(v, vy(t.config, a), t.config !== o.config ? vy(o.config, a) : void 0));
            let y = Jg(this);
            if (!y || Nm.und(c)) return n(zy(this, !0));
            const b = Nm.und(t.reset) ? i && !t.default : !Nm.und(f) && my(t.reset, a),
                _ = b ? f : this.get(),
                w = xy(c),
                k = Nm.num(w) || Nm.arr(w) || qg(w),
                S = !h && (!k || my(o.immediate || t.immediate, a));
            if (p) {
                const e = sy(c);
                if (e !== y.constructor) {
                    if (!S)
                        throw Error(
                            `Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`,
                        );
                    y = this._set(w);
                }
            }
            const x = y.constructor;
            let O = kg(c),
                E = !1;
            if (!O) {
                const e = b || (!qy(this) && d);
                ((p || e) && ((E = Tm(xy(_), w)), (O = !E)),
                    ((Tm(l.immediate, S) || S) && Tm(v.decay, m) && Tm(v.velocity, g)) || (O = !0));
            }
            if (
                (E && Hy(this) && (l.changed && !b ? (O = !0) : O || this._stop(u)),
                !h &&
                    ((O || kg(u)) && ((l.values = y.getPayload()), (l.toValues = kg(c) ? null : x == iy ? [1] : zm(w))),
                    l.immediate != S && ((l.immediate = S), S || b || this._set(u)),
                    O))
            ) {
                const { onRest: e } = l;
                Rm(nb, (e) => rb(this, t, e));
                const r = zy(this, Xy(this, u));
                (Vm(this._pendingCalls, r),
                    this._pendingCalls.add(n),
                    l.changed &&
                        fm.batchedUpdates(() => {
                            var t;
                            ((l.changed = !b),
                                null == e || e(r, this),
                                b ? vy(o.onRest, r) : null == (t = l.onStart) || t.call(l, r, this));
                        }));
            }
            (b && this._set(_),
                h
                    ? n(My(t.to, t, this._state, this))
                    : O
                      ? this._start()
                      : Hy(this) && !p
                        ? this._pendingCalls.add(n)
                        : n(Ly(_)));
        }
        _focus(e) {
            const t = this.animation;
            e !== t.to && (xg(this) && this._detach(), (t.to = e), xg(this) && this._attach());
        }
        _attach() {
            let e = 0;
            const { to: t } = this.animation;
            (kg(t) && (Cg(t, this), Uy(t) && (e = t.priority + 1)), (this.priority = e));
        }
        _detach() {
            const { to: e } = this.animation;
            kg(e) && Ag(e, this);
        }
        _set(e, t = !0) {
            const n = Sg(e);
            if (!Nm.und(n)) {
                const e = Jg(this);
                if (!e || !Tm(n, e.getValue())) {
                    const r = sy(n);
                    (e && e.constructor == r ? e.setValue(n) : ey(this, r.create(n)),
                        e &&
                            fm.batchedUpdates(() => {
                                this._onChange(n, t);
                            }));
                }
            }
            return Jg(this);
        }
        _onStart() {
            const e = this.animation;
            e.changed || ((e.changed = !0), ib(this, 'onStart', zy(this, Xy(this, e.to)), this));
        }
        _onChange(e, t) {
            (t || (this._onStart(), vy(this.animation.onChange, e, this)),
                vy(this.defaultProps.onChange, e, this),
                super._onChange(e, t));
        }
        _start() {
            const e = this.animation;
            (Jg(this).reset(Sg(e.to)),
                e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                Hy(this) || (Ky(this, !0), Gy(this) || this._resume()));
        }
        _resume() {
            Am.skipAnimation ? this.finish() : Qm.start(this);
        }
        _stop(e, t) {
            if (Hy(this)) {
                Ky(this, !1);
                const n = this.animation;
                (Rm(n.values, (e) => {
                    e.done = !0;
                }),
                    n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                    Og(this, { type: 'idle', parent: this }));
                const r = t ? Iy(this.get()) : zy(this.get(), Xy(this, e ?? n.to));
                (Vm(this._pendingCalls, r), n.changed && ((n.changed = !1), ib(this, 'onRest', r, this)));
            }
        }
    };
function Xy(e, t) {
    const n = xy(t);
    return Tm(xy(e.get()), n);
}
function Zy(e, t = e.loop, n = e.to) {
    const r = vy(t);
    if (r) {
        const i = !0 !== r && Sy(r),
            a = (i || e).reverse,
            o = !i || i.reset;
        return Jy({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !a || Ey(n) ? n : void 0,
            from: o ? e.from : void 0,
            reset: o,
            ...i,
        });
    }
}
function Jy(e) {
    const { to: t, from: n } = (e = Sy(e)),
        r = new Set();
    return (Nm.obj(t) && tb(t, r), Nm.obj(n) && tb(n, r), (e.keys = r.size ? Array.from(r) : null), e);
}
function eb(e) {
    const t = Jy(e);
    return (Nm.und(t.default) && (t.default = _y(t)), t);
}
function tb(e, t) {
    Lm(e, (e, n) => null != e && t.add(n));
}
var nb = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
function rb(e, t, n) {
    e.animation[n] = t[n] !== yy(t, n) ? gy(t[n], e.key) : void 0;
}
function ib(e, t, ...n) {
    var r, i, a, o;
    (null == (i = (r = e.animation)[t]) || i.call(r, ...n), null == (o = (a = e.defaultProps)[t]) || o.call(a, ...n));
}
var ab = ['onStart', 'onChange', 'onRest'],
    ob = 1,
    lb = class {
        constructor(e, t) {
            ((this.id = ob++),
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
                Nm.und(n) || this.springs[t].set(n);
            }
        }
        update(e) {
            return (e && this.queue.push(Jy(e)), this);
        }
        start(e) {
            let { queue: t } = this;
            return (
                e ? (t = zm(e).map(Jy)) : (this.queue = []),
                this._flush ? this._flush(this, t) : (hb(this, t), ub(this, t))
            );
        }
        stop(e, t) {
            if ((e !== !!e && (t = e), t)) {
                const n = this.springs;
                Rm(zm(t), (t) => n[t].stop(!!e));
            } else (Dy(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
            return this;
        }
        pause(e) {
            if (Nm.und(e)) this.start({ pause: !0 });
            else {
                const t = this.springs;
                Rm(zm(e), (e) => t[e].pause());
            }
            return this;
        }
        resume(e) {
            if (Nm.und(e)) this.start({ pause: !1 });
            else {
                const t = this.springs;
                Rm(zm(e), (e) => t[e].resume());
            }
            return this;
        }
        each(e) {
            Lm(this.springs, e);
        }
        _onFrame() {
            const { onStart: e, onChange: t, onRest: n } = this._events,
                r = this._active.size > 0,
                i = this._changed.size > 0;
            ((r && !this._started) || (i && !this._started)) &&
                ((this._started = !0),
                Im(e, ([e, t]) => {
                    ((t.value = this.get()), e(t, this, this._item));
                }));
            const a = !r && this._started,
                o = i || (a && n.size) ? this.get() : null;
            (i &&
                t.size &&
                Im(t, ([e, t]) => {
                    ((t.value = o), e(t, this, this._item));
                }),
                a &&
                    ((this._started = !1),
                    Im(n, ([e, t]) => {
                        ((t.value = o), e(t, this, this._item));
                    })));
        }
        eventObserved(e) {
            if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
            else {
                if ('idle' != e.type) return;
                this._active.delete(e.parent);
            }
            fm.onFrame(this._onFrame);
        }
    };
function ub(e, t) {
    return Promise.all(t.map((t) => sb(e, t))).then((t) => Ry(e, t));
}
async function sb(e, t, n) {
    const { keys: r, to: i, from: a, loop: o, onRest: l, onResolve: u } = t,
        s = Nm.obj(t.default) && t.default;
    (o && (t.loop = !1), !1 === i && (t.to = null), !1 === a && (t.from = null));
    const c = Nm.arr(i) || Nm.fun(i) ? i : void 0;
    c
        ? ((t.to = void 0), (t.onRest = void 0), s && (s.onRest = void 0))
        : Rm(ab, (n) => {
              const r = t[n];
              if (Nm.fun(r)) {
                  const i = e._events[n];
                  ((t[n] = ({ finished: e, cancelled: t }) => {
                      const n = i.get(r);
                      n
                          ? (e || (n.finished = !1), t && (n.cancelled = !0))
                          : i.set(r, { value: null, finished: e || !1, cancelled: t || !1 });
                  }),
                      s && (s[n] = t[n]));
              }
          });
    const f = e._state;
    t.pause === !f.paused
        ? ((f.paused = t.pause), Vm(t.pause ? f.pauseQueue : f.resumeQueue))
        : f.paused && (t.pause = !0);
    const d = (r || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
        p = !0 === t.cancel || !0 === yy(t, 'cancel');
    ((c || (p && f.asyncId)) &&
        d.push(
            Ty(++e._lastAsyncId, {
                props: t,
                state: f,
                actions: {
                    pause: jm,
                    resume: jm,
                    start(t, n) {
                        p ? (Dy(f, e._lastAsyncId), n(Iy(e))) : ((t.onRest = l), n(My(c, t, f, e)));
                    },
                },
            }),
        ),
        f.paused &&
            (await new Promise((e) => {
                f.resumeQueue.add(e);
            })));
    const h = Ry(e, await Promise.all(d));
    if (o && h.finished && (!n || !h.noop)) {
        const n = Zy(t, o, i);
        if (n) return (hb(e, [n]), sb(e, n, !0));
    }
    return (u && fm.batchedUpdates(() => u(h, e, e.item)), h);
}
function cb(e, t) {
    const n = { ...e.springs };
    return (
        t &&
            Rm(zm(t), (e) => {
                (Nm.und(e.keys) && (e = Jy(e)), Nm.obj(e.to) || (e = { ...e, to: void 0 }), pb(n, e, (e) => db(e)));
            }),
        fb(e, n),
        n
    );
}
function fb(e, t) {
    Lm(t, (t, n) => {
        e.springs[n] || ((e.springs[n] = t), Cg(t, e));
    });
}
function db(e, t) {
    const n = new Yy();
    return ((n.key = e), t && Cg(n, t), n);
}
function pb(e, t, n) {
    t.keys &&
        Rm(t.keys, (r) => {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function hb(e, t) {
    Rm(t, (t) => {
        pb(e.springs, t, (t) => db(t, e));
    });
}
var vb,
    mb,
    gb = ({ children: e, ...t }) => {
        const n = B.useContext(yb),
            r = t.pause || !!n.pause,
            i = t.immediate || !!n.immediate;
        t = (function (e, t) {
            const [n] = B.useState(() => ({ inputs: t, result: e() })),
                r = B.useRef(),
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
                B.useEffect(() => {
                    ((r.current = a), i == n && (n.inputs = n.result = void 0));
                }, [a]),
                a.result
            );
        })(() => ({ pause: r, immediate: i }), [r, i]);
        const { Provider: a } = yb;
        return B.createElement(a, { value: t }, e);
    },
    yb =
        ((vb = gb),
        (mb = {}),
        Object.assign(vb, B.createContext(mb)),
        (vb.Provider._context = vb),
        (vb.Consumer._context = vb),
        vb);
((gb.Provider = yb.Provider), (gb.Consumer = yb.Consumer));
var bb = () => {
    const e = [],
        t = function (t) {
            Wg(
                `${Ug}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
            );
            const r = [];
            return (
                Rm(e, (e, i) => {
                    if (Nm.und(t)) r.push(e.start());
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
            return (Rm(e, (e) => e.pause(...arguments)), this);
        }),
        (t.resume = function () {
            return (Rm(e, (e) => e.resume(...arguments)), this);
        }),
        (t.set = function (t) {
            Rm(e, (e, n) => {
                const r = Nm.fun(t) ? t(n, e) : t;
                r && e.set(r);
            });
        }),
        (t.start = function (t) {
            const n = [];
            return (
                Rm(e, (e, r) => {
                    if (Nm.und(t)) n.push(e.start());
                    else {
                        const i = this._getProps(t, e, r);
                        i && n.push(e.start(i));
                    }
                }),
                n
            );
        }),
        (t.stop = function () {
            return (Rm(e, (e) => e.stop(...arguments)), this);
        }),
        (t.update = function (t) {
            return (Rm(e, (e, n) => e.update(this._getProps(t, e, n))), this);
        }));
    const n = function (e, t, n) {
        return Nm.fun(e) ? e(n, t) : e;
    };
    return ((t._getProps = n), t);
};
function _b(e, t, n) {
    const r = Nm.fun(t) && t;
    r && !n && (n = []);
    const i = B.useMemo(() => (r || 3 == arguments.length ? bb() : void 0), []),
        a = B.useRef(0),
        o = Kg(),
        l = B.useMemo(
            () => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                    const n = cb(e, t);
                    return a.current > 0 && !l.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                        ? ub(e, t)
                        : new Promise((r) => {
                              (fb(e, n),
                                  l.queue.push(() => {
                                      r(ub(e, t));
                                  }),
                                  o());
                          });
                },
            }),
            [],
        ),
        u = B.useRef([...l.ctrls]),
        s = [],
        c = Xg(e) || 0;
    function f(e, n) {
        for (let i = e; i < n; i++) {
            const e = u.current[i] || (u.current[i] = new lb(null, l.flush)),
                n = r ? r(i, e) : t[i];
            n && (s[i] = eb(n));
        }
    }
    (B.useMemo(() => {
        (Rm(u.current.slice(e, c), (e) => {
            (Py(e, i), e.stop(!0));
        }),
            (u.current.length = e),
            f(c, e));
    }, [e]),
        B.useMemo(() => {
            f(0, Math.min(c, e));
        }, n));
    const d = u.current.map((e, t) => cb(e, s[t])),
        p = B.useContext(gb),
        h = Xg(p),
        v = p !== h && Oy(p);
    (Hg(() => {
        (a.current++, (l.ctrls = u.current));
        const { queue: e } = l;
        (e.length && ((l.queue = []), Rm(e, (e) => e())),
            Rm(u.current, (e, t) => {
                (null == i || i.add(e), v && e.start({ default: p }));
                const n = s[t];
                n && (Cy(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
            }));
    }),
        Qg(() => () => {
            Rm(l.ctrls, (e) => e.stop(!0));
        }));
    const m = d.map((e) => ({ ...e }));
    return i ? [m, i] : m;
}
function wb(e, t) {
    const n = Nm.fun(e),
        [[r], i] = _b(1, n ? e : [e], n ? [] : t);
    return n || 2 == arguments.length ? [r, i] : r;
}
var kb = () => bb(),
    Sb = () => B.useState(kb)[0],
    xb = (e, t) => {
        const n = (function (e) {
            const t = B.useRef(null);
            return (null === t.current && (t.current = e()), t.current);
        })(() => new Yy(e, t));
        return (
            Qg(() => () => {
                n.stop();
            }),
            n
        );
    };
function Ob(e, t, n) {
    const r = Nm.fun(t) && t,
        {
            reset: i,
            sort: a,
            trail: o = 0,
            expires: l = !0,
            exitBeforeEnter: u = !1,
            onDestroyed: s,
            ref: c,
            config: f,
        } = r ? r() : t,
        d = B.useMemo(() => (r || 3 == arguments.length ? bb() : void 0), []),
        p = zm(e),
        h = [],
        v = B.useRef(null),
        m = i ? null : v.current;
    (Hg(() => {
        v.current = h;
    }),
        Qg(
            () => (
                Rm(h, (e) => {
                    (null == d || d.add(e.ctrl), (e.ctrl.ref = d));
                }),
                () => {
                    Rm(v.current, (e) => {
                        (e.expired && clearTimeout(e.expirationId), Py(e.ctrl, d), e.ctrl.stop(!0));
                    });
                }
            ),
        ));
    const g = (function (e, { key: t, keys: n = t }, r) {
            if (null === n) {
                const t = new Set();
                return e.map((e) => {
                    const n = r && r.find((n) => n.item === e && 'leave' !== n.phase && !t.has(n));
                    return n ? (t.add(n), n.key) : Eb++;
                });
            }
            return Nm.und(n) ? e : Nm.fun(n) ? e.map(n) : zm(n);
        })(p, r ? r() : t, m),
        y = (i && v.current) || [];
    Hg(() =>
        Rm(y, ({ ctrl: e, item: t, key: n }) => {
            (Py(e, d), vy(s, t, n));
        }),
    );
    const b = [];
    if (
        (m &&
            Rm(m, (e, t) => {
                e.expired ? (clearTimeout(e.expirationId), y.push(e)) : ~(t = b[t] = g.indexOf(e.key)) && (h[t] = e);
            }),
        Rm(p, (e, t) => {
            h[t] || ((h[t] = { key: g[t], item: e, phase: 'mount', ctrl: new lb() }), (h[t].ctrl.item = e));
        }),
        b.length)
    ) {
        let e = -1;
        const { leave: n } = r ? r() : t;
        Rm(b, (t, r) => {
            const i = m[r];
            ~t ? ((e = h.indexOf(i)), (h[e] = { ...i, item: p[t] })) : n && h.splice(++e, 0, i);
        });
    }
    Nm.fun(a) && h.sort((e, t) => a(e.item, t.item));
    let _ = -o;
    const w = Kg(),
        k = _y(t),
        S = new Map(),
        x = B.useRef(new Map()),
        O = B.useRef(!1);
    Rm(h, (e, n) => {
        const i = e.key,
            a = e.phase,
            s = r ? r() : t;
        let d, p;
        const h = vy(s.delay || 0, i);
        if ('mount' == a) ((d = s.enter), (p = 'enter'));
        else {
            const e = g.indexOf(i) < 0;
            if ('leave' != a)
                if (e) ((d = s.leave), (p = 'leave'));
                else {
                    if (!(d = s.update)) return;
                    p = 'update';
                }
            else {
                if (e) return;
                ((d = s.enter), (p = 'enter'));
            }
        }
        if (((d = vy(d, e.item, n)), (d = Nm.obj(d) ? Sy(d) : { to: d }), !d.config)) {
            const t = f || k.config;
            d.config = vy(t, e.item, n, p);
        }
        _ += o;
        const y = { ...k, delay: h + _, ref: c, immediate: s.immediate, reset: !1, ...d };
        if ('enter' == p && Nm.und(y.from)) {
            const i = r ? r() : t,
                a = Nm.und(i.initial) || m ? i.from : i.initial;
            y.from = vy(a, e.item, n);
        }
        const { onResolve: b } = y;
        y.onResolve = (e) => {
            vy(b, e);
            const t = v.current,
                n = t.find((e) => e.key === i);
            if (n && (!e.cancelled || 'update' == n.phase) && n.ctrl.idle) {
                const e = t.every((e) => e.ctrl.idle);
                if ('leave' == n.phase) {
                    const t = vy(l, n.item);
                    if (!1 !== t) {
                        const r = !0 === t ? 0 : t;
                        if (((n.expired = !0), !e && r > 0))
                            return void (r <= 2147483647 && (n.expirationId = setTimeout(w, r)));
                    }
                }
                e && t.some((e) => e.expired) && (x.current.delete(n), u && (O.current = !0), w());
            }
        };
        const E = cb(e.ctrl, y);
        'leave' === p && u
            ? x.current.set(e, { phase: p, springs: E, payload: y })
            : S.set(e, { phase: p, springs: E, payload: y });
    });
    const E = B.useContext(gb),
        P = Xg(E),
        C = E !== P && Oy(E);
    (Hg(() => {
        C &&
            Rm(h, (e) => {
                e.ctrl.start({ default: E });
            });
    }, [E]),
        Rm(S, (e, t) => {
            if (x.current.size) {
                const e = h.findIndex((e) => e.key === t.key);
                h.splice(e, 1);
            }
        }),
        Hg(
            () => {
                Rm(x.current.size ? x.current : S, ({ phase: e, payload: t }, n) => {
                    const { ctrl: r } = n;
                    ((n.phase = e),
                        null == d || d.add(r),
                        C && 'enter' == e && r.start({ default: E }),
                        t &&
                            (Cy(r, t.ref),
                            (!r.ref && !d) || O.current ? (r.start(t), O.current && (O.current = !1)) : r.update(t)));
                });
            },
            i ? void 0 : n,
        ));
    const A = (e) =>
        B.createElement(
            B.Fragment,
            null,
            h.map((t, n) => {
                const { springs: r } = S.get(t) || t.ctrl,
                    i = e({ ...r }, t.item, t, n);
                return i && i.type
                    ? B.createElement(i.type, {
                          ...i.props,
                          key: Nm.str(t.key) || Nm.num(t.key) ? t.key : t.ctrl.id,
                          ref: i.ref,
                      })
                    : i;
            }),
        );
    return d ? [A, d] : A;
}
var Eb = 1;
var Pb = class extends $y {
    constructor(e, t) {
        (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = bg(...t)));
        const n = this._get(),
            r = sy(n);
        ey(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        (Tm(t, this.get()) || (Jg(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && Ab(this._active) && jb(this));
    }
    _get() {
        const e = Nm.arr(this.source) ? this.source.map(Sg) : zm(Sg(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !Ab(this._active) &&
            ((this.idle = !1),
            Rm(ty(this), (e) => {
                e.done = !1;
            }),
            Am.skipAnimation ? (fm.batchedUpdates(() => this.advance()), jb(this)) : Qm.start(this));
    }
    _attach() {
        let e = 1;
        (Rm(zm(this.source), (t) => {
            (kg(t) && Cg(t, this), Uy(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (Rm(zm(this.source), (e) => {
            kg(e) && Ag(e, this);
        }),
            this._active.clear(),
            jb(this));
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = zm(this.source).reduce((e, t) => Math.max(e, (Uy(t) ? t.priority : 0) + 1), 0));
    }
};
function Cb(e) {
    return !1 !== e.idle;
}
function Ab(e) {
    return !e.size || Array.from(e).every(Cb);
}
function jb(e) {
    e.idle ||
        ((e.idle = !0),
        Rm(ty(e), (e) => {
            e.done = !0;
        }),
        Og(e, { type: 'idle', parent: e }));
}
Am.assign({ createStringInterpolator: Fg, to: (e, t) => new Pb(e, t) });
var Nb = /^--/;
function Tb(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || Nb.test(e) || (Lb.hasOwnProperty(e) && Lb[e])
          ? ('' + t).trim()
          : t + 'px';
}
var Rb = {};
var Lb = {
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
    zb = ['Webkit', 'Ms', 'Moz', 'O'];
Lb = Object.keys(Lb).reduce(
    (e, t) => (zb.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    Lb,
);
var Ib = /^(matrix|translate|scale|rotate|skew)/,
    Mb = /^(translate)/,
    Db = /^(rotate|skew)/,
    Vb = (e, t) => (Nm.num(e) && 0 !== e ? e + t : e),
    Fb = (e, t) => (Nm.arr(e) ? e.every((e) => Fb(e, t)) : Nm.num(e) ? e === t : parseFloat(e) === t),
    Ub = class extends oy {
        constructor({ x: e, y: t, z: n, ...r }) {
            const i = [],
                a = [];
            ((e || t || n) &&
                (i.push([e || 0, t || 0, n || 0]),
                a.push((e) => [`translate3d(${e.map((e) => Vb(e, 'px')).join(',')})`, Fb(e, 0)])),
                Lm(r, (e, t) => {
                    if ('transform' === t) (i.push([e || '']), a.push((e) => [e, '' === e]));
                    else if (Ib.test(t)) {
                        if ((delete r[t], Nm.und(e))) return;
                        const n = Mb.test(t) ? 'px' : Db.test(t) ? 'deg' : '';
                        (i.push(zm(e)),
                            a.push(
                                'rotate3d' === t
                                    ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${Vb(i, n)})`, Fb(i, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => Vb(e, n)).join(',')})`,
                                          Fb(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                i.length && (r.transform = new Bb(i, a)),
                super(r));
        }
    },
    Bb = class extends Eg {
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
                Rm(this.inputs, (n, r) => {
                    const i = Sg(n[0]),
                        [a, o] = this.transforms[r](Nm.arr(i) ? i : n.map(Sg));
                    ((e += ' ' + a), (t = t && o));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && Rm(this.inputs, (e) => Rm(e, (e) => kg(e) && Cg(e, this)));
        }
        observerRemoved(e) {
            0 == e && Rm(this.inputs, (e) => Rm(e, (e) => kg(e) && Ag(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), Og(this, e));
        }
    };
Am.assign({ batchedUpdates: Bf.unstable_batchedUpdates, createStringInterpolator: Fg, colors: eg });
var $b = py(
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
                { style: r, children: i, scrollTop: a, scrollLeft: o, viewBox: l, ...u } = t,
                s = Object.values(u),
                c = Object.keys(u).map((t) =>
                    n || e.hasAttribute(t) ? t : Rb[t] || (Rb[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                );
            void 0 !== i && (e.textContent = i);
            for (const f in r)
                if (r.hasOwnProperty(f)) {
                    const t = Tb(f, r[f]);
                    Nb.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                }
            (c.forEach((t, n) => {
                e.setAttribute(t, s[n]);
            }),
                void 0 !== a && (e.scrollTop = a),
                void 0 !== o && (e.scrollLeft = o),
                void 0 !== l && e.setAttribute('viewBox', l));
        },
        createAnimatedStyle: (e) => new Ub(e),
        getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
    },
).animated;
function Wb(e, t) {
    (void 0 === t && (t = 'Illegal state'),
        e ||
            (function (e) {
                throw new Error('[mobx-utils] ' + e);
            })(t));
}
var qb,
    Hb = function (e) {
        return e && e !== Object.prototype && Object.getOwnPropertyNames(e).concat(Hb(Object.getPrototypeOf(e)) || []);
    },
    Gb = function (e) {
        return (function (e) {
            var t = Hb(e);
            return t.filter(function (e, n) {
                return t.indexOf(e) === n;
            });
        })(e).filter(function (e) {
            return 'constructor' !== e && !~e.indexOf('__');
        });
    },
    Kb = 'pending',
    Qb = 'fulfilled',
    Yb = 'rejected';
function Xb(e) {
    switch (this.state) {
        case Kb:
            return e.pending && e.pending(this.value);
        case Yb:
            return e.rejected && e.rejected(this.value);
        case Qb:
            return e.fulfilled ? e.fulfilled(this.value) : this.value;
    }
}
function Zb(e, t) {
    if (
        (Wb(arguments.length <= 2, 'fromPromise expects up to two arguments'),
        Wb(
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
            ((n.value = e), (n.state = Qb));
        }),
        Ch('observableFromPromise-reject', function (e) {
            ((n.value = e), (n.state = Yb));
        }),
    ),
        (n.isPromiseBasedObservable = !0),
        (n.case = Xb));
    var r = !t || (t.state !== Qb && t.state !== Kb) ? void 0 : t.value;
    return (Bh(n, { value: r, state: Kb }, {}, { deep: !1 }), n);
}
(((qb = Zb || (Zb = {})).reject = Ch('fromPromise.reject', function (e) {
    var t = qb(Promise.reject(e));
    return ((t.state = Yb), (t.value = e), t);
})),
    (qb.resolve = Ch('fromPromise.resolve', function (e) {
        void 0 === e && (e = void 0);
        var t = qb(Promise.resolve(e));
        return ((t.state = Qb), (t.value = e), t);
    })));
var Jb = function (e, t, n, r) {
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
        Jb([xp.ref], e.prototype, 'current', void 0),
        Jb([Ch.bound], e.prototype, 'next', null),
        Jb([Ch.bound], e.prototype, 'complete', null),
        Jb([Ch.bound], e.prototype, 'error', null));
})();
var e_ = function () {
        return (
            (e_ =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            e_.apply(this, arguments)
        );
    },
    t_ = function (e, t, n, r) {
        var i,
            a = arguments.length,
            o = a < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
        else
            for (var l = e.length - 1; l >= 0; l--)
                (i = e[l]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
        return (a > 3 && o && Object.defineProperty(t, n, o), o);
    },
    n_ = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
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
            Wb(Uv(e), 'createViewModel expects an observable object'));
        var n = Gb(this);
        Gb(e).forEach(function (r) {
            var i;
            if (!n.includes(r) && r !== Ld && '__mobxDidRunLazyInitializers' !== r) {
                if (
                    (Wb(
                        -1 === n_.indexOf(r),
                        'The propertyname ' + r + ' is reserved and cannot be used with viewModels',
                    ),
                    Zh(e, r))
                ) {
                    var a = tm(e, r),
                        o = a.derivation.bind(t),
                        l = null === (i = a.setter_) || void 0 === i ? void 0 : i.bind(t);
                    t.localComputedValues.set(r, Cp(o, { set: l }));
                }
                var u = Object.getOwnPropertyDescriptor(e, r),
                    s = u ? { enumerable: u.enumerable } : {};
                Object.defineProperty(
                    t,
                    r,
                    e_(e_({}, s), {
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
        t_([Cp], e.prototype, 'isDirty', null),
        t_([Cp], e.prototype, 'changedValues', null),
        t_([Ch.bound], e.prototype, 'submit', null),
        t_([Ch.bound], e.prototype, 'reset', null),
        t_([Ch.bound], e.prototype, 'resetProperty', null));
})();
var r_ = (function () {
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
                        for (var i = 0, a = e.added; i < a.length; i++) {
                            var o = a[i];
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
    (r_(t, e),
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
})(jv);
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
    o_ = function () {
        return (
            (o_ =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            o_.apply(this, arguments)
        );
    };
function l_(e, t) {
    if ((void 0 === t && (t = !1), jh(e))) throw new Error("computedFn shouldn't be used on actions");
    var n = !1,
        r = 0,
        i = 'boolean' == typeof t ? { keepAlive: t } : t,
        a = new a_();
    return function () {
        for (var t = this, o = [], l = 0; l < arguments.length; l++) o[l] = arguments[l];
        var u,
            s = a.entry(o);
        if (s.exists()) return s.get().get();
        if (!i.keepAlive && null === oh.trackingDerivation)
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
            o_(o_({}, i), { name: 'computedFn(' + (i.name || e.name) + '#' + ++r + ')' }),
        );
        return (
            s.set(c),
            i.keepAlive ||
                Ih(c, function () {
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
function u_(e) {
    e();
}
function s_(e) {
    return $h(em(e, t));
    var t;
}
var c_ = new ((function () {
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
    f_ = { exports: {} },
    d_ = {},
    p_ = B;
var h_ =
        'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    v_ = p_.useState,
    m_ = p_.useEffect,
    g_ = p_.useLayoutEffect,
    y_ = p_.useDebugValue;
function b_(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !h_(e, n);
    } catch (r) {
        return !0;
    }
}
var __ =
    'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
              return t();
          }
        : function (e, t) {
              var n = t(),
                  r = v_({ inst: { value: n, getSnapshot: t } }),
                  i = r[0].inst,
                  a = r[1];
              return (
                  g_(
                      function () {
                          ((i.value = n), (i.getSnapshot = t), b_(i) && a({ inst: i }));
                      },
                      [e, n, t],
                  ),
                  m_(
                      function () {
                          return (
                              b_(i) && a({ inst: i }),
                              e(function () {
                                  b_(i) && a({ inst: i });
                              })
                          );
                      },
                      [e],
                  ),
                  y_(n),
                  n
              );
          };
((d_.useSyncExternalStore = void 0 !== p_.useSyncExternalStore ? p_.useSyncExternalStore : __), (f_.exports = d_));
var w_,
    k_,
    S_ = f_.exports;
function x_(e) {
    e.reaction = new hh('observer'.concat(e.name), function () {
        var t;
        ((e.stateVersion = Symbol()), null === (t = e.onStoreChange) || void 0 === t || t.call(e));
    });
}
var O_ = 'function' == typeof Symbol && Symbol.for,
    E_ =
        null !==
            (k_ =
                null === (w_ = Object.getOwnPropertyDescriptor(function () {}, 'name')) || void 0 === w_
                    ? void 0
                    : w_.configurable) &&
        void 0 !== k_ &&
        k_,
    P_ = O_
        ? Symbol.for('react.forward_ref')
        : 'function' == typeof B.forwardRef &&
          B.forwardRef(function (e) {
              return null;
          }).$$typeof,
    C_ = O_
        ? Symbol.for('react.memo')
        : 'function' == typeof B.memo &&
          B.memo(function (e) {
              return null;
          }).$$typeof;
function A_(e, t) {
    if (C_ && e.$$typeof === C_)
        throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
        );
    var n = (void 0, !1),
        r = e,
        i = e.displayName || e.name;
    if (P_ && e.$$typeof === P_ && ((n = !0), 'function' != typeof (r = e.render)))
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
                            c_.unregister(r),
                            (r.onStoreChange = e),
                            r.reaction || (x_(r), (r.stateVersion = Symbol())),
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
                (o.reaction || (x_(o), c_.register(n, o, o)),
                $.useDebugValue(o.reaction, s_),
                S_.useSyncExternalStore(o.subscribe, o.getSnapshot, o.getSnapshot),
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
        E_ && Object.defineProperty(a, 'name', { value: e.name, writable: !0, configurable: !0 }),
        e.contextTypes && (a.contextTypes = e.contextTypes),
        n && (a = B.forwardRef(a)),
        (function (e, t) {
            Object.keys(e).forEach(function (n) {
                N_[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
            });
        })(e, (a = B.memo(a))),
        a
    );
}
var j_,
    N_ = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function T_(e) {
    var t,
        n,
        r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
        if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = T_(e[t])) && (r && (r += ' '), (r += n));
        else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
}
((j_ = Bf.unstable_batchedUpdates) || (j_ = u_), Uh({ reactionScheduler: j_ }), c_.finalizeAllImmediately);
const R_ = (e) => ('boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e),
    L_ = function () {
        for (var e, t, n = 0, r = ''; n < arguments.length; )
            (e = arguments[n++]) && (t = T_(e)) && (r && (r += ' '), (r += t));
        return r;
    },
    z_ = (e, t) => (n) => {
        var r;
        if (null == (null == t ? void 0 : t.variants))
            return L_(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        const { variants: i, defaultVariants: a } = t,
            o = Object.keys(i).map((e) => {
                const t = null == n ? void 0 : n[e],
                    r = null == a ? void 0 : a[e];
                if (null === t) return null;
                const o = R_(t) || R_(r);
                return i[e][o];
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
                          let { class: n, className: r, ...i } = t;
                          return Object.entries(i).every((e) => {
                              let [t, n] = e;
                              return Array.isArray(n) ? n.includes({ ...a, ...l }[t]) : { ...a, ...l }[t] === n;
                          })
                              ? [...e, n, r]
                              : e;
                      }, []);
        return L_(e, o, u, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
    };
var I_ = (function () {
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
    M_ = 'undefined' != typeof window && 'undefined' != typeof document && window.document === document,
    D_ =
        'undefined' != typeof global && global.Math === Math
            ? global
            : 'undefined' != typeof self && self.Math === Math
              ? self
              : 'undefined' != typeof window && window.Math === Math
                ? window
                : Function('return this')(),
    V_ =
        'function' == typeof requestAnimationFrame
            ? requestAnimationFrame.bind(D_)
            : function (e) {
                  return setTimeout(function () {
                      return e(Date.now());
                  }, 1e3 / 60);
              };
var F_ = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
    U_ = 'undefined' != typeof MutationObserver,
    B_ = (function () {
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
                        V_(a);
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
                M_ &&
                    !this.connected_ &&
                    (document.addEventListener('transitionend', this.onTransitionEnd_),
                    window.addEventListener('resize', this.refresh),
                    U_
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
                M_ &&
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
                F_.some(function (e) {
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
    $_ = function (e, t) {
        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var i = r[n];
            Object.defineProperty(e, i, { value: t[i], enumerable: !1, writable: !1, configurable: !0 });
        }
        return e;
    },
    W_ = function (e) {
        return (e && e.ownerDocument && e.ownerDocument.defaultView) || D_;
    },
    q_ = X_(0, 0, 0, 0);
function H_(e) {
    return parseFloat(e) || 0;
}
function G_(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce(function (t, n) {
        return t + H_(e['border-' + n + '-width']);
    }, 0);
}
function K_(e) {
    var t = e.offsetWidth,
        n = e.offsetHeight;
    if (!t && !n) return q_;
    var r = W_(e).getComputedStyle(e),
        i = (function (e) {
            for (var t = {}, n = 0, r = ['top', 'right', 'bottom', 'left']; n < r.length; n++) {
                var i = r[n],
                    a = e['padding-' + i];
                t[i] = H_(a);
            }
            return t;
        })(r),
        a = i.left + i.right,
        o = i.top + i.bottom,
        l = H_(r.width),
        u = H_(r.height);
    if (
        ('border-box' === r.boxSizing &&
            (Math.round(l + a) !== t && (l -= G_(r, 'left', 'right') + a),
            Math.round(u + o) !== n && (u -= G_(r, 'top', 'bottom') + o)),
        !(function (e) {
            return e === W_(e).document.documentElement;
        })(e))
    ) {
        var s = Math.round(l + a) - t,
            c = Math.round(u + o) - n;
        (1 !== Math.abs(s) && (l -= s), 1 !== Math.abs(c) && (u -= c));
    }
    return X_(i.left, i.top, l, u);
}
var Q_ =
    'undefined' != typeof SVGGraphicsElement
        ? function (e) {
              return e instanceof W_(e).SVGGraphicsElement;
          }
        : function (e) {
              return e instanceof W_(e).SVGElement && 'function' == typeof e.getBBox;
          };
function Y_(e) {
    return M_
        ? Q_(e)
            ? (function (e) {
                  var t = e.getBBox();
                  return X_(0, 0, t.width, t.height);
              })(e)
            : K_(e)
        : q_;
}
function X_(e, t, n, r) {
    return { x: e, y: t, width: n, height: r };
}
var Z_ = (function () {
        function e(e) {
            ((this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = X_(0, 0, 0, 0)),
                (this.target = e));
        }
        return (
            (e.prototype.isActive = function () {
                var e = Y_(this.target);
                return ((this.contentRect_ = e), e.width !== this.broadcastWidth || e.height !== this.broadcastHeight);
            }),
            (e.prototype.broadcastRect = function () {
                var e = this.contentRect_;
                return ((this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e);
            }),
            e
        );
    })(),
    J_ = (function () {
        return function (e, t) {
            var n,
                r,
                i,
                a,
                o,
                l,
                u,
                s =
                    ((r = (n = t).x),
                    (i = n.y),
                    (a = n.width),
                    (o = n.height),
                    (l = 'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
                    (u = Object.create(l.prototype)),
                    $_(u, { x: r, y: i, width: a, height: o, top: i, right: r + a, bottom: o + i, left: r }),
                    u);
            $_(this, { target: e, contentRect: s });
        };
    })(),
    ew = (function () {
        function e(e, t, n) {
            if (((this.activeObservations_ = []), (this.observations_ = new I_()), 'function' != typeof e))
                throw new TypeError('The callback provided as parameter 1 is not a function.');
            ((this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = n));
        }
        return (
            (e.prototype.observe = function (e) {
                if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                if ('undefined' != typeof Element && Element instanceof Object) {
                    if (!(e instanceof W_(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var t = this.observations_;
                    t.has(e) || (t.set(e, new Z_(e)), this.controller_.addObserver(this), this.controller_.refresh());
                }
            }),
            (e.prototype.unobserve = function (e) {
                if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                if ('undefined' != typeof Element && Element instanceof Object) {
                    if (!(e instanceof W_(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
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
                            return new J_(e.target, e.broadcastRect());
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
    tw = 'undefined' != typeof WeakMap ? new WeakMap() : new I_(),
    nw = (function () {
        return function e(t) {
            if (!(this instanceof e)) throw new TypeError('Cannot call a class as a function.');
            if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
            var n = B_.getInstance(),
                r = new ew(t, n, this);
            tw.set(this, r);
        };
    })();
['observe', 'unobserve', 'disconnect'].forEach(function (e) {
    nw.prototype[e] = function () {
        var t;
        return (t = tw.get(this))[e].apply(t, arguments);
    };
});
var rw = void 0 !== D_.ResizeObserver ? D_.ResizeObserver : nw,
    iw = {};
class aw extends Error {
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
const ow = r(
    Object.freeze(
        Object.defineProperty({ __proto__: null, TypeGuardError: aw }, Symbol.toStringTag, { value: 'Module' }),
    ),
);
Object.defineProperty(iw, '__esModule', { value: !0 });
var lw = (iw._assertGuard = void 0);
const uw = ow;
lw = iw._assertGuard = (e, t, n) => {
    if (!0 === e) throw n ? n(t) : new uw.TypeGuardError(t);
    return !1;
};
var sw = /^--/;
function cw(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || sw.test(e) || (dw.hasOwnProperty(e) && dw[e])
          ? ('' + t).trim()
          : t + 'px';
}
var fw = {};
var dw = {
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
    pw = ['Webkit', 'Ms', 'Moz', 'O'];
dw = Object.keys(dw).reduce(
    (e, t) => (pw.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    dw,
);
var hw = /^(matrix|translate|scale|rotate|skew)/,
    vw = /^(translate)/,
    mw = /^(rotate|skew)/,
    gw = (e, t) => (Nm.num(e) && 0 !== e ? e + t : e),
    yw = (e, t) => (Nm.arr(e) ? e.every((e) => yw(e, t)) : Nm.num(e) ? e === t : parseFloat(e) === t),
    bw = class extends oy {
        constructor({ x: e, y: t, z: n, ...r }) {
            const i = [],
                a = [];
            ((e || t || n) &&
                (i.push([e || 0, t || 0, n || 0]),
                a.push((e) => [`translate3d(${e.map((e) => gw(e, 'px')).join(',')})`, yw(e, 0)])),
                Lm(r, (e, t) => {
                    if ('transform' === t) (i.push([e || '']), a.push((e) => [e, '' === e]));
                    else if (hw.test(t)) {
                        if ((delete r[t], Nm.und(e))) return;
                        const n = vw.test(t) ? 'px' : mw.test(t) ? 'deg' : '';
                        (i.push(zm(e)),
                            a.push(
                                'rotate3d' === t
                                    ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${gw(i, n)})`, yw(i, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => gw(e, n)).join(',')})`,
                                          yw(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                i.length && (r.transform = new _w(i, a)),
                super(r));
        }
    },
    _w = class extends Eg {
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
                Rm(this.inputs, (n, r) => {
                    const i = Sg(n[0]),
                        [a, o] = this.transforms[r](Nm.arr(i) ? i : n.map(Sg));
                    ((e += ' ' + a), (t = t && o));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && Rm(this.inputs, (e) => Rm(e, (e) => kg(e) && Cg(e, this)));
        }
        observerRemoved(e) {
            0 == e && Rm(this.inputs, (e) => Rm(e, (e) => kg(e) && Ag(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), Og(this, e));
        }
    };
Am.assign({ batchedUpdates: Bf.unstable_batchedUpdates, createStringInterpolator: Fg, colors: eg });
var ww = py(
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
                    { className: r, style: i, children: a, scrollTop: o, scrollLeft: l, viewBox: u, ...s } = t,
                    c = Object.values(s),
                    f = Object.keys(s).map((t) =>
                        n || e.hasAttribute(t)
                            ? t
                            : fw[t] || (fw[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                    );
                void 0 !== a && (e.textContent = a);
                for (const d in i)
                    if (i.hasOwnProperty(d)) {
                        const t = cw(d, i[d]);
                        sw.test(d) ? e.style.setProperty(d, t) : (e.style[d] = t);
                    }
                (f.forEach((t, n) => {
                    e.setAttribute(t, c[n]);
                }),
                    void 0 !== r && (e.className = r),
                    void 0 !== o && (e.scrollTop = o),
                    void 0 !== l && (e.scrollLeft = l),
                    void 0 !== u && e.setAttribute('viewBox', u));
            },
            createAnimatedStyle: (e) => new bw(e),
            getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
        },
    ).animated,
    kw = /^--/;
function Sw(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || kw.test(e) || (Ow.hasOwnProperty(e) && Ow[e])
          ? ('' + t).trim()
          : t + 'px';
}
var xw = {};
var Ow = {
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
    Ew = ['Webkit', 'Ms', 'Moz', 'O'];
Ow = Object.keys(Ow).reduce(
    (e, t) => (Ew.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    Ow,
);
var Pw = /^(matrix|translate|scale|rotate|skew)/,
    Cw = /^(translate)/,
    Aw = /^(rotate|skew)/,
    jw = (e, t) => (Nm.num(e) && 0 !== e ? e + t : e),
    Nw = (e, t) => (Nm.arr(e) ? e.every((e) => Nw(e, t)) : Nm.num(e) ? e === t : parseFloat(e) === t),
    Tw = class extends oy {
        constructor({ x: e, y: t, z: n, ...r }) {
            const i = [],
                a = [];
            ((e || t || n) &&
                (i.push([e || 0, t || 0, n || 0]),
                a.push((e) => [`translate3d(${e.map((e) => jw(e, 'px')).join(',')})`, Nw(e, 0)])),
                Lm(r, (e, t) => {
                    if ('transform' === t) (i.push([e || '']), a.push((e) => [e, '' === e]));
                    else if (Pw.test(t)) {
                        if ((delete r[t], Nm.und(e))) return;
                        const n = Cw.test(t) ? 'px' : Aw.test(t) ? 'deg' : '';
                        (i.push(zm(e)),
                            a.push(
                                'rotate3d' === t
                                    ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${jw(i, n)})`, Nw(i, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => jw(e, n)).join(',')})`,
                                          Nw(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                i.length && (r.transform = new Rw(i, a)),
                super(r));
        }
    },
    Rw = class extends Eg {
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
                Rm(this.inputs, (n, r) => {
                    const i = Sg(n[0]),
                        [a, o] = this.transforms[r](Nm.arr(i) ? i : n.map(Sg));
                    ((e += ' ' + a), (t = t && o));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && Rm(this.inputs, (e) => Rm(e, (e) => kg(e) && Cg(e, this)));
        }
        observerRemoved(e) {
            0 == e && Rm(this.inputs, (e) => Rm(e, (e) => kg(e) && Ag(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), Og(this, e));
        }
    };
Am.assign({ batchedUpdates: Bf.unstable_batchedUpdates, createStringInterpolator: Fg, colors: eg });
var Lw = py(
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
                { className: r, style: i, children: a, scrollTop: o, scrollLeft: l, viewBox: u, ...s } = t,
                c = Object.values(s),
                f = Object.keys(s).map((t) =>
                    n || e.hasAttribute(t) ? t : xw[t] || (xw[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                );
            void 0 !== a && (e.textContent = a);
            for (const d in i)
                if (i.hasOwnProperty(d)) {
                    const t = Sw(d, i[d]);
                    kw.test(d) ? e.style.setProperty(d, t) : (e.style[d] = t);
                }
            (f.forEach((t, n) => {
                e.setAttribute(t, c[n]);
            }),
                void 0 !== r && (e.className = r),
                void 0 !== o && (e.scrollTop = o),
                void 0 !== l && (e.scrollLeft = l),
                void 0 !== u && e.setAttribute('viewBox', u));
        },
        createAnimatedStyle: (e) => new Tw(e),
        getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
    },
).animated;
export {
    lb as C,
    $ as R,
    lw as _,
    ye as a,
    _e as b,
    Te as c,
    be as d,
    Hf as e,
    Ch as f,
    l_ as g,
    Dd as h,
    Le as i,
    X as j,
    z_ as k,
    wb as l,
    $b as m,
    rw as n,
    xp as o,
    A_ as p,
    _b as q,
    B as r,
    ww as s,
    Ob as t,
    Xp as u,
    Sb as v,
    Lw as w,
    xb as x,
};
