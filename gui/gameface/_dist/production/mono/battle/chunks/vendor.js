function e(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var t = { exports: {} },
    n = {},
    r = { exports: {} },
    i = {},
    a = Symbol.for('react.element'),
    o = Symbol.for('react.portal'),
    u = Symbol.for('react.fragment'),
    l = Symbol.for('react.strict_mode'),
    s = Symbol.for('react.profiler'),
    c = Symbol.for('react.provider'),
    f = Symbol.for('react.context'),
    d = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    p = Symbol.for('react.memo'),
    v = Symbol.for('react.lazy'),
    g = Symbol.iterator;
var b = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    y = Object.assign,
    m = {};
function _(e, t, n) {
    ((this.props = e), (this.context = t), (this.refs = m), (this.updater = n || b));
}
function w() {}
function S(e, t, n) {
    ((this.props = e), (this.context = t), (this.refs = m), (this.updater = n || b));
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
var O = Array.isArray,
    x = Object.prototype.hasOwnProperty,
    E = { current: null },
    P = { key: !0, ref: !0, __self: !0, __source: !0 };
function A(e, t, n) {
    var r,
        i = {},
        o = null,
        u = null;
    if (null != t)
        for (r in (void 0 !== t.ref && (u = t.ref), void 0 !== t.key && (o = '' + t.key), t))
            x.call(t, r) && !P.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (1 === l) i.children = n;
    else if (1 < l) {
        for (var s = Array(l), c = 0; c < l; c++) s[c] = arguments[c + 2];
        i.children = s;
    }
    if (e && e.defaultProps) for (r in (l = e.defaultProps)) void 0 === i[r] && (i[r] = l[r]);
    return { $$typeof: a, type: e, key: o, ref: u, props: i, _owner: E.current };
}
function C(e) {
    return 'object' == typeof e && null !== e && e.$$typeof === a;
}
var j = /\/+/g;
function N(e, t) {
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
function T(e, t, n, r, i) {
    var u = typeof e;
    ('undefined' !== u && 'boolean' !== u) || (e = null);
    var l = !1;
    if (null === e) l = !0;
    else
        switch (u) {
            case 'string':
            case 'number':
                l = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case a:
                    case o:
                        l = !0;
                }
        }
    if (l)
        return (
            (i = i((l = e))),
            (e = '' === r ? '.' + N(l, 0) : r),
            O(i)
                ? ((n = ''),
                  null != e && (n = e.replace(j, '$&/') + '/'),
                  T(i, t, n, '', function (e) {
                      return e;
                  }))
                : null != i &&
                  (C(i) &&
                      (i = (function (e, t) {
                          return { $$typeof: a, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                      })(i, n + (!i.key || (l && l.key === i.key) ? '' : ('' + i.key).replace(j, '$&/') + '/') + e)),
                  t.push(i)),
            1
        );
    if (((l = 0), (r = '' === r ? '.' : r + ':'), O(e)))
        for (var s = 0; s < e.length; s++) {
            var c = r + N((u = e[s]), s);
            l += T(u, t, n, c, i);
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
        for (e = c.call(e), s = 0; !(u = e.next()).done; ) l += T((u = u.value), t, n, (c = r + N(u, s++)), i);
    else if ('object' === u)
        throw (
            (t = String(e)),
            Error(
                'Objects are not valid as a React child (found: ' +
                    ('[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
                    '). If you meant to render a collection of children, use an array instead.',
            )
        );
    return l;
}
function L(e, t, n) {
    if (null == e) return e;
    var r = [],
        i = 0;
    return (
        T(e, r, '', '', function (e) {
            return t.call(n, e, i++);
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
var V = { current: null },
    D = { transition: null },
    I = { ReactCurrentDispatcher: V, ReactCurrentBatchConfig: D, ReactCurrentOwner: E };
function z() {
    throw Error('act(...) is not supported in production builds of React.');
}
((i.Children = {
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
        if (!C(e)) throw Error('React.Children.only expected to receive a single React element child.');
        return e;
    },
}),
    (i.Component = _),
    (i.Fragment = u),
    (i.Profiler = s),
    (i.PureComponent = S),
    (i.StrictMode = l),
    (i.Suspense = h),
    (i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
    (i.act = z),
    (i.cloneElement = function (e, t, n) {
        if (null == e)
            throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
        var r = y({}, e.props),
            i = e.key,
            o = e.ref,
            u = e._owner;
        if (null != t) {
            if (
                (void 0 !== t.ref && ((o = t.ref), (u = E.current)),
                void 0 !== t.key && (i = '' + t.key),
                e.type && e.type.defaultProps)
            )
                var l = e.type.defaultProps;
            for (s in t) x.call(t, s) && !P.hasOwnProperty(s) && (r[s] = void 0 === t[s] && void 0 !== l ? l[s] : t[s]);
        }
        var s = arguments.length - 2;
        if (1 === s) r.children = n;
        else if (1 < s) {
            l = Array(s);
            for (var c = 0; c < s; c++) l[c] = arguments[c + 2];
            r.children = l;
        }
        return { $$typeof: a, type: e.type, key: i, ref: o, props: r, _owner: u };
    }),
    (i.createContext = function (e) {
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
    (i.createElement = A),
    (i.createFactory = function (e) {
        var t = A.bind(null, e);
        return ((t.type = e), t);
    }),
    (i.createRef = function () {
        return { current: null };
    }),
    (i.forwardRef = function (e) {
        return { $$typeof: d, render: e };
    }),
    (i.isValidElement = C),
    (i.lazy = function (e) {
        return { $$typeof: v, _payload: { _status: -1, _result: e }, _init: R };
    }),
    (i.memo = function (e, t) {
        return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
    }),
    (i.startTransition = function (e) {
        var t = D.transition;
        D.transition = {};
        try {
            e();
        } finally {
            D.transition = t;
        }
    }),
    (i.unstable_act = z),
    (i.useCallback = function (e, t) {
        return V.current.useCallback(e, t);
    }),
    (i.useContext = function (e) {
        return V.current.useContext(e);
    }),
    (i.useDebugValue = function () {}),
    (i.useDeferredValue = function (e) {
        return V.current.useDeferredValue(e);
    }),
    (i.useEffect = function (e, t) {
        return V.current.useEffect(e, t);
    }),
    (i.useId = function () {
        return V.current.useId();
    }),
    (i.useImperativeHandle = function (e, t, n) {
        return V.current.useImperativeHandle(e, t, n);
    }),
    (i.useInsertionEffect = function (e, t) {
        return V.current.useInsertionEffect(e, t);
    }),
    (i.useLayoutEffect = function (e, t) {
        return V.current.useLayoutEffect(e, t);
    }),
    (i.useMemo = function (e, t) {
        return V.current.useMemo(e, t);
    }),
    (i.useReducer = function (e, t, n) {
        return V.current.useReducer(e, t, n);
    }),
    (i.useRef = function (e) {
        return V.current.useRef(e);
    }),
    (i.useState = function (e) {
        return V.current.useState(e);
    }),
    (i.useSyncExternalStore = function (e, t, n) {
        return V.current.useSyncExternalStore(e, t, n);
    }),
    (i.useTransition = function () {
        return V.current.useTransition();
    }),
    (i.version = '18.3.1'),
    (r.exports = i));
var M = r.exports;
const B = e(M);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var U = M,
    F = Symbol.for('react.element'),
    $ = Symbol.for('react.fragment'),
    K = Object.prototype.hasOwnProperty,
    W = U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    H = { key: !0, ref: !0, __self: !0, __source: !0 };
function q(e, t, n) {
    var r,
        i = {},
        a = null,
        o = null;
    for (r in (void 0 !== n && (a = '' + n), void 0 !== t.key && (a = '' + t.key), void 0 !== t.ref && (o = t.ref), t))
        K.call(t, r) && !H.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
    return { $$typeof: F, type: e, key: a, ref: o, props: i, _owner: W.current };
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
function X(e, t) {
    if ('function' != typeof t && null !== t)
        throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
    function n() {
        this.constructor = e;
    }
    (Q(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())));
}
var Y = function () {
    return (
        (Y =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
            }),
        Y.apply(this, arguments)
    );
};
function J(e, t) {
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
        (a = { next: u(0), throw: u(1), return: u(2) }),
        'function' == typeof Symbol &&
            (a[Symbol.iterator] = function () {
                return this;
            }),
        a
    );
    function u(u) {
        return function (l) {
            return (function (u) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; a && ((a = 0), u[0] && (o = 0)), o; )
                    try {
                        if (
                            ((n = 1),
                            r &&
                                (i =
                                    2 & u[0]
                                        ? r.return
                                        : u[0]
                                          ? r.throw || ((i = r.return) && i.call(r), 0)
                                          : r.next) &&
                                !(i = i.call(r, u[1])).done)
                        )
                            return i;
                        switch (((r = 0), i && (u = [2 & u[0], i.value]), u[0])) {
                            case 0:
                            case 1:
                                i = u;
                                break;
                            case 4:
                                return (o.label++, { value: u[1], done: !1 });
                            case 5:
                                (o.label++, (r = u[1]), (u = [0]));
                                continue;
                            case 7:
                                ((u = o.ops.pop()), o.trys.pop());
                                continue;
                            default:
                                if (
                                    !((i = o.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== u[0] && 2 !== u[0]))
                                ) {
                                    o = 0;
                                    continue;
                                }
                                if (3 === u[0] && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                                    o.label = u[1];
                                    break;
                                }
                                if (6 === u[0] && o.label < i[1]) {
                                    ((o.label = i[1]), (i = u));
                                    break;
                                }
                                if (i && o.label < i[2]) {
                                    ((o.label = i[2]), o.ops.push(u));
                                    break;
                                }
                                (i[2] && o.ops.pop(), o.trys.pop());
                                continue;
                        }
                        u = t.call(e, o);
                    } catch (l) {
                        ((u = [6, l]), (r = 0));
                    } finally {
                        n = i = 0;
                    }
                if (5 & u[0]) throw u[1];
                return { value: u[0] ? u[1] : void 0, done: !0 };
            })([u, l]);
        };
    }
}
function Z(e, t, n) {
    if (n || 2 === arguments.length)
        for (var r, i = 0, a = t.length; i < a; i++)
            (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
    return e.concat(r || Array.prototype.slice.call(t));
}
'function' == typeof SuppressedError && SuppressedError;
var ee = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (X(t, e), t);
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
            return (X(t, e), t);
        })(Error),
    ),
    te = (function (e) {
        function t(t, n, r, i) {
            return (
                e.call(this, ''.concat(t, ': expected ').concat(n, ' to be ').concat(r, ', but got ').concat(i, '.')) ||
                this
            );
        }
        return (
            X(t, e),
            (t.assert = function (e, n, r, i, a) {
                if (!e) throw new t(n, r, i, a);
                return e;
            }),
            t
        );
    })(ee),
    ne = (function (e) {
        function t(t, n, r) {
            var i = t.toString(),
                a = n.map(function (e) {
                    return e.name.toString();
                });
            a.push(i);
            var o = a.join(' -> '),
                u = "Could not resolve '".concat(i, "'.");
            return (
                r && (u += ' '.concat(r)),
                (u += '\n\n'),
                (u += 'Resolution path: '.concat(o)),
                e.call(this, u) || this
            );
        }
        return (X(t, e), t);
    })(ee),
    re = (function (e) {
        function t(t, n) {
            var r = t.toString(),
                i = "Could not register '".concat(r, "'.");
            return (n && (i += ' '.concat(n)), e.call(this, i) || this);
        }
        return (X(t, e), t);
    })(ee),
    ie = { PROXY: 'PROXY', CLASSIC: 'CLASSIC' },
    ae = { SINGLETON: 'SINGLETON', TRANSIENT: 'TRANSIENT', SCOPED: 'SCOPED' };
function oe(e) {
    var t = e.length,
        n = 0,
        r = 'EOF',
        i = '',
        a = 0,
        o = 0,
        u = 0;
    return {
        next: function (e) {
            void 0 === e && (e = 0);
            return ((a = e), l(), d());
        },
        done: function () {
            return 'EOF' === r;
        },
    };
    function l() {
        for (i = '', r = 'EOF'; ; ) {
            if (n >= t) return (r = 'EOF');
            var l = e.charAt(n);
            if (ue(l)) n++;
            else
                switch (l) {
                    case '(':
                        return (n++, o++, (r = l));
                    case ')':
                        return (n++, u++, (r = l));
                    case '*':
                    case ',':
                        return (n++, (r = l));
                    case '=':
                        return (
                            n++,
                            0 == (1 & a) &&
                                c(function (e) {
                                    var t = o === u + 1;
                                    return !(',' !== e || !t) || ('(' === e ? (o++, !1) : !(')' !== e || (u++, !t)));
                                }),
                            (r = l)
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
                        if (fe(l)) return (s(), r);
                        n++;
                }
        }
    }
    function s() {
        for (var t, a = e.charAt(n), o = ++n; (t = e.charAt(n)), ce.test(t); ) n++;
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
                if (ue(i)) {
                    n++;
                    continue;
                }
                if (le(i)) {
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
function ue(e) {
    switch (e) {
        case '\r':
        case '\n':
        case ' ':
            return !0;
    }
    return !1;
}
function le(e) {
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
function he(e) {
    return 'function' == typeof e;
}
var pe = Symbol('Awilix Resolver Config');
function ve(e) {
    return {
        resolve: function () {
            return e;
        },
        isLeakSafe: !0,
    };
}
function ge(e, t) {
    if (!he(e)) throw new te('asFunction', 'fn', 'function', e);
    t = we({ lifetime: ae.TRANSIENT }, t, e[pe]);
    var n = Oe(e);
    return me(ye(Y({ resolve: n }, t)));
}
function be(e, t) {
    if (!he(e)) throw new te('asClass', 'Type', 'class', e);
    t = we({ lifetime: ae.TRANSIENT }, t, e[pe]);
    var n = Oe(function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return Reflect.construct(e, t);
    }, e);
    return me(ye(Y(Y({}, t), { resolve: n })));
}
function ye(e) {
    function t(e) {
        return ye(Y(Y({}, this), { lifetime: e }));
    }
    function n(e) {
        return ye(Y(Y({}, this), { injectionMode: e }));
    }
    return Se(e, {
        setLifetime: t,
        inject: function (e) {
            return ye(Y(Y({}, this), { injector: e }));
        },
        transient: _e(t, ae.TRANSIENT),
        scoped: _e(t, ae.SCOPED),
        singleton: _e(t, ae.SINGLETON),
        setInjectionMode: n,
        proxy: _e(n, ie.PROXY),
        classic: _e(n, ie.CLASSIC),
    });
}
function me(e) {
    return Se(e, {
        disposer: function (e) {
            return me(Y(Y({}, this), { dispose: e }));
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
    return Object.assign.apply(Object, Z([{}, e], t, !1));
}
function Se(e, t) {
    return Y(Y({}, e), t);
}
function ke(e, t) {
    var n,
        r = t(e),
        i = ((n = Z(Z([], Reflect.ownKeys(e.cradle), !0), Reflect.ownKeys(r), !0)), Array.from(new Set(n)));
    return new Proxy(
        {},
        {
            get: function (t, n) {
                return n === Symbol.iterator
                    ? function () {
                          var t, n, i, a, o, u, l, s;
                          return J(this, function (c) {
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
                                      for (l in ((u = []), (o = r))) u.push(l);
                                      ((s = 0), (c.label = 5));
                                  case 5:
                                      return s < u.length ? ((l = u[s]) in o ? [4, l] : [3, 7]) : [3, 8];
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
function Oe(e, t) {
    t || (t = e);
    var n = xe(t);
    return function (t) {
        if ((this.injectionMode || t.options.injectionMode || ie.PROXY) !== ie.CLASSIC) {
            var r = this.injector ? ke(t, this.injector) : t.cradle;
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
function xe(e) {
    var t = (function (e) {
        var t = oe(e),
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
                    l();
                    break;
                case ')':
                    return i;
                case 'ident':
                    var o,
                        u = { name: a.value, optional: !1 };
                    if ('async' === a.value && (o = f()) && '=' !== o.type) break;
                    return (i.push(u), i);
                default:
                    throw d();
            }
        return i;
        function l() {
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
        return 'function' == typeof n && n !== Function.prototype ? xe(n) : [];
    }
    return t;
}
var Ee = Symbol('familyTree'),
    Pe = Symbol('rollUpRegistrations'),
    Ae = 'AwilixContainerCradle';
function Ce(e) {
    return (void 0 === e && (e = {}), je(e));
}
function je(e, t, n) {
    var r;
    e = Y({ injectionMode: ie.PROXY, strict: !1 }, e);
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
        u =
            (((r = {
                options: e,
                cradle: o,
                inspect: function () {
                    return '[AwilixContainer ('
                        .concat(t ? 'scoped, ' : '', 'registrations: ')
                        .concat(Object.keys(u.registrations).length, ')]');
                },
                cache: new Map(),
                loadModules: function () {
                    throw new Error('loadModules is not supported in the browser.');
                },
                createScope: function () {
                    return je(e, u, i);
                },
                register: function (n, r) {
                    for (
                        var i = (function (e, t) {
                                var n,
                                    r = e;
                                return 'string' == typeof r || 'symbol' == typeof r ? (((n = {})[e] = t), n) : r;
                            })(n, r),
                            o = Z(Z([], Object.keys(i), !0), Object.getOwnPropertySymbols(i), !0),
                            l = 0,
                            s = o;
                        l < s.length;
                        l++
                    ) {
                        var c = s[l],
                            f = i[c];
                        if (e.strict && f.lifetime === ae.SINGLETON && t)
                            throw new re(c, 'Cannot register a singleton on a scoped container.');
                        a[c] = f;
                    }
                    return u;
                },
                build: function (e, t) {
                    if (e && e.resolve) return e.resolve(u);
                    var n = 'build',
                        r = 'targetOrResolver';
                    return (
                        te.assert(e, n, r, 'a registration, function or class', e),
                        te.assert('function' == typeof e, n, r, 'a function or class', e),
                        (de(e) ? be(e, t) : ge(e, t)).resolve(u)
                    );
                },
                resolve: v,
                hasRegistration: function (e) {
                    return !!p(e);
                },
                dispose: function () {
                    var e = Array.from(u.cache.entries());
                    return (
                        u.cache.clear(),
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
            })[Pe] = f),
            Object.defineProperty(r, 'registrations', {
                get: function () {
                    return f();
                },
                enumerable: !1,
                configurable: !0,
            }),
            r),
        l = t ? [u].concat(t[Ee]) : [u];
    u[Ee] = l;
    var s,
        c = (s = l)[s.length - 1];
    return u;
    function f() {
        return Y(Y({}, t && t[Pe]()), a);
    }
    function d() {
        var e, t, n, r, i;
        return J(this, function (a) {
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
    function h() {
        return Object.prototype.toString.call(o);
    }
    function p(e) {
        var n = a[e];
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
                throw new ne(t, i, 'Cyclic dependencies detected.');
            if ('toJSON' === t) return h;
            if ('constructor' === t) return Ce;
            if (!r) {
                switch (t) {
                    case 'inspect':
                    case 'toString':
                        return h;
                    case Symbol.toStringTag:
                        return Ae;
                    case 'then':
                        return;
                    case Symbol.iterator:
                        return d;
                }
                if (n.allowUnregistered) return;
                throw new ne(t, i);
            }
            var a = r.lifetime || ae.TRANSIENT;
            if (e.strict && !r.isLeakSafe) {
                var o = i.findIndex(function (e) {
                    var t,
                        n,
                        r = e.lifetime;
                    return (
                        (n = a),
                        ((t = r) === ae.SINGLETON && n !== ae.SINGLETON) || (t === ae.SCOPED && n === ae.TRANSIENT)
                    );
                });
                if (o > -1)
                    throw new ne(
                        t,
                        i,
                        "Dependency '"
                            .concat(t.toString(), "' has a shorter lifetime than its ancestor: '")
                            .concat(i[o].name.toString(), "'"),
                    );
            }
            i.push({ name: t, lifetime: a });
            var l = void 0,
                s = void 0;
            switch (a) {
                case ae.TRANSIENT:
                    s = r.resolve(u);
                    break;
                case ae.SINGLETON:
                    (l = c.cache.get(t))
                        ? (s = l.value)
                        : ((s = r.resolve(e.strict ? c : u)), c.cache.set(t, { resolver: r, value: s }));
                    break;
                case ae.SCOPED:
                    if (void 0 !== (l = u.cache.get(t))) {
                        s = l.value;
                        break;
                    }
                    ((s = r.resolve(u)), u.cache.set(t, { resolver: r, value: s }));
                    break;
                default:
                    throw new ne(t, i, 'Unknown lifetime "'.concat(r.lifetime, '"'));
            }
            return (i.pop(), s);
        } catch (f) {
            throw ((i.length = 0), f);
        }
    }
}
var Ne = {},
    Te = { exports: {} },
    Le = {},
    Re = { exports: {} },
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
                var u = 2 * (r + 1) - 1,
                    l = e[u],
                    s = u + 1,
                    c = e[s];
                if (0 > i(l, n))
                    s < a && 0 > i(c, l) ? ((e[r] = c), (e[s] = n), (r = s)) : ((e[r] = l), (e[u] = n), (r = u));
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
            u = o.now();
        e.unstable_now = function () {
            return o.now() - u;
        };
    }
    var l = [],
        s = [],
        c = 1,
        f = null,
        d = 3,
        h = !1,
        p = !1,
        v = !1,
        g = 'function' == typeof setTimeout ? setTimeout : null,
        b = 'function' == typeof clearTimeout ? clearTimeout : null,
        y = 'undefined' != typeof setImmediate ? setImmediate : null;
    function m(e) {
        for (var i = n(s); null !== i; ) {
            if (null === i.callback) r(s);
            else {
                if (!(i.startTime <= e)) break;
                (r(s), (i.sortIndex = i.expirationTime), t(l, i));
            }
            i = n(s);
        }
    }
    function _(e) {
        if (((v = !1), m(e), !p))
            if (null !== n(l)) ((p = !0), T(w));
            else {
                var t = n(s);
                null !== t && L(_, t.startTime - e);
            }
    }
    function w(t, i) {
        ((p = !1), v && ((v = !1), b(x), (x = -1)), (h = !0));
        var a = d;
        try {
            for (m(i), f = n(l); null !== f && (!(f.expirationTime > i) || (t && !A())); ) {
                var o = f.callback;
                if ('function' == typeof o) {
                    ((f.callback = null), (d = f.priorityLevel));
                    var u = o(f.expirationTime <= i);
                    ((i = e.unstable_now()), 'function' == typeof u ? (f.callback = u) : f === n(l) && r(l), m(i));
                } else r(l);
                f = n(l);
            }
            if (null !== f) var c = !0;
            else {
                var g = n(s);
                (null !== g && L(_, g.startTime - i), (c = !1));
            }
            return c;
        } finally {
            ((f = null), (d = a), (h = !1));
        }
    }
    'undefined' != typeof navigator &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var S,
        k = !1,
        O = null,
        x = -1,
        E = 5,
        P = -1;
    function A() {
        return !(e.unstable_now() - P < E);
    }
    function C() {
        if (null !== O) {
            var t = e.unstable_now();
            P = t;
            var n = !0;
            try {
                n = O(!0, t);
            } finally {
                n ? S() : ((k = !1), (O = null));
            }
        } else k = !1;
    }
    if ('function' == typeof y)
        S = function () {
            y(C);
        };
    else if ('undefined' != typeof MessageChannel) {
        var j = new MessageChannel(),
            N = j.port2;
        ((j.port1.onmessage = C),
            (S = function () {
                N.postMessage(null);
            }));
    } else
        S = function () {
            g(C, 0);
        };
    function T(e) {
        ((O = e), k || ((k = !0), S()));
    }
    function L(t, n) {
        x = g(function () {
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
            p || h || ((p = !0), T(w));
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
            return n(l);
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
                    var u = -1;
                    break;
                case 2:
                    u = 250;
                    break;
                case 5:
                    u = 1073741823;
                    break;
                case 4:
                    u = 1e4;
                    break;
                default:
                    u = 5e3;
            }
            return (
                (r = {
                    id: c++,
                    callback: i,
                    priorityLevel: r,
                    startTime: a,
                    expirationTime: (u = a + u),
                    sortIndex: -1,
                }),
                a > o
                    ? ((r.sortIndex = a),
                      t(s, r),
                      null === n(l) && r === n(s) && (v ? (b(x), (x = -1)) : (v = !0), L(_, a - o)))
                    : ((r.sortIndex = u), t(l, r), p || h || ((p = !0), T(w))),
                r
            );
        }),
        (e.unstable_shouldYield = A),
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
    (Re.exports = Ve));
var De = Re.exports,
    Ie = M,
    ze = De;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Me(e) {
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
var Be = new Set(),
    Ue = {};
function Fe(e, t) {
    ($e(e, t), $e(e + 'Capture', t));
}
function $e(e, t) {
    for (Ue[e] = t, e = 0; e < t.length; e++) Be.add(t[e]);
}
var Ke = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    We = Object.prototype.hasOwnProperty,
    He =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    qe = {},
    Ge = {};
function Qe(e, t, n, r, i, a, o) {
    ((this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = a),
        (this.removeEmptyString = o));
}
var Xe = {};
('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        Xe[e] = new Qe(e, 0, !1, e, null, !1, !1);
    }),
    [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
        var t = e[0];
        Xe[t] = new Qe(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
        Xe[e] = new Qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
        Xe[e] = new Qe(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (e) {
            Xe[e] = new Qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
        Xe[e] = new Qe(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
        Xe[e] = new Qe(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
        Xe[e] = new Qe(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
        Xe[e] = new Qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
var Ye = /[\-:]([a-z])/g;
function Je(e) {
    return e[1].toUpperCase();
}
function Ze(e, t, n, r) {
    var i = Xe.hasOwnProperty(t) ? Xe[t] : null;
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
                  return !!We.call(Ge, e) || (!We.call(qe, e) && (He.test(e) ? (Ge[e] = !0) : ((qe[e] = !0), !1)));
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
        var t = e.replace(Ye, Je);
        Xe[t] = new Qe(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
        var t = e.replace(Ye, Je);
        Xe[t] = new Qe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(Ye, Je);
        Xe[t] = new Qe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
        Xe[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Xe.xlinkHref = new Qe('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        Xe[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
var et = Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    tt = Symbol.for('react.element'),
    nt = Symbol.for('react.portal'),
    rt = Symbol.for('react.fragment'),
    it = Symbol.for('react.strict_mode'),
    at = Symbol.for('react.profiler'),
    ot = Symbol.for('react.provider'),
    ut = Symbol.for('react.context'),
    lt = Symbol.for('react.forward_ref'),
    st = Symbol.for('react.suspense'),
    ct = Symbol.for('react.suspense_list'),
    ft = Symbol.for('react.memo'),
    dt = Symbol.for('react.lazy'),
    ht = Symbol.for('react.offscreen'),
    pt = Symbol.iterator;
function vt(e) {
    return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (pt && e[pt]) || e['@@iterator'])
          ? e
          : null;
}
var gt,
    bt = Object.assign;
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
var mt = !1;
function _t(e, t) {
    if (!e || mt) return '';
    mt = !0;
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
                var i = s.stack.split('\n'), a = r.stack.split('\n'), o = i.length - 1, u = a.length - 1;
                1 <= o && 0 <= u && i[o] !== a[u];
            )
                u--;
            for (; 1 <= o && 0 <= u; o--, u--)
                if (i[o] !== a[u]) {
                    if (1 !== o || 1 !== u)
                        do {
                            if ((o--, 0 > --u || i[o] !== a[u])) {
                                var l = '\n' + i[o].replace(' at new ', ' at ');
                                return (
                                    e.displayName &&
                                        l.includes('<anonymous>') &&
                                        (l = l.replace('<anonymous>', e.displayName)),
                                    l
                                );
                            }
                        } while (1 <= o && 0 <= u);
                    break;
                }
        }
    } finally {
        ((mt = !1), (Error.prepareStackTrace = n));
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
        case at:
            return 'Profiler';
        case it:
            return 'StrictMode';
        case st:
            return 'Suspense';
        case ct:
            return 'SuspenseList';
    }
    if ('object' == typeof e)
        switch (e.$$typeof) {
            case ut:
                return (e.displayName || 'Context') + '.Consumer';
            case ot:
                return (e._context.displayName || 'Context') + '.Provider';
            case lt:
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
            return t === it ? 'StrictMode' : 'Mode';
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
function Ot(e) {
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
function xt(e) {
    var t = e.type;
    return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
}
function Et(e) {
    e._valueTracker ||
        (e._valueTracker = (function (e) {
            var t = xt(e) ? 'checked' : 'value',
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
function Pt(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = '';
    return (e && (r = xt(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0));
}
function At(e) {
    if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body;
    } catch (t) {
        return e.body;
    }
}
function Ct(e, t) {
    var n = t.checked;
    return bt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
    });
}
function jt(e, t) {
    var n = null == t.defaultValue ? '' : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
    ((n = Ot(null != t.value ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
        }));
}
function Nt(e, t) {
    null != (t = t.checked) && Ze(e, 'checked', t, !1);
}
function Tt(e, t) {
    Nt(e, t);
    var n = Ot(t.value),
        r = t.type;
    if (null != n)
        'number' === r
            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
    (t.hasOwnProperty('value')
        ? Rt(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && Rt(e, t.type, Ot(t.defaultValue)),
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
function Rt(e, t, n) {
    ('number' === t && At(e.ownerDocument) === e) ||
        (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Vt = Array.isArray;
function Dt(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            ((i = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0));
    } else {
        for (n = '' + Ot(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) return ((e[i].selected = !0), void (r && (e[i].defaultSelected = !0)));
            null !== t || e[i].disabled || (t = e[i]);
        }
        null !== t && (t.selected = !0);
    }
}
function It(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(Me(91));
    return bt({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function zt(e, t) {
    var n = t.value;
    if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(Me(92));
            if (Vt(n)) {
                if (1 < n.length) throw Error(Me(93));
                n = n[0];
            }
            t = n;
        }
        (null == t && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: Ot(n) };
}
function Mt(e, t) {
    var n = Ot(t.value),
        r = Ot(t.defaultValue);
    (null != n &&
        ((n = '' + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = '' + r));
}
function Bt(e) {
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
function Ft(e, t) {
    return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? Ut(t)
        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
}
var $t,
    Kt,
    Wt =
        ((Kt = function (e, t) {
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
                      return Kt(e, t);
                  });
              }
            : Kt);
function Ht(e, t) {
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
function Xt(e, t) {
    for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf('--'),
                i = Qt(n, t[n], r);
            ('float' === n && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i));
        }
}
Object.keys(qt).forEach(function (e) {
    Gt.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qt[t] = qt[e]));
    });
});
var Yt = bt(
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
function Jt(e, t) {
    if (t) {
        if (Yt[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(Me(137, e));
        if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(Me(60));
            if ('object' != typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
                throw Error(Me(61));
        }
        if (null != t.style && 'object' != typeof t.style) throw Error(Me(62));
    }
}
function Zt(e, t) {
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
    if ((e = Za(e))) {
        if ('function' != typeof nn) throw Error(Me(280));
        var t = e.stateNode;
        t && ((t = to(t)), nn(e.stateNode, e.type, t));
    }
}
function un(e) {
    rn ? (an ? an.push(e) : (an = [e])) : (rn = e);
}
function ln() {
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
        ((fn = !1), (null !== rn || null !== an) && (cn(), ln()));
    }
}
function hn(e, t) {
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
    if (n && 'function' != typeof n) throw Error(Me(231, t, typeof n));
    return n;
}
var pn = !1;
if (Ke)
    try {
        var vn = {};
        (Object.defineProperty(vn, 'passive', {
            get: function () {
                pn = !0;
            },
        }),
            window.addEventListener('test', vn, vn),
            window.removeEventListener('test', vn, vn));
    } catch (Kt) {
        pn = !1;
    }
function gn(e, t, n, r, i, a, o, u, l) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s);
    } catch (c) {
        this.onError(c);
    }
}
var bn = !1,
    yn = null,
    mn = !1,
    _n = null,
    wn = {
        onError: function (e) {
            ((bn = !0), (yn = e));
        },
    };
function Sn(e, t, n, r, i, a, o, u, l) {
    ((bn = !1), (yn = null), gn.apply(wn, arguments));
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
function On(e) {
    if (13 === e.tag) {
        var t = e.memoizedState;
        if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
    }
    return null;
}
function xn(e) {
    if (kn(e) !== e) throw Error(Me(188));
}
function En(e) {
    return null !==
        (e = (function (e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = kn(e))) throw Error(Me(188));
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
                        if (a === n) return (xn(i), e);
                        if (a === r) return (xn(i), t);
                        a = a.sibling;
                    }
                    throw Error(Me(188));
                }
                if (n.return !== r.return) ((n = i), (r = a));
                else {
                    for (var o = !1, u = i.child; u; ) {
                        if (u === n) {
                            ((o = !0), (n = i), (r = a));
                            break;
                        }
                        if (u === r) {
                            ((o = !0), (r = i), (n = a));
                            break;
                        }
                        u = u.sibling;
                    }
                    if (!o) {
                        for (u = a.child; u; ) {
                            if (u === n) {
                                ((o = !0), (n = a), (r = i));
                                break;
                            }
                            if (u === r) {
                                ((o = !0), (r = a), (n = i));
                                break;
                            }
                            u = u.sibling;
                        }
                        if (!o) throw Error(Me(189));
                    }
                }
                if (n.alternate !== r) throw Error(Me(190));
            }
            if (3 !== n.tag) throw Error(Me(188));
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
var An = ze.unstable_scheduleCallback,
    Cn = ze.unstable_cancelCallback,
    jn = ze.unstable_shouldYield,
    Nn = ze.unstable_requestPaint,
    Tn = ze.unstable_now,
    Ln = ze.unstable_getCurrentPriorityLevel,
    Rn = ze.unstable_ImmediatePriority,
    Vn = ze.unstable_UserBlockingPriority,
    Dn = ze.unstable_NormalPriority,
    In = ze.unstable_LowPriority,
    zn = ze.unstable_IdlePriority,
    Mn = null,
    Bn = null;
var Un = Math.clz32
        ? Math.clz32
        : function (e) {
              return ((e >>>= 0), 0 === e ? 32 : (31 - ((Fn(e) / $n) | 0)) | 0);
          },
    Fn = Math.log,
    $n = Math.LN2;
var Kn = 64,
    Wn = 4194304;
function Hn(e) {
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
        i = e.suspendedLanes,
        a = e.pingedLanes,
        o = 268435455 & n;
    if (0 !== o) {
        var u = o & ~i;
        0 !== u ? (r = Hn(u)) : 0 !== (a &= o) && (r = Hn(a));
    } else 0 !== (o = n & ~i) ? (r = Hn(o)) : 0 !== a && (r = Hn(a));
    if (0 === r) return 0;
    if (0 !== t && t !== r && 0 == (t & i) && ((i = r & -r) >= (a = t & -t) || (16 === i && 0 != (4194240 & a))))
        return t;
    if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; ) ((i = 1 << (n = 31 - Un(t))), (r |= e[n]), (t &= ~i));
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
function Xn() {
    var e = Kn;
    return (0 == (4194240 & (Kn <<= 1)) && (Kn = 64), e);
}
function Yn(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Jn(e, t, n) {
    ((e.pendingLanes |= t),
        536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        ((e = e.eventTimes)[(t = 31 - Un(t))] = n));
}
function Zn(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Un(n),
            i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
    }
}
var er = 0;
function tr(e) {
    return 1 < (e &= -e) ? (4 < e ? (0 != (268435455 & e) ? 16 : 536870912) : 4) : 1;
}
var nr,
    rr,
    ir,
    ar,
    or,
    ur = !1,
    lr = [],
    sr = null,
    cr = null,
    fr = null,
    dr = new Map(),
    hr = new Map(),
    pr = [],
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
            hr.delete(t.pointerId);
    }
}
function br(e, t, n, r, i, a) {
    return null === e || e.nativeEvent !== a
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }),
          null !== t && null !== (t = Za(t)) && rr(t),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== i && -1 === t.indexOf(i) && t.push(i), e);
}
function yr(e) {
    var t = Ja(e.target);
    if (null !== t) {
        var n = kn(t);
        if (null !== n)
            if (13 === (t = n.tag)) {
                if (null !== (t = On(n)))
                    return (
                        (e.blockedOn = t),
                        void or(e.priority, function () {
                            ir(n);
                        })
                    );
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
}
function mr(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = jr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return (null !== (t = Za(n)) && rr(t), (e.blockedOn = n), !1);
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        ((en = r), n.target.dispatchEvent(r), (en = null), t.shift());
    }
    return !0;
}
function _r(e, t, n) {
    mr(e) && n.delete(t);
}
function wr() {
    ((ur = !1),
        null !== sr && mr(sr) && (sr = null),
        null !== cr && mr(cr) && (cr = null),
        null !== fr && mr(fr) && (fr = null),
        dr.forEach(_r),
        hr.forEach(_r));
}
function Sr(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), ur || ((ur = !0), ze.unstable_scheduleCallback(ze.unstable_NormalPriority, wr)));
}
function kr(e) {
    function t(t) {
        return Sr(t, e);
    }
    if (0 < lr.length) {
        Sr(lr[0], e);
        for (var n = 1; n < lr.length; n++) {
            var r = lr[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        null !== sr && Sr(sr, e),
            null !== cr && Sr(cr, e),
            null !== fr && Sr(fr, e),
            dr.forEach(t),
            hr.forEach(t),
            n = 0;
        n < pr.length;
        n++
    )
        (r = pr[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < pr.length && null === (n = pr[0]).blockedOn; ) (yr(n), null === n.blockedOn && pr.shift());
}
var Or = et.ReactCurrentBatchConfig,
    xr = !0;
function Er(e, t, n, r) {
    var i = er,
        a = Or.transition;
    Or.transition = null;
    try {
        ((er = 1), Ar(e, t, n, r));
    } finally {
        ((er = i), (Or.transition = a));
    }
}
function Pr(e, t, n, r) {
    var i = er,
        a = Or.transition;
    Or.transition = null;
    try {
        ((er = 4), Ar(e, t, n, r));
    } finally {
        ((er = i), (Or.transition = a));
    }
}
function Ar(e, t, n, r) {
    if (xr) {
        var i = jr(e, t, n, r);
        if (null === i) (Oa(e, t, r, Cr, n), gr(e, r));
        else if (
            (function (e, t, n, r, i) {
                switch (t) {
                    case 'focusin':
                        return ((sr = br(sr, e, t, n, r, i)), !0);
                    case 'dragenter':
                        return ((cr = br(cr, e, t, n, r, i)), !0);
                    case 'mouseover':
                        return ((fr = br(fr, e, t, n, r, i)), !0);
                    case 'pointerover':
                        var a = i.pointerId;
                        return (dr.set(a, br(dr.get(a) || null, e, t, n, r, i)), !0);
                    case 'gotpointercapture':
                        return ((a = i.pointerId), hr.set(a, br(hr.get(a) || null, e, t, n, r, i)), !0);
                }
                return !1;
            })(i, e, t, n, r)
        )
            r.stopPropagation();
        else if ((gr(e, r), 4 & t && -1 < vr.indexOf(e))) {
            for (; null !== i; ) {
                var a = Za(i);
                if ((null !== a && nr(a), null === (a = jr(e, t, n, r)) && Oa(e, t, r, Cr, n), a === i)) break;
                i = a;
            }
            null !== i && r.stopPropagation();
        } else Oa(e, t, r, null, n);
    }
}
var Cr = null;
function jr(e, t, n, r) {
    if (((Cr = null), null !== (e = Ja((e = tn(r))))))
        if (null === (t = kn(e))) e = null;
        else if (13 === (n = t.tag)) {
            if (null !== (e = On(t))) return e;
            e = null;
        } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return ((Cr = e), null);
}
function Nr(e) {
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
                case Rn:
                    return 1;
                case Vn:
                    return 4;
                case Dn:
                case In:
                    return 16;
                case zn:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Tr = null,
    Lr = null,
    Rr = null;
function Vr() {
    if (Rr) return Rr;
    var e,
        t,
        n = Lr,
        r = n.length,
        i = 'value' in Tr ? Tr.value : Tr.textContent,
        a = i.length;
    for (e = 0; e < r && n[e] === i[e]; e++);
    var o = r - e;
    for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
    return (Rr = i.slice(e, 1 < t ? 1 - t : void 0));
}
function Dr(e) {
    var t = e.keyCode;
    return (
        'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
    );
}
function Ir() {
    return !0;
}
function zr() {
    return !1;
}
function Mr(e) {
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
                ? Ir
                : zr),
            (this.isPropagationStopped = zr),
            this
        );
    }
    return (
        bt(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                    (e.preventDefault ? e.preventDefault() : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
                    (this.isDefaultPrevented = Ir));
            },
            stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                    (e.stopPropagation
                        ? e.stopPropagation()
                        : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                    (this.isPropagationStopped = Ir));
            },
            persist: function () {},
            isPersistent: Ir,
        }),
        t
    );
}
var Br,
    Ur,
    Fr,
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
    Kr = Mr($r),
    Wr = bt({}, $r, { view: 0, detail: 0 }),
    Hr = Mr(Wr),
    qr = bt({}, Wr, {
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
        getModifierState: ai,
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
                : (e !== Fr &&
                      (Fr && 'mousemove' === e.type
                          ? ((Br = e.screenX - Fr.screenX), (Ur = e.screenY - Fr.screenY))
                          : (Ur = Br = 0),
                      (Fr = e)),
                  Br);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : Ur;
        },
    }),
    Gr = Mr(qr),
    Qr = Mr(bt({}, qr, { dataTransfer: 0 })),
    Xr = Mr(bt({}, Wr, { relatedTarget: 0 })),
    Yr = Mr(bt({}, $r, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    Jr = bt({}, $r, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    Zr = Mr(Jr),
    ei = Mr(bt({}, $r, { data: 0 })),
    ti = {
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
    ni = {
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
    ri = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function ii(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = ri[e]) && !!t[e];
}
function ai() {
    return ii;
}
var oi = bt({}, Wr, {
        key: function (e) {
            if (e.key) {
                var t = ti[e.key] || e.key;
                if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
                ? 13 === (e = Dr(e))
                    ? 'Enter'
                    : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? ni[e.keyCode] || 'Unidentified'
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
        getModifierState: ai,
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
    ui = Mr(oi),
    li = Mr(
        bt({}, qr, {
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
    si = Mr(
        bt({}, Wr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ai,
        }),
    ),
    ci = Mr(bt({}, $r, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    fi = bt({}, qr, {
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
    di = Mr(fi),
    hi = [9, 13, 27, 32],
    pi = Ke && 'CompositionEvent' in window,
    vi = null;
Ke && 'documentMode' in document && (vi = document.documentMode);
var gi = Ke && 'TextEvent' in window && !vi,
    bi = Ke && (!pi || (vi && 8 < vi && 11 >= vi)),
    yi = String.fromCharCode(32),
    mi = !1;
function _i(e, t) {
    switch (e) {
        case 'keyup':
            return -1 !== hi.indexOf(t.keyCode);
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
function wi(e) {
    return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
}
var Si = !1;
var ki = {
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
function Oi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return 'input' === t ? !!ki[e.type] : 'textarea' === t;
}
function xi(e, t, n, r) {
    (un(r),
        0 < (t = Ea(t, 'onChange')).length &&
            ((n = new Kr('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
}
var Ei = null,
    Pi = null;
function Ai(e) {
    ya(e, 0);
}
function Ci(e) {
    if (Pt(eo(e))) return e;
}
function ji(e, t) {
    if ('change' === e) return t;
}
var Ni = !1;
if (Ke) {
    var Ti;
    if (Ke) {
        var Li = 'oninput' in document;
        if (!Li) {
            var Ri = document.createElement('div');
            (Ri.setAttribute('oninput', 'return;'), (Li = 'function' == typeof Ri.oninput));
        }
        Ti = Li;
    } else Ti = !1;
    Ni = Ti && (!document.documentMode || 9 < document.documentMode);
}
function Vi() {
    Ei && (Ei.detachEvent('onpropertychange', Di), (Pi = Ei = null));
}
function Di(e) {
    if ('value' === e.propertyName && Ci(Pi)) {
        var t = [];
        (xi(t, Pi, e, tn(e)), dn(Ai, t));
    }
}
function Ii(e, t, n) {
    'focusin' === e ? (Vi(), (Pi = n), (Ei = t).attachEvent('onpropertychange', Di)) : 'focusout' === e && Vi();
}
function zi(e) {
    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Ci(Pi);
}
function Mi(e, t) {
    if ('click' === e) return Ci(t);
}
function Bi(e, t) {
    if ('input' === e || 'change' === e) return Ci(t);
}
var Ui =
    'function' == typeof Object.is
        ? Object.is
        : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
          };
function Fi(e, t) {
    if (Ui(e, t)) return !0;
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!We.call(t, i) || !Ui(e[i], t[i])) return !1;
    }
    return !0;
}
function $i(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Ki(e, t) {
    var n,
        r = $i(e);
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
        r = $i(r);
    }
}
function Wi(e, t) {
    return (
        !(!e || !t) &&
        (e === t ||
            ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                    ? Wi(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
    );
}
function Hi() {
    for (var e = window, t = At(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = 'string' == typeof t.contentWindow.location.href;
        } catch (r) {
            n = !1;
        }
        if (!n) break;
        t = At((e = t.contentWindow).document);
    }
    return t;
}
function qi(e) {
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
function Gi(e) {
    var t = Hi(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Wi(n.ownerDocument.documentElement, n)) {
        if (null !== r && qi(n))
            if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
            else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    a = Math.min(r.start, i);
                ((r = void 0 === r.end ? a : Math.min(r.end, i)),
                    !e.extend && a > r && ((i = r), (r = a), (a = i)),
                    (i = Ki(n, a)));
                var o = Ki(n, r);
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
var Qi = Ke && 'documentMode' in document && 11 >= document.documentMode,
    Xi = null,
    Yi = null,
    Ji = null,
    Zi = !1;
function ea(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    Zi ||
        null == Xi ||
        Xi !== At(r) ||
        ('selectionStart' in (r = Xi) && qi(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                  anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                      .anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              }),
        (Ji && Fi(Ji, r)) ||
            ((Ji = r),
            0 < (r = Ea(Yi, 'onSelect')).length &&
                ((t = new Kr('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Xi))));
}
function ta(e, t) {
    var n = {};
    return ((n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n);
}
var na = {
        animationend: ta('Animation', 'AnimationEnd'),
        animationiteration: ta('Animation', 'AnimationIteration'),
        animationstart: ta('Animation', 'AnimationStart'),
        transitionend: ta('Transition', 'TransitionEnd'),
    },
    ra = {},
    ia = {};
function aa(e) {
    if (ra[e]) return ra[e];
    if (!na[e]) return e;
    var t,
        n = na[e];
    for (t in n) if (n.hasOwnProperty(t) && t in ia) return (ra[e] = n[t]);
    return e;
}
Ke &&
    ((ia = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete na.animationend.animation, delete na.animationiteration.animation, delete na.animationstart.animation),
    'TransitionEvent' in window || delete na.transitionend.transition);
var oa = aa('animationend'),
    ua = aa('animationiteration'),
    la = aa('animationstart'),
    sa = aa('transitionend'),
    ca = new Map(),
    fa =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' ',
        );
function da(e, t) {
    (ca.set(e, t), Fe(t, [e]));
}
for (var ha = 0; ha < fa.length; ha++) {
    var pa = fa[ha];
    da(pa.toLowerCase(), 'on' + (pa[0].toUpperCase() + pa.slice(1)));
}
(da(oa, 'onAnimationEnd'),
    da(ua, 'onAnimationIteration'),
    da(la, 'onAnimationStart'),
    da('dblclick', 'onDoubleClick'),
    da('focusin', 'onFocus'),
    da('focusout', 'onBlur'),
    da(sa, 'onTransitionEnd'),
    $e('onMouseEnter', ['mouseout', 'mouseover']),
    $e('onMouseLeave', ['mouseout', 'mouseover']),
    $e('onPointerEnter', ['pointerout', 'pointerover']),
    $e('onPointerLeave', ['pointerout', 'pointerover']),
    Fe('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Fe('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    Fe('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Fe('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Fe('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    Fe('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
var va =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' ',
        ),
    ga = new Set('cancel close invalid load scroll toggle'.split(' ').concat(va));
function ba(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n),
        (function (e, t, n, r, i, a, o, u, l) {
            if ((Sn.apply(this, arguments), bn)) {
                if (!bn) throw Error(Me(198));
                var s = yn;
                ((bn = !1), (yn = null), mn || ((mn = !0), (_n = s)));
            }
        })(r, t, void 0, e),
        (e.currentTarget = null));
}
function ya(e, t) {
    t = 0 != (4 & t);
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var a = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var u = r[o],
                        l = u.instance,
                        s = u.currentTarget;
                    if (((u = u.listener), l !== a && i.isPropagationStopped())) break e;
                    (ba(i, u, s), (a = l));
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (
                        ((l = (u = r[o]).instance),
                        (s = u.currentTarget),
                        (u = u.listener),
                        l !== a && i.isPropagationStopped())
                    )
                        break e;
                    (ba(i, u, s), (a = l));
                }
        }
    }
    if (mn) throw ((e = _n), (mn = !1), (_n = null), e);
}
function ma(e, t) {
    var n = t[Qa];
    void 0 === n && (n = t[Qa] = new Set());
    var r = e + '__bubble';
    n.has(r) || (ka(t, e, 2, !1), n.add(r));
}
function _a(e, t, n) {
    var r = 0;
    (t && (r |= 4), ka(n, e, r, t));
}
var wa = '_reactListening' + Math.random().toString(36).slice(2);
function Sa(e) {
    if (!e[wa]) {
        ((e[wa] = !0),
            Be.forEach(function (t) {
                'selectionchange' !== t && (ga.has(t) || _a(t, !1, e), _a(t, !0, e));
            }));
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[wa] || ((t[wa] = !0), _a('selectionchange', !1, t));
    }
}
function ka(e, t, n, r) {
    switch (Nr(t)) {
        case 1:
            var i = Er;
            break;
        case 4:
            i = Pr;
            break;
        default:
            i = Ar;
    }
    ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !pn || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (i = !0),
        r
            ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
            : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1));
}
function Oa(e, t, n, r, i) {
    var a = r;
    if (0 == (1 & t) && 0 == (2 & t) && null !== r)
        e: for (;;) {
            if (null === r) return;
            var o = r.tag;
            if (3 === o || 4 === o) {
                var u = r.stateNode.containerInfo;
                if (u === i || (8 === u.nodeType && u.parentNode === i)) break;
                if (4 === o)
                    for (o = r.return; null !== o; ) {
                        var l = o.tag;
                        if (
                            (3 === l || 4 === l) &&
                            ((l = o.stateNode.containerInfo) === i || (8 === l.nodeType && l.parentNode === i))
                        )
                            return;
                        o = o.return;
                    }
                for (; null !== u; ) {
                    if (null === (o = Ja(u))) return;
                    if (5 === (l = o.tag) || 6 === l) {
                        r = a = o;
                        continue e;
                    }
                    u = u.parentNode;
                }
            }
            r = r.return;
        }
    dn(function () {
        var r = a,
            i = tn(n),
            o = [];
        e: {
            var u = ca.get(e);
            if (void 0 !== u) {
                var l = Kr,
                    s = e;
                switch (e) {
                    case 'keypress':
                        if (0 === Dr(n)) break e;
                    case 'keydown':
                    case 'keyup':
                        l = ui;
                        break;
                    case 'focusin':
                        ((s = 'focus'), (l = Xr));
                        break;
                    case 'focusout':
                        ((s = 'blur'), (l = Xr));
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        l = Xr;
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
                        l = Gr;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        l = Qr;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        l = si;
                        break;
                    case oa:
                    case ua:
                    case la:
                        l = Yr;
                        break;
                    case sa:
                        l = ci;
                        break;
                    case 'scroll':
                        l = Hr;
                        break;
                    case 'wheel':
                        l = di;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        l = Zr;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        l = li;
                }
                var c = 0 != (4 & t),
                    f = !c && 'scroll' === e,
                    d = c ? (null !== u ? u + 'Capture' : null) : u;
                c = [];
                for (var h, p = r; null !== p; ) {
                    var v = (h = p).stateNode;
                    if (
                        (5 === h.tag &&
                            null !== v &&
                            ((h = v), null !== d && null != (v = hn(p, d)) && c.push(xa(p, v, h))),
                        f)
                    )
                        break;
                    p = p.return;
                }
                0 < c.length && ((u = new l(u, s, null, n, i)), o.push({ event: u, listeners: c }));
            }
        }
        if (0 == (7 & t)) {
            if (
                ((l = 'mouseout' === e || 'pointerout' === e),
                (!(u = 'mouseover' === e || 'pointerover' === e) ||
                    n === en ||
                    !(s = n.relatedTarget || n.fromElement) ||
                    (!Ja(s) && !s[Ga])) &&
                    (l || u) &&
                    ((u = i.window === i ? i : (u = i.ownerDocument) ? u.defaultView || u.parentWindow : window),
                    l
                        ? ((l = r),
                          null !== (s = (s = n.relatedTarget || n.toElement) ? Ja(s) : null) &&
                              (s !== (f = kn(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                              (s = null))
                        : ((l = null), (s = r)),
                    l !== s))
            ) {
                if (
                    ((c = Gr),
                    (v = 'onMouseLeave'),
                    (d = 'onMouseEnter'),
                    (p = 'mouse'),
                    ('pointerout' !== e && 'pointerover' !== e) ||
                        ((c = li), (v = 'onPointerLeave'), (d = 'onPointerEnter'), (p = 'pointer')),
                    (f = null == l ? u : eo(l)),
                    (h = null == s ? u : eo(s)),
                    ((u = new c(v, p + 'leave', l, n, i)).target = f),
                    (u.relatedTarget = h),
                    (v = null),
                    Ja(i) === r && (((c = new c(d, p + 'enter', s, n, i)).target = h), (c.relatedTarget = f), (v = c)),
                    (f = v),
                    l && s)
                )
                    e: {
                        for (d = s, p = 0, h = c = l; h; h = Pa(h)) p++;
                        for (h = 0, v = d; v; v = Pa(v)) h++;
                        for (; 0 < p - h; ) ((c = Pa(c)), p--);
                        for (; 0 < h - p; ) ((d = Pa(d)), h--);
                        for (; p--; ) {
                            if (c === d || (null !== d && c === d.alternate)) break e;
                            ((c = Pa(c)), (d = Pa(d)));
                        }
                        c = null;
                    }
                else c = null;
                (null !== l && Aa(o, u, l, c, !1), null !== s && null !== f && Aa(o, f, s, c, !0));
            }
            if (
                'select' === (l = (u = r ? eo(r) : window).nodeName && u.nodeName.toLowerCase()) ||
                ('input' === l && 'file' === u.type)
            )
                var g = ji;
            else if (Oi(u))
                if (Ni) g = Bi;
                else {
                    g = zi;
                    var b = Ii;
                }
            else
                (l = u.nodeName) &&
                    'input' === l.toLowerCase() &&
                    ('checkbox' === u.type || 'radio' === u.type) &&
                    (g = Mi);
            switch (
                (g && (g = g(e, r))
                    ? xi(o, g, n, i)
                    : (b && b(e, u, r),
                      'focusout' === e &&
                          (b = u._wrapperState) &&
                          b.controlled &&
                          'number' === u.type &&
                          Rt(u, 'number', u.value)),
                (b = r ? eo(r) : window),
                e)
            ) {
                case 'focusin':
                    (Oi(b) || 'true' === b.contentEditable) && ((Xi = b), (Yi = r), (Ji = null));
                    break;
                case 'focusout':
                    Ji = Yi = Xi = null;
                    break;
                case 'mousedown':
                    Zi = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    ((Zi = !1), ea(o, n, i));
                    break;
                case 'selectionchange':
                    if (Qi) break;
                case 'keydown':
                case 'keyup':
                    ea(o, n, i);
            }
            var y;
            if (pi)
                e: {
                    switch (e) {
                        case 'compositionstart':
                            var m = 'onCompositionStart';
                            break e;
                        case 'compositionend':
                            m = 'onCompositionEnd';
                            break e;
                        case 'compositionupdate':
                            m = 'onCompositionUpdate';
                            break e;
                    }
                    m = void 0;
                }
            else
                Si
                    ? _i(e, n) && (m = 'onCompositionEnd')
                    : 'keydown' === e && 229 === n.keyCode && (m = 'onCompositionStart');
            (m &&
                (bi &&
                    'ko' !== n.locale &&
                    (Si || 'onCompositionStart' !== m
                        ? 'onCompositionEnd' === m && Si && (y = Vr())
                        : ((Lr = 'value' in (Tr = i) ? Tr.value : Tr.textContent), (Si = !0))),
                0 < (b = Ea(r, m)).length &&
                    ((m = new ei(m, e, null, n, i)),
                    o.push({ event: m, listeners: b }),
                    y ? (m.data = y) : null !== (y = wi(n)) && (m.data = y))),
                (y = gi
                    ? (function (e, t) {
                          switch (e) {
                              case 'compositionend':
                                  return wi(t);
                              case 'keypress':
                                  return 32 !== t.which ? null : ((mi = !0), yi);
                              case 'textInput':
                                  return (e = t.data) === yi && mi ? null : e;
                              default:
                                  return null;
                          }
                      })(e, n)
                    : (function (e, t) {
                          if (Si)
                              return 'compositionend' === e || (!pi && _i(e, t))
                                  ? ((e = Vr()), (Rr = Lr = Tr = null), (Si = !1), e)
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
                                  return bi && 'ko' !== t.locale ? null : t.data;
                          }
                      })(e, n)) &&
                    0 < (r = Ea(r, 'onBeforeInput')).length &&
                    ((i = new ei('onBeforeInput', 'beforeinput', null, n, i)),
                    o.push({ event: i, listeners: r }),
                    (i.data = y)));
        }
        ya(o, t);
    });
}
function xa(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Ea(e, t) {
    for (var n = t + 'Capture', r = []; null !== e; ) {
        var i = e,
            a = i.stateNode;
        (5 === i.tag &&
            null !== a &&
            ((i = a), null != (a = hn(e, n)) && r.unshift(xa(e, a, i)), null != (a = hn(e, t)) && r.push(xa(e, a, i))),
            (e = e.return));
    }
    return r;
}
function Pa(e) {
    if (null === e) return null;
    do {
        e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
}
function Aa(e, t, n, r, i) {
    for (var a = t._reactName, o = []; null !== n && n !== r; ) {
        var u = n,
            l = u.alternate,
            s = u.stateNode;
        if (null !== l && l === r) break;
        (5 === u.tag &&
            null !== s &&
            ((u = s),
            i
                ? null != (l = hn(n, a)) && o.unshift(xa(n, l, u))
                : i || (null != (l = hn(n, a)) && o.push(xa(n, l, u)))),
            (n = n.return));
    }
    0 !== o.length && e.push({ event: t, listeners: o });
}
var Ca = /\r\n?/g,
    ja = /\u0000|\uFFFD/g;
function Na(e) {
    return ('string' == typeof e ? e : '' + e).replace(Ca, '\n').replace(ja, '');
}
function Ta(e, t, n) {
    if (((t = Na(t)), Na(e) !== t && n)) throw Error(Me(425));
}
function La() {}
var Ra = null,
    Va = null;
function Da(e, t) {
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
var Ia = 'function' == typeof setTimeout ? setTimeout : void 0,
    za = 'function' == typeof clearTimeout ? clearTimeout : void 0,
    Ma = 'function' == typeof Promise ? Promise : void 0,
    Ba =
        'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== Ma
              ? function (e) {
                    return Ma.resolve(null).then(e).catch(Ua);
                }
              : Ia;
function Ua(e) {
    setTimeout(function () {
        throw e;
    });
}
function Fa(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && 8 === i.nodeType))
            if ('/$' === (n = i.data)) {
                if (0 === r) return (e.removeChild(i), void kr(t));
                r--;
            } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
        n = i;
    } while (n);
    kr(t);
}
function $a(e) {
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
function Ka(e) {
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
var Wa = Math.random().toString(36).slice(2),
    Ha = '__reactFiber$' + Wa,
    qa = '__reactProps$' + Wa,
    Ga = '__reactContainer$' + Wa,
    Qa = '__reactEvents$' + Wa,
    Xa = '__reactListeners$' + Wa,
    Ya = '__reactHandles$' + Wa;
function Ja(e) {
    var t = e[Ha];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Ga] || n[Ha])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = Ka(e); null !== e; ) {
                    if ((n = e[Ha])) return n;
                    e = Ka(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function Za(e) {
    return !(e = e[Ha] || e[Ga]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
}
function eo(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(Me(33));
}
function to(e) {
    return e[qa] || null;
}
var no = [],
    ro = -1;
function io(e) {
    return { current: e };
}
function ao(e) {
    0 > ro || ((e.current = no[ro]), (no[ro] = null), ro--);
}
function oo(e, t) {
    (ro++, (no[ro] = e.current), (e.current = t));
}
var uo = {},
    lo = io(uo),
    so = io(!1),
    co = uo;
function fo(e, t) {
    var n = e.type.contextTypes;
    if (!n) return uo;
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
function ho(e) {
    return null != (e = e.childContextTypes);
}
function po() {
    (ao(so), ao(lo));
}
function vo(e, t, n) {
    if (lo.current !== uo) throw Error(Me(168));
    (oo(lo, t), oo(so, n));
}
function go(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
    for (var i in (r = r.getChildContext())) if (!(i in t)) throw Error(Me(108, kt(e) || 'Unknown', i));
    return bt({}, n, r);
}
function bo(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || uo),
        (co = lo.current),
        oo(lo, e),
        oo(so, so.current),
        !0
    );
}
function yo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(Me(169));
    (n ? ((e = go(e, t, co)), (r.__reactInternalMemoizedMergedChildContext = e), ao(so), ao(lo), oo(lo, e)) : ao(so),
        oo(so, n));
}
var mo = null,
    _o = !1,
    wo = !1;
function So(e) {
    null === mo ? (mo = [e]) : mo.push(e);
}
function ko() {
    if (!wo && null !== mo) {
        wo = !0;
        var e = 0,
            t = er;
        try {
            var n = mo;
            for (er = 1; e < n.length; e++) {
                var r = n[e];
                do {
                    r = r(!0);
                } while (null !== r);
            }
            ((mo = null), (_o = !1));
        } catch (i) {
            throw (null !== mo && (mo = mo.slice(e + 1)), An(Rn, ko), i);
        } finally {
            ((er = t), (wo = !1));
        }
    }
    return null;
}
var Oo = [],
    xo = 0,
    Eo = null,
    Po = 0,
    Ao = [],
    Co = 0,
    jo = null,
    No = 1,
    To = '';
function Lo(e, t) {
    ((Oo[xo++] = Po), (Oo[xo++] = Eo), (Eo = e), (Po = t));
}
function Ro(e, t, n) {
    ((Ao[Co++] = No), (Ao[Co++] = To), (Ao[Co++] = jo), (jo = e));
    var r = No;
    e = To;
    var i = 32 - Un(r) - 1;
    ((r &= ~(1 << i)), (n += 1));
    var a = 32 - Un(t) + i;
    if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (i -= o),
            (No = (1 << (32 - Un(t) + i)) | (n << i) | r),
            (To = a + e));
    } else ((No = (1 << a) | (n << i) | r), (To = e));
}
function Vo(e) {
    null !== e.return && (Lo(e, 1), Ro(e, 1, 0));
}
function Do(e) {
    for (; e === Eo; ) ((Eo = Oo[--xo]), (Oo[xo] = null), (Po = Oo[--xo]), (Oo[xo] = null));
    for (; e === jo; )
        ((jo = Ao[--Co]), (Ao[Co] = null), (To = Ao[--Co]), (Ao[Co] = null), (No = Ao[--Co]), (Ao[Co] = null));
}
var Io = null,
    zo = null,
    Mo = !1,
    Bo = null;
function Uo(e, t) {
    var n = df(5, null, null, 0);
    ((n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Fo(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (Io = e), (zo = $a(t.firstChild)), !0)
            );
        case 6:
            return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (Io = e), (zo = null), !0)
            );
        case 13:
            return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== jo ? { id: No, overflow: To } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = df(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (Io = e),
                (zo = null),
                !0)
            );
        default:
            return !1;
    }
}
function $o(e) {
    return 0 != (1 & e.mode) && 0 == (128 & e.flags);
}
function Ko(e) {
    if (Mo) {
        var t = zo;
        if (t) {
            var n = t;
            if (!Fo(e, t)) {
                if ($o(e)) throw Error(Me(418));
                t = $a(n.nextSibling);
                var r = Io;
                t && Fo(e, t) ? Uo(r, n) : ((e.flags = (-4097 & e.flags) | 2), (Mo = !1), (Io = e));
            }
        } else {
            if ($o(e)) throw Error(Me(418));
            ((e.flags = (-4097 & e.flags) | 2), (Mo = !1), (Io = e));
        }
    }
}
function Wo(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
    Io = e;
}
function Ho(e) {
    if (e !== Io) return !1;
    if (!Mo) return (Wo(e), (Mo = !0), !1);
    var t;
    if (
        ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = 'head' !== (t = e.type) && 'body' !== t && !Da(e.type, e.memoizedProps)),
        t && (t = zo))
    ) {
        if ($o(e)) throw (qo(), Error(Me(418)));
        for (; t; ) (Uo(e, t), (t = $a(t.nextSibling)));
    }
    if ((Wo(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(Me(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ('/$' === n) {
                        if (0 === t) {
                            zo = $a(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
            }
            zo = null;
        }
    } else zo = Io ? $a(e.stateNode.nextSibling) : null;
    return !0;
}
function qo() {
    for (var e = zo; e; ) e = $a(e.nextSibling);
}
function Go() {
    ((zo = Io = null), (Mo = !1));
}
function Qo(e) {
    null === Bo ? (Bo = [e]) : Bo.push(e);
}
var Xo = et.ReactCurrentBatchConfig;
function Yo(e, t, n) {
    if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
        if (n._owner) {
            if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(Me(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(Me(147, e));
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
        if ('string' != typeof e) throw Error(Me(284));
        if (!n._owner) throw Error(Me(290, e));
    }
    return e;
}
function Jo(e, t) {
    throw (
        (e = Object.prototype.toString.call(t)),
        Error(Me(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e))
    );
}
function Zo(e) {
    return (0, e._init)(e._payload);
}
function eu(e) {
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
        return (((e = pf(e, t)).index = 0), (e.sibling = null), e);
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
    function u(e, t, n, r) {
        return null === t || 6 !== t.tag ? (((t = yf(n, e.mode, r)).return = e), t) : (((t = i(t, n)).return = e), t);
    }
    function l(e, t, n, r) {
        var a = n.type;
        return a === rt
            ? c(e, t, n.props.children, r, n.key)
            : null !== t &&
                (t.elementType === a || ('object' == typeof a && null !== a && a.$$typeof === dt && Zo(a) === t.type))
              ? (((r = i(t, n.props)).ref = Yo(e, t, n)), (r.return = e), r)
              : (((r = vf(n.type, n.key, n.props, null, e.mode, r)).ref = Yo(e, t, n)), (r.return = e), r);
    }
    function s(e, t, n, r) {
        return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = mf(n, e.mode, r)).return = e), t)
            : (((t = i(t, n.children || [])).return = e), t);
    }
    function c(e, t, n, r, a) {
        return null === t || 7 !== t.tag
            ? (((t = gf(n, e.mode, r, a)).return = e), t)
            : (((t = i(t, n)).return = e), t);
    }
    function f(e, t, n) {
        if (('string' == typeof t && '' !== t) || 'number' == typeof t)
            return (((t = yf('' + t, e.mode, n)).return = e), t);
        if ('object' == typeof t && null !== t) {
            switch (t.$$typeof) {
                case tt:
                    return (
                        ((n = vf(t.type, t.key, t.props, null, e.mode, n)).ref = Yo(e, null, t)),
                        (n.return = e),
                        n
                    );
                case nt:
                    return (((t = mf(t, e.mode, n)).return = e), t);
                case dt:
                    return f(e, (0, t._init)(t._payload), n);
            }
            if (Vt(t) || vt(t)) return (((t = gf(t, e.mode, n, null)).return = e), t);
            Jo(e, t);
        }
        return null;
    }
    function d(e, t, n, r) {
        var i = null !== t ? t.key : null;
        if (('string' == typeof n && '' !== n) || 'number' == typeof n) return null !== i ? null : u(e, t, '' + n, r);
        if ('object' == typeof n && null !== n) {
            switch (n.$$typeof) {
                case tt:
                    return n.key === i ? l(e, t, n, r) : null;
                case nt:
                    return n.key === i ? s(e, t, n, r) : null;
                case dt:
                    return d(e, t, (i = n._init)(n._payload), r);
            }
            if (Vt(n) || vt(n)) return null !== i ? null : c(e, t, n, r, null);
            Jo(e, n);
        }
        return null;
    }
    function h(e, t, n, r, i) {
        if (('string' == typeof r && '' !== r) || 'number' == typeof r) return u(t, (e = e.get(n) || null), '' + r, i);
        if ('object' == typeof r && null !== r) {
            switch (r.$$typeof) {
                case tt:
                    return l(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                case nt:
                    return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                case dt:
                    return h(e, t, n, (0, r._init)(r._payload), i);
            }
            if (Vt(r) || vt(r)) return c(t, (e = e.get(n) || null), r, i, null);
            Jo(t, r);
        }
        return null;
    }
    return function u(l, s, c, p) {
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
                                        (n(l, g.sibling), ((s = i(g, c.props.children)).return = l), (l = s));
                                        break e;
                                    }
                                } else if (
                                    g.elementType === v ||
                                    ('object' == typeof v && null !== v && v.$$typeof === dt && Zo(v) === g.type)
                                ) {
                                    (n(l, g.sibling), ((s = i(g, c.props)).ref = Yo(l, g, c)), (s.return = l), (l = s));
                                    break e;
                                }
                                n(l, g);
                                break;
                            }
                            (t(l, g), (g = g.sibling));
                        }
                        c.type === rt
                            ? (((s = gf(c.props.children, l.mode, p, c.key)).return = l), (l = s))
                            : (((p = vf(c.type, c.key, c.props, null, l.mode, p)).ref = Yo(l, s, c)),
                              (p.return = l),
                              (l = p));
                    }
                    return o(l);
                case nt:
                    e: {
                        for (g = c.key; null !== s; ) {
                            if (s.key === g) {
                                if (
                                    4 === s.tag &&
                                    s.stateNode.containerInfo === c.containerInfo &&
                                    s.stateNode.implementation === c.implementation
                                ) {
                                    (n(l, s.sibling), ((s = i(s, c.children || [])).return = l), (l = s));
                                    break e;
                                }
                                n(l, s);
                                break;
                            }
                            (t(l, s), (s = s.sibling));
                        }
                        (((s = mf(c, l.mode, p)).return = l), (l = s));
                    }
                    return o(l);
                case dt:
                    return u(l, s, (g = c._init)(c._payload), p);
            }
            if (Vt(c))
                return (function (i, o, u, l) {
                    for (var s = null, c = null, p = o, v = (o = 0), g = null; null !== p && v < u.length; v++) {
                        p.index > v ? ((g = p), (p = null)) : (g = p.sibling);
                        var b = d(i, p, u[v], l);
                        if (null === b) {
                            null === p && (p = g);
                            break;
                        }
                        (e && p && null === b.alternate && t(i, p),
                            (o = a(b, o, v)),
                            null === c ? (s = b) : (c.sibling = b),
                            (c = b),
                            (p = g));
                    }
                    if (v === u.length) return (n(i, p), Mo && Lo(i, v), s);
                    if (null === p) {
                        for (; v < u.length; v++)
                            null !== (p = f(i, u[v], l)) &&
                                ((o = a(p, o, v)), null === c ? (s = p) : (c.sibling = p), (c = p));
                        return (Mo && Lo(i, v), s);
                    }
                    for (p = r(i, p); v < u.length; v++)
                        null !== (g = h(p, i, v, u[v], l)) &&
                            (e && null !== g.alternate && p.delete(null === g.key ? v : g.key),
                            (o = a(g, o, v)),
                            null === c ? (s = g) : (c.sibling = g),
                            (c = g));
                    return (
                        e &&
                            p.forEach(function (e) {
                                return t(i, e);
                            }),
                        Mo && Lo(i, v),
                        s
                    );
                })(l, s, c, p);
            if (vt(c))
                return (function (i, o, u, l) {
                    var s = vt(u);
                    if ('function' != typeof s) throw Error(Me(150));
                    if (null == (u = s.call(u))) throw Error(Me(151));
                    for (
                        var c = (s = null), p = o, v = (o = 0), g = null, b = u.next();
                        null !== p && !b.done;
                        v++, b = u.next()
                    ) {
                        p.index > v ? ((g = p), (p = null)) : (g = p.sibling);
                        var y = d(i, p, b.value, l);
                        if (null === y) {
                            null === p && (p = g);
                            break;
                        }
                        (e && p && null === y.alternate && t(i, p),
                            (o = a(y, o, v)),
                            null === c ? (s = y) : (c.sibling = y),
                            (c = y),
                            (p = g));
                    }
                    if (b.done) return (n(i, p), Mo && Lo(i, v), s);
                    if (null === p) {
                        for (; !b.done; v++, b = u.next())
                            null !== (b = f(i, b.value, l)) &&
                                ((o = a(b, o, v)), null === c ? (s = b) : (c.sibling = b), (c = b));
                        return (Mo && Lo(i, v), s);
                    }
                    for (p = r(i, p); !b.done; v++, b = u.next())
                        null !== (b = h(p, i, v, b.value, l)) &&
                            (e && null !== b.alternate && p.delete(null === b.key ? v : b.key),
                            (o = a(b, o, v)),
                            null === c ? (s = b) : (c.sibling = b),
                            (c = b));
                    return (
                        e &&
                            p.forEach(function (e) {
                                return t(i, e);
                            }),
                        Mo && Lo(i, v),
                        s
                    );
                })(l, s, c, p);
            Jo(l, c);
        }
        return ('string' == typeof c && '' !== c) || 'number' == typeof c
            ? ((c = '' + c),
              null !== s && 6 === s.tag
                  ? (n(l, s.sibling), ((s = i(s, c)).return = l), (l = s))
                  : (n(l, s), ((s = yf(c, l.mode, p)).return = l), (l = s)),
              o(l))
            : n(l, s);
    };
}
var tu = eu(!0),
    nu = eu(!1),
    ru = io(null),
    iu = null,
    au = null,
    ou = null;
function uu() {
    ou = au = iu = null;
}
function lu(e) {
    var t = ru.current;
    (ao(ru), (e._currentValue = t));
}
function su(e, t, n) {
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
function cu(e, t) {
    ((iu = e),
        (ou = au = null),
        null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (Zl = !0), (e.firstContext = null)));
}
function fu(e) {
    var t = e._currentValue;
    if (ou !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), null === au)) {
            if (null === iu) throw Error(Me(308));
            ((au = e), (iu.dependencies = { lanes: 0, firstContext: e }));
        } else au = au.next = e;
    return t;
}
var du = null;
function hu(e) {
    null === du ? (du = [e]) : du.push(e);
}
function pu(e, t, n, r) {
    var i = t.interleaved;
    return (null === i ? ((n.next = n), hu(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), vu(e, r));
}
function vu(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        ((e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return));
    return 3 === n.tag ? n.stateNode : null;
}
var gu = !1;
function bu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function yu(e, t) {
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
function mu(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function _u(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 0 != (2 & lc))) {
        var i = r.pending;
        return (null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), vu(e, n));
    }
    return (
        null === (i = r.interleaved) ? ((t.next = t), hu(r)) : ((t.next = i.next), (i.next = t)),
        (r.interleaved = t),
        vu(e, n)
    );
}
function wu(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), Zn(e, n));
    }
}
function Su(e, t) {
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
function ku(e, t, n, r) {
    var i = e.updateQueue;
    gu = !1;
    var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        u = i.shared.pending;
    if (null !== u) {
        i.shared.pending = null;
        var l = u,
            s = l.next;
        ((l.next = null), null === o ? (a = s) : (o.next = s), (o = l));
        var c = e.alternate;
        null !== c &&
            (u = (c = c.updateQueue).lastBaseUpdate) !== o &&
            (null === u ? (c.firstBaseUpdate = s) : (u.next = s), (c.lastBaseUpdate = l));
    }
    if (null !== a) {
        var f = i.baseState;
        for (o = 0, c = s = l = null, u = a; ; ) {
            var d = u.lane,
                h = u.eventTime;
            if ((r & d) === d) {
                null !== c &&
                    (c = c.next =
                        { eventTime: h, lane: 0, tag: u.tag, payload: u.payload, callback: u.callback, next: null });
                e: {
                    var p = e,
                        v = u;
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
                            f = bt({}, f, d);
                            break e;
                        case 2:
                            gu = !0;
                    }
                }
                null !== u.callback &&
                    0 !== u.lane &&
                    ((e.flags |= 64), null === (d = i.effects) ? (i.effects = [u]) : d.push(u));
            } else
                ((h = { eventTime: h, lane: d, tag: u.tag, payload: u.payload, callback: u.callback, next: null }),
                    null === c ? ((s = c = h), (l = f)) : (c = c.next = h),
                    (o |= d));
            if (null === (u = u.next)) {
                if (null === (u = i.shared.pending)) break;
                ((u = (d = u).next), (d.next = null), (i.lastBaseUpdate = d), (i.shared.pending = null));
            }
        }
        if (
            (null === c && (l = f),
            (i.baseState = l),
            (i.firstBaseUpdate = s),
            (i.lastBaseUpdate = c),
            null !== (t = i.shared.interleaved))
        ) {
            i = t;
            do {
                ((o |= i.lane), (i = i.next));
            } while (i !== t);
        } else null === a && (i.shared.lanes = 0);
        ((gc |= o), (e.lanes = o), (e.memoizedState = f));
    }
}
function Ou(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (null !== i) {
                if (((r.callback = null), (r = n), 'function' != typeof i)) throw Error(Me(191, i));
                i.call(r);
            }
        }
}
var xu = {},
    Eu = io(xu),
    Pu = io(xu),
    Au = io(xu);
function Cu(e) {
    if (e === xu) throw Error(Me(174));
    return e;
}
function ju(e, t) {
    switch ((oo(Au, t), oo(Pu, e), oo(Eu, xu), (e = t.nodeType))) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ft(null, '');
            break;
        default:
            t = Ft((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
    }
    (ao(Eu), oo(Eu, t));
}
function Nu() {
    (ao(Eu), ao(Pu), ao(Au));
}
function Tu(e) {
    Cu(Au.current);
    var t = Cu(Eu.current),
        n = Ft(t, e.type);
    t !== n && (oo(Pu, e), oo(Eu, n));
}
function Lu(e) {
    Pu.current === e && (ao(Eu), ao(Pu));
}
var Ru = io(0);
function Vu(e) {
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
var Du = [];
function Iu() {
    for (var e = 0; e < Du.length; e++) Du[e]._workInProgressVersionPrimary = null;
    Du.length = 0;
}
var zu = et.ReactCurrentDispatcher,
    Mu = et.ReactCurrentBatchConfig,
    Bu = 0,
    Uu = null,
    Fu = null,
    $u = null,
    Ku = !1,
    Wu = !1,
    Hu = 0,
    qu = 0;
function Gu() {
    throw Error(Me(321));
}
function Qu(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ui(e[n], t[n])) return !1;
    return !0;
}
function Xu(e, t, n, r, i, a) {
    if (
        ((Bu = a),
        (Uu = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (zu.current = null === e || null === e.memoizedState ? Ll : Rl),
        (e = n(r, i)),
        Wu)
    ) {
        a = 0;
        do {
            if (((Wu = !1), (Hu = 0), 25 <= a)) throw Error(Me(301));
            ((a += 1), ($u = Fu = null), (t.updateQueue = null), (zu.current = Vl), (e = n(r, i)));
        } while (Wu);
    }
    if (((zu.current = Tl), (t = null !== Fu && null !== Fu.next), (Bu = 0), ($u = Fu = Uu = null), (Ku = !1), t))
        throw Error(Me(300));
    return e;
}
function Yu() {
    var e = 0 !== Hu;
    return ((Hu = 0), e);
}
function Ju() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (null === $u ? (Uu.memoizedState = $u = e) : ($u = $u.next = e), $u);
}
function Zu() {
    if (null === Fu) {
        var e = Uu.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = Fu.next;
    var t = null === $u ? Uu.memoizedState : $u.next;
    if (null !== t) (($u = t), (Fu = e));
    else {
        if (null === e) throw Error(Me(310));
        ((e = {
            memoizedState: (Fu = e).memoizedState,
            baseState: Fu.baseState,
            baseQueue: Fu.baseQueue,
            queue: Fu.queue,
            next: null,
        }),
            null === $u ? (Uu.memoizedState = $u = e) : ($u = $u.next = e));
    }
    return $u;
}
function el(e, t) {
    return 'function' == typeof t ? t(e) : t;
}
function tl(e) {
    var t = Zu(),
        n = t.queue;
    if (null === n) throw Error(Me(311));
    n.lastRenderedReducer = e;
    var r = Fu,
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
        var u = (o = null),
            l = null,
            s = a;
        do {
            var c = s.lane;
            if ((Bu & c) === c)
                (null !== l &&
                    (l = l.next =
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
                (null === l ? ((u = l = f), (o = r)) : (l = l.next = f), (Uu.lanes |= c), (gc |= c));
            }
            s = s.next;
        } while (null !== s && s !== a);
        (null === l ? (o = r) : (l.next = u),
            Ui(r, t.memoizedState) || (Zl = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = l),
            (n.lastRenderedState = r));
    }
    if (null !== (e = n.interleaved)) {
        i = e;
        do {
            ((a = i.lane), (Uu.lanes |= a), (gc |= a), (i = i.next));
        } while (i !== e);
    } else null === i && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function nl(e) {
    var t = Zu(),
        n = t.queue;
    if (null === n) throw Error(Me(311));
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
        (Ui(a, t.memoizedState) || (Zl = !0),
            (t.memoizedState = a),
            null === t.baseQueue && (t.baseState = a),
            (n.lastRenderedState = a));
    }
    return [a, r];
}
function rl() {}
function il(e, t) {
    var n = Uu,
        r = Zu(),
        i = t(),
        a = !Ui(r.memoizedState, i);
    if (
        (a && ((r.memoizedState = i), (Zl = !0)),
        (r = r.queue),
        gl(ul.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || a || (null !== $u && 1 & $u.memoizedState.tag))
    ) {
        if (((n.flags |= 2048), fl(9, ol.bind(null, n, r, i, t), void 0, null), null === sc)) throw Error(Me(349));
        0 != (30 & Bu) || al(n, t, i);
    }
    return i;
}
function al(e, t, n) {
    ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = Uu.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (Uu.updateQueue = t), (t.stores = [e]))
            : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e));
}
function ol(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), ll(t) && sl(e));
}
function ul(e, t, n) {
    return n(function () {
        ll(t) && sl(e);
    });
}
function ll(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ui(e, n);
    } catch (r) {
        return !0;
    }
}
function sl(e) {
    var t = vu(e, 1);
    null !== t && Dc(t, e, 1, -1);
}
function cl(e) {
    var t = Ju();
    return (
        'function' == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: el,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Al.bind(null, Uu, e)),
        [t.memoizedState, e]
    );
}
function fl(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = Uu.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (Uu.updateQueue = t), (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
    );
}
function dl() {
    return Zu().memoizedState;
}
function hl(e, t, n, r) {
    var i = Ju();
    ((Uu.flags |= e), (i.memoizedState = fl(1 | t, n, void 0, void 0 === r ? null : r)));
}
function pl(e, t, n, r) {
    var i = Zu();
    r = void 0 === r ? null : r;
    var a = void 0;
    if (null !== Fu) {
        var o = Fu.memoizedState;
        if (((a = o.destroy), null !== r && Qu(r, o.deps))) return void (i.memoizedState = fl(t, n, a, r));
    }
    ((Uu.flags |= e), (i.memoizedState = fl(1 | t, n, a, r)));
}
function vl(e, t) {
    return hl(8390656, 8, e, t);
}
function gl(e, t) {
    return pl(2048, 8, e, t);
}
function bl(e, t) {
    return pl(4, 2, e, t);
}
function yl(e, t) {
    return pl(4, 4, e, t);
}
function ml(e, t) {
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
function _l(e, t, n) {
    return ((n = null != n ? n.concat([e]) : null), pl(4, 4, ml.bind(null, t, e), n));
}
function wl() {}
function Sl(e, t) {
    var n = Zu();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Qu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function kl(e, t) {
    var n = Zu();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Qu(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ol(e, t, n) {
    return 0 == (21 & Bu)
        ? (e.baseState && ((e.baseState = !1), (Zl = !0)), (e.memoizedState = n))
        : (Ui(n, t) || ((n = Xn()), (Uu.lanes |= n), (gc |= n), (e.baseState = !0)), t);
}
function xl(e, t) {
    var n = er;
    ((er = 0 !== n && 4 > n ? n : 4), e(!0));
    var r = Mu.transition;
    Mu.transition = {};
    try {
        (e(!1), t());
    } finally {
        ((er = n), (Mu.transition = r));
    }
}
function El() {
    return Zu().memoizedState;
}
function Pl(e, t, n) {
    var r = Vc(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Cl(e))) jl(t, n);
    else if (null !== (n = pu(e, t, n, r))) {
        (Dc(n, e, r, Rc()), Nl(n, t, r));
    }
}
function Al(e, t, n) {
    var r = Vc(e),
        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Cl(e)) jl(t, i);
    else {
        var a = e.alternate;
        if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
            try {
                var o = t.lastRenderedState,
                    u = a(o, n);
                if (((i.hasEagerState = !0), (i.eagerState = u), Ui(u, o))) {
                    var l = t.interleaved;
                    return (
                        null === l ? ((i.next = i), hu(t)) : ((i.next = l.next), (l.next = i)),
                        void (t.interleaved = i)
                    );
                }
            } catch (s) {}
        null !== (n = pu(e, t, i, r)) && (Dc(n, e, r, (i = Rc())), Nl(n, t, r));
    }
}
function Cl(e) {
    var t = e.alternate;
    return e === Uu || (null !== t && t === Uu);
}
function jl(e, t) {
    Wu = Ku = !0;
    var n = e.pending;
    (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
}
function Nl(e, t, n) {
    if (0 != (4194240 & n)) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), Zn(e, n));
    }
}
var Tl = {
        readContext: fu,
        useCallback: Gu,
        useContext: Gu,
        useEffect: Gu,
        useImperativeHandle: Gu,
        useInsertionEffect: Gu,
        useLayoutEffect: Gu,
        useMemo: Gu,
        useReducer: Gu,
        useRef: Gu,
        useState: Gu,
        useDebugValue: Gu,
        useDeferredValue: Gu,
        useTransition: Gu,
        useMutableSource: Gu,
        useSyncExternalStore: Gu,
        useId: Gu,
        unstable_isNewReconciler: !1,
    },
    Ll = {
        readContext: fu,
        useCallback: function (e, t) {
            return ((Ju().memoizedState = [e, void 0 === t ? null : t]), e);
        },
        useContext: fu,
        useEffect: vl,
        useImperativeHandle: function (e, t, n) {
            return ((n = null != n ? n.concat([e]) : null), hl(4194308, 4, ml.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
            return hl(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return hl(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Ju();
            return ((t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
        },
        useReducer: function (e, t, n) {
            var r = Ju();
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
                (e = e.dispatch = Pl.bind(null, Uu, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            return ((e = { current: e }), (Ju().memoizedState = e));
        },
        useState: cl,
        useDebugValue: wl,
        useDeferredValue: function (e) {
            return (Ju().memoizedState = e);
        },
        useTransition: function () {
            var e = cl(!1),
                t = e[0];
            return ((e = xl.bind(null, e[1])), (Ju().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = Uu,
                i = Ju();
            if (Mo) {
                if (void 0 === n) throw Error(Me(407));
                n = n();
            } else {
                if (((n = t()), null === sc)) throw Error(Me(349));
                0 != (30 & Bu) || al(r, t, n);
            }
            i.memoizedState = n;
            var a = { value: n, getSnapshot: t };
            return (
                (i.queue = a),
                vl(ul.bind(null, r, a, e), [e]),
                (r.flags |= 2048),
                fl(9, ol.bind(null, r, a, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = Ju(),
                t = sc.identifierPrefix;
            if (Mo) {
                var n = To;
                ((t = ':' + t + 'R' + (n = (No & ~(1 << (32 - Un(No) - 1))).toString(32) + n)),
                    0 < (n = Hu++) && (t += 'H' + n.toString(32)),
                    (t += ':'));
            } else t = ':' + t + 'r' + (n = qu++).toString(32) + ':';
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Rl = {
        readContext: fu,
        useCallback: Sl,
        useContext: fu,
        useEffect: gl,
        useImperativeHandle: _l,
        useInsertionEffect: bl,
        useLayoutEffect: yl,
        useMemo: kl,
        useReducer: tl,
        useRef: dl,
        useState: function () {
            return tl(el);
        },
        useDebugValue: wl,
        useDeferredValue: function (e) {
            return Ol(Zu(), Fu.memoizedState, e);
        },
        useTransition: function () {
            return [tl(el)[0], Zu().memoizedState];
        },
        useMutableSource: rl,
        useSyncExternalStore: il,
        useId: El,
        unstable_isNewReconciler: !1,
    },
    Vl = {
        readContext: fu,
        useCallback: Sl,
        useContext: fu,
        useEffect: gl,
        useImperativeHandle: _l,
        useInsertionEffect: bl,
        useLayoutEffect: yl,
        useMemo: kl,
        useReducer: nl,
        useRef: dl,
        useState: function () {
            return nl(el);
        },
        useDebugValue: wl,
        useDeferredValue: function (e) {
            var t = Zu();
            return null === Fu ? (t.memoizedState = e) : Ol(t, Fu.memoizedState, e);
        },
        useTransition: function () {
            return [nl(el)[0], Zu().memoizedState];
        },
        useMutableSource: rl,
        useSyncExternalStore: il,
        useId: El,
        unstable_isNewReconciler: !1,
    };
function Dl(e, t) {
    if (e && e.defaultProps) {
        for (var n in ((t = bt({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
    }
    return t;
}
function Il(e, t, n, r) {
    ((n = null == (n = n(r, (t = e.memoizedState))) ? t : bt({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n));
}
var zl = {
    isMounted: function (e) {
        return !!(e = e._reactInternals) && kn(e) === e;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Rc(),
            i = Vc(e),
            a = mu(r, i);
        ((a.payload = t), null != n && (a.callback = n), null !== (t = _u(e, a, i)) && (Dc(t, e, i, r), wu(t, e, i)));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Rc(),
            i = Vc(e),
            a = mu(r, i);
        ((a.tag = 1),
            (a.payload = t),
            null != n && (a.callback = n),
            null !== (t = _u(e, a, i)) && (Dc(t, e, i, r), wu(t, e, i)));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Rc(),
            r = Vc(e),
            i = mu(n, r);
        ((i.tag = 2), null != t && (i.callback = t), null !== (t = _u(e, i, r)) && (Dc(t, e, r, n), wu(t, e, r)));
    },
};
function Ml(e, t, n, r, i, a, o) {
    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, a, o)
        : !t.prototype || !t.prototype.isPureReactComponent || !Fi(n, r) || !Fi(i, a);
}
function Bl(e, t, n) {
    var r = !1,
        i = uo,
        a = t.contextType;
    return (
        'object' == typeof a && null !== a
            ? (a = fu(a))
            : ((i = ho(t) ? co : lo.current), (a = (r = null != (r = t.contextTypes)) ? fo(e, i) : uo)),
        (t = new t(n, a)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = zl),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i),
            (e.__reactInternalMemoizedMaskedChildContext = a)),
        t
    );
}
function Ul(e, t, n, r) {
    ((e = t.state),
        'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && zl.enqueueReplaceState(t, t.state, null));
}
function Fl(e, t, n, r) {
    var i = e.stateNode;
    ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), bu(e));
    var a = t.contextType;
    ('object' == typeof a && null !== a ? (i.context = fu(a)) : ((a = ho(t) ? co : lo.current), (i.context = fo(e, a))),
        (i.state = e.memoizedState),
        'function' == typeof (a = t.getDerivedStateFromProps) && (Il(e, t, a, n), (i.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof i.getSnapshotBeforeUpdate ||
            ('function' != typeof i.UNSAFE_componentWillMount && 'function' != typeof i.componentWillMount) ||
            ((t = i.state),
            'function' == typeof i.componentWillMount && i.componentWillMount(),
            'function' == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(),
            t !== i.state && zl.enqueueReplaceState(i, i.state, null),
            ku(e, n, i, r),
            (i.state = e.memoizedState)),
        'function' == typeof i.componentDidMount && (e.flags |= 4194308));
}
function $l(e, t) {
    try {
        var n = '',
            r = t;
        do {
            ((n += wt(r)), (r = r.return));
        } while (r);
        var i = n;
    } catch (a) {
        i = '\nError generating stack: ' + a.message + '\n' + a.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
}
function Kl(e, t, n) {
    return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null };
}
function Wl(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Hl = 'function' == typeof WeakMap ? WeakMap : Map;
function ql(e, t, n) {
    (((n = mu(-1, n)).tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
        (n.callback = function () {
            (Oc || ((Oc = !0), (xc = r)), Wl(0, t));
        }),
        n
    );
}
function Gl(e, t, n) {
    (n = mu(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ('function' == typeof r) {
        var i = t.value;
        ((n.payload = function () {
            return r(i);
        }),
            (n.callback = function () {
                Wl(0, t);
            }));
    }
    var a = e.stateNode;
    return (
        null !== a &&
            'function' == typeof a.componentDidCatch &&
            (n.callback = function () {
                (Wl(0, t), 'function' != typeof r && (null === Ec ? (Ec = new Set([this])) : Ec.add(this)));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
            }),
        n
    );
}
function Ql(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new Hl();
        var i = new Set();
        r.set(t, i);
    } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = of.bind(null, e, t, n)), t.then(e, e));
}
function Xl(e) {
    do {
        var t;
        if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e;
        e = e.return;
    } while (null !== e);
    return null;
}
function Yl(e, t, n, r, i) {
    return 0 == (1 & e.mode)
        ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                1 === n.tag && (null === n.alternate ? (n.tag = 17) : (((t = mu(-1, 1)).tag = 2), _u(n, t, 1))),
                (n.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = i), e);
}
var Jl = et.ReactCurrentOwner,
    Zl = !1;
function es(e, t, n, r) {
    t.child = null === e ? nu(t, null, n, r) : tu(t, e.child, n, r);
}
function ts(e, t, n, r, i) {
    n = n.render;
    var a = t.ref;
    return (
        cu(t, i),
        (r = Xu(e, t, n, r, a, i)),
        (n = Yu()),
        null === e || Zl
            ? (Mo && n && Vo(t), (t.flags |= 1), es(e, t, r, i), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Os(e, t, i))
    );
}
function ns(e, t, n, r, i) {
    if (null === e) {
        var a = n.type;
        return 'function' != typeof a ||
            hf(a) ||
            void 0 !== a.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = vf(n.type, null, r, t, t.mode, i)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = a), rs(e, t, a, r, i));
    }
    if (((a = e.child), 0 == (e.lanes & i))) {
        var o = a.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : Fi)(o, r) && e.ref === t.ref) return Os(e, t, i);
    }
    return ((t.flags |= 1), ((e = pf(a, r)).ref = t.ref), (e.return = t), (t.child = e));
}
function rs(e, t, n, r, i) {
    if (null !== e) {
        var a = e.memoizedProps;
        if (Fi(a, r) && e.ref === t.ref) {
            if (((Zl = !1), (t.pendingProps = r = a), 0 == (e.lanes & i))) return ((t.lanes = e.lanes), Os(e, t, i));
            0 != (131072 & e.flags) && (Zl = !0);
        }
    }
    return os(e, t, n, r, i);
}
function is(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        a = null !== e ? e.memoizedState : null;
    if ('hidden' === r.mode)
        if (0 == (1 & t.mode))
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), oo(hc, dc), (dc |= n));
        else {
            if (0 == (1073741824 & n))
                return (
                    (e = null !== a ? a.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    oo(hc, dc),
                    (dc |= e),
                    null
                );
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== a ? a.baseLanes : n),
                oo(hc, dc),
                (dc |= r));
        }
    else (null !== a ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n), oo(hc, dc), (dc |= r));
    return (es(e, t, i, n), t.child);
}
function as(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function os(e, t, n, r, i) {
    var a = ho(n) ? co : lo.current;
    return (
        (a = fo(t, a)),
        cu(t, i),
        (n = Xu(e, t, n, r, a, i)),
        (r = Yu()),
        null === e || Zl
            ? (Mo && r && Vo(t), (t.flags |= 1), es(e, t, n, i), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Os(e, t, i))
    );
}
function us(e, t, n, r, i) {
    if (ho(n)) {
        var a = !0;
        bo(t);
    } else a = !1;
    if ((cu(t, i), null === t.stateNode)) (ks(e, t), Bl(t, n, r), Fl(t, n, r, i), (r = !0));
    else if (null === e) {
        var o = t.stateNode,
            u = t.memoizedProps;
        o.props = u;
        var l = o.context,
            s = n.contextType;
        'object' == typeof s && null !== s ? (s = fu(s)) : (s = fo(t, (s = ho(n) ? co : lo.current)));
        var c = n.getDerivedStateFromProps,
            f = 'function' == typeof c || 'function' == typeof o.getSnapshotBeforeUpdate;
        (f ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((u !== r || l !== s) && Ul(t, o, r, s)),
            (gu = !1));
        var d = t.memoizedState;
        ((o.state = d),
            ku(t, r, o, i),
            (l = t.memoizedState),
            u !== r || d !== l || so.current || gu
                ? ('function' == typeof c && (Il(t, n, c, r), (l = t.memoizedState)),
                  (u = gu || Ml(t, n, u, r, d, l, s))
                      ? (f ||
                            ('function' != typeof o.UNSAFE_componentWillMount &&
                                'function' != typeof o.componentWillMount) ||
                            ('function' == typeof o.componentWillMount && o.componentWillMount(),
                            'function' == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()),
                        'function' == typeof o.componentDidMount && (t.flags |= 4194308))
                      : ('function' == typeof o.componentDidMount && (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = l)),
                  (o.props = r),
                  (o.state = l),
                  (o.context = s),
                  (r = u))
                : ('function' == typeof o.componentDidMount && (t.flags |= 4194308), (r = !1)));
    } else {
        ((o = t.stateNode),
            yu(e, t),
            (u = t.memoizedProps),
            (s = t.type === t.elementType ? u : Dl(t.type, u)),
            (o.props = s),
            (f = t.pendingProps),
            (d = o.context),
            'object' == typeof (l = n.contextType) && null !== l
                ? (l = fu(l))
                : (l = fo(t, (l = ho(n) ? co : lo.current))));
        var h = n.getDerivedStateFromProps;
        ((c = 'function' == typeof h || 'function' == typeof o.getSnapshotBeforeUpdate) ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
            ((u !== f || d !== l) && Ul(t, o, r, l)),
            (gu = !1),
            (d = t.memoizedState),
            (o.state = d),
            ku(t, r, o, i));
        var p = t.memoizedState;
        u !== f || d !== p || so.current || gu
            ? ('function' == typeof h && (Il(t, n, h, r), (p = t.memoizedState)),
              (s = gu || Ml(t, n, s, r, d, p, l) || !1)
                  ? (c ||
                        ('function' != typeof o.UNSAFE_componentWillUpdate &&
                            'function' != typeof o.componentWillUpdate) ||
                        ('function' == typeof o.componentWillUpdate && o.componentWillUpdate(r, p, l),
                        'function' == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, p, l)),
                    'function' == typeof o.componentDidUpdate && (t.flags |= 4),
                    'function' == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ('function' != typeof o.componentDidUpdate ||
                        (u === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 4),
                    'function' != typeof o.getSnapshotBeforeUpdate ||
                        (u === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
              (o.props = r),
              (o.state = p),
              (o.context = l),
              (r = s))
            : ('function' != typeof o.componentDidUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
              'function' != typeof o.getSnapshotBeforeUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return ls(e, t, n, r, a, i);
}
function ls(e, t, n, r, i, a) {
    as(e, t);
    var o = 0 != (128 & t.flags);
    if (!r && !o) return (i && yo(t, n, !1), Os(e, t, a));
    ((r = t.stateNode), (Jl.current = t));
    var u = o && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
    return (
        (t.flags |= 1),
        null !== e && o ? ((t.child = tu(t, e.child, null, a)), (t.child = tu(t, null, u, a))) : es(e, t, u, a),
        (t.memoizedState = r.state),
        i && yo(t, n, !0),
        t.child
    );
}
function ss(e) {
    var t = e.stateNode;
    (t.pendingContext ? vo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && vo(0, t.context, !1),
        ju(e, t.containerInfo));
}
function cs(e, t, n, r, i) {
    return (Go(), Qo(i), (t.flags |= 256), es(e, t, n, r), t.child);
}
var fs,
    ds,
    hs,
    ps,
    vs = { dehydrated: null, treeContext: null, retryLane: 0 };
function gs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function bs(e, t, n) {
    var r,
        i = t.pendingProps,
        a = Ru.current,
        o = !1,
        u = 0 != (128 & t.flags);
    if (
        ((r = u) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)),
        r ? ((o = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (a |= 1),
        oo(Ru, 1 & a),
        null === e)
    )
        return (
            Ko(t),
            null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 == (1 & t.mode) ? (t.lanes = 1) : '$!' === e.data ? (t.lanes = 8) : (t.lanes = 1073741824), null)
                : ((u = i.children),
                  (e = i.fallback),
                  o
                      ? ((i = t.mode),
                        (o = t.child),
                        (u = { mode: 'hidden', children: u }),
                        0 == (1 & i) && null !== o
                            ? ((o.childLanes = 0), (o.pendingProps = u))
                            : (o = bf(u, i, 0, null)),
                        (e = gf(e, i, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = gs(n)),
                        (t.memoizedState = vs),
                        e)
                      : ys(t, u))
        );
    if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated))
        return (function (e, t, n, r, i, a, o) {
            if (n)
                return 256 & t.flags
                    ? ((t.flags &= -257), ms(e, t, o, (r = Kl(Error(Me(422))))))
                    : null !== t.memoizedState
                      ? ((t.child = e.child), (t.flags |= 128), null)
                      : ((a = r.fallback),
                        (i = t.mode),
                        (r = bf({ mode: 'visible', children: r.children }, i, 0, null)),
                        ((a = gf(a, i, o, null)).flags |= 2),
                        (r.return = t),
                        (a.return = t),
                        (r.sibling = a),
                        (t.child = r),
                        0 != (1 & t.mode) && tu(t, e.child, null, o),
                        (t.child.memoizedState = gs(o)),
                        (t.memoizedState = vs),
                        a);
            if (0 == (1 & t.mode)) return ms(e, t, o, null);
            if ('$!' === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset)) var u = r.dgst;
                return ((r = u), ms(e, t, o, (r = Kl((a = Error(Me(419))), r, void 0))));
            }
            if (((u = 0 != (o & e.childLanes)), Zl || u)) {
                if (null !== (r = sc)) {
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
                        ((a.retryLane = i), vu(e, i), Dc(r, e, i, -1));
                }
                return (Qc(), ms(e, t, o, (r = Kl(Error(Me(421))))));
            }
            return '$?' === i.data
                ? ((t.flags |= 128), (t.child = e.child), (t = lf.bind(null, e)), (i._reactRetry = t), null)
                : ((e = a.treeContext),
                  (zo = $a(i.nextSibling)),
                  (Io = t),
                  (Mo = !0),
                  (Bo = null),
                  null !== e &&
                      ((Ao[Co++] = No), (Ao[Co++] = To), (Ao[Co++] = jo), (No = e.id), (To = e.overflow), (jo = t)),
                  (t = ys(t, r.children)),
                  (t.flags |= 4096),
                  t);
        })(e, t, u, i, r, a, n);
    if (o) {
        ((o = i.fallback), (u = t.mode), (r = (a = e.child).sibling));
        var l = { mode: 'hidden', children: i.children };
        return (
            0 == (1 & u) && t.child !== a
                ? (((i = t.child).childLanes = 0), (i.pendingProps = l), (t.deletions = null))
                : ((i = pf(a, l)).subtreeFlags = 14680064 & a.subtreeFlags),
            null !== r ? (o = pf(r, o)) : ((o = gf(o, u, n, null)).flags |= 2),
            (o.return = t),
            (i.return = t),
            (i.sibling = o),
            (t.child = i),
            (i = o),
            (o = t.child),
            (u =
                null === (u = e.child.memoizedState)
                    ? gs(n)
                    : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }),
            (o.memoizedState = u),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = vs),
            i
        );
    }
    return (
        (e = (o = e.child).sibling),
        (i = pf(o, { mode: 'visible', children: i.children })),
        0 == (1 & t.mode) && (i.lanes = n),
        (i.return = t),
        (i.sibling = null),
        null !== e && (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = i),
        (t.memoizedState = null),
        i
    );
}
function ys(e, t) {
    return (((t = bf({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t));
}
function ms(e, t, n, r) {
    return (
        null !== r && Qo(r),
        tu(t, e.child, null, n),
        ((e = ys(t, t.pendingProps.children)).flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function _s(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (null !== r && (r.lanes |= t), su(e.return, t, n));
}
function ws(e, t, n, r, i) {
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
function Ss(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
    if ((es(e, t, r.children, n), 0 != (2 & (r = Ru.current)))) ((r = (1 & r) | 2), (t.flags |= 128));
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
    if ((oo(Ru, r), 0 == (1 & t.mode))) t.memoizedState = null;
    else
        switch (i) {
            case 'forwards':
                for (n = t.child, i = null; null !== n; )
                    (null !== (e = n.alternate) && null === Vu(e) && (i = n), (n = n.sibling));
                (null === (n = i) ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
                    ws(t, !1, i, n, a));
                break;
            case 'backwards':
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                    if (null !== (e = i.alternate) && null === Vu(e)) {
                        t.child = i;
                        break;
                    }
                    ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
                }
                ws(t, !0, n, null, a);
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
function Os(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (gc |= t.lanes), 0 == (n & t.childLanes))) return null;
    if (null !== e && t.child !== e.child) throw Error(Me(153));
    if (null !== t.child) {
        for (n = pf((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            ((e = e.sibling), ((n = n.sibling = pf(e, e.pendingProps)).return = t));
        n.sibling = null;
    }
    return t.child;
}
function xs(e, t) {
    if (!Mo)
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
            return (ho(t.type) && po(), Es(t), null);
        case 3:
            return (
                (r = t.stateNode),
                Nu(),
                ao(so),
                ao(lo),
                Iu(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                    (Ho(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                          ((t.flags |= 1024), null !== Bo && (Bc(Bo), (Bo = null)))),
                ds(e, t),
                Es(t),
                null
            );
        case 5:
            Lu(t);
            var i = Cu(Au.current);
            if (((n = t.type), null !== e && null != t.stateNode))
                (hs(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(Me(166));
                    return (Es(t), null);
                }
                if (((e = Cu(Eu.current)), Ho(t))) {
                    ((r = t.stateNode), (n = t.type));
                    var a = t.memoizedProps;
                    switch (((r[Ha] = t), (r[qa] = a), (e = 0 != (1 & t.mode)), n)) {
                        case 'dialog':
                            (ma('cancel', r), ma('close', r));
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            ma('load', r);
                            break;
                        case 'video':
                        case 'audio':
                            for (i = 0; i < va.length; i++) ma(va[i], r);
                            break;
                        case 'source':
                            ma('error', r);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            (ma('error', r), ma('load', r));
                            break;
                        case 'details':
                            ma('toggle', r);
                            break;
                        case 'input':
                            (jt(r, a), ma('invalid', r));
                            break;
                        case 'select':
                            ((r._wrapperState = { wasMultiple: !!a.multiple }), ma('invalid', r));
                            break;
                        case 'textarea':
                            (zt(r, a), ma('invalid', r));
                    }
                    for (var o in (Jt(n, a), (i = null), a))
                        if (a.hasOwnProperty(o)) {
                            var u = a[o];
                            'children' === o
                                ? 'string' == typeof u
                                    ? r.textContent !== u &&
                                      (!0 !== a.suppressHydrationWarning && Ta(r.textContent, u, e),
                                      (i = ['children', u]))
                                    : 'number' == typeof u &&
                                      r.textContent !== '' + u &&
                                      (!0 !== a.suppressHydrationWarning && Ta(r.textContent, u, e),
                                      (i = ['children', '' + u]))
                                : Ue.hasOwnProperty(o) && null != u && 'onScroll' === o && ma('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            (Et(r), Lt(r, a, !0));
                            break;
                        case 'textarea':
                            (Et(r), Bt(r));
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            'function' == typeof a.onClick && (r.onclick = La);
                    }
                    ((r = i), (t.updateQueue = r), null !== r && (t.flags |= 4));
                } else {
                    ((o = 9 === i.nodeType ? i : i.ownerDocument),
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
                        (e[Ha] = t),
                        (e[qa] = r),
                        fs(e, t, !1, !1),
                        (t.stateNode = e));
                    e: {
                        switch (((o = Zt(n, r)), n)) {
                            case 'dialog':
                                (ma('cancel', e), ma('close', e), (i = r));
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                (ma('load', e), (i = r));
                                break;
                            case 'video':
                            case 'audio':
                                for (i = 0; i < va.length; i++) ma(va[i], e);
                                i = r;
                                break;
                            case 'source':
                                (ma('error', e), (i = r));
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                (ma('error', e), ma('load', e), (i = r));
                                break;
                            case 'details':
                                (ma('toggle', e), (i = r));
                                break;
                            case 'input':
                                (jt(e, r), (i = Ct(e, r)), ma('invalid', e));
                                break;
                            case 'option':
                            default:
                                i = r;
                                break;
                            case 'select':
                                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (i = bt({}, r, { value: void 0 })),
                                    ma('invalid', e));
                                break;
                            case 'textarea':
                                (zt(e, r), (i = It(e, r)), ma('invalid', e));
                        }
                        for (a in (Jt(n, i), (u = i)))
                            if (u.hasOwnProperty(a)) {
                                var l = u[a];
                                'style' === a
                                    ? Xt(e, l)
                                    : 'dangerouslySetInnerHTML' === a
                                      ? null != (l = l ? l.__html : void 0) && Wt(e, l)
                                      : 'children' === a
                                        ? 'string' == typeof l
                                            ? ('textarea' !== n || '' !== l) && Ht(e, l)
                                            : 'number' == typeof l && Ht(e, '' + l)
                                        : 'suppressContentEditableWarning' !== a &&
                                          'suppressHydrationWarning' !== a &&
                                          'autoFocus' !== a &&
                                          (Ue.hasOwnProperty(a)
                                              ? null != l && 'onScroll' === a && ma('scroll', e)
                                              : null != l && Ze(e, a, l, o));
                            }
                        switch (n) {
                            case 'input':
                                (Et(e), Lt(e, r, !1));
                                break;
                            case 'textarea':
                                (Et(e), Bt(e));
                                break;
                            case 'option':
                                null != r.value && e.setAttribute('value', '' + Ot(r.value));
                                break;
                            case 'select':
                                ((e.multiple = !!r.multiple),
                                    null != (a = r.value)
                                        ? Dt(e, !!r.multiple, a, !1)
                                        : null != r.defaultValue && Dt(e, !!r.multiple, r.defaultValue, !0));
                                break;
                            default:
                                'function' == typeof i.onClick && (e.onclick = La);
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
            if (e && null != t.stateNode) ps(e, t, e.memoizedProps, r);
            else {
                if ('string' != typeof r && null === t.stateNode) throw Error(Me(166));
                if (((n = Cu(Au.current)), Cu(Eu.current), Ho(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Ha] = t),
                        (a = r.nodeValue !== n) && null !== (e = Io))
                    )
                        switch (e.tag) {
                            case 3:
                                Ta(r.nodeValue, n, 0 != (1 & e.mode));
                                break;
                            case 5:
                                !0 !== e.memoizedProps.suppressHydrationWarning &&
                                    Ta(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                    a && (t.flags |= 4);
                } else (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Ha] = t), (t.stateNode = r));
            }
            return (Es(t), null);
        case 13:
            if (
                (ao(Ru),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (Mo && null !== zo && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                    (qo(), Go(), (t.flags |= 98560), (a = !1));
                else if (((a = Ho(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!a) throw Error(Me(318));
                        if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(Me(317));
                        a[Ha] = t;
                    } else (Go(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                    (Es(t), (a = !1));
                } else (null !== Bo && (Bc(Bo), (Bo = null)), (a = !0));
                if (!a) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) && (null === e || 0 != (1 & Ru.current) ? 0 === pc && (pc = 3) : Qc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Es(t),
                  null);
        case 4:
            return (Nu(), ds(e, t), null === e && Sa(t.stateNode.containerInfo), Es(t), null);
        case 10:
            return (lu(t.type._context), Es(t), null);
        case 19:
            if ((ao(Ru), null === (a = t.memoizedState))) return (Es(t), null);
            if (((r = 0 != (128 & t.flags)), null === (o = a.rendering)))
                if (r) xs(a, !1);
                else {
                    if (0 !== pc || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (o = Vu(e))) {
                                for (
                                    t.flags |= 128,
                                        xs(a, !1),
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
                                return (oo(Ru, (1 & Ru.current) | 2), t.child);
                            }
                            e = e.sibling;
                        }
                    null !== a.tail && Tn() > Sc && ((t.flags |= 128), (r = !0), xs(a, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = Vu(o))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            xs(a, !0),
                            null === a.tail && 'hidden' === a.tailMode && !o.alternate && !Mo)
                        )
                            return (Es(t), null);
                    } else
                        2 * Tn() - a.renderingStartTime > Sc &&
                            1073741824 !== n &&
                            ((t.flags |= 128), (r = !0), xs(a, !1), (t.lanes = 4194304));
                a.isBackwards
                    ? ((o.sibling = t.child), (t.child = o))
                    : (null !== (n = a.last) ? (n.sibling = o) : (t.child = o), (a.last = o));
            }
            return null !== a.tail
                ? ((t = a.tail),
                  (a.rendering = t),
                  (a.tail = t.sibling),
                  (a.renderingStartTime = Tn()),
                  (t.sibling = null),
                  (n = Ru.current),
                  oo(Ru, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Es(t), null);
        case 22:
        case 23:
            return (
                Wc(),
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
    throw Error(Me(156, t.tag));
}
function As(e, t) {
    switch ((Do(t), t.tag)) {
        case 1:
            return (ho(t.type) && po(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null);
        case 3:
            return (
                Nu(),
                ao(so),
                ao(lo),
                Iu(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 5:
            return (Lu(t), null);
        case 13:
            if ((ao(Ru), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(Me(340));
                Go();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return (ao(Ru), null);
        case 4:
            return (Nu(), null);
        case 10:
            return (lu(t.type._context), null);
        case 22:
        case 23:
            return (Wc(), null);
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
    (hs = function (e, t, n, r) {
        var i = e.memoizedProps;
        if (i !== r) {
            ((e = t.stateNode), Cu(Eu.current));
            var a,
                o = null;
            switch (n) {
                case 'input':
                    ((i = Ct(e, i)), (r = Ct(e, r)), (o = []));
                    break;
                case 'select':
                    ((i = bt({}, i, { value: void 0 })), (r = bt({}, r, { value: void 0 })), (o = []));
                    break;
                case 'textarea':
                    ((i = It(e, i)), (r = It(e, r)), (o = []));
                    break;
                default:
                    'function' != typeof i.onClick && 'function' == typeof r.onClick && (e.onclick = La);
            }
            for (s in (Jt(n, r), (n = null), i))
                if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && null != i[s])
                    if ('style' === s) {
                        var u = i[s];
                        for (a in u) u.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
                    } else
                        'dangerouslySetInnerHTML' !== s &&
                            'children' !== s &&
                            'suppressContentEditableWarning' !== s &&
                            'suppressHydrationWarning' !== s &&
                            'autoFocus' !== s &&
                            (Ue.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
            for (s in r) {
                var l = r[s];
                if (((u = null != i ? i[s] : void 0), r.hasOwnProperty(s) && l !== u && (null != l || null != u)))
                    if ('style' === s)
                        if (u) {
                            for (a in u)
                                !u.hasOwnProperty(a) || (l && l.hasOwnProperty(a)) || (n || (n = {}), (n[a] = ''));
                            for (a in l) l.hasOwnProperty(a) && u[a] !== l[a] && (n || (n = {}), (n[a] = l[a]));
                        } else (n || (o || (o = []), o.push(s, n)), (n = l));
                    else
                        'dangerouslySetInnerHTML' === s
                            ? ((l = l ? l.__html : void 0),
                              (u = u ? u.__html : void 0),
                              null != l && u !== l && (o = o || []).push(s, l))
                            : 'children' === s
                              ? ('string' != typeof l && 'number' != typeof l) || (o = o || []).push(s, '' + l)
                              : 'suppressContentEditableWarning' !== s &&
                                'suppressHydrationWarning' !== s &&
                                (Ue.hasOwnProperty(s)
                                    ? (null != l && 'onScroll' === s && ma('scroll', e), o || u === l || (o = []))
                                    : (o = o || []).push(s, l));
            }
            n && (o = o || []).push('style', n);
            var s = o;
            (t.updateQueue = s) && (t.flags |= 4);
        }
    }),
    (ps = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
    }));
var Cs = !1,
    js = !1,
    Ns = 'function' == typeof WeakSet ? WeakSet : Set,
    Ts = null;
function Ls(e, t) {
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
function Rs(e, t, n) {
    try {
        n();
    } catch (r) {
        af(e, t, r);
    }
}
var Vs = !1;
function Ds(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var i = (r = r.next);
        do {
            if ((i.tag & e) === e) {
                var a = i.destroy;
                ((i.destroy = void 0), void 0 !== a && Rs(t, n, a));
            }
            i = i.next;
        } while (i !== r);
    }
}
function Is(e, t) {
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
function zs(e) {
    var t = e.ref;
    if (null !== t) {
        var n = e.stateNode;
        (e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e));
    }
}
function Ms(e) {
    var t = e.alternate;
    (null !== t && ((e.alternate = null), Ms(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[Ha], delete t[qa], delete t[Qa], delete t[Xa], delete t[Ya]),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
}
function Bs(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function Us(e) {
    e: for (;;) {
        for (; null === e.sibling; ) {
            if (null === e.return || Bs(e.return)) return null;
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
function Fs(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
        ((e = e.stateNode),
            t
                ? 8 === n.nodeType
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = La)));
    else if (4 !== r && null !== (e = e.child))
        for (Fs(e, t, n), e = e.sibling; null !== e; ) (Fs(e, t, n), (e = e.sibling));
}
function $s(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (4 !== r && null !== (e = e.child))
        for ($s(e, t, n), e = e.sibling; null !== e; ) ($s(e, t, n), (e = e.sibling));
}
var Ks = null,
    Ws = !1;
function Hs(e, t, n) {
    for (n = n.child; null !== n; ) (qs(e, t, n), (n = n.sibling));
}
function qs(e, t, n) {
    if (Bn && 'function' == typeof Bn.onCommitFiberUnmount)
        try {
            Bn.onCommitFiberUnmount(Mn, n);
        } catch (u) {}
    switch (n.tag) {
        case 5:
            js || Ls(n, t);
        case 6:
            var r = Ks,
                i = Ws;
            ((Ks = null),
                Hs(e, t, n),
                (Ws = i),
                null !== (Ks = r) &&
                    (Ws
                        ? ((e = Ks),
                          (n = n.stateNode),
                          8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : Ks.removeChild(n.stateNode)));
            break;
        case 18:
            null !== Ks &&
                (Ws
                    ? ((e = Ks),
                      (n = n.stateNode),
                      8 === e.nodeType ? Fa(e.parentNode, n) : 1 === e.nodeType && Fa(e, n),
                      kr(e))
                    : Fa(Ks, n.stateNode));
            break;
        case 4:
            ((r = Ks), (i = Ws), (Ks = n.stateNode.containerInfo), (Ws = !0), Hs(e, t, n), (Ks = r), (Ws = i));
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!js && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                i = r = r.next;
                do {
                    var a = i,
                        o = a.destroy;
                    ((a = a.tag), void 0 !== o && (0 != (2 & a) || 0 != (4 & a)) && Rs(n, t, o), (i = i.next));
                } while (i !== r);
            }
            Hs(e, t, n);
            break;
        case 1:
            if (!js && (Ls(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount))
                try {
                    ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
                } catch (u) {
                    af(n, t, u);
                }
            Hs(e, t, n);
            break;
        case 21:
            Hs(e, t, n);
            break;
        case 22:
            1 & n.mode ? ((js = (r = js) || null !== n.memoizedState), Hs(e, t, n), (js = r)) : Hs(e, t, n);
            break;
        default:
            Hs(e, t, n);
    }
}
function Gs(e) {
    var t = e.updateQueue;
    if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        (null === n && (n = e.stateNode = new Ns()),
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
            var i = n[r];
            try {
                var a = e,
                    o = t,
                    u = o;
                e: for (; null !== u; ) {
                    switch (u.tag) {
                        case 5:
                            ((Ks = u.stateNode), (Ws = !1));
                            break e;
                        case 3:
                        case 4:
                            ((Ks = u.stateNode.containerInfo), (Ws = !0));
                            break e;
                    }
                    u = u.return;
                }
                if (null === Ks) throw Error(Me(160));
                (qs(a, o, i), (Ks = null), (Ws = !1));
                var l = i.alternate;
                (null !== l && (l.return = null), (i.return = null));
            } catch (s) {
                af(i, t, s);
            }
        }
    if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) (Xs(t, e), (t = t.sibling));
}
function Xs(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Qs(t, e), Ys(e), 4 & r)) {
                try {
                    (Ds(3, e, e.return), Is(3, e));
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
            (Qs(t, e), Ys(e), 512 & r && null !== n && Ls(n, n.return));
            break;
        case 5:
            if ((Qs(t, e), Ys(e), 512 & r && null !== n && Ls(n, n.return), 32 & e.flags)) {
                var i = e.stateNode;
                try {
                    Ht(i, '');
                } catch (v) {
                    af(e, e.return, v);
                }
            }
            if (4 & r && null != (i = e.stateNode)) {
                var a = e.memoizedProps,
                    o = null !== n ? n.memoizedProps : a,
                    u = e.type,
                    l = e.updateQueue;
                if (((e.updateQueue = null), null !== l))
                    try {
                        ('input' === u && 'radio' === a.type && null != a.name && Nt(i, a), Zt(u, o));
                        var s = Zt(u, a);
                        for (o = 0; o < l.length; o += 2) {
                            var c = l[o],
                                f = l[o + 1];
                            'style' === c
                                ? Xt(i, f)
                                : 'dangerouslySetInnerHTML' === c
                                  ? Wt(i, f)
                                  : 'children' === c
                                    ? Ht(i, f)
                                    : Ze(i, c, f, s);
                        }
                        switch (u) {
                            case 'input':
                                Tt(i, a);
                                break;
                            case 'textarea':
                                Mt(i, a);
                                break;
                            case 'select':
                                var d = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!a.multiple;
                                var h = a.value;
                                null != h
                                    ? Dt(i, !!a.multiple, h, !1)
                                    : d !== !!a.multiple &&
                                      (null != a.defaultValue
                                          ? Dt(i, !!a.multiple, a.defaultValue, !0)
                                          : Dt(i, !!a.multiple, a.multiple ? [] : '', !1));
                        }
                        i[qa] = a;
                    } catch (v) {
                        af(e, e.return, v);
                    }
            }
            break;
        case 6:
            if ((Qs(t, e), Ys(e), 4 & r)) {
                if (null === e.stateNode) throw Error(Me(162));
                ((i = e.stateNode), (a = e.memoizedProps));
                try {
                    i.nodeValue = a;
                } catch (v) {
                    af(e, e.return, v);
                }
            }
            break;
        case 3:
            if ((Qs(t, e), Ys(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                    kr(t.containerInfo);
                } catch (v) {
                    af(e, e.return, v);
                }
            break;
        case 4:
        default:
            (Qs(t, e), Ys(e));
            break;
        case 13:
            (Qs(t, e),
                Ys(e),
                8192 & (i = e.child).flags &&
                    ((a = null !== i.memoizedState),
                    (i.stateNode.isHidden = a),
                    !a || (null !== i.alternate && null !== i.alternate.memoizedState) || (wc = Tn())),
                4 & r && Gs(e));
            break;
        case 22:
            if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((js = (s = js) || c), Qs(t, e), (js = s)) : Qs(t, e),
                Ys(e),
                8192 & r)
            ) {
                if (((s = null !== e.memoizedState), (e.stateNode.isHidden = s) && !c && 0 != (1 & e.mode)))
                    for (Ts = e, c = e.child; null !== c; ) {
                        for (f = Ts = c; null !== Ts; ) {
                            switch (((h = (d = Ts).child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Ds(4, d, d.return);
                                    break;
                                case 1:
                                    Ls(d, d.return);
                                    var p = d.stateNode;
                                    if ('function' == typeof p.componentWillUnmount) {
                                        ((r = d), (n = d.return));
                                        try {
                                            ((t = r),
                                                (p.props = t.memoizedProps),
                                                (p.state = t.memoizedState),
                                                p.componentWillUnmount());
                                        } catch (v) {
                                            af(r, n, v);
                                        }
                                    }
                                    break;
                                case 5:
                                    Ls(d, d.return);
                                    break;
                                case 22:
                                    if (null !== d.memoizedState) {
                                        tc(f);
                                        continue;
                                    }
                            }
                            null !== h ? ((h.return = d), (Ts = h)) : tc(f);
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
                                        : ((u = f.stateNode),
                                          (o =
                                              null != (l = f.memoizedProps.style) && l.hasOwnProperty('display')
                                                  ? l.display
                                                  : null),
                                          (u.style.display = Qt('display', o))));
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
            (Qs(t, e), Ys(e), 4 & r && Gs(e));
        case 21:
    }
}
function Ys(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e: {
                for (var n = e.return; null !== n; ) {
                    if (Bs(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(Me(160));
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    (32 & r.flags && (Ht(i, ''), (r.flags &= -33)), $s(e, Us(e), i));
                    break;
                case 3:
                case 4:
                    var a = r.stateNode.containerInfo;
                    Fs(e, Us(e), a);
                    break;
                default:
                    throw Error(Me(161));
            }
        } catch (o) {
            af(e, e.return, o);
        }
        e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
}
function Js(e, t, n) {
    ((Ts = e), Zs(e));
}
function Zs(e, t, n) {
    for (var r = 0 != (1 & e.mode); null !== Ts; ) {
        var i = Ts,
            a = i.child;
        if (22 === i.tag && r) {
            var o = null !== i.memoizedState || Cs;
            if (!o) {
                var u = i.alternate,
                    l = (null !== u && null !== u.memoizedState) || js;
                u = Cs;
                var s = js;
                if (((Cs = o), (js = l) && !s))
                    for (Ts = i; null !== Ts; )
                        ((l = (o = Ts).child),
                            22 === o.tag && null !== o.memoizedState
                                ? nc(i)
                                : null !== l
                                  ? ((l.return = o), (Ts = l))
                                  : nc(i));
                for (; null !== a; ) ((Ts = a), Zs(a), (a = a.sibling));
                ((Ts = i), (Cs = u), (js = s));
            }
            ec(e);
        } else 0 != (8772 & i.subtreeFlags) && null !== a ? ((a.return = i), (Ts = a)) : ec(e);
    }
}
function ec(e) {
    for (; null !== Ts; ) {
        var t = Ts;
        if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
                if (0 != (8772 & t.flags))
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            js || Is(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (4 & t.flags && !js)
                                if (null === n) r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : Dl(t.type, n.memoizedProps);
                                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var a = t.updateQueue;
                            null !== a && Ou(t, a, r);
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
                                Ou(t, o, n);
                            }
                            break;
                        case 5:
                            var u = t.stateNode;
                            if (null === n && 4 & t.flags) {
                                n = u;
                                var l = t.memoizedProps;
                                switch (t.type) {
                                    case 'button':
                                    case 'input':
                                    case 'select':
                                    case 'textarea':
                                        l.autoFocus && n.focus();
                                        break;
                                    case 'img':
                                        l.src && (n.src = l.src);
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
                            throw Error(Me(163));
                    }
                js || (512 & t.flags && zs(t));
            } catch (d) {
                af(t, t.return, d);
            }
        }
        if (t === e) {
            Ts = null;
            break;
        }
        if (null !== (n = t.sibling)) {
            ((n.return = t.return), (Ts = n));
            break;
        }
        Ts = t.return;
    }
}
function tc(e) {
    for (; null !== Ts; ) {
        var t = Ts;
        if (t === e) {
            Ts = null;
            break;
        }
        var n = t.sibling;
        if (null !== n) {
            ((n.return = t.return), (Ts = n));
            break;
        }
        Ts = t.return;
    }
}
function nc(e) {
    for (; null !== Ts; ) {
        var t = Ts;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Is(4, t);
                    } catch (l) {
                        af(t, n, l);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if ('function' == typeof r.componentDidMount) {
                        var i = t.return;
                        try {
                            r.componentDidMount();
                        } catch (l) {
                            af(t, i, l);
                        }
                    }
                    var a = t.return;
                    try {
                        zs(t);
                    } catch (l) {
                        af(t, a, l);
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        zs(t);
                    } catch (l) {
                        af(t, o, l);
                    }
            }
        } catch (l) {
            af(t, t.return, l);
        }
        if (t === e) {
            Ts = null;
            break;
        }
        var u = t.sibling;
        if (null !== u) {
            ((u.return = t.return), (Ts = u));
            break;
        }
        Ts = t.return;
    }
}
var rc,
    ic = Math.ceil,
    ac = et.ReactCurrentDispatcher,
    oc = et.ReactCurrentOwner,
    uc = et.ReactCurrentBatchConfig,
    lc = 0,
    sc = null,
    cc = null,
    fc = 0,
    dc = 0,
    hc = io(0),
    pc = 0,
    vc = null,
    gc = 0,
    bc = 0,
    yc = 0,
    mc = null,
    _c = null,
    wc = 0,
    Sc = 1 / 0,
    kc = null,
    Oc = !1,
    xc = null,
    Ec = null,
    Pc = !1,
    Ac = null,
    Cc = 0,
    jc = 0,
    Nc = null,
    Tc = -1,
    Lc = 0;
function Rc() {
    return 0 != (6 & lc) ? Tn() : -1 !== Tc ? Tc : (Tc = Tn());
}
function Vc(e) {
    return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & lc) && 0 !== fc
          ? fc & -fc
          : null !== Xo.transition
            ? (0 === Lc && (Lc = Xn()), Lc)
            : 0 !== (e = er)
              ? e
              : (e = void 0 === (e = window.event) ? 16 : Nr(e.type));
}
function Dc(e, t, n, r) {
    if (50 < jc) throw ((jc = 0), (Nc = null), Error(Me(185)));
    (Jn(e, n, r),
        (0 != (2 & lc) && e === sc) ||
            (e === sc && (0 == (2 & lc) && (bc |= n), 4 === pc && Uc(e, fc)),
            Ic(e, r),
            1 === n && 0 === lc && 0 == (1 & t.mode) && ((Sc = Tn() + 500), _o && ko())));
}
function Ic(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
            var o = 31 - Un(a),
                u = 1 << o,
                l = i[o];
            (-1 === l ? (0 != (u & n) && 0 == (u & r)) || (i[o] = Gn(u, t)) : l <= t && (e.expiredLanes |= u),
                (a &= ~u));
        }
    })(e, t);
    var r = qn(e, e === sc ? fc : 0);
    if (0 === r) (null !== n && Cn(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && Cn(n), 1 === t))
            (0 === e.tag
                ? (function (e) {
                      ((_o = !0), So(e));
                  })(Fc.bind(null, e))
                : So(Fc.bind(null, e)),
                Ba(function () {
                    0 == (6 & lc) && ko();
                }),
                (n = null));
        else {
            switch (tr(r)) {
                case 1:
                    n = Rn;
                    break;
                case 4:
                    n = Vn;
                    break;
                case 16:
                default:
                    n = Dn;
                    break;
                case 536870912:
                    n = zn;
            }
            n = cf(n, zc.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = n));
    }
}
function zc(e, t) {
    if (((Tc = -1), (Lc = 0), 0 != (6 & lc))) throw Error(Me(327));
    var n = e.callbackNode;
    if (nf() && e.callbackNode !== n) return null;
    var r = qn(e, e === sc ? fc : 0);
    if (0 === r) return null;
    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = Xc(e, r);
    else {
        t = r;
        var i = lc;
        lc |= 2;
        var a = Gc();
        for ((sc === e && fc === t) || ((kc = null), (Sc = Tn() + 500), Hc(e, t)); ; )
            try {
                Jc();
                break;
            } catch (u) {
                qc(e, u);
            }
        (uu(), (ac.current = a), (lc = i), null !== cc ? (t = 0) : ((sc = null), (fc = 0), (t = pc)));
    }
    if (0 !== t) {
        if ((2 === t && 0 !== (i = Qn(e)) && ((r = i), (t = Mc(e, i))), 1 === t))
            throw ((n = vc), Hc(e, 0), Uc(e, r), Ic(e, Tn()), n);
        if (6 === t) Uc(e, r);
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
                                            if (!Ui(a(), i)) return !1;
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
                    (2 === (t = Xc(e, r)) && 0 !== (a = Qn(e)) && ((r = a), (t = Mc(e, a))), 1 === t))
            )
                throw ((n = vc), Hc(e, 0), Uc(e, r), Ic(e, Tn()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(Me(345));
                case 2:
                case 5:
                    tf(e, _c, kc);
                    break;
                case 3:
                    if ((Uc(e, r), (130023424 & r) === r && 10 < (t = wc + 500 - Tn()))) {
                        if (0 !== qn(e, 0)) break;
                        if (((i = e.suspendedLanes) & r) !== r) {
                            (Rc(), (e.pingedLanes |= e.suspendedLanes & i));
                            break;
                        }
                        e.timeoutHandle = Ia(tf.bind(null, e, _c, kc), t);
                        break;
                    }
                    tf(e, _c, kc);
                    break;
                case 4:
                    if ((Uc(e, r), (4194240 & r) === r)) break;
                    for (t = e.eventTimes, i = -1; 0 < r; ) {
                        var o = 31 - Un(r);
                        ((a = 1 << o), (o = t[o]) > i && (i = o), (r &= ~a));
                    }
                    if (
                        ((r = i),
                        10 <
                            (r =
                                (120 > (r = Tn() - r)
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
                                              : 1960 * ic(r / 1960)) - r))
                    ) {
                        e.timeoutHandle = Ia(tf.bind(null, e, _c, kc), r);
                        break;
                    }
                    tf(e, _c, kc);
                    break;
                default:
                    throw Error(Me(329));
            }
        }
    }
    return (Ic(e, Tn()), e.callbackNode === n ? zc.bind(null, e) : null);
}
function Mc(e, t) {
    var n = mc;
    return (
        e.current.memoizedState.isDehydrated && (Hc(e, t).flags |= 256),
        2 !== (e = Xc(e, t)) && ((t = _c), (_c = n), null !== t && Bc(t)),
        e
    );
}
function Bc(e) {
    null === _c ? (_c = e) : _c.push.apply(_c, e);
}
function Uc(e, t) {
    for (t &= ~yc, t &= ~bc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Un(t),
            r = 1 << n;
        ((e[n] = -1), (t &= ~r));
    }
}
function Fc(e) {
    if (0 != (6 & lc)) throw Error(Me(327));
    nf();
    var t = qn(e, 0);
    if (0 == (1 & t)) return (Ic(e, Tn()), null);
    var n = Xc(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = Qn(e);
        0 !== r && ((t = r), (n = Mc(e, r)));
    }
    if (1 === n) throw ((n = vc), Hc(e, 0), Uc(e, t), Ic(e, Tn()), n);
    if (6 === n) throw Error(Me(345));
    return ((e.finishedWork = e.current.alternate), (e.finishedLanes = t), tf(e, _c, kc), Ic(e, Tn()), null);
}
function $c(e, t) {
    var n = lc;
    lc |= 1;
    try {
        return e(t);
    } finally {
        0 === (lc = n) && ((Sc = Tn() + 500), _o && ko());
    }
}
function Kc(e) {
    null !== Ac && 0 === Ac.tag && 0 == (6 & lc) && nf();
    var t = lc;
    lc |= 1;
    var n = uc.transition,
        r = er;
    try {
        if (((uc.transition = null), (er = 1), e)) return e();
    } finally {
        ((er = r), (uc.transition = n), 0 == (6 & (lc = t)) && ko());
    }
}
function Wc() {
    ((dc = hc.current), ao(hc));
}
function Hc(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), za(n)), null !== cc))
        for (n = cc.return; null !== n; ) {
            var r = n;
            switch ((Do(r), r.tag)) {
                case 1:
                    null != (r = r.type.childContextTypes) && po();
                    break;
                case 3:
                    (Nu(), ao(so), ao(lo), Iu());
                    break;
                case 5:
                    Lu(r);
                    break;
                case 4:
                    Nu();
                    break;
                case 13:
                case 19:
                    ao(Ru);
                    break;
                case 10:
                    lu(r.type._context);
                    break;
                case 22:
                case 23:
                    Wc();
            }
            n = n.return;
        }
    if (
        ((sc = e),
        (cc = e = pf(e.current, null)),
        (fc = dc = t),
        (pc = 0),
        (vc = null),
        (yc = bc = gc = 0),
        (_c = mc = null),
        null !== du)
    ) {
        for (t = 0; t < du.length; t++)
            if (null !== (r = (n = du[t]).interleaved)) {
                n.interleaved = null;
                var i = r.next,
                    a = n.pending;
                if (null !== a) {
                    var o = a.next;
                    ((a.next = i), (r.next = o));
                }
                n.pending = r;
            }
        du = null;
    }
    return e;
}
function qc(e, t) {
    for (;;) {
        var n = cc;
        try {
            if ((uu(), (zu.current = Tl), Ku)) {
                for (var r = Uu.memoizedState; null !== r; ) {
                    var i = r.queue;
                    (null !== i && (i.pending = null), (r = r.next));
                }
                Ku = !1;
            }
            if (
                ((Bu = 0),
                ($u = Fu = Uu = null),
                (Wu = !1),
                (Hu = 0),
                (oc.current = null),
                null === n || null === n.return)
            ) {
                ((pc = 1), (vc = t), (cc = null));
                break;
            }
            e: {
                var a = e,
                    o = n.return,
                    u = n,
                    l = t;
                if (((t = fc), (u.flags |= 32768), null !== l && 'object' == typeof l && 'function' == typeof l.then)) {
                    var s = l,
                        c = u,
                        f = c.tag;
                    if (0 == (1 & c.mode) && (0 === f || 11 === f || 15 === f)) {
                        var d = c.alternate;
                        d
                            ? ((c.updateQueue = d.updateQueue),
                              (c.memoizedState = d.memoizedState),
                              (c.lanes = d.lanes))
                            : ((c.updateQueue = null), (c.memoizedState = null));
                    }
                    var h = Xl(o);
                    if (null !== h) {
                        ((h.flags &= -257), Yl(h, o, u, 0, t), 1 & h.mode && Ql(a, s, t), (l = s));
                        var p = (t = h).updateQueue;
                        if (null === p) {
                            var v = new Set();
                            (v.add(l), (t.updateQueue = v));
                        } else p.add(l);
                        break e;
                    }
                    if (0 == (1 & t)) {
                        (Ql(a, s, t), Qc());
                        break e;
                    }
                    l = Error(Me(426));
                } else if (Mo && 1 & u.mode) {
                    var g = Xl(o);
                    if (null !== g) {
                        (0 == (65536 & g.flags) && (g.flags |= 256), Yl(g, o, u, 0, t), Qo($l(l, u)));
                        break e;
                    }
                }
                ((a = l = $l(l, u)), 4 !== pc && (pc = 2), null === mc ? (mc = [a]) : mc.push(a), (a = o));
                do {
                    switch (a.tag) {
                        case 3:
                            ((a.flags |= 65536), (t &= -t), (a.lanes |= t), Su(a, ql(0, l, t)));
                            break e;
                        case 1:
                            u = l;
                            var b = a.type,
                                y = a.stateNode;
                            if (
                                0 == (128 & a.flags) &&
                                ('function' == typeof b.getDerivedStateFromError ||
                                    (null !== y &&
                                        'function' == typeof y.componentDidCatch &&
                                        (null === Ec || !Ec.has(y))))
                            ) {
                                ((a.flags |= 65536), (t &= -t), (a.lanes |= t), Su(a, Gl(a, u, t)));
                                break e;
                            }
                    }
                    a = a.return;
                } while (null !== a);
            }
            ef(n);
        } catch (m) {
            ((t = m), cc === n && null !== n && (cc = n = n.return));
            continue;
        }
        break;
    }
}
function Gc() {
    var e = ac.current;
    return ((ac.current = Tl), null === e ? Tl : e);
}
function Qc() {
    ((0 !== pc && 3 !== pc && 2 !== pc) || (pc = 4),
        null === sc || (0 == (268435455 & gc) && 0 == (268435455 & bc)) || Uc(sc, fc));
}
function Xc(e, t) {
    var n = lc;
    lc |= 2;
    var r = Gc();
    for ((sc === e && fc === t) || ((kc = null), Hc(e, t)); ; )
        try {
            Yc();
            break;
        } catch (i) {
            qc(e, i);
        }
    if ((uu(), (lc = n), (ac.current = r), null !== cc)) throw Error(Me(261));
    return ((sc = null), (fc = 0), pc);
}
function Yc() {
    for (; null !== cc; ) Zc(cc);
}
function Jc() {
    for (; null !== cc && !jn(); ) Zc(cc);
}
function Zc(e) {
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
            if (null !== (n = As(n, t))) return ((n.flags &= 32767), void (cc = n));
            if (null === e) return ((pc = 6), void (cc = null));
            ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        }
        if (null !== (t = t.sibling)) return void (cc = t);
        cc = t = e;
    } while (null !== t);
    0 === pc && (pc = 5);
}
function tf(e, t, n) {
    var r = er,
        i = uc.transition;
    try {
        ((uc.transition = null),
            (er = 1),
            (function (e, t, n, r) {
                do {
                    nf();
                } while (null !== Ac);
                if (0 != (6 & lc)) throw Error(Me(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(Me(177));
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
                            var i = 31 - Un(n),
                                a = 1 << i;
                            ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a));
                        }
                    })(e, a),
                    e === sc && ((cc = sc = null), (fc = 0)),
                    (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                        Pc ||
                        ((Pc = !0),
                        cf(Dn, function () {
                            return (nf(), null);
                        })),
                    (a = 0 != (15990 & n.flags)),
                    0 != (15990 & n.subtreeFlags) || a)
                ) {
                    ((a = uc.transition), (uc.transition = null));
                    var o = er;
                    er = 1;
                    var u = lc;
                    ((lc |= 4),
                        (oc.current = null),
                        (function (e, t) {
                            if (((Ra = xr), qi((e = Hi())))) {
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
                                                u = -1,
                                                l = -1,
                                                s = 0,
                                                c = 0,
                                                f = e,
                                                d = null;
                                            t: for (;;) {
                                                for (
                                                    var h;
                                                    f !== n || (0 !== i && 3 !== f.nodeType) || (u = o + i),
                                                        f !== a || (0 !== r && 3 !== f.nodeType) || (l = o + r),
                                                        3 === f.nodeType && (o += f.nodeValue.length),
                                                        null !== (h = f.firstChild);
                                                )
                                                    ((d = f), (f = h));
                                                for (;;) {
                                                    if (f === e) break t;
                                                    if (
                                                        (d === n && ++s === i && (u = o),
                                                        d === a && ++c === r && (l = o),
                                                        null !== (h = f.nextSibling))
                                                    )
                                                        break;
                                                    d = (f = d).parentNode;
                                                }
                                                f = h;
                                            }
                                            n = -1 === u || -1 === l ? null : { start: u, end: l };
                                        } else n = null;
                                    }
                                n = n || { start: 0, end: 0 };
                            } else n = null;
                            for (Va = { focusedElem: e, selectionRange: n }, xr = !1, Ts = t; null !== Ts; )
                                if (((e = (t = Ts).child), 0 != (1028 & t.subtreeFlags) && null !== e))
                                    ((e.return = t), (Ts = e));
                                else
                                    for (; null !== Ts; ) {
                                        t = Ts;
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
                                                                g = p.memoizedState,
                                                                b = t.stateNode,
                                                                y = b.getSnapshotBeforeUpdate(
                                                                    t.elementType === t.type ? v : Dl(t.type, v),
                                                                    g,
                                                                );
                                                            b.__reactInternalSnapshotBeforeUpdate = y;
                                                        }
                                                        break;
                                                    case 3:
                                                        var m = t.stateNode.containerInfo;
                                                        1 === m.nodeType
                                                            ? (m.textContent = '')
                                                            : 9 === m.nodeType &&
                                                              m.documentElement &&
                                                              m.removeChild(m.documentElement);
                                                        break;
                                                    default:
                                                        throw Error(Me(163));
                                                }
                                        } catch (_) {
                                            af(t, t.return, _);
                                        }
                                        if (null !== (e = t.sibling)) {
                                            ((e.return = t.return), (Ts = e));
                                            break;
                                        }
                                        Ts = t.return;
                                    }
                            ((p = Vs), (Vs = !1));
                        })(e, n),
                        Xs(n, e),
                        Gi(Va),
                        (xr = !!Ra),
                        (Va = Ra = null),
                        (e.current = n),
                        Js(n),
                        Nn(),
                        (lc = u),
                        (er = o),
                        (uc.transition = a));
                } else e.current = n;
                if (
                    (Pc && ((Pc = !1), (Ac = e), (Cc = i)),
                    (a = e.pendingLanes),
                    0 === a && (Ec = null),
                    (function (e) {
                        if (Bn && 'function' == typeof Bn.onCommitFiberRoot)
                            try {
                                Bn.onCommitFiberRoot(Mn, e, void 0, 128 == (128 & e.current.flags));
                            } catch (t) {}
                    })(n.stateNode),
                    Ic(e, Tn()),
                    null !== t)
                )
                    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                        ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
                if (Oc) throw ((Oc = !1), (e = xc), (xc = null), e);
                (0 != (1 & Cc) && 0 !== e.tag && nf(),
                    (a = e.pendingLanes),
                    0 != (1 & a) ? (e === Nc ? jc++ : ((jc = 0), (Nc = e))) : (jc = 0),
                    ko());
            })(e, t, n, r));
    } finally {
        ((uc.transition = i), (er = r));
    }
    return null;
}
function nf() {
    if (null !== Ac) {
        var e = tr(Cc),
            t = uc.transition,
            n = er;
        try {
            if (((uc.transition = null), (er = 16 > e ? 16 : e), null === Ac)) var r = !1;
            else {
                if (((e = Ac), (Ac = null), (Cc = 0), 0 != (6 & lc))) throw Error(Me(331));
                var i = lc;
                for (lc |= 4, Ts = e.current; null !== Ts; ) {
                    var a = Ts,
                        o = a.child;
                    if (0 != (16 & Ts.flags)) {
                        var u = a.deletions;
                        if (null !== u) {
                            for (var l = 0; l < u.length; l++) {
                                var s = u[l];
                                for (Ts = s; null !== Ts; ) {
                                    var c = Ts;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ds(8, c, a);
                                    }
                                    var f = c.child;
                                    if (null !== f) ((f.return = c), (Ts = f));
                                    else
                                        for (; null !== Ts; ) {
                                            var d = (c = Ts).sibling,
                                                h = c.return;
                                            if ((Ms(c), c === s)) {
                                                Ts = null;
                                                break;
                                            }
                                            if (null !== d) {
                                                ((d.return = h), (Ts = d));
                                                break;
                                            }
                                            Ts = h;
                                        }
                                }
                            }
                            var p = a.alternate;
                            if (null !== p) {
                                var v = p.child;
                                if (null !== v) {
                                    p.child = null;
                                    do {
                                        var g = v.sibling;
                                        ((v.sibling = null), (v = g));
                                    } while (null !== v);
                                }
                            }
                            Ts = a;
                        }
                    }
                    if (0 != (2064 & a.subtreeFlags) && null !== o) ((o.return = a), (Ts = o));
                    else
                        e: for (; null !== Ts; ) {
                            if (0 != (2048 & (a = Ts).flags))
                                switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ds(9, a, a.return);
                                }
                            var b = a.sibling;
                            if (null !== b) {
                                ((b.return = a.return), (Ts = b));
                                break e;
                            }
                            Ts = a.return;
                        }
                }
                var y = e.current;
                for (Ts = y; null !== Ts; ) {
                    var m = (o = Ts).child;
                    if (0 != (2064 & o.subtreeFlags) && null !== m) ((m.return = o), (Ts = m));
                    else
                        e: for (o = y; null !== Ts; ) {
                            if (0 != (2048 & (u = Ts).flags))
                                try {
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Is(9, u);
                                    }
                                } catch (w) {
                                    af(u, u.return, w);
                                }
                            if (u === o) {
                                Ts = null;
                                break e;
                            }
                            var _ = u.sibling;
                            if (null !== _) {
                                ((_.return = u.return), (Ts = _));
                                break e;
                            }
                            Ts = u.return;
                        }
                }
                if (((lc = i), ko(), Bn && 'function' == typeof Bn.onPostCommitFiberRoot))
                    try {
                        Bn.onPostCommitFiberRoot(Mn, e);
                    } catch (w) {}
                r = !0;
            }
            return r;
        } finally {
            ((er = n), (uc.transition = t));
        }
    }
    return !1;
}
function rf(e, t, n) {
    ((e = _u(e, (t = ql(0, (t = $l(n, t)), 1)), 1)), (t = Rc()), null !== e && (Jn(e, 1, t), Ic(e, t)));
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
                    ((t = _u(t, (e = Gl(t, (e = $l(n, e)), 1)), 1)), (e = Rc()), null !== t && (Jn(t, 1, e), Ic(t, e)));
                    break;
                }
            }
            t = t.return;
        }
}
function of(e, t, n) {
    var r = e.pingCache;
    (null !== r && r.delete(t),
        (t = Rc()),
        (e.pingedLanes |= e.suspendedLanes & n),
        sc === e &&
            (fc & n) === n &&
            (4 === pc || (3 === pc && (130023424 & fc) === fc && 500 > Tn() - wc) ? Hc(e, 0) : (yc |= n)),
        Ic(e, t));
}
function uf(e, t) {
    0 === t && (0 == (1 & e.mode) ? (t = 1) : ((t = Wn), 0 == (130023424 & (Wn <<= 1)) && (Wn = 4194304)));
    var n = Rc();
    null !== (e = vu(e, t)) && (Jn(e, t, n), Ic(e, n));
}
function lf(e) {
    var t = e.memoizedState,
        n = 0;
    (null !== t && (n = t.retryLane), uf(e, n));
}
function sf(e, t) {
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
            throw Error(Me(314));
    }
    (null !== r && r.delete(t), uf(e, n));
}
function cf(e, t) {
    return An(e, t);
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
function hf(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
}
function pf(e, t) {
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
function vf(e, t, n, r, i, a) {
    var o = 2;
    if (((r = e), 'function' == typeof e)) hf(e) && (o = 1);
    else if ('string' == typeof e) o = 5;
    else
        e: switch (e) {
            case rt:
                return gf(n.children, i, a, t);
            case it:
                ((o = 8), (i |= 8));
                break;
            case at:
                return (((e = df(12, n, t, 2 | i)).elementType = at), (e.lanes = a), e);
            case st:
                return (((e = df(13, n, t, i)).elementType = st), (e.lanes = a), e);
            case ct:
                return (((e = df(19, n, t, i)).elementType = ct), (e.lanes = a), e);
            case ht:
                return bf(n, i, a, t);
            default:
                if ('object' == typeof e && null !== e)
                    switch (e.$$typeof) {
                        case ot:
                            o = 10;
                            break e;
                        case ut:
                            o = 9;
                            break e;
                        case lt:
                            o = 11;
                            break e;
                        case ft:
                            o = 14;
                            break e;
                        case dt:
                            ((o = 16), (r = null));
                            break e;
                    }
                throw Error(Me(130, null == e ? e : typeof e, ''));
        }
    return (((t = df(o, n, t, i)).elementType = e), (t.type = r), (t.lanes = a), t);
}
function gf(e, t, n, r) {
    return (((e = df(7, e, r, t)).lanes = n), e);
}
function bf(e, t, n, r) {
    return (((e = df(22, e, r, t)).elementType = ht), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e);
}
function yf(e, t, n) {
    return (((e = df(6, e, null, t)).lanes = n), e);
}
function mf(e, t, n) {
    return (
        ((t = df(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
function _f(e, t, n, r, i) {
    ((this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Yn(0)),
        (this.expirationTimes = Yn(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Yn(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null));
}
function wf(e, t, n, r, i, a, o, u, l) {
    return (
        (e = new _f(e, t, n, u, l)),
        1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
        (a = df(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (a.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        bu(a),
        e
    );
}
function Sf(e) {
    if (!e) return uo;
    e: {
        if (kn((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(Me(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ho(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (null !== t);
        throw Error(Me(171));
    }
    if (1 === e.tag) {
        var n = e.type;
        if (ho(n)) return go(e, n, t);
    }
    return t;
}
function kf(e, t, n, r, i, a, o, u, l) {
    return (
        ((e = wf(n, r, !0, e, 0, a, 0, u, l)).context = Sf(null)),
        (n = e.current),
        ((a = mu((r = Rc()), (i = Vc(n)))).callback = null != t ? t : null),
        _u(n, a, i),
        (e.current.lanes = i),
        Jn(e, i, r),
        Ic(e, r),
        e
    );
}
function Of(e, t, n, r) {
    var i = t.current,
        a = Rc(),
        o = Vc(i);
    return (
        (n = Sf(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = mu(a, o)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = _u(i, t, o)) && (Dc(e, i, o, a), wu(e, i, o)),
        o
    );
}
function xf(e) {
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
        if (e.memoizedProps !== t.pendingProps || so.current) Zl = !0;
        else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                    (Zl = !1),
                    (function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                (ss(t), Go());
                                break;
                            case 5:
                                Tu(t);
                                break;
                            case 1:
                                ho(t.type) && bo(t);
                                break;
                            case 4:
                                ju(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context,
                                    i = t.memoizedProps.value;
                                (oo(ru, r._currentValue), (r._currentValue = i));
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState))
                                    return null !== r.dehydrated
                                        ? (oo(Ru, 1 & Ru.current), (t.flags |= 128), null)
                                        : 0 != (n & t.child.childLanes)
                                          ? bs(e, t, n)
                                          : (oo(Ru, 1 & Ru.current), null !== (e = Os(e, t, n)) ? e.sibling : null);
                                oo(Ru, 1 & Ru.current);
                                break;
                            case 19:
                                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                    if (r) return Ss(e, t, n);
                                    t.flags |= 128;
                                }
                                if (
                                    (null !== (i = t.memoizedState) &&
                                        ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                                    oo(Ru, Ru.current),
                                    r)
                                )
                                    break;
                                return null;
                            case 22:
                            case 23:
                                return ((t.lanes = 0), is(e, t, n));
                        }
                        return Os(e, t, n);
                    })(e, t, n)
                );
            Zl = 0 != (131072 & e.flags);
        }
    else ((Zl = !1), Mo && 0 != (1048576 & t.flags) && Ro(t, Po, t.index));
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            (ks(e, t), (e = t.pendingProps));
            var i = fo(t, lo.current);
            (cu(t, n), (i = Xu(null, t, r, e, i, n)));
            var a = Yu();
            return (
                (t.flags |= 1),
                'object' == typeof i && null !== i && 'function' == typeof i.render && void 0 === i.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      ho(r) ? ((a = !0), bo(t)) : (a = !1),
                      (t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null),
                      bu(t),
                      (i.updater = zl),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      Fl(t, r, e, n),
                      (t = ls(null, t, r, !0, a, n)))
                    : ((t.tag = 0), Mo && a && Vo(t), es(null, t, i, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (ks(e, t),
                    (e = t.pendingProps),
                    (r = (i = r._init)(r._payload)),
                    (t.type = r),
                    (i = t.tag =
                        (function (e) {
                            if ('function' == typeof e) return hf(e) ? 1 : 0;
                            if (null != e) {
                                if ((e = e.$$typeof) === lt) return 11;
                                if (e === ft) return 14;
                            }
                            return 2;
                        })(r)),
                    (e = Dl(r, e)),
                    i)
                ) {
                    case 0:
                        t = os(null, t, r, e, n);
                        break e;
                    case 1:
                        t = us(null, t, r, e, n);
                        break e;
                    case 11:
                        t = ts(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ns(null, t, r, Dl(r.type, e), n);
                        break e;
                }
                throw Error(Me(306, r, ''));
            }
            return t;
        case 0:
            return ((r = t.type), (i = t.pendingProps), os(e, t, r, (i = t.elementType === r ? i : Dl(r, i)), n));
        case 1:
            return ((r = t.type), (i = t.pendingProps), us(e, t, r, (i = t.elementType === r ? i : Dl(r, i)), n));
        case 3:
            e: {
                if ((ss(t), null === e)) throw Error(Me(387));
                ((r = t.pendingProps), (i = (a = t.memoizedState).element), yu(e, t), ku(t, r, null, n));
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
                        t = cs(e, t, r, n, (i = $l(Error(Me(423)), t)));
                        break e;
                    }
                    if (r !== i) {
                        t = cs(e, t, r, n, (i = $l(Error(Me(424)), t)));
                        break e;
                    }
                    for (
                        zo = $a(t.stateNode.containerInfo.firstChild),
                            Io = t,
                            Mo = !0,
                            Bo = null,
                            n = nu(t, null, r, n),
                            t.child = n;
                        n;
                    )
                        ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                    if ((Go(), r === i)) {
                        t = Os(e, t, n);
                        break e;
                    }
                    es(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Tu(t),
                null === e && Ko(t),
                (r = t.type),
                (i = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (o = i.children),
                Da(r, i) ? (o = null) : null !== a && Da(r, a) && (t.flags |= 32),
                as(e, t),
                es(e, t, o, n),
                t.child
            );
        case 6:
            return (null === e && Ko(t), null);
        case 13:
            return bs(e, t, n);
        case 4:
            return (
                ju(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = tu(t, null, r, n)) : es(e, t, r, n),
                t.child
            );
        case 11:
            return ((r = t.type), (i = t.pendingProps), ts(e, t, r, (i = t.elementType === r ? i : Dl(r, i)), n));
        case 7:
            return (es(e, t, t.pendingProps, n), t.child);
        case 8:
        case 12:
            return (es(e, t, t.pendingProps.children, n), t.child);
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (i = t.pendingProps),
                    (a = t.memoizedProps),
                    (o = i.value),
                    oo(ru, r._currentValue),
                    (r._currentValue = o),
                    null !== a)
                )
                    if (Ui(a.value, o)) {
                        if (a.children === i.children && !so.current) {
                            t = Os(e, t, n);
                            break e;
                        }
                    } else
                        for (null !== (a = t.child) && (a.return = t); null !== a; ) {
                            var u = a.dependencies;
                            if (null !== u) {
                                o = a.child;
                                for (var l = u.firstContext; null !== l; ) {
                                    if (l.context === r) {
                                        if (1 === a.tag) {
                                            (l = mu(-1, n & -n)).tag = 2;
                                            var s = a.updateQueue;
                                            if (null !== s) {
                                                var c = (s = s.shared).pending;
                                                (null === c ? (l.next = l) : ((l.next = c.next), (c.next = l)),
                                                    (s.pending = l));
                                            }
                                        }
                                        ((a.lanes |= n),
                                            null !== (l = a.alternate) && (l.lanes |= n),
                                            su(a.return, n, t),
                                            (u.lanes |= n));
                                        break;
                                    }
                                    l = l.next;
                                }
                            } else if (10 === a.tag) o = a.type === t.type ? null : a.child;
                            else if (18 === a.tag) {
                                if (null === (o = a.return)) throw Error(Me(341));
                                ((o.lanes |= n),
                                    null !== (u = o.alternate) && (u.lanes |= n),
                                    su(o, n, t),
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
                (es(e, t, i.children, n), (t = t.child));
            }
            return t;
        case 9:
            return (
                (i = t.type),
                (r = t.pendingProps.children),
                cu(t, n),
                (r = r((i = fu(i)))),
                (t.flags |= 1),
                es(e, t, r, n),
                t.child
            );
        case 14:
            return ((i = Dl((r = t.type), t.pendingProps)), ns(e, t, r, (i = Dl(r.type, i)), n));
        case 15:
            return rs(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Dl(r, i)),
                ks(e, t),
                (t.tag = 1),
                ho(r) ? ((e = !0), bo(t)) : (e = !1),
                cu(t, n),
                Bl(t, r, i),
                Fl(t, r, i, n),
                ls(null, t, r, !0, e, n)
            );
        case 19:
            return Ss(e, t, n);
        case 22:
            return is(e, t, n);
    }
    throw Error(Me(156, t.tag));
};
var Af =
    'function' == typeof reportError
        ? reportError
        : function (e) {
              console.error(e);
          };
function Cf(e) {
    this._internalRoot = e;
}
function jf(e) {
    this._internalRoot = e;
}
function Nf(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function Tf(e) {
    return !(
        !e ||
        (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
    );
}
function Lf() {}
function Rf(e, t, n, r, i) {
    var a = n._reactRootContainer;
    if (a) {
        var o = a;
        if ('function' == typeof i) {
            var u = i;
            i = function () {
                var e = xf(o);
                u.call(e);
            };
        }
        Of(t, o, e, i);
    } else
        o = (function (e, t, n, r, i) {
            if (i) {
                if ('function' == typeof r) {
                    var a = r;
                    r = function () {
                        var e = xf(o);
                        a.call(e);
                    };
                }
                var o = kf(t, r, e, 0, null, !1, 0, '', Lf);
                return (
                    (e._reactRootContainer = o),
                    (e[Ga] = o.current),
                    Sa(8 === e.nodeType ? e.parentNode : e),
                    Kc(),
                    o
                );
            }
            for (; (i = e.lastChild); ) e.removeChild(i);
            if ('function' == typeof r) {
                var u = r;
                r = function () {
                    var e = xf(l);
                    u.call(e);
                };
            }
            var l = wf(e, 0, !1, null, 0, !1, 0, '', Lf);
            return (
                (e._reactRootContainer = l),
                (e[Ga] = l.current),
                Sa(8 === e.nodeType ? e.parentNode : e),
                Kc(function () {
                    Of(t, l, n, r);
                }),
                l
            );
        })(n, t, e, i, r);
    return xf(o);
}
((jf.prototype.render = Cf.prototype.render =
    function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(Me(409));
        Of(e, t, null, null);
    }),
    (jf.prototype.unmount = Cf.prototype.unmount =
        function () {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                (Kc(function () {
                    Of(null, e, null, null);
                }),
                    (t[Ga] = null));
            }
        }),
    (jf.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = ar();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < pr.length && 0 !== t && t < pr[n].priority; n++);
            (pr.splice(n, 0, e), 0 === n && yr(e));
        }
    }),
    (nr = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Hn(t.pendingLanes);
                    0 !== n && (Zn(t, 1 | n), Ic(t, Tn()), 0 == (6 & lc) && ((Sc = Tn() + 500), ko()));
                }
                break;
            case 13:
                (Kc(function () {
                    var t = vu(e, 1);
                    if (null !== t) {
                        var n = Rc();
                        Dc(t, e, 1, n);
                    }
                }),
                    Pf(e, 1));
        }
    }),
    (rr = function (e) {
        if (13 === e.tag) {
            var t = vu(e, 134217728);
            if (null !== t) Dc(t, e, 134217728, Rc());
            Pf(e, 134217728);
        }
    }),
    (ir = function (e) {
        if (13 === e.tag) {
            var t = Vc(e),
                n = vu(e, t);
            if (null !== n) Dc(n, e, t, Rc());
            Pf(e, t);
        }
    }),
    (ar = function () {
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
                if ((Tt(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                    for (n = e; n.parentNode; ) n = n.parentNode;
                    for (
                        n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var i = to(r);
                            if (!i) throw Error(Me(90));
                            (Pt(r), Tt(r, i));
                        }
                    }
                }
                break;
            case 'textarea':
                Mt(e, n);
                break;
            case 'select':
                null != (t = n.value) && Dt(e, !!n.multiple, t, !1);
        }
    }),
    (sn = $c),
    (cn = Kc));
var Vf = { usingClientEntryPoint: !1, Events: [Za, eo, to, un, ln, $c] },
    Df = { findFiberByHostInstance: Ja, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    If = {
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
    var zf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zf.isDisabled && zf.supportsFiber)
        try {
            ((Mn = zf.inject(If)), (Bn = zf));
        } catch (Kt) {}
}
((Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vf),
    (Le.createPortal = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Nf(t)) throw Error(Me(200));
        return (function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: nt, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
        })(e, t, null, n);
    }),
    (Le.createRoot = function (e, t) {
        if (!Nf(e)) throw Error(Me(299));
        var n = !1,
            r = '',
            i = Af;
        return (
            null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
            (t = wf(e, 1, !1, null, 0, n, 0, r, i)),
            (e[Ga] = t.current),
            Sa(8 === e.nodeType ? e.parentNode : e),
            new Cf(t)
        );
    }),
    (Le.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
            if ('function' == typeof e.render) throw Error(Me(188));
            throw ((e = Object.keys(e).join(',')), Error(Me(268, e)));
        }
        return (e = null === (e = En(t)) ? null : e.stateNode);
    }),
    (Le.flushSync = function (e) {
        return Kc(e);
    }),
    (Le.hydrate = function (e, t, n) {
        if (!Tf(t)) throw Error(Me(200));
        return Rf(null, e, t, !0, n);
    }),
    (Le.hydrateRoot = function (e, t, n) {
        if (!Nf(e)) throw Error(Me(405));
        var r = (null != n && n.hydratedSources) || null,
            i = !1,
            a = '',
            o = Af;
        if (
            (null != n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
            (t = kf(t, null, e, 1, null != n ? n : null, i, 0, a, o)),
            (e[Ga] = t.current),
            Sa(e),
            r)
        )
            for (e = 0; e < r.length; e++)
                ((i = (i = (n = r[e])._getVersion)(n._source)),
                    null == t.mutableSourceEagerHydrationData
                        ? (t.mutableSourceEagerHydrationData = [n, i])
                        : t.mutableSourceEagerHydrationData.push(n, i));
        return new jf(t);
    }),
    (Le.render = function (e, t, n) {
        if (!Tf(t)) throw Error(Me(200));
        return Rf(null, e, t, !1, n);
    }),
    (Le.unmountComponentAtNode = function (e) {
        if (!Tf(e)) throw Error(Me(40));
        return (
            !!e._reactRootContainer &&
            (Kc(function () {
                Rf(null, null, e, !1, function () {
                    ((e._reactRootContainer = null), (e[Ga] = null));
                });
            }),
            !0)
        );
    }),
    (Le.unstable_batchedUpdates = $c),
    (Le.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!Tf(n)) throw Error(Me(200));
        if (null == e || void 0 === e._reactInternals) throw Error(Me(38));
        return Rf(e, t, n, !1, r);
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
    (Te.exports = Le));
var Mf = Te.exports,
    Bf = Mf;
((Ne.createRoot = Bf.createRoot), (Ne.hydrateRoot = Bf.hydrateRoot));
var Uf,
    Ff = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ((Uf = Ff),
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
                        for (var u in i) e.call(i, u) && i[u] && n.push(u);
                    }
                }
            }
            return n.join(' ');
        }
        Uf.exports ? ((t.default = t), (Uf.exports = t)) : (window.classNames = t);
    })());
const $f = e(Ff.exports);
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
var Wf = {};
function Hf() {
    return 'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : Wf;
}
var qf = Object.assign,
    Gf = Object.getOwnPropertyDescriptor,
    Qf = Object.defineProperty,
    Xf = Object.prototype,
    Yf = [];
Object.freeze(Yf);
var Jf = {};
Object.freeze(Jf);
var Zf = 'undefined' != typeof Proxy,
    ed = Object.toString();
function td() {
    Zf || Kf('Proxy not available');
}
function nd(e) {
    var t = !1;
    return function () {
        if (!t) return ((t = !0), e.apply(this, arguments));
    };
}
var rd = function () {};
function id(e) {
    return 'function' == typeof e;
}
function ad(e) {
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
function ud(e) {
    if (!od(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (null == t) return !0;
    var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n.toString() === ed;
}
function ld(e) {
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
function hd(e) {
    return e instanceof Set;
}
var pd = void 0 !== Object.getOwnPropertySymbols;
var vd =
    'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : pd
          ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            }
          : Object.getOwnPropertyNames;
function gd(e) {
    return null === e ? null : 'object' == typeof e ? '' + e : e;
}
function bd(e, t) {
    return Xf.hasOwnProperty.call(e, t);
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
function md(e, t) {
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
function _d(e, t, n) {
    return (t && md(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
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
function Od(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function xd(e, t) {
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
                if ('string' == typeof e) return xd(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? xd(e, t)
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
function Ad(e) {
    return Object.assign(function (t, n) {
        if (jd(n)) return e.decorate_20223_(t, n);
        Cd(t, n, e);
    }, e);
}
function Cd(e, t, n) {
    (bd(e, Pd) || sd(e, Pd, wd({}, e[Pd])),
        (function (e) {
            return e.annotationType_ === zd;
        })(n) || (e[Pd][t] = n));
}
function jd(e) {
    return 'object' == typeof e && 'string' == typeof e.kind;
}
var Nd = Symbol('mobx administration'),
    Td = (function () {
        function e(e) {
            (void 0 === e && (e = 'Atom'),
                (this.name_ = void 0),
                (this.isPendingUnobservation_ = !1),
                (this.isBeingObserved_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Ih.NOT_TRACKING_),
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
                return lp(this);
            }),
            (t.reportChanged = function () {
                (op(), sp(this), up());
            }),
            (t.toString = function () {
                return this.name_;
            }),
            e
        );
    })(),
    Ld = fd('Atom', Td);
function Rd(e, t, n) {
    (void 0 === t && (t = rd), void 0 === n && (n = rd));
    var r,
        i = new Td(e);
    return (t !== rd && Lp(jp, i, t, r), n !== rd && Tp(i, n), i);
}
var Vd = {
    structural: function (e, t) {
        return Xv(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
};
function Dd(e, t, n) {
    return Kp(e)
        ? e
        : Array.isArray(e)
          ? wh.array(e, { name: n })
          : ud(e)
            ? wh.object(e, void 0, { name: n })
            : dd(e)
              ? wh.map(e, { name: n })
              : hd(e)
                ? wh.set(e, { name: n })
                : 'function' != typeof e || Ep(e) || Up(e)
                  ? e
                  : ld(e)
                    ? Mp(e)
                    : xp(n, e);
}
function Id(e) {
    return e;
}
var zd = 'override';
function Md(e, t) {
    return { annotationType_: e, options_: t, make_: Bd, extend_: Ud, decorate_20223_: Fd };
}
function Bd(e, t, n, r) {
    var i;
    if (null != (i = this.options_) && i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (Ep(n.value)) return 1;
    var a = $d(e, this, t, n, !1);
    return (Qf(r, t, a), 2);
}
function Ud(e, t, n, r) {
    var i = $d(e, this, t, n);
    return e.defineProperty_(t, i, r);
}
function Fd(e, t) {
    var n = t.kind,
        r = t.name,
        i = t.addInitializer,
        a = this;
    if ('field' != n) {
        var o, u, l, s, c, f;
        if ('method' == n)
            return (
                Ep(e) ||
                    ((u = e),
                    (e = Nh(
                        null != (l = null == (s = a.options_) ? void 0 : s.name) ? l : r.toString(),
                        u,
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
            Cd(this, r, a);
        });
}
function $d(e, t, n, r, i) {
    var a, o, u, l, s, c, f, d;
    (void 0 === i && (i = np.safeDescriptors), (d = r), t.annotationType_, d.value);
    var h,
        p = r.value;
    null != (a = t.options_) && a.bound && (p = p.bind(null != (h = e.proxy_) ? h : e.target_));
    return {
        value: Nh(
            null != (o = null == (u = t.options_) ? void 0 : u.name) ? o : n.toString(),
            p,
            null != (l = null == (s = t.options_) ? void 0 : s.autoAction) && l,
            null != (c = t.options_) && c.bound ? (null != (f = e.proxy_) ? f : e.target_) : void 0,
        ),
        configurable: !i || e.isPlainObject_,
        enumerable: !1,
        writable: !i,
    };
}
function Kd(e, t) {
    return { annotationType_: e, options_: t, make_: Wd, extend_: Hd, decorate_20223_: qd };
}
function Wd(e, t, n, r) {
    var i;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (
        null != (i = this.options_) &&
        i.bound &&
        (!bd(e.target_, t) || !Up(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
    )
        return 0;
    if (Up(n.value)) return 1;
    var a = Gd(e, this, t, n, !1, !1);
    return (Qf(r, t, a), 2);
}
function Hd(e, t, n, r) {
    var i,
        a = Gd(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
    return e.defineProperty_(t, a, r);
}
function qd(e, t) {
    var n,
        r = t.name,
        i = t.addInitializer;
    return (
        Up(e) || (e = Mp(e)),
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
function Gd(e, t, n, r, i, a) {
    var o;
    (void 0 === a && (a = np.safeDescriptors), (o = r), t.annotationType_, o.value);
    var u,
        l = r.value;
    (Up(l) || (l = Mp(l)), i) && ((l = l.bind(null != (u = e.proxy_) ? u : e.target_)).isMobXFlow = !0);
    return { value: l, configurable: !a || e.isPlainObject_, enumerable: !1, writable: !a };
}
function Qd(e, t) {
    return { annotationType_: e, options_: t, make_: Xd, extend_: Yd, decorate_20223_: Jd };
}
function Xd(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function Yd(e, t, n, r) {
    var i;
    return (
        (i = n),
        this.annotationType_,
        i.get,
        e.defineComputedProperty_(t, wd({}, this.options_, { get: n.get, set: n.set }), r)
    );
}
function Jd(e, t) {
    var n = this,
        r = t.name;
    return (
        (0, t.addInitializer)(function () {
            var t = Cv(this)[Nd],
                i = wd({}, n.options_, { get: e, context: this });
            (i.name || (i.name = 'ObservableObject.' + r.toString()), t.values_.set(r, new Uh(i)));
        }),
        function () {
            return this[Nd].getObservablePropValue_(r);
        }
    );
}
function Zd(e, t) {
    return { annotationType_: e, options_: t, make_: eh, extend_: th, decorate_20223_: nh };
}
function eh(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function th(e, t, n, r) {
    var i, a;
    return (
        this.annotationType_,
        e.defineObservableProperty_(
            t,
            n.value,
            null != (i = null == (a = this.options_) ? void 0 : a.enhancer) ? i : Dd,
            r,
        )
    );
}
function nh(e, t) {
    var n = this,
        r = t.kind,
        i = t.name,
        a = new WeakSet();
    function o(e, t) {
        var r,
            o,
            u = Cv(e)[Nd],
            l = new Dh(
                t,
                null != (r = null == (o = n.options_) ? void 0 : o.enhancer) ? r : Dd,
                'ObservableObject.' + i.toString(),
                !1,
            );
        (u.values_.set(i, l), a.add(e));
    }
    if ('accessor' == r)
        return {
            get: function () {
                return (a.has(this) || o(this, e.get.call(this)), this[Nd].getObservablePropValue_(i));
            },
            set: function (e) {
                return (a.has(this) || o(this, e), this[Nd].setObservablePropValue_(i, e));
            },
            init: function (e) {
                return (a.has(this) || o(this, e), e);
            },
        };
}
var rh = 'true',
    ih = ah();
function ah(e) {
    return { annotationType_: rh, options_: e, make_: oh, extend_: uh, decorate_20223_: lh };
}
function oh(e, t, n, r) {
    var i, a, o, u;
    if (n.get) return xh.make_(e, t, n, r);
    if (n.set) {
        var l = Nh(t.toString(), n.set);
        return r === e.target_
            ? null === e.defineProperty_(t, { configurable: !np.safeDescriptors || e.isPlainObject_, set: l })
                ? 0
                : 2
            : (Qf(r, t, { configurable: !0, set: l }), 2);
    }
    if (r !== e.target_ && 'function' == typeof n.value)
        return ld(n.value)
            ? (null != (u = this.options_) && u.autoBind ? Mp.bound : Mp).make_(e, t, n, r)
            : (null != (o = this.options_) && o.autoBind ? xp.bound : xp).make_(e, t, n, r);
    var s,
        c = !1 === (null == (i = this.options_) ? void 0 : i.deep) ? wh.ref : wh;
    'function' == typeof n.value &&
        null != (a = this.options_) &&
        a.autoBind &&
        (n.value = n.value.bind(null != (s = e.proxy_) ? s : e.target_));
    return c.make_(e, t, n, r);
}
function uh(e, t, n, r) {
    var i, a, o;
    if (n.get) return xh.extend_(e, t, n, r);
    if (n.set)
        return e.defineProperty_(
            t,
            { configurable: !np.safeDescriptors || e.isPlainObject_, set: Nh(t.toString(), n.set) },
            r,
        );
    'function' == typeof n.value &&
        null != (i = this.options_) &&
        i.autoBind &&
        (n.value = n.value.bind(null != (o = e.proxy_) ? o : e.target_));
    return (!1 === (null == (a = this.options_) ? void 0 : a.deep) ? wh.ref : wh).extend_(e, t, n, r);
}
function lh(e, t) {
    Kf("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var sh = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
function ch(e) {
    return e || sh;
}
Object.freeze(sh);
var fh = Zd('observable'),
    dh = Zd('observable.ref', { enhancer: Id }),
    hh = Zd('observable.shallow', {
        enhancer: function (e, t, n) {
            return null == e || Tv(e) || vv(e) || Sv(e) || xv(e)
                ? e
                : Array.isArray(e)
                  ? wh.array(e, { name: n, deep: !1 })
                  : ud(e)
                    ? wh.object(e, void 0, { name: n, deep: !1 })
                    : dd(e)
                      ? wh.map(e, { name: n, deep: !1 })
                      : hd(e)
                        ? wh.set(e, { name: n, deep: !1 })
                        : void 0;
        },
    }),
    ph = Zd('observable.struct', {
        enhancer: function (e, t) {
            return Xv(e, t) ? t : e;
        },
    }),
    vh = Ad(fh);
function gh(e) {
    return !0 === e.deep
        ? Dd
        : !1 === e.deep
          ? Id
          : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
            ? n
            : Dd;
    var t, n, r;
}
function bh(e, t, n) {
    return jd(t)
        ? fh.decorate_20223_(e, t)
        : ad(t)
          ? void Cd(e, t, fh)
          : Kp(e)
            ? e
            : ud(e)
              ? wh.object(e, t, n)
              : Array.isArray(e)
                ? wh.array(e, t)
                : dd(e)
                  ? wh.map(e, t)
                  : hd(e)
                    ? wh.set(e, t)
                    : 'object' == typeof e && null !== e
                      ? e
                      : wh.box(e, t);
}
qf(bh, vh);
var yh,
    mh,
    _h = {
        box: function (e, t) {
            var n = ch(t);
            return new Dh(e, gh(n), n.name, !0, n.equals);
        },
        array: function (e, t) {
            var n = ch(t);
            return (!1 === np.useProxies || !1 === n.proxy ? Kv : ov)(e, gh(n), n.name);
        },
        map: function (e, t) {
            var n = ch(t);
            return new wv(e, gh(n), n.name);
        },
        set: function (e, t) {
            var n = ch(t);
            return new Ov(e, gh(n), n.name);
        },
        object: function (e, t, n) {
            return Gv(function () {
                return Rp(
                    !1 === np.useProxies || !1 === (null == n ? void 0 : n.proxy)
                        ? Cv({}, n)
                        : (function (e, t) {
                              var n, r;
                              return (
                                  td(),
                                  (e = Cv(e, t)),
                                  null != (r = (n = e[Nd]).proxy_) ? r : (n.proxy_ = new Proxy(e, Gp))
                              );
                          })({}, n),
                    e,
                    t,
                );
            });
        },
        ref: Ad(dh),
        shallow: Ad(hh),
        deep: vh,
        struct: Ad(ph),
    },
    wh = qf(bh, _h),
    Sh = 'computed',
    kh = Qd(Sh),
    Oh = Qd('computed.struct', { equals: Vd.structural }),
    xh = function (e, t) {
        if (jd(t)) return kh.decorate_20223_(e, t);
        if (ad(t)) return Cd(e, t, kh);
        if (ud(e)) return Ad(Qd(Sh, e));
        var n = ud(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new Uh(n));
    };
(Object.assign(xh, kh), (xh.struct = Ad(Oh)));
var Eh,
    Ph = 0,
    Ah = 1,
    Ch = null != (yh = null == (mh = Gf(function () {}, 'name')) ? void 0 : mh.configurable) && yh,
    jh = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
function Nh(e, t, n, r) {
    function i() {
        return Th(e, n, t, r || this, arguments);
    }
    return (
        void 0 === n && (n = !1),
        (i.isMobxAction = !0),
        (i.toString = function () {
            return t.toString();
        }),
        Ch && ((jh.value = e), Qf(i, 'name', jh)),
        i
    );
}
function Th(e, t, n, r, i) {
    var a = (function (e, t, n, r) {
        var i = !1,
            a = 0,
            o = np.trackingDerivation,
            u = !t || !o;
        op();
        var l = np.allowStateChanges;
        u && (Qh(), (l = Lh(!0)));
        var s = Yh(!0),
            c = {
                runAsAction_: u,
                prevDerivation_: o,
                prevAllowStateChanges_: l,
                prevAllowStateReads_: s,
                notifySpy_: i,
                startTime_: a,
                actionId_: Ah++,
                parentActionId_: Ph,
            };
        return ((Ph = c.actionId_), c);
    })(0, t);
    try {
        return n.apply(r, i);
    } catch (o) {
        throw ((a.error_ = o), o);
    } finally {
        !(function (e) {
            Ph !== e.actionId_ && Kf(30);
            ((Ph = e.parentActionId_), void 0 !== e.error_ && (np.suppressReactionErrors = !0));
            (Rh(e.prevAllowStateChanges_), Jh(e.prevAllowStateReads_), up(), e.runAsAction_ && Xh(e.prevDerivation_));
            np.suppressReactionErrors = !1;
        })(a);
    }
}
function Lh(e) {
    var t = np.allowStateChanges;
    return ((np.allowStateChanges = e), t);
}
function Rh(e) {
    np.allowStateChanges = e;
}
Eh = Symbol.toPrimitive;
var Vh,
    Dh = (function (e) {
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
        Sd(t, e);
        var n = t.prototype;
        return (
            (n.dehanceValue = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
                (this.value_, (e = this.prepareNewValue_(e)) !== np.UNCHANGED && this.setNewValue_(e));
            }),
            (n.prepareNewValue_ = function (e) {
                if (Qp(this)) {
                    var t = Yp(this, { object: this, type: rv, newValue: e });
                    if (!t) return np.UNCHANGED;
                    e = t.newValue;
                }
                return (
                    (e = this.enhancer(e, this.value_, this.name_)),
                    this.equals(this.value_, e) ? np.UNCHANGED : e
                );
            }),
            (n.setNewValue_ = function (e) {
                var t = this.value_;
                ((this.value_ = e),
                    this.reportChanged(),
                    Jp(this) && ev(this, { type: rv, object: this, newValue: e, oldValue: t }));
            }),
            (n.get = function () {
                return (this.reportObserved(), this.dehanceValue(this.value_));
            }),
            (n.intercept_ = function (e) {
                return Xp(this, e);
            }),
            (n.observe_ = function (e, t) {
                return (
                    t &&
                        e({
                            observableKind: 'value',
                            debugObjectName: this.name_,
                            object: this,
                            type: rv,
                            newValue: this.value_,
                            oldValue: void 0,
                        }),
                    Zp(this, e)
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
            (n[Eh] = function () {
                return this.valueOf();
            }),
            t
        );
    })(Td);
Vh = Symbol.toPrimitive;
var Ih,
    zh,
    Mh,
    Bh,
    Uh = (function () {
        function e(e) {
            ((this.dependenciesState_ = Ih.NOT_TRACKING_),
                (this.observing_ = []),
                (this.newObserving_ = null),
                (this.isBeingObserved_ = !1),
                (this.isPendingUnobservation_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Ih.UP_TO_DATE_),
                (this.unboundDepsCount_ = 0),
                (this.value_ = new $h(null)),
                (this.name_ = void 0),
                (this.triggeredBy_ = void 0),
                (this.isComputing_ = !1),
                (this.isRunningSetter_ = !1),
                (this.derivation = void 0),
                (this.setter_ = void 0),
                (this.isTracing_ = Mh.NONE),
                (this.scope_ = void 0),
                (this.equals_ = void 0),
                (this.requiresReaction_ = void 0),
                (this.keepAlive_ = void 0),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                e.get || Kf(31),
                (this.derivation = e.get),
                (this.name_ = e.name || 'ComputedValue'),
                e.set && (this.setter_ = Nh('ComputedValue-setter', e.set)),
                (this.equals_ = e.equals || (e.compareStructural || e.struct ? Vd.structural : Vd.default)),
                (this.scope_ = e.context),
                (this.requiresReaction_ = e.requiresReaction),
                (this.keepAlive_ = !!e.keepAlive));
        }
        var t = e.prototype;
        return (
            (t.onBecomeStale_ = function () {
                !(function (e) {
                    if (e.lowestObserverState_ !== Ih.UP_TO_DATE_) return;
                    ((e.lowestObserverState_ = Ih.POSSIBLY_STALE_),
                        e.observers_.forEach(function (e) {
                            e.dependenciesState_ === Ih.UP_TO_DATE_ &&
                                ((e.dependenciesState_ = Ih.POSSIBLY_STALE_), e.onBecomeStale_());
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
                    0 !== np.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                ) {
                    if ((lp(this), Wh(this))) {
                        var e = np.trackingContext;
                        (this.keepAlive_ && !e && (np.trackingContext = this),
                            this.trackAndCompute() &&
                                (function (e) {
                                    if (e.lowestObserverState_ === Ih.STALE_) return;
                                    ((e.lowestObserverState_ = Ih.STALE_),
                                        e.observers_.forEach(function (t) {
                                            t.dependenciesState_ === Ih.POSSIBLY_STALE_
                                                ? (t.dependenciesState_ = Ih.STALE_)
                                                : t.dependenciesState_ === Ih.UP_TO_DATE_ &&
                                                  (e.lowestObserverState_ = Ih.UP_TO_DATE_);
                                        }));
                                })(this),
                            (np.trackingContext = e));
                    }
                } else Wh(this) && (this.warnAboutUntrackedRead_(), op(), (this.value_ = this.computeValue_(!1)), up());
                var t = this.value_;
                if (Kh(t)) throw t.cause;
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
                    t = this.dependenciesState_ === Ih.NOT_TRACKING_,
                    n = this.computeValue_(!0),
                    r = t || Kh(e) || Kh(n) || !this.equals_(e, n);
                return (r && (this.value_ = n), r);
            }),
            (t.computeValue_ = function (e) {
                this.isComputing_ = !0;
                var t,
                    n = Lh(!1);
                if (e) t = Hh(this, this.derivation, this.scope_);
                else if (!0 === np.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                else
                    try {
                        t = this.derivation.call(this.scope_);
                    } catch (r) {
                        t = new $h(r);
                    }
                return (Rh(n), (this.isComputing_ = !1), t);
            }),
            (t.suspend_ = function () {
                this.keepAlive_ || (qh(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
                var n = this,
                    r = !0,
                    i = void 0;
                return (function (e, t) {
                    var n, r, i, a, o;
                    void 0 === t && (t = Jf);
                    var u,
                        l = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun';
                    if (t.scheduler || t.delay) {
                        var s = Ap(t),
                            c = !1;
                        u = new cp(
                            l,
                            function () {
                                c ||
                                    ((c = !0),
                                    s(function () {
                                        ((c = !1), u.isDisposed_ || u.track(f));
                                    }));
                            },
                            t.onError,
                            t.requiresObservable,
                        );
                    } else
                        u = new cp(
                            l,
                            function () {
                                this.track(f);
                            },
                            t.onError,
                            t.requiresObservable,
                        );
                    function f() {
                        e(u);
                    }
                    (null != (i = t) && null != (a = i.signal) && a.aborted) || u.schedule_();
                    return u.getDisposer_(null == (o = t) ? void 0 : o.signal);
                })(function () {
                    var a = n.get();
                    if (!r || t) {
                        var o = Qh();
                        (e({
                            observableKind: 'computed',
                            debugObjectName: n.name_,
                            type: rv,
                            object: n,
                            newValue: a,
                            oldValue: i,
                        }),
                            Xh(o));
                    }
                    ((r = !1), (i = a));
                });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
                return this.name_ + '[' + this.derivation.toString() + ']';
            }),
            (t.valueOf = function () {
                return gd(this.get());
            }),
            (t[Vh] = function () {
                return this.valueOf();
            }),
            e
        );
    })(),
    Fh = fd('ComputedValue', Uh);
(((zh = Ih || (Ih = {}))[(zh.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
    (zh[(zh.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
    (zh[(zh.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
    (zh[(zh.STALE_ = 2)] = 'STALE_'),
    ((Bh = Mh || (Mh = {}))[(Bh.NONE = 0)] = 'NONE'),
    (Bh[(Bh.LOG = 1)] = 'LOG'),
    (Bh[(Bh.BREAK = 2)] = 'BREAK'));
var $h = function (e) {
    ((this.cause = void 0), (this.cause = e));
};
function Kh(e) {
    return e instanceof $h;
}
function Wh(e) {
    switch (e.dependenciesState_) {
        case Ih.UP_TO_DATE_:
            return !1;
        case Ih.NOT_TRACKING_:
        case Ih.STALE_:
            return !0;
        case Ih.POSSIBLY_STALE_:
            for (var t = Yh(!0), n = Qh(), r = e.observing_, i = r.length, a = 0; a < i; a++) {
                var o = r[a];
                if (Fh(o)) {
                    if (np.disableErrorBoundaries) o.get();
                    else
                        try {
                            o.get();
                        } catch (u) {
                            return (Xh(n), Jh(t), !0);
                        }
                    if (e.dependenciesState_ === Ih.STALE_) return (Xh(n), Jh(t), !0);
                }
            }
            return (Zh(e), Xh(n), Jh(t), !1);
    }
}
function Hh(e, t, n) {
    var r = Yh(!0);
    (Zh(e),
        (e.newObserving_ = new Array(e.observing_.length + 100)),
        (e.unboundDepsCount_ = 0),
        (e.runId_ = ++np.runId));
    var i,
        a = np.trackingDerivation;
    if (((np.trackingDerivation = e), np.inBatch++, !0 === np.disableErrorBoundaries)) i = t.call(n);
    else
        try {
            i = t.call(n);
        } catch (o) {
            i = new $h(o);
        }
    return (
        np.inBatch--,
        (np.trackingDerivation = a),
        (function (e) {
            for (
                var t = e.observing_,
                    n = (e.observing_ = e.newObserving_),
                    r = Ih.UP_TO_DATE_,
                    i = 0,
                    a = e.unboundDepsCount_,
                    o = 0;
                o < a;
                o++
            ) {
                var u = n[o];
                (0 === u.diffValue_ && ((u.diffValue_ = 1), i !== o && (n[i] = u), i++),
                    u.dependenciesState_ > r && (r = u.dependenciesState_));
            }
            ((n.length = i), (e.newObserving_ = null), (a = t.length));
            for (; a--; ) {
                var l = t[a];
                (0 === l.diffValue_ && ip(l, e), (l.diffValue_ = 0));
            }
            for (; i--; ) {
                var s = n[i];
                1 === s.diffValue_ && ((s.diffValue_ = 0), rp(s, e));
            }
            r !== Ih.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        Jh(r),
        i
    );
}
function qh(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) ip(t[n], e);
    e.dependenciesState_ = Ih.NOT_TRACKING_;
}
function Gh(e) {
    var t = Qh();
    try {
        return e();
    } finally {
        Xh(t);
    }
}
function Qh() {
    var e = np.trackingDerivation;
    return ((np.trackingDerivation = null), e);
}
function Xh(e) {
    np.trackingDerivation = e;
}
function Yh(e) {
    var t = np.allowStateReads;
    return ((np.allowStateReads = e), t);
}
function Jh(e) {
    np.allowStateReads = e;
}
function Zh(e) {
    if (e.dependenciesState_ !== Ih.UP_TO_DATE_) {
        e.dependenciesState_ = Ih.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = Ih.UP_TO_DATE_;
    }
}
var ep = function () {
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
    tp = !0,
    np = (function () {
        var e = Hf();
        return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (tp = !1),
            e.__mobxGlobals && e.__mobxGlobals.version !== new ep().version && (tp = !1),
            tp
                ? e.__mobxGlobals
                    ? ((e.__mobxInstanceCount += 1),
                      e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                      e.__mobxGlobals)
                    : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new ep()))
                : (setTimeout(function () {
                      Kf(35);
                  }, 1),
                  new ep())
        );
    })();
function rp(e, t) {
    (e.observers_.add(t),
        e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_));
}
function ip(e, t) {
    (e.observers_.delete(t), 0 === e.observers_.size && ap(e));
}
function ap(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), np.pendingUnobservations.push(e));
}
function op() {
    np.inBatch++;
}
function up() {
    if (0 == --np.inBatch) {
        hp();
        for (var e = np.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            ((n.isPendingUnobservation_ = !1),
                0 === n.observers_.size &&
                    (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof Uh && n.suspend_()));
        }
        np.pendingUnobservations = [];
    }
}
function lp(e) {
    var t = np.trackingDerivation;
    return null !== t
        ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ && np.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
          e.isBeingObserved_)
        : (0 === e.observers_.size && np.inBatch > 0 && ap(e), !1);
}
function sp(e) {
    e.lowestObserverState_ !== Ih.STALE_ &&
        ((e.lowestObserverState_ = Ih.STALE_),
        e.observers_.forEach(function (e) {
            (e.dependenciesState_ === Ih.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = Ih.STALE_));
        }));
}
var cp = (function () {
        function e(e, t, n, r) {
            (void 0 === e && (e = 'Reaction'),
                (this.name_ = void 0),
                (this.onInvalidate_ = void 0),
                (this.errorHandler_ = void 0),
                (this.requiresObservable_ = void 0),
                (this.observing_ = []),
                (this.newObserving_ = []),
                (this.dependenciesState_ = Ih.NOT_TRACKING_),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.unboundDepsCount_ = 0),
                (this.isDisposed_ = !1),
                (this.isScheduled_ = !1),
                (this.isTrackPending_ = !1),
                (this.isRunning_ = !1),
                (this.isTracing_ = Mh.NONE),
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
                this.isScheduled_ || ((this.isScheduled_ = !0), np.pendingReactions.push(this), hp());
            }),
            (t.isScheduled = function () {
                return this.isScheduled_;
            }),
            (t.runReaction_ = function () {
                if (!this.isDisposed_) {
                    (op(), (this.isScheduled_ = !1));
                    var e = np.trackingContext;
                    if (((np.trackingContext = this), Wh(this))) {
                        this.isTrackPending_ = !0;
                        try {
                            this.onInvalidate_();
                        } catch (t) {
                            this.reportExceptionInDerivation_(t);
                        }
                    }
                    ((np.trackingContext = e), up());
                }
            }),
            (t.track = function (e) {
                if (!this.isDisposed_) {
                    (op(), (this.isRunning_ = !0));
                    var t = np.trackingContext;
                    np.trackingContext = this;
                    var n = Hh(this, e, void 0);
                    ((np.trackingContext = t),
                        (this.isRunning_ = !1),
                        (this.isTrackPending_ = !1),
                        this.isDisposed_ && qh(this),
                        Kh(n) && this.reportExceptionInDerivation_(n.cause),
                        up());
                }
            }),
            (t.reportExceptionInDerivation_ = function (e) {
                var t = this;
                if (this.errorHandler_) this.errorHandler_(e, this);
                else {
                    if (np.disableErrorBoundaries) throw e;
                    var n = "[mobx] uncaught error in '" + this + "'";
                    (np.suppressReactionErrors || console.error(n, e),
                        np.globalReactionErrorHandlers.forEach(function (n) {
                            return n(e, t);
                        }));
                }
            }),
            (t.dispose = function () {
                this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (op(), qh(this), up()));
            }),
            (t.getDisposer_ = function (e) {
                var t = this,
                    n = function n() {
                        (t.dispose(), null == e || null == e.removeEventListener || e.removeEventListener('abort', n));
                    };
                return (null == e || null == e.addEventListener || e.addEventListener('abort', n), (n[Nd] = this), n);
            }),
            (t.toString = function () {
                return 'Reaction[' + this.name_ + ']';
            }),
            (t.trace = function (e) {}),
            e
        );
    })(),
    fp = 100,
    dp = function (e) {
        return e();
    };
function hp() {
    np.inBatch > 0 || np.isRunningReactions || dp(pp);
}
function pp() {
    np.isRunningReactions = !0;
    for (var e = np.pendingReactions, t = 0; e.length > 0; ) {
        ++t === fp && (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
    }
    np.isRunningReactions = !1;
}
var vp = fd('Reaction', cp);
var gp = 'action',
    bp = 'autoAction',
    yp = '<unnamed action>',
    mp = Md(gp),
    _p = Md('action.bound', { bound: !0 }),
    wp = Md(bp, { autoAction: !0 }),
    Sp = Md('autoAction.bound', { autoAction: !0, bound: !0 });
function kp(e) {
    return function (t, n) {
        return id(t)
            ? Nh(t.name || yp, t, e)
            : id(n)
              ? Nh(t, n, e)
              : jd(n)
                ? (e ? wp : mp).decorate_20223_(t, n)
                : ad(n)
                  ? Cd(t, n, e ? wp : mp)
                  : ad(t)
                    ? Ad(Md(e ? bp : gp, { name: t, autoAction: e }))
                    : void 0;
    };
}
var Op = kp(!1);
Object.assign(Op, mp);
var xp = kp(!0);
function Ep(e) {
    return id(e) && !0 === e.isMobxAction;
}
(Object.assign(xp, wp), (Op.bound = Ad(_p)), (xp.bound = Ad(Sp)));
var Pp = function (e) {
    return e();
};
function Ap(e) {
    return e.scheduler
        ? e.scheduler
        : e.delay
          ? function (t) {
                return setTimeout(t, e.delay);
            }
          : Pp;
}
function Cp(e, t, n) {
    var r, i, a, o;
    void 0 === n && (n = Jf);
    var u,
        l,
        s,
        c,
        f = null != (r = n.name) ? r : 'Reaction',
        d = Op(
            f,
            n.onError
                ? ((u = n.onError),
                  (l = t),
                  function () {
                      try {
                          return l.apply(this, arguments);
                      } catch (e) {
                          u.call(this, e);
                      }
                  })
                : t,
        ),
        h = !n.scheduler && !n.delay,
        p = Ap(n),
        v = !0,
        g = !1,
        b = n.compareStructural ? Vd.structural : n.equals || Vd.default,
        y = new cp(
            f,
            function () {
                v || h ? m() : g || ((g = !0), p(m));
            },
            n.onError,
            n.requiresObservable,
        );
    function m() {
        if (((g = !1), !y.isDisposed_)) {
            var t = !1;
            (y.track(function () {
                var n = (function (e, t) {
                    var n = Lh(e);
                    try {
                        return t();
                    } finally {
                        Rh(n);
                    }
                })(!1, function () {
                    return e(y);
                });
                ((t = v || !b(s, n)), (c = s), (s = n));
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
var jp = 'onBO',
    Np = 'onBUO';
function Tp(e, t, n) {
    return Lp(Np, e, t, n);
}
function Lp(e, t, n, r) {
    var i = Wv(t),
        a = id(r) ? r : n,
        o = e + 'L';
    return (
        i[o] ? i[o].add(a) : (i[o] = new Set([a])),
        function () {
            var e = i[o];
            e && (e.delete(a), 0 === e.size && delete i[o]);
        }
    );
}
function Rp(e, t, n, r) {
    var i = yd(t);
    return (
        Gv(function () {
            var t = Cv(e, r)[Nd];
            vd(i).forEach(function (e) {
                t.extend_(e, i[e], !n || !(e in n) || n[e]);
            });
        }),
        e
    );
}
var Vp = 0;
function Dp() {
    this.message = 'FLOW_CANCELLED';
}
Dp.prototype = Object.create(Error.prototype);
var Ip = Kd('flow'),
    zp = Kd('flow.bound', { bound: !0 }),
    Mp = Object.assign(function (e, t) {
        if (jd(t)) return Ip.decorate_20223_(e, t);
        if (ad(t)) return Cd(e, t, Ip);
        var n = e,
            r = n.name || '<unnamed flow>',
            i = function () {
                var e,
                    t = arguments,
                    i = ++Vp,
                    a = Op(r + ' - runid: ' + i + ' - init', n).apply(this, t),
                    o = void 0,
                    u = new Promise(function (t, n) {
                        var u = 0;
                        function l(e) {
                            var t;
                            o = void 0;
                            try {
                                t = Op(r + ' - runid: ' + i + ' - yield ' + u++, a.next).call(a, e);
                            } catch (l) {
                                return n(l);
                            }
                            c(t);
                        }
                        function s(e) {
                            var t;
                            o = void 0;
                            try {
                                t = Op(r + ' - runid: ' + i + ' - yield ' + u++, a.throw).call(a, e);
                            } catch (l) {
                                return n(l);
                            }
                            c(t);
                        }
                        function c(e) {
                            if (!id(null == e ? void 0 : e.then))
                                return e.done ? t(e.value) : (o = Promise.resolve(e.value)).then(l, s);
                            e.then(c, n);
                        }
                        ((e = n), l(void 0));
                    });
                return (
                    (u.cancel = Op(r + ' - runid: ' + i + ' - cancel', function () {
                        try {
                            o && Bp(o);
                            var t = a.return(void 0),
                                n = Promise.resolve(t.value);
                            (n.then(rd, rd), Bp(n), e(new Dp()));
                        } catch (r) {
                            e(r);
                        }
                    })),
                    u
                );
            };
        return ((i.isMobXFlow = !0), i);
    }, Ip);
function Bp(e) {
    id(e.cancel) && e.cancel();
}
function Up(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function Fp(e, t) {
    if (void 0 === t) return Fh(e);
    if (!1 === Tv(e)) return !1;
    if (!e[Nd].values_.has(t)) return !1;
    var n = Wv(e, t);
    return Fh(n);
}
function $p(e, t) {
    return Fp(e, t);
}
function Kp(e) {
    return (function (e, t) {
        return !!e && (Tv(e) || !!e[Nd] || Ld(e) || vp(e) || Fh(e));
    })(e);
}
function Wp(e, t, n, r) {
    return id(n)
        ? (function (e, t, n, r) {
              return Hv(e, t).observe_(n, r);
          })(e, t, n, r)
        : (function (e, t, n) {
              return Hv(e).observe_(t, n);
          })(e, t, n);
}
function Hp(e, t) {
    (void 0 === t && (t = void 0), op());
    try {
        return e.apply(t);
    } finally {
        up();
    }
}
function qp(e) {
    return e[Nd];
}
Mp.bound = Ad(zp);
var Gp = {
    has: function (e, t) {
        return qp(e).has_(t);
    },
    get: function (e, t) {
        return qp(e).get_(t);
    },
    set: function (e, t, n) {
        var r;
        return !!ad(t) && (null == (r = qp(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
        var n;
        return !!ad(t) && (null == (n = qp(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
        var r;
        return null == (r = qp(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
        return qp(e).ownKeys_();
    },
    preventExtensions: function (e) {
        Kf(13);
    },
};
function Qp(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
}
function Xp(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
        n.push(t),
        nd(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function Yp(e, t) {
    var n = Qh();
    try {
        for (
            var r = [].concat(e.interceptors_ || []), i = 0, a = r.length;
            i < a && ((t = r[i](t)) && !t.type && Kf(14), t);
            i++
        );
        return t;
    } finally {
        Xh(n);
    }
}
function Jp(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
}
function Zp(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
        n.push(t),
        nd(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function ev(e, t) {
    var n = Qh(),
        r = e.changeListeners_;
    if (r) {
        for (var i = 0, a = (r = r.slice()).length; i < a; i++) r[i](t);
        Xh(n);
    }
}
function tv(e, t, n) {
    return (
        Gv(function () {
            var r = Cv(e, n)[Nd];
            (null != t ||
                (t = (function (e) {
                    return (bd(e, Pd) || sd(e, Pd, wd({}, e[Pd])), e[Pd]);
                })(e)),
                vd(t).forEach(function (e) {
                    return r.make_(e, t[e]);
                }));
        }),
        e
    );
}
var nv = 'splice',
    rv = 'update',
    iv = {
        get: function (e, t) {
            var n = e[Nd];
            return t === Nd
                ? n
                : 'length' === t
                  ? n.getArrayLength_()
                  : 'string' != typeof t || isNaN(t)
                    ? bd(uv, t)
                        ? uv[t]
                        : e[t]
                    : n.get_(parseInt(t));
        },
        set: function (e, t, n) {
            var r = e[Nd];
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
    av = (function () {
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
                (this.atom_ = new Td(e)),
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
                return Xp(this, e);
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
                    Zp(this, e)
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
                    this.legacyMode_ && t > 0 && $v(e + t + 1));
            }),
            (t.spliceWithArray_ = function (e, t, n) {
                var r = this;
                this.atom_;
                var i = this.values_.length;
                if (
                    (void 0 === e ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
                    (t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e))),
                    void 0 === n && (n = Yf),
                    Qp(this))
                ) {
                    var a = Yp(this, { object: this.proxy_, type: nv, index: e, removedCount: t, added: n });
                    if (!a) return Yf;
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
                var u = this.spliceItemsIntoValues_(e, t, n);
                return ((0 === t && 0 === n.length) || this.notifyArraySplice_(e, n, u), this.dehanceValues_(u));
            }),
            (t.spliceItemsIntoValues_ = function (e, t, n) {
                var r;
                if (n.length < 1e4) return (r = this.values_).splice.apply(r, [e, t].concat(n));
                var i = this.values_.slice(e, e + t),
                    a = this.values_.slice(e + t);
                this.values_.length += n.length - t;
                for (var o = 0; o < n.length; o++) this.values_[e + o] = n[o];
                for (var u = 0; u < a.length; u++) this.values_[e + n.length + u] = a[u];
                return i;
            }),
            (t.notifyArrayChildUpdate_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    i = Jp(this),
                    a =
                        i || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  type: rv,
                                  debugObjectName: this.atom_.name_,
                                  index: e,
                                  newValue: t,
                                  oldValue: n,
                              }
                            : null;
                (this.atom_.reportChanged(), i && ev(this, a));
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    i = Jp(this),
                    a =
                        i || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  debugObjectName: this.atom_.name_,
                                  type: nv,
                                  index: e,
                                  removed: n,
                                  added: t,
                                  removedCount: n.length,
                                  addedCount: t.length,
                              }
                            : null;
                (this.atom_.reportChanged(), i && ev(this, a));
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
                    if (Qp(this)) {
                        var i = Yp(this, { type: rv, object: this.proxy_, index: e, newValue: t });
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
function ov(e, t, n, r) {
    return (
        void 0 === n && (n = 'ObservableArray'),
        void 0 === r && (r = !1),
        td(),
        Gv(function () {
            var i = new av(n, t, r, !1);
            cd(i.values_, Nd, i);
            var a = new Proxy(i.values_, iv);
            return ((i.proxy_ = a), e && e.length && i.spliceWithArray_(0, 0, e), a);
        })
    );
}
var uv = {
    clear: function () {
        return this.splice(0);
    },
    replace: function (e) {
        var t = this[Nd];
        return t.spliceWithArray_(0, t.values_.length, e);
    },
    toJSON: function () {
        return this.slice();
    },
    splice: function (e, t) {
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
        var a = this[Nd];
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
        return this[Nd].spliceWithArray_(e, t, n);
    },
    push: function () {
        for (var e = this[Nd], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(e.values_.length, 0, n), e.values_.length);
    },
    pop: function () {
        return this.splice(Math.max(this[Nd].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        for (var e = this[Nd], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(0, 0, n), e.values_.length);
    },
    reverse: function () {
        return (np.trackingDerivation && Kf(37, 'reverse'), this.replace(this.slice().reverse()), this);
    },
    sort: function () {
        np.trackingDerivation && Kf(37, 'sort');
        var e = this.slice();
        return (e.sort.apply(e, arguments), this.replace(e), this);
    },
    remove: function (e) {
        var t = this[Nd],
            n = t.dehanceValues_(t.values_).indexOf(e);
        return n > -1 && (this.splice(n, 1), !0);
    },
};
function lv(e, t) {
    'function' == typeof Array.prototype[e] && (uv[e] = t(e));
}
function sv(e) {
    return function () {
        var t = this[Nd];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments);
    };
}
function cv(e) {
    return function (t, n) {
        var r = this,
            i = this[Nd];
        return (
            i.atom_.reportObserved(),
            i.dehanceValues_(i.values_)[e](function (e, i) {
                return t.call(n, e, i, r);
            })
        );
    };
}
function fv(e) {
    return function () {
        var t = this,
            n = this[Nd];
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
(lv('at', sv),
    lv('concat', sv),
    lv('flat', sv),
    lv('includes', sv),
    lv('indexOf', sv),
    lv('join', sv),
    lv('lastIndexOf', sv),
    lv('slice', sv),
    lv('toString', sv),
    lv('toLocaleString', sv),
    lv('toSorted', sv),
    lv('toSpliced', sv),
    lv('with', sv),
    lv('every', cv),
    lv('filter', cv),
    lv('find', cv),
    lv('findIndex', cv),
    lv('findLast', cv),
    lv('findLastIndex', cv),
    lv('flatMap', cv),
    lv('forEach', cv),
    lv('map', cv),
    lv('some', cv),
    lv('toReversed', cv),
    lv('reduce', fv),
    lv('reduceRight', fv));
var dv,
    hv,
    pv = fd('ObservableArrayAdministration', av);
function vv(e) {
    return od(e) && pv(e[Nd]);
}
var gv = {},
    bv = 'add',
    yv = 'delete';
((dv = Symbol.iterator), (hv = Symbol.toStringTag));
var mv,
    _v,
    wv = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Dd),
                void 0 === n && (n = 'ObservableMap'),
                (this.enhancer_ = void 0),
                (this.name_ = void 0),
                (this[Nd] = gv),
                (this.data_ = void 0),
                (this.hasMap_ = void 0),
                (this.keysAtom_ = void 0),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = t),
                (this.name_ = n),
                id(Map) || Kf(18),
                Gv(function () {
                    ((r.keysAtom_ = Rd('ObservableMap.keys()')),
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
                if (!np.trackingDerivation) return this.has_(e);
                var n = this.hasMap_.get(e);
                if (!n) {
                    var r = (n = new Dh(this.has_(e), Id, 'ObservableMap.key?', !1));
                    (this.hasMap_.set(e, r),
                        Tp(r, function () {
                            return t.hasMap_.delete(e);
                        }));
                }
                return n.get();
            }),
            (t.set = function (e, t) {
                var n = this.has_(e);
                if (Qp(this)) {
                    var r = Yp(this, { type: n ? rv : bv, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, Qp(this)) && !Yp(this, { type: yv, object: this, name: e })) return !1;
                if (this.has_(e)) {
                    var n = Jp(this),
                        r = n
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: yv,
                                  object: this,
                                  oldValue: this.data_.get(e).value_,
                                  name: e,
                              }
                            : null;
                    return (
                        Hp(function () {
                            var n;
                            (t.keysAtom_.reportChanged(),
                                null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                                t.data_.get(e).setNewValue_(void 0),
                                t.data_.delete(e));
                        }),
                        n && ev(this, r),
                        !0
                    );
                }
                return !1;
            }),
            (t.updateValue_ = function (e, t) {
                var n = this.data_.get(e);
                if ((t = n.prepareNewValue_(t)) !== np.UNCHANGED) {
                    var r = Jp(this),
                        i = r
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: rv,
                                  object: this,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), r && ev(this, i));
                }
            }),
            (t.addValue_ = function (e, t) {
                var n = this;
                (this.keysAtom_,
                    Hp(function () {
                        var r,
                            i = new Dh(t, n.enhancer_, 'ObservableMap.key', !1);
                        (n.data_.set(e, i),
                            (t = i.value_),
                            null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                            n.keysAtom_.reportChanged());
                    }));
                var r = Jp(this),
                    i = r
                        ? {
                              observableKind: 'map',
                              debugObjectName: this.name_,
                              type: bv,
                              object: this,
                              name: e,
                              newValue: t,
                          }
                        : null;
                r && ev(this, i);
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
                return Zv({
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
                return Zv({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            i = n.value;
                        return { done: r, value: r ? void 0 : [i, e.get(i)] };
                    },
                });
            }),
            (t[dv] = function () {
                return this.entries();
            }),
            (t.forEach = function (e, t) {
                for (var n, r = Ed(this); !(n = r()).done; ) {
                    var i = n.value,
                        a = i[0],
                        o = i[1];
                    e.call(t, o, a, this);
                }
            }),
            (t.merge = function (e) {
                var t = this;
                return (
                    Sv(e) && (e = new Map(e)),
                    Hp(function () {
                        ud(e)
                            ? (function (e) {
                                  var t = Object.keys(e);
                                  if (!pd) return t;
                                  var n = Object.getOwnPropertySymbols(e);
                                  return n.length
                                      ? [].concat(
                                            t,
                                            n.filter(function (t) {
                                                return Xf.propertyIsEnumerable.call(e, t);
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
                Hp(function () {
                    Gh(function () {
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
                    Hp(function () {
                        for (
                            var n,
                                r = (function (e) {
                                    if (dd(e) || Sv(e)) return e;
                                    if (Array.isArray(e)) return new Map(e);
                                    if (ud(e)) {
                                        var t = new Map();
                                        for (var n in e) t.set(n, e[n]);
                                        return t;
                                    }
                                    return Kf(21, e);
                                })(e),
                                i = new Map(),
                                a = !1,
                                o = Ed(t.data_.keys());
                            !(n = o()).done;
                        ) {
                            var u = n.value;
                            if (!r.has(u))
                                if (t.delete(u)) a = !0;
                                else {
                                    var l = t.data_.get(u);
                                    i.set(u, l);
                                }
                        }
                        for (var s, c = Ed(r.entries()); !(s = c()).done; ) {
                            var f = s.value,
                                d = f[0],
                                h = f[1],
                                p = t.data_.has(d);
                            if ((t.set(d, h), t.data_.has(d))) {
                                var v = t.data_.get(d);
                                (i.set(d, v), p || (a = !0));
                            }
                        }
                        if (!a)
                            if (t.data_.size !== i.size) t.keysAtom_.reportChanged();
                            else
                                for (var g = t.data_.keys(), b = i.keys(), y = g.next(), m = b.next(); !y.done; ) {
                                    if (y.value !== m.value) {
                                        t.keysAtom_.reportChanged();
                                        break;
                                    }
                                    ((y = g.next()), (m = b.next()));
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
                return Zp(this, e);
            }),
            (t.intercept_ = function (e) {
                return Xp(this, e);
            }),
            _d(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.keysAtom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: hv,
                    get: function () {
                        return 'Map';
                    },
                },
            ]),
            e
        );
    })(),
    Sv = fd('ObservableMap', wv);
var kv = {};
((mv = Symbol.iterator), (_v = Symbol.toStringTag));
var Ov = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Dd),
                void 0 === n && (n = 'ObservableSet'),
                (this.name_ = void 0),
                (this[Nd] = kv),
                (this.data_ = new Set()),
                (this.atom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = void 0),
                (this.name_ = n),
                id(Set) || Kf(22),
                (this.enhancer_ = function (e, r) {
                    return t(e, r, n);
                }),
                Gv(function () {
                    ((r.atom_ = Rd(r.name_)), e && r.replace(e));
                }));
        }
        var t = e.prototype;
        return (
            (t.dehanceValue_ = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
                var e = this;
                Hp(function () {
                    Gh(function () {
                        for (var t, n = Ed(e.data_.values()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.forEach = function (e, t) {
                for (var n, r = Ed(this); !(n = r()).done; ) {
                    var i = n.value;
                    e.call(t, i, i, this);
                }
            }),
            (t.add = function (e) {
                var t = this;
                if ((this.atom_, Qp(this)) && !Yp(this, { type: bv, object: this, newValue: e })) return this;
                if (!this.has(e)) {
                    Hp(function () {
                        (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
                    });
                    var n = Jp(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: bv,
                                  object: this,
                                  newValue: e,
                              }
                            : null;
                    n && ev(this, r);
                }
                return this;
            }),
            (t.delete = function (e) {
                var t = this;
                if (Qp(this) && !Yp(this, { type: yv, object: this, oldValue: e })) return !1;
                if (this.has(e)) {
                    var n = Jp(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: yv,
                                  object: this,
                                  oldValue: e,
                              }
                            : null;
                    return (
                        Hp(function () {
                            (t.atom_.reportChanged(), t.data_.delete(e));
                        }),
                        n && ev(this, r),
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
                return Zv({
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
                return Zv({
                    next: function () {
                        return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
                    },
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    xv(e) && (e = new Set(e)),
                    Hp(function () {
                        Array.isArray(e) || hd(e)
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
                return Zp(this, e);
            }),
            (t.intercept_ = function (e) {
                return Xp(this, e);
            }),
            (t.toJSON = function () {
                return Array.from(this);
            }),
            (t.toString = function () {
                return '[object ObservableSet]';
            }),
            (t[mv] = function () {
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
                    key: _v,
                    get: function () {
                        return 'Set';
                    },
                },
            ]),
            e
        );
    })(),
    xv = fd('ObservableSet', Ov),
    Ev = Object.create(null),
    Pv = 'remove',
    Av = (function () {
        function e(e, t, n, r) {
            (void 0 === t && (t = new Map()),
                void 0 === r && (r = ih),
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
                (this.keysAtom_ = new Td('ObservableObject.keys')),
                (this.isPlainObject_ = ud(this.target_)));
        }
        var t = e.prototype;
        return (
            (t.getObservablePropValue_ = function (e) {
                return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
                var n = this.values_.get(e);
                if (n instanceof Uh) return (n.set(t), !0);
                if (Qp(this)) {
                    var r = Yp(this, { type: rv, object: this.proxy_ || this.target_, name: e, newValue: t });
                    if (!r) return null;
                    t = r.newValue;
                }
                if ((t = n.prepareNewValue_(t)) !== np.UNCHANGED) {
                    var i = Jp(this),
                        a = i
                            ? {
                                  type: rv,
                                  observableKind: 'object',
                                  debugObjectName: this.name_,
                                  object: this.proxy_ || this.target_,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), i && ev(this, a));
                }
                return !0;
            }),
            (t.get_ = function (e) {
                return (np.trackingDerivation && !bd(this.target_, e) && this.has_(e), this.target_[e]);
            }),
            (t.set_ = function (e, t, n) {
                return (
                    void 0 === n && (n = !1),
                    bd(this.target_, e)
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
                if (!np.trackingDerivation) return e in this.target_;
                this.pendingKeys_ || (this.pendingKeys_ = new Map());
                var t = this.pendingKeys_.get(e);
                return (
                    t ||
                        ((t = new Dh(e in this.target_, Id, 'ObservableObject.key?', !1)), this.pendingKeys_.set(e, t)),
                    t.get()
                );
            }),
            (t.make_ = function (e, t) {
                if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                    if (!(e in this.target_)) {
                        var n;
                        if (null != (n = this.target_[Pd]) && n[e]) return;
                        Kf(1, t.annotationType_, this.name_ + '.' + e.toString());
                    }
                    for (var r = this.target_; r && r !== Xf; ) {
                        var i = Gf(r, e);
                        if (i) {
                            var a = t.make_(this, e, i, r);
                            if (0 === a) return;
                            if (1 === a) break;
                        }
                        r = Object.getPrototypeOf(r);
                    }
                    Lv(this, t, e);
                }
            }),
            (t.extend_ = function (e, t, n, r) {
                if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                    return this.defineProperty_(e, t, r);
                var i = n.extend_(this, e, t, r);
                return (i && Lv(this, n, e), i);
            }),
            (t.defineProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    op();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (Qp(this)) {
                        var i = Yp(this, { object: this.proxy_ || this.target_, name: e, type: bv, newValue: t.value });
                        if (!i) return null;
                        var a = i.newValue;
                        t.value !== a && (t = wd({}, t, { value: a }));
                    }
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                    } else Qf(this.target_, e, t);
                    this.notifyPropertyAddition_(e, t.value);
                } finally {
                    up();
                }
                return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
                (void 0 === r && (r = !1), this.keysAtom_);
                try {
                    op();
                    var i = this.delete_(e);
                    if (!i) return i;
                    if (Qp(this)) {
                        var a = Yp(this, { object: this.proxy_ || this.target_, name: e, type: bv, newValue: t });
                        if (!a) return null;
                        t = a.newValue;
                    }
                    var o = Nv(e),
                        u = {
                            configurable: !np.safeDescriptors || this.isPlainObject_,
                            enumerable: !0,
                            get: o.get,
                            set: o.set,
                        };
                    if (r) {
                        if (!Reflect.defineProperty(this.target_, e, u)) return !1;
                    } else Qf(this.target_, e, u);
                    var l = new Dh(t, n, 'ObservableObject.key', !1);
                    (this.values_.set(e, l), this.notifyPropertyAddition_(e, l.value_));
                } finally {
                    up();
                }
                return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    op();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (Qp(this))
                        if (!Yp(this, { object: this.proxy_ || this.target_, name: e, type: bv, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var i = Nv(e),
                        a = {
                            configurable: !np.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: i.get,
                            set: i.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, a)) return !1;
                    } else Qf(this.target_, e, a);
                    (this.values_.set(e, new Uh(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    up();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !bd(this.target_, e))) return !0;
                if (Qp(this) && !Yp(this, { object: this.proxy_ || this.target_, name: e, type: Pv })) return null;
                try {
                    var n, r;
                    op();
                    var i,
                        a = Jp(this),
                        o = this.values_.get(e),
                        u = void 0;
                    if (!o && a) u = null == (i = Gf(this.target_, e)) ? void 0 : i.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (o && (this.values_.delete(e), o instanceof Dh && (u = o.value_), sp(o)),
                        this.keysAtom_.reportChanged(),
                        null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
                        a)
                    ) {
                        var l = {
                            type: Pv,
                            observableKind: 'object',
                            object: this.proxy_ || this.target_,
                            debugObjectName: this.name_,
                            oldValue: u,
                            name: e,
                        };
                        (0, a && ev(this, l));
                    }
                } finally {
                    up();
                }
                return !0;
            }),
            (t.observe_ = function (e, t) {
                return Zp(this, e);
            }),
            (t.intercept_ = function (e) {
                return Xp(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
                var n,
                    r,
                    i = Jp(this);
                if (i) {
                    var a = i
                        ? {
                              type: bv,
                              observableKind: 'object',
                              debugObjectName: this.name_,
                              object: this.proxy_ || this.target_,
                              name: e,
                              newValue: t,
                          }
                        : null;
                    i && ev(this, a);
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
function Cv(e, t) {
    var n;
    if (bd(e, Nd)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
        i = new Av(
            e,
            new Map(),
            String(r),
            (function (e) {
                var t;
                return e ? (null != (t = e.defaultDecorator) ? t : ah(e)) : void 0;
            })(t),
        );
    return (sd(e, Nd, i), e);
}
var jv = fd('ObservableObjectAdministration', Av);
function Nv(e) {
    return (
        Ev[e] ||
        (Ev[e] = {
            get: function () {
                return this[Nd].getObservablePropValue_(e);
            },
            set: function (t) {
                return this[Nd].setObservablePropValue_(e, t);
            },
        })
    );
}
function Tv(e) {
    return !!od(e) && jv(e[Nd]);
}
function Lv(e, t, n) {
    var r;
    null == (r = e.target_[Pd]) || delete r[n];
}
var Rv,
    Vv,
    Dv = Uv(0),
    Iv = (function () {
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
    zv = 0,
    Mv = function () {};
((Rv = Mv),
    (Vv = Array.prototype),
    Object.setPrototypeOf
        ? Object.setPrototypeOf(Rv.prototype, Vv)
        : void 0 !== Rv.prototype.__proto__
          ? (Rv.prototype.__proto__ = Vv)
          : (Rv.prototype = Vv));
var Bv = (function (e, t, n) {
    function r(t, n, r, i) {
        var a;
        return (
            void 0 === r && (r = 'ObservableArray'),
            void 0 === i && (i = !1),
            (a = e.call(this) || this),
            Gv(function () {
                var e = new av(r, n, i, !0);
                ((e.proxy_ = Od(a)),
                    cd(Od(a), Nd, e),
                    t && t.length && a.spliceWithArray(0, 0, t),
                    Iv && Object.defineProperty(Od(a), '0', Dv));
            }),
            a
        );
    }
    Sd(r, e);
    var i = r.prototype;
    return (
        (i.concat = function () {
            this[Nd].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return Array.prototype.concat.apply(
                this.slice(),
                t.map(function (e) {
                    return vv(e) ? e.slice() : e;
                }),
            );
        }),
        (i[n] = function () {
            var e = this,
                t = 0;
            return Zv({
                next: function () {
                    return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
                },
            });
        }),
        _d(r, [
            {
                key: 'length',
                get: function () {
                    return this[Nd].getArrayLength_();
                },
                set: function (e) {
                    this[Nd].setArrayLength_(e);
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
})(Mv, Symbol.toStringTag, Symbol.iterator);
function Uv(e) {
    return {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this[Nd].get_(e);
        },
        set: function (t) {
            this[Nd].set_(e, t);
        },
    };
}
function Fv(e) {
    Qf(Bv.prototype, '' + e, Uv(e));
}
function $v(e) {
    if (e > zv) {
        for (var t = zv; t < e + 100; t++) Fv(t);
        zv = e;
    }
}
function Kv(e, t, n) {
    return new Bv(e, t, n);
}
function Wv(e, t) {
    if ('object' == typeof e && null !== e) {
        if (vv(e)) return (void 0 !== t && Kf(23), e[Nd].atom_);
        if (xv(e)) return e.atom_;
        if (Sv(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return (n || Kf(25, t, qv(e)), n);
        }
        if (Tv(e)) {
            if (!t) return Kf(26);
            var r = e[Nd].values_.get(t);
            return (r || Kf(27, t, qv(e)), r);
        }
        if (Ld(e) || Fh(e) || vp(e)) return e;
    } else if (id(e) && vp(e[Nd])) return e[Nd];
    Kf(28);
}
function Hv(e, t) {
    return (
        e || Kf(29),
        void 0 !== t ? Hv(Wv(e, t)) : Ld(e) || Fh(e) || vp(e) || Sv(e) || xv(e) ? e : e[Nd] ? e[Nd] : void Kf(24, e)
    );
}
function qv(e, t) {
    var n;
    if (void 0 !== t) n = Wv(e, t);
    else {
        if (Ep(e)) return e.name;
        n = Tv(e) || Sv(e) || xv(e) ? Hv(e) : Wv(e);
    }
    return n.name_;
}
function Gv(e) {
    var t = Qh(),
        n = Lh(!0);
    op();
    try {
        return e();
    } finally {
        (up(), Rh(n), Xh(t));
    }
}
(Object.entries(uv).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && sd(Bv.prototype, t, n);
}),
    $v(1e3));
var Qv = Xf.toString;
function Xv(e, t, n) {
    return (void 0 === n && (n = -1), Yv(e, t, n));
}
function Yv(e, t, n, r, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var a = typeof e;
    if ('function' !== a && 'object' !== a && 'object' != typeof t) return !1;
    var o = Qv.call(e);
    if (o !== Qv.call(t)) return !1;
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
    ((e = Jv(e)), (t = Jv(t)));
    var u = '[object Array]' === o;
    if (!u) {
        if ('object' != typeof e || 'object' != typeof t) return !1;
        var l = e.constructor,
            s = t.constructor;
        if (
            l !== s &&
            !(id(l) && l instanceof l && id(s) && s instanceof s) &&
            'constructor' in e &&
            'constructor' in t
        )
            return !1;
    }
    if (0 === n) return !1;
    (n < 0 && (n = -1), (i = i || []));
    for (var c = (r = r || []).length; c--; ) if (r[c] === e) return i[c] === t;
    if ((r.push(e), i.push(t), u)) {
        if ((c = e.length) !== t.length) return !1;
        for (; c--; ) if (!Yv(e[c], t[c], n - 1, r, i)) return !1;
    } else {
        var f,
            d = Object.keys(e);
        if (((c = d.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (!bd(t, (f = d[c])) || !Yv(e[f], t[f], n - 1, r, i)) return !1;
    }
    return (r.pop(), i.pop(), !0);
}
function Jv(e) {
    return vv(e) ? e.slice() : dd(e) || Sv(e) || hd(e) || xv(e) ? Array.from(e.entries()) : e;
}
function Zv(e) {
    return ((e[Symbol.iterator] = eg), e);
}
function eg() {
    return this;
}
(['Symbol', 'Map', 'Set'].forEach(function (e) {
    void 0 === Hf()[e] && Kf("MobX requires global '" + e + "' to be available or polyfilled");
}),
    'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
                return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
            },
            extras: { getDebugName: qv },
            $mobx: Nd,
        }));
var tg = bg(),
    ng = (e) => hg(e, tg),
    rg = bg();
ng.write = (e) => hg(e, rg);
var ig = bg();
ng.onStart = (e) => hg(e, ig);
var ag = bg();
ng.onFrame = (e) => hg(e, ag);
var og = bg();
ng.onFinish = (e) => hg(e, og);
var ug = [];
ng.setTimeout = (e, t) => {
    const n = ng.now() + t,
        r = () => {
            const e = ug.findIndex((e) => e.cancel == r);
            (~e && ug.splice(e, 1), (fg -= ~e ? 1 : 0));
        },
        i = { time: n, handler: e, cancel: r };
    return (ug.splice(lg(n), 0, i), (fg += 1), pg(), i);
};
var lg = (e) => ~(~ug.findIndex((t) => t.time > e) || ~ug.length);
((ng.cancel = (e) => {
    (ig.delete(e), ag.delete(e), og.delete(e), tg.delete(e), rg.delete(e));
}),
    (ng.sync = (e) => {
        ((dg = !0), ng.batchedUpdates(e), (dg = !1));
    }),
    (ng.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            ((t = e), ng.onStart(n));
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                (ig.delete(n), (t = null));
            }),
            r
        );
    }));
var sg = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
((ng.use = (e) => (sg = e)),
    (ng.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (ng.batchedUpdates = (e) => e()),
    (ng.catch = console.error),
    (ng.frameLoop = 'always'),
    (ng.advance = () => {
        'demand' !== ng.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : gg();
    }));
var cg = -1,
    fg = 0,
    dg = !1;
function hg(e, t) {
    dg ? (t.delete(e), e(0)) : (t.add(e), pg());
}
function pg() {
    cg < 0 && ((cg = 0), 'demand' !== ng.frameLoop && sg(vg));
}
function vg() {
    ~cg && (sg(vg), ng.batchedUpdates(gg));
}
function gg() {
    const e = cg;
    cg = ng.now();
    const t = lg(cg);
    (t && (yg(ug.splice(0, t), (e) => e.handler()), (fg -= t)),
        fg ? (ig.flush(), tg.flush(e ? Math.min(64, cg - e) : 16.667), ag.flush(), rg.flush(), og.flush()) : (cg = -1));
}
function bg() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            ((fg += t != e || e.has(n) ? 0 : 1), e.add(n));
        },
        delete: (n) => ((fg -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (fg -= t.size), yg(t, (t) => t(n) && e.add(t)), (fg += e.size), (t = e));
        },
    };
}
function yg(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            ng.catch(n);
        }
    });
}
var mg = Object.defineProperty,
    _g = {};
((e, t) => {
    for (var n in t) mg(e, n, { get: t[n], enumerable: !0 });
})(_g, {
    assign: () => Ng,
    colors: () => Ag,
    createStringInterpolator: () => Og,
    skipAnimation: () => Cg,
    to: () => xg,
    willAdvance: () => jg,
});
var wg = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
var Sg = (e, t) => e.forEach(t);
function kg(e, t, n) {
    if (wg.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Og,
    xg,
    Eg = (e) => (wg.und(e) ? [] : wg.arr(e) ? e : [e]),
    Pg = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    Ag = null,
    Cg = !1,
    jg = function () {},
    Ng = (e) => {
        (e.to && (xg = e.to),
            e.now && (ng.now = e.now),
            void 0 !== e.colors && (Ag = e.colors),
            null != e.skipAnimation && (Cg = e.skipAnimation),
            e.createStringInterpolator && (Og = e.createStringInterpolator),
            e.requestAnimationFrame && ng.use(e.requestAnimationFrame),
            e.batchedUpdates && (ng.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (jg = e.willAdvance),
            e.frameLoop && (ng.frameLoop = e.frameLoop));
    },
    Tg = new Set(),
    Lg = [],
    Rg = [],
    Vg = 0,
    Dg = {
        get idle() {
            return !Tg.size && !Lg.length;
        },
        start(e) {
            Vg > e.priority ? (Tg.add(e), ng.onStart(Ig)) : (zg(e), ng(Bg));
        },
        advance: Bg,
        sort(e) {
            if (Vg) ng.onFrame(() => Dg.sort(e));
            else {
                const t = Lg.indexOf(e);
                ~t && (Lg.splice(t, 1), Mg(e));
            }
        },
        clear() {
            ((Lg = []), Tg.clear());
        },
    };
function Ig() {
    (Tg.forEach(zg), Tg.clear(), ng(Bg));
}
function zg(e) {
    Lg.includes(e) || Mg(e);
}
function Mg(e) {
    Lg.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(Lg, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function Bg(e) {
    const t = Rg;
    for (let n = 0; n < Lg.length; n++) {
        const r = Lg[n];
        ((Vg = r.priority), r.idle || (jg(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((Vg = 0), ((Rg = Lg).length = 0), (Lg = t).length > 0);
}
var Ug = '[-+]?\\d*\\.?\\d+',
    Fg = Ug + '%';
function $g(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var Kg = new RegExp('rgb' + $g(Ug, Ug, Ug)),
    Wg = new RegExp('rgba' + $g(Ug, Ug, Ug, Ug)),
    Hg = new RegExp('hsl' + $g(Ug, Fg, Fg)),
    qg = new RegExp('hsla' + $g(Ug, Fg, Fg, Ug)),
    Gg = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    Qg = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    Xg = /^#([0-9a-fA-F]{6})$/,
    Yg = /^#([0-9a-fA-F]{8})$/;
function Jg(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function Zg(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        i = 2 * n - r,
        a = Jg(i, r, e + 1 / 3),
        o = Jg(i, r, e),
        u = Jg(i, r, e - 1 / 3);
    return (Math.round(255 * a) << 24) | (Math.round(255 * o) << 16) | (Math.round(255 * u) << 8);
}
function eb(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function tb(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function nb(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function rb(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function ib(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = Xg.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : Ag && void 0 !== Ag[e]
                ? Ag[e]
                : (t = Kg.exec(e))
                  ? ((eb(t[1]) << 24) | (eb(t[2]) << 16) | (eb(t[3]) << 8) | 255) >>> 0
                  : (t = Wg.exec(e))
                    ? ((eb(t[1]) << 24) | (eb(t[2]) << 16) | (eb(t[3]) << 8) | nb(t[4])) >>> 0
                    : (t = Gg.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = Yg.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = Qg.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = Hg.exec(e))
                            ? (255 | Zg(tb(t[1]), rb(t[2]), rb(t[3]))) >>> 0
                            : (t = qg.exec(e))
                              ? (Zg(tb(t[1]), rb(t[2]), rb(t[3])) | nb(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var ab = (e, t, n) => {
    if (wg.fun(e)) return e;
    if (wg.arr(e)) return ab({ range: e, output: t, extrapolate: n });
    if (wg.str(e.output[0])) return Og(e);
    const r = e,
        i = r.output,
        a = r.range || [0, 1],
        o = r.extrapolateLeft || r.extrapolate || 'extend',
        u = r.extrapolateRight || r.extrapolate || 'extend',
        l = r.easing || ((e) => e);
    return (e) => {
        const t = (function (e, t) {
            for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
            return n - 1;
        })(e, a);
        return (function (e, t, n, r, i, a, o, u, l) {
            let s = l ? l(e) : e;
            if (s < t) {
                if ('identity' === o) return s;
                'clamp' === o && (s = t);
            }
            if (s > n) {
                if ('identity' === u) return s;
                'clamp' === u && (s = n);
            }
            if (r === i) return r;
            if (t === n) return e <= t ? r : i;
            t === -1 / 0 ? (s = -s) : n === 1 / 0 ? (s -= t) : (s = (s - t) / (n - t));
            ((s = a(s)), r === -1 / 0 ? (s = -s) : i === 1 / 0 ? (s += r) : (s = s * (i - r) + r));
            return s;
        })(e, a[t], a[t + 1], i[t], i[t + 1], l, o, u, r.map);
    };
};
var ob = Symbol.for('FluidValue.get'),
    ub = Symbol.for('FluidValue.observers'),
    lb = (e) => Boolean(e && e[ob]),
    sb = (e) => (e && e[ob] ? e[ob]() : e);
function cb(e, t) {
    const n = e[ub];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
var fb = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            db(this, e);
        }
    },
    db = (e, t) => gb(e, ob, t);
function hb(e, t) {
    if (e[ob]) {
        let n = e[ub];
        (n || gb(e, ub, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function pb(e, t) {
    const n = e[ub];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[ub] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
var vb,
    gb = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    bb = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    yb = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    mb = new RegExp(`(${bb.source})(%|[a-z]+)`, 'i'),
    _b = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    wb = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    Sb = (e) => {
        const [t, n] = kb(e);
        if (!t || Pg()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && wb.test(n) ? Sb(n) : n || e;
    },
    kb = (e) => {
        const t = wb.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    Ob = (e, t, n, r, i) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
    xb = (e) => {
        vb || (vb = Ag ? new RegExp(`(${Object.keys(Ag).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => sb(e).replace(wb, Sb).replace(yb, ib).replace(vb, ib)),
            n = t.map((e) => e.match(bb).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => ab({ ...e, output: t }));
        return (e) => {
            var n;
            const i = !mb.test(t[0]) && (null == (n = t.find((e) => mb.test(e))) ? void 0 : n.replace(bb, ''));
            let a = 0;
            return t[0].replace(bb, () => `${r[a++](e)}${i || ''}`).replace(_b, Ob);
        };
    },
    Eb = 'react-spring: ',
    Pb = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${Eb}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    Ab = Pb(console.warn);
function Cb(e) {
    return wg.str(e) && ('#' == e[0] || /\d/.test(e) || (!Pg() && wb.test(e)) || e in (Ag || {}));
}
Pb(console.warn);
var jb = Pg() ? M.useEffect : M.useLayoutEffect;
function Nb() {
    const e = M.useState()[1],
        t = (() => {
            const e = M.useRef(!1);
            return (
                jb(
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
var Tb = [],
    Lb = Symbol.for('Animated:node'),
    Rb = (e) => e && e[Lb],
    Vb = (e, t) => {
        return ((n = e), (r = Lb), (i = t), Object.defineProperty(n, r, { value: i, writable: !0, configurable: !0 }));
        var n, r, i;
    },
    Db = (e) => e && e[Lb] && e[Lb].getPayload(),
    Ib = class {
        constructor() {
            Vb(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    zb = class extends Ib {
        constructor(e) {
            (super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                wg.num(this._value) && (this.lastPosition = this._value));
        }
        static create(e) {
            return new zb(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                wg.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            ((this.done = !1),
                wg.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null)));
        }
    },
    Mb = class extends zb {
        constructor(e) {
            (super(0), (this._string = null), (this._toString = ab({ output: [e, e] })));
        }
        static create(e) {
            return new Mb(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (wg.str(e)) {
                if (e == this._string) return !1;
                ((this._string = e), (this._value = 1));
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null;
            }
            return !0;
        }
        reset(e) {
            (e && (this._toString = ab({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
        }
    },
    Bb = { dependencies: null },
    Ub = class extends Ib {
        constructor(e) {
            (super(), (this.source = e), this.setValue(e));
        }
        getValue(e) {
            const t = {};
            return (
                kg(this.source, (n, r) => {
                    var i;
                    (i = n) && i[Lb] === i ? (t[r] = n.getValue(e)) : lb(n) ? (t[r] = sb(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            ((this.source = e), (this.payload = this._makePayload(e)));
        }
        reset() {
            this.payload && Sg(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return (kg(e, this._addToPayload, t), Array.from(t));
            }
        }
        _addToPayload(e) {
            Bb.dependencies && lb(e) && Bb.dependencies.add(e);
            const t = Db(e);
            t && Sg(t, (e) => this.add(e));
        }
    },
    Fb = class extends Ub {
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
                : (super.setValue(e.map($b)), !0);
        }
    };
function $b(e) {
    return (Cb(e) ? Mb : zb).create(e);
}
var Kb = (e, t) => {
        const n = !wg.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return M.forwardRef((r, i) => {
            const a = M.useRef(null),
                o =
                    n &&
                    M.useCallback(
                        (e) => {
                            a.current = (function (e, t) {
                                e && (wg.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(i, e);
                        },
                        [i],
                    ),
                [u, l] = (function (e, t) {
                    const n = new Set();
                    ((Bb.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                    return ((e = new Ub(e)), (Bb.dependencies = null), [e, n]);
                })(r, t),
                s = Nb(),
                c = () => {
                    const e = a.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, u.getValue(!0))) && s();
                },
                f = new Wb(c, l),
                d = M.useRef();
            var h;
            (jb(
                () => (
                    (d.current = f),
                    Sg(l, (e) => hb(e, f)),
                    () => {
                        d.current && (Sg(d.current.deps, (e) => pb(e, d.current)), ng.cancel(d.current.update));
                    }
                ),
            ),
                M.useEffect(c, []),
                (h = () => () => {
                    const e = d.current;
                    Sg(e.deps, (t) => pb(t, e));
                }),
                M.useEffect(h, Tb));
            const p = t.getComponentProps(u.getValue());
            return M.createElement(e, { ...p, ref: o });
        });
    },
    Wb = class {
        constructor(e, t) {
            ((this.update = e), (this.deps = t));
        }
        eventObserved(e) {
            'change' == e.type && ng.write(this.update);
        }
    };
var Hb,
    qb,
    Gb = Symbol.for('AnimatedComponent'),
    Qb = (e) => (wg.str(e) ? e : e && wg.str(e.displayName) ? e.displayName : (wg.fun(e) && e.name) || null),
    Xb = (e) => e instanceof Jb,
    Yb = 1,
    Jb = class extends fb {
        constructor() {
            (super(...arguments), (this.id = Yb++), (this._priority = 0));
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = Rb(this);
            return e && e.getValue();
        }
        to(...e) {
            return _g.to(this, e);
        }
        interpolate(...e) {
            return (Ab(`${Eb}The "interpolate" function is deprecated in v9 (use "to" instead)`), _g.to(this, e));
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
            cb(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            (this.idle || Dg.sort(this), cb(this, { type: 'priority', parent: this, priority: e }));
        }
    },
    Zb = ({ children: e, ...t }) => {
        const n = M.useContext(ey),
            r = t.pause || !!n.pause,
            i = t.immediate || !!n.immediate;
        t = (function (e, t) {
            const [n] = M.useState(() => ({ inputs: t, result: e() })),
                r = M.useRef(),
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
                M.useEffect(() => {
                    ((r.current = a), i == n && (n.inputs = n.result = void 0));
                }, [a]),
                a.result
            );
        })(() => ({ pause: r, immediate: i }), [r, i]);
        const { Provider: a } = ey;
        return M.createElement(a, { value: t }, e);
    },
    ey =
        ((Hb = Zb),
        (qb = {}),
        Object.assign(Hb, M.createContext(qb)),
        (Hb.Provider._context = Hb),
        (Hb.Consumer._context = Hb),
        Hb);
((Zb.Provider = ey.Provider), (Zb.Consumer = ey.Consumer));
var ty = class extends Jb {
    constructor(e, t) {
        (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = ab(...t)));
        const n = this._get(),
            r = (function (e) {
                const t = Rb(e);
                return t ? t.constructor : wg.arr(e) ? Fb : Cb(e) ? Mb : zb;
            })(n);
        Vb(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        ((function (e, t) {
            if (wg.arr(e)) {
                if (!wg.arr(t) || e.length !== t.length) return !1;
                for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                return !0;
            }
            return e === t;
        })(t, this.get()) || (Rb(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && ry(this._active) && iy(this));
    }
    _get() {
        const e = wg.arr(this.source) ? this.source.map(sb) : Eg(sb(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !ry(this._active) &&
            ((this.idle = !1),
            Sg(Db(this), (e) => {
                e.done = !1;
            }),
            _g.skipAnimation ? (ng.batchedUpdates(() => this.advance()), iy(this)) : Dg.start(this));
    }
    _attach() {
        let e = 1;
        (Sg(Eg(this.source), (t) => {
            (lb(t) && hb(t, this), Xb(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (Sg(Eg(this.source), (e) => {
            lb(e) && pb(e, this);
        }),
            this._active.clear(),
            iy(this));
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = Eg(this.source).reduce((e, t) => Math.max(e, (Xb(t) ? t.priority : 0) + 1), 0));
    }
};
function ny(e) {
    return !1 !== e.idle;
}
function ry(e) {
    return !e.size || Array.from(e).every(ny);
}
function iy(e) {
    e.idle ||
        ((e.idle = !0),
        Sg(Db(e), (e) => {
            e.done = !0;
        }),
        cb(e, { type: 'idle', parent: e }));
}
_g.assign({ createStringInterpolator: xb, to: (e, t) => new ty(e, t) });
var ay = /^--/;
function oy(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || ay.test(e) || (ly.hasOwnProperty(e) && ly[e])
          ? ('' + t).trim()
          : t + 'px';
}
var uy = {};
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
    sy = ['Webkit', 'Ms', 'Moz', 'O'];
ly = Object.keys(ly).reduce(
    (e, t) => (sy.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    ly,
);
var cy = /^(matrix|translate|scale|rotate|skew)/,
    fy = /^(translate)/,
    dy = /^(rotate|skew)/,
    hy = (e, t) => (wg.num(e) && 0 !== e ? e + t : e),
    py = (e, t) => (wg.arr(e) ? e.every((e) => py(e, t)) : wg.num(e) ? e === t : parseFloat(e) === t),
    vy = class extends Ub {
        constructor({ x: e, y: t, z: n, ...r }) {
            const i = [],
                a = [];
            ((e || t || n) &&
                (i.push([e || 0, t || 0, n || 0]),
                a.push((e) => [`translate3d(${e.map((e) => hy(e, 'px')).join(',')})`, py(e, 0)])),
                kg(r, (e, t) => {
                    if ('transform' === t) (i.push([e || '']), a.push((e) => [e, '' === e]));
                    else if (cy.test(t)) {
                        if ((delete r[t], wg.und(e))) return;
                        const n = fy.test(t) ? 'px' : dy.test(t) ? 'deg' : '';
                        (i.push(Eg(e)),
                            a.push(
                                'rotate3d' === t
                                    ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${hy(i, n)})`, py(i, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => hy(e, n)).join(',')})`,
                                          py(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                i.length && (r.transform = new gy(i, a)),
                super(r));
        }
    },
    gy = class extends fb {
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
                Sg(this.inputs, (n, r) => {
                    const i = sb(n[0]),
                        [a, o] = this.transforms[r](wg.arr(i) ? i : n.map(sb));
                    ((e += ' ' + a), (t = t && o));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && Sg(this.inputs, (e) => Sg(e, (e) => lb(e) && hb(e, this)));
        }
        observerRemoved(e) {
            0 == e && Sg(this.inputs, (e) => Sg(e, (e) => lb(e) && pb(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), cb(this, e));
        }
    };
function by(e, t) {
    (void 0 === t && (t = 'Illegal state'),
        e ||
            (function (e) {
                throw new Error('[mobx-utils] ' + e);
            })(t));
}
(_g.assign({
    batchedUpdates: Mf.unstable_batchedUpdates,
    createStringInterpolator: xb,
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
            createAnimatedStyle: n = (e) => new Ub(e),
            getComponentProps: r = (e) => e,
        } = {},
    ) => {
        const i = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
            a = (e) => {
                const t = Qb(e) || 'Anonymous';
                return (
                    ((e = wg.str(e) ? a[e] || (a[e] = Kb(e, i)) : e[Gb] || (e[Gb] = Kb(e, i))).displayName =
                        `Animated(${t})`),
                    e
                );
            };
        kg(e, (t, n) => {
            (wg.arr(e) && (n = Qb(t)), (a[n] = a(t)));
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
                    { style: r, children: i, scrollTop: a, scrollLeft: o, viewBox: u, ...l } = t,
                    s = Object.values(l),
                    c = Object.keys(l).map((t) =>
                        n || e.hasAttribute(t)
                            ? t
                            : uy[t] || (uy[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                    );
                void 0 !== i && (e.textContent = i);
                for (const f in r)
                    if (r.hasOwnProperty(f)) {
                        const t = oy(f, r[f]);
                        ay.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                    }
                (c.forEach((t, n) => {
                    e.setAttribute(t, s[n]);
                }),
                    void 0 !== a && (e.scrollTop = a),
                    void 0 !== o && (e.scrollLeft = o),
                    void 0 !== u && e.setAttribute('viewBox', u));
            },
            createAnimatedStyle: (e) => new vy(e),
            getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
        },
    ));
var yy,
    my = function (e) {
        return e && e !== Object.prototype && Object.getOwnPropertyNames(e).concat(my(Object.getPrototypeOf(e)) || []);
    },
    _y = function (e) {
        return (function (e) {
            var t = my(e);
            return t.filter(function (e, n) {
                return t.indexOf(e) === n;
            });
        })(e).filter(function (e) {
            return 'constructor' !== e && !~e.indexOf('__');
        });
    },
    wy = 'pending',
    Sy = 'fulfilled',
    ky = 'rejected';
function Oy(e) {
    switch (this.state) {
        case wy:
            return e.pending && e.pending(this.value);
        case ky:
            return e.rejected && e.rejected(this.value);
        case Sy:
            return e.fulfilled ? e.fulfilled(this.value) : this.value;
    }
}
function xy(e, t) {
    if (
        (by(arguments.length <= 2, 'fromPromise expects up to two arguments'),
        by(
            'function' == typeof e || ('object' == typeof e && e && 'function' == typeof e.then),
            'Please pass a promise or function to fromPromise',
        ),
        !0 === e.isPromiseBasedObservable)
    )
        return e;
    'function' == typeof e && (e = new Promise(e));
    var n = e;
    (e.then(
        Op('observableFromPromise-resolve', function (e) {
            ((n.value = e), (n.state = Sy));
        }),
        Op('observableFromPromise-reject', function (e) {
            ((n.value = e), (n.state = ky));
        }),
    ),
        (n.isPromiseBasedObservable = !0),
        (n.case = Oy));
    var r = !t || (t.state !== Sy && t.state !== wy) ? void 0 : t.value;
    return (Rp(n, { value: r, state: wy }, {}, { deep: !1 }), n);
}
(((yy = xy || (xy = {})).reject = Op('fromPromise.reject', function (e) {
    var t = yy(Promise.reject(e));
    return ((t.state = ky), (t.value = e), t);
})),
    (yy.resolve = Op('fromPromise.resolve', function (e) {
        void 0 === e && (e = void 0);
        var t = yy(Promise.resolve(e));
        return ((t.state = Sy), (t.value = e), t);
    })));
var Ey = function (e, t, n, r) {
    var i,
        a = arguments.length,
        o = a < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
    else for (var u = e.length - 1; u >= 0; u--) (i = e[u]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
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
            tv(this),
            (function (e) {
                Th(e.name, !1, e, this, void 0);
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
        Ey([wh.ref], e.prototype, 'current', void 0),
        Ey([Op.bound], e.prototype, 'next', null),
        Ey([Op.bound], e.prototype, 'complete', null),
        Ey([Op.bound], e.prototype, 'error', null));
})();
var Py = function () {
        return (
            (Py =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            Py.apply(this, arguments)
        );
    },
    Ay = function (e, t, n, r) {
        var i,
            a = arguments.length,
            o = a < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
        else
            for (var u = e.length - 1; u >= 0; u--)
                (i = e[u]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
        return (a > 3 && o && Object.defineProperty(t, n, o), o);
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
                value: wh.map({}),
            }),
            Object.defineProperty(this, 'localComputedValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: wh.map({}),
            }),
            Object.defineProperty(this, 'isPropertyDirty', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    return t.localValues.has(e);
                },
            }),
            tv(this),
            by(Tv(e), 'createViewModel expects an observable object'));
        var n = _y(this);
        _y(e).forEach(function (r) {
            var i;
            if (!n.includes(r) && r !== Nd && '__mobxDidRunLazyInitializers' !== r) {
                if (
                    (by(
                        -1 === Cy.indexOf(r),
                        'The propertyname ' + r + ' is reserved and cannot be used with viewModels',
                    ),
                    $p(e, r))
                ) {
                    var a = Hv(e, r),
                        o = a.derivation.bind(t),
                        u = null === (i = a.setter_) || void 0 === i ? void 0 : i.bind(t);
                    t.localComputedValues.set(r, xh(o, { set: u }));
                }
                var l = Object.getOwnPropertyDescriptor(e, r),
                    s = l ? { enumerable: l.enumerable } : {};
                Object.defineProperty(
                    t,
                    r,
                    Py(Py({}, s), {
                        configurable: !0,
                        get: function () {
                            return $p(e, r)
                                ? t.localComputedValues.get(r).get()
                                : t.isPropertyDirty(r)
                                  ? t.localValues.get(r)
                                  : t.model[r];
                        },
                        set: Op(function (n) {
                            $p(e, r)
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
                Tv(e)
                    ? e[Nd].keys_()
                    : Sv(e) || xv(e)
                      ? Array.from(e.keys())
                      : vv(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void Kf(5)).forEach(function (e) {
                    var n = t.localValues.get(e),
                        r = t.model[e];
                    vv(r) ? r.replace(n) : Sv(r) ? (r.clear(), r.merge(n)) : Fp(n) || (t.model[e] = n);
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
        Ay([xh], e.prototype, 'isDirty', null),
        Ay([xh], e.prototype, 'changedValues', null),
        Ay([Op.bound], e.prototype, 'submit', null),
        Ay([Op.bound], e.prototype, 'reset', null),
        Ay([Op.bound], e.prototype, 'resetProperty', null));
})();
var jy = (function () {
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
            u = i.keyToName,
            l =
                void 0 === u
                    ? function (e) {
                          return '' + e;
                      }
                    : u,
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
            (s._keyToName = l),
            (s._groupBy = n),
            (s._ogmInfoKey = Symbol('ogmInfo' + o)),
            (s._base = t));
        for (var c = 0; c < t.length; c++) s._addItem(t[c]);
        return (
            (s._disposeBaseObserver = Wp(s._base, function (e) {
                if ('splice' === e.type)
                    Hp(function () {
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
                    Hp(function () {
                        (s._removeItem(e.oldValue), s._addItem(e.newValue));
                    });
                }
            })),
            s
        );
    }
    (jy(t, e),
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
                        ((n = wh([], { name: 'GroupArray[' + this._keyToName(t) + ']', deep: !1 })),
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
                        reaction: Cp(
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
})(wv);
var Ny = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function (e) {
    !(function () {
        var t = {}.hasOwnProperty;
        function n() {
            for (var e = [], r = 0; r < arguments.length; r++) {
                var i = arguments[r];
                if (i) {
                    var a = typeof i;
                    if ('string' === a || 'number' === a) e.push(i);
                    else if (Array.isArray(i)) {
                        if (i.length) {
                            var o = n.apply(null, i);
                            o && e.push(o);
                        }
                    } else if ('object' === a) {
                        if (
                            i.toString !== Object.prototype.toString &&
                            !i.toString.toString().includes('[native code]')
                        ) {
                            e.push(i.toString());
                            continue;
                        }
                        for (var u in i) t.call(i, u) && i[u] && e.push(u);
                    }
                }
            }
            return e.join(' ');
        }
        e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
    })();
})(Ny);
const Ty = e(Ny.exports);
function Ly(e) {
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
var Ry = {};
function Vy() {
    return 'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : Ry;
}
var Dy = Object.assign,
    Iy = Object.getOwnPropertyDescriptor,
    zy = Object.defineProperty,
    My = Object.prototype,
    By = [];
Object.freeze(By);
var Uy = {};
Object.freeze(Uy);
var Fy = 'undefined' != typeof Proxy,
    $y = Object.toString();
function Ky() {
    Fy || Ly('Proxy not available');
}
function Wy(e) {
    var t = !1;
    return function () {
        if (!t) return ((t = !0), e.apply(this, arguments));
    };
}
var Hy = function () {};
function qy(e) {
    return 'function' == typeof e;
}
function Gy(e) {
    switch (typeof e) {
        case 'string':
        case 'symbol':
        case 'number':
            return !0;
    }
    return !1;
}
function Qy(e) {
    return null !== e && 'object' == typeof e;
}
function Xy(e) {
    if (!Qy(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (null == t) return !0;
    var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n.toString() === $y;
}
function Yy(e) {
    var t = null == e ? void 0 : e.constructor;
    return !!t && ('GeneratorFunction' === t.name || 'GeneratorFunction' === t.displayName);
}
function Jy(e, t, n) {
    zy(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function Zy(e, t, n) {
    zy(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function em(e, t) {
    var n = 'isMobX' + e;
    return (
        (t.prototype[n] = !0),
        function (e) {
            return Qy(e) && !0 === e[n];
        }
    );
}
function tm(e) {
    return e instanceof Map;
}
function nm(e) {
    return e instanceof Set;
}
var rm = void 0 !== Object.getOwnPropertySymbols;
var im =
    'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : rm
          ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            }
          : Object.getOwnPropertyNames;
function am(e) {
    return null === e ? null : 'object' == typeof e ? '' + e : e;
}
function om(e, t) {
    return My.hasOwnProperty.call(e, t);
}
var um =
    Object.getOwnPropertyDescriptors ||
    function (e) {
        var t = {};
        return (
            im(e).forEach(function (n) {
                t[n] = Iy(e, n);
            }),
            t
        );
    };
function lm(e, t) {
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
function sm(e, t, n) {
    return (t && lm(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function cm() {
    return (
        (cm = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        cm.apply(this, arguments)
    );
}
function fm(e, t) {
    ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), dm(e, t));
}
function dm(e, t) {
    return (dm = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return ((e.__proto__ = t), e);
          })(e, t);
}
function hm(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function pm(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function vm(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
        Array.isArray(e) ||
        (n = (function (e, t) {
            if (e) {
                if ('string' == typeof e) return pm(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? pm(e, t)
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
var gm = Symbol('mobx-stored-annotations');
function bm(e) {
    return Object.assign(function (t, n) {
        if (mm(n)) return e.decorate_20223_(t, n);
        ym(t, n, e);
    }, e);
}
function ym(e, t, n) {
    (om(e, gm) || Jy(e, gm, cm({}, e[gm])),
        (function (e) {
            return e.annotationType_ === Pm;
        })(n) || (e[gm][t] = n));
}
function mm(e) {
    return 'object' == typeof e && 'string' == typeof e.kind;
}
var _m = Symbol('mobx administration'),
    wm = (function () {
        function e(e) {
            (void 0 === e && (e = 'Atom'),
                (this.name_ = void 0),
                (this.isPendingUnobservation_ = !1),
                (this.isBeingObserved_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = x_.NOT_TRACKING_),
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
                return Q_(this);
            }),
            (t.reportChanged = function () {
                (q_(), X_(this), G_());
            }),
            (t.toString = function () {
                return this.name_;
            }),
            e
        );
    })(),
    Sm = em('Atom', wm);
function km(e, t, n) {
    (void 0 === t && (t = Hy), void 0 === n && (n = Hy));
    var r,
        i = new wm(e);
    return (t !== Hy && bw(pw, i, t, r), n !== Hy && gw(i, n), i);
}
var Om = {
    structural: function (e, t) {
        return NS(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
};
function xm(e, t, n) {
    return jw(e)
        ? e
        : Array.isArray(e)
          ? c_.array(e, { name: n })
          : Xy(e)
            ? c_.object(e, void 0, { name: n })
            : tm(e)
              ? c_.map(e, { name: n })
              : nm(e)
                ? c_.set(e, { name: n })
                : 'function' != typeof e || dw(e) || Cw(e)
                  ? e
                  : Yy(e)
                    ? Pw(e)
                    : fw(n, e);
}
function Em(e) {
    return e;
}
var Pm = 'override';
function Am(e, t) {
    return { annotationType_: e, options_: t, make_: Cm, extend_: jm, decorate_20223_: Nm };
}
function Cm(e, t, n, r) {
    var i;
    if (null != (i = this.options_) && i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (dw(n.value)) return 1;
    var a = Tm(e, this, t, n, !1);
    return (zy(r, t, a), 2);
}
function jm(e, t, n, r) {
    var i = Tm(e, this, t, n);
    return e.defineProperty_(t, i, r);
}
function Nm(e, t) {
    var n = t.kind,
        r = t.name,
        i = t.addInitializer,
        a = this;
    if ('field' != n) {
        var o, u, l, s, c, f;
        if ('method' == n)
            return (
                dw(e) ||
                    ((u = e),
                    (e = __(
                        null != (l = null == (s = a.options_) ? void 0 : s.name) ? l : r.toString(),
                        u,
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
        Ly(
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
            ym(this, r, a);
        });
}
function Tm(e, t, n, r, i) {
    var a, o, u, l, s, c, f, d;
    (void 0 === i && (i = $_.safeDescriptors), (d = r), t.annotationType_, d.value);
    var h,
        p = r.value;
    null != (a = t.options_) && a.bound && (p = p.bind(null != (h = e.proxy_) ? h : e.target_));
    return {
        value: __(
            null != (o = null == (u = t.options_) ? void 0 : u.name) ? o : n.toString(),
            p,
            null != (l = null == (s = t.options_) ? void 0 : s.autoAction) && l,
            null != (c = t.options_) && c.bound ? (null != (f = e.proxy_) ? f : e.target_) : void 0,
        ),
        configurable: !i || e.isPlainObject_,
        enumerable: !1,
        writable: !i,
    };
}
function Lm(e, t) {
    return { annotationType_: e, options_: t, make_: Rm, extend_: Vm, decorate_20223_: Dm };
}
function Rm(e, t, n, r) {
    var i;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (
        null != (i = this.options_) &&
        i.bound &&
        (!om(e.target_, t) || !Cw(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
    )
        return 0;
    if (Cw(n.value)) return 1;
    var a = Im(e, this, t, n, !1, !1);
    return (zy(r, t, a), 2);
}
function Vm(e, t, n, r) {
    var i,
        a = Im(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
    return e.defineProperty_(t, a, r);
}
function Dm(e, t) {
    var n,
        r = t.name,
        i = t.addInitializer;
    return (
        Cw(e) || (e = Pw(e)),
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
function Im(e, t, n, r, i, a) {
    var o;
    (void 0 === a && (a = $_.safeDescriptors), (o = r), t.annotationType_, o.value);
    var u,
        l = r.value;
    (Cw(l) || (l = Pw(l)), i) && ((l = l.bind(null != (u = e.proxy_) ? u : e.target_)).isMobXFlow = !0);
    return { value: l, configurable: !a || e.isPlainObject_, enumerable: !1, writable: !a };
}
function zm(e, t) {
    return { annotationType_: e, options_: t, make_: Mm, extend_: Bm, decorate_20223_: Um };
}
function Mm(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function Bm(e, t, n, r) {
    var i;
    return (
        (i = n),
        this.annotationType_,
        i.get,
        e.defineComputedProperty_(t, cm({}, this.options_, { get: n.get, set: n.set }), r)
    );
}
function Um(e, t) {
    var n = this,
        r = t.name;
    return (
        (0, t.addInitializer)(function () {
            var t = hS(this)[_m],
                i = cm({}, n.options_, { get: e, context: this });
            (i.name || (i.name = 'ObservableObject.' + r.toString()), t.values_.set(r, new P_(i)));
        }),
        function () {
            return this[_m].getObservablePropValue_(r);
        }
    );
}
function Fm(e, t) {
    return { annotationType_: e, options_: t, make_: $m, extend_: Km, decorate_20223_: Wm };
}
function $m(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function Km(e, t, n, r) {
    var i, a;
    return (
        this.annotationType_,
        e.defineObservableProperty_(
            t,
            n.value,
            null != (i = null == (a = this.options_) ? void 0 : a.enhancer) ? i : xm,
            r,
        )
    );
}
function Wm(e, t) {
    var n = this,
        r = t.kind,
        i = t.name,
        a = new WeakSet();
    function o(e, t) {
        var r,
            o,
            u = hS(e)[_m],
            l = new O_(
                t,
                null != (r = null == (o = n.options_) ? void 0 : o.enhancer) ? r : xm,
                'ObservableObject.' + i.toString(),
                !1,
            );
        (u.values_.set(i, l), a.add(e));
    }
    if ('accessor' == r)
        return {
            get: function () {
                return (a.has(this) || o(this, e.get.call(this)), this[_m].getObservablePropValue_(i));
            },
            set: function (e) {
                return (a.has(this) || o(this, e), this[_m].setObservablePropValue_(i, e));
            },
            init: function (e) {
                return (a.has(this) || o(this, e), e);
            },
        };
}
var Hm = 'true',
    qm = Gm();
function Gm(e) {
    return { annotationType_: Hm, options_: e, make_: Qm, extend_: Xm, decorate_20223_: Ym };
}
function Qm(e, t, n, r) {
    var i, a, o, u;
    if (n.get) return p_.make_(e, t, n, r);
    if (n.set) {
        var l = __(t.toString(), n.set);
        return r === e.target_
            ? null === e.defineProperty_(t, { configurable: !$_.safeDescriptors || e.isPlainObject_, set: l })
                ? 0
                : 2
            : (zy(r, t, { configurable: !0, set: l }), 2);
    }
    if (r !== e.target_ && 'function' == typeof n.value)
        return Yy(n.value)
            ? (null != (u = this.options_) && u.autoBind ? Pw.bound : Pw).make_(e, t, n, r)
            : (null != (o = this.options_) && o.autoBind ? fw.bound : fw).make_(e, t, n, r);
    var s,
        c = !1 === (null == (i = this.options_) ? void 0 : i.deep) ? c_.ref : c_;
    'function' == typeof n.value &&
        null != (a = this.options_) &&
        a.autoBind &&
        (n.value = n.value.bind(null != (s = e.proxy_) ? s : e.target_));
    return c.make_(e, t, n, r);
}
function Xm(e, t, n, r) {
    var i, a, o;
    if (n.get) return p_.extend_(e, t, n, r);
    if (n.set)
        return e.defineProperty_(
            t,
            { configurable: !$_.safeDescriptors || e.isPlainObject_, set: __(t.toString(), n.set) },
            r,
        );
    'function' == typeof n.value &&
        null != (i = this.options_) &&
        i.autoBind &&
        (n.value = n.value.bind(null != (o = e.proxy_) ? o : e.target_));
    return (!1 === (null == (a = this.options_) ? void 0 : a.deep) ? c_.ref : c_).extend_(e, t, n, r);
}
function Ym(e, t) {
    Ly("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Jm = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
function Zm(e) {
    return e || Jm;
}
Object.freeze(Jm);
var e_ = Fm('observable'),
    t_ = Fm('observable.ref', { enhancer: Em }),
    n_ = Fm('observable.shallow', {
        enhancer: function (e, t, n) {
            return null == e || gS(e) || Zw(e) || oS(e) || sS(e)
                ? e
                : Array.isArray(e)
                  ? c_.array(e, { name: n, deep: !1 })
                  : Xy(e)
                    ? c_.object(e, void 0, { name: n, deep: !1 })
                    : tm(e)
                      ? c_.map(e, { name: n, deep: !1 })
                      : nm(e)
                        ? c_.set(e, { name: n, deep: !1 })
                        : void 0;
        },
    }),
    r_ = Fm('observable.struct', {
        enhancer: function (e, t) {
            return NS(e, t) ? t : e;
        },
    }),
    i_ = bm(e_);
function a_(e) {
    return !0 === e.deep
        ? xm
        : !1 === e.deep
          ? Em
          : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
            ? n
            : xm;
    var t, n, r;
}
function o_(e, t, n) {
    return mm(t)
        ? e_.decorate_20223_(e, t)
        : Gy(t)
          ? void ym(e, t, e_)
          : jw(e)
            ? e
            : Xy(e)
              ? c_.object(e, t, n)
              : Array.isArray(e)
                ? c_.array(e, t)
                : tm(e)
                  ? c_.map(e, t)
                  : nm(e)
                    ? c_.set(e, t)
                    : 'object' == typeof e && null !== e
                      ? e
                      : c_.box(e, t);
}
Dy(o_, i_);
var u_,
    l_,
    s_ = {
        box: function (e, t) {
            var n = Zm(t);
            return new O_(e, a_(n), n.name, !0, n.equals);
        },
        array: function (e, t) {
            var n = Zm(t);
            return (!1 === $_.useProxies || !1 === n.proxy ? ES : Kw)(e, a_(n), n.name);
        },
        map: function (e, t) {
            var n = Zm(t);
            return new aS(e, a_(n), n.name);
        },
        set: function (e, t) {
            var n = Zm(t);
            return new lS(e, a_(n), n.name);
        },
        object: function (e, t, n) {
            return CS(function () {
                return (function (e, t, n, r) {
                    var i = um(t);
                    return (
                        CS(function () {
                            var t = hS(e, r)[_m];
                            im(i).forEach(function (e) {
                                t.extend_(e, i[e], !n || !(e in n) || n[e]);
                            });
                        }),
                        e
                    );
                })(
                    !1 === $_.useProxies || !1 === (null == n ? void 0 : n.proxy)
                        ? hS({}, n)
                        : (function (e, t) {
                              var n, r;
                              return (
                                  Ky(),
                                  (e = hS(e, t)),
                                  null != (r = (n = e[_m]).proxy_) ? r : (n.proxy_ = new Proxy(e, Lw))
                              );
                          })({}, n),
                    e,
                    t,
                );
            });
        },
        ref: bm(t_),
        shallow: bm(n_),
        deep: i_,
        struct: bm(r_),
    },
    c_ = Dy(o_, s_),
    f_ = 'computed',
    d_ = zm(f_),
    h_ = zm('computed.struct', { equals: Om.structural }),
    p_ = function (e, t) {
        if (mm(t)) return d_.decorate_20223_(e, t);
        if (Gy(t)) return ym(e, t, d_);
        if (Xy(e)) return bm(zm(f_, e));
        var n = Xy(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new P_(n));
    };
(Object.assign(p_, d_), (p_.struct = bm(h_)));
var v_,
    g_ = 0,
    b_ = 1,
    y_ = null != (u_ = null == (l_ = Iy(function () {}, 'name')) ? void 0 : l_.configurable) && u_,
    m_ = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
function __(e, t, n, r) {
    function i() {
        return (function (e, t, n, r, i) {
            var a = (function (e, t, n, r) {
                var i = !1,
                    a = 0,
                    o = $_.trackingDerivation,
                    u = !t || !o;
                q_();
                var l = $_.allowStateChanges;
                u && (V_(), (l = w_(!0)));
                var s = I_(!0),
                    c = {
                        runAsAction_: u,
                        prevDerivation_: o,
                        prevAllowStateChanges_: l,
                        prevAllowStateReads_: s,
                        notifySpy_: i,
                        startTime_: a,
                        actionId_: b_++,
                        parentActionId_: g_,
                    };
                return ((g_ = c.actionId_), c);
            })(0, t);
            try {
                return n.apply(r, i);
            } catch (o) {
                throw ((a.error_ = o), o);
            } finally {
                !(function (e) {
                    g_ !== e.actionId_ && Ly(30);
                    ((g_ = e.parentActionId_), void 0 !== e.error_ && ($_.suppressReactionErrors = !0));
                    (S_(e.prevAllowStateChanges_),
                        z_(e.prevAllowStateReads_),
                        G_(),
                        e.runAsAction_ && D_(e.prevDerivation_));
                    $_.suppressReactionErrors = !1;
                })(a);
            }
        })(0, n, t, r || this, arguments);
    }
    return (
        void 0 === n && (n = !1),
        (i.isMobxAction = !0),
        (i.toString = function () {
            return t.toString();
        }),
        y_ && ((m_.value = e), zy(i, 'name', m_)),
        i
    );
}
function w_(e) {
    var t = $_.allowStateChanges;
    return (($_.allowStateChanges = e), t);
}
function S_(e) {
    $_.allowStateChanges = e;
}
v_ = Symbol.toPrimitive;
var k_,
    O_ = (function (e) {
        function t(t, n, r, i, a) {
            var o;
            return (
                void 0 === r && (r = 'ObservableValue'),
                void 0 === a && (a = Om.default),
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
        fm(t, e);
        var n = t.prototype;
        return (
            (n.dehanceValue = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
                (this.value_, (e = this.prepareNewValue_(e)) !== $_.UNCHANGED && this.setNewValue_(e));
            }),
            (n.prepareNewValue_ = function (e) {
                if (Rw(this)) {
                    var t = Dw(this, { object: this, type: Uw, newValue: e });
                    if (!t) return $_.UNCHANGED;
                    e = t.newValue;
                }
                return (
                    (e = this.enhancer(e, this.value_, this.name_)),
                    this.equals(this.value_, e) ? $_.UNCHANGED : e
                );
            }),
            (n.setNewValue_ = function (e) {
                var t = this.value_;
                ((this.value_ = e),
                    this.reportChanged(),
                    Iw(this) && Mw(this, { type: Uw, object: this, newValue: e, oldValue: t }));
            }),
            (n.get = function () {
                return (this.reportObserved(), this.dehanceValue(this.value_));
            }),
            (n.intercept_ = function (e) {
                return Vw(this, e);
            }),
            (n.observe_ = function (e, t) {
                return (
                    t &&
                        e({
                            observableKind: 'value',
                            debugObjectName: this.name_,
                            object: this,
                            type: Uw,
                            newValue: this.value_,
                            oldValue: void 0,
                        }),
                    zw(this, e)
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
                return am(this.get());
            }),
            (n[v_] = function () {
                return this.valueOf();
            }),
            t
        );
    })(wm);
k_ = Symbol.toPrimitive;
var x_,
    E_,
    P_ = (function () {
        function e(e) {
            ((this.dependenciesState_ = x_.NOT_TRACKING_),
                (this.observing_ = []),
                (this.newObserving_ = null),
                (this.isBeingObserved_ = !1),
                (this.isPendingUnobservation_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = x_.UP_TO_DATE_),
                (this.unboundDepsCount_ = 0),
                (this.value_ = new C_(null)),
                (this.name_ = void 0),
                (this.triggeredBy_ = void 0),
                (this.isComputing_ = !1),
                (this.isRunningSetter_ = !1),
                (this.derivation = void 0),
                (this.setter_ = void 0),
                (this.isTracing_ = E_.NONE),
                (this.scope_ = void 0),
                (this.equals_ = void 0),
                (this.requiresReaction_ = void 0),
                (this.keepAlive_ = void 0),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                e.get || Ly(31),
                (this.derivation = e.get),
                (this.name_ = e.name || 'ComputedValue'),
                e.set && (this.setter_ = __('ComputedValue-setter', e.set)),
                (this.equals_ = e.equals || (e.compareStructural || e.struct ? Om.structural : Om.default)),
                (this.scope_ = e.context),
                (this.requiresReaction_ = e.requiresReaction),
                (this.keepAlive_ = !!e.keepAlive));
        }
        var t = e.prototype;
        return (
            (t.onBecomeStale_ = function () {
                !(function (e) {
                    if (e.lowestObserverState_ !== x_.UP_TO_DATE_) return;
                    ((e.lowestObserverState_ = x_.POSSIBLY_STALE_),
                        e.observers_.forEach(function (e) {
                            e.dependenciesState_ === x_.UP_TO_DATE_ &&
                                ((e.dependenciesState_ = x_.POSSIBLY_STALE_), e.onBecomeStale_());
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
                    (this.isComputing_ && Ly(32, this.name_, this.derivation),
                    0 !== $_.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                ) {
                    if ((Q_(this), N_(this))) {
                        var e = $_.trackingContext;
                        (this.keepAlive_ && !e && ($_.trackingContext = this),
                            this.trackAndCompute() &&
                                (function (e) {
                                    if (e.lowestObserverState_ === x_.STALE_) return;
                                    ((e.lowestObserverState_ = x_.STALE_),
                                        e.observers_.forEach(function (t) {
                                            t.dependenciesState_ === x_.POSSIBLY_STALE_
                                                ? (t.dependenciesState_ = x_.STALE_)
                                                : t.dependenciesState_ === x_.UP_TO_DATE_ &&
                                                  (e.lowestObserverState_ = x_.UP_TO_DATE_);
                                        }));
                                })(this),
                            ($_.trackingContext = e));
                    }
                } else N_(this) && (this.warnAboutUntrackedRead_(), q_(), (this.value_ = this.computeValue_(!1)), G_());
                var t = this.value_;
                if (j_(t)) throw t.cause;
                return t;
            }),
            (t.set = function (e) {
                if (this.setter_) {
                    (this.isRunningSetter_ && Ly(33, this.name_), (this.isRunningSetter_ = !0));
                    try {
                        this.setter_.call(this.scope_, e);
                    } finally {
                        this.isRunningSetter_ = !1;
                    }
                } else Ly(34, this.name_);
            }),
            (t.trackAndCompute = function () {
                var e = this.value_,
                    t = this.dependenciesState_ === x_.NOT_TRACKING_,
                    n = this.computeValue_(!0),
                    r = t || j_(e) || j_(n) || !this.equals_(e, n);
                return (r && (this.value_ = n), r);
            }),
            (t.computeValue_ = function (e) {
                this.isComputing_ = !0;
                var t,
                    n = w_(!1);
                if (e) t = T_(this, this.derivation, this.scope_);
                else if (!0 === $_.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                else
                    try {
                        t = this.derivation.call(this.scope_);
                    } catch (r) {
                        t = new C_(r);
                    }
                return (S_(n), (this.isComputing_ = !1), t);
            }),
            (t.suspend_ = function () {
                this.keepAlive_ || (L_(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
                var n = this,
                    r = !0,
                    i = void 0;
                return (function (e, t) {
                    var n, r, i, a, o;
                    void 0 === t && (t = Uy);
                    var u,
                        l = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun';
                    if (t.scheduler || t.delay) {
                        var s = (function (e) {
                                return e.scheduler
                                    ? e.scheduler
                                    : e.delay
                                      ? function (t) {
                                            return setTimeout(t, e.delay);
                                        }
                                      : hw;
                            })(t),
                            c = !1;
                        u = new Y_(
                            l,
                            function () {
                                c ||
                                    ((c = !0),
                                    s(function () {
                                        ((c = !1), u.isDisposed_ || u.track(f));
                                    }));
                            },
                            t.onError,
                            t.requiresObservable,
                        );
                    } else
                        u = new Y_(
                            l,
                            function () {
                                this.track(f);
                            },
                            t.onError,
                            t.requiresObservable,
                        );
                    function f() {
                        e(u);
                    }
                    (null != (i = t) && null != (a = i.signal) && a.aborted) || u.schedule_();
                    return u.getDisposer_(null == (o = t) ? void 0 : o.signal);
                })(function () {
                    var a = n.get();
                    if (!r || t) {
                        var o = V_();
                        (e({
                            observableKind: 'computed',
                            debugObjectName: n.name_,
                            type: Uw,
                            object: n,
                            newValue: a,
                            oldValue: i,
                        }),
                            D_(o));
                    }
                    ((r = !1), (i = a));
                });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
                return this.name_ + '[' + this.derivation.toString() + ']';
            }),
            (t.valueOf = function () {
                return am(this.get());
            }),
            (t[k_] = function () {
                return this.valueOf();
            }),
            e
        );
    })(),
    A_ = em('ComputedValue', P_);
(!(function (e) {
    ((e[(e.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
        (e[(e.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
        (e[(e.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
        (e[(e.STALE_ = 2)] = 'STALE_'));
})(x_ || (x_ = {})),
    (function (e) {
        ((e[(e.NONE = 0)] = 'NONE'), (e[(e.LOG = 1)] = 'LOG'), (e[(e.BREAK = 2)] = 'BREAK'));
    })(E_ || (E_ = {})));
var C_ = function (e) {
    ((this.cause = void 0), (this.cause = e));
};
function j_(e) {
    return e instanceof C_;
}
function N_(e) {
    switch (e.dependenciesState_) {
        case x_.UP_TO_DATE_:
            return !1;
        case x_.NOT_TRACKING_:
        case x_.STALE_:
            return !0;
        case x_.POSSIBLY_STALE_:
            for (var t = I_(!0), n = V_(), r = e.observing_, i = r.length, a = 0; a < i; a++) {
                var o = r[a];
                if (A_(o)) {
                    if ($_.disableErrorBoundaries) o.get();
                    else
                        try {
                            o.get();
                        } catch (u) {
                            return (D_(n), z_(t), !0);
                        }
                    if (e.dependenciesState_ === x_.STALE_) return (D_(n), z_(t), !0);
                }
            }
            return (M_(e), D_(n), z_(t), !1);
    }
}
function T_(e, t, n) {
    var r = I_(!0);
    (M_(e),
        (e.newObserving_ = new Array(e.observing_.length + 100)),
        (e.unboundDepsCount_ = 0),
        (e.runId_ = ++$_.runId));
    var i,
        a = $_.trackingDerivation;
    if ((($_.trackingDerivation = e), $_.inBatch++, !0 === $_.disableErrorBoundaries)) i = t.call(n);
    else
        try {
            i = t.call(n);
        } catch (o) {
            i = new C_(o);
        }
    return (
        $_.inBatch--,
        ($_.trackingDerivation = a),
        (function (e) {
            for (
                var t = e.observing_,
                    n = (e.observing_ = e.newObserving_),
                    r = x_.UP_TO_DATE_,
                    i = 0,
                    a = e.unboundDepsCount_,
                    o = 0;
                o < a;
                o++
            ) {
                var u = n[o];
                (0 === u.diffValue_ && ((u.diffValue_ = 1), i !== o && (n[i] = u), i++),
                    u.dependenciesState_ > r && (r = u.dependenciesState_));
            }
            ((n.length = i), (e.newObserving_ = null), (a = t.length));
            for (; a--; ) {
                var l = t[a];
                (0 === l.diffValue_ && W_(l, e), (l.diffValue_ = 0));
            }
            for (; i--; ) {
                var s = n[i];
                1 === s.diffValue_ && ((s.diffValue_ = 0), K_(s, e));
            }
            r !== x_.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        z_(r),
        i
    );
}
function L_(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) W_(t[n], e);
    e.dependenciesState_ = x_.NOT_TRACKING_;
}
function R_(e) {
    var t = V_();
    try {
        return e();
    } finally {
        D_(t);
    }
}
function V_() {
    var e = $_.trackingDerivation;
    return (($_.trackingDerivation = null), e);
}
function D_(e) {
    $_.trackingDerivation = e;
}
function I_(e) {
    var t = $_.allowStateReads;
    return (($_.allowStateReads = e), t);
}
function z_(e) {
    $_.allowStateReads = e;
}
function M_(e) {
    if (e.dependenciesState_ !== x_.UP_TO_DATE_) {
        e.dependenciesState_ = x_.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = x_.UP_TO_DATE_;
    }
}
var B_ = function () {
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
    U_ = !0,
    F_ = !1,
    $_ = (function () {
        var e = Vy();
        return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (U_ = !1),
            e.__mobxGlobals && e.__mobxGlobals.version !== new B_().version && (U_ = !1),
            U_
                ? e.__mobxGlobals
                    ? ((e.__mobxInstanceCount += 1),
                      e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                      e.__mobxGlobals)
                    : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new B_()))
                : (setTimeout(function () {
                      F_ || Ly(35);
                  }, 1),
                  new B_())
        );
    })();
function K_(e, t) {
    (e.observers_.add(t),
        e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_));
}
function W_(e, t) {
    (e.observers_.delete(t), 0 === e.observers_.size && H_(e));
}
function H_(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), $_.pendingUnobservations.push(e));
}
function q_() {
    $_.inBatch++;
}
function G_() {
    if (0 == --$_.inBatch) {
        ew();
        for (var e = $_.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            ((n.isPendingUnobservation_ = !1),
                0 === n.observers_.size &&
                    (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof P_ && n.suspend_()));
        }
        $_.pendingUnobservations = [];
    }
}
function Q_(e) {
    var t = $_.trackingDerivation;
    return null !== t
        ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ && $_.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
          e.isBeingObserved_)
        : (0 === e.observers_.size && $_.inBatch > 0 && H_(e), !1);
}
function X_(e) {
    e.lowestObserverState_ !== x_.STALE_ &&
        ((e.lowestObserverState_ = x_.STALE_),
        e.observers_.forEach(function (e) {
            (e.dependenciesState_ === x_.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = x_.STALE_));
        }));
}
var Y_ = (function () {
        function e(e, t, n, r) {
            (void 0 === e && (e = 'Reaction'),
                (this.name_ = void 0),
                (this.onInvalidate_ = void 0),
                (this.errorHandler_ = void 0),
                (this.requiresObservable_ = void 0),
                (this.observing_ = []),
                (this.newObserving_ = []),
                (this.dependenciesState_ = x_.NOT_TRACKING_),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.unboundDepsCount_ = 0),
                (this.isDisposed_ = !1),
                (this.isScheduled_ = !1),
                (this.isTrackPending_ = !1),
                (this.isRunning_ = !1),
                (this.isTracing_ = E_.NONE),
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
                this.isScheduled_ || ((this.isScheduled_ = !0), $_.pendingReactions.push(this), ew());
            }),
            (t.isScheduled = function () {
                return this.isScheduled_;
            }),
            (t.runReaction_ = function () {
                if (!this.isDisposed_) {
                    (q_(), (this.isScheduled_ = !1));
                    var e = $_.trackingContext;
                    if ((($_.trackingContext = this), N_(this))) {
                        this.isTrackPending_ = !0;
                        try {
                            this.onInvalidate_();
                        } catch (t) {
                            this.reportExceptionInDerivation_(t);
                        }
                    }
                    (($_.trackingContext = e), G_());
                }
            }),
            (t.track = function (e) {
                if (!this.isDisposed_) {
                    (q_(), (this.isRunning_ = !0));
                    var t = $_.trackingContext;
                    $_.trackingContext = this;
                    var n = T_(this, e, void 0);
                    (($_.trackingContext = t),
                        (this.isRunning_ = !1),
                        (this.isTrackPending_ = !1),
                        this.isDisposed_ && L_(this),
                        j_(n) && this.reportExceptionInDerivation_(n.cause),
                        G_());
                }
            }),
            (t.reportExceptionInDerivation_ = function (e) {
                var t = this;
                if (this.errorHandler_) this.errorHandler_(e, this);
                else {
                    if ($_.disableErrorBoundaries) throw e;
                    var n = "[mobx] uncaught error in '" + this + "'";
                    ($_.suppressReactionErrors || console.error(n, e),
                        $_.globalReactionErrorHandlers.forEach(function (n) {
                            return n(e, t);
                        }));
                }
            }),
            (t.dispose = function () {
                this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (q_(), L_(this), G_()));
            }),
            (t.getDisposer_ = function (e) {
                var t = this,
                    n = function n() {
                        (t.dispose(), null == e || null == e.removeEventListener || e.removeEventListener('abort', n));
                    };
                return (null == e || null == e.addEventListener || e.addEventListener('abort', n), (n[_m] = this), n);
            }),
            (t.toString = function () {
                return 'Reaction[' + this.name_ + ']';
            }),
            (t.trace = function (e) {}),
            e
        );
    })(),
    J_ = 100,
    Z_ = function (e) {
        return e();
    };
function ew() {
    $_.inBatch > 0 || $_.isRunningReactions || Z_(tw);
}
function tw() {
    $_.isRunningReactions = !0;
    for (var e = $_.pendingReactions, t = 0; e.length > 0; ) {
        ++t === J_ && (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
    }
    $_.isRunningReactions = !1;
}
var nw = em('Reaction', Y_);
var rw = 'action',
    iw = 'autoAction',
    aw = Am(rw),
    ow = Am('action.bound', { bound: !0 }),
    uw = Am(iw, { autoAction: !0 }),
    lw = Am('autoAction.bound', { autoAction: !0, bound: !0 });
function sw(e) {
    return function (t, n) {
        return qy(t)
            ? __(t.name || '<unnamed action>', t, e)
            : qy(n)
              ? __(t, n, e)
              : mm(n)
                ? (e ? uw : aw).decorate_20223_(t, n)
                : Gy(n)
                  ? ym(t, n, e ? uw : aw)
                  : Gy(t)
                    ? bm(Am(e ? iw : rw, { name: t, autoAction: e }))
                    : void 0;
    };
}
var cw = sw(!1);
Object.assign(cw, aw);
var fw = sw(!0);
function dw(e) {
    return qy(e) && !0 === e.isMobxAction;
}
(Object.assign(fw, uw), (cw.bound = bm(ow)), (fw.bound = bm(lw)));
var hw = function (e) {
    return e();
};
var pw = 'onBO',
    vw = 'onBUO';
function gw(e, t, n) {
    return bw(vw, e, t, n);
}
function bw(e, t, n, r) {
    var i = PS(t),
        a = qy(r) ? r : n,
        o = e + 'L';
    return (
        i[o] ? i[o].add(a) : (i[o] = new Set([a])),
        function () {
            var e = i[o];
            e && (e.delete(a), 0 === e.size && delete i[o]);
        }
    );
}
var yw = 'never',
    mw = 'always',
    _w = 'observed';
function ww(e) {
    !0 === e.isolateGlobalState &&
        (function () {
            if ((($_.pendingReactions.length || $_.inBatch || $_.isRunningReactions) && Ly(36), (F_ = !0), U_)) {
                var e = Vy();
                (0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0), ($_ = new B_()));
            }
        })();
    var t,
        n,
        r = e.useProxies,
        i = e.enforceActions;
    if (
        (void 0 !== r && ($_.useProxies = r === mw || (r !== yw && 'undefined' != typeof Proxy)),
        'ifavailable' === r && ($_.verifyProxies = !0),
        void 0 !== i)
    ) {
        var a = i === mw ? mw : i === _w;
        (($_.enforceActions = a), ($_.allowStateChanges = !0 !== a && a !== mw));
    }
    ([
        'computedRequiresReaction',
        'reactionRequiresObservable',
        'observableRequiresReaction',
        'disableErrorBoundaries',
        'safeDescriptors',
    ].forEach(function (t) {
        t in e && ($_[t] = !!e[t]);
    }),
        ($_.allowStateReads = !$_.observableRequiresReaction),
        e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = Z_),
            (Z_ = function (e) {
                return t(function () {
                    return n(e);
                });
            })));
}
function Sw(e) {
    var t,
        n = { name: e.name_ };
    return (
        e.observing_ &&
            e.observing_.length > 0 &&
            (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(Sw)),
        n
    );
}
var kw = 0;
function Ow() {
    this.message = 'FLOW_CANCELLED';
}
Ow.prototype = Object.create(Error.prototype);
var xw = Lm('flow'),
    Ew = Lm('flow.bound', { bound: !0 }),
    Pw = Object.assign(function (e, t) {
        if (mm(t)) return xw.decorate_20223_(e, t);
        if (Gy(t)) return ym(e, t, xw);
        var n = e,
            r = n.name || '<unnamed flow>',
            i = function () {
                var e,
                    t = arguments,
                    i = ++kw,
                    a = cw(r + ' - runid: ' + i + ' - init', n).apply(this, t),
                    o = void 0,
                    u = new Promise(function (t, n) {
                        var u = 0;
                        function l(e) {
                            var t;
                            o = void 0;
                            try {
                                t = cw(r + ' - runid: ' + i + ' - yield ' + u++, a.next).call(a, e);
                            } catch (l) {
                                return n(l);
                            }
                            c(t);
                        }
                        function s(e) {
                            var t;
                            o = void 0;
                            try {
                                t = cw(r + ' - runid: ' + i + ' - yield ' + u++, a.throw).call(a, e);
                            } catch (l) {
                                return n(l);
                            }
                            c(t);
                        }
                        function c(e) {
                            if (!qy(null == e ? void 0 : e.then))
                                return e.done ? t(e.value) : (o = Promise.resolve(e.value)).then(l, s);
                            e.then(c, n);
                        }
                        ((e = n), l(void 0));
                    });
                return (
                    (u.cancel = cw(r + ' - runid: ' + i + ' - cancel', function () {
                        try {
                            o && Aw(o);
                            var t = a.return(void 0),
                                n = Promise.resolve(t.value);
                            (n.then(Hy, Hy), Aw(n), e(new Ow()));
                        } catch (r) {
                            e(r);
                        }
                    })),
                    u
                );
            };
        return ((i.isMobXFlow = !0), i);
    }, xw);
function Aw(e) {
    qy(e.cancel) && e.cancel();
}
function Cw(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function jw(e) {
    return (function (e, t) {
        return !!e && (gS(e) || !!e[_m] || Sm(e) || nw(e) || A_(e));
    })(e);
}
function Nw(e, t) {
    (void 0 === t && (t = void 0), q_());
    try {
        return e.apply(t);
    } finally {
        G_();
    }
}
function Tw(e) {
    return e[_m];
}
Pw.bound = bm(Ew);
var Lw = {
    has: function (e, t) {
        return Tw(e).has_(t);
    },
    get: function (e, t) {
        return Tw(e).get_(t);
    },
    set: function (e, t, n) {
        var r;
        return !!Gy(t) && (null == (r = Tw(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
        var n;
        return !!Gy(t) && (null == (n = Tw(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
        var r;
        return null == (r = Tw(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
        return Tw(e).ownKeys_();
    },
    preventExtensions: function (e) {
        Ly(13);
    },
};
function Rw(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
}
function Vw(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
        n.push(t),
        Wy(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function Dw(e, t) {
    var n = V_();
    try {
        for (
            var r = [].concat(e.interceptors_ || []), i = 0, a = r.length;
            i < a && ((t = r[i](t)) && !t.type && Ly(14), t);
            i++
        );
        return t;
    } finally {
        D_(n);
    }
}
function Iw(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
}
function zw(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
        n.push(t),
        Wy(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function Mw(e, t) {
    var n = V_(),
        r = e.changeListeners_;
    if (r) {
        for (var i = 0, a = (r = r.slice()).length; i < a; i++) r[i](t);
        D_(n);
    }
}
var Bw = 'splice',
    Uw = 'update',
    Fw = {
        get: function (e, t) {
            var n = e[_m];
            return t === _m
                ? n
                : 'length' === t
                  ? n.getArrayLength_()
                  : 'string' != typeof t || isNaN(t)
                    ? om(Ww, t)
                        ? Ww[t]
                        : e[t]
                    : n.get_(parseInt(t));
        },
        set: function (e, t, n) {
            var r = e[_m];
            return (
                'length' === t && r.setArrayLength_(n),
                'symbol' == typeof t || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n),
                !0
            );
        },
        preventExtensions: function () {
            Ly(15);
        },
    },
    $w = (function () {
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
                (this.atom_ = new wm(e)),
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
                return Vw(this, e);
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
                    zw(this, e)
                );
            }),
            (t.getArrayLength_ = function () {
                return (this.atom_.reportObserved(), this.values_.length);
            }),
            (t.setArrayLength_ = function (e) {
                ('number' != typeof e || isNaN(e) || e < 0) && Ly('Out of range: ' + e);
                var t = this.values_.length;
                if (e !== t)
                    if (e > t) {
                        for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
                        this.spliceWithArray_(t, 0, n);
                    } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
                (e !== this.lastKnownLength_ && Ly(16),
                    (this.lastKnownLength_ += t),
                    this.legacyMode_ && t > 0 && xS(e + t + 1));
            }),
            (t.spliceWithArray_ = function (e, t, n) {
                var r = this;
                this.atom_;
                var i = this.values_.length;
                if (
                    (void 0 === e ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
                    (t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e))),
                    void 0 === n && (n = By),
                    Rw(this))
                ) {
                    var a = Dw(this, { object: this.proxy_, type: Bw, index: e, removedCount: t, added: n });
                    if (!a) return By;
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
                var u = this.spliceItemsIntoValues_(e, t, n);
                return ((0 === t && 0 === n.length) || this.notifyArraySplice_(e, n, u), this.dehanceValues_(u));
            }),
            (t.spliceItemsIntoValues_ = function (e, t, n) {
                var r;
                if (n.length < 1e4) return (r = this.values_).splice.apply(r, [e, t].concat(n));
                var i = this.values_.slice(e, e + t),
                    a = this.values_.slice(e + t);
                this.values_.length += n.length - t;
                for (var o = 0; o < n.length; o++) this.values_[e + o] = n[o];
                for (var u = 0; u < a.length; u++) this.values_[e + n.length + u] = a[u];
                return i;
            }),
            (t.notifyArrayChildUpdate_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    i = Iw(this),
                    a =
                        i || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  type: Uw,
                                  debugObjectName: this.atom_.name_,
                                  index: e,
                                  newValue: t,
                                  oldValue: n,
                              }
                            : null;
                (this.atom_.reportChanged(), i && Mw(this, a));
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    i = Iw(this),
                    a =
                        i || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  debugObjectName: this.atom_.name_,
                                  type: Bw,
                                  index: e,
                                  removed: n,
                                  added: t,
                                  removedCount: n.length,
                                  addedCount: t.length,
                              }
                            : null;
                (this.atom_.reportChanged(), i && Mw(this, a));
            }),
            (t.get_ = function (e) {
                if (!(this.legacyMode_ && e >= this.values_.length))
                    return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]));
                console.warn('[mobx] Out of bounds read: ' + e);
            }),
            (t.set_ = function (e, t) {
                var n = this.values_;
                if ((this.legacyMode_ && e > n.length && Ly(17, e, n.length), e < n.length)) {
                    this.atom_;
                    var r = n[e];
                    if (Rw(this)) {
                        var i = Dw(this, { type: Uw, object: this.proxy_, index: e, newValue: t });
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
function Kw(e, t, n, r) {
    return (
        void 0 === n && (n = 'ObservableArray'),
        void 0 === r && (r = !1),
        Ky(),
        CS(function () {
            var i = new $w(n, t, r, !1);
            Zy(i.values_, _m, i);
            var a = new Proxy(i.values_, Fw);
            return ((i.proxy_ = a), e && e.length && i.spliceWithArray_(0, 0, e), a);
        })
    );
}
var Ww = {
    clear: function () {
        return this.splice(0);
    },
    replace: function (e) {
        var t = this[_m];
        return t.spliceWithArray_(0, t.values_.length, e);
    },
    toJSON: function () {
        return this.slice();
    },
    splice: function (e, t) {
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
        var a = this[_m];
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
        return this[_m].spliceWithArray_(e, t, n);
    },
    push: function () {
        for (var e = this[_m], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(e.values_.length, 0, n), e.values_.length);
    },
    pop: function () {
        return this.splice(Math.max(this[_m].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        for (var e = this[_m], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(0, 0, n), e.values_.length);
    },
    reverse: function () {
        return ($_.trackingDerivation && Ly(37, 'reverse'), this.replace(this.slice().reverse()), this);
    },
    sort: function () {
        $_.trackingDerivation && Ly(37, 'sort');
        var e = this.slice();
        return (e.sort.apply(e, arguments), this.replace(e), this);
    },
    remove: function (e) {
        var t = this[_m],
            n = t.dehanceValues_(t.values_).indexOf(e);
        return n > -1 && (this.splice(n, 1), !0);
    },
};
function Hw(e, t) {
    'function' == typeof Array.prototype[e] && (Ww[e] = t(e));
}
function qw(e) {
    return function () {
        var t = this[_m];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments);
    };
}
function Gw(e) {
    return function (t, n) {
        var r = this,
            i = this[_m];
        return (
            i.atom_.reportObserved(),
            i.dehanceValues_(i.values_)[e](function (e, i) {
                return t.call(n, e, i, r);
            })
        );
    };
}
function Qw(e) {
    return function () {
        var t = this,
            n = this[_m];
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
(Hw('at', qw),
    Hw('concat', qw),
    Hw('flat', qw),
    Hw('includes', qw),
    Hw('indexOf', qw),
    Hw('join', qw),
    Hw('lastIndexOf', qw),
    Hw('slice', qw),
    Hw('toString', qw),
    Hw('toLocaleString', qw),
    Hw('toSorted', qw),
    Hw('toSpliced', qw),
    Hw('with', qw),
    Hw('every', Gw),
    Hw('filter', Gw),
    Hw('find', Gw),
    Hw('findIndex', Gw),
    Hw('findLast', Gw),
    Hw('findLastIndex', Gw),
    Hw('flatMap', Gw),
    Hw('forEach', Gw),
    Hw('map', Gw),
    Hw('some', Gw),
    Hw('toReversed', Gw),
    Hw('reduce', Qw),
    Hw('reduceRight', Qw));
var Xw,
    Yw,
    Jw = em('ObservableArrayAdministration', $w);
function Zw(e) {
    return Qy(e) && Jw(e[_m]);
}
var eS = {},
    tS = 'add',
    nS = 'delete';
((Xw = Symbol.iterator), (Yw = Symbol.toStringTag));
var rS,
    iS,
    aS = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = xm),
                void 0 === n && (n = 'ObservableMap'),
                (this.enhancer_ = void 0),
                (this.name_ = void 0),
                (this[_m] = eS),
                (this.data_ = void 0),
                (this.hasMap_ = void 0),
                (this.keysAtom_ = void 0),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = t),
                (this.name_ = n),
                qy(Map) || Ly(18),
                CS(function () {
                    ((r.keysAtom_ = km('ObservableMap.keys()')),
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
                if (!$_.trackingDerivation) return this.has_(e);
                var n = this.hasMap_.get(e);
                if (!n) {
                    var r = (n = new O_(this.has_(e), Em, 'ObservableMap.key?', !1));
                    (this.hasMap_.set(e, r),
                        gw(r, function () {
                            return t.hasMap_.delete(e);
                        }));
                }
                return n.get();
            }),
            (t.set = function (e, t) {
                var n = this.has_(e);
                if (Rw(this)) {
                    var r = Dw(this, { type: n ? Uw : tS, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, Rw(this)) && !Dw(this, { type: nS, object: this, name: e })) return !1;
                if (this.has_(e)) {
                    var n = Iw(this),
                        r = n
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: nS,
                                  object: this,
                                  oldValue: this.data_.get(e).value_,
                                  name: e,
                              }
                            : null;
                    return (
                        Nw(function () {
                            var n;
                            (t.keysAtom_.reportChanged(),
                                null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                                t.data_.get(e).setNewValue_(void 0),
                                t.data_.delete(e));
                        }),
                        n && Mw(this, r),
                        !0
                    );
                }
                return !1;
            }),
            (t.updateValue_ = function (e, t) {
                var n = this.data_.get(e);
                if ((t = n.prepareNewValue_(t)) !== $_.UNCHANGED) {
                    var r = Iw(this),
                        i = r
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: Uw,
                                  object: this,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), r && Mw(this, i));
                }
            }),
            (t.addValue_ = function (e, t) {
                var n = this;
                (this.keysAtom_,
                    Nw(function () {
                        var r,
                            i = new O_(t, n.enhancer_, 'ObservableMap.key', !1);
                        (n.data_.set(e, i),
                            (t = i.value_),
                            null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                            n.keysAtom_.reportChanged());
                    }));
                var r = Iw(this),
                    i = r
                        ? {
                              observableKind: 'map',
                              debugObjectName: this.name_,
                              type: tS,
                              object: this,
                              name: e,
                              newValue: t,
                          }
                        : null;
                r && Mw(this, i);
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
                return RS({
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
                return RS({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            i = n.value;
                        return { done: r, value: r ? void 0 : [i, e.get(i)] };
                    },
                });
            }),
            (t[Xw] = function () {
                return this.entries();
            }),
            (t.forEach = function (e, t) {
                for (var n, r = vm(this); !(n = r()).done; ) {
                    var i = n.value,
                        a = i[0],
                        o = i[1];
                    e.call(t, o, a, this);
                }
            }),
            (t.merge = function (e) {
                var t = this;
                return (
                    oS(e) && (e = new Map(e)),
                    Nw(function () {
                        Xy(e)
                            ? (function (e) {
                                  var t = Object.keys(e);
                                  if (!rm) return t;
                                  var n = Object.getOwnPropertySymbols(e);
                                  return n.length
                                      ? [].concat(
                                            t,
                                            n.filter(function (t) {
                                                return My.propertyIsEnumerable.call(e, t);
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
                              : tm(e)
                                ? (e.constructor !== Map && Ly(19, e),
                                  e.forEach(function (e, n) {
                                      return t.set(n, e);
                                  }))
                                : null != e && Ly(20, e);
                    }),
                    this
                );
            }),
            (t.clear = function () {
                var e = this;
                Nw(function () {
                    R_(function () {
                        for (var t, n = vm(e.keys()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    Nw(function () {
                        for (
                            var n,
                                r = (function (e) {
                                    if (tm(e) || oS(e)) return e;
                                    if (Array.isArray(e)) return new Map(e);
                                    if (Xy(e)) {
                                        var t = new Map();
                                        for (var n in e) t.set(n, e[n]);
                                        return t;
                                    }
                                    return Ly(21, e);
                                })(e),
                                i = new Map(),
                                a = !1,
                                o = vm(t.data_.keys());
                            !(n = o()).done;
                        ) {
                            var u = n.value;
                            if (!r.has(u))
                                if (t.delete(u)) a = !0;
                                else {
                                    var l = t.data_.get(u);
                                    i.set(u, l);
                                }
                        }
                        for (var s, c = vm(r.entries()); !(s = c()).done; ) {
                            var f = s.value,
                                d = f[0],
                                h = f[1],
                                p = t.data_.has(d);
                            if ((t.set(d, h), t.data_.has(d))) {
                                var v = t.data_.get(d);
                                (i.set(d, v), p || (a = !0));
                            }
                        }
                        if (!a)
                            if (t.data_.size !== i.size) t.keysAtom_.reportChanged();
                            else
                                for (var g = t.data_.keys(), b = i.keys(), y = g.next(), m = b.next(); !y.done; ) {
                                    if (y.value !== m.value) {
                                        t.keysAtom_.reportChanged();
                                        break;
                                    }
                                    ((y = g.next()), (m = b.next()));
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
                return zw(this, e);
            }),
            (t.intercept_ = function (e) {
                return Vw(this, e);
            }),
            sm(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.keysAtom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: Yw,
                    get: function () {
                        return 'Map';
                    },
                },
            ]),
            e
        );
    })(),
    oS = em('ObservableMap', aS);
var uS = {};
((rS = Symbol.iterator), (iS = Symbol.toStringTag));
var lS = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = xm),
                void 0 === n && (n = 'ObservableSet'),
                (this.name_ = void 0),
                (this[_m] = uS),
                (this.data_ = new Set()),
                (this.atom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = void 0),
                (this.name_ = n),
                qy(Set) || Ly(22),
                (this.enhancer_ = function (e, r) {
                    return t(e, r, n);
                }),
                CS(function () {
                    ((r.atom_ = km(r.name_)), e && r.replace(e));
                }));
        }
        var t = e.prototype;
        return (
            (t.dehanceValue_ = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
                var e = this;
                Nw(function () {
                    R_(function () {
                        for (var t, n = vm(e.data_.values()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.forEach = function (e, t) {
                for (var n, r = vm(this); !(n = r()).done; ) {
                    var i = n.value;
                    e.call(t, i, i, this);
                }
            }),
            (t.add = function (e) {
                var t = this;
                if ((this.atom_, Rw(this)) && !Dw(this, { type: tS, object: this, newValue: e })) return this;
                if (!this.has(e)) {
                    Nw(function () {
                        (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
                    });
                    var n = Iw(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: tS,
                                  object: this,
                                  newValue: e,
                              }
                            : null;
                    n && Mw(this, r);
                }
                return this;
            }),
            (t.delete = function (e) {
                var t = this;
                if (Rw(this) && !Dw(this, { type: nS, object: this, oldValue: e })) return !1;
                if (this.has(e)) {
                    var n = Iw(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: nS,
                                  object: this,
                                  oldValue: e,
                              }
                            : null;
                    return (
                        Nw(function () {
                            (t.atom_.reportChanged(), t.data_.delete(e));
                        }),
                        n && Mw(this, r),
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
                return RS({
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
                return RS({
                    next: function () {
                        return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
                    },
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    sS(e) && (e = new Set(e)),
                    Nw(function () {
                        Array.isArray(e) || nm(e)
                            ? (t.clear(),
                              e.forEach(function (e) {
                                  return t.add(e);
                              }))
                            : null != e && Ly('Cannot initialize set from ' + e);
                    }),
                    this
                );
            }),
            (t.observe_ = function (e, t) {
                return zw(this, e);
            }),
            (t.intercept_ = function (e) {
                return Vw(this, e);
            }),
            (t.toJSON = function () {
                return Array.from(this);
            }),
            (t.toString = function () {
                return '[object ObservableSet]';
            }),
            (t[rS] = function () {
                return this.values();
            }),
            sm(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.atom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: iS,
                    get: function () {
                        return 'Set';
                    },
                },
            ]),
            e
        );
    })(),
    sS = em('ObservableSet', lS),
    cS = Object.create(null),
    fS = 'remove',
    dS = (function () {
        function e(e, t, n, r) {
            (void 0 === t && (t = new Map()),
                void 0 === r && (r = qm),
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
                (this.keysAtom_ = new wm('ObservableObject.keys')),
                (this.isPlainObject_ = Xy(this.target_)));
        }
        var t = e.prototype;
        return (
            (t.getObservablePropValue_ = function (e) {
                return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
                var n = this.values_.get(e);
                if (n instanceof P_) return (n.set(t), !0);
                if (Rw(this)) {
                    var r = Dw(this, { type: Uw, object: this.proxy_ || this.target_, name: e, newValue: t });
                    if (!r) return null;
                    t = r.newValue;
                }
                if ((t = n.prepareNewValue_(t)) !== $_.UNCHANGED) {
                    var i = Iw(this),
                        a = i
                            ? {
                                  type: Uw,
                                  observableKind: 'object',
                                  debugObjectName: this.name_,
                                  object: this.proxy_ || this.target_,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), i && Mw(this, a));
                }
                return !0;
            }),
            (t.get_ = function (e) {
                return ($_.trackingDerivation && !om(this.target_, e) && this.has_(e), this.target_[e]);
            }),
            (t.set_ = function (e, t, n) {
                return (
                    void 0 === n && (n = !1),
                    om(this.target_, e)
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
                if (!$_.trackingDerivation) return e in this.target_;
                this.pendingKeys_ || (this.pendingKeys_ = new Map());
                var t = this.pendingKeys_.get(e);
                return (
                    t ||
                        ((t = new O_(e in this.target_, Em, 'ObservableObject.key?', !1)), this.pendingKeys_.set(e, t)),
                    t.get()
                );
            }),
            (t.make_ = function (e, t) {
                if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                    if (!(e in this.target_)) {
                        var n;
                        if (null != (n = this.target_[gm]) && n[e]) return;
                        Ly(1, t.annotationType_, this.name_ + '.' + e.toString());
                    }
                    for (var r = this.target_; r && r !== My; ) {
                        var i = Iy(r, e);
                        if (i) {
                            var a = t.make_(this, e, i, r);
                            if (0 === a) return;
                            if (1 === a) break;
                        }
                        r = Object.getPrototypeOf(r);
                    }
                    bS(this, t, e);
                }
            }),
            (t.extend_ = function (e, t, n, r) {
                if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                    return this.defineProperty_(e, t, r);
                var i = n.extend_(this, e, t, r);
                return (i && bS(this, n, e), i);
            }),
            (t.defineProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    q_();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (Rw(this)) {
                        var i = Dw(this, { object: this.proxy_ || this.target_, name: e, type: tS, newValue: t.value });
                        if (!i) return null;
                        var a = i.newValue;
                        t.value !== a && (t = cm({}, t, { value: a }));
                    }
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                    } else zy(this.target_, e, t);
                    this.notifyPropertyAddition_(e, t.value);
                } finally {
                    G_();
                }
                return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
                (void 0 === r && (r = !1), this.keysAtom_);
                try {
                    q_();
                    var i = this.delete_(e);
                    if (!i) return i;
                    if (Rw(this)) {
                        var a = Dw(this, { object: this.proxy_ || this.target_, name: e, type: tS, newValue: t });
                        if (!a) return null;
                        t = a.newValue;
                    }
                    var o = vS(e),
                        u = {
                            configurable: !$_.safeDescriptors || this.isPlainObject_,
                            enumerable: !0,
                            get: o.get,
                            set: o.set,
                        };
                    if (r) {
                        if (!Reflect.defineProperty(this.target_, e, u)) return !1;
                    } else zy(this.target_, e, u);
                    var l = new O_(t, n, 'ObservableObject.key', !1);
                    (this.values_.set(e, l), this.notifyPropertyAddition_(e, l.value_));
                } finally {
                    G_();
                }
                return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    q_();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (Rw(this))
                        if (!Dw(this, { object: this.proxy_ || this.target_, name: e, type: tS, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var i = vS(e),
                        a = {
                            configurable: !$_.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: i.get,
                            set: i.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, a)) return !1;
                    } else zy(this.target_, e, a);
                    (this.values_.set(e, new P_(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    G_();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !om(this.target_, e))) return !0;
                if (Rw(this) && !Dw(this, { object: this.proxy_ || this.target_, name: e, type: fS })) return null;
                try {
                    var n, r;
                    q_();
                    var i,
                        a = Iw(this),
                        o = this.values_.get(e),
                        u = void 0;
                    if (!o && a) u = null == (i = Iy(this.target_, e)) ? void 0 : i.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (o && (this.values_.delete(e), o instanceof O_ && (u = o.value_), X_(o)),
                        this.keysAtom_.reportChanged(),
                        null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
                        a)
                    ) {
                        var l = {
                            type: fS,
                            observableKind: 'object',
                            object: this.proxy_ || this.target_,
                            debugObjectName: this.name_,
                            oldValue: u,
                            name: e,
                        };
                        (0, a && Mw(this, l));
                    }
                } finally {
                    G_();
                }
                return !0;
            }),
            (t.observe_ = function (e, t) {
                return zw(this, e);
            }),
            (t.intercept_ = function (e) {
                return Vw(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
                var n,
                    r,
                    i = Iw(this);
                if (i) {
                    var a = i
                        ? {
                              type: tS,
                              observableKind: 'object',
                              debugObjectName: this.name_,
                              object: this.proxy_ || this.target_,
                              name: e,
                              newValue: t,
                          }
                        : null;
                    i && Mw(this, a);
                }
                (null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(!0),
                    this.keysAtom_.reportChanged());
            }),
            (t.ownKeys_ = function () {
                return (this.keysAtom_.reportObserved(), im(this.target_));
            }),
            (t.keys_ = function () {
                return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
            }),
            e
        );
    })();
function hS(e, t) {
    var n;
    if (om(e, _m)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
        i = new dS(
            e,
            new Map(),
            String(r),
            (function (e) {
                var t;
                return e ? (null != (t = e.defaultDecorator) ? t : Gm(e)) : void 0;
            })(t),
        );
    return (Jy(e, _m, i), e);
}
var pS = em('ObservableObjectAdministration', dS);
function vS(e) {
    return (
        cS[e] ||
        (cS[e] = {
            get: function () {
                return this[_m].getObservablePropValue_(e);
            },
            set: function (t) {
                return this[_m].setObservablePropValue_(e, t);
            },
        })
    );
}
function gS(e) {
    return !!Qy(e) && pS(e[_m]);
}
function bS(e, t, n) {
    var r;
    null == (r = e.target_[gm]) || delete r[n];
}
var yS = kS(0),
    mS = (function () {
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
    _S = 0,
    wS = function () {};
!(function (e, t) {
    Object.setPrototypeOf
        ? Object.setPrototypeOf(e.prototype, t)
        : void 0 !== e.prototype.__proto__
          ? (e.prototype.__proto__ = t)
          : (e.prototype = t);
})(wS, Array.prototype);
var SS = (function (e, t, n) {
    function r(t, n, r, i) {
        var a;
        return (
            void 0 === r && (r = 'ObservableArray'),
            void 0 === i && (i = !1),
            (a = e.call(this) || this),
            CS(function () {
                var e = new $w(r, n, i, !0);
                ((e.proxy_ = hm(a)),
                    Zy(hm(a), _m, e),
                    t && t.length && a.spliceWithArray(0, 0, t),
                    mS && Object.defineProperty(hm(a), '0', yS));
            }),
            a
        );
    }
    fm(r, e);
    var i = r.prototype;
    return (
        (i.concat = function () {
            this[_m].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return Array.prototype.concat.apply(
                this.slice(),
                t.map(function (e) {
                    return Zw(e) ? e.slice() : e;
                }),
            );
        }),
        (i[n] = function () {
            var e = this,
                t = 0;
            return RS({
                next: function () {
                    return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
                },
            });
        }),
        sm(r, [
            {
                key: 'length',
                get: function () {
                    return this[_m].getArrayLength_();
                },
                set: function (e) {
                    this[_m].setArrayLength_(e);
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
})(wS, Symbol.toStringTag, Symbol.iterator);
function kS(e) {
    return {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this[_m].get_(e);
        },
        set: function (t) {
            this[_m].set_(e, t);
        },
    };
}
function OS(e) {
    zy(SS.prototype, '' + e, kS(e));
}
function xS(e) {
    if (e > _S) {
        for (var t = _S; t < e + 100; t++) OS(t);
        _S = e;
    }
}
function ES(e, t, n) {
    return new SS(e, t, n);
}
function PS(e, t) {
    if ('object' == typeof e && null !== e) {
        if (Zw(e)) return (void 0 !== t && Ly(23), e[_m].atom_);
        if (sS(e)) return e.atom_;
        if (oS(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return (n || Ly(25, t, AS(e)), n);
        }
        if (gS(e)) {
            if (!t) return Ly(26);
            var r = e[_m].values_.get(t);
            return (r || Ly(27, t, AS(e)), r);
        }
        if (Sm(e) || A_(e) || nw(e)) return e;
    } else if (qy(e) && nw(e[_m])) return e[_m];
    Ly(28);
}
function AS(e, t) {
    var n;
    if (void 0 !== t) n = PS(e, t);
    else {
        if (dw(e)) return e.name;
        n =
            gS(e) || oS(e) || sS(e)
                ? (function (e, t) {
                      return (
                          e || Ly(29),
                          Sm(e) || A_(e) || nw(e) || oS(e) || sS(e) ? e : e[_m] ? e[_m] : void Ly(24, e)
                      );
                  })(e)
                : PS(e);
    }
    return n.name_;
}
function CS(e) {
    var t = V_(),
        n = w_(!0);
    q_();
    try {
        return e();
    } finally {
        (G_(), S_(n), D_(t));
    }
}
(Object.entries(Ww).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && Jy(SS.prototype, t, n);
}),
    xS(1e3));
var jS = My.toString;
function NS(e, t, n) {
    return (void 0 === n && (n = -1), TS(e, t, n));
}
function TS(e, t, n, r, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var a = typeof e;
    if ('function' !== a && 'object' !== a && 'object' != typeof t) return !1;
    var o = jS.call(e);
    if (o !== jS.call(t)) return !1;
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
    ((e = LS(e)), (t = LS(t)));
    var u = '[object Array]' === o;
    if (!u) {
        if ('object' != typeof e || 'object' != typeof t) return !1;
        var l = e.constructor,
            s = t.constructor;
        if (
            l !== s &&
            !(qy(l) && l instanceof l && qy(s) && s instanceof s) &&
            'constructor' in e &&
            'constructor' in t
        )
            return !1;
    }
    if (0 === n) return !1;
    (n < 0 && (n = -1), (i = i || []));
    for (var c = (r = r || []).length; c--; ) if (r[c] === e) return i[c] === t;
    if ((r.push(e), i.push(t), u)) {
        if ((c = e.length) !== t.length) return !1;
        for (; c--; ) if (!TS(e[c], t[c], n - 1, r, i)) return !1;
    } else {
        var f,
            d = Object.keys(e);
        if (((c = d.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (!om(t, (f = d[c])) || !TS(e[f], t[f], n - 1, r, i)) return !1;
    }
    return (r.pop(), i.pop(), !0);
}
function LS(e) {
    return Zw(e) ? e.slice() : tm(e) || oS(e) || nm(e) || sS(e) ? Array.from(e.entries()) : e;
}
function RS(e) {
    return ((e[Symbol.iterator] = VS), e);
}
function VS() {
    return this;
}
if (
    (['Symbol', 'Map', 'Set'].forEach(function (e) {
        void 0 === Vy()[e] && Ly("MobX requires global '" + e + "' to be available or polyfilled");
    }),
    'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
                return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
            },
            extras: { getDebugName: AS },
            $mobx: _m,
        }),
    !M.useState)
)
    throw new Error('mobx-react-lite requires React with Hooks support');
if (
    !function (e, t, n) {
        return (
            CS(function () {
                var r = hS(e, n)[_m];
                (null != t ||
                    (t = (function (e) {
                        return (om(e, gm) || Jy(e, gm, cm({}, e[gm])), e[gm]);
                    })(e)),
                    im(t).forEach(function (e) {
                        return r.make_(e, t[e]);
                    }));
            }),
            e
        );
    }
)
    throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
function DS(e) {
    e();
}
function IS(e) {
    return Sw(PS(e, t));
    var t;
}
var zS = new ((function () {
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
    MS = { exports: {} },
    BS = {},
    US = M;
var FS =
        'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    $S = US.useState,
    KS = US.useEffect,
    WS = US.useLayoutEffect,
    HS = US.useDebugValue;
function qS(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !FS(e, n);
    } catch (r) {
        return !0;
    }
}
var GS =
    'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
              return t();
          }
        : function (e, t) {
              var n = t(),
                  r = $S({ inst: { value: n, getSnapshot: t } }),
                  i = r[0].inst,
                  a = r[1];
              return (
                  WS(
                      function () {
                          ((i.value = n), (i.getSnapshot = t), qS(i) && a({ inst: i }));
                      },
                      [e, n, t],
                  ),
                  KS(
                      function () {
                          return (
                              qS(i) && a({ inst: i }),
                              e(function () {
                                  qS(i) && a({ inst: i });
                              })
                          );
                      },
                      [e],
                  ),
                  HS(n),
                  n
              );
          };
((BS.useSyncExternalStore = void 0 !== US.useSyncExternalStore ? US.useSyncExternalStore : GS), (MS.exports = BS));
var QS,
    XS,
    YS = MS.exports;
function JS(e) {
    e.reaction = new Y_('observer'.concat(e.name), function () {
        var t;
        ((e.stateVersion = Symbol()), null === (t = e.onStoreChange) || void 0 === t || t.call(e));
    });
}
var ZS = 'function' == typeof Symbol && Symbol.for,
    ek =
        null !==
            (XS =
                null === (QS = Object.getOwnPropertyDescriptor(function () {}, 'name')) || void 0 === QS
                    ? void 0
                    : QS.configurable) &&
        void 0 !== XS &&
        XS,
    tk = ZS
        ? Symbol.for('react.forward_ref')
        : 'function' == typeof M.forwardRef &&
          M.forwardRef(function (e) {
              return null;
          }).$$typeof,
    nk = ZS
        ? Symbol.for('react.memo')
        : 'function' == typeof M.memo &&
          M.memo(function (e) {
              return null;
          }).$$typeof;
function rk(e, t) {
    if (nk && e.$$typeof === nk)
        throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
        );
    var n = (void 0, !1),
        r = e,
        i = e.displayName || e.name;
    if (tk && e.$$typeof === tk && ((n = !0), 'function' != typeof (r = e.render)))
        throw new Error('[mobx-react-lite] `render` property of ForwardRef was not a function');
    var a = function (e, t) {
        return (function (e, t) {
            void 0 === t && (t = 'observed');
            var n = B.useRef(null);
            if (!n.current) {
                var r = {
                    reaction: null,
                    onStoreChange: null,
                    stateVersion: Symbol(),
                    name: t,
                    subscribe: function (e) {
                        return (
                            zS.unregister(r),
                            (r.onStoreChange = e),
                            r.reaction || (JS(r), (r.stateVersion = Symbol())),
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
                (o.reaction || (JS(o), zS.register(n, o, o)),
                B.useDebugValue(o.reaction, IS),
                YS.useSyncExternalStore(o.subscribe, o.getSnapshot, o.getSnapshot),
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
        ek && Object.defineProperty(a, 'name', { value: e.name, writable: !0, configurable: !0 }),
        e.contextTypes && (a.contextTypes = e.contextTypes),
        n && (a = M.forwardRef(a)),
        (function (e, t) {
            Object.keys(e).forEach(function (n) {
                ak[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
            });
        })(e, (a = M.memo(a))),
        a
    );
}
var ik,
    ak = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function ok(e) {
    var t,
        n,
        r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
        if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = ok(e[t])) && (r && (r += ' '), (r += n));
        else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
}
((ik = Mf.unstable_batchedUpdates) || (ik = DS), ww({ reactionScheduler: ik }), zS.finalizeAllImmediately);
const uk = (e) => ('boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e),
    lk = function () {
        for (var e, t, n = 0, r = ''; n < arguments.length; )
            (e = arguments[n++]) && (t = ok(e)) && (r && (r += ' '), (r += t));
        return r;
    },
    sk = (e, t) => (n) => {
        var r;
        if (null == (null == t ? void 0 : t.variants))
            return lk(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        const { variants: i, defaultVariants: a } = t,
            o = Object.keys(i).map((e) => {
                const t = null == n ? void 0 : n[e],
                    r = null == a ? void 0 : a[e];
                if (null === t) return null;
                const o = uk(t) || uk(r);
                return i[e][o];
            }),
            u =
                n &&
                Object.entries(n).reduce((e, t) => {
                    let [n, r] = t;
                    return (void 0 === r || (e[n] = r), e);
                }, {}),
            l =
                null == t || null === (r = t.compoundVariants) || void 0 === r
                    ? void 0
                    : r.reduce((e, t) => {
                          let { class: n, className: r, ...i } = t;
                          return Object.entries(i).every((e) => {
                              let [t, n] = e;
                              return Array.isArray(n) ? n.includes({ ...a, ...u }[t]) : { ...a, ...u }[t] === n;
                          })
                              ? [...e, n, r]
                              : e;
                      }, []);
        return lk(e, o, l, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
    };
export {
    B as R,
    ve as a,
    be as b,
    Ce as c,
    ge as d,
    $f as e,
    Op as f,
    Ne as g,
    sk as h,
    rk as i,
    G as j,
    Ty as k,
    wh as o,
    M as r,
    Gh as u,
};
