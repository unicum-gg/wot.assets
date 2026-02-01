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
    y = Symbol.iterator;
var g = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    m = Object.assign,
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
var x = (S.prototype = new w());
((x.constructor = S), m(x, _.prototype), (x.isPureReactComponent = !0));
var k = Array.isArray,
    O = Object.prototype.hasOwnProperty,
    E = { current: null },
    P = { key: !0, ref: !0, __self: !0, __source: !0 };
function C(e, t, n) {
    var r,
        i = {},
        a = null,
        s = null;
    if (null != t)
        for (r in (void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (a = '' + t.key), t))
            O.call(t, r) && !P.hasOwnProperty(r) && (i[r] = t[r]);
    var u = arguments.length - 2;
    if (1 === u) i.children = n;
    else if (1 < u) {
        for (var l = Array(u), c = 0; c < u; c++) l[c] = arguments[c + 2];
        i.children = l;
    }
    if (e && e.defaultProps) for (r in (u = e.defaultProps)) void 0 === i[r] && (i[r] = u[r]);
    return { $$typeof: o, type: e, key: a, ref: s, props: i, _owner: E.current };
}
function A(e) {
    return 'object' == typeof e && null !== e && e.$$typeof === o;
}
var T = /\/+/g;
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
function j(e, t, n, r, i) {
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
            (e = '' === r ? '.' + N(u, 0) : r),
            k(i)
                ? ((n = ''),
                  null != e && (n = e.replace(T, '$&/') + '/'),
                  j(i, t, n, '', function (e) {
                      return e;
                  }))
                : null != i &&
                  (A(i) &&
                      (i = (function (e, t) {
                          return { $$typeof: o, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                      })(i, n + (!i.key || (u && u.key === i.key) ? '' : ('' + i.key).replace(T, '$&/') + '/') + e)),
                  t.push(i)),
            1
        );
    if (((u = 0), (r = '' === r ? '.' : r + ':'), k(e)))
        for (var l = 0; l < e.length; l++) {
            var c = r + N((s = e[l]), l);
            u += j(s, t, n, c, i);
        }
    else if (
        ((c = (function (e) {
            return null === e || 'object' != typeof e
                ? null
                : 'function' == typeof (e = (y && e[y]) || e['@@iterator'])
                  ? e
                  : null;
        })(e)),
        'function' == typeof c)
    )
        for (e = c.call(e), l = 0; !(s = e.next()).done; ) u += j((s = s.value), t, n, (c = r + N(s, l++)), i);
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
function R(e, t, n) {
    if (null == e) return e;
    var r = [],
        i = 0;
    return (
        j(e, r, '', '', function (e) {
            return t.call(n, e, i++);
        }),
        r
    );
}
function I(e) {
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
var L = { current: null },
    D = { transition: null },
    z = { ReactCurrentDispatcher: L, ReactCurrentBatchConfig: D, ReactCurrentOwner: E };
function M() {
    throw Error('act(...) is not supported in production builds of React.');
}
((i.Children = {
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
    (i.Component = _),
    (i.Fragment = s),
    (i.Profiler = l),
    (i.PureComponent = S),
    (i.StrictMode = u),
    (i.Suspense = h),
    (i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
    (i.act = M),
    (i.cloneElement = function (e, t, n) {
        if (null == e)
            throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
        var r = m({}, e.props),
            i = e.key,
            a = e.ref,
            s = e._owner;
        if (null != t) {
            if (
                (void 0 !== t.ref && ((a = t.ref), (s = E.current)),
                void 0 !== t.key && (i = '' + t.key),
                e.type && e.type.defaultProps)
            )
                var u = e.type.defaultProps;
            for (l in t) O.call(t, l) && !P.hasOwnProperty(l) && (r[l] = void 0 === t[l] && void 0 !== u ? u[l] : t[l]);
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
    (i.createElement = C),
    (i.createFactory = function (e) {
        var t = C.bind(null, e);
        return ((t.type = e), t);
    }),
    (i.createRef = function () {
        return { current: null };
    }),
    (i.forwardRef = function (e) {
        return { $$typeof: d, render: e };
    }),
    (i.isValidElement = A),
    (i.lazy = function (e) {
        return { $$typeof: v, _payload: { _status: -1, _result: e }, _init: I };
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
    (i.unstable_act = M),
    (i.useCallback = function (e, t) {
        return L.current.useCallback(e, t);
    }),
    (i.useContext = function (e) {
        return L.current.useContext(e);
    }),
    (i.useDebugValue = function () {}),
    (i.useDeferredValue = function (e) {
        return L.current.useDeferredValue(e);
    }),
    (i.useEffect = function (e, t) {
        return L.current.useEffect(e, t);
    }),
    (i.useId = function () {
        return L.current.useId();
    }),
    (i.useImperativeHandle = function (e, t, n) {
        return L.current.useImperativeHandle(e, t, n);
    }),
    (i.useInsertionEffect = function (e, t) {
        return L.current.useInsertionEffect(e, t);
    }),
    (i.useLayoutEffect = function (e, t) {
        return L.current.useLayoutEffect(e, t);
    }),
    (i.useMemo = function (e, t) {
        return L.current.useMemo(e, t);
    }),
    (i.useReducer = function (e, t, n) {
        return L.current.useReducer(e, t, n);
    }),
    (i.useRef = function (e) {
        return L.current.useRef(e);
    }),
    (i.useState = function (e) {
        return L.current.useState(e);
    }),
    (i.useSyncExternalStore = function (e, t, n) {
        return L.current.useSyncExternalStore(e, t, n);
    }),
    (i.useTransition = function () {
        return L.current.useTransition();
    }),
    (i.version = '18.3.1'),
    (r.exports = i));
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
    q = Object.prototype.hasOwnProperty,
    H = U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    W = { key: !0, ref: !0, __self: !0, __source: !0 };
function K(e, t, n) {
    var r,
        i = {},
        o = null,
        a = null;
    for (r in (void 0 !== n && (o = '' + n), void 0 !== t.key && (o = '' + t.key), void 0 !== t.ref && (a = t.ref), t))
        q.call(t, r) && !W.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
    return { $$typeof: B, type: e, key: o, ref: a, props: i, _owner: H.current };
}
((n.Fragment = $), (n.jsx = K), (n.jsxs = K), (t.exports = n));
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
                    for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
            }),
        X.apply(this, arguments)
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
        function t(t, n, r, i) {
            return (
                e.call(this, ''.concat(t, ': expected ').concat(n, ' to be ').concat(r, ', but got ').concat(i, '.')) ||
                this
            );
        }
        return (
            Y(t, e),
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
        return (Y(t, e), t);
    })(ee),
    re = (function (e) {
        function t(t, n) {
            var r = t.toString(),
                i = "Could not register '".concat(r, "'.");
            return (n && (i += ' '.concat(n)), e.call(this, i) || this);
        }
        return (Y(t, e), t);
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
function ye(e, t) {
    if (!he(e)) throw new te('asFunction', 'fn', 'function', e);
    t = we({ lifetime: oe.TRANSIENT }, t, e[pe]);
    var n = ke(e);
    return be(me(X({ resolve: n }, t)));
}
function ge(e, t) {
    if (!he(e)) throw new te('asClass', 'Type', 'class', e);
    t = we({ lifetime: oe.TRANSIENT }, t, e[pe]);
    var n = ke(function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return Reflect.construct(e, t);
    }, e);
    return be(me(X(X({}, t), { resolve: n })));
}
function me(e) {
    function t(e) {
        return me(X(X({}, this), { lifetime: e }));
    }
    function n(e) {
        return me(X(X({}, this), { injectionMode: e }));
    }
    return Se(e, {
        setLifetime: t,
        inject: function (e) {
            return me(X(X({}, this), { injector: e }));
        },
        transient: _e(t, oe.TRANSIENT),
        scoped: _e(t, oe.SCOPED),
        singleton: _e(t, oe.SINGLETON),
        setInjectionMode: n,
        proxy: _e(n, ie.PROXY),
        classic: _e(n, ie.CLASSIC),
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
    return Object.assign.apply(Object, Z([{}, e], t, !1));
}
function Se(e, t) {
    return X(X({}, e), t);
}
function xe(e, t) {
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
    var n = Oe(t);
    return function (t) {
        if ((this.injectionMode || t.options.injectionMode || ie.PROXY) !== ie.CLASSIC) {
            var r = this.injector ? xe(t, this.injector) : t.cradle;
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
function Oe(e) {
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
        return 'function' == typeof n && n !== Function.prototype ? Oe(n) : [];
    }
    return t;
}
var Ee = Symbol('familyTree'),
    Pe = Symbol('rollUpRegistrations'),
    Ce = 'AwilixContainerCradle';
function Ae(e) {
    return (void 0 === e && (e = {}), Te(e));
}
function Te(e, t, n) {
    var r;
    e = X({ injectionMode: ie.PROXY, strict: !1 }, e);
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
                    return Te(e, s, i);
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
                        (de(e) ? ge(e, t) : ye(e, t)).resolve(s)
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
            })[Pe] = f),
            Object.defineProperty(r, 'registrations', {
                get: function () {
                    return f();
                },
                enumerable: !1,
                configurable: !0,
            }),
            r),
        u = t ? [s].concat(t[Ee]) : [s];
    s[Ee] = u;
    var l,
        c = (l = u)[l.length - 1];
    return s;
    function f() {
        return X(X({}, t && t[Pe]()), o);
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
            if ('constructor' === t) return Ae;
            if (!r) {
                switch (t) {
                    case 'inspect':
                    case 'toString':
                        return h;
                    case Symbol.toStringTag:
                        return Ce;
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
var Ne = {},
    je = { exports: {} },
    Re = {},
    Ie = { exports: {} },
    Le = {};
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
            if (null !== n(u)) ((p = !0), j(w));
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
        x = !1,
        k = null,
        O = -1,
        E = 5,
        P = -1;
    function C() {
        return !(e.unstable_now() - P < E);
    }
    function A() {
        if (null !== k) {
            var t = e.unstable_now();
            P = t;
            var n = !0;
            try {
                n = k(!0, t);
            } finally {
                n ? S() : ((x = !1), (k = null));
            }
        } else x = !1;
    }
    if ('function' == typeof m)
        S = function () {
            m(A);
        };
    else if ('undefined' != typeof MessageChannel) {
        var T = new MessageChannel(),
            N = T.port2;
        ((T.port1.onmessage = A),
            (S = function () {
                N.postMessage(null);
            }));
    } else
        S = function () {
            y(A, 0);
        };
    function j(e) {
        ((k = e), x || ((x = !0), S()));
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
            p || h || ((p = !0), j(w));
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
                    : ((r.sortIndex = s), t(u, r), p || h || ((p = !0), j(w))),
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
})(Le),
    (Ie.exports = Le));
var De = Ie.exports,
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
    Ue = {};
function Be(e, t) {
    ($e(e, t), $e(e + 'Capture', t));
}
function $e(e, t) {
    for (Ue[e] = t, e = 0; e < t.length; e++) Fe.add(t[e]);
}
var qe = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    He = Object.prototype.hasOwnProperty,
    We =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ke = {},
    Qe = {};
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
function Je(e) {
    return e[1].toUpperCase();
}
function Ze(e, t, n, r) {
    var i = Ye.hasOwnProperty(t) ? Ye[t] : null;
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
                  return !!He.call(Qe, e) || (!He.call(Ke, e) && (We.test(e) ? (Qe[e] = !0) : ((Ke[e] = !0), !1)));
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
        var t = e.replace(Xe, Je);
        Ye[t] = new Ge(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
        var t = e.replace(Xe, Je);
        Ye[t] = new Ge(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(Xe, Je);
        Ye[t] = new Ge(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
        Ye[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Ye.xlinkHref = new Ge('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        Ye[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
var et = ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
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
var yt,
    gt = Object.assign;
function mt(e) {
    if (void 0 === yt)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            yt = (t && t[1]) || '';
        }
    return '\n' + yt + e;
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
        ((bt = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? mt(e) : '';
}
function wt(e) {
    switch (e.tag) {
        case 5:
            return mt(e.type);
        case 16:
            return mt('Lazy');
        case 13:
            return mt('Suspense');
        case 19:
            return mt('SuspenseList');
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
function xt(e) {
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
function Tt(e, t) {
    var n = null == t.defaultValue ? '' : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
    ((n = kt(null != t.value ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
        }));
}
function Nt(e, t) {
    null != (t = t.checked) && Ze(e, 'checked', t, !1);
}
function jt(e, t) {
    Nt(e, t);
    var n = kt(t.value),
        r = t.type;
    if (null != n)
        'number' === r
            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
    (t.hasOwnProperty('value')
        ? It(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && It(e, t.type, kt(t.defaultValue)),
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
function It(e, t, n) {
    ('number' === t && Ct(e.ownerDocument) === e) ||
        (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Lt = Array.isArray;
function Dt(e, t, n, r) {
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
function zt(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(Ve(91));
    return gt({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Mt(e, t) {
    var n = t.value;
    if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(Ve(92));
            if (Lt(n)) {
                if (1 < n.length) throw Error(Ve(93));
                n = n[0];
            }
            t = n;
        }
        (null == t && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: kt(n) };
}
function Vt(e, t) {
    var n = kt(t.value),
        r = kt(t.defaultValue);
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
    qt,
    Ht =
        ((qt = function (e, t) {
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
                      return qt(e, t);
                  });
              }
            : qt);
function Wt(e, t) {
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
    Qt = ['Webkit', 'ms', 'Moz', 'O'];
function Gt(e, t, n) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n || 'number' != typeof t || 0 === t || (Kt.hasOwnProperty(e) && Kt[e])
          ? ('' + t).trim()
          : t + 'px';
}
function Yt(e, t) {
    for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf('--'),
                i = Gt(n, t[n], r);
            ('float' === n && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i));
        }
}
Object.keys(Kt).forEach(function (e) {
    Qt.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Kt[t] = Kt[e]));
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
function Jt(e, t) {
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
        if ('function' != typeof nn) throw Error(Ve(280));
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
    if (n && 'function' != typeof n) throw Error(Ve(231, t, typeof n));
    return n;
}
var pn = !1;
if (qe)
    try {
        var vn = {};
        (Object.defineProperty(vn, 'passive', {
            get: function () {
                pn = !0;
            },
        }),
            window.addEventListener('test', vn, vn),
            window.removeEventListener('test', vn, vn));
    } catch (qt) {
        pn = !1;
    }
function yn(e, t, n, r, i, o, a, s, u) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, l);
    } catch (c) {
        this.onError(c);
    }
}
var gn = !1,
    mn = null,
    bn = !1,
    _n = null,
    wn = {
        onError: function (e) {
            ((gn = !0), (mn = e));
        },
    };
function Sn(e, t, n, r, i, o, a, s, u) {
    ((gn = !1), (mn = null), yn.apply(wn, arguments));
}
function xn(e) {
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
function On(e) {
    if (xn(e) !== e) throw Error(Ve(188));
}
function En(e) {
    return null !==
        (e = (function (e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = xn(e))) throw Error(Ve(188));
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
                        if (o === n) return (On(i), e);
                        if (o === r) return (On(i), t);
                        o = o.sibling;
                    }
                    throw Error(Ve(188));
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
                        if (!a) throw Error(Ve(189));
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
    Tn = Me.unstable_shouldYield,
    Nn = Me.unstable_requestPaint,
    jn = Me.unstable_now,
    Rn = Me.unstable_getCurrentPriorityLevel,
    In = Me.unstable_ImmediatePriority,
    Ln = Me.unstable_UserBlockingPriority,
    Dn = Me.unstable_NormalPriority,
    zn = Me.unstable_LowPriority,
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
var qn = 64,
    Hn = 4194304;
function Wn(e) {
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
        0 !== s ? (r = Wn(s)) : 0 !== (o &= a) && (r = Wn(o));
    } else 0 !== (a = n & ~i) ? (r = Wn(a)) : 0 !== o && (r = Wn(o));
    if (0 === r) return 0;
    if (0 !== t && t !== r && 0 == (t & i) && ((i = r & -r) >= (o = t & -t) || (16 === i && 0 != (4194240 & o))))
        return t;
    if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; ) ((i = 1 << (n = 31 - Un(t))), (r |= e[n]), (t &= ~i));
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
    var e = qn;
    return (0 == (4194240 & (qn <<= 1)) && (qn = 64), e);
}
function Xn(e) {
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
function yr(e, t) {
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
function gr(e, t, n, r, i, o) {
    return null === e || e.nativeEvent !== o
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }),
          null !== t && null !== (t = ea(t)) && rr(t),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== i && -1 === t.indexOf(i) && t.push(i), e);
}
function mr(e) {
    var t = Zo(e.target);
    if (null !== t) {
        var n = xn(t);
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
function br(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Tr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return (null !== (t = ea(n)) && rr(t), (e.blockedOn = n), !1);
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        ((en = r), n.target.dispatchEvent(r), (en = null), t.shift());
    }
    return !0;
}
function _r(e, t, n) {
    br(e) && n.delete(t);
}
function wr() {
    ((sr = !1),
        null !== lr && br(lr) && (lr = null),
        null !== cr && br(cr) && (cr = null),
        null !== fr && br(fr) && (fr = null),
        dr.forEach(_r),
        hr.forEach(_r));
}
function Sr(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), sr || ((sr = !0), Me.unstable_scheduleCallback(Me.unstable_NormalPriority, wr)));
}
function xr(e) {
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
    for (; 0 < pr.length && null === (n = pr[0]).blockedOn; ) (mr(n), null === n.blockedOn && pr.shift());
}
var kr = et.ReactCurrentBatchConfig,
    Or = !0;
function Er(e, t, n, r) {
    var i = er,
        o = kr.transition;
    kr.transition = null;
    try {
        ((er = 1), Cr(e, t, n, r));
    } finally {
        ((er = i), (kr.transition = o));
    }
}
function Pr(e, t, n, r) {
    var i = er,
        o = kr.transition;
    kr.transition = null;
    try {
        ((er = 4), Cr(e, t, n, r));
    } finally {
        ((er = i), (kr.transition = o));
    }
}
function Cr(e, t, n, r) {
    if (Or) {
        var i = Tr(e, t, n, r);
        if (null === i) (Oo(e, t, r, Ar, n), yr(e, r));
        else if (
            (function (e, t, n, r, i) {
                switch (t) {
                    case 'focusin':
                        return ((lr = gr(lr, e, t, n, r, i)), !0);
                    case 'dragenter':
                        return ((cr = gr(cr, e, t, n, r, i)), !0);
                    case 'mouseover':
                        return ((fr = gr(fr, e, t, n, r, i)), !0);
                    case 'pointerover':
                        var o = i.pointerId;
                        return (dr.set(o, gr(dr.get(o) || null, e, t, n, r, i)), !0);
                    case 'gotpointercapture':
                        return ((o = i.pointerId), hr.set(o, gr(hr.get(o) || null, e, t, n, r, i)), !0);
                }
                return !1;
            })(i, e, t, n, r)
        )
            r.stopPropagation();
        else if ((yr(e, r), 4 & t && -1 < vr.indexOf(e))) {
            for (; null !== i; ) {
                var o = ea(i);
                if ((null !== o && nr(o), null === (o = Tr(e, t, n, r)) && Oo(e, t, r, Ar, n), o === i)) break;
                i = o;
            }
            null !== i && r.stopPropagation();
        } else Oo(e, t, r, null, n);
    }
}
var Ar = null;
function Tr(e, t, n, r) {
    if (((Ar = null), null !== (e = Zo((e = tn(r))))))
        if (null === (t = xn(e))) e = null;
        else if (13 === (n = t.tag)) {
            if (null !== (e = kn(t))) return e;
            e = null;
        } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return ((Ar = e), null);
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
            switch (Rn()) {
                case In:
                    return 1;
                case Ln:
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
    Ir = null;
function Lr() {
    if (Ir) return Ir;
    var e,
        t,
        n = Rr,
        r = n.length,
        i = 'value' in jr ? jr.value : jr.textContent,
        o = i.length;
    for (e = 0; e < r && n[e] === i[e]; e++);
    var a = r - e;
    for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
    return (Ir = i.slice(e, 1 < t ? 1 - t : void 0));
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
                ? zr
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
    qr = Vr($r),
    Hr = gt({}, $r, { view: 0, detail: 0 }),
    Wr = Vr(Hr),
    Kr = gt({}, Hr, {
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
    Qr = Vr(Kr),
    Gr = Vr(gt({}, Kr, { dataTransfer: 0 })),
    Yr = Vr(gt({}, Hr, { relatedTarget: 0 })),
    Xr = Vr(gt({}, $r, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    Jr = gt({}, $r, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    Zr = Vr(Jr),
    ei = Vr(gt({}, $r, { data: 0 })),
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
var ai = gt({}, Hr, {
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
        getModifierState: oi,
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
    si = Vr(ai),
    ui = Vr(
        gt({}, Kr, {
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
    li = Vr(
        gt({}, Hr, {
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
    ci = Vr(gt({}, $r, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    fi = gt({}, Kr, {
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
    di = Vr(fi),
    hi = [9, 13, 27, 32],
    pi = qe && 'CompositionEvent' in window,
    vi = null;
qe && 'documentMode' in document && (vi = document.documentMode);
var yi = qe && 'TextEvent' in window && !vi,
    gi = qe && (!pi || (vi && 8 < vi && 11 >= vi)),
    mi = String.fromCharCode(32),
    bi = !1;
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
var xi = {
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
    return 'input' === t ? !!xi[e.type] : 'textarea' === t;
}
function Oi(e, t, n, r) {
    (sn(r),
        0 < (t = Po(t, 'onChange')).length &&
            ((n = new qr('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
}
var Ei = null,
    Pi = null;
function Ci(e) {
    bo(e, 0);
}
function Ai(e) {
    if (Pt(ta(e))) return e;
}
function Ti(e, t) {
    if ('change' === e) return t;
}
var Ni = !1;
if (qe) {
    var ji;
    if (qe) {
        var Ri = 'oninput' in document;
        if (!Ri) {
            var Ii = document.createElement('div');
            (Ii.setAttribute('oninput', 'return;'), (Ri = 'function' == typeof Ii.oninput));
        }
        ji = Ri;
    } else ji = !1;
    Ni = ji && (!document.documentMode || 9 < document.documentMode);
}
function Li() {
    Ei && (Ei.detachEvent('onpropertychange', Di), (Pi = Ei = null));
}
function Di(e) {
    if ('value' === e.propertyName && Ai(Pi)) {
        var t = [];
        (Oi(t, Pi, e, tn(e)), dn(Ci, t));
    }
}
function zi(e, t, n) {
    'focusin' === e ? (Li(), (Pi = n), (Ei = t).attachEvent('onpropertychange', Di)) : 'focusout' === e && Li();
}
function Mi(e) {
    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Ai(Pi);
}
function Vi(e, t) {
    if ('click' === e) return Ai(t);
}
function Fi(e, t) {
    if ('input' === e || 'change' === e) return Ai(t);
}
var Ui =
    'function' == typeof Object.is
        ? Object.is
        : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
          };
function Bi(e, t) {
    if (Ui(e, t)) return !0;
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!He.call(t, i) || !Ui(e[i], t[i])) return !1;
    }
    return !0;
}
function $i(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function qi(e, t) {
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
function Hi(e, t) {
    return (
        !(!e || !t) &&
        (e === t ||
            ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                    ? Hi(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
    );
}
function Wi() {
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
function Qi(e) {
    var t = Wi(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Hi(n.ownerDocument.documentElement, n)) {
        if (null !== r && Ki(n))
            if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
            else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                ((r = void 0 === r.end ? o : Math.min(r.end, i)),
                    !e.extend && o > r && ((i = r), (r = o), (o = i)),
                    (i = qi(n, o)));
                var a = qi(n, r);
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
var Gi = qe && 'documentMode' in document && 11 >= document.documentMode,
    Yi = null,
    Xi = null,
    Ji = null,
    Zi = !1;
function eo(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    Zi ||
        null == Yi ||
        Yi !== Ct(r) ||
        ('selectionStart' in (r = Yi) && Ki(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                  anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                      .anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              }),
        (Ji && Bi(Ji, r)) ||
            ((Ji = r),
            0 < (r = Po(Xi, 'onSelect')).length &&
                ((t = new qr('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Yi))));
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
qe &&
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
    (co.set(e, t), Be(t, [e]));
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
var yo =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' ',
        ),
    go = new Set('cancel close invalid load scroll toggle'.split(' ').concat(yo));
function mo(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n),
        (function (e, t, n, r, i, o, a, s, u) {
            if ((Sn.apply(this, arguments), gn)) {
                if (!gn) throw Error(Ve(198));
                var l = mn;
                ((gn = !1), (mn = null), bn || ((bn = !0), (_n = l)));
            }
        })(r, t, void 0, e),
        (e.currentTarget = null));
}
function bo(e, t) {
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
                    (mo(i, s, l), (o = u));
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
                    (mo(i, s, l), (o = u));
                }
        }
    }
    if (bn) throw ((e = _n), (bn = !1), (_n = null), e);
}
function _o(e, t) {
    var n = t[Yo];
    void 0 === n && (n = t[Yo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (ko(t, e, 2, !1), n.add(r));
}
function wo(e, t, n) {
    var r = 0;
    (t && (r |= 4), ko(n, e, r, t));
}
var So = '_reactListening' + Math.random().toString(36).slice(2);
function xo(e) {
    if (!e[So]) {
        ((e[So] = !0),
            Fe.forEach(function (t) {
                'selectionchange' !== t && (go.has(t) || wo(t, !1, e), wo(t, !0, e));
            }));
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[So] || ((t[So] = !0), wo('selectionchange', !1, t));
    }
}
function ko(e, t, n, r) {
    switch (Nr(t)) {
        case 1:
            var i = Er;
            break;
        case 4:
            i = Pr;
            break;
        default:
            i = Cr;
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
function Oo(e, t, n, r, i) {
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
                var u = qr,
                    l = e;
                switch (e) {
                    case 'keypress':
                        if (0 === Dr(n)) break e;
                    case 'keydown':
                    case 'keyup':
                        u = si;
                        break;
                    case 'focusin':
                        ((l = 'focus'), (u = Yr));
                        break;
                    case 'focusout':
                        ((l = 'blur'), (u = Yr));
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
                        u = li;
                        break;
                    case ao:
                    case so:
                    case uo:
                        u = Xr;
                        break;
                    case lo:
                        u = ci;
                        break;
                    case 'scroll':
                        u = Wr;
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
                            ((h = v), null !== d && null != (v = hn(p, d)) && c.push(Eo(p, v, h))),
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
                              (l !== (f = xn(l)) || (5 !== l.tag && 6 !== l.tag)) &&
                              (l = null))
                        : ((u = null), (l = r)),
                    u !== l))
            ) {
                if (
                    ((c = Qr),
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
                        for (d = l, p = 0, h = c = u; h; h = Co(h)) p++;
                        for (h = 0, v = d; v; v = Co(v)) h++;
                        for (; 0 < p - h; ) ((c = Co(c)), p--);
                        for (; 0 < h - p; ) ((d = Co(d)), h--);
                        for (; p--; ) {
                            if (c === d || (null !== d && c === d.alternate)) break e;
                            ((c = Co(c)), (d = Co(d)));
                        }
                        c = null;
                    }
                else c = null;
                (null !== u && Ao(a, s, u, c, !1), null !== l && null !== f && Ao(a, f, l, c, !0));
            }
            if (
                'select' === (u = (s = r ? ta(r) : window).nodeName && s.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === s.type)
            )
                var y = Ti;
            else if (ki(s))
                if (Ni) y = Fi;
                else {
                    y = Mi;
                    var g = zi;
                }
            else
                (u = s.nodeName) &&
                    'input' === u.toLowerCase() &&
                    ('checkbox' === s.type || 'radio' === s.type) &&
                    (y = Vi);
            switch (
                (y && (y = y(e, r))
                    ? Oi(a, y, n, i)
                    : (g && g(e, s, r),
                      'focusout' === e &&
                          (g = s._wrapperState) &&
                          g.controlled &&
                          'number' === s.type &&
                          It(s, 'number', s.value)),
                (g = r ? ta(r) : window),
                e)
            ) {
                case 'focusin':
                    (ki(g) || 'true' === g.contentEditable) && ((Yi = g), (Xi = r), (Ji = null));
                    break;
                case 'focusout':
                    Ji = Xi = Yi = null;
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
            var m;
            if (pi)
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
                Si
                    ? _i(e, n) && (b = 'onCompositionEnd')
                    : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
            (b &&
                (gi &&
                    'ko' !== n.locale &&
                    (Si || 'onCompositionStart' !== b
                        ? 'onCompositionEnd' === b && Si && (m = Lr())
                        : ((Rr = 'value' in (jr = i) ? jr.value : jr.textContent), (Si = !0))),
                0 < (g = Po(r, b)).length &&
                    ((b = new ei(b, e, null, n, i)),
                    a.push({ event: b, listeners: g }),
                    m ? (b.data = m) : null !== (m = wi(n)) && (b.data = m))),
                (m = yi
                    ? (function (e, t) {
                          switch (e) {
                              case 'compositionend':
                                  return wi(t);
                              case 'keypress':
                                  return 32 !== t.which ? null : ((bi = !0), mi);
                              case 'textInput':
                                  return (e = t.data) === mi && bi ? null : e;
                              default:
                                  return null;
                          }
                      })(e, n)
                    : (function (e, t) {
                          if (Si)
                              return 'compositionend' === e || (!pi && _i(e, t))
                                  ? ((e = Lr()), (Ir = Rr = jr = null), (Si = !1), e)
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
                                  return gi && 'ko' !== t.locale ? null : t.data;
                          }
                      })(e, n)) &&
                    0 < (r = Po(r, 'onBeforeInput')).length &&
                    ((i = new ei('onBeforeInput', 'beforeinput', null, n, i)),
                    a.push({ event: i, listeners: r }),
                    (i.data = m)));
        }
        bo(a, t);
    });
}
function Eo(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Po(e, t) {
    for (var n = t + 'Capture', r = []; null !== e; ) {
        var i = e,
            o = i.stateNode;
        (5 === i.tag &&
            null !== o &&
            ((i = o), null != (o = hn(e, n)) && r.unshift(Eo(e, o, i)), null != (o = hn(e, t)) && r.push(Eo(e, o, i))),
            (e = e.return));
    }
    return r;
}
function Co(e) {
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
                ? null != (u = hn(n, o)) && a.unshift(Eo(n, u, s))
                : i || (null != (u = hn(n, o)) && a.push(Eo(n, u, s)))),
            (n = n.return));
    }
    0 !== a.length && e.push({ event: t, listeners: a });
}
var To = /\r\n?/g,
    No = /\u0000|\uFFFD/g;
function jo(e) {
    return ('string' == typeof e ? e : '' + e).replace(To, '\n').replace(No, '');
}
function Ro(e, t, n) {
    if (((t = jo(t)), jo(e) !== t && n)) throw Error(Ve(425));
}
function Io() {}
var Lo = null,
    Do = null;
function zo(e, t) {
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
var Mo = 'function' == typeof setTimeout ? setTimeout : void 0,
    Vo = 'function' == typeof clearTimeout ? clearTimeout : void 0,
    Fo = 'function' == typeof Promise ? Promise : void 0,
    Uo =
        'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== Fo
              ? function (e) {
                    return Fo.resolve(null).then(e).catch(Bo);
                }
              : Mo;
function Bo(e) {
    setTimeout(function () {
        throw e;
    });
}
function $o(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && 8 === i.nodeType))
            if ('/$' === (n = i.data)) {
                if (0 === r) return (e.removeChild(i), void xr(t));
                r--;
            } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
        n = i;
    } while (n);
    xr(t);
}
function qo(e) {
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
function Ho(e) {
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
var Wo = Math.random().toString(36).slice(2),
    Ko = '__reactFiber$' + Wo,
    Qo = '__reactProps$' + Wo,
    Go = '__reactContainer$' + Wo,
    Yo = '__reactEvents$' + Wo,
    Xo = '__reactListeners$' + Wo,
    Jo = '__reactHandles$' + Wo;
function Zo(e) {
    var t = e[Ko];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Go] || n[Ko])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = Ho(e); null !== e; ) {
                    if ((n = e[Ko])) return n;
                    e = Ho(e);
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
    throw Error(Ve(33));
}
function na(e) {
    return e[Qo] || null;
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
    if (la.current !== ua) throw Error(Ve(168));
    (sa(la, t), sa(ca, n));
}
function ya(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
    for (var i in (r = r.getChildContext())) if (!(i in t)) throw Error(Ve(108, xt(e) || 'Unknown', i));
    return gt({}, n, r);
}
function ga(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ua),
        (fa = la.current),
        sa(la, e),
        sa(ca, ca.current),
        !0
    );
}
function ma(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(Ve(169));
    (n ? ((e = ya(e, t, fa)), (r.__reactInternalMemoizedMergedChildContext = e), aa(ca), aa(la), sa(la, e)) : aa(ca),
        sa(ca, n));
}
var ba = null,
    _a = !1,
    wa = !1;
function Sa(e) {
    null === ba ? (ba = [e]) : ba.push(e);
}
function xa() {
    if (!wa && null !== ba) {
        wa = !0;
        var e = 0,
            t = er;
        try {
            var n = ba;
            for (er = 1; e < n.length; e++) {
                var r = n[e];
                do {
                    r = r(!0);
                } while (null !== r);
            }
            ((ba = null), (_a = !1));
        } catch (i) {
            throw (null !== ba && (ba = ba.slice(e + 1)), Cn(In, xa), i);
        } finally {
            ((er = t), (wa = !1));
        }
    }
    return null;
}
var ka = [],
    Oa = 0,
    Ea = null,
    Pa = 0,
    Ca = [],
    Aa = 0,
    Ta = null,
    Na = 1,
    ja = '';
function Ra(e, t) {
    ((ka[Oa++] = Pa), (ka[Oa++] = Ea), (Ea = e), (Pa = t));
}
function Ia(e, t, n) {
    ((Ca[Aa++] = Na), (Ca[Aa++] = ja), (Ca[Aa++] = Ta), (Ta = e));
    var r = Na;
    e = ja;
    var i = 32 - Un(r) - 1;
    ((r &= ~(1 << i)), (n += 1));
    var o = 32 - Un(t) + i;
    if (30 < o) {
        var a = i - (i % 5);
        ((o = (r & ((1 << a) - 1)).toString(32)),
            (r >>= a),
            (i -= a),
            (Na = (1 << (32 - Un(t) + i)) | (n << i) | r),
            (ja = o + e));
    } else ((Na = (1 << o) | (n << i) | r), (ja = e));
}
function La(e) {
    null !== e.return && (Ra(e, 1), Ia(e, 1, 0));
}
function Da(e) {
    for (; e === Ea; ) ((Ea = ka[--Oa]), (ka[Oa] = null), (Pa = ka[--Oa]), (ka[Oa] = null));
    for (; e === Ta; )
        ((Ta = Ca[--Aa]), (Ca[Aa] = null), (ja = Ca[--Aa]), (Ca[Aa] = null), (Na = Ca[--Aa]), (Ca[Aa] = null));
}
var za = null,
    Ma = null,
    Va = !1,
    Fa = null;
function Ua(e, t) {
    var n = df(5, null, null, 0);
    ((n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Ba(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (za = e), (Ma = qo(t.firstChild)), !0)
            );
        case 6:
            return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (za = e), (Ma = null), !0)
            );
        case 13:
            return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ta ? { id: Na, overflow: ja } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = df(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (za = e),
                (Ma = null),
                !0)
            );
        default:
            return !1;
    }
}
function $a(e) {
    return 0 != (1 & e.mode) && 0 == (128 & e.flags);
}
function qa(e) {
    if (Va) {
        var t = Ma;
        if (t) {
            var n = t;
            if (!Ba(e, t)) {
                if ($a(e)) throw Error(Ve(418));
                t = qo(n.nextSibling);
                var r = za;
                t && Ba(e, t) ? Ua(r, n) : ((e.flags = (-4097 & e.flags) | 2), (Va = !1), (za = e));
            }
        } else {
            if ($a(e)) throw Error(Ve(418));
            ((e.flags = (-4097 & e.flags) | 2), (Va = !1), (za = e));
        }
    }
}
function Ha(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
    za = e;
}
function Wa(e) {
    if (e !== za) return !1;
    if (!Va) return (Ha(e), (Va = !0), !1);
    var t;
    if (
        ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = 'head' !== (t = e.type) && 'body' !== t && !zo(e.type, e.memoizedProps)),
        t && (t = Ma))
    ) {
        if ($a(e)) throw (Ka(), Error(Ve(418)));
        for (; t; ) (Ua(e, t), (t = qo(t.nextSibling)));
    }
    if ((Ha(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(Ve(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ('/$' === n) {
                        if (0 === t) {
                            Ma = qo(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
            }
            Ma = null;
        }
    } else Ma = za ? qo(e.stateNode.nextSibling) : null;
    return !0;
}
function Ka() {
    for (var e = Ma; e; ) e = qo(e.nextSibling);
}
function Qa() {
    ((Ma = za = null), (Va = !1));
}
function Ga(e) {
    null === Fa ? (Fa = [e]) : Fa.push(e);
}
var Ya = et.ReactCurrentBatchConfig;
function Xa(e, t, n) {
    if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
        if (n._owner) {
            if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(Ve(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(Ve(147, e));
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
        if ('string' != typeof e) throw Error(Ve(284));
        if (!n._owner) throw Error(Ve(290, e));
    }
    return e;
}
function Ja(e, t) {
    throw (
        (e = Object.prototype.toString.call(t)),
        Error(Ve(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e))
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
        return null === t || 6 !== t.tag ? (((t = mf(n, e.mode, r)).return = e), t) : (((t = i(t, n)).return = e), t);
    }
    function u(e, t, n, r) {
        var o = n.type;
        return o === rt
            ? c(e, t, n.props.children, r, n.key)
            : null !== t &&
                (t.elementType === o || ('object' == typeof o && null !== o && o.$$typeof === dt && Za(o) === t.type))
              ? (((r = i(t, n.props)).ref = Xa(e, t, n)), (r.return = e), r)
              : (((r = vf(n.type, n.key, n.props, null, e.mode, r)).ref = Xa(e, t, n)), (r.return = e), r);
    }
    function l(e, t, n, r) {
        return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = bf(n, e.mode, r)).return = e), t)
            : (((t = i(t, n.children || [])).return = e), t);
    }
    function c(e, t, n, r, o) {
        return null === t || 7 !== t.tag
            ? (((t = yf(n, e.mode, r, o)).return = e), t)
            : (((t = i(t, n)).return = e), t);
    }
    function f(e, t, n) {
        if (('string' == typeof t && '' !== t) || 'number' == typeof t)
            return (((t = mf('' + t, e.mode, n)).return = e), t);
        if ('object' == typeof t && null !== t) {
            switch (t.$$typeof) {
                case tt:
                    return (
                        ((n = vf(t.type, t.key, t.props, null, e.mode, n)).ref = Xa(e, null, t)),
                        (n.return = e),
                        n
                    );
                case nt:
                    return (((t = bf(t, e.mode, n)).return = e), t);
                case dt:
                    return f(e, (0, t._init)(t._payload), n);
            }
            if (Lt(t) || vt(t)) return (((t = yf(t, e.mode, n, null)).return = e), t);
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
            if (Lt(n) || vt(n)) return null !== i ? null : c(e, t, n, r, null);
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
            if (Lt(r) || vt(r)) return c(t, (e = e.get(n) || null), r, i, null);
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
                        for (var v = c.key, y = l; null !== y; ) {
                            if (y.key === v) {
                                if ((v = c.type) === rt) {
                                    if (7 === y.tag) {
                                        (n(u, y.sibling), ((l = i(y, c.props.children)).return = u), (u = l));
                                        break e;
                                    }
                                } else if (
                                    y.elementType === v ||
                                    ('object' == typeof v && null !== v && v.$$typeof === dt && Za(v) === y.type)
                                ) {
                                    (n(u, y.sibling), ((l = i(y, c.props)).ref = Xa(u, y, c)), (l.return = u), (u = l));
                                    break e;
                                }
                                n(u, y);
                                break;
                            }
                            (t(u, y), (y = y.sibling));
                        }
                        c.type === rt
                            ? (((l = yf(c.props.children, u.mode, p, c.key)).return = u), (u = l))
                            : (((p = vf(c.type, c.key, c.props, null, u.mode, p)).ref = Xa(u, l, c)),
                              (p.return = u),
                              (u = p));
                    }
                    return a(u);
                case nt:
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
                        (((l = bf(c, u.mode, p)).return = u), (u = l));
                    }
                    return a(u);
                case dt:
                    return s(u, l, (y = c._init)(c._payload), p);
            }
            if (Lt(c))
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
                    if (v === s.length) return (n(i, p), Va && Ra(i, v), l);
                    if (null === p) {
                        for (; v < s.length; v++)
                            null !== (p = f(i, s[v], u)) &&
                                ((a = o(p, a, v)), null === c ? (l = p) : (c.sibling = p), (c = p));
                        return (Va && Ra(i, v), l);
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
                        Va && Ra(i, v),
                        l
                    );
                })(u, l, c, p);
            if (vt(c))
                return (function (i, a, s, u) {
                    var l = vt(s);
                    if ('function' != typeof l) throw Error(Ve(150));
                    if (null == (s = l.call(s))) throw Error(Ve(151));
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
                    if (g.done) return (n(i, p), Va && Ra(i, v), l);
                    if (null === p) {
                        for (; !g.done; v++, g = s.next())
                            null !== (g = f(i, g.value, u)) &&
                                ((a = o(g, a, v)), null === c ? (l = g) : (c.sibling = g), (c = g));
                        return (Va && Ra(i, v), l);
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
                        Va && Ra(i, v),
                        l
                    );
                })(u, l, c, p);
            Ja(u, c);
        }
        return ('string' == typeof c && '' !== c) || 'number' == typeof c
            ? ((c = '' + c),
              null !== l && 6 === l.tag
                  ? (n(u, l.sibling), ((l = i(l, c)).return = u), (u = l))
                  : (n(u, l), ((l = mf(c, u.mode, p)).return = u), (u = l)),
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
            if (null === is) throw Error(Ve(308));
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
var ys = !1;
function gs(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function ms(e, t) {
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
function bs(e, t) {
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
function xs(e, t, n, r) {
    var i = e.updateQueue;
    ys = !1;
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
                            f = gt({}, f, d);
                            break e;
                        case 2:
                            ys = !0;
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
        ((yc |= a), (e.lanes = a), (e.memoizedState = f));
    }
}
function ks(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (null !== i) {
                if (((r.callback = null), (r = n), 'function' != typeof i)) throw Error(Ve(191, i));
                i.call(r);
            }
        }
}
var Os = {},
    Es = oa(Os),
    Ps = oa(Os),
    Cs = oa(Os);
function As(e) {
    if (e === Os) throw Error(Ve(174));
    return e;
}
function Ts(e, t) {
    switch ((sa(Cs, t), sa(Ps, e), sa(Es, Os), (e = t.nodeType))) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Bt(null, '');
            break;
        default:
            t = Bt((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
    }
    (aa(Es), sa(Es, t));
}
function Ns() {
    (aa(Es), aa(Ps), aa(Cs));
}
function js(e) {
    As(Cs.current);
    var t = As(Es.current),
        n = Bt(t, e.type);
    t !== n && (sa(Ps, e), sa(Es, n));
}
function Rs(e) {
    Ps.current === e && (aa(Es), aa(Ps));
}
var Is = oa(0);
function Ls(e) {
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
var Ds = [];
function zs() {
    for (var e = 0; e < Ds.length; e++) Ds[e]._workInProgressVersionPrimary = null;
    Ds.length = 0;
}
var Ms = et.ReactCurrentDispatcher,
    Vs = et.ReactCurrentBatchConfig,
    Fs = 0,
    Us = null,
    Bs = null,
    $s = null,
    qs = !1,
    Hs = !1,
    Ws = 0,
    Ks = 0;
function Qs() {
    throw Error(Ve(321));
}
function Gs(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ui(e[n], t[n])) return !1;
    return !0;
}
function Ys(e, t, n, r, i, o) {
    if (
        ((Fs = o),
        (Us = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Ms.current = null === e || null === e.memoizedState ? Ru : Iu),
        (e = n(r, i)),
        Hs)
    ) {
        o = 0;
        do {
            if (((Hs = !1), (Ws = 0), 25 <= o)) throw Error(Ve(301));
            ((o += 1), ($s = Bs = null), (t.updateQueue = null), (Ms.current = Lu), (e = n(r, i)));
        } while (Hs);
    }
    if (((Ms.current = ju), (t = null !== Bs && null !== Bs.next), (Fs = 0), ($s = Bs = Us = null), (qs = !1), t))
        throw Error(Ve(300));
    return e;
}
function Xs() {
    var e = 0 !== Ws;
    return ((Ws = 0), e);
}
function Js() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (null === $s ? (Us.memoizedState = $s = e) : ($s = $s.next = e), $s);
}
function Zs() {
    if (null === Bs) {
        var e = Us.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = Bs.next;
    var t = null === $s ? Us.memoizedState : $s.next;
    if (null !== t) (($s = t), (Bs = e));
    else {
        if (null === e) throw Error(Ve(310));
        ((e = {
            memoizedState: (Bs = e).memoizedState,
            baseState: Bs.baseState,
            baseQueue: Bs.baseQueue,
            queue: Bs.queue,
            next: null,
        }),
            null === $s ? (Us.memoizedState = $s = e) : ($s = $s.next = e));
    }
    return $s;
}
function eu(e, t) {
    return 'function' == typeof t ? t(e) : t;
}
function tu(e) {
    var t = Zs(),
        n = t.queue;
    if (null === n) throw Error(Ve(311));
    n.lastRenderedReducer = e;
    var r = Bs,
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
            if ((Fs & c) === c)
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
                (null === u ? ((s = u = f), (a = r)) : (u = u.next = f), (Us.lanes |= c), (yc |= c));
            }
            l = l.next;
        } while (null !== l && l !== o);
        (null === u ? (a = r) : (u.next = s),
            Ui(r, t.memoizedState) || (Zu = !0),
            (t.memoizedState = r),
            (t.baseState = a),
            (t.baseQueue = u),
            (n.lastRenderedState = r));
    }
    if (null !== (e = n.interleaved)) {
        i = e;
        do {
            ((o = i.lane), (Us.lanes |= o), (yc |= o), (i = i.next));
        } while (i !== e);
    } else null === i && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function nu(e) {
    var t = Zs(),
        n = t.queue;
    if (null === n) throw Error(Ve(311));
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
        (Ui(o, t.memoizedState) || (Zu = !0),
            (t.memoizedState = o),
            null === t.baseQueue && (t.baseState = o),
            (n.lastRenderedState = o));
    }
    return [o, r];
}
function ru() {}
function iu(e, t) {
    var n = Us,
        r = Zs(),
        i = t(),
        o = !Ui(r.memoizedState, i);
    if (
        (o && ((r.memoizedState = i), (Zu = !0)),
        (r = r.queue),
        yu(su.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (null !== $s && 1 & $s.memoizedState.tag))
    ) {
        if (((n.flags |= 2048), fu(9, au.bind(null, n, r, i, t), void 0, null), null === lc)) throw Error(Ve(349));
        0 != (30 & Fs) || ou(n, t, i);
    }
    return i;
}
function ou(e, t, n) {
    ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = Us.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (Us.updateQueue = t), (t.stores = [e]))
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
        return !Ui(e, n);
    } catch (r) {
        return !0;
    }
}
function lu(e) {
    var t = vs(e, 1);
    null !== t && Dc(t, e, 1, -1);
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
        (e = e.dispatch = Cu.bind(null, Us, e)),
        [t.memoizedState, e]
    );
}
function fu(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = Us.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (Us.updateQueue = t), (t.lastEffect = e.next = e))
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
    ((Us.flags |= e), (i.memoizedState = fu(1 | t, n, void 0, void 0 === r ? null : r)));
}
function pu(e, t, n, r) {
    var i = Zs();
    r = void 0 === r ? null : r;
    var o = void 0;
    if (null !== Bs) {
        var a = Bs.memoizedState;
        if (((o = a.destroy), null !== r && Gs(r, a.deps))) return void (i.memoizedState = fu(t, n, o, r));
    }
    ((Us.flags |= e), (i.memoizedState = fu(1 | t, n, o, r)));
}
function vu(e, t) {
    return hu(8390656, 8, e, t);
}
function yu(e, t) {
    return pu(2048, 8, e, t);
}
function gu(e, t) {
    return pu(4, 2, e, t);
}
function mu(e, t) {
    return pu(4, 4, e, t);
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
    return ((n = null != n ? n.concat([e]) : null), pu(4, 4, bu.bind(null, t, e), n));
}
function wu() {}
function Su(e, t) {
    var n = Zs();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Gs(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function xu(e, t) {
    var n = Zs();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Gs(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ku(e, t, n) {
    return 0 == (21 & Fs)
        ? (e.baseState && ((e.baseState = !1), (Zu = !0)), (e.memoizedState = n))
        : (Ui(n, t) || ((n = Yn()), (Us.lanes |= n), (yc |= n), (e.baseState = !0)), t);
}
function Ou(e, t) {
    var n = er;
    ((er = 0 !== n && 4 > n ? n : 4), e(!0));
    var r = Vs.transition;
    Vs.transition = {};
    try {
        (e(!1), t());
    } finally {
        ((er = n), (Vs.transition = r));
    }
}
function Eu() {
    return Zs().memoizedState;
}
function Pu(e, t, n) {
    var r = Lc(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Au(e))) Tu(t, n);
    else if (null !== (n = ps(e, t, n, r))) {
        (Dc(n, e, r, Ic()), Nu(n, t, r));
    }
}
function Cu(e, t, n) {
    var r = Lc(e),
        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Au(e)) Tu(t, i);
    else {
        var o = e.alternate;
        if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer))
            try {
                var a = t.lastRenderedState,
                    s = o(a, n);
                if (((i.hasEagerState = !0), (i.eagerState = s), Ui(s, a))) {
                    var u = t.interleaved;
                    return (
                        null === u ? ((i.next = i), hs(t)) : ((i.next = u.next), (u.next = i)),
                        void (t.interleaved = i)
                    );
                }
            } catch (l) {}
        null !== (n = ps(e, t, i, r)) && (Dc(n, e, r, (i = Ic())), Nu(n, t, r));
    }
}
function Au(e) {
    var t = e.alternate;
    return e === Us || (null !== t && t === Us);
}
function Tu(e, t) {
    Hs = qs = !0;
    var n = e.pending;
    (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
}
function Nu(e, t, n) {
    if (0 != (4194240 & n)) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), Zn(e, n));
    }
}
var ju = {
        readContext: fs,
        useCallback: Qs,
        useContext: Qs,
        useEffect: Qs,
        useImperativeHandle: Qs,
        useInsertionEffect: Qs,
        useLayoutEffect: Qs,
        useMemo: Qs,
        useReducer: Qs,
        useRef: Qs,
        useState: Qs,
        useDebugValue: Qs,
        useDeferredValue: Qs,
        useTransition: Qs,
        useMutableSource: Qs,
        useSyncExternalStore: Qs,
        useId: Qs,
        unstable_isNewReconciler: !1,
    },
    Ru = {
        readContext: fs,
        useCallback: function (e, t) {
            return ((Js().memoizedState = [e, void 0 === t ? null : t]), e);
        },
        useContext: fs,
        useEffect: vu,
        useImperativeHandle: function (e, t, n) {
            return ((n = null != n ? n.concat([e]) : null), hu(4194308, 4, bu.bind(null, t, e), n));
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
                (e = e.dispatch = Pu.bind(null, Us, e)),
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
            return ((e = Ou.bind(null, e[1])), (Js().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = Us,
                i = Js();
            if (Va) {
                if (void 0 === n) throw Error(Ve(407));
                n = n();
            } else {
                if (((n = t()), null === lc)) throw Error(Ve(349));
                0 != (30 & Fs) || ou(r, t, n);
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
            if (Va) {
                var n = ja;
                ((t = ':' + t + 'R' + (n = (Na & ~(1 << (32 - Un(Na) - 1))).toString(32) + n)),
                    0 < (n = Ws++) && (t += 'H' + n.toString(32)),
                    (t += ':'));
            } else t = ':' + t + 'r' + (n = Ks++).toString(32) + ':';
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Iu = {
        readContext: fs,
        useCallback: Su,
        useContext: fs,
        useEffect: yu,
        useImperativeHandle: _u,
        useInsertionEffect: gu,
        useLayoutEffect: mu,
        useMemo: xu,
        useReducer: tu,
        useRef: du,
        useState: function () {
            return tu(eu);
        },
        useDebugValue: wu,
        useDeferredValue: function (e) {
            return ku(Zs(), Bs.memoizedState, e);
        },
        useTransition: function () {
            return [tu(eu)[0], Zs().memoizedState];
        },
        useMutableSource: ru,
        useSyncExternalStore: iu,
        useId: Eu,
        unstable_isNewReconciler: !1,
    },
    Lu = {
        readContext: fs,
        useCallback: Su,
        useContext: fs,
        useEffect: yu,
        useImperativeHandle: _u,
        useInsertionEffect: gu,
        useLayoutEffect: mu,
        useMemo: xu,
        useReducer: nu,
        useRef: du,
        useState: function () {
            return nu(eu);
        },
        useDebugValue: wu,
        useDeferredValue: function (e) {
            var t = Zs();
            return null === Bs ? (t.memoizedState = e) : ku(t, Bs.memoizedState, e);
        },
        useTransition: function () {
            return [nu(eu)[0], Zs().memoizedState];
        },
        useMutableSource: ru,
        useSyncExternalStore: iu,
        useId: Eu,
        unstable_isNewReconciler: !1,
    };
function Du(e, t) {
    if (e && e.defaultProps) {
        for (var n in ((t = gt({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
    }
    return t;
}
function zu(e, t, n, r) {
    ((n = null == (n = n(r, (t = e.memoizedState))) ? t : gt({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n));
}
var Mu = {
    isMounted: function (e) {
        return !!(e = e._reactInternals) && xn(e) === e;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ic(),
            i = Lc(e),
            o = bs(r, i);
        ((o.payload = t), null != n && (o.callback = n), null !== (t = _s(e, o, i)) && (Dc(t, e, i, r), ws(t, e, i)));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ic(),
            i = Lc(e),
            o = bs(r, i);
        ((o.tag = 1),
            (o.payload = t),
            null != n && (o.callback = n),
            null !== (t = _s(e, o, i)) && (Dc(t, e, i, r), ws(t, e, i)));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Ic(),
            r = Lc(e),
            i = bs(n, r);
        ((i.tag = 2), null != t && (i.callback = t), null !== (t = _s(e, i, r)) && (Dc(t, e, r, n), ws(t, e, r)));
    },
};
function Vu(e, t, n, r, i, o, a) {
    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, o, a)
        : !t.prototype || !t.prototype.isPureReactComponent || !Bi(n, r) || !Bi(i, o);
}
function Fu(e, t, n) {
    var r = !1,
        i = ua,
        o = t.contextType;
    return (
        'object' == typeof o && null !== o
            ? (o = fs(o))
            : ((i = ha(t) ? fa : la.current), (o = (r = null != (r = t.contextTypes)) ? da(e, i) : ua)),
        (t = new t(n, o)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = Mu),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
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
    var i = e.stateNode;
    ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), gs(e));
    var o = t.contextType;
    ('object' == typeof o && null !== o ? (i.context = fs(o)) : ((o = ha(t) ? fa : la.current), (i.context = da(e, o))),
        (i.state = e.memoizedState),
        'function' == typeof (o = t.getDerivedStateFromProps) && (zu(e, t, o, n), (i.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof i.getSnapshotBeforeUpdate ||
            ('function' != typeof i.UNSAFE_componentWillMount && 'function' != typeof i.componentWillMount) ||
            ((t = i.state),
            'function' == typeof i.componentWillMount && i.componentWillMount(),
            'function' == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(),
            t !== i.state && Mu.enqueueReplaceState(i, i.state, null),
            xs(e, n, i, r),
            (i.state = e.memoizedState)),
        'function' == typeof i.componentDidMount && (e.flags |= 4194308));
}
function $u(e, t) {
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
function qu(e, t, n) {
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
var Wu = 'function' == typeof WeakMap ? WeakMap : Map;
function Ku(e, t, n) {
    (((n = bs(-1, n)).tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
        (n.callback = function () {
            (kc || ((kc = !0), (Oc = r)), Hu(0, t));
        }),
        n
    );
}
function Qu(e, t, n) {
    (n = bs(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ('function' == typeof r) {
        var i = t.value;
        ((n.payload = function () {
            return r(i);
        }),
            (n.callback = function () {
                Hu(0, t);
            }));
    }
    var o = e.stateNode;
    return (
        null !== o &&
            'function' == typeof o.componentDidCatch &&
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
        r = e.pingCache = new Wu();
        var i = new Set();
        r.set(t, i);
    } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = af.bind(null, e, t, n)), t.then(e, e));
}
function Yu(e) {
    do {
        var t;
        if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e;
        e = e.return;
    } while (null !== e);
    return null;
}
function Xu(e, t, n, r, i) {
    return 0 == (1 & e.mode)
        ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                1 === n.tag && (null === n.alternate ? (n.tag = 17) : (((t = bs(-1, 1)).tag = 2), _s(n, t, 1))),
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
        (r = Ys(e, t, n, r, o, i)),
        (n = Xs()),
        null === e || Zu
            ? (Va && n && La(t), (t.flags |= 1), el(e, t, r, i), t.child)
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
        if ((n = null !== (n = n.compare) ? n : Bi)(a, r) && e.ref === t.ref) return kl(e, t, i);
    }
    return ((t.flags |= 1), ((e = pf(o, r)).ref = t.ref), (e.return = t), (t.child = e));
}
function rl(e, t, n, r, i) {
    if (null !== e) {
        var o = e.memoizedProps;
        if (Bi(o, r) && e.ref === t.ref) {
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
        (n = Ys(e, t, n, r, o, i)),
        (r = Xs()),
        null === e || Zu
            ? (Va && r && La(t), (t.flags |= 1), el(e, t, n, i), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), kl(e, t, i))
    );
}
function sl(e, t, n, r, i) {
    if (ha(n)) {
        var o = !0;
        ga(t);
    } else o = !1;
    if ((cs(t, i), null === t.stateNode)) (xl(e, t), Fu(t, n, r), Bu(t, n, r, i), (r = !0));
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
            ((s !== r || u !== l) && Uu(t, a, r, l)),
            (ys = !1));
        var d = t.memoizedState;
        ((a.state = d),
            xs(t, r, a, i),
            (u = t.memoizedState),
            s !== r || d !== u || ca.current || ys
                ? ('function' == typeof c && (zu(t, n, c, r), (u = t.memoizedState)),
                  (s = ys || Vu(t, n, s, r, d, u, l))
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
            ms(e, t),
            (s = t.memoizedProps),
            (l = t.type === t.elementType ? s : Du(t.type, s)),
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
            ((s !== f || d !== u) && Uu(t, a, r, u)),
            (ys = !1),
            (d = t.memoizedState),
            (a.state = d),
            xs(t, r, a, i));
        var p = t.memoizedState;
        s !== f || d !== p || ca.current || ys
            ? ('function' == typeof h && (zu(t, n, h, r), (p = t.memoizedState)),
              (l = ys || Vu(t, n, l, r, d, p, u) || !1)
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
    if (!r && !a) return (i && ma(t, n, !1), kl(e, t, o));
    ((r = t.stateNode), (Ju.current = t));
    var s = a && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
    return (
        (t.flags |= 1),
        null !== e && a ? ((t.child = ts(t, e.child, null, o)), (t.child = ts(t, null, s, o))) : el(e, t, s, o),
        (t.memoizedState = r.state),
        i && ma(t, n, !0),
        t.child
    );
}
function ll(e) {
    var t = e.stateNode;
    (t.pendingContext ? va(0, t.pendingContext, t.pendingContext !== t.context) : t.context && va(0, t.context, !1),
        Ts(e, t.containerInfo));
}
function cl(e, t, n, r, i) {
    return (Qa(), Ga(i), (t.flags |= 256), el(e, t, n, r), t.child);
}
var fl,
    dl,
    hl,
    pl,
    vl = { dehydrated: null, treeContext: null, retryLane: 0 };
function yl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function gl(e, t, n) {
    var r,
        i = t.pendingProps,
        o = Is.current,
        a = !1,
        s = 0 != (128 & t.flags);
    if (
        ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)),
        r ? ((a = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (o |= 1),
        sa(Is, 1 & o),
        null === e)
    )
        return (
            qa(t),
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
                            : (a = gf(s, i, 0, null)),
                        (e = yf(e, i, n, null)),
                        (a.return = t),
                        (e.return = t),
                        (a.sibling = e),
                        (t.child = a),
                        (t.child.memoizedState = yl(n)),
                        (t.memoizedState = vl),
                        e)
                      : ml(t, s))
        );
    if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
        return (function (e, t, n, r, i, o, a) {
            if (n)
                return 256 & t.flags
                    ? ((t.flags &= -257), bl(e, t, a, (r = qu(Error(Ve(422))))))
                    : null !== t.memoizedState
                      ? ((t.child = e.child), (t.flags |= 128), null)
                      : ((o = r.fallback),
                        (i = t.mode),
                        (r = gf({ mode: 'visible', children: r.children }, i, 0, null)),
                        ((o = yf(o, i, a, null)).flags |= 2),
                        (r.return = t),
                        (o.return = t),
                        (r.sibling = o),
                        (t.child = r),
                        0 != (1 & t.mode) && ts(t, e.child, null, a),
                        (t.child.memoizedState = yl(a)),
                        (t.memoizedState = vl),
                        o);
            if (0 == (1 & t.mode)) return bl(e, t, a, null);
            if ('$!' === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset)) var s = r.dgst;
                return ((r = s), bl(e, t, a, (r = qu((o = Error(Ve(419))), r, void 0))));
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
                        ((o.retryLane = i), vs(e, i), Dc(r, e, i, -1));
                }
                return (Gc(), bl(e, t, a, (r = qu(Error(Ve(421))))));
            }
            return '$?' === i.data
                ? ((t.flags |= 128), (t.child = e.child), (t = uf.bind(null, e)), (i._reactRetry = t), null)
                : ((e = o.treeContext),
                  (Ma = qo(i.nextSibling)),
                  (za = t),
                  (Va = !0),
                  (Fa = null),
                  null !== e &&
                      ((Ca[Aa++] = Na), (Ca[Aa++] = ja), (Ca[Aa++] = Ta), (Na = e.id), (ja = e.overflow), (Ta = t)),
                  (t = ml(t, r.children)),
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
            null !== r ? (a = pf(r, a)) : ((a = yf(a, s, n, null)).flags |= 2),
            (a.return = t),
            (i.return = t),
            (i.sibling = a),
            (t.child = i),
            (i = a),
            (a = t.child),
            (s =
                null === (s = e.child.memoizedState)
                    ? yl(n)
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
function ml(e, t) {
    return (((t = gf({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t));
}
function bl(e, t, n, r) {
    return (
        null !== r && Ga(r),
        ts(t, e.child, null, n),
        ((e = ml(t, t.pendingProps.children)).flags |= 2),
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
    if ((el(e, t, r.children, n), 0 != (2 & (r = Is.current)))) ((r = (1 & r) | 2), (t.flags |= 128));
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
    if ((sa(Is, r), 0 == (1 & t.mode))) t.memoizedState = null;
    else
        switch (i) {
            case 'forwards':
                for (n = t.child, i = null; null !== n; )
                    (null !== (e = n.alternate) && null === Ls(e) && (i = n), (n = n.sibling));
                (null === (n = i) ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
                    wl(t, !1, i, n, o));
                break;
            case 'backwards':
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                    if (null !== (e = i.alternate) && null === Ls(e)) {
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
function xl(e, t) {
    0 == (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function kl(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (yc |= t.lanes), 0 == (n & t.childLanes))) return null;
    if (null !== e && t.child !== e.child) throw Error(Ve(153));
    if (null !== t.child) {
        for (n = pf((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            ((e = e.sibling), ((n = n.sibling = pf(e, e.pendingProps)).return = t));
        n.sibling = null;
    }
    return t.child;
}
function Ol(e, t) {
    if (!Va)
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
function El(e) {
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
function Pl(e, t, n) {
    var r = t.pendingProps;
    switch ((Da(t), t.tag)) {
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
            return (El(t), null);
        case 1:
        case 17:
            return (ha(t.type) && pa(), El(t), null);
        case 3:
            return (
                (r = t.stateNode),
                Ns(),
                aa(ca),
                aa(la),
                zs(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                    (Wa(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                          ((t.flags |= 1024), null !== Fa && (Fc(Fa), (Fa = null)))),
                dl(e, t),
                El(t),
                null
            );
        case 5:
            Rs(t);
            var i = As(Cs.current);
            if (((n = t.type), null !== e && null != t.stateNode))
                (hl(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(Ve(166));
                    return (El(t), null);
                }
                if (((e = As(Es.current)), Wa(t))) {
                    ((r = t.stateNode), (n = t.type));
                    var o = t.memoizedProps;
                    switch (((r[Ko] = t), (r[Qo] = o), (e = 0 != (1 & t.mode)), n)) {
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
                            for (i = 0; i < yo.length; i++) _o(yo[i], r);
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
                            (Tt(r, o), _o('invalid', r));
                            break;
                        case 'select':
                            ((r._wrapperState = { wasMultiple: !!o.multiple }), _o('invalid', r));
                            break;
                        case 'textarea':
                            (Mt(r, o), _o('invalid', r));
                    }
                    for (var a in (Jt(n, o), (i = null), o))
                        if (o.hasOwnProperty(a)) {
                            var s = o[a];
                            'children' === a
                                ? 'string' == typeof s
                                    ? r.textContent !== s &&
                                      (!0 !== o.suppressHydrationWarning && Ro(r.textContent, s, e),
                                      (i = ['children', s]))
                                    : 'number' == typeof s &&
                                      r.textContent !== '' + s &&
                                      (!0 !== o.suppressHydrationWarning && Ro(r.textContent, s, e),
                                      (i = ['children', '' + s]))
                                : Ue.hasOwnProperty(a) && null != s && 'onScroll' === a && _o('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            (Et(r), Rt(r, o, !0));
                            break;
                        case 'textarea':
                            (Et(r), Ft(r));
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            'function' == typeof o.onClick && (r.onclick = Io);
                    }
                    ((r = i), (t.updateQueue = r), null !== r && (t.flags |= 4));
                } else {
                    ((a = 9 === i.nodeType ? i : i.ownerDocument),
                        'http://www.w3.org/1999/xhtml' === e && (e = Ut(n)),
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
                        (e[Qo] = r),
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
                                for (i = 0; i < yo.length; i++) _o(yo[i], e);
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
                                (Tt(e, r), (i = At(e, r)), _o('invalid', e));
                                break;
                            case 'option':
                            default:
                                i = r;
                                break;
                            case 'select':
                                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (i = gt({}, r, { value: void 0 })),
                                    _o('invalid', e));
                                break;
                            case 'textarea':
                                (Mt(e, r), (i = zt(e, r)), _o('invalid', e));
                        }
                        for (o in (Jt(n, i), (s = i)))
                            if (s.hasOwnProperty(o)) {
                                var u = s[o];
                                'style' === o
                                    ? Yt(e, u)
                                    : 'dangerouslySetInnerHTML' === o
                                      ? null != (u = u ? u.__html : void 0) && Ht(e, u)
                                      : 'children' === o
                                        ? 'string' == typeof u
                                            ? ('textarea' !== n || '' !== u) && Wt(e, u)
                                            : 'number' == typeof u && Wt(e, '' + u)
                                        : 'suppressContentEditableWarning' !== o &&
                                          'suppressHydrationWarning' !== o &&
                                          'autoFocus' !== o &&
                                          (Ue.hasOwnProperty(o)
                                              ? null != u && 'onScroll' === o && _o('scroll', e)
                                              : null != u && Ze(e, o, u, a));
                            }
                        switch (n) {
                            case 'input':
                                (Et(e), Rt(e, r, !1));
                                break;
                            case 'textarea':
                                (Et(e), Ft(e));
                                break;
                            case 'option':
                                null != r.value && e.setAttribute('value', '' + kt(r.value));
                                break;
                            case 'select':
                                ((e.multiple = !!r.multiple),
                                    null != (o = r.value)
                                        ? Dt(e, !!r.multiple, o, !1)
                                        : null != r.defaultValue && Dt(e, !!r.multiple, r.defaultValue, !0));
                                break;
                            default:
                                'function' == typeof i.onClick && (e.onclick = Io);
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
            return (El(t), null);
        case 6:
            if (e && null != t.stateNode) pl(e, t, e.memoizedProps, r);
            else {
                if ('string' != typeof r && null === t.stateNode) throw Error(Ve(166));
                if (((n = As(Cs.current)), As(Es.current), Wa(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Ko] = t),
                        (o = r.nodeValue !== n) && null !== (e = za))
                    )
                        switch (e.tag) {
                            case 3:
                                Ro(r.nodeValue, n, 0 != (1 & e.mode));
                                break;
                            case 5:
                                !0 !== e.memoizedProps.suppressHydrationWarning &&
                                    Ro(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                    o && (t.flags |= 4);
                } else (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Ko] = t), (t.stateNode = r));
            }
            return (El(t), null);
        case 13:
            if (
                (aa(Is),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (Va && null !== Ma && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                    (Ka(), Qa(), (t.flags |= 98560), (o = !1));
                else if (((o = Wa(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!o) throw Error(Ve(318));
                        if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null)) throw Error(Ve(317));
                        o[Ko] = t;
                    } else (Qa(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                    (El(t), (o = !1));
                } else (null !== Fa && (Fc(Fa), (Fa = null)), (o = !0));
                if (!o) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) && (null === e || 0 != (1 & Is.current) ? 0 === pc && (pc = 3) : Gc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  El(t),
                  null);
        case 4:
            return (Ns(), dl(e, t), null === e && xo(t.stateNode.containerInfo), El(t), null);
        case 10:
            return (us(t.type._context), El(t), null);
        case 19:
            if ((aa(Is), null === (o = t.memoizedState))) return (El(t), null);
            if (((r = 0 != (128 & t.flags)), null === (a = o.rendering)))
                if (r) Ol(o, !1);
                else {
                    if (0 !== pc || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (a = Ls(e))) {
                                for (
                                    t.flags |= 128,
                                        Ol(o, !1),
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
                                return (sa(Is, (1 & Is.current) | 2), t.child);
                            }
                            e = e.sibling;
                        }
                    null !== o.tail && jn() > Sc && ((t.flags |= 128), (r = !0), Ol(o, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = Ls(a))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            Ol(o, !0),
                            null === o.tail && 'hidden' === o.tailMode && !a.alternate && !Va)
                        )
                            return (El(t), null);
                    } else
                        2 * jn() - o.renderingStartTime > Sc &&
                            1073741824 !== n &&
                            ((t.flags |= 128), (r = !0), Ol(o, !1), (t.lanes = 4194304));
                o.isBackwards
                    ? ((a.sibling = t.child), (t.child = a))
                    : (null !== (n = o.last) ? (n.sibling = a) : (t.child = a), (o.last = a));
            }
            return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = jn()),
                  (t.sibling = null),
                  (n = Is.current),
                  sa(Is, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (El(t), null);
        case 22:
        case 23:
            return (
                Hc(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 != (1 & t.mode)
                    ? 0 != (1073741824 & dc) && (El(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                    : El(t),
                null
            );
        case 24:
        case 25:
            return null;
    }
    throw Error(Ve(156, t.tag));
}
function Cl(e, t) {
    switch ((Da(t), t.tag)) {
        case 1:
            return (ha(t.type) && pa(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null);
        case 3:
            return (
                Ns(),
                aa(ca),
                aa(la),
                zs(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 5:
            return (Rs(t), null);
        case 13:
            if ((aa(Is), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(Ve(340));
                Qa();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return (aa(Is), null);
        case 4:
            return (Ns(), null);
        case 10:
            return (us(t.type._context), null);
        case 22:
        case 23:
            return (Hc(), null);
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
            ((e = t.stateNode), As(Es.current));
            var o,
                a = null;
            switch (n) {
                case 'input':
                    ((i = At(e, i)), (r = At(e, r)), (a = []));
                    break;
                case 'select':
                    ((i = gt({}, i, { value: void 0 })), (r = gt({}, r, { value: void 0 })), (a = []));
                    break;
                case 'textarea':
                    ((i = zt(e, i)), (r = zt(e, r)), (a = []));
                    break;
                default:
                    'function' != typeof i.onClick && 'function' == typeof r.onClick && (e.onclick = Io);
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
                            (Ue.hasOwnProperty(l) ? a || (a = []) : (a = a || []).push(l, null));
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
                                (Ue.hasOwnProperty(l)
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
var Al = !1,
    Tl = !1,
    Nl = 'function' == typeof WeakSet ? WeakSet : Set,
    jl = null;
function Rl(e, t) {
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
function Il(e, t, n) {
    try {
        n();
    } catch (r) {
        of(e, t, r);
    }
}
var Ll = !1;
function Dl(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var i = (r = r.next);
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                ((i.destroy = void 0), void 0 !== o && Il(t, n, o));
            }
            i = i.next;
        } while (i !== r);
    }
}
function zl(e, t) {
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
function Ml(e) {
    var t = e.ref;
    if (null !== t) {
        var n = e.stateNode;
        (e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e));
    }
}
function Vl(e) {
    var t = e.alternate;
    (null !== t && ((e.alternate = null), Vl(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[Ko], delete t[Qo], delete t[Yo], delete t[Xo], delete t[Jo]),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
}
function Fl(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function Ul(e) {
    e: for (;;) {
        for (; null === e.sibling; ) {
            if (null === e.return || Fl(e.return)) return null;
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
function Bl(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
        ((e = e.stateNode),
            t
                ? 8 === n.nodeType
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Io)));
    else if (4 !== r && null !== (e = e.child))
        for (Bl(e, t, n), e = e.sibling; null !== e; ) (Bl(e, t, n), (e = e.sibling));
}
function $l(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (4 !== r && null !== (e = e.child))
        for ($l(e, t, n), e = e.sibling; null !== e; ) ($l(e, t, n), (e = e.sibling));
}
var ql = null,
    Hl = !1;
function Wl(e, t, n) {
    for (n = n.child; null !== n; ) (Kl(e, t, n), (n = n.sibling));
}
function Kl(e, t, n) {
    if (Fn && 'function' == typeof Fn.onCommitFiberUnmount)
        try {
            Fn.onCommitFiberUnmount(Vn, n);
        } catch (s) {}
    switch (n.tag) {
        case 5:
            Tl || Rl(n, t);
        case 6:
            var r = ql,
                i = Hl;
            ((ql = null),
                Wl(e, t, n),
                (Hl = i),
                null !== (ql = r) &&
                    (Hl
                        ? ((e = ql),
                          (n = n.stateNode),
                          8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : ql.removeChild(n.stateNode)));
            break;
        case 18:
            null !== ql &&
                (Hl
                    ? ((e = ql),
                      (n = n.stateNode),
                      8 === e.nodeType ? $o(e.parentNode, n) : 1 === e.nodeType && $o(e, n),
                      xr(e))
                    : $o(ql, n.stateNode));
            break;
        case 4:
            ((r = ql), (i = Hl), (ql = n.stateNode.containerInfo), (Hl = !0), Wl(e, t, n), (ql = r), (Hl = i));
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Tl && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                i = r = r.next;
                do {
                    var o = i,
                        a = o.destroy;
                    ((o = o.tag), void 0 !== a && (0 != (2 & o) || 0 != (4 & o)) && Il(n, t, a), (i = i.next));
                } while (i !== r);
            }
            Wl(e, t, n);
            break;
        case 1:
            if (!Tl && (Rl(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount))
                try {
                    ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
                } catch (s) {
                    of(n, t, s);
                }
            Wl(e, t, n);
            break;
        case 21:
            Wl(e, t, n);
            break;
        case 22:
            1 & n.mode ? ((Tl = (r = Tl) || null !== n.memoizedState), Wl(e, t, n), (Tl = r)) : Wl(e, t, n);
            break;
        default:
            Wl(e, t, n);
    }
}
function Ql(e) {
    var t = e.updateQueue;
    if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        (null === n && (n = e.stateNode = new Nl()),
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
                            ((ql = s.stateNode), (Hl = !1));
                            break e;
                        case 3:
                        case 4:
                            ((ql = s.stateNode.containerInfo), (Hl = !0));
                            break e;
                    }
                    s = s.return;
                }
                if (null === ql) throw Error(Ve(160));
                (Kl(o, a, i), (ql = null), (Hl = !1));
                var u = i.alternate;
                (null !== u && (u.return = null), (i.return = null));
            } catch (l) {
                of(i, t, l);
            }
        }
    if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) (Yl(t, e), (t = t.sibling));
}
function Yl(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Gl(t, e), Xl(e), 4 & r)) {
                try {
                    (Dl(3, e, e.return), zl(3, e));
                } catch (v) {
                    of(e, e.return, v);
                }
                try {
                    Dl(5, e, e.return);
                } catch (v) {
                    of(e, e.return, v);
                }
            }
            break;
        case 1:
            (Gl(t, e), Xl(e), 512 & r && null !== n && Rl(n, n.return));
            break;
        case 5:
            if ((Gl(t, e), Xl(e), 512 & r && null !== n && Rl(n, n.return), 32 & e.flags)) {
                var i = e.stateNode;
                try {
                    Wt(i, '');
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
                        ('input' === s && 'radio' === o.type && null != o.name && Nt(i, o), Zt(s, a));
                        var l = Zt(s, o);
                        for (a = 0; a < u.length; a += 2) {
                            var c = u[a],
                                f = u[a + 1];
                            'style' === c
                                ? Yt(i, f)
                                : 'dangerouslySetInnerHTML' === c
                                  ? Ht(i, f)
                                  : 'children' === c
                                    ? Wt(i, f)
                                    : Ze(i, c, f, l);
                        }
                        switch (s) {
                            case 'input':
                                jt(i, o);
                                break;
                            case 'textarea':
                                Vt(i, o);
                                break;
                            case 'select':
                                var d = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!o.multiple;
                                var h = o.value;
                                null != h
                                    ? Dt(i, !!o.multiple, h, !1)
                                    : d !== !!o.multiple &&
                                      (null != o.defaultValue
                                          ? Dt(i, !!o.multiple, o.defaultValue, !0)
                                          : Dt(i, !!o.multiple, o.multiple ? [] : '', !1));
                        }
                        i[Qo] = o;
                    } catch (v) {
                        of(e, e.return, v);
                    }
            }
            break;
        case 6:
            if ((Gl(t, e), Xl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(Ve(162));
                ((i = e.stateNode), (o = e.memoizedProps));
                try {
                    i.nodeValue = o;
                } catch (v) {
                    of(e, e.return, v);
                }
            }
            break;
        case 3:
            if ((Gl(t, e), Xl(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                    xr(t.containerInfo);
                } catch (v) {
                    of(e, e.return, v);
                }
            break;
        case 4:
        default:
            (Gl(t, e), Xl(e));
            break;
        case 13:
            (Gl(t, e),
                Xl(e),
                8192 & (i = e.child).flags &&
                    ((o = null !== i.memoizedState),
                    (i.stateNode.isHidden = o),
                    !o || (null !== i.alternate && null !== i.alternate.memoizedState) || (wc = jn())),
                4 & r && Ql(e));
            break;
        case 22:
            if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Tl = (l = Tl) || c), Gl(t, e), (Tl = l)) : Gl(t, e),
                Xl(e),
                8192 & r)
            ) {
                if (((l = null !== e.memoizedState), (e.stateNode.isHidden = l) && !c && 0 != (1 & e.mode)))
                    for (jl = e, c = e.child; null !== c; ) {
                        for (f = jl = c; null !== jl; ) {
                            switch (((h = (d = jl).child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Dl(4, d, d.return);
                                    break;
                                case 1:
                                    Rl(d, d.return);
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
                                    Rl(d, d.return);
                                    break;
                                case 22:
                                    if (null !== d.memoizedState) {
                                        tc(f);
                                        continue;
                                    }
                            }
                            null !== h ? ((h.return = d), (jl = h)) : tc(f);
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
            (Gl(t, e), Xl(e), 4 & r && Ql(e));
        case 21:
    }
}
function Xl(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e: {
                for (var n = e.return; null !== n; ) {
                    if (Fl(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(Ve(160));
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    (32 & r.flags && (Wt(i, ''), (r.flags &= -33)), $l(e, Ul(e), i));
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo;
                    Bl(e, Ul(e), o);
                    break;
                default:
                    throw Error(Ve(161));
            }
        } catch (a) {
            of(e, e.return, a);
        }
        e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
}
function Jl(e, t, n) {
    ((jl = e), Zl(e));
}
function Zl(e, t, n) {
    for (var r = 0 != (1 & e.mode); null !== jl; ) {
        var i = jl,
            o = i.child;
        if (22 === i.tag && r) {
            var a = null !== i.memoizedState || Al;
            if (!a) {
                var s = i.alternate,
                    u = (null !== s && null !== s.memoizedState) || Tl;
                s = Al;
                var l = Tl;
                if (((Al = a), (Tl = u) && !l))
                    for (jl = i; null !== jl; )
                        ((u = (a = jl).child),
                            22 === a.tag && null !== a.memoizedState
                                ? nc(i)
                                : null !== u
                                  ? ((u.return = a), (jl = u))
                                  : nc(i));
                for (; null !== o; ) ((jl = o), Zl(o), (o = o.sibling));
                ((jl = i), (Al = s), (Tl = l));
            }
            ec(e);
        } else 0 != (8772 & i.subtreeFlags) && null !== o ? ((o.return = i), (jl = o)) : ec(e);
    }
}
function ec(e) {
    for (; null !== jl; ) {
        var t = jl;
        if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
                if (0 != (8772 & t.flags))
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Tl || zl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (4 & t.flags && !Tl)
                                if (null === n) r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : Du(t.type, n.memoizedProps);
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
                                        null !== f && xr(f);
                                    }
                                }
                            }
                            break;
                        default:
                            throw Error(Ve(163));
                    }
                Tl || (512 & t.flags && Ml(t));
            } catch (d) {
                of(t, t.return, d);
            }
        }
        if (t === e) {
            jl = null;
            break;
        }
        if (null !== (n = t.sibling)) {
            ((n.return = t.return), (jl = n));
            break;
        }
        jl = t.return;
    }
}
function tc(e) {
    for (; null !== jl; ) {
        var t = jl;
        if (t === e) {
            jl = null;
            break;
        }
        var n = t.sibling;
        if (null !== n) {
            ((n.return = t.return), (jl = n));
            break;
        }
        jl = t.return;
    }
}
function nc(e) {
    for (; null !== jl; ) {
        var t = jl;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        zl(4, t);
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
                        Ml(t);
                    } catch (u) {
                        of(t, o, u);
                    }
                    break;
                case 5:
                    var a = t.return;
                    try {
                        Ml(t);
                    } catch (u) {
                        of(t, a, u);
                    }
            }
        } catch (u) {
            of(t, t.return, u);
        }
        if (t === e) {
            jl = null;
            break;
        }
        var s = t.sibling;
        if (null !== s) {
            ((s.return = t.return), (jl = s));
            break;
        }
        jl = t.return;
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
    yc = 0,
    gc = 0,
    mc = 0,
    bc = null,
    _c = null,
    wc = 0,
    Sc = 1 / 0,
    xc = null,
    kc = !1,
    Oc = null,
    Ec = null,
    Pc = !1,
    Cc = null,
    Ac = 0,
    Tc = 0,
    Nc = null,
    jc = -1,
    Rc = 0;
function Ic() {
    return 0 != (6 & uc) ? jn() : -1 !== jc ? jc : (jc = jn());
}
function Lc(e) {
    return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & uc) && 0 !== fc
          ? fc & -fc
          : null !== Ya.transition
            ? (0 === Rc && (Rc = Yn()), Rc)
            : 0 !== (e = er)
              ? e
              : (e = void 0 === (e = window.event) ? 16 : Nr(e.type));
}
function Dc(e, t, n, r) {
    if (50 < Tc) throw ((Tc = 0), (Nc = null), Error(Ve(185)));
    (Jn(e, n, r),
        (0 != (2 & uc) && e === lc) ||
            (e === lc && (0 == (2 & uc) && (gc |= n), 4 === pc && Uc(e, fc)),
            zc(e, r),
            1 === n && 0 === uc && 0 == (1 & t.mode) && ((Sc = jn() + 500), _a && xa())));
}
function zc(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
            var a = 31 - Un(o),
                s = 1 << a,
                u = i[a];
            (-1 === u ? (0 != (s & n) && 0 == (s & r)) || (i[a] = Qn(s, t)) : u <= t && (e.expiredLanes |= s),
                (o &= ~s));
        }
    })(e, t);
    var r = Kn(e, e === lc ? fc : 0);
    if (0 === r) (null !== n && An(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && An(n), 1 === t))
            (0 === e.tag
                ? (function (e) {
                      ((_a = !0), Sa(e));
                  })(Bc.bind(null, e))
                : Sa(Bc.bind(null, e)),
                Uo(function () {
                    0 == (6 & uc) && xa();
                }),
                (n = null));
        else {
            switch (tr(r)) {
                case 1:
                    n = In;
                    break;
                case 4:
                    n = Ln;
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
    var r = Kn(e, e === lc ? fc : 0);
    if (0 === r) return null;
    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = Yc(e, r);
    else {
        t = r;
        var i = uc;
        uc |= 2;
        var o = Qc();
        for ((lc === e && fc === t) || ((xc = null), (Sc = jn() + 500), Wc(e, t)); ; )
            try {
                Jc();
                break;
            } catch (s) {
                Kc(e, s);
            }
        (ss(), (oc.current = o), (uc = i), null !== cc ? (t = 0) : ((lc = null), (fc = 0), (t = pc)));
    }
    if (0 !== t) {
        if ((2 === t && 0 !== (i = Gn(e)) && ((r = i), (t = Vc(e, i))), 1 === t))
            throw ((n = vc), Wc(e, 0), Uc(e, r), zc(e, jn()), n);
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
                                            o = i.getSnapshot;
                                        i = i.value;
                                        try {
                                            if (!Ui(o(), i)) return !1;
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
                    (2 === (t = Yc(e, r)) && 0 !== (o = Gn(e)) && ((r = o), (t = Vc(e, o))), 1 === t))
            )
                throw ((n = vc), Wc(e, 0), Uc(e, r), zc(e, jn()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(Ve(345));
                case 2:
                case 5:
                    tf(e, _c, xc);
                    break;
                case 3:
                    if ((Uc(e, r), (130023424 & r) === r && 10 < (t = wc + 500 - jn()))) {
                        if (0 !== Kn(e, 0)) break;
                        if (((i = e.suspendedLanes) & r) !== r) {
                            (Ic(), (e.pingedLanes |= e.suspendedLanes & i));
                            break;
                        }
                        e.timeoutHandle = Mo(tf.bind(null, e, _c, xc), t);
                        break;
                    }
                    tf(e, _c, xc);
                    break;
                case 4:
                    if ((Uc(e, r), (4194240 & r) === r)) break;
                    for (t = e.eventTimes, i = -1; 0 < r; ) {
                        var a = 31 - Un(r);
                        ((o = 1 << a), (a = t[a]) > i && (i = a), (r &= ~o));
                    }
                    if (
                        ((r = i),
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
                                              : 1960 * ic(r / 1960)) - r))
                    ) {
                        e.timeoutHandle = Mo(tf.bind(null, e, _c, xc), r);
                        break;
                    }
                    tf(e, _c, xc);
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
        e.current.memoizedState.isDehydrated && (Wc(e, t).flags |= 256),
        2 !== (e = Yc(e, t)) && ((t = _c), (_c = n), null !== t && Fc(t)),
        e
    );
}
function Fc(e) {
    null === _c ? (_c = e) : _c.push.apply(_c, e);
}
function Uc(e, t) {
    for (t &= ~mc, t &= ~gc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Un(t),
            r = 1 << n;
        ((e[n] = -1), (t &= ~r));
    }
}
function Bc(e) {
    if (0 != (6 & uc)) throw Error(Ve(327));
    nf();
    var t = Kn(e, 0);
    if (0 == (1 & t)) return (zc(e, jn()), null);
    var n = Yc(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = Gn(e);
        0 !== r && ((t = r), (n = Vc(e, r)));
    }
    if (1 === n) throw ((n = vc), Wc(e, 0), Uc(e, t), zc(e, jn()), n);
    if (6 === n) throw Error(Ve(345));
    return ((e.finishedWork = e.current.alternate), (e.finishedLanes = t), tf(e, _c, xc), zc(e, jn()), null);
}
function $c(e, t) {
    var n = uc;
    uc |= 1;
    try {
        return e(t);
    } finally {
        0 === (uc = n) && ((Sc = jn() + 500), _a && xa());
    }
}
function qc(e) {
    null !== Cc && 0 === Cc.tag && 0 == (6 & uc) && nf();
    var t = uc;
    uc |= 1;
    var n = sc.transition,
        r = er;
    try {
        if (((sc.transition = null), (er = 1), e)) return e();
    } finally {
        ((er = r), (sc.transition = n), 0 == (6 & (uc = t)) && xa());
    }
}
function Hc() {
    ((dc = hc.current), aa(hc));
}
function Wc(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), Vo(n)), null !== cc))
        for (n = cc.return; null !== n; ) {
            var r = n;
            switch ((Da(r), r.tag)) {
                case 1:
                    null != (r = r.type.childContextTypes) && pa();
                    break;
                case 3:
                    (Ns(), aa(ca), aa(la), zs());
                    break;
                case 5:
                    Rs(r);
                    break;
                case 4:
                    Ns();
                    break;
                case 13:
                case 19:
                    aa(Is);
                    break;
                case 10:
                    us(r.type._context);
                    break;
                case 22:
                case 23:
                    Hc();
            }
            n = n.return;
        }
    if (
        ((lc = e),
        (cc = e = pf(e.current, null)),
        (fc = dc = t),
        (pc = 0),
        (vc = null),
        (mc = gc = yc = 0),
        (_c = bc = null),
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
            if ((ss(), (Ms.current = ju), qs)) {
                for (var r = Us.memoizedState; null !== r; ) {
                    var i = r.queue;
                    (null !== i && (i.pending = null), (r = r.next));
                }
                qs = !1;
            }
            if (
                ((Fs = 0),
                ($s = Bs = Us = null),
                (Hs = !1),
                (Ws = 0),
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
                    var h = Yu(a);
                    if (null !== h) {
                        ((h.flags &= -257), Xu(h, a, s, 0, t), 1 & h.mode && Gu(o, l, t), (u = l));
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
                    u = Error(Ve(426));
                } else if (Va && 1 & s.mode) {
                    var y = Yu(a);
                    if (null !== y) {
                        (0 == (65536 & y.flags) && (y.flags |= 256), Xu(y, a, s, 0, t), Ga($u(u, s)));
                        break e;
                    }
                }
                ((o = u = $u(u, s)), 4 !== pc && (pc = 2), null === bc ? (bc = [o]) : bc.push(o), (o = a));
                do {
                    switch (o.tag) {
                        case 3:
                            ((o.flags |= 65536), (t &= -t), (o.lanes |= t), Ss(o, Ku(0, u, t)));
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
                                        (null === Ec || !Ec.has(m))))
                            ) {
                                ((o.flags |= 65536), (t &= -t), (o.lanes |= t), Ss(o, Qu(o, s, t)));
                                break e;
                            }
                    }
                    o = o.return;
                } while (null !== o);
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
    var e = oc.current;
    return ((oc.current = ju), null === e ? ju : e);
}
function Gc() {
    ((0 !== pc && 3 !== pc && 2 !== pc) || (pc = 4),
        null === lc || (0 == (268435455 & yc) && 0 == (268435455 & gc)) || Uc(lc, fc));
}
function Yc(e, t) {
    var n = uc;
    uc |= 2;
    var r = Qc();
    for ((lc === e && fc === t) || ((xc = null), Wc(e, t)); ; )
        try {
            Xc();
            break;
        } catch (i) {
            Kc(e, i);
        }
    if ((ss(), (uc = n), (oc.current = r), null !== cc)) throw Error(Ve(261));
    return ((lc = null), (fc = 0), pc);
}
function Xc() {
    for (; null !== cc; ) Zc(cc);
}
function Jc() {
    for (; null !== cc && !Tn(); ) Zc(cc);
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
            if (null !== (n = Pl(n, t, dc))) return void (cc = n);
        } else {
            if (null !== (n = Cl(n, t))) return ((n.flags &= 32767), void (cc = n));
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
                } while (null !== Cc);
                if (0 != (6 & uc)) throw Error(Ve(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(Ve(177));
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
                            var i = 31 - Un(n),
                                o = 1 << i;
                            ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o));
                        }
                    })(e, o),
                    e === lc && ((cc = lc = null), (fc = 0)),
                    (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                        Pc ||
                        ((Pc = !0),
                        cf(Dn, function () {
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
                            if (((Lo = Or), Ki((e = Wi())))) {
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
                            for (Do = { focusedElem: e, selectionRange: n }, Or = !1, jl = t; null !== jl; )
                                if (((e = (t = jl).child), 0 != (1028 & t.subtreeFlags) && null !== e))
                                    ((e.return = t), (jl = e));
                                else
                                    for (; null !== jl; ) {
                                        t = jl;
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
                                                                    t.elementType === t.type ? v : Du(t.type, v),
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
                                                        throw Error(Ve(163));
                                                }
                                        } catch (_) {
                                            of(t, t.return, _);
                                        }
                                        if (null !== (e = t.sibling)) {
                                            ((e.return = t.return), (jl = e));
                                            break;
                                        }
                                        jl = t.return;
                                    }
                            ((p = Ll), (Ll = !1));
                        })(e, n),
                        Yl(n, e),
                        Qi(Do),
                        (Or = !!Lo),
                        (Do = Lo = null),
                        (e.current = n),
                        Jl(n),
                        Nn(),
                        (uc = s),
                        (er = a),
                        (sc.transition = o));
                } else e.current = n;
                if (
                    (Pc && ((Pc = !1), (Cc = e), (Ac = i)),
                    (o = e.pendingLanes),
                    0 === o && (Ec = null),
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
                        ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
                if (kc) throw ((kc = !1), (e = Oc), (Oc = null), e);
                (0 != (1 & Ac) && 0 !== e.tag && nf(),
                    (o = e.pendingLanes),
                    0 != (1 & o) ? (e === Nc ? Tc++ : ((Tc = 0), (Nc = e))) : (Tc = 0),
                    xa());
            })(e, t, n, r));
    } finally {
        ((sc.transition = i), (er = r));
    }
    return null;
}
function nf() {
    if (null !== Cc) {
        var e = tr(Ac),
            t = sc.transition,
            n = er;
        try {
            if (((sc.transition = null), (er = 16 > e ? 16 : e), null === Cc)) var r = !1;
            else {
                if (((e = Cc), (Cc = null), (Ac = 0), 0 != (6 & uc))) throw Error(Ve(331));
                var i = uc;
                for (uc |= 4, jl = e.current; null !== jl; ) {
                    var o = jl,
                        a = o.child;
                    if (0 != (16 & jl.flags)) {
                        var s = o.deletions;
                        if (null !== s) {
                            for (var u = 0; u < s.length; u++) {
                                var l = s[u];
                                for (jl = l; null !== jl; ) {
                                    var c = jl;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Dl(8, c, o);
                                    }
                                    var f = c.child;
                                    if (null !== f) ((f.return = c), (jl = f));
                                    else
                                        for (; null !== jl; ) {
                                            var d = (c = jl).sibling,
                                                h = c.return;
                                            if ((Vl(c), c === l)) {
                                                jl = null;
                                                break;
                                            }
                                            if (null !== d) {
                                                ((d.return = h), (jl = d));
                                                break;
                                            }
                                            jl = h;
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
                            jl = o;
                        }
                    }
                    if (0 != (2064 & o.subtreeFlags) && null !== a) ((a.return = o), (jl = a));
                    else
                        e: for (; null !== jl; ) {
                            if (0 != (2048 & (o = jl).flags))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Dl(9, o, o.return);
                                }
                            var g = o.sibling;
                            if (null !== g) {
                                ((g.return = o.return), (jl = g));
                                break e;
                            }
                            jl = o.return;
                        }
                }
                var m = e.current;
                for (jl = m; null !== jl; ) {
                    var b = (a = jl).child;
                    if (0 != (2064 & a.subtreeFlags) && null !== b) ((b.return = a), (jl = b));
                    else
                        e: for (a = m; null !== jl; ) {
                            if (0 != (2048 & (s = jl).flags))
                                try {
                                    switch (s.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            zl(9, s);
                                    }
                                } catch (w) {
                                    of(s, s.return, w);
                                }
                            if (s === a) {
                                jl = null;
                                break e;
                            }
                            var _ = s.sibling;
                            if (null !== _) {
                                ((_.return = s.return), (jl = _));
                                break e;
                            }
                            jl = s.return;
                        }
                }
                if (((uc = i), xa(), Fn && 'function' == typeof Fn.onPostCommitFiberRoot))
                    try {
                        Fn.onPostCommitFiberRoot(Vn, e);
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
    ((e = _s(e, (t = Ku(0, (t = $u(n, t)), 1)), 1)), (t = Ic()), null !== e && (Jn(e, 1, t), zc(e, t)));
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
                    ('function' == typeof r.componentDidCatch && (null === Ec || !Ec.has(r)))
                ) {
                    ((t = _s(t, (e = Qu(t, (e = $u(n, e)), 1)), 1)), (e = Ic()), null !== t && (Jn(t, 1, e), zc(t, e)));
                    break;
                }
            }
            t = t.return;
        }
}
function af(e, t, n) {
    var r = e.pingCache;
    (null !== r && r.delete(t),
        (t = Ic()),
        (e.pingedLanes |= e.suspendedLanes & n),
        lc === e &&
            (fc & n) === n &&
            (4 === pc || (3 === pc && (130023424 & fc) === fc && 500 > jn() - wc) ? Wc(e, 0) : (mc |= n)),
        zc(e, t));
}
function sf(e, t) {
    0 === t && (0 == (1 & e.mode) ? (t = 1) : ((t = Hn), 0 == (130023424 & (Hn <<= 1)) && (Hn = 4194304)));
    var n = Ic();
    null !== (e = vs(e, t)) && (Jn(e, t, n), zc(e, n));
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
            throw Error(Ve(314));
    }
    (null !== r && r.delete(t), sf(e, n));
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
                return yf(n.children, i, o, t);
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
                return gf(n, i, o, t);
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
                throw Error(Ve(130, null == e ? e : typeof e, ''));
        }
    return (((t = df(a, n, t, i)).elementType = e), (t.type = r), (t.lanes = o), t);
}
function yf(e, t, n, r) {
    return (((e = df(7, e, r, t)).lanes = n), e);
}
function gf(e, t, n, r) {
    return (((e = df(22, e, r, t)).elementType = ht), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e);
}
function mf(e, t, n) {
    return (((e = df(6, e, null, t)).lanes = n), e);
}
function bf(e, t, n) {
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
        gs(o),
        e
    );
}
function Sf(e) {
    if (!e) return ua;
    e: {
        if (xn((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(Ve(170));
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
        throw Error(Ve(171));
    }
    if (1 === e.tag) {
        var n = e.type;
        if (ha(n)) return ya(e, n, t);
    }
    return t;
}
function xf(e, t, n, r, i, o, a, s, u) {
    return (
        ((e = wf(n, r, !0, e, 0, o, 0, s, u)).context = Sf(null)),
        (n = e.current),
        ((o = bs((r = Ic()), (i = Lc(n)))).callback = null != t ? t : null),
        _s(n, o, i),
        (e.current.lanes = i),
        Jn(e, i, r),
        zc(e, r),
        e
    );
}
function kf(e, t, n, r) {
    var i = t.current,
        o = Ic(),
        a = Lc(i);
    return (
        (n = Sf(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = bs(o, a)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = _s(i, t, a)) && (Dc(e, i, a, o), ws(e, i, a)),
        a
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
        if (e.memoizedProps !== t.pendingProps || ca.current) Zu = !0;
        else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                    (Zu = !1),
                    (function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                (ll(t), Qa());
                                break;
                            case 5:
                                js(t);
                                break;
                            case 1:
                                ha(t.type) && ga(t);
                                break;
                            case 4:
                                Ts(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context,
                                    i = t.memoizedProps.value;
                                (sa(rs, r._currentValue), (r._currentValue = i));
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState))
                                    return null !== r.dehydrated
                                        ? (sa(Is, 1 & Is.current), (t.flags |= 128), null)
                                        : 0 != (n & t.child.childLanes)
                                          ? gl(e, t, n)
                                          : (sa(Is, 1 & Is.current), null !== (e = kl(e, t, n)) ? e.sibling : null);
                                sa(Is, 1 & Is.current);
                                break;
                            case 19:
                                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                    if (r) return Sl(e, t, n);
                                    t.flags |= 128;
                                }
                                if (
                                    (null !== (i = t.memoizedState) &&
                                        ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                                    sa(Is, Is.current),
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
    else ((Zu = !1), Va && 0 != (1048576 & t.flags) && Ia(t, Pa, t.index));
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            (xl(e, t), (e = t.pendingProps));
            var i = da(t, la.current);
            (cs(t, n), (i = Ys(null, t, r, e, i, n)));
            var o = Xs();
            return (
                (t.flags |= 1),
                'object' == typeof i && null !== i && 'function' == typeof i.render && void 0 === i.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      ha(r) ? ((o = !0), ga(t)) : (o = !1),
                      (t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null),
                      gs(t),
                      (i.updater = Mu),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      Bu(t, r, e, n),
                      (t = ul(null, t, r, !0, o, n)))
                    : ((t.tag = 0), Va && o && La(t), el(null, t, i, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (xl(e, t),
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
                    (e = Du(r, e)),
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
                        t = nl(null, t, r, Du(r.type, e), n);
                        break e;
                }
                throw Error(Ve(306, r, ''));
            }
            return t;
        case 0:
            return ((r = t.type), (i = t.pendingProps), al(e, t, r, (i = t.elementType === r ? i : Du(r, i)), n));
        case 1:
            return ((r = t.type), (i = t.pendingProps), sl(e, t, r, (i = t.elementType === r ? i : Du(r, i)), n));
        case 3:
            e: {
                if ((ll(t), null === e)) throw Error(Ve(387));
                ((r = t.pendingProps), (i = (o = t.memoizedState).element), ms(e, t), xs(t, r, null, n));
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
                        t = cl(e, t, r, n, (i = $u(Error(Ve(423)), t)));
                        break e;
                    }
                    if (r !== i) {
                        t = cl(e, t, r, n, (i = $u(Error(Ve(424)), t)));
                        break e;
                    }
                    for (
                        Ma = qo(t.stateNode.containerInfo.firstChild),
                            za = t,
                            Va = !0,
                            Fa = null,
                            n = ns(t, null, r, n),
                            t.child = n;
                        n;
                    )
                        ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                    if ((Qa(), r === i)) {
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
                js(t),
                null === e && qa(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (a = i.children),
                zo(r, i) ? (a = null) : null !== o && zo(r, o) && (t.flags |= 32),
                ol(e, t),
                el(e, t, a, n),
                t.child
            );
        case 6:
            return (null === e && qa(t), null);
        case 13:
            return gl(e, t, n);
        case 4:
            return (
                Ts(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = ts(t, null, r, n)) : el(e, t, r, n),
                t.child
            );
        case 11:
            return ((r = t.type), (i = t.pendingProps), tl(e, t, r, (i = t.elementType === r ? i : Du(r, i)), n));
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
                    if (Ui(o.value, a)) {
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
                                            (u = bs(-1, n & -n)).tag = 2;
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
                                if (null === (a = o.return)) throw Error(Ve(341));
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
            return ((i = Du((r = t.type), t.pendingProps)), nl(e, t, r, (i = Du(r.type, i)), n));
        case 15:
            return rl(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Du(r, i)),
                xl(e, t),
                (t.tag = 1),
                ha(r) ? ((e = !0), ga(t)) : (e = !1),
                cs(t, n),
                Fu(t, r, i),
                Bu(t, r, i, n),
                ul(null, t, r, !0, e, n)
            );
        case 19:
            return Sl(e, t, n);
        case 22:
            return il(e, t, n);
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
function Tf(e) {
    this._internalRoot = e;
}
function Nf(e) {
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
function If(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var a = o;
        if ('function' == typeof i) {
            var s = i;
            i = function () {
                var e = Of(a);
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
                        var e = Of(a);
                        o.call(e);
                    };
                }
                var a = xf(t, r, e, 0, null, !1, 0, '', Rf);
                return (
                    (e._reactRootContainer = a),
                    (e[Go] = a.current),
                    xo(8 === e.nodeType ? e.parentNode : e),
                    qc(),
                    a
                );
            }
            for (; (i = e.lastChild); ) e.removeChild(i);
            if ('function' == typeof r) {
                var s = r;
                r = function () {
                    var e = Of(u);
                    s.call(e);
                };
            }
            var u = wf(e, 0, !1, null, 0, !1, 0, '', Rf);
            return (
                (e._reactRootContainer = u),
                (e[Go] = u.current),
                xo(8 === e.nodeType ? e.parentNode : e),
                qc(function () {
                    kf(t, u, n, r);
                }),
                u
            );
        })(n, t, e, i, r);
    return Of(a);
}
((Tf.prototype.render = Af.prototype.render =
    function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(Ve(409));
        kf(e, t, null, null);
    }),
    (Tf.prototype.unmount = Af.prototype.unmount =
        function () {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                (qc(function () {
                    kf(null, e, null, null);
                }),
                    (t[Go] = null));
            }
        }),
    (Tf.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = or();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < pr.length && 0 !== t && t < pr[n].priority; n++);
            (pr.splice(n, 0, e), 0 === n && mr(e));
        }
    }),
    (nr = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Wn(t.pendingLanes);
                    0 !== n && (Zn(t, 1 | n), zc(t, jn()), 0 == (6 & uc) && ((Sc = jn() + 500), xa()));
                }
                break;
            case 13:
                (qc(function () {
                    var t = vs(e, 1);
                    if (null !== t) {
                        var n = Ic();
                        Dc(t, e, 1, n);
                    }
                }),
                    Pf(e, 1));
        }
    }),
    (rr = function (e) {
        if (13 === e.tag) {
            var t = vs(e, 134217728);
            if (null !== t) Dc(t, e, 134217728, Ic());
            Pf(e, 134217728);
        }
    }),
    (ir = function (e) {
        if (13 === e.tag) {
            var t = Lc(e),
                n = vs(e, t);
            if (null !== n) Dc(n, e, t, Ic());
            Pf(e, t);
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
                if ((jt(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                    for (n = e; n.parentNode; ) n = n.parentNode;
                    for (
                        n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var i = na(r);
                            if (!i) throw Error(Ve(90));
                            (Pt(r), jt(r, i));
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
    (ln = $c),
    (cn = qc));
var Lf = { usingClientEntryPoint: !1, Events: [ea, ta, na, sn, un, $c] },
    Df = { findFiberByHostInstance: Zo, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
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
        } catch (qt) {}
}
((Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lf),
    (Re.createPortal = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Nf(t)) throw Error(Ve(200));
        return (function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: nt, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
        })(e, t, null, n);
    }),
    (Re.createRoot = function (e, t) {
        if (!Nf(e)) throw Error(Ve(299));
        var n = !1,
            r = '',
            i = Cf;
        return (
            null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
            (t = wf(e, 1, !1, null, 0, n, 0, r, i)),
            (e[Go] = t.current),
            xo(8 === e.nodeType ? e.parentNode : e),
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
        return qc(e);
    }),
    (Re.hydrate = function (e, t, n) {
        if (!jf(t)) throw Error(Ve(200));
        return If(null, e, t, !0, n);
    }),
    (Re.hydrateRoot = function (e, t, n) {
        if (!Nf(e)) throw Error(Ve(405));
        var r = (null != n && n.hydratedSources) || null,
            i = !1,
            o = '',
            a = Cf;
        if (
            (null != n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
            (t = xf(t, null, e, 1, null != n ? n : null, i, 0, o, a)),
            (e[Go] = t.current),
            xo(e),
            r)
        )
            for (e = 0; e < r.length; e++)
                ((i = (i = (n = r[e])._getVersion)(n._source)),
                    null == t.mutableSourceEagerHydrationData
                        ? (t.mutableSourceEagerHydrationData = [n, i])
                        : t.mutableSourceEagerHydrationData.push(n, i));
        return new Tf(t);
    }),
    (Re.render = function (e, t, n) {
        if (!jf(t)) throw Error(Ve(200));
        return If(null, e, t, !1, n);
    }),
    (Re.unmountComponentAtNode = function (e) {
        if (!jf(e)) throw Error(Ve(40));
        return (
            !!e._reactRootContainer &&
            (qc(function () {
                If(null, null, e, !1, function () {
                    ((e._reactRootContainer = null), (e[Go] = null));
                });
            }),
            !0)
        );
    }),
    (Re.unstable_batchedUpdates = $c),
    (Re.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!jf(n)) throw Error(Ve(200));
        if (null == e || void 0 === e._reactInternals) throw Error(Ve(38));
        return If(e, t, n, !1, r);
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
((Ne.createRoot = Ff.createRoot), (Ne.hydrateRoot = Ff.hydrateRoot));
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
        Uf.exports ? ((t.default = t), (Uf.exports = t)) : (window.classNames = t);
    })());
const $f = e(Bf.exports);
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
var Hf = {};
function Wf() {
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
var Kf = Object.assign,
    Qf = Object.getOwnPropertyDescriptor,
    Gf = Object.defineProperty,
    Yf = Object.prototype,
    Xf = [];
Object.freeze(Xf);
var Jf = {};
Object.freeze(Jf);
var Zf = 'undefined' != typeof Proxy,
    ed = Object.toString();
function td() {
    Zf || qf('Proxy not available');
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
function yd(e) {
    return null === e ? null : 'object' == typeof e ? '' + e : e;
}
function gd(e, t) {
    return Yf.hasOwnProperty.call(e, t);
}
var md =
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
    ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), xd(e, t));
}
function xd(e, t) {
    return (xd = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return ((e.__proto__ = t), e);
          })(e, t);
}
function kd(e) {
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
        if (Td(n)) return e.decorate_20223_(t, n);
        Ad(t, n, e);
    }, e);
}
function Ad(e, t, n) {
    (gd(e, Pd) || ld(e, Pd, wd({}, e[Pd])),
        (function (e) {
            return e.annotationType_ === Md;
        })(n) || (e[Pd][t] = n));
}
function Td(e) {
    return 'object' == typeof e && 'string' == typeof e.kind;
}
var Nd = Symbol('mobx administration'),
    jd = (function () {
        function e(e) {
            (void 0 === e && (e = 'Atom'),
                (this.name_ = void 0),
                (this.isPendingUnobservation_ = !1),
                (this.isBeingObserved_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = zh.NOT_TRACKING_),
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
                (sp(), cp(this), up());
            }),
            (t.toString = function () {
                return this.name_;
            }),
            e
        );
    })(),
    Rd = fd('Atom', jd);
function Id(e, t, n) {
    (void 0 === t && (t = rd), void 0 === n && (n = rd));
    var r,
        i = new jd(e);
    return (t !== rd && Ip(Np, i, t, r), n !== rd && Rp(i, n), i);
}
var Ld = {
    structural: function (e, t) {
        return ny(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
};
function Dd(e, t, n) {
    return Yp(e)
        ? e
        : Array.isArray(e)
          ? wh.array(e, { name: n })
          : sd(e)
            ? wh.object(e, void 0, { name: n })
            : dd(e)
              ? wh.map(e, { name: n })
              : hd(e)
                ? wh.set(e, { name: n })
                : 'function' != typeof e || Pp(e) || Kp(e)
                  ? e
                  : ud(e)
                    ? Hp(e)
                    : Ep(n, e);
}
function zd(e) {
    return e;
}
var Md = 'override';
function Vd(e, t) {
    return { annotationType_: e, options_: t, make_: Fd, extend_: Ud, decorate_20223_: Bd };
}
function Fd(e, t, n, r) {
    var i;
    if (null != (i = this.options_) && i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (Pp(n.value)) return 1;
    var o = $d(e, this, t, n, !1);
    return (Gf(r, t, o), 2);
}
function Ud(e, t, n, r) {
    var i = $d(e, this, t, n);
    return e.defineProperty_(t, i, r);
}
function Bd(e, t) {
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
                    (e = Nh(
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
        qf(
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
            Ad(this, r, o);
        });
}
function $d(e, t, n, r, i) {
    var o, a, s, u, l, c, f, d;
    (void 0 === i && (i = rp.safeDescriptors), (d = r), t.annotationType_, d.value);
    var h,
        p = r.value;
    null != (o = t.options_) && o.bound && (p = p.bind(null != (h = e.proxy_) ? h : e.target_));
    return {
        value: Nh(
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
function qd(e, t) {
    return { annotationType_: e, options_: t, make_: Hd, extend_: Wd, decorate_20223_: Kd };
}
function Hd(e, t, n, r) {
    var i;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (
        null != (i = this.options_) &&
        i.bound &&
        (!gd(e.target_, t) || !Kp(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
    )
        return 0;
    if (Kp(n.value)) return 1;
    var o = Qd(e, this, t, n, !1, !1);
    return (Gf(r, t, o), 2);
}
function Wd(e, t, n, r) {
    var i,
        o = Qd(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
    return e.defineProperty_(t, o, r);
}
function Kd(e, t) {
    var n,
        r = t.name,
        i = t.addInitializer;
    return (
        Kp(e) || (e = Hp(e)),
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
function Qd(e, t, n, r, i, o) {
    var a;
    (void 0 === o && (o = rp.safeDescriptors), (a = r), t.annotationType_, a.value);
    var s,
        u = r.value;
    (Kp(u) || (u = Hp(u)), i) && ((u = u.bind(null != (s = e.proxy_) ? s : e.target_)).isMobXFlow = !0);
    return { value: u, configurable: !o || e.isPlainObject_, enumerable: !1, writable: !o };
}
function Gd(e, t) {
    return { annotationType_: e, options_: t, make_: Yd, extend_: Xd, decorate_20223_: Jd };
}
function Yd(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function Xd(e, t, n, r) {
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
            var t = Lv(this)[Nd],
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
    var i, o;
    return (
        this.annotationType_,
        e.defineObservableProperty_(
            t,
            n.value,
            null != (i = null == (o = this.options_) ? void 0 : o.enhancer) ? i : Dd,
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
            s = Lv(e)[Nd],
            u = new Dh(
                t,
                null != (r = null == (a = n.options_) ? void 0 : a.enhancer) ? r : Dd,
                'ObservableObject.' + i.toString(),
                !1,
            );
        (s.values_.set(i, u), o.add(e));
    }
    if ('accessor' == r)
        return {
            get: function () {
                return (o.has(this) || a(this, e.get.call(this)), this[Nd].getObservablePropValue_(i));
            },
            set: function (e) {
                return (o.has(this) || a(this, e), this[Nd].setObservablePropValue_(i, e));
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
    if (n.get) return Oh.make_(e, t, n, r);
    if (n.set) {
        var u = Nh(t.toString(), n.set);
        return r === e.target_
            ? null === e.defineProperty_(t, { configurable: !rp.safeDescriptors || e.isPlainObject_, set: u })
                ? 0
                : 2
            : (Gf(r, t, { configurable: !0, set: u }), 2);
    }
    if (r !== e.target_ && 'function' == typeof n.value)
        return ud(n.value)
            ? (null != (s = this.options_) && s.autoBind ? Hp.bound : Hp).make_(e, t, n, r)
            : (null != (a = this.options_) && a.autoBind ? Ep.bound : Ep).make_(e, t, n, r);
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
    if (n.get) return Oh.extend_(e, t, n, r);
    if (n.set)
        return e.defineProperty_(
            t,
            { configurable: !rp.safeDescriptors || e.isPlainObject_, set: Nh(t.toString(), n.set) },
            r,
        );
    'function' == typeof n.value &&
        null != (i = this.options_) &&
        i.autoBind &&
        (n.value = n.value.bind(null != (a = e.proxy_) ? a : e.target_));
    return (!1 === (null == (o = this.options_) ? void 0 : o.deep) ? wh.ref : wh).extend_(e, t, n, r);
}
function uh(e, t) {
    qf("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var lh = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
function ch(e) {
    return e || lh;
}
Object.freeze(lh);
var fh = Zd('observable'),
    dh = Zd('observable.ref', { enhancer: zd }),
    hh = Zd('observable.shallow', {
        enhancer: function (e, t, n) {
            return null == e || Mv(e) || wv(e) || Cv(e) || Nv(e)
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
            return ny(e, t) ? t : e;
        },
    }),
    vh = Cd(fh);
function yh(e) {
    return !0 === e.deep
        ? Dd
        : !1 === e.deep
          ? zd
          : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
            ? n
            : Dd;
    var t, n, r;
}
function gh(e, t, n) {
    return Td(t)
        ? fh.decorate_20223_(e, t)
        : od(t)
          ? void Ad(e, t, fh)
          : Yp(e)
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
Kf(gh, vh);
var mh,
    bh,
    _h = {
        box: function (e, t) {
            var n = ch(t);
            return new Dh(e, yh(n), n.name, !0, n.equals);
        },
        array: function (e, t) {
            var n = ch(t);
            return (!1 === rp.useProxies || !1 === n.proxy ? Yv : dv)(e, yh(n), n.name);
        },
        map: function (e, t) {
            var n = ch(t);
            return new Pv(e, yh(n), n.name);
        },
        set: function (e, t) {
            var n = ch(t);
            return new Tv(e, yh(n), n.name);
        },
        object: function (e, t, n) {
            return ey(function () {
                return Vp(
                    !1 === rp.useProxies || !1 === (null == n ? void 0 : n.proxy)
                        ? Lv({}, n)
                        : (function (e, t) {
                              var n, r;
                              return (
                                  td(),
                                  (e = Lv(e, t)),
                                  null != (r = (n = e[Nd]).proxy_) ? r : (n.proxy_ = new Proxy(e, ev))
                              );
                          })({}, n),
                    e,
                    t,
                );
            });
        },
        ref: Cd(dh),
        shallow: Cd(hh),
        deep: vh,
        struct: Cd(ph),
    },
    wh = Kf(gh, _h),
    Sh = 'computed',
    xh = Gd(Sh),
    kh = Gd('computed.struct', { equals: Ld.structural }),
    Oh = function (e, t) {
        if (Td(t)) return xh.decorate_20223_(e, t);
        if (od(t)) return Ad(e, t, xh);
        if (sd(e)) return Cd(Gd(Sh, e));
        var n = sd(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new Uh(n));
    };
(Object.assign(Oh, xh), (Oh.struct = Cd(kh)));
var Eh,
    Ph = 0,
    Ch = 1,
    Ah = null != (mh = null == (bh = Qf(function () {}, 'name')) ? void 0 : bh.configurable) && mh,
    Th = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
function Nh(e, t, n, r) {
    function i() {
        return jh(e, n, t, r || this, arguments);
    }
    return (
        void 0 === n && (n = !1),
        (i.isMobxAction = !0),
        (i.toString = function () {
            return t.toString();
        }),
        Ah && ((Th.value = e), Gf(i, 'name', Th)),
        i
    );
}
function jh(e, t, n, r, i) {
    var o = (function (e, t, n, r) {
        var i = !1,
            o = 0,
            a = rp.trackingDerivation,
            s = !t || !a;
        sp();
        var u = rp.allowStateChanges;
        s && (Gh(), (u = Rh(!0)));
        var l = Xh(!0),
            c = {
                runAsAction_: s,
                prevDerivation_: a,
                prevAllowStateChanges_: u,
                prevAllowStateReads_: l,
                notifySpy_: i,
                startTime_: o,
                actionId_: Ch++,
                parentActionId_: Ph,
            };
        return ((Ph = c.actionId_), c);
    })(0, t);
    try {
        return n.apply(r, i);
    } catch (a) {
        throw ((o.error_ = a), a);
    } finally {
        !(function (e) {
            Ph !== e.actionId_ && qf(30);
            ((Ph = e.parentActionId_), void 0 !== e.error_ && (rp.suppressReactionErrors = !0));
            (Ih(e.prevAllowStateChanges_), Jh(e.prevAllowStateReads_), up(), e.runAsAction_ && Yh(e.prevDerivation_));
            rp.suppressReactionErrors = !1;
        })(o);
    }
}
function Rh(e) {
    var t = rp.allowStateChanges;
    return ((rp.allowStateChanges = e), t);
}
function Ih(e) {
    rp.allowStateChanges = e;
}
Eh = Symbol.toPrimitive;
var Lh,
    Dh = (function (e) {
        function t(t, n, r, i, o) {
            var a;
            return (
                void 0 === r && (r = 'ObservableValue'),
                void 0 === o && (o = Ld.default),
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
                (this.value_, (e = this.prepareNewValue_(e)) !== rp.UNCHANGED && this.setNewValue_(e));
            }),
            (n.prepareNewValue_ = function (e) {
                if (tv(this)) {
                    var t = rv(this, { object: this, type: lv, newValue: e });
                    if (!t) return rp.UNCHANGED;
                    e = t.newValue;
                }
                return (
                    (e = this.enhancer(e, this.value_, this.name_)),
                    this.equals(this.value_, e) ? rp.UNCHANGED : e
                );
            }),
            (n.setNewValue_ = function (e) {
                var t = this.value_;
                ((this.value_ = e),
                    this.reportChanged(),
                    iv(this) && av(this, { type: lv, object: this, newValue: e, oldValue: t }));
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
                            type: lv,
                            newValue: this.value_,
                            oldValue: void 0,
                        }),
                    ov(this, e)
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
                return yd(this.get());
            }),
            (n[Eh] = function () {
                return this.valueOf();
            }),
            t
        );
    })(jd);
Lh = Symbol.toPrimitive;
var zh,
    Mh,
    Vh,
    Fh,
    Uh = (function () {
        function e(e) {
            ((this.dependenciesState_ = zh.NOT_TRACKING_),
                (this.observing_ = []),
                (this.newObserving_ = null),
                (this.isBeingObserved_ = !1),
                (this.isPendingUnobservation_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = zh.UP_TO_DATE_),
                (this.unboundDepsCount_ = 0),
                (this.value_ = new $h(null)),
                (this.name_ = void 0),
                (this.triggeredBy_ = void 0),
                (this.isComputing_ = !1),
                (this.isRunningSetter_ = !1),
                (this.derivation = void 0),
                (this.setter_ = void 0),
                (this.isTracing_ = Vh.NONE),
                (this.scope_ = void 0),
                (this.equals_ = void 0),
                (this.requiresReaction_ = void 0),
                (this.keepAlive_ = void 0),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                e.get || qf(31),
                (this.derivation = e.get),
                (this.name_ = e.name || 'ComputedValue'),
                e.set && (this.setter_ = Nh('ComputedValue-setter', e.set)),
                (this.equals_ = e.equals || (e.compareStructural || e.struct ? Ld.structural : Ld.default)),
                (this.scope_ = e.context),
                (this.requiresReaction_ = e.requiresReaction),
                (this.keepAlive_ = !!e.keepAlive));
        }
        var t = e.prototype;
        return (
            (t.onBecomeStale_ = function () {
                !(function (e) {
                    if (e.lowestObserverState_ !== zh.UP_TO_DATE_) return;
                    ((e.lowestObserverState_ = zh.POSSIBLY_STALE_),
                        e.observers_.forEach(function (e) {
                            e.dependenciesState_ === zh.UP_TO_DATE_ &&
                                ((e.dependenciesState_ = zh.POSSIBLY_STALE_), e.onBecomeStale_());
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
                    0 !== rp.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                ) {
                    if ((lp(this), Hh(this))) {
                        var e = rp.trackingContext;
                        (this.keepAlive_ && !e && (rp.trackingContext = this),
                            this.trackAndCompute() &&
                                (function (e) {
                                    if (e.lowestObserverState_ === zh.STALE_) return;
                                    ((e.lowestObserverState_ = zh.STALE_),
                                        e.observers_.forEach(function (t) {
                                            t.dependenciesState_ === zh.POSSIBLY_STALE_
                                                ? (t.dependenciesState_ = zh.STALE_)
                                                : t.dependenciesState_ === zh.UP_TO_DATE_ &&
                                                  (e.lowestObserverState_ = zh.UP_TO_DATE_);
                                        }));
                                })(this),
                            (rp.trackingContext = e));
                    }
                } else Hh(this) && (this.warnAboutUntrackedRead_(), sp(), (this.value_ = this.computeValue_(!1)), up());
                var t = this.value_;
                if (qh(t)) throw t.cause;
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
                    t = this.dependenciesState_ === zh.NOT_TRACKING_,
                    n = this.computeValue_(!0),
                    r = t || qh(e) || qh(n) || !this.equals_(e, n);
                return (r && (this.value_ = n), r);
            }),
            (t.computeValue_ = function (e) {
                this.isComputing_ = !0;
                var t,
                    n = Rh(!1);
                if (e) t = Wh(this, this.derivation, this.scope_);
                else if (!0 === rp.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                else
                    try {
                        t = this.derivation.call(this.scope_);
                    } catch (r) {
                        t = new $h(r);
                    }
                return (Ih(n), (this.isComputing_ = !1), t);
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
                        s = new fp(
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
                        s = new fp(
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
                            type: lv,
                            object: n,
                            newValue: o,
                            oldValue: i,
                        }),
                            Yh(a));
                    }
                    ((r = !1), (i = o));
                });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
                return this.name_ + '[' + this.derivation.toString() + ']';
            }),
            (t.valueOf = function () {
                return yd(this.get());
            }),
            (t[Lh] = function () {
                return this.valueOf();
            }),
            e
        );
    })(),
    Bh = fd('ComputedValue', Uh);
(((Mh = zh || (zh = {}))[(Mh.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
    (Mh[(Mh.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
    (Mh[(Mh.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
    (Mh[(Mh.STALE_ = 2)] = 'STALE_'),
    ((Fh = Vh || (Vh = {}))[(Fh.NONE = 0)] = 'NONE'),
    (Fh[(Fh.LOG = 1)] = 'LOG'),
    (Fh[(Fh.BREAK = 2)] = 'BREAK'));
var $h = function (e) {
    ((this.cause = void 0), (this.cause = e));
};
function qh(e) {
    return e instanceof $h;
}
function Hh(e) {
    switch (e.dependenciesState_) {
        case zh.UP_TO_DATE_:
            return !1;
        case zh.NOT_TRACKING_:
        case zh.STALE_:
            return !0;
        case zh.POSSIBLY_STALE_:
            for (var t = Xh(!0), n = Gh(), r = e.observing_, i = r.length, o = 0; o < i; o++) {
                var a = r[o];
                if (Bh(a)) {
                    if (rp.disableErrorBoundaries) a.get();
                    else
                        try {
                            a.get();
                        } catch (s) {
                            return (Yh(n), Jh(t), !0);
                        }
                    if (e.dependenciesState_ === zh.STALE_) return (Yh(n), Jh(t), !0);
                }
            }
            return (Zh(e), Yh(n), Jh(t), !1);
    }
}
function Wh(e, t, n) {
    var r = Xh(!0);
    (Zh(e),
        (e.newObserving_ = new Array(e.observing_.length + 100)),
        (e.unboundDepsCount_ = 0),
        (e.runId_ = ++rp.runId));
    var i,
        o = rp.trackingDerivation;
    if (((rp.trackingDerivation = e), rp.inBatch++, !0 === rp.disableErrorBoundaries)) i = t.call(n);
    else
        try {
            i = t.call(n);
        } catch (a) {
            i = new $h(a);
        }
    return (
        rp.inBatch--,
        (rp.trackingDerivation = o),
        (function (e) {
            for (
                var t = e.observing_,
                    n = (e.observing_ = e.newObserving_),
                    r = zh.UP_TO_DATE_,
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
                (0 === u.diffValue_ && op(u, e), (u.diffValue_ = 0));
            }
            for (; i--; ) {
                var l = n[i];
                1 === l.diffValue_ && ((l.diffValue_ = 0), ip(l, e));
            }
            r !== zh.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        Jh(r),
        i
    );
}
function Kh(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) op(t[n], e);
    e.dependenciesState_ = zh.NOT_TRACKING_;
}
function Qh(e) {
    var t = Gh();
    try {
        return e();
    } finally {
        Yh(t);
    }
}
function Gh() {
    var e = rp.trackingDerivation;
    return ((rp.trackingDerivation = null), e);
}
function Yh(e) {
    rp.trackingDerivation = e;
}
function Xh(e) {
    var t = rp.allowStateReads;
    return ((rp.allowStateReads = e), t);
}
function Jh(e) {
    rp.allowStateReads = e;
}
function Zh(e) {
    if (e.dependenciesState_ !== zh.UP_TO_DATE_) {
        e.dependenciesState_ = zh.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = zh.UP_TO_DATE_;
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
    np = !1,
    rp = (function () {
        var e = Wf();
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
                      np || qf(35);
                  }, 1),
                  new ep())
        );
    })();
function ip(e, t) {
    (e.observers_.add(t),
        e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_));
}
function op(e, t) {
    (e.observers_.delete(t), 0 === e.observers_.size && ap(e));
}
function ap(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), rp.pendingUnobservations.push(e));
}
function sp() {
    rp.inBatch++;
}
function up() {
    if (0 == --rp.inBatch) {
        pp();
        for (var e = rp.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            ((n.isPendingUnobservation_ = !1),
                0 === n.observers_.size &&
                    (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof Uh && n.suspend_()));
        }
        rp.pendingUnobservations = [];
    }
}
function lp(e) {
    var t = rp.trackingDerivation;
    return null !== t
        ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ && rp.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
          e.isBeingObserved_)
        : (0 === e.observers_.size && rp.inBatch > 0 && ap(e), !1);
}
function cp(e) {
    e.lowestObserverState_ !== zh.STALE_ &&
        ((e.lowestObserverState_ = zh.STALE_),
        e.observers_.forEach(function (e) {
            (e.dependenciesState_ === zh.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = zh.STALE_));
        }));
}
var fp = (function () {
        function e(e, t, n, r) {
            (void 0 === e && (e = 'Reaction'),
                (this.name_ = void 0),
                (this.onInvalidate_ = void 0),
                (this.errorHandler_ = void 0),
                (this.requiresObservable_ = void 0),
                (this.observing_ = []),
                (this.newObserving_ = []),
                (this.dependenciesState_ = zh.NOT_TRACKING_),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.unboundDepsCount_ = 0),
                (this.isDisposed_ = !1),
                (this.isScheduled_ = !1),
                (this.isTrackPending_ = !1),
                (this.isRunning_ = !1),
                (this.isTracing_ = Vh.NONE),
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
                this.isScheduled_ || ((this.isScheduled_ = !0), rp.pendingReactions.push(this), pp());
            }),
            (t.isScheduled = function () {
                return this.isScheduled_;
            }),
            (t.runReaction_ = function () {
                if (!this.isDisposed_) {
                    (sp(), (this.isScheduled_ = !1));
                    var e = rp.trackingContext;
                    if (((rp.trackingContext = this), Hh(this))) {
                        this.isTrackPending_ = !0;
                        try {
                            this.onInvalidate_();
                        } catch (t) {
                            this.reportExceptionInDerivation_(t);
                        }
                    }
                    ((rp.trackingContext = e), up());
                }
            }),
            (t.track = function (e) {
                if (!this.isDisposed_) {
                    (sp(), (this.isRunning_ = !0));
                    var t = rp.trackingContext;
                    rp.trackingContext = this;
                    var n = Wh(this, e, void 0);
                    ((rp.trackingContext = t),
                        (this.isRunning_ = !1),
                        (this.isTrackPending_ = !1),
                        this.isDisposed_ && Kh(this),
                        qh(n) && this.reportExceptionInDerivation_(n.cause),
                        up());
                }
            }),
            (t.reportExceptionInDerivation_ = function (e) {
                var t = this;
                if (this.errorHandler_) this.errorHandler_(e, this);
                else {
                    if (rp.disableErrorBoundaries) throw e;
                    var n = "[mobx] uncaught error in '" + this + "'";
                    (rp.suppressReactionErrors || console.error(n, e),
                        rp.globalReactionErrorHandlers.forEach(function (n) {
                            return n(e, t);
                        }));
                }
            }),
            (t.dispose = function () {
                this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (sp(), Kh(this), up()));
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
    dp = 100,
    hp = function (e) {
        return e();
    };
function pp() {
    rp.inBatch > 0 || rp.isRunningReactions || hp(vp);
}
function vp() {
    rp.isRunningReactions = !0;
    for (var e = rp.pendingReactions, t = 0; e.length > 0; ) {
        ++t === dp && (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
    }
    rp.isRunningReactions = !1;
}
var yp = fd('Reaction', fp);
var gp = 'action',
    mp = 'autoAction',
    bp = '<unnamed action>',
    _p = Vd(gp),
    wp = Vd('action.bound', { bound: !0 }),
    Sp = Vd(mp, { autoAction: !0 }),
    xp = Vd('autoAction.bound', { autoAction: !0, bound: !0 });
function kp(e) {
    return function (t, n) {
        return id(t)
            ? Nh(t.name || bp, t, e)
            : id(n)
              ? Nh(t, n, e)
              : Td(n)
                ? (e ? Sp : _p).decorate_20223_(t, n)
                : od(n)
                  ? Ad(t, n, e ? Sp : _p)
                  : od(t)
                    ? Cd(Vd(e ? mp : gp, { name: t, autoAction: e }))
                    : void 0;
    };
}
var Op = kp(!1);
Object.assign(Op, _p);
var Ep = kp(!0);
function Pp(e) {
    return id(e) && !0 === e.isMobxAction;
}
(Object.assign(Ep, Sp), (Op.bound = Cd(wp)), (Ep.bound = Cd(xp)));
var Cp = function (e) {
    return e();
};
function Ap(e) {
    return e.scheduler
        ? e.scheduler
        : e.delay
          ? function (t) {
                return setTimeout(t, e.delay);
            }
          : Cp;
}
function Tp(e, t, n) {
    var r, i, o, a;
    void 0 === n && (n = Jf);
    var s,
        u,
        l,
        c,
        f = null != (r = n.name) ? r : 'Reaction',
        d = Op(
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
        y = !1,
        g = n.compareStructural ? Ld.structural : n.equals || Ld.default,
        m = new fp(
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
                    var n = Rh(e);
                    try {
                        return t();
                    } finally {
                        Ih(n);
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
var Np = 'onBO',
    jp = 'onBUO';
function Rp(e, t, n) {
    return Ip(jp, e, t, n);
}
function Ip(e, t, n, r) {
    var i = Xv(t),
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
var Lp = 'never',
    Dp = 'always',
    zp = 'observed';
function Mp(e) {
    !0 === e.isolateGlobalState &&
        (function () {
            if (((rp.pendingReactions.length || rp.inBatch || rp.isRunningReactions) && qf(36), (np = !0), tp)) {
                var e = Wf();
                (0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0), (rp = new ep()));
            }
        })();
    var t,
        n,
        r = e.useProxies,
        i = e.enforceActions;
    if (
        (void 0 !== r && (rp.useProxies = r === Dp || (r !== Lp && 'undefined' != typeof Proxy)),
        'ifavailable' === r && (rp.verifyProxies = !0),
        void 0 !== i)
    ) {
        var o = i === Dp ? Dp : i === zp;
        ((rp.enforceActions = o), (rp.allowStateChanges = !0 !== o && o !== Dp));
    }
    ([
        'computedRequiresReaction',
        'reactionRequiresObservable',
        'observableRequiresReaction',
        'disableErrorBoundaries',
        'safeDescriptors',
    ].forEach(function (t) {
        t in e && (rp[t] = !!e[t]);
    }),
        (rp.allowStateReads = !rp.observableRequiresReaction),
        e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = hp),
            (hp = function (e) {
                return t(function () {
                    return n(e);
                });
            })));
}
function Vp(e, t, n, r) {
    var i = md(t);
    return (
        ey(function () {
            var t = Lv(e, r)[Nd];
            vd(i).forEach(function (e) {
                t.extend_(e, i[e], !n || !(e in n) || n[e]);
            });
        }),
        e
    );
}
function Fp(e) {
    var t,
        n = { name: e.name_ };
    return (
        e.observing_ &&
            e.observing_.length > 0 &&
            (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(Fp)),
        n
    );
}
var Up = 0;
function Bp() {
    this.message = 'FLOW_CANCELLED';
}
Bp.prototype = Object.create(Error.prototype);
var $p = qd('flow'),
    qp = qd('flow.bound', { bound: !0 }),
    Hp = Object.assign(function (e, t) {
        if (Td(t)) return $p.decorate_20223_(e, t);
        if (od(t)) return Ad(e, t, $p);
        var n = e,
            r = n.name || '<unnamed flow>',
            i = function () {
                var e,
                    t = arguments,
                    i = ++Up,
                    o = Op(r + ' - runid: ' + i + ' - init', n).apply(this, t),
                    a = void 0,
                    s = new Promise(function (t, n) {
                        var s = 0;
                        function u(e) {
                            var t;
                            a = void 0;
                            try {
                                t = Op(r + ' - runid: ' + i + ' - yield ' + s++, o.next).call(o, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function l(e) {
                            var t;
                            a = void 0;
                            try {
                                t = Op(r + ' - runid: ' + i + ' - yield ' + s++, o.throw).call(o, e);
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
                    (s.cancel = Op(r + ' - runid: ' + i + ' - cancel', function () {
                        try {
                            a && Wp(a);
                            var t = o.return(void 0),
                                n = Promise.resolve(t.value);
                            (n.then(rd, rd), Wp(n), e(new Bp()));
                        } catch (r) {
                            e(r);
                        }
                    })),
                    s
                );
            };
        return ((i.isMobXFlow = !0), i);
    }, $p);
function Wp(e) {
    id(e.cancel) && e.cancel();
}
function Kp(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function Qp(e, t) {
    if (void 0 === t) return Bh(e);
    if (!1 === Mv(e)) return !1;
    if (!e[Nd].values_.has(t)) return !1;
    var n = Xv(e, t);
    return Bh(n);
}
function Gp(e, t) {
    return Qp(e, t);
}
function Yp(e) {
    return (function (e, t) {
        return !!e && (Mv(e) || !!e[Nd] || Rd(e) || yp(e) || Bh(e));
    })(e);
}
function Xp(e, t, n, r) {
    return id(n)
        ? (function (e, t, n, r) {
              return Jv(e, t).observe_(n, r);
          })(e, t, n, r)
        : (function (e, t, n) {
              return Jv(e).observe_(t, n);
          })(e, t, n);
}
function Jp(e, t) {
    (void 0 === t && (t = void 0), sp());
    try {
        return e.apply(t);
    } finally {
        up();
    }
}
function Zp(e) {
    return e[Nd];
}
Hp.bound = Cd(qp);
var ev = {
    has: function (e, t) {
        return Zp(e).has_(t);
    },
    get: function (e, t) {
        return Zp(e).get_(t);
    },
    set: function (e, t, n) {
        var r;
        return !!od(t) && (null == (r = Zp(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
        var n;
        return !!od(t) && (null == (n = Zp(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
        var r;
        return null == (r = Zp(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
        return Zp(e).ownKeys_();
    },
    preventExtensions: function (e) {
        qf(13);
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
    var n = Gh();
    try {
        for (
            var r = [].concat(e.interceptors_ || []), i = 0, o = r.length;
            i < o && ((t = r[i](t)) && !t.type && qf(14), t);
            i++
        );
        return t;
    } finally {
        Yh(n);
    }
}
function iv(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
}
function ov(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
        n.push(t),
        nd(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function av(e, t) {
    var n = Gh(),
        r = e.changeListeners_;
    if (r) {
        for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](t);
        Yh(n);
    }
}
function sv(e, t, n) {
    return (
        ey(function () {
            var r = Lv(e, n)[Nd];
            (null != t ||
                (t = (function (e) {
                    return (gd(e, Pd) || ld(e, Pd, wd({}, e[Pd])), e[Pd]);
                })(e)),
                vd(t).forEach(function (e) {
                    return r.make_(e, t[e]);
                }));
        }),
        e
    );
}
var uv = 'splice',
    lv = 'update',
    cv = {
        get: function (e, t) {
            var n = e[Nd];
            return t === Nd
                ? n
                : 'length' === t
                  ? n.getArrayLength_()
                  : 'string' != typeof t || isNaN(t)
                    ? gd(hv, t)
                        ? hv[t]
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
            qf(15);
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
                    ov(this, e)
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
                    this.legacyMode_ && t > 0 && Gv(e + t + 1));
            }),
            (t.spliceWithArray_ = function (e, t, n) {
                var r = this;
                this.atom_;
                var i = this.values_.length;
                if (
                    (void 0 === e ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
                    (t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e))),
                    void 0 === n && (n = Xf),
                    tv(this))
                ) {
                    var o = rv(this, { object: this.proxy_, type: uv, index: e, removedCount: t, added: n });
                    if (!o) return Xf;
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
                    i = iv(this),
                    o =
                        i || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  type: lv,
                                  debugObjectName: this.atom_.name_,
                                  index: e,
                                  newValue: t,
                                  oldValue: n,
                              }
                            : null;
                (this.atom_.reportChanged(), i && av(this, o));
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    i = iv(this),
                    o =
                        i || r
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
                (this.atom_.reportChanged(), i && av(this, o));
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
                    if (tv(this)) {
                        var i = rv(this, { type: lv, object: this.proxy_, index: e, newValue: t });
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
function dv(e, t, n, r) {
    return (
        void 0 === n && (n = 'ObservableArray'),
        void 0 === r && (r = !1),
        td(),
        ey(function () {
            var i = new fv(n, t, r, !1);
            cd(i.values_, Nd, i);
            var o = new Proxy(i.values_, cv);
            return ((i.proxy_ = o), e && e.length && i.spliceWithArray_(0, 0, e), o);
        })
    );
}
var hv = {
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
        var o = this[Nd];
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
        return (rp.trackingDerivation && qf(37, 'reverse'), this.replace(this.slice().reverse()), this);
    },
    sort: function () {
        rp.trackingDerivation && qf(37, 'sort');
        var e = this.slice();
        return (e.sort.apply(e, arguments), this.replace(e), this);
    },
    remove: function (e) {
        var t = this[Nd],
            n = t.dehanceValues_(t.values_).indexOf(e);
        return n > -1 && (this.splice(n, 1), !0);
    },
};
function pv(e, t) {
    'function' == typeof Array.prototype[e] && (hv[e] = t(e));
}
function vv(e) {
    return function () {
        var t = this[Nd];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments);
    };
}
function yv(e) {
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
function gv(e) {
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
(pv('at', vv),
    pv('concat', vv),
    pv('flat', vv),
    pv('includes', vv),
    pv('indexOf', vv),
    pv('join', vv),
    pv('lastIndexOf', vv),
    pv('slice', vv),
    pv('toString', vv),
    pv('toLocaleString', vv),
    pv('toSorted', vv),
    pv('toSpliced', vv),
    pv('with', vv),
    pv('every', yv),
    pv('filter', yv),
    pv('find', yv),
    pv('findIndex', yv),
    pv('findLast', yv),
    pv('findLastIndex', yv),
    pv('flatMap', yv),
    pv('forEach', yv),
    pv('map', yv),
    pv('some', yv),
    pv('toReversed', yv),
    pv('reduce', gv),
    pv('reduceRight', gv));
var mv,
    bv,
    _v = fd('ObservableArrayAdministration', fv);
function wv(e) {
    return ad(e) && _v(e[Nd]);
}
var Sv = {},
    xv = 'add',
    kv = 'delete';
((mv = Symbol.iterator), (bv = Symbol.toStringTag));
var Ov,
    Ev,
    Pv = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Dd),
                void 0 === n && (n = 'ObservableMap'),
                (this.enhancer_ = void 0),
                (this.name_ = void 0),
                (this[Nd] = Sv),
                (this.data_ = void 0),
                (this.hasMap_ = void 0),
                (this.keysAtom_ = void 0),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = t),
                (this.name_ = n),
                id(Map) || qf(18),
                ey(function () {
                    ((r.keysAtom_ = Id('ObservableMap.keys()')),
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
                if (!rp.trackingDerivation) return this.has_(e);
                var n = this.hasMap_.get(e);
                if (!n) {
                    var r = (n = new Dh(this.has_(e), zd, 'ObservableMap.key?', !1));
                    (this.hasMap_.set(e, r),
                        Rp(r, function () {
                            return t.hasMap_.delete(e);
                        }));
                }
                return n.get();
            }),
            (t.set = function (e, t) {
                var n = this.has_(e);
                if (tv(this)) {
                    var r = rv(this, { type: n ? lv : xv, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, tv(this)) && !rv(this, { type: kv, object: this, name: e })) return !1;
                if (this.has_(e)) {
                    var n = iv(this),
                        r = n
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: kv,
                                  object: this,
                                  oldValue: this.data_.get(e).value_,
                                  name: e,
                              }
                            : null;
                    return (
                        Jp(function () {
                            var n;
                            (t.keysAtom_.reportChanged(),
                                null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                                t.data_.get(e).setNewValue_(void 0),
                                t.data_.delete(e));
                        }),
                        n && av(this, r),
                        !0
                    );
                }
                return !1;
            }),
            (t.updateValue_ = function (e, t) {
                var n = this.data_.get(e);
                if ((t = n.prepareNewValue_(t)) !== rp.UNCHANGED) {
                    var r = iv(this),
                        i = r
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: lv,
                                  object: this,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), r && av(this, i));
                }
            }),
            (t.addValue_ = function (e, t) {
                var n = this;
                (this.keysAtom_,
                    Jp(function () {
                        var r,
                            i = new Dh(t, n.enhancer_, 'ObservableMap.key', !1);
                        (n.data_.set(e, i),
                            (t = i.value_),
                            null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                            n.keysAtom_.reportChanged());
                    }));
                var r = iv(this),
                    i = r
                        ? {
                              observableKind: 'map',
                              debugObjectName: this.name_,
                              type: xv,
                              object: this,
                              name: e,
                              newValue: t,
                          }
                        : null;
                r && av(this, i);
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
                return oy({
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
                return oy({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            i = n.value;
                        return { done: r, value: r ? void 0 : [i, e.get(i)] };
                    },
                });
            }),
            (t[mv] = function () {
                return this.entries();
            }),
            (t.forEach = function (e, t) {
                for (var n, r = Ed(this); !(n = r()).done; ) {
                    var i = n.value,
                        o = i[0],
                        a = i[1];
                    e.call(t, a, o, this);
                }
            }),
            (t.merge = function (e) {
                var t = this;
                return (
                    Cv(e) && (e = new Map(e)),
                    Jp(function () {
                        sd(e)
                            ? (function (e) {
                                  var t = Object.keys(e);
                                  if (!pd) return t;
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
                Jp(function () {
                    Qh(function () {
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
                    Jp(function () {
                        for (
                            var n,
                                r = (function (e) {
                                    if (dd(e) || Cv(e)) return e;
                                    if (Array.isArray(e)) return new Map(e);
                                    if (sd(e)) {
                                        var t = new Map();
                                        for (var n in e) t.set(n, e[n]);
                                        return t;
                                    }
                                    return qf(21, e);
                                })(e),
                                i = new Map(),
                                o = !1,
                                a = Ed(t.data_.keys());
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
                        for (var l, c = Ed(r.entries()); !(l = c()).done; ) {
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
                return ov(this, e);
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
var Tv = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Dd),
                void 0 === n && (n = 'ObservableSet'),
                (this.name_ = void 0),
                (this[Nd] = Av),
                (this.data_ = new Set()),
                (this.atom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = void 0),
                (this.name_ = n),
                id(Set) || qf(22),
                (this.enhancer_ = function (e, r) {
                    return t(e, r, n);
                }),
                ey(function () {
                    ((r.atom_ = Id(r.name_)), e && r.replace(e));
                }));
        }
        var t = e.prototype;
        return (
            (t.dehanceValue_ = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
                var e = this;
                Jp(function () {
                    Qh(function () {
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
                if ((this.atom_, tv(this)) && !rv(this, { type: xv, object: this, newValue: e })) return this;
                if (!this.has(e)) {
                    Jp(function () {
                        (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
                    });
                    var n = iv(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: xv,
                                  object: this,
                                  newValue: e,
                              }
                            : null;
                    n && av(this, r);
                }
                return this;
            }),
            (t.delete = function (e) {
                var t = this;
                if (tv(this) && !rv(this, { type: kv, object: this, oldValue: e })) return !1;
                if (this.has(e)) {
                    var n = iv(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: kv,
                                  object: this,
                                  oldValue: e,
                              }
                            : null;
                    return (
                        Jp(function () {
                            (t.atom_.reportChanged(), t.data_.delete(e));
                        }),
                        n && av(this, r),
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
                return oy({
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
                return oy({
                    next: function () {
                        return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
                    },
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    Nv(e) && (e = new Set(e)),
                    Jp(function () {
                        Array.isArray(e) || hd(e)
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
                return ov(this, e);
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
    Nv = fd('ObservableSet', Tv),
    jv = Object.create(null),
    Rv = 'remove',
    Iv = (function () {
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
                (this.keysAtom_ = new jd('ObservableObject.keys')),
                (this.isPlainObject_ = sd(this.target_)));
        }
        var t = e.prototype;
        return (
            (t.getObservablePropValue_ = function (e) {
                return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
                var n = this.values_.get(e);
                if (n instanceof Uh) return (n.set(t), !0);
                if (tv(this)) {
                    var r = rv(this, { type: lv, object: this.proxy_ || this.target_, name: e, newValue: t });
                    if (!r) return null;
                    t = r.newValue;
                }
                if ((t = n.prepareNewValue_(t)) !== rp.UNCHANGED) {
                    var i = iv(this),
                        o = i
                            ? {
                                  type: lv,
                                  observableKind: 'object',
                                  debugObjectName: this.name_,
                                  object: this.proxy_ || this.target_,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), i && av(this, o));
                }
                return !0;
            }),
            (t.get_ = function (e) {
                return (rp.trackingDerivation && !gd(this.target_, e) && this.has_(e), this.target_[e]);
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
                if (!rp.trackingDerivation) return e in this.target_;
                this.pendingKeys_ || (this.pendingKeys_ = new Map());
                var t = this.pendingKeys_.get(e);
                return (
                    t ||
                        ((t = new Dh(e in this.target_, zd, 'ObservableObject.key?', !1)), this.pendingKeys_.set(e, t)),
                    t.get()
                );
            }),
            (t.make_ = function (e, t) {
                if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                    if (!(e in this.target_)) {
                        var n;
                        if (null != (n = this.target_[Pd]) && n[e]) return;
                        qf(1, t.annotationType_, this.name_ + '.' + e.toString());
                    }
                    for (var r = this.target_; r && r !== Yf; ) {
                        var i = Qf(r, e);
                        if (i) {
                            var o = t.make_(this, e, i, r);
                            if (0 === o) return;
                            if (1 === o) break;
                        }
                        r = Object.getPrototypeOf(r);
                    }
                    Vv(this, t, e);
                }
            }),
            (t.extend_ = function (e, t, n, r) {
                if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                    return this.defineProperty_(e, t, r);
                var i = n.extend_(this, e, t, r);
                return (i && Vv(this, n, e), i);
            }),
            (t.defineProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    sp();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (tv(this)) {
                        var i = rv(this, { object: this.proxy_ || this.target_, name: e, type: xv, newValue: t.value });
                        if (!i) return null;
                        var o = i.newValue;
                        t.value !== o && (t = wd({}, t, { value: o }));
                    }
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                    } else Gf(this.target_, e, t);
                    this.notifyPropertyAddition_(e, t.value);
                } finally {
                    up();
                }
                return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
                (void 0 === r && (r = !1), this.keysAtom_);
                try {
                    sp();
                    var i = this.delete_(e);
                    if (!i) return i;
                    if (tv(this)) {
                        var o = rv(this, { object: this.proxy_ || this.target_, name: e, type: xv, newValue: t });
                        if (!o) return null;
                        t = o.newValue;
                    }
                    var a = zv(e),
                        s = {
                            configurable: !rp.safeDescriptors || this.isPlainObject_,
                            enumerable: !0,
                            get: a.get,
                            set: a.set,
                        };
                    if (r) {
                        if (!Reflect.defineProperty(this.target_, e, s)) return !1;
                    } else Gf(this.target_, e, s);
                    var u = new Dh(t, n, 'ObservableObject.key', !1);
                    (this.values_.set(e, u), this.notifyPropertyAddition_(e, u.value_));
                } finally {
                    up();
                }
                return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    sp();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (tv(this))
                        if (!rv(this, { object: this.proxy_ || this.target_, name: e, type: xv, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var i = zv(e),
                        o = {
                            configurable: !rp.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: i.get,
                            set: i.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, o)) return !1;
                    } else Gf(this.target_, e, o);
                    (this.values_.set(e, new Uh(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    up();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !gd(this.target_, e))) return !0;
                if (tv(this) && !rv(this, { object: this.proxy_ || this.target_, name: e, type: Rv })) return null;
                try {
                    var n, r;
                    sp();
                    var i,
                        o = iv(this),
                        a = this.values_.get(e),
                        s = void 0;
                    if (!a && o) s = null == (i = Qf(this.target_, e)) ? void 0 : i.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (a && (this.values_.delete(e), a instanceof Dh && (s = a.value_), cp(a)),
                        this.keysAtom_.reportChanged(),
                        null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
                        o)
                    ) {
                        var u = {
                            type: Rv,
                            observableKind: 'object',
                            object: this.proxy_ || this.target_,
                            debugObjectName: this.name_,
                            oldValue: s,
                            name: e,
                        };
                        (0, o && av(this, u));
                    }
                } finally {
                    up();
                }
                return !0;
            }),
            (t.observe_ = function (e, t) {
                return ov(this, e);
            }),
            (t.intercept_ = function (e) {
                return nv(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
                var n,
                    r,
                    i = iv(this);
                if (i) {
                    var o = i
                        ? {
                              type: xv,
                              observableKind: 'object',
                              debugObjectName: this.name_,
                              object: this.proxy_ || this.target_,
                              name: e,
                              newValue: t,
                          }
                        : null;
                    i && av(this, o);
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
function Lv(e, t) {
    var n;
    if (gd(e, Nd)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
        i = new Iv(
            e,
            new Map(),
            String(r),
            (function (e) {
                var t;
                return e ? (null != (t = e.defaultDecorator) ? t : oh(e)) : void 0;
            })(t),
        );
    return (ld(e, Nd, i), e);
}
var Dv = fd('ObservableObjectAdministration', Iv);
function zv(e) {
    return (
        jv[e] ||
        (jv[e] = {
            get: function () {
                return this[Nd].getObservablePropValue_(e);
            },
            set: function (t) {
                return this[Nd].setObservablePropValue_(e, t);
            },
        })
    );
}
function Mv(e) {
    return !!ad(e) && Dv(e[Nd]);
}
function Vv(e, t, n) {
    var r;
    null == (r = e.target_[Pd]) || delete r[n];
}
var Fv,
    Uv,
    Bv = Kv(0),
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
    qv = 0,
    Hv = function () {};
((Fv = Hv),
    (Uv = Array.prototype),
    Object.setPrototypeOf
        ? Object.setPrototypeOf(Fv.prototype, Uv)
        : void 0 !== Fv.prototype.__proto__
          ? (Fv.prototype.__proto__ = Uv)
          : (Fv.prototype = Uv));
var Wv = (function (e, t, n) {
    function r(t, n, r, i) {
        var o;
        return (
            void 0 === r && (r = 'ObservableArray'),
            void 0 === i && (i = !1),
            (o = e.call(this) || this),
            ey(function () {
                var e = new fv(r, n, i, !0);
                ((e.proxy_ = kd(o)),
                    cd(kd(o), Nd, e),
                    t && t.length && o.spliceWithArray(0, 0, t),
                    $v && Object.defineProperty(kd(o), '0', Bv));
            }),
            o
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
                    return wv(e) ? e.slice() : e;
                }),
            );
        }),
        (i[n] = function () {
            var e = this,
                t = 0;
            return oy({
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
})(Hv, Symbol.toStringTag, Symbol.iterator);
function Kv(e) {
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
function Qv(e) {
    Gf(Wv.prototype, '' + e, Kv(e));
}
function Gv(e) {
    if (e > qv) {
        for (var t = qv; t < e + 100; t++) Qv(t);
        qv = e;
    }
}
function Yv(e, t, n) {
    return new Wv(e, t, n);
}
function Xv(e, t) {
    if ('object' == typeof e && null !== e) {
        if (wv(e)) return (void 0 !== t && qf(23), e[Nd].atom_);
        if (Nv(e)) return e.atom_;
        if (Cv(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return (n || qf(25, t, Zv(e)), n);
        }
        if (Mv(e)) {
            if (!t) return qf(26);
            var r = e[Nd].values_.get(t);
            return (r || qf(27, t, Zv(e)), r);
        }
        if (Rd(e) || Bh(e) || yp(e)) return e;
    } else if (id(e) && yp(e[Nd])) return e[Nd];
    qf(28);
}
function Jv(e, t) {
    return (
        e || qf(29),
        void 0 !== t ? Jv(Xv(e, t)) : Rd(e) || Bh(e) || yp(e) || Cv(e) || Nv(e) ? e : e[Nd] ? e[Nd] : void qf(24, e)
    );
}
function Zv(e, t) {
    var n;
    if (void 0 !== t) n = Xv(e, t);
    else {
        if (Pp(e)) return e.name;
        n = Mv(e) || Cv(e) || Nv(e) ? Jv(e) : Xv(e);
    }
    return n.name_;
}
function ey(e) {
    var t = Gh(),
        n = Rh(!0);
    sp();
    try {
        return e();
    } finally {
        (up(), Ih(n), Yh(t));
    }
}
(Object.entries(hv).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && ld(Wv.prototype, t, n);
}),
    Gv(1e3));
var ty = Yf.toString;
function ny(e, t, n) {
    return (void 0 === n && (n = -1), ry(e, t, n));
}
function ry(e, t, n, r, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var o = typeof e;
    if ('function' !== o && 'object' !== o && 'object' != typeof t) return !1;
    var a = ty.call(e);
    if (a !== ty.call(t)) return !1;
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
    ((e = iy(e)), (t = iy(t)));
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
        for (; c--; ) if (!ry(e[c], t[c], n - 1, r, i)) return !1;
    } else {
        var f,
            d = Object.keys(e);
        if (((c = d.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (!gd(t, (f = d[c])) || !ry(e[f], t[f], n - 1, r, i)) return !1;
    }
    return (r.pop(), i.pop(), !0);
}
function iy(e) {
    return wv(e) ? e.slice() : dd(e) || Cv(e) || hd(e) || Nv(e) ? Array.from(e.entries()) : e;
}
function oy(e) {
    return ((e[Symbol.iterator] = ay), e);
}
function ay() {
    return this;
}
(['Symbol', 'Map', 'Set'].forEach(function (e) {
    void 0 === Wf()[e] && qf("MobX requires global '" + e + "' to be available or polyfilled");
}),
    'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
                return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
            },
            extras: { getDebugName: Zv },
            $mobx: Nd,
        }));
var sy = xy(),
    uy = (e) => by(e, sy),
    ly = xy();
uy.write = (e) => by(e, ly);
var cy = xy();
uy.onStart = (e) => by(e, cy);
var fy = xy();
uy.onFrame = (e) => by(e, fy);
var dy = xy();
uy.onFinish = (e) => by(e, dy);
var hy = [];
uy.setTimeout = (e, t) => {
    const n = uy.now() + t,
        r = () => {
            const e = hy.findIndex((e) => e.cancel == r);
            (~e && hy.splice(e, 1), (gy -= ~e ? 1 : 0));
        },
        i = { time: n, handler: e, cancel: r };
    return (hy.splice(py(n), 0, i), (gy += 1), _y(), i);
};
var py = (e) => ~(~hy.findIndex((t) => t.time > e) || ~hy.length);
((uy.cancel = (e) => {
    (cy.delete(e), fy.delete(e), dy.delete(e), sy.delete(e), ly.delete(e));
}),
    (uy.sync = (e) => {
        ((my = !0), uy.batchedUpdates(e), (my = !1));
    }),
    (uy.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            ((t = e), uy.onStart(n));
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                (cy.delete(n), (t = null));
            }),
            r
        );
    }));
var vy = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
((uy.use = (e) => (vy = e)),
    (uy.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (uy.batchedUpdates = (e) => e()),
    (uy.catch = console.error),
    (uy.frameLoop = 'always'),
    (uy.advance = () => {
        'demand' !== uy.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : Sy();
    }));
var yy = -1,
    gy = 0,
    my = !1;
function by(e, t) {
    my ? (t.delete(e), e(0)) : (t.add(e), _y());
}
function _y() {
    yy < 0 && ((yy = 0), 'demand' !== uy.frameLoop && vy(wy));
}
function wy() {
    ~yy && (vy(wy), uy.batchedUpdates(Sy));
}
function Sy() {
    const e = yy;
    yy = uy.now();
    const t = py(yy);
    (t && (ky(hy.splice(0, t), (e) => e.handler()), (gy -= t)),
        gy ? (cy.flush(), sy.flush(e ? Math.min(64, yy - e) : 16.667), fy.flush(), ly.flush(), dy.flush()) : (yy = -1));
}
function xy() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            ((gy += t != e || e.has(n) ? 0 : 1), e.add(n));
        },
        delete: (n) => ((gy -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (gy -= t.size), ky(t, (t) => t(n) && e.add(t)), (gy += e.size), (t = e));
        },
    };
}
function ky(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            uy.catch(n);
        }
    });
}
var Oy = Object.defineProperty,
    Ey = {};
function Py() {}
((e, t) => {
    for (var n in t) Oy(e, n, { get: t[n], enumerable: !0 });
})(Ey, {
    assign: () => Uy,
    colors: () => My,
    createStringInterpolator: () => Iy,
    skipAnimation: () => Vy,
    to: () => Ly,
    willAdvance: () => Fy,
});
var Cy = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
function Ay(e, t) {
    if (Cy.arr(e)) {
        if (!Cy.arr(t) || e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
    }
    return e === t;
}
var Ty = (e, t) => e.forEach(t);
function Ny(e, t, n) {
    if (Cy.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var jy = (e) => (Cy.und(e) ? [] : Cy.arr(e) ? e : [e]);
function Ry(e, t) {
    if (e.size) {
        const n = Array.from(e);
        (e.clear(), Ty(n, t));
    }
}
var Iy,
    Ly,
    Dy = (e, ...t) => Ry(e, (e) => e(...t)),
    zy = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    My = null,
    Vy = !1,
    Fy = Py,
    Uy = (e) => {
        (e.to && (Ly = e.to),
            e.now && (uy.now = e.now),
            void 0 !== e.colors && (My = e.colors),
            null != e.skipAnimation && (Vy = e.skipAnimation),
            e.createStringInterpolator && (Iy = e.createStringInterpolator),
            e.requestAnimationFrame && uy.use(e.requestAnimationFrame),
            e.batchedUpdates && (uy.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (Fy = e.willAdvance),
            e.frameLoop && (uy.frameLoop = e.frameLoop));
    },
    By = new Set(),
    $y = [],
    qy = [],
    Hy = 0,
    Wy = {
        get idle() {
            return !By.size && !$y.length;
        },
        start(e) {
            Hy > e.priority ? (By.add(e), uy.onStart(Ky)) : (Qy(e), uy(Yy));
        },
        advance: Yy,
        sort(e) {
            if (Hy) uy.onFrame(() => Wy.sort(e));
            else {
                const t = $y.indexOf(e);
                ~t && ($y.splice(t, 1), Gy(e));
            }
        },
        clear() {
            (($y = []), By.clear());
        },
    };
function Ky() {
    (By.forEach(Qy), By.clear(), uy(Yy));
}
function Qy(e) {
    $y.includes(e) || Gy(e);
}
function Gy(e) {
    $y.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })($y, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function Yy(e) {
    const t = qy;
    for (let n = 0; n < $y.length; n++) {
        const r = $y[n];
        ((Hy = r.priority), r.idle || (Fy(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((Hy = 0), ((qy = $y).length = 0), ($y = t).length > 0);
}
var Xy = '[-+]?\\d*\\.?\\d+',
    Jy = Xy + '%';
function Zy(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var eg = new RegExp('rgb' + Zy(Xy, Xy, Xy)),
    tg = new RegExp('rgba' + Zy(Xy, Xy, Xy, Xy)),
    ng = new RegExp('hsl' + Zy(Xy, Jy, Jy)),
    rg = new RegExp('hsla' + Zy(Xy, Jy, Jy, Xy)),
    ig = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    og = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    ag = /^#([0-9a-fA-F]{6})$/,
    sg = /^#([0-9a-fA-F]{8})$/;
function ug(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function lg(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        i = 2 * n - r,
        o = ug(i, r, e + 1 / 3),
        a = ug(i, r, e),
        s = ug(i, r, e - 1 / 3);
    return (Math.round(255 * o) << 24) | (Math.round(255 * a) << 16) | (Math.round(255 * s) << 8);
}
function cg(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function fg(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function dg(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function hg(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function pg(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = ag.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : My && void 0 !== My[e]
                ? My[e]
                : (t = eg.exec(e))
                  ? ((cg(t[1]) << 24) | (cg(t[2]) << 16) | (cg(t[3]) << 8) | 255) >>> 0
                  : (t = tg.exec(e))
                    ? ((cg(t[1]) << 24) | (cg(t[2]) << 16) | (cg(t[3]) << 8) | dg(t[4])) >>> 0
                    : (t = ig.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = sg.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = og.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = ng.exec(e))
                            ? (255 | lg(fg(t[1]), hg(t[2]), hg(t[3]))) >>> 0
                            : (t = rg.exec(e))
                              ? (lg(fg(t[1]), hg(t[2]), hg(t[3])) | dg(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var vg = (e, t, n) => {
    if (Cy.fun(e)) return e;
    if (Cy.arr(e)) return vg({ range: e, output: t, extrapolate: n });
    if (Cy.str(e.output[0])) return Iy(e);
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
var yg = Symbol.for('FluidValue.get'),
    gg = Symbol.for('FluidValue.observers'),
    mg = (e) => Boolean(e && e[yg]),
    bg = (e) => (e && e[yg] ? e[yg]() : e),
    _g = (e) => e[gg] || null;
function wg(e, t) {
    const n = e[gg];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
var Sg = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            xg(this, e);
        }
    },
    xg = (e, t) => Pg(e, yg, t);
function kg(e, t) {
    if (e[yg]) {
        let n = e[gg];
        (n || Pg(e, gg, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function Og(e, t) {
    const n = e[gg];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[gg] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
var Eg,
    Pg = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    Cg = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    Ag = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    Tg = new RegExp(`(${Cg.source})(%|[a-z]+)`, 'i'),
    Ng = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    jg = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    Rg = (e) => {
        const [t, n] = Ig(e);
        if (!t || zy()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && jg.test(n) ? Rg(n) : n || e;
    },
    Ig = (e) => {
        const t = jg.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    Lg = (e, t, n, r, i) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
    Dg = (e) => {
        Eg || (Eg = My ? new RegExp(`(${Object.keys(My).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => bg(e).replace(jg, Rg).replace(Ag, pg).replace(Eg, pg)),
            n = t.map((e) => e.match(Cg).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => vg({ ...e, output: t }));
        return (e) => {
            var n;
            const i = !Tg.test(t[0]) && (null == (n = t.find((e) => Tg.test(e))) ? void 0 : n.replace(Cg, ''));
            let o = 0;
            return t[0].replace(Cg, () => `${r[o++](e)}${i || ''}`).replace(Ng, Lg);
        };
    },
    zg = 'react-spring: ',
    Mg = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${zg}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    Vg = Mg(console.warn);
var Fg = Mg(console.warn);
function Ug(e) {
    return Cy.str(e) && ('#' == e[0] || /\d/.test(e) || (!zy() && jg.test(e)) || e in (My || {}));
}
var Bg = zy() ? V.useEffect : V.useLayoutEffect,
    $g = () => {
        const e = V.useRef(!1);
        return (
            Bg(
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
function qg() {
    const e = V.useState()[1],
        t = $g();
    return () => {
        t.current && e(Math.random());
    };
}
var Hg = (e) => V.useEffect(e, Wg),
    Wg = [];
function Kg(e) {
    const t = V.useRef();
    return (
        V.useEffect(() => {
            t.current = e;
        }),
        t.current
    );
}
var Qg = Symbol.for('Animated:node'),
    Gg = (e) => e && e[Qg],
    Yg = (e, t) => {
        return ((n = e), (r = Qg), (i = t), Object.defineProperty(n, r, { value: i, writable: !0, configurable: !0 }));
        var n, r, i;
    },
    Xg = (e) => e && e[Qg] && e[Qg].getPayload(),
    Jg = class {
        constructor() {
            Yg(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    Zg = class extends Jg {
        constructor(e) {
            (super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                Cy.num(this._value) && (this.lastPosition = this._value));
        }
        static create(e) {
            return new Zg(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                Cy.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            ((this.done = !1),
                Cy.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null)));
        }
    },
    em = class extends Zg {
        constructor(e) {
            (super(0), (this._string = null), (this._toString = vg({ output: [e, e] })));
        }
        static create(e) {
            return new em(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (Cy.str(e)) {
                if (e == this._string) return !1;
                ((this._string = e), (this._value = 1));
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null;
            }
            return !0;
        }
        reset(e) {
            (e && (this._toString = vg({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
        }
    },
    tm = { dependencies: null },
    nm = class extends Jg {
        constructor(e) {
            (super(), (this.source = e), this.setValue(e));
        }
        getValue(e) {
            const t = {};
            return (
                Ny(this.source, (n, r) => {
                    var i;
                    (i = n) && i[Qg] === i ? (t[r] = n.getValue(e)) : mg(n) ? (t[r] = bg(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            ((this.source = e), (this.payload = this._makePayload(e)));
        }
        reset() {
            this.payload && Ty(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return (Ny(e, this._addToPayload, t), Array.from(t));
            }
        }
        _addToPayload(e) {
            tm.dependencies && mg(e) && tm.dependencies.add(e);
            const t = Xg(e);
            t && Ty(t, (e) => this.add(e));
        }
    },
    rm = class extends nm {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new rm(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map(im)), !0);
        }
    };
function im(e) {
    return (Ug(e) ? em : Zg).create(e);
}
function om(e) {
    const t = Gg(e);
    return t ? t.constructor : Cy.arr(e) ? rm : Ug(e) ? em : Zg;
}
var am = (e, t) => {
        const n = !Cy.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return V.forwardRef((r, i) => {
            const o = V.useRef(null),
                a =
                    n &&
                    V.useCallback(
                        (e) => {
                            o.current = (function (e, t) {
                                e && (Cy.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(i, e);
                        },
                        [i],
                    ),
                [s, u] = (function (e, t) {
                    const n = new Set();
                    ((tm.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                    return ((e = new nm(e)), (tm.dependencies = null), [e, n]);
                })(r, t),
                l = qg(),
                c = () => {
                    const e = o.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && l();
                },
                f = new sm(c, u),
                d = V.useRef();
            (Bg(
                () => (
                    (d.current = f),
                    Ty(u, (e) => kg(e, f)),
                    () => {
                        d.current && (Ty(d.current.deps, (e) => Og(e, d.current)), uy.cancel(d.current.update));
                    }
                ),
            ),
                V.useEffect(c, []),
                Hg(() => () => {
                    const e = d.current;
                    Ty(e.deps, (t) => Og(t, e));
                }));
            const h = t.getComponentProps(s.getValue());
            return V.createElement(e, { ...h, ref: a });
        });
    },
    sm = class {
        constructor(e, t) {
            ((this.update = e), (this.deps = t));
        }
        eventObserved(e) {
            'change' == e.type && uy.write(this.update);
        }
    };
var um = Symbol.for('AnimatedComponent'),
    lm = (e) => (Cy.str(e) ? e : e && Cy.str(e.displayName) ? e.displayName : (Cy.fun(e) && e.name) || null);
function cm(e, ...t) {
    return Cy.fun(e) ? e(...t) : e;
}
var fm = (e, t) => !0 === e || !!(t && e && (Cy.fun(e) ? e(t) : jy(e).includes(t))),
    dm = (e, t) => (Cy.obj(e) ? t && e[t] : e),
    hm = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
    pm = (e) => e,
    vm = (e, t = pm) => {
        let n = ym;
        e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
        const r = {};
        for (const i of n) {
            const n = t(e[i], i);
            Cy.und(n) || (r[i] = n);
        }
        return r;
    },
    ym = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
    gm = {
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
function mm(e) {
    const t = (function (e) {
        const t = {};
        let n = 0;
        if (
            (Ny(e, (e, r) => {
                gm[r] || ((t[r] = e), n++);
            }),
            n)
        )
            return t;
    })(e);
    if (t) {
        const n = { to: t };
        return (Ny(e, (e, r) => r in t || (n[r] = e)), n);
    }
    return { ...e };
}
function bm(e) {
    return (
        (e = bg(e)),
        Cy.arr(e) ? e.map(bm) : Ug(e) ? Ey.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
    );
}
function _m(e) {
    for (const t in e) return !0;
    return !1;
}
function wm(e) {
    return Cy.fun(e) || (Cy.arr(e) && Cy.obj(e[0]));
}
function Sm(e, t) {
    var n;
    (null == (n = e.ref) || n.delete(e), null == t || t.delete(e));
}
function xm(e, t) {
    var n;
    t && e.ref !== t && (null == (n = e.ref) || n.delete(e), t.add(e), (e.ref = t));
}
var km = { tension: 170, friction: 26, mass: 1, damping: 1, easing: (e) => e, clamp: !1 };
function Om(e, t) {
    if (Cy.und(t.decay)) {
        const n = !Cy.und(t.tension) || !Cy.und(t.friction);
        ((!n && Cy.und(t.frequency) && Cy.und(t.damping) && Cy.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0));
    } else e.duration = void 0;
}
var Em = [];
function Pm(e, { key: t, props: n, defaultProps: r, state: i, actions: o }) {
    return new Promise((a, s) => {
        let u,
            l,
            c = fm(n.cancel ?? (null == r ? void 0 : r.cancel), t);
        if (c) h();
        else {
            Cy.und(n.pause) || (i.paused = fm(n.pause, t));
            let e = null == r ? void 0 : r.pause;
            (!0 !== e && (e = i.paused || fm(e, t)),
                (u = cm(n.delay || 0, t)),
                e ? (i.resumeQueue.add(d), o.pause()) : (o.resume(), d()));
        }
        function f() {
            (i.resumeQueue.add(d), i.timeouts.delete(l), l.cancel(), (u = l.time - uy.now()));
        }
        function d() {
            u > 0 && !Ey.skipAnimation
                ? ((i.delayed = !0), (l = uy.setTimeout(h, u)), i.pauseQueue.add(f), i.timeouts.add(l))
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
var Cm = (e, t) =>
        1 == t.length
            ? t[0]
            : t.some((e) => e.cancelled)
              ? Nm(e.get())
              : t.every((e) => e.noop)
                ? Am(e.get())
                : Tm(
                      e.get(),
                      t.every((e) => e.finished),
                  ),
    Am = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
    Tm = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
    Nm = (e) => ({ value: e, cancelled: !0, finished: !1 });
function jm(e, t, n, r) {
    const { callId: i, parentId: o, onRest: a } = t,
        { asyncTo: s, promise: u } = n;
    return o || e !== s || t.reset
        ? (n.promise = (async () => {
              ((n.asyncId = i), (n.asyncTo = e));
              const l = vm(t, (e, t) => ('onRest' === t ? void 0 : e));
              let c, f;
              const d = new Promise((e, t) => ((c = e), (f = t))),
                  h = (e) => {
                      const t = (i <= (n.cancelId || 0) && Nm(r)) || (i !== n.asyncId && Tm(r, !1));
                      if (t) throw ((e.result = t), f(e), e);
                  },
                  p = (e, t) => {
                      const o = new Im(),
                          a = new Lm();
                      return (async () => {
                          if (Ey.skipAnimation) throw (Rm(n), (a.result = Tm(r, !1)), f(a), a);
                          h(o);
                          const s = Cy.obj(e) ? { ...e } : { ...t, to: e };
                          ((s.parentId = i),
                              Ny(l, (e, t) => {
                                  Cy.und(s[t]) && (s[t] = e);
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
              if (Ey.skipAnimation) return (Rm(n), Tm(r, !1));
              try {
                  let t;
                  ((t = Cy.arr(e)
                      ? (async (e) => {
                            for (const t of e) await p(t);
                        })(e)
                      : Promise.resolve(e(p, r.stop.bind(r)))),
                      await Promise.all([t.then(c), d]),
                      (v = Tm(r.get(), !0, !1)));
              } catch (y) {
                  if (y instanceof Im) v = y.result;
                  else {
                      if (!(y instanceof Lm)) throw y;
                      v = y.result;
                  }
              } finally {
                  i == n.asyncId && ((n.asyncId = o), (n.asyncTo = o ? s : void 0), (n.promise = o ? u : void 0));
              }
              return (
                  Cy.fun(a) &&
                      uy.batchedUpdates(() => {
                          a(v, r, r.item);
                      }),
                  v
              );
          })())
        : u;
}
function Rm(e, t) {
    (Ry(e.timeouts, (e) => e.cancel()),
        e.pauseQueue.clear(),
        e.resumeQueue.clear(),
        (e.asyncId = e.asyncTo = e.promise = void 0),
        t && (e.cancelId = t));
}
var Im = class extends Error {
        constructor() {
            super(
                'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
            );
        }
    },
    Lm = class extends Error {
        constructor() {
            super('SkipAnimationSignal');
        }
    },
    Dm = (e) => e instanceof Mm,
    zm = 1,
    Mm = class extends Sg {
        constructor() {
            (super(...arguments), (this.id = zm++), (this._priority = 0));
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = Gg(this);
            return e && e.getValue();
        }
        to(...e) {
            return Ey.to(this, e);
        }
        interpolate(...e) {
            return (Vg(`${zg}The "interpolate" function is deprecated in v9 (use "to" instead)`), Ey.to(this, e));
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
            wg(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            (this.idle || Wy.sort(this), wg(this, { type: 'priority', parent: this, priority: e }));
        }
    },
    Vm = Symbol.for('SpringPhase'),
    Fm = (e) => (1 & e[Vm]) > 0,
    Um = (e) => (2 & e[Vm]) > 0,
    Bm = (e) => (4 & e[Vm]) > 0,
    $m = (e, t) => (t ? (e[Vm] |= 3) : (e[Vm] &= -3)),
    qm = (e, t) => (t ? (e[Vm] |= 4) : (e[Vm] &= -5)),
    Hm = class extends Mm {
        constructor(e, t) {
            if (
                (super(),
                (this.animation = new (class {
                    constructor() {
                        ((this.changed = !1),
                            (this.values = Em),
                            (this.toValues = null),
                            (this.fromValues = Em),
                            (this.config = new (class {
                                constructor() {
                                    ((this.velocity = 0), Object.assign(this, km));
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
                !Cy.und(e) || !Cy.und(t))
            ) {
                const n = Cy.obj(e) ? { ...e } : { ...t, from: e };
                (Cy.und(n.default) && (n.default = !0), this.start(n));
            }
        }
        get idle() {
            return !(Um(this) || this._state.asyncTo) || Bm(this);
        }
        get goal() {
            return bg(this.animation.to);
        }
        get velocity() {
            const e = Gg(this);
            return e instanceof Zg ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
        }
        get hasAnimated() {
            return Fm(this);
        }
        get isAnimating() {
            return Um(this);
        }
        get isPaused() {
            return Bm(this);
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
                a = Xg(r.to);
            (!a && mg(r.to) && (i = jy(bg(r.to))),
                r.values.forEach((s, u) => {
                    if (s.done) return;
                    const l = s.constructor == em ? 1 : a ? a[u].lastPosition : i[u];
                    let c = r.immediate,
                        f = l;
                    if (!c) {
                        if (((f = s.lastPosition), o.tension <= 0)) return void (s.done = !0);
                        let t = (s.elapsedTime += e);
                        const n = r.fromValues[u],
                            i = null != s.v0 ? s.v0 : (s.v0 = Cy.arr(o.velocity) ? o.velocity[u] : o.velocity);
                        let a;
                        const d = o.precision || (n == l ? 0.005 : Math.min(1, 0.001 * Math.abs(l - n)));
                        if (Cy.und(o.duration))
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
                                    u = !Cy.und(r),
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
            const s = Gg(this),
                u = s.getValue();
            if (t) {
                const e = bg(r.to);
                ((u === e && !n) || o.decay ? n && o.decay && this._onChange(u) : (s.setValue(e), this._onChange(e)),
                    this._stop());
            } else n && this._onChange(u);
        }
        set(e) {
            return (
                uy.batchedUpdates(() => {
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
            if (Um(this)) {
                const { to: e, config: t } = this.animation;
                uy.batchedUpdates(() => {
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
                Cy.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [Cy.obj(e) ? e : { ...t, to: e }]),
                Promise.all(n.map((e) => this._update(e))).then((e) => Cm(this, e))
            );
        }
        stop(e) {
            const { to: t } = this.animation;
            return (
                this._focus(this.get()),
                Rm(this._state, e && this._lastCallId),
                uy.batchedUpdates(() => this._stop(t, e)),
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
            ((n = Cy.obj(n) ? n[t] : n),
                (null == n || wm(n)) && (n = void 0),
                (r = Cy.obj(r) ? r[t] : r),
                null == r && (r = void 0));
            const i = { to: n, from: r };
            return (
                Fm(this) ||
                    (e.reverse && ([n, r] = [r, n]), (r = bg(r)), Cy.und(r) ? Gg(this) || this._set(n) : this._set(r)),
                i
            );
        }
        _update({ ...e }, t) {
            const { key: n, defaultProps: r } = this;
            (e.default &&
                Object.assign(
                    r,
                    vm(e, (e, t) => (/^on/.test(t) ? dm(e, n) : e)),
                ),
                Jm(this, e, 'onProps'),
                Zm(this, 'onProps', e, this));
            const i = this._prepareNode(e);
            if (Object.isFrozen(this))
                throw Error(
                    'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                );
            const o = this._state;
            return Pm(++this._lastCallId, {
                key: n,
                props: e,
                defaultProps: r,
                state: o,
                actions: {
                    pause: () => {
                        Bm(this) ||
                            (qm(this, !0),
                            Dy(o.pauseQueue),
                            Zm(this, 'onPause', Tm(this, Wm(this, this.animation.to)), this));
                    },
                    resume: () => {
                        Bm(this) &&
                            (qm(this, !1),
                            Um(this) && this._resume(),
                            Dy(o.resumeQueue),
                            Zm(this, 'onResume', Tm(this, Wm(this, this.animation.to)), this));
                    },
                    start: this._merge.bind(this, i),
                },
            }).then((n) => {
                if (e.loop && n.finished && (!t || !n.noop)) {
                    const t = Km(e);
                    if (t) return this._update(t, !0);
                }
                return n;
            });
        }
        _merge(e, t, n) {
            if (t.cancel) return (this.stop(!0), n(Nm(this)));
            const r = !Cy.und(e.to),
                i = !Cy.und(e.from);
            if (r || i) {
                if (!(t.callId > this._lastToId)) return n(Nm(this));
                this._lastToId = t.callId;
            }
            const { key: o, defaultProps: a, animation: s } = this,
                { to: u, from: l } = s;
            let { to: c = u, from: f = l } = e;
            (!i || r || (t.default && !Cy.und(c)) || (c = f), t.reverse && ([c, f] = [f, c]));
            const d = !Ay(f, l);
            (d && (s.from = f), (f = bg(f)));
            const h = !Ay(c, u);
            h && this._focus(c);
            const p = wm(t.to),
                { config: v } = s,
                { decay: y, velocity: g } = v;
            ((r || i) && (v.velocity = 0),
                t.config &&
                    !p &&
                    (function (e, t, n) {
                        (n && (Om((n = { ...n }), t), (t = { ...n, ...t })), Om(e, t), Object.assign(e, t));
                        for (const a in km) null == e[a] && (e[a] = km[a]);
                        let { frequency: r, damping: i } = e;
                        const { mass: o } = e;
                        Cy.und(r) ||
                            (r < 0.01 && (r = 0.01),
                            i < 0 && (i = 0),
                            (e.tension = Math.pow((2 * Math.PI) / r, 2) * o),
                            (e.friction = (4 * Math.PI * i * o) / r));
                    })(v, cm(t.config, o), t.config !== a.config ? cm(a.config, o) : void 0));
            let m = Gg(this);
            if (!m || Cy.und(c)) return n(Tm(this, !0));
            const b = Cy.und(t.reset) ? i && !t.default : !Cy.und(f) && fm(t.reset, o),
                _ = b ? f : this.get(),
                w = bm(c),
                S = Cy.num(w) || Cy.arr(w) || Ug(w),
                x = !p && (!S || fm(a.immediate || t.immediate, o));
            if (h) {
                const e = om(c);
                if (e !== m.constructor) {
                    if (!x)
                        throw Error(
                            `Cannot animate between ${m.constructor.name} and ${e.name}, as the "to" prop suggests`,
                        );
                    m = this._set(w);
                }
            }
            const k = m.constructor;
            let O = mg(c),
                E = !1;
            if (!O) {
                const e = b || (!Fm(this) && d);
                ((h || e) && ((E = Ay(bm(_), w)), (O = !E)),
                    ((Ay(s.immediate, x) || x) && Ay(v.decay, y) && Ay(v.velocity, g)) || (O = !0));
            }
            if (
                (E && Um(this) && (s.changed && !b ? (O = !0) : O || this._stop(u)),
                !p &&
                    ((O || mg(u)) && ((s.values = m.getPayload()), (s.toValues = mg(c) ? null : k == em ? [1] : jy(w))),
                    s.immediate != x && ((s.immediate = x), x || b || this._set(u)),
                    O))
            ) {
                const { onRest: e } = s;
                Ty(Xm, (e) => Jm(this, t, e));
                const r = Tm(this, Wm(this, u));
                (Dy(this._pendingCalls, r),
                    this._pendingCalls.add(n),
                    s.changed &&
                        uy.batchedUpdates(() => {
                            var t;
                            ((s.changed = !b),
                                null == e || e(r, this),
                                b ? cm(a.onRest, r) : null == (t = s.onStart) || t.call(s, r, this));
                        }));
            }
            (b && this._set(_),
                p
                    ? n(jm(t.to, t, this._state, this))
                    : O
                      ? this._start()
                      : Um(this) && !h
                        ? this._pendingCalls.add(n)
                        : n(Am(_)));
        }
        _focus(e) {
            const t = this.animation;
            e !== t.to && (_g(this) && this._detach(), (t.to = e), _g(this) && this._attach());
        }
        _attach() {
            let e = 0;
            const { to: t } = this.animation;
            (mg(t) && (kg(t, this), Dm(t) && (e = t.priority + 1)), (this.priority = e));
        }
        _detach() {
            const { to: e } = this.animation;
            mg(e) && Og(e, this);
        }
        _set(e, t = !0) {
            const n = bg(e);
            if (!Cy.und(n)) {
                const e = Gg(this);
                if (!e || !Ay(n, e.getValue())) {
                    const r = om(n);
                    (e && e.constructor == r ? e.setValue(n) : Yg(this, r.create(n)),
                        e &&
                            uy.batchedUpdates(() => {
                                this._onChange(n, t);
                            }));
                }
            }
            return Gg(this);
        }
        _onStart() {
            const e = this.animation;
            e.changed || ((e.changed = !0), Zm(this, 'onStart', Tm(this, Wm(this, e.to)), this));
        }
        _onChange(e, t) {
            (t || (this._onStart(), cm(this.animation.onChange, e, this)),
                cm(this.defaultProps.onChange, e, this),
                super._onChange(e, t));
        }
        _start() {
            const e = this.animation;
            (Gg(this).reset(bg(e.to)),
                e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                Um(this) || ($m(this, !0), Bm(this) || this._resume()));
        }
        _resume() {
            Ey.skipAnimation ? this.finish() : Wy.start(this);
        }
        _stop(e, t) {
            if (Um(this)) {
                $m(this, !1);
                const n = this.animation;
                (Ty(n.values, (e) => {
                    e.done = !0;
                }),
                    n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                    wg(this, { type: 'idle', parent: this }));
                const r = t ? Nm(this.get()) : Tm(this.get(), Wm(this, e ?? n.to));
                (Dy(this._pendingCalls, r), n.changed && ((n.changed = !1), Zm(this, 'onRest', r, this)));
            }
        }
    };
function Wm(e, t) {
    const n = bm(t);
    return Ay(bm(e.get()), n);
}
function Km(e, t = e.loop, n = e.to) {
    const r = cm(t);
    if (r) {
        const i = !0 !== r && mm(r),
            o = (i || e).reverse,
            a = !i || i.reset;
        return Qm({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !o || wm(n) ? n : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...i,
        });
    }
}
function Qm(e) {
    const { to: t, from: n } = (e = mm(e)),
        r = new Set();
    return (Cy.obj(t) && Ym(t, r), Cy.obj(n) && Ym(n, r), (e.keys = r.size ? Array.from(r) : null), e);
}
function Gm(e) {
    const t = Qm(e);
    return (Cy.und(t.default) && (t.default = vm(t)), t);
}
function Ym(e, t) {
    Ny(e, (e, n) => null != e && t.add(n));
}
var Xm = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
function Jm(e, t, n) {
    e.animation[n] = t[n] !== hm(t, n) ? dm(t[n], e.key) : void 0;
}
function Zm(e, t, ...n) {
    var r, i, o, a;
    (null == (i = (r = e.animation)[t]) || i.call(r, ...n), null == (a = (o = e.defaultProps)[t]) || a.call(o, ...n));
}
var eb = ['onStart', 'onChange', 'onRest'],
    tb = 1,
    nb = class {
        constructor(e, t) {
            ((this.id = tb++),
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
                Cy.und(n) || this.springs[t].set(n);
            }
        }
        update(e) {
            return (e && this.queue.push(Qm(e)), this);
        }
        start(e) {
            let { queue: t } = this;
            return (
                e ? (t = jy(e).map(Qm)) : (this.queue = []),
                this._flush ? this._flush(this, t) : (lb(this, t), rb(this, t))
            );
        }
        stop(e, t) {
            if ((e !== !!e && (t = e), t)) {
                const n = this.springs;
                Ty(jy(t), (t) => n[t].stop(!!e));
            } else (Rm(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
            return this;
        }
        pause(e) {
            if (Cy.und(e)) this.start({ pause: !0 });
            else {
                const t = this.springs;
                Ty(jy(e), (e) => t[e].pause());
            }
            return this;
        }
        resume(e) {
            if (Cy.und(e)) this.start({ pause: !1 });
            else {
                const t = this.springs;
                Ty(jy(e), (e) => t[e].resume());
            }
            return this;
        }
        each(e) {
            Ny(this.springs, e);
        }
        _onFrame() {
            const { onStart: e, onChange: t, onRest: n } = this._events,
                r = this._active.size > 0,
                i = this._changed.size > 0;
            ((r && !this._started) || (i && !this._started)) &&
                ((this._started = !0),
                Ry(e, ([e, t]) => {
                    ((t.value = this.get()), e(t, this, this._item));
                }));
            const o = !r && this._started,
                a = i || (o && n.size) ? this.get() : null;
            (i &&
                t.size &&
                Ry(t, ([e, t]) => {
                    ((t.value = a), e(t, this, this._item));
                }),
                o &&
                    ((this._started = !1),
                    Ry(n, ([e, t]) => {
                        ((t.value = a), e(t, this, this._item));
                    })));
        }
        eventObserved(e) {
            if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
            else {
                if ('idle' != e.type) return;
                this._active.delete(e.parent);
            }
            uy.onFrame(this._onFrame);
        }
    };
function rb(e, t) {
    return Promise.all(t.map((t) => ib(e, t))).then((t) => Cm(e, t));
}
async function ib(e, t, n) {
    const { keys: r, to: i, from: o, loop: a, onRest: s, onResolve: u } = t,
        l = Cy.obj(t.default) && t.default;
    (a && (t.loop = !1), !1 === i && (t.to = null), !1 === o && (t.from = null));
    const c = Cy.arr(i) || Cy.fun(i) ? i : void 0;
    c
        ? ((t.to = void 0), (t.onRest = void 0), l && (l.onRest = void 0))
        : Ty(eb, (n) => {
              const r = t[n];
              if (Cy.fun(r)) {
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
        ? ((f.paused = t.pause), Dy(t.pause ? f.pauseQueue : f.resumeQueue))
        : f.paused && (t.pause = !0);
    const d = (r || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
        h = !0 === t.cancel || !0 === hm(t, 'cancel');
    ((c || (h && f.asyncId)) &&
        d.push(
            Pm(++e._lastAsyncId, {
                props: t,
                state: f,
                actions: {
                    pause: Py,
                    resume: Py,
                    start(t, n) {
                        h ? (Rm(f, e._lastAsyncId), n(Nm(e))) : ((t.onRest = s), n(jm(c, t, f, e)));
                    },
                },
            }),
        ),
        f.paused &&
            (await new Promise((e) => {
                f.resumeQueue.add(e);
            })));
    const p = Cm(e, await Promise.all(d));
    if (a && p.finished && (!n || !p.noop)) {
        const n = Km(t, a, i);
        if (n) return (lb(e, [n]), ib(e, n, !0));
    }
    return (u && uy.batchedUpdates(() => u(p, e, e.item)), p);
}
function ob(e, t) {
    const n = { ...e.springs };
    return (
        t &&
            Ty(jy(t), (e) => {
                (Cy.und(e.keys) && (e = Qm(e)), Cy.obj(e.to) || (e = { ...e, to: void 0 }), ub(n, e, (e) => sb(e)));
            }),
        ab(e, n),
        n
    );
}
function ab(e, t) {
    Ny(t, (t, n) => {
        e.springs[n] || ((e.springs[n] = t), kg(t, e));
    });
}
function sb(e, t) {
    const n = new Hm();
    return ((n.key = e), t && kg(n, t), n);
}
function ub(e, t, n) {
    t.keys &&
        Ty(t.keys, (r) => {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function lb(e, t) {
    Ty(t, (t) => {
        ub(e.springs, t, (t) => sb(t, e));
    });
}
var cb,
    fb,
    db = ({ children: e, ...t }) => {
        const n = V.useContext(hb),
            r = t.pause || !!n.pause,
            i = t.immediate || !!n.immediate;
        t = (function (e, t) {
            const [n] = V.useState(() => ({ inputs: t, result: e() })),
                r = V.useRef(),
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
                V.useEffect(() => {
                    ((r.current = o), i == n && (n.inputs = n.result = void 0));
                }, [o]),
                o.result
            );
        })(() => ({ pause: r, immediate: i }), [r, i]);
        const { Provider: o } = hb;
        return V.createElement(o, { value: t }, e);
    },
    hb =
        ((cb = db),
        (fb = {}),
        Object.assign(cb, V.createContext(fb)),
        (cb.Provider._context = cb),
        (cb.Consumer._context = cb),
        cb);
((db.Provider = hb.Provider), (db.Consumer = hb.Consumer));
var pb = () => {
    const e = [],
        t = function (t) {
            Fg(
                `${zg}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
            );
            const r = [];
            return (
                Ty(e, (e, i) => {
                    if (Cy.und(t)) r.push(e.start());
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
            return (Ty(e, (e) => e.pause(...arguments)), this);
        }),
        (t.resume = function () {
            return (Ty(e, (e) => e.resume(...arguments)), this);
        }),
        (t.set = function (t) {
            Ty(e, (e, n) => {
                const r = Cy.fun(t) ? t(n, e) : t;
                r && e.set(r);
            });
        }),
        (t.start = function (t) {
            const n = [];
            return (
                Ty(e, (e, r) => {
                    if (Cy.und(t)) n.push(e.start());
                    else {
                        const i = this._getProps(t, e, r);
                        i && n.push(e.start(i));
                    }
                }),
                n
            );
        }),
        (t.stop = function () {
            return (Ty(e, (e) => e.stop(...arguments)), this);
        }),
        (t.update = function (t) {
            return (Ty(e, (e, n) => e.update(this._getProps(t, e, n))), this);
        }));
    const n = function (e, t, n) {
        return Cy.fun(e) ? e(n, t) : e;
    };
    return ((t._getProps = n), t);
};
function vb(e, t) {
    const n = Cy.fun(e),
        [[r], i] = (function (e, t, n) {
            const r = Cy.fun(t) && t;
            r && !n && (n = []);
            const i = V.useMemo(() => (r || 3 == arguments.length ? pb() : void 0), []),
                o = V.useRef(0),
                a = qg(),
                s = V.useMemo(
                    () => ({
                        ctrls: [],
                        queue: [],
                        flush(e, t) {
                            const n = ob(e, t);
                            return o.current > 0 && !s.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                                ? rb(e, t)
                                : new Promise((r) => {
                                      (ab(e, n),
                                          s.queue.push(() => {
                                              r(rb(e, t));
                                          }),
                                          a());
                                  });
                        },
                    }),
                    [],
                ),
                u = V.useRef([...s.ctrls]),
                l = [],
                c = Kg(e) || 0;
            function f(e, n) {
                for (let i = e; i < n; i++) {
                    const e = u.current[i] || (u.current[i] = new nb(null, s.flush)),
                        n = r ? r(i, e) : t[i];
                    n && (l[i] = Gm(n));
                }
            }
            (V.useMemo(() => {
                (Ty(u.current.slice(e, c), (e) => {
                    (Sm(e, i), e.stop(!0));
                }),
                    (u.current.length = e),
                    f(c, e));
            }, [e]),
                V.useMemo(() => {
                    f(0, Math.min(c, e));
                }, n));
            const d = u.current.map((e, t) => ob(e, l[t])),
                h = V.useContext(db),
                p = Kg(h),
                v = h !== p && _m(h);
            (Bg(() => {
                (o.current++, (s.ctrls = u.current));
                const { queue: e } = s;
                (e.length && ((s.queue = []), Ty(e, (e) => e())),
                    Ty(u.current, (e, t) => {
                        (null == i || i.add(e), v && e.start({ default: h }));
                        const n = l[t];
                        n && (xm(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
                    }));
            }),
                Hg(() => () => {
                    Ty(s.ctrls, (e) => e.stop(!0));
                }));
            const y = d.map((e) => ({ ...e }));
            return i ? [y, i] : y;
        })(1, n ? e : [e], n ? [] : t);
    return n || 2 == arguments.length ? [r, i] : r;
}
function yb(e, t, n) {
    const r = Cy.fun(t) && t,
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
        d = V.useMemo(() => (r || 3 == arguments.length ? pb() : void 0), []),
        h = jy(e),
        p = [],
        v = V.useRef(null),
        y = i ? null : v.current;
    (Bg(() => {
        v.current = p;
    }),
        Hg(
            () => (
                Ty(p, (e) => {
                    (null == d || d.add(e.ctrl), (e.ctrl.ref = d));
                }),
                () => {
                    Ty(v.current, (e) => {
                        (e.expired && clearTimeout(e.expirationId), Sm(e.ctrl, d), e.ctrl.stop(!0));
                    });
                }
            ),
        ));
    const g = (function (e, { key: t, keys: n = t }, r) {
            if (null === n) {
                const t = new Set();
                return e.map((e) => {
                    const n = r && r.find((n) => n.item === e && 'leave' !== n.phase && !t.has(n));
                    return n ? (t.add(n), n.key) : gb++;
                });
            }
            return Cy.und(n) ? e : Cy.fun(n) ? e.map(n) : jy(n);
        })(h, r ? r() : t, y),
        m = (i && v.current) || [];
    Bg(() =>
        Ty(m, ({ ctrl: e, item: t, key: n }) => {
            (Sm(e, d), cm(l, t, n));
        }),
    );
    const b = [];
    if (
        (y &&
            Ty(y, (e, t) => {
                e.expired ? (clearTimeout(e.expirationId), m.push(e)) : ~(t = b[t] = g.indexOf(e.key)) && (p[t] = e);
            }),
        Ty(h, (e, t) => {
            p[t] || ((p[t] = { key: g[t], item: e, phase: 'mount', ctrl: new nb() }), (p[t].ctrl.item = e));
        }),
        b.length)
    ) {
        let e = -1;
        const { leave: n } = r ? r() : t;
        Ty(b, (t, r) => {
            const i = y[r];
            ~t ? ((e = p.indexOf(i)), (p[e] = { ...i, item: h[t] })) : n && p.splice(++e, 0, i);
        });
    }
    Cy.fun(o) && p.sort((e, t) => o(e.item, t.item));
    let _ = -a;
    const w = qg(),
        S = vm(t),
        x = new Map(),
        k = V.useRef(new Map()),
        O = V.useRef(!1);
    Ty(p, (e, n) => {
        const i = e.key,
            o = e.phase,
            l = r ? r() : t;
        let d, h;
        const p = cm(l.delay || 0, i);
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
        if (((d = cm(d, e.item, n)), (d = Cy.obj(d) ? mm(d) : { to: d }), !d.config)) {
            const t = f || S.config;
            d.config = cm(t, e.item, n, h);
        }
        _ += a;
        const m = { ...S, delay: p + _, ref: c, immediate: l.immediate, reset: !1, ...d };
        if ('enter' == h && Cy.und(m.from)) {
            const i = r ? r() : t,
                o = Cy.und(i.initial) || y ? i.from : i.initial;
            m.from = cm(o, e.item, n);
        }
        const { onResolve: b } = m;
        m.onResolve = (e) => {
            cm(b, e);
            const t = v.current,
                n = t.find((e) => e.key === i);
            if (n && (!e.cancelled || 'update' == n.phase) && n.ctrl.idle) {
                const e = t.every((e) => e.ctrl.idle);
                if ('leave' == n.phase) {
                    const t = cm(s, n.item);
                    if (!1 !== t) {
                        const r = !0 === t ? 0 : t;
                        if (((n.expired = !0), !e && r > 0))
                            return void (r <= 2147483647 && (n.expirationId = setTimeout(w, r)));
                    }
                }
                e && t.some((e) => e.expired) && (k.current.delete(n), u && (O.current = !0), w());
            }
        };
        const E = ob(e.ctrl, m);
        'leave' === h && u
            ? k.current.set(e, { phase: h, springs: E, payload: m })
            : x.set(e, { phase: h, springs: E, payload: m });
    });
    const E = V.useContext(db),
        P = Kg(E),
        C = E !== P && _m(E);
    (Bg(() => {
        C &&
            Ty(p, (e) => {
                e.ctrl.start({ default: E });
            });
    }, [E]),
        Ty(x, (e, t) => {
            if (k.current.size) {
                const e = p.findIndex((e) => e.key === t.key);
                p.splice(e, 1);
            }
        }),
        Bg(
            () => {
                Ty(k.current.size ? k.current : x, ({ phase: e, payload: t }, n) => {
                    const { ctrl: r } = n;
                    ((n.phase = e),
                        null == d || d.add(r),
                        C && 'enter' == e && r.start({ default: E }),
                        t &&
                            (xm(r, t.ref),
                            (!r.ref && !d) || O.current ? (r.start(t), O.current && (O.current = !1)) : r.update(t)));
                });
            },
            i ? void 0 : n,
        ));
    const A = (e) =>
        V.createElement(
            V.Fragment,
            null,
            p.map((t, n) => {
                const { springs: r } = x.get(t) || t.ctrl,
                    i = e({ ...r }, t.item, t, n);
                return i && i.type
                    ? V.createElement(i.type, {
                          ...i.props,
                          key: Cy.str(t.key) || Cy.num(t.key) ? t.key : t.ctrl.id,
                          ref: i.ref,
                      })
                    : i;
            }),
        );
    return d ? [A, d] : A;
}
var gb = 1;
var mb = class extends Mm {
    constructor(e, t) {
        (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = vg(...t)));
        const n = this._get(),
            r = om(n);
        Yg(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        (Ay(t, this.get()) || (Gg(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && _b(this._active) && wb(this));
    }
    _get() {
        const e = Cy.arr(this.source) ? this.source.map(bg) : jy(bg(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !_b(this._active) &&
            ((this.idle = !1),
            Ty(Xg(this), (e) => {
                e.done = !1;
            }),
            Ey.skipAnimation ? (uy.batchedUpdates(() => this.advance()), wb(this)) : Wy.start(this));
    }
    _attach() {
        let e = 1;
        (Ty(jy(this.source), (t) => {
            (mg(t) && kg(t, this), Dm(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (Ty(jy(this.source), (e) => {
            mg(e) && Og(e, this);
        }),
            this._active.clear(),
            wb(this));
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = jy(this.source).reduce((e, t) => Math.max(e, (Dm(t) ? t.priority : 0) + 1), 0));
    }
};
function bb(e) {
    return !1 !== e.idle;
}
function _b(e) {
    return !e.size || Array.from(e).every(bb);
}
function wb(e) {
    e.idle ||
        ((e.idle = !0),
        Ty(Xg(e), (e) => {
            e.done = !0;
        }),
        wg(e, { type: 'idle', parent: e }));
}
Ey.assign({ createStringInterpolator: Dg, to: (e, t) => new mb(e, t) });
var Sb = /^--/;
function xb(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || Sb.test(e) || (Ob.hasOwnProperty(e) && Ob[e])
          ? ('' + t).trim()
          : t + 'px';
}
var kb = {};
var Ob = {
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
    Eb = ['Webkit', 'Ms', 'Moz', 'O'];
Ob = Object.keys(Ob).reduce(
    (e, t) => (Eb.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    Ob,
);
var Pb = /^(matrix|translate|scale|rotate|skew)/,
    Cb = /^(translate)/,
    Ab = /^(rotate|skew)/,
    Tb = (e, t) => (Cy.num(e) && 0 !== e ? e + t : e),
    Nb = (e, t) => (Cy.arr(e) ? e.every((e) => Nb(e, t)) : Cy.num(e) ? e === t : parseFloat(e) === t),
    jb = class extends nm {
        constructor({ x: e, y: t, z: n, ...r }) {
            const i = [],
                o = [];
            ((e || t || n) &&
                (i.push([e || 0, t || 0, n || 0]),
                o.push((e) => [`translate3d(${e.map((e) => Tb(e, 'px')).join(',')})`, Nb(e, 0)])),
                Ny(r, (e, t) => {
                    if ('transform' === t) (i.push([e || '']), o.push((e) => [e, '' === e]));
                    else if (Pb.test(t)) {
                        if ((delete r[t], Cy.und(e))) return;
                        const n = Cb.test(t) ? 'px' : Ab.test(t) ? 'deg' : '';
                        (i.push(jy(e)),
                            o.push(
                                'rotate3d' === t
                                    ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${Tb(i, n)})`, Nb(i, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => Tb(e, n)).join(',')})`,
                                          Nb(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                i.length && (r.transform = new Rb(i, o)),
                super(r));
        }
    },
    Rb = class extends Sg {
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
                Ty(this.inputs, (n, r) => {
                    const i = bg(n[0]),
                        [o, a] = this.transforms[r](Cy.arr(i) ? i : n.map(bg));
                    ((e += ' ' + o), (t = t && a));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && Ty(this.inputs, (e) => Ty(e, (e) => mg(e) && kg(e, this)));
        }
        observerRemoved(e) {
            0 == e && Ty(this.inputs, (e) => Ty(e, (e) => mg(e) && Og(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), wg(this, e));
        }
    };
Ey.assign({
    batchedUpdates: Vf.unstable_batchedUpdates,
    createStringInterpolator: Dg,
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
var Ib = ((
    e,
    {
        applyAnimatedValues: t = () => !1,
        createAnimatedStyle: n = (e) => new nm(e),
        getComponentProps: r = (e) => e,
    } = {},
) => {
    const i = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
        o = (e) => {
            const t = lm(e) || 'Anonymous';
            return (
                ((e = Cy.str(e) ? o[e] || (o[e] = am(e, i)) : e[um] || (e[um] = am(e, i))).displayName =
                    `Animated(${t})`),
                e
            );
        };
    return (
        Ny(e, (t, n) => {
            (Cy.arr(e) && (n = lm(t)), (o[n] = o(t)));
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
                    n || e.hasAttribute(t) ? t : kb[t] || (kb[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                );
            void 0 !== i && (e.textContent = i);
            for (const f in r)
                if (r.hasOwnProperty(f)) {
                    const t = xb(f, r[f]);
                    Sb.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                }
            (c.forEach((t, n) => {
                e.setAttribute(t, l[n]);
            }),
                void 0 !== o && (e.scrollTop = o),
                void 0 !== a && (e.scrollLeft = a),
                void 0 !== s && e.setAttribute('viewBox', s));
        },
        createAnimatedStyle: (e) => new jb(e),
        getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
    },
).animated;
function Lb(e, t) {
    (void 0 === t && (t = 'Illegal state'),
        e ||
            (function (e) {
                throw new Error('[mobx-utils] ' + e);
            })(t));
}
var Db,
    zb = function (e) {
        return e && e !== Object.prototype && Object.getOwnPropertyNames(e).concat(zb(Object.getPrototypeOf(e)) || []);
    },
    Mb = function (e) {
        return (function (e) {
            var t = zb(e);
            return t.filter(function (e, n) {
                return t.indexOf(e) === n;
            });
        })(e).filter(function (e) {
            return 'constructor' !== e && !~e.indexOf('__');
        });
    },
    Vb = 'pending',
    Fb = 'fulfilled',
    Ub = 'rejected';
function Bb(e) {
    switch (this.state) {
        case Vb:
            return e.pending && e.pending(this.value);
        case Ub:
            return e.rejected && e.rejected(this.value);
        case Fb:
            return e.fulfilled ? e.fulfilled(this.value) : this.value;
    }
}
function $b(e, t) {
    if (
        (Lb(arguments.length <= 2, 'fromPromise expects up to two arguments'),
        Lb(
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
            ((n.value = e), (n.state = Fb));
        }),
        Op('observableFromPromise-reject', function (e) {
            ((n.value = e), (n.state = Ub));
        }),
    ),
        (n.isPromiseBasedObservable = !0),
        (n.case = Bb));
    var r = !t || (t.state !== Fb && t.state !== Vb) ? void 0 : t.value;
    return (Vp(n, { value: r, state: Vb }, {}, { deep: !1 }), n);
}
(((Db = $b || ($b = {})).reject = Op('fromPromise.reject', function (e) {
    var t = Db(Promise.reject(e));
    return ((t.state = Ub), (t.value = e), t);
})),
    (Db.resolve = Op('fromPromise.resolve', function (e) {
        void 0 === e && (e = void 0);
        var t = Db(Promise.resolve(e));
        return ((t.state = Fb), (t.value = e), t);
    })));
var qb = function (e, t, n, r) {
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
            sv(this),
            (function (e) {
                jh(e.name, !1, e, this, void 0);
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
        qb([wh.ref], e.prototype, 'current', void 0),
        qb([Op.bound], e.prototype, 'next', null),
        qb([Op.bound], e.prototype, 'complete', null),
        qb([Op.bound], e.prototype, 'error', null));
})();
var Hb = function () {
        return (
            (Hb =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            Hb.apply(this, arguments)
        );
    },
    Wb = function (e, t, n, r) {
        var i,
            o = arguments.length,
            a = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return (o > 3 && a && Object.defineProperty(t, n, a), a);
    },
    Kb = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
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
            sv(this),
            Lb(Mv(e), 'createViewModel expects an observable object'));
        var n = Mb(this);
        Mb(e).forEach(function (r) {
            var i;
            if (!n.includes(r) && r !== Nd && '__mobxDidRunLazyInitializers' !== r) {
                if (
                    (Lb(
                        -1 === Kb.indexOf(r),
                        'The propertyname ' + r + ' is reserved and cannot be used with viewModels',
                    ),
                    Gp(e, r))
                ) {
                    var o = Jv(e, r),
                        a = o.derivation.bind(t),
                        s = null === (i = o.setter_) || void 0 === i ? void 0 : i.bind(t);
                    t.localComputedValues.set(r, Oh(a, { set: s }));
                }
                var u = Object.getOwnPropertyDescriptor(e, r),
                    l = u ? { enumerable: u.enumerable } : {};
                Object.defineProperty(
                    t,
                    r,
                    Hb(Hb({}, l), {
                        configurable: !0,
                        get: function () {
                            return Gp(e, r)
                                ? t.localComputedValues.get(r).get()
                                : t.isPropertyDirty(r)
                                  ? t.localValues.get(r)
                                  : t.model[r];
                        },
                        set: Op(function (n) {
                            Gp(e, r)
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
                    ? e[Nd].keys_()
                    : Cv(e) || Nv(e)
                      ? Array.from(e.keys())
                      : wv(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void qf(5)).forEach(function (e) {
                    var n = t.localValues.get(e),
                        r = t.model[e];
                    wv(r) ? r.replace(n) : Cv(r) ? (r.clear(), r.merge(n)) : Qp(n) || (t.model[e] = n);
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
        Wb([Oh], e.prototype, 'isDirty', null),
        Wb([Oh], e.prototype, 'changedValues', null),
        Wb([Op.bound], e.prototype, 'submit', null),
        Wb([Op.bound], e.prototype, 'reset', null),
        Wb([Op.bound], e.prototype, 'resetProperty', null));
})();
var Qb = (function () {
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
            (l._disposeBaseObserver = Xp(l._base, function (e) {
                if ('splice' === e.type)
                    Jp(function () {
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
                    Jp(function () {
                        (l._removeItem(e.oldValue), l._addItem(e.newValue));
                    });
                }
            })),
            l
        );
    }
    (Qb(t, e),
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
})(Pv);
var Gb = (function () {
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
    Yb = (function () {
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
                    return (this.last && (this.last.isDisposed = !0), (this.last = new Gb(this.store, e)));
                },
            }),
            e
        );
    })(),
    Xb = function () {
        return (
            (Xb =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            Xb.apply(this, arguments)
        );
    };
function Jb(e, t) {
    if ((void 0 === t && (t = !1), Pp(e))) throw new Error("computedFn shouldn't be used on actions");
    var n = !1,
        r = 0,
        i = 'boolean' == typeof t ? { keepAlive: t } : t,
        o = new Yb();
    return function () {
        for (var t = this, a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
        var u,
            l = o.entry(a);
        if (l.exists()) return l.get().get();
        if (!i.keepAlive && null === rp.trackingDerivation)
            return (
                !n &&
                    rp.computedRequiresReaction &&
                    (console.warn(
                        "invoking a computedFn from outside an reactive context won't be memoized, unless keepAlive is set",
                    ),
                    (n = !0)),
                e.apply(this, a)
            );
        var c = Oh(
            function () {
                return (u = e.apply(t, a));
            },
            Xb(Xb({}, i), { name: 'computedFn(' + (i.name || e.name) + '#' + ++r + ')' }),
        );
        return (
            l.set(c),
            i.keepAlive ||
                Rp(c, function () {
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
***************************************************************************** */ var Zb = function () {
    return (
        (Zb =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
            }),
        Zb.apply(this, arguments)
    );
};
function e_(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    }
    return n;
}
function t_(e) {
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
function n_(e, t) {
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
function r_(e, t, n) {
    if (2 === arguments.length)
        for (var r, i = 0, o = t.length; i < o; i++)
            (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
    return e.concat(r || Array.prototype.slice.call(t));
}
var i_ = {},
    o_ = 'xstate.guard';
function a_(e) {
    return Object.keys(e);
}
function s_(e, t, n) {
    void 0 === n && (n = '.');
    var r = c_(e, n),
        i = c_(t, n);
    return E_(i)
        ? !!E_(r) && i === r
        : E_(r)
          ? r in i
          : a_(r).every(function (e) {
                return e in i && s_(r[e], i[e]);
            });
}
function u_(e) {
    try {
        return E_(e) || 'number' == typeof e ? ''.concat(e) : e.type;
    } catch (t) {
        throw new Error('Events must be strings or objects with a string event.type property.');
    }
}
function l_(e, t) {
    try {
        return k_(e) ? e : e.toString().split(t);
    } catch (n) {
        throw new Error("'".concat(e, "' is not a valid state path."));
    }
}
function c_(e, t) {
    return 'object' == typeof (n = e) && 'value' in n && 'context' in n && 'event' in n && '_event' in n
        ? e.value
        : k_(e)
          ? f_(e)
          : 'string' != typeof e
            ? e
            : f_(l_(e, t));
    var n;
}
function f_(e) {
    if (1 === e.length) return e[0];
    for (var t = {}, n = t, r = 0; r < e.length - 1; r++)
        r === e.length - 2 ? (n[e[r]] = e[r + 1]) : ((n[e[r]] = {}), (n = n[e[r]]));
    return t;
}
function d_(e, t) {
    for (var n = {}, r = a_(e), i = 0; i < r.length; i++) {
        var o = r[i];
        n[o] = t(e[o], o, e, i);
    }
    return n;
}
function h_(e, t, n) {
    var r,
        i,
        o = {};
    try {
        for (var a = t_(a_(e)), s = a.next(); !s.done; s = a.next()) {
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
var p_ = function (e) {
    return function (t) {
        var n,
            r,
            i = t;
        try {
            for (var o = t_(e), a = o.next(); !a.done; a = o.next()) {
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
function v_(e) {
    return e
        ? E_(e)
            ? [[e]]
            : y_(
                  a_(e).map(function (t) {
                      var n = e[t];
                      return 'string' == typeof n || (n && Object.keys(n).length)
                          ? v_(e[t]).map(function (e) {
                                return [t].concat(e);
                            })
                          : [[t]];
                  }),
              )
        : [[]];
}
function y_(e) {
    var t;
    return (t = []).concat.apply(t, r_([], n_(e), !1));
}
function g_(e) {
    return k_(e) ? e : [e];
}
function m_(e) {
    return void 0 === e ? [] : g_(e);
}
function b_(e, t, n) {
    var r, i;
    if (O_(e)) return e(t, n.data);
    var o = {};
    try {
        for (var a = t_(Object.keys(e)), s = a.next(); !s.done; s = a.next()) {
            var u = s.value,
                l = e[u];
            O_(l) ? (o[u] = l(t, n.data)) : (o[u] = l);
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
function __(e) {
    return e instanceof Promise || !(null === e || (!O_(e) && 'object' != typeof e) || !O_(e.then));
}
function w_(e, t) {
    var n,
        r,
        i = n_([[], []], 2),
        o = i[0],
        a = i[1];
    try {
        for (var s = t_(e), u = s.next(); !u.done; u = s.next()) {
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
function S_(e, t) {
    return d_(e.states, function (e, n) {
        if (e) {
            var r = (E_(t) ? void 0 : t[n]) || (e ? e.current : void 0);
            if (r) return { current: r, states: S_(e, r) };
        }
    });
}
function x_(e, t, n, r) {
    return e
        ? n.reduce(function (e, n) {
              var i,
                  o,
                  a = n.assignment,
                  s = { state: r, action: n, _event: t },
                  u = {};
              if (O_(a)) u = a(e, t.data, s);
              else
                  try {
                      for (var l = t_(a_(a)), c = l.next(); !c.done; c = l.next()) {
                          var f = c.value,
                              d = a[f];
                          u[f] = O_(d) ? d(e, t.data, s) : d;
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
function k_(e) {
    return Array.isArray(e);
}
function O_(e) {
    return 'function' == typeof e;
}
function E_(e) {
    return 'string' == typeof e;
}
function P_(e, t) {
    if (e)
        return E_(e)
            ? { type: o_, name: e, predicate: t ? t[e] : void 0 }
            : O_(e)
              ? { type: o_, name: e.name, predicate: e }
              : e;
}
var C_,
    A_,
    T_,
    N_,
    j_ = (function () {
        return ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    })();
function R_(e) {
    try {
        return '__xstatenode' in e;
    } catch (t) {
        return !1;
    }
}
function I_(e, t) {
    return E_(e) || 'number' == typeof e ? Zb({ type: e }, t) : e;
}
function L_(e, t) {
    if (!E_(e) && '$$type' in e && 'scxml' === e.$$type) return e;
    var n = I_(e);
    return Zb({ name: n.type, data: n, $$type: 'scxml', type: 'external' }, t);
}
function D_(e, t) {
    return g_(t).map(function (t) {
        return void 0 === t || 'string' == typeof t || R_(t) ? { target: t, event: e } : Zb(Zb({}, t), { event: e });
    });
}
function z_(e, t, n, r, i) {
    var o = e.options.guards,
        a = { state: i, cond: t, _event: r };
    if (t.type === o_) return ((null == o ? void 0 : o[t.name]) || t.predicate)(n, r.data, a);
    var s = o[t.type];
    if (!s) throw new Error("Guard '".concat(t.type, "' is not implemented on machine '").concat(e.id, "'."));
    return s(n, r.data, a);
}
function M_(e) {
    return 'string' == typeof e ? { type: e } : e;
}
function V_(e, t, n) {
    if ('object' == typeof e) return e;
    var r = function () {};
    return { next: e, error: t || r, complete: n || r };
}
(((A_ = C_ || (C_ = {})).Start = 'xstate.start'),
    (A_.Stop = 'xstate.stop'),
    (A_.Raise = 'xstate.raise'),
    (A_.Send = 'xstate.send'),
    (A_.Cancel = 'xstate.cancel'),
    (A_.NullEvent = ''),
    (A_.Assign = 'xstate.assign'),
    (A_.After = 'xstate.after'),
    (A_.DoneState = 'done.state'),
    (A_.DoneInvoke = 'done.invoke'),
    (A_.Log = 'xstate.log'),
    (A_.Init = 'xstate.init'),
    (A_.Invoke = 'xstate.invoke'),
    (A_.ErrorExecution = 'error.execution'),
    (A_.ErrorCommunication = 'error.communication'),
    (A_.ErrorPlatform = 'error.platform'),
    (A_.ErrorCustom = 'xstate.error'),
    (A_.Update = 'xstate.update'),
    (A_.Pure = 'xstate.pure'),
    (A_.Choose = 'xstate.choose'),
    ((N_ = T_ || (T_ = {})).Parent = '#_parent'),
    (N_.Internal = '#_internal'));
var F_ = C_.Start,
    U_ = C_.Stop,
    B_ = C_.Raise,
    $_ = C_.Send,
    q_ = C_.Cancel,
    H_ = C_.NullEvent,
    W_ = C_.Assign;
(C_.After, C_.DoneState);
var K_ = C_.Log,
    Q_ = C_.Init,
    G_ = C_.Invoke;
C_.ErrorExecution;
var Y_ = C_.ErrorPlatform,
    X_ = C_.ErrorCustom,
    J_ = C_.Update,
    Z_ = C_.Choose,
    ew = C_.Pure,
    tw = L_({ type: Q_ });
function nw(e, t) {
    return (t && t[e]) || void 0;
}
function rw(e, t) {
    var n;
    if (E_(e) || 'number' == typeof e) n = O_((r = nw(e, t))) ? { type: e, exec: r } : r || { type: e, exec: void 0 };
    else if (O_(e)) n = { type: e.name || e.toString(), exec: e };
    else {
        var r;
        if (O_((r = nw(e.type, t)))) n = Zb(Zb({}, e), { exec: r });
        else if (r) {
            var i = r.type || e.type;
            n = Zb(Zb(Zb({}, r), e), { type: i });
        } else n = e;
    }
    return n;
}
var iw = function (e, t) {
    return e
        ? (k_(e) ? e : [e]).map(function (e) {
              return rw(e, t);
          })
        : [];
};
function ow(e) {
    var t = rw(e);
    return Zb(Zb({ id: E_(e) ? e : t.id }, t), { type: t.type });
}
function aw(e) {
    return E_(e) ? { type: B_, event: e } : sw(e, { to: T_.Internal });
}
function sw(e, t) {
    return {
        to: t ? t.to : void 0,
        type: $_,
        event: O_(e) ? e : I_(e),
        delay: t ? t.delay : void 0,
        id: t && void 0 !== t.id ? t.id : O_(e) ? e.name : u_(e),
    };
}
function uw(e, t) {
    var n = ''.concat(C_.DoneState, '.').concat(e),
        r = {
            type: n,
            data: t,
            toString: function () {
                return n;
            },
        };
    return r;
}
function lw(e, t) {
    var n = ''.concat(C_.DoneInvoke, '.').concat(e),
        r = {
            type: n,
            data: t,
            toString: function () {
                return n;
            },
        };
    return r;
}
function cw(e, t) {
    var n = ''.concat(C_.ErrorPlatform, '.').concat(e),
        r = {
            type: n,
            data: t,
            toString: function () {
                return n;
            },
        };
    return r;
}
function fw(e, t, n, r, i, o) {
    void 0 === o && (o = !1);
    var a = n_(
            o
                ? [[], i]
                : w_(i, function (e) {
                      return e.type === W_;
                  }),
            2,
        ),
        s = a[0],
        u = a[1],
        l = s.length ? x_(n, r, s, t) : n,
        c = o ? [n] : void 0,
        f = y_(
            u
                .map(function (n) {
                    var i;
                    switch (n.type) {
                        case B_:
                            return { type: B_, _event: L_(n.event) };
                        case $_:
                            var a = (function (e, t, n, r) {
                                var i,
                                    o = { _event: n },
                                    a = L_(O_(e.event) ? e.event(t, n.data, o) : e.event);
                                if (E_(e.delay)) {
                                    var s = r && r[e.delay];
                                    i = O_(s) ? s(t, n.data, o) : s;
                                } else i = O_(e.delay) ? e.delay(t, n.data, o) : e.delay;
                                var u = O_(e.to) ? e.to(t, n.data, o) : e.to;
                                return Zb(Zb({}, e), { to: u, _event: a, event: a.data, delay: i });
                            })(n, l, r, e.options.delays);
                            return a;
                        case K_:
                            return (function (e, t, n) {
                                return Zb(Zb({}, e), { value: E_(e.expr) ? e.expr : e.expr(t, n.data, { _event: n }) });
                            })(n, l, r);
                        case Z_:
                            if (
                                !(d =
                                    null ===
                                        (i = n.conds.find(function (n) {
                                            var i = P_(n.cond, e.options.guards);
                                            return !i || z_(e, i, l, r, t);
                                        })) || void 0 === i
                                        ? void 0
                                        : i.actions)
                            )
                                return [];
                            var s = n_(fw(e, t, l, r, iw(m_(d), e.options.actions), o), 2),
                                u = s[0],
                                f = s[1];
                            return ((l = f), null == c || c.push(l), u);
                        case ew:
                            var d;
                            if (!(d = n.get(l, r.data))) return [];
                            var h = n_(fw(e, t, l, r, iw(m_(d), e.options.actions), o), 2),
                                p = h[0],
                                v = h[1];
                            return ((l = v), null == c || c.push(l), p);
                        case U_:
                            return (function (e, t, n) {
                                var r = O_(e.activity) ? e.activity(t, n.data) : e.activity,
                                    i = 'string' == typeof r ? { id: r } : r;
                                return { type: C_.Stop, activity: i };
                            })(n, l, r);
                        case W_:
                            ((l = x_(l, r, [n], t)), null == c || c.push(l));
                            break;
                        default:
                            var y = rw(n, e.options.actions),
                                g = y.exec;
                            if (g && c) {
                                var m = c.length - 1;
                                y = Zb(Zb({}, y), {
                                    exec: function (e) {
                                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                        g.apply(void 0, r_([c[m]], n_(t), !1));
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
var dw = function (e) {
    return 'atomic' === e.type || 'final' === e.type;
};
function hw(e) {
    return a_(e.states).map(function (t) {
        return e.states[t];
    });
}
function pw(e) {
    var t = [e];
    return dw(e) ? t : t.concat(y_(hw(e).map(pw)));
}
function vw(e, t) {
    var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = gw(new Set(e)),
        f = new Set(t);
    try {
        for (var d = t_(f), h = d.next(); !h.done; h = d.next())
            for (var p = (x = h.value).parent; p && !f.has(p); ) (f.add(p), (p = p.parent));
    } catch (k) {
        n = { error: k };
    } finally {
        try {
            h && !h.done && (r = d.return) && r.call(d);
        } finally {
            if (n) throw n.error;
        }
    }
    var v = gw(f);
    try {
        for (var y = t_(f), g = y.next(); !g.done; g = y.next()) {
            if ('compound' !== (x = g.value).type || (v.get(x) && v.get(x).length)) {
                if ('parallel' === x.type)
                    try {
                        for (var m = ((a = void 0), t_(hw(x))), b = m.next(); !b.done; b = m.next()) {
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
                c.get(x)
                    ? c.get(x).forEach(function (e) {
                          return f.add(e);
                      })
                    : x.initialStateNodes.forEach(function (e) {
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
        for (var w = t_(f), S = w.next(); !S.done; S = w.next()) {
            var x;
            for (p = (x = S.value).parent; p && !f.has(p); ) (f.add(p), (p = p.parent));
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
function yw(e, t) {
    var n = t.get(e);
    if (!n) return {};
    if ('compound' === e.type) {
        var r = n[0];
        if (!r) return {};
        if (dw(r)) return r.key;
    }
    var i = {};
    return (
        n.forEach(function (e) {
            i[e.key] = yw(e, t);
        }),
        i
    );
}
function gw(e) {
    var t,
        n,
        r = new Map();
    try {
        for (var i = t_(e), o = i.next(); !o.done; o = i.next()) {
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
function mw(e, t) {
    return yw(e, gw(vw([e], t)));
}
function bw(e, t) {
    return Array.isArray(e)
        ? e.some(function (e) {
              return e === t;
          })
        : e instanceof Set && e.has(t);
}
function _w(e, t) {
    return 'compound' === t.type
        ? hw(t).some(function (t) {
              return 'final' === t.type && bw(e, t);
          })
        : 'parallel' === t.type &&
              hw(t).every(function (t) {
                  return _w(e, t);
              });
}
function ww(e) {
    return new Set(
        y_(
            e.map(function (e) {
                return e.tags;
            }),
        ),
    );
}
function Sw(e, t) {
    if (e === t) return !0;
    if (void 0 === e || void 0 === t) return !1;
    if (E_(e) || E_(t)) return e === t;
    var n = a_(e),
        r = a_(t);
    return (
        n.length === r.length &&
        n.every(function (n) {
            return Sw(e[n], t[n]);
        })
    );
}
var xw = (function () {
        function e(e) {
            var t,
                n,
                r = this;
            ((this.actions = []),
                (this.activities = i_),
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
                (this.activities = e.activities || i_),
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
                            return r_(
                                [],
                                n_(
                                    new Set(
                                        y_(
                                            r_(
                                                [],
                                                n_(
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
                          _event: tw,
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
                    var r = tw;
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
                if ((void 0 === e && (e = this.value), void 0 === t && (t = '.'), E_(e))) return [e];
                var r = a_(e);
                return r.concat.apply(
                    r,
                    r_(
                        [],
                        n_(
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
                var n = e_(e, ['configuration', 'transitions', 'tags', 'machine']);
                return Zb(Zb({}, n), { tags: Array.from(t) });
            }),
            (e.prototype.matches = function (e) {
                return s_(e, this.value);
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
    kw = function (e, t) {
        return t(e);
    };
function Ow(e) {
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
function Ew(e, t, n, r) {
    var i,
        o = M_(e.src),
        a = null === (i = null == t ? void 0 : t.options.services) || void 0 === i ? void 0 : i[o.type],
        s = e.data ? b_(e.data, n, r) : void 0,
        u = a
            ? (function (e, t, n) {
                  var r = Ow(t);
                  if (((r.deferred = !0), R_(e))) {
                      var i = (r.state = kw(void 0, function () {
                          return (n ? e.withContext(n) : e).initialState;
                      }));
                      r.getSnapshot = function () {
                          return i;
                      };
                  }
                  return r;
              })(a, e.id, s)
            : Ow(e.id);
    return ((u.meta = e), u);
}
function Pw(e) {
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
function Cw(e) {
    return Zb(Zb({ type: G_ }, e), {
        toJSON: function () {
            (e.onDone, e.onError);
            var t = e_(e, ['onDone', 'onError']);
            return Zb(Zb({}, t), { type: G_, src: Pw(e.src) });
        },
    });
}
var Aw = {},
    Tw = function (e) {
        return '#' === e[0];
    },
    Nw = (function () {
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
                (this.id = this.config.id || r_([this.machine.key], n_(this.path), !1).join(this.delimiter)),
                (this.version = this.parent ? this.parent.version : this.config.version),
                (this.type =
                    this.config.type ||
                    (this.config.parallel
                        ? 'parallel'
                        : this.config.states && a_(this.config.states).length
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
                    ? d_(this.config.states, function (t, n) {
                          var r,
                              i = new e(t, { _parent: o, _key: n });
                          return (Object.assign(o.idMap, Zb((((r = {})[i.id] = i), r), i.idMap)), i);
                      })
                    : Aw));
            var a = 0;
            (!(function e(t) {
                var n, r;
                t.order = a++;
                try {
                    for (var i = t_(hw(t)), o = i.next(); !o.done; o = i.next()) {
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
                (this.onEntry = m_(this.config.entry || this.config.onEntry).map(function (e) {
                    return rw(e);
                })),
                (this.onExit = m_(this.config.exit || this.config.onExit).map(function (e) {
                    return rw(e);
                })),
                (this.meta = this.config.meta),
                (this.doneData = 'final' === this.type ? this.config.data : void 0),
                (this.invoke = m_(this.config.invoke).map(function (e, t) {
                    var n, r;
                    if (R_(e))
                        return (
                            (o.machine.options.services = Zb((((n = {})[e.id] = e), n), o.machine.options.services)),
                            Cw({ src: e.id, id: e.id })
                        );
                    if (E_(e.src)) return Cw(Zb(Zb({}, e), { id: e.id || e.src, src: e.src }));
                    if (R_(e.src) || O_(e.src)) {
                        var i = ''.concat(o.id, ':invocation[').concat(t, ']');
                        return (
                            (o.machine.options.services = Zb((((r = {})[i] = e.src), r), o.machine.options.services)),
                            Cw(Zb(Zb({ id: i }, e), { src: i }))
                        );
                    }
                    var a = e.src;
                    return Cw(Zb(Zb({ id: a.type }, e), { src: a }));
                })),
                (this.activities = m_(this.config.activities)
                    .concat(this.invoke)
                    .map(function (e) {
                        return ow(e);
                    })),
                (this.transition = this.transition.bind(this)),
                (this.tags = m_(this.config.tags)));
        }
        return (
            (e.prototype._init = function () {
                this.__cache.transitions ||
                    pw(this).forEach(function (e) {
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
                        actions: Zb(Zb({}, i), t.actions),
                        activities: Zb(Zb({}, o), t.activities),
                        guards: Zb(Zb({}, a), t.guards),
                        services: Zb(Zb({}, s), t.services),
                        delays: Zb(Zb({}, u), t.delays),
                    },
                    null != n ? n : this.context,
                );
            }),
            (e.prototype.withContext = function (t) {
                return new e(this.config, this.options, t);
            }),
            Object.defineProperty(e.prototype, 'context', {
                get: function () {
                    return O_(this._context) ? this._context() : this._context;
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
                        states: d_(this.states, function (e) {
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
                        return ''.concat(C_.After, '(').concat(e, ')').concat(n);
                    })(O_(t) ? ''.concat(e.id, ':delay[').concat(n, ']') : t, e.id);
                    return (e.onEntry.push(sw(r, { delay: t })), e.onExit.push({ type: q_, sendId: r }), r);
                };
                return (
                    k_(t)
                        ? t.map(function (e, t) {
                              var r = n(e.delay, t);
                              return Zb(Zb({}, e), { event: r });
                          })
                        : y_(
                              a_(t).map(function (e, r) {
                                  var i = t[e],
                                      o = E_(i) ? { target: i } : i,
                                      a = isNaN(+e) ? e : +e,
                                      s = n(a, r);
                                  return m_(o).map(function (e) {
                                      return Zb(Zb({}, e), { event: s, delay: a });
                                  });
                              }),
                          )
                ).map(function (t) {
                    var n = t.delay;
                    return Zb(Zb({}, e.formatTransition(t)), { delay: n });
                });
            }),
            (e.prototype.getStateNodes = function (e) {
                var t,
                    n = this;
                if (!e) return [];
                var r = e instanceof xw ? e.value : c_(e, this.delimiter);
                if (E_(r)) {
                    var i = this.getStateNode(r).initial;
                    return void 0 !== i ? this.getStateNodes((((t = {})[r] = i), t)) : [this, this.states[r]];
                }
                var o = a_(r),
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
                var t = u_(e);
                return this.events.includes(t);
            }),
            (e.prototype.resolveState = function (e) {
                var t = Array.from(vw([], this.getStateNodes(e.value)));
                return new xw(
                    Zb(Zb({}, e), { value: this.resolve(e.value), configuration: t, done: _w(t, this), tags: ww(t) }),
                );
            }),
            (e.prototype.transitionLeafNode = function (e, t, n) {
                var r = this.getStateNode(e).next(t, n);
                return r && r.transitions.length ? r : this.next(t, n);
            }),
            (e.prototype.transitionCompoundNode = function (e, t, n) {
                var r = a_(e),
                    i = this.getStateNode(r[0])._transition(e[r[0]], t, n);
                return i && i.transitions.length ? i : this.next(t, n);
            }),
            (e.prototype.transitionParallelNode = function (e, t, n) {
                var r,
                    i,
                    o = {};
                try {
                    for (var a = t_(a_(e)), s = a.next(); !s.done; s = a.next()) {
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
                var f = a_(o).map(function (e) {
                        return o[e];
                    }),
                    d = y_(
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
                var h = y_(
                        f.map(function (e) {
                            return e.entrySet;
                        }),
                    ),
                    p = y_(
                        a_(o).map(function (e) {
                            return o[e].configuration;
                        }),
                    );
                return {
                    transitions: d,
                    entrySet: h,
                    exitSet: y_(
                        f.map(function (e) {
                            return e.exitSet;
                        }),
                    ),
                    configuration: p,
                    source: t,
                    actions: y_(
                        a_(o).map(function (e) {
                            return o[e].actions;
                        }),
                    ),
                };
            }),
            (e.prototype._transition = function (e, t, n) {
                return E_(e)
                    ? this.transitionLeafNode(e, t, n)
                    : 1 === a_(e).length
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
                    for (var l = t_(this.getCandidates(a)), c = l.next(); !c.done; c = l.next()) {
                        var f = c.value,
                            d = f.cond,
                            h = f.in,
                            p = e.context,
                            v =
                                !h ||
                                (E_(h) && Tw(h)
                                    ? e.matches(c_(this.getStateNodeById(h).path, this.delimiter))
                                    : s_(c_(h, this.delimiter), p_(this.path.slice(0, -2))(e.value))),
                            y = !1;
                        try {
                            y = !d || z_(this.machine, d, p, t, e);
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
                                s.push.apply(s, r_([], n_(f.actions), !1)),
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
                    var g = y_(
                            u.map(function (t) {
                                return o.getRelativeStateNodes(t, e.historyValue);
                            }),
                        ),
                        m = !!i.internal;
                    return {
                        transitions: [i],
                        entrySet: m
                            ? []
                            : y_(
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
                    u = vw([], r ? this.getStateNodes(r.value) : [this]),
                    l = e.configuration.length ? vw(u, e.configuration) : u;
                try {
                    for (var c = t_(l), f = c.next(); !f.done; f = c.next()) {
                        bw(u, (p = f.value)) || e.entrySet.push(p);
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
                    for (var d = t_(u), h = d.next(); !h.done; h = d.next()) {
                        var p;
                        (bw(l, (p = h.value)) && !bw(e.exitSet, p.parent)) || e.exitSet.push(p);
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
                var v = y_(
                    e.entrySet.map(function (r) {
                        var i = [];
                        if ('final' !== r.type) return i;
                        var o = r.parent;
                        if (!o.parent) return i;
                        i.push(uw(r.id, r.doneData), uw(o.id, r.doneData ? b_(r.doneData, t, n) : void 0));
                        var a = o.parent;
                        return (
                            'parallel' === a.type &&
                                hw(a).every(function (t) {
                                    return _w(e.configuration, t);
                                }) &&
                                i.push(uw(a.id)),
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
                    m = n_(
                        [
                            y_(
                                Array.from(y).map(function (e) {
                                    return r_(
                                        r_(
                                            [],
                                            n_(
                                                e.activities.map(function (e) {
                                                    return (function (e) {
                                                        var t = ow(e);
                                                        return { type: C_.Start, activity: t, exec: void 0 };
                                                    })(e);
                                                }),
                                            ),
                                            !1,
                                        ),
                                        n_(e.onEntry),
                                        !1,
                                    );
                                }),
                            ).concat(v.map(aw)),
                            y_(
                                Array.from(g).map(function (e) {
                                    return r_(
                                        r_([], n_(e.onExit), !1),
                                        n_(
                                            e.activities.map(function (e) {
                                                return (function (e) {
                                                    var t = O_(e) ? e : ow(e);
                                                    return { type: C_.Stop, activity: t, exec: void 0 };
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
                return iw(_.concat(e.actions).concat(b), this.machine.options.actions);
            }),
            (e.prototype.transition = function (e, t, n) {
                void 0 === e && (e = this.initialState);
                var r,
                    i,
                    o = L_(t);
                if (e instanceof xw) r = void 0 === n ? e : this.resolveState(xw.from(e, n));
                else {
                    var a = E_(e) ? this.resolve(f_(this.getResolvedPath(e))) : this.resolve(e),
                        s = null != n ? n : this.machine.context;
                    r = this.resolveState(xw.from(a, s));
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
                    l = vw([], this.getStateNodes(r.value)),
                    c = u.configuration.length ? vw(l, u.configuration) : l;
                return ((u.configuration = r_([], n_(c), !1)), this.resolveTransition(u, r, o));
            }),
            (e.prototype.resolveRaisedTransition = function (e, t, n) {
                var r,
                    i = e.actions;
                return (
                    ((e = this.transition(e, t))._event = n),
                    (e.event = n.data),
                    (r = e.actions).unshift.apply(r, r_([], n_(i), !1)),
                    e
                );
            }),
            (e.prototype.resolveTransition = function (e, t, n, r) {
                var i,
                    o,
                    a = this;
                (void 0 === n && (n = tw), void 0 === r && (r = this.machine.context));
                var s = e.configuration,
                    u = !t || e.transitions.length > 0,
                    l = u ? mw(this.machine, s) : void 0,
                    c = t
                        ? t.historyValue
                            ? t.historyValue
                            : e.source
                              ? this.machine.historyValue(t.value)
                              : void 0
                        : void 0,
                    f = t ? t.context : r,
                    d = this.getActions(e, f, n, t),
                    h = t ? Zb({}, t.activities) : {};
                try {
                    for (var p = t_(d), v = p.next(); !v.done; v = p.next()) {
                        var y = v.value;
                        y.type === F_
                            ? (h[y.activity.id || y.activity.type] = y)
                            : y.type === U_ && (h[y.activity.id || y.activity.type] = !1);
                    }
                } catch (L) {
                    i = { error: L };
                } finally {
                    try {
                        v && !v.done && (o = p.return) && o.call(p);
                    } finally {
                        if (i) throw i.error;
                    }
                }
                var g,
                    m,
                    b = n_(fw(this, t, f, n, d, this.machine.config.preserveActionOrder), 2),
                    _ = b[0],
                    w = b[1],
                    S = n_(
                        w_(_, function (e) {
                            return e.type === B_ || (e.type === $_ && e.to === T_.Internal);
                        }),
                        2,
                    ),
                    x = S[0],
                    k = S[1],
                    O = _.filter(function (e) {
                        var t;
                        return e.type === F_ && (null === (t = e.activity) || void 0 === t ? void 0 : t.type) === G_;
                    }).reduce(
                        function (e, t) {
                            return ((e[t.activity.id] = Ew(t.activity, a.machine, w, n)), e);
                        },
                        t ? Zb({}, t.children) : {},
                    ),
                    E = l ? e.configuration : t ? t.configuration : [],
                    P = _w(E, this),
                    C = new xw({
                        value: l || t.value,
                        context: w,
                        _event: n,
                        _sessionid: t ? t._sessionid : null,
                        historyValue: l
                            ? c
                                ? ((g = c), (m = l), { current: m, states: S_(g, m) })
                                : void 0
                            : t
                              ? t.historyValue
                              : void 0,
                        history: !l || e.source ? t : void 0,
                        actions: l ? k : [],
                        activities: l ? h : t ? t.activities : {},
                        events: [],
                        configuration: E,
                        transitions: e.transitions,
                        children: O,
                        done: P,
                        tags: null == t ? void 0 : t.tags,
                        machine: this,
                    }),
                    A = f !== w;
                C.changed = n.name === J_ || A;
                var T = C.history;
                T && delete T.history;
                var N =
                    !P &&
                    (this._transient ||
                        s.some(function (e) {
                            return e._transient;
                        }));
                if (!(u || (N && '' !== n.name))) return C;
                var j = C;
                if (!P)
                    for (N && (j = this.resolveRaisedTransition(j, { type: H_ }, n)); x.length; ) {
                        var R = x.shift();
                        j = this.resolveRaisedTransition(j, R._event, n);
                    }
                var I =
                    j.changed ||
                    (T ? !!j.actions.length || A || typeof T.value != typeof j.value || !Sw(j.value, T.value) : void 0);
                return ((j.changed = I), (j.history = T), (j.tags = ww(j.configuration)), j);
            }),
            (e.prototype.getStateNode = function (e) {
                if (Tw(e)) return this.machine.getStateNodeById(e);
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
                var t = Tw(e) ? e.slice(1) : e;
                if (t === this.id) return this;
                var n = this.machine.idMap[t];
                if (!n)
                    throw new Error(
                        "Child state node '#".concat(t, "' does not exist on machine '").concat(this.id, "'"),
                    );
                return n;
            }),
            (e.prototype.getStateNodeByPath = function (e) {
                if ('string' == typeof e && Tw(e))
                    try {
                        return this.getStateNodeById(e.slice(1));
                    } catch (i) {}
                for (var t = l_(e, this.delimiter).slice(), n = this; t.length; ) {
                    var r = t.shift();
                    if (!r.length) break;
                    n = n.getStateNode(r);
                }
                return n;
            }),
            (e.prototype.resolve = function (e) {
                var t,
                    n = this;
                if (!e) return this.initialStateValue || Aw;
                switch (this.type) {
                    case 'parallel':
                        return d_(this.initialStateValue, function (t, r) {
                            return t ? n.getStateNode(r).resolve(e[r] || t) : Aw;
                        });
                    case 'compound':
                        if (E_(e)) {
                            var r = this.getStateNode(e);
                            return 'parallel' === r.type || 'compound' === r.type
                                ? (((t = {})[e] = r.initialStateValue), t)
                                : e;
                        }
                        return a_(e).length
                            ? d_(e, function (e, t) {
                                  return e ? n.getStateNode(t).resolve(e) : Aw;
                              })
                            : this.initialStateValue || {};
                    default:
                        return e || Aw;
                }
            }),
            (e.prototype.getResolvedPath = function (e) {
                if (Tw(e)) {
                    var t = this.machine.idMap[e.slice(1)];
                    if (!t) throw new Error("Unable to find state node '".concat(e, "'"));
                    return t.path;
                }
                return l_(e, this.delimiter);
            }),
            Object.defineProperty(e.prototype, 'initialStateValue', {
                get: function () {
                    var e, t;
                    if (this.__cache.initialStateValue) return this.__cache.initialStateValue;
                    if ('parallel' === this.type)
                        t = h_(
                            this.states,
                            function (e) {
                                return e.initialStateValue || Aw;
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
                        t = dw(this.states[this.initial])
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
                            E_(t.target) && Tw(t.target)
                                ? f_(this.machine.getStateNodeById(t.target).path.slice(this.path.length - 1))
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
                    return dw(this)
                        ? [this]
                        : 'compound' !== this.type || this.initial
                          ? y_(
                                v_(this.initialStateValue).map(function (t) {
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
                var t = n_(e),
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
                if (a_(this.states).length)
                    return {
                        current: e || this.initialStateValue,
                        states: h_(
                            this.states,
                            function (t, n) {
                                if (!e) return t.historyValue();
                                var r = E_(e) ? void 0 : e[n];
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
                        ? y_(
                              v_(r).map(function (e) {
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
                            for (var a = t_(i), s = a.next(); !s.done; s = a.next()) {
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
                return E_(a)
                    ? [n.getStateNode(a)]
                    : y_(
                          v_(a).map(function (e) {
                              return 'deep' === t.history ? n.getFromRelativePath(e) : [n.states[e[0]]];
                          }),
                      );
            }),
            Object.defineProperty(e.prototype, 'stateIds', {
                get: function () {
                    var e = this,
                        t = y_(
                            a_(this.states).map(function (t) {
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
                            for (var a = t_(a_(i)), s = a.next(); !s.done; s = a.next()) {
                                var u = i[s.value];
                                if (u.states)
                                    try {
                                        for (
                                            var l = ((n = void 0), t_(u.events)), c = l.next();
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
                        if (!E_(e)) return e;
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
                        if (void 0 !== e && '' !== e) return m_(e);
                    })(e.target),
                    r =
                        'internal' in e
                            ? e.internal
                            : !n ||
                              n.some(function (e) {
                                  return E_(e) && e[0] === t.delimiter;
                              }),
                    i = this.machine.options.guards,
                    o = this.resolveTarget(n),
                    a = Zb(Zb({}, e), {
                        actions: iw(m_(e.actions)),
                        cond: P_(e.cond, i),
                        target: o,
                        source: this,
                        internal: r,
                        eventType: e.event,
                        toJSON: function () {
                            return Zb(Zb({}, a), {
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
                            u = e_(i, ['*']);
                        n = y_(
                            a_(u)
                                .map(function (e) {
                                    return D_(e, u[e]);
                                })
                                .concat(D_('*', s)),
                        );
                    }
                else n = [];
                var l = this.config.always ? D_('', this.config.always) : [],
                    c = this.config.onDone ? D_(String(uw(this.id)), this.config.onDone) : [],
                    f = y_(
                        this.invoke.map(function (e) {
                            var t = [];
                            return (
                                e.onDone && t.push.apply(t, r_([], n_(D_(String(lw(e.id)), e.onDone)), !1)),
                                e.onError && t.push.apply(t, r_([], n_(D_(String(cw(e.id)), e.onError)), !1)),
                                t
                            );
                        }),
                    ),
                    d = this.after,
                    h = y_(
                        r_(r_(r_(r_([], n_(c), !1), n_(f), !1), n_(n), !1), n_(l), !1).map(function (e) {
                            return m_(e).map(function (e) {
                                return r.formatTransition(e);
                            });
                        }),
                    );
                try {
                    for (var p = t_(d), v = p.next(); !v.done; v = p.next()) {
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
function jw(e, t) {
    return new Nw(e, t);
}
var Rw = { deferEvents: !1 },
    Iw = (function () {
        function e(e) {
            ((this.processingEvent = !1),
                (this.queue = []),
                (this.initialized = !1),
                (this.options = Zb(Zb({}, Rw), e)));
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
    Lw = new Map(),
    Dw = 0,
    zw = function () {
        return 'x:'.concat(Dw++);
    },
    Mw = function (e, t) {
        return (Lw.set(e, t), e);
    },
    Vw = function (e) {
        return Lw.get(e);
    },
    Fw = function (e) {
        Lw.delete(e);
    };
function Uw() {
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
function Bw(e) {
    if (Uw()) {
        var t = (function () {
            var e = Uw();
            if (e && '__xstate__' in e) return e.__xstate__;
        })();
        t && t.register(e);
    }
}
function $w(e, t) {
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
                    var o = V_(e, t, n);
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
            Zb(
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
var qw,
    Hw,
    Ww = { sync: !1, autoForward: !1 };
(((Hw = qw || (qw = {}))[(Hw.NotStarted = 0)] = 'NotStarted'),
    (Hw[(Hw.Running = 1)] = 'Running'),
    (Hw[(Hw.Stopped = 2)] = 'Stopped'));
var Kw,
    Qw,
    Gw = (function () {
        function e(t, n) {
            var r = this;
            (void 0 === n && (n = e.defaultOptions),
                (this.machine = t),
                (this.scheduler = new Iw()),
                (this.delayedEventsMap = {}),
                (this.listeners = new Set()),
                (this.contextListeners = new Set()),
                (this.stopListeners = new Set()),
                (this.doneListeners = new Set()),
                (this.eventListeners = new Set()),
                (this.sendListeners = new Set()),
                (this.initialized = !1),
                (this.status = qw.NotStarted),
                (this.children = new Map()),
                (this.forwardTo = new Set()),
                (this.init = this.start),
                (this.send = function (e, t) {
                    if (k_(e)) return (r.batch(e), r.state);
                    var n = L_(I_(e, t));
                    if (r.status === qw.Stopped) return r.state;
                    if (r.status !== qw.Running && !r.options.deferEvents)
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
                        i = r.parent && (t === T_.Parent || r.parent.id === t),
                        o = i
                            ? r.parent
                            : E_(t)
                              ? r.children.get(t) || Vw(t)
                              : (n = t) && 'function' == typeof n.send
                                ? t
                                : void 0;
                    if (o)
                        'machine' in o
                            ? o.send(
                                  Zb(Zb({}, e), {
                                      name: e.name === X_ ? ''.concat(cw(r.id)) : e.name,
                                      origin: r.sessionId,
                                  }),
                              )
                            : o.send(e.data);
                    else if (!i)
                        throw new Error(
                            "Unable to send event to child '".concat(t, "' from service '").concat(r.id, "'."),
                        );
                }));
            var i = Zb(Zb({}, e.defaultOptions), n),
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
                (this.scheduler = new Iw({ deferEvents: this.options.deferEvents })),
                (this.sessionId = zw()));
        }
        return (
            Object.defineProperty(e.prototype, 'initialState', {
                get: function () {
                    var e = this;
                    return this._initialState
                        ? this._initialState
                        : kw(this, function () {
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
                    for (var i = t_(e.actions), o = i.next(); !o.done; o = i.next()) {
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
                        for (var f = t_(this.eventListeners), d = f.next(); !d.done; d = f.next()) {
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
                    for (var h = t_(this.listeners), p = h.next(); !p.done; p = h.next()) {
                        (0, p.value)(e, e.event);
                    }
                } catch (x) {
                    i = { error: x };
                } finally {
                    try {
                        p && !p.done && (o = h.return) && o.call(h);
                    } finally {
                        if (i) throw i.error;
                    }
                }
                try {
                    for (var v = t_(this.contextListeners), y = v.next(); !y.done; y = v.next()) {
                        (0, y.value)(this.state.context, this.state.history ? this.state.history.context : void 0);
                    }
                } catch (k) {
                    a = { error: k };
                } finally {
                    try {
                        y && !y.done && (s = v.return) && s.call(v);
                    } finally {
                        if (a) throw a.error;
                    }
                }
                var g = _w(e.configuration || [], this.machine);
                if (this.state.configuration && g) {
                    var m = e.configuration.find(function (e) {
                            return 'final' === e.type && e.parent === c.machine;
                        }),
                        b = m && m.doneData ? b_(m.doneData, e.context, t) : void 0;
                    try {
                        for (var _ = t_(this.doneListeners), w = _.next(); !w.done; w = _.next()) {
                            (0, w.value)(lw(this.id, b));
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
                return (this.listeners.add(e), this.status === qw.Running && e(this.state, this.state.event), this);
            }),
            (e.prototype.subscribe = function (e, t, n) {
                var r,
                    i = this;
                if (!e) return { unsubscribe: function () {} };
                var o = n;
                return (
                    'function' == typeof e ? (r = e) : ((r = e.next.bind(e)), (o = e.complete.bind(e))),
                    this.listeners.add(r),
                    this.status === qw.Running && r(this.state),
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
                if (this.status === qw.Running) return this;
                (Mw(this.sessionId, this), (this.initialized = !0), (this.status = qw.Running));
                var n =
                    void 0 === e
                        ? this.initialState
                        : kw(this, function () {
                              return !E_((n = e)) && 'value' in n && 'history' in n
                                  ? t.machine.resolveState(e)
                                  : t.machine.resolveState(xw.from(e, t.machine.context));
                              var n;
                          });
                return (
                    this.options.devTools && this.attachDev(),
                    this.scheduler.initialize(function () {
                        t.update(n, tw);
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
                    for (var f = t_(this.listeners), d = f.next(); !d.done; d = f.next()) {
                        var h = d.value;
                        this.listeners.delete(h);
                    }
                } catch (x) {
                    e = { error: x };
                } finally {
                    try {
                        d && !d.done && (t = f.return) && t.call(f);
                    } finally {
                        if (e) throw e.error;
                    }
                }
                try {
                    for (var p = t_(this.stopListeners), v = p.next(); !v.done; v = p.next()) {
                        ((h = v.value)(), this.stopListeners.delete(h));
                    }
                } catch (k) {
                    n = { error: k };
                } finally {
                    try {
                        v && !v.done && (r = p.return) && r.call(p);
                    } finally {
                        if (n) throw n.error;
                    }
                }
                try {
                    for (var y = t_(this.contextListeners), g = y.next(); !g.done; g = y.next()) {
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
                    for (var m = t_(this.doneListeners), b = m.next(); !b.done; b = m.next()) {
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
                        for (var r = t_(e.definition.exit), i = r.next(); !i.done; i = r.next()) {
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
                        O_(e.stop) && e.stop();
                    }));
                try {
                    for (var _ = t_(a_(this.delayedEventsMap)), w = _.next(); !w.done; w = _.next()) {
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
                    (this.status = qw.Stopped),
                    Fw(this.sessionId),
                    this
                );
            }),
            (e.prototype.batch = function (e) {
                var t = this;
                if (this.status === qw.NotStarted && this.options.deferEvents);
                else if (this.status !== qw.Running)
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
                            var n = L_(e);
                            (t.forward(n),
                                (i = kw(t, function () {
                                    return t.machine.transition(i, n);
                                })),
                                a.push.apply(
                                    a,
                                    r_(
                                        [],
                                        n_(
                                            i.actions.map(function (e) {
                                                return (
                                                    (n = i),
                                                    (r = (t = e).exec),
                                                    Zb(Zb({}, t), {
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
                        for (var u = t_(e), l = u.next(); !l.done; l = u.next()) {
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
                    ((i.changed = o), (i.actions = a), t.update(i, L_(e[e.length - 1])));
                });
            }),
            (e.prototype.sender = function (e) {
                return this.send.bind(this, e);
            }),
            (e.prototype.nextState = function (e) {
                var t = this,
                    n = L_(e);
                if (
                    0 === n.name.indexOf(Y_) &&
                    !this.state.nextEvents.some(function (e) {
                        return 0 === e.indexOf(Y_);
                    })
                )
                    throw n.data.data;
                return kw(this, function () {
                    return t.machine.transition(t.state, n);
                });
            }),
            (e.prototype.forward = function (e) {
                var t, n;
                try {
                    for (var r = t_(this.forwardTo), i = r.next(); !i.done; i = r.next()) {
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
                    o = e.exec || nw(e.type, n),
                    a = O_(o) ? o : o ? o.exec : e.exec;
                if (a)
                    try {
                        return a(r, i.data, { action: e, state: this.state, _event: i });
                    } catch (b) {
                        throw (this.parent && this.parent.send({ type: 'xstate.error', data: b }), b);
                    }
                switch (e.type) {
                    case $_:
                        var s = e;
                        if ('number' == typeof s.delay) return void this.defer(s);
                        s.to ? this.sendTo(s._event, s.to) : this.send(s._event);
                        break;
                    case q_:
                        this.cancel(e.sendId);
                        break;
                    case F_:
                        var u = e.activity;
                        if (!this.state.activities[u.id || u.type]) break;
                        if (u.type === C_.Invoke) {
                            var l = M_(u.src),
                                c = this.machine.options.services ? this.machine.options.services[l.type] : void 0,
                                f = u.id,
                                d = u.data,
                                h = 'autoForward' in u ? u.autoForward : !!u.forward;
                            if (!c) return;
                            var p = d ? b_(d, r, i) : void 0;
                            if ('string' == typeof c) return;
                            var v = O_(c) ? c(r, i.data, { data: p, src: l, meta: u.meta }) : c;
                            if (!v) return;
                            var y = void 0;
                            (R_(v) && ((v = p ? v.withContext(p) : v), (y = { autoForward: h })), this.spawn(v, f, y));
                        } else this.spawnActivity(u);
                        break;
                    case U_:
                        this.stopChild(e.activity.id);
                        break;
                    case K_:
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
                t && (this.removeChild(e), O_(t.stop) && t.stop());
            }),
            (e.prototype.spawn = function (e, t, n) {
                if (__(e)) return this.spawnPromise(Promise.resolve(e), t);
                if (O_(e)) return this.spawnCallback(e, t);
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
                            return 'subscribe' in e && O_(e.subscribe);
                        } catch (t) {
                            return !1;
                        }
                    })(e)
                )
                    return this.spawnObservable(e, t);
                if (R_(e)) return this.spawnMachine(e, Zb(Zb({}, n), { id: t }));
                if (null !== (r = e) && 'object' == typeof r && 'transition' in r && 'function' == typeof r.transition)
                    return this.spawnBehavior(e, t);
                throw new Error('Unable to spawn entity "'.concat(t, '" of type "').concat(typeof e, '".'));
                var r, i;
            }),
            (e.prototype.spawnMachine = function (t, n) {
                var r = this;
                void 0 === n && (n = {});
                var i = new e(t, Zb(Zb({}, this.options), { parent: this, id: n.id || t.id })),
                    o = Zb(Zb({}, Ww), n);
                o.sync &&
                    i.onTransition(function (e) {
                        r.send(J_, { state: e, id: i.id });
                    });
                var a = i;
                return (
                    this.children.set(i.id, a),
                    o.autoForward && this.forwardTo.add(i.id),
                    i
                        .onDone(function (e) {
                            (r.removeChild(i.id), r.send(L_(e, { origin: i.id })));
                        })
                        .start(),
                    a
                );
            }),
            (e.prototype.spawnBehavior = function (e, t) {
                var n = $w(e, { id: t, parent: this });
                return (this.children.set(t, n), n);
            }),
            (e.prototype.spawnPromise = function (e, t) {
                var n,
                    r = this,
                    i = !1;
                e.then(
                    function (e) {
                        i || ((n = e), r.removeChild(t), r.send(L_(lw(t, e), { origin: t })));
                    },
                    function (e) {
                        if (!i) {
                            r.removeChild(t);
                            var n = cw(t, e);
                            try {
                                r.send(L_(n, { origin: t }));
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
                        var i = V_(t, n, r),
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
                                o || i.send(L_(e, { origin: t })));
                        },
                        function (e) {
                            a.add(e);
                        },
                    );
                } catch (l) {
                    this.send(cw(t, l));
                }
                if (__(r)) return this.spawnPromise(r, t);
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
                        ((o = !0), O_(r) && r());
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
                            ((n = e), r.send(L_(e, { origin: t })));
                        },
                        function (e) {
                            (r.removeChild(t), r.send(L_(cw(t, e), { origin: t })));
                        },
                        function () {
                            (r.removeChild(t), r.send(L_(lw(t), { origin: t })));
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
                var e = Uw();
                if (this.options.devTools && e) {
                    if (e.__REDUX_DEVTOOLS_EXTENSION__) {
                        var t = 'object' == typeof this.options.devTools ? this.options.devTools : void 0;
                        ((this.devTools = e.__REDUX_DEVTOOLS_EXTENSION__.connect(
                            Zb(
                                Zb(
                                    {
                                        name: this.id,
                                        autoPause: !0,
                                        stateSanitizer: function (e) {
                                            return { value: e.value, context: e.context, actions: e.actions };
                                        },
                                    },
                                    t,
                                ),
                                { features: Zb({ jump: !1, skip: !1 }, t ? t.features : void 0) },
                            ),
                            this.machine,
                        )),
                            this.devTools.init(this.state));
                    }
                    Bw(this);
                }
            }),
            (e.prototype.toJSON = function () {
                return { id: this.id };
            }),
            (e.prototype[j_] = function () {
                return this;
            }),
            (e.prototype.getSnapshot = function () {
                return this.status === qw.NotStarted ? this.initialState : this._state;
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
            (e.interpret = Yw),
            e
        );
    })();
function Yw(e, t) {
    return new Gw(e, t);
}
(((Qw = Kw || (Kw = {}))[(Qw.Effect = 1)] = 'Effect'), (Qw[(Qw.LayoutEffect = 2)] = 'LayoutEffect'));
var Xw = V.useLayoutEffect;
function Jw(e) {
    var t = V.useRef();
    return (t.current || (t.current = { v: e() }), t.current.v);
}
var Zw = function (e, t) {
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
    },
    eS = function (e) {
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
    };
var tS = function (e, t) {
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
    },
    nS = function (e, t, n) {
        if (n || 2 === arguments.length)
            for (var r, i = 0, o = t.length; i < o; i++)
                (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
    };
function rS(e, t) {
    (0, e.exec)(t.context, t._event.data, { action: e, state: t, _event: t._event })();
}
function iS(e) {
    var t = V.useRef([]),
        n = V.useRef([]);
    (Xw(function () {
        var r = e.subscribe(function (e) {
            var r, i;
            if (e.actions.length) {
                var o = e.actions.filter(function (e) {
                        return 'function' == typeof e.exec && '__effect' in e.exec;
                    }),
                    a = tS(
                        (function (e, t) {
                            var n,
                                r,
                                i = Zw([[], []], 2),
                                o = i[0],
                                a = i[1];
                            try {
                                for (var s = eS(e), u = s.next(); !u.done; u = s.next()) {
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
                        })(o, function (e) {
                            return e.exec.__effect === Kw.Effect;
                        }),
                        2,
                    ),
                    s = a[0],
                    u = a[1];
                ((r = t.current).push.apply(
                    r,
                    nS(
                        [],
                        tS(
                            s.map(function (t) {
                                return [t, e];
                            }),
                        ),
                        !1,
                    ),
                ),
                    (i = n.current).push.apply(
                        i,
                        nS(
                            [],
                            tS(
                                u.map(function (t) {
                                    return [t, e];
                                }),
                            ),
                            !1,
                        ),
                    ));
            }
        });
        return function () {
            r.unsubscribe();
        };
    }, []),
        Xw(function () {
            for (; n.current.length; ) {
                var e = tS(n.current.shift(), 2);
                rS(e[0], e[1]);
            }
        }),
        V.useEffect(function () {
            for (; t.current.length; ) {
                var e = tS(t.current.shift(), 2);
                rS(e[0], e[1]);
            }
        }));
}
var oS = function () {
        return (
            (oS =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            oS.apply(this, arguments)
        );
    },
    aS = function (e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        }
        return n;
    };
function sS(e, t) {
    void 0 === t && (t = {});
    var n = V.useCallback(function (e) {
            var t = void 0 === e.changed && Object.keys(e.children).length;
            (e.changed || t) && a(e);
        }, []),
        r = (function (e, t, n) {
            void 0 === t && (t = {});
            var r = Jw(function () {
                    return 'function' == typeof e ? e() : e;
                }),
                i = t.context,
                o = t.guards,
                a = t.actions,
                s = t.activities,
                u = t.services,
                l = t.delays,
                c = t.state,
                f = aS(t, ['context', 'guards', 'actions', 'activities', 'services', 'delays', 'state']),
                d = Jw(function () {
                    var e = { context: i, guards: o, actions: a, activities: s, services: u, delays: l };
                    return Yw(
                        r.withConfig(e, function () {
                            return oS(oS({}, r.context), i);
                        }),
                        oS({ deferEvents: !0 }, f),
                    );
                });
            return (
                Xw(
                    function () {
                        var e;
                        return (
                            n &&
                                (e = d.subscribe(
                                    (function (e, t, n) {
                                        if ('object' == typeof e) return e;
                                        var r = function () {};
                                        return { next: e, error: void 0 || r, complete: void 0 || r };
                                    })(n),
                                )),
                            function () {
                                null == e || e.unsubscribe();
                            }
                        );
                    },
                    [n],
                ),
                Xw(function () {
                    return (
                        d.start(c ? xw.create(c) : void 0),
                        function () {
                            d.stop();
                        }
                    );
                }, []),
                Xw(
                    function () {
                        (Object.assign(d.machine.options.actions, a),
                            Object.assign(d.machine.options.guards, o),
                            Object.assign(d.machine.options.activities, s),
                            Object.assign(d.machine.options.services, u),
                            Object.assign(d.machine.options.delays, l));
                    },
                    [a, o, s, u, l],
                ),
                iS(d),
                d
            );
        })(e, t, n),
        i = (function (e, t) {
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
        })(
            V.useState(function () {
                var e = r.machine.initialState;
                return t.state ? xw.create(t.state) : e;
            }),
            2,
        ),
        o = i[0],
        a = i[1];
    return [o, r.send, r];
}
var uS = {};
Object.defineProperty(uS, '__esModule', { value: !0 });
uS.IS_PRODUCTION = !0;
var lS,
    cS = {},
    fS = {};
((lS = fS),
    Object.defineProperty(lS, '__esModule', { value: !0 }),
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
    (lS.__assign = function () {
        return (
            (lS.__assign =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            lS.__assign.apply(this, arguments)
        );
    }),
    (lS.__read = function (e, t) {
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
    }),
    (lS.__rest = function (e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        }
        return n;
    }),
    (lS.__spreadArray = function (e, t, n) {
        if (n || 2 === arguments.length)
            for (var r, i = 0, o = t.length; i < o; i++)
                (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
    }),
    (lS.__values = function (e) {
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
    }));
var dS = {};
Object.defineProperty(dS, '__esModule', { value: !0 });
((dS.DEFAULT_GUARD_TYPE = 'xstate.guard'),
    (dS.EMPTY_ACTIVITY_MAP = {}),
    (dS.STATE_DELIMITER = '.'),
    (dS.TARGETLESS_KEY = ''),
    (function (e) {
        Object.defineProperty(e, '__esModule', { value: !0 });
        var t = fS,
            n = dS,
            r = uS;
        function i(e) {
            return Object.keys(e);
        }
        function o(e, t) {
            try {
                return p(e) ? e : e.toString().split(t);
            } catch (n) {
                throw new Error("'".concat(e, "' is not a valid state path."));
            }
        }
        function a(e) {
            return 'object' == typeof e && 'value' in e && 'context' in e && 'event' in e && '_event' in e;
        }
        function s(e, t) {
            return a(e) ? e.value : p(e) ? u(e) : 'string' != typeof e ? e : u(o(e, t));
        }
        function u(e) {
            if (1 === e.length) return e[0];
            for (var t = {}, n = t, r = 0; r < e.length - 1; r++)
                r === e.length - 2 ? (n[e[r]] = e[r + 1]) : ((n[e[r]] = {}), (n = n[e[r]]));
            return t;
        }
        function l(e, t) {
            for (var n = {}, r = i(e), o = 0; o < r.length; o++) {
                var a = r[o];
                n[a] = t(e[a], a, e, o);
            }
            return n;
        }
        function c(e) {
            var n;
            return (n = []).concat.apply(n, t.__spreadArray([], t.__read(e), !1));
        }
        function f(e) {
            return p(e) ? e : [e];
        }
        function d(e) {
            return void 0 === e ? [] : f(e);
        }
        function h(e, t) {
            return l(e.states, function (e, n) {
                if (e) {
                    var r = (y(t) ? void 0 : t[n]) || (e ? e.current : void 0);
                    if (r) return { current: r, states: h(e, r) };
                }
            });
        }
        function p(e) {
            return Array.isArray(e);
        }
        function v(e) {
            return 'function' == typeof e;
        }
        function y(e) {
            return 'string' == typeof e;
        }
        ((e.warn = function () {}),
            r.IS_PRODUCTION ||
                (e.warn = function (e, t) {
                    var n = e instanceof Error ? e : void 0;
                    if ((n || !e) && void 0 !== console) {
                        var r = ['Warning: '.concat(t)];
                        (n && r.push(n), console.warn.apply(console, r));
                    }
                }));
        var g = (function () {
            return ('function' == typeof Symbol && Symbol.observable) || '@@observable';
        })();
        function m(e) {
            try {
                return '__xstatenode' in e;
            } catch (t) {
                return !1;
            }
        }
        var b = (function () {
            var e = 0;
            return function () {
                return (++e).toString(16);
            };
        })();
        function _(e, n) {
            return y(e) || 'number' == typeof e ? t.__assign({ type: e }, n) : e;
        }
        ((e.evaluateGuard = function (e, t, r, i, o) {
            var a = e.options.guards,
                s = { state: o, cond: t, _event: i };
            if (t.type === n.DEFAULT_GUARD_TYPE) return ((null == a ? void 0 : a[t.name]) || t.predicate)(r, i.data, s);
            var u = a[t.type];
            if (!u) throw new Error("Guard '".concat(t.type, "' is not implemented on machine '").concat(e.id, "'."));
            return u(r, i.data, s);
        }),
            (e.flatten = c),
            (e.getEventType = function (e) {
                try {
                    return y(e) || 'number' == typeof e ? ''.concat(e) : e.type;
                } catch (t) {
                    throw new Error('Events must be strings or objects with a string event.type property.');
                }
            }),
            (e.isActor = function (e) {
                return !!e && 'function' == typeof e.send;
            }),
            (e.isArray = p),
            (e.isBehavior = function (e) {
                return null !== e && 'object' == typeof e && 'transition' in e && 'function' == typeof e.transition;
            }),
            (e.isBuiltInEvent = function (e) {
                return /^(done|error)\./.test(e);
            }),
            (e.isFunction = v),
            (e.isMachine = m),
            (e.isObservable = function (e) {
                try {
                    return 'subscribe' in e && v(e.subscribe);
                } catch (t) {
                    return !1;
                }
            }),
            (e.isPromiseLike = function (e) {
                return e instanceof Promise || !(null === e || (!v(e) && 'object' != typeof e) || !v(e.then));
            }),
            (e.isStateLike = a),
            (e.isString = y),
            (e.keys = i),
            (e.mapContext = function (e, n, r) {
                var i, o;
                if (v(e)) return e(n, r.data);
                var a = {};
                try {
                    for (var s = t.__values(Object.keys(e)), u = s.next(); !u.done; u = s.next()) {
                        var l = u.value,
                            c = e[l];
                        v(c) ? (a[l] = c(n, r.data)) : (a[l] = c);
                    }
                } catch (f) {
                    i = { error: f };
                } finally {
                    try {
                        u && !u.done && (o = s.return) && o.call(s);
                    } finally {
                        if (i) throw i.error;
                    }
                }
                return a;
            }),
            (e.mapFilterValues = function (e, n, r) {
                var o,
                    a,
                    s = {};
                try {
                    for (var u = t.__values(i(e)), l = u.next(); !l.done; l = u.next()) {
                        var c = l.value,
                            f = e[c];
                        r(f) && (s[c] = n(f, c, e));
                    }
                } catch (d) {
                    o = { error: d };
                } finally {
                    try {
                        l && !l.done && (a = u.return) && a.call(u);
                    } finally {
                        if (o) throw o.error;
                    }
                }
                return s;
            }),
            (e.mapValues = l),
            (e.matchesState = function e(t, r, o) {
                void 0 === o && (o = n.STATE_DELIMITER);
                var a = s(t, o),
                    u = s(r, o);
                return y(u)
                    ? !!y(a) && u === a
                    : y(a)
                      ? a in u
                      : i(a).every(function (t) {
                            return t in u && e(a[t], u[t]);
                        });
            }),
            (e.nestedPath = function (e, n) {
                return function (r) {
                    var i,
                        o,
                        a = r;
                    try {
                        for (var s = t.__values(e), u = s.next(); !u.done; u = s.next()) {
                            var l = u.value;
                            a = a[n][l];
                        }
                    } catch (c) {
                        i = { error: c };
                    } finally {
                        try {
                            u && !u.done && (o = s.return) && o.call(s);
                        } finally {
                            if (i) throw i.error;
                        }
                    }
                    return a;
                };
            }),
            (e.normalizeTarget = function (e) {
                if (void 0 !== e && e !== n.TARGETLESS_KEY) return d(e);
            }),
            (e.partition = function (e, n) {
                var r,
                    i,
                    o = t.__read([[], []], 2),
                    a = o[0],
                    s = o[1];
                try {
                    for (var u = t.__values(e), l = u.next(); !l.done; l = u.next()) {
                        var c = l.value;
                        n(c) ? a.push(c) : s.push(c);
                    }
                } catch (f) {
                    r = { error: f };
                } finally {
                    try {
                        l && !l.done && (i = u.return) && i.call(u);
                    } finally {
                        if (r) throw r.error;
                    }
                }
                return [a, s];
            }),
            (e.path = function (e) {
                return function (n) {
                    var r,
                        i,
                        o = n;
                    try {
                        for (var a = t.__values(e), s = a.next(); !s.done; s = a.next()) {
                            o = o[s.value];
                        }
                    } catch (u) {
                        r = { error: u };
                    } finally {
                        try {
                            s && !s.done && (i = a.return) && i.call(a);
                        } finally {
                            if (r) throw r.error;
                        }
                    }
                    return o;
                };
            }),
            (e.pathToStateValue = u),
            (e.reportUnhandledExceptionOnInvocation = function (e, t, n) {
                if (!r.IS_PRODUCTION) {
                    var i = e.stack ? " Stacktrace was '".concat(e.stack, "'") : '';
                    if (e === t)
                        console.error(
                            "Missing onError handler for invocation '"
                                .concat(n, "', error was '")
                                .concat(e, "'.")
                                .concat(i),
                        );
                    else {
                        var o = t.stack ? " Stacktrace was '".concat(t.stack, "'") : '';
                        console.error(
                            "Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(
                                n,
                                "'. ",
                            ) +
                                "Original error: '"
                                    .concat(e, "'. ")
                                    .concat(i, " Current error is '")
                                    .concat(t, "'.")
                                    .concat(o),
                        );
                    }
                }
            }),
            (e.symbolObservable = g),
            (e.toArray = d),
            (e.toArrayStrict = f),
            (e.toEventObject = _),
            (e.toGuard = function (e, t) {
                if (e)
                    return y(e)
                        ? { type: n.DEFAULT_GUARD_TYPE, name: e, predicate: t ? t[e] : void 0 }
                        : v(e)
                          ? { type: n.DEFAULT_GUARD_TYPE, name: e.name, predicate: e }
                          : e;
            }),
            (e.toInvokeSource = function (e) {
                return 'string' == typeof e ? { type: e } : e;
            }),
            (e.toObserver = function (e, t, n) {
                if ('object' == typeof e) return e;
                var r = function () {};
                return { next: e, error: t || r, complete: n || r };
            }),
            (e.toSCXMLEvent = function (e, n) {
                if (!y(e) && '$$type' in e && 'scxml' === e.$$type) return e;
                var r = _(e);
                return t.__assign({ name: r.type, data: r, $$type: 'scxml', type: 'external' }, n);
            }),
            (e.toStatePath = o),
            (e.toStatePaths = function e(t) {
                return t
                    ? y(t)
                        ? [[t]]
                        : c(
                              i(t).map(function (n) {
                                  var r = t[n];
                                  return 'string' == typeof r || (r && Object.keys(r).length)
                                      ? e(t[n]).map(function (e) {
                                            return [n].concat(e);
                                        })
                                      : [[n]];
                              }),
                          )
                    : [[]];
            }),
            (e.toStateValue = s),
            (e.toTransitionConfigArray = function (e, n) {
                return f(n).map(function (n) {
                    return void 0 === n || 'string' == typeof n || m(n)
                        ? { target: n, event: e }
                        : t.__assign(t.__assign({}, n), { event: e });
                });
            }),
            (e.uniqueId = b),
            (e.updateContext = function (n, o, a, s) {
                return (
                    r.IS_PRODUCTION || e.warn(!!n, 'Attempting to update undefined context'),
                    n
                        ? a.reduce(function (e, n) {
                              var r,
                                  a,
                                  u = n.assignment,
                                  l = { state: s, action: n, _event: o },
                                  c = {};
                              if (v(u)) c = u(e, o.data, l);
                              else
                                  try {
                                      for (var f = t.__values(i(u)), d = f.next(); !d.done; d = f.next()) {
                                          var h = d.value,
                                              p = u[h];
                                          c[h] = v(p) ? p(e, o.data, l) : p;
                                      }
                                  } catch (y) {
                                      r = { error: y };
                                  } finally {
                                      try {
                                          d && !d.done && (a = f.return) && a.call(f);
                                      } finally {
                                          if (r) throw r.error;
                                      }
                                  }
                              return Object.assign({}, e, c);
                          }, n)
                        : n
                );
            }),
            (e.updateHistoryStates = h),
            (e.updateHistoryValue = function (e, t) {
                return { current: t, states: h(e, t) };
            }));
    })(cS));
var hS = {};
!(function (e) {
    (Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (e) {
            ((e.Start = 'xstate.start'),
                (e.Stop = 'xstate.stop'),
                (e.Raise = 'xstate.raise'),
                (e.Send = 'xstate.send'),
                (e.Cancel = 'xstate.cancel'),
                (e.NullEvent = ''),
                (e.Assign = 'xstate.assign'),
                (e.After = 'xstate.after'),
                (e.DoneState = 'done.state'),
                (e.DoneInvoke = 'done.invoke'),
                (e.Log = 'xstate.log'),
                (e.Init = 'xstate.init'),
                (e.Invoke = 'xstate.invoke'),
                (e.ErrorExecution = 'error.execution'),
                (e.ErrorCommunication = 'error.communication'),
                (e.ErrorPlatform = 'error.platform'),
                (e.ErrorCustom = 'xstate.error'),
                (e.Update = 'xstate.update'),
                (e.Pure = 'xstate.pure'),
                (e.Choose = 'xstate.choose'));
        })(e.ActionTypes || (e.ActionTypes = {})),
        (function (e) {
            ((e.Parent = '#_parent'), (e.Internal = '#_internal'));
        })(e.SpecialTargets || (e.SpecialTargets = {})));
})(hS);
var pS = {};
Object.defineProperty(pS, '__esModule', { value: !0 });
var vS = hS,
    yS = vS.ActionTypes.Start,
    gS = vS.ActionTypes.Stop,
    mS = vS.ActionTypes.Raise,
    bS = vS.ActionTypes.Send,
    _S = vS.ActionTypes.Cancel,
    wS = vS.ActionTypes.NullEvent,
    SS = vS.ActionTypes.Assign,
    xS = vS.ActionTypes.After,
    kS = vS.ActionTypes.DoneState,
    OS = vS.ActionTypes.Log,
    ES = vS.ActionTypes.Init,
    PS = vS.ActionTypes.Invoke,
    CS = vS.ActionTypes.ErrorExecution,
    AS = vS.ActionTypes.ErrorPlatform,
    TS = vS.ActionTypes.ErrorCustom,
    NS = vS.ActionTypes.Update,
    jS = vS.ActionTypes.Choose,
    RS = vS.ActionTypes.Pure;
if (
    ((pS.after = xS),
    (pS.assign = SS),
    (pS.cancel = _S),
    (pS.choose = jS),
    (pS.doneState = kS),
    (pS.error = TS),
    (pS.errorExecution = CS),
    (pS.errorPlatform = AS),
    (pS.init = ES),
    (pS.invoke = PS),
    (pS.log = OS),
    (pS.nullEvent = wS),
    (pS.pure = RS),
    (pS.raise = mS),
    (pS.send = bS),
    (pS.start = yS),
    (pS.stop = gS),
    (pS.update = NS),
    !V.useState)
)
    throw new Error('mobx-react-lite requires React with Hooks support');
if (!sv) throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
function IS(e) {
    e();
}
function LS(e) {
    return Fp(Xv(e, t));
    var t;
}
var DS = new ((function () {
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
    zS = { exports: {} },
    MS = {},
    VS = V;
var FS =
        'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    US = VS.useState,
    BS = VS.useEffect,
    $S = VS.useLayoutEffect,
    qS = VS.useDebugValue;
function HS(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !FS(e, n);
    } catch (r) {
        return !0;
    }
}
var WS =
    'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
              return t();
          }
        : function (e, t) {
              var n = t(),
                  r = US({ inst: { value: n, getSnapshot: t } }),
                  i = r[0].inst,
                  o = r[1];
              return (
                  $S(
                      function () {
                          ((i.value = n), (i.getSnapshot = t), HS(i) && o({ inst: i }));
                      },
                      [e, n, t],
                  ),
                  BS(
                      function () {
                          return (
                              HS(i) && o({ inst: i }),
                              e(function () {
                                  HS(i) && o({ inst: i });
                              })
                          );
                      },
                      [e],
                  ),
                  qS(n),
                  n
              );
          };
((MS.useSyncExternalStore = void 0 !== VS.useSyncExternalStore ? VS.useSyncExternalStore : WS), (zS.exports = MS));
var KS,
    QS,
    GS = zS.exports;
function YS(e) {
    e.reaction = new fp('observer'.concat(e.name), function () {
        var t;
        ((e.stateVersion = Symbol()), null === (t = e.onStoreChange) || void 0 === t || t.call(e));
    });
}
var XS = 'function' == typeof Symbol && Symbol.for,
    JS =
        null !==
            (QS =
                null === (KS = Object.getOwnPropertyDescriptor(function () {}, 'name')) || void 0 === KS
                    ? void 0
                    : KS.configurable) &&
        void 0 !== QS &&
        QS,
    ZS = XS
        ? Symbol.for('react.forward_ref')
        : 'function' == typeof V.forwardRef &&
          V.forwardRef(function (e) {
              return null;
          }).$$typeof,
    ex = XS
        ? Symbol.for('react.memo')
        : 'function' == typeof V.memo &&
          V.memo(function (e) {
              return null;
          }).$$typeof;
function tx(e, t) {
    if (ex && e.$$typeof === ex)
        throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
        );
    var n = (void 0, !1),
        r = e,
        i = e.displayName || e.name;
    if (ZS && e.$$typeof === ZS && ((n = !0), 'function' != typeof (r = e.render)))
        throw new Error('[mobx-react-lite] `render` property of ForwardRef was not a function');
    var o = function (e, t) {
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
                            DS.unregister(r),
                            (r.onStoreChange = e),
                            r.reaction || (YS(r), (r.stateVersion = Symbol())),
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
                (a.reaction || (YS(a), DS.register(n, a, a)),
                F.useDebugValue(a.reaction, LS),
                GS.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot),
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
        JS && Object.defineProperty(o, 'name', { value: e.name, writable: !0, configurable: !0 }),
        e.contextTypes && (o.contextTypes = e.contextTypes),
        n && (o = V.forwardRef(o)),
        (function (e, t) {
            Object.keys(e).forEach(function (n) {
                rx[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
            });
        })(e, (o = V.memo(o))),
        o
    );
}
var nx,
    rx = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function ix(e) {
    var t,
        n,
        r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
        if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = ix(e[t])) && (r && (r += ' '), (r += n));
        else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
}
((nx = Vf.unstable_batchedUpdates) || (nx = IS), Mp({ reactionScheduler: nx }), DS.finalizeAllImmediately);
const ox = (e) => ('boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e),
    ax = function () {
        for (var e, t, n = 0, r = ''; n < arguments.length; )
            (e = arguments[n++]) && (t = ix(e)) && (r && (r += ' '), (r += t));
        return r;
    },
    sx = (e, t) => (n) => {
        var r;
        if (null == (null == t ? void 0 : t.variants))
            return ax(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        const { variants: i, defaultVariants: o } = t,
            a = Object.keys(i).map((e) => {
                const t = null == n ? void 0 : n[e],
                    r = null == o ? void 0 : o[e];
                if (null === t) return null;
                const a = ox(t) || ox(r);
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
        return ax(e, a, u, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
    };
var ux = {};
Object.defineProperty(ux, '__esModule', { value: !0 });
var lx = fS,
    cx = uS,
    fx = cS,
    dx = hS,
    hx = pS,
    px = fx.toSCXMLEvent({ type: hx.init });
function vx(e, t) {
    return (t && t[e]) || void 0;
}
function yx(e, t) {
    var n;
    if (fx.isString(e) || 'number' == typeof e) {
        var r = vx(e, t);
        n = fx.isFunction(r) ? { type: e, exec: r } : r || { type: e, exec: void 0 };
    } else if (fx.isFunction(e)) n = { type: e.name || e.toString(), exec: e };
    else {
        r = vx(e.type, t);
        if (fx.isFunction(r)) n = lx.__assign(lx.__assign({}, e), { exec: r });
        else if (r) {
            var i = r.type || e.type;
            n = lx.__assign(lx.__assign(lx.__assign({}, r), e), { type: i });
        } else n = e;
    }
    return n;
}
var gx = function (e, t) {
    return e
        ? (fx.isArray(e) ? e : [e]).map(function (e) {
              return yx(e, t);
          })
        : [];
};
function mx(e) {
    var t = yx(e);
    return lx.__assign(lx.__assign({ id: fx.isString(e) ? e : t.id }, t), { type: t.type });
}
function bx(e) {
    return { type: hx.raise, _event: fx.toSCXMLEvent(e.event) };
}
function _x(e, t) {
    return {
        to: t ? t.to : void 0,
        type: hx.send,
        event: fx.isFunction(e) ? e : fx.toEventObject(e),
        delay: t ? t.delay : void 0,
        id: t && void 0 !== t.id ? t.id : fx.isFunction(e) ? e.name : fx.getEventType(e),
    };
}
function wx(e, t, n, r) {
    var i,
        o = { _event: n },
        a = fx.toSCXMLEvent(fx.isFunction(e.event) ? e.event(t, n.data, o) : e.event);
    if (fx.isString(e.delay)) {
        var s = r && r[e.delay];
        i = fx.isFunction(s) ? s(t, n.data, o) : s;
    } else i = fx.isFunction(e.delay) ? e.delay(t, n.data, o) : e.delay;
    var u = fx.isFunction(e.to) ? e.to(t, n.data, o) : e.to;
    return lx.__assign(lx.__assign({}, e), { to: u, _event: a, event: a.data, delay: i });
}
function Sx(e, t) {
    return _x(e, lx.__assign(lx.__assign({}, t), { to: dx.SpecialTargets.Parent }));
}
var xx = function (e, t) {
    return { context: e, event: t };
};
var kx = function (e, t, n) {
    return lx.__assign(lx.__assign({}, e), { value: fx.isString(e.expr) ? e.expr : e.expr(t, n.data, { _event: n }) });
};
function Ox(e, t, n) {
    var r = fx.isFunction(e.activity) ? e.activity(t, n.data) : e.activity,
        i = 'string' == typeof r ? { id: r } : r;
    return { type: dx.ActionTypes.Stop, activity: i };
}
ux.after = function (e, t) {
    var n = t ? '#'.concat(t) : '';
    return ''.concat(dx.ActionTypes.After, '(').concat(e, ')').concat(n);
};
var Ex = (ux.assign = function (e) {
    return { type: hx.assign, assignment: e };
});
((ux.cancel = function (e) {
    return { type: hx.cancel, sendId: e };
}),
    (ux.choose = function (e) {
        return { type: dx.ActionTypes.Choose, conds: e };
    }),
    (ux.done = function (e, t) {
        var n = ''.concat(dx.ActionTypes.DoneState, '.').concat(e),
            r = {
                type: n,
                data: t,
                toString: function () {
                    return n;
                },
            };
        return r;
    }),
    (ux.doneInvoke = function (e, t) {
        var n = ''.concat(dx.ActionTypes.DoneInvoke, '.').concat(e),
            r = {
                type: n,
                data: t,
                toString: function () {
                    return n;
                },
            };
        return r;
    }),
    (ux.error = function (e, t) {
        var n = ''.concat(dx.ActionTypes.ErrorPlatform, '.').concat(e),
            r = {
                type: n,
                data: t,
                toString: function () {
                    return n;
                },
            };
        return r;
    }),
    (ux.escalate = function (e, t) {
        return Sx(
            function (t, n, r) {
                return { type: hx.error, data: fx.isFunction(e) ? e(t, n, r) : e };
            },
            lx.__assign(lx.__assign({}, t), { to: dx.SpecialTargets.Parent }),
        );
    }),
    (ux.forwardTo = function (e, t) {
        return _x(
            function (e, t) {
                return t;
            },
            lx.__assign(lx.__assign({}, t), { to: e }),
        );
    }),
    (ux.getActionFunction = vx),
    (ux.initEvent = px),
    (ux.log = function (e, t) {
        return (void 0 === e && (e = xx), { type: hx.log, label: t, expr: e });
    }),
    (ux.pure = function (e) {
        return { type: dx.ActionTypes.Pure, get: e };
    }),
    (ux.raise = function (e) {
        return fx.isString(e) ? { type: hx.raise, event: e } : _x(e, { to: dx.SpecialTargets.Internal });
    }),
    (ux.resolveActions = function e(t, n, r, i, o, a) {
        void 0 === a && (a = !1);
        var s = lx.__read(
                a
                    ? [[], o]
                    : fx.partition(o, function (e) {
                          return e.type === hx.assign;
                      }),
                2,
            ),
            u = s[0],
            l = s[1],
            c = u.length ? fx.updateContext(r, i, u, n) : r,
            f = a ? [r] : void 0,
            d = fx.flatten(
                l
                    .map(function (r) {
                        var o;
                        switch (r.type) {
                            case hx.raise:
                                return bx(r);
                            case hx.send:
                                var s = wx(r, c, i, t.options.delays);
                                return (
                                    cx.IS_PRODUCTION ||
                                        fx.warn(
                                            !fx.isString(r.delay) || 'number' == typeof s.delay,
                                            "No delay reference for delay expression '"
                                                .concat(r.delay, "' was found on machine '")
                                                .concat(t.id, "'"),
                                        ),
                                    s
                                );
                            case hx.log:
                                return kx(r, c, i);
                            case hx.choose:
                                if (
                                    !(h =
                                        null ===
                                            (o = r.conds.find(function (e) {
                                                var r = fx.toGuard(e.cond, t.options.guards);
                                                return !r || fx.evaluateGuard(t, r, c, i, n);
                                            })) || void 0 === o
                                            ? void 0
                                            : o.actions)
                                )
                                    return [];
                                var u = lx.__read(e(t, n, c, i, gx(fx.toArray(h), t.options.actions), a), 2),
                                    l = u[0],
                                    d = u[1];
                                return ((c = d), null == f || f.push(c), l);
                            case hx.pure:
                                var h;
                                if (!(h = r.get(c, i.data))) return [];
                                var p = lx.__read(e(t, n, c, i, gx(fx.toArray(h), t.options.actions), a), 2),
                                    v = p[0],
                                    y = p[1];
                                return ((c = y), null == f || f.push(c), v);
                            case hx.stop:
                                return Ox(r, c, i);
                            case hx.assign:
                                ((c = fx.updateContext(c, i, [r], n)), null == f || f.push(c));
                                break;
                            default:
                                var g = yx(r, t.options.actions),
                                    m = g.exec;
                                if (m && f) {
                                    var b = f.length - 1;
                                    g = lx.__assign(lx.__assign({}, g), {
                                        exec: function (e) {
                                            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                            m.apply(void 0, lx.__spreadArray([f[b]], lx.__read(t), !1));
                                        },
                                    });
                                }
                                return g;
                        }
                    })
                    .filter(function (e) {
                        return !!e;
                    }),
            );
        return [d, c];
    }),
    (ux.resolveLog = kx),
    (ux.resolveRaise = bx),
    (ux.resolveSend = wx),
    (ux.resolveStop = Ox),
    (ux.respond = function (e, t) {
        return _x(
            e,
            lx.__assign(lx.__assign({}, t), {
                to: function (e, t, n) {
                    return n._event.origin;
                },
            }),
        );
    }),
    (ux.send = _x),
    (ux.sendParent = Sx),
    (ux.sendUpdate = function () {
        return Sx(hx.update);
    }),
    (ux.start = function (e) {
        var t = mx(e);
        return { type: dx.ActionTypes.Start, activity: t, exec: void 0 };
    }),
    (ux.stop = function (e) {
        var t = fx.isFunction(e) ? e : mx(e);
        return { type: dx.ActionTypes.Stop, activity: t, exec: void 0 };
    }),
    (ux.toActionObject = yx),
    (ux.toActionObjects = gx),
    (ux.toActivityDefinition = mx));
export {
    F as R,
    db as S,
    ve as a,
    ge as b,
    Ae as c,
    ye as d,
    $f as e,
    Op as f,
    Ne as g,
    sx as h,
    vb as i,
    Q as j,
    Ib as k,
    Jb as l,
    tx as m,
    jw as n,
    wh as o,
    Ex as p,
    sS as q,
    V as r,
    yb as s,
    Qh as u,
};
