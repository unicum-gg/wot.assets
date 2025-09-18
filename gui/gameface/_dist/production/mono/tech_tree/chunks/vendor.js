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
    g = Symbol.iterator;
var m = {
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
    ((this.props = e), (this.context = t), (this.refs = b), (this.updater = n || m));
}
function w() {}
function k(e, t, n) {
    ((this.props = e), (this.context = t), (this.refs = b), (this.updater = n || m));
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
                : 'function' == typeof (e = (g && e[g]) || e['@@iterator'])
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
var I = { current: null },
    D = { transition: null },
    z = { ReactCurrentDispatcher: I, ReactCurrentBatchConfig: D, ReactCurrentOwner: E };
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
    (a.PureComponent = k),
    (a.StrictMode = u),
    (a.Suspense = p),
    (a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
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
        var t = D.transition;
        D.transition = {};
        try {
            e();
        } finally {
            D.transition = t;
        }
    }),
    (a.unstable_act = M),
    (a.useCallback = function (e, t) {
        return I.current.useCallback(e, t);
    }),
    (a.useContext = function (e) {
        return I.current.useContext(e);
    }),
    (a.useDebugValue = function () {}),
    (a.useDeferredValue = function (e) {
        return I.current.useDeferredValue(e);
    }),
    (a.useEffect = function (e, t) {
        return I.current.useEffect(e, t);
    }),
    (a.useId = function () {
        return I.current.useId();
    }),
    (a.useImperativeHandle = function (e, t, n) {
        return I.current.useImperativeHandle(e, t, n);
    }),
    (a.useInsertionEffect = function (e, t) {
        return I.current.useInsertionEffect(e, t);
    }),
    (a.useLayoutEffect = function (e, t) {
        return I.current.useLayoutEffect(e, t);
    }),
    (a.useMemo = function (e, t) {
        return I.current.useMemo(e, t);
    }),
    (a.useReducer = function (e, t, n) {
        return I.current.useReducer(e, t, n);
    }),
    (a.useRef = function (e) {
        return I.current.useRef(e);
    }),
    (a.useState = function (e) {
        return I.current.useState(e);
    }),
    (a.useSyncExternalStore = function (e, t, n) {
        return I.current.useSyncExternalStore(e, t, n);
    }),
    (a.useTransition = function () {
        return I.current.useTransition();
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
 */ var B = V,
    U = Symbol.for('react.element'),
    $ = Symbol.for('react.fragment'),
    W = Object.prototype.hasOwnProperty,
    H = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    K = { key: !0, ref: !0, __self: !0, __source: !0 };
function q(e, t, n) {
    var r,
        a = {},
        i = null,
        o = null;
    for (r in (void 0 !== n && (i = '' + n), void 0 !== t.key && (i = '' + t.key), void 0 !== t.ref && (o = t.ref), t))
        W.call(t, r) && !K.hasOwnProperty(r) && (a[r] = t[r]);
    if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
    return { $$typeof: U, type: e, key: i, ref: o, props: a, _owner: H.current };
}
((n.Fragment = $), (n.jsx = q), (n.jsxs = q), (t.exports = n));
var G = t.exports,
    Q = function (e, t) {
        return (Q =
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
    (Q(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())));
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
function ge(e, t) {
    if (!pe(e)) throw new te('asFunction', 'fn', 'function', e);
    t = we({ lifetime: ie.TRANSIENT }, t, e[he]);
    var n = xe(e);
    return be(ye(X({ resolve: n }, t)));
}
function me(e, t) {
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
                        (de(e) ? me(e, t) : ge(e, t)).resolve(l)
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
    Ie = {};
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
            if (null !== n(u)) ((h = !0), j(w));
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
            T = N.port2;
        ((N.port1.onmessage = A),
            (k = function () {
                T.postMessage(null);
            }));
    } else
        k = function () {
            g(A, 0);
        };
    function j(e) {
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
                      null === n(u) && r === n(s) && (v ? (m(O), (O = -1)) : (v = !0), R(_, i - o)))
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
})(Ie),
    (Le.exports = Ie));
var De = Le.exports,
    ze = V,
    Me = De;
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
    Be = {};
function Ue(e, t) {
    ($e(e, t), $e(e + 'Capture', t));
}
function $e(e, t) {
    for (Be[e] = t, e = 0; e < t.length; e++) Fe.add(t[e]);
}
var We = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    He = Object.prototype.hasOwnProperty,
    Ke =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    qe = {},
    Ge = {};
