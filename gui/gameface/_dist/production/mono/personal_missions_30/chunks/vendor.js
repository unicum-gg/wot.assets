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
    s = {},
    u = Symbol.for('react.element'),
    l = Symbol.for('react.portal'),
    c = Symbol.for('react.fragment'),
    f = Symbol.for('react.strict_mode'),
    d = Symbol.for('react.profiler'),
    h = Symbol.for('react.provider'),
    p = Symbol.for('react.context'),
    v = Symbol.for('react.forward_ref'),
    y = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    m = Symbol.for('react.lazy'),
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
    S = {};
function k(e, t, n) {
    ((this.props = e), (this.context = t), (this.refs = S), (this.updater = n || _));
}
function x() {}
function O(e, t, n) {
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
var E = (O.prototype = new x());
((E.constructor = O), w(E, k.prototype), (E.isPureReactComponent = !0));
var P = Array.isArray,
    C = Object.prototype.hasOwnProperty,
    N = { current: null },
    j = { key: !0, ref: !0, __self: !0, __source: !0 };
function T(e, t, n) {
    var r,
        i = {},
        o = null,
        a = null;
    if (null != t)
        for (r in (void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (o = '' + t.key), t))
            C.call(t, r) && !j.hasOwnProperty(r) && (i[r] = t[r]);
    var s = arguments.length - 2;
    if (1 === s) i.children = n;
    else if (1 < s) {
        for (var l = Array(s), c = 0; c < s; c++) l[c] = arguments[c + 2];
        i.children = l;
    }
    if (e && e.defaultProps) for (r in (s = e.defaultProps)) void 0 === i[r] && (i[r] = s[r]);
    return { $$typeof: u, type: e, key: o, ref: a, props: i, _owner: N.current };
}
function A(e) {
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
                    case u:
                    case l:
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
                  (A(i) &&
                      (i = (function (e, t) {
                          return { $$typeof: u, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                      })(i, n + (!i.key || (a && a.key === i.key) ? '' : ('' + i.key).replace(R, '$&/') + '/') + e)),
                  t.push(i)),
            1
        );
    if (((a = 0), (r = '' === r ? '.' : r + ':'), P(e)))
        for (var s = 0; s < e.length; s++) {
            var c = r + L((o = e[s]), s);
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
        for (e = c.call(e), s = 0; !(o = e.next()).done; ) a += I((o = o.value), t, n, (c = r + L(o, s++)), i);
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
function z(e, t, n) {
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
var V = { current: null },
    M = { transition: null },
    F = { ReactCurrentDispatcher: V, ReactCurrentBatchConfig: M, ReactCurrentOwner: N };
function U() {
    throw Error('act(...) is not supported in production builds of React.');
}
((s.Children = {
    map: z,
    forEach: function (e, t, n) {
        z(
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
            z(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            z(e, function (e) {
                return e;
            }) || []
        );
    },
    only: function (e) {
        if (!A(e)) throw Error('React.Children.only expected to receive a single React element child.');
        return e;
    },
}),
    (s.Component = k),
    (s.Fragment = c),
    (s.Profiler = d),
    (s.PureComponent = O),
    (s.StrictMode = f),
    (s.Suspense = y),
    (s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
    (s.act = U),
    (s.cloneElement = function (e, t, n) {
        if (null == e)
            throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
        var r = w({}, e.props),
            i = e.key,
            o = e.ref,
            a = e._owner;
        if (null != t) {
            if (
                (void 0 !== t.ref && ((o = t.ref), (a = N.current)),
                void 0 !== t.key && (i = '' + t.key),
                e.type && e.type.defaultProps)
            )
                var s = e.type.defaultProps;
            for (l in t) C.call(t, l) && !j.hasOwnProperty(l) && (r[l] = void 0 === t[l] && void 0 !== s ? s[l] : t[l]);
        }
        var l = arguments.length - 2;
        if (1 === l) r.children = n;
        else if (1 < l) {
            s = Array(l);
            for (var c = 0; c < l; c++) s[c] = arguments[c + 2];
            r.children = s;
        }
        return { $$typeof: u, type: e.type, key: i, ref: o, props: r, _owner: a };
    }),
    (s.createContext = function (e) {
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
            }).Provider = { $$typeof: h, _context: e }),
            (e.Consumer = e)
        );
    }),
    (s.createElement = T),
    (s.createFactory = function (e) {
        var t = T.bind(null, e);
        return ((t.type = e), t);
    }),
    (s.createRef = function () {
        return { current: null };
    }),
    (s.forwardRef = function (e) {
        return { $$typeof: v, render: e };
    }),
    (s.isValidElement = A),
    (s.lazy = function (e) {
        return { $$typeof: m, _payload: { _status: -1, _result: e }, _init: D };
    }),
    (s.memo = function (e, t) {
        return { $$typeof: g, type: e, compare: void 0 === t ? null : t };
    }),
    (s.startTransition = function (e) {
        var t = M.transition;
        M.transition = {};
        try {
            e();
        } finally {
            M.transition = t;
        }
    }),
    (s.unstable_act = U),
    (s.useCallback = function (e, t) {
        return V.current.useCallback(e, t);
    }),
    (s.useContext = function (e) {
        return V.current.useContext(e);
    }),
    (s.useDebugValue = function () {}),
    (s.useDeferredValue = function (e) {
        return V.current.useDeferredValue(e);
    }),
    (s.useEffect = function (e, t) {
        return V.current.useEffect(e, t);
    }),
    (s.useId = function () {
        return V.current.useId();
    }),
    (s.useImperativeHandle = function (e, t, n) {
        return V.current.useImperativeHandle(e, t, n);
    }),
    (s.useInsertionEffect = function (e, t) {
        return V.current.useInsertionEffect(e, t);
    }),
    (s.useLayoutEffect = function (e, t) {
        return V.current.useLayoutEffect(e, t);
    }),
    (s.useMemo = function (e, t) {
        return V.current.useMemo(e, t);
    }),
    (s.useReducer = function (e, t, n) {
        return V.current.useReducer(e, t, n);
    }),
    (s.useRef = function (e) {
        return V.current.useRef(e);
    }),
    (s.useState = function (e) {
        return V.current.useState(e);
    }),
    (s.useSyncExternalStore = function (e, t, n) {
        return V.current.useSyncExternalStore(e, t, n);
    }),
    (s.useTransition = function () {
        return V.current.useTransition();
    }),
    (s.version = '18.3.1'),
    (a.exports = s));
var B = a.exports;
const $ = n(B);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var q = B,
    H = Symbol.for('react.element'),
    W = Symbol.for('react.fragment'),
    K = Object.prototype.hasOwnProperty,
    Q = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    G = { key: !0, ref: !0, __self: !0, __source: !0 };
function X(e, t, n) {
    var r,
        i = {},
        o = null,
        a = null;
    for (r in (void 0 !== n && (o = '' + n), void 0 !== t.key && (o = '' + t.key), void 0 !== t.ref && (a = t.ref), t))
        K.call(t, r) && !G.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
    return { $$typeof: H, type: e, key: o, ref: a, props: i, _owner: Q.current };
}
((o.Fragment = W), (o.jsx = X), (o.jsxs = X), (i.exports = o));
var Y = i.exports,
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
        (o = { next: s(0), throw: s(1), return: s(2) }),
        'function' == typeof Symbol &&
            (o[Symbol.iterator] = function () {
                return this;
            }),
        o
    );
    function s(s) {
        return function (u) {
            return (function (s) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; o && ((o = 0), s[0] && (a = 0)), a; )
                    try {
                        if (
                            ((n = 1),
                            r &&
                                (i =
                                    2 & s[0]
                                        ? r.return
                                        : s[0]
                                          ? r.throw || ((i = r.return) && i.call(r), 0)
                                          : r.next) &&
                                !(i = i.call(r, s[1])).done)
                        )
                            return i;
                        switch (((r = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                            case 0:
                            case 1:
                                i = s;
                                break;
                            case 4:
                                return (a.label++, { value: s[1], done: !1 });
                            case 5:
                                (a.label++, (r = s[1]), (s = [0]));
                                continue;
                            case 7:
                                ((s = a.ops.pop()), a.trys.pop());
                                continue;
                            default:
                                if (
                                    !((i = a.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== s[0] && 2 !== s[0]))
                                ) {
                                    a = 0;
                                    continue;
                                }
                                if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                                    a.label = s[1];
                                    break;
                                }
                                if (6 === s[0] && a.label < i[1]) {
                                    ((a.label = i[1]), (i = s));
                                    break;
                                }
                                if (i && a.label < i[2]) {
                                    ((a.label = i[2]), a.ops.push(s));
                                    break;
                                }
                                (i[2] && a.ops.pop(), a.trys.pop());
                                continue;
                        }
                        s = t.call(e, a);
                    } catch (u) {
                        ((s = [6, u]), (r = 0));
                    } finally {
                        n = i = 0;
                    }
                if (5 & s[0]) throw s[1];
                return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, u]);
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
                s = "Could not resolve '".concat(i, "'.");
            return (
                r && (s += ' '.concat(r)),
                (s += '\n\n'),
                (s += 'Resolution path: '.concat(a)),
                e.call(this, s) || this
            );
        }
        return (Z(t, e), t);
    })(re),
    ae = (function (e) {
        function t(t, n) {
            var r = t.toString(),
                i = "Could not register '".concat(r, "'.");
            return (n && (i += ' '.concat(n)), e.call(this, i) || this);
        }
        return (Z(t, e), t);
    })(re),
    se = { PROXY: 'PROXY', CLASSIC: 'CLASSIC' },
    ue = { SINGLETON: 'SINGLETON', TRANSIENT: 'TRANSIENT', SCOPED: 'SCOPED' };
function le(e) {
    var t = e.length,
        n = 0,
        r = 'EOF',
        i = '',
        o = 0,
        a = 0,
        s = 0;
    return {
        next: function (e) {
            void 0 === e && (e = 0);
            return ((o = e), u(), d());
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
                        return (n++, a++, (r = u));
                    case ')':
                        return (n++, s++, (r = u));
                    case '*':
                    case ',':
                        return (n++, (r = u));
                    case '=':
                        return (
                            n++,
                            0 == (1 & o) &&
                                c(function (e) {
                                    var t = a === s + 1;
                                    return !(',' !== e || !t) || ('(' === e ? (a++, !1) : !(')' !== e || (s++, !t)));
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
                        if (pe(u)) return (l(), r);
                        n++;
                }
        }
    }
    function l() {
        for (var t, o = e.charAt(n), a = ++n; (t = e.charAt(n)), he.test(t); ) n++;
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
    he = /^[._$a-zA-Z0-9\xA0-\uFFFF]$/;
function pe(e) {
    return de.test(e);
}
function ve(e) {
    if ('function' != typeof e) return !1;
    var t = le(e.toString()),
        n = t.next();
    if ('class' === n.type) return !0;
    var r = t.next();
    return !('function' !== n.type || !r.value || r.value[0] !== r.value[0].toUpperCase());
}
function ye(e) {
    return 'function' == typeof e;
}
var ge = Symbol('Awilix Resolver Config');
function me(e) {
    return {
        resolve: function () {
            return e;
        },
        isLeakSafe: !0,
    };
}
function be(e, t) {
    if (!ye(e)) throw new ie('asFunction', 'fn', 'function', e);
    t = xe({ lifetime: ue.TRANSIENT }, t, e[ge]);
    var n = Pe(e);
    return Se(we(ee({ resolve: n }, t)));
}
function _e(e, t) {
    if (!ye(e)) throw new ie('asClass', 'Type', 'class', e);
    t = xe({ lifetime: ue.TRANSIENT }, t, e[ge]);
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
    return Oe(e, {
        setLifetime: t,
        inject: function (e) {
            return we(ee(ee({}, this), { injector: e }));
        },
        transient: ke(t, ue.TRANSIENT),
        scoped: ke(t, ue.SCOPED),
        singleton: ke(t, ue.SINGLETON),
        setInjectionMode: n,
        proxy: ke(n, se.PROXY),
        classic: ke(n, se.CLASSIC),
    });
}
function Se(e) {
    return Oe(e, {
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
                          var t, n, i, o, a, s, u, l;
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
                                      for (u in ((s = []), (a = r))) s.push(u);
                                      ((l = 0), (c.label = 5));
                                  case 5:
                                      return l < s.length ? ((u = s[l]) in a ? [4, u] : [3, 7]) : [3, 8];
                                  case 6:
                                      (c.sent(), (c.label = 7));
                                  case 7:
                                      return (l++, [3, 5]);
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
        if ((this.injectionMode || t.options.injectionMode || se.PROXY) !== se.CLASSIC) {
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
        var t = le(e),
            n = t.next,
            r = t.done,
            i = [],
            o = null;
        for (f(); !r(); )
            switch (o.type) {
                case 'class':
                    if ((l(), !c())) return null;
                    f();
                    break;
                case 'function':
                    ('ident' !== (a = f()).type && '*' !== a.type) || f();
                    break;
                case '(':
                    u();
                    break;
                case ')':
                    return i;
                case 'ident':
                    var a,
                        s = { name: o.value, optional: !1 };
                    if ('async' === o.value && (a = f()) && '=' !== a.type) break;
                    return (i.push(s), i);
                default:
                    throw d();
            }
        return i;
        function u() {
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
        function l() {
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
var Ne = Symbol('familyTree'),
    je = Symbol('rollUpRegistrations'),
    Te = 'AwilixContainerCradle';
function Ae(e) {
    return (void 0 === e && (e = {}), Re(e));
}
function Re(e, t, n) {
    var r;
    e = ee({ injectionMode: se.PROXY, strict: !1 }, e);
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
        s =
            (((r = {
                options: e,
                cradle: a,
                inspect: function () {
                    return '[AwilixContainer ('
                        .concat(t ? 'scoped, ' : '', 'registrations: ')
                        .concat(Object.keys(s.registrations).length, ')]');
                },
                cache: new Map(),
                loadModules: function () {
                    throw new Error('loadModules is not supported in the browser.');
                },
                createScope: function () {
                    return Re(e, s, i);
                },
                register: function (n, r) {
                    for (
                        var i = (function (e, t) {
                                var n,
                                    r = e;
                                return 'string' == typeof r || 'symbol' == typeof r ? (((n = {})[e] = t), n) : r;
                            })(n, r),
                            a = ne(ne([], Object.keys(i), !0), Object.getOwnPropertySymbols(i), !0),
                            u = 0,
                            l = a;
                        u < l.length;
                        u++
                    ) {
                        var c = l[u],
                            f = i[c];
                        if (e.strict && f.lifetime === ue.SINGLETON && t)
                            throw new ae(c, 'Cannot register a singleton on a scoped container.');
                        o[c] = f;
                    }
                    return s;
                },
                build: function (e, t) {
                    if (e && e.resolve) return e.resolve(s);
                    var n = 'build',
                        r = 'targetOrResolver';
                    return (
                        ie.assert(e, n, r, 'a registration, function or class', e),
                        ie.assert('function' == typeof e, n, r, 'a function or class', e),
                        (ve(e) ? _e(e, t) : be(e, t)).resolve(s)
                    );
                },
                resolve: v,
                hasRegistration: function (e) {
                    return !!p(e);
                },
                dispose: function () {
                    var e = Array.from(s.cache.entries());
                    return (
                        s.cache.clear(),
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
                getRegistration: p,
            })[je] = f),
            Object.defineProperty(r, 'registrations', {
                get: function () {
                    return f();
                },
                enumerable: !1,
                configurable: !0,
            }),
            r),
        u = t ? [s].concat(t[Ne]) : [s];
    s[Ne] = u;
    var l,
        c = (l = u)[l.length - 1];
    return s;
    function f() {
        return ee(ee({}, t && t[je]()), o);
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
    function h() {
        return Object.prototype.toString.call(a);
    }
    function p(e) {
        var n = o[e];
        return n || (t ? t.getRegistration(e) : null);
    }
    function v(t, n) {
        n = n || {};
        try {
            var r = p(t);
            if (
                i.some(function (e) {
                    return e.name === t;
                })
            )
                throw new oe(t, i, 'Cyclic dependencies detected.');
            if ('toJSON' === t) return h;
            if ('constructor' === t) return Ae;
            if (!r) {
                switch (t) {
                    case 'inspect':
                    case 'toString':
                        return h;
                    case Symbol.toStringTag:
                        return Te;
                    case 'then':
                        return;
                    case Symbol.iterator:
                        return d;
                }
                if (n.allowUnregistered) return;
                throw new oe(t, i);
            }
            var o = r.lifetime || ue.TRANSIENT;
            if (e.strict && !r.isLeakSafe) {
                var a = i.findIndex(function (e) {
                    var t,
                        n,
                        r = e.lifetime;
                    return (
                        (n = o),
                        ((t = r) === ue.SINGLETON && n !== ue.SINGLETON) || (t === ue.SCOPED && n === ue.TRANSIENT)
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
            var u = void 0,
                l = void 0;
            switch (o) {
                case ue.TRANSIENT:
                    l = r.resolve(s);
                    break;
                case ue.SINGLETON:
                    (u = c.cache.get(t))
                        ? (l = u.value)
                        : ((l = r.resolve(e.strict ? c : s)), c.cache.set(t, { resolver: r, value: l }));
                    break;
                case ue.SCOPED:
                    if (void 0 !== (u = s.cache.get(t))) {
                        l = u.value;
                        break;
                    }
                    ((l = r.resolve(s)), s.cache.set(t, { resolver: r, value: l }));
                    break;
                default:
                    throw new oe(t, i, 'Unknown lifetime "'.concat(r.lifetime, '"'));
            }
            return (i.pop(), l);
        } catch (f) {
            throw ((i.length = 0), f);
        }
    }
}
var Le = {},
    Ie = { exports: {} },
    ze = {},
    De = { exports: {} },
    Ve = {};
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
                var s = 2 * (r + 1) - 1,
                    u = e[s],
                    l = s + 1,
                    c = e[l];
                if (0 > i(u, n))
                    l < o && 0 > i(c, u) ? ((e[r] = c), (e[l] = n), (r = l)) : ((e[r] = u), (e[s] = n), (r = s));
                else {
                    if (!(l < o && 0 > i(c, n))) break e;
                    ((e[r] = c), (e[l] = n), (r = l));
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
            s = a.now();
        e.unstable_now = function () {
            return a.now() - s;
        };
    }
    var u = [],
        l = [],
        c = 1,
        f = null,
        d = 3,
        h = !1,
        p = !1,
        v = !1,
        y = 'function' == typeof setTimeout ? setTimeout : null,
        g = 'function' == typeof clearTimeout ? clearTimeout : null,
        m = 'undefined' != typeof setImmediate ? setImmediate : null;
    function b(e) {
        for (var i = n(l); null !== i; ) {
            if (null === i.callback) r(l);
            else {
                if (!(i.startTime <= e)) break;
                (r(l), (i.sortIndex = i.expirationTime), t(u, i));
            }
            i = n(l);
        }
    }
    function _(e) {
        if (((v = !1), b(e), !p))
            if (null !== n(u)) ((p = !0), A(w));
            else {
                var t = n(l);
                null !== t && R(_, t.startTime - e);
            }
    }
    function w(t, i) {
        ((p = !1), v && ((v = !1), g(O), (O = -1)), (h = !0));
        var o = d;
        try {
            for (b(i), f = n(u); null !== f && (!(f.expirationTime > i) || (t && !C())); ) {
                var a = f.callback;
                if ('function' == typeof a) {
                    ((f.callback = null), (d = f.priorityLevel));
                    var s = a(f.expirationTime <= i);
                    ((i = e.unstable_now()), 'function' == typeof s ? (f.callback = s) : f === n(u) && r(u), b(i));
                } else r(u);
                f = n(u);
            }
            if (null !== f) var c = !0;
            else {
                var y = n(l);
                (null !== y && R(_, y.startTime - i), (c = !1));
            }
            return c;
        } finally {
            ((f = null), (d = o), (h = !1));
        }
    }
    'undefined' != typeof navigator &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var S,
        k = !1,
        x = null,
        O = -1,
        E = 5,
        P = -1;
    function C() {
        return !(e.unstable_now() - P < E);
    }
    function N() {
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
    if ('function' == typeof m)
        S = function () {
            m(N);
        };
    else if ('undefined' != typeof MessageChannel) {
        var j = new MessageChannel(),
            T = j.port2;
        ((j.port1.onmessage = N),
            (S = function () {
                T.postMessage(null);
            }));
    } else
        S = function () {
            y(N, 0);
        };
    function A(e) {
        ((x = e), k || ((k = !0), S()));
    }
    function R(t, n) {
        O = y(function () {
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
            p || h || ((p = !0), A(w));
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
        (e.unstable_scheduleCallback = function (r, i, o) {
            var a = e.unstable_now();
            switch (
                ('object' == typeof o && null !== o
                    ? (o = 'number' == typeof (o = o.delay) && 0 < o ? a + o : a)
                    : (o = a),
                r)
            ) {
                case 1:
                    var s = -1;
                    break;
                case 2:
                    s = 250;
                    break;
                case 5:
                    s = 1073741823;
                    break;
                case 4:
                    s = 1e4;
                    break;
                default:
                    s = 5e3;
            }
            return (
                (r = {
                    id: c++,
                    callback: i,
                    priorityLevel: r,
                    startTime: o,
                    expirationTime: (s = o + s),
                    sortIndex: -1,
                }),
                o > a
                    ? ((r.sortIndex = o),
                      t(l, r),
                      null === n(u) && r === n(l) && (v ? (g(O), (O = -1)) : (v = !0), R(_, o - a)))
                    : ((r.sortIndex = s), t(u, r), p || h || ((p = !0), A(w))),
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
})(Ve),
    (De.exports = Ve));
var Me = De.exports,
    Fe = B,
    Ue = Me;
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
    qe = {};
function He(e, t) {
    (We(e, t), We(e + 'Capture', t));
}
function We(e, t) {
    for (qe[e] = t, e = 0; e < t.length; e++) $e.add(t[e]);
}
var Ke = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    Qe = Object.prototype.hasOwnProperty,
    Ge =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Xe = {},
    Ye = {};
function Je(e, t, n, r, i, o, a) {
    ((this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = a));
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
                  return !!Qe.call(Ye, e) || (!Qe.call(Xe, e) && (Ge.test(e) ? (Ye[e] = !0) : ((Xe[e] = !0), !1)));
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
    ot = Symbol.for('react.portal'),
    at = Symbol.for('react.fragment'),
    st = Symbol.for('react.strict_mode'),
    ut = Symbol.for('react.profiler'),
    lt = Symbol.for('react.provider'),
    ct = Symbol.for('react.context'),
    ft = Symbol.for('react.forward_ref'),
    dt = Symbol.for('react.suspense'),
    ht = Symbol.for('react.suspense_list'),
    pt = Symbol.for('react.memo'),
    vt = Symbol.for('react.lazy'),
    yt = Symbol.for('react.offscreen'),
    gt = Symbol.iterator;
function mt(e) {
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
                } catch (l) {
                    var r = l;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (l) {
                    r = l;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (l) {
                r = l;
            }
            e();
        }
    } catch (l) {
        if (l && r && 'string' == typeof l.stack) {
            for (
                var i = l.stack.split('\n'), o = r.stack.split('\n'), a = i.length - 1, s = o.length - 1;
                1 <= a && 0 <= s && i[a] !== o[s];
            )
                s--;
            for (; 1 <= a && 0 <= s; a--, s--)
                if (i[a] !== o[s]) {
                    if (1 !== a || 1 !== s)
                        do {
                            if ((a--, 0 > --s || i[a] !== o[s])) {
                                var u = '\n' + i[a].replace(' at new ', ' at ');
                                return (
                                    e.displayName &&
                                        u.includes('<anonymous>') &&
                                        (u = u.replace('<anonymous>', e.displayName)),
                                    u
                                );
                            }
                        } while (1 <= a && 0 <= s);
                    break;
                }
        }
    } finally {
        ((St = !1), (Error.prepareStackTrace = n));
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
            return (e = kt(e.type, !1));
        case 11:
            return (e = kt(e.type.render, !1));
        case 1:
            return (e = kt(e.type, !0));
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
        case ut:
            return 'Profiler';
        case st:
            return 'StrictMode';
        case dt:
            return 'Suspense';
        case ht:
            return 'SuspenseList';
    }
    if ('object' == typeof e)
        switch (e.$$typeof) {
            case ct:
                return (e.displayName || 'Context') + '.Consumer';
            case lt:
                return (e._context.displayName || 'Context') + '.Provider';
            case ft:
                var t = e.render;
                return (
                    (e = e.displayName) ||
                        (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'),
                    e
                );
            case pt:
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
function Nt(e) {
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
function jt(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = '';
    return (e && (r = Ct(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0));
}
function Tt(e) {
    if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body;
    } catch (t) {
        return e.body;
    }
}
function At(e, t) {
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
        ? Dt(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && Dt(e, t.type, Pt(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked));
}
function zt(e, t, n) {
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
    ('number' === t && Tt(e.ownerDocument) === e) ||
        (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Vt = Array.isArray;
function Mt(e, t, n, r) {
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
            if (Vt(n)) {
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
function Ht(e, t) {
    return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? qt(t)
        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
}
var Wt,
    Kt,
    Qt =
        ((Kt = function (e, t) {
            if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e) e.innerHTML = t;
            else {
                for (
                    (Wt = Wt || document.createElement('div')).innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                        t = Wt.firstChild;
                    e.firstChild;
                )
                    e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
        }),
        'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return Kt(e, t);
                  });
              }
            : Kt);
function Gt(e, t) {
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
function Jt(e, t, n) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n || 'number' != typeof t || 0 === t || (Xt.hasOwnProperty(e) && Xt[e])
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
function on(e) {
    return (
        (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
    );
}
var an = null,
    sn = null,
    un = null;
function ln(e) {
    if ((e = ra(e))) {
        if ('function' != typeof an) throw Error(Be(280));
        var t = e.stateNode;
        t && ((t = oa(t)), an(e.stateNode, e.type, t));
    }
}
function cn(e) {
    sn ? (un ? un.push(e) : (un = [e])) : (sn = e);
}
function fn() {
    if (sn) {
        var e = sn,
            t = un;
        if (((un = sn = null), ln(e), t)) for (e = 0; e < t.length; e++) ln(t[e]);
    }
}
function dn(e, t) {
    return e(t);
}
function hn() {}
var pn = !1;
function vn(e, t, n) {
    if (pn) return e(t, n);
    pn = !0;
    try {
        return dn(e, t, n);
    } finally {
        ((pn = !1), (null !== sn || null !== un) && (hn(), fn()));
    }
}
function yn(e, t) {
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
    if (n && 'function' != typeof n) throw Error(Be(231, t, typeof n));
    return n;
}
var gn = !1;
if (Ke)
    try {
        var mn = {};
        (Object.defineProperty(mn, 'passive', {
            get: function () {
                gn = !0;
            },
        }),
            window.addEventListener('test', mn, mn),
            window.removeEventListener('test', mn, mn));
    } catch (Kt) {
        gn = !1;
    }
function bn(e, t, n, r, i, o, a, s, u) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, l);
    } catch (c) {
        this.onError(c);
    }
}
var _n = !1,
    wn = null,
    Sn = !1,
    kn = null,
    xn = {
        onError: function (e) {
            ((_n = !0), (wn = e));
        },
    };
function On(e, t, n, r, i, o, a, s, u) {
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
function Nn(e) {
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
                    throw Error(Be(188));
                }
                if (n.return !== r.return) ((n = i), (r = o));
                else {
                    for (var a = !1, s = i.child; s; ) {
                        if (s === n) {
                            ((a = !0), (n = i), (r = o));
                            break;
                        }
                        if (s === r) {
                            ((a = !0), (r = i), (n = o));
                            break;
                        }
                        s = s.sibling;
                    }
                    if (!a) {
                        for (s = o.child; s; ) {
                            if (s === n) {
                                ((a = !0), (n = o), (r = i));
                                break;
                            }
                            if (s === r) {
                                ((a = !0), (r = o), (n = i));
                                break;
                            }
                            s = s.sibling;
                        }
                        if (!a) throw Error(Be(189));
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
var Tn = Ue.unstable_scheduleCallback,
    An = Ue.unstable_cancelCallback,
    Rn = Ue.unstable_shouldYield,
    Ln = Ue.unstable_requestPaint,
    In = Ue.unstable_now,
    zn = Ue.unstable_getCurrentPriorityLevel,
    Dn = Ue.unstable_ImmediatePriority,
    Vn = Ue.unstable_UserBlockingPriority,
    Mn = Ue.unstable_NormalPriority,
    Fn = Ue.unstable_LowPriority,
    Un = Ue.unstable_IdlePriority,
    Bn = null,
    $n = null;
var qn = Math.clz32
        ? Math.clz32
        : function (e) {
              return ((e >>>= 0), 0 === e ? 32 : (31 - ((Hn(e) / Wn) | 0)) | 0);
          },
    Hn = Math.log,
    Wn = Math.LN2;
var Kn = 64,
    Qn = 4194304;
function Gn(e) {
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
        i = e.suspendedLanes,
        o = e.pingedLanes,
        a = 268435455 & n;
    if (0 !== a) {
        var s = a & ~i;
        0 !== s ? (r = Gn(s)) : 0 !== (o &= a) && (r = Gn(o));
    } else 0 !== (a = n & ~i) ? (r = Gn(a)) : 0 !== o && (r = Gn(o));
    if (0 === r) return 0;
    if (0 !== t && t !== r && 0 == (t & i) && ((i = r & -r) >= (o = t & -t) || (16 === i && 0 != (4194240 & o))))
        return t;
    if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; ) ((i = 1 << (n = 31 - qn(t))), (r |= e[n]), (t &= ~i));
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
function Jn(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
}
function Zn() {
    var e = Kn;
    return (0 == (4194240 & (Kn <<= 1)) && (Kn = 64), e);
}
function er(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function tr(e, t, n) {
    ((e.pendingLanes |= t),
        536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        ((e = e.eventTimes)[(t = 31 - qn(t))] = n));
}
function nr(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - qn(n),
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
    sr,
    ur,
    lr,
    cr = !1,
    fr = [],
    dr = null,
    hr = null,
    pr = null,
    vr = new Map(),
    yr = new Map(),
    gr = [],
    mr =
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
            hr = null;
            break;
        case 'mouseover':
        case 'mouseout':
            pr = null;
            break;
        case 'pointerover':
        case 'pointerout':
            vr.delete(t.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            yr.delete(t.pointerId);
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
                        void lr(e.priority, function () {
                            sr(n);
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
        var n = Rr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return (null !== (t = ra(n)) && ar(t), (e.blockedOn = n), !1);
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        ((rn = r), n.target.dispatchEvent(r), (rn = null), t.shift());
    }
    return !0;
}
function kr(e, t, n) {
    Sr(e) && n.delete(t);
}
function xr() {
    ((cr = !1),
        null !== dr && Sr(dr) && (dr = null),
        null !== hr && Sr(hr) && (hr = null),
        null !== pr && Sr(pr) && (pr = null),
        vr.forEach(kr),
        yr.forEach(kr));
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
            null !== hr && Or(hr, e),
            null !== pr && Or(pr, e),
            vr.forEach(t),
            yr.forEach(t),
            n = 0;
        n < gr.length;
        n++
    )
        (r = gr[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < gr.length && null === (n = gr[0]).blockedOn; ) (wr(n), null === n.blockedOn && gr.shift());
}
var Pr = rt.ReactCurrentBatchConfig,
    Cr = !0;
function Nr(e, t, n, r) {
    var i = rr,
        o = Pr.transition;
    Pr.transition = null;
    try {
        ((rr = 1), Tr(e, t, n, r));
    } finally {
        ((rr = i), (Pr.transition = o));
    }
}
function jr(e, t, n, r) {
    var i = rr,
        o = Pr.transition;
    Pr.transition = null;
    try {
        ((rr = 4), Tr(e, t, n, r));
    } finally {
        ((rr = i), (Pr.transition = o));
    }
}
function Tr(e, t, n, r) {
    if (Cr) {
        var i = Rr(e, t, n, r);
        if (null === i) (Co(e, t, r, Ar, n), br(e, r));
        else if (
            (function (e, t, n, r, i) {
                switch (t) {
                    case 'focusin':
                        return ((dr = _r(dr, e, t, n, r, i)), !0);
                    case 'dragenter':
                        return ((hr = _r(hr, e, t, n, r, i)), !0);
                    case 'mouseover':
                        return ((pr = _r(pr, e, t, n, r, i)), !0);
                    case 'pointerover':
                        var o = i.pointerId;
                        return (vr.set(o, _r(vr.get(o) || null, e, t, n, r, i)), !0);
                    case 'gotpointercapture':
                        return ((o = i.pointerId), yr.set(o, _r(yr.get(o) || null, e, t, n, r, i)), !0);
                }
                return !1;
            })(i, e, t, n, r)
        )
            r.stopPropagation();
        else if ((br(e, r), 4 & t && -1 < mr.indexOf(e))) {
            for (; null !== i; ) {
                var o = ra(i);
                if ((null !== o && or(o), null === (o = Rr(e, t, n, r)) && Co(e, t, r, Ar, n), o === i)) break;
                i = o;
            }
            null !== i && r.stopPropagation();
        } else Co(e, t, r, null, n);
    }
}
var Ar = null;
function Rr(e, t, n, r) {
    if (((Ar = null), null !== (e = na((e = on(r))))))
        if (null === (t = En(e))) e = null;
        else if (13 === (n = t.tag)) {
            if (null !== (e = Pn(t))) return e;
            e = null;
        } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return ((Ar = e), null);
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
            switch (zn()) {
                case Dn:
                    return 1;
                case Vn:
                    return 4;
                case Mn:
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
var Ir = null,
    zr = null,
    Dr = null;
function Vr() {
    if (Dr) return Dr;
    var e,
        t,
        n = zr,
        r = n.length,
        i = 'value' in Ir ? Ir.value : Ir.textContent,
        o = i.length;
    for (e = 0; e < r && n[e] === i[e]; e++);
    var a = r - e;
    for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
    return (Dr = i.slice(e, 1 < t ? 1 - t : void 0));
}
function Mr(e) {
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
    qr,
    Hr,
    Wr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Kr = Br(Wr),
    Qr = _t({}, Wr, { view: 0, detail: 0 }),
    Gr = Br(Qr),
    Xr = _t({}, Qr, {
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
                : (e !== Hr &&
                      (Hr && 'mousemove' === e.type
                          ? (($r = e.screenX - Hr.screenX), (qr = e.screenY - Hr.screenY))
                          : (qr = $r = 0),
                      (Hr = e)),
                  $r);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : qr;
        },
    }),
    Yr = Br(Xr),
    Jr = Br(_t({}, Xr, { dataTransfer: 0 })),
    Zr = Br(_t({}, Qr, { relatedTarget: 0 })),
    ei = Br(_t({}, Wr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    ti = _t({}, Wr, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    ni = Br(ti),
    ri = Br(_t({}, Wr, { data: 0 })),
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
function si(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = ai[e]) && !!t[e];
}
function ui() {
    return si;
}
var li = _t({}, Qr, {
        key: function (e) {
            if (e.key) {
                var t = ii[e.key] || e.key;
                if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
                ? 13 === (e = Mr(e))
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
        getModifierState: ui,
        charCode: function (e) {
            return 'keypress' === e.type ? Mr(e) : 0;
        },
        keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
        which: function (e) {
            return 'keypress' === e.type ? Mr(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
    }),
    ci = Br(li),
    fi = Br(
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
    di = Br(
        _t({}, Qr, {
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
    hi = Br(_t({}, Wr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    pi = _t({}, Xr, {
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
    vi = Br(pi),
    yi = [9, 13, 27, 32],
    gi = Ke && 'CompositionEvent' in window,
    mi = null;
Ke && 'documentMode' in document && (mi = document.documentMode);
var bi = Ke && 'TextEvent' in window && !mi,
    _i = Ke && (!gi || (mi && 8 < mi && 11 >= mi)),
    wi = String.fromCharCode(32),
    Si = !1;
function ki(e, t) {
    switch (e) {
        case 'keyup':
            return -1 !== yi.indexOf(t.keyCode);
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
        0 < (t = jo(t, 'onChange')).length &&
            ((n = new Kr('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
}
var Ni = null,
    ji = null;
function Ti(e) {
    So(e, 0);
}
function Ai(e) {
    if (jt(ia(e))) return e;
}
function Ri(e, t) {
    if ('change' === e) return t;
}
var Li = !1;
if (Ke) {
    var Ii;
    if (Ke) {
        var zi = 'oninput' in document;
        if (!zi) {
            var Di = document.createElement('div');
            (Di.setAttribute('oninput', 'return;'), (zi = 'function' == typeof Di.oninput));
        }
        Ii = zi;
    } else Ii = !1;
    Li = Ii && (!document.documentMode || 9 < document.documentMode);
}
function Vi() {
    Ni && (Ni.detachEvent('onpropertychange', Mi), (ji = Ni = null));
}
function Mi(e) {
    if ('value' === e.propertyName && Ai(ji)) {
        var t = [];
        (Ci(t, ji, e, on(e)), vn(Ti, t));
    }
}
function Fi(e, t, n) {
    'focusin' === e ? (Vi(), (ji = n), (Ni = t).attachEvent('onpropertychange', Mi)) : 'focusout' === e && Vi();
}
function Ui(e) {
    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Ai(ji);
}
function Bi(e, t) {
    if ('click' === e) return Ai(t);
}
function $i(e, t) {
    if ('input' === e || 'change' === e) return Ai(t);
}
var qi =
    'function' == typeof Object.is
        ? Object.is
        : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
          };
function Hi(e, t) {
    if (qi(e, t)) return !0;
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Qe.call(t, i) || !qi(e[i], t[i])) return !1;
    }
    return !0;
}
function Wi(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Ki(e, t) {
    var n,
        r = Wi(e);
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
        r = Wi(r);
    }
}
function Qi(e, t) {
    return (
        !(!e || !t) &&
        (e === t ||
            ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                    ? Qi(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
    );
}
function Gi() {
    for (var e = window, t = Tt(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = 'string' == typeof t.contentWindow.location.href;
        } catch (r) {
            n = !1;
        }
        if (!n) break;
        t = Tt((e = t.contentWindow).document);
    }
    return t;
}
function Xi(e) {
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
function Yi(e) {
    var t = Gi(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Qi(n.ownerDocument.documentElement, n)) {
        if (null !== r && Xi(n))
            if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
            else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                ((r = void 0 === r.end ? o : Math.min(r.end, i)),
                    !e.extend && o > r && ((i = r), (r = o), (o = i)),
                    (i = Ki(n, o)));
                var a = Ki(n, r);
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
var Ji = Ke && 'documentMode' in document && 11 >= document.documentMode,
    Zi = null,
    eo = null,
    to = null,
    no = !1;
function ro(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    no ||
        null == Zi ||
        Zi !== Tt(r) ||
        ('selectionStart' in (r = Zi) && Xi(r)
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
            0 < (r = jo(eo, 'onSelect')).length &&
                ((t = new Kr('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Zi))));
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
    so = {};
function uo(e) {
    if (ao[e]) return ao[e];
    if (!oo[e]) return e;
    var t,
        n = oo[e];
    for (t in n) if (n.hasOwnProperty(t) && t in so) return (ao[e] = n[t]);
    return e;
}
Ke &&
    ((so = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete oo.animationend.animation, delete oo.animationiteration.animation, delete oo.animationstart.animation),
    'TransitionEvent' in window || delete oo.transitionend.transition);
var lo = uo('animationend'),
    co = uo('animationiteration'),
    fo = uo('animationstart'),
    ho = uo('transitionend'),
    po = new Map(),
    vo =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' ',
        );
function yo(e, t) {
    (po.set(e, t), He(t, [e]));
}
for (var go = 0; go < vo.length; go++) {
    var mo = vo[go];
    yo(mo.toLowerCase(), 'on' + (mo[0].toUpperCase() + mo.slice(1)));
}
(yo(lo, 'onAnimationEnd'),
    yo(co, 'onAnimationIteration'),
    yo(fo, 'onAnimationStart'),
    yo('dblclick', 'onDoubleClick'),
    yo('focusin', 'onFocus'),
    yo('focusout', 'onBlur'),
    yo(ho, 'onTransitionEnd'),
    We('onMouseEnter', ['mouseout', 'mouseover']),
    We('onMouseLeave', ['mouseout', 'mouseover']),
    We('onPointerEnter', ['pointerout', 'pointerover']),
    We('onPointerLeave', ['pointerout', 'pointerover']),
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
        (function (e, t, n, r, i, o, a, s, u) {
            if ((On.apply(this, arguments), _n)) {
                if (!_n) throw Error(Be(198));
                var l = wn;
                ((_n = !1), (wn = null), Sn || ((Sn = !0), (kn = l)));
            }
        })(r, t, void 0, e),
        (e.currentTarget = null));
}
function So(e, t) {
    t = 0 != (4 & t);
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var s = r[a],
                        u = s.instance,
                        l = s.currentTarget;
                    if (((s = s.listener), u !== o && i.isPropagationStopped())) break e;
                    (wo(i, s, l), (o = u));
                }
            else
                for (a = 0; a < r.length; a++) {
                    if (
                        ((u = (s = r[a]).instance),
                        (l = s.currentTarget),
                        (s = s.listener),
                        u !== o && i.isPropagationStopped())
                    )
                        break e;
                    (wo(i, s, l), (o = u));
                }
        }
    }
    if (Sn) throw ((e = kn), (Sn = !1), (kn = null), e);
}
function ko(e, t) {
    var n = t[Zo];
    void 0 === n && (n = t[Zo] = new Set());
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
            var i = Nr;
            break;
        case 4:
            i = jr;
            break;
        default:
            i = Tr;
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
                var s = r.stateNode.containerInfo;
                if (s === i || (8 === s.nodeType && s.parentNode === i)) break;
                if (4 === a)
                    for (a = r.return; null !== a; ) {
                        var u = a.tag;
                        if (
                            (3 === u || 4 === u) &&
                            ((u = a.stateNode.containerInfo) === i || (8 === u.nodeType && u.parentNode === i))
                        )
                            return;
                        a = a.return;
                    }
                for (; null !== s; ) {
                    if (null === (a = na(s))) return;
                    if (5 === (u = a.tag) || 6 === u) {
                        r = o = a;
                        continue e;
                    }
                    s = s.parentNode;
                }
            }
            r = r.return;
        }
    vn(function () {
        var r = o,
            i = on(n),
            a = [];
        e: {
            var s = po.get(e);
            if (void 0 !== s) {
                var u = Kr,
                    l = e;
                switch (e) {
                    case 'keypress':
                        if (0 === Mr(n)) break e;
                    case 'keydown':
                    case 'keyup':
                        u = ci;
                        break;
                    case 'focusin':
                        ((l = 'focus'), (u = Zr));
                        break;
                    case 'focusout':
                        ((l = 'blur'), (u = Zr));
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        u = Zr;
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
                        u = Jr;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        u = di;
                        break;
                    case lo:
                    case co:
                    case fo:
                        u = ei;
                        break;
                    case ho:
                        u = hi;
                        break;
                    case 'scroll':
                        u = Gr;
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
                    d = c ? (null !== s ? s + 'Capture' : null) : s;
                c = [];
                for (var h, p = r; null !== p; ) {
                    var v = (h = p).stateNode;
                    if (
                        (5 === h.tag &&
                            null !== v &&
                            ((h = v), null !== d && null != (v = yn(p, d)) && c.push(No(p, v, h))),
                        f)
                    )
                        break;
                    p = p.return;
                }
                0 < c.length && ((s = new u(s, l, null, n, i)), a.push({ event: s, listeners: c }));
            }
        }
        if (0 == (7 & t)) {
            if (
                ((u = 'mouseout' === e || 'pointerout' === e),
                (!(s = 'mouseover' === e || 'pointerover' === e) ||
                    n === rn ||
                    !(l = n.relatedTarget || n.fromElement) ||
                    (!na(l) && !l[Jo])) &&
                    (u || s) &&
                    ((s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window),
                    u
                        ? ((u = r),
                          null !== (l = (l = n.relatedTarget || n.toElement) ? na(l) : null) &&
                              (l !== (f = En(l)) || (5 !== l.tag && 6 !== l.tag)) &&
                              (l = null))
                        : ((u = null), (l = r)),
                    u !== l))
            ) {
                if (
                    ((c = Yr),
                    (v = 'onMouseLeave'),
                    (d = 'onMouseEnter'),
                    (p = 'mouse'),
                    ('pointerout' !== e && 'pointerover' !== e) ||
                        ((c = fi), (v = 'onPointerLeave'), (d = 'onPointerEnter'), (p = 'pointer')),
                    (f = null == u ? s : ia(u)),
                    (h = null == l ? s : ia(l)),
                    ((s = new c(v, p + 'leave', u, n, i)).target = f),
                    (s.relatedTarget = h),
                    (v = null),
                    na(i) === r && (((c = new c(d, p + 'enter', l, n, i)).target = h), (c.relatedTarget = f), (v = c)),
                    (f = v),
                    u && l)
                )
                    e: {
                        for (d = l, p = 0, h = c = u; h; h = To(h)) p++;
                        for (h = 0, v = d; v; v = To(v)) h++;
                        for (; 0 < p - h; ) ((c = To(c)), p--);
                        for (; 0 < h - p; ) ((d = To(d)), h--);
                        for (; p--; ) {
                            if (c === d || (null !== d && c === d.alternate)) break e;
                            ((c = To(c)), (d = To(d)));
                        }
                        c = null;
                    }
                else c = null;
                (null !== u && Ao(a, s, u, c, !1), null !== l && null !== f && Ao(a, f, l, c, !0));
            }
            if (
                'select' === (u = (s = r ? ia(r) : window).nodeName && s.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === s.type)
            )
                var y = Ri;
            else if (Pi(s))
                if (Li) y = $i;
                else {
                    y = Ui;
                    var g = Fi;
                }
            else
                (u = s.nodeName) &&
                    'input' === u.toLowerCase() &&
                    ('checkbox' === s.type || 'radio' === s.type) &&
                    (y = Bi);
            switch (
                (y && (y = y(e, r))
                    ? Ci(a, y, n, i)
                    : (g && g(e, s, r),
                      'focusout' === e &&
                          (g = s._wrapperState) &&
                          g.controlled &&
                          'number' === s.type &&
                          Dt(s, 'number', s.value)),
                (g = r ? ia(r) : window),
                e)
            ) {
                case 'focusin':
                    (Pi(g) || 'true' === g.contentEditable) && ((Zi = g), (eo = r), (to = null));
                    break;
                case 'focusout':
                    to = eo = Zi = null;
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
                    if (Ji) break;
                case 'keydown':
                case 'keyup':
                    ro(a, n, i);
            }
            var m;
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
                    ? ki(e, n) && (b = 'onCompositionEnd')
                    : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
            (b &&
                (_i &&
                    'ko' !== n.locale &&
                    (Oi || 'onCompositionStart' !== b
                        ? 'onCompositionEnd' === b && Oi && (m = Vr())
                        : ((zr = 'value' in (Ir = i) ? Ir.value : Ir.textContent), (Oi = !0))),
                0 < (g = jo(r, b)).length &&
                    ((b = new ri(b, e, null, n, i)),
                    a.push({ event: b, listeners: g }),
                    m ? (b.data = m) : null !== (m = xi(n)) && (b.data = m))),
                (m = bi
                    ? (function (e, t) {
                          switch (e) {
                              case 'compositionend':
                                  return xi(t);
                              case 'keypress':
                                  return 32 !== t.which ? null : ((Si = !0), wi);
                              case 'textInput':
                                  return (e = t.data) === wi && Si ? null : e;
                              default:
                                  return null;
                          }
                      })(e, n)
                    : (function (e, t) {
                          if (Oi)
                              return 'compositionend' === e || (!gi && ki(e, t))
                                  ? ((e = Vr()), (Dr = zr = Ir = null), (Oi = !1), e)
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
                    0 < (r = jo(r, 'onBeforeInput')).length &&
                    ((i = new ri('onBeforeInput', 'beforeinput', null, n, i)),
                    a.push({ event: i, listeners: r }),
                    (i.data = m)));
        }
        So(a, t);
    });
}
function No(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function jo(e, t) {
    for (var n = t + 'Capture', r = []; null !== e; ) {
        var i = e,
            o = i.stateNode;
        (5 === i.tag &&
            null !== o &&
            ((i = o), null != (o = yn(e, n)) && r.unshift(No(e, o, i)), null != (o = yn(e, t)) && r.push(No(e, o, i))),
            (e = e.return));
    }
    return r;
}
function To(e) {
    if (null === e) return null;
    do {
        e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
}
function Ao(e, t, n, r, i) {
    for (var o = t._reactName, a = []; null !== n && n !== r; ) {
        var s = n,
            u = s.alternate,
            l = s.stateNode;
        if (null !== u && u === r) break;
        (5 === s.tag &&
            null !== l &&
            ((s = l),
            i
                ? null != (u = yn(n, o)) && a.unshift(No(n, u, s))
                : i || (null != (u = yn(n, o)) && a.push(No(n, u, s)))),
            (n = n.return));
    }
    0 !== a.length && e.push({ event: t, listeners: a });
}
var Ro = /\r\n?/g,
    Lo = /\u0000|\uFFFD/g;
function Io(e) {
    return ('string' == typeof e ? e : '' + e).replace(Ro, '\n').replace(Lo, '');
}
function zo(e, t, n) {
    if (((t = Io(t)), Io(e) !== t && n)) throw Error(Be(425));
}
function Do() {}
var Vo = null,
    Mo = null;
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
var Uo = 'function' == typeof setTimeout ? setTimeout : void 0,
    Bo = 'function' == typeof clearTimeout ? clearTimeout : void 0,
    $o = 'function' == typeof Promise ? Promise : void 0,
    qo =
        'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== $o
              ? function (e) {
                    return $o.resolve(null).then(e).catch(Ho);
                }
              : Uo;
function Ho(e) {
    setTimeout(function () {
        throw e;
    });
}
function Wo(e, t) {
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
function Ko(e) {
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
function Qo(e) {
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
var Go = Math.random().toString(36).slice(2),
    Xo = '__reactFiber$' + Go,
    Yo = '__reactProps$' + Go,
    Jo = '__reactContainer$' + Go,
    Zo = '__reactEvents$' + Go,
    ea = '__reactListeners$' + Go,
    ta = '__reactHandles$' + Go;
function na(e) {
    var t = e[Xo];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Jo] || n[Xo])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = Qo(e); null !== e; ) {
                    if ((n = e[Xo])) return n;
                    e = Qo(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function ra(e) {
    return !(e = e[Xo] || e[Jo]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
}
function ia(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(Be(33));
}
function oa(e) {
    return e[Yo] || null;
}
var aa = [],
    sa = -1;
function ua(e) {
    return { current: e };
}
function la(e) {
    0 > sa || ((e.current = aa[sa]), (aa[sa] = null), sa--);
}
function ca(e, t) {
    (sa++, (aa[sa] = e.current), (e.current = t));
}
var fa = {},
    da = ua(fa),
    ha = ua(!1),
    pa = fa;
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
function ya(e) {
    return null != (e = e.childContextTypes);
}
function ga() {
    (la(ha), la(da));
}
function ma(e, t, n) {
    if (da.current !== fa) throw Error(Be(168));
    (ca(da, t), ca(ha, n));
}
function ba(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
    for (var i in (r = r.getChildContext())) if (!(i in t)) throw Error(Be(108, Et(e) || 'Unknown', i));
    return _t({}, n, r);
}
function _a(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fa),
        (pa = da.current),
        ca(da, e),
        ca(ha, ha.current),
        !0
    );
}
function wa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(Be(169));
    (n ? ((e = ba(e, t, pa)), (r.__reactInternalMemoizedMergedChildContext = e), la(ha), la(da), ca(da, e)) : la(ha),
        ca(ha, n));
}
var Sa = null,
    ka = !1,
    xa = !1;
function Oa(e) {
    null === Sa ? (Sa = [e]) : Sa.push(e);
}
function Ea() {
    if (!xa && null !== Sa) {
        xa = !0;
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
        } catch (i) {
            throw (null !== Sa && (Sa = Sa.slice(e + 1)), Tn(Dn, Ea), i);
        } finally {
            ((rr = t), (xa = !1));
        }
    }
    return null;
}
var Pa = [],
    Ca = 0,
    Na = null,
    ja = 0,
    Ta = [],
    Aa = 0,
    Ra = null,
    La = 1,
    Ia = '';
function za(e, t) {
    ((Pa[Ca++] = ja), (Pa[Ca++] = Na), (Na = e), (ja = t));
}
function Da(e, t, n) {
    ((Ta[Aa++] = La), (Ta[Aa++] = Ia), (Ta[Aa++] = Ra), (Ra = e));
    var r = La;
    e = Ia;
    var i = 32 - qn(r) - 1;
    ((r &= ~(1 << i)), (n += 1));
    var o = 32 - qn(t) + i;
    if (30 < o) {
        var a = i - (i % 5);
        ((o = (r & ((1 << a) - 1)).toString(32)),
            (r >>= a),
            (i -= a),
            (La = (1 << (32 - qn(t) + i)) | (n << i) | r),
            (Ia = o + e));
    } else ((La = (1 << o) | (n << i) | r), (Ia = e));
}
function Va(e) {
    null !== e.return && (za(e, 1), Da(e, 1, 0));
}
function Ma(e) {
    for (; e === Na; ) ((Na = Pa[--Ca]), (Pa[Ca] = null), (ja = Pa[--Ca]), (Pa[Ca] = null));
    for (; e === Ra; )
        ((Ra = Ta[--Aa]), (Ta[Aa] = null), (Ia = Ta[--Aa]), (Ta[Aa] = null), (La = Ta[--Aa]), (Ta[Aa] = null));
}
var Fa = null,
    Ua = null,
    Ba = !1,
    $a = null;
function qa(e, t) {
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
                ((e.stateNode = t), (Fa = e), (Ua = Ko(t.firstChild)), !0)
            );
        case 6:
            return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (Fa = e), (Ua = null), !0)
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
                (Ua = null),
                !0)
            );
        default:
            return !1;
    }
}
function Wa(e) {
    return 0 != (1 & e.mode) && 0 == (128 & e.flags);
}
function Ka(e) {
    if (Ba) {
        var t = Ua;
        if (t) {
            var n = t;
            if (!Ha(e, t)) {
                if (Wa(e)) throw Error(Be(418));
                t = Ko(n.nextSibling);
                var r = Fa;
                t && Ha(e, t) ? qa(r, n) : ((e.flags = (-4097 & e.flags) | 2), (Ba = !1), (Fa = e));
            }
        } else {
            if (Wa(e)) throw Error(Be(418));
            ((e.flags = (-4097 & e.flags) | 2), (Ba = !1), (Fa = e));
        }
    }
}
function Qa(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
    Fa = e;
}
function Ga(e) {
    if (e !== Fa) return !1;
    if (!Ba) return (Qa(e), (Ba = !0), !1);
    var t;
    if (
        ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = 'head' !== (t = e.type) && 'body' !== t && !Fo(e.type, e.memoizedProps)),
        t && (t = Ua))
    ) {
        if (Wa(e)) throw (Xa(), Error(Be(418)));
        for (; t; ) (qa(e, t), (t = Ko(t.nextSibling)));
    }
    if ((Qa(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(Be(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ('/$' === n) {
                        if (0 === t) {
                            Ua = Ko(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
            }
            Ua = null;
        }
    } else Ua = Fa ? Ko(e.stateNode.nextSibling) : null;
    return !0;
}
function Xa() {
    for (var e = Ua; e; ) e = Ko(e.nextSibling);
}
function Ya() {
    ((Ua = Fa = null), (Ba = !1));
}
function Ja(e) {
    null === $a ? ($a = [e]) : $a.push(e);
}
var Za = rt.ReactCurrentBatchConfig;
function es(e, t, n) {
    if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
        if (n._owner) {
            if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(Be(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(Be(147, e));
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
        if ('string' != typeof e) throw Error(Be(284));
        if (!n._owner) throw Error(Be(290, e));
    }
    return e;
}
function ts(e, t) {
    throw (
        (e = Object.prototype.toString.call(t)),
        Error(Be(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e))
    );
}
function ns(e) {
    return (0, e._init)(e._payload);
}
function rs(e) {
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
    function s(e, t, n, r) {
        return null === t || 6 !== t.tag ? (((t = wf(n, e.mode, r)).return = e), t) : (((t = i(t, n)).return = e), t);
    }
    function u(e, t, n, r) {
        var o = n.type;
        return o === at
            ? c(e, t, n.props.children, r, n.key)
            : null !== t &&
                (t.elementType === o || ('object' == typeof o && null !== o && o.$$typeof === vt && ns(o) === t.type))
              ? (((r = i(t, n.props)).ref = es(e, t, n)), (r.return = e), r)
              : (((r = mf(n.type, n.key, n.props, null, e.mode, r)).ref = es(e, t, n)), (r.return = e), r);
    }
    function l(e, t, n, r) {
        return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = Sf(n, e.mode, r)).return = e), t)
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
                        ((n = mf(t.type, t.key, t.props, null, e.mode, n)).ref = es(e, null, t)),
                        (n.return = e),
                        n
                    );
                case ot:
                    return (((t = Sf(t, e.mode, n)).return = e), t);
                case vt:
                    return f(e, (0, t._init)(t._payload), n);
            }
            if (Vt(t) || mt(t)) return (((t = bf(t, e.mode, n, null)).return = e), t);
            ts(e, t);
        }
        return null;
    }
    function d(e, t, n, r) {
        var i = null !== t ? t.key : null;
        if (('string' == typeof n && '' !== n) || 'number' == typeof n) return null !== i ? null : s(e, t, '' + n, r);
        if ('object' == typeof n && null !== n) {
            switch (n.$$typeof) {
                case it:
                    return n.key === i ? u(e, t, n, r) : null;
                case ot:
                    return n.key === i ? l(e, t, n, r) : null;
                case vt:
                    return d(e, t, (i = n._init)(n._payload), r);
            }
            if (Vt(n) || mt(n)) return null !== i ? null : c(e, t, n, r, null);
            ts(e, n);
        }
        return null;
    }
    function h(e, t, n, r, i) {
        if (('string' == typeof r && '' !== r) || 'number' == typeof r) return s(t, (e = e.get(n) || null), '' + r, i);
        if ('object' == typeof r && null !== r) {
            switch (r.$$typeof) {
                case it:
                    return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                case ot:
                    return l(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                case vt:
                    return h(e, t, n, (0, r._init)(r._payload), i);
            }
            if (Vt(r) || mt(r)) return c(t, (e = e.get(n) || null), r, i, null);
            ts(t, r);
        }
        return null;
    }
    return function s(u, l, c, p) {
        if (
            ('object' == typeof c && null !== c && c.type === at && null === c.key && (c = c.props.children),
            'object' == typeof c && null !== c)
        ) {
            switch (c.$$typeof) {
                case it:
                    e: {
                        for (var v = c.key, y = l; null !== y; ) {
                            if (y.key === v) {
                                if ((v = c.type) === at) {
                                    if (7 === y.tag) {
                                        (n(u, y.sibling), ((l = i(y, c.props.children)).return = u), (u = l));
                                        break e;
                                    }
                                } else if (
                                    y.elementType === v ||
                                    ('object' == typeof v && null !== v && v.$$typeof === vt && ns(v) === y.type)
                                ) {
                                    (n(u, y.sibling), ((l = i(y, c.props)).ref = es(u, y, c)), (l.return = u), (u = l));
                                    break e;
                                }
                                n(u, y);
                                break;
                            }
                            (t(u, y), (y = y.sibling));
                        }
                        c.type === at
                            ? (((l = bf(c.props.children, u.mode, p, c.key)).return = u), (u = l))
                            : (((p = mf(c.type, c.key, c.props, null, u.mode, p)).ref = es(u, l, c)),
                              (p.return = u),
                              (u = p));
                    }
                    return a(u);
                case ot:
                    e: {
                        for (y = c.key; null !== l; ) {
                            if (l.key === y) {
                                if (
                                    4 === l.tag &&
                                    l.stateNode.containerInfo === c.containerInfo &&
                                    l.stateNode.implementation === c.implementation
                                ) {
                                    (n(u, l.sibling), ((l = i(l, c.children || [])).return = u), (u = l));
                                    break e;
                                }
                                n(u, l);
                                break;
                            }
                            (t(u, l), (l = l.sibling));
                        }
                        (((l = Sf(c, u.mode, p)).return = u), (u = l));
                    }
                    return a(u);
                case vt:
                    return s(u, l, (y = c._init)(c._payload), p);
            }
            if (Vt(c))
                return (function (i, a, s, u) {
                    for (var l = null, c = null, p = a, v = (a = 0), y = null; null !== p && v < s.length; v++) {
                        p.index > v ? ((y = p), (p = null)) : (y = p.sibling);
                        var g = d(i, p, s[v], u);
                        if (null === g) {
                            null === p && (p = y);
                            break;
                        }
                        (e && p && null === g.alternate && t(i, p),
                            (a = o(g, a, v)),
                            null === c ? (l = g) : (c.sibling = g),
                            (c = g),
                            (p = y));
                    }
                    if (v === s.length) return (n(i, p), Ba && za(i, v), l);
                    if (null === p) {
                        for (; v < s.length; v++)
                            null !== (p = f(i, s[v], u)) &&
                                ((a = o(p, a, v)), null === c ? (l = p) : (c.sibling = p), (c = p));
                        return (Ba && za(i, v), l);
                    }
                    for (p = r(i, p); v < s.length; v++)
                        null !== (y = h(p, i, v, s[v], u)) &&
                            (e && null !== y.alternate && p.delete(null === y.key ? v : y.key),
                            (a = o(y, a, v)),
                            null === c ? (l = y) : (c.sibling = y),
                            (c = y));
                    return (
                        e &&
                            p.forEach(function (e) {
                                return t(i, e);
                            }),
                        Ba && za(i, v),
                        l
                    );
                })(u, l, c, p);
            if (mt(c))
                return (function (i, a, s, u) {
                    var l = mt(s);
                    if ('function' != typeof l) throw Error(Be(150));
                    if (null == (s = l.call(s))) throw Error(Be(151));
                    for (
                        var c = (l = null), p = a, v = (a = 0), y = null, g = s.next();
                        null !== p && !g.done;
                        v++, g = s.next()
                    ) {
                        p.index > v ? ((y = p), (p = null)) : (y = p.sibling);
                        var m = d(i, p, g.value, u);
                        if (null === m) {
                            null === p && (p = y);
                            break;
                        }
                        (e && p && null === m.alternate && t(i, p),
                            (a = o(m, a, v)),
                            null === c ? (l = m) : (c.sibling = m),
                            (c = m),
                            (p = y));
                    }
                    if (g.done) return (n(i, p), Ba && za(i, v), l);
                    if (null === p) {
                        for (; !g.done; v++, g = s.next())
                            null !== (g = f(i, g.value, u)) &&
                                ((a = o(g, a, v)), null === c ? (l = g) : (c.sibling = g), (c = g));
                        return (Ba && za(i, v), l);
                    }
                    for (p = r(i, p); !g.done; v++, g = s.next())
                        null !== (g = h(p, i, v, g.value, u)) &&
                            (e && null !== g.alternate && p.delete(null === g.key ? v : g.key),
                            (a = o(g, a, v)),
                            null === c ? (l = g) : (c.sibling = g),
                            (c = g));
                    return (
                        e &&
                            p.forEach(function (e) {
                                return t(i, e);
                            }),
                        Ba && za(i, v),
                        l
                    );
                })(u, l, c, p);
            ts(u, c);
        }
        return ('string' == typeof c && '' !== c) || 'number' == typeof c
            ? ((c = '' + c),
              null !== l && 6 === l.tag
                  ? (n(u, l.sibling), ((l = i(l, c)).return = u), (u = l))
                  : (n(u, l), ((l = wf(c, u.mode, p)).return = u), (u = l)),
              a(u))
            : n(u, l);
    };
}
var is = rs(!0),
    os = rs(!1),
    as = ua(null),
    ss = null,
    us = null,
    ls = null;
function cs() {
    ls = us = ss = null;
}
function fs(e) {
    var t = as.current;
    (la(as), (e._currentValue = t));
}
function ds(e, t, n) {
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
function hs(e, t) {
    ((ss = e),
        (ls = us = null),
        null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (nl = !0), (e.firstContext = null)));
}
function ps(e) {
    var t = e._currentValue;
    if (ls !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), null === us)) {
            if (null === ss) throw Error(Be(308));
            ((us = e), (ss.dependencies = { lanes: 0, firstContext: e }));
        } else us = us.next = e;
    return t;
}
var vs = null;
function ys(e) {
    null === vs ? (vs = [e]) : vs.push(e);
}
function gs(e, t, n, r) {
    var i = t.interleaved;
    return (null === i ? ((n.next = n), ys(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), ms(e, r));
}
function ms(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        ((e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return));
    return 3 === n.tag ? n.stateNode : null;
}
var bs = !1;
function _s(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function ws(e, t) {
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
function Ss(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ks(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 0 != (2 & fc))) {
        var i = r.pending;
        return (null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), ms(e, n));
    }
    return (
        null === (i = r.interleaved) ? ((t.next = t), ys(r)) : ((t.next = i.next), (i.next = t)),
        (r.interleaved = t),
        ms(e, n)
    );
}
function xs(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), nr(e, n));
    }
}
function Os(e, t) {
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
function Es(e, t, n, r) {
    var i = e.updateQueue;
    bs = !1;
    var o = i.firstBaseUpdate,
        a = i.lastBaseUpdate,
        s = i.shared.pending;
    if (null !== s) {
        i.shared.pending = null;
        var u = s,
            l = u.next;
        ((u.next = null), null === a ? (o = l) : (a.next = l), (a = u));
        var c = e.alternate;
        null !== c &&
            (s = (c = c.updateQueue).lastBaseUpdate) !== a &&
            (null === s ? (c.firstBaseUpdate = l) : (s.next = l), (c.lastBaseUpdate = u));
    }
    if (null !== o) {
        var f = i.baseState;
        for (a = 0, c = l = u = null, s = o; ; ) {
            var d = s.lane,
                h = s.eventTime;
            if ((r & d) === d) {
                null !== c &&
                    (c = c.next =
                        { eventTime: h, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
                e: {
                    var p = e,
                        v = s;
                    switch (((d = t), (h = n), v.tag)) {
                        case 1:
                            if ('function' == typeof (p = v.payload)) {
                                f = p.call(h, f, d);
                                break e;
                            }
                            f = p;
                            break e;
                        case 3:
                            p.flags = (-65537 & p.flags) | 128;
                        case 0:
                            if (null == (d = 'function' == typeof (p = v.payload) ? p.call(h, f, d) : p)) break e;
                            f = _t({}, f, d);
                            break e;
                        case 2:
                            bs = !0;
                    }
                }
                null !== s.callback &&
                    0 !== s.lane &&
                    ((e.flags |= 64), null === (d = i.effects) ? (i.effects = [s]) : d.push(s));
            } else
                ((h = { eventTime: h, lane: d, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
                    null === c ? ((l = c = h), (u = f)) : (c = c.next = h),
                    (a |= d));
            if (null === (s = s.next)) {
                if (null === (s = i.shared.pending)) break;
                ((s = (d = s).next), (d.next = null), (i.lastBaseUpdate = d), (i.shared.pending = null));
            }
        }
        if (
            (null === c && (u = f),
            (i.baseState = u),
            (i.firstBaseUpdate = l),
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
function Ps(e, t, n) {
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
var Cs = {},
    Ns = ua(Cs),
    js = ua(Cs),
    Ts = ua(Cs);
function As(e) {
    if (e === Cs) throw Error(Be(174));
    return e;
}
function Rs(e, t) {
    switch ((ca(Ts, t), ca(js, e), ca(Ns, Cs), (e = t.nodeType))) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ht(null, '');
            break;
        default:
            t = Ht((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
    }
    (la(Ns), ca(Ns, t));
}
function Ls() {
    (la(Ns), la(js), la(Ts));
}
function Is(e) {
    As(Ts.current);
    var t = As(Ns.current),
        n = Ht(t, e.type);
    t !== n && (ca(js, e), ca(Ns, n));
}
function zs(e) {
    js.current === e && (la(Ns), la(js));
}
var Ds = ua(0);
function Vs(e) {
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
var Ms = [];
function Fs() {
    for (var e = 0; e < Ms.length; e++) Ms[e]._workInProgressVersionPrimary = null;
    Ms.length = 0;
}
var Us = rt.ReactCurrentDispatcher,
    Bs = rt.ReactCurrentBatchConfig,
    $s = 0,
    qs = null,
    Hs = null,
    Ws = null,
    Ks = !1,
    Qs = !1,
    Gs = 0,
    Xs = 0;
function Ys() {
    throw Error(Be(321));
}
function Js(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!qi(e[n], t[n])) return !1;
    return !0;
}
function Zs(e, t, n, r, i, o) {
    if (
        (($s = o),
        (qs = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Us.current = null === e || null === e.memoizedState ? zu : Du),
        (e = n(r, i)),
        Qs)
    ) {
        o = 0;
        do {
            if (((Qs = !1), (Gs = 0), 25 <= o)) throw Error(Be(301));
            ((o += 1), (Ws = Hs = null), (t.updateQueue = null), (Us.current = Vu), (e = n(r, i)));
        } while (Qs);
    }
    if (((Us.current = Iu), (t = null !== Hs && null !== Hs.next), ($s = 0), (Ws = Hs = qs = null), (Ks = !1), t))
        throw Error(Be(300));
    return e;
}
function eu() {
    var e = 0 !== Gs;
    return ((Gs = 0), e);
}
function tu() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (null === Ws ? (qs.memoizedState = Ws = e) : (Ws = Ws.next = e), Ws);
}
function nu() {
    if (null === Hs) {
        var e = qs.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = Hs.next;
    var t = null === Ws ? qs.memoizedState : Ws.next;
    if (null !== t) ((Ws = t), (Hs = e));
    else {
        if (null === e) throw Error(Be(310));
        ((e = {
            memoizedState: (Hs = e).memoizedState,
            baseState: Hs.baseState,
            baseQueue: Hs.baseQueue,
            queue: Hs.queue,
            next: null,
        }),
            null === Ws ? (qs.memoizedState = Ws = e) : (Ws = Ws.next = e));
    }
    return Ws;
}
function ru(e, t) {
    return 'function' == typeof t ? t(e) : t;
}
function iu(e) {
    var t = nu(),
        n = t.queue;
    if (null === n) throw Error(Be(311));
    n.lastRenderedReducer = e;
    var r = Hs,
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
        var s = (a = null),
            u = null,
            l = o;
        do {
            var c = l.lane;
            if (($s & c) === c)
                (null !== u &&
                    (u = u.next =
                        {
                            lane: 0,
                            action: l.action,
                            hasEagerState: l.hasEagerState,
                            eagerState: l.eagerState,
                            next: null,
                        }),
                    (r = l.hasEagerState ? l.eagerState : e(r, l.action)));
            else {
                var f = {
                    lane: c,
                    action: l.action,
                    hasEagerState: l.hasEagerState,
                    eagerState: l.eagerState,
                    next: null,
                };
                (null === u ? ((s = u = f), (a = r)) : (u = u.next = f), (qs.lanes |= c), (bc |= c));
            }
            l = l.next;
        } while (null !== l && l !== o);
        (null === u ? (a = r) : (u.next = s),
            qi(r, t.memoizedState) || (nl = !0),
            (t.memoizedState = r),
            (t.baseState = a),
            (t.baseQueue = u),
            (n.lastRenderedState = r));
    }
    if (null !== (e = n.interleaved)) {
        i = e;
        do {
            ((o = i.lane), (qs.lanes |= o), (bc |= o), (i = i.next));
        } while (i !== e);
    } else null === i && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function ou(e) {
    var t = nu(),
        n = t.queue;
    if (null === n) throw Error(Be(311));
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
        (qi(o, t.memoizedState) || (nl = !0),
            (t.memoizedState = o),
            null === t.baseQueue && (t.baseState = o),
            (n.lastRenderedState = o));
    }
    return [o, r];
}
function au() {}
function su(e, t) {
    var n = qs,
        r = nu(),
        i = t(),
        o = !qi(r.memoizedState, i);
    if (
        (o && ((r.memoizedState = i), (nl = !0)),
        (r = r.queue),
        bu(cu.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (null !== Ws && 1 & Ws.memoizedState.tag))
    ) {
        if (((n.flags |= 2048), pu(9, lu.bind(null, n, r, i, t), void 0, null), null === dc)) throw Error(Be(349));
        0 != (30 & $s) || uu(n, t, i);
    }
    return i;
}
function uu(e, t, n) {
    ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = qs.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (qs.updateQueue = t), (t.stores = [e]))
            : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e));
}
function lu(e, t, n, r) {
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
        return !qi(e, n);
    } catch (r) {
        return !0;
    }
}
function du(e) {
    var t = ms(e, 1);
    null !== t && Mc(t, e, 1, -1);
}
function hu(e) {
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
        (e = e.dispatch = Tu.bind(null, qs, e)),
        [t.memoizedState, e]
    );
}
function pu(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = qs.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (qs.updateQueue = t), (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
    );
}
function vu() {
    return nu().memoizedState;
}
function yu(e, t, n, r) {
    var i = tu();
    ((qs.flags |= e), (i.memoizedState = pu(1 | t, n, void 0, void 0 === r ? null : r)));
}
function gu(e, t, n, r) {
    var i = nu();
    r = void 0 === r ? null : r;
    var o = void 0;
    if (null !== Hs) {
        var a = Hs.memoizedState;
        if (((o = a.destroy), null !== r && Js(r, a.deps))) return void (i.memoizedState = pu(t, n, o, r));
    }
    ((qs.flags |= e), (i.memoizedState = pu(1 | t, n, o, r)));
}
function mu(e, t) {
    return yu(8390656, 8, e, t);
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
    return ((n = null != n ? n.concat([e]) : null), gu(4, 4, Su.bind(null, t, e), n));
}
function xu() {}
function Ou(e, t) {
    var n = nu();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Js(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Eu(e, t) {
    var n = nu();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Js(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Pu(e, t, n) {
    return 0 == (21 & $s)
        ? (e.baseState && ((e.baseState = !1), (nl = !0)), (e.memoizedState = n))
        : (qi(n, t) || ((n = Zn()), (qs.lanes |= n), (bc |= n), (e.baseState = !0)), t);
}
function Cu(e, t) {
    var n = rr;
    ((rr = 0 !== n && 4 > n ? n : 4), e(!0));
    var r = Bs.transition;
    Bs.transition = {};
    try {
        (e(!1), t());
    } finally {
        ((rr = n), (Bs.transition = r));
    }
}
function Nu() {
    return nu().memoizedState;
}
function ju(e, t, n) {
    var r = Vc(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Au(e))) Ru(t, n);
    else if (null !== (n = gs(e, t, n, r))) {
        (Mc(n, e, r, Dc()), Lu(n, t, r));
    }
}
function Tu(e, t, n) {
    var r = Vc(e),
        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Au(e)) Ru(t, i);
    else {
        var o = e.alternate;
        if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer))
            try {
                var a = t.lastRenderedState,
                    s = o(a, n);
                if (((i.hasEagerState = !0), (i.eagerState = s), qi(s, a))) {
                    var u = t.interleaved;
                    return (
                        null === u ? ((i.next = i), ys(t)) : ((i.next = u.next), (u.next = i)),
                        void (t.interleaved = i)
                    );
                }
            } catch (l) {}
        null !== (n = gs(e, t, i, r)) && (Mc(n, e, r, (i = Dc())), Lu(n, t, r));
    }
}
function Au(e) {
    var t = e.alternate;
    return e === qs || (null !== t && t === qs);
}
function Ru(e, t) {
    Qs = Ks = !0;
    var n = e.pending;
    (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
}
function Lu(e, t, n) {
    if (0 != (4194240 & n)) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), nr(e, n));
    }
}
var Iu = {
        readContext: ps,
        useCallback: Ys,
        useContext: Ys,
        useEffect: Ys,
        useImperativeHandle: Ys,
        useInsertionEffect: Ys,
        useLayoutEffect: Ys,
        useMemo: Ys,
        useReducer: Ys,
        useRef: Ys,
        useState: Ys,
        useDebugValue: Ys,
        useDeferredValue: Ys,
        useTransition: Ys,
        useMutableSource: Ys,
        useSyncExternalStore: Ys,
        useId: Ys,
        unstable_isNewReconciler: !1,
    },
    zu = {
        readContext: ps,
        useCallback: function (e, t) {
            return ((tu().memoizedState = [e, void 0 === t ? null : t]), e);
        },
        useContext: ps,
        useEffect: mu,
        useImperativeHandle: function (e, t, n) {
            return ((n = null != n ? n.concat([e]) : null), yu(4194308, 4, Su.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
            return yu(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return yu(4, 2, e, t);
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
                (e = e.dispatch = ju.bind(null, qs, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            return ((e = { current: e }), (tu().memoizedState = e));
        },
        useState: hu,
        useDebugValue: xu,
        useDeferredValue: function (e) {
            return (tu().memoizedState = e);
        },
        useTransition: function () {
            var e = hu(!1),
                t = e[0];
            return ((e = Cu.bind(null, e[1])), (tu().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = qs,
                i = tu();
            if (Ba) {
                if (void 0 === n) throw Error(Be(407));
                n = n();
            } else {
                if (((n = t()), null === dc)) throw Error(Be(349));
                0 != (30 & $s) || uu(r, t, n);
            }
            i.memoizedState = n;
            var o = { value: n, getSnapshot: t };
            return (
                (i.queue = o),
                mu(cu.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                pu(9, lu.bind(null, r, o, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = tu(),
                t = dc.identifierPrefix;
            if (Ba) {
                var n = Ia;
                ((t = ':' + t + 'R' + (n = (La & ~(1 << (32 - qn(La) - 1))).toString(32) + n)),
                    0 < (n = Gs++) && (t += 'H' + n.toString(32)),
                    (t += ':'));
            } else t = ':' + t + 'r' + (n = Xs++).toString(32) + ':';
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Du = {
        readContext: ps,
        useCallback: Ou,
        useContext: ps,
        useEffect: bu,
        useImperativeHandle: ku,
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
            return Pu(nu(), Hs.memoizedState, e);
        },
        useTransition: function () {
            return [iu(ru)[0], nu().memoizedState];
        },
        useMutableSource: au,
        useSyncExternalStore: su,
        useId: Nu,
        unstable_isNewReconciler: !1,
    },
    Vu = {
        readContext: ps,
        useCallback: Ou,
        useContext: ps,
        useEffect: bu,
        useImperativeHandle: ku,
        useInsertionEffect: _u,
        useLayoutEffect: wu,
        useMemo: Eu,
        useReducer: ou,
        useRef: vu,
        useState: function () {
            return ou(ru);
        },
        useDebugValue: xu,
        useDeferredValue: function (e) {
            var t = nu();
            return null === Hs ? (t.memoizedState = e) : Pu(t, Hs.memoizedState, e);
        },
        useTransition: function () {
            return [ou(ru)[0], nu().memoizedState];
        },
        useMutableSource: au,
        useSyncExternalStore: su,
        useId: Nu,
        unstable_isNewReconciler: !1,
    };
function Mu(e, t) {
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
            i = Vc(e),
            o = Ss(r, i);
        ((o.payload = t), null != n && (o.callback = n), null !== (t = ks(e, o, i)) && (Mc(t, e, i, r), xs(t, e, i)));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Dc(),
            i = Vc(e),
            o = Ss(r, i);
        ((o.tag = 1),
            (o.payload = t),
            null != n && (o.callback = n),
            null !== (t = ks(e, o, i)) && (Mc(t, e, i, r), xs(t, e, i)));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Dc(),
            r = Vc(e),
            i = Ss(n, r);
        ((i.tag = 2), null != t && (i.callback = t), null !== (t = ks(e, i, r)) && (Mc(t, e, r, n), xs(t, e, r)));
    },
};
function Bu(e, t, n, r, i, o, a) {
    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, o, a)
        : !t.prototype || !t.prototype.isPureReactComponent || !Hi(n, r) || !Hi(i, o);
}
function $u(e, t, n) {
    var r = !1,
        i = fa,
        o = t.contextType;
    return (
        'object' == typeof o && null !== o
            ? (o = ps(o))
            : ((i = ya(t) ? pa : da.current), (o = (r = null != (r = t.contextTypes)) ? va(e, i) : fa)),
        (t = new t(n, o)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = Uu),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
    );
}
function qu(e, t, n, r) {
    ((e = t.state),
        'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Uu.enqueueReplaceState(t, t.state, null));
}
function Hu(e, t, n, r) {
    var i = e.stateNode;
    ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), _s(e));
    var o = t.contextType;
    ('object' == typeof o && null !== o ? (i.context = ps(o)) : ((o = ya(t) ? pa : da.current), (i.context = va(e, o))),
        (i.state = e.memoizedState),
        'function' == typeof (o = t.getDerivedStateFromProps) && (Fu(e, t, o, n), (i.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof i.getSnapshotBeforeUpdate ||
            ('function' != typeof i.UNSAFE_componentWillMount && 'function' != typeof i.componentWillMount) ||
            ((t = i.state),
            'function' == typeof i.componentWillMount && i.componentWillMount(),
            'function' == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(),
            t !== i.state && Uu.enqueueReplaceState(i, i.state, null),
            Es(e, n, i, r),
            (i.state = e.memoizedState)),
        'function' == typeof i.componentDidMount && (e.flags |= 4194308));
}
function Wu(e, t) {
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
function Ku(e, t, n) {
    return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null };
}
function Qu(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Gu = 'function' == typeof WeakMap ? WeakMap : Map;
function Xu(e, t, n) {
    (((n = Ss(-1, n)).tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
        (n.callback = function () {
            (Pc || ((Pc = !0), (Cc = r)), Qu(0, t));
        }),
        n
    );
}
function Yu(e, t, n) {
    (n = Ss(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ('function' == typeof r) {
        var i = t.value;
        ((n.payload = function () {
            return r(i);
        }),
            (n.callback = function () {
                Qu(0, t);
            }));
    }
    var o = e.stateNode;
    return (
        null !== o &&
            'function' == typeof o.componentDidCatch &&
            (n.callback = function () {
                (Qu(0, t), 'function' != typeof r && (null === Nc ? (Nc = new Set([this])) : Nc.add(this)));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
            }),
        n
    );
}
function Ju(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new Gu();
        var i = new Set();
        r.set(t, i);
    } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = lf.bind(null, e, t, n)), t.then(e, e));
}
function Zu(e) {
    do {
        var t;
        if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e;
        e = e.return;
    } while (null !== e);
    return null;
}
function el(e, t, n, r, i) {
    return 0 == (1 & e.mode)
        ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                1 === n.tag && (null === n.alternate ? (n.tag = 17) : (((t = Ss(-1, 1)).tag = 2), ks(n, t, 1))),
                (n.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = i), e);
}
var tl = rt.ReactCurrentOwner,
    nl = !1;
function rl(e, t, n, r) {
    t.child = null === e ? os(t, null, n, r) : is(t, e.child, n, r);
}
function il(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return (
        hs(t, i),
        (r = Zs(e, t, n, r, o, i)),
        (n = eu()),
        null === e || nl
            ? (Ba && n && Va(t), (t.flags |= 1), rl(e, t, r, i), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Pl(e, t, i))
    );
}
function ol(e, t, n, r, i) {
    if (null === e) {
        var o = n.type;
        return 'function' != typeof o ||
            yf(o) ||
            void 0 !== o.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = mf(n.type, null, r, t, t.mode, i)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = o), al(e, t, o, r, i));
    }
    if (((o = e.child), 0 == (e.lanes & i))) {
        var a = o.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : Hi)(a, r) && e.ref === t.ref) return Pl(e, t, i);
    }
    return ((t.flags |= 1), ((e = gf(o, r)).ref = t.ref), (e.return = t), (t.child = e));
}
function al(e, t, n, r, i) {
    if (null !== e) {
        var o = e.memoizedProps;
        if (Hi(o, r) && e.ref === t.ref) {
            if (((nl = !1), (t.pendingProps = r = o), 0 == (e.lanes & i))) return ((t.lanes = e.lanes), Pl(e, t, i));
            0 != (131072 & e.flags) && (nl = !0);
        }
    }
    return ll(e, t, n, r, i);
}
function sl(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = null !== e ? e.memoizedState : null;
    if ('hidden' === r.mode)
        if (0 == (1 & t.mode))
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ca(yc, vc), (vc |= n));
        else {
            if (0 == (1073741824 & n))
                return (
                    (e = null !== o ? o.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    ca(yc, vc),
                    (vc |= e),
                    null
                );
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== o ? o.baseLanes : n),
                ca(yc, vc),
                (vc |= r));
        }
    else (null !== o ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), ca(yc, vc), (vc |= r));
    return (rl(e, t, i, n), t.child);
}
function ul(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function ll(e, t, n, r, i) {
    var o = ya(n) ? pa : da.current;
    return (
        (o = va(t, o)),
        hs(t, i),
        (n = Zs(e, t, n, r, o, i)),
        (r = eu()),
        null === e || nl
            ? (Ba && r && Va(t), (t.flags |= 1), rl(e, t, n, i), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Pl(e, t, i))
    );
}
function cl(e, t, n, r, i) {
    if (ya(n)) {
        var o = !0;
        _a(t);
    } else o = !1;
    if ((hs(t, i), null === t.stateNode)) (El(e, t), $u(t, n, r), Hu(t, n, r, i), (r = !0));
    else if (null === e) {
        var a = t.stateNode,
            s = t.memoizedProps;
        a.props = s;
        var u = a.context,
            l = n.contextType;
        'object' == typeof l && null !== l ? (l = ps(l)) : (l = va(t, (l = ya(n) ? pa : da.current)));
        var c = n.getDerivedStateFromProps,
            f = 'function' == typeof c || 'function' == typeof a.getSnapshotBeforeUpdate;
        (f ||
            ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
                'function' != typeof a.componentWillReceiveProps) ||
            ((s !== r || u !== l) && qu(t, a, r, l)),
            (bs = !1));
        var d = t.memoizedState;
        ((a.state = d),
            Es(t, r, a, i),
            (u = t.memoizedState),
            s !== r || d !== u || ha.current || bs
                ? ('function' == typeof c && (Fu(t, n, c, r), (u = t.memoizedState)),
                  (s = bs || Bu(t, n, s, r, d, u, l))
                      ? (f ||
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
                  (a.context = l),
                  (r = s))
                : ('function' == typeof a.componentDidMount && (t.flags |= 4194308), (r = !1)));
    } else {
        ((a = t.stateNode),
            ws(e, t),
            (s = t.memoizedProps),
            (l = t.type === t.elementType ? s : Mu(t.type, s)),
            (a.props = l),
            (f = t.pendingProps),
            (d = a.context),
            'object' == typeof (u = n.contextType) && null !== u
                ? (u = ps(u))
                : (u = va(t, (u = ya(n) ? pa : da.current))));
        var h = n.getDerivedStateFromProps;
        ((c = 'function' == typeof h || 'function' == typeof a.getSnapshotBeforeUpdate) ||
            ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
                'function' != typeof a.componentWillReceiveProps) ||
            ((s !== f || d !== u) && qu(t, a, r, u)),
            (bs = !1),
            (d = t.memoizedState),
            (a.state = d),
            Es(t, r, a, i));
        var p = t.memoizedState;
        s !== f || d !== p || ha.current || bs
            ? ('function' == typeof h && (Fu(t, n, h, r), (p = t.memoizedState)),
              (l = bs || Bu(t, n, l, r, d, p, u) || !1)
                  ? (c ||
                        ('function' != typeof a.UNSAFE_componentWillUpdate &&
                            'function' != typeof a.componentWillUpdate) ||
                        ('function' == typeof a.componentWillUpdate && a.componentWillUpdate(r, p, u),
                        'function' == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, p, u)),
                    'function' == typeof a.componentDidUpdate && (t.flags |= 4),
                    'function' == typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ('function' != typeof a.componentDidUpdate ||
                        (s === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 4),
                    'function' != typeof a.getSnapshotBeforeUpdate ||
                        (s === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
              (a.props = r),
              (a.state = p),
              (a.context = u),
              (r = l))
            : ('function' != typeof a.componentDidUpdate ||
                  (s === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
              'function' != typeof a.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return fl(e, t, n, r, o, i);
}
function fl(e, t, n, r, i, o) {
    ul(e, t);
    var a = 0 != (128 & t.flags);
    if (!r && !a) return (i && wa(t, n, !1), Pl(e, t, o));
    ((r = t.stateNode), (tl.current = t));
    var s = a && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
    return (
        (t.flags |= 1),
        null !== e && a ? ((t.child = is(t, e.child, null, o)), (t.child = is(t, null, s, o))) : rl(e, t, s, o),
        (t.memoizedState = r.state),
        i && wa(t, n, !0),
        t.child
    );
}
function dl(e) {
    var t = e.stateNode;
    (t.pendingContext ? ma(0, t.pendingContext, t.pendingContext !== t.context) : t.context && ma(0, t.context, !1),
        Rs(e, t.containerInfo));
}
function hl(e, t, n, r, i) {
    return (Ya(), Ja(i), (t.flags |= 256), rl(e, t, n, r), t.child);
}
var pl,
    vl,
    yl,
    gl,
    ml = { dehydrated: null, treeContext: null, retryLane: 0 };
function bl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function _l(e, t, n) {
    var r,
        i = t.pendingProps,
        o = Ds.current,
        a = !1,
        s = 0 != (128 & t.flags);
    if (
        ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)),
        r ? ((a = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (o |= 1),
        ca(Ds, 1 & o),
        null === e)
    )
        return (
            Ka(t),
            null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 == (1 & t.mode) ? (t.lanes = 1) : '$!' === e.data ? (t.lanes = 8) : (t.lanes = 1073741824), null)
                : ((s = i.children),
                  (e = i.fallback),
                  a
                      ? ((i = t.mode),
                        (a = t.child),
                        (s = { mode: 'hidden', children: s }),
                        0 == (1 & i) && null !== a
                            ? ((a.childLanes = 0), (a.pendingProps = s))
                            : (a = _f(s, i, 0, null)),
                        (e = bf(e, i, n, null)),
                        (a.return = t),
                        (e.return = t),
                        (a.sibling = e),
                        (t.child = a),
                        (t.child.memoizedState = bl(n)),
                        (t.memoizedState = ml),
                        e)
                      : wl(t, s))
        );
    if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
        return (function (e, t, n, r, i, o, a) {
            if (n)
                return 256 & t.flags
                    ? ((t.flags &= -257), Sl(e, t, a, (r = Ku(Error(Be(422))))))
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
                        0 != (1 & t.mode) && is(t, e.child, null, a),
                        (t.child.memoizedState = bl(a)),
                        (t.memoizedState = ml),
                        o);
            if (0 == (1 & t.mode)) return Sl(e, t, a, null);
            if ('$!' === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset)) var s = r.dgst;
                return ((r = s), Sl(e, t, a, (r = Ku((o = Error(Be(419))), r, void 0))));
            }
            if (((s = 0 != (a & e.childLanes)), nl || s)) {
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
                        ((o.retryLane = i), ms(e, i), Mc(r, e, i, -1));
                }
                return (Jc(), Sl(e, t, a, (r = Ku(Error(Be(421))))));
            }
            return '$?' === i.data
                ? ((t.flags |= 128), (t.child = e.child), (t = ff.bind(null, e)), (i._reactRetry = t), null)
                : ((e = o.treeContext),
                  (Ua = Ko(i.nextSibling)),
                  (Fa = t),
                  (Ba = !0),
                  ($a = null),
                  null !== e &&
                      ((Ta[Aa++] = La), (Ta[Aa++] = Ia), (Ta[Aa++] = Ra), (La = e.id), (Ia = e.overflow), (Ra = t)),
                  (t = wl(t, r.children)),
                  (t.flags |= 4096),
                  t);
        })(e, t, s, i, r, o, n);
    if (a) {
        ((a = i.fallback), (s = t.mode), (r = (o = e.child).sibling));
        var u = { mode: 'hidden', children: i.children };
        return (
            0 == (1 & s) && t.child !== o
                ? (((i = t.child).childLanes = 0), (i.pendingProps = u), (t.deletions = null))
                : ((i = gf(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
            null !== r ? (a = gf(r, a)) : ((a = bf(a, s, n, null)).flags |= 2),
            (a.return = t),
            (i.return = t),
            (i.sibling = a),
            (t.child = i),
            (i = a),
            (a = t.child),
            (s =
                null === (s = e.child.memoizedState)
                    ? bl(n)
                    : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
            (a.memoizedState = s),
            (a.childLanes = e.childLanes & ~n),
            (t.memoizedState = ml),
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
function wl(e, t) {
    return (((t = _f({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t));
}
function Sl(e, t, n, r) {
    return (
        null !== r && Ja(r),
        is(t, e.child, null, n),
        ((e = wl(t, t.pendingProps.children)).flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function kl(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (null !== r && (r.lanes |= t), ds(e.return, t, n));
}
function xl(e, t, n, r, i) {
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
function Ol(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if ((rl(e, t, r.children, n), 0 != (2 & (r = Ds.current)))) ((r = (1 & r) | 2), (t.flags |= 128));
    else {
        if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && kl(e, n, t);
                else if (19 === e.tag) kl(e, n, t);
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
    if ((ca(Ds, r), 0 == (1 & t.mode))) t.memoizedState = null;
    else
        switch (i) {
            case 'forwards':
                for (n = t.child, i = null; null !== n; )
                    (null !== (e = n.alternate) && null === Vs(e) && (i = n), (n = n.sibling));
                (null === (n = i) ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
                    xl(t, !1, i, n, o));
                break;
            case 'backwards':
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                    if (null !== (e = i.alternate) && null === Vs(e)) {
                        t.child = i;
                        break;
                    }
                    ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
                }
                xl(t, !0, n, null, o);
                break;
            case 'together':
                xl(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function El(e, t) {
    0 == (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Pl(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (bc |= t.lanes), 0 == (n & t.childLanes))) return null;
    if (null !== e && t.child !== e.child) throw Error(Be(153));
    if (null !== t.child) {
        for (n = gf((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            ((e = e.sibling), ((n = n.sibling = gf(e, e.pendingProps)).return = t));
        n.sibling = null;
    }
    return t.child;
}
function Cl(e, t) {
    if (!Ba)
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
function Nl(e) {
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
function jl(e, t, n) {
    var r = t.pendingProps;
    switch ((Ma(t), t.tag)) {
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
            return (Nl(t), null);
        case 1:
        case 17:
            return (ya(t.type) && ga(), Nl(t), null);
        case 3:
            return (
                (r = t.stateNode),
                Ls(),
                la(ha),
                la(da),
                Fs(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                    (Ga(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                          ((t.flags |= 1024), null !== $a && ($c($a), ($a = null)))),
                vl(e, t),
                Nl(t),
                null
            );
        case 5:
            zs(t);
            var i = As(Ts.current);
            if (((n = t.type), null !== e && null != t.stateNode))
                (yl(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(Be(166));
                    return (Nl(t), null);
                }
                if (((e = As(Ns.current)), Ga(t))) {
                    ((r = t.stateNode), (n = t.type));
                    var o = t.memoizedProps;
                    switch (((r[Xo] = t), (r[Yo] = o), (e = 0 != (1 & t.mode)), n)) {
                        case 'dialog':
                            (ko('cancel', r), ko('close', r));
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            ko('load', r);
                            break;
                        case 'video':
                        case 'audio':
                            for (i = 0; i < bo.length; i++) ko(bo[i], r);
                            break;
                        case 'source':
                            ko('error', r);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            (ko('error', r), ko('load', r));
                            break;
                        case 'details':
                            ko('toggle', r);
                            break;
                        case 'input':
                            (Rt(r, o), ko('invalid', r));
                            break;
                        case 'select':
                            ((r._wrapperState = { wasMultiple: !!o.multiple }), ko('invalid', r));
                            break;
                        case 'textarea':
                            (Ut(r, o), ko('invalid', r));
                    }
                    for (var a in (tn(n, o), (i = null), o))
                        if (o.hasOwnProperty(a)) {
                            var s = o[a];
                            'children' === a
                                ? 'string' == typeof s
                                    ? r.textContent !== s &&
                                      (!0 !== o.suppressHydrationWarning && zo(r.textContent, s, e),
                                      (i = ['children', s]))
                                    : 'number' == typeof s &&
                                      r.textContent !== '' + s &&
                                      (!0 !== o.suppressHydrationWarning && zo(r.textContent, s, e),
                                      (i = ['children', '' + s]))
                                : qe.hasOwnProperty(a) && null != s && 'onScroll' === a && ko('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            (Nt(r), zt(r, o, !0));
                            break;
                        case 'textarea':
                            (Nt(r), $t(r));
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            'function' == typeof o.onClick && (r.onclick = Do);
                    }
                    ((r = i), (t.updateQueue = r), null !== r && (t.flags |= 4));
                } else {
                    ((a = 9 === i.nodeType ? i : i.ownerDocument),
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
                        (e[Xo] = t),
                        (e[Yo] = r),
                        pl(e, t, !1, !1),
                        (t.stateNode = e));
                    e: {
                        switch (((a = nn(n, r)), n)) {
                            case 'dialog':
                                (ko('cancel', e), ko('close', e), (i = r));
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                (ko('load', e), (i = r));
                                break;
                            case 'video':
                            case 'audio':
                                for (i = 0; i < bo.length; i++) ko(bo[i], e);
                                i = r;
                                break;
                            case 'source':
                                (ko('error', e), (i = r));
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                (ko('error', e), ko('load', e), (i = r));
                                break;
                            case 'details':
                                (ko('toggle', e), (i = r));
                                break;
                            case 'input':
                                (Rt(e, r), (i = At(e, r)), ko('invalid', e));
                                break;
                            case 'option':
                            default:
                                i = r;
                                break;
                            case 'select':
                                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (i = _t({}, r, { value: void 0 })),
                                    ko('invalid', e));
                                break;
                            case 'textarea':
                                (Ut(e, r), (i = Ft(e, r)), ko('invalid', e));
                        }
                        for (o in (tn(n, i), (s = i)))
                            if (s.hasOwnProperty(o)) {
                                var u = s[o];
                                'style' === o
                                    ? Zt(e, u)
                                    : 'dangerouslySetInnerHTML' === o
                                      ? null != (u = u ? u.__html : void 0) && Qt(e, u)
                                      : 'children' === o
                                        ? 'string' == typeof u
                                            ? ('textarea' !== n || '' !== u) && Gt(e, u)
                                            : 'number' == typeof u && Gt(e, '' + u)
                                        : 'suppressContentEditableWarning' !== o &&
                                          'suppressHydrationWarning' !== o &&
                                          'autoFocus' !== o &&
                                          (qe.hasOwnProperty(o)
                                              ? null != u && 'onScroll' === o && ko('scroll', e)
                                              : null != u && nt(e, o, u, a));
                            }
                        switch (n) {
                            case 'input':
                                (Nt(e), zt(e, r, !1));
                                break;
                            case 'textarea':
                                (Nt(e), $t(e));
                                break;
                            case 'option':
                                null != r.value && e.setAttribute('value', '' + Pt(r.value));
                                break;
                            case 'select':
                                ((e.multiple = !!r.multiple),
                                    null != (o = r.value)
                                        ? Mt(e, !!r.multiple, o, !1)
                                        : null != r.defaultValue && Mt(e, !!r.multiple, r.defaultValue, !0));
                                break;
                            default:
                                'function' == typeof i.onClick && (e.onclick = Do);
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
            return (Nl(t), null);
        case 6:
            if (e && null != t.stateNode) gl(e, t, e.memoizedProps, r);
            else {
                if ('string' != typeof r && null === t.stateNode) throw Error(Be(166));
                if (((n = As(Ts.current)), As(Ns.current), Ga(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Xo] = t),
                        (o = r.nodeValue !== n) && null !== (e = Fa))
                    )
                        switch (e.tag) {
                            case 3:
                                zo(r.nodeValue, n, 0 != (1 & e.mode));
                                break;
                            case 5:
                                !0 !== e.memoizedProps.suppressHydrationWarning &&
                                    zo(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                    o && (t.flags |= 4);
                } else (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Xo] = t), (t.stateNode = r));
            }
            return (Nl(t), null);
        case 13:
            if (
                (la(Ds),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (Ba && null !== Ua && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                    (Xa(), Ya(), (t.flags |= 98560), (o = !1));
                else if (((o = Ga(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!o) throw Error(Be(318));
                        if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null)) throw Error(Be(317));
                        o[Xo] = t;
                    } else (Ya(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                    (Nl(t), (o = !1));
                } else (null !== $a && ($c($a), ($a = null)), (o = !0));
                if (!o) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) && (null === e || 0 != (1 & Ds.current) ? 0 === gc && (gc = 3) : Jc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Nl(t),
                  null);
        case 4:
            return (Ls(), vl(e, t), null === e && Eo(t.stateNode.containerInfo), Nl(t), null);
        case 10:
            return (fs(t.type._context), Nl(t), null);
        case 19:
            if ((la(Ds), null === (o = t.memoizedState))) return (Nl(t), null);
            if (((r = 0 != (128 & t.flags)), null === (a = o.rendering)))
                if (r) Cl(o, !1);
                else {
                    if (0 !== gc || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (a = Vs(e))) {
                                for (
                                    t.flags |= 128,
                                        Cl(o, !1),
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
                                return (ca(Ds, (1 & Ds.current) | 2), t.child);
                            }
                            e = e.sibling;
                        }
                    null !== o.tail && In() > Oc && ((t.flags |= 128), (r = !0), Cl(o, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = Vs(a))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            Cl(o, !0),
                            null === o.tail && 'hidden' === o.tailMode && !a.alternate && !Ba)
                        )
                            return (Nl(t), null);
                    } else
                        2 * In() - o.renderingStartTime > Oc &&
                            1073741824 !== n &&
                            ((t.flags |= 128), (r = !0), Cl(o, !1), (t.lanes = 4194304));
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
                  (n = Ds.current),
                  ca(Ds, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Nl(t), null);
        case 22:
        case 23:
            return (
                Qc(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 != (1 & t.mode)
                    ? 0 != (1073741824 & vc) && (Nl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                    : Nl(t),
                null
            );
        case 24:
        case 25:
            return null;
    }
    throw Error(Be(156, t.tag));
}
function Tl(e, t) {
    switch ((Ma(t), t.tag)) {
        case 1:
            return (ya(t.type) && ga(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null);
        case 3:
            return (
                Ls(),
                la(ha),
                la(da),
                Fs(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 5:
            return (zs(t), null);
        case 13:
            if ((la(Ds), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(Be(340));
                Ya();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return (la(Ds), null);
        case 4:
            return (Ls(), null);
        case 10:
            return (fs(t.type._context), null);
        case 22:
        case 23:
            return (Qc(), null);
        default:
            return null;
    }
}
((pl = function (e, t) {
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
    (vl = function () {}),
    (yl = function (e, t, n, r) {
        var i = e.memoizedProps;
        if (i !== r) {
            ((e = t.stateNode), As(Ns.current));
            var o,
                a = null;
            switch (n) {
                case 'input':
                    ((i = At(e, i)), (r = At(e, r)), (a = []));
                    break;
                case 'select':
                    ((i = _t({}, i, { value: void 0 })), (r = _t({}, r, { value: void 0 })), (a = []));
                    break;
                case 'textarea':
                    ((i = Ft(e, i)), (r = Ft(e, r)), (a = []));
                    break;
                default:
                    'function' != typeof i.onClick && 'function' == typeof r.onClick && (e.onclick = Do);
            }
            for (l in (tn(n, r), (n = null), i))
                if (!r.hasOwnProperty(l) && i.hasOwnProperty(l) && null != i[l])
                    if ('style' === l) {
                        var s = i[l];
                        for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
                    } else
                        'dangerouslySetInnerHTML' !== l &&
                            'children' !== l &&
                            'suppressContentEditableWarning' !== l &&
                            'suppressHydrationWarning' !== l &&
                            'autoFocus' !== l &&
                            (qe.hasOwnProperty(l) ? a || (a = []) : (a = a || []).push(l, null));
            for (l in r) {
                var u = r[l];
                if (((s = null != i ? i[l] : void 0), r.hasOwnProperty(l) && u !== s && (null != u || null != s)))
                    if ('style' === l)
                        if (s) {
                            for (o in s)
                                !s.hasOwnProperty(o) || (u && u.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ''));
                            for (o in u) u.hasOwnProperty(o) && s[o] !== u[o] && (n || (n = {}), (n[o] = u[o]));
                        } else (n || (a || (a = []), a.push(l, n)), (n = u));
                    else
                        'dangerouslySetInnerHTML' === l
                            ? ((u = u ? u.__html : void 0),
                              (s = s ? s.__html : void 0),
                              null != u && s !== u && (a = a || []).push(l, u))
                            : 'children' === l
                              ? ('string' != typeof u && 'number' != typeof u) || (a = a || []).push(l, '' + u)
                              : 'suppressContentEditableWarning' !== l &&
                                'suppressHydrationWarning' !== l &&
                                (qe.hasOwnProperty(l)
                                    ? (null != u && 'onScroll' === l && ko('scroll', e), a || s === u || (a = []))
                                    : (a = a || []).push(l, u));
            }
            n && (a = a || []).push('style', n);
            var l = a;
            (t.updateQueue = l) && (t.flags |= 4);
        }
    }),
    (gl = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
    }));
var Al = !1,
    Rl = !1,
    Ll = 'function' == typeof WeakSet ? WeakSet : Set,
    Il = null;
function zl(e, t) {
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
function Dl(e, t, n) {
    try {
        n();
    } catch (r) {
        uf(e, t, r);
    }
}
var Vl = !1;
function Ml(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var i = (r = r.next);
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                ((i.destroy = void 0), void 0 !== o && Dl(t, n, o));
            }
            i = i.next;
        } while (i !== r);
    }
}
function Fl(e, t) {
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
function Ul(e) {
    var t = e.ref;
    if (null !== t) {
        var n = e.stateNode;
        (e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e));
    }
}
function Bl(e) {
    var t = e.alternate;
    (null !== t && ((e.alternate = null), Bl(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[Xo], delete t[Yo], delete t[Zo], delete t[ea], delete t[ta]),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
}
function $l(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function ql(e) {
    e: for (;;) {
        for (; null === e.sibling; ) {
            if (null === e.return || $l(e.return)) return null;
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
function Hl(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
        ((e = e.stateNode),
            t
                ? 8 === n.nodeType
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Do)));
    else if (4 !== r && null !== (e = e.child))
        for (Hl(e, t, n), e = e.sibling; null !== e; ) (Hl(e, t, n), (e = e.sibling));
}
function Wl(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (4 !== r && null !== (e = e.child))
        for (Wl(e, t, n), e = e.sibling; null !== e; ) (Wl(e, t, n), (e = e.sibling));
}
var Kl = null,
    Ql = !1;
function Gl(e, t, n) {
    for (n = n.child; null !== n; ) (Xl(e, t, n), (n = n.sibling));
}
function Xl(e, t, n) {
    if ($n && 'function' == typeof $n.onCommitFiberUnmount)
        try {
            $n.onCommitFiberUnmount(Bn, n);
        } catch (s) {}
    switch (n.tag) {
        case 5:
            Rl || zl(n, t);
        case 6:
            var r = Kl,
                i = Ql;
            ((Kl = null),
                Gl(e, t, n),
                (Ql = i),
                null !== (Kl = r) &&
                    (Ql
                        ? ((e = Kl),
                          (n = n.stateNode),
                          8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : Kl.removeChild(n.stateNode)));
            break;
        case 18:
            null !== Kl &&
                (Ql
                    ? ((e = Kl),
                      (n = n.stateNode),
                      8 === e.nodeType ? Wo(e.parentNode, n) : 1 === e.nodeType && Wo(e, n),
                      Er(e))
                    : Wo(Kl, n.stateNode));
            break;
        case 4:
            ((r = Kl), (i = Ql), (Kl = n.stateNode.containerInfo), (Ql = !0), Gl(e, t, n), (Kl = r), (Ql = i));
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Rl && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                i = r = r.next;
                do {
                    var o = i,
                        a = o.destroy;
                    ((o = o.tag), void 0 !== a && (0 != (2 & o) || 0 != (4 & o)) && Dl(n, t, a), (i = i.next));
                } while (i !== r);
            }
            Gl(e, t, n);
            break;
        case 1:
            if (!Rl && (zl(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount))
                try {
                    ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
                } catch (s) {
                    uf(n, t, s);
                }
            Gl(e, t, n);
            break;
        case 21:
            Gl(e, t, n);
            break;
        case 22:
            1 & n.mode ? ((Rl = (r = Rl) || null !== n.memoizedState), Gl(e, t, n), (Rl = r)) : Gl(e, t, n);
            break;
        default:
            Gl(e, t, n);
    }
}
function Yl(e) {
    var t = e.updateQueue;
    if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        (null === n && (n = e.stateNode = new Ll()),
            t.forEach(function (t) {
                var r = df.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
            }));
    }
}
function Jl(e, t) {
    var n = t.deletions;
    if (null !== n)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e,
                    a = t,
                    s = a;
                e: for (; null !== s; ) {
                    switch (s.tag) {
                        case 5:
                            ((Kl = s.stateNode), (Ql = !1));
                            break e;
                        case 3:
                        case 4:
                            ((Kl = s.stateNode.containerInfo), (Ql = !0));
                            break e;
                    }
                    s = s.return;
                }
                if (null === Kl) throw Error(Be(160));
                (Xl(o, a, i), (Kl = null), (Ql = !1));
                var u = i.alternate;
                (null !== u && (u.return = null), (i.return = null));
            } catch (l) {
                uf(i, t, l);
            }
        }
    if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) (Zl(t, e), (t = t.sibling));
}
function Zl(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Jl(t, e), ec(e), 4 & r)) {
                try {
                    (Ml(3, e, e.return), Fl(3, e));
                } catch (v) {
                    uf(e, e.return, v);
                }
                try {
                    Ml(5, e, e.return);
                } catch (v) {
                    uf(e, e.return, v);
                }
            }
            break;
        case 1:
            (Jl(t, e), ec(e), 512 & r && null !== n && zl(n, n.return));
            break;
        case 5:
            if ((Jl(t, e), ec(e), 512 & r && null !== n && zl(n, n.return), 32 & e.flags)) {
                var i = e.stateNode;
                try {
                    Gt(i, '');
                } catch (v) {
                    uf(e, e.return, v);
                }
            }
            if (4 & r && null != (i = e.stateNode)) {
                var o = e.memoizedProps,
                    a = null !== n ? n.memoizedProps : o,
                    s = e.type,
                    u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                    try {
                        ('input' === s && 'radio' === o.type && null != o.name && Lt(i, o), nn(s, a));
                        var l = nn(s, o);
                        for (a = 0; a < u.length; a += 2) {
                            var c = u[a],
                                f = u[a + 1];
                            'style' === c
                                ? Zt(i, f)
                                : 'dangerouslySetInnerHTML' === c
                                  ? Qt(i, f)
                                  : 'children' === c
                                    ? Gt(i, f)
                                    : nt(i, c, f, l);
                        }
                        switch (s) {
                            case 'input':
                                It(i, o);
                                break;
                            case 'textarea':
                                Bt(i, o);
                                break;
                            case 'select':
                                var d = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!o.multiple;
                                var h = o.value;
                                null != h
                                    ? Mt(i, !!o.multiple, h, !1)
                                    : d !== !!o.multiple &&
                                      (null != o.defaultValue
                                          ? Mt(i, !!o.multiple, o.defaultValue, !0)
                                          : Mt(i, !!o.multiple, o.multiple ? [] : '', !1));
                        }
                        i[Yo] = o;
                    } catch (v) {
                        uf(e, e.return, v);
                    }
            }
            break;
        case 6:
            if ((Jl(t, e), ec(e), 4 & r)) {
                if (null === e.stateNode) throw Error(Be(162));
                ((i = e.stateNode), (o = e.memoizedProps));
                try {
                    i.nodeValue = o;
                } catch (v) {
                    uf(e, e.return, v);
                }
            }
            break;
        case 3:
            if ((Jl(t, e), ec(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                    Er(t.containerInfo);
                } catch (v) {
                    uf(e, e.return, v);
                }
            break;
        case 4:
        default:
            (Jl(t, e), ec(e));
            break;
        case 13:
            (Jl(t, e),
                ec(e),
                8192 & (i = e.child).flags &&
                    ((o = null !== i.memoizedState),
                    (i.stateNode.isHidden = o),
                    !o || (null !== i.alternate && null !== i.alternate.memoizedState) || (xc = In())),
                4 & r && Yl(e));
            break;
        case 22:
            if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Rl = (l = Rl) || c), Jl(t, e), (Rl = l)) : Jl(t, e),
                ec(e),
                8192 & r)
            ) {
                if (((l = null !== e.memoizedState), (e.stateNode.isHidden = l) && !c && 0 != (1 & e.mode)))
                    for (Il = e, c = e.child; null !== c; ) {
                        for (f = Il = c; null !== Il; ) {
                            switch (((h = (d = Il).child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Ml(4, d, d.return);
                                    break;
                                case 1:
                                    zl(d, d.return);
                                    var p = d.stateNode;
                                    if ('function' == typeof p.componentWillUnmount) {
                                        ((r = d), (n = d.return));
                                        try {
                                            ((t = r),
                                                (p.props = t.memoizedProps),
                                                (p.state = t.memoizedState),
                                                p.componentWillUnmount());
                                        } catch (v) {
                                            uf(r, n, v);
                                        }
                                    }
                                    break;
                                case 5:
                                    zl(d, d.return);
                                    break;
                                case 22:
                                    if (null !== d.memoizedState) {
                                        ic(f);
                                        continue;
                                    }
                            }
                            null !== h ? ((h.return = d), (Il = h)) : ic(f);
                        }
                        c = c.sibling;
                    }
                e: for (c = null, f = e; ; ) {
                    if (5 === f.tag) {
                        if (null === c) {
                            c = f;
                            try {
                                ((i = f.stateNode),
                                    l
                                        ? 'function' == typeof (o = i.style).setProperty
                                            ? o.setProperty('display', 'none', 'important')
                                            : (o.display = 'none')
                                        : ((s = f.stateNode),
                                          (a =
                                              null != (u = f.memoizedProps.style) && u.hasOwnProperty('display')
                                                  ? u.display
                                                  : null),
                                          (s.style.display = Jt('display', a))));
                            } catch (v) {
                                uf(e, e.return, v);
                            }
                        }
                    } else if (6 === f.tag) {
                        if (null === c)
                            try {
                                f.stateNode.nodeValue = l ? '' : f.memoizedProps;
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
            (Jl(t, e), ec(e), 4 & r && Yl(e));
        case 21:
    }
}
function ec(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e: {
                for (var n = e.return; null !== n; ) {
                    if ($l(n)) {
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
                    (32 & r.flags && (Gt(i, ''), (r.flags &= -33)), Wl(e, ql(e), i));
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo;
                    Hl(e, ql(e), o);
                    break;
                default:
                    throw Error(Be(161));
            }
        } catch (a) {
            uf(e, e.return, a);
        }
        e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
}
function tc(e, t, n) {
    ((Il = e), nc(e));
}
function nc(e, t, n) {
    for (var r = 0 != (1 & e.mode); null !== Il; ) {
        var i = Il,
            o = i.child;
        if (22 === i.tag && r) {
            var a = null !== i.memoizedState || Al;
            if (!a) {
                var s = i.alternate,
                    u = (null !== s && null !== s.memoizedState) || Rl;
                s = Al;
                var l = Rl;
                if (((Al = a), (Rl = u) && !l))
                    for (Il = i; null !== Il; )
                        ((u = (a = Il).child),
                            22 === a.tag && null !== a.memoizedState
                                ? oc(i)
                                : null !== u
                                  ? ((u.return = a), (Il = u))
                                  : oc(i));
                for (; null !== o; ) ((Il = o), nc(o), (o = o.sibling));
                ((Il = i), (Al = s), (Rl = l));
            }
            rc(e);
        } else 0 != (8772 & i.subtreeFlags) && null !== o ? ((o.return = i), (Il = o)) : rc(e);
    }
}
function rc(e) {
    for (; null !== Il; ) {
        var t = Il;
        if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
                if (0 != (8772 & t.flags))
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Rl || Fl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (4 & t.flags && !Rl)
                                if (null === n) r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : Mu(t.type, n.memoizedProps);
                                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var o = t.updateQueue;
                            null !== o && Ps(t, o, r);
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
                                Ps(t, a, n);
                            }
                            break;
                        case 5:
                            var s = t.stateNode;
                            if (null === n && 4 & t.flags) {
                                n = s;
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
                                var l = t.alternate;
                                if (null !== l) {
                                    var c = l.memoizedState;
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
                Rl || (512 & t.flags && Ul(t));
            } catch (d) {
                uf(t, t.return, d);
            }
        }
        if (t === e) {
            Il = null;
            break;
        }
        if (null !== (n = t.sibling)) {
            ((n.return = t.return), (Il = n));
            break;
        }
        Il = t.return;
    }
}
function ic(e) {
    for (; null !== Il; ) {
        var t = Il;
        if (t === e) {
            Il = null;
            break;
        }
        var n = t.sibling;
        if (null !== n) {
            ((n.return = t.return), (Il = n));
            break;
        }
        Il = t.return;
    }
}
function oc(e) {
    for (; null !== Il; ) {
        var t = Il;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Fl(4, t);
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
                    var o = t.return;
                    try {
                        Ul(t);
                    } catch (u) {
                        uf(t, o, u);
                    }
                    break;
                case 5:
                    var a = t.return;
                    try {
                        Ul(t);
                    } catch (u) {
                        uf(t, a, u);
                    }
            }
        } catch (u) {
            uf(t, t.return, u);
        }
        if (t === e) {
            Il = null;
            break;
        }
        var s = t.sibling;
        if (null !== s) {
            ((s.return = t.return), (Il = s));
            break;
        }
        Il = t.return;
    }
}
var ac,
    sc = Math.ceil,
    uc = rt.ReactCurrentDispatcher,
    lc = rt.ReactCurrentOwner,
    cc = rt.ReactCurrentBatchConfig,
    fc = 0,
    dc = null,
    hc = null,
    pc = 0,
    vc = 0,
    yc = ua(0),
    gc = 0,
    mc = null,
    bc = 0,
    _c = 0,
    wc = 0,
    Sc = null,
    kc = null,
    xc = 0,
    Oc = 1 / 0,
    Ec = null,
    Pc = !1,
    Cc = null,
    Nc = null,
    jc = !1,
    Tc = null,
    Ac = 0,
    Rc = 0,
    Lc = null,
    Ic = -1,
    zc = 0;
function Dc() {
    return 0 != (6 & fc) ? In() : -1 !== Ic ? Ic : (Ic = In());
}
function Vc(e) {
    return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & fc) && 0 !== pc
          ? pc & -pc
          : null !== Za.transition
            ? (0 === zc && (zc = Zn()), zc)
            : 0 !== (e = rr)
              ? e
              : (e = void 0 === (e = window.event) ? 16 : Lr(e.type));
}
function Mc(e, t, n, r) {
    if (50 < Rc) throw ((Rc = 0), (Lc = null), Error(Be(185)));
    (tr(e, n, r),
        (0 != (2 & fc) && e === dc) ||
            (e === dc && (0 == (2 & fc) && (_c |= n), 4 === gc && qc(e, pc)),
            Fc(e, r),
            1 === n && 0 === fc && 0 == (1 & t.mode) && ((Oc = In() + 500), ka && Ea())));
}
function Fc(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
            var a = 31 - qn(o),
                s = 1 << a,
                u = i[a];
            (-1 === u ? (0 != (s & n) && 0 == (s & r)) || (i[a] = Yn(s, t)) : u <= t && (e.expiredLanes |= s),
                (o &= ~s));
        }
    })(e, t);
    var r = Xn(e, e === dc ? pc : 0);
    if (0 === r) (null !== n && An(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && An(n), 1 === t))
            (0 === e.tag
                ? (function (e) {
                      ((ka = !0), Oa(e));
                  })(Hc.bind(null, e))
                : Oa(Hc.bind(null, e)),
                qo(function () {
                    0 == (6 & fc) && Ea();
                }),
                (n = null));
        else {
            switch (ir(r)) {
                case 1:
                    n = Dn;
                    break;
                case 4:
                    n = Vn;
                    break;
                case 16:
                default:
                    n = Mn;
                    break;
                case 536870912:
                    n = Un;
            }
            n = hf(n, Uc.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = n));
    }
}
function Uc(e, t) {
    if (((Ic = -1), (zc = 0), 0 != (6 & fc))) throw Error(Be(327));
    var n = e.callbackNode;
    if (af() && e.callbackNode !== n) return null;
    var r = Xn(e, e === dc ? pc : 0);
    if (0 === r) return null;
    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = Zc(e, r);
    else {
        t = r;
        var i = fc;
        fc |= 2;
        var o = Yc();
        for ((dc === e && pc === t) || ((Ec = null), (Oc = In() + 500), Gc(e, t)); ; )
            try {
                tf();
                break;
            } catch (s) {
                Xc(e, s);
            }
        (cs(), (uc.current = o), (fc = i), null !== hc ? (t = 0) : ((dc = null), (pc = 0), (t = gc)));
    }
    if (0 !== t) {
        if ((2 === t && 0 !== (i = Jn(e)) && ((r = i), (t = Bc(e, i))), 1 === t))
            throw ((n = mc), Gc(e, 0), qc(e, r), Fc(e, In()), n);
        if (6 === t) qc(e, r);
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
                                            if (!qi(o(), i)) return !1;
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
                    (2 === (t = Zc(e, r)) && 0 !== (o = Jn(e)) && ((r = o), (t = Bc(e, o))), 1 === t))
            )
                throw ((n = mc), Gc(e, 0), qc(e, r), Fc(e, In()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(Be(345));
                case 2:
                case 5:
                    of(e, kc, Ec);
                    break;
                case 3:
                    if ((qc(e, r), (130023424 & r) === r && 10 < (t = xc + 500 - In()))) {
                        if (0 !== Xn(e, 0)) break;
                        if (((i = e.suspendedLanes) & r) !== r) {
                            (Dc(), (e.pingedLanes |= e.suspendedLanes & i));
                            break;
                        }
                        e.timeoutHandle = Uo(of.bind(null, e, kc, Ec), t);
                        break;
                    }
                    of(e, kc, Ec);
                    break;
                case 4:
                    if ((qc(e, r), (4194240 & r) === r)) break;
                    for (t = e.eventTimes, i = -1; 0 < r; ) {
                        var a = 31 - qn(r);
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
                                              : 1960 * sc(r / 1960)) - r))
                    ) {
                        e.timeoutHandle = Uo(of.bind(null, e, kc, Ec), r);
                        break;
                    }
                    of(e, kc, Ec);
                    break;
                default:
                    throw Error(Be(329));
            }
        }
    }
    return (Fc(e, In()), e.callbackNode === n ? Uc.bind(null, e) : null);
}
function Bc(e, t) {
    var n = Sc;
    return (
        e.current.memoizedState.isDehydrated && (Gc(e, t).flags |= 256),
        2 !== (e = Zc(e, t)) && ((t = kc), (kc = n), null !== t && $c(t)),
        e
    );
}
function $c(e) {
    null === kc ? (kc = e) : kc.push.apply(kc, e);
}
function qc(e, t) {
    for (t &= ~wc, t &= ~_c, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - qn(t),
            r = 1 << n;
        ((e[n] = -1), (t &= ~r));
    }
}
function Hc(e) {
    if (0 != (6 & fc)) throw Error(Be(327));
    af();
    var t = Xn(e, 0);
    if (0 == (1 & t)) return (Fc(e, In()), null);
    var n = Zc(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = Jn(e);
        0 !== r && ((t = r), (n = Bc(e, r)));
    }
    if (1 === n) throw ((n = mc), Gc(e, 0), qc(e, t), Fc(e, In()), n);
    if (6 === n) throw Error(Be(345));
    return ((e.finishedWork = e.current.alternate), (e.finishedLanes = t), of(e, kc, Ec), Fc(e, In()), null);
}
function Wc(e, t) {
    var n = fc;
    fc |= 1;
    try {
        return e(t);
    } finally {
        0 === (fc = n) && ((Oc = In() + 500), ka && Ea());
    }
}
function Kc(e) {
    null !== Tc && 0 === Tc.tag && 0 == (6 & fc) && af();
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
function Qc() {
    ((vc = yc.current), la(yc));
}
function Gc(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), Bo(n)), null !== hc))
        for (n = hc.return; null !== n; ) {
            var r = n;
            switch ((Ma(r), r.tag)) {
                case 1:
                    null != (r = r.type.childContextTypes) && ga();
                    break;
                case 3:
                    (Ls(), la(ha), la(da), Fs());
                    break;
                case 5:
                    zs(r);
                    break;
                case 4:
                    Ls();
                    break;
                case 13:
                case 19:
                    la(Ds);
                    break;
                case 10:
                    fs(r.type._context);
                    break;
                case 22:
                case 23:
                    Qc();
            }
            n = n.return;
        }
    if (
        ((dc = e),
        (hc = e = gf(e.current, null)),
        (pc = vc = t),
        (gc = 0),
        (mc = null),
        (wc = _c = bc = 0),
        (kc = Sc = null),
        null !== vs)
    ) {
        for (t = 0; t < vs.length; t++)
            if (null !== (r = (n = vs[t]).interleaved)) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (null !== o) {
                    var a = o.next;
                    ((o.next = i), (r.next = a));
                }
                n.pending = r;
            }
        vs = null;
    }
    return e;
}
function Xc(e, t) {
    for (;;) {
        var n = hc;
        try {
            if ((cs(), (Us.current = Iu), Ks)) {
                for (var r = qs.memoizedState; null !== r; ) {
                    var i = r.queue;
                    (null !== i && (i.pending = null), (r = r.next));
                }
                Ks = !1;
            }
            if (
                (($s = 0),
                (Ws = Hs = qs = null),
                (Qs = !1),
                (Gs = 0),
                (lc.current = null),
                null === n || null === n.return)
            ) {
                ((gc = 1), (mc = t), (hc = null));
                break;
            }
            e: {
                var o = e,
                    a = n.return,
                    s = n,
                    u = t;
                if (((t = pc), (s.flags |= 32768), null !== u && 'object' == typeof u && 'function' == typeof u.then)) {
                    var l = u,
                        c = s,
                        f = c.tag;
                    if (0 == (1 & c.mode) && (0 === f || 11 === f || 15 === f)) {
                        var d = c.alternate;
                        d
                            ? ((c.updateQueue = d.updateQueue),
                              (c.memoizedState = d.memoizedState),
                              (c.lanes = d.lanes))
                            : ((c.updateQueue = null), (c.memoizedState = null));
                    }
                    var h = Zu(a);
                    if (null !== h) {
                        ((h.flags &= -257), el(h, a, s, 0, t), 1 & h.mode && Ju(o, l, t), (u = l));
                        var p = (t = h).updateQueue;
                        if (null === p) {
                            var v = new Set();
                            (v.add(u), (t.updateQueue = v));
                        } else p.add(u);
                        break e;
                    }
                    if (0 == (1 & t)) {
                        (Ju(o, l, t), Jc());
                        break e;
                    }
                    u = Error(Be(426));
                } else if (Ba && 1 & s.mode) {
                    var y = Zu(a);
                    if (null !== y) {
                        (0 == (65536 & y.flags) && (y.flags |= 256), el(y, a, s, 0, t), Ja(Wu(u, s)));
                        break e;
                    }
                }
                ((o = u = Wu(u, s)), 4 !== gc && (gc = 2), null === Sc ? (Sc = [o]) : Sc.push(o), (o = a));
                do {
                    switch (o.tag) {
                        case 3:
                            ((o.flags |= 65536), (t &= -t), (o.lanes |= t), Os(o, Xu(0, u, t)));
                            break e;
                        case 1:
                            s = u;
                            var g = o.type,
                                m = o.stateNode;
                            if (
                                0 == (128 & o.flags) &&
                                ('function' == typeof g.getDerivedStateFromError ||
                                    (null !== m &&
                                        'function' == typeof m.componentDidCatch &&
                                        (null === Nc || !Nc.has(m))))
                            ) {
                                ((o.flags |= 65536), (t &= -t), (o.lanes |= t), Os(o, Yu(o, s, t)));
                                break e;
                            }
                    }
                    o = o.return;
                } while (null !== o);
            }
            rf(n);
        } catch (b) {
            ((t = b), hc === n && null !== n && (hc = n = n.return));
            continue;
        }
        break;
    }
}
function Yc() {
    var e = uc.current;
    return ((uc.current = Iu), null === e ? Iu : e);
}
function Jc() {
    ((0 !== gc && 3 !== gc && 2 !== gc) || (gc = 4),
        null === dc || (0 == (268435455 & bc) && 0 == (268435455 & _c)) || qc(dc, pc));
}
function Zc(e, t) {
    var n = fc;
    fc |= 2;
    var r = Yc();
    for ((dc === e && pc === t) || ((Ec = null), Gc(e, t)); ; )
        try {
            ef();
            break;
        } catch (i) {
            Xc(e, i);
        }
    if ((cs(), (fc = n), (uc.current = r), null !== hc)) throw Error(Be(261));
    return ((dc = null), (pc = 0), gc);
}
function ef() {
    for (; null !== hc; ) nf(hc);
}
function tf() {
    for (; null !== hc && !Rn(); ) nf(hc);
}
function nf(e) {
    var t = ac(e.alternate, e, vc);
    ((e.memoizedProps = e.pendingProps), null === t ? rf(e) : (hc = t), (lc.current = null));
}
function rf(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), 0 == (32768 & t.flags))) {
            if (null !== (n = jl(n, t, vc))) return void (hc = n);
        } else {
            if (null !== (n = Tl(n, t))) return ((n.flags &= 32767), void (hc = n));
            if (null === e) return ((gc = 6), void (hc = null));
            ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        }
        if (null !== (t = t.sibling)) return void (hc = t);
        hc = t = e;
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
                } while (null !== Tc);
                if (0 != (6 & fc)) throw Error(Be(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(Be(177));
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
                            var i = 31 - qn(n),
                                o = 1 << i;
                            ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o));
                        }
                    })(e, o),
                    e === dc && ((hc = dc = null), (pc = 0)),
                    (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                        jc ||
                        ((jc = !0),
                        hf(Mn, function () {
                            return (af(), null);
                        })),
                    (o = 0 != (15990 & n.flags)),
                    0 != (15990 & n.subtreeFlags) || o)
                ) {
                    ((o = cc.transition), (cc.transition = null));
                    var a = rr;
                    rr = 1;
                    var s = fc;
                    ((fc |= 4),
                        (lc.current = null),
                        (function (e, t) {
                            if (((Vo = Cr), Xi((e = Gi())))) {
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
                                                s = -1,
                                                u = -1,
                                                l = 0,
                                                c = 0,
                                                f = e,
                                                d = null;
                                            t: for (;;) {
                                                for (
                                                    var h;
                                                    f !== n || (0 !== i && 3 !== f.nodeType) || (s = a + i),
                                                        f !== o || (0 !== r && 3 !== f.nodeType) || (u = a + r),
                                                        3 === f.nodeType && (a += f.nodeValue.length),
                                                        null !== (h = f.firstChild);
                                                )
                                                    ((d = f), (f = h));
                                                for (;;) {
                                                    if (f === e) break t;
                                                    if (
                                                        (d === n && ++l === i && (s = a),
                                                        d === o && ++c === r && (u = a),
                                                        null !== (h = f.nextSibling))
                                                    )
                                                        break;
                                                    d = (f = d).parentNode;
                                                }
                                                f = h;
                                            }
                                            n = -1 === s || -1 === u ? null : { start: s, end: u };
                                        } else n = null;
                                    }
                                n = n || { start: 0, end: 0 };
                            } else n = null;
                            for (Mo = { focusedElem: e, selectionRange: n }, Cr = !1, Il = t; null !== Il; )
                                if (((e = (t = Il).child), 0 != (1028 & t.subtreeFlags) && null !== e))
                                    ((e.return = t), (Il = e));
                                else
                                    for (; null !== Il; ) {
                                        t = Il;
                                        try {
                                            var p = t.alternate;
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
                                                        if (null !== p) {
                                                            var v = p.memoizedProps,
                                                                y = p.memoizedState,
                                                                g = t.stateNode,
                                                                m = g.getSnapshotBeforeUpdate(
                                                                    t.elementType === t.type ? v : Mu(t.type, v),
                                                                    y,
                                                                );
                                                            g.__reactInternalSnapshotBeforeUpdate = m;
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
                                            ((e.return = t.return), (Il = e));
                                            break;
                                        }
                                        Il = t.return;
                                    }
                            ((p = Vl), (Vl = !1));
                        })(e, n),
                        Zl(n, e),
                        Yi(Mo),
                        (Cr = !!Vo),
                        (Mo = Vo = null),
                        (e.current = n),
                        tc(n),
                        Ln(),
                        (fc = s),
                        (rr = a),
                        (cc.transition = o));
                } else e.current = n;
                if (
                    (jc && ((jc = !1), (Tc = e), (Ac = i)),
                    (o = e.pendingLanes),
                    0 === o && (Nc = null),
                    (function (e) {
                        if ($n && 'function' == typeof $n.onCommitFiberRoot)
                            try {
                                $n.onCommitFiberRoot(Bn, e, void 0, 128 == (128 & e.current.flags));
                            } catch (t) {}
                    })(n.stateNode),
                    Fc(e, In()),
                    null !== t)
                )
                    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                        ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
                if (Pc) throw ((Pc = !1), (e = Cc), (Cc = null), e);
                (0 != (1 & Ac) && 0 !== e.tag && af(),
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
    if (null !== Tc) {
        var e = ir(Ac),
            t = cc.transition,
            n = rr;
        try {
            if (((cc.transition = null), (rr = 16 > e ? 16 : e), null === Tc)) var r = !1;
            else {
                if (((e = Tc), (Tc = null), (Ac = 0), 0 != (6 & fc))) throw Error(Be(331));
                var i = fc;
                for (fc |= 4, Il = e.current; null !== Il; ) {
                    var o = Il,
                        a = o.child;
                    if (0 != (16 & Il.flags)) {
                        var s = o.deletions;
                        if (null !== s) {
                            for (var u = 0; u < s.length; u++) {
                                var l = s[u];
                                for (Il = l; null !== Il; ) {
                                    var c = Il;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ml(8, c, o);
                                    }
                                    var f = c.child;
                                    if (null !== f) ((f.return = c), (Il = f));
                                    else
                                        for (; null !== Il; ) {
                                            var d = (c = Il).sibling,
                                                h = c.return;
                                            if ((Bl(c), c === l)) {
                                                Il = null;
                                                break;
                                            }
                                            if (null !== d) {
                                                ((d.return = h), (Il = d));
                                                break;
                                            }
                                            Il = h;
                                        }
                                }
                            }
                            var p = o.alternate;
                            if (null !== p) {
                                var v = p.child;
                                if (null !== v) {
                                    p.child = null;
                                    do {
                                        var y = v.sibling;
                                        ((v.sibling = null), (v = y));
                                    } while (null !== v);
                                }
                            }
                            Il = o;
                        }
                    }
                    if (0 != (2064 & o.subtreeFlags) && null !== a) ((a.return = o), (Il = a));
                    else
                        e: for (; null !== Il; ) {
                            if (0 != (2048 & (o = Il).flags))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ml(9, o, o.return);
                                }
                            var g = o.sibling;
                            if (null !== g) {
                                ((g.return = o.return), (Il = g));
                                break e;
                            }
                            Il = o.return;
                        }
                }
                var m = e.current;
                for (Il = m; null !== Il; ) {
                    var b = (a = Il).child;
                    if (0 != (2064 & a.subtreeFlags) && null !== b) ((b.return = a), (Il = b));
                    else
                        e: for (a = m; null !== Il; ) {
                            if (0 != (2048 & (s = Il).flags))
                                try {
                                    switch (s.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Fl(9, s);
                                    }
                                } catch (w) {
                                    uf(s, s.return, w);
                                }
                            if (s === a) {
                                Il = null;
                                break e;
                            }
                            var _ = s.sibling;
                            if (null !== _) {
                                ((_.return = s.return), (Il = _));
                                break e;
                            }
                            Il = s.return;
                        }
                }
                if (((fc = i), Ea(), $n && 'function' == typeof $n.onPostCommitFiberRoot))
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
function sf(e, t, n) {
    ((e = ks(e, (t = Xu(0, (t = Wu(n, t)), 1)), 1)), (t = Dc()), null !== e && (tr(e, 1, t), Fc(e, t)));
}
function uf(e, t, n) {
    if (3 === e.tag) sf(e, e, n);
    else
        for (; null !== t; ) {
            if (3 === t.tag) {
                sf(t, e, n);
                break;
            }
            if (1 === t.tag) {
                var r = t.stateNode;
                if (
                    'function' == typeof t.type.getDerivedStateFromError ||
                    ('function' == typeof r.componentDidCatch && (null === Nc || !Nc.has(r)))
                ) {
                    ((t = ks(t, (e = Yu(t, (e = Wu(n, e)), 1)), 1)), (e = Dc()), null !== t && (tr(t, 1, e), Fc(t, e)));
                    break;
                }
            }
            t = t.return;
        }
}
function lf(e, t, n) {
    var r = e.pingCache;
    (null !== r && r.delete(t),
        (t = Dc()),
        (e.pingedLanes |= e.suspendedLanes & n),
        dc === e &&
            (pc & n) === n &&
            (4 === gc || (3 === gc && (130023424 & pc) === pc && 500 > In() - xc) ? Gc(e, 0) : (wc |= n)),
        Fc(e, t));
}
function cf(e, t) {
    0 === t && (0 == (1 & e.mode) ? (t = 1) : ((t = Qn), 0 == (130023424 & (Qn <<= 1)) && (Qn = 4194304)));
    var n = Dc();
    null !== (e = ms(e, t)) && (tr(e, t, n), Fc(e, n));
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
function hf(e, t) {
    return Tn(e, t);
}
function pf(e, t, n, r) {
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
    return new pf(e, t, n, r);
}
function yf(e) {
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
function mf(e, t, n, r, i, o) {
    var a = 2;
    if (((r = e), 'function' == typeof e)) yf(e) && (a = 1);
    else if ('string' == typeof e) a = 5;
    else
        e: switch (e) {
            case at:
                return bf(n.children, i, o, t);
            case st:
                ((a = 8), (i |= 8));
                break;
            case ut:
                return (((e = vf(12, n, t, 2 | i)).elementType = ut), (e.lanes = o), e);
            case dt:
                return (((e = vf(13, n, t, i)).elementType = dt), (e.lanes = o), e);
            case ht:
                return (((e = vf(19, n, t, i)).elementType = ht), (e.lanes = o), e);
            case yt:
                return _f(n, i, o, t);
            default:
                if ('object' == typeof e && null !== e)
                    switch (e.$$typeof) {
                        case lt:
                            a = 10;
                            break e;
                        case ct:
                            a = 9;
                            break e;
                        case ft:
                            a = 11;
                            break e;
                        case pt:
                            a = 14;
                            break e;
                        case vt:
                            ((a = 16), (r = null));
                            break e;
                    }
                throw Error(Be(130, null == e ? e : typeof e, ''));
        }
    return (((t = vf(a, n, t, i)).elementType = e), (t.type = r), (t.lanes = o), t);
}
function bf(e, t, n, r) {
    return (((e = vf(7, e, r, t)).lanes = n), e);
}
function _f(e, t, n, r) {
    return (((e = vf(22, e, r, t)).elementType = yt), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e);
}
function wf(e, t, n) {
    return (((e = vf(6, e, null, t)).lanes = n), e);
}
function Sf(e, t, n) {
    return (
        ((t = vf(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
function kf(e, t, n, r, i) {
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
function xf(e, t, n, r, i, o, a, s, u) {
    return (
        (e = new kf(e, t, n, s, u)),
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
        _s(o),
        e
    );
}
function Of(e) {
    if (!e) return fa;
    e: {
        if (En((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(Be(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ya(t.type)) {
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
        if (ya(n)) return ba(e, n, t);
    }
    return t;
}
function Ef(e, t, n, r, i, o, a, s, u) {
    return (
        ((e = xf(n, r, !0, e, 0, o, 0, s, u)).context = Of(null)),
        (n = e.current),
        ((o = Ss((r = Dc()), (i = Vc(n)))).callback = null != t ? t : null),
        ks(n, o, i),
        (e.current.lanes = i),
        tr(e, i, r),
        Fc(e, r),
        e
    );
}
function Pf(e, t, n, r) {
    var i = t.current,
        o = Dc(),
        a = Vc(i);
    return (
        (n = Of(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = Ss(o, a)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = ks(i, t, a)) && (Mc(e, i, a, o), xs(e, i, a)),
        a
    );
}
function Cf(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
}
function Nf(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
    }
}
function jf(e, t) {
    (Nf(e, t), (e = e.alternate) && Nf(e, t));
}
ac = function (e, t, n) {
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps || ha.current) nl = !0;
        else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                    (nl = !1),
                    (function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                (dl(t), Ya());
                                break;
                            case 5:
                                Is(t);
                                break;
                            case 1:
                                ya(t.type) && _a(t);
                                break;
                            case 4:
                                Rs(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context,
                                    i = t.memoizedProps.value;
                                (ca(as, r._currentValue), (r._currentValue = i));
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState))
                                    return null !== r.dehydrated
                                        ? (ca(Ds, 1 & Ds.current), (t.flags |= 128), null)
                                        : 0 != (n & t.child.childLanes)
                                          ? _l(e, t, n)
                                          : (ca(Ds, 1 & Ds.current), null !== (e = Pl(e, t, n)) ? e.sibling : null);
                                ca(Ds, 1 & Ds.current);
                                break;
                            case 19:
                                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                    if (r) return Ol(e, t, n);
                                    t.flags |= 128;
                                }
                                if (
                                    (null !== (i = t.memoizedState) &&
                                        ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                                    ca(Ds, Ds.current),
                                    r)
                                )
                                    break;
                                return null;
                            case 22:
                            case 23:
                                return ((t.lanes = 0), sl(e, t, n));
                        }
                        return Pl(e, t, n);
                    })(e, t, n)
                );
            nl = 0 != (131072 & e.flags);
        }
    else ((nl = !1), Ba && 0 != (1048576 & t.flags) && Da(t, ja, t.index));
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            (El(e, t), (e = t.pendingProps));
            var i = va(t, da.current);
            (hs(t, n), (i = Zs(null, t, r, e, i, n)));
            var o = eu();
            return (
                (t.flags |= 1),
                'object' == typeof i && null !== i && 'function' == typeof i.render && void 0 === i.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      ya(r) ? ((o = !0), _a(t)) : (o = !1),
                      (t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null),
                      _s(t),
                      (i.updater = Uu),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      Hu(t, r, e, n),
                      (t = fl(null, t, r, !0, o, n)))
                    : ((t.tag = 0), Ba && o && Va(t), rl(null, t, i, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (El(e, t),
                    (e = t.pendingProps),
                    (r = (i = r._init)(r._payload)),
                    (t.type = r),
                    (i = t.tag =
                        (function (e) {
                            if ('function' == typeof e) return yf(e) ? 1 : 0;
                            if (null != e) {
                                if ((e = e.$$typeof) === ft) return 11;
                                if (e === pt) return 14;
                            }
                            return 2;
                        })(r)),
                    (e = Mu(r, e)),
                    i)
                ) {
                    case 0:
                        t = ll(null, t, r, e, n);
                        break e;
                    case 1:
                        t = cl(null, t, r, e, n);
                        break e;
                    case 11:
                        t = il(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ol(null, t, r, Mu(r.type, e), n);
                        break e;
                }
                throw Error(Be(306, r, ''));
            }
            return t;
        case 0:
            return ((r = t.type), (i = t.pendingProps), ll(e, t, r, (i = t.elementType === r ? i : Mu(r, i)), n));
        case 1:
            return ((r = t.type), (i = t.pendingProps), cl(e, t, r, (i = t.elementType === r ? i : Mu(r, i)), n));
        case 3:
            e: {
                if ((dl(t), null === e)) throw Error(Be(387));
                ((r = t.pendingProps), (i = (o = t.memoizedState).element), ws(e, t), Es(t, r, null, n));
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
                        t = hl(e, t, r, n, (i = Wu(Error(Be(423)), t)));
                        break e;
                    }
                    if (r !== i) {
                        t = hl(e, t, r, n, (i = Wu(Error(Be(424)), t)));
                        break e;
                    }
                    for (
                        Ua = Ko(t.stateNode.containerInfo.firstChild),
                            Fa = t,
                            Ba = !0,
                            $a = null,
                            n = os(t, null, r, n),
                            t.child = n;
                        n;
                    )
                        ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                    if ((Ya(), r === i)) {
                        t = Pl(e, t, n);
                        break e;
                    }
                    rl(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Is(t),
                null === e && Ka(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (a = i.children),
                Fo(r, i) ? (a = null) : null !== o && Fo(r, o) && (t.flags |= 32),
                ul(e, t),
                rl(e, t, a, n),
                t.child
            );
        case 6:
            return (null === e && Ka(t), null);
        case 13:
            return _l(e, t, n);
        case 4:
            return (
                Rs(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = is(t, null, r, n)) : rl(e, t, r, n),
                t.child
            );
        case 11:
            return ((r = t.type), (i = t.pendingProps), il(e, t, r, (i = t.elementType === r ? i : Mu(r, i)), n));
        case 7:
            return (rl(e, t, t.pendingProps, n), t.child);
        case 8:
        case 12:
            return (rl(e, t, t.pendingProps.children, n), t.child);
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (i = t.pendingProps),
                    (o = t.memoizedProps),
                    (a = i.value),
                    ca(as, r._currentValue),
                    (r._currentValue = a),
                    null !== o)
                )
                    if (qi(o.value, a)) {
                        if (o.children === i.children && !ha.current) {
                            t = Pl(e, t, n);
                            break e;
                        }
                    } else
                        for (null !== (o = t.child) && (o.return = t); null !== o; ) {
                            var s = o.dependencies;
                            if (null !== s) {
                                a = o.child;
                                for (var u = s.firstContext; null !== u; ) {
                                    if (u.context === r) {
                                        if (1 === o.tag) {
                                            (u = Ss(-1, n & -n)).tag = 2;
                                            var l = o.updateQueue;
                                            if (null !== l) {
                                                var c = (l = l.shared).pending;
                                                (null === c ? (u.next = u) : ((u.next = c.next), (c.next = u)),
                                                    (l.pending = u));
                                            }
                                        }
                                        ((o.lanes |= n),
                                            null !== (u = o.alternate) && (u.lanes |= n),
                                            ds(o.return, n, t),
                                            (s.lanes |= n));
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (10 === o.tag) a = o.type === t.type ? null : o.child;
                            else if (18 === o.tag) {
                                if (null === (a = o.return)) throw Error(Be(341));
                                ((a.lanes |= n),
                                    null !== (s = a.alternate) && (s.lanes |= n),
                                    ds(a, n, t),
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
                (rl(e, t, i.children, n), (t = t.child));
            }
            return t;
        case 9:
            return (
                (i = t.type),
                (r = t.pendingProps.children),
                hs(t, n),
                (r = r((i = ps(i)))),
                (t.flags |= 1),
                rl(e, t, r, n),
                t.child
            );
        case 14:
            return ((i = Mu((r = t.type), t.pendingProps)), ol(e, t, r, (i = Mu(r.type, i)), n));
        case 15:
            return al(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Mu(r, i)),
                El(e, t),
                (t.tag = 1),
                ya(r) ? ((e = !0), _a(t)) : (e = !1),
                hs(t, n),
                $u(t, r, i),
                Hu(t, r, i, n),
                fl(null, t, r, !0, e, n)
            );
        case 19:
            return Ol(e, t, n);
        case 22:
            return sl(e, t, n);
    }
    throw Error(Be(156, t.tag));
};
var Tf =
    'function' == typeof reportError
        ? reportError
        : function (e) {
              console.error(e);
          };
function Af(e) {
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
function zf() {}
function Df(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var a = o;
        if ('function' == typeof i) {
            var s = i;
            i = function () {
                var e = Cf(a);
                s.call(e);
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
                var a = Ef(t, r, e, 0, null, !1, 0, '', zf);
                return (
                    (e._reactRootContainer = a),
                    (e[Jo] = a.current),
                    Eo(8 === e.nodeType ? e.parentNode : e),
                    Kc(),
                    a
                );
            }
            for (; (i = e.lastChild); ) e.removeChild(i);
            if ('function' == typeof r) {
                var s = r;
                r = function () {
                    var e = Cf(u);
                    s.call(e);
                };
            }
            var u = xf(e, 0, !1, null, 0, !1, 0, '', zf);
            return (
                (e._reactRootContainer = u),
                (e[Jo] = u.current),
                Eo(8 === e.nodeType ? e.parentNode : e),
                Kc(function () {
                    Pf(t, u, n, r);
                }),
                u
            );
        })(n, t, e, i, r);
    return Cf(a);
}
((Rf.prototype.render = Af.prototype.render =
    function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(Be(409));
        Pf(e, t, null, null);
    }),
    (Rf.prototype.unmount = Af.prototype.unmount =
        function () {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                (Kc(function () {
                    Pf(null, e, null, null);
                }),
                    (t[Jo] = null));
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
    (or = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Gn(t.pendingLanes);
                    0 !== n && (nr(t, 1 | n), Fc(t, In()), 0 == (6 & fc) && ((Oc = In() + 500), Ea()));
                }
                break;
            case 13:
                (Kc(function () {
                    var t = ms(e, 1);
                    if (null !== t) {
                        var n = Dc();
                        Mc(t, e, 1, n);
                    }
                }),
                    jf(e, 1));
        }
    }),
    (ar = function (e) {
        if (13 === e.tag) {
            var t = ms(e, 134217728);
            if (null !== t) Mc(t, e, 134217728, Dc());
            jf(e, 134217728);
        }
    }),
    (sr = function (e) {
        if (13 === e.tag) {
            var t = Vc(e),
                n = ms(e, t);
            if (null !== n) Mc(n, e, t, Dc());
            jf(e, t);
        }
    }),
    (ur = function () {
        return rr;
    }),
    (lr = function (e, t) {
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
                            if (!i) throw Error(Be(90));
                            (jt(r), It(r, i));
                        }
                    }
                }
                break;
            case 'textarea':
                Bt(e, n);
                break;
            case 'select':
                null != (t = n.value) && Mt(e, !!n.multiple, t, !1);
        }
    }),
    (dn = Wc),
    (hn = Kc));
var Vf = { usingClientEntryPoint: !1, Events: [ra, ia, oa, cn, fn, Wc] },
    Mf = { findFiberByHostInstance: na, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    Ff = {
        bundleType: Mf.bundleType,
        version: Mf.version,
        rendererPackageName: Mf.rendererPackageName,
        rendererConfig: Mf.rendererConfig,
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
            return null === (e = Nn(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
            Mf.findFiberByHostInstance ||
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
        } catch (Kt) {}
}
((ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vf),
    (ze.createPortal = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Lf(t)) throw Error(Be(200));
        return (function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: ot, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
        })(e, t, null, n);
    }),
    (ze.createRoot = function (e, t) {
        if (!Lf(e)) throw Error(Be(299));
        var n = !1,
            r = '',
            i = Tf;
        return (
            null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
            (t = xf(e, 1, !1, null, 0, n, 0, r, i)),
            (e[Jo] = t.current),
            Eo(8 === e.nodeType ? e.parentNode : e),
            new Af(t)
        );
    }),
    (ze.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
            if ('function' == typeof e.render) throw Error(Be(188));
            throw ((e = Object.keys(e).join(',')), Error(Be(268, e)));
        }
        return (e = null === (e = Nn(t)) ? null : e.stateNode);
    }),
    (ze.flushSync = function (e) {
        return Kc(e);
    }),
    (ze.hydrate = function (e, t, n) {
        if (!If(t)) throw Error(Be(200));
        return Df(null, e, t, !0, n);
    }),
    (ze.hydrateRoot = function (e, t, n) {
        if (!Lf(e)) throw Error(Be(405));
        var r = (null != n && n.hydratedSources) || null,
            i = !1,
            o = '',
            a = Tf;
        if (
            (null != n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
            (t = Ef(t, null, e, 1, null != n ? n : null, i, 0, o, a)),
            (e[Jo] = t.current),
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
    (ze.render = function (e, t, n) {
        if (!If(t)) throw Error(Be(200));
        return Df(null, e, t, !1, n);
    }),
    (ze.unmountComponentAtNode = function (e) {
        if (!If(e)) throw Error(Be(40));
        return (
            !!e._reactRootContainer &&
            (Kc(function () {
                Df(null, null, e, !1, function () {
                    ((e._reactRootContainer = null), (e[Jo] = null));
                });
            }),
            !0)
        );
    }),
    (ze.unstable_batchedUpdates = Wc),
    (ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!If(n)) throw Error(Be(200));
        if (null == e || void 0 === e._reactInternals) throw Error(Be(38));
        return Df(e, t, n, !1, r);
    }),
    (ze.version = '18.3.1-next-f1338f8080-20240426'),
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
    (Ie.exports = ze));
var Bf = Ie.exports;
const $f = n(Bf);
var qf = Bf;
((Le.createRoot = qf.createRoot), (Le.hydrateRoot = qf.hydrateRoot));
var Hf,
    Wf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ((Hf = Wf),
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
                        for (var s in i) e.call(i, s) && i[s] && n.push(s);
                    }
                }
            }
            return n.join(' ');
        }
        Hf.exports ? ((t.default = t), (Hf.exports = t)) : (window.classNames = t);
    })());
const Kf = n(Wf.exports);
function Qf(e) {
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
function Xf() {
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
    Jf = Object.getOwnPropertyDescriptor,
    Zf = Object.defineProperty,
    ed = Object.prototype,
    td = [];
Object.freeze(td);
var nd = {};
Object.freeze(nd);
var rd = 'undefined' != typeof Proxy,
    id = Object.toString();
function od() {
    rd || Qf('Proxy not available');
}
function ad(e) {
    var t = !1;
    return function () {
        if (!t) return ((t = !0), e.apply(this, arguments));
    };
}
var sd = function () {};
function ud(e) {
    return 'function' == typeof e;
}
function ld(e) {
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
function hd(e, t, n) {
    Zf(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function pd(e, t, n) {
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
function yd(e) {
    return e instanceof Map;
}
function gd(e) {
    return e instanceof Set;
}
var md = void 0 !== Object.getOwnPropertySymbols;
var bd =
    'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : md
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
var Sd =
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
function xd(e, t, n) {
    return (t && kd(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
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
function Nd(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function jd(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
        Array.isArray(e) ||
        (n = (function (e, t) {
            if (e) {
                if ('string' == typeof e) return Nd(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? Nd(e, t)
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
function Ad(e) {
    return Object.assign(function (t, n) {
        if (Ld(n)) return e.decorate_20223_(t, n);
        Rd(t, n, e);
    }, e);
}
function Rd(e, t, n) {
    (wd(e, Td) || hd(e, Td, Od({}, e[Td])),
        (function (e) {
            return e.annotationType_ === Bd;
        })(n) || (e[Td][t] = n));
}
function Ld(e) {
    return 'object' == typeof e && 'string' == typeof e.kind;
}
var Id = Symbol('mobx administration'),
    zd = (function () {
        function e(e) {
            (void 0 === e && (e = 'Atom'),
                (this.name_ = void 0),
                (this.isPendingUnobservation_ = !1),
                (this.isBeingObserved_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Uh.NOT_TRACKING_),
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
                return hp(this);
            }),
            (t.reportChanged = function () {
                (fp(), pp(this), dp());
            }),
            (t.toString = function () {
                return this.name_;
            }),
            e
        );
    })(),
    Dd = vd('Atom', zd);
function Vd(e, t, n) {
    (void 0 === t && (t = sd), void 0 === n && (n = sd));
    var r,
        i = new zd(e);
    return (t !== sd && Fp(Dp, i, t, r), n !== sd && Mp(i, n), i);
}
var Md = {
    structural: function (e, t) {
        return uy(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
    shallow: function (e, t) {
        return uy(e, t, 1);
    },
};
function Fd(e, t, n) {
    return nv(e)
        ? e
        : Array.isArray(e)
          ? Oh.array(e, { name: n })
          : fd(e)
            ? Oh.object(e, void 0, { name: n })
            : yd(e)
              ? Oh.map(e, { name: n })
              : gd(e)
                ? Oh.set(e, { name: n })
                : 'function' != typeof e || Ap(e) || Zp(e)
                  ? e
                  : dd(e)
                    ? Yp(e)
                    : jp(n, e);
}
function Ud(e) {
    return e;
}
var Bd = 'override';
function $d(e, t) {
    return { annotationType_: e, options_: t, make_: qd, extend_: Hd, decorate_20223_: Wd };
}
function qd(e, t, n, r) {
    var i;
    if (null != (i = this.options_) && i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (Ap(n.value)) return 1;
    var o = Kd(e, this, t, n, !1);
    return (Zf(r, t, o), 2);
}
function Hd(e, t, n, r) {
    var i = Kd(e, this, t, n);
    return e.defineProperty_(t, i, r);
}
function Wd(e, t) {
    var n = t.kind,
        r = t.name,
        i = t.addInitializer,
        o = this;
    if ('field' != n) {
        var a, s, u, l, c, f;
        if ('method' == n)
            return (
                Ap(e) ||
                    ((s = e),
                    (e = Ih(
                        null != (u = null == (l = o.options_) ? void 0 : l.name) ? u : r.toString(),
                        s,
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
        Qf(
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
            Rd(this, r, o);
        });
}
function Kd(e, t, n, r, i) {
    var o, a, s, u, l, c, f, d;
    (void 0 === i && (i = sp.safeDescriptors), (d = r), t.annotationType_, d.value);
    var h,
        p = r.value;
    null != (o = t.options_) && o.bound && (p = p.bind(null != (h = e.proxy_) ? h : e.target_));
    return {
        value: Ih(
            null != (a = null == (s = t.options_) ? void 0 : s.name) ? a : n.toString(),
            p,
            null != (u = null == (l = t.options_) ? void 0 : l.autoAction) && u,
            null != (c = t.options_) && c.bound ? (null != (f = e.proxy_) ? f : e.target_) : void 0,
        ),
        configurable: !i || e.isPlainObject_,
        enumerable: !1,
        writable: !i,
    };
}
function Qd(e, t) {
    return { annotationType_: e, options_: t, make_: Gd, extend_: Xd, decorate_20223_: Yd };
}
function Gd(e, t, n, r) {
    var i;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (
        null != (i = this.options_) &&
        i.bound &&
        (!wd(e.target_, t) || !Zp(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
    )
        return 0;
    if (Zp(n.value)) return 1;
    var o = Jd(e, this, t, n, !1, !1);
    return (Zf(r, t, o), 2);
}
function Xd(e, t, n, r) {
    var i,
        o = Jd(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
    return e.defineProperty_(t, o, r);
}
function Yd(e, t) {
    var n,
        r = t.name,
        i = t.addInitializer;
    return (
        Zp(e) || (e = Yp(e)),
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
function Jd(e, t, n, r, i, o) {
    var a;
    (void 0 === o && (o = sp.safeDescriptors), (a = r), t.annotationType_, a.value);
    var s,
        u = r.value;
    (Zp(u) || (u = Yp(u)), i) && ((u = u.bind(null != (s = e.proxy_) ? s : e.target_)).isMobXFlow = !0);
    return { value: u, configurable: !o || e.isPlainObject_, enumerable: !1, writable: !o };
}
function Zd(e, t) {
    return { annotationType_: e, options_: t, make_: eh, extend_: th, decorate_20223_: nh };
}
function eh(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function th(e, t, n, r) {
    var i;
    return (
        (i = n),
        this.annotationType_,
        i.get,
        e.defineComputedProperty_(t, Od({}, this.options_, { get: n.get, set: n.set }), r)
    );
}
function nh(e, t) {
    var n = this,
        r = t.name;
    return (
        (0, t.addInitializer)(function () {
            var t = Uv(this)[Id],
                i = Od({}, n.options_, { get: e, context: this });
            (i.name || (i.name = 'ObservableObject.' + r.toString()), t.values_.set(r, new Hh(i)));
        }),
        function () {
            return this[Id].getObservablePropValue_(r);
        }
    );
}
function rh(e, t) {
    return { annotationType_: e, options_: t, make_: ih, extend_: oh, decorate_20223_: ah };
}
function ih(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function oh(e, t, n, r) {
    var i, o;
    return (
        this.annotationType_,
        e.defineObservableProperty_(
            t,
            n.value,
            null != (i = null == (o = this.options_) ? void 0 : o.enhancer) ? i : Fd,
            r,
        )
    );
}
function ah(e, t) {
    var n = this,
        r = t.kind,
        i = t.name,
        o = new WeakSet();
    function a(e, t) {
        var r,
            a,
            s = Uv(e)[Id],
            u = new Fh(
                t,
                null != (r = null == (a = n.options_) ? void 0 : a.enhancer) ? r : Fd,
                'ObservableObject.' + i.toString(),
                !1,
            );
        (s.values_.set(i, u), o.add(e));
    }
    if ('accessor' == r)
        return {
            get: function () {
                return (o.has(this) || a(this, e.get.call(this)), this[Id].getObservablePropValue_(i));
            },
            set: function (e) {
                return (o.has(this) || a(this, e), this[Id].setObservablePropValue_(i, e));
            },
            init: function (e) {
                return (o.has(this) || a(this, e), e);
            },
        };
}
var sh = 'true',
    uh = lh();
function lh(e) {
    return { annotationType_: sh, options_: e, make_: ch, extend_: fh, decorate_20223_: dh };
}
function ch(e, t, n, r) {
    var i, o, a, s;
    if (n.get) return Nh.make_(e, t, n, r);
    if (n.set) {
        var u = Ih(t.toString(), n.set);
        return r === e.target_
            ? null === e.defineProperty_(t, { configurable: !sp.safeDescriptors || e.isPlainObject_, set: u })
                ? 0
                : 2
            : (Zf(r, t, { configurable: !0, set: u }), 2);
    }
    if (r !== e.target_ && 'function' == typeof n.value)
        return dd(n.value)
            ? (null != (s = this.options_) && s.autoBind ? Yp.bound : Yp).make_(e, t, n, r)
            : (null != (a = this.options_) && a.autoBind ? jp.bound : jp).make_(e, t, n, r);
    var l,
        c = !1 === (null == (i = this.options_) ? void 0 : i.deep) ? Oh.ref : Oh;
    'function' == typeof n.value &&
        null != (o = this.options_) &&
        o.autoBind &&
        (n.value = n.value.bind(null != (l = e.proxy_) ? l : e.target_));
    return c.make_(e, t, n, r);
}
function fh(e, t, n, r) {
    var i, o, a;
    if (n.get) return Nh.extend_(e, t, n, r);
    if (n.set)
        return e.defineProperty_(
            t,
            { configurable: !sp.safeDescriptors || e.isPlainObject_, set: Ih(t.toString(), n.set) },
            r,
        );
    'function' == typeof n.value &&
        null != (i = this.options_) &&
        i.autoBind &&
        (n.value = n.value.bind(null != (a = e.proxy_) ? a : e.target_));
    return (!1 === (null == (o = this.options_) ? void 0 : o.deep) ? Oh.ref : Oh).extend_(e, t, n, r);
}
function dh(e, t) {
    Qf("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var hh = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
function ph(e) {
    return e || hh;
}
Object.freeze(hh);
var vh = rh('observable'),
    yh = rh('observable.ref', { enhancer: Ud }),
    gh = rh('observable.shallow', {
        enhancer: function (e, t, n) {
            return null == e || qv(e) || Pv(e) || Lv(e) || Dv(e)
                ? e
                : Array.isArray(e)
                  ? Oh.array(e, { name: n, deep: !1 })
                  : fd(e)
                    ? Oh.object(e, void 0, { name: n, deep: !1 })
                    : yd(e)
                      ? Oh.map(e, { name: n, deep: !1 })
                      : gd(e)
                        ? Oh.set(e, { name: n, deep: !1 })
                        : void 0;
        },
    }),
    mh = rh('observable.struct', {
        enhancer: function (e, t) {
            return uy(e, t) ? t : e;
        },
    }),
    bh = Ad(vh);
function _h(e) {
    return !0 === e.deep
        ? Fd
        : !1 === e.deep
          ? Ud
          : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
            ? n
            : Fd;
    var t, n, r;
}
function wh(e, t, n) {
    return Ld(t)
        ? vh.decorate_20223_(e, t)
        : ld(t)
          ? void Rd(e, t, vh)
          : nv(e)
            ? e
            : fd(e)
              ? Oh.object(e, t, n)
              : Array.isArray(e)
                ? Oh.array(e, t)
                : yd(e)
                  ? Oh.map(e, t)
                  : gd(e)
                    ? Oh.set(e, t)
                    : 'object' == typeof e && null !== e
                      ? e
                      : Oh.box(e, t);
}
Yf(wh, bh);
var Sh,
    kh,
    xh = {
        box: function (e, t) {
            var n = ph(t);
            return new Fh(e, _h(n), n.name, !0, n.equals);
        },
        array: function (e, t) {
            var n = ph(t);
            return (!1 === sp.useProxies || !1 === n.proxy ? ny : mv)(e, _h(n), n.name);
        },
        map: function (e, t) {
            var n = ph(t);
            return new Rv(e, _h(n), n.name);
        },
        set: function (e, t) {
            var n = ph(t);
            return new zv(e, _h(n), n.name);
        },
        object: function (e, t, n) {
            return ay(function () {
                return Hp(
                    !1 === sp.useProxies || !1 === (null == n ? void 0 : n.proxy)
                        ? Uv({}, n)
                        : (function (e, t) {
                              var n, r;
                              return (
                                  od(),
                                  (e = Uv(e, t)),
                                  null != (r = (n = e[Id]).proxy_) ? r : (n.proxy_ = new Proxy(e, av))
                              );
                          })({}, n),
                    e,
                    t,
                );
            });
        },
        ref: Ad(yh),
        shallow: Ad(gh),
        deep: bh,
        struct: Ad(mh),
    },
    Oh = Yf(wh, xh),
    Eh = 'computed',
    Ph = Zd(Eh),
    Ch = Zd('computed.struct', { equals: Md.structural }),
    Nh = function (e, t) {
        if (Ld(t)) return Ph.decorate_20223_(e, t);
        if (ld(t)) return Rd(e, t, Ph);
        if (fd(e)) return Ad(Zd(Eh, e));
        var n = fd(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new Hh(n));
    };
(Object.assign(Nh, Ph), (Nh.struct = Ad(Ch)));
var jh,
    Th = 0,
    Ah = 1,
    Rh = null != (Sh = null == (kh = Jf(function () {}, 'name')) ? void 0 : kh.configurable) && Sh,
    Lh = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
function Ih(e, t, n, r) {
    function i() {
        return zh(e, n, t, r || this, arguments);
    }
    return (
        void 0 === n && (n = !1),
        (i.isMobxAction = !0),
        (i.toString = function () {
            return t.toString();
        }),
        Rh && ((Lh.value = e), Zf(i, 'name', Lh)),
        i
    );
}
function zh(e, t, n, r, i) {
    var o = (function (e, t, n, r) {
        var i = !1,
            o = 0,
            a = sp.trackingDerivation,
            s = !t || !a;
        fp();
        var u = sp.allowStateChanges;
        s && (Zh(), (u = Dh(!0)));
        var l = tp(!0),
            c = {
                runAsAction_: s,
                prevDerivation_: a,
                prevAllowStateChanges_: u,
                prevAllowStateReads_: l,
                notifySpy_: i,
                startTime_: o,
                actionId_: Ah++,
                parentActionId_: Th,
            };
        return ((Th = c.actionId_), c);
    })(0, t);
    try {
        return n.apply(r, i);
    } catch (a) {
        throw ((o.error_ = a), a);
    } finally {
        !(function (e) {
            Th !== e.actionId_ && Qf(30);
            ((Th = e.parentActionId_), void 0 !== e.error_ && (sp.suppressReactionErrors = !0));
            (Vh(e.prevAllowStateChanges_), np(e.prevAllowStateReads_), dp(), e.runAsAction_ && ep(e.prevDerivation_));
            sp.suppressReactionErrors = !1;
        })(o);
    }
}
function Dh(e) {
    var t = sp.allowStateChanges;
    return ((sp.allowStateChanges = e), t);
}
function Vh(e) {
    sp.allowStateChanges = e;
}
jh = Symbol.toPrimitive;
var Mh,
    Fh = (function (e) {
        function t(t, n, r, i, o) {
            var a;
            return (
                void 0 === r && (r = 'ObservableValue'),
                void 0 === o && (o = Md.default),
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
        Ed(t, e);
        var n = t.prototype;
        return (
            (n.dehanceValue = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
                (this.value_, (e = this.prepareNewValue_(e)) !== sp.UNCHANGED && this.setNewValue_(e));
            }),
            (n.prepareNewValue_ = function (e) {
                if (sv(this)) {
                    var t = lv(this, { object: this, type: vv, newValue: e });
                    if (!t) return sp.UNCHANGED;
                    e = t.newValue;
                }
                return (
                    (e = this.enhancer(e, this.value_, this.name_)),
                    this.equals(this.value_, e) ? sp.UNCHANGED : e
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
                return uv(this, e);
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
            (n[jh] = function () {
                return this.valueOf();
            }),
            t
        );
    })(zd);
Mh = Symbol.toPrimitive;
var Uh,
    Bh,
    $h,
    qh,
    Hh = (function () {
        function e(e) {
            ((this.dependenciesState_ = Uh.NOT_TRACKING_),
                (this.observing_ = []),
                (this.newObserving_ = null),
                (this.isBeingObserved_ = !1),
                (this.isPendingUnobservation_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Uh.UP_TO_DATE_),
                (this.unboundDepsCount_ = 0),
                (this.value_ = new Kh(null)),
                (this.name_ = void 0),
                (this.triggeredBy_ = void 0),
                (this.isComputing_ = !1),
                (this.isRunningSetter_ = !1),
                (this.derivation = void 0),
                (this.setter_ = void 0),
                (this.isTracing_ = $h.NONE),
                (this.scope_ = void 0),
                (this.equals_ = void 0),
                (this.requiresReaction_ = void 0),
                (this.keepAlive_ = void 0),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                e.get || Qf(31),
                (this.derivation = e.get),
                (this.name_ = e.name || 'ComputedValue'),
                e.set && (this.setter_ = Ih('ComputedValue-setter', e.set)),
                (this.equals_ = e.equals || (e.compareStructural || e.struct ? Md.structural : Md.default)),
                (this.scope_ = e.context),
                (this.requiresReaction_ = e.requiresReaction),
                (this.keepAlive_ = !!e.keepAlive));
        }
        var t = e.prototype;
        return (
            (t.onBecomeStale_ = function () {
                !(function (e) {
                    if (e.lowestObserverState_ !== Uh.UP_TO_DATE_) return;
                    ((e.lowestObserverState_ = Uh.POSSIBLY_STALE_),
                        e.observers_.forEach(function (e) {
                            e.dependenciesState_ === Uh.UP_TO_DATE_ &&
                                ((e.dependenciesState_ = Uh.POSSIBLY_STALE_), e.onBecomeStale_());
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
                    (this.isComputing_ && Qf(32, this.name_, this.derivation),
                    0 !== sp.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                ) {
                    if ((hp(this), Gh(this))) {
                        var e = sp.trackingContext;
                        (this.keepAlive_ && !e && (sp.trackingContext = this),
                            this.trackAndCompute() &&
                                (function (e) {
                                    if (e.lowestObserverState_ === Uh.STALE_) return;
                                    ((e.lowestObserverState_ = Uh.STALE_),
                                        e.observers_.forEach(function (t) {
                                            t.dependenciesState_ === Uh.POSSIBLY_STALE_
                                                ? (t.dependenciesState_ = Uh.STALE_)
                                                : t.dependenciesState_ === Uh.UP_TO_DATE_ &&
                                                  (e.lowestObserverState_ = Uh.UP_TO_DATE_);
                                        }));
                                })(this),
                            (sp.trackingContext = e));
                    }
                } else Gh(this) && (this.warnAboutUntrackedRead_(), fp(), (this.value_ = this.computeValue_(!1)), dp());
                var t = this.value_;
                if (Qh(t)) throw t.cause;
                return t;
            }),
            (t.set = function (e) {
                if (this.setter_) {
                    (this.isRunningSetter_ && Qf(33, this.name_), (this.isRunningSetter_ = !0));
                    try {
                        this.setter_.call(this.scope_, e);
                    } finally {
                        this.isRunningSetter_ = !1;
                    }
                } else Qf(34, this.name_);
            }),
            (t.trackAndCompute = function () {
                var e = this.value_,
                    t = this.dependenciesState_ === Uh.NOT_TRACKING_,
                    n = this.computeValue_(!0),
                    r = t || Qh(e) || Qh(n) || !this.equals_(e, n);
                return (r && (this.value_ = n), r);
            }),
            (t.computeValue_ = function (e) {
                this.isComputing_ = !0;
                var t,
                    n = Dh(!1);
                if (e) t = Xh(this, this.derivation, this.scope_);
                else if (!0 === sp.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                else
                    try {
                        t = this.derivation.call(this.scope_);
                    } catch (r) {
                        t = new Kh(r);
                    }
                return (Vh(n), (this.isComputing_ = !1), t);
            }),
            (t.suspend_ = function () {
                this.keepAlive_ || (Yh(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
                var n = this,
                    r = !0,
                    i = void 0;
                return Rp(function () {
                    var o = n.get();
                    if (!r || t) {
                        var a = Zh();
                        (e({
                            observableKind: 'computed',
                            debugObjectName: n.name_,
                            type: vv,
                            object: n,
                            newValue: o,
                            oldValue: i,
                        }),
                            ep(a));
                    }
                    ((r = !1), (i = o));
                });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
                return this.name_ + '[' + this.derivation.toString() + ']';
            }),
            (t.valueOf = function () {
                return _d(this.get());
            }),
            (t[Mh] = function () {
                return this.valueOf();
            }),
            e
        );
    })(),
    Wh = vd('ComputedValue', Hh);
(((Bh = Uh || (Uh = {}))[(Bh.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
    (Bh[(Bh.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
    (Bh[(Bh.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
    (Bh[(Bh.STALE_ = 2)] = 'STALE_'),
    ((qh = $h || ($h = {}))[(qh.NONE = 0)] = 'NONE'),
    (qh[(qh.LOG = 1)] = 'LOG'),
    (qh[(qh.BREAK = 2)] = 'BREAK'));
var Kh = function (e) {
    ((this.cause = void 0), (this.cause = e));
};
function Qh(e) {
    return e instanceof Kh;
}
function Gh(e) {
    switch (e.dependenciesState_) {
        case Uh.UP_TO_DATE_:
            return !1;
        case Uh.NOT_TRACKING_:
        case Uh.STALE_:
            return !0;
        case Uh.POSSIBLY_STALE_:
            for (var t = tp(!0), n = Zh(), r = e.observing_, i = r.length, o = 0; o < i; o++) {
                var a = r[o];
                if (Wh(a)) {
                    if (sp.disableErrorBoundaries) a.get();
                    else
                        try {
                            a.get();
                        } catch (s) {
                            return (ep(n), np(t), !0);
                        }
                    if (e.dependenciesState_ === Uh.STALE_) return (ep(n), np(t), !0);
                }
            }
            return (rp(e), ep(n), np(t), !1);
    }
}
function Xh(e, t, n) {
    var r = tp(!0);
    (rp(e),
        (e.newObserving_ = new Array(e.observing_.length + 100)),
        (e.unboundDepsCount_ = 0),
        (e.runId_ = ++sp.runId));
    var i,
        o = sp.trackingDerivation;
    if (((sp.trackingDerivation = e), sp.inBatch++, !0 === sp.disableErrorBoundaries)) i = t.call(n);
    else
        try {
            i = t.call(n);
        } catch (a) {
            i = new Kh(a);
        }
    return (
        sp.inBatch--,
        (sp.trackingDerivation = o),
        (function (e) {
            for (
                var t = e.observing_,
                    n = (e.observing_ = e.newObserving_),
                    r = Uh.UP_TO_DATE_,
                    i = 0,
                    o = e.unboundDepsCount_,
                    a = 0;
                a < o;
                a++
            ) {
                var s = n[a];
                (0 === s.diffValue_ && ((s.diffValue_ = 1), i !== a && (n[i] = s), i++),
                    s.dependenciesState_ > r && (r = s.dependenciesState_));
            }
            ((n.length = i), (e.newObserving_ = null), (o = t.length));
            for (; o--; ) {
                var u = t[o];
                (0 === u.diffValue_ && lp(u, e), (u.diffValue_ = 0));
            }
            for (; i--; ) {
                var l = n[i];
                1 === l.diffValue_ && ((l.diffValue_ = 0), up(l, e));
            }
            r !== Uh.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        np(r),
        i
    );
}
function Yh(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) lp(t[n], e);
    e.dependenciesState_ = Uh.NOT_TRACKING_;
}
function Jh(e) {
    var t = Zh();
    try {
        return e();
    } finally {
        ep(t);
    }
}
function Zh() {
    var e = sp.trackingDerivation;
    return ((sp.trackingDerivation = null), e);
}
function ep(e) {
    sp.trackingDerivation = e;
}
function tp(e) {
    var t = sp.allowStateReads;
    return ((sp.allowStateReads = e), t);
}
function np(e) {
    sp.allowStateReads = e;
}
function rp(e) {
    if (e.dependenciesState_ !== Uh.UP_TO_DATE_) {
        e.dependenciesState_ = Uh.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = Uh.UP_TO_DATE_;
    }
}
var ip = function () {
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
    op = !0,
    ap = !1,
    sp = (function () {
        var e = Xf();
        return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (op = !1),
            e.__mobxGlobals && e.__mobxGlobals.version !== new ip().version && (op = !1),
            op
                ? e.__mobxGlobals
                    ? ((e.__mobxInstanceCount += 1),
                      e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                      e.__mobxGlobals)
                    : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new ip()))
                : (setTimeout(function () {
                      ap || Qf(35);
                  }, 1),
                  new ip())
        );
    })();
function up(e, t) {
    (e.observers_.add(t),
        e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_));
}
function lp(e, t) {
    (e.observers_.delete(t), 0 === e.observers_.size && cp(e));
}
function cp(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), sp.pendingUnobservations.push(e));
}
function fp() {
    sp.inBatch++;
}
function dp() {
    if (0 == --sp.inBatch) {
        mp();
        for (var e = sp.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            ((n.isPendingUnobservation_ = !1),
                0 === n.observers_.size &&
                    (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof Hh && n.suspend_()));
        }
        sp.pendingUnobservations = [];
    }
}
function hp(e) {
    var t = sp.trackingDerivation;
    return null !== t
        ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ && sp.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
          e.isBeingObserved_)
        : (0 === e.observers_.size && sp.inBatch > 0 && cp(e), !1);
}
function pp(e) {
    e.lowestObserverState_ !== Uh.STALE_ &&
        ((e.lowestObserverState_ = Uh.STALE_),
        e.observers_.forEach(function (e) {
            (e.dependenciesState_ === Uh.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = Uh.STALE_));
        }));
}
var vp = (function () {
        function e(e, t, n, r) {
            (void 0 === e && (e = 'Reaction'),
                (this.name_ = void 0),
                (this.onInvalidate_ = void 0),
                (this.errorHandler_ = void 0),
                (this.requiresObservable_ = void 0),
                (this.observing_ = []),
                (this.newObserving_ = []),
                (this.dependenciesState_ = Uh.NOT_TRACKING_),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.unboundDepsCount_ = 0),
                (this.isDisposed_ = !1),
                (this.isScheduled_ = !1),
                (this.isTrackPending_ = !1),
                (this.isRunning_ = !1),
                (this.isTracing_ = $h.NONE),
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
                this.isScheduled_ || ((this.isScheduled_ = !0), sp.pendingReactions.push(this), mp());
            }),
            (t.isScheduled = function () {
                return this.isScheduled_;
            }),
            (t.runReaction_ = function () {
                if (!this.isDisposed_) {
                    (fp(), (this.isScheduled_ = !1));
                    var e = sp.trackingContext;
                    if (((sp.trackingContext = this), Gh(this))) {
                        this.isTrackPending_ = !0;
                        try {
                            this.onInvalidate_();
                        } catch (t) {
                            this.reportExceptionInDerivation_(t);
                        }
                    }
                    ((sp.trackingContext = e), dp());
                }
            }),
            (t.track = function (e) {
                if (!this.isDisposed_) {
                    (fp(), (this.isRunning_ = !0));
                    var t = sp.trackingContext;
                    sp.trackingContext = this;
                    var n = Xh(this, e, void 0);
                    ((sp.trackingContext = t),
                        (this.isRunning_ = !1),
                        (this.isTrackPending_ = !1),
                        this.isDisposed_ && Yh(this),
                        Qh(n) && this.reportExceptionInDerivation_(n.cause),
                        dp());
                }
            }),
            (t.reportExceptionInDerivation_ = function (e) {
                var t = this;
                if (this.errorHandler_) this.errorHandler_(e, this);
                else {
                    if (sp.disableErrorBoundaries) throw e;
                    var n = "[mobx] uncaught error in '" + this + "'";
                    (sp.suppressReactionErrors || console.error(n, e),
                        sp.globalReactionErrorHandlers.forEach(function (n) {
                            return n(e, t);
                        }));
                }
            }),
            (t.dispose = function () {
                this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (fp(), Yh(this), dp()));
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
    yp = 100,
    gp = function (e) {
        return e();
    };
function mp() {
    sp.inBatch > 0 || sp.isRunningReactions || gp(bp);
}
function bp() {
    sp.isRunningReactions = !0;
    for (var e = sp.pendingReactions, t = 0; e.length > 0; ) {
        ++t === yp && (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
    }
    sp.isRunningReactions = !1;
}
var _p = vd('Reaction', vp);
var wp = 'action',
    Sp = 'autoAction',
    kp = '<unnamed action>',
    xp = $d(wp),
    Op = $d('action.bound', { bound: !0 }),
    Ep = $d(Sp, { autoAction: !0 }),
    Pp = $d('autoAction.bound', { autoAction: !0, bound: !0 });
function Cp(e) {
    return function (t, n) {
        return ud(t)
            ? Ih(t.name || kp, t, e)
            : ud(n)
              ? Ih(t, n, e)
              : Ld(n)
                ? (e ? Ep : xp).decorate_20223_(t, n)
                : ld(n)
                  ? Rd(t, n, e ? Ep : xp)
                  : ld(t)
                    ? Ad($d(e ? Sp : wp, { name: t, autoAction: e }))
                    : void 0;
    };
}
var Np = Cp(!1);
Object.assign(Np, xp);
var jp = Cp(!0);
function Tp(e) {
    return zh(e.name, !1, e, this, void 0);
}
function Ap(e) {
    return ud(e) && !0 === e.isMobxAction;
}
function Rp(e, t) {
    var n, r, i, o, a;
    void 0 === t && (t = nd);
    var s,
        u = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun';
    if (!t.scheduler && !t.delay)
        s = new vp(
            u,
            function () {
                this.track(f);
            },
            t.onError,
            t.requiresObservable,
        );
    else {
        var l = Ip(t),
            c = !1;
        s = new vp(
            u,
            function () {
                c ||
                    ((c = !0),
                    l(function () {
                        ((c = !1), s.isDisposed_ || s.track(f));
                    }));
            },
            t.onError,
            t.requiresObservable,
        );
    }
    function f() {
        e(s);
    }
    return (
        (null != (i = t) && null != (o = i.signal) && o.aborted) || s.schedule_(),
        s.getDisposer_(null == (a = t) ? void 0 : a.signal)
    );
}
(Object.assign(jp, Ep), (Np.bound = Ad(Op)), (jp.bound = Ad(Pp)));
var Lp = function (e) {
    return e();
};
function Ip(e) {
    return e.scheduler
        ? e.scheduler
        : e.delay
          ? function (t) {
                return setTimeout(t, e.delay);
            }
          : Lp;
}
function zp(e, t, n) {
    var r, i, o, a;
    void 0 === n && (n = nd);
    var s,
        u,
        l,
        c,
        f = null != (r = n.name) ? r : 'Reaction',
        d = Np(
            f,
            n.onError
                ? ((s = n.onError),
                  (u = t),
                  function () {
                      try {
                          return u.apply(this, arguments);
                      } catch (e) {
                          s.call(this, e);
                      }
                  })
                : t,
        ),
        h = !n.scheduler && !n.delay,
        p = Ip(n),
        v = !0,
        y = !1,
        g = n.compareStructural ? Md.structural : n.equals || Md.default,
        m = new vp(
            f,
            function () {
                v || h ? b() : y || ((y = !0), p(b));
            },
            n.onError,
            n.requiresObservable,
        );
    function b() {
        if (((y = !1), !m.isDisposed_)) {
            var t = !1;
            (m.track(function () {
                var n = (function (e, t) {
                    var n = Dh(e);
                    try {
                        return t();
                    } finally {
                        Vh(n);
                    }
                })(!1, function () {
                    return e(m);
                });
                ((t = v || !g(l, n)), (c = l), (l = n));
            }),
                ((v && n.fireImmediately) || (!v && t)) && d(l, c, m),
                (v = !1));
        }
    }
    return (
        (null != (i = n) && null != (o = i.signal) && o.aborted) || m.schedule_(),
        m.getDisposer_(null == (a = n) ? void 0 : a.signal)
    );
}
var Dp = 'onBO',
    Vp = 'onBUO';
function Mp(e, t, n) {
    return Fp(Vp, e, t, n);
}
function Fp(e, t, n, r) {
    var i = ry(t),
        o = ud(r) ? r : n,
        a = e + 'L';
    return (
        i[a] ? i[a].add(o) : (i[a] = new Set([o])),
        function () {
            var e = i[a];
            e && (e.delete(o), 0 === e.size && delete i[a]);
        }
    );
}
var Up = 'never',
    Bp = 'always',
    $p = 'observed';
function qp(e) {
    !0 === e.isolateGlobalState &&
        (function () {
            if (((sp.pendingReactions.length || sp.inBatch || sp.isRunningReactions) && Qf(36), (ap = !0), op)) {
                var e = Xf();
                (0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0), (sp = new ip()));
            }
        })();
    var t,
        n,
        r = e.useProxies,
        i = e.enforceActions;
    if (
        (void 0 !== r && (sp.useProxies = r === Bp || (r !== Up && 'undefined' != typeof Proxy)),
        'ifavailable' === r && (sp.verifyProxies = !0),
        void 0 !== i)
    ) {
        var o = i === Bp ? Bp : i === $p;
        ((sp.enforceActions = o), (sp.allowStateChanges = !0 !== o && o !== Bp));
    }
    ([
        'computedRequiresReaction',
        'reactionRequiresObservable',
        'observableRequiresReaction',
        'disableErrorBoundaries',
        'safeDescriptors',
    ].forEach(function (t) {
        t in e && (sp[t] = !!e[t]);
    }),
        (sp.allowStateReads = !sp.observableRequiresReaction),
        e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = gp),
            (gp = function (e) {
                return t(function () {
                    return n(e);
                });
            })));
}
function Hp(e, t, n, r) {
    var i = Sd(t);
    return (
        ay(function () {
            var t = Uv(e, r)[Id];
            bd(i).forEach(function (e) {
                t.extend_(e, i[e], !n || !(e in n) || n[e]);
            });
        }),
        e
    );
}
function Wp(e) {
    var t,
        n = { name: e.name_ };
    return (
        e.observing_ &&
            e.observing_.length > 0 &&
            (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(Wp)),
        n
    );
}
var Kp = 0;
function Qp() {
    this.message = 'FLOW_CANCELLED';
}
Qp.prototype = Object.create(Error.prototype);
var Gp = Qd('flow'),
    Xp = Qd('flow.bound', { bound: !0 }),
    Yp = Object.assign(function (e, t) {
        if (Ld(t)) return Gp.decorate_20223_(e, t);
        if (ld(t)) return Rd(e, t, Gp);
        var n = e,
            r = n.name || '<unnamed flow>',
            i = function () {
                var e,
                    t = arguments,
                    i = ++Kp,
                    o = Np(r + ' - runid: ' + i + ' - init', n).apply(this, t),
                    a = void 0,
                    s = new Promise(function (t, n) {
                        var s = 0;
                        function u(e) {
                            var t;
                            a = void 0;
                            try {
                                t = Np(r + ' - runid: ' + i + ' - yield ' + s++, o.next).call(o, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function l(e) {
                            var t;
                            a = void 0;
                            try {
                                t = Np(r + ' - runid: ' + i + ' - yield ' + s++, o.throw).call(o, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function c(e) {
                            if (!ud(null == e ? void 0 : e.then))
                                return e.done ? t(e.value) : (a = Promise.resolve(e.value)).then(u, l);
                            e.then(c, n);
                        }
                        ((e = n), u(void 0));
                    });
                return (
                    (s.cancel = Np(r + ' - runid: ' + i + ' - cancel', function () {
                        try {
                            a && Jp(a);
                            var t = o.return(void 0),
                                n = Promise.resolve(t.value);
                            (n.then(sd, sd), Jp(n), e(new Qp()));
                        } catch (r) {
                            e(r);
                        }
                    })),
                    s
                );
            };
        return ((i.isMobXFlow = !0), i);
    }, Gp);
function Jp(e) {
    ud(e.cancel) && e.cancel();
}
function Zp(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function ev(e, t) {
    if (void 0 === t) return Wh(e);
    if (!1 === qv(e)) return !1;
    if (!e[Id].values_.has(t)) return !1;
    var n = ry(e, t);
    return Wh(n);
}
function tv(e, t) {
    return ev(e, t);
}
function nv(e) {
    return (function (e, t) {
        return !!e && (qv(e) || !!e[Id] || Dd(e) || _p(e) || Wh(e));
    })(e);
}
function rv(e, t, n, r) {
    return ud(n)
        ? (function (e, t, n, r) {
              return iy(e, t).observe_(n, r);
          })(e, t, n, r)
        : (function (e, t, n) {
              return iy(e).observe_(t, n);
          })(e, t, n);
}
function iv(e, t) {
    (void 0 === t && (t = void 0), fp());
    try {
        return e.apply(t);
    } finally {
        dp();
    }
}
function ov(e) {
    return e[Id];
}
Yp.bound = Ad(Xp);
var av = {
    has: function (e, t) {
        return ov(e).has_(t);
    },
    get: function (e, t) {
        return ov(e).get_(t);
    },
    set: function (e, t, n) {
        var r;
        return !!ld(t) && (null == (r = ov(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
        var n;
        return !!ld(t) && (null == (n = ov(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
        var r;
        return null == (r = ov(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
        return ov(e).ownKeys_();
    },
    preventExtensions: function (e) {
        Qf(13);
    },
};
function sv(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
}
function uv(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
        n.push(t),
        ad(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function lv(e, t) {
    var n = Zh();
    try {
        for (
            var r = [].concat(e.interceptors_ || []), i = 0, o = r.length;
            i < o && ((t = r[i](t)) && !t.type && Qf(14), t);
            i++
        );
        return t;
    } finally {
        ep(n);
    }
}
function cv(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
}
function fv(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
        n.push(t),
        ad(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function dv(e, t) {
    var n = Zh(),
        r = e.changeListeners_;
    if (r) {
        for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](t);
        ep(n);
    }
}
function hv(e, t, n) {
    return (
        ay(function () {
            var r = Uv(e, n)[Id];
            (null != t ||
                (t = (function (e) {
                    return (wd(e, Td) || hd(e, Td, Od({}, e[Td])), e[Td]);
                })(e)),
                bd(t).forEach(function (e) {
                    return r.make_(e, t[e]);
                }));
        }),
        e
    );
}
var pv = 'splice',
    vv = 'update',
    yv = {
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
            Qf(15);
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
                return uv(this, e);
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
                ('number' != typeof e || isNaN(e) || e < 0) && Qf('Out of range: ' + e);
                var t = this.values_.length;
                if (e !== t)
                    if (e > t) {
                        for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
                        this.spliceWithArray_(t, 0, n);
                    } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
                (e !== this.lastKnownLength_ && Qf(16),
                    (this.lastKnownLength_ += t),
                    this.legacyMode_ && t > 0 && ty(e + t + 1));
            }),
            (t.spliceWithArray_ = function (e, t, n) {
                var r = this;
                this.atom_;
                var i = this.values_.length;
                if (
                    (void 0 === e ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
                    (t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e))),
                    void 0 === n && (n = td),
                    sv(this))
                ) {
                    var o = lv(this, { object: this.proxy_, type: pv, index: e, removedCount: t, added: n });
                    if (!o) return td;
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
                var s = this.spliceItemsIntoValues_(e, t, n);
                return ((0 === t && 0 === n.length) || this.notifyArraySplice_(e, n, s), this.dehanceValues_(s));
            }),
            (t.spliceItemsIntoValues_ = function (e, t, n) {
                var r;
                if (n.length < 1e4) return (r = this.values_).splice.apply(r, [e, t].concat(n));
                var i = this.values_.slice(e, e + t),
                    o = this.values_.slice(e + t);
                this.values_.length += n.length - t;
                for (var a = 0; a < n.length; a++) this.values_[e + a] = n[a];
                for (var s = 0; s < o.length; s++) this.values_[e + n.length + s] = o[s];
                return i;
            }),
            (t.notifyArrayChildUpdate_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    i = cv(this),
                    o =
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
                (this.atom_.reportChanged(), i && dv(this, o));
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    i = cv(this),
                    o =
                        i || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  debugObjectName: this.atom_.name_,
                                  type: pv,
                                  index: e,
                                  removed: n,
                                  added: t,
                                  removedCount: n.length,
                                  addedCount: t.length,
                              }
                            : null;
                (this.atom_.reportChanged(), i && dv(this, o));
            }),
            (t.get_ = function (e) {
                if (!(this.legacyMode_ && e >= this.values_.length))
                    return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]));
                console.warn('[mobx] Out of bounds read: ' + e);
            }),
            (t.set_ = function (e, t) {
                var n = this.values_;
                if ((this.legacyMode_ && e > n.length && Qf(17, e, n.length), e < n.length)) {
                    this.atom_;
                    var r = n[e];
                    if (sv(this)) {
                        var i = lv(this, { type: vv, object: this.proxy_, index: e, newValue: t });
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
function mv(e, t, n, r) {
    return (
        void 0 === n && (n = 'ObservableArray'),
        void 0 === r && (r = !1),
        od(),
        ay(function () {
            var i = new gv(n, t, r, !1);
            pd(i.values_, Id, i);
            var o = new Proxy(i.values_, yv);
            return ((i.proxy_ = o), e && e.length && i.spliceWithArray_(0, 0, e), o);
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
        var o = this[Id];
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
        return (sp.trackingDerivation && Qf(37, 'reverse'), this.replace(this.slice().reverse()), this);
    },
    sort: function () {
        sp.trackingDerivation && Qf(37, 'sort');
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
function Sv(e) {
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
function kv(e) {
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
    _v('every', Sv),
    _v('filter', Sv),
    _v('find', Sv),
    _v('findIndex', Sv),
    _v('findLast', Sv),
    _v('findLastIndex', Sv),
    _v('flatMap', Sv),
    _v('forEach', Sv),
    _v('map', Sv),
    _v('some', Sv),
    _v('toReversed', Sv),
    _v('reduce', kv),
    _v('reduceRight', kv));
var xv,
    Ov,
    Ev = vd('ObservableArrayAdministration', gv);
function Pv(e) {
    return cd(e) && Ev(e[Id]);
}
var Cv = {},
    Nv = 'add',
    jv = 'delete';
((xv = Symbol.iterator), (Ov = Symbol.toStringTag));
var Tv,
    Av,
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
                ud(Map) || Qf(18),
                ay(function () {
                    ((r.keysAtom_ = Vd('ObservableMap.keys()')),
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
                if (!sp.trackingDerivation) return this.has_(e);
                var n = this.hasMap_.get(e);
                if (!n) {
                    var r = (n = new Fh(this.has_(e), Ud, 'ObservableMap.key?', !1));
                    (this.hasMap_.set(e, r),
                        Mp(r, function () {
                            return t.hasMap_.delete(e);
                        }));
                }
                return n.get();
            }),
            (t.set = function (e, t) {
                var n = this.has_(e);
                if (sv(this)) {
                    var r = lv(this, { type: n ? vv : Nv, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, sv(this)) && !lv(this, { type: jv, object: this, name: e })) return !1;
                if (this.has_(e)) {
                    var n = cv(this),
                        r = n
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: jv,
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
                if ((t = n.prepareNewValue_(t)) !== sp.UNCHANGED) {
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
                            i = new Fh(t, n.enhancer_, 'ObservableMap.key', !1);
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
                              type: Nv,
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
                return fy({
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
                return fy({
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
                for (var n, r = jd(this); !(n = r()).done; ) {
                    var i = n.value,
                        o = i[0],
                        a = i[1];
                    e.call(t, a, o, this);
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
                                  if (!md) return t;
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
                              : yd(e)
                                ? (e.constructor !== Map && Qf(19, e),
                                  e.forEach(function (e, n) {
                                      return t.set(n, e);
                                  }))
                                : null != e && Qf(20, e);
                    }),
                    this
                );
            }),
            (t.clear = function () {
                var e = this;
                iv(function () {
                    Jh(function () {
                        for (var t, n = jd(e.keys()); !(t = n()).done; ) {
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
                                    if (yd(e) || Lv(e)) return e;
                                    if (Array.isArray(e)) return new Map(e);
                                    if (fd(e)) {
                                        var t = new Map();
                                        for (var n in e) t.set(n, e[n]);
                                        return t;
                                    }
                                    return Qf(21, e);
                                })(e),
                                i = new Map(),
                                o = !1,
                                a = jd(t.data_.keys());
                            !(n = a()).done;
                        ) {
                            var s = n.value;
                            if (!r.has(s))
                                if (t.delete(s)) o = !0;
                                else {
                                    var u = t.data_.get(s);
                                    i.set(s, u);
                                }
                        }
                        for (var l, c = jd(r.entries()); !(l = c()).done; ) {
                            var f = l.value,
                                d = f[0],
                                h = f[1],
                                p = t.data_.has(d);
                            if ((t.set(d, h), t.data_.has(d))) {
                                var v = t.data_.get(d);
                                (i.set(d, v), p || (o = !0));
                            }
                        }
                        if (!o)
                            if (t.data_.size !== i.size) t.keysAtom_.reportChanged();
                            else
                                for (var y = t.data_.keys(), g = i.keys(), m = y.next(), b = g.next(); !m.done; ) {
                                    if (m.value !== b.value) {
                                        t.keysAtom_.reportChanged();
                                        break;
                                    }
                                    ((m = y.next()), (b = g.next()));
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
                return uv(this, e);
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
((Tv = Symbol.iterator), (Av = Symbol.toStringTag));
var zv = (function () {
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
                ud(Set) || Qf(22),
                (this.enhancer_ = function (e, r) {
                    return t(e, r, n);
                }),
                ay(function () {
                    ((r.atom_ = Vd(r.name_)), e && r.replace(e));
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
                    Jh(function () {
                        for (var t, n = jd(e.data_.values()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.forEach = function (e, t) {
                for (var n, r = jd(this); !(n = r()).done; ) {
                    var i = n.value;
                    e.call(t, i, i, this);
                }
            }),
            (t.add = function (e) {
                var t = this;
                if ((this.atom_, sv(this)) && !lv(this, { type: Nv, object: this, newValue: e })) return this;
                if (!this.has(e)) {
                    iv(function () {
                        (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
                    });
                    var n = cv(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: Nv,
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
                if (sv(this) && !lv(this, { type: jv, object: this, oldValue: e })) return !1;
                if (this.has(e)) {
                    var n = cv(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: jv,
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
                return fy({
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
                return fy({
                    next: function () {
                        return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
                    },
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    Dv(e) && (e = new Set(e)),
                    iv(function () {
                        Array.isArray(e) || gd(e)
                            ? (t.clear(),
                              e.forEach(function (e) {
                                  return t.add(e);
                              }))
                            : null != e && Qf('Cannot initialize set from ' + e);
                    }),
                    this
                );
            }),
            (t.observe_ = function (e, t) {
                return fv(this, e);
            }),
            (t.intercept_ = function (e) {
                return uv(this, e);
            }),
            (t.toJSON = function () {
                return Array.from(this);
            }),
            (t.toString = function () {
                return '[object ObservableSet]';
            }),
            (t[Tv] = function () {
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
                    key: Av,
                    get: function () {
                        return 'Set';
                    },
                },
            ]),
            e
        );
    })(),
    Dv = vd('ObservableSet', zv),
    Vv = Object.create(null),
    Mv = 'remove',
    Fv = (function () {
        function e(e, t, n, r) {
            (void 0 === t && (t = new Map()),
                void 0 === r && (r = uh),
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
                (this.isPlainObject_ = fd(this.target_)));
        }
        var t = e.prototype;
        return (
            (t.getObservablePropValue_ = function (e) {
                return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
                var n = this.values_.get(e);
                if (n instanceof Hh) return (n.set(t), !0);
                if (sv(this)) {
                    var r = lv(this, { type: vv, object: this.proxy_ || this.target_, name: e, newValue: t });
                    if (!r) return null;
                    t = r.newValue;
                }
                if ((t = n.prepareNewValue_(t)) !== sp.UNCHANGED) {
                    var i = cv(this),
                        o = i
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
                    (n.setNewValue_(t), i && dv(this, o));
                }
                return !0;
            }),
            (t.get_ = function (e) {
                return (sp.trackingDerivation && !wd(this.target_, e) && this.has_(e), this.target_[e]);
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
                if (!sp.trackingDerivation) return e in this.target_;
                this.pendingKeys_ || (this.pendingKeys_ = new Map());
                var t = this.pendingKeys_.get(e);
                return (
                    t ||
                        ((t = new Fh(e in this.target_, Ud, 'ObservableObject.key?', !1)), this.pendingKeys_.set(e, t)),
                    t.get()
                );
            }),
            (t.make_ = function (e, t) {
                if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                    if (!(e in this.target_)) {
                        var n;
                        if (null != (n = this.target_[Td]) && n[e]) return;
                        Qf(1, t.annotationType_, this.name_ + '.' + e.toString());
                    }
                    for (var r = this.target_; r && r !== ed; ) {
                        var i = Jf(r, e);
                        if (i) {
                            var o = t.make_(this, e, i, r);
                            if (0 === o) return;
                            if (1 === o) break;
                        }
                        r = Object.getPrototypeOf(r);
                    }
                    Hv(this, t, e);
                }
            }),
            (t.extend_ = function (e, t, n, r) {
                if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                    return this.defineProperty_(e, t, r);
                var i = n.extend_(this, e, t, r);
                return (i && Hv(this, n, e), i);
            }),
            (t.defineProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    fp();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (sv(this)) {
                        var i = lv(this, { object: this.proxy_ || this.target_, name: e, type: Nv, newValue: t.value });
                        if (!i) return null;
                        var o = i.newValue;
                        t.value !== o && (t = Od({}, t, { value: o }));
                    }
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                    } else Zf(this.target_, e, t);
                    this.notifyPropertyAddition_(e, t.value);
                } finally {
                    dp();
                }
                return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
                (void 0 === r && (r = !1), this.keysAtom_);
                try {
                    fp();
                    var i = this.delete_(e);
                    if (!i) return i;
                    if (sv(this)) {
                        var o = lv(this, { object: this.proxy_ || this.target_, name: e, type: Nv, newValue: t });
                        if (!o) return null;
                        t = o.newValue;
                    }
                    var a = $v(e),
                        s = {
                            configurable: !sp.safeDescriptors || this.isPlainObject_,
                            enumerable: !0,
                            get: a.get,
                            set: a.set,
                        };
                    if (r) {
                        if (!Reflect.defineProperty(this.target_, e, s)) return !1;
                    } else Zf(this.target_, e, s);
                    var u = new Fh(t, n, 'ObservableObject.key', !1);
                    (this.values_.set(e, u), this.notifyPropertyAddition_(e, u.value_));
                } finally {
                    dp();
                }
                return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    fp();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (sv(this))
                        if (!lv(this, { object: this.proxy_ || this.target_, name: e, type: Nv, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var i = $v(e),
                        o = {
                            configurable: !sp.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: i.get,
                            set: i.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, o)) return !1;
                    } else Zf(this.target_, e, o);
                    (this.values_.set(e, new Hh(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    dp();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !wd(this.target_, e))) return !0;
                if (sv(this) && !lv(this, { object: this.proxy_ || this.target_, name: e, type: Mv })) return null;
                try {
                    var n, r;
                    fp();
                    var i,
                        o = cv(this),
                        a = this.values_.get(e),
                        s = void 0;
                    if (!a && o) s = null == (i = Jf(this.target_, e)) ? void 0 : i.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (a && (this.values_.delete(e), a instanceof Fh && (s = a.value_), pp(a)),
                        this.keysAtom_.reportChanged(),
                        null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
                        o)
                    ) {
                        var u = {
                            type: Mv,
                            observableKind: 'object',
                            object: this.proxy_ || this.target_,
                            debugObjectName: this.name_,
                            oldValue: s,
                            name: e,
                        };
                        (0, o && dv(this, u));
                    }
                } finally {
                    dp();
                }
                return !0;
            }),
            (t.observe_ = function (e, t) {
                return fv(this, e);
            }),
            (t.intercept_ = function (e) {
                return uv(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
                var n,
                    r,
                    i = cv(this);
                if (i) {
                    var o = i
                        ? {
                              type: Nv,
                              observableKind: 'object',
                              debugObjectName: this.name_,
                              object: this.proxy_ || this.target_,
                              name: e,
                              newValue: t,
                          }
                        : null;
                    i && dv(this, o);
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
function Uv(e, t) {
    var n;
    if (wd(e, Id)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
        i = new Fv(
            e,
            new Map(),
            String(r),
            (function (e) {
                var t;
                return e ? (null != (t = e.defaultDecorator) ? t : lh(e)) : void 0;
            })(t),
        );
    return (hd(e, Id, i), e);
}
var Bv = vd('ObservableObjectAdministration', Fv);
function $v(e) {
    return (
        Vv[e] ||
        (Vv[e] = {
            get: function () {
                return this[Id].getObservablePropValue_(e);
            },
            set: function (t) {
                return this[Id].setObservablePropValue_(e, t);
            },
        })
    );
}
function qv(e) {
    return !!cd(e) && Bv(e[Id]);
}
function Hv(e, t, n) {
    var r;
    null == (r = e.target_[Td]) || delete r[n];
}
var Wv,
    Kv,
    Qv = Zv(0),
    Gv = (function () {
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
    Xv = 0,
    Yv = function () {};
((Wv = Yv),
    (Kv = Array.prototype),
    Object.setPrototypeOf
        ? Object.setPrototypeOf(Wv.prototype, Kv)
        : void 0 !== Wv.prototype.__proto__
          ? (Wv.prototype.__proto__ = Kv)
          : (Wv.prototype = Kv));
var Jv = (function (e, t, n) {
    function r(t, n, r, i) {
        var o;
        return (
            void 0 === r && (r = 'ObservableArray'),
            void 0 === i && (i = !1),
            (o = e.call(this) || this),
            ay(function () {
                var e = new gv(r, n, i, !0);
                ((e.proxy_ = Cd(o)),
                    pd(Cd(o), Id, e),
                    t && t.length && o.spliceWithArray(0, 0, t),
                    Gv && Object.defineProperty(Cd(o), '0', Qv));
            }),
            o
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
            return fy({
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
})(Yv, Symbol.toStringTag, Symbol.iterator);
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
function ey(e) {
    Zf(Jv.prototype, '' + e, Zv(e));
}
function ty(e) {
    if (e > Xv) {
        for (var t = Xv; t < e + 100; t++) ey(t);
        Xv = e;
    }
}
function ny(e, t, n) {
    return new Jv(e, t, n);
}
function ry(e, t) {
    if ('object' == typeof e && null !== e) {
        if (Pv(e)) return (void 0 !== t && Qf(23), e[Id].atom_);
        if (Dv(e)) return e.atom_;
        if (Lv(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return (n || Qf(25, t, oy(e)), n);
        }
        if (qv(e)) {
            if (!t) return Qf(26);
            var r = e[Id].values_.get(t);
            return (r || Qf(27, t, oy(e)), r);
        }
        if (Dd(e) || Wh(e) || _p(e)) return e;
    } else if (ud(e) && _p(e[Id])) return e[Id];
    Qf(28);
}
function iy(e, t) {
    return (
        e || Qf(29),
        void 0 !== t ? iy(ry(e, t)) : Dd(e) || Wh(e) || _p(e) || Lv(e) || Dv(e) ? e : e[Id] ? e[Id] : void Qf(24, e)
    );
}
function oy(e, t) {
    var n;
    if (void 0 !== t) n = ry(e, t);
    else {
        if (Ap(e)) return e.name;
        n = qv(e) || Lv(e) || Dv(e) ? iy(e) : ry(e);
    }
    return n.name_;
}
function ay(e) {
    var t = Zh(),
        n = Dh(!0);
    fp();
    try {
        return e();
    } finally {
        (dp(), Vh(n), ep(t));
    }
}
(Object.entries(bv).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && hd(Jv.prototype, t, n);
}),
    ty(1e3));
var sy = ed.toString;
function uy(e, t, n) {
    return (void 0 === n && (n = -1), ly(e, t, n));
}
function ly(e, t, n, r, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var o = typeof e;
    if ('function' !== o && 'object' !== o && 'object' != typeof t) return !1;
    var a = sy.call(e);
    if (a !== sy.call(t)) return !1;
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
    ((e = cy(e)), (t = cy(t)));
    var s = '[object Array]' === a;
    if (!s) {
        if ('object' != typeof e || 'object' != typeof t) return !1;
        var u = e.constructor,
            l = t.constructor;
        if (
            u !== l &&
            !(ud(u) && u instanceof u && ud(l) && l instanceof l) &&
            'constructor' in e &&
            'constructor' in t
        )
            return !1;
    }
    if (0 === n) return !1;
    (n < 0 && (n = -1), (i = i || []));
    for (var c = (r = r || []).length; c--; ) if (r[c] === e) return i[c] === t;
    if ((r.push(e), i.push(t), s)) {
        if ((c = e.length) !== t.length) return !1;
        for (; c--; ) if (!ly(e[c], t[c], n - 1, r, i)) return !1;
    } else {
        var f,
            d = Object.keys(e);
        if (((c = d.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (!wd(t, (f = d[c])) || !ly(e[f], t[f], n - 1, r, i)) return !1;
    }
    return (r.pop(), i.pop(), !0);
}
function cy(e) {
    return Pv(e) ? e.slice() : yd(e) || Lv(e) || gd(e) || Dv(e) ? Array.from(e.entries()) : e;
}
function fy(e) {
    return ((e[Symbol.iterator] = dy), e);
}
function dy() {
    return this;
}
(['Symbol', 'Map', 'Set'].forEach(function (e) {
    void 0 === Xf()[e] && Qf("MobX requires global '" + e + "' to be available or polyfilled");
}),
    'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
                return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
            },
            extras: { getDebugName: oy },
            $mobx: Id,
        }));
var hy = Ny(),
    py = (e) => Oy(e, hy),
    vy = Ny();
py.write = (e) => Oy(e, vy);
var yy = Ny();
py.onStart = (e) => Oy(e, yy);
var gy = Ny();
py.onFrame = (e) => Oy(e, gy);
var my = Ny();
py.onFinish = (e) => Oy(e, my);
var by = [];
py.setTimeout = (e, t) => {
    const n = py.now() + t,
        r = () => {
            const e = by.findIndex((e) => e.cancel == r);
            (~e && by.splice(e, 1), (ky -= ~e ? 1 : 0));
        },
        i = { time: n, handler: e, cancel: r };
    return (by.splice(_y(n), 0, i), (ky += 1), Ey(), i);
};
var _y = (e) => ~(~by.findIndex((t) => t.time > e) || ~by.length);
((py.cancel = (e) => {
    (yy.delete(e), gy.delete(e), my.delete(e), hy.delete(e), vy.delete(e));
}),
    (py.sync = (e) => {
        ((xy = !0), py.batchedUpdates(e), (xy = !1));
    }),
    (py.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            ((t = e), py.onStart(n));
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                (yy.delete(n), (t = null));
            }),
            r
        );
    }));
var wy = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
((py.use = (e) => (wy = e)),
    (py.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (py.batchedUpdates = (e) => e()),
    (py.catch = console.error),
    (py.frameLoop = 'always'),
    (py.advance = () => {
        'demand' !== py.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : Cy();
    }));
var Sy = -1,
    ky = 0,
    xy = !1;
function Oy(e, t) {
    xy ? (t.delete(e), e(0)) : (t.add(e), Ey());
}
function Ey() {
    Sy < 0 && ((Sy = 0), 'demand' !== py.frameLoop && wy(Py));
}
function Py() {
    ~Sy && (wy(Py), py.batchedUpdates(Cy));
}
function Cy() {
    const e = Sy;
    Sy = py.now();
    const t = _y(Sy);
    (t && (jy(by.splice(0, t), (e) => e.handler()), (ky -= t)),
        ky ? (yy.flush(), hy.flush(e ? Math.min(64, Sy - e) : 16.667), gy.flush(), vy.flush(), my.flush()) : (Sy = -1));
}
function Ny() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            ((ky += t != e || e.has(n) ? 0 : 1), e.add(n));
        },
        delete: (n) => ((ky -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (ky -= t.size), jy(t, (t) => t(n) && e.add(t)), (ky += e.size), (t = e));
        },
    };
}
function jy(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            py.catch(n);
        }
    });
}
var Ty = Object.defineProperty,
    Ay = {};
function Ry() {}
((e, t) => {
    for (var n in t) Ty(e, n, { get: t[n], enumerable: !0 });
})(Ay, {
    assign: () => Ky,
    colors: () => qy,
    createStringInterpolator: () => Fy,
    skipAnimation: () => Hy,
    to: () => Uy,
    willAdvance: () => Wy,
});
var Ly = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
function Iy(e, t) {
    if (Ly.arr(e)) {
        if (!Ly.arr(t) || e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
    }
    return e === t;
}
var zy = (e, t) => e.forEach(t);
function Dy(e, t, n) {
    if (Ly.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Vy = (e) => (Ly.und(e) ? [] : Ly.arr(e) ? e : [e]);
function My(e, t) {
    if (e.size) {
        const n = Array.from(e);
        (e.clear(), zy(n, t));
    }
}
var Fy,
    Uy,
    By = (e, ...t) => My(e, (e) => e(...t)),
    $y = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    qy = null,
    Hy = !1,
    Wy = Ry,
    Ky = (e) => {
        (e.to && (Uy = e.to),
            e.now && (py.now = e.now),
            void 0 !== e.colors && (qy = e.colors),
            null != e.skipAnimation && (Hy = e.skipAnimation),
            e.createStringInterpolator && (Fy = e.createStringInterpolator),
            e.requestAnimationFrame && py.use(e.requestAnimationFrame),
            e.batchedUpdates && (py.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (Wy = e.willAdvance),
            e.frameLoop && (py.frameLoop = e.frameLoop));
    },
    Qy = new Set(),
    Gy = [],
    Xy = [],
    Yy = 0,
    Jy = {
        get idle() {
            return !Qy.size && !Gy.length;
        },
        start(e) {
            Yy > e.priority ? (Qy.add(e), py.onStart(Zy)) : (eg(e), py(ng));
        },
        advance: ng,
        sort(e) {
            if (Yy) py.onFrame(() => Jy.sort(e));
            else {
                const t = Gy.indexOf(e);
                ~t && (Gy.splice(t, 1), tg(e));
            }
        },
        clear() {
            ((Gy = []), Qy.clear());
        },
    };
function Zy() {
    (Qy.forEach(eg), Qy.clear(), py(ng));
}
function eg(e) {
    Gy.includes(e) || tg(e);
}
function tg(e) {
    Gy.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(Gy, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function ng(e) {
    const t = Xy;
    for (let n = 0; n < Gy.length; n++) {
        const r = Gy[n];
        ((Yy = r.priority), r.idle || (Wy(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((Yy = 0), ((Xy = Gy).length = 0), (Gy = t).length > 0);
}
var rg = '[-+]?\\d*\\.?\\d+',
    ig = rg + '%';
function og(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var ag = new RegExp('rgb' + og(rg, rg, rg)),
    sg = new RegExp('rgba' + og(rg, rg, rg, rg)),
    ug = new RegExp('hsl' + og(rg, ig, ig)),
    lg = new RegExp('hsla' + og(rg, ig, ig, rg)),
    cg = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    fg = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    dg = /^#([0-9a-fA-F]{6})$/,
    hg = /^#([0-9a-fA-F]{8})$/;
function pg(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function vg(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        i = 2 * n - r,
        o = pg(i, r, e + 1 / 3),
        a = pg(i, r, e),
        s = pg(i, r, e - 1 / 3);
    return (Math.round(255 * o) << 24) | (Math.round(255 * a) << 16) | (Math.round(255 * s) << 8);
}
function yg(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function gg(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function mg(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function bg(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function _g(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = dg.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : qy && void 0 !== qy[e]
                ? qy[e]
                : (t = ag.exec(e))
                  ? ((yg(t[1]) << 24) | (yg(t[2]) << 16) | (yg(t[3]) << 8) | 255) >>> 0
                  : (t = sg.exec(e))
                    ? ((yg(t[1]) << 24) | (yg(t[2]) << 16) | (yg(t[3]) << 8) | mg(t[4])) >>> 0
                    : (t = cg.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = hg.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = fg.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = ug.exec(e))
                            ? (255 | vg(gg(t[1]), bg(t[2]), bg(t[3]))) >>> 0
                            : (t = lg.exec(e))
                              ? (vg(gg(t[1]), bg(t[2]), bg(t[3])) | mg(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var wg = (e, t, n) => {
    if (Ly.fun(e)) return e;
    if (Ly.arr(e)) return wg({ range: e, output: t, extrapolate: n });
    if (Ly.str(e.output[0])) return Fy(e);
    const r = e,
        i = r.output,
        o = r.range || [0, 1],
        a = r.extrapolateLeft || r.extrapolate || 'extend',
        s = r.extrapolateRight || r.extrapolate || 'extend',
        u = r.easing || ((e) => e);
    return (e) => {
        const t = (function (e, t) {
            for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
            return n - 1;
        })(e, o);
        return (function (e, t, n, r, i, o, a, s, u) {
            let l = u ? u(e) : e;
            if (l < t) {
                if ('identity' === a) return l;
                'clamp' === a && (l = t);
            }
            if (l > n) {
                if ('identity' === s) return l;
                'clamp' === s && (l = n);
            }
            if (r === i) return r;
            if (t === n) return e <= t ? r : i;
            t === -1 / 0 ? (l = -l) : n === 1 / 0 ? (l -= t) : (l = (l - t) / (n - t));
            ((l = o(l)), r === -1 / 0 ? (l = -l) : i === 1 / 0 ? (l += r) : (l = l * (i - r) + r));
            return l;
        })(e, o[t], o[t + 1], i[t], i[t + 1], u, a, s, r.map);
    };
};
var Sg = {
        linear: (e) => e,
        easeInQuart: (e) => e * e * e * e,
        easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
        easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
    },
    kg = Symbol.for('FluidValue.get'),
    xg = Symbol.for('FluidValue.observers'),
    Og = (e) => Boolean(e && e[kg]),
    Eg = (e) => (e && e[kg] ? e[kg]() : e),
    Pg = (e) => e[xg] || null;
function Cg(e, t) {
    const n = e[xg];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
var Ng = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            jg(this, e);
        }
    },
    jg = (e, t) => Lg(e, kg, t);
function Tg(e, t) {
    if (e[kg]) {
        let n = e[xg];
        (n || Lg(e, xg, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function Ag(e, t) {
    const n = e[xg];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[xg] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
var Rg,
    Lg = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    Ig = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    zg = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    Dg = new RegExp(`(${Ig.source})(%|[a-z]+)`, 'i'),
    Vg = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    Mg = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    Fg = (e) => {
        const [t, n] = Ug(e);
        if (!t || $y()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && Mg.test(n) ? Fg(n) : n || e;
    },
    Ug = (e) => {
        const t = Mg.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    Bg = (e, t, n, r, i) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
    $g = (e) => {
        Rg || (Rg = qy ? new RegExp(`(${Object.keys(qy).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => Eg(e).replace(Mg, Fg).replace(zg, _g).replace(Rg, _g)),
            n = t.map((e) => e.match(Ig).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => wg({ ...e, output: t }));
        return (e) => {
            var n;
            const i = !Dg.test(t[0]) && (null == (n = t.find((e) => Dg.test(e))) ? void 0 : n.replace(Ig, ''));
            let o = 0;
            return t[0].replace(Ig, () => `${r[o++](e)}${i || ''}`).replace(Vg, Bg);
        };
    },
    qg = 'react-spring: ',
    Hg = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${qg}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    Wg = Hg(console.warn);
var Kg = Hg(console.warn);
function Qg(e) {
    return Ly.str(e) && ('#' == e[0] || /\d/.test(e) || (!$y() && Mg.test(e)) || e in (qy || {}));
}
var Gg = $y() ? B.useEffect : B.useLayoutEffect,
    Xg = () => {
        const e = B.useRef(!1);
        return (
            Gg(
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
function Yg() {
    const e = B.useState()[1],
        t = Xg();
    return () => {
        t.current && e(Math.random());
    };
}
var Jg = (e) => B.useEffect(e, Zg),
    Zg = [];
function em(e) {
    const t = B.useRef();
    return (
        B.useEffect(() => {
            t.current = e;
        }),
        t.current
    );
}
var tm = Symbol.for('Animated:node'),
    nm = (e) => e && e[tm],
    rm = (e, t) => {
        return ((n = e), (r = tm), (i = t), Object.defineProperty(n, r, { value: i, writable: !0, configurable: !0 }));
        var n, r, i;
    },
    im = (e) => e && e[tm] && e[tm].getPayload(),
    om = class {
        constructor() {
            rm(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    am = class extends om {
        constructor(e) {
            (super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                Ly.num(this._value) && (this.lastPosition = this._value));
        }
        static create(e) {
            return new am(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                Ly.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            ((this.done = !1),
                Ly.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null)));
        }
    },
    sm = class extends am {
        constructor(e) {
            (super(0), (this._string = null), (this._toString = wg({ output: [e, e] })));
        }
        static create(e) {
            return new sm(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (Ly.str(e)) {
                if (e == this._string) return !1;
                ((this._string = e), (this._value = 1));
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null;
            }
            return !0;
        }
        reset(e) {
            (e && (this._toString = wg({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
        }
    },
    um = { dependencies: null },
    lm = class extends om {
        constructor(e) {
            (super(), (this.source = e), this.setValue(e));
        }
        getValue(e) {
            const t = {};
            return (
                Dy(this.source, (n, r) => {
                    var i;
                    (i = n) && i[tm] === i ? (t[r] = n.getValue(e)) : Og(n) ? (t[r] = Eg(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            ((this.source = e), (this.payload = this._makePayload(e)));
        }
        reset() {
            this.payload && zy(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return (Dy(e, this._addToPayload, t), Array.from(t));
            }
        }
        _addToPayload(e) {
            um.dependencies && Og(e) && um.dependencies.add(e);
            const t = im(e);
            t && zy(t, (e) => this.add(e));
        }
    },
    cm = class extends lm {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new cm(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map(fm)), !0);
        }
    };
function fm(e) {
    return (Qg(e) ? sm : am).create(e);
}
function dm(e) {
    const t = nm(e);
    return t ? t.constructor : Ly.arr(e) ? cm : Qg(e) ? sm : am;
}
var hm = (e, t) => {
        const n = !Ly.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return B.forwardRef((r, i) => {
            const o = B.useRef(null),
                a =
                    n &&
                    B.useCallback(
                        (e) => {
                            o.current = (function (e, t) {
                                e && (Ly.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(i, e);
                        },
                        [i],
                    ),
                [s, u] = (function (e, t) {
                    const n = new Set();
                    ((um.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                    return ((e = new lm(e)), (um.dependencies = null), [e, n]);
                })(r, t),
                l = Yg(),
                c = () => {
                    const e = o.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && l();
                },
                f = new pm(c, u),
                d = B.useRef();
            (Gg(
                () => (
                    (d.current = f),
                    zy(u, (e) => Tg(e, f)),
                    () => {
                        d.current && (zy(d.current.deps, (e) => Ag(e, d.current)), py.cancel(d.current.update));
                    }
                ),
            ),
                B.useEffect(c, []),
                Jg(() => () => {
                    const e = d.current;
                    zy(e.deps, (t) => Ag(t, e));
                }));
            const h = t.getComponentProps(s.getValue());
            return B.createElement(e, { ...h, ref: a });
        });
    },
    pm = class {
        constructor(e, t) {
            ((this.update = e), (this.deps = t));
        }
        eventObserved(e) {
            'change' == e.type && py.write(this.update);
        }
    };
var vm = Symbol.for('AnimatedComponent'),
    ym = (e) => (Ly.str(e) ? e : e && Ly.str(e.displayName) ? e.displayName : (Ly.fun(e) && e.name) || null);
function gm(e, ...t) {
    return Ly.fun(e) ? e(...t) : e;
}
var mm = (e, t) => !0 === e || !!(t && e && (Ly.fun(e) ? e(t) : Vy(e).includes(t))),
    bm = (e, t) => (Ly.obj(e) ? t && e[t] : e),
    _m = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
    wm = (e) => e,
    Sm = (e, t = wm) => {
        let n = km;
        e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
        const r = {};
        for (const i of n) {
            const n = t(e[i], i);
            Ly.und(n) || (r[i] = n);
        }
        return r;
    },
    km = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
    xm = {
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
function Om(e) {
    const t = (function (e) {
        const t = {};
        let n = 0;
        if (
            (Dy(e, (e, r) => {
                xm[r] || ((t[r] = e), n++);
            }),
            n)
        )
            return t;
    })(e);
    if (t) {
        const n = { to: t };
        return (Dy(e, (e, r) => r in t || (n[r] = e)), n);
    }
    return { ...e };
}
function Em(e) {
    return (
        (e = Eg(e)),
        Ly.arr(e) ? e.map(Em) : Qg(e) ? Ay.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
    );
}
function Pm(e) {
    for (const t in e) return !0;
    return !1;
}
function Cm(e) {
    return Ly.fun(e) || (Ly.arr(e) && Ly.obj(e[0]));
}
function Nm(e, t) {
    var n;
    (null == (n = e.ref) || n.delete(e), null == t || t.delete(e));
}
function jm(e, t) {
    var n;
    t && e.ref !== t && (null == (n = e.ref) || n.delete(e), t.add(e), (e.ref = t));
}
var Tm = { tension: 170, friction: 26, mass: 1, damping: 1, easing: Sg.linear, clamp: !1 };
function Am(e, t) {
    if (Ly.und(t.decay)) {
        const n = !Ly.und(t.tension) || !Ly.und(t.friction);
        ((!n && Ly.und(t.frequency) && Ly.und(t.damping) && Ly.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0));
    } else e.duration = void 0;
}
var Rm = [];
function Lm(e, { key: t, props: n, defaultProps: r, state: i, actions: o }) {
    return new Promise((a, s) => {
        let u,
            l,
            c = mm(n.cancel ?? (null == r ? void 0 : r.cancel), t);
        if (c) h();
        else {
            Ly.und(n.pause) || (i.paused = mm(n.pause, t));
            let e = null == r ? void 0 : r.pause;
            (!0 !== e && (e = i.paused || mm(e, t)),
                (u = gm(n.delay || 0, t)),
                e ? (i.resumeQueue.add(d), o.pause()) : (o.resume(), d()));
        }
        function f() {
            (i.resumeQueue.add(d), i.timeouts.delete(l), l.cancel(), (u = l.time - py.now()));
        }
        function d() {
            u > 0 && !Ay.skipAnimation
                ? ((i.delayed = !0), (l = py.setTimeout(h, u)), i.pauseQueue.add(f), i.timeouts.add(l))
                : h();
        }
        function h() {
            (i.delayed && (i.delayed = !1),
                i.pauseQueue.delete(f),
                i.timeouts.delete(l),
                e <= (i.cancelId || 0) && (c = !0));
            try {
                o.start({ ...n, callId: e, cancel: c }, a);
            } catch (t) {
                s(t);
            }
        }
    });
}
var Im = (e, t) =>
        1 == t.length
            ? t[0]
            : t.some((e) => e.cancelled)
              ? Vm(e.get())
              : t.every((e) => e.noop)
                ? zm(e.get())
                : Dm(
                      e.get(),
                      t.every((e) => e.finished),
                  ),
    zm = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
    Dm = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
    Vm = (e) => ({ value: e, cancelled: !0, finished: !1 });
function Mm(e, t, n, r) {
    const { callId: i, parentId: o, onRest: a } = t,
        { asyncTo: s, promise: u } = n;
    return o || e !== s || t.reset
        ? (n.promise = (async () => {
              ((n.asyncId = i), (n.asyncTo = e));
              const l = Sm(t, (e, t) => ('onRest' === t ? void 0 : e));
              let c, f;
              const d = new Promise((e, t) => ((c = e), (f = t))),
                  h = (e) => {
                      const t = (i <= (n.cancelId || 0) && Vm(r)) || (i !== n.asyncId && Dm(r, !1));
                      if (t) throw ((e.result = t), f(e), e);
                  },
                  p = (e, t) => {
                      const o = new Um(),
                          a = new Bm();
                      return (async () => {
                          if (Ay.skipAnimation) throw (Fm(n), (a.result = Dm(r, !1)), f(a), a);
                          h(o);
                          const s = Ly.obj(e) ? { ...e } : { ...t, to: e };
                          ((s.parentId = i),
                              Dy(l, (e, t) => {
                                  Ly.und(s[t]) && (s[t] = e);
                              }));
                          const u = await r.start(s);
                          return (
                              h(o),
                              n.paused &&
                                  (await new Promise((e) => {
                                      n.resumeQueue.add(e);
                                  })),
                              u
                          );
                      })();
                  };
              let v;
              if (Ay.skipAnimation) return (Fm(n), Dm(r, !1));
              try {
                  let t;
                  ((t = Ly.arr(e)
                      ? (async (e) => {
                            for (const t of e) await p(t);
                        })(e)
                      : Promise.resolve(e(p, r.stop.bind(r)))),
                      await Promise.all([t.then(c), d]),
                      (v = Dm(r.get(), !0, !1)));
              } catch (y) {
                  if (y instanceof Um) v = y.result;
                  else {
                      if (!(y instanceof Bm)) throw y;
                      v = y.result;
                  }
              } finally {
                  i == n.asyncId && ((n.asyncId = o), (n.asyncTo = o ? s : void 0), (n.promise = o ? u : void 0));
              }
              return (
                  Ly.fun(a) &&
                      py.batchedUpdates(() => {
                          a(v, r, r.item);
                      }),
                  v
              );
          })())
        : u;
}
function Fm(e, t) {
    (My(e.timeouts, (e) => e.cancel()),
        e.pauseQueue.clear(),
        e.resumeQueue.clear(),
        (e.asyncId = e.asyncTo = e.promise = void 0),
        t && (e.cancelId = t));
}
var Um = class extends Error {
        constructor() {
            super(
                'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
            );
        }
    },
    Bm = class extends Error {
        constructor() {
            super('SkipAnimationSignal');
        }
    },
    $m = (e) => e instanceof Hm,
    qm = 1,
    Hm = class extends Ng {
        constructor() {
            (super(...arguments), (this.id = qm++), (this._priority = 0));
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = nm(this);
            return e && e.getValue();
        }
        to(...e) {
            return Ay.to(this, e);
        }
        interpolate(...e) {
            return (Wg(`${qg}The "interpolate" function is deprecated in v9 (use "to" instead)`), Ay.to(this, e));
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
            Cg(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            (this.idle || Jy.sort(this), Cg(this, { type: 'priority', parent: this, priority: e }));
        }
    },
    Wm = Symbol.for('SpringPhase'),
    Km = (e) => (1 & e[Wm]) > 0,
    Qm = (e) => (2 & e[Wm]) > 0,
    Gm = (e) => (4 & e[Wm]) > 0,
    Xm = (e, t) => (t ? (e[Wm] |= 3) : (e[Wm] &= -3)),
    Ym = (e, t) => (t ? (e[Wm] |= 4) : (e[Wm] &= -5)),
    Jm = class extends Hm {
        constructor(e, t) {
            if (
                (super(),
                (this.animation = new (class {
                    constructor() {
                        ((this.changed = !1),
                            (this.values = Rm),
                            (this.toValues = null),
                            (this.fromValues = Rm),
                            (this.config = new (class {
                                constructor() {
                                    ((this.velocity = 0), Object.assign(this, Tm));
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
                !Ly.und(e) || !Ly.und(t))
            ) {
                const n = Ly.obj(e) ? { ...e } : { ...t, from: e };
                (Ly.und(n.default) && (n.default = !0), this.start(n));
            }
        }
        get idle() {
            return !(Qm(this) || this._state.asyncTo) || Gm(this);
        }
        get goal() {
            return Eg(this.animation.to);
        }
        get velocity() {
            const e = nm(this);
            return e instanceof am ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
        }
        get hasAnimated() {
            return Km(this);
        }
        get isAnimating() {
            return Qm(this);
        }
        get isPaused() {
            return Gm(this);
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
                a = im(r.to);
            (!a && Og(r.to) && (i = Vy(Eg(r.to))),
                r.values.forEach((s, u) => {
                    if (s.done) return;
                    const l = s.constructor == sm ? 1 : a ? a[u].lastPosition : i[u];
                    let c = r.immediate,
                        f = l;
                    if (!c) {
                        if (((f = s.lastPosition), o.tension <= 0)) return void (s.done = !0);
                        let t = (s.elapsedTime += e);
                        const n = r.fromValues[u],
                            i = null != s.v0 ? s.v0 : (s.v0 = Ly.arr(o.velocity) ? o.velocity[u] : o.velocity);
                        let a;
                        const d = o.precision || (n == l ? 0.005 : Math.min(1, 0.001 * Math.abs(l - n)));
                        if (Ly.und(o.duration))
                            if (o.decay) {
                                const e = !0 === o.decay ? 0.998 : o.decay,
                                    r = Math.exp(-(1 - e) * t);
                                ((f = n + (i / (1 - e)) * (1 - r)),
                                    (c = Math.abs(s.lastPosition - f) <= d),
                                    (a = i * r));
                            } else {
                                a = null == s.lastVelocity ? i : s.lastVelocity;
                                const t = o.restVelocity || d / 10,
                                    r = o.clamp ? 0 : o.bounce,
                                    u = !Ly.und(r),
                                    h = n == l ? s.v0 > 0 : n < l;
                                let p,
                                    v = !1;
                                const y = 1,
                                    g = Math.ceil(e / y);
                                for (
                                    let e = 0;
                                    e < g && ((p = Math.abs(a) > t), p || ((c = Math.abs(l - f) <= d), !c));
                                    ++e
                                ) {
                                    u && ((v = f == l || f > l == h), v && ((a = -a * r), (f = l)));
                                    ((a += ((1e-6 * -o.tension * (f - l) + 0.001 * -o.friction * a) / o.mass) * y),
                                        (f += a * y));
                                }
                            }
                        else {
                            let r = 1;
                            (o.duration > 0 &&
                                (this._memoizedDuration !== o.duration &&
                                    ((this._memoizedDuration = o.duration),
                                    s.durationProgress > 0 &&
                                        ((s.elapsedTime = o.duration * s.durationProgress), (t = s.elapsedTime += e))),
                                (r = (o.progress || 0) + t / this._memoizedDuration),
                                (r = r > 1 ? 1 : r < 0 ? 0 : r),
                                (s.durationProgress = r)),
                                (f = n + o.easing(r) * (l - n)),
                                (a = (f - s.lastPosition) / e),
                                (c = 1 == r));
                        }
                        ((s.lastVelocity = a),
                            Number.isNaN(f) && (console.warn('Got NaN while animating:', this), (c = !0)));
                    }
                    (a && !a[u].done && (c = !1), c ? (s.done = !0) : (t = !1), s.setValue(f, o.round) && (n = !0));
                }));
            const s = nm(this),
                u = s.getValue();
            if (t) {
                const e = Eg(r.to);
                ((u === e && !n) || o.decay ? n && o.decay && this._onChange(u) : (s.setValue(e), this._onChange(e)),
                    this._stop());
            } else n && this._onChange(u);
        }
        set(e) {
            return (
                py.batchedUpdates(() => {
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
            if (Qm(this)) {
                const { to: e, config: t } = this.animation;
                py.batchedUpdates(() => {
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
                Ly.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [Ly.obj(e) ? e : { ...t, to: e }]),
                Promise.all(n.map((e) => this._update(e))).then((e) => Im(this, e))
            );
        }
        stop(e) {
            const { to: t } = this.animation;
            return (
                this._focus(this.get()),
                Fm(this._state, e && this._lastCallId),
                py.batchedUpdates(() => this._stop(t, e)),
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
            ((n = Ly.obj(n) ? n[t] : n),
                (null == n || Cm(n)) && (n = void 0),
                (r = Ly.obj(r) ? r[t] : r),
                null == r && (r = void 0));
            const i = { to: n, from: r };
            return (
                Km(this) ||
                    (e.reverse && ([n, r] = [r, n]), (r = Eg(r)), Ly.und(r) ? nm(this) || this._set(n) : this._set(r)),
                i
            );
        }
        _update({ ...e }, t) {
            const { key: n, defaultProps: r } = this;
            (e.default &&
                Object.assign(
                    r,
                    Sm(e, (e, t) => (/^on/.test(t) ? bm(e, n) : e)),
                ),
                ob(this, e, 'onProps'),
                ab(this, 'onProps', e, this));
            const i = this._prepareNode(e);
            if (Object.isFrozen(this))
                throw Error(
                    'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                );
            const o = this._state;
            return Lm(++this._lastCallId, {
                key: n,
                props: e,
                defaultProps: r,
                state: o,
                actions: {
                    pause: () => {
                        Gm(this) ||
                            (Ym(this, !0),
                            By(o.pauseQueue),
                            ab(this, 'onPause', Dm(this, Zm(this, this.animation.to)), this));
                    },
                    resume: () => {
                        Gm(this) &&
                            (Ym(this, !1),
                            Qm(this) && this._resume(),
                            By(o.resumeQueue),
                            ab(this, 'onResume', Dm(this, Zm(this, this.animation.to)), this));
                    },
                    start: this._merge.bind(this, i),
                },
            }).then((n) => {
                if (e.loop && n.finished && (!t || !n.noop)) {
                    const t = eb(e);
                    if (t) return this._update(t, !0);
                }
                return n;
            });
        }
        _merge(e, t, n) {
            if (t.cancel) return (this.stop(!0), n(Vm(this)));
            const r = !Ly.und(e.to),
                i = !Ly.und(e.from);
            if (r || i) {
                if (!(t.callId > this._lastToId)) return n(Vm(this));
                this._lastToId = t.callId;
            }
            const { key: o, defaultProps: a, animation: s } = this,
                { to: u, from: l } = s;
            let { to: c = u, from: f = l } = e;
            (!i || r || (t.default && !Ly.und(c)) || (c = f), t.reverse && ([c, f] = [f, c]));
            const d = !Iy(f, l);
            (d && (s.from = f), (f = Eg(f)));
            const h = !Iy(c, u);
            h && this._focus(c);
            const p = Cm(t.to),
                { config: v } = s,
                { decay: y, velocity: g } = v;
            ((r || i) && (v.velocity = 0),
                t.config &&
                    !p &&
                    (function (e, t, n) {
                        (n && (Am((n = { ...n }), t), (t = { ...n, ...t })), Am(e, t), Object.assign(e, t));
                        for (const a in Tm) null == e[a] && (e[a] = Tm[a]);
                        let { frequency: r, damping: i } = e;
                        const { mass: o } = e;
                        Ly.und(r) ||
                            (r < 0.01 && (r = 0.01),
                            i < 0 && (i = 0),
                            (e.tension = Math.pow((2 * Math.PI) / r, 2) * o),
                            (e.friction = (4 * Math.PI * i * o) / r));
                    })(v, gm(t.config, o), t.config !== a.config ? gm(a.config, o) : void 0));
            let m = nm(this);
            if (!m || Ly.und(c)) return n(Dm(this, !0));
            const b = Ly.und(t.reset) ? i && !t.default : !Ly.und(f) && mm(t.reset, o),
                _ = b ? f : this.get(),
                w = Em(c),
                S = Ly.num(w) || Ly.arr(w) || Qg(w),
                k = !p && (!S || mm(a.immediate || t.immediate, o));
            if (h) {
                const e = dm(c);
                if (e !== m.constructor) {
                    if (!k)
                        throw Error(
                            `Cannot animate between ${m.constructor.name} and ${e.name}, as the "to" prop suggests`,
                        );
                    m = this._set(w);
                }
            }
            const x = m.constructor;
            let O = Og(c),
                E = !1;
            if (!O) {
                const e = b || (!Km(this) && d);
                ((h || e) && ((E = Iy(Em(_), w)), (O = !E)),
                    ((Iy(s.immediate, k) || k) && Iy(v.decay, y) && Iy(v.velocity, g)) || (O = !0));
            }
            if (
                (E && Qm(this) && (s.changed && !b ? (O = !0) : O || this._stop(u)),
                !p &&
                    ((O || Og(u)) && ((s.values = m.getPayload()), (s.toValues = Og(c) ? null : x == sm ? [1] : Vy(w))),
                    s.immediate != k && ((s.immediate = k), k || b || this._set(u)),
                    O))
            ) {
                const { onRest: e } = s;
                zy(ib, (e) => ob(this, t, e));
                const r = Dm(this, Zm(this, u));
                (By(this._pendingCalls, r),
                    this._pendingCalls.add(n),
                    s.changed &&
                        py.batchedUpdates(() => {
                            var t;
                            ((s.changed = !b),
                                null == e || e(r, this),
                                b ? gm(a.onRest, r) : null == (t = s.onStart) || t.call(s, r, this));
                        }));
            }
            (b && this._set(_),
                p
                    ? n(Mm(t.to, t, this._state, this))
                    : O
                      ? this._start()
                      : Qm(this) && !h
                        ? this._pendingCalls.add(n)
                        : n(zm(_)));
        }
        _focus(e) {
            const t = this.animation;
            e !== t.to && (Pg(this) && this._detach(), (t.to = e), Pg(this) && this._attach());
        }
        _attach() {
            let e = 0;
            const { to: t } = this.animation;
            (Og(t) && (Tg(t, this), $m(t) && (e = t.priority + 1)), (this.priority = e));
        }
        _detach() {
            const { to: e } = this.animation;
            Og(e) && Ag(e, this);
        }
        _set(e, t = !0) {
            const n = Eg(e);
            if (!Ly.und(n)) {
                const e = nm(this);
                if (!e || !Iy(n, e.getValue())) {
                    const r = dm(n);
                    (e && e.constructor == r ? e.setValue(n) : rm(this, r.create(n)),
                        e &&
                            py.batchedUpdates(() => {
                                this._onChange(n, t);
                            }));
                }
            }
            return nm(this);
        }
        _onStart() {
            const e = this.animation;
            e.changed || ((e.changed = !0), ab(this, 'onStart', Dm(this, Zm(this, e.to)), this));
        }
        _onChange(e, t) {
            (t || (this._onStart(), gm(this.animation.onChange, e, this)),
                gm(this.defaultProps.onChange, e, this),
                super._onChange(e, t));
        }
        _start() {
            const e = this.animation;
            (nm(this).reset(Eg(e.to)),
                e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                Qm(this) || (Xm(this, !0), Gm(this) || this._resume()));
        }
        _resume() {
            Ay.skipAnimation ? this.finish() : Jy.start(this);
        }
        _stop(e, t) {
            if (Qm(this)) {
                Xm(this, !1);
                const n = this.animation;
                (zy(n.values, (e) => {
                    e.done = !0;
                }),
                    n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                    Cg(this, { type: 'idle', parent: this }));
                const r = t ? Vm(this.get()) : Dm(this.get(), Zm(this, e ?? n.to));
                (By(this._pendingCalls, r), n.changed && ((n.changed = !1), ab(this, 'onRest', r, this)));
            }
        }
    };
function Zm(e, t) {
    const n = Em(t);
    return Iy(Em(e.get()), n);
}
function eb(e, t = e.loop, n = e.to) {
    const r = gm(t);
    if (r) {
        const i = !0 !== r && Om(r),
            o = (i || e).reverse,
            a = !i || i.reset;
        return tb({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !o || Cm(n) ? n : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...i,
        });
    }
}
function tb(e) {
    const { to: t, from: n } = (e = Om(e)),
        r = new Set();
    return (Ly.obj(t) && rb(t, r), Ly.obj(n) && rb(n, r), (e.keys = r.size ? Array.from(r) : null), e);
}
function nb(e) {
    const t = tb(e);
    return (Ly.und(t.default) && (t.default = Sm(t)), t);
}
function rb(e, t) {
    Dy(e, (e, n) => null != e && t.add(n));
}
var ib = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
function ob(e, t, n) {
    e.animation[n] = t[n] !== _m(t, n) ? bm(t[n], e.key) : void 0;
}
function ab(e, t, ...n) {
    var r, i, o, a;
    (null == (i = (r = e.animation)[t]) || i.call(r, ...n), null == (a = (o = e.defaultProps)[t]) || a.call(o, ...n));
}
var sb = ['onStart', 'onChange', 'onRest'],
    ub = 1,
    lb = class {
        constructor(e, t) {
            ((this.id = ub++),
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
                Ly.und(n) || this.springs[t].set(n);
            }
        }
        update(e) {
            return (e && this.queue.push(tb(e)), this);
        }
        start(e) {
            let { queue: t } = this;
            return (
                e ? (t = Vy(e).map(tb)) : (this.queue = []),
                this._flush ? this._flush(this, t) : (yb(this, t), cb(this, t))
            );
        }
        stop(e, t) {
            if ((e !== !!e && (t = e), t)) {
                const n = this.springs;
                zy(Vy(t), (t) => n[t].stop(!!e));
            } else (Fm(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
            return this;
        }
        pause(e) {
            if (Ly.und(e)) this.start({ pause: !0 });
            else {
                const t = this.springs;
                zy(Vy(e), (e) => t[e].pause());
            }
            return this;
        }
        resume(e) {
            if (Ly.und(e)) this.start({ pause: !1 });
            else {
                const t = this.springs;
                zy(Vy(e), (e) => t[e].resume());
            }
            return this;
        }
        each(e) {
            Dy(this.springs, e);
        }
        _onFrame() {
            const { onStart: e, onChange: t, onRest: n } = this._events,
                r = this._active.size > 0,
                i = this._changed.size > 0;
            ((r && !this._started) || (i && !this._started)) &&
                ((this._started = !0),
                My(e, ([e, t]) => {
                    ((t.value = this.get()), e(t, this, this._item));
                }));
            const o = !r && this._started,
                a = i || (o && n.size) ? this.get() : null;
            (i &&
                t.size &&
                My(t, ([e, t]) => {
                    ((t.value = a), e(t, this, this._item));
                }),
                o &&
                    ((this._started = !1),
                    My(n, ([e, t]) => {
                        ((t.value = a), e(t, this, this._item));
                    })));
        }
        eventObserved(e) {
            if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
            else {
                if ('idle' != e.type) return;
                this._active.delete(e.parent);
            }
            py.onFrame(this._onFrame);
        }
    };
function cb(e, t) {
    return Promise.all(t.map((t) => fb(e, t))).then((t) => Im(e, t));
}
async function fb(e, t, n) {
    const { keys: r, to: i, from: o, loop: a, onRest: s, onResolve: u } = t,
        l = Ly.obj(t.default) && t.default;
    (a && (t.loop = !1), !1 === i && (t.to = null), !1 === o && (t.from = null));
    const c = Ly.arr(i) || Ly.fun(i) ? i : void 0;
    c
        ? ((t.to = void 0), (t.onRest = void 0), l && (l.onRest = void 0))
        : zy(sb, (n) => {
              const r = t[n];
              if (Ly.fun(r)) {
                  const i = e._events[n];
                  ((t[n] = ({ finished: e, cancelled: t }) => {
                      const n = i.get(r);
                      n
                          ? (e || (n.finished = !1), t && (n.cancelled = !0))
                          : i.set(r, { value: null, finished: e || !1, cancelled: t || !1 });
                  }),
                      l && (l[n] = t[n]));
              }
          });
    const f = e._state;
    t.pause === !f.paused
        ? ((f.paused = t.pause), By(t.pause ? f.pauseQueue : f.resumeQueue))
        : f.paused && (t.pause = !0);
    const d = (r || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
        h = !0 === t.cancel || !0 === _m(t, 'cancel');
    ((c || (h && f.asyncId)) &&
        d.push(
            Lm(++e._lastAsyncId, {
                props: t,
                state: f,
                actions: {
                    pause: Ry,
                    resume: Ry,
                    start(t, n) {
                        h ? (Fm(f, e._lastAsyncId), n(Vm(e))) : ((t.onRest = s), n(Mm(c, t, f, e)));
                    },
                },
            }),
        ),
        f.paused &&
            (await new Promise((e) => {
                f.resumeQueue.add(e);
            })));
    const p = Im(e, await Promise.all(d));
    if (a && p.finished && (!n || !p.noop)) {
        const n = eb(t, a, i);
        if (n) return (yb(e, [n]), fb(e, n, !0));
    }
    return (u && py.batchedUpdates(() => u(p, e, e.item)), p);
}
function db(e, t) {
    const n = { ...e.springs };
    return (
        t &&
            zy(Vy(t), (e) => {
                (Ly.und(e.keys) && (e = tb(e)), Ly.obj(e.to) || (e = { ...e, to: void 0 }), vb(n, e, (e) => pb(e)));
            }),
        hb(e, n),
        n
    );
}
function hb(e, t) {
    Dy(t, (t, n) => {
        e.springs[n] || ((e.springs[n] = t), Tg(t, e));
    });
}
function pb(e, t) {
    const n = new Jm();
    return ((n.key = e), t && Tg(n, t), n);
}
function vb(e, t, n) {
    t.keys &&
        zy(t.keys, (r) => {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function yb(e, t) {
    zy(t, (t) => {
        vb(e.springs, t, (t) => pb(t, e));
    });
}
var gb,
    mb,
    bb = ({ children: e, ...t }) => {
        const n = B.useContext(_b),
            r = t.pause || !!n.pause,
            i = t.immediate || !!n.immediate;
        t = (function (e, t) {
            const [n] = B.useState(() => ({ inputs: t, result: e() })),
                r = B.useRef(),
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
                B.useEffect(() => {
                    ((r.current = o), i == n && (n.inputs = n.result = void 0));
                }, [o]),
                o.result
            );
        })(() => ({ pause: r, immediate: i }), [r, i]);
        const { Provider: o } = _b;
        return B.createElement(o, { value: t }, e);
    },
    _b =
        ((gb = bb),
        (mb = {}),
        Object.assign(gb, B.createContext(mb)),
        (gb.Provider._context = gb),
        (gb.Consumer._context = gb),
        gb);
((bb.Provider = _b.Provider), (bb.Consumer = _b.Consumer));
var wb = () => {
    const e = [],
        t = function (t) {
            Kg(
                `${qg}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
            );
            const r = [];
            return (
                zy(e, (e, i) => {
                    if (Ly.und(t)) r.push(e.start());
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
            return (zy(e, (e) => e.pause(...arguments)), this);
        }),
        (t.resume = function () {
            return (zy(e, (e) => e.resume(...arguments)), this);
        }),
        (t.set = function (t) {
            zy(e, (e, n) => {
                const r = Ly.fun(t) ? t(n, e) : t;
                r && e.set(r);
            });
        }),
        (t.start = function (t) {
            const n = [];
            return (
                zy(e, (e, r) => {
                    if (Ly.und(t)) n.push(e.start());
                    else {
                        const i = this._getProps(t, e, r);
                        i && n.push(e.start(i));
                    }
                }),
                n
            );
        }),
        (t.stop = function () {
            return (zy(e, (e) => e.stop(...arguments)), this);
        }),
        (t.update = function (t) {
            return (zy(e, (e, n) => e.update(this._getProps(t, e, n))), this);
        }));
    const n = function (e, t, n) {
        return Ly.fun(e) ? e(n, t) : e;
    };
    return ((t._getProps = n), t);
};
function Sb(e, t) {
    const n = Ly.fun(e),
        [[r], i] = (function (e, t, n) {
            const r = Ly.fun(t) && t;
            r && !n && (n = []);
            const i = B.useMemo(() => (r || 3 == arguments.length ? wb() : void 0), []),
                o = B.useRef(0),
                a = Yg(),
                s = B.useMemo(
                    () => ({
                        ctrls: [],
                        queue: [],
                        flush(e, t) {
                            const n = db(e, t);
                            return o.current > 0 && !s.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                                ? cb(e, t)
                                : new Promise((r) => {
                                      (hb(e, n),
                                          s.queue.push(() => {
                                              r(cb(e, t));
                                          }),
                                          a());
                                  });
                        },
                    }),
                    [],
                ),
                u = B.useRef([...s.ctrls]),
                l = [],
                c = em(e) || 0;
            function f(e, n) {
                for (let i = e; i < n; i++) {
                    const e = u.current[i] || (u.current[i] = new lb(null, s.flush)),
                        n = r ? r(i, e) : t[i];
                    n && (l[i] = nb(n));
                }
            }
            (B.useMemo(() => {
                (zy(u.current.slice(e, c), (e) => {
                    (Nm(e, i), e.stop(!0));
                }),
                    (u.current.length = e),
                    f(c, e));
            }, [e]),
                B.useMemo(() => {
                    f(0, Math.min(c, e));
                }, n));
            const d = u.current.map((e, t) => db(e, l[t])),
                h = B.useContext(bb),
                p = em(h),
                v = h !== p && Pm(h);
            (Gg(() => {
                (o.current++, (s.ctrls = u.current));
                const { queue: e } = s;
                (e.length && ((s.queue = []), zy(e, (e) => e())),
                    zy(u.current, (e, t) => {
                        (null == i || i.add(e), v && e.start({ default: h }));
                        const n = l[t];
                        n && (jm(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
                    }));
            }),
                Jg(() => () => {
                    zy(s.ctrls, (e) => e.stop(!0));
                }));
            const y = d.map((e) => ({ ...e }));
            return i ? [y, i] : y;
        })(1, n ? e : [e], n ? [] : t);
    return n || 2 == arguments.length ? [r, i] : r;
}
function kb(e, t, n) {
    const r = Ly.fun(t) && t,
        {
            reset: i,
            sort: o,
            trail: a = 0,
            expires: s = !0,
            exitBeforeEnter: u = !1,
            onDestroyed: l,
            ref: c,
            config: f,
        } = r ? r() : t,
        d = B.useMemo(() => (r || 3 == arguments.length ? wb() : void 0), []),
        h = Vy(e),
        p = [],
        v = B.useRef(null),
        y = i ? null : v.current;
    (Gg(() => {
        v.current = p;
    }),
        Jg(
            () => (
                zy(p, (e) => {
                    (null == d || d.add(e.ctrl), (e.ctrl.ref = d));
                }),
                () => {
                    zy(v.current, (e) => {
                        (e.expired && clearTimeout(e.expirationId), Nm(e.ctrl, d), e.ctrl.stop(!0));
                    });
                }
            ),
        ));
    const g = (function (e, { key: t, keys: n = t }, r) {
            if (null === n) {
                const t = new Set();
                return e.map((e) => {
                    const n = r && r.find((n) => n.item === e && 'leave' !== n.phase && !t.has(n));
                    return n ? (t.add(n), n.key) : xb++;
                });
            }
            return Ly.und(n) ? e : Ly.fun(n) ? e.map(n) : Vy(n);
        })(h, r ? r() : t, y),
        m = (i && v.current) || [];
    Gg(() =>
        zy(m, ({ ctrl: e, item: t, key: n }) => {
            (Nm(e, d), gm(l, t, n));
        }),
    );
    const b = [];
    if (
        (y &&
            zy(y, (e, t) => {
                e.expired ? (clearTimeout(e.expirationId), m.push(e)) : ~(t = b[t] = g.indexOf(e.key)) && (p[t] = e);
            }),
        zy(h, (e, t) => {
            p[t] || ((p[t] = { key: g[t], item: e, phase: 'mount', ctrl: new lb() }), (p[t].ctrl.item = e));
        }),
        b.length)
    ) {
        let e = -1;
        const { leave: n } = r ? r() : t;
        zy(b, (t, r) => {
            const i = y[r];
            ~t ? ((e = p.indexOf(i)), (p[e] = { ...i, item: h[t] })) : n && p.splice(++e, 0, i);
        });
    }
    Ly.fun(o) && p.sort((e, t) => o(e.item, t.item));
    let _ = -a;
    const w = Yg(),
        S = Sm(t),
        k = new Map(),
        x = B.useRef(new Map()),
        O = B.useRef(!1);
    zy(p, (e, n) => {
        const i = e.key,
            o = e.phase,
            l = r ? r() : t;
        let d, h;
        const p = gm(l.delay || 0, i);
        if ('mount' == o) ((d = l.enter), (h = 'enter'));
        else {
            const e = g.indexOf(i) < 0;
            if ('leave' != o)
                if (e) ((d = l.leave), (h = 'leave'));
                else {
                    if (!(d = l.update)) return;
                    h = 'update';
                }
            else {
                if (e) return;
                ((d = l.enter), (h = 'enter'));
            }
        }
        if (((d = gm(d, e.item, n)), (d = Ly.obj(d) ? Om(d) : { to: d }), !d.config)) {
            const t = f || S.config;
            d.config = gm(t, e.item, n, h);
        }
        _ += a;
        const m = { ...S, delay: p + _, ref: c, immediate: l.immediate, reset: !1, ...d };
        if ('enter' == h && Ly.und(m.from)) {
            const i = r ? r() : t,
                o = Ly.und(i.initial) || y ? i.from : i.initial;
            m.from = gm(o, e.item, n);
        }
        const { onResolve: b } = m;
        m.onResolve = (e) => {
            gm(b, e);
            const t = v.current,
                n = t.find((e) => e.key === i);
            if (n && (!e.cancelled || 'update' == n.phase) && n.ctrl.idle) {
                const e = t.every((e) => e.ctrl.idle);
                if ('leave' == n.phase) {
                    const t = gm(s, n.item);
                    if (!1 !== t) {
                        const r = !0 === t ? 0 : t;
                        if (((n.expired = !0), !e && r > 0))
                            return void (r <= 2147483647 && (n.expirationId = setTimeout(w, r)));
                    }
                }
                e && t.some((e) => e.expired) && (x.current.delete(n), u && (O.current = !0), w());
            }
        };
        const E = db(e.ctrl, m);
        'leave' === h && u
            ? x.current.set(e, { phase: h, springs: E, payload: m })
            : k.set(e, { phase: h, springs: E, payload: m });
    });
    const E = B.useContext(bb),
        P = em(E),
        C = E !== P && Pm(E);
    (Gg(() => {
        C &&
            zy(p, (e) => {
                e.ctrl.start({ default: E });
            });
    }, [E]),
        zy(k, (e, t) => {
            if (x.current.size) {
                const e = p.findIndex((e) => e.key === t.key);
                p.splice(e, 1);
            }
        }),
        Gg(
            () => {
                zy(x.current.size ? x.current : k, ({ phase: e, payload: t }, n) => {
                    const { ctrl: r } = n;
                    ((n.phase = e),
                        null == d || d.add(r),
                        C && 'enter' == e && r.start({ default: E }),
                        t &&
                            (jm(r, t.ref),
                            (!r.ref && !d) || O.current ? (r.start(t), O.current && (O.current = !1)) : r.update(t)));
                });
            },
            i ? void 0 : n,
        ));
    const N = (e) =>
        B.createElement(
            B.Fragment,
            null,
            p.map((t, n) => {
                const { springs: r } = k.get(t) || t.ctrl,
                    i = e({ ...r }, t.item, t, n);
                return i && i.type
                    ? B.createElement(i.type, {
                          ...i.props,
                          key: Ly.str(t.key) || Ly.num(t.key) ? t.key : t.ctrl.id,
                          ref: i.ref,
                      })
                    : i;
            }),
        );
    return d ? [N, d] : N;
}
var xb = 1;
var Ob = class extends Hm {
    constructor(e, t) {
        (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = wg(...t)));
        const n = this._get(),
            r = dm(n);
        rm(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        (Iy(t, this.get()) || (nm(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && Pb(this._active) && Cb(this));
    }
    _get() {
        const e = Ly.arr(this.source) ? this.source.map(Eg) : Vy(Eg(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !Pb(this._active) &&
            ((this.idle = !1),
            zy(im(this), (e) => {
                e.done = !1;
            }),
            Ay.skipAnimation ? (py.batchedUpdates(() => this.advance()), Cb(this)) : Jy.start(this));
    }
    _attach() {
        let e = 1;
        (zy(Vy(this.source), (t) => {
            (Og(t) && Tg(t, this), $m(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (zy(Vy(this.source), (e) => {
            Og(e) && Ag(e, this);
        }),
            this._active.clear(),
            Cb(this));
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = Vy(this.source).reduce((e, t) => Math.max(e, ($m(t) ? t.priority : 0) + 1), 0));
    }
};
function Eb(e) {
    return !1 !== e.idle;
}
function Pb(e) {
    return !e.size || Array.from(e).every(Eb);
}
function Cb(e) {
    e.idle ||
        ((e.idle = !0),
        zy(im(e), (e) => {
            e.done = !0;
        }),
        Cg(e, { type: 'idle', parent: e }));
}
Ay.assign({ createStringInterpolator: $g, to: (e, t) => new Ob(e, t) });
var Nb = /^--/;
function jb(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || Nb.test(e) || (Ab.hasOwnProperty(e) && Ab[e])
          ? ('' + t).trim()
          : t + 'px';
}
var Tb = {};
var Ab = {
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
    Rb = ['Webkit', 'Ms', 'Moz', 'O'];
Ab = Object.keys(Ab).reduce(
    (e, t) => (Rb.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    Ab,
);
var Lb = /^(matrix|translate|scale|rotate|skew)/,
    Ib = /^(translate)/,
    zb = /^(rotate|skew)/,
    Db = (e, t) => (Ly.num(e) && 0 !== e ? e + t : e),
    Vb = (e, t) => (Ly.arr(e) ? e.every((e) => Vb(e, t)) : Ly.num(e) ? e === t : parseFloat(e) === t),
    Mb = class extends lm {
        constructor({ x: e, y: t, z: n, ...r }) {
            const i = [],
                o = [];
            ((e || t || n) &&
                (i.push([e || 0, t || 0, n || 0]),
                o.push((e) => [`translate3d(${e.map((e) => Db(e, 'px')).join(',')})`, Vb(e, 0)])),
                Dy(r, (e, t) => {
                    if ('transform' === t) (i.push([e || '']), o.push((e) => [e, '' === e]));
                    else if (Lb.test(t)) {
                        if ((delete r[t], Ly.und(e))) return;
                        const n = Ib.test(t) ? 'px' : zb.test(t) ? 'deg' : '';
                        (i.push(Vy(e)),
                            o.push(
                                'rotate3d' === t
                                    ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${Db(i, n)})`, Vb(i, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => Db(e, n)).join(',')})`,
                                          Vb(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                i.length && (r.transform = new Fb(i, o)),
                super(r));
        }
    },
    Fb = class extends Ng {
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
                zy(this.inputs, (n, r) => {
                    const i = Eg(n[0]),
                        [o, a] = this.transforms[r](Ly.arr(i) ? i : n.map(Eg));
                    ((e += ' ' + o), (t = t && a));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && zy(this.inputs, (e) => zy(e, (e) => Og(e) && Tg(e, this)));
        }
        observerRemoved(e) {
            0 == e && zy(this.inputs, (e) => zy(e, (e) => Og(e) && Ag(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), Cg(this, e));
        }
    };
Ay.assign({
    batchedUpdates: Bf.unstable_batchedUpdates,
    createStringInterpolator: $g,
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
var Ub = ((
    e,
    {
        applyAnimatedValues: t = () => !1,
        createAnimatedStyle: n = (e) => new lm(e),
        getComponentProps: r = (e) => e,
    } = {},
) => {
    const i = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
        o = (e) => {
            const t = ym(e) || 'Anonymous';
            return (
                ((e = Ly.str(e) ? o[e] || (o[e] = hm(e, i)) : e[vm] || (e[vm] = hm(e, i))).displayName =
                    `Animated(${t})`),
                e
            );
        };
    return (
        Dy(e, (t, n) => {
            (Ly.arr(e) && (n = ym(t)), (o[n] = o(t)));
        }),
        { animated: o }
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
                { style: r, children: i, scrollTop: o, scrollLeft: a, viewBox: s, ...u } = t,
                l = Object.values(u),
                c = Object.keys(u).map((t) =>
                    n || e.hasAttribute(t) ? t : Tb[t] || (Tb[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                );
            void 0 !== i && (e.textContent = i);
            for (const f in r)
                if (r.hasOwnProperty(f)) {
                    const t = jb(f, r[f]);
                    Nb.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                }
            (c.forEach((t, n) => {
                e.setAttribute(t, l[n]);
            }),
                void 0 !== o && (e.scrollTop = o),
                void 0 !== a && (e.scrollLeft = a),
                void 0 !== s && e.setAttribute('viewBox', s));
        },
        createAnimatedStyle: (e) => new Mb(e),
        getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
    },
).animated;
function Bb(e, t) {
    (void 0 === t && (t = 'Illegal state'),
        e ||
            (function (e) {
                throw new Error('[mobx-utils] ' + e);
            })(t));
}
var $b,
    qb = function (e) {
        return e && e !== Object.prototype && Object.getOwnPropertyNames(e).concat(qb(Object.getPrototypeOf(e)) || []);
    },
    Hb = function (e) {
        return (function (e) {
            var t = qb(e);
            return t.filter(function (e, n) {
                return t.indexOf(e) === n;
            });
        })(e).filter(function (e) {
            return 'constructor' !== e && !~e.indexOf('__');
        });
    },
    Wb = 'pending',
    Kb = 'fulfilled',
    Qb = 'rejected';
function Gb(e) {
    switch (this.state) {
        case Wb:
            return e.pending && e.pending(this.value);
        case Qb:
            return e.rejected && e.rejected(this.value);
        case Kb:
            return e.fulfilled ? e.fulfilled(this.value) : this.value;
    }
}
function Xb(e, t) {
    if (
        (Bb(arguments.length <= 2, 'fromPromise expects up to two arguments'),
        Bb(
            'function' == typeof e || ('object' == typeof e && e && 'function' == typeof e.then),
            'Please pass a promise or function to fromPromise',
        ),
        !0 === e.isPromiseBasedObservable)
    )
        return e;
    'function' == typeof e && (e = new Promise(e));
    var n = e;
    (e.then(
        Np('observableFromPromise-resolve', function (e) {
            ((n.value = e), (n.state = Kb));
        }),
        Np('observableFromPromise-reject', function (e) {
            ((n.value = e), (n.state = Qb));
        }),
    ),
        (n.isPromiseBasedObservable = !0),
        (n.case = Gb));
    var r = !t || (t.state !== Kb && t.state !== Wb) ? void 0 : t.value;
    return (Hp(n, { value: r, state: Wb }, {}, { deep: !1 }), n);
}
((($b = Xb || (Xb = {})).reject = Np('fromPromise.reject', function (e) {
    var t = $b(Promise.reject(e));
    return ((t.state = Qb), (t.value = e), t);
})),
    ($b.resolve = Np('fromPromise.resolve', function (e) {
        void 0 === e && (e = void 0);
        var t = $b(Promise.resolve(e));
        return ((t.state = Kb), (t.value = e), t);
    })));
var Yb = function (e, t, n, r) {
    var i,
        o = arguments.length,
        a = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
    else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
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
            hv(this),
            Tp(function () {
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
        Yb([Oh.ref], e.prototype, 'current', void 0),
        Yb([Np.bound], e.prototype, 'next', null),
        Yb([Np.bound], e.prototype, 'complete', null),
        Yb([Np.bound], e.prototype, 'error', null));
})();
var Jb = function () {
        return (
            (Jb =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            Jb.apply(this, arguments)
        );
    },
    Zb = function (e, t, n, r) {
        var i,
            o = arguments.length,
            a = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return (o > 3 && a && Object.defineProperty(t, n, a), a);
    },
    e_ = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
!(function () {
    function e(e) {
        var t = this;
        (Object.defineProperty(this, 'model', { enumerable: !0, configurable: !0, writable: !0, value: e }),
            Object.defineProperty(this, 'localValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: Oh.map({}),
            }),
            Object.defineProperty(this, 'localComputedValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: Oh.map({}),
            }),
            Object.defineProperty(this, 'isPropertyDirty', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    return t.localValues.has(e);
                },
            }),
            hv(this),
            Bb(qv(e), 'createViewModel expects an observable object'));
        var n = Hb(this);
        Hb(e).forEach(function (r) {
            var i;
            if (!n.includes(r) && r !== Id && '__mobxDidRunLazyInitializers' !== r) {
                if (
                    (Bb(
                        -1 === e_.indexOf(r),
                        'The propertyname ' + r + ' is reserved and cannot be used with viewModels',
                    ),
                    tv(e, r))
                ) {
                    var o = iy(e, r),
                        a = o.derivation.bind(t),
                        s = null === (i = o.setter_) || void 0 === i ? void 0 : i.bind(t);
                    t.localComputedValues.set(r, Nh(a, { set: s }));
                }
                var u = Object.getOwnPropertyDescriptor(e, r),
                    l = u ? { enumerable: u.enumerable } : {};
                Object.defineProperty(
                    t,
                    r,
                    Jb(Jb({}, l), {
                        configurable: !0,
                        get: function () {
                            return tv(e, r)
                                ? t.localComputedValues.get(r).get()
                                : t.isPropertyDirty(r)
                                  ? t.localValues.get(r)
                                  : t.model[r];
                        },
                        set: Np(function (n) {
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
                qv(e)
                    ? e[Id].keys_()
                    : Lv(e) || Dv(e)
                      ? Array.from(e.keys())
                      : Pv(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void Qf(5)).forEach(function (e) {
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
        Zb([Nh], e.prototype, 'isDirty', null),
        Zb([Nh], e.prototype, 'changedValues', null),
        Zb([Np.bound], e.prototype, 'submit', null),
        Zb([Np.bound], e.prototype, 'reset', null),
        Zb([Np.bound], e.prototype, 'resetProperty', null));
})();
var t_ = (function () {
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
            s = i.keyToName,
            u =
                void 0 === s
                    ? function (e) {
                          return '' + e;
                      }
                    : s,
            l = e.call(this) || this;
        (Object.defineProperty(l, '_base', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(l, '_ogmInfoKey', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(l, '_groupBy', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(l, '_keyToName', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(l, '_disposeBaseObserver', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
            }),
            (l._keyToName = u),
            (l._groupBy = n),
            (l._ogmInfoKey = Symbol('ogmInfo' + a)),
            (l._base = t));
        for (var c = 0; c < t.length; c++) l._addItem(t[c]);
        return (
            (l._disposeBaseObserver = rv(l._base, function (e) {
                if ('splice' === e.type)
                    iv(function () {
                        for (var t = 0, n = e.removed; t < n.length; t++) {
                            var r = n[t];
                            l._removeItem(r);
                        }
                        for (var i = 0, o = e.added; i < o.length; i++) {
                            var a = o[i];
                            l._addItem(a);
                        }
                    });
                else {
                    if ('update' !== e.type) throw new Error('illegal state');
                    iv(function () {
                        (l._removeItem(e.oldValue), l._addItem(e.newValue));
                    });
                }
            })),
            l
        );
    }
    (t_(t, e),
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
                        ((n = Oh([], { name: 'GroupArray[' + this._keyToName(t) + ']', deep: !1 })),
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
                        reaction: zp(
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
})(Rv);
var n_ = (function () {
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
    r_ = (function () {
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
                    return (this.last && (this.last.isDisposed = !0), (this.last = new n_(this.store, e)));
                },
            }),
            e
        );
    })(),
    i_ = function () {
        return (
            (i_ =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            i_.apply(this, arguments)
        );
    };
function o_(e, t) {
    if ((void 0 === t && (t = !1), Ap(e))) throw new Error("computedFn shouldn't be used on actions");
    var n = !1,
        r = 0,
        i = 'boolean' == typeof t ? { keepAlive: t } : t,
        o = new r_();
    return function () {
        for (var t = this, a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
        var u,
            l = o.entry(a);
        if (l.exists()) return l.get().get();
        if (!i.keepAlive && null === sp.trackingDerivation)
            return (
                !n &&
                    sp.computedRequiresReaction &&
                    (console.warn(
                        "invoking a computedFn from outside an reactive context won't be memoized, unless keepAlive is set",
                    ),
                    (n = !0)),
                e.apply(this, a)
            );
        var c = Nh(
            function () {
                return (u = e.apply(t, a));
            },
            i_(i_({}, i), { name: 'computedFn(' + (i.name || e.name) + '#' + ++r + ')' }),
        );
        return (
            l.set(c),
            i.keepAlive ||
                Mp(c, function () {
                    (o.entry(a).delete(),
                        i.onCleanup &&
                            i.onCleanup.apply(
                                i,
                                (function () {
                                    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                                    var r = Array(e),
                                        i = 0;
                                    for (t = 0; t < n; t++)
                                        for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
                                    return r;
                                })([u], a),
                            ),
                        (u = void 0));
                }),
            c.get()
        );
    };
}
if (!B.useState) throw new Error('mobx-react-lite requires React with Hooks support');
if (!hv) throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
function a_(e) {
    e();
}
function s_(e) {
    return Wp(ry(e, t));
    var t;
}
var u_ = new ((function () {
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
    l_ = { exports: {} },
    c_ = {},
    f_ = B;
var d_ =
        'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    h_ = f_.useState,
    p_ = f_.useEffect,
    v_ = f_.useLayoutEffect,
    y_ = f_.useDebugValue;
function g_(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !d_(e, n);
    } catch (r) {
        return !0;
    }
}
var m_ =
    'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
              return t();
          }
        : function (e, t) {
              var n = t(),
                  r = h_({ inst: { value: n, getSnapshot: t } }),
                  i = r[0].inst,
                  o = r[1];
              return (
                  v_(
                      function () {
                          ((i.value = n), (i.getSnapshot = t), g_(i) && o({ inst: i }));
                      },
                      [e, n, t],
                  ),
                  p_(
                      function () {
                          return (
                              g_(i) && o({ inst: i }),
                              e(function () {
                                  g_(i) && o({ inst: i });
                              })
                          );
                      },
                      [e],
                  ),
                  y_(n),
                  n
              );
          };
((c_.useSyncExternalStore = void 0 !== f_.useSyncExternalStore ? f_.useSyncExternalStore : m_), (l_.exports = c_));
var b_,
    __,
    w_ = l_.exports;
function S_(e) {
    e.reaction = new vp('observer'.concat(e.name), function () {
        var t;
        ((e.stateVersion = Symbol()), null === (t = e.onStoreChange) || void 0 === t || t.call(e));
    });
}
var k_ = 'function' == typeof Symbol && Symbol.for,
    x_ =
        null !==
            (__ =
                null === (b_ = Object.getOwnPropertyDescriptor(function () {}, 'name')) || void 0 === b_
                    ? void 0
                    : b_.configurable) &&
        void 0 !== __ &&
        __,
    O_ = k_
        ? Symbol.for('react.forward_ref')
        : 'function' == typeof B.forwardRef &&
          B.forwardRef(function (e) {
              return null;
          }).$$typeof,
    E_ = k_
        ? Symbol.for('react.memo')
        : 'function' == typeof B.memo &&
          B.memo(function (e) {
              return null;
          }).$$typeof;
function P_(e, t) {
    if (E_ && e.$$typeof === E_)
        throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
        );
    var n = (void 0, !1),
        r = e,
        i = e.displayName || e.name;
    if (O_ && e.$$typeof === O_ && ((n = !0), 'function' != typeof (r = e.render)))
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
                            u_.unregister(r),
                            (r.onStoreChange = e),
                            r.reaction || (S_(r), (r.stateVersion = Symbol())),
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
                (a.reaction || (S_(a), u_.register(n, a, a)),
                $.useDebugValue(a.reaction, s_),
                w_.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot),
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
        x_ && Object.defineProperty(o, 'name', { value: e.name, writable: !0, configurable: !0 }),
        e.contextTypes && (o.contextTypes = e.contextTypes),
        n && (o = B.forwardRef(o)),
        (function (e, t) {
            Object.keys(e).forEach(function (n) {
                N_[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
            });
        })(e, (o = B.memo(o))),
        o
    );
}
var C_,
    N_ = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function j_(e) {
    var t,
        n,
        r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
        if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = j_(e[t])) && (r && (r += ' '), (r += n));
        else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
}
((C_ = Bf.unstable_batchedUpdates) || (C_ = a_), qp({ reactionScheduler: C_ }), u_.finalizeAllImmediately);
const T_ = (e) => ('boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e),
    A_ = function () {
        for (var e, t, n = 0, r = ''; n < arguments.length; )
            (e = arguments[n++]) && (t = j_(e)) && (r && (r += ' '), (r += t));
        return r;
    },
    R_ = (e, t) => (n) => {
        var r;
        if (null == (null == t ? void 0 : t.variants))
            return A_(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        const { variants: i, defaultVariants: o } = t,
            a = Object.keys(i).map((e) => {
                const t = null == n ? void 0 : n[e],
                    r = null == o ? void 0 : o[e];
                if (null === t) return null;
                const a = T_(t) || T_(r);
                return i[e][a];
            }),
            s =
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
                              return Array.isArray(n) ? n.includes({ ...o, ...s }[t]) : { ...o, ...s }[t] === n;
                          })
                              ? [...e, n, r]
                              : e;
                      }, []);
        return A_(e, a, u, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
    };
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var L_ = function () {
    return (
        (L_ =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
            }),
        L_.apply(this, arguments)
    );
};
function I_(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    }
    return n;
}
function z_(e) {
    var t = 'function' == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
    if (n) return n.call(e);
    if (e && 'number' == typeof e.length)
        return {
            next: function () {
                return (e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e });
            },
        };
    throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
}
function D_(e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
        i,
        o = n.call(e),
        a = [];
    try {
        for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; ) a.push(r.value);
    } catch (s) {
        i = { error: s };
    } finally {
        try {
            r && !r.done && (n = o.return) && n.call(o);
        } finally {
            if (i) throw i.error;
        }
    }
    return a;
}
function V_(e, t, n) {
    if (2 === arguments.length)
        for (var r, i = 0, o = t.length; i < o; i++)
            (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
    return e.concat(r || Array.prototype.slice.call(t));
}
var M_ = {},
    F_ = 'xstate.guard';
function U_(e) {
    return Object.keys(e);
}
function B_(e, t, n) {
    void 0 === n && (n = '.');
    var r = H_(e, n),
        i = H_(t, n);
    return sw(i)
        ? !!sw(r) && i === r
        : sw(r)
          ? r in i
          : U_(r).every(function (e) {
                return e in i && B_(r[e], i[e]);
            });
}
function $_(e) {
    try {
        return sw(e) || 'number' == typeof e ? ''.concat(e) : e.type;
    } catch (t) {
        throw new Error('Events must be strings or objects with a string event.type property.');
    }
}
function q_(e, t) {
    try {
        return ow(e) ? e : e.toString().split(t);
    } catch (n) {
        throw new Error("'".concat(e, "' is not a valid state path."));
    }
}
function H_(e, t) {
    return 'object' == typeof (n = e) && 'value' in n && 'context' in n && 'event' in n && '_event' in n
        ? e.value
        : ow(e)
          ? W_(e)
          : 'string' != typeof e
            ? e
            : W_(q_(e, t));
    var n;
}
function W_(e) {
    if (1 === e.length) return e[0];
    for (var t = {}, n = t, r = 0; r < e.length - 1; r++)
        r === e.length - 2 ? (n[e[r]] = e[r + 1]) : ((n[e[r]] = {}), (n = n[e[r]]));
    return t;
}
function K_(e, t) {
    for (var n = {}, r = U_(e), i = 0; i < r.length; i++) {
        var o = r[i];
        n[o] = t(e[o], o, e, i);
    }
    return n;
}
function Q_(e, t, n) {
    var r,
        i,
        o = {};
    try {
        for (var a = z_(U_(e)), s = a.next(); !s.done; s = a.next()) {
            var u = s.value,
                l = e[u];
            n(l) && (o[u] = t(l, u, e));
        }
    } catch (c) {
        r = { error: c };
    } finally {
        try {
            s && !s.done && (i = a.return) && i.call(a);
        } finally {
            if (r) throw r.error;
        }
    }
    return o;
}
var G_ = function (e) {
    return function (t) {
        var n,
            r,
            i = t;
        try {
            for (var o = z_(e), a = o.next(); !a.done; a = o.next()) {
                i = i[a.value];
            }
        } catch (s) {
            n = { error: s };
        } finally {
            try {
                a && !a.done && (r = o.return) && r.call(o);
            } finally {
                if (n) throw n.error;
            }
        }
        return i;
    };
};
function X_(e) {
    return e
        ? sw(e)
            ? [[e]]
            : Y_(
                  U_(e).map(function (t) {
                      var n = e[t];
                      return 'string' == typeof n || (n && Object.keys(n).length)
                          ? X_(e[t]).map(function (e) {
                                return [t].concat(e);
                            })
                          : [[t]];
                  }),
              )
        : [[]];
}
function Y_(e) {
    var t;
    return (t = []).concat.apply(t, V_([], D_(e), !1));
}
function J_(e) {
    return ow(e) ? e : [e];
}
function Z_(e) {
    return void 0 === e ? [] : J_(e);
}
function ew(e, t, n) {
    var r, i;
    if (aw(e)) return e(t, n.data);
    var o = {};
    try {
        for (var a = z_(Object.keys(e)), s = a.next(); !s.done; s = a.next()) {
            var u = s.value,
                l = e[u];
            aw(l) ? (o[u] = l(t, n.data)) : (o[u] = l);
        }
    } catch (c) {
        r = { error: c };
    } finally {
        try {
            s && !s.done && (i = a.return) && i.call(a);
        } finally {
            if (r) throw r.error;
        }
    }
    return o;
}
function tw(e) {
    return e instanceof Promise || !(null === e || (!aw(e) && 'object' != typeof e) || !aw(e.then));
}
function nw(e, t) {
    var n,
        r,
        i = D_([[], []], 2),
        o = i[0],
        a = i[1];
    try {
        for (var s = z_(e), u = s.next(); !u.done; u = s.next()) {
            var l = u.value;
            t(l) ? o.push(l) : a.push(l);
        }
    } catch (c) {
        n = { error: c };
    } finally {
        try {
            u && !u.done && (r = s.return) && r.call(s);
        } finally {
            if (n) throw n.error;
        }
    }
    return [o, a];
}
function rw(e, t) {
    return K_(e.states, function (e, n) {
        if (e) {
            var r = (sw(t) ? void 0 : t[n]) || (e ? e.current : void 0);
            if (r) return { current: r, states: rw(e, r) };
        }
    });
}
function iw(e, t, n, r) {
    return e
        ? n.reduce(function (e, n) {
              var i,
                  o,
                  a = n.assignment,
                  s = { state: r, action: n, _event: t },
                  u = {};
              if (aw(a)) u = a(e, t.data, s);
              else
                  try {
                      for (var l = z_(U_(a)), c = l.next(); !c.done; c = l.next()) {
                          var f = c.value,
                              d = a[f];
                          u[f] = aw(d) ? d(e, t.data, s) : d;
                      }
                  } catch (h) {
                      i = { error: h };
                  } finally {
                      try {
                          c && !c.done && (o = l.return) && o.call(l);
                      } finally {
                          if (i) throw i.error;
                      }
                  }
              return Object.assign({}, e, u);
          }, e)
        : e;
}
function ow(e) {
    return Array.isArray(e);
}
function aw(e) {
    return 'function' == typeof e;
}
function sw(e) {
    return 'string' == typeof e;
}
function uw(e, t) {
    if (e)
        return sw(e)
            ? { type: F_, name: e, predicate: t ? t[e] : void 0 }
            : aw(e)
              ? { type: F_, name: e.name, predicate: e }
              : e;
}
var lw,
    cw,
    fw,
    dw,
    hw = (function () {
        return ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    })();
function pw(e) {
    try {
        return '__xstatenode' in e;
    } catch (t) {
        return !1;
    }
}
function vw(e, t) {
    return sw(e) || 'number' == typeof e ? L_({ type: e }, t) : e;
}
function yw(e, t) {
    if (!sw(e) && '$$type' in e && 'scxml' === e.$$type) return e;
    var n = vw(e);
    return L_({ name: n.type, data: n, $$type: 'scxml', type: 'external' }, t);
}
function gw(e, t) {
    return J_(t).map(function (t) {
        return void 0 === t || 'string' == typeof t || pw(t) ? { target: t, event: e } : L_(L_({}, t), { event: e });
    });
}
function mw(e, t, n, r, i) {
    var o = e.options.guards,
        a = { state: i, cond: t, _event: r };
    if (t.type === F_) return ((null == o ? void 0 : o[t.name]) || t.predicate)(n, r.data, a);
    var s = o[t.type];
    if (!s) throw new Error("Guard '".concat(t.type, "' is not implemented on machine '").concat(e.id, "'."));
    return s(n, r.data, a);
}
function bw(e) {
    return 'string' == typeof e ? { type: e } : e;
}
function _w(e, t, n) {
    if ('object' == typeof e) return e;
    var r = function () {};
    return { next: e, error: t || r, complete: n || r };
}
(((cw = lw || (lw = {})).Start = 'xstate.start'),
    (cw.Stop = 'xstate.stop'),
    (cw.Raise = 'xstate.raise'),
    (cw.Send = 'xstate.send'),
    (cw.Cancel = 'xstate.cancel'),
    (cw.NullEvent = ''),
    (cw.Assign = 'xstate.assign'),
    (cw.After = 'xstate.after'),
    (cw.DoneState = 'done.state'),
    (cw.DoneInvoke = 'done.invoke'),
    (cw.Log = 'xstate.log'),
    (cw.Init = 'xstate.init'),
    (cw.Invoke = 'xstate.invoke'),
    (cw.ErrorExecution = 'error.execution'),
    (cw.ErrorCommunication = 'error.communication'),
    (cw.ErrorPlatform = 'error.platform'),
    (cw.ErrorCustom = 'xstate.error'),
    (cw.Update = 'xstate.update'),
    (cw.Pure = 'xstate.pure'),
    (cw.Choose = 'xstate.choose'),
    ((dw = fw || (fw = {})).Parent = '#_parent'),
    (dw.Internal = '#_internal'));
var ww = lw.Start,
    Sw = lw.Stop,
    kw = lw.Raise,
    xw = lw.Send,
    Ow = lw.Cancel,
    Ew = lw.NullEvent,
    Pw = lw.Assign;
(lw.After, lw.DoneState);
var Cw = lw.Log,
    Nw = lw.Init,
    jw = lw.Invoke;
lw.ErrorExecution;
var Tw = lw.ErrorPlatform,
    Aw = lw.ErrorCustom,
    Rw = lw.Update,
    Lw = lw.Choose,
    Iw = lw.Pure,
    zw = yw({ type: Nw });
function Dw(e, t) {
    return (t && t[e]) || void 0;
}
function Vw(e, t) {
    var n;
    if (sw(e) || 'number' == typeof e) n = aw((r = Dw(e, t))) ? { type: e, exec: r } : r || { type: e, exec: void 0 };
    else if (aw(e)) n = { type: e.name || e.toString(), exec: e };
    else {
        var r;
        if (aw((r = Dw(e.type, t)))) n = L_(L_({}, e), { exec: r });
        else if (r) {
            var i = r.type || e.type;
            n = L_(L_(L_({}, r), e), { type: i });
        } else n = e;
    }
    return n;
}
var Mw = function (e, t) {
    return e
        ? (ow(e) ? e : [e]).map(function (e) {
              return Vw(e, t);
          })
        : [];
};
function Fw(e) {
    var t = Vw(e);
    return L_(L_({ id: sw(e) ? e : t.id }, t), { type: t.type });
}
function Uw(e) {
    return sw(e) ? { type: kw, event: e } : Bw(e, { to: fw.Internal });
}
function Bw(e, t) {
    return {
        to: t ? t.to : void 0,
        type: xw,
        event: aw(e) ? e : vw(e),
        delay: t ? t.delay : void 0,
        id: t && void 0 !== t.id ? t.id : aw(e) ? e.name : $_(e),
    };
}
var $w = function (e) {
    return { type: Pw, assignment: e };
};
function qw(e, t) {
    var n = ''.concat(lw.DoneState, '.').concat(e),
        r = {
            type: n,
            data: t,
            toString: function () {
                return n;
            },
        };
    return r;
}
function Hw(e, t) {
    var n = ''.concat(lw.DoneInvoke, '.').concat(e),
        r = {
            type: n,
            data: t,
            toString: function () {
                return n;
            },
        };
    return r;
}
function Ww(e, t) {
    var n = ''.concat(lw.ErrorPlatform, '.').concat(e),
        r = {
            type: n,
            data: t,
            toString: function () {
                return n;
            },
        };
    return r;
}
function Kw(e, t, n, r, i, o) {
    void 0 === o && (o = !1);
    var a = D_(
            o
                ? [[], i]
                : nw(i, function (e) {
                      return e.type === Pw;
                  }),
            2,
        ),
        s = a[0],
        u = a[1],
        l = s.length ? iw(n, r, s, t) : n,
        c = o ? [n] : void 0,
        f = Y_(
            u
                .map(function (n) {
                    var i;
                    switch (n.type) {
                        case kw:
                            return { type: kw, _event: yw(n.event) };
                        case xw:
                            var a = (function (e, t, n, r) {
                                var i,
                                    o = { _event: n },
                                    a = yw(aw(e.event) ? e.event(t, n.data, o) : e.event);
                                if (sw(e.delay)) {
                                    var s = r && r[e.delay];
                                    i = aw(s) ? s(t, n.data, o) : s;
                                } else i = aw(e.delay) ? e.delay(t, n.data, o) : e.delay;
                                var u = aw(e.to) ? e.to(t, n.data, o) : e.to;
                                return L_(L_({}, e), { to: u, _event: a, event: a.data, delay: i });
                            })(n, l, r, e.options.delays);
                            return a;
                        case Cw:
                            return (function (e, t, n) {
                                return L_(L_({}, e), { value: sw(e.expr) ? e.expr : e.expr(t, n.data, { _event: n }) });
                            })(n, l, r);
                        case Lw:
                            if (
                                !(d =
                                    null ===
                                        (i = n.conds.find(function (n) {
                                            var i = uw(n.cond, e.options.guards);
                                            return !i || mw(e, i, l, r, t);
                                        })) || void 0 === i
                                        ? void 0
                                        : i.actions)
                            )
                                return [];
                            var s = D_(Kw(e, t, l, r, Mw(Z_(d), e.options.actions), o), 2),
                                u = s[0],
                                f = s[1];
                            return ((l = f), null == c || c.push(l), u);
                        case Iw:
                            var d;
                            if (!(d = n.get(l, r.data))) return [];
                            var h = D_(Kw(e, t, l, r, Mw(Z_(d), e.options.actions), o), 2),
                                p = h[0],
                                v = h[1];
                            return ((l = v), null == c || c.push(l), p);
                        case Sw:
                            return (function (e, t, n) {
                                var r = aw(e.activity) ? e.activity(t, n.data) : e.activity,
                                    i = 'string' == typeof r ? { id: r } : r;
                                return { type: lw.Stop, activity: i };
                            })(n, l, r);
                        case Pw:
                            ((l = iw(l, r, [n], t)), null == c || c.push(l));
                            break;
                        default:
                            var y = Vw(n, e.options.actions),
                                g = y.exec;
                            if (g && c) {
                                var m = c.length - 1;
                                y = L_(L_({}, y), {
                                    exec: function (e) {
                                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                        g.apply(void 0, V_([c[m]], D_(t), !1));
                                    },
                                });
                            }
                            return y;
                    }
                })
                .filter(function (e) {
                    return !!e;
                }),
        );
    return [f, l];
}
var Qw = function (e) {
    return 'atomic' === e.type || 'final' === e.type;
};
function Gw(e) {
    return U_(e.states).map(function (t) {
        return e.states[t];
    });
}
function Xw(e) {
    var t = [e];
    return Qw(e) ? t : t.concat(Y_(Gw(e).map(Xw)));
}
function Yw(e, t) {
    var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = Zw(new Set(e)),
        f = new Set(t);
    try {
        for (var d = z_(f), h = d.next(); !h.done; h = d.next())
            for (var p = (k = h.value).parent; p && !f.has(p); ) (f.add(p), (p = p.parent));
    } catch (x) {
        n = { error: x };
    } finally {
        try {
            h && !h.done && (r = d.return) && r.call(d);
        } finally {
            if (n) throw n.error;
        }
    }
    var v = Zw(f);
    try {
        for (var y = z_(f), g = y.next(); !g.done; g = y.next()) {
            if ('compound' !== (k = g.value).type || (v.get(k) && v.get(k).length)) {
                if ('parallel' === k.type)
                    try {
                        for (var m = ((a = void 0), z_(Gw(k))), b = m.next(); !b.done; b = m.next()) {
                            var _ = b.value;
                            'history' !== _.type &&
                                (f.has(_) ||
                                    (f.add(_),
                                    c.get(_)
                                        ? c.get(_).forEach(function (e) {
                                              return f.add(e);
                                          })
                                        : _.initialStateNodes.forEach(function (e) {
                                              return f.add(e);
                                          })));
                        }
                    } catch (O) {
                        a = { error: O };
                    } finally {
                        try {
                            b && !b.done && (s = m.return) && s.call(m);
                        } finally {
                            if (a) throw a.error;
                        }
                    }
            } else
                c.get(k)
                    ? c.get(k).forEach(function (e) {
                          return f.add(e);
                      })
                    : k.initialStateNodes.forEach(function (e) {
                          return f.add(e);
                      });
        }
    } catch (E) {
        i = { error: E };
    } finally {
        try {
            g && !g.done && (o = y.return) && o.call(y);
        } finally {
            if (i) throw i.error;
        }
    }
    try {
        for (var w = z_(f), S = w.next(); !S.done; S = w.next()) {
            var k;
            for (p = (k = S.value).parent; p && !f.has(p); ) (f.add(p), (p = p.parent));
        }
    } catch (P) {
        u = { error: P };
    } finally {
        try {
            S && !S.done && (l = w.return) && l.call(w);
        } finally {
            if (u) throw u.error;
        }
    }
    return f;
}
function Jw(e, t) {
    var n = t.get(e);
    if (!n) return {};
    if ('compound' === e.type) {
        var r = n[0];
        if (!r) return {};
        if (Qw(r)) return r.key;
    }
    var i = {};
    return (
        n.forEach(function (e) {
            i[e.key] = Jw(e, t);
        }),
        i
    );
}
function Zw(e) {
    var t,
        n,
        r = new Map();
    try {
        for (var i = z_(e), o = i.next(); !o.done; o = i.next()) {
            var a = o.value;
            (r.has(a) || r.set(a, []), a.parent && (r.has(a.parent) || r.set(a.parent, []), r.get(a.parent).push(a)));
        }
    } catch (s) {
        t = { error: s };
    } finally {
        try {
            o && !o.done && (n = i.return) && n.call(i);
        } finally {
            if (t) throw t.error;
        }
    }
    return r;
}
function eS(e, t) {
    return Jw(e, Zw(Yw([e], t)));
}
function tS(e, t) {
    return Array.isArray(e)
        ? e.some(function (e) {
              return e === t;
          })
        : e instanceof Set && e.has(t);
}
function nS(e, t) {
    return 'compound' === t.type
        ? Gw(t).some(function (t) {
              return 'final' === t.type && tS(e, t);
          })
        : 'parallel' === t.type &&
              Gw(t).every(function (t) {
                  return nS(e, t);
              });
}
function rS(e) {
    return new Set(
        Y_(
            e.map(function (e) {
                return e.tags;
            }),
        ),
    );
}
function iS(e, t) {
    if (e === t) return !0;
    if (void 0 === e || void 0 === t) return !1;
    if (sw(e) || sw(t)) return e === t;
    var n = U_(e),
        r = U_(t);
    return (
        n.length === r.length &&
        n.every(function (n) {
            return iS(e[n], t[n]);
        })
    );
}
var oS = (function () {
        function e(e) {
            var t,
                n,
                r = this;
            ((this.actions = []),
                (this.activities = M_),
                (this.meta = {}),
                (this.events = []),
                (this.value = e.value),
                (this.context = e.context),
                (this._event = e._event),
                (this._sessionid = e._sessionid),
                (this.event = this._event.data),
                (this.historyValue = e.historyValue),
                (this.history = e.history),
                (this.actions = e.actions || []),
                (this.activities = e.activities || M_),
                (this.meta =
                    (void 0 === (n = e.configuration) && (n = []),
                    n.reduce(function (e, t) {
                        return (void 0 !== t.meta && (e[t.id] = t.meta), e);
                    }, {}))),
                (this.events = e.events || []),
                (this.matches = this.matches.bind(this)),
                (this.toStrings = this.toStrings.bind(this)),
                (this.configuration = e.configuration),
                (this.transitions = e.transitions),
                (this.children = e.children),
                (this.done = !!e.done),
                (this.tags =
                    null !== (t = Array.isArray(e.tags) ? new Set(e.tags) : e.tags) && void 0 !== t ? t : new Set()),
                (this.machine = e.machine),
                Object.defineProperty(this, 'nextEvents', {
                    get: function () {
                        return (function (e) {
                            return V_(
                                [],
                                D_(
                                    new Set(
                                        Y_(
                                            V_(
                                                [],
                                                D_(
                                                    e.map(function (e) {
                                                        return e.ownEvents;
                                                    }),
                                                ),
                                                !1,
                                            ),
                                        ),
                                    ),
                                ),
                                !1,
                            );
                        })(r.configuration);
                    },
                }));
        }
        return (
            (e.from = function (t, n) {
                return t instanceof e
                    ? t.context !== n
                        ? new e({
                              value: t.value,
                              context: n,
                              _event: t._event,
                              _sessionid: null,
                              historyValue: t.historyValue,
                              history: t.history,
                              actions: [],
                              activities: t.activities,
                              events: [],
                              configuration: [],
                              transitions: [],
                              children: {},
                          })
                        : t
                    : new e({
                          value: t,
                          context: n,
                          _event: zw,
                          _sessionid: null,
                          historyValue: void 0,
                          history: void 0,
                          actions: [],
                          activities: void 0,
                          events: [],
                          configuration: [],
                          transitions: [],
                          children: {},
                      });
            }),
            (e.create = function (t) {
                return new e(t);
            }),
            (e.inert = function (t, n) {
                if (t instanceof e) {
                    if (!t.actions.length) return t;
                    var r = zw;
                    return new e({
                        value: t.value,
                        context: n,
                        _event: r,
                        _sessionid: null,
                        historyValue: t.historyValue,
                        history: t.history,
                        activities: t.activities,
                        configuration: t.configuration,
                        transitions: [],
                        children: {},
                    });
                }
                return e.from(t, n);
            }),
            (e.prototype.toStrings = function (e, t) {
                var n = this;
                if ((void 0 === e && (e = this.value), void 0 === t && (t = '.'), sw(e))) return [e];
                var r = U_(e);
                return r.concat.apply(
                    r,
                    V_(
                        [],
                        D_(
                            r.map(function (r) {
                                return n.toStrings(e[r], t).map(function (e) {
                                    return r + t + e;
                                });
                            }),
                        ),
                        !1,
                    ),
                );
            }),
            (e.prototype.toJSON = function () {
                var e = this;
                (e.configuration, e.transitions);
                var t = e.tags;
                e.machine;
                var n = I_(e, ['configuration', 'transitions', 'tags', 'machine']);
                return L_(L_({}, n), { tags: Array.from(t) });
            }),
            (e.prototype.matches = function (e) {
                return B_(e, this.value);
            }),
            (e.prototype.hasTag = function (e) {
                return this.tags.has(e);
            }),
            (e.prototype.can = function (e) {
                var t;
                return (
                    this.machine,
                    !!(null === (t = this.machine) || void 0 === t ? void 0 : t.transition(this, e).changed)
                );
            }),
            e
        );
    })(),
    aS = function (e, t) {
        return t(e);
    };
function sS(e) {
    return {
        id: e,
        send: function () {},
        subscribe: function () {
            return { unsubscribe: function () {} };
        },
        getSnapshot: function () {},
        toJSON: function () {
            return { id: e };
        },
    };
}
function uS(e, t, n, r) {
    var i,
        o = bw(e.src),
        a = null === (i = null == t ? void 0 : t.options.services) || void 0 === i ? void 0 : i[o.type],
        s = e.data ? ew(e.data, n, r) : void 0,
        u = a
            ? (function (e, t, n) {
                  var r = sS(t);
                  if (((r.deferred = !0), pw(e))) {
                      var i = (r.state = aS(void 0, function () {
                          return (n ? e.withContext(n) : e).initialState;
                      }));
                      r.getSnapshot = function () {
                          return i;
                      };
                  }
                  return r;
              })(a, e.id, s)
            : sS(e.id);
    return ((u.meta = e), u);
}
function lS(e) {
    if ('string' == typeof e) {
        var t = {
            type: e,
            toString: function () {
                return e;
            },
        };
        return t;
    }
    return e;
}
function cS(e) {
    return L_(L_({ type: jw }, e), {
        toJSON: function () {
            (e.onDone, e.onError);
            var t = I_(e, ['onDone', 'onError']);
            return L_(L_({}, t), { type: jw, src: lS(e.src) });
        },
    });
}
var fS = {},
    dS = function (e) {
        return '#' === e[0];
    },
    hS = (function () {
        function e(t, n, r) {
            var i,
                o = this;
            (void 0 === r && (r = 'context' in t ? t.context : void 0),
                (this.config = t),
                (this._context = r),
                (this.order = -1),
                (this.__xstatenode = !0),
                (this.__cache = {
                    events: void 0,
                    relativeValue: new Map(),
                    initialStateValue: void 0,
                    initialState: void 0,
                    on: void 0,
                    transitions: void 0,
                    candidates: {},
                    delayedTransitions: void 0,
                }),
                (this.idMap = {}),
                (this.tags = []),
                (this.options = Object.assign(
                    { actions: {}, guards: {}, services: {}, activities: {}, delays: {} },
                    n,
                )),
                (this.parent = this.options._parent),
                (this.key = this.config.key || this.options._key || this.config.id || '(machine)'),
                (this.machine = this.parent ? this.parent.machine : this),
                (this.path = this.parent ? this.parent.path.concat(this.key) : []),
                (this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : '.')),
                (this.id = this.config.id || V_([this.machine.key], D_(this.path), !1).join(this.delimiter)),
                (this.version = this.parent ? this.parent.version : this.config.version),
                (this.type =
                    this.config.type ||
                    (this.config.parallel
                        ? 'parallel'
                        : this.config.states && U_(this.config.states).length
                          ? 'compound'
                          : this.config.history
                            ? 'history'
                            : 'atomic')),
                (this.schema = this.parent
                    ? this.machine.schema
                    : null !== (i = this.config.schema) && void 0 !== i
                      ? i
                      : {}),
                (this.description = this.config.description),
                (this.initial = this.config.initial),
                (this.states = this.config.states
                    ? K_(this.config.states, function (t, n) {
                          var r,
                              i = new e(t, { _parent: o, _key: n });
                          return (Object.assign(o.idMap, L_((((r = {})[i.id] = i), r), i.idMap)), i);
                      })
                    : fS));
            var a = 0;
            (!(function e(t) {
                var n, r;
                t.order = a++;
                try {
                    for (var i = z_(Gw(t)), o = i.next(); !o.done; o = i.next()) {
                        e(o.value);
                    }
                } catch (s) {
                    n = { error: s };
                } finally {
                    try {
                        o && !o.done && (r = i.return) && r.call(i);
                    } finally {
                        if (n) throw n.error;
                    }
                }
            })(this),
                (this.history = !0 === this.config.history ? 'shallow' : this.config.history || !1),
                (this._transient =
                    !!this.config.always ||
                    (!!this.config.on &&
                        (Array.isArray(this.config.on)
                            ? this.config.on.some(function (e) {
                                  return '' === e.event;
                              })
                            : '' in this.config.on))),
                (this.strict = !!this.config.strict),
                (this.onEntry = Z_(this.config.entry || this.config.onEntry).map(function (e) {
                    return Vw(e);
                })),
                (this.onExit = Z_(this.config.exit || this.config.onExit).map(function (e) {
                    return Vw(e);
                })),
                (this.meta = this.config.meta),
                (this.doneData = 'final' === this.type ? this.config.data : void 0),
                (this.invoke = Z_(this.config.invoke).map(function (e, t) {
                    var n, r;
                    if (pw(e))
                        return (
                            (o.machine.options.services = L_((((n = {})[e.id] = e), n), o.machine.options.services)),
                            cS({ src: e.id, id: e.id })
                        );
                    if (sw(e.src)) return cS(L_(L_({}, e), { id: e.id || e.src, src: e.src }));
                    if (pw(e.src) || aw(e.src)) {
                        var i = ''.concat(o.id, ':invocation[').concat(t, ']');
                        return (
                            (o.machine.options.services = L_((((r = {})[i] = e.src), r), o.machine.options.services)),
                            cS(L_(L_({ id: i }, e), { src: i }))
                        );
                    }
                    var a = e.src;
                    return cS(L_(L_({ id: a.type }, e), { src: a }));
                })),
                (this.activities = Z_(this.config.activities)
                    .concat(this.invoke)
                    .map(function (e) {
                        return Fw(e);
                    })),
                (this.transition = this.transition.bind(this)),
                (this.tags = Z_(this.config.tags)));
        }
        return (
            (e.prototype._init = function () {
                this.__cache.transitions ||
                    Xw(this).forEach(function (e) {
                        return e.on;
                    });
            }),
            (e.prototype.withConfig = function (t, n) {
                var r = this.options,
                    i = r.actions,
                    o = r.activities,
                    a = r.guards,
                    s = r.services,
                    u = r.delays;
                return new e(
                    this.config,
                    {
                        actions: L_(L_({}, i), t.actions),
                        activities: L_(L_({}, o), t.activities),
                        guards: L_(L_({}, a), t.guards),
                        services: L_(L_({}, s), t.services),
                        delays: L_(L_({}, u), t.delays),
                    },
                    null != n ? n : this.context,
                );
            }),
            (e.prototype.withContext = function (t) {
                return new e(this.config, this.options, t);
            }),
            Object.defineProperty(e.prototype, 'context', {
                get: function () {
                    return aw(this._context) ? this._context() : this._context;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'definition', {
                get: function () {
                    return {
                        id: this.id,
                        key: this.key,
                        version: this.version,
                        context: this.context,
                        type: this.type,
                        initial: this.initial,
                        history: this.history,
                        states: K_(this.states, function (e) {
                            return e.definition;
                        }),
                        on: this.on,
                        transitions: this.transitions,
                        entry: this.onEntry,
                        exit: this.onExit,
                        activities: this.activities || [],
                        meta: this.meta,
                        order: this.order || -1,
                        data: this.doneData,
                        invoke: this.invoke,
                        description: this.description,
                        tags: this.tags,
                    };
                },
                enumerable: !1,
                configurable: !0,
            }),
            (e.prototype.toJSON = function () {
                return this.definition;
            }),
            Object.defineProperty(e.prototype, 'on', {
                get: function () {
                    if (this.__cache.on) return this.__cache.on;
                    var e = this.transitions;
                    return (this.__cache.on = e.reduce(function (e, t) {
                        return ((e[t.eventType] = e[t.eventType] || []), e[t.eventType].push(t), e);
                    }, {}));
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'after', {
                get: function () {
                    return (
                        this.__cache.delayedTransitions ||
                        ((this.__cache.delayedTransitions = this.getDelayedTransitions()),
                        this.__cache.delayedTransitions)
                    );
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'transitions', {
                get: function () {
                    return (
                        this.__cache.transitions ||
                        ((this.__cache.transitions = this.formatTransitions()), this.__cache.transitions)
                    );
                },
                enumerable: !1,
                configurable: !0,
            }),
            (e.prototype.getCandidates = function (e) {
                if (this.__cache.candidates[e]) return this.__cache.candidates[e];
                var t = '' === e,
                    n = this.transitions.filter(function (n) {
                        var r = n.eventType === e;
                        return t ? r : r || '*' === n.eventType;
                    });
                return ((this.__cache.candidates[e] = n), n);
            }),
            (e.prototype.getDelayedTransitions = function () {
                var e = this,
                    t = this.config.after;
                if (!t) return [];
                var n = function (t, n) {
                    var r = (function (e, t) {
                        var n = t ? '#'.concat(t) : '';
                        return ''.concat(lw.After, '(').concat(e, ')').concat(n);
                    })(aw(t) ? ''.concat(e.id, ':delay[').concat(n, ']') : t, e.id);
                    return (e.onEntry.push(Bw(r, { delay: t })), e.onExit.push({ type: Ow, sendId: r }), r);
                };
                return (
                    ow(t)
                        ? t.map(function (e, t) {
                              var r = n(e.delay, t);
                              return L_(L_({}, e), { event: r });
                          })
                        : Y_(
                              U_(t).map(function (e, r) {
                                  var i = t[e],
                                      o = sw(i) ? { target: i } : i,
                                      a = isNaN(+e) ? e : +e,
                                      s = n(a, r);
                                  return Z_(o).map(function (e) {
                                      return L_(L_({}, e), { event: s, delay: a });
                                  });
                              }),
                          )
                ).map(function (t) {
                    var n = t.delay;
                    return L_(L_({}, e.formatTransition(t)), { delay: n });
                });
            }),
            (e.prototype.getStateNodes = function (e) {
                var t,
                    n = this;
                if (!e) return [];
                var r = e instanceof oS ? e.value : H_(e, this.delimiter);
                if (sw(r)) {
                    var i = this.getStateNode(r).initial;
                    return void 0 !== i ? this.getStateNodes((((t = {})[r] = i), t)) : [this, this.states[r]];
                }
                var o = U_(r),
                    a = o.map(function (e) {
                        return n.getStateNode(e);
                    });
                return (
                    a.push(this),
                    a.concat(
                        o.reduce(function (e, t) {
                            var i = n.getStateNode(t).getStateNodes(r[t]);
                            return e.concat(i);
                        }, []),
                    )
                );
            }),
            (e.prototype.handles = function (e) {
                var t = $_(e);
                return this.events.includes(t);
            }),
            (e.prototype.resolveState = function (e) {
                var t = Array.from(Yw([], this.getStateNodes(e.value)));
                return new oS(
                    L_(L_({}, e), { value: this.resolve(e.value), configuration: t, done: nS(t, this), tags: rS(t) }),
                );
            }),
            (e.prototype.transitionLeafNode = function (e, t, n) {
                var r = this.getStateNode(e).next(t, n);
                return r && r.transitions.length ? r : this.next(t, n);
            }),
            (e.prototype.transitionCompoundNode = function (e, t, n) {
                var r = U_(e),
                    i = this.getStateNode(r[0])._transition(e[r[0]], t, n);
                return i && i.transitions.length ? i : this.next(t, n);
            }),
            (e.prototype.transitionParallelNode = function (e, t, n) {
                var r,
                    i,
                    o = {};
                try {
                    for (var a = z_(U_(e)), s = a.next(); !s.done; s = a.next()) {
                        var u = s.value,
                            l = e[u];
                        if (l) {
                            var c = this.getStateNode(u)._transition(l, t, n);
                            c && (o[u] = c);
                        }
                    }
                } catch (v) {
                    r = { error: v };
                } finally {
                    try {
                        s && !s.done && (i = a.return) && i.call(a);
                    } finally {
                        if (r) throw r.error;
                    }
                }
                var f = U_(o).map(function (e) {
                        return o[e];
                    }),
                    d = Y_(
                        f.map(function (e) {
                            return e.transitions;
                        }),
                    );
                if (
                    !f.some(function (e) {
                        return e.transitions.length > 0;
                    })
                )
                    return this.next(t, n);
                var h = Y_(
                        f.map(function (e) {
                            return e.entrySet;
                        }),
                    ),
                    p = Y_(
                        U_(o).map(function (e) {
                            return o[e].configuration;
                        }),
                    );
                return {
                    transitions: d,
                    entrySet: h,
                    exitSet: Y_(
                        f.map(function (e) {
                            return e.exitSet;
                        }),
                    ),
                    configuration: p,
                    source: t,
                    actions: Y_(
                        U_(o).map(function (e) {
                            return o[e].actions;
                        }),
                    ),
                };
            }),
            (e.prototype._transition = function (e, t, n) {
                return sw(e)
                    ? this.transitionLeafNode(e, t, n)
                    : 1 === U_(e).length
                      ? this.transitionCompoundNode(e, t, n)
                      : this.transitionParallelNode(e, t, n);
            }),
            (e.prototype.next = function (e, t) {
                var n,
                    r,
                    i,
                    o = this,
                    a = t.name,
                    s = [],
                    u = [];
                try {
                    for (var l = z_(this.getCandidates(a)), c = l.next(); !c.done; c = l.next()) {
                        var f = c.value,
                            d = f.cond,
                            h = f.in,
                            p = e.context,
                            v =
                                !h ||
                                (sw(h) && dS(h)
                                    ? e.matches(H_(this.getStateNodeById(h).path, this.delimiter))
                                    : B_(H_(h, this.delimiter), G_(this.path.slice(0, -2))(e.value))),
                            y = !1;
                        try {
                            y = !d || mw(this.machine, d, p, t, e);
                        } catch (b) {
                            throw new Error(
                                "Unable to evaluate guard '"
                                    .concat(d.name || d.type, "' in transition for event '")
                                    .concat(a, "' in state node '")
                                    .concat(this.id, "':\n")
                                    .concat(b.message),
                            );
                        }
                        if (y && v) {
                            (void 0 !== f.target && (u = f.target),
                                s.push.apply(s, V_([], D_(f.actions), !1)),
                                (i = f));
                            break;
                        }
                    }
                } catch (_) {
                    n = { error: _ };
                } finally {
                    try {
                        c && !c.done && (r = l.return) && r.call(l);
                    } finally {
                        if (n) throw n.error;
                    }
                }
                if (i) {
                    if (!u.length)
                        return {
                            transitions: [i],
                            entrySet: [],
                            exitSet: [],
                            configuration: e.value ? [this] : [],
                            source: e,
                            actions: s,
                        };
                    var g = Y_(
                            u.map(function (t) {
                                return o.getRelativeStateNodes(t, e.historyValue);
                            }),
                        ),
                        m = !!i.internal;
                    return {
                        transitions: [i],
                        entrySet: m
                            ? []
                            : Y_(
                                  g.map(function (e) {
                                      return o.nodesFromChild(e);
                                  }),
                              ),
                        exitSet: m ? [] : [this],
                        configuration: g,
                        source: e,
                        actions: s,
                    };
                }
            }),
            (e.prototype.nodesFromChild = function (e) {
                if (e.escapes(this)) return [];
                for (var t = [], n = e; n && n !== this; ) (t.push(n), (n = n.parent));
                return (t.push(this), t);
            }),
            (e.prototype.escapes = function (e) {
                if (this === e) return !1;
                for (var t = this.parent; t; ) {
                    if (t === e) return !1;
                    t = t.parent;
                }
                return !0;
            }),
            (e.prototype.getActions = function (e, t, n, r) {
                var i,
                    o,
                    a,
                    s,
                    u = Yw([], r ? this.getStateNodes(r.value) : [this]),
                    l = e.configuration.length ? Yw(u, e.configuration) : u;
                try {
                    for (var c = z_(l), f = c.next(); !f.done; f = c.next()) {
                        tS(u, (p = f.value)) || e.entrySet.push(p);
                    }
                } catch (w) {
                    i = { error: w };
                } finally {
                    try {
                        f && !f.done && (o = c.return) && o.call(c);
                    } finally {
                        if (i) throw i.error;
                    }
                }
                try {
                    for (var d = z_(u), h = d.next(); !h.done; h = d.next()) {
                        var p;
                        (tS(l, (p = h.value)) && !tS(e.exitSet, p.parent)) || e.exitSet.push(p);
                    }
                } catch (S) {
                    a = { error: S };
                } finally {
                    try {
                        h && !h.done && (s = d.return) && s.call(d);
                    } finally {
                        if (a) throw a.error;
                    }
                }
                e.source || ((e.exitSet = []), e.entrySet.push(this));
                var v = Y_(
                    e.entrySet.map(function (r) {
                        var i = [];
                        if ('final' !== r.type) return i;
                        var o = r.parent;
                        if (!o.parent) return i;
                        i.push(qw(r.id, r.doneData), qw(o.id, r.doneData ? ew(r.doneData, t, n) : void 0));
                        var a = o.parent;
                        return (
                            'parallel' === a.type &&
                                Gw(a).every(function (t) {
                                    return nS(e.configuration, t);
                                }) &&
                                i.push(qw(a.id)),
                            i
                        );
                    }),
                );
                (e.exitSet.sort(function (e, t) {
                    return t.order - e.order;
                }),
                    e.entrySet.sort(function (e, t) {
                        return e.order - t.order;
                    }));
                var y = new Set(e.entrySet),
                    g = new Set(e.exitSet),
                    m = D_(
                        [
                            Y_(
                                Array.from(y).map(function (e) {
                                    return V_(
                                        V_(
                                            [],
                                            D_(
                                                e.activities.map(function (e) {
                                                    return (function (e) {
                                                        var t = Fw(e);
                                                        return { type: lw.Start, activity: t, exec: void 0 };
                                                    })(e);
                                                }),
                                            ),
                                            !1,
                                        ),
                                        D_(e.onEntry),
                                        !1,
                                    );
                                }),
                            ).concat(v.map(Uw)),
                            Y_(
                                Array.from(g).map(function (e) {
                                    return V_(
                                        V_([], D_(e.onExit), !1),
                                        D_(
                                            e.activities.map(function (e) {
                                                return (function (e) {
                                                    var t = aw(e) ? e : Fw(e);
                                                    return { type: lw.Stop, activity: t, exec: void 0 };
                                                })(e);
                                            }),
                                        ),
                                        !1,
                                    );
                                }),
                            ),
                        ],
                        2,
                    ),
                    b = m[0],
                    _ = m[1];
                return Mw(_.concat(e.actions).concat(b), this.machine.options.actions);
            }),
            (e.prototype.transition = function (e, t, n) {
                void 0 === e && (e = this.initialState);
                var r,
                    i,
                    o = yw(t);
                if (e instanceof oS) r = void 0 === n ? e : this.resolveState(oS.from(e, n));
                else {
                    var a = sw(e) ? this.resolve(W_(this.getResolvedPath(e))) : this.resolve(e),
                        s = null != n ? n : this.machine.context;
                    r = this.resolveState(oS.from(a, s));
                }
                if (this.strict && !this.events.includes(o.name) && ((i = o.name), !/^(done|error)\./.test(i)))
                    throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(o.name, "'"));
                var u = this._transition(r.value, r, o) || {
                        transitions: [],
                        configuration: [],
                        entrySet: [],
                        exitSet: [],
                        source: r,
                        actions: [],
                    },
                    l = Yw([], this.getStateNodes(r.value)),
                    c = u.configuration.length ? Yw(l, u.configuration) : l;
                return ((u.configuration = V_([], D_(c), !1)), this.resolveTransition(u, r, o));
            }),
            (e.prototype.resolveRaisedTransition = function (e, t, n) {
                var r,
                    i = e.actions;
                return (
                    ((e = this.transition(e, t))._event = n),
                    (e.event = n.data),
                    (r = e.actions).unshift.apply(r, V_([], D_(i), !1)),
                    e
                );
            }),
            (e.prototype.resolveTransition = function (e, t, n, r) {
                var i,
                    o,
                    a = this;
                (void 0 === n && (n = zw), void 0 === r && (r = this.machine.context));
                var s = e.configuration,
                    u = !t || e.transitions.length > 0,
                    l = u ? eS(this.machine, s) : void 0,
                    c = t
                        ? t.historyValue
                            ? t.historyValue
                            : e.source
                              ? this.machine.historyValue(t.value)
                              : void 0
                        : void 0,
                    f = t ? t.context : r,
                    d = this.getActions(e, f, n, t),
                    h = t ? L_({}, t.activities) : {};
                try {
                    for (var p = z_(d), v = p.next(); !v.done; v = p.next()) {
                        var y = v.value;
                        y.type === ww
                            ? (h[y.activity.id || y.activity.type] = y)
                            : y.type === Sw && (h[y.activity.id || y.activity.type] = !1);
                    }
                } catch (I) {
                    i = { error: I };
                } finally {
                    try {
                        v && !v.done && (o = p.return) && o.call(p);
                    } finally {
                        if (i) throw i.error;
                    }
                }
                var g,
                    m,
                    b = D_(Kw(this, t, f, n, d, this.machine.config.preserveActionOrder), 2),
                    _ = b[0],
                    w = b[1],
                    S = D_(
                        nw(_, function (e) {
                            return e.type === kw || (e.type === xw && e.to === fw.Internal);
                        }),
                        2,
                    ),
                    k = S[0],
                    x = S[1],
                    O = _.filter(function (e) {
                        var t;
                        return e.type === ww && (null === (t = e.activity) || void 0 === t ? void 0 : t.type) === jw;
                    }).reduce(
                        function (e, t) {
                            return ((e[t.activity.id] = uS(t.activity, a.machine, w, n)), e);
                        },
                        t ? L_({}, t.children) : {},
                    ),
                    E = l ? e.configuration : t ? t.configuration : [],
                    P = nS(E, this),
                    C = new oS({
                        value: l || t.value,
                        context: w,
                        _event: n,
                        _sessionid: t ? t._sessionid : null,
                        historyValue: l
                            ? c
                                ? ((g = c), (m = l), { current: m, states: rw(g, m) })
                                : void 0
                            : t
                              ? t.historyValue
                              : void 0,
                        history: !l || e.source ? t : void 0,
                        actions: l ? x : [],
                        activities: l ? h : t ? t.activities : {},
                        events: [],
                        configuration: E,
                        transitions: e.transitions,
                        children: O,
                        done: P,
                        tags: null == t ? void 0 : t.tags,
                        machine: this,
                    }),
                    N = f !== w;
                C.changed = n.name === Rw || N;
                var j = C.history;
                j && delete j.history;
                var T =
                    !P &&
                    (this._transient ||
                        s.some(function (e) {
                            return e._transient;
                        }));
                if (!(u || (T && '' !== n.name))) return C;
                var A = C;
                if (!P)
                    for (T && (A = this.resolveRaisedTransition(A, { type: Ew }, n)); k.length; ) {
                        var R = k.shift();
                        A = this.resolveRaisedTransition(A, R._event, n);
                    }
                var L =
                    A.changed ||
                    (j ? !!A.actions.length || N || typeof j.value != typeof A.value || !iS(A.value, j.value) : void 0);
                return ((A.changed = L), (A.history = j), (A.tags = rS(A.configuration)), A);
            }),
            (e.prototype.getStateNode = function (e) {
                if (dS(e)) return this.machine.getStateNodeById(e);
                if (!this.states)
                    throw new Error(
                        "Unable to retrieve child state '"
                            .concat(e, "' from '")
                            .concat(this.id, "'; no child states exist."),
                    );
                var t = this.states[e];
                if (!t) throw new Error("Child state '".concat(e, "' does not exist on '").concat(this.id, "'"));
                return t;
            }),
            (e.prototype.getStateNodeById = function (e) {
                var t = dS(e) ? e.slice(1) : e;
                if (t === this.id) return this;
                var n = this.machine.idMap[t];
                if (!n)
                    throw new Error(
                        "Child state node '#".concat(t, "' does not exist on machine '").concat(this.id, "'"),
                    );
                return n;
            }),
            (e.prototype.getStateNodeByPath = function (e) {
                if ('string' == typeof e && dS(e))
                    try {
                        return this.getStateNodeById(e.slice(1));
                    } catch (i) {}
                for (var t = q_(e, this.delimiter).slice(), n = this; t.length; ) {
                    var r = t.shift();
                    if (!r.length) break;
                    n = n.getStateNode(r);
                }
                return n;
            }),
            (e.prototype.resolve = function (e) {
                var t,
                    n = this;
                if (!e) return this.initialStateValue || fS;
                switch (this.type) {
                    case 'parallel':
                        return K_(this.initialStateValue, function (t, r) {
                            return t ? n.getStateNode(r).resolve(e[r] || t) : fS;
                        });
                    case 'compound':
                        if (sw(e)) {
                            var r = this.getStateNode(e);
                            return 'parallel' === r.type || 'compound' === r.type
                                ? (((t = {})[e] = r.initialStateValue), t)
                                : e;
                        }
                        return U_(e).length
                            ? K_(e, function (e, t) {
                                  return e ? n.getStateNode(t).resolve(e) : fS;
                              })
                            : this.initialStateValue || {};
                    default:
                        return e || fS;
                }
            }),
            (e.prototype.getResolvedPath = function (e) {
                if (dS(e)) {
                    var t = this.machine.idMap[e.slice(1)];
                    if (!t) throw new Error("Unable to find state node '".concat(e, "'"));
                    return t.path;
                }
                return q_(e, this.delimiter);
            }),
            Object.defineProperty(e.prototype, 'initialStateValue', {
                get: function () {
                    var e, t;
                    if (this.__cache.initialStateValue) return this.__cache.initialStateValue;
                    if ('parallel' === this.type)
                        t = Q_(
                            this.states,
                            function (e) {
                                return e.initialStateValue || fS;
                            },
                            function (e) {
                                return !('history' === e.type);
                            },
                        );
                    else if (void 0 !== this.initial) {
                        if (!this.states[this.initial])
                            throw new Error(
                                "Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"),
                            );
                        t = Qw(this.states[this.initial])
                            ? this.initial
                            : (((e = {})[this.initial] = this.states[this.initial].initialStateValue), e);
                    } else t = {};
                    return ((this.__cache.initialStateValue = t), this.__cache.initialStateValue);
                },
                enumerable: !1,
                configurable: !0,
            }),
            (e.prototype.getInitialState = function (e, t) {
                var n = this.getStateNodes(e);
                return this.resolveTransition(
                    { configuration: n, entrySet: n, exitSet: [], transitions: [], source: void 0, actions: [] },
                    void 0,
                    void 0,
                    t,
                );
            }),
            Object.defineProperty(e.prototype, 'initialState', {
                get: function () {
                    this._init();
                    var e = this.initialStateValue;
                    if (!e) throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
                    return this.getInitialState(e);
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'target', {
                get: function () {
                    var e;
                    if ('history' === this.type) {
                        var t = this.config;
                        e =
                            sw(t.target) && dS(t.target)
                                ? W_(this.machine.getStateNodeById(t.target).path.slice(this.path.length - 1))
                                : t.target;
                    }
                    return e;
                },
                enumerable: !1,
                configurable: !0,
            }),
            (e.prototype.getRelativeStateNodes = function (e, t, n) {
                return (
                    void 0 === n && (n = !0),
                    n ? ('history' === e.type ? e.resolveHistory(t) : e.initialStateNodes) : [e]
                );
            }),
            Object.defineProperty(e.prototype, 'initialStateNodes', {
                get: function () {
                    var e = this;
                    return Qw(this)
                        ? [this]
                        : 'compound' !== this.type || this.initial
                          ? Y_(
                                X_(this.initialStateValue).map(function (t) {
                                    return e.getFromRelativePath(t);
                                }),
                            )
                          : [this];
                },
                enumerable: !1,
                configurable: !0,
            }),
            (e.prototype.getFromRelativePath = function (e) {
                if (!e.length) return [this];
                var t = D_(e),
                    n = t[0],
                    r = t.slice(1);
                if (!this.states) throw new Error("Cannot retrieve subPath '".concat(n, "' from node with no states"));
                var i = this.getStateNode(n);
                if ('history' === i.type) return i.resolveHistory();
                if (!this.states[n])
                    throw new Error("Child state '".concat(n, "' does not exist on '").concat(this.id, "'"));
                return this.states[n].getFromRelativePath(r);
            }),
            (e.prototype.historyValue = function (e) {
                if (U_(this.states).length)
                    return {
                        current: e || this.initialStateValue,
                        states: Q_(
                            this.states,
                            function (t, n) {
                                if (!e) return t.historyValue();
                                var r = sw(e) ? void 0 : e[n];
                                return t.historyValue(r || t.initialStateValue);
                            },
                            function (e) {
                                return !e.history;
                            },
                        ),
                    };
            }),
            (e.prototype.resolveHistory = function (e) {
                var t = this;
                if ('history' !== this.type) return [this];
                var n = this.parent;
                if (!e) {
                    var r = this.target;
                    return r
                        ? Y_(
                              X_(r).map(function (e) {
                                  return n.getFromRelativePath(e);
                              }),
                          )
                        : n.initialStateNodes;
                }
                var i,
                    o,
                    a = ((i = n.path),
                    (o = 'states'),
                    function (e) {
                        var t,
                            n,
                            r = e;
                        try {
                            for (var a = z_(i), s = a.next(); !s.done; s = a.next()) {
                                var u = s.value;
                                r = r[o][u];
                            }
                        } catch (l) {
                            t = { error: l };
                        } finally {
                            try {
                                s && !s.done && (n = a.return) && n.call(a);
                            } finally {
                                if (t) throw t.error;
                            }
                        }
                        return r;
                    })(e).current;
                return sw(a)
                    ? [n.getStateNode(a)]
                    : Y_(
                          X_(a).map(function (e) {
                              return 'deep' === t.history ? n.getFromRelativePath(e) : [n.states[e[0]]];
                          }),
                      );
            }),
            Object.defineProperty(e.prototype, 'stateIds', {
                get: function () {
                    var e = this,
                        t = Y_(
                            U_(this.states).map(function (t) {
                                return e.states[t].stateIds;
                            }),
                        );
                    return [this.id].concat(t);
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'events', {
                get: function () {
                    var e, t, n, r;
                    if (this.__cache.events) return this.__cache.events;
                    var i = this.states,
                        o = new Set(this.ownEvents);
                    if (i)
                        try {
                            for (var a = z_(U_(i)), s = a.next(); !s.done; s = a.next()) {
                                var u = i[s.value];
                                if (u.states)
                                    try {
                                        for (
                                            var l = ((n = void 0), z_(u.events)), c = l.next();
                                            !c.done;
                                            c = l.next()
                                        ) {
                                            var f = c.value;
                                            o.add(''.concat(f));
                                        }
                                    } catch (d) {
                                        n = { error: d };
                                    } finally {
                                        try {
                                            c && !c.done && (r = l.return) && r.call(l);
                                        } finally {
                                            if (n) throw n.error;
                                        }
                                    }
                            }
                        } catch (h) {
                            e = { error: h };
                        } finally {
                            try {
                                s && !s.done && (t = a.return) && t.call(a);
                            } finally {
                                if (e) throw e.error;
                            }
                        }
                    return (this.__cache.events = Array.from(o));
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'ownEvents', {
                get: function () {
                    var e = new Set(
                        this.transitions
                            .filter(function (e) {
                                return !(!e.target && !e.actions.length && e.internal);
                            })
                            .map(function (e) {
                                return e.eventType;
                            }),
                    );
                    return Array.from(e);
                },
                enumerable: !1,
                configurable: !0,
            }),
            (e.prototype.resolveTarget = function (e) {
                var t = this;
                if (void 0 !== e)
                    return e.map(function (e) {
                        if (!sw(e)) return e;
                        var n = e[0] === t.delimiter;
                        if (n && !t.parent) return t.getStateNodeByPath(e.slice(1));
                        var r = n ? t.key + e : e;
                        if (!t.parent) return t.getStateNodeByPath(r);
                        try {
                            return t.parent.getStateNodeByPath(r);
                        } catch (i) {
                            throw new Error(
                                "Invalid transition definition for state node '".concat(t.id, "':\n").concat(i.message),
                            );
                        }
                    });
            }),
            (e.prototype.formatTransition = function (e) {
                var t = this,
                    n = (function (e) {
                        if (void 0 !== e && '' !== e) return Z_(e);
                    })(e.target),
                    r =
                        'internal' in e
                            ? e.internal
                            : !n ||
                              n.some(function (e) {
                                  return sw(e) && e[0] === t.delimiter;
                              }),
                    i = this.machine.options.guards,
                    o = this.resolveTarget(n),
                    a = L_(L_({}, e), {
                        actions: Mw(Z_(e.actions)),
                        cond: uw(e.cond, i),
                        target: o,
                        source: this,
                        internal: r,
                        eventType: e.event,
                        toJSON: function () {
                            return L_(L_({}, a), {
                                target: a.target
                                    ? a.target.map(function (e) {
                                          return '#'.concat(e.id);
                                      })
                                    : void 0,
                                source: '#'.concat(t.id),
                            });
                        },
                    });
                return a;
            }),
            (e.prototype.formatTransitions = function () {
                var e,
                    t,
                    n,
                    r = this;
                if (this.config.on)
                    if (Array.isArray(this.config.on)) n = this.config.on;
                    else {
                        var i = this.config.on,
                            o = '*',
                            a = i[o],
                            s = void 0 === a ? [] : a,
                            u = I_(i, ['*']);
                        n = Y_(
                            U_(u)
                                .map(function (e) {
                                    return gw(e, u[e]);
                                })
                                .concat(gw('*', s)),
                        );
                    }
                else n = [];
                var l = this.config.always ? gw('', this.config.always) : [],
                    c = this.config.onDone ? gw(String(qw(this.id)), this.config.onDone) : [],
                    f = Y_(
                        this.invoke.map(function (e) {
                            var t = [];
                            return (
                                e.onDone && t.push.apply(t, V_([], D_(gw(String(Hw(e.id)), e.onDone)), !1)),
                                e.onError && t.push.apply(t, V_([], D_(gw(String(Ww(e.id)), e.onError)), !1)),
                                t
                            );
                        }),
                    ),
                    d = this.after,
                    h = Y_(
                        V_(V_(V_(V_([], D_(c), !1), D_(f), !1), D_(n), !1), D_(l), !1).map(function (e) {
                            return Z_(e).map(function (e) {
                                return r.formatTransition(e);
                            });
                        }),
                    );
                try {
                    for (var p = z_(d), v = p.next(); !v.done; v = p.next()) {
                        var y = v.value;
                        h.push(y);
                    }
                } catch (g) {
                    e = { error: g };
                } finally {
                    try {
                        v && !v.done && (t = p.return) && t.call(p);
                    } finally {
                        if (e) throw e.error;
                    }
                }
                return h;
            }),
            e
        );
    })();
function pS(e, t) {
    return new hS(e, t);
}
var vS = { deferEvents: !1 },
    yS = (function () {
        function e(e) {
            ((this.processingEvent = !1),
                (this.queue = []),
                (this.initialized = !1),
                (this.options = L_(L_({}, vS), e)));
        }
        return (
            (e.prototype.initialize = function (e) {
                if (((this.initialized = !0), e)) {
                    if (!this.options.deferEvents) return void this.schedule(e);
                    this.process(e);
                }
                this.flushEvents();
            }),
            (e.prototype.schedule = function (e) {
                if (this.initialized && !this.processingEvent) {
                    if (0 !== this.queue.length)
                        throw new Error('Event queue should be empty when it is not processing events');
                    (this.process(e), this.flushEvents());
                } else this.queue.push(e);
            }),
            (e.prototype.clear = function () {
                this.queue = [];
            }),
            (e.prototype.flushEvents = function () {
                for (var e = this.queue.shift(); e; ) (this.process(e), (e = this.queue.shift()));
            }),
            (e.prototype.process = function (e) {
                this.processingEvent = !0;
                try {
                    e();
                } catch (t) {
                    throw (this.clear(), t);
                } finally {
                    this.processingEvent = !1;
                }
            }),
            e
        );
    })(),
    gS = new Map(),
    mS = 0,
    bS = function () {
        return 'x:'.concat(mS++);
    },
    _S = function (e, t) {
        return (gS.set(e, t), e);
    },
    wS = function (e) {
        return gS.get(e);
    },
    SS = function (e) {
        gS.delete(e);
    };
function kS() {
    return 'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof self
          ? self
          : 'undefined' != typeof window
            ? window
            : 'undefined' != typeof global
              ? global
              : void 0;
}
function xS(e) {
    if (kS()) {
        var t = (function () {
            var e = kS();
            if (e && '__xstate__' in e) return e.__xstate__;
        })();
        t && t.register(e);
    }
}
function OS(e, t) {
    void 0 === t && (t = {});
    var n,
        r = e.initialState,
        i = new Set(),
        o = [],
        a = !1,
        s =
            ((n = {
                id: t.id,
                send: function (t) {
                    (o.push(t),
                        (function () {
                            if (!a) {
                                for (a = !0; o.length > 0; ) {
                                    var t = o.shift();
                                    ((r = e.transition(r, t, u)),
                                        i.forEach(function (e) {
                                            return e.next(r);
                                        }));
                                }
                                a = !1;
                            }
                        })());
                },
                getSnapshot: function () {
                    return r;
                },
                subscribe: function (e, t, n) {
                    var o = _w(e, t, n);
                    return (
                        i.add(o),
                        o.next(r),
                        {
                            unsubscribe: function () {
                                i.delete(o);
                            },
                        }
                    );
                },
            }),
            L_(
                {
                    subscribe: function () {
                        return { unsubscribe: function () {} };
                    },
                    id: 'anonymous',
                    getSnapshot: function () {},
                },
                n,
            )),
        u = { parent: t.parent, self: s, id: t.id || 'anonymous', observers: i };
    return ((r = e.start ? e.start(u) : r), s);
}
var ES,
    PS,
    CS = { sync: !1, autoForward: !1 };
(((PS = ES || (ES = {}))[(PS.NotStarted = 0)] = 'NotStarted'),
    (PS[(PS.Running = 1)] = 'Running'),
    (PS[(PS.Stopped = 2)] = 'Stopped'));
var NS = (function () {
    function e(t, n) {
        var r = this;
        (void 0 === n && (n = e.defaultOptions),
            (this.machine = t),
            (this.scheduler = new yS()),
            (this.delayedEventsMap = {}),
            (this.listeners = new Set()),
            (this.contextListeners = new Set()),
            (this.stopListeners = new Set()),
            (this.doneListeners = new Set()),
            (this.eventListeners = new Set()),
            (this.sendListeners = new Set()),
            (this.initialized = !1),
            (this.status = ES.NotStarted),
            (this.children = new Map()),
            (this.forwardTo = new Set()),
            (this.init = this.start),
            (this.send = function (e, t) {
                if (ow(e)) return (r.batch(e), r.state);
                var n = yw(vw(e, t));
                if (r.status === ES.Stopped) return r.state;
                if (r.status !== ES.Running && !r.options.deferEvents)
                    throw new Error(
                        'Event "'
                            .concat(n.name, '" was sent to uninitialized service "')
                            .concat(
                                r.machine.id,
                                '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: ',
                            )
                            .concat(JSON.stringify(n.data)),
                    );
                return (
                    r.scheduler.schedule(function () {
                        r.forward(n);
                        var e = r.nextState(n);
                        r.update(e, n);
                    }),
                    r._state
                );
            }),
            (this.sendTo = function (e, t) {
                var n,
                    i = r.parent && (t === fw.Parent || r.parent.id === t),
                    o = i
                        ? r.parent
                        : sw(t)
                          ? r.children.get(t) || wS(t)
                          : (n = t) && 'function' == typeof n.send
                            ? t
                            : void 0;
                if (o)
                    'machine' in o
                        ? o.send(
                              L_(L_({}, e), {
                                  name: e.name === Aw ? ''.concat(Ww(r.id)) : e.name,
                                  origin: r.sessionId,
                              }),
                          )
                        : o.send(e.data);
                else if (!i)
                    throw new Error("Unable to send event to child '".concat(t, "' from service '").concat(r.id, "'."));
            }));
        var i = L_(L_({}, e.defaultOptions), n),
            o = i.clock,
            a = i.logger,
            s = i.parent,
            u = i.id,
            l = void 0 !== u ? u : t.id;
        ((this.id = l),
            (this.logger = a),
            (this.clock = o),
            (this.parent = s),
            (this.options = i),
            (this.scheduler = new yS({ deferEvents: this.options.deferEvents })),
            (this.sessionId = bS()));
    }
    return (
        Object.defineProperty(e.prototype, 'initialState', {
            get: function () {
                var e = this;
                return this._initialState
                    ? this._initialState
                    : aS(this, function () {
                          return ((e._initialState = e.machine.initialState), e._initialState);
                      });
            },
            enumerable: !1,
            configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'state', {
            get: function () {
                return this._state;
            },
            enumerable: !1,
            configurable: !0,
        }),
        (e.prototype.execute = function (e, t) {
            var n, r;
            try {
                for (var i = z_(e.actions), o = i.next(); !o.done; o = i.next()) {
                    var a = o.value;
                    this.exec(a, e, t);
                }
            } catch (s) {
                n = { error: s };
            } finally {
                try {
                    o && !o.done && (r = i.return) && r.call(i);
                } finally {
                    if (n) throw n.error;
                }
            }
        }),
        (e.prototype.update = function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = this;
            if (
                ((e._sessionid = this.sessionId),
                (this._state = e),
                this.options.execute && this.execute(this.state),
                this.children.forEach(function (e) {
                    c.state.children[e.id] = e;
                }),
                this.devTools && this.devTools.send(t.data, e),
                e.event)
            )
                try {
                    for (var f = z_(this.eventListeners), d = f.next(); !d.done; d = f.next()) {
                        (0, d.value)(e.event);
                    }
                } catch (S) {
                    n = { error: S };
                } finally {
                    try {
                        d && !d.done && (r = f.return) && r.call(f);
                    } finally {
                        if (n) throw n.error;
                    }
                }
            try {
                for (var h = z_(this.listeners), p = h.next(); !p.done; p = h.next()) {
                    (0, p.value)(e, e.event);
                }
            } catch (k) {
                i = { error: k };
            } finally {
                try {
                    p && !p.done && (o = h.return) && o.call(h);
                } finally {
                    if (i) throw i.error;
                }
            }
            try {
                for (var v = z_(this.contextListeners), y = v.next(); !y.done; y = v.next()) {
                    (0, y.value)(this.state.context, this.state.history ? this.state.history.context : void 0);
                }
            } catch (x) {
                a = { error: x };
            } finally {
                try {
                    y && !y.done && (s = v.return) && s.call(v);
                } finally {
                    if (a) throw a.error;
                }
            }
            var g = nS(e.configuration || [], this.machine);
            if (this.state.configuration && g) {
                var m = e.configuration.find(function (e) {
                        return 'final' === e.type && e.parent === c.machine;
                    }),
                    b = m && m.doneData ? ew(m.doneData, e.context, t) : void 0;
                try {
                    for (var _ = z_(this.doneListeners), w = _.next(); !w.done; w = _.next()) {
                        (0, w.value)(Hw(this.id, b));
                    }
                } catch (O) {
                    u = { error: O };
                } finally {
                    try {
                        w && !w.done && (l = _.return) && l.call(_);
                    } finally {
                        if (u) throw u.error;
                    }
                }
                this.stop();
            }
        }),
        (e.prototype.onTransition = function (e) {
            return (this.listeners.add(e), this.status === ES.Running && e(this.state, this.state.event), this);
        }),
        (e.prototype.subscribe = function (e, t, n) {
            var r,
                i = this;
            if (!e) return { unsubscribe: function () {} };
            var o = n;
            return (
                'function' == typeof e ? (r = e) : ((r = e.next.bind(e)), (o = e.complete.bind(e))),
                this.listeners.add(r),
                this.status === ES.Running && r(this.state),
                o && this.onDone(o),
                {
                    unsubscribe: function () {
                        (r && i.listeners.delete(r), o && i.doneListeners.delete(o));
                    },
                }
            );
        }),
        (e.prototype.onEvent = function (e) {
            return (this.eventListeners.add(e), this);
        }),
        (e.prototype.onSend = function (e) {
            return (this.sendListeners.add(e), this);
        }),
        (e.prototype.onChange = function (e) {
            return (this.contextListeners.add(e), this);
        }),
        (e.prototype.onStop = function (e) {
            return (this.stopListeners.add(e), this);
        }),
        (e.prototype.onDone = function (e) {
            return (this.doneListeners.add(e), this);
        }),
        (e.prototype.off = function (e) {
            return (
                this.listeners.delete(e),
                this.eventListeners.delete(e),
                this.sendListeners.delete(e),
                this.stopListeners.delete(e),
                this.doneListeners.delete(e),
                this.contextListeners.delete(e),
                this
            );
        }),
        (e.prototype.start = function (e) {
            var t = this;
            if (this.status === ES.Running) return this;
            (_S(this.sessionId, this), (this.initialized = !0), (this.status = ES.Running));
            var n =
                void 0 === e
                    ? this.initialState
                    : aS(this, function () {
                          return !sw((n = e)) && 'value' in n && 'history' in n
                              ? t.machine.resolveState(e)
                              : t.machine.resolveState(oS.from(e, t.machine.context));
                          var n;
                      });
            return (
                this.options.devTools && this.attachDev(),
                this.scheduler.initialize(function () {
                    t.update(n, zw);
                }),
                this
            );
        }),
        (e.prototype.stop = function () {
            var e,
                t,
                n,
                r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = this;
            try {
                for (var f = z_(this.listeners), d = f.next(); !d.done; d = f.next()) {
                    var h = d.value;
                    this.listeners.delete(h);
                }
            } catch (k) {
                e = { error: k };
            } finally {
                try {
                    d && !d.done && (t = f.return) && t.call(f);
                } finally {
                    if (e) throw e.error;
                }
            }
            try {
                for (var p = z_(this.stopListeners), v = p.next(); !v.done; v = p.next()) {
                    ((h = v.value)(), this.stopListeners.delete(h));
                }
            } catch (x) {
                n = { error: x };
            } finally {
                try {
                    v && !v.done && (r = p.return) && r.call(p);
                } finally {
                    if (n) throw n.error;
                }
            }
            try {
                for (var y = z_(this.contextListeners), g = y.next(); !g.done; g = y.next()) {
                    h = g.value;
                    this.contextListeners.delete(h);
                }
            } catch (O) {
                i = { error: O };
            } finally {
                try {
                    g && !g.done && (o = y.return) && o.call(y);
                } finally {
                    if (i) throw i.error;
                }
            }
            try {
                for (var m = z_(this.doneListeners), b = m.next(); !b.done; b = m.next()) {
                    h = b.value;
                    this.doneListeners.delete(h);
                }
            } catch (E) {
                a = { error: E };
            } finally {
                try {
                    b && !b.done && (s = m.return) && s.call(m);
                } finally {
                    if (a) throw a.error;
                }
            }
            if (!this.initialized) return this;
            (this.state.configuration.forEach(function (e) {
                var t, n;
                try {
                    for (var r = z_(e.definition.exit), i = r.next(); !i.done; i = r.next()) {
                        var o = i.value;
                        c.exec(o, c.state);
                    }
                } catch (a) {
                    t = { error: a };
                } finally {
                    try {
                        i && !i.done && (n = r.return) && n.call(r);
                    } finally {
                        if (t) throw t.error;
                    }
                }
            }),
                this.children.forEach(function (e) {
                    aw(e.stop) && e.stop();
                }));
            try {
                for (var _ = z_(U_(this.delayedEventsMap)), w = _.next(); !w.done; w = _.next()) {
                    var S = w.value;
                    this.clock.clearTimeout(this.delayedEventsMap[S]);
                }
            } catch (P) {
                u = { error: P };
            } finally {
                try {
                    w && !w.done && (l = _.return) && l.call(_);
                } finally {
                    if (u) throw u.error;
                }
            }
            return (
                this.scheduler.clear(),
                (this.initialized = !1),
                (this.status = ES.Stopped),
                SS(this.sessionId),
                this
            );
        }),
        (e.prototype.batch = function (e) {
            var t = this;
            if (this.status === ES.NotStarted && this.options.deferEvents);
            else if (this.status !== ES.Running)
                throw new Error(
                    ''
                        .concat(e.length, ' event(s) were sent to uninitialized service "')
                        .concat(
                            this.machine.id,
                            '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.',
                        ),
                );
            this.scheduler.schedule(function () {
                var n,
                    r,
                    i = t.state,
                    o = !1,
                    a = [],
                    s = function (e) {
                        var n = yw(e);
                        (t.forward(n),
                            (i = aS(t, function () {
                                return t.machine.transition(i, n);
                            })),
                            a.push.apply(
                                a,
                                V_(
                                    [],
                                    D_(
                                        i.actions.map(function (e) {
                                            return (
                                                (n = i),
                                                (r = (t = e).exec),
                                                L_(L_({}, t), {
                                                    exec:
                                                        void 0 !== r
                                                            ? function () {
                                                                  return r(n.context, n.event, {
                                                                      action: t,
                                                                      state: n,
                                                                      _event: n._event,
                                                                  });
                                                              }
                                                            : void 0,
                                                })
                                            );
                                            var t, n, r;
                                        }),
                                    ),
                                    !1,
                                ),
                            ),
                            (o = o || !!i.changed));
                    };
                try {
                    for (var u = z_(e), l = u.next(); !l.done; l = u.next()) {
                        s(l.value);
                    }
                } catch (c) {
                    n = { error: c };
                } finally {
                    try {
                        l && !l.done && (r = u.return) && r.call(u);
                    } finally {
                        if (n) throw n.error;
                    }
                }
                ((i.changed = o), (i.actions = a), t.update(i, yw(e[e.length - 1])));
            });
        }),
        (e.prototype.sender = function (e) {
            return this.send.bind(this, e);
        }),
        (e.prototype.nextState = function (e) {
            var t = this,
                n = yw(e);
            if (
                0 === n.name.indexOf(Tw) &&
                !this.state.nextEvents.some(function (e) {
                    return 0 === e.indexOf(Tw);
                })
            )
                throw n.data.data;
            return aS(this, function () {
                return t.machine.transition(t.state, n);
            });
        }),
        (e.prototype.forward = function (e) {
            var t, n;
            try {
                for (var r = z_(this.forwardTo), i = r.next(); !i.done; i = r.next()) {
                    var o = i.value,
                        a = this.children.get(o);
                    if (!a)
                        throw new Error(
                            "Unable to forward event '"
                                .concat(e, "' from interpreter '")
                                .concat(this.id, "' to nonexistant child '")
                                .concat(o, "'."),
                        );
                    a.send(e);
                }
            } catch (s) {
                t = { error: s };
            } finally {
                try {
                    i && !i.done && (n = r.return) && n.call(r);
                } finally {
                    if (t) throw t.error;
                }
            }
        }),
        (e.prototype.defer = function (e) {
            var t = this;
            this.delayedEventsMap[e.id] = this.clock.setTimeout(function () {
                e.to ? t.sendTo(e._event, e.to) : t.send(e._event);
            }, e.delay);
        }),
        (e.prototype.cancel = function (e) {
            (this.clock.clearTimeout(this.delayedEventsMap[e]), delete this.delayedEventsMap[e]);
        }),
        (e.prototype.exec = function (e, t, n) {
            void 0 === n && (n = this.machine.options.actions);
            var r = t.context,
                i = t._event,
                o = e.exec || Dw(e.type, n),
                a = aw(o) ? o : o ? o.exec : e.exec;
            if (a)
                try {
                    return a(r, i.data, { action: e, state: this.state, _event: i });
                } catch (b) {
                    throw (this.parent && this.parent.send({ type: 'xstate.error', data: b }), b);
                }
            switch (e.type) {
                case xw:
                    var s = e;
                    if ('number' == typeof s.delay) return void this.defer(s);
                    s.to ? this.sendTo(s._event, s.to) : this.send(s._event);
                    break;
                case Ow:
                    this.cancel(e.sendId);
                    break;
                case ww:
                    var u = e.activity;
                    if (!this.state.activities[u.id || u.type]) break;
                    if (u.type === lw.Invoke) {
                        var l = bw(u.src),
                            c = this.machine.options.services ? this.machine.options.services[l.type] : void 0,
                            f = u.id,
                            d = u.data,
                            h = 'autoForward' in u ? u.autoForward : !!u.forward;
                        if (!c) return;
                        var p = d ? ew(d, r, i) : void 0;
                        if ('string' == typeof c) return;
                        var v = aw(c) ? c(r, i.data, { data: p, src: l, meta: u.meta }) : c;
                        if (!v) return;
                        var y = void 0;
                        (pw(v) && ((v = p ? v.withContext(p) : v), (y = { autoForward: h })), this.spawn(v, f, y));
                    } else this.spawnActivity(u);
                    break;
                case Sw:
                    this.stopChild(e.activity.id);
                    break;
                case Cw:
                    var g = e.label,
                        m = e.value;
                    g ? this.logger(g, m) : this.logger(m);
            }
        }),
        (e.prototype.removeChild = function (e) {
            var t;
            (this.children.delete(e),
                this.forwardTo.delete(e),
                null === (t = this.state) || void 0 === t || delete t.children[e]);
        }),
        (e.prototype.stopChild = function (e) {
            var t = this.children.get(e);
            t && (this.removeChild(e), aw(t.stop) && t.stop());
        }),
        (e.prototype.spawn = function (e, t, n) {
            if (tw(e)) return this.spawnPromise(Promise.resolve(e), t);
            if (aw(e)) return this.spawnCallback(e, t);
            if (
                (function (e) {
                    try {
                        return 'function' == typeof e.send;
                    } catch (t) {
                        return !1;
                    }
                })((i = e)) &&
                'id' in i
            )
                return this.spawnActor(e, t);
            if (
                (function (e) {
                    try {
                        return 'subscribe' in e && aw(e.subscribe);
                    } catch (t) {
                        return !1;
                    }
                })(e)
            )
                return this.spawnObservable(e, t);
            if (pw(e)) return this.spawnMachine(e, L_(L_({}, n), { id: t }));
            if (null !== (r = e) && 'object' == typeof r && 'transition' in r && 'function' == typeof r.transition)
                return this.spawnBehavior(e, t);
            throw new Error('Unable to spawn entity "'.concat(t, '" of type "').concat(typeof e, '".'));
            var r, i;
        }),
        (e.prototype.spawnMachine = function (t, n) {
            var r = this;
            void 0 === n && (n = {});
            var i = new e(t, L_(L_({}, this.options), { parent: this, id: n.id || t.id })),
                o = L_(L_({}, CS), n);
            o.sync &&
                i.onTransition(function (e) {
                    r.send(Rw, { state: e, id: i.id });
                });
            var a = i;
            return (
                this.children.set(i.id, a),
                o.autoForward && this.forwardTo.add(i.id),
                i
                    .onDone(function (e) {
                        (r.removeChild(i.id), r.send(yw(e, { origin: i.id })));
                    })
                    .start(),
                a
            );
        }),
        (e.prototype.spawnBehavior = function (e, t) {
            var n = OS(e, { id: t, parent: this });
            return (this.children.set(t, n), n);
        }),
        (e.prototype.spawnPromise = function (e, t) {
            var n,
                r = this,
                i = !1;
            e.then(
                function (e) {
                    i || ((n = e), r.removeChild(t), r.send(yw(Hw(t, e), { origin: t })));
                },
                function (e) {
                    if (!i) {
                        r.removeChild(t);
                        var n = Ww(t, e);
                        try {
                            r.send(yw(n, { origin: t }));
                        } catch (o) {
                            (r.devTools && r.devTools.send(n, r.state), r.machine.strict && r.stop());
                        }
                    }
                },
            );
            var o = {
                id: t,
                send: function () {},
                subscribe: function (t, n, r) {
                    var i = _w(t, n, r),
                        o = !1;
                    return (
                        e.then(
                            function (e) {
                                o || (i.next(e), o || i.complete());
                            },
                            function (e) {
                                o || i.error(e);
                            },
                        ),
                        {
                            unsubscribe: function () {
                                return (o = !0);
                            },
                        }
                    );
                },
                stop: function () {
                    i = !0;
                },
                toJSON: function () {
                    return { id: t };
                },
                getSnapshot: function () {
                    return n;
                },
            };
            return (this.children.set(t, o), o);
        }),
        (e.prototype.spawnCallback = function (e, t) {
            var n,
                r,
                i = this,
                o = !1,
                a = new Set(),
                s = new Set();
            try {
                r = e(
                    function (e) {
                        ((n = e),
                            s.forEach(function (t) {
                                return t(e);
                            }),
                            o || i.send(yw(e, { origin: t })));
                    },
                    function (e) {
                        a.add(e);
                    },
                );
            } catch (l) {
                this.send(Ww(t, l));
            }
            if (tw(r)) return this.spawnPromise(r, t);
            var u = {
                id: t,
                send: function (e) {
                    return a.forEach(function (t) {
                        return t(e);
                    });
                },
                subscribe: function (e) {
                    return (
                        s.add(e),
                        {
                            unsubscribe: function () {
                                s.delete(e);
                            },
                        }
                    );
                },
                stop: function () {
                    ((o = !0), aw(r) && r());
                },
                toJSON: function () {
                    return { id: t };
                },
                getSnapshot: function () {
                    return n;
                },
            };
            return (this.children.set(t, u), u);
        }),
        (e.prototype.spawnObservable = function (e, t) {
            var n,
                r = this,
                i = e.subscribe(
                    function (e) {
                        ((n = e), r.send(yw(e, { origin: t })));
                    },
                    function (e) {
                        (r.removeChild(t), r.send(yw(Ww(t, e), { origin: t })));
                    },
                    function () {
                        (r.removeChild(t), r.send(yw(Hw(t), { origin: t })));
                    },
                ),
                o = {
                    id: t,
                    send: function () {},
                    subscribe: function (t, n, r) {
                        return e.subscribe(t, n, r);
                    },
                    stop: function () {
                        return i.unsubscribe();
                    },
                    getSnapshot: function () {
                        return n;
                    },
                    toJSON: function () {
                        return { id: t };
                    },
                };
            return (this.children.set(t, o), o);
        }),
        (e.prototype.spawnActor = function (e, t) {
            return (this.children.set(t, e), e);
        }),
        (e.prototype.spawnActivity = function (e) {
            var t =
                this.machine.options && this.machine.options.activities
                    ? this.machine.options.activities[e.type]
                    : void 0;
            if (t) {
                var n = t(this.state.context, e);
                this.spawnEffect(e.id, n);
            }
        }),
        (e.prototype.spawnEffect = function (e, t) {
            this.children.set(e, {
                id: e,
                send: function () {},
                subscribe: function () {
                    return { unsubscribe: function () {} };
                },
                stop: t || void 0,
                getSnapshot: function () {},
                toJSON: function () {
                    return { id: e };
                },
            });
        }),
        (e.prototype.attachDev = function () {
            var e = kS();
            if (this.options.devTools && e) {
                if (e.__REDUX_DEVTOOLS_EXTENSION__) {
                    var t = 'object' == typeof this.options.devTools ? this.options.devTools : void 0;
                    ((this.devTools = e.__REDUX_DEVTOOLS_EXTENSION__.connect(
                        L_(
                            L_(
                                {
                                    name: this.id,
                                    autoPause: !0,
                                    stateSanitizer: function (e) {
                                        return { value: e.value, context: e.context, actions: e.actions };
                                    },
                                },
                                t,
                            ),
                            { features: L_({ jump: !1, skip: !1 }, t ? t.features : void 0) },
                        ),
                        this.machine,
                    )),
                        this.devTools.init(this.state));
                }
                xS(this);
            }
        }),
        (e.prototype.toJSON = function () {
            return { id: this.id };
        }),
        (e.prototype[hw] = function () {
            return this;
        }),
        (e.prototype.getSnapshot = function () {
            return this.status === ES.NotStarted ? this.initialState : this._state;
        }),
        (e.defaultOptions = (function (e) {
            return {
                execute: !0,
                deferEvents: !0,
                clock: {
                    setTimeout: function (e, t) {
                        return setTimeout(e, t);
                    },
                    clearTimeout: function (e) {
                        return clearTimeout(e);
                    },
                },
                logger: (typeof self !== 'undefined' ? self : global).console.log.bind(console),
                devTools: !1,
            };
        })()),
        (e.interpret = jS),
        e
    );
})();
function jS(e, t) {
    return new NS(e, t);
}
var TS = B.useLayoutEffect;
var AS = { exports: {} },
    RS = {},
    LS = Object.getOwnPropertySymbols,
    IS = Object.prototype.hasOwnProperty,
    zS = Object.prototype.propertyIsEnumerable;
var DS = (function () {
        try {
            if (!Object.assign) return !1;
            var e = new String('abc');
            if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
            for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
            if (
                '0123456789' !==
                Object.getOwnPropertyNames(t)
                    .map(function (e) {
                        return t[e];
                    })
                    .join('')
            )
                return !1;
            var r = {};
            return (
                'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                    r[e] = e;
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
            );
        } catch (i) {
            return !1;
        }
    })()
        ? Object.assign
        : function (e, t) {
              for (
                  var n,
                      r,
                      i = (function (e) {
                          if (null == e) throw new TypeError('Object.assign cannot be called with null or undefined');
                          return Object(e);
                      })(e),
                      o = 1;
                  o < arguments.length;
                  o++
              ) {
                  for (var a in (n = Object(arguments[o]))) IS.call(n, a) && (i[a] = n[a]);
                  if (LS) {
                      r = LS(n);
                      for (var s = 0; s < r.length; s++) zS.call(n, r[s]) && (i[r[s]] = n[r[s]]);
                  }
              }
              return i;
          },
    VS = DS,
    MS = B;
/** @license React vundefined
 * use-subscription.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ((RS.useSubscription = function (e) {
    var t = e.getCurrentValue,
        n = e.subscribe,
        r = MS.useState(function () {
            return { getCurrentValue: t, subscribe: n, value: t() };
        });
    e = r[0];
    var i = r[1];
    return (
        (r = e.value),
        (e.getCurrentValue === t && e.subscribe === n) ||
            ((r = t()), i({ getCurrentValue: t, subscribe: n, value: r })),
        MS.useDebugValue(r),
        MS.useEffect(
            function () {
                function e() {
                    if (!r) {
                        var e = t();
                        i(function (r) {
                            return r.getCurrentValue !== t || r.subscribe !== n || r.value === e
                                ? r
                                : VS({}, r, { value: e });
                        });
                    }
                }
                var r = !1,
                    o = n(e);
                return (
                    e(),
                    function () {
                        ((r = !0), o());
                    }
                );
            },
            [t, n],
        ),
        r
    );
}),
    (AS.exports = RS));
var FS = AS.exports;
var US = function (e, t) {
        return e === t;
    },
    BS = function (e) {
        return 'state' in (n = e) && 'machine' in n
            ? 0 !== ('status' in (t = e) ? t.status : t._status)
                ? t.state
                : t.machine.initialState
            : 'state' in e
              ? e.state
              : void 0;
        var t, n;
    };
function $S(e, t, n, r) {
    (void 0 === n && (n = US), void 0 === r && (r = BS));
    var i = B.useRef(t),
        o = B.useMemo(
            function () {
                var o,
                    a = r(e),
                    s = t(a);
                return {
                    getSnapshot: function () {
                        return a;
                    },
                    getCurrentValue: function () {
                        return s;
                    },
                    setCurrentValue: function (e) {
                        ((s = e), null == o || o());
                    },
                    subscribe: function (t) {
                        o = t;
                        var r = e.subscribe(function (e) {
                            a = e;
                            var r = i.current(e);
                            n(s, r) || ((s = r), t());
                        });
                        return function () {
                            r.unsubscribe();
                        };
                    },
                };
            },
            [e],
        ),
        a = FS.useSubscription(o),
        s = !1;
    if (i.current !== t) {
        var u = t(o.getSnapshot());
        n(a, u) || ((s = !0), (a = u));
    }
    return (
        TS(function () {
            ((i.current = t), s && o.setCurrentValue(a));
        }),
        a
    );
}
var qS = {};
class HS extends Error {
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
const WS = r(
    Object.freeze(
        Object.defineProperty({ __proto__: null, TypeGuardError: HS }, Symbol.toStringTag, { value: 'Module' }),
    ),
);
Object.defineProperty(qS, '__esModule', { value: !0 });
var KS = (qS._assertGuard = void 0);
const QS = WS;
KS = qS._assertGuard = (e, t, n) => {
    if (!0 === e) throw n ? n(t) : new QS.TypeGuardError(t);
    return !1;
};
export {
    lb as C,
    $ as R,
    KS as _,
    me as a,
    _e as b,
    Ae as c,
    be as d,
    Np as e,
    Kf as f,
    o_ as g,
    Md as h,
    Le as i,
    Y as j,
    R_ as k,
    Sb as l,
    Ub as m,
    P_ as n,
    Oh as o,
    Sg as p,
    pS as q,
    B as r,
    jS as s,
    $w as t,
    Jh as u,
    Rp as v,
    Tp as w,
    $S as x,
    $f as y,
    kb as z,
};
