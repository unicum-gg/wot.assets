function e(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var t = { exports: {} },
    n = {},
    r = { exports: {} },
    a = {},
    i = Symbol.for('react.element'),
    o = Symbol.for('react.portal'),
    l = Symbol.for('react.fragment'),
    u = Symbol.for('react.strict_mode'),
    s = Symbol.for('react.profiler'),
    c = Symbol.for('react.provider'),
    f = Symbol.for('react.context'),
    d = Symbol.for('react.forward_ref'),
    p = Symbol.for('react.suspense'),
    h = Symbol.for('react.memo'),
    v = Symbol.for('react.lazy'),
    m = Symbol.iterator;
var g = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    y = Object.assign,
    b = {};
function _(e, t, n) {
    ((this.props = e), (this.context = t), (this.refs = b), (this.updater = n || g));
}
function w() {}
function k(e, t, n) {
    ((this.props = e), (this.context = t), (this.refs = b), (this.updater = n || g));
}
((_.prototype.isReactComponent = {}),
    (_.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e)
            throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
            );
        this.updater.enqueueSetState(this, e, t, 'setState');
    }),
    (_.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
    }),
    (w.prototype = _.prototype));
var S = (k.prototype = new w());
((S.constructor = k), y(S, _.prototype), (S.isPureReactComponent = !0));
var x = Array.isArray,
    O = Object.prototype.hasOwnProperty,
    E = { current: null },
    P = { key: !0, ref: !0, __self: !0, __source: !0 };