function Qe(e, t, n, r, a, i, o) {
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
        Ye[e] = new Qe(e, 0, !1, e, null, !1, !1);
    }),
    [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
        var t = e[0];
        Ye[t] = new Qe(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
        Ye[e] = new Qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
        Ye[e] = new Qe(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (e) {
            Ye[e] = new Qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
        Ye[e] = new Qe(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
        Ye[e] = new Qe(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
        Ye[e] = new Qe(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
        Ye[e] = new Qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
                  return !!He.call(Ge, e) || (!He.call(qe, e) && (Ke.test(e) ? (Ge[e] = !0) : ((qe[e] = !0), !1)));
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
        Ye[t] = new Qe(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
        var t = e.replace(Xe, Ze);
        Ye[t] = new Qe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(Xe, Ze);
        Ye[t] = new Qe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
        Ye[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Ye.xlinkHref = new Qe('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        Ye[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
var et = ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
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
var gt,
    mt = Object.assign;
function yt(e) {
    if (void 0 === gt)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            gt = (t && t[1]) || '';
        }
    return '\n' + gt + e;
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
function kt(e) {
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
                return null !== (t = e.displayName || null) ? t : kt(e.type) || 'Memo';
            case dt:
                ((t = e._payload), (e = e._init));
                try {
                    return kt(e(t));
                } catch (n) {}
        }
    return null;
}
function St(e) {
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
            return kt(t);
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
    return mt({}, t, {
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
var It = Array.isArray;
function Dt(e, t, n, r) {
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
function zt(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(Ve(91));
    return mt({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Mt(e, t) {
    var n = t.value;
    if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(Ve(92));
            if (It(n)) {
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
function Bt(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}
function Ut(e, t) {
    return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? Bt(t)
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
    Gt = ['Webkit', 'ms', 'Moz', 'O'];
function Qt(e, t, n) {
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
                a = Qt(n, t[n], r);
            ('float' === n && (n = 'cssFloat'), r ? e.setProperty(n, a) : (e[n] = a));
        }
}
Object.keys(qt).forEach(function (e) {
    Gt.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qt[t] = qt[e]));
    });
});
var Xt = mt(
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
function gn(e, t, n, r, a, i, o, l, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s);
    } catch (c) {
        this.onError(c);
    }
}
var mn = !1,
    yn = null,
    bn = !1,
    _n = null,
    wn = {
        onError: function (e) {
            ((mn = !0), (yn = e));
        },
    };
function kn(e, t, n, r, a, i, o, l, u) {
    ((mn = !1), (yn = null), gn.apply(wn, arguments));
}
function Sn(e) {
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
    if (Sn(e) !== e) throw Error(Ve(188));
}
function En(e) {
    return null !==
        (e = (function (e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = Sn(e))) throw Error(Ve(188));
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
    In = Me.unstable_UserBlockingPriority,
    Dn = Me.unstable_NormalPriority,
    zn = Me.unstable_LowPriority,
    Mn = Me.unstable_IdlePriority,
    Vn = null,
    Fn = null;
var Bn = Math.clz32
        ? Math.clz32
        : function (e) {
              return ((e >>>= 0), 0 === e ? 32 : (31 - ((Un(e) / $n) | 0)) | 0);
          },
    Un = Math.log,
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
        for (e = e.entanglements, t &= r; 0 < t; ) ((a = 1 << (n = 31 - Bn(t))), (r |= e[n]), (t &= ~a));
    return r;
}
function Gn(e, t) {
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
function Qn(e) {
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
        ((e = e.eventTimes)[(t = 31 - Bn(t))] = n));
}
function Jn(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Bn(n),
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
function gr(e, t) {
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
function mr(e, t, n, r, a, i) {
    return null === e || e.nativeEvent !== i
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }),
          null !== t && null !== (t = Ji(t)) && rr(t),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== a && -1 === t.indexOf(a) && t.push(a), e);
}
function yr(e) {
    var t = Zi(e.target);
    if (null !== t) {
        var n = Sn(t);
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
function kr(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), lr || ((lr = !0), Me.unstable_scheduleCallback(Me.unstable_NormalPriority, wr)));
}
function Sr(e) {
    function t(t) {
        return kr(t, e);
    }
    if (0 < ur.length) {
        kr(ur[0], e);
        for (var n = 1; n < ur.length; n++) {
            var r = ur[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        null !== sr && kr(sr, e),
            null !== cr && kr(cr, e),
            null !== fr && kr(fr, e),
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
        if (null === a) (xi(e, t, r, Ar, n), gr(e, r));
        else if (
            (function (e, t, n, r, a) {
                switch (t) {
                    case 'focusin':
                        return ((sr = mr(sr, e, t, n, r, a)), !0);
                    case 'dragenter':
                        return ((cr = mr(cr, e, t, n, r, a)), !0);
                    case 'mouseover':
                        return ((fr = mr(fr, e, t, n, r, a)), !0);
                    case 'pointerover':
                        var i = a.pointerId;
                        return (dr.set(i, mr(dr.get(i) || null, e, t, n, r, a)), !0);
                    case 'gotpointercapture':
                        return ((i = a.pointerId), pr.set(i, mr(pr.get(i) || null, e, t, n, r, a)), !0);
                }
                return !1;
            })(a, e, t, n, r)
        )
            r.stopPropagation();
        else if ((gr(e, r), 4 & t && -1 < vr.indexOf(e))) {
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
        if (null === (t = Sn(e))) e = null;
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
                case In:
                    return 4;
                case Dn:
                case zn:
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
function Ir() {
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
function Dr(e) {
    var t = e.keyCode;
    return (
        'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
    );
}
function zr() {
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
                ? zr
                : Mr),
            (this.isPropagationStopped = Mr),
            this
        );
    }
    return (
        mt(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                    (e.preventDefault ? e.preventDefault() : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
                    (this.isDefaultPrevented = zr));
            },
            stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                    (e.stopPropagation
                        ? e.stopPropagation()
                        : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                    (this.isPropagationStopped = zr));
            },
            persist: function () {},
            isPersistent: zr,
        }),
        t
    );
}
var Fr,
    Br,
    Ur,
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
    Hr = mt({}, $r, { view: 0, detail: 0 }),
    Kr = Vr(Hr),
    qr = mt({}, Hr, {
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
                : (e !== Ur &&
                      (Ur && 'mousemove' === e.type
                          ? ((Fr = e.screenX - Ur.screenX), (Br = e.screenY - Ur.screenY))
                          : (Br = Fr = 0),
                      (Ur = e)),
                  Fr);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : Br;
        },
    }),
    Gr = Vr(qr),
    Qr = Vr(mt({}, qr, { dataTransfer: 0 })),
    Yr = Vr(mt({}, Hr, { relatedTarget: 0 })),
    Xr = Vr(mt({}, $r, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    Zr = mt({}, $r, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    Jr = Vr(Zr),
    ea = Vr(mt({}, $r, { data: 0 })),
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
var oa = mt({}, Hr, {
        key: function (e) {
            if (e.key) {
                var t = ta[e.key] || e.key;
                if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
                ? 13 === (e = Dr(e))
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
            return 'keypress' === e.type ? Dr(e) : 0;
        },
        keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
        which: function (e) {
            return 'keypress' === e.type ? Dr(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
    }),
    la = Vr(oa),
    ua = Vr(
        mt({}, qr, {
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
        mt({}, Hr, {
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
    ca = Vr(mt({}, $r, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    fa = mt({}, qr, {
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
var ga = We && 'TextEvent' in window && !va,
    ma = We && (!ha || (va && 8 < va && 11 >= va)),
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
var ka = !1;
var Sa = {
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
    return 'input' === t ? !!Sa[e.type] : 'textarea' === t;
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
function Ia() {
    Ea && (Ea.detachEvent('onpropertychange', Da), (Pa = Ea = null));
}
function Da(e) {
    if ('value' === e.propertyName && Aa(Pa)) {
        var t = [];
        (Oa(t, Pa, e, tn(e)), dn(Ca, t));
    }
}
function za(e, t, n) {
    'focusin' === e ? (Ia(), (Pa = n), (Ea = t).attachEvent('onpropertychange', Da)) : 'focusout' === e && Ia();
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
var Ba =
    'function' == typeof Object.is
        ? Object.is
        : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
          };
function Ua(e, t) {
    if (Ba(e, t)) return !0;
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var a = n[r];
        if (!He.call(t, a) || !Ba(e[a], t[a])) return !1;
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
function Ga(e) {
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
var Qa = We && 'documentMode' in document && 11 >= document.documentMode,
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
        (Za && Ua(Za, r)) ||
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
    (ci.set(e, t), Ue(t, [e]));
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
    Ue('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Ue('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    Ue('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Ue('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Ue('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    Ue('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
var vi =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' ',
        ),
    gi = new Set('cancel close invalid load scroll toggle'.split(' ').concat(vi));
function mi(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n),
        (function (e, t, n, r, a, i, o, l, u) {
            if ((kn.apply(this, arguments), mn)) {
                if (!mn) throw Error(Ve(198));
                var s = yn;
                ((mn = !1), (yn = null), bn || ((bn = !0), (_n = s)));
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
                    (mi(a, l, s), (i = u));
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
                    (mi(a, l, s), (i = u));
                }
        }
    }
    if (bn) throw ((e = _n), (bn = !1), (_n = null), e);
}
function bi(e, t) {
    var n = t[Qi];
    void 0 === n && (n = t[Qi] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Si(t, e, 2, !1), n.add(r));
}
function _i(e, t, n) {
    var r = 0;
    (t && (r |= 4), Si(n, e, r, t));
}
var wi = '_reactListening' + Math.random().toString(36).slice(2);
function ki(e) {
    if (!e[wi]) {
        ((e[wi] = !0),
            Fe.forEach(function (t) {
                'selectionchange' !== t && (gi.has(t) || _i(t, !1, e), _i(t, !0, e));
            }));
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[wi] || ((t[wi] = !0), _i('selectionchange', !1, t));
    }
}
function Si(e, t, n, r) {
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
                        if (0 === Dr(n)) break e;
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
                        u = Gr;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        u = Qr;
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
                    (!Zi(s) && !s[Gi])) &&
                    (u || l) &&
                    ((l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window),
                    u
                        ? ((u = r),
                          null !== (s = (s = n.relatedTarget || n.toElement) ? Zi(s) : null) &&
                              (s !== (f = Sn(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                              (s = null))
                        : ((u = null), (s = r)),
                    u !== s))
            ) {
                if (
                    ((c = Gr),
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
                var g = Na;
            else if (xa(l))
                if (Ta) g = Fa;
                else {
                    g = Ma;
                    var m = za;
                }
            else
                (u = l.nodeName) &&
                    'input' === u.toLowerCase() &&
                    ('checkbox' === l.type || 'radio' === l.type) &&
                    (g = Va);
            switch (
                (g && (g = g(e, r))
                    ? Oa(o, g, n, a)
                    : (m && m(e, l, r),
                      'focusout' === e &&
                          (m = l._wrapperState) &&
                          m.controlled &&
                          'number' === l.type &&
                          Lt(l, 'number', l.value)),
                (m = r ? eo(r) : window),
                e)
            ) {
                case 'focusin':
                    (xa(m) || 'true' === m.contentEditable) && ((Ya = m), (Xa = r), (Za = null));
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
                    if (Qa) break;
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
                ka
                    ? _a(e, n) && (b = 'onCompositionEnd')
                    : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
            (b &&
                (ma &&
                    'ko' !== n.locale &&
                    (ka || 'onCompositionStart' !== b
                        ? 'onCompositionEnd' === b && ka && (y = Ir())
                        : ((Rr = 'value' in (jr = a) ? jr.value : jr.textContent), (ka = !0))),
                0 < (m = Ei(r, b)).length &&
                    ((b = new ea(b, e, null, n, a)),
                    o.push({ event: b, listeners: m }),
                    y ? (b.data = y) : null !== (y = wa(n)) && (b.data = y))),
                (y = ga
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
                          if (ka)
                              return 'compositionend' === e || (!ha && _a(e, t))
                                  ? ((e = Ir()), (Lr = Rr = jr = null), (ka = !1), e)
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
                                  return ma && 'ko' !== t.locale ? null : t.data;
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
    Ii = null;
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
var zi = 'function' == typeof setTimeout ? setTimeout : void 0,
    Mi = 'function' == typeof clearTimeout ? clearTimeout : void 0,
    Vi = 'function' == typeof Promise ? Promise : void 0,
    Fi =
        'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== Vi
              ? function (e) {
                    return Vi.resolve(null).then(e).catch(Bi);
                }
              : zi;
function Bi(e) {
    setTimeout(function () {
        throw e;
    });
}
function Ui(e, t) {
    var n = t,
        r = 0;
    do {
        var a = n.nextSibling;
        if ((e.removeChild(n), a && 8 === a.nodeType))
            if ('/$' === (n = a.data)) {
                if (0 === r) return (e.removeChild(a), void Sr(t));
                r--;
            } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
        n = a;
    } while (n);
    Sr(t);
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
    Gi = '__reactContainer$' + Hi,
    Qi = '__reactEvents$' + Hi,
    Yi = '__reactListeners$' + Hi,
    Xi = '__reactHandles$' + Hi;
function Zi(e) {
    var t = e[Ki];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Gi] || n[Ki])) {
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
    return !(e = e[Ki] || e[Gi]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
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
function go(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
    for (var a in (r = r.getChildContext())) if (!(a in t)) throw Error(Ve(108, St(e) || 'Unknown', a));
    return mt({}, n, r);
}
function mo(e) {
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
    (n ? ((e = go(e, t, co)), (r.__reactInternalMemoizedMergedChildContext = e), io(so), io(uo), oo(uo, e)) : io(so),
        oo(so, n));
}
var bo = null,
    _o = !1,
    wo = !1;
function ko(e) {
    null === bo ? (bo = [e]) : bo.push(e);
}
function So() {
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
            throw (null !== bo && (bo = bo.slice(e + 1)), Cn(Ln, So), a);
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
    var a = 32 - Bn(r) - 1;
    ((r &= ~(1 << a)), (n += 1));
    var i = 32 - Bn(t) + a;
    if (30 < i) {
        var o = a - (a % 5);
        ((i = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (a -= o),
            (To = (1 << (32 - Bn(t) + a)) | (n << a) | r),
            (jo = i + e));
    } else ((To = (1 << i) | (n << a) | r), (jo = e));
}
function Io(e) {
    null !== e.return && (Ro(e, 1), Lo(e, 1, 0));
}
function Do(e) {
    for (; e === Eo; ) ((Eo = xo[--Oo]), (xo[Oo] = null), (Po = xo[--Oo]), (xo[Oo] = null));
    for (; e === No; )
        ((No = Co[--Ao]), (Co[Ao] = null), (jo = Co[--Ao]), (Co[Ao] = null), (To = Co[--Ao]), (Co[Ao] = null));
}
var zo = null,
    Mo = null,
    Vo = !1,
    Fo = null;
function Bo(e, t) {
    var n = df(5, null, null, 0);
    ((n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Uo(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (zo = e), (Mo = $i(t.firstChild)), !0)
            );
        case 6:
            return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (zo = e), (Mo = null), !0)
            );
        case 13:
            return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== No ? { id: To, overflow: jo } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = df(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (zo = e),
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
            if (!Uo(e, t)) {
                if ($o(e)) throw Error(Ve(418));
                t = $i(n.nextSibling);
                var r = zo;
                t && Uo(e, t) ? Bo(r, n) : ((e.flags = (-4097 & e.flags) | 2), (Vo = !1), (zo = e));
            }
        } else {
            if ($o(e)) throw Error(Ve(418));
            ((e.flags = (-4097 & e.flags) | 2), (Vo = !1), (zo = e));
        }
    }
}
function Ho(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
    zo = e;
}
function Ko(e) {
    if (e !== zo) return !1;
    if (!Vo) return (Ho(e), (Vo = !0), !1);
    var t;
    if (
        ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = 'head' !== (t = e.type) && 'body' !== t && !Di(e.type, e.memoizedProps)),
        t && (t = Mo))
    ) {
        if ($o(e)) throw (qo(), Error(Ve(418)));
        for (; t; ) (Bo(e, t), (t = $i(t.nextSibling)));
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
    } else Mo = zo ? $i(e.stateNode.nextSibling) : null;
    return !0;
}
function qo() {
    for (var e = Mo; e; ) e = $i(e.nextSibling);
}
function Go() {
    ((Mo = zo = null), (Vo = !1));
}
function Qo(e) {
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
            ? (((t = gf(n, e.mode, r, i)).return = e), t)
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
            if (It(t) || vt(t)) return (((t = gf(t, e.mode, n, null)).return = e), t);
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
            if (It(n) || vt(n)) return null !== a ? null : c(e, t, n, r, null);
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
            if (It(r) || vt(r)) return c(t, (e = e.get(n) || null), r, a, null);
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
                        for (var v = c.key, g = s; null !== g; ) {
                            if (g.key === v) {
                                if ((v = c.type) === rt) {
                                    if (7 === g.tag) {
                                        (n(u, g.sibling), ((s = a(g, c.props.children)).return = u), (u = s));
                                        break e;
                                    }
                                } else if (
                                    g.elementType === v ||
                                    ('object' == typeof v && null !== v && v.$$typeof === dt && Jo(v) === g.type)
                                ) {
                                    (n(u, g.sibling), ((s = a(g, c.props)).ref = Xo(u, g, c)), (s.return = u), (u = s));
                                    break e;
                                }
                                n(u, g);
                                break;
                            }
                            (t(u, g), (g = g.sibling));
                        }
                        c.type === rt
                            ? (((s = gf(c.props.children, u.mode, h, c.key)).return = u), (u = s))
                            : (((h = vf(c.type, c.key, c.props, null, u.mode, h)).ref = Xo(u, s, c)),
                              (h.return = u),
                              (u = h));
                    }
                    return o(u);
                case nt:
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
                        (((s = bf(c, u.mode, h)).return = u), (u = s));
                    }
                    return o(u);
                case dt:
                    return l(u, s, (g = c._init)(c._payload), h);
            }
            if (It(c))
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
                    if (v === l.length) return (n(a, h), Vo && Ro(a, v), s);
                    if (null === h) {
                        for (; v < l.length; v++)
                            null !== (h = f(a, l[v], u)) &&
                                ((o = i(h, o, v)), null === c ? (s = h) : (c.sibling = h), (c = h));
                        return (Vo && Ro(a, v), s);
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
                    if (m.done) return (n(a, h), Vo && Ro(a, v), s);
                    if (null === h) {
                        for (; !m.done; v++, m = l.next())
                            null !== (m = f(a, m.value, u)) &&
                                ((o = i(m, o, v)), null === c ? (s = m) : (c.sibling = m), (c = m));
                        return (Vo && Ro(a, v), s);
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
var gl = !1;
function ml(e) {
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
function kl(e, t) {
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
function Sl(e, t, n, r) {
    var a = e.updateQueue;
    gl = !1;
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
                            f = mt({}, f, d);
                            break e;
                        case 2:
                            gl = !0;
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
        ((gc |= o), (e.lanes = o), (e.memoizedState = f));
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
            t = (t = t.documentElement) ? t.namespaceURI : Ut(null, '');
            break;
        default:
            t = Ut((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
    }
    (io(El), oo(El, t));
}
function Tl() {
    (io(El), io(Pl), io(Cl));
}
function jl(e) {
    Al(Cl.current);
    var t = Al(El.current),
        n = Ut(t, e.type);
    t !== n && (oo(Pl, e), oo(El, n));
}
function Rl(e) {
    Pl.current === e && (io(El), io(Pl));
}
var Ll = ao(0);
function Il(e) {
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
var Dl = [];
function zl() {
    for (var e = 0; e < Dl.length; e++) Dl[e]._workInProgressVersionPrimary = null;
    Dl.length = 0;
}
var Ml = et.ReactCurrentDispatcher,
    Vl = et.ReactCurrentBatchConfig,
    Fl = 0,
    Bl = null,
    Ul = null,
    $l = null,
    Wl = !1,
    Hl = !1,
    Kl = 0,
    ql = 0;
function Gl() {
    throw Error(Ve(321));
}
function Ql(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ba(e[n], t[n])) return !1;
    return !0;
}
function Yl(e, t, n, r, a, i) {
    if (
        ((Fl = i),
        (Bl = t),
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
            ((i += 1), ($l = Ul = null), (t.updateQueue = null), (Ml.current = Iu), (e = n(r, a)));
        } while (Hl);
    }
    if (((Ml.current = ju), (t = null !== Ul && null !== Ul.next), (Fl = 0), ($l = Ul = Bl = null), (Wl = !1), t))
        throw Error(Ve(300));
    return e;
}
function Xl() {
    var e = 0 !== Kl;
    return ((Kl = 0), e);
}
function Zl() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (null === $l ? (Bl.memoizedState = $l = e) : ($l = $l.next = e), $l);
}
function Jl() {
    if (null === Ul) {
        var e = Bl.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = Ul.next;
    var t = null === $l ? Bl.memoizedState : $l.next;
    if (null !== t) (($l = t), (Ul = e));
    else {
        if (null === e) throw Error(Ve(310));
        ((e = {
            memoizedState: (Ul = e).memoizedState,
            baseState: Ul.baseState,
            baseQueue: Ul.baseQueue,
            queue: Ul.queue,
            next: null,
        }),
            null === $l ? (Bl.memoizedState = $l = e) : ($l = $l.next = e));
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
    var r = Ul,
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
                (null === u ? ((l = u = f), (o = r)) : (u = u.next = f), (Bl.lanes |= c), (gc |= c));
            }
            s = s.next;
        } while (null !== s && s !== i);
        (null === u ? (o = r) : (u.next = l),
            Ba(r, t.memoizedState) || (Ju = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = u),
            (n.lastRenderedState = r));
    }
    if (null !== (e = n.interleaved)) {
        a = e;
        do {
            ((i = a.lane), (Bl.lanes |= i), (gc |= i), (a = a.next));
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
        (Ba(i, t.memoizedState) || (Ju = !0),
            (t.memoizedState = i),
            null === t.baseQueue && (t.baseState = i),
            (n.lastRenderedState = i));
    }
    return [i, r];
}
function ru() {}
function au(e, t) {
    var n = Bl,
        r = Jl(),
        a = t(),
        i = !Ba(r.memoizedState, a);
    if (
        (i && ((r.memoizedState = a), (Ju = !0)),
        (r = r.queue),
        gu(lu.bind(null, n, r, e), [e]),
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
        null === (t = Bl.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (Bl.updateQueue = t), (t.stores = [e]))
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
        return !Ba(e, n);
    } catch (r) {
        return !0;
    }
}
function su(e) {
    var t = vl(e, 1);
    null !== t && Dc(t, e, 1, -1);
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
        (e = e.dispatch = Cu.bind(null, Bl, e)),
        [t.memoizedState, e]
    );
}
function fu(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = Bl.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (Bl.updateQueue = t), (t.lastEffect = e.next = e))
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
    ((Bl.flags |= e), (a.memoizedState = fu(1 | t, n, void 0, void 0 === r ? null : r)));
}
function hu(e, t, n, r) {
    var a = Jl();
    r = void 0 === r ? null : r;
    var i = void 0;
    if (null !== Ul) {
        var o = Ul.memoizedState;
        if (((i = o.destroy), null !== r && Ql(r, o.deps))) return void (a.memoizedState = fu(t, n, i, r));
    }
    ((Bl.flags |= e), (a.memoizedState = fu(1 | t, n, i, r)));
}
function vu(e, t) {
    return pu(8390656, 8, e, t);
}
function gu(e, t) {
    return hu(2048, 8, e, t);
}
function mu(e, t) {
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
function ku(e, t) {
    var n = Jl();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Ql(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Su(e, t) {
    var n = Jl();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Ql(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function xu(e, t, n) {
    return 0 == (21 & Fl)
        ? (e.baseState && ((e.baseState = !1), (Ju = !0)), (e.memoizedState = n))
        : (Ba(n, t) || ((n = Yn()), (Bl.lanes |= n), (gc |= n), (e.baseState = !0)), t);
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
    var r = Ic(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Au(e))) Nu(t, n);
    else if (null !== (n = hl(e, t, n, r))) {
        (Dc(n, e, r, Lc()), Tu(n, t, r));
    }
}
function Cu(e, t, n) {
    var r = Ic(e),
        a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Au(e)) Nu(t, a);
    else {
        var i = e.alternate;
        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer))
            try {
                var o = t.lastRenderedState,
                    l = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), Ba(l, o))) {
                    var u = t.interleaved;
                    return (
                        null === u ? ((a.next = a), pl(t)) : ((a.next = u.next), (u.next = a)),
                        void (t.interleaved = a)
                    );
                }
            } catch (s) {}
        null !== (n = hl(e, t, a, r)) && (Dc(n, e, r, (a = Lc())), Tu(n, t, r));
    }
}
function Au(e) {
    var t = e.alternate;
    return e === Bl || (null !== t && t === Bl);
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
        useCallback: Gl,
        useContext: Gl,
        useEffect: Gl,
        useImperativeHandle: Gl,
        useInsertionEffect: Gl,
        useLayoutEffect: Gl,
        useMemo: Gl,
        useReducer: Gl,
        useRef: Gl,
        useState: Gl,
        useDebugValue: Gl,
        useDeferredValue: Gl,
        useTransition: Gl,
        useMutableSource: Gl,
        useSyncExternalStore: Gl,
        useId: Gl,
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
                (e = e.dispatch = Pu.bind(null, Bl, e)),
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
            var r = Bl,
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
                ((t = ':' + t + 'R' + (n = (To & ~(1 << (32 - Bn(To) - 1))).toString(32) + n)),
                    0 < (n = Kl++) && (t += 'H' + n.toString(32)),
                    (t += ':'));
            } else t = ':' + t + 'r' + (n = ql++).toString(32) + ':';
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Lu = {
        readContext: fl,
        useCallback: ku,
        useContext: fl,
        useEffect: gu,
        useImperativeHandle: _u,
        useInsertionEffect: mu,
        useLayoutEffect: yu,
        useMemo: Su,
        useReducer: tu,
        useRef: du,
        useState: function () {
            return tu(eu);
        },
        useDebugValue: wu,
        useDeferredValue: function (e) {
            return xu(Jl(), Ul.memoizedState, e);
        },
        useTransition: function () {
            return [tu(eu)[0], Jl().memoizedState];
        },
        useMutableSource: ru,
        useSyncExternalStore: au,
        useId: Eu,
        unstable_isNewReconciler: !1,
    },
    Iu = {
        readContext: fl,
        useCallback: ku,
        useContext: fl,
        useEffect: gu,
        useImperativeHandle: _u,
        useInsertionEffect: mu,
        useLayoutEffect: yu,
        useMemo: Su,
        useReducer: nu,
        useRef: du,
        useState: function () {
            return nu(eu);
        },
        useDebugValue: wu,
        useDeferredValue: function (e) {
            var t = Jl();
            return null === Ul ? (t.memoizedState = e) : xu(t, Ul.memoizedState, e);
        },
        useTransition: function () {
            return [nu(eu)[0], Jl().memoizedState];
        },
        useMutableSource: ru,
        useSyncExternalStore: au,
        useId: Eu,
        unstable_isNewReconciler: !1,
    };
function Du(e, t) {
    if (e && e.defaultProps) {
        for (var n in ((t = mt({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
    }
    return t;
}
function zu(e, t, n, r) {
    ((n = null == (n = n(r, (t = e.memoizedState))) ? t : mt({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n));
}
var Mu = {
    isMounted: function (e) {
        return !!(e = e._reactInternals) && Sn(e) === e;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Lc(),
            a = Ic(e),
            i = bl(r, a);
        ((i.payload = t), null != n && (i.callback = n), null !== (t = _l(e, i, a)) && (Dc(t, e, a, r), wl(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Lc(),
            a = Ic(e),
            i = bl(r, a);
        ((i.tag = 1),
            (i.payload = t),
            null != n && (i.callback = n),
            null !== (t = _l(e, i, a)) && (Dc(t, e, a, r), wl(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Lc(),
            r = Ic(e),
            a = bl(n, r);
        ((a.tag = 2), null != t && (a.callback = t), null !== (t = _l(e, a, r)) && (Dc(t, e, r, n), wl(t, e, r)));
    },
};
function Vu(e, t, n, r, a, i, o) {
    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, i, o)
        : !t.prototype || !t.prototype.isPureReactComponent || !Ua(n, r) || !Ua(a, i);
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
function Bu(e, t, n, r) {
    ((e = t.state),
        'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Mu.enqueueReplaceState(t, t.state, null));
}
function Uu(e, t, n, r) {
    var a = e.stateNode;
    ((a.props = n), (a.state = e.memoizedState), (a.refs = {}), ml(e));
    var i = t.contextType;
    ('object' == typeof i && null !== i ? (a.context = fl(i)) : ((i = po(t) ? co : uo.current), (a.context = fo(e, i))),
        (a.state = e.memoizedState),
        'function' == typeof (i = t.getDerivedStateFromProps) && (zu(e, t, i, n), (a.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof a.getSnapshotBeforeUpdate ||
            ('function' != typeof a.UNSAFE_componentWillMount && 'function' != typeof a.componentWillMount) ||
            ((t = a.state),
            'function' == typeof a.componentWillMount && a.componentWillMount(),
            'function' == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
            t !== a.state && Mu.enqueueReplaceState(a, a.state, null),
            Sl(e, n, a, r),
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
function Gu(e, t, n) {
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
function Qu(e, t, n) {
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
            ? (Vo && n && Io(t), (t.flags |= 1), es(e, t, r, a), t.child)
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
        if ((n = null !== (n = n.compare) ? n : Ua)(o, r) && e.ref === t.ref) return xs(e, t, a);
    }
    return ((t.flags |= 1), ((e = hf(i, r)).ref = t.ref), (e.return = t), (t.child = e));
}
function rs(e, t, n, r, a) {
    if (null !== e) {
        var i = e.memoizedProps;
        if (Ua(i, r) && e.ref === t.ref) {
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
            ? (Vo && r && Io(t), (t.flags |= 1), es(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), xs(e, t, a))
    );
}
function ls(e, t, n, r, a) {
    if (po(n)) {
        var i = !0;
        mo(t);
    } else i = !1;
    if ((cl(t, a), null === t.stateNode)) (Ss(e, t), Fu(t, n, r), Uu(t, n, r, a), (r = !0));
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
            ((l !== r || u !== s) && Bu(t, o, r, s)),
            (gl = !1));
        var d = t.memoizedState;
        ((o.state = d),
            Sl(t, r, o, a),
            (u = t.memoizedState),
            l !== r || d !== u || so.current || gl
                ? ('function' == typeof c && (zu(t, n, c, r), (u = t.memoizedState)),
                  (l = gl || Vu(t, n, l, r, d, u, s))
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
            (s = t.type === t.elementType ? l : Du(t.type, l)),
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
            ((l !== f || d !== u) && Bu(t, o, r, u)),
            (gl = !1),
            (d = t.memoizedState),
            (o.state = d),
            Sl(t, r, o, a));
        var h = t.memoizedState;
        l !== f || d !== h || so.current || gl
            ? ('function' == typeof p && (zu(t, n, p, r), (h = t.memoizedState)),
              (s = gl || Vu(t, n, s, r, d, h, u) || !1)
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
    return (Go(), Qo(a), (t.flags |= 256), es(e, t, n, r), t.child);
}
var fs,
    ds,
    ps,
    hs,
    vs = { dehydrated: null, treeContext: null, retryLane: 0 };
function gs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function ms(e, t, n) {
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
                            : (o = mf(l, a, 0, null)),
                        (e = gf(e, a, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = gs(n)),
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
                        (r = mf({ mode: 'visible', children: r.children }, a, 0, null)),
                        ((i = gf(i, a, o, null)).flags |= 2),
                        (r.return = t),
                        (i.return = t),
                        (r.sibling = i),
                        (t.child = r),
                        0 != (1 & t.mode) && tl(t, e.child, null, o),
                        (t.child.memoizedState = gs(o)),
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
                        ((i.retryLane = a), vl(e, a), Dc(r, e, a, -1));
                }
                return (Qc(), bs(e, t, o, (r = Wu(Error(Ve(421))))));
            }
            return '$?' === a.data
                ? ((t.flags |= 128), (t.child = e.child), (t = uf.bind(null, e)), (a._reactRetry = t), null)
                : ((e = i.treeContext),
                  (Mo = $i(a.nextSibling)),
                  (zo = t),
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
            null !== r ? (o = hf(r, o)) : ((o = gf(o, l, n, null)).flags |= 2),
            (o.return = t),
            (a.return = t),
            (a.sibling = o),
            (t.child = a),
            (a = o),
            (o = t.child),
            (l =
                null === (l = e.child.memoizedState)
                    ? gs(n)
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
    return (((t = mf({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t));
}
function bs(e, t, n, r) {
    return (
        null !== r && Qo(r),
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
function ks(e, t, n) {
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
                    (null !== (e = n.alternate) && null === Il(e) && (a = n), (n = n.sibling));
                (null === (n = a) ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)),
                    ws(t, !1, a, n, i));
                break;
            case 'backwards':
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                    if (null !== (e = a.alternate) && null === Il(e)) {
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
function Ss(e, t) {
    0 == (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function xs(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (gc |= t.lanes), 0 == (n & t.childLanes))) return null;
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
    switch ((Do(t), t.tag)) {
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
                zl(),
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
                                : Be.hasOwnProperty(o) && null != l && 'onScroll' === o && bi('scroll', r);
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
                        'http://www.w3.org/1999/xhtml' === e && (e = Bt(n)),
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
                                    (a = mt({}, r, { value: void 0 })),
                                    bi('invalid', e));
                                break;
                            case 'textarea':
                                (Mt(e, r), (a = zt(e, r)), bi('invalid', e));
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
                                          (Be.hasOwnProperty(i)
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
                                        ? Dt(e, !!r.multiple, i, !1)
                                        : null != r.defaultValue && Dt(e, !!r.multiple, r.defaultValue, !0));
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
                        (i = r.nodeValue !== n) && null !== (e = zo))
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
                    (qo(), Go(), (t.flags |= 98560), (i = !1));
                else if (((i = Ko(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!i) throw Error(Ve(318));
                        if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(Ve(317));
                        i[Ki] = t;
                    } else (Go(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                    (Es(t), (i = !1));
                } else (null !== Fo && (Fc(Fo), (Fo = null)), (i = !0));
                if (!i) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) && (null === e || 0 != (1 & Ll.current) ? 0 === hc && (hc = 3) : Qc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Es(t),
                  null);
        case 4:
            return (Tl(), ds(e, t), null === e && ki(t.stateNode.containerInfo), Es(t), null);
        case 10:
            return (ul(t.type._context), Es(t), null);
        case 19:
            if ((io(Ll), null === (i = t.memoizedState))) return (Es(t), null);
            if (((r = 0 != (128 & t.flags)), null === (o = i.rendering)))
                if (r) Os(i, !1);
                else {
                    if (0 !== hc || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (o = Il(e))) {
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
                    null !== i.tail && jn() > kc && ((t.flags |= 128), (r = !0), Os(i, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = Il(o))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            Os(i, !0),
                            null === i.tail && 'hidden' === i.tailMode && !o.alternate && !Vo)
                        )
                            return (Es(t), null);
                    } else
                        2 * jn() - i.renderingStartTime > kc &&
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
    switch ((Do(t), t.tag)) {
        case 1:
            return (po(t.type) && ho(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null);
        case 3:
            return (
                Tl(),
                io(so),
                io(uo),
                zl(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 5:
            return (Rl(t), null);
        case 13:
            if ((io(Ll), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(Ve(340));
                Go();
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
                    ((a = mt({}, a, { value: void 0 })), (r = mt({}, r, { value: void 0 })), (o = []));
                    break;
                case 'textarea':
                    ((a = zt(e, a)), (r = zt(e, r)), (o = []));
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
                            (Be.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
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
                                (Be.hasOwnProperty(s)
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
var Is = !1;
function Ds(e, t, n) {
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
function zs(e, t) {
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
            (delete t[Ki], delete t[qi], delete t[Qi], delete t[Yi], delete t[Xi]),
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
function Bs(e) {
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
function Us(e, t, n) {
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
        for (Us(e, t, n), e = e.sibling; null !== e; ) (Us(e, t, n), (e = e.sibling));
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
                      8 === e.nodeType ? Ui(e.parentNode, n) : 1 === e.nodeType && Ui(e, n),
                      Sr(e))
                    : Ui(Ws, n.stateNode));
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
function Gs(e) {
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
function Qs(e, t) {
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
            if ((Qs(t, e), Xs(e), 4 & r)) {
                try {
                    (Ds(3, e, e.return), zs(3, e));
                } catch (v) {
                    af(e, e.return, v);
                }
                try {
                    Ds(5, e, e.return);
                } catch (v) {
                    af(e, e.return, v);
                }
            }
            break;
        case 1:
            (Qs(t, e), Xs(e), 512 & r && null !== n && Rs(n, n.return));
            break;
        case 5:
            if ((Qs(t, e), Xs(e), 512 & r && null !== n && Rs(n, n.return), 32 & e.flags)) {
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
                                    ? Dt(a, !!i.multiple, p, !1)
                                    : d !== !!i.multiple &&
                                      (null != i.defaultValue
                                          ? Dt(a, !!i.multiple, i.defaultValue, !0)
                                          : Dt(a, !!i.multiple, i.multiple ? [] : '', !1));
                        }
                        a[qi] = i;
                    } catch (v) {
                        af(e, e.return, v);
                    }
            }
            break;
        case 6:
            if ((Qs(t, e), Xs(e), 4 & r)) {
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
            if ((Qs(t, e), Xs(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                    Sr(t.containerInfo);
                } catch (v) {
                    af(e, e.return, v);
                }
            break;
        case 4:
        default:
            (Qs(t, e), Xs(e));
            break;
        case 13:
            (Qs(t, e),
                Xs(e),
                8192 & (a = e.child).flags &&
                    ((i = null !== a.memoizedState),
                    (a.stateNode.isHidden = i),
                    !i || (null !== a.alternate && null !== a.alternate.memoizedState) || (wc = jn())),
                4 & r && Gs(e));
            break;
        case 22:
            if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Ns = (s = Ns) || c), Qs(t, e), (Ns = s)) : Qs(t, e),
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
                                    Ds(4, d, d.return);
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
                                          (l.style.display = Qt('display', o))));
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
            (Qs(t, e), Xs(e), 4 & r && Gs(e));
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
                    (32 & r.flags && (Kt(a, ''), (r.flags &= -33)), $s(e, Bs(e), a));
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo;
                    Us(e, Bs(e), i);
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
                            Ns || zs(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (4 & t.flags && !Ns)
                                if (null === n) r.componentDidMount();
                                else {
                                    var a = t.elementType === t.type ? n.memoizedProps : Du(t.type, n.memoizedProps);
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
                                        null !== f && Sr(f);
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
                        zs(4, t);
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
    gc = 0,
    mc = 0,
    yc = 0,
    bc = null,
    _c = null,
    wc = 0,
    kc = 1 / 0,
    Sc = null,
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
function Ic(e) {
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
function Dc(e, t, n, r) {
    if (50 < Nc) throw ((Nc = 0), (Tc = null), Error(Ve(185)));
    (Zn(e, n, r),
        (0 != (2 & uc) && e === sc) ||
            (e === sc && (0 == (2 & uc) && (mc |= n), 4 === hc && Bc(e, fc)),
            zc(e, r),
            1 === n && 0 === uc && 0 == (1 & t.mode) && ((kc = jn() + 500), _o && So())));
}
function zc(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
            var o = 31 - Bn(i),
                l = 1 << o,
                u = a[o];
            (-1 === u ? (0 != (l & n) && 0 == (l & r)) || (a[o] = Gn(l, t)) : u <= t && (e.expiredLanes |= l),
                (i &= ~l));
        }
    })(e, t);
    var r = qn(e, e === sc ? fc : 0);
    if (0 === r) (null !== n && An(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && An(n), 1 === t))
            (0 === e.tag
                ? (function (e) {
                      ((_o = !0), ko(e));
                  })(Uc.bind(null, e))
                : ko(Uc.bind(null, e)),
                Fi(function () {
                    0 == (6 & uc) && So();
                }),
                (n = null));
        else {
            switch (tr(r)) {
                case 1:
                    n = Ln;
                    break;
                case 4:
                    n = In;
                    break;
                case 16:
                default:
                    n = Dn;
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
        var i = Gc();
        for ((sc === e && fc === t) || ((Sc = null), (kc = jn() + 500), Kc(e, t)); ; )
            try {
                Zc();
                break;
            } catch (l) {
                qc(e, l);
            }
        (ll(), (ic.current = i), (uc = a), null !== cc ? (t = 0) : ((sc = null), (fc = 0), (t = hc)));
    }
    if (0 !== t) {
        if ((2 === t && 0 !== (a = Qn(e)) && ((r = a), (t = Vc(e, a))), 1 === t))
            throw ((n = vc), Kc(e, 0), Bc(e, r), zc(e, jn()), n);
        if (6 === t) Bc(e, r);
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
                                            if (!Ba(i(), a)) return !1;
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
                    (2 === (t = Yc(e, r)) && 0 !== (i = Qn(e)) && ((r = i), (t = Vc(e, i))), 1 === t))
            )
                throw ((n = vc), Kc(e, 0), Bc(e, r), zc(e, jn()), n);
            switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(Ve(345));
                case 2:
                case 5:
                    tf(e, _c, Sc);
                    break;
                case 3:
                    if ((Bc(e, r), (130023424 & r) === r && 10 < (t = wc + 500 - jn()))) {
                        if (0 !== qn(e, 0)) break;
                        if (((a = e.suspendedLanes) & r) !== r) {
                            (Lc(), (e.pingedLanes |= e.suspendedLanes & a));
                            break;
                        }
                        e.timeoutHandle = zi(tf.bind(null, e, _c, Sc), t);
                        break;
                    }
                    tf(e, _c, Sc);
                    break;
                case 4:
                    if ((Bc(e, r), (4194240 & r) === r)) break;
                    for (t = e.eventTimes, a = -1; 0 < r; ) {
                        var o = 31 - Bn(r);
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
                        e.timeoutHandle = zi(tf.bind(null, e, _c, Sc), r);
                        break;
                    }
                    tf(e, _c, Sc);
                    break;
                default:
                    throw Error(Ve(329));
            }
        }
    }
    return (zc(e, jn()), e.callbackNode === n ? Mc.bind(null, e) : null);
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
function Bc(e, t) {
    for (t &= ~yc, t &= ~mc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Bn(t),
            r = 1 << n;
        ((e[n] = -1), (t &= ~r));
    }
}
function Uc(e) {
    if (0 != (6 & uc)) throw Error(Ve(327));
    nf();
    var t = qn(e, 0);
    if (0 == (1 & t)) return (zc(e, jn()), null);
    var n = Yc(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = Qn(e);
        0 !== r && ((t = r), (n = Vc(e, r)));
    }
    if (1 === n) throw ((n = vc), Kc(e, 0), Bc(e, t), zc(e, jn()), n);
    if (6 === n) throw Error(Ve(345));
    return ((e.finishedWork = e.current.alternate), (e.finishedLanes = t), tf(e, _c, Sc), zc(e, jn()), null);
}
function $c(e, t) {
    var n = uc;
    uc |= 1;
    try {
        return e(t);
    } finally {
        0 === (uc = n) && ((kc = jn() + 500), _o && So());
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
        ((er = r), (lc.transition = n), 0 == (6 & (uc = t)) && So());
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
            switch ((Do(r), r.tag)) {
                case 1:
                    null != (r = r.type.childContextTypes) && ho();
                    break;
                case 3:
                    (Tl(), io(so), io(uo), zl());
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
        (yc = mc = gc = 0),
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
                for (var r = Bl.memoizedState; null !== r; ) {
                    var a = r.queue;
                    (null !== a && (a.pending = null), (r = r.next));
                }
                Wl = !1;
            }
            if (
                ((Fl = 0),
                ($l = Ul = Bl = null),
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
                        ((p.flags &= -257), Xu(p, o, l, 0, t), 1 & p.mode && Qu(i, s, t), (u = s));
                        var h = (t = p).updateQueue;
                        if (null === h) {
                            var v = new Set();
                            (v.add(u), (t.updateQueue = v));
                        } else h.add(u);
                        break e;
                    }
                    if (0 == (1 & t)) {
                        (Qu(i, s, t), Qc());
                        break e;
                    }
                    u = Error(Ve(426));
                } else if (Vo && 1 & l.mode) {
                    var g = Yu(o);
                    if (null !== g) {
                        (0 == (65536 & g.flags) && (g.flags |= 256), Xu(g, o, l, 0, t), Qo($u(u, l)));
                        break e;
                    }
                }
                ((i = u = $u(u, l)), 4 !== hc && (hc = 2), null === bc ? (bc = [i]) : bc.push(i), (i = o));
                do {
                    switch (i.tag) {
                        case 3:
                            ((i.flags |= 65536), (t &= -t), (i.lanes |= t), kl(i, qu(0, u, t)));
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
                                        (null === Ec || !Ec.has(y))))
                            ) {
                                ((i.flags |= 65536), (t &= -t), (i.lanes |= t), kl(i, Gu(i, l, t)));
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
function Gc() {
    var e = ic.current;
    return ((ic.current = ju), null === e ? ju : e);
}
function Qc() {
    ((0 !== hc && 3 !== hc && 2 !== hc) || (hc = 4),
        null === sc || (0 == (268435455 & gc) && 0 == (268435455 & mc)) || Bc(sc, fc));
}
function Yc(e, t) {
    var n = uc;
    uc |= 2;
    var r = Gc();
    for ((sc === e && fc === t) || ((Sc = null), Kc(e, t)); ; )
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
                            var a = 31 - Bn(n),
                                i = 1 << a;
                            ((t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i));
                        }
                    })(e, i),
                    e === sc && ((cc = sc = null), (fc = 0)),
                    (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                        Pc ||
                        ((Pc = !0),
                        cf(Dn, function () {
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
                            for (Ii = { focusedElem: e, selectionRange: n }, Or = !1, js = t; null !== js; )
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
                                                                g = h.memoizedState,
                                                                m = t.stateNode,
                                                                y = m.getSnapshotBeforeUpdate(
                                                                    t.elementType === t.type ? v : Du(t.type, v),
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
                            ((h = Is), (Is = !1));
                        })(e, n),
                        Ys(n, e),
                        Ga(Ii),
                        (Or = !!Li),
                        (Ii = Li = null),
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
                    zc(e, jn()),
                    null !== t)
                )
                    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                        ((a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest }));
                if (xc) throw ((xc = !1), (e = Oc), (Oc = null), e);
                (0 != (1 & Ac) && 0 !== e.tag && nf(),
                    (i = e.pendingLanes),
                    0 != (1 & i) ? (e === Tc ? Nc++ : ((Nc = 0), (Tc = e))) : (Nc = 0),
                    So());
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
                                            Ds(8, c, i);
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
                                        var g = v.sibling;
                                        ((v.sibling = null), (v = g));
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
                                        Ds(9, i, i.return);
                                }
                            var m = i.sibling;
                            if (null !== m) {
                                ((m.return = i.return), (js = m));
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
                                            zs(9, l);
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
                if (((uc = a), So(), Fn && 'function' == typeof Fn.onPostCommitFiberRoot))
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
    ((e = _l(e, (t = qu(0, (t = $u(n, t)), 1)), 1)), (t = Lc()), null !== e && (Zn(e, 1, t), zc(e, t)));
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
                    ((t = _l(t, (e = Gu(t, (e = $u(n, e)), 1)), 1)), (e = Lc()), null !== t && (Zn(t, 1, e), zc(t, e)));
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
        zc(e, t));
}
function lf(e, t) {
    0 === t && (0 == (1 & e.mode) ? (t = 1) : ((t = Hn), 0 == (130023424 & (Hn <<= 1)) && (Hn = 4194304)));
    var n = Lc();
    null !== (e = vl(e, t)) && (Zn(e, t, n), zc(e, n));
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
                return gf(n.children, a, i, t);
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
                return mf(n, a, i, t);
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
function gf(e, t, n, r) {
    return (((e = df(7, e, r, t)).lanes = n), e);
}
function mf(e, t, n, r) {
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
        ml(i),
        e
    );
}
function kf(e) {
    if (!e) return lo;
    e: {
        if (Sn((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(Ve(170));
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
        if (po(n)) return go(e, n, t);
    }
    return t;
}
function Sf(e, t, n, r, a, i, o, l, u) {
    return (
        ((e = wf(n, r, !0, e, 0, i, 0, l, u)).context = kf(null)),
        (n = e.current),
        ((i = bl((r = Lc()), (a = Ic(n)))).callback = null != t ? t : null),
        _l(n, i, a),
        (e.current.lanes = a),
        Zn(e, a, r),
        zc(e, r),
        e
    );
}
function xf(e, t, n, r) {
    var a = t.current,
        i = Lc(),
        o = Ic(a);
    return (
        (n = kf(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = bl(i, o)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = _l(a, t, o)) && (Dc(e, a, o, i), wl(e, a, o)),
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
                                (ss(t), Go());
                                break;
                            case 5:
                                jl(t);
                                break;
                            case 1:
                                po(t.type) && mo(t);
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
                                          ? ms(e, t, n)
                                          : (oo(Ll, 1 & Ll.current), null !== (e = xs(e, t, n)) ? e.sibling : null);
                                oo(Ll, 1 & Ll.current);
                                break;
                            case 19:
                                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                    if (r) return ks(e, t, n);
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
            (Ss(e, t), (e = t.pendingProps));
            var a = fo(t, uo.current);
            (cl(t, n), (a = Yl(null, t, r, e, a, n)));
            var i = Xl();
            return (
                (t.flags |= 1),
                'object' == typeof a && null !== a && 'function' == typeof a.render && void 0 === a.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      po(r) ? ((i = !0), mo(t)) : (i = !1),
                      (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
                      ml(t),
                      (a.updater = Mu),
                      (t.stateNode = a),
                      (a._reactInternals = t),
                      Uu(t, r, e, n),
                      (t = us(null, t, r, !0, i, n)))
                    : ((t.tag = 0), Vo && i && Io(t), es(null, t, a, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Ss(e, t),
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
                    (e = Du(r, e)),
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
                        t = ns(null, t, r, Du(r.type, e), n);
                        break e;
                }
                throw Error(Ve(306, r, ''));
            }
            return t;
        case 0:
            return ((r = t.type), (a = t.pendingProps), os(e, t, r, (a = t.elementType === r ? a : Du(r, a)), n));
        case 1:
            return ((r = t.type), (a = t.pendingProps), ls(e, t, r, (a = t.elementType === r ? a : Du(r, a)), n));
        case 3:
            e: {
                if ((ss(t), null === e)) throw Error(Ve(387));
                ((r = t.pendingProps), (a = (i = t.memoizedState).element), yl(e, t), Sl(t, r, null, n));
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
                            zo = t,
                            Vo = !0,
                            Fo = null,
                            n = nl(t, null, r, n),
                            t.child = n;
                        n;

                    )
                        ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                    if ((Go(), r === a)) {
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
                Di(r, a) ? (o = null) : null !== i && Di(r, i) && (t.flags |= 32),
                is(e, t),
                es(e, t, o, n),
                t.child
            );
        case 6:
            return (null === e && Wo(t), null);
        case 13:
            return ms(e, t, n);
        case 4:
            return (
                Nl(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = tl(t, null, r, n)) : es(e, t, r, n),
                t.child
            );
        case 11:
            return ((r = t.type), (a = t.pendingProps), ts(e, t, r, (a = t.elementType === r ? a : Du(r, a)), n));
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
                    if (Ba(i.value, o)) {
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
            return ((a = Du((r = t.type), t.pendingProps)), ns(e, t, r, (a = Du(r.type, a)), n));
        case 15:
            return rs(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : Du(r, a)),
                Ss(e, t),
                (t.tag = 1),
                po(r) ? ((e = !0), mo(t)) : (e = !1),
                cl(t, n),
                Fu(t, r, a),
                Uu(t, r, a, n),
                us(null, t, r, !0, e, n)
            );
        case 19:
            return ks(e, t, n);
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
                var o = Sf(t, r, e, 0, null, !1, 0, '', Rf);
                return (
                    (e._reactRootContainer = o),
                    (e[Gi] = o.current),
                    ki(8 === e.nodeType ? e.parentNode : e),
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
                (e[Gi] = u.current),
                ki(8 === e.nodeType ? e.parentNode : e),
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
                    (t[Gi] = null));
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
                    0 !== n && (Jn(t, 1 | n), zc(t, jn()), 0 == (6 & uc) && ((kc = jn() + 500), So()));
                }
                break;
            case 13:
                (Wc(function () {
                    var t = vl(e, 1);
                    if (null !== t) {
                        var n = Lc();
                        Dc(t, e, 1, n);
                    }
                }),
                    Pf(e, 1));
        }
    }),
    (rr = function (e) {
        if (13 === e.tag) {
            var t = vl(e, 134217728);
            if (null !== t) Dc(t, e, 134217728, Lc());
            Pf(e, 134217728);
        }
    }),
    (ar = function (e) {
        if (13 === e.tag) {
            var t = Ic(e),
                n = vl(e, t);
            if (null !== n) Dc(n, e, t, Lc());
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
                null != (t = n.value) && Dt(e, !!n.multiple, t, !1);
        }
    }),
    (sn = $c),
    (cn = Wc));
var If = { usingClientEntryPoint: !1, Events: [Ji, eo, to, ln, un, $c] },
    Df = { findFiberByHostInstance: Zi, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    zf = {
        bundleType: Df.bundleType,
        version: Df.version,
        rendererPackageName: Df.rendererPackageName,
        rendererConfig: Df.rendererConfig,
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
            Df.findFiberByHostInstance ||
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
            ((Vn = Mf.inject(zf)), (Fn = Mf));
        } catch (Wt) {}
}
((Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = If),
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
            (e[Gi] = t.current),
            ki(8 === e.nodeType ? e.parentNode : e),
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
            (t = Sf(t, null, e, 1, null != n ? n : null, a, 0, i, o)),
            (e[Gi] = t.current),
            ki(e),
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
                    ((e._reactRootContainer = null), (e[Gi] = null));
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
var Bf,
    Uf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ((Bf = Uf),
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
        Bf.exports ? ((t.default = t), (Bf.exports = t)) : (window.classNames = t);
    })());
const $f = e(Uf.exports);
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
    Gf = Object.getOwnPropertyDescriptor,
    Qf = Object.defineProperty,
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
    Qf(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function cd(e, t, n) {
    Qf(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
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
function gd(e) {
    return null === e ? null : 'object' == typeof e ? '' + e : e;
}
function md(e, t) {
    return Yf.hasOwnProperty.call(e, t);
}
var yd =
    Object.getOwnPropertyDescriptors ||
    function (e) {
        var t = {};
        return (
            vd(e).forEach(function (n) {
                t[n] = Gf(e, n);
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
function kd(e, t) {
    ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Sd(e, t));
}
function Sd(e, t) {
    return (Sd = Object.setPrototypeOf
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
    (md(e, Pd) || sd(e, Pd, wd({}, e[Pd])),
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
                (this.lowestObserverState_ = zp.NOT_TRACKING_),
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
    return (t !== rd && Dh(Rh, a, t, r), n !== rd && Ih(a, n), a);
}
var Id = {
    structural: function (e, t) {
        return ag(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
    shallow: function (e, t) {
        return ag(e, t, 1);
    },
};
function Dd(e, t, n) {
    return Zh(e)
        ? e
        : Array.isArray(e)
          ? wp.array(e, { name: n })
          : ld(e)
            ? wp.object(e, void 0, { name: n })
            : dd(e)
              ? wp.map(e, { name: n })
              : pd(e)
                ? wp.set(e, { name: n })
                : 'function' != typeof e || Ch(e) || Qh(e)
                  ? e
                  : ud(e)
                    ? qh(e)
                    : Eh(n, e);
}
function zd(e) {
    return e;
}
var Md = 'override';
function Vd(e, t) {
    return { annotationType_: e, options_: t, make_: Fd, extend_: Bd, decorate_20223_: Ud };
}
function Fd(e, t, n, r) {
    var a;
    if (null != (a = this.options_) && a.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (Ch(n.value)) return 1;
    var i = $d(e, this, t, n, !1);
    return (Qf(r, t, i), 2);
}
function Bd(e, t, n, r) {
    var a = $d(e, this, t, n);
    return e.defineProperty_(t, a, r);
}
function Ud(e, t) {
    var n = t.kind,
        r = t.name,
        a = t.addInitializer,
        i = this;
    if ('field' != n) {
        var o, l, u, s, c, f;
        if ('method' == n)
            return (
                Ch(e) ||
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
        (!md(e.target_, t) || !Qh(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
    )
        return 0;
    if (Qh(n.value)) return 1;
    var i = Gd(e, this, t, n, !1, !1);
    return (Qf(r, t, i), 2);
}
function Kd(e, t, n, r) {
    var a,
        i = Gd(e, this, t, n, null == (a = this.options_) ? void 0 : a.bound);
    return e.defineProperty_(t, i, r);
}
function qd(e, t) {
    var n,
        r = t.name,
        a = t.addInitializer;
    return (
        Qh(e) || (e = qh(e)),
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
function Gd(e, t, n, r, a, i) {
    var o;
    (void 0 === i && (i = rh.safeDescriptors), (o = r), t.annotationType_, o.value);
    var l,
        u = r.value;
    (Qh(u) || (u = qh(u)), a) && ((u = u.bind(null != (l = e.proxy_) ? l : e.target_)).isMobXFlow = !0);
    return { value: u, configurable: !i || e.isPlainObject_, enumerable: !1, writable: !i };
}
function Qd(e, t) {
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
            (a.name || (a.name = 'ObservableObject.' + r.toString()), t.values_.set(r, new Bp(a)));
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
            null != (a = null == (i = this.options_) ? void 0 : i.enhancer) ? a : Dd,
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
            u = new Dp(
                t,
                null != (r = null == (o = n.options_) ? void 0 : o.enhancer) ? r : Dd,
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
            : (Qf(r, t, { configurable: !0, set: u }), 2);
    }
    if (r !== e.target_ && 'function' == typeof n.value)
        return ud(n.value)
            ? (null != (l = this.options_) && l.autoBind ? qh.bound : qh).make_(e, t, n, r)
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
    dp = Jd('observable.ref', { enhancer: zd }),
    pp = Jd('observable.shallow', {
        enhancer: function (e, t, n) {
            return null == e || Fv(e) || Sv(e) || Nv(e) || Rv(e)
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
            return ag(e, t) ? t : e;
        },
    }),
    vp = Cd(fp);
function gp(e) {
    return !0 === e.deep
        ? Dd
        : !1 === e.deep
          ? zd
          : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
            ? n
            : Dd;
    var t, n, r;
}
function mp(e, t, n) {
    return Nd(t)
        ? fp.decorate_20223_(e, t)
        : id(t)
          ? void Ad(e, t, fp)
          : Zh(e)
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
qf(mp, vp);
var yp,
    bp,
    _p = {
        box: function (e, t) {
            var n = cp(t);
            return new Dp(e, gp(n), n.name, !0, n.equals);
        },
        array: function (e, t) {
            var n = cp(t);
            return (!1 === rh.useProxies || !1 === n.proxy ? Zv : hv)(e, gp(n), n.name);
        },
        map: function (e, t) {
            var n = cp(t);
            return new Av(e, gp(n), n.name);
        },
        set: function (e, t) {
            var n = cp(t);
            return new jv(e, gp(n), n.name);
        },
        object: function (e, t, n) {
            return ng(function () {
                return Bh(
                    !1 === rh.useProxies || !1 === (null == n ? void 0 : n.proxy)
                        ? zv({}, n)
                        : (function (e, t) {
                              var n, r;
                              return (
                                  td(),
                                  (e = zv(e, t)),
                                  null != (r = (n = e[Td]).proxy_) ? r : (n.proxy_ = new Proxy(e, nv))
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
    wp = qf(mp, _p),
    kp = 'computed',
    Sp = Qd(kp),
    xp = Qd('computed.struct', { equals: Id.structural }),
    Op = function (e, t) {
        if (Nd(t)) return Sp.decorate_20223_(e, t);
        if (id(t)) return Ad(e, t, Sp);
        if (ld(e)) return Cd(Qd(kp, e));
        var n = ld(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new Bp(n));
    };
(Object.assign(Op, Sp), (Op.struct = Cd(xp)));
var Ep,
    Pp = 0,
    Cp = 1,
    Ap = null != (yp = null == (bp = Gf(function () {}, 'name')) ? void 0 : bp.configurable) && yp,
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
        Ap && ((Np.value = e), Qf(a, 'name', Np)),
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
        l && (Qp(), (u = Rp(!0)));
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
var Ip,
    Dp = (function (e) {
        function t(t, n, r, a, i) {
            var o;
            return (
                void 0 === r && (r = 'ObservableValue'),
                void 0 === i && (i = Id.default),
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
        kd(t, e);
        var n = t.prototype;
        return (
            (n.dehanceValue = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
                (this.value_, (e = this.prepareNewValue_(e)) !== rh.UNCHANGED && this.setNewValue_(e));
            }),
            (n.prepareNewValue_ = function (e) {
                if (rv(this)) {
                    var t = iv(this, { object: this, type: fv, newValue: e });
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
                    ov(this) && uv(this, { type: fv, object: this, newValue: e, oldValue: t }));
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
                            type: fv,
                            newValue: this.value_,
                            oldValue: void 0,
                        }),
                    lv(this, e)
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
                return gd(this.get());
            }),
            (n[Ep] = function () {
                return this.valueOf();
            }),
            t
        );
    })(jd);
Ip = Symbol.toPrimitive;
var zp,
    Mp,
    Vp,
    Fp,
    Bp = (function () {
        function e(e) {
            ((this.dependenciesState_ = zp.NOT_TRACKING_),
                (this.observing_ = []),
                (this.newObserving_ = null),
                (this.isBeingObserved_ = !1),
                (this.isPendingUnobservation_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = zp.UP_TO_DATE_),
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
                (this.equals_ = e.equals || (e.compareStructural || e.struct ? Id.structural : Id.default)),
                (this.scope_ = e.context),
                (this.requiresReaction_ = e.requiresReaction),
                (this.keepAlive_ = !!e.keepAlive));
        }
        var t = e.prototype;
        return (
            (t.onBecomeStale_ = function () {
                !(function (e) {
                    if (e.lowestObserverState_ !== zp.UP_TO_DATE_) return;
                    ((e.lowestObserverState_ = zp.POSSIBLY_STALE_),
                        e.observers_.forEach(function (e) {
                            e.dependenciesState_ === zp.UP_TO_DATE_ &&
                                ((e.dependenciesState_ = zp.POSSIBLY_STALE_), e.onBecomeStale_());
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
                                    if (e.lowestObserverState_ === zp.STALE_) return;
                                    ((e.lowestObserverState_ = zp.STALE_),
                                        e.observers_.forEach(function (t) {
                                            t.dependenciesState_ === zp.POSSIBLY_STALE_
                                                ? (t.dependenciesState_ = zp.STALE_)
                                                : t.dependenciesState_ === zp.UP_TO_DATE_ &&
                                                  (e.lowestObserverState_ = zp.UP_TO_DATE_);
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
                    t = this.dependenciesState_ === zp.NOT_TRACKING_,
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
                return Ah(function () {
                    var i = n.get();
                    if (!r || t) {
                        var o = Qp();
                        (e({
                            observableKind: 'computed',
                            debugObjectName: n.name_,
                            type: fv,
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
                return gd(this.get());
            }),
            (t[Ip] = function () {
                return this.valueOf();
            }),
            e
        );
    })(),
    Up = fd('ComputedValue', Bp);
(((Mp = zp || (zp = {}))[(Mp.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
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
        case zp.UP_TO_DATE_:
            return !1;
        case zp.NOT_TRACKING_:
        case zp.STALE_:
            return !0;
        case zp.POSSIBLY_STALE_:
            for (var t = Xp(!0), n = Qp(), r = e.observing_, a = r.length, i = 0; i < a; i++) {
                var o = r[i];
                if (Up(o)) {
                    if (rh.disableErrorBoundaries) o.get();
                    else
                        try {
                            o.get();
                        } catch (l) {
                            return (Yp(n), Zp(t), !0);
                        }
                    if (e.dependenciesState_ === zp.STALE_) return (Yp(n), Zp(t), !0);
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
                    r = zp.UP_TO_DATE_,
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
            r !== zp.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        Zp(r),
        a
    );
}
function qp(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) ih(t[n], e);
    e.dependenciesState_ = zp.NOT_TRACKING_;
}
function Gp(e) {
    var t = Qp();
    try {
        return e();
    } finally {
        Yp(t);
    }
}
function Qp() {
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
    if (e.dependenciesState_ !== zp.UP_TO_DATE_) {
        e.dependenciesState_ = zp.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = zp.UP_TO_DATE_;
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
                    (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof Bp && n.suspend_()));
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
    e.lowestObserverState_ !== zp.STALE_ &&
        ((e.lowestObserverState_ = zp.STALE_),
        e.observers_.forEach(function (e) {
            (e.dependenciesState_ === zp.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = zp.STALE_));
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
                (this.dependenciesState_ = zp.NOT_TRACKING_),
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
var gh = fd('Reaction', fh);
var mh = 'action',
    yh = 'autoAction',
    bh = '<unnamed action>',
    _h = Vd(mh),
    wh = Vd('action.bound', { bound: !0 }),
    kh = Vd(yh, { autoAction: !0 }),
    Sh = Vd('autoAction.bound', { autoAction: !0, bound: !0 });
function xh(e) {
    return function (t, n) {
        return ad(t)
            ? Tp(t.name || bh, t, e)
            : ad(n)
              ? Tp(t, n, e)
              : Nd(n)
                ? (e ? kh : _h).decorate_20223_(t, n)
                : id(n)
                  ? Ad(t, n, e ? kh : _h)
                  : id(t)
                    ? Cd(Vd(e ? yh : mh, { name: t, autoAction: e }))
                    : void 0;
    };
}
var Oh = xh(!1);
Object.assign(Oh, _h);
var Eh = xh(!0);
function Ph(e) {
    return jp(e.name, !1, e, this, void 0);
}
function Ch(e) {
    return ad(e) && !0 === e.isMobxAction;
}
function Ah(e, t) {
    var n, r, a, i, o;
    void 0 === t && (t = Zf);
    var l,
        u = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun';
    if (!t.scheduler && !t.delay)
        l = new fh(
            u,
            function () {
                this.track(f);
            },
            t.onError,
            t.requiresObservable,
        );
    else {
        var s = Th(t),
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
    }
    function f() {
        e(l);
    }
    return (
        (null != (a = t) && null != (i = a.signal) && i.aborted) || l.schedule_(),
        l.getDisposer_(null == (o = t) ? void 0 : o.signal)
    );
}
(Object.assign(Eh, kh), (Oh.bound = Cd(wh)), (Eh.bound = Cd(Sh)));
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
function jh(e, t, n) {
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
        h = Th(n),
        v = !0,
        g = !1,
        m = n.compareStructural ? Id.structural : n.equals || Id.default,
        y = new fh(
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
                    var n = Rp(e);
                    try {
                        return t();
                    } finally {
                        Lp(n);
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
var Rh = 'onBO',
    Lh = 'onBUO';
function Ih(e, t, n) {
    return Dh(Lh, e, t, n);
}
function Dh(e, t, n, r) {
    var a = Jv(t),
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
    Mh = 'always',
    Vh = 'observed';
function Fh(e) {
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
        (void 0 !== r && (rh.useProxies = r === Mh || (r !== zh && 'undefined' != typeof Proxy)),
        'ifavailable' === r && (rh.verifyProxies = !0),
        void 0 !== a)
    ) {
        var i = a === Mh ? Mh : a === Vh;
        ((rh.enforceActions = i), (rh.allowStateChanges = !0 !== i && i !== Mh));
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
function Bh(e, t, n, r) {
    var a = yd(t);
    return (
        ng(function () {
            var t = zv(e, r)[Td];
            vd(a).forEach(function (e) {
                t.extend_(e, a[e], !n || !(e in n) || n[e]);
            });
        }),
        e
    );
}
function Uh(e) {
    var t,
        n = { name: e.name_ };
    return (
        e.observing_ &&
            e.observing_.length > 0 &&
            (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(Uh)),
        n
    );
}
var $h = 0;
function Wh() {
    this.message = 'FLOW_CANCELLED';
}
Wh.prototype = Object.create(Error.prototype);
var Hh = Wd('flow'),
    Kh = Wd('flow.bound', { bound: !0 }),
    qh = Object.assign(function (e, t) {
        if (Nd(t)) return Hh.decorate_20223_(e, t);
        if (id(t)) return Ad(e, t, Hh);
        var n = e,
            r = n.name || '<unnamed flow>',
            a = function () {
                var e,
                    t = arguments,
                    a = ++$h,
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
                            o && Gh(o);
                            var t = i.return(void 0),
                                n = Promise.resolve(t.value);
                            (n.then(rd, rd), Gh(n), e(new Wh()));
                        } catch (r) {
                            e(r);
                        }
                    })),
                    l
                );
            };
        return ((a.isMobXFlow = !0), a);
    }, Hh);
function Gh(e) {
    ad(e.cancel) && e.cancel();
}
function Qh(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function Yh(e, t) {
    if (void 0 === t) return Up(e);
    if (!1 === Fv(e)) return !1;
    if (!e[Td].values_.has(t)) return !1;
    var n = Jv(e, t);
    return Up(n);
}
function Xh(e, t) {
    return Yh(e, t);
}
function Zh(e) {
    return (function (e, t) {
        return !!e && (Fv(e) || !!e[Td] || Rd(e) || gh(e) || Up(e));
    })(e);
}
function Jh(e, t, n, r) {
    return ad(n)
        ? (function (e, t, n, r) {
              return eg(e, t).observe_(n, r);
          })(e, t, n, r)
        : (function (e, t, n) {
              return eg(e).observe_(t, n);
          })(e, t, n);
}
function ev(e, t) {
    (void 0 === t && (t = void 0), lh());
    try {
        return e.apply(t);
    } finally {
        uh();
    }
}
function tv(e) {
    return e[Td];
}
qh.bound = Cd(Kh);
var nv = {
    has: function (e, t) {
        return tv(e).has_(t);
    },
    get: function (e, t) {
        return tv(e).get_(t);
    },
    set: function (e, t, n) {
        var r;
        return !!id(t) && (null == (r = tv(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
        var n;
        return !!id(t) && (null == (n = tv(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
        var r;
        return null == (r = tv(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
        return tv(e).ownKeys_();
    },
    preventExtensions: function (e) {
        Wf(13);
    },
};
function rv(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
}
function av(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
        n.push(t),
        nd(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function iv(e, t) {
    var n = Qp();
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
function ov(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
}
function lv(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
        n.push(t),
        nd(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function uv(e, t) {
    var n = Qp(),
        r = e.changeListeners_;
    if (r) {
        for (var a = 0, i = (r = r.slice()).length; a < i; a++) r[a](t);
        Yp(n);
    }
}
function sv(e, t, n) {
    return (
        ng(function () {
            var r = zv(e, n)[Td];
            (null != t ||
                (t = (function (e) {
                    return (md(e, Pd) || sd(e, Pd, wd({}, e[Pd])), e[Pd]);
                })(e)),
                vd(t).forEach(function (e) {
                    return r.make_(e, t[e]);
                }));
        }),
        e
    );
}
var cv = 'splice',
    fv = 'update',
    dv = {
        get: function (e, t) {
            var n = e[Td];
            return t === Td
                ? n
                : 'length' === t
                  ? n.getArrayLength_()
                  : 'string' != typeof t || isNaN(t)
                    ? md(vv, t)
                        ? vv[t]
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
    pv = (function () {
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
                    lv(this, e)
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
                    this.legacyMode_ && t > 0 && Xv(e + t + 1));
            }),
            (t.spliceWithArray_ = function (e, t, n) {
                var r = this;
                this.atom_;
                var a = this.values_.length;
                if (
                    (void 0 === e ? (e = 0) : e > a ? (e = a) : e < 0 && (e = Math.max(0, a + e)),
                    (t = 1 === arguments.length ? a - e : null == t ? 0 : Math.max(0, Math.min(t, a - e))),
                    void 0 === n && (n = Xf),
                    rv(this))
                ) {
                    var i = iv(this, { object: this.proxy_, type: cv, index: e, removedCount: t, added: n });
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
                    a = ov(this),
                    i =
                        a || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  type: fv,
                                  debugObjectName: this.atom_.name_,
                                  index: e,
                                  newValue: t,
                                  oldValue: n,
                              }
                            : null;
                (this.atom_.reportChanged(), a && uv(this, i));
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    a = ov(this),
                    i =
                        a || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  debugObjectName: this.atom_.name_,
                                  type: cv,
                                  index: e,
                                  removed: n,
                                  added: t,
                                  removedCount: n.length,
                                  addedCount: t.length,
                              }
                            : null;
                (this.atom_.reportChanged(), a && uv(this, i));
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
                    if (rv(this)) {
                        var a = iv(this, { type: fv, object: this.proxy_, index: e, newValue: t });
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
function hv(e, t, n, r) {
    return (
        void 0 === n && (n = 'ObservableArray'),
        void 0 === r && (r = !1),
        td(),
        ng(function () {
            var a = new pv(n, t, r, !1);
            cd(a.values_, Td, a);
            var i = new Proxy(a.values_, dv);
            return ((a.proxy_ = i), e && e.length && a.spliceWithArray_(0, 0, e), i);
        })
    );
}
var vv = {
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
function gv(e, t) {
    'function' == typeof Array.prototype[e] && (vv[e] = t(e));
}
function mv(e) {
    return function () {
        var t = this[Td];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments);
    };
}
function yv(e) {
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
function bv(e) {
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
(gv('at', mv),
    gv('concat', mv),
    gv('flat', mv),
    gv('includes', mv),
    gv('indexOf', mv),
    gv('join', mv),
    gv('lastIndexOf', mv),
    gv('slice', mv),
    gv('toString', mv),
    gv('toLocaleString', mv),
    gv('toSorted', mv),
    gv('toSpliced', mv),
    gv('with', mv),
    gv('every', yv),
    gv('filter', yv),
    gv('find', yv),
    gv('findIndex', yv),
    gv('findLast', yv),
    gv('findLastIndex', yv),
    gv('flatMap', yv),
    gv('forEach', yv),
    gv('map', yv),
    gv('some', yv),
    gv('toReversed', yv),
    gv('reduce', bv),
    gv('reduceRight', bv));
var _v,
    wv,
    kv = fd('ObservableArrayAdministration', pv);
function Sv(e) {
    return od(e) && kv(e[Td]);
}
var xv = {},
    Ov = 'add',
    Ev = 'delete';
((_v = Symbol.iterator), (wv = Symbol.toStringTag));
var Pv,
    Cv,
    Av = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Dd),
                void 0 === n && (n = 'ObservableMap'),
                (this.enhancer_ = void 0),
                (this.name_ = void 0),
                (this[Td] = xv),
                (this.data_ = void 0),
                (this.hasMap_ = void 0),
                (this.keysAtom_ = void 0),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = t),
                (this.name_ = n),
                ad(Map) || Wf(18),
                ng(function () {
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
                    var r = (n = new Dp(this.has_(e), zd, 'ObservableMap.key?', !1));
                    (this.hasMap_.set(e, r),
                        Ih(r, function () {
                            return t.hasMap_.delete(e);
                        }));
                }
                return n.get();
            }),
            (t.set = function (e, t) {
                var n = this.has_(e);
                if (rv(this)) {
                    var r = iv(this, { type: n ? fv : Ov, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, rv(this)) && !iv(this, { type: Ev, object: this, name: e })) return !1;
                if (this.has_(e)) {
                    var n = ov(this),
                        r = n
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: Ev,
                                  object: this,
                                  oldValue: this.data_.get(e).value_,
                                  name: e,
                              }
                            : null;
                    return (
                        ev(function () {
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
                if ((t = n.prepareNewValue_(t)) !== rh.UNCHANGED) {
                    var r = ov(this),
                        a = r
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: fv,
                                  object: this,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), r && uv(this, a));
                }
            }),
            (t.addValue_ = function (e, t) {
                var n = this;
                (this.keysAtom_,
                    ev(function () {
                        var r,
                            a = new Dp(t, n.enhancer_, 'ObservableMap.key', !1);
                        (n.data_.set(e, a),
                            (t = a.value_),
                            null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                            n.keysAtom_.reportChanged());
                    }));
                var r = ov(this),
                    a = r
                        ? {
                              observableKind: 'map',
                              debugObjectName: this.name_,
                              type: Ov,
                              object: this,
                              name: e,
                              newValue: t,
                          }
                        : null;
                r && uv(this, a);
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
                return lg({
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
                return lg({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            a = n.value;
                        return { done: r, value: r ? void 0 : [a, e.get(a)] };
                    },
                });
            }),
            (t[_v] = function () {
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
                    Nv(e) && (e = new Map(e)),
                    ev(function () {
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
                ev(function () {
                    Gp(function () {
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
                    ev(function () {
                        for (
                            var n,
                                r = (function (e) {
                                    if (dd(e) || Nv(e)) return e;
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
                return lv(this, e);
            }),
            (t.intercept_ = function (e) {
                return av(this, e);
            }),
            _d(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.keysAtom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: wv,
                    get: function () {
                        return 'Map';
                    },
                },
            ]),
            e
        );
    })(),
    Nv = fd('ObservableMap', Av);
var Tv = {};
((Pv = Symbol.iterator), (Cv = Symbol.toStringTag));
var jv = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Dd),
                void 0 === n && (n = 'ObservableSet'),
                (this.name_ = void 0),
                (this[Td] = Tv),
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
                ng(function () {
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
                ev(function () {
                    Gp(function () {
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
                if ((this.atom_, rv(this)) && !iv(this, { type: Ov, object: this, newValue: e })) return this;
                if (!this.has(e)) {
                    ev(function () {
                        (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
                    });
                    var n = ov(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: Ov,
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
                if (rv(this) && !iv(this, { type: Ev, object: this, oldValue: e })) return !1;
                if (this.has(e)) {
                    var n = ov(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: Ev,
                                  object: this,
                                  oldValue: e,
                              }
                            : null;
                    return (
                        ev(function () {
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
                return lg({
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
                return lg({
                    next: function () {
                        return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
                    },
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    Rv(e) && (e = new Set(e)),
                    ev(function () {
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
                return lv(this, e);
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
            (t[Pv] = function () {
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
                    key: Cv,
                    get: function () {
                        return 'Set';
                    },
                },
            ]),
            e
        );
    })(),
    Rv = fd('ObservableSet', jv),
    Lv = Object.create(null),
    Iv = 'remove',
    Dv = (function () {
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
                if (n instanceof Bp) return (n.set(t), !0);
                if (rv(this)) {
                    var r = iv(this, { type: fv, object: this.proxy_ || this.target_, name: e, newValue: t });
                    if (!r) return null;
                    t = r.newValue;
                }
                if ((t = n.prepareNewValue_(t)) !== rh.UNCHANGED) {
                    var a = ov(this),
                        i = a
                            ? {
                                  type: fv,
                                  observableKind: 'object',
                                  debugObjectName: this.name_,
                                  object: this.proxy_ || this.target_,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), a && uv(this, i));
                }
                return !0;
            }),
            (t.get_ = function (e) {
                return (rh.trackingDerivation && !md(this.target_, e) && this.has_(e), this.target_[e]);
            }),
            (t.set_ = function (e, t, n) {
                return (
                    void 0 === n && (n = !1),
                    md(this.target_, e)
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
                        ((t = new Dp(e in this.target_, zd, 'ObservableObject.key?', !1)), this.pendingKeys_.set(e, t)),
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
                        var a = Gf(r, e);
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
                    lh();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (rv(this)) {
                        var a = iv(this, { object: this.proxy_ || this.target_, name: e, type: Ov, newValue: t.value });
                        if (!a) return null;
                        var i = a.newValue;
                        t.value !== i && (t = wd({}, t, { value: i }));
                    }
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                    } else Qf(this.target_, e, t);
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
                    if (rv(this)) {
                        var i = iv(this, { object: this.proxy_ || this.target_, name: e, type: Ov, newValue: t });
                        if (!i) return null;
                        t = i.newValue;
                    }
                    var o = Vv(e),
                        l = {
                            configurable: !rh.safeDescriptors || this.isPlainObject_,
                            enumerable: !0,
                            get: o.get,
                            set: o.set,
                        };
                    if (r) {
                        if (!Reflect.defineProperty(this.target_, e, l)) return !1;
                    } else Qf(this.target_, e, l);
                    var u = new Dp(t, n, 'ObservableObject.key', !1);
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
                    if (rv(this))
                        if (!iv(this, { object: this.proxy_ || this.target_, name: e, type: Ov, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var a = Vv(e),
                        i = {
                            configurable: !rh.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: a.get,
                            set: a.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, i)) return !1;
                    } else Qf(this.target_, e, i);
                    (this.values_.set(e, new Bp(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    uh();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !md(this.target_, e))) return !0;
                if (rv(this) && !iv(this, { object: this.proxy_ || this.target_, name: e, type: Iv })) return null;
                try {
                    var n, r;
                    lh();
                    var a,
                        i = ov(this),
                        o = this.values_.get(e),
                        l = void 0;
                    if (!o && i) l = null == (a = Gf(this.target_, e)) ? void 0 : a.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (o && (this.values_.delete(e), o instanceof Dp && (l = o.value_), ch(o)),
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
                        (0, i && uv(this, u));
                    }
                } finally {
                    uh();
                }
                return !0;
            }),
            (t.observe_ = function (e, t) {
                return lv(this, e);
            }),
            (t.intercept_ = function (e) {
                return av(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
                var n,
                    r,
                    a = ov(this);
                if (a) {
                    var i = a
                        ? {
                              type: Ov,
                              observableKind: 'object',
                              debugObjectName: this.name_,
                              object: this.proxy_ || this.target_,
                              name: e,
                              newValue: t,
                          }
                        : null;
                    a && uv(this, i);
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
    if (md(e, Td)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
        a = new Dv(
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
var Mv = fd('ObservableObjectAdministration', Dv);
function Vv(e) {
    return (
        Lv[e] ||
        (Lv[e] = {
            get: function () {
                return this[Td].getObservablePropValue_(e);
            },
            set: function (t) {
                return this[Td].setObservablePropValue_(e, t);
            },
        })
    );
}
function Fv(e) {
    return !!od(e) && Mv(e[Td]);
}
function Bv(e, t, n) {
    var r;
    null == (r = e.target_[Pd]) || delete r[n];
}
var Uv,
    $v,
    Wv = Qv(0),
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
    Kv = 0,
    qv = function () {};
((Uv = qv),
    ($v = Array.prototype),
    Object.setPrototypeOf
        ? Object.setPrototypeOf(Uv.prototype, $v)
        : void 0 !== Uv.prototype.__proto__
          ? (Uv.prototype.__proto__ = $v)
          : (Uv.prototype = $v));
var Gv = (function (e, t, n) {
    function r(t, n, r, a) {
        var i;
        return (
            void 0 === r && (r = 'ObservableArray'),
            void 0 === a && (a = !1),
            (i = e.call(this) || this),
            ng(function () {
                var e = new pv(r, n, a, !0);
                ((e.proxy_ = xd(i)),
                    cd(xd(i), Td, e),
                    t && t.length && i.spliceWithArray(0, 0, t),
                    Hv && Object.defineProperty(xd(i), '0', Wv));
            }),
            i
        );
    }
    kd(r, e);
    var a = r.prototype;
    return (
        (a.concat = function () {
            this[Td].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return Array.prototype.concat.apply(
                this.slice(),
                t.map(function (e) {
                    return Sv(e) ? e.slice() : e;
                }),
            );
        }),
        (a[n] = function () {
            var e = this,
                t = 0;
            return lg({
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
})(qv, Symbol.toStringTag, Symbol.iterator);
function Qv(e) {
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
function Yv(e) {
    Qf(Gv.prototype, '' + e, Qv(e));
}
function Xv(e) {
    if (e > Kv) {
        for (var t = Kv; t < e + 100; t++) Yv(t);
        Kv = e;
    }
}
function Zv(e, t, n) {
    return new Gv(e, t, n);
}
function Jv(e, t) {
    if ('object' == typeof e && null !== e) {
        if (Sv(e)) return (void 0 !== t && Wf(23), e[Td].atom_);
        if (Rv(e)) return e.atom_;
        if (Nv(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return (n || Wf(25, t, tg(e)), n);
        }
        if (Fv(e)) {
            if (!t) return Wf(26);
            var r = e[Td].values_.get(t);
            return (r || Wf(27, t, tg(e)), r);
        }
        if (Rd(e) || Up(e) || gh(e)) return e;
    } else if (ad(e) && gh(e[Td])) return e[Td];
    Wf(28);
}
function eg(e, t) {
    return (
        e || Wf(29),
        void 0 !== t ? eg(Jv(e, t)) : Rd(e) || Up(e) || gh(e) || Nv(e) || Rv(e) ? e : e[Td] ? e[Td] : void Wf(24, e)
    );
}
function tg(e, t) {
    var n;
    if (void 0 !== t) n = Jv(e, t);
    else {
        if (Ch(e)) return e.name;
        n = Fv(e) || Nv(e) || Rv(e) ? eg(e) : Jv(e);
    }
    return n.name_;
}
function ng(e) {
    var t = Qp(),
        n = Rp(!0);
    lh();
    try {
        return e();
    } finally {
        (uh(), Lp(n), Yp(t));
    }
}
(Object.entries(vv).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && sd(Gv.prototype, t, n);
}),
    Xv(1e3));
var rg = Yf.toString;
function ag(e, t, n) {
    return (void 0 === n && (n = -1), ig(e, t, n));
}
function ig(e, t, n, r, a) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var i = typeof e;
    if ('function' !== i && 'object' !== i && 'object' != typeof t) return !1;
    var o = rg.call(e);
    if (o !== rg.call(t)) return !1;
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
    ((e = og(e)), (t = og(t)));
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
        for (; c--; ) if (!ig(e[c], t[c], n - 1, r, a)) return !1;
    } else {
        var f,
            d = Object.keys(e);
        if (((c = d.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (!md(t, (f = d[c])) || !ig(e[f], t[f], n - 1, r, a)) return !1;
    }
    return (r.pop(), a.pop(), !0);
}
function og(e) {
    return Sv(e) ? e.slice() : dd(e) || Nv(e) || pd(e) || Rv(e) ? Array.from(e.entries()) : e;
}
function lg(e) {
    return ((e[Symbol.iterator] = ug), e);
}
function ug() {
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
            extras: { getDebugName: tg },
            $mobx: Td,
        }));
const sg = {
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
    cg = window;
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
class fg {
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
        for (const a of t) (n.push(e.slice(r, a)), (r = a));
        return (n.push(e.slice(r)), n);
    }
    parseBoundaries(e) {
        var t, n, r, a, i, o, l, u, s, c, f, d, p;
        const h = [];
        for (let v = 1; v < e.length; v++) {
            let g = this.baseScore;
            ((g +=
                (null === (t = this.model.get('UW1')) || void 0 === t ? void 0 : t.get(e.substring(v - 3, v - 2))) ||
                0),
                (g +=
                    (null === (n = this.model.get('UW2')) || void 0 === n
                        ? void 0
                        : n.get(e.substring(v - 2, v - 1))) || 0),
                (g +=
                    (null === (r = this.model.get('UW3')) || void 0 === r ? void 0 : r.get(e.substring(v - 1, v))) ||
                    0),
                (g +=
                    (null === (a = this.model.get('UW4')) || void 0 === a ? void 0 : a.get(e.substring(v, v + 1))) ||
                    0),
                (g +=
                    (null === (i = this.model.get('UW5')) || void 0 === i
                        ? void 0
                        : i.get(e.substring(v + 1, v + 2))) || 0),
                (g +=
                    (null === (o = this.model.get('UW6')) || void 0 === o
                        ? void 0
                        : o.get(e.substring(v + 2, v + 3))) || 0),
                (g +=
                    (null === (l = this.model.get('BW1')) || void 0 === l ? void 0 : l.get(e.substring(v - 2, v))) ||
                    0),
                (g +=
                    (null === (u = this.model.get('BW2')) || void 0 === u
                        ? void 0
                        : u.get(e.substring(v - 1, v + 1))) || 0),
                (g +=
                    (null === (s = this.model.get('BW3')) || void 0 === s ? void 0 : s.get(e.substring(v, v + 2))) ||
                    0),
                (g +=
                    (null === (c = this.model.get('TW1')) || void 0 === c ? void 0 : c.get(e.substring(v - 3, v))) ||
                    0),
                (g +=
                    (null === (f = this.model.get('TW2')) || void 0 === f
                        ? void 0
                        : f.get(e.substring(v - 2, v + 1))) || 0),
                (g +=
                    (null === (d = this.model.get('TW3')) || void 0 === d
                        ? void 0
                        : d.get(e.substring(v - 1, v + 2))) || 0),
                (g +=
                    (null === (p = this.model.get('TW4')) || void 0 === p ? void 0 : p.get(e.substring(v, v + 3))) ||
                    0),
                g > 0 && h.push(v));
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
 */ const dg = console.assert,
    pg = String.fromCharCode(8203),
    hg = 1,
    vg = 3,
    gg = { Inline: 0, Block: 1, Skip: 2, Break: 3, NoBreak: 4, BreakOpportunity: 5 },
    mg = {
        AREA: gg.Skip,
        BASE: gg.Skip,
        BASEFONT: gg.Skip,
        DATALIST: gg.Skip,
        HEAD: gg.Skip,
        LINK: gg.Skip,
        META: gg.Skip,
        NOEMBED: gg.Skip,
        NOFRAMES: gg.Skip,
        PARAM: gg.Skip,
        RP: gg.Skip,
        SCRIPT: gg.Skip,
        STYLE: gg.Skip,
        TEMPLATE: gg.Skip,
        TITLE: gg.Skip,
        NOSCRIPT: gg.Skip,
        HR: gg.Break,
        LISTING: gg.Skip,
        PLAINTEXT: gg.Skip,
        PRE: gg.Skip,
        XMP: gg.Skip,
        BR: gg.Break,
        RT: gg.Skip,
        WBR: gg.BreakOpportunity,
        INPUT: gg.Skip,
        SELECT: gg.Skip,
        BUTTON: gg.Skip,
        TEXTAREA: gg.Skip,
        ABBR: gg.Skip,
        CODE: gg.Skip,
        IFRAME: gg.Skip,
        TIME: gg.Skip,
        VAR: gg.Skip,
        NOBR: gg.NoBreak,
    },
    yg = new Set([
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
    bg = 3;
function _g(e) {
    const t = e.nodeName,
        n = mg[t];
    if (void 0 !== n) return n;
    if ('function' == typeof cg.getComputedStyle) {
        const t = cg.getComputedStyle(e);
        switch (t.whiteSpace) {
            case 'nowrap':
            case 'pre':
                return gg.NoBreak;
        }
        const n = t.display;
        if (n)
            return (function (e) {
                return 'inline' === e
                    ? gg.Inline
                    : 'block' === e
                      ? gg.Block
                      : e.startsWith('ruby')
                        ? 'ruby-text' === e
                            ? gg.Skip
                            : gg.Inline
                        : gg.Block;
            })(n);
    }
    return yg.has(t) ? gg.Block : gg.Inline;
}
class wg {
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
        if ((dg(0 === t.length || t.join('') === this.text), t.length <= 1)) return;
        dg(this.canSplit);
        const n = this.nodeOrText;
        if ('string' == typeof e) return void (n.nodeValue = t.join(e));
        const r = n.ownerDocument;
        let a = [];
        for (const i of t) (i && a.push(r.createTextNode(i)), a.push(null));
        (a.pop(), (a = a.map((t) => t || e.cloneNode(!0))), n.replaceWith(...a));
    }
}
class kg {
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
class Sg {
    constructor(e, t) {
        ((this.separator = pg),
            (this.parser_ = e),
            void 0 !== t &&
                (void 0 !== t.className && (this.className = t.className),
                void 0 !== t.separator && (this.separator = t.separator)));
    }
    static hasChildTextNode(e) {
        for (const t of e.childNodes) if (t.nodeType === bg) return !0;
        return !1;
    }
    applyToElement(e) {
        for (const t of this.getBlocks(e)) (dg(!t.isEmpty()), this.applyToParagraph(t));
    }
    *getBlocks(e, t) {
        if ((dg(e.nodeType === hg), this.className && e.classList.contains(this.className))) return;
        const n = _g(e);
        if (n === gg.Skip) return;
        if (n === gg.Break)
            return (
                t && !t.isEmpty() && (t.setHasBreakOpportunityAfter(), yield t, (t.nodes = [])),
                void dg(!e.firstChild)
            );
        if (n === gg.BreakOpportunity) return void (t && t.setHasBreakOpportunityAfter());
        dg(n === gg.Block || n === gg.Inline || n === gg.NoBreak);
        const r = !t || n === gg.Block,
            a = r ? new kg(e) : t;
        for (const i of e.childNodes)
            switch (i.nodeType) {
                case hg:
                    for (const e of this.getBlocks(i, a)) yield e;
                    break;
                case vg:
                    if (n === gg.NoBreak) {
                        const e = i.nodeValue;
                        e && a.nodes.push(new wg(e));
                        break;
                    }
                    a.nodes.push(new wg(i));
            }
        r && !a.isEmpty() && (yield a);
    }
    applyToParagraph(e) {
        if ((dg(e.nodes.length > 0), !e.nodes.some((e) => e.canSplit))) return;
        const t = e.text;
        if (/^\s*$/.test(t)) return;
        const n = this.parser_.parseBoundaries(t);
        if (n.length <= 0) return;
        (dg(n[0] > 0), dg(n.every((e, t) => 0 === t || e > n[t - 1])), dg(n[n.length - 1] < t.length));
        const r = e.excludeForcedOpportunities(n);
        (r.push(t.length + 1), this.splitNodes(e.nodes, r), this.applyBlockStyle(e.element));
    }
    splitNodes(e, t) {
        var n;
        (dg(t.length > 0), dg(t.every((e, n) => 0 === n || e > t[n - 1])));
        const r = e.reduce((e, t) => e + t.length, 0);
        dg(t[t.length - 1] > r);
        let a = 0,
            i = t[0];
        dg(i > 0);
        let o = 0,
            l = null;
        for (const u of e) {
            (dg(i >= o), dg(0 === u.chunks.length));
            const e = u.text;
            if (!e) continue;
            const r = e.length,
                s = o + r;
            if ((dg(!l || l.canSplit), !u.canSplit)) {
                for (
                    l &&
                    i === o &&
                    (0 === l.chunks.length && l.chunks.push(null !== (n = l.text) && void 0 !== n ? n : ''),
                    l.chunks.push(''));
                    i < s;

                )
                    i = t[++a];
                ((l = null), (o = s));
                continue;
            }
            if (((l = u), i >= s)) {
                o = s;
                continue;
            }
            const c = u.chunks;
            let f = 0;
            for (; i < s; ) {
                const n = i - o;
                (dg(n >= f), c.push(e.slice(f, n)), (f = n), (i = t[++a]));
            }
            (dg(f < r), c.push(e.slice(f)), (o = s));
        }
        (dg(o === r), dg(a < t.length), dg(t[a] >= r));
        for (const u of e) u.split(this.separator);
    }
    applyBlockStyle(e) {
        this.className
            ? e.classList.add(this.className)
            : ((e) => {
                  ((e.style.wordBreak = 'keep-all'), (e.style.overflowWrap = 'anywhere'));
              })(e);
    }
}
class xg extends fg {
    constructor(e, t = { separator: pg }) {
        (super(e), (this.htmlProcessor = new Sg(this, t)));
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
        const t = ((e) => new cg.DOMParser().parseFromString(e, 'text/html'))(e);
        if (Sg.hasChildTextNode(t.body)) {
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
 */ const Og = () => new xg(sg);
var Eg = Ug(),
    Pg = (e) => Mg(e, Eg),
    Cg = Ug();
Pg.write = (e) => Mg(e, Cg);
var Ag = Ug();
Pg.onStart = (e) => Mg(e, Ag);
var Ng = Ug();
Pg.onFrame = (e) => Mg(e, Ng);
var Tg = Ug();
Pg.onFinish = (e) => Mg(e, Tg);
var jg = [];
Pg.setTimeout = (e, t) => {
    const n = Pg.now() + t,
        r = () => {
            const e = jg.findIndex((e) => e.cancel == r);
            (~e && jg.splice(e, 1), (Dg -= ~e ? 1 : 0));
        },
        a = { time: n, handler: e, cancel: r };
    return (jg.splice(Rg(n), 0, a), (Dg += 1), Vg(), a);
};
var Rg = (e) => ~(~jg.findIndex((t) => t.time > e) || ~jg.length);
((Pg.cancel = (e) => {
    (Ag.delete(e), Ng.delete(e), Tg.delete(e), Eg.delete(e), Cg.delete(e));
}),
    (Pg.sync = (e) => {
        ((zg = !0), Pg.batchedUpdates(e), (zg = !1));
    }),
    (Pg.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            ((t = e), Pg.onStart(n));
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                (Ag.delete(n), (t = null));
            }),
            r
        );
    }));
var Lg = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
((Pg.use = (e) => (Lg = e)),
    (Pg.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (Pg.batchedUpdates = (e) => e()),
    (Pg.catch = console.error),
    (Pg.frameLoop = 'always'),
    (Pg.advance = () => {
        'demand' !== Pg.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : Bg();
    }));
var Ig = -1,
    Dg = 0,
    zg = !1;
function Mg(e, t) {
    zg ? (t.delete(e), e(0)) : (t.add(e), Vg());
}
function Vg() {
    Ig < 0 && ((Ig = 0), 'demand' !== Pg.frameLoop && Lg(Fg));
}
function Fg() {
    ~Ig && (Lg(Fg), Pg.batchedUpdates(Bg));
}
function Bg() {
    const e = Ig;
    Ig = Pg.now();
    const t = Rg(Ig);
    (t && ($g(jg.splice(0, t), (e) => e.handler()), (Dg -= t)),
        Dg ? (Ag.flush(), Eg.flush(e ? Math.min(64, Ig - e) : 16.667), Ng.flush(), Cg.flush(), Tg.flush()) : (Ig = -1));
}
function Ug() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            ((Dg += t != e || e.has(n) ? 0 : 1), e.add(n));
        },
        delete: (n) => ((Dg -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (Dg -= t.size), $g(t, (t) => t(n) && e.add(t)), (Dg += e.size), (t = e));
        },
    };
}
function $g(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            Pg.catch(n);
        }
    });
}
var Wg = Object.defineProperty,
    Hg = {};
((e, t) => {
    for (var n in t) Wg(e, n, { get: t[n], enumerable: !0 });
})(Hg, {
    assign: () => nm,
    colors: () => Jg,
    createStringInterpolator: () => Qg,
    skipAnimation: () => em,
    to: () => Yg,
    willAdvance: () => tm,
});
var Kg = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
var qg = (e, t) => e.forEach(t);
function Gg(e, t, n) {
    if (Kg.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Qg,
    Yg,
    Xg = (e) => (Kg.und(e) ? [] : Kg.arr(e) ? e : [e]),
    Zg = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    Jg = null,
    em = !1,
    tm = function () {},
    nm = (e) => {
        (e.to && (Yg = e.to),
            e.now && (Pg.now = e.now),
            void 0 !== e.colors && (Jg = e.colors),
            null != e.skipAnimation && (em = e.skipAnimation),
            e.createStringInterpolator && (Qg = e.createStringInterpolator),
            e.requestAnimationFrame && Pg.use(e.requestAnimationFrame),
            e.batchedUpdates && (Pg.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (tm = e.willAdvance),
            e.frameLoop && (Pg.frameLoop = e.frameLoop));
    },
    rm = new Set(),
    am = [],
    im = [],
    om = 0,
    lm = {
        get idle() {
            return !rm.size && !am.length;
        },
        start(e) {
            om > e.priority ? (rm.add(e), Pg.onStart(um)) : (sm(e), Pg(fm));
        },
        advance: fm,
        sort(e) {
            if (om) Pg.onFrame(() => lm.sort(e));
            else {
                const t = am.indexOf(e);
                ~t && (am.splice(t, 1), cm(e));
            }
        },
        clear() {
            ((am = []), rm.clear());
        },
    };
function um() {
    (rm.forEach(sm), rm.clear(), Pg(fm));
}
function sm(e) {
    am.includes(e) || cm(e);
}
function cm(e) {
    am.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(am, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function fm(e) {
    const t = im;
    for (let n = 0; n < am.length; n++) {
        const r = am[n];
        ((om = r.priority), r.idle || (tm(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((om = 0), ((im = am).length = 0), (am = t).length > 0);
}
var dm = '[-+]?\\d*\\.?\\d+',
    pm = dm + '%';
function hm(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var vm = new RegExp('rgb' + hm(dm, dm, dm)),
    gm = new RegExp('rgba' + hm(dm, dm, dm, dm)),
    mm = new RegExp('hsl' + hm(dm, pm, pm)),
    ym = new RegExp('hsla' + hm(dm, pm, pm, dm)),
    bm = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    _m = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    wm = /^#([0-9a-fA-F]{6})$/,
    km = /^#([0-9a-fA-F]{8})$/;
function Sm(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function xm(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - r,
        i = Sm(a, r, e + 1 / 3),
        o = Sm(a, r, e),
        l = Sm(a, r, e - 1 / 3);
    return (Math.round(255 * i) << 24) | (Math.round(255 * o) << 16) | (Math.round(255 * l) << 8);
}
function Om(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Em(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function Pm(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function Cm(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Am(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = wm.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : Jg && void 0 !== Jg[e]
                ? Jg[e]
                : (t = vm.exec(e))
                  ? ((Om(t[1]) << 24) | (Om(t[2]) << 16) | (Om(t[3]) << 8) | 255) >>> 0
                  : (t = gm.exec(e))
                    ? ((Om(t[1]) << 24) | (Om(t[2]) << 16) | (Om(t[3]) << 8) | Pm(t[4])) >>> 0
                    : (t = bm.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = km.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = _m.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = mm.exec(e))
                            ? (255 | xm(Em(t[1]), Cm(t[2]), Cm(t[3]))) >>> 0
                            : (t = ym.exec(e))
                              ? (xm(Em(t[1]), Cm(t[2]), Cm(t[3])) | Pm(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var Nm = (e, t, n) => {
    if (Kg.fun(e)) return e;
    if (Kg.arr(e)) return Nm({ range: e, output: t, extrapolate: n });
    if (Kg.str(e.output[0])) return Qg(e);
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
var Tm = Symbol.for('FluidValue.get'),
    jm = Symbol.for('FluidValue.observers'),
    Rm = (e) => Boolean(e && e[Tm]),
    Lm = (e) => (e && e[Tm] ? e[Tm]() : e);
function Im(e, t) {
    const n = e[jm];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
var Dm = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            zm(this, e);
        }
    },
    zm = (e, t) => Bm(e, Tm, t);
function Mm(e, t) {
    if (e[Tm]) {
        let n = e[jm];
        (n || Bm(e, jm, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function Vm(e, t) {
    const n = e[jm];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[jm] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
var Fm,
    Bm = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    Um = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    $m = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    Wm = new RegExp(`(${Um.source})(%|[a-z]+)`, 'i'),
    Hm = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    Km = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    qm = (e) => {
        const [t, n] = Gm(e);
        if (!t || Zg()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && Km.test(n) ? qm(n) : n || e;
    },
    Gm = (e) => {
        const t = Km.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    Qm = (e, t, n, r, a) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${a})`,
    Ym = (e) => {
        Fm || (Fm = Jg ? new RegExp(`(${Object.keys(Jg).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => Lm(e).replace(Km, qm).replace($m, Am).replace(Fm, Am)),
            n = t.map((e) => e.match(Um).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => Nm({ ...e, output: t }));
        return (e) => {
            var n;
            const a = !Wm.test(t[0]) && (null == (n = t.find((e) => Wm.test(e))) ? void 0 : n.replace(Um, ''));
            let i = 0;
            return t[0].replace(Um, () => `${r[i++](e)}${a || ''}`).replace(Hm, Qm);
        };
    },
    Xm = 'react-spring: ',
    Zm = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${Xm}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    Jm = Zm(console.warn);
function ey(e) {
    return Kg.str(e) && ('#' == e[0] || /\d/.test(e) || (!Zg() && Km.test(e)) || e in (Jg || {}));
}
Zm(console.warn);
var ty = Zg() ? V.useEffect : V.useLayoutEffect;
function ny() {
    const e = V.useState()[1],
        t = (() => {
            const e = V.useRef(!1);
            return (
                ty(
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
var ry = [],
    ay = Symbol.for('Animated:node'),
    iy = (e) => e && e[ay],
    oy = (e, t) => {
        return ((n = e), (r = ay), (a = t), Object.defineProperty(n, r, { value: a, writable: !0, configurable: !0 }));
        var n, r, a;
    },
    ly = (e) => e && e[ay] && e[ay].getPayload(),
    uy = class {
        constructor() {
            oy(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    sy = class extends uy {
        constructor(e) {
            (super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                Kg.num(this._value) && (this.lastPosition = this._value));
        }
        static create(e) {
            return new sy(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                Kg.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            ((this.done = !1),
                Kg.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null)));
        }
    },
    cy = class extends sy {
        constructor(e) {
            (super(0), (this._string = null), (this._toString = Nm({ output: [e, e] })));
        }
        static create(e) {
            return new cy(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (Kg.str(e)) {
                if (e == this._string) return !1;
                ((this._string = e), (this._value = 1));
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null;
            }
            return !0;
        }
        reset(e) {
            (e && (this._toString = Nm({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
        }
    },
    fy = { dependencies: null },
    dy = class extends uy {
        constructor(e) {
            (super(), (this.source = e), this.setValue(e));
        }
        getValue(e) {
            const t = {};
            return (
                Gg(this.source, (n, r) => {
                    var a;
                    (a = n) && a[ay] === a ? (t[r] = n.getValue(e)) : Rm(n) ? (t[r] = Lm(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            ((this.source = e), (this.payload = this._makePayload(e)));
        }
        reset() {
            this.payload && qg(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return (Gg(e, this._addToPayload, t), Array.from(t));
            }
        }
        _addToPayload(e) {
            fy.dependencies && Rm(e) && fy.dependencies.add(e);
            const t = ly(e);
            t && qg(t, (e) => this.add(e));
        }
    },
    py = class extends dy {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new py(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map(hy)), !0);
        }
    };
function hy(e) {
    return (ey(e) ? cy : sy).create(e);
}
var vy = (e, t) => {
        const n = !Kg.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return V.forwardRef((r, a) => {
            const i = V.useRef(null),
                o =
                    n &&
                    V.useCallback(
                        (e) => {
                            i.current = (function (e, t) {
                                e && (Kg.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(a, e);
                        },
                        [a],
                    ),
                [l, u] = (function (e, t) {
                    const n = new Set();
                    ((fy.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                    return ((e = new dy(e)), (fy.dependencies = null), [e, n]);
                })(r, t),
                s = ny(),
                c = () => {
                    const e = i.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && s();
                },
                f = new gy(c, u),
                d = V.useRef();
            var p;
            (ty(
                () => (
                    (d.current = f),
                    qg(u, (e) => Mm(e, f)),
                    () => {
                        d.current && (qg(d.current.deps, (e) => Vm(e, d.current)), Pg.cancel(d.current.update));
                    }
                ),
            ),
                V.useEffect(c, []),
                (p = () => () => {
                    const e = d.current;
                    qg(e.deps, (t) => Vm(t, e));
                }),
                V.useEffect(p, ry));
            const h = t.getComponentProps(l.getValue());
            return V.createElement(e, { ...h, ref: o });
        });
    },
    gy = class {
        constructor(e, t) {
            ((this.update = e), (this.deps = t));
        }
        eventObserved(e) {
            'change' == e.type && Pg.write(this.update);
        }
    };
var my,
    yy,
    by = Symbol.for('AnimatedComponent'),
    _y = (e) => (Kg.str(e) ? e : e && Kg.str(e.displayName) ? e.displayName : (Kg.fun(e) && e.name) || null),
    wy = (e) => e instanceof Sy,
    ky = 1,
    Sy = class extends Dm {
        constructor() {
            (super(...arguments), (this.id = ky++), (this._priority = 0));
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = iy(this);
            return e && e.getValue();
        }
        to(...e) {
            return Hg.to(this, e);
        }
        interpolate(...e) {
            return (Jm(`${Xm}The "interpolate" function is deprecated in v9 (use "to" instead)`), Hg.to(this, e));
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
            Im(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            (this.idle || lm.sort(this), Im(this, { type: 'priority', parent: this, priority: e }));
        }
    },
    xy = ({ children: e, ...t }) => {
        const n = V.useContext(Oy),
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
        const { Provider: i } = Oy;
        return V.createElement(i, { value: t }, e);
    },
    Oy =
        ((my = xy),
        (yy = {}),
        Object.assign(my, V.createContext(yy)),
        (my.Provider._context = my),
        (my.Consumer._context = my),
        my);
((xy.Provider = Oy.Provider), (xy.Consumer = Oy.Consumer));
var Ey = class extends Sy {
    constructor(e, t) {
        (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = Nm(...t)));
        const n = this._get(),
            r = (function (e) {
                const t = iy(e);
                return t ? t.constructor : Kg.arr(e) ? py : ey(e) ? cy : sy;
            })(n);
        oy(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        ((function (e, t) {
            if (Kg.arr(e)) {
                if (!Kg.arr(t) || e.length !== t.length) return !1;
                for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                return !0;
            }
            return e === t;
        })(t, this.get()) || (iy(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && Cy(this._active) && Ay(this));
    }
    _get() {
        const e = Kg.arr(this.source) ? this.source.map(Lm) : Xg(Lm(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !Cy(this._active) &&
            ((this.idle = !1),
            qg(ly(this), (e) => {
                e.done = !1;
            }),
            Hg.skipAnimation ? (Pg.batchedUpdates(() => this.advance()), Ay(this)) : lm.start(this));
    }
    _attach() {
        let e = 1;
        (qg(Xg(this.source), (t) => {
            (Rm(t) && Mm(t, this), wy(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (qg(Xg(this.source), (e) => {
            Rm(e) && Vm(e, this);
        }),
            this._active.clear(),
            Ay(this));
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = Xg(this.source).reduce((e, t) => Math.max(e, (wy(t) ? t.priority : 0) + 1), 0));
    }
};
function Py(e) {
    return !1 !== e.idle;
}
function Cy(e) {
    return !e.size || Array.from(e).every(Py);
}
function Ay(e) {
    e.idle ||
        ((e.idle = !0),
        qg(ly(e), (e) => {
            e.done = !0;
        }),
        Im(e, { type: 'idle', parent: e }));
}
Hg.assign({ createStringInterpolator: Ym, to: (e, t) => new Ey(e, t) });
var Ny = /^--/;
function Ty(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || Ny.test(e) || (Ry.hasOwnProperty(e) && Ry[e])
          ? ('' + t).trim()
          : t + 'px';
}
var jy = {};
var Ry = {
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
    Ly = ['Webkit', 'Ms', 'Moz', 'O'];
Ry = Object.keys(Ry).reduce(
    (e, t) => (Ly.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    Ry,
);
var Iy = /^(matrix|translate|scale|rotate|skew)/,
    Dy = /^(translate)/,
    zy = /^(rotate|skew)/,
    My = (e, t) => (Kg.num(e) && 0 !== e ? e + t : e),
    Vy = (e, t) => (Kg.arr(e) ? e.every((e) => Vy(e, t)) : Kg.num(e) ? e === t : parseFloat(e) === t),
    Fy = class extends dy {
        constructor({ x: e, y: t, z: n, ...r }) {
            const a = [],
                i = [];
            ((e || t || n) &&
                (a.push([e || 0, t || 0, n || 0]),
                i.push((e) => [`translate3d(${e.map((e) => My(e, 'px')).join(',')})`, Vy(e, 0)])),
                Gg(r, (e, t) => {
                    if ('transform' === t) (a.push([e || '']), i.push((e) => [e, '' === e]));
                    else if (Iy.test(t)) {
                        if ((delete r[t], Kg.und(e))) return;
                        const n = Dy.test(t) ? 'px' : zy.test(t) ? 'deg' : '';
                        (a.push(Xg(e)),
                            i.push(
                                'rotate3d' === t
                                    ? ([e, t, r, a]) => [`rotate3d(${e},${t},${r},${My(a, n)})`, Vy(a, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => My(e, n)).join(',')})`,
                                          Vy(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                a.length && (r.transform = new By(a, i)),
                super(r));
        }
    },
    By = class extends Dm {
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
                qg(this.inputs, (n, r) => {
                    const a = Lm(n[0]),
                        [i, o] = this.transforms[r](Kg.arr(a) ? a : n.map(Lm));
                    ((e += ' ' + i), (t = t && o));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && qg(this.inputs, (e) => qg(e, (e) => Rm(e) && Mm(e, this)));
        }
        observerRemoved(e) {
            0 == e && qg(this.inputs, (e) => qg(e, (e) => Rm(e) && Vm(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), Im(this, e));
        }
    };
function Uy(e, t) {
    (void 0 === t && (t = 'Illegal state'),
        e ||
            (function (e) {
                throw new Error('[mobx-utils] ' + e);
            })(t));
}
(Hg.assign({
    batchedUpdates: Vf.unstable_batchedUpdates,
    createStringInterpolator: Ym,
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
            createAnimatedStyle: n = (e) => new dy(e),
            getComponentProps: r = (e) => e,
        } = {},
    ) => {
        const a = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
            i = (e) => {
                const t = _y(e) || 'Anonymous';
                return (
                    ((e = Kg.str(e) ? i[e] || (i[e] = vy(e, a)) : e[by] || (e[by] = vy(e, a))).displayName =
                        `Animated(${t})`),
                    e
                );
            };
        Gg(e, (t, n) => {
            (Kg.arr(e) && (n = _y(t)), (i[n] = i(t)));
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
                            : jy[t] || (jy[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                    );
                void 0 !== a && (e.textContent = a);
                for (const f in r)
                    if (r.hasOwnProperty(f)) {
                        const t = Ty(f, r[f]);
                        Ny.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                    }
                (c.forEach((t, n) => {
                    e.setAttribute(t, s[n]);
                }),
                    void 0 !== i && (e.scrollTop = i),
                    void 0 !== o && (e.scrollLeft = o),
                    void 0 !== l && e.setAttribute('viewBox', l));
            },
            createAnimatedStyle: (e) => new Fy(e),
            getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
        },
    ));
var $y,
    Wy = function (e) {
        return e && e !== Object.prototype && Object.getOwnPropertyNames(e).concat(Wy(Object.getPrototypeOf(e)) || []);
    },
    Hy = function (e) {
        return (function (e) {
            var t = Wy(e);
            return t.filter(function (e, n) {
                return t.indexOf(e) === n;
            });
        })(e).filter(function (e) {
            return 'constructor' !== e && !~e.indexOf('__');
        });
    },
    Ky = 'pending',
    qy = 'fulfilled',
    Gy = 'rejected';
function Qy(e) {
    switch (this.state) {
        case Ky:
            return e.pending && e.pending(this.value);
        case Gy:
            return e.rejected && e.rejected(this.value);
        case qy:
            return e.fulfilled ? e.fulfilled(this.value) : this.value;
    }
}
function Yy(e, t) {
    if (
        (Uy(arguments.length <= 2, 'fromPromise expects up to two arguments'),
        Uy(
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
            ((n.value = e), (n.state = qy));
        }),
        Oh('observableFromPromise-reject', function (e) {
            ((n.value = e), (n.state = Gy));
        }),
    ),
        (n.isPromiseBasedObservable = !0),
        (n.case = Qy));
    var r = !t || (t.state !== qy && t.state !== Ky) ? void 0 : t.value;
    return (Bh(n, { value: r, state: Ky }, {}, { deep: !1 }), n);
}
((($y = Yy || (Yy = {})).reject = Oh('fromPromise.reject', function (e) {
    var t = $y(Promise.reject(e));
    return ((t.state = Gy), (t.value = e), t);
})),
    ($y.resolve = Oh('fromPromise.resolve', function (e) {
        void 0 === e && (e = void 0);
        var t = $y(Promise.resolve(e));
        return ((t.state = qy), (t.value = e), t);
    })));
var Xy = function (e, t, n, r) {
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
            sv(this),
            Ph(function () {
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
        Xy([wp.ref], e.prototype, 'current', void 0),
        Xy([Oh.bound], e.prototype, 'next', null),
        Xy([Oh.bound], e.prototype, 'complete', null),
        Xy([Oh.bound], e.prototype, 'error', null));
})();
var Zy = function () {
        return (
            (Zy =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e;
                }),
            Zy.apply(this, arguments)
        );
    },
    Jy = function (e, t, n, r) {
        var a,
            i = arguments.length,
            o = i < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
        else
            for (var l = e.length - 1; l >= 0; l--)
                (a = e[l]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, n, o) : a(t, n)) || o);
        return (i > 3 && o && Object.defineProperty(t, n, o), o);
    },
    eb = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
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
            sv(this),
            Uy(Fv(e), 'createViewModel expects an observable object'));
        var n = Hy(this);
        Hy(e).forEach(function (r) {
            var a;
            if (!n.includes(r) && r !== Td && '__mobxDidRunLazyInitializers' !== r) {
                if (
                    (Uy(
                        -1 === eb.indexOf(r),
                        'The propertyname ' + r + ' is reserved and cannot be used with viewModels',
                    ),
                    Xh(e, r))
                ) {
                    var i = eg(e, r),
                        o = i.derivation.bind(t),
                        l = null === (a = i.setter_) || void 0 === a ? void 0 : a.bind(t);
                    t.localComputedValues.set(r, Op(o, { set: l }));
                }
                var u = Object.getOwnPropertyDescriptor(e, r),
                    s = u ? { enumerable: u.enumerable } : {};
                Object.defineProperty(
                    t,
                    r,
                    Zy(Zy({}, s), {
                        configurable: !0,
                        get: function () {
                            return Xh(e, r)
                                ? t.localComputedValues.get(r).get()
                                : t.isPropertyDirty(r)
                                  ? t.localValues.get(r)
                                  : t.model[r];
                        },
                        set: Oh(function (n) {
                            Xh(e, r)
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
                Fv(e)
                    ? e[Td].keys_()
                    : Nv(e) || Rv(e)
                      ? Array.from(e.keys())
                      : Sv(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void Wf(5)).forEach(function (e) {
                    var n = t.localValues.get(e),
                        r = t.model[e];
                    Sv(r) ? r.replace(n) : Nv(r) ? (r.clear(), r.merge(n)) : Yh(n) || (t.model[e] = n);
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
        Jy([Op], e.prototype, 'isDirty', null),
        Jy([Op], e.prototype, 'changedValues', null),
        Jy([Oh.bound], e.prototype, 'submit', null),
        Jy([Oh.bound], e.prototype, 'reset', null),
        Jy([Oh.bound], e.prototype, 'resetProperty', null));
})();
var tb = (function () {
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
            (s._disposeBaseObserver = Jh(s._base, function (e) {
                if ('splice' === e.type)
                    ev(function () {
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
                    ev(function () {
                        (s._removeItem(e.oldValue), s._addItem(e.newValue));
                    });
                }
            })),
            s
        );
    }
    (tb(t, e),
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
                        reaction: jh(
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
})(Av);
var nb = (function () {
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
    rb = (function () {
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
                    return (this.last && (this.last.isDisposed = !0), (this.last = new nb(this.store, e)));
                },
            }),
            e
        );
    })(),
    ab = function () {
        return (
            (ab =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e;
                }),
            ab.apply(this, arguments)
        );
    };
function ib(e, t) {
    if ((void 0 === t && (t = !1), Ch(e))) throw new Error("computedFn shouldn't be used on actions");
    var n = !1,
        r = 0,
        a = 'boolean' == typeof t ? { keepAlive: t } : t,
        i = new rb();
    return function () {
        for (var t = this, o = [], l = 0; l < arguments.length; l++) o[l] = arguments[l];
        var u,
            s = i.entry(o);
        if (s.exists()) return s.get().get();
        if (!a.keepAlive && null === rh.trackingDerivation)
            return (
                !n &&
                    rh.computedRequiresReaction &&
                    (console.warn(
                        "invoking a computedFn from outside an reactive context won't be memoized, unless keepAlive is set",
                    ),
                    (n = !0)),
                e.apply(this, o)
            );
        var c = Op(
            function () {
                return (u = e.apply(t, o));
            },
            ab(ab({}, a), { name: 'computedFn(' + (a.name || e.name) + '#' + ++r + ')' }),
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
if (!V.useState) throw new Error('mobx-react-lite requires React with Hooks support');
if (!sv) throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
function ob(e) {
    e();
}
function lb(e) {
    return Uh(Jv(e, t));
    var t;
}
var ub = new ((function () {
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
    sb = { exports: {} },
    cb = {},
    fb = V;
var db =
        'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    pb = fb.useState,
    hb = fb.useEffect,
    vb = fb.useLayoutEffect,
    gb = fb.useDebugValue;
function mb(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !db(e, n);
    } catch (r) {
        return !0;
    }
}
var yb =
    'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
              return t();
          }
        : function (e, t) {
              var n = t(),
                  r = pb({ inst: { value: n, getSnapshot: t } }),
                  a = r[0].inst,
                  i = r[1];
              return (
                  vb(
                      function () {
                          ((a.value = n), (a.getSnapshot = t), mb(a) && i({ inst: a }));
                      },
                      [e, n, t],
                  ),
                  hb(
                      function () {
                          return (
                              mb(a) && i({ inst: a }),
                              e(function () {
                                  mb(a) && i({ inst: a });
                              })
                          );
                      },
                      [e],
                  ),
                  gb(n),
                  n
              );
          };
((cb.useSyncExternalStore = void 0 !== fb.useSyncExternalStore ? fb.useSyncExternalStore : yb), (sb.exports = cb));
var bb,
    _b,
    wb = sb.exports;
function kb(e) {
    e.reaction = new fh('observer'.concat(e.name), function () {
        var t;
        ((e.stateVersion = Symbol()), null === (t = e.onStoreChange) || void 0 === t || t.call(e));
    });
}
var Sb = 'function' == typeof Symbol && Symbol.for,
    xb =
        null !==
            (_b =
                null === (bb = Object.getOwnPropertyDescriptor(function () {}, 'name')) || void 0 === bb
                    ? void 0
                    : bb.configurable) &&
        void 0 !== _b &&
        _b,
    Ob = Sb
        ? Symbol.for('react.forward_ref')
        : 'function' == typeof V.forwardRef &&
          V.forwardRef(function (e) {
              return null;
          }).$$typeof,
    Eb = Sb
        ? Symbol.for('react.memo')
        : 'function' == typeof V.memo &&
          V.memo(function (e) {
              return null;
          }).$$typeof;
function Pb(e, t) {
    if (Eb && e.$$typeof === Eb)
        throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
        );
    var n = (void 0, !1),
        r = e,
        a = e.displayName || e.name;
    if (Ob && e.$$typeof === Ob && ((n = !0), 'function' != typeof (r = e.render)))
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
                            ub.unregister(r),
                            (r.onStoreChange = e),
                            r.reaction || (kb(r), (r.stateVersion = Symbol())),
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
                (o.reaction || (kb(o), ub.register(n, o, o)),
                F.useDebugValue(o.reaction, lb),
                wb.useSyncExternalStore(o.subscribe, o.getSnapshot, o.getSnapshot),
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
        xb && Object.defineProperty(i, 'name', { value: e.name, writable: !0, configurable: !0 }),
        e.contextTypes && (i.contextTypes = e.contextTypes),
        n && (i = V.forwardRef(i)),
        (function (e, t) {
            Object.keys(e).forEach(function (n) {
                Ab[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
            });
        })(e, (i = V.memo(i))),
        i
    );
}
var Cb,
    Ab = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function Nb(e) {
    var t,
        n,
        r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
        if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = Nb(e[t])) && (r && (r += ' '), (r += n));
        else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
}
function Tb() {
    for (var e, t, n = 0, r = ''; n < arguments.length; )
        (e = arguments[n++]) && (t = Nb(e)) && (r && (r += ' '), (r += t));
    return r;
}
((Cb = Vf.unstable_batchedUpdates) || (Cb = ob), Fh({ reactionScheduler: Cb }), ub.finalizeAllImmediately);
const jb = (e) => ('boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e),
    Rb = Tb,
    Lb = (e, t) => (n) => {
        var r;
        if (null == (null == t ? void 0 : t.variants))
            return Rb(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        const { variants: a, defaultVariants: i } = t,
            o = Object.keys(a).map((e) => {
                const t = null == n ? void 0 : n[e],
                    r = null == i ? void 0 : i[e];
                if (null === t) return null;
                const o = jb(t) || jb(r);
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
        return Rb(e, o, u, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
    };
export {
    F as R,
    ve as a,
    me as b,
    Ae as c,
    ge as d,
    $f as e,
    Oh as f,
    ib as g,
    Id as h,
    Te as i,
    G as j,
    Lb as k,
    Og as l,
    Ah as m,
    Ph as n,
    wp as o,
    Tb as p,
    Pb as q,
    V as r,
    Gp as u,
};
