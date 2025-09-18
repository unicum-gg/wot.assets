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
    y = Object.assign,
    b = {};
function _(e, t, n) {
    ((this.props = e), (this.context = t), (this.refs = b), (this.updater = n || m));
}
function w() {}
function S(e, t, n) {
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
var k = (S.prototype = new w());
((k.constructor = S), y(k, _.prototype), (k.isPureReactComponent = !0));
var O = Array.isArray,
    x = Object.prototype.hasOwnProperty,
    E = { current: null },
    P = { key: !0, ref: !0, __self: !0, __source: !0 };
function T(e, t, n) {
    var r,
        i = {},
        a = null,
        s = null;
    if (null != t)
        for (r in (void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (a = '' + t.key), t))
            x.call(t, r) && !P.hasOwnProperty(r) && (i[r] = t[r]);
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
var C = /\/+/g;
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
            O(i)
                ? ((n = ''),
                  null != e && (n = e.replace(C, '$&/') + '/'),
                  j(i, t, n, '', function (e) {
                      return e;
                  }))
                : null != i &&
                  (A(i) &&
                      (i = (function (e, t) {
                          return { $$typeof: o, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                      })(i, n + (!i.key || (u && u.key === i.key) ? '' : ('' + i.key).replace(C, '$&/') + '/') + e)),
                  t.push(i)),
            1
        );
    if (((u = 0), (r = '' === r ? '.' : r + ':'), O(e)))
        for (var l = 0; l < e.length; l++) {
            var c = r + N((s = e[l]), l);
            u += j(s, t, n, c, i);
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
function U(e, t, n) {
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
function B(e) {
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
var R = { current: null },
    W = { transition: null },
    I = { ReactCurrentDispatcher: R, ReactCurrentBatchConfig: W, ReactCurrentOwner: E };
function L() {
    throw Error('act(...) is not supported in production builds of React.');
}
((i.Children = {
    map: U,
    forEach: function (e, t, n) {
        U(
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
            U(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            U(e, function (e) {
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
    (i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
    (i.act = L),
    (i.cloneElement = function (e, t, n) {
        if (null == e)
            throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
        var r = y({}, e.props),
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
            for (l in t) x.call(t, l) && !P.hasOwnProperty(l) && (r[l] = void 0 === t[l] && void 0 !== u ? u[l] : t[l]);
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
    (i.createElement = T),
    (i.createFactory = function (e) {
        var t = T.bind(null, e);
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
        return { $$typeof: v, _payload: { _status: -1, _result: e }, _init: B };
    }),
    (i.memo = function (e, t) {
        return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
    }),
    (i.startTransition = function (e) {
        var t = W.transition;
        W.transition = {};
        try {
            e();
        } finally {
            W.transition = t;
        }
    }),
    (i.unstable_act = L),
    (i.useCallback = function (e, t) {
        return R.current.useCallback(e, t);
    }),
    (i.useContext = function (e) {
        return R.current.useContext(e);
    }),
    (i.useDebugValue = function () {}),
    (i.useDeferredValue = function (e) {
        return R.current.useDeferredValue(e);
    }),
    (i.useEffect = function (e, t) {
        return R.current.useEffect(e, t);
    }),
    (i.useId = function () {
        return R.current.useId();
    }),
    (i.useImperativeHandle = function (e, t, n) {
        return R.current.useImperativeHandle(e, t, n);
    }),
    (i.useInsertionEffect = function (e, t) {
        return R.current.useInsertionEffect(e, t);
    }),
    (i.useLayoutEffect = function (e, t) {
        return R.current.useLayoutEffect(e, t);
    }),
    (i.useMemo = function (e, t) {
        return R.current.useMemo(e, t);
    }),
    (i.useReducer = function (e, t, n) {
        return R.current.useReducer(e, t, n);
    }),
    (i.useRef = function (e) {
        return R.current.useRef(e);
    }),
    (i.useState = function (e) {
        return R.current.useState(e);
    }),
    (i.useSyncExternalStore = function (e, t, n) {
        return R.current.useSyncExternalStore(e, t, n);
    }),
    (i.useTransition = function () {
        return R.current.useTransition();
    }),
    (i.version = '18.3.1'),
    (r.exports = i));
var D = r.exports;
const V = e(D);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var M = D,
    z = Symbol.for('react.element'),
    F = Symbol.for('react.fragment'),
    $ = Object.prototype.hasOwnProperty,
    Q = M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    q = { key: !0, ref: !0, __self: !0, __source: !0 };
function H(e, t, n) {
    var r,
        i = {},
        o = null,
        a = null;
    for (r in (void 0 !== n && (o = '' + n), void 0 !== t.key && (o = '' + t.key), void 0 !== t.ref && (a = t.ref), t))
        $.call(t, r) && !q.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
    return { $$typeof: z, type: e, key: o, ref: a, props: i, _owner: Q.current };
}
((n.Fragment = F), (n.jsx = H), (n.jsxs = H), (t.exports = n));
var K = t.exports,
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
    var n = Oe(e);
    return be(ye(Y({ resolve: n }, t)));
}
function me(e, t) {
    if (!he(e)) throw new te('asClass', 'Type', 'class', e);
    t = we({ lifetime: oe.TRANSIENT }, t, e[pe]);
    var n = Oe(function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return Reflect.construct(e, t);
    }, e);
    return be(ye(Y(Y({}, t), { resolve: n })));
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
            return be(Y(Y({}, this), { dispose: e }));
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
var Ee = Symbol('familyTree'),
    Pe = Symbol('rollUpRegistrations'),
    Te = 'AwilixContainerCradle';
function Ae(e) {
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
        return Y(Y({}, t && t[Pe]()), o);
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
                        return Te;
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
    Ue = {},
    Be = { exports: {} },
    Re = {};
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
        y = 'undefined' != typeof setImmediate ? setImmediate : null;
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
                null !== t && U(_, t.startTime - e);
            }
    }
    function w(t, i) {
        ((p = !1), v && ((v = !1), m(x), (x = -1)), (h = !0));
        var o = d;
        try {
            for (b(i), f = n(u); null !== f && (!(f.expirationTime > i) || (t && !T())); ) {
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
                var g = n(l);
                (null !== g && U(_, g.startTime - i), (c = !1));
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
        O = null,
        x = -1,
        E = 5,
        P = -1;
    function T() {
        return !(e.unstable_now() - P < E);
    }
    function A() {
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
            y(A);
        };
    else if ('undefined' != typeof MessageChannel) {
        var C = new MessageChannel(),
            N = C.port2;
        ((C.port1.onmessage = A),
            (S = function () {
                N.postMessage(null);
            }));
    } else
        S = function () {
            g(A, 0);
        };
    function j(e) {
        ((O = e), k || ((k = !0), S()));
    }
    function U(t, n) {
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
                      null === n(u) && r === n(l) && (v ? (m(x), (x = -1)) : (v = !0), U(_, o - a)))
                    : ((r.sortIndex = s), t(u, r), p || h || ((p = !0), j(w))),
                r
            );
        }),
        (e.unstable_shouldYield = T),
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
})(Re),
    (Be.exports = Re));
var We = Be.exports,
    Ie = D,
    Le = We;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function De(e) {
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
    Me = {};
function ze(e, t) {
    (Fe(e, t), Fe(e + 'Capture', t));
}
function Fe(e, t) {
    for (Me[e] = t, e = 0; e < t.length; e++) Ve.add(t[e]);
}
var $e = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    Qe = Object.prototype.hasOwnProperty,
    qe =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    He = {},
    Ke = {};
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
                  return !!Qe.call(Ke, e) || (!Qe.call(He, e) && (qe.test(e) ? (Ke[e] = !0) : ((He[e] = !0), !1)));
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
    return (e && (r = xt(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0));
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
function jt(e, t) {
    Nt(e, t);
    var n = Ot(t.value),
        r = t.type;
    if (null != n)
        'number' === r
            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
    (t.hasOwnProperty('value')
        ? Bt(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && Bt(e, t.type, Ot(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked));
}
function Ut(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
        ((t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t));
    }
    ('' !== (n = e.name) && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        '' !== n && (e.name = n));
}
function Bt(e, t, n) {
    ('number' === t && Tt(e.ownerDocument) === e) ||
        (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Rt = Array.isArray;
function Wt(e, t, n, r) {
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
    if (null != t.dangerouslySetInnerHTML) throw Error(De(91));
    return mt({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Lt(e, t) {
    var n = t.value;
    if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(De(92));
            if (Rt(n)) {
                if (1 < n.length) throw Error(De(93));
                n = n[0];
            }
            t = n;
        }
        (null == t && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: Ot(n) };
}
function Dt(e, t) {
    var n = Ot(t.value),
        r = Ot(t.defaultValue);
    (null != n &&
        ((n = '' + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = '' + r));
}
function Vt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
}
function Mt(e) {
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
        ? Mt(t)
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
var Ht = {
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
    Kt = ['Webkit', 'ms', 'Moz', 'O'];
function Gt(e, t, n) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n || 'number' != typeof t || 0 === t || (Ht.hasOwnProperty(e) && Ht[e])
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
Object.keys(Ht).forEach(function (e) {
    Kt.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ht[t] = Ht[e]));
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
        if (Yt[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(De(137, e));
        if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(De(60));
            if ('object' != typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
                throw Error(De(61));
        }
        if (null != t.style && 'object' != typeof t.style) throw Error(De(62));
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
        if ('function' != typeof nn) throw Error(De(280));
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
    if (n && 'function' != typeof n) throw Error(De(231, t, typeof n));
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
    yn = null,
    bn = !1,
    _n = null,
    wn = {
        onError: function (e) {
            ((mn = !0), (yn = e));
        },
    };
function Sn(e, t, n, r, i, o, a, s, u) {
    ((mn = !1), (yn = null), gn.apply(wn, arguments));
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
    if (kn(e) !== e) throw Error(De(188));
}
function En(e) {
    return null !==
        (e = (function (e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = kn(e))) throw Error(De(188));
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
                    throw Error(De(188));
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
                        if (!a) throw Error(De(189));
                    }
                }
                if (n.alternate !== r) throw Error(De(190));
            }
            if (3 !== n.tag) throw Error(De(188));
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
var Tn = Le.unstable_scheduleCallback,
    An = Le.unstable_cancelCallback,
    Cn = Le.unstable_shouldYield,
    Nn = Le.unstable_requestPaint,
    jn = Le.unstable_now,
    Un = Le.unstable_getCurrentPriorityLevel,
    Bn = Le.unstable_ImmediatePriority,
    Rn = Le.unstable_UserBlockingPriority,
    Wn = Le.unstable_NormalPriority,
    In = Le.unstable_LowPriority,
    Ln = Le.unstable_IdlePriority,
    Dn = null,
    Vn = null;
var Mn = Math.clz32
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
function Hn(e, t) {
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
        for (e = e.entanglements, t &= r; 0 < t; ) ((i = 1 << (n = 31 - Mn(t))), (r |= e[n]), (t &= ~i));
    return r;
}
function Kn(e, t) {
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
        ((e = e.eventTimes)[(t = 31 - Mn(t))] = n));
}
function Zn(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Mn(n),
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
function yr(e) {
    var t = Zo(e.target);
    if (null !== t) {
        var n = kn(t);
        if (null !== n)
            if (13 === (t = n.tag)) {
                if (null !== (t = On(n)))
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
        var n = Cr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
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
        ((e.blockedOn = null), sr || ((sr = !0), Le.unstable_scheduleCallback(Le.unstable_NormalPriority, wr)));
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
    for (; 0 < pr.length && null === (n = pr[0]).blockedOn; ) (yr(n), null === n.blockedOn && pr.shift());
}
var Or = et.ReactCurrentBatchConfig,
    xr = !0;
function Er(e, t, n, r) {
    var i = er,
        o = Or.transition;
    Or.transition = null;
    try {
        ((er = 1), Tr(e, t, n, r));
    } finally {
        ((er = i), (Or.transition = o));
    }
}
function Pr(e, t, n, r) {
    var i = er,
        o = Or.transition;
    Or.transition = null;
    try {
        ((er = 4), Tr(e, t, n, r));
    } finally {
        ((er = i), (Or.transition = o));
    }
}
function Tr(e, t, n, r) {
    if (xr) {
        var i = Cr(e, t, n, r);
        if (null === i) (xo(e, t, r, Ar, n), gr(e, r));
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
                if ((null !== o && nr(o), null === (o = Cr(e, t, n, r)) && xo(e, t, r, Ar, n), o === i)) break;
                i = o;
            }
            null !== i && r.stopPropagation();
        } else xo(e, t, r, null, n);
    }
}
var Ar = null;
function Cr(e, t, n, r) {
    if (((Ar = null), null !== (e = Zo((e = tn(r))))))
        if (null === (t = kn(e))) e = null;
        else if (13 === (n = t.tag)) {
            if (null !== (e = On(t))) return e;
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
            switch (Un()) {
                case Bn:
                    return 1;
                case Rn:
                    return 4;
                case Wn:
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
var jr = null,
    Ur = null,
    Br = null;
function Rr() {
    if (Br) return Br;
    var e,
        t,
        n = Ur,
        r = n.length,
        i = 'value' in jr ? jr.value : jr.textContent,
        o = i.length;
    for (e = 0; e < r && n[e] === i[e]; e++);
    var a = r - e;
    for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
    return (Br = i.slice(e, 1 < t ? 1 - t : void 0));
}
function Wr(e) {
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
function Dr(e) {
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
    Mr,
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
    $r = Dr(Fr),
    Qr = mt({}, Fr, { view: 0, detail: 0 }),
    qr = Dr(Qr),
    Hr = mt({}, Qr, {
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
                          ? ((Vr = e.screenX - zr.screenX), (Mr = e.screenY - zr.screenY))
                          : (Mr = Vr = 0),
                      (zr = e)),
                  Vr);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : Mr;
        },
    }),
    Kr = Dr(Hr),
    Gr = Dr(mt({}, Hr, { dataTransfer: 0 })),
    Xr = Dr(mt({}, Qr, { relatedTarget: 0 })),
    Yr = Dr(mt({}, Fr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    Jr = mt({}, Fr, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    Zr = Dr(Jr),
    ei = Dr(mt({}, Fr, { data: 0 })),
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
                ? 13 === (e = Wr(e))
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
            return 'keypress' === e.type ? Wr(e) : 0;
        },
        keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
        which: function (e) {
            return 'keypress' === e.type ? Wr(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
    }),
    si = Dr(ai),
    ui = Dr(
        mt({}, Hr, {
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
    li = Dr(
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
    ci = Dr(mt({}, Fr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    fi = mt({}, Hr, {
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
    di = Dr(fi),
    hi = [9, 13, 27, 32],
    pi = $e && 'CompositionEvent' in window,
    vi = null;
$e && 'documentMode' in document && (vi = document.documentMode);
var gi = $e && 'TextEvent' in window && !vi,
    mi = $e && (!pi || (vi && 8 < vi && 11 >= vi)),
    yi = String.fromCharCode(32),
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
    (sn(r),
        0 < (t = Po(t, 'onChange')).length &&
            ((n = new $r('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
}
var Ei = null,
    Pi = null;
function Ti(e) {
    bo(e, 0);
}
function Ai(e) {
    if (Pt(ta(e))) return e;
}
function Ci(e, t) {
    if ('change' === e) return t;
}
var Ni = !1;
if ($e) {
    var ji;
    if ($e) {
        var Ui = 'oninput' in document;
        if (!Ui) {
            var Bi = document.createElement('div');
            (Bi.setAttribute('oninput', 'return;'), (Ui = 'function' == typeof Bi.oninput));
        }
        ji = Ui;
    } else ji = !1;
    Ni = ji && (!document.documentMode || 9 < document.documentMode);
}
function Ri() {
    Ei && (Ei.detachEvent('onpropertychange', Wi), (Pi = Ei = null));
}
function Wi(e) {
    if ('value' === e.propertyName && Ai(Pi)) {
        var t = [];
        (xi(t, Pi, e, tn(e)), dn(Ti, t));
    }
}
function Ii(e, t, n) {
    'focusin' === e ? (Ri(), (Pi = n), (Ei = t).attachEvent('onpropertychange', Wi)) : 'focusout' === e && Ri();
}
function Li(e) {
    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Ai(Pi);
}
function Di(e, t) {
    if ('click' === e) return Ai(t);
}
function Vi(e, t) {
    if ('input' === e || 'change' === e) return Ai(t);
}
var Mi =
    'function' == typeof Object.is
        ? Object.is
        : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
          };
function zi(e, t) {
    if (Mi(e, t)) return !0;
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Qe.call(t, i) || !Mi(e[i], t[i])) return !1;
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
function Hi(e) {
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
function Ki(e) {
    var t = qi(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Qi(n.ownerDocument.documentElement, n)) {
        if (null !== r && Hi(n))
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
        Xi !== Tt(r) ||
        ('selectionStart' in (r = Xi) && Hi(r)
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
            0 < (r = Po(Yi, 'onSelect')).length &&
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
function yo(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n),
        (function (e, t, n, r, i, o, a, s, u) {
            if ((Sn.apply(this, arguments), mn)) {
                if (!mn) throw Error(De(198));
                var l = yn;
                ((mn = !1), (yn = null), bn || ((bn = !0), (_n = l)));
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
                    (yo(i, s, l), (o = u));
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
                    (yo(i, s, l), (o = u));
                }
        }
    }
    if (bn) throw ((e = _n), (bn = !1), (_n = null), e);
}
function _o(e, t) {
    var n = t[Xo];
    void 0 === n && (n = t[Xo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Oo(t, e, 2, !1), n.add(r));
}
function wo(e, t, n) {
    var r = 0;
    (t && (r |= 4), Oo(n, e, r, t));
}
var So = '_reactListening' + Math.random().toString(36).slice(2);
function ko(e) {
    if (!e[So]) {
        ((e[So] = !0),
            Ve.forEach(function (t) {
                'selectionchange' !== t && (mo.has(t) || wo(t, !1, e), wo(t, !0, e));
            }));
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[So] || ((t[So] = !0), wo('selectionchange', !1, t));
    }
}
function Oo(e, t, n, r) {
    switch (Nr(t)) {
        case 1:
            var i = Er;
            break;
        case 4:
            i = Pr;
            break;
        default:
            i = Tr;
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
                        if (0 === Wr(n)) break e;
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
                        u = Kr;
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
                              (l !== (f = kn(l)) || (5 !== l.tag && 6 !== l.tag)) &&
                              (l = null))
                        : ((u = null), (l = r)),
                    u !== l))
            ) {
                if (
                    ((c = Kr),
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
                'select' === (u = (s = r ? ta(r) : window).nodeName && s.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === s.type)
            )
                var g = Ci;
            else if (Oi(s))
                if (Ni) g = Vi;
                else {
                    g = Li;
                    var m = Ii;
                }
            else
                (u = s.nodeName) &&
                    'input' === u.toLowerCase() &&
                    ('checkbox' === s.type || 'radio' === s.type) &&
                    (g = Di);
            switch (
                (g && (g = g(e, r))
                    ? xi(a, g, n, i)
                    : (m && m(e, s, r),
                      'focusout' === e &&
                          (m = s._wrapperState) &&
                          m.controlled &&
                          'number' === s.type &&
                          Bt(s, 'number', s.value)),
                (m = r ? ta(r) : window),
                e)
            ) {
                case 'focusin':
                    (Oi(m) || 'true' === m.contentEditable) && ((Xi = m), (Yi = r), (Ji = null));
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
            var y;
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
                (mi &&
                    'ko' !== n.locale &&
                    (Si || 'onCompositionStart' !== b
                        ? 'onCompositionEnd' === b && Si && (y = Rr())
                        : ((Ur = 'value' in (jr = i) ? jr.value : jr.textContent), (Si = !0))),
                0 < (m = Po(r, b)).length &&
                    ((b = new ei(b, e, null, n, i)),
                    a.push({ event: b, listeners: m }),
                    y ? (b.data = y) : null !== (y = wi(n)) && (b.data = y))),
                (y = gi
                    ? (function (e, t) {
                          switch (e) {
                              case 'compositionend':
                                  return wi(t);
                              case 'keypress':
                                  return 32 !== t.which ? null : ((bi = !0), yi);
                              case 'textInput':
                                  return (e = t.data) === yi && bi ? null : e;
                              default:
                                  return null;
                          }
                      })(e, n)
                    : (function (e, t) {
                          if (Si)
                              return 'compositionend' === e || (!pi && _i(e, t))
                                  ? ((e = Rr()), (Br = Ur = jr = null), (Si = !1), e)
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
                    0 < (r = Po(r, 'onBeforeInput')).length &&
                    ((i = new ei('onBeforeInput', 'beforeinput', null, n, i)),
                    a.push({ event: i, listeners: r }),
                    (i.data = y)));
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
                ? null != (u = hn(n, o)) && a.unshift(Eo(n, u, s))
                : i || (null != (u = hn(n, o)) && a.push(Eo(n, u, s)))),
            (n = n.return));
    }
    0 !== a.length && e.push({ event: t, listeners: a });
}
var Co = /\r\n?/g,
    No = /\u0000|\uFFFD/g;
function jo(e) {
    return ('string' == typeof e ? e : '' + e).replace(Co, '\n').replace(No, '');
}
function Uo(e, t, n) {
    if (((t = jo(t)), jo(e) !== t && n)) throw Error(De(425));
}
function Bo() {}
var Ro = null,
    Wo = null;
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
    Do = 'function' == typeof clearTimeout ? clearTimeout : void 0,
    Vo = 'function' == typeof Promise ? Promise : void 0,
    Mo =
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
                if (0 === r) return (e.removeChild(i), void kr(t));
                r--;
            } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
        n = i;
    } while (n);
    kr(t);
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
    Ho = '__reactFiber$' + qo,
    Ko = '__reactProps$' + qo,
    Go = '__reactContainer$' + qo,
    Xo = '__reactEvents$' + qo,
    Yo = '__reactListeners$' + qo,
    Jo = '__reactHandles$' + qo;
function Zo(e) {
    var t = e[Ho];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Go] || n[Ho])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = Qo(e); null !== e; ) {
                    if ((n = e[Ho])) return n;
                    e = Qo(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function ea(e) {
    return !(e = e[Ho] || e[Go]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
}
function ta(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(De(33));
}
function na(e) {
    return e[Ko] || null;
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
    if (la.current !== ua) throw Error(De(168));
    (sa(la, t), sa(ca, n));
}
function ga(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
    for (var i in (r = r.getChildContext())) if (!(i in t)) throw Error(De(108, kt(e) || 'Unknown', i));
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
function ya(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(De(169));
    (n ? ((e = ga(e, t, fa)), (r.__reactInternalMemoizedMergedChildContext = e), aa(ca), aa(la), sa(la, e)) : aa(ca),
        sa(ca, n));
}
var ba = null,
    _a = !1,
    wa = !1;
function Sa(e) {
    null === ba ? (ba = [e]) : ba.push(e);
}
function ka() {
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
            throw (null !== ba && (ba = ba.slice(e + 1)), Tn(Bn, ka), i);
        } finally {
            ((er = t), (wa = !1));
        }
    }
    return null;
}
var Oa = [],
    xa = 0,
    Ea = null,
    Pa = 0,
    Ta = [],
    Aa = 0,
    Ca = null,
    Na = 1,
    ja = '';
function Ua(e, t) {
    ((Oa[xa++] = Pa), (Oa[xa++] = Ea), (Ea = e), (Pa = t));
}
function Ba(e, t, n) {
    ((Ta[Aa++] = Na), (Ta[Aa++] = ja), (Ta[Aa++] = Ca), (Ca = e));
    var r = Na;
    e = ja;
    var i = 32 - Mn(r) - 1;
    ((r &= ~(1 << i)), (n += 1));
    var o = 32 - Mn(t) + i;
    if (30 < o) {
        var a = i - (i % 5);
        ((o = (r & ((1 << a) - 1)).toString(32)),
            (r >>= a),
            (i -= a),
            (Na = (1 << (32 - Mn(t) + i)) | (n << i) | r),
            (ja = o + e));
    } else ((Na = (1 << o) | (n << i) | r), (ja = e));
}
function Ra(e) {
    null !== e.return && (Ua(e, 1), Ba(e, 1, 0));
}
function Wa(e) {
    for (; e === Ea; ) ((Ea = Oa[--xa]), (Oa[xa] = null), (Pa = Oa[--xa]), (Oa[xa] = null));
    for (; e === Ca; )
        ((Ca = Ta[--Aa]), (Ta[Aa] = null), (ja = Ta[--Aa]), (Ta[Aa] = null), (Na = Ta[--Aa]), (Ta[Aa] = null));
}
var Ia = null,
    La = null,
    Da = !1,
    Va = null;
function Ma(e, t) {
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
                ((n = null !== Ca ? { id: Na, overflow: ja } : null),
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
    if (Da) {
        var t = La;
        if (t) {
            var n = t;
            if (!za(e, t)) {
                if (Fa(e)) throw Error(De(418));
                t = $o(n.nextSibling);
                var r = Ia;
                t && za(e, t) ? Ma(r, n) : ((e.flags = (-4097 & e.flags) | 2), (Da = !1), (Ia = e));
            }
        } else {
            if (Fa(e)) throw Error(De(418));
            ((e.flags = (-4097 & e.flags) | 2), (Da = !1), (Ia = e));
        }
    }
}
function Qa(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
    Ia = e;
}
function qa(e) {
    if (e !== Ia) return !1;
    if (!Da) return (Qa(e), (Da = !0), !1);
    var t;
    if (
        ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = 'head' !== (t = e.type) && 'body' !== t && !Io(e.type, e.memoizedProps)),
        t && (t = La))
    ) {
        if (Fa(e)) throw (Ha(), Error(De(418)));
        for (; t; ) (Ma(e, t), (t = $o(t.nextSibling)));
    }
    if ((Qa(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(De(317));
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
function Ha() {
    for (var e = La; e; ) e = $o(e.nextSibling);
}
function Ka() {
    ((La = Ia = null), (Da = !1));
}
function Ga(e) {
    null === Va ? (Va = [e]) : Va.push(e);
}
var Xa = et.ReactCurrentBatchConfig;
function Ya(e, t, n) {
    if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
        if (n._owner) {
            if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(De(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(De(147, e));
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
        if ('string' != typeof e) throw Error(De(284));
        if (!n._owner) throw Error(De(290, e));
    }
    return e;
}
function Ja(e, t) {
    throw (
        (e = Object.prototype.toString.call(t)),
        Error(De(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e))
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
        return null === t || 6 !== t.tag ? (((t = yf(n, e.mode, r)).return = e), t) : (((t = i(t, n)).return = e), t);
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
            ? (((t = bf(n, e.mode, r)).return = e), t)
            : (((t = i(t, n.children || [])).return = e), t);
    }
    function c(e, t, n, r, o) {
        return null === t || 7 !== t.tag
            ? (((t = gf(n, e.mode, r, o)).return = e), t)
            : (((t = i(t, n)).return = e), t);
    }
    function f(e, t, n) {
        if (('string' == typeof t && '' !== t) || 'number' == typeof t)
            return (((t = yf('' + t, e.mode, n)).return = e), t);
        if ('object' == typeof t && null !== t) {
            switch (t.$$typeof) {
                case tt:
                    return (
                        ((n = vf(t.type, t.key, t.props, null, e.mode, n)).ref = Ya(e, null, t)),
                        (n.return = e),
                        n
                    );
                case nt:
                    return (((t = bf(t, e.mode, n)).return = e), t);
                case dt:
                    return f(e, (0, t._init)(t._payload), n);
            }
            if (Rt(t) || vt(t)) return (((t = gf(t, e.mode, n, null)).return = e), t);
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
            if (Rt(n) || vt(n)) return null !== i ? null : c(e, t, n, r, null);
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
            if (Rt(r) || vt(r)) return c(t, (e = e.get(n) || null), r, i, null);
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
                        (((l = bf(c, u.mode, p)).return = u), (u = l));
                    }
                    return a(u);
                case dt:
                    return s(u, l, (g = c._init)(c._payload), p);
            }
            if (Rt(c))
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
                    if (v === s.length) return (n(i, p), Da && Ua(i, v), l);
                    if (null === p) {
                        for (; v < s.length; v++)
                            null !== (p = f(i, s[v], u)) &&
                                ((a = o(p, a, v)), null === c ? (l = p) : (c.sibling = p), (c = p));
                        return (Da && Ua(i, v), l);
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
                        Da && Ua(i, v),
                        l
                    );
                })(u, l, c, p);
            if (vt(c))
                return (function (i, a, s, u) {
                    var l = vt(s);
                    if ('function' != typeof l) throw Error(De(150));
                    if (null == (s = l.call(s))) throw Error(De(151));
                    for (
                        var c = (l = null), p = a, v = (a = 0), g = null, m = s.next();
                        null !== p && !m.done;
                        v++, m = s.next()
                    ) {
                        p.index > v ? ((g = p), (p = null)) : (g = p.sibling);
                        var y = d(i, p, m.value, u);
                        if (null === y) {
                            null === p && (p = g);
                            break;
                        }
                        (e && p && null === y.alternate && t(i, p),
                            (a = o(y, a, v)),
                            null === c ? (l = y) : (c.sibling = y),
                            (c = y),
                            (p = g));
                    }
                    if (m.done) return (n(i, p), Da && Ua(i, v), l);
                    if (null === p) {
                        for (; !m.done; v++, m = s.next())
                            null !== (m = f(i, m.value, u)) &&
                                ((a = o(m, a, v)), null === c ? (l = m) : (c.sibling = m), (c = m));
                        return (Da && Ua(i, v), l);
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
                        Da && Ua(i, v),
                        l
                    );
                })(u, l, c, p);
            Ja(u, c);
        }
        return ('string' == typeof c && '' !== c) || 'number' == typeof c
            ? ((c = '' + c),
              null !== l && 6 === l.tag
                  ? (n(u, l.sibling), ((l = i(l, c)).return = u), (u = l))
                  : (n(u, l), ((l = yf(c, u.mode, p)).return = u), (u = l)),
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
            if (null === is) throw Error(De(308));
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
function ys(e, t) {
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
function ks(e, t, n, r) {
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
function Os(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (null !== i) {
                if (((r.callback = null), (r = n), 'function' != typeof i)) throw Error(De(191, i));
                i.call(r);
            }
        }
}
var xs = {},
    Es = oa(xs),
    Ps = oa(xs),
    Ts = oa(xs);
function As(e) {
    if (e === xs) throw Error(De(174));
    return e;
}
function Cs(e, t) {
    switch ((sa(Ts, t), sa(Ps, e), sa(Es, xs), (e = t.nodeType))) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : zt(null, '');
            break;
        default:
            t = zt((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
    }
    (aa(Es), sa(Es, t));
}
function Ns() {
    (aa(Es), aa(Ps), aa(Ts));
}
function js(e) {
    As(Ts.current);
    var t = As(Es.current),
        n = zt(t, e.type);
    t !== n && (sa(Ps, e), sa(Es, n));
}
function Us(e) {
    Ps.current === e && (aa(Es), aa(Ps));
}
var Bs = oa(0);
function Rs(e) {
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
var Ws = [];
function Is() {
    for (var e = 0; e < Ws.length; e++) Ws[e]._workInProgressVersionPrimary = null;
    Ws.length = 0;
}
var Ls = et.ReactCurrentDispatcher,
    Ds = et.ReactCurrentBatchConfig,
    Vs = 0,
    Ms = null,
    zs = null,
    Fs = null,
    $s = !1,
    Qs = !1,
    qs = 0,
    Hs = 0;
function Ks() {
    throw Error(De(321));
}
function Gs(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Mi(e[n], t[n])) return !1;
    return !0;
}
function Xs(e, t, n, r, i, o) {
    if (
        ((Vs = o),
        (Ms = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Ls.current = null === e || null === e.memoizedState ? Uu : Bu),
        (e = n(r, i)),
        Qs)
    ) {
        o = 0;
        do {
            if (((Qs = !1), (qs = 0), 25 <= o)) throw Error(De(301));
            ((o += 1), (Fs = zs = null), (t.updateQueue = null), (Ls.current = Ru), (e = n(r, i)));
        } while (Qs);
    }
    if (((Ls.current = ju), (t = null !== zs && null !== zs.next), (Vs = 0), (Fs = zs = Ms = null), ($s = !1), t))
        throw Error(De(300));
    return e;
}
function Ys() {
    var e = 0 !== qs;
    return ((qs = 0), e);
}
function Js() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (null === Fs ? (Ms.memoizedState = Fs = e) : (Fs = Fs.next = e), Fs);
}
function Zs() {
    if (null === zs) {
        var e = Ms.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = zs.next;
    var t = null === Fs ? Ms.memoizedState : Fs.next;
    if (null !== t) ((Fs = t), (zs = e));
    else {
        if (null === e) throw Error(De(310));
        ((e = {
            memoizedState: (zs = e).memoizedState,
            baseState: zs.baseState,
            baseQueue: zs.baseQueue,
            queue: zs.queue,
            next: null,
        }),
            null === Fs ? (Ms.memoizedState = Fs = e) : (Fs = Fs.next = e));
    }
    return Fs;
}
function eu(e, t) {
    return 'function' == typeof t ? t(e) : t;
}
function tu(e) {
    var t = Zs(),
        n = t.queue;
    if (null === n) throw Error(De(311));
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
                (null === u ? ((s = u = f), (a = r)) : (u = u.next = f), (Ms.lanes |= c), (gc |= c));
            }
            l = l.next;
        } while (null !== l && l !== o);
        (null === u ? (a = r) : (u.next = s),
            Mi(r, t.memoizedState) || (Zu = !0),
            (t.memoizedState = r),
            (t.baseState = a),
            (t.baseQueue = u),
            (n.lastRenderedState = r));
    }
    if (null !== (e = n.interleaved)) {
        i = e;
        do {
            ((o = i.lane), (Ms.lanes |= o), (gc |= o), (i = i.next));
        } while (i !== e);
    } else null === i && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function nu(e) {
    var t = Zs(),
        n = t.queue;
    if (null === n) throw Error(De(311));
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
        (Mi(o, t.memoizedState) || (Zu = !0),
            (t.memoizedState = o),
            null === t.baseQueue && (t.baseState = o),
            (n.lastRenderedState = o));
    }
    return [o, r];
}
function ru() {}
function iu(e, t) {
    var n = Ms,
        r = Zs(),
        i = t(),
        o = !Mi(r.memoizedState, i);
    if (
        (o && ((r.memoizedState = i), (Zu = !0)),
        (r = r.queue),
        gu(su.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (null !== Fs && 1 & Fs.memoizedState.tag))
    ) {
        if (((n.flags |= 2048), fu(9, au.bind(null, n, r, i, t), void 0, null), null === lc)) throw Error(De(349));
        0 != (30 & Vs) || ou(n, t, i);
    }
    return i;
}
function ou(e, t, n) {
    ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = Ms.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (Ms.updateQueue = t), (t.stores = [e]))
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
        return !Mi(e, n);
    } catch (r) {
        return !0;
    }
}
function lu(e) {
    var t = vs(e, 1);
    null !== t && Wc(t, e, 1, -1);
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
        (e = e.dispatch = Tu.bind(null, Ms, e)),
        [t.memoizedState, e]
    );
}
function fu(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = Ms.updateQueue)
            ? ((t = { lastEffect: null, stores: null }), (Ms.updateQueue = t), (t.lastEffect = e.next = e))
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
    ((Ms.flags |= e), (i.memoizedState = fu(1 | t, n, void 0, void 0 === r ? null : r)));
}
function pu(e, t, n, r) {
    var i = Zs();
    r = void 0 === r ? null : r;
    var o = void 0;
    if (null !== zs) {
        var a = zs.memoizedState;
        if (((o = a.destroy), null !== r && Gs(r, a.deps))) return void (i.memoizedState = fu(t, n, o, r));
    }
    ((Ms.flags |= e), (i.memoizedState = fu(1 | t, n, o, r)));
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
function yu(e, t) {
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
function ku(e, t) {
    var n = Zs();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Gs(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ou(e, t, n) {
    return 0 == (21 & Vs)
        ? (e.baseState && ((e.baseState = !1), (Zu = !0)), (e.memoizedState = n))
        : (Mi(n, t) || ((n = Xn()), (Ms.lanes |= n), (gc |= n), (e.baseState = !0)), t);
}
function xu(e, t) {
    var n = er;
    ((er = 0 !== n && 4 > n ? n : 4), e(!0));
    var r = Ds.transition;
    Ds.transition = {};
    try {
        (e(!1), t());
    } finally {
        ((er = n), (Ds.transition = r));
    }
}
function Eu() {
    return Zs().memoizedState;
}
function Pu(e, t, n) {
    var r = Rc(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Au(e))) Cu(t, n);
    else if (null !== (n = ps(e, t, n, r))) {
        (Wc(n, e, r, Bc()), Nu(n, t, r));
    }
}
function Tu(e, t, n) {
    var r = Rc(e),
        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Au(e)) Cu(t, i);
    else {
        var o = e.alternate;
        if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer))
            try {
                var a = t.lastRenderedState,
                    s = o(a, n);
                if (((i.hasEagerState = !0), (i.eagerState = s), Mi(s, a))) {
                    var u = t.interleaved;
                    return (
                        null === u ? ((i.next = i), hs(t)) : ((i.next = u.next), (u.next = i)),
                        void (t.interleaved = i)
                    );
                }
            } catch (l) {}
        null !== (n = ps(e, t, i, r)) && (Wc(n, e, r, (i = Bc())), Nu(n, t, r));
    }
}
function Au(e) {
    var t = e.alternate;
    return e === Ms || (null !== t && t === Ms);
}
function Cu(e, t) {
    Qs = $s = !0;
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
        useCallback: Ks,
        useContext: Ks,
        useEffect: Ks,
        useImperativeHandle: Ks,
        useInsertionEffect: Ks,
        useLayoutEffect: Ks,
        useMemo: Ks,
        useReducer: Ks,
        useRef: Ks,
        useState: Ks,
        useDebugValue: Ks,
        useDeferredValue: Ks,
        useTransition: Ks,
        useMutableSource: Ks,
        useSyncExternalStore: Ks,
        useId: Ks,
        unstable_isNewReconciler: !1,
    },
    Uu = {
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
                (e = e.dispatch = Pu.bind(null, Ms, e)),
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
            var r = Ms,
                i = Js();
            if (Da) {
                if (void 0 === n) throw Error(De(407));
                n = n();
            } else {
                if (((n = t()), null === lc)) throw Error(De(349));
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
            if (Da) {
                var n = ja;
                ((t = ':' + t + 'R' + (n = (Na & ~(1 << (32 - Mn(Na) - 1))).toString(32) + n)),
                    0 < (n = qs++) && (t += 'H' + n.toString(32)),
                    (t += ':'));
            } else t = ':' + t + 'r' + (n = Hs++).toString(32) + ':';
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Bu = {
        readContext: fs,
        useCallback: Su,
        useContext: fs,
        useEffect: gu,
        useImperativeHandle: _u,
        useInsertionEffect: mu,
        useLayoutEffect: yu,
        useMemo: ku,
        useReducer: tu,
        useRef: du,
        useState: function () {
            return tu(eu);
        },
        useDebugValue: wu,
        useDeferredValue: function (e) {
            return Ou(Zs(), zs.memoizedState, e);
        },
        useTransition: function () {
            return [tu(eu)[0], Zs().memoizedState];
        },
        useMutableSource: ru,
        useSyncExternalStore: iu,
        useId: Eu,
        unstable_isNewReconciler: !1,
    },
    Ru = {
        readContext: fs,
        useCallback: Su,
        useContext: fs,
        useEffect: gu,
        useImperativeHandle: _u,
        useInsertionEffect: mu,
        useLayoutEffect: yu,
        useMemo: ku,
        useReducer: nu,
        useRef: du,
        useState: function () {
            return nu(eu);
        },
        useDebugValue: wu,
        useDeferredValue: function (e) {
            var t = Zs();
            return null === zs ? (t.memoizedState = e) : Ou(t, zs.memoizedState, e);
        },
        useTransition: function () {
            return [nu(eu)[0], Zs().memoizedState];
        },
        useMutableSource: ru,
        useSyncExternalStore: iu,
        useId: Eu,
        unstable_isNewReconciler: !1,
    };
function Wu(e, t) {
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
        return !!(e = e._reactInternals) && kn(e) === e;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Bc(),
            i = Rc(e),
            o = bs(r, i);
        ((o.payload = t), null != n && (o.callback = n), null !== (t = _s(e, o, i)) && (Wc(t, e, i, r), ws(t, e, i)));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Bc(),
            i = Rc(e),
            o = bs(r, i);
        ((o.tag = 1),
            (o.payload = t),
            null != n && (o.callback = n),
            null !== (t = _s(e, o, i)) && (Wc(t, e, i, r), ws(t, e, i)));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Bc(),
            r = Rc(e),
            i = bs(n, r);
        ((i.tag = 2), null != t && (i.callback = t), null !== (t = _s(e, i, r)) && (Wc(t, e, r, n), ws(t, e, r)));
    },
};
function Du(e, t, n, r, i, o, a) {
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
function Mu(e, t, n, r) {
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
            ks(e, n, i, r),
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
function Hu(e, t, n) {
    (((n = bs(-1, n)).tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
        (n.callback = function () {
            (Oc || ((Oc = !0), (xc = r)), Qu(0, t));
        }),
        n
    );
}
function Ku(e, t, n) {
    (n = bs(-1, n)).tag = 3;
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
                (Qu(0, t), 'function' != typeof r && (null === Ec ? (Ec = new Set([this])) : Ec.add(this)));
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
        (r = Xs(e, t, n, r, o, i)),
        (n = Ys()),
        null === e || Zu
            ? (Da && n && Ra(t), (t.flags |= 1), el(e, t, r, i), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Ol(e, t, i))
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
        if ((n = null !== (n = n.compare) ? n : zi)(a, r) && e.ref === t.ref) return Ol(e, t, i);
    }
    return ((t.flags |= 1), ((e = pf(o, r)).ref = t.ref), (e.return = t), (t.child = e));
}
function rl(e, t, n, r, i) {
    if (null !== e) {
        var o = e.memoizedProps;
        if (zi(o, r) && e.ref === t.ref) {
            if (((Zu = !1), (t.pendingProps = r = o), 0 == (e.lanes & i))) return ((t.lanes = e.lanes), Ol(e, t, i));
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
            ? (Da && r && Ra(t), (t.flags |= 1), el(e, t, n, i), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Ol(e, t, i))
    );
}
function sl(e, t, n, r, i) {
    if (ha(n)) {
        var o = !0;
        ma(t);
    } else o = !1;
    if ((cs(t, i), null === t.stateNode)) (kl(e, t), Vu(t, n, r), zu(t, n, r, i), (r = !0));
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
            ((s !== r || u !== l) && Mu(t, a, r, l)),
            (gs = !1));
        var d = t.memoizedState;
        ((a.state = d),
            ks(t, r, a, i),
            (u = t.memoizedState),
            s !== r || d !== u || ca.current || gs
                ? ('function' == typeof c && (Iu(t, n, c, r), (u = t.memoizedState)),
                  (s = gs || Du(t, n, s, r, d, u, l))
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
            ys(e, t),
            (s = t.memoizedProps),
            (l = t.type === t.elementType ? s : Wu(t.type, s)),
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
            ((s !== f || d !== u) && Mu(t, a, r, u)),
            (gs = !1),
            (d = t.memoizedState),
            (a.state = d),
            ks(t, r, a, i));
        var p = t.memoizedState;
        s !== f || d !== p || ca.current || gs
            ? ('function' == typeof h && (Iu(t, n, h, r), (p = t.memoizedState)),
              (l = gs || Du(t, n, l, r, d, p, u) || !1)
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
    if (!r && !a) return (i && ya(t, n, !1), Ol(e, t, o));
    ((r = t.stateNode), (Ju.current = t));
    var s = a && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
    return (
        (t.flags |= 1),
        null !== e && a ? ((t.child = ts(t, e.child, null, o)), (t.child = ts(t, null, s, o))) : el(e, t, s, o),
        (t.memoizedState = r.state),
        i && ya(t, n, !0),
        t.child
    );
}
function ll(e) {
    var t = e.stateNode;
    (t.pendingContext ? va(0, t.pendingContext, t.pendingContext !== t.context) : t.context && va(0, t.context, !1),
        Cs(e, t.containerInfo));
}
function cl(e, t, n, r, i) {
    return (Ka(), Ga(i), (t.flags |= 256), el(e, t, n, r), t.child);
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
        o = Bs.current,
        a = !1,
        s = 0 != (128 & t.flags);
    if (
        ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)),
        r ? ((a = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (o |= 1),
        sa(Bs, 1 & o),
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
                      : yl(t, s))
        );
    if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
        return (function (e, t, n, r, i, o, a) {
            if (n)
                return 256 & t.flags
                    ? ((t.flags &= -257), bl(e, t, a, (r = $u(Error(De(422))))))
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
            if (0 == (1 & t.mode)) return bl(e, t, a, null);
            if ('$!' === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset)) var s = r.dgst;
                return ((r = s), bl(e, t, a, (r = $u((o = Error(De(419))), r, void 0))));
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
                        ((o.retryLane = i), vs(e, i), Wc(r, e, i, -1));
                }
                return (Gc(), bl(e, t, a, (r = $u(Error(De(421))))));
            }
            return '$?' === i.data
                ? ((t.flags |= 128), (t.child = e.child), (t = uf.bind(null, e)), (i._reactRetry = t), null)
                : ((e = o.treeContext),
                  (La = $o(i.nextSibling)),
                  (Ia = t),
                  (Da = !0),
                  (Va = null),
                  null !== e &&
                      ((Ta[Aa++] = Na), (Ta[Aa++] = ja), (Ta[Aa++] = Ca), (Na = e.id), (ja = e.overflow), (Ca = t)),
                  (t = yl(t, r.children)),
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
function yl(e, t) {
    return (((t = mf({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t));
}
function bl(e, t, n, r) {
    return (
        null !== r && Ga(r),
        ts(t, e.child, null, n),
        ((e = yl(t, t.pendingProps.children)).flags |= 2),
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
    if ((el(e, t, r.children, n), 0 != (2 & (r = Bs.current)))) ((r = (1 & r) | 2), (t.flags |= 128));
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
    if ((sa(Bs, r), 0 == (1 & t.mode))) t.memoizedState = null;
    else
        switch (i) {
            case 'forwards':
                for (n = t.child, i = null; null !== n; )
                    (null !== (e = n.alternate) && null === Rs(e) && (i = n), (n = n.sibling));
                (null === (n = i) ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
                    wl(t, !1, i, n, o));
                break;
            case 'backwards':
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                    if (null !== (e = i.alternate) && null === Rs(e)) {
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
function kl(e, t) {
    0 == (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ol(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (gc |= t.lanes), 0 == (n & t.childLanes))) return null;
    if (null !== e && t.child !== e.child) throw Error(De(153));
    if (null !== t.child) {
        for (n = pf((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            ((e = e.sibling), ((n = n.sibling = pf(e, e.pendingProps)).return = t));
        n.sibling = null;
    }
    return t.child;
}
function xl(e, t) {
    if (!Da)
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
    switch ((Wa(t), t.tag)) {
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
                Is(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                    (qa(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                          ((t.flags |= 1024), null !== Va && (Vc(Va), (Va = null)))),
                dl(e, t),
                El(t),
                null
            );
        case 5:
            Us(t);
            var i = As(Ts.current);
            if (((n = t.type), null !== e && null != t.stateNode))
                (hl(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(De(166));
                    return (El(t), null);
                }
                if (((e = As(Es.current)), qa(t))) {
                    ((r = t.stateNode), (n = t.type));
                    var o = t.memoizedProps;
                    switch (((r[Ho] = t), (r[Ko] = o), (e = 0 != (1 & t.mode)), n)) {
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
                                      (!0 !== o.suppressHydrationWarning && Uo(r.textContent, s, e),
                                      (i = ['children', s]))
                                    : 'number' == typeof s &&
                                      r.textContent !== '' + s &&
                                      (!0 !== o.suppressHydrationWarning && Uo(r.textContent, s, e),
                                      (i = ['children', '' + s]))
                                : Me.hasOwnProperty(a) && null != s && 'onScroll' === a && _o('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            (Et(r), Ut(r, o, !0));
                            break;
                        case 'textarea':
                            (Et(r), Vt(r));
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            'function' == typeof o.onClick && (r.onclick = Bo);
                    }
                    ((r = i), (t.updateQueue = r), null !== r && (t.flags |= 4));
                } else {
                    ((a = 9 === i.nodeType ? i : i.ownerDocument),
                        'http://www.w3.org/1999/xhtml' === e && (e = Mt(n)),
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
                        (e[Ho] = t),
                        (e[Ko] = r),
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
                                (Ct(e, r), (i = At(e, r)), _o('invalid', e));
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
                                          (Me.hasOwnProperty(o)
                                              ? null != u && 'onScroll' === o && _o('scroll', e)
                                              : null != u && Ze(e, o, u, a));
                            }
                        switch (n) {
                            case 'input':
                                (Et(e), Ut(e, r, !1));
                                break;
                            case 'textarea':
                                (Et(e), Vt(e));
                                break;
                            case 'option':
                                null != r.value && e.setAttribute('value', '' + Ot(r.value));
                                break;
                            case 'select':
                                ((e.multiple = !!r.multiple),
                                    null != (o = r.value)
                                        ? Wt(e, !!r.multiple, o, !1)
                                        : null != r.defaultValue && Wt(e, !!r.multiple, r.defaultValue, !0));
                                break;
                            default:
                                'function' == typeof i.onClick && (e.onclick = Bo);
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
                if ('string' != typeof r && null === t.stateNode) throw Error(De(166));
                if (((n = As(Ts.current)), As(Es.current), qa(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Ho] = t),
                        (o = r.nodeValue !== n) && null !== (e = Ia))
                    )
                        switch (e.tag) {
                            case 3:
                                Uo(r.nodeValue, n, 0 != (1 & e.mode));
                                break;
                            case 5:
                                !0 !== e.memoizedProps.suppressHydrationWarning &&
                                    Uo(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                    o && (t.flags |= 4);
                } else (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Ho] = t), (t.stateNode = r));
            }
            return (El(t), null);
        case 13:
            if (
                (aa(Bs),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (Da && null !== La && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                    (Ha(), Ka(), (t.flags |= 98560), (o = !1));
                else if (((o = qa(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!o) throw Error(De(318));
                        if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null)) throw Error(De(317));
                        o[Ho] = t;
                    } else (Ka(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                    (El(t), (o = !1));
                } else (null !== Va && (Vc(Va), (Va = null)), (o = !0));
                if (!o) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) && (null === e || 0 != (1 & Bs.current) ? 0 === pc && (pc = 3) : Gc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  El(t),
                  null);
        case 4:
            return (Ns(), dl(e, t), null === e && ko(t.stateNode.containerInfo), El(t), null);
        case 10:
            return (us(t.type._context), El(t), null);
        case 19:
            if ((aa(Bs), null === (o = t.memoizedState))) return (El(t), null);
            if (((r = 0 != (128 & t.flags)), null === (a = o.rendering)))
                if (r) xl(o, !1);
                else {
                    if (0 !== pc || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (a = Rs(e))) {
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
                                return (sa(Bs, (1 & Bs.current) | 2), t.child);
                            }
                            e = e.sibling;
                        }
                    null !== o.tail && jn() > Sc && ((t.flags |= 128), (r = !0), xl(o, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = Rs(a))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            xl(o, !0),
                            null === o.tail && 'hidden' === o.tailMode && !a.alternate && !Da)
                        )
                            return (El(t), null);
                    } else
                        2 * jn() - o.renderingStartTime > Sc &&
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
                  (o.renderingStartTime = jn()),
                  (t.sibling = null),
                  (n = Bs.current),
                  sa(Bs, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (El(t), null);
        case 22:
        case 23:
            return (
                Qc(),
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
    throw Error(De(156, t.tag));
}
function Tl(e, t) {
    switch ((Wa(t), t.tag)) {
        case 1:
            return (ha(t.type) && pa(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null);
        case 3:
            return (
                Ns(),
                aa(ca),
                aa(la),
                Is(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 5:
            return (Us(t), null);
        case 13:
            if ((aa(Bs), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(De(340));
                Ka();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return (aa(Bs), null);
        case 4:
            return (Ns(), null);
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
            ((e = t.stateNode), As(Es.current));
            var o,
                a = null;
            switch (n) {
                case 'input':
                    ((i = At(e, i)), (r = At(e, r)), (a = []));
                    break;
                case 'select':
                    ((i = mt({}, i, { value: void 0 })), (r = mt({}, r, { value: void 0 })), (a = []));
                    break;
                case 'textarea':
                    ((i = It(e, i)), (r = It(e, r)), (a = []));
                    break;
                default:
                    'function' != typeof i.onClick && 'function' == typeof r.onClick && (e.onclick = Bo);
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
                            (Me.hasOwnProperty(l) ? a || (a = []) : (a = a || []).push(l, null));
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
                                (Me.hasOwnProperty(l)
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
    Cl = !1,
    Nl = 'function' == typeof WeakSet ? WeakSet : Set,
    jl = null;
function Ul(e, t) {
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
function Bl(e, t, n) {
    try {
        n();
    } catch (r) {
        of(e, t, r);
    }
}
var Rl = !1;
function Wl(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var i = (r = r.next);
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                ((i.destroy = void 0), void 0 !== o && Bl(t, n, o));
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
function Dl(e) {
    var t = e.alternate;
    (null !== t && ((e.alternate = null), Dl(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[Ho], delete t[Ko], delete t[Xo], delete t[Yo], delete t[Jo]),
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
function Ml(e) {
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
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Bo)));
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
    for (n = n.child; null !== n; ) (Hl(e, t, n), (n = n.sibling));
}
function Hl(e, t, n) {
    if (Vn && 'function' == typeof Vn.onCommitFiberUnmount)
        try {
            Vn.onCommitFiberUnmount(Dn, n);
        } catch (s) {}
    switch (n.tag) {
        case 5:
            Cl || Ul(n, t);
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
                      kr(e))
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
                    ((o = o.tag), void 0 !== a && (0 != (2 & o) || 0 != (4 & o)) && Bl(n, t, a), (i = i.next));
                } while (i !== r);
            }
            ql(e, t, n);
            break;
        case 1:
            if (!Cl && (Ul(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount))
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
function Kl(e) {
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
                            (($l = s.stateNode), (Ql = !1));
                            break e;
                        case 3:
                        case 4:
                            (($l = s.stateNode.containerInfo), (Ql = !0));
                            break e;
                    }
                    s = s.return;
                }
                if (null === $l) throw Error(De(160));
                (Hl(o, a, i), ($l = null), (Ql = !1));
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
                    (Wl(3, e, e.return), Il(3, e));
                } catch (v) {
                    of(e, e.return, v);
                }
                try {
                    Wl(5, e, e.return);
                } catch (v) {
                    of(e, e.return, v);
                }
            }
            break;
        case 1:
            (Gl(t, e), Yl(e), 512 & r && null !== n && Ul(n, n.return));
            break;
        case 5:
            if ((Gl(t, e), Yl(e), 512 & r && null !== n && Ul(n, n.return), 32 & e.flags)) {
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
                        ('input' === s && 'radio' === o.type && null != o.name && Nt(i, o), Zt(s, a));
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
                                jt(i, o);
                                break;
                            case 'textarea':
                                Dt(i, o);
                                break;
                            case 'select':
                                var d = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!o.multiple;
                                var h = o.value;
                                null != h
                                    ? Wt(i, !!o.multiple, h, !1)
                                    : d !== !!o.multiple &&
                                      (null != o.defaultValue
                                          ? Wt(i, !!o.multiple, o.defaultValue, !0)
                                          : Wt(i, !!o.multiple, o.multiple ? [] : '', !1));
                        }
                        i[Ko] = o;
                    } catch (v) {
                        of(e, e.return, v);
                    }
            }
            break;
        case 6:
            if ((Gl(t, e), Yl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(De(162));
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
                    kr(t.containerInfo);
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
                    !o || (null !== i.alternate && null !== i.alternate.memoizedState) || (wc = jn())),
                4 & r && Kl(e));
            break;
        case 22:
            if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Cl = (l = Cl) || c), Gl(t, e), (Cl = l)) : Gl(t, e),
                Yl(e),
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
                                    Wl(4, d, d.return);
                                    break;
                                case 1:
                                    Ul(d, d.return);
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
                                    Ul(d, d.return);
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
            (Gl(t, e), Yl(e), 4 & r && Kl(e));
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
                throw Error(De(160));
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    (32 & r.flags && (qt(i, ''), (r.flags &= -33)), Fl(e, Ml(e), i));
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo;
                    zl(e, Ml(e), o);
                    break;
                default:
                    throw Error(De(161));
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
                    u = (null !== s && null !== s.memoizedState) || Cl;
                s = Al;
                var l = Cl;
                if (((Al = a), (Cl = u) && !l))
                    for (jl = i; null !== jl; )
                        ((u = (a = jl).child),
                            22 === a.tag && null !== a.memoizedState
                                ? nc(i)
                                : null !== u
                                  ? ((u.return = a), (jl = u))
                                  : nc(i));
                for (; null !== o; ) ((jl = o), Zl(o), (o = o.sibling));
                ((jl = i), (Al = s), (Cl = l));
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
                            Cl || Il(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (4 & t.flags && !Cl)
                                if (null === n) r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : Wu(t.type, n.memoizedProps);
                                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var o = t.updateQueue;
                            null !== o && Os(t, o, r);
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
                                Os(t, a, n);
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
                                        null !== f && kr(f);
                                    }
                                }
                            }
                            break;
                        default:
                            throw Error(De(163));
                    }
                Cl || (512 & t.flags && Ll(t));
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
    gc = 0,
    mc = 0,
    yc = 0,
    bc = null,
    _c = null,
    wc = 0,
    Sc = 1 / 0,
    kc = null,
    Oc = !1,
    xc = null,
    Ec = null,
    Pc = !1,
    Tc = null,
    Ac = 0,
    Cc = 0,
    Nc = null,
    jc = -1,
    Uc = 0;
function Bc() {
    return 0 != (6 & uc) ? jn() : -1 !== jc ? jc : (jc = jn());
}
function Rc(e) {
    return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & uc) && 0 !== fc
          ? fc & -fc
          : null !== Xa.transition
            ? (0 === Uc && (Uc = Xn()), Uc)
            : 0 !== (e = er)
              ? e
              : (e = void 0 === (e = window.event) ? 16 : Nr(e.type));
}
function Wc(e, t, n, r) {
    if (50 < Cc) throw ((Cc = 0), (Nc = null), Error(De(185)));
    (Jn(e, n, r),
        (0 != (2 & uc) && e === lc) ||
            (e === lc && (0 == (2 & uc) && (mc |= n), 4 === pc && Mc(e, fc)),
            Ic(e, r),
            1 === n && 0 === uc && 0 == (1 & t.mode) && ((Sc = jn() + 500), _a && ka())));
}
function Ic(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
            var a = 31 - Mn(o),
                s = 1 << a,
                u = i[a];
            (-1 === u ? (0 != (s & n) && 0 == (s & r)) || (i[a] = Kn(s, t)) : u <= t && (e.expiredLanes |= s),
                (o &= ~s));
        }
    })(e, t);
    var r = Hn(e, e === lc ? fc : 0);
    if (0 === r) (null !== n && An(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && An(n), 1 === t))
            (0 === e.tag
                ? (function (e) {
                      ((_a = !0), Sa(e));
                  })(zc.bind(null, e))
                : Sa(zc.bind(null, e)),
                Mo(function () {
                    0 == (6 & uc) && ka();
                }),
                (n = null));
        else {
            switch (tr(r)) {
                case 1:
                    n = Bn;
                    break;
                case 4:
                    n = Rn;
                    break;
                case 16:
                default:
                    n = Wn;
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
    if (((jc = -1), (Uc = 0), 0 != (6 & uc))) throw Error(De(327));
    var n = e.callbackNode;
    if (nf() && e.callbackNode !== n) return null;
    var r = Hn(e, e === lc ? fc : 0);
    if (0 === r) return null;
    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = Xc(e, r);
    else {
        t = r;
        var i = uc;
        uc |= 2;
        var o = Kc();
        for ((lc === e && fc === t) || ((kc = null), (Sc = jn() + 500), qc(e, t)); ; )
            try {
                Jc();
                break;
            } catch (s) {
                Hc(e, s);
            }
        (ss(), (oc.current = o), (uc = i), null !== cc ? (t = 0) : ((lc = null), (fc = 0), (t = pc)));
    }
    if (0 !== t) {
        if ((2 === t && 0 !== (i = Gn(e)) && ((r = i), (t = Dc(e, i))), 1 === t))
            throw ((n = vc), qc(e, 0), Mc(e, r), Ic(e, jn()), n);
        if (6 === t) Mc(e, r);
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
                                            if (!Mi(o(), i)) return !1;
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
                    (2 === (t = Xc(e, r)) && 0 !== (o = Gn(e)) && ((r = o), (t = Dc(e, o))), 1 === t))
            )
                throw ((n = vc), qc(e, 0), Mc(e, r), Ic(e, jn()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(De(345));
                case 2:
                case 5:
                    tf(e, _c, kc);
                    break;
                case 3:
                    if ((Mc(e, r), (130023424 & r) === r && 10 < (t = wc + 500 - jn()))) {
                        if (0 !== Hn(e, 0)) break;
                        if (((i = e.suspendedLanes) & r) !== r) {
                            (Bc(), (e.pingedLanes |= e.suspendedLanes & i));
                            break;
                        }
                        e.timeoutHandle = Lo(tf.bind(null, e, _c, kc), t);
                        break;
                    }
                    tf(e, _c, kc);
                    break;
                case 4:
                    if ((Mc(e, r), (4194240 & r) === r)) break;
                    for (t = e.eventTimes, i = -1; 0 < r; ) {
                        var a = 31 - Mn(r);
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
                        e.timeoutHandle = Lo(tf.bind(null, e, _c, kc), r);
                        break;
                    }
                    tf(e, _c, kc);
                    break;
                default:
                    throw Error(De(329));
            }
        }
    }
    return (Ic(e, jn()), e.callbackNode === n ? Lc.bind(null, e) : null);
}
function Dc(e, t) {
    var n = bc;
    return (
        e.current.memoizedState.isDehydrated && (qc(e, t).flags |= 256),
        2 !== (e = Xc(e, t)) && ((t = _c), (_c = n), null !== t && Vc(t)),
        e
    );
}
function Vc(e) {
    null === _c ? (_c = e) : _c.push.apply(_c, e);
}
function Mc(e, t) {
    for (t &= ~yc, t &= ~mc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Mn(t),
            r = 1 << n;
        ((e[n] = -1), (t &= ~r));
    }
}
function zc(e) {
    if (0 != (6 & uc)) throw Error(De(327));
    nf();
    var t = Hn(e, 0);
    if (0 == (1 & t)) return (Ic(e, jn()), null);
    var n = Xc(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = Gn(e);
        0 !== r && ((t = r), (n = Dc(e, r)));
    }
    if (1 === n) throw ((n = vc), qc(e, 0), Mc(e, t), Ic(e, jn()), n);
    if (6 === n) throw Error(De(345));
    return ((e.finishedWork = e.current.alternate), (e.finishedLanes = t), tf(e, _c, kc), Ic(e, jn()), null);
}
function Fc(e, t) {
    var n = uc;
    uc |= 1;
    try {
        return e(t);
    } finally {
        0 === (uc = n) && ((Sc = jn() + 500), _a && ka());
    }
}
function $c(e) {
    null !== Tc && 0 === Tc.tag && 0 == (6 & uc) && nf();
    var t = uc;
    uc |= 1;
    var n = sc.transition,
        r = er;
    try {
        if (((sc.transition = null), (er = 1), e)) return e();
    } finally {
        ((er = r), (sc.transition = n), 0 == (6 & (uc = t)) && ka());
    }
}
function Qc() {
    ((dc = hc.current), aa(hc));
}
function qc(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), Do(n)), null !== cc))
        for (n = cc.return; null !== n; ) {
            var r = n;
            switch ((Wa(r), r.tag)) {
                case 1:
                    null != (r = r.type.childContextTypes) && pa();
                    break;
                case 3:
                    (Ns(), aa(ca), aa(la), Is());
                    break;
                case 5:
                    Us(r);
                    break;
                case 4:
                    Ns();
                    break;
                case 13:
                case 19:
                    aa(Bs);
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
        (yc = mc = gc = 0),
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
function Hc(e, t) {
    for (;;) {
        var n = cc;
        try {
            if ((ss(), (Ls.current = ju), $s)) {
                for (var r = Ms.memoizedState; null !== r; ) {
                    var i = r.queue;
                    (null !== i && (i.pending = null), (r = r.next));
                }
                $s = !1;
            }
            if (
                ((Vs = 0),
                (Fs = zs = Ms = null),
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
                    u = Error(De(426));
                } else if (Da && 1 & s.mode) {
                    var g = Xu(a);
                    if (null !== g) {
                        (0 == (65536 & g.flags) && (g.flags |= 256), Yu(g, a, s, 0, t), Ga(Fu(u, s)));
                        break e;
                    }
                }
                ((o = u = Fu(u, s)), 4 !== pc && (pc = 2), null === bc ? (bc = [o]) : bc.push(o), (o = a));
                do {
                    switch (o.tag) {
                        case 3:
                            ((o.flags |= 65536), (t &= -t), (o.lanes |= t), Ss(o, Hu(0, u, t)));
                            break e;
                        case 1:
                            s = u;
                            var m = o.type,
                                y = o.stateNode;
                            if (
                                0 == (128 & o.flags) &&
                                ('function' == typeof m.getDerivedStateFromError ||
                                    (null !== y &&
                                        'function' == typeof y.componentDidCatch &&
                                        (null === Ec || !Ec.has(y))))
                            ) {
                                ((o.flags |= 65536), (t &= -t), (o.lanes |= t), Ss(o, Ku(o, s, t)));
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
function Kc() {
    var e = oc.current;
    return ((oc.current = ju), null === e ? ju : e);
}
function Gc() {
    ((0 !== pc && 3 !== pc && 2 !== pc) || (pc = 4),
        null === lc || (0 == (268435455 & gc) && 0 == (268435455 & mc)) || Mc(lc, fc));
}
function Xc(e, t) {
    var n = uc;
    uc |= 2;
    var r = Kc();
    for ((lc === e && fc === t) || ((kc = null), qc(e, t)); ; )
        try {
            Yc();
            break;
        } catch (i) {
            Hc(e, i);
        }
    if ((ss(), (uc = n), (oc.current = r), null !== cc)) throw Error(De(261));
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
            if (null !== (n = Pl(n, t, dc))) return void (cc = n);
        } else {
            if (null !== (n = Tl(n, t))) return ((n.flags &= 32767), void (cc = n));
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
                } while (null !== Tc);
                if (0 != (6 & uc)) throw Error(De(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(De(177));
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
                            var i = 31 - Mn(n),
                                o = 1 << i;
                            ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o));
                        }
                    })(e, o),
                    e === lc && ((cc = lc = null), (fc = 0)),
                    (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                        Pc ||
                        ((Pc = !0),
                        cf(Wn, function () {
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
                            if (((Ro = xr), Hi((e = qi())))) {
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
                            for (Wo = { focusedElem: e, selectionRange: n }, xr = !1, jl = t; null !== jl; )
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
                                                                g = p.memoizedState,
                                                                m = t.stateNode,
                                                                y = m.getSnapshotBeforeUpdate(
                                                                    t.elementType === t.type ? v : Wu(t.type, v),
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
                                                        throw Error(De(163));
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
                            ((p = Rl), (Rl = !1));
                        })(e, n),
                        Xl(n, e),
                        Ki(Wo),
                        (xr = !!Ro),
                        (Wo = Ro = null),
                        (e.current = n),
                        Jl(n),
                        Nn(),
                        (uc = s),
                        (er = a),
                        (sc.transition = o));
                } else e.current = n;
                if (
                    (Pc && ((Pc = !1), (Tc = e), (Ac = i)),
                    (o = e.pendingLanes),
                    0 === o && (Ec = null),
                    (function (e) {
                        if (Vn && 'function' == typeof Vn.onCommitFiberRoot)
                            try {
                                Vn.onCommitFiberRoot(Dn, e, void 0, 128 == (128 & e.current.flags));
                            } catch (t) {}
                    })(n.stateNode),
                    Ic(e, jn()),
                    null !== t)
                )
                    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                        ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
                if (Oc) throw ((Oc = !1), (e = xc), (xc = null), e);
                (0 != (1 & Ac) && 0 !== e.tag && nf(),
                    (o = e.pendingLanes),
                    0 != (1 & o) ? (e === Nc ? Cc++ : ((Cc = 0), (Nc = e))) : (Cc = 0),
                    ka());
            })(e, t, n, r));
    } finally {
        ((sc.transition = i), (er = r));
    }
    return null;
}
function nf() {
    if (null !== Tc) {
        var e = tr(Ac),
            t = sc.transition,
            n = er;
        try {
            if (((sc.transition = null), (er = 16 > e ? 16 : e), null === Tc)) var r = !1;
            else {
                if (((e = Tc), (Tc = null), (Ac = 0), 0 != (6 & uc))) throw Error(De(331));
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
                                            Wl(8, c, o);
                                    }
                                    var f = c.child;
                                    if (null !== f) ((f.return = c), (jl = f));
                                    else
                                        for (; null !== jl; ) {
                                            var d = (c = jl).sibling,
                                                h = c.return;
                                            if ((Dl(c), c === l)) {
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
                                        var g = v.sibling;
                                        ((v.sibling = null), (v = g));
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
                                        Wl(9, o, o.return);
                                }
                            var m = o.sibling;
                            if (null !== m) {
                                ((m.return = o.return), (jl = m));
                                break e;
                            }
                            jl = o.return;
                        }
                }
                var y = e.current;
                for (jl = y; null !== jl; ) {
                    var b = (a = jl).child;
                    if (0 != (2064 & a.subtreeFlags) && null !== b) ((b.return = a), (jl = b));
                    else
                        e: for (a = y; null !== jl; ) {
                            if (0 != (2048 & (s = jl).flags))
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
                if (((uc = i), ka(), Vn && 'function' == typeof Vn.onPostCommitFiberRoot))
                    try {
                        Vn.onPostCommitFiberRoot(Dn, e);
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
    ((e = _s(e, (t = Hu(0, (t = Fu(n, t)), 1)), 1)), (t = Bc()), null !== e && (Jn(e, 1, t), Ic(e, t)));
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
                    ((t = _s(t, (e = Ku(t, (e = Fu(n, e)), 1)), 1)), (e = Bc()), null !== t && (Jn(t, 1, e), Ic(t, e)));
                    break;
                }
            }
            t = t.return;
        }
}
function af(e, t, n) {
    var r = e.pingCache;
    (null !== r && r.delete(t),
        (t = Bc()),
        (e.pingedLanes |= e.suspendedLanes & n),
        lc === e &&
            (fc & n) === n &&
            (4 === pc || (3 === pc && (130023424 & fc) === fc && 500 > jn() - wc) ? qc(e, 0) : (yc |= n)),
        Ic(e, t));
}
function sf(e, t) {
    0 === t && (0 == (1 & e.mode) ? (t = 1) : ((t = Qn), 0 == (130023424 & (Qn <<= 1)) && (Qn = 4194304)));
    var n = Bc();
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
            throw Error(De(314));
    }
    (null !== r && r.delete(t), sf(e, n));
}
function cf(e, t) {
    return Tn(e, t);
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
                throw Error(De(130, null == e ? e : typeof e, ''));
        }
    return (((t = df(a, n, t, i)).elementType = e), (t.type = r), (t.lanes = o), t);
}
function gf(e, t, n, r) {
    return (((e = df(7, e, r, t)).lanes = n), e);
}
function mf(e, t, n, r) {
    return (((e = df(22, e, r, t)).elementType = ht), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e);
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
        if (kn((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(De(170));
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
        throw Error(De(171));
    }
    if (1 === e.tag) {
        var n = e.type;
        if (ha(n)) return ga(e, n, t);
    }
    return t;
}
function kf(e, t, n, r, i, o, a, s, u) {
    return (
        ((e = wf(n, r, !0, e, 0, o, 0, s, u)).context = Sf(null)),
        (n = e.current),
        ((o = bs((r = Bc()), (i = Rc(n)))).callback = null != t ? t : null),
        _s(n, o, i),
        (e.current.lanes = i),
        Jn(e, i, r),
        Ic(e, r),
        e
    );
}
function Of(e, t, n, r) {
    var i = t.current,
        o = Bc(),
        a = Rc(i);
    return (
        (n = Sf(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = bs(o, a)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = _s(i, t, a)) && (Wc(e, i, a, o), ws(e, i, a)),
        a
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
        if (e.memoizedProps !== t.pendingProps || ca.current) Zu = !0;
        else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                    (Zu = !1),
                    (function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                (ll(t), Ka());
                                break;
                            case 5:
                                js(t);
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
                                        ? (sa(Bs, 1 & Bs.current), (t.flags |= 128), null)
                                        : 0 != (n & t.child.childLanes)
                                          ? ml(e, t, n)
                                          : (sa(Bs, 1 & Bs.current), null !== (e = Ol(e, t, n)) ? e.sibling : null);
                                sa(Bs, 1 & Bs.current);
                                break;
                            case 19:
                                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                    if (r) return Sl(e, t, n);
                                    t.flags |= 128;
                                }
                                if (
                                    (null !== (i = t.memoizedState) &&
                                        ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                                    sa(Bs, Bs.current),
                                    r)
                                )
                                    break;
                                return null;
                            case 22:
                            case 23:
                                return ((t.lanes = 0), il(e, t, n));
                        }
                        return Ol(e, t, n);
                    })(e, t, n)
                );
            Zu = 0 != (131072 & e.flags);
        }
    else ((Zu = !1), Da && 0 != (1048576 & t.flags) && Ba(t, Pa, t.index));
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            (kl(e, t), (e = t.pendingProps));
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
                    : ((t.tag = 0), Da && o && Ra(t), el(null, t, i, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (kl(e, t),
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
                    (e = Wu(r, e)),
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
                        t = nl(null, t, r, Wu(r.type, e), n);
                        break e;
                }
                throw Error(De(306, r, ''));
            }
            return t;
        case 0:
            return ((r = t.type), (i = t.pendingProps), al(e, t, r, (i = t.elementType === r ? i : Wu(r, i)), n));
        case 1:
            return ((r = t.type), (i = t.pendingProps), sl(e, t, r, (i = t.elementType === r ? i : Wu(r, i)), n));
        case 3:
            e: {
                if ((ll(t), null === e)) throw Error(De(387));
                ((r = t.pendingProps), (i = (o = t.memoizedState).element), ys(e, t), ks(t, r, null, n));
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
                        t = cl(e, t, r, n, (i = Fu(Error(De(423)), t)));
                        break e;
                    }
                    if (r !== i) {
                        t = cl(e, t, r, n, (i = Fu(Error(De(424)), t)));
                        break e;
                    }
                    for (
                        La = $o(t.stateNode.containerInfo.firstChild),
                            Ia = t,
                            Da = !0,
                            Va = null,
                            n = ns(t, null, r, n),
                            t.child = n;
                        n;

                    )
                        ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                    if ((Ka(), r === i)) {
                        t = Ol(e, t, n);
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
            return ((r = t.type), (i = t.pendingProps), tl(e, t, r, (i = t.elementType === r ? i : Wu(r, i)), n));
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
                    if (Mi(o.value, a)) {
                        if (o.children === i.children && !ca.current) {
                            t = Ol(e, t, n);
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
                                if (null === (a = o.return)) throw Error(De(341));
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
            return ((i = Wu((r = t.type), t.pendingProps)), nl(e, t, r, (i = Wu(r.type, i)), n));
        case 15:
            return rl(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Wu(r, i)),
                kl(e, t),
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
    throw Error(De(156, t.tag));
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
function Cf(e) {
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
function Uf() {}
function Bf(e, t, n, r, i) {
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
        Of(t, a, e, i);
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
                var a = kf(t, r, e, 0, null, !1, 0, '', Uf);
                return (
                    (e._reactRootContainer = a),
                    (e[Go] = a.current),
                    ko(8 === e.nodeType ? e.parentNode : e),
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
            var u = wf(e, 0, !1, null, 0, !1, 0, '', Uf);
            return (
                (e._reactRootContainer = u),
                (e[Go] = u.current),
                ko(8 === e.nodeType ? e.parentNode : e),
                $c(function () {
                    Of(t, u, n, r);
                }),
                u
            );
        })(n, t, e, i, r);
    return xf(a);
}
((Cf.prototype.render = Af.prototype.render =
    function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(De(409));
        Of(e, t, null, null);
    }),
    (Cf.prototype.unmount = Af.prototype.unmount =
        function () {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                ($c(function () {
                    Of(null, e, null, null);
                }),
                    (t[Go] = null));
            }
        }),
    (Cf.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = or();
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
                    var n = qn(t.pendingLanes);
                    0 !== n && (Zn(t, 1 | n), Ic(t, jn()), 0 == (6 & uc) && ((Sc = jn() + 500), ka()));
                }
                break;
            case 13:
                ($c(function () {
                    var t = vs(e, 1);
                    if (null !== t) {
                        var n = Bc();
                        Wc(t, e, 1, n);
                    }
                }),
                    Pf(e, 1));
        }
    }),
    (rr = function (e) {
        if (13 === e.tag) {
            var t = vs(e, 134217728);
            if (null !== t) Wc(t, e, 134217728, Bc());
            Pf(e, 134217728);
        }
    }),
    (ir = function (e) {
        if (13 === e.tag) {
            var t = Rc(e),
                n = vs(e, t);
            if (null !== n) Wc(n, e, t, Bc());
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
                            if (!i) throw Error(De(90));
                            (Pt(r), jt(r, i));
                        }
                    }
                }
                break;
            case 'textarea':
                Dt(e, n);
                break;
            case 'select':
                null != (t = n.value) && Wt(e, !!n.multiple, t, !1);
        }
    }),
    (ln = Fc),
    (cn = $c));
var Rf = { usingClientEntryPoint: !1, Events: [ea, ta, na, sn, un, Fc] },
    Wf = { findFiberByHostInstance: Zo, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    If = {
        bundleType: Wf.bundleType,
        version: Wf.version,
        rendererPackageName: Wf.rendererPackageName,
        rendererConfig: Wf.rendererConfig,
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
            Wf.findFiberByHostInstance ||
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
            ((Dn = Lf.inject(If)), (Vn = Lf));
        } catch ($t) {}
}
((Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rf),
    (Ue.createPortal = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Nf(t)) throw Error(De(200));
        return (function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: nt, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
        })(e, t, null, n);
    }),
    (Ue.createRoot = function (e, t) {
        if (!Nf(e)) throw Error(De(299));
        var n = !1,
            r = '',
            i = Tf;
        return (
            null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
            (t = wf(e, 1, !1, null, 0, n, 0, r, i)),
            (e[Go] = t.current),
            ko(8 === e.nodeType ? e.parentNode : e),
            new Af(t)
        );
    }),
    (Ue.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
            if ('function' == typeof e.render) throw Error(De(188));
            throw ((e = Object.keys(e).join(',')), Error(De(268, e)));
        }
        return (e = null === (e = En(t)) ? null : e.stateNode);
    }),
    (Ue.flushSync = function (e) {
        return $c(e);
    }),
    (Ue.hydrate = function (e, t, n) {
        if (!jf(t)) throw Error(De(200));
        return Bf(null, e, t, !0, n);
    }),
    (Ue.hydrateRoot = function (e, t, n) {
        if (!Nf(e)) throw Error(De(405));
        var r = (null != n && n.hydratedSources) || null,
            i = !1,
            o = '',
            a = Tf;
        if (
            (null != n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
            (t = kf(t, null, e, 1, null != n ? n : null, i, 0, o, a)),
            (e[Go] = t.current),
            ko(e),
            r)
        )
            for (e = 0; e < r.length; e++)
                ((i = (i = (n = r[e])._getVersion)(n._source)),
                    null == t.mutableSourceEagerHydrationData
                        ? (t.mutableSourceEagerHydrationData = [n, i])
                        : t.mutableSourceEagerHydrationData.push(n, i));
        return new Cf(t);
    }),
    (Ue.render = function (e, t, n) {
        if (!jf(t)) throw Error(De(200));
        return Bf(null, e, t, !1, n);
    }),
    (Ue.unmountComponentAtNode = function (e) {
        if (!jf(e)) throw Error(De(40));
        return (
            !!e._reactRootContainer &&
            ($c(function () {
                Bf(null, null, e, !1, function () {
                    ((e._reactRootContainer = null), (e[Go] = null));
                });
            }),
            !0)
        );
    }),
    (Ue.unstable_batchedUpdates = Fc),
    (Ue.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!jf(n)) throw Error(De(200));
        if (null == e || void 0 === e._reactInternals) throw Error(De(38));
        return Bf(e, t, n, !1, r);
    }),
    (Ue.version = '18.3.1-next-f1338f8080-20240426'),
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
    (je.exports = Ue));
var Df = je.exports;
const Vf = e(Df);
var Mf = Df;
((Ne.createRoot = Mf.createRoot), (Ne.hydrateRoot = Mf.hydrateRoot));
var zf,
    Ff = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ((zf = Ff),
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
        zf.exports ? ((t.default = t), (zf.exports = t)) : (window.classNames = t);
    })());
const $f = e(Ff.exports);
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
var qf = {};
function Hf() {
    return 'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : qf;
}
var Kf = Object.assign,
    Gf = Object.getOwnPropertyDescriptor,
    Xf = Object.defineProperty,
    Yf = Object.prototype,
    Jf = [];
Object.freeze(Jf);
var Zf = {};
Object.freeze(Zf);
var ed = 'undefined' != typeof Proxy,
    td = Object.toString();
function nd() {
    ed || Qf('Proxy not available');
}
function rd(e) {
    var t = !1;
    return function () {
        if (!t) return ((t = !0), e.apply(this, arguments));
    };
}
var id = function () {};
function od(e) {
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
function sd(e) {
    return null !== e && 'object' == typeof e;
}
function ud(e) {
    if (!sd(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (null == t) return !0;
    var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n.toString() === td;
}
function ld(e) {
    var t = null == e ? void 0 : e.constructor;
    return !!t && ('GeneratorFunction' === t.name || 'GeneratorFunction' === t.displayName);
}
function cd(e, t, n) {
    Xf(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function fd(e, t, n) {
    Xf(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function dd(e, t) {
    var n = 'isMobX' + e;
    return (
        (t.prototype[n] = !0),
        function (e) {
            return sd(e) && !0 === e[n];
        }
    );
}
function hd(e) {
    return e instanceof Map;
}
function pd(e) {
    return e instanceof Set;
}
var vd = void 0 !== Object.getOwnPropertySymbols;
var gd =
    'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : vd
          ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            }
          : Object.getOwnPropertyNames;
function md(e) {
    return null === e ? null : 'object' == typeof e ? '' + e : e;
}
function yd(e, t) {
    return Yf.hasOwnProperty.call(e, t);
}
var bd =
    Object.getOwnPropertyDescriptors ||
    function (e) {
        var t = {};
        return (
            gd(e).forEach(function (n) {
                t[n] = Gf(e, n);
            }),
            t
        );
    };
function _d(e, t) {
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
function wd(e, t, n) {
    return (t && _d(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function Sd() {
    return (
        (Sd = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Sd.apply(this, arguments)
    );
}
function kd(e, t) {
    ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Od(e, t));
}
function Od(e, t) {
    return (Od = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return ((e.__proto__ = t), e);
          })(e, t);
}
function xd(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function Ed(e, t) {
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
                if ('string' == typeof e) return Ed(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? Ed(e, t)
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
        if (Nd(n)) return e.decorate_20223_(t, n);
        Cd(t, n, e);
    }, e);
}
function Cd(e, t, n) {
    (yd(e, Td) || cd(e, Td, Sd({}, e[Td])),
        (function (e) {
            return e.annotationType_ === Dd;
        })(n) || (e[Td][t] = n));
}
function Nd(e) {
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
                (this.lowestObserverState_ = Lh.NOT_TRACKING_),
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
                return cp(this);
            }),
            (t.reportChanged = function () {
                (up(), fp(this), lp());
            }),
            (t.toString = function () {
                return this.name_;
            }),
            e
        );
    })(),
    Bd = dd('Atom', Ud);
function Rd(e, t, n) {
    (void 0 === t && (t = id), void 0 === n && (n = id));
    var r,
        i = new Ud(e);
    return (t !== id && Rp(jp, i, t, r), n !== id && Bp(i, n), i);
}
var Wd = {
    structural: function (e, t) {
        return rg(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
};
function Id(e, t, n) {
    return Yp(e)
        ? e
        : Array.isArray(e)
          ? Sh.array(e, { name: n })
          : ud(e)
            ? Sh.object(e, void 0, { name: n })
            : hd(e)
              ? Sh.map(e, { name: n })
              : pd(e)
                ? Sh.set(e, { name: n })
                : 'function' != typeof e || Tp(e) || Kp(e)
                  ? e
                  : ld(e)
                    ? qp(e)
                    : Pp(n, e);
}
function Ld(e) {
    return e;
}
var Dd = 'override';
function Vd(e, t) {
    return { annotationType_: e, options_: t, make_: Md, extend_: zd, decorate_20223_: Fd };
}
function Md(e, t, n, r) {
    var i;
    if (null != (i = this.options_) && i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (Tp(n.value)) return 1;
    var o = $d(e, this, t, n, !1);
    return (Xf(r, t, o), 2);
}
function zd(e, t, n, r) {
    var i = $d(e, this, t, n);
    return e.defineProperty_(t, i, r);
}
function Fd(e, t) {
    var n = t.kind,
        r = t.name,
        i = t.addInitializer,
        o = this;
    if ('field' != n) {
        var a, s, u, l, c, f;
        if ('method' == n)
            return (
                Tp(e) ||
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
            Cd(this, r, o);
        });
}
function $d(e, t, n, r, i) {
    var o, a, s, u, l, c, f, d;
    (void 0 === i && (i = ip.safeDescriptors), (d = r), t.annotationType_, d.value);
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
function Qd(e, t) {
    return { annotationType_: e, options_: t, make_: qd, extend_: Hd, decorate_20223_: Kd };
}
function qd(e, t, n, r) {
    var i;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (
        null != (i = this.options_) &&
        i.bound &&
        (!yd(e.target_, t) || !Kp(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
    )
        return 0;
    if (Kp(n.value)) return 1;
    var o = Gd(e, this, t, n, !1, !1);
    return (Xf(r, t, o), 2);
}
function Hd(e, t, n, r) {
    var i,
        o = Gd(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
    return e.defineProperty_(t, o, r);
}
function Kd(e, t) {
    var n,
        r = t.name,
        i = t.addInitializer;
    return (
        Kp(e) || (e = qp(e)),
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
function Gd(e, t, n, r, i, o) {
    var a;
    (void 0 === o && (o = ip.safeDescriptors), (a = r), t.annotationType_, a.value);
    var s,
        u = r.value;
    (Kp(u) || (u = qp(u)), i) && ((u = u.bind(null != (s = e.proxy_) ? s : e.target_)).isMobXFlow = !0);
    return { value: u, configurable: !o || e.isPlainObject_, enumerable: !1, writable: !o };
}
function Xd(e, t) {
    return { annotationType_: e, options_: t, make_: Yd, extend_: Jd, decorate_20223_: Zd };
}
function Yd(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function Jd(e, t, n, r) {
    var i;
    return (
        (i = n),
        this.annotationType_,
        i.get,
        e.defineComputedProperty_(t, Sd({}, this.options_, { get: n.get, set: n.set }), r)
    );
}
function Zd(e, t) {
    var n = this,
        r = t.name;
    return (
        (0, t.addInitializer)(function () {
            var t = Wv(this)[jd],
                i = Sd({}, n.options_, { get: e, context: this });
            (i.name || (i.name = 'ObservableObject.' + r.toString()), t.values_.set(r, new zh(i)));
        }),
        function () {
            return this[jd].getObservablePropValue_(r);
        }
    );
}
function eh(e, t) {
    return { annotationType_: e, options_: t, make_: th, extend_: nh, decorate_20223_: rh };
}
function th(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function nh(e, t, n, r) {
    var i, o;
    return (
        this.annotationType_,
        e.defineObservableProperty_(
            t,
            n.value,
            null != (i = null == (o = this.options_) ? void 0 : o.enhancer) ? i : Id,
            r,
        )
    );
}
function rh(e, t) {
    var n = this,
        r = t.kind,
        i = t.name,
        o = new WeakSet();
    function a(e, t) {
        var r,
            a,
            s = Wv(e)[jd],
            u = new Ih(
                t,
                null != (r = null == (a = n.options_) ? void 0 : a.enhancer) ? r : Id,
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
var ih = 'true',
    oh = ah();
function ah(e) {
    return { annotationType_: ih, options_: e, make_: sh, extend_: uh, decorate_20223_: lh };
}
function sh(e, t, n, r) {
    var i, o, a, s;
    if (n.get) return Eh.make_(e, t, n, r);
    if (n.set) {
        var u = jh(t.toString(), n.set);
        return r === e.target_
            ? null === e.defineProperty_(t, { configurable: !ip.safeDescriptors || e.isPlainObject_, set: u })
                ? 0
                : 2
            : (Xf(r, t, { configurable: !0, set: u }), 2);
    }
    if (r !== e.target_ && 'function' == typeof n.value)
        return ld(n.value)
            ? (null != (s = this.options_) && s.autoBind ? qp.bound : qp).make_(e, t, n, r)
            : (null != (a = this.options_) && a.autoBind ? Pp.bound : Pp).make_(e, t, n, r);
    var l,
        c = !1 === (null == (i = this.options_) ? void 0 : i.deep) ? Sh.ref : Sh;
    'function' == typeof n.value &&
        null != (o = this.options_) &&
        o.autoBind &&
        (n.value = n.value.bind(null != (l = e.proxy_) ? l : e.target_));
    return c.make_(e, t, n, r);
}
function uh(e, t, n, r) {
    var i, o, a;
    if (n.get) return Eh.extend_(e, t, n, r);
    if (n.set)
        return e.defineProperty_(
            t,
            { configurable: !ip.safeDescriptors || e.isPlainObject_, set: jh(t.toString(), n.set) },
            r,
        );
    'function' == typeof n.value &&
        null != (i = this.options_) &&
        i.autoBind &&
        (n.value = n.value.bind(null != (a = e.proxy_) ? a : e.target_));
    return (!1 === (null == (o = this.options_) ? void 0 : o.deep) ? Sh.ref : Sh).extend_(e, t, n, r);
}
function lh(e, t) {
    Qf("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var ch = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
function fh(e) {
    return e || ch;
}
Object.freeze(ch);
var dh = eh('observable'),
    hh = eh('observable.ref', { enhancer: Ld }),
    ph = eh('observable.shallow', {
        enhancer: function (e, t, n) {
            return null == e || Dv(e) || Sv(e) || Av(e) || jv(e)
                ? e
                : Array.isArray(e)
                  ? Sh.array(e, { name: n, deep: !1 })
                  : ud(e)
                    ? Sh.object(e, void 0, { name: n, deep: !1 })
                    : hd(e)
                      ? Sh.map(e, { name: n, deep: !1 })
                      : pd(e)
                        ? Sh.set(e, { name: n, deep: !1 })
                        : void 0;
        },
    }),
    vh = eh('observable.struct', {
        enhancer: function (e, t) {
            return rg(e, t) ? t : e;
        },
    }),
    gh = Ad(dh);
function mh(e) {
    return !0 === e.deep
        ? Id
        : !1 === e.deep
          ? Ld
          : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
            ? n
            : Id;
    var t, n, r;
}
function yh(e, t, n) {
    return Nd(t)
        ? dh.decorate_20223_(e, t)
        : ad(t)
          ? void Cd(e, t, dh)
          : Yp(e)
            ? e
            : ud(e)
              ? Sh.object(e, t, n)
              : Array.isArray(e)
                ? Sh.array(e, t)
                : hd(e)
                  ? Sh.map(e, t)
                  : pd(e)
                    ? Sh.set(e, t)
                    : 'object' == typeof e && null !== e
                      ? e
                      : Sh.box(e, t);
}
Kf(yh, gh);
var bh,
    _h,
    wh = {
        box: function (e, t) {
            var n = fh(t);
            return new Ih(e, mh(n), n.name, !0, n.equals);
        },
        array: function (e, t) {
            var n = fh(t);
            return (!1 === ip.useProxies || !1 === n.proxy ? Yv : hv)(e, mh(n), n.name);
        },
        map: function (e, t) {
            var n = fh(t);
            return new Tv(e, mh(n), n.name);
        },
        set: function (e, t) {
            var n = fh(t);
            return new Nv(e, mh(n), n.name);
        },
        object: function (e, t, n) {
            return tg(function () {
                return Vp(
                    !1 === ip.useProxies || !1 === (null == n ? void 0 : n.proxy)
                        ? Wv({}, n)
                        : (function (e, t) {
                              var n, r;
                              return (
                                  nd(),
                                  (e = Wv(e, t)),
                                  null != (r = (n = e[jd]).proxy_) ? r : (n.proxy_ = new Proxy(e, tv))
                              );
                          })({}, n),
                    e,
                    t,
                );
            });
        },
        ref: Ad(hh),
        shallow: Ad(ph),
        deep: gh,
        struct: Ad(vh),
    },
    Sh = Kf(yh, wh),
    kh = 'computed',
    Oh = Xd(kh),
    xh = Xd('computed.struct', { equals: Wd.structural }),
    Eh = function (e, t) {
        if (Nd(t)) return Oh.decorate_20223_(e, t);
        if (ad(t)) return Cd(e, t, Oh);
        if (ud(e)) return Ad(Xd(kh, e));
        var n = ud(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new zh(n));
    };
(Object.assign(Eh, Oh), (Eh.struct = Ad(xh)));
var Ph,
    Th = 0,
    Ah = 1,
    Ch = null != (bh = null == (_h = Gf(function () {}, 'name')) ? void 0 : _h.configurable) && bh,
    Nh = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
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
        Ch && ((Nh.value = e), Xf(i, 'name', Nh)),
        i
    );
}
function Uh(e, t, n, r, i) {
    var o = (function (e, t, n, r) {
        var i = !1,
            o = 0,
            a = ip.trackingDerivation,
            s = !t || !a;
        up();
        var u = ip.allowStateChanges;
        s && (Xh(), (u = Bh(!0)));
        var l = Jh(!0),
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
            ((Th = e.parentActionId_), void 0 !== e.error_ && (ip.suppressReactionErrors = !0));
            (Rh(e.prevAllowStateChanges_), Zh(e.prevAllowStateReads_), lp(), e.runAsAction_ && Yh(e.prevDerivation_));
            ip.suppressReactionErrors = !1;
        })(o);
    }
}
function Bh(e) {
    var t = ip.allowStateChanges;
    return ((ip.allowStateChanges = e), t);
}
function Rh(e) {
    ip.allowStateChanges = e;
}
Ph = Symbol.toPrimitive;
var Wh,
    Ih = (function (e) {
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
        kd(t, e);
        var n = t.prototype;
        return (
            (n.dehanceValue = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
                (this.value_, (e = this.prepareNewValue_(e)) !== ip.UNCHANGED && this.setNewValue_(e));
            }),
            (n.prepareNewValue_ = function (e) {
                if (nv(this)) {
                    var t = iv(this, { object: this, type: cv, newValue: e });
                    if (!t) return ip.UNCHANGED;
                    e = t.newValue;
                }
                return (
                    (e = this.enhancer(e, this.value_, this.name_)),
                    this.equals(this.value_, e) ? ip.UNCHANGED : e
                );
            }),
            (n.setNewValue_ = function (e) {
                var t = this.value_;
                ((this.value_ = e),
                    this.reportChanged(),
                    ov(this) && sv(this, { type: cv, object: this, newValue: e, oldValue: t }));
            }),
            (n.get = function () {
                return (this.reportObserved(), this.dehanceValue(this.value_));
            }),
            (n.intercept_ = function (e) {
                return rv(this, e);
            }),
            (n.observe_ = function (e, t) {
                return (
                    t &&
                        e({
                            observableKind: 'value',
                            debugObjectName: this.name_,
                            object: this,
                            type: cv,
                            newValue: this.value_,
                            oldValue: void 0,
                        }),
                    av(this, e)
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
            (n[Ph] = function () {
                return this.valueOf();
            }),
            t
        );
    })(Ud);
Wh = Symbol.toPrimitive;
var Lh,
    Dh,
    Vh,
    Mh,
    zh = (function () {
        function e(e) {
            ((this.dependenciesState_ = Lh.NOT_TRACKING_),
                (this.observing_ = []),
                (this.newObserving_ = null),
                (this.isBeingObserved_ = !1),
                (this.isPendingUnobservation_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Lh.UP_TO_DATE_),
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
                e.get || Qf(31),
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
                    if (e.lowestObserverState_ !== Lh.UP_TO_DATE_) return;
                    ((e.lowestObserverState_ = Lh.POSSIBLY_STALE_),
                        e.observers_.forEach(function (e) {
                            e.dependenciesState_ === Lh.UP_TO_DATE_ &&
                                ((e.dependenciesState_ = Lh.POSSIBLY_STALE_), e.onBecomeStale_());
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
                    0 !== ip.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                ) {
                    if ((cp(this), qh(this))) {
                        var e = ip.trackingContext;
                        (this.keepAlive_ && !e && (ip.trackingContext = this),
                            this.trackAndCompute() &&
                                (function (e) {
                                    if (e.lowestObserverState_ === Lh.STALE_) return;
                                    ((e.lowestObserverState_ = Lh.STALE_),
                                        e.observers_.forEach(function (t) {
                                            t.dependenciesState_ === Lh.POSSIBLY_STALE_
                                                ? (t.dependenciesState_ = Lh.STALE_)
                                                : t.dependenciesState_ === Lh.UP_TO_DATE_ &&
                                                  (e.lowestObserverState_ = Lh.UP_TO_DATE_);
                                        }));
                                })(this),
                            (ip.trackingContext = e));
                    }
                } else qh(this) && (this.warnAboutUntrackedRead_(), up(), (this.value_ = this.computeValue_(!1)), lp());
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
                    t = this.dependenciesState_ === Lh.NOT_TRACKING_,
                    n = this.computeValue_(!0),
                    r = t || Qh(e) || Qh(n) || !this.equals_(e, n);
                return (r && (this.value_ = n), r);
            }),
            (t.computeValue_ = function (e) {
                this.isComputing_ = !0;
                var t,
                    n = Bh(!1);
                if (e) t = Hh(this, this.derivation, this.scope_);
                else if (!0 === ip.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                else
                    try {
                        t = this.derivation.call(this.scope_);
                    } catch (r) {
                        t = new $h(r);
                    }
                return (Rh(n), (this.isComputing_ = !1), t);
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
                    void 0 === t && (t = Zf);
                    var s,
                        u = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun';
                    if (t.scheduler || t.delay) {
                        var l = Cp(t),
                            c = !1;
                        s = new dp(
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
                        s = new dp(
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
                        var a = Xh();
                        (e({
                            observableKind: 'computed',
                            debugObjectName: n.name_,
                            type: cv,
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
                return md(this.get());
            }),
            (t[Wh] = function () {
                return this.valueOf();
            }),
            e
        );
    })(),
    Fh = dd('ComputedValue', zh);
(((Dh = Lh || (Lh = {}))[(Dh.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
    (Dh[(Dh.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
    (Dh[(Dh.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
    (Dh[(Dh.STALE_ = 2)] = 'STALE_'),
    ((Mh = Vh || (Vh = {}))[(Mh.NONE = 0)] = 'NONE'),
    (Mh[(Mh.LOG = 1)] = 'LOG'),
    (Mh[(Mh.BREAK = 2)] = 'BREAK'));
var $h = function (e) {
    ((this.cause = void 0), (this.cause = e));
};
function Qh(e) {
    return e instanceof $h;
}
function qh(e) {
    switch (e.dependenciesState_) {
        case Lh.UP_TO_DATE_:
            return !1;
        case Lh.NOT_TRACKING_:
        case Lh.STALE_:
            return !0;
        case Lh.POSSIBLY_STALE_:
            for (var t = Jh(!0), n = Xh(), r = e.observing_, i = r.length, o = 0; o < i; o++) {
                var a = r[o];
                if (Fh(a)) {
                    if (ip.disableErrorBoundaries) a.get();
                    else
                        try {
                            a.get();
                        } catch (s) {
                            return (Yh(n), Zh(t), !0);
                        }
                    if (e.dependenciesState_ === Lh.STALE_) return (Yh(n), Zh(t), !0);
                }
            }
            return (ep(e), Yh(n), Zh(t), !1);
    }
}
function Hh(e, t, n) {
    var r = Jh(!0);
    (ep(e),
        (e.newObserving_ = new Array(e.observing_.length + 100)),
        (e.unboundDepsCount_ = 0),
        (e.runId_ = ++ip.runId));
    var i,
        o = ip.trackingDerivation;
    if (((ip.trackingDerivation = e), ip.inBatch++, !0 === ip.disableErrorBoundaries)) i = t.call(n);
    else
        try {
            i = t.call(n);
        } catch (a) {
            i = new $h(a);
        }
    return (
        ip.inBatch--,
        (ip.trackingDerivation = o),
        (function (e) {
            for (
                var t = e.observing_,
                    n = (e.observing_ = e.newObserving_),
                    r = Lh.UP_TO_DATE_,
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
                (0 === u.diffValue_ && ap(u, e), (u.diffValue_ = 0));
            }
            for (; i--; ) {
                var l = n[i];
                1 === l.diffValue_ && ((l.diffValue_ = 0), op(l, e));
            }
            r !== Lh.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        Zh(r),
        i
    );
}
function Kh(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) ap(t[n], e);
    e.dependenciesState_ = Lh.NOT_TRACKING_;
}
function Gh(e) {
    var t = Xh();
    try {
        return e();
    } finally {
        Yh(t);
    }
}
function Xh() {
    var e = ip.trackingDerivation;
    return ((ip.trackingDerivation = null), e);
}
function Yh(e) {
    ip.trackingDerivation = e;
}
function Jh(e) {
    var t = ip.allowStateReads;
    return ((ip.allowStateReads = e), t);
}
function Zh(e) {
    ip.allowStateReads = e;
}
function ep(e) {
    if (e.dependenciesState_ !== Lh.UP_TO_DATE_) {
        e.dependenciesState_ = Lh.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = Lh.UP_TO_DATE_;
    }
}
var tp = function () {
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
    np = !0,
    rp = !1,
    ip = (function () {
        var e = Hf();
        return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (np = !1),
            e.__mobxGlobals && e.__mobxGlobals.version !== new tp().version && (np = !1),
            np
                ? e.__mobxGlobals
                    ? ((e.__mobxInstanceCount += 1),
                      e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                      e.__mobxGlobals)
                    : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new tp()))
                : (setTimeout(function () {
                      rp || Qf(35);
                  }, 1),
                  new tp())
        );
    })();
function op(e, t) {
    (e.observers_.add(t),
        e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_));
}
function ap(e, t) {
    (e.observers_.delete(t), 0 === e.observers_.size && sp(e));
}
function sp(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), ip.pendingUnobservations.push(e));
}
function up() {
    ip.inBatch++;
}
function lp() {
    if (0 == --ip.inBatch) {
        vp();
        for (var e = ip.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            ((n.isPendingUnobservation_ = !1),
                0 === n.observers_.size &&
                    (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof zh && n.suspend_()));
        }
        ip.pendingUnobservations = [];
    }
}
function cp(e) {
    var t = ip.trackingDerivation;
    return null !== t
        ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ && ip.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
          e.isBeingObserved_)
        : (0 === e.observers_.size && ip.inBatch > 0 && sp(e), !1);
}
function fp(e) {
    e.lowestObserverState_ !== Lh.STALE_ &&
        ((e.lowestObserverState_ = Lh.STALE_),
        e.observers_.forEach(function (e) {
            (e.dependenciesState_ === Lh.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = Lh.STALE_));
        }));
}
var dp = (function () {
        function e(e, t, n, r) {
            (void 0 === e && (e = 'Reaction'),
                (this.name_ = void 0),
                (this.onInvalidate_ = void 0),
                (this.errorHandler_ = void 0),
                (this.requiresObservable_ = void 0),
                (this.observing_ = []),
                (this.newObserving_ = []),
                (this.dependenciesState_ = Lh.NOT_TRACKING_),
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
                this.isScheduled_ || ((this.isScheduled_ = !0), ip.pendingReactions.push(this), vp());
            }),
            (t.isScheduled = function () {
                return this.isScheduled_;
            }),
            (t.runReaction_ = function () {
                if (!this.isDisposed_) {
                    (up(), (this.isScheduled_ = !1));
                    var e = ip.trackingContext;
                    if (((ip.trackingContext = this), qh(this))) {
                        this.isTrackPending_ = !0;
                        try {
                            this.onInvalidate_();
                        } catch (t) {
                            this.reportExceptionInDerivation_(t);
                        }
                    }
                    ((ip.trackingContext = e), lp());
                }
            }),
            (t.track = function (e) {
                if (!this.isDisposed_) {
                    (up(), (this.isRunning_ = !0));
                    var t = ip.trackingContext;
                    ip.trackingContext = this;
                    var n = Hh(this, e, void 0);
                    ((ip.trackingContext = t),
                        (this.isRunning_ = !1),
                        (this.isTrackPending_ = !1),
                        this.isDisposed_ && Kh(this),
                        Qh(n) && this.reportExceptionInDerivation_(n.cause),
                        lp());
                }
            }),
            (t.reportExceptionInDerivation_ = function (e) {
                var t = this;
                if (this.errorHandler_) this.errorHandler_(e, this);
                else {
                    if (ip.disableErrorBoundaries) throw e;
                    var n = "[mobx] uncaught error in '" + this + "'";
                    (ip.suppressReactionErrors || console.error(n, e),
                        ip.globalReactionErrorHandlers.forEach(function (n) {
                            return n(e, t);
                        }));
                }
            }),
            (t.dispose = function () {
                this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (up(), Kh(this), lp()));
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
    hp = 100,
    pp = function (e) {
        return e();
    };
function vp() {
    ip.inBatch > 0 || ip.isRunningReactions || pp(gp);
}
function gp() {
    ip.isRunningReactions = !0;
    for (var e = ip.pendingReactions, t = 0; e.length > 0; ) {
        ++t === hp && (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
    }
    ip.isRunningReactions = !1;
}
var mp = dd('Reaction', dp);
var yp = 'action',
    bp = 'autoAction',
    _p = '<unnamed action>',
    wp = Vd(yp),
    Sp = Vd('action.bound', { bound: !0 }),
    kp = Vd(bp, { autoAction: !0 }),
    Op = Vd('autoAction.bound', { autoAction: !0, bound: !0 });
function xp(e) {
    return function (t, n) {
        return od(t)
            ? jh(t.name || _p, t, e)
            : od(n)
              ? jh(t, n, e)
              : Nd(n)
                ? (e ? kp : wp).decorate_20223_(t, n)
                : ad(n)
                  ? Cd(t, n, e ? kp : wp)
                  : ad(t)
                    ? Ad(Vd(e ? bp : yp, { name: t, autoAction: e }))
                    : void 0;
    };
}
var Ep = xp(!1);
Object.assign(Ep, wp);
var Pp = xp(!0);
function Tp(e) {
    return od(e) && !0 === e.isMobxAction;
}
(Object.assign(Pp, kp), (Ep.bound = Ad(Sp)), (Pp.bound = Ad(Op)));
var Ap = function (e) {
    return e();
};
function Cp(e) {
    return e.scheduler
        ? e.scheduler
        : e.delay
          ? function (t) {
                return setTimeout(t, e.delay);
            }
          : Ap;
}
function Np(e, t, n) {
    var r, i, o, a;
    void 0 === n && (n = Zf);
    var s,
        u,
        l,
        c,
        f = null != (r = n.name) ? r : 'Reaction',
        d = Ep(
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
        p = Cp(n),
        v = !0,
        g = !1,
        m = n.compareStructural ? Wd.structural : n.equals || Wd.default,
        y = new dp(
            f,
            function () {
                v || h ? b() : g || ((g = !0), p(b));
            },
            n.onError,
            n.requiresObservable,
        );
    function b() {
        if (((g = !1), !y.isDisposed_)) {
            var t = !1;
            (y.track(function () {
                var n = (function (e, t) {
                    var n = Bh(e);
                    try {
                        return t();
                    } finally {
                        Rh(n);
                    }
                })(!1, function () {
                    return e(y);
                });
                ((t = v || !m(l, n)), (c = l), (l = n));
            }),
                ((v && n.fireImmediately) || (!v && t)) && d(l, c, y),
                (v = !1));
        }
    }
    return (
        (null != (i = n) && null != (o = i.signal) && o.aborted) || y.schedule_(),
        y.getDisposer_(null == (a = n) ? void 0 : a.signal)
    );
}
var jp = 'onBO',
    Up = 'onBUO';
function Bp(e, t, n) {
    return Rp(Up, e, t, n);
}
function Rp(e, t, n, r) {
    var i = Jv(t),
        o = od(r) ? r : n,
        a = e + 'L';
    return (
        i[a] ? i[a].add(o) : (i[a] = new Set([o])),
        function () {
            var e = i[a];
            e && (e.delete(o), 0 === e.size && delete i[a]);
        }
    );
}
var Wp = 'never',
    Ip = 'always',
    Lp = 'observed';
function Dp(e) {
    !0 === e.isolateGlobalState &&
        (function () {
            if (((ip.pendingReactions.length || ip.inBatch || ip.isRunningReactions) && Qf(36), (rp = !0), np)) {
                var e = Hf();
                (0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0), (ip = new tp()));
            }
        })();
    var t,
        n,
        r = e.useProxies,
        i = e.enforceActions;
    if (
        (void 0 !== r && (ip.useProxies = r === Ip || (r !== Wp && 'undefined' != typeof Proxy)),
        'ifavailable' === r && (ip.verifyProxies = !0),
        void 0 !== i)
    ) {
        var o = i === Ip ? Ip : i === Lp;
        ((ip.enforceActions = o), (ip.allowStateChanges = !0 !== o && o !== Ip));
    }
    ([
        'computedRequiresReaction',
        'reactionRequiresObservable',
        'observableRequiresReaction',
        'disableErrorBoundaries',
        'safeDescriptors',
    ].forEach(function (t) {
        t in e && (ip[t] = !!e[t]);
    }),
        (ip.allowStateReads = !ip.observableRequiresReaction),
        e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = pp),
            (pp = function (e) {
                return t(function () {
                    return n(e);
                });
            })));
}
function Vp(e, t, n, r) {
    var i = bd(t);
    return (
        tg(function () {
            var t = Wv(e, r)[jd];
            gd(i).forEach(function (e) {
                t.extend_(e, i[e], !n || !(e in n) || n[e]);
            });
        }),
        e
    );
}
function Mp(e) {
    var t,
        n = { name: e.name_ };
    return (
        e.observing_ &&
            e.observing_.length > 0 &&
            (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(Mp)),
        n
    );
}
var zp = 0;
function Fp() {
    this.message = 'FLOW_CANCELLED';
}
Fp.prototype = Object.create(Error.prototype);
var $p = Qd('flow'),
    Qp = Qd('flow.bound', { bound: !0 }),
    qp = Object.assign(function (e, t) {
        if (Nd(t)) return $p.decorate_20223_(e, t);
        if (ad(t)) return Cd(e, t, $p);
        var n = e,
            r = n.name || '<unnamed flow>',
            i = function () {
                var e,
                    t = arguments,
                    i = ++zp,
                    o = Ep(r + ' - runid: ' + i + ' - init', n).apply(this, t),
                    a = void 0,
                    s = new Promise(function (t, n) {
                        var s = 0;
                        function u(e) {
                            var t;
                            a = void 0;
                            try {
                                t = Ep(r + ' - runid: ' + i + ' - yield ' + s++, o.next).call(o, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function l(e) {
                            var t;
                            a = void 0;
                            try {
                                t = Ep(r + ' - runid: ' + i + ' - yield ' + s++, o.throw).call(o, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function c(e) {
                            if (!od(null == e ? void 0 : e.then))
                                return e.done ? t(e.value) : (a = Promise.resolve(e.value)).then(u, l);
                            e.then(c, n);
                        }
                        ((e = n), u(void 0));
                    });
                return (
                    (s.cancel = Ep(r + ' - runid: ' + i + ' - cancel', function () {
                        try {
                            a && Hp(a);
                            var t = o.return(void 0),
                                n = Promise.resolve(t.value);
                            (n.then(id, id), Hp(n), e(new Fp()));
                        } catch (r) {
                            e(r);
                        }
                    })),
                    s
                );
            };
        return ((i.isMobXFlow = !0), i);
    }, $p);
function Hp(e) {
    od(e.cancel) && e.cancel();
}
function Kp(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function Gp(e, t) {
    if (void 0 === t) return Fh(e);
    if (!1 === Dv(e)) return !1;
    if (!e[jd].values_.has(t)) return !1;
    var n = Jv(e, t);
    return Fh(n);
}
function Xp(e, t) {
    return Gp(e, t);
}
function Yp(e) {
    return (function (e, t) {
        return !!e && (Dv(e) || !!e[jd] || Bd(e) || mp(e) || Fh(e));
    })(e);
}
function Jp(e, t, n, r) {
    return od(n)
        ? (function (e, t, n, r) {
              return Zv(e, t).observe_(n, r);
          })(e, t, n, r)
        : (function (e, t, n) {
              return Zv(e).observe_(t, n);
          })(e, t, n);
}
function Zp(e, t) {
    (void 0 === t && (t = void 0), up());
    try {
        return e.apply(t);
    } finally {
        lp();
    }
}
function ev(e) {
    return e[jd];
}
qp.bound = Ad(Qp);
var tv = {
    has: function (e, t) {
        return ev(e).has_(t);
    },
    get: function (e, t) {
        return ev(e).get_(t);
    },
    set: function (e, t, n) {
        var r;
        return !!ad(t) && (null == (r = ev(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
        var n;
        return !!ad(t) && (null == (n = ev(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
        var r;
        return null == (r = ev(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
        return ev(e).ownKeys_();
    },
    preventExtensions: function (e) {
        Qf(13);
    },
};
function nv(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
}
function rv(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
        n.push(t),
        rd(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function iv(e, t) {
    var n = Xh();
    try {
        for (
            var r = [].concat(e.interceptors_ || []), i = 0, o = r.length;
            i < o && ((t = r[i](t)) && !t.type && Qf(14), t);
            i++
        );
        return t;
    } finally {
        Yh(n);
    }
}
function ov(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
}
function av(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
        n.push(t),
        rd(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function sv(e, t) {
    var n = Xh(),
        r = e.changeListeners_;
    if (r) {
        for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](t);
        Yh(n);
    }
}
function uv(e, t, n) {
    return (
        tg(function () {
            var r = Wv(e, n)[jd];
            (null != t ||
                (t = (function (e) {
                    return (yd(e, Td) || cd(e, Td, Sd({}, e[Td])), e[Td]);
                })(e)),
                gd(t).forEach(function (e) {
                    return r.make_(e, t[e]);
                }));
        }),
        e
    );
}
var lv = 'splice',
    cv = 'update',
    fv = {
        get: function (e, t) {
            var n = e[jd];
            return t === jd
                ? n
                : 'length' === t
                  ? n.getArrayLength_()
                  : 'string' != typeof t || isNaN(t)
                    ? yd(pv, t)
                        ? pv[t]
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
            Qf(15);
        },
    },
    dv = (function () {
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
                return rv(this, e);
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
                    av(this, e)
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
                    this.legacyMode_ && t > 0 && Xv(e + t + 1));
            }),
            (t.spliceWithArray_ = function (e, t, n) {
                var r = this;
                this.atom_;
                var i = this.values_.length;
                if (
                    (void 0 === e ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
                    (t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e))),
                    void 0 === n && (n = Jf),
                    nv(this))
                ) {
                    var o = iv(this, { object: this.proxy_, type: lv, index: e, removedCount: t, added: n });
                    if (!o) return Jf;
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
                    i = ov(this),
                    o =
                        i || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  type: cv,
                                  debugObjectName: this.atom_.name_,
                                  index: e,
                                  newValue: t,
                                  oldValue: n,
                              }
                            : null;
                (this.atom_.reportChanged(), i && sv(this, o));
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    i = ov(this),
                    o =
                        i || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  debugObjectName: this.atom_.name_,
                                  type: lv,
                                  index: e,
                                  removed: n,
                                  added: t,
                                  removedCount: n.length,
                                  addedCount: t.length,
                              }
                            : null;
                (this.atom_.reportChanged(), i && sv(this, o));
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
                    if (nv(this)) {
                        var i = iv(this, { type: cv, object: this.proxy_, index: e, newValue: t });
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
function hv(e, t, n, r) {
    return (
        void 0 === n && (n = 'ObservableArray'),
        void 0 === r && (r = !1),
        nd(),
        tg(function () {
            var i = new dv(n, t, r, !1);
            fd(i.values_, jd, i);
            var o = new Proxy(i.values_, fv);
            return ((i.proxy_ = o), e && e.length && i.spliceWithArray_(0, 0, e), o);
        })
    );
}
var pv = {
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
        return (ip.trackingDerivation && Qf(37, 'reverse'), this.replace(this.slice().reverse()), this);
    },
    sort: function () {
        ip.trackingDerivation && Qf(37, 'sort');
        var e = this.slice();
        return (e.sort.apply(e, arguments), this.replace(e), this);
    },
    remove: function (e) {
        var t = this[jd],
            n = t.dehanceValues_(t.values_).indexOf(e);
        return n > -1 && (this.splice(n, 1), !0);
    },
};
function vv(e, t) {
    'function' == typeof Array.prototype[e] && (pv[e] = t(e));
}
function gv(e) {
    return function () {
        var t = this[jd];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments);
    };
}
function mv(e) {
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
function yv(e) {
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
(vv('at', gv),
    vv('concat', gv),
    vv('flat', gv),
    vv('includes', gv),
    vv('indexOf', gv),
    vv('join', gv),
    vv('lastIndexOf', gv),
    vv('slice', gv),
    vv('toString', gv),
    vv('toLocaleString', gv),
    vv('toSorted', gv),
    vv('toSpliced', gv),
    vv('with', gv),
    vv('every', mv),
    vv('filter', mv),
    vv('find', mv),
    vv('findIndex', mv),
    vv('findLast', mv),
    vv('findLastIndex', mv),
    vv('flatMap', mv),
    vv('forEach', mv),
    vv('map', mv),
    vv('some', mv),
    vv('toReversed', mv),
    vv('reduce', yv),
    vv('reduceRight', yv));
var bv,
    _v,
    wv = dd('ObservableArrayAdministration', dv);
function Sv(e) {
    return sd(e) && wv(e[jd]);
}
var kv = {},
    Ov = 'add',
    xv = 'delete';
((bv = Symbol.iterator), (_v = Symbol.toStringTag));
var Ev,
    Pv,
    Tv = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Id),
                void 0 === n && (n = 'ObservableMap'),
                (this.enhancer_ = void 0),
                (this.name_ = void 0),
                (this[jd] = kv),
                (this.data_ = void 0),
                (this.hasMap_ = void 0),
                (this.keysAtom_ = void 0),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = t),
                (this.name_ = n),
                od(Map) || Qf(18),
                tg(function () {
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
                if (!ip.trackingDerivation) return this.has_(e);
                var n = this.hasMap_.get(e);
                if (!n) {
                    var r = (n = new Ih(this.has_(e), Ld, 'ObservableMap.key?', !1));
                    (this.hasMap_.set(e, r),
                        Bp(r, function () {
                            return t.hasMap_.delete(e);
                        }));
                }
                return n.get();
            }),
            (t.set = function (e, t) {
                var n = this.has_(e);
                if (nv(this)) {
                    var r = iv(this, { type: n ? cv : Ov, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, nv(this)) && !iv(this, { type: xv, object: this, name: e })) return !1;
                if (this.has_(e)) {
                    var n = ov(this),
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
                        Zp(function () {
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
                if ((t = n.prepareNewValue_(t)) !== ip.UNCHANGED) {
                    var r = ov(this),
                        i = r
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: cv,
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
                    Zp(function () {
                        var r,
                            i = new Ih(t, n.enhancer_, 'ObservableMap.key', !1);
                        (n.data_.set(e, i),
                            (t = i.value_),
                            null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                            n.keysAtom_.reportChanged());
                    }));
                var r = ov(this),
                    i = r
                        ? {
                              observableKind: 'map',
                              debugObjectName: this.name_,
                              type: Ov,
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
                return ag({
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
                return ag({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            i = n.value;
                        return { done: r, value: r ? void 0 : [i, e.get(i)] };
                    },
                });
            }),
            (t[bv] = function () {
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
                    Av(e) && (e = new Map(e)),
                    Zp(function () {
                        ud(e)
                            ? (function (e) {
                                  var t = Object.keys(e);
                                  if (!vd) return t;
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
                              : hd(e)
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
                Zp(function () {
                    Gh(function () {
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
                    Zp(function () {
                        for (
                            var n,
                                r = (function (e) {
                                    if (hd(e) || Av(e)) return e;
                                    if (Array.isArray(e)) return new Map(e);
                                    if (ud(e)) {
                                        var t = new Map();
                                        for (var n in e) t.set(n, e[n]);
                                        return t;
                                    }
                                    return Qf(21, e);
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
                                for (var g = t.data_.keys(), m = i.keys(), y = g.next(), b = m.next(); !y.done; ) {
                                    if (y.value !== b.value) {
                                        t.keysAtom_.reportChanged();
                                        break;
                                    }
                                    ((y = g.next()), (b = m.next()));
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
                return av(this, e);
            }),
            (t.intercept_ = function (e) {
                return rv(this, e);
            }),
            wd(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.keysAtom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: _v,
                    get: function () {
                        return 'Map';
                    },
                },
            ]),
            e
        );
    })(),
    Av = dd('ObservableMap', Tv);
var Cv = {};
((Ev = Symbol.iterator), (Pv = Symbol.toStringTag));
var Nv = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Id),
                void 0 === n && (n = 'ObservableSet'),
                (this.name_ = void 0),
                (this[jd] = Cv),
                (this.data_ = new Set()),
                (this.atom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = void 0),
                (this.name_ = n),
                od(Set) || Qf(22),
                (this.enhancer_ = function (e, r) {
                    return t(e, r, n);
                }),
                tg(function () {
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
                Zp(function () {
                    Gh(function () {
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
                if ((this.atom_, nv(this)) && !iv(this, { type: Ov, object: this, newValue: e })) return this;
                if (!this.has(e)) {
                    Zp(function () {
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
                    n && sv(this, r);
                }
                return this;
            }),
            (t.delete = function (e) {
                var t = this;
                if (nv(this) && !iv(this, { type: xv, object: this, oldValue: e })) return !1;
                if (this.has(e)) {
                    var n = ov(this),
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
                        Zp(function () {
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
                return ag({
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
                return ag({
                    next: function () {
                        return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
                    },
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    jv(e) && (e = new Set(e)),
                    Zp(function () {
                        Array.isArray(e) || pd(e)
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
                return av(this, e);
            }),
            (t.intercept_ = function (e) {
                return rv(this, e);
            }),
            (t.toJSON = function () {
                return Array.from(this);
            }),
            (t.toString = function () {
                return '[object ObservableSet]';
            }),
            (t[Ev] = function () {
                return this.values();
            }),
            wd(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.atom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: Pv,
                    get: function () {
                        return 'Set';
                    },
                },
            ]),
            e
        );
    })(),
    jv = dd('ObservableSet', Nv),
    Uv = Object.create(null),
    Bv = 'remove',
    Rv = (function () {
        function e(e, t, n, r) {
            (void 0 === t && (t = new Map()),
                void 0 === r && (r = oh),
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
                (this.isPlainObject_ = ud(this.target_)));
        }
        var t = e.prototype;
        return (
            (t.getObservablePropValue_ = function (e) {
                return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
                var n = this.values_.get(e);
                if (n instanceof zh) return (n.set(t), !0);
                if (nv(this)) {
                    var r = iv(this, { type: cv, object: this.proxy_ || this.target_, name: e, newValue: t });
                    if (!r) return null;
                    t = r.newValue;
                }
                if ((t = n.prepareNewValue_(t)) !== ip.UNCHANGED) {
                    var i = ov(this),
                        o = i
                            ? {
                                  type: cv,
                                  observableKind: 'object',
                                  debugObjectName: this.name_,
                                  object: this.proxy_ || this.target_,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), i && sv(this, o));
                }
                return !0;
            }),
            (t.get_ = function (e) {
                return (ip.trackingDerivation && !yd(this.target_, e) && this.has_(e), this.target_[e]);
            }),
            (t.set_ = function (e, t, n) {
                return (
                    void 0 === n && (n = !1),
                    yd(this.target_, e)
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
                if (!ip.trackingDerivation) return e in this.target_;
                this.pendingKeys_ || (this.pendingKeys_ = new Map());
                var t = this.pendingKeys_.get(e);
                return (
                    t ||
                        ((t = new Ih(e in this.target_, Ld, 'ObservableObject.key?', !1)), this.pendingKeys_.set(e, t)),
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
                    for (var r = this.target_; r && r !== Yf; ) {
                        var i = Gf(r, e);
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
                    up();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (nv(this)) {
                        var i = iv(this, { object: this.proxy_ || this.target_, name: e, type: Ov, newValue: t.value });
                        if (!i) return null;
                        var o = i.newValue;
                        t.value !== o && (t = Sd({}, t, { value: o }));
                    }
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                    } else Xf(this.target_, e, t);
                    this.notifyPropertyAddition_(e, t.value);
                } finally {
                    lp();
                }
                return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
                (void 0 === r && (r = !1), this.keysAtom_);
                try {
                    up();
                    var i = this.delete_(e);
                    if (!i) return i;
                    if (nv(this)) {
                        var o = iv(this, { object: this.proxy_ || this.target_, name: e, type: Ov, newValue: t });
                        if (!o) return null;
                        t = o.newValue;
                    }
                    var a = Lv(e),
                        s = {
                            configurable: !ip.safeDescriptors || this.isPlainObject_,
                            enumerable: !0,
                            get: a.get,
                            set: a.set,
                        };
                    if (r) {
                        if (!Reflect.defineProperty(this.target_, e, s)) return !1;
                    } else Xf(this.target_, e, s);
                    var u = new Ih(t, n, 'ObservableObject.key', !1);
                    (this.values_.set(e, u), this.notifyPropertyAddition_(e, u.value_));
                } finally {
                    lp();
                }
                return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    up();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (nv(this))
                        if (!iv(this, { object: this.proxy_ || this.target_, name: e, type: Ov, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var i = Lv(e),
                        o = {
                            configurable: !ip.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: i.get,
                            set: i.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, o)) return !1;
                    } else Xf(this.target_, e, o);
                    (this.values_.set(e, new zh(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    lp();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !yd(this.target_, e))) return !0;
                if (nv(this) && !iv(this, { object: this.proxy_ || this.target_, name: e, type: Bv })) return null;
                try {
                    var n, r;
                    up();
                    var i,
                        o = ov(this),
                        a = this.values_.get(e),
                        s = void 0;
                    if (!a && o) s = null == (i = Gf(this.target_, e)) ? void 0 : i.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (a && (this.values_.delete(e), a instanceof Ih && (s = a.value_), fp(a)),
                        this.keysAtom_.reportChanged(),
                        null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
                        o)
                    ) {
                        var u = {
                            type: Bv,
                            observableKind: 'object',
                            object: this.proxy_ || this.target_,
                            debugObjectName: this.name_,
                            oldValue: s,
                            name: e,
                        };
                        (0, o && sv(this, u));
                    }
                } finally {
                    lp();
                }
                return !0;
            }),
            (t.observe_ = function (e, t) {
                return av(this, e);
            }),
            (t.intercept_ = function (e) {
                return rv(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
                var n,
                    r,
                    i = ov(this);
                if (i) {
                    var o = i
                        ? {
                              type: Ov,
                              observableKind: 'object',
                              debugObjectName: this.name_,
                              object: this.proxy_ || this.target_,
                              name: e,
                              newValue: t,
                          }
                        : null;
                    i && sv(this, o);
                }
                (null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(!0),
                    this.keysAtom_.reportChanged());
            }),
            (t.ownKeys_ = function () {
                return (this.keysAtom_.reportObserved(), gd(this.target_));
            }),
            (t.keys_ = function () {
                return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
            }),
            e
        );
    })();
function Wv(e, t) {
    var n;
    if (yd(e, jd)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
        i = new Rv(
            e,
            new Map(),
            String(r),
            (function (e) {
                var t;
                return e ? (null != (t = e.defaultDecorator) ? t : ah(e)) : void 0;
            })(t),
        );
    return (cd(e, jd, i), e);
}
var Iv = dd('ObservableObjectAdministration', Rv);
function Lv(e) {
    return (
        Uv[e] ||
        (Uv[e] = {
            get: function () {
                return this[jd].getObservablePropValue_(e);
            },
            set: function (t) {
                return this[jd].setObservablePropValue_(e, t);
            },
        })
    );
}
function Dv(e) {
    return !!sd(e) && Iv(e[jd]);
}
function Vv(e, t, n) {
    var r;
    null == (r = e.target_[Td]) || delete r[n];
}
var Mv,
    zv,
    Fv = Kv(0),
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
    Qv = 0,
    qv = function () {};
((Mv = qv),
    (zv = Array.prototype),
    Object.setPrototypeOf
        ? Object.setPrototypeOf(Mv.prototype, zv)
        : void 0 !== Mv.prototype.__proto__
          ? (Mv.prototype.__proto__ = zv)
          : (Mv.prototype = zv));
var Hv = (function (e, t, n) {
    function r(t, n, r, i) {
        var o;
        return (
            void 0 === r && (r = 'ObservableArray'),
            void 0 === i && (i = !1),
            (o = e.call(this) || this),
            tg(function () {
                var e = new dv(r, n, i, !0);
                ((e.proxy_ = xd(o)),
                    fd(xd(o), jd, e),
                    t && t.length && o.spliceWithArray(0, 0, t),
                    $v && Object.defineProperty(xd(o), '0', Fv));
            }),
            o
        );
    }
    kd(r, e);
    var i = r.prototype;
    return (
        (i.concat = function () {
            this[jd].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return Array.prototype.concat.apply(
                this.slice(),
                t.map(function (e) {
                    return Sv(e) ? e.slice() : e;
                }),
            );
        }),
        (i[n] = function () {
            var e = this,
                t = 0;
            return ag({
                next: function () {
                    return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
                },
            });
        }),
        wd(r, [
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
})(qv, Symbol.toStringTag, Symbol.iterator);
function Kv(e) {
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
function Gv(e) {
    Xf(Hv.prototype, '' + e, Kv(e));
}
function Xv(e) {
    if (e > Qv) {
        for (var t = Qv; t < e + 100; t++) Gv(t);
        Qv = e;
    }
}
function Yv(e, t, n) {
    return new Hv(e, t, n);
}
function Jv(e, t) {
    if ('object' == typeof e && null !== e) {
        if (Sv(e)) return (void 0 !== t && Qf(23), e[jd].atom_);
        if (jv(e)) return e.atom_;
        if (Av(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return (n || Qf(25, t, eg(e)), n);
        }
        if (Dv(e)) {
            if (!t) return Qf(26);
            var r = e[jd].values_.get(t);
            return (r || Qf(27, t, eg(e)), r);
        }
        if (Bd(e) || Fh(e) || mp(e)) return e;
    } else if (od(e) && mp(e[jd])) return e[jd];
    Qf(28);
}
function Zv(e, t) {
    return (
        e || Qf(29),
        void 0 !== t ? Zv(Jv(e, t)) : Bd(e) || Fh(e) || mp(e) || Av(e) || jv(e) ? e : e[jd] ? e[jd] : void Qf(24, e)
    );
}
function eg(e, t) {
    var n;
    if (void 0 !== t) n = Jv(e, t);
    else {
        if (Tp(e)) return e.name;
        n = Dv(e) || Av(e) || jv(e) ? Zv(e) : Jv(e);
    }
    return n.name_;
}
function tg(e) {
    var t = Xh(),
        n = Bh(!0);
    up();
    try {
        return e();
    } finally {
        (lp(), Rh(n), Yh(t));
    }
}
(Object.entries(pv).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && cd(Hv.prototype, t, n);
}),
    Xv(1e3));
var ng = Yf.toString;
function rg(e, t, n) {
    return (void 0 === n && (n = -1), ig(e, t, n));
}
function ig(e, t, n, r, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var o = typeof e;
    if ('function' !== o && 'object' !== o && 'object' != typeof t) return !1;
    var a = ng.call(e);
    if (a !== ng.call(t)) return !1;
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
    ((e = og(e)), (t = og(t)));
    var s = '[object Array]' === a;
    if (!s) {
        if ('object' != typeof e || 'object' != typeof t) return !1;
        var u = e.constructor,
            l = t.constructor;
        if (
            u !== l &&
            !(od(u) && u instanceof u && od(l) && l instanceof l) &&
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
        for (; c--; ) if (!ig(e[c], t[c], n - 1, r, i)) return !1;
    } else {
        var f,
            d = Object.keys(e);
        if (((c = d.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (!yd(t, (f = d[c])) || !ig(e[f], t[f], n - 1, r, i)) return !1;
    }
    return (r.pop(), i.pop(), !0);
}
function og(e) {
    return Sv(e) ? e.slice() : hd(e) || Av(e) || pd(e) || jv(e) ? Array.from(e.entries()) : e;
}
function ag(e) {
    return ((e[Symbol.iterator] = sg), e);
}
function sg() {
    return this;
}
(['Symbol', 'Map', 'Set'].forEach(function (e) {
    void 0 === Hf()[e] && Qf("MobX requires global '" + e + "' to be available or polyfilled");
}),
    'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
                return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
            },
            extras: { getDebugName: eg },
            $mobx: jd,
        }));
const ug = {
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
    lg = window;
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
let cg = class {
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
        for (const i of t) (n.push(e.slice(r, i)), (r = i));
        return (n.push(e.slice(r)), n);
    }
    parseBoundaries(e) {
        var t, n, r, i, o, a, s, u, l, c, f, d, h;
        const p = [];
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
                    (null === (i = this.model.get('UW4')) || void 0 === i ? void 0 : i.get(e.substring(v, v + 1))) ||
                    0),
                (g +=
                    (null === (o = this.model.get('UW5')) || void 0 === o
                        ? void 0
                        : o.get(e.substring(v + 1, v + 2))) || 0),
                (g +=
                    (null === (a = this.model.get('UW6')) || void 0 === a
                        ? void 0
                        : a.get(e.substring(v + 2, v + 3))) || 0),
                (g +=
                    (null === (s = this.model.get('BW1')) || void 0 === s ? void 0 : s.get(e.substring(v - 2, v))) ||
                    0),
                (g +=
                    (null === (u = this.model.get('BW2')) || void 0 === u
                        ? void 0
                        : u.get(e.substring(v - 1, v + 1))) || 0),
                (g +=
                    (null === (l = this.model.get('BW3')) || void 0 === l ? void 0 : l.get(e.substring(v, v + 2))) ||
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
                    (null === (h = this.model.get('TW4')) || void 0 === h ? void 0 : h.get(e.substring(v, v + 3))) ||
                    0),
                g > 0 && p.push(v));
        }
        return p;
    }
};
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
 */ const fg = console.assert,
    dg = String.fromCharCode(8203),
    hg = 1,
    pg = 3,
    vg = { Inline: 0, Block: 1, Skip: 2, Break: 3, NoBreak: 4, BreakOpportunity: 5 },
    gg = {
        AREA: vg.Skip,
        BASE: vg.Skip,
        BASEFONT: vg.Skip,
        DATALIST: vg.Skip,
        HEAD: vg.Skip,
        LINK: vg.Skip,
        META: vg.Skip,
        NOEMBED: vg.Skip,
        NOFRAMES: vg.Skip,
        PARAM: vg.Skip,
        RP: vg.Skip,
        SCRIPT: vg.Skip,
        STYLE: vg.Skip,
        TEMPLATE: vg.Skip,
        TITLE: vg.Skip,
        NOSCRIPT: vg.Skip,
        HR: vg.Break,
        LISTING: vg.Skip,
        PLAINTEXT: vg.Skip,
        PRE: vg.Skip,
        XMP: vg.Skip,
        BR: vg.Break,
        RT: vg.Skip,
        WBR: vg.BreakOpportunity,
        INPUT: vg.Skip,
        SELECT: vg.Skip,
        BUTTON: vg.Skip,
        TEXTAREA: vg.Skip,
        ABBR: vg.Skip,
        CODE: vg.Skip,
        IFRAME: vg.Skip,
        TIME: vg.Skip,
        VAR: vg.Skip,
        NOBR: vg.NoBreak,
    },
    mg = new Set([
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
    yg = 3;
function bg(e) {
    const t = e.nodeName,
        n = gg[t];
    if (void 0 !== n) return n;
    if ('function' == typeof lg.getComputedStyle) {
        const t = lg.getComputedStyle(e);
        switch (t.whiteSpace) {
            case 'nowrap':
            case 'pre':
                return vg.NoBreak;
        }
        const n = t.display;
        if (n)
            return (function (e) {
                return 'inline' === e
                    ? vg.Inline
                    : 'block' === e
                      ? vg.Block
                      : e.startsWith('ruby')
                        ? 'ruby-text' === e
                            ? vg.Skip
                            : vg.Inline
                        : vg.Block;
            })(n);
    }
    return mg.has(t) ? vg.Block : vg.Inline;
}
let _g = class {
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
            if ((fg(0 === t.length || t.join('') === this.text), t.length <= 1)) return;
            fg(this.canSplit);
            const n = this.nodeOrText;
            if ('string' == typeof e) return void (n.nodeValue = t.join(e));
            const r = n.ownerDocument;
            let i = [];
            for (const o of t) (o && i.push(r.createTextNode(o)), i.push(null));
            (i.pop(), (i = i.map((t) => t || e.cloneNode(!0))), n.replaceWith(...i));
        }
    },
    wg = class {
        constructor(e, t) {
            ((this.separator = dg),
                (this.parser_ = e),
                void 0 !== t &&
                    (void 0 !== t.className && (this.className = t.className),
                    void 0 !== t.separator && (this.separator = t.separator)));
        }
        static hasChildTextNode(e) {
            for (const t of e.childNodes) if (t.nodeType === yg) return !0;
            return !1;
        }
        applyToElement(e) {
            for (const t of this.getBlocks(e)) (fg(!t.isEmpty()), this.applyToParagraph(t));
        }
        *getBlocks(e, t) {
            if ((fg(e.nodeType === hg), this.className && e.classList.contains(this.className))) return;
            const n = bg(e);
            if (n === vg.Skip) return;
            if (n === vg.Break)
                return (
                    t && !t.isEmpty() && (t.setHasBreakOpportunityAfter(), yield t, (t.nodes = [])),
                    void fg(!e.firstChild)
                );
            if (n === vg.BreakOpportunity) return void (t && t.setHasBreakOpportunityAfter());
            fg(n === vg.Block || n === vg.Inline || n === vg.NoBreak);
            const r = !t || n === vg.Block,
                i = r
                    ? new (class {
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
                                      if (r)
                                          for (let n = 0; n < r.length; ++n)
                                              8203 === r.charCodeAt(n) && e.push(t + n + 1);
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
                      })(e)
                    : t;
            for (const o of e.childNodes)
                switch (o.nodeType) {
                    case hg:
                        for (const e of this.getBlocks(o, i)) yield e;
                        break;
                    case pg:
                        if (n === vg.NoBreak) {
                            const e = o.nodeValue;
                            e && i.nodes.push(new _g(e));
                            break;
                        }
                        i.nodes.push(new _g(o));
                }
            r && !i.isEmpty() && (yield i);
        }
        applyToParagraph(e) {
            if ((fg(e.nodes.length > 0), !e.nodes.some((e) => e.canSplit))) return;
            const t = e.text;
            if (/^\s*$/.test(t)) return;
            const n = this.parser_.parseBoundaries(t);
            if (n.length <= 0) return;
            (fg(n[0] > 0), fg(n.every((e, t) => 0 === t || e > n[t - 1])), fg(n[n.length - 1] < t.length));
            const r = e.excludeForcedOpportunities(n);
            (r.push(t.length + 1), this.splitNodes(e.nodes, r), this.applyBlockStyle(e.element));
        }
        splitNodes(e, t) {
            var n;
            (fg(t.length > 0), fg(t.every((e, n) => 0 === n || e > t[n - 1])));
            const r = e.reduce((e, t) => e + t.length, 0);
            fg(t[t.length - 1] > r);
            let i = 0,
                o = t[0];
            fg(o > 0);
            let a = 0,
                s = null;
            for (const u of e) {
                (fg(o >= a), fg(0 === u.chunks.length));
                const e = u.text;
                if (!e) continue;
                const r = e.length,
                    l = a + r;
                if ((fg(!s || s.canSplit), !u.canSplit)) {
                    for (
                        s &&
                        o === a &&
                        (0 === s.chunks.length && s.chunks.push(null !== (n = s.text) && void 0 !== n ? n : ''),
                        s.chunks.push(''));
                        o < l;

                    )
                        o = t[++i];
                    ((s = null), (a = l));
                    continue;
                }
                if (((s = u), o >= l)) {
                    a = l;
                    continue;
                }
                const c = u.chunks;
                let f = 0;
                for (; o < l; ) {
                    const n = o - a;
                    (fg(n >= f), c.push(e.slice(f, n)), (f = n), (o = t[++i]));
                }
                (fg(f < r), c.push(e.slice(f)), (a = l));
            }
            (fg(a === r), fg(i < t.length), fg(t[i] >= r));
            for (const u of e) u.split(this.separator);
        }
        applyBlockStyle(e) {
            this.className
                ? e.classList.add(this.className)
                : ((e) => {
                      ((e.style.wordBreak = 'keep-all'), (e.style.overflowWrap = 'anywhere'));
                  })(e);
        }
    },
    Sg = class extends cg {
        constructor(e, t = { separator: dg }) {
            (super(e), (this.htmlProcessor = new wg(this, t)));
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
            const t = ((e) => new lg.DOMParser().parseFromString(e, 'text/html'))(e);
            if (wg.hasChildTextNode(t.body)) {
                const e = t.createElement('span');
                (e.append(...t.body.childNodes), t.body.append(e));
            }
            return (this.applyToElement(t.body.childNodes[0]), t.body.innerHTML);
        }
    };
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
const kg = () => new Sg(ug);
var Og = Vg(),
    xg = (e) => Wg(e, Og),
    Eg = Vg();
xg.write = (e) => Wg(e, Eg);
var Pg = Vg();
xg.onStart = (e) => Wg(e, Pg);
var Tg = Vg();
xg.onFrame = (e) => Wg(e, Tg);
var Ag = Vg();
xg.onFinish = (e) => Wg(e, Ag);
var Cg = [];
xg.setTimeout = (e, t) => {
    const n = xg.now() + t,
        r = () => {
            const e = Cg.findIndex((e) => e.cancel == r);
            (~e && Cg.splice(e, 1), (Bg -= ~e ? 1 : 0));
        },
        i = { time: n, handler: e, cancel: r };
    return (Cg.splice(Ng(n), 0, i), (Bg += 1), Ig(), i);
};
var Ng = (e) => ~(~Cg.findIndex((t) => t.time > e) || ~Cg.length);
((xg.cancel = (e) => {
    (Pg.delete(e), Tg.delete(e), Ag.delete(e), Og.delete(e), Eg.delete(e));
}),
    (xg.sync = (e) => {
        ((Rg = !0), xg.batchedUpdates(e), (Rg = !1));
    }),
    (xg.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            ((t = e), xg.onStart(n));
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                (Pg.delete(n), (t = null));
            }),
            r
        );
    }));
var jg = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
((xg.use = (e) => (jg = e)),
    (xg.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (xg.batchedUpdates = (e) => e()),
    (xg.catch = console.error),
    (xg.frameLoop = 'always'),
    (xg.advance = () => {
        'demand' !== xg.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : Dg();
    }));
var Ug = -1,
    Bg = 0,
    Rg = !1;
function Wg(e, t) {
    Rg ? (t.delete(e), e(0)) : (t.add(e), Ig());
}
function Ig() {
    Ug < 0 && ((Ug = 0), 'demand' !== xg.frameLoop && jg(Lg));
}
function Lg() {
    ~Ug && (jg(Lg), xg.batchedUpdates(Dg));
}
function Dg() {
    const e = Ug;
    Ug = xg.now();
    const t = Ng(Ug);
    (t && (Mg(Cg.splice(0, t), (e) => e.handler()), (Bg -= t)),
        Bg ? (Pg.flush(), Og.flush(e ? Math.min(64, Ug - e) : 16.667), Tg.flush(), Eg.flush(), Ag.flush()) : (Ug = -1));
}
function Vg() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            ((Bg += t != e || e.has(n) ? 0 : 1), e.add(n));
        },
        delete: (n) => ((Bg -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (Bg -= t.size), Mg(t, (t) => t(n) && e.add(t)), (Bg += e.size), (t = e));
        },
    };
}
function Mg(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            xg.catch(n);
        }
    });
}
var zg = Object.defineProperty,
    Fg = {};
function $g() {}
((e, t) => {
    for (var n in t) zg(e, n, { get: t[n], enumerable: !0 });
})(Fg, {
    assign: () => im,
    colors: () => tm,
    createStringInterpolator: () => Yg,
    skipAnimation: () => nm,
    to: () => Jg,
    willAdvance: () => rm,
});
var Qg = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
function qg(e, t) {
    if (Qg.arr(e)) {
        if (!Qg.arr(t) || e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
    }
    return e === t;
}
var Hg = (e, t) => e.forEach(t);
function Kg(e, t, n) {
    if (Qg.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Gg = (e) => (Qg.und(e) ? [] : Qg.arr(e) ? e : [e]);
function Xg(e, t) {
    if (e.size) {
        const n = Array.from(e);
        (e.clear(), Hg(n, t));
    }
}
var Yg,
    Jg,
    Zg = (e, ...t) => Xg(e, (e) => e(...t)),
    em = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    tm = null,
    nm = !1,
    rm = $g,
    im = (e) => {
        (e.to && (Jg = e.to),
            e.now && (xg.now = e.now),
            void 0 !== e.colors && (tm = e.colors),
            null != e.skipAnimation && (nm = e.skipAnimation),
            e.createStringInterpolator && (Yg = e.createStringInterpolator),
            e.requestAnimationFrame && xg.use(e.requestAnimationFrame),
            e.batchedUpdates && (xg.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (rm = e.willAdvance),
            e.frameLoop && (xg.frameLoop = e.frameLoop));
    },
    om = new Set(),
    am = [],
    sm = [],
    um = 0,
    lm = {
        get idle() {
            return !om.size && !am.length;
        },
        start(e) {
            um > e.priority ? (om.add(e), xg.onStart(cm)) : (fm(e), xg(hm));
        },
        advance: hm,
        sort(e) {
            if (um) xg.onFrame(() => lm.sort(e));
            else {
                const t = am.indexOf(e);
                ~t && (am.splice(t, 1), dm(e));
            }
        },
        clear() {
            ((am = []), om.clear());
        },
    };
function cm() {
    (om.forEach(fm), om.clear(), xg(hm));
}
function fm(e) {
    am.includes(e) || dm(e);
}
function dm(e) {
    am.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(am, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function hm(e) {
    const t = sm;
    for (let n = 0; n < am.length; n++) {
        const r = am[n];
        ((um = r.priority), r.idle || (rm(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((um = 0), ((sm = am).length = 0), (am = t).length > 0);
}
var pm = '[-+]?\\d*\\.?\\d+',
    vm = pm + '%';
function gm(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var mm = new RegExp('rgb' + gm(pm, pm, pm)),
    ym = new RegExp('rgba' + gm(pm, pm, pm, pm)),
    bm = new RegExp('hsl' + gm(pm, vm, vm)),
    _m = new RegExp('hsla' + gm(pm, vm, vm, pm)),
    wm = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    Sm = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    km = /^#([0-9a-fA-F]{6})$/,
    Om = /^#([0-9a-fA-F]{8})$/;
function xm(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function Em(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        i = 2 * n - r,
        o = xm(i, r, e + 1 / 3),
        a = xm(i, r, e),
        s = xm(i, r, e - 1 / 3);
    return (Math.round(255 * o) << 24) | (Math.round(255 * a) << 16) | (Math.round(255 * s) << 8);
}
function Pm(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Tm(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function Am(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function Cm(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Nm(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = km.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : tm && void 0 !== tm[e]
                ? tm[e]
                : (t = mm.exec(e))
                  ? ((Pm(t[1]) << 24) | (Pm(t[2]) << 16) | (Pm(t[3]) << 8) | 255) >>> 0
                  : (t = ym.exec(e))
                    ? ((Pm(t[1]) << 24) | (Pm(t[2]) << 16) | (Pm(t[3]) << 8) | Am(t[4])) >>> 0
                    : (t = wm.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = Om.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = Sm.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = bm.exec(e))
                            ? (255 | Em(Tm(t[1]), Cm(t[2]), Cm(t[3]))) >>> 0
                            : (t = _m.exec(e))
                              ? (Em(Tm(t[1]), Cm(t[2]), Cm(t[3])) | Am(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var jm = (e, t, n) => {
    if (Qg.fun(e)) return e;
    if (Qg.arr(e)) return jm({ range: e, output: t, extrapolate: n });
    if (Qg.str(e.output[0])) return Yg(e);
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
var Um = Symbol.for('FluidValue.get'),
    Bm = Symbol.for('FluidValue.observers'),
    Rm = (e) => Boolean(e && e[Um]),
    Wm = (e) => (e && e[Um] ? e[Um]() : e),
    Im = (e) => e[Bm] || null;
function Lm(e, t) {
    const n = e[Bm];
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
            Vm(this, e);
        }
    },
    Vm = (e, t) => $m(e, Um, t);
function Mm(e, t) {
    if (e[Um]) {
        let n = e[Bm];
        (n || $m(e, Bm, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function zm(e, t) {
    const n = e[Bm];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[Bm] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
var Fm,
    $m = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    Qm = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    qm = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    Hm = new RegExp(`(${Qm.source})(%|[a-z]+)`, 'i'),
    Km = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    Gm = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    Xm = (e) => {
        const [t, n] = Ym(e);
        if (!t || em()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && Gm.test(n) ? Xm(n) : n || e;
    },
    Ym = (e) => {
        const t = Gm.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    Jm = (e, t, n, r, i) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
    Zm = (e) => {
        Fm || (Fm = tm ? new RegExp(`(${Object.keys(tm).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => Wm(e).replace(Gm, Xm).replace(qm, Nm).replace(Fm, Nm)),
            n = t.map((e) => e.match(Qm).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => jm({ ...e, output: t }));
        return (e) => {
            var n;
            const i = !Hm.test(t[0]) && (null == (n = t.find((e) => Hm.test(e))) ? void 0 : n.replace(Qm, ''));
            let o = 0;
            return t[0].replace(Qm, () => `${r[o++](e)}${i || ''}`).replace(Km, Jm);
        };
    },
    ey = 'react-spring: ',
    ty = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${ey}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    ny = ty(console.warn);
var ry = ty(console.warn);
function iy(e) {
    return Qg.str(e) && ('#' == e[0] || /\d/.test(e) || (!em() && Gm.test(e)) || e in (tm || {}));
}
var oy = em() ? D.useEffect : D.useLayoutEffect,
    ay = () => {
        const e = D.useRef(!1);
        return (
            oy(
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
function sy() {
    const e = D.useState()[1],
        t = ay();
    return () => {
        t.current && e(Math.random());
    };
}
var uy = (e) => D.useEffect(e, ly),
    ly = [];
function cy(e) {
    const t = D.useRef();
    return (
        D.useEffect(() => {
            t.current = e;
        }),
        t.current
    );
}
var fy = Symbol.for('Animated:node'),
    dy = (e) => e && e[fy],
    hy = (e, t) => {
        return ((n = e), (r = fy), (i = t), Object.defineProperty(n, r, { value: i, writable: !0, configurable: !0 }));
        var n, r, i;
    },
    py = (e) => e && e[fy] && e[fy].getPayload(),
    vy = class {
        constructor() {
            hy(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    gy = class extends vy {
        constructor(e) {
            (super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                Qg.num(this._value) && (this.lastPosition = this._value));
        }
        static create(e) {
            return new gy(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                Qg.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            ((this.done = !1),
                Qg.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null)));
        }
    },
    my = class extends gy {
        constructor(e) {
            (super(0), (this._string = null), (this._toString = jm({ output: [e, e] })));
        }
        static create(e) {
            return new my(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (Qg.str(e)) {
                if (e == this._string) return !1;
                ((this._string = e), (this._value = 1));
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null;
            }
            return !0;
        }
        reset(e) {
            (e && (this._toString = jm({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
        }
    },
    yy = { dependencies: null },
    by = class extends vy {
        constructor(e) {
            (super(), (this.source = e), this.setValue(e));
        }
        getValue(e) {
            const t = {};
            return (
                Kg(this.source, (n, r) => {
                    var i;
                    (i = n) && i[fy] === i ? (t[r] = n.getValue(e)) : Rm(n) ? (t[r] = Wm(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            ((this.source = e), (this.payload = this._makePayload(e)));
        }
        reset() {
            this.payload && Hg(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return (Kg(e, this._addToPayload, t), Array.from(t));
            }
        }
        _addToPayload(e) {
            yy.dependencies && Rm(e) && yy.dependencies.add(e);
            const t = py(e);
            t && Hg(t, (e) => this.add(e));
        }
    },
    _y = class extends by {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new _y(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map(wy)), !0);
        }
    };
function wy(e) {
    return (iy(e) ? my : gy).create(e);
}
function Sy(e) {
    const t = dy(e);
    return t ? t.constructor : Qg.arr(e) ? _y : iy(e) ? my : gy;
}
var ky = (e, t) => {
        const n = !Qg.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return D.forwardRef((r, i) => {
            const o = D.useRef(null),
                a =
                    n &&
                    D.useCallback(
                        (e) => {
                            o.current = (function (e, t) {
                                e && (Qg.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(i, e);
                        },
                        [i],
                    ),
                [s, u] = (function (e, t) {
                    const n = new Set();
                    ((yy.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                    return ((e = new by(e)), (yy.dependencies = null), [e, n]);
                })(r, t),
                l = sy(),
                c = () => {
                    const e = o.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && l();
                },
                f = new Oy(c, u),
                d = D.useRef();
            (oy(
                () => (
                    (d.current = f),
                    Hg(u, (e) => Mm(e, f)),
                    () => {
                        d.current && (Hg(d.current.deps, (e) => zm(e, d.current)), xg.cancel(d.current.update));
                    }
                ),
            ),
                D.useEffect(c, []),
                uy(() => () => {
                    const e = d.current;
                    Hg(e.deps, (t) => zm(t, e));
                }));
            const h = t.getComponentProps(s.getValue());
            return D.createElement(e, { ...h, ref: a });
        });
    },
    Oy = class {
        constructor(e, t) {
            ((this.update = e), (this.deps = t));
        }
        eventObserved(e) {
            'change' == e.type && xg.write(this.update);
        }
    };
var xy = Symbol.for('AnimatedComponent'),
    Ey = (e) => (Qg.str(e) ? e : e && Qg.str(e.displayName) ? e.displayName : (Qg.fun(e) && e.name) || null);
function Py(e, ...t) {
    return Qg.fun(e) ? e(...t) : e;
}
var Ty = (e, t) => !0 === e || !!(t && e && (Qg.fun(e) ? e(t) : Gg(e).includes(t))),
    Ay = (e, t) => (Qg.obj(e) ? t && e[t] : e),
    Cy = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
    Ny = (e) => e,
    jy = (e, t = Ny) => {
        let n = Uy;
        e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
        const r = {};
        for (const i of n) {
            const n = t(e[i], i);
            Qg.und(n) || (r[i] = n);
        }
        return r;
    },
    Uy = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
    By = {
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
function Ry(e) {
    const t = (function (e) {
        const t = {};
        let n = 0;
        if (
            (Kg(e, (e, r) => {
                By[r] || ((t[r] = e), n++);
            }),
            n)
        )
            return t;
    })(e);
    if (t) {
        const n = { to: t };
        return (Kg(e, (e, r) => r in t || (n[r] = e)), n);
    }
    return { ...e };
}
function Wy(e) {
    return (
        (e = Wm(e)),
        Qg.arr(e) ? e.map(Wy) : iy(e) ? Fg.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
    );
}
function Iy(e) {
    return Qg.fun(e) || (Qg.arr(e) && Qg.obj(e[0]));
}
var Ly = { tension: 170, friction: 26, mass: 1, damping: 1, easing: (e) => e, clamp: !1 };
function Dy(e, t) {
    if (Qg.und(t.decay)) {
        const n = !Qg.und(t.tension) || !Qg.und(t.friction);
        ((!n && Qg.und(t.frequency) && Qg.und(t.damping) && Qg.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0));
    } else e.duration = void 0;
}
var Vy = [];
function My(e, { key: t, props: n, defaultProps: r, state: i, actions: o }) {
    return new Promise((a, s) => {
        let u,
            l,
            c = Ty(n.cancel ?? (null == r ? void 0 : r.cancel), t);
        if (c) h();
        else {
            Qg.und(n.pause) || (i.paused = Ty(n.pause, t));
            let e = null == r ? void 0 : r.pause;
            (!0 !== e && (e = i.paused || Ty(e, t)),
                (u = Py(n.delay || 0, t)),
                e ? (i.resumeQueue.add(d), o.pause()) : (o.resume(), d()));
        }
        function f() {
            (i.resumeQueue.add(d), i.timeouts.delete(l), l.cancel(), (u = l.time - xg.now()));
        }
        function d() {
            u > 0 && !Fg.skipAnimation
                ? ((i.delayed = !0), (l = xg.setTimeout(h, u)), i.pauseQueue.add(f), i.timeouts.add(l))
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
var zy = (e, t) =>
        1 == t.length
            ? t[0]
            : t.some((e) => e.cancelled)
              ? Qy(e.get())
              : t.every((e) => e.noop)
                ? Fy(e.get())
                : $y(
                      e.get(),
                      t.every((e) => e.finished),
                  ),
    Fy = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
    $y = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
    Qy = (e) => ({ value: e, cancelled: !0, finished: !1 });
function qy(e, t, n, r) {
    const { callId: i, parentId: o, onRest: a } = t,
        { asyncTo: s, promise: u } = n;
    return o || e !== s || t.reset
        ? (n.promise = (async () => {
              ((n.asyncId = i), (n.asyncTo = e));
              const l = jy(t, (e, t) => ('onRest' === t ? void 0 : e));
              let c, f;
              const d = new Promise((e, t) => ((c = e), (f = t))),
                  h = (e) => {
                      const t = (i <= (n.cancelId || 0) && Qy(r)) || (i !== n.asyncId && $y(r, !1));
                      if (t) throw ((e.result = t), f(e), e);
                  },
                  p = (e, t) => {
                      const o = new Ky(),
                          a = new Gy();
                      return (async () => {
                          if (Fg.skipAnimation) throw (Hy(n), (a.result = $y(r, !1)), f(a), a);
                          h(o);
                          const s = Qg.obj(e) ? { ...e } : { ...t, to: e };
                          ((s.parentId = i),
                              Kg(l, (e, t) => {
                                  Qg.und(s[t]) && (s[t] = e);
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
              if (Fg.skipAnimation) return (Hy(n), $y(r, !1));
              try {
                  let t;
                  ((t = Qg.arr(e)
                      ? (async (e) => {
                            for (const t of e) await p(t);
                        })(e)
                      : Promise.resolve(e(p, r.stop.bind(r)))),
                      await Promise.all([t.then(c), d]),
                      (v = $y(r.get(), !0, !1)));
              } catch (g) {
                  if (g instanceof Ky) v = g.result;
                  else {
                      if (!(g instanceof Gy)) throw g;
                      v = g.result;
                  }
              } finally {
                  i == n.asyncId && ((n.asyncId = o), (n.asyncTo = o ? s : void 0), (n.promise = o ? u : void 0));
              }
              return (
                  Qg.fun(a) &&
                      xg.batchedUpdates(() => {
                          a(v, r, r.item);
                      }),
                  v
              );
          })())
        : u;
}
function Hy(e, t) {
    (Xg(e.timeouts, (e) => e.cancel()),
        e.pauseQueue.clear(),
        e.resumeQueue.clear(),
        (e.asyncId = e.asyncTo = e.promise = void 0),
        t && (e.cancelId = t));
}
var Ky = class extends Error {
        constructor() {
            super(
                'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
            );
        }
    },
    Gy = class extends Error {
        constructor() {
            super('SkipAnimationSignal');
        }
    },
    Xy = (e) => e instanceof Jy,
    Yy = 1,
    Jy = class extends Dm {
        constructor() {
            (super(...arguments), (this.id = Yy++), (this._priority = 0));
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = dy(this);
            return e && e.getValue();
        }
        to(...e) {
            return Fg.to(this, e);
        }
        interpolate(...e) {
            return (ny(`${ey}The "interpolate" function is deprecated in v9 (use "to" instead)`), Fg.to(this, e));
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
            Lm(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            (this.idle || lm.sort(this), Lm(this, { type: 'priority', parent: this, priority: e }));
        }
    },
    Zy = Symbol.for('SpringPhase'),
    eb = (e) => (1 & e[Zy]) > 0,
    tb = (e) => (2 & e[Zy]) > 0,
    nb = (e) => (4 & e[Zy]) > 0,
    rb = (e, t) => (t ? (e[Zy] |= 3) : (e[Zy] &= -3)),
    ib = (e, t) => (t ? (e[Zy] |= 4) : (e[Zy] &= -5)),
    ob = class extends Jy {
        constructor(e, t) {
            if (
                (super(),
                (this.animation = new (class {
                    constructor() {
                        ((this.changed = !1),
                            (this.values = Vy),
                            (this.toValues = null),
                            (this.fromValues = Vy),
                            (this.config = new (class {
                                constructor() {
                                    ((this.velocity = 0), Object.assign(this, Ly));
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
                !Qg.und(e) || !Qg.und(t))
            ) {
                const n = Qg.obj(e) ? { ...e } : { ...t, from: e };
                (Qg.und(n.default) && (n.default = !0), this.start(n));
            }
        }
        get idle() {
            return !(tb(this) || this._state.asyncTo) || nb(this);
        }
        get goal() {
            return Wm(this.animation.to);
        }
        get velocity() {
            const e = dy(this);
            return e instanceof gy ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
        }
        get hasAnimated() {
            return eb(this);
        }
        get isAnimating() {
            return tb(this);
        }
        get isPaused() {
            return nb(this);
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
                a = py(r.to);
            (!a && Rm(r.to) && (i = Gg(Wm(r.to))),
                r.values.forEach((s, u) => {
                    if (s.done) return;
                    const l = s.constructor == my ? 1 : a ? a[u].lastPosition : i[u];
                    let c = r.immediate,
                        f = l;
                    if (!c) {
                        if (((f = s.lastPosition), o.tension <= 0)) return void (s.done = !0);
                        let t = (s.elapsedTime += e);
                        const n = r.fromValues[u],
                            i = null != s.v0 ? s.v0 : (s.v0 = Qg.arr(o.velocity) ? o.velocity[u] : o.velocity);
                        let a;
                        const d = o.precision || (n == l ? 0.005 : Math.min(1, 0.001 * Math.abs(l - n)));
                        if (Qg.und(o.duration))
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
                                    u = !Qg.und(r),
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
            const s = dy(this),
                u = s.getValue();
            if (t) {
                const e = Wm(r.to);
                ((u === e && !n) || o.decay ? n && o.decay && this._onChange(u) : (s.setValue(e), this._onChange(e)),
                    this._stop());
            } else n && this._onChange(u);
        }
        set(e) {
            return (
                xg.batchedUpdates(() => {
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
            if (tb(this)) {
                const { to: e, config: t } = this.animation;
                xg.batchedUpdates(() => {
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
                Qg.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [Qg.obj(e) ? e : { ...t, to: e }]),
                Promise.all(n.map((e) => this._update(e))).then((e) => zy(this, e))
            );
        }
        stop(e) {
            const { to: t } = this.animation;
            return (
                this._focus(this.get()),
                Hy(this._state, e && this._lastCallId),
                xg.batchedUpdates(() => this._stop(t, e)),
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
            ((n = Qg.obj(n) ? n[t] : n),
                (null == n || Iy(n)) && (n = void 0),
                (r = Qg.obj(r) ? r[t] : r),
                null == r && (r = void 0));
            const i = { to: n, from: r };
            return (
                eb(this) ||
                    (e.reverse && ([n, r] = [r, n]), (r = Wm(r)), Qg.und(r) ? dy(this) || this._set(n) : this._set(r)),
                i
            );
        }
        _update({ ...e }, t) {
            const { key: n, defaultProps: r } = this;
            (e.default &&
                Object.assign(
                    r,
                    jy(e, (e, t) => (/^on/.test(t) ? Ay(e, n) : e)),
                ),
                db(this, e, 'onProps'),
                hb(this, 'onProps', e, this));
            const i = this._prepareNode(e);
            if (Object.isFrozen(this))
                throw Error(
                    'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                );
            const o = this._state;
            return My(++this._lastCallId, {
                key: n,
                props: e,
                defaultProps: r,
                state: o,
                actions: {
                    pause: () => {
                        nb(this) ||
                            (ib(this, !0),
                            Zg(o.pauseQueue),
                            hb(this, 'onPause', $y(this, ab(this, this.animation.to)), this));
                    },
                    resume: () => {
                        nb(this) &&
                            (ib(this, !1),
                            tb(this) && this._resume(),
                            Zg(o.resumeQueue),
                            hb(this, 'onResume', $y(this, ab(this, this.animation.to)), this));
                    },
                    start: this._merge.bind(this, i),
                },
            }).then((n) => {
                if (e.loop && n.finished && (!t || !n.noop)) {
                    const t = sb(e);
                    if (t) return this._update(t, !0);
                }
                return n;
            });
        }
        _merge(e, t, n) {
            if (t.cancel) return (this.stop(!0), n(Qy(this)));
            const r = !Qg.und(e.to),
                i = !Qg.und(e.from);
            if (r || i) {
                if (!(t.callId > this._lastToId)) return n(Qy(this));
                this._lastToId = t.callId;
            }
            const { key: o, defaultProps: a, animation: s } = this,
                { to: u, from: l } = s;
            let { to: c = u, from: f = l } = e;
            (!i || r || (t.default && !Qg.und(c)) || (c = f), t.reverse && ([c, f] = [f, c]));
            const d = !qg(f, l);
            (d && (s.from = f), (f = Wm(f)));
            const h = !qg(c, u);
            h && this._focus(c);
            const p = Iy(t.to),
                { config: v } = s,
                { decay: g, velocity: m } = v;
            ((r || i) && (v.velocity = 0),
                t.config &&
                    !p &&
                    (function (e, t, n) {
                        (n && (Dy((n = { ...n }), t), (t = { ...n, ...t })), Dy(e, t), Object.assign(e, t));
                        for (const a in Ly) null == e[a] && (e[a] = Ly[a]);
                        let { frequency: r, damping: i } = e;
                        const { mass: o } = e;
                        Qg.und(r) ||
                            (r < 0.01 && (r = 0.01),
                            i < 0 && (i = 0),
                            (e.tension = Math.pow((2 * Math.PI) / r, 2) * o),
                            (e.friction = (4 * Math.PI * i * o) / r));
                    })(v, Py(t.config, o), t.config !== a.config ? Py(a.config, o) : void 0));
            let y = dy(this);
            if (!y || Qg.und(c)) return n($y(this, !0));
            const b = Qg.und(t.reset) ? i && !t.default : !Qg.und(f) && Ty(t.reset, o),
                _ = b ? f : this.get(),
                w = Wy(c),
                S = Qg.num(w) || Qg.arr(w) || iy(w),
                k = !p && (!S || Ty(a.immediate || t.immediate, o));
            if (h) {
                const e = Sy(c);
                if (e !== y.constructor) {
                    if (!k)
                        throw Error(
                            `Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`,
                        );
                    y = this._set(w);
                }
            }
            const O = y.constructor;
            let x = Rm(c),
                E = !1;
            if (!x) {
                const e = b || (!eb(this) && d);
                ((h || e) && ((E = qg(Wy(_), w)), (x = !E)),
                    ((qg(s.immediate, k) || k) && qg(v.decay, g) && qg(v.velocity, m)) || (x = !0));
            }
            if (
                (E && tb(this) && (s.changed && !b ? (x = !0) : x || this._stop(u)),
                !p &&
                    ((x || Rm(u)) && ((s.values = y.getPayload()), (s.toValues = Rm(c) ? null : O == my ? [1] : Gg(w))),
                    s.immediate != k && ((s.immediate = k), k || b || this._set(u)),
                    x))
            ) {
                const { onRest: e } = s;
                Hg(fb, (e) => db(this, t, e));
                const r = $y(this, ab(this, u));
                (Zg(this._pendingCalls, r),
                    this._pendingCalls.add(n),
                    s.changed &&
                        xg.batchedUpdates(() => {
                            var t;
                            ((s.changed = !b),
                                null == e || e(r, this),
                                b ? Py(a.onRest, r) : null == (t = s.onStart) || t.call(s, r, this));
                        }));
            }
            (b && this._set(_),
                p
                    ? n(qy(t.to, t, this._state, this))
                    : x
                      ? this._start()
                      : tb(this) && !h
                        ? this._pendingCalls.add(n)
                        : n(Fy(_)));
        }
        _focus(e) {
            const t = this.animation;
            e !== t.to && (Im(this) && this._detach(), (t.to = e), Im(this) && this._attach());
        }
        _attach() {
            let e = 0;
            const { to: t } = this.animation;
            (Rm(t) && (Mm(t, this), Xy(t) && (e = t.priority + 1)), (this.priority = e));
        }
        _detach() {
            const { to: e } = this.animation;
            Rm(e) && zm(e, this);
        }
        _set(e, t = !0) {
            const n = Wm(e);
            if (!Qg.und(n)) {
                const e = dy(this);
                if (!e || !qg(n, e.getValue())) {
                    const r = Sy(n);
                    (e && e.constructor == r ? e.setValue(n) : hy(this, r.create(n)),
                        e &&
                            xg.batchedUpdates(() => {
                                this._onChange(n, t);
                            }));
                }
            }
            return dy(this);
        }
        _onStart() {
            const e = this.animation;
            e.changed || ((e.changed = !0), hb(this, 'onStart', $y(this, ab(this, e.to)), this));
        }
        _onChange(e, t) {
            (t || (this._onStart(), Py(this.animation.onChange, e, this)),
                Py(this.defaultProps.onChange, e, this),
                super._onChange(e, t));
        }
        _start() {
            const e = this.animation;
            (dy(this).reset(Wm(e.to)),
                e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                tb(this) || (rb(this, !0), nb(this) || this._resume()));
        }
        _resume() {
            Fg.skipAnimation ? this.finish() : lm.start(this);
        }
        _stop(e, t) {
            if (tb(this)) {
                rb(this, !1);
                const n = this.animation;
                (Hg(n.values, (e) => {
                    e.done = !0;
                }),
                    n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                    Lm(this, { type: 'idle', parent: this }));
                const r = t ? Qy(this.get()) : $y(this.get(), ab(this, e ?? n.to));
                (Zg(this._pendingCalls, r), n.changed && ((n.changed = !1), hb(this, 'onRest', r, this)));
            }
        }
    };
function ab(e, t) {
    const n = Wy(t);
    return qg(Wy(e.get()), n);
}
function sb(e, t = e.loop, n = e.to) {
    const r = Py(t);
    if (r) {
        const i = !0 !== r && Ry(r),
            o = (i || e).reverse,
            a = !i || i.reset;
        return ub({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !o || Iy(n) ? n : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...i,
        });
    }
}
function ub(e) {
    const { to: t, from: n } = (e = Ry(e)),
        r = new Set();
    return (Qg.obj(t) && cb(t, r), Qg.obj(n) && cb(n, r), (e.keys = r.size ? Array.from(r) : null), e);
}
function lb(e) {
    const t = ub(e);
    return (Qg.und(t.default) && (t.default = jy(t)), t);
}
function cb(e, t) {
    Kg(e, (e, n) => null != e && t.add(n));
}
var fb = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
function db(e, t, n) {
    e.animation[n] = t[n] !== Cy(t, n) ? Ay(t[n], e.key) : void 0;
}
function hb(e, t, ...n) {
    var r, i, o, a;
    (null == (i = (r = e.animation)[t]) || i.call(r, ...n), null == (a = (o = e.defaultProps)[t]) || a.call(o, ...n));
}
var pb = ['onStart', 'onChange', 'onRest'],
    vb = 1,
    gb = class {
        constructor(e, t) {
            ((this.id = vb++),
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
                Qg.und(n) || this.springs[t].set(n);
            }
        }
        update(e) {
            return (e && this.queue.push(ub(e)), this);
        }
        start(e) {
            let { queue: t } = this;
            return (
                e ? (t = Gg(e).map(ub)) : (this.queue = []),
                this._flush ? this._flush(this, t) : (kb(this, t), mb(this, t))
            );
        }
        stop(e, t) {
            if ((e !== !!e && (t = e), t)) {
                const n = this.springs;
                Hg(Gg(t), (t) => n[t].stop(!!e));
            } else (Hy(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
            return this;
        }
        pause(e) {
            if (Qg.und(e)) this.start({ pause: !0 });
            else {
                const t = this.springs;
                Hg(Gg(e), (e) => t[e].pause());
            }
            return this;
        }
        resume(e) {
            if (Qg.und(e)) this.start({ pause: !1 });
            else {
                const t = this.springs;
                Hg(Gg(e), (e) => t[e].resume());
            }
            return this;
        }
        each(e) {
            Kg(this.springs, e);
        }
        _onFrame() {
            const { onStart: e, onChange: t, onRest: n } = this._events,
                r = this._active.size > 0,
                i = this._changed.size > 0;
            ((r && !this._started) || (i && !this._started)) &&
                ((this._started = !0),
                Xg(e, ([e, t]) => {
                    ((t.value = this.get()), e(t, this, this._item));
                }));
            const o = !r && this._started,
                a = i || (o && n.size) ? this.get() : null;
            (i &&
                t.size &&
                Xg(t, ([e, t]) => {
                    ((t.value = a), e(t, this, this._item));
                }),
                o &&
                    ((this._started = !1),
                    Xg(n, ([e, t]) => {
                        ((t.value = a), e(t, this, this._item));
                    })));
        }
        eventObserved(e) {
            if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
            else {
                if ('idle' != e.type) return;
                this._active.delete(e.parent);
            }
            xg.onFrame(this._onFrame);
        }
    };
function mb(e, t) {
    return Promise.all(t.map((t) => yb(e, t))).then((t) => zy(e, t));
}
async function yb(e, t, n) {
    const { keys: r, to: i, from: o, loop: a, onRest: s, onResolve: u } = t,
        l = Qg.obj(t.default) && t.default;
    (a && (t.loop = !1), !1 === i && (t.to = null), !1 === o && (t.from = null));
    const c = Qg.arr(i) || Qg.fun(i) ? i : void 0;
    c
        ? ((t.to = void 0), (t.onRest = void 0), l && (l.onRest = void 0))
        : Hg(pb, (n) => {
              const r = t[n];
              if (Qg.fun(r)) {
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
        ? ((f.paused = t.pause), Zg(t.pause ? f.pauseQueue : f.resumeQueue))
        : f.paused && (t.pause = !0);
    const d = (r || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
        h = !0 === t.cancel || !0 === Cy(t, 'cancel');
    ((c || (h && f.asyncId)) &&
        d.push(
            My(++e._lastAsyncId, {
                props: t,
                state: f,
                actions: {
                    pause: $g,
                    resume: $g,
                    start(t, n) {
                        h ? (Hy(f, e._lastAsyncId), n(Qy(e))) : ((t.onRest = s), n(qy(c, t, f, e)));
                    },
                },
            }),
        ),
        f.paused &&
            (await new Promise((e) => {
                f.resumeQueue.add(e);
            })));
    const p = zy(e, await Promise.all(d));
    if (a && p.finished && (!n || !p.noop)) {
        const n = sb(t, a, i);
        if (n) return (kb(e, [n]), yb(e, n, !0));
    }
    return (u && xg.batchedUpdates(() => u(p, e, e.item)), p);
}
function bb(e, t) {
    const n = { ...e.springs };
    return (
        t &&
            Hg(Gg(t), (e) => {
                (Qg.und(e.keys) && (e = ub(e)), Qg.obj(e.to) || (e = { ...e, to: void 0 }), Sb(n, e, (e) => wb(e)));
            }),
        _b(e, n),
        n
    );
}
function _b(e, t) {
    Kg(t, (t, n) => {
        e.springs[n] || ((e.springs[n] = t), Mm(t, e));
    });
}
function wb(e, t) {
    const n = new ob();
    return ((n.key = e), t && Mm(n, t), n);
}
function Sb(e, t, n) {
    t.keys &&
        Hg(t.keys, (r) => {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function kb(e, t) {
    Hg(t, (t) => {
        Sb(e.springs, t, (t) => wb(t, e));
    });
}
var Ob,
    xb,
    Eb = ({ children: e, ...t }) => {
        const n = D.useContext(Pb),
            r = t.pause || !!n.pause,
            i = t.immediate || !!n.immediate;
        t = (function (e, t) {
            const [n] = D.useState(() => ({ inputs: t, result: e() })),
                r = D.useRef(),
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
                D.useEffect(() => {
                    ((r.current = o), i == n && (n.inputs = n.result = void 0));
                }, [o]),
                o.result
            );
        })(() => ({ pause: r, immediate: i }), [r, i]);
        const { Provider: o } = Pb;
        return D.createElement(o, { value: t }, e);
    },
    Pb =
        ((Ob = Eb),
        (xb = {}),
        Object.assign(Ob, D.createContext(xb)),
        (Ob.Provider._context = Ob),
        (Ob.Consumer._context = Ob),
        Ob);
((Eb.Provider = Pb.Provider), (Eb.Consumer = Pb.Consumer));
var Tb = () => {
    const e = [],
        t = function (t) {
            ry(
                `${ey}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
            );
            const r = [];
            return (
                Hg(e, (e, i) => {
                    if (Qg.und(t)) r.push(e.start());
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
            return (Hg(e, (e) => e.pause(...arguments)), this);
        }),
        (t.resume = function () {
            return (Hg(e, (e) => e.resume(...arguments)), this);
        }),
        (t.set = function (t) {
            Hg(e, (e, n) => {
                const r = Qg.fun(t) ? t(n, e) : t;
                r && e.set(r);
            });
        }),
        (t.start = function (t) {
            const n = [];
            return (
                Hg(e, (e, r) => {
                    if (Qg.und(t)) n.push(e.start());
                    else {
                        const i = this._getProps(t, e, r);
                        i && n.push(e.start(i));
                    }
                }),
                n
            );
        }),
        (t.stop = function () {
            return (Hg(e, (e) => e.stop(...arguments)), this);
        }),
        (t.update = function (t) {
            return (Hg(e, (e, n) => e.update(this._getProps(t, e, n))), this);
        }));
    const n = function (e, t, n) {
        return Qg.fun(e) ? e(n, t) : e;
    };
    return ((t._getProps = n), t);
};
function Ab(e, t) {
    const n = Qg.fun(e),
        [[r], i] = (function (e, t, n) {
            const r = Qg.fun(t) && t;
            r && !n && (n = []);
            const i = D.useMemo(() => (r || 3 == arguments.length ? Tb() : void 0), []),
                o = D.useRef(0),
                a = sy(),
                s = D.useMemo(
                    () => ({
                        ctrls: [],
                        queue: [],
                        flush(e, t) {
                            const n = bb(e, t);
                            return o.current > 0 && !s.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                                ? mb(e, t)
                                : new Promise((r) => {
                                      (_b(e, n),
                                          s.queue.push(() => {
                                              r(mb(e, t));
                                          }),
                                          a());
                                  });
                        },
                    }),
                    [],
                ),
                u = D.useRef([...s.ctrls]),
                l = [],
                c = cy(e) || 0;
            function f(e, n) {
                for (let i = e; i < n; i++) {
                    const e = u.current[i] || (u.current[i] = new gb(null, s.flush)),
                        n = r ? r(i, e) : t[i];
                    n && (l[i] = lb(n));
                }
            }
            (D.useMemo(() => {
                (Hg(u.current.slice(e, c), (e) => {
                    (!(function (e, t) {
                        var n;
                        (null == (n = e.ref) || n.delete(e), null == t || t.delete(e));
                    })(e, i),
                        e.stop(!0));
                }),
                    (u.current.length = e),
                    f(c, e));
            }, [e]),
                D.useMemo(() => {
                    f(0, Math.min(c, e));
                }, n));
            const d = u.current.map((e, t) => bb(e, l[t])),
                h = D.useContext(Eb),
                p = cy(h),
                v =
                    h !== p &&
                    (function (e) {
                        for (const t in e) return !0;
                        return !1;
                    })(h);
            (oy(() => {
                (o.current++, (s.ctrls = u.current));
                const { queue: e } = s;
                (e.length && ((s.queue = []), Hg(e, (e) => e())),
                    Hg(u.current, (e, t) => {
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
                uy(() => () => {
                    Hg(s.ctrls, (e) => e.stop(!0));
                }));
            const g = d.map((e) => ({ ...e }));
            return i ? [g, i] : g;
        })(1, n ? e : [e], n ? t || [] : t);
    return n || 2 == arguments.length ? [r, i] : r;
}
var Cb = class extends Jy {
    constructor(e, t) {
        (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = jm(...t)));
        const n = this._get(),
            r = Sy(n);
        hy(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        (qg(t, this.get()) || (dy(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && jb(this._active) && Ub(this));
    }
    _get() {
        const e = Qg.arr(this.source) ? this.source.map(Wm) : Gg(Wm(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !jb(this._active) &&
            ((this.idle = !1),
            Hg(py(this), (e) => {
                e.done = !1;
            }),
            Fg.skipAnimation ? (xg.batchedUpdates(() => this.advance()), Ub(this)) : lm.start(this));
    }
    _attach() {
        let e = 1;
        (Hg(Gg(this.source), (t) => {
            (Rm(t) && Mm(t, this), Xy(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (Hg(Gg(this.source), (e) => {
            Rm(e) && zm(e, this);
        }),
            this._active.clear(),
            Ub(this));
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = Gg(this.source).reduce((e, t) => Math.max(e, (Xy(t) ? t.priority : 0) + 1), 0));
    }
};
function Nb(e) {
    return !1 !== e.idle;
}
function jb(e) {
    return !e.size || Array.from(e).every(Nb);
}
function Ub(e) {
    e.idle ||
        ((e.idle = !0),
        Hg(py(e), (e) => {
            e.done = !0;
        }),
        Lm(e, { type: 'idle', parent: e }));
}
Fg.assign({ createStringInterpolator: Zm, to: (e, t) => new Cb(e, t) });
var Bb = /^--/;
function Rb(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || Bb.test(e) || (Ib.hasOwnProperty(e) && Ib[e])
          ? ('' + t).trim()
          : t + 'px';
}
var Wb = {};
var Ib = {
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
    Lb = ['Webkit', 'Ms', 'Moz', 'O'];
Ib = Object.keys(Ib).reduce(
    (e, t) => (Lb.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    Ib,
);
var Db = /^(matrix|translate|scale|rotate|skew)/,
    Vb = /^(translate)/,
    Mb = /^(rotate|skew)/,
    zb = (e, t) => (Qg.num(e) && 0 !== e ? e + t : e),
    Fb = (e, t) => (Qg.arr(e) ? e.every((e) => Fb(e, t)) : Qg.num(e) ? e === t : parseFloat(e) === t),
    $b = class extends by {
        constructor({ x: e, y: t, z: n, ...r }) {
            const i = [],
                o = [];
            ((e || t || n) &&
                (i.push([e || 0, t || 0, n || 0]),
                o.push((e) => [`translate3d(${e.map((e) => zb(e, 'px')).join(',')})`, Fb(e, 0)])),
                Kg(r, (e, t) => {
                    if ('transform' === t) (i.push([e || '']), o.push((e) => [e, '' === e]));
                    else if (Db.test(t)) {
                        if ((delete r[t], Qg.und(e))) return;
                        const n = Vb.test(t) ? 'px' : Mb.test(t) ? 'deg' : '';
                        (i.push(Gg(e)),
                            o.push(
                                'rotate3d' === t
                                    ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${zb(i, n)})`, Fb(i, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => zb(e, n)).join(',')})`,
                                          Fb(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                i.length && (r.transform = new Qb(i, o)),
                super(r));
        }
    },
    Qb = class extends Dm {
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
                Hg(this.inputs, (n, r) => {
                    const i = Wm(n[0]),
                        [o, a] = this.transforms[r](Qg.arr(i) ? i : n.map(Wm));
                    ((e += ' ' + o), (t = t && a));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && Hg(this.inputs, (e) => Hg(e, (e) => Rm(e) && Mm(e, this)));
        }
        observerRemoved(e) {
            0 == e && Hg(this.inputs, (e) => Hg(e, (e) => Rm(e) && zm(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), Lm(this, e));
        }
    };
function qb(e, t) {
    (void 0 === t && (t = 'Illegal state'),
        e ||
            (function (e) {
                throw new Error('[mobx-utils] ' + e);
            })(t));
}
(Fg.assign({
    batchedUpdates: Df.unstable_batchedUpdates,
    createStringInterpolator: Zm,
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
            createAnimatedStyle: n = (e) => new by(e),
            getComponentProps: r = (e) => e,
        } = {},
    ) => {
        const i = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
            o = (e) => {
                const t = Ey(e) || 'Anonymous';
                return (
                    ((e = Qg.str(e) ? o[e] || (o[e] = ky(e, i)) : e[xy] || (e[xy] = ky(e, i))).displayName =
                        `Animated(${t})`),
                    e
                );
            };
        Kg(e, (t, n) => {
            (Qg.arr(e) && (n = Ey(t)), (o[n] = o(t)));
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
                            : Wb[t] || (Wb[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                    );
                void 0 !== i && (e.textContent = i);
                for (const f in r)
                    if (r.hasOwnProperty(f)) {
                        const t = Rb(f, r[f]);
                        Bb.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                    }
                (c.forEach((t, n) => {
                    e.setAttribute(t, l[n]);
                }),
                    void 0 !== o && (e.scrollTop = o),
                    void 0 !== a && (e.scrollLeft = a),
                    void 0 !== s && e.setAttribute('viewBox', s));
            },
            createAnimatedStyle: (e) => new $b(e),
            getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
        },
    ));
var Hb,
    Kb = function (e) {
        return e && e !== Object.prototype && Object.getOwnPropertyNames(e).concat(Kb(Object.getPrototypeOf(e)) || []);
    },
    Gb = function (e) {
        return (function (e) {
            var t = Kb(e);
            return t.filter(function (e, n) {
                return t.indexOf(e) === n;
            });
        })(e).filter(function (e) {
            return 'constructor' !== e && !~e.indexOf('__');
        });
    },
    Xb = 'pending',
    Yb = 'fulfilled',
    Jb = 'rejected';
function Zb(e) {
    switch (this.state) {
        case Xb:
            return e.pending && e.pending(this.value);
        case Jb:
            return e.rejected && e.rejected(this.value);
        case Yb:
            return e.fulfilled ? e.fulfilled(this.value) : this.value;
    }
}
function e_(e, t) {
    if (
        (qb(arguments.length <= 2, 'fromPromise expects up to two arguments'),
        qb(
            'function' == typeof e || ('object' == typeof e && e && 'function' == typeof e.then),
            'Please pass a promise or function to fromPromise',
        ),
        !0 === e.isPromiseBasedObservable)
    )
        return e;
    'function' == typeof e && (e = new Promise(e));
    var n = e;
    (e.then(
        Ep('observableFromPromise-resolve', function (e) {
            ((n.value = e), (n.state = Yb));
        }),
        Ep('observableFromPromise-reject', function (e) {
            ((n.value = e), (n.state = Jb));
        }),
    ),
        (n.isPromiseBasedObservable = !0),
        (n.case = Zb));
    var r = !t || (t.state !== Yb && t.state !== Xb) ? void 0 : t.value;
    return (Vp(n, { value: r, state: Xb }, {}, { deep: !1 }), n);
}
(((Hb = e_ || (e_ = {})).reject = Ep('fromPromise.reject', function (e) {
    var t = Hb(Promise.reject(e));
    return ((t.state = Jb), (t.value = e), t);
})),
    (Hb.resolve = Ep('fromPromise.resolve', function (e) {
        void 0 === e && (e = void 0);
        var t = Hb(Promise.resolve(e));
        return ((t.state = Yb), (t.value = e), t);
    })));
var t_ = function (e, t, n, r) {
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
            uv(this),
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
        t_([Sh.ref], e.prototype, 'current', void 0),
        t_([Ep.bound], e.prototype, 'next', null),
        t_([Ep.bound], e.prototype, 'complete', null),
        t_([Ep.bound], e.prototype, 'error', null));
})();
var n_ = function () {
        return (
            (n_ =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            n_.apply(this, arguments)
        );
    },
    r_ = function (e, t, n, r) {
        var i,
            o = arguments.length,
            a = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return (o > 3 && a && Object.defineProperty(t, n, a), a);
    },
    i_ = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
!(function () {
    function e(e) {
        var t = this;
        (Object.defineProperty(this, 'model', { enumerable: !0, configurable: !0, writable: !0, value: e }),
            Object.defineProperty(this, 'localValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: Sh.map({}),
            }),
            Object.defineProperty(this, 'localComputedValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: Sh.map({}),
            }),
            Object.defineProperty(this, 'isPropertyDirty', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    return t.localValues.has(e);
                },
            }),
            uv(this),
            qb(Dv(e), 'createViewModel expects an observable object'));
        var n = Gb(this);
        Gb(e).forEach(function (r) {
            var i;
            if (!n.includes(r) && r !== jd && '__mobxDidRunLazyInitializers' !== r) {
                if (
                    (qb(
                        -1 === i_.indexOf(r),
                        'The propertyname ' + r + ' is reserved and cannot be used with viewModels',
                    ),
                    Xp(e, r))
                ) {
                    var o = Zv(e, r),
                        a = o.derivation.bind(t),
                        s = null === (i = o.setter_) || void 0 === i ? void 0 : i.bind(t);
                    t.localComputedValues.set(r, Eh(a, { set: s }));
                }
                var u = Object.getOwnPropertyDescriptor(e, r),
                    l = u ? { enumerable: u.enumerable } : {};
                Object.defineProperty(
                    t,
                    r,
                    n_(n_({}, l), {
                        configurable: !0,
                        get: function () {
                            return Xp(e, r)
                                ? t.localComputedValues.get(r).get()
                                : t.isPropertyDirty(r)
                                  ? t.localValues.get(r)
                                  : t.model[r];
                        },
                        set: Ep(function (n) {
                            Xp(e, r)
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
                Dv(e)
                    ? e[jd].keys_()
                    : Av(e) || jv(e)
                      ? Array.from(e.keys())
                      : Sv(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void Qf(5)).forEach(function (e) {
                    var n = t.localValues.get(e),
                        r = t.model[e];
                    Sv(r) ? r.replace(n) : Av(r) ? (r.clear(), r.merge(n)) : Gp(n) || (t.model[e] = n);
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
        r_([Eh], e.prototype, 'isDirty', null),
        r_([Eh], e.prototype, 'changedValues', null),
        r_([Ep.bound], e.prototype, 'submit', null),
        r_([Ep.bound], e.prototype, 'reset', null),
        r_([Ep.bound], e.prototype, 'resetProperty', null));
})();
var o_ = (function () {
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
function a_(e) {
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
            (l._disposeBaseObserver = Jp(l._base, function (e) {
                if ('splice' === e.type)
                    Zp(function () {
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
                    Zp(function () {
                        (l._removeItem(e.oldValue), l._addItem(e.newValue));
                    });
                }
            })),
            l
        );
    }
    (o_(t, e),
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
                        ((n = Sh([], { name: 'GroupArray[' + this._keyToName(t) + ']', deep: !1 })),
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
                        reaction: Np(
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
})(Tv);
var s_ = {};
function u_() {
    return 'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : s_;
}
var l_ = Object.assign,
    c_ = Object.getOwnPropertyDescriptor,
    f_ = Object.defineProperty,
    d_ = Object.prototype,
    h_ = [];
Object.freeze(h_);
var p_ = {};
Object.freeze(p_);
var v_ = 'undefined' != typeof Proxy,
    g_ = Object.toString();
function m_() {
    v_ || a_('Proxy not available');
}
function y_(e) {
    var t = !1;
    return function () {
        if (!t) return ((t = !0), e.apply(this, arguments));
    };
}
var b_ = function () {};
function __(e) {
    return 'function' == typeof e;
}
function w_(e) {
    switch (typeof e) {
        case 'string':
        case 'symbol':
        case 'number':
            return !0;
    }
    return !1;
}
function S_(e) {
    return null !== e && 'object' == typeof e;
}
function k_(e) {
    if (!S_(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (null == t) return !0;
    var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n.toString() === g_;
}
function O_(e) {
    var t = null == e ? void 0 : e.constructor;
    return !!t && ('GeneratorFunction' === t.name || 'GeneratorFunction' === t.displayName);
}
function x_(e, t, n) {
    f_(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function E_(e, t, n) {
    f_(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function P_(e, t) {
    var n = 'isMobX' + e;
    return (
        (t.prototype[n] = !0),
        function (e) {
            return S_(e) && !0 === e[n];
        }
    );
}
function T_(e) {
    return e instanceof Map;
}
function A_(e) {
    return e instanceof Set;
}
var C_ = void 0 !== Object.getOwnPropertySymbols;
var N_ =
    'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : C_
          ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            }
          : Object.getOwnPropertyNames;
function j_(e) {
    return null === e ? null : 'object' == typeof e ? '' + e : e;
}
function U_(e, t) {
    return d_.hasOwnProperty.call(e, t);
}
var B_ =
    Object.getOwnPropertyDescriptors ||
    function (e) {
        var t = {};
        return (
            N_(e).forEach(function (n) {
                t[n] = c_(e, n);
            }),
            t
        );
    };
function R_(e, t) {
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
function W_(e, t, n) {
    return (t && R_(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function I_() {
    return (
        (I_ = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        I_.apply(this, arguments)
    );
}
function L_(e, t) {
    ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), D_(e, t));
}
function D_(e, t) {
    return (D_ = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return ((e.__proto__ = t), e);
          })(e, t);
}
function V_(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function M_(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function z_(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
        Array.isArray(e) ||
        (n = (function (e, t) {
            if (e) {
                if ('string' == typeof e) return M_(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? M_(e, t)
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
var F_ = Symbol('mobx-stored-annotations');
function $_(e) {
    return Object.assign(function (t, n) {
        if (q_(n)) return e.decorate_20223_(t, n);
        Q_(t, n, e);
    }, e);
}
function Q_(e, t, n) {
    (U_(e, F_) || x_(e, F_, I_({}, e[F_])),
        (function (e) {
            return e.annotationType_ === ew;
        })(n) || (e[F_][t] = n));
}
function q_(e) {
    return 'object' == typeof e && 'string' == typeof e.kind;
}
var H_ = Symbol('mobx administration'),
    K_ = (function () {
        function e(e) {
            (void 0 === e && (e = 'Atom'),
                (this.name_ = void 0),
                (this.isPendingUnobservation_ = !1),
                (this.isBeingObserved_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Zw.NOT_TRACKING_),
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
                return kS(this);
            }),
            (t.reportChanged = function () {
                (wS(), OS(this), SS());
            }),
            (t.toString = function () {
                return this.name_;
            }),
            e
        );
    })(),
    G_ = P_('Atom', K_);
function X_(e, t, n) {
    (void 0 === t && (t = b_), void 0 === n && (n = b_));
    var r,
        i = new K_(e);
    return (t !== b_ && KS(QS, i, t, r), n !== b_ && HS(i, n), i);
}
var Y_ = {
    structural: function (e, t) {
        return pO(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
};
function J_(e, t, n) {
    return ck(e)
        ? e
        : Array.isArray(e)
          ? Iw.array(e, { name: n })
          : k_(e)
            ? Iw.object(e, void 0, { name: n })
            : T_(e)
              ? Iw.map(e, { name: n })
              : A_(e)
                ? Iw.set(e, { name: n })
                : 'function' != typeof e || MS(e) || sk(e)
                  ? e
                  : O_(e)
                    ? ok(e)
                    : VS(n, e);
}
function Z_(e) {
    return e;
}
var ew = 'override';
function tw(e, t) {
    return { annotationType_: e, options_: t, make_: nw, extend_: rw, decorate_20223_: iw };
}
function nw(e, t, n, r) {
    var i;
    if (null != (i = this.options_) && i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (MS(n.value)) return 1;
    var o = ow(e, this, t, n, !1);
    return (f_(r, t, o), 2);
}
function rw(e, t, n, r) {
    var i = ow(e, this, t, n);
    return e.defineProperty_(t, i, r);
}
function iw(e, t) {
    var n = t.kind,
        r = t.name,
        i = t.addInitializer,
        o = this;
    if ('field' != n) {
        var a, s, u, l, c, f;
        if ('method' == n)
            return (
                MS(e) ||
                    ((s = e),
                    (e = Hw(
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
        a_(
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
            Q_(this, r, o);
        });
}
function ow(e, t, n, r, i) {
    var o, a, s, u, l, c, f, d;
    (void 0 === i && (i = mS.safeDescriptors), (d = r), t.annotationType_, d.value);
    var h,
        p = r.value;
    null != (o = t.options_) && o.bound && (p = p.bind(null != (h = e.proxy_) ? h : e.target_));
    return {
        value: Hw(
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
function aw(e, t) {
    return { annotationType_: e, options_: t, make_: sw, extend_: uw, decorate_20223_: lw };
}
function sw(e, t, n, r) {
    var i;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (
        null != (i = this.options_) &&
        i.bound &&
        (!U_(e.target_, t) || !sk(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
    )
        return 0;
    if (sk(n.value)) return 1;
    var o = cw(e, this, t, n, !1, !1);
    return (f_(r, t, o), 2);
}
function uw(e, t, n, r) {
    var i,
        o = cw(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
    return e.defineProperty_(t, o, r);
}
function lw(e, t) {
    var n,
        r = t.name,
        i = t.addInitializer;
    return (
        sk(e) || (e = ok(e)),
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
function cw(e, t, n, r, i, o) {
    var a;
    (void 0 === o && (o = mS.safeDescriptors), (a = r), t.annotationType_, a.value);
    var s,
        u = r.value;
    (sk(u) || (u = ok(u)), i) && ((u = u.bind(null != (s = e.proxy_) ? s : e.target_)).isMobXFlow = !0);
    return { value: u, configurable: !o || e.isPlainObject_, enumerable: !1, writable: !o };
}
function fw(e, t) {
    return { annotationType_: e, options_: t, make_: dw, extend_: hw, decorate_20223_: pw };
}
function dw(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function hw(e, t, n, r) {
    var i;
    return (
        (i = n),
        this.annotationType_,
        i.get,
        e.defineComputedProperty_(t, I_({}, this.options_, { get: n.get, set: n.set }), r)
    );
}
function pw(e, t) {
    var n = this,
        r = t.name;
    return (
        (0, t.addInitializer)(function () {
            var t = Gk(this)[H_],
                i = I_({}, n.options_, { get: e, context: this });
            (i.name || (i.name = 'ObservableObject.' + r.toString()), t.values_.set(r, new tS(i)));
        }),
        function () {
            return this[H_].getObservablePropValue_(r);
        }
    );
}
function vw(e, t) {
    return { annotationType_: e, options_: t, make_: gw, extend_: mw, decorate_20223_: yw };
}
function gw(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function mw(e, t, n, r) {
    var i, o;
    return (
        this.annotationType_,
        e.defineObservableProperty_(
            t,
            n.value,
            null != (i = null == (o = this.options_) ? void 0 : o.enhancer) ? i : J_,
            r,
        )
    );
}
function yw(e, t) {
    var n = this,
        r = t.kind,
        i = t.name,
        o = new WeakSet();
    function a(e, t) {
        var r,
            a,
            s = Gk(e)[H_],
            u = new Jw(
                t,
                null != (r = null == (a = n.options_) ? void 0 : a.enhancer) ? r : J_,
                'ObservableObject.' + i.toString(),
                !1,
            );
        (s.values_.set(i, u), o.add(e));
    }
    if ('accessor' == r)
        return {
            get: function () {
                return (o.has(this) || a(this, e.get.call(this)), this[H_].getObservablePropValue_(i));
            },
            set: function (e) {
                return (o.has(this) || a(this, e), this[H_].setObservablePropValue_(i, e));
            },
            init: function (e) {
                return (o.has(this) || a(this, e), e);
            },
        };
}
var bw = 'true',
    _w = ww();
function ww(e) {
    return { annotationType_: bw, options_: e, make_: Sw, extend_: kw, decorate_20223_: Ow };
}
function Sw(e, t, n, r) {
    var i, o, a, s;
    if (n.get) return Mw.make_(e, t, n, r);
    if (n.set) {
        var u = Hw(t.toString(), n.set);
        return r === e.target_
            ? null === e.defineProperty_(t, { configurable: !mS.safeDescriptors || e.isPlainObject_, set: u })
                ? 0
                : 2
            : (f_(r, t, { configurable: !0, set: u }), 2);
    }
    if (r !== e.target_ && 'function' == typeof n.value)
        return O_(n.value)
            ? (null != (s = this.options_) && s.autoBind ? ok.bound : ok).make_(e, t, n, r)
            : (null != (a = this.options_) && a.autoBind ? VS.bound : VS).make_(e, t, n, r);
    var l,
        c = !1 === (null == (i = this.options_) ? void 0 : i.deep) ? Iw.ref : Iw;
    'function' == typeof n.value &&
        null != (o = this.options_) &&
        o.autoBind &&
        (n.value = n.value.bind(null != (l = e.proxy_) ? l : e.target_));
    return c.make_(e, t, n, r);
}
function kw(e, t, n, r) {
    var i, o, a;
    if (n.get) return Mw.extend_(e, t, n, r);
    if (n.set)
        return e.defineProperty_(
            t,
            { configurable: !mS.safeDescriptors || e.isPlainObject_, set: Hw(t.toString(), n.set) },
            r,
        );
    'function' == typeof n.value &&
        null != (i = this.options_) &&
        i.autoBind &&
        (n.value = n.value.bind(null != (a = e.proxy_) ? a : e.target_));
    return (!1 === (null == (o = this.options_) ? void 0 : o.deep) ? Iw.ref : Iw).extend_(e, t, n, r);
}
function Ow(e, t) {
    a_("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var xw = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
function Ew(e) {
    return e || xw;
}
Object.freeze(xw);
var Pw = vw('observable'),
    Tw = vw('observable.ref', { enhancer: Z_ }),
    Aw = vw('observable.shallow', {
        enhancer: function (e, t, n) {
            return null == e || Jk(e) || Rk(e) || zk(e) || Qk(e)
                ? e
                : Array.isArray(e)
                  ? Iw.array(e, { name: n, deep: !1 })
                  : k_(e)
                    ? Iw.object(e, void 0, { name: n, deep: !1 })
                    : T_(e)
                      ? Iw.map(e, { name: n, deep: !1 })
                      : A_(e)
                        ? Iw.set(e, { name: n, deep: !1 })
                        : void 0;
        },
    }),
    Cw = vw('observable.struct', {
        enhancer: function (e, t) {
            return pO(e, t) ? t : e;
        },
    }),
    Nw = $_(Pw);
function jw(e) {
    return !0 === e.deep
        ? J_
        : !1 === e.deep
          ? Z_
          : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
            ? n
            : J_;
    var t, n, r;
}
function Uw(e, t, n) {
    return q_(t)
        ? Pw.decorate_20223_(e, t)
        : w_(t)
          ? void Q_(e, t, Pw)
          : ck(e)
            ? e
            : k_(e)
              ? Iw.object(e, t, n)
              : Array.isArray(e)
                ? Iw.array(e, t)
                : T_(e)
                  ? Iw.map(e, t)
                  : A_(e)
                    ? Iw.set(e, t)
                    : 'object' == typeof e && null !== e
                      ? e
                      : Iw.box(e, t);
}
l_(Uw, Nw);
var Bw,
    Rw,
    Ww = {
        box: function (e, t) {
            var n = Ew(t);
            return new Jw(e, jw(n), n.name, !0, n.equals);
        },
        array: function (e, t) {
            var n = Ew(t);
            return (!1 === mS.useProxies || !1 === n.proxy ? uO : Ek)(e, jw(n), n.name);
        },
        map: function (e, t) {
            var n = Ew(t);
            return new Mk(e, jw(n), n.name);
        },
        set: function (e, t) {
            var n = Ew(t);
            return new $k(e, jw(n), n.name);
        },
        object: function (e, t, n) {
            return dO(function () {
                return ZS(
                    !1 === mS.useProxies || !1 === (null == n ? void 0 : n.proxy)
                        ? Gk({}, n)
                        : (function (e, t) {
                              var n, r;
                              return (
                                  m_(),
                                  (e = Gk(e, t)),
                                  null != (r = (n = e[H_]).proxy_) ? r : (n.proxy_ = new Proxy(e, pk))
                              );
                          })({}, n),
                    e,
                    t,
                );
            });
        },
        ref: $_(Tw),
        shallow: $_(Aw),
        deep: Nw,
        struct: $_(Cw),
    },
    Iw = l_(Uw, Ww),
    Lw = 'computed',
    Dw = fw(Lw),
    Vw = fw('computed.struct', { equals: Y_.structural }),
    Mw = function (e, t) {
        if (q_(t)) return Dw.decorate_20223_(e, t);
        if (w_(t)) return Q_(e, t, Dw);
        if (k_(e)) return $_(fw(Lw, e));
        var n = k_(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new tS(n));
    };
(Object.assign(Mw, Dw), (Mw.struct = $_(Vw)));
var zw,
    Fw = 0,
    $w = 1,
    Qw = null != (Bw = null == (Rw = c_(function () {}, 'name')) ? void 0 : Rw.configurable) && Bw,
    qw = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
function Hw(e, t, n, r) {
    function i() {
        return Kw(e, n, t, r || this, arguments);
    }
    return (
        void 0 === n && (n = !1),
        (i.isMobxAction = !0),
        (i.toString = function () {
            return t.toString();
        }),
        Qw && ((qw.value = e), f_(i, 'name', qw)),
        i
    );
}
function Kw(e, t, n, r, i) {
    var o = (function (e, t, n, r) {
        var i = !1,
            o = 0,
            a = mS.trackingDerivation,
            s = !t || !a;
        wS();
        var u = mS.allowStateChanges;
        s && (lS(), (u = Gw(!0)));
        var l = fS(!0),
            c = {
                runAsAction_: s,
                prevDerivation_: a,
                prevAllowStateChanges_: u,
                prevAllowStateReads_: l,
                notifySpy_: i,
                startTime_: o,
                actionId_: $w++,
                parentActionId_: Fw,
            };
        return ((Fw = c.actionId_), c);
    })(0, t);
    try {
        return n.apply(r, i);
    } catch (a) {
        throw ((o.error_ = a), a);
    } finally {
        !(function (e) {
            Fw !== e.actionId_ && a_(30);
            ((Fw = e.parentActionId_), void 0 !== e.error_ && (mS.suppressReactionErrors = !0));
            (Xw(e.prevAllowStateChanges_), dS(e.prevAllowStateReads_), SS(), e.runAsAction_ && cS(e.prevDerivation_));
            mS.suppressReactionErrors = !1;
        })(o);
    }
}
function Gw(e) {
    var t = mS.allowStateChanges;
    return ((mS.allowStateChanges = e), t);
}
function Xw(e) {
    mS.allowStateChanges = e;
}
zw = Symbol.toPrimitive;
var Yw,
    Jw = (function (e) {
        function t(t, n, r, i, o) {
            var a;
            return (
                void 0 === r && (r = 'ObservableValue'),
                void 0 === o && (o = Y_.default),
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
        L_(t, e);
        var n = t.prototype;
        return (
            (n.dehanceValue = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
                (this.value_, (e = this.prepareNewValue_(e)) !== mS.UNCHANGED && this.setNewValue_(e));
            }),
            (n.prepareNewValue_ = function (e) {
                if (vk(this)) {
                    var t = mk(this, { object: this, type: kk, newValue: e });
                    if (!t) return mS.UNCHANGED;
                    e = t.newValue;
                }
                return (
                    (e = this.enhancer(e, this.value_, this.name_)),
                    this.equals(this.value_, e) ? mS.UNCHANGED : e
                );
            }),
            (n.setNewValue_ = function (e) {
                var t = this.value_;
                ((this.value_ = e),
                    this.reportChanged(),
                    yk(this) && _k(this, { type: kk, object: this, newValue: e, oldValue: t }));
            }),
            (n.get = function () {
                return (this.reportObserved(), this.dehanceValue(this.value_));
            }),
            (n.intercept_ = function (e) {
                return gk(this, e);
            }),
            (n.observe_ = function (e, t) {
                return (
                    t &&
                        e({
                            observableKind: 'value',
                            debugObjectName: this.name_,
                            object: this,
                            type: kk,
                            newValue: this.value_,
                            oldValue: void 0,
                        }),
                    bk(this, e)
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
                return j_(this.get());
            }),
            (n[zw] = function () {
                return this.valueOf();
            }),
            t
        );
    })(K_);
Yw = Symbol.toPrimitive;
var Zw,
    eS,
    tS = (function () {
        function e(e) {
            ((this.dependenciesState_ = Zw.NOT_TRACKING_),
                (this.observing_ = []),
                (this.newObserving_ = null),
                (this.isBeingObserved_ = !1),
                (this.isPendingUnobservation_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Zw.UP_TO_DATE_),
                (this.unboundDepsCount_ = 0),
                (this.value_ = new rS(null)),
                (this.name_ = void 0),
                (this.triggeredBy_ = void 0),
                (this.isComputing_ = !1),
                (this.isRunningSetter_ = !1),
                (this.derivation = void 0),
                (this.setter_ = void 0),
                (this.isTracing_ = eS.NONE),
                (this.scope_ = void 0),
                (this.equals_ = void 0),
                (this.requiresReaction_ = void 0),
                (this.keepAlive_ = void 0),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                e.get || a_(31),
                (this.derivation = e.get),
                (this.name_ = e.name || 'ComputedValue'),
                e.set && (this.setter_ = Hw('ComputedValue-setter', e.set)),
                (this.equals_ = e.equals || (e.compareStructural || e.struct ? Y_.structural : Y_.default)),
                (this.scope_ = e.context),
                (this.requiresReaction_ = e.requiresReaction),
                (this.keepAlive_ = !!e.keepAlive));
        }
        var t = e.prototype;
        return (
            (t.onBecomeStale_ = function () {
                !(function (e) {
                    if (e.lowestObserverState_ !== Zw.UP_TO_DATE_) return;
                    ((e.lowestObserverState_ = Zw.POSSIBLY_STALE_),
                        e.observers_.forEach(function (e) {
                            e.dependenciesState_ === Zw.UP_TO_DATE_ &&
                                ((e.dependenciesState_ = Zw.POSSIBLY_STALE_), e.onBecomeStale_());
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
                    (this.isComputing_ && a_(32, this.name_, this.derivation),
                    0 !== mS.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                ) {
                    if ((kS(this), oS(this))) {
                        var e = mS.trackingContext;
                        (this.keepAlive_ && !e && (mS.trackingContext = this),
                            this.trackAndCompute() &&
                                (function (e) {
                                    if (e.lowestObserverState_ === Zw.STALE_) return;
                                    ((e.lowestObserverState_ = Zw.STALE_),
                                        e.observers_.forEach(function (t) {
                                            t.dependenciesState_ === Zw.POSSIBLY_STALE_
                                                ? (t.dependenciesState_ = Zw.STALE_)
                                                : t.dependenciesState_ === Zw.UP_TO_DATE_ &&
                                                  (e.lowestObserverState_ = Zw.UP_TO_DATE_);
                                        }));
                                })(this),
                            (mS.trackingContext = e));
                    }
                } else oS(this) && (this.warnAboutUntrackedRead_(), wS(), (this.value_ = this.computeValue_(!1)), SS());
                var t = this.value_;
                if (iS(t)) throw t.cause;
                return t;
            }),
            (t.set = function (e) {
                if (this.setter_) {
                    (this.isRunningSetter_ && a_(33, this.name_), (this.isRunningSetter_ = !0));
                    try {
                        this.setter_.call(this.scope_, e);
                    } finally {
                        this.isRunningSetter_ = !1;
                    }
                } else a_(34, this.name_);
            }),
            (t.trackAndCompute = function () {
                var e = this.value_,
                    t = this.dependenciesState_ === Zw.NOT_TRACKING_,
                    n = this.computeValue_(!0),
                    r = t || iS(e) || iS(n) || !this.equals_(e, n);
                return (r && (this.value_ = n), r);
            }),
            (t.computeValue_ = function (e) {
                this.isComputing_ = !0;
                var t,
                    n = Gw(!1);
                if (e) t = aS(this, this.derivation, this.scope_);
                else if (!0 === mS.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                else
                    try {
                        t = this.derivation.call(this.scope_);
                    } catch (r) {
                        t = new rS(r);
                    }
                return (Xw(n), (this.isComputing_ = !1), t);
            }),
            (t.suspend_ = function () {
                this.keepAlive_ || (sS(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
                var n = this,
                    r = !0,
                    i = void 0;
                return (function (e, t) {
                    var n, r, i, o, a;
                    void 0 === t && (t = p_);
                    var s,
                        u = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun';
                    if (t.scheduler || t.delay) {
                        var l = FS(t),
                            c = !1;
                        s = new xS(
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
                        s = new xS(
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
                        var a = lS();
                        (e({
                            observableKind: 'computed',
                            debugObjectName: n.name_,
                            type: kk,
                            object: n,
                            newValue: o,
                            oldValue: i,
                        }),
                            cS(a));
                    }
                    ((r = !1), (i = o));
                });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
                return this.name_ + '[' + this.derivation.toString() + ']';
            }),
            (t.valueOf = function () {
                return j_(this.get());
            }),
            (t[Yw] = function () {
                return this.valueOf();
            }),
            e
        );
    })(),
    nS = P_('ComputedValue', tS);
(!(function (e) {
    ((e[(e.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
        (e[(e.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
        (e[(e.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
        (e[(e.STALE_ = 2)] = 'STALE_'));
})(Zw || (Zw = {})),
    (function (e) {
        ((e[(e.NONE = 0)] = 'NONE'), (e[(e.LOG = 1)] = 'LOG'), (e[(e.BREAK = 2)] = 'BREAK'));
    })(eS || (eS = {})));
var rS = function (e) {
    ((this.cause = void 0), (this.cause = e));
};
function iS(e) {
    return e instanceof rS;
}
function oS(e) {
    switch (e.dependenciesState_) {
        case Zw.UP_TO_DATE_:
            return !1;
        case Zw.NOT_TRACKING_:
        case Zw.STALE_:
            return !0;
        case Zw.POSSIBLY_STALE_:
            for (var t = fS(!0), n = lS(), r = e.observing_, i = r.length, o = 0; o < i; o++) {
                var a = r[o];
                if (nS(a)) {
                    if (mS.disableErrorBoundaries) a.get();
                    else
                        try {
                            a.get();
                        } catch (s) {
                            return (cS(n), dS(t), !0);
                        }
                    if (e.dependenciesState_ === Zw.STALE_) return (cS(n), dS(t), !0);
                }
            }
            return (hS(e), cS(n), dS(t), !1);
    }
}
function aS(e, t, n) {
    var r = fS(!0);
    (hS(e),
        (e.newObserving_ = new Array(e.observing_.length + 100)),
        (e.unboundDepsCount_ = 0),
        (e.runId_ = ++mS.runId));
    var i,
        o = mS.trackingDerivation;
    if (((mS.trackingDerivation = e), mS.inBatch++, !0 === mS.disableErrorBoundaries)) i = t.call(n);
    else
        try {
            i = t.call(n);
        } catch (a) {
            i = new rS(a);
        }
    return (
        mS.inBatch--,
        (mS.trackingDerivation = o),
        (function (e) {
            for (
                var t = e.observing_,
                    n = (e.observing_ = e.newObserving_),
                    r = Zw.UP_TO_DATE_,
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
                (0 === u.diffValue_ && bS(u, e), (u.diffValue_ = 0));
            }
            for (; i--; ) {
                var l = n[i];
                1 === l.diffValue_ && ((l.diffValue_ = 0), yS(l, e));
            }
            r !== Zw.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        dS(r),
        i
    );
}
function sS(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) bS(t[n], e);
    e.dependenciesState_ = Zw.NOT_TRACKING_;
}
function uS(e) {
    var t = lS();
    try {
        return e();
    } finally {
        cS(t);
    }
}
function lS() {
    var e = mS.trackingDerivation;
    return ((mS.trackingDerivation = null), e);
}
function cS(e) {
    mS.trackingDerivation = e;
}
function fS(e) {
    var t = mS.allowStateReads;
    return ((mS.allowStateReads = e), t);
}
function dS(e) {
    mS.allowStateReads = e;
}
function hS(e) {
    if (e.dependenciesState_ !== Zw.UP_TO_DATE_) {
        e.dependenciesState_ = Zw.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = Zw.UP_TO_DATE_;
    }
}
var pS = function () {
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
    vS = !0,
    gS = !1,
    mS = (function () {
        var e = u_();
        return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (vS = !1),
            e.__mobxGlobals && e.__mobxGlobals.version !== new pS().version && (vS = !1),
            vS
                ? e.__mobxGlobals
                    ? ((e.__mobxInstanceCount += 1),
                      e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                      e.__mobxGlobals)
                    : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new pS()))
                : (setTimeout(function () {
                      gS || a_(35);
                  }, 1),
                  new pS())
        );
    })();
function yS(e, t) {
    (e.observers_.add(t),
        e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_));
}
function bS(e, t) {
    (e.observers_.delete(t), 0 === e.observers_.size && _S(e));
}
function _S(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), mS.pendingUnobservations.push(e));
}
function wS() {
    mS.inBatch++;
}
function SS() {
    if (0 == --mS.inBatch) {
        TS();
        for (var e = mS.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            ((n.isPendingUnobservation_ = !1),
                0 === n.observers_.size &&
                    (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof tS && n.suspend_()));
        }
        mS.pendingUnobservations = [];
    }
}
function kS(e) {
    var t = mS.trackingDerivation;
    return null !== t
        ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ && mS.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
          e.isBeingObserved_)
        : (0 === e.observers_.size && mS.inBatch > 0 && _S(e), !1);
}
function OS(e) {
    e.lowestObserverState_ !== Zw.STALE_ &&
        ((e.lowestObserverState_ = Zw.STALE_),
        e.observers_.forEach(function (e) {
            (e.dependenciesState_ === Zw.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = Zw.STALE_));
        }));
}
var xS = (function () {
        function e(e, t, n, r) {
            (void 0 === e && (e = 'Reaction'),
                (this.name_ = void 0),
                (this.onInvalidate_ = void 0),
                (this.errorHandler_ = void 0),
                (this.requiresObservable_ = void 0),
                (this.observing_ = []),
                (this.newObserving_ = []),
                (this.dependenciesState_ = Zw.NOT_TRACKING_),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.unboundDepsCount_ = 0),
                (this.isDisposed_ = !1),
                (this.isScheduled_ = !1),
                (this.isTrackPending_ = !1),
                (this.isRunning_ = !1),
                (this.isTracing_ = eS.NONE),
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
                this.isScheduled_ || ((this.isScheduled_ = !0), mS.pendingReactions.push(this), TS());
            }),
            (t.isScheduled = function () {
                return this.isScheduled_;
            }),
            (t.runReaction_ = function () {
                if (!this.isDisposed_) {
                    (wS(), (this.isScheduled_ = !1));
                    var e = mS.trackingContext;
                    if (((mS.trackingContext = this), oS(this))) {
                        this.isTrackPending_ = !0;
                        try {
                            this.onInvalidate_();
                        } catch (t) {
                            this.reportExceptionInDerivation_(t);
                        }
                    }
                    ((mS.trackingContext = e), SS());
                }
            }),
            (t.track = function (e) {
                if (!this.isDisposed_) {
                    (wS(), (this.isRunning_ = !0));
                    var t = mS.trackingContext;
                    mS.trackingContext = this;
                    var n = aS(this, e, void 0);
                    ((mS.trackingContext = t),
                        (this.isRunning_ = !1),
                        (this.isTrackPending_ = !1),
                        this.isDisposed_ && sS(this),
                        iS(n) && this.reportExceptionInDerivation_(n.cause),
                        SS());
                }
            }),
            (t.reportExceptionInDerivation_ = function (e) {
                var t = this;
                if (this.errorHandler_) this.errorHandler_(e, this);
                else {
                    if (mS.disableErrorBoundaries) throw e;
                    var n = "[mobx] uncaught error in '" + this + "'";
                    (mS.suppressReactionErrors || console.error(n, e),
                        mS.globalReactionErrorHandlers.forEach(function (n) {
                            return n(e, t);
                        }));
                }
            }),
            (t.dispose = function () {
                this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (wS(), sS(this), SS()));
            }),
            (t.getDisposer_ = function (e) {
                var t = this,
                    n = function n() {
                        (t.dispose(), null == e || null == e.removeEventListener || e.removeEventListener('abort', n));
                    };
                return (null == e || null == e.addEventListener || e.addEventListener('abort', n), (n[H_] = this), n);
            }),
            (t.toString = function () {
                return 'Reaction[' + this.name_ + ']';
            }),
            (t.trace = function (e) {}),
            e
        );
    })(),
    ES = 100,
    PS = function (e) {
        return e();
    };
function TS() {
    mS.inBatch > 0 || mS.isRunningReactions || PS(AS);
}
function AS() {
    mS.isRunningReactions = !0;
    for (var e = mS.pendingReactions, t = 0; e.length > 0; ) {
        ++t === ES && (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
    }
    mS.isRunningReactions = !1;
}
var CS = P_('Reaction', xS);
var NS = 'action',
    jS = 'autoAction',
    US = '<unnamed action>',
    BS = tw(NS),
    RS = tw('action.bound', { bound: !0 }),
    WS = tw(jS, { autoAction: !0 }),
    IS = tw('autoAction.bound', { autoAction: !0, bound: !0 });
function LS(e) {
    return function (t, n) {
        return __(t)
            ? Hw(t.name || US, t, e)
            : __(n)
              ? Hw(t, n, e)
              : q_(n)
                ? (e ? WS : BS).decorate_20223_(t, n)
                : w_(n)
                  ? Q_(t, n, e ? WS : BS)
                  : w_(t)
                    ? $_(tw(e ? jS : NS, { name: t, autoAction: e }))
                    : void 0;
    };
}
var DS = LS(!1);
Object.assign(DS, BS);
var VS = LS(!0);
function MS(e) {
    return __(e) && !0 === e.isMobxAction;
}
(Object.assign(VS, WS), (DS.bound = $_(RS)), (VS.bound = $_(IS)));
var zS = function (e) {
    return e();
};
function FS(e) {
    return e.scheduler
        ? e.scheduler
        : e.delay
          ? function (t) {
                return setTimeout(t, e.delay);
            }
          : zS;
}
function $S(e, t, n) {
    var r, i, o, a;
    void 0 === n && (n = p_);
    var s,
        u,
        l,
        c,
        f = null != (r = n.name) ? r : 'Reaction',
        d = DS(
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
        p = FS(n),
        v = !0,
        g = !1,
        m = n.compareStructural ? Y_.structural : n.equals || Y_.default,
        y = new xS(
            f,
            function () {
                v || h ? b() : g || ((g = !0), p(b));
            },
            n.onError,
            n.requiresObservable,
        );
    function b() {
        if (((g = !1), !y.isDisposed_)) {
            var t = !1;
            (y.track(function () {
                var n = (function (e, t) {
                    var n = Gw(e);
                    try {
                        return t();
                    } finally {
                        Xw(n);
                    }
                })(!1, function () {
                    return e(y);
                });
                ((t = v || !m(l, n)), (c = l), (l = n));
            }),
                ((v && n.fireImmediately) || (!v && t)) && d(l, c, y),
                (v = !1));
        }
    }
    return (
        (null != (i = n) && null != (o = i.signal) && o.aborted) || y.schedule_(),
        y.getDisposer_(null == (a = n) ? void 0 : a.signal)
    );
}
var QS = 'onBO',
    qS = 'onBUO';
function HS(e, t, n) {
    return KS(qS, e, t, n);
}
function KS(e, t, n, r) {
    var i = lO(t),
        o = __(r) ? r : n,
        a = e + 'L';
    return (
        i[a] ? i[a].add(o) : (i[a] = new Set([o])),
        function () {
            var e = i[a];
            e && (e.delete(o), 0 === e.size && delete i[a]);
        }
    );
}
var GS = 'never',
    XS = 'always',
    YS = 'observed';
function JS(e) {
    !0 === e.isolateGlobalState &&
        (function () {
            if (((mS.pendingReactions.length || mS.inBatch || mS.isRunningReactions) && a_(36), (gS = !0), vS)) {
                var e = u_();
                (0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0), (mS = new pS()));
            }
        })();
    var t,
        n,
        r = e.useProxies,
        i = e.enforceActions;
    if (
        (void 0 !== r && (mS.useProxies = r === XS || (r !== GS && 'undefined' != typeof Proxy)),
        'ifavailable' === r && (mS.verifyProxies = !0),
        void 0 !== i)
    ) {
        var o = i === XS ? XS : i === YS;
        ((mS.enforceActions = o), (mS.allowStateChanges = !0 !== o && o !== XS));
    }
    ([
        'computedRequiresReaction',
        'reactionRequiresObservable',
        'observableRequiresReaction',
        'disableErrorBoundaries',
        'safeDescriptors',
    ].forEach(function (t) {
        t in e && (mS[t] = !!e[t]);
    }),
        (mS.allowStateReads = !mS.observableRequiresReaction),
        e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = PS),
            (PS = function (e) {
                return t(function () {
                    return n(e);
                });
            })));
}
function ZS(e, t, n, r) {
    var i = B_(t);
    return (
        dO(function () {
            var t = Gk(e, r)[H_];
            N_(i).forEach(function (e) {
                t.extend_(e, i[e], !n || !(e in n) || n[e]);
            });
        }),
        e
    );
}
function ek(e) {
    var t,
        n = { name: e.name_ };
    return (
        e.observing_ &&
            e.observing_.length > 0 &&
            (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(ek)),
        n
    );
}
var tk = 0;
function nk() {
    this.message = 'FLOW_CANCELLED';
}
nk.prototype = Object.create(Error.prototype);
var rk = aw('flow'),
    ik = aw('flow.bound', { bound: !0 }),
    ok = Object.assign(function (e, t) {
        if (q_(t)) return rk.decorate_20223_(e, t);
        if (w_(t)) return Q_(e, t, rk);
        var n = e,
            r = n.name || '<unnamed flow>',
            i = function () {
                var e,
                    t = arguments,
                    i = ++tk,
                    o = DS(r + ' - runid: ' + i + ' - init', n).apply(this, t),
                    a = void 0,
                    s = new Promise(function (t, n) {
                        var s = 0;
                        function u(e) {
                            var t;
                            a = void 0;
                            try {
                                t = DS(r + ' - runid: ' + i + ' - yield ' + s++, o.next).call(o, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function l(e) {
                            var t;
                            a = void 0;
                            try {
                                t = DS(r + ' - runid: ' + i + ' - yield ' + s++, o.throw).call(o, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function c(e) {
                            if (!__(null == e ? void 0 : e.then))
                                return e.done ? t(e.value) : (a = Promise.resolve(e.value)).then(u, l);
                            e.then(c, n);
                        }
                        ((e = n), u(void 0));
                    });
                return (
                    (s.cancel = DS(r + ' - runid: ' + i + ' - cancel', function () {
                        try {
                            a && ak(a);
                            var t = o.return(void 0),
                                n = Promise.resolve(t.value);
                            (n.then(b_, b_), ak(n), e(new nk()));
                        } catch (r) {
                            e(r);
                        }
                    })),
                    s
                );
            };
        return ((i.isMobXFlow = !0), i);
    }, rk);
function ak(e) {
    __(e.cancel) && e.cancel();
}
function sk(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function uk(e, t) {
    if (void 0 === t) return nS(e);
    if (!1 === Jk(e)) return !1;
    if (!e[H_].values_.has(t)) return !1;
    var n = lO(e, t);
    return nS(n);
}
function lk(e, t) {
    return uk(e, t);
}
function ck(e) {
    return (function (e, t) {
        return !!e && (Jk(e) || !!e[H_] || G_(e) || CS(e) || nS(e));
    })(e);
}
function fk(e, t, n, r) {
    return __(n)
        ? (function (e, t, n, r) {
              return cO(e, t).observe_(n, r);
          })(e, t, n, r)
        : (function (e, t, n) {
              return cO(e).observe_(t, n);
          })(e, t, n);
}
function dk(e, t) {
    (void 0 === t && (t = void 0), wS());
    try {
        return e.apply(t);
    } finally {
        SS();
    }
}
function hk(e) {
    return e[H_];
}
ok.bound = $_(ik);
var pk = {
    has: function (e, t) {
        return hk(e).has_(t);
    },
    get: function (e, t) {
        return hk(e).get_(t);
    },
    set: function (e, t, n) {
        var r;
        return !!w_(t) && (null == (r = hk(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
        var n;
        return !!w_(t) && (null == (n = hk(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
        var r;
        return null == (r = hk(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
        return hk(e).ownKeys_();
    },
    preventExtensions: function (e) {
        a_(13);
    },
};
function vk(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
}
function gk(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
        n.push(t),
        y_(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function mk(e, t) {
    var n = lS();
    try {
        for (
            var r = [].concat(e.interceptors_ || []), i = 0, o = r.length;
            i < o && ((t = r[i](t)) && !t.type && a_(14), t);
            i++
        );
        return t;
    } finally {
        cS(n);
    }
}
function yk(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
}
function bk(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
        n.push(t),
        y_(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function _k(e, t) {
    var n = lS(),
        r = e.changeListeners_;
    if (r) {
        for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](t);
        cS(n);
    }
}
function wk(e, t, n) {
    return (
        dO(function () {
            var r = Gk(e, n)[H_];
            (null != t ||
                (t = (function (e) {
                    return (U_(e, F_) || x_(e, F_, I_({}, e[F_])), e[F_]);
                })(e)),
                N_(t).forEach(function (e) {
                    return r.make_(e, t[e]);
                }));
        }),
        e
    );
}
var Sk = 'splice',
    kk = 'update',
    Ok = {
        get: function (e, t) {
            var n = e[H_];
            return t === H_
                ? n
                : 'length' === t
                  ? n.getArrayLength_()
                  : 'string' != typeof t || isNaN(t)
                    ? U_(Pk, t)
                        ? Pk[t]
                        : e[t]
                    : n.get_(parseInt(t));
        },
        set: function (e, t, n) {
            var r = e[H_];
            return (
                'length' === t && r.setArrayLength_(n),
                'symbol' == typeof t || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n),
                !0
            );
        },
        preventExtensions: function () {
            a_(15);
        },
    },
    xk = (function () {
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
                (this.atom_ = new K_(e)),
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
                return gk(this, e);
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
                    bk(this, e)
                );
            }),
            (t.getArrayLength_ = function () {
                return (this.atom_.reportObserved(), this.values_.length);
            }),
            (t.setArrayLength_ = function (e) {
                ('number' != typeof e || isNaN(e) || e < 0) && a_('Out of range: ' + e);
                var t = this.values_.length;
                if (e !== t)
                    if (e > t) {
                        for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
                        this.spliceWithArray_(t, 0, n);
                    } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
                (e !== this.lastKnownLength_ && a_(16),
                    (this.lastKnownLength_ += t),
                    this.legacyMode_ && t > 0 && sO(e + t + 1));
            }),
            (t.spliceWithArray_ = function (e, t, n) {
                var r = this;
                this.atom_;
                var i = this.values_.length;
                if (
                    (void 0 === e ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
                    (t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e))),
                    void 0 === n && (n = h_),
                    vk(this))
                ) {
                    var o = mk(this, { object: this.proxy_, type: Sk, index: e, removedCount: t, added: n });
                    if (!o) return h_;
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
                    i = yk(this),
                    o =
                        i || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  type: kk,
                                  debugObjectName: this.atom_.name_,
                                  index: e,
                                  newValue: t,
                                  oldValue: n,
                              }
                            : null;
                (this.atom_.reportChanged(), i && _k(this, o));
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    i = yk(this),
                    o =
                        i || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  debugObjectName: this.atom_.name_,
                                  type: Sk,
                                  index: e,
                                  removed: n,
                                  added: t,
                                  removedCount: n.length,
                                  addedCount: t.length,
                              }
                            : null;
                (this.atom_.reportChanged(), i && _k(this, o));
            }),
            (t.get_ = function (e) {
                if (!(this.legacyMode_ && e >= this.values_.length))
                    return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]));
                console.warn('[mobx] Out of bounds read: ' + e);
            }),
            (t.set_ = function (e, t) {
                var n = this.values_;
                if ((this.legacyMode_ && e > n.length && a_(17, e, n.length), e < n.length)) {
                    this.atom_;
                    var r = n[e];
                    if (vk(this)) {
                        var i = mk(this, { type: kk, object: this.proxy_, index: e, newValue: t });
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
function Ek(e, t, n, r) {
    return (
        void 0 === n && (n = 'ObservableArray'),
        void 0 === r && (r = !1),
        m_(),
        dO(function () {
            var i = new xk(n, t, r, !1);
            E_(i.values_, H_, i);
            var o = new Proxy(i.values_, Ok);
            return ((i.proxy_ = o), e && e.length && i.spliceWithArray_(0, 0, e), o);
        })
    );
}
var Pk = {
    clear: function () {
        return this.splice(0);
    },
    replace: function (e) {
        var t = this[H_];
        return t.spliceWithArray_(0, t.values_.length, e);
    },
    toJSON: function () {
        return this.slice();
    },
    splice: function (e, t) {
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
        var o = this[H_];
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
        return this[H_].spliceWithArray_(e, t, n);
    },
    push: function () {
        for (var e = this[H_], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(e.values_.length, 0, n), e.values_.length);
    },
    pop: function () {
        return this.splice(Math.max(this[H_].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        for (var e = this[H_], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(0, 0, n), e.values_.length);
    },
    reverse: function () {
        return (mS.trackingDerivation && a_(37, 'reverse'), this.replace(this.slice().reverse()), this);
    },
    sort: function () {
        mS.trackingDerivation && a_(37, 'sort');
        var e = this.slice();
        return (e.sort.apply(e, arguments), this.replace(e), this);
    },
    remove: function (e) {
        var t = this[H_],
            n = t.dehanceValues_(t.values_).indexOf(e);
        return n > -1 && (this.splice(n, 1), !0);
    },
};
function Tk(e, t) {
    'function' == typeof Array.prototype[e] && (Pk[e] = t(e));
}
function Ak(e) {
    return function () {
        var t = this[H_];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments);
    };
}
function Ck(e) {
    return function (t, n) {
        var r = this,
            i = this[H_];
        return (
            i.atom_.reportObserved(),
            i.dehanceValues_(i.values_)[e](function (e, i) {
                return t.call(n, e, i, r);
            })
        );
    };
}
function Nk(e) {
    return function () {
        var t = this,
            n = this[H_];
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
(Tk('at', Ak),
    Tk('concat', Ak),
    Tk('flat', Ak),
    Tk('includes', Ak),
    Tk('indexOf', Ak),
    Tk('join', Ak),
    Tk('lastIndexOf', Ak),
    Tk('slice', Ak),
    Tk('toString', Ak),
    Tk('toLocaleString', Ak),
    Tk('toSorted', Ak),
    Tk('toSpliced', Ak),
    Tk('with', Ak),
    Tk('every', Ck),
    Tk('filter', Ck),
    Tk('find', Ck),
    Tk('findIndex', Ck),
    Tk('findLast', Ck),
    Tk('findLastIndex', Ck),
    Tk('flatMap', Ck),
    Tk('forEach', Ck),
    Tk('map', Ck),
    Tk('some', Ck),
    Tk('toReversed', Ck),
    Tk('reduce', Nk),
    Tk('reduceRight', Nk));
var jk,
    Uk,
    Bk = P_('ObservableArrayAdministration', xk);
function Rk(e) {
    return S_(e) && Bk(e[H_]);
}
var Wk = {},
    Ik = 'add',
    Lk = 'delete';
((jk = Symbol.iterator), (Uk = Symbol.toStringTag));
var Dk,
    Vk,
    Mk = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = J_),
                void 0 === n && (n = 'ObservableMap'),
                (this.enhancer_ = void 0),
                (this.name_ = void 0),
                (this[H_] = Wk),
                (this.data_ = void 0),
                (this.hasMap_ = void 0),
                (this.keysAtom_ = void 0),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = t),
                (this.name_ = n),
                __(Map) || a_(18),
                dO(function () {
                    ((r.keysAtom_ = X_('ObservableMap.keys()')),
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
                if (!mS.trackingDerivation) return this.has_(e);
                var n = this.hasMap_.get(e);
                if (!n) {
                    var r = (n = new Jw(this.has_(e), Z_, 'ObservableMap.key?', !1));
                    (this.hasMap_.set(e, r),
                        HS(r, function () {
                            return t.hasMap_.delete(e);
                        }));
                }
                return n.get();
            }),
            (t.set = function (e, t) {
                var n = this.has_(e);
                if (vk(this)) {
                    var r = mk(this, { type: n ? kk : Ik, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, vk(this)) && !mk(this, { type: Lk, object: this, name: e })) return !1;
                if (this.has_(e)) {
                    var n = yk(this),
                        r = n
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: Lk,
                                  object: this,
                                  oldValue: this.data_.get(e).value_,
                                  name: e,
                              }
                            : null;
                    return (
                        dk(function () {
                            var n;
                            (t.keysAtom_.reportChanged(),
                                null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                                t.data_.get(e).setNewValue_(void 0),
                                t.data_.delete(e));
                        }),
                        n && _k(this, r),
                        !0
                    );
                }
                return !1;
            }),
            (t.updateValue_ = function (e, t) {
                var n = this.data_.get(e);
                if ((t = n.prepareNewValue_(t)) !== mS.UNCHANGED) {
                    var r = yk(this),
                        i = r
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: kk,
                                  object: this,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), r && _k(this, i));
                }
            }),
            (t.addValue_ = function (e, t) {
                var n = this;
                (this.keysAtom_,
                    dk(function () {
                        var r,
                            i = new Jw(t, n.enhancer_, 'ObservableMap.key', !1);
                        (n.data_.set(e, i),
                            (t = i.value_),
                            null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                            n.keysAtom_.reportChanged());
                    }));
                var r = yk(this),
                    i = r
                        ? {
                              observableKind: 'map',
                              debugObjectName: this.name_,
                              type: Ik,
                              object: this,
                              name: e,
                              newValue: t,
                          }
                        : null;
                r && _k(this, i);
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
                return mO({
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
                return mO({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            i = n.value;
                        return { done: r, value: r ? void 0 : [i, e.get(i)] };
                    },
                });
            }),
            (t[jk] = function () {
                return this.entries();
            }),
            (t.forEach = function (e, t) {
                for (var n, r = z_(this); !(n = r()).done; ) {
                    var i = n.value,
                        o = i[0],
                        a = i[1];
                    e.call(t, a, o, this);
                }
            }),
            (t.merge = function (e) {
                var t = this;
                return (
                    zk(e) && (e = new Map(e)),
                    dk(function () {
                        k_(e)
                            ? (function (e) {
                                  var t = Object.keys(e);
                                  if (!C_) return t;
                                  var n = Object.getOwnPropertySymbols(e);
                                  return n.length
                                      ? [].concat(
                                            t,
                                            n.filter(function (t) {
                                                return d_.propertyIsEnumerable.call(e, t);
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
                              : T_(e)
                                ? (e.constructor !== Map && a_(19, e),
                                  e.forEach(function (e, n) {
                                      return t.set(n, e);
                                  }))
                                : null != e && a_(20, e);
                    }),
                    this
                );
            }),
            (t.clear = function () {
                var e = this;
                dk(function () {
                    uS(function () {
                        for (var t, n = z_(e.keys()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    dk(function () {
                        for (
                            var n,
                                r = (function (e) {
                                    if (T_(e) || zk(e)) return e;
                                    if (Array.isArray(e)) return new Map(e);
                                    if (k_(e)) {
                                        var t = new Map();
                                        for (var n in e) t.set(n, e[n]);
                                        return t;
                                    }
                                    return a_(21, e);
                                })(e),
                                i = new Map(),
                                o = !1,
                                a = z_(t.data_.keys());
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
                        for (var l, c = z_(r.entries()); !(l = c()).done; ) {
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
                                for (var g = t.data_.keys(), m = i.keys(), y = g.next(), b = m.next(); !y.done; ) {
                                    if (y.value !== b.value) {
                                        t.keysAtom_.reportChanged();
                                        break;
                                    }
                                    ((y = g.next()), (b = m.next()));
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
                return bk(this, e);
            }),
            (t.intercept_ = function (e) {
                return gk(this, e);
            }),
            W_(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.keysAtom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: Uk,
                    get: function () {
                        return 'Map';
                    },
                },
            ]),
            e
        );
    })(),
    zk = P_('ObservableMap', Mk);
var Fk = {};
((Dk = Symbol.iterator), (Vk = Symbol.toStringTag));
var $k = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = J_),
                void 0 === n && (n = 'ObservableSet'),
                (this.name_ = void 0),
                (this[H_] = Fk),
                (this.data_ = new Set()),
                (this.atom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = void 0),
                (this.name_ = n),
                __(Set) || a_(22),
                (this.enhancer_ = function (e, r) {
                    return t(e, r, n);
                }),
                dO(function () {
                    ((r.atom_ = X_(r.name_)), e && r.replace(e));
                }));
        }
        var t = e.prototype;
        return (
            (t.dehanceValue_ = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
                var e = this;
                dk(function () {
                    uS(function () {
                        for (var t, n = z_(e.data_.values()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.forEach = function (e, t) {
                for (var n, r = z_(this); !(n = r()).done; ) {
                    var i = n.value;
                    e.call(t, i, i, this);
                }
            }),
            (t.add = function (e) {
                var t = this;
                if ((this.atom_, vk(this)) && !mk(this, { type: Ik, object: this, newValue: e })) return this;
                if (!this.has(e)) {
                    dk(function () {
                        (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
                    });
                    var n = yk(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: Ik,
                                  object: this,
                                  newValue: e,
                              }
                            : null;
                    n && _k(this, r);
                }
                return this;
            }),
            (t.delete = function (e) {
                var t = this;
                if (vk(this) && !mk(this, { type: Lk, object: this, oldValue: e })) return !1;
                if (this.has(e)) {
                    var n = yk(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: Lk,
                                  object: this,
                                  oldValue: e,
                              }
                            : null;
                    return (
                        dk(function () {
                            (t.atom_.reportChanged(), t.data_.delete(e));
                        }),
                        n && _k(this, r),
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
                return mO({
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
                return mO({
                    next: function () {
                        return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
                    },
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    Qk(e) && (e = new Set(e)),
                    dk(function () {
                        Array.isArray(e) || A_(e)
                            ? (t.clear(),
                              e.forEach(function (e) {
                                  return t.add(e);
                              }))
                            : null != e && a_('Cannot initialize set from ' + e);
                    }),
                    this
                );
            }),
            (t.observe_ = function (e, t) {
                return bk(this, e);
            }),
            (t.intercept_ = function (e) {
                return gk(this, e);
            }),
            (t.toJSON = function () {
                return Array.from(this);
            }),
            (t.toString = function () {
                return '[object ObservableSet]';
            }),
            (t[Dk] = function () {
                return this.values();
            }),
            W_(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.atom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: Vk,
                    get: function () {
                        return 'Set';
                    },
                },
            ]),
            e
        );
    })(),
    Qk = P_('ObservableSet', $k),
    qk = Object.create(null),
    Hk = 'remove',
    Kk = (function () {
        function e(e, t, n, r) {
            (void 0 === t && (t = new Map()),
                void 0 === r && (r = _w),
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
                (this.keysAtom_ = new K_('ObservableObject.keys')),
                (this.isPlainObject_ = k_(this.target_)));
        }
        var t = e.prototype;
        return (
            (t.getObservablePropValue_ = function (e) {
                return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
                var n = this.values_.get(e);
                if (n instanceof tS) return (n.set(t), !0);
                if (vk(this)) {
                    var r = mk(this, { type: kk, object: this.proxy_ || this.target_, name: e, newValue: t });
                    if (!r) return null;
                    t = r.newValue;
                }
                if ((t = n.prepareNewValue_(t)) !== mS.UNCHANGED) {
                    var i = yk(this),
                        o = i
                            ? {
                                  type: kk,
                                  observableKind: 'object',
                                  debugObjectName: this.name_,
                                  object: this.proxy_ || this.target_,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), i && _k(this, o));
                }
                return !0;
            }),
            (t.get_ = function (e) {
                return (mS.trackingDerivation && !U_(this.target_, e) && this.has_(e), this.target_[e]);
            }),
            (t.set_ = function (e, t, n) {
                return (
                    void 0 === n && (n = !1),
                    U_(this.target_, e)
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
                if (!mS.trackingDerivation) return e in this.target_;
                this.pendingKeys_ || (this.pendingKeys_ = new Map());
                var t = this.pendingKeys_.get(e);
                return (
                    t ||
                        ((t = new Jw(e in this.target_, Z_, 'ObservableObject.key?', !1)), this.pendingKeys_.set(e, t)),
                    t.get()
                );
            }),
            (t.make_ = function (e, t) {
                if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                    if (!(e in this.target_)) {
                        var n;
                        if (null != (n = this.target_[F_]) && n[e]) return;
                        a_(1, t.annotationType_, this.name_ + '.' + e.toString());
                    }
                    for (var r = this.target_; r && r !== d_; ) {
                        var i = c_(r, e);
                        if (i) {
                            var o = t.make_(this, e, i, r);
                            if (0 === o) return;
                            if (1 === o) break;
                        }
                        r = Object.getPrototypeOf(r);
                    }
                    Zk(this, t, e);
                }
            }),
            (t.extend_ = function (e, t, n, r) {
                if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                    return this.defineProperty_(e, t, r);
                var i = n.extend_(this, e, t, r);
                return (i && Zk(this, n, e), i);
            }),
            (t.defineProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    wS();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (vk(this)) {
                        var i = mk(this, { object: this.proxy_ || this.target_, name: e, type: Ik, newValue: t.value });
                        if (!i) return null;
                        var o = i.newValue;
                        t.value !== o && (t = I_({}, t, { value: o }));
                    }
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                    } else f_(this.target_, e, t);
                    this.notifyPropertyAddition_(e, t.value);
                } finally {
                    SS();
                }
                return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
                (void 0 === r && (r = !1), this.keysAtom_);
                try {
                    wS();
                    var i = this.delete_(e);
                    if (!i) return i;
                    if (vk(this)) {
                        var o = mk(this, { object: this.proxy_ || this.target_, name: e, type: Ik, newValue: t });
                        if (!o) return null;
                        t = o.newValue;
                    }
                    var a = Yk(e),
                        s = {
                            configurable: !mS.safeDescriptors || this.isPlainObject_,
                            enumerable: !0,
                            get: a.get,
                            set: a.set,
                        };
                    if (r) {
                        if (!Reflect.defineProperty(this.target_, e, s)) return !1;
                    } else f_(this.target_, e, s);
                    var u = new Jw(t, n, 'ObservableObject.key', !1);
                    (this.values_.set(e, u), this.notifyPropertyAddition_(e, u.value_));
                } finally {
                    SS();
                }
                return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    wS();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (vk(this))
                        if (!mk(this, { object: this.proxy_ || this.target_, name: e, type: Ik, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var i = Yk(e),
                        o = {
                            configurable: !mS.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: i.get,
                            set: i.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, o)) return !1;
                    } else f_(this.target_, e, o);
                    (this.values_.set(e, new tS(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    SS();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !U_(this.target_, e))) return !0;
                if (vk(this) && !mk(this, { object: this.proxy_ || this.target_, name: e, type: Hk })) return null;
                try {
                    var n, r;
                    wS();
                    var i,
                        o = yk(this),
                        a = this.values_.get(e),
                        s = void 0;
                    if (!a && o) s = null == (i = c_(this.target_, e)) ? void 0 : i.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (a && (this.values_.delete(e), a instanceof Jw && (s = a.value_), OS(a)),
                        this.keysAtom_.reportChanged(),
                        null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
                        o)
                    ) {
                        var u = {
                            type: Hk,
                            observableKind: 'object',
                            object: this.proxy_ || this.target_,
                            debugObjectName: this.name_,
                            oldValue: s,
                            name: e,
                        };
                        (0, o && _k(this, u));
                    }
                } finally {
                    SS();
                }
                return !0;
            }),
            (t.observe_ = function (e, t) {
                return bk(this, e);
            }),
            (t.intercept_ = function (e) {
                return gk(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
                var n,
                    r,
                    i = yk(this);
                if (i) {
                    var o = i
                        ? {
                              type: Ik,
                              observableKind: 'object',
                              debugObjectName: this.name_,
                              object: this.proxy_ || this.target_,
                              name: e,
                              newValue: t,
                          }
                        : null;
                    i && _k(this, o);
                }
                (null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(!0),
                    this.keysAtom_.reportChanged());
            }),
            (t.ownKeys_ = function () {
                return (this.keysAtom_.reportObserved(), N_(this.target_));
            }),
            (t.keys_ = function () {
                return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
            }),
            e
        );
    })();
function Gk(e, t) {
    var n;
    if (U_(e, H_)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
        i = new Kk(
            e,
            new Map(),
            String(r),
            (function (e) {
                var t;
                return e ? (null != (t = e.defaultDecorator) ? t : ww(e)) : void 0;
            })(t),
        );
    return (x_(e, H_, i), e);
}
var Xk = P_('ObservableObjectAdministration', Kk);
function Yk(e) {
    return (
        qk[e] ||
        (qk[e] = {
            get: function () {
                return this[H_].getObservablePropValue_(e);
            },
            set: function (t) {
                return this[H_].setObservablePropValue_(e, t);
            },
        })
    );
}
function Jk(e) {
    return !!S_(e) && Xk(e[H_]);
}
function Zk(e, t, n) {
    var r;
    null == (r = e.target_[F_]) || delete r[n];
}
var eO = oO(0),
    tO = (function () {
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
    nO = 0,
    rO = function () {};
!(function (e, t) {
    Object.setPrototypeOf
        ? Object.setPrototypeOf(e.prototype, t)
        : void 0 !== e.prototype.__proto__
          ? (e.prototype.__proto__ = t)
          : (e.prototype = t);
})(rO, Array.prototype);
var iO = (function (e, t, n) {
    function r(t, n, r, i) {
        var o;
        return (
            void 0 === r && (r = 'ObservableArray'),
            void 0 === i && (i = !1),
            (o = e.call(this) || this),
            dO(function () {
                var e = new xk(r, n, i, !0);
                ((e.proxy_ = V_(o)),
                    E_(V_(o), H_, e),
                    t && t.length && o.spliceWithArray(0, 0, t),
                    tO && Object.defineProperty(V_(o), '0', eO));
            }),
            o
        );
    }
    L_(r, e);
    var i = r.prototype;
    return (
        (i.concat = function () {
            this[H_].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return Array.prototype.concat.apply(
                this.slice(),
                t.map(function (e) {
                    return Rk(e) ? e.slice() : e;
                }),
            );
        }),
        (i[n] = function () {
            var e = this,
                t = 0;
            return mO({
                next: function () {
                    return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
                },
            });
        }),
        W_(r, [
            {
                key: 'length',
                get: function () {
                    return this[H_].getArrayLength_();
                },
                set: function (e) {
                    this[H_].setArrayLength_(e);
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
})(rO, Symbol.toStringTag, Symbol.iterator);
function oO(e) {
    return {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this[H_].get_(e);
        },
        set: function (t) {
            this[H_].set_(e, t);
        },
    };
}
function aO(e) {
    f_(iO.prototype, '' + e, oO(e));
}
function sO(e) {
    if (e > nO) {
        for (var t = nO; t < e + 100; t++) aO(t);
        nO = e;
    }
}
function uO(e, t, n) {
    return new iO(e, t, n);
}
function lO(e, t) {
    if ('object' == typeof e && null !== e) {
        if (Rk(e)) return (void 0 !== t && a_(23), e[H_].atom_);
        if (Qk(e)) return e.atom_;
        if (zk(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return (n || a_(25, t, fO(e)), n);
        }
        if (Jk(e)) {
            if (!t) return a_(26);
            var r = e[H_].values_.get(t);
            return (r || a_(27, t, fO(e)), r);
        }
        if (G_(e) || nS(e) || CS(e)) return e;
    } else if (__(e) && CS(e[H_])) return e[H_];
    a_(28);
}
function cO(e, t) {
    return (
        e || a_(29),
        void 0 !== t ? cO(lO(e, t)) : G_(e) || nS(e) || CS(e) || zk(e) || Qk(e) ? e : e[H_] ? e[H_] : void a_(24, e)
    );
}
function fO(e, t) {
    var n;
    if (void 0 !== t) n = lO(e, t);
    else {
        if (MS(e)) return e.name;
        n = Jk(e) || zk(e) || Qk(e) ? cO(e) : lO(e);
    }
    return n.name_;
}
function dO(e) {
    var t = lS(),
        n = Gw(!0);
    wS();
    try {
        return e();
    } finally {
        (SS(), Xw(n), cS(t));
    }
}
(Object.entries(Pk).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && x_(iO.prototype, t, n);
}),
    sO(1e3));
var hO = d_.toString;
function pO(e, t, n) {
    return (void 0 === n && (n = -1), vO(e, t, n));
}
function vO(e, t, n, r, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var o = typeof e;
    if ('function' !== o && 'object' !== o && 'object' != typeof t) return !1;
    var a = hO.call(e);
    if (a !== hO.call(t)) return !1;
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
    ((e = gO(e)), (t = gO(t)));
    var s = '[object Array]' === a;
    if (!s) {
        if ('object' != typeof e || 'object' != typeof t) return !1;
        var u = e.constructor,
            l = t.constructor;
        if (
            u !== l &&
            !(__(u) && u instanceof u && __(l) && l instanceof l) &&
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
        for (; c--; ) if (!vO(e[c], t[c], n - 1, r, i)) return !1;
    } else {
        var f,
            d = Object.keys(e);
        if (((c = d.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (!U_(t, (f = d[c])) || !vO(e[f], t[f], n - 1, r, i)) return !1;
    }
    return (r.pop(), i.pop(), !0);
}
function gO(e) {
    return Rk(e) ? e.slice() : T_(e) || zk(e) || A_(e) || Qk(e) ? Array.from(e.entries()) : e;
}
function mO(e) {
    return ((e[Symbol.iterator] = yO), e);
}
function yO() {
    return this;
}
if (
    (['Symbol', 'Map', 'Set'].forEach(function (e) {
        void 0 === u_()[e] && a_("MobX requires global '" + e + "' to be available or polyfilled");
    }),
    'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
                return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
            },
            extras: { getDebugName: fO },
            $mobx: H_,
        }),
    !D.useState)
)
    throw new Error('mobx-react-lite requires React with Hooks support');
if (!wk) throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
function bO(e) {
    e();
}
function _O(e) {
    return ek(lO(e, t));
    var t;
}
var wO = new ((function () {
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
    SO = { exports: {} },
    kO = {},
    OO = D;
var xO =
        'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    EO = OO.useState,
    PO = OO.useEffect,
    TO = OO.useLayoutEffect,
    AO = OO.useDebugValue;
function CO(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !xO(e, n);
    } catch (r) {
        return !0;
    }
}
var NO =
    'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
              return t();
          }
        : function (e, t) {
              var n = t(),
                  r = EO({ inst: { value: n, getSnapshot: t } }),
                  i = r[0].inst,
                  o = r[1];
              return (
                  TO(
                      function () {
                          ((i.value = n), (i.getSnapshot = t), CO(i) && o({ inst: i }));
                      },
                      [e, n, t],
                  ),
                  PO(
                      function () {
                          return (
                              CO(i) && o({ inst: i }),
                              e(function () {
                                  CO(i) && o({ inst: i });
                              })
                          );
                      },
                      [e],
                  ),
                  AO(n),
                  n
              );
          };
((kO.useSyncExternalStore = void 0 !== OO.useSyncExternalStore ? OO.useSyncExternalStore : NO), (SO.exports = kO));
var jO,
    UO,
    BO = SO.exports;
function RO(e) {
    e.reaction = new xS('observer'.concat(e.name), function () {
        var t;
        ((e.stateVersion = Symbol()), null === (t = e.onStoreChange) || void 0 === t || t.call(e));
    });
}
var WO = 'function' == typeof Symbol && Symbol.for,
    IO =
        null !==
            (UO =
                null === (jO = Object.getOwnPropertyDescriptor(function () {}, 'name')) || void 0 === jO
                    ? void 0
                    : jO.configurable) &&
        void 0 !== UO &&
        UO,
    LO = WO
        ? Symbol.for('react.forward_ref')
        : 'function' == typeof D.forwardRef &&
          D.forwardRef(function (e) {
              return null;
          }).$$typeof,
    DO = WO
        ? Symbol.for('react.memo')
        : 'function' == typeof D.memo &&
          D.memo(function (e) {
              return null;
          }).$$typeof;
function VO(e, t) {
    if (DO && e.$$typeof === DO)
        throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
        );
    var n = (void 0, !1),
        r = e,
        i = e.displayName || e.name;
    if (LO && e.$$typeof === LO && ((n = !0), 'function' != typeof (r = e.render)))
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
                            wO.unregister(r),
                            (r.onStoreChange = e),
                            r.reaction || (RO(r), (r.stateVersion = Symbol())),
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
                (a.reaction || (RO(a), wO.register(n, a, a)),
                V.useDebugValue(a.reaction, _O),
                BO.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot),
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
        IO && Object.defineProperty(o, 'name', { value: e.name, writable: !0, configurable: !0 }),
        e.contextTypes && (o.contextTypes = e.contextTypes),
        n && (o = D.forwardRef(o)),
        (function (e, t) {
            Object.keys(e).forEach(function (n) {
                zO[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
            });
        })(e, (o = D.memo(o))),
        o
    );
}
var MO,
    zO = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
((MO = Df.unstable_batchedUpdates) || (MO = bO), JS({ reactionScheduler: MO }), wO.finalizeAllImmediately);
const FO = [
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
    $O = {
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
    QO = console.assert,
    qO = 1,
    HO = 3,
    KO = 0,
    GO = 1,
    XO = 2,
    YO = 3,
    JO = {
        AREA: XO,
        BASE: XO,
        BASEFONT: XO,
        DATALIST: XO,
        HEAD: XO,
        LINK: XO,
        META: XO,
        NOEMBED: XO,
        NOFRAMES: XO,
        PARAM: XO,
        RP: XO,
        SCRIPT: XO,
        STYLE: XO,
        TEMPLATE: XO,
        TITLE: XO,
        NOSCRIPT: XO,
        HR: YO,
        LISTING: XO,
        PLAINTEXT: XO,
        PRE: XO,
        XMP: XO,
        BR: YO,
        RT: XO,
        INPUT: XO,
        SELECT: XO,
        BUTTON: XO,
        TEXTAREA: XO,
        ABBR: XO,
        CODE: XO,
        IFRAME: XO,
        TIME: XO,
        VAR: XO,
    },
    ZO = new Set([
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
const ex = (e, t) => {
        const n = Math.floor(e.length / 2);
        return t === e[n]
            ? n + 1
            : t < e[n]
              ? 1 === e.length
                  ? 0
                  : ex(e.slice(0, n), t)
              : 1 === e.length
                ? 1
                : n + ex(e.slice(n), t);
    },
    tx = '▔',
    nx = 1e3,
    rx = 3;
let ix = class e {
    constructor(e) {
        this.model = e;
    }
    static getUnicodeBlockFeature(e) {
        if (!e || e === tx) return tx;
        const t = e.codePointAt(0);
        if (void 0 === t) return tx;
        return `${ex(FO, t)}`.padStart(3, '0');
    }
    static getFeature(t, n, r, i, o, a, s, u, l) {
        const c = e.getUnicodeBlockFeature(t),
            f = e.getUnicodeBlockFeature(n),
            d = e.getUnicodeBlockFeature(r),
            h = e.getUnicodeBlockFeature(i),
            p = e.getUnicodeBlockFeature(o),
            v = e.getUnicodeBlockFeature(a),
            g = {
                UP1: s,
                UP2: u,
                UP3: l,
                BP1: s + u,
                BP2: u + l,
                UW1: t,
                UW2: n,
                UW3: r,
                UW4: i,
                UW5: o,
                UW6: a,
                BW1: n + r,
                BW2: r + i,
                BW3: i + o,
                TW1: t + n + r,
                TW2: n + r + i,
                TW3: r + i + o,
                TW4: i + o + a,
                UB1: c,
                UB2: f,
                UB3: d,
                UB4: h,
                UB5: p,
                UB6: v,
                BB1: f + d,
                BB2: d + h,
                BB3: h + p,
                TB1: c + f + d,
                TB2: f + d + h,
                TB3: d + h + p,
                TB4: h + p + v,
                UQ1: s + c,
                UQ2: u + f,
                UQ3: l + d,
                BQ1: u + f + d,
                BQ2: u + d + h,
                BQ3: l + f + d,
                BQ4: l + d + h,
                TQ1: u + c + f + d,
                TQ2: u + f + d + h,
                TQ3: l + c + f + d,
                TQ4: l + f + d + h,
            };
        return Object.entries(g)
            .filter((e) => !e[1].includes(tx))
            .map(([e, t]) => `${e}:${t}`);
    }
    static hasChildTextNode(e) {
        for (const t of e.childNodes) if (t.nodeType === rx) return !0;
        return !1;
    }
    parse(t, n = nx) {
        if ('' === t) return [];
        let r = 'U',
            i = 'U',
            o = 'U';
        const a = [t[0]];
        for (let s = 1; s < t.length; s++) {
            const u = e
                    .getFeature(t[s - 3] || tx, t[s - 2] || tx, t[s - 1], t[s], t[s + 1] || tx, t[s + 2] || tx, r, i, o)
                    .map((e) => this.model.get(e) || 0)
                    .reduce((e, t) => e + t),
                l = u > 0 ? 'B' : 'O';
            (u > n && a.push(''), (a[a.length - 1] += t[s]), (r = i), (i = o), (o = l));
        }
        return a;
    }
    applyElement(e, t = nx) {
        new (class {
            constructor(e, t) {
                ((this.separator = '​'),
                    (this.threshold = nx),
                    (this.parser_ = e),
                    void 0 !== t &&
                        (void 0 !== t.className && (this.className = t.className),
                        void 0 !== t.separator && (this.separator = t.separator),
                        void 0 !== t.threshold && (this.threshold = t.threshold)));
            }
            applyToElement(e) {
                for (const t of this.getBlocks(e)) (QO(t.hasText()), this.applyToParagraph(t));
            }
            *getBlocks(e, t) {
                if ((QO(e.nodeType === qO), this.className && e.classList.contains(this.className))) return;
                const n = (function (e) {
                    const t = e.nodeName,
                        n = JO[t];
                    if (void 0 !== n) return n;
                    if ('function' == typeof getComputedStyle) {
                        const t = getComputedStyle(e);
                        switch (t.whiteSpace) {
                            case 'nowrap':
                            case 'pre':
                                return XO;
                        }
                        const n = t.display;
                        if (n) return 'inline' === n ? KO : GO;
                    }
                    return ZO.has(t) ? GO : KO;
                })(e);
                if (n === XO) return;
                if (n === YO) return (t && t.hasText() && (yield t, (t.textNodes = [])), void QO(!e.firstChild));
                QO(n === GO || n === KO);
                const r = !t || n === GO,
                    i = r
                        ? new (class {
                              constructor(e) {
                                  ((this.textNodes = []), (this.element = e));
                              }
                              hasText() {
                                  return this.textNodes.length > 0;
                              }
                          })(e)
                        : t;
                QO(i);
                for (const o of e.childNodes)
                    switch (o.nodeType) {
                        case qO:
                            for (const e of this.getBlocks(o, i)) yield e;
                            break;
                        case HO:
                            i.textNodes.push(o);
                    }
                r && i.hasText() && (yield i);
            }
            applyToParagraph(e) {
                const t = e.textNodes;
                QO(t.length > 0);
                const n = t.map((e) => e.nodeValue).join('');
                if (/^\s*$/.test(n)) return;
                const r = this.parser_.parse(n, this.threshold);
                if ((QO(r.length > 0), QO(r.reduce((e, t) => e + t.length, 0) === n.length), r.length <= 1)) return;
                const i = [];
                let o = 0;
                for (const a of r) (QO(a.length > 0), (o += a.length), i.push(o));
                (QO(i[0] > 0),
                    QO(i[i.length - 1] === n.length),
                    ++i[i.length - 1],
                    QO(i.length > 1),
                    this.splitTextNodes(t, i),
                    this.applyBlockStyle(e.element));
            }
            splitTextNodes(e, t) {
                QO(t.length > 0);
                const n = e.reduce((e, t) => e + (t.nodeValue ? t.nodeValue.length : 0), 0);
                QO(t[t.length - 1] > n);
                let r = 0,
                    i = t[0];
                QO(i > 0);
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
                        (QO(n >= u), s.push(e.substring(u, n)), (u = n), ++r, QO(t[r] > i), (i = t[r]));
                    }
                    (QO(s.length > 0), u < e.length && s.push(e.substring(u)), this.splitTextNode(a, s), (o = n));
                }
                (QO(o === n), QO(r < t.length), QO(t[r] >= n));
            }
            splitTextNode(e, t) {
                (QO(t.length > 1), QO(e.nodeValue === t.join('')));
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
        })(this, { separator: e.ownerDocument.createElement('wbr'), threshold: t }).applyToElement(e);
    }
    translateHTMLString(t, n = nx) {
        if ('' === t) return t;
        const r = ((e) => new DOMParser().parseFromString(e, 'text/html'))(t);
        if (e.hasChildTextNode(r.body)) {
            const e = r.createElement('span');
            (e.append(...r.body.childNodes), r.body.append(e));
        }
        return (this.applyElement(r.body.childNodes[0], n), r.body.innerHTML);
    }
};
const ox = () => new ix(new Map(Object.entries($O)));
function ax(e) {
    var t,
        n,
        r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
        if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = ax(e[t])) && (r && (r += ' '), (r += n));
        else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
}
const sx = (e) => ('boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e),
    ux = function () {
        for (var e, t, n = 0, r = ''; n < arguments.length; )
            (e = arguments[n++]) && (t = ax(e)) && (r && (r += ' '), (r += t));
        return r;
    },
    lx = (e, t) => (n) => {
        var r;
        if (null == (null == t ? void 0 : t.variants))
            return ux(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        const { variants: i, defaultVariants: o } = t,
            a = Object.keys(i).map((e) => {
                const t = null == n ? void 0 : n[e],
                    r = null == o ? void 0 : o[e];
                if (null === t) return null;
                const a = sx(t) || sx(r);
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
        return ux(e, a, u, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
    };
function cx(e, t) {
    (void 0 === t && (t = 'Illegal state'),
        e ||
            (function (e) {
                throw new Error('[mobx-utils] ' + e);
            })(t));
}
var fx = function (e) {
        return e && e !== Object.prototype && Object.getOwnPropertyNames(e).concat(fx(Object.getPrototypeOf(e)) || []);
    },
    dx = function (e) {
        return (function (e) {
            var t = fx(e);
            return t.filter(function (e, n) {
                return t.indexOf(e) === n;
            });
        })(e).filter(function (e) {
            return 'constructor' !== e && !~e.indexOf('__');
        });
    },
    hx = 'pending',
    px = 'fulfilled',
    vx = 'rejected';
function gx(e) {
    switch (this.state) {
        case hx:
            return e.pending && e.pending(this.value);
        case vx:
            return e.rejected && e.rejected(this.value);
        case px:
            return e.fulfilled ? e.fulfilled(this.value) : this.value;
    }
}
function mx(e, t) {
    if (
        (cx(arguments.length <= 2, 'fromPromise expects up to two arguments'),
        cx(
            'function' == typeof e || ('object' == typeof e && e && 'function' == typeof e.then),
            'Please pass a promise or function to fromPromise',
        ),
        !0 === e.isPromiseBasedObservable)
    )
        return e;
    'function' == typeof e && (e = new Promise(e));
    var n = e;
    (e.then(
        DS('observableFromPromise-resolve', function (e) {
            ((n.value = e), (n.state = px));
        }),
        DS('observableFromPromise-reject', function (e) {
            ((n.value = e), (n.state = vx));
        }),
    ),
        (n.isPromiseBasedObservable = !0),
        (n.case = gx));
    var r = !t || (t.state !== px && t.state !== hx) ? void 0 : t.value;
    return (ZS(n, { value: r, state: hx }, {}, { deep: !1 }), n);
}
!(function (e) {
    ((e.reject = DS('fromPromise.reject', function (t) {
        var n = e(Promise.reject(t));
        return ((n.state = vx), (n.value = t), n);
    })),
        (e.resolve = DS('fromPromise.resolve', function (t) {
            void 0 === t && (t = void 0);
            var n = e(Promise.resolve(t));
            return ((n.state = px), (n.value = t), n);
        })));
})(mx || (mx = {}));
var yx = function (e, t, n, r) {
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
            wk(this),
            (function (e) {
                Kw(e.name, !1, e, this, void 0);
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
        yx([Iw.ref], e.prototype, 'current', void 0),
        yx([DS.bound], e.prototype, 'next', null),
        yx([DS.bound], e.prototype, 'complete', null),
        yx([DS.bound], e.prototype, 'error', null));
})();
var bx = function () {
        return (
            (bx =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            bx.apply(this, arguments)
        );
    },
    _x = function (e, t, n, r) {
        var i,
            o = arguments.length,
            a = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return (o > 3 && a && Object.defineProperty(t, n, a), a);
    },
    wx = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
!(function () {
    function e(e) {
        var t = this;
        (Object.defineProperty(this, 'model', { enumerable: !0, configurable: !0, writable: !0, value: e }),
            Object.defineProperty(this, 'localValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: Iw.map({}),
            }),
            Object.defineProperty(this, 'localComputedValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: Iw.map({}),
            }),
            Object.defineProperty(this, 'isPropertyDirty', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    return t.localValues.has(e);
                },
            }),
            wk(this),
            cx(Jk(e), 'createViewModel expects an observable object'));
        var n = dx(this);
        dx(e).forEach(function (r) {
            var i;
            if (!n.includes(r) && r !== H_ && '__mobxDidRunLazyInitializers' !== r) {
                if (
                    (cx(
                        -1 === wx.indexOf(r),
                        'The propertyname ' + r + ' is reserved and cannot be used with viewModels',
                    ),
                    lk(e, r))
                ) {
                    var o = cO(e, r),
                        a = o.derivation.bind(t),
                        s = null === (i = o.setter_) || void 0 === i ? void 0 : i.bind(t);
                    t.localComputedValues.set(r, Mw(a, { set: s }));
                }
                var u = Object.getOwnPropertyDescriptor(e, r),
                    l = u ? { enumerable: u.enumerable } : {};
                Object.defineProperty(
                    t,
                    r,
                    bx(bx({}, l), {
                        configurable: !0,
                        get: function () {
                            return lk(e, r)
                                ? t.localComputedValues.get(r).get()
                                : t.isPropertyDirty(r)
                                  ? t.localValues.get(r)
                                  : t.model[r];
                        },
                        set: DS(function (n) {
                            lk(e, r)
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
                Jk(e)
                    ? e[H_].keys_()
                    : zk(e) || Qk(e)
                      ? Array.from(e.keys())
                      : Rk(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void a_(5)).forEach(function (e) {
                    var n = t.localValues.get(e),
                        r = t.model[e];
                    Rk(r) ? r.replace(n) : zk(r) ? (r.clear(), r.merge(n)) : uk(n) || (t.model[e] = n);
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
        _x([Mw], e.prototype, 'isDirty', null),
        _x([Mw], e.prototype, 'changedValues', null),
        _x([DS.bound], e.prototype, 'submit', null),
        _x([DS.bound], e.prototype, 'reset', null),
        _x([DS.bound], e.prototype, 'resetProperty', null));
})();
var Sx = (function () {
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
            (l._disposeBaseObserver = fk(l._base, function (e) {
                if ('splice' === e.type)
                    dk(function () {
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
                    dk(function () {
                        (l._removeItem(e.oldValue), l._addItem(e.newValue));
                    });
                }
            })),
            l
        );
    }
    (Sx(t, e),
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
                        ((n = Iw([], { name: 'GroupArray[' + this._keyToName(t) + ']', deep: !1 })),
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
                        reaction: $S(
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
})(Mk);
var kx = (function () {
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
    Ox = (function () {
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
                    return (this.last && (this.last.isDisposed = !0), (this.last = new kx(this.store, e)));
                },
            }),
            e
        );
    })(),
    xx = function () {
        return (
            (xx =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            xx.apply(this, arguments)
        );
    };
function Ex(e, t) {
    if ((void 0 === t && (t = !1), MS(e))) throw new Error("computedFn shouldn't be used on actions");
    var n = !1,
        r = 0,
        i = 'boolean' == typeof t ? { keepAlive: t } : t,
        o = new Ox();
    return function () {
        for (var t = this, a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
        var u,
            l = o.entry(a);
        if (l.exists()) return l.get().get();
        if (!i.keepAlive && null === mS.trackingDerivation)
            return (
                !n &&
                    mS.computedRequiresReaction &&
                    (console.warn(
                        "invoking a computedFn from outside an reactive context won't be memoized, unless keepAlive is set",
                    ),
                    (n = !0)),
                e.apply(this, a)
            );
        var c = Mw(
            function () {
                return (u = e.apply(t, a));
            },
            xx(xx({}, i), { name: 'computedFn(' + (i.name || e.name) + '#' + ++r + ')' }),
        );
        return (
            l.set(c),
            i.keepAlive ||
                HS(c, function () {
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
var Px = { exports: {} };
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
})(Px);
const Tx = e(Px.exports),
    Ax = {
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
    Cx = window;
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
class Nx {
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
        for (const i of t) (n.push(e.slice(r, i)), (r = i));
        return (n.push(e.slice(r)), n);
    }
    parseBoundaries(e) {
        var t, n, r, i, o, a, s, u, l, c, f, d, h;
        const p = [];
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
                    (null === (i = this.model.get('UW4')) || void 0 === i ? void 0 : i.get(e.substring(v, v + 1))) ||
                    0),
                (g +=
                    (null === (o = this.model.get('UW5')) || void 0 === o
                        ? void 0
                        : o.get(e.substring(v + 1, v + 2))) || 0),
                (g +=
                    (null === (a = this.model.get('UW6')) || void 0 === a
                        ? void 0
                        : a.get(e.substring(v + 2, v + 3))) || 0),
                (g +=
                    (null === (s = this.model.get('BW1')) || void 0 === s ? void 0 : s.get(e.substring(v - 2, v))) ||
                    0),
                (g +=
                    (null === (u = this.model.get('BW2')) || void 0 === u
                        ? void 0
                        : u.get(e.substring(v - 1, v + 1))) || 0),
                (g +=
                    (null === (l = this.model.get('BW3')) || void 0 === l ? void 0 : l.get(e.substring(v, v + 2))) ||
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
                    (null === (h = this.model.get('TW4')) || void 0 === h ? void 0 : h.get(e.substring(v, v + 3))) ||
                    0),
                g > 0 && p.push(v));
        }
        return p;
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
 */ const jx = console.assert,
    Ux = String.fromCharCode(8203),
    Bx = 1,
    Rx = 3,
    Wx = { Inline: 0, Block: 1, Skip: 2, Break: 3, NoBreak: 4, BreakOpportunity: 5 },
    Ix = {
        AREA: Wx.Skip,
        BASE: Wx.Skip,
        BASEFONT: Wx.Skip,
        DATALIST: Wx.Skip,
        HEAD: Wx.Skip,
        LINK: Wx.Skip,
        META: Wx.Skip,
        NOEMBED: Wx.Skip,
        NOFRAMES: Wx.Skip,
        PARAM: Wx.Skip,
        RP: Wx.Skip,
        SCRIPT: Wx.Skip,
        STYLE: Wx.Skip,
        TEMPLATE: Wx.Skip,
        TITLE: Wx.Skip,
        NOSCRIPT: Wx.Skip,
        HR: Wx.Break,
        LISTING: Wx.Skip,
        PLAINTEXT: Wx.Skip,
        PRE: Wx.Skip,
        XMP: Wx.Skip,
        BR: Wx.Break,
        RT: Wx.Skip,
        WBR: Wx.BreakOpportunity,
        INPUT: Wx.Skip,
        SELECT: Wx.Skip,
        BUTTON: Wx.Skip,
        TEXTAREA: Wx.Skip,
        ABBR: Wx.Skip,
        CODE: Wx.Skip,
        IFRAME: Wx.Skip,
        TIME: Wx.Skip,
        VAR: Wx.Skip,
        NOBR: Wx.NoBreak,
    },
    Lx = new Set([
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
    Dx = 3;
function Vx(e) {
    const t = e.nodeName,
        n = Ix[t];
    if (void 0 !== n) return n;
    if ('function' == typeof Cx.getComputedStyle) {
        const t = Cx.getComputedStyle(e);
        switch (t.whiteSpace) {
            case 'nowrap':
            case 'pre':
                return Wx.NoBreak;
        }
        const n = t.display;
        if (n)
            return (function (e) {
                return 'inline' === e
                    ? Wx.Inline
                    : 'block' === e
                      ? Wx.Block
                      : e.startsWith('ruby')
                        ? 'ruby-text' === e
                            ? Wx.Skip
                            : Wx.Inline
                        : Wx.Block;
            })(n);
    }
    return Lx.has(t) ? Wx.Block : Wx.Inline;
}
class Mx {
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
        if ((jx(0 === t.length || t.join('') === this.text), t.length <= 1)) return;
        jx(this.canSplit);
        const n = this.nodeOrText;
        if ('string' == typeof e) return void (n.nodeValue = t.join(e));
        const r = n.ownerDocument;
        let i = [];
        for (const o of t) (o && i.push(r.createTextNode(o)), i.push(null));
        (i.pop(), (i = i.map((t) => t || e.cloneNode(!0))), n.replaceWith(...i));
    }
}
class zx {
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
class Fx {
    constructor(e, t) {
        ((this.separator = Ux),
            (this.parser_ = e),
            void 0 !== t &&
                (void 0 !== t.className && (this.className = t.className),
                void 0 !== t.separator && (this.separator = t.separator)));
    }
    static hasChildTextNode(e) {
        for (const t of e.childNodes) if (t.nodeType === Dx) return !0;
        return !1;
    }
    applyToElement(e) {
        for (const t of this.getBlocks(e)) (jx(!t.isEmpty()), this.applyToParagraph(t));
    }
    *getBlocks(e, t) {
        if ((jx(e.nodeType === Bx), this.className && e.classList.contains(this.className))) return;
        const n = Vx(e);
        if (n === Wx.Skip) return;
        if (n === Wx.Break)
            return (
                t && !t.isEmpty() && (t.setHasBreakOpportunityAfter(), yield t, (t.nodes = [])),
                void jx(!e.firstChild)
            );
        if (n === Wx.BreakOpportunity) return void (t && t.setHasBreakOpportunityAfter());
        jx(n === Wx.Block || n === Wx.Inline || n === Wx.NoBreak);
        const r = !t || n === Wx.Block,
            i = r ? new zx(e) : t;
        for (const o of e.childNodes)
            switch (o.nodeType) {
                case Bx:
                    for (const e of this.getBlocks(o, i)) yield e;
                    break;
                case Rx:
                    if (n === Wx.NoBreak) {
                        const e = o.nodeValue;
                        e && i.nodes.push(new Mx(e));
                        break;
                    }
                    i.nodes.push(new Mx(o));
            }
        r && !i.isEmpty() && (yield i);
    }
    applyToParagraph(e) {
        if ((jx(e.nodes.length > 0), !e.nodes.some((e) => e.canSplit))) return;
        const t = e.text;
        if (/^\s*$/.test(t)) return;
        const n = this.parser_.parseBoundaries(t);
        if (n.length <= 0) return;
        (jx(n[0] > 0), jx(n.every((e, t) => 0 === t || e > n[t - 1])), jx(n[n.length - 1] < t.length));
        const r = e.excludeForcedOpportunities(n);
        (r.push(t.length + 1), this.splitNodes(e.nodes, r), this.applyBlockStyle(e.element));
    }
    splitNodes(e, t) {
        var n;
        (jx(t.length > 0), jx(t.every((e, n) => 0 === n || e > t[n - 1])));
        const r = e.reduce((e, t) => e + t.length, 0);
        jx(t[t.length - 1] > r);
        let i = 0,
            o = t[0];
        jx(o > 0);
        let a = 0,
            s = null;
        for (const u of e) {
            (jx(o >= a), jx(0 === u.chunks.length));
            const e = u.text;
            if (!e) continue;
            const r = e.length,
                l = a + r;
            if ((jx(!s || s.canSplit), !u.canSplit)) {
                for (
                    s &&
                    o === a &&
                    (0 === s.chunks.length && s.chunks.push(null !== (n = s.text) && void 0 !== n ? n : ''),
                    s.chunks.push(''));
                    o < l;

                )
                    o = t[++i];
                ((s = null), (a = l));
                continue;
            }
            if (((s = u), o >= l)) {
                a = l;
                continue;
            }
            const c = u.chunks;
            let f = 0;
            for (; o < l; ) {
                const n = o - a;
                (jx(n >= f), c.push(e.slice(f, n)), (f = n), (o = t[++i]));
            }
            (jx(f < r), c.push(e.slice(f)), (a = l));
        }
        (jx(a === r), jx(i < t.length), jx(t[i] >= r));
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
class $x extends Nx {
    constructor(e, t = { separator: Ux }) {
        (super(e), (this.htmlProcessor = new Fx(this, t)));
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
        const t = ((e) => new Cx.DOMParser().parseFromString(e, 'text/html'))(e);
        if (Fx.hasChildTextNode(t.body)) {
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
 */ const Qx = () => new $x(Ax);
if (!D.useState) throw new Error('mobx-react-lite requires React with Hooks support');
if (!uv) throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
function qx(e) {
    e();
}
function Hx(e) {
    return Mp(Jv(e, t));
    var t;
}
var Kx = new ((function () {
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
    Gx = { exports: {} },
    Xx = {},
    Yx = D;
var Jx =
        'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    Zx = Yx.useState,
    eE = Yx.useEffect,
    tE = Yx.useLayoutEffect,
    nE = Yx.useDebugValue;
function rE(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Jx(e, n);
    } catch (r) {
        return !0;
    }
}
var iE =
    'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
              return t();
          }
        : function (e, t) {
              var n = t(),
                  r = Zx({ inst: { value: n, getSnapshot: t } }),
                  i = r[0].inst,
                  o = r[1];
              return (
                  tE(
                      function () {
                          ((i.value = n), (i.getSnapshot = t), rE(i) && o({ inst: i }));
                      },
                      [e, n, t],
                  ),
                  eE(
                      function () {
                          return (
                              rE(i) && o({ inst: i }),
                              e(function () {
                                  rE(i) && o({ inst: i });
                              })
                          );
                      },
                      [e],
                  ),
                  nE(n),
                  n
              );
          };
((Xx.useSyncExternalStore = void 0 !== Yx.useSyncExternalStore ? Yx.useSyncExternalStore : iE), (Gx.exports = Xx));
var oE,
    aE,
    sE = Gx.exports;
function uE(e) {
    e.reaction = new dp('observer'.concat(e.name), function () {
        var t;
        ((e.stateVersion = Symbol()), null === (t = e.onStoreChange) || void 0 === t || t.call(e));
    });
}
var lE = 'function' == typeof Symbol && Symbol.for,
    cE =
        null !==
            (aE =
                null === (oE = Object.getOwnPropertyDescriptor(function () {}, 'name')) || void 0 === oE
                    ? void 0
                    : oE.configurable) &&
        void 0 !== aE &&
        aE,
    fE = lE
        ? Symbol.for('react.forward_ref')
        : 'function' == typeof D.forwardRef &&
          D.forwardRef(function (e) {
              return null;
          }).$$typeof,
    dE = lE
        ? Symbol.for('react.memo')
        : 'function' == typeof D.memo &&
          D.memo(function (e) {
              return null;
          }).$$typeof;
function hE(e, t) {
    if (dE && e.$$typeof === dE)
        throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
        );
    var n = (void 0, !1),
        r = e,
        i = e.displayName || e.name;
    if (fE && e.$$typeof === fE && ((n = !0), 'function' != typeof (r = e.render)))
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
                            Kx.unregister(r),
                            (r.onStoreChange = e),
                            r.reaction || (uE(r), (r.stateVersion = Symbol())),
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
                (a.reaction || (uE(a), Kx.register(n, a, a)),
                V.useDebugValue(a.reaction, Hx),
                sE.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot),
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
        cE && Object.defineProperty(o, 'name', { value: e.name, writable: !0, configurable: !0 }),
        e.contextTypes && (o.contextTypes = e.contextTypes),
        n && (o = D.forwardRef(o)),
        (function (e, t) {
            Object.keys(e).forEach(function (n) {
                pE[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
            });
        })(e, (o = D.memo(o))),
        o
    );
}
var pE = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
(!(function (e) {
    (e || (e = qx), Dp({ reactionScheduler: e }));
})(Df.unstable_batchedUpdates),
    Kx.finalizeAllImmediately);
let vE = CE();
const gE = (e) => EE(e, vE);
let mE = CE();
gE.write = (e) => EE(e, mE);
let yE = CE();
gE.onStart = (e) => EE(e, yE);
let bE = CE();
gE.onFrame = (e) => EE(e, bE);
let _E = CE();
gE.onFinish = (e) => EE(e, _E);
let wE = [];
gE.setTimeout = (e, t) => {
    let n = gE.now() + t,
        r = () => {
            let e = wE.findIndex((e) => e.cancel == r);
            (~e && wE.splice(e, 1), (jE.count -= ~e ? 1 : 0));
        },
        i = { time: n, handler: e, cancel: r };
    return (wE.splice(SE(n), 0, i), (jE.count += 1), PE(), i);
};
let SE = (e) => ~(~wE.findIndex((t) => t.time > e) || ~wE.length);
((gE.cancel = (e) => {
    (vE.delete(e), mE.delete(e));
}),
    (gE.sync = (e) => {
        ((xE = !0), gE.batchedUpdates(e), (xE = !1));
    }),
    (gE.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            ((t = e), gE.onStart(n));
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                (yE.delete(n), (t = null));
            }),
            r
        );
    }));
let kE = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
((gE.use = (e) => (kE = e)),
    (gE.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (gE.batchedUpdates = (e) => e()),
    (gE.catch = console.error),
    (gE.frameLoop = 'always'),
    (gE.advance = () => {
        'demand' !== gE.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : AE();
    }));
let OE = -1,
    xE = !1;
function EE(e, t) {
    xE ? (t.delete(e), e(0)) : (t.add(e), PE());
}
function PE() {
    OE < 0 && ((OE = 0), 'demand' !== gE.frameLoop && kE(TE));
}
function TE() {
    ~OE && (kE(TE), gE.batchedUpdates(AE));
}
function AE() {
    let e = OE;
    OE = gE.now();
    let t = SE(OE);
    (t && (NE(wE.splice(0, t), (e) => e.handler()), (jE.count -= t)),
        yE.flush(),
        vE.flush(e ? Math.min(64, OE - e) : 16.667),
        bE.flush(),
        mE.flush(),
        _E.flush());
}
function CE() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            ((jE.count += t != e || e.has(n) ? 0 : 1), e.add(n));
        },
        delete: (n) => ((jE.count -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size &&
                ((e = new Set()), (jE.count -= t.size), NE(t, (t) => t(n) && e.add(t)), (jE.count += e.size), (t = e));
        },
    };
}
function NE(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            gE.catch(n);
        }
    });
}
const jE = { count: 0 };
function UE() {}
const BE = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
function RE(e, t) {
    if (BE.arr(e)) {
        if (!BE.arr(t) || e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
    }
    return e === t;
}
const WE = (e, t) => e.forEach(t);
function IE(e, t, n) {
    if (BE.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
const LE = (e) => (BE.und(e) ? [] : BE.arr(e) ? e : [e]);
function DE(e, t) {
    if (e.size) {
        const n = Array.from(e);
        (e.clear(), WE(n, t));
    }
}
const VE = (e, ...t) => DE(e, (e) => e(...t));
let ME,
    zE,
    FE = null,
    $E = !1,
    QE = UE;
var qE = Object.freeze({
    __proto__: null,
    get createStringInterpolator() {
        return ME;
    },
    get to() {
        return zE;
    },
    get colors() {
        return FE;
    },
    get skipAnimation() {
        return $E;
    },
    get willAdvance() {
        return QE;
    },
    assign: (e) => {
        (e.to && (zE = e.to),
            e.now && (gE.now = e.now),
            void 0 !== e.colors && (FE = e.colors),
            null != e.skipAnimation && ($E = e.skipAnimation),
            e.createStringInterpolator && (ME = e.createStringInterpolator),
            e.requestAnimationFrame && gE.use(e.requestAnimationFrame),
            e.batchedUpdates && (gE.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (QE = e.willAdvance),
            e.frameLoop && (gE.frameLoop = e.frameLoop));
    },
});
const HE = new Set();
let KE = [],
    GE = [],
    XE = 0;
const YE = {
    get idle() {
        return !HE.size && !KE.length;
    },
    start(e) {
        XE > e.priority ? (HE.add(e), gE.onStart(JE)) : (ZE(e), gE(tP));
    },
    advance: tP,
    sort(e) {
        if (XE) gE.onFrame(() => YE.sort(e));
        else {
            const t = KE.indexOf(e);
            ~t && (KE.splice(t, 1), eP(e));
        }
    },
    clear() {
        ((KE = []), HE.clear());
    },
};
function JE() {
    (HE.forEach(ZE), HE.clear(), gE(tP));
}
function ZE(e) {
    KE.includes(e) || eP(e);
}
function eP(e) {
    KE.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(KE, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function tP(e) {
    const t = GE;
    for (let n = 0; n < KE.length; n++) {
        const r = KE[n];
        ((XE = r.priority), r.idle || (QE(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((XE = 0), (GE = KE), (GE.length = 0), (KE = t), KE.length > 0);
}
const nP = '[-+]?\\d*\\.?\\d+',
    rP = nP + '%';
function iP(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
const oP = new RegExp('rgb' + iP(nP, nP, nP)),
    aP = new RegExp('rgba' + iP(nP, nP, nP, nP)),
    sP = new RegExp('hsl' + iP(nP, rP, rP)),
    uP = new RegExp('hsla' + iP(nP, rP, rP, nP)),
    lP = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    cP = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    fP = /^#([0-9a-fA-F]{6})$/,
    dP = /^#([0-9a-fA-F]{8})$/;
function hP(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function pP(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        i = 2 * n - r,
        o = hP(i, r, e + 1 / 3),
        a = hP(i, r, e),
        s = hP(i, r, e - 1 / 3);
    return (Math.round(255 * o) << 24) | (Math.round(255 * a) << 16) | (Math.round(255 * s) << 8);
}
function vP(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function gP(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function mP(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function yP(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function bP(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = fP.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : FE && void 0 !== FE[e]
                ? FE[e]
                : (t = oP.exec(e))
                  ? ((vP(t[1]) << 24) | (vP(t[2]) << 16) | (vP(t[3]) << 8) | 255) >>> 0
                  : (t = aP.exec(e))
                    ? ((vP(t[1]) << 24) | (vP(t[2]) << 16) | (vP(t[3]) << 8) | mP(t[4])) >>> 0
                    : (t = lP.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = dP.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = cP.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = sP.exec(e))
                            ? (255 | pP(gP(t[1]), yP(t[2]), yP(t[3]))) >>> 0
                            : (t = uP.exec(e))
                              ? (pP(gP(t[1]), yP(t[2]), yP(t[3])) | mP(t[4])) >>> 0
                              : null;
    })(e);
    return null === t
        ? e
        : ((t = t || 0),
          `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`);
}
const _P = (e, t, n) => {
    if (BE.fun(e)) return e;
    if (BE.arr(e)) return _P({ range: e, output: t, extrapolate: n });
    if (BE.str(e.output[0])) return ME(e);
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
function wP() {
    return (
        (wP =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }),
        wP.apply(this, arguments)
    );
}
const SP = Symbol.for('FluidValue.get'),
    kP = Symbol.for('FluidValue.observers'),
    OP = (e) => Boolean(e && e[SP]),
    xP = (e) => (e && e[SP] ? e[SP]() : e),
    EP = (e) => e[kP] || null;
function PP(e, t) {
    let n = e[kP];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
class TP {
    constructor(e) {
        if (((this[SP] = void 0), (this[kP] = void 0), !e && !(e = this.get))) throw Error('Unknown getter');
        AP(this, e);
    }
}
const AP = (e, t) => jP(e, SP, t);
function CP(e, t) {
    if (e[SP]) {
        let n = e[kP];
        (n || jP(e, kP, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function NP(e, t) {
    let n = e[kP];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[kP] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
const jP = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    UP = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    BP = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    RP = new RegExp(`(${UP.source})(%|[a-z]+)`, 'i');
let WP;
const IP = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    LP = (e, t, n, r, i) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
    DP = (e) => {
        WP || (WP = FE ? new RegExp(`(${Object.keys(FE).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => xP(e).replace(BP, bP).replace(WP, bP)),
            n = t.map((e) => e.match(UP).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => _P(wP({}, e, { output: t })));
        return (e) => {
            var n;
            const i = !RP.test(t[0]) && (null == (n = t.find((e) => RP.test(e))) ? void 0 : n.replace(UP, ''));
            let o = 0;
            return t[0].replace(UP, () => `${r[o++](e)}${i || ''}`).replace(IP, LP);
        };
    },
    VP = 'react-spring: ',
    MP = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${VP}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    zP = MP(console.warn);
const FP = MP(console.warn);
function $P(e) {
    return BE.str(e) && ('#' == e[0] || /\d/.test(e) || e in (FE || {}));
}
const QP = (e) => D.useEffect(e, qP),
    qP = [];
function HP() {
    const e = D.useState()[1],
        t = D.useState(KP)[0];
    return (
        QP(t.unmount),
        () => {
            t.current && e({});
        }
    );
}
function KP() {
    const e = {
        current: !0,
        unmount: () => () => {
            e.current = !1;
        },
    };
    return e;
}
function GP(e) {
    const t = D.useRef();
    return (
        D.useEffect(() => {
            t.current = e;
        }),
        t.current
    );
}
const XP =
        'undefined' != typeof window && window.document && window.document.createElement
            ? D.useLayoutEffect
            : D.useEffect,
    YP = Symbol.for('Animated:node'),
    JP = (e) => e && e[YP],
    ZP = (e, t) => {
        return ((n = e), (r = YP), (i = t), Object.defineProperty(n, r, { value: i, writable: !0, configurable: !0 }));
        var n, r, i;
    },
    eT = (e) => e && e[YP] && e[YP].getPayload();
class tT {
    constructor() {
        ((this.payload = void 0), ZP(this, this));
    }
    getPayload() {
        return this.payload || [];
    }
}
class nT extends tT {
    constructor(e) {
        (super(),
            (this.done = !0),
            (this.elapsedTime = void 0),
            (this.lastPosition = void 0),
            (this.lastVelocity = void 0),
            (this.v0 = void 0),
            (this.durationProgress = 0),
            (this._value = e),
            BE.num(this._value) && (this.lastPosition = this._value));
    }
    static create(e) {
        return new nT(e);
    }
    getPayload() {
        return [this];
    }
    getValue() {
        return this._value;
    }
    setValue(e, t) {
        return (
            BE.num(e) &&
                ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
            this._value !== e && ((this._value = e), !0)
        );
    }
    reset() {
        const { done: e } = this;
        ((this.done = !1),
            BE.num(this._value) &&
                ((this.elapsedTime = 0),
                (this.durationProgress = 0),
                (this.lastPosition = this._value),
                e && (this.lastVelocity = null),
                (this.v0 = null)));
    }
}
class rT extends nT {
    constructor(e) {
        (super(0), (this._string = null), (this._toString = void 0), (this._toString = _P({ output: [e, e] })));
    }
    static create(e) {
        return new rT(e);
    }
    getValue() {
        let e = this._string;
        return null == e ? (this._string = this._toString(this._value)) : e;
    }
    setValue(e) {
        if (BE.str(e)) {
            if (e == this._string) return !1;
            ((this._string = e), (this._value = 1));
        } else {
            if (!super.setValue(e)) return !1;
            this._string = null;
        }
        return !0;
    }
    reset(e) {
        (e && (this._toString = _P({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
    }
}
const iT = { dependencies: null };
class oT extends tT {
    constructor(e) {
        (super(), (this.source = e), this.setValue(e));
    }
    getValue(e) {
        const t = {};
        return (
            IE(this.source, (n, r) => {
                var i;
                (i = n) && i[YP] === i ? (t[r] = n.getValue(e)) : OP(n) ? (t[r] = xP(n)) : e || (t[r] = n);
            }),
            t
        );
    }
    setValue(e) {
        ((this.source = e), (this.payload = this._makePayload(e)));
    }
    reset() {
        this.payload && WE(this.payload, (e) => e.reset());
    }
    _makePayload(e) {
        if (e) {
            const t = new Set();
            return (IE(e, this._addToPayload, t), Array.from(t));
        }
    }
    _addToPayload(e) {
        iT.dependencies && OP(e) && iT.dependencies.add(e);
        const t = eT(e);
        t && WE(t, (e) => this.add(e));
    }
}
class aT extends oT {
    constructor(e) {
        super(e);
    }
    static create(e) {
        return new aT(e);
    }
    getValue() {
        return this.source.map((e) => e.getValue());
    }
    setValue(e) {
        const t = this.getPayload();
        return e.length == t.length ? t.map((t, n) => t.setValue(e[n])).some(Boolean) : (super.setValue(e.map(sT)), !0);
    }
}
function sT(e) {
    return ($P(e) ? rT : nT).create(e);
}
function uT(e) {
    const t = JP(e);
    return t ? t.constructor : BE.arr(e) ? aT : $P(e) ? rT : nT;
}
function lT() {
    return (
        (lT =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }),
        lT.apply(this, arguments)
    );
}
const cT = (e, t) => {
    const n = !BE.fun(e) || (e.prototype && e.prototype.isReactComponent);
    return D.forwardRef((r, i) => {
        const o = D.useRef(null),
            a =
                n &&
                D.useCallback(
                    (e) => {
                        o.current = (function (e, t) {
                            e && (BE.fun(e) ? e(t) : (e.current = t));
                            return t;
                        })(i, e);
                    },
                    [i],
                ),
            [s, u] = (function (e, t) {
                const n = new Set();
                ((iT.dependencies = n), e.style && (e = lT({}, e, { style: t.createAnimatedStyle(e.style) })));
                return ((e = new oT(e)), (iT.dependencies = null), [e, n]);
            })(r, t),
            l = HP(),
            c = () => {
                const e = o.current;
                if (n && !e) return;
                !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && l();
            },
            f = new fT(c, u),
            d = D.useRef();
        (XP(() => {
            const e = d.current;
            ((d.current = f), WE(u, (e) => CP(e, f)), e && (WE(e.deps, (t) => NP(t, e)), gE.cancel(e.update)));
        }),
            D.useEffect(c, []),
            QP(() => () => {
                const e = d.current;
                WE(e.deps, (t) => NP(t, e));
            }));
        const h = t.getComponentProps(s.getValue());
        return D.createElement(e, lT({}, h, { ref: a }));
    });
};
class fT {
    constructor(e, t) {
        ((this.update = e), (this.deps = t));
    }
    eventObserved(e) {
        'change' == e.type && gE.write(this.update);
    }
}
const dT = Symbol.for('AnimatedComponent'),
    hT = (e) => (BE.str(e) ? e : e && BE.str(e.displayName) ? e.displayName : (BE.fun(e) && e.name) || null);
function pT() {
    return (
        (pT =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }),
        pT.apply(this, arguments)
    );
}
function vT(e, ...t) {
    return BE.fun(e) ? e(...t) : e;
}
const gT = (e, t) => !0 === e || !!(t && e && (BE.fun(e) ? e(t) : LE(e).includes(t))),
    mT = (e, t) => (BE.obj(e) ? t && e[t] : e),
    yT = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
    bT = (e) => e,
    _T = (e, t = bT) => {
        let n = wT;
        e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
        const r = {};
        for (const i of n) {
            const n = t(e[i], i);
            BE.und(n) || (r[i] = n);
        }
        return r;
    },
    wT = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
    ST = {
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
function kT(e) {
    const t = (function (e) {
        const t = {};
        let n = 0;
        if (
            (IE(e, (e, r) => {
                ST[r] || ((t[r] = e), n++);
            }),
            n)
        )
            return t;
    })(e);
    if (t) {
        const n = { to: t };
        return (IE(e, (e, r) => r in t || (n[r] = e)), n);
    }
    return pT({}, e);
}
function OT(e) {
    return (
        (e = xP(e)),
        BE.arr(e) ? e.map(OT) : $P(e) ? qE.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
    );
}
function xT(e) {
    return BE.fun(e) || (BE.arr(e) && BE.obj(e[0]));
}
const ET = pT({}, { tension: 170, friction: 26 }, { mass: 1, damping: 1, easing: (e) => e, clamp: !1 });
class PT {
    constructor() {
        ((this.tension = void 0),
            (this.friction = void 0),
            (this.frequency = void 0),
            (this.damping = void 0),
            (this.mass = void 0),
            (this.velocity = 0),
            (this.restVelocity = void 0),
            (this.precision = void 0),
            (this.progress = void 0),
            (this.duration = void 0),
            (this.easing = void 0),
            (this.clamp = void 0),
            (this.bounce = void 0),
            (this.decay = void 0),
            (this.round = void 0),
            Object.assign(this, ET));
    }
}
function TT(e, t) {
    if (BE.und(t.decay)) {
        const n = !BE.und(t.tension) || !BE.und(t.friction);
        ((!n && BE.und(t.frequency) && BE.und(t.damping) && BE.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0));
    } else e.duration = void 0;
}
const AT = [];
class CT {
    constructor() {
        ((this.changed = !1),
            (this.values = AT),
            (this.toValues = null),
            (this.fromValues = AT),
            (this.to = void 0),
            (this.from = void 0),
            (this.config = new PT()),
            (this.immediate = !1));
    }
}
function NT(e, { key: t, props: n, defaultProps: r, state: i, actions: o }) {
    return new Promise((a, s) => {
        var u;
        let l,
            c,
            f = gT(null != (u = n.cancel) ? u : null == r ? void 0 : r.cancel, t);
        if (f) p();
        else {
            BE.und(n.pause) || (i.paused = gT(n.pause, t));
            let e = null == r ? void 0 : r.pause;
            (!0 !== e && (e = i.paused || gT(e, t)),
                (l = vT(n.delay || 0, t)),
                e ? (i.resumeQueue.add(h), o.pause()) : (o.resume(), h()));
        }
        function d() {
            (i.resumeQueue.add(h), i.timeouts.delete(c), c.cancel(), (l = c.time - gE.now()));
        }
        function h() {
            l > 0 && !qE.skipAnimation ? ((c = gE.setTimeout(p, l)), i.pauseQueue.add(d), i.timeouts.add(c)) : p();
        }
        function p() {
            (i.pauseQueue.delete(d), i.timeouts.delete(c), e <= (i.cancelId || 0) && (f = !0));
            try {
                o.start(pT({}, n, { callId: e, cancel: f }), a);
            } catch (t) {
                s(t);
            }
        }
    });
}
const jT = (e, t) =>
        1 == t.length
            ? t[0]
            : t.some((e) => e.cancelled)
              ? RT(e.get())
              : t.every((e) => e.noop)
                ? UT(e.get())
                : BT(
                      e.get(),
                      t.every((e) => e.finished),
                  ),
    UT = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
    BT = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
    RT = (e) => ({ value: e, cancelled: !0, finished: !1 });
function WT(e, t, n, r) {
    const { callId: i, parentId: o, onRest: a } = t,
        { asyncTo: s, promise: u } = n;
    return o || e !== s || t.reset
        ? (n.promise = (async () => {
              ((n.asyncId = i), (n.asyncTo = e));
              const l = _T(t, (e, t) => ('onRest' === t ? void 0 : e));
              let c, f;
              const d = new Promise((e, t) => ((c = e), (f = t))),
                  h = (e) => {
                      const t = (i <= (n.cancelId || 0) && RT(r)) || (i !== n.asyncId && BT(r, !1));
                      if (t) throw ((e.result = t), f(e), e);
                  },
                  p = (e, t) => {
                      const o = new LT(),
                          a = new DT();
                      return (async () => {
                          if (qE.skipAnimation) throw (IT(n), (a.result = BT(r, !1)), f(a), a);
                          h(o);
                          const s = BE.obj(e) ? pT({}, e) : pT({}, t, { to: e });
                          ((s.parentId = i),
                              IE(l, (e, t) => {
                                  BE.und(s[t]) && (s[t] = e);
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
              if (qE.skipAnimation) return (IT(n), BT(r, !1));
              try {
                  let t;
                  ((t = BE.arr(e)
                      ? (async (e) => {
                            for (const t of e) await p(t);
                        })(e)
                      : Promise.resolve(e(p, r.stop.bind(r)))),
                      await Promise.all([t.then(c), d]),
                      (v = BT(r.get(), !0, !1)));
              } catch (g) {
                  if (g instanceof LT) v = g.result;
                  else {
                      if (!(g instanceof DT)) throw g;
                      v = g.result;
                  }
              } finally {
                  i == n.asyncId && ((n.asyncId = o), (n.asyncTo = o ? s : void 0), (n.promise = o ? u : void 0));
              }
              return (
                  BE.fun(a) &&
                      gE.batchedUpdates(() => {
                          a(v, r, r.item);
                      }),
                  v
              );
          })())
        : u;
}
function IT(e, t) {
    (DE(e.timeouts, (e) => e.cancel()),
        e.pauseQueue.clear(),
        e.resumeQueue.clear(),
        (e.asyncId = e.asyncTo = e.promise = void 0),
        t && (e.cancelId = t));
}
class LT extends Error {
    constructor() {
        (super(
            'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
        ),
            (this.result = void 0));
    }
}
class DT extends Error {
    constructor() {
        (super('SkipAnimationSignal'), (this.result = void 0));
    }
}
const VT = (e) => e instanceof zT;
let MT = 1;
class zT extends TP {
    constructor(...e) {
        (super(...e), (this.id = MT++), (this.key = void 0), (this._priority = 0));
    }
    get priority() {
        return this._priority;
    }
    set priority(e) {
        this._priority != e && ((this._priority = e), this._onPriorityChange(e));
    }
    get() {
        const e = JP(this);
        return e && e.getValue();
    }
    to(...e) {
        return qE.to(this, e);
    }
    interpolate(...e) {
        return (zP(`${VP}The "interpolate" function is deprecated in v9 (use "to" instead)`), qE.to(this, e));
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
        PP(this, { type: 'change', parent: this, value: e, idle: t });
    }
    _onPriorityChange(e) {
        (this.idle || YE.sort(this), PP(this, { type: 'priority', parent: this, priority: e }));
    }
}
const FT = Symbol.for('SpringPhase'),
    $T = (e) => (1 & e[FT]) > 0,
    QT = (e) => (2 & e[FT]) > 0,
    qT = (e) => (4 & e[FT]) > 0,
    HT = (e, t) => (t ? (e[FT] |= 3) : (e[FT] &= -3)),
    KT = (e, t) => (t ? (e[FT] |= 4) : (e[FT] &= -5));
class GT extends zT {
    constructor(e, t) {
        if (
            (super(),
            (this.key = void 0),
            (this.animation = new CT()),
            (this.queue = void 0),
            (this.defaultProps = {}),
            (this._state = { paused: !1, pauseQueue: new Set(), resumeQueue: new Set(), timeouts: new Set() }),
            (this._pendingCalls = new Set()),
            (this._lastCallId = 0),
            (this._lastToId = 0),
            (this._memoizedDuration = 0),
            !BE.und(e) || !BE.und(t))
        ) {
            const n = BE.obj(e) ? pT({}, e) : pT({}, t, { from: e });
            (BE.und(n.default) && (n.default = !0), this.start(n));
        }
    }
    get idle() {
        return !(QT(this) || this._state.asyncTo) || qT(this);
    }
    get goal() {
        return xP(this.animation.to);
    }
    get velocity() {
        const e = JP(this);
        return e instanceof nT ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
    }
    get hasAnimated() {
        return $T(this);
    }
    get isAnimating() {
        return QT(this);
    }
    get isPaused() {
        return qT(this);
    }
    advance(e) {
        let t = !0,
            n = !1;
        const r = this.animation;
        let { config: i, toValues: o } = r;
        const a = eT(r.to);
        (!a && OP(r.to) && (o = LE(xP(r.to))),
            r.values.forEach((s, u) => {
                if (s.done) return;
                const l = s.constructor == rT ? 1 : a ? a[u].lastPosition : o[u];
                let c = r.immediate,
                    f = l;
                if (!c) {
                    if (((f = s.lastPosition), i.tension <= 0)) return void (s.done = !0);
                    let t = (s.elapsedTime += e);
                    const n = r.fromValues[u],
                        o = null != s.v0 ? s.v0 : (s.v0 = BE.arr(i.velocity) ? i.velocity[u] : i.velocity);
                    let a;
                    if (BE.und(i.duration))
                        if (i.decay) {
                            const e = !0 === i.decay ? 0.998 : i.decay,
                                r = Math.exp(-(1 - e) * t);
                            ((f = n + (o / (1 - e)) * (1 - r)), (c = Math.abs(s.lastPosition - f) < 0.1), (a = o * r));
                        } else {
                            a = null == s.lastVelocity ? o : s.lastVelocity;
                            const t = i.precision || (n == l ? 0.005 : Math.min(1, 0.001 * Math.abs(l - n))),
                                r = i.restVelocity || t / 10,
                                u = i.clamp ? 0 : i.bounce,
                                d = !BE.und(u),
                                h = n == l ? s.v0 > 0 : n < l;
                            let p,
                                v = !1;
                            const g = 1,
                                m = Math.ceil(e / g);
                            for (
                                let e = 0;
                                e < m && ((p = Math.abs(a) > r), p || ((c = Math.abs(l - f) <= t), !c));
                                ++e
                            ) {
                                d && ((v = f == l || f > l == h), v && ((a = -a * u), (f = l)));
                                ((a += ((1e-6 * -i.tension * (f - l) + 0.001 * -i.friction * a) / i.mass) * g),
                                    (f += a * g));
                            }
                        }
                    else {
                        let r = 1;
                        (i.duration > 0 &&
                            (this._memoizedDuration !== i.duration &&
                                ((this._memoizedDuration = i.duration),
                                s.durationProgress > 0 &&
                                    ((s.elapsedTime = i.duration * s.durationProgress), (t = s.elapsedTime += e))),
                            (r = (i.progress || 0) + t / this._memoizedDuration),
                            (r = r > 1 ? 1 : r < 0 ? 0 : r),
                            (s.durationProgress = r)),
                            (f = n + i.easing(r) * (l - n)),
                            (a = (f - s.lastPosition) / e),
                            (c = 1 == r));
                    }
                    ((s.lastVelocity = a),
                        Number.isNaN(f) && (console.warn('Got NaN while animating:', this), (c = !0)));
                }
                (a && !a[u].done && (c = !1), c ? (s.done = !0) : (t = !1), s.setValue(f, i.round) && (n = !0));
            }));
        const s = JP(this),
            u = s.getValue();
        if (t) {
            const e = xP(r.to);
            ((u === e && !n) || i.decay ? n && i.decay && this._onChange(u) : (s.setValue(e), this._onChange(e)),
                this._stop());
        } else n && this._onChange(u);
    }
    set(e) {
        return (
            gE.batchedUpdates(() => {
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
        if (QT(this)) {
            const { to: e, config: t } = this.animation;
            gE.batchedUpdates(() => {
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
            BE.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [BE.obj(e) ? e : pT({}, t, { to: e })]),
            Promise.all(n.map((e) => this._update(e))).then((e) => jT(this, e))
        );
    }
    stop(e) {
        const { to: t } = this.animation;
        return (
            this._focus(this.get()),
            IT(this._state, e && this._lastCallId),
            gE.batchedUpdates(() => this._stop(t, e)),
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
        ((n = BE.obj(n) ? n[t] : n),
            (null == n || xT(n)) && (n = void 0),
            (r = BE.obj(r) ? r[t] : r),
            null == r && (r = void 0));
        const i = { to: n, from: r };
        return (
            $T(this) ||
                (e.reverse && ([n, r] = [r, n]), (r = xP(r)), BE.und(r) ? JP(this) || this._set(n) : this._set(r)),
            i
        );
    }
    _update(e, t) {
        let n = pT({}, e);
        const { key: r, defaultProps: i } = this;
        (n.default &&
            Object.assign(
                i,
                _T(n, (e, t) => (/^on/.test(t) ? mT(e, r) : e)),
            ),
            nA(this, n, 'onProps'),
            rA(this, 'onProps', n, this));
        const o = this._prepareNode(n);
        if (Object.isFrozen(this))
            throw Error(
                'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
            );
        const a = this._state;
        return NT(++this._lastCallId, {
            key: r,
            props: n,
            defaultProps: i,
            state: a,
            actions: {
                pause: () => {
                    qT(this) ||
                        (KT(this, !0),
                        VE(a.pauseQueue),
                        rA(this, 'onPause', BT(this, XT(this, this.animation.to)), this));
                },
                resume: () => {
                    qT(this) &&
                        (KT(this, !1),
                        QT(this) && this._resume(),
                        VE(a.resumeQueue),
                        rA(this, 'onResume', BT(this, XT(this, this.animation.to)), this));
                },
                start: this._merge.bind(this, o),
            },
        }).then((e) => {
            if (n.loop && e.finished && (!t || !e.noop)) {
                const e = YT(n);
                if (e) return this._update(e, !0);
            }
            return e;
        });
    }
    _merge(e, t, n) {
        if (t.cancel) return (this.stop(!0), n(RT(this)));
        const r = !BE.und(e.to),
            i = !BE.und(e.from);
        if (r || i) {
            if (!(t.callId > this._lastToId)) return n(RT(this));
            this._lastToId = t.callId;
        }
        const { key: o, defaultProps: a, animation: s } = this,
            { to: u, from: l } = s;
        let { to: c = u, from: f = l } = e;
        (!i || r || (t.default && !BE.und(c)) || (c = f), t.reverse && ([c, f] = [f, c]));
        const d = !RE(f, l);
        (d && (s.from = f), (f = xP(f)));
        const h = !RE(c, u);
        h && this._focus(c);
        const p = xT(t.to),
            { config: v } = s,
            { decay: g, velocity: m } = v;
        ((r || i) && (v.velocity = 0),
            t.config &&
                !p &&
                (function (e, t, n) {
                    (n && (TT((n = pT({}, n)), t), (t = pT({}, n, t))), TT(e, t), Object.assign(e, t));
                    for (const a in ET) null == e[a] && (e[a] = ET[a]);
                    let { mass: r, frequency: i, damping: o } = e;
                    BE.und(i) ||
                        (i < 0.01 && (i = 0.01),
                        o < 0 && (o = 0),
                        (e.tension = Math.pow((2 * Math.PI) / i, 2) * r),
                        (e.friction = (4 * Math.PI * o * r) / i));
                })(v, vT(t.config, o), t.config !== a.config ? vT(a.config, o) : void 0));
        let y = JP(this);
        if (!y || BE.und(c)) return n(BT(this, !0));
        const b = BE.und(t.reset) ? i && !t.default : !BE.und(f) && gT(t.reset, o),
            _ = b ? f : this.get(),
            w = OT(c),
            S = BE.num(w) || BE.arr(w) || $P(w),
            k = !p && (!S || gT(a.immediate || t.immediate, o));
        if (h) {
            const e = uT(c);
            if (e !== y.constructor) {
                if (!k)
                    throw Error(
                        `Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`,
                    );
                y = this._set(w);
            }
        }
        const O = y.constructor;
        let x = OP(c),
            E = !1;
        if (!x) {
            const e = b || (!$T(this) && d);
            ((h || e) && ((E = RE(OT(_), w)), (x = !E)),
                ((RE(s.immediate, k) || k) && RE(v.decay, g) && RE(v.velocity, m)) || (x = !0));
        }
        if (
            (E && QT(this) && (s.changed && !b ? (x = !0) : x || this._stop(u)),
            !p &&
                ((x || OP(u)) && ((s.values = y.getPayload()), (s.toValues = OP(c) ? null : O == rT ? [1] : LE(w))),
                s.immediate != k && ((s.immediate = k), k || b || this._set(u)),
                x))
        ) {
            const { onRest: e } = s;
            WE(tA, (e) => nA(this, t, e));
            const r = BT(this, XT(this, u));
            (VE(this._pendingCalls, r),
                this._pendingCalls.add(n),
                s.changed &&
                    gE.batchedUpdates(() => {
                        ((s.changed = !b),
                            null == e || e(r, this),
                            b ? vT(a.onRest, r) : null == s.onStart || s.onStart(r, this));
                    }));
        }
        (b && this._set(_),
            p
                ? n(WT(t.to, t, this._state, this))
                : x
                  ? this._start()
                  : QT(this) && !h
                    ? this._pendingCalls.add(n)
                    : n(UT(_)));
    }
    _focus(e) {
        const t = this.animation;
        e !== t.to && (EP(this) && this._detach(), (t.to = e), EP(this) && this._attach());
    }
    _attach() {
        let e = 0;
        const { to: t } = this.animation;
        (OP(t) && (CP(t, this), VT(t) && (e = t.priority + 1)), (this.priority = e));
    }
    _detach() {
        const { to: e } = this.animation;
        OP(e) && NP(e, this);
    }
    _set(e, t = !0) {
        const n = xP(e);
        if (!BE.und(n)) {
            const e = JP(this);
            if (!e || !RE(n, e.getValue())) {
                const r = uT(n);
                (e && e.constructor == r ? e.setValue(n) : ZP(this, r.create(n)),
                    e &&
                        gE.batchedUpdates(() => {
                            this._onChange(n, t);
                        }));
            }
        }
        return JP(this);
    }
    _onStart() {
        const e = this.animation;
        e.changed || ((e.changed = !0), rA(this, 'onStart', BT(this, XT(this, e.to)), this));
    }
    _onChange(e, t) {
        (t || (this._onStart(), vT(this.animation.onChange, e, this)),
            vT(this.defaultProps.onChange, e, this),
            super._onChange(e, t));
    }
    _start() {
        const e = this.animation;
        (JP(this).reset(xP(e.to)),
            e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
            QT(this) || (HT(this, !0), qT(this) || this._resume()));
    }
    _resume() {
        qE.skipAnimation ? this.finish() : YE.start(this);
    }
    _stop(e, t) {
        if (QT(this)) {
            HT(this, !1);
            const n = this.animation;
            (WE(n.values, (e) => {
                e.done = !0;
            }),
                n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                PP(this, { type: 'idle', parent: this }));
            const r = t ? RT(this.get()) : BT(this.get(), XT(this, null != e ? e : n.to));
            (VE(this._pendingCalls, r), n.changed && ((n.changed = !1), rA(this, 'onRest', r, this)));
        }
    }
}
function XT(e, t) {
    const n = OT(t);
    return RE(OT(e.get()), n);
}
function YT(e, t = e.loop, n = e.to) {
    let r = vT(t);
    if (r) {
        const i = !0 !== r && kT(r),
            o = (i || e).reverse,
            a = !i || i.reset;
        return JT(
            pT(
                {},
                e,
                {
                    loop: t,
                    default: !1,
                    pause: void 0,
                    to: !o || xT(n) ? n : void 0,
                    from: a ? e.from : void 0,
                    reset: a,
                },
                i,
            ),
        );
    }
}
function JT(e) {
    const { to: t, from: n } = (e = kT(e)),
        r = new Set();
    return (BE.obj(t) && eA(t, r), BE.obj(n) && eA(n, r), (e.keys = r.size ? Array.from(r) : null), e);
}
function ZT(e) {
    const t = JT(e);
    return (BE.und(t.default) && (t.default = _T(t)), t);
}
function eA(e, t) {
    IE(e, (e, n) => null != e && t.add(n));
}
const tA = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
function nA(e, t, n) {
    e.animation[n] = t[n] !== yT(t, n) ? mT(t[n], e.key) : void 0;
}
function rA(e, t, ...n) {
    var r, i, o, a;
    (null == (r = (i = e.animation)[t]) || r.call(i, ...n), null == (o = (a = e.defaultProps)[t]) || o.call(a, ...n));
}
const iA = ['onStart', 'onChange', 'onRest'];
let oA = 1;
class aA {
    constructor(e, t) {
        ((this.id = oA++),
            (this.springs = {}),
            (this.queue = []),
            (this.ref = void 0),
            (this._flush = void 0),
            (this._initialProps = void 0),
            (this._lastAsyncId = 0),
            (this._active = new Set()),
            (this._changed = new Set()),
            (this._started = !1),
            (this._item = void 0),
            (this._state = { paused: !1, pauseQueue: new Set(), resumeQueue: new Set(), timeouts: new Set() }),
            (this._events = { onStart: new Map(), onChange: new Map(), onRest: new Map() }),
            (this._onFrame = this._onFrame.bind(this)),
            t && (this._flush = t),
            e && this.start(pT({ default: !0 }, e)));
    }
    get idle() {
        return !this._state.asyncTo && Object.values(this.springs).every((e) => e.idle);
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
            BE.und(n) || this.springs[t].set(n);
        }
    }
    update(e) {
        return (e && this.queue.push(JT(e)), this);
    }
    start(e) {
        let { queue: t } = this;
        return (
            e ? (t = LE(e).map(JT)) : (this.queue = []),
            this._flush ? this._flush(this, t) : (hA(this, t), sA(this, t))
        );
    }
    stop(e, t) {
        if ((e !== !!e && (t = e), t)) {
            const n = this.springs;
            WE(LE(t), (t) => n[t].stop(!!e));
        } else (IT(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
        return this;
    }
    pause(e) {
        if (BE.und(e)) this.start({ pause: !0 });
        else {
            const t = this.springs;
            WE(LE(e), (e) => t[e].pause());
        }
        return this;
    }
    resume(e) {
        if (BE.und(e)) this.start({ pause: !1 });
        else {
            const t = this.springs;
            WE(LE(e), (e) => t[e].resume());
        }
        return this;
    }
    each(e) {
        IE(this.springs, e);
    }
    _onFrame() {
        const { onStart: e, onChange: t, onRest: n } = this._events,
            r = this._active.size > 0,
            i = this._changed.size > 0;
        ((r && !this._started) || (i && !this._started)) &&
            ((this._started = !0),
            DE(e, ([e, t]) => {
                ((t.value = this.get()), e(t, this, this._item));
            }));
        const o = !r && this._started,
            a = i || (o && n.size) ? this.get() : null;
        (i &&
            t.size &&
            DE(t, ([e, t]) => {
                ((t.value = a), e(t, this, this._item));
            }),
            o &&
                ((this._started = !1),
                DE(n, ([e, t]) => {
                    ((t.value = a), e(t, this, this._item));
                })));
    }
    eventObserved(e) {
        if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
        else {
            if ('idle' != e.type) return;
            this._active.delete(e.parent);
        }
        gE.onFrame(this._onFrame);
    }
}
function sA(e, t) {
    return Promise.all(t.map((t) => uA(e, t))).then((t) => jT(e, t));
}
async function uA(e, t, n) {
    const { keys: r, to: i, from: o, loop: a, onRest: s, onResolve: u } = t,
        l = BE.obj(t.default) && t.default;
    (a && (t.loop = !1), !1 === i && (t.to = null), !1 === o && (t.from = null));
    const c = BE.arr(i) || BE.fun(i) ? i : void 0;
    c
        ? ((t.to = void 0), (t.onRest = void 0), l && (l.onRest = void 0))
        : WE(iA, (n) => {
              const r = t[n];
              if (BE.fun(r)) {
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
        ? ((f.paused = t.pause), VE(t.pause ? f.pauseQueue : f.resumeQueue))
        : f.paused && (t.pause = !0);
    const d = (r || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
        h = !0 === t.cancel || !0 === yT(t, 'cancel');
    ((c || (h && f.asyncId)) &&
        d.push(
            NT(++e._lastAsyncId, {
                props: t,
                state: f,
                actions: {
                    pause: UE,
                    resume: UE,
                    start(t, n) {
                        h ? (IT(f, e._lastAsyncId), n(RT(e))) : ((t.onRest = s), n(WT(c, t, f, e)));
                    },
                },
            }),
        ),
        f.paused &&
            (await new Promise((e) => {
                f.resumeQueue.add(e);
            })));
    const p = jT(e, await Promise.all(d));
    if (a && p.finished && (!n || !p.noop)) {
        const n = YT(t, a, i);
        if (n) return (hA(e, [n]), uA(e, n, !0));
    }
    return (u && gE.batchedUpdates(() => u(p, e, e.item)), p);
}
function lA(e, t) {
    const n = pT({}, e.springs);
    return (
        t &&
            WE(LE(t), (e) => {
                (BE.und(e.keys) && (e = JT(e)),
                    BE.obj(e.to) || (e = pT({}, e, { to: void 0 })),
                    dA(n, e, (e) => fA(e)));
            }),
        cA(e, n),
        n
    );
}
function cA(e, t) {
    IE(t, (t, n) => {
        e.springs[n] || ((e.springs[n] = t), CP(t, e));
    });
}
function fA(e, t) {
    const n = new GT();
    return ((n.key = e), t && CP(n, t), n);
}
function dA(e, t, n) {
    t.keys &&
        WE(t.keys, (r) => {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function hA(e, t) {
    WE(t, (t) => {
        dA(e.springs, t, (t) => fA(t, e));
    });
}
const pA = ['children'],
    vA = (e) => {
        let { children: t } = e,
            n = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                return i;
            })(e, pA);
        const r = D.useContext(gA),
            i = n.pause || !!r.pause,
            o = n.immediate || !!r.immediate;
        n = (function (e, t) {
            const [n] = D.useState(() => ({ inputs: t, result: e() })),
                r = D.useRef(),
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
                D.useEffect(() => {
                    ((r.current = o), i == n && (n.inputs = n.result = void 0));
                }, [o]),
                o.result
            );
        })(() => ({ pause: i, immediate: o }), [i, o]);
        const { Provider: a } = gA;
        return D.createElement(a, { value: n }, t);
    },
    gA = (function (e, t) {
        return (Object.assign(e, D.createContext(t)), (e.Provider._context = e), (e.Consumer._context = e), e);
    })(vA, {});
((vA.Provider = gA.Provider), (vA.Consumer = gA.Consumer));
const mA = () => {
    const e = [],
        t = function (t) {
            FP(
                `${VP}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
            );
            const r = [];
            return (
                WE(e, (e, i) => {
                    if (BE.und(t)) r.push(e.start());
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
            return (WE(e, (e) => e.pause(...arguments)), this);
        }),
        (t.resume = function () {
            return (WE(e, (e) => e.resume(...arguments)), this);
        }),
        (t.set = function (t) {
            WE(e, (e) => e.set(t));
        }),
        (t.start = function (t) {
            const n = [];
            return (
                WE(e, (e, r) => {
                    if (BE.und(t)) n.push(e.start());
                    else {
                        const i = this._getProps(t, e, r);
                        i && n.push(e.start(i));
                    }
                }),
                n
            );
        }),
        (t.stop = function () {
            return (WE(e, (e) => e.stop(...arguments)), this);
        }),
        (t.update = function (t) {
            return (WE(e, (e, n) => e.update(this._getProps(t, e, n))), this);
        }));
    const n = function (e, t, n) {
        return BE.fun(e) ? e(n, t) : e;
    };
    return ((t._getProps = n), t);
};
function yA(e, t) {
    const n = BE.fun(e),
        [[r], i] = (function (e, t, n) {
            const r = BE.fun(t) && t;
            r && !n && (n = []);
            const i = D.useMemo(() => (r || 3 == arguments.length ? mA() : void 0), []),
                o = D.useRef(0),
                a = HP(),
                s = D.useMemo(
                    () => ({
                        ctrls: [],
                        queue: [],
                        flush(e, t) {
                            const n = lA(e, t);
                            return o.current > 0 && !s.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                                ? sA(e, t)
                                : new Promise((r) => {
                                      (cA(e, n),
                                          s.queue.push(() => {
                                              r(sA(e, t));
                                          }),
                                          a());
                                  });
                        },
                    }),
                    [],
                ),
                u = D.useRef([...s.ctrls]),
                l = [],
                c = GP(e) || 0;
            function f(e, n) {
                for (let i = e; i < n; i++) {
                    const e = u.current[i] || (u.current[i] = new aA(null, s.flush)),
                        n = r ? r(i, e) : t[i];
                    n && (l[i] = ZT(n));
                }
            }
            (D.useMemo(() => {
                (WE(u.current.slice(e, c), (e) => {
                    (!(function (e, t) {
                        var n;
                        (null == (n = e.ref) || n.delete(e), null == t || t.delete(e));
                    })(e, i),
                        e.stop(!0));
                }),
                    (u.current.length = e),
                    f(c, e));
            }, [e]),
                D.useMemo(() => {
                    f(0, Math.min(c, e));
                }, n));
            const d = u.current.map((e, t) => lA(e, l[t])),
                h = D.useContext(vA),
                p = GP(h),
                v =
                    h !== p &&
                    (function (e) {
                        for (const t in e) return !0;
                        return !1;
                    })(h);
            (XP(() => {
                (o.current++, (s.ctrls = u.current));
                const { queue: e } = s;
                (e.length && ((s.queue = []), WE(e, (e) => e())),
                    WE(u.current, (e, t) => {
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
                QP(() => () => {
                    WE(s.ctrls, (e) => e.stop(!0));
                }));
            const g = d.map((e) => pT({}, e));
            return i ? [g, i] : g;
        })(1, n ? e : [e], n ? [] : t);
    return n || 2 == arguments.length ? [r, i] : r;
}
let bA;
var _A;
(((_A = bA || (bA = {})).MOUNT = 'mount'), (_A.ENTER = 'enter'), (_A.UPDATE = 'update'), (_A.LEAVE = 'leave'));
class wA extends zT {
    constructor(e, t) {
        (super(),
            (this.key = void 0),
            (this.idle = !0),
            (this.calc = void 0),
            (this._active = new Set()),
            (this.source = e),
            (this.calc = _P(...t)));
        const n = this._get(),
            r = uT(n);
        ZP(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        (RE(t, this.get()) || (JP(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && kA(this._active) && OA(this));
    }
    _get() {
        const e = BE.arr(this.source) ? this.source.map(xP) : LE(xP(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !kA(this._active) &&
            ((this.idle = !1),
            WE(eT(this), (e) => {
                e.done = !1;
            }),
            qE.skipAnimation ? (gE.batchedUpdates(() => this.advance()), OA(this)) : YE.start(this));
    }
    _attach() {
        let e = 1;
        (WE(LE(this.source), (t) => {
            (OP(t) && CP(t, this), VT(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (WE(LE(this.source), (e) => {
            OP(e) && NP(e, this);
        }),
            this._active.clear(),
            OA(this));
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = LE(this.source).reduce((e, t) => Math.max(e, (VT(t) ? t.priority : 0) + 1), 0));
    }
}
function SA(e) {
    return !1 !== e.idle;
}
function kA(e) {
    return !e.size || Array.from(e).every(SA);
}
function OA(e) {
    e.idle ||
        ((e.idle = !0),
        WE(eT(e), (e) => {
            e.done = !0;
        }),
        PP(e, { type: 'idle', parent: e }));
}
function xA(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
qE.assign({ createStringInterpolator: DP, to: (e, t) => new wA(e, t) });
const EA = ['style', 'children', 'scrollTop', 'scrollLeft'],
    PA = /^--/;
function TA(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || PA.test(e) || (CA.hasOwnProperty(e) && CA[e])
          ? ('' + t).trim()
          : t + 'px';
}
const AA = {};
let CA = {
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
};
const NA = ['Webkit', 'Ms', 'Moz', 'O'];
CA = Object.keys(CA).reduce(
    (e, t) => (NA.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    CA,
);
const jA = ['x', 'y', 'z'],
    UA = /^(matrix|translate|scale|rotate|skew)/,
    BA = /^(translate)/,
    RA = /^(rotate|skew)/,
    WA = (e, t) => (BE.num(e) && 0 !== e ? e + t : e),
    IA = (e, t) => (BE.arr(e) ? e.every((e) => IA(e, t)) : BE.num(e) ? e === t : parseFloat(e) === t);
class LA extends oT {
    constructor(e) {
        let { x: t, y: n, z: r } = e,
            i = xA(e, jA);
        const o = [],
            a = [];
        ((t || n || r) &&
            (o.push([t || 0, n || 0, r || 0]),
            a.push((e) => [`translate3d(${e.map((e) => WA(e, 'px')).join(',')})`, IA(e, 0)])),
            IE(i, (e, t) => {
                if ('transform' === t) (o.push([e || '']), a.push((e) => [e, '' === e]));
                else if (UA.test(t)) {
                    if ((delete i[t], BE.und(e))) return;
                    const n = BA.test(t) ? 'px' : RA.test(t) ? 'deg' : '';
                    (o.push(LE(e)),
                        a.push(
                            'rotate3d' === t
                                ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${WA(i, n)})`, IA(i, 0)]
                                : (e) => [
                                      `${t}(${e.map((e) => WA(e, n)).join(',')})`,
                                      IA(e, t.startsWith('scale') ? 1 : 0),
                                  ],
                        ));
                }
            }),
            o.length && (i.transform = new DA(o, a)),
            super(i));
    }
}
class DA extends TP {
    constructor(e, t) {
        (super(), (this._value = null), (this.inputs = e), (this.transforms = t));
    }
    get() {
        return this._value || (this._value = this._get());
    }
    _get() {
        let e = '',
            t = !0;
        return (
            WE(this.inputs, (n, r) => {
                const i = xP(n[0]),
                    [o, a] = this.transforms[r](BE.arr(i) ? i : n.map(xP));
                ((e += ' ' + o), (t = t && a));
            }),
            t ? 'none' : e
        );
    }
    observerAdded(e) {
        1 == e && WE(this.inputs, (e) => WE(e, (e) => OP(e) && CP(e, this)));
    }
    observerRemoved(e) {
        0 == e && WE(this.inputs, (e) => WE(e, (e) => OP(e) && NP(e, this)));
    }
    eventObserved(e) {
        ('change' == e.type && (this._value = null), PP(this, e));
    }
}
const VA = ['scrollTop', 'scrollLeft'];
qE.assign({
    batchedUpdates: Df.unstable_batchedUpdates,
    createStringInterpolator: DP,
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
const MA = ((
    e,
    {
        applyAnimatedValues: t = () => !1,
        createAnimatedStyle: n = (e) => new oT(e),
        getComponentProps: r = (e) => e,
    } = {},
) => {
    const i = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
        o = (e) => {
            const t = hT(e) || 'Anonymous';
            return (
                ((e = BE.str(e) ? o[e] || (o[e] = cT(e, i)) : e[dT] || (e[dT] = cT(e, i))).displayName =
                    `Animated(${t})`),
                e
            );
        };
    return (
        IE(e, (t, n) => {
            (BE.arr(e) && (n = hT(t)), (o[n] = o(t)));
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
                r = t,
                { style: i, children: o, scrollTop: a, scrollLeft: s } = r,
                u = xA(r, EA),
                l = Object.values(u),
                c = Object.keys(u).map((t) =>
                    n || e.hasAttribute(t) ? t : AA[t] || (AA[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                );
            void 0 !== o && (e.textContent = o);
            for (let f in i)
                if (i.hasOwnProperty(f)) {
                    const t = TA(f, i[f]);
                    PA.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                }
            (c.forEach((t, n) => {
                e.setAttribute(t, l[n]);
            }),
                void 0 !== a && (e.scrollTop = a),
                void 0 !== s && (e.scrollLeft = s));
        },
        createAnimatedStyle: (e) => new LA(e),
        getComponentProps: (e) => xA(e, VA),
    },
).animated;
function zA() {
    return (
        (zA = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        zA.apply(null, arguments)
    );
}
function FA(e, t) {
    if (null == e) return {};
    var n = {};
    for (var r in e)
        if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
        }
    return n;
}
function $A(e, t) {
    return ($A = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return ((e.__proto__ = t), e);
          })(e, t);
}
function QA(e, t) {
    ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), $A(e, t));
}
function qA(e, t) {
    return e
        .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
        .replace(/\s+/g, ' ')
        .replace(/^\s*|\s*$/g, '');
}
const HA = !1,
    KA = V.createContext(null);
var GA = 'unmounted',
    XA = 'exited',
    YA = 'entering',
    JA = 'entered',
    ZA = 'exiting',
    eC = (function (e) {
        function t(t, n) {
            var r;
            r = e.call(this, t, n) || this;
            var i,
                o = n && !n.isMounting ? t.enter : t.appear;
            return (
                (r.appearStatus = null),
                t.in
                    ? o
                        ? ((i = XA), (r.appearStatus = YA))
                        : (i = JA)
                    : (i = t.unmountOnExit || t.mountOnEnter ? GA : XA),
                (r.state = { status: i }),
                (r.nextCallback = null),
                r
            );
        }
        (QA(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
                return e.in && t.status === GA ? { status: XA } : null;
            }));
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (e) {
                var t = null;
                if (e !== this.props) {
                    var n = this.state.status;
                    this.props.in ? n !== YA && n !== JA && (t = YA) : (n !== YA && n !== JA) || (t = ZA);
                }
                this.updateStatus(!1, t);
            }),
            (n.componentWillUnmount = function () {
                this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
                var e,
                    t,
                    n,
                    r = this.props.timeout;
                return (
                    (e = t = n = r),
                    null != r &&
                        'number' != typeof r &&
                        ((e = r.exit), (t = r.enter), (n = void 0 !== r.appear ? r.appear : t)),
                    { exit: e, enter: t, appear: n }
                );
            }),
            (n.updateStatus = function (e, t) {
                (void 0 === e && (e = !1),
                    null !== t
                        ? (this.cancelNextCallback(), t === YA ? this.performEnter(e) : this.performExit())
                        : this.props.unmountOnExit && this.state.status === XA && this.setState({ status: GA }));
            }),
            (n.performEnter = function (e) {
                var t = this,
                    n = this.props.enter,
                    r = this.context ? this.context.isMounting : e,
                    i = this.props.nodeRef ? [r] : [Vf.findDOMNode(this), r],
                    o = i[0],
                    a = i[1],
                    s = this.getTimeouts(),
                    u = r ? s.appear : s.enter;
                (!e && !n) || HA
                    ? this.safeSetState({ status: JA }, function () {
                          t.props.onEntered(o);
                      })
                    : (this.props.onEnter(o, a),
                      this.safeSetState({ status: YA }, function () {
                          (t.props.onEntering(o, a),
                              t.onTransitionEnd(u, function () {
                                  t.safeSetState({ status: JA }, function () {
                                      t.props.onEntered(o, a);
                                  });
                              }));
                      }));
            }),
            (n.performExit = function () {
                var e = this,
                    t = this.props.exit,
                    n = this.getTimeouts(),
                    r = this.props.nodeRef ? void 0 : Vf.findDOMNode(this);
                t && !HA
                    ? (this.props.onExit(r),
                      this.safeSetState({ status: ZA }, function () {
                          (e.props.onExiting(r),
                              e.onTransitionEnd(n.exit, function () {
                                  e.safeSetState({ status: XA }, function () {
                                      e.props.onExited(r);
                                  });
                              }));
                      }))
                    : this.safeSetState({ status: XA }, function () {
                          e.props.onExited(r);
                      });
            }),
            (n.cancelNextCallback = function () {
                null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (e, t) {
                ((t = this.setNextCallback(t)), this.setState(e, t));
            }),
            (n.setNextCallback = function (e) {
                var t = this,
                    n = !0;
                return (
                    (this.nextCallback = function (r) {
                        n && ((n = !1), (t.nextCallback = null), e(r));
                    }),
                    (this.nextCallback.cancel = function () {
                        n = !1;
                    }),
                    this.nextCallback
                );
            }),
            (n.onTransitionEnd = function (e, t) {
                this.setNextCallback(t);
                var n = this.props.nodeRef ? this.props.nodeRef.current : Vf.findDOMNode(this),
                    r = null == e && !this.props.addEndListener;
                if (n && !r) {
                    if (this.props.addEndListener) {
                        var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                            o = i[0],
                            a = i[1];
                        this.props.addEndListener(o, a);
                    }
                    null != e && setTimeout(this.nextCallback, e);
                } else setTimeout(this.nextCallback, 0);
            }),
            (n.render = function () {
                var e = this.state.status;
                if (e === GA) return null;
                var t = this.props,
                    n = t.children;
                (t.in,
                    t.mountOnEnter,
                    t.unmountOnExit,
                    t.appear,
                    t.enter,
                    t.exit,
                    t.timeout,
                    t.addEndListener,
                    t.onEnter,
                    t.onEntering,
                    t.onEntered,
                    t.onExit,
                    t.onExiting,
                    t.onExited,
                    t.nodeRef);
                var r = FA(t, [
                    'children',
                    'in',
                    'mountOnEnter',
                    'unmountOnExit',
                    'appear',
                    'enter',
                    'exit',
                    'timeout',
                    'addEndListener',
                    'onEnter',
                    'onEntering',
                    'onEntered',
                    'onExit',
                    'onExiting',
                    'onExited',
                    'nodeRef',
                ]);
                return V.createElement(
                    KA.Provider,
                    { value: null },
                    'function' == typeof n ? n(e, r) : V.cloneElement(V.Children.only(n), r),
                );
            }),
            t
        );
    })(V.Component);
function tC() {}
((eC.contextType = KA),
    (eC.propTypes = {}),
    (eC.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: tC,
        onEntering: tC,
        onEntered: tC,
        onExit: tC,
        onExiting: tC,
        onExited: tC,
    }),
    (eC.UNMOUNTED = GA),
    (eC.EXITED = XA),
    (eC.ENTERING = YA),
    (eC.ENTERED = JA),
    (eC.EXITING = ZA));
var nC = function (e, t) {
        return (
            e &&
            t &&
            t.split(' ').forEach(function (t) {
                return (
                    (r = t),
                    void ((n = e).classList
                        ? n.classList.remove(r)
                        : 'string' == typeof n.className
                          ? (n.className = qA(n.className, r))
                          : n.setAttribute('class', qA((n.className && n.className.baseVal) || '', r)))
                );
                var n, r;
            })
        );
    },
    rC = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return (
                ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = { appear: {}, enter: {}, exit: {} }),
                (t.onEnter = function (e, n) {
                    var r = t.resolveArguments(e, n),
                        i = r[0],
                        o = r[1];
                    (t.removeClasses(i, 'exit'),
                        t.addClass(i, o ? 'appear' : 'enter', 'base'),
                        t.props.onEnter && t.props.onEnter(e, n));
                }),
                (t.onEntering = function (e, n) {
                    var r = t.resolveArguments(e, n),
                        i = r[0],
                        o = r[1] ? 'appear' : 'enter';
                    (t.addClass(i, o, 'active'), t.props.onEntering && t.props.onEntering(e, n));
                }),
                (t.onEntered = function (e, n) {
                    var r = t.resolveArguments(e, n),
                        i = r[0],
                        o = r[1] ? 'appear' : 'enter';
                    (t.removeClasses(i, o), t.addClass(i, o, 'done'), t.props.onEntered && t.props.onEntered(e, n));
                }),
                (t.onExit = function (e) {
                    var n = t.resolveArguments(e)[0];
                    (t.removeClasses(n, 'appear'),
                        t.removeClasses(n, 'enter'),
                        t.addClass(n, 'exit', 'base'),
                        t.props.onExit && t.props.onExit(e));
                }),
                (t.onExiting = function (e) {
                    var n = t.resolveArguments(e)[0];
                    (t.addClass(n, 'exit', 'active'), t.props.onExiting && t.props.onExiting(e));
                }),
                (t.onExited = function (e) {
                    var n = t.resolveArguments(e)[0];
                    (t.removeClasses(n, 'exit'),
                        t.addClass(n, 'exit', 'done'),
                        t.props.onExited && t.props.onExited(e));
                }),
                (t.resolveArguments = function (e, n) {
                    return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
                }),
                (t.getClassNames = function (e) {
                    var n = t.props.classNames,
                        r = 'string' == typeof n,
                        i = r ? '' + (r && n ? n + '-' : '') + e : n[e];
                    return {
                        baseClassName: i,
                        activeClassName: r ? i + '-active' : n[e + 'Active'],
                        doneClassName: r ? i + '-done' : n[e + 'Done'],
                    };
                }),
                t
            );
        }
        QA(t, e);
        var n = t.prototype;
        return (
            (n.addClass = function (e, t, n) {
                var r = this.getClassNames(t)[n + 'ClassName'],
                    i = this.getClassNames('enter').doneClassName;
                ('appear' === t && 'done' === n && i && (r += ' ' + i),
                    'active' === n && e && e.scrollTop,
                    r &&
                        ((this.appliedClasses[t][n] = r),
                        (function (e, t) {
                            e &&
                                t &&
                                t.split(' ').forEach(function (t) {
                                    return (
                                        (r = t),
                                        void ((n = e).classList
                                            ? n.classList.add(r)
                                            : (function (e, t) {
                                                  return e.classList
                                                      ? !!t && e.classList.contains(t)
                                                      : -1 !==
                                                            (' ' + (e.className.baseVal || e.className) + ' ').indexOf(
                                                                ' ' + t + ' ',
                                                            );
                                              })(n, r) ||
                                              ('string' == typeof n.className
                                                  ? (n.className = n.className + ' ' + r)
                                                  : n.setAttribute(
                                                        'class',
                                                        ((n.className && n.className.baseVal) || '') + ' ' + r,
                                                    )))
                                    );
                                    var n, r;
                                });
                        })(e, r)));
            }),
            (n.removeClasses = function (e, t) {
                var n = this.appliedClasses[t],
                    r = n.base,
                    i = n.active,
                    o = n.done;
                ((this.appliedClasses[t] = {}), r && nC(e, r), i && nC(e, i), o && nC(e, o));
            }),
            (n.render = function () {
                var e = this.props;
                e.classNames;
                var t = FA(e, ['classNames']);
                return V.createElement(
                    eC,
                    zA({}, t, {
                        onEnter: this.onEnter,
                        onEntered: this.onEntered,
                        onEntering: this.onEntering,
                        onExit: this.onExit,
                        onExiting: this.onExiting,
                        onExited: this.onExited,
                    }),
                );
            }),
            t
        );
    })(V.Component);
((rC.defaultProps = { classNames: '' }), (rC.propTypes = {}));
const iC = !1,
    oC = V.createContext(null);
var aC = 'unmounted',
    sC = 'exited',
    uC = 'entering',
    lC = 'entered',
    cC = 'exiting',
    fC = (function (e) {
        function t(t, n) {
            var r;
            r = e.call(this, t, n) || this;
            var i,
                o = n && !n.isMounting ? t.enter : t.appear;
            return (
                (r.appearStatus = null),
                t.in
                    ? o
                        ? ((i = sC), (r.appearStatus = uC))
                        : (i = lC)
                    : (i = t.unmountOnExit || t.mountOnEnter ? aC : sC),
                (r.state = { status: i }),
                (r.nextCallback = null),
                r
            );
        }
        (QA(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
                return e.in && t.status === aC ? { status: sC } : null;
            }));
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (e) {
                var t = null;
                if (e !== this.props) {
                    var n = this.state.status;
                    this.props.in ? n !== uC && n !== lC && (t = uC) : (n !== uC && n !== lC) || (t = cC);
                }
                this.updateStatus(!1, t);
            }),
            (n.componentWillUnmount = function () {
                this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
                var e,
                    t,
                    n,
                    r = this.props.timeout;
                return (
                    (e = t = n = r),
                    null != r &&
                        'number' != typeof r &&
                        ((e = r.exit), (t = r.enter), (n = void 0 !== r.appear ? r.appear : t)),
                    { exit: e, enter: t, appear: n }
                );
            }),
            (n.updateStatus = function (e, t) {
                if ((void 0 === e && (e = !1), null !== t)) {
                    this.cancelNextCallback();
                    var n = Vf.findDOMNode(this);
                    t === uC ? this.performEnter(n, e) : this.performExit(n);
                } else this.props.unmountOnExit && this.state.status === sC && this.setState({ status: aC });
            }),
            (n.performEnter = function (e, t) {
                var n = this,
                    r = this.props.enter,
                    i = this.context ? this.context.isMounting : t,
                    o = this.getTimeouts(),
                    a = i ? o.appear : o.enter;
                (!t && !r) || iC
                    ? this.safeSetState({ status: lC }, function () {
                          n.props.onEntered(e);
                      })
                    : (this.props.onEnter(e, i),
                      this.safeSetState({ status: uC }, function () {
                          (n.props.onEntering(e, i),
                              n.onTransitionEnd(e, a, function () {
                                  n.safeSetState({ status: lC }, function () {
                                      n.props.onEntered(e, i);
                                  });
                              }));
                      }));
            }),
            (n.performExit = function (e) {
                var t = this,
                    n = this.props.exit,
                    r = this.getTimeouts();
                n && !iC
                    ? (this.props.onExit(e),
                      this.safeSetState({ status: cC }, function () {
                          (t.props.onExiting(e),
                              t.onTransitionEnd(e, r.exit, function () {
                                  t.safeSetState({ status: sC }, function () {
                                      t.props.onExited(e);
                                  });
                              }));
                      }))
                    : this.safeSetState({ status: sC }, function () {
                          t.props.onExited(e);
                      });
            }),
            (n.cancelNextCallback = function () {
                null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (e, t) {
                ((t = this.setNextCallback(t)), this.setState(e, t));
            }),
            (n.setNextCallback = function (e) {
                var t = this,
                    n = !0;
                return (
                    (this.nextCallback = function (r) {
                        n && ((n = !1), (t.nextCallback = null), e(r));
                    }),
                    (this.nextCallback.cancel = function () {
                        n = !1;
                    }),
                    this.nextCallback
                );
            }),
            (n.onTransitionEnd = function (e, t, n) {
                this.setNextCallback(n);
                var r = null == t && !this.props.addEndListener;
                e && !r
                    ? (this.props.addEndListener && this.props.addEndListener(e, this.nextCallback),
                      null != t && setTimeout(this.nextCallback, t))
                    : setTimeout(this.nextCallback, 0);
            }),
            (n.render = function () {
                var e = this.state.status;
                if (e === aC) return null;
                var t = this.props,
                    n = t.children,
                    r = FA(t, ['children']);
                if (
                    (delete r.in,
                    delete r.mountOnEnter,
                    delete r.unmountOnExit,
                    delete r.appear,
                    delete r.enter,
                    delete r.exit,
                    delete r.timeout,
                    delete r.addEndListener,
                    delete r.onEnter,
                    delete r.onEntering,
                    delete r.onEntered,
                    delete r.onExit,
                    delete r.onExiting,
                    delete r.onExited,
                    'function' == typeof n)
                )
                    return V.createElement(oC.Provider, { value: null }, n(e, r));
                var i = V.Children.only(n);
                return V.createElement(oC.Provider, { value: null }, V.cloneElement(i, r));
            }),
            t
        );
    })(V.Component);
function dC() {}
((fC.contextType = oC),
    (fC.propTypes = {}),
    (fC.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: dC,
        onEntering: dC,
        onEntered: dC,
        onExit: dC,
        onExiting: dC,
        onExited: dC,
    }),
    (fC.UNMOUNTED = 0),
    (fC.EXITED = 1),
    (fC.ENTERING = 2),
    (fC.ENTERED = 3),
    (fC.EXITING = 4));
export {
    rC as C,
    V as R,
    fC as T,
    ve as a,
    me as b,
    Ae as c,
    ge as d,
    Ep as e,
    $f as f,
    Gh as g,
    Ne as h,
    ox as i,
    K as j,
    lx as k,
    kg as l,
    Iw as m,
    Ex as n,
    Sh as o,
    VO as p,
    Tx as q,
    D as r,
    hE as s,
    MA as t,
    Ab as u,
    yA as v,
    Qx as w,
};
