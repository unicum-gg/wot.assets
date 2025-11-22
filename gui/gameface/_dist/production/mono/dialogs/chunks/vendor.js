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
function S(e, t, n) {
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
var k = (S.prototype = new w());
((k.constructor = S), y(k, _.prototype), (k.isPureReactComponent = !0));
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
function R(e, t, n) {
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
function L(e) {
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
    map: R,
    forEach: function (e, t, n) {
        R(
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
            R(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            R(e, function (e) {
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
    (a.PureComponent = S),
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
        return { $$typeof: v, _payload: { _status: -1, _result: e }, _init: L };
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
    return Se(e, {
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
    return Se(e, {
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
function Se(e, t) {
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
function xe(e, t) {
    t || (t = e);
    var n = Oe(t);
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
var Te = {},
    je = { exports: {} },
    Re = {},
    Le = { exports: {} },
    ze = {};
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
                null !== t && R(_, t.startTime - e);
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
                (null !== m && R(_, m.startTime - a), (c = !1));
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
    var S,
        k = !1,
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
                n ? S() : ((k = !1), (x = null));
            }
        } else k = !1;
    }
    if ('function' == typeof y)
        S = function () {
            y(A);
        };
    else if ('undefined' != typeof MessageChannel) {
        var N = new MessageChannel(),
            T = N.port2;
        ((N.port1.onmessage = A),
            (S = function () {
                T.postMessage(null);
            }));
    } else
        S = function () {
            m(A, 0);
        };
    function j(e) {
        ((x = e), k || ((k = !0), S()));
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
                      null === n(u) && r === n(s) && (v ? (g(O), (O = -1)) : (v = !0), R(_, i - o)))
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
})(ze),
    (Le.exports = ze));
var Ie = Le.exports,
    De = V,
    Me = Ie;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Ve(e) {
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
var Fe = new Set(),
    Ue = {};
function Be(e, t) {
    ($e(e, t), $e(e + 'Capture', t));
}
function $e(e, t) {
    for (Ue[e] = t, e = 0; e < t.length; e++) Fe.add(t[e]);
}
var We = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    He = Object.prototype.hasOwnProperty,
    Ke =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    qe = {},
    Qe = {};
function Ge(e, t, n, r, a, i, o) {
    ((this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = a),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = o));
}
var Ye = {};
('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        Ye[e] = new Ge(e, 0, !1, e, null, !1, !1);
    }),
    [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
        var t = e[0];
        Ye[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
        Ye[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
        Ye[e] = new Ge(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (e) {
            Ye[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
        Ye[e] = new Ge(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
        Ye[e] = new Ge(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
        Ye[e] = new Ge(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
        Ye[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
var Xe = /[\-:]([a-z])/g;
function Ze(e) {
    return e[1].toUpperCase();
}
function Je(e, t, n, r) {
    var a = Ye.hasOwnProperty(t) ? Ye[t] : null;
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
                  return !!He.call(Qe, e) || (!He.call(qe, e) && (Ke.test(e) ? (Qe[e] = !0) : ((qe[e] = !0), !1)));
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
        var t = e.replace(Xe, Ze);
        Ye[t] = new Ge(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
        var t = e.replace(Xe, Ze);
        Ye[t] = new Ge(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(Xe, Ze);
        Ye[t] = new Ge(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
        Ye[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Ye.xlinkHref = new Ge('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        Ye[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
var et = De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    tt = Symbol.for('react.element'),
    nt = Symbol.for('react.portal'),
    rt = Symbol.for('react.fragment'),
    at = Symbol.for('react.strict_mode'),
    it = Symbol.for('react.profiler'),
    ot = Symbol.for('react.provider'),
    lt = Symbol.for('react.context'),
    ut = Symbol.for('react.forward_ref'),
    st = Symbol.for('react.suspense'),
    ct = Symbol.for('react.suspense_list'),
    ft = Symbol.for('react.memo'),
    dt = Symbol.for('react.lazy'),
    pt = Symbol.for('react.offscreen'),
    ht = Symbol.iterator;
function vt(e) {
    return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (ht && e[ht]) || e['@@iterator'])
          ? e
          : null;
}
var mt,
    gt = Object.assign;
function yt(e) {
    if (void 0 === mt)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            mt = (t && t[1]) || '';
        }
    return '\n' + mt + e;
}
var bt = !1;
function _t(e, t) {
    if (!e || bt) return '';
    bt = !0;
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
        ((bt = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? yt(e) : '';
}
function wt(e) {
    switch (e.tag) {
        case 5:
            return yt(e.type);
        case 16:
            return yt('Lazy');
        case 13:
            return yt('Suspense');
        case 19:
            return yt('SuspenseList');
        case 0:
        case 2:
        case 15:
            return (e = _t(e.type, !1));
        case 11:
            return (e = _t(e.type.render, !1));
        case 1:
            return (e = _t(e.type, !0));
        default:
            return '';
    }
}
function St(e) {
    if (null == e) return null;
    if ('function' == typeof e) return e.displayName || e.name || null;
    if ('string' == typeof e) return e;
    switch (e) {
        case rt:
            return 'Fragment';
        case nt:
            return 'Portal';
        case it:
            return 'Profiler';
        case at:
            return 'StrictMode';
        case st:
            return 'Suspense';
        case ct:
            return 'SuspenseList';
    }
    if ('object' == typeof e)
        switch (e.$$typeof) {
            case lt:
                return (e.displayName || 'Context') + '.Consumer';
            case ot:
                return (e._context.displayName || 'Context') + '.Provider';
            case ut:
                var t = e.render;
                return (
                    (e = e.displayName) ||
                        (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'),
                    e
                );
            case ft:
                return null !== (t = e.displayName || null) ? t : St(e.type) || 'Memo';
            case dt:
                ((t = e._payload), (e = e._init));
                try {
                    return St(e(t));
                } catch (n) {}
        }
    return null;
}
function kt(e) {
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
            return St(t);
        case 8:
            return t === at ? 'StrictMode' : 'Mode';
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
function xt(e) {
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
function Ot(e) {
    var t = e.type;
    return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
}
function Et(e) {
    e._valueTracker ||
        (e._valueTracker = (function (e) {
            var t = Ot(e) ? 'checked' : 'value',
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
function Pt(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = '';
    return (e && (r = Ot(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0));
}
function Ct(e) {
    if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body;
    } catch (t) {
        return e.body;
    }
}
function At(e, t) {
    var n = t.checked;
    return gt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
    });
}
function Nt(e, t) {
    var n = null == t.defaultValue ? '' : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
    ((n = xt(null != t.value ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
        }));
}
function Tt(e, t) {
    null != (t = t.checked) && Je(e, 'checked', t, !1);
}
function jt(e, t) {
    Tt(e, t);
    var n = xt(t.value),
        r = t.type;
    if (null != n)
        'number' === r
            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
    (t.hasOwnProperty('value')
        ? Lt(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && Lt(e, t.type, xt(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked));
}
function Rt(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
        ((t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t));
    }
    ('' !== (n = e.name) && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        '' !== n && (e.name = n));
}
function Lt(e, t, n) {
    ('number' === t && Ct(e.ownerDocument) === e) ||
        (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var zt = Array.isArray;
function It(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
        for (n = 0; n < e.length; n++)
            ((a = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0));
    } else {
        for (n = '' + xt(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n) return ((e[a].selected = !0), void (r && (e[a].defaultSelected = !0)));
            null !== t || e[a].disabled || (t = e[a]);
        }
        null !== t && (t.selected = !0);
    }
}
function Dt(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(Ve(91));
    return gt({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Mt(e, t) {
    var n = t.value;
    if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(Ve(92));
            if (zt(n)) {
                if (1 < n.length) throw Error(Ve(93));
                n = n[0];
            }
            t = n;
        }
        (null == t && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: xt(n) };
}
function Vt(e, t) {
    var n = xt(t.value),
        r = xt(t.defaultValue);
    (null != n &&
        ((n = '' + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = '' + r));
}
function Ft(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
}
function Ut(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}
function Bt(e, t) {
    return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? Ut(t)
        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
}
var $t,
    Wt,
    Ht =
        ((Wt = function (e, t) {
            if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e) e.innerHTML = t;
            else {
                for (
                    ($t = $t || document.createElement('div')).innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                        t = $t.firstChild;
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
function Kt(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
    }
    e.textContent = t;
}
var qt = {
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
    Qt = ['Webkit', 'ms', 'Moz', 'O'];
function Gt(e, t, n) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n || 'number' != typeof t || 0 === t || (qt.hasOwnProperty(e) && qt[e])
          ? ('' + t).trim()
          : t + 'px';
}
function Yt(e, t) {
    for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf('--'),
                a = Gt(n, t[n], r);
            ('float' === n && (n = 'cssFloat'), r ? e.setProperty(n, a) : (e[n] = a));
        }
}
Object.keys(qt).forEach(function (e) {
    Qt.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qt[t] = qt[e]));
    });
});
var Xt = gt(
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
function Zt(e, t) {
    if (t) {
        if (Xt[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(Ve(137, e));
        if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(Ve(60));
            if ('object' != typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
                throw Error(Ve(61));
        }
        if (null != t.style && 'object' != typeof t.style) throw Error(Ve(62));
    }
}
function Jt(e, t) {
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
var en = null;
function tn(e) {
    return (
        (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
    );
}
var nn = null,
    rn = null,
    an = null;
function on(e) {
    if ((e = Ji(e))) {
        if ('function' != typeof nn) throw Error(Ve(280));
        var t = e.stateNode;
        t && ((t = to(t)), nn(e.stateNode, e.type, t));
    }
}
function ln(e) {
    rn ? (an ? an.push(e) : (an = [e])) : (rn = e);
}
function un() {
    if (rn) {
        var e = rn,
            t = an;
        if (((an = rn = null), on(e), t)) for (e = 0; e < t.length; e++) on(t[e]);
    }
}
function sn(e, t) {
    return e(t);
}
function cn() {}
var fn = !1;
function dn(e, t, n) {
    if (fn) return e(t, n);
    fn = !0;
    try {
        return sn(e, t, n);
    } finally {
        ((fn = !1), (null !== rn || null !== an) && (cn(), un()));
    }
}
function pn(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = to(n);
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
    if (n && 'function' != typeof n) throw Error(Ve(231, t, typeof n));
    return n;
}
var hn = !1;
if (We)
    try {
        var vn = {};
        (Object.defineProperty(vn, 'passive', {
            get: function () {
                hn = !0;
            },
        }),
            window.addEventListener('test', vn, vn),
            window.removeEventListener('test', vn, vn));
    } catch (Wt) {
        hn = !1;
    }
function mn(e, t, n, r, a, i, o, l, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s);
    } catch (c) {
        this.onError(c);
    }
}
var gn = !1,
    yn = null,
    bn = !1,
    _n = null,
    wn = {
        onError: function (e) {
            ((gn = !0), (yn = e));
        },
    };
function Sn(e, t, n, r, a, i, o, l, u) {
    ((gn = !1), (yn = null), mn.apply(wn, arguments));
}
function kn(e) {
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
function xn(e) {
    if (13 === e.tag) {
        var t = e.memoizedState;
        if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
    }
    return null;
}
function On(e) {
    if (kn(e) !== e) throw Error(Ve(188));
}
function En(e) {
    return null !==
        (e = (function (e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = kn(e))) throw Error(Ve(188));
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
                        if (i === n) return (On(a), e);
                        if (i === r) return (On(a), t);
                        i = i.sibling;
                    }
                    throw Error(Ve(188));
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
                        if (!o) throw Error(Ve(189));
                    }
                }
                if (n.alternate !== r) throw Error(Ve(190));
            }
            if (3 !== n.tag) throw Error(Ve(188));
            return n.stateNode.current === n ? e : t;
        })(e))
        ? Pn(e)
        : null;
}
function Pn(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e; ) {
        var t = Pn(e);
        if (null !== t) return t;
        e = e.sibling;
    }
    return null;
}
var Cn = Me.unstable_scheduleCallback,
    An = Me.unstable_cancelCallback,
    Nn = Me.unstable_shouldYield,
    Tn = Me.unstable_requestPaint,
    jn = Me.unstable_now,
    Rn = Me.unstable_getCurrentPriorityLevel,
    Ln = Me.unstable_ImmediatePriority,
    zn = Me.unstable_UserBlockingPriority,
    In = Me.unstable_NormalPriority,
    Dn = Me.unstable_LowPriority,
    Mn = Me.unstable_IdlePriority,
    Vn = null,
    Fn = null;
var Un = Math.clz32
        ? Math.clz32
        : function (e) {
              return ((e >>>= 0), 0 === e ? 32 : (31 - ((Bn(e) / $n) | 0)) | 0);
          },
    Bn = Math.log,
    $n = Math.LN2;
var Wn = 64,
    Hn = 4194304;
function Kn(e) {
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
function qn(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0,
        a = e.suspendedLanes,
        i = e.pingedLanes,
        o = 268435455 & n;
    if (0 !== o) {
        var l = o & ~a;
        0 !== l ? (r = Kn(l)) : 0 !== (i &= o) && (r = Kn(i));
    } else 0 !== (o = n & ~a) ? (r = Kn(o)) : 0 !== i && (r = Kn(i));
    if (0 === r) return 0;
    if (0 !== t && t !== r && 0 == (t & a) && ((a = r & -r) >= (i = t & -t) || (16 === a && 0 != (4194240 & i))))
        return t;
    if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; ) ((a = 1 << (n = 31 - Un(t))), (r |= e[n]), (t &= ~a));
    return r;
}
function Qn(e, t) {
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
function Gn(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
}
function Yn() {
    var e = Wn;
    return (0 == (4194240 & (Wn <<= 1)) && (Wn = 64), e);
}
function Xn(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Zn(e, t, n) {
    ((e.pendingLanes |= t),
        536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        ((e = e.eventTimes)[(t = 31 - Un(t))] = n));
}
function Jn(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Un(n),
            a = 1 << r;
        ((a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a));
    }
}
var er = 0;
function tr(e) {
    return 1 < (e &= -e) ? (4 < e ? (0 != (268435455 & e) ? 16 : 536870912) : 4) : 1;
}
var nr,
    rr,
    ar,
    ir,
    or,
    lr = !1,
    ur = [],
    sr = null,
    cr = null,
    fr = null,
    dr = new Map(),
    pr = new Map(),
    hr = [],
    vr =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' ',
        );
function mr(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            sr = null;
            break;
        case 'dragenter':
        case 'dragleave':
            cr = null;
            break;
        case 'mouseover':
        case 'mouseout':
            fr = null;
            break;
        case 'pointerover':
        case 'pointerout':
            dr.delete(t.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            pr.delete(t.pointerId);
    }
}
function gr(e, t, n, r, a, i) {
    return null === e || e.nativeEvent !== i
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }),
          null !== t && null !== (t = Ji(t)) && rr(t),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== a && -1 === t.indexOf(a) && t.push(a), e);
}
function yr(e) {
    var t = Zi(e.target);
    if (null !== t) {
        var n = kn(t);
        if (null !== n)
            if (13 === (t = n.tag)) {
                if (null !== (t = xn(n)))
                    return (
                        (e.blockedOn = t),
                        void or(e.priority, function () {
                            ar(n);
                        })
                    );
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
}
function br(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Nr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return (null !== (t = Ji(n)) && rr(t), (e.blockedOn = n), !1);
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        ((en = r), n.target.dispatchEvent(r), (en = null), t.shift());
    }
    return !0;
}
function _r(e, t, n) {
    br(e) && n.delete(t);
}
function wr() {
    ((lr = !1),
        null !== sr && br(sr) && (sr = null),
        null !== cr && br(cr) && (cr = null),
        null !== fr && br(fr) && (fr = null),
        dr.forEach(_r),
        pr.forEach(_r));
}
function Sr(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), lr || ((lr = !0), Me.unstable_scheduleCallback(Me.unstable_NormalPriority, wr)));
}
function kr(e) {
    function t(t) {
        return Sr(t, e);
    }
    if (0 < ur.length) {
        Sr(ur[0], e);
        for (var n = 1; n < ur.length; n++) {
            var r = ur[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        null !== sr && Sr(sr, e),
            null !== cr && Sr(cr, e),
            null !== fr && Sr(fr, e),
            dr.forEach(t),
            pr.forEach(t),
            n = 0;
        n < hr.length;
        n++
    )
        (r = hr[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < hr.length && null === (n = hr[0]).blockedOn; ) (yr(n), null === n.blockedOn && hr.shift());
}
var xr = et.ReactCurrentBatchConfig,
    Or = !0;
function Er(e, t, n, r) {
    var a = er,
        i = xr.transition;
    xr.transition = null;
    try {
        ((er = 1), Cr(e, t, n, r));
    } finally {
        ((er = a), (xr.transition = i));
    }
}
function Pr(e, t, n, r) {
    var a = er,
        i = xr.transition;
    xr.transition = null;
    try {
        ((er = 4), Cr(e, t, n, r));
    } finally {
        ((er = a), (xr.transition = i));
    }
}
function Cr(e, t, n, r) {
    if (Or) {
        var a = Nr(e, t, n, r);
        if (null === a) (xi(e, t, r, Ar, n), mr(e, r));
        else if (
            (function (e, t, n, r, a) {
                switch (t) {
                    case 'focusin':
                        return ((sr = gr(sr, e, t, n, r, a)), !0);
                    case 'dragenter':
                        return ((cr = gr(cr, e, t, n, r, a)), !0);
                    case 'mouseover':
                        return ((fr = gr(fr, e, t, n, r, a)), !0);
                    case 'pointerover':
                        var i = a.pointerId;
                        return (dr.set(i, gr(dr.get(i) || null, e, t, n, r, a)), !0);
                    case 'gotpointercapture':
                        return ((i = a.pointerId), pr.set(i, gr(pr.get(i) || null, e, t, n, r, a)), !0);
                }
                return !1;
            })(a, e, t, n, r)
        )
            r.stopPropagation();
        else if ((mr(e, r), 4 & t && -1 < vr.indexOf(e))) {
            for (; null !== a; ) {
                var i = Ji(a);
                if ((null !== i && nr(i), null === (i = Nr(e, t, n, r)) && xi(e, t, r, Ar, n), i === a)) break;
                a = i;
            }
            null !== a && r.stopPropagation();
        } else xi(e, t, r, null, n);
    }
}
var Ar = null;
function Nr(e, t, n, r) {
    if (((Ar = null), null !== (e = Zi((e = tn(r))))))
        if (null === (t = kn(e))) e = null;
        else if (13 === (n = t.tag)) {
            if (null !== (e = xn(t))) return e;
            e = null;
        } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return ((Ar = e), null);
}
function Tr(e) {
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
            switch (Rn()) {
                case Ln:
                    return 1;
                case zn:
                    return 4;
                case In:
                case Dn:
                    return 16;
                case Mn:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var jr = null,
    Rr = null,
    Lr = null;
function zr() {
    if (Lr) return Lr;
    var e,
        t,
        n = Rr,
        r = n.length,
        a = 'value' in jr ? jr.value : jr.textContent,
        i = a.length;
    for (e = 0; e < r && n[e] === a[e]; e++);
    var o = r - e;
    for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
    return (Lr = a.slice(e, 1 < t ? 1 - t : void 0));
}
function Ir(e) {
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
function Mr() {
    return !1;
}
function Vr(e) {
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
                ? Dr
                : Mr),
            (this.isPropagationStopped = Mr),
            this
        );
    }
    return (
        gt(t.prototype, {
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
var Fr,
    Ur,
    Br,
    $r = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Wr = Vr($r),
    Hr = gt({}, $r, { view: 0, detail: 0 }),
    Kr = Vr(Hr),
    qr = gt({}, Hr, {
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
        getModifierState: ia,
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
                : (e !== Br &&
                      (Br && 'mousemove' === e.type
                          ? ((Fr = e.screenX - Br.screenX), (Ur = e.screenY - Br.screenY))
                          : (Ur = Fr = 0),
                      (Br = e)),
                  Fr);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : Ur;
        },
    }),
    Qr = Vr(qr),
    Gr = Vr(gt({}, qr, { dataTransfer: 0 })),
    Yr = Vr(gt({}, Hr, { relatedTarget: 0 })),
    Xr = Vr(gt({}, $r, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    Zr = gt({}, $r, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    Jr = Vr(Zr),
    ea = Vr(gt({}, $r, { data: 0 })),
    ta = {
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
    na = {
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
    ra = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function aa(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = ra[e]) && !!t[e];
}
function ia() {
    return aa;
}
var oa = gt({}, Hr, {
        key: function (e) {
            if (e.key) {
                var t = ta[e.key] || e.key;
                if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
                ? 13 === (e = Ir(e))
                    ? 'Enter'
                    : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? na[e.keyCode] || 'Unidentified'
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
        getModifierState: ia,
        charCode: function (e) {
            return 'keypress' === e.type ? Ir(e) : 0;
        },
        keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
        which: function (e) {
            return 'keypress' === e.type ? Ir(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
    }),
    la = Vr(oa),
    ua = Vr(
        gt({}, qr, {
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
    sa = Vr(
        gt({}, Hr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ia,
        }),
    ),
    ca = Vr(gt({}, $r, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    fa = gt({}, qr, {
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
    da = Vr(fa),
    pa = [9, 13, 27, 32],
    ha = We && 'CompositionEvent' in window,
    va = null;
We && 'documentMode' in document && (va = document.documentMode);
var ma = We && 'TextEvent' in window && !va,
    ga = We && (!ha || (va && 8 < va && 11 >= va)),
    ya = String.fromCharCode(32),
    ba = !1;
function _a(e, t) {
    switch (e) {
        case 'keyup':
            return -1 !== pa.indexOf(t.keyCode);
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
function wa(e) {
    return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
}
var Sa = !1;
var ka = {
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
function xa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return 'input' === t ? !!ka[e.type] : 'textarea' === t;
}
function Oa(e, t, n, r) {
    (ln(r),
        0 < (t = Ei(t, 'onChange')).length &&
            ((n = new Wr('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
}
var Ea = null,
    Pa = null;
function Ca(e) {
    yi(e, 0);
}
function Aa(e) {
    if (Pt(eo(e))) return e;
}
function Na(e, t) {
    if ('change' === e) return t;
}
var Ta = !1;
if (We) {
    var ja;
    if (We) {
        var Ra = 'oninput' in document;
        if (!Ra) {
            var La = document.createElement('div');
            (La.setAttribute('oninput', 'return;'), (Ra = 'function' == typeof La.oninput));
        }
        ja = Ra;
    } else ja = !1;
    Ta = ja && (!document.documentMode || 9 < document.documentMode);
}
function za() {
    Ea && (Ea.detachEvent('onpropertychange', Ia), (Pa = Ea = null));
}
function Ia(e) {
    if ('value' === e.propertyName && Aa(Pa)) {
        var t = [];
        (Oa(t, Pa, e, tn(e)), dn(Ca, t));
    }
}
function Da(e, t, n) {
    'focusin' === e ? (za(), (Pa = n), (Ea = t).attachEvent('onpropertychange', Ia)) : 'focusout' === e && za();
}
function Ma(e) {
    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Aa(Pa);
}
function Va(e, t) {
    if ('click' === e) return Aa(t);
}
function Fa(e, t) {
    if ('input' === e || 'change' === e) return Aa(t);
}
var Ua =
    'function' == typeof Object.is
        ? Object.is
        : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
          };
function Ba(e, t) {
    if (Ua(e, t)) return !0;
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var a = n[r];
        if (!He.call(t, a) || !Ua(e[a], t[a])) return !1;
    }
    return !0;
}
function $a(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Wa(e, t) {
    var n,
        r = $a(e);
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
        r = $a(r);
    }
}
function Ha(e, t) {
    return (
        !(!e || !t) &&
        (e === t ||
            ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                    ? Ha(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
    );
}
function Ka() {
    for (var e = window, t = Ct(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = 'string' == typeof t.contentWindow.location.href;
        } catch (r) {
            n = !1;
        }
        if (!n) break;
        t = Ct((e = t.contentWindow).document);
    }
    return t;
}
function qa(e) {
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
function Qa(e) {
    var t = Ka(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ha(n.ownerDocument.documentElement, n)) {
        if (null !== r && qa(n))
            if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
            else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
                e = e.getSelection();
                var a = n.textContent.length,
                    i = Math.min(r.start, a);
                ((r = void 0 === r.end ? i : Math.min(r.end, a)),
                    !e.extend && i > r && ((a = r), (r = i), (i = a)),
                    (a = Wa(n, i)));
                var o = Wa(n, r);
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
var Ga = We && 'documentMode' in document && 11 >= document.documentMode,
    Ya = null,
    Xa = null,
    Za = null,
    Ja = !1;
function ei(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    Ja ||
        null == Ya ||
        Ya !== Ct(r) ||
        ('selectionStart' in (r = Ya) && qa(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                  anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                      .anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              }),
        (Za && Ba(Za, r)) ||
            ((Za = r),
            0 < (r = Ei(Xa, 'onSelect')).length &&
                ((t = new Wr('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Ya))));
}
function ti(e, t) {
    var n = {};
    return ((n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n);
}
var ni = {
        animationend: ti('Animation', 'AnimationEnd'),
        animationiteration: ti('Animation', 'AnimationIteration'),
        animationstart: ti('Animation', 'AnimationStart'),
        transitionend: ti('Transition', 'TransitionEnd'),
    },
    ri = {},
    ai = {};
function ii(e) {
    if (ri[e]) return ri[e];
    if (!ni[e]) return e;
    var t,
        n = ni[e];
    for (t in n) if (n.hasOwnProperty(t) && t in ai) return (ri[e] = n[t]);
    return e;
}
We &&
    ((ai = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete ni.animationend.animation, delete ni.animationiteration.animation, delete ni.animationstart.animation),
    'TransitionEvent' in window || delete ni.transitionend.transition);
var oi = ii('animationend'),
    li = ii('animationiteration'),
    ui = ii('animationstart'),
    si = ii('transitionend'),
    ci = new Map(),
    fi =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' ',
        );
function di(e, t) {
    (ci.set(e, t), Be(t, [e]));
}
for (var pi = 0; pi < fi.length; pi++) {
    var hi = fi[pi];
    di(hi.toLowerCase(), 'on' + (hi[0].toUpperCase() + hi.slice(1)));
}
(di(oi, 'onAnimationEnd'),
    di(li, 'onAnimationIteration'),
    di(ui, 'onAnimationStart'),
    di('dblclick', 'onDoubleClick'),
    di('focusin', 'onFocus'),
    di('focusout', 'onBlur'),
    di(si, 'onTransitionEnd'),
    $e('onMouseEnter', ['mouseout', 'mouseover']),
    $e('onMouseLeave', ['mouseout', 'mouseover']),
    $e('onPointerEnter', ['pointerout', 'pointerover']),
    $e('onPointerLeave', ['pointerout', 'pointerover']),
    Be('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Be('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    Be('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Be('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Be('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    Be('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
var vi =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' ',
        ),
    mi = new Set('cancel close invalid load scroll toggle'.split(' ').concat(vi));
function gi(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n),
        (function (e, t, n, r, a, i, o, l, u) {
            if ((Sn.apply(this, arguments), gn)) {
                if (!gn) throw Error(Ve(198));
                var s = yn;
                ((gn = !1), (yn = null), bn || ((bn = !0), (_n = s)));
            }
        })(r, t, void 0, e),
        (e.currentTarget = null));
}
function yi(e, t) {
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
                    (gi(a, l, s), (i = u));
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
                    (gi(a, l, s), (i = u));
                }
        }
    }
    if (bn) throw ((e = _n), (bn = !1), (_n = null), e);
}
function bi(e, t) {
    var n = t[Gi];
    void 0 === n && (n = t[Gi] = new Set());
    var r = e + '__bubble';
    n.has(r) || (ki(t, e, 2, !1), n.add(r));
}
function _i(e, t, n) {
    var r = 0;
    (t && (r |= 4), ki(n, e, r, t));
}
var wi = '_reactListening' + Math.random().toString(36).slice(2);
function Si(e) {
    if (!e[wi]) {
        ((e[wi] = !0),
            Fe.forEach(function (t) {
                'selectionchange' !== t && (mi.has(t) || _i(t, !1, e), _i(t, !0, e));
            }));
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[wi] || ((t[wi] = !0), _i('selectionchange', !1, t));
    }
}
function ki(e, t, n, r) {
    switch (Tr(t)) {
        case 1:
            var a = Er;
            break;
        case 4:
            a = Pr;
            break;
        default:
            a = Cr;
    }
    ((n = a.bind(null, t, n, e)),
        (a = void 0),
        !hn || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (a = !0),
        r
            ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
            : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1));
}
function xi(e, t, n, r, a) {
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
                    if (null === (o = Zi(l))) return;
                    if (5 === (u = o.tag) || 6 === u) {
                        r = i = o;
                        continue e;
                    }
                    l = l.parentNode;
                }
            }
            r = r.return;
        }
    dn(function () {
        var r = i,
            a = tn(n),
            o = [];
        e: {
            var l = ci.get(e);
            if (void 0 !== l) {
                var u = Wr,
                    s = e;
                switch (e) {
                    case 'keypress':
                        if (0 === Ir(n)) break e;
                    case 'keydown':
                    case 'keyup':
                        u = la;
                        break;
                    case 'focusin':
                        ((s = 'focus'), (u = Yr));
                        break;
                    case 'focusout':
                        ((s = 'blur'), (u = Yr));
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        u = Yr;
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
                        u = Qr;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        u = Gr;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        u = sa;
                        break;
                    case oi:
                    case li:
                    case ui:
                        u = Xr;
                        break;
                    case si:
                        u = ca;
                        break;
                    case 'scroll':
                        u = Kr;
                        break;
                    case 'wheel':
                        u = da;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        u = Jr;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        u = ua;
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
                            ((p = v), null !== d && null != (v = pn(h, d)) && c.push(Oi(h, v, p))),
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
                    n === en ||
                    !(s = n.relatedTarget || n.fromElement) ||
                    (!Zi(s) && !s[Qi])) &&
                    (u || l) &&
                    ((l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window),
                    u
                        ? ((u = r),
                          null !== (s = (s = n.relatedTarget || n.toElement) ? Zi(s) : null) &&
                              (s !== (f = kn(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                              (s = null))
                        : ((u = null), (s = r)),
                    u !== s))
            ) {
                if (
                    ((c = Qr),
                    (v = 'onMouseLeave'),
                    (d = 'onMouseEnter'),
                    (h = 'mouse'),
                    ('pointerout' !== e && 'pointerover' !== e) ||
                        ((c = ua), (v = 'onPointerLeave'), (d = 'onPointerEnter'), (h = 'pointer')),
                    (f = null == u ? l : eo(u)),
                    (p = null == s ? l : eo(s)),
                    ((l = new c(v, h + 'leave', u, n, a)).target = f),
                    (l.relatedTarget = p),
                    (v = null),
                    Zi(a) === r && (((c = new c(d, h + 'enter', s, n, a)).target = p), (c.relatedTarget = f), (v = c)),
                    (f = v),
                    u && s)
                )
                    e: {
                        for (d = s, h = 0, p = c = u; p; p = Pi(p)) h++;
                        for (p = 0, v = d; v; v = Pi(v)) p++;
                        for (; 0 < h - p; ) ((c = Pi(c)), h--);
                        for (; 0 < p - h; ) ((d = Pi(d)), p--);
                        for (; h--; ) {
                            if (c === d || (null !== d && c === d.alternate)) break e;
                            ((c = Pi(c)), (d = Pi(d)));
                        }
                        c = null;
                    }
                else c = null;
                (null !== u && Ci(o, l, u, c, !1), null !== s && null !== f && Ci(o, f, s, c, !0));
            }
            if (
                'select' === (u = (l = r ? eo(r) : window).nodeName && l.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === l.type)
            )
                var m = Na;
            else if (xa(l))
                if (Ta) m = Fa;
                else {
                    m = Ma;
                    var g = Da;
                }
            else
                (u = l.nodeName) &&
                    'input' === u.toLowerCase() &&
                    ('checkbox' === l.type || 'radio' === l.type) &&
                    (m = Va);
            switch (
                (m && (m = m(e, r))
                    ? Oa(o, m, n, a)
                    : (g && g(e, l, r),
                      'focusout' === e &&
                          (g = l._wrapperState) &&
                          g.controlled &&
                          'number' === l.type &&
                          Lt(l, 'number', l.value)),
                (g = r ? eo(r) : window),
                e)
            ) {
                case 'focusin':
                    (xa(g) || 'true' === g.contentEditable) && ((Ya = g), (Xa = r), (Za = null));
                    break;
                case 'focusout':
                    Za = Xa = Ya = null;
                    break;
                case 'mousedown':
                    Ja = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    ((Ja = !1), ei(o, n, a));
                    break;
                case 'selectionchange':
                    if (Ga) break;
                case 'keydown':
                case 'keyup':
                    ei(o, n, a);
            }
            var y;
            if (ha)
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
                Sa
                    ? _a(e, n) && (b = 'onCompositionEnd')
                    : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
            (b &&
                (ga &&
                    'ko' !== n.locale &&
                    (Sa || 'onCompositionStart' !== b
                        ? 'onCompositionEnd' === b && Sa && (y = zr())
                        : ((Rr = 'value' in (jr = a) ? jr.value : jr.textContent), (Sa = !0))),
                0 < (g = Ei(r, b)).length &&
                    ((b = new ea(b, e, null, n, a)),
                    o.push({ event: b, listeners: g }),
                    y ? (b.data = y) : null !== (y = wa(n)) && (b.data = y))),
                (y = ma
                    ? (function (e, t) {
                          switch (e) {
                              case 'compositionend':
                                  return wa(t);
                              case 'keypress':
                                  return 32 !== t.which ? null : ((ba = !0), ya);
                              case 'textInput':
                                  return (e = t.data) === ya && ba ? null : e;
                              default:
                                  return null;
                          }
                      })(e, n)
                    : (function (e, t) {
                          if (Sa)
                              return 'compositionend' === e || (!ha && _a(e, t))
                                  ? ((e = zr()), (Lr = Rr = jr = null), (Sa = !1), e)
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
                                  return ga && 'ko' !== t.locale ? null : t.data;
                          }
                      })(e, n)) &&
                    0 < (r = Ei(r, 'onBeforeInput')).length &&
                    ((a = new ea('onBeforeInput', 'beforeinput', null, n, a)),
                    o.push({ event: a, listeners: r }),
                    (a.data = y)));
        }
        yi(o, t);
    });
}
function Oi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Ei(e, t) {
    for (var n = t + 'Capture', r = []; null !== e; ) {
        var a = e,
            i = a.stateNode;
        (5 === a.tag &&
            null !== i &&
            ((a = i), null != (i = pn(e, n)) && r.unshift(Oi(e, i, a)), null != (i = pn(e, t)) && r.push(Oi(e, i, a))),
            (e = e.return));
    }
    return r;
}
function Pi(e) {
    if (null === e) return null;
    do {
        e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
}
function Ci(e, t, n, r, a) {
    for (var i = t._reactName, o = []; null !== n && n !== r; ) {
        var l = n,
            u = l.alternate,
            s = l.stateNode;
        if (null !== u && u === r) break;
        (5 === l.tag &&
            null !== s &&
            ((l = s),
            a
                ? null != (u = pn(n, i)) && o.unshift(Oi(n, u, l))
                : a || (null != (u = pn(n, i)) && o.push(Oi(n, u, l)))),
            (n = n.return));
    }
    0 !== o.length && e.push({ event: t, listeners: o });
}
var Ai = /\r\n?/g,
    Ni = /\u0000|\uFFFD/g;
function Ti(e) {
    return ('string' == typeof e ? e : '' + e).replace(Ai, '\n').replace(Ni, '');
}
function ji(e, t, n) {
    if (((t = Ti(t)), Ti(e) !== t && n)) throw Error(Ve(425));
}
function Ri() {}
var Li = null,
    zi = null;
function Ii(e, t) {
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
var Di = 'function' == typeof setTimeout ? setTimeout : void 0,
    Mi = 'function' == typeof clearTimeout ? clearTimeout : void 0,
    Vi = 'function' == typeof Promise ? Promise : void 0,
    Fi =
        'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== Vi
              ? function (e) {
                    return Vi.resolve(null).then(e).catch(Ui);
                }
              : Di;
function Ui(e) {
    setTimeout(function () {
        throw e;
    });
}
function Bi(e, t) {
    var n = t,
        r = 0;
    do {
        var a = n.nextSibling;
        if ((e.removeChild(n), a && 8 === a.nodeType))
            if ('/$' === (n = a.data)) {
                if (0 === r) return (e.removeChild(a), void kr(t));
                r--;
            } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
        n = a;
    } while (n);
    kr(t);
}
function $i(e) {
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
function Wi(e) {
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
var Hi = Math.random().toString(36).slice(2),
    Ki = '__reactFiber$' + Hi,
    qi = '__reactProps$' + Hi,
    Qi = '__reactContainer$' + Hi,
    Gi = '__reactEvents$' + Hi,
    Yi = '__reactListeners$' + Hi,
    Xi = '__reactHandles$' + Hi;
function Zi(e) {
    var t = e[Ki];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Qi] || n[Ki])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = Wi(e); null !== e; ) {
                    if ((n = e[Ki])) return n;
                    e = Wi(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function Ji(e) {
    return !(e = e[Ki] || e[Qi]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
}
function eo(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(Ve(33));
}
function to(e) {
    return e[qi] || null;
}
var no = [],
    ro = -1;
function ao(e) {
    return { current: e };
}
function io(e) {
    0 > ro || ((e.current = no[ro]), (no[ro] = null), ro--);
}
function oo(e, t) {
    (ro++, (no[ro] = e.current), (e.current = t));
}
var lo = {},
    uo = ao(lo),
    so = ao(!1),
    co = lo;
function fo(e, t) {
    var n = e.type.contextTypes;
    if (!n) return lo;
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
function po(e) {
    return null != (e = e.childContextTypes);
}
function ho() {
    (io(so), io(uo));
}
function vo(e, t, n) {
    if (uo.current !== lo) throw Error(Ve(168));
    (oo(uo, t), oo(so, n));
}
function mo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
    for (var a in (r = r.getChildContext())) if (!(a in t)) throw Error(Ve(108, kt(e) || 'Unknown', a));
    return gt({}, n, r);
}
function go(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || lo),
        (co = uo.current),
        oo(uo, e),
        oo(so, so.current),
        !0
    );
}
function yo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(Ve(169));
    (n ? ((e = mo(e, t, co)), (r.__reactInternalMemoizedMergedChildContext = e), io(so), io(uo), oo(uo, e)) : io(so),
        oo(so, n));
}
var bo = null,
    _o = !1,
    wo = !1;
function So(e) {
    null === bo ? (bo = [e]) : bo.push(e);
}
function ko() {
    if (!wo && null !== bo) {
        wo = !0;
        var e = 0,
            t = er;
        try {
            var n = bo;
            for (er = 1; e < n.length; e++) {
                var r = n[e];
                do {
                    r = r(!0);
                } while (null !== r);
            }
            ((bo = null), (_o = !1));
        } catch (a) {
            throw (null !== bo && (bo = bo.slice(e + 1)), Cn(Ln, ko), a);
        } finally {
            ((er = t), (wo = !1));
        }
    }
    return null;
}
var xo = [],
    Oo = 0,
    Eo = null,
    Po = 0,
    Co = [],
    Ao = 0,
    No = null,
    To = 1,
    jo = '';
function Ro(e, t) {
    ((xo[Oo++] = Po), (xo[Oo++] = Eo), (Eo = e), (Po = t));
}
function Lo(e, t, n) {
    ((Co[Ao++] = To), (Co[Ao++] = jo), (Co[Ao++] = No), (No = e));
    var r = To;
    e = jo;
    var a = 32 - Un(r) - 1;
    ((r &= ~(1 << a)), (n += 1));
    var i = 32 - Un(t) + a;
    if (30 < i) {
        var o = a - (a % 5);
        ((i = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (a -= o),
            (To = (1 << (32 - Un(t) + a)) | (n << a) | r),
            (jo = i + e));
    } else ((To = (1 << i) | (n << a) | r), (jo = e));
}
function zo(e) {
    null !== e.return && (Ro(e, 1), Lo(e, 1, 0));
}
function Io(e) {
    for (; e === Eo; ) ((Eo = xo[--Oo]), (xo[Oo] = null), (Po = xo[--Oo]), (xo[Oo] = null));
    for (; e === No; )
        ((No = Co[--Ao]), (Co[Ao] = null), (jo = Co[--Ao]), (Co[Ao] = null), (To = Co[--Ao]), (Co[Ao] = null));
}
var Do = null,
    Mo = null,
    Vo = !1,
    Fo = null;
function Uo(e, t) {
    var n = df(5, null, null, 0);
    ((n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Bo(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (Do = e), (Mo = $i(t.firstChild)), !0)
            );
        case 6:
            return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (Do = e), (Mo = null), !0)
            );
        case 13:
            return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== No ? { id: To, overflow: jo } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = df(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (Do = e),
                (Mo = null),
                !0)
            );
        default:
            return !1;
    }
}
function $o(e) {
    return 0 != (1 & e.mode) && 0 == (128 & e.flags);
}
function Wo(e) {
    if (Vo) {
        var t = Mo;
        if (t) {
            var n = t;
            if (!Bo(e, t)) {
                if ($o(e)) throw Error(Ve(418));
                t = $i(n.nextSibling);
                var r = Do;
                t && Bo(e, t) ? Uo(r, n) : ((e.flags = (-4097 & e.flags) | 2), (Vo = !1), (Do = e));
            }
        } else {
            if ($o(e)) throw Error(Ve(418));
            ((e.flags = (-4097 & e.flags) | 2), (Vo = !1), (Do = e));
        }
    }
}
function Ho(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
    Do = e;
}
function Ko(e) {
    if (e !== Do) return !1;
    if (!Vo) return (Ho(e), (Vo = !0), !1);
    var t;
    if (
        ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = 'head' !== (t = e.type) && 'body' !== t && !Ii(e.type, e.memoizedProps)),
        t && (t = Mo))
    ) {
        if ($o(e)) throw (qo(), Error(Ve(418)));
        for (; t; ) (Uo(e, t), (t = $i(t.nextSibling)));
    }
    if ((Ho(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(Ve(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ('/$' === n) {
                        if (0 === t) {
                            Mo = $i(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
            }
            Mo = null;
        }
    } else Mo = Do ? $i(e.stateNode.nextSibling) : null;
    return !0;
}
function qo() {
    for (var e = Mo; e; ) e = $i(e.nextSibling);
}
function Qo() {
    ((Mo = Do = null), (Vo = !1));
}
function Go(e) {
    null === Fo ? (Fo = [e]) : Fo.push(e);
}
var Yo = et.ReactCurrentBatchConfig;
function Xo(e, t, n) {
    if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
        if (n._owner) {
            if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(Ve(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(Ve(147, e));
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
        if ('string' != typeof e) throw Error(Ve(284));
        if (!n._owner) throw Error(Ve(290, e));
    }
    return e;
}
function Zo(e, t) {
    throw (
        (e = Object.prototype.toString.call(t)),
        Error(Ve(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e))
    );
}
function Jo(e) {
    return (0, e._init)(e._payload);
}
function el(e) {
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
        return (((e = hf(e, t)).index = 0), (e.sibling = null), e);
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
        return null === t || 6 !== t.tag ? (((t = yf(n, e.mode, r)).return = e), t) : (((t = a(t, n)).return = e), t);
    }
    function u(e, t, n, r) {
        var i = n.type;
        return i === rt
            ? c(e, t, n.props.children, r, n.key)
            : null !== t &&
                (t.elementType === i || ('object' == typeof i && null !== i && i.$$typeof === dt && Jo(i) === t.type))
              ? (((r = a(t, n.props)).ref = Xo(e, t, n)), (r.return = e), r)
              : (((r = vf(n.type, n.key, n.props, null, e.mode, r)).ref = Xo(e, t, n)), (r.return = e), r);
    }
    function s(e, t, n, r) {
        return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = bf(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
    }
    function c(e, t, n, r, i) {
        return null === t || 7 !== t.tag
            ? (((t = mf(n, e.mode, r, i)).return = e), t)
            : (((t = a(t, n)).return = e), t);
    }
    function f(e, t, n) {
        if (('string' == typeof t && '' !== t) || 'number' == typeof t)
            return (((t = yf('' + t, e.mode, n)).return = e), t);
        if ('object' == typeof t && null !== t) {
            switch (t.$$typeof) {
                case tt:
                    return (
                        ((n = vf(t.type, t.key, t.props, null, e.mode, n)).ref = Xo(e, null, t)),
                        (n.return = e),
                        n
                    );
                case nt:
                    return (((t = bf(t, e.mode, n)).return = e), t);
                case dt:
                    return f(e, (0, t._init)(t._payload), n);
            }
            if (zt(t) || vt(t)) return (((t = mf(t, e.mode, n, null)).return = e), t);
            Zo(e, t);
        }
        return null;
    }
    function d(e, t, n, r) {
        var a = null !== t ? t.key : null;
        if (('string' == typeof n && '' !== n) || 'number' == typeof n) return null !== a ? null : l(e, t, '' + n, r);
        if ('object' == typeof n && null !== n) {
            switch (n.$$typeof) {
                case tt:
                    return n.key === a ? u(e, t, n, r) : null;
                case nt:
                    return n.key === a ? s(e, t, n, r) : null;
                case dt:
                    return d(e, t, (a = n._init)(n._payload), r);
            }
            if (zt(n) || vt(n)) return null !== a ? null : c(e, t, n, r, null);
            Zo(e, n);
        }
        return null;
    }
    function p(e, t, n, r, a) {
        if (('string' == typeof r && '' !== r) || 'number' == typeof r) return l(t, (e = e.get(n) || null), '' + r, a);
        if ('object' == typeof r && null !== r) {
            switch (r.$$typeof) {
                case tt:
                    return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case nt:
                    return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case dt:
                    return p(e, t, n, (0, r._init)(r._payload), a);
            }
            if (zt(r) || vt(r)) return c(t, (e = e.get(n) || null), r, a, null);
            Zo(t, r);
        }
        return null;
    }
    return function l(u, s, c, h) {
        if (
            ('object' == typeof c && null !== c && c.type === rt && null === c.key && (c = c.props.children),
            'object' == typeof c && null !== c)
        ) {
            switch (c.$$typeof) {
                case tt:
                    e: {
                        for (var v = c.key, m = s; null !== m; ) {
                            if (m.key === v) {
                                if ((v = c.type) === rt) {
                                    if (7 === m.tag) {
                                        (n(u, m.sibling), ((s = a(m, c.props.children)).return = u), (u = s));
                                        break e;
                                    }
                                } else if (
                                    m.elementType === v ||
                                    ('object' == typeof v && null !== v && v.$$typeof === dt && Jo(v) === m.type)
                                ) {
                                    (n(u, m.sibling), ((s = a(m, c.props)).ref = Xo(u, m, c)), (s.return = u), (u = s));
                                    break e;
                                }
                                n(u, m);
                                break;
                            }
                            (t(u, m), (m = m.sibling));
                        }
                        c.type === rt
                            ? (((s = mf(c.props.children, u.mode, h, c.key)).return = u), (u = s))
                            : (((h = vf(c.type, c.key, c.props, null, u.mode, h)).ref = Xo(u, s, c)),
                              (h.return = u),
                              (u = h));
                    }
                    return o(u);
                case nt:
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
                        (((s = bf(c, u.mode, h)).return = u), (u = s));
                    }
                    return o(u);
                case dt:
                    return l(u, s, (m = c._init)(c._payload), h);
            }
            if (zt(c))
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
                    if (v === l.length) return (n(a, h), Vo && Ro(a, v), s);
                    if (null === h) {
                        for (; v < l.length; v++)
                            null !== (h = f(a, l[v], u)) &&
                                ((o = i(h, o, v)), null === c ? (s = h) : (c.sibling = h), (c = h));
                        return (Vo && Ro(a, v), s);
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
                        Vo && Ro(a, v),
                        s
                    );
                })(u, s, c, h);
            if (vt(c))
                return (function (a, o, l, u) {
                    var s = vt(l);
                    if ('function' != typeof s) throw Error(Ve(150));
                    if (null == (l = s.call(l))) throw Error(Ve(151));
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
                    if (g.done) return (n(a, h), Vo && Ro(a, v), s);
                    if (null === h) {
                        for (; !g.done; v++, g = l.next())
                            null !== (g = f(a, g.value, u)) &&
                                ((o = i(g, o, v)), null === c ? (s = g) : (c.sibling = g), (c = g));
                        return (Vo && Ro(a, v), s);
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
                        Vo && Ro(a, v),
                        s
                    );
                })(u, s, c, h);
            Zo(u, c);
        }
        return ('string' == typeof c && '' !== c) || 'number' == typeof c
            ? ((c = '' + c),
              null !== s && 6 === s.tag
                  ? (n(u, s.sibling), ((s = a(s, c)).return = u), (u = s))
                  : (n(u, s), ((s = yf(c, u.mode, h)).return = u), (u = s)),
              o(u))
            : n(u, s);
    };
}
var tl = el(!0),
    nl = el(!1),
    rl = ao(null),
    al = null,
    il = null,
    ol = null;
function ll() {
    ol = il = al = null;
}
function ul(e) {
    var t = rl.current;
    (io(rl), (e._currentValue = t));
}
function sl(e, t, n) {
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
function cl(e, t) {
    ((al = e),
        (ol = il = null),
        null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (Ju = !0), (e.firstContext = null)));
}
function fl(e) {
    var t = e._currentValue;
    if (ol !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), null === il)) {
            if (null === al) throw Error(Ve(308));
            ((il = e), (al.dependencies = { lanes: 0, firstContext: e }));
        } else il = il.next = e;
    return t;
}
var dl = null;
function pl(e) {
    null === dl ? (dl = [e]) : dl.push(e);
}
function hl(e, t, n, r) {
    var a = t.interleaved;
    return (null === a ? ((n.next = n), pl(t)) : ((n.next = a.next), (a.next = n)), (t.interleaved = n), vl(e, r));
}
function vl(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        ((e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return));
    return 3 === n.tag ? n.stateNode : null;
}
var ml = !1;
function gl(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function yl(e, t) {
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
function bl(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function _l(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 0 != (2 & uc))) {
        var a = r.pending;
        return (null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)), (r.pending = t), vl(e, n));
    }
    return (
        null === (a = r.interleaved) ? ((t.next = t), pl(r)) : ((t.next = a.next), (a.next = t)),
        (r.interleaved = t),
        vl(e, n)
    );
}
function wl(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), Jn(e, n));
    }
}
function Sl(e, t) {
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
function kl(e, t, n, r) {
    var a = e.updateQueue;
    ml = !1;
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
                            f = gt({}, f, d);
                            break e;
                        case 2:
                            ml = !0;
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
        ((mc |= o), (e.lanes = o), (e.memoizedState = f));
    }
}
function xl(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                a = r.callback;
            if (null !== a) {
                if (((r.callback = null), (r = n), 'function' != typeof a)) throw Error(Ve(191, a));
                a.call(r);
            }
        }
}
var Ol = {},
    El = ao(Ol),
    Pl = ao(Ol),
    Cl = ao(Ol);
function Al(e) {
    if (e === Ol) throw Error(Ve(174));
    return e;
}
function Nl(e, t) {
    switch ((oo(Cl, t), oo(Pl, e), oo(El, Ol), (e = t.nodeType))) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Bt(null, '');
            break;
        default:
            t = Bt((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
    }
    (io(El), oo(El, t));
}
function Tl() {
    (io(El), io(Pl), io(Cl));
}
function jl(e) {
    Al(Cl.current);
    var t = Al(El.current),
        n = Bt(t, e.type);
    t !== n && (oo(Pl, e), oo(El, n));
}
function Rl(e) {
    Pl.current === e && (io(El), io(Pl));
}
var Ll = ao(0);
function zl(e) {
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
var Il = [];
function Dl() {
    for (var e = 0; e < Il.length; e++) Il[e]._workInProgressVersionPrimary = null;
    Il.length = 0;
}
var Ml = et.ReactCurrentDispatcher,
    Vl = et.ReactCurrentBatchConfig,
    Fl = 0,
    Ul = null,
    Bl = null,
    $l = null,
    Wl = !1,
    Hl = !1,
    Kl = 0,
    ql = 0;
function Ql() {
    throw Error(Ve(321));
}
function Gl(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ua(e[n], t[n])) return !1;
    return !0;
}
function Yl(e, t, n, r, a, i) {
    if (
        ((Fl = i),
        (Ul = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Ml.current = null === e || null === e.memoizedState ? Ru : Lu),
        (e = n(r, a)),
        Hl)
    ) {
        i = 0;
        do {
            if (((Hl = !1), (Kl = 0), 25 <= i)) throw Error(Ve(301));
            ((i += 1), ($l = Bl = null), (t.updateQueue = null), (Ml.current = zu), (e = n(r, a)));
        } while (Hl);
    }
    if (((Ml.current = ju), (t = null !== Bl && null !== Bl.next), (Fl = 0), ($l = Bl = Ul = null), (Wl = !1), t))
        throw Error(Ve(300));
    return e;
}
function Xl() {
    var e = 0 !== Kl;
    return ((Kl = 0), e);
}
function Zl() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (null === $l ? (Ul.memoizedState = $l = e) : ($l = $l.next = e), $l);
}
function Jl() {
    if (null === Bl) {
        var e = Ul.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = Bl.next;
    var t = null === $l ? Ul.memoizedState : $l.next;
    if (null !== t) (($l = t), (Bl = e));
    else {
        if (null === e) throw Error(Ve(310));
        ((e = {
            memoizedState: (Bl = e).memoizedState,
            baseState: Bl.baseState,
            baseQueue: Bl.baseQueue,
            queue: Bl.queue,
            next: null,
        }),
            null === $l ? (Ul.memoizedState = $l = e) : ($l = $l.next = e));
    }
    return $l;
}
function eu(e, t) {
    return 'function' == typeof t ? t(e) : t;
}
function tu(e) {
    var t = Jl(),
        n = t.queue;
    if (null === n) throw Error(Ve(311));
    n.lastRenderedReducer = e;
    var r = Bl,
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
            if ((Fl & c) === c)
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
                (null === u ? ((l = u = f), (o = r)) : (u = u.next = f), (Ul.lanes |= c), (mc |= c));
            }
            s = s.next;
        } while (null !== s && s !== i);
        (null === u ? (o = r) : (u.next = l),
            Ua(r, t.memoizedState) || (Ju = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = u),
            (n.lastRenderedState = r));
    }
    if (null !== (e = n.interleaved)) {
        a = e;
        do {
            ((i = a.lane), (Ul.lanes |= i), (mc |= i), (a = a.next));
        } while (a !== e);
    } else null === a && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function nu(e) {
    var t = Jl(),
        n = t.queue;
    if (null === n) throw Error(Ve(311));
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
        (Ua(i, t.memoizedState) || (Ju = !0),
            (t.memoizedState = i),
            null === t.baseQueue && (t.baseState = i),
            (n.lastRenderedState = i));
    }
    return [i, r];
}
function ru() {}
function au(e, t) {
    var n = Ul,
        r = Jl(),
        a = t(),
        i = !Ua(r.memoizedState, a);
    if (
        (i && ((r.memoizedState = a), (Ju = !0)),
        (r = r.queue),
        mu(lu.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (null !== $l && 1 & $l.memoizedState.tag))
    ) {
        if (((n.flags |= 2048), fu(9, ou.bind(null, n, r, a, t), void 0, null), null === sc)) throw Error(Ve(349));
        0 != (30 & Fl) || iu(n, t, a);
    }
    return a;
}
function iu(e, t, n) {
    ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = Ul.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (Ul.updateQueue = t), (t.stores = [e]))
            : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e));
}
function ou(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), uu(t) && su(e));
}
function lu(e, t, n) {
    return n(function () {
        uu(t) && su(e);
    });
}
function uu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ua(e, n);
    } catch (r) {
        return !0;
    }
}
function su(e) {
    var t = vl(e, 1);
    null !== t && Ic(t, e, 1, -1);
}
function cu(e) {
    var t = Zl();
    return (
        'function' == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: eu,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Cu.bind(null, Ul, e)),
        [t.memoizedState, e]
    );
}
function fu(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = Ul.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (Ul.updateQueue = t), (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
    );
}
function du() {
    return Jl().memoizedState;
}
function pu(e, t, n, r) {
    var a = Zl();
    ((Ul.flags |= e), (a.memoizedState = fu(1 | t, n, void 0, void 0 === r ? null : r)));
}
function hu(e, t, n, r) {
    var a = Jl();
    r = void 0 === r ? null : r;
    var i = void 0;
    if (null !== Bl) {
        var o = Bl.memoizedState;
        if (((i = o.destroy), null !== r && Gl(r, o.deps))) return void (a.memoizedState = fu(t, n, i, r));
    }
    ((Ul.flags |= e), (a.memoizedState = fu(1 | t, n, i, r)));
}
function vu(e, t) {
    return pu(8390656, 8, e, t);
}
function mu(e, t) {
    return hu(2048, 8, e, t);
}
function gu(e, t) {
    return hu(4, 2, e, t);
}
function yu(e, t) {
    return hu(4, 4, e, t);
}
function bu(e, t) {
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
function _u(e, t, n) {
    return ((n = null != n ? n.concat([e]) : null), hu(4, 4, bu.bind(null, t, e), n));
}
function wu() {}
function Su(e, t) {
    var n = Jl();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Gl(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function ku(e, t) {
    var n = Jl();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Gl(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function xu(e, t, n) {
    return 0 == (21 & Fl)
        ? (e.baseState && ((e.baseState = !1), (Ju = !0)), (e.memoizedState = n))
        : (Ua(n, t) || ((n = Yn()), (Ul.lanes |= n), (mc |= n), (e.baseState = !0)), t);
}
function Ou(e, t) {
    var n = er;
    ((er = 0 !== n && 4 > n ? n : 4), e(!0));
    var r = Vl.transition;
    Vl.transition = {};
    try {
        (e(!1), t());
    } finally {
        ((er = n), (Vl.transition = r));
    }
}
function Eu() {
    return Jl().memoizedState;
}
function Pu(e, t, n) {
    var r = zc(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Au(e))) Nu(t, n);
    else if (null !== (n = hl(e, t, n, r))) {
        (Ic(n, e, r, Lc()), Tu(n, t, r));
    }
}
function Cu(e, t, n) {
    var r = zc(e),
        a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Au(e)) Nu(t, a);
    else {
        var i = e.alternate;
        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer))
            try {
                var o = t.lastRenderedState,
                    l = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), Ua(l, o))) {
                    var u = t.interleaved;
                    return (
                        null === u ? ((a.next = a), pl(t)) : ((a.next = u.next), (u.next = a)),
                        void (t.interleaved = a)
                    );
                }
            } catch (s) {}
        null !== (n = hl(e, t, a, r)) && (Ic(n, e, r, (a = Lc())), Tu(n, t, r));
    }
}
function Au(e) {
    var t = e.alternate;
    return e === Ul || (null !== t && t === Ul);
}
function Nu(e, t) {
    Hl = Wl = !0;
    var n = e.pending;
    (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
}
function Tu(e, t, n) {
    if (0 != (4194240 & n)) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), Jn(e, n));
    }
}
var ju = {
        readContext: fl,
        useCallback: Ql,
        useContext: Ql,
        useEffect: Ql,
        useImperativeHandle: Ql,
        useInsertionEffect: Ql,
        useLayoutEffect: Ql,
        useMemo: Ql,
        useReducer: Ql,
        useRef: Ql,
        useState: Ql,
        useDebugValue: Ql,
        useDeferredValue: Ql,
        useTransition: Ql,
        useMutableSource: Ql,
        useSyncExternalStore: Ql,
        useId: Ql,
        unstable_isNewReconciler: !1,
    },
    Ru = {
        readContext: fl,
        useCallback: function (e, t) {
            return ((Zl().memoizedState = [e, void 0 === t ? null : t]), e);
        },
        useContext: fl,
        useEffect: vu,
        useImperativeHandle: function (e, t, n) {
            return ((n = null != n ? n.concat([e]) : null), pu(4194308, 4, bu.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
            return pu(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return pu(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Zl();
            return ((t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
        },
        useReducer: function (e, t, n) {
            var r = Zl();
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
                (e = e.dispatch = Pu.bind(null, Ul, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            return ((e = { current: e }), (Zl().memoizedState = e));
        },
        useState: cu,
        useDebugValue: wu,
        useDeferredValue: function (e) {
            return (Zl().memoizedState = e);
        },
        useTransition: function () {
            var e = cu(!1),
                t = e[0];
            return ((e = Ou.bind(null, e[1])), (Zl().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = Ul,
                a = Zl();
            if (Vo) {
                if (void 0 === n) throw Error(Ve(407));
                n = n();
            } else {
                if (((n = t()), null === sc)) throw Error(Ve(349));
                0 != (30 & Fl) || iu(r, t, n);
            }
            a.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
                (a.queue = i),
                vu(lu.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                fu(9, ou.bind(null, r, i, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = Zl(),
                t = sc.identifierPrefix;
            if (Vo) {
                var n = jo;
                ((t = ':' + t + 'R' + (n = (To & ~(1 << (32 - Un(To) - 1))).toString(32) + n)),
                    0 < (n = Kl++) && (t += 'H' + n.toString(32)),
                    (t += ':'));
            } else t = ':' + t + 'r' + (n = ql++).toString(32) + ':';
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Lu = {
        readContext: fl,
        useCallback: Su,
        useContext: fl,
        useEffect: mu,
        useImperativeHandle: _u,
        useInsertionEffect: gu,
        useLayoutEffect: yu,
        useMemo: ku,
        useReducer: tu,
        useRef: du,
        useState: function () {
            return tu(eu);
        },
        useDebugValue: wu,
        useDeferredValue: function (e) {
            return xu(Jl(), Bl.memoizedState, e);
        },
        useTransition: function () {
            return [tu(eu)[0], Jl().memoizedState];
        },
        useMutableSource: ru,
        useSyncExternalStore: au,
        useId: Eu,
        unstable_isNewReconciler: !1,
    },
    zu = {
        readContext: fl,
        useCallback: Su,
        useContext: fl,
        useEffect: mu,
        useImperativeHandle: _u,
        useInsertionEffect: gu,
        useLayoutEffect: yu,
        useMemo: ku,
        useReducer: nu,
        useRef: du,
        useState: function () {
            return nu(eu);
        },
        useDebugValue: wu,
        useDeferredValue: function (e) {
            var t = Jl();
            return null === Bl ? (t.memoizedState = e) : xu(t, Bl.memoizedState, e);
        },
        useTransition: function () {
            return [nu(eu)[0], Jl().memoizedState];
        },
        useMutableSource: ru,
        useSyncExternalStore: au,
        useId: Eu,
        unstable_isNewReconciler: !1,
    };
function Iu(e, t) {
    if (e && e.defaultProps) {
        for (var n in ((t = gt({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
    }
    return t;
}
function Du(e, t, n, r) {
    ((n = null == (n = n(r, (t = e.memoizedState))) ? t : gt({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n));
}
var Mu = {
    isMounted: function (e) {
        return !!(e = e._reactInternals) && kn(e) === e;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Lc(),
            a = zc(e),
            i = bl(r, a);
        ((i.payload = t), null != n && (i.callback = n), null !== (t = _l(e, i, a)) && (Ic(t, e, a, r), wl(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Lc(),
            a = zc(e),
            i = bl(r, a);
        ((i.tag = 1),
            (i.payload = t),
            null != n && (i.callback = n),
            null !== (t = _l(e, i, a)) && (Ic(t, e, a, r), wl(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Lc(),
            r = zc(e),
            a = bl(n, r);
        ((a.tag = 2), null != t && (a.callback = t), null !== (t = _l(e, a, r)) && (Ic(t, e, r, n), wl(t, e, r)));
    },
};
function Vu(e, t, n, r, a, i, o) {
    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, i, o)
        : !t.prototype || !t.prototype.isPureReactComponent || !Ba(n, r) || !Ba(a, i);
}
function Fu(e, t, n) {
    var r = !1,
        a = lo,
        i = t.contextType;
    return (
        'object' == typeof i && null !== i
            ? (i = fl(i))
            : ((a = po(t) ? co : uo.current), (i = (r = null != (r = t.contextTypes)) ? fo(e, a) : lo)),
        (t = new t(n, i)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = Mu),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    );
}
function Uu(e, t, n, r) {
    ((e = t.state),
        'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Mu.enqueueReplaceState(t, t.state, null));
}
function Bu(e, t, n, r) {
    var a = e.stateNode;
    ((a.props = n), (a.state = e.memoizedState), (a.refs = {}), gl(e));
    var i = t.contextType;
    ('object' == typeof i && null !== i ? (a.context = fl(i)) : ((i = po(t) ? co : uo.current), (a.context = fo(e, i))),
        (a.state = e.memoizedState),
        'function' == typeof (i = t.getDerivedStateFromProps) && (Du(e, t, i, n), (a.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof a.getSnapshotBeforeUpdate ||
            ('function' != typeof a.UNSAFE_componentWillMount && 'function' != typeof a.componentWillMount) ||
            ((t = a.state),
            'function' == typeof a.componentWillMount && a.componentWillMount(),
            'function' == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
            t !== a.state && Mu.enqueueReplaceState(a, a.state, null),
            kl(e, n, a, r),
            (a.state = e.memoizedState)),
        'function' == typeof a.componentDidMount && (e.flags |= 4194308));
}
function $u(e, t) {
    try {
        var n = '',
            r = t;
        do {
            ((n += wt(r)), (r = r.return));
        } while (r);
        var a = n;
    } catch (i) {
        a = '\nError generating stack: ' + i.message + '\n' + i.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
}
function Wu(e, t, n) {
    return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null };
}
function Hu(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Ku = 'function' == typeof WeakMap ? WeakMap : Map;
function qu(e, t, n) {
    (((n = bl(-1, n)).tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
        (n.callback = function () {
            (xc || ((xc = !0), (Oc = r)), Hu(0, t));
        }),
        n
    );
}
function Qu(e, t, n) {
    (n = bl(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ('function' == typeof r) {
        var a = t.value;
        ((n.payload = function () {
            return r(a);
        }),
            (n.callback = function () {
                Hu(0, t);
            }));
    }
    var i = e.stateNode;
    return (
        null !== i &&
            'function' == typeof i.componentDidCatch &&
            (n.callback = function () {
                (Hu(0, t), 'function' != typeof r && (null === Ec ? (Ec = new Set([this])) : Ec.add(this)));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
            }),
        n
    );
}
function Gu(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new Ku();
        var a = new Set();
        r.set(t, a);
    } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
    a.has(n) || (a.add(n), (e = of.bind(null, e, t, n)), t.then(e, e));
}
function Yu(e) {
    do {
        var t;
        if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e;
        e = e.return;
    } while (null !== e);
    return null;
}
function Xu(e, t, n, r, a) {
    return 0 == (1 & e.mode)
        ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                1 === n.tag && (null === n.alternate ? (n.tag = 17) : (((t = bl(-1, 1)).tag = 2), _l(n, t, 1))),
                (n.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = a), e);
}
var Zu = et.ReactCurrentOwner,
    Ju = !1;
function es(e, t, n, r) {
    t.child = null === e ? nl(t, null, n, r) : tl(t, e.child, n, r);
}
function ts(e, t, n, r, a) {
    n = n.render;
    var i = t.ref;
    return (
        cl(t, a),
        (r = Yl(e, t, n, r, i, a)),
        (n = Xl()),
        null === e || Ju
            ? (Vo && n && zo(t), (t.flags |= 1), es(e, t, r, a), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), xs(e, t, a))
    );
}
function ns(e, t, n, r, a) {
    if (null === e) {
        var i = n.type;
        return 'function' != typeof i ||
            pf(i) ||
            void 0 !== i.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = vf(n.type, null, r, t, t.mode, a)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = i), rs(e, t, i, r, a));
    }
    if (((i = e.child), 0 == (e.lanes & a))) {
        var o = i.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : Ba)(o, r) && e.ref === t.ref) return xs(e, t, a);
    }
    return ((t.flags |= 1), ((e = hf(i, r)).ref = t.ref), (e.return = t), (t.child = e));
}
function rs(e, t, n, r, a) {
    if (null !== e) {
        var i = e.memoizedProps;
        if (Ba(i, r) && e.ref === t.ref) {
            if (((Ju = !1), (t.pendingProps = r = i), 0 == (e.lanes & a))) return ((t.lanes = e.lanes), xs(e, t, a));
            0 != (131072 & e.flags) && (Ju = !0);
        }
    }
    return os(e, t, n, r, a);
}
function as(e, t, n) {
    var r = t.pendingProps,
        a = r.children,
        i = null !== e ? e.memoizedState : null;
    if ('hidden' === r.mode)
        if (0 == (1 & t.mode))
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), oo(pc, dc), (dc |= n));
        else {
            if (0 == (1073741824 & n))
                return (
                    (e = null !== i ? i.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    oo(pc, dc),
                    (dc |= e),
                    null
                );
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== i ? i.baseLanes : n),
                oo(pc, dc),
                (dc |= r));
        }
    else (null !== i ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), oo(pc, dc), (dc |= r));
    return (es(e, t, a, n), t.child);
}
function is(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function os(e, t, n, r, a) {
    var i = po(n) ? co : uo.current;
    return (
        (i = fo(t, i)),
        cl(t, a),
        (n = Yl(e, t, n, r, i, a)),
        (r = Xl()),
        null === e || Ju
            ? (Vo && r && zo(t), (t.flags |= 1), es(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), xs(e, t, a))
    );
}
function ls(e, t, n, r, a) {
    if (po(n)) {
        var i = !0;
        go(t);
    } else i = !1;
    if ((cl(t, a), null === t.stateNode)) (ks(e, t), Fu(t, n, r), Bu(t, n, r, a), (r = !0));
    else if (null === e) {
        var o = t.stateNode,
            l = t.memoizedProps;
        o.props = l;
        var u = o.context,
            s = n.contextType;
        'object' == typeof s && null !== s ? (s = fl(s)) : (s = fo(t, (s = po(n) ? co : uo.current)));
        var c = n.getDerivedStateFromProps,
            f = 'function' == typeof c || 'function' == typeof o.getSnapshotBeforeUpdate;
        (f ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((l !== r || u !== s) && Uu(t, o, r, s)),
            (ml = !1));
        var d = t.memoizedState;
        ((o.state = d),
            kl(t, r, o, a),
            (u = t.memoizedState),
            l !== r || d !== u || so.current || ml
                ? ('function' == typeof c && (Du(t, n, c, r), (u = t.memoizedState)),
                  (l = ml || Vu(t, n, l, r, d, u, s))
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
            yl(e, t),
            (l = t.memoizedProps),
            (s = t.type === t.elementType ? l : Iu(t.type, l)),
            (o.props = s),
            (f = t.pendingProps),
            (d = o.context),
            'object' == typeof (u = n.contextType) && null !== u
                ? (u = fl(u))
                : (u = fo(t, (u = po(n) ? co : uo.current))));
        var p = n.getDerivedStateFromProps;
        ((c = 'function' == typeof p || 'function' == typeof o.getSnapshotBeforeUpdate) ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((l !== f || d !== u) && Uu(t, o, r, u)),
            (ml = !1),
            (d = t.memoizedState),
            (o.state = d),
            kl(t, r, o, a));
        var h = t.memoizedState;
        l !== f || d !== h || so.current || ml
            ? ('function' == typeof p && (Du(t, n, p, r), (h = t.memoizedState)),
              (s = ml || Vu(t, n, s, r, d, h, u) || !1)
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
    return us(e, t, n, r, i, a);
}
function us(e, t, n, r, a, i) {
    is(e, t);
    var o = 0 != (128 & t.flags);
    if (!r && !o) return (a && yo(t, n, !1), xs(e, t, i));
    ((r = t.stateNode), (Zu.current = t));
    var l = o && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
    return (
        (t.flags |= 1),
        null !== e && o ? ((t.child = tl(t, e.child, null, i)), (t.child = tl(t, null, l, i))) : es(e, t, l, i),
        (t.memoizedState = r.state),
        a && yo(t, n, !0),
        t.child
    );
}
function ss(e) {
    var t = e.stateNode;
    (t.pendingContext ? vo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && vo(0, t.context, !1),
        Nl(e, t.containerInfo));
}
function cs(e, t, n, r, a) {
    return (Qo(), Go(a), (t.flags |= 256), es(e, t, n, r), t.child);
}
var fs,
    ds,
    ps,
    hs,
    vs = { dehydrated: null, treeContext: null, retryLane: 0 };
function ms(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function gs(e, t, n) {
    var r,
        a = t.pendingProps,
        i = Ll.current,
        o = !1,
        l = 0 != (128 & t.flags);
    if (
        ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
        r ? ((o = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (i |= 1),
        oo(Ll, 1 & i),
        null === e)
    )
        return (
            Wo(t),
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
                            : (o = gf(l, a, 0, null)),
                        (e = mf(e, a, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = ms(n)),
                        (t.memoizedState = vs),
                        e)
                      : ys(t, l))
        );
    if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
        return (function (e, t, n, r, a, i, o) {
            if (n)
                return 256 & t.flags
                    ? ((t.flags &= -257), bs(e, t, o, (r = Wu(Error(Ve(422))))))
                    : null !== t.memoizedState
                      ? ((t.child = e.child), (t.flags |= 128), null)
                      : ((i = r.fallback),
                        (a = t.mode),
                        (r = gf({ mode: 'visible', children: r.children }, a, 0, null)),
                        ((i = mf(i, a, o, null)).flags |= 2),
                        (r.return = t),
                        (i.return = t),
                        (r.sibling = i),
                        (t.child = r),
                        0 != (1 & t.mode) && tl(t, e.child, null, o),
                        (t.child.memoizedState = ms(o)),
                        (t.memoizedState = vs),
                        i);
            if (0 == (1 & t.mode)) return bs(e, t, o, null);
            if ('$!' === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset)) var l = r.dgst;
                return ((r = l), bs(e, t, o, (r = Wu((i = Error(Ve(419))), r, void 0))));
            }
            if (((l = 0 != (o & e.childLanes)), Ju || l)) {
                if (null !== (r = sc)) {
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
                        ((i.retryLane = a), vl(e, a), Ic(r, e, a, -1));
                }
                return (Gc(), bs(e, t, o, (r = Wu(Error(Ve(421))))));
            }
            return '$?' === a.data
                ? ((t.flags |= 128), (t.child = e.child), (t = uf.bind(null, e)), (a._reactRetry = t), null)
                : ((e = i.treeContext),
                  (Mo = $i(a.nextSibling)),
                  (Do = t),
                  (Vo = !0),
                  (Fo = null),
                  null !== e &&
                      ((Co[Ao++] = To), (Co[Ao++] = jo), (Co[Ao++] = No), (To = e.id), (jo = e.overflow), (No = t)),
                  (t = ys(t, r.children)),
                  (t.flags |= 4096),
                  t);
        })(e, t, l, a, r, i, n);
    if (o) {
        ((o = a.fallback), (l = t.mode), (r = (i = e.child).sibling));
        var u = { mode: 'hidden', children: a.children };
        return (
            0 == (1 & l) && t.child !== i
                ? (((a = t.child).childLanes = 0), (a.pendingProps = u), (t.deletions = null))
                : ((a = hf(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
            null !== r ? (o = hf(r, o)) : ((o = mf(o, l, n, null)).flags |= 2),
            (o.return = t),
            (a.return = t),
            (a.sibling = o),
            (t.child = a),
            (a = o),
            (o = t.child),
            (l =
                null === (l = e.child.memoizedState)
                    ? ms(n)
                    : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
            (o.memoizedState = l),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = vs),
            a
        );
    }
    return (
        (e = (o = e.child).sibling),
        (a = hf(o, { mode: 'visible', children: a.children })),
        0 == (1 & t.mode) && (a.lanes = n),
        (a.return = t),
        (a.sibling = null),
        null !== e && (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a
    );
}
function ys(e, t) {
    return (((t = gf({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t));
}
function bs(e, t, n, r) {
    return (
        null !== r && Go(r),
        tl(t, e.child, null, n),
        ((e = ys(t, t.pendingProps.children)).flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function _s(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (null !== r && (r.lanes |= t), sl(e.return, t, n));
}
function ws(e, t, n, r, a) {
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
function Ss(e, t, n) {
    var r = t.pendingProps,
        a = r.revealOrder,
        i = r.tail;
    if ((es(e, t, r.children, n), 0 != (2 & (r = Ll.current)))) ((r = (1 & r) | 2), (t.flags |= 128));
    else {
        if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && _s(e, n, t);
                else if (19 === e.tag) _s(e, n, t);
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
    if ((oo(Ll, r), 0 == (1 & t.mode))) t.memoizedState = null;
    else
        switch (a) {
            case 'forwards':
                for (n = t.child, a = null; null !== n; )
                    (null !== (e = n.alternate) && null === zl(e) && (a = n), (n = n.sibling));
                (null === (n = a) ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)),
                    ws(t, !1, a, n, i));
                break;
            case 'backwards':
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                    if (null !== (e = a.alternate) && null === zl(e)) {
                        t.child = a;
                        break;
                    }
                    ((e = a.sibling), (a.sibling = n), (n = a), (a = e));
                }
                ws(t, !0, n, null, i);
                break;
            case 'together':
                ws(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function ks(e, t) {
    0 == (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function xs(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (mc |= t.lanes), 0 == (n & t.childLanes))) return null;
    if (null !== e && t.child !== e.child) throw Error(Ve(153));
    if (null !== t.child) {
        for (n = hf((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            ((e = e.sibling), ((n = n.sibling = hf(e, e.pendingProps)).return = t));
        n.sibling = null;
    }
    return t.child;
}
function Os(e, t) {
    if (!Vo)
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
function Es(e) {
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
function Ps(e, t, n) {
    var r = t.pendingProps;
    switch ((Io(t), t.tag)) {
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
            return (Es(t), null);
        case 1:
        case 17:
            return (po(t.type) && ho(), Es(t), null);
        case 3:
            return (
                (r = t.stateNode),
                Tl(),
                io(so),
                io(uo),
                Dl(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                    (Ko(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                          ((t.flags |= 1024), null !== Fo && (Fc(Fo), (Fo = null)))),
                ds(e, t),
                Es(t),
                null
            );
        case 5:
            Rl(t);
            var a = Al(Cl.current);
            if (((n = t.type), null !== e && null != t.stateNode))
                (ps(e, t, n, r, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(Ve(166));
                    return (Es(t), null);
                }
                if (((e = Al(El.current)), Ko(t))) {
                    ((r = t.stateNode), (n = t.type));
                    var i = t.memoizedProps;
                    switch (((r[Ki] = t), (r[qi] = i), (e = 0 != (1 & t.mode)), n)) {
                        case 'dialog':
                            (bi('cancel', r), bi('close', r));
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            bi('load', r);
                            break;
                        case 'video':
                        case 'audio':
                            for (a = 0; a < vi.length; a++) bi(vi[a], r);
                            break;
                        case 'source':
                            bi('error', r);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            (bi('error', r), bi('load', r));
                            break;
                        case 'details':
                            bi('toggle', r);
                            break;
                        case 'input':
                            (Nt(r, i), bi('invalid', r));
                            break;
                        case 'select':
                            ((r._wrapperState = { wasMultiple: !!i.multiple }), bi('invalid', r));
                            break;
                        case 'textarea':
                            (Mt(r, i), bi('invalid', r));
                    }
                    for (var o in (Zt(n, i), (a = null), i))
                        if (i.hasOwnProperty(o)) {
                            var l = i[o];
                            'children' === o
                                ? 'string' == typeof l
                                    ? r.textContent !== l &&
                                      (!0 !== i.suppressHydrationWarning && ji(r.textContent, l, e),
                                      (a = ['children', l]))
                                    : 'number' == typeof l &&
                                      r.textContent !== '' + l &&
                                      (!0 !== i.suppressHydrationWarning && ji(r.textContent, l, e),
                                      (a = ['children', '' + l]))
                                : Ue.hasOwnProperty(o) && null != l && 'onScroll' === o && bi('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            (Et(r), Rt(r, i, !0));
                            break;
                        case 'textarea':
                            (Et(r), Ft(r));
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            'function' == typeof i.onClick && (r.onclick = Ri);
                    }
                    ((r = a), (t.updateQueue = r), null !== r && (t.flags |= 4));
                } else {
                    ((o = 9 === a.nodeType ? a : a.ownerDocument),
                        'http://www.w3.org/1999/xhtml' === e && (e = Ut(n)),
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
                        (e[Ki] = t),
                        (e[qi] = r),
                        fs(e, t, !1, !1),
                        (t.stateNode = e));
                    e: {
                        switch (((o = Jt(n, r)), n)) {
                            case 'dialog':
                                (bi('cancel', e), bi('close', e), (a = r));
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                (bi('load', e), (a = r));
                                break;
                            case 'video':
                            case 'audio':
                                for (a = 0; a < vi.length; a++) bi(vi[a], e);
                                a = r;
                                break;
                            case 'source':
                                (bi('error', e), (a = r));
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                (bi('error', e), bi('load', e), (a = r));
                                break;
                            case 'details':
                                (bi('toggle', e), (a = r));
                                break;
                            case 'input':
                                (Nt(e, r), (a = At(e, r)), bi('invalid', e));
                                break;
                            case 'option':
                            default:
                                a = r;
                                break;
                            case 'select':
                                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (a = gt({}, r, { value: void 0 })),
                                    bi('invalid', e));
                                break;
                            case 'textarea':
                                (Mt(e, r), (a = Dt(e, r)), bi('invalid', e));
                        }
                        for (i in (Zt(n, a), (l = a)))
                            if (l.hasOwnProperty(i)) {
                                var u = l[i];
                                'style' === i
                                    ? Yt(e, u)
                                    : 'dangerouslySetInnerHTML' === i
                                      ? null != (u = u ? u.__html : void 0) && Ht(e, u)
                                      : 'children' === i
                                        ? 'string' == typeof u
                                            ? ('textarea' !== n || '' !== u) && Kt(e, u)
                                            : 'number' == typeof u && Kt(e, '' + u)
                                        : 'suppressContentEditableWarning' !== i &&
                                          'suppressHydrationWarning' !== i &&
                                          'autoFocus' !== i &&
                                          (Ue.hasOwnProperty(i)
                                              ? null != u && 'onScroll' === i && bi('scroll', e)
                                              : null != u && Je(e, i, u, o));
                            }
                        switch (n) {
                            case 'input':
                                (Et(e), Rt(e, r, !1));
                                break;
                            case 'textarea':
                                (Et(e), Ft(e));
                                break;
                            case 'option':
                                null != r.value && e.setAttribute('value', '' + xt(r.value));
                                break;
                            case 'select':
                                ((e.multiple = !!r.multiple),
                                    null != (i = r.value)
                                        ? It(e, !!r.multiple, i, !1)
                                        : null != r.defaultValue && It(e, !!r.multiple, r.defaultValue, !0));
                                break;
                            default:
                                'function' == typeof a.onClick && (e.onclick = Ri);
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
            return (Es(t), null);
        case 6:
            if (e && null != t.stateNode) hs(e, t, e.memoizedProps, r);
            else {
                if ('string' != typeof r && null === t.stateNode) throw Error(Ve(166));
                if (((n = Al(Cl.current)), Al(El.current), Ko(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Ki] = t),
                        (i = r.nodeValue !== n) && null !== (e = Do))
                    )
                        switch (e.tag) {
                            case 3:
                                ji(r.nodeValue, n, 0 != (1 & e.mode));
                                break;
                            case 5:
                                !0 !== e.memoizedProps.suppressHydrationWarning &&
                                    ji(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                    i && (t.flags |= 4);
                } else (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Ki] = t), (t.stateNode = r));
            }
            return (Es(t), null);
        case 13:
            if (
                (io(Ll),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (Vo && null !== Mo && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                    (qo(), Qo(), (t.flags |= 98560), (i = !1));
                else if (((i = Ko(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!i) throw Error(Ve(318));
                        if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(Ve(317));
                        i[Ki] = t;
                    } else (Qo(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                    (Es(t), (i = !1));
                } else (null !== Fo && (Fc(Fo), (Fo = null)), (i = !0));
                if (!i) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) && (null === e || 0 != (1 & Ll.current) ? 0 === hc && (hc = 3) : Gc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Es(t),
                  null);
        case 4:
            return (Tl(), ds(e, t), null === e && Si(t.stateNode.containerInfo), Es(t), null);
        case 10:
            return (ul(t.type._context), Es(t), null);
        case 19:
            if ((io(Ll), null === (i = t.memoizedState))) return (Es(t), null);
            if (((r = 0 != (128 & t.flags)), null === (o = i.rendering)))
                if (r) Os(i, !1);
                else {
                    if (0 !== hc || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (o = zl(e))) {
                                for (
                                    t.flags |= 128,
                                        Os(i, !1),
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
                                return (oo(Ll, (1 & Ll.current) | 2), t.child);
                            }
                            e = e.sibling;
                        }
                    null !== i.tail && jn() > Sc && ((t.flags |= 128), (r = !0), Os(i, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = zl(o))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            Os(i, !0),
                            null === i.tail && 'hidden' === i.tailMode && !o.alternate && !Vo)
                        )
                            return (Es(t), null);
                    } else
                        2 * jn() - i.renderingStartTime > Sc &&
                            1073741824 !== n &&
                            ((t.flags |= 128), (r = !0), Os(i, !1), (t.lanes = 4194304));
                i.isBackwards
                    ? ((o.sibling = t.child), (t.child = o))
                    : (null !== (n = i.last) ? (n.sibling = o) : (t.child = o), (i.last = o));
            }
            return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = jn()),
                  (t.sibling = null),
                  (n = Ll.current),
                  oo(Ll, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Es(t), null);
        case 22:
        case 23:
            return (
                Hc(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 != (1 & t.mode)
                    ? 0 != (1073741824 & dc) && (Es(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                    : Es(t),
                null
            );
        case 24:
        case 25:
            return null;
    }
    throw Error(Ve(156, t.tag));
}
function Cs(e, t) {
    switch ((Io(t), t.tag)) {
        case 1:
            return (po(t.type) && ho(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null);
        case 3:
            return (
                Tl(),
                io(so),
                io(uo),
                Dl(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 5:
            return (Rl(t), null);
        case 13:
            if ((io(Ll), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(Ve(340));
                Qo();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return (io(Ll), null);
        case 4:
            return (Tl(), null);
        case 10:
            return (ul(t.type._context), null);
        case 22:
        case 23:
            return (Hc(), null);
        default:
            return null;
    }
}
((fs = function (e, t) {
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
    (ds = function () {}),
    (ps = function (e, t, n, r) {
        var a = e.memoizedProps;
        if (a !== r) {
            ((e = t.stateNode), Al(El.current));
            var i,
                o = null;
            switch (n) {
                case 'input':
                    ((a = At(e, a)), (r = At(e, r)), (o = []));
                    break;
                case 'select':
                    ((a = gt({}, a, { value: void 0 })), (r = gt({}, r, { value: void 0 })), (o = []));
                    break;
                case 'textarea':
                    ((a = Dt(e, a)), (r = Dt(e, r)), (o = []));
                    break;
                default:
                    'function' != typeof a.onClick && 'function' == typeof r.onClick && (e.onclick = Ri);
            }
            for (s in (Zt(n, r), (n = null), a))
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
                            (Ue.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
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
                                (Ue.hasOwnProperty(s)
                                    ? (null != u && 'onScroll' === s && bi('scroll', e), o || l === u || (o = []))
                                    : (o = o || []).push(s, u));
            }
            n && (o = o || []).push('style', n);
            var s = o;
            (t.updateQueue = s) && (t.flags |= 4);
        }
    }),
    (hs = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
    }));
var As = !1,
    Ns = !1,
    Ts = 'function' == typeof WeakSet ? WeakSet : Set,
    js = null;
function Rs(e, t) {
    var n = e.ref;
    if (null !== n)
        if ('function' == typeof n)
            try {
                n(null);
            } catch (r) {
                af(e, t, r);
            }
        else n.current = null;
}
function Ls(e, t, n) {
    try {
        n();
    } catch (r) {
        af(e, t, r);
    }
}
var zs = !1;
function Is(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var a = (r = r.next);
        do {
            if ((a.tag & e) === e) {
                var i = a.destroy;
                ((a.destroy = void 0), void 0 !== i && Ls(t, n, i));
            }
            a = a.next;
        } while (a !== r);
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
function Ms(e) {
    var t = e.ref;
    if (null !== t) {
        var n = e.stateNode;
        (e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e));
    }
}
function Vs(e) {
    var t = e.alternate;
    (null !== t && ((e.alternate = null), Vs(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[Ki], delete t[qi], delete t[Gi], delete t[Yi], delete t[Xi]),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
}
function Fs(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function Us(e) {
    e: for (;;) {
        for (; null === e.sibling; ) {
            if (null === e.return || Fs(e.return)) return null;
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
function Bs(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
        ((e = e.stateNode),
            t
                ? 8 === n.nodeType
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Ri)));
    else if (4 !== r && null !== (e = e.child))
        for (Bs(e, t, n), e = e.sibling; null !== e; ) (Bs(e, t, n), (e = e.sibling));
}
function $s(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (4 !== r && null !== (e = e.child))
        for ($s(e, t, n), e = e.sibling; null !== e; ) ($s(e, t, n), (e = e.sibling));
}
var Ws = null,
    Hs = !1;
function Ks(e, t, n) {
    for (n = n.child; null !== n; ) (qs(e, t, n), (n = n.sibling));
}
function qs(e, t, n) {
    if (Fn && 'function' == typeof Fn.onCommitFiberUnmount)
        try {
            Fn.onCommitFiberUnmount(Vn, n);
        } catch (l) {}
    switch (n.tag) {
        case 5:
            Ns || Rs(n, t);
        case 6:
            var r = Ws,
                a = Hs;
            ((Ws = null),
                Ks(e, t, n),
                (Hs = a),
                null !== (Ws = r) &&
                    (Hs
                        ? ((e = Ws),
                          (n = n.stateNode),
                          8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : Ws.removeChild(n.stateNode)));
            break;
        case 18:
            null !== Ws &&
                (Hs
                    ? ((e = Ws),
                      (n = n.stateNode),
                      8 === e.nodeType ? Bi(e.parentNode, n) : 1 === e.nodeType && Bi(e, n),
                      kr(e))
                    : Bi(Ws, n.stateNode));
            break;
        case 4:
            ((r = Ws), (a = Hs), (Ws = n.stateNode.containerInfo), (Hs = !0), Ks(e, t, n), (Ws = r), (Hs = a));
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ns && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                a = r = r.next;
                do {
                    var i = a,
                        o = i.destroy;
                    ((i = i.tag), void 0 !== o && (0 != (2 & i) || 0 != (4 & i)) && Ls(n, t, o), (a = a.next));
                } while (a !== r);
            }
            Ks(e, t, n);
            break;
        case 1:
            if (!Ns && (Rs(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount))
                try {
                    ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
                } catch (l) {
                    af(n, t, l);
                }
            Ks(e, t, n);
            break;
        case 21:
            Ks(e, t, n);
            break;
        case 22:
            1 & n.mode ? ((Ns = (r = Ns) || null !== n.memoizedState), Ks(e, t, n), (Ns = r)) : Ks(e, t, n);
            break;
        default:
            Ks(e, t, n);
    }
}
function Qs(e) {
    var t = e.updateQueue;
    if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        (null === n && (n = e.stateNode = new Ts()),
            t.forEach(function (t) {
                var r = sf.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
            }));
    }
}
function Gs(e, t) {
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
                            ((Ws = l.stateNode), (Hs = !1));
                            break e;
                        case 3:
                        case 4:
                            ((Ws = l.stateNode.containerInfo), (Hs = !0));
                            break e;
                    }
                    l = l.return;
                }
                if (null === Ws) throw Error(Ve(160));
                (qs(i, o, a), (Ws = null), (Hs = !1));
                var u = a.alternate;
                (null !== u && (u.return = null), (a.return = null));
            } catch (s) {
                af(a, t, s);
            }
        }
    if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) (Ys(t, e), (t = t.sibling));
}
function Ys(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Gs(t, e), Xs(e), 4 & r)) {
                try {
                    (Is(3, e, e.return), Ds(3, e));
                } catch (v) {
                    af(e, e.return, v);
                }
                try {
                    Is(5, e, e.return);
                } catch (v) {
                    af(e, e.return, v);
                }
            }
            break;
        case 1:
            (Gs(t, e), Xs(e), 512 & r && null !== n && Rs(n, n.return));
            break;
        case 5:
            if ((Gs(t, e), Xs(e), 512 & r && null !== n && Rs(n, n.return), 32 & e.flags)) {
                var a = e.stateNode;
                try {
                    Kt(a, '');
                } catch (v) {
                    af(e, e.return, v);
                }
            }
            if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                    o = null !== n ? n.memoizedProps : i,
                    l = e.type,
                    u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                    try {
                        ('input' === l && 'radio' === i.type && null != i.name && Tt(a, i), Jt(l, o));
                        var s = Jt(l, i);
                        for (o = 0; o < u.length; o += 2) {
                            var c = u[o],
                                f = u[o + 1];
                            'style' === c
                                ? Yt(a, f)
                                : 'dangerouslySetInnerHTML' === c
                                  ? Ht(a, f)
                                  : 'children' === c
                                    ? Kt(a, f)
                                    : Je(a, c, f, s);
                        }
                        switch (l) {
                            case 'input':
                                jt(a, i);
                                break;
                            case 'textarea':
                                Vt(a, i);
                                break;
                            case 'select':
                                var d = a._wrapperState.wasMultiple;
                                a._wrapperState.wasMultiple = !!i.multiple;
                                var p = i.value;
                                null != p
                                    ? It(a, !!i.multiple, p, !1)
                                    : d !== !!i.multiple &&
                                      (null != i.defaultValue
                                          ? It(a, !!i.multiple, i.defaultValue, !0)
                                          : It(a, !!i.multiple, i.multiple ? [] : '', !1));
                        }
                        a[qi] = i;
                    } catch (v) {
                        af(e, e.return, v);
                    }
            }
            break;
        case 6:
            if ((Gs(t, e), Xs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(Ve(162));
                ((a = e.stateNode), (i = e.memoizedProps));
                try {
                    a.nodeValue = i;
                } catch (v) {
                    af(e, e.return, v);
                }
            }
            break;
        case 3:
            if ((Gs(t, e), Xs(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                    kr(t.containerInfo);
                } catch (v) {
                    af(e, e.return, v);
                }
            break;
        case 4:
        default:
            (Gs(t, e), Xs(e));
            break;
        case 13:
            (Gs(t, e),
                Xs(e),
                8192 & (a = e.child).flags &&
                    ((i = null !== a.memoizedState),
                    (a.stateNode.isHidden = i),
                    !i || (null !== a.alternate && null !== a.alternate.memoizedState) || (wc = jn())),
                4 & r && Qs(e));
            break;
        case 22:
            if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Ns = (s = Ns) || c), Gs(t, e), (Ns = s)) : Gs(t, e),
                Xs(e),
                8192 & r)
            ) {
                if (((s = null !== e.memoizedState), (e.stateNode.isHidden = s) && !c && 0 != (1 & e.mode)))
                    for (js = e, c = e.child; null !== c; ) {
                        for (f = js = c; null !== js; ) {
                            switch (((p = (d = js).child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Is(4, d, d.return);
                                    break;
                                case 1:
                                    Rs(d, d.return);
                                    var h = d.stateNode;
                                    if ('function' == typeof h.componentWillUnmount) {
                                        ((r = d), (n = d.return));
                                        try {
                                            ((t = r),
                                                (h.props = t.memoizedProps),
                                                (h.state = t.memoizedState),
                                                h.componentWillUnmount());
                                        } catch (v) {
                                            af(r, n, v);
                                        }
                                    }
                                    break;
                                case 5:
                                    Rs(d, d.return);
                                    break;
                                case 22:
                                    if (null !== d.memoizedState) {
                                        tc(f);
                                        continue;
                                    }
                            }
                            null !== p ? ((p.return = d), (js = p)) : tc(f);
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
                                          (l.style.display = Gt('display', o))));
                            } catch (v) {
                                af(e, e.return, v);
                            }
                        }
                    } else if (6 === f.tag) {
                        if (null === c)
                            try {
                                f.stateNode.nodeValue = s ? '' : f.memoizedProps;
                            } catch (v) {
                                af(e, e.return, v);
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
            (Gs(t, e), Xs(e), 4 & r && Qs(e));
        case 21:
    }
}
function Xs(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e: {
                for (var n = e.return; null !== n; ) {
                    if (Fs(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(Ve(160));
            }
            switch (r.tag) {
                case 5:
                    var a = r.stateNode;
                    (32 & r.flags && (Kt(a, ''), (r.flags &= -33)), $s(e, Us(e), a));
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo;
                    Bs(e, Us(e), i);
                    break;
                default:
                    throw Error(Ve(161));
            }
        } catch (o) {
            af(e, e.return, o);
        }
        e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
}
function Zs(e, t, n) {
    ((js = e), Js(e));
}
function Js(e, t, n) {
    for (var r = 0 != (1 & e.mode); null !== js; ) {
        var a = js,
            i = a.child;
        if (22 === a.tag && r) {
            var o = null !== a.memoizedState || As;
            if (!o) {
                var l = a.alternate,
                    u = (null !== l && null !== l.memoizedState) || Ns;
                l = As;
                var s = Ns;
                if (((As = o), (Ns = u) && !s))
                    for (js = a; null !== js; )
                        ((u = (o = js).child),
                            22 === o.tag && null !== o.memoizedState
                                ? nc(a)
                                : null !== u
                                  ? ((u.return = o), (js = u))
                                  : nc(a));
                for (; null !== i; ) ((js = i), Js(i), (i = i.sibling));
                ((js = a), (As = l), (Ns = s));
            }
            ec(e);
        } else 0 != (8772 & a.subtreeFlags) && null !== i ? ((i.return = a), (js = i)) : ec(e);
    }
}
function ec(e) {
    for (; null !== js; ) {
        var t = js;
        if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
                if (0 != (8772 & t.flags))
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ns || Ds(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (4 & t.flags && !Ns)
                                if (null === n) r.componentDidMount();
                                else {
                                    var a = t.elementType === t.type ? n.memoizedProps : Iu(t.type, n.memoizedProps);
                                    r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var i = t.updateQueue;
                            null !== i && xl(t, i, r);
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
                                xl(t, o, n);
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
                                        null !== f && kr(f);
                                    }
                                }
                            }
                            break;
                        default:
                            throw Error(Ve(163));
                    }
                Ns || (512 & t.flags && Ms(t));
            } catch (d) {
                af(t, t.return, d);
            }
        }
        if (t === e) {
            js = null;
            break;
        }
        if (null !== (n = t.sibling)) {
            ((n.return = t.return), (js = n));
            break;
        }
        js = t.return;
    }
}
function tc(e) {
    for (; null !== js; ) {
        var t = js;
        if (t === e) {
            js = null;
            break;
        }
        var n = t.sibling;
        if (null !== n) {
            ((n.return = t.return), (js = n));
            break;
        }
        js = t.return;
    }
}
function nc(e) {
    for (; null !== js; ) {
        var t = js;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Ds(4, t);
                    } catch (u) {
                        af(t, n, u);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if ('function' == typeof r.componentDidMount) {
                        var a = t.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            af(t, a, u);
                        }
                    }
                    var i = t.return;
                    try {
                        Ms(t);
                    } catch (u) {
                        af(t, i, u);
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Ms(t);
                    } catch (u) {
                        af(t, o, u);
                    }
            }
        } catch (u) {
            af(t, t.return, u);
        }
        if (t === e) {
            js = null;
            break;
        }
        var l = t.sibling;
        if (null !== l) {
            ((l.return = t.return), (js = l));
            break;
        }
        js = t.return;
    }
}
var rc,
    ac = Math.ceil,
    ic = et.ReactCurrentDispatcher,
    oc = et.ReactCurrentOwner,
    lc = et.ReactCurrentBatchConfig,
    uc = 0,
    sc = null,
    cc = null,
    fc = 0,
    dc = 0,
    pc = ao(0),
    hc = 0,
    vc = null,
    mc = 0,
    gc = 0,
    yc = 0,
    bc = null,
    _c = null,
    wc = 0,
    Sc = 1 / 0,
    kc = null,
    xc = !1,
    Oc = null,
    Ec = null,
    Pc = !1,
    Cc = null,
    Ac = 0,
    Nc = 0,
    Tc = null,
    jc = -1,
    Rc = 0;
function Lc() {
    return 0 != (6 & uc) ? jn() : -1 !== jc ? jc : (jc = jn());
}
function zc(e) {
    return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & uc) && 0 !== fc
          ? fc & -fc
          : null !== Yo.transition
            ? (0 === Rc && (Rc = Yn()), Rc)
            : 0 !== (e = er)
              ? e
              : (e = void 0 === (e = window.event) ? 16 : Tr(e.type));
}
function Ic(e, t, n, r) {
    if (50 < Nc) throw ((Nc = 0), (Tc = null), Error(Ve(185)));
    (Zn(e, n, r),
        (0 != (2 & uc) && e === sc) ||
            (e === sc && (0 == (2 & uc) && (gc |= n), 4 === hc && Uc(e, fc)),
            Dc(e, r),
            1 === n && 0 === uc && 0 == (1 & t.mode) && ((Sc = jn() + 500), _o && ko())));
}
function Dc(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
            var o = 31 - Un(i),
                l = 1 << o,
                u = a[o];
            (-1 === u ? (0 != (l & n) && 0 == (l & r)) || (a[o] = Qn(l, t)) : u <= t && (e.expiredLanes |= l),
                (i &= ~l));
        }
    })(e, t);
    var r = qn(e, e === sc ? fc : 0);
    if (0 === r) (null !== n && An(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && An(n), 1 === t))
            (0 === e.tag
                ? (function (e) {
                      ((_o = !0), So(e));
                  })(Bc.bind(null, e))
                : So(Bc.bind(null, e)),
                Fi(function () {
                    0 == (6 & uc) && ko();
                }),
                (n = null));
        else {
            switch (tr(r)) {
                case 1:
                    n = Ln;
                    break;
                case 4:
                    n = zn;
                    break;
                case 16:
                default:
                    n = In;
                    break;
                case 536870912:
                    n = Mn;
            }
            n = cf(n, Mc.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = n));
    }
}
function Mc(e, t) {
    if (((jc = -1), (Rc = 0), 0 != (6 & uc))) throw Error(Ve(327));
    var n = e.callbackNode;
    if (nf() && e.callbackNode !== n) return null;
    var r = qn(e, e === sc ? fc : 0);
    if (0 === r) return null;
    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = Yc(e, r);
    else {
        t = r;
        var a = uc;
        uc |= 2;
        var i = Qc();
        for ((sc === e && fc === t) || ((kc = null), (Sc = jn() + 500), Kc(e, t)); ; )
            try {
                Zc();
                break;
            } catch (l) {
                qc(e, l);
            }
        (ll(), (ic.current = i), (uc = a), null !== cc ? (t = 0) : ((sc = null), (fc = 0), (t = hc)));
    }
    if (0 !== t) {
        if ((2 === t && 0 !== (a = Gn(e)) && ((r = a), (t = Vc(e, a))), 1 === t))
            throw ((n = vc), Kc(e, 0), Uc(e, r), Dc(e, jn()), n);
        if (6 === t) Uc(e, r);
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
                                            if (!Ua(i(), a)) return !1;
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
                    (2 === (t = Yc(e, r)) && 0 !== (i = Gn(e)) && ((r = i), (t = Vc(e, i))), 1 === t))
            )
                throw ((n = vc), Kc(e, 0), Uc(e, r), Dc(e, jn()), n);
            switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(Ve(345));
                case 2:
                case 5:
                    tf(e, _c, kc);
                    break;
                case 3:
                    if ((Uc(e, r), (130023424 & r) === r && 10 < (t = wc + 500 - jn()))) {
                        if (0 !== qn(e, 0)) break;
                        if (((a = e.suspendedLanes) & r) !== r) {
                            (Lc(), (e.pingedLanes |= e.suspendedLanes & a));
                            break;
                        }
                        e.timeoutHandle = Di(tf.bind(null, e, _c, kc), t);
                        break;
                    }
                    tf(e, _c, kc);
                    break;
                case 4:
                    if ((Uc(e, r), (4194240 & r) === r)) break;
                    for (t = e.eventTimes, a = -1; 0 < r; ) {
                        var o = 31 - Un(r);
                        ((i = 1 << o), (o = t[o]) > a && (a = o), (r &= ~i));
                    }
                    if (
                        ((r = a),
                        10 <
                            (r =
                                (120 > (r = jn() - r)
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
                                              : 1960 * ac(r / 1960)) - r))
                    ) {
                        e.timeoutHandle = Di(tf.bind(null, e, _c, kc), r);
                        break;
                    }
                    tf(e, _c, kc);
                    break;
                default:
                    throw Error(Ve(329));
            }
        }
    }
    return (Dc(e, jn()), e.callbackNode === n ? Mc.bind(null, e) : null);
}
function Vc(e, t) {
    var n = bc;
    return (
        e.current.memoizedState.isDehydrated && (Kc(e, t).flags |= 256),
        2 !== (e = Yc(e, t)) && ((t = _c), (_c = n), null !== t && Fc(t)),
        e
    );
}
function Fc(e) {
    null === _c ? (_c = e) : _c.push.apply(_c, e);
}
function Uc(e, t) {
    for (t &= ~yc, t &= ~gc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Un(t),
            r = 1 << n;
        ((e[n] = -1), (t &= ~r));
    }
}
function Bc(e) {
    if (0 != (6 & uc)) throw Error(Ve(327));
    nf();
    var t = qn(e, 0);
    if (0 == (1 & t)) return (Dc(e, jn()), null);
    var n = Yc(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = Gn(e);
        0 !== r && ((t = r), (n = Vc(e, r)));
    }
    if (1 === n) throw ((n = vc), Kc(e, 0), Uc(e, t), Dc(e, jn()), n);
    if (6 === n) throw Error(Ve(345));
    return ((e.finishedWork = e.current.alternate), (e.finishedLanes = t), tf(e, _c, kc), Dc(e, jn()), null);
}
function $c(e, t) {
    var n = uc;
    uc |= 1;
    try {
        return e(t);
    } finally {
        0 === (uc = n) && ((Sc = jn() + 500), _o && ko());
    }
}
function Wc(e) {
    null !== Cc && 0 === Cc.tag && 0 == (6 & uc) && nf();
    var t = uc;
    uc |= 1;
    var n = lc.transition,
        r = er;
    try {
        if (((lc.transition = null), (er = 1), e)) return e();
    } finally {
        ((er = r), (lc.transition = n), 0 == (6 & (uc = t)) && ko());
    }
}
function Hc() {
    ((dc = pc.current), io(pc));
}
function Kc(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), Mi(n)), null !== cc))
        for (n = cc.return; null !== n; ) {
            var r = n;
            switch ((Io(r), r.tag)) {
                case 1:
                    null != (r = r.type.childContextTypes) && ho();
                    break;
                case 3:
                    (Tl(), io(so), io(uo), Dl());
                    break;
                case 5:
                    Rl(r);
                    break;
                case 4:
                    Tl();
                    break;
                case 13:
                case 19:
                    io(Ll);
                    break;
                case 10:
                    ul(r.type._context);
                    break;
                case 22:
                case 23:
                    Hc();
            }
            n = n.return;
        }
    if (
        ((sc = e),
        (cc = e = hf(e.current, null)),
        (fc = dc = t),
        (hc = 0),
        (vc = null),
        (yc = gc = mc = 0),
        (_c = bc = null),
        null !== dl)
    ) {
        for (t = 0; t < dl.length; t++)
            if (null !== (r = (n = dl[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                    i = n.pending;
                if (null !== i) {
                    var o = i.next;
                    ((i.next = a), (r.next = o));
                }
                n.pending = r;
            }
        dl = null;
    }
    return e;
}
function qc(e, t) {
    for (;;) {
        var n = cc;
        try {
            if ((ll(), (Ml.current = ju), Wl)) {
                for (var r = Ul.memoizedState; null !== r; ) {
                    var a = r.queue;
                    (null !== a && (a.pending = null), (r = r.next));
                }
                Wl = !1;
            }
            if (
                ((Fl = 0),
                ($l = Bl = Ul = null),
                (Hl = !1),
                (Kl = 0),
                (oc.current = null),
                null === n || null === n.return)
            ) {
                ((hc = 1), (vc = t), (cc = null));
                break;
            }
            e: {
                var i = e,
                    o = n.return,
                    l = n,
                    u = t;
                if (((t = fc), (l.flags |= 32768), null !== u && 'object' == typeof u && 'function' == typeof u.then)) {
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
                    var p = Yu(o);
                    if (null !== p) {
                        ((p.flags &= -257), Xu(p, o, l, 0, t), 1 & p.mode && Gu(i, s, t), (u = s));
                        var h = (t = p).updateQueue;
                        if (null === h) {
                            var v = new Set();
                            (v.add(u), (t.updateQueue = v));
                        } else h.add(u);
                        break e;
                    }
                    if (0 == (1 & t)) {
                        (Gu(i, s, t), Gc());
                        break e;
                    }
                    u = Error(Ve(426));
                } else if (Vo && 1 & l.mode) {
                    var m = Yu(o);
                    if (null !== m) {
                        (0 == (65536 & m.flags) && (m.flags |= 256), Xu(m, o, l, 0, t), Go($u(u, l)));
                        break e;
                    }
                }
                ((i = u = $u(u, l)), 4 !== hc && (hc = 2), null === bc ? (bc = [i]) : bc.push(i), (i = o));
                do {
                    switch (i.tag) {
                        case 3:
                            ((i.flags |= 65536), (t &= -t), (i.lanes |= t), Sl(i, qu(0, u, t)));
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
                                        (null === Ec || !Ec.has(y))))
                            ) {
                                ((i.flags |= 65536), (t &= -t), (i.lanes |= t), Sl(i, Qu(i, l, t)));
                                break e;
                            }
                    }
                    i = i.return;
                } while (null !== i);
            }
            ef(n);
        } catch (b) {
            ((t = b), cc === n && null !== n && (cc = n = n.return));
            continue;
        }
        break;
    }
}
function Qc() {
    var e = ic.current;
    return ((ic.current = ju), null === e ? ju : e);
}
function Gc() {
    ((0 !== hc && 3 !== hc && 2 !== hc) || (hc = 4),
        null === sc || (0 == (268435455 & mc) && 0 == (268435455 & gc)) || Uc(sc, fc));
}
function Yc(e, t) {
    var n = uc;
    uc |= 2;
    var r = Qc();
    for ((sc === e && fc === t) || ((kc = null), Kc(e, t)); ; )
        try {
            Xc();
            break;
        } catch (a) {
            qc(e, a);
        }
    if ((ll(), (uc = n), (ic.current = r), null !== cc)) throw Error(Ve(261));
    return ((sc = null), (fc = 0), hc);
}
function Xc() {
    for (; null !== cc; ) Jc(cc);
}
function Zc() {
    for (; null !== cc && !Nn(); ) Jc(cc);
}
function Jc(e) {
    var t = rc(e.alternate, e, dc);
    ((e.memoizedProps = e.pendingProps), null === t ? ef(e) : (cc = t), (oc.current = null));
}
function ef(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), 0 == (32768 & t.flags))) {
            if (null !== (n = Ps(n, t, dc))) return void (cc = n);
        } else {
            if (null !== (n = Cs(n, t))) return ((n.flags &= 32767), void (cc = n));
            if (null === e) return ((hc = 6), void (cc = null));
            ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        }
        if (null !== (t = t.sibling)) return void (cc = t);
        cc = t = e;
    } while (null !== t);
    0 === hc && (hc = 5);
}
function tf(e, t, n) {
    var r = er,
        a = lc.transition;
    try {
        ((lc.transition = null),
            (er = 1),
            (function (e, t, n, r) {
                do {
                    nf();
                } while (null !== Cc);
                if (0 != (6 & uc)) throw Error(Ve(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(Ve(177));
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
                            var a = 31 - Un(n),
                                i = 1 << a;
                            ((t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i));
                        }
                    })(e, i),
                    e === sc && ((cc = sc = null), (fc = 0)),
                    (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                        Pc ||
                        ((Pc = !0),
                        cf(In, function () {
                            return (nf(), null);
                        })),
                    (i = 0 != (15990 & n.flags)),
                    0 != (15990 & n.subtreeFlags) || i)
                ) {
                    ((i = lc.transition), (lc.transition = null));
                    var o = er;
                    er = 1;
                    var l = uc;
                    ((uc |= 4),
                        (oc.current = null),
                        (function (e, t) {
                            if (((Li = Or), qa((e = Ka())))) {
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
                            for (zi = { focusedElem: e, selectionRange: n }, Or = !1, js = t; null !== js; )
                                if (((e = (t = js).child), 0 != (1028 & t.subtreeFlags) && null !== e))
                                    ((e.return = t), (js = e));
                                else
                                    for (; null !== js; ) {
                                        t = js;
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
                                                                    t.elementType === t.type ? v : Iu(t.type, v),
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
                                                        throw Error(Ve(163));
                                                }
                                        } catch (_) {
                                            af(t, t.return, _);
                                        }
                                        if (null !== (e = t.sibling)) {
                                            ((e.return = t.return), (js = e));
                                            break;
                                        }
                                        js = t.return;
                                    }
                            ((h = zs), (zs = !1));
                        })(e, n),
                        Ys(n, e),
                        Qa(zi),
                        (Or = !!Li),
                        (zi = Li = null),
                        (e.current = n),
                        Zs(n),
                        Tn(),
                        (uc = l),
                        (er = o),
                        (lc.transition = i));
                } else e.current = n;
                if (
                    (Pc && ((Pc = !1), (Cc = e), (Ac = a)),
                    (i = e.pendingLanes),
                    0 === i && (Ec = null),
                    (function (e) {
                        if (Fn && 'function' == typeof Fn.onCommitFiberRoot)
                            try {
                                Fn.onCommitFiberRoot(Vn, e, void 0, 128 == (128 & e.current.flags));
                            } catch (t) {}
                    })(n.stateNode),
                    Dc(e, jn()),
                    null !== t)
                )
                    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                        ((a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest }));
                if (xc) throw ((xc = !1), (e = Oc), (Oc = null), e);
                (0 != (1 & Ac) && 0 !== e.tag && nf(),
                    (i = e.pendingLanes),
                    0 != (1 & i) ? (e === Tc ? Nc++ : ((Nc = 0), (Tc = e))) : (Nc = 0),
                    ko());
            })(e, t, n, r));
    } finally {
        ((lc.transition = a), (er = r));
    }
    return null;
}
function nf() {
    if (null !== Cc) {
        var e = tr(Ac),
            t = lc.transition,
            n = er;
        try {
            if (((lc.transition = null), (er = 16 > e ? 16 : e), null === Cc)) var r = !1;
            else {
                if (((e = Cc), (Cc = null), (Ac = 0), 0 != (6 & uc))) throw Error(Ve(331));
                var a = uc;
                for (uc |= 4, js = e.current; null !== js; ) {
                    var i = js,
                        o = i.child;
                    if (0 != (16 & js.flags)) {
                        var l = i.deletions;
                        if (null !== l) {
                            for (var u = 0; u < l.length; u++) {
                                var s = l[u];
                                for (js = s; null !== js; ) {
                                    var c = js;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Is(8, c, i);
                                    }
                                    var f = c.child;
                                    if (null !== f) ((f.return = c), (js = f));
                                    else
                                        for (; null !== js; ) {
                                            var d = (c = js).sibling,
                                                p = c.return;
                                            if ((Vs(c), c === s)) {
                                                js = null;
                                                break;
                                            }
                                            if (null !== d) {
                                                ((d.return = p), (js = d));
                                                break;
                                            }
                                            js = p;
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
                            js = i;
                        }
                    }
                    if (0 != (2064 & i.subtreeFlags) && null !== o) ((o.return = i), (js = o));
                    else
                        e: for (; null !== js; ) {
                            if (0 != (2048 & (i = js).flags))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Is(9, i, i.return);
                                }
                            var g = i.sibling;
                            if (null !== g) {
                                ((g.return = i.return), (js = g));
                                break e;
                            }
                            js = i.return;
                        }
                }
                var y = e.current;
                for (js = y; null !== js; ) {
                    var b = (o = js).child;
                    if (0 != (2064 & o.subtreeFlags) && null !== b) ((b.return = o), (js = b));
                    else
                        e: for (o = y; null !== js; ) {
                            if (0 != (2048 & (l = js).flags))
                                try {
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ds(9, l);
                                    }
                                } catch (w) {
                                    af(l, l.return, w);
                                }
                            if (l === o) {
                                js = null;
                                break e;
                            }
                            var _ = l.sibling;
                            if (null !== _) {
                                ((_.return = l.return), (js = _));
                                break e;
                            }
                            js = l.return;
                        }
                }
                if (((uc = a), ko(), Fn && 'function' == typeof Fn.onPostCommitFiberRoot))
                    try {
                        Fn.onPostCommitFiberRoot(Vn, e);
                    } catch (w) {}
                r = !0;
            }
            return r;
        } finally {
            ((er = n), (lc.transition = t));
        }
    }
    return !1;
}
function rf(e, t, n) {
    ((e = _l(e, (t = qu(0, (t = $u(n, t)), 1)), 1)), (t = Lc()), null !== e && (Zn(e, 1, t), Dc(e, t)));
}
function af(e, t, n) {
    if (3 === e.tag) rf(e, e, n);
    else
        for (; null !== t; ) {
            if (3 === t.tag) {
                rf(t, e, n);
                break;
            }
            if (1 === t.tag) {
                var r = t.stateNode;
                if (
                    'function' == typeof t.type.getDerivedStateFromError ||
                    ('function' == typeof r.componentDidCatch && (null === Ec || !Ec.has(r)))
                ) {
                    ((t = _l(t, (e = Qu(t, (e = $u(n, e)), 1)), 1)), (e = Lc()), null !== t && (Zn(t, 1, e), Dc(t, e)));
                    break;
                }
            }
            t = t.return;
        }
}
function of(e, t, n) {
    var r = e.pingCache;
    (null !== r && r.delete(t),
        (t = Lc()),
        (e.pingedLanes |= e.suspendedLanes & n),
        sc === e &&
            (fc & n) === n &&
            (4 === hc || (3 === hc && (130023424 & fc) === fc && 500 > jn() - wc) ? Kc(e, 0) : (yc |= n)),
        Dc(e, t));
}
function lf(e, t) {
    0 === t && (0 == (1 & e.mode) ? (t = 1) : ((t = Hn), 0 == (130023424 & (Hn <<= 1)) && (Hn = 4194304)));
    var n = Lc();
    null !== (e = vl(e, t)) && (Zn(e, t, n), Dc(e, n));
}
function uf(e) {
    var t = e.memoizedState,
        n = 0;
    (null !== t && (n = t.retryLane), lf(e, n));
}
function sf(e, t) {
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
            throw Error(Ve(314));
    }
    (null !== r && r.delete(t), lf(e, n));
}
function cf(e, t) {
    return Cn(e, t);
}
function ff(e, t, n, r) {
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
function df(e, t, n, r) {
    return new ff(e, t, n, r);
}
function pf(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
}
function hf(e, t) {
    var n = e.alternate;
    return (
        null === n
            ? (((n = df(e.tag, t, e.key, e.mode)).elementType = e.elementType),
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
function vf(e, t, n, r, a, i) {
    var o = 2;
    if (((r = e), 'function' == typeof e)) pf(e) && (o = 1);
    else if ('string' == typeof e) o = 5;
    else
        e: switch (e) {
            case rt:
                return mf(n.children, a, i, t);
            case at:
                ((o = 8), (a |= 8));
                break;
            case it:
                return (((e = df(12, n, t, 2 | a)).elementType = it), (e.lanes = i), e);
            case st:
                return (((e = df(13, n, t, a)).elementType = st), (e.lanes = i), e);
            case ct:
                return (((e = df(19, n, t, a)).elementType = ct), (e.lanes = i), e);
            case pt:
                return gf(n, a, i, t);
            default:
                if ('object' == typeof e && null !== e)
                    switch (e.$$typeof) {
                        case ot:
                            o = 10;
                            break e;
                        case lt:
                            o = 9;
                            break e;
                        case ut:
                            o = 11;
                            break e;
                        case ft:
                            o = 14;
                            break e;
                        case dt:
                            ((o = 16), (r = null));
                            break e;
                    }
                throw Error(Ve(130, null == e ? e : typeof e, ''));
        }
    return (((t = df(o, n, t, a)).elementType = e), (t.type = r), (t.lanes = i), t);
}
function mf(e, t, n, r) {
    return (((e = df(7, e, r, t)).lanes = n), e);
}
function gf(e, t, n, r) {
    return (((e = df(22, e, r, t)).elementType = pt), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e);
}
function yf(e, t, n) {
    return (((e = df(6, e, null, t)).lanes = n), e);
}
function bf(e, t, n) {
    return (
        ((t = df(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
function _f(e, t, n, r, a) {
    ((this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Xn(0)),
        (this.expirationTimes = Xn(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Xn(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = a),
        (this.mutableSourceEagerHydrationData = null));
}
function wf(e, t, n, r, a, i, o, l, u) {
    return (
        (e = new _f(e, t, n, l, u)),
        1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
        (i = df(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        gl(i),
        e
    );
}
function Sf(e) {
    if (!e) return lo;
    e: {
        if (kn((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(Ve(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (po(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (null !== t);
        throw Error(Ve(171));
    }
    if (1 === e.tag) {
        var n = e.type;
        if (po(n)) return mo(e, n, t);
    }
    return t;
}
function kf(e, t, n, r, a, i, o, l, u) {
    return (
        ((e = wf(n, r, !0, e, 0, i, 0, l, u)).context = Sf(null)),
        (n = e.current),
        ((i = bl((r = Lc()), (a = zc(n)))).callback = null != t ? t : null),
        _l(n, i, a),
        (e.current.lanes = a),
        Zn(e, a, r),
        Dc(e, r),
        e
    );
}
function xf(e, t, n, r) {
    var a = t.current,
        i = Lc(),
        o = zc(a);
    return (
        (n = Sf(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = bl(i, o)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = _l(a, t, o)) && (Ic(e, a, o, i), wl(e, a, o)),
        o
    );
}
function Of(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
}
function Ef(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
    }
}
function Pf(e, t) {
    (Ef(e, t), (e = e.alternate) && Ef(e, t));
}
rc = function (e, t, n) {
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps || so.current) Ju = !0;
        else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                    (Ju = !1),
                    (function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                (ss(t), Qo());
                                break;
                            case 5:
                                jl(t);
                                break;
                            case 1:
                                po(t.type) && go(t);
                                break;
                            case 4:
                                Nl(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context,
                                    a = t.memoizedProps.value;
                                (oo(rl, r._currentValue), (r._currentValue = a));
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState))
                                    return null !== r.dehydrated
                                        ? (oo(Ll, 1 & Ll.current), (t.flags |= 128), null)
                                        : 0 != (n & t.child.childLanes)
                                          ? gs(e, t, n)
                                          : (oo(Ll, 1 & Ll.current), null !== (e = xs(e, t, n)) ? e.sibling : null);
                                oo(Ll, 1 & Ll.current);
                                break;
                            case 19:
                                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                    if (r) return Ss(e, t, n);
                                    t.flags |= 128;
                                }
                                if (
                                    (null !== (a = t.memoizedState) &&
                                        ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                                    oo(Ll, Ll.current),
                                    r)
                                )
                                    break;
                                return null;
                            case 22:
                            case 23:
                                return ((t.lanes = 0), as(e, t, n));
                        }
                        return xs(e, t, n);
                    })(e, t, n)
                );
            Ju = 0 != (131072 & e.flags);
        }
    else ((Ju = !1), Vo && 0 != (1048576 & t.flags) && Lo(t, Po, t.index));
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            (ks(e, t), (e = t.pendingProps));
            var a = fo(t, uo.current);
            (cl(t, n), (a = Yl(null, t, r, e, a, n)));
            var i = Xl();
            return (
                (t.flags |= 1),
                'object' == typeof a && null !== a && 'function' == typeof a.render && void 0 === a.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      po(r) ? ((i = !0), go(t)) : (i = !1),
                      (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
                      gl(t),
                      (a.updater = Mu),
                      (t.stateNode = a),
                      (a._reactInternals = t),
                      Bu(t, r, e, n),
                      (t = us(null, t, r, !0, i, n)))
                    : ((t.tag = 0), Vo && i && zo(t), es(null, t, a, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (ks(e, t),
                    (e = t.pendingProps),
                    (r = (a = r._init)(r._payload)),
                    (t.type = r),
                    (a = t.tag =
                        (function (e) {
                            if ('function' == typeof e) return pf(e) ? 1 : 0;
                            if (null != e) {
                                if ((e = e.$$typeof) === ut) return 11;
                                if (e === ft) return 14;
                            }
                            return 2;
                        })(r)),
                    (e = Iu(r, e)),
                    a)
                ) {
                    case 0:
                        t = os(null, t, r, e, n);
                        break e;
                    case 1:
                        t = ls(null, t, r, e, n);
                        break e;
                    case 11:
                        t = ts(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ns(null, t, r, Iu(r.type, e), n);
                        break e;
                }
                throw Error(Ve(306, r, ''));
            }
            return t;
        case 0:
            return ((r = t.type), (a = t.pendingProps), os(e, t, r, (a = t.elementType === r ? a : Iu(r, a)), n));
        case 1:
            return ((r = t.type), (a = t.pendingProps), ls(e, t, r, (a = t.elementType === r ? a : Iu(r, a)), n));
        case 3:
            e: {
                if ((ss(t), null === e)) throw Error(Ve(387));
                ((r = t.pendingProps), (a = (i = t.memoizedState).element), yl(e, t), kl(t, r, null, n));
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
                        t = cs(e, t, r, n, (a = $u(Error(Ve(423)), t)));
                        break e;
                    }
                    if (r !== a) {
                        t = cs(e, t, r, n, (a = $u(Error(Ve(424)), t)));
                        break e;
                    }
                    for (
                        Mo = $i(t.stateNode.containerInfo.firstChild),
                            Do = t,
                            Vo = !0,
                            Fo = null,
                            n = nl(t, null, r, n),
                            t.child = n;
                        n;

                    )
                        ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                    if ((Qo(), r === a)) {
                        t = xs(e, t, n);
                        break e;
                    }
                    es(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                jl(t),
                null === e && Wo(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (o = a.children),
                Ii(r, a) ? (o = null) : null !== i && Ii(r, i) && (t.flags |= 32),
                is(e, t),
                es(e, t, o, n),
                t.child
            );
        case 6:
            return (null === e && Wo(t), null);
        case 13:
            return gs(e, t, n);
        case 4:
            return (
                Nl(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = tl(t, null, r, n)) : es(e, t, r, n),
                t.child
            );
        case 11:
            return ((r = t.type), (a = t.pendingProps), ts(e, t, r, (a = t.elementType === r ? a : Iu(r, a)), n));
        case 7:
            return (es(e, t, t.pendingProps, n), t.child);
        case 8:
        case 12:
            return (es(e, t, t.pendingProps.children, n), t.child);
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (a = t.pendingProps),
                    (i = t.memoizedProps),
                    (o = a.value),
                    oo(rl, r._currentValue),
                    (r._currentValue = o),
                    null !== i)
                )
                    if (Ua(i.value, o)) {
                        if (i.children === a.children && !so.current) {
                            t = xs(e, t, n);
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
                                            (u = bl(-1, n & -n)).tag = 2;
                                            var s = i.updateQueue;
                                            if (null !== s) {
                                                var c = (s = s.shared).pending;
                                                (null === c ? (u.next = u) : ((u.next = c.next), (c.next = u)),
                                                    (s.pending = u));
                                            }
                                        }
                                        ((i.lanes |= n),
                                            null !== (u = i.alternate) && (u.lanes |= n),
                                            sl(i.return, n, t),
                                            (l.lanes |= n));
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (10 === i.tag) o = i.type === t.type ? null : i.child;
                            else if (18 === i.tag) {
                                if (null === (o = i.return)) throw Error(Ve(341));
                                ((o.lanes |= n),
                                    null !== (l = o.alternate) && (l.lanes |= n),
                                    sl(o, n, t),
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
                (es(e, t, a.children, n), (t = t.child));
            }
            return t;
        case 9:
            return (
                (a = t.type),
                (r = t.pendingProps.children),
                cl(t, n),
                (r = r((a = fl(a)))),
                (t.flags |= 1),
                es(e, t, r, n),
                t.child
            );
        case 14:
            return ((a = Iu((r = t.type), t.pendingProps)), ns(e, t, r, (a = Iu(r.type, a)), n));
        case 15:
            return rs(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : Iu(r, a)),
                ks(e, t),
                (t.tag = 1),
                po(r) ? ((e = !0), go(t)) : (e = !1),
                cl(t, n),
                Fu(t, r, a),
                Bu(t, r, a, n),
                us(null, t, r, !0, e, n)
            );
        case 19:
            return Ss(e, t, n);
        case 22:
            return as(e, t, n);
    }
    throw Error(Ve(156, t.tag));
};
var Cf =
    'function' == typeof reportError
        ? reportError
        : function (e) {
              console.error(e);
          };
function Af(e) {
    this._internalRoot = e;
}
function Nf(e) {
    this._internalRoot = e;
}
function Tf(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function jf(e) {
    return !(
        !e ||
        (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
    );
}
function Rf() {}
function Lf(e, t, n, r, a) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if ('function' == typeof a) {
            var l = a;
            a = function () {
                var e = Of(o);
                l.call(e);
            };
        }
        xf(t, o, e, a);
    } else
        o = (function (e, t, n, r, a) {
            if (a) {
                if ('function' == typeof r) {
                    var i = r;
                    r = function () {
                        var e = Of(o);
                        i.call(e);
                    };
                }
                var o = kf(t, r, e, 0, null, !1, 0, '', Rf);
                return (
                    (e._reactRootContainer = o),
                    (e[Qi] = o.current),
                    Si(8 === e.nodeType ? e.parentNode : e),
                    Wc(),
                    o
                );
            }
            for (; (a = e.lastChild); ) e.removeChild(a);
            if ('function' == typeof r) {
                var l = r;
                r = function () {
                    var e = Of(u);
                    l.call(e);
                };
            }
            var u = wf(e, 0, !1, null, 0, !1, 0, '', Rf);
            return (
                (e._reactRootContainer = u),
                (e[Qi] = u.current),
                Si(8 === e.nodeType ? e.parentNode : e),
                Wc(function () {
                    xf(t, u, n, r);
                }),
                u
            );
        })(n, t, e, a, r);
    return Of(o);
}
((Nf.prototype.render = Af.prototype.render =
    function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(Ve(409));
        xf(e, t, null, null);
    }),
    (Nf.prototype.unmount = Af.prototype.unmount =
        function () {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                (Wc(function () {
                    xf(null, e, null, null);
                }),
                    (t[Qi] = null));
            }
        }),
    (Nf.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = ir();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < hr.length && 0 !== t && t < hr[n].priority; n++);
            (hr.splice(n, 0, e), 0 === n && yr(e));
        }
    }),
    (nr = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Kn(t.pendingLanes);
                    0 !== n && (Jn(t, 1 | n), Dc(t, jn()), 0 == (6 & uc) && ((Sc = jn() + 500), ko()));
                }
                break;
            case 13:
                (Wc(function () {
                    var t = vl(e, 1);
                    if (null !== t) {
                        var n = Lc();
                        Ic(t, e, 1, n);
                    }
                }),
                    Pf(e, 1));
        }
    }),
    (rr = function (e) {
        if (13 === e.tag) {
            var t = vl(e, 134217728);
            if (null !== t) Ic(t, e, 134217728, Lc());
            Pf(e, 134217728);
        }
    }),
    (ar = function (e) {
        if (13 === e.tag) {
            var t = zc(e),
                n = vl(e, t);
            if (null !== n) Ic(n, e, t, Lc());
            Pf(e, t);
        }
    }),
    (ir = function () {
        return er;
    }),
    (or = function (e, t) {
        var n = er;
        try {
            return ((er = e), t());
        } finally {
            er = n;
        }
    }),
    (nn = function (e, t, n) {
        switch (t) {
            case 'input':
                if ((jt(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                    for (n = e; n.parentNode; ) n = n.parentNode;
                    for (
                        n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var a = to(r);
                            if (!a) throw Error(Ve(90));
                            (Pt(r), jt(r, a));
                        }
                    }
                }
                break;
            case 'textarea':
                Vt(e, n);
                break;
            case 'select':
                null != (t = n.value) && It(e, !!n.multiple, t, !1);
        }
    }),
    (sn = $c),
    (cn = Wc));
var zf = { usingClientEntryPoint: !1, Events: [Ji, eo, to, ln, un, $c] },
    If = { findFiberByHostInstance: Zi, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    Df = {
        bundleType: If.bundleType,
        version: If.version,
        rendererPackageName: If.rendererPackageName,
        rendererConfig: If.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: et.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return null === (e = En(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
            If.findFiberByHostInstance ||
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
    var Mf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mf.isDisabled && Mf.supportsFiber)
        try {
            ((Vn = Mf.inject(Df)), (Fn = Mf));
        } catch (Wt) {}
}
((Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zf),
    (Re.createPortal = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Tf(t)) throw Error(Ve(200));
        return (function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: nt, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
        })(e, t, null, n);
    }),
    (Re.createRoot = function (e, t) {
        if (!Tf(e)) throw Error(Ve(299));
        var n = !1,
            r = '',
            a = Cf;
        return (
            null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
            (t = wf(e, 1, !1, null, 0, n, 0, r, a)),
            (e[Qi] = t.current),
            Si(8 === e.nodeType ? e.parentNode : e),
            new Af(t)
        );
    }),
    (Re.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
            if ('function' == typeof e.render) throw Error(Ve(188));
            throw ((e = Object.keys(e).join(',')), Error(Ve(268, e)));
        }
        return (e = null === (e = En(t)) ? null : e.stateNode);
    }),
    (Re.flushSync = function (e) {
        return Wc(e);
    }),
    (Re.hydrate = function (e, t, n) {
        if (!jf(t)) throw Error(Ve(200));
        return Lf(null, e, t, !0, n);
    }),
    (Re.hydrateRoot = function (e, t, n) {
        if (!Tf(e)) throw Error(Ve(405));
        var r = (null != n && n.hydratedSources) || null,
            a = !1,
            i = '',
            o = Cf;
        if (
            (null != n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
            (t = kf(t, null, e, 1, null != n ? n : null, a, 0, i, o)),
            (e[Qi] = t.current),
            Si(e),
            r)
        )
            for (e = 0; e < r.length; e++)
                ((a = (a = (n = r[e])._getVersion)(n._source)),
                    null == t.mutableSourceEagerHydrationData
                        ? (t.mutableSourceEagerHydrationData = [n, a])
                        : t.mutableSourceEagerHydrationData.push(n, a));
        return new Nf(t);
    }),
    (Re.render = function (e, t, n) {
        if (!jf(t)) throw Error(Ve(200));
        return Lf(null, e, t, !1, n);
    }),
    (Re.unmountComponentAtNode = function (e) {
        if (!jf(e)) throw Error(Ve(40));
        return (
            !!e._reactRootContainer &&
            (Wc(function () {
                Lf(null, null, e, !1, function () {
                    ((e._reactRootContainer = null), (e[Qi] = null));
                });
            }),
            !0)
        );
    }),
    (Re.unstable_batchedUpdates = $c),
    (Re.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!jf(n)) throw Error(Ve(200));
        if (null == e || void 0 === e._reactInternals) throw Error(Ve(38));
        return Lf(e, t, n, !1, r);
    }),
    (Re.version = '18.3.1-next-f1338f8080-20240426'),
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
    (je.exports = Re));
var Vf = je.exports,
    Ff = Vf;
((Te.createRoot = Ff.createRoot), (Te.hydrateRoot = Ff.hydrateRoot));
var Uf,
    Bf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ((Uf = Bf),
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
        Uf.exports ? ((t.default = t), (Uf.exports = t)) : (window.classNames = t);
    })());
const $f = e(Bf.exports);
function Wf(e) {
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
var Hf = {};
function Kf() {
    return 'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : Hf;
}
var qf = Object.assign,
    Qf = Object.getOwnPropertyDescriptor,
    Gf = Object.defineProperty,
    Yf = Object.prototype,
    Xf = [];
Object.freeze(Xf);
var Zf = {};
Object.freeze(Zf);
var Jf = 'undefined' != typeof Proxy,
    ed = Object.toString();
function td() {
    Jf || Wf('Proxy not available');
}
function nd(e) {
    var t = !1;
    return function () {
        if (!t) return ((t = !0), e.apply(this, arguments));
    };
}
var rd = function () {};
function ad(e) {
    return 'function' == typeof e;
}
function id(e) {
    switch (typeof e) {
        case 'string':
        case 'symbol':
        case 'number':
            return !0;
    }
    return !1;
}
function od(e) {
    return null !== e && 'object' == typeof e;
}
function ld(e) {
    if (!od(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (null == t) return !0;
    var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n.toString() === ed;
}
function ud(e) {
    var t = null == e ? void 0 : e.constructor;
    return !!t && ('GeneratorFunction' === t.name || 'GeneratorFunction' === t.displayName);
}
function sd(e, t, n) {
    Gf(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function cd(e, t, n) {
    Gf(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function fd(e, t) {
    var n = 'isMobX' + e;
    return (
        (t.prototype[n] = !0),
        function (e) {
            return od(e) && !0 === e[n];
        }
    );
}
function dd(e) {
    return e instanceof Map;
}
function pd(e) {
    return e instanceof Set;
}
var hd = void 0 !== Object.getOwnPropertySymbols;
var vd =
    'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : hd
          ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            }
          : Object.getOwnPropertyNames;
function md(e) {
    return null === e ? null : 'object' == typeof e ? '' + e : e;
}
function gd(e, t) {
    return Yf.hasOwnProperty.call(e, t);
}
var yd =
    Object.getOwnPropertyDescriptors ||
    function (e) {
        var t = {};
        return (
            vd(e).forEach(function (n) {
                t[n] = Qf(e, n);
            }),
            t
        );
    };
function bd(e, t) {
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
function _d(e, t, n) {
    return (t && bd(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function wd() {
    return (
        (wd = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        wd.apply(this, arguments)
    );
}
function Sd(e, t) {
    ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), kd(e, t));
}
function kd(e, t) {
    return (kd = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return ((e.__proto__ = t), e);
          })(e, t);
}
function xd(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function Od(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function Ed(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
        Array.isArray(e) ||
        (n = (function (e, t) {
            if (e) {
                if ('string' == typeof e) return Od(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? Od(e, t)
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
var Pd = Symbol('mobx-stored-annotations');
function Cd(e) {
    return Object.assign(function (t, n) {
        if (Nd(n)) return e.decorate_20223_(t, n);
        Ad(t, n, e);
    }, e);
}
function Ad(e, t, n) {
    (gd(e, Pd) || sd(e, Pd, wd({}, e[Pd])),
        (function (e) {
            return e.annotationType_ === Md;
        })(n) || (e[Pd][t] = n));
}
function Nd(e) {
    return 'object' == typeof e && 'string' == typeof e.kind;
}
var Td = Symbol('mobx administration'),
    jd = (function () {
        function e(e) {
            (void 0 === e && (e = 'Atom'),
                (this.name_ = void 0),
                (this.isPendingUnobservation_ = !1),
                (this.isBeingObserved_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Dp.NOT_TRACKING_),
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
                return sh(this);
            }),
            (t.reportChanged = function () {
                (lh(), ch(this), uh());
            }),
            (t.toString = function () {
                return this.name_;
            }),
            e
        );
    })(),
    Rd = fd('Atom', jd);
function Ld(e, t, n) {
    (void 0 === t && (t = rd), void 0 === n && (n = rd));
    var r,
        a = new jd(e);
    return (t !== rd && Lh(Th, a, t, r), n !== rd && Rh(a, n), a);
}
var zd = {
    structural: function (e, t) {
        return nm(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
};
function Id(e, t, n) {
    return Yh(e)
        ? e
        : Array.isArray(e)
          ? wp.array(e, { name: n })
          : ld(e)
            ? wp.object(e, void 0, { name: n })
            : dd(e)
              ? wp.map(e, { name: n })
              : pd(e)
                ? wp.set(e, { name: n })
                : 'function' != typeof e || Ph(e) || qh(e)
                  ? e
                  : ud(e)
                    ? Hh(e)
                    : Eh(n, e);
}
function Dd(e) {
    return e;
}
var Md = 'override';
function Vd(e, t) {
    return { annotationType_: e, options_: t, make_: Fd, extend_: Ud, decorate_20223_: Bd };
}
function Fd(e, t, n, r) {
    var a;
    if (null != (a = this.options_) && a.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (Ph(n.value)) return 1;
    var i = $d(e, this, t, n, !1);
    return (Gf(r, t, i), 2);
}
function Ud(e, t, n, r) {
    var a = $d(e, this, t, n);
    return e.defineProperty_(t, a, r);
}
function Bd(e, t) {
    var n = t.kind,
        r = t.name,
        a = t.addInitializer,
        i = this;
    if ('field' != n) {
        var o, l, u, s, c, f;
        if ('method' == n)
            return (
                Ph(e) ||
                    ((l = e),
                    (e = Tp(
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
        Wf(
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
            Ad(this, r, i);
        });
}
function $d(e, t, n, r, a) {
    var i, o, l, u, s, c, f, d;
    (void 0 === a && (a = rh.safeDescriptors), (d = r), t.annotationType_, d.value);
    var p,
        h = r.value;
    null != (i = t.options_) && i.bound && (h = h.bind(null != (p = e.proxy_) ? p : e.target_));
    return {
        value: Tp(
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
function Wd(e, t) {
    return { annotationType_: e, options_: t, make_: Hd, extend_: Kd, decorate_20223_: qd };
}
function Hd(e, t, n, r) {
    var a;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (
        null != (a = this.options_) &&
        a.bound &&
        (!gd(e.target_, t) || !qh(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
    )
        return 0;
    if (qh(n.value)) return 1;
    var i = Qd(e, this, t, n, !1, !1);
    return (Gf(r, t, i), 2);
}
function Kd(e, t, n, r) {
    var a,
        i = Qd(e, this, t, n, null == (a = this.options_) ? void 0 : a.bound);
    return e.defineProperty_(t, i, r);
}
function qd(e, t) {
    var n,
        r = t.name,
        a = t.addInitializer;
    return (
        qh(e) || (e = Hh(e)),
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
function Qd(e, t, n, r, a, i) {
    var o;
    (void 0 === i && (i = rh.safeDescriptors), (o = r), t.annotationType_, o.value);
    var l,
        u = r.value;
    (qh(u) || (u = Hh(u)), a) && ((u = u.bind(null != (l = e.proxy_) ? l : e.target_)).isMobXFlow = !0);
    return { value: u, configurable: !i || e.isPlainObject_, enumerable: !1, writable: !i };
}
function Gd(e, t) {
    return { annotationType_: e, options_: t, make_: Yd, extend_: Xd, decorate_20223_: Zd };
}
function Yd(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function Xd(e, t, n, r) {
    var a;
    return (
        (a = n),
        this.annotationType_,
        a.get,
        e.defineComputedProperty_(t, wd({}, this.options_, { get: n.get, set: n.set }), r)
    );
}
function Zd(e, t) {
    var n = this,
        r = t.name;
    return (
        (0, t.addInitializer)(function () {
            var t = zv(this)[Td],
                a = wd({}, n.options_, { get: e, context: this });
            (a.name || (a.name = 'ObservableObject.' + r.toString()), t.values_.set(r, new Up(a)));
        }),
        function () {
            return this[Td].getObservablePropValue_(r);
        }
    );
}
function Jd(e, t) {
    return { annotationType_: e, options_: t, make_: ep, extend_: tp, decorate_20223_: np };
}
function ep(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function tp(e, t, n, r) {
    var a, i;
    return (
        this.annotationType_,
        e.defineObservableProperty_(
            t,
            n.value,
            null != (a = null == (i = this.options_) ? void 0 : i.enhancer) ? a : Id,
            r,
        )
    );
}
function np(e, t) {
    var n = this,
        r = t.kind,
        a = t.name,
        i = new WeakSet();
    function o(e, t) {
        var r,
            o,
            l = zv(e)[Td],
            u = new Ip(
                t,
                null != (r = null == (o = n.options_) ? void 0 : o.enhancer) ? r : Id,
                'ObservableObject.' + a.toString(),
                !1,
            );
        (l.values_.set(a, u), i.add(e));
    }
    if ('accessor' == r)
        return {
            get: function () {
                return (i.has(this) || o(this, e.get.call(this)), this[Td].getObservablePropValue_(a));
            },
            set: function (e) {
                return (i.has(this) || o(this, e), this[Td].setObservablePropValue_(a, e));
            },
            init: function (e) {
                return (i.has(this) || o(this, e), e);
            },
        };
}
var rp = 'true',
    ap = ip();
function ip(e) {
    return { annotationType_: rp, options_: e, make_: op, extend_: lp, decorate_20223_: up };
}
function op(e, t, n, r) {
    var a, i, o, l;
    if (n.get) return Op.make_(e, t, n, r);
    if (n.set) {
        var u = Tp(t.toString(), n.set);
        return r === e.target_
            ? null === e.defineProperty_(t, { configurable: !rh.safeDescriptors || e.isPlainObject_, set: u })
                ? 0
                : 2
            : (Gf(r, t, { configurable: !0, set: u }), 2);
    }
    if (r !== e.target_ && 'function' == typeof n.value)
        return ud(n.value)
            ? (null != (l = this.options_) && l.autoBind ? Hh.bound : Hh).make_(e, t, n, r)
            : (null != (o = this.options_) && o.autoBind ? Eh.bound : Eh).make_(e, t, n, r);
    var s,
        c = !1 === (null == (a = this.options_) ? void 0 : a.deep) ? wp.ref : wp;
    'function' == typeof n.value &&
        null != (i = this.options_) &&
        i.autoBind &&
        (n.value = n.value.bind(null != (s = e.proxy_) ? s : e.target_));
    return c.make_(e, t, n, r);
}
function lp(e, t, n, r) {
    var a, i, o;
    if (n.get) return Op.extend_(e, t, n, r);
    if (n.set)
        return e.defineProperty_(
            t,
            { configurable: !rh.safeDescriptors || e.isPlainObject_, set: Tp(t.toString(), n.set) },
            r,
        );
    'function' == typeof n.value &&
        null != (a = this.options_) &&
        a.autoBind &&
        (n.value = n.value.bind(null != (o = e.proxy_) ? o : e.target_));
    return (!1 === (null == (i = this.options_) ? void 0 : i.deep) ? wp.ref : wp).extend_(e, t, n, r);
}
function up(e, t) {
    Wf("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var sp = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
function cp(e) {
    return e || sp;
}
Object.freeze(sp);
var fp = Jd('observable'),
    dp = Jd('observable.ref', { enhancer: Dd }),
    pp = Jd('observable.shallow', {
        enhancer: function (e, t, n) {
            return null == e || Mv(e) || wv(e) || Cv(e) || Tv(e)
                ? e
                : Array.isArray(e)
                  ? wp.array(e, { name: n, deep: !1 })
                  : ld(e)
                    ? wp.object(e, void 0, { name: n, deep: !1 })
                    : dd(e)
                      ? wp.map(e, { name: n, deep: !1 })
                      : pd(e)
                        ? wp.set(e, { name: n, deep: !1 })
                        : void 0;
        },
    }),
    hp = Jd('observable.struct', {
        enhancer: function (e, t) {
            return nm(e, t) ? t : e;
        },
    }),
    vp = Cd(fp);
function mp(e) {
    return !0 === e.deep
        ? Id
        : !1 === e.deep
          ? Dd
          : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
            ? n
            : Id;
    var t, n, r;
}
function gp(e, t, n) {
    return Nd(t)
        ? fp.decorate_20223_(e, t)
        : id(t)
          ? void Ad(e, t, fp)
          : Yh(e)
            ? e
            : ld(e)
              ? wp.object(e, t, n)
              : Array.isArray(e)
                ? wp.array(e, t)
                : dd(e)
                  ? wp.map(e, t)
                  : pd(e)
                    ? wp.set(e, t)
                    : 'object' == typeof e && null !== e
                      ? e
                      : wp.box(e, t);
}
qf(gp, vp);
var yp,
    bp,
    _p = {
        box: function (e, t) {
            var n = cp(t);
            return new Ip(e, mp(n), n.name, !0, n.equals);
        },
        array: function (e, t) {
            var n = cp(t);
            return (!1 === rh.useProxies || !1 === n.proxy ? Yv : dv)(e, mp(n), n.name);
        },
        map: function (e, t) {
            var n = cp(t);
            return new Pv(e, mp(n), n.name);
        },
        set: function (e, t) {
            var n = cp(t);
            return new Nv(e, mp(n), n.name);
        },
        object: function (e, t, n) {
            return em(function () {
                return Vh(
                    !1 === rh.useProxies || !1 === (null == n ? void 0 : n.proxy)
                        ? zv({}, n)
                        : (function (e, t) {
                              var n, r;
                              return (
                                  td(),
                                  (e = zv(e, t)),
                                  null != (r = (n = e[Td]).proxy_) ? r : (n.proxy_ = new Proxy(e, ev))
                              );
                          })({}, n),
                    e,
                    t,
                );
            });
        },
        ref: Cd(dp),
        shallow: Cd(pp),
        deep: vp,
        struct: Cd(hp),
    },
    wp = qf(gp, _p),
    Sp = 'computed',
    kp = Gd(Sp),
    xp = Gd('computed.struct', { equals: zd.structural }),
    Op = function (e, t) {
        if (Nd(t)) return kp.decorate_20223_(e, t);
        if (id(t)) return Ad(e, t, kp);
        if (ld(e)) return Cd(Gd(Sp, e));
        var n = ld(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new Up(n));
    };
(Object.assign(Op, kp), (Op.struct = Cd(xp)));
var Ep,
    Pp = 0,
    Cp = 1,
    Ap = null != (yp = null == (bp = Qf(function () {}, 'name')) ? void 0 : bp.configurable) && yp,
    Np = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
function Tp(e, t, n, r) {
    function a() {
        return jp(e, n, t, r || this, arguments);
    }
    return (
        void 0 === n && (n = !1),
        (a.isMobxAction = !0),
        (a.toString = function () {
            return t.toString();
        }),
        Ap && ((Np.value = e), Gf(a, 'name', Np)),
        a
    );
}
function jp(e, t, n, r, a) {
    var i = (function (e, t, n, r) {
        var a = !1,
            i = 0,
            o = rh.trackingDerivation,
            l = !t || !o;
        lh();
        var u = rh.allowStateChanges;
        l && (Gp(), (u = Rp(!0)));
        var s = Xp(!0),
            c = {
                runAsAction_: l,
                prevDerivation_: o,
                prevAllowStateChanges_: u,
                prevAllowStateReads_: s,
                notifySpy_: a,
                startTime_: i,
                actionId_: Cp++,
                parentActionId_: Pp,
            };
        return ((Pp = c.actionId_), c);
    })(0, t);
    try {
        return n.apply(r, a);
    } catch (o) {
        throw ((i.error_ = o), o);
    } finally {
        !(function (e) {
            Pp !== e.actionId_ && Wf(30);
            ((Pp = e.parentActionId_), void 0 !== e.error_ && (rh.suppressReactionErrors = !0));
            (Lp(e.prevAllowStateChanges_), Zp(e.prevAllowStateReads_), uh(), e.runAsAction_ && Yp(e.prevDerivation_));
            rh.suppressReactionErrors = !1;
        })(i);
    }
}
function Rp(e) {
    var t = rh.allowStateChanges;
    return ((rh.allowStateChanges = e), t);
}
function Lp(e) {
    rh.allowStateChanges = e;
}
Ep = Symbol.toPrimitive;
var zp,
    Ip = (function (e) {
        function t(t, n, r, a, i) {
            var o;
            return (
                void 0 === r && (r = 'ObservableValue'),
                void 0 === i && (i = zd.default),
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
        Sd(t, e);
        var n = t.prototype;
        return (
            (n.dehanceValue = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
                (this.value_, (e = this.prepareNewValue_(e)) !== rh.UNCHANGED && this.setNewValue_(e));
            }),
            (n.prepareNewValue_ = function (e) {
                if (tv(this)) {
                    var t = rv(this, { object: this, type: sv, newValue: e });
                    if (!t) return rh.UNCHANGED;
                    e = t.newValue;
                }
                return (
                    (e = this.enhancer(e, this.value_, this.name_)),
                    this.equals(this.value_, e) ? rh.UNCHANGED : e
                );
            }),
            (n.setNewValue_ = function (e) {
                var t = this.value_;
                ((this.value_ = e),
                    this.reportChanged(),
                    av(this) && ov(this, { type: sv, object: this, newValue: e, oldValue: t }));
            }),
            (n.get = function () {
                return (this.reportObserved(), this.dehanceValue(this.value_));
            }),
            (n.intercept_ = function (e) {
                return nv(this, e);
            }),
            (n.observe_ = function (e, t) {
                return (
                    t &&
                        e({
                            observableKind: 'value',
                            debugObjectName: this.name_,
                            object: this,
                            type: sv,
                            newValue: this.value_,
                            oldValue: void 0,
                        }),
                    iv(this, e)
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
                return md(this.get());
            }),
            (n[Ep] = function () {
                return this.valueOf();
            }),
            t
        );
    })(jd);
zp = Symbol.toPrimitive;
var Dp,
    Mp,
    Vp,
    Fp,
    Up = (function () {
        function e(e) {
            ((this.dependenciesState_ = Dp.NOT_TRACKING_),
                (this.observing_ = []),
                (this.newObserving_ = null),
                (this.isBeingObserved_ = !1),
                (this.isPendingUnobservation_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Dp.UP_TO_DATE_),
                (this.unboundDepsCount_ = 0),
                (this.value_ = new $p(null)),
                (this.name_ = void 0),
                (this.triggeredBy_ = void 0),
                (this.isComputing_ = !1),
                (this.isRunningSetter_ = !1),
                (this.derivation = void 0),
                (this.setter_ = void 0),
                (this.isTracing_ = Vp.NONE),
                (this.scope_ = void 0),
                (this.equals_ = void 0),
                (this.requiresReaction_ = void 0),
                (this.keepAlive_ = void 0),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                e.get || Wf(31),
                (this.derivation = e.get),
                (this.name_ = e.name || 'ComputedValue'),
                e.set && (this.setter_ = Tp('ComputedValue-setter', e.set)),
                (this.equals_ = e.equals || (e.compareStructural || e.struct ? zd.structural : zd.default)),
                (this.scope_ = e.context),
                (this.requiresReaction_ = e.requiresReaction),
                (this.keepAlive_ = !!e.keepAlive));
        }
        var t = e.prototype;
        return (
            (t.onBecomeStale_ = function () {
                !(function (e) {
                    if (e.lowestObserverState_ !== Dp.UP_TO_DATE_) return;
                    ((e.lowestObserverState_ = Dp.POSSIBLY_STALE_),
                        e.observers_.forEach(function (e) {
                            e.dependenciesState_ === Dp.UP_TO_DATE_ &&
                                ((e.dependenciesState_ = Dp.POSSIBLY_STALE_), e.onBecomeStale_());
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
                    (this.isComputing_ && Wf(32, this.name_, this.derivation),
                    0 !== rh.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                ) {
                    if ((sh(this), Hp(this))) {
                        var e = rh.trackingContext;
                        (this.keepAlive_ && !e && (rh.trackingContext = this),
                            this.trackAndCompute() &&
                                (function (e) {
                                    if (e.lowestObserverState_ === Dp.STALE_) return;
                                    ((e.lowestObserverState_ = Dp.STALE_),
                                        e.observers_.forEach(function (t) {
                                            t.dependenciesState_ === Dp.POSSIBLY_STALE_
                                                ? (t.dependenciesState_ = Dp.STALE_)
                                                : t.dependenciesState_ === Dp.UP_TO_DATE_ &&
                                                  (e.lowestObserverState_ = Dp.UP_TO_DATE_);
                                        }));
                                })(this),
                            (rh.trackingContext = e));
                    }
                } else Hp(this) && (this.warnAboutUntrackedRead_(), lh(), (this.value_ = this.computeValue_(!1)), uh());
                var t = this.value_;
                if (Wp(t)) throw t.cause;
                return t;
            }),
            (t.set = function (e) {
                if (this.setter_) {
                    (this.isRunningSetter_ && Wf(33, this.name_), (this.isRunningSetter_ = !0));
                    try {
                        this.setter_.call(this.scope_, e);
                    } finally {
                        this.isRunningSetter_ = !1;
                    }
                } else Wf(34, this.name_);
            }),
            (t.trackAndCompute = function () {
                var e = this.value_,
                    t = this.dependenciesState_ === Dp.NOT_TRACKING_,
                    n = this.computeValue_(!0),
                    r = t || Wp(e) || Wp(n) || !this.equals_(e, n);
                return (r && (this.value_ = n), r);
            }),
            (t.computeValue_ = function (e) {
                this.isComputing_ = !0;
                var t,
                    n = Rp(!1);
                if (e) t = Kp(this, this.derivation, this.scope_);
                else if (!0 === rh.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                else
                    try {
                        t = this.derivation.call(this.scope_);
                    } catch (r) {
                        t = new $p(r);
                    }
                return (Lp(n), (this.isComputing_ = !1), t);
            }),
            (t.suspend_ = function () {
                this.keepAlive_ || (qp(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
                var n = this,
                    r = !0,
                    a = void 0;
                return (function (e, t) {
                    var n, r, a, i, o;
                    void 0 === t && (t = Zf);
                    var l,
                        u = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun';
                    if (t.scheduler || t.delay) {
                        var s = Ah(t),
                            c = !1;
                        l = new fh(
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
                        l = new fh(
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
                        var o = Gp();
                        (e({
                            observableKind: 'computed',
                            debugObjectName: n.name_,
                            type: sv,
                            object: n,
                            newValue: i,
                            oldValue: a,
                        }),
                            Yp(o));
                    }
                    ((r = !1), (a = i));
                });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
                return this.name_ + '[' + this.derivation.toString() + ']';
            }),
            (t.valueOf = function () {
                return md(this.get());
            }),
            (t[zp] = function () {
                return this.valueOf();
            }),
            e
        );
    })(),
    Bp = fd('ComputedValue', Up);
(((Mp = Dp || (Dp = {}))[(Mp.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
    (Mp[(Mp.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
    (Mp[(Mp.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
    (Mp[(Mp.STALE_ = 2)] = 'STALE_'),
    ((Fp = Vp || (Vp = {}))[(Fp.NONE = 0)] = 'NONE'),
    (Fp[(Fp.LOG = 1)] = 'LOG'),
    (Fp[(Fp.BREAK = 2)] = 'BREAK'));
var $p = function (e) {
    ((this.cause = void 0), (this.cause = e));
};
function Wp(e) {
    return e instanceof $p;
}
function Hp(e) {
    switch (e.dependenciesState_) {
        case Dp.UP_TO_DATE_:
            return !1;
        case Dp.NOT_TRACKING_:
        case Dp.STALE_:
            return !0;
        case Dp.POSSIBLY_STALE_:
            for (var t = Xp(!0), n = Gp(), r = e.observing_, a = r.length, i = 0; i < a; i++) {
                var o = r[i];
                if (Bp(o)) {
                    if (rh.disableErrorBoundaries) o.get();
                    else
                        try {
                            o.get();
                        } catch (l) {
                            return (Yp(n), Zp(t), !0);
                        }
                    if (e.dependenciesState_ === Dp.STALE_) return (Yp(n), Zp(t), !0);
                }
            }
            return (Jp(e), Yp(n), Zp(t), !1);
    }
}
function Kp(e, t, n) {
    var r = Xp(!0);
    (Jp(e),
        (e.newObserving_ = new Array(e.observing_.length + 100)),
        (e.unboundDepsCount_ = 0),
        (e.runId_ = ++rh.runId));
    var a,
        i = rh.trackingDerivation;
    if (((rh.trackingDerivation = e), rh.inBatch++, !0 === rh.disableErrorBoundaries)) a = t.call(n);
    else
        try {
            a = t.call(n);
        } catch (o) {
            a = new $p(o);
        }
    return (
        rh.inBatch--,
        (rh.trackingDerivation = i),
        (function (e) {
            for (
                var t = e.observing_,
                    n = (e.observing_ = e.newObserving_),
                    r = Dp.UP_TO_DATE_,
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
                (0 === u.diffValue_ && ih(u, e), (u.diffValue_ = 0));
            }
            for (; a--; ) {
                var s = n[a];
                1 === s.diffValue_ && ((s.diffValue_ = 0), ah(s, e));
            }
            r !== Dp.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        Zp(r),
        a
    );
}
function qp(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) ih(t[n], e);
    e.dependenciesState_ = Dp.NOT_TRACKING_;
}
function Qp(e) {
    var t = Gp();
    try {
        return e();
    } finally {
        Yp(t);
    }
}
function Gp() {
    var e = rh.trackingDerivation;
    return ((rh.trackingDerivation = null), e);
}
function Yp(e) {
    rh.trackingDerivation = e;
}
function Xp(e) {
    var t = rh.allowStateReads;
    return ((rh.allowStateReads = e), t);
}
function Zp(e) {
    rh.allowStateReads = e;
}
function Jp(e) {
    if (e.dependenciesState_ !== Dp.UP_TO_DATE_) {
        e.dependenciesState_ = Dp.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = Dp.UP_TO_DATE_;
    }
}
var eh = function () {
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
    th = !0,
    nh = !1,
    rh = (function () {
        var e = Kf();
        return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (th = !1),
            e.__mobxGlobals && e.__mobxGlobals.version !== new eh().version && (th = !1),
            th
                ? e.__mobxGlobals
                    ? ((e.__mobxInstanceCount += 1),
                      e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                      e.__mobxGlobals)
                    : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new eh()))
                : (setTimeout(function () {
                      nh || Wf(35);
                  }, 1),
                  new eh())
        );
    })();
function ah(e, t) {
    (e.observers_.add(t),
        e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_));
}
function ih(e, t) {
    (e.observers_.delete(t), 0 === e.observers_.size && oh(e));
}
function oh(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), rh.pendingUnobservations.push(e));
}
function lh() {
    rh.inBatch++;
}
function uh() {
    if (0 == --rh.inBatch) {
        hh();
        for (var e = rh.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            ((n.isPendingUnobservation_ = !1),
                0 === n.observers_.size &&
                    (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof Up && n.suspend_()));
        }
        rh.pendingUnobservations = [];
    }
}
function sh(e) {
    var t = rh.trackingDerivation;
    return null !== t
        ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ && rh.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
          e.isBeingObserved_)
        : (0 === e.observers_.size && rh.inBatch > 0 && oh(e), !1);
}
function ch(e) {
    e.lowestObserverState_ !== Dp.STALE_ &&
        ((e.lowestObserverState_ = Dp.STALE_),
        e.observers_.forEach(function (e) {
            (e.dependenciesState_ === Dp.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = Dp.STALE_));
        }));
}
var fh = (function () {
        function e(e, t, n, r) {
            (void 0 === e && (e = 'Reaction'),
                (this.name_ = void 0),
                (this.onInvalidate_ = void 0),
                (this.errorHandler_ = void 0),
                (this.requiresObservable_ = void 0),
                (this.observing_ = []),
                (this.newObserving_ = []),
                (this.dependenciesState_ = Dp.NOT_TRACKING_),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.unboundDepsCount_ = 0),
                (this.isDisposed_ = !1),
                (this.isScheduled_ = !1),
                (this.isTrackPending_ = !1),
                (this.isRunning_ = !1),
                (this.isTracing_ = Vp.NONE),
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
                this.isScheduled_ || ((this.isScheduled_ = !0), rh.pendingReactions.push(this), hh());
            }),
            (t.isScheduled = function () {
                return this.isScheduled_;
            }),
            (t.runReaction_ = function () {
                if (!this.isDisposed_) {
                    (lh(), (this.isScheduled_ = !1));
                    var e = rh.trackingContext;
                    if (((rh.trackingContext = this), Hp(this))) {
                        this.isTrackPending_ = !0;
                        try {
                            this.onInvalidate_();
                        } catch (t) {
                            this.reportExceptionInDerivation_(t);
                        }
                    }
                    ((rh.trackingContext = e), uh());
                }
            }),
            (t.track = function (e) {
                if (!this.isDisposed_) {
                    (lh(), (this.isRunning_ = !0));
                    var t = rh.trackingContext;
                    rh.trackingContext = this;
                    var n = Kp(this, e, void 0);
                    ((rh.trackingContext = t),
                        (this.isRunning_ = !1),
                        (this.isTrackPending_ = !1),
                        this.isDisposed_ && qp(this),
                        Wp(n) && this.reportExceptionInDerivation_(n.cause),
                        uh());
                }
            }),
            (t.reportExceptionInDerivation_ = function (e) {
                var t = this;
                if (this.errorHandler_) this.errorHandler_(e, this);
                else {
                    if (rh.disableErrorBoundaries) throw e;
                    var n = "[mobx] uncaught error in '" + this + "'";
                    (rh.suppressReactionErrors || console.error(n, e),
                        rh.globalReactionErrorHandlers.forEach(function (n) {
                            return n(e, t);
                        }));
                }
            }),
            (t.dispose = function () {
                this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (lh(), qp(this), uh()));
            }),
            (t.getDisposer_ = function (e) {
                var t = this,
                    n = function n() {
                        (t.dispose(), null == e || null == e.removeEventListener || e.removeEventListener('abort', n));
                    };
                return (null == e || null == e.addEventListener || e.addEventListener('abort', n), (n[Td] = this), n);
            }),
            (t.toString = function () {
                return 'Reaction[' + this.name_ + ']';
            }),
            (t.trace = function (e) {}),
            e
        );
    })(),
    dh = 100,
    ph = function (e) {
        return e();
    };
function hh() {
    rh.inBatch > 0 || rh.isRunningReactions || ph(vh);
}
function vh() {
    rh.isRunningReactions = !0;
    for (var e = rh.pendingReactions, t = 0; e.length > 0; ) {
        ++t === dh && (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, a = n.length; r < a; r++) n[r].runReaction_();
    }
    rh.isRunningReactions = !1;
}
var mh = fd('Reaction', fh);
var gh = 'action',
    yh = 'autoAction',
    bh = '<unnamed action>',
    _h = Vd(gh),
    wh = Vd('action.bound', { bound: !0 }),
    Sh = Vd(yh, { autoAction: !0 }),
    kh = Vd('autoAction.bound', { autoAction: !0, bound: !0 });
function xh(e) {
    return function (t, n) {
        return ad(t)
            ? Tp(t.name || bh, t, e)
            : ad(n)
              ? Tp(t, n, e)
              : Nd(n)
                ? (e ? Sh : _h).decorate_20223_(t, n)
                : id(n)
                  ? Ad(t, n, e ? Sh : _h)
                  : id(t)
                    ? Cd(Vd(e ? yh : gh, { name: t, autoAction: e }))
                    : void 0;
    };
}
var Oh = xh(!1);
Object.assign(Oh, _h);
var Eh = xh(!0);
function Ph(e) {
    return ad(e) && !0 === e.isMobxAction;
}
(Object.assign(Eh, Sh), (Oh.bound = Cd(wh)), (Eh.bound = Cd(kh)));
var Ch = function (e) {
    return e();
};
function Ah(e) {
    return e.scheduler
        ? e.scheduler
        : e.delay
          ? function (t) {
                return setTimeout(t, e.delay);
            }
          : Ch;
}
function Nh(e, t, n) {
    var r, a, i, o;
    void 0 === n && (n = Zf);
    var l,
        u,
        s,
        c,
        f = null != (r = n.name) ? r : 'Reaction',
        d = Oh(
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
        h = Ah(n),
        v = !0,
        m = !1,
        g = n.compareStructural ? zd.structural : n.equals || zd.default,
        y = new fh(
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
                    var n = Rp(e);
                    try {
                        return t();
                    } finally {
                        Lp(n);
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
var Th = 'onBO',
    jh = 'onBUO';
function Rh(e, t, n) {
    return Lh(jh, e, t, n);
}
function Lh(e, t, n, r) {
    var a = Xv(t),
        i = ad(r) ? r : n,
        o = e + 'L';
    return (
        a[o] ? a[o].add(i) : (a[o] = new Set([i])),
        function () {
            var e = a[o];
            e && (e.delete(i), 0 === e.size && delete a[o]);
        }
    );
}
var zh = 'never',
    Ih = 'always',
    Dh = 'observed';
function Mh(e) {
    !0 === e.isolateGlobalState &&
        (function () {
            if (((rh.pendingReactions.length || rh.inBatch || rh.isRunningReactions) && Wf(36), (nh = !0), th)) {
                var e = Kf();
                (0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0), (rh = new eh()));
            }
        })();
    var t,
        n,
        r = e.useProxies,
        a = e.enforceActions;
    if (
        (void 0 !== r && (rh.useProxies = r === Ih || (r !== zh && 'undefined' != typeof Proxy)),
        'ifavailable' === r && (rh.verifyProxies = !0),
        void 0 !== a)
    ) {
        var i = a === Ih ? Ih : a === Dh;
        ((rh.enforceActions = i), (rh.allowStateChanges = !0 !== i && i !== Ih));
    }
    ([
        'computedRequiresReaction',
        'reactionRequiresObservable',
        'observableRequiresReaction',
        'disableErrorBoundaries',
        'safeDescriptors',
    ].forEach(function (t) {
        t in e && (rh[t] = !!e[t]);
    }),
        (rh.allowStateReads = !rh.observableRequiresReaction),
        e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = ph),
            (ph = function (e) {
                return t(function () {
                    return n(e);
                });
            })));
}
function Vh(e, t, n, r) {
    var a = yd(t);
    return (
        em(function () {
            var t = zv(e, r)[Td];
            vd(a).forEach(function (e) {
                t.extend_(e, a[e], !n || !(e in n) || n[e]);
            });
        }),
        e
    );
}
function Fh(e) {
    var t,
        n = { name: e.name_ };
    return (
        e.observing_ &&
            e.observing_.length > 0 &&
            (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(Fh)),
        n
    );
}
var Uh = 0;
function Bh() {
    this.message = 'FLOW_CANCELLED';
}
Bh.prototype = Object.create(Error.prototype);
var $h = Wd('flow'),
    Wh = Wd('flow.bound', { bound: !0 }),
    Hh = Object.assign(function (e, t) {
        if (Nd(t)) return $h.decorate_20223_(e, t);
        if (id(t)) return Ad(e, t, $h);
        var n = e,
            r = n.name || '<unnamed flow>',
            a = function () {
                var e,
                    t = arguments,
                    a = ++Uh,
                    i = Oh(r + ' - runid: ' + a + ' - init', n).apply(this, t),
                    o = void 0,
                    l = new Promise(function (t, n) {
                        var l = 0;
                        function u(e) {
                            var t;
                            o = void 0;
                            try {
                                t = Oh(r + ' - runid: ' + a + ' - yield ' + l++, i.next).call(i, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function s(e) {
                            var t;
                            o = void 0;
                            try {
                                t = Oh(r + ' - runid: ' + a + ' - yield ' + l++, i.throw).call(i, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function c(e) {
                            if (!ad(null == e ? void 0 : e.then))
                                return e.done ? t(e.value) : (o = Promise.resolve(e.value)).then(u, s);
                            e.then(c, n);
                        }
                        ((e = n), u(void 0));
                    });
                return (
                    (l.cancel = Oh(r + ' - runid: ' + a + ' - cancel', function () {
                        try {
                            o && Kh(o);
                            var t = i.return(void 0),
                                n = Promise.resolve(t.value);
                            (n.then(rd, rd), Kh(n), e(new Bh()));
                        } catch (r) {
                            e(r);
                        }
                    })),
                    l
                );
            };
        return ((a.isMobXFlow = !0), a);
    }, $h);
function Kh(e) {
    ad(e.cancel) && e.cancel();
}
function qh(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function Qh(e, t) {
    if (void 0 === t) return Bp(e);
    if (!1 === Mv(e)) return !1;
    if (!e[Td].values_.has(t)) return !1;
    var n = Xv(e, t);
    return Bp(n);
}
function Gh(e, t) {
    return Qh(e, t);
}
function Yh(e) {
    return (function (e, t) {
        return !!e && (Mv(e) || !!e[Td] || Rd(e) || mh(e) || Bp(e));
    })(e);
}
function Xh(e, t, n, r) {
    return ad(n)
        ? (function (e, t, n, r) {
              return Zv(e, t).observe_(n, r);
          })(e, t, n, r)
        : (function (e, t, n) {
              return Zv(e).observe_(t, n);
          })(e, t, n);
}
function Zh(e, t) {
    (void 0 === t && (t = void 0), lh());
    try {
        return e.apply(t);
    } finally {
        uh();
    }
}
function Jh(e) {
    return e[Td];
}
Hh.bound = Cd(Wh);
var ev = {
    has: function (e, t) {
        return Jh(e).has_(t);
    },
    get: function (e, t) {
        return Jh(e).get_(t);
    },
    set: function (e, t, n) {
        var r;
        return !!id(t) && (null == (r = Jh(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
        var n;
        return !!id(t) && (null == (n = Jh(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
        var r;
        return null == (r = Jh(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
        return Jh(e).ownKeys_();
    },
    preventExtensions: function (e) {
        Wf(13);
    },
};
function tv(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
}
function nv(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
        n.push(t),
        nd(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function rv(e, t) {
    var n = Gp();
    try {
        for (
            var r = [].concat(e.interceptors_ || []), a = 0, i = r.length;
            a < i && ((t = r[a](t)) && !t.type && Wf(14), t);
            a++
        );
        return t;
    } finally {
        Yp(n);
    }
}
function av(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
}
function iv(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
        n.push(t),
        nd(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function ov(e, t) {
    var n = Gp(),
        r = e.changeListeners_;
    if (r) {
        for (var a = 0, i = (r = r.slice()).length; a < i; a++) r[a](t);
        Yp(n);
    }
}
function lv(e, t, n) {
    return (
        em(function () {
            var r = zv(e, n)[Td];
            (null != t ||
                (t = (function (e) {
                    return (gd(e, Pd) || sd(e, Pd, wd({}, e[Pd])), e[Pd]);
                })(e)),
                vd(t).forEach(function (e) {
                    return r.make_(e, t[e]);
                }));
        }),
        e
    );
}
var uv = 'splice',
    sv = 'update',
    cv = {
        get: function (e, t) {
            var n = e[Td];
            return t === Td
                ? n
                : 'length' === t
                  ? n.getArrayLength_()
                  : 'string' != typeof t || isNaN(t)
                    ? gd(pv, t)
                        ? pv[t]
                        : e[t]
                    : n.get_(parseInt(t));
        },
        set: function (e, t, n) {
            var r = e[Td];
            return (
                'length' === t && r.setArrayLength_(n),
                'symbol' == typeof t || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n),
                !0
            );
        },
        preventExtensions: function () {
            Wf(15);
        },
    },
    fv = (function () {
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
                (this.atom_ = new jd(e)),
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
                return nv(this, e);
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
                    iv(this, e)
                );
            }),
            (t.getArrayLength_ = function () {
                return (this.atom_.reportObserved(), this.values_.length);
            }),
            (t.setArrayLength_ = function (e) {
                ('number' != typeof e || isNaN(e) || e < 0) && Wf('Out of range: ' + e);
                var t = this.values_.length;
                if (e !== t)
                    if (e > t) {
                        for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
                        this.spliceWithArray_(t, 0, n);
                    } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
                (e !== this.lastKnownLength_ && Wf(16),
                    (this.lastKnownLength_ += t),
                    this.legacyMode_ && t > 0 && Gv(e + t + 1));
            }),
            (t.spliceWithArray_ = function (e, t, n) {
                var r = this;
                this.atom_;
                var a = this.values_.length;
                if (
                    (void 0 === e ? (e = 0) : e > a ? (e = a) : e < 0 && (e = Math.max(0, a + e)),
                    (t = 1 === arguments.length ? a - e : null == t ? 0 : Math.max(0, Math.min(t, a - e))),
                    void 0 === n && (n = Xf),
                    tv(this))
                ) {
                    var i = rv(this, { object: this.proxy_, type: uv, index: e, removedCount: t, added: n });
                    if (!i) return Xf;
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
                    a = av(this),
                    i =
                        a || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  type: sv,
                                  debugObjectName: this.atom_.name_,
                                  index: e,
                                  newValue: t,
                                  oldValue: n,
                              }
                            : null;
                (this.atom_.reportChanged(), a && ov(this, i));
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    a = av(this),
                    i =
                        a || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  debugObjectName: this.atom_.name_,
                                  type: uv,
                                  index: e,
                                  removed: n,
                                  added: t,
                                  removedCount: n.length,
                                  addedCount: t.length,
                              }
                            : null;
                (this.atom_.reportChanged(), a && ov(this, i));
            }),
            (t.get_ = function (e) {
                if (!(this.legacyMode_ && e >= this.values_.length))
                    return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]));
                console.warn('[mobx] Out of bounds read: ' + e);
            }),
            (t.set_ = function (e, t) {
                var n = this.values_;
                if ((this.legacyMode_ && e > n.length && Wf(17, e, n.length), e < n.length)) {
                    this.atom_;
                    var r = n[e];
                    if (tv(this)) {
                        var a = rv(this, { type: sv, object: this.proxy_, index: e, newValue: t });
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
function dv(e, t, n, r) {
    return (
        void 0 === n && (n = 'ObservableArray'),
        void 0 === r && (r = !1),
        td(),
        em(function () {
            var a = new fv(n, t, r, !1);
            cd(a.values_, Td, a);
            var i = new Proxy(a.values_, cv);
            return ((a.proxy_ = i), e && e.length && a.spliceWithArray_(0, 0, e), i);
        })
    );
}
var pv = {
    clear: function () {
        return this.splice(0);
    },
    replace: function (e) {
        var t = this[Td];
        return t.spliceWithArray_(0, t.values_.length, e);
    },
    toJSON: function () {
        return this.slice();
    },
    splice: function (e, t) {
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
        var i = this[Td];
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
        return this[Td].spliceWithArray_(e, t, n);
    },
    push: function () {
        for (var e = this[Td], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(e.values_.length, 0, n), e.values_.length);
    },
    pop: function () {
        return this.splice(Math.max(this[Td].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        for (var e = this[Td], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(0, 0, n), e.values_.length);
    },
    reverse: function () {
        return (rh.trackingDerivation && Wf(37, 'reverse'), this.replace(this.slice().reverse()), this);
    },
    sort: function () {
        rh.trackingDerivation && Wf(37, 'sort');
        var e = this.slice();
        return (e.sort.apply(e, arguments), this.replace(e), this);
    },
    remove: function (e) {
        var t = this[Td],
            n = t.dehanceValues_(t.values_).indexOf(e);
        return n > -1 && (this.splice(n, 1), !0);
    },
};
function hv(e, t) {
    'function' == typeof Array.prototype[e] && (pv[e] = t(e));
}
function vv(e) {
    return function () {
        var t = this[Td];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments);
    };
}
function mv(e) {
    return function (t, n) {
        var r = this,
            a = this[Td];
        return (
            a.atom_.reportObserved(),
            a.dehanceValues_(a.values_)[e](function (e, a) {
                return t.call(n, e, a, r);
            })
        );
    };
}
function gv(e) {
    return function () {
        var t = this,
            n = this[Td];
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
(hv('at', vv),
    hv('concat', vv),
    hv('flat', vv),
    hv('includes', vv),
    hv('indexOf', vv),
    hv('join', vv),
    hv('lastIndexOf', vv),
    hv('slice', vv),
    hv('toString', vv),
    hv('toLocaleString', vv),
    hv('toSorted', vv),
    hv('toSpliced', vv),
    hv('with', vv),
    hv('every', mv),
    hv('filter', mv),
    hv('find', mv),
    hv('findIndex', mv),
    hv('findLast', mv),
    hv('findLastIndex', mv),
    hv('flatMap', mv),
    hv('forEach', mv),
    hv('map', mv),
    hv('some', mv),
    hv('toReversed', mv),
    hv('reduce', gv),
    hv('reduceRight', gv));
var yv,
    bv,
    _v = fd('ObservableArrayAdministration', fv);
function wv(e) {
    return od(e) && _v(e[Td]);
}
var Sv = {},
    kv = 'add',
    xv = 'delete';
((yv = Symbol.iterator), (bv = Symbol.toStringTag));
var Ov,
    Ev,
    Pv = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Id),
                void 0 === n && (n = 'ObservableMap'),
                (this.enhancer_ = void 0),
                (this.name_ = void 0),
                (this[Td] = Sv),
                (this.data_ = void 0),
                (this.hasMap_ = void 0),
                (this.keysAtom_ = void 0),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = t),
                (this.name_ = n),
                ad(Map) || Wf(18),
                em(function () {
                    ((r.keysAtom_ = Ld('ObservableMap.keys()')),
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
                if (!rh.trackingDerivation) return this.has_(e);
                var n = this.hasMap_.get(e);
                if (!n) {
                    var r = (n = new Ip(this.has_(e), Dd, 'ObservableMap.key?', !1));
                    (this.hasMap_.set(e, r),
                        Rh(r, function () {
                            return t.hasMap_.delete(e);
                        }));
                }
                return n.get();
            }),
            (t.set = function (e, t) {
                var n = this.has_(e);
                if (tv(this)) {
                    var r = rv(this, { type: n ? sv : kv, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, tv(this)) && !rv(this, { type: xv, object: this, name: e })) return !1;
                if (this.has_(e)) {
                    var n = av(this),
                        r = n
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: xv,
                                  object: this,
                                  oldValue: this.data_.get(e).value_,
                                  name: e,
                              }
                            : null;
                    return (
                        Zh(function () {
                            var n;
                            (t.keysAtom_.reportChanged(),
                                null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                                t.data_.get(e).setNewValue_(void 0),
                                t.data_.delete(e));
                        }),
                        n && ov(this, r),
                        !0
                    );
                }
                return !1;
            }),
            (t.updateValue_ = function (e, t) {
                var n = this.data_.get(e);
                if ((t = n.prepareNewValue_(t)) !== rh.UNCHANGED) {
                    var r = av(this),
                        a = r
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: sv,
                                  object: this,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), r && ov(this, a));
                }
            }),
            (t.addValue_ = function (e, t) {
                var n = this;
                (this.keysAtom_,
                    Zh(function () {
                        var r,
                            a = new Ip(t, n.enhancer_, 'ObservableMap.key', !1);
                        (n.data_.set(e, a),
                            (t = a.value_),
                            null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                            n.keysAtom_.reportChanged());
                    }));
                var r = av(this),
                    a = r
                        ? {
                              observableKind: 'map',
                              debugObjectName: this.name_,
                              type: kv,
                              object: this,
                              name: e,
                              newValue: t,
                          }
                        : null;
                r && ov(this, a);
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
                return im({
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
                return im({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            a = n.value;
                        return { done: r, value: r ? void 0 : [a, e.get(a)] };
                    },
                });
            }),
            (t[yv] = function () {
                return this.entries();
            }),
            (t.forEach = function (e, t) {
                for (var n, r = Ed(this); !(n = r()).done; ) {
                    var a = n.value,
                        i = a[0],
                        o = a[1];
                    e.call(t, o, i, this);
                }
            }),
            (t.merge = function (e) {
                var t = this;
                return (
                    Cv(e) && (e = new Map(e)),
                    Zh(function () {
                        ld(e)
                            ? (function (e) {
                                  var t = Object.keys(e);
                                  if (!hd) return t;
                                  var n = Object.getOwnPropertySymbols(e);
                                  return n.length
                                      ? [].concat(
                                            t,
                                            n.filter(function (t) {
                                                return Yf.propertyIsEnumerable.call(e, t);
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
                              : dd(e)
                                ? (e.constructor !== Map && Wf(19, e),
                                  e.forEach(function (e, n) {
                                      return t.set(n, e);
                                  }))
                                : null != e && Wf(20, e);
                    }),
                    this
                );
            }),
            (t.clear = function () {
                var e = this;
                Zh(function () {
                    Qp(function () {
                        for (var t, n = Ed(e.keys()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    Zh(function () {
                        for (
                            var n,
                                r = (function (e) {
                                    if (dd(e) || Cv(e)) return e;
                                    if (Array.isArray(e)) return new Map(e);
                                    if (ld(e)) {
                                        var t = new Map();
                                        for (var n in e) t.set(n, e[n]);
                                        return t;
                                    }
                                    return Wf(21, e);
                                })(e),
                                a = new Map(),
                                i = !1,
                                o = Ed(t.data_.keys());
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
                        for (var s, c = Ed(r.entries()); !(s = c()).done; ) {
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
                return iv(this, e);
            }),
            (t.intercept_ = function (e) {
                return nv(this, e);
            }),
            _d(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.keysAtom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: bv,
                    get: function () {
                        return 'Map';
                    },
                },
            ]),
            e
        );
    })(),
    Cv = fd('ObservableMap', Pv);
var Av = {};
((Ov = Symbol.iterator), (Ev = Symbol.toStringTag));
var Nv = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Id),
                void 0 === n && (n = 'ObservableSet'),
                (this.name_ = void 0),
                (this[Td] = Av),
                (this.data_ = new Set()),
                (this.atom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = void 0),
                (this.name_ = n),
                ad(Set) || Wf(22),
                (this.enhancer_ = function (e, r) {
                    return t(e, r, n);
                }),
                em(function () {
                    ((r.atom_ = Ld(r.name_)), e && r.replace(e));
                }));
        }
        var t = e.prototype;
        return (
            (t.dehanceValue_ = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
                var e = this;
                Zh(function () {
                    Qp(function () {
                        for (var t, n = Ed(e.data_.values()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.forEach = function (e, t) {
                for (var n, r = Ed(this); !(n = r()).done; ) {
                    var a = n.value;
                    e.call(t, a, a, this);
                }
            }),
            (t.add = function (e) {
                var t = this;
                if ((this.atom_, tv(this)) && !rv(this, { type: kv, object: this, newValue: e })) return this;
                if (!this.has(e)) {
                    Zh(function () {
                        (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
                    });
                    var n = av(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: kv,
                                  object: this,
                                  newValue: e,
                              }
                            : null;
                    n && ov(this, r);
                }
                return this;
            }),
            (t.delete = function (e) {
                var t = this;
                if (tv(this) && !rv(this, { type: xv, object: this, oldValue: e })) return !1;
                if (this.has(e)) {
                    var n = av(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: xv,
                                  object: this,
                                  oldValue: e,
                              }
                            : null;
                    return (
                        Zh(function () {
                            (t.atom_.reportChanged(), t.data_.delete(e));
                        }),
                        n && ov(this, r),
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
                return im({
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
                return im({
                    next: function () {
                        return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
                    },
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    Tv(e) && (e = new Set(e)),
                    Zh(function () {
                        Array.isArray(e) || pd(e)
                            ? (t.clear(),
                              e.forEach(function (e) {
                                  return t.add(e);
                              }))
                            : null != e && Wf('Cannot initialize set from ' + e);
                    }),
                    this
                );
            }),
            (t.observe_ = function (e, t) {
                return iv(this, e);
            }),
            (t.intercept_ = function (e) {
                return nv(this, e);
            }),
            (t.toJSON = function () {
                return Array.from(this);
            }),
            (t.toString = function () {
                return '[object ObservableSet]';
            }),
            (t[Ov] = function () {
                return this.values();
            }),
            _d(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.atom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: Ev,
                    get: function () {
                        return 'Set';
                    },
                },
            ]),
            e
        );
    })(),
    Tv = fd('ObservableSet', Nv),
    jv = Object.create(null),
    Rv = 'remove',
    Lv = (function () {
        function e(e, t, n, r) {
            (void 0 === t && (t = new Map()),
                void 0 === r && (r = ap),
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
                (this.keysAtom_ = new jd('ObservableObject.keys')),
                (this.isPlainObject_ = ld(this.target_)));
        }
        var t = e.prototype;
        return (
            (t.getObservablePropValue_ = function (e) {
                return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
                var n = this.values_.get(e);
                if (n instanceof Up) return (n.set(t), !0);
                if (tv(this)) {
                    var r = rv(this, { type: sv, object: this.proxy_ || this.target_, name: e, newValue: t });
                    if (!r) return null;
                    t = r.newValue;
                }
                if ((t = n.prepareNewValue_(t)) !== rh.UNCHANGED) {
                    var a = av(this),
                        i = a
                            ? {
                                  type: sv,
                                  observableKind: 'object',
                                  debugObjectName: this.name_,
                                  object: this.proxy_ || this.target_,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), a && ov(this, i));
                }
                return !0;
            }),
            (t.get_ = function (e) {
                return (rh.trackingDerivation && !gd(this.target_, e) && this.has_(e), this.target_[e]);
            }),
            (t.set_ = function (e, t, n) {
                return (
                    void 0 === n && (n = !1),
                    gd(this.target_, e)
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
                if (!rh.trackingDerivation) return e in this.target_;
                this.pendingKeys_ || (this.pendingKeys_ = new Map());
                var t = this.pendingKeys_.get(e);
                return (
                    t ||
                        ((t = new Ip(e in this.target_, Dd, 'ObservableObject.key?', !1)), this.pendingKeys_.set(e, t)),
                    t.get()
                );
            }),
            (t.make_ = function (e, t) {
                if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                    if (!(e in this.target_)) {
                        var n;
                        if (null != (n = this.target_[Pd]) && n[e]) return;
                        Wf(1, t.annotationType_, this.name_ + '.' + e.toString());
                    }
                    for (var r = this.target_; r && r !== Yf; ) {
                        var a = Qf(r, e);
                        if (a) {
                            var i = t.make_(this, e, a, r);
                            if (0 === i) return;
                            if (1 === i) break;
                        }
                        r = Object.getPrototypeOf(r);
                    }
                    Vv(this, t, e);
                }
            }),
            (t.extend_ = function (e, t, n, r) {
                if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                    return this.defineProperty_(e, t, r);
                var a = n.extend_(this, e, t, r);
                return (a && Vv(this, n, e), a);
            }),
            (t.defineProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    lh();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (tv(this)) {
                        var a = rv(this, { object: this.proxy_ || this.target_, name: e, type: kv, newValue: t.value });
                        if (!a) return null;
                        var i = a.newValue;
                        t.value !== i && (t = wd({}, t, { value: i }));
                    }
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                    } else Gf(this.target_, e, t);
                    this.notifyPropertyAddition_(e, t.value);
                } finally {
                    uh();
                }
                return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
                (void 0 === r && (r = !1), this.keysAtom_);
                try {
                    lh();
                    var a = this.delete_(e);
                    if (!a) return a;
                    if (tv(this)) {
                        var i = rv(this, { object: this.proxy_ || this.target_, name: e, type: kv, newValue: t });
                        if (!i) return null;
                        t = i.newValue;
                    }
                    var o = Dv(e),
                        l = {
                            configurable: !rh.safeDescriptors || this.isPlainObject_,
                            enumerable: !0,
                            get: o.get,
                            set: o.set,
                        };
                    if (r) {
                        if (!Reflect.defineProperty(this.target_, e, l)) return !1;
                    } else Gf(this.target_, e, l);
                    var u = new Ip(t, n, 'ObservableObject.key', !1);
                    (this.values_.set(e, u), this.notifyPropertyAddition_(e, u.value_));
                } finally {
                    uh();
                }
                return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    lh();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (tv(this))
                        if (!rv(this, { object: this.proxy_ || this.target_, name: e, type: kv, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var a = Dv(e),
                        i = {
                            configurable: !rh.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: a.get,
                            set: a.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, i)) return !1;
                    } else Gf(this.target_, e, i);
                    (this.values_.set(e, new Up(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    uh();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !gd(this.target_, e))) return !0;
                if (tv(this) && !rv(this, { object: this.proxy_ || this.target_, name: e, type: Rv })) return null;
                try {
                    var n, r;
                    lh();
                    var a,
                        i = av(this),
                        o = this.values_.get(e),
                        l = void 0;
                    if (!o && i) l = null == (a = Qf(this.target_, e)) ? void 0 : a.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (o && (this.values_.delete(e), o instanceof Ip && (l = o.value_), ch(o)),
                        this.keysAtom_.reportChanged(),
                        null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
                        i)
                    ) {
                        var u = {
                            type: Rv,
                            observableKind: 'object',
                            object: this.proxy_ || this.target_,
                            debugObjectName: this.name_,
                            oldValue: l,
                            name: e,
                        };
                        (0, i && ov(this, u));
                    }
                } finally {
                    uh();
                }
                return !0;
            }),
            (t.observe_ = function (e, t) {
                return iv(this, e);
            }),
            (t.intercept_ = function (e) {
                return nv(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
                var n,
                    r,
                    a = av(this);
                if (a) {
                    var i = a
                        ? {
                              type: kv,
                              observableKind: 'object',
                              debugObjectName: this.name_,
                              object: this.proxy_ || this.target_,
                              name: e,
                              newValue: t,
                          }
                        : null;
                    a && ov(this, i);
                }
                (null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(!0),
                    this.keysAtom_.reportChanged());
            }),
            (t.ownKeys_ = function () {
                return (this.keysAtom_.reportObserved(), vd(this.target_));
            }),
            (t.keys_ = function () {
                return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
            }),
            e
        );
    })();
function zv(e, t) {
    var n;
    if (gd(e, Td)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
        a = new Lv(
            e,
            new Map(),
            String(r),
            (function (e) {
                var t;
                return e ? (null != (t = e.defaultDecorator) ? t : ip(e)) : void 0;
            })(t),
        );
    return (sd(e, Td, a), e);
}
var Iv = fd('ObservableObjectAdministration', Lv);
function Dv(e) {
    return (
        jv[e] ||
        (jv[e] = {
            get: function () {
                return this[Td].getObservablePropValue_(e);
            },
            set: function (t) {
                return this[Td].setObservablePropValue_(e, t);
            },
        })
    );
}
function Mv(e) {
    return !!od(e) && Iv(e[Td]);
}
function Vv(e, t, n) {
    var r;
    null == (r = e.target_[Pd]) || delete r[n];
}
var Fv,
    Uv,
    Bv = qv(0),
    $v = (function () {
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
    Wv = 0,
    Hv = function () {};
((Fv = Hv),
    (Uv = Array.prototype),
    Object.setPrototypeOf
        ? Object.setPrototypeOf(Fv.prototype, Uv)
        : void 0 !== Fv.prototype.__proto__
          ? (Fv.prototype.__proto__ = Uv)
          : (Fv.prototype = Uv));
var Kv = (function (e, t, n) {
    function r(t, n, r, a) {
        var i;
        return (
            void 0 === r && (r = 'ObservableArray'),
            void 0 === a && (a = !1),
            (i = e.call(this) || this),
            em(function () {
                var e = new fv(r, n, a, !0);
                ((e.proxy_ = xd(i)),
                    cd(xd(i), Td, e),
                    t && t.length && i.spliceWithArray(0, 0, t),
                    $v && Object.defineProperty(xd(i), '0', Bv));
            }),
            i
        );
    }
    Sd(r, e);
    var a = r.prototype;
    return (
        (a.concat = function () {
            this[Td].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return Array.prototype.concat.apply(
                this.slice(),
                t.map(function (e) {
                    return wv(e) ? e.slice() : e;
                }),
            );
        }),
        (a[n] = function () {
            var e = this,
                t = 0;
            return im({
                next: function () {
                    return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
                },
            });
        }),
        _d(r, [
            {
                key: 'length',
                get: function () {
                    return this[Td].getArrayLength_();
                },
                set: function (e) {
                    this[Td].setArrayLength_(e);
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
})(Hv, Symbol.toStringTag, Symbol.iterator);
function qv(e) {
    return {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this[Td].get_(e);
        },
        set: function (t) {
            this[Td].set_(e, t);
        },
    };
}
function Qv(e) {
    Gf(Kv.prototype, '' + e, qv(e));
}
function Gv(e) {
    if (e > Wv) {
        for (var t = Wv; t < e + 100; t++) Qv(t);
        Wv = e;
    }
}
function Yv(e, t, n) {
    return new Kv(e, t, n);
}
function Xv(e, t) {
    if ('object' == typeof e && null !== e) {
        if (wv(e)) return (void 0 !== t && Wf(23), e[Td].atom_);
        if (Tv(e)) return e.atom_;
        if (Cv(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return (n || Wf(25, t, Jv(e)), n);
        }
        if (Mv(e)) {
            if (!t) return Wf(26);
            var r = e[Td].values_.get(t);
            return (r || Wf(27, t, Jv(e)), r);
        }
        if (Rd(e) || Bp(e) || mh(e)) return e;
    } else if (ad(e) && mh(e[Td])) return e[Td];
    Wf(28);
}
function Zv(e, t) {
    return (
        e || Wf(29),
        void 0 !== t ? Zv(Xv(e, t)) : Rd(e) || Bp(e) || mh(e) || Cv(e) || Tv(e) ? e : e[Td] ? e[Td] : void Wf(24, e)
    );
}
function Jv(e, t) {
    var n;
    if (void 0 !== t) n = Xv(e, t);
    else {
        if (Ph(e)) return e.name;
        n = Mv(e) || Cv(e) || Tv(e) ? Zv(e) : Xv(e);
    }
    return n.name_;
}
function em(e) {
    var t = Gp(),
        n = Rp(!0);
    lh();
    try {
        return e();
    } finally {
        (uh(), Lp(n), Yp(t));
    }
}
(Object.entries(pv).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && sd(Kv.prototype, t, n);
}),
    Gv(1e3));
var tm = Yf.toString;
function nm(e, t, n) {
    return (void 0 === n && (n = -1), rm(e, t, n));
}
function rm(e, t, n, r, a) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var i = typeof e;
    if ('function' !== i && 'object' !== i && 'object' != typeof t) return !1;
    var o = tm.call(e);
    if (o !== tm.call(t)) return !1;
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
    ((e = am(e)), (t = am(t)));
    var l = '[object Array]' === o;
    if (!l) {
        if ('object' != typeof e || 'object' != typeof t) return !1;
        var u = e.constructor,
            s = t.constructor;
        if (
            u !== s &&
            !(ad(u) && u instanceof u && ad(s) && s instanceof s) &&
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
        for (; c--; ) if (!rm(e[c], t[c], n - 1, r, a)) return !1;
    } else {
        var f,
            d = Object.keys(e);
        if (((c = d.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (!gd(t, (f = d[c])) || !rm(e[f], t[f], n - 1, r, a)) return !1;
    }
    return (r.pop(), a.pop(), !0);
}
function am(e) {
    return wv(e) ? e.slice() : dd(e) || Cv(e) || pd(e) || Tv(e) ? Array.from(e.entries()) : e;
}
function im(e) {
    return ((e[Symbol.iterator] = om), e);
}
function om() {
    return this;
}
(['Symbol', 'Map', 'Set'].forEach(function (e) {
    void 0 === Kf()[e] && Wf("MobX requires global '" + e + "' to be available or polyfilled");
}),
    'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
                return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
            },
            extras: { getDebugName: Jv },
            $mobx: Td,
        }));
var lm = km(),
    um = (e) => bm(e, lm),
    sm = km();
um.write = (e) => bm(e, sm);
var cm = km();
um.onStart = (e) => bm(e, cm);
var fm = km();
um.onFrame = (e) => bm(e, fm);
var dm = km();
um.onFinish = (e) => bm(e, dm);
var pm = [];
um.setTimeout = (e, t) => {
    const n = um.now() + t,
        r = () => {
            const e = pm.findIndex((e) => e.cancel == r);
            (~e && pm.splice(e, 1), (gm -= ~e ? 1 : 0));
        },
        a = { time: n, handler: e, cancel: r };
    return (pm.splice(hm(n), 0, a), (gm += 1), _m(), a);
};
var hm = (e) => ~(~pm.findIndex((t) => t.time > e) || ~pm.length);
((um.cancel = (e) => {
    (cm.delete(e), fm.delete(e), dm.delete(e), lm.delete(e), sm.delete(e));
}),
    (um.sync = (e) => {
        ((ym = !0), um.batchedUpdates(e), (ym = !1));
    }),
    (um.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            ((t = e), um.onStart(n));
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                (cm.delete(n), (t = null));
            }),
            r
        );
    }));
var vm = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
((um.use = (e) => (vm = e)),
    (um.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (um.batchedUpdates = (e) => e()),
    (um.catch = console.error),
    (um.frameLoop = 'always'),
    (um.advance = () => {
        'demand' !== um.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : Sm();
    }));
var mm = -1,
    gm = 0,
    ym = !1;
function bm(e, t) {
    ym ? (t.delete(e), e(0)) : (t.add(e), _m());
}
function _m() {
    mm < 0 && ((mm = 0), 'demand' !== um.frameLoop && vm(wm));
}
function wm() {
    ~mm && (vm(wm), um.batchedUpdates(Sm));
}
function Sm() {
    const e = mm;
    mm = um.now();
    const t = hm(mm);
    (t && (xm(pm.splice(0, t), (e) => e.handler()), (gm -= t)),
        gm ? (cm.flush(), lm.flush(e ? Math.min(64, mm - e) : 16.667), fm.flush(), sm.flush(), dm.flush()) : (mm = -1));
}
function km() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            ((gm += t != e || e.has(n) ? 0 : 1), e.add(n));
        },
        delete: (n) => ((gm -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (gm -= t.size), xm(t, (t) => t(n) && e.add(t)), (gm += e.size), (t = e));
        },
    };
}
function xm(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            um.catch(n);
        }
    });
}
var Om = Object.defineProperty,
    Em = {};
((e, t) => {
    for (var n in t) Om(e, n, { get: t[n], enumerable: !0 });
})(Em, {
    assign: () => Dm,
    colors: () => Lm,
    createStringInterpolator: () => Nm,
    skipAnimation: () => zm,
    to: () => Tm,
    willAdvance: () => Im,
});
var Pm = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
var Cm = (e, t) => e.forEach(t);
function Am(e, t, n) {
    if (Pm.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Nm,
    Tm,
    jm = (e) => (Pm.und(e) ? [] : Pm.arr(e) ? e : [e]),
    Rm = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    Lm = null,
    zm = !1,
    Im = function () {},
    Dm = (e) => {
        (e.to && (Tm = e.to),
            e.now && (um.now = e.now),
            void 0 !== e.colors && (Lm = e.colors),
            null != e.skipAnimation && (zm = e.skipAnimation),
            e.createStringInterpolator && (Nm = e.createStringInterpolator),
            e.requestAnimationFrame && um.use(e.requestAnimationFrame),
            e.batchedUpdates && (um.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (Im = e.willAdvance),
            e.frameLoop && (um.frameLoop = e.frameLoop));
    },
    Mm = new Set(),
    Vm = [],
    Fm = [],
    Um = 0,
    Bm = {
        get idle() {
            return !Mm.size && !Vm.length;
        },
        start(e) {
            Um > e.priority ? (Mm.add(e), um.onStart($m)) : (Wm(e), um(Km));
        },
        advance: Km,
        sort(e) {
            if (Um) um.onFrame(() => Bm.sort(e));
            else {
                const t = Vm.indexOf(e);
                ~t && (Vm.splice(t, 1), Hm(e));
            }
        },
        clear() {
            ((Vm = []), Mm.clear());
        },
    };
function $m() {
    (Mm.forEach(Wm), Mm.clear(), um(Km));
}
function Wm(e) {
    Vm.includes(e) || Hm(e);
}
function Hm(e) {
    Vm.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(Vm, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function Km(e) {
    const t = Fm;
    for (let n = 0; n < Vm.length; n++) {
        const r = Vm[n];
        ((Um = r.priority), r.idle || (Im(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((Um = 0), ((Fm = Vm).length = 0), (Vm = t).length > 0);
}
var qm = '[-+]?\\d*\\.?\\d+',
    Qm = qm + '%';
function Gm(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var Ym = new RegExp('rgb' + Gm(qm, qm, qm)),
    Xm = new RegExp('rgba' + Gm(qm, qm, qm, qm)),
    Zm = new RegExp('hsl' + Gm(qm, Qm, Qm)),
    Jm = new RegExp('hsla' + Gm(qm, Qm, Qm, qm)),
    eg = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    tg = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    ng = /^#([0-9a-fA-F]{6})$/,
    rg = /^#([0-9a-fA-F]{8})$/;
function ag(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function ig(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - r,
        i = ag(a, r, e + 1 / 3),
        o = ag(a, r, e),
        l = ag(a, r, e - 1 / 3);
    return (Math.round(255 * i) << 24) | (Math.round(255 * o) << 16) | (Math.round(255 * l) << 8);
}
function og(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function lg(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function ug(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function sg(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function cg(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = ng.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : Lm && void 0 !== Lm[e]
                ? Lm[e]
                : (t = Ym.exec(e))
                  ? ((og(t[1]) << 24) | (og(t[2]) << 16) | (og(t[3]) << 8) | 255) >>> 0
                  : (t = Xm.exec(e))
                    ? ((og(t[1]) << 24) | (og(t[2]) << 16) | (og(t[3]) << 8) | ug(t[4])) >>> 0
                    : (t = eg.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = rg.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = tg.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = Zm.exec(e))
                            ? (255 | ig(lg(t[1]), sg(t[2]), sg(t[3]))) >>> 0
                            : (t = Jm.exec(e))
                              ? (ig(lg(t[1]), sg(t[2]), sg(t[3])) | ug(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var fg = (e, t, n) => {
    if (Pm.fun(e)) return e;
    if (Pm.arr(e)) return fg({ range: e, output: t, extrapolate: n });
    if (Pm.str(e.output[0])) return Nm(e);
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
var dg = Symbol.for('FluidValue.get'),
    pg = Symbol.for('FluidValue.observers'),
    hg = (e) => Boolean(e && e[dg]),
    vg = (e) => (e && e[dg] ? e[dg]() : e);
function mg(e, t) {
    const n = e[pg];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
var gg = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            yg(this, e);
        }
    },
    yg = (e, t) => Sg(e, dg, t);
function bg(e, t) {
    if (e[dg]) {
        let n = e[pg];
        (n || Sg(e, pg, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function _g(e, t) {
    const n = e[pg];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[pg] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
var wg,
    Sg = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    kg = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    xg = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    Og = new RegExp(`(${kg.source})(%|[a-z]+)`, 'i'),
    Eg = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    Pg = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    Cg = (e) => {
        const [t, n] = Ag(e);
        if (!t || Rm()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && Pg.test(n) ? Cg(n) : n || e;
    },
    Ag = (e) => {
        const t = Pg.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    Ng = (e, t, n, r, a) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${a})`,
    Tg = (e) => {
        wg || (wg = Lm ? new RegExp(`(${Object.keys(Lm).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => vg(e).replace(Pg, Cg).replace(xg, cg).replace(wg, cg)),
            n = t.map((e) => e.match(kg).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => fg({ ...e, output: t }));
        return (e) => {
            var n;
            const a = !Og.test(t[0]) && (null == (n = t.find((e) => Og.test(e))) ? void 0 : n.replace(kg, ''));
            let i = 0;
            return t[0].replace(kg, () => `${r[i++](e)}${a || ''}`).replace(Eg, Ng);
        };
    },
    jg = 'react-spring: ',
    Rg = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${jg}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    Lg = Rg(console.warn);
function zg(e) {
    return Pm.str(e) && ('#' == e[0] || /\d/.test(e) || (!Rm() && Pg.test(e)) || e in (Lm || {}));
}
Rg(console.warn);
var Ig = Rm() ? V.useEffect : V.useLayoutEffect;
function Dg() {
    const e = V.useState()[1],
        t = (() => {
            const e = V.useRef(!1);
            return (
                Ig(
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
var Mg = [],
    Vg = Symbol.for('Animated:node'),
    Fg = (e) => e && e[Vg],
    Ug = (e, t) => {
        return ((n = e), (r = Vg), (a = t), Object.defineProperty(n, r, { value: a, writable: !0, configurable: !0 }));
        var n, r, a;
    },
    Bg = (e) => e && e[Vg] && e[Vg].getPayload(),
    $g = class {
        constructor() {
            Ug(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    Wg = class extends $g {
        constructor(e) {
            (super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                Pm.num(this._value) && (this.lastPosition = this._value));
        }
        static create(e) {
            return new Wg(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                Pm.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            ((this.done = !1),
                Pm.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null)));
        }
    },
    Hg = class extends Wg {
        constructor(e) {
            (super(0), (this._string = null), (this._toString = fg({ output: [e, e] })));
        }
        static create(e) {
            return new Hg(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (Pm.str(e)) {
                if (e == this._string) return !1;
                ((this._string = e), (this._value = 1));
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null;
            }
            return !0;
        }
        reset(e) {
            (e && (this._toString = fg({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
        }
    },
    Kg = { dependencies: null },
    qg = class extends $g {
        constructor(e) {
            (super(), (this.source = e), this.setValue(e));
        }
        getValue(e) {
            const t = {};
            return (
                Am(this.source, (n, r) => {
                    var a;
                    (a = n) && a[Vg] === a ? (t[r] = n.getValue(e)) : hg(n) ? (t[r] = vg(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            ((this.source = e), (this.payload = this._makePayload(e)));
        }
        reset() {
            this.payload && Cm(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return (Am(e, this._addToPayload, t), Array.from(t));
            }
        }
        _addToPayload(e) {
            Kg.dependencies && hg(e) && Kg.dependencies.add(e);
            const t = Bg(e);
            t && Cm(t, (e) => this.add(e));
        }
    },
    Qg = class extends qg {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new Qg(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map(Gg)), !0);
        }
    };
function Gg(e) {
    return (zg(e) ? Hg : Wg).create(e);
}
var Yg = (e, t) => {
        const n = !Pm.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return V.forwardRef((r, a) => {
            const i = V.useRef(null),
                o =
                    n &&
                    V.useCallback(
                        (e) => {
                            i.current = (function (e, t) {
                                e && (Pm.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(a, e);
                        },
                        [a],
                    ),
                [l, u] = (function (e, t) {
                    const n = new Set();
                    ((Kg.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                    return ((e = new qg(e)), (Kg.dependencies = null), [e, n]);
                })(r, t),
                s = Dg(),
                c = () => {
                    const e = i.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && s();
                },
                f = new Xg(c, u),
                d = V.useRef();
            var p;
            (Ig(
                () => (
                    (d.current = f),
                    Cm(u, (e) => bg(e, f)),
                    () => {
                        d.current && (Cm(d.current.deps, (e) => _g(e, d.current)), um.cancel(d.current.update));
                    }
                ),
            ),
                V.useEffect(c, []),
                (p = () => () => {
                    const e = d.current;
                    Cm(e.deps, (t) => _g(t, e));
                }),
                V.useEffect(p, Mg));
            const h = t.getComponentProps(l.getValue());
            return V.createElement(e, { ...h, ref: o });
        });
    },
    Xg = class {
        constructor(e, t) {
            ((this.update = e), (this.deps = t));
        }
        eventObserved(e) {
            'change' == e.type && um.write(this.update);
        }
    };
var Zg,
    Jg,
    ey = Symbol.for('AnimatedComponent'),
    ty = (e) => (Pm.str(e) ? e : e && Pm.str(e.displayName) ? e.displayName : (Pm.fun(e) && e.name) || null),
    ny = (e) => e instanceof ay,
    ry = 1,
    ay = class extends gg {
        constructor() {
            (super(...arguments), (this.id = ry++), (this._priority = 0));
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = Fg(this);
            return e && e.getValue();
        }
        to(...e) {
            return Em.to(this, e);
        }
        interpolate(...e) {
            return (Lg(`${jg}The "interpolate" function is deprecated in v9 (use "to" instead)`), Em.to(this, e));
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
            mg(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            (this.idle || Bm.sort(this), mg(this, { type: 'priority', parent: this, priority: e }));
        }
    },
    iy = ({ children: e, ...t }) => {
        const n = V.useContext(oy),
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
        const { Provider: i } = oy;
        return V.createElement(i, { value: t }, e);
    },
    oy =
        ((Zg = iy),
        (Jg = {}),
        Object.assign(Zg, V.createContext(Jg)),
        (Zg.Provider._context = Zg),
        (Zg.Consumer._context = Zg),
        Zg);
((iy.Provider = oy.Provider), (iy.Consumer = oy.Consumer));
var ly = class extends ay {
    constructor(e, t) {
        (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = fg(...t)));
        const n = this._get(),
            r = (function (e) {
                const t = Fg(e);
                return t ? t.constructor : Pm.arr(e) ? Qg : zg(e) ? Hg : Wg;
            })(n);
        Ug(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        ((function (e, t) {
            if (Pm.arr(e)) {
                if (!Pm.arr(t) || e.length !== t.length) return !1;
                for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                return !0;
            }
            return e === t;
        })(t, this.get()) || (Fg(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && sy(this._active) && cy(this));
    }
    _get() {
        const e = Pm.arr(this.source) ? this.source.map(vg) : jm(vg(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !sy(this._active) &&
            ((this.idle = !1),
            Cm(Bg(this), (e) => {
                e.done = !1;
            }),
            Em.skipAnimation ? (um.batchedUpdates(() => this.advance()), cy(this)) : Bm.start(this));
    }
    _attach() {
        let e = 1;
        (Cm(jm(this.source), (t) => {
            (hg(t) && bg(t, this), ny(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (Cm(jm(this.source), (e) => {
            hg(e) && _g(e, this);
        }),
            this._active.clear(),
            cy(this));
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = jm(this.source).reduce((e, t) => Math.max(e, (ny(t) ? t.priority : 0) + 1), 0));
    }
};
function uy(e) {
    return !1 !== e.idle;
}
function sy(e) {
    return !e.size || Array.from(e).every(uy);
}
function cy(e) {
    e.idle ||
        ((e.idle = !0),
        Cm(Bg(e), (e) => {
            e.done = !0;
        }),
        mg(e, { type: 'idle', parent: e }));
}
Em.assign({ createStringInterpolator: Tg, to: (e, t) => new ly(e, t) });
var fy = /^--/;
function dy(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || fy.test(e) || (hy.hasOwnProperty(e) && hy[e])
          ? ('' + t).trim()
          : t + 'px';
}
var py = {};
var hy = {
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
    vy = ['Webkit', 'Ms', 'Moz', 'O'];
hy = Object.keys(hy).reduce(
    (e, t) => (vy.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    hy,
);
var my = /^(matrix|translate|scale|rotate|skew)/,
    gy = /^(translate)/,
    yy = /^(rotate|skew)/,
    by = (e, t) => (Pm.num(e) && 0 !== e ? e + t : e),
    _y = (e, t) => (Pm.arr(e) ? e.every((e) => _y(e, t)) : Pm.num(e) ? e === t : parseFloat(e) === t),
    wy = class extends qg {
        constructor({ x: e, y: t, z: n, ...r }) {
            const a = [],
                i = [];
            ((e || t || n) &&
                (a.push([e || 0, t || 0, n || 0]),
                i.push((e) => [`translate3d(${e.map((e) => by(e, 'px')).join(',')})`, _y(e, 0)])),
                Am(r, (e, t) => {
                    if ('transform' === t) (a.push([e || '']), i.push((e) => [e, '' === e]));
                    else if (my.test(t)) {
                        if ((delete r[t], Pm.und(e))) return;
                        const n = gy.test(t) ? 'px' : yy.test(t) ? 'deg' : '';
                        (a.push(jm(e)),
                            i.push(
                                'rotate3d' === t
                                    ? ([e, t, r, a]) => [`rotate3d(${e},${t},${r},${by(a, n)})`, _y(a, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => by(e, n)).join(',')})`,
                                          _y(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                a.length && (r.transform = new Sy(a, i)),
                super(r));
        }
    },
    Sy = class extends gg {
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
                Cm(this.inputs, (n, r) => {
                    const a = vg(n[0]),
                        [i, o] = this.transforms[r](Pm.arr(a) ? a : n.map(vg));
                    ((e += ' ' + i), (t = t && o));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && Cm(this.inputs, (e) => Cm(e, (e) => hg(e) && bg(e, this)));
        }
        observerRemoved(e) {
            0 == e && Cm(this.inputs, (e) => Cm(e, (e) => hg(e) && _g(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), mg(this, e));
        }
    };
function ky(e, t) {
    (void 0 === t && (t = 'Illegal state'),
        e ||
            (function (e) {
                throw new Error('[mobx-utils] ' + e);
            })(t));
}
(Em.assign({
    batchedUpdates: Vf.unstable_batchedUpdates,
    createStringInterpolator: Tg,
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
            createAnimatedStyle: n = (e) => new qg(e),
            getComponentProps: r = (e) => e,
        } = {},
    ) => {
        const a = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
            i = (e) => {
                const t = ty(e) || 'Anonymous';
                return (
                    ((e = Pm.str(e) ? i[e] || (i[e] = Yg(e, a)) : e[ey] || (e[ey] = Yg(e, a))).displayName =
                        `Animated(${t})`),
                    e
                );
            };
        Am(e, (t, n) => {
            (Pm.arr(e) && (n = ty(t)), (i[n] = i(t)));
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
                            : py[t] || (py[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                    );
                void 0 !== a && (e.textContent = a);
                for (const f in r)
                    if (r.hasOwnProperty(f)) {
                        const t = dy(f, r[f]);
                        fy.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                    }
                (c.forEach((t, n) => {
                    e.setAttribute(t, s[n]);
                }),
                    void 0 !== i && (e.scrollTop = i),
                    void 0 !== o && (e.scrollLeft = o),
                    void 0 !== l && e.setAttribute('viewBox', l));
            },
            createAnimatedStyle: (e) => new wy(e),
            getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
        },
    ));
var xy,
    Oy = function (e) {
        return e && e !== Object.prototype && Object.getOwnPropertyNames(e).concat(Oy(Object.getPrototypeOf(e)) || []);
    },
    Ey = function (e) {
        return (function (e) {
            var t = Oy(e);
            return t.filter(function (e, n) {
                return t.indexOf(e) === n;
            });
        })(e).filter(function (e) {
            return 'constructor' !== e && !~e.indexOf('__');
        });
    },
    Py = 'pending',
    Cy = 'fulfilled',
    Ay = 'rejected';
function Ny(e) {
    switch (this.state) {
        case Py:
            return e.pending && e.pending(this.value);
        case Ay:
            return e.rejected && e.rejected(this.value);
        case Cy:
            return e.fulfilled ? e.fulfilled(this.value) : this.value;
    }
}
function Ty(e, t) {
    if (
        (ky(arguments.length <= 2, 'fromPromise expects up to two arguments'),
        ky(
            'function' == typeof e || ('object' == typeof e && e && 'function' == typeof e.then),
            'Please pass a promise or function to fromPromise',
        ),
        !0 === e.isPromiseBasedObservable)
    )
        return e;
    'function' == typeof e && (e = new Promise(e));
    var n = e;
    (e.then(
        Oh('observableFromPromise-resolve', function (e) {
            ((n.value = e), (n.state = Cy));
        }),
        Oh('observableFromPromise-reject', function (e) {
            ((n.value = e), (n.state = Ay));
        }),
    ),
        (n.isPromiseBasedObservable = !0),
        (n.case = Ny));
    var r = !t || (t.state !== Cy && t.state !== Py) ? void 0 : t.value;
    return (Vh(n, { value: r, state: Py }, {}, { deep: !1 }), n);
}
(((xy = Ty || (Ty = {})).reject = Oh('fromPromise.reject', function (e) {
    var t = xy(Promise.reject(e));
    return ((t.state = Ay), (t.value = e), t);
})),
    (xy.resolve = Oh('fromPromise.resolve', function (e) {
        void 0 === e && (e = void 0);
        var t = xy(Promise.resolve(e));
        return ((t.state = Cy), (t.value = e), t);
    })));
var jy = function (e, t, n, r) {
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
            lv(this),
            (function (e) {
                jp(e.name, !1, e, this, void 0);
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
        jy([wp.ref], e.prototype, 'current', void 0),
        jy([Oh.bound], e.prototype, 'next', null),
        jy([Oh.bound], e.prototype, 'complete', null),
        jy([Oh.bound], e.prototype, 'error', null));
})();
var Ry = function () {
        return (
            (Ry =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e;
                }),
            Ry.apply(this, arguments)
        );
    },
    Ly = function (e, t, n, r) {
        var a,
            i = arguments.length,
            o = i < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
        else
            for (var l = e.length - 1; l >= 0; l--)
                (a = e[l]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, n, o) : a(t, n)) || o);
        return (i > 3 && o && Object.defineProperty(t, n, o), o);
    },
    zy = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
!(function () {
    function e(e) {
        var t = this;
        (Object.defineProperty(this, 'model', { enumerable: !0, configurable: !0, writable: !0, value: e }),
            Object.defineProperty(this, 'localValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: wp.map({}),
            }),
            Object.defineProperty(this, 'localComputedValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: wp.map({}),
            }),
            Object.defineProperty(this, 'isPropertyDirty', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    return t.localValues.has(e);
                },
            }),
            lv(this),
            ky(Mv(e), 'createViewModel expects an observable object'));
        var n = Ey(this);
        Ey(e).forEach(function (r) {
            var a;
            if (!n.includes(r) && r !== Td && '__mobxDidRunLazyInitializers' !== r) {
                if (
                    (ky(
                        -1 === zy.indexOf(r),
                        'The propertyname ' + r + ' is reserved and cannot be used with viewModels',
                    ),
                    Gh(e, r))
                ) {
                    var i = Zv(e, r),
                        o = i.derivation.bind(t),
                        l = null === (a = i.setter_) || void 0 === a ? void 0 : a.bind(t);
                    t.localComputedValues.set(r, Op(o, { set: l }));
                }
                var u = Object.getOwnPropertyDescriptor(e, r),
                    s = u ? { enumerable: u.enumerable } : {};
                Object.defineProperty(
                    t,
                    r,
                    Ry(Ry({}, s), {
                        configurable: !0,
                        get: function () {
                            return Gh(e, r)
                                ? t.localComputedValues.get(r).get()
                                : t.isPropertyDirty(r)
                                  ? t.localValues.get(r)
                                  : t.model[r];
                        },
                        set: Oh(function (n) {
                            Gh(e, r)
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
                Mv(e)
                    ? e[Td].keys_()
                    : Cv(e) || Tv(e)
                      ? Array.from(e.keys())
                      : wv(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void Wf(5)).forEach(function (e) {
                    var n = t.localValues.get(e),
                        r = t.model[e];
                    wv(r) ? r.replace(n) : Cv(r) ? (r.clear(), r.merge(n)) : Qh(n) || (t.model[e] = n);
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
        Ly([Op], e.prototype, 'isDirty', null),
        Ly([Op], e.prototype, 'changedValues', null),
        Ly([Oh.bound], e.prototype, 'submit', null),
        Ly([Oh.bound], e.prototype, 'reset', null),
        Ly([Oh.bound], e.prototype, 'resetProperty', null));
})();
var Iy = (function () {
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
if (
    ((function (e) {
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
                (s._ogmInfoKey = Symbol('ogmInfo' + o)),
                (s._base = t));
            for (var c = 0; c < t.length; c++) s._addItem(t[c]);
            return (
                (s._disposeBaseObserver = Xh(s._base, function (e) {
                    if ('splice' === e.type)
                        Zh(function () {
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
                        Zh(function () {
                            (s._removeItem(e.oldValue), s._addItem(e.newValue));
                        });
                    }
                })),
                s
            );
        }
        (Iy(t, e),
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
                            ((n = wp([], { name: 'GroupArray[' + this._keyToName(t) + ']', deep: !1 })),
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
                            reaction: Nh(
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
                    (Object.defineProperty(e, this._ogmInfoKey, { configurable: !0, enumerable: !1, value: a }),
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
            }));
    })(Pv),
    !V.useState)
)
    throw new Error('mobx-react-lite requires React with Hooks support');
if (!lv) throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
function Dy(e) {
    e();
}
function My(e) {
    return Fh(Xv(e, t));
    var t;
}
var Vy = new ((function () {
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
    Fy = { exports: {} },
    Uy = {},
    By = V;
var $y =
        'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    Wy = By.useState,
    Hy = By.useEffect,
    Ky = By.useLayoutEffect,
    qy = By.useDebugValue;
function Qy(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !$y(e, n);
    } catch (r) {
        return !0;
    }
}
var Gy =
    'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
              return t();
          }
        : function (e, t) {
              var n = t(),
                  r = Wy({ inst: { value: n, getSnapshot: t } }),
                  a = r[0].inst,
                  i = r[1];
              return (
                  Ky(
                      function () {
                          ((a.value = n), (a.getSnapshot = t), Qy(a) && i({ inst: a }));
                      },
                      [e, n, t],
                  ),
                  Hy(
                      function () {
                          return (
                              Qy(a) && i({ inst: a }),
                              e(function () {
                                  Qy(a) && i({ inst: a });
                              })
                          );
                      },
                      [e],
                  ),
                  qy(n),
                  n
              );
          };
((Uy.useSyncExternalStore = void 0 !== By.useSyncExternalStore ? By.useSyncExternalStore : Gy), (Fy.exports = Uy));
var Yy,
    Xy,
    Zy = Fy.exports;
function Jy(e) {
    e.reaction = new fh('observer'.concat(e.name), function () {
        var t;
        ((e.stateVersion = Symbol()), null === (t = e.onStoreChange) || void 0 === t || t.call(e));
    });
}
var eb = 'function' == typeof Symbol && Symbol.for,
    tb =
        null !==
            (Xy =
                null === (Yy = Object.getOwnPropertyDescriptor(function () {}, 'name')) || void 0 === Yy
                    ? void 0
                    : Yy.configurable) &&
        void 0 !== Xy &&
        Xy,
    nb = eb
        ? Symbol.for('react.forward_ref')
        : 'function' == typeof V.forwardRef &&
          V.forwardRef(function (e) {
              return null;
          }).$$typeof,
    rb = eb
        ? Symbol.for('react.memo')
        : 'function' == typeof V.memo &&
          V.memo(function (e) {
              return null;
          }).$$typeof;
function ab(e, t) {
    if (rb && e.$$typeof === rb)
        throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
        );
    var n = (void 0, !1),
        r = e,
        a = e.displayName || e.name;
    if (nb && e.$$typeof === nb && ((n = !0), 'function' != typeof (r = e.render)))
        throw new Error('[mobx-react-lite] `render` property of ForwardRef was not a function');
    var i = function (e, t) {
        return (function (e, t) {
            void 0 === t && (t = 'observed');
            var n = F.useRef(null);
            if (!n.current) {
                var r = {
                    reaction: null,
                    onStoreChange: null,
                    stateVersion: Symbol(),
                    name: t,
                    subscribe: function (e) {
                        return (
                            Vy.unregister(r),
                            (r.onStoreChange = e),
                            r.reaction || (Jy(r), (r.stateVersion = Symbol())),
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
                (o.reaction || (Jy(o), Vy.register(n, o, o)),
                F.useDebugValue(o.reaction, My),
                Zy.useSyncExternalStore(o.subscribe, o.getSnapshot, o.getSnapshot),
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
        tb && Object.defineProperty(i, 'name', { value: e.name, writable: !0, configurable: !0 }),
        e.contextTypes && (i.contextTypes = e.contextTypes),
        n && (i = V.forwardRef(i)),
        (function (e, t) {
            Object.keys(e).forEach(function (n) {
                ob[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
            });
        })(e, (i = V.memo(i))),
        i
    );
}
var ib,
    ob = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function lb(e) {
    var t,
        n,
        r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
        if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = lb(e[t])) && (r && (r += ' '), (r += n));
        else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
}
((ib = Vf.unstable_batchedUpdates) || (ib = Dy), Mh({ reactionScheduler: ib }), Vy.finalizeAllImmediately);
const ub = (e) => ('boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e),
    sb = function () {
        for (var e, t, n = 0, r = ''; n < arguments.length; )
            (e = arguments[n++]) && (t = lb(e)) && (r && (r += ' '), (r += t));
        return r;
    },
    cb = (e, t) => (n) => {
        var r;
        if (null == (null == t ? void 0 : t.variants))
            return sb(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        const { variants: a, defaultVariants: i } = t,
            o = Object.keys(a).map((e) => {
                const t = null == n ? void 0 : n[e],
                    r = null == i ? void 0 : i[e];
                if (null === t) return null;
                const o = ub(t) || ub(r);
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
        return sb(e, o, u, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
    };
export {
    F as R,
    ve as a,
    ge as b,
    Ae as c,
    me as d,
    $f as e,
    Oh as f,
    Te as g,
    cb as h,
    ab as i,
    Q as j,
    wp as o,
    V as r,
    Qp as u,
};
