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
var O = Array.isArray,
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
function C(e) {
    return 'object' == typeof e && null !== e && e.$$typeof === o;
}
var j = /\/+/g;
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
function R(e, t, n, r, i) {
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
            (e = '' === r ? '.' + T(u, 0) : r),
            O(i)
                ? ((n = ''),
                  null != e && (n = e.replace(j, '$&/') + '/'),
                  R(i, t, n, '', function (e) {
                      return e;
                  }))
                : null != i &&
                  (C(i) &&
                      (i = (function (e, t) {
                          return { $$typeof: o, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                      })(i, n + (!i.key || (u && u.key === i.key) ? '' : ('' + i.key).replace(j, '$&/') + '/') + e)),
                  t.push(i)),
            1
        );
    if (((u = 0), (r = '' === r ? '.' : r + ':'), O(e)))
        for (var l = 0; l < e.length; l++) {
            var c = r + T((s = e[l]), l);
            u += R(s, t, n, c, i);
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
        for (e = c.call(e), l = 0; !(s = e.next()).done; ) u += R((s = s.value), t, n, (c = r + T(s, l++)), i);
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
function N(e, t, n) {
    if (null == e) return e;
    var r = [],
        i = 0;
    return (
        R(e, r, '', '', function (e) {
            return t.call(n, e, i++);
        }),
        r
    );
}
function V(e) {
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
    L = { transition: null },
    M = { ReactCurrentDispatcher: I, ReactCurrentBatchConfig: L, ReactCurrentOwner: P };
function D() {
    throw Error('act(...) is not supported in production builds of React.');
}
((i.Children = {
    map: N,
    forEach: function (e, t, n) {
        N(
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
            N(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            N(e, function (e) {
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
    (i.Fragment = s),
    (i.Profiler = l),
    (i.PureComponent = S),
    (i.StrictMode = u),
    (i.Suspense = h),
    (i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
    (i.act = D),
    (i.cloneElement = function (e, t, n) {
        if (null == e)
            throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
        var r = y({}, e.props),
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
    (i.isValidElement = C),
    (i.lazy = function (e) {
        return { $$typeof: v, _payload: { _status: -1, _result: e }, _init: V };
    }),
    (i.memo = function (e, t) {
        return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
    }),
    (i.startTransition = function (e) {
        var t = L.transition;
        L.transition = {};
        try {
            e();
        } finally {
            L.transition = t;
        }
    }),
    (i.unstable_act = D),
    (i.useCallback = function (e, t) {
        return I.current.useCallback(e, t);
    }),
    (i.useContext = function (e) {
        return I.current.useContext(e);
    }),
    (i.useDebugValue = function () {}),
    (i.useDeferredValue = function (e) {
        return I.current.useDeferredValue(e);
    }),
    (i.useEffect = function (e, t) {
        return I.current.useEffect(e, t);
    }),
    (i.useId = function () {
        return I.current.useId();
    }),
    (i.useImperativeHandle = function (e, t, n) {
        return I.current.useImperativeHandle(e, t, n);
    }),
    (i.useInsertionEffect = function (e, t) {
        return I.current.useInsertionEffect(e, t);
    }),
    (i.useLayoutEffect = function (e, t) {
        return I.current.useLayoutEffect(e, t);
    }),
    (i.useMemo = function (e, t) {
        return I.current.useMemo(e, t);
    }),
    (i.useReducer = function (e, t, n) {
        return I.current.useReducer(e, t, n);
    }),
    (i.useRef = function (e) {
        return I.current.useRef(e);
    }),
    (i.useState = function (e) {
        return I.current.useState(e);
    }),
    (i.useSyncExternalStore = function (e, t, n) {
        return I.current.useSyncExternalStore(e, t, n);
    }),
    (i.useTransition = function () {
        return I.current.useTransition();
    }),
    (i.version = '18.3.1'),
    (r.exports = i));
var z = r.exports;
const F = e(z);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var U = z,
    B = Symbol.for('react.element'),
    $ = Symbol.for('react.fragment'),
    q = Object.prototype.hasOwnProperty,
    K = U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    W = { key: !0, ref: !0, __self: !0, __source: !0 };
function G(e, t, n) {
    var r,
        i = {},
        o = null,
        a = null;
    for (r in (void 0 !== n && (o = '' + n), void 0 !== t.key && (o = '' + t.key), void 0 !== t.ref && (a = t.ref), t))
        q.call(t, r) && !W.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
    return { $$typeof: B, type: e, key: o, ref: a, props: i, _owner: K.current };
}
((n.Fragment = $), (n.jsx = G), (n.jsxs = G), (t.exports = n));
var H = t.exports,
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
function me(e, t) {
    if (!he(e)) throw new te('asFunction', 'fn', 'function', e);
    t = we({ lifetime: oe.TRANSIENT }, t, e[pe]);
    var n = Oe(e);
    return be(ye(Y({ resolve: n }, t)));
}
function ge(e, t) {
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
var Pe = Symbol('familyTree'),
    Ee = Symbol('rollUpRegistrations'),
    Ae = 'AwilixContainerCradle';
function Ce(e) {
    return (void 0 === e && (e = {}), je(e));
}
function je(e, t, n) {
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
                    return je(e, s, i);
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
                        (de(e) ? ge(e, t) : me(e, t)).resolve(s)
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
var Te = {},
    Re = { exports: {} },
    Ne = {},
    Ve = { exports: {} },
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
        m = 'function' == typeof setTimeout ? setTimeout : null,
        g = 'function' == typeof clearTimeout ? clearTimeout : null,
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
            if (null !== n(u)) ((p = !0), R(w));
            else {
                var t = n(l);
                null !== t && N(_, t.startTime - e);
            }
    }
    function w(t, i) {
        ((p = !1), v && ((v = !1), g(x), (x = -1)), (h = !0));
        var o = d;
        try {
            for (b(i), f = n(u); null !== f && (!(f.expirationTime > i) || (t && !A())); ) {
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
                var m = n(l);
                (null !== m && N(_, m.startTime - i), (c = !1));
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
        P = 5,
        E = -1;
    function A() {
        return !(e.unstable_now() - E < P);
    }
    function C() {
        if (null !== O) {
            var t = e.unstable_now();
            E = t;
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
            T = j.port2;
        ((j.port1.onmessage = C),
            (S = function () {
                T.postMessage(null);
            }));
    } else
        S = function () {
            m(C, 0);
        };
    function R(e) {
        ((O = e), k || ((k = !0), S()));
    }
    function N(t, n) {
        x = m(function () {
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
            p || h || ((p = !0), R(w));
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
                      null === n(u) && r === n(l) && (v ? (g(x), (x = -1)) : (v = !0), N(_, o - a)))
                    : ((r.sortIndex = s), t(u, r), p || h || ((p = !0), R(w))),
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
})(Ie),
    (Ve.exports = Ie));
var Le = Ve.exports,
    Me = z,
    De = Le;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function ze(e) {
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
    Ke = Object.prototype.hasOwnProperty,
    We =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ge = {},
    He = {};
function Qe(e, t, n, r, i, o, a) {
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
                  return !!Ke.call(He, e) || (!Ke.call(Ge, e) && (We.test(e) ? (He[e] = !0) : ((Ge[e] = !0), !1)));
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
var et = Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
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
function Ct(e, t) {
    var n = t.checked;
    return gt({}, t, {
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
function Tt(e, t) {
    null != (t = t.checked) && Ze(e, 'checked', t, !1);
}
function Rt(e, t) {
    Tt(e, t);
    var n = Ot(t.value),
        r = t.type;
    if (null != n)
        'number' === r
            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
    (t.hasOwnProperty('value')
        ? Vt(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && Vt(e, t.type, Ot(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked));
}
function Nt(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
        ((t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t));
    }
    ('' !== (n = e.name) && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        '' !== n && (e.name = n));
}
function Vt(e, t, n) {
    ('number' === t && At(e.ownerDocument) === e) ||
        (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var It = Array.isArray;
function Lt(e, t, n, r) {
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
function Mt(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(ze(91));
    return gt({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Dt(e, t) {
    var n = t.value;
    if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(ze(92));
            if (It(n)) {
                if (1 < n.length) throw Error(ze(93));
                n = n[0];
            }
            t = n;
        }
        (null == t && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: Ot(n) };
}
function zt(e, t) {
    var n = Ot(t.value),
        r = Ot(t.defaultValue);
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
    Kt =
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
var Gt = {
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
function Qt(e, t, n) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n || 'number' != typeof t || 0 === t || (Gt.hasOwnProperty(e) && Gt[e])
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
Object.keys(Gt).forEach(function (e) {
    Ht.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Gt[t] = Gt[e]));
    });
});
var Yt = gt(
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
        if (Yt[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(ze(137, e));
        if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(ze(60));
            if ('object' != typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
                throw Error(ze(61));
        }
        if (null != t.style && 'object' != typeof t.style) throw Error(ze(62));
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
        if ('function' != typeof nn) throw Error(ze(280));
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
    if (n && 'function' != typeof n) throw Error(ze(231, t, typeof n));
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
function mn(e, t, n, r, i, o, a, s, u) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, l);
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
function Sn(e, t, n, r, i, o, a, s, u) {
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
function On(e) {
    if (13 === e.tag) {
        var t = e.memoizedState;
        if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
    }
    return null;
}
function xn(e) {
    if (kn(e) !== e) throw Error(ze(188));
}
function Pn(e) {
    return null !==
        (e = (function (e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = kn(e))) throw Error(ze(188));
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
                    throw Error(ze(188));
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
                        if (!a) throw Error(ze(189));
                    }
                }
                if (n.alternate !== r) throw Error(ze(190));
            }
            if (3 !== n.tag) throw Error(ze(188));
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
var An = De.unstable_scheduleCallback,
    Cn = De.unstable_cancelCallback,
    jn = De.unstable_shouldYield,
    Tn = De.unstable_requestPaint,
    Rn = De.unstable_now,
    Nn = De.unstable_getCurrentPriorityLevel,
    Vn = De.unstable_ImmediatePriority,
    In = De.unstable_UserBlockingPriority,
    Ln = De.unstable_NormalPriority,
    Mn = De.unstable_LowPriority,
    Dn = De.unstable_IdlePriority,
    zn = null,
    Fn = null;
var Un = Math.clz32
        ? Math.clz32
        : function (e) {
              return ((e >>>= 0), 0 === e ? 32 : (31 - ((Bn(e) / $n) | 0)) | 0);
          },
    Bn = Math.log,
    $n = Math.LN2;
var qn = 64,
    Kn = 4194304;
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
function Gn(e, t) {
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
function Qn(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
}
function Xn() {
    var e = qn;
    return (0 == (4194240 & (qn <<= 1)) && (qn = 64), e);
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
function mr(e, t) {
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
        var n = jr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
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
        ((e.blockedOn = null), sr || ((sr = !0), De.unstable_scheduleCallback(De.unstable_NormalPriority, wr)));
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
function Pr(e, t, n, r) {
    var i = er,
        o = Or.transition;
    Or.transition = null;
    try {
        ((er = 1), Ar(e, t, n, r));
    } finally {
        ((er = i), (Or.transition = o));
    }
}
function Er(e, t, n, r) {
    var i = er,
        o = Or.transition;
    Or.transition = null;
    try {
        ((er = 4), Ar(e, t, n, r));
    } finally {
        ((er = i), (Or.transition = o));
    }
}
function Ar(e, t, n, r) {
    if (xr) {
        var i = jr(e, t, n, r);
        if (null === i) (xo(e, t, r, Cr, n), mr(e, r));
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
        else if ((mr(e, r), 4 & t && -1 < vr.indexOf(e))) {
            for (; null !== i; ) {
                var o = ea(i);
                if ((null !== o && nr(o), null === (o = jr(e, t, n, r)) && xo(e, t, r, Cr, n), o === i)) break;
                i = o;
            }
            null !== i && r.stopPropagation();
        } else xo(e, t, r, null, n);
    }
}
var Cr = null;
function jr(e, t, n, r) {
    if (((Cr = null), null !== (e = Zo((e = tn(r))))))
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
            switch (Nn()) {
                case Vn:
                    return 1;
                case In:
                    return 4;
                case Ln:
                case Mn:
                    return 16;
                case Dn:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Rr = null,
    Nr = null,
    Vr = null;
function Ir() {
    if (Vr) return Vr;
    var e,
        t,
        n = Nr,
        r = n.length,
        i = 'value' in Rr ? Rr.value : Rr.textContent,
        o = i.length;
    for (e = 0; e < r && n[e] === i[e]; e++);
    var a = r - e;
    for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
    return (Vr = i.slice(e, 1 < t ? 1 - t : void 0));
}
function Lr(e) {
    var t = e.keyCode;
    return (
        'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
    );
}
function Mr() {
    return !0;
}
function Dr() {
    return !1;
}
function zr(e) {
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
                ? Mr
                : Dr),
            (this.isPropagationStopped = Dr),
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
                    (this.isDefaultPrevented = Mr));
            },
            stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                    (e.stopPropagation
                        ? e.stopPropagation()
                        : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                    (this.isPropagationStopped = Mr));
            },
            persist: function () {},
            isPersistent: Mr,
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
    qr = zr($r),
    Kr = gt({}, $r, { view: 0, detail: 0 }),
    Wr = zr(Kr),
    Gr = gt({}, Kr, {
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
    Hr = zr(Gr),
    Qr = zr(gt({}, Gr, { dataTransfer: 0 })),
    Xr = zr(gt({}, Kr, { relatedTarget: 0 })),
    Yr = zr(gt({}, $r, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    Jr = gt({}, $r, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    Zr = zr(Jr),
    ei = zr(gt({}, $r, { data: 0 })),
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
var ai = gt({}, Kr, {
        key: function (e) {
            if (e.key) {
                var t = ti[e.key] || e.key;
                if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
                ? 13 === (e = Lr(e))
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
            return 'keypress' === e.type ? Lr(e) : 0;
        },
        keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
        which: function (e) {
            return 'keypress' === e.type ? Lr(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
    }),
    si = zr(ai),
    ui = zr(
        gt({}, Gr, {
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
    li = zr(
        gt({}, Kr, {
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
    ci = zr(gt({}, $r, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    fi = gt({}, Gr, {
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
    di = zr(fi),
    hi = [9, 13, 27, 32],
    pi = qe && 'CompositionEvent' in window,
    vi = null;
qe && 'documentMode' in document && (vi = document.documentMode);
var mi = qe && 'TextEvent' in window && !vi,
    gi = qe && (!pi || (vi && 8 < vi && 11 >= vi)),
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
        0 < (t = Eo(t, 'onChange')).length &&
            ((n = new qr('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
}
var Pi = null,
    Ei = null;
function Ai(e) {
    bo(e, 0);
}
function Ci(e) {
    if (Et(ta(e))) return e;
}
function ji(e, t) {
    if ('change' === e) return t;
}
var Ti = !1;
if (qe) {
    var Ri;
    if (qe) {
        var Ni = 'oninput' in document;
        if (!Ni) {
            var Vi = document.createElement('div');
            (Vi.setAttribute('oninput', 'return;'), (Ni = 'function' == typeof Vi.oninput));
        }
        Ri = Ni;
    } else Ri = !1;
    Ti = Ri && (!document.documentMode || 9 < document.documentMode);
}
function Ii() {
    Pi && (Pi.detachEvent('onpropertychange', Li), (Ei = Pi = null));
}
function Li(e) {
    if ('value' === e.propertyName && Ci(Ei)) {
        var t = [];
        (xi(t, Ei, e, tn(e)), dn(Ai, t));
    }
}
function Mi(e, t, n) {
    'focusin' === e ? (Ii(), (Ei = n), (Pi = t).attachEvent('onpropertychange', Li)) : 'focusout' === e && Ii();
}
function Di(e) {
    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Ci(Ei);
}
function zi(e, t) {
    if ('click' === e) return Ci(t);
}
function Fi(e, t) {
    if ('input' === e || 'change' === e) return Ci(t);
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
        if (!Ke.call(t, i) || !Ui(e[i], t[i])) return !1;
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
function Wi() {
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
function Gi(e) {
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
    var t = Wi(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ki(n.ownerDocument.documentElement, n)) {
        if (null !== r && Gi(n))
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
var Qi = qe && 'documentMode' in document && 11 >= document.documentMode,
    Xi = null,
    Yi = null,
    Ji = null,
    Zi = !1;
function eo(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    Zi ||
        null == Xi ||
        Xi !== At(r) ||
        ('selectionStart' in (r = Xi) && Gi(r)
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
            0 < (r = Eo(Yi, 'onSelect')).length &&
                ((t = new qr('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Xi))));
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
var mo =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' ',
        ),
    go = new Set('cancel close invalid load scroll toggle'.split(' ').concat(mo));
function yo(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n),
        (function (e, t, n, r, i, o, a, s, u) {
            if ((Sn.apply(this, arguments), gn)) {
                if (!gn) throw Error(ze(198));
                var l = yn;
                ((gn = !1), (yn = null), bn || ((bn = !0), (_n = l)));
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
            Fe.forEach(function (t) {
                'selectionchange' !== t && (go.has(t) || wo(t, !1, e), wo(t, !0, e));
            }));
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[So] || ((t[So] = !0), wo('selectionchange', !1, t));
    }
}
function Oo(e, t, n, r) {
    switch (Tr(t)) {
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
                var u = qr,
                    l = e;
                switch (e) {
                    case 'keypress':
                        if (0 === Lr(n)) break e;
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
                        u = Qr;
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
                    (!Zo(l) && !l[Qo])) &&
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
                (null !== u && Co(a, s, u, c, !1), null !== l && null !== f && Co(a, f, l, c, !0));
            }
            if (
                'select' === (u = (s = r ? ta(r) : window).nodeName && s.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === s.type)
            )
                var m = ji;
            else if (Oi(s))
                if (Ti) m = Fi;
                else {
                    m = Di;
                    var g = Mi;
                }
            else
                (u = s.nodeName) &&
                    'input' === u.toLowerCase() &&
                    ('checkbox' === s.type || 'radio' === s.type) &&
                    (m = zi);
            switch (
                (m && (m = m(e, r))
                    ? xi(a, m, n, i)
                    : (g && g(e, s, r),
                      'focusout' === e &&
                          (g = s._wrapperState) &&
                          g.controlled &&
                          'number' === s.type &&
                          Vt(s, 'number', s.value)),
                (g = r ? ta(r) : window),
                e)
            ) {
                case 'focusin':
                    (Oi(g) || 'true' === g.contentEditable) && ((Xi = g), (Yi = r), (Ji = null));
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
                    if (Qi) break;
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
                (gi &&
                    'ko' !== n.locale &&
                    (Si || 'onCompositionStart' !== b
                        ? 'onCompositionEnd' === b && Si && (y = Ir())
                        : ((Nr = 'value' in (Rr = i) ? Rr.value : Rr.textContent), (Si = !0))),
                0 < (g = Eo(r, b)).length &&
                    ((b = new ei(b, e, null, n, i)),
                    a.push({ event: b, listeners: g }),
                    y ? (b.data = y) : null !== (y = wi(n)) && (b.data = y))),
                (y = mi
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
                                  ? ((e = Ir()), (Vr = Nr = Rr = null), (Si = !1), e)
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
                    0 < (r = Eo(r, 'onBeforeInput')).length &&
                    ((i = new ei('onBeforeInput', 'beforeinput', null, n, i)),
                    a.push({ event: i, listeners: r }),
                    (i.data = y)));
        }
        bo(a, t);
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
function Co(e, t, n, r, i) {
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
var jo = /\r\n?/g,
    To = /\u0000|\uFFFD/g;
function Ro(e) {
    return ('string' == typeof e ? e : '' + e).replace(jo, '\n').replace(To, '');
}
function No(e, t, n) {
    if (((t = Ro(t)), Ro(e) !== t && n)) throw Error(ze(425));
}
function Vo() {}
var Io = null,
    Lo = null;
function Mo(e, t) {
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
var Do = 'function' == typeof setTimeout ? setTimeout : void 0,
    zo = 'function' == typeof clearTimeout ? clearTimeout : void 0,
    Fo = 'function' == typeof Promise ? Promise : void 0,
    Uo =
        'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== Fo
              ? function (e) {
                    return Fo.resolve(null).then(e).catch(Bo);
                }
              : Do;
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
                if (0 === r) return (e.removeChild(i), void kr(t));
                r--;
            } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
        n = i;
    } while (n);
    kr(t);
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
function Ko(e) {
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
    Go = '__reactFiber$' + Wo,
    Ho = '__reactProps$' + Wo,
    Qo = '__reactContainer$' + Wo,
    Xo = '__reactEvents$' + Wo,
    Yo = '__reactListeners$' + Wo,
    Jo = '__reactHandles$' + Wo;
function Zo(e) {
    var t = e[Go];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Qo] || n[Go])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = Ko(e); null !== e; ) {
                    if ((n = e[Go])) return n;
                    e = Ko(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function ea(e) {
    return !(e = e[Go] || e[Qo]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
}
function ta(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(ze(33));
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
    if (la.current !== ua) throw Error(ze(168));
    (sa(la, t), sa(ca, n));
}
function ma(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
    for (var i in (r = r.getChildContext())) if (!(i in t)) throw Error(ze(108, kt(e) || 'Unknown', i));
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
function ya(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(ze(169));
    (n ? ((e = ma(e, t, fa)), (r.__reactInternalMemoizedMergedChildContext = e), aa(ca), aa(la), sa(la, e)) : aa(ca),
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
            throw (null !== ba && (ba = ba.slice(e + 1)), An(Vn, ka), i);
        } finally {
            ((er = t), (wa = !1));
        }
    }
    return null;
}
var Oa = [],
    xa = 0,
    Pa = null,
    Ea = 0,
    Aa = [],
    Ca = 0,
    ja = null,
    Ta = 1,
    Ra = '';
function Na(e, t) {
    ((Oa[xa++] = Ea), (Oa[xa++] = Pa), (Pa = e), (Ea = t));
}
function Va(e, t, n) {
    ((Aa[Ca++] = Ta), (Aa[Ca++] = Ra), (Aa[Ca++] = ja), (ja = e));
    var r = Ta;
    e = Ra;
    var i = 32 - Un(r) - 1;
    ((r &= ~(1 << i)), (n += 1));
    var o = 32 - Un(t) + i;
    if (30 < o) {
        var a = i - (i % 5);
        ((o = (r & ((1 << a) - 1)).toString(32)),
            (r >>= a),
            (i -= a),
            (Ta = (1 << (32 - Un(t) + i)) | (n << i) | r),
            (Ra = o + e));
    } else ((Ta = (1 << o) | (n << i) | r), (Ra = e));
}
function Ia(e) {
    null !== e.return && (Na(e, 1), Va(e, 1, 0));
}
function La(e) {
    for (; e === Pa; ) ((Pa = Oa[--xa]), (Oa[xa] = null), (Ea = Oa[--xa]), (Oa[xa] = null));
    for (; e === ja; )
        ((ja = Aa[--Ca]), (Aa[Ca] = null), (Ra = Aa[--Ca]), (Aa[Ca] = null), (Ta = Aa[--Ca]), (Aa[Ca] = null));
}
var Ma = null,
    Da = null,
    za = !1,
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
                ((e.stateNode = t), (Ma = e), (Da = qo(t.firstChild)), !0)
            );
        case 6:
            return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (Ma = e), (Da = null), !0)
            );
        case 13:
            return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== ja ? { id: Ta, overflow: Ra } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = df(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (Ma = e),
                (Da = null),
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
    if (za) {
        var t = Da;
        if (t) {
            var n = t;
            if (!Ba(e, t)) {
                if ($a(e)) throw Error(ze(418));
                t = qo(n.nextSibling);
                var r = Ma;
                t && Ba(e, t) ? Ua(r, n) : ((e.flags = (-4097 & e.flags) | 2), (za = !1), (Ma = e));
            }
        } else {
            if ($a(e)) throw Error(ze(418));
            ((e.flags = (-4097 & e.flags) | 2), (za = !1), (Ma = e));
        }
    }
}
function Ka(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
    Ma = e;
}
function Wa(e) {
    if (e !== Ma) return !1;
    if (!za) return (Ka(e), (za = !0), !1);
    var t;
    if (
        ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = 'head' !== (t = e.type) && 'body' !== t && !Mo(e.type, e.memoizedProps)),
        t && (t = Da))
    ) {
        if ($a(e)) throw (Ga(), Error(ze(418)));
        for (; t; ) (Ua(e, t), (t = qo(t.nextSibling)));
    }
    if ((Ka(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(ze(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ('/$' === n) {
                        if (0 === t) {
                            Da = qo(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
            }
            Da = null;
        }
    } else Da = Ma ? qo(e.stateNode.nextSibling) : null;
    return !0;
}
function Ga() {
    for (var e = Da; e; ) e = qo(e.nextSibling);
}
function Ha() {
    ((Da = Ma = null), (za = !1));
}
function Qa(e) {
    null === Fa ? (Fa = [e]) : Fa.push(e);
}
var Xa = et.ReactCurrentBatchConfig;
function Ya(e, t, n) {
    if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
        if (n._owner) {
            if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(ze(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(ze(147, e));
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
        if ('string' != typeof e) throw Error(ze(284));
        if (!n._owner) throw Error(ze(290, e));
    }
    return e;
}
function Ja(e, t) {
    throw (
        (e = Object.prototype.toString.call(t)),
        Error(ze(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e))
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
            ? (((t = mf(n, e.mode, r, o)).return = e), t)
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
            if (It(t) || vt(t)) return (((t = mf(t, e.mode, n, null)).return = e), t);
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
            if (It(n) || vt(n)) return null !== i ? null : c(e, t, n, r, null);
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
            if (It(r) || vt(r)) return c(t, (e = e.get(n) || null), r, i, null);
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
                        for (var v = c.key, m = l; null !== m; ) {
                            if (m.key === v) {
                                if ((v = c.type) === rt) {
                                    if (7 === m.tag) {
                                        (n(u, m.sibling), ((l = i(m, c.props.children)).return = u), (u = l));
                                        break e;
                                    }
                                } else if (
                                    m.elementType === v ||
                                    ('object' == typeof v && null !== v && v.$$typeof === dt && Za(v) === m.type)
                                ) {
                                    (n(u, m.sibling), ((l = i(m, c.props)).ref = Ya(u, m, c)), (l.return = u), (u = l));
                                    break e;
                                }
                                n(u, m);
                                break;
                            }
                            (t(u, m), (m = m.sibling));
                        }
                        c.type === rt
                            ? (((l = mf(c.props.children, u.mode, p, c.key)).return = u), (u = l))
                            : (((p = vf(c.type, c.key, c.props, null, u.mode, p)).ref = Ya(u, l, c)),
                              (p.return = u),
                              (u = p));
                    }
                    return a(u);
                case nt:
                    e: {
                        for (m = c.key; null !== l; ) {
                            if (l.key === m) {
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
                    return s(u, l, (m = c._init)(c._payload), p);
            }
            if (It(c))
                return (function (i, a, s, u) {
                    for (var l = null, c = null, p = a, v = (a = 0), m = null; null !== p && v < s.length; v++) {
                        p.index > v ? ((m = p), (p = null)) : (m = p.sibling);
                        var g = d(i, p, s[v], u);
                        if (null === g) {
                            null === p && (p = m);
                            break;
                        }
                        (e && p && null === g.alternate && t(i, p),
                            (a = o(g, a, v)),
                            null === c ? (l = g) : (c.sibling = g),
                            (c = g),
                            (p = m));
                    }
                    if (v === s.length) return (n(i, p), za && Na(i, v), l);
                    if (null === p) {
                        for (; v < s.length; v++)
                            null !== (p = f(i, s[v], u)) &&
                                ((a = o(p, a, v)), null === c ? (l = p) : (c.sibling = p), (c = p));
                        return (za && Na(i, v), l);
                    }
                    for (p = r(i, p); v < s.length; v++)
                        null !== (m = h(p, i, v, s[v], u)) &&
                            (e && null !== m.alternate && p.delete(null === m.key ? v : m.key),
                            (a = o(m, a, v)),
                            null === c ? (l = m) : (c.sibling = m),
                            (c = m));
                    return (
                        e &&
                            p.forEach(function (e) {
                                return t(i, e);
                            }),
                        za && Na(i, v),
                        l
                    );
                })(u, l, c, p);
            if (vt(c))
                return (function (i, a, s, u) {
                    var l = vt(s);
                    if ('function' != typeof l) throw Error(ze(150));
                    if (null == (s = l.call(s))) throw Error(ze(151));
                    for (
                        var c = (l = null), p = a, v = (a = 0), m = null, g = s.next();
                        null !== p && !g.done;
                        v++, g = s.next()
                    ) {
                        p.index > v ? ((m = p), (p = null)) : (m = p.sibling);
                        var y = d(i, p, g.value, u);
                        if (null === y) {
                            null === p && (p = m);
                            break;
                        }
                        (e && p && null === y.alternate && t(i, p),
                            (a = o(y, a, v)),
                            null === c ? (l = y) : (c.sibling = y),
                            (c = y),
                            (p = m));
                    }
                    if (g.done) return (n(i, p), za && Na(i, v), l);
                    if (null === p) {
                        for (; !g.done; v++, g = s.next())
                            null !== (g = f(i, g.value, u)) &&
                                ((a = o(g, a, v)), null === c ? (l = g) : (c.sibling = g), (c = g));
                        return (za && Na(i, v), l);
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
                        za && Na(i, v),
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
            if (null === is) throw Error(ze(308));
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
var ms = !1;
function gs(e) {
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
    ms = !1;
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
                            ms = !0;
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
        ((mc |= a), (e.lanes = a), (e.memoizedState = f));
    }
}
function Os(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (null !== i) {
                if (((r.callback = null), (r = n), 'function' != typeof i)) throw Error(ze(191, i));
                i.call(r);
            }
        }
}
var xs = {},
    Ps = oa(xs),
    Es = oa(xs),
    As = oa(xs);
function Cs(e) {
    if (e === xs) throw Error(ze(174));
    return e;
}
function js(e, t) {
    switch ((sa(As, t), sa(Es, e), sa(Ps, xs), (e = t.nodeType))) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Bt(null, '');
            break;
        default:
            t = Bt((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
    }
    (aa(Ps), sa(Ps, t));
}
function Ts() {
    (aa(Ps), aa(Es), aa(As));
}
function Rs(e) {
    Cs(As.current);
    var t = Cs(Ps.current),
        n = Bt(t, e.type);
    t !== n && (sa(Es, e), sa(Ps, n));
}
function Ns(e) {
    Es.current === e && (aa(Ps), aa(Es));
}
var Vs = oa(0);
function Is(e) {
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
var Ls = [];
function Ms() {
    for (var e = 0; e < Ls.length; e++) Ls[e]._workInProgressVersionPrimary = null;
    Ls.length = 0;
}
var Ds = et.ReactCurrentDispatcher,
    zs = et.ReactCurrentBatchConfig,
    Fs = 0,
    Us = null,
    Bs = null,
    $s = null,
    qs = !1,
    Ks = !1,
    Ws = 0,
    Gs = 0;
function Hs() {
    throw Error(ze(321));
}
function Qs(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ui(e[n], t[n])) return !1;
    return !0;
}
function Xs(e, t, n, r, i, o) {
    if (
        ((Fs = o),
        (Us = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Ds.current = null === e || null === e.memoizedState ? Nu : Vu),
        (e = n(r, i)),
        Ks)
    ) {
        o = 0;
        do {
            if (((Ks = !1), (Ws = 0), 25 <= o)) throw Error(ze(301));
            ((o += 1), ($s = Bs = null), (t.updateQueue = null), (Ds.current = Iu), (e = n(r, i)));
        } while (Ks);
    }
    if (((Ds.current = Ru), (t = null !== Bs && null !== Bs.next), (Fs = 0), ($s = Bs = Us = null), (qs = !1), t))
        throw Error(ze(300));
    return e;
}
function Ys() {
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
        if (null === e) throw Error(ze(310));
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
    if (null === n) throw Error(ze(311));
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
                (null === u ? ((s = u = f), (a = r)) : (u = u.next = f), (Us.lanes |= c), (mc |= c));
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
            ((o = i.lane), (Us.lanes |= o), (mc |= o), (i = i.next));
        } while (i !== e);
    } else null === i && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function nu(e) {
    var t = Zs(),
        n = t.queue;
    if (null === n) throw Error(ze(311));
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
        mu(su.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (null !== $s && 1 & $s.memoizedState.tag))
    ) {
        if (((n.flags |= 2048), fu(9, au.bind(null, n, r, i, t), void 0, null), null === lc)) throw Error(ze(349));
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
    null !== t && Lc(t, e, 1, -1);
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
        (e = e.dispatch = Au.bind(null, Us, e)),
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
        if (((o = a.destroy), null !== r && Qs(r, a.deps))) return void (i.memoizedState = fu(t, n, o, r));
    }
    ((Us.flags |= e), (i.memoizedState = fu(1 | t, n, o, r)));
}
function vu(e, t) {
    return hu(8390656, 8, e, t);
}
function mu(e, t) {
    return pu(2048, 8, e, t);
}
function gu(e, t) {
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
    return null !== r && null !== t && Qs(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function ku(e, t) {
    var n = Zs();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && Qs(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ou(e, t, n) {
    return 0 == (21 & Fs)
        ? (e.baseState && ((e.baseState = !1), (Zu = !0)), (e.memoizedState = n))
        : (Ui(n, t) || ((n = Xn()), (Us.lanes |= n), (mc |= n), (e.baseState = !0)), t);
}
function xu(e, t) {
    var n = er;
    ((er = 0 !== n && 4 > n ? n : 4), e(!0));
    var r = zs.transition;
    zs.transition = {};
    try {
        (e(!1), t());
    } finally {
        ((er = n), (zs.transition = r));
    }
}
function Pu() {
    return Zs().memoizedState;
}
function Eu(e, t, n) {
    var r = Ic(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Cu(e))) ju(t, n);
    else if (null !== (n = ps(e, t, n, r))) {
        (Lc(n, e, r, Vc()), Tu(n, t, r));
    }
}
function Au(e, t, n) {
    var r = Ic(e),
        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Cu(e)) ju(t, i);
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
        null !== (n = ps(e, t, i, r)) && (Lc(n, e, r, (i = Vc())), Tu(n, t, r));
    }
}
function Cu(e) {
    var t = e.alternate;
    return e === Us || (null !== t && t === Us);
}
function ju(e, t) {
    Ks = qs = !0;
    var n = e.pending;
    (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
}
function Tu(e, t, n) {
    if (0 != (4194240 & n)) {
        var r = t.lanes;
        ((n |= r &= e.pendingLanes), (t.lanes = n), Zn(e, n));
    }
}
var Ru = {
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
    Nu = {
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
                (e = e.dispatch = Eu.bind(null, Us, e)),
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
            var r = Us,
                i = Js();
            if (za) {
                if (void 0 === n) throw Error(ze(407));
                n = n();
            } else {
                if (((n = t()), null === lc)) throw Error(ze(349));
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
            if (za) {
                var n = Ra;
                ((t = ':' + t + 'R' + (n = (Ta & ~(1 << (32 - Un(Ta) - 1))).toString(32) + n)),
                    0 < (n = Ws++) && (t += 'H' + n.toString(32)),
                    (t += ':'));
            } else t = ':' + t + 'r' + (n = Gs++).toString(32) + ':';
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Vu = {
        readContext: fs,
        useCallback: Su,
        useContext: fs,
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
            return Ou(Zs(), Bs.memoizedState, e);
        },
        useTransition: function () {
            return [tu(eu)[0], Zs().memoizedState];
        },
        useMutableSource: ru,
        useSyncExternalStore: iu,
        useId: Pu,
        unstable_isNewReconciler: !1,
    },
    Iu = {
        readContext: fs,
        useCallback: Su,
        useContext: fs,
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
            var t = Zs();
            return null === Bs ? (t.memoizedState = e) : Ou(t, Bs.memoizedState, e);
        },
        useTransition: function () {
            return [nu(eu)[0], Zs().memoizedState];
        },
        useMutableSource: ru,
        useSyncExternalStore: iu,
        useId: Pu,
        unstable_isNewReconciler: !1,
    };
function Lu(e, t) {
    if (e && e.defaultProps) {
        for (var n in ((t = gt({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
    }
    return t;
}
function Mu(e, t, n, r) {
    ((n = null == (n = n(r, (t = e.memoizedState))) ? t : gt({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n));
}
var Du = {
    isMounted: function (e) {
        return !!(e = e._reactInternals) && kn(e) === e;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Vc(),
            i = Ic(e),
            o = bs(r, i);
        ((o.payload = t), null != n && (o.callback = n), null !== (t = _s(e, o, i)) && (Lc(t, e, i, r), ws(t, e, i)));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Vc(),
            i = Ic(e),
            o = bs(r, i);
        ((o.tag = 1),
            (o.payload = t),
            null != n && (o.callback = n),
            null !== (t = _s(e, o, i)) && (Lc(t, e, i, r), ws(t, e, i)));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Vc(),
            r = Ic(e),
            i = bs(n, r);
        ((i.tag = 2), null != t && (i.callback = t), null !== (t = _s(e, i, r)) && (Lc(t, e, r, n), ws(t, e, r)));
    },
};
function zu(e, t, n, r, i, o, a) {
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
        (t.updater = Du),
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
        t.state !== e && Du.enqueueReplaceState(t, t.state, null));
}
function Bu(e, t, n, r) {
    var i = e.stateNode;
    ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), gs(e));
    var o = t.contextType;
    ('object' == typeof o && null !== o ? (i.context = fs(o)) : ((o = ha(t) ? fa : la.current), (i.context = da(e, o))),
        (i.state = e.memoizedState),
        'function' == typeof (o = t.getDerivedStateFromProps) && (Mu(e, t, o, n), (i.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof i.getSnapshotBeforeUpdate ||
            ('function' != typeof i.UNSAFE_componentWillMount && 'function' != typeof i.componentWillMount) ||
            ((t = i.state),
            'function' == typeof i.componentWillMount && i.componentWillMount(),
            'function' == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(),
            t !== i.state && Du.enqueueReplaceState(i, i.state, null),
            ks(e, n, i, r),
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
function Ku(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Wu = 'function' == typeof WeakMap ? WeakMap : Map;
function Gu(e, t, n) {
    (((n = bs(-1, n)).tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
        (n.callback = function () {
            (Oc || ((Oc = !0), (xc = r)), Ku(0, t));
        }),
        n
    );
}
function Hu(e, t, n) {
    (n = bs(-1, n)).tag = 3;
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
    var o = e.stateNode;
    return (
        null !== o &&
            'function' == typeof o.componentDidCatch &&
            (n.callback = function () {
                (Ku(0, t), 'function' != typeof r && (null === Pc ? (Pc = new Set([this])) : Pc.add(this)));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
            }),
        n
    );
}
function Qu(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new Wu();
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
            ? (za && n && Ia(t), (t.flags |= 1), el(e, t, r, i), t.child)
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
        if ((n = null !== (n = n.compare) ? n : Bi)(a, r) && e.ref === t.ref) return Ol(e, t, i);
    }
    return ((t.flags |= 1), ((e = pf(o, r)).ref = t.ref), (e.return = t), (t.child = e));
}
function rl(e, t, n, r, i) {
    if (null !== e) {
        var o = e.memoizedProps;
        if (Bi(o, r) && e.ref === t.ref) {
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
            ? (za && r && Ia(t), (t.flags |= 1), el(e, t, n, i), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Ol(e, t, i))
    );
}
function sl(e, t, n, r, i) {
    if (ha(n)) {
        var o = !0;
        ga(t);
    } else o = !1;
    if ((cs(t, i), null === t.stateNode)) (kl(e, t), Fu(t, n, r), Bu(t, n, r, i), (r = !0));
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
            (ms = !1));
        var d = t.memoizedState;
        ((a.state = d),
            ks(t, r, a, i),
            (u = t.memoizedState),
            s !== r || d !== u || ca.current || ms
                ? ('function' == typeof c && (Mu(t, n, c, r), (u = t.memoizedState)),
                  (s = ms || zu(t, n, s, r, d, u, l))
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
            (l = t.type === t.elementType ? s : Lu(t.type, s)),
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
            (ms = !1),
            (d = t.memoizedState),
            (a.state = d),
            ks(t, r, a, i));
        var p = t.memoizedState;
        s !== f || d !== p || ca.current || ms
            ? ('function' == typeof h && (Mu(t, n, h, r), (p = t.memoizedState)),
              (l = ms || zu(t, n, l, r, d, p, u) || !1)
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
        js(e, t.containerInfo));
}
function cl(e, t, n, r, i) {
    return (Ha(), Qa(i), (t.flags |= 256), el(e, t, n, r), t.child);
}
var fl,
    dl,
    hl,
    pl,
    vl = { dehydrated: null, treeContext: null, retryLane: 0 };
function ml(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function gl(e, t, n) {
    var r,
        i = t.pendingProps,
        o = Vs.current,
        a = !1,
        s = 0 != (128 & t.flags);
    if (
        ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)),
        r ? ((a = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (o |= 1),
        sa(Vs, 1 & o),
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
                        (e = mf(e, i, n, null)),
                        (a.return = t),
                        (e.return = t),
                        (a.sibling = e),
                        (t.child = a),
                        (t.child.memoizedState = ml(n)),
                        (t.memoizedState = vl),
                        e)
                      : yl(t, s))
        );
    if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
        return (function (e, t, n, r, i, o, a) {
            if (n)
                return 256 & t.flags
                    ? ((t.flags &= -257), bl(e, t, a, (r = qu(Error(ze(422))))))
                    : null !== t.memoizedState
                      ? ((t.child = e.child), (t.flags |= 128), null)
                      : ((o = r.fallback),
                        (i = t.mode),
                        (r = gf({ mode: 'visible', children: r.children }, i, 0, null)),
                        ((o = mf(o, i, a, null)).flags |= 2),
                        (r.return = t),
                        (o.return = t),
                        (r.sibling = o),
                        (t.child = r),
                        0 != (1 & t.mode) && ts(t, e.child, null, a),
                        (t.child.memoizedState = ml(a)),
                        (t.memoizedState = vl),
                        o);
            if (0 == (1 & t.mode)) return bl(e, t, a, null);
            if ('$!' === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset)) var s = r.dgst;
                return ((r = s), bl(e, t, a, (r = qu((o = Error(ze(419))), r, void 0))));
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
                        ((o.retryLane = i), vs(e, i), Lc(r, e, i, -1));
                }
                return (Qc(), bl(e, t, a, (r = qu(Error(ze(421))))));
            }
            return '$?' === i.data
                ? ((t.flags |= 128), (t.child = e.child), (t = uf.bind(null, e)), (i._reactRetry = t), null)
                : ((e = o.treeContext),
                  (Da = qo(i.nextSibling)),
                  (Ma = t),
                  (za = !0),
                  (Fa = null),
                  null !== e &&
                      ((Aa[Ca++] = Ta), (Aa[Ca++] = Ra), (Aa[Ca++] = ja), (Ta = e.id), (Ra = e.overflow), (ja = t)),
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
            null !== r ? (a = pf(r, a)) : ((a = mf(a, s, n, null)).flags |= 2),
            (a.return = t),
            (i.return = t),
            (i.sibling = a),
            (t.child = i),
            (i = a),
            (a = t.child),
            (s =
                null === (s = e.child.memoizedState)
                    ? ml(n)
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
    return (((t = gf({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t));
}
function bl(e, t, n, r) {
    return (
        null !== r && Qa(r),
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
    if ((el(e, t, r.children, n), 0 != (2 & (r = Vs.current)))) ((r = (1 & r) | 2), (t.flags |= 128));
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
    if ((sa(Vs, r), 0 == (1 & t.mode))) t.memoizedState = null;
    else
        switch (i) {
            case 'forwards':
                for (n = t.child, i = null; null !== n; )
                    (null !== (e = n.alternate) && null === Is(e) && (i = n), (n = n.sibling));
                (null === (n = i) ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
                    wl(t, !1, i, n, o));
                break;
            case 'backwards':
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                    if (null !== (e = i.alternate) && null === Is(e)) {
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
    if ((null !== e && (t.dependencies = e.dependencies), (mc |= t.lanes), 0 == (n & t.childLanes))) return null;
    if (null !== e && t.child !== e.child) throw Error(ze(153));
    if (null !== t.child) {
        for (n = pf((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            ((e = e.sibling), ((n = n.sibling = pf(e, e.pendingProps)).return = t));
        n.sibling = null;
    }
    return t.child;
}
function xl(e, t) {
    if (!za)
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
    switch ((La(t), t.tag)) {
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
                Ts(),
                aa(ca),
                aa(la),
                Ms(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                    (Wa(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                          ((t.flags |= 1024), null !== Fa && (Fc(Fa), (Fa = null)))),
                dl(e, t),
                Pl(t),
                null
            );
        case 5:
            Ns(t);
            var i = Cs(As.current);
            if (((n = t.type), null !== e && null != t.stateNode))
                (hl(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(ze(166));
                    return (Pl(t), null);
                }
                if (((e = Cs(Ps.current)), Wa(t))) {
                    ((r = t.stateNode), (n = t.type));
                    var o = t.memoizedProps;
                    switch (((r[Go] = t), (r[Ho] = o), (e = 0 != (1 & t.mode)), n)) {
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
                            for (i = 0; i < mo.length; i++) _o(mo[i], r);
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
                            (jt(r, o), _o('invalid', r));
                            break;
                        case 'select':
                            ((r._wrapperState = { wasMultiple: !!o.multiple }), _o('invalid', r));
                            break;
                        case 'textarea':
                            (Dt(r, o), _o('invalid', r));
                    }
                    for (var a in (Jt(n, o), (i = null), o))
                        if (o.hasOwnProperty(a)) {
                            var s = o[a];
                            'children' === a
                                ? 'string' == typeof s
                                    ? r.textContent !== s &&
                                      (!0 !== o.suppressHydrationWarning && No(r.textContent, s, e),
                                      (i = ['children', s]))
                                    : 'number' == typeof s &&
                                      r.textContent !== '' + s &&
                                      (!0 !== o.suppressHydrationWarning && No(r.textContent, s, e),
                                      (i = ['children', '' + s]))
                                : Ue.hasOwnProperty(a) && null != s && 'onScroll' === a && _o('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            (Pt(r), Nt(r, o, !0));
                            break;
                        case 'textarea':
                            (Pt(r), Ft(r));
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            'function' == typeof o.onClick && (r.onclick = Vo);
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
                        (e[Go] = t),
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
                                for (i = 0; i < mo.length; i++) _o(mo[i], e);
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
                                (jt(e, r), (i = Ct(e, r)), _o('invalid', e));
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
                                (Dt(e, r), (i = Mt(e, r)), _o('invalid', e));
                        }
                        for (o in (Jt(n, i), (s = i)))
                            if (s.hasOwnProperty(o)) {
                                var u = s[o];
                                'style' === o
                                    ? Xt(e, u)
                                    : 'dangerouslySetInnerHTML' === o
                                      ? null != (u = u ? u.__html : void 0) && Kt(e, u)
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
                                (Pt(e), Nt(e, r, !1));
                                break;
                            case 'textarea':
                                (Pt(e), Ft(e));
                                break;
                            case 'option':
                                null != r.value && e.setAttribute('value', '' + Ot(r.value));
                                break;
                            case 'select':
                                ((e.multiple = !!r.multiple),
                                    null != (o = r.value)
                                        ? Lt(e, !!r.multiple, o, !1)
                                        : null != r.defaultValue && Lt(e, !!r.multiple, r.defaultValue, !0));
                                break;
                            default:
                                'function' == typeof i.onClick && (e.onclick = Vo);
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
                if ('string' != typeof r && null === t.stateNode) throw Error(ze(166));
                if (((n = Cs(As.current)), Cs(Ps.current), Wa(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Go] = t),
                        (o = r.nodeValue !== n) && null !== (e = Ma))
                    )
                        switch (e.tag) {
                            case 3:
                                No(r.nodeValue, n, 0 != (1 & e.mode));
                                break;
                            case 5:
                                !0 !== e.memoizedProps.suppressHydrationWarning &&
                                    No(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                    o && (t.flags |= 4);
                } else (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Go] = t), (t.stateNode = r));
            }
            return (Pl(t), null);
        case 13:
            if (
                (aa(Vs),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (za && null !== Da && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                    (Ga(), Ha(), (t.flags |= 98560), (o = !1));
                else if (((o = Wa(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!o) throw Error(ze(318));
                        if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null)) throw Error(ze(317));
                        o[Go] = t;
                    } else (Ha(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                    (Pl(t), (o = !1));
                } else (null !== Fa && (Fc(Fa), (Fa = null)), (o = !0));
                if (!o) return 65536 & t.flags ? t : null;
            }
            return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) && (null === e || 0 != (1 & Vs.current) ? 0 === pc && (pc = 3) : Qc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Pl(t),
                  null);
        case 4:
            return (Ts(), dl(e, t), null === e && ko(t.stateNode.containerInfo), Pl(t), null);
        case 10:
            return (us(t.type._context), Pl(t), null);
        case 19:
            if ((aa(Vs), null === (o = t.memoizedState))) return (Pl(t), null);
            if (((r = 0 != (128 & t.flags)), null === (a = o.rendering)))
                if (r) xl(o, !1);
                else {
                    if (0 !== pc || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (a = Is(e))) {
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
                                return (sa(Vs, (1 & Vs.current) | 2), t.child);
                            }
                            e = e.sibling;
                        }
                    null !== o.tail && Rn() > Sc && ((t.flags |= 128), (r = !0), xl(o, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = Is(a))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            xl(o, !0),
                            null === o.tail && 'hidden' === o.tailMode && !a.alternate && !za)
                        )
                            return (Pl(t), null);
                    } else
                        2 * Rn() - o.renderingStartTime > Sc &&
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
                  (o.renderingStartTime = Rn()),
                  (t.sibling = null),
                  (n = Vs.current),
                  sa(Vs, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Pl(t), null);
        case 22:
        case 23:
            return (
                Kc(),
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
    throw Error(ze(156, t.tag));
}
function Al(e, t) {
    switch ((La(t), t.tag)) {
        case 1:
            return (ha(t.type) && pa(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null);
        case 3:
            return (
                Ts(),
                aa(ca),
                aa(la),
                Ms(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 5:
            return (Ns(t), null);
        case 13:
            if ((aa(Vs), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(ze(340));
                Ha();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return (aa(Vs), null);
        case 4:
            return (Ts(), null);
        case 10:
            return (us(t.type._context), null);
        case 22:
        case 23:
            return (Kc(), null);
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
            ((e = t.stateNode), Cs(Ps.current));
            var o,
                a = null;
            switch (n) {
                case 'input':
                    ((i = Ct(e, i)), (r = Ct(e, r)), (a = []));
                    break;
                case 'select':
                    ((i = gt({}, i, { value: void 0 })), (r = gt({}, r, { value: void 0 })), (a = []));
                    break;
                case 'textarea':
                    ((i = Mt(e, i)), (r = Mt(e, r)), (a = []));
                    break;
                default:
                    'function' != typeof i.onClick && 'function' == typeof r.onClick && (e.onclick = Vo);
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
var Cl = !1,
    jl = !1,
    Tl = 'function' == typeof WeakSet ? WeakSet : Set,
    Rl = null;
function Nl(e, t) {
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
function Vl(e, t, n) {
    try {
        n();
    } catch (r) {
        of(e, t, r);
    }
}
var Il = !1;
function Ll(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var i = (r = r.next);
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                ((i.destroy = void 0), void 0 !== o && Vl(t, n, o));
            }
            i = i.next;
        } while (i !== r);
    }
}
function Ml(e, t) {
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
function Dl(e) {
    var t = e.ref;
    if (null !== t) {
        var n = e.stateNode;
        (e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e));
    }
}
function zl(e) {
    var t = e.alternate;
    (null !== t && ((e.alternate = null), zl(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[Go], delete t[Ho], delete t[Xo], delete t[Yo], delete t[Jo]),
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
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Vo)));
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
    Kl = !1;
function Wl(e, t, n) {
    for (n = n.child; null !== n; ) (Gl(e, t, n), (n = n.sibling));
}
function Gl(e, t, n) {
    if (Fn && 'function' == typeof Fn.onCommitFiberUnmount)
        try {
            Fn.onCommitFiberUnmount(zn, n);
        } catch (s) {}
    switch (n.tag) {
        case 5:
            jl || Nl(n, t);
        case 6:
            var r = ql,
                i = Kl;
            ((ql = null),
                Wl(e, t, n),
                (Kl = i),
                null !== (ql = r) &&
                    (Kl
                        ? ((e = ql),
                          (n = n.stateNode),
                          8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : ql.removeChild(n.stateNode)));
            break;
        case 18:
            null !== ql &&
                (Kl
                    ? ((e = ql),
                      (n = n.stateNode),
                      8 === e.nodeType ? $o(e.parentNode, n) : 1 === e.nodeType && $o(e, n),
                      kr(e))
                    : $o(ql, n.stateNode));
            break;
        case 4:
            ((r = ql), (i = Kl), (ql = n.stateNode.containerInfo), (Kl = !0), Wl(e, t, n), (ql = r), (Kl = i));
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!jl && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                i = r = r.next;
                do {
                    var o = i,
                        a = o.destroy;
                    ((o = o.tag), void 0 !== a && (0 != (2 & o) || 0 != (4 & o)) && Vl(n, t, a), (i = i.next));
                } while (i !== r);
            }
            Wl(e, t, n);
            break;
        case 1:
            if (!jl && (Nl(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount))
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
            1 & n.mode ? ((jl = (r = jl) || null !== n.memoizedState), Wl(e, t, n), (jl = r)) : Wl(e, t, n);
            break;
        default:
            Wl(e, t, n);
    }
}
function Hl(e) {
    var t = e.updateQueue;
    if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        (null === n && (n = e.stateNode = new Tl()),
            t.forEach(function (t) {
                var r = lf.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
            }));
    }
}
function Ql(e, t) {
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
                            ((ql = s.stateNode), (Kl = !1));
                            break e;
                        case 3:
                        case 4:
                            ((ql = s.stateNode.containerInfo), (Kl = !0));
                            break e;
                    }
                    s = s.return;
                }
                if (null === ql) throw Error(ze(160));
                (Gl(o, a, i), (ql = null), (Kl = !1));
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
            if ((Ql(t, e), Yl(e), 4 & r)) {
                try {
                    (Ll(3, e, e.return), Ml(3, e));
                } catch (v) {
                    of(e, e.return, v);
                }
                try {
                    Ll(5, e, e.return);
                } catch (v) {
                    of(e, e.return, v);
                }
            }
            break;
        case 1:
            (Ql(t, e), Yl(e), 512 & r && null !== n && Nl(n, n.return));
            break;
        case 5:
            if ((Ql(t, e), Yl(e), 512 & r && null !== n && Nl(n, n.return), 32 & e.flags)) {
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
                        ('input' === s && 'radio' === o.type && null != o.name && Tt(i, o), Zt(s, a));
                        var l = Zt(s, o);
                        for (a = 0; a < u.length; a += 2) {
                            var c = u[a],
                                f = u[a + 1];
                            'style' === c
                                ? Xt(i, f)
                                : 'dangerouslySetInnerHTML' === c
                                  ? Kt(i, f)
                                  : 'children' === c
                                    ? Wt(i, f)
                                    : Ze(i, c, f, l);
                        }
                        switch (s) {
                            case 'input':
                                Rt(i, o);
                                break;
                            case 'textarea':
                                zt(i, o);
                                break;
                            case 'select':
                                var d = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!o.multiple;
                                var h = o.value;
                                null != h
                                    ? Lt(i, !!o.multiple, h, !1)
                                    : d !== !!o.multiple &&
                                      (null != o.defaultValue
                                          ? Lt(i, !!o.multiple, o.defaultValue, !0)
                                          : Lt(i, !!o.multiple, o.multiple ? [] : '', !1));
                        }
                        i[Ho] = o;
                    } catch (v) {
                        of(e, e.return, v);
                    }
            }
            break;
        case 6:
            if ((Ql(t, e), Yl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(ze(162));
                ((i = e.stateNode), (o = e.memoizedProps));
                try {
                    i.nodeValue = o;
                } catch (v) {
                    of(e, e.return, v);
                }
            }
            break;
        case 3:
            if ((Ql(t, e), Yl(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                    kr(t.containerInfo);
                } catch (v) {
                    of(e, e.return, v);
                }
            break;
        case 4:
        default:
            (Ql(t, e), Yl(e));
            break;
        case 13:
            (Ql(t, e),
                Yl(e),
                8192 & (i = e.child).flags &&
                    ((o = null !== i.memoizedState),
                    (i.stateNode.isHidden = o),
                    !o || (null !== i.alternate && null !== i.alternate.memoizedState) || (wc = Rn())),
                4 & r && Hl(e));
            break;
        case 22:
            if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((jl = (l = jl) || c), Ql(t, e), (jl = l)) : Ql(t, e),
                Yl(e),
                8192 & r)
            ) {
                if (((l = null !== e.memoizedState), (e.stateNode.isHidden = l) && !c && 0 != (1 & e.mode)))
                    for (Rl = e, c = e.child; null !== c; ) {
                        for (f = Rl = c; null !== Rl; ) {
                            switch (((h = (d = Rl).child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Ll(4, d, d.return);
                                    break;
                                case 1:
                                    Nl(d, d.return);
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
                                    Nl(d, d.return);
                                    break;
                                case 22:
                                    if (null !== d.memoizedState) {
                                        tc(f);
                                        continue;
                                    }
                            }
                            null !== h ? ((h.return = d), (Rl = h)) : tc(f);
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
                                          (s.style.display = Qt('display', a))));
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
            (Ql(t, e), Yl(e), 4 & r && Hl(e));
        case 21:
    }
}
function Yl(e) {
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
                throw Error(ze(160));
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
                    throw Error(ze(161));
            }
        } catch (a) {
            of(e, e.return, a);
        }
        e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
}
function Jl(e, t, n) {
    ((Rl = e), Zl(e));
}
function Zl(e, t, n) {
    for (var r = 0 != (1 & e.mode); null !== Rl; ) {
        var i = Rl,
            o = i.child;
        if (22 === i.tag && r) {
            var a = null !== i.memoizedState || Cl;
            if (!a) {
                var s = i.alternate,
                    u = (null !== s && null !== s.memoizedState) || jl;
                s = Cl;
                var l = jl;
                if (((Cl = a), (jl = u) && !l))
                    for (Rl = i; null !== Rl; )
                        ((u = (a = Rl).child),
                            22 === a.tag && null !== a.memoizedState
                                ? nc(i)
                                : null !== u
                                  ? ((u.return = a), (Rl = u))
                                  : nc(i));
                for (; null !== o; ) ((Rl = o), Zl(o), (o = o.sibling));
                ((Rl = i), (Cl = s), (jl = l));
            }
            ec(e);
        } else 0 != (8772 & i.subtreeFlags) && null !== o ? ((o.return = i), (Rl = o)) : ec(e);
    }
}
function ec(e) {
    for (; null !== Rl; ) {
        var t = Rl;
        if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
                if (0 != (8772 & t.flags))
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            jl || Ml(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (4 & t.flags && !jl)
                                if (null === n) r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : Lu(t.type, n.memoizedProps);
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
                            throw Error(ze(163));
                    }
                jl || (512 & t.flags && Dl(t));
            } catch (d) {
                of(t, t.return, d);
            }
        }
        if (t === e) {
            Rl = null;
            break;
        }
        if (null !== (n = t.sibling)) {
            ((n.return = t.return), (Rl = n));
            break;
        }
        Rl = t.return;
    }
}
function tc(e) {
    for (; null !== Rl; ) {
        var t = Rl;
        if (t === e) {
            Rl = null;
            break;
        }
        var n = t.sibling;
        if (null !== n) {
            ((n.return = t.return), (Rl = n));
            break;
        }
        Rl = t.return;
    }
}
function nc(e) {
    for (; null !== Rl; ) {
        var t = Rl;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Ml(4, t);
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
                        Dl(t);
                    } catch (u) {
                        of(t, o, u);
                    }
                    break;
                case 5:
                    var a = t.return;
                    try {
                        Dl(t);
                    } catch (u) {
                        of(t, a, u);
                    }
            }
        } catch (u) {
            of(t, t.return, u);
        }
        if (t === e) {
            Rl = null;
            break;
        }
        var s = t.sibling;
        if (null !== s) {
            ((s.return = t.return), (Rl = s));
            break;
        }
        Rl = t.return;
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
    mc = 0,
    gc = 0,
    yc = 0,
    bc = null,
    _c = null,
    wc = 0,
    Sc = 1 / 0,
    kc = null,
    Oc = !1,
    xc = null,
    Pc = null,
    Ec = !1,
    Ac = null,
    Cc = 0,
    jc = 0,
    Tc = null,
    Rc = -1,
    Nc = 0;
function Vc() {
    return 0 != (6 & uc) ? Rn() : -1 !== Rc ? Rc : (Rc = Rn());
}
function Ic(e) {
    return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & uc) && 0 !== fc
          ? fc & -fc
          : null !== Xa.transition
            ? (0 === Nc && (Nc = Xn()), Nc)
            : 0 !== (e = er)
              ? e
              : (e = void 0 === (e = window.event) ? 16 : Tr(e.type));
}
function Lc(e, t, n, r) {
    if (50 < jc) throw ((jc = 0), (Tc = null), Error(ze(185)));
    (Jn(e, n, r),
        (0 != (2 & uc) && e === lc) ||
            (e === lc && (0 == (2 & uc) && (gc |= n), 4 === pc && Uc(e, fc)),
            Mc(e, r),
            1 === n && 0 === uc && 0 == (1 & t.mode) && ((Sc = Rn() + 500), _a && ka())));
}
function Mc(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
            var a = 31 - Un(o),
                s = 1 << a,
                u = i[a];
            (-1 === u ? (0 != (s & n) && 0 == (s & r)) || (i[a] = Hn(s, t)) : u <= t && (e.expiredLanes |= s),
                (o &= ~s));
        }
    })(e, t);
    var r = Gn(e, e === lc ? fc : 0);
    if (0 === r) (null !== n && Cn(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && Cn(n), 1 === t))
            (0 === e.tag
                ? (function (e) {
                      ((_a = !0), Sa(e));
                  })(Bc.bind(null, e))
                : Sa(Bc.bind(null, e)),
                Uo(function () {
                    0 == (6 & uc) && ka();
                }),
                (n = null));
        else {
            switch (tr(r)) {
                case 1:
                    n = Vn;
                    break;
                case 4:
                    n = In;
                    break;
                case 16:
                default:
                    n = Ln;
                    break;
                case 536870912:
                    n = Dn;
            }
            n = cf(n, Dc.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = n));
    }
}
function Dc(e, t) {
    if (((Rc = -1), (Nc = 0), 0 != (6 & uc))) throw Error(ze(327));
    var n = e.callbackNode;
    if (nf() && e.callbackNode !== n) return null;
    var r = Gn(e, e === lc ? fc : 0);
    if (0 === r) return null;
    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = Xc(e, r);
    else {
        t = r;
        var i = uc;
        uc |= 2;
        var o = Hc();
        for ((lc === e && fc === t) || ((kc = null), (Sc = Rn() + 500), Wc(e, t)); ; )
            try {
                Jc();
                break;
            } catch (s) {
                Gc(e, s);
            }
        (ss(), (oc.current = o), (uc = i), null !== cc ? (t = 0) : ((lc = null), (fc = 0), (t = pc)));
    }
    if (0 !== t) {
        if ((2 === t && 0 !== (i = Qn(e)) && ((r = i), (t = zc(e, i))), 1 === t))
            throw ((n = vc), Wc(e, 0), Uc(e, r), Mc(e, Rn()), n);
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
                    (2 === (t = Xc(e, r)) && 0 !== (o = Qn(e)) && ((r = o), (t = zc(e, o))), 1 === t))
            )
                throw ((n = vc), Wc(e, 0), Uc(e, r), Mc(e, Rn()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(ze(345));
                case 2:
                case 5:
                    tf(e, _c, kc);
                    break;
                case 3:
                    if ((Uc(e, r), (130023424 & r) === r && 10 < (t = wc + 500 - Rn()))) {
                        if (0 !== Gn(e, 0)) break;
                        if (((i = e.suspendedLanes) & r) !== r) {
                            (Vc(), (e.pingedLanes |= e.suspendedLanes & i));
                            break;
                        }
                        e.timeoutHandle = Do(tf.bind(null, e, _c, kc), t);
                        break;
                    }
                    tf(e, _c, kc);
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
                                (120 > (r = Rn() - r)
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
                        e.timeoutHandle = Do(tf.bind(null, e, _c, kc), r);
                        break;
                    }
                    tf(e, _c, kc);
                    break;
                default:
                    throw Error(ze(329));
            }
        }
    }
    return (Mc(e, Rn()), e.callbackNode === n ? Dc.bind(null, e) : null);
}
function zc(e, t) {
    var n = bc;
    return (
        e.current.memoizedState.isDehydrated && (Wc(e, t).flags |= 256),
        2 !== (e = Xc(e, t)) && ((t = _c), (_c = n), null !== t && Fc(t)),
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
    if (0 != (6 & uc)) throw Error(ze(327));
    nf();
    var t = Gn(e, 0);
    if (0 == (1 & t)) return (Mc(e, Rn()), null);
    var n = Xc(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = Qn(e);
        0 !== r && ((t = r), (n = zc(e, r)));
    }
    if (1 === n) throw ((n = vc), Wc(e, 0), Uc(e, t), Mc(e, Rn()), n);
    if (6 === n) throw Error(ze(345));
    return ((e.finishedWork = e.current.alternate), (e.finishedLanes = t), tf(e, _c, kc), Mc(e, Rn()), null);
}
function $c(e, t) {
    var n = uc;
    uc |= 1;
    try {
        return e(t);
    } finally {
        0 === (uc = n) && ((Sc = Rn() + 500), _a && ka());
    }
}
function qc(e) {
    null !== Ac && 0 === Ac.tag && 0 == (6 & uc) && nf();
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
function Kc() {
    ((dc = hc.current), aa(hc));
}
function Wc(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), zo(n)), null !== cc))
        for (n = cc.return; null !== n; ) {
            var r = n;
            switch ((La(r), r.tag)) {
                case 1:
                    null != (r = r.type.childContextTypes) && pa();
                    break;
                case 3:
                    (Ts(), aa(ca), aa(la), Ms());
                    break;
                case 5:
                    Ns(r);
                    break;
                case 4:
                    Ts();
                    break;
                case 13:
                case 19:
                    aa(Vs);
                    break;
                case 10:
                    us(r.type._context);
                    break;
                case 22:
                case 23:
                    Kc();
            }
            n = n.return;
        }
    if (
        ((lc = e),
        (cc = e = pf(e.current, null)),
        (fc = dc = t),
        (pc = 0),
        (vc = null),
        (yc = gc = mc = 0),
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
function Gc(e, t) {
    for (;;) {
        var n = cc;
        try {
            if ((ss(), (Ds.current = Ru), qs)) {
                for (var r = Us.memoizedState; null !== r; ) {
                    var i = r.queue;
                    (null !== i && (i.pending = null), (r = r.next));
                }
                qs = !1;
            }
            if (
                ((Fs = 0),
                ($s = Bs = Us = null),
                (Ks = !1),
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
                    var h = Xu(a);
                    if (null !== h) {
                        ((h.flags &= -257), Yu(h, a, s, 0, t), 1 & h.mode && Qu(o, l, t), (u = l));
                        var p = (t = h).updateQueue;
                        if (null === p) {
                            var v = new Set();
                            (v.add(u), (t.updateQueue = v));
                        } else p.add(u);
                        break e;
                    }
                    if (0 == (1 & t)) {
                        (Qu(o, l, t), Qc());
                        break e;
                    }
                    u = Error(ze(426));
                } else if (za && 1 & s.mode) {
                    var m = Xu(a);
                    if (null !== m) {
                        (0 == (65536 & m.flags) && (m.flags |= 256), Yu(m, a, s, 0, t), Qa($u(u, s)));
                        break e;
                    }
                }
                ((o = u = $u(u, s)), 4 !== pc && (pc = 2), null === bc ? (bc = [o]) : bc.push(o), (o = a));
                do {
                    switch (o.tag) {
                        case 3:
                            ((o.flags |= 65536), (t &= -t), (o.lanes |= t), Ss(o, Gu(0, u, t)));
                            break e;
                        case 1:
                            s = u;
                            var g = o.type,
                                y = o.stateNode;
                            if (
                                0 == (128 & o.flags) &&
                                ('function' == typeof g.getDerivedStateFromError ||
                                    (null !== y &&
                                        'function' == typeof y.componentDidCatch &&
                                        (null === Pc || !Pc.has(y))))
                            ) {
                                ((o.flags |= 65536), (t &= -t), (o.lanes |= t), Ss(o, Hu(o, s, t)));
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
function Hc() {
    var e = oc.current;
    return ((oc.current = Ru), null === e ? Ru : e);
}
function Qc() {
    ((0 !== pc && 3 !== pc && 2 !== pc) || (pc = 4),
        null === lc || (0 == (268435455 & mc) && 0 == (268435455 & gc)) || Uc(lc, fc));
}
function Xc(e, t) {
    var n = uc;
    uc |= 2;
    var r = Hc();
    for ((lc === e && fc === t) || ((kc = null), Wc(e, t)); ; )
        try {
            Yc();
            break;
        } catch (i) {
            Gc(e, i);
        }
    if ((ss(), (uc = n), (oc.current = r), null !== cc)) throw Error(ze(261));
    return ((lc = null), (fc = 0), pc);
}
function Yc() {
    for (; null !== cc; ) Zc(cc);
}
function Jc() {
    for (; null !== cc && !jn(); ) Zc(cc);
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
                if (0 != (6 & uc)) throw Error(ze(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(ze(177));
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
                        Ec ||
                        ((Ec = !0),
                        cf(Ln, function () {
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
                            if (((Io = xr), Gi((e = Wi())))) {
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
                            for (Lo = { focusedElem: e, selectionRange: n }, xr = !1, Rl = t; null !== Rl; )
                                if (((e = (t = Rl).child), 0 != (1028 & t.subtreeFlags) && null !== e))
                                    ((e.return = t), (Rl = e));
                                else
                                    for (; null !== Rl; ) {
                                        t = Rl;
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
                                                                m = p.memoizedState,
                                                                g = t.stateNode,
                                                                y = g.getSnapshotBeforeUpdate(
                                                                    t.elementType === t.type ? v : Lu(t.type, v),
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
                                                        throw Error(ze(163));
                                                }
                                        } catch (_) {
                                            of(t, t.return, _);
                                        }
                                        if (null !== (e = t.sibling)) {
                                            ((e.return = t.return), (Rl = e));
                                            break;
                                        }
                                        Rl = t.return;
                                    }
                            ((p = Il), (Il = !1));
                        })(e, n),
                        Xl(n, e),
                        Hi(Lo),
                        (xr = !!Io),
                        (Lo = Io = null),
                        (e.current = n),
                        Jl(n),
                        Tn(),
                        (uc = s),
                        (er = a),
                        (sc.transition = o));
                } else e.current = n;
                if (
                    (Ec && ((Ec = !1), (Ac = e), (Cc = i)),
                    (o = e.pendingLanes),
                    0 === o && (Pc = null),
                    (function (e) {
                        if (Fn && 'function' == typeof Fn.onCommitFiberRoot)
                            try {
                                Fn.onCommitFiberRoot(zn, e, void 0, 128 == (128 & e.current.flags));
                            } catch (t) {}
                    })(n.stateNode),
                    Mc(e, Rn()),
                    null !== t)
                )
                    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                        ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
                if (Oc) throw ((Oc = !1), (e = xc), (xc = null), e);
                (0 != (1 & Cc) && 0 !== e.tag && nf(),
                    (o = e.pendingLanes),
                    0 != (1 & o) ? (e === Tc ? jc++ : ((jc = 0), (Tc = e))) : (jc = 0),
                    ka());
            })(e, t, n, r));
    } finally {
        ((sc.transition = i), (er = r));
    }
    return null;
}
function nf() {
    if (null !== Ac) {
        var e = tr(Cc),
            t = sc.transition,
            n = er;
        try {
            if (((sc.transition = null), (er = 16 > e ? 16 : e), null === Ac)) var r = !1;
            else {
                if (((e = Ac), (Ac = null), (Cc = 0), 0 != (6 & uc))) throw Error(ze(331));
                var i = uc;
                for (uc |= 4, Rl = e.current; null !== Rl; ) {
                    var o = Rl,
                        a = o.child;
                    if (0 != (16 & Rl.flags)) {
                        var s = o.deletions;
                        if (null !== s) {
                            for (var u = 0; u < s.length; u++) {
                                var l = s[u];
                                for (Rl = l; null !== Rl; ) {
                                    var c = Rl;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ll(8, c, o);
                                    }
                                    var f = c.child;
                                    if (null !== f) ((f.return = c), (Rl = f));
                                    else
                                        for (; null !== Rl; ) {
                                            var d = (c = Rl).sibling,
                                                h = c.return;
                                            if ((zl(c), c === l)) {
                                                Rl = null;
                                                break;
                                            }
                                            if (null !== d) {
                                                ((d.return = h), (Rl = d));
                                                break;
                                            }
                                            Rl = h;
                                        }
                                }
                            }
                            var p = o.alternate;
                            if (null !== p) {
                                var v = p.child;
                                if (null !== v) {
                                    p.child = null;
                                    do {
                                        var m = v.sibling;
                                        ((v.sibling = null), (v = m));
                                    } while (null !== v);
                                }
                            }
                            Rl = o;
                        }
                    }
                    if (0 != (2064 & o.subtreeFlags) && null !== a) ((a.return = o), (Rl = a));
                    else
                        e: for (; null !== Rl; ) {
                            if (0 != (2048 & (o = Rl).flags))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ll(9, o, o.return);
                                }
                            var g = o.sibling;
                            if (null !== g) {
                                ((g.return = o.return), (Rl = g));
                                break e;
                            }
                            Rl = o.return;
                        }
                }
                var y = e.current;
                for (Rl = y; null !== Rl; ) {
                    var b = (a = Rl).child;
                    if (0 != (2064 & a.subtreeFlags) && null !== b) ((b.return = a), (Rl = b));
                    else
                        e: for (a = y; null !== Rl; ) {
                            if (0 != (2048 & (s = Rl).flags))
                                try {
                                    switch (s.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ml(9, s);
                                    }
                                } catch (w) {
                                    of(s, s.return, w);
                                }
                            if (s === a) {
                                Rl = null;
                                break e;
                            }
                            var _ = s.sibling;
                            if (null !== _) {
                                ((_.return = s.return), (Rl = _));
                                break e;
                            }
                            Rl = s.return;
                        }
                }
                if (((uc = i), ka(), Fn && 'function' == typeof Fn.onPostCommitFiberRoot))
                    try {
                        Fn.onPostCommitFiberRoot(zn, e);
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
    ((e = _s(e, (t = Gu(0, (t = $u(n, t)), 1)), 1)), (t = Vc()), null !== e && (Jn(e, 1, t), Mc(e, t)));
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
                    ((t = _s(t, (e = Hu(t, (e = $u(n, e)), 1)), 1)), (e = Vc()), null !== t && (Jn(t, 1, e), Mc(t, e)));
                    break;
                }
            }
            t = t.return;
        }
}
function af(e, t, n) {
    var r = e.pingCache;
    (null !== r && r.delete(t),
        (t = Vc()),
        (e.pingedLanes |= e.suspendedLanes & n),
        lc === e &&
            (fc & n) === n &&
            (4 === pc || (3 === pc && (130023424 & fc) === fc && 500 > Rn() - wc) ? Wc(e, 0) : (yc |= n)),
        Mc(e, t));
}
function sf(e, t) {
    0 === t && (0 == (1 & e.mode) ? (t = 1) : ((t = Kn), 0 == (130023424 & (Kn <<= 1)) && (Kn = 4194304)));
    var n = Vc();
    null !== (e = vs(e, t)) && (Jn(e, t, n), Mc(e, n));
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
            throw Error(ze(314));
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
                return mf(n.children, i, o, t);
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
                throw Error(ze(130, null == e ? e : typeof e, ''));
        }
    return (((t = df(a, n, t, i)).elementType = e), (t.type = r), (t.lanes = o), t);
}
function mf(e, t, n, r) {
    return (((e = df(7, e, r, t)).lanes = n), e);
}
function gf(e, t, n, r) {
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
        gs(o),
        e
    );
}
function Sf(e) {
    if (!e) return ua;
    e: {
        if (kn((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(ze(170));
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
        throw Error(ze(171));
    }
    if (1 === e.tag) {
        var n = e.type;
        if (ha(n)) return ma(e, n, t);
    }
    return t;
}
function kf(e, t, n, r, i, o, a, s, u) {
    return (
        ((e = wf(n, r, !0, e, 0, o, 0, s, u)).context = Sf(null)),
        (n = e.current),
        ((o = bs((r = Vc()), (i = Ic(n)))).callback = null != t ? t : null),
        _s(n, o, i),
        (e.current.lanes = i),
        Jn(e, i, r),
        Mc(e, r),
        e
    );
}
function Of(e, t, n, r) {
    var i = t.current,
        o = Vc(),
        a = Ic(i);
    return (
        (n = Sf(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = bs(o, a)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = _s(i, t, a)) && (Lc(e, i, a, o), ws(e, i, a)),
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
                                Rs(t);
                                break;
                            case 1:
                                ha(t.type) && ga(t);
                                break;
                            case 4:
                                js(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context,
                                    i = t.memoizedProps.value;
                                (sa(rs, r._currentValue), (r._currentValue = i));
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState))
                                    return null !== r.dehydrated
                                        ? (sa(Vs, 1 & Vs.current), (t.flags |= 128), null)
                                        : 0 != (n & t.child.childLanes)
                                          ? gl(e, t, n)
                                          : (sa(Vs, 1 & Vs.current), null !== (e = Ol(e, t, n)) ? e.sibling : null);
                                sa(Vs, 1 & Vs.current);
                                break;
                            case 19:
                                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                    if (r) return Sl(e, t, n);
                                    t.flags |= 128;
                                }
                                if (
                                    (null !== (i = t.memoizedState) &&
                                        ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                                    sa(Vs, Vs.current),
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
    else ((Zu = !1), za && 0 != (1048576 & t.flags) && Va(t, Ea, t.index));
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
                      ha(r) ? ((o = !0), ga(t)) : (o = !1),
                      (t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null),
                      gs(t),
                      (i.updater = Du),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      Bu(t, r, e, n),
                      (t = ul(null, t, r, !0, o, n)))
                    : ((t.tag = 0), za && o && Ia(t), el(null, t, i, n), (t = t.child)),
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
                    (e = Lu(r, e)),
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
                        t = nl(null, t, r, Lu(r.type, e), n);
                        break e;
                }
                throw Error(ze(306, r, ''));
            }
            return t;
        case 0:
            return ((r = t.type), (i = t.pendingProps), al(e, t, r, (i = t.elementType === r ? i : Lu(r, i)), n));
        case 1:
            return ((r = t.type), (i = t.pendingProps), sl(e, t, r, (i = t.elementType === r ? i : Lu(r, i)), n));
        case 3:
            e: {
                if ((ll(t), null === e)) throw Error(ze(387));
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
                        t = cl(e, t, r, n, (i = $u(Error(ze(423)), t)));
                        break e;
                    }
                    if (r !== i) {
                        t = cl(e, t, r, n, (i = $u(Error(ze(424)), t)));
                        break e;
                    }
                    for (
                        Da = qo(t.stateNode.containerInfo.firstChild),
                            Ma = t,
                            za = !0,
                            Fa = null,
                            n = ns(t, null, r, n),
                            t.child = n;
                        n;
                    )
                        ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                    if ((Ha(), r === i)) {
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
                Rs(t),
                null === e && qa(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (a = i.children),
                Mo(r, i) ? (a = null) : null !== o && Mo(r, o) && (t.flags |= 32),
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
                js(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = ts(t, null, r, n)) : el(e, t, r, n),
                t.child
            );
        case 11:
            return ((r = t.type), (i = t.pendingProps), tl(e, t, r, (i = t.elementType === r ? i : Lu(r, i)), n));
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
                                if (null === (a = o.return)) throw Error(ze(341));
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
            return ((i = Lu((r = t.type), t.pendingProps)), nl(e, t, r, (i = Lu(r.type, i)), n));
        case 15:
            return rl(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Lu(r, i)),
                kl(e, t),
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
    throw Error(ze(156, t.tag));
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
function Tf(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function Rf(e) {
    return !(
        !e ||
        (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
    );
}
function Nf() {}
function Vf(e, t, n, r, i) {
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
                var a = kf(t, r, e, 0, null, !1, 0, '', Nf);
                return (
                    (e._reactRootContainer = a),
                    (e[Qo] = a.current),
                    ko(8 === e.nodeType ? e.parentNode : e),
                    qc(),
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
            var u = wf(e, 0, !1, null, 0, !1, 0, '', Nf);
            return (
                (e._reactRootContainer = u),
                (e[Qo] = u.current),
                ko(8 === e.nodeType ? e.parentNode : e),
                qc(function () {
                    Of(t, u, n, r);
                }),
                u
            );
        })(n, t, e, i, r);
    return xf(a);
}
((jf.prototype.render = Cf.prototype.render =
    function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(ze(409));
        Of(e, t, null, null);
    }),
    (jf.prototype.unmount = Cf.prototype.unmount =
        function () {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                (qc(function () {
                    Of(null, e, null, null);
                }),
                    (t[Qo] = null));
            }
        }),
    (jf.prototype.unstable_scheduleHydration = function (e) {
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
                    var n = Wn(t.pendingLanes);
                    0 !== n && (Zn(t, 1 | n), Mc(t, Rn()), 0 == (6 & uc) && ((Sc = Rn() + 500), ka()));
                }
                break;
            case 13:
                (qc(function () {
                    var t = vs(e, 1);
                    if (null !== t) {
                        var n = Vc();
                        Lc(t, e, 1, n);
                    }
                }),
                    Ef(e, 1));
        }
    }),
    (rr = function (e) {
        if (13 === e.tag) {
            var t = vs(e, 134217728);
            if (null !== t) Lc(t, e, 134217728, Vc());
            Ef(e, 134217728);
        }
    }),
    (ir = function (e) {
        if (13 === e.tag) {
            var t = Ic(e),
                n = vs(e, t);
            if (null !== n) Lc(n, e, t, Vc());
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
                if ((Rt(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                    for (n = e; n.parentNode; ) n = n.parentNode;
                    for (
                        n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var i = na(r);
                            if (!i) throw Error(ze(90));
                            (Et(r), Rt(r, i));
                        }
                    }
                }
                break;
            case 'textarea':
                zt(e, n);
                break;
            case 'select':
                null != (t = n.value) && Lt(e, !!n.multiple, t, !1);
        }
    }),
    (ln = $c),
    (cn = qc));
var If = { usingClientEntryPoint: !1, Events: [ea, ta, na, sn, un, $c] },
    Lf = { findFiberByHostInstance: Zo, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    Mf = {
        bundleType: Lf.bundleType,
        version: Lf.version,
        rendererPackageName: Lf.rendererPackageName,
        rendererConfig: Lf.rendererConfig,
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
            Lf.findFiberByHostInstance ||
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
    var Df = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Df.isDisabled && Df.supportsFiber)
        try {
            ((zn = Df.inject(Mf)), (Fn = Df));
        } catch (qt) {}
}
((Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = If),
    (Ne.createPortal = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Tf(t)) throw Error(ze(200));
        return (function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: nt, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
        })(e, t, null, n);
    }),
    (Ne.createRoot = function (e, t) {
        if (!Tf(e)) throw Error(ze(299));
        var n = !1,
            r = '',
            i = Af;
        return (
            null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
            (t = wf(e, 1, !1, null, 0, n, 0, r, i)),
            (e[Qo] = t.current),
            ko(8 === e.nodeType ? e.parentNode : e),
            new Cf(t)
        );
    }),
    (Ne.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
            if ('function' == typeof e.render) throw Error(ze(188));
            throw ((e = Object.keys(e).join(',')), Error(ze(268, e)));
        }
        return (e = null === (e = Pn(t)) ? null : e.stateNode);
    }),
    (Ne.flushSync = function (e) {
        return qc(e);
    }),
    (Ne.hydrate = function (e, t, n) {
        if (!Rf(t)) throw Error(ze(200));
        return Vf(null, e, t, !0, n);
    }),
    (Ne.hydrateRoot = function (e, t, n) {
        if (!Tf(e)) throw Error(ze(405));
        var r = (null != n && n.hydratedSources) || null,
            i = !1,
            o = '',
            a = Af;
        if (
            (null != n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
            (t = kf(t, null, e, 1, null != n ? n : null, i, 0, o, a)),
            (e[Qo] = t.current),
            ko(e),
            r)
        )
            for (e = 0; e < r.length; e++)
                ((i = (i = (n = r[e])._getVersion)(n._source)),
                    null == t.mutableSourceEagerHydrationData
                        ? (t.mutableSourceEagerHydrationData = [n, i])
                        : t.mutableSourceEagerHydrationData.push(n, i));
        return new jf(t);
    }),
    (Ne.render = function (e, t, n) {
        if (!Rf(t)) throw Error(ze(200));
        return Vf(null, e, t, !1, n);
    }),
    (Ne.unmountComponentAtNode = function (e) {
        if (!Rf(e)) throw Error(ze(40));
        return (
            !!e._reactRootContainer &&
            (qc(function () {
                Vf(null, null, e, !1, function () {
                    ((e._reactRootContainer = null), (e[Qo] = null));
                });
            }),
            !0)
        );
    }),
    (Ne.unstable_batchedUpdates = $c),
    (Ne.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!Rf(n)) throw Error(ze(200));
        if (null == e || void 0 === e._reactInternals) throw Error(ze(38));
        return Vf(e, t, n, !1, r);
    }),
    (Ne.version = '18.3.1-next-f1338f8080-20240426'),
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
    (Re.exports = Ne));
var zf = Re.exports,
    Ff = zf;
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
var Kf = {};
function Wf() {
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
var Gf = Object.assign,
    Hf = Object.getOwnPropertyDescriptor,
    Qf = Object.defineProperty,
    Xf = Object.prototype,
    Yf = [];
Object.freeze(Yf);
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
function md(e) {
    return null === e ? null : 'object' == typeof e ? '' + e : e;
}
function gd(e, t) {
    return Xf.hasOwnProperty.call(e, t);
}
var yd =
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
        if (jd(n)) return e.decorate_20223_(t, n);
        Cd(t, n, e);
    }, e);
}
function Cd(e, t, n) {
    (gd(e, Ed) || ld(e, Ed, wd({}, e[Ed])),
        (function (e) {
            return e.annotationType_ === Dd;
        })(n) || (e[Ed][t] = n));
}
function jd(e) {
    return 'object' == typeof e && 'string' == typeof e.kind;
}
var Td = Symbol('mobx administration'),
    Rd = (function () {
        function e(e) {
            (void 0 === e && (e = 'Atom'),
                (this.name_ = void 0),
                (this.isPendingUnobservation_ = !1),
                (this.isBeingObserved_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Mh.NOT_TRACKING_),
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
    Nd = fd('Atom', Rd);
function Vd(e, t, n) {
    (void 0 === t && (t = rd), void 0 === n && (n = rd));
    var r,
        i = new Rd(e);
    return (t !== rd && Vp(Tp, i, t, r), n !== rd && Np(i, n), i);
}
var Id = {
    structural: function (e, t) {
        return nm(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
};
function Ld(e, t, n) {
    return Xp(e)
        ? e
        : Array.isArray(e)
          ? wh.array(e, { name: n })
          : sd(e)
            ? wh.object(e, void 0, { name: n })
            : dd(e)
              ? wh.map(e, { name: n })
              : hd(e)
                ? wh.set(e, { name: n })
                : 'function' != typeof e || Ep(e) || Gp(e)
                  ? e
                  : ud(e)
                    ? Kp(e)
                    : Pp(n, e);
}
function Md(e) {
    return e;
}
var Dd = 'override';
function zd(e, t) {
    return { annotationType_: e, options_: t, make_: Fd, extend_: Ud, decorate_20223_: Bd };
}
function Fd(e, t, n, r) {
    var i;
    if (null != (i = this.options_) && i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (Ep(n.value)) return 1;
    var o = $d(e, this, t, n, !1);
    return (Qf(r, t, o), 2);
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
                Ep(e) ||
                    ((s = e),
                    (e = Th(
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
            Cd(this, r, o);
        });
}
function $d(e, t, n, r, i) {
    var o, a, s, u, l, c, f, d;
    (void 0 === i && (i = rp.safeDescriptors), (d = r), t.annotationType_, d.value);
    var h,
        p = r.value;
    null != (o = t.options_) && o.bound && (p = p.bind(null != (h = e.proxy_) ? h : e.target_));
    return {
        value: Th(
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
    return { annotationType_: e, options_: t, make_: Kd, extend_: Wd, decorate_20223_: Gd };
}
function Kd(e, t, n, r) {
    var i;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (
        null != (i = this.options_) &&
        i.bound &&
        (!gd(e.target_, t) || !Gp(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
    )
        return 0;
    if (Gp(n.value)) return 1;
    var o = Hd(e, this, t, n, !1, !1);
    return (Qf(r, t, o), 2);
}
function Wd(e, t, n, r) {
    var i,
        o = Hd(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
    return e.defineProperty_(t, o, r);
}
function Gd(e, t) {
    var n,
        r = t.name,
        i = t.addInitializer;
    return (
        Gp(e) || (e = Kp(e)),
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
    (void 0 === o && (o = rp.safeDescriptors), (a = r), t.annotationType_, a.value);
    var s,
        u = r.value;
    (Gp(u) || (u = Kp(u)), i) && ((u = u.bind(null != (s = e.proxy_) ? s : e.target_)).isMobXFlow = !0);
    return { value: u, configurable: !o || e.isPlainObject_, enumerable: !1, writable: !o };
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
            var t = Iv(this)[Td],
                i = wd({}, n.options_, { get: e, context: this });
            (i.name || (i.name = 'ObservableObject.' + r.toString()), t.values_.set(r, new Uh(i)));
        }),
        function () {
            return this[Td].getObservablePropValue_(r);
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
            null != (i = null == (o = this.options_) ? void 0 : o.enhancer) ? i : Ld,
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
            s = Iv(e)[Td],
            u = new Lh(
                t,
                null != (r = null == (a = n.options_) ? void 0 : a.enhancer) ? r : Ld,
                'ObservableObject.' + i.toString(),
                !1,
            );
        (s.values_.set(i, u), o.add(e));
    }
    if ('accessor' == r)
        return {
            get: function () {
                return (o.has(this) || a(this, e.get.call(this)), this[Td].getObservablePropValue_(i));
            },
            set: function (e) {
                return (o.has(this) || a(this, e), this[Td].setObservablePropValue_(i, e));
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
        var u = Th(t.toString(), n.set);
        return r === e.target_
            ? null === e.defineProperty_(t, { configurable: !rp.safeDescriptors || e.isPlainObject_, set: u })
                ? 0
                : 2
            : (Qf(r, t, { configurable: !0, set: u }), 2);
    }
    if (r !== e.target_ && 'function' == typeof n.value)
        return ud(n.value)
            ? (null != (s = this.options_) && s.autoBind ? Kp.bound : Kp).make_(e, t, n, r)
            : (null != (a = this.options_) && a.autoBind ? Pp.bound : Pp).make_(e, t, n, r);
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
            { configurable: !rp.safeDescriptors || e.isPlainObject_, set: Th(t.toString(), n.set) },
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
    dh = Zd('observable.ref', { enhancer: Md }),
    hh = Zd('observable.shallow', {
        enhancer: function (e, t, n) {
            return null == e || Dv(e) || wv(e) || Av(e) || Tv(e)
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
            return nm(e, t) ? t : e;
        },
    }),
    vh = Ad(fh);
function mh(e) {
    return !0 === e.deep
        ? Ld
        : !1 === e.deep
          ? Md
          : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
            ? n
            : Ld;
    var t, n, r;
}
function gh(e, t, n) {
    return jd(t)
        ? fh.decorate_20223_(e, t)
        : od(t)
          ? void Cd(e, t, fh)
          : Xp(e)
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
Gf(gh, vh);
var yh,
    bh,
    _h = {
        box: function (e, t) {
            var n = ch(t);
            return new Lh(e, mh(n), n.name, !0, n.equals);
        },
        array: function (e, t) {
            var n = ch(t);
            return (!1 === rp.useProxies || !1 === n.proxy ? Xv : dv)(e, mh(n), n.name);
        },
        map: function (e, t) {
            var n = ch(t);
            return new Ev(e, mh(n), n.name);
        },
        set: function (e, t) {
            var n = ch(t);
            return new jv(e, mh(n), n.name);
        },
        object: function (e, t, n) {
            return em(function () {
                return zp(
                    !1 === rp.useProxies || !1 === (null == n ? void 0 : n.proxy)
                        ? Iv({}, n)
                        : (function (e, t) {
                              var n, r;
                              return (
                                  td(),
                                  (e = Iv(e, t)),
                                  null != (r = (n = e[Td]).proxy_) ? r : (n.proxy_ = new Proxy(e, ev))
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
    wh = Gf(gh, _h),
    Sh = 'computed',
    kh = Qd(Sh),
    Oh = Qd('computed.struct', { equals: Id.structural }),
    xh = function (e, t) {
        if (jd(t)) return kh.decorate_20223_(e, t);
        if (od(t)) return Cd(e, t, kh);
        if (sd(e)) return Ad(Qd(Sh, e));
        var n = sd(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new Uh(n));
    };
(Object.assign(xh, kh), (xh.struct = Ad(Oh)));
var Ph,
    Eh = 0,
    Ah = 1,
    Ch = null != (yh = null == (bh = Hf(function () {}, 'name')) ? void 0 : bh.configurable) && yh,
    jh = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
function Th(e, t, n, r) {
    function i() {
        return Rh(e, n, t, r || this, arguments);
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
function Rh(e, t, n, r, i) {
    var o = (function (e, t, n, r) {
        var i = !1,
            o = 0,
            a = rp.trackingDerivation,
            s = !t || !a;
        sp();
        var u = rp.allowStateChanges;
        s && (Qh(), (u = Nh(!0)));
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
            Eh !== e.actionId_ && qf(30);
            ((Eh = e.parentActionId_), void 0 !== e.error_ && (rp.suppressReactionErrors = !0));
            (Vh(e.prevAllowStateChanges_), Jh(e.prevAllowStateReads_), up(), e.runAsAction_ && Xh(e.prevDerivation_));
            rp.suppressReactionErrors = !1;
        })(o);
    }
}
function Nh(e) {
    var t = rp.allowStateChanges;
    return ((rp.allowStateChanges = e), t);
}
function Vh(e) {
    rp.allowStateChanges = e;
}
Ph = Symbol.toPrimitive;
var Ih,
    Lh = (function (e) {
        function t(t, n, r, i, o) {
            var a;
            return (
                void 0 === r && (r = 'ObservableValue'),
                void 0 === o && (o = Id.default),
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
                return md(this.get());
            }),
            (n[Ph] = function () {
                return this.valueOf();
            }),
            t
        );
    })(Rd);
Ih = Symbol.toPrimitive;
var Mh,
    Dh,
    zh,
    Fh,
    Uh = (function () {
        function e(e) {
            ((this.dependenciesState_ = Mh.NOT_TRACKING_),
                (this.observing_ = []),
                (this.newObserving_ = null),
                (this.isBeingObserved_ = !1),
                (this.isPendingUnobservation_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = Mh.UP_TO_DATE_),
                (this.unboundDepsCount_ = 0),
                (this.value_ = new $h(null)),
                (this.name_ = void 0),
                (this.triggeredBy_ = void 0),
                (this.isComputing_ = !1),
                (this.isRunningSetter_ = !1),
                (this.derivation = void 0),
                (this.setter_ = void 0),
                (this.isTracing_ = zh.NONE),
                (this.scope_ = void 0),
                (this.equals_ = void 0),
                (this.requiresReaction_ = void 0),
                (this.keepAlive_ = void 0),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                e.get || qf(31),
                (this.derivation = e.get),
                (this.name_ = e.name || 'ComputedValue'),
                e.set && (this.setter_ = Th('ComputedValue-setter', e.set)),
                (this.equals_ = e.equals || (e.compareStructural || e.struct ? Id.structural : Id.default)),
                (this.scope_ = e.context),
                (this.requiresReaction_ = e.requiresReaction),
                (this.keepAlive_ = !!e.keepAlive));
        }
        var t = e.prototype;
        return (
            (t.onBecomeStale_ = function () {
                !(function (e) {
                    if (e.lowestObserverState_ !== Mh.UP_TO_DATE_) return;
                    ((e.lowestObserverState_ = Mh.POSSIBLY_STALE_),
                        e.observers_.forEach(function (e) {
                            e.dependenciesState_ === Mh.UP_TO_DATE_ &&
                                ((e.dependenciesState_ = Mh.POSSIBLY_STALE_), e.onBecomeStale_());
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
                    if ((lp(this), Kh(this))) {
                        var e = rp.trackingContext;
                        (this.keepAlive_ && !e && (rp.trackingContext = this),
                            this.trackAndCompute() &&
                                (function (e) {
                                    if (e.lowestObserverState_ === Mh.STALE_) return;
                                    ((e.lowestObserverState_ = Mh.STALE_),
                                        e.observers_.forEach(function (t) {
                                            t.dependenciesState_ === Mh.POSSIBLY_STALE_
                                                ? (t.dependenciesState_ = Mh.STALE_)
                                                : t.dependenciesState_ === Mh.UP_TO_DATE_ &&
                                                  (e.lowestObserverState_ = Mh.UP_TO_DATE_);
                                        }));
                                })(this),
                            (rp.trackingContext = e));
                    }
                } else Kh(this) && (this.warnAboutUntrackedRead_(), sp(), (this.value_ = this.computeValue_(!1)), up());
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
                    t = this.dependenciesState_ === Mh.NOT_TRACKING_,
                    n = this.computeValue_(!0),
                    r = t || qh(e) || qh(n) || !this.equals_(e, n);
                return (r && (this.value_ = n), r);
            }),
            (t.computeValue_ = function (e) {
                this.isComputing_ = !0;
                var t,
                    n = Nh(!1);
                if (e) t = Wh(this, this.derivation, this.scope_);
                else if (!0 === rp.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                else
                    try {
                        t = this.derivation.call(this.scope_);
                    } catch (r) {
                        t = new $h(r);
                    }
                return (Vh(n), (this.isComputing_ = !1), t);
            }),
            (t.suspend_ = function () {
                this.keepAlive_ || (Gh(this), (this.value_ = void 0));
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
                        var l = Cp(t),
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
                        var a = Qh();
                        (e({
                            observableKind: 'computed',
                            debugObjectName: n.name_,
                            type: lv,
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
                return md(this.get());
            }),
            (t[Ih] = function () {
                return this.valueOf();
            }),
            e
        );
    })(),
    Bh = fd('ComputedValue', Uh);
(((Dh = Mh || (Mh = {}))[(Dh.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
    (Dh[(Dh.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
    (Dh[(Dh.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
    (Dh[(Dh.STALE_ = 2)] = 'STALE_'),
    ((Fh = zh || (zh = {}))[(Fh.NONE = 0)] = 'NONE'),
    (Fh[(Fh.LOG = 1)] = 'LOG'),
    (Fh[(Fh.BREAK = 2)] = 'BREAK'));
var $h = function (e) {
    ((this.cause = void 0), (this.cause = e));
};
function qh(e) {
    return e instanceof $h;
}
function Kh(e) {
    switch (e.dependenciesState_) {
        case Mh.UP_TO_DATE_:
            return !1;
        case Mh.NOT_TRACKING_:
        case Mh.STALE_:
            return !0;
        case Mh.POSSIBLY_STALE_:
            for (var t = Yh(!0), n = Qh(), r = e.observing_, i = r.length, o = 0; o < i; o++) {
                var a = r[o];
                if (Bh(a)) {
                    if (rp.disableErrorBoundaries) a.get();
                    else
                        try {
                            a.get();
                        } catch (s) {
                            return (Xh(n), Jh(t), !0);
                        }
                    if (e.dependenciesState_ === Mh.STALE_) return (Xh(n), Jh(t), !0);
                }
            }
            return (Zh(e), Xh(n), Jh(t), !1);
    }
}
function Wh(e, t, n) {
    var r = Yh(!0);
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
                    r = Mh.UP_TO_DATE_,
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
            r !== Mh.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        Jh(r),
        i
    );
}
function Gh(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) op(t[n], e);
    e.dependenciesState_ = Mh.NOT_TRACKING_;
}
function Hh(e) {
    var t = Qh();
    try {
        return e();
    } finally {
        Xh(t);
    }
}
function Qh() {
    var e = rp.trackingDerivation;
    return ((rp.trackingDerivation = null), e);
}
function Xh(e) {
    rp.trackingDerivation = e;
}
function Yh(e) {
    var t = rp.allowStateReads;
    return ((rp.allowStateReads = e), t);
}
function Jh(e) {
    rp.allowStateReads = e;
}
function Zh(e) {
    if (e.dependenciesState_ !== Mh.UP_TO_DATE_) {
        e.dependenciesState_ = Mh.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = Mh.UP_TO_DATE_;
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
    e.lowestObserverState_ !== Mh.STALE_ &&
        ((e.lowestObserverState_ = Mh.STALE_),
        e.observers_.forEach(function (e) {
            (e.dependenciesState_ === Mh.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = Mh.STALE_));
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
                (this.dependenciesState_ = Mh.NOT_TRACKING_),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.unboundDepsCount_ = 0),
                (this.isDisposed_ = !1),
                (this.isScheduled_ = !1),
                (this.isTrackPending_ = !1),
                (this.isRunning_ = !1),
                (this.isTracing_ = zh.NONE),
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
                    if (((rp.trackingContext = this), Kh(this))) {
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
                        this.isDisposed_ && Gh(this),
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
                this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (sp(), Gh(this), up()));
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
var mp = fd('Reaction', fp);
var gp = 'action',
    yp = 'autoAction',
    bp = '<unnamed action>',
    _p = zd(gp),
    wp = zd('action.bound', { bound: !0 }),
    Sp = zd(yp, { autoAction: !0 }),
    kp = zd('autoAction.bound', { autoAction: !0, bound: !0 });
function Op(e) {
    return function (t, n) {
        return id(t)
            ? Th(t.name || bp, t, e)
            : id(n)
              ? Th(t, n, e)
              : jd(n)
                ? (e ? Sp : _p).decorate_20223_(t, n)
                : od(n)
                  ? Cd(t, n, e ? Sp : _p)
                  : od(t)
                    ? Ad(zd(e ? yp : gp, { name: t, autoAction: e }))
                    : void 0;
    };
}
var xp = Op(!1);
Object.assign(xp, _p);
var Pp = Op(!0);
function Ep(e) {
    return id(e) && !0 === e.isMobxAction;
}
(Object.assign(Pp, Sp), (xp.bound = Ad(wp)), (Pp.bound = Ad(kp)));
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
function jp(e, t, n) {
    var r, i, o, a;
    void 0 === n && (n = Jf);
    var s,
        u,
        l,
        c,
        f = null != (r = n.name) ? r : 'Reaction',
        d = xp(
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
        m = !1,
        g = n.compareStructural ? Id.structural : n.equals || Id.default,
        y = new fp(
            f,
            function () {
                v || h ? b() : m || ((m = !0), p(b));
            },
            n.onError,
            n.requiresObservable,
        );
    function b() {
        if (((m = !1), !y.isDisposed_)) {
            var t = !1;
            (y.track(function () {
                var n = (function (e, t) {
                    var n = Nh(e);
                    try {
                        return t();
                    } finally {
                        Vh(n);
                    }
                })(!1, function () {
                    return e(y);
                });
                ((t = v || !g(l, n)), (c = l), (l = n));
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
var Tp = 'onBO',
    Rp = 'onBUO';
function Np(e, t, n) {
    return Vp(Rp, e, t, n);
}
function Vp(e, t, n, r) {
    var i = Yv(t),
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
var Ip = 'never',
    Lp = 'always',
    Mp = 'observed';
function Dp(e) {
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
        (void 0 !== r && (rp.useProxies = r === Lp || (r !== Ip && 'undefined' != typeof Proxy)),
        'ifavailable' === r && (rp.verifyProxies = !0),
        void 0 !== i)
    ) {
        var o = i === Lp ? Lp : i === Mp;
        ((rp.enforceActions = o), (rp.allowStateChanges = !0 !== o && o !== Lp));
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
function zp(e, t, n, r) {
    var i = yd(t);
    return (
        em(function () {
            var t = Iv(e, r)[Td];
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
    Kp = Object.assign(function (e, t) {
        if (jd(t)) return $p.decorate_20223_(e, t);
        if (od(t)) return Cd(e, t, $p);
        var n = e,
            r = n.name || '<unnamed flow>',
            i = function () {
                var e,
                    t = arguments,
                    i = ++Up,
                    o = xp(r + ' - runid: ' + i + ' - init', n).apply(this, t),
                    a = void 0,
                    s = new Promise(function (t, n) {
                        var s = 0;
                        function u(e) {
                            var t;
                            a = void 0;
                            try {
                                t = xp(r + ' - runid: ' + i + ' - yield ' + s++, o.next).call(o, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function l(e) {
                            var t;
                            a = void 0;
                            try {
                                t = xp(r + ' - runid: ' + i + ' - yield ' + s++, o.throw).call(o, e);
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
                    (s.cancel = xp(r + ' - runid: ' + i + ' - cancel', function () {
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
function Gp(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function Hp(e, t) {
    if (void 0 === t) return Bh(e);
    if (!1 === Dv(e)) return !1;
    if (!e[Td].values_.has(t)) return !1;
    var n = Yv(e, t);
    return Bh(n);
}
function Qp(e, t) {
    return Hp(e, t);
}
function Xp(e) {
    return (function (e, t) {
        return !!e && (Dv(e) || !!e[Td] || Nd(e) || mp(e) || Bh(e));
    })(e);
}
function Yp(e, t, n, r) {
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
    return e[Td];
}
Kp.bound = Ad(qp);
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
    var n = Qh();
    try {
        for (
            var r = [].concat(e.interceptors_ || []), i = 0, o = r.length;
            i < o && ((t = r[i](t)) && !t.type && qf(14), t);
            i++
        );
        return t;
    } finally {
        Xh(n);
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
    var n = Qh(),
        r = e.changeListeners_;
    if (r) {
        for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](t);
        Xh(n);
    }
}
function sv(e, t, n) {
    return (
        em(function () {
            var r = Iv(e, n)[Td];
            (null != t ||
                (t = (function (e) {
                    return (gd(e, Ed) || ld(e, Ed, wd({}, e[Ed])), e[Ed]);
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
            var n = e[Td];
            return t === Td
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
            var r = e[Td];
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
                (this.atom_ = new Rd(e)),
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
                    this.legacyMode_ && t > 0 && Qv(e + t + 1));
            }),
            (t.spliceWithArray_ = function (e, t, n) {
                var r = this;
                this.atom_;
                var i = this.values_.length;
                if (
                    (void 0 === e ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
                    (t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e))),
                    void 0 === n && (n = Yf),
                    tv(this))
                ) {
                    var o = rv(this, { object: this.proxy_, type: uv, index: e, removedCount: t, added: n });
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
        em(function () {
            var i = new fv(n, t, r, !1);
            cd(i.values_, Td, i);
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
        var t = this[Td];
        return t.spliceWithArray_(0, t.values_.length, e);
    },
    toJSON: function () {
        return this.slice();
    },
    splice: function (e, t) {
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
        var o = this[Td];
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
        return (rp.trackingDerivation && qf(37, 'reverse'), this.replace(this.slice().reverse()), this);
    },
    sort: function () {
        rp.trackingDerivation && qf(37, 'sort');
        var e = this.slice();
        return (e.sort.apply(e, arguments), this.replace(e), this);
    },
    remove: function (e) {
        var t = this[Td],
            n = t.dehanceValues_(t.values_).indexOf(e);
        return n > -1 && (this.splice(n, 1), !0);
    },
};
function pv(e, t) {
    'function' == typeof Array.prototype[e] && (hv[e] = t(e));
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
            i = this[Td];
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
            n = this[Td];
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
    pv('every', mv),
    pv('filter', mv),
    pv('find', mv),
    pv('findIndex', mv),
    pv('findLast', mv),
    pv('findLastIndex', mv),
    pv('flatMap', mv),
    pv('forEach', mv),
    pv('map', mv),
    pv('some', mv),
    pv('toReversed', mv),
    pv('reduce', gv),
    pv('reduceRight', gv));
var yv,
    bv,
    _v = fd('ObservableArrayAdministration', fv);
function wv(e) {
    return ad(e) && _v(e[Td]);
}
var Sv = {},
    kv = 'add',
    Ov = 'delete';
((yv = Symbol.iterator), (bv = Symbol.toStringTag));
var xv,
    Pv,
    Ev = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Ld),
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
                id(Map) || qf(18),
                em(function () {
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
                if (!rp.trackingDerivation) return this.has_(e);
                var n = this.hasMap_.get(e);
                if (!n) {
                    var r = (n = new Lh(this.has_(e), Md, 'ObservableMap.key?', !1));
                    (this.hasMap_.set(e, r),
                        Np(r, function () {
                            return t.hasMap_.delete(e);
                        }));
                }
                return n.get();
            }),
            (t.set = function (e, t) {
                var n = this.has_(e);
                if (tv(this)) {
                    var r = rv(this, { type: n ? lv : kv, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, tv(this)) && !rv(this, { type: Ov, object: this, name: e })) return !1;
                if (this.has_(e)) {
                    var n = iv(this),
                        r = n
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: Ov,
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
                            i = new Lh(t, n.enhancer_, 'ObservableMap.key', !1);
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
                              type: kv,
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
                return om({
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
                return om({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            i = n.value;
                        return { done: r, value: r ? void 0 : [i, e.get(i)] };
                    },
                });
            }),
            (t[yv] = function () {
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
                    Jp(function () {
                        for (
                            var n,
                                r = (function (e) {
                                    if (dd(e) || Av(e)) return e;
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
    Av = fd('ObservableMap', Ev);
var Cv = {};
((xv = Symbol.iterator), (Pv = Symbol.toStringTag));
var jv = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = Ld),
                void 0 === n && (n = 'ObservableSet'),
                (this.name_ = void 0),
                (this[Td] = Cv),
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
                em(function () {
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
                Jp(function () {
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
                if ((this.atom_, tv(this)) && !rv(this, { type: kv, object: this, newValue: e })) return this;
                if (!this.has(e)) {
                    Jp(function () {
                        (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
                    });
                    var n = iv(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: kv,
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
                if (tv(this) && !rv(this, { type: Ov, object: this, oldValue: e })) return !1;
                if (this.has(e)) {
                    var n = iv(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: Ov,
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
                return om({
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
                return om({
                    next: function () {
                        return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
                    },
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    Tv(e) && (e = new Set(e)),
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
            (t[xv] = function () {
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
                    key: Pv,
                    get: function () {
                        return 'Set';
                    },
                },
            ]),
            e
        );
    })(),
    Tv = fd('ObservableSet', jv),
    Rv = Object.create(null),
    Nv = 'remove',
    Vv = (function () {
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
                (this.keysAtom_ = new Rd('ObservableObject.keys')),
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
                        ((t = new Lh(e in this.target_, Md, 'ObservableObject.key?', !1)), this.pendingKeys_.set(e, t)),
                    t.get()
                );
            }),
            (t.make_ = function (e, t) {
                if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                    if (!(e in this.target_)) {
                        var n;
                        if (null != (n = this.target_[Ed]) && n[e]) return;
                        qf(1, t.annotationType_, this.name_ + '.' + e.toString());
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
                    zv(this, t, e);
                }
            }),
            (t.extend_ = function (e, t, n, r) {
                if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                    return this.defineProperty_(e, t, r);
                var i = n.extend_(this, e, t, r);
                return (i && zv(this, n, e), i);
            }),
            (t.defineProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    sp();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (tv(this)) {
                        var i = rv(this, { object: this.proxy_ || this.target_, name: e, type: kv, newValue: t.value });
                        if (!i) return null;
                        var o = i.newValue;
                        t.value !== o && (t = wd({}, t, { value: o }));
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
                    sp();
                    var i = this.delete_(e);
                    if (!i) return i;
                    if (tv(this)) {
                        var o = rv(this, { object: this.proxy_ || this.target_, name: e, type: kv, newValue: t });
                        if (!o) return null;
                        t = o.newValue;
                    }
                    var a = Mv(e),
                        s = {
                            configurable: !rp.safeDescriptors || this.isPlainObject_,
                            enumerable: !0,
                            get: a.get,
                            set: a.set,
                        };
                    if (r) {
                        if (!Reflect.defineProperty(this.target_, e, s)) return !1;
                    } else Qf(this.target_, e, s);
                    var u = new Lh(t, n, 'ObservableObject.key', !1);
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
                        if (!rv(this, { object: this.proxy_ || this.target_, name: e, type: kv, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var i = Mv(e),
                        o = {
                            configurable: !rp.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: i.get,
                            set: i.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, o)) return !1;
                    } else Qf(this.target_, e, o);
                    (this.values_.set(e, new Uh(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    up();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !gd(this.target_, e))) return !0;
                if (tv(this) && !rv(this, { object: this.proxy_ || this.target_, name: e, type: Nv })) return null;
                try {
                    var n, r;
                    sp();
                    var i,
                        o = iv(this),
                        a = this.values_.get(e),
                        s = void 0;
                    if (!a && o) s = null == (i = Hf(this.target_, e)) ? void 0 : i.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (a && (this.values_.delete(e), a instanceof Lh && (s = a.value_), cp(a)),
                        this.keysAtom_.reportChanged(),
                        null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
                        o)
                    ) {
                        var u = {
                            type: Nv,
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
                              type: kv,
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
function Iv(e, t) {
    var n;
    if (gd(e, Td)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
        i = new Vv(
            e,
            new Map(),
            String(r),
            (function (e) {
                var t;
                return e ? (null != (t = e.defaultDecorator) ? t : oh(e)) : void 0;
            })(t),
        );
    return (ld(e, Td, i), e);
}
var Lv = fd('ObservableObjectAdministration', Vv);
function Mv(e) {
    return (
        Rv[e] ||
        (Rv[e] = {
            get: function () {
                return this[Td].getObservablePropValue_(e);
            },
            set: function (t) {
                return this[Td].setObservablePropValue_(e, t);
            },
        })
    );
}
function Dv(e) {
    return !!ad(e) && Lv(e[Td]);
}
function zv(e, t, n) {
    var r;
    null == (r = e.target_[Ed]) || delete r[n];
}
var Fv,
    Uv,
    Bv = Gv(0),
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
    Kv = function () {};
((Fv = Kv),
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
            em(function () {
                var e = new fv(r, n, i, !0);
                ((e.proxy_ = Od(o)),
                    cd(Od(o), Td, e),
                    t && t.length && o.spliceWithArray(0, 0, t),
                    $v && Object.defineProperty(Od(o), '0', Bv));
            }),
            o
        );
    }
    Sd(r, e);
    var i = r.prototype;
    return (
        (i.concat = function () {
            this[Td].atom_.reportObserved();
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
            return om({
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
})(Kv, Symbol.toStringTag, Symbol.iterator);
function Gv(e) {
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
function Hv(e) {
    Qf(Wv.prototype, '' + e, Gv(e));
}
function Qv(e) {
    if (e > qv) {
        for (var t = qv; t < e + 100; t++) Hv(t);
        qv = e;
    }
}
function Xv(e, t, n) {
    return new Wv(e, t, n);
}
function Yv(e, t) {
    if ('object' == typeof e && null !== e) {
        if (wv(e)) return (void 0 !== t && qf(23), e[Td].atom_);
        if (Tv(e)) return e.atom_;
        if (Av(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return (n || qf(25, t, Zv(e)), n);
        }
        if (Dv(e)) {
            if (!t) return qf(26);
            var r = e[Td].values_.get(t);
            return (r || qf(27, t, Zv(e)), r);
        }
        if (Nd(e) || Bh(e) || mp(e)) return e;
    } else if (id(e) && mp(e[Td])) return e[Td];
    qf(28);
}
function Jv(e, t) {
    return (
        e || qf(29),
        void 0 !== t ? Jv(Yv(e, t)) : Nd(e) || Bh(e) || mp(e) || Av(e) || Tv(e) ? e : e[Td] ? e[Td] : void qf(24, e)
    );
}
function Zv(e, t) {
    var n;
    if (void 0 !== t) n = Yv(e, t);
    else {
        if (Ep(e)) return e.name;
        n = Dv(e) || Av(e) || Tv(e) ? Jv(e) : Yv(e);
    }
    return n.name_;
}
function em(e) {
    var t = Qh(),
        n = Nh(!0);
    sp();
    try {
        return e();
    } finally {
        (up(), Vh(n), Xh(t));
    }
}
(Object.entries(hv).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && ld(Wv.prototype, t, n);
}),
    Qv(1e3));
var tm = Xf.toString;
function nm(e, t, n) {
    return (void 0 === n && (n = -1), rm(e, t, n));
}
function rm(e, t, n, r, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var o = typeof e;
    if ('function' !== o && 'object' !== o && 'object' != typeof t) return !1;
    var a = tm.call(e);
    if (a !== tm.call(t)) return !1;
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
    ((e = im(e)), (t = im(t)));
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
        for (; c--; ) if (!rm(e[c], t[c], n - 1, r, i)) return !1;
    } else {
        var f,
            d = Object.keys(e);
        if (((c = d.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (!gd(t, (f = d[c])) || !rm(e[f], t[f], n - 1, r, i)) return !1;
    }
    return (r.pop(), i.pop(), !0);
}
function im(e) {
    return wv(e) ? e.slice() : dd(e) || Av(e) || hd(e) || Tv(e) ? Array.from(e.entries()) : e;
}
function om(e) {
    return ((e[Symbol.iterator] = am), e);
}
function am() {
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
            $mobx: Td,
        }));
var sm = km(),
    um = (e) => bm(e, sm),
    lm = km();
um.write = (e) => bm(e, lm);
var cm = km();
um.onStart = (e) => bm(e, cm);
var fm = km();
um.onFrame = (e) => bm(e, fm);
var dm = km();
um.onFinish = (e) => bm(e, dm);
var hm = [];
um.setTimeout = (e, t) => {
    const n = um.now() + t,
        r = () => {
            const e = hm.findIndex((e) => e.cancel == r);
            (~e && hm.splice(e, 1), (gm -= ~e ? 1 : 0));
        },
        i = { time: n, handler: e, cancel: r };
    return (hm.splice(pm(n), 0, i), (gm += 1), _m(), i);
};
var pm = (e) => ~(~hm.findIndex((t) => t.time > e) || ~hm.length);
((um.cancel = (e) => {
    (cm.delete(e), fm.delete(e), dm.delete(e), sm.delete(e), lm.delete(e));
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
    const t = pm(mm);
    (t && (Om(hm.splice(0, t), (e) => e.handler()), (gm -= t)),
        gm ? (cm.flush(), sm.flush(e ? Math.min(64, mm - e) : 16.667), fm.flush(), lm.flush(), dm.flush()) : (mm = -1));
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
            t.size && ((e = new Set()), (gm -= t.size), Om(t, (t) => t(n) && e.add(t)), (gm += e.size), (t = e));
        },
    };
}
function Om(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            um.catch(n);
        }
    });
}
var xm = Object.defineProperty,
    Pm = {};
((e, t) => {
    for (var n in t) xm(e, n, { get: t[n], enumerable: !0 });
})(Pm, {
    assign: () => Mm,
    colors: () => Vm,
    createStringInterpolator: () => jm,
    skipAnimation: () => Im,
    to: () => Tm,
    willAdvance: () => Lm,
});
var Em = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
var Am = (e, t) => e.forEach(t);
function Cm(e, t, n) {
    if (Em.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var jm,
    Tm,
    Rm = (e) => (Em.und(e) ? [] : Em.arr(e) ? e : [e]),
    Nm = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    Vm = null,
    Im = !1,
    Lm = function () {},
    Mm = (e) => {
        (e.to && (Tm = e.to),
            e.now && (um.now = e.now),
            void 0 !== e.colors && (Vm = e.colors),
            null != e.skipAnimation && (Im = e.skipAnimation),
            e.createStringInterpolator && (jm = e.createStringInterpolator),
            e.requestAnimationFrame && um.use(e.requestAnimationFrame),
            e.batchedUpdates && (um.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (Lm = e.willAdvance),
            e.frameLoop && (um.frameLoop = e.frameLoop));
    },
    Dm = new Set(),
    zm = [],
    Fm = [],
    Um = 0,
    Bm = {
        get idle() {
            return !Dm.size && !zm.length;
        },
        start(e) {
            Um > e.priority ? (Dm.add(e), um.onStart($m)) : (qm(e), um(Wm));
        },
        advance: Wm,
        sort(e) {
            if (Um) um.onFrame(() => Bm.sort(e));
            else {
                const t = zm.indexOf(e);
                ~t && (zm.splice(t, 1), Km(e));
            }
        },
        clear() {
            ((zm = []), Dm.clear());
        },
    };
function $m() {
    (Dm.forEach(qm), Dm.clear(), um(Wm));
}
function qm(e) {
    zm.includes(e) || Km(e);
}
function Km(e) {
    zm.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(zm, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function Wm(e) {
    const t = Fm;
    for (let n = 0; n < zm.length; n++) {
        const r = zm[n];
        ((Um = r.priority), r.idle || (Lm(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((Um = 0), ((Fm = zm).length = 0), (zm = t).length > 0);
}
var Gm = '[-+]?\\d*\\.?\\d+',
    Hm = Gm + '%';
function Qm(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var Xm = new RegExp('rgb' + Qm(Gm, Gm, Gm)),
    Ym = new RegExp('rgba' + Qm(Gm, Gm, Gm, Gm)),
    Jm = new RegExp('hsl' + Qm(Gm, Hm, Hm)),
    Zm = new RegExp('hsla' + Qm(Gm, Hm, Hm, Gm)),
    eg = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    tg = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    ng = /^#([0-9a-fA-F]{6})$/,
    rg = /^#([0-9a-fA-F]{8})$/;
function ig(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function og(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        i = 2 * n - r,
        o = ig(i, r, e + 1 / 3),
        a = ig(i, r, e),
        s = ig(i, r, e - 1 / 3);
    return (Math.round(255 * o) << 24) | (Math.round(255 * a) << 16) | (Math.round(255 * s) << 8);
}
function ag(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function sg(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function ug(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function lg(e) {
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
              : Vm && void 0 !== Vm[e]
                ? Vm[e]
                : (t = Xm.exec(e))
                  ? ((ag(t[1]) << 24) | (ag(t[2]) << 16) | (ag(t[3]) << 8) | 255) >>> 0
                  : (t = Ym.exec(e))
                    ? ((ag(t[1]) << 24) | (ag(t[2]) << 16) | (ag(t[3]) << 8) | ug(t[4])) >>> 0
                    : (t = eg.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = rg.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = tg.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = Jm.exec(e))
                            ? (255 | og(sg(t[1]), lg(t[2]), lg(t[3]))) >>> 0
                            : (t = Zm.exec(e))
                              ? (og(sg(t[1]), lg(t[2]), lg(t[3])) | ug(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var fg = (e, t, n) => {
    if (Em.fun(e)) return e;
    if (Em.arr(e)) return fg({ range: e, output: t, extrapolate: n });
    if (Em.str(e.output[0])) return jm(e);
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
var dg = Symbol.for('FluidValue.get'),
    hg = Symbol.for('FluidValue.observers'),
    pg = (e) => Boolean(e && e[dg]),
    vg = (e) => (e && e[dg] ? e[dg]() : e);
function mg(e, t) {
    const n = e[hg];
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
        let n = e[hg];
        (n || Sg(e, hg, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function _g(e, t) {
    const n = e[hg];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[hg] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
var wg,
    Sg = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    kg = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    Og = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    xg = new RegExp(`(${kg.source})(%|[a-z]+)`, 'i'),
    Pg = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    Eg = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    Ag = (e) => {
        const [t, n] = Cg(e);
        if (!t || Nm()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && Eg.test(n) ? Ag(n) : n || e;
    },
    Cg = (e) => {
        const t = Eg.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    jg = (e, t, n, r, i) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
    Tg = (e) => {
        wg || (wg = Vm ? new RegExp(`(${Object.keys(Vm).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => vg(e).replace(Eg, Ag).replace(Og, cg).replace(wg, cg)),
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
            const i = !xg.test(t[0]) && (null == (n = t.find((e) => xg.test(e))) ? void 0 : n.replace(kg, ''));
            let o = 0;
            return t[0].replace(kg, () => `${r[o++](e)}${i || ''}`).replace(Pg, jg);
        };
    },
    Rg = 'react-spring: ',
    Ng = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${Rg}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    Vg = Ng(console.warn);
function Ig(e) {
    return Em.str(e) && ('#' == e[0] || /\d/.test(e) || (!Nm() && Eg.test(e)) || e in (Vm || {}));
}
Ng(console.warn);
var Lg = Nm() ? z.useEffect : z.useLayoutEffect;
function Mg() {
    const e = z.useState()[1],
        t = (() => {
            const e = z.useRef(!1);
            return (
                Lg(
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
var Dg = [],
    zg = Symbol.for('Animated:node'),
    Fg = (e) => e && e[zg],
    Ug = (e, t) => {
        return ((n = e), (r = zg), (i = t), Object.defineProperty(n, r, { value: i, writable: !0, configurable: !0 }));
        var n, r, i;
    },
    Bg = (e) => e && e[zg] && e[zg].getPayload(),
    $g = class {
        constructor() {
            Ug(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    qg = class extends $g {
        constructor(e) {
            (super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                Em.num(this._value) && (this.lastPosition = this._value));
        }
        static create(e) {
            return new qg(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                Em.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            ((this.done = !1),
                Em.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null)));
        }
    },
    Kg = class extends qg {
        constructor(e) {
            (super(0), (this._string = null), (this._toString = fg({ output: [e, e] })));
        }
        static create(e) {
            return new Kg(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (Em.str(e)) {
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
    Wg = { dependencies: null },
    Gg = class extends $g {
        constructor(e) {
            (super(), (this.source = e), this.setValue(e));
        }
        getValue(e) {
            const t = {};
            return (
                Cm(this.source, (n, r) => {
                    var i;
                    (i = n) && i[zg] === i ? (t[r] = n.getValue(e)) : pg(n) ? (t[r] = vg(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            ((this.source = e), (this.payload = this._makePayload(e)));
        }
        reset() {
            this.payload && Am(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return (Cm(e, this._addToPayload, t), Array.from(t));
            }
        }
        _addToPayload(e) {
            Wg.dependencies && pg(e) && Wg.dependencies.add(e);
            const t = Bg(e);
            t && Am(t, (e) => this.add(e));
        }
    },
    Hg = class extends Gg {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new Hg(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map(Qg)), !0);
        }
    };
function Qg(e) {
    return (Ig(e) ? Kg : qg).create(e);
}
var Xg = (e, t) => {
        const n = !Em.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return z.forwardRef((r, i) => {
            const o = z.useRef(null),
                a =
                    n &&
                    z.useCallback(
                        (e) => {
                            o.current = (function (e, t) {
                                e && (Em.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(i, e);
                        },
                        [i],
                    ),
                [s, u] = (function (e, t) {
                    const n = new Set();
                    ((Wg.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                    return ((e = new Gg(e)), (Wg.dependencies = null), [e, n]);
                })(r, t),
                l = Mg(),
                c = () => {
                    const e = o.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && l();
                },
                f = new Yg(c, u),
                d = z.useRef();
            var h;
            (Lg(
                () => (
                    (d.current = f),
                    Am(u, (e) => bg(e, f)),
                    () => {
                        d.current && (Am(d.current.deps, (e) => _g(e, d.current)), um.cancel(d.current.update));
                    }
                ),
            ),
                z.useEffect(c, []),
                (h = () => () => {
                    const e = d.current;
                    Am(e.deps, (t) => _g(t, e));
                }),
                z.useEffect(h, Dg));
            const p = t.getComponentProps(s.getValue());
            return z.createElement(e, { ...p, ref: a });
        });
    },
    Yg = class {
        constructor(e, t) {
            ((this.update = e), (this.deps = t));
        }
        eventObserved(e) {
            'change' == e.type && um.write(this.update);
        }
    };
var Jg,
    Zg,
    ey = Symbol.for('AnimatedComponent'),
    ty = (e) => (Em.str(e) ? e : e && Em.str(e.displayName) ? e.displayName : (Em.fun(e) && e.name) || null),
    ny = (e) => e instanceof iy,
    ry = 1,
    iy = class extends gg {
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
            return Pm.to(this, e);
        }
        interpolate(...e) {
            return (Vg(`${Rg}The "interpolate" function is deprecated in v9 (use "to" instead)`), Pm.to(this, e));
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
    oy = ({ children: e, ...t }) => {
        const n = z.useContext(ay),
            r = t.pause || !!n.pause,
            i = t.immediate || !!n.immediate;
        t = (function (e, t) {
            const [n] = z.useState(() => ({ inputs: t, result: e() })),
                r = z.useRef(),
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
                z.useEffect(() => {
                    ((r.current = o), i == n && (n.inputs = n.result = void 0));
                }, [o]),
                o.result
            );
        })(() => ({ pause: r, immediate: i }), [r, i]);
        const { Provider: o } = ay;
        return z.createElement(o, { value: t }, e);
    },
    ay =
        ((Jg = oy),
        (Zg = {}),
        Object.assign(Jg, z.createContext(Zg)),
        (Jg.Provider._context = Jg),
        (Jg.Consumer._context = Jg),
        Jg);
((oy.Provider = ay.Provider), (oy.Consumer = ay.Consumer));
var sy = class extends iy {
    constructor(e, t) {
        (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = fg(...t)));
        const n = this._get(),
            r = (function (e) {
                const t = Fg(e);
                return t ? t.constructor : Em.arr(e) ? Hg : Ig(e) ? Kg : qg;
            })(n);
        Ug(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        ((function (e, t) {
            if (Em.arr(e)) {
                if (!Em.arr(t) || e.length !== t.length) return !1;
                for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                return !0;
            }
            return e === t;
        })(t, this.get()) || (Fg(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && ly(this._active) && cy(this));
    }
    _get() {
        const e = Em.arr(this.source) ? this.source.map(vg) : Rm(vg(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !ly(this._active) &&
            ((this.idle = !1),
            Am(Bg(this), (e) => {
                e.done = !1;
            }),
            Pm.skipAnimation ? (um.batchedUpdates(() => this.advance()), cy(this)) : Bm.start(this));
    }
    _attach() {
        let e = 1;
        (Am(Rm(this.source), (t) => {
            (pg(t) && bg(t, this), ny(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (Am(Rm(this.source), (e) => {
            pg(e) && _g(e, this);
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
                (this.priority = Rm(this.source).reduce((e, t) => Math.max(e, (ny(t) ? t.priority : 0) + 1), 0));
    }
};
function uy(e) {
    return !1 !== e.idle;
}
function ly(e) {
    return !e.size || Array.from(e).every(uy);
}
function cy(e) {
    e.idle ||
        ((e.idle = !0),
        Am(Bg(e), (e) => {
            e.done = !0;
        }),
        mg(e, { type: 'idle', parent: e }));
}
Pm.assign({ createStringInterpolator: Tg, to: (e, t) => new sy(e, t) });
var fy = /^--/;
function dy(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || fy.test(e) || (py.hasOwnProperty(e) && py[e])
          ? ('' + t).trim()
          : t + 'px';
}
var hy = {};
var py = {
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
py = Object.keys(py).reduce(
    (e, t) => (vy.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    py,
);
var my = /^(matrix|translate|scale|rotate|skew)/,
    gy = /^(translate)/,
    yy = /^(rotate|skew)/,
    by = (e, t) => (Em.num(e) && 0 !== e ? e + t : e),
    _y = (e, t) => (Em.arr(e) ? e.every((e) => _y(e, t)) : Em.num(e) ? e === t : parseFloat(e) === t),
    wy = class extends Gg {
        constructor({ x: e, y: t, z: n, ...r }) {
            const i = [],
                o = [];
            ((e || t || n) &&
                (i.push([e || 0, t || 0, n || 0]),
                o.push((e) => [`translate3d(${e.map((e) => by(e, 'px')).join(',')})`, _y(e, 0)])),
                Cm(r, (e, t) => {
                    if ('transform' === t) (i.push([e || '']), o.push((e) => [e, '' === e]));
                    else if (my.test(t)) {
                        if ((delete r[t], Em.und(e))) return;
                        const n = gy.test(t) ? 'px' : yy.test(t) ? 'deg' : '';
                        (i.push(Rm(e)),
                            o.push(
                                'rotate3d' === t
                                    ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${by(i, n)})`, _y(i, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => by(e, n)).join(',')})`,
                                          _y(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                i.length && (r.transform = new Sy(i, o)),
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
                Am(this.inputs, (n, r) => {
                    const i = vg(n[0]),
                        [o, a] = this.transforms[r](Em.arr(i) ? i : n.map(vg));
                    ((e += ' ' + o), (t = t && a));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && Am(this.inputs, (e) => Am(e, (e) => pg(e) && bg(e, this)));
        }
        observerRemoved(e) {
            0 == e && Am(this.inputs, (e) => Am(e, (e) => pg(e) && _g(e, this)));
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
(Pm.assign({
    batchedUpdates: zf.unstable_batchedUpdates,
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
            createAnimatedStyle: n = (e) => new Gg(e),
            getComponentProps: r = (e) => e,
        } = {},
    ) => {
        const i = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
            o = (e) => {
                const t = ty(e) || 'Anonymous';
                return (
                    ((e = Em.str(e) ? o[e] || (o[e] = Xg(e, i)) : e[ey] || (e[ey] = Xg(e, i))).displayName =
                        `Animated(${t})`),
                    e
                );
            };
        Cm(e, (t, n) => {
            (Em.arr(e) && (n = ty(t)), (o[n] = o(t)));
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
                            : hy[t] || (hy[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                    );
                void 0 !== i && (e.textContent = i);
                for (const f in r)
                    if (r.hasOwnProperty(f)) {
                        const t = dy(f, r[f]);
                        fy.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                    }
                (c.forEach((t, n) => {
                    e.setAttribute(t, l[n]);
                }),
                    void 0 !== o && (e.scrollTop = o),
                    void 0 !== a && (e.scrollLeft = a),
                    void 0 !== s && e.setAttribute('viewBox', s));
            },
            createAnimatedStyle: (e) => new wy(e),
            getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
        },
    ));
var Oy,
    xy = function (e) {
        return e && e !== Object.prototype && Object.getOwnPropertyNames(e).concat(xy(Object.getPrototypeOf(e)) || []);
    },
    Py = function (e) {
        return (function (e) {
            var t = xy(e);
            return t.filter(function (e, n) {
                return t.indexOf(e) === n;
            });
        })(e).filter(function (e) {
            return 'constructor' !== e && !~e.indexOf('__');
        });
    },
    Ey = 'pending',
    Ay = 'fulfilled',
    Cy = 'rejected';
function jy(e) {
    switch (this.state) {
        case Ey:
            return e.pending && e.pending(this.value);
        case Cy:
            return e.rejected && e.rejected(this.value);
        case Ay:
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
        xp('observableFromPromise-resolve', function (e) {
            ((n.value = e), (n.state = Ay));
        }),
        xp('observableFromPromise-reject', function (e) {
            ((n.value = e), (n.state = Cy));
        }),
    ),
        (n.isPromiseBasedObservable = !0),
        (n.case = jy));
    var r = !t || (t.state !== Ay && t.state !== Ey) ? void 0 : t.value;
    return (zp(n, { value: r, state: Ey }, {}, { deep: !1 }), n);
}
(((Oy = Ty || (Ty = {})).reject = xp('fromPromise.reject', function (e) {
    var t = Oy(Promise.reject(e));
    return ((t.state = Cy), (t.value = e), t);
})),
    (Oy.resolve = xp('fromPromise.resolve', function (e) {
        void 0 === e && (e = void 0);
        var t = Oy(Promise.resolve(e));
        return ((t.state = Ay), (t.value = e), t);
    })));
var Ry = function (e, t, n, r) {
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
                Rh(e.name, !1, e, this, void 0);
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
        Ry([wh.ref], e.prototype, 'current', void 0),
        Ry([xp.bound], e.prototype, 'next', null),
        Ry([xp.bound], e.prototype, 'complete', null),
        Ry([xp.bound], e.prototype, 'error', null));
})();
var Ny = function () {
        return (
            (Ny =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            Ny.apply(this, arguments)
        );
    },
    Vy = function (e, t, n, r) {
        var i,
            o = arguments.length,
            a = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return (o > 3 && a && Object.defineProperty(t, n, a), a);
    },
    Iy = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
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
            ky(Dv(e), 'createViewModel expects an observable object'));
        var n = Py(this);
        Py(e).forEach(function (r) {
            var i;
            if (!n.includes(r) && r !== Td && '__mobxDidRunLazyInitializers' !== r) {
                if (
                    (ky(
                        -1 === Iy.indexOf(r),
                        'The propertyname ' + r + ' is reserved and cannot be used with viewModels',
                    ),
                    Qp(e, r))
                ) {
                    var o = Jv(e, r),
                        a = o.derivation.bind(t),
                        s = null === (i = o.setter_) || void 0 === i ? void 0 : i.bind(t);
                    t.localComputedValues.set(r, xh(a, { set: s }));
                }
                var u = Object.getOwnPropertyDescriptor(e, r),
                    l = u ? { enumerable: u.enumerable } : {};
                Object.defineProperty(
                    t,
                    r,
                    Ny(Ny({}, l), {
                        configurable: !0,
                        get: function () {
                            return Qp(e, r)
                                ? t.localComputedValues.get(r).get()
                                : t.isPropertyDirty(r)
                                  ? t.localValues.get(r)
                                  : t.model[r];
                        },
                        set: xp(function (n) {
                            Qp(e, r)
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
                    ? e[Td].keys_()
                    : Av(e) || Tv(e)
                      ? Array.from(e.keys())
                      : wv(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void qf(5)).forEach(function (e) {
                    var n = t.localValues.get(e),
                        r = t.model[e];
                    wv(r) ? r.replace(n) : Av(r) ? (r.clear(), r.merge(n)) : Hp(n) || (t.model[e] = n);
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
        Vy([xh], e.prototype, 'isDirty', null),
        Vy([xh], e.prototype, 'changedValues', null),
        Vy([xp.bound], e.prototype, 'submit', null),
        Vy([xp.bound], e.prototype, 'reset', null),
        Vy([xp.bound], e.prototype, 'resetProperty', null));
})();
var Ly = (function () {
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
            (l._disposeBaseObserver = Yp(l._base, function (e) {
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
    (Ly(t, e),
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
                        reaction: jp(
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
})(Ev);
var My = { exports: {} };
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
})(My);
const Dy = e(My.exports);
var zy = tb(),
    Fy = (e) => Yy(e, zy),
    Uy = tb();
Fy.write = (e) => Yy(e, Uy);
var By = tb();
Fy.onStart = (e) => Yy(e, By);
var $y = tb();
Fy.onFrame = (e) => Yy(e, $y);
var qy = tb();
Fy.onFinish = (e) => Yy(e, qy);
var Ky = [];
Fy.setTimeout = (e, t) => {
    const n = Fy.now() + t,
        r = () => {
            const e = Ky.findIndex((e) => e.cancel == r);
            (~e && Ky.splice(e, 1), (Qy -= ~e ? 1 : 0));
        },
        i = { time: n, handler: e, cancel: r };
    return (Ky.splice(Wy(n), 0, i), (Qy += 1), Jy(), i);
};
var Wy = (e) => ~(~Ky.findIndex((t) => t.time > e) || ~Ky.length);
((Fy.cancel = (e) => {
    (By.delete(e), $y.delete(e), qy.delete(e), zy.delete(e), Uy.delete(e));
}),
    (Fy.sync = (e) => {
        ((Xy = !0), Fy.batchedUpdates(e), (Xy = !1));
    }),
    (Fy.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            ((t = e), Fy.onStart(n));
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                (By.delete(n), (t = null));
            }),
            r
        );
    }));
var Gy = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
((Fy.use = (e) => (Gy = e)),
    (Fy.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (Fy.batchedUpdates = (e) => e()),
    (Fy.catch = console.error),
    (Fy.frameLoop = 'always'),
    (Fy.advance = () => {
        'demand' !== Fy.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : eb();
    }));
var Hy = -1,
    Qy = 0,
    Xy = !1;
function Yy(e, t) {
    Xy ? (t.delete(e), e(0)) : (t.add(e), Jy());
}
function Jy() {
    Hy < 0 && ((Hy = 0), 'demand' !== Fy.frameLoop && Gy(Zy));
}
function Zy() {
    ~Hy && (Gy(Zy), Fy.batchedUpdates(eb));
}
function eb() {
    const e = Hy;
    Hy = Fy.now();
    const t = Wy(Hy);
    (t && (nb(Ky.splice(0, t), (e) => e.handler()), (Qy -= t)),
        Qy ? (By.flush(), zy.flush(e ? Math.min(64, Hy - e) : 16.667), $y.flush(), Uy.flush(), qy.flush()) : (Hy = -1));
}
function tb() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            ((Qy += t != e || e.has(n) ? 0 : 1), e.add(n));
        },
        delete: (n) => ((Qy -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (Qy -= t.size), nb(t, (t) => t(n) && e.add(t)), (Qy += e.size), (t = e));
        },
    };
}
function nb(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            Fy.catch(n);
        }
    });
}
var rb = Object.defineProperty,
    ib = {};
function ob() {}
((e, t) => {
    for (var n in t) rb(e, n, { get: t[n], enumerable: !0 });
})(ib, {
    assign: () => bb,
    colors: () => mb,
    createStringInterpolator: () => db,
    skipAnimation: () => gb,
    to: () => hb,
    willAdvance: () => yb,
});
var ab = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
function sb(e, t) {
    if (ab.arr(e)) {
        if (!ab.arr(t) || e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
    }
    return e === t;
}
var ub = (e, t) => e.forEach(t);
function lb(e, t, n) {
    if (ab.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var cb = (e) => (ab.und(e) ? [] : ab.arr(e) ? e : [e]);
function fb(e, t) {
    if (e.size) {
        const n = Array.from(e);
        (e.clear(), ub(n, t));
    }
}
var db,
    hb,
    pb = (e, ...t) => fb(e, (e) => e(...t)),
    vb = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    mb = null,
    gb = !1,
    yb = ob,
    bb = (e) => {
        (e.to && (hb = e.to),
            e.now && (Fy.now = e.now),
            void 0 !== e.colors && (mb = e.colors),
            null != e.skipAnimation && (gb = e.skipAnimation),
            e.createStringInterpolator && (db = e.createStringInterpolator),
            e.requestAnimationFrame && Fy.use(e.requestAnimationFrame),
            e.batchedUpdates && (Fy.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (yb = e.willAdvance),
            e.frameLoop && (Fy.frameLoop = e.frameLoop));
    },
    _b = new Set(),
    wb = [],
    Sb = [],
    kb = 0,
    Ob = {
        get idle() {
            return !_b.size && !wb.length;
        },
        start(e) {
            kb > e.priority ? (_b.add(e), Fy.onStart(xb)) : (Pb(e), Fy(Ab));
        },
        advance: Ab,
        sort(e) {
            if (kb) Fy.onFrame(() => Ob.sort(e));
            else {
                const t = wb.indexOf(e);
                ~t && (wb.splice(t, 1), Eb(e));
            }
        },
        clear() {
            ((wb = []), _b.clear());
        },
    };
function xb() {
    (_b.forEach(Pb), _b.clear(), Fy(Ab));
}
function Pb(e) {
    wb.includes(e) || Eb(e);
}
function Eb(e) {
    wb.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(wb, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function Ab(e) {
    const t = Sb;
    for (let n = 0; n < wb.length; n++) {
        const r = wb[n];
        ((kb = r.priority), r.idle || (yb(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((kb = 0), ((Sb = wb).length = 0), (wb = t).length > 0);
}
var Cb = '[-+]?\\d*\\.?\\d+',
    jb = Cb + '%';
function Tb(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var Rb = new RegExp('rgb' + Tb(Cb, Cb, Cb)),
    Nb = new RegExp('rgba' + Tb(Cb, Cb, Cb, Cb)),
    Vb = new RegExp('hsl' + Tb(Cb, jb, jb)),
    Ib = new RegExp('hsla' + Tb(Cb, jb, jb, Cb)),
    Lb = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    Mb = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    Db = /^#([0-9a-fA-F]{6})$/,
    zb = /^#([0-9a-fA-F]{8})$/;
function Fb(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function Ub(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        i = 2 * n - r,
        o = Fb(i, r, e + 1 / 3),
        a = Fb(i, r, e),
        s = Fb(i, r, e - 1 / 3);
    return (Math.round(255 * o) << 24) | (Math.round(255 * a) << 16) | (Math.round(255 * s) << 8);
}
function Bb(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function $b(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function qb(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function Kb(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Wb(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = Db.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : mb && void 0 !== mb[e]
                ? mb[e]
                : (t = Rb.exec(e))
                  ? ((Bb(t[1]) << 24) | (Bb(t[2]) << 16) | (Bb(t[3]) << 8) | 255) >>> 0
                  : (t = Nb.exec(e))
                    ? ((Bb(t[1]) << 24) | (Bb(t[2]) << 16) | (Bb(t[3]) << 8) | qb(t[4])) >>> 0
                    : (t = Lb.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = zb.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = Mb.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = Vb.exec(e))
                            ? (255 | Ub($b(t[1]), Kb(t[2]), Kb(t[3]))) >>> 0
                            : (t = Ib.exec(e))
                              ? (Ub($b(t[1]), Kb(t[2]), Kb(t[3])) | qb(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var Gb = (e, t, n) => {
    if (ab.fun(e)) return e;
    if (ab.arr(e)) return Gb({ range: e, output: t, extrapolate: n });
    if (ab.str(e.output[0])) return db(e);
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
var Hb = Symbol.for('FluidValue.get'),
    Qb = Symbol.for('FluidValue.observers'),
    Xb = (e) => Boolean(e && e[Hb]),
    Yb = (e) => (e && e[Hb] ? e[Hb]() : e),
    Jb = (e) => e[Qb] || null;
function Zb(e, t) {
    const n = e[Qb];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
var e_ = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            t_(this, e);
        }
    },
    t_ = (e, t) => o_(e, Hb, t);
function n_(e, t) {
    if (e[Hb]) {
        let n = e[Qb];
        (n || o_(e, Qb, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function r_(e, t) {
    const n = e[Qb];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[Qb] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
var i_,
    o_ = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    a_ = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    s_ = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    u_ = new RegExp(`(${a_.source})(%|[a-z]+)`, 'i'),
    l_ = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    c_ = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    f_ = (e) => {
        const [t, n] = d_(e);
        if (!t || vb()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && c_.test(n) ? f_(n) : n || e;
    },
    d_ = (e) => {
        const t = c_.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    h_ = (e, t, n, r, i) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
    p_ = (e) => {
        i_ || (i_ = mb ? new RegExp(`(${Object.keys(mb).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => Yb(e).replace(c_, f_).replace(s_, Wb).replace(i_, Wb)),
            n = t.map((e) => e.match(a_).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => Gb({ ...e, output: t }));
        return (e) => {
            var n;
            const i = !u_.test(t[0]) && (null == (n = t.find((e) => u_.test(e))) ? void 0 : n.replace(a_, ''));
            let o = 0;
            return t[0].replace(a_, () => `${r[o++](e)}${i || ''}`).replace(l_, h_);
        };
    },
    v_ = 'react-spring: ',
    m_ = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${v_}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    g_ = m_(console.warn);
var y_ = m_(console.warn);
function b_(e) {
    return ab.str(e) && ('#' == e[0] || /\d/.test(e) || (!vb() && c_.test(e)) || e in (mb || {}));
}
var __ = vb() ? z.useEffect : z.useLayoutEffect,
    w_ = () => {
        const e = z.useRef(!1);
        return (
            __(
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
function S_() {
    const e = z.useState()[1],
        t = w_();
    return () => {
        t.current && e(Math.random());
    };
}
var k_ = (e) => z.useEffect(e, O_),
    O_ = [];
function x_(e) {
    const t = z.useRef();
    return (
        z.useEffect(() => {
            t.current = e;
        }),
        t.current
    );
}
var P_ = Symbol.for('Animated:node'),
    E_ = (e) => e && e[P_],
    A_ = (e, t) => {
        return ((n = e), (r = P_), (i = t), Object.defineProperty(n, r, { value: i, writable: !0, configurable: !0 }));
        var n, r, i;
    },
    C_ = (e) => e && e[P_] && e[P_].getPayload(),
    j_ = class {
        constructor() {
            A_(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    T_ = class extends j_ {
        constructor(e) {
            (super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                ab.num(this._value) && (this.lastPosition = this._value));
        }
        static create(e) {
            return new T_(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                ab.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            ((this.done = !1),
                ab.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null)));
        }
    },
    R_ = class extends T_ {
        constructor(e) {
            (super(0), (this._string = null), (this._toString = Gb({ output: [e, e] })));
        }
        static create(e) {
            return new R_(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (ab.str(e)) {
                if (e == this._string) return !1;
                ((this._string = e), (this._value = 1));
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null;
            }
            return !0;
        }
        reset(e) {
            (e && (this._toString = Gb({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
        }
    },
    N_ = { dependencies: null },
    V_ = class extends j_ {
        constructor(e) {
            (super(), (this.source = e), this.setValue(e));
        }
        getValue(e) {
            const t = {};
            return (
                lb(this.source, (n, r) => {
                    var i;
                    (i = n) && i[P_] === i ? (t[r] = n.getValue(e)) : Xb(n) ? (t[r] = Yb(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            ((this.source = e), (this.payload = this._makePayload(e)));
        }
        reset() {
            this.payload && ub(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return (lb(e, this._addToPayload, t), Array.from(t));
            }
        }
        _addToPayload(e) {
            N_.dependencies && Xb(e) && N_.dependencies.add(e);
            const t = C_(e);
            t && ub(t, (e) => this.add(e));
        }
    },
    I_ = class extends V_ {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new I_(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map(L_)), !0);
        }
    };
function L_(e) {
    return (b_(e) ? R_ : T_).create(e);
}
function M_(e) {
    const t = E_(e);
    return t ? t.constructor : ab.arr(e) ? I_ : b_(e) ? R_ : T_;
}
var D_ = (e, t) => {
        const n = !ab.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return z.forwardRef((r, i) => {
            const o = z.useRef(null),
                a =
                    n &&
                    z.useCallback(
                        (e) => {
                            o.current = (function (e, t) {
                                e && (ab.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(i, e);
                        },
                        [i],
                    ),
                [s, u] = (function (e, t) {
                    const n = new Set();
                    ((N_.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                    return ((e = new V_(e)), (N_.dependencies = null), [e, n]);
                })(r, t),
                l = S_(),
                c = () => {
                    const e = o.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && l();
                },
                f = new z_(c, u),
                d = z.useRef();
            (__(
                () => (
                    (d.current = f),
                    ub(u, (e) => n_(e, f)),
                    () => {
                        d.current && (ub(d.current.deps, (e) => r_(e, d.current)), Fy.cancel(d.current.update));
                    }
                ),
            ),
                z.useEffect(c, []),
                k_(() => () => {
                    const e = d.current;
                    ub(e.deps, (t) => r_(t, e));
                }));
            const h = t.getComponentProps(s.getValue());
            return z.createElement(e, { ...h, ref: a });
        });
    },
    z_ = class {
        constructor(e, t) {
            ((this.update = e), (this.deps = t));
        }
        eventObserved(e) {
            'change' == e.type && Fy.write(this.update);
        }
    };
var F_ = Symbol.for('AnimatedComponent'),
    U_ = (e) => (ab.str(e) ? e : e && ab.str(e.displayName) ? e.displayName : (ab.fun(e) && e.name) || null);
function B_(e, ...t) {
    return ab.fun(e) ? e(...t) : e;
}
var $_ = (e, t) => !0 === e || !!(t && e && (ab.fun(e) ? e(t) : cb(e).includes(t))),
    q_ = (e, t) => (ab.obj(e) ? t && e[t] : e),
    K_ = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
    W_ = (e) => e,
    G_ = (e, t = W_) => {
        let n = H_;
        e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
        const r = {};
        for (const i of n) {
            const n = t(e[i], i);
            ab.und(n) || (r[i] = n);
        }
        return r;
    },
    H_ = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
    Q_ = {
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
function X_(e) {
    const t = (function (e) {
        const t = {};
        let n = 0;
        if (
            (lb(e, (e, r) => {
                Q_[r] || ((t[r] = e), n++);
            }),
            n)
        )
            return t;
    })(e);
    if (t) {
        const n = { to: t };
        return (lb(e, (e, r) => r in t || (n[r] = e)), n);
    }
    return { ...e };
}
function Y_(e) {
    return (
        (e = Yb(e)),
        ab.arr(e) ? e.map(Y_) : b_(e) ? ib.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
    );
}
function J_(e) {
    return ab.fun(e) || (ab.arr(e) && ab.obj(e[0]));
}
var Z_ = { tension: 170, friction: 26, mass: 1, damping: 1, easing: (e) => e, clamp: !1 };
function ew(e, t) {
    if (ab.und(t.decay)) {
        const n = !ab.und(t.tension) || !ab.und(t.friction);
        ((!n && ab.und(t.frequency) && ab.und(t.damping) && ab.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0));
    } else e.duration = void 0;
}
var tw = [];
function nw(e, { key: t, props: n, defaultProps: r, state: i, actions: o }) {
    return new Promise((a, s) => {
        let u,
            l,
            c = $_(n.cancel ?? (null == r ? void 0 : r.cancel), t);
        if (c) h();
        else {
            ab.und(n.pause) || (i.paused = $_(n.pause, t));
            let e = null == r ? void 0 : r.pause;
            (!0 !== e && (e = i.paused || $_(e, t)),
                (u = B_(n.delay || 0, t)),
                e ? (i.resumeQueue.add(d), o.pause()) : (o.resume(), d()));
        }
        function f() {
            (i.resumeQueue.add(d), i.timeouts.delete(l), l.cancel(), (u = l.time - Fy.now()));
        }
        function d() {
            u > 0 && !ib.skipAnimation
                ? ((i.delayed = !0), (l = Fy.setTimeout(h, u)), i.pauseQueue.add(f), i.timeouts.add(l))
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
var rw = (e, t) =>
        1 == t.length
            ? t[0]
            : t.some((e) => e.cancelled)
              ? aw(e.get())
              : t.every((e) => e.noop)
                ? iw(e.get())
                : ow(
                      e.get(),
                      t.every((e) => e.finished),
                  ),
    iw = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
    ow = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
    aw = (e) => ({ value: e, cancelled: !0, finished: !1 });
function sw(e, t, n, r) {
    const { callId: i, parentId: o, onRest: a } = t,
        { asyncTo: s, promise: u } = n;
    return o || e !== s || t.reset
        ? (n.promise = (async () => {
              ((n.asyncId = i), (n.asyncTo = e));
              const l = G_(t, (e, t) => ('onRest' === t ? void 0 : e));
              let c, f;
              const d = new Promise((e, t) => ((c = e), (f = t))),
                  h = (e) => {
                      const t = (i <= (n.cancelId || 0) && aw(r)) || (i !== n.asyncId && ow(r, !1));
                      if (t) throw ((e.result = t), f(e), e);
                  },
                  p = (e, t) => {
                      const o = new lw(),
                          a = new cw();
                      return (async () => {
                          if (ib.skipAnimation) throw (uw(n), (a.result = ow(r, !1)), f(a), a);
                          h(o);
                          const s = ab.obj(e) ? { ...e } : { ...t, to: e };
                          ((s.parentId = i),
                              lb(l, (e, t) => {
                                  ab.und(s[t]) && (s[t] = e);
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
              if (ib.skipAnimation) return (uw(n), ow(r, !1));
              try {
                  let t;
                  ((t = ab.arr(e)
                      ? (async (e) => {
                            for (const t of e) await p(t);
                        })(e)
                      : Promise.resolve(e(p, r.stop.bind(r)))),
                      await Promise.all([t.then(c), d]),
                      (v = ow(r.get(), !0, !1)));
              } catch (m) {
                  if (m instanceof lw) v = m.result;
                  else {
                      if (!(m instanceof cw)) throw m;
                      v = m.result;
                  }
              } finally {
                  i == n.asyncId && ((n.asyncId = o), (n.asyncTo = o ? s : void 0), (n.promise = o ? u : void 0));
              }
              return (
                  ab.fun(a) &&
                      Fy.batchedUpdates(() => {
                          a(v, r, r.item);
                      }),
                  v
              );
          })())
        : u;
}
function uw(e, t) {
    (fb(e.timeouts, (e) => e.cancel()),
        e.pauseQueue.clear(),
        e.resumeQueue.clear(),
        (e.asyncId = e.asyncTo = e.promise = void 0),
        t && (e.cancelId = t));
}
var lw = class extends Error {
        constructor() {
            super(
                'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
            );
        }
    },
    cw = class extends Error {
        constructor() {
            super('SkipAnimationSignal');
        }
    },
    fw = (e) => e instanceof hw,
    dw = 1,
    hw = class extends e_ {
        constructor() {
            (super(...arguments), (this.id = dw++), (this._priority = 0));
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = E_(this);
            return e && e.getValue();
        }
        to(...e) {
            return ib.to(this, e);
        }
        interpolate(...e) {
            return (g_(`${v_}The "interpolate" function is deprecated in v9 (use "to" instead)`), ib.to(this, e));
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
            Zb(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            (this.idle || Ob.sort(this), Zb(this, { type: 'priority', parent: this, priority: e }));
        }
    },
    pw = Symbol.for('SpringPhase'),
    vw = (e) => (1 & e[pw]) > 0,
    mw = (e) => (2 & e[pw]) > 0,
    gw = (e) => (4 & e[pw]) > 0,
    yw = (e, t) => (t ? (e[pw] |= 3) : (e[pw] &= -3)),
    bw = (e, t) => (t ? (e[pw] |= 4) : (e[pw] &= -5)),
    _w = class extends hw {
        constructor(e, t) {
            if (
                (super(),
                (this.animation = new (class {
                    constructor() {
                        ((this.changed = !1),
                            (this.values = tw),
                            (this.toValues = null),
                            (this.fromValues = tw),
                            (this.config = new (class {
                                constructor() {
                                    ((this.velocity = 0), Object.assign(this, Z_));
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
                !ab.und(e) || !ab.und(t))
            ) {
                const n = ab.obj(e) ? { ...e } : { ...t, from: e };
                (ab.und(n.default) && (n.default = !0), this.start(n));
            }
        }
        get idle() {
            return !(mw(this) || this._state.asyncTo) || gw(this);
        }
        get goal() {
            return Yb(this.animation.to);
        }
        get velocity() {
            const e = E_(this);
            return e instanceof T_ ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
        }
        get hasAnimated() {
            return vw(this);
        }
        get isAnimating() {
            return mw(this);
        }
        get isPaused() {
            return gw(this);
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
                a = C_(r.to);
            (!a && Xb(r.to) && (i = cb(Yb(r.to))),
                r.values.forEach((s, u) => {
                    if (s.done) return;
                    const l = s.constructor == R_ ? 1 : a ? a[u].lastPosition : i[u];
                    let c = r.immediate,
                        f = l;
                    if (!c) {
                        if (((f = s.lastPosition), o.tension <= 0)) return void (s.done = !0);
                        let t = (s.elapsedTime += e);
                        const n = r.fromValues[u],
                            i = null != s.v0 ? s.v0 : (s.v0 = ab.arr(o.velocity) ? o.velocity[u] : o.velocity);
                        let a;
                        const d = o.precision || (n == l ? 0.005 : Math.min(1, 0.001 * Math.abs(l - n)));
                        if (ab.und(o.duration))
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
                                    u = !ab.und(r),
                                    h = n == l ? s.v0 > 0 : n < l;
                                let p,
                                    v = !1;
                                const m = 1,
                                    g = Math.ceil(e / m);
                                for (
                                    let e = 0;
                                    e < g && ((p = Math.abs(a) > t), p || ((c = Math.abs(l - f) <= d), !c));
                                    ++e
                                ) {
                                    u && ((v = f == l || f > l == h), v && ((a = -a * r), (f = l)));
                                    ((a += ((1e-6 * -o.tension * (f - l) + 0.001 * -o.friction * a) / o.mass) * m),
                                        (f += a * m));
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
            const s = E_(this),
                u = s.getValue();
            if (t) {
                const e = Yb(r.to);
                ((u === e && !n) || o.decay ? n && o.decay && this._onChange(u) : (s.setValue(e), this._onChange(e)),
                    this._stop());
            } else n && this._onChange(u);
        }
        set(e) {
            return (
                Fy.batchedUpdates(() => {
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
            if (mw(this)) {
                const { to: e, config: t } = this.animation;
                Fy.batchedUpdates(() => {
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
                ab.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [ab.obj(e) ? e : { ...t, to: e }]),
                Promise.all(n.map((e) => this._update(e))).then((e) => rw(this, e))
            );
        }
        stop(e) {
            const { to: t } = this.animation;
            return (
                this._focus(this.get()),
                uw(this._state, e && this._lastCallId),
                Fy.batchedUpdates(() => this._stop(t, e)),
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
            ((n = ab.obj(n) ? n[t] : n),
                (null == n || J_(n)) && (n = void 0),
                (r = ab.obj(r) ? r[t] : r),
                null == r && (r = void 0));
            const i = { to: n, from: r };
            return (
                vw(this) ||
                    (e.reverse && ([n, r] = [r, n]), (r = Yb(r)), ab.und(r) ? E_(this) || this._set(n) : this._set(r)),
                i
            );
        }
        _update({ ...e }, t) {
            const { key: n, defaultProps: r } = this;
            (e.default &&
                Object.assign(
                    r,
                    G_(e, (e, t) => (/^on/.test(t) ? q_(e, n) : e)),
                ),
                Ew(this, e, 'onProps'),
                Aw(this, 'onProps', e, this));
            const i = this._prepareNode(e);
            if (Object.isFrozen(this))
                throw Error(
                    'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                );
            const o = this._state;
            return nw(++this._lastCallId, {
                key: n,
                props: e,
                defaultProps: r,
                state: o,
                actions: {
                    pause: () => {
                        gw(this) ||
                            (bw(this, !0),
                            pb(o.pauseQueue),
                            Aw(this, 'onPause', ow(this, ww(this, this.animation.to)), this));
                    },
                    resume: () => {
                        gw(this) &&
                            (bw(this, !1),
                            mw(this) && this._resume(),
                            pb(o.resumeQueue),
                            Aw(this, 'onResume', ow(this, ww(this, this.animation.to)), this));
                    },
                    start: this._merge.bind(this, i),
                },
            }).then((n) => {
                if (e.loop && n.finished && (!t || !n.noop)) {
                    const t = Sw(e);
                    if (t) return this._update(t, !0);
                }
                return n;
            });
        }
        _merge(e, t, n) {
            if (t.cancel) return (this.stop(!0), n(aw(this)));
            const r = !ab.und(e.to),
                i = !ab.und(e.from);
            if (r || i) {
                if (!(t.callId > this._lastToId)) return n(aw(this));
                this._lastToId = t.callId;
            }
            const { key: o, defaultProps: a, animation: s } = this,
                { to: u, from: l } = s;
            let { to: c = u, from: f = l } = e;
            (!i || r || (t.default && !ab.und(c)) || (c = f), t.reverse && ([c, f] = [f, c]));
            const d = !sb(f, l);
            (d && (s.from = f), (f = Yb(f)));
            const h = !sb(c, u);
            h && this._focus(c);
            const p = J_(t.to),
                { config: v } = s,
                { decay: m, velocity: g } = v;
            ((r || i) && (v.velocity = 0),
                t.config &&
                    !p &&
                    (function (e, t, n) {
                        (n && (ew((n = { ...n }), t), (t = { ...n, ...t })), ew(e, t), Object.assign(e, t));
                        for (const a in Z_) null == e[a] && (e[a] = Z_[a]);
                        let { frequency: r, damping: i } = e;
                        const { mass: o } = e;
                        ab.und(r) ||
                            (r < 0.01 && (r = 0.01),
                            i < 0 && (i = 0),
                            (e.tension = Math.pow((2 * Math.PI) / r, 2) * o),
                            (e.friction = (4 * Math.PI * i * o) / r));
                    })(v, B_(t.config, o), t.config !== a.config ? B_(a.config, o) : void 0));
            let y = E_(this);
            if (!y || ab.und(c)) return n(ow(this, !0));
            const b = ab.und(t.reset) ? i && !t.default : !ab.und(f) && $_(t.reset, o),
                _ = b ? f : this.get(),
                w = Y_(c),
                S = ab.num(w) || ab.arr(w) || b_(w),
                k = !p && (!S || $_(a.immediate || t.immediate, o));
            if (h) {
                const e = M_(c);
                if (e !== y.constructor) {
                    if (!k)
                        throw Error(
                            `Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`,
                        );
                    y = this._set(w);
                }
            }
            const O = y.constructor;
            let x = Xb(c),
                P = !1;
            if (!x) {
                const e = b || (!vw(this) && d);
                ((h || e) && ((P = sb(Y_(_), w)), (x = !P)),
                    ((sb(s.immediate, k) || k) && sb(v.decay, m) && sb(v.velocity, g)) || (x = !0));
            }
            if (
                (P && mw(this) && (s.changed && !b ? (x = !0) : x || this._stop(u)),
                !p &&
                    ((x || Xb(u)) && ((s.values = y.getPayload()), (s.toValues = Xb(c) ? null : O == R_ ? [1] : cb(w))),
                    s.immediate != k && ((s.immediate = k), k || b || this._set(u)),
                    x))
            ) {
                const { onRest: e } = s;
                ub(Pw, (e) => Ew(this, t, e));
                const r = ow(this, ww(this, u));
                (pb(this._pendingCalls, r),
                    this._pendingCalls.add(n),
                    s.changed &&
                        Fy.batchedUpdates(() => {
                            var t;
                            ((s.changed = !b),
                                null == e || e(r, this),
                                b ? B_(a.onRest, r) : null == (t = s.onStart) || t.call(s, r, this));
                        }));
            }
            (b && this._set(_),
                p
                    ? n(sw(t.to, t, this._state, this))
                    : x
                      ? this._start()
                      : mw(this) && !h
                        ? this._pendingCalls.add(n)
                        : n(iw(_)));
        }
        _focus(e) {
            const t = this.animation;
            e !== t.to && (Jb(this) && this._detach(), (t.to = e), Jb(this) && this._attach());
        }
        _attach() {
            let e = 0;
            const { to: t } = this.animation;
            (Xb(t) && (n_(t, this), fw(t) && (e = t.priority + 1)), (this.priority = e));
        }
        _detach() {
            const { to: e } = this.animation;
            Xb(e) && r_(e, this);
        }
        _set(e, t = !0) {
            const n = Yb(e);
            if (!ab.und(n)) {
                const e = E_(this);
                if (!e || !sb(n, e.getValue())) {
                    const r = M_(n);
                    (e && e.constructor == r ? e.setValue(n) : A_(this, r.create(n)),
                        e &&
                            Fy.batchedUpdates(() => {
                                this._onChange(n, t);
                            }));
                }
            }
            return E_(this);
        }
        _onStart() {
            const e = this.animation;
            e.changed || ((e.changed = !0), Aw(this, 'onStart', ow(this, ww(this, e.to)), this));
        }
        _onChange(e, t) {
            (t || (this._onStart(), B_(this.animation.onChange, e, this)),
                B_(this.defaultProps.onChange, e, this),
                super._onChange(e, t));
        }
        _start() {
            const e = this.animation;
            (E_(this).reset(Yb(e.to)),
                e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                mw(this) || (yw(this, !0), gw(this) || this._resume()));
        }
        _resume() {
            ib.skipAnimation ? this.finish() : Ob.start(this);
        }
        _stop(e, t) {
            if (mw(this)) {
                yw(this, !1);
                const n = this.animation;
                (ub(n.values, (e) => {
                    e.done = !0;
                }),
                    n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                    Zb(this, { type: 'idle', parent: this }));
                const r = t ? aw(this.get()) : ow(this.get(), ww(this, e ?? n.to));
                (pb(this._pendingCalls, r), n.changed && ((n.changed = !1), Aw(this, 'onRest', r, this)));
            }
        }
    };
function ww(e, t) {
    const n = Y_(t);
    return sb(Y_(e.get()), n);
}
function Sw(e, t = e.loop, n = e.to) {
    const r = B_(t);
    if (r) {
        const i = !0 !== r && X_(r),
            o = (i || e).reverse,
            a = !i || i.reset;
        return kw({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !o || J_(n) ? n : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...i,
        });
    }
}
function kw(e) {
    const { to: t, from: n } = (e = X_(e)),
        r = new Set();
    return (ab.obj(t) && xw(t, r), ab.obj(n) && xw(n, r), (e.keys = r.size ? Array.from(r) : null), e);
}
function Ow(e) {
    const t = kw(e);
    return (ab.und(t.default) && (t.default = G_(t)), t);
}
function xw(e, t) {
    lb(e, (e, n) => null != e && t.add(n));
}
var Pw = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
function Ew(e, t, n) {
    e.animation[n] = t[n] !== K_(t, n) ? q_(t[n], e.key) : void 0;
}
function Aw(e, t, ...n) {
    var r, i, o, a;
    (null == (i = (r = e.animation)[t]) || i.call(r, ...n), null == (a = (o = e.defaultProps)[t]) || a.call(o, ...n));
}
var Cw = ['onStart', 'onChange', 'onRest'],
    jw = 1,
    Tw = class {
        constructor(e, t) {
            ((this.id = jw++),
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
                ab.und(n) || this.springs[t].set(n);
            }
        }
        update(e) {
            return (e && this.queue.push(kw(e)), this);
        }
        start(e) {
            let { queue: t } = this;
            return (
                e ? (t = cb(e).map(kw)) : (this.queue = []),
                this._flush ? this._flush(this, t) : (Dw(this, t), Rw(this, t))
            );
        }
        stop(e, t) {
            if ((e !== !!e && (t = e), t)) {
                const n = this.springs;
                ub(cb(t), (t) => n[t].stop(!!e));
            } else (uw(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
            return this;
        }
        pause(e) {
            if (ab.und(e)) this.start({ pause: !0 });
            else {
                const t = this.springs;
                ub(cb(e), (e) => t[e].pause());
            }
            return this;
        }
        resume(e) {
            if (ab.und(e)) this.start({ pause: !1 });
            else {
                const t = this.springs;
                ub(cb(e), (e) => t[e].resume());
            }
            return this;
        }
        each(e) {
            lb(this.springs, e);
        }
        _onFrame() {
            const { onStart: e, onChange: t, onRest: n } = this._events,
                r = this._active.size > 0,
                i = this._changed.size > 0;
            ((r && !this._started) || (i && !this._started)) &&
                ((this._started = !0),
                fb(e, ([e, t]) => {
                    ((t.value = this.get()), e(t, this, this._item));
                }));
            const o = !r && this._started,
                a = i || (o && n.size) ? this.get() : null;
            (i &&
                t.size &&
                fb(t, ([e, t]) => {
                    ((t.value = a), e(t, this, this._item));
                }),
                o &&
                    ((this._started = !1),
                    fb(n, ([e, t]) => {
                        ((t.value = a), e(t, this, this._item));
                    })));
        }
        eventObserved(e) {
            if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
            else {
                if ('idle' != e.type) return;
                this._active.delete(e.parent);
            }
            Fy.onFrame(this._onFrame);
        }
    };
function Rw(e, t) {
    return Promise.all(t.map((t) => Nw(e, t))).then((t) => rw(e, t));
}
async function Nw(e, t, n) {
    const { keys: r, to: i, from: o, loop: a, onRest: s, onResolve: u } = t,
        l = ab.obj(t.default) && t.default;
    (a && (t.loop = !1), !1 === i && (t.to = null), !1 === o && (t.from = null));
    const c = ab.arr(i) || ab.fun(i) ? i : void 0;
    c
        ? ((t.to = void 0), (t.onRest = void 0), l && (l.onRest = void 0))
        : ub(Cw, (n) => {
              const r = t[n];
              if (ab.fun(r)) {
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
        ? ((f.paused = t.pause), pb(t.pause ? f.pauseQueue : f.resumeQueue))
        : f.paused && (t.pause = !0);
    const d = (r || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
        h = !0 === t.cancel || !0 === K_(t, 'cancel');
    ((c || (h && f.asyncId)) &&
        d.push(
            nw(++e._lastAsyncId, {
                props: t,
                state: f,
                actions: {
                    pause: ob,
                    resume: ob,
                    start(t, n) {
                        h ? (uw(f, e._lastAsyncId), n(aw(e))) : ((t.onRest = s), n(sw(c, t, f, e)));
                    },
                },
            }),
        ),
        f.paused &&
            (await new Promise((e) => {
                f.resumeQueue.add(e);
            })));
    const p = rw(e, await Promise.all(d));
    if (a && p.finished && (!n || !p.noop)) {
        const n = Sw(t, a, i);
        if (n) return (Dw(e, [n]), Nw(e, n, !0));
    }
    return (u && Fy.batchedUpdates(() => u(p, e, e.item)), p);
}
function Vw(e, t) {
    const n = { ...e.springs };
    return (
        t &&
            ub(cb(t), (e) => {
                (ab.und(e.keys) && (e = kw(e)), ab.obj(e.to) || (e = { ...e, to: void 0 }), Mw(n, e, (e) => Lw(e)));
            }),
        Iw(e, n),
        n
    );
}
function Iw(e, t) {
    lb(t, (t, n) => {
        e.springs[n] || ((e.springs[n] = t), n_(t, e));
    });
}
function Lw(e, t) {
    const n = new _w();
    return ((n.key = e), t && n_(n, t), n);
}
function Mw(e, t, n) {
    t.keys &&
        ub(t.keys, (r) => {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function Dw(e, t) {
    ub(t, (t) => {
        Mw(e.springs, t, (t) => Lw(t, e));
    });
}
var zw = ({ children: e, ...t }) => {
        const n = z.useContext(Fw),
            r = t.pause || !!n.pause,
            i = t.immediate || !!n.immediate;
        t = (function (e, t) {
            const [n] = z.useState(() => ({ inputs: t, result: e() })),
                r = z.useRef(),
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
                z.useEffect(() => {
                    ((r.current = o), i == n && (n.inputs = n.result = void 0));
                }, [o]),
                o.result
            );
        })(() => ({ pause: r, immediate: i }), [r, i]);
        const { Provider: o } = Fw;
        return z.createElement(o, { value: t }, e);
    },
    Fw = (function (e, t) {
        return (Object.assign(e, z.createContext(t)), (e.Provider._context = e), (e.Consumer._context = e), e);
    })(zw, {});
((zw.Provider = Fw.Provider), (zw.Consumer = Fw.Consumer));
var Uw = () => {
    const e = [],
        t = function (t) {
            y_(
                `${v_}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
            );
            const r = [];
            return (
                ub(e, (e, i) => {
                    if (ab.und(t)) r.push(e.start());
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
            return (ub(e, (e) => e.pause(...arguments)), this);
        }),
        (t.resume = function () {
            return (ub(e, (e) => e.resume(...arguments)), this);
        }),
        (t.set = function (t) {
            ub(e, (e, n) => {
                const r = ab.fun(t) ? t(n, e) : t;
                r && e.set(r);
            });
        }),
        (t.start = function (t) {
            const n = [];
            return (
                ub(e, (e, r) => {
                    if (ab.und(t)) n.push(e.start());
                    else {
                        const i = this._getProps(t, e, r);
                        i && n.push(e.start(i));
                    }
                }),
                n
            );
        }),
        (t.stop = function () {
            return (ub(e, (e) => e.stop(...arguments)), this);
        }),
        (t.update = function (t) {
            return (ub(e, (e, n) => e.update(this._getProps(t, e, n))), this);
        }));
    const n = function (e, t, n) {
        return ab.fun(e) ? e(n, t) : e;
    };
    return ((t._getProps = n), t);
};
function Bw(e, t) {
    const n = ab.fun(e),
        [[r], i] = (function (e, t, n) {
            const r = ab.fun(t) && t;
            r && !n && (n = []);
            const i = z.useMemo(() => (r || 3 == arguments.length ? Uw() : void 0), []),
                o = z.useRef(0),
                a = S_(),
                s = z.useMemo(
                    () => ({
                        ctrls: [],
                        queue: [],
                        flush(e, t) {
                            const n = Vw(e, t);
                            return o.current > 0 && !s.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                                ? Rw(e, t)
                                : new Promise((r) => {
                                      (Iw(e, n),
                                          s.queue.push(() => {
                                              r(Rw(e, t));
                                          }),
                                          a());
                                  });
                        },
                    }),
                    [],
                ),
                u = z.useRef([...s.ctrls]),
                l = [],
                c = x_(e) || 0;
            function f(e, n) {
                for (let i = e; i < n; i++) {
                    const e = u.current[i] || (u.current[i] = new Tw(null, s.flush)),
                        n = r ? r(i, e) : t[i];
                    n && (l[i] = Ow(n));
                }
            }
            (z.useMemo(() => {
                (ub(u.current.slice(e, c), (e) => {
                    (!(function (e, t) {
                        var n;
                        (null == (n = e.ref) || n.delete(e), null == t || t.delete(e));
                    })(e, i),
                        e.stop(!0));
                }),
                    (u.current.length = e),
                    f(c, e));
            }, [e]),
                z.useMemo(() => {
                    f(0, Math.min(c, e));
                }, n));
            const d = u.current.map((e, t) => Vw(e, l[t])),
                h = z.useContext(zw),
                p = x_(h),
                v =
                    h !== p &&
                    (function (e) {
                        for (const t in e) return !0;
                        return !1;
                    })(h);
            (__(() => {
                (o.current++, (s.ctrls = u.current));
                const { queue: e } = s;
                (e.length && ((s.queue = []), ub(e, (e) => e())),
                    ub(u.current, (e, t) => {
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
                k_(() => () => {
                    ub(s.ctrls, (e) => e.stop(!0));
                }));
            const m = d.map((e) => ({ ...e }));
            return i ? [m, i] : m;
        })(1, n ? e : [e], n ? [] : t);
    return n || 2 == arguments.length ? [r, i] : r;
}
var $w = class extends hw {
    constructor(e, t) {
        (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = Gb(...t)));
        const n = this._get(),
            r = M_(n);
        A_(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        (sb(t, this.get()) || (E_(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && Kw(this._active) && Ww(this));
    }
    _get() {
        const e = ab.arr(this.source) ? this.source.map(Yb) : cb(Yb(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !Kw(this._active) &&
            ((this.idle = !1),
            ub(C_(this), (e) => {
                e.done = !1;
            }),
            ib.skipAnimation ? (Fy.batchedUpdates(() => this.advance()), Ww(this)) : Ob.start(this));
    }
    _attach() {
        let e = 1;
        (ub(cb(this.source), (t) => {
            (Xb(t) && n_(t, this), fw(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (ub(cb(this.source), (e) => {
            Xb(e) && r_(e, this);
        }),
            this._active.clear(),
            Ww(this));
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = cb(this.source).reduce((e, t) => Math.max(e, (fw(t) ? t.priority : 0) + 1), 0));
    }
};
function qw(e) {
    return !1 !== e.idle;
}
function Kw(e) {
    return !e.size || Array.from(e).every(qw);
}
function Ww(e) {
    e.idle ||
        ((e.idle = !0),
        ub(C_(e), (e) => {
            e.done = !0;
        }),
        Zb(e, { type: 'idle', parent: e }));
}
ib.assign({ createStringInterpolator: p_, to: (e, t) => new $w(e, t) });
var Gw = /^--/;
function Hw(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || Gw.test(e) || (Xw.hasOwnProperty(e) && Xw[e])
          ? ('' + t).trim()
          : t + 'px';
}
var Qw = {};
var Xw = {
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
    Yw = ['Webkit', 'Ms', 'Moz', 'O'];
Xw = Object.keys(Xw).reduce(
    (e, t) => (Yw.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    Xw,
);
var Jw = /^(matrix|translate|scale|rotate|skew)/,
    Zw = /^(translate)/,
    eS = /^(rotate|skew)/,
    tS = (e, t) => (ab.num(e) && 0 !== e ? e + t : e),
    nS = (e, t) => (ab.arr(e) ? e.every((e) => nS(e, t)) : ab.num(e) ? e === t : parseFloat(e) === t),
    rS = class extends V_ {
        constructor({ x: e, y: t, z: n, ...r }) {
            const i = [],
                o = [];
            ((e || t || n) &&
                (i.push([e || 0, t || 0, n || 0]),
                o.push((e) => [`translate3d(${e.map((e) => tS(e, 'px')).join(',')})`, nS(e, 0)])),
                lb(r, (e, t) => {
                    if ('transform' === t) (i.push([e || '']), o.push((e) => [e, '' === e]));
                    else if (Jw.test(t)) {
                        if ((delete r[t], ab.und(e))) return;
                        const n = Zw.test(t) ? 'px' : eS.test(t) ? 'deg' : '';
                        (i.push(cb(e)),
                            o.push(
                                'rotate3d' === t
                                    ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${tS(i, n)})`, nS(i, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => tS(e, n)).join(',')})`,
                                          nS(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                i.length && (r.transform = new iS(i, o)),
                super(r));
        }
    },
    iS = class extends e_ {
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
                ub(this.inputs, (n, r) => {
                    const i = Yb(n[0]),
                        [o, a] = this.transforms[r](ab.arr(i) ? i : n.map(Yb));
                    ((e += ' ' + o), (t = t && a));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && ub(this.inputs, (e) => ub(e, (e) => Xb(e) && n_(e, this)));
        }
        observerRemoved(e) {
            0 == e && ub(this.inputs, (e) => ub(e, (e) => Xb(e) && r_(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), Zb(this, e));
        }
    };
ib.assign({
    batchedUpdates: zf.unstable_batchedUpdates,
    createStringInterpolator: p_,
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
var oS = ((
    e,
    {
        applyAnimatedValues: t = () => !1,
        createAnimatedStyle: n = (e) => new V_(e),
        getComponentProps: r = (e) => e,
    } = {},
) => {
    const i = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
        o = (e) => {
            const t = U_(e) || 'Anonymous';
            return (
                ((e = ab.str(e) ? o[e] || (o[e] = D_(e, i)) : e[F_] || (e[F_] = D_(e, i))).displayName =
                    `Animated(${t})`),
                e
            );
        };
    return (
        lb(e, (t, n) => {
            (ab.arr(e) && (n = U_(t)), (o[n] = o(t)));
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
                    n || e.hasAttribute(t) ? t : Qw[t] || (Qw[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                );
            void 0 !== i && (e.textContent = i);
            for (const f in r)
                if (r.hasOwnProperty(f)) {
                    const t = Hw(f, r[f]);
                    Gw.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                }
            (c.forEach((t, n) => {
                e.setAttribute(t, l[n]);
            }),
                void 0 !== o && (e.scrollTop = o),
                void 0 !== a && (e.scrollLeft = a),
                void 0 !== s && e.setAttribute('viewBox', s));
        },
        createAnimatedStyle: (e) => new rS(e),
        getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
    },
).animated;
function aS(e) {
    var t,
        n,
        r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
        if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = aS(e[t])) && (r && (r += ' '), (r += n));
        else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
}
const sS = (e) => ('boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e),
    uS = function () {
        for (var e, t, n = 0, r = ''; n < arguments.length; )
            (e = arguments[n++]) && (t = aS(e)) && (r && (r += ' '), (r += t));
        return r;
    },
    lS = (e, t) => (n) => {
        var r;
        if (null == (null == t ? void 0 : t.variants))
            return uS(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        const { variants: i, defaultVariants: o } = t,
            a = Object.keys(i).map((e) => {
                const t = null == n ? void 0 : n[e],
                    r = null == o ? void 0 : o[e];
                if (null === t) return null;
                const a = sS(t) || sS(r);
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
        return uS(e, a, u, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
    };
function cS(e) {
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
var fS = {};
function dS() {
    return 'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : fS;
}
var hS = Object.assign,
    pS = Object.getOwnPropertyDescriptor,
    vS = Object.defineProperty,
    mS = Object.prototype,
    gS = [];
Object.freeze(gS);
var yS = {};
Object.freeze(yS);
var bS = 'undefined' != typeof Proxy,
    _S = Object.toString();
function wS() {
    bS || cS('Proxy not available');
}
function SS(e) {
    var t = !1;
    return function () {
        if (!t) return ((t = !0), e.apply(this, arguments));
    };
}
var kS = function () {};
function OS(e) {
    return 'function' == typeof e;
}
function xS(e) {
    switch (typeof e) {
        case 'string':
        case 'symbol':
        case 'number':
            return !0;
    }
    return !1;
}
function PS(e) {
    return null !== e && 'object' == typeof e;
}
function ES(e) {
    if (!PS(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (null == t) return !0;
    var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n.toString() === _S;
}
function AS(e) {
    var t = null == e ? void 0 : e.constructor;
    return !!t && ('GeneratorFunction' === t.name || 'GeneratorFunction' === t.displayName);
}
function CS(e, t, n) {
    vS(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function jS(e, t, n) {
    vS(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function TS(e, t) {
    var n = 'isMobX' + e;
    return (
        (t.prototype[n] = !0),
        function (e) {
            return PS(e) && !0 === e[n];
        }
    );
}
function RS(e) {
    return e instanceof Map;
}
function NS(e) {
    return e instanceof Set;
}
var VS = void 0 !== Object.getOwnPropertySymbols;
var IS =
    'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : VS
          ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            }
          : Object.getOwnPropertyNames;
function LS(e) {
    return null === e ? null : 'object' == typeof e ? '' + e : e;
}
function MS(e, t) {
    return mS.hasOwnProperty.call(e, t);
}
var DS =
    Object.getOwnPropertyDescriptors ||
    function (e) {
        var t = {};
        return (
            IS(e).forEach(function (n) {
                t[n] = pS(e, n);
            }),
            t
        );
    };
function zS(e, t) {
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
function FS(e, t, n) {
    return (t && zS(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e);
}
function US() {
    return (
        (US = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        US.apply(this, arguments)
    );
}
function BS(e, t) {
    ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), $S(e, t));
}
function $S(e, t) {
    return ($S = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return ((e.__proto__ = t), e);
          })(e, t);
}
function qS(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function KS(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function WS(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
        Array.isArray(e) ||
        (n = (function (e, t) {
            if (e) {
                if ('string' == typeof e) return KS(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? KS(e, t)
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
var GS = Symbol('mobx-stored-annotations');
function HS(e) {
    return Object.assign(function (t, n) {
        if (XS(n)) return e.decorate_20223_(t, n);
        QS(t, n, e);
    }, e);
}
function QS(e, t, n) {
    (MS(e, GS) || CS(e, GS, US({}, e[GS])),
        (function (e) {
            return e.annotationType_ === ik;
        })(n) || (e[GS][t] = n));
}
function XS(e) {
    return 'object' == typeof e && 'string' == typeof e.kind;
}
var YS = Symbol('mobx administration'),
    JS = (function () {
        function e(e) {
            (void 0 === e && (e = 'Atom'),
                (this.name_ = void 0),
                (this.isPendingUnobservation_ = !1),
                (this.isBeingObserved_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = rO.NOT_TRACKING_),
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
                return EO(this);
            }),
            (t.reportChanged = function () {
                (xO(), AO(this), PO());
            }),
            (t.toString = function () {
                return this.name_;
            }),
            e
        );
    })(),
    ZS = TS('Atom', JS);
function ek(e, t, n) {
    (void 0 === t && (t = kS), void 0 === n && (n = kS));
    var r,
        i = new JS(e);
    return (t !== kS && JO(QO, i, t, r), n !== kS && YO(i, n), i);
}
var tk = {
    structural: function (e, t) {
        return yP(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
};
function nk(e, t, n) {
    return px(e)
        ? e
        : Array.isArray(e)
          ? Uk.array(e, { name: n })
          : ES(e)
            ? Uk.object(e, void 0, { name: n })
            : RS(e)
              ? Uk.map(e, { name: n })
              : NS(e)
                ? Uk.set(e, { name: n })
                : 'function' != typeof e || KO(e) || fx(e)
                  ? e
                  : AS(e)
                    ? lx(e)
                    : qO(n, e);
}
function rk(e) {
    return e;
}
var ik = 'override';
function ok(e, t) {
    return { annotationType_: e, options_: t, make_: ak, extend_: sk, decorate_20223_: uk };
}
function ak(e, t, n, r) {
    var i;
    if (null != (i = this.options_) && i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (KO(n.value)) return 1;
    var o = lk(e, this, t, n, !1);
    return (vS(r, t, o), 2);
}
function sk(e, t, n, r) {
    var i = lk(e, this, t, n);
    return e.defineProperty_(t, i, r);
}
function uk(e, t) {
    var n = t.kind,
        r = t.name,
        i = t.addInitializer,
        o = this;
    if ('field' != n) {
        var a, s, u, l, c, f;
        if ('method' == n)
            return (
                KO(e) ||
                    ((s = e),
                    (e = Yk(
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
        cS(
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
            QS(this, r, o);
        });
}
function lk(e, t, n, r, i) {
    var o, a, s, u, l, c, f, d;
    (void 0 === i && (i = wO.safeDescriptors), (d = r), t.annotationType_, d.value);
    var h,
        p = r.value;
    null != (o = t.options_) && o.bound && (p = p.bind(null != (h = e.proxy_) ? h : e.target_));
    return {
        value: Yk(
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
function ck(e, t) {
    return { annotationType_: e, options_: t, make_: fk, extend_: dk, decorate_20223_: hk };
}
function fk(e, t, n, r) {
    var i;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (
        null != (i = this.options_) &&
        i.bound &&
        (!MS(e.target_, t) || !fx(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
    )
        return 0;
    if (fx(n.value)) return 1;
    var o = pk(e, this, t, n, !1, !1);
    return (vS(r, t, o), 2);
}
function dk(e, t, n, r) {
    var i,
        o = pk(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
    return e.defineProperty_(t, o, r);
}
function hk(e, t) {
    var n,
        r = t.name,
        i = t.addInitializer;
    return (
        fx(e) || (e = lx(e)),
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
function pk(e, t, n, r, i, o) {
    var a;
    (void 0 === o && (o = wO.safeDescriptors), (a = r), t.annotationType_, a.value);
    var s,
        u = r.value;
    (fx(u) || (u = lx(u)), i) && ((u = u.bind(null != (s = e.proxy_) ? s : e.target_)).isMobXFlow = !0);
    return { value: u, configurable: !o || e.isPlainObject_, enumerable: !1, writable: !o };
}
function vk(e, t) {
    return { annotationType_: e, options_: t, make_: mk, extend_: gk, decorate_20223_: yk };
}
function mk(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function gk(e, t, n, r) {
    var i;
    return (
        (i = n),
        this.annotationType_,
        i.get,
        e.defineComputedProperty_(t, US({}, this.options_, { get: n.get, set: n.set }), r)
    );
}
function yk(e, t) {
    var n = this,
        r = t.name;
    return (
        (0, t.addInitializer)(function () {
            var t = Zx(this)[YS],
                i = US({}, n.options_, { get: e, context: this });
            (i.name || (i.name = 'ObservableObject.' + r.toString()), t.values_.set(r, new oO(i)));
        }),
        function () {
            return this[YS].getObservablePropValue_(r);
        }
    );
}
function bk(e, t) {
    return { annotationType_: e, options_: t, make_: _k, extend_: wk, decorate_20223_: Sk };
}
function _k(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function wk(e, t, n, r) {
    var i, o;
    return (
        this.annotationType_,
        e.defineObservableProperty_(
            t,
            n.value,
            null != (i = null == (o = this.options_) ? void 0 : o.enhancer) ? i : nk,
            r,
        )
    );
}
function Sk(e, t) {
    var n = this,
        r = t.kind,
        i = t.name,
        o = new WeakSet();
    function a(e, t) {
        var r,
            a,
            s = Zx(e)[YS],
            u = new nO(
                t,
                null != (r = null == (a = n.options_) ? void 0 : a.enhancer) ? r : nk,
                'ObservableObject.' + i.toString(),
                !1,
            );
        (s.values_.set(i, u), o.add(e));
    }
    if ('accessor' == r)
        return {
            get: function () {
                return (o.has(this) || a(this, e.get.call(this)), this[YS].getObservablePropValue_(i));
            },
            set: function (e) {
                return (o.has(this) || a(this, e), this[YS].setObservablePropValue_(i, e));
            },
            init: function (e) {
                return (o.has(this) || a(this, e), e);
            },
        };
}
var kk = 'true',
    Ok = xk();
function xk(e) {
    return { annotationType_: kk, options_: e, make_: Pk, extend_: Ek, decorate_20223_: Ak };
}
function Pk(e, t, n, r) {
    var i, o, a, s;
    if (n.get) return Kk.make_(e, t, n, r);
    if (n.set) {
        var u = Yk(t.toString(), n.set);
        return r === e.target_
            ? null === e.defineProperty_(t, { configurable: !wO.safeDescriptors || e.isPlainObject_, set: u })
                ? 0
                : 2
            : (vS(r, t, { configurable: !0, set: u }), 2);
    }
    if (r !== e.target_ && 'function' == typeof n.value)
        return AS(n.value)
            ? (null != (s = this.options_) && s.autoBind ? lx.bound : lx).make_(e, t, n, r)
            : (null != (a = this.options_) && a.autoBind ? qO.bound : qO).make_(e, t, n, r);
    var l,
        c = !1 === (null == (i = this.options_) ? void 0 : i.deep) ? Uk.ref : Uk;
    'function' == typeof n.value &&
        null != (o = this.options_) &&
        o.autoBind &&
        (n.value = n.value.bind(null != (l = e.proxy_) ? l : e.target_));
    return c.make_(e, t, n, r);
}
function Ek(e, t, n, r) {
    var i, o, a;
    if (n.get) return Kk.extend_(e, t, n, r);
    if (n.set)
        return e.defineProperty_(
            t,
            { configurable: !wO.safeDescriptors || e.isPlainObject_, set: Yk(t.toString(), n.set) },
            r,
        );
    'function' == typeof n.value &&
        null != (i = this.options_) &&
        i.autoBind &&
        (n.value = n.value.bind(null != (a = e.proxy_) ? a : e.target_));
    return (!1 === (null == (o = this.options_) ? void 0 : o.deep) ? Uk.ref : Uk).extend_(e, t, n, r);
}
function Ak(e, t) {
    cS("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Ck = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
function jk(e) {
    return e || Ck;
}
Object.freeze(Ck);
var Tk = bk('observable'),
    Rk = bk('observable.ref', { enhancer: rk }),
    Nk = bk('observable.shallow', {
        enhancer: function (e, t, n) {
            return null == e || nP(e) || zx(e) || Wx(e) || Qx(e)
                ? e
                : Array.isArray(e)
                  ? Uk.array(e, { name: n, deep: !1 })
                  : ES(e)
                    ? Uk.object(e, void 0, { name: n, deep: !1 })
                    : RS(e)
                      ? Uk.map(e, { name: n, deep: !1 })
                      : NS(e)
                        ? Uk.set(e, { name: n, deep: !1 })
                        : void 0;
        },
    }),
    Vk = bk('observable.struct', {
        enhancer: function (e, t) {
            return yP(e, t) ? t : e;
        },
    }),
    Ik = HS(Tk);
function Lk(e) {
    return !0 === e.deep
        ? nk
        : !1 === e.deep
          ? rk
          : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
            ? n
            : nk;
    var t, n, r;
}
function Mk(e, t, n) {
    return XS(t)
        ? Tk.decorate_20223_(e, t)
        : xS(t)
          ? void QS(e, t, Tk)
          : px(e)
            ? e
            : ES(e)
              ? Uk.object(e, t, n)
              : Array.isArray(e)
                ? Uk.array(e, t)
                : RS(e)
                  ? Uk.map(e, t)
                  : NS(e)
                    ? Uk.set(e, t)
                    : 'object' == typeof e && null !== e
                      ? e
                      : Uk.box(e, t);
}
hS(Mk, Ik);
var Dk,
    zk,
    Fk = {
        box: function (e, t) {
            var n = jk(t);
            return new nO(e, Lk(n), n.name, !0, n.equals);
        },
        array: function (e, t) {
            var n = jk(t);
            return (!1 === wO.useProxies || !1 === n.proxy ? dP : jx)(e, Lk(n), n.name);
        },
        map: function (e, t) {
            var n = jk(t);
            return new Kx(e, Lk(n), n.name);
        },
        set: function (e, t) {
            var n = jk(t);
            return new Hx(e, Lk(n), n.name);
        },
        object: function (e, t, n) {
            return mP(function () {
                return rx(
                    !1 === wO.useProxies || !1 === (null == n ? void 0 : n.proxy)
                        ? Zx({}, n)
                        : (function (e, t) {
                              var n, r;
                              return (
                                  wS(),
                                  (e = Zx(e, t)),
                                  null != (r = (n = e[YS]).proxy_) ? r : (n.proxy_ = new Proxy(e, yx))
                              );
                          })({}, n),
                    e,
                    t,
                );
            });
        },
        ref: HS(Rk),
        shallow: HS(Nk),
        deep: Ik,
        struct: HS(Vk),
    },
    Uk = hS(Mk, Fk),
    Bk = 'computed',
    $k = vk(Bk),
    qk = vk('computed.struct', { equals: tk.structural }),
    Kk = function (e, t) {
        if (XS(t)) return $k.decorate_20223_(e, t);
        if (xS(t)) return QS(e, t, $k);
        if (ES(e)) return HS(vk(Bk, e));
        var n = ES(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new oO(n));
    };
(Object.assign(Kk, $k), (Kk.struct = HS(qk)));
var Wk,
    Gk = 0,
    Hk = 1,
    Qk = null != (Dk = null == (zk = pS(function () {}, 'name')) ? void 0 : zk.configurable) && Dk,
    Xk = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
function Yk(e, t, n, r) {
    function i() {
        return Jk(e, n, t, r || this, arguments);
    }
    return (
        void 0 === n && (n = !1),
        (i.isMobxAction = !0),
        (i.toString = function () {
            return t.toString();
        }),
        Qk && ((Xk.value = e), vS(i, 'name', Xk)),
        i
    );
}
function Jk(e, t, n, r, i) {
    var o = (function (e, t, n, r) {
        var i = !1,
            o = 0,
            a = wO.trackingDerivation,
            s = !t || !a;
        xO();
        var u = wO.allowStateChanges;
        s && (hO(), (u = Zk(!0)));
        var l = vO(!0),
            c = {
                runAsAction_: s,
                prevDerivation_: a,
                prevAllowStateChanges_: u,
                prevAllowStateReads_: l,
                notifySpy_: i,
                startTime_: o,
                actionId_: Hk++,
                parentActionId_: Gk,
            };
        return ((Gk = c.actionId_), c);
    })(0, t);
    try {
        return n.apply(r, i);
    } catch (a) {
        throw ((o.error_ = a), a);
    } finally {
        !(function (e) {
            Gk !== e.actionId_ && cS(30);
            ((Gk = e.parentActionId_), void 0 !== e.error_ && (wO.suppressReactionErrors = !0));
            (eO(e.prevAllowStateChanges_), mO(e.prevAllowStateReads_), PO(), e.runAsAction_ && pO(e.prevDerivation_));
            wO.suppressReactionErrors = !1;
        })(o);
    }
}
function Zk(e) {
    var t = wO.allowStateChanges;
    return ((wO.allowStateChanges = e), t);
}
function eO(e) {
    wO.allowStateChanges = e;
}
Wk = Symbol.toPrimitive;
var tO,
    nO = (function (e) {
        function t(t, n, r, i, o) {
            var a;
            return (
                void 0 === r && (r = 'ObservableValue'),
                void 0 === o && (o = tk.default),
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
        BS(t, e);
        var n = t.prototype;
        return (
            (n.dehanceValue = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
                (this.value_, (e = this.prepareNewValue_(e)) !== wO.UNCHANGED && this.setNewValue_(e));
            }),
            (n.prepareNewValue_ = function (e) {
                if (bx(this)) {
                    var t = wx(this, { object: this, type: Ex, newValue: e });
                    if (!t) return wO.UNCHANGED;
                    e = t.newValue;
                }
                return (
                    (e = this.enhancer(e, this.value_, this.name_)),
                    this.equals(this.value_, e) ? wO.UNCHANGED : e
                );
            }),
            (n.setNewValue_ = function (e) {
                var t = this.value_;
                ((this.value_ = e),
                    this.reportChanged(),
                    Sx(this) && Ox(this, { type: Ex, object: this, newValue: e, oldValue: t }));
            }),
            (n.get = function () {
                return (this.reportObserved(), this.dehanceValue(this.value_));
            }),
            (n.intercept_ = function (e) {
                return _x(this, e);
            }),
            (n.observe_ = function (e, t) {
                return (
                    t &&
                        e({
                            observableKind: 'value',
                            debugObjectName: this.name_,
                            object: this,
                            type: Ex,
                            newValue: this.value_,
                            oldValue: void 0,
                        }),
                    kx(this, e)
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
                return LS(this.get());
            }),
            (n[Wk] = function () {
                return this.valueOf();
            }),
            t
        );
    })(JS);
tO = Symbol.toPrimitive;
var rO,
    iO,
    oO = (function () {
        function e(e) {
            ((this.dependenciesState_ = rO.NOT_TRACKING_),
                (this.observing_ = []),
                (this.newObserving_ = null),
                (this.isBeingObserved_ = !1),
                (this.isPendingUnobservation_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = rO.UP_TO_DATE_),
                (this.unboundDepsCount_ = 0),
                (this.value_ = new sO(null)),
                (this.name_ = void 0),
                (this.triggeredBy_ = void 0),
                (this.isComputing_ = !1),
                (this.isRunningSetter_ = !1),
                (this.derivation = void 0),
                (this.setter_ = void 0),
                (this.isTracing_ = iO.NONE),
                (this.scope_ = void 0),
                (this.equals_ = void 0),
                (this.requiresReaction_ = void 0),
                (this.keepAlive_ = void 0),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                e.get || cS(31),
                (this.derivation = e.get),
                (this.name_ = e.name || 'ComputedValue'),
                e.set && (this.setter_ = Yk('ComputedValue-setter', e.set)),
                (this.equals_ = e.equals || (e.compareStructural || e.struct ? tk.structural : tk.default)),
                (this.scope_ = e.context),
                (this.requiresReaction_ = e.requiresReaction),
                (this.keepAlive_ = !!e.keepAlive));
        }
        var t = e.prototype;
        return (
            (t.onBecomeStale_ = function () {
                !(function (e) {
                    if (e.lowestObserverState_ !== rO.UP_TO_DATE_) return;
                    ((e.lowestObserverState_ = rO.POSSIBLY_STALE_),
                        e.observers_.forEach(function (e) {
                            e.dependenciesState_ === rO.UP_TO_DATE_ &&
                                ((e.dependenciesState_ = rO.POSSIBLY_STALE_), e.onBecomeStale_());
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
                    (this.isComputing_ && cS(32, this.name_, this.derivation),
                    0 !== wO.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                ) {
                    if ((EO(this), lO(this))) {
                        var e = wO.trackingContext;
                        (this.keepAlive_ && !e && (wO.trackingContext = this),
                            this.trackAndCompute() &&
                                (function (e) {
                                    if (e.lowestObserverState_ === rO.STALE_) return;
                                    ((e.lowestObserverState_ = rO.STALE_),
                                        e.observers_.forEach(function (t) {
                                            t.dependenciesState_ === rO.POSSIBLY_STALE_
                                                ? (t.dependenciesState_ = rO.STALE_)
                                                : t.dependenciesState_ === rO.UP_TO_DATE_ &&
                                                  (e.lowestObserverState_ = rO.UP_TO_DATE_);
                                        }));
                                })(this),
                            (wO.trackingContext = e));
                    }
                } else lO(this) && (this.warnAboutUntrackedRead_(), xO(), (this.value_ = this.computeValue_(!1)), PO());
                var t = this.value_;
                if (uO(t)) throw t.cause;
                return t;
            }),
            (t.set = function (e) {
                if (this.setter_) {
                    (this.isRunningSetter_ && cS(33, this.name_), (this.isRunningSetter_ = !0));
                    try {
                        this.setter_.call(this.scope_, e);
                    } finally {
                        this.isRunningSetter_ = !1;
                    }
                } else cS(34, this.name_);
            }),
            (t.trackAndCompute = function () {
                var e = this.value_,
                    t = this.dependenciesState_ === rO.NOT_TRACKING_,
                    n = this.computeValue_(!0),
                    r = t || uO(e) || uO(n) || !this.equals_(e, n);
                return (r && (this.value_ = n), r);
            }),
            (t.computeValue_ = function (e) {
                this.isComputing_ = !0;
                var t,
                    n = Zk(!1);
                if (e) t = cO(this, this.derivation, this.scope_);
                else if (!0 === wO.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                else
                    try {
                        t = this.derivation.call(this.scope_);
                    } catch (r) {
                        t = new sO(r);
                    }
                return (eO(n), (this.isComputing_ = !1), t);
            }),
            (t.suspend_ = function () {
                this.keepAlive_ || (fO(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
                var n = this,
                    r = !0,
                    i = void 0;
                return (function (e, t) {
                    var n, r, i, o, a;
                    void 0 === t && (t = yS);
                    var s,
                        u = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun';
                    if (t.scheduler || t.delay) {
                        var l = GO(t),
                            c = !1;
                        s = new CO(
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
                        s = new CO(
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
                        var a = hO();
                        (e({
                            observableKind: 'computed',
                            debugObjectName: n.name_,
                            type: Ex,
                            object: n,
                            newValue: o,
                            oldValue: i,
                        }),
                            pO(a));
                    }
                    ((r = !1), (i = o));
                });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
                return this.name_ + '[' + this.derivation.toString() + ']';
            }),
            (t.valueOf = function () {
                return LS(this.get());
            }),
            (t[tO] = function () {
                return this.valueOf();
            }),
            e
        );
    })(),
    aO = TS('ComputedValue', oO);
(!(function (e) {
    ((e[(e.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
        (e[(e.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
        (e[(e.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
        (e[(e.STALE_ = 2)] = 'STALE_'));
})(rO || (rO = {})),
    (function (e) {
        ((e[(e.NONE = 0)] = 'NONE'), (e[(e.LOG = 1)] = 'LOG'), (e[(e.BREAK = 2)] = 'BREAK'));
    })(iO || (iO = {})));
var sO = function (e) {
    ((this.cause = void 0), (this.cause = e));
};
function uO(e) {
    return e instanceof sO;
}
function lO(e) {
    switch (e.dependenciesState_) {
        case rO.UP_TO_DATE_:
            return !1;
        case rO.NOT_TRACKING_:
        case rO.STALE_:
            return !0;
        case rO.POSSIBLY_STALE_:
            for (var t = vO(!0), n = hO(), r = e.observing_, i = r.length, o = 0; o < i; o++) {
                var a = r[o];
                if (aO(a)) {
                    if (wO.disableErrorBoundaries) a.get();
                    else
                        try {
                            a.get();
                        } catch (s) {
                            return (pO(n), mO(t), !0);
                        }
                    if (e.dependenciesState_ === rO.STALE_) return (pO(n), mO(t), !0);
                }
            }
            return (gO(e), pO(n), mO(t), !1);
    }
}
function cO(e, t, n) {
    var r = vO(!0);
    (gO(e),
        (e.newObserving_ = new Array(e.observing_.length + 100)),
        (e.unboundDepsCount_ = 0),
        (e.runId_ = ++wO.runId));
    var i,
        o = wO.trackingDerivation;
    if (((wO.trackingDerivation = e), wO.inBatch++, !0 === wO.disableErrorBoundaries)) i = t.call(n);
    else
        try {
            i = t.call(n);
        } catch (a) {
            i = new sO(a);
        }
    return (
        wO.inBatch--,
        (wO.trackingDerivation = o),
        (function (e) {
            for (
                var t = e.observing_,
                    n = (e.observing_ = e.newObserving_),
                    r = rO.UP_TO_DATE_,
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
                (0 === u.diffValue_ && kO(u, e), (u.diffValue_ = 0));
            }
            for (; i--; ) {
                var l = n[i];
                1 === l.diffValue_ && ((l.diffValue_ = 0), SO(l, e));
            }
            r !== rO.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        mO(r),
        i
    );
}
function fO(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) kO(t[n], e);
    e.dependenciesState_ = rO.NOT_TRACKING_;
}
function dO(e) {
    var t = hO();
    try {
        return e();
    } finally {
        pO(t);
    }
}
function hO() {
    var e = wO.trackingDerivation;
    return ((wO.trackingDerivation = null), e);
}
function pO(e) {
    wO.trackingDerivation = e;
}
function vO(e) {
    var t = wO.allowStateReads;
    return ((wO.allowStateReads = e), t);
}
function mO(e) {
    wO.allowStateReads = e;
}
function gO(e) {
    if (e.dependenciesState_ !== rO.UP_TO_DATE_) {
        e.dependenciesState_ = rO.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = rO.UP_TO_DATE_;
    }
}
var yO = function () {
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
    bO = !0,
    _O = !1,
    wO = (function () {
        var e = dS();
        return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (bO = !1),
            e.__mobxGlobals && e.__mobxGlobals.version !== new yO().version && (bO = !1),
            bO
                ? e.__mobxGlobals
                    ? ((e.__mobxInstanceCount += 1),
                      e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                      e.__mobxGlobals)
                    : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new yO()))
                : (setTimeout(function () {
                      _O || cS(35);
                  }, 1),
                  new yO())
        );
    })();
function SO(e, t) {
    (e.observers_.add(t),
        e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_));
}
function kO(e, t) {
    (e.observers_.delete(t), 0 === e.observers_.size && OO(e));
}
function OO(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), wO.pendingUnobservations.push(e));
}
function xO() {
    wO.inBatch++;
}
function PO() {
    if (0 == --wO.inBatch) {
        RO();
        for (var e = wO.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            ((n.isPendingUnobservation_ = !1),
                0 === n.observers_.size &&
                    (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof oO && n.suspend_()));
        }
        wO.pendingUnobservations = [];
    }
}
function EO(e) {
    var t = wO.trackingDerivation;
    return null !== t
        ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ && wO.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
          e.isBeingObserved_)
        : (0 === e.observers_.size && wO.inBatch > 0 && OO(e), !1);
}
function AO(e) {
    e.lowestObserverState_ !== rO.STALE_ &&
        ((e.lowestObserverState_ = rO.STALE_),
        e.observers_.forEach(function (e) {
            (e.dependenciesState_ === rO.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = rO.STALE_));
        }));
}
var CO = (function () {
        function e(e, t, n, r) {
            (void 0 === e && (e = 'Reaction'),
                (this.name_ = void 0),
                (this.onInvalidate_ = void 0),
                (this.errorHandler_ = void 0),
                (this.requiresObservable_ = void 0),
                (this.observing_ = []),
                (this.newObserving_ = []),
                (this.dependenciesState_ = rO.NOT_TRACKING_),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.unboundDepsCount_ = 0),
                (this.isDisposed_ = !1),
                (this.isScheduled_ = !1),
                (this.isTrackPending_ = !1),
                (this.isRunning_ = !1),
                (this.isTracing_ = iO.NONE),
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
                this.isScheduled_ || ((this.isScheduled_ = !0), wO.pendingReactions.push(this), RO());
            }),
            (t.isScheduled = function () {
                return this.isScheduled_;
            }),
            (t.runReaction_ = function () {
                if (!this.isDisposed_) {
                    (xO(), (this.isScheduled_ = !1));
                    var e = wO.trackingContext;
                    if (((wO.trackingContext = this), lO(this))) {
                        this.isTrackPending_ = !0;
                        try {
                            this.onInvalidate_();
                        } catch (t) {
                            this.reportExceptionInDerivation_(t);
                        }
                    }
                    ((wO.trackingContext = e), PO());
                }
            }),
            (t.track = function (e) {
                if (!this.isDisposed_) {
                    (xO(), (this.isRunning_ = !0));
                    var t = wO.trackingContext;
                    wO.trackingContext = this;
                    var n = cO(this, e, void 0);
                    ((wO.trackingContext = t),
                        (this.isRunning_ = !1),
                        (this.isTrackPending_ = !1),
                        this.isDisposed_ && fO(this),
                        uO(n) && this.reportExceptionInDerivation_(n.cause),
                        PO());
                }
            }),
            (t.reportExceptionInDerivation_ = function (e) {
                var t = this;
                if (this.errorHandler_) this.errorHandler_(e, this);
                else {
                    if (wO.disableErrorBoundaries) throw e;
                    var n = "[mobx] uncaught error in '" + this + "'";
                    (wO.suppressReactionErrors || console.error(n, e),
                        wO.globalReactionErrorHandlers.forEach(function (n) {
                            return n(e, t);
                        }));
                }
            }),
            (t.dispose = function () {
                this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (xO(), fO(this), PO()));
            }),
            (t.getDisposer_ = function (e) {
                var t = this,
                    n = function n() {
                        (t.dispose(), null == e || null == e.removeEventListener || e.removeEventListener('abort', n));
                    };
                return (null == e || null == e.addEventListener || e.addEventListener('abort', n), (n[YS] = this), n);
            }),
            (t.toString = function () {
                return 'Reaction[' + this.name_ + ']';
            }),
            (t.trace = function (e) {}),
            e
        );
    })(),
    jO = 100,
    TO = function (e) {
        return e();
    };
function RO() {
    wO.inBatch > 0 || wO.isRunningReactions || TO(NO);
}
function NO() {
    wO.isRunningReactions = !0;
    for (var e = wO.pendingReactions, t = 0; e.length > 0; ) {
        ++t === jO && (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
    }
    wO.isRunningReactions = !1;
}
var VO = TS('Reaction', CO);
var IO = 'action',
    LO = 'autoAction',
    MO = '<unnamed action>',
    DO = ok(IO),
    zO = ok('action.bound', { bound: !0 }),
    FO = ok(LO, { autoAction: !0 }),
    UO = ok('autoAction.bound', { autoAction: !0, bound: !0 });
function BO(e) {
    return function (t, n) {
        return OS(t)
            ? Yk(t.name || MO, t, e)
            : OS(n)
              ? Yk(t, n, e)
              : XS(n)
                ? (e ? FO : DO).decorate_20223_(t, n)
                : xS(n)
                  ? QS(t, n, e ? FO : DO)
                  : xS(t)
                    ? HS(ok(e ? LO : IO, { name: t, autoAction: e }))
                    : void 0;
    };
}
var $O = BO(!1);
Object.assign($O, DO);
var qO = BO(!0);
function KO(e) {
    return OS(e) && !0 === e.isMobxAction;
}
(Object.assign(qO, FO), ($O.bound = HS(zO)), (qO.bound = HS(UO)));
var WO = function (e) {
    return e();
};
function GO(e) {
    return e.scheduler
        ? e.scheduler
        : e.delay
          ? function (t) {
                return setTimeout(t, e.delay);
            }
          : WO;
}
function HO(e, t, n) {
    var r, i, o, a;
    void 0 === n && (n = yS);
    var s,
        u,
        l,
        c,
        f = null != (r = n.name) ? r : 'Reaction',
        d = $O(
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
        p = GO(n),
        v = !0,
        m = !1,
        g = n.compareStructural ? tk.structural : n.equals || tk.default,
        y = new CO(
            f,
            function () {
                v || h ? b() : m || ((m = !0), p(b));
            },
            n.onError,
            n.requiresObservable,
        );
    function b() {
        if (((m = !1), !y.isDisposed_)) {
            var t = !1;
            (y.track(function () {
                var n = (function (e, t) {
                    var n = Zk(e);
                    try {
                        return t();
                    } finally {
                        eO(n);
                    }
                })(!1, function () {
                    return e(y);
                });
                ((t = v || !g(l, n)), (c = l), (l = n));
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
var QO = 'onBO',
    XO = 'onBUO';
function YO(e, t, n) {
    return JO(XO, e, t, n);
}
function JO(e, t, n, r) {
    var i = hP(t),
        o = OS(r) ? r : n,
        a = e + 'L';
    return (
        i[a] ? i[a].add(o) : (i[a] = new Set([o])),
        function () {
            var e = i[a];
            e && (e.delete(o), 0 === e.size && delete i[a]);
        }
    );
}
var ZO = 'never',
    ex = 'always',
    tx = 'observed';
function nx(e) {
    !0 === e.isolateGlobalState &&
        (function () {
            if (((wO.pendingReactions.length || wO.inBatch || wO.isRunningReactions) && cS(36), (_O = !0), bO)) {
                var e = dS();
                (0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0), (wO = new yO()));
            }
        })();
    var t,
        n,
        r = e.useProxies,
        i = e.enforceActions;
    if (
        (void 0 !== r && (wO.useProxies = r === ex || (r !== ZO && 'undefined' != typeof Proxy)),
        'ifavailable' === r && (wO.verifyProxies = !0),
        void 0 !== i)
    ) {
        var o = i === ex ? ex : i === tx;
        ((wO.enforceActions = o), (wO.allowStateChanges = !0 !== o && o !== ex));
    }
    ([
        'computedRequiresReaction',
        'reactionRequiresObservable',
        'observableRequiresReaction',
        'disableErrorBoundaries',
        'safeDescriptors',
    ].forEach(function (t) {
        t in e && (wO[t] = !!e[t]);
    }),
        (wO.allowStateReads = !wO.observableRequiresReaction),
        e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = TO),
            (TO = function (e) {
                return t(function () {
                    return n(e);
                });
            })));
}
function rx(e, t, n, r) {
    var i = DS(t);
    return (
        mP(function () {
            var t = Zx(e, r)[YS];
            IS(i).forEach(function (e) {
                t.extend_(e, i[e], !n || !(e in n) || n[e]);
            });
        }),
        e
    );
}
function ix(e) {
    var t,
        n = { name: e.name_ };
    return (
        e.observing_ &&
            e.observing_.length > 0 &&
            (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(ix)),
        n
    );
}
var ox = 0;
function ax() {
    this.message = 'FLOW_CANCELLED';
}
ax.prototype = Object.create(Error.prototype);
var sx = ck('flow'),
    ux = ck('flow.bound', { bound: !0 }),
    lx = Object.assign(function (e, t) {
        if (XS(t)) return sx.decorate_20223_(e, t);
        if (xS(t)) return QS(e, t, sx);
        var n = e,
            r = n.name || '<unnamed flow>',
            i = function () {
                var e,
                    t = arguments,
                    i = ++ox,
                    o = $O(r + ' - runid: ' + i + ' - init', n).apply(this, t),
                    a = void 0,
                    s = new Promise(function (t, n) {
                        var s = 0;
                        function u(e) {
                            var t;
                            a = void 0;
                            try {
                                t = $O(r + ' - runid: ' + i + ' - yield ' + s++, o.next).call(o, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function l(e) {
                            var t;
                            a = void 0;
                            try {
                                t = $O(r + ' - runid: ' + i + ' - yield ' + s++, o.throw).call(o, e);
                            } catch (u) {
                                return n(u);
                            }
                            c(t);
                        }
                        function c(e) {
                            if (!OS(null == e ? void 0 : e.then))
                                return e.done ? t(e.value) : (a = Promise.resolve(e.value)).then(u, l);
                            e.then(c, n);
                        }
                        ((e = n), u(void 0));
                    });
                return (
                    (s.cancel = $O(r + ' - runid: ' + i + ' - cancel', function () {
                        try {
                            a && cx(a);
                            var t = o.return(void 0),
                                n = Promise.resolve(t.value);
                            (n.then(kS, kS), cx(n), e(new ax()));
                        } catch (r) {
                            e(r);
                        }
                    })),
                    s
                );
            };
        return ((i.isMobXFlow = !0), i);
    }, sx);
function cx(e) {
    OS(e.cancel) && e.cancel();
}
function fx(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function dx(e, t) {
    if (void 0 === t) return aO(e);
    if (!1 === nP(e)) return !1;
    if (!e[YS].values_.has(t)) return !1;
    var n = hP(e, t);
    return aO(n);
}
function hx(e, t) {
    return dx(e, t);
}
function px(e) {
    return (function (e, t) {
        return !!e && (nP(e) || !!e[YS] || ZS(e) || VO(e) || aO(e));
    })(e);
}
function vx(e, t, n, r) {
    return OS(n)
        ? (function (e, t, n, r) {
              return pP(e, t).observe_(n, r);
          })(e, t, n, r)
        : (function (e, t, n) {
              return pP(e).observe_(t, n);
          })(e, t, n);
}
function mx(e, t) {
    (void 0 === t && (t = void 0), xO());
    try {
        return e.apply(t);
    } finally {
        PO();
    }
}
function gx(e) {
    return e[YS];
}
lx.bound = HS(ux);
var yx = {
    has: function (e, t) {
        return gx(e).has_(t);
    },
    get: function (e, t) {
        return gx(e).get_(t);
    },
    set: function (e, t, n) {
        var r;
        return !!xS(t) && (null == (r = gx(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
        var n;
        return !!xS(t) && (null == (n = gx(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
        var r;
        return null == (r = gx(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
        return gx(e).ownKeys_();
    },
    preventExtensions: function (e) {
        cS(13);
    },
};
function bx(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
}
function _x(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
        n.push(t),
        SS(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function wx(e, t) {
    var n = hO();
    try {
        for (
            var r = [].concat(e.interceptors_ || []), i = 0, o = r.length;
            i < o && ((t = r[i](t)) && !t.type && cS(14), t);
            i++
        );
        return t;
    } finally {
        pO(n);
    }
}
function Sx(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
}
function kx(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
        n.push(t),
        SS(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function Ox(e, t) {
    var n = hO(),
        r = e.changeListeners_;
    if (r) {
        for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](t);
        pO(n);
    }
}
function xx(e, t, n) {
    return (
        mP(function () {
            var r = Zx(e, n)[YS];
            (null != t ||
                (t = (function (e) {
                    return (MS(e, GS) || CS(e, GS, US({}, e[GS])), e[GS]);
                })(e)),
                IS(t).forEach(function (e) {
                    return r.make_(e, t[e]);
                }));
        }),
        e
    );
}
var Px = 'splice',
    Ex = 'update',
    Ax = {
        get: function (e, t) {
            var n = e[YS];
            return t === YS
                ? n
                : 'length' === t
                  ? n.getArrayLength_()
                  : 'string' != typeof t || isNaN(t)
                    ? MS(Tx, t)
                        ? Tx[t]
                        : e[t]
                    : n.get_(parseInt(t));
        },
        set: function (e, t, n) {
            var r = e[YS];
            return (
                'length' === t && r.setArrayLength_(n),
                'symbol' == typeof t || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n),
                !0
            );
        },
        preventExtensions: function () {
            cS(15);
        },
    },
    Cx = (function () {
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
                (this.atom_ = new JS(e)),
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
                return _x(this, e);
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
                    kx(this, e)
                );
            }),
            (t.getArrayLength_ = function () {
                return (this.atom_.reportObserved(), this.values_.length);
            }),
            (t.setArrayLength_ = function (e) {
                ('number' != typeof e || isNaN(e) || e < 0) && cS('Out of range: ' + e);
                var t = this.values_.length;
                if (e !== t)
                    if (e > t) {
                        for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
                        this.spliceWithArray_(t, 0, n);
                    } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
                (e !== this.lastKnownLength_ && cS(16),
                    (this.lastKnownLength_ += t),
                    this.legacyMode_ && t > 0 && fP(e + t + 1));
            }),
            (t.spliceWithArray_ = function (e, t, n) {
                var r = this;
                this.atom_;
                var i = this.values_.length;
                if (
                    (void 0 === e ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
                    (t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e))),
                    void 0 === n && (n = gS),
                    bx(this))
                ) {
                    var o = wx(this, { object: this.proxy_, type: Px, index: e, removedCount: t, added: n });
                    if (!o) return gS;
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
                    i = Sx(this),
                    o =
                        i || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  type: Ex,
                                  debugObjectName: this.atom_.name_,
                                  index: e,
                                  newValue: t,
                                  oldValue: n,
                              }
                            : null;
                (this.atom_.reportChanged(), i && Ox(this, o));
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    i = Sx(this),
                    o =
                        i || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  debugObjectName: this.atom_.name_,
                                  type: Px,
                                  index: e,
                                  removed: n,
                                  added: t,
                                  removedCount: n.length,
                                  addedCount: t.length,
                              }
                            : null;
                (this.atom_.reportChanged(), i && Ox(this, o));
            }),
            (t.get_ = function (e) {
                if (!(this.legacyMode_ && e >= this.values_.length))
                    return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]));
                console.warn('[mobx] Out of bounds read: ' + e);
            }),
            (t.set_ = function (e, t) {
                var n = this.values_;
                if ((this.legacyMode_ && e > n.length && cS(17, e, n.length), e < n.length)) {
                    this.atom_;
                    var r = n[e];
                    if (bx(this)) {
                        var i = wx(this, { type: Ex, object: this.proxy_, index: e, newValue: t });
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
function jx(e, t, n, r) {
    return (
        void 0 === n && (n = 'ObservableArray'),
        void 0 === r && (r = !1),
        wS(),
        mP(function () {
            var i = new Cx(n, t, r, !1);
            jS(i.values_, YS, i);
            var o = new Proxy(i.values_, Ax);
            return ((i.proxy_ = o), e && e.length && i.spliceWithArray_(0, 0, e), o);
        })
    );
}
var Tx = {
    clear: function () {
        return this.splice(0);
    },
    replace: function (e) {
        var t = this[YS];
        return t.spliceWithArray_(0, t.values_.length, e);
    },
    toJSON: function () {
        return this.slice();
    },
    splice: function (e, t) {
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
        var o = this[YS];
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
        return this[YS].spliceWithArray_(e, t, n);
    },
    push: function () {
        for (var e = this[YS], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(e.values_.length, 0, n), e.values_.length);
    },
    pop: function () {
        return this.splice(Math.max(this[YS].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        for (var e = this[YS], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(0, 0, n), e.values_.length);
    },
    reverse: function () {
        return (wO.trackingDerivation && cS(37, 'reverse'), this.replace(this.slice().reverse()), this);
    },
    sort: function () {
        wO.trackingDerivation && cS(37, 'sort');
        var e = this.slice();
        return (e.sort.apply(e, arguments), this.replace(e), this);
    },
    remove: function (e) {
        var t = this[YS],
            n = t.dehanceValues_(t.values_).indexOf(e);
        return n > -1 && (this.splice(n, 1), !0);
    },
};
function Rx(e, t) {
    'function' == typeof Array.prototype[e] && (Tx[e] = t(e));
}
function Nx(e) {
    return function () {
        var t = this[YS];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments);
    };
}
function Vx(e) {
    return function (t, n) {
        var r = this,
            i = this[YS];
        return (
            i.atom_.reportObserved(),
            i.dehanceValues_(i.values_)[e](function (e, i) {
                return t.call(n, e, i, r);
            })
        );
    };
}
function Ix(e) {
    return function () {
        var t = this,
            n = this[YS];
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
(Rx('at', Nx),
    Rx('concat', Nx),
    Rx('flat', Nx),
    Rx('includes', Nx),
    Rx('indexOf', Nx),
    Rx('join', Nx),
    Rx('lastIndexOf', Nx),
    Rx('slice', Nx),
    Rx('toString', Nx),
    Rx('toLocaleString', Nx),
    Rx('toSorted', Nx),
    Rx('toSpliced', Nx),
    Rx('with', Nx),
    Rx('every', Vx),
    Rx('filter', Vx),
    Rx('find', Vx),
    Rx('findIndex', Vx),
    Rx('findLast', Vx),
    Rx('findLastIndex', Vx),
    Rx('flatMap', Vx),
    Rx('forEach', Vx),
    Rx('map', Vx),
    Rx('some', Vx),
    Rx('toReversed', Vx),
    Rx('reduce', Ix),
    Rx('reduceRight', Ix));
var Lx,
    Mx,
    Dx = TS('ObservableArrayAdministration', Cx);
function zx(e) {
    return PS(e) && Dx(e[YS]);
}
var Fx = {},
    Ux = 'add',
    Bx = 'delete';
((Lx = Symbol.iterator), (Mx = Symbol.toStringTag));
var $x,
    qx,
    Kx = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = nk),
                void 0 === n && (n = 'ObservableMap'),
                (this.enhancer_ = void 0),
                (this.name_ = void 0),
                (this[YS] = Fx),
                (this.data_ = void 0),
                (this.hasMap_ = void 0),
                (this.keysAtom_ = void 0),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = t),
                (this.name_ = n),
                OS(Map) || cS(18),
                mP(function () {
                    ((r.keysAtom_ = ek('ObservableMap.keys()')),
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
                if (!wO.trackingDerivation) return this.has_(e);
                var n = this.hasMap_.get(e);
                if (!n) {
                    var r = (n = new nO(this.has_(e), rk, 'ObservableMap.key?', !1));
                    (this.hasMap_.set(e, r),
                        YO(r, function () {
                            return t.hasMap_.delete(e);
                        }));
                }
                return n.get();
            }),
            (t.set = function (e, t) {
                var n = this.has_(e);
                if (bx(this)) {
                    var r = wx(this, { type: n ? Ex : Ux, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, bx(this)) && !wx(this, { type: Bx, object: this, name: e })) return !1;
                if (this.has_(e)) {
                    var n = Sx(this),
                        r = n
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: Bx,
                                  object: this,
                                  oldValue: this.data_.get(e).value_,
                                  name: e,
                              }
                            : null;
                    return (
                        mx(function () {
                            var n;
                            (t.keysAtom_.reportChanged(),
                                null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                                t.data_.get(e).setNewValue_(void 0),
                                t.data_.delete(e));
                        }),
                        n && Ox(this, r),
                        !0
                    );
                }
                return !1;
            }),
            (t.updateValue_ = function (e, t) {
                var n = this.data_.get(e);
                if ((t = n.prepareNewValue_(t)) !== wO.UNCHANGED) {
                    var r = Sx(this),
                        i = r
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: Ex,
                                  object: this,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), r && Ox(this, i));
                }
            }),
            (t.addValue_ = function (e, t) {
                var n = this;
                (this.keysAtom_,
                    mx(function () {
                        var r,
                            i = new nO(t, n.enhancer_, 'ObservableMap.key', !1);
                        (n.data_.set(e, i),
                            (t = i.value_),
                            null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                            n.keysAtom_.reportChanged());
                    }));
                var r = Sx(this),
                    i = r
                        ? {
                              observableKind: 'map',
                              debugObjectName: this.name_,
                              type: Ux,
                              object: this,
                              name: e,
                              newValue: t,
                          }
                        : null;
                r && Ox(this, i);
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
                return wP({
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
                return wP({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            i = n.value;
                        return { done: r, value: r ? void 0 : [i, e.get(i)] };
                    },
                });
            }),
            (t[Lx] = function () {
                return this.entries();
            }),
            (t.forEach = function (e, t) {
                for (var n, r = WS(this); !(n = r()).done; ) {
                    var i = n.value,
                        o = i[0],
                        a = i[1];
                    e.call(t, a, o, this);
                }
            }),
            (t.merge = function (e) {
                var t = this;
                return (
                    Wx(e) && (e = new Map(e)),
                    mx(function () {
                        ES(e)
                            ? (function (e) {
                                  var t = Object.keys(e);
                                  if (!VS) return t;
                                  var n = Object.getOwnPropertySymbols(e);
                                  return n.length
                                      ? [].concat(
                                            t,
                                            n.filter(function (t) {
                                                return mS.propertyIsEnumerable.call(e, t);
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
                              : RS(e)
                                ? (e.constructor !== Map && cS(19, e),
                                  e.forEach(function (e, n) {
                                      return t.set(n, e);
                                  }))
                                : null != e && cS(20, e);
                    }),
                    this
                );
            }),
            (t.clear = function () {
                var e = this;
                mx(function () {
                    dO(function () {
                        for (var t, n = WS(e.keys()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    mx(function () {
                        for (
                            var n,
                                r = (function (e) {
                                    if (RS(e) || Wx(e)) return e;
                                    if (Array.isArray(e)) return new Map(e);
                                    if (ES(e)) {
                                        var t = new Map();
                                        for (var n in e) t.set(n, e[n]);
                                        return t;
                                    }
                                    return cS(21, e);
                                })(e),
                                i = new Map(),
                                o = !1,
                                a = WS(t.data_.keys());
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
                        for (var l, c = WS(r.entries()); !(l = c()).done; ) {
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
                return kx(this, e);
            }),
            (t.intercept_ = function (e) {
                return _x(this, e);
            }),
            FS(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.keysAtom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: Mx,
                    get: function () {
                        return 'Map';
                    },
                },
            ]),
            e
        );
    })(),
    Wx = TS('ObservableMap', Kx);
var Gx = {};
(($x = Symbol.iterator), (qx = Symbol.toStringTag));
var Hx = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = nk),
                void 0 === n && (n = 'ObservableSet'),
                (this.name_ = void 0),
                (this[YS] = Gx),
                (this.data_ = new Set()),
                (this.atom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = void 0),
                (this.name_ = n),
                OS(Set) || cS(22),
                (this.enhancer_ = function (e, r) {
                    return t(e, r, n);
                }),
                mP(function () {
                    ((r.atom_ = ek(r.name_)), e && r.replace(e));
                }));
        }
        var t = e.prototype;
        return (
            (t.dehanceValue_ = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
                var e = this;
                mx(function () {
                    dO(function () {
                        for (var t, n = WS(e.data_.values()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.forEach = function (e, t) {
                for (var n, r = WS(this); !(n = r()).done; ) {
                    var i = n.value;
                    e.call(t, i, i, this);
                }
            }),
            (t.add = function (e) {
                var t = this;
                if ((this.atom_, bx(this)) && !wx(this, { type: Ux, object: this, newValue: e })) return this;
                if (!this.has(e)) {
                    mx(function () {
                        (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
                    });
                    var n = Sx(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: Ux,
                                  object: this,
                                  newValue: e,
                              }
                            : null;
                    n && Ox(this, r);
                }
                return this;
            }),
            (t.delete = function (e) {
                var t = this;
                if (bx(this) && !wx(this, { type: Bx, object: this, oldValue: e })) return !1;
                if (this.has(e)) {
                    var n = Sx(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: Bx,
                                  object: this,
                                  oldValue: e,
                              }
                            : null;
                    return (
                        mx(function () {
                            (t.atom_.reportChanged(), t.data_.delete(e));
                        }),
                        n && Ox(this, r),
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
                return wP({
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
                return wP({
                    next: function () {
                        return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
                    },
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    Qx(e) && (e = new Set(e)),
                    mx(function () {
                        Array.isArray(e) || NS(e)
                            ? (t.clear(),
                              e.forEach(function (e) {
                                  return t.add(e);
                              }))
                            : null != e && cS('Cannot initialize set from ' + e);
                    }),
                    this
                );
            }),
            (t.observe_ = function (e, t) {
                return kx(this, e);
            }),
            (t.intercept_ = function (e) {
                return _x(this, e);
            }),
            (t.toJSON = function () {
                return Array.from(this);
            }),
            (t.toString = function () {
                return '[object ObservableSet]';
            }),
            (t[$x] = function () {
                return this.values();
            }),
            FS(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.atom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: qx,
                    get: function () {
                        return 'Set';
                    },
                },
            ]),
            e
        );
    })(),
    Qx = TS('ObservableSet', Hx),
    Xx = Object.create(null),
    Yx = 'remove',
    Jx = (function () {
        function e(e, t, n, r) {
            (void 0 === t && (t = new Map()),
                void 0 === r && (r = Ok),
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
                (this.keysAtom_ = new JS('ObservableObject.keys')),
                (this.isPlainObject_ = ES(this.target_)));
        }
        var t = e.prototype;
        return (
            (t.getObservablePropValue_ = function (e) {
                return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
                var n = this.values_.get(e);
                if (n instanceof oO) return (n.set(t), !0);
                if (bx(this)) {
                    var r = wx(this, { type: Ex, object: this.proxy_ || this.target_, name: e, newValue: t });
                    if (!r) return null;
                    t = r.newValue;
                }
                if ((t = n.prepareNewValue_(t)) !== wO.UNCHANGED) {
                    var i = Sx(this),
                        o = i
                            ? {
                                  type: Ex,
                                  observableKind: 'object',
                                  debugObjectName: this.name_,
                                  object: this.proxy_ || this.target_,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), i && Ox(this, o));
                }
                return !0;
            }),
            (t.get_ = function (e) {
                return (wO.trackingDerivation && !MS(this.target_, e) && this.has_(e), this.target_[e]);
            }),
            (t.set_ = function (e, t, n) {
                return (
                    void 0 === n && (n = !1),
                    MS(this.target_, e)
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
                if (!wO.trackingDerivation) return e in this.target_;
                this.pendingKeys_ || (this.pendingKeys_ = new Map());
                var t = this.pendingKeys_.get(e);
                return (
                    t ||
                        ((t = new nO(e in this.target_, rk, 'ObservableObject.key?', !1)), this.pendingKeys_.set(e, t)),
                    t.get()
                );
            }),
            (t.make_ = function (e, t) {
                if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                    if (!(e in this.target_)) {
                        var n;
                        if (null != (n = this.target_[GS]) && n[e]) return;
                        cS(1, t.annotationType_, this.name_ + '.' + e.toString());
                    }
                    for (var r = this.target_; r && r !== mS; ) {
                        var i = pS(r, e);
                        if (i) {
                            var o = t.make_(this, e, i, r);
                            if (0 === o) return;
                            if (1 === o) break;
                        }
                        r = Object.getPrototypeOf(r);
                    }
                    rP(this, t, e);
                }
            }),
            (t.extend_ = function (e, t, n, r) {
                if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                    return this.defineProperty_(e, t, r);
                var i = n.extend_(this, e, t, r);
                return (i && rP(this, n, e), i);
            }),
            (t.defineProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    xO();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (bx(this)) {
                        var i = wx(this, { object: this.proxy_ || this.target_, name: e, type: Ux, newValue: t.value });
                        if (!i) return null;
                        var o = i.newValue;
                        t.value !== o && (t = US({}, t, { value: o }));
                    }
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                    } else vS(this.target_, e, t);
                    this.notifyPropertyAddition_(e, t.value);
                } finally {
                    PO();
                }
                return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
                (void 0 === r && (r = !1), this.keysAtom_);
                try {
                    xO();
                    var i = this.delete_(e);
                    if (!i) return i;
                    if (bx(this)) {
                        var o = wx(this, { object: this.proxy_ || this.target_, name: e, type: Ux, newValue: t });
                        if (!o) return null;
                        t = o.newValue;
                    }
                    var a = tP(e),
                        s = {
                            configurable: !wO.safeDescriptors || this.isPlainObject_,
                            enumerable: !0,
                            get: a.get,
                            set: a.set,
                        };
                    if (r) {
                        if (!Reflect.defineProperty(this.target_, e, s)) return !1;
                    } else vS(this.target_, e, s);
                    var u = new nO(t, n, 'ObservableObject.key', !1);
                    (this.values_.set(e, u), this.notifyPropertyAddition_(e, u.value_));
                } finally {
                    PO();
                }
                return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    xO();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (bx(this))
                        if (!wx(this, { object: this.proxy_ || this.target_, name: e, type: Ux, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var i = tP(e),
                        o = {
                            configurable: !wO.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: i.get,
                            set: i.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, o)) return !1;
                    } else vS(this.target_, e, o);
                    (this.values_.set(e, new oO(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    PO();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !MS(this.target_, e))) return !0;
                if (bx(this) && !wx(this, { object: this.proxy_ || this.target_, name: e, type: Yx })) return null;
                try {
                    var n, r;
                    xO();
                    var i,
                        o = Sx(this),
                        a = this.values_.get(e),
                        s = void 0;
                    if (!a && o) s = null == (i = pS(this.target_, e)) ? void 0 : i.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (a && (this.values_.delete(e), a instanceof nO && (s = a.value_), AO(a)),
                        this.keysAtom_.reportChanged(),
                        null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
                        o)
                    ) {
                        var u = {
                            type: Yx,
                            observableKind: 'object',
                            object: this.proxy_ || this.target_,
                            debugObjectName: this.name_,
                            oldValue: s,
                            name: e,
                        };
                        (0, o && Ox(this, u));
                    }
                } finally {
                    PO();
                }
                return !0;
            }),
            (t.observe_ = function (e, t) {
                return kx(this, e);
            }),
            (t.intercept_ = function (e) {
                return _x(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
                var n,
                    r,
                    i = Sx(this);
                if (i) {
                    var o = i
                        ? {
                              type: Ux,
                              observableKind: 'object',
                              debugObjectName: this.name_,
                              object: this.proxy_ || this.target_,
                              name: e,
                              newValue: t,
                          }
                        : null;
                    i && Ox(this, o);
                }
                (null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(!0),
                    this.keysAtom_.reportChanged());
            }),
            (t.ownKeys_ = function () {
                return (this.keysAtom_.reportObserved(), IS(this.target_));
            }),
            (t.keys_ = function () {
                return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
            }),
            e
        );
    })();
function Zx(e, t) {
    var n;
    if (MS(e, YS)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
        i = new Jx(
            e,
            new Map(),
            String(r),
            (function (e) {
                var t;
                return e ? (null != (t = e.defaultDecorator) ? t : xk(e)) : void 0;
            })(t),
        );
    return (CS(e, YS, i), e);
}
var eP = TS('ObservableObjectAdministration', Jx);
function tP(e) {
    return (
        Xx[e] ||
        (Xx[e] = {
            get: function () {
                return this[YS].getObservablePropValue_(e);
            },
            set: function (t) {
                return this[YS].setObservablePropValue_(e, t);
            },
        })
    );
}
function nP(e) {
    return !!PS(e) && eP(e[YS]);
}
function rP(e, t, n) {
    var r;
    null == (r = e.target_[GS]) || delete r[n];
}
var iP = lP(0),
    oP = (function () {
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
    aP = 0,
    sP = function () {};
!(function (e, t) {
    Object.setPrototypeOf
        ? Object.setPrototypeOf(e.prototype, t)
        : void 0 !== e.prototype.__proto__
          ? (e.prototype.__proto__ = t)
          : (e.prototype = t);
})(sP, Array.prototype);
var uP = (function (e, t, n) {
    function r(t, n, r, i) {
        var o;
        return (
            void 0 === r && (r = 'ObservableArray'),
            void 0 === i && (i = !1),
            (o = e.call(this) || this),
            mP(function () {
                var e = new Cx(r, n, i, !0);
                ((e.proxy_ = qS(o)),
                    jS(qS(o), YS, e),
                    t && t.length && o.spliceWithArray(0, 0, t),
                    oP && Object.defineProperty(qS(o), '0', iP));
            }),
            o
        );
    }
    BS(r, e);
    var i = r.prototype;
    return (
        (i.concat = function () {
            this[YS].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return Array.prototype.concat.apply(
                this.slice(),
                t.map(function (e) {
                    return zx(e) ? e.slice() : e;
                }),
            );
        }),
        (i[n] = function () {
            var e = this,
                t = 0;
            return wP({
                next: function () {
                    return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
                },
            });
        }),
        FS(r, [
            {
                key: 'length',
                get: function () {
                    return this[YS].getArrayLength_();
                },
                set: function (e) {
                    this[YS].setArrayLength_(e);
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
})(sP, Symbol.toStringTag, Symbol.iterator);
function lP(e) {
    return {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this[YS].get_(e);
        },
        set: function (t) {
            this[YS].set_(e, t);
        },
    };
}
function cP(e) {
    vS(uP.prototype, '' + e, lP(e));
}
function fP(e) {
    if (e > aP) {
        for (var t = aP; t < e + 100; t++) cP(t);
        aP = e;
    }
}
function dP(e, t, n) {
    return new uP(e, t, n);
}
function hP(e, t) {
    if ('object' == typeof e && null !== e) {
        if (zx(e)) return (void 0 !== t && cS(23), e[YS].atom_);
        if (Qx(e)) return e.atom_;
        if (Wx(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return (n || cS(25, t, vP(e)), n);
        }
        if (nP(e)) {
            if (!t) return cS(26);
            var r = e[YS].values_.get(t);
            return (r || cS(27, t, vP(e)), r);
        }
        if (ZS(e) || aO(e) || VO(e)) return e;
    } else if (OS(e) && VO(e[YS])) return e[YS];
    cS(28);
}
function pP(e, t) {
    return (
        e || cS(29),
        void 0 !== t ? pP(hP(e, t)) : ZS(e) || aO(e) || VO(e) || Wx(e) || Qx(e) ? e : e[YS] ? e[YS] : void cS(24, e)
    );
}
function vP(e, t) {
    var n;
    if (void 0 !== t) n = hP(e, t);
    else {
        if (KO(e)) return e.name;
        n = nP(e) || Wx(e) || Qx(e) ? pP(e) : hP(e);
    }
    return n.name_;
}
function mP(e) {
    var t = hO(),
        n = Zk(!0);
    xO();
    try {
        return e();
    } finally {
        (PO(), eO(n), pO(t));
    }
}
(Object.entries(Tx).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && CS(uP.prototype, t, n);
}),
    fP(1e3));
var gP = mS.toString;
function yP(e, t, n) {
    return (void 0 === n && (n = -1), bP(e, t, n));
}
function bP(e, t, n, r, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var o = typeof e;
    if ('function' !== o && 'object' !== o && 'object' != typeof t) return !1;
    var a = gP.call(e);
    if (a !== gP.call(t)) return !1;
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
    ((e = _P(e)), (t = _P(t)));
    var s = '[object Array]' === a;
    if (!s) {
        if ('object' != typeof e || 'object' != typeof t) return !1;
        var u = e.constructor,
            l = t.constructor;
        if (
            u !== l &&
            !(OS(u) && u instanceof u && OS(l) && l instanceof l) &&
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
        for (; c--; ) if (!bP(e[c], t[c], n - 1, r, i)) return !1;
    } else {
        var f,
            d = Object.keys(e);
        if (((c = d.length), Object.keys(t).length !== c)) return !1;
        for (; c--; ) if (!MS(t, (f = d[c])) || !bP(e[f], t[f], n - 1, r, i)) return !1;
    }
    return (r.pop(), i.pop(), !0);
}
function _P(e) {
    return zx(e) ? e.slice() : RS(e) || Wx(e) || NS(e) || Qx(e) ? Array.from(e.entries()) : e;
}
function wP(e) {
    return ((e[Symbol.iterator] = SP), e);
}
function SP() {
    return this;
}
if (
    (['Symbol', 'Map', 'Set'].forEach(function (e) {
        void 0 === dS()[e] && cS("MobX requires global '" + e + "' to be available or polyfilled");
    }),
    'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
                return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
            },
            extras: { getDebugName: vP },
            $mobx: YS,
        }),
    !z.useState)
)
    throw new Error('mobx-react-lite requires React with Hooks support');
if (!xx) throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
function kP(e) {
    e();
}
function OP(e) {
    return ix(hP(e, t));
    var t;
}
var xP = new ((function () {
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
    PP = { exports: {} },
    EP = {},
    AP = z;
var CP =
        'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    jP = AP.useState,
    TP = AP.useEffect,
    RP = AP.useLayoutEffect,
    NP = AP.useDebugValue;
function VP(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !CP(e, n);
    } catch (r) {
        return !0;
    }
}
var IP =
    'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
              return t();
          }
        : function (e, t) {
              var n = t(),
                  r = jP({ inst: { value: n, getSnapshot: t } }),
                  i = r[0].inst,
                  o = r[1];
              return (
                  RP(
                      function () {
                          ((i.value = n), (i.getSnapshot = t), VP(i) && o({ inst: i }));
                      },
                      [e, n, t],
                  ),
                  TP(
                      function () {
                          return (
                              VP(i) && o({ inst: i }),
                              e(function () {
                                  VP(i) && o({ inst: i });
                              })
                          );
                      },
                      [e],
                  ),
                  NP(n),
                  n
              );
          };
((EP.useSyncExternalStore = void 0 !== AP.useSyncExternalStore ? AP.useSyncExternalStore : IP), (PP.exports = EP));
var LP,
    MP,
    DP = PP.exports;
function zP(e) {
    e.reaction = new CO('observer'.concat(e.name), function () {
        var t;
        ((e.stateVersion = Symbol()), null === (t = e.onStoreChange) || void 0 === t || t.call(e));
    });
}
var FP = 'function' == typeof Symbol && Symbol.for,
    UP =
        null !==
            (MP =
                null === (LP = Object.getOwnPropertyDescriptor(function () {}, 'name')) || void 0 === LP
                    ? void 0
                    : LP.configurable) &&
        void 0 !== MP &&
        MP,
    BP = FP
        ? Symbol.for('react.forward_ref')
        : 'function' == typeof z.forwardRef &&
          z.forwardRef(function (e) {
              return null;
          }).$$typeof,
    $P = FP
        ? Symbol.for('react.memo')
        : 'function' == typeof z.memo &&
          z.memo(function (e) {
              return null;
          }).$$typeof;
function qP(e, t) {
    if ($P && e.$$typeof === $P)
        throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
        );
    var n = (void 0, !1),
        r = e,
        i = e.displayName || e.name;
    if (BP && e.$$typeof === BP && ((n = !0), 'function' != typeof (r = e.render)))
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
                            xP.unregister(r),
                            (r.onStoreChange = e),
                            r.reaction || (zP(r), (r.stateVersion = Symbol())),
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
                (a.reaction || (zP(a), xP.register(n, a, a)),
                F.useDebugValue(a.reaction, OP),
                DP.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot),
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
        UP && Object.defineProperty(o, 'name', { value: e.name, writable: !0, configurable: !0 }),
        e.contextTypes && (o.contextTypes = e.contextTypes),
        n && (o = z.forwardRef(o)),
        (function (e, t) {
            Object.keys(e).forEach(function (n) {
                WP[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
            });
        })(e, (o = z.memo(o))),
        o
    );
}
var KP,
    WP = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function GP(e, t) {
    (void 0 === t && (t = 'Illegal state'),
        e ||
            (function (e) {
                throw new Error('[mobx-utils] ' + e);
            })(t));
}
((KP = zf.unstable_batchedUpdates) || (KP = kP), nx({ reactionScheduler: KP }), xP.finalizeAllImmediately);
var HP = function (e) {
        return e && e !== Object.prototype && Object.getOwnPropertyNames(e).concat(HP(Object.getPrototypeOf(e)) || []);
    },
    QP = function (e) {
        return (function (e) {
            var t = HP(e);
            return t.filter(function (e, n) {
                return t.indexOf(e) === n;
            });
        })(e).filter(function (e) {
            return 'constructor' !== e && !~e.indexOf('__');
        });
    },
    XP = 'pending',
    YP = 'fulfilled',
    JP = 'rejected';
function ZP(e) {
    switch (this.state) {
        case XP:
            return e.pending && e.pending(this.value);
        case JP:
            return e.rejected && e.rejected(this.value);
        case YP:
            return e.fulfilled ? e.fulfilled(this.value) : this.value;
    }
}
function eE(e, t) {
    if (
        (GP(arguments.length <= 2, 'fromPromise expects up to two arguments'),
        GP(
            'function' == typeof e || ('object' == typeof e && e && 'function' == typeof e.then),
            'Please pass a promise or function to fromPromise',
        ),
        !0 === e.isPromiseBasedObservable)
    )
        return e;
    'function' == typeof e && (e = new Promise(e));
    var n = e;
    (e.then(
        $O('observableFromPromise-resolve', function (e) {
            ((n.value = e), (n.state = YP));
        }),
        $O('observableFromPromise-reject', function (e) {
            ((n.value = e), (n.state = JP));
        }),
    ),
        (n.isPromiseBasedObservable = !0),
        (n.case = ZP));
    var r = !t || (t.state !== YP && t.state !== XP) ? void 0 : t.value;
    return (rx(n, { value: r, state: XP }, {}, { deep: !1 }), n);
}
!(function (e) {
    ((e.reject = $O('fromPromise.reject', function (t) {
        var n = e(Promise.reject(t));
        return ((n.state = JP), (n.value = t), n);
    })),
        (e.resolve = $O('fromPromise.resolve', function (t) {
            void 0 === t && (t = void 0);
            var n = e(Promise.resolve(t));
            return ((n.state = YP), (n.value = t), n);
        })));
})(eE || (eE = {}));
var tE = function (e, t, n, r) {
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
            xx(this),
            (function (e) {
                Jk(e.name, !1, e, this, void 0);
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
        tE([Uk.ref], e.prototype, 'current', void 0),
        tE([$O.bound], e.prototype, 'next', null),
        tE([$O.bound], e.prototype, 'complete', null),
        tE([$O.bound], e.prototype, 'error', null));
})();
var nE = function () {
        return (
            (nE =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            nE.apply(this, arguments)
        );
    },
    rE = function (e, t, n, r) {
        var i,
            o = arguments.length,
            a = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return (o > 3 && a && Object.defineProperty(t, n, a), a);
    },
    iE = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
!(function () {
    function e(e) {
        var t = this;
        (Object.defineProperty(this, 'model', { enumerable: !0, configurable: !0, writable: !0, value: e }),
            Object.defineProperty(this, 'localValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: Uk.map({}),
            }),
            Object.defineProperty(this, 'localComputedValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: Uk.map({}),
            }),
            Object.defineProperty(this, 'isPropertyDirty', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    return t.localValues.has(e);
                },
            }),
            xx(this),
            GP(nP(e), 'createViewModel expects an observable object'));
        var n = QP(this);
        QP(e).forEach(function (r) {
            var i;
            if (!n.includes(r) && r !== YS && '__mobxDidRunLazyInitializers' !== r) {
                if (
                    (GP(
                        -1 === iE.indexOf(r),
                        'The propertyname ' + r + ' is reserved and cannot be used with viewModels',
                    ),
                    hx(e, r))
                ) {
                    var o = pP(e, r),
                        a = o.derivation.bind(t),
                        s = null === (i = o.setter_) || void 0 === i ? void 0 : i.bind(t);
                    t.localComputedValues.set(r, Kk(a, { set: s }));
                }
                var u = Object.getOwnPropertyDescriptor(e, r),
                    l = u ? { enumerable: u.enumerable } : {};
                Object.defineProperty(
                    t,
                    r,
                    nE(nE({}, l), {
                        configurable: !0,
                        get: function () {
                            return hx(e, r)
                                ? t.localComputedValues.get(r).get()
                                : t.isPropertyDirty(r)
                                  ? t.localValues.get(r)
                                  : t.model[r];
                        },
                        set: $O(function (n) {
                            hx(e, r)
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
                nP(e)
                    ? e[YS].keys_()
                    : Wx(e) || Qx(e)
                      ? Array.from(e.keys())
                      : zx(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void cS(5)).forEach(function (e) {
                    var n = t.localValues.get(e),
                        r = t.model[e];
                    zx(r) ? r.replace(n) : Wx(r) ? (r.clear(), r.merge(n)) : dx(n) || (t.model[e] = n);
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
        rE([Kk], e.prototype, 'isDirty', null),
        rE([Kk], e.prototype, 'changedValues', null),
        rE([$O.bound], e.prototype, 'submit', null),
        rE([$O.bound], e.prototype, 'reset', null),
        rE([$O.bound], e.prototype, 'resetProperty', null));
})();
var oE = (function () {
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
            (l._disposeBaseObserver = vx(l._base, function (e) {
                if ('splice' === e.type)
                    mx(function () {
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
                    mx(function () {
                        (l._removeItem(e.oldValue), l._addItem(e.newValue));
                    });
                }
            })),
            l
        );
    }
    (oE(t, e),
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
                        ((n = Uk([], { name: 'GroupArray[' + this._keyToName(t) + ']', deep: !1 })),
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
                        reaction: HO(
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
})(Kx);
var aE = (function () {
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
    sE = (function () {
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
                    return (this.last && (this.last.isDisposed = !0), (this.last = new aE(this.store, e)));
                },
            }),
            e
        );
    })(),
    uE = function () {
        return (
            (uE =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            uE.apply(this, arguments)
        );
    };
function lE(e, t) {
    if ((void 0 === t && (t = !1), KO(e))) throw new Error("computedFn shouldn't be used on actions");
    var n = !1,
        r = 0,
        i = 'boolean' == typeof t ? { keepAlive: t } : t,
        o = new sE();
    return function () {
        for (var t = this, a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
        var u,
            l = o.entry(a);
        if (l.exists()) return l.get().get();
        if (!i.keepAlive && null === wO.trackingDerivation)
            return (
                !n &&
                    wO.computedRequiresReaction &&
                    (console.warn(
                        "invoking a computedFn from outside an reactive context won't be memoized, unless keepAlive is set",
                    ),
                    (n = !0)),
                e.apply(this, a)
            );
        var c = Kk(
            function () {
                return (u = e.apply(t, a));
            },
            uE(uE({}, i), { name: 'computedFn(' + (i.name || e.name) + '#' + ++r + ')' }),
        );
        return (
            l.set(c),
            i.keepAlive ||
                YO(c, function () {
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
var cE = (function () {
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
    fE = 'undefined' != typeof window && 'undefined' != typeof document && window.document === document,
    dE =
        'undefined' != typeof global && global.Math === Math
            ? global
            : 'undefined' != typeof self && self.Math === Math
              ? self
              : 'undefined' != typeof window && window.Math === Math
                ? window
                : Function('return this')(),
    hE =
        'function' == typeof requestAnimationFrame
            ? requestAnimationFrame.bind(dE)
            : function (e) {
                  return setTimeout(function () {
                      return e(Date.now());
                  }, 1e3 / 60);
              };
var pE = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
    vE = 'undefined' != typeof MutationObserver,
    mE = (function () {
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
                        hE(o);
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
                fE &&
                    !this.connected_ &&
                    (document.addEventListener('transitionend', this.onTransitionEnd_),
                    window.addEventListener('resize', this.refresh),
                    vE
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
                fE &&
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
                pE.some(function (e) {
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
    gE = function (e, t) {
        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var i = r[n];
            Object.defineProperty(e, i, { value: t[i], enumerable: !1, writable: !1, configurable: !0 });
        }
        return e;
    },
    yE = function (e) {
        return (e && e.ownerDocument && e.ownerDocument.defaultView) || dE;
    },
    bE = xE(0, 0, 0, 0);
function _E(e) {
    return parseFloat(e) || 0;
}
function wE(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce(function (t, n) {
        return t + _E(e['border-' + n + '-width']);
    }, 0);
}
function SE(e) {
    var t = e.offsetWidth,
        n = e.offsetHeight;
    if (!t && !n) return bE;
    var r = yE(e).getComputedStyle(e),
        i = (function (e) {
            for (var t = {}, n = 0, r = ['top', 'right', 'bottom', 'left']; n < r.length; n++) {
                var i = r[n],
                    o = e['padding-' + i];
                t[i] = _E(o);
            }
            return t;
        })(r),
        o = i.left + i.right,
        a = i.top + i.bottom,
        s = _E(r.width),
        u = _E(r.height);
    if (
        ('border-box' === r.boxSizing &&
            (Math.round(s + o) !== t && (s -= wE(r, 'left', 'right') + o),
            Math.round(u + a) !== n && (u -= wE(r, 'top', 'bottom') + a)),
        !(function (e) {
            return e === yE(e).document.documentElement;
        })(e))
    ) {
        var l = Math.round(s + o) - t,
            c = Math.round(u + a) - n;
        (1 !== Math.abs(l) && (s -= l), 1 !== Math.abs(c) && (u -= c));
    }
    return xE(i.left, i.top, s, u);
}
var kE =
    'undefined' != typeof SVGGraphicsElement
        ? function (e) {
              return e instanceof yE(e).SVGGraphicsElement;
          }
        : function (e) {
              return e instanceof yE(e).SVGElement && 'function' == typeof e.getBBox;
          };
function OE(e) {
    return fE
        ? kE(e)
            ? (function (e) {
                  var t = e.getBBox();
                  return xE(0, 0, t.width, t.height);
              })(e)
            : SE(e)
        : bE;
}
function xE(e, t, n, r) {
    return { x: e, y: t, width: n, height: r };
}
var PE = (function () {
        function e(e) {
            ((this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = xE(0, 0, 0, 0)),
                (this.target = e));
        }
        return (
            (e.prototype.isActive = function () {
                var e = OE(this.target);
                return ((this.contentRect_ = e), e.width !== this.broadcastWidth || e.height !== this.broadcastHeight);
            }),
            (e.prototype.broadcastRect = function () {
                var e = this.contentRect_;
                return ((this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e);
            }),
            e
        );
    })(),
    EE = (function () {
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
                    gE(u, { x: r, y: i, width: o, height: a, top: i, right: r + o, bottom: a + i, left: r }),
                    u);
            gE(this, { target: e, contentRect: l });
        };
    })(),
    AE = (function () {
        function e(e, t, n) {
            if (((this.activeObservations_ = []), (this.observations_ = new cE()), 'function' != typeof e))
                throw new TypeError('The callback provided as parameter 1 is not a function.');
            ((this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = n));
        }
        return (
            (e.prototype.observe = function (e) {
                if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                if ('undefined' != typeof Element && Element instanceof Object) {
                    if (!(e instanceof yE(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var t = this.observations_;
                    t.has(e) || (t.set(e, new PE(e)), this.controller_.addObserver(this), this.controller_.refresh());
                }
            }),
            (e.prototype.unobserve = function (e) {
                if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                if ('undefined' != typeof Element && Element instanceof Object) {
                    if (!(e instanceof yE(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
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
                            return new EE(e.target, e.broadcastRect());
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
    CE = 'undefined' != typeof WeakMap ? new WeakMap() : new cE(),
    jE = (function () {
        return function e(t) {
            if (!(this instanceof e)) throw new TypeError('Cannot call a class as a function.');
            if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
            var n = mE.getInstance(),
                r = new AE(t, n, this);
            CE.set(this, r);
        };
    })();
['observe', 'unobserve', 'disconnect'].forEach(function (e) {
    jE.prototype[e] = function () {
        var t;
        return (t = CE.get(this))[e].apply(t, arguments);
    };
});
var TE = void 0 !== dE.ResizeObserver ? dE.ResizeObserver : jE;
let RE = GE();
const NE = (e) => $E(e, RE);
let VE = GE();
NE.write = (e) => $E(e, VE);
let IE = GE();
NE.onStart = (e) => $E(e, IE);
let LE = GE();
NE.onFrame = (e) => $E(e, LE);
let ME = GE();
NE.onFinish = (e) => $E(e, ME);
let DE = [];
NE.setTimeout = (e, t) => {
    let n = NE.now() + t,
        r = () => {
            let e = DE.findIndex((e) => e.cancel == r);
            (~e && DE.splice(e, 1), (QE.count -= ~e ? 1 : 0));
        },
        i = { time: n, handler: e, cancel: r };
    return (DE.splice(zE(n), 0, i), (QE.count += 1), qE(), i);
};
let zE = (e) => ~(~DE.findIndex((t) => t.time > e) || ~DE.length);
((NE.cancel = (e) => {
    (RE.delete(e), VE.delete(e));
}),
    (NE.sync = (e) => {
        ((BE = !0), NE.batchedUpdates(e), (BE = !1));
    }),
    (NE.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            ((t = e), NE.onStart(n));
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                (IE.delete(n), (t = null));
            }),
            r
        );
    }));
let FE = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
((NE.use = (e) => (FE = e)),
    (NE.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (NE.batchedUpdates = (e) => e()),
    (NE.catch = console.error),
    (NE.frameLoop = 'always'),
    (NE.advance = () => {
        'demand' !== NE.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : WE();
    }));
let UE = -1,
    BE = !1;
function $E(e, t) {
    BE ? (t.delete(e), e(0)) : (t.add(e), qE());
}
function qE() {
    UE < 0 && ((UE = 0), 'demand' !== NE.frameLoop && FE(KE));
}
function KE() {
    ~UE && (FE(KE), NE.batchedUpdates(WE));
}
function WE() {
    let e = UE;
    UE = NE.now();
    let t = zE(UE);
    (t && (HE(DE.splice(0, t), (e) => e.handler()), (QE.count -= t)),
        IE.flush(),
        RE.flush(e ? Math.min(64, UE - e) : 16.667),
        LE.flush(),
        VE.flush(),
        ME.flush());
}
function GE() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            ((QE.count += t != e || e.has(n) ? 0 : 1), e.add(n));
        },
        delete: (n) => ((QE.count -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size &&
                ((e = new Set()), (QE.count -= t.size), HE(t, (t) => t(n) && e.add(t)), (QE.count += e.size), (t = e));
        },
    };
}
function HE(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            NE.catch(n);
        }
    });
}
const QE = { count: 0 };
function XE() {}
const YE = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
function JE(e, t) {
    if (YE.arr(e)) {
        if (!YE.arr(t) || e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
    }
    return e === t;
}
const ZE = (e, t) => e.forEach(t);
function eA(e, t, n) {
    if (YE.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
const tA = (e) => (YE.und(e) ? [] : YE.arr(e) ? e : [e]);
function nA(e, t) {
    if (e.size) {
        const n = Array.from(e);
        (e.clear(), ZE(n, t));
    }
}
const rA = (e, ...t) => nA(e, (e) => e(...t));
let iA,
    oA,
    aA = null,
    sA = !1,
    uA = XE;
var lA = Object.freeze({
    __proto__: null,
    get createStringInterpolator() {
        return iA;
    },
    get to() {
        return oA;
    },
    get colors() {
        return aA;
    },
    get skipAnimation() {
        return sA;
    },
    get willAdvance() {
        return uA;
    },
    assign: (e) => {
        (e.to && (oA = e.to),
            e.now && (NE.now = e.now),
            void 0 !== e.colors && (aA = e.colors),
            null != e.skipAnimation && (sA = e.skipAnimation),
            e.createStringInterpolator && (iA = e.createStringInterpolator),
            e.requestAnimationFrame && NE.use(e.requestAnimationFrame),
            e.batchedUpdates && (NE.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (uA = e.willAdvance),
            e.frameLoop && (NE.frameLoop = e.frameLoop));
    },
});
const cA = new Set();
let fA = [],
    dA = [],
    hA = 0;
const pA = {
    get idle() {
        return !cA.size && !fA.length;
    },
    start(e) {
        hA > e.priority ? (cA.add(e), NE.onStart(vA)) : (mA(e), NE(yA));
    },
    advance: yA,
    sort(e) {
        if (hA) NE.onFrame(() => pA.sort(e));
        else {
            const t = fA.indexOf(e);
            ~t && (fA.splice(t, 1), gA(e));
        }
    },
    clear() {
        ((fA = []), cA.clear());
    },
};
function vA() {
    (cA.forEach(mA), cA.clear(), NE(yA));
}
function mA(e) {
    fA.includes(e) || gA(e);
}
function gA(e) {
    fA.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(fA, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function yA(e) {
    const t = dA;
    for (let n = 0; n < fA.length; n++) {
        const r = fA[n];
        ((hA = r.priority), r.idle || (uA(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((hA = 0), (dA = fA), (dA.length = 0), (fA = t), fA.length > 0);
}
const bA = '[-+]?\\d*\\.?\\d+',
    _A = bA + '%';
function wA(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
const SA = new RegExp('rgb' + wA(bA, bA, bA)),
    kA = new RegExp('rgba' + wA(bA, bA, bA, bA)),
    OA = new RegExp('hsl' + wA(bA, _A, _A)),
    xA = new RegExp('hsla' + wA(bA, _A, _A, bA)),
    PA = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    EA = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    AA = /^#([0-9a-fA-F]{6})$/,
    CA = /^#([0-9a-fA-F]{8})$/;
function jA(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function TA(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        i = 2 * n - r,
        o = jA(i, r, e + 1 / 3),
        a = jA(i, r, e),
        s = jA(i, r, e - 1 / 3);
    return (Math.round(255 * o) << 24) | (Math.round(255 * a) << 16) | (Math.round(255 * s) << 8);
}
function RA(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function NA(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function VA(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function IA(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function LA(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = AA.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : aA && void 0 !== aA[e]
                ? aA[e]
                : (t = SA.exec(e))
                  ? ((RA(t[1]) << 24) | (RA(t[2]) << 16) | (RA(t[3]) << 8) | 255) >>> 0
                  : (t = kA.exec(e))
                    ? ((RA(t[1]) << 24) | (RA(t[2]) << 16) | (RA(t[3]) << 8) | VA(t[4])) >>> 0
                    : (t = PA.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = CA.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = EA.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = OA.exec(e))
                            ? (255 | TA(NA(t[1]), IA(t[2]), IA(t[3]))) >>> 0
                            : (t = xA.exec(e))
                              ? (TA(NA(t[1]), IA(t[2]), IA(t[3])) | VA(t[4])) >>> 0
                              : null;
    })(e);
    return null === t
        ? e
        : ((t = t || 0),
          `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`);
}
const MA = (e, t, n) => {
    if (YE.fun(e)) return e;
    if (YE.arr(e)) return MA({ range: e, output: t, extrapolate: n });
    if (YE.str(e.output[0])) return iA(e);
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
function DA() {
    return (
        (DA =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }),
        DA.apply(this, arguments)
    );
}
const zA = Symbol.for('FluidValue.get'),
    FA = Symbol.for('FluidValue.observers'),
    UA = (e) => Boolean(e && e[zA]),
    BA = (e) => (e && e[zA] ? e[zA]() : e),
    $A = (e) => e[FA] || null;
function qA(e, t) {
    let n = e[FA];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
class KA {
    constructor(e) {
        if (((this[zA] = void 0), (this[FA] = void 0), !e && !(e = this.get))) throw Error('Unknown getter');
        WA(this, e);
    }
}
const WA = (e, t) => QA(e, zA, t);
function GA(e, t) {
    if (e[zA]) {
        let n = e[FA];
        (n || QA(e, FA, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function HA(e, t) {
    let n = e[FA];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[FA] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
const QA = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    XA = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    YA = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    JA = new RegExp(`(${XA.source})(%|[a-z]+)`, 'i');
let ZA;
const eC = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    tC = (e, t, n, r, i) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
    nC = (e) => {
        ZA || (ZA = aA ? new RegExp(`(${Object.keys(aA).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => BA(e).replace(YA, LA).replace(ZA, LA)),
            n = t.map((e) => e.match(XA).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => MA(DA({}, e, { output: t })));
        return (e) => {
            var n;
            const i = !JA.test(t[0]) && (null == (n = t.find((e) => JA.test(e))) ? void 0 : n.replace(XA, ''));
            let o = 0;
            return t[0].replace(XA, () => `${r[o++](e)}${i || ''}`).replace(eC, tC);
        };
    },
    rC = 'react-spring: ',
    iC = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${rC}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    oC = iC(console.warn);
const aC = iC(console.warn);
function sC(e) {
    return YE.str(e) && ('#' == e[0] || /\d/.test(e) || e in (aA || {}));
}
const uC = (e) => z.useEffect(e, lC),
    lC = [];
function cC() {
    const e = z.useState()[1],
        t = z.useState(fC)[0];
    return (
        uC(t.unmount),
        () => {
            t.current && e({});
        }
    );
}
function fC() {
    const e = {
        current: !0,
        unmount: () => () => {
            e.current = !1;
        },
    };
    return e;
}
function dC(e) {
    const t = z.useRef();
    return (
        z.useEffect(() => {
            t.current = e;
        }),
        t.current
    );
}
const hC =
        'undefined' != typeof window && window.document && window.document.createElement
            ? z.useLayoutEffect
            : z.useEffect,
    pC = Symbol.for('Animated:node'),
    vC = (e) => e && e[pC],
    mC = (e, t) => {
        return ((n = e), (r = pC), (i = t), Object.defineProperty(n, r, { value: i, writable: !0, configurable: !0 }));
        var n, r, i;
    },
    gC = (e) => e && e[pC] && e[pC].getPayload();
class yC {
    constructor() {
        ((this.payload = void 0), mC(this, this));
    }
    getPayload() {
        return this.payload || [];
    }
}
class bC extends yC {
    constructor(e) {
        (super(),
            (this.done = !0),
            (this.elapsedTime = void 0),
            (this.lastPosition = void 0),
            (this.lastVelocity = void 0),
            (this.v0 = void 0),
            (this.durationProgress = 0),
            (this._value = e),
            YE.num(this._value) && (this.lastPosition = this._value));
    }
    static create(e) {
        return new bC(e);
    }
    getPayload() {
        return [this];
    }
    getValue() {
        return this._value;
    }
    setValue(e, t) {
        return (
            YE.num(e) &&
                ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
            this._value !== e && ((this._value = e), !0)
        );
    }
    reset() {
        const { done: e } = this;
        ((this.done = !1),
            YE.num(this._value) &&
                ((this.elapsedTime = 0),
                (this.durationProgress = 0),
                (this.lastPosition = this._value),
                e && (this.lastVelocity = null),
                (this.v0 = null)));
    }
}
class _C extends bC {
    constructor(e) {
        (super(0), (this._string = null), (this._toString = void 0), (this._toString = MA({ output: [e, e] })));
    }
    static create(e) {
        return new _C(e);
    }
    getValue() {
        let e = this._string;
        return null == e ? (this._string = this._toString(this._value)) : e;
    }
    setValue(e) {
        if (YE.str(e)) {
            if (e == this._string) return !1;
            ((this._string = e), (this._value = 1));
        } else {
            if (!super.setValue(e)) return !1;
            this._string = null;
        }
        return !0;
    }
    reset(e) {
        (e && (this._toString = MA({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
    }
}
const wC = { dependencies: null };
class SC extends yC {
    constructor(e) {
        (super(), (this.source = e), this.setValue(e));
    }
    getValue(e) {
        const t = {};
        return (
            eA(this.source, (n, r) => {
                var i;
                (i = n) && i[pC] === i ? (t[r] = n.getValue(e)) : UA(n) ? (t[r] = BA(n)) : e || (t[r] = n);
            }),
            t
        );
    }
    setValue(e) {
        ((this.source = e), (this.payload = this._makePayload(e)));
    }
    reset() {
        this.payload && ZE(this.payload, (e) => e.reset());
    }
    _makePayload(e) {
        if (e) {
            const t = new Set();
            return (eA(e, this._addToPayload, t), Array.from(t));
        }
    }
    _addToPayload(e) {
        wC.dependencies && UA(e) && wC.dependencies.add(e);
        const t = gC(e);
        t && ZE(t, (e) => this.add(e));
    }
}
class kC extends SC {
    constructor(e) {
        super(e);
    }
    static create(e) {
        return new kC(e);
    }
    getValue() {
        return this.source.map((e) => e.getValue());
    }
    setValue(e) {
        const t = this.getPayload();
        return e.length == t.length ? t.map((t, n) => t.setValue(e[n])).some(Boolean) : (super.setValue(e.map(OC)), !0);
    }
}
function OC(e) {
    return (sC(e) ? _C : bC).create(e);
}
function xC(e) {
    const t = vC(e);
    return t ? t.constructor : YE.arr(e) ? kC : sC(e) ? _C : bC;
}
function PC() {
    return (
        (PC =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }),
        PC.apply(this, arguments)
    );
}
const EC = (e, t) => {
    const n = !YE.fun(e) || (e.prototype && e.prototype.isReactComponent);
    return z.forwardRef((r, i) => {
        const o = z.useRef(null),
            a =
                n &&
                z.useCallback(
                    (e) => {
                        o.current = (function (e, t) {
                            e && (YE.fun(e) ? e(t) : (e.current = t));
                            return t;
                        })(i, e);
                    },
                    [i],
                ),
            [s, u] = (function (e, t) {
                const n = new Set();
                ((wC.dependencies = n), e.style && (e = PC({}, e, { style: t.createAnimatedStyle(e.style) })));
                return ((e = new SC(e)), (wC.dependencies = null), [e, n]);
            })(r, t),
            l = cC(),
            c = () => {
                const e = o.current;
                if (n && !e) return;
                !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && l();
            },
            f = new AC(c, u),
            d = z.useRef();
        (hC(() => {
            const e = d.current;
            ((d.current = f), ZE(u, (e) => GA(e, f)), e && (ZE(e.deps, (t) => HA(t, e)), NE.cancel(e.update)));
        }),
            z.useEffect(c, []),
            uC(() => () => {
                const e = d.current;
                ZE(e.deps, (t) => HA(t, e));
            }));
        const h = t.getComponentProps(s.getValue());
        return z.createElement(e, PC({}, h, { ref: a }));
    });
};
class AC {
    constructor(e, t) {
        ((this.update = e), (this.deps = t));
    }
    eventObserved(e) {
        'change' == e.type && NE.write(this.update);
    }
}
const CC = Symbol.for('AnimatedComponent'),
    jC = (e) => (YE.str(e) ? e : e && YE.str(e.displayName) ? e.displayName : (YE.fun(e) && e.name) || null);
function TC() {
    return (
        (TC =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }),
        TC.apply(this, arguments)
    );
}
function RC(e, ...t) {
    return YE.fun(e) ? e(...t) : e;
}
const NC = (e, t) => !0 === e || !!(t && e && (YE.fun(e) ? e(t) : tA(e).includes(t))),
    VC = (e, t) => (YE.obj(e) ? t && e[t] : e),
    IC = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
    LC = (e) => e,
    MC = (e, t = LC) => {
        let n = DC;
        e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
        const r = {};
        for (const i of n) {
            const n = t(e[i], i);
            YE.und(n) || (r[i] = n);
        }
        return r;
    },
    DC = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
    zC = {
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
function FC(e) {
    const t = (function (e) {
        const t = {};
        let n = 0;
        if (
            (eA(e, (e, r) => {
                zC[r] || ((t[r] = e), n++);
            }),
            n)
        )
            return t;
    })(e);
    if (t) {
        const n = { to: t };
        return (eA(e, (e, r) => r in t || (n[r] = e)), n);
    }
    return TC({}, e);
}
function UC(e) {
    return (
        (e = BA(e)),
        YE.arr(e) ? e.map(UC) : sC(e) ? lA.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
    );
}
function BC(e) {
    for (const t in e) return !0;
    return !1;
}
function $C(e) {
    return YE.fun(e) || (YE.arr(e) && YE.obj(e[0]));
}
function qC(e, t) {
    var n;
    (null == (n = e.ref) || n.delete(e), null == t || t.delete(e));
}
function KC(e, t) {
    var n;
    t && e.ref !== t && (null == (n = e.ref) || n.delete(e), t.add(e), (e.ref = t));
}
const WC = TC({}, { tension: 170, friction: 26 }, { mass: 1, damping: 1, easing: (e) => e, clamp: !1 });
class GC {
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
            Object.assign(this, WC));
    }
}
function HC(e, t) {
    if (YE.und(t.decay)) {
        const n = !YE.und(t.tension) || !YE.und(t.friction);
        ((!n && YE.und(t.frequency) && YE.und(t.damping) && YE.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0));
    } else e.duration = void 0;
}
const QC = [];
class XC {
    constructor() {
        ((this.changed = !1),
            (this.values = QC),
            (this.toValues = null),
            (this.fromValues = QC),
            (this.to = void 0),
            (this.from = void 0),
            (this.config = new GC()),
            (this.immediate = !1));
    }
}
function YC(e, { key: t, props: n, defaultProps: r, state: i, actions: o }) {
    return new Promise((a, s) => {
        var u;
        let l,
            c,
            f = NC(null != (u = n.cancel) ? u : null == r ? void 0 : r.cancel, t);
        if (f) p();
        else {
            YE.und(n.pause) || (i.paused = NC(n.pause, t));
            let e = null == r ? void 0 : r.pause;
            (!0 !== e && (e = i.paused || NC(e, t)),
                (l = RC(n.delay || 0, t)),
                e ? (i.resumeQueue.add(h), o.pause()) : (o.resume(), h()));
        }
        function d() {
            (i.resumeQueue.add(h), i.timeouts.delete(c), c.cancel(), (l = c.time - NE.now()));
        }
        function h() {
            l > 0 && !lA.skipAnimation ? ((c = NE.setTimeout(p, l)), i.pauseQueue.add(d), i.timeouts.add(c)) : p();
        }
        function p() {
            (i.pauseQueue.delete(d), i.timeouts.delete(c), e <= (i.cancelId || 0) && (f = !0));
            try {
                o.start(TC({}, n, { callId: e, cancel: f }), a);
            } catch (t) {
                s(t);
            }
        }
    });
}
const JC = (e, t) =>
        1 == t.length
            ? t[0]
            : t.some((e) => e.cancelled)
              ? tj(e.get())
              : t.every((e) => e.noop)
                ? ZC(e.get())
                : ej(
                      e.get(),
                      t.every((e) => e.finished),
                  ),
    ZC = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
    ej = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
    tj = (e) => ({ value: e, cancelled: !0, finished: !1 });
function nj(e, t, n, r) {
    const { callId: i, parentId: o, onRest: a } = t,
        { asyncTo: s, promise: u } = n;
    return o || e !== s || t.reset
        ? (n.promise = (async () => {
              ((n.asyncId = i), (n.asyncTo = e));
              const l = MC(t, (e, t) => ('onRest' === t ? void 0 : e));
              let c, f;
              const d = new Promise((e, t) => ((c = e), (f = t))),
                  h = (e) => {
                      const t = (i <= (n.cancelId || 0) && tj(r)) || (i !== n.asyncId && ej(r, !1));
                      if (t) throw ((e.result = t), f(e), e);
                  },
                  p = (e, t) => {
                      const o = new ij(),
                          a = new oj();
                      return (async () => {
                          if (lA.skipAnimation) throw (rj(n), (a.result = ej(r, !1)), f(a), a);
                          h(o);
                          const s = YE.obj(e) ? TC({}, e) : TC({}, t, { to: e });
                          ((s.parentId = i),
                              eA(l, (e, t) => {
                                  YE.und(s[t]) && (s[t] = e);
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
              if (lA.skipAnimation) return (rj(n), ej(r, !1));
              try {
                  let t;
                  ((t = YE.arr(e)
                      ? (async (e) => {
                            for (const t of e) await p(t);
                        })(e)
                      : Promise.resolve(e(p, r.stop.bind(r)))),
                      await Promise.all([t.then(c), d]),
                      (v = ej(r.get(), !0, !1)));
              } catch (m) {
                  if (m instanceof ij) v = m.result;
                  else {
                      if (!(m instanceof oj)) throw m;
                      v = m.result;
                  }
              } finally {
                  i == n.asyncId && ((n.asyncId = o), (n.asyncTo = o ? s : void 0), (n.promise = o ? u : void 0));
              }
              return (
                  YE.fun(a) &&
                      NE.batchedUpdates(() => {
                          a(v, r, r.item);
                      }),
                  v
              );
          })())
        : u;
}
function rj(e, t) {
    (nA(e.timeouts, (e) => e.cancel()),
        e.pauseQueue.clear(),
        e.resumeQueue.clear(),
        (e.asyncId = e.asyncTo = e.promise = void 0),
        t && (e.cancelId = t));
}
class ij extends Error {
    constructor() {
        (super(
            'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
        ),
            (this.result = void 0));
    }
}
class oj extends Error {
    constructor() {
        (super('SkipAnimationSignal'), (this.result = void 0));
    }
}
const aj = (e) => e instanceof uj;
let sj = 1;
class uj extends KA {
    constructor(...e) {
        (super(...e), (this.id = sj++), (this.key = void 0), (this._priority = 0));
    }
    get priority() {
        return this._priority;
    }
    set priority(e) {
        this._priority != e && ((this._priority = e), this._onPriorityChange(e));
    }
    get() {
        const e = vC(this);
        return e && e.getValue();
    }
    to(...e) {
        return lA.to(this, e);
    }
    interpolate(...e) {
        return (oC(`${rC}The "interpolate" function is deprecated in v9 (use "to" instead)`), lA.to(this, e));
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
        qA(this, { type: 'change', parent: this, value: e, idle: t });
    }
    _onPriorityChange(e) {
        (this.idle || pA.sort(this), qA(this, { type: 'priority', parent: this, priority: e }));
    }
}
const lj = Symbol.for('SpringPhase'),
    cj = (e) => (1 & e[lj]) > 0,
    fj = (e) => (2 & e[lj]) > 0,
    dj = (e) => (4 & e[lj]) > 0,
    hj = (e, t) => (t ? (e[lj] |= 3) : (e[lj] &= -3)),
    pj = (e, t) => (t ? (e[lj] |= 4) : (e[lj] &= -5));
class vj extends uj {
    constructor(e, t) {
        if (
            (super(),
            (this.key = void 0),
            (this.animation = new XC()),
            (this.queue = void 0),
            (this.defaultProps = {}),
            (this._state = { paused: !1, pauseQueue: new Set(), resumeQueue: new Set(), timeouts: new Set() }),
            (this._pendingCalls = new Set()),
            (this._lastCallId = 0),
            (this._lastToId = 0),
            (this._memoizedDuration = 0),
            !YE.und(e) || !YE.und(t))
        ) {
            const n = YE.obj(e) ? TC({}, e) : TC({}, t, { from: e });
            (YE.und(n.default) && (n.default = !0), this.start(n));
        }
    }
    get idle() {
        return !(fj(this) || this._state.asyncTo) || dj(this);
    }
    get goal() {
        return BA(this.animation.to);
    }
    get velocity() {
        const e = vC(this);
        return e instanceof bC ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
    }
    get hasAnimated() {
        return cj(this);
    }
    get isAnimating() {
        return fj(this);
    }
    get isPaused() {
        return dj(this);
    }
    advance(e) {
        let t = !0,
            n = !1;
        const r = this.animation;
        let { config: i, toValues: o } = r;
        const a = gC(r.to);
        (!a && UA(r.to) && (o = tA(BA(r.to))),
            r.values.forEach((s, u) => {
                if (s.done) return;
                const l = s.constructor == _C ? 1 : a ? a[u].lastPosition : o[u];
                let c = r.immediate,
                    f = l;
                if (!c) {
                    if (((f = s.lastPosition), i.tension <= 0)) return void (s.done = !0);
                    let t = (s.elapsedTime += e);
                    const n = r.fromValues[u],
                        o = null != s.v0 ? s.v0 : (s.v0 = YE.arr(i.velocity) ? i.velocity[u] : i.velocity);
                    let a;
                    if (YE.und(i.duration))
                        if (i.decay) {
                            const e = !0 === i.decay ? 0.998 : i.decay,
                                r = Math.exp(-(1 - e) * t);
                            ((f = n + (o / (1 - e)) * (1 - r)), (c = Math.abs(s.lastPosition - f) < 0.1), (a = o * r));
                        } else {
                            a = null == s.lastVelocity ? o : s.lastVelocity;
                            const t = i.precision || (n == l ? 0.005 : Math.min(1, 0.001 * Math.abs(l - n))),
                                r = i.restVelocity || t / 10,
                                u = i.clamp ? 0 : i.bounce,
                                d = !YE.und(u),
                                h = n == l ? s.v0 > 0 : n < l;
                            let p,
                                v = !1;
                            const m = 1,
                                g = Math.ceil(e / m);
                            for (
                                let e = 0;
                                e < g && ((p = Math.abs(a) > r), p || ((c = Math.abs(l - f) <= t), !c));
                                ++e
                            ) {
                                d && ((v = f == l || f > l == h), v && ((a = -a * u), (f = l)));
                                ((a += ((1e-6 * -i.tension * (f - l) + 0.001 * -i.friction * a) / i.mass) * m),
                                    (f += a * m));
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
        const s = vC(this),
            u = s.getValue();
        if (t) {
            const e = BA(r.to);
            ((u === e && !n) || i.decay ? n && i.decay && this._onChange(u) : (s.setValue(e), this._onChange(e)),
                this._stop());
        } else n && this._onChange(u);
    }
    set(e) {
        return (
            NE.batchedUpdates(() => {
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
        if (fj(this)) {
            const { to: e, config: t } = this.animation;
            NE.batchedUpdates(() => {
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
            YE.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [YE.obj(e) ? e : TC({}, t, { to: e })]),
            Promise.all(n.map((e) => this._update(e))).then((e) => JC(this, e))
        );
    }
    stop(e) {
        const { to: t } = this.animation;
        return (
            this._focus(this.get()),
            rj(this._state, e && this._lastCallId),
            NE.batchedUpdates(() => this._stop(t, e)),
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
        ((n = YE.obj(n) ? n[t] : n),
            (null == n || $C(n)) && (n = void 0),
            (r = YE.obj(r) ? r[t] : r),
            null == r && (r = void 0));
        const i = { to: n, from: r };
        return (
            cj(this) ||
                (e.reverse && ([n, r] = [r, n]), (r = BA(r)), YE.und(r) ? vC(this) || this._set(n) : this._set(r)),
            i
        );
    }
    _update(e, t) {
        let n = TC({}, e);
        const { key: r, defaultProps: i } = this;
        (n.default &&
            Object.assign(
                i,
                MC(n, (e, t) => (/^on/.test(t) ? VC(e, r) : e)),
            ),
            Sj(this, n, 'onProps'),
            kj(this, 'onProps', n, this));
        const o = this._prepareNode(n);
        if (Object.isFrozen(this))
            throw Error(
                'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
            );
        const a = this._state;
        return YC(++this._lastCallId, {
            key: r,
            props: n,
            defaultProps: i,
            state: a,
            actions: {
                pause: () => {
                    dj(this) ||
                        (pj(this, !0),
                        rA(a.pauseQueue),
                        kj(this, 'onPause', ej(this, mj(this, this.animation.to)), this));
                },
                resume: () => {
                    dj(this) &&
                        (pj(this, !1),
                        fj(this) && this._resume(),
                        rA(a.resumeQueue),
                        kj(this, 'onResume', ej(this, mj(this, this.animation.to)), this));
                },
                start: this._merge.bind(this, o),
            },
        }).then((e) => {
            if (n.loop && e.finished && (!t || !e.noop)) {
                const e = gj(n);
                if (e) return this._update(e, !0);
            }
            return e;
        });
    }
    _merge(e, t, n) {
        if (t.cancel) return (this.stop(!0), n(tj(this)));
        const r = !YE.und(e.to),
            i = !YE.und(e.from);
        if (r || i) {
            if (!(t.callId > this._lastToId)) return n(tj(this));
            this._lastToId = t.callId;
        }
        const { key: o, defaultProps: a, animation: s } = this,
            { to: u, from: l } = s;
        let { to: c = u, from: f = l } = e;
        (!i || r || (t.default && !YE.und(c)) || (c = f), t.reverse && ([c, f] = [f, c]));
        const d = !JE(f, l);
        (d && (s.from = f), (f = BA(f)));
        const h = !JE(c, u);
        h && this._focus(c);
        const p = $C(t.to),
            { config: v } = s,
            { decay: m, velocity: g } = v;
        ((r || i) && (v.velocity = 0),
            t.config &&
                !p &&
                (function (e, t, n) {
                    (n && (HC((n = TC({}, n)), t), (t = TC({}, n, t))), HC(e, t), Object.assign(e, t));
                    for (const a in WC) null == e[a] && (e[a] = WC[a]);
                    let { mass: r, frequency: i, damping: o } = e;
                    YE.und(i) ||
                        (i < 0.01 && (i = 0.01),
                        o < 0 && (o = 0),
                        (e.tension = Math.pow((2 * Math.PI) / i, 2) * r),
                        (e.friction = (4 * Math.PI * o * r) / i));
                })(v, RC(t.config, o), t.config !== a.config ? RC(a.config, o) : void 0));
        let y = vC(this);
        if (!y || YE.und(c)) return n(ej(this, !0));
        const b = YE.und(t.reset) ? i && !t.default : !YE.und(f) && NC(t.reset, o),
            _ = b ? f : this.get(),
            w = UC(c),
            S = YE.num(w) || YE.arr(w) || sC(w),
            k = !p && (!S || NC(a.immediate || t.immediate, o));
        if (h) {
            const e = xC(c);
            if (e !== y.constructor) {
                if (!k)
                    throw Error(
                        `Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`,
                    );
                y = this._set(w);
            }
        }
        const O = y.constructor;
        let x = UA(c),
            P = !1;
        if (!x) {
            const e = b || (!cj(this) && d);
            ((h || e) && ((P = JE(UC(_), w)), (x = !P)),
                ((JE(s.immediate, k) || k) && JE(v.decay, m) && JE(v.velocity, g)) || (x = !0));
        }
        if (
            (P && fj(this) && (s.changed && !b ? (x = !0) : x || this._stop(u)),
            !p &&
                ((x || UA(u)) && ((s.values = y.getPayload()), (s.toValues = UA(c) ? null : O == _C ? [1] : tA(w))),
                s.immediate != k && ((s.immediate = k), k || b || this._set(u)),
                x))
        ) {
            const { onRest: e } = s;
            ZE(wj, (e) => Sj(this, t, e));
            const r = ej(this, mj(this, u));
            (rA(this._pendingCalls, r),
                this._pendingCalls.add(n),
                s.changed &&
                    NE.batchedUpdates(() => {
                        ((s.changed = !b),
                            null == e || e(r, this),
                            b ? RC(a.onRest, r) : null == s.onStart || s.onStart(r, this));
                    }));
        }
        (b && this._set(_),
            p
                ? n(nj(t.to, t, this._state, this))
                : x
                  ? this._start()
                  : fj(this) && !h
                    ? this._pendingCalls.add(n)
                    : n(ZC(_)));
    }
    _focus(e) {
        const t = this.animation;
        e !== t.to && ($A(this) && this._detach(), (t.to = e), $A(this) && this._attach());
    }
    _attach() {
        let e = 0;
        const { to: t } = this.animation;
        (UA(t) && (GA(t, this), aj(t) && (e = t.priority + 1)), (this.priority = e));
    }
    _detach() {
        const { to: e } = this.animation;
        UA(e) && HA(e, this);
    }
    _set(e, t = !0) {
        const n = BA(e);
        if (!YE.und(n)) {
            const e = vC(this);
            if (!e || !JE(n, e.getValue())) {
                const r = xC(n);
                (e && e.constructor == r ? e.setValue(n) : mC(this, r.create(n)),
                    e &&
                        NE.batchedUpdates(() => {
                            this._onChange(n, t);
                        }));
            }
        }
        return vC(this);
    }
    _onStart() {
        const e = this.animation;
        e.changed || ((e.changed = !0), kj(this, 'onStart', ej(this, mj(this, e.to)), this));
    }
    _onChange(e, t) {
        (t || (this._onStart(), RC(this.animation.onChange, e, this)),
            RC(this.defaultProps.onChange, e, this),
            super._onChange(e, t));
    }
    _start() {
        const e = this.animation;
        (vC(this).reset(BA(e.to)),
            e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
            fj(this) || (hj(this, !0), dj(this) || this._resume()));
    }
    _resume() {
        lA.skipAnimation ? this.finish() : pA.start(this);
    }
    _stop(e, t) {
        if (fj(this)) {
            hj(this, !1);
            const n = this.animation;
            (ZE(n.values, (e) => {
                e.done = !0;
            }),
                n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                qA(this, { type: 'idle', parent: this }));
            const r = t ? tj(this.get()) : ej(this.get(), mj(this, null != e ? e : n.to));
            (rA(this._pendingCalls, r), n.changed && ((n.changed = !1), kj(this, 'onRest', r, this)));
        }
    }
}
function mj(e, t) {
    const n = UC(t);
    return JE(UC(e.get()), n);
}
function gj(e, t = e.loop, n = e.to) {
    let r = RC(t);
    if (r) {
        const i = !0 !== r && FC(r),
            o = (i || e).reverse,
            a = !i || i.reset;
        return yj(
            TC(
                {},
                e,
                {
                    loop: t,
                    default: !1,
                    pause: void 0,
                    to: !o || $C(n) ? n : void 0,
                    from: a ? e.from : void 0,
                    reset: a,
                },
                i,
            ),
        );
    }
}
function yj(e) {
    const { to: t, from: n } = (e = FC(e)),
        r = new Set();
    return (YE.obj(t) && _j(t, r), YE.obj(n) && _j(n, r), (e.keys = r.size ? Array.from(r) : null), e);
}
function bj(e) {
    const t = yj(e);
    return (YE.und(t.default) && (t.default = MC(t)), t);
}
function _j(e, t) {
    eA(e, (e, n) => null != e && t.add(n));
}
const wj = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
function Sj(e, t, n) {
    e.animation[n] = t[n] !== IC(t, n) ? VC(t[n], e.key) : void 0;
}
function kj(e, t, ...n) {
    var r, i, o, a;
    (null == (r = (i = e.animation)[t]) || r.call(i, ...n), null == (o = (a = e.defaultProps)[t]) || o.call(a, ...n));
}
const Oj = ['onStart', 'onChange', 'onRest'];
let xj = 1;
class Pj {
    constructor(e, t) {
        ((this.id = xj++),
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
            e && this.start(TC({ default: !0 }, e)));
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
            YE.und(n) || this.springs[t].set(n);
        }
    }
    update(e) {
        return (e && this.queue.push(yj(e)), this);
    }
    start(e) {
        let { queue: t } = this;
        return (
            e ? (t = tA(e).map(yj)) : (this.queue = []),
            this._flush ? this._flush(this, t) : (Nj(this, t), Ej(this, t))
        );
    }
    stop(e, t) {
        if ((e !== !!e && (t = e), t)) {
            const n = this.springs;
            ZE(tA(t), (t) => n[t].stop(!!e));
        } else (rj(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
        return this;
    }
    pause(e) {
        if (YE.und(e)) this.start({ pause: !0 });
        else {
            const t = this.springs;
            ZE(tA(e), (e) => t[e].pause());
        }
        return this;
    }
    resume(e) {
        if (YE.und(e)) this.start({ pause: !1 });
        else {
            const t = this.springs;
            ZE(tA(e), (e) => t[e].resume());
        }
        return this;
    }
    each(e) {
        eA(this.springs, e);
    }
    _onFrame() {
        const { onStart: e, onChange: t, onRest: n } = this._events,
            r = this._active.size > 0,
            i = this._changed.size > 0;
        ((r && !this._started) || (i && !this._started)) &&
            ((this._started = !0),
            nA(e, ([e, t]) => {
                ((t.value = this.get()), e(t, this, this._item));
            }));
        const o = !r && this._started,
            a = i || (o && n.size) ? this.get() : null;
        (i &&
            t.size &&
            nA(t, ([e, t]) => {
                ((t.value = a), e(t, this, this._item));
            }),
            o &&
                ((this._started = !1),
                nA(n, ([e, t]) => {
                    ((t.value = a), e(t, this, this._item));
                })));
    }
    eventObserved(e) {
        if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
        else {
            if ('idle' != e.type) return;
            this._active.delete(e.parent);
        }
        NE.onFrame(this._onFrame);
    }
}
function Ej(e, t) {
    return Promise.all(t.map((t) => Aj(e, t))).then((t) => JC(e, t));
}
async function Aj(e, t, n) {
    const { keys: r, to: i, from: o, loop: a, onRest: s, onResolve: u } = t,
        l = YE.obj(t.default) && t.default;
    (a && (t.loop = !1), !1 === i && (t.to = null), !1 === o && (t.from = null));
    const c = YE.arr(i) || YE.fun(i) ? i : void 0;
    c
        ? ((t.to = void 0), (t.onRest = void 0), l && (l.onRest = void 0))
        : ZE(Oj, (n) => {
              const r = t[n];
              if (YE.fun(r)) {
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
        ? ((f.paused = t.pause), rA(t.pause ? f.pauseQueue : f.resumeQueue))
        : f.paused && (t.pause = !0);
    const d = (r || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
        h = !0 === t.cancel || !0 === IC(t, 'cancel');
    ((c || (h && f.asyncId)) &&
        d.push(
            YC(++e._lastAsyncId, {
                props: t,
                state: f,
                actions: {
                    pause: XE,
                    resume: XE,
                    start(t, n) {
                        h ? (rj(f, e._lastAsyncId), n(tj(e))) : ((t.onRest = s), n(nj(c, t, f, e)));
                    },
                },
            }),
        ),
        f.paused &&
            (await new Promise((e) => {
                f.resumeQueue.add(e);
            })));
    const p = JC(e, await Promise.all(d));
    if (a && p.finished && (!n || !p.noop)) {
        const n = gj(t, a, i);
        if (n) return (Nj(e, [n]), Aj(e, n, !0));
    }
    return (u && NE.batchedUpdates(() => u(p, e, e.item)), p);
}
function Cj(e, t) {
    const n = TC({}, e.springs);
    return (
        t &&
            ZE(tA(t), (e) => {
                (YE.und(e.keys) && (e = yj(e)),
                    YE.obj(e.to) || (e = TC({}, e, { to: void 0 })),
                    Rj(n, e, (e) => Tj(e)));
            }),
        jj(e, n),
        n
    );
}
function jj(e, t) {
    eA(t, (t, n) => {
        e.springs[n] || ((e.springs[n] = t), GA(t, e));
    });
}
function Tj(e, t) {
    const n = new vj();
    return ((n.key = e), t && GA(n, t), n);
}
function Rj(e, t, n) {
    t.keys &&
        ZE(t.keys, (r) => {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function Nj(e, t) {
    ZE(t, (t) => {
        Rj(e.springs, t, (t) => Tj(t, e));
    });
}
const Vj = ['children'],
    Ij = (e) => {
        let { children: t } = e,
            n = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                return i;
            })(e, Vj);
        const r = z.useContext(Lj),
            i = n.pause || !!r.pause,
            o = n.immediate || !!r.immediate;
        n = (function (e, t) {
            const [n] = z.useState(() => ({ inputs: t, result: e() })),
                r = z.useRef(),
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
                z.useEffect(() => {
                    ((r.current = o), i == n && (n.inputs = n.result = void 0));
                }, [o]),
                o.result
            );
        })(() => ({ pause: i, immediate: o }), [i, o]);
        const { Provider: a } = Lj;
        return z.createElement(a, { value: n }, t);
    },
    Lj = (function (e, t) {
        return (Object.assign(e, z.createContext(t)), (e.Provider._context = e), (e.Consumer._context = e), e);
    })(Ij, {});
((Ij.Provider = Lj.Provider), (Ij.Consumer = Lj.Consumer));
const Mj = () => {
    const e = [],
        t = function (t) {
            aC(
                `${rC}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
            );
            const r = [];
            return (
                ZE(e, (e, i) => {
                    if (YE.und(t)) r.push(e.start());
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
            return (ZE(e, (e) => e.pause(...arguments)), this);
        }),
        (t.resume = function () {
            return (ZE(e, (e) => e.resume(...arguments)), this);
        }),
        (t.set = function (t) {
            ZE(e, (e) => e.set(t));
        }),
        (t.start = function (t) {
            const n = [];
            return (
                ZE(e, (e, r) => {
                    if (YE.und(t)) n.push(e.start());
                    else {
                        const i = this._getProps(t, e, r);
                        i && n.push(e.start(i));
                    }
                }),
                n
            );
        }),
        (t.stop = function () {
            return (ZE(e, (e) => e.stop(...arguments)), this);
        }),
        (t.update = function (t) {
            return (ZE(e, (e, n) => e.update(this._getProps(t, e, n))), this);
        }));
    const n = function (e, t, n) {
        return YE.fun(e) ? e(n, t) : e;
    };
    return ((t._getProps = n), t);
};
function Dj(e, t) {
    const n = YE.fun(e),
        [[r], i] = (function (e, t, n) {
            const r = YE.fun(t) && t;
            r && !n && (n = []);
            const i = z.useMemo(() => (r || 3 == arguments.length ? Mj() : void 0), []),
                o = z.useRef(0),
                a = cC(),
                s = z.useMemo(
                    () => ({
                        ctrls: [],
                        queue: [],
                        flush(e, t) {
                            const n = Cj(e, t);
                            return o.current > 0 && !s.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                                ? Ej(e, t)
                                : new Promise((r) => {
                                      (jj(e, n),
                                          s.queue.push(() => {
                                              r(Ej(e, t));
                                          }),
                                          a());
                                  });
                        },
                    }),
                    [],
                ),
                u = z.useRef([...s.ctrls]),
                l = [],
                c = dC(e) || 0;
            function f(e, n) {
                for (let i = e; i < n; i++) {
                    const e = u.current[i] || (u.current[i] = new Pj(null, s.flush)),
                        n = r ? r(i, e) : t[i];
                    n && (l[i] = bj(n));
                }
            }
            (z.useMemo(() => {
                (ZE(u.current.slice(e, c), (e) => {
                    (qC(e, i), e.stop(!0));
                }),
                    (u.current.length = e),
                    f(c, e));
            }, [e]),
                z.useMemo(() => {
                    f(0, Math.min(c, e));
                }, n));
            const d = u.current.map((e, t) => Cj(e, l[t])),
                h = z.useContext(Ij),
                p = dC(h),
                v = h !== p && BC(h);
            (hC(() => {
                (o.current++, (s.ctrls = u.current));
                const { queue: e } = s;
                (e.length && ((s.queue = []), ZE(e, (e) => e())),
                    ZE(u.current, (e, t) => {
                        (null == i || i.add(e), v && e.start({ default: h }));
                        const n = l[t];
                        n && (KC(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
                    }));
            }),
                uC(() => () => {
                    ZE(s.ctrls, (e) => e.stop(!0));
                }));
            const m = d.map((e) => TC({}, e));
            return i ? [m, i] : m;
        })(1, n ? e : [e], n ? t || [] : t);
    return n || 2 == arguments.length ? [r, i] : r;
}
const zj = () => Mj(),
    Fj = () => z.useState(zj)[0];
let Uj;
var Bj;
function $j(e, t, n) {
    const r = YE.fun(t) && t,
        { reset: i, sort: o, trail: a = 0, expires: s = !0, onDestroyed: u, ref: l, config: c } = r ? r() : t,
        f = z.useMemo(() => (r || 3 == arguments.length ? Mj() : void 0), []),
        d = tA(e),
        h = [],
        p = z.useRef(null),
        v = i ? null : p.current;
    (hC(() => {
        p.current = h;
    }),
        uC(
            () => () =>
                ZE(p.current, (e) => {
                    (e.expired && clearTimeout(e.expirationId), qC(e.ctrl, f), e.ctrl.stop(!0));
                }),
        ));
    const m = (function (e, { key: t, keys: n = t }, r) {
            if (null === n) {
                const t = new Set();
                return e.map((e) => {
                    const n = r && r.find((n) => n.item === e && n.phase !== Uj.LEAVE && !t.has(n));
                    return n ? (t.add(n), n.key) : qj++;
                });
            }
            return YE.und(n) ? e : YE.fun(n) ? e.map(n) : tA(n);
        })(d, r ? r() : t, v),
        g = (i && p.current) || [];
    hC(() =>
        ZE(g, ({ ctrl: e, item: t, key: n }) => {
            (qC(e, f), RC(u, t, n));
        }),
    );
    const y = [];
    if (
        (v &&
            ZE(v, (e, t) => {
                e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = y[t] = m.indexOf(e.key)) && (h[t] = e);
            }),
        ZE(d, (e, t) => {
            h[t] || ((h[t] = { key: m[t], item: e, phase: Uj.MOUNT, ctrl: new Pj() }), (h[t].ctrl.item = e));
        }),
        y.length)
    ) {
        let e = -1;
        const { leave: n } = r ? r() : t;
        ZE(y, (t, r) => {
            const i = v[r];
            ~t ? ((e = h.indexOf(i)), (h[e] = TC({}, i, { item: d[t] }))) : n && h.splice(++e, 0, i);
        });
    }
    YE.fun(o) && h.sort((e, t) => o(e.item, t.item));
    let b = -a;
    const _ = cC(),
        w = MC(t),
        S = new Map();
    ZE(h, (e, n) => {
        const i = e.key,
            o = e.phase,
            u = r ? r() : t;
        let f,
            d,
            h = RC(u.delay || 0, i);
        if (o == Uj.MOUNT) ((f = u.enter), (d = Uj.ENTER));
        else {
            const e = m.indexOf(i) < 0;
            if (o != Uj.LEAVE)
                if (e) ((f = u.leave), (d = Uj.LEAVE));
                else {
                    if (!(f = u.update)) return;
                    d = Uj.UPDATE;
                }
            else {
                if (e) return;
                ((f = u.enter), (d = Uj.ENTER));
            }
        }
        if (((f = RC(f, e.item, n)), (f = YE.obj(f) ? FC(f) : { to: f }), !f.config)) {
            const t = c || w.config;
            f.config = RC(t, e.item, n, d);
        }
        b += a;
        const g = TC({}, w, { delay: h + b, ref: l, immediate: u.immediate, reset: !1 }, f);
        if (d == Uj.ENTER && YE.und(g.from)) {
            const i = r ? r() : t,
                o = YE.und(i.initial) || v ? i.from : i.initial;
            g.from = RC(o, e.item, n);
        }
        const { onResolve: y } = g;
        g.onResolve = (e) => {
            RC(y, e);
            const t = p.current,
                n = t.find((e) => e.key === i);
            if (n && (!e.cancelled || n.phase == Uj.UPDATE) && n.ctrl.idle) {
                const e = t.every((e) => e.ctrl.idle);
                if (n.phase == Uj.LEAVE) {
                    const t = RC(s, n.item);
                    if (!1 !== t) {
                        const r = !0 === t ? 0 : t;
                        if (((n.expired = !0), !e && r > 0))
                            return void (r <= 2147483647 && (n.expirationId = setTimeout(_, r)));
                    }
                }
                e && t.some((e) => e.expired) && _();
            }
        };
        const k = Cj(e.ctrl, g);
        S.set(e, { phase: d, springs: k, payload: g });
    });
    const k = z.useContext(Ij),
        O = dC(k),
        x = k !== O && BC(k);
    (hC(() => {
        x &&
            ZE(h, (e) => {
                e.ctrl.start({ default: k });
            });
    }, [k]),
        hC(
            () => {
                ZE(S, ({ phase: e, payload: t }, n) => {
                    const { ctrl: r } = n;
                    ((n.phase = e),
                        null == f || f.add(r),
                        x && e == Uj.ENTER && r.start({ default: k }),
                        t && (KC(r, t.ref), r.ref ? r.update(t) : r.start(t)));
                });
            },
            i ? void 0 : n,
        ));
    const P = (e) =>
        z.createElement(
            z.Fragment,
            null,
            h.map((t, n) => {
                const { springs: r } = S.get(t) || t.ctrl,
                    i = e(TC({}, r), t.item, t, n);
                return i && i.type
                    ? z.createElement(
                          i.type,
                          TC({}, i.props, { key: YE.str(t.key) || YE.num(t.key) ? t.key : t.ctrl.id, ref: i.ref }),
                      )
                    : i;
            }),
        );
    return f ? [P, f] : P;
}
(((Bj = Uj || (Uj = {})).MOUNT = 'mount'), (Bj.ENTER = 'enter'), (Bj.UPDATE = 'update'), (Bj.LEAVE = 'leave'));
let qj = 1;
class Kj extends uj {
    constructor(e, t) {
        (super(),
            (this.key = void 0),
            (this.idle = !0),
            (this.calc = void 0),
            (this._active = new Set()),
            (this.source = e),
            (this.calc = MA(...t)));
        const n = this._get(),
            r = xC(n);
        mC(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        (JE(t, this.get()) || (vC(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && Gj(this._active) && Hj(this));
    }
    _get() {
        const e = YE.arr(this.source) ? this.source.map(BA) : tA(BA(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !Gj(this._active) &&
            ((this.idle = !1),
            ZE(gC(this), (e) => {
                e.done = !1;
            }),
            lA.skipAnimation ? (NE.batchedUpdates(() => this.advance()), Hj(this)) : pA.start(this));
    }
    _attach() {
        let e = 1;
        (ZE(tA(this.source), (t) => {
            (UA(t) && GA(t, this), aj(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (ZE(tA(this.source), (e) => {
            UA(e) && HA(e, this);
        }),
            this._active.clear(),
            Hj(this));
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = tA(this.source).reduce((e, t) => Math.max(e, (aj(t) ? t.priority : 0) + 1), 0));
    }
}
function Wj(e) {
    return !1 !== e.idle;
}
function Gj(e) {
    return !e.size || Array.from(e).every(Wj);
}
function Hj(e) {
    e.idle ||
        ((e.idle = !0),
        ZE(gC(e), (e) => {
            e.done = !0;
        }),
        qA(e, { type: 'idle', parent: e }));
}
function Qj(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
lA.assign({ createStringInterpolator: nC, to: (e, t) => new Kj(e, t) });
const Xj = ['style', 'children', 'scrollTop', 'scrollLeft'],
    Yj = /^--/;
function Jj(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || Yj.test(e) || (eT.hasOwnProperty(e) && eT[e])
          ? ('' + t).trim()
          : t + 'px';
}
const Zj = {};
let eT = {
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
const tT = ['Webkit', 'Ms', 'Moz', 'O'];
eT = Object.keys(eT).reduce(
    (e, t) => (tT.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    eT,
);
const nT = ['x', 'y', 'z'],
    rT = /^(matrix|translate|scale|rotate|skew)/,
    iT = /^(translate)/,
    oT = /^(rotate|skew)/,
    aT = (e, t) => (YE.num(e) && 0 !== e ? e + t : e),
    sT = (e, t) => (YE.arr(e) ? e.every((e) => sT(e, t)) : YE.num(e) ? e === t : parseFloat(e) === t);
class uT extends SC {
    constructor(e) {
        let { x: t, y: n, z: r } = e,
            i = Qj(e, nT);
        const o = [],
            a = [];
        ((t || n || r) &&
            (o.push([t || 0, n || 0, r || 0]),
            a.push((e) => [`translate3d(${e.map((e) => aT(e, 'px')).join(',')})`, sT(e, 0)])),
            eA(i, (e, t) => {
                if ('transform' === t) (o.push([e || '']), a.push((e) => [e, '' === e]));
                else if (rT.test(t)) {
                    if ((delete i[t], YE.und(e))) return;
                    const n = iT.test(t) ? 'px' : oT.test(t) ? 'deg' : '';
                    (o.push(tA(e)),
                        a.push(
                            'rotate3d' === t
                                ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${aT(i, n)})`, sT(i, 0)]
                                : (e) => [
                                      `${t}(${e.map((e) => aT(e, n)).join(',')})`,
                                      sT(e, t.startsWith('scale') ? 1 : 0),
                                  ],
                        ));
                }
            }),
            o.length && (i.transform = new lT(o, a)),
            super(i));
    }
}
class lT extends KA {
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
            ZE(this.inputs, (n, r) => {
                const i = BA(n[0]),
                    [o, a] = this.transforms[r](YE.arr(i) ? i : n.map(BA));
                ((e += ' ' + o), (t = t && a));
            }),
            t ? 'none' : e
        );
    }
    observerAdded(e) {
        1 == e && ZE(this.inputs, (e) => ZE(e, (e) => UA(e) && GA(e, this)));
    }
    observerRemoved(e) {
        0 == e && ZE(this.inputs, (e) => ZE(e, (e) => UA(e) && HA(e, this)));
    }
    eventObserved(e) {
        ('change' == e.type && (this._value = null), qA(this, e));
    }
}
const cT = ['scrollTop', 'scrollLeft'];
lA.assign({
    batchedUpdates: zf.unstable_batchedUpdates,
    createStringInterpolator: nC,
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
const fT = ((
    e,
    {
        applyAnimatedValues: t = () => !1,
        createAnimatedStyle: n = (e) => new SC(e),
        getComponentProps: r = (e) => e,
    } = {},
) => {
    const i = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
        o = (e) => {
            const t = jC(e) || 'Anonymous';
            return (
                ((e = YE.str(e) ? o[e] || (o[e] = EC(e, i)) : e[CC] || (e[CC] = EC(e, i))).displayName =
                    `Animated(${t})`),
                e
            );
        };
    return (
        eA(e, (t, n) => {
            (YE.arr(e) && (n = jC(t)), (o[n] = o(t)));
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
                u = Qj(r, Xj),
                l = Object.values(u),
                c = Object.keys(u).map((t) =>
                    n || e.hasAttribute(t) ? t : Zj[t] || (Zj[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                );
            void 0 !== o && (e.textContent = o);
            for (let f in i)
                if (i.hasOwnProperty(f)) {
                    const t = Jj(f, i[f]);
                    Yj.test(f) ? e.style.setProperty(f, t) : (e.style[f] = t);
                }
            (c.forEach((t, n) => {
                e.setAttribute(t, l[n]);
            }),
                void 0 !== a && (e.scrollTop = a),
                void 0 !== s && (e.scrollLeft = s));
        },
        createAnimatedStyle: (e) => new uT(e),
        getComponentProps: (e) => Qj(e, cT),
    },
).animated;
if (!z.useState) throw new Error('mobx-react-lite requires React with Hooks support');
if (!sv) throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
function dT(e) {
    e();
}
function hT(e) {
    return Fp(Yv(e, t));
    var t;
}
var pT = new ((function () {
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
    vT = { exports: {} },
    mT = {},
    gT = z;
var yT =
        'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    bT = gT.useState,
    _T = gT.useEffect,
    wT = gT.useLayoutEffect,
    ST = gT.useDebugValue;
function kT(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !yT(e, n);
    } catch (r) {
        return !0;
    }
}
var OT =
    'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
              return t();
          }
        : function (e, t) {
              var n = t(),
                  r = bT({ inst: { value: n, getSnapshot: t } }),
                  i = r[0].inst,
                  o = r[1];
              return (
                  wT(
                      function () {
                          ((i.value = n), (i.getSnapshot = t), kT(i) && o({ inst: i }));
                      },
                      [e, n, t],
                  ),
                  _T(
                      function () {
                          return (
                              kT(i) && o({ inst: i }),
                              e(function () {
                                  kT(i) && o({ inst: i });
                              })
                          );
                      },
                      [e],
                  ),
                  ST(n),
                  n
              );
          };
((mT.useSyncExternalStore = void 0 !== gT.useSyncExternalStore ? gT.useSyncExternalStore : OT), (vT.exports = mT));
var xT,
    PT,
    ET = vT.exports;
function AT(e) {
    e.reaction = new fp('observer'.concat(e.name), function () {
        var t;
        ((e.stateVersion = Symbol()), null === (t = e.onStoreChange) || void 0 === t || t.call(e));
    });
}
var CT = 'function' == typeof Symbol && Symbol.for,
    jT =
        null !==
            (PT =
                null === (xT = Object.getOwnPropertyDescriptor(function () {}, 'name')) || void 0 === xT
                    ? void 0
                    : xT.configurable) &&
        void 0 !== PT &&
        PT,
    TT = CT
        ? Symbol.for('react.forward_ref')
        : 'function' == typeof z.forwardRef &&
          z.forwardRef(function (e) {
              return null;
          }).$$typeof,
    RT = CT
        ? Symbol.for('react.memo')
        : 'function' == typeof z.memo &&
          z.memo(function (e) {
              return null;
          }).$$typeof;
function NT(e, t) {
    if (RT && e.$$typeof === RT)
        throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
        );
    var n = (void 0, !1),
        r = e,
        i = e.displayName || e.name;
    if (TT && e.$$typeof === TT && ((n = !0), 'function' != typeof (r = e.render)))
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
                            pT.unregister(r),
                            (r.onStoreChange = e),
                            r.reaction || (AT(r), (r.stateVersion = Symbol())),
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
                (a.reaction || (AT(a), pT.register(n, a, a)),
                F.useDebugValue(a.reaction, hT),
                ET.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot),
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
        jT && Object.defineProperty(o, 'name', { value: e.name, writable: !0, configurable: !0 }),
        e.contextTypes && (o.contextTypes = e.contextTypes),
        n && (o = z.forwardRef(o)),
        (function (e, t) {
            Object.keys(e).forEach(function (n) {
                VT[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
            });
        })(e, (o = z.memo(o))),
        o
    );
}
var VT = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
(!(function (e) {
    (e || (e = dT), Dp({ reactionScheduler: e }));
})(zf.unstable_batchedUpdates),
    pT.finalizeAllImmediately);
export {
    F as R,
    ve as a,
    ge as b,
    Ce as c,
    me as d,
    $f as e,
    xp as f,
    Te as g,
    lS as h,
    TE as i,
    H as j,
    lE as k,
    qP as l,
    Dy as m,
    Dj as n,
    wh as o,
    fT as p,
    NT as q,
    z as r,
    Fj as s,
    $j as t,
    Hh as u,
    Bw as v,
    oS as w,
};