function C(e, t, n) {
    var r,
        a = {},
        o = null,
        l = null;
    if (null != t)
        for (r in (void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (o = '' + t.key), t))
            O.call(t, r) && !P.hasOwnProperty(r) && (a[r] = t[r]);
    var u = arguments.length - 2;
    if (1 === u) a.children = n;
    else if (1 < u) {
        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
        a.children = s;
    }
    if (e && e.defaultProps) for (r in (u = e.defaultProps)) void 0 === a[r] && (a[r] = u[r]);
    return { $$typeof: i, type: e, key: o, ref: l, props: a, _owner: E.current };
}
function A(e) {
    return 'object' == typeof e && null !== e && e.$$typeof === i;
}
var N = /\/+/g;
function T(e, t) {
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
function j(e, t, n, r, a) {
    var l = typeof e;
    ('undefined' !== l && 'boolean' !== l) || (e = null);
    var u = !1;
    if (null === e) u = !0;
    else
        switch (l) {
            case 'string':
            case 'number':
                u = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case i:
                    case o:
                        u = !0;
                }
        }
    if (u)
        return (
            (a = a((u = e))),
            (e = '' === r ? '.' + T(u, 0) : r),
            x(a)
                ? ((n = ''),
                  null != e && (n = e.replace(N, '$&/') + '/'),
                  j(a, t, n, '', function (e) {
                      return e;
                  }))
                : null != a &&
                  (A(a) &&
                      (a = (function (e, t) {
                          return { $$typeof: i, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                      })(a, n + (!a.key || (u && u.key === a.key) ? '' : ('' + a.key).replace(N, '$&/') + '/') + e)),
                  t.push(a)),
            1
        );
    if (((u = 0), (r = '' === r ? '.' : r + ':'), x(e)))
        for (var s = 0; s < e.length; s++) {
            var c = r + T((l = e[s]), s);
            u += j(l, t, n, c, a);
        }
    else if (
        ((c = (function (e) {
            return null === e || 'object' != typeof e
                ? null
                : 'function' == typeof (e = (m && e[m]) || e['@@iterator'])
                  ? e
                  : null;
        })(e)),
        'function' == typeof c)
    )
        for (e = c.call(e), s = 0; !(l = e.next()).done; ) u += j((l = l.value), t, n, (c = r + T(l, s++)), a);
    else if ('object' === l)
        throw (
            (t = String(e)),
            Error(
                'Objects are not valid as a React child (found: ' +
                    ('[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
                    '). If you meant to render a collection of children, use an array instead.',
            )
        );
    return u;
}
function L(e, t, n) {
    if (null == e) return e;
    var r = [],
        a = 0;
    return (
        j(e, r, '', '', function (e) {
            return t.call(n, e, a++);
        }),
        r
    );
}
function R(e) {
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
var z = { current: null },
    I = { transition: null },
    D = { ReactCurrentDispatcher: z, ReactCurrentBatchConfig: I, ReactCurrentOwner: E };
function M() {
    throw Error('act(...) is not supported in production builds of React.');
}
((a.Children = {
    map: L,
    forEach: function (e, t, n) {
        L(
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
            L(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            L(e, function (e) {
                return e;
            }) || []
        );
    },
    only: function (e) {
        if (!A(e)) throw Error('React.Children.only expected to receive a single React element child.');
        return e;
    },
}),
    (a.Component = _),
    (a.Fragment = l),
    (a.Profiler = s),
    (a.PureComponent = k),
    (a.StrictMode = u),
    (a.Suspense = p),
    (a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
    (a.act = M),
    (a.cloneElement = function (e, t, n) {
        if (null == e)
            throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
        var r = y({}, e.props),
            a = e.key,
            o = e.ref,
            l = e._owner;
        if (null != t) {
            if (
                (void 0 !== t.ref && ((o = t.ref), (l = E.current)),
                void 0 !== t.key && (a = '' + t.key),
                e.type && e.type.defaultProps)
            )
                var u = e.type.defaultProps;
            for (s in t) O.call(t, s) && !P.hasOwnProperty(s) && (r[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
        }
        var s = arguments.length - 2;
        if (1 === s) r.children = n;
        else if (1 < s) {
            u = Array(s);
            for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
            r.children = u;
        }
        return { $$typeof: i, type: e.type, key: a, ref: o, props: r, _owner: l };
    }),
    (a.createContext = function (e) {
        return (
            ((e = {
                $$typeof: f,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
            }).Provider = { $$typeof: c, _context: e }),
            (e.Consumer = e)
        );
    }),
    (a.createElement = C),
    (a.createFactory = function (e) {
        var t = C.bind(null, e);
        return ((t.type = e), t);
    }),
    (a.createRef = function () {
        return { current: null };
    }),
    (a.forwardRef = function (e) {
        return { $$typeof: d, render: e };
    }),
    (a.isValidElement = A),
    (a.lazy = function (e) {
        return { $$typeof: v, _payload: { _status: -1, _result: e }, _init: R };
    }),
    (a.memo = function (e, t) {
        return { $$typeof: h, type: e, compare: void 0 === t ? null : t };
    }),
    (a.startTransition = function (e) {
        var t = I.transition;
        I.transition = {};
        try {
            e();
        } finally {
            I.transition = t;
        }
    }),
    (a.unstable_act = M),
    (a.useCallback = function (e, t) {
        return z.current.useCallback(e, t);
    }),
    (a.useContext = function (e) {
        return z.current.useContext(e);
    }),
    (a.useDebugValue = function () {}),
    (a.useDeferredValue = function (e) {
        return z.current.useDeferredValue(e);
    }),
    (a.useEffect = function (e, t) {
        return z.current.useEffect(e, t);
    }),
    (a.useId = function () {
        return z.current.useId();
    }),
    (a.useImperativeHandle = function (e, t, n) {
        return z.current.useImperativeHandle(e, t, n);
    }),
    (a.useInsertionEffect = function (e, t) {
        return z.current.useInsertionEffect(e, t);
    }),
    (a.useLayoutEffect = function (e, t) {
        return z.current.useLayoutEffect(e, t);
    }),
    (a.useMemo = function (e, t) {
        return z.current.useMemo(e, t);
    }),
    (a.useReducer = function (e, t, n) {
        return z.current.useReducer(e, t, n);
    }),
    (a.useRef = function (e) {
        return z.current.useRef(e);
    }),
    (a.useState = function (e) {
        return z.current.useState(e);
    }),
    (a.useSyncExternalStore = function (e, t, n) {
        return z.current.useSyncExternalStore(e, t, n);
    }),
    (a.useTransition = function () {
        return z.current.useTransition();
    }),
    (a.version = '18.3.1'),
    (r.exports = a));
var V = r.exports;
const F = e(V);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var U = V,
    B = Symbol.for('react.element'),
    $ = Symbol.for('react.fragment'),
    W = Object.prototype.hasOwnProperty,
    H = U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    K = { key: !0, ref: !0, __self: !0, __source: !0 };
function q(e, t, n) {
    var r,
        a = {},
        i = null,
        o = null;
    for (r in (void 0 !== n && (i = '' + n), void 0 !== t.key && (i = '' + t.key), void 0 !== t.ref && (o = t.ref), t))
        W.call(t, r) && !K.hasOwnProperty(r) && (a[r] = t[r]);
    if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
    return { $$typeof: B, type: e, key: i, ref: o, props: a, _owner: H.current };
}
((n.Fragment = $), (n.jsx = q), (n.jsxs = q), (t.exports = n));
var Q = t.exports,
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
function Y(e, t) {
    if ('function' != typeof t && null !== t)
        throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
    function n() {
        this.constructor = e;
    }
    (G(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())));
}
var X = function () {
    return (
        (X =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
            }),
        X.apply(this, arguments)
    );
};
function Z(e, t) {
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
function J(e, t, n) {
    if (n || 2 === arguments.length)
        for (var r, a = 0, i = t.length; a < i; a++)
            (!r && a in t) || (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
    return e.concat(r || Array.prototype.slice.call(t));
}
'function' == typeof SuppressedError && SuppressedError;
var ee = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (Y(t, e), t);
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
            return (Y(t, e), t);
        })(Error),
    ),
    te = (function (e) {
        function t(t, n, r, a) {
            return (
                e.call(this, ''.concat(t, ': expected ').concat(n, ' to be ').concat(r, ', but got ').concat(a, '.')) ||
                this
            );
        }
        return (
            Y(t, e),
            (t.assert = function (e, n, r, a, i) {
                if (!e) throw new t(n, r, a, i);
                return e;
            }),
            t
        );
    })(ee),
    ne = (function (e) {
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
        return (Y(t, e), t);
    })(ee),
    re = (function (e) {
        function t(t, n) {
            var r = t.toString(),
                a = "Could not register '".concat(r, "'.");
            return (n && (a += ' '.concat(n)), e.call(this, a) || this);
        }
        return (Y(t, e), t);
    })(ee),
    ae = { PROXY: 'PROXY', CLASSIC: 'CLASSIC' },
    ie = { SINGLETON: 'SINGLETON', TRANSIENT: 'TRANSIENT', SCOPED: 'SCOPED' };
function oe(e) {
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
            if (le(u)) n++;
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
                        if (fe(u)) return (s(), r);
                        n++;
                }
        }
    }
    function s() {
        for (var t, i = e.charAt(n), o = ++n; (t = e.charAt(n)), ce.test(t); ) n++;
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
                if (le(a)) {
                    n++;
                    continue;
                }
                if (ue(a)) {
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
function le(e) {
    switch (e) {
        case '\r':
        case '\n':
        case ' ':
            return !0;
    }
    return !1;
}
function ue(e) {
    switch (e) {
        case "'":
        case '"':
        case '`':
            return !0;
    }
    return !1;
}
var se = /^[_$a-zA-Z\xA0-\uFFFF]$/,
    ce = /^[._$a-zA-Z0-9\xA0-\uFFFF]$/;
function fe(e) {
    return se.test(e);
}
function de(e) {
    if ('function' != typeof e) return !1;
    var t = oe(e.toString()),
        n = t.next();
    if ('class' === n.type) return !0;
    var r = t.next();
    return !('function' !== n.type || !r.value || r.value[0] !== r.value[0].toUpperCase());
}
function pe(e) {
    return 'function' == typeof e;
}
var he = Symbol('Awilix Resolver Config');
function ve(e) {
    return {
        resolve: function () {
            return e;
        },
        isLeakSafe: !0,
    };
}
function me(e, t) {
    if (!pe(e)) throw new te('asFunction', 'fn', 'function', e);
    t = we({ lifetime: ie.TRANSIENT }, t, e[he]);
    var n = xe(e);
    return be(ye(X({ resolve: n }, t)));
}
function ge(e, t) {
    if (!pe(e)) throw new te('asClass', 'Type', 'class', e);
    t = we({ lifetime: ie.TRANSIENT }, t, e[he]);
    var n = xe(function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return Reflect.construct(e, t);
    }, e);
    return be(ye(X(X({}, t), { resolve: n })));
}
function ye(e) {
    function t(e) {
        return ye(X(X({}, this), { lifetime: e }));
    }
    function n(e) {
        return ye(X(X({}, this), { injectionMode: e }));
    }
    return ke(e, {
        setLifetime: t,
        inject: function (e) {
            return ye(X(X({}, this), { injector: e }));
        },
        transient: _e(t, ie.TRANSIENT),
        scoped: _e(t, ie.SCOPED),
        singleton: _e(t, ie.SINGLETON),
        setInjectionMode: n,
        proxy: _e(n, ae.PROXY),
        classic: _e(n, ae.CLASSIC),
    });
}
function be(e) {
    return ke(e, {
        disposer: function (e) {
            return be(X(X({}, this), { dispose: e }));
        },
    });
}
function _e(e, t) {
    return function () {
        return e.call(this, t);
    };
}
function we(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return Object.assign.apply(Object, J([{}, e], t, !1));
}
function ke(e, t) {
    return X(X({}, e), t);
}
function Se(e, t) {
    var n,
        r = t(e),
        a = ((n = J(J([], Reflect.ownKeys(e.cradle), !0), Reflect.ownKeys(r), !0)), Array.from(new Set(n)));
    return new Proxy(
        {},
        {
            get: function (t, n) {
                return n === Symbol.iterator
                    ? function () {
                          var t, n, a, i, o, l, u, s;
                          return Z(this, function (c) {
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
function xe(e, t) {
    t || (t = e);
    var n = Oe(t);
    return function (t) {
        if ((this.injectionMode || t.options.injectionMode || ae.PROXY) !== ae.CLASSIC) {
            var r = this.injector ? Se(t, this.injector) : t.cradle;
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
function Oe(e) {
    var t = (function (e) {
        var t = oe(e),
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
        return 'function' == typeof n && n !== Function.prototype ? Oe(n) : [];
    }
    return t;
}
var Ee = Symbol('familyTree'),
    Pe = Symbol('rollUpRegistrations'),
    Ce = 'AwilixContainerCradle';
function Ae(e) {
    return (void 0 === e && (e = {}), Ne(e));
}
function Ne(e, t, n) {
    var r;
    e = X({ injectionMode: ae.PROXY, strict: !1 }, e);
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
                    return Ne(e, l, a);
                },
                register: function (n, r) {
                    for (
                        var a = (function (e, t) {
                                var n,
                                    r = e;
                                return 'string' == typeof r || 'symbol' == typeof r ? (((n = {})[e] = t), n) : r;
                            })(n, r),
                            o = J(J([], Object.keys(a), !0), Object.getOwnPropertySymbols(a), !0),
                            u = 0,
                            s = o;
                        u < s.length;
                        u++
                    ) {
                        var c = s[u],
                            f = a[c];
                        if (e.strict && f.lifetime === ie.SINGLETON && t)
                            throw new re(c, 'Cannot register a singleton on a scoped container.');
                        i[c] = f;
                    }
                    return l;
                },
                build: function (e, t) {
                    if (e && e.resolve) return e.resolve(l);
                    var n = 'build',
                        r = 'targetOrResolver';
                    return (
                        te.assert(e, n, r, 'a registration, function or class', e),
                        te.assert('function' == typeof e, n, r, 'a function or class', e),
                        (de(e) ? ge(e, t) : me(e, t)).resolve(l)
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
            })[Pe] = f),
            Object.defineProperty(r, 'registrations', {
                get: function () {
                    return f();
                },
                enumerable: !1,
                configurable: !0,
            }),
            r),
        u = t ? [l].concat(t[Ee]) : [l];
    l[Ee] = u;
    var s,
        c = (s = u)[s.length - 1];
    return l;
    function f() {
        return X(X({}, t && t[Pe]()), i);
    }
    function d() {
        var e, t, n, r, a;
        return Z(this, function (i) {
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
                throw new ne(t, a, 'Cyclic dependencies detected.');
            if ('toJSON' === t) return p;
            if ('constructor' === t) return Ae;
            if (!r) {
                switch (t) {
                    case 'inspect':
                    case 'toString':
                        return p;
                    case Symbol.toStringTag:
                        return Ce;
                    case 'then':
                        return;
                    case Symbol.iterator:
                        return d;
                }
                if (n.allowUnregistered) return;
                throw new ne(t, a);
            }
            var i = r.lifetime || ie.TRANSIENT;
            if (e.strict && !r.isLeakSafe) {
                var o = a.findIndex(function (e) {
                    var t,
                        n,
                        r = e.lifetime;
                    return (
                        (n = i),
                        ((t = r) === ie.SINGLETON && n !== ie.SINGLETON) || (t === ie.SCOPED && n === ie.TRANSIENT)
                    );
                });
                if (o > -1)
                    throw new ne(
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
                case ie.TRANSIENT:
                    s = r.resolve(l);
                    break;
                case ie.SINGLETON:
                    (u = c.cache.get(t))
                        ? (s = u.value)
                        : ((s = r.resolve(e.strict ? c : l)), c.cache.set(t, { resolver: r, value: s }));
                    break;
                case ie.SCOPED:
                    if (void 0 !== (u = l.cache.get(t))) {
                        s = u.value;
                        break;
                    }
                    ((s = r.resolve(l)), l.cache.set(t, { resolver: r, value: s }));
                    break;
                default:
                    throw new ne(t, a, 'Unknown lifetime "'.concat(r.lifetime, '"'));
            }
            return (a.pop(), s);
        } catch (f) {
            throw ((a.length = 0), f);
        }
    }
}
var Te,
    je = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ((Te = je),
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
        Te.exports ? ((t.default = t), (Te.exports = t)) : (window.classNames = t);
    })());
const Le = e(je.exports);
function Re(e) {
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
var ze = {};
function Ie() {
    return 'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : ze;
}
var De = Object.assign,
    Me = Object.getOwnPropertyDescriptor,
    Ve = Object.defineProperty,
    Fe = Object.prototype,
    Ue = [];
Object.freeze(Ue);
var Be = {};
Object.freeze(Be);
var $e = 'undefined' != typeof Proxy,
    We = Object.toString();
function He() {
    $e || Re('Proxy not available');
}
function Ke(e) {
    var t = !1;
    return function () {
        if (!t) return ((t = !0), e.apply(this, arguments));
    };
}
var qe = function () {};
function Qe(e) {
    return 'function' == typeof e;
}
function Ge(e) {
    switch (typeof e) {
        case 'string':
        case 'symbol':
        case 'number':
            return !0;
    }
    return !1;
}
function Ye(e) {
    return null !== e && 'object' == typeof e;
}
function Xe(e) {
    if (!Ye(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (null == t) return !0;
    var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n.toString() === We;
}
function Ze(e) {
    var t = null == e ? void 0 : e.constructor;
    return !!t && ('GeneratorFunction' === t.name || 'GeneratorFunction' === t.displayName);
}
function Je(e, t, n) {
    Ve(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function et(e, t, n) {
    Ve(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function tt(e, t) {
    var n = 'isMobX' + e;
    return (
        (t.prototype[n] = !0),
        function (e) {
            return Ye(e) && !0 === e[n];
        }
    );
}
function nt(e) {
    return e instanceof Map;
}
function rt(e) {
    return e instanceof Set;
}
var at = void 0 !== Object.getOwnPropertySymbols;
var it =
    'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : at
          ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            }
          : Object.getOwnPropertyNames;
function ot(e) {
    return null === e ? null : 'object' == typeof e ? '' + e : e;
}
function lt(e, t) {
    return Fe.hasOwnProperty.call(e, t);
}
var ut =
    Object.getOwnPropertyDescriptors ||
    function (e) {
        var t = {};
        return (
            it(e).forEach(function (n) {
                t[n] = Me(e, n);
            }),
            t
        );
    };
function st(e, t) {
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
function ct(e, t, n) {
    return (t && st(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function ft() {
    return (
        (ft = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        ft.apply(this, arguments)
    );
}
function dt(e, t) {
    ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), pt(e, t));
}
function pt(e, t) {
    return (pt = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return ((e.__proto__ = t), e);
          })(e, t);
}
function ht(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function vt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function mt(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
        Array.isArray(e) ||
        (n = (function (e, t) {
            if (e) {
                if ('string' == typeof e) return vt(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? vt(e, t)
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
var gt = Symbol('mobx-stored-annotations');
function yt(e) {
    return Object.assign(function (t, n) {
        if (_t(n)) return e.decorate_20223_(t, n);
        bt(t, n, e);
    }, e);
}
function bt(e, t, n) {
    (lt(e, gt) || Je(e, gt, ft({}, e[gt])),
        (function (e) {
            return e.annotationType_ === Ct;
        })(n) || (e[gt][t] = n));
}
function _t(e) {
    return 'object' == typeof e && 'string' == typeof e.kind;
}
var wt = Symbol('mobx administration'),
    kt = (function () {
        function e(e) {
            (void 0 === e && (e = 'Atom'),
                (this.name_ = void 0),
                (this.isPendingUnobservation_ = !1),
                (this.isBeingObserved_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Cn.NOT_TRACKING_),
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
                return Jn(this);
            }),
            (t.reportChanged = function () {
                (Xn(), er(this), Zn());
            }),
            (t.toString = function () {
                return this.name_;
            }),
            e
        );
    })(),
    St = tt('Atom', kt);
function xt(e, t, n) {
    (void 0 === t && (t = qe), void 0 === n && (n = qe));
    var r,
        a = new kt(e);
    return (t !== qe && xr(wr, a, t, r), n !== qe && Sr(a, n), a);
}
var Ot = {
    identity: function (e, t) {
        return e === t;
    },
    structural: function (e, t) {
        return Ua(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
    shallow: function (e, t) {
        return Ua(e, t, 1);
    },
};
function Et(e, t, n) {
    return zr(e)
        ? e
        : Array.isArray(e)
          ? dn.array(e, { name: n })
          : Xe(e)
            ? dn.object(e, void 0, { name: n })
            : nt(e)
              ? dn.map(e, { name: n })
              : rt(e)
                ? dn.set(e, { name: n })
                : 'function' != typeof e || gr(e) || jr(e)
                  ? e
                  : Ze(e)
                    ? Nr(e)
                    : mr(n, e);
}
function Pt(e) {
    return e;
}
var Ct = 'override';
function At(e, t) {
    return { annotationType_: e, options_: t, make_: Nt, extend_: Tt, decorate_20223_: jt };
}
function Nt(e, t, n, r) {
    var a;
    if (null != (a = this.options_) && a.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (gr(n.value)) return 1;
    var i = Lt(e, this, t, n, !1);
    return (Ve(r, t, i), 2);
}
function Tt(e, t, n, r) {
    var a = Lt(e, this, t, n);
    return e.defineProperty_(t, a, r);
}
function jt(e, t) {
    var n = t.kind,
        r = t.name,
        a = t.addInitializer,
        i = this;
    if ('field' != n) {
        var o, l, u, s, c, f;
        if ('method' == n)
            return (
                gr(e) ||
                    ((l = e),
                    (e = kn(
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
        Re(
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
            bt(this, r, i);
        });
}
function Lt(e, t, n, r, a) {
    var i, o, l, u, s, c, f, d;
    (void 0 === a && (a = qn.safeDescriptors), (d = r), t.annotationType_, d.value);
    var p,
        h = r.value;
    null != (i = t.options_) && i.bound && (h = h.bind(null != (p = e.proxy_) ? p : e.target_));
    return {
        value: kn(
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
function Rt(e, t) {
    return { annotationType_: e, options_: t, make_: zt, extend_: It, decorate_20223_: Dt };
}
function zt(e, t, n, r) {
    var a;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (
        null != (a = this.options_) &&
        a.bound &&
        (!lt(e.target_, t) || !jr(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
    )
        return 0;
    if (jr(n.value)) return 1;
    var i = Mt(e, this, t, n, !1, !1);
    return (Ve(r, t, i), 2);
}
function It(e, t, n, r) {
    var a,
        i = Mt(e, this, t, n, null == (a = this.options_) ? void 0 : a.bound);
    return e.defineProperty_(t, i, r);
}
function Dt(e, t) {
    var n,
        r = t.name,
        a = t.addInitializer;
    return (
        jr(e) || (e = Nr(e)),
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
function Mt(e, t, n, r, a, i) {
    var o;
    (void 0 === i && (i = qn.safeDescriptors), (o = r), t.annotationType_, o.value);
    var l,
        u = r.value;
    (jr(u) || (u = Nr(u)), a) && ((u = u.bind(null != (l = e.proxy_) ? l : e.target_)).isMobXFlow = !0);
    return { value: u, configurable: !i || e.isPlainObject_, enumerable: !1, writable: !i };
}
function Vt(e, t) {
    return { annotationType_: e, options_: t, make_: Ft, extend_: Ut, decorate_20223_: Bt };
}
function Ft(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function Ut(e, t, n, r) {
    var a;
    return (
        (a = n),
        this.annotationType_,
        a.get,
        e.defineComputedProperty_(t, ft({}, this.options_, { get: n.get, set: n.set }), r)
    );
}
function Bt(e, t) {
    var n = this,
        r = t.name;
    return (
        (0, t.addInitializer)(function () {
            var t = _a(this)[wt],
                a = ft({}, n.options_, { get: e, context: this });
            (a.name || (a.name = 'ObservableObject.' + r.toString()), t.values_.set(r, new jn(a)));
        }),
        function () {
            return this[wt].getObservablePropValue_(r);
        }
    );
}
function $t(e, t) {
    return { annotationType_: e, options_: t, make_: Wt, extend_: Ht, decorate_20223_: Kt };
}
function Wt(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function Ht(e, t, n, r) {
    var a, i;
    return (
        this.annotationType_,
        e.defineObservableProperty_(
            t,
            n.value,
            null != (a = null == (i = this.options_) ? void 0 : i.enhancer) ? a : Et,
            r,
        )
    );
}
function Kt(e, t) {
    var n = this,
        r = t.kind,
        a = t.name,
        i = new WeakSet();
    function o(e, t) {
        var r,
            o,
            l = _a(e)[wt],
            u = new Pn(
                t,
                null != (r = null == (o = n.options_) ? void 0 : o.enhancer) ? r : Et,
                'ObservableObject.' + a.toString(),
                !1,
            );
        (l.values_.set(a, u), i.add(e));
    }
    if ('accessor' == r)
        return {
            get: function () {
                return (i.has(this) || o(this, e.get.call(this)), this[wt].getObservablePropValue_(a));
            },
            set: function (e) {
                return (i.has(this) || o(this, e), this[wt].setObservablePropValue_(a, e));
            },
            init: function (e) {
                return (i.has(this) || o(this, e), e);
            },
        };
}
var qt = 'true',
    Qt = Gt();
function Gt(e) {
    return { annotationType_: qt, options_: e, make_: Yt, extend_: Xt, decorate_20223_: Zt };
}
function Yt(e, t, n, r) {
    var a, i, o, l;
    if (n.get) return mn.make_(e, t, n, r);
    if (n.set) {
        var u = kn(t.toString(), n.set);
        return r === e.target_
            ? null === e.defineProperty_(t, { configurable: !qn.safeDescriptors || e.isPlainObject_, set: u })
                ? 0
                : 2
            : (Ve(r, t, { configurable: !0, set: u }), 2);
    }
    if (r !== e.target_ && 'function' == typeof n.value)
        return Ze(n.value)
            ? (null != (l = this.options_) && l.autoBind ? Nr.bound : Nr).make_(e, t, n, r)
            : (null != (o = this.options_) && o.autoBind ? mr.bound : mr).make_(e, t, n, r);
    var s,
        c = !1 === (null == (a = this.options_) ? void 0 : a.deep) ? dn.ref : dn;
    'function' == typeof n.value &&
        null != (i = this.options_) &&
        i.autoBind &&
        (n.value = n.value.bind(null != (s = e.proxy_) ? s : e.target_));
    return c.make_(e, t, n, r);
}
function Xt(e, t, n, r) {
    var a, i, o;
    if (n.get) return mn.extend_(e, t, n, r);
    if (n.set)
        return e.defineProperty_(
            t,
            { configurable: !qn.safeDescriptors || e.isPlainObject_, set: kn(t.toString(), n.set) },
            r,
        );
    'function' == typeof n.value &&
        null != (a = this.options_) &&
        a.autoBind &&
        (n.value = n.value.bind(null != (o = e.proxy_) ? o : e.target_));
    return (!1 === (null == (i = this.options_) ? void 0 : i.deep) ? dn.ref : dn).extend_(e, t, n, r);
}
function Zt(e, t) {
    Re("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Jt = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
function en(e) {
    return e || Jt;
}
Object.freeze(Jt);
var tn = $t('observable'),
    nn = $t('observable.ref', { enhancer: Pt }),
    rn = $t('observable.shallow', {
        enhancer: function (e, t, n) {
            return null == e || Sa(e) || oa(e) || pa(e) || ma(e)
                ? e
                : Array.isArray(e)
                  ? dn.array(e, { name: n, deep: !1 })
                  : Xe(e)
                    ? dn.object(e, void 0, { name: n, deep: !1 })
                    : nt(e)
                      ? dn.map(e, { name: n, deep: !1 })
                      : rt(e)
                        ? dn.set(e, { name: n, deep: !1 })
                        : void 0;
        },
    }),
    an = $t('observable.struct', {
        enhancer: function (e, t) {
            return Ua(e, t) ? t : e;
        },
    }),
    on = yt(tn);
function ln(e) {
    return !0 === e.deep
        ? Et
        : !1 === e.deep
          ? Pt
          : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
            ? n
            : Et;
    var t, n, r;
}
function un(e, t, n) {
    return _t(t)
        ? tn.decorate_20223_(e, t)
        : Ge(t)
          ? void bt(e, t, tn)
          : zr(e)
            ? e
            : Xe(e)
              ? dn.object(e, t, n)
              : Array.isArray(e)
                ? dn.array(e, t)
                : nt(e)
                  ? dn.map(e, t)
                  : rt(e)
                    ? dn.set(e, t)
                    : 'object' == typeof e && null !== e
                      ? e
                      : dn.box(e, t);
}
De(un, on);
var sn,
    cn,
    fn = {
        box: function (e, t) {
            var n = en(t);
            return new Pn(e, ln(n), n.name, !0, n.equals);
        },
        array: function (e, t) {
            var n = en(t);
            return (!1 === qn.useProxies || !1 === n.proxy ? za : Xr)(e, ln(n), n.name);
        },
        map: function (e, t) {
            var n = en(t);
            return new da(e, ln(n), n.name);
        },
        set: function (e, t) {
            var n = en(t);
            return new va(e, ln(n), n.name);
        },
        object: function (e, t, n) {
            return Va(function () {
                return Or(
                    !1 === qn.useProxies || !1 === (null == n ? void 0 : n.proxy)
                        ? _a({}, n)
                        : (function (e, t) {
                              var n, r;
                              return (
                                  He(),
                                  (e = _a(e, t)),
                                  null != (r = (n = e[wt]).proxy_) ? r : (n.proxy_ = new Proxy(e, Vr))
                              );
                          })({}, n),
                    e,
                    t,
                );
            });
        },
        ref: yt(nn),
        shallow: yt(rn),
        deep: on,
        struct: yt(an),
    },
    dn = De(un, fn),
    pn = 'computed',
    hn = Vt(pn),
    vn = Vt('computed.struct', { equals: Ot.structural }),
    mn = function (e, t) {
        if (_t(t)) return hn.decorate_20223_(e, t);
        if (Ge(t)) return bt(e, t, hn);
        if (Xe(e)) return yt(Vt(pn, e));
        var n = Xe(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new jn(n));
    };
(Object.assign(mn, hn), (mn.struct = yt(vn)));
var gn,
    yn = 0,
    bn = 1,
    _n = null != (sn = null == (cn = Me(function () {}, 'name')) ? void 0 : cn.configurable) && sn,
    wn = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
function kn(e, t, n, r) {
    function a() {
        return Sn(e, n, t, r || this, arguments);
    }
    return (
        void 0 === n && (n = !1),
        (a.isMobxAction = !0),
        (a.toString = function () {
            return t.toString();
        }),
        _n && ((wn.value = e), Ve(a, 'name', wn)),
        a
    );
}
function Sn(e, t, n, r, a) {
    var i = (function (e, t, n, r) {
        var a = !1,
            i = 0,
            o = qn.trackingDerivation,
            l = !t || !o;
        Xn();
        var u = qn.allowStateChanges;
        l && (Fn(), (u = xn(!0)));
        var s = Bn(!0),
            c = {
                runAsAction_: l,
                prevDerivation_: o,
                prevAllowStateChanges_: u,
                prevAllowStateReads_: s,
                notifySpy_: a,
                startTime_: i,
                actionId_: bn++,
                parentActionId_: yn,
            };
        return ((yn = c.actionId_), c);
    })(0, t);
    try {
        return n.apply(r, a);
    } catch (o) {
        throw ((i.error_ = o), o);
    } finally {
        !(function (e) {
            yn !== e.actionId_ && Re(30);
            ((yn = e.parentActionId_), void 0 !== e.error_ && (qn.suppressReactionErrors = !0));
            (On(e.prevAllowStateChanges_), $n(e.prevAllowStateReads_), Zn(), e.runAsAction_ && Un(e.prevDerivation_));
            qn.suppressReactionErrors = !1;
        })(i);
    }
}
function xn(e) {
    var t = qn.allowStateChanges;
    return ((qn.allowStateChanges = e), t);
}
function On(e) {
    qn.allowStateChanges = e;
}
gn = Symbol.toPrimitive;
var En,
    Pn = (function (e) {
        function t(t, n, r, a, i) {
            var o;
            return (
                void 0 === r && (r = 'ObservableValue'),
                void 0 === i && (i = Ot.default),
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
        dt(t, e);
        var n = t.prototype;
        return (
            (n.dehanceValue = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
                (this.value_, (e = this.prepareNewValue_(e)) !== qn.UNCHANGED && this.setNewValue_(e));
            }),
            (n.prepareNewValue_ = function (e) {
                if (Fr(this)) {
                    var t = Br(this, { object: this, type: Qr, newValue: e });
                    if (!t) return qn.UNCHANGED;
                    e = t.newValue;
                }
                return (
                    (e = this.enhancer(e, this.value_, this.name_)),
                    this.equals(this.value_, e) ? qn.UNCHANGED : e
                );
            }),
            (n.setNewValue_ = function (e) {
                var t = this.value_;
                ((this.value_ = e),
                    this.reportChanged(),
                    $r(this) && Hr(this, { type: Qr, object: this, newValue: e, oldValue: t }));
            }),
            (n.get = function () {
                return (this.reportObserved(), this.dehanceValue(this.value_));
            }),
            (n.intercept_ = function (e) {
                return Ur(this, e);
            }),
            (n.observe_ = function (e, t) {
                return (
                    t &&
                        e({
                            observableKind: 'value',
                            debugObjectName: this.name_,
                            object: this,
                            type: Qr,
                            newValue: this.value_,
                            oldValue: void 0,
                        }),
                    Wr(this, e)
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
                return ot(this.get());
            }),
            (n[gn] = function () {
                return this.valueOf();
            }),
            t
        );
    })(kt);
En = Symbol.toPrimitive;
var Cn,
    An,
    Nn,
    Tn,
    jn = (function () {
        function e(e) {
            ((this.dependenciesState_ = Cn.NOT_TRACKING_),
                (this.observing_ = []),
                (this.newObserving_ = null),
                (this.isBeingObserved_ = !1),
                (this.isPendingUnobservation_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Cn.UP_TO_DATE_),
                (this.unboundDepsCount_ = 0),
                (this.value_ = new Rn(null)),
                (this.name_ = void 0),
                (this.triggeredBy_ = void 0),
                (this.isComputing_ = !1),
                (this.isRunningSetter_ = !1),
                (this.derivation = void 0),
                (this.setter_ = void 0),
                (this.isTracing_ = Nn.NONE),
                (this.scope_ = void 0),
                (this.equals_ = void 0),
                (this.requiresReaction_ = void 0),
                (this.keepAlive_ = void 0),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                e.get || Re(31),
                (this.derivation = e.get),
                (this.name_ = e.name || 'ComputedValue'),
                e.set && (this.setter_ = kn('ComputedValue-setter', e.set)),
                (this.equals_ = e.equals || (e.compareStructural || e.struct ? Ot.structural : Ot.default)),
                (this.scope_ = e.context),
                (this.requiresReaction_ = e.requiresReaction),
                (this.keepAlive_ = !!e.keepAlive));
        }
        var t = e.prototype;
        return (
            (t.onBecomeStale_ = function () {
                !(function (e) {
                    if (e.lowestObserverState_ !== Cn.UP_TO_DATE_) return;
                    ((e.lowestObserverState_ = Cn.POSSIBLY_STALE_),
                        e.observers_.forEach(function (e) {
                            e.dependenciesState_ === Cn.UP_TO_DATE_ &&
                                ((e.dependenciesState_ = Cn.POSSIBLY_STALE_), e.onBecomeStale_());
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
                    (this.isComputing_ && Re(32, this.name_, this.derivation),
                    0 !== qn.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                ) {
                    if ((Jn(this), In(this))) {
                        var e = qn.trackingContext;
                        (this.keepAlive_ && !e && (qn.trackingContext = this),
                            this.trackAndCompute() &&
                                (function (e) {
                                    if (e.lowestObserverState_ === Cn.STALE_) return;
                                    ((e.lowestObserverState_ = Cn.STALE_),
                                        e.observers_.forEach(function (t) {
                                            t.dependenciesState_ === Cn.POSSIBLY_STALE_
                                                ? (t.dependenciesState_ = Cn.STALE_)
                                                : t.dependenciesState_ === Cn.UP_TO_DATE_ &&
                                                  (e.lowestObserverState_ = Cn.UP_TO_DATE_);
                                        }));
                                })(this),
                            (qn.trackingContext = e));
                    }
                } else In(this) && (this.warnAboutUntrackedRead_(), Xn(), (this.value_ = this.computeValue_(!1)), Zn());
                var t = this.value_;
                if (zn(t)) throw t.cause;
                return t;
            }),
            (t.set = function (e) {
                if (this.setter_) {
                    (this.isRunningSetter_ && Re(33, this.name_), (this.isRunningSetter_ = !0));
                    try {
                        this.setter_.call(this.scope_, e);
                    } finally {
                        this.isRunningSetter_ = !1;
                    }
                } else Re(34, this.name_);
            }),
            (t.trackAndCompute = function () {
                var e = this.value_,
                    t = this.dependenciesState_ === Cn.NOT_TRACKING_,
                    n = this.computeValue_(!0),
                    r = t || zn(e) || zn(n) || !this.equals_(e, n);
                return (r && (this.value_ = n), r);
            }),
            (t.computeValue_ = function (e) {
                this.isComputing_ = !0;
                var t,
                    n = xn(!1);
                if (e) t = Dn(this, this.derivation, this.scope_);
                else if (!0 === qn.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                else
                    try {
                        t = this.derivation.call(this.scope_);
                    } catch (r) {
                        t = new Rn(r);
                    }
                return (On(n), (this.isComputing_ = !1), t);
            }),
            (t.suspend_ = function () {
                this.keepAlive_ || (Mn(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
                var n = this,
                    r = !0,
                    a = void 0;
                return (function (e, t) {
                    var n, r, a, i, o;
                    void 0 === t && (t = Be);
                    var l,
                        u = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun';
                    if (t.scheduler || t.delay) {
                        var s = br(t),
                            c = !1;
                        l = new tr(
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
                        l = new tr(
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
                        var o = Fn();
                        (e({
                            observableKind: 'computed',
                            debugObjectName: n.name_,
                            type: Qr,
                            object: n,
                            newValue: i,
                            oldValue: a,
                        }),
                            Un(o));
                    }
                    ((r = !1), (a = i));
                });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
                return this.name_ + '[' + this.derivation.toString() + ']';
            }),
            (t.valueOf = function () {
                return ot(this.get());
            }),
            (t[En] = function () {
                return this.valueOf();
            }),
            e
        );
    })(),
    Ln = tt('ComputedValue', jn);
(((An = Cn || (Cn = {}))[(An.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
    (An[(An.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
    (An[(An.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
    (An[(An.STALE_ = 2)] = 'STALE_'),
    ((Tn = Nn || (Nn = {}))[(Tn.NONE = 0)] = 'NONE'),
    (Tn[(Tn.LOG = 1)] = 'LOG'),
    (Tn[(Tn.BREAK = 2)] = 'BREAK'));
var Rn = function (e) {
    ((this.cause = void 0), (this.cause = e));
};
function zn(e) {
    return e instanceof Rn;
}
function In(e) {
    switch (e.dependenciesState_) {
        case Cn.UP_TO_DATE_:
            return !1;
        case Cn.NOT_TRACKING_:
        case Cn.STALE_:
            return !0;
        case Cn.POSSIBLY_STALE_:
            for (var t = Bn(!0), n = Fn(), r = e.observing_, a = r.length, i = 0; i < a; i++) {
                var o = r[i];
                if (Ln(o)) {
                    if (qn.disableErrorBoundaries) o.get();
                    else
                        try {
                            o.get();
                        } catch (l) {
                            return (Un(n), $n(t), !0);
                        }
                    if (e.dependenciesState_ === Cn.STALE_) return (Un(n), $n(t), !0);
                }
            }
            return (Wn(e), Un(n), $n(t), !1);
    }
}
function Dn(e, t, n) {
    var r = Bn(!0);
    (Wn(e),
        (e.newObserving_ = new Array(e.observing_.length + 100)),
        (e.unboundDepsCount_ = 0),
        (e.runId_ = ++qn.runId));
    var a,
        i = qn.trackingDerivation;
    if (((qn.trackingDerivation = e), qn.inBatch++, !0 === qn.disableErrorBoundaries)) a = t.call(n);
    else
        try {
            a = t.call(n);
        } catch (o) {
            a = new Rn(o);
        }
    return (
        qn.inBatch--,
        (qn.trackingDerivation = i),
        (function (e) {
            for (
                var t = e.observing_,
                    n = (e.observing_ = e.newObserving_),
                    r = Cn.UP_TO_DATE_,
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
                (0 === u.diffValue_ && Gn(u, e), (u.diffValue_ = 0));
            }
            for (; a--; ) {
                var s = n[a];
                1 === s.diffValue_ && ((s.diffValue_ = 0), Qn(s, e));
            }
            r !== Cn.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        $n(r),
        a
    );
}
function Mn(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) Gn(t[n], e);
    e.dependenciesState_ = Cn.NOT_TRACKING_;
}
function Vn(e) {
    var t = Fn();
    try {
        return e();
    } finally {
        Un(t);
    }
}
function Fn() {
    var e = qn.trackingDerivation;
    return ((qn.trackingDerivation = null), e);
}
function Un(e) {
    qn.trackingDerivation = e;
}
function Bn(e) {
    var t = qn.allowStateReads;
    return ((qn.allowStateReads = e), t);
}
function $n(e) {
    qn.allowStateReads = e;
}
function Wn(e) {
    if (e.dependenciesState_ !== Cn.UP_TO_DATE_) {
        e.dependenciesState_ = Cn.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = Cn.UP_TO_DATE_;
    }
}
var Hn = function () {
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
    Kn = !0,
    qn = (function () {
        var e = Ie();
        return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Kn = !1),
            e.__mobxGlobals && e.__mobxGlobals.version !== new Hn().version && (Kn = !1),
            Kn
                ? e.__mobxGlobals
                    ? ((e.__mobxInstanceCount += 1),
                      e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                      e.__mobxGlobals)
                    : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Hn()))
                : (setTimeout(function () {
                      Re(35);
                  }, 1),
                  new Hn())
        );
    })();
function Qn(e, t) {
    (e.observers_.add(t),
        e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_));
}
function Gn(e, t) {
    (e.observers_.delete(t), 0 === e.observers_.size && Yn(e));
}
function Yn(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), qn.pendingUnobservations.push(e));
}
function Xn() {
    qn.inBatch++;
}
function Zn() {
    if (0 == --qn.inBatch) {
        ar();
        for (var e = qn.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            ((n.isPendingUnobservation_ = !1),
                0 === n.observers_.size &&
                    (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof jn && n.suspend_()));
        }
        qn.pendingUnobservations = [];
    }
}
function Jn(e) {
    var t = qn.trackingDerivation;
    return null !== t
        ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ && qn.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
          e.isBeingObserved_)
        : (0 === e.observers_.size && qn.inBatch > 0 && Yn(e), !1);
}
function er(e) {
    e.lowestObserverState_ !== Cn.STALE_ &&
        ((e.lowestObserverState_ = Cn.STALE_),
        e.observers_.forEach(function (e) {
            (e.dependenciesState_ === Cn.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = Cn.STALE_));
        }));
}
var tr = (function () {
        function e(e, t, n, r) {
            (void 0 === e && (e = 'Reaction'),
                (this.name_ = void 0),
                (this.onInvalidate_ = void 0),
                (this.errorHandler_ = void 0),
                (this.requiresObservable_ = void 0),
                (this.observing_ = []),
                (this.newObserving_ = []),
                (this.dependenciesState_ = Cn.NOT_TRACKING_),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.unboundDepsCount_ = 0),
                (this.isDisposed_ = !1),
                (this.isScheduled_ = !1),
                (this.isTrackPending_ = !1),
                (this.isRunning_ = !1),
                (this.isTracing_ = Nn.NONE),
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
                this.isScheduled_ || ((this.isScheduled_ = !0), qn.pendingReactions.push(this), ar());
            }),
            (t.isScheduled = function () {
                return this.isScheduled_;
            }),
            (t.runReaction_ = function () {
                if (!this.isDisposed_) {
                    (Xn(), (this.isScheduled_ = !1));
                    var e = qn.trackingContext;
                    if (((qn.trackingContext = this), In(this))) {
                        this.isTrackPending_ = !0;
                        try {
                            this.onInvalidate_();
                        } catch (t) {
                            this.reportExceptionInDerivation_(t);
                        }
                    }
                    ((qn.trackingContext = e), Zn());
                }
            }),
            (t.track = function (e) {
                if (!this.isDisposed_) {
                    (Xn(), (this.isRunning_ = !0));
                    var t = qn.trackingContext;
                    qn.trackingContext = this;
                    var n = Dn(this, e, void 0);
                    ((qn.trackingContext = t),
                        (this.isRunning_ = !1),
                        (this.isTrackPending_ = !1),
                        this.isDisposed_ && Mn(this),
                        zn(n) && this.reportExceptionInDerivation_(n.cause),
                        Zn());
                }
            }),
            (t.reportExceptionInDerivation_ = function (e) {
                var t = this;
                if (this.errorHandler_) this.errorHandler_(e, this);
                else {
                    if (qn.disableErrorBoundaries) throw e;
                    var n = "[mobx] uncaught error in '" + this + "'";
                    (qn.suppressReactionErrors || console.error(n, e),
                        qn.globalReactionErrorHandlers.forEach(function (n) {
                            return n(e, t);
                        }));
                }
            }),
            (t.dispose = function () {
                this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (Xn(), Mn(this), Zn()));
            }),
            (t.getDisposer_ = function (e) {
                var t = this,
                    n = function n() {
                        (t.dispose(), null == e || null == e.removeEventListener || e.removeEventListener('abort', n));
                    };
                return (null == e || null == e.addEventListener || e.addEventListener('abort', n), (n[wt] = this), n);
            }),
            (t.toString = function () {
                return 'Reaction[' + this.name_ + ']';
            }),
            (t.trace = function (e) {}),
            e
        );
    })(),
    nr = 100,
    rr = function (e) {
        return e();
    };
function ar() {
    qn.inBatch > 0 || qn.isRunningReactions || rr(ir);
}
function ir() {
    qn.isRunningReactions = !0;
    for (var e = qn.pendingReactions, t = 0; e.length > 0; ) {
        ++t === nr && (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, a = n.length; r < a; r++) n[r].runReaction_();
    }
    qn.isRunningReactions = !1;
}
var or = tt('Reaction', tr);
var lr = 'action',
    ur = 'autoAction',
    sr = '<unnamed action>',
    cr = At(lr),
    fr = At('action.bound', { bound: !0 }),
    dr = At(ur, { autoAction: !0 }),
    pr = At('autoAction.bound', { autoAction: !0, bound: !0 });
function hr(e) {
    return function (t, n) {
        return Qe(t)
            ? kn(t.name || sr, t, e)
            : Qe(n)
              ? kn(t, n, e)
              : _t(n)
                ? (e ? dr : cr).decorate_20223_(t, n)
                : Ge(n)
                  ? bt(t, n, e ? dr : cr)
                  : Ge(t)
                    ? yt(At(e ? ur : lr, { name: t, autoAction: e }))
                    : void 0;
    };
}
var vr = hr(!1);
Object.assign(vr, cr);
var mr = hr(!0);
function gr(e) {
    return Qe(e) && !0 === e.isMobxAction;
}
(Object.assign(mr, dr), (vr.bound = yt(fr)), (mr.bound = yt(pr)));
var yr = function (e) {
    return e();
};
function br(e) {
    return e.scheduler
        ? e.scheduler
        : e.delay
          ? function (t) {
                return setTimeout(t, e.delay);
            }
          : yr;
}
function _r(e, t, n) {
    var r, a, i, o;
    void 0 === n && (n = Be);
    var l,
        u,
        s,
        c,
        f = null != (r = n.name) ? r : 'Reaction',
        d = vr(
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
        h = br(n),
        v = !0,
        m = !1,
        g = n.compareStructural ? Ot.structural : n.equals || Ot.default,
        y = new tr(
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
                    var n = xn(e);
                    try {
                        return t();
                    } finally {
                        On(n);
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
        (null != (a = n) && null != (i = a.signal) && i.aborted) || y.schedule_(),
        y.getDisposer_(null == (o = n) ? void 0 : o.signal)
    );
}
var wr = 'onBO',
    kr = 'onBUO';
function Sr(e, t, n) {
    return xr(kr, e, t, n);
}
function xr(e, t, n, r) {
    var a = Ia(t),
        i = Qe(r) ? r : n,
        o = e + 'L';
    return (
        a[o] ? a[o].add(i) : (a[o] = new Set([i])),
        function () {
            var e = a[o];
            e && (e.delete(i), 0 === e.size && delete a[o]);
        }
    );
}
function Or(e, t, n, r) {
    var a = ut(t);
    return (
        Va(function () {
            var t = _a(e, r)[wt];
            it(a).forEach(function (e) {
                t.extend_(e, a[e], !n || !(e in n) || n[e]);
            });
        }),
        e
    );
}
var Er = 0;
function Pr() {
    this.message = 'FLOW_CANCELLED';
}
Pr.prototype = Object.create(Error.prototype);
var Cr = Rt('flow'),
    Ar = Rt('flow.bound', { bound: !0 }),
    Nr = Object.assign(function (e, t) {
        if (_t(t)) return Cr.decorate_20223_(e, t);
        if (Ge(t)) return bt(e, t, Cr);
        var n = e,
            r = n.name || '<unnamed flow>',
            a = function () {
                var e,
                    t = arguments,
                    a = ++Er,
                    i = vr(r + ' - runid: ' + a + ' - init', n).apply(this, t),
                    o = void 0,
                    l = new Promise(function (t, n) {
                        var l = 0;
                        function u(e) {
                            var t;
                            o = void 0;
                            try {
                                t = vr(r + ' - runid: ' + a + ' - yield ' + l++, i.next).call(i, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function s(e) {
                            var t;
                            o = void 0;
                            try {
                                t = vr(r + ' - runid: ' + a + ' - yield ' + l++, i.throw).call(i, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function c(e) {
                            if (!Qe(null == e ? void 0 : e.then))
                                return e.done ? t(e.value) : (o = Promise.resolve(e.value)).then(u, s);
                            e.then(c, n);
                        }
                        ((e = n), u(void 0));
                    });
                return (
                    (l.cancel = vr(r + ' - runid: ' + a + ' - cancel', function () {
                        try {
                            o && Tr(o);
                            var t = i.return(void 0),
                                n = Promise.resolve(t.value);
                            (n.then(qe, qe), Tr(n), e(new Pr()));
                        } catch (r) {
                            e(r);
                        }
                    })),
                    l
                );
            };
        return ((a.isMobXFlow = !0), a);
    }, Cr);
function Tr(e) {
    Qe(e.cancel) && e.cancel();
}
function jr(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function Lr(e, t) {
    if (void 0 === t) return Ln(e);
    if (!1 === Sa(e)) return !1;
    if (!e[wt].values_.has(t)) return !1;
    var n = Ia(e, t);
    return Ln(n);
}
function Rr(e, t) {
    return Lr(e, t);
}
function zr(e) {
    return (function (e, t) {
        return !!e && (Sa(e) || !!e[wt] || St(e) || or(e) || Ln(e));
    })(e);
}
function Ir(e, t, n, r) {
    return Qe(n)
        ? (function (e, t, n, r) {
              return Da(e, t).observe_(n, r);
          })(e, t, n, r)
        : (function (e, t, n) {
              return Da(e).observe_(t, n);
          })(e, t, n);
}
function Dr(e, t) {
    (void 0 === t && (t = void 0), Xn());
    try {
        return e.apply(t);
    } finally {
        Zn();
    }
}
function Mr(e) {
    return e[wt];
}
Nr.bound = yt(Ar);
var Vr = {
    has: function (e, t) {
        return Mr(e).has_(t);
    },
    get: function (e, t) {
        return Mr(e).get_(t);
    },
    set: function (e, t, n) {
        var r;
        return !!Ge(t) && (null == (r = Mr(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
        var n;
        return !!Ge(t) && (null == (n = Mr(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
        var r;
        return null == (r = Mr(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
        return Mr(e).ownKeys_();
    },
    preventExtensions: function (e) {
        Re(13);
    },
};
function Fr(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
}
function Ur(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
        n.push(t),
        Ke(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function Br(e, t) {
    var n = Fn();
    try {
        for (
            var r = [].concat(e.interceptors_ || []), a = 0, i = r.length;
            a < i && ((t = r[a](t)) && !t.type && Re(14), t);
            a++
        );
        return t;
    } finally {
        Un(n);
    }
}
function $r(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
}
function Wr(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
        n.push(t),
        Ke(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function Hr(e, t) {
    var n = Fn(),
        r = e.changeListeners_;
    if (r) {
        for (var a = 0, i = (r = r.slice()).length; a < i; a++) r[a](t);
        Un(n);
    }
}
function Kr(e, t, n) {
    return (
        Va(function () {
            var r = _a(e, n)[wt];
            (null != t ||
                (t = (function (e) {
                    return (lt(e, gt) || Je(e, gt, ft({}, e[gt])), e[gt]);
                })(e)),
                it(t).forEach(function (e) {
                    return r.make_(e, t[e]);
                }));
        }),
        e
    );
}
var qr = 'splice',
    Qr = 'update',
    Gr = {
        get: function (e, t) {
            var n = e[wt];
            return t === wt
                ? n
                : 'length' === t
                  ? n.getArrayLength_()
                  : 'string' != typeof t || isNaN(t)
                    ? lt(Zr, t)
                        ? Zr[t]
                        : e[t]
                    : n.get_(parseInt(t));
        },
        set: function (e, t, n) {
            var r = e[wt];
            return (
                'length' === t && r.setArrayLength_(n),
                'symbol' == typeof t || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n),
                !0
            );
        },
        preventExtensions: function () {
            Re(15);
        },
    },
    Yr = (function () {
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
                (this.atom_ = new kt(e)),
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
                return Ur(this, e);
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
                    Wr(this, e)
                );
            }),
            (t.getArrayLength_ = function () {
                return (this.atom_.reportObserved(), this.values_.length);
            }),
            (t.setArrayLength_ = function (e) {
                ('number' != typeof e || isNaN(e) || e < 0) && Re('Out of range: ' + e);
                var t = this.values_.length;
                if (e !== t)
                    if (e > t) {
                        for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
                        this.spliceWithArray_(t, 0, n);
                    } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
                (e !== this.lastKnownLength_ && Re(16),
                    (this.lastKnownLength_ += t),
                    this.legacyMode_ && t > 0 && Ra(e + t + 1));
            }),
            (t.spliceWithArray_ = function (e, t, n) {
                var r = this;
                this.atom_;
                var a = this.values_.length;
                if (
                    (void 0 === e ? (e = 0) : e > a ? (e = a) : e < 0 && (e = Math.max(0, a + e)),
                    (t = 1 === arguments.length ? a - e : null == t ? 0 : Math.max(0, Math.min(t, a - e))),
                    void 0 === n && (n = Ue),
                    Fr(this))
                ) {
                    var i = Br(this, { object: this.proxy_, type: qr, index: e, removedCount: t, added: n });
                    if (!i) return Ue;
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
                    a = $r(this),
                    i =
                        a || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  type: Qr,
                                  debugObjectName: this.atom_.name_,
                                  index: e,
                                  newValue: t,
                                  oldValue: n,
                              }
                            : null;
                (this.atom_.reportChanged(), a && Hr(this, i));
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    a = $r(this),
                    i =
                        a || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  debugObjectName: this.atom_.name_,
                                  type: qr,
                                  index: e,
                                  removed: n,
                                  added: t,
                                  removedCount: n.length,
                                  addedCount: t.length,
                              }
                            : null;
                (this.atom_.reportChanged(), a && Hr(this, i));
            }),
            (t.get_ = function (e) {
                if (!(this.legacyMode_ && e >= this.values_.length))
                    return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]));
                console.warn('[mobx] Out of bounds read: ' + e);
            }),
            (t.set_ = function (e, t) {
                var n = this.values_;
                if ((this.legacyMode_ && e > n.length && Re(17, e, n.length), e < n.length)) {
                    this.atom_;
                    var r = n[e];
                    if (Fr(this)) {
                        var a = Br(this, { type: Qr, object: this.proxy_, index: e, newValue: t });
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
function Xr(e, t, n, r) {
    return (
        void 0 === n && (n = 'ObservableArray'),
        void 0 === r && (r = !1),
        He(),
        Va(function () {
            var a = new Yr(n, t, r, !1);
            et(a.values_, wt, a);
            var i = new Proxy(a.values_, Gr);
            return ((a.proxy_ = i), e && e.length && a.spliceWithArray_(0, 0, e), i);
        })
    );
}
var Zr = {
    clear: function () {
        return this.splice(0);
    },
    replace: function (e) {
        var t = this[wt];
        return t.spliceWithArray_(0, t.values_.length, e);
    },
    toJSON: function () {
        return this.slice();
    },
    splice: function (e, t) {
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
        var i = this[wt];
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
        return this[wt].spliceWithArray_(e, t, n);
    },
    push: function () {
        for (var e = this[wt], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(e.values_.length, 0, n), e.values_.length);
    },
    pop: function () {
        return this.splice(Math.max(this[wt].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        for (var e = this[wt], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(0, 0, n), e.values_.length);
    },
    reverse: function () {
        return (qn.trackingDerivation && Re(37, 'reverse'), this.replace(this.slice().reverse()), this);
    },
    sort: function () {
        qn.trackingDerivation && Re(37, 'sort');
        var e = this.slice();
        return (e.sort.apply(e, arguments), this.replace(e), this);
    },
    remove: function (e) {
        var t = this[wt],
            n = t.dehanceValues_(t.values_).indexOf(e);
        return n > -1 && (this.splice(n, 1), !0);
    },
};
function Jr(e, t) {
    'function' == typeof Array.prototype[e] && (Zr[e] = t(e));
}
function ea(e) {
    return function () {
        var t = this[wt];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments);
    };
}
function ta(e) {
    return function (t, n) {
        var r = this,
            a = this[wt];
        return (
            a.atom_.reportObserved(),
            a.dehanceValues_(a.values_)[e](function (e, a) {
                return t.call(n, e, a, r);
            })
        );
    };
}
function na(e) {
    return function () {
        var t = this,
            n = this[wt];
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
(Jr('at', ea),
    Jr('concat', ea),
    Jr('flat', ea),
    Jr('includes', ea),
    Jr('indexOf', ea),
    Jr('join', ea),
    Jr('lastIndexOf', ea),
    Jr('slice', ea),
    Jr('toString', ea),
    Jr('toLocaleString', ea),
    Jr('toSorted', ea),
    Jr('toSpliced', ea),
    Jr('with', ea),
    Jr('every', ta),
    Jr('filter', ta),
    Jr('find', ta),
    Jr('findIndex', ta),
    Jr('findLast', ta),
    Jr('findLastIndex', ta),
    Jr('flatMap', ta),
    Jr('forEach', ta),
    Jr('map', ta),
    Jr('some', ta),
    Jr('toReversed', ta),
    Jr('reduce', na),
    Jr('reduceRight', na));
var ra,
    aa,
    ia = tt('ObservableArrayAdministration', Yr);
function oa(e) {
    return Ye(e) && ia(e[wt]);
}
var la = {},
    ua = 'add',
    sa = 'delete';
((ra = Symbol.iterator), (aa = Symbol.toStringTag));
var ca,
    fa,
    da = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Et),
                void 0 === n && (n = 'ObservableMap'),
                (this.enhancer_ = void 0),
                (this.name_ = void 0),
                (this[wt] = la),
                (this.data_ = void 0),
                (this.hasMap_ = void 0),
                (this.keysAtom_ = void 0),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = t),
                (this.name_ = n),
                Qe(Map) || Re(18),
                Va(function () {
                    ((r.keysAtom_ = xt('ObservableMap.keys()')),
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
                if (!qn.trackingDerivation) return this.has_(e);
                var n = this.hasMap_.get(e);
                if (!n) {
                    var r = (n = new Pn(this.has_(e), Pt, 'ObservableMap.key?', !1));
                    (this.hasMap_.set(e, r),
                        Sr(r, function () {
                            return t.hasMap_.delete(e);
                        }));
                }
                return n.get();
            }),
            (t.set = function (e, t) {
                var n = this.has_(e);
                if (Fr(this)) {
                    var r = Br(this, { type: n ? Qr : ua, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, Fr(this)) && !Br(this, { type: sa, object: this, name: e })) return !1;
                if (this.has_(e)) {
                    var n = $r(this),
                        r = n
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: sa,
                                  object: this,
                                  oldValue: this.data_.get(e).value_,
                                  name: e,
                              }
                            : null;
                    return (
                        Dr(function () {
                            var n;
                            (t.keysAtom_.reportChanged(),
                                null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                                t.data_.get(e).setNewValue_(void 0),
                                t.data_.delete(e));
                        }),
                        n && Hr(this, r),
                        !0
                    );
                }
                return !1;
            }),
            (t.updateValue_ = function (e, t) {
                var n = this.data_.get(e);
                if ((t = n.prepareNewValue_(t)) !== qn.UNCHANGED) {
                    var r = $r(this),
                        a = r
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: Qr,
                                  object: this,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), r && Hr(this, a));
                }
            }),
            (t.addValue_ = function (e, t) {
                var n = this;
                (this.keysAtom_,
                    Dr(function () {
                        var r,
                            a = new Pn(t, n.enhancer_, 'ObservableMap.key', !1);
                        (n.data_.set(e, a),
                            (t = a.value_),
                            null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                            n.keysAtom_.reportChanged());
                    }));
                var r = $r(this),
                    a = r
                        ? {
                              observableKind: 'map',
                              debugObjectName: this.name_,
                              type: ua,
                              object: this,
                              name: e,
                              newValue: t,
                          }
                        : null;
                r && Hr(this, a);
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
                return Wa({
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
                return Wa({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            a = n.value;
                        return { done: r, value: r ? void 0 : [a, e.get(a)] };
                    },
                });
            }),
            (t[ra] = function () {
                return this.entries();
            }),
            (t.forEach = function (e, t) {
                for (var n, r = mt(this); !(n = r()).done; ) {
                    var a = n.value,
                        i = a[0],
                        o = a[1];
                    e.call(t, o, i, this);
                }
            }),
            (t.merge = function (e) {
                var t = this;
                return (
                    pa(e) && (e = new Map(e)),
                    Dr(function () {
                        Xe(e)
                            ? (function (e) {
                                  var t = Object.keys(e);
                                  if (!at) return t;
                                  var n = Object.getOwnPropertySymbols(e);
                                  return n.length
                                      ? [].concat(
                                            t,
                                            n.filter(function (t) {
                                                return Fe.propertyIsEnumerable.call(e, t);
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
                              : nt(e)
                                ? (e.constructor !== Map && Re(19, e),
                                  e.forEach(function (e, n) {
                                      return t.set(n, e);
                                  }))
                                : null != e && Re(20, e);
                    }),
                    this
                );
            }),
            (t.clear = function () {
                var e = this;
                Dr(function () {
                    Vn(function () {
                        for (var t, n = mt(e.keys()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    Dr(function () {
                        for (
                            var n,
                                r = (function (e) {
                                    if (nt(e) || pa(e)) return e;
                                    if (Array.isArray(e)) return new Map(e);
                                    if (Xe(e)) {
                                        var t = new Map();
                                        for (var n in e) t.set(n, e[n]);
                                        return t;
                                    }
                                    return Re(21, e);
                                })(e),
                                a = new Map(),
                                i = !1,
                                o = mt(t.data_.keys());
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
                        for (var s, c = mt(r.entries()); !(s = c()).done; ) {
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
                                for (var m = t.data_.keys(), g = a.keys(), y = m.next(), b = g.next(); !y.done; ) {
                                    if (y.value !== b.value) {
                                        t.keysAtom_.reportChanged();
                                        break;
                                    }
                                    ((y = m.next()), (b = g.next()));
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
                return Wr(this, e);
            }),
            (t.intercept_ = function (e) {
                return Ur(this, e);
            }),
            ct(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.keysAtom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: aa,
                    get: function () {
                        return 'Map';
                    },
                },
            ]),
            e
        );
    })(),
    pa = tt('ObservableMap', da);
var ha = {};
((ca = Symbol.iterator), (fa = Symbol.toStringTag));
var va = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Et),
                void 0 === n && (n = 'ObservableSet'),
                (this.name_ = void 0),
                (this[wt] = ha),
                (this.data_ = new Set()),
                (this.atom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = void 0),
                (this.name_ = n),
                Qe(Set) || Re(22),
                (this.enhancer_ = function (e, r) {
                    return t(e, r, n);
                }),
                Va(function () {
                    ((r.atom_ = xt(r.name_)), e && r.replace(e));
                }));
        }
        var t = e.prototype;
        return (
            (t.dehanceValue_ = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
                var e = this;
                Dr(function () {
                    Vn(function () {
                        for (var t, n = mt(e.data_.values()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.forEach = function (e, t) {
                for (var n, r = mt(this); !(n = r()).done; ) {
                    var a = n.value;
                    e.call(t, a, a, this);
                }
            }),
            (t.add = function (e) {
                var t = this;
                if ((this.atom_, Fr(this)) && !Br(this, { type: ua, object: this, newValue: e })) return this;
                if (!this.has(e)) {
                    Dr(function () {
                        (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
                    });
                    var n = $r(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: ua,
                                  object: this,
                                  newValue: e,
                              }
                            : null;
                    n && Hr(this, r);
                }
                return this;
            }),
            (t.delete = function (e) {
                var t = this;
                if (Fr(this) && !Br(this, { type: sa, object: this, oldValue: e })) return !1;
                if (this.has(e)) {
                    var n = $r(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: sa,
                                  object: this,
                                  oldValue: e,
                              }
                            : null;
                    return (
                        Dr(function () {
                            (t.atom_.reportChanged(), t.data_.delete(e));
                        }),
                        n && Hr(this, r),
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
                return Wa({
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
                return Wa({
                    next: function () {
                        return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
                    },
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    ma(e) && (e = new Set(e)),
                    Dr(function () {
                        Array.isArray(e) || rt(e)
                            ? (t.clear(),
                              e.forEach(function (e) {
                                  return t.add(e);
                              }))
                            : null != e && Re('Cannot initialize set from ' + e);
                    }),
                    this
                );
            }),
            (t.observe_ = function (e, t) {
                return Wr(this, e);
            }),
            (t.intercept_ = function (e) {
                return Ur(this, e);
            }),
            (t.toJSON = function () {
                return Array.from(this);
            }),
            (t.toString = function () {
                return '[object ObservableSet]';
            }),
            (t[ca] = function () {
                return this.values();
            }),
            ct(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.atom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: fa,
                    get: function () {
                        return 'Set';
                    },
                },
            ]),
            e
        );
    })(),
    ma = tt('ObservableSet', va),
    ga = Object.create(null),
    ya = 'remove',
    ba = (function () {
        function e(e, t, n, r) {
            (void 0 === t && (t = new Map()),
                void 0 === r && (r = Qt),
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
                (this.keysAtom_ = new kt('ObservableObject.keys')),
                (this.isPlainObject_ = Xe(this.target_)));
        }
        var t = e.prototype;
        return (
            (t.getObservablePropValue_ = function (e) {
                return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
                var n = this.values_.get(e);
                if (n instanceof jn) return (n.set(t), !0);
                if (Fr(this)) {
                    var r = Br(this, { type: Qr, object: this.proxy_ || this.target_, name: e, newValue: t });
                    if (!r) return null;
                    t = r.newValue;
                }
                if ((t = n.prepareNewValue_(t)) !== qn.UNCHANGED) {
                    var a = $r(this),
                        i = a
                            ? {
                                  type: Qr,
                                  observableKind: 'object',
                                  debugObjectName: this.name_,
                                  object: this.proxy_ || this.target_,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), a && Hr(this, i));
                }
                return !0;
            }),
            (t.get_ = function (e) {
                return (qn.trackingDerivation && !lt(this.target_, e) && this.has_(e), this.target_[e]);
            }),
            (t.set_ = function (e, t, n) {
                return (
                    void 0 === n && (n = !1),
                    lt(this.target_, e)
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
                if (!qn.trackingDerivation) return e in this.target_;
                this.pendingKeys_ || (this.pendingKeys_ = new Map());
                var t = this.pendingKeys_.get(e);
                return (
                    t ||
                        ((t = new Pn(e in this.target_, Pt, 'ObservableObject.key?', !1)), this.pendingKeys_.set(e, t)),
                    t.get()
                );
            }),
            (t.make_ = function (e, t) {
                if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                    if (!(e in this.target_)) {
                        var n;
                        if (null != (n = this.target_[gt]) && n[e]) return;
                        Re(1, t.annotationType_, this.name_ + '.' + e.toString());
                    }
                    for (var r = this.target_; r && r !== Fe; ) {
                        var a = Me(r, e);
                        if (a) {
                            var i = t.make_(this, e, a, r);
                            if (0 === i) return;
                            if (1 === i) break;
                        }
                        r = Object.getPrototypeOf(r);
                    }
                    xa(this, t, e);
                }
            }),
            (t.extend_ = function (e, t, n, r) {
                if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                    return this.defineProperty_(e, t, r);
                var a = n.extend_(this, e, t, r);
                return (a && xa(this, n, e), a);
            }),
            (t.defineProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    Xn();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (Fr(this)) {
                        var a = Br(this, { object: this.proxy_ || this.target_, name: e, type: ua, newValue: t.value });
                        if (!a) return null;
                        var i = a.newValue;
                        t.value !== i && (t = ft({}, t, { value: i }));
                    }
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                    } else Ve(this.target_, e, t);
                    this.notifyPropertyAddition_(e, t.value);
                } finally {
                    Zn();
                }
                return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
                (void 0 === r && (r = !1), this.keysAtom_);
                try {
                    Xn();
                    var a = this.delete_(e);
                    if (!a) return a;
                    if (Fr(this)) {
                        var i = Br(this, { object: this.proxy_ || this.target_, name: e, type: ua, newValue: t });
                        if (!i) return null;
                        t = i.newValue;
                    }
                    var o = ka(e),
                        l = {
                            configurable: !qn.safeDescriptors || this.isPlainObject_,
                            enumerable: !0,
                            get: o.get,
                            set: o.set,
                        };
                    if (r) {
                        if (!Reflect.defineProperty(this.target_, e, l)) return !1;
                    } else Ve(this.target_, e, l);
                    var u = new Pn(t, n, 'ObservableObject.key', !1);
                    (this.values_.set(e, u), this.notifyPropertyAddition_(e, u.value_));
                } finally {
                    Zn();
                }
                return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    Xn();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (Fr(this))
                        if (!Br(this, { object: this.proxy_ || this.target_, name: e, type: ua, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var a = ka(e),
                        i = {
                            configurable: !qn.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: a.get,
                            set: a.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, i)) return !1;
                    } else Ve(this.target_, e, i);
                    (this.values_.set(e, new jn(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    Zn();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !lt(this.target_, e))) return !0;
                if (Fr(this) && !Br(this, { object: this.proxy_ || this.target_, name: e, type: ya })) return null;
                try {
                    var n, r;
                    Xn();
                    var a,
                        i = $r(this),
                        o = this.values_.get(e),
                        l = void 0;
                    if (!o && i) l = null == (a = Me(this.target_, e)) ? void 0 : a.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (o && (this.values_.delete(e), o instanceof Pn && (l = o.value_), er(o)),
                        this.keysAtom_.reportChanged(),
                        null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
                        i)
                    ) {
                        var u = {
                            type: ya,
                            observableKind: 'object',
                            object: this.proxy_ || this.target_,
                            debugObjectName: this.name_,
                            oldValue: l,
                            name: e,
                        };
                        (0, i && Hr(this, u));
                    }
                } finally {
                    Zn();
                }
                return !0;
            }),
            (t.observe_ = function (e, t) {
                return Wr(this, e);
            }),
            (t.intercept_ = function (e) {
                return Ur(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
                var n,
                    r,
                    a = $r(this);
                if (a) {
                    var i = a
                        ? {
                              type: ua,
                              observableKind: 'object',
                              debugObjectName: this.name_,
                              object: this.proxy_ || this.target_,
                              name: e,
                              newValue: t,
                          }
                        : null;
                    a && Hr(this, i);
                }
                (null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(!0),
                    this.keysAtom_.reportChanged());
            }),
            (t.ownKeys_ = function () {
                return (this.keysAtom_.reportObserved(), it(this.target_));
            }),
            (t.keys_ = function () {
                return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
            }),
            e
        );
    })();
function _a(e, t) {
    var n;
    if (lt(e, wt)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
        a = new ba(
            e,
            new Map(),
            String(r),
            (function (e) {
                var t;
                return e ? (null != (t = e.defaultDecorator) ? t : Gt(e)) : void 0;
            })(t),
        );
    return (Je(e, wt, a), e);
}
var wa = tt('ObservableObjectAdministration', ba);
function ka(e) {
    return (
        ga[e] ||
        (ga[e] = {
            get: function () {
                return this[wt].getObservablePropValue_(e);
            },
            set: function (t) {
                return this[wt].setObservablePropValue_(e, t);
            },
        })
    );
}
function Sa(e) {
    return !!Ye(e) && wa(e[wt]);
}
function xa(e, t, n) {
    var r;
    null == (r = e.target_[gt]) || delete r[n];
}
var Oa,
    Ea,
    Pa = ja(0),
    Ca = (function () {
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
    Aa = 0,
    Na = function () {};
((Oa = Na),
    (Ea = Array.prototype),
    Object.setPrototypeOf
        ? Object.setPrototypeOf(Oa.prototype, Ea)
        : void 0 !== Oa.prototype.__proto__
          ? (Oa.prototype.__proto__ = Ea)
          : (Oa.prototype = Ea));
var Ta = (function (e, t, n) {
    function r(t, n, r, a) {
        var i;
        return (
            void 0 === r && (r = 'ObservableArray'),
            void 0 === a && (a = !1),
            (i = e.call(this) || this),
            Va(function () {
                var e = new Yr(r, n, a, !0);
                ((e.proxy_ = ht(i)),
                    et(ht(i), wt, e),
                    t && t.length && i.spliceWithArray(0, 0, t),
                    Ca && Object.defineProperty(ht(i), '0', Pa));
            }),
            i
        );
    }
    dt(r, e);
    var a = r.prototype;
    return (
        (a.concat = function () {
            this[wt].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return Array.prototype.concat.apply(
                this.slice(),
                t.map(function (e) {
                    return oa(e) ? e.slice() : e;
                }),
            );
        }),
        (a[n] = function () {
            var e = this,
                t = 0;
            return Wa({
                next: function () {
                    return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
                },
            });
        }),
        ct(r, [
            {
                key: 'length',
                get: function () {
                    return this[wt].getArrayLength_();
                },
                set: function (e) {
                    this[wt].setArrayLength_(e);
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
})(Na, Symbol.toStringTag, Symbol.iterator);
function ja(e) {
    return {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this[wt].get_(e);
        },
        set: function (t) {
            this[wt].set_(e, t);
        },
    };
}
function La(e) {
    Ve(Ta.prototype, '' + e, ja(e));
}
function Ra(e) {
    if (e > Aa) {
        for (var t = Aa; t < e + 100; t++) La(t);
        Aa = e;
    }
}
function za(e, t, n) {
    return new Ta(e, t, n);
}
function Ia(e, t) {
    if ('object' == typeof e && null !== e) {
        if (oa(e)) return (void 0 !== t && Re(23), e[wt].atom_);
        if (ma(e)) return e.atom_;
        if (pa(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return (n || Re(25, t, Ma(e)), n);
        }
        if (Sa(e)) {
            if (!t) return Re(26);
            var r = e[wt].values_.get(t);
            return (r || Re(27, t, Ma(e)), r);
        }
        if (St(e) || Ln(e) || or(e)) return e;
    } else if (Qe(e) && or(e[wt])) return e[wt];
    Re(28);
}
function Da(e, t) {
    return (
        e || Re(29),
        void 0 !== t ? Da(Ia(e, t)) : St(e) || Ln(e) || or(e) || pa(e) || ma(e) ? e : e[wt] ? e[wt] : void Re(24, e)
    );
}
function Ma(e, t) {
    var n;
    if (void 0 !== t) n = Ia(e, t);
    else {
        if (gr(e)) return e.name;
        n = Sa(e) || pa(e) || ma(e) ? Da(e) : Ia(e);
    }
    return n.name_;
}
function Va(e) {
    var t = Fn(),
        n = xn(!0);
    Xn();
    try {
        return e();
    } finally {
        (Zn(), On(n), Un(t));
    }
}
(Object.entries(Zr).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && Je(Ta.prototype, t, n);
}),
    Ra(1e3));
var Fa = Fe.toString;
function Ua(e, t, n) {
    return (void 0 === n && (n = -1), Ba(e, t, n));
}
function Ba(e, t, n, r, a) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var i = typeof e;
    if ('function' !== i && 'object' !== i && 'object' != typeof t) return !1;
    var o = Fa.call(e);
    if (o !== Fa.call(t)) return !1;
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
    ((e = $a(e)), (t = $a(t)));
    var l = '[object Array]' === o;
    if (!l) {
        if ('object' != typeof e || 'object' != typeof t) return !1;
        var u = e.constructor,
            s = t.constructor;
        if (
            u !== s &&
            !(Qe(u) && u instanceof u && Qe(s) && s instanceof s) &&
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
        for (; c--; ) if (!Ba(e[c], t[c], n - 1, r, a)) return !1;
    } else {
        var f,
            d = Object.keys(e);
        if (((c = d.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (!lt(t, (f = d[c])) || !Ba(e[f], t[f], n - 1, r, a)) return !1;
    }
    return (r.pop(), a.pop(), !0);
}
function $a(e) {
    return oa(e) ? e.slice() : nt(e) || pa(e) || rt(e) || ma(e) ? Array.from(e.entries()) : e;
}
function Wa(e) {
    return ((e[Symbol.iterator] = Ha), e);
}
function Ha() {
    return this;
}
(['Symbol', 'Map', 'Set'].forEach(function (e) {
    void 0 === Ie()[e] && Re("MobX requires global '" + e + "' to be available or polyfilled");
}),
    'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
                return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
            },
            extras: { getDebugName: Ma },
            $mobx: wt,
        }));
var Ka = {},
    qa = { exports: {} },
    Qa = {},
    Ga = { exports: {} },
    Ya = {};
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
        m = 'function' == typeof setTimeout ? setTimeout : null,
        g = 'function' == typeof clearTimeout ? clearTimeout : null,
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
            if (null !== n(u)) ((h = !0), j(w));
            else {
                var t = n(s);
                null !== t && L(_, t.startTime - e);
            }
    }
    function w(t, a) {
        ((h = !1), v && ((v = !1), g(O), (O = -1)), (p = !0));
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
                var m = n(s);
                (null !== m && L(_, m.startTime - a), (c = !1));
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
            T = N.port2;
        ((N.port1.onmessage = A),
            (k = function () {
                T.postMessage(null);
            }));
    } else
        k = function () {
            m(A, 0);
        };
    function j(e) {
        ((x = e), S || ((S = !0), k()));
    }
    function L(t, n) {
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
                      null === n(u) && r === n(s) && (v ? (g(O), (O = -1)) : (v = !0), L(_, i - o)))
                    : ((r.sortIndex = l), t(u, r), h || p || ((h = !0), j(w))),
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
})(Ya),
    (Ga.exports = Ya));
var Xa = Ga.exports,
    Za = V,
    Ja = Xa;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function ei(e) {
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
var ti = new Set(),
    ni = {};
function ri(e, t) {
    (ai(e, t), ai(e + 'Capture', t));
}
function ai(e, t) {
    for (ni[e] = t, e = 0; e < t.length; e++) ti.add(t[e]);
}
var ii = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    oi = Object.prototype.hasOwnProperty,
    li =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ui = {},
    si = {};
function ci(e, t, n, r, a, i, o) {
    ((this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = a),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = o));
}
var fi = {};
('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        fi[e] = new ci(e, 0, !1, e, null, !1, !1);
    }),
    [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
        var t = e[0];
        fi[t] = new ci(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
        fi[e] = new ci(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
        fi[e] = new ci(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (e) {
            fi[e] = new ci(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
        fi[e] = new ci(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
        fi[e] = new ci(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
        fi[e] = new ci(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
        fi[e] = new ci(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
var di = /[\-:]([a-z])/g;
function pi(e) {
    return e[1].toUpperCase();
}
function hi(e, t, n, r) {
    var a = fi.hasOwnProperty(t) ? fi[t] : null;
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
                  return !!oi.call(si, e) || (!oi.call(ui, e) && (li.test(e) ? (si[e] = !0) : ((ui[e] = !0), !1)));
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
        var t = e.replace(di, pi);
        fi[t] = new ci(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
        var t = e.replace(di, pi);
        fi[t] = new ci(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(di, pi);
        fi[t] = new ci(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
        fi[e] = new ci(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (fi.xlinkHref = new ci('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        fi[e] = new ci(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
var vi = Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    mi = Symbol.for('react.element'),
    gi = Symbol.for('react.portal'),
    yi = Symbol.for('react.fragment'),
    bi = Symbol.for('react.strict_mode'),
    _i = Symbol.for('react.profiler'),
    wi = Symbol.for('react.provider'),
    ki = Symbol.for('react.context'),
    Si = Symbol.for('react.forward_ref'),
    xi = Symbol.for('react.suspense'),
    Oi = Symbol.for('react.suspense_list'),
    Ei = Symbol.for('react.memo'),
    Pi = Symbol.for('react.lazy'),
    Ci = Symbol.for('react.offscreen'),
    Ai = Symbol.iterator;
function Ni(e) {
    return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (Ai && e[Ai]) || e['@@iterator'])
          ? e
          : null;
}
var Ti,
    ji = Object.assign;
function Li(e) {
    if (void 0 === Ti)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ti = (t && t[1]) || '';
        }
    return '\n' + Ti + e;
}
var Ri = !1;
function zi(e, t) {
    if (!e || Ri) return '';
    Ri = !0;
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
        ((Ri = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? Li(e) : '';
}
function Ii(e) {
    switch (e.tag) {
        case 5:
            return Li(e.type);
        case 16:
            return Li('Lazy');
        case 13:
            return Li('Suspense');
        case 19:
            return Li('SuspenseList');
        case 0:
        case 2:
        case 15:
            return (e = zi(e.type, !1));
        case 11:
            return (e = zi(e.type.render, !1));
        case 1:
            return (e = zi(e.type, !0));
        default:
            return '';
    }
}
function Di(e) {
    if (null == e) return null;
    if ('function' == typeof e) return e.displayName || e.name || null;
    if ('string' == typeof e) return e;
    switch (e) {
        case yi:
            return 'Fragment';
        case gi:
            return 'Portal';
        case _i:
            return 'Profiler';
        case bi:
            return 'StrictMode';
        case xi:
            return 'Suspense';
        case Oi:
            return 'SuspenseList';
    }
    if ('object' == typeof e)
        switch (e.$$typeof) {
            case ki:
                return (e.displayName || 'Context') + '.Consumer';
            case wi:
                return (e._context.displayName || 'Context') + '.Provider';
            case Si:
                var t = e.render;
                return (
                    (e = e.displayName) ||
                        (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'),
                    e
                );
            case Ei:
                return null !== (t = e.displayName || null) ? t : Di(e.type) || 'Memo';
            case Pi:
                ((t = e._payload), (e = e._init));
                try {
                    return Di(e(t));
                } catch (n) {}
        }
    return null;
}
function Mi(e) {
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
            return Di(t);
        case 8:
            return t === bi ? 'StrictMode' : 'Mode';
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
function Vi(e) {
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
function Fi(e) {
    var t = e.type;
    return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
}
function Ui(e) {
    e._valueTracker ||
        (e._valueTracker = (function (e) {
            var t = Fi(e) ? 'checked' : 'value',
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
function Bi(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = '';
    return (e && (r = Fi(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0));
}
function $i(e) {
    if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body;
    } catch (t) {
        return e.body;
    }
}
function Wi(e, t) {
    var n = t.checked;
    return ji({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
    });
}
function Hi(e, t) {
    var n = null == t.defaultValue ? '' : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
    ((n = Vi(null != t.value ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
        }));
}
function Ki(e, t) {
    null != (t = t.checked) && hi(e, 'checked', t, !1);
}
function qi(e, t) {
    Ki(e, t);
    var n = Vi(t.value),
        r = t.type;
    if (null != n)
        'number' === r
            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
    (t.hasOwnProperty('value')
        ? Gi(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && Gi(e, t.type, Vi(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked));
}
function Qi(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
        ((t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t));
    }
    ('' !== (n = e.name) && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        '' !== n && (e.name = n));
}
function Gi(e, t, n) {
    ('number' === t && $i(e.ownerDocument) === e) ||
        (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Yi = Array.isArray;
function Xi(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
        for (n = 0; n < e.length; n++)
            ((a = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0));
    } else {
        for (n = '' + Vi(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n) return ((e[a].selected = !0), void (r && (e[a].defaultSelected = !0)));
            null !== t || e[a].disabled || (t = e[a]);
        }
        null !== t && (t.selected = !0);
    }
}
function Zi(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(ei(91));
    return ji({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Ji(e, t) {
    var n = t.value;
    if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(ei(92));
            if (Yi(n)) {
                if (1 < n.length) throw Error(ei(93));
                n = n[0];
            }
            t = n;
        }
        (null == t && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: Vi(n) };
}
function eo(e, t) {
    var n = Vi(t.value),
        r = Vi(t.defaultValue);
    (null != n &&
        ((n = '' + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = '' + r));
}
function to(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
}
function no(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}
function ro(e, t) {
    return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? no(t)
        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
}
var ao,
    io,
    oo =
        ((io = function (e, t) {
            if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e) e.innerHTML = t;
            else {
                for (
                    (ao = ao || document.createElement('div')).innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                        t = ao.firstChild;
                    e.firstChild;

                )
                    e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
        }),
        'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return io(e, t);
                  });
              }
            : io);
function lo(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
    }
    e.textContent = t;
}
var uo = {
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
    so = ['Webkit', 'ms', 'Moz', 'O'];
function co(e, t, n) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n || 'number' != typeof t || 0 === t || (uo.hasOwnProperty(e) && uo[e])
          ? ('' + t).trim()
          : t + 'px';
}
function fo(e, t) {
    for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf('--'),
                a = co(n, t[n], r);
            ('float' === n && (n = 'cssFloat'), r ? e.setProperty(n, a) : (e[n] = a));
        }
}
Object.keys(uo).forEach(function (e) {
    so.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (uo[t] = uo[e]));
    });
});
var po = ji(
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
function ho(e, t) {
    if (t) {
        if (po[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(ei(137, e));
        if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(ei(60));
            if ('object' != typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
                throw Error(ei(61));
        }
        if (null != t.style && 'object' != typeof t.style) throw Error(ei(62));
    }
}
function vo(e, t) {
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
var mo = null;
function go(e) {
    return (
        (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
    );
}
var yo = null,
    bo = null,
    _o = null;
function wo(e) {
    if ((e = hc(e))) {
        if ('function' != typeof yo) throw Error(ei(280));
        var t = e.stateNode;
        t && ((t = mc(t)), yo(e.stateNode, e.type, t));
    }
}
function ko(e) {
    bo ? (_o ? _o.push(e) : (_o = [e])) : (bo = e);
}
function So() {
    if (bo) {
        var e = bo,
            t = _o;
        if (((_o = bo = null), wo(e), t)) for (e = 0; e < t.length; e++) wo(t[e]);
    }
}
function xo(e, t) {
    return e(t);
}
function Oo() {}
var Eo = !1;
function Po(e, t, n) {
    if (Eo) return e(t, n);
    Eo = !0;
    try {
        return xo(e, t, n);
    } finally {
        ((Eo = !1), (null !== bo || null !== _o) && (Oo(), So()));
    }
}
function Co(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = mc(n);
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
    if (n && 'function' != typeof n) throw Error(ei(231, t, typeof n));
    return n;
}
var Ao = !1;
if (ii)
    try {
        var No = {};
        (Object.defineProperty(No, 'passive', {
            get: function () {
                Ao = !0;
            },
        }),
            window.addEventListener('test', No, No),
            window.removeEventListener('test', No, No));
    } catch (io) {
        Ao = !1;
    }
function To(e, t, n, r, a, i, o, l, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s);
    } catch (c) {
        this.onError(c);
    }
}
var jo = !1,
    Lo = null,
    Ro = !1,
    zo = null,
    Io = {
        onError: function (e) {
            ((jo = !0), (Lo = e));
        },
    };
function Do(e, t, n, r, a, i, o, l, u) {
    ((jo = !1), (Lo = null), To.apply(Io, arguments));
}
function Mo(e) {
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
function Vo(e) {
    if (13 === e.tag) {
        var t = e.memoizedState;
        if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
    }
    return null;
}
function Fo(e) {
    if (Mo(e) !== e) throw Error(ei(188));
}
function Uo(e) {
    return null !==
        (e = (function (e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = Mo(e))) throw Error(ei(188));
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
                        if (i === n) return (Fo(a), e);
                        if (i === r) return (Fo(a), t);
                        i = i.sibling;
                    }
                    throw Error(ei(188));
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
                        if (!o) throw Error(ei(189));
                    }
                }
                if (n.alternate !== r) throw Error(ei(190));
            }
            if (3 !== n.tag) throw Error(ei(188));
            return n.stateNode.current === n ? e : t;
        })(e))
        ? Bo(e)
        : null;
}
function Bo(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e; ) {
        var t = Bo(e);
        if (null !== t) return t;
        e = e.sibling;
    }
    return null;
}
var $o = Ja.unstable_scheduleCallback,
    Wo = Ja.unstable_cancelCallback,
    Ho = Ja.unstable_shouldYield,
    Ko = Ja.unstable_requestPaint,
    qo = Ja.unstable_now,
    Qo = Ja.unstable_getCurrentPriorityLevel,
    Go = Ja.unstable_ImmediatePriority,
    Yo = Ja.unstable_UserBlockingPriority,
    Xo = Ja.unstable_NormalPriority,
    Zo = Ja.unstable_LowPriority,
    Jo = Ja.unstable_IdlePriority,
    el = null,
    tl = null;
var nl = Math.clz32
        ? Math.clz32
        : function (e) {
              return ((e >>>= 0), 0 === e ? 32 : (31 - ((rl(e) / al) | 0)) | 0);
          },
    rl = Math.log,
    al = Math.LN2;
var il = 64,
    ol = 4194304;
function ll(e) {
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
function ul(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0,
        a = e.suspendedLanes,
        i = e.pingedLanes,
        o = 268435455 & n;
    if (0 !== o) {
        var l = o & ~a;
        0 !== l ? (r = ll(l)) : 0 !== (i &= o) && (r = ll(i));
    } else 0 !== (o = n & ~a) ? (r = ll(o)) : 0 !== i && (r = ll(i));
    if (0 === r) return 0;
    if (0 !== t && t !== r && 0 == (t & a) && ((a = r & -r) >= (i = t & -t) || (16 === a && 0 != (4194240 & i))))
        return t;
    if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; ) ((a = 1 << (n = 31 - nl(t))), (r |= e[n]), (t &= ~a));
    return r;
}
function sl(e, t) {
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
function cl(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
}
function fl() {
    var e = il;
    return (0 == (4194240 & (il <<= 1)) && (il = 64), e);
}
function dl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function pl(e, t, n) {
    ((e.pendingLanes |= t),
        536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        ((e = e.eventTimes)[(t = 31 - nl(t))] = n));
}
function hl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - nl(n),
            a = 1 << r;
        ((a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a));
    }
}
var vl = 0;
function ml(e) {
    return 1 < (e &= -e) ? (4 < e ? (0 != (268435455 & e) ? 16 : 536870912) : 4) : 1;
}
var gl,
    yl,
    bl,
    _l,
    wl,
    kl = !1,
    Sl = [],
    xl = null,
    Ol = null,
    El = null,
    Pl = new Map(),
    Cl = new Map(),
    Al = [],
    Nl =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' ',
        );
function Tl(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            xl = null;
            break;
        case 'dragenter':
        case 'dragleave':
            Ol = null;
            break;
        case 'mouseover':
        case 'mouseout':
            El = null;
            break;
        case 'pointerover':
        case 'pointerout':
            Pl.delete(t.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            Cl.delete(t.pointerId);
    }
}
function jl(e, t, n, r, a, i) {
    return null === e || e.nativeEvent !== i
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }),
          null !== t && null !== (t = hc(t)) && yl(t),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== a && -1 === t.indexOf(a) && t.push(a), e);
}
function Ll(e) {
    var t = pc(e.target);
    if (null !== t) {
        var n = Mo(t);
        if (null !== n)
            if (13 === (t = n.tag)) {
                if (null !== (t = Vo(n)))
                    return (
                        (e.blockedOn = t),
                        void wl(e.priority, function () {
                            bl(n);
                        })
                    );
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
}
function Rl(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Hl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return (null !== (t = hc(n)) && yl(t), (e.blockedOn = n), !1);
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        ((mo = r), n.target.dispatchEvent(r), (mo = null), t.shift());
    }
    return !0;
}
function zl(e, t, n) {
    Rl(e) && n.delete(t);
}
function Il() {
    ((kl = !1),
        null !== xl && Rl(xl) && (xl = null),
        null !== Ol && Rl(Ol) && (Ol = null),
        null !== El && Rl(El) && (El = null),
        Pl.forEach(zl),
        Cl.forEach(zl));
}
function Dl(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), kl || ((kl = !0), Ja.unstable_scheduleCallback(Ja.unstable_NormalPriority, Il)));
}
function Ml(e) {
    function t(t) {
        return Dl(t, e);
    }
    if (0 < Sl.length) {
        Dl(Sl[0], e);
        for (var n = 1; n < Sl.length; n++) {
            var r = Sl[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        null !== xl && Dl(xl, e),
            null !== Ol && Dl(Ol, e),
            null !== El && Dl(El, e),
            Pl.forEach(t),
            Cl.forEach(t),
            n = 0;
        n < Al.length;
        n++
    )
        (r = Al[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < Al.length && null === (n = Al[0]).blockedOn; ) (Ll(n), null === n.blockedOn && Al.shift());
}
var Vl = vi.ReactCurrentBatchConfig,
    Fl = !0;
function Ul(e, t, n, r) {
    var a = vl,
        i = Vl.transition;
    Vl.transition = null;
    try {
        ((vl = 1), $l(e, t, n, r));
    } finally {
        ((vl = a), (Vl.transition = i));
    }
}
function Bl(e, t, n, r) {
    var a = vl,
        i = Vl.transition;
    Vl.transition = null;
    try {
        ((vl = 4), $l(e, t, n, r));
    } finally {
        ((vl = a), (Vl.transition = i));
    }
}
function $l(e, t, n, r) {
    if (Fl) {
        var a = Hl(e, t, n, r);
        if (null === a) (Vs(e, t, r, Wl, n), Tl(e, r));
        else if (
            (function (e, t, n, r, a) {
                switch (t) {
                    case 'focusin':
                        return ((xl = jl(xl, e, t, n, r, a)), !0);
                    case 'dragenter':
                        return ((Ol = jl(Ol, e, t, n, r, a)), !0);
                    case 'mouseover':
                        return ((El = jl(El, e, t, n, r, a)), !0);
                    case 'pointerover':
                        var i = a.pointerId;
                        return (Pl.set(i, jl(Pl.get(i) || null, e, t, n, r, a)), !0);
                    case 'gotpointercapture':
                        return ((i = a.pointerId), Cl.set(i, jl(Cl.get(i) || null, e, t, n, r, a)), !0);
                }
                return !1;
            })(a, e, t, n, r)
        )
            r.stopPropagation();
        else if ((Tl(e, r), 4 & t && -1 < Nl.indexOf(e))) {
            for (; null !== a; ) {
                var i = hc(a);
                if ((null !== i && gl(i), null === (i = Hl(e, t, n, r)) && Vs(e, t, r, Wl, n), i === a)) break;
                a = i;
            }
            null !== a && r.stopPropagation();
        } else Vs(e, t, r, null, n);
    }
}
var Wl = null;
function Hl(e, t, n, r) {
    if (((Wl = null), null !== (e = pc((e = go(r))))))
        if (null === (t = Mo(e))) e = null;
        else if (13 === (n = t.tag)) {
            if (null !== (e = Vo(t))) return e;
            e = null;
        } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return ((Wl = e), null);
}
function Kl(e) {
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
            switch (Qo()) {
                case Go:
                    return 1;
                case Yo:
                    return 4;
                case Xo:
                case Zo:
                    return 16;
                case Jo:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var ql = null,
    Ql = null,
    Gl = null;
function Yl() {
    if (Gl) return Gl;
    var e,
        t,
        n = Ql,
        r = n.length,
        a = 'value' in ql ? ql.value : ql.textContent,
        i = a.length;
    for (e = 0; e < r && n[e] === a[e]; e++);
    var o = r - e;
    for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
    return (Gl = a.slice(e, 1 < t ? 1 - t : void 0));
}
function Xl(e) {
    var t = e.keyCode;
    return (
        'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
    );
}
function Zl() {
    return !0;
}
function Jl() {
    return !1;
}
function eu(e) {
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
                ? Zl
                : Jl),
            (this.isPropagationStopped = Jl),
            this
        );
    }
    return (
        ji(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                    (e.preventDefault ? e.preventDefault() : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
                    (this.isDefaultPrevented = Zl));
            },
            stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                    (e.stopPropagation
                        ? e.stopPropagation()
                        : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                    (this.isPropagationStopped = Zl));
            },
            persist: function () {},
            isPersistent: Zl,
        }),
        t
    );
}
var tu,
    nu,
    ru,
    au = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    iu = eu(au),
    ou = ji({}, au, { view: 0, detail: 0 }),
    lu = eu(ou),
    uu = ji({}, ou, {
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
        getModifierState: _u,
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
                : (e !== ru &&
                      (ru && 'mousemove' === e.type
                          ? ((tu = e.screenX - ru.screenX), (nu = e.screenY - ru.screenY))
                          : (nu = tu = 0),
                      (ru = e)),
                  tu);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : nu;
        },
    }),
    su = eu(uu),
    cu = eu(ji({}, uu, { dataTransfer: 0 })),
    fu = eu(ji({}, ou, { relatedTarget: 0 })),
    du = eu(ji({}, au, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    pu = ji({}, au, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    hu = eu(pu),
    vu = eu(ji({}, au, { data: 0 })),
    mu = {
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
    gu = {
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
    yu = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function bu(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = yu[e]) && !!t[e];
}
function _u() {
    return bu;
}
var wu = ji({}, ou, {
        key: function (e) {
            if (e.key) {
                var t = mu[e.key] || e.key;
                if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
                ? 13 === (e = Xl(e))
                    ? 'Enter'
                    : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? gu[e.keyCode] || 'Unidentified'
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
        getModifierState: _u,
        charCode: function (e) {
            return 'keypress' === e.type ? Xl(e) : 0;
        },
        keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
        which: function (e) {
            return 'keypress' === e.type ? Xl(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
    }),
    ku = eu(wu),
    Su = eu(
        ji({}, uu, {
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
    xu = eu(
        ji({}, ou, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: _u,
        }),
    ),
    Ou = eu(ji({}, au, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    Eu = ji({}, uu, {
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
    Pu = eu(Eu),
    Cu = [9, 13, 27, 32],
    Au = ii && 'CompositionEvent' in window,
    Nu = null;
ii && 'documentMode' in document && (Nu = document.documentMode);
var Tu = ii && 'TextEvent' in window && !Nu,
    ju = ii && (!Au || (Nu && 8 < Nu && 11 >= Nu)),
    Lu = String.fromCharCode(32),
    Ru = !1;
function zu(e, t) {
    switch (e) {
        case 'keyup':
            return -1 !== Cu.indexOf(t.keyCode);
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
function Iu(e) {
    return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
}
var Du = !1;
var Mu = {
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
function Vu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return 'input' === t ? !!Mu[e.type] : 'textarea' === t;
}
function Fu(e, t, n, r) {
    (ko(r),
        0 < (t = Us(t, 'onChange')).length &&
            ((n = new iu('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
}
var Uu = null,
    Bu = null;
function $u(e) {
    Ls(e, 0);
}
function Wu(e) {
    if (Bi(vc(e))) return e;
}
function Hu(e, t) {
    if ('change' === e) return t;
}
var Ku = !1;
if (ii) {
    var qu;
    if (ii) {
        var Qu = 'oninput' in document;
        if (!Qu) {
            var Gu = document.createElement('div');
            (Gu.setAttribute('oninput', 'return;'), (Qu = 'function' == typeof Gu.oninput));
        }
        qu = Qu;
    } else qu = !1;
    Ku = qu && (!document.documentMode || 9 < document.documentMode);
}
function Yu() {
    Uu && (Uu.detachEvent('onpropertychange', Xu), (Bu = Uu = null));
}
function Xu(e) {
    if ('value' === e.propertyName && Wu(Bu)) {
        var t = [];
        (Fu(t, Bu, e, go(e)), Po($u, t));
    }
}
function Zu(e, t, n) {
    'focusin' === e ? (Yu(), (Bu = n), (Uu = t).attachEvent('onpropertychange', Xu)) : 'focusout' === e && Yu();
}
function Ju(e) {
    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Wu(Bu);
}
function es(e, t) {
    if ('click' === e) return Wu(t);
}
function ts(e, t) {
    if ('input' === e || 'change' === e) return Wu(t);
}
var ns =
    'function' == typeof Object.is
        ? Object.is
        : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
          };
function rs(e, t) {
    if (ns(e, t)) return !0;
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var a = n[r];
        if (!oi.call(t, a) || !ns(e[a], t[a])) return !1;
    }
    return !0;
}
function as(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function is(e, t) {
    var n,
        r = as(e);
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
        r = as(r);
    }
}
function os(e, t) {
    return (
        !(!e || !t) &&
        (e === t ||
            ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                    ? os(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
    );
}
function ls() {
    for (var e = window, t = $i(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = 'string' == typeof t.contentWindow.location.href;
        } catch (r) {
            n = !1;
        }
        if (!n) break;
        t = $i((e = t.contentWindow).document);
    }
    return t;
}
function us(e) {
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
function ss(e) {
    var t = ls(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && os(n.ownerDocument.documentElement, n)) {
        if (null !== r && us(n))
            if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
            else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
                e = e.getSelection();
                var a = n.textContent.length,
                    i = Math.min(r.start, a);
                ((r = void 0 === r.end ? i : Math.min(r.end, a)),
                    !e.extend && i > r && ((a = r), (r = i), (i = a)),
                    (a = is(n, i)));
                var o = is(n, r);
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
var cs = ii && 'documentMode' in document && 11 >= document.documentMode,
    fs = null,
    ds = null,
    ps = null,
    hs = !1;
function vs(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    hs ||
        null == fs ||
        fs !== $i(r) ||
        ('selectionStart' in (r = fs) && us(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                  anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                      .anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              }),
        (ps && rs(ps, r)) ||
            ((ps = r),
            0 < (r = Us(ds, 'onSelect')).length &&
                ((t = new iu('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = fs))));
}
function ms(e, t) {
    var n = {};
    return ((n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n);
}
var gs = {
        animationend: ms('Animation', 'AnimationEnd'),
        animationiteration: ms('Animation', 'AnimationIteration'),
        animationstart: ms('Animation', 'AnimationStart'),
        transitionend: ms('Transition', 'TransitionEnd'),
    },
    ys = {},
    bs = {};
function _s(e) {
    if (ys[e]) return ys[e];
    if (!gs[e]) return e;
    var t,
        n = gs[e];
    for (t in n) if (n.hasOwnProperty(t) && t in bs) return (ys[e] = n[t]);
    return e;
}
ii &&
    ((bs = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete gs.animationend.animation, delete gs.animationiteration.animation, delete gs.animationstart.animation),
    'TransitionEvent' in window || delete gs.transitionend.transition);
var ws = _s('animationend'),
    ks = _s('animationiteration'),
    Ss = _s('animationstart'),
    xs = _s('transitionend'),
    Os = new Map(),
    Es =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' ',
        );
function Ps(e, t) {
    (Os.set(e, t), ri(t, [e]));
}
for (var Cs = 0; Cs < Es.length; Cs++) {
    var As = Es[Cs];
    Ps(As.toLowerCase(), 'on' + (As[0].toUpperCase() + As.slice(1)));
}
(Ps(ws, 'onAnimationEnd'),
    Ps(ks, 'onAnimationIteration'),
    Ps(Ss, 'onAnimationStart'),
    Ps('dblclick', 'onDoubleClick'),
    Ps('focusin', 'onFocus'),
    Ps('focusout', 'onBlur'),
    Ps(xs, 'onTransitionEnd'),
    ai('onMouseEnter', ['mouseout', 'mouseover']),
    ai('onMouseLeave', ['mouseout', 'mouseover']),
    ai('onPointerEnter', ['pointerout', 'pointerover']),
    ai('onPointerLeave', ['pointerout', 'pointerover']),
    ri('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    ri('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    ri('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    ri('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    ri('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    ri('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
var Ns =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' ',
        ),
    Ts = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ns));
function js(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n),
        (function (e, t, n, r, a, i, o, l, u) {
            if ((Do.apply(this, arguments), jo)) {
                if (!jo) throw Error(ei(198));
                var s = Lo;
                ((jo = !1), (Lo = null), Ro || ((Ro = !0), (zo = s)));
            }
        })(r, t, void 0, e),
        (e.currentTarget = null));
}
function Ls(e, t) {
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
                    (js(a, l, s), (i = u));
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
                    (js(a, l, s), (i = u));
                }
        }
    }
    if (Ro) throw ((e = zo), (Ro = !1), (zo = null), e);
}
function Rs(e, t) {
    var n = t[cc];
    void 0 === n && (n = t[cc] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Ms(t, e, 2, !1), n.add(r));
}
function zs(e, t, n) {
    var r = 0;
    (t && (r |= 4), Ms(n, e, r, t));
}
var Is = '_reactListening' + Math.random().toString(36).slice(2);
function Ds(e) {
    if (!e[Is]) {
        ((e[Is] = !0),
            ti.forEach(function (t) {
                'selectionchange' !== t && (Ts.has(t) || zs(t, !1, e), zs(t, !0, e));
            }));
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[Is] || ((t[Is] = !0), zs('selectionchange', !1, t));
    }
}
function Ms(e, t, n, r) {
    switch (Kl(t)) {
        case 1:
            var a = Ul;
            break;
        case 4:
            a = Bl;
            break;
        default:
            a = $l;
    }
    ((n = a.bind(null, t, n, e)),
        (a = void 0),
        !Ao || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (a = !0),
        r
            ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
            : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1));
}
function Vs(e, t, n, r, a) {
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
                    if (null === (o = pc(l))) return;
                    if (5 === (u = o.tag) || 6 === u) {
                        r = i = o;
                        continue e;
                    }
                    l = l.parentNode;
                }
            }
            r = r.return;
        }
    Po(function () {
        var r = i,
            a = go(n),
            o = [];
        e: {
            var l = Os.get(e);
            if (void 0 !== l) {
                var u = iu,
                    s = e;
                switch (e) {
                    case 'keypress':
                        if (0 === Xl(n)) break e;
                    case 'keydown':
                    case 'keyup':
                        u = ku;
                        break;
                    case 'focusin':
                        ((s = 'focus'), (u = fu));
                        break;
                    case 'focusout':
                        ((s = 'blur'), (u = fu));
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        u = fu;
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
                        u = su;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        u = cu;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        u = xu;
                        break;
                    case ws:
                    case ks:
                    case Ss:
                        u = du;
                        break;
                    case xs:
                        u = Ou;
                        break;
                    case 'scroll':
                        u = lu;
                        break;
                    case 'wheel':
                        u = Pu;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        u = hu;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        u = Su;
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
                            ((p = v), null !== d && null != (v = Co(h, d)) && c.push(Fs(h, v, p))),
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
                    n === mo ||
                    !(s = n.relatedTarget || n.fromElement) ||
                    (!pc(s) && !s[sc])) &&
                    (u || l) &&
                    ((l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window),
                    u
                        ? ((u = r),
                          null !== (s = (s = n.relatedTarget || n.toElement) ? pc(s) : null) &&
                              (s !== (f = Mo(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                              (s = null))
                        : ((u = null), (s = r)),
                    u !== s))
            ) {
                if (
                    ((c = su),
                    (v = 'onMouseLeave'),
                    (d = 'onMouseEnter'),
                    (h = 'mouse'),
                    ('pointerout' !== e && 'pointerover' !== e) ||
                        ((c = Su), (v = 'onPointerLeave'), (d = 'onPointerEnter'), (h = 'pointer')),
                    (f = null == u ? l : vc(u)),
                    (p = null == s ? l : vc(s)),
                    ((l = new c(v, h + 'leave', u, n, a)).target = f),
                    (l.relatedTarget = p),
                    (v = null),
                    pc(a) === r && (((c = new c(d, h + 'enter', s, n, a)).target = p), (c.relatedTarget = f), (v = c)),
                    (f = v),
                    u && s)
                )
                    e: {
                        for (d = s, h = 0, p = c = u; p; p = Bs(p)) h++;
                        for (p = 0, v = d; v; v = Bs(v)) p++;
                        for (; 0 < h - p; ) ((c = Bs(c)), h--);
                        for (; 0 < p - h; ) ((d = Bs(d)), p--);
                        for (; h--; ) {
                            if (c === d || (null !== d && c === d.alternate)) break e;
                            ((c = Bs(c)), (d = Bs(d)));
                        }
                        c = null;
                    }
                else c = null;
                (null !== u && $s(o, l, u, c, !1), null !== s && null !== f && $s(o, f, s, c, !0));
            }
            if (
                'select' === (u = (l = r ? vc(r) : window).nodeName && l.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === l.type)
            )
                var m = Hu;
            else if (Vu(l))
                if (Ku) m = ts;
                else {
                    m = Ju;
                    var g = Zu;
                }
            else
                (u = l.nodeName) &&
                    'input' === u.toLowerCase() &&
                    ('checkbox' === l.type || 'radio' === l.type) &&
                    (m = es);
            switch (
                (m && (m = m(e, r))
                    ? Fu(o, m, n, a)
                    : (g && g(e, l, r),
                      'focusout' === e &&
                          (g = l._wrapperState) &&
                          g.controlled &&
                          'number' === l.type &&
                          Gi(l, 'number', l.value)),
                (g = r ? vc(r) : window),
                e)
            ) {
                case 'focusin':
                    (Vu(g) || 'true' === g.contentEditable) && ((fs = g), (ds = r), (ps = null));
                    break;
                case 'focusout':
                    ps = ds = fs = null;
                    break;
                case 'mousedown':
                    hs = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    ((hs = !1), vs(o, n, a));
                    break;
                case 'selectionchange':
                    if (cs) break;
                case 'keydown':
                case 'keyup':
                    vs(o, n, a);
            }
            var y;
            if (Au)
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
                Du
                    ? zu(e, n) && (b = 'onCompositionEnd')
                    : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
            (b &&
                (ju &&
                    'ko' !== n.locale &&
                    (Du || 'onCompositionStart' !== b
                        ? 'onCompositionEnd' === b && Du && (y = Yl())
                        : ((Ql = 'value' in (ql = a) ? ql.value : ql.textContent), (Du = !0))),
                0 < (g = Us(r, b)).length &&
                    ((b = new vu(b, e, null, n, a)),
                    o.push({ event: b, listeners: g }),
                    y ? (b.data = y) : null !== (y = Iu(n)) && (b.data = y))),
                (y = Tu
                    ? (function (e, t) {
                          switch (e) {
                              case 'compositionend':
                                  return Iu(t);
                              case 'keypress':
                                  return 32 !== t.which ? null : ((Ru = !0), Lu);
                              case 'textInput':
                                  return (e = t.data) === Lu && Ru ? null : e;
                              default:
                                  return null;
                          }
                      })(e, n)
                    : (function (e, t) {
                          if (Du)
                              return 'compositionend' === e || (!Au && zu(e, t))
                                  ? ((e = Yl()), (Gl = Ql = ql = null), (Du = !1), e)
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
                                  return ju && 'ko' !== t.locale ? null : t.data;
                          }
                      })(e, n)) &&
                    0 < (r = Us(r, 'onBeforeInput')).length &&
                    ((a = new vu('onBeforeInput', 'beforeinput', null, n, a)),
                    o.push({ event: a, listeners: r }),
                    (a.data = y)));
        }
        Ls(o, t);
    });
}
function Fs(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Us(e, t) {
    for (var n = t + 'Capture', r = []; null !== e; ) {
        var a = e,
            i = a.stateNode;
        (5 === a.tag &&
            null !== i &&
            ((a = i), null != (i = Co(e, n)) && r.unshift(Fs(e, i, a)), null != (i = Co(e, t)) && r.push(Fs(e, i, a))),
            (e = e.return));
    }
    return r;
}
function Bs(e) {
    if (null === e) return null;
    do {
        e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
}
function $s(e, t, n, r, a) {
    for (var i = t._reactName, o = []; null !== n && n !== r; ) {
        var l = n,
            u = l.alternate,
            s = l.stateNode;
        if (null !== u && u === r) break;
        (5 === l.tag &&
            null !== s &&
            ((l = s),
            a
                ? null != (u = Co(n, i)) && o.unshift(Fs(n, u, l))
                : a || (null != (u = Co(n, i)) && o.push(Fs(n, u, l)))),
            (n = n.return));
    }
    0 !== o.length && e.push({ event: t, listeners: o });
}
var Ws = /\r\n?/g,
    Hs = /\u0000|\uFFFD/g;
function Ks(e) {
    return ('string' == typeof e ? e : '' + e).replace(Ws, '\n').replace(Hs, '');
}
function qs(e, t, n) {
    if (((t = Ks(t)), Ks(e) !== t && n)) throw Error(ei(425));
}
function Qs() {}
var Gs = null,
    Ys = null;
function Xs(e, t) {
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
var Zs = 'function' == typeof setTimeout ? setTimeout : void 0,
    Js = 'function' == typeof clearTimeout ? clearTimeout : void 0,
    ec = 'function' == typeof Promise ? Promise : void 0,
    tc =
        'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== ec
              ? function (e) {
                    return ec.resolve(null).then(e).catch(nc);
                }
              : Zs;
function nc(e) {
    setTimeout(function () {
        throw e;
    });
}
function rc(e, t) {
    var n = t,
        r = 0;
    do {
        var a = n.nextSibling;
        if ((e.removeChild(n), a && 8 === a.nodeType))
            if ('/$' === (n = a.data)) {
                if (0 === r) return (e.removeChild(a), void Ml(t));
                r--;
            } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
        n = a;
    } while (n);
    Ml(t);
}
function ac(e) {
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
function ic(e) {
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
var oc = Math.random().toString(36).slice(2),
    lc = '__reactFiber$' + oc,
    uc = '__reactProps$' + oc,
    sc = '__reactContainer$' + oc,
    cc = '__reactEvents$' + oc,
    fc = '__reactListeners$' + oc,
    dc = '__reactHandles$' + oc;
function pc(e) {
    var t = e[lc];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[sc] || n[lc])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = ic(e); null !== e; ) {
                    if ((n = e[lc])) return n;
                    e = ic(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function hc(e) {
    return !(e = e[lc] || e[sc]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
}
function vc(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(ei(33));
}
function mc(e) {
    return e[uc] || null;
}
var gc = [],
    yc = -1;
function bc(e) {
    return { current: e };
}
function _c(e) {
    0 > yc || ((e.current = gc[yc]), (gc[yc] = null), yc--);
}
function wc(e, t) {
    (yc++, (gc[yc] = e.current), (e.current = t));
}
var kc = {},
    Sc = bc(kc),
    xc = bc(!1),
    Oc = kc;
function Ec(e, t) {
    var n = e.type.contextTypes;
    if (!n) return kc;
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
function Pc(e) {
    return null != (e = e.childContextTypes);
}
function Cc() {
    (_c(xc), _c(Sc));
}
function Ac(e, t, n) {
    if (Sc.current !== kc) throw Error(ei(168));
    (wc(Sc, t), wc(xc, n));
}
function Nc(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
    for (var a in (r = r.getChildContext())) if (!(a in t)) throw Error(ei(108, Mi(e) || 'Unknown', a));
    return ji({}, n, r);
}
function Tc(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || kc),
        (Oc = Sc.current),
        wc(Sc, e),
        wc(xc, xc.current),
        !0
    );
}
function jc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(ei(169));
    (n ? ((e = Nc(e, t, Oc)), (r.__reactInternalMemoizedMergedChildContext = e), _c(xc), _c(Sc), wc(Sc, e)) : _c(xc),
        wc(xc, n));
}
var Lc = null,
    Rc = !1,
    zc = !1;
function Ic(e) {
    null === Lc ? (Lc = [e]) : Lc.push(e);
}
function Dc() {
    if (!zc && null !== Lc) {
        zc = !0;
        var e = 0,
            t = vl;
        try {
            var n = Lc;
            for (vl = 1; e < n.length; e++) {
                var r = n[e];
                do {
                    r = r(!0);
                } while (null !== r);
            }
            ((Lc = null), (Rc = !1));
        } catch (a) {
            throw (null !== Lc && (Lc = Lc.slice(e + 1)), $o(Go, Dc), a);
        } finally {
            ((vl = t), (zc = !1));
        }
    }
    return null;
}
var Mc = [],
    Vc = 0,
    Fc = null,
    Uc = 0,
    Bc = [],
    $c = 0,
    Wc = null,
    Hc = 1,
    Kc = '';
function qc(e, t) {
    ((Mc[Vc++] = Uc), (Mc[Vc++] = Fc), (Fc = e), (Uc = t));
}
function Qc(e, t, n) {
    ((Bc[$c++] = Hc), (Bc[$c++] = Kc), (Bc[$c++] = Wc), (Wc = e));
    var r = Hc;
    e = Kc;
    var a = 32 - nl(r) - 1;
    ((r &= ~(1 << a)), (n += 1));
    var i = 32 - nl(t) + a;
    if (30 < i) {
        var o = a - (a % 5);
        ((i = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (a -= o),
            (Hc = (1 << (32 - nl(t) + a)) | (n << a) | r),
            (Kc = i + e));
    } else ((Hc = (1 << i) | (n << a) | r), (Kc = e));
}
function Gc(e) {
    null !== e.return && (qc(e, 1), Qc(e, 1, 0));
}
function Yc(e) {
    for (; e === Fc; ) ((Fc = Mc[--Vc]), (Mc[Vc] = null), (Uc = Mc[--Vc]), (Mc[Vc] = null));
    for (; e === Wc; )
        ((Wc = Bc[--$c]), (Bc[$c] = null), (Kc = Bc[--$c]), (Bc[$c] = null), (Hc = Bc[--$c]), (Bc[$c] = null));
}
var Xc = null,
    Zc = null,
    Jc = !1,
    ef = null;
function tf(e, t) {
    var n = Ev(5, null, null, 0);
    ((n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function nf(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (Xc = e), (Zc = ac(t.firstChild)), !0)
            );
        case 6:
            return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (Xc = e), (Zc = null), !0)
            );
        case 13:
            return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Wc ? { id: Hc, overflow: Kc } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = Ev(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (Xc = e),
                (Zc = null),
                !0)
            );
        default:
            return !1;
    }
}
function rf(e) {
    return 0 != (1 & e.mode) && 0 == (128 & e.flags);
}
function af(e) {
    if (Jc) {
        var t = Zc;
        if (t) {
            var n = t;
            if (!nf(e, t)) {
                if (rf(e)) throw Error(ei(418));
                t = ac(n.nextSibling);
                var r = Xc;
                t && nf(e, t) ? tf(r, n) : ((e.flags = (-4097 & e.flags) | 2), (Jc = !1), (Xc = e));
            }
        } else {
            if (rf(e)) throw Error(ei(418));
            ((e.flags = (-4097 & e.flags) | 2), (Jc = !1), (Xc = e));
        }
    }
}
function of(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
    Xc = e;
}
function lf(e) {
    if (e !== Xc) return !1;
    if (!Jc) return (of(e), (Jc = !0), !1);
    var t;
    if (
        ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = 'head' !== (t = e.type) && 'body' !== t && !Xs(e.type, e.memoizedProps)),
        t && (t = Zc))
    ) {
        if (rf(e)) throw (uf(), Error(ei(418)));
        for (; t; ) (tf(e, t), (t = ac(t.nextSibling)));
    }
    if ((of(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(ei(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ('/$' === n) {
                        if (0 === t) {
                            Zc = ac(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
            }
            Zc = null;
        }
    } else Zc = Xc ? ac(e.stateNode.nextSibling) : null;
    return !0;
}
function uf() {
    for (var e = Zc; e; ) e = ac(e.nextSibling);
}
function sf() {
    ((Zc = Xc = null), (Jc = !1));
}
function cf(e) {
    null === ef ? (ef = [e]) : ef.push(e);
}
var ff = vi.ReactCurrentBatchConfig;
function df(e, t, n) {
    if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
        if (n._owner) {
            if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(ei(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(ei(147, e));
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
        if ('string' != typeof e) throw Error(ei(284));
        if (!n._owner) throw Error(ei(290, e));
    }
    return e;
}
function pf(e, t) {
    throw (
        (e = Object.prototype.toString.call(t)),
        Error(ei(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e))
    );
}
function hf(e) {
    return (0, e._init)(e._payload);
}
function vf(e) {
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
        return (((e = Cv(e, t)).index = 0), (e.sibling = null), e);
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
        return null === t || 6 !== t.tag ? (((t = jv(n, e.mode, r)).return = e), t) : (((t = a(t, n)).return = e), t);
    }
    function u(e, t, n, r) {
        var i = n.type;
        return i === yi
            ? c(e, t, n.props.children, r, n.key)
            : null !== t &&
                (t.elementType === i || ('object' == typeof i && null !== i && i.$$typeof === Pi && hf(i) === t.type))
              ? (((r = a(t, n.props)).ref = df(e, t, n)), (r.return = e), r)
              : (((r = Av(n.type, n.key, n.props, null, e.mode, r)).ref = df(e, t, n)), (r.return = e), r);
    }
    function s(e, t, n, r) {
        return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = Lv(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
    }
    function c(e, t, n, r, i) {
        return null === t || 7 !== t.tag
            ? (((t = Nv(n, e.mode, r, i)).return = e), t)
            : (((t = a(t, n)).return = e), t);
    }
    function f(e, t, n) {
        if (('string' == typeof t && '' !== t) || 'number' == typeof t)
            return (((t = jv('' + t, e.mode, n)).return = e), t);
        if ('object' == typeof t && null !== t) {
            switch (t.$$typeof) {
                case mi:
                    return (
                        ((n = Av(t.type, t.key, t.props, null, e.mode, n)).ref = df(e, null, t)),
                        (n.return = e),
                        n
                    );
                case gi:
                    return (((t = Lv(t, e.mode, n)).return = e), t);
                case Pi:
                    return f(e, (0, t._init)(t._payload), n);
            }
            if (Yi(t) || Ni(t)) return (((t = Nv(t, e.mode, n, null)).return = e), t);
            pf(e, t);
        }
        return null;
    }
    function d(e, t, n, r) {
        var a = null !== t ? t.key : null;
        if (('string' == typeof n && '' !== n) || 'number' == typeof n) return null !== a ? null : l(e, t, '' + n, r);
        if ('object' == typeof n && null !== n) {
            switch (n.$$typeof) {
                case mi:
                    return n.key === a ? u(e, t, n, r) : null;
                case gi:
                    return n.key === a ? s(e, t, n, r) : null;
                case Pi:
                    return d(e, t, (a = n._init)(n._payload), r);
            }
            if (Yi(n) || Ni(n)) return null !== a ? null : c(e, t, n, r, null);
            pf(e, n);
        }
        return null;
    }
    function p(e, t, n, r, a) {
        if (('string' == typeof r && '' !== r) || 'number' == typeof r) return l(t, (e = e.get(n) || null), '' + r, a);
        if ('object' == typeof r && null !== r) {
            switch (r.$$typeof) {
                case mi:
                    return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case gi:
                    return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case Pi:
                    return p(e, t, n, (0, r._init)(r._payload), a);
            }
            if (Yi(r) || Ni(r)) return c(t, (e = e.get(n) || null), r, a, null);
            pf(t, r);
        }
        return null;
    }
    return function l(u, s, c, h) {
        if (
            ('object' == typeof c && null !== c && c.type === yi && null === c.key && (c = c.props.children),
            'object' == typeof c && null !== c)
        ) {
            switch (c.$$typeof) {
                case mi:
                    e: {
                        for (var v = c.key, m = s; null !== m; ) {
                            if (m.key === v) {
                                if ((v = c.type) === yi) {
                                    if (7 === m.tag) {
                                        (n(u, m.sibling), ((s = a(m, c.props.children)).return = u), (u = s));
                                        break e;
                                    }
                                } else if (
                                    m.elementType === v ||
                                    ('object' == typeof v && null !== v && v.$$typeof === Pi && hf(v) === m.type)
                                ) {
                                    (n(u, m.sibling), ((s = a(m, c.props)).ref = df(u, m, c)), (s.return = u), (u = s));
                                    break e;
                                }
                                n(u, m);
                                break;
                            }
                            (t(u, m), (m = m.sibling));
                        }
                        c.type === yi
                            ? (((s = Nv(c.props.children, u.mode, h, c.key)).return = u), (u = s))
                            : (((h = Av(c.type, c.key, c.props, null, u.mode, h)).ref = df(u, s, c)),
                              (h.return = u),
                              (u = h));
                    }
                    return o(u);
                case gi:
                    e: {
                        for (m = c.key; null !== s; ) {
                            if (s.key === m) {
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
                        (((s = Lv(c, u.mode, h)).return = u), (u = s));
                    }
                    return o(u);
                case Pi:
                    return l(u, s, (m = c._init)(c._payload), h);
            }
            if (Yi(c))
                return (function (a, o, l, u) {
                    for (var s = null, c = null, h = o, v = (o = 0), m = null; null !== h && v < l.length; v++) {
                        h.index > v ? ((m = h), (h = null)) : (m = h.sibling);
                        var g = d(a, h, l[v], u);
                        if (null === g) {
                            null === h && (h = m);
                            break;
                        }
                        (e && h && null === g.alternate && t(a, h),
                            (o = i(g, o, v)),
                            null === c ? (s = g) : (c.sibling = g),
                            (c = g),
                            (h = m));
                    }
                    if (v === l.length) return (n(a, h), Jc && qc(a, v), s);
                    if (null === h) {
                        for (; v < l.length; v++)
                            null !== (h = f(a, l[v], u)) &&
                                ((o = i(h, o, v)), null === c ? (s = h) : (c.sibling = h), (c = h));
                        return (Jc && qc(a, v), s);
                    }
                    for (h = r(a, h); v < l.length; v++)
                        null !== (m = p(h, a, v, l[v], u)) &&
                            (e && null !== m.alternate && h.delete(null === m.key ? v : m.key),
                            (o = i(m, o, v)),
                            null === c ? (s = m) : (c.sibling = m),
                            (c = m));
                    return (
                        e &&
                            h.forEach(function (e) {
                                return t(a, e);
                            }),
                        Jc && qc(a, v),
                        s
                    );
                })(u, s, c, h);
            if (Ni(c))
                return (function (a, o, l, u) {
                    var s = Ni(l);
                    if ('function' != typeof s) throw Error(ei(150));
                    if (null == (l = s.call(l))) throw Error(ei(151));
                    for (
                        var c = (s = null), h = o, v = (o = 0), m = null, g = l.next();
                        null !== h && !g.done;
                        v++, g = l.next()
                    ) {
                        h.index > v ? ((m = h), (h = null)) : (m = h.sibling);
                        var y = d(a, h, g.value, u);
                        if (null === y) {
                            null === h && (h = m);
                            break;
                        }
                        (e && h && null === y.alternate && t(a, h),
                            (o = i(y, o, v)),
                            null === c ? (s = y) : (c.sibling = y),
                            (c = y),
                            (h = m));
                    }
                    if (g.done) return (n(a, h), Jc && qc(a, v), s);
                    if (null === h) {
                        for (; !g.done; v++, g = l.next())
                            null !== (g = f(a, g.value, u)) &&
                                ((o = i(g, o, v)), null === c ? (s = g) : (c.sibling = g), (c = g));
                        return (Jc && qc(a, v), s);
                    }
                    for (h = r(a, h); !g.done; v++, g = l.next())
                        null !== (g = p(h, a, v, g.value, u)) &&
                            (e && null !== g.alternate && h.delete(null === g.key ? v : g.key),
                            (o = i(g, o, v)),
                            null === c ? (s = g) : (c.sibling = g),
                            (c = g));
                    return (
                        e &&
                            h.forEach(function (e) {
                                return t(a, e);
                            }),
                        Jc && qc(a, v),
                        s
                    );
                })(u, s, c, h);
            pf(u, c);
        }
        return ('string' == typeof c && '' !== c) || 'number' == typeof c
            ? ((c = '' + c),
              null !== s && 6 === s.tag
                  ? (n(u, s.sibling), ((s = a(s, c)).return = u), (u = s))
                  : (n(u, s), ((s = jv(c, u.mode, h)).return = u), (u = s)),
              o(u))
            : n(u, s);
    };
}
var mf = vf(!0),
    gf = vf(!1),
    yf = bc(null),
    bf = null,
    _f = null,
    wf = null;
function kf() {
    wf = _f = bf = null;
}
function Sf(e) {
    var t = yf.current;
    (_c(yf), (e._currentValue = t));
}
function xf(e, t, n) {
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
function Of(e, t) {
    ((bf = e),
        (wf = _f = null),
        null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (hp = !0), (e.firstContext = null)));
}
function Ef(e) {
    var t = e._currentValue;
    if (wf !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), null === _f)) {
            if (null === bf) throw Error(ei(308));
            ((_f = e), (bf.dependencies = { lanes: 0, firstContext: e }));
        } else _f = _f.next = e;
    return t;
}
var Pf = null;
function Cf(e) {
    null === Pf ? (Pf = [e]) : Pf.push(e);
}
function Af(e, t, n, r) {
    var a = t.interleaved;
    return (null === a ? ((n.next = n), Cf(t)) : ((n.next = a.next), (a.next = n)), (t.interleaved = n), Nf(e, r));
}
function Nf(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        ((e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return));
    return 3 === n.tag ? n.stateNode : null;
}
var Tf = !1;
function jf(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function Lf(e, t) {
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
function Rf(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function zf(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 0 != (2 & Sh))) {
        var a = r.pending;
        return (null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)), (r.pending = t), Nf(e, n));
    }
    return (
        null === (a = r.interleaved) ? ((t.next = t), Cf(r)) : ((t.next = a.next), (a.next = t)),
        (r.interleaved = t),
        Nf(e, n)
    );
}
function If(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), hl(e, n));
    }
}
function Df(e, t) {
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
function Mf(e, t, n, r) {
    var a = e.updateQueue;
    Tf = !1;
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
                            f = ji({}, f, d);
                            break e;
                        case 2:
                            Tf = !0;
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
        ((Th |= o), (e.lanes = o), (e.memoizedState = f));
    }
}
function Vf(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                a = r.callback;
            if (null !== a) {
                if (((r.callback = null), (r = n), 'function' != typeof a)) throw Error(ei(191, a));
                a.call(r);
            }
        }
}
var Ff = {},
    Uf = bc(Ff),
    Bf = bc(Ff),
    $f = bc(Ff);
function Wf(e) {
    if (e === Ff) throw Error(ei(174));
    return e;
}
function Hf(e, t) {
    switch ((wc($f, t), wc(Bf, e), wc(Uf, Ff), (e = t.nodeType))) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ro(null, '');
            break;
        default:
            t = ro((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
    }
    (_c(Uf), wc(Uf, t));
}
function Kf() {
    (_c(Uf), _c(Bf), _c($f));
}
function qf(e) {
    Wf($f.current);
    var t = Wf(Uf.current),
        n = ro(t, e.type);
    t !== n && (wc(Bf, e), wc(Uf, n));
}
function Qf(e) {
    Bf.current === e && (_c(Uf), _c(Bf));
}
var Gf = bc(0);
function Yf(e) {
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
var Xf = [];
function Zf() {
    for (var e = 0; e < Xf.length; e++) Xf[e]._workInProgressVersionPrimary = null;
    Xf.length = 0;
}
var Jf = vi.ReactCurrentDispatcher,
    ed = vi.ReactCurrentBatchConfig,
    td = 0,
    nd = null,
    rd = null,
    ad = null,
    id = !1,
    od = !1,
    ld = 0,
    ud = 0;
function sd() {
    throw Error(ei(321));
}
function cd(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ns(e[n], t[n])) return !1;
    return !0;
}
function fd(e, t, n, r, a, i) {
    if (
        ((td = i),
        (nd = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Jf.current = null === e || null === e.memoizedState ? Qd : Gd),
        (e = n(r, a)),
        od)
    ) {
        i = 0;
        do {
            if (((od = !1), (ld = 0), 25 <= i)) throw Error(ei(301));
            ((i += 1), (ad = rd = null), (t.updateQueue = null), (Jf.current = Yd), (e = n(r, a)));
        } while (od);
    }
    if (((Jf.current = qd), (t = null !== rd && null !== rd.next), (td = 0), (ad = rd = nd = null), (id = !1), t))
        throw Error(ei(300));
    return e;
}
function dd() {
    var e = 0 !== ld;
    return ((ld = 0), e);
}
function pd() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (null === ad ? (nd.memoizedState = ad = e) : (ad = ad.next = e), ad);
}
function hd() {
    if (null === rd) {
        var e = nd.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = rd.next;
    var t = null === ad ? nd.memoizedState : ad.next;
    if (null !== t) ((ad = t), (rd = e));
    else {
        if (null === e) throw Error(ei(310));
        ((e = {
            memoizedState: (rd = e).memoizedState,
            baseState: rd.baseState,
            baseQueue: rd.baseQueue,
            queue: rd.queue,
            next: null,
        }),
            null === ad ? (nd.memoizedState = ad = e) : (ad = ad.next = e));
    }
    return ad;
}
function vd(e, t) {
    return 'function' == typeof t ? t(e) : t;
}
function md(e) {
    var t = hd(),
        n = t.queue;
    if (null === n) throw Error(ei(311));
    n.lastRenderedReducer = e;
    var r = rd,
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
            if ((td & c) === c)
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
                (null === u ? ((l = u = f), (o = r)) : (u = u.next = f), (nd.lanes |= c), (Th |= c));
            }
            s = s.next;
        } while (null !== s && s !== i);
        (null === u ? (o = r) : (u.next = l),
            ns(r, t.memoizedState) || (hp = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = u),
            (n.lastRenderedState = r));
    }
    if (null !== (e = n.interleaved)) {
        a = e;
        do {
            ((i = a.lane), (nd.lanes |= i), (Th |= i), (a = a.next));
        } while (a !== e);
    } else null === a && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function gd(e) {
    var t = hd(),
        n = t.queue;
    if (null === n) throw Error(ei(311));
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
        (ns(i, t.memoizedState) || (hp = !0),
            (t.memoizedState = i),
            null === t.baseQueue && (t.baseState = i),
            (n.lastRenderedState = i));
    }
    return [i, r];
}
function yd() {}
function bd(e, t) {
    var n = nd,
        r = hd(),
        a = t(),
        i = !ns(r.memoizedState, a);
    if (
        (i && ((r.memoizedState = a), (hp = !0)),
        (r = r.queue),
        Td(kd.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (null !== ad && 1 & ad.memoizedState.tag))
    ) {
        if (((n.flags |= 2048), Ed(9, wd.bind(null, n, r, a, t), void 0, null), null === xh)) throw Error(ei(349));
        0 != (30 & td) || _d(n, t, a);
    }
    return a;
}
function _d(e, t, n) {
    ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = nd.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (nd.updateQueue = t), (t.stores = [e]))
            : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e));
}
function wd(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), Sd(t) && xd(e));
}
function kd(e, t, n) {
    return n(function () {
        Sd(t) && xd(e);
    });
}
function Sd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !ns(e, n);
    } catch (r) {
        return !0;
    }
}
function xd(e) {
    var t = Nf(e, 1);
    null !== t && Xh(t, e, 1, -1);
}
function Od(e) {
    var t = pd();
    return (
        'function' == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: vd,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = $d.bind(null, nd, e)),
        [t.memoizedState, e]
    );
}
function Ed(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = nd.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (nd.updateQueue = t), (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
    );
}
function Pd() {
    return hd().memoizedState;
}
function Cd(e, t, n, r) {
    var a = pd();
    ((nd.flags |= e), (a.memoizedState = Ed(1 | t, n, void 0, void 0 === r ? null : r)));
}
function Ad(e, t, n, r) {
    var a = hd();
    r = void 0 === r ? null : r;
    var i = void 0;
    if (null !== rd) {
        var o = rd.memoizedState;
        if (((i = o.destroy), null !== r && cd(r, o.deps))) return void (a.memoizedState = Ed(t, n, i, r));
    }
    ((nd.flags |= e), (a.memoizedState = Ed(1 | t, n, i, r)));
}
function Nd(e, t) {
    return Cd(8390656, 8, e, t);
}
function Td(e, t) {
    return Ad(2048, 8, e, t);
}
function jd(e, t) {
    return Ad(4, 2, e, t);
}
function Ld(e, t) {
    return Ad(4, 4, e, t);
}
function Rd(e, t) {
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
function zd(e, t, n) {
    return ((n = null != n ? n.concat([e]) : null), Ad(4, 4, Rd.bind(null, t, e), n));
}
function Id() {}
function Dd(e, t) {
    var n = hd();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && cd(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Md(e, t) {
    var n = hd();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && cd(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Vd(e, t, n) {
    return 0 == (21 & td)
        ? (e.baseState && ((e.baseState = !1), (hp = !0)), (e.memoizedState = n))
        : (ns(n, t) || ((n = fl()), (nd.lanes |= n), (Th |= n), (e.baseState = !0)), t);
}
function Fd(e, t) {
    var n = vl;
    ((vl = 0 !== n && 4 > n ? n : 4), e(!0));
    var r = ed.transition;
    ed.transition = {};
    try {
        (e(!1), t());
    } finally {
        ((vl = n), (ed.transition = r));
    }
}
function Ud() {
    return hd().memoizedState;
}
function Bd(e, t, n) {
    var r = Yh(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Wd(e))) Hd(t, n);
    else if (null !== (n = Af(e, t, n, r))) {
        (Xh(n, e, r, Gh()), Kd(n, t, r));
    }
}
function $d(e, t, n) {
    var r = Yh(e),
        a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Wd(e)) Hd(t, a);
    else {
        var i = e.alternate;
        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer))
            try {
                var o = t.lastRenderedState,
                    l = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), ns(l, o))) {
                    var u = t.interleaved;
                    return (
                        null === u ? ((a.next = a), Cf(t)) : ((a.next = u.next), (u.next = a)),
                        void (t.interleaved = a)
                    );
                }
            } catch (s) {}
        null !== (n = Af(e, t, a, r)) && (Xh(n, e, r, (a = Gh())), Kd(n, t, r));
    }
}
function Wd(e) {
    var t = e.alternate;
    return e === nd || (null !== t && t === nd);
}
function Hd(e, t) {
    od = id = !0;
    var n = e.pending;
    (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
}
function Kd(e, t, n) {
    if (0 != (4194240 & n)) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), hl(e, n));
    }
}
var qd = {
        readContext: Ef,
        useCallback: sd,
        useContext: sd,
        useEffect: sd,
        useImperativeHandle: sd,
        useInsertionEffect: sd,
        useLayoutEffect: sd,
        useMemo: sd,
        useReducer: sd,
        useRef: sd,
        useState: sd,
        useDebugValue: sd,
        useDeferredValue: sd,
        useTransition: sd,
        useMutableSource: sd,
        useSyncExternalStore: sd,
        useId: sd,
        unstable_isNewReconciler: !1,
    },
    Qd = {
        readContext: Ef,
        useCallback: function (e, t) {
            return ((pd().memoizedState = [e, void 0 === t ? null : t]), e);
        },
        useContext: Ef,
        useEffect: Nd,
        useImperativeHandle: function (e, t, n) {
            return ((n = null != n ? n.concat([e]) : null), Cd(4194308, 4, Rd.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
            return Cd(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Cd(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = pd();
            return ((t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
        },
        useReducer: function (e, t, n) {
            var r = pd();
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
                (e = e.dispatch = Bd.bind(null, nd, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            return ((e = { current: e }), (pd().memoizedState = e));
        },
        useState: Od,
        useDebugValue: Id,
        useDeferredValue: function (e) {
            return (pd().memoizedState = e);
        },
        useTransition: function () {
            var e = Od(!1),
                t = e[0];
            return ((e = Fd.bind(null, e[1])), (pd().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = nd,
                a = pd();
            if (Jc) {
                if (void 0 === n) throw Error(ei(407));
                n = n();
            } else {
                if (((n = t()), null === xh)) throw Error(ei(349));
                0 != (30 & td) || _d(r, t, n);
            }
            a.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
                (a.queue = i),
                Nd(kd.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ed(9, wd.bind(null, r, i, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = pd(),
                t = xh.identifierPrefix;
            if (Jc) {
                var n = Kc;
                ((t = ':' + t + 'R' + (n = (Hc & ~(1 << (32 - nl(Hc) - 1))).toString(32) + n)),
                    0 < (n = ld++) && (t += 'H' + n.toString(32)),
                    (t += ':'));
            } else t = ':' + t + 'r' + (n = ud++).toString(32) + ':';
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Gd = {
        readContext: Ef,
        useCallback: Dd,
        useContext: Ef,
        useEffect: Td,
        useImperativeHandle: zd,
        useInsertionEffect: jd,
        useLayoutEffect: Ld,
        useMemo: Md,
        useReducer: md,
        useRef: Pd,
        useState: function () {
            return md(vd);
        },
        useDebugValue: Id,
        useDeferredValue: function (e) {
            return Vd(hd(), rd.memoizedState, e);
        },
        useTransition: function () {
            return [md(vd)[0], hd().memoizedState];
        },
        useMutableSource: yd,
        useSyncExternalStore: bd,
        useId: Ud,
        unstable_isNewReconciler: !1,
    },
    Yd = {
        readContext: Ef,
        useCallback: Dd,
        useContext: Ef,
        useEffect: Td,
        useImperativeHandle: zd,
        useInsertionEffect: jd,
        useLayoutEffect: Ld,
        useMemo: Md,
        useReducer: gd,
        useRef: Pd,
        useState: function () {
            return gd(vd);
        },
        useDebugValue: Id,
        useDeferredValue: function (e) {
            var t = hd();
            return null === rd ? (t.memoizedState = e) : Vd(t, rd.memoizedState, e);
        },
        useTransition: function () {
            return [gd(vd)[0], hd().memoizedState];
        },
        useMutableSource: yd,
        useSyncExternalStore: bd,
        useId: Ud,
        unstable_isNewReconciler: !1,
    };
function Xd(e, t) {
    if (e && e.defaultProps) {
        for (var n in ((t = ji({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
    }
    return t;
}
function Zd(e, t, n, r) {
    ((n = null == (n = n(r, (t = e.memoizedState))) ? t : ji({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n));
}
var Jd = {
    isMounted: function (e) {
        return !!(e = e._reactInternals) && Mo(e) === e;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Gh(),
            a = Yh(e),
            i = Rf(r, a);
        ((i.payload = t), null != n && (i.callback = n), null !== (t = zf(e, i, a)) && (Xh(t, e, a, r), If(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Gh(),
            a = Yh(e),
            i = Rf(r, a);
        ((i.tag = 1),
            (i.payload = t),
            null != n && (i.callback = n),
            null !== (t = zf(e, i, a)) && (Xh(t, e, a, r), If(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Gh(),
            r = Yh(e),
            a = Rf(n, r);
        ((a.tag = 2), null != t && (a.callback = t), null !== (t = zf(e, a, r)) && (Xh(t, e, r, n), If(t, e, r)));
    },
};
function ep(e, t, n, r, a, i, o) {
    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, i, o)
        : !t.prototype || !t.prototype.isPureReactComponent || !rs(n, r) || !rs(a, i);
}
function tp(e, t, n) {
    var r = !1,
        a = kc,
        i = t.contextType;
    return (
        'object' == typeof i && null !== i
            ? (i = Ef(i))
            : ((a = Pc(t) ? Oc : Sc.current), (i = (r = null != (r = t.contextTypes)) ? Ec(e, a) : kc)),
        (t = new t(n, i)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = Jd),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    );
}
function np(e, t, n, r) {
    ((e = t.state),
        'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Jd.enqueueReplaceState(t, t.state, null));
}
function rp(e, t, n, r) {
    var a = e.stateNode;
    ((a.props = n), (a.state = e.memoizedState), (a.refs = {}), jf(e));
    var i = t.contextType;
    ('object' == typeof i && null !== i ? (a.context = Ef(i)) : ((i = Pc(t) ? Oc : Sc.current), (a.context = Ec(e, i))),
        (a.state = e.memoizedState),
        'function' == typeof (i = t.getDerivedStateFromProps) && (Zd(e, t, i, n), (a.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof a.getSnapshotBeforeUpdate ||
            ('function' != typeof a.UNSAFE_componentWillMount && 'function' != typeof a.componentWillMount) ||
            ((t = a.state),
            'function' == typeof a.componentWillMount && a.componentWillMount(),
            'function' == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
            t !== a.state && Jd.enqueueReplaceState(a, a.state, null),
            Mf(e, n, a, r),
            (a.state = e.memoizedState)),
        'function' == typeof a.componentDidMount && (e.flags |= 4194308));
}
function ap(e, t) {
    try {
        var n = '',
            r = t;
        do {
            ((n += Ii(r)), (r = r.return));
        } while (r);
        var a = n;
    } catch (i) {
        a = '\nError generating stack: ' + i.message + '\n' + i.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
}
function ip(e, t, n) {
    return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null };
}
function op(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var lp = 'function' == typeof WeakMap ? WeakMap : Map;
function up(e, t, n) {
    (((n = Rf(-1, n)).tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
        (n.callback = function () {
            (Vh || ((Vh = !0), (Fh = r)), op(0, t));
        }),
        n
    );
}
function sp(e, t, n) {
    (n = Rf(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ('function' == typeof r) {
        var a = t.value;
        ((n.payload = function () {
            return r(a);
        }),
            (n.callback = function () {
                op(0, t);
            }));
    }
    var i = e.stateNode;
    return (
        null !== i &&
            'function' == typeof i.componentDidCatch &&
            (n.callback = function () {
                (op(0, t), 'function' != typeof r && (null === Uh ? (Uh = new Set([this])) : Uh.add(this)));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
            }),
        n
    );
}
function cp(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new lp();
        var a = new Set();
        r.set(t, a);
    } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
    a.has(n) || (a.add(n), (e = _v.bind(null, e, t, n)), t.then(e, e));
}
function fp(e) {
    do {
        var t;
        if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e;
        e = e.return;
    } while (null !== e);
    return null;
}
function dp(e, t, n, r, a) {
    return 0 == (1 & e.mode)
        ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                1 === n.tag && (null === n.alternate ? (n.tag = 17) : (((t = Rf(-1, 1)).tag = 2), zf(n, t, 1))),
                (n.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = a), e);
}
var pp = vi.ReactCurrentOwner,
    hp = !1;
function vp(e, t, n, r) {
    t.child = null === e ? gf(t, null, n, r) : mf(t, e.child, n, r);
}
function mp(e, t, n, r, a) {
    n = n.render;
    var i = t.ref;
    return (
        Of(t, a),
        (r = fd(e, t, n, r, i, a)),
        (n = dd()),
        null === e || hp
            ? (Jc && n && Gc(t), (t.flags |= 1), vp(e, t, r, a), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Vp(e, t, a))
    );
}
function gp(e, t, n, r, a) {
    if (null === e) {
        var i = n.type;
        return 'function' != typeof i ||
            Pv(i) ||
            void 0 !== i.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Av(n.type, null, r, t, t.mode, a)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = i), yp(e, t, i, r, a));
    }
    if (((i = e.child), 0 == (e.lanes & a))) {
        var o = i.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : rs)(o, r) && e.ref === t.ref) return Vp(e, t, a);
    }
    return ((t.flags |= 1), ((e = Cv(i, r)).ref = t.ref), (e.return = t), (t.child = e));
}
function yp(e, t, n, r, a) {
    if (null !== e) {
        var i = e.memoizedProps;
        if (rs(i, r) && e.ref === t.ref) {
            if (((hp = !1), (t.pendingProps = r = i), 0 == (e.lanes & a))) return ((t.lanes = e.lanes), Vp(e, t, a));
            0 != (131072 & e.flags) && (hp = !0);
        }
    }
    return wp(e, t, n, r, a);
}
function bp(e, t, n) {
    var r = t.pendingProps,
        a = r.children,
        i = null !== e ? e.memoizedState : null;
    if ('hidden' === r.mode)
        if (0 == (1 & t.mode))
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), wc(Ch, Ph), (Ph |= n));
        else {
            if (0 == (1073741824 & n))
                return (
                    (e = null !== i ? i.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    wc(Ch, Ph),
                    (Ph |= e),
                    null
                );
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== i ? i.baseLanes : n),
                wc(Ch, Ph),
                (Ph |= r));
        }
    else (null !== i ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), wc(Ch, Ph), (Ph |= r));
    return (vp(e, t, a, n), t.child);
}
function _p(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function wp(e, t, n, r, a) {
    var i = Pc(n) ? Oc : Sc.current;
    return (
        (i = Ec(t, i)),
        Of(t, a),
        (n = fd(e, t, n, r, i, a)),
        (r = dd()),
        null === e || hp
            ? (Jc && r && Gc(t), (t.flags |= 1), vp(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Vp(e, t, a))
    );
}
function kp(e, t, n, r, a) {
    if (Pc(n)) {
        var i = !0;
        Tc(t);
    } else i = !1;
    if ((Of(t, a), null === t.stateNode)) (Mp(e, t), tp(t, n, r), rp(t, n, r, a), (r = !0));
    else if (null === e) {
        var o = t.stateNode,
            l = t.memoizedProps;
        o.props = l;
        var u = o.context,
            s = n.contextType;
        'object' == typeof s && null !== s ? (s = Ef(s)) : (s = Ec(t, (s = Pc(n) ? Oc : Sc.current)));
        var c = n.getDerivedStateFromProps,
            f = 'function' == typeof c || 'function' == typeof o.getSnapshotBeforeUpdate;
        (f ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((l !== r || u !== s) && np(t, o, r, s)),
            (Tf = !1));
        var d = t.memoizedState;
        ((o.state = d),
            Mf(t, r, o, a),
            (u = t.memoizedState),
            l !== r || d !== u || xc.current || Tf
                ? ('function' == typeof c && (Zd(t, n, c, r), (u = t.memoizedState)),
                  (l = Tf || ep(t, n, l, r, d, u, s))
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
            Lf(e, t),
            (l = t.memoizedProps),
            (s = t.type === t.elementType ? l : Xd(t.type, l)),
            (o.props = s),
            (f = t.pendingProps),
            (d = o.context),
            'object' == typeof (u = n.contextType) && null !== u
                ? (u = Ef(u))
                : (u = Ec(t, (u = Pc(n) ? Oc : Sc.current))));
        var p = n.getDerivedStateFromProps;
        ((c = 'function' == typeof p || 'function' == typeof o.getSnapshotBeforeUpdate) ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((l !== f || d !== u) && np(t, o, r, u)),
            (Tf = !1),
            (d = t.memoizedState),
            (o.state = d),
            Mf(t, r, o, a));
        var h = t.memoizedState;
        l !== f || d !== h || xc.current || Tf
            ? ('function' == typeof p && (Zd(t, n, p, r), (h = t.memoizedState)),
              (s = Tf || ep(t, n, s, r, d, h, u) || !1)
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
    return Sp(e, t, n, r, i, a);
}
function Sp(e, t, n, r, a, i) {
    _p(e, t);
    var o = 0 != (128 & t.flags);
    if (!r && !o) return (a && jc(t, n, !1), Vp(e, t, i));
    ((r = t.stateNode), (pp.current = t));
    var l = o && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
    return (
        (t.flags |= 1),
        null !== e && o ? ((t.child = mf(t, e.child, null, i)), (t.child = mf(t, null, l, i))) : vp(e, t, l, i),
        (t.memoizedState = r.state),
        a && jc(t, n, !0),
        t.child
    );
}
function xp(e) {
    var t = e.stateNode;
    (t.pendingContext ? Ac(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ac(0, t.context, !1),
        Hf(e, t.containerInfo));
}
function Op(e, t, n, r, a) {
    return (sf(), cf(a), (t.flags |= 256), vp(e, t, n, r), t.child);
}
var Ep,
    Pp,
    Cp,
    Ap,
    Np = { dehydrated: null, treeContext: null, retryLane: 0 };
function Tp(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function jp(e, t, n) {
    var r,
        a = t.pendingProps,
        i = Gf.current,
        o = !1,
        l = 0 != (128 & t.flags);
    if (
        ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
        r ? ((o = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (i |= 1),
        wc(Gf, 1 & i),
        null === e)
    )
        return (
            af(t),
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
                            : (o = Tv(l, a, 0, null)),
                        (e = Nv(e, a, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = Tp(n)),
                        (t.memoizedState = Np),
                        e)
                      : Lp(t, l))
        );
    if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
        return (function (e, t, n, r, a, i, o) {
            if (n)
                return 256 & t.flags
                    ? ((t.flags &= -257), Rp(e, t, o, (r = ip(Error(ei(422))))))
                    : null !== t.memoizedState
                      ? ((t.child = e.child), (t.flags |= 128), null)
                      : ((i = r.fallback),
                        (a = t.mode),
                        (r = Tv({ mode: 'visible', children: r.children }, a, 0, null)),
                        ((i = Nv(i, a, o, null)).flags |= 2),
                        (r.return = t),
                        (i.return = t),
                        (r.sibling = i),
                        (t.child = r),
                        0 != (1 & t.mode) && mf(t, e.child, null, o),
                        (t.child.memoizedState = Tp(o)),
                        (t.memoizedState = Np),
                        i);
            if (0 == (1 & t.mode)) return Rp(e, t, o, null);
            if ('$!' === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset)) var l = r.dgst;
                return ((r = l), Rp(e, t, o, (r = ip((i = Error(ei(419))), r, void 0))));
            }
            if (((l = 0 != (o & e.childLanes)), hp || l)) {
                if (null !== (r = xh)) {
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
                        ((i.retryLane = a), Nf(e, a), Xh(r, e, a, -1));
                }
                return (cv(), Rp(e, t, o, (r = ip(Error(ei(421))))));
            }
            return '$?' === a.data
                ? ((t.flags |= 128), (t.child = e.child), (t = kv.bind(null, e)), (a._reactRetry = t), null)
                : ((e = i.treeContext),
                  (Zc = ac(a.nextSibling)),
                  (Xc = t),
                  (Jc = !0),
                  (ef = null),
                  null !== e &&
                      ((Bc[$c++] = Hc), (Bc[$c++] = Kc), (Bc[$c++] = Wc), (Hc = e.id), (Kc = e.overflow), (Wc = t)),
                  (t = Lp(t, r.children)),
                  (t.flags |= 4096),
                  t);
        })(e, t, l, a, r, i, n);
    if (o) {
        ((o = a.fallback), (l = t.mode), (r = (i = e.child).sibling));
        var u = { mode: 'hidden', children: a.children };
        return (
            0 == (1 & l) && t.child !== i
                ? (((a = t.child).childLanes = 0), (a.pendingProps = u), (t.deletions = null))
                : ((a = Cv(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
            null !== r ? (o = Cv(r, o)) : ((o = Nv(o, l, n, null)).flags |= 2),
            (o.return = t),
            (a.return = t),
            (a.sibling = o),
            (t.child = a),
            (a = o),
            (o = t.child),
            (l =
                null === (l = e.child.memoizedState)
                    ? Tp(n)
                    : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
            (o.memoizedState = l),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = Np),
            a
        );
    }
    return (
        (e = (o = e.child).sibling),
        (a = Cv(o, { mode: 'visible', children: a.children })),
        0 == (1 & t.mode) && (a.lanes = n),
        (a.return = t),
        (a.sibling = null),
        null !== e && (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a
    );
}
function Lp(e, t) {
    return (((t = Tv({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t));
}
function Rp(e, t, n, r) {
    return (
        null !== r && cf(r),
        mf(t, e.child, null, n),
        ((e = Lp(t, t.pendingProps.children)).flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function zp(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (null !== r && (r.lanes |= t), xf(e.return, t, n));
}
function Ip(e, t, n, r, a) {
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
function Dp(e, t, n) {
    var r = t.pendingProps,
        a = r.revealOrder,
        i = r.tail;
    if ((vp(e, t, r.children, n), 0 != (2 & (r = Gf.current)))) ((r = (1 & r) | 2), (t.flags |= 128));
    else {
        if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && zp(e, n, t);
                else if (19 === e.tag) zp(e, n, t);
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
    if ((wc(Gf, r), 0 == (1 & t.mode))) t.memoizedState = null;
    else
        switch (a) {
            case 'forwards':
                for (n = t.child, a = null; null !== n; )
                    (null !== (e = n.alternate) && null === Yf(e) && (a = n), (n = n.sibling));
                (null === (n = a) ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)),
                    Ip(t, !1, a, n, i));
                break;
            case 'backwards':
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                    if (null !== (e = a.alternate) && null === Yf(e)) {
                        t.child = a;
                        break;
                    }
                    ((e = a.sibling), (a.sibling = n), (n = a), (a = e));
                }
                Ip(t, !0, n, null, i);
                break;
            case 'together':
                Ip(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Mp(e, t) {
    0 == (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Vp(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (Th |= t.lanes), 0 == (n & t.childLanes))) return null;
    if (null !== e && t.child !== e.child) throw Error(ei(153));
    if (null !== t.child) {
        for (n = Cv((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            ((e = e.sibling), ((n = n.sibling = Cv(e, e.pendingProps)).return = t));
        n.sibling = null;
    }
    return t.child;
}
function Fp(e, t) {
    if (!Jc)
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
function Up(e) {
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
function Bp(e, t, n) {
    var r = t.pendingProps;
    switch ((Yc(t), t.tag)) {
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
            return (Up(t), null);
        case 1:
        case 17:
            return (Pc(t.type) && Cc(), Up(t), null);
        case 3:
            return (
                (r = t.stateNode),
                Kf(),
                _c(xc),
                _c(Sc),
                Zf(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                    (lf(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                          ((t.flags |= 1024), null !== ef && (tv(ef), (ef = null)))),
                Pp(e, t),
                Up(t),
                null
            );
        case 5:
            Qf(t);
            var a = Wf($f.current);
            if (((n = t.type), null !== e && null != t.stateNode))
                (Cp(e, t, n, r, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(ei(166));
                    return (Up(t), null);
                }
                if (((e = Wf(Uf.current)), lf(t))) {
                    ((r = t.stateNode), (n = t.type));
                    var i = t.memoizedProps;
                    switch (((r[lc] = t), (r[uc] = i), (e = 0 != (1 & t.mode)), n)) {
                        case 'dialog':
                            (Rs('cancel', r), Rs('close', r));
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            Rs('load', r);
                            break;
                        case 'video':
                        case 'audio':
                            for (a = 0; a < Ns.length; a++) Rs(Ns[a], r);
                            break;
                        case 'source':
                            Rs('error', r);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            (Rs('error', r), Rs('load', r));
                            break;
                        case 'details':
                            Rs('toggle', r);
                            break;
                        case 'input':
                            (Hi(r, i), Rs('invalid', r));
                            break;
                        case 'select':
                            ((r._wrapperState = { wasMultiple: !!i.multiple }), Rs('invalid', r));
                            break;
                        case 'textarea':
                            (Ji(r, i), Rs('invalid', r));
                    }
                    for (var o in (ho(n, i), (a = null), i))
                        if (i.hasOwnProperty(o)) {
                            var l = i[o];
                            'children' === o
                                ? 'string' == typeof l
                                    ? r.textContent !== l &&
                                      (!0 !== i.suppressHydrationWarning && qs(r.textContent, l, e),
                                      (a = ['children', l]))
                                    : 'number' == typeof l &&
                                      r.textContent !== '' + l &&
                                      (!0 !== i.suppressHydrationWarning && qs(r.textContent, l, e),
                                      (a = ['children', '' + l]))
                                : ni.hasOwnProperty(o) && null != l && 'onScroll' === o && Rs('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            (Ui(r), Qi(r, i, !0));
                            break;
                        case 'textarea':
                            (Ui(r), to(r));
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            'function' == typeof i.onClick && (r.onclick = Qs);
                    }
                    ((r = a), (t.updateQueue = r), null !== r && (t.flags |= 4));
                } else {
                    ((o = 9 === a.nodeType ? a : a.ownerDocument),
                        'http://www.w3.org/1999/xhtml' === e && (e = no(n)),
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
                        (e[lc] = t),
                        (e[uc] = r),
                        Ep(e, t, !1, !1),
                        (t.stateNode = e));
                    e: {
                        switch (((o = vo(n, r)), n)) {
                            case 'dialog':
                                (Rs('cancel', e), Rs('close', e), (a = r));
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                (Rs('load', e), (a = r));
                                break;
                            case 'video':
                            case 'audio':
                                for (a = 0; a < Ns.length; a++) Rs(Ns[a], e);
                                a = r;
                                break;
                            case 'source':
                                (Rs('error', e), (a = r));
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                (Rs('error', e), Rs('load', e), (a = r));
                                break;
                            case 'details':
                                (Rs('toggle', e), (a = r));
                                break;
                            case 'input':
                                (Hi(e, r), (a = Wi(e, r)), Rs('invalid', e));
                                break;
                            case 'option':
                            default:
                                a = r;
                                break;
                            case 'select':
                                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (a = ji({}, r, { value: void 0 })),
                                    Rs('invalid', e));
                                break;
                            case 'textarea':
                                (Ji(e, r), (a = Zi(e, r)), Rs('invalid', e));
                        }
                        for (i in (ho(n, a), (l = a)))
                            if (l.hasOwnProperty(i)) {
                                var u = l[i];
                                'style' === i
                                    ? fo(e, u)
                                    : 'dangerouslySetInnerHTML' === i
                                      ? null != (u = u ? u.__html : void 0) && oo(e, u)
                                      : 'children' === i
                                        ? 'string' == typeof u
                                            ? ('textarea' !== n || '' !== u) && lo(e, u)
                                            : 'number' == typeof u && lo(e, '' + u)
                                        : 'suppressContentEditableWarning' !== i &&
                                          'suppressHydrationWarning' !== i &&
                                          'autoFocus' !== i &&
                                          (ni.hasOwnProperty(i)
                                              ? null != u && 'onScroll' === i && Rs('scroll', e)
                                              : null != u && hi(e, i, u, o));
                            }
                        switch (n) {
                            case 'input':
                                (Ui(e), Qi(e, r, !1));
                                break;
                            case 'textarea':
                                (Ui(e), to(e));
                                break;
                            case 'option':
                                null != r.value && e.setAttribute('value', '' + Vi(r.value));
                                break;
                            case 'select':
                                ((e.multiple = !!r.multiple),
                                    null != (i = r.value)
                                        ? Xi(e, !!r.multiple, i, !1)
                                        : null != r.defaultValue && Xi(e, !!r.multiple, r.defaultValue, !0));
                                break;
                            default:
                                'function' == typeof a.onClick && (e.onclick = Qs);
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
            return (Up(t), null);
        case 6:
            if (e && null != t.stateNode) Ap(e, t, e.memoizedProps, r);
            else {
                if ('string' != typeof r && null === t.stateNode) throw Error(ei(166));
                if (((n = Wf($f.current)), Wf(Uf.current), lf(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[lc] = t),
                        (i = r.nodeValue !== n) && null !== (e = Xc))
                    )
                        switch (e.tag) {
                            case 3:
                                qs(r.nodeValue, n, 0 != (1 & e.mode));
                                break;
                            case 5:
                                !0 !== e.memoizedProps.suppressHydrationWarning &&
                                    qs(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                    i && (t.flags |= 4);
                } else (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[lc] = t), (t.stateNode = r));
            }
            return (Up(t), null);
        case 13:
            if (
                (_c(Gf),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (Jc && null !== Zc && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                    (uf(), sf(), (t.flags |= 98560), (i = !1));
                else if (((i = lf(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!i) throw Error(ei(318));
                        if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(ei(317));
                        i[lc] = t;
                    } else (sf(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                    (Up(t), (i = !1));
                } else (null !== ef && (tv(ef), (ef = null)), (i = !0));
                if (!i) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) && (null === e || 0 != (1 & Gf.current) ? 0 === Ah && (Ah = 3) : cv())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Up(t),
                  null);
        case 4:
            return (Kf(), Pp(e, t), null === e && Ds(t.stateNode.containerInfo), Up(t), null);
        case 10:
            return (Sf(t.type._context), Up(t), null);
        case 19:
            if ((_c(Gf), null === (i = t.memoizedState))) return (Up(t), null);
            if (((r = 0 != (128 & t.flags)), null === (o = i.rendering)))
                if (r) Fp(i, !1);
                else {
                    if (0 !== Ah || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (o = Yf(e))) {
                                for (
                                    t.flags |= 128,
                                        Fp(i, !1),
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
                                return (wc(Gf, (1 & Gf.current) | 2), t.child);
                            }
                            e = e.sibling;
                        }
                    null !== i.tail && qo() > Dh && ((t.flags |= 128), (r = !0), Fp(i, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = Yf(o))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            Fp(i, !0),
                            null === i.tail && 'hidden' === i.tailMode && !o.alternate && !Jc)
                        )
                            return (Up(t), null);
                    } else
                        2 * qo() - i.renderingStartTime > Dh &&
                            1073741824 !== n &&
                            ((t.flags |= 128), (r = !0), Fp(i, !1), (t.lanes = 4194304));
                i.isBackwards
                    ? ((o.sibling = t.child), (t.child = o))
                    : (null !== (n = i.last) ? (n.sibling = o) : (t.child = o), (i.last = o));
            }
            return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = qo()),
                  (t.sibling = null),
                  (n = Gf.current),
                  wc(Gf, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Up(t), null);
        case 22:
        case 23:
            return (
                ov(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 != (1 & t.mode)
                    ? 0 != (1073741824 & Ph) && (Up(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                    : Up(t),
                null
            );
        case 24:
        case 25:
            return null;
    }
    throw Error(ei(156, t.tag));
}
function $p(e, t) {
    switch ((Yc(t), t.tag)) {
        case 1:
            return (Pc(t.type) && Cc(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null);
        case 3:
            return (
                Kf(),
                _c(xc),
                _c(Sc),
                Zf(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 5:
            return (Qf(t), null);
        case 13:
            if ((_c(Gf), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(ei(340));
                sf();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return (_c(Gf), null);
        case 4:
            return (Kf(), null);
        case 10:
            return (Sf(t.type._context), null);
        case 22:
        case 23:
            return (ov(), null);
        default:
            return null;
    }
}
((Ep = function (e, t) {
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
    (Pp = function () {}),
    (Cp = function (e, t, n, r) {
        var a = e.memoizedProps;
        if (a !== r) {
            ((e = t.stateNode), Wf(Uf.current));
            var i,
                o = null;
            switch (n) {
                case 'input':
                    ((a = Wi(e, a)), (r = Wi(e, r)), (o = []));
                    break;
                case 'select':
                    ((a = ji({}, a, { value: void 0 })), (r = ji({}, r, { value: void 0 })), (o = []));
                    break;
                case 'textarea':
                    ((a = Zi(e, a)), (r = Zi(e, r)), (o = []));
                    break;
                default:
                    'function' != typeof a.onClick && 'function' == typeof r.onClick && (e.onclick = Qs);
            }
            for (s in (ho(n, r), (n = null), a))
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
                            (ni.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
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
                                (ni.hasOwnProperty(s)
                                    ? (null != u && 'onScroll' === s && Rs('scroll', e), o || l === u || (o = []))
                                    : (o = o || []).push(s, u));
            }
            n && (o = o || []).push('style', n);
            var s = o;
            (t.updateQueue = s) && (t.flags |= 4);
        }
    }),
    (Ap = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
    }));
var Wp = !1,
    Hp = !1,
    Kp = 'function' == typeof WeakSet ? WeakSet : Set,
    qp = null;
function Qp(e, t) {
    var n = e.ref;
    if (null !== n)
        if ('function' == typeof n)
            try {
                n(null);
            } catch (r) {
                bv(e, t, r);
            }
        else n.current = null;
}
function Gp(e, t, n) {
    try {
        n();
    } catch (r) {
        bv(e, t, r);
    }
}
var Yp = !1;
function Xp(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var a = (r = r.next);
        do {
            if ((a.tag & e) === e) {
                var i = a.destroy;
                ((a.destroy = void 0), void 0 !== i && Gp(t, n, i));
            }
            a = a.next;
        } while (a !== r);
    }
}
function Zp(e, t) {
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
function Jp(e) {
    var t = e.ref;
    if (null !== t) {
        var n = e.stateNode;
        (e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e));
    }
}
function eh(e) {
    var t = e.alternate;
    (null !== t && ((e.alternate = null), eh(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[lc], delete t[uc], delete t[cc], delete t[fc], delete t[dc]),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
}
function th(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function nh(e) {
    e: for (;;) {
        for (; null === e.sibling; ) {
            if (null === e.return || th(e.return)) return null;
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
function rh(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
        ((e = e.stateNode),
            t
                ? 8 === n.nodeType
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Qs)));
    else if (4 !== r && null !== (e = e.child))
        for (rh(e, t, n), e = e.sibling; null !== e; ) (rh(e, t, n), (e = e.sibling));
}
function ah(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (4 !== r && null !== (e = e.child))
        for (ah(e, t, n), e = e.sibling; null !== e; ) (ah(e, t, n), (e = e.sibling));
}
var ih = null,
    oh = !1;
function lh(e, t, n) {
    for (n = n.child; null !== n; ) (uh(e, t, n), (n = n.sibling));
}
function uh(e, t, n) {
    if (tl && 'function' == typeof tl.onCommitFiberUnmount)
        try {
            tl.onCommitFiberUnmount(el, n);
        } catch (l) {}
    switch (n.tag) {
        case 5:
            Hp || Qp(n, t);
        case 6:
            var r = ih,
                a = oh;
            ((ih = null),
                lh(e, t, n),
                (oh = a),
                null !== (ih = r) &&
                    (oh
                        ? ((e = ih),
                          (n = n.stateNode),
                          8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : ih.removeChild(n.stateNode)));
            break;
        case 18:
            null !== ih &&
                (oh
                    ? ((e = ih),
                      (n = n.stateNode),
                      8 === e.nodeType ? rc(e.parentNode, n) : 1 === e.nodeType && rc(e, n),
                      Ml(e))
                    : rc(ih, n.stateNode));
            break;
        case 4:
            ((r = ih), (a = oh), (ih = n.stateNode.containerInfo), (oh = !0), lh(e, t, n), (ih = r), (oh = a));
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Hp && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                a = r = r.next;
                do {
                    var i = a,
                        o = i.destroy;
                    ((i = i.tag), void 0 !== o && (0 != (2 & i) || 0 != (4 & i)) && Gp(n, t, o), (a = a.next));
                } while (a !== r);
            }
            lh(e, t, n);
            break;
        case 1:
            if (!Hp && (Qp(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount))
                try {
                    ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
                } catch (l) {
                    bv(n, t, l);
                }
            lh(e, t, n);
            break;
        case 21:
            lh(e, t, n);
            break;
        case 22:
            1 & n.mode ? ((Hp = (r = Hp) || null !== n.memoizedState), lh(e, t, n), (Hp = r)) : lh(e, t, n);
            break;
        default:
            lh(e, t, n);
    }
}
function sh(e) {
    var t = e.updateQueue;
    if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        (null === n && (n = e.stateNode = new Kp()),
            t.forEach(function (t) {
                var r = Sv.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
            }));
    }
}
function ch(e, t) {
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
                            ((ih = l.stateNode), (oh = !1));
                            break e;
                        case 3:
                        case 4:
                            ((ih = l.stateNode.containerInfo), (oh = !0));
                            break e;
                    }
                    l = l.return;
                }
                if (null === ih) throw Error(ei(160));
                (uh(i, o, a), (ih = null), (oh = !1));
                var u = a.alternate;
                (null !== u && (u.return = null), (a.return = null));
            } catch (s) {
                bv(a, t, s);
            }
        }
    if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) (fh(t, e), (t = t.sibling));
}
function fh(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((ch(t, e), dh(e), 4 & r)) {
                try {
                    (Xp(3, e, e.return), Zp(3, e));
                } catch (v) {
                    bv(e, e.return, v);
                }
                try {
                    Xp(5, e, e.return);
                } catch (v) {
                    bv(e, e.return, v);
                }
            }
            break;
        case 1:
            (ch(t, e), dh(e), 512 & r && null !== n && Qp(n, n.return));
            break;
        case 5:
            if ((ch(t, e), dh(e), 512 & r && null !== n && Qp(n, n.return), 32 & e.flags)) {
                var a = e.stateNode;
                try {
                    lo(a, '');
                } catch (v) {
                    bv(e, e.return, v);
                }
            }
            if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                    o = null !== n ? n.memoizedProps : i,
                    l = e.type,
                    u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                    try {
                        ('input' === l && 'radio' === i.type && null != i.name && Ki(a, i), vo(l, o));
                        var s = vo(l, i);
                        for (o = 0; o < u.length; o += 2) {
                            var c = u[o],
                                f = u[o + 1];
                            'style' === c
                                ? fo(a, f)
                                : 'dangerouslySetInnerHTML' === c
                                  ? oo(a, f)
                                  : 'children' === c
                                    ? lo(a, f)
                                    : hi(a, c, f, s);
                        }
                        switch (l) {
                            case 'input':
                                qi(a, i);
                                break;
                            case 'textarea':
                                eo(a, i);
                                break;
                            case 'select':
                                var d = a._wrapperState.wasMultiple;
                                a._wrapperState.wasMultiple = !!i.multiple;
                                var p = i.value;
                                null != p
                                    ? Xi(a, !!i.multiple, p, !1)
                                    : d !== !!i.multiple &&
                                      (null != i.defaultValue
                                          ? Xi(a, !!i.multiple, i.defaultValue, !0)
                                          : Xi(a, !!i.multiple, i.multiple ? [] : '', !1));
                        }
                        a[uc] = i;
                    } catch (v) {
                        bv(e, e.return, v);
                    }
            }
            break;
        case 6:
            if ((ch(t, e), dh(e), 4 & r)) {
                if (null === e.stateNode) throw Error(ei(162));
                ((a = e.stateNode), (i = e.memoizedProps));
                try {
                    a.nodeValue = i;
                } catch (v) {
                    bv(e, e.return, v);
                }
            }
            break;
        case 3:
            if ((ch(t, e), dh(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                    Ml(t.containerInfo);
                } catch (v) {
                    bv(e, e.return, v);
                }
            break;
        case 4:
        default:
            (ch(t, e), dh(e));
            break;
        case 13:
            (ch(t, e),
                dh(e),
                8192 & (a = e.child).flags &&
                    ((i = null !== a.memoizedState),
                    (a.stateNode.isHidden = i),
                    !i || (null !== a.alternate && null !== a.alternate.memoizedState) || (Ih = qo())),
                4 & r && sh(e));
            break;
        case 22:
            if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Hp = (s = Hp) || c), ch(t, e), (Hp = s)) : ch(t, e),
                dh(e),
                8192 & r)
            ) {
                if (((s = null !== e.memoizedState), (e.stateNode.isHidden = s) && !c && 0 != (1 & e.mode)))
                    for (qp = e, c = e.child; null !== c; ) {
                        for (f = qp = c; null !== qp; ) {
                            switch (((p = (d = qp).child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Xp(4, d, d.return);
                                    break;
                                case 1:
                                    Qp(d, d.return);
                                    var h = d.stateNode;
                                    if ('function' == typeof h.componentWillUnmount) {
                                        ((r = d), (n = d.return));
                                        try {
                                            ((t = r),
                                                (h.props = t.memoizedProps),
                                                (h.state = t.memoizedState),
                                                h.componentWillUnmount());
                                        } catch (v) {
                                            bv(r, n, v);
                                        }
                                    }
                                    break;
                                case 5:
                                    Qp(d, d.return);
                                    break;
                                case 22:
                                    if (null !== d.memoizedState) {
                                        mh(f);
                                        continue;
                                    }
                            }
                            null !== p ? ((p.return = d), (qp = p)) : mh(f);
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
                                          (l.style.display = co('display', o))));
                            } catch (v) {
                                bv(e, e.return, v);
                            }
                        }
                    } else if (6 === f.tag) {
                        if (null === c)
                            try {
                                f.stateNode.nodeValue = s ? '' : f.memoizedProps;
                            } catch (v) {
                                bv(e, e.return, v);
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
            (ch(t, e), dh(e), 4 & r && sh(e));
        case 21:
    }
}
function dh(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e: {
                for (var n = e.return; null !== n; ) {
                    if (th(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(ei(160));
            }
            switch (r.tag) {
                case 5:
                    var a = r.stateNode;
                    (32 & r.flags && (lo(a, ''), (r.flags &= -33)), ah(e, nh(e), a));
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo;
                    rh(e, nh(e), i);
                    break;
                default:
                    throw Error(ei(161));
            }
        } catch (o) {
            bv(e, e.return, o);
        }
        e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
}
function ph(e, t, n) {
    ((qp = e), hh(e));
}
function hh(e, t, n) {
    for (var r = 0 != (1 & e.mode); null !== qp; ) {
        var a = qp,
            i = a.child;
        if (22 === a.tag && r) {
            var o = null !== a.memoizedState || Wp;
            if (!o) {
                var l = a.alternate,
                    u = (null !== l && null !== l.memoizedState) || Hp;
                l = Wp;
                var s = Hp;
                if (((Wp = o), (Hp = u) && !s))
                    for (qp = a; null !== qp; )
                        ((u = (o = qp).child),
                            22 === o.tag && null !== o.memoizedState
                                ? gh(a)
                                : null !== u
                                  ? ((u.return = o), (qp = u))
                                  : gh(a));
                for (; null !== i; ) ((qp = i), hh(i), (i = i.sibling));
                ((qp = a), (Wp = l), (Hp = s));
            }
            vh(e);
        } else 0 != (8772 & a.subtreeFlags) && null !== i ? ((i.return = a), (qp = i)) : vh(e);
    }
}
function vh(e) {
    for (; null !== qp; ) {
        var t = qp;
        if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
                if (0 != (8772 & t.flags))
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Hp || Zp(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (4 & t.flags && !Hp)
                                if (null === n) r.componentDidMount();
                                else {
                                    var a = t.elementType === t.type ? n.memoizedProps : Xd(t.type, n.memoizedProps);
                                    r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var i = t.updateQueue;
                            null !== i && Vf(t, i, r);
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
                                Vf(t, o, n);
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
                                        null !== f && Ml(f);
                                    }
                                }
                            }
                            break;
                        default:
                            throw Error(ei(163));
                    }
                Hp || (512 & t.flags && Jp(t));
            } catch (d) {
                bv(t, t.return, d);
            }
        }
        if (t === e) {
            qp = null;
            break;
        }
        if (null !== (n = t.sibling)) {
            ((n.return = t.return), (qp = n));
            break;
        }
        qp = t.return;
    }
}
function mh(e) {
    for (; null !== qp; ) {
        var t = qp;
        if (t === e) {
            qp = null;
            break;
        }
        var n = t.sibling;
        if (null !== n) {
            ((n.return = t.return), (qp = n));
            break;
        }
        qp = t.return;
    }
}
function gh(e) {
    for (; null !== qp; ) {
        var t = qp;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Zp(4, t);
                    } catch (u) {
                        bv(t, n, u);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if ('function' == typeof r.componentDidMount) {
                        var a = t.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            bv(t, a, u);
                        }
                    }
                    var i = t.return;
                    try {
                        Jp(t);
                    } catch (u) {
                        bv(t, i, u);
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Jp(t);
                    } catch (u) {
                        bv(t, o, u);
                    }
            }
        } catch (u) {
            bv(t, t.return, u);
        }
        if (t === e) {
            qp = null;
            break;
        }
        var l = t.sibling;
        if (null !== l) {
            ((l.return = t.return), (qp = l));
            break;
        }
        qp = t.return;
    }
}
var yh,
    bh = Math.ceil,
    _h = vi.ReactCurrentDispatcher,
    wh = vi.ReactCurrentOwner,
    kh = vi.ReactCurrentBatchConfig,
    Sh = 0,
    xh = null,
    Oh = null,
    Eh = 0,
    Ph = 0,
    Ch = bc(0),
    Ah = 0,
    Nh = null,
    Th = 0,
    jh = 0,
    Lh = 0,
    Rh = null,
    zh = null,
    Ih = 0,
    Dh = 1 / 0,
    Mh = null,
    Vh = !1,
    Fh = null,
    Uh = null,
    Bh = !1,
    $h = null,
    Wh = 0,
    Hh = 0,
    Kh = null,
    qh = -1,
    Qh = 0;
function Gh() {
    return 0 != (6 & Sh) ? qo() : -1 !== qh ? qh : (qh = qo());
}
function Yh(e) {
    return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & Sh) && 0 !== Eh
          ? Eh & -Eh
          : null !== ff.transition
            ? (0 === Qh && (Qh = fl()), Qh)
            : 0 !== (e = vl)
              ? e
              : (e = void 0 === (e = window.event) ? 16 : Kl(e.type));
}
function Xh(e, t, n, r) {
    if (50 < Hh) throw ((Hh = 0), (Kh = null), Error(ei(185)));
    (pl(e, n, r),
        (0 != (2 & Sh) && e === xh) ||
            (e === xh && (0 == (2 & Sh) && (jh |= n), 4 === Ah && nv(e, Eh)),
            Zh(e, r),
            1 === n && 0 === Sh && 0 == (1 & t.mode) && ((Dh = qo() + 500), Rc && Dc())));
}
function Zh(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
            var o = 31 - nl(i),
                l = 1 << o,
                u = a[o];
            (-1 === u ? (0 != (l & n) && 0 == (l & r)) || (a[o] = sl(l, t)) : u <= t && (e.expiredLanes |= l),
                (i &= ~l));
        }
    })(e, t);
    var r = ul(e, e === xh ? Eh : 0);
    if (0 === r) (null !== n && Wo(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && Wo(n), 1 === t))
            (0 === e.tag
                ? (function (e) {
                      ((Rc = !0), Ic(e));
                  })(rv.bind(null, e))
                : Ic(rv.bind(null, e)),
                tc(function () {
                    0 == (6 & Sh) && Dc();
                }),
                (n = null));
        else {
            switch (ml(r)) {
                case 1:
                    n = Go;
                    break;
                case 4:
                    n = Yo;
                    break;
                case 16:
                default:
                    n = Xo;
                    break;
                case 536870912:
                    n = Jo;
            }
            n = xv(n, Jh.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = n));
    }
}
function Jh(e, t) {
    if (((qh = -1), (Qh = 0), 0 != (6 & Sh))) throw Error(ei(327));
    var n = e.callbackNode;
    if (gv() && e.callbackNode !== n) return null;
    var r = ul(e, e === xh ? Eh : 0);
    if (0 === r) return null;
    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = fv(e, r);
    else {
        t = r;
        var a = Sh;
        Sh |= 2;
        var i = sv();
        for ((xh === e && Eh === t) || ((Mh = null), (Dh = qo() + 500), lv(e, t)); ; )
            try {
                pv();
                break;
            } catch (l) {
                uv(e, l);
            }
        (kf(), (_h.current = i), (Sh = a), null !== Oh ? (t = 0) : ((xh = null), (Eh = 0), (t = Ah)));
    }
    if (0 !== t) {
        if ((2 === t && 0 !== (a = cl(e)) && ((r = a), (t = ev(e, a))), 1 === t))
            throw ((n = Nh), lv(e, 0), nv(e, r), Zh(e, qo()), n);
        if (6 === t) nv(e, r);
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
                                            if (!ns(i(), a)) return !1;
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
                    (2 === (t = fv(e, r)) && 0 !== (i = cl(e)) && ((r = i), (t = ev(e, i))), 1 === t))
            )
                throw ((n = Nh), lv(e, 0), nv(e, r), Zh(e, qo()), n);
            switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(ei(345));
                case 2:
                case 5:
                    mv(e, zh, Mh);
                    break;
                case 3:
                    if ((nv(e, r), (130023424 & r) === r && 10 < (t = Ih + 500 - qo()))) {
                        if (0 !== ul(e, 0)) break;
                        if (((a = e.suspendedLanes) & r) !== r) {
                            (Gh(), (e.pingedLanes |= e.suspendedLanes & a));
                            break;
                        }
                        e.timeoutHandle = Zs(mv.bind(null, e, zh, Mh), t);
                        break;
                    }
                    mv(e, zh, Mh);
                    break;
                case 4:
                    if ((nv(e, r), (4194240 & r) === r)) break;
                    for (t = e.eventTimes, a = -1; 0 < r; ) {
                        var o = 31 - nl(r);
                        ((i = 1 << o), (o = t[o]) > a && (a = o), (r &= ~i));
                    }
                    if (
                        ((r = a),
                        10 <
                            (r =
                                (120 > (r = qo() - r)
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
                                              : 1960 * bh(r / 1960)) - r))
                    ) {
                        e.timeoutHandle = Zs(mv.bind(null, e, zh, Mh), r);
                        break;
                    }
                    mv(e, zh, Mh);
                    break;
                default:
                    throw Error(ei(329));
            }
        }
    }
    return (Zh(e, qo()), e.callbackNode === n ? Jh.bind(null, e) : null);
}
function ev(e, t) {
    var n = Rh;
    return (
        e.current.memoizedState.isDehydrated && (lv(e, t).flags |= 256),
        2 !== (e = fv(e, t)) && ((t = zh), (zh = n), null !== t && tv(t)),
        e
    );
}
function tv(e) {
    null === zh ? (zh = e) : zh.push.apply(zh, e);
}
function nv(e, t) {
    for (t &= ~Lh, t &= ~jh, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - nl(t),
            r = 1 << n;
        ((e[n] = -1), (t &= ~r));
    }
}
function rv(e) {
    if (0 != (6 & Sh)) throw Error(ei(327));
    gv();
    var t = ul(e, 0);
    if (0 == (1 & t)) return (Zh(e, qo()), null);
    var n = fv(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = cl(e);
        0 !== r && ((t = r), (n = ev(e, r)));
    }
    if (1 === n) throw ((n = Nh), lv(e, 0), nv(e, t), Zh(e, qo()), n);
    if (6 === n) throw Error(ei(345));
    return ((e.finishedWork = e.current.alternate), (e.finishedLanes = t), mv(e, zh, Mh), Zh(e, qo()), null);
}
function av(e, t) {
    var n = Sh;
    Sh |= 1;
    try {
        return e(t);
    } finally {
        0 === (Sh = n) && ((Dh = qo() + 500), Rc && Dc());
    }
}
function iv(e) {
    null !== $h && 0 === $h.tag && 0 == (6 & Sh) && gv();
    var t = Sh;
    Sh |= 1;
    var n = kh.transition,
        r = vl;
    try {
        if (((kh.transition = null), (vl = 1), e)) return e();
    } finally {
        ((vl = r), (kh.transition = n), 0 == (6 & (Sh = t)) && Dc());
    }
}
function ov() {
    ((Ph = Ch.current), _c(Ch));
}
function lv(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), Js(n)), null !== Oh))
        for (n = Oh.return; null !== n; ) {
            var r = n;
            switch ((Yc(r), r.tag)) {
                case 1:
                    null != (r = r.type.childContextTypes) && Cc();
                    break;
                case 3:
                    (Kf(), _c(xc), _c(Sc), Zf());
                    break;
                case 5:
                    Qf(r);
                    break;
                case 4:
                    Kf();
                    break;
                case 13:
                case 19:
                    _c(Gf);
                    break;
                case 10:
                    Sf(r.type._context);
                    break;
                case 22:
                case 23:
                    ov();
            }
            n = n.return;
        }
    if (
        ((xh = e),
        (Oh = e = Cv(e.current, null)),
        (Eh = Ph = t),
        (Ah = 0),
        (Nh = null),
        (Lh = jh = Th = 0),
        (zh = Rh = null),
        null !== Pf)
    ) {
        for (t = 0; t < Pf.length; t++)
            if (null !== (r = (n = Pf[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                    i = n.pending;
                if (null !== i) {
                    var o = i.next;
                    ((i.next = a), (r.next = o));
                }
                n.pending = r;
            }
        Pf = null;
    }
    return e;
}
function uv(e, t) {
    for (;;) {
        var n = Oh;
        try {
            if ((kf(), (Jf.current = qd), id)) {
                for (var r = nd.memoizedState; null !== r; ) {
                    var a = r.queue;
                    (null !== a && (a.pending = null), (r = r.next));
                }
                id = !1;
            }
            if (
                ((td = 0),
                (ad = rd = nd = null),
                (od = !1),
                (ld = 0),
                (wh.current = null),
                null === n || null === n.return)
            ) {
                ((Ah = 1), (Nh = t), (Oh = null));
                break;
            }
            e: {
                var i = e,
                    o = n.return,
                    l = n,
                    u = t;
                if (((t = Eh), (l.flags |= 32768), null !== u && 'object' == typeof u && 'function' == typeof u.then)) {
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
                    var p = fp(o);
                    if (null !== p) {
                        ((p.flags &= -257), dp(p, o, l, 0, t), 1 & p.mode && cp(i, s, t), (u = s));
                        var h = (t = p).updateQueue;
                        if (null === h) {
                            var v = new Set();
                            (v.add(u), (t.updateQueue = v));
                        } else h.add(u);
                        break e;
                    }
                    if (0 == (1 & t)) {
                        (cp(i, s, t), cv());
                        break e;
                    }
                    u = Error(ei(426));
                } else if (Jc && 1 & l.mode) {
                    var m = fp(o);
                    if (null !== m) {
                        (0 == (65536 & m.flags) && (m.flags |= 256), dp(m, o, l, 0, t), cf(ap(u, l)));
                        break e;
                    }
                }
                ((i = u = ap(u, l)), 4 !== Ah && (Ah = 2), null === Rh ? (Rh = [i]) : Rh.push(i), (i = o));
                do {
                    switch (i.tag) {
                        case 3:
                            ((i.flags |= 65536), (t &= -t), (i.lanes |= t), Df(i, up(0, u, t)));
                            break e;
                        case 1:
                            l = u;
                            var g = i.type,
                                y = i.stateNode;
                            if (
                                0 == (128 & i.flags) &&
                                ('function' == typeof g.getDerivedStateFromError ||
                                    (null !== y &&
                                        'function' == typeof y.componentDidCatch &&
                                        (null === Uh || !Uh.has(y))))
                            ) {
                                ((i.flags |= 65536), (t &= -t), (i.lanes |= t), Df(i, sp(i, l, t)));
                                break e;
                            }
                    }
                    i = i.return;
                } while (null !== i);
            }
            vv(n);
        } catch (b) {
            ((t = b), Oh === n && null !== n && (Oh = n = n.return));
            continue;
        }
        break;
    }
}
function sv() {
    var e = _h.current;
    return ((_h.current = qd), null === e ? qd : e);
}
function cv() {
    ((0 !== Ah && 3 !== Ah && 2 !== Ah) || (Ah = 4),
        null === xh || (0 == (268435455 & Th) && 0 == (268435455 & jh)) || nv(xh, Eh));
}
function fv(e, t) {
    var n = Sh;
    Sh |= 2;
    var r = sv();
    for ((xh === e && Eh === t) || ((Mh = null), lv(e, t)); ; )
        try {
            dv();
            break;
        } catch (a) {
            uv(e, a);
        }
    if ((kf(), (Sh = n), (_h.current = r), null !== Oh)) throw Error(ei(261));
    return ((xh = null), (Eh = 0), Ah);
}
function dv() {
    for (; null !== Oh; ) hv(Oh);
}
function pv() {
    for (; null !== Oh && !Ho(); ) hv(Oh);
}
function hv(e) {
    var t = yh(e.alternate, e, Ph);
    ((e.memoizedProps = e.pendingProps), null === t ? vv(e) : (Oh = t), (wh.current = null));
}
function vv(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), 0 == (32768 & t.flags))) {
            if (null !== (n = Bp(n, t, Ph))) return void (Oh = n);
        } else {
            if (null !== (n = $p(n, t))) return ((n.flags &= 32767), void (Oh = n));
            if (null === e) return ((Ah = 6), void (Oh = null));
            ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        }
        if (null !== (t = t.sibling)) return void (Oh = t);
        Oh = t = e;
    } while (null !== t);
    0 === Ah && (Ah = 5);
}
function mv(e, t, n) {
    var r = vl,
        a = kh.transition;
    try {
        ((kh.transition = null),
            (vl = 1),
            (function (e, t, n, r) {
                do {
                    gv();
                } while (null !== $h);
                if (0 != (6 & Sh)) throw Error(ei(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(ei(177));
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
                            var a = 31 - nl(n),
                                i = 1 << a;
                            ((t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i));
                        }
                    })(e, i),
                    e === xh && ((Oh = xh = null), (Eh = 0)),
                    (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                        Bh ||
                        ((Bh = !0),
                        xv(Xo, function () {
                            return (gv(), null);
                        })),
                    (i = 0 != (15990 & n.flags)),
                    0 != (15990 & n.subtreeFlags) || i)
                ) {
                    ((i = kh.transition), (kh.transition = null));
                    var o = vl;
                    vl = 1;
                    var l = Sh;
                    ((Sh |= 4),
                        (wh.current = null),
                        (function (e, t) {
                            if (((Gs = Fl), us((e = ls())))) {
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
                            for (Ys = { focusedElem: e, selectionRange: n }, Fl = !1, qp = t; null !== qp; )
                                if (((e = (t = qp).child), 0 != (1028 & t.subtreeFlags) && null !== e))
                                    ((e.return = t), (qp = e));
                                else
                                    for (; null !== qp; ) {
                                        t = qp;
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
                                                                    t.elementType === t.type ? v : Xd(t.type, v),
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
                                                        throw Error(ei(163));
                                                }
                                        } catch (_) {
                                            bv(t, t.return, _);
                                        }
                                        if (null !== (e = t.sibling)) {
                                            ((e.return = t.return), (qp = e));
                                            break;
                                        }
                                        qp = t.return;
                                    }
                            ((h = Yp), (Yp = !1));
                        })(e, n),
                        fh(n, e),
                        ss(Ys),
                        (Fl = !!Gs),
                        (Ys = Gs = null),
                        (e.current = n),
                        ph(n),
                        Ko(),
                        (Sh = l),
                        (vl = o),
                        (kh.transition = i));
                } else e.current = n;
                if (
                    (Bh && ((Bh = !1), ($h = e), (Wh = a)),
                    (i = e.pendingLanes),
                    0 === i && (Uh = null),
                    (function (e) {
                        if (tl && 'function' == typeof tl.onCommitFiberRoot)
                            try {
                                tl.onCommitFiberRoot(el, e, void 0, 128 == (128 & e.current.flags));
                            } catch (t) {}
                    })(n.stateNode),
                    Zh(e, qo()),
                    null !== t)
                )
                    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                        ((a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest }));
                if (Vh) throw ((Vh = !1), (e = Fh), (Fh = null), e);
                (0 != (1 & Wh) && 0 !== e.tag && gv(),
                    (i = e.pendingLanes),
                    0 != (1 & i) ? (e === Kh ? Hh++ : ((Hh = 0), (Kh = e))) : (Hh = 0),
                    Dc());
            })(e, t, n, r));
    } finally {
        ((kh.transition = a), (vl = r));
    }
    return null;
}
function gv() {
    if (null !== $h) {
        var e = ml(Wh),
            t = kh.transition,
            n = vl;
        try {
            if (((kh.transition = null), (vl = 16 > e ? 16 : e), null === $h)) var r = !1;
            else {
                if (((e = $h), ($h = null), (Wh = 0), 0 != (6 & Sh))) throw Error(ei(331));
                var a = Sh;
                for (Sh |= 4, qp = e.current; null !== qp; ) {
                    var i = qp,
                        o = i.child;
                    if (0 != (16 & qp.flags)) {
                        var l = i.deletions;
                        if (null !== l) {
                            for (var u = 0; u < l.length; u++) {
                                var s = l[u];
                                for (qp = s; null !== qp; ) {
                                    var c = qp;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Xp(8, c, i);
                                    }
                                    var f = c.child;
                                    if (null !== f) ((f.return = c), (qp = f));
                                    else
                                        for (; null !== qp; ) {
                                            var d = (c = qp).sibling,
                                                p = c.return;
                                            if ((eh(c), c === s)) {
                                                qp = null;
                                                break;
                                            }
                                            if (null !== d) {
                                                ((d.return = p), (qp = d));
                                                break;
                                            }
                                            qp = p;
                                        }
                                }
                            }
                            var h = i.alternate;
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
                            qp = i;
                        }
                    }
                    if (0 != (2064 & i.subtreeFlags) && null !== o) ((o.return = i), (qp = o));
                    else
                        e: for (; null !== qp; ) {
                            if (0 != (2048 & (i = qp).flags))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Xp(9, i, i.return);
                                }
                            var g = i.sibling;
                            if (null !== g) {
                                ((g.return = i.return), (qp = g));
                                break e;
                            }
                            qp = i.return;
                        }
                }
                var y = e.current;
                for (qp = y; null !== qp; ) {
                    var b = (o = qp).child;
                    if (0 != (2064 & o.subtreeFlags) && null !== b) ((b.return = o), (qp = b));
                    else
                        e: for (o = y; null !== qp; ) {
                            if (0 != (2048 & (l = qp).flags))
                                try {
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Zp(9, l);
                                    }
                                } catch (w) {
                                    bv(l, l.return, w);
                                }
                            if (l === o) {
                                qp = null;
                                break e;
                            }
                            var _ = l.sibling;
                            if (null !== _) {
                                ((_.return = l.return), (qp = _));
                                break e;
                            }
                            qp = l.return;
                        }
                }
                if (((Sh = a), Dc(), tl && 'function' == typeof tl.onPostCommitFiberRoot))
                    try {
                        tl.onPostCommitFiberRoot(el, e);
                    } catch (w) {}
                r = !0;
            }
            return r;
        } finally {
            ((vl = n), (kh.transition = t));
        }
    }
    return !1;
}
function yv(e, t, n) {
    ((e = zf(e, (t = up(0, (t = ap(n, t)), 1)), 1)), (t = Gh()), null !== e && (pl(e, 1, t), Zh(e, t)));
}
function bv(e, t, n) {
    if (3 === e.tag) yv(e, e, n);
    else
        for (; null !== t; ) {
            if (3 === t.tag) {
                yv(t, e, n);
                break;
            }
            if (1 === t.tag) {
                var r = t.stateNode;
                if (
                    'function' == typeof t.type.getDerivedStateFromError ||
                    ('function' == typeof r.componentDidCatch && (null === Uh || !Uh.has(r)))
                ) {
                    ((t = zf(t, (e = sp(t, (e = ap(n, e)), 1)), 1)), (e = Gh()), null !== t && (pl(t, 1, e), Zh(t, e)));
                    break;
                }
            }
            t = t.return;
        }
}
function _v(e, t, n) {
    var r = e.pingCache;
    (null !== r && r.delete(t),
        (t = Gh()),
        (e.pingedLanes |= e.suspendedLanes & n),
        xh === e &&
            (Eh & n) === n &&
            (4 === Ah || (3 === Ah && (130023424 & Eh) === Eh && 500 > qo() - Ih) ? lv(e, 0) : (Lh |= n)),
        Zh(e, t));
}
function wv(e, t) {
    0 === t && (0 == (1 & e.mode) ? (t = 1) : ((t = ol), 0 == (130023424 & (ol <<= 1)) && (ol = 4194304)));
    var n = Gh();
    null !== (e = Nf(e, t)) && (pl(e, t, n), Zh(e, n));
}
function kv(e) {
    var t = e.memoizedState,
        n = 0;
    (null !== t && (n = t.retryLane), wv(e, n));
}
function Sv(e, t) {
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
            throw Error(ei(314));
    }
    (null !== r && r.delete(t), wv(e, n));
}
function xv(e, t) {
    return $o(e, t);
}
function Ov(e, t, n, r) {
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
function Ev(e, t, n, r) {
    return new Ov(e, t, n, r);
}
function Pv(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
}
function Cv(e, t) {
    var n = e.alternate;
    return (
        null === n
            ? (((n = Ev(e.tag, t, e.key, e.mode)).elementType = e.elementType),
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
function Av(e, t, n, r, a, i) {
    var o = 2;
    if (((r = e), 'function' == typeof e)) Pv(e) && (o = 1);
    else if ('string' == typeof e) o = 5;
    else
        e: switch (e) {
            case yi:
                return Nv(n.children, a, i, t);
            case bi:
                ((o = 8), (a |= 8));
                break;
            case _i:
                return (((e = Ev(12, n, t, 2 | a)).elementType = _i), (e.lanes = i), e);
            case xi:
                return (((e = Ev(13, n, t, a)).elementType = xi), (e.lanes = i), e);
            case Oi:
                return (((e = Ev(19, n, t, a)).elementType = Oi), (e.lanes = i), e);
            case Ci:
                return Tv(n, a, i, t);
            default:
                if ('object' == typeof e && null !== e)
                    switch (e.$$typeof) {
                        case wi:
                            o = 10;
                            break e;
                        case ki:
                            o = 9;
                            break e;
                        case Si:
                            o = 11;
                            break e;
                        case Ei:
                            o = 14;
                            break e;
                        case Pi:
                            ((o = 16), (r = null));
                            break e;
                    }
                throw Error(ei(130, null == e ? e : typeof e, ''));
        }
    return (((t = Ev(o, n, t, a)).elementType = e), (t.type = r), (t.lanes = i), t);
}
function Nv(e, t, n, r) {
    return (((e = Ev(7, e, r, t)).lanes = n), e);
}
function Tv(e, t, n, r) {
    return (((e = Ev(22, e, r, t)).elementType = Ci), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e);
}
function jv(e, t, n) {
    return (((e = Ev(6, e, null, t)).lanes = n), e);
}
function Lv(e, t, n) {
    return (
        ((t = Ev(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
function Rv(e, t, n, r, a) {
    ((this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = dl(0)),
        (this.expirationTimes = dl(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = dl(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = a),
        (this.mutableSourceEagerHydrationData = null));
}
function zv(e, t, n, r, a, i, o, l, u) {
    return (
        (e = new Rv(e, t, n, l, u)),
        1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
        (i = Ev(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        jf(i),
        e
    );
}
function Iv(e) {
    if (!e) return kc;
    e: {
        if (Mo((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(ei(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Pc(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (null !== t);
        throw Error(ei(171));
    }
    if (1 === e.tag) {
        var n = e.type;
        if (Pc(n)) return Nc(e, n, t);
    }
    return t;
}
function Dv(e, t, n, r, a, i, o, l, u) {
    return (
        ((e = zv(n, r, !0, e, 0, i, 0, l, u)).context = Iv(null)),
        (n = e.current),
        ((i = Rf((r = Gh()), (a = Yh(n)))).callback = null != t ? t : null),
        zf(n, i, a),
        (e.current.lanes = a),
        pl(e, a, r),
        Zh(e, r),
        e
    );
}
function Mv(e, t, n, r) {
    var a = t.current,
        i = Gh(),
        o = Yh(a);
    return (
        (n = Iv(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = Rf(i, o)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = zf(a, t, o)) && (Xh(e, a, o, i), If(e, a, o)),
        o
    );
}
function Vv(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
}
function Fv(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
    }
}
function Uv(e, t) {
    (Fv(e, t), (e = e.alternate) && Fv(e, t));
}
yh = function (e, t, n) {
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps || xc.current) hp = !0;
        else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                    (hp = !1),
                    (function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                (xp(t), sf());
                                break;
                            case 5:
                                qf(t);
                                break;
                            case 1:
                                Pc(t.type) && Tc(t);
                                break;
                            case 4:
                                Hf(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context,
                                    a = t.memoizedProps.value;
                                (wc(yf, r._currentValue), (r._currentValue = a));
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState))
                                    return null !== r.dehydrated
                                        ? (wc(Gf, 1 & Gf.current), (t.flags |= 128), null)
                                        : 0 != (n & t.child.childLanes)
                                          ? jp(e, t, n)
                                          : (wc(Gf, 1 & Gf.current), null !== (e = Vp(e, t, n)) ? e.sibling : null);
                                wc(Gf, 1 & Gf.current);
                                break;
                            case 19:
                                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                    if (r) return Dp(e, t, n);
                                    t.flags |= 128;
                                }
                                if (
                                    (null !== (a = t.memoizedState) &&
                                        ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                                    wc(Gf, Gf.current),
                                    r)
                                )
                                    break;
                                return null;
                            case 22:
                            case 23:
                                return ((t.lanes = 0), bp(e, t, n));
                        }
                        return Vp(e, t, n);
                    })(e, t, n)
                );
            hp = 0 != (131072 & e.flags);
        }
    else ((hp = !1), Jc && 0 != (1048576 & t.flags) && Qc(t, Uc, t.index));
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            (Mp(e, t), (e = t.pendingProps));
            var a = Ec(t, Sc.current);
            (Of(t, n), (a = fd(null, t, r, e, a, n)));
            var i = dd();
            return (
                (t.flags |= 1),
                'object' == typeof a && null !== a && 'function' == typeof a.render && void 0 === a.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Pc(r) ? ((i = !0), Tc(t)) : (i = !1),
                      (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
                      jf(t),
                      (a.updater = Jd),
                      (t.stateNode = a),
                      (a._reactInternals = t),
                      rp(t, r, e, n),
                      (t = Sp(null, t, r, !0, i, n)))
                    : ((t.tag = 0), Jc && i && Gc(t), vp(null, t, a, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Mp(e, t),
                    (e = t.pendingProps),
                    (r = (a = r._init)(r._payload)),
                    (t.type = r),
                    (a = t.tag =
                        (function (e) {
                            if ('function' == typeof e) return Pv(e) ? 1 : 0;
                            if (null != e) {
                                if ((e = e.$$typeof) === Si) return 11;
                                if (e === Ei) return 14;
                            }
                            return 2;
                        })(r)),
                    (e = Xd(r, e)),
                    a)
                ) {
                    case 0:
                        t = wp(null, t, r, e, n);
                        break e;
                    case 1:
                        t = kp(null, t, r, e, n);
                        break e;
                    case 11:
                        t = mp(null, t, r, e, n);
                        break e;
                    case 14:
                        t = gp(null, t, r, Xd(r.type, e), n);
                        break e;
                }
                throw Error(ei(306, r, ''));
            }
            return t;
        case 0:
            return ((r = t.type), (a = t.pendingProps), wp(e, t, r, (a = t.elementType === r ? a : Xd(r, a)), n));
        case 1:
            return ((r = t.type), (a = t.pendingProps), kp(e, t, r, (a = t.elementType === r ? a : Xd(r, a)), n));
        case 3:
            e: {
                if ((xp(t), null === e)) throw Error(ei(387));
                ((r = t.pendingProps), (a = (i = t.memoizedState).element), Lf(e, t), Mf(t, r, null, n));
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
                        t = Op(e, t, r, n, (a = ap(Error(ei(423)), t)));
                        break e;
                    }
                    if (r !== a) {
                        t = Op(e, t, r, n, (a = ap(Error(ei(424)), t)));
                        break e;
                    }
                    for (
                        Zc = ac(t.stateNode.containerInfo.firstChild),
                            Xc = t,
                            Jc = !0,
                            ef = null,
                            n = gf(t, null, r, n),
                            t.child = n;
                        n;

                    )
                        ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                    if ((sf(), r === a)) {
                        t = Vp(e, t, n);
                        break e;
                    }
                    vp(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                qf(t),
                null === e && af(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (o = a.children),
                Xs(r, a) ? (o = null) : null !== i && Xs(r, i) && (t.flags |= 32),
                _p(e, t),
                vp(e, t, o, n),
                t.child
            );
        case 6:
            return (null === e && af(t), null);
        case 13:
            return jp(e, t, n);
        case 4:
            return (
                Hf(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = mf(t, null, r, n)) : vp(e, t, r, n),
                t.child
            );
        case 11:
            return ((r = t.type), (a = t.pendingProps), mp(e, t, r, (a = t.elementType === r ? a : Xd(r, a)), n));
        case 7:
            return (vp(e, t, t.pendingProps, n), t.child);
        case 8:
        case 12:
            return (vp(e, t, t.pendingProps.children, n), t.child);
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (a = t.pendingProps),
                    (i = t.memoizedProps),
                    (o = a.value),
                    wc(yf, r._currentValue),
                    (r._currentValue = o),
                    null !== i)
                )
                    if (ns(i.value, o)) {
                        if (i.children === a.children && !xc.current) {
                            t = Vp(e, t, n);
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
                                            (u = Rf(-1, n & -n)).tag = 2;
                                            var s = i.updateQueue;
                                            if (null !== s) {
                                                var c = (s = s.shared).pending;
                                                (null === c ? (u.next = u) : ((u.next = c.next), (c.next = u)),
                                                    (s.pending = u));
                                            }
                                        }
                                        ((i.lanes |= n),
                                            null !== (u = i.alternate) && (u.lanes |= n),
                                            xf(i.return, n, t),
                                            (l.lanes |= n));
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (10 === i.tag) o = i.type === t.type ? null : i.child;
                            else if (18 === i.tag) {
                                if (null === (o = i.return)) throw Error(ei(341));
                                ((o.lanes |= n),
                                    null !== (l = o.alternate) && (l.lanes |= n),
                                    xf(o, n, t),
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
                (vp(e, t, a.children, n), (t = t.child));
            }
            return t;
        case 9:
            return (
                (a = t.type),
                (r = t.pendingProps.children),
                Of(t, n),
                (r = r((a = Ef(a)))),
                (t.flags |= 1),
                vp(e, t, r, n),
                t.child
            );
        case 14:
            return ((a = Xd((r = t.type), t.pendingProps)), gp(e, t, r, (a = Xd(r.type, a)), n));
        case 15:
            return yp(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : Xd(r, a)),
                Mp(e, t),
                (t.tag = 1),
                Pc(r) ? ((e = !0), Tc(t)) : (e = !1),
                Of(t, n),
                tp(t, r, a),
                rp(t, r, a, n),
                Sp(null, t, r, !0, e, n)
            );
        case 19:
            return Dp(e, t, n);
        case 22:
            return bp(e, t, n);
    }
    throw Error(ei(156, t.tag));
};
var Bv =
    'function' == typeof reportError
        ? reportError
        : function (e) {
              console.error(e);
          };
function $v(e) {
    this._internalRoot = e;
}
function Wv(e) {
    this._internalRoot = e;
}
function Hv(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function Kv(e) {
    return !(
        !e ||
        (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
    );
}
function qv() {}
function Qv(e, t, n, r, a) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if ('function' == typeof a) {
            var l = a;
            a = function () {
                var e = Vv(o);
                l.call(e);
            };
        }
        Mv(t, o, e, a);
    } else
        o = (function (e, t, n, r, a) {
            if (a) {
                if ('function' == typeof r) {
                    var i = r;
                    r = function () {
                        var e = Vv(o);
                        i.call(e);
                    };
                }
                var o = Dv(t, r, e, 0, null, !1, 0, '', qv);
                return (
                    (e._reactRootContainer = o),
                    (e[sc] = o.current),
                    Ds(8 === e.nodeType ? e.parentNode : e),
                    iv(),
                    o
                );
            }
            for (; (a = e.lastChild); ) e.removeChild(a);
            if ('function' == typeof r) {
                var l = r;
                r = function () {
                    var e = Vv(u);
                    l.call(e);
                };
            }
            var u = zv(e, 0, !1, null, 0, !1, 0, '', qv);
            return (
                (e._reactRootContainer = u),
                (e[sc] = u.current),
                Ds(8 === e.nodeType ? e.parentNode : e),
                iv(function () {
                    Mv(t, u, n, r);
                }),
                u
            );
        })(n, t, e, a, r);
    return Vv(o);
}
((Wv.prototype.render = $v.prototype.render =
    function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(ei(409));
        Mv(e, t, null, null);
    }),
    (Wv.prototype.unmount = $v.prototype.unmount =
        function () {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                (iv(function () {
                    Mv(null, e, null, null);
                }),
                    (t[sc] = null));
            }
        }),
    (Wv.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = _l();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < Al.length && 0 !== t && t < Al[n].priority; n++);
            (Al.splice(n, 0, e), 0 === n && Ll(e));
        }
    }),
    (gl = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = ll(t.pendingLanes);
                    0 !== n && (hl(t, 1 | n), Zh(t, qo()), 0 == (6 & Sh) && ((Dh = qo() + 500), Dc()));
                }
                break;
            case 13:
                (iv(function () {
                    var t = Nf(e, 1);
                    if (null !== t) {
                        var n = Gh();
                        Xh(t, e, 1, n);
                    }
                }),
                    Uv(e, 1));
        }
    }),
    (yl = function (e) {
        if (13 === e.tag) {
            var t = Nf(e, 134217728);
            if (null !== t) Xh(t, e, 134217728, Gh());
            Uv(e, 134217728);
        }
    }),
    (bl = function (e) {
        if (13 === e.tag) {
            var t = Yh(e),
                n = Nf(e, t);
            if (null !== n) Xh(n, e, t, Gh());
            Uv(e, t);
        }
    }),
    (_l = function () {
        return vl;
    }),
    (wl = function (e, t) {
        var n = vl;
        try {
            return ((vl = e), t());
        } finally {
            vl = n;
        }
    }),
    (yo = function (e, t, n) {
        switch (t) {
            case 'input':
                if ((qi(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                    for (n = e; n.parentNode; ) n = n.parentNode;
                    for (
                        n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var a = mc(r);
                            if (!a) throw Error(ei(90));
                            (Bi(r), qi(r, a));
                        }
                    }
                }
                break;
            case 'textarea':
                eo(e, n);
                break;
            case 'select':
                null != (t = n.value) && Xi(e, !!n.multiple, t, !1);
        }
    }),
    (xo = av),
    (Oo = iv));
var Gv = { usingClientEntryPoint: !1, Events: [hc, vc, mc, ko, So, av] },
    Yv = { findFiberByHostInstance: pc, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    Xv = {
        bundleType: Yv.bundleType,
        version: Yv.version,
        rendererPackageName: Yv.rendererPackageName,
        rendererConfig: Yv.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: vi.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return null === (e = Uo(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
            Yv.findFiberByHostInstance ||
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
    var Zv = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zv.isDisabled && Zv.supportsFiber)
        try {
            ((el = Zv.inject(Xv)), (tl = Zv));
        } catch (io) {}
}
((Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gv),
    (Qa.createPortal = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Hv(t)) throw Error(ei(200));
        return (function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: gi, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
        })(e, t, null, n);
    }),
    (Qa.createRoot = function (e, t) {
        if (!Hv(e)) throw Error(ei(299));
        var n = !1,
            r = '',
            a = Bv;
        return (
            null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
            (t = zv(e, 1, !1, null, 0, n, 0, r, a)),
            (e[sc] = t.current),
            Ds(8 === e.nodeType ? e.parentNode : e),
            new $v(t)
        );
    }),
    (Qa.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
            if ('function' == typeof e.render) throw Error(ei(188));
            throw ((e = Object.keys(e).join(',')), Error(ei(268, e)));
        }
        return (e = null === (e = Uo(t)) ? null : e.stateNode);
    }),
    (Qa.flushSync = function (e) {
        return iv(e);
    }),
    (Qa.hydrate = function (e, t, n) {
        if (!Kv(t)) throw Error(ei(200));
        return Qv(null, e, t, !0, n);
    }),
    (Qa.hydrateRoot = function (e, t, n) {
        if (!Hv(e)) throw Error(ei(405));
        var r = (null != n && n.hydratedSources) || null,
            a = !1,
            i = '',
            o = Bv;
        if (
            (null != n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
            (t = Dv(t, null, e, 1, null != n ? n : null, a, 0, i, o)),
            (e[sc] = t.current),
            Ds(e),
            r)
        )
            for (e = 0; e < r.length; e++)
                ((a = (a = (n = r[e])._getVersion)(n._source)),
                    null == t.mutableSourceEagerHydrationData
                        ? (t.mutableSourceEagerHydrationData = [n, a])
                        : t.mutableSourceEagerHydrationData.push(n, a));
        return new Wv(t);
    }),
    (Qa.render = function (e, t, n) {
        if (!Kv(t)) throw Error(ei(200));
        return Qv(null, e, t, !1, n);
    }),
    (Qa.unmountComponentAtNode = function (e) {
        if (!Kv(e)) throw Error(ei(40));
        return (
            !!e._reactRootContainer &&
            (iv(function () {
                Qv(null, null, e, !1, function () {
                    ((e._reactRootContainer = null), (e[sc] = null));
                });
            }),
            !0)
        );
    }),
    (Qa.unstable_batchedUpdates = av),
    (Qa.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!Kv(n)) throw Error(ei(200));
        if (null == e || void 0 === e._reactInternals) throw Error(ei(38));
        return Qv(e, t, n, !1, r);
    }),
    (Qa.version = '18.3.1-next-f1338f8080-20240426'),
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
    (qa.exports = Qa));
var Jv = qa.exports,
    em = Jv;
((Ka.createRoot = em.createRoot), (Ka.hydrateRoot = em.hydrateRoot));
var tm = gm(),
    nm = (e) => pm(e, tm),
    rm = gm();
nm.write = (e) => pm(e, rm);
var am = gm();
nm.onStart = (e) => pm(e, am);
var im = gm();
nm.onFrame = (e) => pm(e, im);
var om = gm();
nm.onFinish = (e) => pm(e, om);
var lm = [];
nm.setTimeout = (e, t) => {
    const n = nm.now() + t,
        r = () => {
            const e = lm.findIndex((e) => e.cancel == r);
            (~e && lm.splice(e, 1), (fm -= ~e ? 1 : 0));
        },
        a = { time: n, handler: e, cancel: r };
    return (lm.splice(um(n), 0, a), (fm += 1), hm(), a);
};
var um = (e) => ~(~lm.findIndex((t) => t.time > e) || ~lm.length);
((nm.cancel = (e) => {
    (am.delete(e), im.delete(e), om.delete(e), tm.delete(e), rm.delete(e));
}),
    (nm.sync = (e) => {
        ((dm = !0), nm.batchedUpdates(e), (dm = !1));
    }),
    (nm.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            ((t = e), nm.onStart(n));
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                (am.delete(n), (t = null));
            }),
            r
        );
    }));
var sm = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
((nm.use = (e) => (sm = e)),
    (nm.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (nm.batchedUpdates = (e) => e()),
    (nm.catch = console.error),
    (nm.frameLoop = 'always'),
    (nm.advance = () => {
        'demand' !== nm.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : mm();
    }));
var cm = -1,
    fm = 0,
    dm = !1;
function pm(e, t) {
    dm ? (t.delete(e), e(0)) : (t.add(e), hm());
}
function hm() {
    cm < 0 && ((cm = 0), 'demand' !== nm.frameLoop && sm(vm));
}
function vm() {
    ~cm && (sm(vm), nm.batchedUpdates(mm));
}
function mm() {
    const e = cm;
    cm = nm.now();
    const t = um(cm);
    (t && (ym(lm.splice(0, t), (e) => e.handler()), (fm -= t)),
        fm ? (am.flush(), tm.flush(e ? Math.min(64, cm - e) : 16.667), im.flush(), rm.flush(), om.flush()) : (cm = -1));
}
function gm() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            ((fm += t != e || e.has(n) ? 0 : 1), e.add(n));
        },
        delete: (n) => ((fm -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (fm -= t.size), ym(t, (t) => t(n) && e.add(t)), (fm += e.size), (t = e));
        },
    };
}
function ym(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            nm.catch(n);
        }
    });
}
var bm = Object.defineProperty,
    _m = {};
((e, t) => {
    for (var n in t) bm(e, n, { get: t[n], enumerable: !0 });
})(_m, {
    assign: () => Tm,
    colors: () => Cm,
    createStringInterpolator: () => xm,
    skipAnimation: () => Am,
    to: () => Om,
    willAdvance: () => Nm,
});
var wm = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
var km = (e, t) => e.forEach(t);
function Sm(e, t, n) {
    if (wm.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var xm,
    Om,
    Em = (e) => (wm.und(e) ? [] : wm.arr(e) ? e : [e]),
    Pm = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    Cm = null,
    Am = !1,
    Nm = function () {},
    Tm = (e) => {
        (e.to && (Om = e.to),
            e.now && (nm.now = e.now),
            void 0 !== e.colors && (Cm = e.colors),
            null != e.skipAnimation && (Am = e.skipAnimation),
            e.createStringInterpolator && (xm = e.createStringInterpolator),
            e.requestAnimationFrame && nm.use(e.requestAnimationFrame),
            e.batchedUpdates && (nm.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (Nm = e.willAdvance),
            e.frameLoop && (nm.frameLoop = e.frameLoop));
    },
    jm = new Set(),
    Lm = [],
    Rm = [],
    zm = 0,
    Im = {
        get idle() {
            return !jm.size && !Lm.length;
        },
        start(e) {
            zm > e.priority ? (jm.add(e), nm.onStart(Dm)) : (Mm(e), nm(Fm));
        },
        advance: Fm,
        sort(e) {
            if (zm) nm.onFrame(() => Im.sort(e));
            else {
                const t = Lm.indexOf(e);
                ~t && (Lm.splice(t, 1), Vm(e));
            }
        },
        clear() {
            ((Lm = []), jm.clear());
        },
    };
function Dm() {
    (jm.forEach(Mm), jm.clear(), nm(Fm));
}
function Mm(e) {
    Lm.includes(e) || Vm(e);
}
function Vm(e) {
    Lm.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(Lm, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function Fm(e) {
    const t = Rm;
    for (let n = 0; n < Lm.length; n++) {
        const r = Lm[n];
        ((zm = r.priority), r.idle || (Nm(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((zm = 0), ((Rm = Lm).length = 0), (Lm = t).length > 0);
}
var Um = '[-+]?\\d*\\.?\\d+',
    Bm = Um + '%';
function $m(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var Wm = new RegExp('rgb' + $m(Um, Um, Um)),
    Hm = new RegExp('rgba' + $m(Um, Um, Um, Um)),
    Km = new RegExp('hsl' + $m(Um, Bm, Bm)),
    qm = new RegExp('hsla' + $m(Um, Bm, Bm, Um)),
    Qm = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    Gm = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    Ym = /^#([0-9a-fA-F]{6})$/,
    Xm = /^#([0-9a-fA-F]{8})$/;
function Zm(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function Jm(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - r,
        i = Zm(a, r, e + 1 / 3),
        o = Zm(a, r, e),
        l = Zm(a, r, e - 1 / 3);
    return (Math.round(255 * i) << 24) | (Math.round(255 * o) << 16) | (Math.round(255 * l) << 8);
}
function eg(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function tg(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function ng(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function rg(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function ag(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = Ym.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : Cm && void 0 !== Cm[e]
                ? Cm[e]
                : (t = Wm.exec(e))
                  ? ((eg(t[1]) << 24) | (eg(t[2]) << 16) | (eg(t[3]) << 8) | 255) >>> 0
                  : (t = Hm.exec(e))
                    ? ((eg(t[1]) << 24) | (eg(t[2]) << 16) | (eg(t[3]) << 8) | ng(t[4])) >>> 0
                    : (t = Qm.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = Xm.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = Gm.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = Km.exec(e))
                            ? (255 | Jm(tg(t[1]), rg(t[2]), rg(t[3]))) >>> 0
                            : (t = qm.exec(e))
                              ? (Jm(tg(t[1]), rg(t[2]), rg(t[3])) | ng(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var ig = (e, t, n) => {
    if (wm.fun(e)) return e;
    if (wm.arr(e)) return ig({ range: e, output: t, extrapolate: n });
    if (wm.str(e.output[0])) return xm(e);
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
var og = Symbol.for('FluidValue.get'),
    lg = Symbol.for('FluidValue.observers'),
    ug = (e) => Boolean(e && e[og]),
    sg = (e) => (e && e[og] ? e[og]() : e);
function cg(e, t) {
    const n = e[lg];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
var fg = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            dg(this, e);
        }
    },
    dg = (e, t) => mg(e, og, t);
function pg(e, t) {
    if (e[og]) {
        let n = e[lg];
        (n || mg(e, lg, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function hg(e, t) {
    const n = e[lg];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[lg] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
var vg,
    mg = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    gg = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    yg = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    bg = new RegExp(`(${gg.source})(%|[a-z]+)`, 'i'),
    _g = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    wg = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    kg = (e) => {
        const [t, n] = Sg(e);
        if (!t || Pm()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && wg.test(n) ? kg(n) : n || e;
    },
    Sg = (e) => {
        const t = wg.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    xg = (e, t, n, r, a) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${a})`,
    Og = (e) => {
        vg || (vg = Cm ? new RegExp(`(${Object.keys(Cm).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => sg(e).replace(wg, kg).replace(yg, ag).replace(vg, ag)),
            n = t.map((e) => e.match(gg).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => ig({ ...e, output: t }));
        return (e) => {
            var n;
            const a = !bg.test(t[0]) && (null == (n = t.find((e) => bg.test(e))) ? void 0 : n.replace(gg, ''));
            let i = 0;
            return t[0].replace(gg, () => `${r[i++](e)}${a || ''}`).replace(_g, xg);
        };
    },
    Eg = 'react-spring: ',
    Pg = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${Eg}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    Cg = Pg(console.warn);
function Ag(e) {
    return wm.str(e) && ('#' == e[0] || /\d/.test(e) || (!Pm() && wg.test(e)) || e in (Cm || {}));
}
Pg(console.warn);
var Ng = Pm() ? V.useEffect : V.useLayoutEffect;
function Tg() {
    const e = V.useState()[1],
        t = (() => {
            const e = V.useRef(!1);
            return (
                Ng(
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
var jg = [],
    Lg = Symbol.for('Animated:node'),
    Rg = (e) => e && e[Lg],
    zg = (e, t) => {
        return ((n = e), (r = Lg), (a = t), Object.defineProperty(n, r, { value: a, writable: !0, configurable: !0 }));
        var n, r, a;
    },
    Ig = (e) => e && e[Lg] && e[Lg].getPayload(),
    Dg = class {
        constructor() {
            zg(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    Mg = class extends Dg {
        constructor(e) {
            (super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                wm.num(this._value) && (this.lastPosition = this._value));
        }
        static create(e) {
            return new Mg(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                wm.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            ((this.done = !1),
                wm.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null)));
        }
    },
    Vg = class extends Mg {
        constructor(e) {
            (super(0), (this._string = null), (this._toString = ig({ output: [e, e] })));
        }
        static create(e) {
            return new Vg(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (wm.str(e)) {
                if (e == this._string) return !1;
                ((this._string = e), (this._value = 1));
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null;
            }
            return !0;
        }
        reset(e) {
            (e && (this._toString = ig({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
        }
    },
    Fg = { dependencies: null },
    Ug = class extends Dg {
        constructor(e) {
            (super(), (this.source = e), this.setValue(e));
        }
        getValue(e) {
            const t = {};
            return (
                Sm(this.source, (n, r) => {
                    var a;
                    (a = n) && a[Lg] === a ? (t[r] = n.getValue(e)) : ug(n) ? (t[r] = sg(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            ((this.source = e), (this.payload = this._makePayload(e)));
        }
        reset() {
            this.payload && km(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return (Sm(e, this._addToPayload, t), Array.from(t));
            }
        }
        _addToPayload(e) {
            Fg.dependencies && ug(e) && Fg.dependencies.add(e);
            const t = Ig(e);
            t && km(t, (e) => this.add(e));
        }
    },
    Bg = class extends Ug {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new Bg(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map($g)), !0);
        }
    };
function $g(e) {
    return (Ag(e) ? Vg : Mg).create(e);
}
var Wg = (e, t) => {
        const n = !wm.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return V.forwardRef((r, a) => {
            const i = V.useRef(null),
                o =
                    n &&
                    V.useCallback(
                        (e) => {
                            i.current = (function (e, t) {
                                e && (wm.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(a, e);
                        },
                        [a],
                    ),
                [l, u] = (function (e, t) {
                    const n = new Set();
                    ((Fg.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                    return ((e = new Ug(e)), (Fg.dependencies = null), [e, n]);
                })(r, t),
                s = Tg(),
                c = () => {
                    const e = i.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && s();
                },
                f = new Hg(c, u),
                d = V.useRef();
            var p;
            (Ng(
                () => (
                    (d.current = f),
                    km(u, (e) => pg(e, f)),
                    () => {
                        d.current && (km(d.current.deps, (e) => hg(e, d.current)), nm.cancel(d.current.update));
                    }
                ),
            ),
                V.useEffect(c, []),
                (p = () => () => {
                    const e = d.current;
                    km(e.deps, (t) => hg(t, e));
                }),
                V.useEffect(p, jg));
            const h = t.getComponentProps(l.getValue());
            return V.createElement(e, { ...h, ref: o });
        });
    },
    Hg = class {
        constructor(e, t) {
            ((this.update = e), (this.deps = t));
        }
        eventObserved(e) {
            'change' == e.type && nm.write(this.update);
        }
    };
var Kg,
    qg,
    Qg = Symbol.for('AnimatedComponent'),
    Gg = (e) => (wm.str(e) ? e : e && wm.str(e.displayName) ? e.displayName : (wm.fun(e) && e.name) || null),
    Yg = (e) => e instanceof Zg,
    Xg = 1,
    Zg = class extends fg {
        constructor() {
            (super(...arguments), (this.id = Xg++), (this._priority = 0));
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = Rg(this);
            return e && e.getValue();
        }
        to(...e) {
            return _m.to(this, e);
        }
        interpolate(...e) {
            return (Cg(`${Eg}The "interpolate" function is deprecated in v9 (use "to" instead)`), _m.to(this, e));
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
            cg(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            (this.idle || Im.sort(this), cg(this, { type: 'priority', parent: this, priority: e }));
        }
    },
    Jg = ({ children: e, ...t }) => {
        const n = V.useContext(ey),
            r = t.pause || !!n.pause,
            a = t.immediate || !!n.immediate;
        t = (function (e, t) {
            const [n] = V.useState(() => ({ inputs: t, result: e() })),
                r = V.useRef(),
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
                V.useEffect(() => {
                    ((r.current = i), a == n && (n.inputs = n.result = void 0));
                }, [i]),
                i.result
            );
        })(() => ({ pause: r, immediate: a }), [r, a]);
        const { Provider: i } = ey;
        return V.createElement(i, { value: t }, e);
    },
    ey =
        ((Kg = Jg),
        (qg = {}),
        Object.assign(Kg, V.createContext(qg)),
        (Kg.Provider._context = Kg),
        (Kg.Consumer._context = Kg),
        Kg);
((Jg.Provider = ey.Provider), (Jg.Consumer = ey.Consumer));
var ty = class extends Zg {
    constructor(e, t) {
        (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = ig(...t)));
        const n = this._get(),
            r = (function (e) {
                const t = Rg(e);
                return t ? t.constructor : wm.arr(e) ? Bg : Ag(e) ? Vg : Mg;
            })(n);
        zg(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        ((function (e, t) {
            if (wm.arr(e)) {
                if (!wm.arr(t) || e.length !== t.length) return !1;
                for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                return !0;
            }
            return e === t;
        })(t, this.get()) || (Rg(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && ry(this._active) && ay(this));
    }
    _get() {
        const e = wm.arr(this.source) ? this.source.map(sg) : Em(sg(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !ry(this._active) &&
            ((this.idle = !1),
            km(Ig(this), (e) => {
                e.done = !1;
            }),
            _m.skipAnimation ? (nm.batchedUpdates(() => this.advance()), ay(this)) : Im.start(this));
    }
    _attach() {
        let e = 1;
        (km(Em(this.source), (t) => {
            (ug(t) && pg(t, this), Yg(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (km(Em(this.source), (e) => {
            ug(e) && hg(e, this);
        }),
            this._active.clear(),
            ay(this));
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = Em(this.source).reduce((e, t) => Math.max(e, (Yg(t) ? t.priority : 0) + 1), 0));
    }
};
function ny(e) {
    return !1 !== e.idle;
}
function ry(e) {
    return !e.size || Array.from(e).every(ny);
}
function ay(e) {
    e.idle ||
        ((e.idle = !0),
        km(Ig(e), (e) => {
            e.done = !0;
        }),
        cg(e, { type: 'idle', parent: e }));
}
_m.assign({ createStringInterpolator: Og, to: (e, t) => new ty(e, t) });
var iy = /^--/;
function oy(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || iy.test(e) || (uy.hasOwnProperty(e) && uy[e])
          ? ('' + t).trim()
          : t + 'px';
}
var ly = {};
var uy = {
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
    sy = ['Webkit', 'Ms', 'Moz', 'O'];
uy = Object.keys(uy).reduce(
    (e, t) => (sy.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    uy,
);
var cy = /^(matrix|translate|scale|rotate|skew)/,
    fy = /^(translate)/,
    dy = /^(rotate|skew)/,
    py = (e, t) => (wm.num(e) && 0 !== e ? e + t : e),
    hy = (e, t) => (wm.arr(e) ? e.every((e) => hy(e, t)) : wm.num(e) ? e === t : parseFloat(e) === t),
    vy = class extends Ug {
        constructor({ x: e, y: t, z: n, ...r }) {
            const a = [],
                i = [];
            ((e || t || n) &&
                (a.push([e || 0, t || 0, n || 0]),
                i.push((e) => [`translate3d(${e.map((e) => py(e, 'px')).join(',')})`, hy(e, 0)])),
                Sm(r, (e, t) => {
                    if ('transform' === t) (a.push([e || '']), i.push((e) => [e, '' === e]));
                    else if (cy.test(t)) {
                        if ((delete r[t], wm.und(e))) return;
                        const n = fy.test(t) ? 'px' : dy.test(t) ? 'deg' : '';
                        (a.push(Em(e)),
                            i.push(
                                'rotate3d' === t
                                    ? ([e, t, r, a]) => [`rotate3d(${e},${t},${r},${py(a, n)})`, hy(a, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => py(e, n)).join(',')})`,
                                          hy(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                a.length && (r.transform = new my(a, i)),
                super(r));
        }
    },
    my = class extends fg {
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
                km(this.inputs, (n, r) => {
                    const a = sg(n[0]),
                        [i, o] = this.transforms[r](wm.arr(a) ? a : n.map(sg));
                    ((e += ' ' + i), (t = t && o));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && km(this.inputs, (e) => km(e, (e) => ug(e) && pg(e, this)));
        }
        observerRemoved(e) {
            0 == e && km(this.inputs, (e) => km(e, (e) => ug(e) && hg(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), cg(this, e));
        }
    };
function gy(e, t) {
    (void 0 === t && (t = 'Illegal state'),
        e ||
            (function (e) {
                throw new Error('[mobx-utils] ' + e);
            })(t));
}
(_m.assign({
    batchedUpdates: Jv.unstable_batchedUpdates,
    createStringInterpolator: Og,
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
            createAnimatedStyle: n = (e) => new Ug(e),
            getComponentProps: r = (e) => e,
        } = {},
    ) => {
        const a = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
            i = (e) => {
                const t = Gg(e) || 'Anonymous';
                return (
                    ((e = wm.str(e) ? i[e] || (i[e] = Wg(e, a)) : e[Qg] || (e[Qg] = Wg(e, a))).displayName =
                        `Animated(${t})`),
                    e
                );
            };
        Sm(e, (t, n) => {
            (wm.arr(e) && (n = Gg(t)), (i[n] = i(t)));
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
                            : ly[t] || (ly[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                    );
                void 0 !== a && (e.textContent = a);
                for (const f in r)
                    if (r.hasOwnProperty(f)) {
                        const t = oy(f, r[f]);
                        iy.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                    }
                (c.forEach((t, n) => {
                    e.setAttribute(t, s[n]);
                }),
                    void 0 !== i && (e.scrollTop = i),
                    void 0 !== o && (e.scrollLeft = o),
                    void 0 !== l && e.setAttribute('viewBox', l));
            },
            createAnimatedStyle: (e) => new vy(e),
            getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
        },
    ));
var yy,
    by = function (e) {
        return e && e !== Object.prototype && Object.getOwnPropertyNames(e).concat(by(Object.getPrototypeOf(e)) || []);
    },
    _y = function (e) {
        return (function (e) {
            var t = by(e);
            return t.filter(function (e, n) {
                return t.indexOf(e) === n;
            });
        })(e).filter(function (e) {
            return 'constructor' !== e && !~e.indexOf('__');
        });
    },
    wy = 'pending',
    ky = 'fulfilled',
    Sy = 'rejected';
function xy(e) {
    switch (this.state) {
        case wy:
            return e.pending && e.pending(this.value);
        case Sy:
            return e.rejected && e.rejected(this.value);
        case ky:
            return e.fulfilled ? e.fulfilled(this.value) : this.value;
    }
}
function Oy(e, t) {
    if (
        (gy(arguments.length <= 2, 'fromPromise expects up to two arguments'),
        gy(
            'function' == typeof e || ('object' == typeof e && e && 'function' == typeof e.then),
            'Please pass a promise or function to fromPromise',
        ),
        !0 === e.isPromiseBasedObservable)
    )
        return e;
    'function' == typeof e && (e = new Promise(e));
    var n = e;
    (e.then(
        vr('observableFromPromise-resolve', function (e) {
            ((n.value = e), (n.state = ky));
        }),
        vr('observableFromPromise-reject', function (e) {
            ((n.value = e), (n.state = Sy));
        }),
    ),
        (n.isPromiseBasedObservable = !0),
        (n.case = xy));
    var r = !t || (t.state !== ky && t.state !== wy) ? void 0 : t.value;
    return (Or(n, { value: r, state: wy }, {}, { deep: !1 }), n);
}
(((yy = Oy || (Oy = {})).reject = vr('fromPromise.reject', function (e) {
    var t = yy(Promise.reject(e));
    return ((t.state = Sy), (t.value = e), t);
})),
    (yy.resolve = vr('fromPromise.resolve', function (e) {
        void 0 === e && (e = void 0);
        var t = yy(Promise.resolve(e));
        return ((t.state = ky), (t.value = e), t);
    })));
var Ey = function (e, t, n, r) {
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
            Kr(this),
            (function (e) {
                Sn(e.name, !1, e, this, void 0);
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
        Ey([dn.ref], e.prototype, 'current', void 0),
        Ey([vr.bound], e.prototype, 'next', null),
        Ey([vr.bound], e.prototype, 'complete', null),
        Ey([vr.bound], e.prototype, 'error', null));
})();
var Py = function () {
        return (
            (Py =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e;
                }),
            Py.apply(this, arguments)
        );
    },
    Cy = function (e, t, n, r) {
        var a,
            i = arguments.length,
            o = i < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
        else
            for (var l = e.length - 1; l >= 0; l--)
                (a = e[l]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, n, o) : a(t, n)) || o);
        return (i > 3 && o && Object.defineProperty(t, n, o), o);
    },
    Ay = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
!(function () {
    function e(e) {
        var t = this;
        (Object.defineProperty(this, 'model', { enumerable: !0, configurable: !0, writable: !0, value: e }),
            Object.defineProperty(this, 'localValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: dn.map({}),
            }),
            Object.defineProperty(this, 'localComputedValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: dn.map({}),
            }),
            Object.defineProperty(this, 'isPropertyDirty', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    return t.localValues.has(e);
                },
            }),
            Kr(this),
            gy(Sa(e), 'createViewModel expects an observable object'));
        var n = _y(this);
        _y(e).forEach(function (r) {
            var a;
            if (!n.includes(r) && r !== wt && '__mobxDidRunLazyInitializers' !== r) {
                if (
                    (gy(
                        -1 === Ay.indexOf(r),
                        'The propertyname ' + r + ' is reserved and cannot be used with viewModels',
                    ),
                    Rr(e, r))
                ) {
                    var i = Da(e, r),
                        o = i.derivation.bind(t),
                        l = null === (a = i.setter_) || void 0 === a ? void 0 : a.bind(t);
                    t.localComputedValues.set(r, mn(o, { set: l }));
                }
                var u = Object.getOwnPropertyDescriptor(e, r),
                    s = u ? { enumerable: u.enumerable } : {};
                Object.defineProperty(
                    t,
                    r,
                    Py(Py({}, s), {
                        configurable: !0,
                        get: function () {
                            return Rr(e, r)
                                ? t.localComputedValues.get(r).get()
                                : t.isPropertyDirty(r)
                                  ? t.localValues.get(r)
                                  : t.model[r];
                        },
                        set: vr(function (n) {
                            Rr(e, r)
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
                Sa(e)
                    ? e[wt].keys_()
                    : pa(e) || ma(e)
                      ? Array.from(e.keys())
                      : oa(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void Re(5)).forEach(function (e) {
                    var n = t.localValues.get(e),
                        r = t.model[e];
                    oa(r) ? r.replace(n) : pa(r) ? (r.clear(), r.merge(n)) : Lr(n) || (t.model[e] = n);
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
        Cy([mn], e.prototype, 'isDirty', null),
        Cy([mn], e.prototype, 'changedValues', null),
        Cy([vr.bound], e.prototype, 'submit', null),
        Cy([vr.bound], e.prototype, 'reset', null),
        Cy([vr.bound], e.prototype, 'resetProperty', null));
})();
var Ny = (function () {
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
            (s._disposeBaseObserver = Ir(s._base, function (e) {
                if ('splice' === e.type)
                    Dr(function () {
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
                    Dr(function () {
                        (s._removeItem(e.oldValue), s._addItem(e.newValue));
                    });
                }
            })),
            s
        );
    }
    (Ny(t, e),
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
                        ((n = dn([], { name: 'GroupArray[' + this._keyToName(t) + ']', deep: !1 })),
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
                        reaction: _r(
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
})(da);
export { F as R, me as a, ge as b, Ae as c, ve as d, Le as e, Ka as f, Q as j, V as r };
