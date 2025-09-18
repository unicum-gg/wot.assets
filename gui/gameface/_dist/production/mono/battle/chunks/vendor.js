function e(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var t = { exports: {} },
    n = {},
    r = { exports: {} },
    i = {},
    o = Symbol.for('react.element'),
    a = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    u = Symbol.for('react.strict_mode'),
    l = Symbol.for('react.profiler'),
    c = Symbol.for('react.provider'),
    f = Symbol.for('react.context'),
    d = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    p = Symbol.for('react.memo'),
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
    b = Object.assign,
    y = {};
function _(e, t, n) {
    ((this.props = e), (this.context = t), (this.refs = y), (this.updater = n || m));
}
function w() {}
function S(e, t, n) {
    ((this.props = e), (this.context = t), (this.refs = y), (this.updater = n || m));
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
var O = (S.prototype = new w());
((O.constructor = S), b(O, _.prototype), (O.isPureReactComponent = !0));
var k = Array.isArray,
    x = Object.prototype.hasOwnProperty,
    P = { current: null },
    E = { key: !0, ref: !0, __self: !0, __source: !0 };
function A(e, t, n) {
    var r,
        i = {},
        a = null,
        s = null;
    if (null != t)
        for (r in (void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (a = '' + t.key), t))
            x.call(t, r) && !E.hasOwnProperty(r) && (i[r] = t[r]);
    var u = arguments.length - 2;
    if (1 === u) i.children = n;
    else if (1 < u) {
        for (var l = Array(u), c = 0; c < u; c++) l[c] = arguments[c + 2];
        i.children = l;
    }
    if (e && e.defaultProps) for (r in (u = e.defaultProps)) void 0 === i[r] && (i[r] = u[r]);
    return { $$typeof: o, type: e, key: a, ref: s, props: i, _owner: P.current };
}
function T(e) {
    return 'object' == typeof e && null !== e && e.$$typeof === o;
}
var C = /\/+/g;
function j(e, t) {
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
function U(e, t, n, r, i) {
    var s = typeof e;
    ('undefined' !== s && 'boolean' !== s) || (e = null);
    var u = !1;
    if (null === e) u = !0;
    else
        switch (s) {
            case 'string':
            case 'number':
                u = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case o:
                    case a:
                        u = !0;
                }
        }
    if (u)
        return (
            (i = i((u = e))),
            (e = '' === r ? '.' + j(u, 0) : r),
            k(i)
                ? ((n = ''),
                  null != e && (n = e.replace(C, '$&/') + '/'),
                  U(i, t, n, '', function (e) {
                      return e;
                  }))
                : null != i &&
                  (T(i) &&
                      (i = (function (e, t) {
                          return { $$typeof: o, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                      })(i, n + (!i.key || (u && u.key === i.key) ? '' : ('' + i.key).replace(C, '$&/') + '/') + e)),
                  t.push(i)),
            1
        );
    if (((u = 0), (r = '' === r ? '.' : r + ':'), k(e)))
        for (var l = 0; l < e.length; l++) {
            var c = r + j((s = e[l]), l);
            u += U(s, t, n, c, i);
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
        for (e = c.call(e), l = 0; !(s = e.next()).done; ) u += U((s = s.value), t, n, (c = r + j(s, l++)), i);
    else if ('object' === s)
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
function B(e, t, n) {
    if (null == e) return e;
    var r = [],
        i = 0;
    return (
        U(e, r, '', '', function (e) {
            return t.call(n, e, i++);
        }),
        r
    );
}
function N(e) {
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
var W = { current: null },
    R = { transition: null },
    I = { ReactCurrentDispatcher: W, ReactCurrentBatchConfig: R, ReactCurrentOwner: P };
function L() {
    throw Error('act(...) is not supported in production builds of React.');
}
((i.Children = {
    map: B,
    forEach: function (e, t, n) {
        B(
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
            B(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            B(e, function (e) {
                return e;
            }) || []
        );
    },
    only: function (e) {
        if (!T(e)) throw Error('React.Children.only expected to receive a single React element child.');
        return e;
    },
}),
    (i.Component = _),
    (i.Fragment = s),
    (i.Profiler = l),
    (i.PureComponent = S),
    (i.StrictMode = u),
    (i.Suspense = h),
    (i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
    (i.act = L),
    (i.cloneElement = function (e, t, n) {
        if (null == e)
            throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
        var r = b({}, e.props),
            i = e.key,
            a = e.ref,
            s = e._owner;
        if (null != t) {
            if (
                (void 0 !== t.ref && ((a = t.ref), (s = P.current)),
                void 0 !== t.key && (i = '' + t.key),
                e.type && e.type.defaultProps)
            )
                var u = e.type.defaultProps;
            for (l in t) x.call(t, l) && !E.hasOwnProperty(l) && (r[l] = void 0 === t[l] && void 0 !== u ? u[l] : t[l]);
        }
        var l = arguments.length - 2;
        if (1 === l) r.children = n;
        else if (1 < l) {
            u = Array(l);
            for (var c = 0; c < l; c++) u[c] = arguments[c + 2];
            r.children = u;
        }
        return { $$typeof: o, type: e.type, key: i, ref: a, props: r, _owner: s };
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
    (i.isValidElement = T),
    (i.lazy = function (e) {
        return { $$typeof: v, _payload: { _status: -1, _result: e }, _init: N };
    }),
    (i.memo = function (e, t) {
        return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
    }),
    (i.startTransition = function (e) {
        var t = R.transition;
        R.transition = {};
        try {
            e();
        } finally {
            R.transition = t;
        }
    }),
    (i.unstable_act = L),
    (i.useCallback = function (e, t) {
        return W.current.useCallback(e, t);
    }),
    (i.useContext = function (e) {
        return W.current.useContext(e);
    }),
    (i.useDebugValue = function () {}),
    (i.useDeferredValue = function (e) {
        return W.current.useDeferredValue(e);
    }),
    (i.useEffect = function (e, t) {
        return W.current.useEffect(e, t);
    }),
    (i.useId = function () {
        return W.current.useId();
    }),
    (i.useImperativeHandle = function (e, t, n) {
        return W.current.useImperativeHandle(e, t, n);
    }),
    (i.useInsertionEffect = function (e, t) {
        return W.current.useInsertionEffect(e, t);
    }),
    (i.useLayoutEffect = function (e, t) {
        return W.current.useLayoutEffect(e, t);
    }),
    (i.useMemo = function (e, t) {
        return W.current.useMemo(e, t);
    }),
    (i.useReducer = function (e, t, n) {
        return W.current.useReducer(e, t, n);
    }),
    (i.useRef = function (e) {
        return W.current.useRef(e);
    }),
    (i.useState = function (e) {
        return W.current.useState(e);
    }),
    (i.useSyncExternalStore = function (e, t, n) {
        return W.current.useSyncExternalStore(e, t, n);
    }),
    (i.useTransition = function () {
        return W.current.useTransition();
    }),
    (i.version = '18.3.1'),
    (r.exports = i));
var M = r.exports;
const V = e(M);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var D = M,
    z = Symbol.for('react.element'),
    F = Symbol.for('react.fragment'),
    $ = Object.prototype.hasOwnProperty,
    Q = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    q = { key: !0, ref: !0, __self: !0, __source: !0 };
function K(e, t, n) {
    var r,
        i = {},
        o = null,
        a = null;
    for (r in (void 0 !== n && (o = '' + n), void 0 !== t.key && (o = '' + t.key), void 0 !== t.ref && (a = t.ref), t))
        $.call(t, r) && !q.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
    return { $$typeof: z, type: e, key: o, ref: a, props: i, _owner: Q.current };
}
((n.Fragment = F), (n.jsx = K), (n.jsxs = K), (t.exports = n));
var H = t.exports,
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
function X(e, t) {
    if ('function' != typeof t && null !== t)
        throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
    function n() {
        this.constructor = e;
    }
    (G(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())));
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
function Z(e, t, n) {
    if (n || 2 === arguments.length)
        for (var r, i = 0, o = t.length; i < o; i++)
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
            (t.assert = function (e, n, r, i, o) {
                if (!e) throw new t(n, r, i, o);
                return e;
            }),
            t
        );
    })(ee),
    ne = (function (e) {
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
    oe = { SINGLETON: 'SINGLETON', TRANSIENT: 'TRANSIENT', SCOPED: 'SCOPED' };
function ae(e) {
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
            if (se(u)) n++;
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
                        if (fe(u)) return (l(), r);
                        n++;
                }
        }
    }
    function l() {
        for (var t, o = e.charAt(n), a = ++n; (t = e.charAt(n)), ce.test(t); ) n++;
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
                if (se(i)) {
                    n++;
                    continue;
                }
                if (ue(i)) {
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
function se(e) {
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
var le = /^[_$a-zA-Z\xA0-\uFFFF]$/,
    ce = /^[._$a-zA-Z0-9\xA0-\uFFFF]$/;
function fe(e) {
    return le.test(e);
}
function de(e) {
    if ('function' != typeof e) return !1;
    var t = ae(e.toString()),
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
    t = we({ lifetime: oe.TRANSIENT }, t, e[pe]);
    var n = ke(e);
    return ye(be(Y({ resolve: n }, t)));
}
function me(e, t) {
    if (!he(e)) throw new te('asClass', 'Type', 'class', e);
    t = we({ lifetime: oe.TRANSIENT }, t, e[pe]);
    var n = ke(function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return Reflect.construct(e, t);
    }, e);
    return ye(be(Y(Y({}, t), { resolve: n })));
}
function be(e) {
    function t(e) {
        return be(Y(Y({}, this), { lifetime: e }));
    }
    function n(e) {
        return be(Y(Y({}, this), { injectionMode: e }));
    }
    return Se(e, {
        setLifetime: t,
        inject: function (e) {
            return be(Y(Y({}, this), { injector: e }));
        },
        transient: _e(t, oe.TRANSIENT),
        scoped: _e(t, oe.SCOPED),
        singleton: _e(t, oe.SINGLETON),
        setInjectionMode: n,
        proxy: _e(n, ie.PROXY),
        classic: _e(n, ie.CLASSIC),
    });
}
function ye(e) {
    return Se(e, {
        disposer: function (e) {
            return ye(Y(Y({}, this), { dispose: e }));
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
function Oe(e, t) {
    var n,
        r = t(e),
        i = ((n = Z(Z([], Reflect.ownKeys(e.cradle), !0), Reflect.ownKeys(r), !0)), Array.from(new Set(n)));
    return new Proxy(
        {},
        {
            get: function (t, n) {
                return n === Symbol.iterator
                    ? function () {
                          var t, n, i, o, a, s, u, l;
                          return J(this, function (c) {
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
function ke(e, t) {
    t || (t = e);
    var n = xe(t);
    return function (t) {
        if ((this.injectionMode || t.options.injectionMode || ie.PROXY) !== ie.CLASSIC) {
            var r = this.injector ? Oe(t, this.injector) : t.cradle;
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
function xe(e) {
    var t = (function (e) {
        var t = ae(e),
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
        return 'function' == typeof n && n !== Function.prototype ? xe(n) : [];
    }
    return t;
}
var Pe = Symbol('familyTree'),
    Ee = Symbol('rollUpRegistrations'),
    Ae = 'AwilixContainerCradle';
function Te(e) {
    return (void 0 === e && (e = {}), Ce(e));
}
function Ce(e, t, n) {
    var r;
    e = Y({ injectionMode: ie.PROXY, strict: !1 }, e);
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
                    return Ce(e, s, i);
                },
                register: function (n, r) {
                    for (
                        var i = (function (e, t) {
                                var n,
                                    r = e;
                                return 'string' == typeof r || 'symbol' == typeof r ? (((n = {})[e] = t), n) : r;
                            })(n, r),
                            a = Z(Z([], Object.keys(i), !0), Object.getOwnPropertySymbols(i), !0),
                            u = 0,
                            l = a;
                        u < l.length;
                        u++
                    ) {
                        var c = l[u],
                            f = i[c];
                        if (e.strict && f.lifetime === oe.SINGLETON && t)
                            throw new re(c, 'Cannot register a singleton on a scoped container.');
                        o[c] = f;
                    }
                    return s;
                },
                build: function (e, t) {
                    if (e && e.resolve) return e.resolve(s);
                    var n = 'build',
                        r = 'targetOrResolver';
                    return (
                        te.assert(e, n, r, 'a registration, function or class', e),
                        te.assert('function' == typeof e, n, r, 'a function or class', e),
                        (de(e) ? me(e, t) : ge(e, t)).resolve(s)
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
            })[Ee] = f),
            Object.defineProperty(r, 'registrations', {
                get: function () {
                    return f();
                },
                enumerable: !1,
                configurable: !0,
            }),
            r),
        u = t ? [s].concat(t[Pe]) : [s];
    s[Pe] = u;
    var l,
        c = (l = u)[l.length - 1];
    return s;
    function f() {
        return Y(Y({}, t && t[Ee]()), o);
    }
    function d() {
        var e, t, n, r, i;
        return J(this, function (o) {
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
                throw new ne(t, i, 'Cyclic dependencies detected.');
            if ('toJSON' === t) return h;
            if ('constructor' === t) return Te;
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
            var o = r.lifetime || oe.TRANSIENT;
            if (e.strict && !r.isLeakSafe) {
                var a = i.findIndex(function (e) {
                    var t,
                        n,
                        r = e.lifetime;
                    return (
                        (n = o),
                        ((t = r) === oe.SINGLETON && n !== oe.SINGLETON) || (t === oe.SCOPED && n === oe.TRANSIENT)
                    );
                });
                if (a > -1)
                    throw new ne(
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
                case oe.TRANSIENT:
                    l = r.resolve(s);
                    break;
                case oe.SINGLETON:
                    (u = c.cache.get(t))
                        ? (l = u.value)
                        : ((l = r.resolve(e.strict ? c : s)), c.cache.set(t, { resolver: r, value: l }));
                    break;
                case oe.SCOPED:
                    if (void 0 !== (u = s.cache.get(t))) {
                        l = u.value;
                        break;
                    }
                    ((l = r.resolve(s)), s.cache.set(t, { resolver: r, value: l }));
                    break;
                default:
                    throw new ne(t, i, 'Unknown lifetime "'.concat(r.lifetime, '"'));
            }
            return (i.pop(), l);
        } catch (f) {
            throw ((i.length = 0), f);
        }
    }
}
var je = {},
    Ue = { exports: {} },
    Be = {},
    Ne = { exports: {} },
    We = {};
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
        g = 'function' == typeof setTimeout ? setTimeout : null,
        m = 'function' == typeof clearTimeout ? clearTimeout : null,
        b = 'undefined' != typeof setImmediate ? setImmediate : null;
    function y(e) {
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
        if (((v = !1), y(e), !p))
            if (null !== n(u)) ((p = !0), U(w));
            else {
                var t = n(l);
                null !== t && B(_, t.startTime - e);
            }
    }
    function w(t, i) {
        ((p = !1), v && ((v = !1), m(x), (x = -1)), (h = !0));
        var o = d;
        try {
            for (y(i), f = n(u); null !== f && (!(f.expirationTime > i) || (t && !A())); ) {
                var a = f.callback;
                if ('function' == typeof a) {
                    ((f.callback = null), (d = f.priorityLevel));
                    var s = a(f.expirationTime <= i);
                    ((i = e.unstable_now()), 'function' == typeof s ? (f.callback = s) : f === n(u) && r(u), y(i));
                } else r(u);
                f = n(u);
            }
            if (null !== f) var c = !0;
            else {
                var g = n(l);
                (null !== g && B(_, g.startTime - i), (c = !1));
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
        O = !1,
        k = null,
        x = -1,
        P = 5,
        E = -1;
    function A() {
        return !(e.unstable_now() - E < P);
    }
    function T() {
        if (null !== k) {
            var t = e.unstable_now();
            E = t;
            var n = !0;
            try {
                n = k(!0, t);
            } finally {
                n ? S() : ((O = !1), (k = null));
            }
        } else O = !1;
    }
    if ('function' == typeof b)
        S = function () {
            b(T);
        };
    else if ('undefined' != typeof MessageChannel) {
        var C = new MessageChannel(),
            j = C.port2;
        ((C.port1.onmessage = T),
            (S = function () {
                j.postMessage(null);
            }));
    } else
        S = function () {
            g(T, 0);
        };
    function U(e) {
        ((k = e), O || ((O = !0), S()));
    }
    function B(t, n) {
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
            p || h || ((p = !0), U(w));
        }),
        (e.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
                ? console.error(
                      'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                  )
                : (P = 0 < e ? Math.floor(1e3 / e) : 5);
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
                      null === n(u) && r === n(l) && (v ? (m(x), (x = -1)) : (v = !0), B(_, o - a)))
                    : ((r.sortIndex = s), t(u, r), p || h || ((p = !0), U(w))),
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
})(We),
    (Ne.exports = We));
var Re = Ne.exports,
    Ie = M,
    Le = Re;
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
var Ve = new Set(),
    De = {};
function ze(e, t) {
    (Fe(e, t), Fe(e + 'Capture', t));
}
function Fe(e, t) {
    for (De[e] = t, e = 0; e < t.length; e++) Ve.add(t[e]);
}
var $e = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    Qe = Object.prototype.hasOwnProperty,
    qe =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ke = {},
    He = {};
function Ge(e, t, n, r, i, o, a) {
    ((this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = a));
}
var Xe = {};
('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        Xe[e] = new Ge(e, 0, !1, e, null, !1, !1);
    }),
    [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
        var t = e[0];
        Xe[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
        Xe[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
        Xe[e] = new Ge(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (e) {
            Xe[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
        Xe[e] = new Ge(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
        Xe[e] = new Ge(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
        Xe[e] = new Ge(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
        Xe[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
                  return !!Qe.call(He, e) || (!Qe.call(Ke, e) && (qe.test(e) ? (He[e] = !0) : ((Ke[e] = !0), !1)));
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
        Xe[t] = new Ge(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
        var t = e.replace(Ye, Je);
        Xe[t] = new Ge(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(Ye, Je);
        Xe[t] = new Ge(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
        Xe[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Xe.xlinkHref = new Ge('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        Xe[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
var et = Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    tt = Symbol.for('react.element'),
    nt = Symbol.for('react.portal'),
    rt = Symbol.for('react.fragment'),
    it = Symbol.for('react.strict_mode'),
    ot = Symbol.for('react.profiler'),
    at = Symbol.for('react.provider'),
    st = Symbol.for('react.context'),
    ut = Symbol.for('react.forward_ref'),
    lt = Symbol.for('react.suspense'),
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
    mt = Object.assign;
function bt(e) {
    if (void 0 === gt)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            gt = (t && t[1]) || '';
        }
    return '\n' + gt + e;
}
var yt = !1;
function _t(e, t) {
    if (!e || yt) return '';
    yt = !0;
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
        ((yt = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? bt(e) : '';
}
function wt(e) {
    switch (e.tag) {
        case 5:
            return bt(e.type);
        case 16:
            return bt('Lazy');
        case 13:
            return bt('Suspense');
        case 19:
            return bt('SuspenseList');
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
        case ot:
            return 'Profiler';
        case it:
            return 'StrictMode';
        case lt:
            return 'Suspense';
        case ct:
            return 'SuspenseList';
    }
    if ('object' == typeof e)
        switch (e.$$typeof) {
            case st:
                return (e.displayName || 'Context') + '.Consumer';
            case at:
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
function Ot(e) {
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
function kt(e) {
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
function Pt(e) {
    e._valueTracker ||
        (e._valueTracker = (function (e) {
            var t = xt(e) ? 'checked' : 'value',
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
function Et(e) {
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
function Tt(e, t) {
    var n = t.checked;
    return mt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
    });
}
function Ct(e, t) {
    var n = null == t.defaultValue ? '' : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
    ((n = kt(null != t.value ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
        }));
}
function jt(e, t) {
    null != (t = t.checked) && Ze(e, 'checked', t, !1);
}
function Ut(e, t) {
    jt(e, t);
    var n = kt(t.value),
        r = t.type;
    if (null != n)
        'number' === r
            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
    (t.hasOwnProperty('value')
        ? Nt(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && Nt(e, t.type, kt(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked));
}
function Bt(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
        ((t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t));
    }
    ('' !== (n = e.name) && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        '' !== n && (e.name = n));
}
function Nt(e, t, n) {
    ('number' === t && At(e.ownerDocument) === e) ||
        (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Wt = Array.isArray;
function Rt(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            ((i = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0));
    } else {
        for (n = '' + kt(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) return ((e[i].selected = !0), void (r && (e[i].defaultSelected = !0)));
            null !== t || e[i].disabled || (t = e[i]);
        }
        null !== t && (t.selected = !0);
    }
}
function It(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(Me(91));
    return mt({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Lt(e, t) {
    var n = t.value;
    if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(Me(92));
            if (Wt(n)) {
                if (1 < n.length) throw Error(Me(93));
                n = n[0];
            }
            t = n;
        }
        (null == t && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: kt(n) };
}
function Mt(e, t) {
    var n = kt(t.value),
        r = kt(t.defaultValue);
    (null != n &&
        ((n = '' + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = '' + r));
}
function Vt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
}
function Dt(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}
function zt(e, t) {
    return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? Dt(t)
        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
}
var Ft,
    $t,
    Qt =
        (($t = function (e, t) {
            if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e) e.innerHTML = t;
            else {
                for (
                    (Ft = Ft || document.createElement('div')).innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                        t = Ft.firstChild;
                    e.firstChild;

                )
                    e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
        }),
        'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return $t(e, t);
                  });
              }
            : $t);
function qt(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
    }
    e.textContent = t;
}
var Kt = {
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
    Ht = ['Webkit', 'ms', 'Moz', 'O'];
function Gt(e, t, n) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n || 'number' != typeof t || 0 === t || (Kt.hasOwnProperty(e) && Kt[e])
          ? ('' + t).trim()
          : t + 'px';
}
function Xt(e, t) {
    for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf('--'),
                i = Gt(n, t[n], r);
            ('float' === n && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i));
        }
}
Object.keys(Kt).forEach(function (e) {
    Ht.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Kt[t] = Kt[e]));
    });
});
var Yt = mt(
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
    on = null;
function an(e) {
    if ((e = ea(e))) {
        if ('function' != typeof nn) throw Error(Me(280));
        var t = e.stateNode;
        t && ((t = na(t)), nn(e.stateNode, e.type, t));
    }
}
function sn(e) {
    rn ? (on ? on.push(e) : (on = [e])) : (rn = e);
}
function un() {
    if (rn) {
        var e = rn,
            t = on;
        if (((on = rn = null), an(e), t)) for (e = 0; e < t.length; e++) an(t[e]);
    }
}
function ln(e, t) {
    return e(t);
}
function cn() {}
var fn = !1;
function dn(e, t, n) {
    if (fn) return e(t, n);
    fn = !0;
    try {
        return ln(e, t, n);
    } finally {
        ((fn = !1), (null !== rn || null !== on) && (cn(), un()));
    }
}
function hn(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = na(n);
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
if ($e)
    try {
        var vn = {};
        (Object.defineProperty(vn, 'passive', {
            get: function () {
                pn = !0;
            },
        }),
            window.addEventListener('test', vn, vn),
            window.removeEventListener('test', vn, vn));
    } catch ($t) {
        pn = !1;
    }
function gn(e, t, n, r, i, o, a, s, u) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, l);
    } catch (c) {
        this.onError(c);
    }
}
var mn = !1,
    bn = null,
    yn = !1,
    _n = null,
    wn = {
        onError: function (e) {
            ((mn = !0), (bn = e));
        },
    };
function Sn(e, t, n, r, i, o, a, s, u) {
    ((mn = !1), (bn = null), gn.apply(wn, arguments));
}
function On(e) {
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
function kn(e) {
    if (13 === e.tag) {
        var t = e.memoizedState;
        if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
    }
    return null;
}
function xn(e) {
    if (On(e) !== e) throw Error(Me(188));
}
function Pn(e) {
    return null !==
        (e = (function (e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = On(e))) throw Error(Me(188));
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
                        if (o === n) return (xn(i), e);
                        if (o === r) return (xn(i), t);
                        o = o.sibling;
                    }
                    throw Error(Me(188));
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
                        if (!a) throw Error(Me(189));
                    }
                }
                if (n.alternate !== r) throw Error(Me(190));
            }
            if (3 !== n.tag) throw Error(Me(188));
            return n.stateNode.current === n ? e : t;
        })(e))
        ? En(e)
        : null;
}
function En(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e; ) {
        var t = En(e);
        if (null !== t) return t;
        e = e.sibling;
    }
    return null;
}
var An = Le.unstable_scheduleCallback,
    Tn = Le.unstable_cancelCallback,
    Cn = Le.unstable_shouldYield,
    jn = Le.unstable_requestPaint,
    Un = Le.unstable_now,
    Bn = Le.unstable_getCurrentPriorityLevel,
    Nn = Le.unstable_ImmediatePriority,
    Wn = Le.unstable_UserBlockingPriority,
    Rn = Le.unstable_NormalPriority,
    In = Le.unstable_LowPriority,
    Ln = Le.unstable_IdlePriority,
    Mn = null,
    Vn = null;
var Dn = Math.clz32
        ? Math.clz32
        : function (e) {
              return ((e >>>= 0), 0 === e ? 32 : (31 - ((zn(e) / Fn) | 0)) | 0);
          },
    zn = Math.log,
    Fn = Math.LN2;
var $n = 64,
    Qn = 4194304;
function qn(e) {
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
function Kn(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        a = 268435455 & n;
    if (0 !== a) {
        var s = a & ~i;
        0 !== s ? (r = qn(s)) : 0 !== (o &= a) && (r = qn(o));
    } else 0 !== (a = n & ~i) ? (r = qn(a)) : 0 !== o && (r = qn(o));
    if (0 === r) return 0;
    if (0 !== t && t !== r && 0 == (t & i) && ((i = r & -r) >= (o = t & -t) || (16 === i && 0 != (4194240 & o))))
        return t;
    if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; ) ((i = 1 << (n = 31 - Dn(t))), (r |= e[n]), (t &= ~i));
    return r;
}
function Hn(e, t) {
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
function Xn() {
    var e = $n;
    return (0 == (4194240 & ($n <<= 1)) && ($n = 64), e);
}
function Yn(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Jn(e, t, n) {
    ((e.pendingLanes |= t),
        536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        ((e = e.eventTimes)[(t = 31 - Dn(t))] = n));
}
function Zn(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Dn(n),
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
    or,
    ar,
    sr = !1,
    ur = [],
    lr = null,
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
            lr = null;
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
function mr(e, t, n, r, i, o) {
    return null === e || e.nativeEvent !== o
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }),
          null !== t && null !== (t = ea(t)) && rr(t),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== i && -1 === t.indexOf(i) && t.push(i), e);
}
function br(e) {
    var t = Zo(e.target);
    if (null !== t) {
        var n = On(t);
        if (null !== n)
            if (13 === (t = n.tag)) {
                if (null !== (t = kn(n)))
                    return (
                        (e.blockedOn = t),
                        void ar(e.priority, function () {
                            ir(n);
                        })
                    );
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
}
function yr(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Cr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return (null !== (t = ea(n)) && rr(t), (e.blockedOn = n), !1);
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        ((en = r), n.target.dispatchEvent(r), (en = null), t.shift());
    }
    return !0;
}
function _r(e, t, n) {
    yr(e) && n.delete(t);
}
function wr() {
    ((sr = !1),
        null !== lr && yr(lr) && (lr = null),
        null !== cr && yr(cr) && (cr = null),
        null !== fr && yr(fr) && (fr = null),
        dr.forEach(_r),
        hr.forEach(_r));
}
function Sr(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), sr || ((sr = !0), Le.unstable_scheduleCallback(Le.unstable_NormalPriority, wr)));
}
function Or(e) {
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
        null !== lr && Sr(lr, e),
            null !== cr && Sr(cr, e),
            null !== fr && Sr(fr, e),
            dr.forEach(t),
            hr.forEach(t),
            n = 0;
        n < pr.length;
        n++
    )
        (r = pr[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < pr.length && null === (n = pr[0]).blockedOn; ) (br(n), null === n.blockedOn && pr.shift());
}
var kr = et.ReactCurrentBatchConfig,
    xr = !0;
function Pr(e, t, n, r) {
    var i = er,
        o = kr.transition;
    kr.transition = null;
    try {
        ((er = 1), Ar(e, t, n, r));
    } finally {
        ((er = i), (kr.transition = o));
    }
}
function Er(e, t, n, r) {
    var i = er,
        o = kr.transition;
    kr.transition = null;
    try {
        ((er = 4), Ar(e, t, n, r));
    } finally {
        ((er = i), (kr.transition = o));
    }
}
function Ar(e, t, n, r) {
    if (xr) {
        var i = Cr(e, t, n, r);
        if (null === i) (xo(e, t, r, Tr, n), gr(e, r));
        else if (
            (function (e, t, n, r, i) {
                switch (t) {
                    case 'focusin':
                        return ((lr = mr(lr, e, t, n, r, i)), !0);
                    case 'dragenter':
                        return ((cr = mr(cr, e, t, n, r, i)), !0);
                    case 'mouseover':
                        return ((fr = mr(fr, e, t, n, r, i)), !0);
                    case 'pointerover':
                        var o = i.pointerId;
                        return (dr.set(o, mr(dr.get(o) || null, e, t, n, r, i)), !0);
                    case 'gotpointercapture':
                        return ((o = i.pointerId), hr.set(o, mr(hr.get(o) || null, e, t, n, r, i)), !0);
                }
                return !1;
            })(i, e, t, n, r)
        )
            r.stopPropagation();
        else if ((gr(e, r), 4 & t && -1 < vr.indexOf(e))) {
            for (; null !== i; ) {
                var o = ea(i);
                if ((null !== o && nr(o), null === (o = Cr(e, t, n, r)) && xo(e, t, r, Tr, n), o === i)) break;
                i = o;
            }
            null !== i && r.stopPropagation();
        } else xo(e, t, r, null, n);
    }
}
var Tr = null;
function Cr(e, t, n, r) {
    if (((Tr = null), null !== (e = Zo((e = tn(r))))))
        if (null === (t = On(e))) e = null;
        else if (13 === (n = t.tag)) {
            if (null !== (e = kn(t))) return e;
            e = null;
        } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return ((Tr = e), null);
}
function jr(e) {
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
            switch (Bn()) {
                case Nn:
                    return 1;
                case Wn:
                    return 4;
                case Rn:
                case In:
                    return 16;
                case Ln:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Ur = null,
    Br = null,
    Nr = null;
function Wr() {
    if (Nr) return Nr;
    var e,
        t,
        n = Br,
        r = n.length,
        i = 'value' in Ur ? Ur.value : Ur.textContent,
        o = i.length;
    for (e = 0; e < r && n[e] === i[e]; e++);
    var a = r - e;
    for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
    return (Nr = i.slice(e, 1 < t ? 1 - t : void 0));
}
function Rr(e) {
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
function Lr() {
    return !1;
}
function Mr(e) {
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
                ? Ir
                : Lr),
            (this.isPropagationStopped = Lr),
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
var Vr,
    Dr,
    zr,
    Fr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    $r = Mr(Fr),
    Qr = mt({}, Fr, { view: 0, detail: 0 }),
    qr = Mr(Qr),
    Kr = mt({}, Qr, {
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
        getModifierState: oi,
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
                : (e !== zr &&
                      (zr && 'mousemove' === e.type
                          ? ((Vr = e.screenX - zr.screenX), (Dr = e.screenY - zr.screenY))
                          : (Dr = Vr = 0),
                      (zr = e)),
                  Vr);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : Dr;
        },
    }),
    Hr = Mr(Kr),
    Gr = Mr(mt({}, Kr, { dataTransfer: 0 })),
    Xr = Mr(mt({}, Qr, { relatedTarget: 0 })),
    Yr = Mr(mt({}, Fr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    Jr = mt({}, Fr, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    Zr = Mr(Jr),
    ei = Mr(mt({}, Fr, { data: 0 })),
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
function oi() {
    return ii;
}
var ai = mt({}, Qr, {
        key: function (e) {
            if (e.key) {
                var t = ti[e.key] || e.key;
                if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
                ? 13 === (e = Rr(e))
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
        getModifierState: oi,
        charCode: function (e) {
            return 'keypress' === e.type ? Rr(e) : 0;
        },
        keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
        which: function (e) {
            return 'keypress' === e.type ? Rr(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
    }),
    si = Mr(ai),
    ui = Mr(
        mt({}, Kr, {
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
    li = Mr(
        mt({}, Qr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: oi,
        }),
    ),
    ci = Mr(mt({}, Fr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    fi = mt({}, Kr, {
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
    pi = $e && 'CompositionEvent' in window,
    vi = null;
$e && 'documentMode' in document && (vi = document.documentMode);
var gi = $e && 'TextEvent' in window && !vi,
    mi = $e && (!pi || (vi && 8 < vi && 11 >= vi)),
    bi = String.fromCharCode(32),
    yi = !1;
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
var Oi = {
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
function ki(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return 'input' === t ? !!Oi[e.type] : 'textarea' === t;
}
function xi(e, t, n, r) {
    (sn(r),
        0 < (t = Eo(t, 'onChange')).length &&
            ((n = new $r('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
}
var Pi = null,
    Ei = null;
function Ai(e) {
    yo(e, 0);
}
function Ti(e) {
    if (Et(ta(e))) return e;
}
function Ci(e, t) {
    if ('change' === e) return t;
}
var ji = !1;
if ($e) {
    var Ui;
    if ($e) {
        var Bi = 'oninput' in document;
        if (!Bi) {
            var Ni = document.createElement('div');
            (Ni.setAttribute('oninput', 'return;'), (Bi = 'function' == typeof Ni.oninput));
        }
        Ui = Bi;
    } else Ui = !1;
    ji = Ui && (!document.documentMode || 9 < document.documentMode);
}
function Wi() {
    Pi && (Pi.detachEvent('onpropertychange', Ri), (Ei = Pi = null));
}
function Ri(e) {
    if ('value' === e.propertyName && Ti(Ei)) {
        var t = [];
        (xi(t, Ei, e, tn(e)), dn(Ai, t));
    }
}
function Ii(e, t, n) {
    'focusin' === e ? (Wi(), (Ei = n), (Pi = t).attachEvent('onpropertychange', Ri)) : 'focusout' === e && Wi();
}
function Li(e) {
    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Ti(Ei);
}
function Mi(e, t) {
    if ('click' === e) return Ti(t);
}
function Vi(e, t) {
    if ('input' === e || 'change' === e) return Ti(t);
}
var Di =
    'function' == typeof Object.is
        ? Object.is
        : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
          };
function zi(e, t) {
    if (Di(e, t)) return !0;
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Qe.call(t, i) || !Di(e[i], t[i])) return !1;
    }
    return !0;
}
function Fi(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function $i(e, t) {
    var n,
        r = Fi(e);
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
        r = Fi(r);
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
function qi() {
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
function Ki(e) {
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
function Hi(e) {
    var t = qi(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Qi(n.ownerDocument.documentElement, n)) {
        if (null !== r && Ki(n))
            if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
            else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                ((r = void 0 === r.end ? o : Math.min(r.end, i)),
                    !e.extend && o > r && ((i = r), (r = o), (o = i)),
                    (i = $i(n, o)));
                var a = $i(n, r);
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
var Gi = $e && 'documentMode' in document && 11 >= document.documentMode,
    Xi = null,
    Yi = null,
    Ji = null,
    Zi = !1;
function eo(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    Zi ||
        null == Xi ||
        Xi !== At(r) ||
        ('selectionStart' in (r = Xi) && Ki(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                  anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                      .anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              }),
        (Ji && zi(Ji, r)) ||
            ((Ji = r),
            0 < (r = Eo(Yi, 'onSelect')).length &&
                ((t = new $r('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Xi))));
}
function to(e, t) {
    var n = {};
    return ((n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n);
}
var no = {
        animationend: to('Animation', 'AnimationEnd'),
        animationiteration: to('Animation', 'AnimationIteration'),
        animationstart: to('Animation', 'AnimationStart'),
        transitionend: to('Transition', 'TransitionEnd'),
    },
    ro = {},
    io = {};
function oo(e) {
    if (ro[e]) return ro[e];
    if (!no[e]) return e;
    var t,
        n = no[e];
    for (t in n) if (n.hasOwnProperty(t) && t in io) return (ro[e] = n[t]);
    return e;
}
$e &&
    ((io = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete no.animationend.animation, delete no.animationiteration.animation, delete no.animationstart.animation),
    'TransitionEvent' in window || delete no.transitionend.transition);
var ao = oo('animationend'),
    so = oo('animationiteration'),
    uo = oo('animationstart'),
    lo = oo('transitionend'),
    co = new Map(),
    fo =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' ',
        );
function ho(e, t) {
    (co.set(e, t), ze(t, [e]));
}
for (var po = 0; po < fo.length; po++) {
    var vo = fo[po];
    ho(vo.toLowerCase(), 'on' + (vo[0].toUpperCase() + vo.slice(1)));
}
(ho(ao, 'onAnimationEnd'),
    ho(so, 'onAnimationIteration'),
    ho(uo, 'onAnimationStart'),
    ho('dblclick', 'onDoubleClick'),
    ho('focusin', 'onFocus'),
    ho('focusout', 'onBlur'),
    ho(lo, 'onTransitionEnd'),
    Fe('onMouseEnter', ['mouseout', 'mouseover']),
    Fe('onMouseLeave', ['mouseout', 'mouseover']),
    Fe('onPointerEnter', ['pointerout', 'pointerover']),
    Fe('onPointerLeave', ['pointerout', 'pointerover']),
    ze('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    ze('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    ze('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    ze('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    ze('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    ze('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
var go =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' ',
        ),
    mo = new Set('cancel close invalid load scroll toggle'.split(' ').concat(go));
function bo(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n),
        (function (e, t, n, r, i, o, a, s, u) {
            if ((Sn.apply(this, arguments), mn)) {
                if (!mn) throw Error(Me(198));
                var l = bn;
                ((mn = !1), (bn = null), yn || ((yn = !0), (_n = l)));
            }
        })(r, t, void 0, e),
        (e.currentTarget = null));
}
function yo(e, t) {
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
                    (bo(i, s, l), (o = u));
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
                    (bo(i, s, l), (o = u));
                }
        }
    }
    if (yn) throw ((e = _n), (yn = !1), (_n = null), e);
}
function _o(e, t) {
    var n = t[Xo];
    void 0 === n && (n = t[Xo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (ko(t, e, 2, !1), n.add(r));
}
function wo(e, t, n) {
    var r = 0;
    (t && (r |= 4), ko(n, e, r, t));
}
var So = '_reactListening' + Math.random().toString(36).slice(2);
function Oo(e) {
    if (!e[So]) {
        ((e[So] = !0),
            Ve.forEach(function (t) {
                'selectionchange' !== t && (mo.has(t) || wo(t, !1, e), wo(t, !0, e));
            }));
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[So] || ((t[So] = !0), wo('selectionchange', !1, t));
    }
}
function ko(e, t, n, r) {
    switch (jr(t)) {
        case 1:
            var i = Pr;
            break;
        case 4:
            i = Er;
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
function xo(e, t, n, r, i) {
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
                    if (null === (a = Zo(s))) return;
                    if (5 === (u = a.tag) || 6 === u) {
                        r = o = a;
                        continue e;
                    }
                    s = s.parentNode;
                }
            }
            r = r.return;
        }
    dn(function () {
        var r = o,
            i = tn(n),
            a = [];
        e: {
            var s = co.get(e);
            if (void 0 !== s) {
                var u = $r,
                    l = e;
                switch (e) {
                    case 'keypress':
                        if (0 === Rr(n)) break e;
                    case 'keydown':
                    case 'keyup':
                        u = si;
                        break;
                    case 'focusin':
                        ((l = 'focus'), (u = Xr));
                        break;
                    case 'focusout':
                        ((l = 'blur'), (u = Xr));
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        u = Xr;
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
                        u = Hr;
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
                        u = li;
                        break;
                    case ao:
                    case so:
                    case uo:
                        u = Yr;
                        break;
                    case lo:
                        u = ci;
                        break;
                    case 'scroll':
                        u = qr;
                        break;
                    case 'wheel':
                        u = di;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        u = Zr;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        u = ui;
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
                            ((h = v), null !== d && null != (v = hn(p, d)) && c.push(Po(p, v, h))),
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
                    n === en ||
                    !(l = n.relatedTarget || n.fromElement) ||
                    (!Zo(l) && !l[Go])) &&
                    (u || s) &&
                    ((s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window),
                    u
                        ? ((u = r),
                          null !== (l = (l = n.relatedTarget || n.toElement) ? Zo(l) : null) &&
                              (l !== (f = On(l)) || (5 !== l.tag && 6 !== l.tag)) &&
                              (l = null))
                        : ((u = null), (l = r)),
                    u !== l))
            ) {
                if (
                    ((c = Hr),
                    (v = 'onMouseLeave'),
                    (d = 'onMouseEnter'),
                    (p = 'mouse'),
                    ('pointerout' !== e && 'pointerover' !== e) ||
                        ((c = ui), (v = 'onPointerLeave'), (d = 'onPointerEnter'), (p = 'pointer')),
                    (f = null == u ? s : ta(u)),
                    (h = null == l ? s : ta(l)),
                    ((s = new c(v, p + 'leave', u, n, i)).target = f),
                    (s.relatedTarget = h),
                    (v = null),
                    Zo(i) === r && (((c = new c(d, p + 'enter', l, n, i)).target = h), (c.relatedTarget = f), (v = c)),
                    (f = v),
                    u && l)
                )
                    e: {
                        for (d = l, p = 0, h = c = u; h; h = Ao(h)) p++;
                        for (h = 0, v = d; v; v = Ao(v)) h++;
                        for (; 0 < p - h; ) ((c = Ao(c)), p--);
                        for (; 0 < h - p; ) ((d = Ao(d)), h--);
                        for (; p--; ) {
                            if (c === d || (null !== d && c === d.alternate)) break e;
                            ((c = Ao(c)), (d = Ao(d)));
                        }
                        c = null;
                    }
                else c = null;
                (null !== u && To(a, s, u, c, !1), null !== l && null !== f && To(a, f, l, c, !0));
            }
            if (
                'select' === (u = (s = r ? ta(r) : window).nodeName && s.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === s.type)
            )
                var g = Ci;
            else if (ki(s))
                if (ji) g = Vi;
                else {
                    g = Li;
                    var m = Ii;
                }
            else
                (u = s.nodeName) &&
                    'input' === u.toLowerCase() &&
                    ('checkbox' === s.type || 'radio' === s.type) &&
                    (g = Mi);
            switch (
                (g && (g = g(e, r))
                    ? xi(a, g, n, i)
                    : (m && m(e, s, r),
                      'focusout' === e &&
                          (m = s._wrapperState) &&
                          m.controlled &&
                          'number' === s.type &&
                          Nt(s, 'number', s.value)),
                (m = r ? ta(r) : window),
                e)
            ) {
                case 'focusin':
                    (ki(m) || 'true' === m.contentEditable) && ((Xi = m), (Yi = r), (Ji = null));
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
                    ((Zi = !1), eo(a, n, i));
                    break;
                case 'selectionchange':
                    if (Gi) break;
                case 'keydown':
                case 'keyup':
                    eo(a, n, i);
            }
            var b;
            if (pi)
                e: {
                    switch (e) {
                        case 'compositionstart':
                            var y = 'onCompositionStart';
                            break e;
                        case 'compositionend':
                            y = 'onCompositionEnd';
                            break e;
                        case 'compositionupdate':
                            y = 'onCompositionUpdate';
                            break e;
                    }
                    y = void 0;
                }
            else
                Si
                    ? _i(e, n) && (y = 'onCompositionEnd')
                    : 'keydown' === e && 229 === n.keyCode && (y = 'onCompositionStart');
            (y &&
                (mi &&
                    'ko' !== n.locale &&
                    (Si || 'onCompositionStart' !== y
                        ? 'onCompositionEnd' === y && Si && (b = Wr())
                        : ((Br = 'value' in (Ur = i) ? Ur.value : Ur.textContent), (Si = !0))),
                0 < (m = Eo(r, y)).length &&
                    ((y = new ei(y, e, null, n, i)),
                    a.push({ event: y, listeners: m }),
                    b ? (y.data = b) : null !== (b = wi(n)) && (y.data = b))),
                (b = gi
                    ? (function (e, t) {
                          switch (e) {
                              case 'compositionend':
                                  return wi(t);
                              case 'keypress':
                                  return 32 !== t.which ? null : ((yi = !0), bi);
                              case 'textInput':
                                  return (e = t.data) === bi && yi ? null : e;
                              default:
                                  return null;
                          }
                      })(e, n)
                    : (function (e, t) {
                          if (Si)
                              return 'compositionend' === e || (!pi && _i(e, t))
                                  ? ((e = Wr()), (Nr = Br = Ur = null), (Si = !1), e)
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
                                  return mi && 'ko' !== t.locale ? null : t.data;
                          }
                      })(e, n)) &&
                    0 < (r = Eo(r, 'onBeforeInput')).length &&
                    ((i = new ei('onBeforeInput', 'beforeinput', null, n, i)),
                    a.push({ event: i, listeners: r }),
                    (i.data = b)));
        }
        yo(a, t);
    });
}
function Po(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Eo(e, t) {
    for (var n = t + 'Capture', r = []; null !== e; ) {
        var i = e,
            o = i.stateNode;
        (5 === i.tag &&
            null !== o &&
            ((i = o), null != (o = hn(e, n)) && r.unshift(Po(e, o, i)), null != (o = hn(e, t)) && r.push(Po(e, o, i))),
            (e = e.return));
    }
    return r;
}
function Ao(e) {
    if (null === e) return null;
    do {
        e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
}
function To(e, t, n, r, i) {
    for (var o = t._reactName, a = []; null !== n && n !== r; ) {
        var s = n,
            u = s.alternate,
            l = s.stateNode;
        if (null !== u && u === r) break;
        (5 === s.tag &&
            null !== l &&
            ((s = l),
            i
                ? null != (u = hn(n, o)) && a.unshift(Po(n, u, s))
                : i || (null != (u = hn(n, o)) && a.push(Po(n, u, s)))),
            (n = n.return));
    }
    0 !== a.length && e.push({ event: t, listeners: a });
}
var Co = /\r\n?/g,
    jo = /\u0000|\uFFFD/g;
function Uo(e) {
    return ('string' == typeof e ? e : '' + e).replace(Co, '\n').replace(jo, '');
}
function Bo(e, t, n) {
    if (((t = Uo(t)), Uo(e) !== t && n)) throw Error(Me(425));
}
function No() {}
var Wo = null,
    Ro = null;
function Io(e, t) {
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
var Lo = 'function' == typeof setTimeout ? setTimeout : void 0,
    Mo = 'function' == typeof clearTimeout ? clearTimeout : void 0,
    Vo = 'function' == typeof Promise ? Promise : void 0,
    Do =
        'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== Vo
              ? function (e) {
                    return Vo.resolve(null).then(e).catch(zo);
                }
              : Lo;
function zo(e) {
    setTimeout(function () {
        throw e;
    });
}
function Fo(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && 8 === i.nodeType))
            if ('/$' === (n = i.data)) {
                if (0 === r) return (e.removeChild(i), void Or(t));
                r--;
            } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
        n = i;
    } while (n);
    Or(t);
}
function $o(e) {
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
var qo = Math.random().toString(36).slice(2),
    Ko = '__reactFiber$' + qo,
    Ho = '__reactProps$' + qo,
    Go = '__reactContainer$' + qo,
    Xo = '__reactEvents$' + qo,
    Yo = '__reactListeners$' + qo,
    Jo = '__reactHandles$' + qo;
function Zo(e) {
    var t = e[Ko];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Go] || n[Ko])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = Qo(e); null !== e; ) {
                    if ((n = e[Ko])) return n;
                    e = Qo(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function ea(e) {
    return !(e = e[Ko] || e[Go]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
}
function ta(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(Me(33));
}
function na(e) {
    return e[Ho] || null;
}
var ra = [],
    ia = -1;
function oa(e) {
    return { current: e };
}
function aa(e) {
    0 > ia || ((e.current = ra[ia]), (ra[ia] = null), ia--);
}
function sa(e, t) {
    (ia++, (ra[ia] = e.current), (e.current = t));
}
var ua = {},
    la = oa(ua),
    ca = oa(!1),
    fa = ua;
function da(e, t) {
    var n = e.type.contextTypes;
    if (!n) return ua;
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
function ha(e) {
    return null != (e = e.childContextTypes);
}
function pa() {
    (aa(ca), aa(la));
}
function va(e, t, n) {
    if (la.current !== ua) throw Error(Me(168));
    (sa(la, t), sa(ca, n));
}
function ga(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
    for (var i in (r = r.getChildContext())) if (!(i in t)) throw Error(Me(108, Ot(e) || 'Unknown', i));
    return mt({}, n, r);
}
function ma(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ua),
        (fa = la.current),
        sa(la, e),
        sa(ca, ca.current),
        !0
    );
}
function ba(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(Me(169));
    (n ? ((e = ga(e, t, fa)), (r.__reactInternalMemoizedMergedChildContext = e), aa(ca), aa(la), sa(la, e)) : aa(ca),
        sa(ca, n));
}
var ya = null,
    _a = !1,
    wa = !1;
function Sa(e) {
    null === ya ? (ya = [e]) : ya.push(e);
}
function Oa() {
    if (!wa && null !== ya) {
        wa = !0;
        var e = 0,
            t = er;
        try {
            var n = ya;
            for (er = 1; e < n.length; e++) {
                var r = n[e];
                do {
                    r = r(!0);
                } while (null !== r);
            }
            ((ya = null), (_a = !1));
        } catch (i) {
            throw (null !== ya && (ya = ya.slice(e + 1)), An(Nn, Oa), i);
        } finally {
            ((er = t), (wa = !1));
        }
    }
    return null;
}
var ka = [],
    xa = 0,
    Pa = null,
    Ea = 0,
    Aa = [],
    Ta = 0,
    Ca = null,
    ja = 1,
    Ua = '';
function Ba(e, t) {
    ((ka[xa++] = Ea), (ka[xa++] = Pa), (Pa = e), (Ea = t));
}
function Na(e, t, n) {
    ((Aa[Ta++] = ja), (Aa[Ta++] = Ua), (Aa[Ta++] = Ca), (Ca = e));
    var r = ja;
    e = Ua;
    var i = 32 - Dn(r) - 1;
    ((r &= ~(1 << i)), (n += 1));
    var o = 32 - Dn(t) + i;
    if (30 < o) {
        var a = i - (i % 5);
        ((o = (r & ((1 << a) - 1)).toString(32)),
            (r >>= a),
            (i -= a),
            (ja = (1 << (32 - Dn(t) + i)) | (n << i) | r),
            (Ua = o + e));
    } else ((ja = (1 << o) | (n << i) | r), (Ua = e));
}
function Wa(e) {
    null !== e.return && (Ba(e, 1), Na(e, 1, 0));
}
function Ra(e) {
    for (; e === Pa; ) ((Pa = ka[--xa]), (ka[xa] = null), (Ea = ka[--xa]), (ka[xa] = null));
    for (; e === Ca; )
        ((Ca = Aa[--Ta]), (Aa[Ta] = null), (Ua = Aa[--Ta]), (Aa[Ta] = null), (ja = Aa[--Ta]), (Aa[Ta] = null));
}
var Ia = null,
    La = null,
    Ma = !1,
    Va = null;
function Da(e, t) {
    var n = df(5, null, null, 0);
    ((n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function za(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (Ia = e), (La = $o(t.firstChild)), !0)
            );
        case 6:
            return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (Ia = e), (La = null), !0)
            );
        case 13:
            return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ca ? { id: ja, overflow: Ua } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = df(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (Ia = e),
                (La = null),
                !0)
            );
        default:
            return !1;
    }
}
function Fa(e) {
    return 0 != (1 & e.mode) && 0 == (128 & e.flags);
}
function $a(e) {
    if (Ma) {
        var t = La;
        if (t) {
            var n = t;
            if (!za(e, t)) {
                if (Fa(e)) throw Error(Me(418));
                t = $o(n.nextSibling);
                var r = Ia;
                t && za(e, t) ? Da(r, n) : ((e.flags = (-4097 & e.flags) | 2), (Ma = !1), (Ia = e));
            }
        } else {
            if (Fa(e)) throw Error(Me(418));
            ((e.flags = (-4097 & e.flags) | 2), (Ma = !1), (Ia = e));
        }
    }
}
function Qa(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
    Ia = e;
}
function qa(e) {
    if (e !== Ia) return !1;
    if (!Ma) return (Qa(e), (Ma = !0), !1);
    var t;
    if (
        ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = 'head' !== (t = e.type) && 'body' !== t && !Io(e.type, e.memoizedProps)),
        t && (t = La))
    ) {
        if (Fa(e)) throw (Ka(), Error(Me(418)));
        for (; t; ) (Da(e, t), (t = $o(t.nextSibling)));
    }
    if ((Qa(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(Me(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ('/$' === n) {
                        if (0 === t) {
                            La = $o(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
            }
            La = null;
        }
    } else La = Ia ? $o(e.stateNode.nextSibling) : null;
    return !0;
}
function Ka() {
    for (var e = La; e; ) e = $o(e.nextSibling);
}
function Ha() {
    ((La = Ia = null), (Ma = !1));
}
function Ga(e) {
    null === Va ? (Va = [e]) : Va.push(e);
}
var Xa = et.ReactCurrentBatchConfig;
function Ya(e, t, n) {
    if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
        if (n._owner) {
            if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(Me(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(Me(147, e));
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
        if ('string' != typeof e) throw Error(Me(284));
        if (!n._owner) throw Error(Me(290, e));
    }
    return e;
}
function Ja(e, t) {
    throw (
        (e = Object.prototype.toString.call(t)),
        Error(Me(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e))
    );
}
function Za(e) {
    return (0, e._init)(e._payload);
}
function es(e) {
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
        return null === t || 6 !== t.tag ? (((t = bf(n, e.mode, r)).return = e), t) : (((t = i(t, n)).return = e), t);
    }
    function u(e, t, n, r) {
        var o = n.type;
        return o === rt
            ? c(e, t, n.props.children, r, n.key)
            : null !== t &&
                (t.elementType === o || ('object' == typeof o && null !== o && o.$$typeof === dt && Za(o) === t.type))
              ? (((r = i(t, n.props)).ref = Ya(e, t, n)), (r.return = e), r)
              : (((r = vf(n.type, n.key, n.props, null, e.mode, r)).ref = Ya(e, t, n)), (r.return = e), r);
    }
    function l(e, t, n, r) {
        return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = yf(n, e.mode, r)).return = e), t)
            : (((t = i(t, n.children || [])).return = e), t);
    }
    function c(e, t, n, r, o) {
        return null === t || 7 !== t.tag
            ? (((t = gf(n, e.mode, r, o)).return = e), t)
            : (((t = i(t, n)).return = e), t);
    }
    function f(e, t, n) {
        if (('string' == typeof t && '' !== t) || 'number' == typeof t)
            return (((t = bf('' + t, e.mode, n)).return = e), t);
        if ('object' == typeof t && null !== t) {
            switch (t.$$typeof) {
                case tt:
                    return (
                        ((n = vf(t.type, t.key, t.props, null, e.mode, n)).ref = Ya(e, null, t)),
                        (n.return = e),
                        n
                    );
                case nt:
                    return (((t = yf(t, e.mode, n)).return = e), t);
                case dt:
                    return f(e, (0, t._init)(t._payload), n);
            }
            if (Wt(t) || vt(t)) return (((t = gf(t, e.mode, n, null)).return = e), t);
            Ja(e, t);
        }
        return null;
    }
    function d(e, t, n, r) {
        var i = null !== t ? t.key : null;
        if (('string' == typeof n && '' !== n) || 'number' == typeof n) return null !== i ? null : s(e, t, '' + n, r);
        if ('object' == typeof n && null !== n) {
            switch (n.$$typeof) {
                case tt:
                    return n.key === i ? u(e, t, n, r) : null;
                case nt:
                    return n.key === i ? l(e, t, n, r) : null;
                case dt:
                    return d(e, t, (i = n._init)(n._payload), r);
            }
            if (Wt(n) || vt(n)) return null !== i ? null : c(e, t, n, r, null);
            Ja(e, n);
        }
        return null;
    }
    function h(e, t, n, r, i) {
        if (('string' == typeof r && '' !== r) || 'number' == typeof r) return s(t, (e = e.get(n) || null), '' + r, i);
        if ('object' == typeof r && null !== r) {
            switch (r.$$typeof) {
                case tt:
                    return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                case nt:
                    return l(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                case dt:
                    return h(e, t, n, (0, r._init)(r._payload), i);
            }
            if (Wt(r) || vt(r)) return c(t, (e = e.get(n) || null), r, i, null);
            Ja(t, r);
        }
        return null;
    }
    return function s(u, l, c, p) {
        if (
            ('object' == typeof c && null !== c && c.type === rt && null === c.key && (c = c.props.children),
            'object' == typeof c && null !== c)
        ) {
            switch (c.$$typeof) {
                case tt:
                    e: {
                        for (var v = c.key, g = l; null !== g; ) {
                            if (g.key === v) {
                                if ((v = c.type) === rt) {
                                    if (7 === g.tag) {
                                        (n(u, g.sibling), ((l = i(g, c.props.children)).return = u), (u = l));
                                        break e;
                                    }
                                } else if (
                                    g.elementType === v ||
                                    ('object' == typeof v && null !== v && v.$$typeof === dt && Za(v) === g.type)
                                ) {
                                    (n(u, g.sibling), ((l = i(g, c.props)).ref = Ya(u, g, c)), (l.return = u), (u = l));
                                    break e;
                                }
                                n(u, g);
                                break;
                            }
                            (t(u, g), (g = g.sibling));
                        }
                        c.type === rt
                            ? (((l = gf(c.props.children, u.mode, p, c.key)).return = u), (u = l))
                            : (((p = vf(c.type, c.key, c.props, null, u.mode, p)).ref = Ya(u, l, c)),
                              (p.return = u),
                              (u = p));
                    }
                    return a(u);
                case nt:
                    e: {
                        for (g = c.key; null !== l; ) {
                            if (l.key === g) {
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
                        (((l = yf(c, u.mode, p)).return = u), (u = l));
                    }
                    return a(u);
                case dt:
                    return s(u, l, (g = c._init)(c._payload), p);
            }
            if (Wt(c))
                return (function (i, a, s, u) {
                    for (var l = null, c = null, p = a, v = (a = 0), g = null; null !== p && v < s.length; v++) {
                        p.index > v ? ((g = p), (p = null)) : (g = p.sibling);
                        var m = d(i, p, s[v], u);
                        if (null === m) {
                            null === p && (p = g);
                            break;
                        }
                        (e && p && null === m.alternate && t(i, p),
                            (a = o(m, a, v)),
                            null === c ? (l = m) : (c.sibling = m),
                            (c = m),
                            (p = g));
                    }
                    if (v === s.length) return (n(i, p), Ma && Ba(i, v), l);
                    if (null === p) {
                        for (; v < s.length; v++)
                            null !== (p = f(i, s[v], u)) &&
                                ((a = o(p, a, v)), null === c ? (l = p) : (c.sibling = p), (c = p));
                        return (Ma && Ba(i, v), l);
                    }
                    for (p = r(i, p); v < s.length; v++)
                        null !== (g = h(p, i, v, s[v], u)) &&
                            (e && null !== g.alternate && p.delete(null === g.key ? v : g.key),
                            (a = o(g, a, v)),
                            null === c ? (l = g) : (c.sibling = g),
                            (c = g));
                    return (
                        e &&
                            p.forEach(function (e) {
                                return t(i, e);
                            }),
                        Ma && Ba(i, v),
                        l
                    );
                })(u, l, c, p);
            if (vt(c))
                return (function (i, a, s, u) {
                    var l = vt(s);
                    if ('function' != typeof l) throw Error(Me(150));
                    if (null == (s = l.call(s))) throw Error(Me(151));
                    for (
                        var c = (l = null), p = a, v = (a = 0), g = null, m = s.next();
                        null !== p && !m.done;
                        v++, m = s.next()
                    ) {
                        p.index > v ? ((g = p), (p = null)) : (g = p.sibling);
                        var b = d(i, p, m.value, u);
                        if (null === b) {
                            null === p && (p = g);
                            break;
                        }
                        (e && p && null === b.alternate && t(i, p),
                            (a = o(b, a, v)),
                            null === c ? (l = b) : (c.sibling = b),
                            (c = b),
                            (p = g));
                    }
                    if (m.done) return (n(i, p), Ma && Ba(i, v), l);
                    if (null === p) {
                        for (; !m.done; v++, m = s.next())
                            null !== (m = f(i, m.value, u)) &&
                                ((a = o(m, a, v)), null === c ? (l = m) : (c.sibling = m), (c = m));
                        return (Ma && Ba(i, v), l);
                    }
                    for (p = r(i, p); !m.done; v++, m = s.next())
                        null !== (m = h(p, i, v, m.value, u)) &&
                            (e && null !== m.alternate && p.delete(null === m.key ? v : m.key),
                            (a = o(m, a, v)),
                            null === c ? (l = m) : (c.sibling = m),
                            (c = m));
                    return (
                        e &&
                            p.forEach(function (e) {
                                return t(i, e);
                            }),
                        Ma && Ba(i, v),
                        l
                    );
                })(u, l, c, p);
            Ja(u, c);
        }
        return ('string' == typeof c && '' !== c) || 'number' == typeof c
            ? ((c = '' + c),
              null !== l && 6 === l.tag
                  ? (n(u, l.sibling), ((l = i(l, c)).return = u), (u = l))
                  : (n(u, l), ((l = bf(c, u.mode, p)).return = u), (u = l)),
              a(u))
            : n(u, l);
    };
}
var ts = es(!0),
    ns = es(!1),
    rs = oa(null),
    is = null,
    os = null,
    as = null;
function ss() {
    as = os = is = null;
}
function us(e) {
    var t = rs.current;
    (aa(rs), (e._currentValue = t));
}
function ls(e, t, n) {
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
function cs(e, t) {
    ((is = e),
        (as = os = null),
        null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (Zu = !0), (e.firstContext = null)));
}
function fs(e) {
    var t = e._currentValue;
    if (as !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), null === os)) {
            if (null === is) throw Error(Me(308));
            ((os = e), (is.dependencies = { lanes: 0, firstContext: e }));
        } else os = os.next = e;
    return t;
}
var ds = null;
function hs(e) {
    null === ds ? (ds = [e]) : ds.push(e);
}
function ps(e, t, n, r) {
    var i = t.interleaved;
    return (null === i ? ((n.next = n), hs(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), vs(e, r));
}
function vs(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        ((e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return));
    return 3 === n.tag ? n.stateNode : null;
}
var gs = !1;
function ms(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function bs(e, t) {
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
function ys(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function _s(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 0 != (2 & uc))) {
        var i = r.pending;
        return (null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), vs(e, n));
    }
    return (
        null === (i = r.interleaved) ? ((t.next = t), hs(r)) : ((t.next = i.next), (i.next = t)),
        (r.interleaved = t),
        vs(e, n)
    );
}
function ws(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), Zn(e, n));
    }
}
function Ss(e, t) {
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
function Os(e, t, n, r) {
    var i = e.updateQueue;
    gs = !1;
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
                            f = mt({}, f, d);
                            break e;
                        case 2:
                            gs = !0;
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
        ((gc |= a), (e.lanes = a), (e.memoizedState = f));
    }
}
function ks(e, t, n) {
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
var xs = {},
    Ps = oa(xs),
    Es = oa(xs),
    As = oa(xs);
function Ts(e) {
    if (e === xs) throw Error(Me(174));
    return e;
}
function Cs(e, t) {
    switch ((sa(As, t), sa(Es, e), sa(Ps, xs), (e = t.nodeType))) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : zt(null, '');
            break;
        default:
            t = zt((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
    }
    (aa(Ps), sa(Ps, t));
}
function js() {
    (aa(Ps), aa(Es), aa(As));
}
function Us(e) {
    Ts(As.current);
    var t = Ts(Ps.current),
        n = zt(t, e.type);
    t !== n && (sa(Es, e), sa(Ps, n));
}
function Bs(e) {
    Es.current === e && (aa(Ps), aa(Es));
}
var Ns = oa(0);
function Ws(e) {
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
var Rs = [];
function Is() {
    for (var e = 0; e < Rs.length; e++) Rs[e]._workInProgressVersionPrimary = null;
    Rs.length = 0;
}
var Ls = et.ReactCurrentDispatcher,
    Ms = et.ReactCurrentBatchConfig,
    Vs = 0,
    Ds = null,
    zs = null,
    Fs = null,
    $s = !1,
    Qs = !1,
    qs = 0,
    Ks = 0;
function Hs() {
    throw Error(Me(321));
}
function Gs(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Di(e[n], t[n])) return !1;
    return !0;
}
function Xs(e, t, n, r, i, o) {
    if (
        ((Vs = o),
        (Ds = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Ls.current = null === e || null === e.memoizedState ? Bu : Nu),
        (e = n(r, i)),
        Qs)
    ) {
        o = 0;
        do {
            if (((Qs = !1), (qs = 0), 25 <= o)) throw Error(Me(301));
            ((o += 1), (Fs = zs = null), (t.updateQueue = null), (Ls.current = Wu), (e = n(r, i)));
        } while (Qs);
    }
    if (((Ls.current = Uu), (t = null !== zs && null !== zs.next), (Vs = 0), (Fs = zs = Ds = null), ($s = !1), t))
        throw Error(Me(300));
    return e;
}
function Ys() {
    var e = 0 !== qs;
    return ((qs = 0), e);
}
function Js() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (null === Fs ? (Ds.memoizedState = Fs = e) : (Fs = Fs.next = e), Fs);
}
function Zs() {
    if (null === zs) {
        var e = Ds.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = zs.next;
    var t = null === Fs ? Ds.memoizedState : Fs.next;
    if (null !== t) ((Fs = t), (zs = e));
    else {
        if (null === e) throw Error(Me(310));
        ((e = {
            memoizedState: (zs = e).memoizedState,
            baseState: zs.baseState,
            baseQueue: zs.baseQueue,
            queue: zs.queue,
            next: null,
        }),
            null === Fs ? (Ds.memoizedState = Fs = e) : (Fs = Fs.next = e));
    }
    return Fs;
}
function eu(e, t) {
    return 'function' == typeof t ? t(e) : t;
}
function tu(e) {
    var t = Zs(),
        n = t.queue;
    if (null === n) throw Error(Me(311));
    n.lastRenderedReducer = e;
    var r = zs,
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
            if ((Vs & c) === c)
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
                (null === u ? ((s = u = f), (a = r)) : (u = u.next = f), (Ds.lanes |= c), (gc |= c));
            }
            l = l.next;
        } while (null !== l && l !== o);
        (null === u ? (a = r) : (u.next = s),
            Di(r, t.memoizedState) || (Zu = !0),
            (t.memoizedState = r),
            (t.baseState = a),
            (t.baseQueue = u),
            (n.lastRenderedState = r));
    }
    if (null !== (e = n.interleaved)) {
        i = e;
        do {
            ((o = i.lane), (Ds.lanes |= o), (gc |= o), (i = i.next));
        } while (i !== e);
    } else null === i && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function nu(e) {
    var t = Zs(),
        n = t.queue;
    if (null === n) throw Error(Me(311));
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
        (Di(o, t.memoizedState) || (Zu = !0),
            (t.memoizedState = o),
            null === t.baseQueue && (t.baseState = o),
            (n.lastRenderedState = o));
    }
    return [o, r];
}
function ru() {}
function iu(e, t) {
    var n = Ds,
        r = Zs(),
        i = t(),
        o = !Di(r.memoizedState, i);
    if (
        (o && ((r.memoizedState = i), (Zu = !0)),
        (r = r.queue),
        gu(su.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (null !== Fs && 1 & Fs.memoizedState.tag))
    ) {
        if (((n.flags |= 2048), fu(9, au.bind(null, n, r, i, t), void 0, null), null === lc)) throw Error(Me(349));
        0 != (30 & Vs) || ou(n, t, i);
    }
    return i;
}
function ou(e, t, n) {
    ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = Ds.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (Ds.updateQueue = t), (t.stores = [e]))
            : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e));
}
function au(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), uu(t) && lu(e));
}
function su(e, t, n) {
    return n(function () {
        uu(t) && lu(e);
    });
}
function uu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Di(e, n);
    } catch (r) {
        return !0;
    }
}
function lu(e) {
    var t = vs(e, 1);
    null !== t && Rc(t, e, 1, -1);
}
function cu(e) {
    var t = Js();
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
        (e = e.dispatch = Au.bind(null, Ds, e)),
        [t.memoizedState, e]
    );
}
function fu(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = Ds.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (Ds.updateQueue = t), (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
    );
}
function du() {
    return Zs().memoizedState;
}
function hu(e, t, n, r) {
    var i = Js();
    ((Ds.flags |= e), (i.memoizedState = fu(1 | t, n, void 0, void 0 === r ? null : r)));
}
function pu(e, t, n, r) {
    var i = Zs();
    r = void 0 === r ? null : r;
    var o = void 0;
    if (null !== zs) {
        var a = zs.memoizedState;
        if (((o = a.destroy), null !== r && Gs(r, a.deps))) return void (i.memoizedState = fu(t, n, o, r));
    }
    ((Ds.flags |= e), (i.memoizedState = fu(1 | t, n, o, r)));
}
function vu(e, t) {
    return hu(8390656, 8, e, t);
}
function gu(e, t) {
    return pu(2048, 8, e, t);
}
function mu(e, t) {
    return pu(4, 2, e, t);
}
function bu(e, t) {
    return pu(4, 4, e, t);
}
function yu(e, t) {
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
    return ((n = null != n ? n.concat([e]) : null), pu(4, 4, yu.bind(null, t, e), n));
}
function wu() {}
function Su(e, t) {
    var n = Zs();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Gs(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Ou(e, t) {
    var n = Zs();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Gs(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ku(e, t, n) {
    return 0 == (21 & Vs)
        ? (e.baseState && ((e.baseState = !1), (Zu = !0)), (e.memoizedState = n))
        : (Di(n, t) || ((n = Xn()), (Ds.lanes |= n), (gc |= n), (e.baseState = !0)), t);
}
function xu(e, t) {
    var n = er;
    ((er = 0 !== n && 4 > n ? n : 4), e(!0));
    var r = Ms.transition;
    Ms.transition = {};
    try {
        (e(!1), t());
    } finally {
        ((er = n), (Ms.transition = r));
    }
}
function Pu() {
    return Zs().memoizedState;
}
function Eu(e, t, n) {
    var r = Wc(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Tu(e))) Cu(t, n);
    else if (null !== (n = ps(e, t, n, r))) {
        (Rc(n, e, r, Nc()), ju(n, t, r));
    }
}
function Au(e, t, n) {
    var r = Wc(e),
        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Tu(e)) Cu(t, i);
    else {
        var o = e.alternate;
        if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer))
            try {
                var a = t.lastRenderedState,
                    s = o(a, n);
                if (((i.hasEagerState = !0), (i.eagerState = s), Di(s, a))) {
                    var u = t.interleaved;
                    return (
                        null === u ? ((i.next = i), hs(t)) : ((i.next = u.next), (u.next = i)),
                        void (t.interleaved = i)
                    );
                }
            } catch (l) {}
        null !== (n = ps(e, t, i, r)) && (Rc(n, e, r, (i = Nc())), ju(n, t, r));
    }
}
function Tu(e) {
    var t = e.alternate;
    return e === Ds || (null !== t && t === Ds);
}
function Cu(e, t) {
    Qs = $s = !0;
    var n = e.pending;
    (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
}
function ju(e, t, n) {
    if (0 != (4194240 & n)) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), Zn(e, n));
    }
}
var Uu = {
        readContext: fs,
        useCallback: Hs,
        useContext: Hs,
        useEffect: Hs,
        useImperativeHandle: Hs,
        useInsertionEffect: Hs,
        useLayoutEffect: Hs,
        useMemo: Hs,
        useReducer: Hs,
        useRef: Hs,
        useState: Hs,
        useDebugValue: Hs,
        useDeferredValue: Hs,
        useTransition: Hs,
        useMutableSource: Hs,
        useSyncExternalStore: Hs,
        useId: Hs,
        unstable_isNewReconciler: !1,
    },
    Bu = {
        readContext: fs,
        useCallback: function (e, t) {
            return ((Js().memoizedState = [e, void 0 === t ? null : t]), e);
        },
        useContext: fs,
        useEffect: vu,
        useImperativeHandle: function (e, t, n) {
            return ((n = null != n ? n.concat([e]) : null), hu(4194308, 4, yu.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
            return hu(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return hu(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Js();
            return ((t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
        },
        useReducer: function (e, t, n) {
            var r = Js();
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
                (e = e.dispatch = Eu.bind(null, Ds, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            return ((e = { current: e }), (Js().memoizedState = e));
        },
        useState: cu,
        useDebugValue: wu,
        useDeferredValue: function (e) {
            return (Js().memoizedState = e);
        },
        useTransition: function () {
            var e = cu(!1),
                t = e[0];
            return ((e = xu.bind(null, e[1])), (Js().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = Ds,
                i = Js();
            if (Ma) {
                if (void 0 === n) throw Error(Me(407));
                n = n();
            } else {
                if (((n = t()), null === lc)) throw Error(Me(349));
                0 != (30 & Vs) || ou(r, t, n);
            }
            i.memoizedState = n;
            var o = { value: n, getSnapshot: t };
            return (
                (i.queue = o),
                vu(su.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                fu(9, au.bind(null, r, o, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = Js(),
                t = lc.identifierPrefix;
            if (Ma) {
                var n = Ua;
                ((t = ':' + t + 'R' + (n = (ja & ~(1 << (32 - Dn(ja) - 1))).toString(32) + n)),
                    0 < (n = qs++) && (t += 'H' + n.toString(32)),
                    (t += ':'));
            } else t = ':' + t + 'r' + (n = Ks++).toString(32) + ':';
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Nu = {
        readContext: fs,
        useCallback: Su,
        useContext: fs,
        useEffect: gu,
        useImperativeHandle: _u,
        useInsertionEffect: mu,
        useLayoutEffect: bu,
        useMemo: Ou,
        useReducer: tu,
        useRef: du,
        useState: function () {
            return tu(eu);
        },
        useDebugValue: wu,
        useDeferredValue: function (e) {
            return ku(Zs(), zs.memoizedState, e);
        },
        useTransition: function () {
            return [tu(eu)[0], Zs().memoizedState];
        },
        useMutableSource: ru,
        useSyncExternalStore: iu,
        useId: Pu,
        unstable_isNewReconciler: !1,
    },
    Wu = {
        readContext: fs,
        useCallback: Su,
        useContext: fs,
        useEffect: gu,
        useImperativeHandle: _u,
        useInsertionEffect: mu,
        useLayoutEffect: bu,
        useMemo: Ou,
        useReducer: nu,
        useRef: du,
        useState: function () {
            return nu(eu);
        },
        useDebugValue: wu,
        useDeferredValue: function (e) {
            var t = Zs();
            return null === zs ? (t.memoizedState = e) : ku(t, zs.memoizedState, e);
        },
        useTransition: function () {
            return [nu(eu)[0], Zs().memoizedState];
        },
        useMutableSource: ru,
        useSyncExternalStore: iu,
        useId: Pu,
        unstable_isNewReconciler: !1,
    };
function Ru(e, t) {
    if (e && e.defaultProps) {
        for (var n in ((t = mt({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
    }
    return t;
}
function Iu(e, t, n, r) {
    ((n = null == (n = n(r, (t = e.memoizedState))) ? t : mt({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n));
}
var Lu = {
    isMounted: function (e) {
        return !!(e = e._reactInternals) && On(e) === e;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Nc(),
            i = Wc(e),
            o = ys(r, i);
        ((o.payload = t), null != n && (o.callback = n), null !== (t = _s(e, o, i)) && (Rc(t, e, i, r), ws(t, e, i)));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Nc(),
            i = Wc(e),
            o = ys(r, i);
        ((o.tag = 1),
            (o.payload = t),
            null != n && (o.callback = n),
            null !== (t = _s(e, o, i)) && (Rc(t, e, i, r), ws(t, e, i)));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Nc(),
            r = Wc(e),
            i = ys(n, r);
        ((i.tag = 2), null != t && (i.callback = t), null !== (t = _s(e, i, r)) && (Rc(t, e, r, n), ws(t, e, r)));
    },
};
function Mu(e, t, n, r, i, o, a) {
    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, o, a)
        : !t.prototype || !t.prototype.isPureReactComponent || !zi(n, r) || !zi(i, o);
}
function Vu(e, t, n) {
    var r = !1,
        i = ua,
        o = t.contextType;
    return (
        'object' == typeof o && null !== o
            ? (o = fs(o))
            : ((i = ha(t) ? fa : la.current), (o = (r = null != (r = t.contextTypes)) ? da(e, i) : ua)),
        (t = new t(n, o)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = Lu),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
    );
}
function Du(e, t, n, r) {
    ((e = t.state),
        'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Lu.enqueueReplaceState(t, t.state, null));
}
function zu(e, t, n, r) {
    var i = e.stateNode;
    ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), ms(e));
    var o = t.contextType;
    ('object' == typeof o && null !== o ? (i.context = fs(o)) : ((o = ha(t) ? fa : la.current), (i.context = da(e, o))),
        (i.state = e.memoizedState),
        'function' == typeof (o = t.getDerivedStateFromProps) && (Iu(e, t, o, n), (i.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof i.getSnapshotBeforeUpdate ||
            ('function' != typeof i.UNSAFE_componentWillMount && 'function' != typeof i.componentWillMount) ||
            ((t = i.state),
            'function' == typeof i.componentWillMount && i.componentWillMount(),
            'function' == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(),
            t !== i.state && Lu.enqueueReplaceState(i, i.state, null),
            Os(e, n, i, r),
            (i.state = e.memoizedState)),
        'function' == typeof i.componentDidMount && (e.flags |= 4194308));
}
function Fu(e, t) {
    try {
        var n = '',
            r = t;
        do {
            ((n += wt(r)), (r = r.return));
        } while (r);
        var i = n;
    } catch (o) {
        i = '\nError generating stack: ' + o.message + '\n' + o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
}
function $u(e, t, n) {
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
var qu = 'function' == typeof WeakMap ? WeakMap : Map;
function Ku(e, t, n) {
    (((n = ys(-1, n)).tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
        (n.callback = function () {
            (kc || ((kc = !0), (xc = r)), Qu(0, t));
        }),
        n
    );
}
function Hu(e, t, n) {
    (n = ys(-1, n)).tag = 3;
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
                (Qu(0, t), 'function' != typeof r && (null === Pc ? (Pc = new Set([this])) : Pc.add(this)));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
            }),
        n
    );
}
function Gu(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new qu();
        var i = new Set();
        r.set(t, i);
    } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = af.bind(null, e, t, n)), t.then(e, e));
}
function Xu(e) {
    do {
        var t;
        if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e;
        e = e.return;
    } while (null !== e);
    return null;
}
function Yu(e, t, n, r, i) {
    return 0 == (1 & e.mode)
        ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                1 === n.tag && (null === n.alternate ? (n.tag = 17) : (((t = ys(-1, 1)).tag = 2), _s(n, t, 1))),
                (n.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = i), e);
}
var Ju = et.ReactCurrentOwner,
    Zu = !1;
function el(e, t, n, r) {
    t.child = null === e ? ns(t, null, n, r) : ts(t, e.child, n, r);
}
function tl(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return (
        cs(t, i),
        (r = Xs(e, t, n, r, o, i)),
        (n = Ys()),
        null === e || Zu
            ? (Ma && n && Wa(t), (t.flags |= 1), el(e, t, r, i), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), kl(e, t, i))
    );
}
function nl(e, t, n, r, i) {
    if (null === e) {
        var o = n.type;
        return 'function' != typeof o ||
            hf(o) ||
            void 0 !== o.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = vf(n.type, null, r, t, t.mode, i)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = o), rl(e, t, o, r, i));
    }
    if (((o = e.child), 0 == (e.lanes & i))) {
        var a = o.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : zi)(a, r) && e.ref === t.ref) return kl(e, t, i);
    }
    return ((t.flags |= 1), ((e = pf(o, r)).ref = t.ref), (e.return = t), (t.child = e));
}
function rl(e, t, n, r, i) {
    if (null !== e) {
        var o = e.memoizedProps;
        if (zi(o, r) && e.ref === t.ref) {
            if (((Zu = !1), (t.pendingProps = r = o), 0 == (e.lanes & i))) return ((t.lanes = e.lanes), kl(e, t, i));
            0 != (131072 & e.flags) && (Zu = !0);
        }
    }
    return al(e, t, n, r, i);
}
function il(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = null !== e ? e.memoizedState : null;
    if ('hidden' === r.mode)
        if (0 == (1 & t.mode))
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), sa(hc, dc), (dc |= n));
        else {
            if (0 == (1073741824 & n))
                return (
                    (e = null !== o ? o.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    sa(hc, dc),
                    (dc |= e),
                    null
                );
            ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== o ? o.baseLanes : n),
                sa(hc, dc),
                (dc |= r));
        }
    else (null !== o ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), sa(hc, dc), (dc |= r));
    return (el(e, t, i, n), t.child);
}
function ol(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function al(e, t, n, r, i) {
    var o = ha(n) ? fa : la.current;
    return (
        (o = da(t, o)),
        cs(t, i),
        (n = Xs(e, t, n, r, o, i)),
        (r = Ys()),
        null === e || Zu
            ? (Ma && r && Wa(t), (t.flags |= 1), el(e, t, n, i), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), kl(e, t, i))
    );
}
function sl(e, t, n, r, i) {
    if (ha(n)) {
        var o = !0;
        ma(t);
    } else o = !1;
    if ((cs(t, i), null === t.stateNode)) (Ol(e, t), Vu(t, n, r), zu(t, n, r, i), (r = !0));
    else if (null === e) {
        var a = t.stateNode,
            s = t.memoizedProps;
        a.props = s;
        var u = a.context,
            l = n.contextType;
        'object' == typeof l && null !== l ? (l = fs(l)) : (l = da(t, (l = ha(n) ? fa : la.current)));
        var c = n.getDerivedStateFromProps,
            f = 'function' == typeof c || 'function' == typeof a.getSnapshotBeforeUpdate;
        (f ||
            ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
                'function' != typeof a.componentWillReceiveProps) ||
            ((s !== r || u !== l) && Du(t, a, r, l)),
            (gs = !1));
        var d = t.memoizedState;
        ((a.state = d),
            Os(t, r, a, i),
            (u = t.memoizedState),
            s !== r || d !== u || ca.current || gs
                ? ('function' == typeof c && (Iu(t, n, c, r), (u = t.memoizedState)),
                  (s = gs || Mu(t, n, s, r, d, u, l))
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
            bs(e, t),
            (s = t.memoizedProps),
            (l = t.type === t.elementType ? s : Ru(t.type, s)),
            (a.props = l),
            (f = t.pendingProps),
            (d = a.context),
            'object' == typeof (u = n.contextType) && null !== u
                ? (u = fs(u))
                : (u = da(t, (u = ha(n) ? fa : la.current))));
        var h = n.getDerivedStateFromProps;
        ((c = 'function' == typeof h || 'function' == typeof a.getSnapshotBeforeUpdate) ||
            ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
                'function' != typeof a.componentWillReceiveProps) ||
            ((s !== f || d !== u) && Du(t, a, r, u)),
            (gs = !1),
            (d = t.memoizedState),
            (a.state = d),
            Os(t, r, a, i));
        var p = t.memoizedState;
        s !== f || d !== p || ca.current || gs
            ? ('function' == typeof h && (Iu(t, n, h, r), (p = t.memoizedState)),
              (l = gs || Mu(t, n, l, r, d, p, u) || !1)
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
    return ul(e, t, n, r, o, i);
}
function ul(e, t, n, r, i, o) {
    ol(e, t);
    var a = 0 != (128 & t.flags);
    if (!r && !a) return (i && ba(t, n, !1), kl(e, t, o));
    ((r = t.stateNode), (Ju.current = t));
    var s = a && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
    return (
        (t.flags |= 1),
        null !== e && a ? ((t.child = ts(t, e.child, null, o)), (t.child = ts(t, null, s, o))) : el(e, t, s, o),
        (t.memoizedState = r.state),
        i && ba(t, n, !0),
        t.child
    );
}
function ll(e) {
    var t = e.stateNode;
    (t.pendingContext ? va(0, t.pendingContext, t.pendingContext !== t.context) : t.context && va(0, t.context, !1),
        Cs(e, t.containerInfo));
}
function cl(e, t, n, r, i) {
    return (Ha(), Ga(i), (t.flags |= 256), el(e, t, n, r), t.child);
}
var fl,
    dl,
    hl,
    pl,
    vl = { dehydrated: null, treeContext: null, retryLane: 0 };
function gl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function ml(e, t, n) {
    var r,
        i = t.pendingProps,
        o = Ns.current,
        a = !1,
        s = 0 != (128 & t.flags);
    if (
        ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)),
        r ? ((a = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (o |= 1),
        sa(Ns, 1 & o),
        null === e)
    )
        return (
            $a(t),
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
                            : (a = mf(s, i, 0, null)),
                        (e = gf(e, i, n, null)),
                        (a.return = t),
                        (e.return = t),
                        (a.sibling = e),
                        (t.child = a),
                        (t.child.memoizedState = gl(n)),
                        (t.memoizedState = vl),
                        e)
                      : bl(t, s))
        );
    if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
        return (function (e, t, n, r, i, o, a) {
            if (n)
                return 256 & t.flags
                    ? ((t.flags &= -257), yl(e, t, a, (r = $u(Error(Me(422))))))
                    : null !== t.memoizedState
                      ? ((t.child = e.child), (t.flags |= 128), null)
                      : ((o = r.fallback),
                        (i = t.mode),
                        (r = mf({ mode: 'visible', children: r.children }, i, 0, null)),
                        ((o = gf(o, i, a, null)).flags |= 2),
                        (r.return = t),
                        (o.return = t),
                        (r.sibling = o),
                        (t.child = r),
                        0 != (1 & t.mode) && ts(t, e.child, null, a),
                        (t.child.memoizedState = gl(a)),
                        (t.memoizedState = vl),
                        o);
            if (0 == (1 & t.mode)) return yl(e, t, a, null);
            if ('$!' === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset)) var s = r.dgst;
                return ((r = s), yl(e, t, a, (r = $u((o = Error(Me(419))), r, void 0))));
            }
            if (((s = 0 != (a & e.childLanes)), Zu || s)) {
                if (null !== (r = lc)) {
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
                        ((o.retryLane = i), vs(e, i), Rc(r, e, i, -1));
                }
                return (Gc(), yl(e, t, a, (r = $u(Error(Me(421))))));
            }
            return '$?' === i.data
                ? ((t.flags |= 128), (t.child = e.child), (t = uf.bind(null, e)), (i._reactRetry = t), null)
                : ((e = o.treeContext),
                  (La = $o(i.nextSibling)),
                  (Ia = t),
                  (Ma = !0),
                  (Va = null),
                  null !== e &&
                      ((Aa[Ta++] = ja), (Aa[Ta++] = Ua), (Aa[Ta++] = Ca), (ja = e.id), (Ua = e.overflow), (Ca = t)),
                  (t = bl(t, r.children)),
                  (t.flags |= 4096),
                  t);
        })(e, t, s, i, r, o, n);
    if (a) {
        ((a = i.fallback), (s = t.mode), (r = (o = e.child).sibling));
        var u = { mode: 'hidden', children: i.children };
        return (
            0 == (1 & s) && t.child !== o
                ? (((i = t.child).childLanes = 0), (i.pendingProps = u), (t.deletions = null))
                : ((i = pf(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
            null !== r ? (a = pf(r, a)) : ((a = gf(a, s, n, null)).flags |= 2),
            (a.return = t),
            (i.return = t),
            (i.sibling = a),
            (t.child = i),
            (i = a),
            (a = t.child),
            (s =
                null === (s = e.child.memoizedState)
                    ? gl(n)
                    : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
            (a.memoizedState = s),
            (a.childLanes = e.childLanes & ~n),
            (t.memoizedState = vl),
            i
        );
    }
    return (
        (e = (a = e.child).sibling),
        (i = pf(a, { mode: 'visible', children: i.children })),
        0 == (1 & t.mode) && (i.lanes = n),
        (i.return = t),
        (i.sibling = null),
        null !== e && (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = i),
        (t.memoizedState = null),
        i
    );
}
function bl(e, t) {
    return (((t = mf({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t));
}
function yl(e, t, n, r) {
    return (
        null !== r && Ga(r),
        ts(t, e.child, null, n),
        ((e = bl(t, t.pendingProps.children)).flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function _l(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (null !== r && (r.lanes |= t), ls(e.return, t, n));
}
function wl(e, t, n, r, i) {
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
function Sl(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if ((el(e, t, r.children, n), 0 != (2 & (r = Ns.current)))) ((r = (1 & r) | 2), (t.flags |= 128));
    else {
        if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && _l(e, n, t);
                else if (19 === e.tag) _l(e, n, t);
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
    if ((sa(Ns, r), 0 == (1 & t.mode))) t.memoizedState = null;
    else
        switch (i) {
            case 'forwards':
                for (n = t.child, i = null; null !== n; )
                    (null !== (e = n.alternate) && null === Ws(e) && (i = n), (n = n.sibling));
                (null === (n = i) ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
                    wl(t, !1, i, n, o));
                break;
            case 'backwards':
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                    if (null !== (e = i.alternate) && null === Ws(e)) {
                        t.child = i;
                        break;
                    }
                    ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
                }
                wl(t, !0, n, null, o);
                break;
            case 'together':
                wl(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Ol(e, t) {
    0 == (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function kl(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (gc |= t.lanes), 0 == (n & t.childLanes))) return null;
    if (null !== e && t.child !== e.child) throw Error(Me(153));
    if (null !== t.child) {
        for (n = pf((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            ((e = e.sibling), ((n = n.sibling = pf(e, e.pendingProps)).return = t));
        n.sibling = null;
    }
    return t.child;
}
function xl(e, t) {
    if (!Ma)
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
function Pl(e) {
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
function El(e, t, n) {
    var r = t.pendingProps;
    switch ((Ra(t), t.tag)) {
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
            return (Pl(t), null);
        case 1:
        case 17:
            return (ha(t.type) && pa(), Pl(t), null);
        case 3:
            return (
                (r = t.stateNode),
                js(),
                aa(ca),
                aa(la),
                Is(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                    (qa(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                          ((t.flags |= 1024), null !== Va && (Vc(Va), (Va = null)))),
                dl(e, t),
                Pl(t),
                null
            );
        case 5:
            Bs(t);
            var i = Ts(As.current);
            if (((n = t.type), null !== e && null != t.stateNode))
                (hl(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(Me(166));
                    return (Pl(t), null);
                }
                if (((e = Ts(Ps.current)), qa(t))) {
                    ((r = t.stateNode), (n = t.type));
                    var o = t.memoizedProps;
                    switch (((r[Ko] = t), (r[Ho] = o), (e = 0 != (1 & t.mode)), n)) {
                        case 'dialog':
                            (_o('cancel', r), _o('close', r));
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            _o('load', r);
                            break;
                        case 'video':
                        case 'audio':
                            for (i = 0; i < go.length; i++) _o(go[i], r);
                            break;
                        case 'source':
                            _o('error', r);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            (_o('error', r), _o('load', r));
                            break;
                        case 'details':
                            _o('toggle', r);
                            break;
                        case 'input':
                            (Ct(r, o), _o('invalid', r));
                            break;
                        case 'select':
                            ((r._wrapperState = { wasMultiple: !!o.multiple }), _o('invalid', r));
                            break;
                        case 'textarea':
                            (Lt(r, o), _o('invalid', r));
                    }
                    for (var a in (Jt(n, o), (i = null), o))
                        if (o.hasOwnProperty(a)) {
                            var s = o[a];
                            'children' === a
                                ? 'string' == typeof s
                                    ? r.textContent !== s &&
                                      (!0 !== o.suppressHydrationWarning && Bo(r.textContent, s, e),
                                      (i = ['children', s]))
                                    : 'number' == typeof s &&
                                      r.textContent !== '' + s &&
                                      (!0 !== o.suppressHydrationWarning && Bo(r.textContent, s, e),
                                      (i = ['children', '' + s]))
                                : De.hasOwnProperty(a) && null != s && 'onScroll' === a && _o('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            (Pt(r), Bt(r, o, !0));
                            break;
                        case 'textarea':
                            (Pt(r), Vt(r));
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            'function' == typeof o.onClick && (r.onclick = No);
                    }
                    ((r = i), (t.updateQueue = r), null !== r && (t.flags |= 4));
                } else {
                    ((a = 9 === i.nodeType ? i : i.ownerDocument),
                        'http://www.w3.org/1999/xhtml' === e && (e = Dt(n)),
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
                        (e[Ko] = t),
                        (e[Ho] = r),
                        fl(e, t, !1, !1),
                        (t.stateNode = e));
                    e: {
                        switch (((a = Zt(n, r)), n)) {
                            case 'dialog':
                                (_o('cancel', e), _o('close', e), (i = r));
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                (_o('load', e), (i = r));
                                break;
                            case 'video':
                            case 'audio':
                                for (i = 0; i < go.length; i++) _o(go[i], e);
                                i = r;
                                break;
                            case 'source':
                                (_o('error', e), (i = r));
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                (_o('error', e), _o('load', e), (i = r));
                                break;
                            case 'details':
                                (_o('toggle', e), (i = r));
                                break;
                            case 'input':
                                (Ct(e, r), (i = Tt(e, r)), _o('invalid', e));
                                break;
                            case 'option':
                            default:
                                i = r;
                                break;
                            case 'select':
                                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (i = mt({}, r, { value: void 0 })),
                                    _o('invalid', e));
                                break;
                            case 'textarea':
                                (Lt(e, r), (i = It(e, r)), _o('invalid', e));
                        }
                        for (o in (Jt(n, i), (s = i)))
                            if (s.hasOwnProperty(o)) {
                                var u = s[o];
                                'style' === o
                                    ? Xt(e, u)
                                    : 'dangerouslySetInnerHTML' === o
                                      ? null != (u = u ? u.__html : void 0) && Qt(e, u)
                                      : 'children' === o
                                        ? 'string' == typeof u
                                            ? ('textarea' !== n || '' !== u) && qt(e, u)
                                            : 'number' == typeof u && qt(e, '' + u)
                                        : 'suppressContentEditableWarning' !== o &&
                                          'suppressHydrationWarning' !== o &&
                                          'autoFocus' !== o &&
                                          (De.hasOwnProperty(o)
                                              ? null != u && 'onScroll' === o && _o('scroll', e)
                                              : null != u && Ze(e, o, u, a));
                            }
                        switch (n) {
                            case 'input':
                                (Pt(e), Bt(e, r, !1));
                                break;
                            case 'textarea':
                                (Pt(e), Vt(e));
                                break;
                            case 'option':
                                null != r.value && e.setAttribute('value', '' + kt(r.value));
                                break;
                            case 'select':
                                ((e.multiple = !!r.multiple),
                                    null != (o = r.value)
                                        ? Rt(e, !!r.multiple, o, !1)
                                        : null != r.defaultValue && Rt(e, !!r.multiple, r.defaultValue, !0));
                                break;
                            default:
                                'function' == typeof i.onClick && (e.onclick = No);
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
            return (Pl(t), null);
        case 6:
            if (e && null != t.stateNode) pl(e, t, e.memoizedProps, r);
            else {
                if ('string' != typeof r && null === t.stateNode) throw Error(Me(166));
                if (((n = Ts(As.current)), Ts(Ps.current), qa(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Ko] = t),
                        (o = r.nodeValue !== n) && null !== (e = Ia))
                    )
                        switch (e.tag) {
                            case 3:
                                Bo(r.nodeValue, n, 0 != (1 & e.mode));
                                break;
                            case 5:
                                !0 !== e.memoizedProps.suppressHydrationWarning &&
                                    Bo(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                    o && (t.flags |= 4);
                } else (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Ko] = t), (t.stateNode = r));
            }
            return (Pl(t), null);
        case 13:
            if (
                (aa(Ns),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (Ma && null !== La && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                    (Ka(), Ha(), (t.flags |= 98560), (o = !1));
                else if (((o = qa(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!o) throw Error(Me(318));
                        if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null)) throw Error(Me(317));
                        o[Ko] = t;
                    } else (Ha(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                    (Pl(t), (o = !1));
                } else (null !== Va && (Vc(Va), (Va = null)), (o = !0));
                if (!o) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) && (null === e || 0 != (1 & Ns.current) ? 0 === pc && (pc = 3) : Gc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Pl(t),
                  null);
        case 4:
            return (js(), dl(e, t), null === e && Oo(t.stateNode.containerInfo), Pl(t), null);
        case 10:
            return (us(t.type._context), Pl(t), null);
        case 19:
            if ((aa(Ns), null === (o = t.memoizedState))) return (Pl(t), null);
            if (((r = 0 != (128 & t.flags)), null === (a = o.rendering)))
                if (r) xl(o, !1);
                else {
                    if (0 !== pc || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (a = Ws(e))) {
                                for (
                                    t.flags |= 128,
                                        xl(o, !1),
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
                                return (sa(Ns, (1 & Ns.current) | 2), t.child);
                            }
                            e = e.sibling;
                        }
                    null !== o.tail && Un() > Sc && ((t.flags |= 128), (r = !0), xl(o, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = Ws(a))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            xl(o, !0),
                            null === o.tail && 'hidden' === o.tailMode && !a.alternate && !Ma)
                        )
                            return (Pl(t), null);
                    } else
                        2 * Un() - o.renderingStartTime > Sc &&
                            1073741824 !== n &&
                            ((t.flags |= 128), (r = !0), xl(o, !1), (t.lanes = 4194304));
                o.isBackwards
                    ? ((a.sibling = t.child), (t.child = a))
                    : (null !== (n = o.last) ? (n.sibling = a) : (t.child = a), (o.last = a));
            }
            return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Un()),
                  (t.sibling = null),
                  (n = Ns.current),
                  sa(Ns, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Pl(t), null);
        case 22:
        case 23:
            return (
                Qc(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 != (1 & t.mode)
                    ? 0 != (1073741824 & dc) && (Pl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                    : Pl(t),
                null
            );
        case 24:
        case 25:
            return null;
    }
    throw Error(Me(156, t.tag));
}
function Al(e, t) {
    switch ((Ra(t), t.tag)) {
        case 1:
            return (ha(t.type) && pa(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null);
        case 3:
            return (
                js(),
                aa(ca),
                aa(la),
                Is(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 5:
            return (Bs(t), null);
        case 13:
            if ((aa(Ns), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(Me(340));
                Ha();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return (aa(Ns), null);
        case 4:
            return (js(), null);
        case 10:
            return (us(t.type._context), null);
        case 22:
        case 23:
            return (Qc(), null);
        default:
            return null;
    }
}
((fl = function (e, t) {
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
    (dl = function () {}),
    (hl = function (e, t, n, r) {
        var i = e.memoizedProps;
        if (i !== r) {
            ((e = t.stateNode), Ts(Ps.current));
            var o,
                a = null;
            switch (n) {
                case 'input':
                    ((i = Tt(e, i)), (r = Tt(e, r)), (a = []));
                    break;
                case 'select':
                    ((i = mt({}, i, { value: void 0 })), (r = mt({}, r, { value: void 0 })), (a = []));
                    break;
                case 'textarea':
                    ((i = It(e, i)), (r = It(e, r)), (a = []));
                    break;
                default:
                    'function' != typeof i.onClick && 'function' == typeof r.onClick && (e.onclick = No);
            }
            for (l in (Jt(n, r), (n = null), i))
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
                            (De.hasOwnProperty(l) ? a || (a = []) : (a = a || []).push(l, null));
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
                                (De.hasOwnProperty(l)
                                    ? (null != u && 'onScroll' === l && _o('scroll', e), a || s === u || (a = []))
                                    : (a = a || []).push(l, u));
            }
            n && (a = a || []).push('style', n);
            var l = a;
            (t.updateQueue = l) && (t.flags |= 4);
        }
    }),
    (pl = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
    }));
var Tl = !1,
    Cl = !1,
    jl = 'function' == typeof WeakSet ? WeakSet : Set,
    Ul = null;
function Bl(e, t) {
    var n = e.ref;
    if (null !== n)
        if ('function' == typeof n)
            try {
                n(null);
            } catch (r) {
                of(e, t, r);
            }
        else n.current = null;
}
function Nl(e, t, n) {
    try {
        n();
    } catch (r) {
        of(e, t, r);
    }
}
var Wl = !1;
function Rl(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var i = (r = r.next);
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                ((i.destroy = void 0), void 0 !== o && Nl(t, n, o));
            }
            i = i.next;
        } while (i !== r);
    }
}
function Il(e, t) {
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
function Ll(e) {
    var t = e.ref;
    if (null !== t) {
        var n = e.stateNode;
        (e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e));
    }
}
function Ml(e) {
    var t = e.alternate;
    (null !== t && ((e.alternate = null), Ml(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[Ko], delete t[Ho], delete t[Xo], delete t[Yo], delete t[Jo]),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
}
function Vl(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function Dl(e) {
    e: for (;;) {
        for (; null === e.sibling; ) {
            if (null === e.return || Vl(e.return)) return null;
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
function zl(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
        ((e = e.stateNode),
            t
                ? 8 === n.nodeType
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = No)));
    else if (4 !== r && null !== (e = e.child))
        for (zl(e, t, n), e = e.sibling; null !== e; ) (zl(e, t, n), (e = e.sibling));
}
function Fl(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (4 !== r && null !== (e = e.child))
        for (Fl(e, t, n), e = e.sibling; null !== e; ) (Fl(e, t, n), (e = e.sibling));
}
var $l = null,
    Ql = !1;
function ql(e, t, n) {
    for (n = n.child; null !== n; ) (Kl(e, t, n), (n = n.sibling));
}
function Kl(e, t, n) {
    if (Vn && 'function' == typeof Vn.onCommitFiberUnmount)
        try {
            Vn.onCommitFiberUnmount(Mn, n);
        } catch (s) {}
    switch (n.tag) {
        case 5:
            Cl || Bl(n, t);
        case 6:
            var r = $l,
                i = Ql;
            (($l = null),
                ql(e, t, n),
                (Ql = i),
                null !== ($l = r) &&
                    (Ql
                        ? ((e = $l),
                          (n = n.stateNode),
                          8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : $l.removeChild(n.stateNode)));
            break;
        case 18:
            null !== $l &&
                (Ql
                    ? ((e = $l),
                      (n = n.stateNode),
                      8 === e.nodeType ? Fo(e.parentNode, n) : 1 === e.nodeType && Fo(e, n),
                      Or(e))
                    : Fo($l, n.stateNode));
            break;
        case 4:
            ((r = $l), (i = Ql), ($l = n.stateNode.containerInfo), (Ql = !0), ql(e, t, n), ($l = r), (Ql = i));
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Cl && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                i = r = r.next;
                do {
                    var o = i,
                        a = o.destroy;
                    ((o = o.tag), void 0 !== a && (0 != (2 & o) || 0 != (4 & o)) && Nl(n, t, a), (i = i.next));
                } while (i !== r);
            }
            ql(e, t, n);
            break;
        case 1:
            if (!Cl && (Bl(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount))
                try {
                    ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
                } catch (s) {
                    of(n, t, s);
                }
            ql(e, t, n);
            break;
        case 21:
            ql(e, t, n);
            break;
        case 22:
            1 & n.mode ? ((Cl = (r = Cl) || null !== n.memoizedState), ql(e, t, n), (Cl = r)) : ql(e, t, n);
            break;
        default:
            ql(e, t, n);
    }
}
function Hl(e) {
    var t = e.updateQueue;
    if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        (null === n && (n = e.stateNode = new jl()),
            t.forEach(function (t) {
                var r = lf.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
            }));
    }
}
function Gl(e, t) {
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
                            (($l = s.stateNode), (Ql = !1));
                            break e;
                        case 3:
                        case 4:
                            (($l = s.stateNode.containerInfo), (Ql = !0));
                            break e;
                    }
                    s = s.return;
                }
                if (null === $l) throw Error(Me(160));
                (Kl(o, a, i), ($l = null), (Ql = !1));
                var u = i.alternate;
                (null !== u && (u.return = null), (i.return = null));
            } catch (l) {
                of(i, t, l);
            }
        }
    if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) (Xl(t, e), (t = t.sibling));
}
function Xl(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Gl(t, e), Yl(e), 4 & r)) {
                try {
                    (Rl(3, e, e.return), Il(3, e));
                } catch (v) {
                    of(e, e.return, v);
                }
                try {
                    Rl(5, e, e.return);
                } catch (v) {
                    of(e, e.return, v);
                }
            }
            break;
        case 1:
            (Gl(t, e), Yl(e), 512 & r && null !== n && Bl(n, n.return));
            break;
        case 5:
            if ((Gl(t, e), Yl(e), 512 & r && null !== n && Bl(n, n.return), 32 & e.flags)) {
                var i = e.stateNode;
                try {
                    qt(i, '');
                } catch (v) {
                    of(e, e.return, v);
                }
            }
            if (4 & r && null != (i = e.stateNode)) {
                var o = e.memoizedProps,
                    a = null !== n ? n.memoizedProps : o,
                    s = e.type,
                    u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                    try {
                        ('input' === s && 'radio' === o.type && null != o.name && jt(i, o), Zt(s, a));
                        var l = Zt(s, o);
                        for (a = 0; a < u.length; a += 2) {
                            var c = u[a],
                                f = u[a + 1];
                            'style' === c
                                ? Xt(i, f)
                                : 'dangerouslySetInnerHTML' === c
                                  ? Qt(i, f)
                                  : 'children' === c
                                    ? qt(i, f)
                                    : Ze(i, c, f, l);
                        }
                        switch (s) {
                            case 'input':
                                Ut(i, o);
                                break;
                            case 'textarea':
                                Mt(i, o);
                                break;
                            case 'select':
                                var d = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!o.multiple;
                                var h = o.value;
                                null != h
                                    ? Rt(i, !!o.multiple, h, !1)
                                    : d !== !!o.multiple &&
                                      (null != o.defaultValue
                                          ? Rt(i, !!o.multiple, o.defaultValue, !0)
                                          : Rt(i, !!o.multiple, o.multiple ? [] : '', !1));
                        }
                        i[Ho] = o;
                    } catch (v) {
                        of(e, e.return, v);
                    }
            }
            break;
        case 6:
            if ((Gl(t, e), Yl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(Me(162));
                ((i = e.stateNode), (o = e.memoizedProps));
                try {
                    i.nodeValue = o;
                } catch (v) {
                    of(e, e.return, v);
                }
            }
            break;
        case 3:
            if ((Gl(t, e), Yl(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                    Or(t.containerInfo);
                } catch (v) {
                    of(e, e.return, v);
                }
            break;
        case 4:
        default:
            (Gl(t, e), Yl(e));
            break;
        case 13:
            (Gl(t, e),
                Yl(e),
                8192 & (i = e.child).flags &&
                    ((o = null !== i.memoizedState),
                    (i.stateNode.isHidden = o),
                    !o || (null !== i.alternate && null !== i.alternate.memoizedState) || (wc = Un())),
                4 & r && Hl(e));
            break;
        case 22:
            if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Cl = (l = Cl) || c), Gl(t, e), (Cl = l)) : Gl(t, e),
                Yl(e),
                8192 & r)
            ) {
                if (((l = null !== e.memoizedState), (e.stateNode.isHidden = l) && !c && 0 != (1 & e.mode)))
                    for (Ul = e, c = e.child; null !== c; ) {
                        for (f = Ul = c; null !== Ul; ) {
                            switch (((h = (d = Ul).child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Rl(4, d, d.return);
                                    break;
                                case 1:
                                    Bl(d, d.return);
                                    var p = d.stateNode;
                                    if ('function' == typeof p.componentWillUnmount) {
                                        ((r = d), (n = d.return));
                                        try {
                                            ((t = r),
                                                (p.props = t.memoizedProps),
                                                (p.state = t.memoizedState),
                                                p.componentWillUnmount());
                                        } catch (v) {
                                            of(r, n, v);
                                        }
                                    }
                                    break;
                                case 5:
                                    Bl(d, d.return);
                                    break;
                                case 22:
                                    if (null !== d.memoizedState) {
                                        tc(f);
                                        continue;
                                    }
                            }
                            null !== h ? ((h.return = d), (Ul = h)) : tc(f);
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
                                          (s.style.display = Gt('display', a))));
                            } catch (v) {
                                of(e, e.return, v);
                            }
                        }
                    } else if (6 === f.tag) {
                        if (null === c)
                            try {
                                f.stateNode.nodeValue = l ? '' : f.memoizedProps;
                            } catch (v) {
                                of(e, e.return, v);
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
            (Gl(t, e), Yl(e), 4 & r && Hl(e));
        case 21:
    }
}
function Yl(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e: {
                for (var n = e.return; null !== n; ) {
                    if (Vl(n)) {
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
                    (32 & r.flags && (qt(i, ''), (r.flags &= -33)), Fl(e, Dl(e), i));
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo;
                    zl(e, Dl(e), o);
                    break;
                default:
                    throw Error(Me(161));
            }
        } catch (a) {
            of(e, e.return, a);
        }
        e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
}
function Jl(e, t, n) {
    ((Ul = e), Zl(e));
}
function Zl(e, t, n) {
    for (var r = 0 != (1 & e.mode); null !== Ul; ) {
        var i = Ul,
            o = i.child;
        if (22 === i.tag && r) {
            var a = null !== i.memoizedState || Tl;
            if (!a) {
                var s = i.alternate,
                    u = (null !== s && null !== s.memoizedState) || Cl;
                s = Tl;
                var l = Cl;
                if (((Tl = a), (Cl = u) && !l))
                    for (Ul = i; null !== Ul; )
                        ((u = (a = Ul).child),
                            22 === a.tag && null !== a.memoizedState
                                ? nc(i)
                                : null !== u
                                  ? ((u.return = a), (Ul = u))
                                  : nc(i));
                for (; null !== o; ) ((Ul = o), Zl(o), (o = o.sibling));
                ((Ul = i), (Tl = s), (Cl = l));
            }
            ec(e);
        } else 0 != (8772 & i.subtreeFlags) && null !== o ? ((o.return = i), (Ul = o)) : ec(e);
    }
}
function ec(e) {
    for (; null !== Ul; ) {
        var t = Ul;
        if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
                if (0 != (8772 & t.flags))
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Cl || Il(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (4 & t.flags && !Cl)
                                if (null === n) r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : Ru(t.type, n.memoizedProps);
                                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var o = t.updateQueue;
                            null !== o && ks(t, o, r);
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
                                ks(t, a, n);
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
                                        null !== f && Or(f);
                                    }
                                }
                            }
                            break;
                        default:
                            throw Error(Me(163));
                    }
                Cl || (512 & t.flags && Ll(t));
            } catch (d) {
                of(t, t.return, d);
            }
        }
        if (t === e) {
            Ul = null;
            break;
        }
        if (null !== (n = t.sibling)) {
            ((n.return = t.return), (Ul = n));
            break;
        }
        Ul = t.return;
    }
}
function tc(e) {
    for (; null !== Ul; ) {
        var t = Ul;
        if (t === e) {
            Ul = null;
            break;
        }
        var n = t.sibling;
        if (null !== n) {
            ((n.return = t.return), (Ul = n));
            break;
        }
        Ul = t.return;
    }
}
function nc(e) {
    for (; null !== Ul; ) {
        var t = Ul;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Il(4, t);
                    } catch (u) {
                        of(t, n, u);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if ('function' == typeof r.componentDidMount) {
                        var i = t.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            of(t, i, u);
                        }
                    }
                    var o = t.return;
                    try {
                        Ll(t);
                    } catch (u) {
                        of(t, o, u);
                    }
                    break;
                case 5:
                    var a = t.return;
                    try {
                        Ll(t);
                    } catch (u) {
                        of(t, a, u);
                    }
            }
        } catch (u) {
            of(t, t.return, u);
        }
        if (t === e) {
            Ul = null;
            break;
        }
        var s = t.sibling;
        if (null !== s) {
            ((s.return = t.return), (Ul = s));
            break;
        }
        Ul = t.return;
    }
}
var rc,
    ic = Math.ceil,
    oc = et.ReactCurrentDispatcher,
    ac = et.ReactCurrentOwner,
    sc = et.ReactCurrentBatchConfig,
    uc = 0,
    lc = null,
    cc = null,
    fc = 0,
    dc = 0,
    hc = oa(0),
    pc = 0,
    vc = null,
    gc = 0,
    mc = 0,
    bc = 0,
    yc = null,
    _c = null,
    wc = 0,
    Sc = 1 / 0,
    Oc = null,
    kc = !1,
    xc = null,
    Pc = null,
    Ec = !1,
    Ac = null,
    Tc = 0,
    Cc = 0,
    jc = null,
    Uc = -1,
    Bc = 0;
function Nc() {
    return 0 != (6 & uc) ? Un() : -1 !== Uc ? Uc : (Uc = Un());
}
function Wc(e) {
    return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & uc) && 0 !== fc
          ? fc & -fc
          : null !== Xa.transition
            ? (0 === Bc && (Bc = Xn()), Bc)
            : 0 !== (e = er)
              ? e
              : (e = void 0 === (e = window.event) ? 16 : jr(e.type));
}
function Rc(e, t, n, r) {
    if (50 < Cc) throw ((Cc = 0), (jc = null), Error(Me(185)));
    (Jn(e, n, r),
        (0 != (2 & uc) && e === lc) ||
            (e === lc && (0 == (2 & uc) && (mc |= n), 4 === pc && Dc(e, fc)),
            Ic(e, r),
            1 === n && 0 === uc && 0 == (1 & t.mode) && ((Sc = Un() + 500), _a && Oa())));
}
function Ic(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
            var a = 31 - Dn(o),
                s = 1 << a,
                u = i[a];
            (-1 === u ? (0 != (s & n) && 0 == (s & r)) || (i[a] = Hn(s, t)) : u <= t && (e.expiredLanes |= s),
                (o &= ~s));
        }
    })(e, t);
    var r = Kn(e, e === lc ? fc : 0);
    if (0 === r) (null !== n && Tn(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && Tn(n), 1 === t))
            (0 === e.tag
                ? (function (e) {
                      ((_a = !0), Sa(e));
                  })(zc.bind(null, e))
                : Sa(zc.bind(null, e)),
                Do(function () {
                    0 == (6 & uc) && Oa();
                }),
                (n = null));
        else {
            switch (tr(r)) {
                case 1:
                    n = Nn;
                    break;
                case 4:
                    n = Wn;
                    break;
                case 16:
                default:
                    n = Rn;
                    break;
                case 536870912:
                    n = Ln;
            }
            n = cf(n, Lc.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = n));
    }
}
function Lc(e, t) {
    if (((Uc = -1), (Bc = 0), 0 != (6 & uc))) throw Error(Me(327));
    var n = e.callbackNode;
    if (nf() && e.callbackNode !== n) return null;
    var r = Kn(e, e === lc ? fc : 0);
    if (0 === r) return null;
    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = Xc(e, r);
    else {
        t = r;
        var i = uc;
        uc |= 2;
        var o = Hc();
        for ((lc === e && fc === t) || ((Oc = null), (Sc = Un() + 500), qc(e, t)); ; )
            try {
                Jc();
                break;
            } catch (s) {
                Kc(e, s);
            }
        (ss(), (oc.current = o), (uc = i), null !== cc ? (t = 0) : ((lc = null), (fc = 0), (t = pc)));
    }
    if (0 !== t) {
        if ((2 === t && 0 !== (i = Gn(e)) && ((r = i), (t = Mc(e, i))), 1 === t))
            throw ((n = vc), qc(e, 0), Dc(e, r), Ic(e, Un()), n);
        if (6 === t) Dc(e, r);
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
                                            if (!Di(o(), i)) return !1;
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
                    (2 === (t = Xc(e, r)) && 0 !== (o = Gn(e)) && ((r = o), (t = Mc(e, o))), 1 === t))
            )
                throw ((n = vc), qc(e, 0), Dc(e, r), Ic(e, Un()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(Me(345));
                case 2:
                case 5:
                    tf(e, _c, Oc);
                    break;
                case 3:
                    if ((Dc(e, r), (130023424 & r) === r && 10 < (t = wc + 500 - Un()))) {
                        if (0 !== Kn(e, 0)) break;
                        if (((i = e.suspendedLanes) & r) !== r) {
                            (Nc(), (e.pingedLanes |= e.suspendedLanes & i));
                            break;
                        }
                        e.timeoutHandle = Lo(tf.bind(null, e, _c, Oc), t);
                        break;
                    }
                    tf(e, _c, Oc);
                    break;
                case 4:
                    if ((Dc(e, r), (4194240 & r) === r)) break;
                    for (t = e.eventTimes, i = -1; 0 < r; ) {
                        var a = 31 - Dn(r);
                        ((o = 1 << a), (a = t[a]) > i && (i = a), (r &= ~o));
                    }
                    if (
                        ((r = i),
                        10 <
                            (r =
                                (120 > (r = Un() - r)
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
                        e.timeoutHandle = Lo(tf.bind(null, e, _c, Oc), r);
                        break;
                    }
                    tf(e, _c, Oc);
                    break;
                default:
                    throw Error(Me(329));
            }
        }
    }
    return (Ic(e, Un()), e.callbackNode === n ? Lc.bind(null, e) : null);
}
function Mc(e, t) {
    var n = yc;
    return (
        e.current.memoizedState.isDehydrated && (qc(e, t).flags |= 256),
        2 !== (e = Xc(e, t)) && ((t = _c), (_c = n), null !== t && Vc(t)),
        e
    );
}
function Vc(e) {
    null === _c ? (_c = e) : _c.push.apply(_c, e);
}
function Dc(e, t) {
    for (t &= ~bc, t &= ~mc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Dn(t),
            r = 1 << n;
        ((e[n] = -1), (t &= ~r));
    }
}
function zc(e) {
    if (0 != (6 & uc)) throw Error(Me(327));
    nf();
    var t = Kn(e, 0);
    if (0 == (1 & t)) return (Ic(e, Un()), null);
    var n = Xc(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = Gn(e);
        0 !== r && ((t = r), (n = Mc(e, r)));
    }
    if (1 === n) throw ((n = vc), qc(e, 0), Dc(e, t), Ic(e, Un()), n);
    if (6 === n) throw Error(Me(345));
    return ((e.finishedWork = e.current.alternate), (e.finishedLanes = t), tf(e, _c, Oc), Ic(e, Un()), null);
}
function Fc(e, t) {
    var n = uc;
    uc |= 1;
    try {
        return e(t);
    } finally {
        0 === (uc = n) && ((Sc = Un() + 500), _a && Oa());
    }
}
function $c(e) {
    null !== Ac && 0 === Ac.tag && 0 == (6 & uc) && nf();
    var t = uc;
    uc |= 1;
    var n = sc.transition,
        r = er;
    try {
        if (((sc.transition = null), (er = 1), e)) return e();
    } finally {
        ((er = r), (sc.transition = n), 0 == (6 & (uc = t)) && Oa());
    }
}
function Qc() {
    ((dc = hc.current), aa(hc));
}
function qc(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), Mo(n)), null !== cc))
        for (n = cc.return; null !== n; ) {
            var r = n;
            switch ((Ra(r), r.tag)) {
                case 1:
                    null != (r = r.type.childContextTypes) && pa();
                    break;
                case 3:
                    (js(), aa(ca), aa(la), Is());
                    break;
                case 5:
                    Bs(r);
                    break;
                case 4:
                    js();
                    break;
                case 13:
                case 19:
                    aa(Ns);
                    break;
                case 10:
                    us(r.type._context);
                    break;
                case 22:
                case 23:
                    Qc();
            }
            n = n.return;
        }
    if (
        ((lc = e),
        (cc = e = pf(e.current, null)),
        (fc = dc = t),
        (pc = 0),
        (vc = null),
        (bc = mc = gc = 0),
        (_c = yc = null),
        null !== ds)
    ) {
        for (t = 0; t < ds.length; t++)
            if (null !== (r = (n = ds[t]).interleaved)) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (null !== o) {
                    var a = o.next;
                    ((o.next = i), (r.next = a));
                }
                n.pending = r;
            }
        ds = null;
    }
    return e;
}
function Kc(e, t) {
    for (;;) {
        var n = cc;
        try {
            if ((ss(), (Ls.current = Uu), $s)) {
                for (var r = Ds.memoizedState; null !== r; ) {
                    var i = r.queue;
                    (null !== i && (i.pending = null), (r = r.next));
                }
                $s = !1;
            }
            if (
                ((Vs = 0),
                (Fs = zs = Ds = null),
                (Qs = !1),
                (qs = 0),
                (ac.current = null),
                null === n || null === n.return)
            ) {
                ((pc = 1), (vc = t), (cc = null));
                break;
            }
            e: {
                var o = e,
                    a = n.return,
                    s = n,
                    u = t;
                if (((t = fc), (s.flags |= 32768), null !== u && 'object' == typeof u && 'function' == typeof u.then)) {
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
                    var h = Xu(a);
                    if (null !== h) {
                        ((h.flags &= -257), Yu(h, a, s, 0, t), 1 & h.mode && Gu(o, l, t), (u = l));
                        var p = (t = h).updateQueue;
                        if (null === p) {
                            var v = new Set();
                            (v.add(u), (t.updateQueue = v));
                        } else p.add(u);
                        break e;
                    }
                    if (0 == (1 & t)) {
                        (Gu(o, l, t), Gc());
                        break e;
                    }
                    u = Error(Me(426));
                } else if (Ma && 1 & s.mode) {
                    var g = Xu(a);
                    if (null !== g) {
                        (0 == (65536 & g.flags) && (g.flags |= 256), Yu(g, a, s, 0, t), Ga(Fu(u, s)));
                        break e;
                    }
                }
                ((o = u = Fu(u, s)), 4 !== pc && (pc = 2), null === yc ? (yc = [o]) : yc.push(o), (o = a));
                do {
                    switch (o.tag) {
                        case 3:
                            ((o.flags |= 65536), (t &= -t), (o.lanes |= t), Ss(o, Ku(0, u, t)));
                            break e;
                        case 1:
                            s = u;
                            var m = o.type,
                                b = o.stateNode;
                            if (
                                0 == (128 & o.flags) &&
                                ('function' == typeof m.getDerivedStateFromError ||
                                    (null !== b &&
                                        'function' == typeof b.componentDidCatch &&
                                        (null === Pc || !Pc.has(b))))
                            ) {
                                ((o.flags |= 65536), (t &= -t), (o.lanes |= t), Ss(o, Hu(o, s, t)));
                                break e;
                            }
                    }
                    o = o.return;
                } while (null !== o);
            }
            ef(n);
        } catch (y) {
            ((t = y), cc === n && null !== n && (cc = n = n.return));
            continue;
        }
        break;
    }
}
function Hc() {
    var e = oc.current;
    return ((oc.current = Uu), null === e ? Uu : e);
}
function Gc() {
    ((0 !== pc && 3 !== pc && 2 !== pc) || (pc = 4),
        null === lc || (0 == (268435455 & gc) && 0 == (268435455 & mc)) || Dc(lc, fc));
}
function Xc(e, t) {
    var n = uc;
    uc |= 2;
    var r = Hc();
    for ((lc === e && fc === t) || ((Oc = null), qc(e, t)); ; )
        try {
            Yc();
            break;
        } catch (i) {
            Kc(e, i);
        }
    if ((ss(), (uc = n), (oc.current = r), null !== cc)) throw Error(Me(261));
    return ((lc = null), (fc = 0), pc);
}
function Yc() {
    for (; null !== cc; ) Zc(cc);
}
function Jc() {
    for (; null !== cc && !Cn(); ) Zc(cc);
}
function Zc(e) {
    var t = rc(e.alternate, e, dc);
    ((e.memoizedProps = e.pendingProps), null === t ? ef(e) : (cc = t), (ac.current = null));
}
function ef(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), 0 == (32768 & t.flags))) {
            if (null !== (n = El(n, t, dc))) return void (cc = n);
        } else {
            if (null !== (n = Al(n, t))) return ((n.flags &= 32767), void (cc = n));
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
        i = sc.transition;
    try {
        ((sc.transition = null),
            (er = 1),
            (function (e, t, n, r) {
                do {
                    nf();
                } while (null !== Ac);
                if (0 != (6 & uc)) throw Error(Me(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(Me(177));
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
                            var i = 31 - Dn(n),
                                o = 1 << i;
                            ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o));
                        }
                    })(e, o),
                    e === lc && ((cc = lc = null), (fc = 0)),
                    (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                        Ec ||
                        ((Ec = !0),
                        cf(Rn, function () {
                            return (nf(), null);
                        })),
                    (o = 0 != (15990 & n.flags)),
                    0 != (15990 & n.subtreeFlags) || o)
                ) {
                    ((o = sc.transition), (sc.transition = null));
                    var a = er;
                    er = 1;
                    var s = uc;
                    ((uc |= 4),
                        (ac.current = null),
                        (function (e, t) {
                            if (((Wo = xr), Ki((e = qi())))) {
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
                            for (Ro = { focusedElem: e, selectionRange: n }, xr = !1, Ul = t; null !== Ul; )
                                if (((e = (t = Ul).child), 0 != (1028 & t.subtreeFlags) && null !== e))
                                    ((e.return = t), (Ul = e));
                                else
                                    for (; null !== Ul; ) {
                                        t = Ul;
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
                                                                m = t.stateNode,
                                                                b = m.getSnapshotBeforeUpdate(
                                                                    t.elementType === t.type ? v : Ru(t.type, v),
                                                                    g,
                                                                );
                                                            m.__reactInternalSnapshotBeforeUpdate = b;
                                                        }
                                                        break;
                                                    case 3:
                                                        var y = t.stateNode.containerInfo;
                                                        1 === y.nodeType
                                                            ? (y.textContent = '')
                                                            : 9 === y.nodeType &&
                                                              y.documentElement &&
                                                              y.removeChild(y.documentElement);
                                                        break;
                                                    default:
                                                        throw Error(Me(163));
                                                }
                                        } catch (_) {
                                            of(t, t.return, _);
                                        }
                                        if (null !== (e = t.sibling)) {
                                            ((e.return = t.return), (Ul = e));
                                            break;
                                        }
                                        Ul = t.return;
                                    }
                            ((p = Wl), (Wl = !1));
                        })(e, n),
                        Xl(n, e),
                        Hi(Ro),
                        (xr = !!Wo),
                        (Ro = Wo = null),
                        (e.current = n),
                        Jl(n),
                        jn(),
                        (uc = s),
                        (er = a),
                        (sc.transition = o));
                } else e.current = n;
                if (
                    (Ec && ((Ec = !1), (Ac = e), (Tc = i)),
                    (o = e.pendingLanes),
                    0 === o && (Pc = null),
                    (function (e) {
                        if (Vn && 'function' == typeof Vn.onCommitFiberRoot)
                            try {
                                Vn.onCommitFiberRoot(Mn, e, void 0, 128 == (128 & e.current.flags));
                            } catch (t) {}
                    })(n.stateNode),
                    Ic(e, Un()),
                    null !== t)
                )
                    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                        ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
                if (kc) throw ((kc = !1), (e = xc), (xc = null), e);
                (0 != (1 & Tc) && 0 !== e.tag && nf(),
                    (o = e.pendingLanes),
                    0 != (1 & o) ? (e === jc ? Cc++ : ((Cc = 0), (jc = e))) : (Cc = 0),
                    Oa());
            })(e, t, n, r));
    } finally {
        ((sc.transition = i), (er = r));
    }
    return null;
}
function nf() {
    if (null !== Ac) {
        var e = tr(Tc),
            t = sc.transition,
            n = er;
        try {
            if (((sc.transition = null), (er = 16 > e ? 16 : e), null === Ac)) var r = !1;
            else {
                if (((e = Ac), (Ac = null), (Tc = 0), 0 != (6 & uc))) throw Error(Me(331));
                var i = uc;
                for (uc |= 4, Ul = e.current; null !== Ul; ) {
                    var o = Ul,
                        a = o.child;
                    if (0 != (16 & Ul.flags)) {
                        var s = o.deletions;
                        if (null !== s) {
                            for (var u = 0; u < s.length; u++) {
                                var l = s[u];
                                for (Ul = l; null !== Ul; ) {
                                    var c = Ul;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Rl(8, c, o);
                                    }
                                    var f = c.child;
                                    if (null !== f) ((f.return = c), (Ul = f));
                                    else
                                        for (; null !== Ul; ) {
                                            var d = (c = Ul).sibling,
                                                h = c.return;
                                            if ((Ml(c), c === l)) {
                                                Ul = null;
                                                break;
                                            }
                                            if (null !== d) {
                                                ((d.return = h), (Ul = d));
                                                break;
                                            }
                                            Ul = h;
                                        }
                                }
                            }
                            var p = o.alternate;
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
                            Ul = o;
                        }
                    }
                    if (0 != (2064 & o.subtreeFlags) && null !== a) ((a.return = o), (Ul = a));
                    else
                        e: for (; null !== Ul; ) {
                            if (0 != (2048 & (o = Ul).flags))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Rl(9, o, o.return);
                                }
                            var m = o.sibling;
                            if (null !== m) {
                                ((m.return = o.return), (Ul = m));
                                break e;
                            }
                            Ul = o.return;
                        }
                }
                var b = e.current;
                for (Ul = b; null !== Ul; ) {
                    var y = (a = Ul).child;
                    if (0 != (2064 & a.subtreeFlags) && null !== y) ((y.return = a), (Ul = y));
                    else
                        e: for (a = b; null !== Ul; ) {
                            if (0 != (2048 & (s = Ul).flags))
                                try {
                                    switch (s.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Il(9, s);
                                    }
                                } catch (w) {
                                    of(s, s.return, w);
                                }
                            if (s === a) {
                                Ul = null;
                                break e;
                            }
                            var _ = s.sibling;
                            if (null !== _) {
                                ((_.return = s.return), (Ul = _));
                                break e;
                            }
                            Ul = s.return;
                        }
                }
                if (((uc = i), Oa(), Vn && 'function' == typeof Vn.onPostCommitFiberRoot))
                    try {
                        Vn.onPostCommitFiberRoot(Mn, e);
                    } catch (w) {}
                r = !0;
            }
            return r;
        } finally {
            ((er = n), (sc.transition = t));
        }
    }
    return !1;
}
function rf(e, t, n) {
    ((e = _s(e, (t = Ku(0, (t = Fu(n, t)), 1)), 1)), (t = Nc()), null !== e && (Jn(e, 1, t), Ic(e, t)));
}
function of(e, t, n) {
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
                    ('function' == typeof r.componentDidCatch && (null === Pc || !Pc.has(r)))
                ) {
                    ((t = _s(t, (e = Hu(t, (e = Fu(n, e)), 1)), 1)), (e = Nc()), null !== t && (Jn(t, 1, e), Ic(t, e)));
                    break;
                }
            }
            t = t.return;
        }
}
function af(e, t, n) {
    var r = e.pingCache;
    (null !== r && r.delete(t),
        (t = Nc()),
        (e.pingedLanes |= e.suspendedLanes & n),
        lc === e &&
            (fc & n) === n &&
            (4 === pc || (3 === pc && (130023424 & fc) === fc && 500 > Un() - wc) ? qc(e, 0) : (bc |= n)),
        Ic(e, t));
}
function sf(e, t) {
    0 === t && (0 == (1 & e.mode) ? (t = 1) : ((t = Qn), 0 == (130023424 & (Qn <<= 1)) && (Qn = 4194304)));
    var n = Nc();
    null !== (e = vs(e, t)) && (Jn(e, t, n), Ic(e, n));
}
function uf(e) {
    var t = e.memoizedState,
        n = 0;
    (null !== t && (n = t.retryLane), sf(e, n));
}
function lf(e, t) {
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
    (null !== r && r.delete(t), sf(e, n));
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
function vf(e, t, n, r, i, o) {
    var a = 2;
    if (((r = e), 'function' == typeof e)) hf(e) && (a = 1);
    else if ('string' == typeof e) a = 5;
    else
        e: switch (e) {
            case rt:
                return gf(n.children, i, o, t);
            case it:
                ((a = 8), (i |= 8));
                break;
            case ot:
                return (((e = df(12, n, t, 2 | i)).elementType = ot), (e.lanes = o), e);
            case lt:
                return (((e = df(13, n, t, i)).elementType = lt), (e.lanes = o), e);
            case ct:
                return (((e = df(19, n, t, i)).elementType = ct), (e.lanes = o), e);
            case ht:
                return mf(n, i, o, t);
            default:
                if ('object' == typeof e && null !== e)
                    switch (e.$$typeof) {
                        case at:
                            a = 10;
                            break e;
                        case st:
                            a = 9;
                            break e;
                        case ut:
                            a = 11;
                            break e;
                        case ft:
                            a = 14;
                            break e;
                        case dt:
                            ((a = 16), (r = null));
                            break e;
                    }
                throw Error(Me(130, null == e ? e : typeof e, ''));
        }
    return (((t = df(a, n, t, i)).elementType = e), (t.type = r), (t.lanes = o), t);
}
function gf(e, t, n, r) {
    return (((e = df(7, e, r, t)).lanes = n), e);
}
function mf(e, t, n, r) {
    return (((e = df(22, e, r, t)).elementType = ht), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e);
}
function bf(e, t, n) {
    return (((e = df(6, e, null, t)).lanes = n), e);
}
function yf(e, t, n) {
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
function wf(e, t, n, r, i, o, a, s, u) {
    return (
        (e = new _f(e, t, n, s, u)),
        1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
        (o = df(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        ms(o),
        e
    );
}
function Sf(e) {
    if (!e) return ua;
    e: {
        if (On((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(Me(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ha(t.type)) {
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
        if (ha(n)) return ga(e, n, t);
    }
    return t;
}
function Of(e, t, n, r, i, o, a, s, u) {
    return (
        ((e = wf(n, r, !0, e, 0, o, 0, s, u)).context = Sf(null)),
        (n = e.current),
        ((o = ys((r = Nc()), (i = Wc(n)))).callback = null != t ? t : null),
        _s(n, o, i),
        (e.current.lanes = i),
        Jn(e, i, r),
        Ic(e, r),
        e
    );
}
function kf(e, t, n, r) {
    var i = t.current,
        o = Nc(),
        a = Wc(i);
    return (
        (n = Sf(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = ys(o, a)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = _s(i, t, a)) && (Rc(e, i, a, o), ws(e, i, a)),
        a
    );
}
function xf(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
}
function Pf(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
    }
}
function Ef(e, t) {
    (Pf(e, t), (e = e.alternate) && Pf(e, t));
}
rc = function (e, t, n) {
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps || ca.current) Zu = !0;
        else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                    (Zu = !1),
                    (function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                (ll(t), Ha());
                                break;
                            case 5:
                                Us(t);
                                break;
                            case 1:
                                ha(t.type) && ma(t);
                                break;
                            case 4:
                                Cs(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context,
                                    i = t.memoizedProps.value;
                                (sa(rs, r._currentValue), (r._currentValue = i));
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState))
                                    return null !== r.dehydrated
                                        ? (sa(Ns, 1 & Ns.current), (t.flags |= 128), null)
                                        : 0 != (n & t.child.childLanes)
                                          ? ml(e, t, n)
                                          : (sa(Ns, 1 & Ns.current), null !== (e = kl(e, t, n)) ? e.sibling : null);
                                sa(Ns, 1 & Ns.current);
                                break;
                            case 19:
                                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                    if (r) return Sl(e, t, n);
                                    t.flags |= 128;
                                }
                                if (
                                    (null !== (i = t.memoizedState) &&
                                        ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                                    sa(Ns, Ns.current),
                                    r)
                                )
                                    break;
                                return null;
                            case 22:
                            case 23:
                                return ((t.lanes = 0), il(e, t, n));
                        }
                        return kl(e, t, n);
                    })(e, t, n)
                );
            Zu = 0 != (131072 & e.flags);
        }
    else ((Zu = !1), Ma && 0 != (1048576 & t.flags) && Na(t, Ea, t.index));
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            (Ol(e, t), (e = t.pendingProps));
            var i = da(t, la.current);
            (cs(t, n), (i = Xs(null, t, r, e, i, n)));
            var o = Ys();
            return (
                (t.flags |= 1),
                'object' == typeof i && null !== i && 'function' == typeof i.render && void 0 === i.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      ha(r) ? ((o = !0), ma(t)) : (o = !1),
                      (t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null),
                      ms(t),
                      (i.updater = Lu),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      zu(t, r, e, n),
                      (t = ul(null, t, r, !0, o, n)))
                    : ((t.tag = 0), Ma && o && Wa(t), el(null, t, i, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Ol(e, t),
                    (e = t.pendingProps),
                    (r = (i = r._init)(r._payload)),
                    (t.type = r),
                    (i = t.tag =
                        (function (e) {
                            if ('function' == typeof e) return hf(e) ? 1 : 0;
                            if (null != e) {
                                if ((e = e.$$typeof) === ut) return 11;
                                if (e === ft) return 14;
                            }
                            return 2;
                        })(r)),
                    (e = Ru(r, e)),
                    i)
                ) {
                    case 0:
                        t = al(null, t, r, e, n);
                        break e;
                    case 1:
                        t = sl(null, t, r, e, n);
                        break e;
                    case 11:
                        t = tl(null, t, r, e, n);
                        break e;
                    case 14:
                        t = nl(null, t, r, Ru(r.type, e), n);
                        break e;
                }
                throw Error(Me(306, r, ''));
            }
            return t;
        case 0:
            return ((r = t.type), (i = t.pendingProps), al(e, t, r, (i = t.elementType === r ? i : Ru(r, i)), n));
        case 1:
            return ((r = t.type), (i = t.pendingProps), sl(e, t, r, (i = t.elementType === r ? i : Ru(r, i)), n));
        case 3:
            e: {
                if ((ll(t), null === e)) throw Error(Me(387));
                ((r = t.pendingProps), (i = (o = t.memoizedState).element), bs(e, t), Os(t, r, null, n));
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
                        t = cl(e, t, r, n, (i = Fu(Error(Me(423)), t)));
                        break e;
                    }
                    if (r !== i) {
                        t = cl(e, t, r, n, (i = Fu(Error(Me(424)), t)));
                        break e;
                    }
                    for (
                        La = $o(t.stateNode.containerInfo.firstChild),
                            Ia = t,
                            Ma = !0,
                            Va = null,
                            n = ns(t, null, r, n),
                            t.child = n;
                        n;

                    )
                        ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                    if ((Ha(), r === i)) {
                        t = kl(e, t, n);
                        break e;
                    }
                    el(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Us(t),
                null === e && $a(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (a = i.children),
                Io(r, i) ? (a = null) : null !== o && Io(r, o) && (t.flags |= 32),
                ol(e, t),
                el(e, t, a, n),
                t.child
            );
        case 6:
            return (null === e && $a(t), null);
        case 13:
            return ml(e, t, n);
        case 4:
            return (
                Cs(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = ts(t, null, r, n)) : el(e, t, r, n),
                t.child
            );
        case 11:
            return ((r = t.type), (i = t.pendingProps), tl(e, t, r, (i = t.elementType === r ? i : Ru(r, i)), n));
        case 7:
            return (el(e, t, t.pendingProps, n), t.child);
        case 8:
        case 12:
            return (el(e, t, t.pendingProps.children, n), t.child);
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (i = t.pendingProps),
                    (o = t.memoizedProps),
                    (a = i.value),
                    sa(rs, r._currentValue),
                    (r._currentValue = a),
                    null !== o)
                )
                    if (Di(o.value, a)) {
                        if (o.children === i.children && !ca.current) {
                            t = kl(e, t, n);
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
                                            (u = ys(-1, n & -n)).tag = 2;
                                            var l = o.updateQueue;
                                            if (null !== l) {
                                                var c = (l = l.shared).pending;
                                                (null === c ? (u.next = u) : ((u.next = c.next), (c.next = u)),
                                                    (l.pending = u));
                                            }
                                        }
                                        ((o.lanes |= n),
                                            null !== (u = o.alternate) && (u.lanes |= n),
                                            ls(o.return, n, t),
                                            (s.lanes |= n));
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (10 === o.tag) a = o.type === t.type ? null : o.child;
                            else if (18 === o.tag) {
                                if (null === (a = o.return)) throw Error(Me(341));
                                ((a.lanes |= n),
                                    null !== (s = a.alternate) && (s.lanes |= n),
                                    ls(a, n, t),
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
                (el(e, t, i.children, n), (t = t.child));
            }
            return t;
        case 9:
            return (
                (i = t.type),
                (r = t.pendingProps.children),
                cs(t, n),
                (r = r((i = fs(i)))),
                (t.flags |= 1),
                el(e, t, r, n),
                t.child
            );
        case 14:
            return ((i = Ru((r = t.type), t.pendingProps)), nl(e, t, r, (i = Ru(r.type, i)), n));
        case 15:
            return rl(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Ru(r, i)),
                Ol(e, t),
                (t.tag = 1),
                ha(r) ? ((e = !0), ma(t)) : (e = !1),
                cs(t, n),
                Vu(t, r, i),
                zu(t, r, i, n),
                ul(null, t, r, !0, e, n)
            );
        case 19:
            return Sl(e, t, n);
        case 22:
            return il(e, t, n);
    }
    throw Error(Me(156, t.tag));
};
var Af =
    'function' == typeof reportError
        ? reportError
        : function (e) {
              console.error(e);
          };
function Tf(e) {
    this._internalRoot = e;
}
function Cf(e) {
    this._internalRoot = e;
}
function jf(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function Uf(e) {
    return !(
        !e ||
        (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
    );
}
function Bf() {}
function Nf(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var a = o;
        if ('function' == typeof i) {
            var s = i;
            i = function () {
                var e = xf(a);
                s.call(e);
            };
        }
        kf(t, a, e, i);
    } else
        a = (function (e, t, n, r, i) {
            if (i) {
                if ('function' == typeof r) {
                    var o = r;
                    r = function () {
                        var e = xf(a);
                        o.call(e);
                    };
                }
                var a = Of(t, r, e, 0, null, !1, 0, '', Bf);
                return (
                    (e._reactRootContainer = a),
                    (e[Go] = a.current),
                    Oo(8 === e.nodeType ? e.parentNode : e),
                    $c(),
                    a
                );
            }
            for (; (i = e.lastChild); ) e.removeChild(i);
            if ('function' == typeof r) {
                var s = r;
                r = function () {
                    var e = xf(u);
                    s.call(e);
                };
            }
            var u = wf(e, 0, !1, null, 0, !1, 0, '', Bf);
            return (
                (e._reactRootContainer = u),
                (e[Go] = u.current),
                Oo(8 === e.nodeType ? e.parentNode : e),
                $c(function () {
                    kf(t, u, n, r);
                }),
                u
            );
        })(n, t, e, i, r);
    return xf(a);
}
((Cf.prototype.render = Tf.prototype.render =
    function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(Me(409));
        kf(e, t, null, null);
    }),
    (Cf.prototype.unmount = Tf.prototype.unmount =
        function () {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                ($c(function () {
                    kf(null, e, null, null);
                }),
                    (t[Go] = null));
            }
        }),
    (Cf.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = or();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < pr.length && 0 !== t && t < pr[n].priority; n++);
            (pr.splice(n, 0, e), 0 === n && br(e));
        }
    }),
    (nr = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = qn(t.pendingLanes);
                    0 !== n && (Zn(t, 1 | n), Ic(t, Un()), 0 == (6 & uc) && ((Sc = Un() + 500), Oa()));
                }
                break;
            case 13:
                ($c(function () {
                    var t = vs(e, 1);
                    if (null !== t) {
                        var n = Nc();
                        Rc(t, e, 1, n);
                    }
                }),
                    Ef(e, 1));
        }
    }),
    (rr = function (e) {
        if (13 === e.tag) {
            var t = vs(e, 134217728);
            if (null !== t) Rc(t, e, 134217728, Nc());
            Ef(e, 134217728);
        }
    }),
    (ir = function (e) {
        if (13 === e.tag) {
            var t = Wc(e),
                n = vs(e, t);
            if (null !== n) Rc(n, e, t, Nc());
            Ef(e, t);
        }
    }),
    (or = function () {
        return er;
    }),
    (ar = function (e, t) {
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
                if ((Ut(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                    for (n = e; n.parentNode; ) n = n.parentNode;
                    for (
                        n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var i = na(r);
                            if (!i) throw Error(Me(90));
                            (Et(r), Ut(r, i));
                        }
                    }
                }
                break;
            case 'textarea':
                Mt(e, n);
                break;
            case 'select':
                null != (t = n.value) && Rt(e, !!n.multiple, t, !1);
        }
    }),
    (ln = Fc),
    (cn = $c));
var Wf = { usingClientEntryPoint: !1, Events: [ea, ta, na, sn, un, Fc] },
    Rf = { findFiberByHostInstance: Zo, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    If = {
        bundleType: Rf.bundleType,
        version: Rf.version,
        rendererPackageName: Rf.rendererPackageName,
        rendererConfig: Rf.rendererConfig,
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
            return null === (e = Pn(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
            Rf.findFiberByHostInstance ||
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
    var Lf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Lf.isDisabled && Lf.supportsFiber)
        try {
            ((Mn = Lf.inject(If)), (Vn = Lf));
        } catch ($t) {}
}
((Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wf),
    (Be.createPortal = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!jf(t)) throw Error(Me(200));
        return (function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: nt, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
        })(e, t, null, n);
    }),
    (Be.createRoot = function (e, t) {
        if (!jf(e)) throw Error(Me(299));
        var n = !1,
            r = '',
            i = Af;
        return (
            null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
            (t = wf(e, 1, !1, null, 0, n, 0, r, i)),
            (e[Go] = t.current),
            Oo(8 === e.nodeType ? e.parentNode : e),
            new Tf(t)
        );
    }),
    (Be.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
            if ('function' == typeof e.render) throw Error(Me(188));
            throw ((e = Object.keys(e).join(',')), Error(Me(268, e)));
        }
        return (e = null === (e = Pn(t)) ? null : e.stateNode);
    }),
    (Be.flushSync = function (e) {
        return $c(e);
    }),
    (Be.hydrate = function (e, t, n) {
        if (!Uf(t)) throw Error(Me(200));
        return Nf(null, e, t, !0, n);
    }),
    (Be.hydrateRoot = function (e, t, n) {
        if (!jf(e)) throw Error(Me(405));
        var r = (null != n && n.hydratedSources) || null,
            i = !1,
            o = '',
            a = Af;
        if (
            (null != n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
            (t = Of(t, null, e, 1, null != n ? n : null, i, 0, o, a)),
            (e[Go] = t.current),
            Oo(e),
            r)
        )
            for (e = 0; e < r.length; e++)
                ((i = (i = (n = r[e])._getVersion)(n._source)),
                    null == t.mutableSourceEagerHydrationData
                        ? (t.mutableSourceEagerHydrationData = [n, i])
                        : t.mutableSourceEagerHydrationData.push(n, i));
        return new Cf(t);
    }),
    (Be.render = function (e, t, n) {
        if (!Uf(t)) throw Error(Me(200));
        return Nf(null, e, t, !1, n);
    }),
    (Be.unmountComponentAtNode = function (e) {
        if (!Uf(e)) throw Error(Me(40));
        return (
            !!e._reactRootContainer &&
            ($c(function () {
                Nf(null, null, e, !1, function () {
                    ((e._reactRootContainer = null), (e[Go] = null));
                });
            }),
            !0)
        );
    }),
    (Be.unstable_batchedUpdates = Fc),
    (Be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!Uf(n)) throw Error(Me(200));
        if (null == e || void 0 === e._reactInternals) throw Error(Me(38));
        return Nf(e, t, n, !1, r);
    }),
    (Be.version = '18.3.1-next-f1338f8080-20240426'),
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
    (Ue.exports = Be));
var Mf = Ue.exports,
    Vf = Mf;
((je.createRoot = Vf.createRoot), (je.hydrateRoot = Vf.hydrateRoot));
var Df,
    zf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ((Df = zf),
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
        Df.exports ? ((t.default = t), (Df.exports = t)) : (window.classNames = t);
    })());
const Ff = e(zf.exports);
function $f(e) {
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
function qf() {
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
var Kf = Object.assign,
    Hf = Object.getOwnPropertyDescriptor,
    Gf = Object.defineProperty,
    Xf = Object.prototype,
    Yf = [];
Object.freeze(Yf);
var Jf = {};
Object.freeze(Jf);
var Zf = 'undefined' != typeof Proxy,
    ed = Object.toString();
function td() {
    Zf || $f('Proxy not available');
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
function od(e) {
    switch (typeof e) {
        case 'string':
        case 'symbol':
        case 'number':
            return !0;
    }
    return !1;
}
function ad(e) {
    return null !== e && 'object' == typeof e;
}
function sd(e) {
    if (!ad(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (null == t) return !0;
    var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n.toString() === ed;
}
function ud(e) {
    var t = null == e ? void 0 : e.constructor;
    return !!t && ('GeneratorFunction' === t.name || 'GeneratorFunction' === t.displayName);
}
function ld(e, t, n) {
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
            return ad(e) && !0 === e[n];
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
function md(e, t) {
    return Xf.hasOwnProperty.call(e, t);
}
var bd =
    Object.getOwnPropertyDescriptors ||
    function (e) {
        var t = {};
        return (
            vd(e).forEach(function (n) {
                t[n] = Hf(e, n);
            }),
            t
        );
    };
function yd(e, t) {
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
function _d(e, t, n) {
    return (t && yd(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
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
    ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Od(e, t));
}
function Od(e, t) {
    return (Od = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return ((e.__proto__ = t), e);
          })(e, t);
}
function kd(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function xd(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function Pd(e, t) {
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
var Ed = Symbol('mobx-stored-annotations');
function Ad(e) {
    return Object.assign(function (t, n) {
        if (Cd(n)) return e.decorate_20223_(t, n);
        Td(t, n, e);
    }, e);
}
function Td(e, t, n) {
    (md(e, Ed) || ld(e, Ed, wd({}, e[Ed])),
        (function (e) {
            return e.annotationType_ === Ld;
        })(n) || (e[Ed][t] = n));
}
function Cd(e) {
    return 'object' == typeof e && 'string' == typeof e.kind;
}
var jd = Symbol('mobx administration'),
    Ud = (function () {
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
                return up(this);
            }),
            (t.reportChanged = function () {
                (ap(), lp(this), sp());
            }),
            (t.toString = function () {
                return this.name_;
            }),
            e
        );
    })(),
    Bd = fd('Atom', Ud);
function Nd(e, t, n) {
    (void 0 === t && (t = rd), void 0 === n && (n = rd));
    var r,
        i = new Ud(e);
    return (t !== rd && Bp(Cp, i, t, r), n !== rd && Up(i, n), i);
}
var Wd = {
    identity: function (e, t) {
        return e === t;
    },
    structural: function (e, t) {
        return Xv(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
    shallow: function (e, t) {
        return Xv(e, t, 1);
    },
};
function Rd(e, t, n) {
    return $p(e)
        ? e
        : Array.isArray(e)
          ? wh.array(e, { name: n })
          : sd(e)
            ? wh.object(e, void 0, { name: n })
            : dd(e)
              ? wh.map(e, { name: n })
              : hd(e)
                ? wh.set(e, { name: n })
                : 'function' != typeof e || Pp(e) || Dp(e)
                  ? e
                  : ud(e)
                    ? Mp(e)
                    : xp(n, e);
}
function Id(e) {
    return e;
}
var Ld = 'override';
function Md(e, t) {
    return { annotationType_: e, options_: t, make_: Vd, extend_: Dd, decorate_20223_: zd };
}
function Vd(e, t, n, r) {
    var i;
    if (null != (i = this.options_) && i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (Pp(n.value)) return 1;
    var o = Fd(e, this, t, n, !1);
    return (Gf(r, t, o), 2);
}
function Dd(e, t, n, r) {
    var i = Fd(e, this, t, n);
    return e.defineProperty_(t, i, r);
}
function zd(e, t) {
    var n = t.kind,
        r = t.name,
        i = t.addInitializer,
        o = this;
    if ('field' != n) {
        var a, s, u, l, c, f;
        if ('method' == n)
            return (
                Pp(e) ||
                    ((s = e),
                    (e = jh(
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
        $f(
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
            Td(this, r, o);
        });
}
function Fd(e, t, n, r, i) {
    var o, a, s, u, l, c, f, d;
    (void 0 === i && (i = np.safeDescriptors), (d = r), t.annotationType_, d.value);
    var h,
        p = r.value;
    null != (o = t.options_) && o.bound && (p = p.bind(null != (h = e.proxy_) ? h : e.target_));
    return {
        value: jh(
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
function $d(e, t) {
    return { annotationType_: e, options_: t, make_: Qd, extend_: qd, decorate_20223_: Kd };
}
function Qd(e, t, n, r) {
    var i;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (
        null != (i = this.options_) &&
        i.bound &&
        (!md(e.target_, t) || !Dp(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
    )
        return 0;
    if (Dp(n.value)) return 1;
    var o = Hd(e, this, t, n, !1, !1);
    return (Gf(r, t, o), 2);
}
function qd(e, t, n, r) {
    var i,
        o = Hd(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
    return e.defineProperty_(t, o, r);
}
function Kd(e, t) {
    var n,
        r = t.name,
        i = t.addInitializer;
    return (
        Dp(e) || (e = Mp(e)),
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
function Hd(e, t, n, r, i, o) {
    var a;
    (void 0 === o && (o = np.safeDescriptors), (a = r), t.annotationType_, a.value);
    var s,
        u = r.value;
    (Dp(u) || (u = Mp(u)), i) && ((u = u.bind(null != (s = e.proxy_) ? s : e.target_)).isMobXFlow = !0);
    return { value: u, configurable: !o || e.isPlainObject_, enumerable: !1, writable: !o };
}
function Gd(e, t) {
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
            var t = Tv(this)[jd],
                i = wd({}, n.options_, { get: e, context: this });
            (i.name || (i.name = 'ObservableObject.' + r.toString()), t.values_.set(r, new Dh(i)));
        }),
        function () {
            return this[jd].getObservablePropValue_(r);
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
    var i, o;
    return (
        this.annotationType_,
        e.defineObservableProperty_(
            t,
            n.value,
            null != (i = null == (o = this.options_) ? void 0 : o.enhancer) ? i : Rd,
            r,
        )
    );
}
function nh(e, t) {
    var n = this,
        r = t.kind,
        i = t.name,
        o = new WeakSet();
    function a(e, t) {
        var r,
            a,
            s = Tv(e)[jd],
            u = new Rh(
                t,
                null != (r = null == (a = n.options_) ? void 0 : a.enhancer) ? r : Rd,
                'ObservableObject.' + i.toString(),
                !1,
            );
        (s.values_.set(i, u), o.add(e));
    }
    if ('accessor' == r)
        return {
            get: function () {
                return (o.has(this) || a(this, e.get.call(this)), this[jd].getObservablePropValue_(i));
            },
            set: function (e) {
                return (o.has(this) || a(this, e), this[jd].setObservablePropValue_(i, e));
            },
            init: function (e) {
                return (o.has(this) || a(this, e), e);
            },
        };
}
var rh = 'true',
    ih = oh();
function oh(e) {
    return { annotationType_: rh, options_: e, make_: ah, extend_: sh, decorate_20223_: uh };
}
function ah(e, t, n, r) {
    var i, o, a, s;
    if (n.get) return xh.make_(e, t, n, r);
    if (n.set) {
        var u = jh(t.toString(), n.set);
        return r === e.target_
            ? null === e.defineProperty_(t, { configurable: !np.safeDescriptors || e.isPlainObject_, set: u })
                ? 0
                : 2
            : (Gf(r, t, { configurable: !0, set: u }), 2);
    }
    if (r !== e.target_ && 'function' == typeof n.value)
        return ud(n.value)
            ? (null != (s = this.options_) && s.autoBind ? Mp.bound : Mp).make_(e, t, n, r)
            : (null != (a = this.options_) && a.autoBind ? xp.bound : xp).make_(e, t, n, r);
    var l,
        c = !1 === (null == (i = this.options_) ? void 0 : i.deep) ? wh.ref : wh;
    'function' == typeof n.value &&
        null != (o = this.options_) &&
        o.autoBind &&
        (n.value = n.value.bind(null != (l = e.proxy_) ? l : e.target_));
    return c.make_(e, t, n, r);
}
function sh(e, t, n, r) {
    var i, o, a;
    if (n.get) return xh.extend_(e, t, n, r);
    if (n.set)
        return e.defineProperty_(
            t,
            { configurable: !np.safeDescriptors || e.isPlainObject_, set: jh(t.toString(), n.set) },
            r,
        );
    'function' == typeof n.value &&
        null != (i = this.options_) &&
        i.autoBind &&
        (n.value = n.value.bind(null != (a = e.proxy_) ? a : e.target_));
    return (!1 === (null == (o = this.options_) ? void 0 : o.deep) ? wh.ref : wh).extend_(e, t, n, r);
}
function uh(e, t) {
    $f("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var lh = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
function ch(e) {
    return e || lh;
}
Object.freeze(lh);
var fh = Zd('observable'),
    dh = Zd('observable.ref', { enhancer: Id }),
    hh = Zd('observable.shallow', {
        enhancer: function (e, t, n) {
            return null == e || Uv(e) || vv(e) || Sv(e) || xv(e)
                ? e
                : Array.isArray(e)
                  ? wh.array(e, { name: n, deep: !1 })
                  : sd(e)
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
        ? Rd
        : !1 === e.deep
          ? Id
          : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
            ? n
            : Rd;
    var t, n, r;
}
function mh(e, t, n) {
    return Cd(t)
        ? fh.decorate_20223_(e, t)
        : od(t)
          ? void Td(e, t, fh)
          : $p(e)
            ? e
            : sd(e)
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
Kf(mh, vh);
var bh,
    yh,
    _h = {
        box: function (e, t) {
            var n = ch(t);
            return new Rh(e, gh(n), n.name, !0, n.equals);
        },
        array: function (e, t) {
            var n = ch(t);
            return (!1 === np.useProxies || !1 === n.proxy ? $v : av)(e, gh(n), n.name);
        },
        map: function (e, t) {
            var n = ch(t);
            return new wv(e, gh(n), n.name);
        },
        set: function (e, t) {
            var n = ch(t);
            return new kv(e, gh(n), n.name);
        },
        object: function (e, t, n) {
            return Hv(function () {
                return Np(
                    !1 === np.useProxies || !1 === (null == n ? void 0 : n.proxy)
                        ? Tv({}, n)
                        : (function (e, t) {
                              var n, r;
                              return (
                                  td(),
                                  (e = Tv(e, t)),
                                  null != (r = (n = e[jd]).proxy_) ? r : (n.proxy_ = new Proxy(e, Hp))
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
    wh = Kf(mh, _h),
    Sh = 'computed',
    Oh = Gd(Sh),
    kh = Gd('computed.struct', { equals: Wd.structural }),
    xh = function (e, t) {
        if (Cd(t)) return Oh.decorate_20223_(e, t);
        if (od(t)) return Td(e, t, Oh);
        if (sd(e)) return Ad(Gd(Sh, e));
        var n = sd(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new Dh(n));
    };
(Object.assign(xh, Oh), (xh.struct = Ad(kh)));
var Ph,
    Eh = 0,
    Ah = 1,
    Th = null != (bh = null == (yh = Hf(function () {}, 'name')) ? void 0 : yh.configurable) && bh,
    Ch = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
function jh(e, t, n, r) {
    function i() {
        return Uh(e, n, t, r || this, arguments);
    }
    return (
        void 0 === n && (n = !1),
        (i.isMobxAction = !0),
        (i.toString = function () {
            return t.toString();
        }),
        Th && ((Ch.value = e), Gf(i, 'name', Ch)),
        i
    );
}
function Uh(e, t, n, r, i) {
    var o = (function (e, t, n, r) {
        var i = !1,
            o = 0,
            a = np.trackingDerivation,
            s = !t || !a;
        ap();
        var u = np.allowStateChanges;
        s && (Gh(), (u = Bh(!0)));
        var l = Yh(!0),
            c = {
                runAsAction_: s,
                prevDerivation_: a,
                prevAllowStateChanges_: u,
                prevAllowStateReads_: l,
                notifySpy_: i,
                startTime_: o,
                actionId_: Ah++,
                parentActionId_: Eh,
            };
        return ((Eh = c.actionId_), c);
    })(0, t);
    try {
        return n.apply(r, i);
    } catch (a) {
        throw ((o.error_ = a), a);
    } finally {
        !(function (e) {
            Eh !== e.actionId_ && $f(30);
            ((Eh = e.parentActionId_), void 0 !== e.error_ && (np.suppressReactionErrors = !0));
            (Nh(e.prevAllowStateChanges_), Jh(e.prevAllowStateReads_), sp(), e.runAsAction_ && Xh(e.prevDerivation_));
            np.suppressReactionErrors = !1;
        })(o);
    }
}
function Bh(e) {
    var t = np.allowStateChanges;
    return ((np.allowStateChanges = e), t);
}
function Nh(e) {
    np.allowStateChanges = e;
}
Ph = Symbol.toPrimitive;
var Wh,
    Rh = (function (e) {
        function t(t, n, r, i, o) {
            var a;
            return (
                void 0 === r && (r = 'ObservableValue'),
                void 0 === o && (o = Wd.default),
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
                if (Gp(this)) {
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
            (n[Ph] = function () {
                return this.valueOf();
            }),
            t
        );
    })(Ud);
Wh = Symbol.toPrimitive;
var Ih,
    Lh,
    Mh,
    Vh,
    Dh = (function () {
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
                (this.value_ = new Fh(null)),
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
                e.get || $f(31),
                (this.derivation = e.get),
                (this.name_ = e.name || 'ComputedValue'),
                e.set && (this.setter_ = jh('ComputedValue-setter', e.set)),
                (this.equals_ = e.equals || (e.compareStructural || e.struct ? Wd.structural : Wd.default)),
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
                    (this.isComputing_ && $f(32, this.name_, this.derivation),
                    0 !== np.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                ) {
                    if ((up(this), Qh(this))) {
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
                } else Qh(this) && (this.warnAboutUntrackedRead_(), ap(), (this.value_ = this.computeValue_(!1)), sp());
                var t = this.value_;
                if ($h(t)) throw t.cause;
                return t;
            }),
            (t.set = function (e) {
                if (this.setter_) {
                    (this.isRunningSetter_ && $f(33, this.name_), (this.isRunningSetter_ = !0));
                    try {
                        this.setter_.call(this.scope_, e);
                    } finally {
                        this.isRunningSetter_ = !1;
                    }
                } else $f(34, this.name_);
            }),
            (t.trackAndCompute = function () {
                var e = this.value_,
                    t = this.dependenciesState_ === Ih.NOT_TRACKING_,
                    n = this.computeValue_(!0),
                    r = t || $h(e) || $h(n) || !this.equals_(e, n);
                return (r && (this.value_ = n), r);
            }),
            (t.computeValue_ = function (e) {
                this.isComputing_ = !0;
                var t,
                    n = Bh(!1);
                if (e) t = qh(this, this.derivation, this.scope_);
                else if (!0 === np.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                else
                    try {
                        t = this.derivation.call(this.scope_);
                    } catch (r) {
                        t = new Fh(r);
                    }
                return (Nh(n), (this.isComputing_ = !1), t);
            }),
            (t.suspend_ = function () {
                this.keepAlive_ || (Kh(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
                var n = this,
                    r = !0,
                    i = void 0;
                return (function (e, t) {
                    var n, r, i, o, a;
                    void 0 === t && (t = Jf);
                    var s,
                        u = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun';
                    if (t.scheduler || t.delay) {
                        var l = Ap(t),
                            c = !1;
                        s = new cp(
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
                    } else
                        s = new cp(
                            u,
                            function () {
                                this.track(f);
                            },
                            t.onError,
                            t.requiresObservable,
                        );
                    function f() {
                        e(s);
                    }
                    (null != (i = t) && null != (o = i.signal) && o.aborted) || s.schedule_();
                    return s.getDisposer_(null == (a = t) ? void 0 : a.signal);
                })(function () {
                    var o = n.get();
                    if (!r || t) {
                        var a = Gh();
                        (e({
                            observableKind: 'computed',
                            debugObjectName: n.name_,
                            type: rv,
                            object: n,
                            newValue: o,
                            oldValue: i,
                        }),
                            Xh(a));
                    }
                    ((r = !1), (i = o));
                });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
                return this.name_ + '[' + this.derivation.toString() + ']';
            }),
            (t.valueOf = function () {
                return gd(this.get());
            }),
            (t[Wh] = function () {
                return this.valueOf();
            }),
            e
        );
    })(),
    zh = fd('ComputedValue', Dh);
(((Lh = Ih || (Ih = {}))[(Lh.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
    (Lh[(Lh.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
    (Lh[(Lh.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
    (Lh[(Lh.STALE_ = 2)] = 'STALE_'),
    ((Vh = Mh || (Mh = {}))[(Vh.NONE = 0)] = 'NONE'),
    (Vh[(Vh.LOG = 1)] = 'LOG'),
    (Vh[(Vh.BREAK = 2)] = 'BREAK'));
var Fh = function (e) {
    ((this.cause = void 0), (this.cause = e));
};
function $h(e) {
    return e instanceof Fh;
}
function Qh(e) {
    switch (e.dependenciesState_) {
        case Ih.UP_TO_DATE_:
            return !1;
        case Ih.NOT_TRACKING_:
        case Ih.STALE_:
            return !0;
        case Ih.POSSIBLY_STALE_:
            for (var t = Yh(!0), n = Gh(), r = e.observing_, i = r.length, o = 0; o < i; o++) {
                var a = r[o];
                if (zh(a)) {
                    if (np.disableErrorBoundaries) a.get();
                    else
                        try {
                            a.get();
                        } catch (s) {
                            return (Xh(n), Jh(t), !0);
                        }
                    if (e.dependenciesState_ === Ih.STALE_) return (Xh(n), Jh(t), !0);
                }
            }
            return (Zh(e), Xh(n), Jh(t), !1);
    }
}
function qh(e, t, n) {
    var r = Yh(!0);
    (Zh(e),
        (e.newObserving_ = new Array(e.observing_.length + 100)),
        (e.unboundDepsCount_ = 0),
        (e.runId_ = ++np.runId));
    var i,
        o = np.trackingDerivation;
    if (((np.trackingDerivation = e), np.inBatch++, !0 === np.disableErrorBoundaries)) i = t.call(n);
    else
        try {
            i = t.call(n);
        } catch (a) {
            i = new Fh(a);
        }
    return (
        np.inBatch--,
        (np.trackingDerivation = o),
        (function (e) {
            for (
                var t = e.observing_,
                    n = (e.observing_ = e.newObserving_),
                    r = Ih.UP_TO_DATE_,
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
                (0 === u.diffValue_ && ip(u, e), (u.diffValue_ = 0));
            }
            for (; i--; ) {
                var l = n[i];
                1 === l.diffValue_ && ((l.diffValue_ = 0), rp(l, e));
            }
            r !== Ih.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        Jh(r),
        i
    );
}
function Kh(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) ip(t[n], e);
    e.dependenciesState_ = Ih.NOT_TRACKING_;
}
function Hh(e) {
    var t = Gh();
    try {
        return e();
    } finally {
        Xh(t);
    }
}
function Gh() {
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
        var e = qf();
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
                      $f(35);
                  }, 1),
                  new ep())
        );
    })();
function rp(e, t) {
    (e.observers_.add(t),
        e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_));
}
function ip(e, t) {
    (e.observers_.delete(t), 0 === e.observers_.size && op(e));
}
function op(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), np.pendingUnobservations.push(e));
}
function ap() {
    np.inBatch++;
}
function sp() {
    if (0 == --np.inBatch) {
        hp();
        for (var e = np.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            ((n.isPendingUnobservation_ = !1),
                0 === n.observers_.size &&
                    (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof Dh && n.suspend_()));
        }
        np.pendingUnobservations = [];
    }
}
function up(e) {
    var t = np.trackingDerivation;
    return null !== t
        ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ && np.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
          e.isBeingObserved_)
        : (0 === e.observers_.size && np.inBatch > 0 && op(e), !1);
}
function lp(e) {
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
                    (ap(), (this.isScheduled_ = !1));
                    var e = np.trackingContext;
                    if (((np.trackingContext = this), Qh(this))) {
                        this.isTrackPending_ = !0;
                        try {
                            this.onInvalidate_();
                        } catch (t) {
                            this.reportExceptionInDerivation_(t);
                        }
                    }
                    ((np.trackingContext = e), sp());
                }
            }),
            (t.track = function (e) {
                if (!this.isDisposed_) {
                    (ap(), (this.isRunning_ = !0));
                    var t = np.trackingContext;
                    np.trackingContext = this;
                    var n = qh(this, e, void 0);
                    ((np.trackingContext = t),
                        (this.isRunning_ = !1),
                        (this.isTrackPending_ = !1),
                        this.isDisposed_ && Kh(this),
                        $h(n) && this.reportExceptionInDerivation_(n.cause),
                        sp());
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
                this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (ap(), Kh(this), sp()));
            }),
            (t.getDisposer_ = function (e) {
                var t = this,
                    n = function n() {
                        (t.dispose(), null == e || null == e.removeEventListener || e.removeEventListener('abort', n));
                    };
                return (null == e || null == e.addEventListener || e.addEventListener('abort', n), (n[jd] = this), n);
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
    mp = 'autoAction',
    bp = '<unnamed action>',
    yp = Md(gp),
    _p = Md('action.bound', { bound: !0 }),
    wp = Md(mp, { autoAction: !0 }),
    Sp = Md('autoAction.bound', { autoAction: !0, bound: !0 });
function Op(e) {
    return function (t, n) {
        return id(t)
            ? jh(t.name || bp, t, e)
            : id(n)
              ? jh(t, n, e)
              : Cd(n)
                ? (e ? wp : yp).decorate_20223_(t, n)
                : od(n)
                  ? Td(t, n, e ? wp : yp)
                  : od(t)
                    ? Ad(Md(e ? mp : gp, { name: t, autoAction: e }))
                    : void 0;
    };
}
var kp = Op(!1);
Object.assign(kp, yp);
var xp = Op(!0);
function Pp(e) {
    return id(e) && !0 === e.isMobxAction;
}
(Object.assign(xp, wp), (kp.bound = Ad(_p)), (xp.bound = Ad(Sp)));
var Ep = function (e) {
    return e();
};
function Ap(e) {
    return e.scheduler
        ? e.scheduler
        : e.delay
          ? function (t) {
                return setTimeout(t, e.delay);
            }
          : Ep;
}
function Tp(e, t, n) {
    var r, i, o, a;
    void 0 === n && (n = Jf);
    var s,
        u,
        l,
        c,
        f = null != (r = n.name) ? r : 'Reaction',
        d = kp(
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
        p = Ap(n),
        v = !0,
        g = !1,
        m = n.compareStructural ? Wd.structural : n.equals || Wd.default,
        b = new cp(
            f,
            function () {
                v || h ? y() : g || ((g = !0), p(y));
            },
            n.onError,
            n.requiresObservable,
        );
    function y() {
        if (((g = !1), !b.isDisposed_)) {
            var t = !1;
            (b.track(function () {
                var n = (function (e, t) {
                    var n = Bh(e);
                    try {
                        return t();
                    } finally {
                        Nh(n);
                    }
                })(!1, function () {
                    return e(b);
                });
                ((t = v || !m(l, n)), (c = l), (l = n));
            }),
                ((v && n.fireImmediately) || (!v && t)) && d(l, c, b),
                (v = !1));
        }
    }
    return (
        (null != (i = n) && null != (o = i.signal) && o.aborted) || b.schedule_(),
        b.getDisposer_(null == (a = n) ? void 0 : a.signal)
    );
}
var Cp = 'onBO',
    jp = 'onBUO';
function Up(e, t, n) {
    return Bp(jp, e, t, n);
}
function Bp(e, t, n, r) {
    var i = Qv(t),
        o = id(r) ? r : n,
        a = e + 'L';
    return (
        i[a] ? i[a].add(o) : (i[a] = new Set([o])),
        function () {
            var e = i[a];
            e && (e.delete(o), 0 === e.size && delete i[a]);
        }
    );
}
function Np(e, t, n, r) {
    var i = bd(t);
    return (
        Hv(function () {
            var t = Tv(e, r)[jd];
            vd(i).forEach(function (e) {
                t.extend_(e, i[e], !n || !(e in n) || n[e]);
            });
        }),
        e
    );
}
var Wp = 0;
function Rp() {
    this.message = 'FLOW_CANCELLED';
}
Rp.prototype = Object.create(Error.prototype);
var Ip = $d('flow'),
    Lp = $d('flow.bound', { bound: !0 }),
    Mp = Object.assign(function (e, t) {
        if (Cd(t)) return Ip.decorate_20223_(e, t);
        if (od(t)) return Td(e, t, Ip);
        var n = e,
            r = n.name || '<unnamed flow>',
            i = function () {
                var e,
                    t = arguments,
                    i = ++Wp,
                    o = kp(r + ' - runid: ' + i + ' - init', n).apply(this, t),
                    a = void 0,
                    s = new Promise(function (t, n) {
                        var s = 0;
                        function u(e) {
                            var t;
                            a = void 0;
                            try {
                                t = kp(r + ' - runid: ' + i + ' - yield ' + s++, o.next).call(o, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function l(e) {
                            var t;
                            a = void 0;
                            try {
                                t = kp(r + ' - runid: ' + i + ' - yield ' + s++, o.throw).call(o, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function c(e) {
                            if (!id(null == e ? void 0 : e.then))
                                return e.done ? t(e.value) : (a = Promise.resolve(e.value)).then(u, l);
                            e.then(c, n);
                        }
                        ((e = n), u(void 0));
                    });
                return (
                    (s.cancel = kp(r + ' - runid: ' + i + ' - cancel', function () {
                        try {
                            a && Vp(a);
                            var t = o.return(void 0),
                                n = Promise.resolve(t.value);
                            (n.then(rd, rd), Vp(n), e(new Rp()));
                        } catch (r) {
                            e(r);
                        }
                    })),
                    s
                );
            };
        return ((i.isMobXFlow = !0), i);
    }, Ip);
function Vp(e) {
    id(e.cancel) && e.cancel();
}
function Dp(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function zp(e, t) {
    if (void 0 === t) return zh(e);
    if (!1 === Uv(e)) return !1;
    if (!e[jd].values_.has(t)) return !1;
    var n = Qv(e, t);
    return zh(n);
}
function Fp(e, t) {
    return zp(e, t);
}
function $p(e) {
    return (function (e, t) {
        return !!e && (Uv(e) || !!e[jd] || Bd(e) || vp(e) || zh(e));
    })(e);
}
function Qp(e, t, n, r) {
    return id(n)
        ? (function (e, t, n, r) {
              return qv(e, t).observe_(n, r);
          })(e, t, n, r)
        : (function (e, t, n) {
              return qv(e).observe_(t, n);
          })(e, t, n);
}
function qp(e, t) {
    (void 0 === t && (t = void 0), ap());
    try {
        return e.apply(t);
    } finally {
        sp();
    }
}
function Kp(e) {
    return e[jd];
}
Mp.bound = Ad(Lp);
var Hp = {
    has: function (e, t) {
        return Kp(e).has_(t);
    },
    get: function (e, t) {
        return Kp(e).get_(t);
    },
    set: function (e, t, n) {
        var r;
        return !!od(t) && (null == (r = Kp(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
        var n;
        return !!od(t) && (null == (n = Kp(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
        var r;
        return null == (r = Kp(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
        return Kp(e).ownKeys_();
    },
    preventExtensions: function (e) {
        $f(13);
    },
};
function Gp(e) {
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
    var n = Gh();
    try {
        for (
            var r = [].concat(e.interceptors_ || []), i = 0, o = r.length;
            i < o && ((t = r[i](t)) && !t.type && $f(14), t);
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
    var n = Gh(),
        r = e.changeListeners_;
    if (r) {
        for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](t);
        Xh(n);
    }
}
function tv(e, t, n) {
    return (
        Hv(function () {
            var r = Tv(e, n)[jd];
            (null != t ||
                (t = (function (e) {
                    return (md(e, Ed) || ld(e, Ed, wd({}, e[Ed])), e[Ed]);
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
            var n = e[jd];
            return t === jd
                ? n
                : 'length' === t
                  ? n.getArrayLength_()
                  : 'string' != typeof t || isNaN(t)
                    ? md(sv, t)
                        ? sv[t]
                        : e[t]
                    : n.get_(parseInt(t));
        },
        set: function (e, t, n) {
            var r = e[jd];
            return (
                'length' === t && r.setArrayLength_(n),
                'symbol' == typeof t || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n),
                !0
            );
        },
        preventExtensions: function () {
            $f(15);
        },
    },
    ov = (function () {
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
                (this.atom_ = new Ud(e)),
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
                ('number' != typeof e || isNaN(e) || e < 0) && $f('Out of range: ' + e);
                var t = this.values_.length;
                if (e !== t)
                    if (e > t) {
                        for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
                        this.spliceWithArray_(t, 0, n);
                    } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
                (e !== this.lastKnownLength_ && $f(16),
                    (this.lastKnownLength_ += t),
                    this.legacyMode_ && t > 0 && Fv(e + t + 1));
            }),
            (t.spliceWithArray_ = function (e, t, n) {
                var r = this;
                this.atom_;
                var i = this.values_.length;
                if (
                    (void 0 === e ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
                    (t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e))),
                    void 0 === n && (n = Yf),
                    Gp(this))
                ) {
                    var o = Yp(this, { object: this.proxy_, type: nv, index: e, removedCount: t, added: n });
                    if (!o) return Yf;
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
                    i = Jp(this),
                    o =
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
                (this.atom_.reportChanged(), i && ev(this, o));
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    i = Jp(this),
                    o =
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
                (this.atom_.reportChanged(), i && ev(this, o));
            }),
            (t.get_ = function (e) {
                if (!(this.legacyMode_ && e >= this.values_.length))
                    return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]));
                console.warn('[mobx] Out of bounds read: ' + e);
            }),
            (t.set_ = function (e, t) {
                var n = this.values_;
                if ((this.legacyMode_ && e > n.length && $f(17, e, n.length), e < n.length)) {
                    this.atom_;
                    var r = n[e];
                    if (Gp(this)) {
                        var i = Yp(this, { type: rv, object: this.proxy_, index: e, newValue: t });
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
function av(e, t, n, r) {
    return (
        void 0 === n && (n = 'ObservableArray'),
        void 0 === r && (r = !1),
        td(),
        Hv(function () {
            var i = new ov(n, t, r, !1);
            cd(i.values_, jd, i);
            var o = new Proxy(i.values_, iv);
            return ((i.proxy_ = o), e && e.length && i.spliceWithArray_(0, 0, e), o);
        })
    );
}
var sv = {
    clear: function () {
        return this.splice(0);
    },
    replace: function (e) {
        var t = this[jd];
        return t.spliceWithArray_(0, t.values_.length, e);
    },
    toJSON: function () {
        return this.slice();
    },
    splice: function (e, t) {
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
        var o = this[jd];
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
        return this[jd].spliceWithArray_(e, t, n);
    },
    push: function () {
        for (var e = this[jd], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(e.values_.length, 0, n), e.values_.length);
    },
    pop: function () {
        return this.splice(Math.max(this[jd].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        for (var e = this[jd], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(0, 0, n), e.values_.length);
    },
    reverse: function () {
        return (np.trackingDerivation && $f(37, 'reverse'), this.replace(this.slice().reverse()), this);
    },
    sort: function () {
        np.trackingDerivation && $f(37, 'sort');
        var e = this.slice();
        return (e.sort.apply(e, arguments), this.replace(e), this);
    },
    remove: function (e) {
        var t = this[jd],
            n = t.dehanceValues_(t.values_).indexOf(e);
        return n > -1 && (this.splice(n, 1), !0);
    },
};
function uv(e, t) {
    'function' == typeof Array.prototype[e] && (sv[e] = t(e));
}
function lv(e) {
    return function () {
        var t = this[jd];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments);
    };
}
function cv(e) {
    return function (t, n) {
        var r = this,
            i = this[jd];
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
            n = this[jd];
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
(uv('at', lv),
    uv('concat', lv),
    uv('flat', lv),
    uv('includes', lv),
    uv('indexOf', lv),
    uv('join', lv),
    uv('lastIndexOf', lv),
    uv('slice', lv),
    uv('toString', lv),
    uv('toLocaleString', lv),
    uv('toSorted', lv),
    uv('toSpliced', lv),
    uv('with', lv),
    uv('every', cv),
    uv('filter', cv),
    uv('find', cv),
    uv('findIndex', cv),
    uv('findLast', cv),
    uv('findLastIndex', cv),
    uv('flatMap', cv),
    uv('forEach', cv),
    uv('map', cv),
    uv('some', cv),
    uv('toReversed', cv),
    uv('reduce', fv),
    uv('reduceRight', fv));
var dv,
    hv,
    pv = fd('ObservableArrayAdministration', ov);
function vv(e) {
    return ad(e) && pv(e[jd]);
}
var gv = {},
    mv = 'add',
    bv = 'delete';
((dv = Symbol.iterator), (hv = Symbol.toStringTag));
var yv,
    _v,
    wv = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Rd),
                void 0 === n && (n = 'ObservableMap'),
                (this.enhancer_ = void 0),
                (this.name_ = void 0),
                (this[jd] = gv),
                (this.data_ = void 0),
                (this.hasMap_ = void 0),
                (this.keysAtom_ = void 0),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = t),
                (this.name_ = n),
                id(Map) || $f(18),
                Hv(function () {
                    ((r.keysAtom_ = Nd('ObservableMap.keys()')),
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
                    var r = (n = new Rh(this.has_(e), Id, 'ObservableMap.key?', !1));
                    (this.hasMap_.set(e, r),
                        Up(r, function () {
                            return t.hasMap_.delete(e);
                        }));
                }
                return n.get();
            }),
            (t.set = function (e, t) {
                var n = this.has_(e);
                if (Gp(this)) {
                    var r = Yp(this, { type: n ? rv : mv, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, Gp(this)) && !Yp(this, { type: bv, object: this, name: e })) return !1;
                if (this.has_(e)) {
                    var n = Jp(this),
                        r = n
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: bv,
                                  object: this,
                                  oldValue: this.data_.get(e).value_,
                                  name: e,
                              }
                            : null;
                    return (
                        qp(function () {
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
                    qp(function () {
                        var r,
                            i = new Rh(t, n.enhancer_, 'ObservableMap.key', !1);
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
                              type: mv,
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
                for (var n, r = Pd(this); !(n = r()).done; ) {
                    var i = n.value,
                        o = i[0],
                        a = i[1];
                    e.call(t, a, o, this);
                }
            }),
            (t.merge = function (e) {
                var t = this;
                return (
                    Sv(e) && (e = new Map(e)),
                    qp(function () {
                        sd(e)
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
                                ? (e.constructor !== Map && $f(19, e),
                                  e.forEach(function (e, n) {
                                      return t.set(n, e);
                                  }))
                                : null != e && $f(20, e);
                    }),
                    this
                );
            }),
            (t.clear = function () {
                var e = this;
                qp(function () {
                    Hh(function () {
                        for (var t, n = Pd(e.keys()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    qp(function () {
                        for (
                            var n,
                                r = (function (e) {
                                    if (dd(e) || Sv(e)) return e;
                                    if (Array.isArray(e)) return new Map(e);
                                    if (sd(e)) {
                                        var t = new Map();
                                        for (var n in e) t.set(n, e[n]);
                                        return t;
                                    }
                                    return $f(21, e);
                                })(e),
                                i = new Map(),
                                o = !1,
                                a = Pd(t.data_.keys());
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
                        for (var l, c = Pd(r.entries()); !(l = c()).done; ) {
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
                                for (var g = t.data_.keys(), m = i.keys(), b = g.next(), y = m.next(); !b.done; ) {
                                    if (b.value !== y.value) {
                                        t.keysAtom_.reportChanged();
                                        break;
                                    }
                                    ((b = g.next()), (y = m.next()));
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
var Ov = {};
((yv = Symbol.iterator), (_v = Symbol.toStringTag));
var kv = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Rd),
                void 0 === n && (n = 'ObservableSet'),
                (this.name_ = void 0),
                (this[jd] = Ov),
                (this.data_ = new Set()),
                (this.atom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = void 0),
                (this.name_ = n),
                id(Set) || $f(22),
                (this.enhancer_ = function (e, r) {
                    return t(e, r, n);
                }),
                Hv(function () {
                    ((r.atom_ = Nd(r.name_)), e && r.replace(e));
                }));
        }
        var t = e.prototype;
        return (
            (t.dehanceValue_ = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
                var e = this;
                qp(function () {
                    Hh(function () {
                        for (var t, n = Pd(e.data_.values()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.forEach = function (e, t) {
                for (var n, r = Pd(this); !(n = r()).done; ) {
                    var i = n.value;
                    e.call(t, i, i, this);
                }
            }),
            (t.add = function (e) {
                var t = this;
                if ((this.atom_, Gp(this)) && !Yp(this, { type: mv, object: this, newValue: e })) return this;
                if (!this.has(e)) {
                    qp(function () {
                        (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
                    });
                    var n = Jp(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: mv,
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
                if (Gp(this) && !Yp(this, { type: bv, object: this, oldValue: e })) return !1;
                if (this.has(e)) {
                    var n = Jp(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: bv,
                                  object: this,
                                  oldValue: e,
                              }
                            : null;
                    return (
                        qp(function () {
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
                    qp(function () {
                        Array.isArray(e) || hd(e)
                            ? (t.clear(),
                              e.forEach(function (e) {
                                  return t.add(e);
                              }))
                            : null != e && $f('Cannot initialize set from ' + e);
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
            (t[yv] = function () {
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
    xv = fd('ObservableSet', kv),
    Pv = Object.create(null),
    Ev = 'remove',
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
                (this.keysAtom_ = new Ud('ObservableObject.keys')),
                (this.isPlainObject_ = sd(this.target_)));
        }
        var t = e.prototype;
        return (
            (t.getObservablePropValue_ = function (e) {
                return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
                var n = this.values_.get(e);
                if (n instanceof Dh) return (n.set(t), !0);
                if (Gp(this)) {
                    var r = Yp(this, { type: rv, object: this.proxy_ || this.target_, name: e, newValue: t });
                    if (!r) return null;
                    t = r.newValue;
                }
                if ((t = n.prepareNewValue_(t)) !== np.UNCHANGED) {
                    var i = Jp(this),
                        o = i
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
                    (n.setNewValue_(t), i && ev(this, o));
                }
                return !0;
            }),
            (t.get_ = function (e) {
                return (np.trackingDerivation && !md(this.target_, e) && this.has_(e), this.target_[e]);
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
                if (!np.trackingDerivation) return e in this.target_;
                this.pendingKeys_ || (this.pendingKeys_ = new Map());
                var t = this.pendingKeys_.get(e);
                return (
                    t ||
                        ((t = new Rh(e in this.target_, Id, 'ObservableObject.key?', !1)), this.pendingKeys_.set(e, t)),
                    t.get()
                );
            }),
            (t.make_ = function (e, t) {
                if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                    if (!(e in this.target_)) {
                        var n;
                        if (null != (n = this.target_[Ed]) && n[e]) return;
                        $f(1, t.annotationType_, this.name_ + '.' + e.toString());
                    }
                    for (var r = this.target_; r && r !== Xf; ) {
                        var i = Hf(r, e);
                        if (i) {
                            var o = t.make_(this, e, i, r);
                            if (0 === o) return;
                            if (1 === o) break;
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
                    ap();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (Gp(this)) {
                        var i = Yp(this, { object: this.proxy_ || this.target_, name: e, type: mv, newValue: t.value });
                        if (!i) return null;
                        var o = i.newValue;
                        t.value !== o && (t = wd({}, t, { value: o }));
                    }
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                    } else Gf(this.target_, e, t);
                    this.notifyPropertyAddition_(e, t.value);
                } finally {
                    sp();
                }
                return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
                (void 0 === r && (r = !1), this.keysAtom_);
                try {
                    ap();
                    var i = this.delete_(e);
                    if (!i) return i;
                    if (Gp(this)) {
                        var o = Yp(this, { object: this.proxy_ || this.target_, name: e, type: mv, newValue: t });
                        if (!o) return null;
                        t = o.newValue;
                    }
                    var a = jv(e),
                        s = {
                            configurable: !np.safeDescriptors || this.isPlainObject_,
                            enumerable: !0,
                            get: a.get,
                            set: a.set,
                        };
                    if (r) {
                        if (!Reflect.defineProperty(this.target_, e, s)) return !1;
                    } else Gf(this.target_, e, s);
                    var u = new Rh(t, n, 'ObservableObject.key', !1);
                    (this.values_.set(e, u), this.notifyPropertyAddition_(e, u.value_));
                } finally {
                    sp();
                }
                return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    ap();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (Gp(this))
                        if (!Yp(this, { object: this.proxy_ || this.target_, name: e, type: mv, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var i = jv(e),
                        o = {
                            configurable: !np.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: i.get,
                            set: i.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, o)) return !1;
                    } else Gf(this.target_, e, o);
                    (this.values_.set(e, new Dh(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    sp();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !md(this.target_, e))) return !0;
                if (Gp(this) && !Yp(this, { object: this.proxy_ || this.target_, name: e, type: Ev })) return null;
                try {
                    var n, r;
                    ap();
                    var i,
                        o = Jp(this),
                        a = this.values_.get(e),
                        s = void 0;
                    if (!a && o) s = null == (i = Hf(this.target_, e)) ? void 0 : i.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (a && (this.values_.delete(e), a instanceof Rh && (s = a.value_), lp(a)),
                        this.keysAtom_.reportChanged(),
                        null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
                        o)
                    ) {
                        var u = {
                            type: Ev,
                            observableKind: 'object',
                            object: this.proxy_ || this.target_,
                            debugObjectName: this.name_,
                            oldValue: s,
                            name: e,
                        };
                        (0, o && ev(this, u));
                    }
                } finally {
                    sp();
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
                    var o = i
                        ? {
                              type: mv,
                              observableKind: 'object',
                              debugObjectName: this.name_,
                              object: this.proxy_ || this.target_,
                              name: e,
                              newValue: t,
                          }
                        : null;
                    i && ev(this, o);
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
function Tv(e, t) {
    var n;
    if (md(e, jd)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
        i = new Av(
            e,
            new Map(),
            String(r),
            (function (e) {
                var t;
                return e ? (null != (t = e.defaultDecorator) ? t : oh(e)) : void 0;
            })(t),
        );
    return (ld(e, jd, i), e);
}
var Cv = fd('ObservableObjectAdministration', Av);
function jv(e) {
    return (
        Pv[e] ||
        (Pv[e] = {
            get: function () {
                return this[jd].getObservablePropValue_(e);
            },
            set: function (t) {
                return this[jd].setObservablePropValue_(e, t);
            },
        })
    );
}
function Uv(e) {
    return !!ad(e) && Cv(e[jd]);
}
function Bv(e, t, n) {
    var r;
    null == (r = e.target_[Ed]) || delete r[n];
}
var Nv,
    Wv,
    Rv = Dv(0),
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
    Lv = 0,
    Mv = function () {};
((Nv = Mv),
    (Wv = Array.prototype),
    Object.setPrototypeOf
        ? Object.setPrototypeOf(Nv.prototype, Wv)
        : void 0 !== Nv.prototype.__proto__
          ? (Nv.prototype.__proto__ = Wv)
          : (Nv.prototype = Wv));
var Vv = (function (e, t, n) {
    function r(t, n, r, i) {
        var o;
        return (
            void 0 === r && (r = 'ObservableArray'),
            void 0 === i && (i = !1),
            (o = e.call(this) || this),
            Hv(function () {
                var e = new ov(r, n, i, !0);
                ((e.proxy_ = kd(o)),
                    cd(kd(o), jd, e),
                    t && t.length && o.spliceWithArray(0, 0, t),
                    Iv && Object.defineProperty(kd(o), '0', Rv));
            }),
            o
        );
    }
    Sd(r, e);
    var i = r.prototype;
    return (
        (i.concat = function () {
            this[jd].atom_.reportObserved();
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
                    return this[jd].getArrayLength_();
                },
                set: function (e) {
                    this[jd].setArrayLength_(e);
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
function Dv(e) {
    return {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this[jd].get_(e);
        },
        set: function (t) {
            this[jd].set_(e, t);
        },
    };
}
function zv(e) {
    Gf(Vv.prototype, '' + e, Dv(e));
}
function Fv(e) {
    if (e > Lv) {
        for (var t = Lv; t < e + 100; t++) zv(t);
        Lv = e;
    }
}
function $v(e, t, n) {
    return new Vv(e, t, n);
}
function Qv(e, t) {
    if ('object' == typeof e && null !== e) {
        if (vv(e)) return (void 0 !== t && $f(23), e[jd].atom_);
        if (xv(e)) return e.atom_;
        if (Sv(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return (n || $f(25, t, Kv(e)), n);
        }
        if (Uv(e)) {
            if (!t) return $f(26);
            var r = e[jd].values_.get(t);
            return (r || $f(27, t, Kv(e)), r);
        }
        if (Bd(e) || zh(e) || vp(e)) return e;
    } else if (id(e) && vp(e[jd])) return e[jd];
    $f(28);
}
function qv(e, t) {
    return (
        e || $f(29),
        void 0 !== t ? qv(Qv(e, t)) : Bd(e) || zh(e) || vp(e) || Sv(e) || xv(e) ? e : e[jd] ? e[jd] : void $f(24, e)
    );
}
function Kv(e, t) {
    var n;
    if (void 0 !== t) n = Qv(e, t);
    else {
        if (Pp(e)) return e.name;
        n = Uv(e) || Sv(e) || xv(e) ? qv(e) : Qv(e);
    }
    return n.name_;
}
function Hv(e) {
    var t = Gh(),
        n = Bh(!0);
    ap();
    try {
        return e();
    } finally {
        (sp(), Nh(n), Xh(t));
    }
}
(Object.entries(sv).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && ld(Vv.prototype, t, n);
}),
    Fv(1e3));
var Gv = Xf.toString;
function Xv(e, t, n) {
    return (void 0 === n && (n = -1), Yv(e, t, n));
}
function Yv(e, t, n, r, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var o = typeof e;
    if ('function' !== o && 'object' !== o && 'object' != typeof t) return !1;
    var a = Gv.call(e);
    if (a !== Gv.call(t)) return !1;
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
    ((e = Jv(e)), (t = Jv(t)));
    var s = '[object Array]' === a;
    if (!s) {
        if ('object' != typeof e || 'object' != typeof t) return !1;
        var u = e.constructor,
            l = t.constructor;
        if (
            u !== l &&
            !(id(u) && u instanceof u && id(l) && l instanceof l) &&
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
        for (; c--; ) if (!Yv(e[c], t[c], n - 1, r, i)) return !1;
    } else {
        var f,
            d = Object.keys(e);
        if (((c = d.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (!md(t, (f = d[c])) || !Yv(e[f], t[f], n - 1, r, i)) return !1;
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
    void 0 === qf()[e] && $f("MobX requires global '" + e + "' to be available or polyfilled");
}),
    'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
                return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
            },
            extras: { getDebugName: Kv },
            $mobx: jd,
        }));
var tg = mg(),
    ng = (e) => hg(e, tg),
    rg = mg();
ng.write = (e) => hg(e, rg);
var ig = mg();
ng.onStart = (e) => hg(e, ig);
var og = mg();
ng.onFrame = (e) => hg(e, og);
var ag = mg();
ng.onFinish = (e) => hg(e, ag);
var sg = [];
ng.setTimeout = (e, t) => {
    const n = ng.now() + t,
        r = () => {
            const e = sg.findIndex((e) => e.cancel == r);
            (~e && sg.splice(e, 1), (fg -= ~e ? 1 : 0));
        },
        i = { time: n, handler: e, cancel: r };
    return (sg.splice(ug(n), 0, i), (fg += 1), pg(), i);
};
var ug = (e) => ~(~sg.findIndex((t) => t.time > e) || ~sg.length);
((ng.cancel = (e) => {
    (ig.delete(e), og.delete(e), ag.delete(e), tg.delete(e), rg.delete(e));
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
var lg = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
((ng.use = (e) => (lg = e)),
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
    cg < 0 && ((cg = 0), 'demand' !== ng.frameLoop && lg(vg));
}
function vg() {
    ~cg && (lg(vg), ng.batchedUpdates(gg));
}
function gg() {
    const e = cg;
    cg = ng.now();
    const t = ug(cg);
    (t && (bg(sg.splice(0, t), (e) => e.handler()), (fg -= t)),
        fg ? (ig.flush(), tg.flush(e ? Math.min(64, cg - e) : 16.667), og.flush(), rg.flush(), ag.flush()) : (cg = -1));
}
function mg() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            ((fg += t != e || e.has(n) ? 0 : 1), e.add(n));
        },
        delete: (n) => ((fg -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (fg -= t.size), bg(t, (t) => t(n) && e.add(t)), (fg += e.size), (t = e));
        },
    };
}
function bg(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            ng.catch(n);
        }
    });
}
var yg = Object.defineProperty,
    _g = {};
((e, t) => {
    for (var n in t) yg(e, n, { get: t[n], enumerable: !0 });
})(_g, {
    assign: () => jg,
    colors: () => Ag,
    createStringInterpolator: () => kg,
    skipAnimation: () => Tg,
    to: () => xg,
    willAdvance: () => Cg,
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
function Og(e, t, n) {
    if (wg.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var kg,
    xg,
    Pg = (e) => (wg.und(e) ? [] : wg.arr(e) ? e : [e]),
    Eg = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    Ag = null,
    Tg = !1,
    Cg = function () {},
    jg = (e) => {
        (e.to && (xg = e.to),
            e.now && (ng.now = e.now),
            void 0 !== e.colors && (Ag = e.colors),
            null != e.skipAnimation && (Tg = e.skipAnimation),
            e.createStringInterpolator && (kg = e.createStringInterpolator),
            e.requestAnimationFrame && ng.use(e.requestAnimationFrame),
            e.batchedUpdates && (ng.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (Cg = e.willAdvance),
            e.frameLoop && (ng.frameLoop = e.frameLoop));
    },
    Ug = new Set(),
    Bg = [],
    Ng = [],
    Wg = 0,
    Rg = {
        get idle() {
            return !Ug.size && !Bg.length;
        },
        start(e) {
            Wg > e.priority ? (Ug.add(e), ng.onStart(Ig)) : (Lg(e), ng(Vg));
        },
        advance: Vg,
        sort(e) {
            if (Wg) ng.onFrame(() => Rg.sort(e));
            else {
                const t = Bg.indexOf(e);
                ~t && (Bg.splice(t, 1), Mg(e));
            }
        },
        clear() {
            ((Bg = []), Ug.clear());
        },
    };
function Ig() {
    (Ug.forEach(Lg), Ug.clear(), ng(Vg));
}
function Lg(e) {
    Bg.includes(e) || Mg(e);
}
function Mg(e) {
    Bg.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(Bg, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function Vg(e) {
    const t = Ng;
    for (let n = 0; n < Bg.length; n++) {
        const r = Bg[n];
        ((Wg = r.priority), r.idle || (Cg(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((Wg = 0), ((Ng = Bg).length = 0), (Bg = t).length > 0);
}
var Dg = '[-+]?\\d*\\.?\\d+',
    zg = Dg + '%';
function Fg(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var $g = new RegExp('rgb' + Fg(Dg, Dg, Dg)),
    Qg = new RegExp('rgba' + Fg(Dg, Dg, Dg, Dg)),
    qg = new RegExp('hsl' + Fg(Dg, zg, zg)),
    Kg = new RegExp('hsla' + Fg(Dg, zg, zg, Dg)),
    Hg = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    Gg = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
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
        o = Jg(i, r, e + 1 / 3),
        a = Jg(i, r, e),
        s = Jg(i, r, e - 1 / 3);
    return (Math.round(255 * o) << 24) | (Math.round(255 * a) << 16) | (Math.round(255 * s) << 8);
}
function em(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function tm(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function nm(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function rm(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function im(e) {
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
                : (t = $g.exec(e))
                  ? ((em(t[1]) << 24) | (em(t[2]) << 16) | (em(t[3]) << 8) | 255) >>> 0
                  : (t = Qg.exec(e))
                    ? ((em(t[1]) << 24) | (em(t[2]) << 16) | (em(t[3]) << 8) | nm(t[4])) >>> 0
                    : (t = Hg.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = Yg.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = Gg.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = qg.exec(e))
                            ? (255 | Zg(tm(t[1]), rm(t[2]), rm(t[3]))) >>> 0
                            : (t = Kg.exec(e))
                              ? (Zg(tm(t[1]), rm(t[2]), rm(t[3])) | nm(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var om = (e, t, n) => {
    if (wg.fun(e)) return e;
    if (wg.arr(e)) return om({ range: e, output: t, extrapolate: n });
    if (wg.str(e.output[0])) return kg(e);
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
var am = Symbol.for('FluidValue.get'),
    sm = Symbol.for('FluidValue.observers'),
    um = (e) => Boolean(e && e[am]),
    lm = (e) => (e && e[am] ? e[am]() : e);
function cm(e, t) {
    const n = e[sm];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
var fm = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            dm(this, e);
        }
    },
    dm = (e, t) => gm(e, am, t);
function hm(e, t) {
    if (e[am]) {
        let n = e[sm];
        (n || gm(e, sm, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function pm(e, t) {
    const n = e[sm];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[sm] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
var vm,
    gm = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    mm = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    bm = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    ym = new RegExp(`(${mm.source})(%|[a-z]+)`, 'i'),
    _m = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    wm = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    Sm = (e) => {
        const [t, n] = Om(e);
        if (!t || Eg()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && wm.test(n) ? Sm(n) : n || e;
    },
    Om = (e) => {
        const t = wm.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    km = (e, t, n, r, i) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
    xm = (e) => {
        vm || (vm = Ag ? new RegExp(`(${Object.keys(Ag).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => lm(e).replace(wm, Sm).replace(bm, im).replace(vm, im)),
            n = t.map((e) => e.match(mm).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => om({ ...e, output: t }));
        return (e) => {
            var n;
            const i = !ym.test(t[0]) && (null == (n = t.find((e) => ym.test(e))) ? void 0 : n.replace(mm, ''));
            let o = 0;
            return t[0].replace(mm, () => `${r[o++](e)}${i || ''}`).replace(_m, km);
        };
    },
    Pm = 'react-spring: ',
    Em = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${Pm}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    Am = Em(console.warn);
function Tm(e) {
    return wg.str(e) && ('#' == e[0] || /\d/.test(e) || (!Eg() && wm.test(e)) || e in (Ag || {}));
}
Em(console.warn);
var Cm = Eg() ? M.useEffect : M.useLayoutEffect;
function jm() {
    const e = M.useState()[1],
        t = (() => {
            const e = M.useRef(!1);
            return (
                Cm(
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
    Nm = (e) => e && e[Bm],
    Wm = (e, t) => {
        return ((n = e), (r = Bm), (i = t), Object.defineProperty(n, r, { value: i, writable: !0, configurable: !0 }));
        var n, r, i;
    },
    Rm = (e) => e && e[Bm] && e[Bm].getPayload(),
    Im = class {
        constructor() {
            Wm(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    Lm = class extends Im {
        constructor(e) {
            (super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                wg.num(this._value) && (this.lastPosition = this._value));
        }
        static create(e) {
            return new Lm(e);
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
    Mm = class extends Lm {
        constructor(e) {
            (super(0), (this._string = null), (this._toString = om({ output: [e, e] })));
        }
        static create(e) {
            return new Mm(e);
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
            (e && (this._toString = om({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
        }
    },
    Vm = { dependencies: null },
    Dm = class extends Im {
        constructor(e) {
            (super(), (this.source = e), this.setValue(e));
        }
        getValue(e) {
            const t = {};
            return (
                Og(this.source, (n, r) => {
                    var i;
                    (i = n) && i[Bm] === i ? (t[r] = n.getValue(e)) : um(n) ? (t[r] = lm(n)) : e || (t[r] = n);
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
                return (Og(e, this._addToPayload, t), Array.from(t));
            }
        }
        _addToPayload(e) {
            Vm.dependencies && um(e) && Vm.dependencies.add(e);
            const t = Rm(e);
            t && Sg(t, (e) => this.add(e));
        }
    },
    zm = class extends Dm {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new zm(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map(Fm)), !0);
        }
    };
function Fm(e) {
    return (Tm(e) ? Mm : Lm).create(e);
}
var $m = (e, t) => {
        const n = !wg.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return M.forwardRef((r, i) => {
            const o = M.useRef(null),
                a =
                    n &&
                    M.useCallback(
                        (e) => {
                            o.current = (function (e, t) {
                                e && (wg.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(i, e);
                        },
                        [i],
                    ),
                [s, u] = (function (e, t) {
                    const n = new Set();
                    ((Vm.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                    return ((e = new Dm(e)), (Vm.dependencies = null), [e, n]);
                })(r, t),
                l = jm(),
                c = () => {
                    const e = o.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && l();
                },
                f = new Qm(c, u),
                d = M.useRef();
            var h;
            (Cm(
                () => (
                    (d.current = f),
                    Sg(u, (e) => hm(e, f)),
                    () => {
                        d.current && (Sg(d.current.deps, (e) => pm(e, d.current)), ng.cancel(d.current.update));
                    }
                ),
            ),
                M.useEffect(c, []),
                (h = () => () => {
                    const e = d.current;
                    Sg(e.deps, (t) => pm(t, e));
                }),
                M.useEffect(h, Um));
            const p = t.getComponentProps(s.getValue());
            return M.createElement(e, { ...p, ref: a });
        });
    },
    Qm = class {
        constructor(e, t) {
            ((this.update = e), (this.deps = t));
        }
        eventObserved(e) {
            'change' == e.type && ng.write(this.update);
        }
    };
var qm,
    Km,
    Hm = Symbol.for('AnimatedComponent'),
    Gm = (e) => (wg.str(e) ? e : e && wg.str(e.displayName) ? e.displayName : (wg.fun(e) && e.name) || null),
    Xm = (e) => e instanceof Jm,
    Ym = 1,
    Jm = class extends fm {
        constructor() {
            (super(...arguments), (this.id = Ym++), (this._priority = 0));
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = Nm(this);
            return e && e.getValue();
        }
        to(...e) {
            return _g.to(this, e);
        }
        interpolate(...e) {
            return (Am(`${Pm}The "interpolate" function is deprecated in v9 (use "to" instead)`), _g.to(this, e));
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
            cm(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            (this.idle || Rg.sort(this), cm(this, { type: 'priority', parent: this, priority: e }));
        }
    },
    Zm = ({ children: e, ...t }) => {
        const n = M.useContext(eb),
            r = t.pause || !!n.pause,
            i = t.immediate || !!n.immediate;
        t = (function (e, t) {
            const [n] = M.useState(() => ({ inputs: t, result: e() })),
                r = M.useRef(),
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
                M.useEffect(() => {
                    ((r.current = o), i == n && (n.inputs = n.result = void 0));
                }, [o]),
                o.result
            );
        })(() => ({ pause: r, immediate: i }), [r, i]);
        const { Provider: o } = eb;
        return M.createElement(o, { value: t }, e);
    },
    eb =
        ((qm = Zm),
        (Km = {}),
        Object.assign(qm, M.createContext(Km)),
        (qm.Provider._context = qm),
        (qm.Consumer._context = qm),
        qm);
((Zm.Provider = eb.Provider), (Zm.Consumer = eb.Consumer));
var tb = class extends Jm {
    constructor(e, t) {
        (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = om(...t)));
        const n = this._get(),
            r = (function (e) {
                const t = Nm(e);
                return t ? t.constructor : wg.arr(e) ? zm : Tm(e) ? Mm : Lm;
            })(n);
        Wm(this, r.create(n));
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
        })(t, this.get()) || (Nm(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && rb(this._active) && ib(this));
    }
    _get() {
        const e = wg.arr(this.source) ? this.source.map(lm) : Pg(lm(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !rb(this._active) &&
            ((this.idle = !1),
            Sg(Rm(this), (e) => {
                e.done = !1;
            }),
            _g.skipAnimation ? (ng.batchedUpdates(() => this.advance()), ib(this)) : Rg.start(this));
    }
    _attach() {
        let e = 1;
        (Sg(Pg(this.source), (t) => {
            (um(t) && hm(t, this), Xm(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (Sg(Pg(this.source), (e) => {
            um(e) && pm(e, this);
        }),
            this._active.clear(),
            ib(this));
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = Pg(this.source).reduce((e, t) => Math.max(e, (Xm(t) ? t.priority : 0) + 1), 0));
    }
};
function nb(e) {
    return !1 !== e.idle;
}
function rb(e) {
    return !e.size || Array.from(e).every(nb);
}
function ib(e) {
    e.idle ||
        ((e.idle = !0),
        Sg(Rm(e), (e) => {
            e.done = !0;
        }),
        cm(e, { type: 'idle', parent: e }));
}
_g.assign({ createStringInterpolator: xm, to: (e, t) => new tb(e, t) });
var ob = /^--/;
function ab(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || ob.test(e) || (ub.hasOwnProperty(e) && ub[e])
          ? ('' + t).trim()
          : t + 'px';
}
var sb = {};
var ub = {
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
    lb = ['Webkit', 'Ms', 'Moz', 'O'];
ub = Object.keys(ub).reduce(
    (e, t) => (lb.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    ub,
);
var cb = /^(matrix|translate|scale|rotate|skew)/,
    fb = /^(translate)/,
    db = /^(rotate|skew)/,
    hb = (e, t) => (wg.num(e) && 0 !== e ? e + t : e),
    pb = (e, t) => (wg.arr(e) ? e.every((e) => pb(e, t)) : wg.num(e) ? e === t : parseFloat(e) === t),
    vb = class extends Dm {
        constructor({ x: e, y: t, z: n, ...r }) {
            const i = [],
                o = [];
            ((e || t || n) &&
                (i.push([e || 0, t || 0, n || 0]),
                o.push((e) => [`translate3d(${e.map((e) => hb(e, 'px')).join(',')})`, pb(e, 0)])),
                Og(r, (e, t) => {
                    if ('transform' === t) (i.push([e || '']), o.push((e) => [e, '' === e]));
                    else if (cb.test(t)) {
                        if ((delete r[t], wg.und(e))) return;
                        const n = fb.test(t) ? 'px' : db.test(t) ? 'deg' : '';
                        (i.push(Pg(e)),
                            o.push(
                                'rotate3d' === t
                                    ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${hb(i, n)})`, pb(i, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => hb(e, n)).join(',')})`,
                                          pb(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                i.length && (r.transform = new gb(i, o)),
                super(r));
        }
    },
    gb = class extends fm {
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
                    const i = lm(n[0]),
                        [o, a] = this.transforms[r](wg.arr(i) ? i : n.map(lm));
                    ((e += ' ' + o), (t = t && a));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && Sg(this.inputs, (e) => Sg(e, (e) => um(e) && hm(e, this)));
        }
        observerRemoved(e) {
            0 == e && Sg(this.inputs, (e) => Sg(e, (e) => um(e) && pm(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), cm(this, e));
        }
    };
function mb(e, t) {
    (void 0 === t && (t = 'Illegal state'),
        e ||
            (function (e) {
                throw new Error('[mobx-utils] ' + e);
            })(t));
}
(_g.assign({
    batchedUpdates: Mf.unstable_batchedUpdates,
    createStringInterpolator: xm,
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
            createAnimatedStyle: n = (e) => new Dm(e),
            getComponentProps: r = (e) => e,
        } = {},
    ) => {
        const i = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
            o = (e) => {
                const t = Gm(e) || 'Anonymous';
                return (
                    ((e = wg.str(e) ? o[e] || (o[e] = $m(e, i)) : e[Hm] || (e[Hm] = $m(e, i))).displayName =
                        `Animated(${t})`),
                    e
                );
            };
        Og(e, (t, n) => {
            (wg.arr(e) && (n = Gm(t)), (o[n] = o(t)));
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
                    { style: r, children: i, scrollTop: o, scrollLeft: a, viewBox: s, ...u } = t,
                    l = Object.values(u),
                    c = Object.keys(u).map((t) =>
                        n || e.hasAttribute(t)
                            ? t
                            : sb[t] || (sb[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                    );
                void 0 !== i && (e.textContent = i);
                for (const f in r)
                    if (r.hasOwnProperty(f)) {
                        const t = ab(f, r[f]);
                        ob.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                    }
                (c.forEach((t, n) => {
                    e.setAttribute(t, l[n]);
                }),
                    void 0 !== o && (e.scrollTop = o),
                    void 0 !== a && (e.scrollLeft = a),
                    void 0 !== s && e.setAttribute('viewBox', s));
            },
            createAnimatedStyle: (e) => new vb(e),
            getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
        },
    ));
var bb,
    yb = function (e) {
        return e && e !== Object.prototype && Object.getOwnPropertyNames(e).concat(yb(Object.getPrototypeOf(e)) || []);
    },
    _b = function (e) {
        return (function (e) {
            var t = yb(e);
            return t.filter(function (e, n) {
                return t.indexOf(e) === n;
            });
        })(e).filter(function (e) {
            return 'constructor' !== e && !~e.indexOf('__');
        });
    },
    wb = 'pending',
    Sb = 'fulfilled',
    Ob = 'rejected';
function kb(e) {
    switch (this.state) {
        case wb:
            return e.pending && e.pending(this.value);
        case Ob:
            return e.rejected && e.rejected(this.value);
        case Sb:
            return e.fulfilled ? e.fulfilled(this.value) : this.value;
    }
}
function xb(e, t) {
    if (
        (mb(arguments.length <= 2, 'fromPromise expects up to two arguments'),
        mb(
            'function' == typeof e || ('object' == typeof e && e && 'function' == typeof e.then),
            'Please pass a promise or function to fromPromise',
        ),
        !0 === e.isPromiseBasedObservable)
    )
        return e;
    'function' == typeof e && (e = new Promise(e));
    var n = e;
    (e.then(
        kp('observableFromPromise-resolve', function (e) {
            ((n.value = e), (n.state = Sb));
        }),
        kp('observableFromPromise-reject', function (e) {
            ((n.value = e), (n.state = Ob));
        }),
    ),
        (n.isPromiseBasedObservable = !0),
        (n.case = kb));
    var r = !t || (t.state !== Sb && t.state !== wb) ? void 0 : t.value;
    return (Np(n, { value: r, state: wb }, {}, { deep: !1 }), n);
}
(((bb = xb || (xb = {})).reject = kp('fromPromise.reject', function (e) {
    var t = bb(Promise.reject(e));
    return ((t.state = Ob), (t.value = e), t);
})),
    (bb.resolve = kp('fromPromise.resolve', function (e) {
        void 0 === e && (e = void 0);
        var t = bb(Promise.resolve(e));
        return ((t.state = Sb), (t.value = e), t);
    })));
var Pb = function (e, t, n, r) {
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
            tv(this),
            (function (e) {
                Uh(e.name, !1, e, this, void 0);
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
        Pb([wh.ref], e.prototype, 'current', void 0),
        Pb([kp.bound], e.prototype, 'next', null),
        Pb([kp.bound], e.prototype, 'complete', null),
        Pb([kp.bound], e.prototype, 'error', null));
})();
var Eb = function () {
        return (
            (Eb =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            Eb.apply(this, arguments)
        );
    },
    Ab = function (e, t, n, r) {
        var i,
            o = arguments.length,
            a = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return (o > 3 && a && Object.defineProperty(t, n, a), a);
    },
    Tb = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
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
            mb(Uv(e), 'createViewModel expects an observable object'));
        var n = _b(this);
        _b(e).forEach(function (r) {
            var i;
            if (!n.includes(r) && r !== jd && '__mobxDidRunLazyInitializers' !== r) {
                if (
                    (mb(
                        -1 === Tb.indexOf(r),
                        'The propertyname ' + r + ' is reserved and cannot be used with viewModels',
                    ),
                    Fp(e, r))
                ) {
                    var o = qv(e, r),
                        a = o.derivation.bind(t),
                        s = null === (i = o.setter_) || void 0 === i ? void 0 : i.bind(t);
                    t.localComputedValues.set(r, xh(a, { set: s }));
                }
                var u = Object.getOwnPropertyDescriptor(e, r),
                    l = u ? { enumerable: u.enumerable } : {};
                Object.defineProperty(
                    t,
                    r,
                    Eb(Eb({}, l), {
                        configurable: !0,
                        get: function () {
                            return Fp(e, r)
                                ? t.localComputedValues.get(r).get()
                                : t.isPropertyDirty(r)
                                  ? t.localValues.get(r)
                                  : t.model[r];
                        },
                        set: kp(function (n) {
                            Fp(e, r)
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
                    ? e[jd].keys_()
                    : Sv(e) || xv(e)
                      ? Array.from(e.keys())
                      : vv(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void $f(5)).forEach(function (e) {
                    var n = t.localValues.get(e),
                        r = t.model[e];
                    vv(r) ? r.replace(n) : Sv(r) ? (r.clear(), r.merge(n)) : zp(n) || (t.model[e] = n);
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
        Ab([xh], e.prototype, 'isDirty', null),
        Ab([xh], e.prototype, 'changedValues', null),
        Ab([kp.bound], e.prototype, 'submit', null),
        Ab([kp.bound], e.prototype, 'reset', null),
        Ab([kp.bound], e.prototype, 'resetProperty', null));
})();
var Cb = (function () {
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
            (l._disposeBaseObserver = Qp(l._base, function (e) {
                if ('splice' === e.type)
                    qp(function () {
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
                    qp(function () {
                        (l._removeItem(e.oldValue), l._addItem(e.newValue));
                    });
                }
            })),
            l
        );
    }
    (Cb(t, e),
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
                        reaction: Tp(
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
})(wv);
var jb = { exports: {} };
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
                    var o = typeof i;
                    if ('string' === o || 'number' === o) e.push(i);
                    else if (Array.isArray(i)) {
                        if (i.length) {
                            var a = n.apply(null, i);
                            a && e.push(a);
                        }
                    } else if ('object' === o) {
                        if (
                            i.toString !== Object.prototype.toString &&
                            !i.toString.toString().includes('[native code]')
                        ) {
                            e.push(i.toString());
                            continue;
                        }
                        for (var s in i) t.call(i, s) && i[s] && e.push(s);
                    }
                }
            }
            return e.join(' ');
        }
        e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
    })();
})(jb);
const Ub = e(jb.exports);
var Bb = (function () {
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
    Nb = 'undefined' != typeof window && 'undefined' != typeof document && window.document === document,
    Wb =
        'undefined' != typeof global && global.Math === Math
            ? global
            : 'undefined' != typeof self && self.Math === Math
              ? self
              : 'undefined' != typeof window && window.Math === Math
                ? window
                : Function('return this')(),
    Rb =
        'function' == typeof requestAnimationFrame
            ? requestAnimationFrame.bind(Wb)
            : function (e) {
                  return setTimeout(function () {
                      return e(Date.now());
                  }, 1e3 / 60);
              };
var Ib = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
    Lb = 'undefined' != typeof MutationObserver,
    Mb = (function () {
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
                        (n && ((n = !1), e()), r && s());
                    }
                    function a() {
                        Rb(o);
                    }
                    function s() {
                        var e = Date.now();
                        if (n) {
                            if (e - i < 2) return;
                            r = !0;
                        } else ((n = !0), (r = !1), setTimeout(a, t));
                        i = e;
                    }
                    return s;
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
                Nb &&
                    !this.connected_ &&
                    (document.addEventListener('transitionend', this.onTransitionEnd_),
                    window.addEventListener('resize', this.refresh),
                    Lb
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
                Nb &&
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
                Ib.some(function (e) {
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
    Vb = function (e, t) {
        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var i = r[n];
            Object.defineProperty(e, i, { value: t[i], enumerable: !1, writable: !1, configurable: !0 });
        }
        return e;
    },
    Db = function (e) {
        return (e && e.ownerDocument && e.ownerDocument.defaultView) || Wb;
    },
    zb = Hb(0, 0, 0, 0);
function Fb(e) {
    return parseFloat(e) || 0;
}
function $b(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce(function (t, n) {
        return t + Fb(e['border-' + n + '-width']);
    }, 0);
}
function Qb(e) {
    var t = e.offsetWidth,
        n = e.offsetHeight;
    if (!t && !n) return zb;
    var r = Db(e).getComputedStyle(e),
        i = (function (e) {
            for (var t = {}, n = 0, r = ['top', 'right', 'bottom', 'left']; n < r.length; n++) {
                var i = r[n],
                    o = e['padding-' + i];
                t[i] = Fb(o);
            }
            return t;
        })(r),
        o = i.left + i.right,
        a = i.top + i.bottom,
        s = Fb(r.width),
        u = Fb(r.height);
    if (
        ('border-box' === r.boxSizing &&
            (Math.round(s + o) !== t && (s -= $b(r, 'left', 'right') + o),
            Math.round(u + a) !== n && (u -= $b(r, 'top', 'bottom') + a)),
        !(function (e) {
            return e === Db(e).document.documentElement;
        })(e))
    ) {
        var l = Math.round(s + o) - t,
            c = Math.round(u + a) - n;
        (1 !== Math.abs(l) && (s -= l), 1 !== Math.abs(c) && (u -= c));
    }
    return Hb(i.left, i.top, s, u);
}
var qb =
    'undefined' != typeof SVGGraphicsElement
        ? function (e) {
              return e instanceof Db(e).SVGGraphicsElement;
          }
        : function (e) {
              return e instanceof Db(e).SVGElement && 'function' == typeof e.getBBox;
          };
function Kb(e) {
    return Nb
        ? qb(e)
            ? (function (e) {
                  var t = e.getBBox();
                  return Hb(0, 0, t.width, t.height);
              })(e)
            : Qb(e)
        : zb;
}
function Hb(e, t, n, r) {
    return { x: e, y: t, width: n, height: r };
}
var Gb = (function () {
        function e(e) {
            ((this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = Hb(0, 0, 0, 0)),
                (this.target = e));
        }
        return (
            (e.prototype.isActive = function () {
                var e = Kb(this.target);
                return ((this.contentRect_ = e), e.width !== this.broadcastWidth || e.height !== this.broadcastHeight);
            }),
            (e.prototype.broadcastRect = function () {
                var e = this.contentRect_;
                return ((this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e);
            }),
            e
        );
    })(),
    Xb = (function () {
        return function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s,
                u,
                l =
                    ((r = (n = t).x),
                    (i = n.y),
                    (o = n.width),
                    (a = n.height),
                    (s = 'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
                    (u = Object.create(s.prototype)),
                    Vb(u, { x: r, y: i, width: o, height: a, top: i, right: r + o, bottom: a + i, left: r }),
                    u);
            Vb(this, { target: e, contentRect: l });
        };
    })(),
    Yb = (function () {
        function e(e, t, n) {
            if (((this.activeObservations_ = []), (this.observations_ = new Bb()), 'function' != typeof e))
                throw new TypeError('The callback provided as parameter 1 is not a function.');
            ((this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = n));
        }
        return (
            (e.prototype.observe = function (e) {
                if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                if ('undefined' != typeof Element && Element instanceof Object) {
                    if (!(e instanceof Db(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var t = this.observations_;
                    t.has(e) || (t.set(e, new Gb(e)), this.controller_.addObserver(this), this.controller_.refresh());
                }
            }),
            (e.prototype.unobserve = function (e) {
                if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                if ('undefined' != typeof Element && Element instanceof Object) {
                    if (!(e instanceof Db(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
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
                            return new Xb(e.target, e.broadcastRect());
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
    Jb = 'undefined' != typeof WeakMap ? new WeakMap() : new Bb(),
    Zb = (function () {
        return function e(t) {
            if (!(this instanceof e)) throw new TypeError('Cannot call a class as a function.');
            if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
            var n = Mb.getInstance(),
                r = new Yb(t, n, this);
            Jb.set(this, r);
        };
    })();
['observe', 'unobserve', 'disconnect'].forEach(function (e) {
    Zb.prototype[e] = function () {
        var t;
        return (t = Jb.get(this))[e].apply(t, arguments);
    };
});
var ey = void 0 !== Wb.ResizeObserver ? Wb.ResizeObserver : Zb;
const ty = [
        0, 128, 256, 384, 592, 688, 768, 880, 1024, 1280, 1328, 1424, 1536, 1792, 1872, 1920, 1984, 2048, 2112, 2144,
        2208, 2304, 2432, 2560, 2688, 2816, 2944, 3072, 3200, 3328, 3456, 3584, 3712, 3840, 4096, 4256, 4352, 4608,
        4992, 5024, 5120, 5760, 5792, 5888, 5920, 5952, 5984, 6016, 6144, 6320, 6400, 6480, 6528, 6624, 6656, 6688,
        6832, 6912, 7040, 7104, 7168, 7248, 7296, 7312, 7360, 7376, 7424, 7552, 7616, 7680, 7936, 8192, 8304, 8352,
        8400, 8448, 8528, 8592, 8704, 8960, 9216, 9280, 9312, 9472, 9600, 9632, 9728, 9984, 10176, 10224, 10240, 10496,
        10624, 10752, 11008, 11264, 11360, 11392, 11520, 11568, 11648, 11744, 11776, 11904, 12032, 12272, 12288, 12352,
        12448, 12544, 12592, 12688, 12704, 12736, 12784, 12800, 13056, 13312, 19904, 19968, 40960, 42128, 42192, 42240,
        42560, 42656, 42752, 42784, 43008, 43056, 43072, 43136, 43232, 43264, 43312, 43360, 43392, 43488, 43520, 43616,
        43648, 43744, 43776, 43824, 43888, 43968, 44032, 55216, 55296, 56192, 56320, 57344, 63744, 64256, 64336, 65024,
        65040, 65056, 65072, 65104, 65136, 65280, 65520, 65536, 65664, 65792, 65856, 65936, 66e3, 66176, 66208, 66272,
        66304, 66352, 66384, 66432, 66464, 66560, 66640, 66688, 66736, 66816, 66864, 67072, 67584, 67648, 67680, 67712,
        67808, 67840, 67872, 67968, 68e3, 68096, 68192, 68224, 68288, 68352, 68416, 68448, 68480, 68608, 68736, 68864,
        69216, 69248, 69376, 69424, 69552, 69600, 69632, 69760, 69840, 69888, 69968, 70016, 70112, 70144, 70272, 70320,
        70400, 70656, 70784, 71040, 71168, 71264, 71296, 71424, 71680, 71840, 71936, 72096, 72192, 72272, 72384, 72704,
        72816, 72960, 73056, 73440, 73648, 73664, 73728, 74752, 74880, 77824, 78896, 82944, 92160, 92736, 92880, 92928,
        93760, 93952, 94176, 94208, 100352, 101120, 101632, 110592, 110848, 110896, 110960, 113664, 113824, 118784,
        119040, 119296, 119520, 119552, 119648, 119808, 120832, 122880, 123136, 123584, 124928, 125184, 126064, 126208,
        126464, 126976, 127024, 127136, 127232, 127488, 127744, 128512, 128592, 128640, 128768, 128896, 129024, 129280,
        129536, 129648, 129792, 131072, 173824, 177984, 178208, 183984, 194560, 196608, 917504, 917760, 983040, 1048576,
    ],
    ny = {
        'BB2:108120': 1817,
        'BP2:OO': 790,
        'UB3:107': 714,
        'UP3:B': -1495,
        'TQ2:O108108108': -194,
        'TB3:108108108': 562,
        'UB4:108': -2271,
        'UB3:108': 169,
        'BQ1:O108108': -263,
        'BB1:108107': 307,
        'UB4:107': -1743,
        'TB4:108108108': 306,
        'UB3:109': -456,
        'TB3:108109109': 1577,
        'UP1:U': 251,
        'UW3:に': 1629,
        'BB2:109109': -2151,
        'UW3:は': 2029,
        'UW3:が': 2055,
        'UB3:120': -213,
        'UW4:こ': 1449,
        'BQ3:O108107': 187,
        'UB5:107': -851,
        'UW4:お': 3275,
        'UW3:と': 1059,
        'BQ2:O120120': -379,
        'BB3:108120': -298,
        'UW3:の': 1199,
        'UW4:て': -1379,
        'UW3:し': -827,
        'TB1:120120120': -242,
        'BB3:108108': 849,
        'TB2:108108107': -145,
        'BQ1:B120120': 365,
        'UW3:を': 2925,
        'BB3:120108': 255,
        'UW4:「': 3298,
        'BB2:162162': -1613,
        'UW4:あ': 1188,
        'UW4:、': -3540,
        'UW4:。': -1602,
        'UW3:、': 2324,
        'TB1:108120108': -243,
        'UW3:も': 1399,
        'UW4:の': -960,
        'BQ1:O120120': -120,
        'UW5:っ': 772,
        'UW3:っ': -1870,
        'TB2:108108108': -114,
        'UB2:108': 97,
        'TB1:108108108': -91,
        'TB3:108120108': -250,
        'UW5:で': -1030,
        'UQ2:O120': -110,
        'UB5:108': -66,
        'UW4:い': 380,
        'UB4:162': -257,
        'UQ3:B108': -1112,
        'UW4:そ': 1036,
        'BB2:107999': 3411,
        'UW5:う': 211,
        'BQ2:B108120': -221,
        'UW4:で': -924,
        'UW4:る': -1805,
        'TQ2:B108108108': -269,
        'UW5:な': -645,
        'BW3:もの': 2676,
        'BB2:120120': -420,
        'TQ2:B120108120': -336,
        'BB3:107999': -1305,
        'UW3:る': 756,
        'UW4:っ': -1536,
        'UP2:U': 113,
        'UB6:107': -76,
        'BB2:162999': 2668,
        'UB1:162': -208,
        'UW6:う': -420,
        'BQ2:O107108': -896,
        'UW5:き': 664,
        'UW4:に': -1407,
        'UW5:し': -357,
        'UP1:B': -101,
        'BB1:108108': -77,
        'UQ3:B120': 626,
        'BW2:とい': 691,
        'UW5:に': -569,
        'BB2:120999': 2291,
        'UW4:は': -608,
        'TQ1:O108108108': -281,
        'UB1:108': 192,
        'UQ1:O108': -86,
        'UW5:が': -626,
        'UW4:ら': -1582,
        'TQ2:O120108108': -128,
        'UQ3:O162': 222,
        'UW3:れ': -759,
        'TB3:120120120': -151,
        'BB3:162999': -1821,
        'BW3:とこ': 1286,
        'UW5:は': -560,
        'UW5:ん': 676,
        'UW4:れ': -1489,
        'BB1:162162': -251,
        'UW3:う': 464,
        'UW5:す': -771,
        'UW3:く': 821,
        'UW4:・': -2383,
        'UW4:が': -678,
        'UW6:に': 92,
        'TQ1:O108120108': -410,
        'UP2:O': -53,
        'UW5:く': 411,
        'UW2:の': 218,
        'UW3:ま': -959,
        'UW3:，': 1843,
        'UW3:ら': 324,
        'UP3:O': 121,
        'TB4:120108108': 90,
        'UB4:120': -421,
        'BB2:108108': -92,
        'UW3:で': 756,
        'UW3:た': 484,
        'BW3:とい': -1444,
        'UW3:り': -223,
        'UW4:ほ': 1294,
        'TB1:120120108': 125,
        'UW6:。': -99,
        'BW3:いう': 861,
        'UW3:き': -536,
        'BW3:いい': 767,
        'UW4:や': 650,
        'UW6:た': -284,
        'UW4:だ': -569,
        'BW1:から': 816,
        'TB2:109109109': -543,
        'UW5:も': -405,
        'UW3:今': 1340,
        'UW5:あ': -618,
        'UW3:］': 825,
        'UW2:一': 760,
        'BW1:いう': 298,
        'UW5:を': -622,
        'UW5:・': -668,
        'TB1:120108120': -97,
        'UW5:め': 308,
        'UW4:，': -2523,
        'BW2:であ': -1719,
        'BW3:ちょ': 1343,
        'UW1:と': 119,
        'UB2:120': 38,
        'TB3:108120120': 322,
        'UW4:ど': 522,
        'BQ3:O162162': -248,
        'UW1:そ': 204,
        'BW3:して': 220,
        'BW2:てい': -522,
        'UW4:つ': 682,
        'BB1:162120': 397,
        'UW2:と': -94,
        'UW2:で': -227,
        'UW5:と': -476,
        'UW4:ん': -649,
        'UW4:り': -690,
        'BB2:109999': 1320,
        'UW3:だ': -257,
        'UW4:出': -72,
        'UW4:を': -1092,
        'UW2:っ': 55,
        'BW2:ない': -1335,
        'BW3:とき': 1220,
        'TQ3:O162162162': -324,
        'UB4:072': -103,
        'BB2:108999': 1504,
        'UW3:ち': -780,
        'UW4:ご': 1047,
        'UW5:つ': 584,
        'UW3:間': 905,
        'TB3:108162162': 317,
        'UW5:れ': 265,
        'UW4:！': -1144,
        'UW5:来': -31,
        'UW6:っ': 222,
        'BB2:108072': -977,
        'TB4:108108120': 84,
        'UW3:ん': -302,
        'UW2:て': -213,
        'BW3:よう': -892,
        'UW4:わ': 430,
        'TB2:108120108': -413,
        'UW3:人': 945,
        'BW3:ため': 1073,
        'BW3:出来': -1035,
        'UW2:ん': 223,
        'UW6:の': -137,
        'BQ4:O108108': -136,
        'UW3:て': 445,
        'UB4:109': -440,
        'UW5:の': -519,
        'BW1:とが': -1211,
        'UW1:な': -300,
        'TB1:120108108': -188,
        'UW4:す': 366,
        'TW2:気に入': -1623,
        'TW3:ている': -761,
        'TQ3:O107120120': 60,
        'BW1:では': -648,
        'UW2:る': -273,
        'UW3:か': 439,
        'UW4:１': 304,
        'UW1:に': -146,
        'UW6:り': 273,
        'BW2:てお': -1727,
        'TQ2:O108120108': -160,
        'UW5:こ': 104,
        'TQ2:O109109109': -279,
        'BQ4:U120120': -303,
        'UW1:で': -124,
        'BB2:107162': -766,
        'UW3:い': 166,
        'BW2:とし': 540,
        'UW2:ま': 340,
        'BB2:108162': 338,
        'UW4:け': -819,
        'TB4:109109109': 423,
        'TB4:162162162': 297,
        'UB5:162': -311,
        'UW1:い': -104,
        'UW2:毎': 867,
        'UW2:そ': -298,
        'TQ1:B108120120': -172,
        'BW1:ない': 238,
        'UW4:前': -559,
        'UW4:］': -1127,
        'TW4:くらい': 835,
        'UW3:ば': 464,
        'TW1:という': 264,
        'UW4:ー': -655,
        'UW3:中': 764,
        'UW4:…': -669,
        'UW4:ひ': 1182,
        'UW3:・': 567,
        'UW3:「': -514,
        'BW2:です': -1109,
        'BW3:なっ': -546,
        'BQ2:O108108': -40,
        'UW6:を': 84,
        'UB6:109': -136,
        'UW5:だ': -217,
        'BW3:から': -702,
        'UW3:日': 398,
        'BW3:その': 1208,
        'BB2:120162': 170,
        'UW3:け': -354,
        'BW3:こと': 522,
        'TW3:と言っ': -1204,
        'UB5:120': 60,
        'UW5:え': 181,
        'TB1:108107108': -673,
        'BW3:かけ': 1145,
        'UW5:イ': 666,
        'UB4:087': -877,
        'UW3:後': 1076,
        'BW1:とも': -672,
        'UW6:て': -186,
        'BB2:087999': 836,
        'UQ3:O108': -21,
        'BQ2:O108120': 129,
        'BB3:120999': -299,
        'UW4:２': 433,
        'UB3:072': 236,
        'UW2:よ': 156,
        'UW5:ー': 41,
        'UW5:べ': 609,
        'UW5:て': 119,
        'UW1:て': 51,
        'UW4:『': 979,
        'TW4:ところ': 607,
        'UW2:結': 700,
        'UW4:（': 483,
        'TQ4:O120120120': 208,
        'TW2:ではな': -505,
        'TQ4:O108107120': 204,
        'UW6:０': 392,
        'UW5:そ': -283,
        'TQ2:O108107108': -212,
        'BW1:こと': -434,
        'UW1:の': -65,
        'TQ1:O108108120': 87,
        'BW1:かも': -928,
        'UW4:よ': 310,
        'BQ1:O107120': 180,
        'UW5:い': 51,
        'BW2:には': -422,
        'TW4:ことが': -409,
        'UW3:み': -339,
        'TB4:162162999': -491,
        'UW3:こ': -194,
        'TB4:108120108': -129,
        'UW3:さ': -328,
        'UW6:ん': 142,
        'UW3:お': -424,
        'BW3:すぐ': 660,
        'TQ3:B108108120': 158,
        'BW3:この': 830,
        'TB3:109108108': 130,
        'UW1:あ': 111,
        'BW1:んな': 174,
        'TB4:108109108': 595,
        'UW2:も': -199,
        'BW3:わか': 536,
        'UW4:思': 445,
        'BB1:109120': -359,
        'UW4:電': -301,
        'UW1:お': -51,
        'TB4:120108120': 61,
        'TQ4:O120108120': -102,
        'UW4:笑': -506,
        'UW3:な': 215,
        'UW4:間': -430,
        'BW3:でき': 393,
        'UW4:ま': 136,
        'TW4:かなり': 680,
        'TQ1:B108120108': 75,
        'BQ2:B108108': -30,
        'BW3:ない': 95,
        'UW3:べ': -452,
        'TB3:109120108': 169,
        'BW2:と同': -602,
        'BW1:てい': -357,
        'UW6:、': 31,
        'UW2:最': 406,
        'UW3:や': 285,
        'TW3:、ある': -784,
        'UW4:か': -93,
        'BW3:そし': -568,
        'UW5:年': 428,
        'BW1:れて': -342,
        'UW3:昔': 637,
        'UW2:し': 33,
        'UW3:…': 298,
        'UW6:と': -69,
        'UW5:々': 556,
        'BW1:より': 526,
        'UW1:、': 17,
        'BW3:した': 228,
        'BW1:った': 105,
        'UW2:さ': 238,
        'TW3:という': 248,
        'UW2:少': 449,
        'UW4:も': -174,
        'TQ2:B120120108': -76,
        'UW2:き': 89,
        'UW1:や': -201,
        'TW3:である': -318,
        'BW1:い、': -518,
        'UW4:ろ': -287,
        'UW2:全': 435,
        'BW2:くな': -404,
        'BW2:はな': -154,
        'BW1:かし': 627,
        'UW6:あ': -90,
        'UW6:カ': 303,
        'UW4:使': 204,
        'UW5:ち': 161,
        'UW1:っ': 74,
        'UW3:ど': 134,
        'TB3:109120120': -148,
        'UW3:よ': -145,
        'BW2:でき': -373,
        'UW3:電': -286,
        'BW2:いも': 373,
        'BW1:しか': 228,
        'BW1:たら': 328,
        'BW3:かっ': -386,
        'BQ4:O120109': -112,
        'UW4:込': -315,
        'UW2:お': -184,
        'UW3:ー': 99,
        'UW2:う': -44,
        'BW3:どう': 258,
        'UW4:な': 54,
        'UW5:ご': 135,
        'BW2:でし': -337,
        'UW3:光': -182,
        'UW4:み': 95,
        'UW2:ー': -30,
        'UW6:だ': -56,
        'TB3:120162162': 69,
        'UW2:た': -83,
        'TQ1:O120120120': -14,
        'UW1:す': 71,
        'TW3:てしま': -305,
        'UW3:。': 140,
        'UW3:分': 178,
        'BW1:とか': 206,
        'TQ1:U120120108': 43,
        'UW4:３': 82,
        'UW2:人': 27,
        'UW5:料': 317,
        'BW1:んで': -191,
        'UW4:？': -274,
        'UW5:た': -80,
        'TQ3:O120108108': -53,
        'UQ2:O108': 14,
        'UW5:せ': -122,
        'BW1:しい': 135,
        'UW4:物': -245,
        'UW2:思': -15,
        'UW5:ず': 179,
        'UW6:思': -109,
        'BW1:その': -159,
        'BW1:思い': -244,
        'UW4:．': -311,
        'UW6:や': 68,
        'BQ4:B120108': -105,
        'BW2:のよ': -162,
        'UW6:わ': 80,
        'BW1:るの': -148,
        'BW3:よく': 134,
        'UW2:や': -67,
        'UW2:関': 174,
        'UQ1:U109': 39,
        'TW4:ない。': 39,
        'UW4:く': -106,
        'UW6:さ': 40,
        'TW4:ことに': -160,
        'UW4:合': -148,
        'TB4:162120108': 14,
        'BW3:とて': 173,
        'UW6:れ': -14,
        'TB4:108109109': -67,
        'BB3:120162': -27,
        'BW3:すご': 173,
        'UW1:「': -53,
        'BW1:この': -91,
        'UW6:は': -26,
        'UW3:わ': -106,
        'UW4:５': 117,
        'TW4:こと。': 118,
        'UW3:真': 185,
        'UW2:く': -39,
        'BW1:うに': -90,
        'UW6:め': 118,
        'UW4:通': -132,
        'UW1:も': 13,
        'TW3:ること': -38,
        'BW2:たい': -155,
        'BW1:少し': 106,
        'TB4:120120108': 14,
        'UW3:変': 91,
        'UW2:が': 26,
        'UW5:よ': -26,
        'UW3:度': 90,
        'TB3:108108120': 26,
        'UW5:さ': -26,
        'BW3:そう': -112,
        'TW1:ことも': -13,
        'UW5:け': -39,
        'TQ3:O108162120': 52,
        'BW1:の間': 103,
        'BB2:072999': 78,
        'UW6:え': -39,
        'UW3:ご': -77,
        'BW2:りし': 52,
        'BW2:帯電': -52,
        'TW3:らない': -76,
        'TB2:108108162': 26,
        'UW1:社': 51,
        'UW4:と': -26,
        'BW3:さん': -50,
        'UW6:し': 13,
        'UW6:く': 13,
        'TQ3:O120120107': -25,
        'TW4:ことも': -39,
        'BW3:かか': 52,
        'UW5:る': 13,
        'UQ2:O109': -13,
        'BW2:にも': -25,
        'UW6:る': -13,
        'BW2:、と': -13,
        'UW3:ゃ': 13,
        'BW1:とは': -13,
        'UW1:く': 13,
        'UW4:私': 12,
    },
    ry = console.assert,
    iy = 1,
    oy = 3,
    ay = 0,
    sy = 1,
    uy = 2,
    ly = 3,
    cy = {
        AREA: uy,
        BASE: uy,
        BASEFONT: uy,
        DATALIST: uy,
        HEAD: uy,
        LINK: uy,
        META: uy,
        NOEMBED: uy,
        NOFRAMES: uy,
        PARAM: uy,
        RP: uy,
        SCRIPT: uy,
        STYLE: uy,
        TEMPLATE: uy,
        TITLE: uy,
        NOSCRIPT: uy,
        HR: ly,
        LISTING: uy,
        PLAINTEXT: uy,
        PRE: uy,
        XMP: uy,
        BR: ly,
        RT: uy,
        INPUT: uy,
        SELECT: uy,
        BUTTON: uy,
        TEXTAREA: uy,
        ABBR: uy,
        CODE: uy,
        IFRAME: uy,
        TIME: uy,
        VAR: uy,
    },
    fy = new Set([
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
    ]);
class dy {
    constructor(e) {
        ((this.textNodes = []), (this.element = e));
    }
    hasText() {
        return this.textNodes.length > 0;
    }
}
class hy {
    constructor(e, t) {
        ((this.separator = '​'),
            (this.threshold = gy),
            (this.parser_ = e),
            void 0 !== t &&
                (void 0 !== t.className && (this.className = t.className),
                void 0 !== t.separator && (this.separator = t.separator),
                void 0 !== t.threshold && (this.threshold = t.threshold)));
    }
    applyToElement(e) {
        for (const t of this.getBlocks(e)) (ry(t.hasText()), this.applyToParagraph(t));
    }
    *getBlocks(e, t) {
        if ((ry(e.nodeType === iy), this.className && e.classList.contains(this.className))) return;
        const n = (function (e) {
            const t = e.nodeName,
                n = cy[t];
            if (void 0 !== n) return n;
            if ('function' == typeof getComputedStyle) {
                const t = getComputedStyle(e);
                switch (t.whiteSpace) {
                    case 'nowrap':
                    case 'pre':
                        return uy;
                }
                const n = t.display;
                if (n) return 'inline' === n ? ay : sy;
            }
            return fy.has(t) ? sy : ay;
        })(e);
        if (n === uy) return;
        if (n === ly) return (t && t.hasText() && (yield t, (t.textNodes = [])), void ry(!e.firstChild));
        ry(n === sy || n === ay);
        const r = !t || n === sy,
            i = r ? new dy(e) : t;
        ry(i);
        for (const o of e.childNodes)
            switch (o.nodeType) {
                case iy:
                    for (const e of this.getBlocks(o, i)) yield e;
                    break;
                case oy:
                    i.textNodes.push(o);
            }
        r && i.hasText() && (yield i);
    }
    applyToParagraph(e) {
        const t = e.textNodes;
        ry(t.length > 0);
        const n = t.map((e) => e.nodeValue).join('');
        if (/^\s*$/.test(n)) return;
        const r = this.parser_.parse(n, this.threshold);
        if ((ry(r.length > 0), ry(r.reduce((e, t) => e + t.length, 0) === n.length), r.length <= 1)) return;
        const i = [];
        let o = 0;
        for (const a of r) (ry(a.length > 0), (o += a.length), i.push(o));
        (ry(i[0] > 0),
            ry(i[i.length - 1] === n.length),
            ++i[i.length - 1],
            ry(i.length > 1),
            this.splitTextNodes(t, i),
            this.applyBlockStyle(e.element));
    }
    splitTextNodes(e, t) {
        ry(t.length > 0);
        const n = e.reduce((e, t) => e + (t.nodeValue ? t.nodeValue.length : 0), 0);
        ry(t[t.length - 1] > n);
        let r = 0,
            i = t[0];
        ry(i > 0);
        let o = 0;
        for (const a of e) {
            const e = a.nodeValue;
            if (!e) continue;
            const n = o + e.length;
            if (i >= n) {
                o = n;
                continue;
            }
            const s = [];
            let u = 0;
            for (; i < n; ) {
                const n = i - o;
                (ry(n >= u), s.push(e.substring(u, n)), (u = n), ++r, ry(t[r] > i), (i = t[r]));
            }
            (ry(s.length > 0), u < e.length && s.push(e.substring(u)), this.splitTextNode(a, s), (o = n));
        }
        (ry(o === n), ry(r < t.length), ry(t[r] >= n));
    }
    splitTextNode(e, t) {
        (ry(t.length > 1), ry(e.nodeValue === t.join('')));
        const n = this.separator;
        if ('string' == typeof n) return void (e.nodeValue = t.join(n));
        const r = e.ownerDocument;
        let i = [];
        for (const o of t) (o && i.push(r.createTextNode(o)), i.push(null));
        (i.pop(), (i = i.map((e) => e || n.cloneNode(!0))), e.replaceWith(...i));
    }
    applyBlockStyle(e) {
        if (this.className) return void e.classList.add(this.className);
        const t = e.style;
        ((t.wordBreak = 'keep-all'), (t.overflowWrap = 'break-word'));
    }
    static defineClassAs(e, t) {
        const n = e.createElement('style');
        ((n.textContent = `.${t} { word-break: keep-all; overflow-wrap: break-word; }`), e.head.appendChild(n));
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
 */ const py = (e, t) => {
        const n = Math.floor(e.length / 2);
        return t === e[n]
            ? n + 1
            : t < e[n]
              ? 1 === e.length
                  ? 0
                  : py(e.slice(0, n), t)
              : 1 === e.length
                ? 1
                : n + py(e.slice(n), t);
    },
    vy = '▔',
    gy = 1e3,
    my = 3;
class by {
    constructor(e) {
        this.model = e;
    }
    static getUnicodeBlockFeature(e) {
        if (!e || e === vy) return vy;
        const t = e.codePointAt(0);
        if (void 0 === t) return vy;
        return `${py(ty, t)}`.padStart(3, '0');
    }
    static getFeature(e, t, n, r, i, o, a, s, u) {
        const l = by.getUnicodeBlockFeature(e),
            c = by.getUnicodeBlockFeature(t),
            f = by.getUnicodeBlockFeature(n),
            d = by.getUnicodeBlockFeature(r),
            h = by.getUnicodeBlockFeature(i),
            p = by.getUnicodeBlockFeature(o),
            v = {
                UP1: a,
                UP2: s,
                UP3: u,
                BP1: a + s,
                BP2: s + u,
                UW1: e,
                UW2: t,
                UW3: n,
                UW4: r,
                UW5: i,
                UW6: o,
                BW1: t + n,
                BW2: n + r,
                BW3: r + i,
                TW1: e + t + n,
                TW2: t + n + r,
                TW3: n + r + i,
                TW4: r + i + o,
                UB1: l,
                UB2: c,
                UB3: f,
                UB4: d,
                UB5: h,
                UB6: p,
                BB1: c + f,
                BB2: f + d,
                BB3: d + h,
                TB1: l + c + f,
                TB2: c + f + d,
                TB3: f + d + h,
                TB4: d + h + p,
                UQ1: a + l,
                UQ2: s + c,
                UQ3: u + f,
                BQ1: s + c + f,
                BQ2: s + f + d,
                BQ3: u + c + f,
                BQ4: u + f + d,
                TQ1: s + l + c + f,
                TQ2: s + c + f + d,
                TQ3: u + l + c + f,
                TQ4: u + c + f + d,
            };
        return Object.entries(v)
            .filter((e) => !e[1].includes(vy))
            .map(([e, t]) => `${e}:${t}`);
    }
    static hasChildTextNode(e) {
        for (const t of e.childNodes) if (t.nodeType === my) return !0;
        return !1;
    }
    parse(e, t = gy) {
        if ('' === e) return [];
        let n = 'U',
            r = 'U',
            i = 'U';
        const o = [e[0]];
        for (let a = 1; a < e.length; a++) {
            const s = by
                    .getFeature(e[a - 3] || vy, e[a - 2] || vy, e[a - 1], e[a], e[a + 1] || vy, e[a + 2] || vy, n, r, i)
                    .map((e) => this.model.get(e) || 0)
                    .reduce((e, t) => e + t),
                u = s > 0 ? 'B' : 'O';
            (s > t && o.push(''), (o[o.length - 1] += e[a]), (n = r), (r = i), (i = u));
        }
        return o;
    }
    applyElement(e, t = gy) {
        new hy(this, { separator: e.ownerDocument.createElement('wbr'), threshold: t }).applyToElement(e);
    }
    translateHTMLString(e, t = gy) {
        if ('' === e) return e;
        const n = ((e) => new DOMParser().parseFromString(e, 'text/html'))(e);
        if (by.hasChildTextNode(n.body)) {
            const e = n.createElement('span');
            (e.append(...n.body.childNodes), n.body.append(e));
        }
        return (this.applyElement(n.body.childNodes[0], t), n.body.innerHTML);
    }
}
const yy = () => new by(new Map(Object.entries(ny)));
var _y = Ry(),
    wy = (e) => Uy(e, _y),
    Sy = Ry();
wy.write = (e) => Uy(e, Sy);
var Oy = Ry();
wy.onStart = (e) => Uy(e, Oy);
var ky = Ry();
wy.onFrame = (e) => Uy(e, ky);
var xy = Ry();
wy.onFinish = (e) => Uy(e, xy);
var Py = [];
wy.setTimeout = (e, t) => {
    const n = wy.now() + t,
        r = () => {
            const e = Py.findIndex((e) => e.cancel == r);
            (~e && Py.splice(e, 1), (Cy -= ~e ? 1 : 0));
        },
        i = { time: n, handler: e, cancel: r };
    return (Py.splice(Ey(n), 0, i), (Cy += 1), By(), i);
};
var Ey = (e) => ~(~Py.findIndex((t) => t.time > e) || ~Py.length);
((wy.cancel = (e) => {
    (Oy.delete(e), ky.delete(e), xy.delete(e), _y.delete(e), Sy.delete(e));
}),
    (wy.sync = (e) => {
        ((jy = !0), wy.batchedUpdates(e), (jy = !1));
    }),
    (wy.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            ((t = e), wy.onStart(n));
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                (Oy.delete(n), (t = null));
            }),
            r
        );
    }));
var Ay = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
((wy.use = (e) => (Ay = e)),
    (wy.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (wy.batchedUpdates = (e) => e()),
    (wy.catch = console.error),
    (wy.frameLoop = 'always'),
    (wy.advance = () => {
        'demand' !== wy.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : Wy();
    }));
var Ty = -1,
    Cy = 0,
    jy = !1;
function Uy(e, t) {
    jy ? (t.delete(e), e(0)) : (t.add(e), By());
}
function By() {
    Ty < 0 && ((Ty = 0), 'demand' !== wy.frameLoop && Ay(Ny));
}
function Ny() {
    ~Ty && (Ay(Ny), wy.batchedUpdates(Wy));
}
function Wy() {
    const e = Ty;
    Ty = wy.now();
    const t = Ey(Ty);
    (t && (Iy(Py.splice(0, t), (e) => e.handler()), (Cy -= t)),
        Cy ? (Oy.flush(), _y.flush(e ? Math.min(64, Ty - e) : 16.667), ky.flush(), Sy.flush(), xy.flush()) : (Ty = -1));
}
function Ry() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            ((Cy += t != e || e.has(n) ? 0 : 1), e.add(n));
        },
        delete: (n) => ((Cy -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (Cy -= t.size), Iy(t, (t) => t(n) && e.add(t)), (Cy += e.size), (t = e));
        },
    };
}
function Iy(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            wy.catch(n);
        }
    });
}
var Ly = Object.defineProperty,
    My = {};
function Vy() {}
((e, t) => {
    for (var n in t) Ly(e, n, { get: t[n], enumerable: !0 });
})(My, {
    assign: () => e_,
    colors: () => Yy,
    createStringInterpolator: () => Ky,
    skipAnimation: () => Jy,
    to: () => Hy,
    willAdvance: () => Zy,
});
var Dy = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
function zy(e, t) {
    if (Dy.arr(e)) {
        if (!Dy.arr(t) || e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
    }
    return e === t;
}
var Fy = (e, t) => e.forEach(t);
function $y(e, t, n) {
    if (Dy.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Qy = (e) => (Dy.und(e) ? [] : Dy.arr(e) ? e : [e]);
function qy(e, t) {
    if (e.size) {
        const n = Array.from(e);
        (e.clear(), Fy(n, t));
    }
}
var Ky,
    Hy,
    Gy = (e, ...t) => qy(e, (e) => e(...t)),
    Xy = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    Yy = null,
    Jy = !1,
    Zy = Vy,
    e_ = (e) => {
        (e.to && (Hy = e.to),
            e.now && (wy.now = e.now),
            void 0 !== e.colors && (Yy = e.colors),
            null != e.skipAnimation && (Jy = e.skipAnimation),
            e.createStringInterpolator && (Ky = e.createStringInterpolator),
            e.requestAnimationFrame && wy.use(e.requestAnimationFrame),
            e.batchedUpdates && (wy.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (Zy = e.willAdvance),
            e.frameLoop && (wy.frameLoop = e.frameLoop));
    },
    t_ = new Set(),
    n_ = [],
    r_ = [],
    i_ = 0,
    o_ = {
        get idle() {
            return !t_.size && !n_.length;
        },
        start(e) {
            i_ > e.priority ? (t_.add(e), wy.onStart(a_)) : (s_(e), wy(l_));
        },
        advance: l_,
        sort(e) {
            if (i_) wy.onFrame(() => o_.sort(e));
            else {
                const t = n_.indexOf(e);
                ~t && (n_.splice(t, 1), u_(e));
            }
        },
        clear() {
            ((n_ = []), t_.clear());
        },
    };
function a_() {
    (t_.forEach(s_), t_.clear(), wy(l_));
}
function s_(e) {
    n_.includes(e) || u_(e);
}
function u_(e) {
    n_.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(n_, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function l_(e) {
    const t = r_;
    for (let n = 0; n < n_.length; n++) {
        const r = n_[n];
        ((i_ = r.priority), r.idle || (Zy(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((i_ = 0), ((r_ = n_).length = 0), (n_ = t).length > 0);
}
var c_ = '[-+]?\\d*\\.?\\d+',
    f_ = c_ + '%';
function d_(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var h_ = new RegExp('rgb' + d_(c_, c_, c_)),
    p_ = new RegExp('rgba' + d_(c_, c_, c_, c_)),
    v_ = new RegExp('hsl' + d_(c_, f_, f_)),
    g_ = new RegExp('hsla' + d_(c_, f_, f_, c_)),
    m_ = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    b_ = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    y_ = /^#([0-9a-fA-F]{6})$/,
    __ = /^#([0-9a-fA-F]{8})$/;
function w_(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function S_(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        i = 2 * n - r,
        o = w_(i, r, e + 1 / 3),
        a = w_(i, r, e),
        s = w_(i, r, e - 1 / 3);
    return (Math.round(255 * o) << 24) | (Math.round(255 * a) << 16) | (Math.round(255 * s) << 8);
}
function O_(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function k_(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function x_(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function P_(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function E_(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = y_.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : Yy && void 0 !== Yy[e]
                ? Yy[e]
                : (t = h_.exec(e))
                  ? ((O_(t[1]) << 24) | (O_(t[2]) << 16) | (O_(t[3]) << 8) | 255) >>> 0
                  : (t = p_.exec(e))
                    ? ((O_(t[1]) << 24) | (O_(t[2]) << 16) | (O_(t[3]) << 8) | x_(t[4])) >>> 0
                    : (t = m_.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = __.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = b_.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = v_.exec(e))
                            ? (255 | S_(k_(t[1]), P_(t[2]), P_(t[3]))) >>> 0
                            : (t = g_.exec(e))
                              ? (S_(k_(t[1]), P_(t[2]), P_(t[3])) | x_(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var A_ = (e, t, n) => {
    if (Dy.fun(e)) return e;
    if (Dy.arr(e)) return A_({ range: e, output: t, extrapolate: n });
    if (Dy.str(e.output[0])) return Ky(e);
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
var T_ = 1.70158,
    C_ = 1.525 * T_,
    j_ = T_ + 1,
    U_ = (2 * Math.PI) / 3,
    B_ = (2 * Math.PI) / 4.5,
    N_ = (e) => {
        const t = 7.5625,
            n = 2.75;
        return e < 1 / n
            ? t * e * e
            : e < 2 / n
              ? t * (e -= 1.5 / n) * e + 0.75
              : e < 2.5 / n
                ? t * (e -= 2.25 / n) * e + 0.9375
                : t * (e -= 2.625 / n) * e + 0.984375;
    },
    W_ = {
        linear: (e) => e,
        easeInQuad: (e) => e * e,
        easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
        easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2),
        easeInCubic: (e) => e * e * e,
        easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
        easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
        easeInQuart: (e) => e * e * e * e,
        easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
        easeInOutQuart: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2),
        easeInQuint: (e) => e * e * e * e * e,
        easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
        easeInOutQuint: (e) => (e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2),
        easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
        easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
        easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
        easeInExpo: (e) => (0 === e ? 0 : Math.pow(2, 10 * e - 10)),
        easeOutExpo: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
        easeInOutExpo: (e) =>
            0 === e ? 0 : 1 === e ? 1 : e < 0.5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
        easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
        easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
        easeInOutCirc: (e) =>
            e < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
        easeInBack: (e) => j_ * e * e * e - T_ * e * e,
        easeOutBack: (e) => 1 + j_ * Math.pow(e - 1, 3) + T_ * Math.pow(e - 1, 2),
        easeInOutBack: (e) =>
            e < 0.5
                ? (Math.pow(2 * e, 2) * (7.189819 * e - C_)) / 2
                : (Math.pow(2 * e - 2, 2) * ((C_ + 1) * (2 * e - 2) + C_) + 2) / 2,
        easeInElastic: (e) => (0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * U_)),
        easeOutElastic: (e) => (0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - 0.75) * U_) + 1),
        easeInOutElastic: (e) =>
            0 === e
                ? 0
                : 1 === e
                  ? 1
                  : e < 0.5
                    ? (-Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * B_)) / 2
                    : (Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * B_)) / 2 + 1,
        easeInBounce: (e) => 1 - N_(1 - e),
        easeOutBounce: N_,
        easeInOutBounce: (e) => (e < 0.5 ? (1 - N_(1 - 2 * e)) / 2 : (1 + N_(2 * e - 1)) / 2),
        steps:
            (e, t = 'end') =>
            (n) => {
                const r = (n = 'end' === t ? Math.min(n, 0.999) : Math.max(n, 0.001)) * e,
                    i = 'end' === t ? Math.floor(r) : Math.ceil(r);
                return ((o = 0), (a = 1), (s = i / e), Math.min(Math.max(s, o), a));
                var o, a, s;
            },
    },
    R_ = Symbol.for('FluidValue.get'),
    I_ = Symbol.for('FluidValue.observers'),
    L_ = (e) => Boolean(e && e[R_]),
    M_ = (e) => (e && e[R_] ? e[R_]() : e),
    V_ = (e) => e[I_] || null;
function D_(e, t) {
    const n = e[I_];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
var z_ = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            F_(this, e);
        }
    },
    F_ = (e, t) => K_(e, R_, t);
function $_(e, t) {
    if (e[R_]) {
        let n = e[I_];
        (n || K_(e, I_, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function Q_(e, t) {
    const n = e[I_];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[I_] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
var q_,
    K_ = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    H_ = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    G_ = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    X_ = new RegExp(`(${H_.source})(%|[a-z]+)`, 'i'),
    Y_ = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    J_ = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    Z_ = (e) => {
        const [t, n] = ew(e);
        if (!t || Xy()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && J_.test(n) ? Z_(n) : n || e;
    },
    ew = (e) => {
        const t = J_.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    tw = (e, t, n, r, i) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
    nw = (e) => {
        q_ || (q_ = Yy ? new RegExp(`(${Object.keys(Yy).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => M_(e).replace(J_, Z_).replace(G_, E_).replace(q_, E_)),
            n = t.map((e) => e.match(H_).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => A_({ ...e, output: t }));
        return (e) => {
            var n;
            const i = !X_.test(t[0]) && (null == (n = t.find((e) => X_.test(e))) ? void 0 : n.replace(H_, ''));
            let o = 0;
            return t[0].replace(H_, () => `${r[o++](e)}${i || ''}`).replace(Y_, tw);
        };
    },
    rw = 'react-spring: ',
    iw = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${rw}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    ow = iw(console.warn);
var aw = iw(console.warn);
function sw(e) {
    return Dy.str(e) && ('#' == e[0] || /\d/.test(e) || (!Xy() && J_.test(e)) || e in (Yy || {}));
}
var uw = Xy() ? M.useEffect : M.useLayoutEffect,
    lw = () => {
        const e = M.useRef(!1);
        return (
            uw(
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
function cw() {
    const e = M.useState()[1],
        t = lw();
    return () => {
        t.current && e(Math.random());
    };
}
var fw = (e) => M.useEffect(e, dw),
    dw = [];
function hw(e) {
    const t = M.useRef();
    return (
        M.useEffect(() => {
            t.current = e;
        }),
        t.current
    );
}
var pw = Symbol.for('Animated:node'),
    vw = (e) => e && e[pw],
    gw = (e, t) => {
        return ((n = e), (r = pw), (i = t), Object.defineProperty(n, r, { value: i, writable: !0, configurable: !0 }));
        var n, r, i;
    },
    mw = (e) => e && e[pw] && e[pw].getPayload(),
    bw = class {
        constructor() {
            gw(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    yw = class extends bw {
        constructor(e) {
            (super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                Dy.num(this._value) && (this.lastPosition = this._value));
        }
        static create(e) {
            return new yw(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                Dy.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            ((this.done = !1),
                Dy.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null)));
        }
    },
    _w = class extends yw {
        constructor(e) {
            (super(0), (this._string = null), (this._toString = A_({ output: [e, e] })));
        }
        static create(e) {
            return new _w(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (Dy.str(e)) {
                if (e == this._string) return !1;
                ((this._string = e), (this._value = 1));
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null;
            }
            return !0;
        }
        reset(e) {
            (e && (this._toString = A_({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
        }
    },
    ww = { dependencies: null },
    Sw = class extends bw {
        constructor(e) {
            (super(), (this.source = e), this.setValue(e));
        }
        getValue(e) {
            const t = {};
            return (
                $y(this.source, (n, r) => {
                    var i;
                    (i = n) && i[pw] === i ? (t[r] = n.getValue(e)) : L_(n) ? (t[r] = M_(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            ((this.source = e), (this.payload = this._makePayload(e)));
        }
        reset() {
            this.payload && Fy(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return ($y(e, this._addToPayload, t), Array.from(t));
            }
        }
        _addToPayload(e) {
            ww.dependencies && L_(e) && ww.dependencies.add(e);
            const t = mw(e);
            t && Fy(t, (e) => this.add(e));
        }
    },
    Ow = class extends Sw {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new Ow(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map(kw)), !0);
        }
    };
function kw(e) {
    return (sw(e) ? _w : yw).create(e);
}
function xw(e) {
    const t = vw(e);
    return t ? t.constructor : Dy.arr(e) ? Ow : sw(e) ? _w : yw;
}
var Pw = (e, t) => {
        const n = !Dy.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return M.forwardRef((r, i) => {
            const o = M.useRef(null),
                a =
                    n &&
                    M.useCallback(
                        (e) => {
                            o.current = (function (e, t) {
                                e && (Dy.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(i, e);
                        },
                        [i],
                    ),
                [s, u] = (function (e, t) {
                    const n = new Set();
                    ((ww.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                    return ((e = new Sw(e)), (ww.dependencies = null), [e, n]);
                })(r, t),
                l = cw(),
                c = () => {
                    const e = o.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && l();
                },
                f = new Ew(c, u),
                d = M.useRef();
            (uw(
                () => (
                    (d.current = f),
                    Fy(u, (e) => $_(e, f)),
                    () => {
                        d.current && (Fy(d.current.deps, (e) => Q_(e, d.current)), wy.cancel(d.current.update));
                    }
                ),
            ),
                M.useEffect(c, []),
                fw(() => () => {
                    const e = d.current;
                    Fy(e.deps, (t) => Q_(t, e));
                }));
            const h = t.getComponentProps(s.getValue());
            return M.createElement(e, { ...h, ref: a });
        });
    },
    Ew = class {
        constructor(e, t) {
            ((this.update = e), (this.deps = t));
        }
        eventObserved(e) {
            'change' == e.type && wy.write(this.update);
        }
    };
var Aw = Symbol.for('AnimatedComponent'),
    Tw = (e) => (Dy.str(e) ? e : e && Dy.str(e.displayName) ? e.displayName : (Dy.fun(e) && e.name) || null);
function Cw(e, ...t) {
    return Dy.fun(e) ? e(...t) : e;
}
var jw = (e, t) => !0 === e || !!(t && e && (Dy.fun(e) ? e(t) : Qy(e).includes(t))),
    Uw = (e, t) => (Dy.obj(e) ? t && e[t] : e),
    Bw = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
    Nw = (e) => e,
    Ww = (e, t = Nw) => {
        let n = Rw;
        e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
        const r = {};
        for (const i of n) {
            const n = t(e[i], i);
            Dy.und(n) || (r[i] = n);
        }
        return r;
    },
    Rw = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
    Iw = {
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
function Lw(e) {
    const t = (function (e) {
        const t = {};
        let n = 0;
        if (
            ($y(e, (e, r) => {
                Iw[r] || ((t[r] = e), n++);
            }),
            n)
        )
            return t;
    })(e);
    if (t) {
        const n = { to: t };
        return ($y(e, (e, r) => r in t || (n[r] = e)), n);
    }
    return { ...e };
}
function Mw(e) {
    return (
        (e = M_(e)),
        Dy.arr(e) ? e.map(Mw) : sw(e) ? My.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
    );
}
function Vw(e) {
    return Dy.fun(e) || (Dy.arr(e) && Dy.obj(e[0]));
}
var Dw = { tension: 170, friction: 26, mass: 1, damping: 1, easing: W_.linear, clamp: !1 };
function zw(e, t) {
    if (Dy.und(t.decay)) {
        const n = !Dy.und(t.tension) || !Dy.und(t.friction);
        ((!n && Dy.und(t.frequency) && Dy.und(t.damping) && Dy.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0));
    } else e.duration = void 0;
}
var Fw = [];
function $w(e, { key: t, props: n, defaultProps: r, state: i, actions: o }) {
    return new Promise((a, s) => {
        let u,
            l,
            c = jw(n.cancel ?? (null == r ? void 0 : r.cancel), t);
        if (c) h();
        else {
            Dy.und(n.pause) || (i.paused = jw(n.pause, t));
            let e = null == r ? void 0 : r.pause;
            (!0 !== e && (e = i.paused || jw(e, t)),
                (u = Cw(n.delay || 0, t)),
                e ? (i.resumeQueue.add(d), o.pause()) : (o.resume(), d()));
        }
        function f() {
            (i.resumeQueue.add(d), i.timeouts.delete(l), l.cancel(), (u = l.time - wy.now()));
        }
        function d() {
            u > 0 && !My.skipAnimation
                ? ((i.delayed = !0), (l = wy.setTimeout(h, u)), i.pauseQueue.add(f), i.timeouts.add(l))
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
var Qw = (e, t) =>
        1 == t.length
            ? t[0]
            : t.some((e) => e.cancelled)
              ? Hw(e.get())
              : t.every((e) => e.noop)
                ? qw(e.get())
                : Kw(
                      e.get(),
                      t.every((e) => e.finished),
                  ),
    qw = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
    Kw = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
    Hw = (e) => ({ value: e, cancelled: !0, finished: !1 });
function Gw(e, t, n, r) {
    const { callId: i, parentId: o, onRest: a } = t,
        { asyncTo: s, promise: u } = n;
    return o || e !== s || t.reset
        ? (n.promise = (async () => {
              ((n.asyncId = i), (n.asyncTo = e));
              const l = Ww(t, (e, t) => ('onRest' === t ? void 0 : e));
              let c, f;
              const d = new Promise((e, t) => ((c = e), (f = t))),
                  h = (e) => {
                      const t = (i <= (n.cancelId || 0) && Hw(r)) || (i !== n.asyncId && Kw(r, !1));
                      if (t) throw ((e.result = t), f(e), e);
                  },
                  p = (e, t) => {
                      const o = new Yw(),
                          a = new Jw();
                      return (async () => {
                          if (My.skipAnimation) throw (Xw(n), (a.result = Kw(r, !1)), f(a), a);
                          h(o);
                          const s = Dy.obj(e) ? { ...e } : { ...t, to: e };
                          ((s.parentId = i),
                              $y(l, (e, t) => {
                                  Dy.und(s[t]) && (s[t] = e);
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
              if (My.skipAnimation) return (Xw(n), Kw(r, !1));
              try {
                  let t;
                  ((t = Dy.arr(e)
                      ? (async (e) => {
                            for (const t of e) await p(t);
                        })(e)
                      : Promise.resolve(e(p, r.stop.bind(r)))),
                      await Promise.all([t.then(c), d]),
                      (v = Kw(r.get(), !0, !1)));
              } catch (g) {
                  if (g instanceof Yw) v = g.result;
                  else {
                      if (!(g instanceof Jw)) throw g;
                      v = g.result;
                  }
              } finally {
                  i == n.asyncId && ((n.asyncId = o), (n.asyncTo = o ? s : void 0), (n.promise = o ? u : void 0));
              }
              return (
                  Dy.fun(a) &&
                      wy.batchedUpdates(() => {
                          a(v, r, r.item);
                      }),
                  v
              );
          })())
        : u;
}
function Xw(e, t) {
    (qy(e.timeouts, (e) => e.cancel()),
        e.pauseQueue.clear(),
        e.resumeQueue.clear(),
        (e.asyncId = e.asyncTo = e.promise = void 0),
        t && (e.cancelId = t));
}
var Yw = class extends Error {
        constructor() {
            super(
                'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
            );
        }
    },
    Jw = class extends Error {
        constructor() {
            super('SkipAnimationSignal');
        }
    },
    Zw = (e) => e instanceof tS,
    eS = 1,
    tS = class extends z_ {
        constructor() {
            (super(...arguments), (this.id = eS++), (this._priority = 0));
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = vw(this);
            return e && e.getValue();
        }
        to(...e) {
            return My.to(this, e);
        }
        interpolate(...e) {
            return (ow(`${rw}The "interpolate" function is deprecated in v9 (use "to" instead)`), My.to(this, e));
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
            D_(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            (this.idle || o_.sort(this), D_(this, { type: 'priority', parent: this, priority: e }));
        }
    },
    nS = Symbol.for('SpringPhase'),
    rS = (e) => (1 & e[nS]) > 0,
    iS = (e) => (2 & e[nS]) > 0,
    oS = (e) => (4 & e[nS]) > 0,
    aS = (e, t) => (t ? (e[nS] |= 3) : (e[nS] &= -3)),
    sS = (e, t) => (t ? (e[nS] |= 4) : (e[nS] &= -5)),
    uS = class extends tS {
        constructor(e, t) {
            if (
                (super(),
                (this.animation = new (class {
                    constructor() {
                        ((this.changed = !1),
                            (this.values = Fw),
                            (this.toValues = null),
                            (this.fromValues = Fw),
                            (this.config = new (class {
                                constructor() {
                                    ((this.velocity = 0), Object.assign(this, Dw));
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
                !Dy.und(e) || !Dy.und(t))
            ) {
                const n = Dy.obj(e) ? { ...e } : { ...t, from: e };
                (Dy.und(n.default) && (n.default = !0), this.start(n));
            }
        }
        get idle() {
            return !(iS(this) || this._state.asyncTo) || oS(this);
        }
        get goal() {
            return M_(this.animation.to);
        }
        get velocity() {
            const e = vw(this);
            return e instanceof yw ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
        }
        get hasAnimated() {
            return rS(this);
        }
        get isAnimating() {
            return iS(this);
        }
        get isPaused() {
            return oS(this);
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
                a = mw(r.to);
            (!a && L_(r.to) && (i = Qy(M_(r.to))),
                r.values.forEach((s, u) => {
                    if (s.done) return;
                    const l = s.constructor == _w ? 1 : a ? a[u].lastPosition : i[u];
                    let c = r.immediate,
                        f = l;
                    if (!c) {
                        if (((f = s.lastPosition), o.tension <= 0)) return void (s.done = !0);
                        let t = (s.elapsedTime += e);
                        const n = r.fromValues[u],
                            i = null != s.v0 ? s.v0 : (s.v0 = Dy.arr(o.velocity) ? o.velocity[u] : o.velocity);
                        let a;
                        const d = o.precision || (n == l ? 0.005 : Math.min(1, 0.001 * Math.abs(l - n)));
                        if (Dy.und(o.duration))
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
                                    u = !Dy.und(r),
                                    h = n == l ? s.v0 > 0 : n < l;
                                let p,
                                    v = !1;
                                const g = 1,
                                    m = Math.ceil(e / g);
                                for (
                                    let e = 0;
                                    e < m && ((p = Math.abs(a) > t), p || ((c = Math.abs(l - f) <= d), !c));
                                    ++e
                                ) {
                                    u && ((v = f == l || f > l == h), v && ((a = -a * r), (f = l)));
                                    ((a += ((1e-6 * -o.tension * (f - l) + 0.001 * -o.friction * a) / o.mass) * g),
                                        (f += a * g));
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
            const s = vw(this),
                u = s.getValue();
            if (t) {
                const e = M_(r.to);
                ((u === e && !n) || o.decay ? n && o.decay && this._onChange(u) : (s.setValue(e), this._onChange(e)),
                    this._stop());
            } else n && this._onChange(u);
        }
        set(e) {
            return (
                wy.batchedUpdates(() => {
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
            if (iS(this)) {
                const { to: e, config: t } = this.animation;
                wy.batchedUpdates(() => {
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
                Dy.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [Dy.obj(e) ? e : { ...t, to: e }]),
                Promise.all(n.map((e) => this._update(e))).then((e) => Qw(this, e))
            );
        }
        stop(e) {
            const { to: t } = this.animation;
            return (
                this._focus(this.get()),
                Xw(this._state, e && this._lastCallId),
                wy.batchedUpdates(() => this._stop(t, e)),
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
            ((n = Dy.obj(n) ? n[t] : n),
                (null == n || Vw(n)) && (n = void 0),
                (r = Dy.obj(r) ? r[t] : r),
                null == r && (r = void 0));
            const i = { to: n, from: r };
            return (
                rS(this) ||
                    (e.reverse && ([n, r] = [r, n]), (r = M_(r)), Dy.und(r) ? vw(this) || this._set(n) : this._set(r)),
                i
            );
        }
        _update({ ...e }, t) {
            const { key: n, defaultProps: r } = this;
            (e.default &&
                Object.assign(
                    r,
                    Ww(e, (e, t) => (/^on/.test(t) ? Uw(e, n) : e)),
                ),
                vS(this, e, 'onProps'),
                gS(this, 'onProps', e, this));
            const i = this._prepareNode(e);
            if (Object.isFrozen(this))
                throw Error(
                    'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                );
            const o = this._state;
            return $w(++this._lastCallId, {
                key: n,
                props: e,
                defaultProps: r,
                state: o,
                actions: {
                    pause: () => {
                        oS(this) ||
                            (sS(this, !0),
                            Gy(o.pauseQueue),
                            gS(this, 'onPause', Kw(this, lS(this, this.animation.to)), this));
                    },
                    resume: () => {
                        oS(this) &&
                            (sS(this, !1),
                            iS(this) && this._resume(),
                            Gy(o.resumeQueue),
                            gS(this, 'onResume', Kw(this, lS(this, this.animation.to)), this));
                    },
                    start: this._merge.bind(this, i),
                },
            }).then((n) => {
                if (e.loop && n.finished && (!t || !n.noop)) {
                    const t = cS(e);
                    if (t) return this._update(t, !0);
                }
                return n;
            });
        }
        _merge(e, t, n) {
            if (t.cancel) return (this.stop(!0), n(Hw(this)));
            const r = !Dy.und(e.to),
                i = !Dy.und(e.from);
            if (r || i) {
                if (!(t.callId > this._lastToId)) return n(Hw(this));
                this._lastToId = t.callId;
            }
            const { key: o, defaultProps: a, animation: s } = this,
                { to: u, from: l } = s;
            let { to: c = u, from: f = l } = e;
            (!i || r || (t.default && !Dy.und(c)) || (c = f), t.reverse && ([c, f] = [f, c]));
            const d = !zy(f, l);
            (d && (s.from = f), (f = M_(f)));
            const h = !zy(c, u);
            h && this._focus(c);
            const p = Vw(t.to),
                { config: v } = s,
                { decay: g, velocity: m } = v;
            ((r || i) && (v.velocity = 0),
                t.config &&
                    !p &&
                    (function (e, t, n) {
                        (n && (zw((n = { ...n }), t), (t = { ...n, ...t })), zw(e, t), Object.assign(e, t));
                        for (const a in Dw) null == e[a] && (e[a] = Dw[a]);
                        let { frequency: r, damping: i } = e;
                        const { mass: o } = e;
                        Dy.und(r) ||
                            (r < 0.01 && (r = 0.01),
                            i < 0 && (i = 0),
                            (e.tension = Math.pow((2 * Math.PI) / r, 2) * o),
                            (e.friction = (4 * Math.PI * i * o) / r));
                    })(v, Cw(t.config, o), t.config !== a.config ? Cw(a.config, o) : void 0));
            let b = vw(this);
            if (!b || Dy.und(c)) return n(Kw(this, !0));
            const y = Dy.und(t.reset) ? i && !t.default : !Dy.und(f) && jw(t.reset, o),
                _ = y ? f : this.get(),
                w = Mw(c),
                S = Dy.num(w) || Dy.arr(w) || sw(w),
                O = !p && (!S || jw(a.immediate || t.immediate, o));
            if (h) {
                const e = xw(c);
                if (e !== b.constructor) {
                    if (!O)
                        throw Error(
                            `Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`,
                        );
                    b = this._set(w);
                }
            }
            const k = b.constructor;
            let x = L_(c),
                P = !1;
            if (!x) {
                const e = y || (!rS(this) && d);
                ((h || e) && ((P = zy(Mw(_), w)), (x = !P)),
                    ((zy(s.immediate, O) || O) && zy(v.decay, g) && zy(v.velocity, m)) || (x = !0));
            }
            if (
                (P && iS(this) && (s.changed && !y ? (x = !0) : x || this._stop(u)),
                !p &&
                    ((x || L_(u)) && ((s.values = b.getPayload()), (s.toValues = L_(c) ? null : k == _w ? [1] : Qy(w))),
                    s.immediate != O && ((s.immediate = O), O || y || this._set(u)),
                    x))
            ) {
                const { onRest: e } = s;
                Fy(pS, (e) => vS(this, t, e));
                const r = Kw(this, lS(this, u));
                (Gy(this._pendingCalls, r),
                    this._pendingCalls.add(n),
                    s.changed &&
                        wy.batchedUpdates(() => {
                            var t;
                            ((s.changed = !y),
                                null == e || e(r, this),
                                y ? Cw(a.onRest, r) : null == (t = s.onStart) || t.call(s, r, this));
                        }));
            }
            (y && this._set(_),
                p
                    ? n(Gw(t.to, t, this._state, this))
                    : x
                      ? this._start()
                      : iS(this) && !h
                        ? this._pendingCalls.add(n)
                        : n(qw(_)));
        }
        _focus(e) {
            const t = this.animation;
            e !== t.to && (V_(this) && this._detach(), (t.to = e), V_(this) && this._attach());
        }
        _attach() {
            let e = 0;
            const { to: t } = this.animation;
            (L_(t) && ($_(t, this), Zw(t) && (e = t.priority + 1)), (this.priority = e));
        }
        _detach() {
            const { to: e } = this.animation;
            L_(e) && Q_(e, this);
        }
        _set(e, t = !0) {
            const n = M_(e);
            if (!Dy.und(n)) {
                const e = vw(this);
                if (!e || !zy(n, e.getValue())) {
                    const r = xw(n);
                    (e && e.constructor == r ? e.setValue(n) : gw(this, r.create(n)),
                        e &&
                            wy.batchedUpdates(() => {
                                this._onChange(n, t);
                            }));
                }
            }
            return vw(this);
        }
        _onStart() {
            const e = this.animation;
            e.changed || ((e.changed = !0), gS(this, 'onStart', Kw(this, lS(this, e.to)), this));
        }
        _onChange(e, t) {
            (t || (this._onStart(), Cw(this.animation.onChange, e, this)),
                Cw(this.defaultProps.onChange, e, this),
                super._onChange(e, t));
        }
        _start() {
            const e = this.animation;
            (vw(this).reset(M_(e.to)),
                e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                iS(this) || (aS(this, !0), oS(this) || this._resume()));
        }
        _resume() {
            My.skipAnimation ? this.finish() : o_.start(this);
        }
        _stop(e, t) {
            if (iS(this)) {
                aS(this, !1);
                const n = this.animation;
                (Fy(n.values, (e) => {
                    e.done = !0;
                }),
                    n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                    D_(this, { type: 'idle', parent: this }));
                const r = t ? Hw(this.get()) : Kw(this.get(), lS(this, e ?? n.to));
                (Gy(this._pendingCalls, r), n.changed && ((n.changed = !1), gS(this, 'onRest', r, this)));
            }
        }
    };
function lS(e, t) {
    const n = Mw(t);
    return zy(Mw(e.get()), n);
}
function cS(e, t = e.loop, n = e.to) {
    const r = Cw(t);
    if (r) {
        const i = !0 !== r && Lw(r),
            o = (i || e).reverse,
            a = !i || i.reset;
        return fS({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !o || Vw(n) ? n : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...i,
        });
    }
}
function fS(e) {
    const { to: t, from: n } = (e = Lw(e)),
        r = new Set();
    return (Dy.obj(t) && hS(t, r), Dy.obj(n) && hS(n, r), (e.keys = r.size ? Array.from(r) : null), e);
}
function dS(e) {
    const t = fS(e);
    return (Dy.und(t.default) && (t.default = Ww(t)), t);
}
function hS(e, t) {
    $y(e, (e, n) => null != e && t.add(n));
}
var pS = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
function vS(e, t, n) {
    e.animation[n] = t[n] !== Bw(t, n) ? Uw(t[n], e.key) : void 0;
}
function gS(e, t, ...n) {
    var r, i, o, a;
    (null == (i = (r = e.animation)[t]) || i.call(r, ...n), null == (a = (o = e.defaultProps)[t]) || a.call(o, ...n));
}
var mS = ['onStart', 'onChange', 'onRest'],
    bS = 1,
    yS = class {
        constructor(e, t) {
            ((this.id = bS++),
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
                Dy.und(n) || this.springs[t].set(n);
            }
        }
        update(e) {
            return (e && this.queue.push(fS(e)), this);
        }
        start(e) {
            let { queue: t } = this;
            return (
                e ? (t = Qy(e).map(fS)) : (this.queue = []),
                this._flush ? this._flush(this, t) : (PS(this, t), _S(this, t))
            );
        }
        stop(e, t) {
            if ((e !== !!e && (t = e), t)) {
                const n = this.springs;
                Fy(Qy(t), (t) => n[t].stop(!!e));
            } else (Xw(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
            return this;
        }
        pause(e) {
            if (Dy.und(e)) this.start({ pause: !0 });
            else {
                const t = this.springs;
                Fy(Qy(e), (e) => t[e].pause());
            }
            return this;
        }
        resume(e) {
            if (Dy.und(e)) this.start({ pause: !1 });
            else {
                const t = this.springs;
                Fy(Qy(e), (e) => t[e].resume());
            }
            return this;
        }
        each(e) {
            $y(this.springs, e);
        }
        _onFrame() {
            const { onStart: e, onChange: t, onRest: n } = this._events,
                r = this._active.size > 0,
                i = this._changed.size > 0;
            ((r && !this._started) || (i && !this._started)) &&
                ((this._started = !0),
                qy(e, ([e, t]) => {
                    ((t.value = this.get()), e(t, this, this._item));
                }));
            const o = !r && this._started,
                a = i || (o && n.size) ? this.get() : null;
            (i &&
                t.size &&
                qy(t, ([e, t]) => {
                    ((t.value = a), e(t, this, this._item));
                }),
                o &&
                    ((this._started = !1),
                    qy(n, ([e, t]) => {
                        ((t.value = a), e(t, this, this._item));
                    })));
        }
        eventObserved(e) {
            if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
            else {
                if ('idle' != e.type) return;
                this._active.delete(e.parent);
            }
            wy.onFrame(this._onFrame);
        }
    };
function _S(e, t) {
    return Promise.all(t.map((t) => wS(e, t))).then((t) => Qw(e, t));
}
async function wS(e, t, n) {
    const { keys: r, to: i, from: o, loop: a, onRest: s, onResolve: u } = t,
        l = Dy.obj(t.default) && t.default;
    (a && (t.loop = !1), !1 === i && (t.to = null), !1 === o && (t.from = null));
    const c = Dy.arr(i) || Dy.fun(i) ? i : void 0;
    c
        ? ((t.to = void 0), (t.onRest = void 0), l && (l.onRest = void 0))
        : Fy(mS, (n) => {
              const r = t[n];
              if (Dy.fun(r)) {
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
        ? ((f.paused = t.pause), Gy(t.pause ? f.pauseQueue : f.resumeQueue))
        : f.paused && (t.pause = !0);
    const d = (r || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
        h = !0 === t.cancel || !0 === Bw(t, 'cancel');
    ((c || (h && f.asyncId)) &&
        d.push(
            $w(++e._lastAsyncId, {
                props: t,
                state: f,
                actions: {
                    pause: Vy,
                    resume: Vy,
                    start(t, n) {
                        h ? (Xw(f, e._lastAsyncId), n(Hw(e))) : ((t.onRest = s), n(Gw(c, t, f, e)));
                    },
                },
            }),
        ),
        f.paused &&
            (await new Promise((e) => {
                f.resumeQueue.add(e);
            })));
    const p = Qw(e, await Promise.all(d));
    if (a && p.finished && (!n || !p.noop)) {
        const n = cS(t, a, i);
        if (n) return (PS(e, [n]), wS(e, n, !0));
    }
    return (u && wy.batchedUpdates(() => u(p, e, e.item)), p);
}
function SS(e, t) {
    const n = { ...e.springs };
    return (
        t &&
            Fy(Qy(t), (e) => {
                (Dy.und(e.keys) && (e = fS(e)), Dy.obj(e.to) || (e = { ...e, to: void 0 }), xS(n, e, (e) => kS(e)));
            }),
        OS(e, n),
        n
    );
}
function OS(e, t) {
    $y(t, (t, n) => {
        e.springs[n] || ((e.springs[n] = t), $_(t, e));
    });
}
function kS(e, t) {
    const n = new uS();
    return ((n.key = e), t && $_(n, t), n);
}
function xS(e, t, n) {
    t.keys &&
        Fy(t.keys, (r) => {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function PS(e, t) {
    Fy(t, (t) => {
        xS(e.springs, t, (t) => kS(t, e));
    });
}
var ES = ({ children: e, ...t }) => {
        const n = M.useContext(AS),
            r = t.pause || !!n.pause,
            i = t.immediate || !!n.immediate;
        t = (function (e, t) {
            const [n] = M.useState(() => ({ inputs: t, result: e() })),
                r = M.useRef(),
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
                M.useEffect(() => {
                    ((r.current = o), i == n && (n.inputs = n.result = void 0));
                }, [o]),
                o.result
            );
        })(() => ({ pause: r, immediate: i }), [r, i]);
        const { Provider: o } = AS;
        return M.createElement(o, { value: t }, e);
    },
    AS = (function (e, t) {
        return (Object.assign(e, M.createContext(t)), (e.Provider._context = e), (e.Consumer._context = e), e);
    })(ES, {});
((ES.Provider = AS.Provider), (ES.Consumer = AS.Consumer));
var TS = () => {
    const e = [],
        t = function (t) {
            aw(
                `${rw}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
            );
            const r = [];
            return (
                Fy(e, (e, i) => {
                    if (Dy.und(t)) r.push(e.start());
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
            return (Fy(e, (e) => e.pause(...arguments)), this);
        }),
        (t.resume = function () {
            return (Fy(e, (e) => e.resume(...arguments)), this);
        }),
        (t.set = function (t) {
            Fy(e, (e, n) => {
                const r = Dy.fun(t) ? t(n, e) : t;
                r && e.set(r);
            });
        }),
        (t.start = function (t) {
            const n = [];
            return (
                Fy(e, (e, r) => {
                    if (Dy.und(t)) n.push(e.start());
                    else {
                        const i = this._getProps(t, e, r);
                        i && n.push(e.start(i));
                    }
                }),
                n
            );
        }),
        (t.stop = function () {
            return (Fy(e, (e) => e.stop(...arguments)), this);
        }),
        (t.update = function (t) {
            return (Fy(e, (e, n) => e.update(this._getProps(t, e, n))), this);
        }));
    const n = function (e, t, n) {
        return Dy.fun(e) ? e(n, t) : e;
    };
    return ((t._getProps = n), t);
};
function CS(e, t) {
    const n = Dy.fun(e),
        [[r], i] = (function (e, t, n) {
            const r = Dy.fun(t) && t;
            r && !n && (n = []);
            const i = M.useMemo(() => (r || 3 == arguments.length ? TS() : void 0), []),
                o = M.useRef(0),
                a = cw(),
                s = M.useMemo(
                    () => ({
                        ctrls: [],
                        queue: [],
                        flush(e, t) {
                            const n = SS(e, t);
                            return o.current > 0 && !s.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                                ? _S(e, t)
                                : new Promise((r) => {
                                      (OS(e, n),
                                          s.queue.push(() => {
                                              r(_S(e, t));
                                          }),
                                          a());
                                  });
                        },
                    }),
                    [],
                ),
                u = M.useRef([...s.ctrls]),
                l = [],
                c = hw(e) || 0;
            function f(e, n) {
                for (let i = e; i < n; i++) {
                    const e = u.current[i] || (u.current[i] = new yS(null, s.flush)),
                        n = r ? r(i, e) : t[i];
                    n && (l[i] = dS(n));
                }
            }
            (M.useMemo(() => {
                (Fy(u.current.slice(e, c), (e) => {
                    (!(function (e, t) {
                        var n;
                        (null == (n = e.ref) || n.delete(e), null == t || t.delete(e));
                    })(e, i),
                        e.stop(!0));
                }),
                    (u.current.length = e),
                    f(c, e));
            }, [e]),
                M.useMemo(() => {
                    f(0, Math.min(c, e));
                }, n));
            const d = u.current.map((e, t) => SS(e, l[t])),
                h = M.useContext(ES),
                p = hw(h),
                v =
                    h !== p &&
                    (function (e) {
                        for (const t in e) return !0;
                        return !1;
                    })(h);
            (uw(() => {
                (o.current++, (s.ctrls = u.current));
                const { queue: e } = s;
                (e.length && ((s.queue = []), Fy(e, (e) => e())),
                    Fy(u.current, (e, t) => {
                        (null == i || i.add(e), v && e.start({ default: h }));
                        const n = l[t];
                        n &&
                            ((function (e, t) {
                                var n;
                                t && e.ref !== t && (null == (n = e.ref) || n.delete(e), t.add(e), (e.ref = t));
                            })(e, n.ref),
                            e.ref ? e.queue.push(n) : e.start(n));
                    }));
            }),
                fw(() => () => {
                    Fy(s.ctrls, (e) => e.stop(!0));
                }));
            const g = d.map((e) => ({ ...e }));
            return i ? [g, i] : g;
        })(1, n ? e : [e], n ? [] : t);
    return n || 2 == arguments.length ? [r, i] : r;
}
var jS = class extends tS {
    constructor(e, t) {
        (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = A_(...t)));
        const n = this._get(),
            r = xw(n);
        gw(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        (zy(t, this.get()) || (vw(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && BS(this._active) && NS(this));
    }
    _get() {
        const e = Dy.arr(this.source) ? this.source.map(M_) : Qy(M_(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !BS(this._active) &&
            ((this.idle = !1),
            Fy(mw(this), (e) => {
                e.done = !1;
            }),
            My.skipAnimation ? (wy.batchedUpdates(() => this.advance()), NS(this)) : o_.start(this));
    }
    _attach() {
        let e = 1;
        (Fy(Qy(this.source), (t) => {
            (L_(t) && $_(t, this), Zw(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (Fy(Qy(this.source), (e) => {
            L_(e) && Q_(e, this);
        }),
            this._active.clear(),
            NS(this));
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = Qy(this.source).reduce((e, t) => Math.max(e, (Zw(t) ? t.priority : 0) + 1), 0));
    }
};
function US(e) {
    return !1 !== e.idle;
}
function BS(e) {
    return !e.size || Array.from(e).every(US);
}
function NS(e) {
    e.idle ||
        ((e.idle = !0),
        Fy(mw(e), (e) => {
            e.done = !0;
        }),
        D_(e, { type: 'idle', parent: e }));
}
My.assign({ createStringInterpolator: nw, to: (e, t) => new jS(e, t) });
var WS = /^--/;
function RS(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || WS.test(e) || (LS.hasOwnProperty(e) && LS[e])
          ? ('' + t).trim()
          : t + 'px';
}
var IS = {};
var LS = {
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
    MS = ['Webkit', 'Ms', 'Moz', 'O'];
LS = Object.keys(LS).reduce(
    (e, t) => (MS.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    LS,
);
var VS = /^(matrix|translate|scale|rotate|skew)/,
    DS = /^(translate)/,
    zS = /^(rotate|skew)/,
    FS = (e, t) => (Dy.num(e) && 0 !== e ? e + t : e),
    $S = (e, t) => (Dy.arr(e) ? e.every((e) => $S(e, t)) : Dy.num(e) ? e === t : parseFloat(e) === t),
    QS = class extends Sw {
        constructor({ x: e, y: t, z: n, ...r }) {
            const i = [],
                o = [];
            ((e || t || n) &&
                (i.push([e || 0, t || 0, n || 0]),
                o.push((e) => [`translate3d(${e.map((e) => FS(e, 'px')).join(',')})`, $S(e, 0)])),
                $y(r, (e, t) => {
                    if ('transform' === t) (i.push([e || '']), o.push((e) => [e, '' === e]));
                    else if (VS.test(t)) {
                        if ((delete r[t], Dy.und(e))) return;
                        const n = DS.test(t) ? 'px' : zS.test(t) ? 'deg' : '';
                        (i.push(Qy(e)),
                            o.push(
                                'rotate3d' === t
                                    ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${FS(i, n)})`, $S(i, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => FS(e, n)).join(',')})`,
                                          $S(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                i.length && (r.transform = new qS(i, o)),
                super(r));
        }
    },
    qS = class extends z_ {
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
                Fy(this.inputs, (n, r) => {
                    const i = M_(n[0]),
                        [o, a] = this.transforms[r](Dy.arr(i) ? i : n.map(M_));
                    ((e += ' ' + o), (t = t && a));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && Fy(this.inputs, (e) => Fy(e, (e) => L_(e) && $_(e, this)));
        }
        observerRemoved(e) {
            0 == e && Fy(this.inputs, (e) => Fy(e, (e) => L_(e) && Q_(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), D_(this, e));
        }
    };
My.assign({
    batchedUpdates: Mf.unstable_batchedUpdates,
    createStringInterpolator: nw,
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
var KS = ((
    e,
    {
        applyAnimatedValues: t = () => !1,
        createAnimatedStyle: n = (e) => new Sw(e),
        getComponentProps: r = (e) => e,
    } = {},
) => {
    const i = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
        o = (e) => {
            const t = Tw(e) || 'Anonymous';
            return (
                ((e = Dy.str(e) ? o[e] || (o[e] = Pw(e, i)) : e[Aw] || (e[Aw] = Pw(e, i))).displayName =
                    `Animated(${t})`),
                e
            );
        };
    return (
        $y(e, (t, n) => {
            (Dy.arr(e) && (n = Tw(t)), (o[n] = o(t)));
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
                    n || e.hasAttribute(t) ? t : IS[t] || (IS[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                );
            void 0 !== i && (e.textContent = i);
            for (const f in r)
                if (r.hasOwnProperty(f)) {
                    const t = RS(f, r[f]);
                    WS.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                }
            (c.forEach((t, n) => {
                e.setAttribute(t, l[n]);
            }),
                void 0 !== o && (e.scrollTop = o),
                void 0 !== a && (e.scrollLeft = a),
                void 0 !== s && e.setAttribute('viewBox', s));
        },
        createAnimatedStyle: (e) => new QS(e),
        getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
    },
).animated;
function HS(e) {
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
var GS = {};
function XS() {
    return 'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : GS;
}
var YS = Object.assign,
    JS = Object.getOwnPropertyDescriptor,
    ZS = Object.defineProperty,
    eO = Object.prototype,
    tO = [];
Object.freeze(tO);
var nO = {};
Object.freeze(nO);
var rO = 'undefined' != typeof Proxy,
    iO = Object.toString();
function oO() {
    rO || HS('Proxy not available');
}
function aO(e) {
    var t = !1;
    return function () {
        if (!t) return ((t = !0), e.apply(this, arguments));
    };
}
var sO = function () {};
function uO(e) {
    return 'function' == typeof e;
}
function lO(e) {
    switch (typeof e) {
        case 'string':
        case 'symbol':
        case 'number':
            return !0;
    }
    return !1;
}
function cO(e) {
    return null !== e && 'object' == typeof e;
}
function fO(e) {
    if (!cO(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (null == t) return !0;
    var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n.toString() === iO;
}
function dO(e) {
    var t = null == e ? void 0 : e.constructor;
    return !!t && ('GeneratorFunction' === t.name || 'GeneratorFunction' === t.displayName);
}
function hO(e, t, n) {
    ZS(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function pO(e, t, n) {
    ZS(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function vO(e, t) {
    var n = 'isMobX' + e;
    return (
        (t.prototype[n] = !0),
        function (e) {
            return cO(e) && !0 === e[n];
        }
    );
}
function gO(e) {
    return e instanceof Map;
}
function mO(e) {
    return e instanceof Set;
}
var bO = void 0 !== Object.getOwnPropertySymbols;
var yO =
    'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : bO
          ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            }
          : Object.getOwnPropertyNames;
function _O(e) {
    return null === e ? null : 'object' == typeof e ? '' + e : e;
}
function wO(e, t) {
    return eO.hasOwnProperty.call(e, t);
}
var SO =
    Object.getOwnPropertyDescriptors ||
    function (e) {
        var t = {};
        return (
            yO(e).forEach(function (n) {
                t[n] = JS(e, n);
            }),
            t
        );
    };
function OO(e, t) {
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
function kO(e, t, n) {
    return (t && OO(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function xO() {
    return (
        (xO = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        xO.apply(this, arguments)
    );
}
function PO(e, t) {
    ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), EO(e, t));
}
function EO(e, t) {
    return (EO = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return ((e.__proto__ = t), e);
          })(e, t);
}
function AO(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function TO(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function CO(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
        Array.isArray(e) ||
        (n = (function (e, t) {
            if (e) {
                if ('string' == typeof e) return TO(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? TO(e, t)
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
var jO = Symbol('mobx-stored-annotations');
function UO(e) {
    return Object.assign(function (t, n) {
        if (NO(n)) return e.decorate_20223_(t, n);
        BO(t, n, e);
    }, e);
}
function BO(e, t, n) {
    (wO(e, jO) || hO(e, jO, xO({}, e[jO])),
        (function (e) {
            return e.annotationType_ === zO;
        })(n) || (e[jO][t] = n));
}
function NO(e) {
    return 'object' == typeof e && 'string' == typeof e.kind;
}
var WO = Symbol('mobx administration'),
    RO = (function () {
        function e(e) {
            (void 0 === e && (e = 'Atom'),
                (this.name_ = void 0),
                (this.isPendingUnobservation_ = !1),
                (this.isBeingObserved_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Dk.NOT_TRACKING_),
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
                return fx(this);
            }),
            (t.reportChanged = function () {
                (lx(), dx(this), cx());
            }),
            (t.toString = function () {
                return this.name_;
            }),
            e
        );
    })(),
    IO = vO('Atom', RO);
function LO(e, t, n) {
    (void 0 === t && (t = sO), void 0 === n && (n = sO));
    var r,
        i = new RO(e);
    return (t !== sO && Rx(Bx, i, t, r), n !== sO && Wx(i, n), i);
}
var MO = {
    identity: function (e, t) {
        return e === t;
    },
    structural: function (e, t) {
        return nE(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
    shallow: function (e, t) {
        return nE(e, t, 1);
    },
};
function VO(e, t, n) {
    return Jx(e)
        ? e
        : Array.isArray(e)
          ? xk.array(e, { name: n })
          : fO(e)
            ? xk.object(e, void 0, { name: n })
            : gO(e)
              ? xk.map(e, { name: n })
              : mO(e)
                ? xk.set(e, { name: n })
                : 'function' != typeof e || Tx(e) || Gx(e)
                  ? e
                  : dO(e)
                    ? Kx(e)
                    : Ax(n, e);
}
function DO(e) {
    return e;
}
var zO = 'override';
function FO(e, t) {
    return { annotationType_: e, options_: t, make_: $O, extend_: QO, decorate_20223_: qO };
}
function $O(e, t, n, r) {
    var i;
    if (null != (i = this.options_) && i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (Tx(n.value)) return 1;
    var o = KO(e, this, t, n, !1);
    return (ZS(r, t, o), 2);
}
function QO(e, t, n, r) {
    var i = KO(e, this, t, n);
    return e.defineProperty_(t, i, r);
}
function qO(e, t) {
    var n = t.kind,
        r = t.name,
        i = t.addInitializer,
        o = this;
    if ('field' != n) {
        var a, s, u, l, c, f;
        if ('method' == n)
            return (
                Tx(e) ||
                    ((s = e),
                    (e = Wk(
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
        HS(
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
            BO(this, r, o);
        });
}
function KO(e, t, n, r, i) {
    var o, a, s, u, l, c, f, d;
    (void 0 === i && (i = ox.safeDescriptors), (d = r), t.annotationType_, d.value);
    var h,
        p = r.value;
    null != (o = t.options_) && o.bound && (p = p.bind(null != (h = e.proxy_) ? h : e.target_));
    return {
        value: Wk(
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
function HO(e, t) {
    return { annotationType_: e, options_: t, make_: GO, extend_: XO, decorate_20223_: YO };
}
function GO(e, t, n, r) {
    var i;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (
        null != (i = this.options_) &&
        i.bound &&
        (!wO(e.target_, t) || !Gx(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
    )
        return 0;
    if (Gx(n.value)) return 1;
    var o = JO(e, this, t, n, !1, !1);
    return (ZS(r, t, o), 2);
}
function XO(e, t, n, r) {
    var i,
        o = JO(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
    return e.defineProperty_(t, o, r);
}
function YO(e, t) {
    var n,
        r = t.name,
        i = t.addInitializer;
    return (
        Gx(e) || (e = Kx(e)),
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
function JO(e, t, n, r, i, o) {
    var a;
    (void 0 === o && (o = ox.safeDescriptors), (a = r), t.annotationType_, a.value);
    var s,
        u = r.value;
    (Gx(u) || (u = Kx(u)), i) && ((u = u.bind(null != (s = e.proxy_) ? s : e.target_)).isMobXFlow = !0);
    return { value: u, configurable: !o || e.isPlainObject_, enumerable: !1, writable: !o };
}
function ZO(e, t) {
    return { annotationType_: e, options_: t, make_: ek, extend_: tk, decorate_20223_: nk };
}
function ek(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function tk(e, t, n, r) {
    var i;
    return (
        (i = n),
        this.annotationType_,
        i.get,
        e.defineComputedProperty_(t, xO({}, this.options_, { get: n.get, set: n.set }), r)
    );
}
function nk(e, t) {
    var n = this,
        r = t.name;
    return (
        (0, t.addInitializer)(function () {
            var t = IP(this)[WO],
                i = xO({}, n.options_, { get: e, context: this });
            (i.name || (i.name = 'ObservableObject.' + r.toString()), t.values_.set(r, new Fk(i)));
        }),
        function () {
            return this[WO].getObservablePropValue_(r);
        }
    );
}
function rk(e, t) {
    return { annotationType_: e, options_: t, make_: ik, extend_: ok, decorate_20223_: ak };
}
function ik(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function ok(e, t, n, r) {
    var i, o;
    return (
        this.annotationType_,
        e.defineObservableProperty_(
            t,
            n.value,
            null != (i = null == (o = this.options_) ? void 0 : o.enhancer) ? i : VO,
            r,
        )
    );
}
function ak(e, t) {
    var n = this,
        r = t.kind,
        i = t.name,
        o = new WeakSet();
    function a(e, t) {
        var r,
            a,
            s = IP(e)[WO],
            u = new Vk(
                t,
                null != (r = null == (a = n.options_) ? void 0 : a.enhancer) ? r : VO,
                'ObservableObject.' + i.toString(),
                !1,
            );
        (s.values_.set(i, u), o.add(e));
    }
    if ('accessor' == r)
        return {
            get: function () {
                return (o.has(this) || a(this, e.get.call(this)), this[WO].getObservablePropValue_(i));
            },
            set: function (e) {
                return (o.has(this) || a(this, e), this[WO].setObservablePropValue_(i, e));
            },
            init: function (e) {
                return (o.has(this) || a(this, e), e);
            },
        };
}
var sk = 'true',
    uk = lk();
function lk(e) {
    return { annotationType_: sk, options_: e, make_: ck, extend_: fk, decorate_20223_: dk };
}
function ck(e, t, n, r) {
    var i, o, a, s;
    if (n.get) return Tk.make_(e, t, n, r);
    if (n.set) {
        var u = Wk(t.toString(), n.set);
        return r === e.target_
            ? null === e.defineProperty_(t, { configurable: !ox.safeDescriptors || e.isPlainObject_, set: u })
                ? 0
                : 2
            : (ZS(r, t, { configurable: !0, set: u }), 2);
    }
    if (r !== e.target_ && 'function' == typeof n.value)
        return dO(n.value)
            ? (null != (s = this.options_) && s.autoBind ? Kx.bound : Kx).make_(e, t, n, r)
            : (null != (a = this.options_) && a.autoBind ? Ax.bound : Ax).make_(e, t, n, r);
    var l,
        c = !1 === (null == (i = this.options_) ? void 0 : i.deep) ? xk.ref : xk;
    'function' == typeof n.value &&
        null != (o = this.options_) &&
        o.autoBind &&
        (n.value = n.value.bind(null != (l = e.proxy_) ? l : e.target_));
    return c.make_(e, t, n, r);
}
function fk(e, t, n, r) {
    var i, o, a;
    if (n.get) return Tk.extend_(e, t, n, r);
    if (n.set)
        return e.defineProperty_(
            t,
            { configurable: !ox.safeDescriptors || e.isPlainObject_, set: Wk(t.toString(), n.set) },
            r,
        );
    'function' == typeof n.value &&
        null != (i = this.options_) &&
        i.autoBind &&
        (n.value = n.value.bind(null != (a = e.proxy_) ? a : e.target_));
    return (!1 === (null == (o = this.options_) ? void 0 : o.deep) ? xk.ref : xk).extend_(e, t, n, r);
}
function dk(e, t) {
    HS("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var hk = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
function pk(e) {
    return e || hk;
}
Object.freeze(hk);
var vk = rk('observable'),
    gk = rk('observable.ref', { enhancer: DO }),
    mk = rk('observable.shallow', {
        enhancer: function (e, t, n) {
            return null == e || VP(e) || OP(e) || CP(e) || BP(e)
                ? e
                : Array.isArray(e)
                  ? xk.array(e, { name: n, deep: !1 })
                  : fO(e)
                    ? xk.object(e, void 0, { name: n, deep: !1 })
                    : gO(e)
                      ? xk.map(e, { name: n, deep: !1 })
                      : mO(e)
                        ? xk.set(e, { name: n, deep: !1 })
                        : void 0;
        },
    }),
    bk = rk('observable.struct', {
        enhancer: function (e, t) {
            return nE(e, t) ? t : e;
        },
    }),
    yk = UO(vk);
function _k(e) {
    return !0 === e.deep
        ? VO
        : !1 === e.deep
          ? DO
          : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
            ? n
            : VO;
    var t, n, r;
}
function wk(e, t, n) {
    return NO(t)
        ? vk.decorate_20223_(e, t)
        : lO(t)
          ? void BO(e, t, vk)
          : Jx(e)
            ? e
            : fO(e)
              ? xk.object(e, t, n)
              : Array.isArray(e)
                ? xk.array(e, t)
                : gO(e)
                  ? xk.map(e, t)
                  : mO(e)
                    ? xk.set(e, t)
                    : 'object' == typeof e && null !== e
                      ? e
                      : xk.box(e, t);
}
YS(wk, yk);
var Sk,
    Ok,
    kk = {
        box: function (e, t) {
            var n = pk(t);
            return new Vk(e, _k(n), n.name, !0, n.equals);
        },
        array: function (e, t) {
            var n = pk(t);
            return (!1 === ox.useProxies || !1 === n.proxy ? XP : pP)(e, _k(n), n.name);
        },
        map: function (e, t) {
            var n = pk(t);
            return new TP(e, _k(n), n.name);
        },
        set: function (e, t) {
            var n = pk(t);
            return new UP(e, _k(n), n.name);
        },
        object: function (e, t, n) {
            return eE(function () {
                return Dx(
                    !1 === ox.useProxies || !1 === (null == n ? void 0 : n.proxy)
                        ? IP({}, n)
                        : (function (e, t) {
                              var n, r;
                              return (
                                  oO(),
                                  (e = IP(e, t)),
                                  null != (r = (n = e[WO]).proxy_) ? r : (n.proxy_ = new Proxy(e, nP))
                              );
                          })({}, n),
                    e,
                    t,
                );
            });
        },
        ref: UO(gk),
        shallow: UO(mk),
        deep: yk,
        struct: UO(bk),
    },
    xk = YS(wk, kk),
    Pk = 'computed',
    Ek = ZO(Pk),
    Ak = ZO('computed.struct', { equals: MO.structural }),
    Tk = function (e, t) {
        if (NO(t)) return Ek.decorate_20223_(e, t);
        if (lO(t)) return BO(e, t, Ek);
        if (fO(e)) return UO(ZO(Pk, e));
        var n = fO(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new Fk(n));
    };
(Object.assign(Tk, Ek), (Tk.struct = UO(Ak)));
var Ck,
    jk = 0,
    Uk = 1,
    Bk = null != (Sk = null == (Ok = JS(function () {}, 'name')) ? void 0 : Ok.configurable) && Sk,
    Nk = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
function Wk(e, t, n, r) {
    function i() {
        return Rk(e, n, t, r || this, arguments);
    }
    return (
        void 0 === n && (n = !1),
        (i.isMobxAction = !0),
        (i.toString = function () {
            return t.toString();
        }),
        Bk && ((Nk.value = e), ZS(i, 'name', Nk)),
        i
    );
}
function Rk(e, t, n, r, i) {
    var o = (function (e, t, n, r) {
        var i = !1,
            o = 0,
            a = ox.trackingDerivation,
            s = !t || !a;
        lx();
        var u = ox.allowStateChanges;
        s && (Yk(), (u = Ik(!0)));
        var l = Zk(!0),
            c = {
                runAsAction_: s,
                prevDerivation_: a,
                prevAllowStateChanges_: u,
                prevAllowStateReads_: l,
                notifySpy_: i,
                startTime_: o,
                actionId_: Uk++,
                parentActionId_: jk,
            };
        return ((jk = c.actionId_), c);
    })(0, t);
    try {
        return n.apply(r, i);
    } catch (a) {
        throw ((o.error_ = a), a);
    } finally {
        !(function (e) {
            jk !== e.actionId_ && HS(30);
            ((jk = e.parentActionId_), void 0 !== e.error_ && (ox.suppressReactionErrors = !0));
            (Lk(e.prevAllowStateChanges_), ex(e.prevAllowStateReads_), cx(), e.runAsAction_ && Jk(e.prevDerivation_));
            ox.suppressReactionErrors = !1;
        })(o);
    }
}
function Ik(e) {
    var t = ox.allowStateChanges;
    return ((ox.allowStateChanges = e), t);
}
function Lk(e) {
    ox.allowStateChanges = e;
}
Ck = Symbol.toPrimitive;
var Mk,
    Vk = (function (e) {
        function t(t, n, r, i, o) {
            var a;
            return (
                void 0 === r && (r = 'ObservableValue'),
                void 0 === o && (o = MO.default),
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
        PO(t, e);
        var n = t.prototype;
        return (
            (n.dehanceValue = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
                (this.value_, (e = this.prepareNewValue_(e)) !== ox.UNCHANGED && this.setNewValue_(e));
            }),
            (n.prepareNewValue_ = function (e) {
                if (rP(this)) {
                    var t = oP(this, { object: this, type: fP, newValue: e });
                    if (!t) return ox.UNCHANGED;
                    e = t.newValue;
                }
                return (
                    (e = this.enhancer(e, this.value_, this.name_)),
                    this.equals(this.value_, e) ? ox.UNCHANGED : e
                );
            }),
            (n.setNewValue_ = function (e) {
                var t = this.value_;
                ((this.value_ = e),
                    this.reportChanged(),
                    aP(this) && uP(this, { type: fP, object: this, newValue: e, oldValue: t }));
            }),
            (n.get = function () {
                return (this.reportObserved(), this.dehanceValue(this.value_));
            }),
            (n.intercept_ = function (e) {
                return iP(this, e);
            }),
            (n.observe_ = function (e, t) {
                return (
                    t &&
                        e({
                            observableKind: 'value',
                            debugObjectName: this.name_,
                            object: this,
                            type: fP,
                            newValue: this.value_,
                            oldValue: void 0,
                        }),
                    sP(this, e)
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
                return _O(this.get());
            }),
            (n[Ck] = function () {
                return this.valueOf();
            }),
            t
        );
    })(RO);
Mk = Symbol.toPrimitive;
var Dk,
    zk,
    Fk = (function () {
        function e(e) {
            ((this.dependenciesState_ = Dk.NOT_TRACKING_),
                (this.observing_ = []),
                (this.newObserving_ = null),
                (this.isBeingObserved_ = !1),
                (this.isPendingUnobservation_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Dk.UP_TO_DATE_),
                (this.unboundDepsCount_ = 0),
                (this.value_ = new Qk(null)),
                (this.name_ = void 0),
                (this.triggeredBy_ = void 0),
                (this.isComputing_ = !1),
                (this.isRunningSetter_ = !1),
                (this.derivation = void 0),
                (this.setter_ = void 0),
                (this.isTracing_ = zk.NONE),
                (this.scope_ = void 0),
                (this.equals_ = void 0),
                (this.requiresReaction_ = void 0),
                (this.keepAlive_ = void 0),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                e.get || HS(31),
                (this.derivation = e.get),
                (this.name_ = e.name || 'ComputedValue'),
                e.set && (this.setter_ = Wk('ComputedValue-setter', e.set)),
                (this.equals_ = e.equals || (e.compareStructural || e.struct ? MO.structural : MO.default)),
                (this.scope_ = e.context),
                (this.requiresReaction_ = e.requiresReaction),
                (this.keepAlive_ = !!e.keepAlive));
        }
        var t = e.prototype;
        return (
            (t.onBecomeStale_ = function () {
                !(function (e) {
                    if (e.lowestObserverState_ !== Dk.UP_TO_DATE_) return;
                    ((e.lowestObserverState_ = Dk.POSSIBLY_STALE_),
                        e.observers_.forEach(function (e) {
                            e.dependenciesState_ === Dk.UP_TO_DATE_ &&
                                ((e.dependenciesState_ = Dk.POSSIBLY_STALE_), e.onBecomeStale_());
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
                    (this.isComputing_ && HS(32, this.name_, this.derivation),
                    0 !== ox.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                ) {
                    if ((fx(this), Kk(this))) {
                        var e = ox.trackingContext;
                        (this.keepAlive_ && !e && (ox.trackingContext = this),
                            this.trackAndCompute() &&
                                (function (e) {
                                    if (e.lowestObserverState_ === Dk.STALE_) return;
                                    ((e.lowestObserverState_ = Dk.STALE_),
                                        e.observers_.forEach(function (t) {
                                            t.dependenciesState_ === Dk.POSSIBLY_STALE_
                                                ? (t.dependenciesState_ = Dk.STALE_)
                                                : t.dependenciesState_ === Dk.UP_TO_DATE_ &&
                                                  (e.lowestObserverState_ = Dk.UP_TO_DATE_);
                                        }));
                                })(this),
                            (ox.trackingContext = e));
                    }
                } else Kk(this) && (this.warnAboutUntrackedRead_(), lx(), (this.value_ = this.computeValue_(!1)), cx());
                var t = this.value_;
                if (qk(t)) throw t.cause;
                return t;
            }),
            (t.set = function (e) {
                if (this.setter_) {
                    (this.isRunningSetter_ && HS(33, this.name_), (this.isRunningSetter_ = !0));
                    try {
                        this.setter_.call(this.scope_, e);
                    } finally {
                        this.isRunningSetter_ = !1;
                    }
                } else HS(34, this.name_);
            }),
            (t.trackAndCompute = function () {
                var e = this.value_,
                    t = this.dependenciesState_ === Dk.NOT_TRACKING_,
                    n = this.computeValue_(!0),
                    r = t || qk(e) || qk(n) || !this.equals_(e, n);
                return (r && (this.value_ = n), r);
            }),
            (t.computeValue_ = function (e) {
                this.isComputing_ = !0;
                var t,
                    n = Ik(!1);
                if (e) t = Hk(this, this.derivation, this.scope_);
                else if (!0 === ox.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                else
                    try {
                        t = this.derivation.call(this.scope_);
                    } catch (r) {
                        t = new Qk(r);
                    }
                return (Lk(n), (this.isComputing_ = !1), t);
            }),
            (t.suspend_ = function () {
                this.keepAlive_ || (Gk(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
                var n = this,
                    r = !0,
                    i = void 0;
                return (function (e, t) {
                    var n, r, i, o, a;
                    void 0 === t && (t = nO);
                    var s,
                        u = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun';
                    if (t.scheduler || t.delay) {
                        var l = jx(t),
                            c = !1;
                        s = new hx(
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
                    } else
                        s = new hx(
                            u,
                            function () {
                                this.track(f);
                            },
                            t.onError,
                            t.requiresObservable,
                        );
                    function f() {
                        e(s);
                    }
                    (null != (i = t) && null != (o = i.signal) && o.aborted) || s.schedule_();
                    return s.getDisposer_(null == (a = t) ? void 0 : a.signal);
                })(function () {
                    var o = n.get();
                    if (!r || t) {
                        var a = Yk();
                        (e({
                            observableKind: 'computed',
                            debugObjectName: n.name_,
                            type: fP,
                            object: n,
                            newValue: o,
                            oldValue: i,
                        }),
                            Jk(a));
                    }
                    ((r = !1), (i = o));
                });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
                return this.name_ + '[' + this.derivation.toString() + ']';
            }),
            (t.valueOf = function () {
                return _O(this.get());
            }),
            (t[Mk] = function () {
                return this.valueOf();
            }),
            e
        );
    })(),
    $k = vO('ComputedValue', Fk);
(!(function (e) {
    ((e[(e.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
        (e[(e.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
        (e[(e.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
        (e[(e.STALE_ = 2)] = 'STALE_'));
})(Dk || (Dk = {})),
    (function (e) {
        ((e[(e.NONE = 0)] = 'NONE'), (e[(e.LOG = 1)] = 'LOG'), (e[(e.BREAK = 2)] = 'BREAK'));
    })(zk || (zk = {})));
var Qk = function (e) {
    ((this.cause = void 0), (this.cause = e));
};
function qk(e) {
    return e instanceof Qk;
}
function Kk(e) {
    switch (e.dependenciesState_) {
        case Dk.UP_TO_DATE_:
            return !1;
        case Dk.NOT_TRACKING_:
        case Dk.STALE_:
            return !0;
        case Dk.POSSIBLY_STALE_:
            for (var t = Zk(!0), n = Yk(), r = e.observing_, i = r.length, o = 0; o < i; o++) {
                var a = r[o];
                if ($k(a)) {
                    if (ox.disableErrorBoundaries) a.get();
                    else
                        try {
                            a.get();
                        } catch (s) {
                            return (Jk(n), ex(t), !0);
                        }
                    if (e.dependenciesState_ === Dk.STALE_) return (Jk(n), ex(t), !0);
                }
            }
            return (tx(e), Jk(n), ex(t), !1);
    }
}
function Hk(e, t, n) {
    var r = Zk(!0);
    (tx(e),
        (e.newObserving_ = new Array(e.observing_.length + 100)),
        (e.unboundDepsCount_ = 0),
        (e.runId_ = ++ox.runId));
    var i,
        o = ox.trackingDerivation;
    if (((ox.trackingDerivation = e), ox.inBatch++, !0 === ox.disableErrorBoundaries)) i = t.call(n);
    else
        try {
            i = t.call(n);
        } catch (a) {
            i = new Qk(a);
        }
    return (
        ox.inBatch--,
        (ox.trackingDerivation = o),
        (function (e) {
            for (
                var t = e.observing_,
                    n = (e.observing_ = e.newObserving_),
                    r = Dk.UP_TO_DATE_,
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
                (0 === u.diffValue_ && sx(u, e), (u.diffValue_ = 0));
            }
            for (; i--; ) {
                var l = n[i];
                1 === l.diffValue_ && ((l.diffValue_ = 0), ax(l, e));
            }
            r !== Dk.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        ex(r),
        i
    );
}
function Gk(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) sx(t[n], e);
    e.dependenciesState_ = Dk.NOT_TRACKING_;
}
function Xk(e) {
    var t = Yk();
    try {
        return e();
    } finally {
        Jk(t);
    }
}
function Yk() {
    var e = ox.trackingDerivation;
    return ((ox.trackingDerivation = null), e);
}
function Jk(e) {
    ox.trackingDerivation = e;
}
function Zk(e) {
    var t = ox.allowStateReads;
    return ((ox.allowStateReads = e), t);
}
function ex(e) {
    ox.allowStateReads = e;
}
function tx(e) {
    if (e.dependenciesState_ !== Dk.UP_TO_DATE_) {
        e.dependenciesState_ = Dk.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = Dk.UP_TO_DATE_;
    }
}
var nx = function () {
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
    rx = !0,
    ix = !1,
    ox = (function () {
        var e = XS();
        return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (rx = !1),
            e.__mobxGlobals && e.__mobxGlobals.version !== new nx().version && (rx = !1),
            rx
                ? e.__mobxGlobals
                    ? ((e.__mobxInstanceCount += 1),
                      e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                      e.__mobxGlobals)
                    : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new nx()))
                : (setTimeout(function () {
                      ix || HS(35);
                  }, 1),
                  new nx())
        );
    })();
function ax(e, t) {
    (e.observers_.add(t),
        e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_));
}
function sx(e, t) {
    (e.observers_.delete(t), 0 === e.observers_.size && ux(e));
}
function ux(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), ox.pendingUnobservations.push(e));
}
function lx() {
    ox.inBatch++;
}
function cx() {
    if (0 == --ox.inBatch) {
        gx();
        for (var e = ox.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            ((n.isPendingUnobservation_ = !1),
                0 === n.observers_.size &&
                    (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof Fk && n.suspend_()));
        }
        ox.pendingUnobservations = [];
    }
}
function fx(e) {
    var t = ox.trackingDerivation;
    return null !== t
        ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ && ox.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
          e.isBeingObserved_)
        : (0 === e.observers_.size && ox.inBatch > 0 && ux(e), !1);
}
function dx(e) {
    e.lowestObserverState_ !== Dk.STALE_ &&
        ((e.lowestObserverState_ = Dk.STALE_),
        e.observers_.forEach(function (e) {
            (e.dependenciesState_ === Dk.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = Dk.STALE_));
        }));
}
var hx = (function () {
        function e(e, t, n, r) {
            (void 0 === e && (e = 'Reaction'),
                (this.name_ = void 0),
                (this.onInvalidate_ = void 0),
                (this.errorHandler_ = void 0),
                (this.requiresObservable_ = void 0),
                (this.observing_ = []),
                (this.newObserving_ = []),
                (this.dependenciesState_ = Dk.NOT_TRACKING_),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.unboundDepsCount_ = 0),
                (this.isDisposed_ = !1),
                (this.isScheduled_ = !1),
                (this.isTrackPending_ = !1),
                (this.isRunning_ = !1),
                (this.isTracing_ = zk.NONE),
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
                this.isScheduled_ || ((this.isScheduled_ = !0), ox.pendingReactions.push(this), gx());
            }),
            (t.isScheduled = function () {
                return this.isScheduled_;
            }),
            (t.runReaction_ = function () {
                if (!this.isDisposed_) {
                    (lx(), (this.isScheduled_ = !1));
                    var e = ox.trackingContext;
                    if (((ox.trackingContext = this), Kk(this))) {
                        this.isTrackPending_ = !0;
                        try {
                            this.onInvalidate_();
                        } catch (t) {
                            this.reportExceptionInDerivation_(t);
                        }
                    }
                    ((ox.trackingContext = e), cx());
                }
            }),
            (t.track = function (e) {
                if (!this.isDisposed_) {
                    (lx(), (this.isRunning_ = !0));
                    var t = ox.trackingContext;
                    ox.trackingContext = this;
                    var n = Hk(this, e, void 0);
                    ((ox.trackingContext = t),
                        (this.isRunning_ = !1),
                        (this.isTrackPending_ = !1),
                        this.isDisposed_ && Gk(this),
                        qk(n) && this.reportExceptionInDerivation_(n.cause),
                        cx());
                }
            }),
            (t.reportExceptionInDerivation_ = function (e) {
                var t = this;
                if (this.errorHandler_) this.errorHandler_(e, this);
                else {
                    if (ox.disableErrorBoundaries) throw e;
                    var n = "[mobx] uncaught error in '" + this + "'";
                    (ox.suppressReactionErrors || console.error(n, e),
                        ox.globalReactionErrorHandlers.forEach(function (n) {
                            return n(e, t);
                        }));
                }
            }),
            (t.dispose = function () {
                this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (lx(), Gk(this), cx()));
            }),
            (t.getDisposer_ = function (e) {
                var t = this,
                    n = function n() {
                        (t.dispose(), null == e || null == e.removeEventListener || e.removeEventListener('abort', n));
                    };
                return (null == e || null == e.addEventListener || e.addEventListener('abort', n), (n[WO] = this), n);
            }),
            (t.toString = function () {
                return 'Reaction[' + this.name_ + ']';
            }),
            (t.trace = function (e) {}),
            e
        );
    })(),
    px = 100,
    vx = function (e) {
        return e();
    };
function gx() {
    ox.inBatch > 0 || ox.isRunningReactions || vx(mx);
}
function mx() {
    ox.isRunningReactions = !0;
    for (var e = ox.pendingReactions, t = 0; e.length > 0; ) {
        ++t === px && (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
    }
    ox.isRunningReactions = !1;
}
var bx = vO('Reaction', hx);
var yx = 'action',
    _x = 'autoAction',
    wx = '<unnamed action>',
    Sx = FO(yx),
    Ox = FO('action.bound', { bound: !0 }),
    kx = FO(_x, { autoAction: !0 }),
    xx = FO('autoAction.bound', { autoAction: !0, bound: !0 });
function Px(e) {
    return function (t, n) {
        return uO(t)
            ? Wk(t.name || wx, t, e)
            : uO(n)
              ? Wk(t, n, e)
              : NO(n)
                ? (e ? kx : Sx).decorate_20223_(t, n)
                : lO(n)
                  ? BO(t, n, e ? kx : Sx)
                  : lO(t)
                    ? UO(FO(e ? _x : yx, { name: t, autoAction: e }))
                    : void 0;
    };
}
var Ex = Px(!1);
Object.assign(Ex, Sx);
var Ax = Px(!0);
function Tx(e) {
    return uO(e) && !0 === e.isMobxAction;
}
(Object.assign(Ax, kx), (Ex.bound = UO(Ox)), (Ax.bound = UO(xx)));
var Cx = function (e) {
    return e();
};
function jx(e) {
    return e.scheduler
        ? e.scheduler
        : e.delay
          ? function (t) {
                return setTimeout(t, e.delay);
            }
          : Cx;
}
function Ux(e, t, n) {
    var r, i, o, a;
    void 0 === n && (n = nO);
    var s,
        u,
        l,
        c,
        f = null != (r = n.name) ? r : 'Reaction',
        d = Ex(
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
        p = jx(n),
        v = !0,
        g = !1,
        m = n.compareStructural ? MO.structural : n.equals || MO.default,
        b = new hx(
            f,
            function () {
                v || h ? y() : g || ((g = !0), p(y));
            },
            n.onError,
            n.requiresObservable,
        );
    function y() {
        if (((g = !1), !b.isDisposed_)) {
            var t = !1;
            (b.track(function () {
                var n = (function (e, t) {
                    var n = Ik(e);
                    try {
                        return t();
                    } finally {
                        Lk(n);
                    }
                })(!1, function () {
                    return e(b);
                });
                ((t = v || !m(l, n)), (c = l), (l = n));
            }),
                ((v && n.fireImmediately) || (!v && t)) && d(l, c, b),
                (v = !1));
        }
    }
    return (
        (null != (i = n) && null != (o = i.signal) && o.aborted) || b.schedule_(),
        b.getDisposer_(null == (a = n) ? void 0 : a.signal)
    );
}
var Bx = 'onBO',
    Nx = 'onBUO';
function Wx(e, t, n) {
    return Rx(Nx, e, t, n);
}
function Rx(e, t, n, r) {
    var i = YP(t),
        o = uO(r) ? r : n,
        a = e + 'L';
    return (
        i[a] ? i[a].add(o) : (i[a] = new Set([o])),
        function () {
            var e = i[a];
            e && (e.delete(o), 0 === e.size && delete i[a]);
        }
    );
}
var Ix = 'never',
    Lx = 'always',
    Mx = 'observed';
function Vx(e) {
    !0 === e.isolateGlobalState &&
        (function () {
            if (((ox.pendingReactions.length || ox.inBatch || ox.isRunningReactions) && HS(36), (ix = !0), rx)) {
                var e = XS();
                (0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0), (ox = new nx()));
            }
        })();
    var t,
        n,
        r = e.useProxies,
        i = e.enforceActions;
    if (
        (void 0 !== r && (ox.useProxies = r === Lx || (r !== Ix && 'undefined' != typeof Proxy)),
        'ifavailable' === r && (ox.verifyProxies = !0),
        void 0 !== i)
    ) {
        var o = i === Lx ? Lx : i === Mx;
        ((ox.enforceActions = o), (ox.allowStateChanges = !0 !== o && o !== Lx));
    }
    ([
        'computedRequiresReaction',
        'reactionRequiresObservable',
        'observableRequiresReaction',
        'disableErrorBoundaries',
        'safeDescriptors',
    ].forEach(function (t) {
        t in e && (ox[t] = !!e[t]);
    }),
        (ox.allowStateReads = !ox.observableRequiresReaction),
        e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = vx),
            (vx = function (e) {
                return t(function () {
                    return n(e);
                });
            })));
}
function Dx(e, t, n, r) {
    var i = SO(t);
    return (
        eE(function () {
            var t = IP(e, r)[WO];
            yO(i).forEach(function (e) {
                t.extend_(e, i[e], !n || !(e in n) || n[e]);
            });
        }),
        e
    );
}
function zx(e) {
    var t,
        n = { name: e.name_ };
    return (
        e.observing_ &&
            e.observing_.length > 0 &&
            (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(zx)),
        n
    );
}
var Fx = 0;
function $x() {
    this.message = 'FLOW_CANCELLED';
}
$x.prototype = Object.create(Error.prototype);
var Qx = HO('flow'),
    qx = HO('flow.bound', { bound: !0 }),
    Kx = Object.assign(function (e, t) {
        if (NO(t)) return Qx.decorate_20223_(e, t);
        if (lO(t)) return BO(e, t, Qx);
        var n = e,
            r = n.name || '<unnamed flow>',
            i = function () {
                var e,
                    t = arguments,
                    i = ++Fx,
                    o = Ex(r + ' - runid: ' + i + ' - init', n).apply(this, t),
                    a = void 0,
                    s = new Promise(function (t, n) {
                        var s = 0;
                        function u(e) {
                            var t;
                            a = void 0;
                            try {
                                t = Ex(r + ' - runid: ' + i + ' - yield ' + s++, o.next).call(o, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function l(e) {
                            var t;
                            a = void 0;
                            try {
                                t = Ex(r + ' - runid: ' + i + ' - yield ' + s++, o.throw).call(o, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function c(e) {
                            if (!uO(null == e ? void 0 : e.then))
                                return e.done ? t(e.value) : (a = Promise.resolve(e.value)).then(u, l);
                            e.then(c, n);
                        }
                        ((e = n), u(void 0));
                    });
                return (
                    (s.cancel = Ex(r + ' - runid: ' + i + ' - cancel', function () {
                        try {
                            a && Hx(a);
                            var t = o.return(void 0),
                                n = Promise.resolve(t.value);
                            (n.then(sO, sO), Hx(n), e(new $x()));
                        } catch (r) {
                            e(r);
                        }
                    })),
                    s
                );
            };
        return ((i.isMobXFlow = !0), i);
    }, Qx);
function Hx(e) {
    uO(e.cancel) && e.cancel();
}
function Gx(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function Xx(e, t) {
    if (void 0 === t) return $k(e);
    if (!1 === VP(e)) return !1;
    if (!e[WO].values_.has(t)) return !1;
    var n = YP(e, t);
    return $k(n);
}
function Yx(e, t) {
    return Xx(e, t);
}
function Jx(e) {
    return (function (e, t) {
        return !!e && (VP(e) || !!e[WO] || IO(e) || bx(e) || $k(e));
    })(e);
}
function Zx(e, t, n, r) {
    return uO(n)
        ? (function (e, t, n, r) {
              return JP(e, t).observe_(n, r);
          })(e, t, n, r)
        : (function (e, t, n) {
              return JP(e).observe_(t, n);
          })(e, t, n);
}
function eP(e, t) {
    (void 0 === t && (t = void 0), lx());
    try {
        return e.apply(t);
    } finally {
        cx();
    }
}
function tP(e) {
    return e[WO];
}
Kx.bound = UO(qx);
var nP = {
    has: function (e, t) {
        return tP(e).has_(t);
    },
    get: function (e, t) {
        return tP(e).get_(t);
    },
    set: function (e, t, n) {
        var r;
        return !!lO(t) && (null == (r = tP(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
        var n;
        return !!lO(t) && (null == (n = tP(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
        var r;
        return null == (r = tP(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
        return tP(e).ownKeys_();
    },
    preventExtensions: function (e) {
        HS(13);
    },
};
function rP(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
}
function iP(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
        n.push(t),
        aO(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function oP(e, t) {
    var n = Yk();
    try {
        for (
            var r = [].concat(e.interceptors_ || []), i = 0, o = r.length;
            i < o && ((t = r[i](t)) && !t.type && HS(14), t);
            i++
        );
        return t;
    } finally {
        Jk(n);
    }
}
function aP(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
}
function sP(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
        n.push(t),
        aO(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function uP(e, t) {
    var n = Yk(),
        r = e.changeListeners_;
    if (r) {
        for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](t);
        Jk(n);
    }
}
function lP(e, t, n) {
    return (
        eE(function () {
            var r = IP(e, n)[WO];
            (null != t ||
                (t = (function (e) {
                    return (wO(e, jO) || hO(e, jO, xO({}, e[jO])), e[jO]);
                })(e)),
                yO(t).forEach(function (e) {
                    return r.make_(e, t[e]);
                }));
        }),
        e
    );
}
var cP = 'splice',
    fP = 'update',
    dP = {
        get: function (e, t) {
            var n = e[WO];
            return t === WO
                ? n
                : 'length' === t
                  ? n.getArrayLength_()
                  : 'string' != typeof t || isNaN(t)
                    ? wO(vP, t)
                        ? vP[t]
                        : e[t]
                    : n.get_(parseInt(t));
        },
        set: function (e, t, n) {
            var r = e[WO];
            return (
                'length' === t && r.setArrayLength_(n),
                'symbol' == typeof t || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n),
                !0
            );
        },
        preventExtensions: function () {
            HS(15);
        },
    },
    hP = (function () {
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
                (this.atom_ = new RO(e)),
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
                return iP(this, e);
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
                    sP(this, e)
                );
            }),
            (t.getArrayLength_ = function () {
                return (this.atom_.reportObserved(), this.values_.length);
            }),
            (t.setArrayLength_ = function (e) {
                ('number' != typeof e || isNaN(e) || e < 0) && HS('Out of range: ' + e);
                var t = this.values_.length;
                if (e !== t)
                    if (e > t) {
                        for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
                        this.spliceWithArray_(t, 0, n);
                    } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
                (e !== this.lastKnownLength_ && HS(16),
                    (this.lastKnownLength_ += t),
                    this.legacyMode_ && t > 0 && GP(e + t + 1));
            }),
            (t.spliceWithArray_ = function (e, t, n) {
                var r = this;
                this.atom_;
                var i = this.values_.length;
                if (
                    (void 0 === e ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
                    (t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e))),
                    void 0 === n && (n = tO),
                    rP(this))
                ) {
                    var o = oP(this, { object: this.proxy_, type: cP, index: e, removedCount: t, added: n });
                    if (!o) return tO;
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
                    i = aP(this),
                    o =
                        i || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  type: fP,
                                  debugObjectName: this.atom_.name_,
                                  index: e,
                                  newValue: t,
                                  oldValue: n,
                              }
                            : null;
                (this.atom_.reportChanged(), i && uP(this, o));
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    i = aP(this),
                    o =
                        i || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  debugObjectName: this.atom_.name_,
                                  type: cP,
                                  index: e,
                                  removed: n,
                                  added: t,
                                  removedCount: n.length,
                                  addedCount: t.length,
                              }
                            : null;
                (this.atom_.reportChanged(), i && uP(this, o));
            }),
            (t.get_ = function (e) {
                if (!(this.legacyMode_ && e >= this.values_.length))
                    return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]));
                console.warn('[mobx] Out of bounds read: ' + e);
            }),
            (t.set_ = function (e, t) {
                var n = this.values_;
                if ((this.legacyMode_ && e > n.length && HS(17, e, n.length), e < n.length)) {
                    this.atom_;
                    var r = n[e];
                    if (rP(this)) {
                        var i = oP(this, { type: fP, object: this.proxy_, index: e, newValue: t });
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
function pP(e, t, n, r) {
    return (
        void 0 === n && (n = 'ObservableArray'),
        void 0 === r && (r = !1),
        oO(),
        eE(function () {
            var i = new hP(n, t, r, !1);
            pO(i.values_, WO, i);
            var o = new Proxy(i.values_, dP);
            return ((i.proxy_ = o), e && e.length && i.spliceWithArray_(0, 0, e), o);
        })
    );
}
var vP = {
    clear: function () {
        return this.splice(0);
    },
    replace: function (e) {
        var t = this[WO];
        return t.spliceWithArray_(0, t.values_.length, e);
    },
    toJSON: function () {
        return this.slice();
    },
    splice: function (e, t) {
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
        var o = this[WO];
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
        return this[WO].spliceWithArray_(e, t, n);
    },
    push: function () {
        for (var e = this[WO], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(e.values_.length, 0, n), e.values_.length);
    },
    pop: function () {
        return this.splice(Math.max(this[WO].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        for (var e = this[WO], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(0, 0, n), e.values_.length);
    },
    reverse: function () {
        return (ox.trackingDerivation && HS(37, 'reverse'), this.replace(this.slice().reverse()), this);
    },
    sort: function () {
        ox.trackingDerivation && HS(37, 'sort');
        var e = this.slice();
        return (e.sort.apply(e, arguments), this.replace(e), this);
    },
    remove: function (e) {
        var t = this[WO],
            n = t.dehanceValues_(t.values_).indexOf(e);
        return n > -1 && (this.splice(n, 1), !0);
    },
};
function gP(e, t) {
    'function' == typeof Array.prototype[e] && (vP[e] = t(e));
}
function mP(e) {
    return function () {
        var t = this[WO];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments);
    };
}
function bP(e) {
    return function (t, n) {
        var r = this,
            i = this[WO];
        return (
            i.atom_.reportObserved(),
            i.dehanceValues_(i.values_)[e](function (e, i) {
                return t.call(n, e, i, r);
            })
        );
    };
}
function yP(e) {
    return function () {
        var t = this,
            n = this[WO];
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
(gP('at', mP),
    gP('concat', mP),
    gP('flat', mP),
    gP('includes', mP),
    gP('indexOf', mP),
    gP('join', mP),
    gP('lastIndexOf', mP),
    gP('slice', mP),
    gP('toString', mP),
    gP('toLocaleString', mP),
    gP('toSorted', mP),
    gP('toSpliced', mP),
    gP('with', mP),
    gP('every', bP),
    gP('filter', bP),
    gP('find', bP),
    gP('findIndex', bP),
    gP('findLast', bP),
    gP('findLastIndex', bP),
    gP('flatMap', bP),
    gP('forEach', bP),
    gP('map', bP),
    gP('some', bP),
    gP('toReversed', bP),
    gP('reduce', yP),
    gP('reduceRight', yP));
var _P,
    wP,
    SP = vO('ObservableArrayAdministration', hP);
function OP(e) {
    return cO(e) && SP(e[WO]);
}
var kP = {},
    xP = 'add',
    PP = 'delete';
((_P = Symbol.iterator), (wP = Symbol.toStringTag));
var EP,
    AP,
    TP = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = VO),
                void 0 === n && (n = 'ObservableMap'),
                (this.enhancer_ = void 0),
                (this.name_ = void 0),
                (this[WO] = kP),
                (this.data_ = void 0),
                (this.hasMap_ = void 0),
                (this.keysAtom_ = void 0),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = t),
                (this.name_ = n),
                uO(Map) || HS(18),
                eE(function () {
                    ((r.keysAtom_ = LO('ObservableMap.keys()')),
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
                if (!ox.trackingDerivation) return this.has_(e);
                var n = this.hasMap_.get(e);
                if (!n) {
                    var r = (n = new Vk(this.has_(e), DO, 'ObservableMap.key?', !1));
                    (this.hasMap_.set(e, r),
                        Wx(r, function () {
                            return t.hasMap_.delete(e);
                        }));
                }
                return n.get();
            }),
            (t.set = function (e, t) {
                var n = this.has_(e);
                if (rP(this)) {
                    var r = oP(this, { type: n ? fP : xP, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, rP(this)) && !oP(this, { type: PP, object: this, name: e })) return !1;
                if (this.has_(e)) {
                    var n = aP(this),
                        r = n
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: PP,
                                  object: this,
                                  oldValue: this.data_.get(e).value_,
                                  name: e,
                              }
                            : null;
                    return (
                        eP(function () {
                            var n;
                            (t.keysAtom_.reportChanged(),
                                null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                                t.data_.get(e).setNewValue_(void 0),
                                t.data_.delete(e));
                        }),
                        n && uP(this, r),
                        !0
                    );
                }
                return !1;
            }),
            (t.updateValue_ = function (e, t) {
                var n = this.data_.get(e);
                if ((t = n.prepareNewValue_(t)) !== ox.UNCHANGED) {
                    var r = aP(this),
                        i = r
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: fP,
                                  object: this,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), r && uP(this, i));
                }
            }),
            (t.addValue_ = function (e, t) {
                var n = this;
                (this.keysAtom_,
                    eP(function () {
                        var r,
                            i = new Vk(t, n.enhancer_, 'ObservableMap.key', !1);
                        (n.data_.set(e, i),
                            (t = i.value_),
                            null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                            n.keysAtom_.reportChanged());
                    }));
                var r = aP(this),
                    i = r
                        ? {
                              observableKind: 'map',
                              debugObjectName: this.name_,
                              type: xP,
                              object: this,
                              name: e,
                              newValue: t,
                          }
                        : null;
                r && uP(this, i);
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
                return oE({
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
                return oE({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            i = n.value;
                        return { done: r, value: r ? void 0 : [i, e.get(i)] };
                    },
                });
            }),
            (t[_P] = function () {
                return this.entries();
            }),
            (t.forEach = function (e, t) {
                for (var n, r = CO(this); !(n = r()).done; ) {
                    var i = n.value,
                        o = i[0],
                        a = i[1];
                    e.call(t, a, o, this);
                }
            }),
            (t.merge = function (e) {
                var t = this;
                return (
                    CP(e) && (e = new Map(e)),
                    eP(function () {
                        fO(e)
                            ? (function (e) {
                                  var t = Object.keys(e);
                                  if (!bO) return t;
                                  var n = Object.getOwnPropertySymbols(e);
                                  return n.length
                                      ? [].concat(
                                            t,
                                            n.filter(function (t) {
                                                return eO.propertyIsEnumerable.call(e, t);
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
                              : gO(e)
                                ? (e.constructor !== Map && HS(19, e),
                                  e.forEach(function (e, n) {
                                      return t.set(n, e);
                                  }))
                                : null != e && HS(20, e);
                    }),
                    this
                );
            }),
            (t.clear = function () {
                var e = this;
                eP(function () {
                    Xk(function () {
                        for (var t, n = CO(e.keys()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    eP(function () {
                        for (
                            var n,
                                r = (function (e) {
                                    if (gO(e) || CP(e)) return e;
                                    if (Array.isArray(e)) return new Map(e);
                                    if (fO(e)) {
                                        var t = new Map();
                                        for (var n in e) t.set(n, e[n]);
                                        return t;
                                    }
                                    return HS(21, e);
                                })(e),
                                i = new Map(),
                                o = !1,
                                a = CO(t.data_.keys());
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
                        for (var l, c = CO(r.entries()); !(l = c()).done; ) {
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
                                for (var g = t.data_.keys(), m = i.keys(), b = g.next(), y = m.next(); !b.done; ) {
                                    if (b.value !== y.value) {
                                        t.keysAtom_.reportChanged();
                                        break;
                                    }
                                    ((b = g.next()), (y = m.next()));
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
                return sP(this, e);
            }),
            (t.intercept_ = function (e) {
                return iP(this, e);
            }),
            kO(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.keysAtom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: wP,
                    get: function () {
                        return 'Map';
                    },
                },
            ]),
            e
        );
    })(),
    CP = vO('ObservableMap', TP);
var jP = {};
((EP = Symbol.iterator), (AP = Symbol.toStringTag));
var UP = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = VO),
                void 0 === n && (n = 'ObservableSet'),
                (this.name_ = void 0),
                (this[WO] = jP),
                (this.data_ = new Set()),
                (this.atom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = void 0),
                (this.name_ = n),
                uO(Set) || HS(22),
                (this.enhancer_ = function (e, r) {
                    return t(e, r, n);
                }),
                eE(function () {
                    ((r.atom_ = LO(r.name_)), e && r.replace(e));
                }));
        }
        var t = e.prototype;
        return (
            (t.dehanceValue_ = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
                var e = this;
                eP(function () {
                    Xk(function () {
                        for (var t, n = CO(e.data_.values()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.forEach = function (e, t) {
                for (var n, r = CO(this); !(n = r()).done; ) {
                    var i = n.value;
                    e.call(t, i, i, this);
                }
            }),
            (t.add = function (e) {
                var t = this;
                if ((this.atom_, rP(this)) && !oP(this, { type: xP, object: this, newValue: e })) return this;
                if (!this.has(e)) {
                    eP(function () {
                        (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
                    });
                    var n = aP(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: xP,
                                  object: this,
                                  newValue: e,
                              }
                            : null;
                    n && uP(this, r);
                }
                return this;
            }),
            (t.delete = function (e) {
                var t = this;
                if (rP(this) && !oP(this, { type: PP, object: this, oldValue: e })) return !1;
                if (this.has(e)) {
                    var n = aP(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: PP,
                                  object: this,
                                  oldValue: e,
                              }
                            : null;
                    return (
                        eP(function () {
                            (t.atom_.reportChanged(), t.data_.delete(e));
                        }),
                        n && uP(this, r),
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
                return oE({
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
                return oE({
                    next: function () {
                        return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
                    },
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    BP(e) && (e = new Set(e)),
                    eP(function () {
                        Array.isArray(e) || mO(e)
                            ? (t.clear(),
                              e.forEach(function (e) {
                                  return t.add(e);
                              }))
                            : null != e && HS('Cannot initialize set from ' + e);
                    }),
                    this
                );
            }),
            (t.observe_ = function (e, t) {
                return sP(this, e);
            }),
            (t.intercept_ = function (e) {
                return iP(this, e);
            }),
            (t.toJSON = function () {
                return Array.from(this);
            }),
            (t.toString = function () {
                return '[object ObservableSet]';
            }),
            (t[EP] = function () {
                return this.values();
            }),
            kO(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.atom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: AP,
                    get: function () {
                        return 'Set';
                    },
                },
            ]),
            e
        );
    })(),
    BP = vO('ObservableSet', UP),
    NP = Object.create(null),
    WP = 'remove',
    RP = (function () {
        function e(e, t, n, r) {
            (void 0 === t && (t = new Map()),
                void 0 === r && (r = uk),
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
                (this.keysAtom_ = new RO('ObservableObject.keys')),
                (this.isPlainObject_ = fO(this.target_)));
        }
        var t = e.prototype;
        return (
            (t.getObservablePropValue_ = function (e) {
                return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
                var n = this.values_.get(e);
                if (n instanceof Fk) return (n.set(t), !0);
                if (rP(this)) {
                    var r = oP(this, { type: fP, object: this.proxy_ || this.target_, name: e, newValue: t });
                    if (!r) return null;
                    t = r.newValue;
                }
                if ((t = n.prepareNewValue_(t)) !== ox.UNCHANGED) {
                    var i = aP(this),
                        o = i
                            ? {
                                  type: fP,
                                  observableKind: 'object',
                                  debugObjectName: this.name_,
                                  object: this.proxy_ || this.target_,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), i && uP(this, o));
                }
                return !0;
            }),
            (t.get_ = function (e) {
                return (ox.trackingDerivation && !wO(this.target_, e) && this.has_(e), this.target_[e]);
            }),
            (t.set_ = function (e, t, n) {
                return (
                    void 0 === n && (n = !1),
                    wO(this.target_, e)
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
                if (!ox.trackingDerivation) return e in this.target_;
                this.pendingKeys_ || (this.pendingKeys_ = new Map());
                var t = this.pendingKeys_.get(e);
                return (
                    t ||
                        ((t = new Vk(e in this.target_, DO, 'ObservableObject.key?', !1)), this.pendingKeys_.set(e, t)),
                    t.get()
                );
            }),
            (t.make_ = function (e, t) {
                if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                    if (!(e in this.target_)) {
                        var n;
                        if (null != (n = this.target_[jO]) && n[e]) return;
                        HS(1, t.annotationType_, this.name_ + '.' + e.toString());
                    }
                    for (var r = this.target_; r && r !== eO; ) {
                        var i = JS(r, e);
                        if (i) {
                            var o = t.make_(this, e, i, r);
                            if (0 === o) return;
                            if (1 === o) break;
                        }
                        r = Object.getPrototypeOf(r);
                    }
                    DP(this, t, e);
                }
            }),
            (t.extend_ = function (e, t, n, r) {
                if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                    return this.defineProperty_(e, t, r);
                var i = n.extend_(this, e, t, r);
                return (i && DP(this, n, e), i);
            }),
            (t.defineProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    lx();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (rP(this)) {
                        var i = oP(this, { object: this.proxy_ || this.target_, name: e, type: xP, newValue: t.value });
                        if (!i) return null;
                        var o = i.newValue;
                        t.value !== o && (t = xO({}, t, { value: o }));
                    }
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                    } else ZS(this.target_, e, t);
                    this.notifyPropertyAddition_(e, t.value);
                } finally {
                    cx();
                }
                return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
                (void 0 === r && (r = !1), this.keysAtom_);
                try {
                    lx();
                    var i = this.delete_(e);
                    if (!i) return i;
                    if (rP(this)) {
                        var o = oP(this, { object: this.proxy_ || this.target_, name: e, type: xP, newValue: t });
                        if (!o) return null;
                        t = o.newValue;
                    }
                    var a = MP(e),
                        s = {
                            configurable: !ox.safeDescriptors || this.isPlainObject_,
                            enumerable: !0,
                            get: a.get,
                            set: a.set,
                        };
                    if (r) {
                        if (!Reflect.defineProperty(this.target_, e, s)) return !1;
                    } else ZS(this.target_, e, s);
                    var u = new Vk(t, n, 'ObservableObject.key', !1);
                    (this.values_.set(e, u), this.notifyPropertyAddition_(e, u.value_));
                } finally {
                    cx();
                }
                return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    lx();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (rP(this))
                        if (!oP(this, { object: this.proxy_ || this.target_, name: e, type: xP, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var i = MP(e),
                        o = {
                            configurable: !ox.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: i.get,
                            set: i.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, o)) return !1;
                    } else ZS(this.target_, e, o);
                    (this.values_.set(e, new Fk(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    cx();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !wO(this.target_, e))) return !0;
                if (rP(this) && !oP(this, { object: this.proxy_ || this.target_, name: e, type: WP })) return null;
                try {
                    var n, r;
                    lx();
                    var i,
                        o = aP(this),
                        a = this.values_.get(e),
                        s = void 0;
                    if (!a && o) s = null == (i = JS(this.target_, e)) ? void 0 : i.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (a && (this.values_.delete(e), a instanceof Vk && (s = a.value_), dx(a)),
                        this.keysAtom_.reportChanged(),
                        null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
                        o)
                    ) {
                        var u = {
                            type: WP,
                            observableKind: 'object',
                            object: this.proxy_ || this.target_,
                            debugObjectName: this.name_,
                            oldValue: s,
                            name: e,
                        };
                        (0, o && uP(this, u));
                    }
                } finally {
                    cx();
                }
                return !0;
            }),
            (t.observe_ = function (e, t) {
                return sP(this, e);
            }),
            (t.intercept_ = function (e) {
                return iP(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
                var n,
                    r,
                    i = aP(this);
                if (i) {
                    var o = i
                        ? {
                              type: xP,
                              observableKind: 'object',
                              debugObjectName: this.name_,
                              object: this.proxy_ || this.target_,
                              name: e,
                              newValue: t,
                          }
                        : null;
                    i && uP(this, o);
                }
                (null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(!0),
                    this.keysAtom_.reportChanged());
            }),
            (t.ownKeys_ = function () {
                return (this.keysAtom_.reportObserved(), yO(this.target_));
            }),
            (t.keys_ = function () {
                return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
            }),
            e
        );
    })();
function IP(e, t) {
    var n;
    if (wO(e, WO)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
        i = new RP(
            e,
            new Map(),
            String(r),
            (function (e) {
                var t;
                return e ? (null != (t = e.defaultDecorator) ? t : lk(e)) : void 0;
            })(t),
        );
    return (hO(e, WO, i), e);
}
var LP = vO('ObservableObjectAdministration', RP);
function MP(e) {
    return (
        NP[e] ||
        (NP[e] = {
            get: function () {
                return this[WO].getObservablePropValue_(e);
            },
            set: function (t) {
                return this[WO].setObservablePropValue_(e, t);
            },
        })
    );
}
function VP(e) {
    return !!cO(e) && LP(e[WO]);
}
function DP(e, t, n) {
    var r;
    null == (r = e.target_[jO]) || delete r[n];
}
var zP = KP(0),
    FP = (function () {
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
    $P = 0,
    QP = function () {};
!(function (e, t) {
    Object.setPrototypeOf
        ? Object.setPrototypeOf(e.prototype, t)
        : void 0 !== e.prototype.__proto__
          ? (e.prototype.__proto__ = t)
          : (e.prototype = t);
})(QP, Array.prototype);
var qP = (function (e, t, n) {
    function r(t, n, r, i) {
        var o;
        return (
            void 0 === r && (r = 'ObservableArray'),
            void 0 === i && (i = !1),
            (o = e.call(this) || this),
            eE(function () {
                var e = new hP(r, n, i, !0);
                ((e.proxy_ = AO(o)),
                    pO(AO(o), WO, e),
                    t && t.length && o.spliceWithArray(0, 0, t),
                    FP && Object.defineProperty(AO(o), '0', zP));
            }),
            o
        );
    }
    PO(r, e);
    var i = r.prototype;
    return (
        (i.concat = function () {
            this[WO].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return Array.prototype.concat.apply(
                this.slice(),
                t.map(function (e) {
                    return OP(e) ? e.slice() : e;
                }),
            );
        }),
        (i[n] = function () {
            var e = this,
                t = 0;
            return oE({
                next: function () {
                    return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
                },
            });
        }),
        kO(r, [
            {
                key: 'length',
                get: function () {
                    return this[WO].getArrayLength_();
                },
                set: function (e) {
                    this[WO].setArrayLength_(e);
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
})(QP, Symbol.toStringTag, Symbol.iterator);
function KP(e) {
    return {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this[WO].get_(e);
        },
        set: function (t) {
            this[WO].set_(e, t);
        },
    };
}
function HP(e) {
    ZS(qP.prototype, '' + e, KP(e));
}
function GP(e) {
    if (e > $P) {
        for (var t = $P; t < e + 100; t++) HP(t);
        $P = e;
    }
}
function XP(e, t, n) {
    return new qP(e, t, n);
}
function YP(e, t) {
    if ('object' == typeof e && null !== e) {
        if (OP(e)) return (void 0 !== t && HS(23), e[WO].atom_);
        if (BP(e)) return e.atom_;
        if (CP(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return (n || HS(25, t, ZP(e)), n);
        }
        if (VP(e)) {
            if (!t) return HS(26);
            var r = e[WO].values_.get(t);
            return (r || HS(27, t, ZP(e)), r);
        }
        if (IO(e) || $k(e) || bx(e)) return e;
    } else if (uO(e) && bx(e[WO])) return e[WO];
    HS(28);
}
function JP(e, t) {
    return (
        e || HS(29),
        void 0 !== t ? JP(YP(e, t)) : IO(e) || $k(e) || bx(e) || CP(e) || BP(e) ? e : e[WO] ? e[WO] : void HS(24, e)
    );
}
function ZP(e, t) {
    var n;
    if (void 0 !== t) n = YP(e, t);
    else {
        if (Tx(e)) return e.name;
        n = VP(e) || CP(e) || BP(e) ? JP(e) : YP(e);
    }
    return n.name_;
}
function eE(e) {
    var t = Yk(),
        n = Ik(!0);
    lx();
    try {
        return e();
    } finally {
        (cx(), Lk(n), Jk(t));
    }
}
(Object.entries(vP).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && hO(qP.prototype, t, n);
}),
    GP(1e3));
var tE = eO.toString;
function nE(e, t, n) {
    return (void 0 === n && (n = -1), rE(e, t, n));
}
function rE(e, t, n, r, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var o = typeof e;
    if ('function' !== o && 'object' !== o && 'object' != typeof t) return !1;
    var a = tE.call(e);
    if (a !== tE.call(t)) return !1;
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
    ((e = iE(e)), (t = iE(t)));
    var s = '[object Array]' === a;
    if (!s) {
        if ('object' != typeof e || 'object' != typeof t) return !1;
        var u = e.constructor,
            l = t.constructor;
        if (
            u !== l &&
            !(uO(u) && u instanceof u && uO(l) && l instanceof l) &&
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
        for (; c--; ) if (!rE(e[c], t[c], n - 1, r, i)) return !1;
    } else {
        var f,
            d = Object.keys(e);
        if (((c = d.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (!wO(t, (f = d[c])) || !rE(e[f], t[f], n - 1, r, i)) return !1;
    }
    return (r.pop(), i.pop(), !0);
}
function iE(e) {
    return OP(e) ? e.slice() : gO(e) || CP(e) || mO(e) || BP(e) ? Array.from(e.entries()) : e;
}
function oE(e) {
    return ((e[Symbol.iterator] = aE), e);
}
function aE() {
    return this;
}
if (
    (['Symbol', 'Map', 'Set'].forEach(function (e) {
        void 0 === XS()[e] && HS("MobX requires global '" + e + "' to be available or polyfilled");
    }),
    'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
                return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
            },
            extras: { getDebugName: ZP },
            $mobx: WO,
        }),
    !M.useState)
)
    throw new Error('mobx-react-lite requires React with Hooks support');
if (!lP) throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
function sE(e) {
    e();
}
function uE(e) {
    return zx(YP(e, t));
    var t;
}
var lE = new ((function () {
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
    cE = { exports: {} },
    fE = {},
    dE = M;
var hE =
        'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    pE = dE.useState,
    vE = dE.useEffect,
    gE = dE.useLayoutEffect,
    mE = dE.useDebugValue;
function bE(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !hE(e, n);
    } catch (r) {
        return !0;
    }
}
var yE =
    'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
              return t();
          }
        : function (e, t) {
              var n = t(),
                  r = pE({ inst: { value: n, getSnapshot: t } }),
                  i = r[0].inst,
                  o = r[1];
              return (
                  gE(
                      function () {
                          ((i.value = n), (i.getSnapshot = t), bE(i) && o({ inst: i }));
                      },
                      [e, n, t],
                  ),
                  vE(
                      function () {
                          return (
                              bE(i) && o({ inst: i }),
                              e(function () {
                                  bE(i) && o({ inst: i });
                              })
                          );
                      },
                      [e],
                  ),
                  mE(n),
                  n
              );
          };
((fE.useSyncExternalStore = void 0 !== dE.useSyncExternalStore ? dE.useSyncExternalStore : yE), (cE.exports = fE));
var _E,
    wE,
    SE = cE.exports;
function OE(e) {
    e.reaction = new hx('observer'.concat(e.name), function () {
        var t;
        ((e.stateVersion = Symbol()), null === (t = e.onStoreChange) || void 0 === t || t.call(e));
    });
}
var kE = 'function' == typeof Symbol && Symbol.for,
    xE =
        null !==
            (wE =
                null === (_E = Object.getOwnPropertyDescriptor(function () {}, 'name')) || void 0 === _E
                    ? void 0
                    : _E.configurable) &&
        void 0 !== wE &&
        wE,
    PE = kE
        ? Symbol.for('react.forward_ref')
        : 'function' == typeof M.forwardRef &&
          M.forwardRef(function (e) {
              return null;
          }).$$typeof,
    EE = kE
        ? Symbol.for('react.memo')
        : 'function' == typeof M.memo &&
          M.memo(function (e) {
              return null;
          }).$$typeof;
function AE(e, t) {
    if (EE && e.$$typeof === EE)
        throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
        );
    var n = (void 0, !1),
        r = e,
        i = e.displayName || e.name;
    if (PE && e.$$typeof === PE && ((n = !0), 'function' != typeof (r = e.render)))
        throw new Error('[mobx-react-lite] `render` property of ForwardRef was not a function');
    var o = function (e, t) {
        return (function (e, t) {
            void 0 === t && (t = 'observed');
            var n = V.useRef(null);
            if (!n.current) {
                var r = {
                    reaction: null,
                    onStoreChange: null,
                    stateVersion: Symbol(),
                    name: t,
                    subscribe: function (e) {
                        return (
                            lE.unregister(r),
                            (r.onStoreChange = e),
                            r.reaction || (OE(r), (r.stateVersion = Symbol())),
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
                (a.reaction || (OE(a), lE.register(n, a, a)),
                V.useDebugValue(a.reaction, uE),
                SE.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot),
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
        xE && Object.defineProperty(o, 'name', { value: e.name, writable: !0, configurable: !0 }),
        e.contextTypes && (o.contextTypes = e.contextTypes),
        n && (o = M.forwardRef(o)),
        (function (e, t) {
            Object.keys(e).forEach(function (n) {
                CE[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
            });
        })(e, (o = M.memo(o))),
        o
    );
}
var TE,
    CE = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function jE(e, t) {
    (void 0 === t && (t = 'Illegal state'),
        e ||
            (function (e) {
                throw new Error('[mobx-utils] ' + e);
            })(t));
}
((TE = Mf.unstable_batchedUpdates) || (TE = sE), Vx({ reactionScheduler: TE }), lE.finalizeAllImmediately);
var UE = function (e) {
        return e && e !== Object.prototype && Object.getOwnPropertyNames(e).concat(UE(Object.getPrototypeOf(e)) || []);
    },
    BE = function (e) {
        return (function (e) {
            var t = UE(e);
            return t.filter(function (e, n) {
                return t.indexOf(e) === n;
            });
        })(e).filter(function (e) {
            return 'constructor' !== e && !~e.indexOf('__');
        });
    },
    NE = 'pending',
    WE = 'fulfilled',
    RE = 'rejected';
function IE(e) {
    switch (this.state) {
        case NE:
            return e.pending && e.pending(this.value);
        case RE:
            return e.rejected && e.rejected(this.value);
        case WE:
            return e.fulfilled ? e.fulfilled(this.value) : this.value;
    }
}
function LE(e, t) {
    if (
        (jE(arguments.length <= 2, 'fromPromise expects up to two arguments'),
        jE(
            'function' == typeof e || ('object' == typeof e && e && 'function' == typeof e.then),
            'Please pass a promise or function to fromPromise',
        ),
        !0 === e.isPromiseBasedObservable)
    )
        return e;
    'function' == typeof e && (e = new Promise(e));
    var n = e;
    (e.then(
        Ex('observableFromPromise-resolve', function (e) {
            ((n.value = e), (n.state = WE));
        }),
        Ex('observableFromPromise-reject', function (e) {
            ((n.value = e), (n.state = RE));
        }),
    ),
        (n.isPromiseBasedObservable = !0),
        (n.case = IE));
    var r = !t || (t.state !== WE && t.state !== NE) ? void 0 : t.value;
    return (Dx(n, { value: r, state: NE }, {}, { deep: !1 }), n);
}
!(function (e) {
    ((e.reject = Ex('fromPromise.reject', function (t) {
        var n = e(Promise.reject(t));
        return ((n.state = RE), (n.value = t), n);
    })),
        (e.resolve = Ex('fromPromise.resolve', function (t) {
            void 0 === t && (t = void 0);
            var n = e(Promise.resolve(t));
            return ((n.state = WE), (n.value = t), n);
        })));
})(LE || (LE = {}));
var ME = function (e, t, n, r) {
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
            lP(this),
            (function (e) {
                Rk(e.name, !1, e, this, void 0);
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
        ME([xk.ref], e.prototype, 'current', void 0),
        ME([Ex.bound], e.prototype, 'next', null),
        ME([Ex.bound], e.prototype, 'complete', null),
        ME([Ex.bound], e.prototype, 'error', null));
})();
var VE = function () {
        return (
            (VE =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            VE.apply(this, arguments)
        );
    },
    DE = function (e, t, n, r) {
        var i,
            o = arguments.length,
            a = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return (o > 3 && a && Object.defineProperty(t, n, a), a);
    },
    zE = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
!(function () {
    function e(e) {
        var t = this;
        (Object.defineProperty(this, 'model', { enumerable: !0, configurable: !0, writable: !0, value: e }),
            Object.defineProperty(this, 'localValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: xk.map({}),
            }),
            Object.defineProperty(this, 'localComputedValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: xk.map({}),
            }),
            Object.defineProperty(this, 'isPropertyDirty', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    return t.localValues.has(e);
                },
            }),
            lP(this),
            jE(VP(e), 'createViewModel expects an observable object'));
        var n = BE(this);
        BE(e).forEach(function (r) {
            var i;
            if (!n.includes(r) && r !== WO && '__mobxDidRunLazyInitializers' !== r) {
                if (
                    (jE(
                        -1 === zE.indexOf(r),
                        'The propertyname ' + r + ' is reserved and cannot be used with viewModels',
                    ),
                    Yx(e, r))
                ) {
                    var o = JP(e, r),
                        a = o.derivation.bind(t),
                        s = null === (i = o.setter_) || void 0 === i ? void 0 : i.bind(t);
                    t.localComputedValues.set(r, Tk(a, { set: s }));
                }
                var u = Object.getOwnPropertyDescriptor(e, r),
                    l = u ? { enumerable: u.enumerable } : {};
                Object.defineProperty(
                    t,
                    r,
                    VE(VE({}, l), {
                        configurable: !0,
                        get: function () {
                            return Yx(e, r)
                                ? t.localComputedValues.get(r).get()
                                : t.isPropertyDirty(r)
                                  ? t.localValues.get(r)
                                  : t.model[r];
                        },
                        set: Ex(function (n) {
                            Yx(e, r)
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
                VP(e)
                    ? e[WO].keys_()
                    : CP(e) || BP(e)
                      ? Array.from(e.keys())
                      : OP(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void HS(5)).forEach(function (e) {
                    var n = t.localValues.get(e),
                        r = t.model[e];
                    OP(r) ? r.replace(n) : CP(r) ? (r.clear(), r.merge(n)) : Xx(n) || (t.model[e] = n);
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
        DE([Tk], e.prototype, 'isDirty', null),
        DE([Tk], e.prototype, 'changedValues', null),
        DE([Ex.bound], e.prototype, 'submit', null),
        DE([Ex.bound], e.prototype, 'reset', null),
        DE([Ex.bound], e.prototype, 'resetProperty', null));
})();
var FE = (function () {
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
            (l._disposeBaseObserver = Zx(l._base, function (e) {
                if ('splice' === e.type)
                    eP(function () {
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
                    eP(function () {
                        (l._removeItem(e.oldValue), l._addItem(e.newValue));
                    });
                }
            })),
            l
        );
    }
    (FE(t, e),
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
                        ((n = xk([], { name: 'GroupArray[' + this._keyToName(t) + ']', deep: !1 })),
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
                        reaction: Ux(
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
})(TP);
var $E = (function () {
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
    QE = (function () {
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
                    return (this.last && (this.last.isDisposed = !0), (this.last = new $E(this.store, e)));
                },
            }),
            e
        );
    })(),
    qE = function () {
        return (
            (qE =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            qE.apply(this, arguments)
        );
    };
function KE(e, t) {
    if ((void 0 === t && (t = !1), Tx(e))) throw new Error("computedFn shouldn't be used on actions");
    var n = !1,
        r = 0,
        i = 'boolean' == typeof t ? { keepAlive: t } : t,
        o = new QE();
    return function () {
        for (var t = this, a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
        var u,
            l = o.entry(a);
        if (l.exists()) return l.get().get();
        if (!i.keepAlive && null === ox.trackingDerivation)
            return (
                !n &&
                    ox.computedRequiresReaction &&
                    (console.warn(
                        "invoking a computedFn from outside an reactive context won't be memoized, unless keepAlive is set",
                    ),
                    (n = !0)),
                e.apply(this, a)
            );
        var c = Tk(
            function () {
                return (u = e.apply(t, a));
            },
            qE(qE({}, i), { name: 'computedFn(' + (i.name || e.name) + '#' + ++r + ')' }),
        );
        return (
            l.set(c),
            i.keepAlive ||
                Wx(c, function () {
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
export {
    V as R,
    ge as a,
    me as b,
    Te as c,
    ve as d,
    Ff as e,
    kp as f,
    je as g,
    Ub as h,
    ey as i,
    H as j,
    KS as k,
    yy as l,
    AE as m,
    CS as n,
    wh as o,
    xk as p,
    KE as q,
    M as r,
    Ex as s,
    Hh as u,
};
