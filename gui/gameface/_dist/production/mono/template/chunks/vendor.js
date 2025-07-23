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
function ve(e, t) {
    if (!pe(e)) throw new te('asFunction', 'fn', 'function', e);
    t = _e({ lifetime: ie.TRANSIENT }, t, e[he]);
    var n = Se(e);
    return ye(ge(X({ resolve: n }, t)));
}
function me(e, t) {
    if (!pe(e)) throw new te('asClass', 'Type', 'class', e);
    t = _e({ lifetime: ie.TRANSIENT }, t, e[he]);
    var n = Se(function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return Reflect.construct(e, t);
    }, e);
    return ye(ge(X(X({}, t), { resolve: n })));
}
function ge(e) {
    function t(e) {
        return ge(X(X({}, this), { lifetime: e }));
    }
    function n(e) {
        return ge(X(X({}, this), { injectionMode: e }));
    }
    return we(e, {
        setLifetime: t,
        inject: function (e) {
            return ge(X(X({}, this), { injector: e }));
        },
        transient: be(t, ie.TRANSIENT),
        scoped: be(t, ie.SCOPED),
        singleton: be(t, ie.SINGLETON),
        setInjectionMode: n,
        proxy: be(n, ae.PROXY),
        classic: be(n, ae.CLASSIC),
    });
}
function ye(e) {
    return we(e, {
        disposer: function (e) {
            return ye(X(X({}, this), { dispose: e }));
        },
    });
}
function be(e, t) {
    return function () {
        return e.call(this, t);
    };
}
function _e(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return Object.assign.apply(Object, J([{}, e], t, !1));
}
function we(e, t) {
    return X(X({}, e), t);
}
function ke(e, t) {
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
function Se(e, t) {
    t || (t = e);
    var n = xe(t);
    return function (t) {
        if ((this.injectionMode || t.options.injectionMode || ae.PROXY) !== ae.CLASSIC) {
            var r = this.injector ? ke(t, this.injector) : t.cradle;
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
function xe(e) {
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
        return 'function' == typeof n && n !== Function.prototype ? xe(n) : [];
    }
    return t;
}
var Oe = Symbol('familyTree'),
    Ee = Symbol('rollUpRegistrations'),
    Pe = 'AwilixContainerCradle';
function Ce(e) {
    return (void 0 === e && (e = {}), Ae(e));
}
function Ae(e, t, n) {
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
                    return Ae(e, l, a);
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
                        (de(e) ? me(e, t) : ve(e, t)).resolve(l)
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
            })[Ee] = f),
            Object.defineProperty(r, 'registrations', {
                get: function () {
                    return f();
                },
                enumerable: !1,
                configurable: !0,
            }),
            r),
        u = t ? [l].concat(t[Oe]) : [l];
    l[Oe] = u;
    var s,
        c = (s = u)[s.length - 1];
    return l;
    function f() {
        return X(X({}, t && t[Ee]()), i);
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
            if ('constructor' === t) return Ce;
            if (!r) {
                switch (t) {
                    case 'inspect':
                    case 'toString':
                        return p;
                    case Symbol.toStringTag:
                        return Pe;
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
var Ne,
    Te = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ((Ne = Te),
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
        Ne.exports ? ((t.default = t), (Ne.exports = t)) : (window.classNames = t);
    })());
const je = e(Te.exports);
function Le(e) {
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
var Re = {};
function ze() {
    return 'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : Re;
}
var Ie = Object.assign,
    De = Object.getOwnPropertyDescriptor,
    Me = Object.defineProperty,
    Ve = Object.prototype,
    Fe = [];
Object.freeze(Fe);
var Ue = {};
Object.freeze(Ue);
var Be = 'undefined' != typeof Proxy,
    $e = Object.toString();
function We() {
    Be || Le('Proxy not available');
}
function He(e) {
    var t = !1;
    return function () {
        if (!t) return ((t = !0), e.apply(this, arguments));
    };
}
var Ke = function () {};
function qe(e) {
    return 'function' == typeof e;
}
function Qe(e) {
    switch (typeof e) {
        case 'string':
        case 'symbol':
        case 'number':
            return !0;
    }
    return !1;
}
function Ge(e) {
    return null !== e && 'object' == typeof e;
}
function Ye(e) {
    if (!Ge(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (null == t) return !0;
    var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n.toString() === $e;
}
function Xe(e) {
    var t = null == e ? void 0 : e.constructor;
    return !!t && ('GeneratorFunction' === t.name || 'GeneratorFunction' === t.displayName);
}
function Ze(e, t, n) {
    Me(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function Je(e, t, n) {
    Me(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function et(e, t) {
    var n = 'isMobX' + e;
    return (
        (t.prototype[n] = !0),
        function (e) {
            return Ge(e) && !0 === e[n];
        }
    );
}
function tt(e) {
    return e instanceof Map;
}
function nt(e) {
    return e instanceof Set;
}
var rt = void 0 !== Object.getOwnPropertySymbols;
var at =
    'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : rt
          ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            }
          : Object.getOwnPropertyNames;
function it(e) {
    return null === e ? null : 'object' == typeof e ? '' + e : e;
}
function ot(e, t) {
    return Ve.hasOwnProperty.call(e, t);
}
var lt =
    Object.getOwnPropertyDescriptors ||
    function (e) {
        var t = {};
        return (
            at(e).forEach(function (n) {
                t[n] = De(e, n);
            }),
            t
        );
    };
function ut(e, t) {
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
function st(e, t, n) {
    return (t && ut(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function ct() {
    return (
        (ct = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        ct.apply(this, arguments)
    );
}
function ft(e, t) {
    ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), dt(e, t));
}
function dt(e, t) {
    return (dt = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return ((e.__proto__ = t), e);
          })(e, t);
}
function pt(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function ht(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function vt(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
        Array.isArray(e) ||
        (n = (function (e, t) {
            if (e) {
                if ('string' == typeof e) return ht(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? ht(e, t)
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
var mt = Symbol('mobx-stored-annotations');
function gt(e) {
    return Object.assign(function (t, n) {
        if (bt(n)) return e.decorate_20223_(t, n);
        yt(t, n, e);
    }, e);
}
function yt(e, t, n) {
    (ot(e, mt) || Ze(e, mt, ct({}, e[mt])),
        (function (e) {
            return e.annotationType_ === Pt;
        })(n) || (e[mt][t] = n));
}
function bt(e) {
    return 'object' == typeof e && 'string' == typeof e.kind;
}
var _t = Symbol('mobx administration'),
    wt = (function () {
        function e(e) {
            (void 0 === e && (e = 'Atom'),
                (this.name_ = void 0),
                (this.isPendingUnobservation_ = !1),
                (this.isBeingObserved_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Pn.NOT_TRACKING_),
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
                return Zn(this);
            }),
            (t.reportChanged = function () {
                (Yn(), Jn(this), Xn());
            }),
            (t.toString = function () {
                return this.name_;
            }),
            e
        );
    })(),
    kt = et('Atom', wt);
function St(e, t, n) {
    (void 0 === t && (t = Ke), void 0 === n && (n = Ke));
    var r,
        a = new wt(e);
    return (t !== Ke && Sr(_r, a, t, r), n !== Ke && kr(a, n), a);
}
var xt = {
    identity: function (e, t) {
        return e === t;
    },
    structural: function (e, t) {
        return Fa(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
    shallow: function (e, t) {
        return Fa(e, t, 1);
    },
};
function Ot(e, t, n) {
    return Rr(e)
        ? e
        : Array.isArray(e)
          ? fn.array(e, { name: n })
          : Ye(e)
            ? fn.object(e, void 0, { name: n })
            : tt(e)
              ? fn.map(e, { name: n })
              : nt(e)
                ? fn.set(e, { name: n })
                : 'function' != typeof e || mr(e) || Tr(e)
                  ? e
                  : Xe(e)
                    ? Ar(e)
                    : vr(n, e);
}
function Et(e) {
    return e;
}
var Pt = 'override';
function Ct(e, t) {
    return { annotationType_: e, options_: t, make_: At, extend_: Nt, decorate_20223_: Tt };
}
function At(e, t, n, r) {
    var a;
    if (null != (a = this.options_) && a.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (mr(n.value)) return 1;
    var i = jt(e, this, t, n, !1);
    return (Me(r, t, i), 2);
}
function Nt(e, t, n, r) {
    var a = jt(e, this, t, n);
    return e.defineProperty_(t, a, r);
}
function Tt(e, t) {
    var n = t.kind,
        r = t.name,
        a = t.addInitializer,
        i = this;
    if ('field' != n) {
        var o, l, u, s, c, f;
        if ('method' == n)
            return (
                mr(e) ||
                    ((l = e),
                    (e = wn(
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
        Le(
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
            yt(this, r, i);
        });
}
function jt(e, t, n, r, a) {
    var i, o, l, u, s, c, f, d;
    (void 0 === a && (a = Kn.safeDescriptors), (d = r), t.annotationType_, d.value);
    var p,
        h = r.value;
    null != (i = t.options_) && i.bound && (h = h.bind(null != (p = e.proxy_) ? p : e.target_));
    return {
        value: wn(
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
function Lt(e, t) {
    return { annotationType_: e, options_: t, make_: Rt, extend_: zt, decorate_20223_: It };
}
function Rt(e, t, n, r) {
    var a;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (
        null != (a = this.options_) &&
        a.bound &&
        (!ot(e.target_, t) || !Tr(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
    )
        return 0;
    if (Tr(n.value)) return 1;
    var i = Dt(e, this, t, n, !1, !1);
    return (Me(r, t, i), 2);
}
function zt(e, t, n, r) {
    var a,
        i = Dt(e, this, t, n, null == (a = this.options_) ? void 0 : a.bound);
    return e.defineProperty_(t, i, r);
}
function It(e, t) {
    var n,
        r = t.name,
        a = t.addInitializer;
    return (
        Tr(e) || (e = Ar(e)),
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
function Dt(e, t, n, r, a, i) {
    var o;
    (void 0 === i && (i = Kn.safeDescriptors), (o = r), t.annotationType_, o.value);
    var l,
        u = r.value;
    (Tr(u) || (u = Ar(u)), a) && ((u = u.bind(null != (l = e.proxy_) ? l : e.target_)).isMobXFlow = !0);
    return { value: u, configurable: !i || e.isPlainObject_, enumerable: !1, writable: !i };
}
function Mt(e, t) {
    return { annotationType_: e, options_: t, make_: Vt, extend_: Ft, decorate_20223_: Ut };
}
function Vt(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function Ft(e, t, n, r) {
    var a;
    return (
        (a = n),
        this.annotationType_,
        a.get,
        e.defineComputedProperty_(t, ct({}, this.options_, { get: n.get, set: n.set }), r)
    );
}
function Ut(e, t) {
    var n = this,
        r = t.name;
    return (
        (0, t.addInitializer)(function () {
            var t = ba(this)[_t],
                a = ct({}, n.options_, { get: e, context: this });
            (a.name || (a.name = 'ObservableObject.' + r.toString()), t.values_.set(r, new Tn(a)));
        }),
        function () {
            return this[_t].getObservablePropValue_(r);
        }
    );
}
function Bt(e, t) {
    return { annotationType_: e, options_: t, make_: $t, extend_: Wt, decorate_20223_: Ht };
}
function $t(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function Wt(e, t, n, r) {
    var a, i;
    return (
        this.annotationType_,
        e.defineObservableProperty_(
            t,
            n.value,
            null != (a = null == (i = this.options_) ? void 0 : i.enhancer) ? a : Ot,
            r,
        )
    );
}
function Ht(e, t) {
    var n = this,
        r = t.kind,
        a = t.name,
        i = new WeakSet();
    function o(e, t) {
        var r,
            o,
            l = ba(e)[_t],
            u = new En(
                t,
                null != (r = null == (o = n.options_) ? void 0 : o.enhancer) ? r : Ot,
                'ObservableObject.' + a.toString(),
                !1,
            );
        (l.values_.set(a, u), i.add(e));
    }
    if ('accessor' == r)
        return {
            get: function () {
                return (i.has(this) || o(this, e.get.call(this)), this[_t].getObservablePropValue_(a));
            },
            set: function (e) {
                return (i.has(this) || o(this, e), this[_t].setObservablePropValue_(a, e));
            },
            init: function (e) {
                return (i.has(this) || o(this, e), e);
            },
        };
}
var Kt = 'true',
    qt = Qt();
function Qt(e) {
    return { annotationType_: Kt, options_: e, make_: Gt, extend_: Yt, decorate_20223_: Xt };
}
function Gt(e, t, n, r) {
    var a, i, o, l;
    if (n.get) return vn.make_(e, t, n, r);
    if (n.set) {
        var u = wn(t.toString(), n.set);
        return r === e.target_
            ? null === e.defineProperty_(t, { configurable: !Kn.safeDescriptors || e.isPlainObject_, set: u })
                ? 0
                : 2
            : (Me(r, t, { configurable: !0, set: u }), 2);
    }
    if (r !== e.target_ && 'function' == typeof n.value)
        return Xe(n.value)
            ? (null != (l = this.options_) && l.autoBind ? Ar.bound : Ar).make_(e, t, n, r)
            : (null != (o = this.options_) && o.autoBind ? vr.bound : vr).make_(e, t, n, r);
    var s,
        c = !1 === (null == (a = this.options_) ? void 0 : a.deep) ? fn.ref : fn;
    'function' == typeof n.value &&
        null != (i = this.options_) &&
        i.autoBind &&
        (n.value = n.value.bind(null != (s = e.proxy_) ? s : e.target_));
    return c.make_(e, t, n, r);
}
function Yt(e, t, n, r) {
    var a, i, o;
    if (n.get) return vn.extend_(e, t, n, r);
    if (n.set)
        return e.defineProperty_(
            t,
            { configurable: !Kn.safeDescriptors || e.isPlainObject_, set: wn(t.toString(), n.set) },
            r,
        );
    'function' == typeof n.value &&
        null != (a = this.options_) &&
        a.autoBind &&
        (n.value = n.value.bind(null != (o = e.proxy_) ? o : e.target_));
    return (!1 === (null == (i = this.options_) ? void 0 : i.deep) ? fn.ref : fn).extend_(e, t, n, r);
}
function Xt(e, t) {
    Le("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Zt = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
function Jt(e) {
    return e || Zt;
}
Object.freeze(Zt);
var en = Bt('observable'),
    tn = Bt('observable.ref', { enhancer: Et }),
    nn = Bt('observable.shallow', {
        enhancer: function (e, t, n) {
            return null == e || ka(e) || ia(e) || da(e) || va(e)
                ? e
                : Array.isArray(e)
                  ? fn.array(e, { name: n, deep: !1 })
                  : Ye(e)
                    ? fn.object(e, void 0, { name: n, deep: !1 })
                    : tt(e)
                      ? fn.map(e, { name: n, deep: !1 })
                      : nt(e)
                        ? fn.set(e, { name: n, deep: !1 })
                        : void 0;
        },
    }),
    rn = Bt('observable.struct', {
        enhancer: function (e, t) {
            return Fa(e, t) ? t : e;
        },
    }),
    an = gt(en);
function on(e) {
    return !0 === e.deep
        ? Ot
        : !1 === e.deep
          ? Et
          : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
            ? n
            : Ot;
    var t, n, r;
}
function ln(e, t, n) {
    return bt(t)
        ? en.decorate_20223_(e, t)
        : Qe(t)
          ? void yt(e, t, en)
          : Rr(e)
            ? e
            : Ye(e)
              ? fn.object(e, t, n)
              : Array.isArray(e)
                ? fn.array(e, t)
                : tt(e)
                  ? fn.map(e, t)
                  : nt(e)
                    ? fn.set(e, t)
                    : 'object' == typeof e && null !== e
                      ? e
                      : fn.box(e, t);
}
Ie(ln, an);
var un,
    sn,
    cn = {
        box: function (e, t) {
            var n = Jt(t);
            return new En(e, on(n), n.name, !0, n.equals);
        },
        array: function (e, t) {
            var n = Jt(t);
            return (!1 === Kn.useProxies || !1 === n.proxy ? Ra : Yr)(e, on(n), n.name);
        },
        map: function (e, t) {
            var n = Jt(t);
            return new fa(e, on(n), n.name);
        },
        set: function (e, t) {
            var n = Jt(t);
            return new ha(e, on(n), n.name);
        },
        object: function (e, t, n) {
            return Ma(function () {
                return xr(
                    !1 === Kn.useProxies || !1 === (null == n ? void 0 : n.proxy)
                        ? ba({}, n)
                        : (function (e, t) {
                              var n, r;
                              return (
                                  We(),
                                  (e = ba(e, t)),
                                  null != (r = (n = e[_t]).proxy_) ? r : (n.proxy_ = new Proxy(e, Mr))
                              );
                          })({}, n),
                    e,
                    t,
                );
            });
        },
        ref: gt(tn),
        shallow: gt(nn),
        deep: an,
        struct: gt(rn),
    },
    fn = Ie(ln, cn),
    dn = 'computed',
    pn = Mt(dn),
    hn = Mt('computed.struct', { equals: xt.structural }),
    vn = function (e, t) {
        if (bt(t)) return pn.decorate_20223_(e, t);
        if (Qe(t)) return yt(e, t, pn);
        if (Ye(e)) return gt(Mt(dn, e));
        var n = Ye(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new Tn(n));
    };
(Object.assign(vn, pn), (vn.struct = gt(hn)));
var mn,
    gn = 0,
    yn = 1,
    bn = null != (un = null == (sn = De(function () {}, 'name')) ? void 0 : sn.configurable) && un,
    _n = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
function wn(e, t, n, r) {
    function a() {
        return kn(e, n, t, r || this, arguments);
    }
    return (
        void 0 === n && (n = !1),
        (a.isMobxAction = !0),
        (a.toString = function () {
            return t.toString();
        }),
        bn && ((_n.value = e), Me(a, 'name', _n)),
        a
    );
}
function kn(e, t, n, r, a) {
    var i = (function (e, t, n, r) {
        var a = !1,
            i = 0,
            o = Kn.trackingDerivation,
            l = !t || !o;
        Yn();
        var u = Kn.allowStateChanges;
        l && (Vn(), (u = Sn(!0)));
        var s = Un(!0),
            c = {
                runAsAction_: l,
                prevDerivation_: o,
                prevAllowStateChanges_: u,
                prevAllowStateReads_: s,
                notifySpy_: a,
                startTime_: i,
                actionId_: yn++,
                parentActionId_: gn,
            };
        return ((gn = c.actionId_), c);
    })(0, t);
    try {
        return n.apply(r, a);
    } catch (o) {
        throw ((i.error_ = o), o);
    } finally {
        !(function (e) {
            gn !== e.actionId_ && Le(30);
            ((gn = e.parentActionId_), void 0 !== e.error_ && (Kn.suppressReactionErrors = !0));
            (xn(e.prevAllowStateChanges_), Bn(e.prevAllowStateReads_), Xn(), e.runAsAction_ && Fn(e.prevDerivation_));
            Kn.suppressReactionErrors = !1;
        })(i);
    }
}
function Sn(e) {
    var t = Kn.allowStateChanges;
    return ((Kn.allowStateChanges = e), t);
}
function xn(e) {
    Kn.allowStateChanges = e;
}
mn = Symbol.toPrimitive;
var On,
    En = (function (e) {
        function t(t, n, r, a, i) {
            var o;
            return (
                void 0 === r && (r = 'ObservableValue'),
                void 0 === i && (i = xt.default),
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
        ft(t, e);
        var n = t.prototype;
        return (
            (n.dehanceValue = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
                (this.value_, (e = this.prepareNewValue_(e)) !== Kn.UNCHANGED && this.setNewValue_(e));
            }),
            (n.prepareNewValue_ = function (e) {
                if (Vr(this)) {
                    var t = Ur(this, { object: this, type: qr, newValue: e });
                    if (!t) return Kn.UNCHANGED;
                    e = t.newValue;
                }
                return (
                    (e = this.enhancer(e, this.value_, this.name_)),
                    this.equals(this.value_, e) ? Kn.UNCHANGED : e
                );
            }),
            (n.setNewValue_ = function (e) {
                var t = this.value_;
                ((this.value_ = e),
                    this.reportChanged(),
                    Br(this) && Wr(this, { type: qr, object: this, newValue: e, oldValue: t }));
            }),
            (n.get = function () {
                return (this.reportObserved(), this.dehanceValue(this.value_));
            }),
            (n.intercept_ = function (e) {
                return Fr(this, e);
            }),
            (n.observe_ = function (e, t) {
                return (
                    t &&
                        e({
                            observableKind: 'value',
                            debugObjectName: this.name_,
                            object: this,
                            type: qr,
                            newValue: this.value_,
                            oldValue: void 0,
                        }),
                    $r(this, e)
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
                return it(this.get());
            }),
            (n[mn] = function () {
                return this.valueOf();
            }),
            t
        );
    })(wt);
On = Symbol.toPrimitive;
var Pn,
    Cn,
    An,
    Nn,
    Tn = (function () {
        function e(e) {
            ((this.dependenciesState_ = Pn.NOT_TRACKING_),
                (this.observing_ = []),
                (this.newObserving_ = null),
                (this.isBeingObserved_ = !1),
                (this.isPendingUnobservation_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Pn.UP_TO_DATE_),
                (this.unboundDepsCount_ = 0),
                (this.value_ = new Ln(null)),
                (this.name_ = void 0),
                (this.triggeredBy_ = void 0),
                (this.isComputing_ = !1),
                (this.isRunningSetter_ = !1),
                (this.derivation = void 0),
                (this.setter_ = void 0),
                (this.isTracing_ = An.NONE),
                (this.scope_ = void 0),
                (this.equals_ = void 0),
                (this.requiresReaction_ = void 0),
                (this.keepAlive_ = void 0),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                e.get || Le(31),
                (this.derivation = e.get),
                (this.name_ = e.name || 'ComputedValue'),
                e.set && (this.setter_ = wn('ComputedValue-setter', e.set)),
                (this.equals_ = e.equals || (e.compareStructural || e.struct ? xt.structural : xt.default)),
                (this.scope_ = e.context),
                (this.requiresReaction_ = e.requiresReaction),
                (this.keepAlive_ = !!e.keepAlive));
        }
        var t = e.prototype;
        return (
            (t.onBecomeStale_ = function () {
                !(function (e) {
                    if (e.lowestObserverState_ !== Pn.UP_TO_DATE_) return;
                    ((e.lowestObserverState_ = Pn.POSSIBLY_STALE_),
                        e.observers_.forEach(function (e) {
                            e.dependenciesState_ === Pn.UP_TO_DATE_ &&
                                ((e.dependenciesState_ = Pn.POSSIBLY_STALE_), e.onBecomeStale_());
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
                    (this.isComputing_ && Le(32, this.name_, this.derivation),
                    0 !== Kn.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                ) {
                    if ((Zn(this), zn(this))) {
                        var e = Kn.trackingContext;
                        (this.keepAlive_ && !e && (Kn.trackingContext = this),
                            this.trackAndCompute() &&
                                (function (e) {
                                    if (e.lowestObserverState_ === Pn.STALE_) return;
                                    ((e.lowestObserverState_ = Pn.STALE_),
                                        e.observers_.forEach(function (t) {
                                            t.dependenciesState_ === Pn.POSSIBLY_STALE_
                                                ? (t.dependenciesState_ = Pn.STALE_)
                                                : t.dependenciesState_ === Pn.UP_TO_DATE_ &&
                                                  (e.lowestObserverState_ = Pn.UP_TO_DATE_);
                                        }));
                                })(this),
                            (Kn.trackingContext = e));
                    }
                } else zn(this) && (this.warnAboutUntrackedRead_(), Yn(), (this.value_ = this.computeValue_(!1)), Xn());
                var t = this.value_;
                if (Rn(t)) throw t.cause;
                return t;
            }),
            (t.set = function (e) {
                if (this.setter_) {
                    (this.isRunningSetter_ && Le(33, this.name_), (this.isRunningSetter_ = !0));
                    try {
                        this.setter_.call(this.scope_, e);
                    } finally {
                        this.isRunningSetter_ = !1;
                    }
                } else Le(34, this.name_);
            }),
            (t.trackAndCompute = function () {
                var e = this.value_,
                    t = this.dependenciesState_ === Pn.NOT_TRACKING_,
                    n = this.computeValue_(!0),
                    r = t || Rn(e) || Rn(n) || !this.equals_(e, n);
                return (r && (this.value_ = n), r);
            }),
            (t.computeValue_ = function (e) {
                this.isComputing_ = !0;
                var t,
                    n = Sn(!1);
                if (e) t = In(this, this.derivation, this.scope_);
                else if (!0 === Kn.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                else
                    try {
                        t = this.derivation.call(this.scope_);
                    } catch (r) {
                        t = new Ln(r);
                    }
                return (xn(n), (this.isComputing_ = !1), t);
            }),
            (t.suspend_ = function () {
                this.keepAlive_ || (Dn(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
                var n = this,
                    r = !0,
                    a = void 0;
                return (function (e, t) {
                    var n, r, a, i, o;
                    void 0 === t && (t = Ue);
                    var l,
                        u = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun';
                    if (t.scheduler || t.delay) {
                        var s = yr(t),
                            c = !1;
                        l = new er(
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
                        l = new er(
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
                        var o = Vn();
                        (e({
                            observableKind: 'computed',
                            debugObjectName: n.name_,
                            type: qr,
                            object: n,
                            newValue: i,
                            oldValue: a,
                        }),
                            Fn(o));
                    }
                    ((r = !1), (a = i));
                });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
                return this.name_ + '[' + this.derivation.toString() + ']';
            }),
            (t.valueOf = function () {
                return it(this.get());
            }),
            (t[On] = function () {
                return this.valueOf();
            }),
            e
        );
    })(),
    jn = et('ComputedValue', Tn);
(((Cn = Pn || (Pn = {}))[(Cn.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
    (Cn[(Cn.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
    (Cn[(Cn.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
    (Cn[(Cn.STALE_ = 2)] = 'STALE_'),
    ((Nn = An || (An = {}))[(Nn.NONE = 0)] = 'NONE'),
    (Nn[(Nn.LOG = 1)] = 'LOG'),
    (Nn[(Nn.BREAK = 2)] = 'BREAK'));
var Ln = function (e) {
    ((this.cause = void 0), (this.cause = e));
};
function Rn(e) {
    return e instanceof Ln;
}
function zn(e) {
    switch (e.dependenciesState_) {
        case Pn.UP_TO_DATE_:
            return !1;
        case Pn.NOT_TRACKING_:
        case Pn.STALE_:
            return !0;
        case Pn.POSSIBLY_STALE_:
            for (var t = Un(!0), n = Vn(), r = e.observing_, a = r.length, i = 0; i < a; i++) {
                var o = r[i];
                if (jn(o)) {
                    if (Kn.disableErrorBoundaries) o.get();
                    else
                        try {
                            o.get();
                        } catch (l) {
                            return (Fn(n), Bn(t), !0);
                        }
                    if (e.dependenciesState_ === Pn.STALE_) return (Fn(n), Bn(t), !0);
                }
            }
            return ($n(e), Fn(n), Bn(t), !1);
    }
}
function In(e, t, n) {
    var r = Un(!0);
    ($n(e),
        (e.newObserving_ = new Array(e.observing_.length + 100)),
        (e.unboundDepsCount_ = 0),
        (e.runId_ = ++Kn.runId));
    var a,
        i = Kn.trackingDerivation;
    if (((Kn.trackingDerivation = e), Kn.inBatch++, !0 === Kn.disableErrorBoundaries)) a = t.call(n);
    else
        try {
            a = t.call(n);
        } catch (o) {
            a = new Ln(o);
        }
    return (
        Kn.inBatch--,
        (Kn.trackingDerivation = i),
        (function (e) {
            for (
                var t = e.observing_,
                    n = (e.observing_ = e.newObserving_),
                    r = Pn.UP_TO_DATE_,
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
                (0 === u.diffValue_ && Qn(u, e), (u.diffValue_ = 0));
            }
            for (; a--; ) {
                var s = n[a];
                1 === s.diffValue_ && ((s.diffValue_ = 0), qn(s, e));
            }
            r !== Pn.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        Bn(r),
        a
    );
}
function Dn(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) Qn(t[n], e);
    e.dependenciesState_ = Pn.NOT_TRACKING_;
}
function Mn(e) {
    var t = Vn();
    try {
        return e();
    } finally {
        Fn(t);
    }
}
function Vn() {
    var e = Kn.trackingDerivation;
    return ((Kn.trackingDerivation = null), e);
}
function Fn(e) {
    Kn.trackingDerivation = e;
}
function Un(e) {
    var t = Kn.allowStateReads;
    return ((Kn.allowStateReads = e), t);
}
function Bn(e) {
    Kn.allowStateReads = e;
}
function $n(e) {
    if (e.dependenciesState_ !== Pn.UP_TO_DATE_) {
        e.dependenciesState_ = Pn.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = Pn.UP_TO_DATE_;
    }
}
var Wn = function () {
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
    Hn = !0,
    Kn = (function () {
        var e = ze();
        return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Hn = !1),
            e.__mobxGlobals && e.__mobxGlobals.version !== new Wn().version && (Hn = !1),
            Hn
                ? e.__mobxGlobals
                    ? ((e.__mobxInstanceCount += 1),
                      e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                      e.__mobxGlobals)
                    : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Wn()))
                : (setTimeout(function () {
                      Le(35);
                  }, 1),
                  new Wn())
        );
    })();
function qn(e, t) {
    (e.observers_.add(t),
        e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_));
}
function Qn(e, t) {
    (e.observers_.delete(t), 0 === e.observers_.size && Gn(e));
}
function Gn(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), Kn.pendingUnobservations.push(e));
}
function Yn() {
    Kn.inBatch++;
}
function Xn() {
    if (0 == --Kn.inBatch) {
        rr();
        for (var e = Kn.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            ((n.isPendingUnobservation_ = !1),
                0 === n.observers_.size &&
                    (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof Tn && n.suspend_()));
        }
        Kn.pendingUnobservations = [];
    }
}
function Zn(e) {
    var t = Kn.trackingDerivation;
    return null !== t
        ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ && Kn.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
          e.isBeingObserved_)
        : (0 === e.observers_.size && Kn.inBatch > 0 && Gn(e), !1);
}
function Jn(e) {
    e.lowestObserverState_ !== Pn.STALE_ &&
        ((e.lowestObserverState_ = Pn.STALE_),
        e.observers_.forEach(function (e) {
            (e.dependenciesState_ === Pn.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = Pn.STALE_));
        }));
}
var er = (function () {
        function e(e, t, n, r) {
            (void 0 === e && (e = 'Reaction'),
                (this.name_ = void 0),
                (this.onInvalidate_ = void 0),
                (this.errorHandler_ = void 0),
                (this.requiresObservable_ = void 0),
                (this.observing_ = []),
                (this.newObserving_ = []),
                (this.dependenciesState_ = Pn.NOT_TRACKING_),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.unboundDepsCount_ = 0),
                (this.isDisposed_ = !1),
                (this.isScheduled_ = !1),
                (this.isTrackPending_ = !1),
                (this.isRunning_ = !1),
                (this.isTracing_ = An.NONE),
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
                this.isScheduled_ || ((this.isScheduled_ = !0), Kn.pendingReactions.push(this), rr());
            }),
            (t.isScheduled = function () {
                return this.isScheduled_;
            }),
            (t.runReaction_ = function () {
                if (!this.isDisposed_) {
                    (Yn(), (this.isScheduled_ = !1));
                    var e = Kn.trackingContext;
                    if (((Kn.trackingContext = this), zn(this))) {
                        this.isTrackPending_ = !0;
                        try {
                            this.onInvalidate_();
                        } catch (t) {
                            this.reportExceptionInDerivation_(t);
                        }
                    }
                    ((Kn.trackingContext = e), Xn());
                }
            }),
            (t.track = function (e) {
                if (!this.isDisposed_) {
                    (Yn(), (this.isRunning_ = !0));
                    var t = Kn.trackingContext;
                    Kn.trackingContext = this;
                    var n = In(this, e, void 0);
                    ((Kn.trackingContext = t),
                        (this.isRunning_ = !1),
                        (this.isTrackPending_ = !1),
                        this.isDisposed_ && Dn(this),
                        Rn(n) && this.reportExceptionInDerivation_(n.cause),
                        Xn());
                }
            }),
            (t.reportExceptionInDerivation_ = function (e) {
                var t = this;
                if (this.errorHandler_) this.errorHandler_(e, this);
                else {
                    if (Kn.disableErrorBoundaries) throw e;
                    var n = "[mobx] uncaught error in '" + this + "'";
                    (Kn.suppressReactionErrors || console.error(n, e),
                        Kn.globalReactionErrorHandlers.forEach(function (n) {
                            return n(e, t);
                        }));
                }
            }),
            (t.dispose = function () {
                this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (Yn(), Dn(this), Xn()));
            }),
            (t.getDisposer_ = function (e) {
                var t = this,
                    n = function n() {
                        (t.dispose(), null == e || null == e.removeEventListener || e.removeEventListener('abort', n));
                    };
                return (null == e || null == e.addEventListener || e.addEventListener('abort', n), (n[_t] = this), n);
            }),
            (t.toString = function () {
                return 'Reaction[' + this.name_ + ']';
            }),
            (t.trace = function (e) {}),
            e
        );
    })(),
    tr = 100,
    nr = function (e) {
        return e();
    };
function rr() {
    Kn.inBatch > 0 || Kn.isRunningReactions || nr(ar);
}
function ar() {
    Kn.isRunningReactions = !0;
    for (var e = Kn.pendingReactions, t = 0; e.length > 0; ) {
        ++t === tr && (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, a = n.length; r < a; r++) n[r].runReaction_();
    }
    Kn.isRunningReactions = !1;
}
var ir = et('Reaction', er);
var or = 'action',
    lr = 'autoAction',
    ur = '<unnamed action>',
    sr = Ct(or),
    cr = Ct('action.bound', { bound: !0 }),
    fr = Ct(lr, { autoAction: !0 }),
    dr = Ct('autoAction.bound', { autoAction: !0, bound: !0 });
function pr(e) {
    return function (t, n) {
        return qe(t)
            ? wn(t.name || ur, t, e)
            : qe(n)
              ? wn(t, n, e)
              : bt(n)
                ? (e ? fr : sr).decorate_20223_(t, n)
                : Qe(n)
                  ? yt(t, n, e ? fr : sr)
                  : Qe(t)
                    ? gt(Ct(e ? lr : or, { name: t, autoAction: e }))
                    : void 0;
    };
}
var hr = pr(!1);
Object.assign(hr, sr);
var vr = pr(!0);
function mr(e) {
    return qe(e) && !0 === e.isMobxAction;
}
(Object.assign(vr, fr), (hr.bound = gt(cr)), (vr.bound = gt(dr)));
var gr = function (e) {
    return e();
};
function yr(e) {
    return e.scheduler
        ? e.scheduler
        : e.delay
          ? function (t) {
                return setTimeout(t, e.delay);
            }
          : gr;
}
function br(e, t, n) {
    var r, a, i, o;
    void 0 === n && (n = Ue);
    var l,
        u,
        s,
        c,
        f = null != (r = n.name) ? r : 'Reaction',
        d = hr(
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
        h = yr(n),
        v = !0,
        m = !1,
        g = n.compareStructural ? xt.structural : n.equals || xt.default,
        y = new er(
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
                    var n = Sn(e);
                    try {
                        return t();
                    } finally {
                        xn(n);
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
var _r = 'onBO',
    wr = 'onBUO';
function kr(e, t, n) {
    return Sr(wr, e, t, n);
}
function Sr(e, t, n, r) {
    var a = za(t),
        i = qe(r) ? r : n,
        o = e + 'L';
    return (
        a[o] ? a[o].add(i) : (a[o] = new Set([i])),
        function () {
            var e = a[o];
            e && (e.delete(i), 0 === e.size && delete a[o]);
        }
    );
}
function xr(e, t, n, r) {
    var a = lt(t);
    return (
        Ma(function () {
            var t = ba(e, r)[_t];
            at(a).forEach(function (e) {
                t.extend_(e, a[e], !n || !(e in n) || n[e]);
            });
        }),
        e
    );
}
var Or = 0;
function Er() {
    this.message = 'FLOW_CANCELLED';
}
Er.prototype = Object.create(Error.prototype);
var Pr = Lt('flow'),
    Cr = Lt('flow.bound', { bound: !0 }),
    Ar = Object.assign(function (e, t) {
        if (bt(t)) return Pr.decorate_20223_(e, t);
        if (Qe(t)) return yt(e, t, Pr);
        var n = e,
            r = n.name || '<unnamed flow>',
            a = function () {
                var e,
                    t = arguments,
                    a = ++Or,
                    i = hr(r + ' - runid: ' + a + ' - init', n).apply(this, t),
                    o = void 0,
                    l = new Promise(function (t, n) {
                        var l = 0;
                        function u(e) {
                            var t;
                            o = void 0;
                            try {
                                t = hr(r + ' - runid: ' + a + ' - yield ' + l++, i.next).call(i, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function s(e) {
                            var t;
                            o = void 0;
                            try {
                                t = hr(r + ' - runid: ' + a + ' - yield ' + l++, i.throw).call(i, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function c(e) {
                            if (!qe(null == e ? void 0 : e.then))
                                return e.done ? t(e.value) : (o = Promise.resolve(e.value)).then(u, s);
                            e.then(c, n);
                        }
                        ((e = n), u(void 0));
                    });
                return (
                    (l.cancel = hr(r + ' - runid: ' + a + ' - cancel', function () {
                        try {
                            o && Nr(o);
                            var t = i.return(void 0),
                                n = Promise.resolve(t.value);
                            (n.then(Ke, Ke), Nr(n), e(new Er()));
                        } catch (r) {
                            e(r);
                        }
                    })),
                    l
                );
            };
        return ((a.isMobXFlow = !0), a);
    }, Pr);
function Nr(e) {
    qe(e.cancel) && e.cancel();
}
function Tr(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function jr(e, t) {
    if (void 0 === t) return jn(e);
    if (!1 === ka(e)) return !1;
    if (!e[_t].values_.has(t)) return !1;
    var n = za(e, t);
    return jn(n);
}
function Lr(e, t) {
    return jr(e, t);
}
function Rr(e) {
    return (function (e, t) {
        return !!e && (ka(e) || !!e[_t] || kt(e) || ir(e) || jn(e));
    })(e);
}
function zr(e, t, n, r) {
    return qe(n)
        ? (function (e, t, n, r) {
              return Ia(e, t).observe_(n, r);
          })(e, t, n, r)
        : (function (e, t, n) {
              return Ia(e).observe_(t, n);
          })(e, t, n);
}
function Ir(e, t) {
    (void 0 === t && (t = void 0), Yn());
    try {
        return e.apply(t);
    } finally {
        Xn();
    }
}
function Dr(e) {
    return e[_t];
}
Ar.bound = gt(Cr);
var Mr = {
    has: function (e, t) {
        return Dr(e).has_(t);
    },
    get: function (e, t) {
        return Dr(e).get_(t);
    },
    set: function (e, t, n) {
        var r;
        return !!Qe(t) && (null == (r = Dr(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
        var n;
        return !!Qe(t) && (null == (n = Dr(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
        var r;
        return null == (r = Dr(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
        return Dr(e).ownKeys_();
    },
    preventExtensions: function (e) {
        Le(13);
    },
};
function Vr(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
}
function Fr(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
        n.push(t),
        He(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function Ur(e, t) {
    var n = Vn();
    try {
        for (
            var r = [].concat(e.interceptors_ || []), a = 0, i = r.length;
            a < i && ((t = r[a](t)) && !t.type && Le(14), t);
            a++
        );
        return t;
    } finally {
        Fn(n);
    }
}
function Br(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
}
function $r(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
        n.push(t),
        He(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function Wr(e, t) {
    var n = Vn(),
        r = e.changeListeners_;
    if (r) {
        for (var a = 0, i = (r = r.slice()).length; a < i; a++) r[a](t);
        Fn(n);
    }
}
function Hr(e, t, n) {
    return (
        Ma(function () {
            var r = ba(e, n)[_t];
            (null != t ||
                (t = (function (e) {
                    return (ot(e, mt) || Ze(e, mt, ct({}, e[mt])), e[mt]);
                })(e)),
                at(t).forEach(function (e) {
                    return r.make_(e, t[e]);
                }));
        }),
        e
    );
}
var Kr = 'splice',
    qr = 'update',
    Qr = {
        get: function (e, t) {
            var n = e[_t];
            return t === _t
                ? n
                : 'length' === t
                  ? n.getArrayLength_()
                  : 'string' != typeof t || isNaN(t)
                    ? ot(Xr, t)
                        ? Xr[t]
                        : e[t]
                    : n.get_(parseInt(t));
        },
        set: function (e, t, n) {
            var r = e[_t];
            return (
                'length' === t && r.setArrayLength_(n),
                'symbol' == typeof t || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n),
                !0
            );
        },
        preventExtensions: function () {
            Le(15);
        },
    },
    Gr = (function () {
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
                (this.atom_ = new wt(e)),
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
                return Fr(this, e);
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
                    $r(this, e)
                );
            }),
            (t.getArrayLength_ = function () {
                return (this.atom_.reportObserved(), this.values_.length);
            }),
            (t.setArrayLength_ = function (e) {
                ('number' != typeof e || isNaN(e) || e < 0) && Le('Out of range: ' + e);
                var t = this.values_.length;
                if (e !== t)
                    if (e > t) {
                        for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
                        this.spliceWithArray_(t, 0, n);
                    } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
                (e !== this.lastKnownLength_ && Le(16),
                    (this.lastKnownLength_ += t),
                    this.legacyMode_ && t > 0 && La(e + t + 1));
            }),
            (t.spliceWithArray_ = function (e, t, n) {
                var r = this;
                this.atom_;
                var a = this.values_.length;
                if (
                    (void 0 === e ? (e = 0) : e > a ? (e = a) : e < 0 && (e = Math.max(0, a + e)),
                    (t = 1 === arguments.length ? a - e : null == t ? 0 : Math.max(0, Math.min(t, a - e))),
                    void 0 === n && (n = Fe),
                    Vr(this))
                ) {
                    var i = Ur(this, { object: this.proxy_, type: Kr, index: e, removedCount: t, added: n });
                    if (!i) return Fe;
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
                    a = Br(this),
                    i =
                        a || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  type: qr,
                                  debugObjectName: this.atom_.name_,
                                  index: e,
                                  newValue: t,
                                  oldValue: n,
                              }
                            : null;
                (this.atom_.reportChanged(), a && Wr(this, i));
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    a = Br(this),
                    i =
                        a || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  debugObjectName: this.atom_.name_,
                                  type: Kr,
                                  index: e,
                                  removed: n,
                                  added: t,
                                  removedCount: n.length,
                                  addedCount: t.length,
                              }
                            : null;
                (this.atom_.reportChanged(), a && Wr(this, i));
            }),
            (t.get_ = function (e) {
                if (!(this.legacyMode_ && e >= this.values_.length))
                    return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]));
                console.warn('[mobx] Out of bounds read: ' + e);
            }),
            (t.set_ = function (e, t) {
                var n = this.values_;
                if ((this.legacyMode_ && e > n.length && Le(17, e, n.length), e < n.length)) {
                    this.atom_;
                    var r = n[e];
                    if (Vr(this)) {
                        var a = Ur(this, { type: qr, object: this.proxy_, index: e, newValue: t });
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
function Yr(e, t, n, r) {
    return (
        void 0 === n && (n = 'ObservableArray'),
        void 0 === r && (r = !1),
        We(),
        Ma(function () {
            var a = new Gr(n, t, r, !1);
            Je(a.values_, _t, a);
            var i = new Proxy(a.values_, Qr);
            return ((a.proxy_ = i), e && e.length && a.spliceWithArray_(0, 0, e), i);
        })
    );
}
var Xr = {
    clear: function () {
        return this.splice(0);
    },
    replace: function (e) {
        var t = this[_t];
        return t.spliceWithArray_(0, t.values_.length, e);
    },
    toJSON: function () {
        return this.slice();
    },
    splice: function (e, t) {
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
        var i = this[_t];
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
        return this[_t].spliceWithArray_(e, t, n);
    },
    push: function () {
        for (var e = this[_t], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(e.values_.length, 0, n), e.values_.length);
    },
    pop: function () {
        return this.splice(Math.max(this[_t].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        for (var e = this[_t], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(0, 0, n), e.values_.length);
    },
    reverse: function () {
        return (Kn.trackingDerivation && Le(37, 'reverse'), this.replace(this.slice().reverse()), this);
    },
    sort: function () {
        Kn.trackingDerivation && Le(37, 'sort');
        var e = this.slice();
        return (e.sort.apply(e, arguments), this.replace(e), this);
    },
    remove: function (e) {
        var t = this[_t],
            n = t.dehanceValues_(t.values_).indexOf(e);
        return n > -1 && (this.splice(n, 1), !0);
    },
};
function Zr(e, t) {
    'function' == typeof Array.prototype[e] && (Xr[e] = t(e));
}
function Jr(e) {
    return function () {
        var t = this[_t];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments);
    };
}
function ea(e) {
    return function (t, n) {
        var r = this,
            a = this[_t];
        return (
            a.atom_.reportObserved(),
            a.dehanceValues_(a.values_)[e](function (e, a) {
                return t.call(n, e, a, r);
            })
        );
    };
}
function ta(e) {
    return function () {
        var t = this,
            n = this[_t];
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
(Zr('at', Jr),
    Zr('concat', Jr),
    Zr('flat', Jr),
    Zr('includes', Jr),
    Zr('indexOf', Jr),
    Zr('join', Jr),
    Zr('lastIndexOf', Jr),
    Zr('slice', Jr),
    Zr('toString', Jr),
    Zr('toLocaleString', Jr),
    Zr('toSorted', Jr),
    Zr('toSpliced', Jr),
    Zr('with', Jr),
    Zr('every', ea),
    Zr('filter', ea),
    Zr('find', ea),
    Zr('findIndex', ea),
    Zr('findLast', ea),
    Zr('findLastIndex', ea),
    Zr('flatMap', ea),
    Zr('forEach', ea),
    Zr('map', ea),
    Zr('some', ea),
    Zr('toReversed', ea),
    Zr('reduce', ta),
    Zr('reduceRight', ta));
var na,
    ra,
    aa = et('ObservableArrayAdministration', Gr);
function ia(e) {
    return Ge(e) && aa(e[_t]);
}
var oa = {},
    la = 'add',
    ua = 'delete';
((na = Symbol.iterator), (ra = Symbol.toStringTag));
var sa,
    ca,
    fa = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Ot),
                void 0 === n && (n = 'ObservableMap'),
                (this.enhancer_ = void 0),
                (this.name_ = void 0),
                (this[_t] = oa),
                (this.data_ = void 0),
                (this.hasMap_ = void 0),
                (this.keysAtom_ = void 0),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = t),
                (this.name_ = n),
                qe(Map) || Le(18),
                Ma(function () {
                    ((r.keysAtom_ = St('ObservableMap.keys()')),
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
                if (!Kn.trackingDerivation) return this.has_(e);
                var n = this.hasMap_.get(e);
                if (!n) {
                    var r = (n = new En(this.has_(e), Et, 'ObservableMap.key?', !1));
                    (this.hasMap_.set(e, r),
                        kr(r, function () {
                            return t.hasMap_.delete(e);
                        }));
                }
                return n.get();
            }),
            (t.set = function (e, t) {
                var n = this.has_(e);
                if (Vr(this)) {
                    var r = Ur(this, { type: n ? qr : la, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, Vr(this)) && !Ur(this, { type: ua, object: this, name: e })) return !1;
                if (this.has_(e)) {
                    var n = Br(this),
                        r = n
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: ua,
                                  object: this,
                                  oldValue: this.data_.get(e).value_,
                                  name: e,
                              }
                            : null;
                    return (
                        Ir(function () {
                            var n;
                            (t.keysAtom_.reportChanged(),
                                null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                                t.data_.get(e).setNewValue_(void 0),
                                t.data_.delete(e));
                        }),
                        n && Wr(this, r),
                        !0
                    );
                }
                return !1;
            }),
            (t.updateValue_ = function (e, t) {
                var n = this.data_.get(e);
                if ((t = n.prepareNewValue_(t)) !== Kn.UNCHANGED) {
                    var r = Br(this),
                        a = r
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: qr,
                                  object: this,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), r && Wr(this, a));
                }
            }),
            (t.addValue_ = function (e, t) {
                var n = this;
                (this.keysAtom_,
                    Ir(function () {
                        var r,
                            a = new En(t, n.enhancer_, 'ObservableMap.key', !1);
                        (n.data_.set(e, a),
                            (t = a.value_),
                            null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                            n.keysAtom_.reportChanged());
                    }));
                var r = Br(this),
                    a = r
                        ? {
                              observableKind: 'map',
                              debugObjectName: this.name_,
                              type: la,
                              object: this,
                              name: e,
                              newValue: t,
                          }
                        : null;
                r && Wr(this, a);
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
                return $a({
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
                return $a({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            a = n.value;
                        return { done: r, value: r ? void 0 : [a, e.get(a)] };
                    },
                });
            }),
            (t[na] = function () {
                return this.entries();
            }),
            (t.forEach = function (e, t) {
                for (var n, r = vt(this); !(n = r()).done; ) {
                    var a = n.value,
                        i = a[0],
                        o = a[1];
                    e.call(t, o, i, this);
                }
            }),
            (t.merge = function (e) {
                var t = this;
                return (
                    da(e) && (e = new Map(e)),
                    Ir(function () {
                        Ye(e)
                            ? (function (e) {
                                  var t = Object.keys(e);
                                  if (!rt) return t;
                                  var n = Object.getOwnPropertySymbols(e);
                                  return n.length
                                      ? [].concat(
                                            t,
                                            n.filter(function (t) {
                                                return Ve.propertyIsEnumerable.call(e, t);
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
                              : tt(e)
                                ? (e.constructor !== Map && Le(19, e),
                                  e.forEach(function (e, n) {
                                      return t.set(n, e);
                                  }))
                                : null != e && Le(20, e);
                    }),
                    this
                );
            }),
            (t.clear = function () {
                var e = this;
                Ir(function () {
                    Mn(function () {
                        for (var t, n = vt(e.keys()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    Ir(function () {
                        for (
                            var n,
                                r = (function (e) {
                                    if (tt(e) || da(e)) return e;
                                    if (Array.isArray(e)) return new Map(e);
                                    if (Ye(e)) {
                                        var t = new Map();
                                        for (var n in e) t.set(n, e[n]);
                                        return t;
                                    }
                                    return Le(21, e);
                                })(e),
                                a = new Map(),
                                i = !1,
                                o = vt(t.data_.keys());
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
                        for (var s, c = vt(r.entries()); !(s = c()).done; ) {
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
                return $r(this, e);
            }),
            (t.intercept_ = function (e) {
                return Fr(this, e);
            }),
            st(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.keysAtom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: ra,
                    get: function () {
                        return 'Map';
                    },
                },
            ]),
            e
        );
    })(),
    da = et('ObservableMap', fa);
var pa = {};
((sa = Symbol.iterator), (ca = Symbol.toStringTag));
var ha = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Ot),
                void 0 === n && (n = 'ObservableSet'),
                (this.name_ = void 0),
                (this[_t] = pa),
                (this.data_ = new Set()),
                (this.atom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = void 0),
                (this.name_ = n),
                qe(Set) || Le(22),
                (this.enhancer_ = function (e, r) {
                    return t(e, r, n);
                }),
                Ma(function () {
                    ((r.atom_ = St(r.name_)), e && r.replace(e));
                }));
        }
        var t = e.prototype;
        return (
            (t.dehanceValue_ = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
                var e = this;
                Ir(function () {
                    Mn(function () {
                        for (var t, n = vt(e.data_.values()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.forEach = function (e, t) {
                for (var n, r = vt(this); !(n = r()).done; ) {
                    var a = n.value;
                    e.call(t, a, a, this);
                }
            }),
            (t.add = function (e) {
                var t = this;
                if ((this.atom_, Vr(this)) && !Ur(this, { type: la, object: this, newValue: e })) return this;
                if (!this.has(e)) {
                    Ir(function () {
                        (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
                    });
                    var n = Br(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: la,
                                  object: this,
                                  newValue: e,
                              }
                            : null;
                    n && Wr(this, r);
                }
                return this;
            }),
            (t.delete = function (e) {
                var t = this;
                if (Vr(this) && !Ur(this, { type: ua, object: this, oldValue: e })) return !1;
                if (this.has(e)) {
                    var n = Br(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: ua,
                                  object: this,
                                  oldValue: e,
                              }
                            : null;
                    return (
                        Ir(function () {
                            (t.atom_.reportChanged(), t.data_.delete(e));
                        }),
                        n && Wr(this, r),
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
                return $a({
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
                return $a({
                    next: function () {
                        return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
                    },
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    va(e) && (e = new Set(e)),
                    Ir(function () {
                        Array.isArray(e) || nt(e)
                            ? (t.clear(),
                              e.forEach(function (e) {
                                  return t.add(e);
                              }))
                            : null != e && Le('Cannot initialize set from ' + e);
                    }),
                    this
                );
            }),
            (t.observe_ = function (e, t) {
                return $r(this, e);
            }),
            (t.intercept_ = function (e) {
                return Fr(this, e);
            }),
            (t.toJSON = function () {
                return Array.from(this);
            }),
            (t.toString = function () {
                return '[object ObservableSet]';
            }),
            (t[sa] = function () {
                return this.values();
            }),
            st(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.atom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: ca,
                    get: function () {
                        return 'Set';
                    },
                },
            ]),
            e
        );
    })(),
    va = et('ObservableSet', ha),
    ma = Object.create(null),
    ga = 'remove',
    ya = (function () {
        function e(e, t, n, r) {
            (void 0 === t && (t = new Map()),
                void 0 === r && (r = qt),
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
                (this.keysAtom_ = new wt('ObservableObject.keys')),
                (this.isPlainObject_ = Ye(this.target_)));
        }
        var t = e.prototype;
        return (
            (t.getObservablePropValue_ = function (e) {
                return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
                var n = this.values_.get(e);
                if (n instanceof Tn) return (n.set(t), !0);
                if (Vr(this)) {
                    var r = Ur(this, { type: qr, object: this.proxy_ || this.target_, name: e, newValue: t });
                    if (!r) return null;
                    t = r.newValue;
                }
                if ((t = n.prepareNewValue_(t)) !== Kn.UNCHANGED) {
                    var a = Br(this),
                        i = a
                            ? {
                                  type: qr,
                                  observableKind: 'object',
                                  debugObjectName: this.name_,
                                  object: this.proxy_ || this.target_,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), a && Wr(this, i));
                }
                return !0;
            }),
            (t.get_ = function (e) {
                return (Kn.trackingDerivation && !ot(this.target_, e) && this.has_(e), this.target_[e]);
            }),
            (t.set_ = function (e, t, n) {
                return (
                    void 0 === n && (n = !1),
                    ot(this.target_, e)
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
                if (!Kn.trackingDerivation) return e in this.target_;
                this.pendingKeys_ || (this.pendingKeys_ = new Map());
                var t = this.pendingKeys_.get(e);
                return (
                    t ||
                        ((t = new En(e in this.target_, Et, 'ObservableObject.key?', !1)), this.pendingKeys_.set(e, t)),
                    t.get()
                );
            }),
            (t.make_ = function (e, t) {
                if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                    if (!(e in this.target_)) {
                        var n;
                        if (null != (n = this.target_[mt]) && n[e]) return;
                        Le(1, t.annotationType_, this.name_ + '.' + e.toString());
                    }
                    for (var r = this.target_; r && r !== Ve; ) {
                        var a = De(r, e);
                        if (a) {
                            var i = t.make_(this, e, a, r);
                            if (0 === i) return;
                            if (1 === i) break;
                        }
                        r = Object.getPrototypeOf(r);
                    }
                    Sa(this, t, e);
                }
            }),
            (t.extend_ = function (e, t, n, r) {
                if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                    return this.defineProperty_(e, t, r);
                var a = n.extend_(this, e, t, r);
                return (a && Sa(this, n, e), a);
            }),
            (t.defineProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    Yn();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (Vr(this)) {
                        var a = Ur(this, { object: this.proxy_ || this.target_, name: e, type: la, newValue: t.value });
                        if (!a) return null;
                        var i = a.newValue;
                        t.value !== i && (t = ct({}, t, { value: i }));
                    }
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                    } else Me(this.target_, e, t);
                    this.notifyPropertyAddition_(e, t.value);
                } finally {
                    Xn();
                }
                return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
                (void 0 === r && (r = !1), this.keysAtom_);
                try {
                    Yn();
                    var a = this.delete_(e);
                    if (!a) return a;
                    if (Vr(this)) {
                        var i = Ur(this, { object: this.proxy_ || this.target_, name: e, type: la, newValue: t });
                        if (!i) return null;
                        t = i.newValue;
                    }
                    var o = wa(e),
                        l = {
                            configurable: !Kn.safeDescriptors || this.isPlainObject_,
                            enumerable: !0,
                            get: o.get,
                            set: o.set,
                        };
                    if (r) {
                        if (!Reflect.defineProperty(this.target_, e, l)) return !1;
                    } else Me(this.target_, e, l);
                    var u = new En(t, n, 'ObservableObject.key', !1);
                    (this.values_.set(e, u), this.notifyPropertyAddition_(e, u.value_));
                } finally {
                    Xn();
                }
                return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    Yn();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (Vr(this))
                        if (!Ur(this, { object: this.proxy_ || this.target_, name: e, type: la, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var a = wa(e),
                        i = {
                            configurable: !Kn.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: a.get,
                            set: a.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, i)) return !1;
                    } else Me(this.target_, e, i);
                    (this.values_.set(e, new Tn(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    Xn();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !ot(this.target_, e))) return !0;
                if (Vr(this) && !Ur(this, { object: this.proxy_ || this.target_, name: e, type: ga })) return null;
                try {
                    var n, r;
                    Yn();
                    var a,
                        i = Br(this),
                        o = this.values_.get(e),
                        l = void 0;
                    if (!o && i) l = null == (a = De(this.target_, e)) ? void 0 : a.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (o && (this.values_.delete(e), o instanceof En && (l = o.value_), Jn(o)),
                        this.keysAtom_.reportChanged(),
                        null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
                        i)
                    ) {
                        var u = {
                            type: ga,
                            observableKind: 'object',
                            object: this.proxy_ || this.target_,
                            debugObjectName: this.name_,
                            oldValue: l,
                            name: e,
                        };
                        (0, i && Wr(this, u));
                    }
                } finally {
                    Xn();
                }
                return !0;
            }),
            (t.observe_ = function (e, t) {
                return $r(this, e);
            }),
            (t.intercept_ = function (e) {
                return Fr(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
                var n,
                    r,
                    a = Br(this);
                if (a) {
                    var i = a
                        ? {
                              type: la,
                              observableKind: 'object',
                              debugObjectName: this.name_,
                              object: this.proxy_ || this.target_,
                              name: e,
                              newValue: t,
                          }
                        : null;
                    a && Wr(this, i);
                }
                (null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(!0),
                    this.keysAtom_.reportChanged());
            }),
            (t.ownKeys_ = function () {
                return (this.keysAtom_.reportObserved(), at(this.target_));
            }),
            (t.keys_ = function () {
                return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
            }),
            e
        );
    })();
function ba(e, t) {
    var n;
    if (ot(e, _t)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
        a = new ya(
            e,
            new Map(),
            String(r),
            (function (e) {
                var t;
                return e ? (null != (t = e.defaultDecorator) ? t : Qt(e)) : void 0;
            })(t),
        );
    return (Ze(e, _t, a), e);
}
var _a = et('ObservableObjectAdministration', ya);
function wa(e) {
    return (
        ma[e] ||
        (ma[e] = {
            get: function () {
                return this[_t].getObservablePropValue_(e);
            },
            set: function (t) {
                return this[_t].setObservablePropValue_(e, t);
            },
        })
    );
}
function ka(e) {
    return !!Ge(e) && _a(e[_t]);
}
function Sa(e, t, n) {
    var r;
    null == (r = e.target_[mt]) || delete r[n];
}
var xa,
    Oa,
    Ea = Ta(0),
    Pa = (function () {
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
    Ca = 0,
    Aa = function () {};
((xa = Aa),
    (Oa = Array.prototype),
    Object.setPrototypeOf
        ? Object.setPrototypeOf(xa.prototype, Oa)
        : void 0 !== xa.prototype.__proto__
          ? (xa.prototype.__proto__ = Oa)
          : (xa.prototype = Oa));
var Na = (function (e, t, n) {
    function r(t, n, r, a) {
        var i;
        return (
            void 0 === r && (r = 'ObservableArray'),
            void 0 === a && (a = !1),
            (i = e.call(this) || this),
            Ma(function () {
                var e = new Gr(r, n, a, !0);
                ((e.proxy_ = pt(i)),
                    Je(pt(i), _t, e),
                    t && t.length && i.spliceWithArray(0, 0, t),
                    Pa && Object.defineProperty(pt(i), '0', Ea));
            }),
            i
        );
    }
    ft(r, e);
    var a = r.prototype;
    return (
        (a.concat = function () {
            this[_t].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return Array.prototype.concat.apply(
                this.slice(),
                t.map(function (e) {
                    return ia(e) ? e.slice() : e;
                }),
            );
        }),
        (a[n] = function () {
            var e = this,
                t = 0;
            return $a({
                next: function () {
                    return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
                },
            });
        }),
        st(r, [
            {
                key: 'length',
                get: function () {
                    return this[_t].getArrayLength_();
                },
                set: function (e) {
                    this[_t].setArrayLength_(e);
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
})(Aa, Symbol.toStringTag, Symbol.iterator);
function Ta(e) {
    return {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this[_t].get_(e);
        },
        set: function (t) {
            this[_t].set_(e, t);
        },
    };
}
function ja(e) {
    Me(Na.prototype, '' + e, Ta(e));
}
function La(e) {
    if (e > Ca) {
        for (var t = Ca; t < e + 100; t++) ja(t);
        Ca = e;
    }
}
function Ra(e, t, n) {
    return new Na(e, t, n);
}
function za(e, t) {
    if ('object' == typeof e && null !== e) {
        if (ia(e)) return (void 0 !== t && Le(23), e[_t].atom_);
        if (va(e)) return e.atom_;
        if (da(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return (n || Le(25, t, Da(e)), n);
        }
        if (ka(e)) {
            if (!t) return Le(26);
            var r = e[_t].values_.get(t);
            return (r || Le(27, t, Da(e)), r);
        }
        if (kt(e) || jn(e) || ir(e)) return e;
    } else if (qe(e) && ir(e[_t])) return e[_t];
    Le(28);
}
function Ia(e, t) {
    return (
        e || Le(29),
        void 0 !== t ? Ia(za(e, t)) : kt(e) || jn(e) || ir(e) || da(e) || va(e) ? e : e[_t] ? e[_t] : void Le(24, e)
    );
}
function Da(e, t) {
    var n;
    if (void 0 !== t) n = za(e, t);
    else {
        if (mr(e)) return e.name;
        n = ka(e) || da(e) || va(e) ? Ia(e) : za(e);
    }
    return n.name_;
}
function Ma(e) {
    var t = Vn(),
        n = Sn(!0);
    Yn();
    try {
        return e();
    } finally {
        (Xn(), xn(n), Fn(t));
    }
}
(Object.entries(Xr).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && Ze(Na.prototype, t, n);
}),
    La(1e3));
var Va = Ve.toString;
function Fa(e, t, n) {
    return (void 0 === n && (n = -1), Ua(e, t, n));
}
function Ua(e, t, n, r, a) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var i = typeof e;
    if ('function' !== i && 'object' !== i && 'object' != typeof t) return !1;
    var o = Va.call(e);
    if (o !== Va.call(t)) return !1;
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
    ((e = Ba(e)), (t = Ba(t)));
    var l = '[object Array]' === o;
    if (!l) {
        if ('object' != typeof e || 'object' != typeof t) return !1;
        var u = e.constructor,
            s = t.constructor;
        if (
            u !== s &&
            !(qe(u) && u instanceof u && qe(s) && s instanceof s) &&
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
        for (; c--; ) if (!Ua(e[c], t[c], n - 1, r, a)) return !1;
    } else {
        var f,
            d = Object.keys(e);
        if (((c = d.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (!ot(t, (f = d[c])) || !Ua(e[f], t[f], n - 1, r, a)) return !1;
    }
    return (r.pop(), a.pop(), !0);
}
function Ba(e) {
    return ia(e) ? e.slice() : tt(e) || da(e) || nt(e) || va(e) ? Array.from(e.entries()) : e;
}
function $a(e) {
    return ((e[Symbol.iterator] = Wa), e);
}
function Wa() {
    return this;
}
(['Symbol', 'Map', 'Set'].forEach(function (e) {
    void 0 === ze()[e] && Le("MobX requires global '" + e + "' to be available or polyfilled");
}),
    'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
                return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
            },
            extras: { getDebugName: Da },
            $mobx: _t,
        }));
var Ha = {},
    Ka = { exports: {} },
    qa = {},
    Qa = { exports: {} },
    Ga = {};
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
})(Ga),
    (Qa.exports = Ga));
var Ya = Qa.exports,
    Xa = V,
    Za = Ya;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Ja(e) {
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
var ei = new Set(),
    ti = {};
function ni(e, t) {
    (ri(e, t), ri(e + 'Capture', t));
}
function ri(e, t) {
    for (ti[e] = t, e = 0; e < t.length; e++) ei.add(t[e]);
}
var ai = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    ii = Object.prototype.hasOwnProperty,
    oi =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    li = {},
    ui = {};
function si(e, t, n, r, a, i, o) {
    ((this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = a),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = o));
}
var ci = {};
('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        ci[e] = new si(e, 0, !1, e, null, !1, !1);
    }),
    [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
        var t = e[0];
        ci[t] = new si(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
        ci[e] = new si(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
        ci[e] = new si(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (e) {
            ci[e] = new si(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
        ci[e] = new si(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
        ci[e] = new si(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
        ci[e] = new si(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
        ci[e] = new si(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
var fi = /[\-:]([a-z])/g;
function di(e) {
    return e[1].toUpperCase();
}
function pi(e, t, n, r) {
    var a = ci.hasOwnProperty(t) ? ci[t] : null;
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
                  return !!ii.call(ui, e) || (!ii.call(li, e) && (oi.test(e) ? (ui[e] = !0) : ((li[e] = !0), !1)));
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
        var t = e.replace(fi, di);
        ci[t] = new si(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
        var t = e.replace(fi, di);
        ci[t] = new si(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(fi, di);
        ci[t] = new si(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
        ci[e] = new si(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (ci.xlinkHref = new si('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        ci[e] = new si(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
var hi = Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    vi = Symbol.for('react.element'),
    mi = Symbol.for('react.portal'),
    gi = Symbol.for('react.fragment'),
    yi = Symbol.for('react.strict_mode'),
    bi = Symbol.for('react.profiler'),
    _i = Symbol.for('react.provider'),
    wi = Symbol.for('react.context'),
    ki = Symbol.for('react.forward_ref'),
    Si = Symbol.for('react.suspense'),
    xi = Symbol.for('react.suspense_list'),
    Oi = Symbol.for('react.memo'),
    Ei = Symbol.for('react.lazy'),
    Pi = Symbol.for('react.offscreen'),
    Ci = Symbol.iterator;
function Ai(e) {
    return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (Ci && e[Ci]) || e['@@iterator'])
          ? e
          : null;
}
var Ni,
    Ti = Object.assign;
function ji(e) {
    if (void 0 === Ni)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ni = (t && t[1]) || '';
        }
    return '\n' + Ni + e;
}
var Li = !1;
function Ri(e, t) {
    if (!e || Li) return '';
    Li = !0;
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
        ((Li = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? ji(e) : '';
}
function zi(e) {
    switch (e.tag) {
        case 5:
            return ji(e.type);
        case 16:
            return ji('Lazy');
        case 13:
            return ji('Suspense');
        case 19:
            return ji('SuspenseList');
        case 0:
        case 2:
        case 15:
            return (e = Ri(e.type, !1));
        case 11:
            return (e = Ri(e.type.render, !1));
        case 1:
            return (e = Ri(e.type, !0));
        default:
            return '';
    }
}
function Ii(e) {
    if (null == e) return null;
    if ('function' == typeof e) return e.displayName || e.name || null;
    if ('string' == typeof e) return e;
    switch (e) {
        case gi:
            return 'Fragment';
        case mi:
            return 'Portal';
        case bi:
            return 'Profiler';
        case yi:
            return 'StrictMode';
        case Si:
            return 'Suspense';
        case xi:
            return 'SuspenseList';
    }
    if ('object' == typeof e)
        switch (e.$$typeof) {
            case wi:
                return (e.displayName || 'Context') + '.Consumer';
            case _i:
                return (e._context.displayName || 'Context') + '.Provider';
            case ki:
                var t = e.render;
                return (
                    (e = e.displayName) ||
                        (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'),
                    e
                );
            case Oi:
                return null !== (t = e.displayName || null) ? t : Ii(e.type) || 'Memo';
            case Ei:
                ((t = e._payload), (e = e._init));
                try {
                    return Ii(e(t));
                } catch (n) {}
        }
    return null;
}
function Di(e) {
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
            return Ii(t);
        case 8:
            return t === yi ? 'StrictMode' : 'Mode';
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
function Mi(e) {
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
function Vi(e) {
    var t = e.type;
    return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
}
function Fi(e) {
    e._valueTracker ||
        (e._valueTracker = (function (e) {
            var t = Vi(e) ? 'checked' : 'value',
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
function Ui(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = '';
    return (e && (r = Vi(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0));
}
function Bi(e) {
    if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body;
    } catch (t) {
        return e.body;
    }
}
function $i(e, t) {
    var n = t.checked;
    return Ti({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
    });
}
function Wi(e, t) {
    var n = null == t.defaultValue ? '' : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
    ((n = Mi(null != t.value ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
        }));
}
function Hi(e, t) {
    null != (t = t.checked) && pi(e, 'checked', t, !1);
}
function Ki(e, t) {
    Hi(e, t);
    var n = Mi(t.value),
        r = t.type;
    if (null != n)
        'number' === r
            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
    (t.hasOwnProperty('value')
        ? Qi(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && Qi(e, t.type, Mi(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked));
}
function qi(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
        ((t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t));
    }
    ('' !== (n = e.name) && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        '' !== n && (e.name = n));
}
function Qi(e, t, n) {
    ('number' === t && Bi(e.ownerDocument) === e) ||
        (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Gi = Array.isArray;
function Yi(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
        for (n = 0; n < e.length; n++)
            ((a = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0));
    } else {
        for (n = '' + Mi(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n) return ((e[a].selected = !0), void (r && (e[a].defaultSelected = !0)));
            null !== t || e[a].disabled || (t = e[a]);
        }
        null !== t && (t.selected = !0);
    }
}
function Xi(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(Ja(91));
    return Ti({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Zi(e, t) {
    var n = t.value;
    if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(Ja(92));
            if (Gi(n)) {
                if (1 < n.length) throw Error(Ja(93));
                n = n[0];
            }
            t = n;
        }
        (null == t && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: Mi(n) };
}
function Ji(e, t) {
    var n = Mi(t.value),
        r = Mi(t.defaultValue);
    (null != n &&
        ((n = '' + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = '' + r));
}
function eo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
}
function to(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}
function no(e, t) {
    return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? to(t)
        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
}
var ro,
    ao,
    io =
        ((ao = function (e, t) {
            if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e) e.innerHTML = t;
            else {
                for (
                    (ro = ro || document.createElement('div')).innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                        t = ro.firstChild;
                    e.firstChild;

                )
                    e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
        }),
        'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return ao(e, t);
                  });
              }
            : ao);
function oo(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
    }
    e.textContent = t;
}
var lo = {
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
    uo = ['Webkit', 'ms', 'Moz', 'O'];
function so(e, t, n) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n || 'number' != typeof t || 0 === t || (lo.hasOwnProperty(e) && lo[e])
          ? ('' + t).trim()
          : t + 'px';
}
function co(e, t) {
    for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf('--'),
                a = so(n, t[n], r);
            ('float' === n && (n = 'cssFloat'), r ? e.setProperty(n, a) : (e[n] = a));
        }
}
Object.keys(lo).forEach(function (e) {
    uo.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (lo[t] = lo[e]));
    });
});
var fo = Ti(
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
function po(e, t) {
    if (t) {
        if (fo[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(Ja(137, e));
        if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(Ja(60));
            if ('object' != typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
                throw Error(Ja(61));
        }
        if (null != t.style && 'object' != typeof t.style) throw Error(Ja(62));
    }
}
function ho(e, t) {
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
var vo = null;
function mo(e) {
    return (
        (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
    );
}
var go = null,
    yo = null,
    bo = null;
function _o(e) {
    if ((e = pc(e))) {
        if ('function' != typeof go) throw Error(Ja(280));
        var t = e.stateNode;
        t && ((t = vc(t)), go(e.stateNode, e.type, t));
    }
}
function wo(e) {
    yo ? (bo ? bo.push(e) : (bo = [e])) : (yo = e);
}
function ko() {
    if (yo) {
        var e = yo,
            t = bo;
        if (((bo = yo = null), _o(e), t)) for (e = 0; e < t.length; e++) _o(t[e]);
    }
}
function So(e, t) {
    return e(t);
}
function xo() {}
var Oo = !1;
function Eo(e, t, n) {
    if (Oo) return e(t, n);
    Oo = !0;
    try {
        return So(e, t, n);
    } finally {
        ((Oo = !1), (null !== yo || null !== bo) && (xo(), ko()));
    }
}
function Po(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = vc(n);
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
    if (n && 'function' != typeof n) throw Error(Ja(231, t, typeof n));
    return n;
}
var Co = !1;
if (ai)
    try {
        var Ao = {};
        (Object.defineProperty(Ao, 'passive', {
            get: function () {
                Co = !0;
            },
        }),
            window.addEventListener('test', Ao, Ao),
            window.removeEventListener('test', Ao, Ao));
    } catch (ao) {
        Co = !1;
    }
function No(e, t, n, r, a, i, o, l, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s);
    } catch (c) {
        this.onError(c);
    }
}
var To = !1,
    jo = null,
    Lo = !1,
    Ro = null,
    zo = {
        onError: function (e) {
            ((To = !0), (jo = e));
        },
    };
function Io(e, t, n, r, a, i, o, l, u) {
    ((To = !1), (jo = null), No.apply(zo, arguments));
}
function Do(e) {
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
function Mo(e) {
    if (13 === e.tag) {
        var t = e.memoizedState;
        if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
    }
    return null;
}
function Vo(e) {
    if (Do(e) !== e) throw Error(Ja(188));
}
function Fo(e) {
    return null !==
        (e = (function (e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = Do(e))) throw Error(Ja(188));
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
                        if (i === n) return (Vo(a), e);
                        if (i === r) return (Vo(a), t);
                        i = i.sibling;
                    }
                    throw Error(Ja(188));
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
                        if (!o) throw Error(Ja(189));
                    }
                }
                if (n.alternate !== r) throw Error(Ja(190));
            }
            if (3 !== n.tag) throw Error(Ja(188));
            return n.stateNode.current === n ? e : t;
        })(e))
        ? Uo(e)
        : null;
}
function Uo(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e; ) {
        var t = Uo(e);
        if (null !== t) return t;
        e = e.sibling;
    }
    return null;
}
var Bo = Za.unstable_scheduleCallback,
    $o = Za.unstable_cancelCallback,
    Wo = Za.unstable_shouldYield,
    Ho = Za.unstable_requestPaint,
    Ko = Za.unstable_now,
    qo = Za.unstable_getCurrentPriorityLevel,
    Qo = Za.unstable_ImmediatePriority,
    Go = Za.unstable_UserBlockingPriority,
    Yo = Za.unstable_NormalPriority,
    Xo = Za.unstable_LowPriority,
    Zo = Za.unstable_IdlePriority,
    Jo = null,
    el = null;
var tl = Math.clz32
        ? Math.clz32
        : function (e) {
              return ((e >>>= 0), 0 === e ? 32 : (31 - ((nl(e) / rl) | 0)) | 0);
          },
    nl = Math.log,
    rl = Math.LN2;
var al = 64,
    il = 4194304;
function ol(e) {
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
function ll(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0,
        a = e.suspendedLanes,
        i = e.pingedLanes,
        o = 268435455 & n;
    if (0 !== o) {
        var l = o & ~a;
        0 !== l ? (r = ol(l)) : 0 !== (i &= o) && (r = ol(i));
    } else 0 !== (o = n & ~a) ? (r = ol(o)) : 0 !== i && (r = ol(i));
    if (0 === r) return 0;
    if (0 !== t && t !== r && 0 == (t & a) && ((a = r & -r) >= (i = t & -t) || (16 === a && 0 != (4194240 & i))))
        return t;
    if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; ) ((a = 1 << (n = 31 - tl(t))), (r |= e[n]), (t &= ~a));
    return r;
}
function ul(e, t) {
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
function sl(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
}
function cl() {
    var e = al;
    return (0 == (4194240 & (al <<= 1)) && (al = 64), e);
}
function fl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function dl(e, t, n) {
    ((e.pendingLanes |= t),
        536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        ((e = e.eventTimes)[(t = 31 - tl(t))] = n));
}
function pl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - tl(n),
            a = 1 << r;
        ((a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a));
    }
}
var hl = 0;
function vl(e) {
    return 1 < (e &= -e) ? (4 < e ? (0 != (268435455 & e) ? 16 : 536870912) : 4) : 1;
}
var ml,
    gl,
    yl,
    bl,
    _l,
    wl = !1,
    kl = [],
    Sl = null,
    xl = null,
    Ol = null,
    El = new Map(),
    Pl = new Map(),
    Cl = [],
    Al =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' ',
        );
function Nl(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            Sl = null;
            break;
        case 'dragenter':
        case 'dragleave':
            xl = null;
            break;
        case 'mouseover':
        case 'mouseout':
            Ol = null;
            break;
        case 'pointerover':
        case 'pointerout':
            El.delete(t.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            Pl.delete(t.pointerId);
    }
}
function Tl(e, t, n, r, a, i) {
    return null === e || e.nativeEvent !== i
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }),
          null !== t && null !== (t = pc(t)) && gl(t),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== a && -1 === t.indexOf(a) && t.push(a), e);
}
function jl(e) {
    var t = dc(e.target);
    if (null !== t) {
        var n = Do(t);
        if (null !== n)
            if (13 === (t = n.tag)) {
                if (null !== (t = Mo(n)))
                    return (
                        (e.blockedOn = t),
                        void _l(e.priority, function () {
                            yl(n);
                        })
                    );
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
}
function Ll(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Wl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return (null !== (t = pc(n)) && gl(t), (e.blockedOn = n), !1);
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        ((vo = r), n.target.dispatchEvent(r), (vo = null), t.shift());
    }
    return !0;
}
function Rl(e, t, n) {
    Ll(e) && n.delete(t);
}
function zl() {
    ((wl = !1),
        null !== Sl && Ll(Sl) && (Sl = null),
        null !== xl && Ll(xl) && (xl = null),
        null !== Ol && Ll(Ol) && (Ol = null),
        El.forEach(Rl),
        Pl.forEach(Rl));
}
function Il(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), wl || ((wl = !0), Za.unstable_scheduleCallback(Za.unstable_NormalPriority, zl)));
}
function Dl(e) {
    function t(t) {
        return Il(t, e);
    }
    if (0 < kl.length) {
        Il(kl[0], e);
        for (var n = 1; n < kl.length; n++) {
            var r = kl[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        null !== Sl && Il(Sl, e),
            null !== xl && Il(xl, e),
            null !== Ol && Il(Ol, e),
            El.forEach(t),
            Pl.forEach(t),
            n = 0;
        n < Cl.length;
        n++
    )
        (r = Cl[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < Cl.length && null === (n = Cl[0]).blockedOn; ) (jl(n), null === n.blockedOn && Cl.shift());
}
var Ml = hi.ReactCurrentBatchConfig,
    Vl = !0;
function Fl(e, t, n, r) {
    var a = hl,
        i = Ml.transition;
    Ml.transition = null;
    try {
        ((hl = 1), Bl(e, t, n, r));
    } finally {
        ((hl = a), (Ml.transition = i));
    }
}
function Ul(e, t, n, r) {
    var a = hl,
        i = Ml.transition;
    Ml.transition = null;
    try {
        ((hl = 4), Bl(e, t, n, r));
    } finally {
        ((hl = a), (Ml.transition = i));
    }
}
function Bl(e, t, n, r) {
    if (Vl) {
        var a = Wl(e, t, n, r);
        if (null === a) (Ms(e, t, r, $l, n), Nl(e, r));
        else if (
            (function (e, t, n, r, a) {
                switch (t) {
                    case 'focusin':
                        return ((Sl = Tl(Sl, e, t, n, r, a)), !0);
                    case 'dragenter':
                        return ((xl = Tl(xl, e, t, n, r, a)), !0);
                    case 'mouseover':
                        return ((Ol = Tl(Ol, e, t, n, r, a)), !0);
                    case 'pointerover':
                        var i = a.pointerId;
                        return (El.set(i, Tl(El.get(i) || null, e, t, n, r, a)), !0);
                    case 'gotpointercapture':
                        return ((i = a.pointerId), Pl.set(i, Tl(Pl.get(i) || null, e, t, n, r, a)), !0);
                }
                return !1;
            })(a, e, t, n, r)
        )
            r.stopPropagation();
        else if ((Nl(e, r), 4 & t && -1 < Al.indexOf(e))) {
            for (; null !== a; ) {
                var i = pc(a);
                if ((null !== i && ml(i), null === (i = Wl(e, t, n, r)) && Ms(e, t, r, $l, n), i === a)) break;
                a = i;
            }
            null !== a && r.stopPropagation();
        } else Ms(e, t, r, null, n);
    }
}
var $l = null;
function Wl(e, t, n, r) {
    if ((($l = null), null !== (e = dc((e = mo(r))))))
        if (null === (t = Do(e))) e = null;
        else if (13 === (n = t.tag)) {
            if (null !== (e = Mo(t))) return e;
            e = null;
        } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (($l = e), null);
}
function Hl(e) {
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
            switch (qo()) {
                case Qo:
                    return 1;
                case Go:
                    return 4;
                case Yo:
                case Xo:
                    return 16;
                case Zo:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Kl = null,
    ql = null,
    Ql = null;
function Gl() {
    if (Ql) return Ql;
    var e,
        t,
        n = ql,
        r = n.length,
        a = 'value' in Kl ? Kl.value : Kl.textContent,
        i = a.length;
    for (e = 0; e < r && n[e] === a[e]; e++);
    var o = r - e;
    for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
    return (Ql = a.slice(e, 1 < t ? 1 - t : void 0));
}
function Yl(e) {
    var t = e.keyCode;
    return (
        'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
    );
}
function Xl() {
    return !0;
}
function Zl() {
    return !1;
}
function Jl(e) {
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
                ? Xl
                : Zl),
            (this.isPropagationStopped = Zl),
            this
        );
    }
    return (
        Ti(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                    (e.preventDefault ? e.preventDefault() : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
                    (this.isDefaultPrevented = Xl));
            },
            stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                    (e.stopPropagation
                        ? e.stopPropagation()
                        : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                    (this.isPropagationStopped = Xl));
            },
            persist: function () {},
            isPersistent: Xl,
        }),
        t
    );
}
var eu,
    tu,
    nu,
    ru = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    au = Jl(ru),
    iu = Ti({}, ru, { view: 0, detail: 0 }),
    ou = Jl(iu),
    lu = Ti({}, iu, {
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
        getModifierState: bu,
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
                : (e !== nu &&
                      (nu && 'mousemove' === e.type
                          ? ((eu = e.screenX - nu.screenX), (tu = e.screenY - nu.screenY))
                          : (tu = eu = 0),
                      (nu = e)),
                  eu);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : tu;
        },
    }),
    uu = Jl(lu),
    su = Jl(Ti({}, lu, { dataTransfer: 0 })),
    cu = Jl(Ti({}, iu, { relatedTarget: 0 })),
    fu = Jl(Ti({}, ru, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    du = Ti({}, ru, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    pu = Jl(du),
    hu = Jl(Ti({}, ru, { data: 0 })),
    vu = {
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
    mu = {
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
    gu = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function yu(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = gu[e]) && !!t[e];
}
function bu() {
    return yu;
}
var _u = Ti({}, iu, {
        key: function (e) {
            if (e.key) {
                var t = vu[e.key] || e.key;
                if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
                ? 13 === (e = Yl(e))
                    ? 'Enter'
                    : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? mu[e.keyCode] || 'Unidentified'
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
        getModifierState: bu,
        charCode: function (e) {
            return 'keypress' === e.type ? Yl(e) : 0;
        },
        keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
        which: function (e) {
            return 'keypress' === e.type ? Yl(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
    }),
    wu = Jl(_u),
    ku = Jl(
        Ti({}, lu, {
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
    Su = Jl(
        Ti({}, iu, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: bu,
        }),
    ),
    xu = Jl(Ti({}, ru, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    Ou = Ti({}, lu, {
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
    Eu = Jl(Ou),
    Pu = [9, 13, 27, 32],
    Cu = ai && 'CompositionEvent' in window,
    Au = null;
ai && 'documentMode' in document && (Au = document.documentMode);
var Nu = ai && 'TextEvent' in window && !Au,
    Tu = ai && (!Cu || (Au && 8 < Au && 11 >= Au)),
    ju = String.fromCharCode(32),
    Lu = !1;
function Ru(e, t) {
    switch (e) {
        case 'keyup':
            return -1 !== Pu.indexOf(t.keyCode);
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
function zu(e) {
    return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
}
var Iu = !1;
var Du = {
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
function Mu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return 'input' === t ? !!Du[e.type] : 'textarea' === t;
}
function Vu(e, t, n, r) {
    (wo(r),
        0 < (t = Fs(t, 'onChange')).length &&
            ((n = new au('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
}
var Fu = null,
    Uu = null;
function Bu(e) {
    js(e, 0);
}
function $u(e) {
    if (Ui(hc(e))) return e;
}
function Wu(e, t) {
    if ('change' === e) return t;
}
var Hu = !1;
if (ai) {
    var Ku;
    if (ai) {
        var qu = 'oninput' in document;
        if (!qu) {
            var Qu = document.createElement('div');
            (Qu.setAttribute('oninput', 'return;'), (qu = 'function' == typeof Qu.oninput));
        }
        Ku = qu;
    } else Ku = !1;
    Hu = Ku && (!document.documentMode || 9 < document.documentMode);
}
function Gu() {
    Fu && (Fu.detachEvent('onpropertychange', Yu), (Uu = Fu = null));
}
function Yu(e) {
    if ('value' === e.propertyName && $u(Uu)) {
        var t = [];
        (Vu(t, Uu, e, mo(e)), Eo(Bu, t));
    }
}
function Xu(e, t, n) {
    'focusin' === e ? (Gu(), (Uu = n), (Fu = t).attachEvent('onpropertychange', Yu)) : 'focusout' === e && Gu();
}
function Zu(e) {
    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return $u(Uu);
}
function Ju(e, t) {
    if ('click' === e) return $u(t);
}
function es(e, t) {
    if ('input' === e || 'change' === e) return $u(t);
}
var ts =
    'function' == typeof Object.is
        ? Object.is
        : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
          };
function ns(e, t) {
    if (ts(e, t)) return !0;
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var a = n[r];
        if (!ii.call(t, a) || !ts(e[a], t[a])) return !1;
    }
    return !0;
}
function rs(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function as(e, t) {
    var n,
        r = rs(e);
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
        r = rs(r);
    }
}
function is(e, t) {
    return (
        !(!e || !t) &&
        (e === t ||
            ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                    ? is(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
    );
}
function os() {
    for (var e = window, t = Bi(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = 'string' == typeof t.contentWindow.location.href;
        } catch (r) {
            n = !1;
        }
        if (!n) break;
        t = Bi((e = t.contentWindow).document);
    }
    return t;
}
function ls(e) {
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
function us(e) {
    var t = os(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && is(n.ownerDocument.documentElement, n)) {
        if (null !== r && ls(n))
            if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
            else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
                e = e.getSelection();
                var a = n.textContent.length,
                    i = Math.min(r.start, a);
                ((r = void 0 === r.end ? i : Math.min(r.end, a)),
                    !e.extend && i > r && ((a = r), (r = i), (i = a)),
                    (a = as(n, i)));
                var o = as(n, r);
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
var ss = ai && 'documentMode' in document && 11 >= document.documentMode,
    cs = null,
    fs = null,
    ds = null,
    ps = !1;
function hs(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    ps ||
        null == cs ||
        cs !== Bi(r) ||
        ('selectionStart' in (r = cs) && ls(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                  anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                      .anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              }),
        (ds && ns(ds, r)) ||
            ((ds = r),
            0 < (r = Fs(fs, 'onSelect')).length &&
                ((t = new au('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = cs))));
}
function vs(e, t) {
    var n = {};
    return ((n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n);
}
var ms = {
        animationend: vs('Animation', 'AnimationEnd'),
        animationiteration: vs('Animation', 'AnimationIteration'),
        animationstart: vs('Animation', 'AnimationStart'),
        transitionend: vs('Transition', 'TransitionEnd'),
    },
    gs = {},
    ys = {};
function bs(e) {
    if (gs[e]) return gs[e];
    if (!ms[e]) return e;
    var t,
        n = ms[e];
    for (t in n) if (n.hasOwnProperty(t) && t in ys) return (gs[e] = n[t]);
    return e;
}
ai &&
    ((ys = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete ms.animationend.animation, delete ms.animationiteration.animation, delete ms.animationstart.animation),
    'TransitionEvent' in window || delete ms.transitionend.transition);
var _s = bs('animationend'),
    ws = bs('animationiteration'),
    ks = bs('animationstart'),
    Ss = bs('transitionend'),
    xs = new Map(),
    Os =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' ',
        );
function Es(e, t) {
    (xs.set(e, t), ni(t, [e]));
}
for (var Ps = 0; Ps < Os.length; Ps++) {
    var Cs = Os[Ps];
    Es(Cs.toLowerCase(), 'on' + (Cs[0].toUpperCase() + Cs.slice(1)));
}
(Es(_s, 'onAnimationEnd'),
    Es(ws, 'onAnimationIteration'),
    Es(ks, 'onAnimationStart'),
    Es('dblclick', 'onDoubleClick'),
    Es('focusin', 'onFocus'),
    Es('focusout', 'onBlur'),
    Es(Ss, 'onTransitionEnd'),
    ri('onMouseEnter', ['mouseout', 'mouseover']),
    ri('onMouseLeave', ['mouseout', 'mouseover']),
    ri('onPointerEnter', ['pointerout', 'pointerover']),
    ri('onPointerLeave', ['pointerout', 'pointerover']),
    ni('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    ni('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    ni('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    ni('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    ni('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    ni('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
var As =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' ',
        ),
    Ns = new Set('cancel close invalid load scroll toggle'.split(' ').concat(As));
function Ts(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n),
        (function (e, t, n, r, a, i, o, l, u) {
            if ((Io.apply(this, arguments), To)) {
                if (!To) throw Error(Ja(198));
                var s = jo;
                ((To = !1), (jo = null), Lo || ((Lo = !0), (Ro = s)));
            }
        })(r, t, void 0, e),
        (e.currentTarget = null));
}
function js(e, t) {
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
                    (Ts(a, l, s), (i = u));
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
                    (Ts(a, l, s), (i = u));
                }
        }
    }
    if (Lo) throw ((e = Ro), (Lo = !1), (Ro = null), e);
}
function Ls(e, t) {
    var n = t[sc];
    void 0 === n && (n = t[sc] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Ds(t, e, 2, !1), n.add(r));
}
function Rs(e, t, n) {
    var r = 0;
    (t && (r |= 4), Ds(n, e, r, t));
}
var zs = '_reactListening' + Math.random().toString(36).slice(2);
function Is(e) {
    if (!e[zs]) {
        ((e[zs] = !0),
            ei.forEach(function (t) {
                'selectionchange' !== t && (Ns.has(t) || Rs(t, !1, e), Rs(t, !0, e));
            }));
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[zs] || ((t[zs] = !0), Rs('selectionchange', !1, t));
    }
}
function Ds(e, t, n, r) {
    switch (Hl(t)) {
        case 1:
            var a = Fl;
            break;
        case 4:
            a = Ul;
            break;
        default:
            a = Bl;
    }
    ((n = a.bind(null, t, n, e)),
        (a = void 0),
        !Co || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (a = !0),
        r
            ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
            : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1));
}
function Ms(e, t, n, r, a) {
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
                    if (null === (o = dc(l))) return;
                    if (5 === (u = o.tag) || 6 === u) {
                        r = i = o;
                        continue e;
                    }
                    l = l.parentNode;
                }
            }
            r = r.return;
        }
    Eo(function () {
        var r = i,
            a = mo(n),
            o = [];
        e: {
            var l = xs.get(e);
            if (void 0 !== l) {
                var u = au,
                    s = e;
                switch (e) {
                    case 'keypress':
                        if (0 === Yl(n)) break e;
                    case 'keydown':
                    case 'keyup':
                        u = wu;
                        break;
                    case 'focusin':
                        ((s = 'focus'), (u = cu));
                        break;
                    case 'focusout':
                        ((s = 'blur'), (u = cu));
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        u = cu;
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
                        u = uu;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        u = su;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        u = Su;
                        break;
                    case _s:
                    case ws:
                    case ks:
                        u = fu;
                        break;
                    case Ss:
                        u = xu;
                        break;
                    case 'scroll':
                        u = ou;
                        break;
                    case 'wheel':
                        u = Eu;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        u = pu;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        u = ku;
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
                            ((p = v), null !== d && null != (v = Po(h, d)) && c.push(Vs(h, v, p))),
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
                    n === vo ||
                    !(s = n.relatedTarget || n.fromElement) ||
                    (!dc(s) && !s[uc])) &&
                    (u || l) &&
                    ((l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window),
                    u
                        ? ((u = r),
                          null !== (s = (s = n.relatedTarget || n.toElement) ? dc(s) : null) &&
                              (s !== (f = Do(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                              (s = null))
                        : ((u = null), (s = r)),
                    u !== s))
            ) {
                if (
                    ((c = uu),
                    (v = 'onMouseLeave'),
                    (d = 'onMouseEnter'),
                    (h = 'mouse'),
                    ('pointerout' !== e && 'pointerover' !== e) ||
                        ((c = ku), (v = 'onPointerLeave'), (d = 'onPointerEnter'), (h = 'pointer')),
                    (f = null == u ? l : hc(u)),
                    (p = null == s ? l : hc(s)),
                    ((l = new c(v, h + 'leave', u, n, a)).target = f),
                    (l.relatedTarget = p),
                    (v = null),
                    dc(a) === r && (((c = new c(d, h + 'enter', s, n, a)).target = p), (c.relatedTarget = f), (v = c)),
                    (f = v),
                    u && s)
                )
                    e: {
                        for (d = s, h = 0, p = c = u; p; p = Us(p)) h++;
                        for (p = 0, v = d; v; v = Us(v)) p++;
                        for (; 0 < h - p; ) ((c = Us(c)), h--);
                        for (; 0 < p - h; ) ((d = Us(d)), p--);
                        for (; h--; ) {
                            if (c === d || (null !== d && c === d.alternate)) break e;
                            ((c = Us(c)), (d = Us(d)));
                        }
                        c = null;
                    }
                else c = null;
                (null !== u && Bs(o, l, u, c, !1), null !== s && null !== f && Bs(o, f, s, c, !0));
            }
            if (
                'select' === (u = (l = r ? hc(r) : window).nodeName && l.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === l.type)
            )
                var m = Wu;
            else if (Mu(l))
                if (Hu) m = es;
                else {
                    m = Zu;
                    var g = Xu;
                }
            else
                (u = l.nodeName) &&
                    'input' === u.toLowerCase() &&
                    ('checkbox' === l.type || 'radio' === l.type) &&
                    (m = Ju);
            switch (
                (m && (m = m(e, r))
                    ? Vu(o, m, n, a)
                    : (g && g(e, l, r),
                      'focusout' === e &&
                          (g = l._wrapperState) &&
                          g.controlled &&
                          'number' === l.type &&
                          Qi(l, 'number', l.value)),
                (g = r ? hc(r) : window),
                e)
            ) {
                case 'focusin':
                    (Mu(g) || 'true' === g.contentEditable) && ((cs = g), (fs = r), (ds = null));
                    break;
                case 'focusout':
                    ds = fs = cs = null;
                    break;
                case 'mousedown':
                    ps = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    ((ps = !1), hs(o, n, a));
                    break;
                case 'selectionchange':
                    if (ss) break;
                case 'keydown':
                case 'keyup':
                    hs(o, n, a);
            }
            var y;
            if (Cu)
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
                Iu
                    ? Ru(e, n) && (b = 'onCompositionEnd')
                    : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
            (b &&
                (Tu &&
                    'ko' !== n.locale &&
                    (Iu || 'onCompositionStart' !== b
                        ? 'onCompositionEnd' === b && Iu && (y = Gl())
                        : ((ql = 'value' in (Kl = a) ? Kl.value : Kl.textContent), (Iu = !0))),
                0 < (g = Fs(r, b)).length &&
                    ((b = new hu(b, e, null, n, a)),
                    o.push({ event: b, listeners: g }),
                    y ? (b.data = y) : null !== (y = zu(n)) && (b.data = y))),
                (y = Nu
                    ? (function (e, t) {
                          switch (e) {
                              case 'compositionend':
                                  return zu(t);
                              case 'keypress':
                                  return 32 !== t.which ? null : ((Lu = !0), ju);
                              case 'textInput':
                                  return (e = t.data) === ju && Lu ? null : e;
                              default:
                                  return null;
                          }
                      })(e, n)
                    : (function (e, t) {
                          if (Iu)
                              return 'compositionend' === e || (!Cu && Ru(e, t))
                                  ? ((e = Gl()), (Ql = ql = Kl = null), (Iu = !1), e)
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
                                  return Tu && 'ko' !== t.locale ? null : t.data;
                          }
                      })(e, n)) &&
                    0 < (r = Fs(r, 'onBeforeInput')).length &&
                    ((a = new hu('onBeforeInput', 'beforeinput', null, n, a)),
                    o.push({ event: a, listeners: r }),
                    (a.data = y)));
        }
        js(o, t);
    });
}
function Vs(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Fs(e, t) {
    for (var n = t + 'Capture', r = []; null !== e; ) {
        var a = e,
            i = a.stateNode;
        (5 === a.tag &&
            null !== i &&
            ((a = i), null != (i = Po(e, n)) && r.unshift(Vs(e, i, a)), null != (i = Po(e, t)) && r.push(Vs(e, i, a))),
            (e = e.return));
    }
    return r;
}
function Us(e) {
    if (null === e) return null;
    do {
        e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
}
function Bs(e, t, n, r, a) {
    for (var i = t._reactName, o = []; null !== n && n !== r; ) {
        var l = n,
            u = l.alternate,
            s = l.stateNode;
        if (null !== u && u === r) break;
        (5 === l.tag &&
            null !== s &&
            ((l = s),
            a
                ? null != (u = Po(n, i)) && o.unshift(Vs(n, u, l))
                : a || (null != (u = Po(n, i)) && o.push(Vs(n, u, l)))),
            (n = n.return));
    }
    0 !== o.length && e.push({ event: t, listeners: o });
}
var $s = /\r\n?/g,
    Ws = /\u0000|\uFFFD/g;
function Hs(e) {
    return ('string' == typeof e ? e : '' + e).replace($s, '\n').replace(Ws, '');
}
function Ks(e, t, n) {
    if (((t = Hs(t)), Hs(e) !== t && n)) throw Error(Ja(425));
}
function qs() {}
var Qs = null,
    Gs = null;
function Ys(e, t) {
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
var Xs = 'function' == typeof setTimeout ? setTimeout : void 0,
    Zs = 'function' == typeof clearTimeout ? clearTimeout : void 0,
    Js = 'function' == typeof Promise ? Promise : void 0,
    ec =
        'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== Js
              ? function (e) {
                    return Js.resolve(null).then(e).catch(tc);
                }
              : Xs;
function tc(e) {
    setTimeout(function () {
        throw e;
    });
}
function nc(e, t) {
    var n = t,
        r = 0;
    do {
        var a = n.nextSibling;
        if ((e.removeChild(n), a && 8 === a.nodeType))
            if ('/$' === (n = a.data)) {
                if (0 === r) return (e.removeChild(a), void Dl(t));
                r--;
            } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
        n = a;
    } while (n);
    Dl(t);
}
function rc(e) {
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
function ac(e) {
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
var ic = Math.random().toString(36).slice(2),
    oc = '__reactFiber$' + ic,
    lc = '__reactProps$' + ic,
    uc = '__reactContainer$' + ic,
    sc = '__reactEvents$' + ic,
    cc = '__reactListeners$' + ic,
    fc = '__reactHandles$' + ic;
function dc(e) {
    var t = e[oc];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[uc] || n[oc])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = ac(e); null !== e; ) {
                    if ((n = e[oc])) return n;
                    e = ac(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function pc(e) {
    return !(e = e[oc] || e[uc]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
}
function hc(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(Ja(33));
}
function vc(e) {
    return e[lc] || null;
}
var mc = [],
    gc = -1;
function yc(e) {
    return { current: e };
}
function bc(e) {
    0 > gc || ((e.current = mc[gc]), (mc[gc] = null), gc--);
}
function _c(e, t) {
    (gc++, (mc[gc] = e.current), (e.current = t));
}
var wc = {},
    kc = yc(wc),
    Sc = yc(!1),
    xc = wc;
function Oc(e, t) {
    var n = e.type.contextTypes;
    if (!n) return wc;
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
function Ec(e) {
    return null != (e = e.childContextTypes);
}
function Pc() {
    (bc(Sc), bc(kc));
}
function Cc(e, t, n) {
    if (kc.current !== wc) throw Error(Ja(168));
    (_c(kc, t), _c(Sc, n));
}
function Ac(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
    for (var a in (r = r.getChildContext())) if (!(a in t)) throw Error(Ja(108, Di(e) || 'Unknown', a));
    return Ti({}, n, r);
}
function Nc(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wc),
        (xc = kc.current),
        _c(kc, e),
        _c(Sc, Sc.current),
        !0
    );
}
function Tc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(Ja(169));
    (n ? ((e = Ac(e, t, xc)), (r.__reactInternalMemoizedMergedChildContext = e), bc(Sc), bc(kc), _c(kc, e)) : bc(Sc),
        _c(Sc, n));
}
var jc = null,
    Lc = !1,
    Rc = !1;
function zc(e) {
    null === jc ? (jc = [e]) : jc.push(e);
}
function Ic() {
    if (!Rc && null !== jc) {
        Rc = !0;
        var e = 0,
            t = hl;
        try {
            var n = jc;
            for (hl = 1; e < n.length; e++) {
                var r = n[e];
                do {
                    r = r(!0);
                } while (null !== r);
            }
            ((jc = null), (Lc = !1));
        } catch (a) {
            throw (null !== jc && (jc = jc.slice(e + 1)), Bo(Qo, Ic), a);
        } finally {
            ((hl = t), (Rc = !1));
        }
    }
    return null;
}
var Dc = [],
    Mc = 0,
    Vc = null,
    Fc = 0,
    Uc = [],
    Bc = 0,
    $c = null,
    Wc = 1,
    Hc = '';
function Kc(e, t) {
    ((Dc[Mc++] = Fc), (Dc[Mc++] = Vc), (Vc = e), (Fc = t));
}
function qc(e, t, n) {
    ((Uc[Bc++] = Wc), (Uc[Bc++] = Hc), (Uc[Bc++] = $c), ($c = e));
    var r = Wc;
    e = Hc;
    var a = 32 - tl(r) - 1;
    ((r &= ~(1 << a)), (n += 1));
    var i = 32 - tl(t) + a;
    if (30 < i) {
        var o = a - (a % 5);
        ((i = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (a -= o),
            (Wc = (1 << (32 - tl(t) + a)) | (n << a) | r),
            (Hc = i + e));
    } else ((Wc = (1 << i) | (n << a) | r), (Hc = e));
}
function Qc(e) {
    null !== e.return && (Kc(e, 1), qc(e, 1, 0));
}
function Gc(e) {
    for (; e === Vc; ) ((Vc = Dc[--Mc]), (Dc[Mc] = null), (Fc = Dc[--Mc]), (Dc[Mc] = null));
    for (; e === $c; )
        (($c = Uc[--Bc]), (Uc[Bc] = null), (Hc = Uc[--Bc]), (Uc[Bc] = null), (Wc = Uc[--Bc]), (Uc[Bc] = null));
}
var Yc = null,
    Xc = null,
    Zc = !1,
    Jc = null;
function ef(e, t) {
    var n = Ov(5, null, null, 0);
    ((n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function tf(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (Yc = e), (Xc = rc(t.firstChild)), !0)
            );
        case 6:
            return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (Yc = e), (Xc = null), !0)
            );
        case 13:
            return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== $c ? { id: Wc, overflow: Hc } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = Ov(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (Yc = e),
                (Xc = null),
                !0)
            );
        default:
            return !1;
    }
}
function nf(e) {
    return 0 != (1 & e.mode) && 0 == (128 & e.flags);
}
function rf(e) {
    if (Zc) {
        var t = Xc;
        if (t) {
            var n = t;
            if (!tf(e, t)) {
                if (nf(e)) throw Error(Ja(418));
                t = rc(n.nextSibling);
                var r = Yc;
                t && tf(e, t) ? ef(r, n) : ((e.flags = (-4097 & e.flags) | 2), (Zc = !1), (Yc = e));
            }
        } else {
            if (nf(e)) throw Error(Ja(418));
            ((e.flags = (-4097 & e.flags) | 2), (Zc = !1), (Yc = e));
        }
    }
}
function af(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
    Yc = e;
}
function of(e) {
    if (e !== Yc) return !1;
    if (!Zc) return (af(e), (Zc = !0), !1);
    var t;
    if (
        ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = 'head' !== (t = e.type) && 'body' !== t && !Ys(e.type, e.memoizedProps)),
        t && (t = Xc))
    ) {
        if (nf(e)) throw (lf(), Error(Ja(418)));
        for (; t; ) (ef(e, t), (t = rc(t.nextSibling)));
    }
    if ((af(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(Ja(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ('/$' === n) {
                        if (0 === t) {
                            Xc = rc(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
            }
            Xc = null;
        }
    } else Xc = Yc ? rc(e.stateNode.nextSibling) : null;
    return !0;
}
function lf() {
    for (var e = Xc; e; ) e = rc(e.nextSibling);
}
function uf() {
    ((Xc = Yc = null), (Zc = !1));
}
function sf(e) {
    null === Jc ? (Jc = [e]) : Jc.push(e);
}
var cf = hi.ReactCurrentBatchConfig;
function ff(e, t, n) {
    if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
        if (n._owner) {
            if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(Ja(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(Ja(147, e));
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
        if ('string' != typeof e) throw Error(Ja(284));
        if (!n._owner) throw Error(Ja(290, e));
    }
    return e;
}
function df(e, t) {
    throw (
        (e = Object.prototype.toString.call(t)),
        Error(Ja(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e))
    );
}
function pf(e) {
    return (0, e._init)(e._payload);
}
function hf(e) {
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
        return (((e = Pv(e, t)).index = 0), (e.sibling = null), e);
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
        return null === t || 6 !== t.tag ? (((t = Tv(n, e.mode, r)).return = e), t) : (((t = a(t, n)).return = e), t);
    }
    function u(e, t, n, r) {
        var i = n.type;
        return i === gi
            ? c(e, t, n.props.children, r, n.key)
            : null !== t &&
                (t.elementType === i || ('object' == typeof i && null !== i && i.$$typeof === Ei && pf(i) === t.type))
              ? (((r = a(t, n.props)).ref = ff(e, t, n)), (r.return = e), r)
              : (((r = Cv(n.type, n.key, n.props, null, e.mode, r)).ref = ff(e, t, n)), (r.return = e), r);
    }
    function s(e, t, n, r) {
        return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = jv(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
    }
    function c(e, t, n, r, i) {
        return null === t || 7 !== t.tag
            ? (((t = Av(n, e.mode, r, i)).return = e), t)
            : (((t = a(t, n)).return = e), t);
    }
    function f(e, t, n) {
        if (('string' == typeof t && '' !== t) || 'number' == typeof t)
            return (((t = Tv('' + t, e.mode, n)).return = e), t);
        if ('object' == typeof t && null !== t) {
            switch (t.$$typeof) {
                case vi:
                    return (
                        ((n = Cv(t.type, t.key, t.props, null, e.mode, n)).ref = ff(e, null, t)),
                        (n.return = e),
                        n
                    );
                case mi:
                    return (((t = jv(t, e.mode, n)).return = e), t);
                case Ei:
                    return f(e, (0, t._init)(t._payload), n);
            }
            if (Gi(t) || Ai(t)) return (((t = Av(t, e.mode, n, null)).return = e), t);
            df(e, t);
        }
        return null;
    }
    function d(e, t, n, r) {
        var a = null !== t ? t.key : null;
        if (('string' == typeof n && '' !== n) || 'number' == typeof n) return null !== a ? null : l(e, t, '' + n, r);
        if ('object' == typeof n && null !== n) {
            switch (n.$$typeof) {
                case vi:
                    return n.key === a ? u(e, t, n, r) : null;
                case mi:
                    return n.key === a ? s(e, t, n, r) : null;
                case Ei:
                    return d(e, t, (a = n._init)(n._payload), r);
            }
            if (Gi(n) || Ai(n)) return null !== a ? null : c(e, t, n, r, null);
            df(e, n);
        }
        return null;
    }
    function p(e, t, n, r, a) {
        if (('string' == typeof r && '' !== r) || 'number' == typeof r) return l(t, (e = e.get(n) || null), '' + r, a);
        if ('object' == typeof r && null !== r) {
            switch (r.$$typeof) {
                case vi:
                    return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case mi:
                    return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case Ei:
                    return p(e, t, n, (0, r._init)(r._payload), a);
            }
            if (Gi(r) || Ai(r)) return c(t, (e = e.get(n) || null), r, a, null);
            df(t, r);
        }
        return null;
    }
    return function l(u, s, c, h) {
        if (
            ('object' == typeof c && null !== c && c.type === gi && null === c.key && (c = c.props.children),
            'object' == typeof c && null !== c)
        ) {
            switch (c.$$typeof) {
                case vi:
                    e: {
                        for (var v = c.key, m = s; null !== m; ) {
                            if (m.key === v) {
                                if ((v = c.type) === gi) {
                                    if (7 === m.tag) {
                                        (n(u, m.sibling), ((s = a(m, c.props.children)).return = u), (u = s));
                                        break e;
                                    }
                                } else if (
                                    m.elementType === v ||
                                    ('object' == typeof v && null !== v && v.$$typeof === Ei && pf(v) === m.type)
                                ) {
                                    (n(u, m.sibling), ((s = a(m, c.props)).ref = ff(u, m, c)), (s.return = u), (u = s));
                                    break e;
                                }
                                n(u, m);
                                break;
                            }
                            (t(u, m), (m = m.sibling));
                        }
                        c.type === gi
                            ? (((s = Av(c.props.children, u.mode, h, c.key)).return = u), (u = s))
                            : (((h = Cv(c.type, c.key, c.props, null, u.mode, h)).ref = ff(u, s, c)),
                              (h.return = u),
                              (u = h));
                    }
                    return o(u);
                case mi:
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
                        (((s = jv(c, u.mode, h)).return = u), (u = s));
                    }
                    return o(u);
                case Ei:
                    return l(u, s, (m = c._init)(c._payload), h);
            }
            if (Gi(c))
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
                    if (v === l.length) return (n(a, h), Zc && Kc(a, v), s);
                    if (null === h) {
                        for (; v < l.length; v++)
                            null !== (h = f(a, l[v], u)) &&
                                ((o = i(h, o, v)), null === c ? (s = h) : (c.sibling = h), (c = h));
                        return (Zc && Kc(a, v), s);
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
                        Zc && Kc(a, v),
                        s
                    );
                })(u, s, c, h);
            if (Ai(c))
                return (function (a, o, l, u) {
                    var s = Ai(l);
                    if ('function' != typeof s) throw Error(Ja(150));
                    if (null == (l = s.call(l))) throw Error(Ja(151));
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
                    if (g.done) return (n(a, h), Zc && Kc(a, v), s);
                    if (null === h) {
                        for (; !g.done; v++, g = l.next())
                            null !== (g = f(a, g.value, u)) &&
                                ((o = i(g, o, v)), null === c ? (s = g) : (c.sibling = g), (c = g));
                        return (Zc && Kc(a, v), s);
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
                        Zc && Kc(a, v),
                        s
                    );
                })(u, s, c, h);
            df(u, c);
        }
        return ('string' == typeof c && '' !== c) || 'number' == typeof c
            ? ((c = '' + c),
              null !== s && 6 === s.tag
                  ? (n(u, s.sibling), ((s = a(s, c)).return = u), (u = s))
                  : (n(u, s), ((s = Tv(c, u.mode, h)).return = u), (u = s)),
              o(u))
            : n(u, s);
    };
}
var vf = hf(!0),
    mf = hf(!1),
    gf = yc(null),
    yf = null,
    bf = null,
    _f = null;
function wf() {
    _f = bf = yf = null;
}
function kf(e) {
    var t = gf.current;
    (bc(gf), (e._currentValue = t));
}
function Sf(e, t, n) {
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
function xf(e, t) {
    ((yf = e),
        (_f = bf = null),
        null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (pp = !0), (e.firstContext = null)));
}
function Of(e) {
    var t = e._currentValue;
    if (_f !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), null === bf)) {
            if (null === yf) throw Error(Ja(308));
            ((bf = e), (yf.dependencies = { lanes: 0, firstContext: e }));
        } else bf = bf.next = e;
    return t;
}
var Ef = null;
function Pf(e) {
    null === Ef ? (Ef = [e]) : Ef.push(e);
}
function Cf(e, t, n, r) {
    var a = t.interleaved;
    return (null === a ? ((n.next = n), Pf(t)) : ((n.next = a.next), (a.next = n)), (t.interleaved = n), Af(e, r));
}
function Af(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        ((e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return));
    return 3 === n.tag ? n.stateNode : null;
}
var Nf = !1;
function Tf(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function jf(e, t) {
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
function Lf(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Rf(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 0 != (2 & kh))) {
        var a = r.pending;
        return (null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)), (r.pending = t), Af(e, n));
    }
    return (
        null === (a = r.interleaved) ? ((t.next = t), Pf(r)) : ((t.next = a.next), (a.next = t)),
        (r.interleaved = t),
        Af(e, n)
    );
}
function zf(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), pl(e, n));
    }
}
function If(e, t) {
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
function Df(e, t, n, r) {
    var a = e.updateQueue;
    Nf = !1;
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
                            f = Ti({}, f, d);
                            break e;
                        case 2:
                            Nf = !0;
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
        ((Nh |= o), (e.lanes = o), (e.memoizedState = f));
    }
}
function Mf(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                a = r.callback;
            if (null !== a) {
                if (((r.callback = null), (r = n), 'function' != typeof a)) throw Error(Ja(191, a));
                a.call(r);
            }
        }
}
var Vf = {},
    Ff = yc(Vf),
    Uf = yc(Vf),
    Bf = yc(Vf);
function $f(e) {
    if (e === Vf) throw Error(Ja(174));
    return e;
}
function Wf(e, t) {
    switch ((_c(Bf, t), _c(Uf, e), _c(Ff, Vf), (e = t.nodeType))) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : no(null, '');
            break;
        default:
            t = no((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
    }
    (bc(Ff), _c(Ff, t));
}
function Hf() {
    (bc(Ff), bc(Uf), bc(Bf));
}
function Kf(e) {
    $f(Bf.current);
    var t = $f(Ff.current),
        n = no(t, e.type);
    t !== n && (_c(Uf, e), _c(Ff, n));
}
function qf(e) {
    Uf.current === e && (bc(Ff), bc(Uf));
}
var Qf = yc(0);
function Gf(e) {
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
var Yf = [];
function Xf() {
    for (var e = 0; e < Yf.length; e++) Yf[e]._workInProgressVersionPrimary = null;
    Yf.length = 0;
}
var Zf = hi.ReactCurrentDispatcher,
    Jf = hi.ReactCurrentBatchConfig,
    ed = 0,
    td = null,
    nd = null,
    rd = null,
    ad = !1,
    id = !1,
    od = 0,
    ld = 0;
function ud() {
    throw Error(Ja(321));
}
function sd(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ts(e[n], t[n])) return !1;
    return !0;
}
function cd(e, t, n, r, a, i) {
    if (
        ((ed = i),
        (td = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Zf.current = null === e || null === e.memoizedState ? qd : Qd),
        (e = n(r, a)),
        id)
    ) {
        i = 0;
        do {
            if (((id = !1), (od = 0), 25 <= i)) throw Error(Ja(301));
            ((i += 1), (rd = nd = null), (t.updateQueue = null), (Zf.current = Gd), (e = n(r, a)));
        } while (id);
    }
    if (((Zf.current = Kd), (t = null !== nd && null !== nd.next), (ed = 0), (rd = nd = td = null), (ad = !1), t))
        throw Error(Ja(300));
    return e;
}
function fd() {
    var e = 0 !== od;
    return ((od = 0), e);
}
function dd() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (null === rd ? (td.memoizedState = rd = e) : (rd = rd.next = e), rd);
}
function pd() {
    if (null === nd) {
        var e = td.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = nd.next;
    var t = null === rd ? td.memoizedState : rd.next;
    if (null !== t) ((rd = t), (nd = e));
    else {
        if (null === e) throw Error(Ja(310));
        ((e = {
            memoizedState: (nd = e).memoizedState,
            baseState: nd.baseState,
            baseQueue: nd.baseQueue,
            queue: nd.queue,
            next: null,
        }),
            null === rd ? (td.memoizedState = rd = e) : (rd = rd.next = e));
    }
    return rd;
}
function hd(e, t) {
    return 'function' == typeof t ? t(e) : t;
}
function vd(e) {
    var t = pd(),
        n = t.queue;
    if (null === n) throw Error(Ja(311));
    n.lastRenderedReducer = e;
    var r = nd,
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
            if ((ed & c) === c)
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
                (null === u ? ((l = u = f), (o = r)) : (u = u.next = f), (td.lanes |= c), (Nh |= c));
            }
            s = s.next;
        } while (null !== s && s !== i);
        (null === u ? (o = r) : (u.next = l),
            ts(r, t.memoizedState) || (pp = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = u),
            (n.lastRenderedState = r));
    }
    if (null !== (e = n.interleaved)) {
        a = e;
        do {
            ((i = a.lane), (td.lanes |= i), (Nh |= i), (a = a.next));
        } while (a !== e);
    } else null === a && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function md(e) {
    var t = pd(),
        n = t.queue;
    if (null === n) throw Error(Ja(311));
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
        (ts(i, t.memoizedState) || (pp = !0),
            (t.memoizedState = i),
            null === t.baseQueue && (t.baseState = i),
            (n.lastRenderedState = i));
    }
    return [i, r];
}
function gd() {}
function yd(e, t) {
    var n = td,
        r = pd(),
        a = t(),
        i = !ts(r.memoizedState, a);
    if (
        (i && ((r.memoizedState = a), (pp = !0)),
        (r = r.queue),
        Nd(wd.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (null !== rd && 1 & rd.memoizedState.tag))
    ) {
        if (((n.flags |= 2048), Od(9, _d.bind(null, n, r, a, t), void 0, null), null === Sh)) throw Error(Ja(349));
        0 != (30 & ed) || bd(n, t, a);
    }
    return a;
}
function bd(e, t, n) {
    ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = td.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (td.updateQueue = t), (t.stores = [e]))
            : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e));
}
function _d(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), kd(t) && Sd(e));
}
function wd(e, t, n) {
    return n(function () {
        kd(t) && Sd(e);
    });
}
function kd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !ts(e, n);
    } catch (r) {
        return !0;
    }
}
function Sd(e) {
    var t = Af(e, 1);
    null !== t && Yh(t, e, 1, -1);
}
function xd(e) {
    var t = dd();
    return (
        'function' == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: hd,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Bd.bind(null, td, e)),
        [t.memoizedState, e]
    );
}
function Od(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = td.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (td.updateQueue = t), (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
    );
}
function Ed() {
    return pd().memoizedState;
}
function Pd(e, t, n, r) {
    var a = dd();
    ((td.flags |= e), (a.memoizedState = Od(1 | t, n, void 0, void 0 === r ? null : r)));
}
function Cd(e, t, n, r) {
    var a = pd();
    r = void 0 === r ? null : r;
    var i = void 0;
    if (null !== nd) {
        var o = nd.memoizedState;
        if (((i = o.destroy), null !== r && sd(r, o.deps))) return void (a.memoizedState = Od(t, n, i, r));
    }
    ((td.flags |= e), (a.memoizedState = Od(1 | t, n, i, r)));
}
function Ad(e, t) {
    return Pd(8390656, 8, e, t);
}
function Nd(e, t) {
    return Cd(2048, 8, e, t);
}
function Td(e, t) {
    return Cd(4, 2, e, t);
}
function jd(e, t) {
    return Cd(4, 4, e, t);
}
function Ld(e, t) {
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
function Rd(e, t, n) {
    return ((n = null != n ? n.concat([e]) : null), Cd(4, 4, Ld.bind(null, t, e), n));
}
function zd() {}
function Id(e, t) {
    var n = pd();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && sd(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Dd(e, t) {
    var n = pd();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && sd(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Md(e, t, n) {
    return 0 == (21 & ed)
        ? (e.baseState && ((e.baseState = !1), (pp = !0)), (e.memoizedState = n))
        : (ts(n, t) || ((n = cl()), (td.lanes |= n), (Nh |= n), (e.baseState = !0)), t);
}
function Vd(e, t) {
    var n = hl;
    ((hl = 0 !== n && 4 > n ? n : 4), e(!0));
    var r = Jf.transition;
    Jf.transition = {};
    try {
        (e(!1), t());
    } finally {
        ((hl = n), (Jf.transition = r));
    }
}
function Fd() {
    return pd().memoizedState;
}
function Ud(e, t, n) {
    var r = Gh(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), $d(e))) Wd(t, n);
    else if (null !== (n = Cf(e, t, n, r))) {
        (Yh(n, e, r, Qh()), Hd(n, t, r));
    }
}
function Bd(e, t, n) {
    var r = Gh(e),
        a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if ($d(e)) Wd(t, a);
    else {
        var i = e.alternate;
        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer))
            try {
                var o = t.lastRenderedState,
                    l = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), ts(l, o))) {
                    var u = t.interleaved;
                    return (
                        null === u ? ((a.next = a), Pf(t)) : ((a.next = u.next), (u.next = a)),
                        void (t.interleaved = a)
                    );
                }
            } catch (s) {}
        null !== (n = Cf(e, t, a, r)) && (Yh(n, e, r, (a = Qh())), Hd(n, t, r));
    }
}
function $d(e) {
    var t = e.alternate;
    return e === td || (null !== t && t === td);
}
function Wd(e, t) {
    id = ad = !0;
    var n = e.pending;
    (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
}
function Hd(e, t, n) {
    if (0 != (4194240 & n)) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), pl(e, n));
    }
}
var Kd = {
        readContext: Of,
        useCallback: ud,
        useContext: ud,
        useEffect: ud,
        useImperativeHandle: ud,
        useInsertionEffect: ud,
        useLayoutEffect: ud,
        useMemo: ud,
        useReducer: ud,
        useRef: ud,
        useState: ud,
        useDebugValue: ud,
        useDeferredValue: ud,
        useTransition: ud,
        useMutableSource: ud,
        useSyncExternalStore: ud,
        useId: ud,
        unstable_isNewReconciler: !1,
    },
    qd = {
        readContext: Of,
        useCallback: function (e, t) {
            return ((dd().memoizedState = [e, void 0 === t ? null : t]), e);
        },
        useContext: Of,
        useEffect: Ad,
        useImperativeHandle: function (e, t, n) {
            return ((n = null != n ? n.concat([e]) : null), Pd(4194308, 4, Ld.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
            return Pd(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Pd(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = dd();
            return ((t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
        },
        useReducer: function (e, t, n) {
            var r = dd();
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
                (e = e.dispatch = Ud.bind(null, td, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            return ((e = { current: e }), (dd().memoizedState = e));
        },
        useState: xd,
        useDebugValue: zd,
        useDeferredValue: function (e) {
            return (dd().memoizedState = e);
        },
        useTransition: function () {
            var e = xd(!1),
                t = e[0];
            return ((e = Vd.bind(null, e[1])), (dd().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = td,
                a = dd();
            if (Zc) {
                if (void 0 === n) throw Error(Ja(407));
                n = n();
            } else {
                if (((n = t()), null === Sh)) throw Error(Ja(349));
                0 != (30 & ed) || bd(r, t, n);
            }
            a.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
                (a.queue = i),
                Ad(wd.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Od(9, _d.bind(null, r, i, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = dd(),
                t = Sh.identifierPrefix;
            if (Zc) {
                var n = Hc;
                ((t = ':' + t + 'R' + (n = (Wc & ~(1 << (32 - tl(Wc) - 1))).toString(32) + n)),
                    0 < (n = od++) && (t += 'H' + n.toString(32)),
                    (t += ':'));
            } else t = ':' + t + 'r' + (n = ld++).toString(32) + ':';
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Qd = {
        readContext: Of,
        useCallback: Id,
        useContext: Of,
        useEffect: Nd,
        useImperativeHandle: Rd,
        useInsertionEffect: Td,
        useLayoutEffect: jd,
        useMemo: Dd,
        useReducer: vd,
        useRef: Ed,
        useState: function () {
            return vd(hd);
        },
        useDebugValue: zd,
        useDeferredValue: function (e) {
            return Md(pd(), nd.memoizedState, e);
        },
        useTransition: function () {
            return [vd(hd)[0], pd().memoizedState];
        },
        useMutableSource: gd,
        useSyncExternalStore: yd,
        useId: Fd,
        unstable_isNewReconciler: !1,
    },
    Gd = {
        readContext: Of,
        useCallback: Id,
        useContext: Of,
        useEffect: Nd,
        useImperativeHandle: Rd,
        useInsertionEffect: Td,
        useLayoutEffect: jd,
        useMemo: Dd,
        useReducer: md,
        useRef: Ed,
        useState: function () {
            return md(hd);
        },
        useDebugValue: zd,
        useDeferredValue: function (e) {
            var t = pd();
            return null === nd ? (t.memoizedState = e) : Md(t, nd.memoizedState, e);
        },
        useTransition: function () {
            return [md(hd)[0], pd().memoizedState];
        },
        useMutableSource: gd,
        useSyncExternalStore: yd,
        useId: Fd,
        unstable_isNewReconciler: !1,
    };
function Yd(e, t) {
    if (e && e.defaultProps) {
        for (var n in ((t = Ti({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
    }
    return t;
}
function Xd(e, t, n, r) {
    ((n = null == (n = n(r, (t = e.memoizedState))) ? t : Ti({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n));
}
var Zd = {
    isMounted: function (e) {
        return !!(e = e._reactInternals) && Do(e) === e;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Qh(),
            a = Gh(e),
            i = Lf(r, a);
        ((i.payload = t), null != n && (i.callback = n), null !== (t = Rf(e, i, a)) && (Yh(t, e, a, r), zf(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Qh(),
            a = Gh(e),
            i = Lf(r, a);
        ((i.tag = 1),
            (i.payload = t),
            null != n && (i.callback = n),
            null !== (t = Rf(e, i, a)) && (Yh(t, e, a, r), zf(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Qh(),
            r = Gh(e),
            a = Lf(n, r);
        ((a.tag = 2), null != t && (a.callback = t), null !== (t = Rf(e, a, r)) && (Yh(t, e, r, n), zf(t, e, r)));
    },
};
function Jd(e, t, n, r, a, i, o) {
    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, i, o)
        : !t.prototype || !t.prototype.isPureReactComponent || !ns(n, r) || !ns(a, i);
}
function ep(e, t, n) {
    var r = !1,
        a = wc,
        i = t.contextType;
    return (
        'object' == typeof i && null !== i
            ? (i = Of(i))
            : ((a = Ec(t) ? xc : kc.current), (i = (r = null != (r = t.contextTypes)) ? Oc(e, a) : wc)),
        (t = new t(n, i)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = Zd),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    );
}
function tp(e, t, n, r) {
    ((e = t.state),
        'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Zd.enqueueReplaceState(t, t.state, null));
}
function np(e, t, n, r) {
    var a = e.stateNode;
    ((a.props = n), (a.state = e.memoizedState), (a.refs = {}), Tf(e));
    var i = t.contextType;
    ('object' == typeof i && null !== i ? (a.context = Of(i)) : ((i = Ec(t) ? xc : kc.current), (a.context = Oc(e, i))),
        (a.state = e.memoizedState),
        'function' == typeof (i = t.getDerivedStateFromProps) && (Xd(e, t, i, n), (a.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof a.getSnapshotBeforeUpdate ||
            ('function' != typeof a.UNSAFE_componentWillMount && 'function' != typeof a.componentWillMount) ||
            ((t = a.state),
            'function' == typeof a.componentWillMount && a.componentWillMount(),
            'function' == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
            t !== a.state && Zd.enqueueReplaceState(a, a.state, null),
            Df(e, n, a, r),
            (a.state = e.memoizedState)),
        'function' == typeof a.componentDidMount && (e.flags |= 4194308));
}
function rp(e, t) {
    try {
        var n = '',
            r = t;
        do {
            ((n += zi(r)), (r = r.return));
        } while (r);
        var a = n;
    } catch (i) {
        a = '\nError generating stack: ' + i.message + '\n' + i.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
}
function ap(e, t, n) {
    return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null };
}
function ip(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var op = 'function' == typeof WeakMap ? WeakMap : Map;
function lp(e, t, n) {
    (((n = Lf(-1, n)).tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
        (n.callback = function () {
            (Mh || ((Mh = !0), (Vh = r)), ip(0, t));
        }),
        n
    );
}
function up(e, t, n) {
    (n = Lf(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ('function' == typeof r) {
        var a = t.value;
        ((n.payload = function () {
            return r(a);
        }),
            (n.callback = function () {
                ip(0, t);
            }));
    }
    var i = e.stateNode;
    return (
        null !== i &&
            'function' == typeof i.componentDidCatch &&
            (n.callback = function () {
                (ip(0, t), 'function' != typeof r && (null === Fh ? (Fh = new Set([this])) : Fh.add(this)));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
            }),
        n
    );
}
function sp(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new op();
        var a = new Set();
        r.set(t, a);
    } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
    a.has(n) || (a.add(n), (e = bv.bind(null, e, t, n)), t.then(e, e));
}
function cp(e) {
    do {
        var t;
        if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e;
        e = e.return;
    } while (null !== e);
    return null;
}
function fp(e, t, n, r, a) {
    return 0 == (1 & e.mode)
        ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                1 === n.tag && (null === n.alternate ? (n.tag = 17) : (((t = Lf(-1, 1)).tag = 2), Rf(n, t, 1))),
                (n.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = a), e);
}
var dp = hi.ReactCurrentOwner,
    pp = !1;
function hp(e, t, n, r) {
    t.child = null === e ? mf(t, null, n, r) : vf(t, e.child, n, r);
}
function vp(e, t, n, r, a) {
    n = n.render;
    var i = t.ref;
    return (
        xf(t, a),
        (r = cd(e, t, n, r, i, a)),
        (n = fd()),
        null === e || pp
            ? (Zc && n && Qc(t), (t.flags |= 1), hp(e, t, r, a), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Mp(e, t, a))
    );
}
function mp(e, t, n, r, a) {
    if (null === e) {
        var i = n.type;
        return 'function' != typeof i ||
            Ev(i) ||
            void 0 !== i.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Cv(n.type, null, r, t, t.mode, a)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = i), gp(e, t, i, r, a));
    }
    if (((i = e.child), 0 == (e.lanes & a))) {
        var o = i.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : ns)(o, r) && e.ref === t.ref) return Mp(e, t, a);
    }
    return ((t.flags |= 1), ((e = Pv(i, r)).ref = t.ref), (e.return = t), (t.child = e));
}
function gp(e, t, n, r, a) {
    if (null !== e) {
        var i = e.memoizedProps;
        if (ns(i, r) && e.ref === t.ref) {
            if (((pp = !1), (t.pendingProps = r = i), 0 == (e.lanes & a))) return ((t.lanes = e.lanes), Mp(e, t, a));
            0 != (131072 & e.flags) && (pp = !0);
        }
    }
    return _p(e, t, n, r, a);
}
function yp(e, t, n) {
    var r = t.pendingProps,
        a = r.children,
        i = null !== e ? e.memoizedState : null;
    if ('hidden' === r.mode)
        if (0 == (1 & t.mode))
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), _c(Ph, Eh), (Eh |= n));
        else {
            if (0 == (1073741824 & n))
                return (
                    (e = null !== i ? i.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    _c(Ph, Eh),
                    (Eh |= e),
                    null
                );
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== i ? i.baseLanes : n),
                _c(Ph, Eh),
                (Eh |= r));
        }
    else (null !== i ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), _c(Ph, Eh), (Eh |= r));
    return (hp(e, t, a, n), t.child);
}
function bp(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function _p(e, t, n, r, a) {
    var i = Ec(n) ? xc : kc.current;
    return (
        (i = Oc(t, i)),
        xf(t, a),
        (n = cd(e, t, n, r, i, a)),
        (r = fd()),
        null === e || pp
            ? (Zc && r && Qc(t), (t.flags |= 1), hp(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Mp(e, t, a))
    );
}
function wp(e, t, n, r, a) {
    if (Ec(n)) {
        var i = !0;
        Nc(t);
    } else i = !1;
    if ((xf(t, a), null === t.stateNode)) (Dp(e, t), ep(t, n, r), np(t, n, r, a), (r = !0));
    else if (null === e) {
        var o = t.stateNode,
            l = t.memoizedProps;
        o.props = l;
        var u = o.context,
            s = n.contextType;
        'object' == typeof s && null !== s ? (s = Of(s)) : (s = Oc(t, (s = Ec(n) ? xc : kc.current)));
        var c = n.getDerivedStateFromProps,
            f = 'function' == typeof c || 'function' == typeof o.getSnapshotBeforeUpdate;
        (f ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((l !== r || u !== s) && tp(t, o, r, s)),
            (Nf = !1));
        var d = t.memoizedState;
        ((o.state = d),
            Df(t, r, o, a),
            (u = t.memoizedState),
            l !== r || d !== u || Sc.current || Nf
                ? ('function' == typeof c && (Xd(t, n, c, r), (u = t.memoizedState)),
                  (l = Nf || Jd(t, n, l, r, d, u, s))
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
            jf(e, t),
            (l = t.memoizedProps),
            (s = t.type === t.elementType ? l : Yd(t.type, l)),
            (o.props = s),
            (f = t.pendingProps),
            (d = o.context),
            'object' == typeof (u = n.contextType) && null !== u
                ? (u = Of(u))
                : (u = Oc(t, (u = Ec(n) ? xc : kc.current))));
        var p = n.getDerivedStateFromProps;
        ((c = 'function' == typeof p || 'function' == typeof o.getSnapshotBeforeUpdate) ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((l !== f || d !== u) && tp(t, o, r, u)),
            (Nf = !1),
            (d = t.memoizedState),
            (o.state = d),
            Df(t, r, o, a));
        var h = t.memoizedState;
        l !== f || d !== h || Sc.current || Nf
            ? ('function' == typeof p && (Xd(t, n, p, r), (h = t.memoizedState)),
              (s = Nf || Jd(t, n, s, r, d, h, u) || !1)
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
    return kp(e, t, n, r, i, a);
}
function kp(e, t, n, r, a, i) {
    bp(e, t);
    var o = 0 != (128 & t.flags);
    if (!r && !o) return (a && Tc(t, n, !1), Mp(e, t, i));
    ((r = t.stateNode), (dp.current = t));
    var l = o && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
    return (
        (t.flags |= 1),
        null !== e && o ? ((t.child = vf(t, e.child, null, i)), (t.child = vf(t, null, l, i))) : hp(e, t, l, i),
        (t.memoizedState = r.state),
        a && Tc(t, n, !0),
        t.child
    );
}
function Sp(e) {
    var t = e.stateNode;
    (t.pendingContext ? Cc(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Cc(0, t.context, !1),
        Wf(e, t.containerInfo));
}
function xp(e, t, n, r, a) {
    return (uf(), sf(a), (t.flags |= 256), hp(e, t, n, r), t.child);
}
var Op,
    Ep,
    Pp,
    Cp,
    Ap = { dehydrated: null, treeContext: null, retryLane: 0 };
function Np(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Tp(e, t, n) {
    var r,
        a = t.pendingProps,
        i = Qf.current,
        o = !1,
        l = 0 != (128 & t.flags);
    if (
        ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
        r ? ((o = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (i |= 1),
        _c(Qf, 1 & i),
        null === e)
    )
        return (
            rf(t),
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
                            : (o = Nv(l, a, 0, null)),
                        (e = Av(e, a, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = Np(n)),
                        (t.memoizedState = Ap),
                        e)
                      : jp(t, l))
        );
    if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
        return (function (e, t, n, r, a, i, o) {
            if (n)
                return 256 & t.flags
                    ? ((t.flags &= -257), Lp(e, t, o, (r = ap(Error(Ja(422))))))
                    : null !== t.memoizedState
                      ? ((t.child = e.child), (t.flags |= 128), null)
                      : ((i = r.fallback),
                        (a = t.mode),
                        (r = Nv({ mode: 'visible', children: r.children }, a, 0, null)),
                        ((i = Av(i, a, o, null)).flags |= 2),
                        (r.return = t),
                        (i.return = t),
                        (r.sibling = i),
                        (t.child = r),
                        0 != (1 & t.mode) && vf(t, e.child, null, o),
                        (t.child.memoizedState = Np(o)),
                        (t.memoizedState = Ap),
                        i);
            if (0 == (1 & t.mode)) return Lp(e, t, o, null);
            if ('$!' === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset)) var l = r.dgst;
                return ((r = l), Lp(e, t, o, (r = ap((i = Error(Ja(419))), r, void 0))));
            }
            if (((l = 0 != (o & e.childLanes)), pp || l)) {
                if (null !== (r = Sh)) {
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
                        ((i.retryLane = a), Af(e, a), Yh(r, e, a, -1));
                }
                return (sv(), Lp(e, t, o, (r = ap(Error(Ja(421))))));
            }
            return '$?' === a.data
                ? ((t.flags |= 128), (t.child = e.child), (t = wv.bind(null, e)), (a._reactRetry = t), null)
                : ((e = i.treeContext),
                  (Xc = rc(a.nextSibling)),
                  (Yc = t),
                  (Zc = !0),
                  (Jc = null),
                  null !== e &&
                      ((Uc[Bc++] = Wc), (Uc[Bc++] = Hc), (Uc[Bc++] = $c), (Wc = e.id), (Hc = e.overflow), ($c = t)),
                  (t = jp(t, r.children)),
                  (t.flags |= 4096),
                  t);
        })(e, t, l, a, r, i, n);
    if (o) {
        ((o = a.fallback), (l = t.mode), (r = (i = e.child).sibling));
        var u = { mode: 'hidden', children: a.children };
        return (
            0 == (1 & l) && t.child !== i
                ? (((a = t.child).childLanes = 0), (a.pendingProps = u), (t.deletions = null))
                : ((a = Pv(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
            null !== r ? (o = Pv(r, o)) : ((o = Av(o, l, n, null)).flags |= 2),
            (o.return = t),
            (a.return = t),
            (a.sibling = o),
            (t.child = a),
            (a = o),
            (o = t.child),
            (l =
                null === (l = e.child.memoizedState)
                    ? Np(n)
                    : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
            (o.memoizedState = l),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = Ap),
            a
        );
    }
    return (
        (e = (o = e.child).sibling),
        (a = Pv(o, { mode: 'visible', children: a.children })),
        0 == (1 & t.mode) && (a.lanes = n),
        (a.return = t),
        (a.sibling = null),
        null !== e && (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a
    );
}
function jp(e, t) {
    return (((t = Nv({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t));
}
function Lp(e, t, n, r) {
    return (
        null !== r && sf(r),
        vf(t, e.child, null, n),
        ((e = jp(t, t.pendingProps.children)).flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function Rp(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (null !== r && (r.lanes |= t), Sf(e.return, t, n));
}
function zp(e, t, n, r, a) {
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
function Ip(e, t, n) {
    var r = t.pendingProps,
        a = r.revealOrder,
        i = r.tail;
    if ((hp(e, t, r.children, n), 0 != (2 & (r = Qf.current)))) ((r = (1 & r) | 2), (t.flags |= 128));
    else {
        if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Rp(e, n, t);
                else if (19 === e.tag) Rp(e, n, t);
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
    if ((_c(Qf, r), 0 == (1 & t.mode))) t.memoizedState = null;
    else
        switch (a) {
            case 'forwards':
                for (n = t.child, a = null; null !== n; )
                    (null !== (e = n.alternate) && null === Gf(e) && (a = n), (n = n.sibling));
                (null === (n = a) ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)),
                    zp(t, !1, a, n, i));
                break;
            case 'backwards':
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                    if (null !== (e = a.alternate) && null === Gf(e)) {
                        t.child = a;
                        break;
                    }
                    ((e = a.sibling), (a.sibling = n), (n = a), (a = e));
                }
                zp(t, !0, n, null, i);
                break;
            case 'together':
                zp(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Dp(e, t) {
    0 == (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Mp(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (Nh |= t.lanes), 0 == (n & t.childLanes))) return null;
    if (null !== e && t.child !== e.child) throw Error(Ja(153));
    if (null !== t.child) {
        for (n = Pv((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            ((e = e.sibling), ((n = n.sibling = Pv(e, e.pendingProps)).return = t));
        n.sibling = null;
    }
    return t.child;
}
function Vp(e, t) {
    if (!Zc)
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
function Fp(e) {
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
function Up(e, t, n) {
    var r = t.pendingProps;
    switch ((Gc(t), t.tag)) {
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
            return (Fp(t), null);
        case 1:
        case 17:
            return (Ec(t.type) && Pc(), Fp(t), null);
        case 3:
            return (
                (r = t.stateNode),
                Hf(),
                bc(Sc),
                bc(kc),
                Xf(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                    (of(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                          ((t.flags |= 1024), null !== Jc && (ev(Jc), (Jc = null)))),
                Ep(e, t),
                Fp(t),
                null
            );
        case 5:
            qf(t);
            var a = $f(Bf.current);
            if (((n = t.type), null !== e && null != t.stateNode))
                (Pp(e, t, n, r, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(Ja(166));
                    return (Fp(t), null);
                }
                if (((e = $f(Ff.current)), of(t))) {
                    ((r = t.stateNode), (n = t.type));
                    var i = t.memoizedProps;
                    switch (((r[oc] = t), (r[lc] = i), (e = 0 != (1 & t.mode)), n)) {
                        case 'dialog':
                            (Ls('cancel', r), Ls('close', r));
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            Ls('load', r);
                            break;
                        case 'video':
                        case 'audio':
                            for (a = 0; a < As.length; a++) Ls(As[a], r);
                            break;
                        case 'source':
                            Ls('error', r);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            (Ls('error', r), Ls('load', r));
                            break;
                        case 'details':
                            Ls('toggle', r);
                            break;
                        case 'input':
                            (Wi(r, i), Ls('invalid', r));
                            break;
                        case 'select':
                            ((r._wrapperState = { wasMultiple: !!i.multiple }), Ls('invalid', r));
                            break;
                        case 'textarea':
                            (Zi(r, i), Ls('invalid', r));
                    }
                    for (var o in (po(n, i), (a = null), i))
                        if (i.hasOwnProperty(o)) {
                            var l = i[o];
                            'children' === o
                                ? 'string' == typeof l
                                    ? r.textContent !== l &&
                                      (!0 !== i.suppressHydrationWarning && Ks(r.textContent, l, e),
                                      (a = ['children', l]))
                                    : 'number' == typeof l &&
                                      r.textContent !== '' + l &&
                                      (!0 !== i.suppressHydrationWarning && Ks(r.textContent, l, e),
                                      (a = ['children', '' + l]))
                                : ti.hasOwnProperty(o) && null != l && 'onScroll' === o && Ls('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            (Fi(r), qi(r, i, !0));
                            break;
                        case 'textarea':
                            (Fi(r), eo(r));
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            'function' == typeof i.onClick && (r.onclick = qs);
                    }
                    ((r = a), (t.updateQueue = r), null !== r && (t.flags |= 4));
                } else {
                    ((o = 9 === a.nodeType ? a : a.ownerDocument),
                        'http://www.w3.org/1999/xhtml' === e && (e = to(n)),
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
                        (e[oc] = t),
                        (e[lc] = r),
                        Op(e, t, !1, !1),
                        (t.stateNode = e));
                    e: {
                        switch (((o = ho(n, r)), n)) {
                            case 'dialog':
                                (Ls('cancel', e), Ls('close', e), (a = r));
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                (Ls('load', e), (a = r));
                                break;
                            case 'video':
                            case 'audio':
                                for (a = 0; a < As.length; a++) Ls(As[a], e);
                                a = r;
                                break;
                            case 'source':
                                (Ls('error', e), (a = r));
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                (Ls('error', e), Ls('load', e), (a = r));
                                break;
                            case 'details':
                                (Ls('toggle', e), (a = r));
                                break;
                            case 'input':
                                (Wi(e, r), (a = $i(e, r)), Ls('invalid', e));
                                break;
                            case 'option':
                            default:
                                a = r;
                                break;
                            case 'select':
                                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (a = Ti({}, r, { value: void 0 })),
                                    Ls('invalid', e));
                                break;
                            case 'textarea':
                                (Zi(e, r), (a = Xi(e, r)), Ls('invalid', e));
                        }
                        for (i in (po(n, a), (l = a)))
                            if (l.hasOwnProperty(i)) {
                                var u = l[i];
                                'style' === i
                                    ? co(e, u)
                                    : 'dangerouslySetInnerHTML' === i
                                      ? null != (u = u ? u.__html : void 0) && io(e, u)
                                      : 'children' === i
                                        ? 'string' == typeof u
                                            ? ('textarea' !== n || '' !== u) && oo(e, u)
                                            : 'number' == typeof u && oo(e, '' + u)
                                        : 'suppressContentEditableWarning' !== i &&
                                          'suppressHydrationWarning' !== i &&
                                          'autoFocus' !== i &&
                                          (ti.hasOwnProperty(i)
                                              ? null != u && 'onScroll' === i && Ls('scroll', e)
                                              : null != u && pi(e, i, u, o));
                            }
                        switch (n) {
                            case 'input':
                                (Fi(e), qi(e, r, !1));
                                break;
                            case 'textarea':
                                (Fi(e), eo(e));
                                break;
                            case 'option':
                                null != r.value && e.setAttribute('value', '' + Mi(r.value));
                                break;
                            case 'select':
                                ((e.multiple = !!r.multiple),
                                    null != (i = r.value)
                                        ? Yi(e, !!r.multiple, i, !1)
                                        : null != r.defaultValue && Yi(e, !!r.multiple, r.defaultValue, !0));
                                break;
                            default:
                                'function' == typeof a.onClick && (e.onclick = qs);
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
            return (Fp(t), null);
        case 6:
            if (e && null != t.stateNode) Cp(e, t, e.memoizedProps, r);
            else {
                if ('string' != typeof r && null === t.stateNode) throw Error(Ja(166));
                if (((n = $f(Bf.current)), $f(Ff.current), of(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[oc] = t),
                        (i = r.nodeValue !== n) && null !== (e = Yc))
                    )
                        switch (e.tag) {
                            case 3:
                                Ks(r.nodeValue, n, 0 != (1 & e.mode));
                                break;
                            case 5:
                                !0 !== e.memoizedProps.suppressHydrationWarning &&
                                    Ks(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                    i && (t.flags |= 4);
                } else (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[oc] = t), (t.stateNode = r));
            }
            return (Fp(t), null);
        case 13:
            if (
                (bc(Qf),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (Zc && null !== Xc && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                    (lf(), uf(), (t.flags |= 98560), (i = !1));
                else if (((i = of(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!i) throw Error(Ja(318));
                        if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(Ja(317));
                        i[oc] = t;
                    } else (uf(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                    (Fp(t), (i = !1));
                } else (null !== Jc && (ev(Jc), (Jc = null)), (i = !0));
                if (!i) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) && (null === e || 0 != (1 & Qf.current) ? 0 === Ch && (Ch = 3) : sv())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Fp(t),
                  null);
        case 4:
            return (Hf(), Ep(e, t), null === e && Is(t.stateNode.containerInfo), Fp(t), null);
        case 10:
            return (kf(t.type._context), Fp(t), null);
        case 19:
            if ((bc(Qf), null === (i = t.memoizedState))) return (Fp(t), null);
            if (((r = 0 != (128 & t.flags)), null === (o = i.rendering)))
                if (r) Vp(i, !1);
                else {
                    if (0 !== Ch || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (o = Gf(e))) {
                                for (
                                    t.flags |= 128,
                                        Vp(i, !1),
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
                                return (_c(Qf, (1 & Qf.current) | 2), t.child);
                            }
                            e = e.sibling;
                        }
                    null !== i.tail && Ko() > Ih && ((t.flags |= 128), (r = !0), Vp(i, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = Gf(o))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            Vp(i, !0),
                            null === i.tail && 'hidden' === i.tailMode && !o.alternate && !Zc)
                        )
                            return (Fp(t), null);
                    } else
                        2 * Ko() - i.renderingStartTime > Ih &&
                            1073741824 !== n &&
                            ((t.flags |= 128), (r = !0), Vp(i, !1), (t.lanes = 4194304));
                i.isBackwards
                    ? ((o.sibling = t.child), (t.child = o))
                    : (null !== (n = i.last) ? (n.sibling = o) : (t.child = o), (i.last = o));
            }
            return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ko()),
                  (t.sibling = null),
                  (n = Qf.current),
                  _c(Qf, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Fp(t), null);
        case 22:
        case 23:
            return (
                iv(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 != (1 & t.mode)
                    ? 0 != (1073741824 & Eh) && (Fp(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                    : Fp(t),
                null
            );
        case 24:
        case 25:
            return null;
    }
    throw Error(Ja(156, t.tag));
}
function Bp(e, t) {
    switch ((Gc(t), t.tag)) {
        case 1:
            return (Ec(t.type) && Pc(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null);
        case 3:
            return (
                Hf(),
                bc(Sc),
                bc(kc),
                Xf(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 5:
            return (qf(t), null);
        case 13:
            if ((bc(Qf), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(Ja(340));
                uf();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return (bc(Qf), null);
        case 4:
            return (Hf(), null);
        case 10:
            return (kf(t.type._context), null);
        case 22:
        case 23:
            return (iv(), null);
        default:
            return null;
    }
}
((Op = function (e, t) {
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
    (Ep = function () {}),
    (Pp = function (e, t, n, r) {
        var a = e.memoizedProps;
        if (a !== r) {
            ((e = t.stateNode), $f(Ff.current));
            var i,
                o = null;
            switch (n) {
                case 'input':
                    ((a = $i(e, a)), (r = $i(e, r)), (o = []));
                    break;
                case 'select':
                    ((a = Ti({}, a, { value: void 0 })), (r = Ti({}, r, { value: void 0 })), (o = []));
                    break;
                case 'textarea':
                    ((a = Xi(e, a)), (r = Xi(e, r)), (o = []));
                    break;
                default:
                    'function' != typeof a.onClick && 'function' == typeof r.onClick && (e.onclick = qs);
            }
            for (s in (po(n, r), (n = null), a))
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
                            (ti.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
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
                                (ti.hasOwnProperty(s)
                                    ? (null != u && 'onScroll' === s && Ls('scroll', e), o || l === u || (o = []))
                                    : (o = o || []).push(s, u));
            }
            n && (o = o || []).push('style', n);
            var s = o;
            (t.updateQueue = s) && (t.flags |= 4);
        }
    }),
    (Cp = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
    }));
var $p = !1,
    Wp = !1,
    Hp = 'function' == typeof WeakSet ? WeakSet : Set,
    Kp = null;
function qp(e, t) {
    var n = e.ref;
    if (null !== n)
        if ('function' == typeof n)
            try {
                n(null);
            } catch (r) {
                yv(e, t, r);
            }
        else n.current = null;
}
function Qp(e, t, n) {
    try {
        n();
    } catch (r) {
        yv(e, t, r);
    }
}
var Gp = !1;
function Yp(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var a = (r = r.next);
        do {
            if ((a.tag & e) === e) {
                var i = a.destroy;
                ((a.destroy = void 0), void 0 !== i && Qp(t, n, i));
            }
            a = a.next;
        } while (a !== r);
    }
}
function Xp(e, t) {
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
function Zp(e) {
    var t = e.ref;
    if (null !== t) {
        var n = e.stateNode;
        (e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e));
    }
}
function Jp(e) {
    var t = e.alternate;
    (null !== t && ((e.alternate = null), Jp(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[oc], delete t[lc], delete t[sc], delete t[cc], delete t[fc]),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
}
function eh(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function th(e) {
    e: for (;;) {
        for (; null === e.sibling; ) {
            if (null === e.return || eh(e.return)) return null;
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
function nh(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
        ((e = e.stateNode),
            t
                ? 8 === n.nodeType
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = qs)));
    else if (4 !== r && null !== (e = e.child))
        for (nh(e, t, n), e = e.sibling; null !== e; ) (nh(e, t, n), (e = e.sibling));
}
function rh(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (4 !== r && null !== (e = e.child))
        for (rh(e, t, n), e = e.sibling; null !== e; ) (rh(e, t, n), (e = e.sibling));
}
var ah = null,
    ih = !1;
function oh(e, t, n) {
    for (n = n.child; null !== n; ) (lh(e, t, n), (n = n.sibling));
}
function lh(e, t, n) {
    if (el && 'function' == typeof el.onCommitFiberUnmount)
        try {
            el.onCommitFiberUnmount(Jo, n);
        } catch (l) {}
    switch (n.tag) {
        case 5:
            Wp || qp(n, t);
        case 6:
            var r = ah,
                a = ih;
            ((ah = null),
                oh(e, t, n),
                (ih = a),
                null !== (ah = r) &&
                    (ih
                        ? ((e = ah),
                          (n = n.stateNode),
                          8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : ah.removeChild(n.stateNode)));
            break;
        case 18:
            null !== ah &&
                (ih
                    ? ((e = ah),
                      (n = n.stateNode),
                      8 === e.nodeType ? nc(e.parentNode, n) : 1 === e.nodeType && nc(e, n),
                      Dl(e))
                    : nc(ah, n.stateNode));
            break;
        case 4:
            ((r = ah), (a = ih), (ah = n.stateNode.containerInfo), (ih = !0), oh(e, t, n), (ah = r), (ih = a));
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Wp && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                a = r = r.next;
                do {
                    var i = a,
                        o = i.destroy;
                    ((i = i.tag), void 0 !== o && (0 != (2 & i) || 0 != (4 & i)) && Qp(n, t, o), (a = a.next));
                } while (a !== r);
            }
            oh(e, t, n);
            break;
        case 1:
            if (!Wp && (qp(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount))
                try {
                    ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
                } catch (l) {
                    yv(n, t, l);
                }
            oh(e, t, n);
            break;
        case 21:
            oh(e, t, n);
            break;
        case 22:
            1 & n.mode ? ((Wp = (r = Wp) || null !== n.memoizedState), oh(e, t, n), (Wp = r)) : oh(e, t, n);
            break;
        default:
            oh(e, t, n);
    }
}
function uh(e) {
    var t = e.updateQueue;
    if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        (null === n && (n = e.stateNode = new Hp()),
            t.forEach(function (t) {
                var r = kv.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
            }));
    }
}
function sh(e, t) {
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
                            ((ah = l.stateNode), (ih = !1));
                            break e;
                        case 3:
                        case 4:
                            ((ah = l.stateNode.containerInfo), (ih = !0));
                            break e;
                    }
                    l = l.return;
                }
                if (null === ah) throw Error(Ja(160));
                (lh(i, o, a), (ah = null), (ih = !1));
                var u = a.alternate;
                (null !== u && (u.return = null), (a.return = null));
            } catch (s) {
                yv(a, t, s);
            }
        }
    if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) (ch(t, e), (t = t.sibling));
}
function ch(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((sh(t, e), fh(e), 4 & r)) {
                try {
                    (Yp(3, e, e.return), Xp(3, e));
                } catch (v) {
                    yv(e, e.return, v);
                }
                try {
                    Yp(5, e, e.return);
                } catch (v) {
                    yv(e, e.return, v);
                }
            }
            break;
        case 1:
            (sh(t, e), fh(e), 512 & r && null !== n && qp(n, n.return));
            break;
        case 5:
            if ((sh(t, e), fh(e), 512 & r && null !== n && qp(n, n.return), 32 & e.flags)) {
                var a = e.stateNode;
                try {
                    oo(a, '');
                } catch (v) {
                    yv(e, e.return, v);
                }
            }
            if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                    o = null !== n ? n.memoizedProps : i,
                    l = e.type,
                    u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                    try {
                        ('input' === l && 'radio' === i.type && null != i.name && Hi(a, i), ho(l, o));
                        var s = ho(l, i);
                        for (o = 0; o < u.length; o += 2) {
                            var c = u[o],
                                f = u[o + 1];
                            'style' === c
                                ? co(a, f)
                                : 'dangerouslySetInnerHTML' === c
                                  ? io(a, f)
                                  : 'children' === c
                                    ? oo(a, f)
                                    : pi(a, c, f, s);
                        }
                        switch (l) {
                            case 'input':
                                Ki(a, i);
                                break;
                            case 'textarea':
                                Ji(a, i);
                                break;
                            case 'select':
                                var d = a._wrapperState.wasMultiple;
                                a._wrapperState.wasMultiple = !!i.multiple;
                                var p = i.value;
                                null != p
                                    ? Yi(a, !!i.multiple, p, !1)
                                    : d !== !!i.multiple &&
                                      (null != i.defaultValue
                                          ? Yi(a, !!i.multiple, i.defaultValue, !0)
                                          : Yi(a, !!i.multiple, i.multiple ? [] : '', !1));
                        }
                        a[lc] = i;
                    } catch (v) {
                        yv(e, e.return, v);
                    }
            }
            break;
        case 6:
            if ((sh(t, e), fh(e), 4 & r)) {
                if (null === e.stateNode) throw Error(Ja(162));
                ((a = e.stateNode), (i = e.memoizedProps));
                try {
                    a.nodeValue = i;
                } catch (v) {
                    yv(e, e.return, v);
                }
            }
            break;
        case 3:
            if ((sh(t, e), fh(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                    Dl(t.containerInfo);
                } catch (v) {
                    yv(e, e.return, v);
                }
            break;
        case 4:
        default:
            (sh(t, e), fh(e));
            break;
        case 13:
            (sh(t, e),
                fh(e),
                8192 & (a = e.child).flags &&
                    ((i = null !== a.memoizedState),
                    (a.stateNode.isHidden = i),
                    !i || (null !== a.alternate && null !== a.alternate.memoizedState) || (zh = Ko())),
                4 & r && uh(e));
            break;
        case 22:
            if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Wp = (s = Wp) || c), sh(t, e), (Wp = s)) : sh(t, e),
                fh(e),
                8192 & r)
            ) {
                if (((s = null !== e.memoizedState), (e.stateNode.isHidden = s) && !c && 0 != (1 & e.mode)))
                    for (Kp = e, c = e.child; null !== c; ) {
                        for (f = Kp = c; null !== Kp; ) {
                            switch (((p = (d = Kp).child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Yp(4, d, d.return);
                                    break;
                                case 1:
                                    qp(d, d.return);
                                    var h = d.stateNode;
                                    if ('function' == typeof h.componentWillUnmount) {
                                        ((r = d), (n = d.return));
                                        try {
                                            ((t = r),
                                                (h.props = t.memoizedProps),
                                                (h.state = t.memoizedState),
                                                h.componentWillUnmount());
                                        } catch (v) {
                                            yv(r, n, v);
                                        }
                                    }
                                    break;
                                case 5:
                                    qp(d, d.return);
                                    break;
                                case 22:
                                    if (null !== d.memoizedState) {
                                        vh(f);
                                        continue;
                                    }
                            }
                            null !== p ? ((p.return = d), (Kp = p)) : vh(f);
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
                                          (l.style.display = so('display', o))));
                            } catch (v) {
                                yv(e, e.return, v);
                            }
                        }
                    } else if (6 === f.tag) {
                        if (null === c)
                            try {
                                f.stateNode.nodeValue = s ? '' : f.memoizedProps;
                            } catch (v) {
                                yv(e, e.return, v);
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
            (sh(t, e), fh(e), 4 & r && uh(e));
        case 21:
    }
}
function fh(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e: {
                for (var n = e.return; null !== n; ) {
                    if (eh(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(Ja(160));
            }
            switch (r.tag) {
                case 5:
                    var a = r.stateNode;
                    (32 & r.flags && (oo(a, ''), (r.flags &= -33)), rh(e, th(e), a));
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo;
                    nh(e, th(e), i);
                    break;
                default:
                    throw Error(Ja(161));
            }
        } catch (o) {
            yv(e, e.return, o);
        }
        e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
}
function dh(e, t, n) {
    ((Kp = e), ph(e));
}
function ph(e, t, n) {
    for (var r = 0 != (1 & e.mode); null !== Kp; ) {
        var a = Kp,
            i = a.child;
        if (22 === a.tag && r) {
            var o = null !== a.memoizedState || $p;
            if (!o) {
                var l = a.alternate,
                    u = (null !== l && null !== l.memoizedState) || Wp;
                l = $p;
                var s = Wp;
                if ((($p = o), (Wp = u) && !s))
                    for (Kp = a; null !== Kp; )
                        ((u = (o = Kp).child),
                            22 === o.tag && null !== o.memoizedState
                                ? mh(a)
                                : null !== u
                                  ? ((u.return = o), (Kp = u))
                                  : mh(a));
                for (; null !== i; ) ((Kp = i), ph(i), (i = i.sibling));
                ((Kp = a), ($p = l), (Wp = s));
            }
            hh(e);
        } else 0 != (8772 & a.subtreeFlags) && null !== i ? ((i.return = a), (Kp = i)) : hh(e);
    }
}
function hh(e) {
    for (; null !== Kp; ) {
        var t = Kp;
        if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
                if (0 != (8772 & t.flags))
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Wp || Xp(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (4 & t.flags && !Wp)
                                if (null === n) r.componentDidMount();
                                else {
                                    var a = t.elementType === t.type ? n.memoizedProps : Yd(t.type, n.memoizedProps);
                                    r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var i = t.updateQueue;
                            null !== i && Mf(t, i, r);
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
                                Mf(t, o, n);
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
                                        null !== f && Dl(f);
                                    }
                                }
                            }
                            break;
                        default:
                            throw Error(Ja(163));
                    }
                Wp || (512 & t.flags && Zp(t));
            } catch (d) {
                yv(t, t.return, d);
            }
        }
        if (t === e) {
            Kp = null;
            break;
        }
        if (null !== (n = t.sibling)) {
            ((n.return = t.return), (Kp = n));
            break;
        }
        Kp = t.return;
    }
}
function vh(e) {
    for (; null !== Kp; ) {
        var t = Kp;
        if (t === e) {
            Kp = null;
            break;
        }
        var n = t.sibling;
        if (null !== n) {
            ((n.return = t.return), (Kp = n));
            break;
        }
        Kp = t.return;
    }
}
function mh(e) {
    for (; null !== Kp; ) {
        var t = Kp;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Xp(4, t);
                    } catch (u) {
                        yv(t, n, u);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if ('function' == typeof r.componentDidMount) {
                        var a = t.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            yv(t, a, u);
                        }
                    }
                    var i = t.return;
                    try {
                        Zp(t);
                    } catch (u) {
                        yv(t, i, u);
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Zp(t);
                    } catch (u) {
                        yv(t, o, u);
                    }
            }
        } catch (u) {
            yv(t, t.return, u);
        }
        if (t === e) {
            Kp = null;
            break;
        }
        var l = t.sibling;
        if (null !== l) {
            ((l.return = t.return), (Kp = l));
            break;
        }
        Kp = t.return;
    }
}
var gh,
    yh = Math.ceil,
    bh = hi.ReactCurrentDispatcher,
    _h = hi.ReactCurrentOwner,
    wh = hi.ReactCurrentBatchConfig,
    kh = 0,
    Sh = null,
    xh = null,
    Oh = 0,
    Eh = 0,
    Ph = yc(0),
    Ch = 0,
    Ah = null,
    Nh = 0,
    Th = 0,
    jh = 0,
    Lh = null,
    Rh = null,
    zh = 0,
    Ih = 1 / 0,
    Dh = null,
    Mh = !1,
    Vh = null,
    Fh = null,
    Uh = !1,
    Bh = null,
    $h = 0,
    Wh = 0,
    Hh = null,
    Kh = -1,
    qh = 0;
function Qh() {
    return 0 != (6 & kh) ? Ko() : -1 !== Kh ? Kh : (Kh = Ko());
}
function Gh(e) {
    return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & kh) && 0 !== Oh
          ? Oh & -Oh
          : null !== cf.transition
            ? (0 === qh && (qh = cl()), qh)
            : 0 !== (e = hl)
              ? e
              : (e = void 0 === (e = window.event) ? 16 : Hl(e.type));
}
function Yh(e, t, n, r) {
    if (50 < Wh) throw ((Wh = 0), (Hh = null), Error(Ja(185)));
    (dl(e, n, r),
        (0 != (2 & kh) && e === Sh) ||
            (e === Sh && (0 == (2 & kh) && (Th |= n), 4 === Ch && tv(e, Oh)),
            Xh(e, r),
            1 === n && 0 === kh && 0 == (1 & t.mode) && ((Ih = Ko() + 500), Lc && Ic())));
}
function Xh(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
            var o = 31 - tl(i),
                l = 1 << o,
                u = a[o];
            (-1 === u ? (0 != (l & n) && 0 == (l & r)) || (a[o] = ul(l, t)) : u <= t && (e.expiredLanes |= l),
                (i &= ~l));
        }
    })(e, t);
    var r = ll(e, e === Sh ? Oh : 0);
    if (0 === r) (null !== n && $o(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && $o(n), 1 === t))
            (0 === e.tag
                ? (function (e) {
                      ((Lc = !0), zc(e));
                  })(nv.bind(null, e))
                : zc(nv.bind(null, e)),
                ec(function () {
                    0 == (6 & kh) && Ic();
                }),
                (n = null));
        else {
            switch (vl(r)) {
                case 1:
                    n = Qo;
                    break;
                case 4:
                    n = Go;
                    break;
                case 16:
                default:
                    n = Yo;
                    break;
                case 536870912:
                    n = Zo;
            }
            n = Sv(n, Zh.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = n));
    }
}
function Zh(e, t) {
    if (((Kh = -1), (qh = 0), 0 != (6 & kh))) throw Error(Ja(327));
    var n = e.callbackNode;
    if (mv() && e.callbackNode !== n) return null;
    var r = ll(e, e === Sh ? Oh : 0);
    if (0 === r) return null;
    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = cv(e, r);
    else {
        t = r;
        var a = kh;
        kh |= 2;
        var i = uv();
        for ((Sh === e && Oh === t) || ((Dh = null), (Ih = Ko() + 500), ov(e, t)); ; )
            try {
                dv();
                break;
            } catch (l) {
                lv(e, l);
            }
        (wf(), (bh.current = i), (kh = a), null !== xh ? (t = 0) : ((Sh = null), (Oh = 0), (t = Ch)));
    }
    if (0 !== t) {
        if ((2 === t && 0 !== (a = sl(e)) && ((r = a), (t = Jh(e, a))), 1 === t))
            throw ((n = Ah), ov(e, 0), tv(e, r), Xh(e, Ko()), n);
        if (6 === t) tv(e, r);
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
                                            if (!ts(i(), a)) return !1;
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
                    (2 === (t = cv(e, r)) && 0 !== (i = sl(e)) && ((r = i), (t = Jh(e, i))), 1 === t))
            )
                throw ((n = Ah), ov(e, 0), tv(e, r), Xh(e, Ko()), n);
            switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(Ja(345));
                case 2:
                case 5:
                    vv(e, Rh, Dh);
                    break;
                case 3:
                    if ((tv(e, r), (130023424 & r) === r && 10 < (t = zh + 500 - Ko()))) {
                        if (0 !== ll(e, 0)) break;
                        if (((a = e.suspendedLanes) & r) !== r) {
                            (Qh(), (e.pingedLanes |= e.suspendedLanes & a));
                            break;
                        }
                        e.timeoutHandle = Xs(vv.bind(null, e, Rh, Dh), t);
                        break;
                    }
                    vv(e, Rh, Dh);
                    break;
                case 4:
                    if ((tv(e, r), (4194240 & r) === r)) break;
                    for (t = e.eventTimes, a = -1; 0 < r; ) {
                        var o = 31 - tl(r);
                        ((i = 1 << o), (o = t[o]) > a && (a = o), (r &= ~i));
                    }
                    if (
                        ((r = a),
                        10 <
                            (r =
                                (120 > (r = Ko() - r)
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
                                              : 1960 * yh(r / 1960)) - r))
                    ) {
                        e.timeoutHandle = Xs(vv.bind(null, e, Rh, Dh), r);
                        break;
                    }
                    vv(e, Rh, Dh);
                    break;
                default:
                    throw Error(Ja(329));
            }
        }
    }
    return (Xh(e, Ko()), e.callbackNode === n ? Zh.bind(null, e) : null);
}
function Jh(e, t) {
    var n = Lh;
    return (
        e.current.memoizedState.isDehydrated && (ov(e, t).flags |= 256),
        2 !== (e = cv(e, t)) && ((t = Rh), (Rh = n), null !== t && ev(t)),
        e
    );
}
function ev(e) {
    null === Rh ? (Rh = e) : Rh.push.apply(Rh, e);
}
function tv(e, t) {
    for (t &= ~jh, t &= ~Th, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - tl(t),
            r = 1 << n;
        ((e[n] = -1), (t &= ~r));
    }
}
function nv(e) {
    if (0 != (6 & kh)) throw Error(Ja(327));
    mv();
    var t = ll(e, 0);
    if (0 == (1 & t)) return (Xh(e, Ko()), null);
    var n = cv(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = sl(e);
        0 !== r && ((t = r), (n = Jh(e, r)));
    }
    if (1 === n) throw ((n = Ah), ov(e, 0), tv(e, t), Xh(e, Ko()), n);
    if (6 === n) throw Error(Ja(345));
    return ((e.finishedWork = e.current.alternate), (e.finishedLanes = t), vv(e, Rh, Dh), Xh(e, Ko()), null);
}
function rv(e, t) {
    var n = kh;
    kh |= 1;
    try {
        return e(t);
    } finally {
        0 === (kh = n) && ((Ih = Ko() + 500), Lc && Ic());
    }
}
function av(e) {
    null !== Bh && 0 === Bh.tag && 0 == (6 & kh) && mv();
    var t = kh;
    kh |= 1;
    var n = wh.transition,
        r = hl;
    try {
        if (((wh.transition = null), (hl = 1), e)) return e();
    } finally {
        ((hl = r), (wh.transition = n), 0 == (6 & (kh = t)) && Ic());
    }
}
function iv() {
    ((Eh = Ph.current), bc(Ph));
}
function ov(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), Zs(n)), null !== xh))
        for (n = xh.return; null !== n; ) {
            var r = n;
            switch ((Gc(r), r.tag)) {
                case 1:
                    null != (r = r.type.childContextTypes) && Pc();
                    break;
                case 3:
                    (Hf(), bc(Sc), bc(kc), Xf());
                    break;
                case 5:
                    qf(r);
                    break;
                case 4:
                    Hf();
                    break;
                case 13:
                case 19:
                    bc(Qf);
                    break;
                case 10:
                    kf(r.type._context);
                    break;
                case 22:
                case 23:
                    iv();
            }
            n = n.return;
        }
    if (
        ((Sh = e),
        (xh = e = Pv(e.current, null)),
        (Oh = Eh = t),
        (Ch = 0),
        (Ah = null),
        (jh = Th = Nh = 0),
        (Rh = Lh = null),
        null !== Ef)
    ) {
        for (t = 0; t < Ef.length; t++)
            if (null !== (r = (n = Ef[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                    i = n.pending;
                if (null !== i) {
                    var o = i.next;
                    ((i.next = a), (r.next = o));
                }
                n.pending = r;
            }
        Ef = null;
    }
    return e;
}
function lv(e, t) {
    for (;;) {
        var n = xh;
        try {
            if ((wf(), (Zf.current = Kd), ad)) {
                for (var r = td.memoizedState; null !== r; ) {
                    var a = r.queue;
                    (null !== a && (a.pending = null), (r = r.next));
                }
                ad = !1;
            }
            if (
                ((ed = 0),
                (rd = nd = td = null),
                (id = !1),
                (od = 0),
                (_h.current = null),
                null === n || null === n.return)
            ) {
                ((Ch = 1), (Ah = t), (xh = null));
                break;
            }
            e: {
                var i = e,
                    o = n.return,
                    l = n,
                    u = t;
                if (((t = Oh), (l.flags |= 32768), null !== u && 'object' == typeof u && 'function' == typeof u.then)) {
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
                    var p = cp(o);
                    if (null !== p) {
                        ((p.flags &= -257), fp(p, o, l, 0, t), 1 & p.mode && sp(i, s, t), (u = s));
                        var h = (t = p).updateQueue;
                        if (null === h) {
                            var v = new Set();
                            (v.add(u), (t.updateQueue = v));
                        } else h.add(u);
                        break e;
                    }
                    if (0 == (1 & t)) {
                        (sp(i, s, t), sv());
                        break e;
                    }
                    u = Error(Ja(426));
                } else if (Zc && 1 & l.mode) {
                    var m = cp(o);
                    if (null !== m) {
                        (0 == (65536 & m.flags) && (m.flags |= 256), fp(m, o, l, 0, t), sf(rp(u, l)));
                        break e;
                    }
                }
                ((i = u = rp(u, l)), 4 !== Ch && (Ch = 2), null === Lh ? (Lh = [i]) : Lh.push(i), (i = o));
                do {
                    switch (i.tag) {
                        case 3:
                            ((i.flags |= 65536), (t &= -t), (i.lanes |= t), If(i, lp(0, u, t)));
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
                                        (null === Fh || !Fh.has(y))))
                            ) {
                                ((i.flags |= 65536), (t &= -t), (i.lanes |= t), If(i, up(i, l, t)));
                                break e;
                            }
                    }
                    i = i.return;
                } while (null !== i);
            }
            hv(n);
        } catch (b) {
            ((t = b), xh === n && null !== n && (xh = n = n.return));
            continue;
        }
        break;
    }
}
function uv() {
    var e = bh.current;
    return ((bh.current = Kd), null === e ? Kd : e);
}
function sv() {
    ((0 !== Ch && 3 !== Ch && 2 !== Ch) || (Ch = 4),
        null === Sh || (0 == (268435455 & Nh) && 0 == (268435455 & Th)) || tv(Sh, Oh));
}
function cv(e, t) {
    var n = kh;
    kh |= 2;
    var r = uv();
    for ((Sh === e && Oh === t) || ((Dh = null), ov(e, t)); ; )
        try {
            fv();
            break;
        } catch (a) {
            lv(e, a);
        }
    if ((wf(), (kh = n), (bh.current = r), null !== xh)) throw Error(Ja(261));
    return ((Sh = null), (Oh = 0), Ch);
}
function fv() {
    for (; null !== xh; ) pv(xh);
}
function dv() {
    for (; null !== xh && !Wo(); ) pv(xh);
}
function pv(e) {
    var t = gh(e.alternate, e, Eh);
    ((e.memoizedProps = e.pendingProps), null === t ? hv(e) : (xh = t), (_h.current = null));
}
function hv(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), 0 == (32768 & t.flags))) {
            if (null !== (n = Up(n, t, Eh))) return void (xh = n);
        } else {
            if (null !== (n = Bp(n, t))) return ((n.flags &= 32767), void (xh = n));
            if (null === e) return ((Ch = 6), void (xh = null));
            ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        }
        if (null !== (t = t.sibling)) return void (xh = t);
        xh = t = e;
    } while (null !== t);
    0 === Ch && (Ch = 5);
}
function vv(e, t, n) {
    var r = hl,
        a = wh.transition;
    try {
        ((wh.transition = null),
            (hl = 1),
            (function (e, t, n, r) {
                do {
                    mv();
                } while (null !== Bh);
                if (0 != (6 & kh)) throw Error(Ja(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(Ja(177));
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
                            var a = 31 - tl(n),
                                i = 1 << a;
                            ((t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i));
                        }
                    })(e, i),
                    e === Sh && ((xh = Sh = null), (Oh = 0)),
                    (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                        Uh ||
                        ((Uh = !0),
                        Sv(Yo, function () {
                            return (mv(), null);
                        })),
                    (i = 0 != (15990 & n.flags)),
                    0 != (15990 & n.subtreeFlags) || i)
                ) {
                    ((i = wh.transition), (wh.transition = null));
                    var o = hl;
                    hl = 1;
                    var l = kh;
                    ((kh |= 4),
                        (_h.current = null),
                        (function (e, t) {
                            if (((Qs = Vl), ls((e = os())))) {
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
                            for (Gs = { focusedElem: e, selectionRange: n }, Vl = !1, Kp = t; null !== Kp; )
                                if (((e = (t = Kp).child), 0 != (1028 & t.subtreeFlags) && null !== e))
                                    ((e.return = t), (Kp = e));
                                else
                                    for (; null !== Kp; ) {
                                        t = Kp;
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
                                                                    t.elementType === t.type ? v : Yd(t.type, v),
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
                                                        throw Error(Ja(163));
                                                }
                                        } catch (_) {
                                            yv(t, t.return, _);
                                        }
                                        if (null !== (e = t.sibling)) {
                                            ((e.return = t.return), (Kp = e));
                                            break;
                                        }
                                        Kp = t.return;
                                    }
                            ((h = Gp), (Gp = !1));
                        })(e, n),
                        ch(n, e),
                        us(Gs),
                        (Vl = !!Qs),
                        (Gs = Qs = null),
                        (e.current = n),
                        dh(n),
                        Ho(),
                        (kh = l),
                        (hl = o),
                        (wh.transition = i));
                } else e.current = n;
                if (
                    (Uh && ((Uh = !1), (Bh = e), ($h = a)),
                    (i = e.pendingLanes),
                    0 === i && (Fh = null),
                    (function (e) {
                        if (el && 'function' == typeof el.onCommitFiberRoot)
                            try {
                                el.onCommitFiberRoot(Jo, e, void 0, 128 == (128 & e.current.flags));
                            } catch (t) {}
                    })(n.stateNode),
                    Xh(e, Ko()),
                    null !== t)
                )
                    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                        ((a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest }));
                if (Mh) throw ((Mh = !1), (e = Vh), (Vh = null), e);
                (0 != (1 & $h) && 0 !== e.tag && mv(),
                    (i = e.pendingLanes),
                    0 != (1 & i) ? (e === Hh ? Wh++ : ((Wh = 0), (Hh = e))) : (Wh = 0),
                    Ic());
            })(e, t, n, r));
    } finally {
        ((wh.transition = a), (hl = r));
    }
    return null;
}
function mv() {
    if (null !== Bh) {
        var e = vl($h),
            t = wh.transition,
            n = hl;
        try {
            if (((wh.transition = null), (hl = 16 > e ? 16 : e), null === Bh)) var r = !1;
            else {
                if (((e = Bh), (Bh = null), ($h = 0), 0 != (6 & kh))) throw Error(Ja(331));
                var a = kh;
                for (kh |= 4, Kp = e.current; null !== Kp; ) {
                    var i = Kp,
                        o = i.child;
                    if (0 != (16 & Kp.flags)) {
                        var l = i.deletions;
                        if (null !== l) {
                            for (var u = 0; u < l.length; u++) {
                                var s = l[u];
                                for (Kp = s; null !== Kp; ) {
                                    var c = Kp;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Yp(8, c, i);
                                    }
                                    var f = c.child;
                                    if (null !== f) ((f.return = c), (Kp = f));
                                    else
                                        for (; null !== Kp; ) {
                                            var d = (c = Kp).sibling,
                                                p = c.return;
                                            if ((Jp(c), c === s)) {
                                                Kp = null;
                                                break;
                                            }
                                            if (null !== d) {
                                                ((d.return = p), (Kp = d));
                                                break;
                                            }
                                            Kp = p;
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
                            Kp = i;
                        }
                    }
                    if (0 != (2064 & i.subtreeFlags) && null !== o) ((o.return = i), (Kp = o));
                    else
                        e: for (; null !== Kp; ) {
                            if (0 != (2048 & (i = Kp).flags))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Yp(9, i, i.return);
                                }
                            var g = i.sibling;
                            if (null !== g) {
                                ((g.return = i.return), (Kp = g));
                                break e;
                            }
                            Kp = i.return;
                        }
                }
                var y = e.current;
                for (Kp = y; null !== Kp; ) {
                    var b = (o = Kp).child;
                    if (0 != (2064 & o.subtreeFlags) && null !== b) ((b.return = o), (Kp = b));
                    else
                        e: for (o = y; null !== Kp; ) {
                            if (0 != (2048 & (l = Kp).flags))
                                try {
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Xp(9, l);
                                    }
                                } catch (w) {
                                    yv(l, l.return, w);
                                }
                            if (l === o) {
                                Kp = null;
                                break e;
                            }
                            var _ = l.sibling;
                            if (null !== _) {
                                ((_.return = l.return), (Kp = _));
                                break e;
                            }
                            Kp = l.return;
                        }
                }
                if (((kh = a), Ic(), el && 'function' == typeof el.onPostCommitFiberRoot))
                    try {
                        el.onPostCommitFiberRoot(Jo, e);
                    } catch (w) {}
                r = !0;
            }
            return r;
        } finally {
            ((hl = n), (wh.transition = t));
        }
    }
    return !1;
}
function gv(e, t, n) {
    ((e = Rf(e, (t = lp(0, (t = rp(n, t)), 1)), 1)), (t = Qh()), null !== e && (dl(e, 1, t), Xh(e, t)));
}
function yv(e, t, n) {
    if (3 === e.tag) gv(e, e, n);
    else
        for (; null !== t; ) {
            if (3 === t.tag) {
                gv(t, e, n);
                break;
            }
            if (1 === t.tag) {
                var r = t.stateNode;
                if (
                    'function' == typeof t.type.getDerivedStateFromError ||
                    ('function' == typeof r.componentDidCatch && (null === Fh || !Fh.has(r)))
                ) {
                    ((t = Rf(t, (e = up(t, (e = rp(n, e)), 1)), 1)), (e = Qh()), null !== t && (dl(t, 1, e), Xh(t, e)));
                    break;
                }
            }
            t = t.return;
        }
}
function bv(e, t, n) {
    var r = e.pingCache;
    (null !== r && r.delete(t),
        (t = Qh()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Sh === e &&
            (Oh & n) === n &&
            (4 === Ch || (3 === Ch && (130023424 & Oh) === Oh && 500 > Ko() - zh) ? ov(e, 0) : (jh |= n)),
        Xh(e, t));
}
function _v(e, t) {
    0 === t && (0 == (1 & e.mode) ? (t = 1) : ((t = il), 0 == (130023424 & (il <<= 1)) && (il = 4194304)));
    var n = Qh();
    null !== (e = Af(e, t)) && (dl(e, t, n), Xh(e, n));
}
function wv(e) {
    var t = e.memoizedState,
        n = 0;
    (null !== t && (n = t.retryLane), _v(e, n));
}
function kv(e, t) {
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
            throw Error(Ja(314));
    }
    (null !== r && r.delete(t), _v(e, n));
}
function Sv(e, t) {
    return Bo(e, t);
}
function xv(e, t, n, r) {
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
function Ov(e, t, n, r) {
    return new xv(e, t, n, r);
}
function Ev(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
}
function Pv(e, t) {
    var n = e.alternate;
    return (
        null === n
            ? (((n = Ov(e.tag, t, e.key, e.mode)).elementType = e.elementType),
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
function Cv(e, t, n, r, a, i) {
    var o = 2;
    if (((r = e), 'function' == typeof e)) Ev(e) && (o = 1);
    else if ('string' == typeof e) o = 5;
    else
        e: switch (e) {
            case gi:
                return Av(n.children, a, i, t);
            case yi:
                ((o = 8), (a |= 8));
                break;
            case bi:
                return (((e = Ov(12, n, t, 2 | a)).elementType = bi), (e.lanes = i), e);
            case Si:
                return (((e = Ov(13, n, t, a)).elementType = Si), (e.lanes = i), e);
            case xi:
                return (((e = Ov(19, n, t, a)).elementType = xi), (e.lanes = i), e);
            case Pi:
                return Nv(n, a, i, t);
            default:
                if ('object' == typeof e && null !== e)
                    switch (e.$$typeof) {
                        case _i:
                            o = 10;
                            break e;
                        case wi:
                            o = 9;
                            break e;
                        case ki:
                            o = 11;
                            break e;
                        case Oi:
                            o = 14;
                            break e;
                        case Ei:
                            ((o = 16), (r = null));
                            break e;
                    }
                throw Error(Ja(130, null == e ? e : typeof e, ''));
        }
    return (((t = Ov(o, n, t, a)).elementType = e), (t.type = r), (t.lanes = i), t);
}
function Av(e, t, n, r) {
    return (((e = Ov(7, e, r, t)).lanes = n), e);
}
function Nv(e, t, n, r) {
    return (((e = Ov(22, e, r, t)).elementType = Pi), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e);
}
function Tv(e, t, n) {
    return (((e = Ov(6, e, null, t)).lanes = n), e);
}
function jv(e, t, n) {
    return (
        ((t = Ov(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
function Lv(e, t, n, r, a) {
    ((this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = fl(0)),
        (this.expirationTimes = fl(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = fl(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = a),
        (this.mutableSourceEagerHydrationData = null));
}
function Rv(e, t, n, r, a, i, o, l, u) {
    return (
        (e = new Lv(e, t, n, l, u)),
        1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
        (i = Ov(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Tf(i),
        e
    );
}
function zv(e) {
    if (!e) return wc;
    e: {
        if (Do((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(Ja(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ec(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (null !== t);
        throw Error(Ja(171));
    }
    if (1 === e.tag) {
        var n = e.type;
        if (Ec(n)) return Ac(e, n, t);
    }
    return t;
}
function Iv(e, t, n, r, a, i, o, l, u) {
    return (
        ((e = Rv(n, r, !0, e, 0, i, 0, l, u)).context = zv(null)),
        (n = e.current),
        ((i = Lf((r = Qh()), (a = Gh(n)))).callback = null != t ? t : null),
        Rf(n, i, a),
        (e.current.lanes = a),
        dl(e, a, r),
        Xh(e, r),
        e
    );
}
function Dv(e, t, n, r) {
    var a = t.current,
        i = Qh(),
        o = Gh(a);
    return (
        (n = zv(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = Lf(i, o)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = Rf(a, t, o)) && (Yh(e, a, o, i), zf(e, a, o)),
        o
    );
}
function Mv(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
}
function Vv(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
    }
}
function Fv(e, t) {
    (Vv(e, t), (e = e.alternate) && Vv(e, t));
}
gh = function (e, t, n) {
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps || Sc.current) pp = !0;
        else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                    (pp = !1),
                    (function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                (Sp(t), uf());
                                break;
                            case 5:
                                Kf(t);
                                break;
                            case 1:
                                Ec(t.type) && Nc(t);
                                break;
                            case 4:
                                Wf(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context,
                                    a = t.memoizedProps.value;
                                (_c(gf, r._currentValue), (r._currentValue = a));
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState))
                                    return null !== r.dehydrated
                                        ? (_c(Qf, 1 & Qf.current), (t.flags |= 128), null)
                                        : 0 != (n & t.child.childLanes)
                                          ? Tp(e, t, n)
                                          : (_c(Qf, 1 & Qf.current), null !== (e = Mp(e, t, n)) ? e.sibling : null);
                                _c(Qf, 1 & Qf.current);
                                break;
                            case 19:
                                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                    if (r) return Ip(e, t, n);
                                    t.flags |= 128;
                                }
                                if (
                                    (null !== (a = t.memoizedState) &&
                                        ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                                    _c(Qf, Qf.current),
                                    r)
                                )
                                    break;
                                return null;
                            case 22:
                            case 23:
                                return ((t.lanes = 0), yp(e, t, n));
                        }
                        return Mp(e, t, n);
                    })(e, t, n)
                );
            pp = 0 != (131072 & e.flags);
        }
    else ((pp = !1), Zc && 0 != (1048576 & t.flags) && qc(t, Fc, t.index));
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            (Dp(e, t), (e = t.pendingProps));
            var a = Oc(t, kc.current);
            (xf(t, n), (a = cd(null, t, r, e, a, n)));
            var i = fd();
            return (
                (t.flags |= 1),
                'object' == typeof a && null !== a && 'function' == typeof a.render && void 0 === a.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Ec(r) ? ((i = !0), Nc(t)) : (i = !1),
                      (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
                      Tf(t),
                      (a.updater = Zd),
                      (t.stateNode = a),
                      (a._reactInternals = t),
                      np(t, r, e, n),
                      (t = kp(null, t, r, !0, i, n)))
                    : ((t.tag = 0), Zc && i && Qc(t), hp(null, t, a, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Dp(e, t),
                    (e = t.pendingProps),
                    (r = (a = r._init)(r._payload)),
                    (t.type = r),
                    (a = t.tag =
                        (function (e) {
                            if ('function' == typeof e) return Ev(e) ? 1 : 0;
                            if (null != e) {
                                if ((e = e.$$typeof) === ki) return 11;
                                if (e === Oi) return 14;
                            }
                            return 2;
                        })(r)),
                    (e = Yd(r, e)),
                    a)
                ) {
                    case 0:
                        t = _p(null, t, r, e, n);
                        break e;
                    case 1:
                        t = wp(null, t, r, e, n);
                        break e;
                    case 11:
                        t = vp(null, t, r, e, n);
                        break e;
                    case 14:
                        t = mp(null, t, r, Yd(r.type, e), n);
                        break e;
                }
                throw Error(Ja(306, r, ''));
            }
            return t;
        case 0:
            return ((r = t.type), (a = t.pendingProps), _p(e, t, r, (a = t.elementType === r ? a : Yd(r, a)), n));
        case 1:
            return ((r = t.type), (a = t.pendingProps), wp(e, t, r, (a = t.elementType === r ? a : Yd(r, a)), n));
        case 3:
            e: {
                if ((Sp(t), null === e)) throw Error(Ja(387));
                ((r = t.pendingProps), (a = (i = t.memoizedState).element), jf(e, t), Df(t, r, null, n));
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
                        t = xp(e, t, r, n, (a = rp(Error(Ja(423)), t)));
                        break e;
                    }
                    if (r !== a) {
                        t = xp(e, t, r, n, (a = rp(Error(Ja(424)), t)));
                        break e;
                    }
                    for (
                        Xc = rc(t.stateNode.containerInfo.firstChild),
                            Yc = t,
                            Zc = !0,
                            Jc = null,
                            n = mf(t, null, r, n),
                            t.child = n;
                        n;

                    )
                        ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                    if ((uf(), r === a)) {
                        t = Mp(e, t, n);
                        break e;
                    }
                    hp(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Kf(t),
                null === e && rf(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (o = a.children),
                Ys(r, a) ? (o = null) : null !== i && Ys(r, i) && (t.flags |= 32),
                bp(e, t),
                hp(e, t, o, n),
                t.child
            );
        case 6:
            return (null === e && rf(t), null);
        case 13:
            return Tp(e, t, n);
        case 4:
            return (
                Wf(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = vf(t, null, r, n)) : hp(e, t, r, n),
                t.child
            );
        case 11:
            return ((r = t.type), (a = t.pendingProps), vp(e, t, r, (a = t.elementType === r ? a : Yd(r, a)), n));
        case 7:
            return (hp(e, t, t.pendingProps, n), t.child);
        case 8:
        case 12:
            return (hp(e, t, t.pendingProps.children, n), t.child);
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (a = t.pendingProps),
                    (i = t.memoizedProps),
                    (o = a.value),
                    _c(gf, r._currentValue),
                    (r._currentValue = o),
                    null !== i)
                )
                    if (ts(i.value, o)) {
                        if (i.children === a.children && !Sc.current) {
                            t = Mp(e, t, n);
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
                                            (u = Lf(-1, n & -n)).tag = 2;
                                            var s = i.updateQueue;
                                            if (null !== s) {
                                                var c = (s = s.shared).pending;
                                                (null === c ? (u.next = u) : ((u.next = c.next), (c.next = u)),
                                                    (s.pending = u));
                                            }
                                        }
                                        ((i.lanes |= n),
                                            null !== (u = i.alternate) && (u.lanes |= n),
                                            Sf(i.return, n, t),
                                            (l.lanes |= n));
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (10 === i.tag) o = i.type === t.type ? null : i.child;
                            else if (18 === i.tag) {
                                if (null === (o = i.return)) throw Error(Ja(341));
                                ((o.lanes |= n),
                                    null !== (l = o.alternate) && (l.lanes |= n),
                                    Sf(o, n, t),
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
                (hp(e, t, a.children, n), (t = t.child));
            }
            return t;
        case 9:
            return (
                (a = t.type),
                (r = t.pendingProps.children),
                xf(t, n),
                (r = r((a = Of(a)))),
                (t.flags |= 1),
                hp(e, t, r, n),
                t.child
            );
        case 14:
            return ((a = Yd((r = t.type), t.pendingProps)), mp(e, t, r, (a = Yd(r.type, a)), n));
        case 15:
            return gp(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : Yd(r, a)),
                Dp(e, t),
                (t.tag = 1),
                Ec(r) ? ((e = !0), Nc(t)) : (e = !1),
                xf(t, n),
                ep(t, r, a),
                np(t, r, a, n),
                kp(null, t, r, !0, e, n)
            );
        case 19:
            return Ip(e, t, n);
        case 22:
            return yp(e, t, n);
    }
    throw Error(Ja(156, t.tag));
};
var Uv =
    'function' == typeof reportError
        ? reportError
        : function (e) {
              console.error(e);
          };
function Bv(e) {
    this._internalRoot = e;
}
function $v(e) {
    this._internalRoot = e;
}
function Wv(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function Hv(e) {
    return !(
        !e ||
        (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
    );
}
function Kv() {}
function qv(e, t, n, r, a) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if ('function' == typeof a) {
            var l = a;
            a = function () {
                var e = Mv(o);
                l.call(e);
            };
        }
        Dv(t, o, e, a);
    } else
        o = (function (e, t, n, r, a) {
            if (a) {
                if ('function' == typeof r) {
                    var i = r;
                    r = function () {
                        var e = Mv(o);
                        i.call(e);
                    };
                }
                var o = Iv(t, r, e, 0, null, !1, 0, '', Kv);
                return (
                    (e._reactRootContainer = o),
                    (e[uc] = o.current),
                    Is(8 === e.nodeType ? e.parentNode : e),
                    av(),
                    o
                );
            }
            for (; (a = e.lastChild); ) e.removeChild(a);
            if ('function' == typeof r) {
                var l = r;
                r = function () {
                    var e = Mv(u);
                    l.call(e);
                };
            }
            var u = Rv(e, 0, !1, null, 0, !1, 0, '', Kv);
            return (
                (e._reactRootContainer = u),
                (e[uc] = u.current),
                Is(8 === e.nodeType ? e.parentNode : e),
                av(function () {
                    Dv(t, u, n, r);
                }),
                u
            );
        })(n, t, e, a, r);
    return Mv(o);
}
(($v.prototype.render = Bv.prototype.render =
    function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(Ja(409));
        Dv(e, t, null, null);
    }),
    ($v.prototype.unmount = Bv.prototype.unmount =
        function () {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                (av(function () {
                    Dv(null, e, null, null);
                }),
                    (t[uc] = null));
            }
        }),
    ($v.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = bl();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < Cl.length && 0 !== t && t < Cl[n].priority; n++);
            (Cl.splice(n, 0, e), 0 === n && jl(e));
        }
    }),
    (ml = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = ol(t.pendingLanes);
                    0 !== n && (pl(t, 1 | n), Xh(t, Ko()), 0 == (6 & kh) && ((Ih = Ko() + 500), Ic()));
                }
                break;
            case 13:
                (av(function () {
                    var t = Af(e, 1);
                    if (null !== t) {
                        var n = Qh();
                        Yh(t, e, 1, n);
                    }
                }),
                    Fv(e, 1));
        }
    }),
    (gl = function (e) {
        if (13 === e.tag) {
            var t = Af(e, 134217728);
            if (null !== t) Yh(t, e, 134217728, Qh());
            Fv(e, 134217728);
        }
    }),
    (yl = function (e) {
        if (13 === e.tag) {
            var t = Gh(e),
                n = Af(e, t);
            if (null !== n) Yh(n, e, t, Qh());
            Fv(e, t);
        }
    }),
    (bl = function () {
        return hl;
    }),
    (_l = function (e, t) {
        var n = hl;
        try {
            return ((hl = e), t());
        } finally {
            hl = n;
        }
    }),
    (go = function (e, t, n) {
        switch (t) {
            case 'input':
                if ((Ki(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                    for (n = e; n.parentNode; ) n = n.parentNode;
                    for (
                        n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var a = vc(r);
                            if (!a) throw Error(Ja(90));
                            (Ui(r), Ki(r, a));
                        }
                    }
                }
                break;
            case 'textarea':
                Ji(e, n);
                break;
            case 'select':
                null != (t = n.value) && Yi(e, !!n.multiple, t, !1);
        }
    }),
    (So = rv),
    (xo = av));
var Qv = { usingClientEntryPoint: !1, Events: [pc, hc, vc, wo, ko, rv] },
    Gv = { findFiberByHostInstance: dc, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    Yv = {
        bundleType: Gv.bundleType,
        version: Gv.version,
        rendererPackageName: Gv.rendererPackageName,
        rendererConfig: Gv.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: hi.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return null === (e = Fo(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
            Gv.findFiberByHostInstance ||
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
    var Xv = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xv.isDisabled && Xv.supportsFiber)
        try {
            ((Jo = Xv.inject(Yv)), (el = Xv));
        } catch (ao) {}
}
((qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qv),
    (qa.createPortal = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Wv(t)) throw Error(Ja(200));
        return (function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: mi, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
        })(e, t, null, n);
    }),
    (qa.createRoot = function (e, t) {
        if (!Wv(e)) throw Error(Ja(299));
        var n = !1,
            r = '',
            a = Uv;
        return (
            null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
            (t = Rv(e, 1, !1, null, 0, n, 0, r, a)),
            (e[uc] = t.current),
            Is(8 === e.nodeType ? e.parentNode : e),
            new Bv(t)
        );
    }),
    (qa.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
            if ('function' == typeof e.render) throw Error(Ja(188));
            throw ((e = Object.keys(e).join(',')), Error(Ja(268, e)));
        }
        return (e = null === (e = Fo(t)) ? null : e.stateNode);
    }),
    (qa.flushSync = function (e) {
        return av(e);
    }),
    (qa.hydrate = function (e, t, n) {
        if (!Hv(t)) throw Error(Ja(200));
        return qv(null, e, t, !0, n);
    }),
    (qa.hydrateRoot = function (e, t, n) {
        if (!Wv(e)) throw Error(Ja(405));
        var r = (null != n && n.hydratedSources) || null,
            a = !1,
            i = '',
            o = Uv;
        if (
            (null != n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
            (t = Iv(t, null, e, 1, null != n ? n : null, a, 0, i, o)),
            (e[uc] = t.current),
            Is(e),
            r)
        )
            for (e = 0; e < r.length; e++)
                ((a = (a = (n = r[e])._getVersion)(n._source)),
                    null == t.mutableSourceEagerHydrationData
                        ? (t.mutableSourceEagerHydrationData = [n, a])
                        : t.mutableSourceEagerHydrationData.push(n, a));
        return new $v(t);
    }),
    (qa.render = function (e, t, n) {
        if (!Hv(t)) throw Error(Ja(200));
        return qv(null, e, t, !1, n);
    }),
    (qa.unmountComponentAtNode = function (e) {
        if (!Hv(e)) throw Error(Ja(40));
        return (
            !!e._reactRootContainer &&
            (av(function () {
                qv(null, null, e, !1, function () {
                    ((e._reactRootContainer = null), (e[uc] = null));
                });
            }),
            !0)
        );
    }),
    (qa.unstable_batchedUpdates = rv),
    (qa.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!Hv(n)) throw Error(Ja(200));
        if (null == e || void 0 === e._reactInternals) throw Error(Ja(38));
        return qv(e, t, n, !1, r);
    }),
    (qa.version = '18.3.1-next-f1338f8080-20240426'),
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
    (Ka.exports = qa));
var Zv = Ka.exports,
    Jv = Zv;
((Ha.createRoot = Jv.createRoot), (Ha.hydrateRoot = Jv.hydrateRoot));
var em = mm(),
    tm = (e) => dm(e, em),
    nm = mm();
tm.write = (e) => dm(e, nm);
var rm = mm();
tm.onStart = (e) => dm(e, rm);
var am = mm();
tm.onFrame = (e) => dm(e, am);
var im = mm();
tm.onFinish = (e) => dm(e, im);
var om = [];
tm.setTimeout = (e, t) => {
    const n = tm.now() + t,
        r = () => {
            const e = om.findIndex((e) => e.cancel == r);
            (~e && om.splice(e, 1), (cm -= ~e ? 1 : 0));
        },
        a = { time: n, handler: e, cancel: r };
    return (om.splice(lm(n), 0, a), (cm += 1), pm(), a);
};
var lm = (e) => ~(~om.findIndex((t) => t.time > e) || ~om.length);
((tm.cancel = (e) => {
    (rm.delete(e), am.delete(e), im.delete(e), em.delete(e), nm.delete(e));
}),
    (tm.sync = (e) => {
        ((fm = !0), tm.batchedUpdates(e), (fm = !1));
    }),
    (tm.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            ((t = e), tm.onStart(n));
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                (rm.delete(n), (t = null));
            }),
            r
        );
    }));
var um = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
((tm.use = (e) => (um = e)),
    (tm.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (tm.batchedUpdates = (e) => e()),
    (tm.catch = console.error),
    (tm.frameLoop = 'always'),
    (tm.advance = () => {
        'demand' !== tm.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : vm();
    }));
var sm = -1,
    cm = 0,
    fm = !1;
function dm(e, t) {
    fm ? (t.delete(e), e(0)) : (t.add(e), pm());
}
function pm() {
    sm < 0 && ((sm = 0), 'demand' !== tm.frameLoop && um(hm));
}
function hm() {
    ~sm && (um(hm), tm.batchedUpdates(vm));
}
function vm() {
    const e = sm;
    sm = tm.now();
    const t = lm(sm);
    (t && (gm(om.splice(0, t), (e) => e.handler()), (cm -= t)),
        cm ? (rm.flush(), em.flush(e ? Math.min(64, sm - e) : 16.667), am.flush(), nm.flush(), im.flush()) : (sm = -1));
}
function mm() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            ((cm += t != e || e.has(n) ? 0 : 1), e.add(n));
        },
        delete: (n) => ((cm -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (cm -= t.size), gm(t, (t) => t(n) && e.add(t)), (cm += e.size), (t = e));
        },
    };
}
function gm(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            tm.catch(n);
        }
    });
}
var ym = Object.defineProperty,
    bm = {};
((e, t) => {
    for (var n in t) ym(e, n, { get: t[n], enumerable: !0 });
})(bm, {
    assign: () => Nm,
    colors: () => Pm,
    createStringInterpolator: () => Sm,
    skipAnimation: () => Cm,
    to: () => xm,
    willAdvance: () => Am,
});
var _m = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
var wm = (e, t) => e.forEach(t);
function km(e, t, n) {
    if (_m.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Sm,
    xm,
    Om = (e) => (_m.und(e) ? [] : _m.arr(e) ? e : [e]),
    Em = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    Pm = null,
    Cm = !1,
    Am = function () {},
    Nm = (e) => {
        (e.to && (xm = e.to),
            e.now && (tm.now = e.now),
            void 0 !== e.colors && (Pm = e.colors),
            null != e.skipAnimation && (Cm = e.skipAnimation),
            e.createStringInterpolator && (Sm = e.createStringInterpolator),
            e.requestAnimationFrame && tm.use(e.requestAnimationFrame),
            e.batchedUpdates && (tm.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (Am = e.willAdvance),
            e.frameLoop && (tm.frameLoop = e.frameLoop));
    },
    Tm = new Set(),
    jm = [],
    Lm = [],
    Rm = 0,
    zm = {
        get idle() {
            return !Tm.size && !jm.length;
        },
        start(e) {
            Rm > e.priority ? (Tm.add(e), tm.onStart(Im)) : (Dm(e), tm(Vm));
        },
        advance: Vm,
        sort(e) {
            if (Rm) tm.onFrame(() => zm.sort(e));
            else {
                const t = jm.indexOf(e);
                ~t && (jm.splice(t, 1), Mm(e));
            }
        },
        clear() {
            ((jm = []), Tm.clear());
        },
    };
function Im() {
    (Tm.forEach(Dm), Tm.clear(), tm(Vm));
}
function Dm(e) {
    jm.includes(e) || Mm(e);
}
function Mm(e) {
    jm.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(jm, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function Vm(e) {
    const t = Lm;
    for (let n = 0; n < jm.length; n++) {
        const r = jm[n];
        ((Rm = r.priority), r.idle || (Am(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((Rm = 0), ((Lm = jm).length = 0), (jm = t).length > 0);
}
var Fm = '[-+]?\\d*\\.?\\d+',
    Um = Fm + '%';
function Bm(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var $m = new RegExp('rgb' + Bm(Fm, Fm, Fm)),
    Wm = new RegExp('rgba' + Bm(Fm, Fm, Fm, Fm)),
    Hm = new RegExp('hsl' + Bm(Fm, Um, Um)),
    Km = new RegExp('hsla' + Bm(Fm, Um, Um, Fm)),
    qm = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    Qm = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    Gm = /^#([0-9a-fA-F]{6})$/,
    Ym = /^#([0-9a-fA-F]{8})$/;
function Xm(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function Zm(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - r,
        i = Xm(a, r, e + 1 / 3),
        o = Xm(a, r, e),
        l = Xm(a, r, e - 1 / 3);
    return (Math.round(255 * i) << 24) | (Math.round(255 * o) << 16) | (Math.round(255 * l) << 8);
}
function Jm(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function eg(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function tg(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function ng(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function rg(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = Gm.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : Pm && void 0 !== Pm[e]
                ? Pm[e]
                : (t = $m.exec(e))
                  ? ((Jm(t[1]) << 24) | (Jm(t[2]) << 16) | (Jm(t[3]) << 8) | 255) >>> 0
                  : (t = Wm.exec(e))
                    ? ((Jm(t[1]) << 24) | (Jm(t[2]) << 16) | (Jm(t[3]) << 8) | tg(t[4])) >>> 0
                    : (t = qm.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = Ym.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = Qm.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = Hm.exec(e))
                            ? (255 | Zm(eg(t[1]), ng(t[2]), ng(t[3]))) >>> 0
                            : (t = Km.exec(e))
                              ? (Zm(eg(t[1]), ng(t[2]), ng(t[3])) | tg(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var ag = (e, t, n) => {
    if (_m.fun(e)) return e;
    if (_m.arr(e)) return ag({ range: e, output: t, extrapolate: n });
    if (_m.str(e.output[0])) return Sm(e);
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
var ig = Symbol.for('FluidValue.get'),
    og = Symbol.for('FluidValue.observers'),
    lg = (e) => Boolean(e && e[ig]),
    ug = (e) => (e && e[ig] ? e[ig]() : e);
function sg(e, t) {
    const n = e[og];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
var cg = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            fg(this, e);
        }
    },
    fg = (e, t) => vg(e, ig, t);
function dg(e, t) {
    if (e[ig]) {
        let n = e[og];
        (n || vg(e, og, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function pg(e, t) {
    const n = e[og];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[og] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
var hg,
    vg = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    mg = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    gg = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    yg = new RegExp(`(${mg.source})(%|[a-z]+)`, 'i'),
    bg = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    _g = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    wg = (e) => {
        const [t, n] = kg(e);
        if (!t || Em()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && _g.test(n) ? wg(n) : n || e;
    },
    kg = (e) => {
        const t = _g.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    Sg = (e, t, n, r, a) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${a})`,
    xg = (e) => {
        hg || (hg = Pm ? new RegExp(`(${Object.keys(Pm).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => ug(e).replace(_g, wg).replace(gg, rg).replace(hg, rg)),
            n = t.map((e) => e.match(mg).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => ag({ ...e, output: t }));
        return (e) => {
            var n;
            const a = !yg.test(t[0]) && (null == (n = t.find((e) => yg.test(e))) ? void 0 : n.replace(mg, ''));
            let i = 0;
            return t[0].replace(mg, () => `${r[i++](e)}${a || ''}`).replace(bg, Sg);
        };
    },
    Og = 'react-spring: ',
    Eg = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${Og}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    Pg = Eg(console.warn);
function Cg(e) {
    return _m.str(e) && ('#' == e[0] || /\d/.test(e) || (!Em() && _g.test(e)) || e in (Pm || {}));
}
Eg(console.warn);
var Ag = Em() ? V.useEffect : V.useLayoutEffect;
function Ng() {
    const e = V.useState()[1],
        t = (() => {
            const e = V.useRef(!1);
            return (
                Ag(
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
var Tg = [],
    jg = Symbol.for('Animated:node'),
    Lg = (e) => e && e[jg],
    Rg = (e, t) => {
        return ((n = e), (r = jg), (a = t), Object.defineProperty(n, r, { value: a, writable: !0, configurable: !0 }));
        var n, r, a;
    },
    zg = (e) => e && e[jg] && e[jg].getPayload(),
    Ig = class {
        constructor() {
            Rg(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    Dg = class extends Ig {
        constructor(e) {
            (super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                _m.num(this._value) && (this.lastPosition = this._value));
        }
        static create(e) {
            return new Dg(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                _m.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            ((this.done = !1),
                _m.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null)));
        }
    },
    Mg = class extends Dg {
        constructor(e) {
            (super(0), (this._string = null), (this._toString = ag({ output: [e, e] })));
        }
        static create(e) {
            return new Mg(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (_m.str(e)) {
                if (e == this._string) return !1;
                ((this._string = e), (this._value = 1));
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null;
            }
            return !0;
        }
        reset(e) {
            (e && (this._toString = ag({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
        }
    },
    Vg = { dependencies: null },
    Fg = class extends Ig {
        constructor(e) {
            (super(), (this.source = e), this.setValue(e));
        }
        getValue(e) {
            const t = {};
            return (
                km(this.source, (n, r) => {
                    var a;
                    (a = n) && a[jg] === a ? (t[r] = n.getValue(e)) : lg(n) ? (t[r] = ug(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            ((this.source = e), (this.payload = this._makePayload(e)));
        }
        reset() {
            this.payload && wm(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return (km(e, this._addToPayload, t), Array.from(t));
            }
        }
        _addToPayload(e) {
            Vg.dependencies && lg(e) && Vg.dependencies.add(e);
            const t = zg(e);
            t && wm(t, (e) => this.add(e));
        }
    },
    Ug = class extends Fg {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new Ug(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map(Bg)), !0);
        }
    };
function Bg(e) {
    return (Cg(e) ? Mg : Dg).create(e);
}
var $g = (e, t) => {
        const n = !_m.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return V.forwardRef((r, a) => {
            const i = V.useRef(null),
                o =
                    n &&
                    V.useCallback(
                        (e) => {
                            i.current = (function (e, t) {
                                e && (_m.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(a, e);
                        },
                        [a],
                    ),
                [l, u] = (function (e, t) {
                    const n = new Set();
                    ((Vg.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                    return ((e = new Fg(e)), (Vg.dependencies = null), [e, n]);
                })(r, t),
                s = Ng(),
                c = () => {
                    const e = i.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && s();
                },
                f = new Wg(c, u),
                d = V.useRef();
            var p;
            (Ag(
                () => (
                    (d.current = f),
                    wm(u, (e) => dg(e, f)),
                    () => {
                        d.current && (wm(d.current.deps, (e) => pg(e, d.current)), tm.cancel(d.current.update));
                    }
                ),
            ),
                V.useEffect(c, []),
                (p = () => () => {
                    const e = d.current;
                    wm(e.deps, (t) => pg(t, e));
                }),
                V.useEffect(p, Tg));
            const h = t.getComponentProps(l.getValue());
            return V.createElement(e, { ...h, ref: o });
        });
    },
    Wg = class {
        constructor(e, t) {
            ((this.update = e), (this.deps = t));
        }
        eventObserved(e) {
            'change' == e.type && tm.write(this.update);
        }
    };
var Hg,
    Kg,
    qg = Symbol.for('AnimatedComponent'),
    Qg = (e) => (_m.str(e) ? e : e && _m.str(e.displayName) ? e.displayName : (_m.fun(e) && e.name) || null),
    Gg = (e) => e instanceof Xg,
    Yg = 1,
    Xg = class extends cg {
        constructor() {
            (super(...arguments), (this.id = Yg++), (this._priority = 0));
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = Lg(this);
            return e && e.getValue();
        }
        to(...e) {
            return bm.to(this, e);
        }
        interpolate(...e) {
            return (Pg(`${Og}The "interpolate" function is deprecated in v9 (use "to" instead)`), bm.to(this, e));
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
            sg(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            (this.idle || zm.sort(this), sg(this, { type: 'priority', parent: this, priority: e }));
        }
    },
    Zg = ({ children: e, ...t }) => {
        const n = V.useContext(Jg),
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
        const { Provider: i } = Jg;
        return V.createElement(i, { value: t }, e);
    },
    Jg =
        ((Hg = Zg),
        (Kg = {}),
        Object.assign(Hg, V.createContext(Kg)),
        (Hg.Provider._context = Hg),
        (Hg.Consumer._context = Hg),
        Hg);
((Zg.Provider = Jg.Provider), (Zg.Consumer = Jg.Consumer));
var ey = class extends Xg {
    constructor(e, t) {
        (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = ag(...t)));
        const n = this._get(),
            r = (function (e) {
                const t = Lg(e);
                return t ? t.constructor : _m.arr(e) ? Ug : Cg(e) ? Mg : Dg;
            })(n);
        Rg(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        ((function (e, t) {
            if (_m.arr(e)) {
                if (!_m.arr(t) || e.length !== t.length) return !1;
                for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                return !0;
            }
            return e === t;
        })(t, this.get()) || (Lg(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && ny(this._active) && ry(this));
    }
    _get() {
        const e = _m.arr(this.source) ? this.source.map(ug) : Om(ug(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !ny(this._active) &&
            ((this.idle = !1),
            wm(zg(this), (e) => {
                e.done = !1;
            }),
            bm.skipAnimation ? (tm.batchedUpdates(() => this.advance()), ry(this)) : zm.start(this));
    }
    _attach() {
        let e = 1;
        (wm(Om(this.source), (t) => {
            (lg(t) && dg(t, this), Gg(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (wm(Om(this.source), (e) => {
            lg(e) && pg(e, this);
        }),
            this._active.clear(),
            ry(this));
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = Om(this.source).reduce((e, t) => Math.max(e, (Gg(t) ? t.priority : 0) + 1), 0));
    }
};
function ty(e) {
    return !1 !== e.idle;
}
function ny(e) {
    return !e.size || Array.from(e).every(ty);
}
function ry(e) {
    e.idle ||
        ((e.idle = !0),
        wm(zg(e), (e) => {
            e.done = !0;
        }),
        sg(e, { type: 'idle', parent: e }));
}
bm.assign({ createStringInterpolator: xg, to: (e, t) => new ey(e, t) });
var ay = /^--/;
function iy(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || ay.test(e) || (ly.hasOwnProperty(e) && ly[e])
          ? ('' + t).trim()
          : t + 'px';
}
var oy = {};
var ly = {
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
    uy = ['Webkit', 'Ms', 'Moz', 'O'];
ly = Object.keys(ly).reduce(
    (e, t) => (uy.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    ly,
);
var sy = /^(matrix|translate|scale|rotate|skew)/,
    cy = /^(translate)/,
    fy = /^(rotate|skew)/,
    dy = (e, t) => (_m.num(e) && 0 !== e ? e + t : e),
    py = (e, t) => (_m.arr(e) ? e.every((e) => py(e, t)) : _m.num(e) ? e === t : parseFloat(e) === t),
    hy = class extends Fg {
        constructor({ x: e, y: t, z: n, ...r }) {
            const a = [],
                i = [];
            ((e || t || n) &&
                (a.push([e || 0, t || 0, n || 0]),
                i.push((e) => [`translate3d(${e.map((e) => dy(e, 'px')).join(',')})`, py(e, 0)])),
                km(r, (e, t) => {
                    if ('transform' === t) (a.push([e || '']), i.push((e) => [e, '' === e]));
                    else if (sy.test(t)) {
                        if ((delete r[t], _m.und(e))) return;
                        const n = cy.test(t) ? 'px' : fy.test(t) ? 'deg' : '';
                        (a.push(Om(e)),
                            i.push(
                                'rotate3d' === t
                                    ? ([e, t, r, a]) => [`rotate3d(${e},${t},${r},${dy(a, n)})`, py(a, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => dy(e, n)).join(',')})`,
                                          py(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                a.length && (r.transform = new vy(a, i)),
                super(r));
        }
    },
    vy = class extends cg {
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
                wm(this.inputs, (n, r) => {
                    const a = ug(n[0]),
                        [i, o] = this.transforms[r](_m.arr(a) ? a : n.map(ug));
                    ((e += ' ' + i), (t = t && o));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && wm(this.inputs, (e) => wm(e, (e) => lg(e) && dg(e, this)));
        }
        observerRemoved(e) {
            0 == e && wm(this.inputs, (e) => wm(e, (e) => lg(e) && pg(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), sg(this, e));
        }
    };
function my(e, t) {
    (void 0 === t && (t = 'Illegal state'),
        e ||
            (function (e) {
                throw new Error('[mobx-utils] ' + e);
            })(t));
}
(bm.assign({
    batchedUpdates: Zv.unstable_batchedUpdates,
    createStringInterpolator: xg,
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
            createAnimatedStyle: n = (e) => new Fg(e),
            getComponentProps: r = (e) => e,
        } = {},
    ) => {
        const a = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
            i = (e) => {
                const t = Qg(e) || 'Anonymous';
                return (
                    ((e = _m.str(e) ? i[e] || (i[e] = $g(e, a)) : e[qg] || (e[qg] = $g(e, a))).displayName =
                        `Animated(${t})`),
                    e
                );
            };
        km(e, (t, n) => {
            (_m.arr(e) && (n = Qg(t)), (i[n] = i(t)));
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
                            : oy[t] || (oy[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                    );
                void 0 !== a && (e.textContent = a);
                for (const f in r)
                    if (r.hasOwnProperty(f)) {
                        const t = iy(f, r[f]);
                        ay.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                    }
                (c.forEach((t, n) => {
                    e.setAttribute(t, s[n]);
                }),
                    void 0 !== i && (e.scrollTop = i),
                    void 0 !== o && (e.scrollLeft = o),
                    void 0 !== l && e.setAttribute('viewBox', l));
            },
            createAnimatedStyle: (e) => new hy(e),
            getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
        },
    ));
var gy,
    yy = function (e) {
        return e && e !== Object.prototype && Object.getOwnPropertyNames(e).concat(yy(Object.getPrototypeOf(e)) || []);
    },
    by = function (e) {
        return (function (e) {
            var t = yy(e);
            return t.filter(function (e, n) {
                return t.indexOf(e) === n;
            });
        })(e).filter(function (e) {
            return 'constructor' !== e && !~e.indexOf('__');
        });
    },
    _y = 'pending',
    wy = 'fulfilled',
    ky = 'rejected';
function Sy(e) {
    switch (this.state) {
        case _y:
            return e.pending && e.pending(this.value);
        case ky:
            return e.rejected && e.rejected(this.value);
        case wy:
            return e.fulfilled ? e.fulfilled(this.value) : this.value;
    }
}
function xy(e, t) {
    if (
        (my(arguments.length <= 2, 'fromPromise expects up to two arguments'),
        my(
            'function' == typeof e || ('object' == typeof e && e && 'function' == typeof e.then),
            'Please pass a promise or function to fromPromise',
        ),
        !0 === e.isPromiseBasedObservable)
    )
        return e;
    'function' == typeof e && (e = new Promise(e));
    var n = e;
    (e.then(
        hr('observableFromPromise-resolve', function (e) {
            ((n.value = e), (n.state = wy));
        }),
        hr('observableFromPromise-reject', function (e) {
            ((n.value = e), (n.state = ky));
        }),
    ),
        (n.isPromiseBasedObservable = !0),
        (n.case = Sy));
    var r = !t || (t.state !== wy && t.state !== _y) ? void 0 : t.value;
    return (xr(n, { value: r, state: _y }, {}, { deep: !1 }), n);
}
(((gy = xy || (xy = {})).reject = hr('fromPromise.reject', function (e) {
    var t = gy(Promise.reject(e));
    return ((t.state = ky), (t.value = e), t);
})),
    (gy.resolve = hr('fromPromise.resolve', function (e) {
        void 0 === e && (e = void 0);
        var t = gy(Promise.resolve(e));
        return ((t.state = wy), (t.value = e), t);
    })));
var Oy = function (e, t, n, r) {
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
            Hr(this),
            (function (e) {
                kn(e.name, !1, e, this, void 0);
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
        Oy([fn.ref], e.prototype, 'current', void 0),
        Oy([hr.bound], e.prototype, 'next', null),
        Oy([hr.bound], e.prototype, 'complete', null),
        Oy([hr.bound], e.prototype, 'error', null));
})();
var Ey = function () {
        return (
            (Ey =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e;
                }),
            Ey.apply(this, arguments)
        );
    },
    Py = function (e, t, n, r) {
        var a,
            i = arguments.length,
            o = i < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
        else
            for (var l = e.length - 1; l >= 0; l--)
                (a = e[l]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, n, o) : a(t, n)) || o);
        return (i > 3 && o && Object.defineProperty(t, n, o), o);
    },
    Cy = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
!(function () {
    function e(e) {
        var t = this;
        (Object.defineProperty(this, 'model', { enumerable: !0, configurable: !0, writable: !0, value: e }),
            Object.defineProperty(this, 'localValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: fn.map({}),
            }),
            Object.defineProperty(this, 'localComputedValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: fn.map({}),
            }),
            Object.defineProperty(this, 'isPropertyDirty', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    return t.localValues.has(e);
                },
            }),
            Hr(this),
            my(ka(e), 'createViewModel expects an observable object'));
        var n = by(this);
        by(e).forEach(function (r) {
            var a;
            if (!n.includes(r) && r !== _t && '__mobxDidRunLazyInitializers' !== r) {
                if (
                    (my(
                        -1 === Cy.indexOf(r),
                        'The propertyname ' + r + ' is reserved and cannot be used with viewModels',
                    ),
                    Lr(e, r))
                ) {
                    var i = Ia(e, r),
                        o = i.derivation.bind(t),
                        l = null === (a = i.setter_) || void 0 === a ? void 0 : a.bind(t);
                    t.localComputedValues.set(r, vn(o, { set: l }));
                }
                var u = Object.getOwnPropertyDescriptor(e, r),
                    s = u ? { enumerable: u.enumerable } : {};
                Object.defineProperty(
                    t,
                    r,
                    Ey(Ey({}, s), {
                        configurable: !0,
                        get: function () {
                            return Lr(e, r)
                                ? t.localComputedValues.get(r).get()
                                : t.isPropertyDirty(r)
                                  ? t.localValues.get(r)
                                  : t.model[r];
                        },
                        set: hr(function (n) {
                            Lr(e, r)
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
                ka(e)
                    ? e[_t].keys_()
                    : da(e) || va(e)
                      ? Array.from(e.keys())
                      : ia(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void Le(5)).forEach(function (e) {
                    var n = t.localValues.get(e),
                        r = t.model[e];
                    ia(r) ? r.replace(n) : da(r) ? (r.clear(), r.merge(n)) : jr(n) || (t.model[e] = n);
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
        Py([vn], e.prototype, 'isDirty', null),
        Py([vn], e.prototype, 'changedValues', null),
        Py([hr.bound], e.prototype, 'submit', null),
        Py([hr.bound], e.prototype, 'reset', null),
        Py([hr.bound], e.prototype, 'resetProperty', null));
})();
var Ay = (function () {
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
            (s._disposeBaseObserver = zr(s._base, function (e) {
                if ('splice' === e.type)
                    Ir(function () {
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
                    Ir(function () {
                        (s._removeItem(e.oldValue), s._addItem(e.newValue));
                    });
                }
            })),
            s
        );
    }
    (Ay(t, e),
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
                        ((n = fn([], { name: 'GroupArray[' + this._keyToName(t) + ']', deep: !1 })),
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
                        reaction: br(
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
})(fa);
export { F as R, ve as a, me as b, Ce as c, je as d, Ha as e, Q as j, V as r };
