function e(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var t,
    n,
    r = { exports: {} },
    i = {};
var a =
    (n ||
        ((n = 1),
        (r.exports = (function () {
            if (t) return i;
            t = 1;
            var e = Symbol.for('react.transitional.element'),
                n = Symbol.for('react.fragment');
            function r(t, n, r) {
                var i = null;
                if ((void 0 !== r && (i = '' + r), void 0 !== n.key && (i = '' + n.key), 'key' in n))
                    for (var a in ((r = {}), n)) 'key' !== a && (r[a] = n[a]);
                else r = n;
                return ((n = r.ref), { $$typeof: e, type: t, key: i, ref: void 0 !== n ? n : null, props: r });
            }
            return ((i.Fragment = n), (i.jsx = r), (i.jsxs = r), i);
        })())),
    r.exports);
class o extends Error {
    constructor(e) {
        (super(e),
            Object.defineProperty(this, 'message', { enumerable: !1, value: e }),
            Object.defineProperty(this, 'name', { enumerable: !1, value: this.constructor.name }),
            'captureStackTrace' in Error
                ? Error.captureStackTrace(this, this.constructor)
                : Object.defineProperty(this, 'stack', {
                      enumerable: !1,
                      value: Error(e).stack,
                      writable: !0,
                      configurable: !0,
                  }));
    }
}
class s extends o {}
class l extends s {
    constructor(e, t, n, r) {
        super(`${e}: expected ${t} to be ${n}, but got ${r}.`);
    }
    static assert(e, t, n, r, i) {
        if (!e) throw new l(t, n, r, i);
        return e;
    }
}
class u extends s {
    constructor(e, t, n) {
        const r = e.toString(),
            i = t.map(({ name: e }) => e.toString());
        i.push(r);
        let a = `Could not resolve '${r}'.`;
        (n && (a += ` ${n}`), (a += '\n\n'), (a += `Resolution path: ${i.join(' -> ')}`), super(a));
    }
}
class c extends s {
    constructor(e, t) {
        let n = `Could not register '${e.toString()}'.`;
        (t && (n += ` ${t}`), super(n));
    }
}
const f = 'PROXY',
    d = 'CLASSIC',
    h = 'SINGLETON',
    p = 'TRANSIENT',
    v = 'SCOPED';
function y(e) {
    const t = e.length;
    let n = 0,
        r = 'EOF',
        i = '',
        a = 0,
        o = 0,
        s = 0;
    return {
        next: function (e = 0) {
            return ((a = e), l(), h());
        },
        done: function () {
            return 'EOF' === r;
        },
    };
    function l() {
        for (i = '', r = 'EOF'; ; ) {
            if (n >= t) return (r = 'EOF');
            const i = e.charAt(n);
            if (g(i)) n++;
            else
                switch (i) {
                    case '(':
                        return (n++, o++, (r = i));
                    case ')':
                        return (n++, s++, (r = i));
                    case '*':
                    case ',':
                        return (n++, (r = i));
                    case '=':
                        return (n++, 1 & a || c(), (r = i));
                    case '/': {
                        n++;
                        const t = e.charAt(n);
                        ('/' === t && (f((e) => '\n' === e, !0), n++),
                            '*' === t &&
                                (f((t) => {
                                    const r = e.charAt(n + 1);
                                    return '*' === t && '/' === r;
                                }, !0),
                                n++));
                        break;
                    }
                    default:
                        if (w(i)) return (u(), r);
                        n++;
                }
        }
    }
    function u() {
        const t = e.charAt(n),
            a = ++n;
        for (; S(e.charAt(n)); ) n++;
        return (
            (i = '' + t + e.substring(a, n)),
            (r = 'function' === i || 'class' === i ? i : 'ident'),
            'ident' !== r && (i = ''),
            i
        );
    }
    function c() {
        f((e) => {
            const t = o === s + 1;
            return !(',' !== e || !t) || ('(' === e ? (o++, !1) : !(')' !== e || (s++, !t)));
        });
    }
    function f(t, r = !1) {
        for (; n < e.length; ) {
            const i = e.charAt(n);
            if (t(i)) return;
            if (!r) {
                if (g(i)) {
                    n++;
                    continue;
                }
                if (m(i)) {
                    d();
                    continue;
                }
            }
            n++;
        }
    }
    function d() {
        const t = e.charAt(n);
        for (n++; n < e.length; ) {
            const r = e.charAt(n),
                i = e.charAt(n - 1);
            if (r === t && '\\' !== i) return void n++;
            if ('`' === t) {
                if ('$' === e.charAt(n + 1)) {
                    '{' === e.charAt(n + 2) && ((n += 2), f((e) => '}' === e));
                }
            }
            n++;
        }
    }
    function h() {
        return i ? { value: i, type: r } : { type: r };
    }
}
function g(e) {
    switch (e) {
        case '\r':
        case '\n':
        case ' ':
            return !0;
    }
    return !1;
}
function m(e) {
    switch (e) {
        case "'":
        case '"':
        case '`':
            return !0;
    }
    return !1;
}
const b = /^[_$a-zA-Z\xA0-\uFFFF]$/,
    _ = /^[?._$a-zA-Z0-9\xA0-\uFFFF]$/;
function w(e) {
    return b.test(e);
}
function S(e) {
    return _.test(e);
}
function k(e) {
    return 'function' == typeof e;
}
const x = Symbol('Awilix Resolver Config');
function E(e) {
    return { resolve: () => e, isLeakSafe: !0 };
}
function O(e, t) {
    if (!k(e)) throw new l('asFunction', 'fn', 'function', e);
    t = N({ lifetime: p }, t, e[x]);
    return C(T({ resolve: j(e), ...t }));
}
function P(e, t) {
    if (!k(e)) throw new l('asClass', 'Type', 'class', e);
    t = N({ lifetime: p }, t, e[x]);
    const n = j(function (...t) {
        return Reflect.construct(e, t);
    }, e);
    return C(T({ ...t, resolve: n }));
}
function T(e) {
    function t(e) {
        return T({ ...this, lifetime: e });
    }
    function n(e) {
        return T({ ...this, injectionMode: e });
    }
    return U(e, {
        setLifetime: t,
        inject: function (e) {
            return T({ ...this, injector: e });
        },
        transient: A(t, p),
        scoped: A(t, v),
        singleton: A(t, h),
        setInjectionMode: n,
        proxy: A(n, f),
        classic: A(n, d),
    });
}
function C(e) {
    return U(e, {
        disposer: function (e) {
            return C({ ...this, dispose: e });
        },
    });
}
function A(e, t) {
    return function () {
        return e.call(this, t);
    };
}
function N(e, ...t) {
    return Object.assign({}, e, ...t);
}
function U(e, t) {
    return { ...e, ...t };
}
function B(e, t) {
    const n = t(e),
        r = ((i = [...Reflect.ownKeys(e.cradle), ...Reflect.ownKeys(n)]), Array.from(new Set(i)));
    var i;
    return new Proxy(
        {},
        {
            get: (t, r) =>
                r === Symbol.iterator
                    ? function* () {
                          for (const t in e.cradle) yield t;
                          for (const e in n) yield e;
                      }
                    : r in n
                      ? n[r]
                      : e.resolve(r),
            ownKeys: () => r,
            getOwnPropertyDescriptor(e, t) {
                if (r.indexOf(t) > -1) return { enumerable: !0, configurable: !0 };
            },
        },
    );
}
function j(e, t) {
    t || (t = e);
    const n = W(t);
    return function (t) {
        if ((this.injectionMode || t.options.injectionMode || f) !== d) {
            const n = this.injector ? B(t, this.injector) : t.cradle;
            return e(n);
        }
        if (n.length > 0) {
            const r = this.injector
                    ? (function (e, t) {
                          return function (n, r) {
                              return n in t ? t[n] : e.resolve(n, r);
                          };
                      })(t, this.injector(t))
                    : t.resolve,
                i = n.map((e) => r(e.name, { allowUnregistered: e.optional }));
            return e(...i);
        }
        return e();
    };
}
function W(e) {
    const t = (function (e) {
        const { next: t, done: n } = y(e),
            r = [];
        let i = null;
        for (l(); !n(); )
            switch (i.type) {
                case 'class':
                    if (!o()) return null;
                    break;
                case 'function': {
                    const e = l();
                    ('ident' !== e.type && '*' !== e.type) || l();
                    break;
                }
                case '(':
                    a();
                    break;
                case ')':
                    return r;
                case 'ident': {
                    const e = { name: i.value, optional: !1 };
                    if ('async' === i.value) {
                        const e = l();
                        if (e && '=' !== e.type) break;
                    }
                    return (r.push(e), r);
                }
                default:
                    throw u();
            }
        return r;
        function a() {
            let e = { name: '', optional: !1 };
            for (; !n(); )
                switch ((l(), i.type)) {
                    case 'ident':
                        e.name = i.value;
                        break;
                    case '=':
                        e.optional = !0;
                        break;
                    case ',':
                        (r.push(e), (e = { name: '', optional: !1 }));
                        break;
                    case ')':
                        return void (e.name && r.push(e));
                    default:
                        throw u();
                }
        }
        function o() {
            for (; !n(); ) {
                if (s()) {
                    if ((l(1), '(' !== i.type)) continue;
                    return !0;
                }
                l(1);
            }
            return !1;
        }
        function s() {
            return 'ident' === i.type && 'constructor' === i.value;
        }
        function l(e = 0) {
            return ((i = t(e)), i);
        }
        function u() {
            return new SyntaxError(
                `Parsing parameter list, did not expect ${i.type} token${i.value ? ` (${i.value})` : ''}`,
            );
        }
    })(e.toString());
    if (!t) {
        const t = Object.getPrototypeOf(e);
        return 'function' == typeof t && t !== Function.prototype ? W(t) : [];
    }
    return t;
}
const L = Symbol('familyTree'),
    z = Symbol('rollUpRegistrations');
function R(e = {}) {
    return M(e);
}
function M(e, t, n) {
    e = { injectionMode: f, strict: !1, ...e };
    const r = n ?? [],
        i = {},
        a = new Proxy(
            {},
            {
                get: (e, t) => S(t),
                set: (e, t) => {
                    throw new Error(`Attempted setting property "${t}" on container cradle - this is not allowed.`);
                },
                ownKeys: () => Array.from(a),
                getOwnPropertyDescriptor(e, t) {
                    const n = m();
                    if (Object.getOwnPropertyDescriptor(n, t)) return { enumerable: !0, configurable: !0 };
                },
            },
        ),
        o = {
            options: e,
            cradle: a,
            inspect: function () {
                return `[AwilixContainer (${t ? 'scoped, ' : ''}registrations: ${Object.keys(o.registrations).length})]`;
            },
            cache: new Map(),
            loadModules: () => {
                throw new Error('loadModules is not supported in the browser.');
            },
            createScope: function () {
                return M(e, o, r);
            },
            register: function (n, r) {
                const a = (function (e, t) {
                        const n = e;
                        return 'string' == typeof n || 'symbol' == typeof n ? { [e]: t } : n;
                    })(n, r),
                    s = [...Object.keys(a), ...Object.getOwnPropertySymbols(a)];
                for (const o of s) {
                    const n = a[o];
                    if (e.strict && n.lifetime === h && t)
                        throw new c(o, 'Cannot register a singleton on a scoped container.');
                    i[o] = n;
                }
                return o;
            },
            build: function (e, t) {
                if (e && e.resolve) return e.resolve(o);
                const n = 'build',
                    r = 'targetOrResolver';
                (l.assert(e, n, r, 'a registration, function or class', e),
                    l.assert('function' == typeof e, n, r, 'a function or class', e));
                return (
                    (function (e) {
                        if ('function' != typeof e) return !1;
                        const t = y(e.toString()),
                            n = t.next();
                        if ('class' === n.type) return !0;
                        const r = t.next();
                        return !('function' !== n.type || !r.value || r.value[0] !== r.value[0].toUpperCase());
                    })(e)
                        ? P(e, t)
                        : O(e, t)
                ).resolve(o);
            },
            resolve: S,
            hasRegistration: function (e) {
                return !!w(e);
            },
            dispose: function () {
                const e = Array.from(o.cache.entries());
                return (
                    o.cache.clear(),
                    Promise.all(
                        e.map(([, e]) => {
                            const { resolver: t, value: n } = e,
                                r = t;
                            return r.dispose ? Promise.resolve().then(() => r.dispose(n)) : Promise.resolve();
                        }),
                    ).then(() => {})
                );
            },
            getRegistration: w,
            [z]: m,
            get registrations() {
                return m();
            },
        },
        s = t ? [o].concat(t[L]) : [o];
    o[L] = s;
    const d = (g = s)[g.length - 1];
    var g;
    return o;
    function m() {
        return { ...(t && t[z]()), ...i };
    }
    function* b() {
        const e = m();
        for (const t in e) yield t;
    }
    function _() {
        return Object.prototype.toString.call(a);
    }
    function w(e) {
        const n = i[e];
        return n || (t ? t.getRegistration(e) : null);
    }
    function S(t, n) {
        n = n || {};
        try {
            const i = w(t);
            if (r.some(({ name: e }) => e === t)) throw new u(t, r, 'Cyclic dependencies detected.');
            if ('toJSON' === t) return _;
            if ('constructor' === t) return R;
            if (!i) {
                switch (t) {
                    case 'inspect':
                    case 'toString':
                        return _;
                    case Symbol.toStringTag:
                        return 'AwilixContainerCradle';
                    case 'then':
                        return;
                    case Symbol.iterator:
                        return b;
                }
                if (n.allowUnregistered) return;
                throw new u(t, r);
            }
            const a = i.lifetime || p;
            if (e.strict && !i.isLeakSafe) {
                const e = r.findIndex(({ lifetime: e }) => {
                    return ((n = a), ((t = e) === h && n !== h) || (t === v && n === p));
                    var t, n;
                });
                if (e > -1)
                    throw new u(
                        t,
                        r,
                        `Dependency '${t.toString()}' has a shorter lifetime than its ancestor: '${r[e].name.toString()}'`,
                    );
            }
            let s, l;
            switch ((r.push({ name: t, lifetime: a }), a)) {
                case p:
                    l = i.resolve(o);
                    break;
                case h:
                    ((s = d.cache.get(t)),
                        s
                            ? (l = s.value)
                            : ((l = i.resolve(e.strict ? d : o)), d.cache.set(t, { resolver: i, value: l })));
                    break;
                case v:
                    if (((s = o.cache.get(t)), void 0 !== s)) {
                        l = s.value;
                        break;
                    }
                    ((l = i.resolve(o)), o.cache.set(t, { resolver: i, value: l }));
                    break;
                default:
                    throw new u(t, r, `Unknown lifetime "${i.lifetime}"`);
            }
            return (r.pop(), l);
        } catch (i) {
            throw ((r.length = 0), i);
        }
    }
}
var D,
    I,
    V = { exports: {} },
    F = {};
function $() {
    if (D) return F;
    D = 1;
    var e = Symbol.for('react.transitional.element'),
        t = Symbol.for('react.portal'),
        n = Symbol.for('react.fragment'),
        r = Symbol.for('react.strict_mode'),
        i = Symbol.for('react.profiler'),
        a = Symbol.for('react.consumer'),
        o = Symbol.for('react.context'),
        s = Symbol.for('react.forward_ref'),
        l = Symbol.for('react.suspense'),
        u = Symbol.for('react.memo'),
        c = Symbol.for('react.lazy'),
        f = Symbol.for('react.activity'),
        d = Symbol.iterator;
    var h = {
            isMounted: function () {
                return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        p = Object.assign,
        v = {};
    function y(e, t, n) {
        ((this.props = e), (this.context = t), (this.refs = v), (this.updater = n || h));
    }
    function g() {}
    function m(e, t, n) {
        ((this.props = e), (this.context = t), (this.refs = v), (this.updater = n || h));
    }
    ((y.prototype.isReactComponent = {}),
        (y.prototype.setState = function (e, t) {
            if ('object' != typeof e && 'function' != typeof e && null != e)
                throw Error(
                    'takes an object of state variables to update or a function which returns an object of state variables.',
                );
            this.updater.enqueueSetState(this, e, t, 'setState');
        }),
        (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
        }),
        (g.prototype = y.prototype));
    var b = (m.prototype = new g());
    ((b.constructor = m), p(b, y.prototype), (b.isPureReactComponent = !0));
    var _ = Array.isArray;
    function w() {}
    var S = { H: null, A: null, T: null, S: null },
        k = Object.prototype.hasOwnProperty;
    function x(t, n, r) {
        var i = r.ref;
        return { $$typeof: e, type: t, key: n, ref: void 0 !== i ? i : null, props: r };
    }
    function E(t) {
        return 'object' == typeof t && null !== t && t.$$typeof === e;
    }
    var O = /\/+/g;
    function P(e, t) {
        return 'object' == typeof e && null !== e && null != e.key
            ? ((n = '' + e.key),
              (r = { '=': '=0', ':': '=2' }),
              '$' +
                  n.replace(/[=:]/g, function (e) {
                      return r[e];
                  }))
            : t.toString(36);
        var n, r;
    }
    function T(n, r, i, a, o) {
        var s = typeof n;
        ('undefined' !== s && 'boolean' !== s) || (n = null);
        var l,
            u,
            f = !1;
        if (null === n) f = !0;
        else
            switch (s) {
                case 'bigint':
                case 'string':
                case 'number':
                    f = !0;
                    break;
                case 'object':
                    switch (n.$$typeof) {
                        case e:
                        case t:
                            f = !0;
                            break;
                        case c:
                            return T((f = n._init)(n._payload), r, i, a, o);
                    }
            }
        if (f)
            return (
                (o = o(n)),
                (f = '' === a ? '.' + P(n, 0) : a),
                _(o)
                    ? ((i = ''),
                      null != f && (i = f.replace(O, '$&/') + '/'),
                      T(o, r, i, '', function (e) {
                          return e;
                      }))
                    : null != o &&
                      (E(o) &&
                          ((l = o),
                          (u =
                              i +
                              (null == o.key || (n && n.key === o.key) ? '' : ('' + o.key).replace(O, '$&/') + '/') +
                              f),
                          (o = x(l.type, u, l.props))),
                      r.push(o)),
                1
            );
        f = 0;
        var h,
            p = '' === a ? '.' : a + ':';
        if (_(n)) for (var v = 0; v < n.length; v++) f += T((a = n[v]), r, i, (s = p + P(a, v)), o);
        else if (
            'function' ==
            typeof (v =
                null === (h = n) || 'object' != typeof h
                    ? null
                    : 'function' == typeof (h = (d && h[d]) || h['@@iterator'])
                      ? h
                      : null)
        )
            for (n = v.call(n), v = 0; !(a = n.next()).done; ) f += T((a = a.value), r, i, (s = p + P(a, v++)), o);
        else if ('object' === s) {
            if ('function' == typeof n.then)
                return T(
                    (function (e) {
                        switch (e.status) {
                            case 'fulfilled':
                                return e.value;
                            case 'rejected':
                                throw e.reason;
                            default:
                                switch (
                                    ('string' == typeof e.status
                                        ? e.then(w, w)
                                        : ((e.status = 'pending'),
                                          e.then(
                                              function (t) {
                                                  'pending' === e.status && ((e.status = 'fulfilled'), (e.value = t));
                                              },
                                              function (t) {
                                                  'pending' === e.status && ((e.status = 'rejected'), (e.reason = t));
                                              },
                                          )),
                                    e.status)
                                ) {
                                    case 'fulfilled':
                                        return e.value;
                                    case 'rejected':
                                        throw e.reason;
                                }
                        }
                        throw e;
                    })(n),
                    r,
                    i,
                    a,
                    o,
                );
            throw (
                (r = String(n)),
                Error(
                    'Objects are not valid as a React child (found: ' +
                        ('[object Object]' === r ? 'object with keys {' + Object.keys(n).join(', ') + '}' : r) +
                        '). If you meant to render a collection of children, use an array instead.',
                )
            );
        }
        return f;
    }
    function C(e, t, n) {
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
    function A(e) {
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
    var N =
            'function' == typeof reportError
                ? reportError
                : function (e) {
                      if ('object' == typeof window && 'function' == typeof window.ErrorEvent) {
                          var t = new window.ErrorEvent('error', {
                              bubbles: !0,
                              cancelable: !0,
                              message:
                                  'object' == typeof e && null !== e && 'string' == typeof e.message
                                      ? String(e.message)
                                      : String(e),
                              error: e,
                          });
                          if (!window.dispatchEvent(t)) return;
                      } else if ('object' == typeof process && 'function' == typeof process.emit)
                          return void process.emit('uncaughtException', e);
                      console.error(e);
                  },
        U = {
            map: C,
            forEach: function (e, t, n) {
                C(
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
                    C(e, function () {
                        t++;
                    }),
                    t
                );
            },
            toArray: function (e) {
                return (
                    C(e, function (e) {
                        return e;
                    }) || []
                );
            },
            only: function (e) {
                if (!E(e)) throw Error('React.Children.only expected to receive a single React element child.');
                return e;
            },
        };
    return (
        (F.Activity = f),
        (F.Children = U),
        (F.Component = y),
        (F.Fragment = n),
        (F.Profiler = i),
        (F.PureComponent = m),
        (F.StrictMode = r),
        (F.Suspense = l),
        (F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S),
        (F.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (e) {
                return S.H.useMemoCache(e);
            },
        }),
        (F.cache = function (e) {
            return function () {
                return e.apply(null, arguments);
            };
        }),
        (F.cacheSignal = function () {
            return null;
        }),
        (F.cloneElement = function (e, t, n) {
            if (null == e) throw Error('The argument must be a React element, but you passed ' + e + '.');
            var r = p({}, e.props),
                i = e.key;
            if (null != t)
                for (a in (void 0 !== t.key && (i = '' + t.key), t))
                    !k.call(t, a) ||
                        'key' === a ||
                        '__self' === a ||
                        '__source' === a ||
                        ('ref' === a && void 0 === t.ref) ||
                        (r[a] = t[a]);
            var a = arguments.length - 2;
            if (1 === a) r.children = n;
            else if (1 < a) {
                for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
                r.children = o;
            }
            return x(e.type, i, r);
        }),
        (F.createContext = function (e) {
            return (
                ((e = {
                    $$typeof: o,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                }).Provider = e),
                (e.Consumer = { $$typeof: a, _context: e }),
                e
            );
        }),
        (F.createElement = function (e, t, n) {
            var r,
                i = {},
                a = null;
            if (null != t)
                for (r in (void 0 !== t.key && (a = '' + t.key), t))
                    k.call(t, r) && 'key' !== r && '__self' !== r && '__source' !== r && (i[r] = t[r]);
            var o = arguments.length - 2;
            if (1 === o) i.children = n;
            else if (1 < o) {
                for (var s = Array(o), l = 0; l < o; l++) s[l] = arguments[l + 2];
                i.children = s;
            }
            if (e && e.defaultProps) for (r in (o = e.defaultProps)) void 0 === i[r] && (i[r] = o[r]);
            return x(e, a, i);
        }),
        (F.createRef = function () {
            return { current: null };
        }),
        (F.forwardRef = function (e) {
            return { $$typeof: s, render: e };
        }),
        (F.isValidElement = E),
        (F.lazy = function (e) {
            return { $$typeof: c, _payload: { _status: -1, _result: e }, _init: A };
        }),
        (F.memo = function (e, t) {
            return { $$typeof: u, type: e, compare: void 0 === t ? null : t };
        }),
        (F.startTransition = function (e) {
            var t = S.T,
                n = {};
            S.T = n;
            try {
                var r = e(),
                    i = S.S;
                (null !== i && i(n, r),
                    'object' == typeof r && null !== r && 'function' == typeof r.then && r.then(w, N));
            } catch (a) {
                N(a);
            } finally {
                (null !== t && null !== n.types && (t.types = n.types), (S.T = t));
            }
        }),
        (F.unstable_useCacheRefresh = function () {
            return S.H.useCacheRefresh();
        }),
        (F.use = function (e) {
            return S.H.use(e);
        }),
        (F.useActionState = function (e, t, n) {
            return S.H.useActionState(e, t, n);
        }),
        (F.useCallback = function (e, t) {
            return S.H.useCallback(e, t);
        }),
        (F.useContext = function (e) {
            return S.H.useContext(e);
        }),
        (F.useDebugValue = function () {}),
        (F.useDeferredValue = function (e, t) {
            return S.H.useDeferredValue(e, t);
        }),
        (F.useEffect = function (e, t) {
            return S.H.useEffect(e, t);
        }),
        (F.useEffectEvent = function (e) {
            return S.H.useEffectEvent(e);
        }),
        (F.useId = function () {
            return S.H.useId();
        }),
        (F.useImperativeHandle = function (e, t, n) {
            return S.H.useImperativeHandle(e, t, n);
        }),
        (F.useInsertionEffect = function (e, t) {
            return S.H.useInsertionEffect(e, t);
        }),
        (F.useLayoutEffect = function (e, t) {
            return S.H.useLayoutEffect(e, t);
        }),
        (F.useMemo = function (e, t) {
            return S.H.useMemo(e, t);
        }),
        (F.useOptimistic = function (e, t) {
            return S.H.useOptimistic(e, t);
        }),
        (F.useReducer = function (e, t, n) {
            return S.H.useReducer(e, t, n);
        }),
        (F.useRef = function (e) {
            return S.H.useRef(e);
        }),
        (F.useState = function (e) {
            return S.H.useState(e);
        }),
        (F.useSyncExternalStore = function (e, t, n) {
            return S.H.useSyncExternalStore(e, t, n);
        }),
        (F.useTransition = function () {
            return S.H.useTransition();
        }),
        (F.version = '19.2.3'),
        F
    );
}
function Q() {
    return (I || ((I = 1), (V.exports = $())), V.exports);
}
var H = Q();
const q = e(H);
var K,
    G,
    X = { exports: {} },
    Y = {},
    J = { exports: {} },
    Z = {};
function ee() {
    return (
        G ||
            ((G = 1),
            (J.exports =
                (K ||
                    ((K = 1),
                    (function (e) {
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
                                    var s = 2 * (r + 1) - 1,
                                        l = e[s],
                                        u = s + 1,
                                        c = e[u];
                                    if (0 > i(l, n))
                                        u < a && 0 > i(c, l)
                                            ? ((e[r] = c), (e[u] = n), (r = u))
                                            : ((e[r] = l), (e[s] = n), (r = s));
                                    else {
                                        if (!(u < a && 0 > i(c, n))) break e;
                                        ((e[r] = c), (e[u] = n), (r = u));
                                    }
                                }
                            }
                            return t;
                        }
                        function i(e, t) {
                            var n = e.sortIndex - t.sortIndex;
                            return 0 !== n ? n : e.id - t.id;
                        }
                        if (
                            ((e.unstable_now = void 0),
                            'object' == typeof performance && 'function' == typeof performance.now)
                        ) {
                            var a = performance;
                            e.unstable_now = function () {
                                return a.now();
                            };
                        } else {
                            var o = Date,
                                s = o.now();
                            e.unstable_now = function () {
                                return o.now() - s;
                            };
                        }
                        var l = [],
                            u = [],
                            c = 1,
                            f = null,
                            d = 3,
                            h = !1,
                            p = !1,
                            v = !1,
                            y = !1,
                            g = 'function' == typeof setTimeout ? setTimeout : null,
                            m = 'function' == typeof clearTimeout ? clearTimeout : null,
                            b = 'undefined' != typeof setImmediate ? setImmediate : null;
                        function _(e) {
                            for (var i = n(u); null !== i; ) {
                                if (null === i.callback) r(u);
                                else {
                                    if (!(i.startTime <= e)) break;
                                    (r(u), (i.sortIndex = i.expirationTime), t(l, i));
                                }
                                i = n(u);
                            }
                        }
                        function w(e) {
                            if (((v = !1), _(e), !p))
                                if (null !== n(l)) ((p = !0), k || ((k = !0), S()));
                                else {
                                    var t = n(u);
                                    null !== t && N(w, t.startTime - e);
                                }
                        }
                        var S,
                            k = !1,
                            x = -1,
                            E = 5,
                            O = -1;
                        function P() {
                            return !(!y && e.unstable_now() - O < E);
                        }
                        function T() {
                            if (((y = !1), k)) {
                                var t = e.unstable_now();
                                O = t;
                                var i = !0;
                                try {
                                    e: {
                                        ((p = !1), v && ((v = !1), m(x), (x = -1)), (h = !0));
                                        var a = d;
                                        try {
                                            t: {
                                                for (_(t), f = n(l); null !== f && !(f.expirationTime > t && P()); ) {
                                                    var o = f.callback;
                                                    if ('function' == typeof o) {
                                                        ((f.callback = null), (d = f.priorityLevel));
                                                        var s = o(f.expirationTime <= t);
                                                        if (((t = e.unstable_now()), 'function' == typeof s)) {
                                                            ((f.callback = s), _(t), (i = !0));
                                                            break t;
                                                        }
                                                        (f === n(l) && r(l), _(t));
                                                    } else r(l);
                                                    f = n(l);
                                                }
                                                if (null !== f) i = !0;
                                                else {
                                                    var c = n(u);
                                                    (null !== c && N(w, c.startTime - t), (i = !1));
                                                }
                                            }
                                            break e;
                                        } finally {
                                            ((f = null), (d = a), (h = !1));
                                        }
                                        i = void 0;
                                    }
                                } finally {
                                    i ? S() : (k = !1);
                                }
                            }
                        }
                        if ('function' == typeof b)
                            S = function () {
                                b(T);
                            };
                        else if ('undefined' != typeof MessageChannel) {
                            var C = new MessageChannel(),
                                A = C.port2;
                            ((C.port1.onmessage = T),
                                (S = function () {
                                    A.postMessage(null);
                                }));
                        } else
                            S = function () {
                                g(T, 0);
                            };
                        function N(t, n) {
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
                            (e.unstable_requestPaint = function () {
                                y = !0;
                            }),
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
                                    ((a =
                                        'object' == typeof a && null !== a && 'number' == typeof (a = a.delay) && 0 < a
                                            ? o + a
                                            : o),
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
                                        startTime: a,
                                        expirationTime: (s = a + s),
                                        sortIndex: -1,
                                    }),
                                    a > o
                                        ? ((r.sortIndex = a),
                                          t(u, r),
                                          null === n(l) && r === n(u) && (v ? (m(x), (x = -1)) : (v = !0), N(w, a - o)))
                                        : ((r.sortIndex = s), t(l, r), p || h || ((p = !0), k || ((k = !0), S()))),
                                    r
                                );
                            }),
                            (e.unstable_shouldYield = P),
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
                    })(Z)),
                Z))),
        J.exports
    );
}
var te,
    ne,
    re,
    ie,
    ae = { exports: {} },
    oe = {};
function se() {
    if (te) return oe;
    te = 1;
    var e = Q();
    function t(e) {
        var t = 'https://react.dev/errors/' + e;
        if (1 < arguments.length) {
            t += '?args[]=' + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++) t += '&args[]=' + encodeURIComponent(arguments[n]);
        }
        return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
    }
    function n() {}
    var r = {
            d: {
                f: n,
                r: function () {
                    throw Error(t(522));
                },
                D: n,
                C: n,
                L: n,
                m: n,
                X: n,
                S: n,
                M: n,
            },
            p: 0,
            findDOMNode: null,
        },
        i = Symbol.for('react.portal');
    var a = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function o(e, t) {
        return 'font' === e ? '' : 'string' == typeof t ? ('use-credentials' === t ? t : '') : void 0;
    }
    return (
        (oe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
        (oe.createPortal = function (e, n) {
            var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!n || (1 !== n.nodeType && 9 !== n.nodeType && 11 !== n.nodeType)) throw Error(t(299));
            return (function (e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: i,
                    key: null == r ? null : '' + r,
                    children: e,
                    containerInfo: t,
                    implementation: n,
                };
            })(e, n, null, r);
        }),
        (oe.flushSync = function (e) {
            var t = a.T,
                n = r.p;
            try {
                if (((a.T = null), (r.p = 2), e)) return e();
            } finally {
                ((a.T = t), (r.p = n), r.d.f());
            }
        }),
        (oe.preconnect = function (e, t) {
            'string' == typeof e &&
                (t
                    ? (t = 'string' == typeof (t = t.crossOrigin) ? ('use-credentials' === t ? t : '') : void 0)
                    : (t = null),
                r.d.C(e, t));
        }),
        (oe.prefetchDNS = function (e) {
            'string' == typeof e && r.d.D(e);
        }),
        (oe.preinit = function (e, t) {
            if ('string' == typeof e && t && 'string' == typeof t.as) {
                var n = t.as,
                    i = o(n, t.crossOrigin),
                    a = 'string' == typeof t.integrity ? t.integrity : void 0,
                    s = 'string' == typeof t.fetchPriority ? t.fetchPriority : void 0;
                'style' === n
                    ? r.d.S(e, 'string' == typeof t.precedence ? t.precedence : void 0, {
                          crossOrigin: i,
                          integrity: a,
                          fetchPriority: s,
                      })
                    : 'script' === n &&
                      r.d.X(e, {
                          crossOrigin: i,
                          integrity: a,
                          fetchPriority: s,
                          nonce: 'string' == typeof t.nonce ? t.nonce : void 0,
                      });
            }
        }),
        (oe.preinitModule = function (e, t) {
            if ('string' == typeof e)
                if ('object' == typeof t && null !== t) {
                    if (null == t.as || 'script' === t.as) {
                        var n = o(t.as, t.crossOrigin);
                        r.d.M(e, {
                            crossOrigin: n,
                            integrity: 'string' == typeof t.integrity ? t.integrity : void 0,
                            nonce: 'string' == typeof t.nonce ? t.nonce : void 0,
                        });
                    }
                } else null == t && r.d.M(e);
        }),
        (oe.preload = function (e, t) {
            if ('string' == typeof e && 'object' == typeof t && null !== t && 'string' == typeof t.as) {
                var n = t.as,
                    i = o(n, t.crossOrigin);
                r.d.L(e, n, {
                    crossOrigin: i,
                    integrity: 'string' == typeof t.integrity ? t.integrity : void 0,
                    nonce: 'string' == typeof t.nonce ? t.nonce : void 0,
                    type: 'string' == typeof t.type ? t.type : void 0,
                    fetchPriority: 'string' == typeof t.fetchPriority ? t.fetchPriority : void 0,
                    referrerPolicy: 'string' == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
                    imageSrcSet: 'string' == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                    imageSizes: 'string' == typeof t.imageSizes ? t.imageSizes : void 0,
                    media: 'string' == typeof t.media ? t.media : void 0,
                });
            }
        }),
        (oe.preloadModule = function (e, t) {
            if ('string' == typeof e)
                if (t) {
                    var n = o(t.as, t.crossOrigin);
                    r.d.m(e, {
                        as: 'string' == typeof t.as && 'script' !== t.as ? t.as : void 0,
                        crossOrigin: n,
                        integrity: 'string' == typeof t.integrity ? t.integrity : void 0,
                    });
                } else r.d.m(e);
        }),
        (oe.requestFormReset = function (e) {
            r.d.r(e);
        }),
        (oe.unstable_batchedUpdates = function (e, t) {
            return e(t);
        }),
        (oe.useFormState = function (e, t, n) {
            return a.H.useFormState(e, t, n);
        }),
        (oe.useFormStatus = function () {
            return a.H.useHostTransitionStatus();
        }),
        (oe.version = '19.2.3'),
        oe
    );
}
function le() {
    if (ne) return ae.exports;
    return (
        (ne = 1),
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
        (ae.exports = se()),
        ae.exports
    );
}
function ue() {
    if (re) return Y;
    re = 1;
    var e = ee(),
        t = Q(),
        n = le();
    function r(e) {
        var t = 'https://react.dev/errors/' + e;
        if (1 < arguments.length) {
            t += '?args[]=' + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++) t += '&args[]=' + encodeURIComponent(arguments[n]);
        }
        return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
    }
    function i(e) {
        return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
    }
    function a(e) {
        var t = e,
            n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
            e = t;
            do {
                (!!(4098 & (t = e).flags) && (n = t.return), (e = t.return));
            } while (e);
        }
        return 3 === t.tag ? n : null;
    }
    function o(e) {
        if (13 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
        }
        return null;
    }
    function s(e) {
        if (31 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
        }
        return null;
    }
    function l(e) {
        if (a(e) !== e) throw Error(r(188));
    }
    function u(e) {
        var t = e.tag;
        if (5 === t || 26 === t || 27 === t || 6 === t) return e;
        for (e = e.child; null !== e; ) {
            if (null !== (t = u(e))) return t;
            e = e.sibling;
        }
        return null;
    }
    var c = Object.assign,
        f = Symbol.for('react.element'),
        d = Symbol.for('react.transitional.element'),
        h = Symbol.for('react.portal'),
        p = Symbol.for('react.fragment'),
        v = Symbol.for('react.strict_mode'),
        y = Symbol.for('react.profiler'),
        g = Symbol.for('react.consumer'),
        m = Symbol.for('react.context'),
        b = Symbol.for('react.forward_ref'),
        _ = Symbol.for('react.suspense'),
        w = Symbol.for('react.suspense_list'),
        S = Symbol.for('react.memo'),
        k = Symbol.for('react.lazy'),
        x = Symbol.for('react.activity'),
        E = Symbol.for('react.memo_cache_sentinel'),
        O = Symbol.iterator;
    function P(e) {
        return null === e || 'object' != typeof e
            ? null
            : 'function' == typeof (e = (O && e[O]) || e['@@iterator'])
              ? e
              : null;
    }
    var T = Symbol.for('react.client.reference');
    function C(e) {
        if (null == e) return null;
        if ('function' == typeof e) return e.$$typeof === T ? null : e.displayName || e.name || null;
        if ('string' == typeof e) return e;
        switch (e) {
            case p:
                return 'Fragment';
            case y:
                return 'Profiler';
            case v:
                return 'StrictMode';
            case _:
                return 'Suspense';
            case w:
                return 'SuspenseList';
            case x:
                return 'Activity';
        }
        if ('object' == typeof e)
            switch (e.$$typeof) {
                case h:
                    return 'Portal';
                case m:
                    return e.displayName || 'Context';
                case g:
                    return (e._context.displayName || 'Context') + '.Consumer';
                case b:
                    var t = e.render;
                    return (
                        (e = e.displayName) ||
                            (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'),
                        e
                    );
                case S:
                    return null !== (t = e.displayName || null) ? t : C(e.type) || 'Memo';
                case k:
                    ((t = e._payload), (e = e._init));
                    try {
                        return C(e(t));
                    } catch (n) {}
            }
        return null;
    }
    var A = Array.isArray,
        N = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        U = n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        B = { pending: !1, data: null, method: null, action: null },
        j = [],
        W = -1;
    function L(e) {
        return { current: e };
    }
    function z(e) {
        0 > W || ((e.current = j[W]), (j[W] = null), W--);
    }
    function R(e, t) {
        (W++, (j[W] = e.current), (e.current = t));
    }
    var M,
        D,
        I = L(null),
        V = L(null),
        F = L(null),
        $ = L(null);
    function H(e, t) {
        switch ((R(F, t), R(V, e), R(I, null), t.nodeType)) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? _f(e) : 0;
                break;
            default:
                if (((e = t.tagName), (t = t.namespaceURI))) e = wf((t = _f(t)), e);
                else
                    switch (e) {
                        case 'svg':
                            e = 1;
                            break;
                        case 'math':
                            e = 2;
                            break;
                        default:
                            e = 0;
                    }
        }
        (z(I), R(I, e));
    }
    function q() {
        (z(I), z(V), z(F));
    }
    function K(e) {
        null !== e.memoizedState && R($, e);
        var t = I.current,
            n = wf(t, e.type);
        t !== n && (R(V, e), R(I, n));
    }
    function G(e) {
        (V.current === e && (z(I), z(V)), $.current === e && (z($), (hd._currentValue = B)));
    }
    function X(e) {
        if (void 0 === M)
            try {
                throw Error();
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                ((M = (t && t[1]) || ''),
                    (D =
                        -1 < n.stack.indexOf('\n    at')
                            ? ' (<anonymous>)'
                            : -1 < n.stack.indexOf('@')
                              ? '@unknown:0:0'
                              : ''));
            }
        return '\n' + M + e + D;
    }
    var J = !1;
    function Z(e, t) {
        if (!e || J) return '';
        J = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var r = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (t) {
                            var n = function () {
                                throw Error();
                            };
                            if (
                                (Object.defineProperty(n.prototype, 'props', {
                                    set: function () {
                                        throw Error();
                                    },
                                }),
                                'object' == typeof Reflect && Reflect.construct)
                            ) {
                                try {
                                    Reflect.construct(n, []);
                                } catch (i) {
                                    var r = i;
                                }
                                Reflect.construct(e, [], n);
                            } else {
                                try {
                                    n.call();
                                } catch (a) {
                                    r = a;
                                }
                                e.call(n.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (o) {
                                r = o;
                            }
                            (n = e()) && 'function' == typeof n.catch && n.catch(function () {});
                        }
                    } catch (s) {
                        if (s && r && 'string' == typeof s.stack) return [s.stack, r.stack];
                    }
                    return [null, null];
                },
            };
            r.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
            var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, 'name');
            i &&
                i.configurable &&
                Object.defineProperty(r.DetermineComponentFrameRoot, 'name', { value: 'DetermineComponentFrameRoot' });
            var a = r.DetermineComponentFrameRoot(),
                o = a[0],
                s = a[1];
            if (o && s) {
                var l = o.split('\n'),
                    u = s.split('\n');
                for (i = r = 0; r < l.length && !l[r].includes('DetermineComponentFrameRoot'); ) r++;
                for (; i < u.length && !u[i].includes('DetermineComponentFrameRoot'); ) i++;
                if (r === l.length || i === u.length)
                    for (r = l.length - 1, i = u.length - 1; 1 <= r && 0 <= i && l[r] !== u[i]; ) i--;
                for (; 1 <= r && 0 <= i; r--, i--)
                    if (l[r] !== u[i]) {
                        if (1 !== r || 1 !== i)
                            do {
                                if ((r--, 0 > --i || l[r] !== u[i])) {
                                    var c = '\n' + l[r].replace(' at new ', ' at ');
                                    return (
                                        e.displayName &&
                                            c.includes('<anonymous>') &&
                                            (c = c.replace('<anonymous>', e.displayName)),
                                        c
                                    );
                                }
                            } while (1 <= r && 0 <= i);
                        break;
                    }
            }
        } finally {
            ((J = !1), (Error.prepareStackTrace = n));
        }
        return (n = e ? e.displayName || e.name : '') ? X(n) : '';
    }
    function te(e, t) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return X(e.type);
            case 16:
                return X('Lazy');
            case 13:
                return e.child !== t && null !== t ? X('Suspense Fallback') : X('Suspense');
            case 19:
                return X('SuspenseList');
            case 0:
            case 15:
                return Z(e.type, !1);
            case 11:
                return Z(e.type.render, !1);
            case 1:
                return Z(e.type, !0);
            case 31:
                return X('Activity');
            default:
                return '';
        }
    }
    function ne(e) {
        try {
            var t = '',
                n = null;
            do {
                ((t += te(e, n)), (n = e), (e = e.return));
            } while (e);
            return t;
        } catch (r) {
            return '\nError generating stack: ' + r.message + '\n' + r.stack;
        }
    }
    var ie = Object.prototype.hasOwnProperty,
        ae = e.unstable_scheduleCallback,
        oe = e.unstable_cancelCallback,
        se = e.unstable_shouldYield,
        ue = e.unstable_requestPaint,
        ce = e.unstable_now,
        fe = e.unstable_getCurrentPriorityLevel,
        de = e.unstable_ImmediatePriority,
        he = e.unstable_UserBlockingPriority,
        pe = e.unstable_NormalPriority,
        ve = e.unstable_LowPriority,
        ye = e.unstable_IdlePriority,
        ge = e.log,
        me = e.unstable_setDisableYieldValue,
        be = null,
        _e = null;
    function we(e) {
        if (('function' == typeof ge && me(e), _e && 'function' == typeof _e.setStrictMode))
            try {
                _e.setStrictMode(be, e);
            } catch (t) {}
    }
    var Se = Math.clz32
            ? Math.clz32
            : function (e) {
                  return 0 === (e >>>= 0) ? 32 : (31 - ((ke(e) / xe) | 0)) | 0;
              },
        ke = Math.log,
        xe = Math.LN2;
    var Ee = 256,
        Oe = 262144,
        Pe = 4194304;
    function Te(e) {
        var t = 42 & e;
        if (0 !== t) return t;
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
                return 64;
            case 128:
                return 128;
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
                return 261888 & e;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return 3932160 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return 62914560 & e;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e;
        }
    }
    function Ce(e, t, n) {
        var r = e.pendingLanes;
        if (0 === r) return 0;
        var i = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes;
        e = e.warmLanes;
        var s = 134217727 & r;
        return (
            0 !== s
                ? 0 !== (r = s & ~a)
                    ? (i = Te(r))
                    : 0 !== (o &= s)
                      ? (i = Te(o))
                      : n || (0 !== (n = s & ~e) && (i = Te(n)))
                : 0 !== (s = r & ~a)
                  ? (i = Te(s))
                  : 0 !== o
                    ? (i = Te(o))
                    : n || (0 !== (n = r & ~e) && (i = Te(n))),
            0 === i
                ? 0
                : 0 !== t && t !== i && 0 === (t & a) && ((a = i & -i) >= (n = t & -t) || (32 === a && 4194048 & n))
                  ? t
                  : i
        );
    }
    function Ae(e, t) {
        return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
    }
    function Ne(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
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
    function Ue() {
        var e = Pe;
        return (!(62914560 & (Pe <<= 1)) && (Pe = 4194304), e);
    }
    function Be(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
    }
    function je(e, t) {
        ((e.pendingLanes |= t), 268435456 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function We(e, t, n) {
        ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
        var r = 31 - Se(t);
        ((e.entangledLanes |= t), (e.entanglements[r] = 1073741824 | e.entanglements[r] | (261930 & n)));
    }
    function Le(e, t) {
        var n = (e.entangledLanes |= t);
        for (e = e.entanglements; n; ) {
            var r = 31 - Se(n),
                i = 1 << r;
            ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
        }
    }
    function ze(e, t) {
        var n = t & -t;
        return 0 !== ((n = 42 & n ? 1 : Re(n)) & (e.suspendedLanes | t)) ? 0 : n;
    }
    function Re(e) {
        switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
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
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default:
                e = 0;
        }
        return e;
    }
    function Me(e) {
        return 2 < (e &= -e) ? (8 < e ? (134217727 & e ? 32 : 268435456) : 8) : 2;
    }
    function De() {
        var e = U.p;
        return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Cd(e.type);
    }
    function Ie(e, t) {
        var n = U.p;
        try {
            return ((U.p = e), t());
        } finally {
            U.p = n;
        }
    }
    var Ve = Math.random().toString(36).slice(2),
        Fe = '__reactFiber$' + Ve,
        $e = '__reactProps$' + Ve,
        Qe = '__reactContainer$' + Ve,
        He = '__reactEvents$' + Ve,
        qe = '__reactListeners$' + Ve,
        Ke = '__reactHandles$' + Ve,
        Ge = '__reactResources$' + Ve,
        Xe = '__reactMarker$' + Ve;
    function Ye(e) {
        (delete e[Fe], delete e[$e], delete e[He], delete e[qe], delete e[Ke]);
    }
    function Je(e) {
        var t = e[Fe];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
            if ((t = n[Qe] || n[Fe])) {
                if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                    for (e = Mf(e); null !== e; ) {
                        if ((n = e[Fe])) return n;
                        e = Mf(e);
                    }
                return t;
            }
            n = (e = n).parentNode;
        }
        return null;
    }
    function Ze(e) {
        if ((e = e[Fe] || e[Qe])) {
            var t = e.tag;
            if (5 === t || 6 === t || 13 === t || 31 === t || 26 === t || 27 === t || 3 === t) return e;
        }
        return null;
    }
    function et(e) {
        var t = e.tag;
        if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
        throw Error(r(33));
    }
    function tt(e) {
        var t = e[Ge];
        return (t || (t = e[Ge] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
    }
    function nt(e) {
        e[Xe] = !0;
    }
    var rt = new Set(),
        it = {};
    function at(e, t) {
        (ot(e, t), ot(e + 'Capture', t));
    }
    function ot(e, t) {
        for (it[e] = t, e = 0; e < t.length; e++) rt.add(t[e]);
    }
    var st = RegExp(
            '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
        ),
        lt = {},
        ut = {};
    function ct(e, t, n) {
        if (((i = t), ie.call(ut, i) || (!ie.call(lt, i) && (st.test(i) ? (ut[i] = !0) : ((lt[i] = !0), 0)))))
            if (null === n) e.removeAttribute(t);
            else {
                switch (typeof n) {
                    case 'undefined':
                    case 'function':
                    case 'symbol':
                        return void e.removeAttribute(t);
                    case 'boolean':
                        var r = t.toLowerCase().slice(0, 5);
                        if ('data-' !== r && 'aria-' !== r) return void e.removeAttribute(t);
                }
                e.setAttribute(t, '' + n);
            }
        var i;
    }
    function ft(e, t, n) {
        if (null === n) e.removeAttribute(t);
        else {
            switch (typeof n) {
                case 'undefined':
                case 'function':
                case 'symbol':
                case 'boolean':
                    return void e.removeAttribute(t);
            }
            e.setAttribute(t, '' + n);
        }
    }
    function dt(e, t, n, r) {
        if (null === r) e.removeAttribute(n);
        else {
            switch (typeof r) {
                case 'undefined':
                case 'function':
                case 'symbol':
                case 'boolean':
                    return void e.removeAttribute(n);
            }
            e.setAttributeNS(t, n, '' + r);
        }
    }
    function ht(e) {
        switch (typeof e) {
            case 'bigint':
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
    function pt(e) {
        var t = e.type;
        return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
    }
    function vt(e) {
        if (!e._valueTracker) {
            var t = pt(e) ? 'checked' : 'value';
            e._valueTracker = (function (e, t, n) {
                var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
                if (!e.hasOwnProperty(t) && void 0 !== r && 'function' == typeof r.get && 'function' == typeof r.set) {
                    var i = r.get,
                        a = r.set;
                    return (
                        Object.defineProperty(e, t, {
                            configurable: !0,
                            get: function () {
                                return i.call(this);
                            },
                            set: function (e) {
                                ((n = '' + e), a.call(this, e));
                            },
                        }),
                        Object.defineProperty(e, t, { enumerable: r.enumerable }),
                        {
                            getValue: function () {
                                return n;
                            },
                            setValue: function (e) {
                                n = '' + e;
                            },
                            stopTracking: function () {
                                ((e._valueTracker = null), delete e[t]);
                            },
                        }
                    );
                }
            })(e, t, '' + e[t]);
        }
    }
    function yt(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            r = '';
        return (e && (r = pt(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0));
    }
    function gt(e) {
        if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
        try {
            return e.activeElement || e.body;
        } catch (t) {
            return e.body;
        }
    }
    var mt = /[\n"\\]/g;
    function bt(e) {
        return e.replace(mt, function (e) {
            return '\\' + e.charCodeAt(0).toString(16) + ' ';
        });
    }
    function _t(e, t, n, r, i, a, o, s) {
        ((e.name = ''),
            null != o && 'function' != typeof o && 'symbol' != typeof o && 'boolean' != typeof o
                ? (e.type = o)
                : e.removeAttribute('type'),
            null != t
                ? 'number' === o
                    ? ((0 === t && '' === e.value) || e.value != t) && (e.value = '' + ht(t))
                    : e.value !== '' + ht(t) && (e.value = '' + ht(t))
                : ('submit' !== o && 'reset' !== o) || e.removeAttribute('value'),
            null != t ? St(e, o, ht(t)) : null != n ? St(e, o, ht(n)) : null != r && e.removeAttribute('value'),
            null == i && null != a && (e.defaultChecked = !!a),
            null != i && (e.checked = i && 'function' != typeof i && 'symbol' != typeof i),
            null != s && 'function' != typeof s && 'symbol' != typeof s && 'boolean' != typeof s
                ? (e.name = '' + ht(s))
                : e.removeAttribute('name'));
    }
    function wt(e, t, n, r, i, a, o, s) {
        if (
            (null != a && 'function' != typeof a && 'symbol' != typeof a && 'boolean' != typeof a && (e.type = a),
            null != t || null != n)
        ) {
            if (('submit' === a || 'reset' === a) && null == t) return void vt(e);
            ((n = null != n ? '' + ht(n) : ''),
                (t = null != t ? '' + ht(t) : n),
                s || t === e.value || (e.value = t),
                (e.defaultValue = t));
        }
        ((r = 'function' != typeof (r = null != r ? r : i) && 'symbol' != typeof r && !!r),
            (e.checked = s ? e.checked : !!r),
            (e.defaultChecked = !!r),
            null != o && 'function' != typeof o && 'symbol' != typeof o && 'boolean' != typeof o && (e.name = o),
            vt(e));
    }
    function St(e, t, n) {
        ('number' === t && gt(e.ownerDocument) === e) || e.defaultValue === '' + n || (e.defaultValue = '' + n);
    }
    function kt(e, t, n, r) {
        if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
            for (n = 0; n < e.length; n++)
                ((i = t.hasOwnProperty('$' + e[n].value)),
                    e[n].selected !== i && (e[n].selected = i),
                    i && r && (e[n].defaultSelected = !0));
        } else {
            for (n = '' + ht(n), t = null, i = 0; i < e.length; i++) {
                if (e[i].value === n) return ((e[i].selected = !0), void (r && (e[i].defaultSelected = !0)));
                null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
        }
    }
    function xt(e, t, n) {
        null == t || ((t = '' + ht(t)) !== e.value && (e.value = t), null != n)
            ? (e.defaultValue = null != n ? '' + ht(n) : '')
            : e.defaultValue !== t && (e.defaultValue = t);
    }
    function Et(e, t, n, i) {
        if (null == t) {
            if (null != i) {
                if (null != n) throw Error(r(92));
                if (A(i)) {
                    if (1 < i.length) throw Error(r(93));
                    i = i[0];
                }
                n = i;
            }
            (null == n && (n = ''), (t = n));
        }
        ((n = ht(t)),
            (e.defaultValue = n),
            (i = e.textContent) === n && '' !== i && null !== i && (e.value = i),
            vt(e));
    }
    function Ot(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
        }
        e.textContent = t;
    }
    var Pt = new Set(
        'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
            ' ',
        ),
    );
    function Tt(e, t, n) {
        var r = 0 === t.indexOf('--');
        null == n || 'boolean' == typeof n || '' === n
            ? r
                ? e.setProperty(t, '')
                : 'float' === t
                  ? (e.cssFloat = '')
                  : (e[t] = '')
            : r
              ? e.setProperty(t, n)
              : 'number' != typeof n || 0 === n || Pt.has(t)
                ? 'float' === t
                    ? (e.cssFloat = n)
                    : (e[t] = ('' + n).trim())
                : (e[t] = n + 'px');
    }
    function Ct(e, t, n) {
        if (null != t && 'object' != typeof t) throw Error(r(62));
        if (((e = e.style), null != n)) {
            for (var i in n)
                !n.hasOwnProperty(i) ||
                    (null != t && t.hasOwnProperty(i)) ||
                    (0 === i.indexOf('--') ? e.setProperty(i, '') : 'float' === i ? (e.cssFloat = '') : (e[i] = ''));
            for (var a in t) ((i = t[a]), t.hasOwnProperty(a) && n[a] !== i && Tt(e, a, i));
        } else for (var o in t) t.hasOwnProperty(o) && Tt(e, o, t[o]);
    }
    function At(e) {
        if (-1 === e.indexOf('-')) return !1;
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
    var Nt = new Map([
            ['acceptCharset', 'accept-charset'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
            ['crossOrigin', 'crossorigin'],
            ['accentHeight', 'accent-height'],
            ['alignmentBaseline', 'alignment-baseline'],
            ['arabicForm', 'arabic-form'],
            ['baselineShift', 'baseline-shift'],
            ['capHeight', 'cap-height'],
            ['clipPath', 'clip-path'],
            ['clipRule', 'clip-rule'],
            ['colorInterpolation', 'color-interpolation'],
            ['colorInterpolationFilters', 'color-interpolation-filters'],
            ['colorProfile', 'color-profile'],
            ['colorRendering', 'color-rendering'],
            ['dominantBaseline', 'dominant-baseline'],
            ['enableBackground', 'enable-background'],
            ['fillOpacity', 'fill-opacity'],
            ['fillRule', 'fill-rule'],
            ['floodColor', 'flood-color'],
            ['floodOpacity', 'flood-opacity'],
            ['fontFamily', 'font-family'],
            ['fontSize', 'font-size'],
            ['fontSizeAdjust', 'font-size-adjust'],
            ['fontStretch', 'font-stretch'],
            ['fontStyle', 'font-style'],
            ['fontVariant', 'font-variant'],
            ['fontWeight', 'font-weight'],
            ['glyphName', 'glyph-name'],
            ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
            ['glyphOrientationVertical', 'glyph-orientation-vertical'],
            ['horizAdvX', 'horiz-adv-x'],
            ['horizOriginX', 'horiz-origin-x'],
            ['imageRendering', 'image-rendering'],
            ['letterSpacing', 'letter-spacing'],
            ['lightingColor', 'lighting-color'],
            ['markerEnd', 'marker-end'],
            ['markerMid', 'marker-mid'],
            ['markerStart', 'marker-start'],
            ['overlinePosition', 'overline-position'],
            ['overlineThickness', 'overline-thickness'],
            ['paintOrder', 'paint-order'],
            ['panose-1', 'panose-1'],
            ['pointerEvents', 'pointer-events'],
            ['renderingIntent', 'rendering-intent'],
            ['shapeRendering', 'shape-rendering'],
            ['stopColor', 'stop-color'],
            ['stopOpacity', 'stop-opacity'],
            ['strikethroughPosition', 'strikethrough-position'],
            ['strikethroughThickness', 'strikethrough-thickness'],
            ['strokeDasharray', 'stroke-dasharray'],
            ['strokeDashoffset', 'stroke-dashoffset'],
            ['strokeLinecap', 'stroke-linecap'],
            ['strokeLinejoin', 'stroke-linejoin'],
            ['strokeMiterlimit', 'stroke-miterlimit'],
            ['strokeOpacity', 'stroke-opacity'],
            ['strokeWidth', 'stroke-width'],
            ['textAnchor', 'text-anchor'],
            ['textDecoration', 'text-decoration'],
            ['textRendering', 'text-rendering'],
            ['transformOrigin', 'transform-origin'],
            ['underlinePosition', 'underline-position'],
            ['underlineThickness', 'underline-thickness'],
            ['unicodeBidi', 'unicode-bidi'],
            ['unicodeRange', 'unicode-range'],
            ['unitsPerEm', 'units-per-em'],
            ['vAlphabetic', 'v-alphabetic'],
            ['vHanging', 'v-hanging'],
            ['vIdeographic', 'v-ideographic'],
            ['vMathematical', 'v-mathematical'],
            ['vectorEffect', 'vector-effect'],
            ['vertAdvY', 'vert-adv-y'],
            ['vertOriginX', 'vert-origin-x'],
            ['vertOriginY', 'vert-origin-y'],
            ['wordSpacing', 'word-spacing'],
            ['writingMode', 'writing-mode'],
            ['xmlnsXlink', 'xmlns:xlink'],
            ['xHeight', 'x-height'],
        ]),
        Ut =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Bt(e) {
        return Ut.test('' + e)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : e;
    }
    function jt() {}
    var Wt = null;
    function Lt(e) {
        return (
            (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
        );
    }
    var zt = null,
        Rt = null;
    function Mt(e) {
        var t = Ze(e);
        if (t && (e = t.stateNode)) {
            var n = e[$e] || null;
            e: switch (((e = t.stateNode), t.type)) {
                case 'input':
                    if (
                        (_t(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                        (t = n.name),
                        'radio' === n.type && null != t)
                    ) {
                        for (n = e; n.parentNode; ) n = n.parentNode;
                        for (
                            n = n.querySelectorAll('input[name="' + bt('' + t) + '"][type="radio"]'), t = 0;
                            t < n.length;
                            t++
                        ) {
                            var i = n[t];
                            if (i !== e && i.form === e.form) {
                                var a = i[$e] || null;
                                if (!a) throw Error(r(90));
                                _t(
                                    i,
                                    a.value,
                                    a.defaultValue,
                                    a.defaultValue,
                                    a.checked,
                                    a.defaultChecked,
                                    a.type,
                                    a.name,
                                );
                            }
                        }
                        for (t = 0; t < n.length; t++) (i = n[t]).form === e.form && yt(i);
                    }
                    break e;
                case 'textarea':
                    xt(e, n.value, n.defaultValue);
                    break e;
                case 'select':
                    null != (t = n.value) && kt(e, !!n.multiple, t, !1);
            }
        }
    }
    var Dt = !1;
    function It(e, t, n) {
        if (Dt) return e(t, n);
        Dt = !0;
        try {
            return e(t);
        } finally {
            if (
                ((Dt = !1),
                (null !== zt || null !== Rt) && (tc(), zt && ((t = zt), (e = Rt), (Rt = zt = null), Mt(t), e)))
            )
                for (t = 0; t < e.length; t++) Mt(e[t]);
        }
    }
    function Vt(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var i = n[$e] || null;
        if (null === i) return null;
        n = i[t];
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
                ((i = !i.disabled) ||
                    (i = !('button' === (e = e.type) || 'input' === e || 'select' === e || 'textarea' === e)),
                    (e = !i));
                break e;
            default:
                e = !1;
        }
        if (e) return null;
        if (n && 'function' != typeof n) throw Error(r(231, t, typeof n));
        return n;
    }
    var Ft = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
        $t = !1;
    if (Ft)
        try {
            var Qt = {};
            (Object.defineProperty(Qt, 'passive', {
                get: function () {
                    $t = !0;
                },
            }),
                window.addEventListener('test', Qt, Qt),
                window.removeEventListener('test', Qt, Qt));
        } catch (eh) {
            $t = !1;
        }
    var Ht = null,
        qt = null,
        Kt = null;
    function Gt() {
        if (Kt) return Kt;
        var e,
            t,
            n = qt,
            r = n.length,
            i = 'value' in Ht ? Ht.value : Ht.textContent,
            a = i.length;
        for (e = 0; e < r && n[e] === i[e]; e++);
        var o = r - e;
        for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
        return (Kt = i.slice(e, 1 < t ? 1 - t : void 0));
    }
    function Xt(e) {
        var t = e.keyCode;
        return (
            'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
        );
    }
    function Yt() {
        return !0;
    }
    function Jt() {
        return !1;
    }
    function Zt(e) {
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
                    ? Yt
                    : Jt),
                (this.isPropagationStopped = Jt),
                this
            );
        }
        return (
            c(t.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var e = this.nativeEvent;
                    e &&
                        (e.preventDefault
                            ? e.preventDefault()
                            : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
                        (this.isDefaultPrevented = Yt));
                },
                stopPropagation: function () {
                    var e = this.nativeEvent;
                    e &&
                        (e.stopPropagation
                            ? e.stopPropagation()
                            : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                        (this.isPropagationStopped = Yt));
                },
                persist: function () {},
                isPersistent: Yt,
            }),
            t
        );
    }
    var en,
        tn,
        nn,
        rn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        an = Zt(rn),
        on = c({}, rn, { view: 0, detail: 0 }),
        sn = Zt(on),
        ln = c({}, on, {
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
            getModifierState: bn,
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
                    : (e !== nn &&
                          (nn && 'mousemove' === e.type
                              ? ((en = e.screenX - nn.screenX), (tn = e.screenY - nn.screenY))
                              : (tn = en = 0),
                          (nn = e)),
                      en);
            },
            movementY: function (e) {
                return 'movementY' in e ? e.movementY : tn;
            },
        }),
        un = Zt(ln),
        cn = Zt(c({}, ln, { dataTransfer: 0 })),
        fn = Zt(c({}, on, { relatedTarget: 0 })),
        dn = Zt(c({}, rn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
        hn = Zt(
            c({}, rn, {
                clipboardData: function (e) {
                    return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
                },
            }),
        ),
        pn = Zt(c({}, rn, { data: 0 })),
        vn = {
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
        yn = {
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
        gn = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
    function mn(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = gn[e]) && !!t[e];
    }
    function bn() {
        return mn;
    }
    var _n = Zt(
            c({}, on, {
                key: function (e) {
                    if (e.key) {
                        var t = vn[e.key] || e.key;
                        if ('Unidentified' !== t) return t;
                    }
                    return 'keypress' === e.type
                        ? 13 === (e = Xt(e))
                            ? 'Enter'
                            : String.fromCharCode(e)
                        : 'keydown' === e.type || 'keyup' === e.type
                          ? yn[e.keyCode] || 'Unidentified'
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
                getModifierState: bn,
                charCode: function (e) {
                    return 'keypress' === e.type ? Xt(e) : 0;
                },
                keyCode: function (e) {
                    return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
                },
                which: function (e) {
                    return 'keypress' === e.type ? Xt(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
                },
            }),
        ),
        wn = Zt(
            c({}, ln, {
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
        Sn = Zt(
            c({}, on, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: bn,
            }),
        ),
        kn = Zt(c({}, rn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
        xn = Zt(
            c({}, ln, {
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
        ),
        En = Zt(c({}, rn, { newState: 0, oldState: 0 })),
        On = [9, 13, 27, 32],
        Pn = Ft && 'CompositionEvent' in window,
        Tn = null;
    Ft && 'documentMode' in document && (Tn = document.documentMode);
    var Cn = Ft && 'TextEvent' in window && !Tn,
        An = Ft && (!Pn || (Tn && 8 < Tn && 11 >= Tn)),
        Nn = String.fromCharCode(32),
        Un = !1;
    function Bn(e, t) {
        switch (e) {
            case 'keyup':
                return -1 !== On.indexOf(t.keyCode);
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
    function jn(e) {
        return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
    }
    var Wn = !1;
    var Ln = {
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
    function zn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return 'input' === t ? !!Ln[e.type] : 'textarea' === t;
    }
    function Rn(e, t, n, r) {
        (zt ? (Rt ? Rt.push(r) : (Rt = [r])) : (zt = r),
            0 < (t = of(t, 'onChange')).length &&
                ((n = new an('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
    }
    var Mn = null,
        Dn = null;
    function In(e) {
        Yc(e, 0);
    }
    function Vn(e) {
        if (yt(et(e))) return e;
    }
    function Fn(e, t) {
        if ('change' === e) return t;
    }
    var $n = !1;
    if (Ft) {
        var Qn;
        if (Ft) {
            var Hn = 'oninput' in document;
            if (!Hn) {
                var qn = document.createElement('div');
                (qn.setAttribute('oninput', 'return;'), (Hn = 'function' == typeof qn.oninput));
            }
            Qn = Hn;
        } else Qn = !1;
        $n = Qn && (!document.documentMode || 9 < document.documentMode);
    }
    function Kn() {
        Mn && (Mn.detachEvent('onpropertychange', Gn), (Dn = Mn = null));
    }
    function Gn(e) {
        if ('value' === e.propertyName && Vn(Dn)) {
            var t = [];
            (Rn(t, Dn, e, Lt(e)), It(In, t));
        }
    }
    function Xn(e, t, n) {
        'focusin' === e ? (Kn(), (Dn = n), (Mn = t).attachEvent('onpropertychange', Gn)) : 'focusout' === e && Kn();
    }
    function Yn(e) {
        if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Vn(Dn);
    }
    function Jn(e, t) {
        if ('click' === e) return Vn(t);
    }
    function Zn(e, t) {
        if ('input' === e || 'change' === e) return Vn(t);
    }
    var er =
        'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              };
    function tr(e, t) {
        if (er(e, t)) return !0;
        if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!ie.call(t, i) || !er(e[i], t[i])) return !1;
        }
        return !0;
    }
    function nr(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
    }
    function rr(e, t) {
        var n,
            r = nr(e);
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
            r = nr(r);
        }
    }
    function ir(e, t) {
        return (
            !(!e || !t) &&
            (e === t ||
                ((!e || 3 !== e.nodeType) &&
                    (t && 3 === t.nodeType
                        ? ir(e, t.parentNode)
                        : 'contains' in e
                          ? e.contains(t)
                          : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
        );
    }
    function ar(e) {
        for (
            var t = gt(
                (e =
                    null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView
                        ? e.ownerDocument.defaultView
                        : window).document,
            );
            t instanceof e.HTMLIFrameElement;
        ) {
            try {
                var n = 'string' == typeof t.contentWindow.location.href;
            } catch (r) {
                n = !1;
            }
            if (!n) break;
            t = gt((e = t.contentWindow).document);
        }
        return t;
    }
    function or(e) {
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
    var sr = Ft && 'documentMode' in document && 11 >= document.documentMode,
        lr = null,
        ur = null,
        cr = null,
        fr = !1;
    function dr(e, t, n) {
        var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        fr ||
            null == lr ||
            lr !== gt(r) ||
            ('selectionStart' in (r = lr) && or(r)
                ? (r = { start: r.selectionStart, end: r.selectionEnd })
                : (r = {
                      anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                          .anchorNode,
                      anchorOffset: r.anchorOffset,
                      focusNode: r.focusNode,
                      focusOffset: r.focusOffset,
                  }),
            (cr && tr(cr, r)) ||
                ((cr = r),
                0 < (r = of(ur, 'onSelect')).length &&
                    ((t = new an('onSelect', 'select', null, t, n)),
                    e.push({ event: t, listeners: r }),
                    (t.target = lr))));
    }
    function hr(e, t) {
        var n = {};
        return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n['Webkit' + e] = 'webkit' + t),
            (n['Moz' + e] = 'moz' + t),
            n
        );
    }
    var pr = {
            animationend: hr('Animation', 'AnimationEnd'),
            animationiteration: hr('Animation', 'AnimationIteration'),
            animationstart: hr('Animation', 'AnimationStart'),
            transitionrun: hr('Transition', 'TransitionRun'),
            transitionstart: hr('Transition', 'TransitionStart'),
            transitioncancel: hr('Transition', 'TransitionCancel'),
            transitionend: hr('Transition', 'TransitionEnd'),
        },
        vr = {},
        yr = {};
    function gr(e) {
        if (vr[e]) return vr[e];
        if (!pr[e]) return e;
        var t,
            n = pr[e];
        for (t in n) if (n.hasOwnProperty(t) && t in yr) return (vr[e] = n[t]);
        return e;
    }
    Ft &&
        ((yr = document.createElement('div').style),
        'AnimationEvent' in window ||
            (delete pr.animationend.animation,
            delete pr.animationiteration.animation,
            delete pr.animationstart.animation),
        'TransitionEvent' in window || delete pr.transitionend.transition);
    var mr = gr('animationend'),
        br = gr('animationiteration'),
        _r = gr('animationstart'),
        wr = gr('transitionrun'),
        Sr = gr('transitionstart'),
        kr = gr('transitioncancel'),
        xr = gr('transitionend'),
        Er = new Map(),
        Or =
            'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
                ' ',
            );
    function Pr(e, t) {
        (Er.set(e, t), at(t, [e]));
    }
    Or.push('scrollEnd');
    var Tr =
            'function' == typeof reportError
                ? reportError
                : function (e) {
                      if ('object' == typeof window && 'function' == typeof window.ErrorEvent) {
                          var t = new window.ErrorEvent('error', {
                              bubbles: !0,
                              cancelable: !0,
                              message:
                                  'object' == typeof e && null !== e && 'string' == typeof e.message
                                      ? String(e.message)
                                      : String(e),
                              error: e,
                          });
                          if (!window.dispatchEvent(t)) return;
                      } else if ('object' == typeof process && 'function' == typeof process.emit)
                          return void process.emit('uncaughtException', e);
                      console.error(e);
                  },
        Cr = [],
        Ar = 0,
        Nr = 0;
    function Ur() {
        for (var e = Ar, t = (Nr = Ar = 0); t < e; ) {
            var n = Cr[t];
            Cr[t++] = null;
            var r = Cr[t];
            Cr[t++] = null;
            var i = Cr[t];
            Cr[t++] = null;
            var a = Cr[t];
            if (((Cr[t++] = null), null !== r && null !== i)) {
                var o = r.pending;
                (null === o ? (i.next = i) : ((i.next = o.next), (o.next = i)), (r.pending = i));
            }
            0 !== a && Lr(n, i, a);
        }
    }
    function Br(e, t, n, r) {
        ((Cr[Ar++] = e),
            (Cr[Ar++] = t),
            (Cr[Ar++] = n),
            (Cr[Ar++] = r),
            (Nr |= r),
            (e.lanes |= r),
            null !== (e = e.alternate) && (e.lanes |= r));
    }
    function jr(e, t, n, r) {
        return (Br(e, t, n, r), zr(e));
    }
    function Wr(e, t) {
        return (Br(e, null, null, t), zr(e));
    }
    function Lr(e, t, n) {
        e.lanes |= n;
        var r = e.alternate;
        null !== r && (r.lanes |= n);
        for (var i = !1, a = e.return; null !== a; )
            ((a.childLanes |= n),
                null !== (r = a.alternate) && (r.childLanes |= n),
                22 === a.tag && (null === (e = a.stateNode) || 1 & e._visibility || (i = !0)),
                (e = a),
                (a = a.return));
        return 3 === e.tag
            ? ((a = e.stateNode),
              i &&
                  null !== t &&
                  ((i = 31 - Se(n)),
                  null === (r = (e = a.hiddenUpdates)[i]) ? (e[i] = [t]) : r.push(t),
                  (t.lane = 536870912 | n)),
              a)
            : null;
    }
    function zr(e) {
        if (50 < Hu) throw ((Hu = 0), (qu = null), Error(r(185)));
        for (var t = e.return; null !== t; ) t = (e = t).return;
        return 3 === e.tag ? e.stateNode : null;
    }
    var Rr = {};
    function Mr(e, t, n, r) {
        ((this.tag = e),
            (this.key = n),
            (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null));
    }
    function Dr(e, t, n, r) {
        return new Mr(e, t, n, r);
    }
    function Ir(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function Vr(e, t) {
        var n = e.alternate;
        return (
            null === n
                ? (((n = Dr(e.tag, t, e.key, e.mode)).elementType = e.elementType),
                  (n.type = e.type),
                  (n.stateNode = e.stateNode),
                  (n.alternate = e),
                  (e.alternate = n))
                : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
            (n.flags = 65011712 & e.flags),
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
            (n.refCleanup = e.refCleanup),
            n
        );
    }
    function Fr(e, t) {
        e.flags &= 65011714;
        var n = e.alternate;
        return (
            null === n
                ? ((e.childLanes = 0),
                  (e.lanes = t),
                  (e.child = null),
                  (e.subtreeFlags = 0),
                  (e.memoizedProps = null),
                  (e.memoizedState = null),
                  (e.updateQueue = null),
                  (e.dependencies = null),
                  (e.stateNode = null))
                : ((e.childLanes = n.childLanes),
                  (e.lanes = n.lanes),
                  (e.child = n.child),
                  (e.subtreeFlags = 0),
                  (e.deletions = null),
                  (e.memoizedProps = n.memoizedProps),
                  (e.memoizedState = n.memoizedState),
                  (e.updateQueue = n.updateQueue),
                  (e.type = n.type),
                  (t = n.dependencies),
                  (e.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext })),
            e
        );
    }
    function $r(e, t, n, i, a, o) {
        var s = 0;
        if (((i = e), 'function' == typeof e)) Ir(e) && (s = 1);
        else if ('string' == typeof e)
            s = (function (e, t, n) {
                if (1 === n || null != t.itemProp) return !1;
                switch (e) {
                    case 'meta':
                    case 'title':
                        return !0;
                    case 'style':
                        if ('string' != typeof t.precedence || 'string' != typeof t.href || '' === t.href) break;
                        return !0;
                    case 'link':
                        if (
                            'string' != typeof t.rel ||
                            'string' != typeof t.href ||
                            '' === t.href ||
                            t.onLoad ||
                            t.onError
                        )
                            break;
                        return (
                            'stylesheet' !== t.rel || ((e = t.disabled), 'string' == typeof t.precedence && null == e)
                        );
                    case 'script':
                        if (
                            t.async &&
                            'function' != typeof t.async &&
                            'symbol' != typeof t.async &&
                            !t.onLoad &&
                            !t.onError &&
                            t.src &&
                            'string' == typeof t.src
                        )
                            return !0;
                }
                return !1;
            })(e, n, I.current)
                ? 26
                : 'html' === e || 'head' === e || 'body' === e
                  ? 27
                  : 5;
        else
            e: switch (e) {
                case x:
                    return (((e = Dr(31, n, t, a)).elementType = x), (e.lanes = o), e);
                case p:
                    return Qr(n.children, a, o, t);
                case v:
                    ((s = 8), (a |= 24));
                    break;
                case y:
                    return (((e = Dr(12, n, t, 2 | a)).elementType = y), (e.lanes = o), e);
                case _:
                    return (((e = Dr(13, n, t, a)).elementType = _), (e.lanes = o), e);
                case w:
                    return (((e = Dr(19, n, t, a)).elementType = w), (e.lanes = o), e);
                default:
                    if ('object' == typeof e && null !== e)
                        switch (e.$$typeof) {
                            case m:
                                s = 10;
                                break e;
                            case g:
                                s = 9;
                                break e;
                            case b:
                                s = 11;
                                break e;
                            case S:
                                s = 14;
                                break e;
                            case k:
                                ((s = 16), (i = null));
                                break e;
                        }
                    ((s = 29), (n = Error(r(130, null === e ? 'null' : typeof e, ''))), (i = null));
            }
        return (((t = Dr(s, n, t, a)).elementType = e), (t.type = i), (t.lanes = o), t);
    }
    function Qr(e, t, n, r) {
        return (((e = Dr(7, e, r, t)).lanes = n), e);
    }
    function Hr(e, t, n) {
        return (((e = Dr(6, e, null, t)).lanes = n), e);
    }
    function qr(e) {
        var t = Dr(18, null, null, 0);
        return ((t.stateNode = e), t);
    }
    function Kr(e, t, n) {
        return (
            ((t = Dr(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
            (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
            t
        );
    }
    var Gr = new WeakMap();
    function Xr(e, t) {
        if ('object' == typeof e && null !== e) {
            var n = Gr.get(e);
            return void 0 !== n ? n : ((t = { value: e, source: t, stack: ne(t) }), Gr.set(e, t), t);
        }
        return { value: e, source: t, stack: ne(t) };
    }
    var Yr = [],
        Jr = 0,
        Zr = null,
        ei = 0,
        ti = [],
        ni = 0,
        ri = null,
        ii = 1,
        ai = '';
    function oi(e, t) {
        ((Yr[Jr++] = ei), (Yr[Jr++] = Zr), (Zr = e), (ei = t));
    }
    function si(e, t, n) {
        ((ti[ni++] = ii), (ti[ni++] = ai), (ti[ni++] = ri), (ri = e));
        var r = ii;
        e = ai;
        var i = 32 - Se(r) - 1;
        ((r &= ~(1 << i)), (n += 1));
        var a = 32 - Se(t) + i;
        if (30 < a) {
            var o = i - (i % 5);
            ((a = (r & ((1 << o) - 1)).toString(32)),
                (r >>= o),
                (i -= o),
                (ii = (1 << (32 - Se(t) + i)) | (n << i) | r),
                (ai = a + e));
        } else ((ii = (1 << a) | (n << i) | r), (ai = e));
    }
    function li(e) {
        null !== e.return && (oi(e, 1), si(e, 1, 0));
    }
    function ui(e) {
        for (; e === Zr; ) ((Zr = Yr[--Jr]), (Yr[Jr] = null), (ei = Yr[--Jr]), (Yr[Jr] = null));
        for (; e === ri; )
            ((ri = ti[--ni]), (ti[ni] = null), (ai = ti[--ni]), (ti[ni] = null), (ii = ti[--ni]), (ti[ni] = null));
    }
    function ci(e, t) {
        ((ti[ni++] = ii), (ti[ni++] = ai), (ti[ni++] = ri), (ii = t.id), (ai = t.overflow), (ri = e));
    }
    var fi = null,
        di = null,
        hi = !1,
        pi = null,
        vi = !1,
        yi = Error(r(519));
    function gi(e) {
        throw (
            ki(
                Xr(
                    Error(
                        r(418, 1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? 'text' : 'HTML', ''),
                    ),
                    e,
                ),
            ),
            yi
        );
    }
    function mi(e) {
        var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
        switch (((t[Fe] = e), (t[$e] = r), n)) {
            case 'dialog':
                (Jc('cancel', t), Jc('close', t));
                break;
            case 'iframe':
            case 'object':
            case 'embed':
                Jc('load', t);
                break;
            case 'video':
            case 'audio':
                for (n = 0; n < Gc.length; n++) Jc(Gc[n], t);
                break;
            case 'source':
                Jc('error', t);
                break;
            case 'img':
            case 'image':
            case 'link':
                (Jc('error', t), Jc('load', t));
                break;
            case 'details':
                Jc('toggle', t);
                break;
            case 'input':
                (Jc('invalid', t), wt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0));
                break;
            case 'select':
                Jc('invalid', t);
                break;
            case 'textarea':
                (Jc('invalid', t), Et(t, r.value, r.defaultValue, r.children));
        }
        (('string' != typeof (n = r.children) && 'number' != typeof n && 'bigint' != typeof n) ||
        t.textContent === '' + n ||
        !0 === r.suppressHydrationWarning ||
        df(t.textContent, n)
            ? (null != r.popover && (Jc('beforetoggle', t), Jc('toggle', t)),
              null != r.onScroll && Jc('scroll', t),
              null != r.onScrollEnd && Jc('scrollend', t),
              null != r.onClick && (t.onclick = jt),
              (t = !0))
            : (t = !1),
            t || gi(e, !0));
    }
    function bi(e) {
        for (fi = e.return; fi; )
            switch (fi.tag) {
                case 5:
                case 31:
                case 13:
                    return void (vi = !1);
                case 27:
                case 3:
                    return void (vi = !0);
                default:
                    fi = fi.return;
            }
    }
    function _i(e) {
        if (e !== fi) return !1;
        if (!hi) return (bi(e), (hi = !0), !1);
        var t,
            n = e.tag;
        if (
            ((t = 3 !== n && 27 !== n) &&
                ((t = 5 === n) && (t = !('form' !== (t = e.type) && 'button' !== t) || Sf(e.type, e.memoizedProps)),
                (t = !t)),
            t && di && gi(e),
            bi(e),
            13 === n)
        ) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(r(317));
            di = Rf(e);
        } else if (31 === n) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(r(317));
            di = Rf(e);
        } else
            27 === n
                ? ((n = di), Cf(e.type) ? ((e = zf), (zf = null), (di = e)) : (di = n))
                : (di = fi ? Lf(e.stateNode.nextSibling) : null);
        return !0;
    }
    function wi() {
        ((di = fi = null), (hi = !1));
    }
    function Si() {
        var e = pi;
        return (null !== e && (null === Uu ? (Uu = e) : Uu.push.apply(Uu, e), (pi = null)), e);
    }
    function ki(e) {
        null === pi ? (pi = [e]) : pi.push(e);
    }
    var xi = L(null),
        Ei = null,
        Oi = null;
    function Pi(e, t, n) {
        (R(xi, t._currentValue), (t._currentValue = n));
    }
    function Ti(e) {
        ((e._currentValue = xi.current), z(xi));
    }
    function Ci(e, t, n) {
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
    function Ai(e, t, n, i) {
        var a = e.child;
        for (null !== a && (a.return = e); null !== a; ) {
            var o = a.dependencies;
            if (null !== o) {
                var s = a.child;
                o = o.firstContext;
                e: for (; null !== o; ) {
                    var l = o;
                    o = a;
                    for (var u = 0; u < t.length; u++)
                        if (l.context === t[u]) {
                            ((o.lanes |= n),
                                null !== (l = o.alternate) && (l.lanes |= n),
                                Ci(o.return, n, e),
                                i || (s = null));
                            break e;
                        }
                    o = l.next;
                }
            } else if (18 === a.tag) {
                if (null === (s = a.return)) throw Error(r(341));
                ((s.lanes |= n), null !== (o = s.alternate) && (o.lanes |= n), Ci(s, n, e), (s = null));
            } else s = a.child;
            if (null !== s) s.return = a;
            else
                for (s = a; null !== s; ) {
                    if (s === e) {
                        s = null;
                        break;
                    }
                    if (null !== (a = s.sibling)) {
                        ((a.return = s.return), (s = a));
                        break;
                    }
                    s = s.return;
                }
            a = s;
        }
    }
    function Ni(e, t, n, i) {
        e = null;
        for (var a = t, o = !1; null !== a; ) {
            if (!o)
                if (524288 & a.flags) o = !0;
                else if (262144 & a.flags) break;
            if (10 === a.tag) {
                var s = a.alternate;
                if (null === s) throw Error(r(387));
                if (null !== (s = s.memoizedProps)) {
                    var l = a.type;
                    er(a.pendingProps.value, s.value) || (null !== e ? e.push(l) : (e = [l]));
                }
            } else if (a === $.current) {
                if (null === (s = a.alternate)) throw Error(r(387));
                s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
                    (null !== e ? e.push(hd) : (e = [hd]));
            }
            a = a.return;
        }
        (null !== e && Ai(t, e, n, i), (t.flags |= 262144));
    }
    function Ui(e) {
        for (e = e.firstContext; null !== e; ) {
            if (!er(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
        }
        return !1;
    }
    function Bi(e) {
        ((Ei = e), (Oi = null), null !== (e = e.dependencies) && (e.firstContext = null));
    }
    function ji(e) {
        return Li(Ei, e);
    }
    function Wi(e, t) {
        return (null === Ei && Bi(e), Li(e, t));
    }
    function Li(e, t) {
        var n = t._currentValue;
        if (((t = { context: t, memoizedValue: n, next: null }), null === Oi)) {
            if (null === e) throw Error(r(308));
            ((Oi = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
        } else Oi = Oi.next = t;
        return n;
    }
    var zi =
            'undefined' != typeof AbortController
                ? AbortController
                : function () {
                      var e = [],
                          t = (this.signal = {
                              aborted: !1,
                              addEventListener: function (t, n) {
                                  e.push(n);
                              },
                          });
                      this.abort = function () {
                          ((t.aborted = !0),
                              e.forEach(function (e) {
                                  return e();
                              }));
                      };
                  },
        Ri = e.unstable_scheduleCallback,
        Mi = e.unstable_NormalPriority,
        Di = {
            $$typeof: m,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
        };
    function Ii() {
        return { controller: new zi(), data: new Map(), refCount: 0 };
    }
    function Vi(e) {
        (e.refCount--,
            0 === e.refCount &&
                Ri(Mi, function () {
                    e.controller.abort();
                }));
    }
    var Fi = null,
        $i = 0,
        Qi = 0,
        Hi = null;
    function qi() {
        if (0 === --$i && null !== Fi) {
            null !== Hi && (Hi.status = 'fulfilled');
            var e = Fi;
            ((Fi = null), (Qi = 0), (Hi = null));
            for (var t = 0; t < e.length; t++) (0, e[t])();
        }
    }
    var Ki = N.S;
    N.S = function (e, t) {
        ((Wu = ce()),
            'object' == typeof t &&
                null !== t &&
                'function' == typeof t.then &&
                (function (e, t) {
                    if (null === Fi) {
                        var n = (Fi = []);
                        (($i = 0),
                            (Qi = $c()),
                            (Hi = {
                                status: 'pending',
                                value: void 0,
                                then: function (e) {
                                    n.push(e);
                                },
                            }));
                    }
                    ($i++, t.then(qi, qi));
                })(0, t),
            null !== Ki && Ki(e, t));
    };
    var Gi = L(null);
    function Xi() {
        var e = Gi.current;
        return null !== e ? e : yu.pooledCache;
    }
    function Yi(e, t) {
        R(Gi, null === t ? Gi.current : t.pool);
    }
    function Ji() {
        var e = Xi();
        return null === e ? null : { parent: Di._currentValue, pool: e };
    }
    var Zi = Error(r(460)),
        ea = Error(r(474)),
        ta = Error(r(542)),
        na = { then: function () {} };
    function ra(e) {
        return 'fulfilled' === (e = e.status) || 'rejected' === e;
    }
    function ia(e, t, n) {
        switch ((void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(jt, jt), (t = n)), t.status)) {
            case 'fulfilled':
                return t.value;
            case 'rejected':
                throw (la((e = t.reason)), e);
            default:
                if ('string' == typeof t.status) t.then(jt, jt);
                else {
                    if (null !== (e = yu) && 100 < e.shellSuspendCounter) throw Error(r(482));
                    (((e = t).status = 'pending'),
                        e.then(
                            function (e) {
                                if ('pending' === t.status) {
                                    var n = t;
                                    ((n.status = 'fulfilled'), (n.value = e));
                                }
                            },
                            function (e) {
                                if ('pending' === t.status) {
                                    var n = t;
                                    ((n.status = 'rejected'), (n.reason = e));
                                }
                            },
                        ));
                }
                switch (t.status) {
                    case 'fulfilled':
                        return t.value;
                    case 'rejected':
                        throw (la((e = t.reason)), e);
                }
                throw ((oa = t), Zi);
        }
    }
    function aa(e) {
        try {
            return (0, e._init)(e._payload);
        } catch (t) {
            if (null !== t && 'object' == typeof t && 'function' == typeof t.then) throw ((oa = t), Zi);
            throw t;
        }
    }
    var oa = null;
    function sa() {
        if (null === oa) throw Error(r(459));
        var e = oa;
        return ((oa = null), e);
    }
    function la(e) {
        if (e === Zi || e === ta) throw Error(r(483));
    }
    var ua = null,
        ca = 0;
    function fa(e) {
        var t = ca;
        return ((ca += 1), null === ua && (ua = []), ia(ua, e, t));
    }
    function da(e, t) {
        ((t = t.props.ref), (e.ref = void 0 !== t ? t : null));
    }
    function ha(e, t) {
        if (t.$$typeof === f) throw Error(r(525));
        throw (
            (e = Object.prototype.toString.call(t)),
            Error(r(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e))
        );
    }
    function pa(e) {
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
        function i(e) {
            for (var t = new Map(); null !== e; )
                (null !== e.key ? t.set(e.key, e) : t.set(e.index, e), (e = e.sibling));
            return t;
        }
        function a(e, t) {
            return (((e = Vr(e, t)).index = 0), (e.sibling = null), e);
        }
        function o(t, n, r) {
            return (
                (t.index = r),
                e
                    ? null !== (r = t.alternate)
                        ? (r = r.index) < n
                            ? ((t.flags |= 67108866), n)
                            : r
                        : ((t.flags |= 67108866), n)
                    : ((t.flags |= 1048576), n)
            );
        }
        function s(t) {
            return (e && null === t.alternate && (t.flags |= 67108866), t);
        }
        function l(e, t, n, r) {
            return null === t || 6 !== t.tag
                ? (((t = Hr(n, e.mode, r)).return = e), t)
                : (((t = a(t, n)).return = e), t);
        }
        function u(e, t, n, r) {
            var i = n.type;
            return i === p
                ? f(e, t, n.props.children, r, n.key)
                : null !== t &&
                    (t.elementType === i ||
                        ('object' == typeof i && null !== i && i.$$typeof === k && aa(i) === t.type))
                  ? (da((t = a(t, n.props)), n), (t.return = e), t)
                  : (da((t = $r(n.type, n.key, n.props, null, e.mode, r)), n), (t.return = e), t);
        }
        function c(e, t, n, r) {
            return null === t ||
                4 !== t.tag ||
                t.stateNode.containerInfo !== n.containerInfo ||
                t.stateNode.implementation !== n.implementation
                ? (((t = Kr(n, e.mode, r)).return = e), t)
                : (((t = a(t, n.children || [])).return = e), t);
        }
        function f(e, t, n, r, i) {
            return null === t || 7 !== t.tag
                ? (((t = Qr(n, e.mode, r, i)).return = e), t)
                : (((t = a(t, n)).return = e), t);
        }
        function v(e, t, n) {
            if (('string' == typeof t && '' !== t) || 'number' == typeof t || 'bigint' == typeof t)
                return (((t = Hr('' + t, e.mode, n)).return = e), t);
            if ('object' == typeof t && null !== t) {
                switch (t.$$typeof) {
                    case d:
                        return (da((n = $r(t.type, t.key, t.props, null, e.mode, n)), t), (n.return = e), n);
                    case h:
                        return (((t = Kr(t, e.mode, n)).return = e), t);
                    case k:
                        return v(e, (t = aa(t)), n);
                }
                if (A(t) || P(t)) return (((t = Qr(t, e.mode, n, null)).return = e), t);
                if ('function' == typeof t.then) return v(e, fa(t), n);
                if (t.$$typeof === m) return v(e, Wi(e, t), n);
                ha(e, t);
            }
            return null;
        }
        function y(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if (('string' == typeof n && '' !== n) || 'number' == typeof n || 'bigint' == typeof n)
                return null !== i ? null : l(e, t, '' + n, r);
            if ('object' == typeof n && null !== n) {
                switch (n.$$typeof) {
                    case d:
                        return n.key === i ? u(e, t, n, r) : null;
                    case h:
                        return n.key === i ? c(e, t, n, r) : null;
                    case k:
                        return y(e, t, (n = aa(n)), r);
                }
                if (A(n) || P(n)) return null !== i ? null : f(e, t, n, r, null);
                if ('function' == typeof n.then) return y(e, t, fa(n), r);
                if (n.$$typeof === m) return y(e, t, Wi(e, n), r);
                ha(e, n);
            }
            return null;
        }
        function g(e, t, n, r, i) {
            if (('string' == typeof r && '' !== r) || 'number' == typeof r || 'bigint' == typeof r)
                return l(t, (e = e.get(n) || null), '' + r, i);
            if ('object' == typeof r && null !== r) {
                switch (r.$$typeof) {
                    case d:
                        return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                    case h:
                        return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                    case k:
                        return g(e, t, n, (r = aa(r)), i);
                }
                if (A(r) || P(r)) return f(t, (e = e.get(n) || null), r, i, null);
                if ('function' == typeof r.then) return g(e, t, n, fa(r), i);
                if (r.$$typeof === m) return g(e, t, n, Wi(t, r), i);
                ha(t, r);
            }
            return null;
        }
        function b(l, u, c, f) {
            if (
                ('object' == typeof c && null !== c && c.type === p && null === c.key && (c = c.props.children),
                'object' == typeof c && null !== c)
            ) {
                switch (c.$$typeof) {
                    case d:
                        e: {
                            for (var _ = c.key; null !== u; ) {
                                if (u.key === _) {
                                    if ((_ = c.type) === p) {
                                        if (7 === u.tag) {
                                            (n(l, u.sibling), ((f = a(u, c.props.children)).return = l), (l = f));
                                            break e;
                                        }
                                    } else if (
                                        u.elementType === _ ||
                                        ('object' == typeof _ && null !== _ && _.$$typeof === k && aa(_) === u.type)
                                    ) {
                                        (n(l, u.sibling), da((f = a(u, c.props)), c), (f.return = l), (l = f));
                                        break e;
                                    }
                                    n(l, u);
                                    break;
                                }
                                (t(l, u), (u = u.sibling));
                            }
                            c.type === p
                                ? (((f = Qr(c.props.children, l.mode, f, c.key)).return = l), (l = f))
                                : (da((f = $r(c.type, c.key, c.props, null, l.mode, f)), c), (f.return = l), (l = f));
                        }
                        return s(l);
                    case h:
                        e: {
                            for (_ = c.key; null !== u; ) {
                                if (u.key === _) {
                                    if (
                                        4 === u.tag &&
                                        u.stateNode.containerInfo === c.containerInfo &&
                                        u.stateNode.implementation === c.implementation
                                    ) {
                                        (n(l, u.sibling), ((f = a(u, c.children || [])).return = l), (l = f));
                                        break e;
                                    }
                                    n(l, u);
                                    break;
                                }
                                (t(l, u), (u = u.sibling));
                            }
                            (((f = Kr(c, l.mode, f)).return = l), (l = f));
                        }
                        return s(l);
                    case k:
                        return b(l, u, (c = aa(c)), f);
                }
                if (A(c))
                    return (function (r, a, s, l) {
                        for (var u = null, c = null, f = a, d = (a = 0), h = null; null !== f && d < s.length; d++) {
                            f.index > d ? ((h = f), (f = null)) : (h = f.sibling);
                            var p = y(r, f, s[d], l);
                            if (null === p) {
                                null === f && (f = h);
                                break;
                            }
                            (e && f && null === p.alternate && t(r, f),
                                (a = o(p, a, d)),
                                null === c ? (u = p) : (c.sibling = p),
                                (c = p),
                                (f = h));
                        }
                        if (d === s.length) return (n(r, f), hi && oi(r, d), u);
                        if (null === f) {
                            for (; d < s.length; d++)
                                null !== (f = v(r, s[d], l)) &&
                                    ((a = o(f, a, d)), null === c ? (u = f) : (c.sibling = f), (c = f));
                            return (hi && oi(r, d), u);
                        }
                        for (f = i(f); d < s.length; d++)
                            null !== (h = g(f, r, d, s[d], l)) &&
                                (e && null !== h.alternate && f.delete(null === h.key ? d : h.key),
                                (a = o(h, a, d)),
                                null === c ? (u = h) : (c.sibling = h),
                                (c = h));
                        return (
                            e &&
                                f.forEach(function (e) {
                                    return t(r, e);
                                }),
                            hi && oi(r, d),
                            u
                        );
                    })(l, u, c, f);
                if (P(c)) {
                    if ('function' != typeof (_ = P(c))) throw Error(r(150));
                    return (function (a, s, l, u) {
                        if (null == l) throw Error(r(151));
                        for (
                            var c = null, f = null, d = s, h = (s = 0), p = null, m = l.next();
                            null !== d && !m.done;
                            h++, m = l.next()
                        ) {
                            d.index > h ? ((p = d), (d = null)) : (p = d.sibling);
                            var b = y(a, d, m.value, u);
                            if (null === b) {
                                null === d && (d = p);
                                break;
                            }
                            (e && d && null === b.alternate && t(a, d),
                                (s = o(b, s, h)),
                                null === f ? (c = b) : (f.sibling = b),
                                (f = b),
                                (d = p));
                        }
                        if (m.done) return (n(a, d), hi && oi(a, h), c);
                        if (null === d) {
                            for (; !m.done; h++, m = l.next())
                                null !== (m = v(a, m.value, u)) &&
                                    ((s = o(m, s, h)), null === f ? (c = m) : (f.sibling = m), (f = m));
                            return (hi && oi(a, h), c);
                        }
                        for (d = i(d); !m.done; h++, m = l.next())
                            null !== (m = g(d, a, h, m.value, u)) &&
                                (e && null !== m.alternate && d.delete(null === m.key ? h : m.key),
                                (s = o(m, s, h)),
                                null === f ? (c = m) : (f.sibling = m),
                                (f = m));
                        return (
                            e &&
                                d.forEach(function (e) {
                                    return t(a, e);
                                }),
                            hi && oi(a, h),
                            c
                        );
                    })(l, u, (c = _.call(c)), f);
                }
                if ('function' == typeof c.then) return b(l, u, fa(c), f);
                if (c.$$typeof === m) return b(l, u, Wi(l, c), f);
                ha(l, c);
            }
            return ('string' == typeof c && '' !== c) || 'number' == typeof c || 'bigint' == typeof c
                ? ((c = '' + c),
                  null !== u && 6 === u.tag
                      ? (n(l, u.sibling), ((f = a(u, c)).return = l), (l = f))
                      : (n(l, u), ((f = Hr(c, l.mode, f)).return = l), (l = f)),
                  s(l))
                : n(l, u);
        }
        return function (e, t, n, r) {
            try {
                ca = 0;
                var i = b(e, t, n, r);
                return ((ua = null), i);
            } catch (o) {
                if (o === Zi || o === ta) throw o;
                var a = Dr(29, o, null, e.mode);
                return ((a.lanes = r), (a.return = e), a);
            }
        };
    }
    var va = pa(!0),
        ya = pa(!1),
        ga = !1;
    function ma(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
        };
    }
    function ba(e, t) {
        ((e = e.updateQueue),
            t.updateQueue === e &&
                (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    callbacks: null,
                }));
    }
    function _a(e) {
        return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function wa(e, t, n) {
        var r = e.updateQueue;
        if (null === r) return null;
        if (((r = r.shared), 2 & vu)) {
            var i = r.pending;
            return (
                null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
                (r.pending = t),
                (t = zr(e)),
                Lr(e, null, n),
                t
            );
        }
        return (Br(e, r, t, n), zr(e));
    }
    function Sa(e, t, n) {
        if (null !== (t = t.updateQueue) && ((t = t.shared), 4194048 & n)) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), Le(e, n));
        }
    }
    function ka(e, t) {
        var n = e.updateQueue,
            r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
                a = null;
            if (null !== (n = n.firstBaseUpdate)) {
                do {
                    var o = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
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
                    callbacks: r.callbacks,
                }),
                void (e.updateQueue = n)
            );
        }
        (null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t));
    }
    var xa = !1;
    function Ea() {
        if (xa) {
            if (null !== Hi) throw Hi;
        }
    }
    function Oa(e, t, n, r) {
        xa = !1;
        var i = e.updateQueue;
        ga = !1;
        var a = i.firstBaseUpdate,
            o = i.lastBaseUpdate,
            s = i.shared.pending;
        if (null !== s) {
            i.shared.pending = null;
            var l = s,
                u = l.next;
            ((l.next = null), null === o ? (a = u) : (o.next = u), (o = l));
            var f = e.alternate;
            null !== f &&
                (s = (f = f.updateQueue).lastBaseUpdate) !== o &&
                (null === s ? (f.firstBaseUpdate = u) : (s.next = u), (f.lastBaseUpdate = l));
        }
        if (null !== a) {
            var d = i.baseState;
            for (o = 0, f = u = l = null, s = a; ; ) {
                var h = -536870913 & s.lane,
                    p = h !== s.lane;
                if (p ? (mu & h) === h : (r & h) === h) {
                    (0 !== h && h === Qi && (xa = !0),
                        null !== f &&
                            (f = f.next = { lane: 0, tag: s.tag, payload: s.payload, callback: null, next: null }));
                    e: {
                        var v = e,
                            y = s;
                        h = t;
                        var g = n;
                        switch (y.tag) {
                            case 1:
                                if ('function' == typeof (v = y.payload)) {
                                    d = v.call(g, d, h);
                                    break e;
                                }
                                d = v;
                                break e;
                            case 3:
                                v.flags = (-65537 & v.flags) | 128;
                            case 0:
                                if (null == (h = 'function' == typeof (v = y.payload) ? v.call(g, d, h) : v)) break e;
                                d = c({}, d, h);
                                break e;
                            case 2:
                                ga = !0;
                        }
                    }
                    null !== (h = s.callback) &&
                        ((e.flags |= 64),
                        p && (e.flags |= 8192),
                        null === (p = i.callbacks) ? (i.callbacks = [h]) : p.push(h));
                } else
                    ((p = { lane: h, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
                        null === f ? ((u = f = p), (l = d)) : (f = f.next = p),
                        (o |= h));
                if (null === (s = s.next)) {
                    if (null === (s = i.shared.pending)) break;
                    ((s = (p = s).next), (p.next = null), (i.lastBaseUpdate = p), (i.shared.pending = null));
                }
            }
            (null === f && (l = d),
                (i.baseState = l),
                (i.firstBaseUpdate = u),
                (i.lastBaseUpdate = f),
                null === a && (i.shared.lanes = 0),
                (Ou |= o),
                (e.lanes = o),
                (e.memoizedState = d));
        }
    }
    function Pa(e, t) {
        if ('function' != typeof e) throw Error(r(191, e));
        e.call(t);
    }
    function Ta(e, t) {
        var n = e.callbacks;
        if (null !== n) for (e.callbacks = null, e = 0; e < n.length; e++) Pa(n[e], t);
    }
    var Ca = L(null),
        Aa = L(0);
    function Na(e, t) {
        (R(Aa, (e = xu)), R(Ca, t), (xu = e | t.baseLanes));
    }
    function Ua() {
        (R(Aa, xu), R(Ca, Ca.current));
    }
    function Ba() {
        ((xu = Aa.current), z(Ca), z(Aa));
    }
    var ja = L(null),
        Wa = null;
    function La(e) {
        var t = e.alternate;
        (R(Ia, 1 & Ia.current),
            R(ja, e),
            null === Wa && (null === t || null !== Ca.current || null !== t.memoizedState) && (Wa = e));
    }
    function za(e) {
        (R(Ia, Ia.current), R(ja, e), null === Wa && (Wa = e));
    }
    function Ra(e) {
        22 === e.tag ? (R(Ia, Ia.current), R(ja, e), null === Wa && (Wa = e)) : Ma();
    }
    function Ma() {
        (R(Ia, Ia.current), R(ja, ja.current));
    }
    function Da(e) {
        (z(ja), Wa === e && (Wa = null), z(Ia));
    }
    var Ia = L(0);
    function Va(e) {
        for (var t = e; null !== t; ) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || jf(n) || Wf(n))) return t;
            } else if (
                19 !== t.tag ||
                ('forwards' !== t.memoizedProps.revealOrder &&
                    'backwards' !== t.memoizedProps.revealOrder &&
                    'unstable_legacy-backwards' !== t.memoizedProps.revealOrder &&
                    'together' !== t.memoizedProps.revealOrder)
            ) {
                if (null !== t.child) {
                    ((t.child.return = t), (t = t.child));
                    continue;
                }
            } else if (128 & t.flags) return t;
            if (t === e) break;
            for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return null;
                t = t.return;
            }
            ((t.sibling.return = t.return), (t = t.sibling));
        }
        return null;
    }
    var Fa = 0,
        $a = null,
        Qa = null,
        Ha = null,
        qa = !1,
        Ka = !1,
        Ga = !1,
        Xa = 0,
        Ya = 0,
        Ja = null,
        Za = 0;
    function eo() {
        throw Error(r(321));
    }
    function to(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++) if (!er(e[n], t[n])) return !1;
        return !0;
    }
    function no(e, t, n, r, i, a) {
        return (
            (Fa = a),
            ($a = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (N.H = null === e || null === e.memoizedState ? ms : bs),
            (Ga = !1),
            (a = n(r, i)),
            (Ga = !1),
            Ka && (a = io(t, n, r, i)),
            ro(e),
            a
        );
    }
    function ro(e) {
        N.H = gs;
        var t = null !== Qa && null !== Qa.next;
        if (((Fa = 0), (Ha = Qa = $a = null), (qa = !1), (Ya = 0), (Ja = null), t)) throw Error(r(300));
        null === e || Ws || (null !== (e = e.dependencies) && Ui(e) && (Ws = !0));
    }
    function io(e, t, n, i) {
        $a = e;
        var a = 0;
        do {
            if ((Ka && (Ja = null), (Ya = 0), (Ka = !1), 25 <= a)) throw Error(r(301));
            if (((a += 1), (Ha = Qa = null), null != e.updateQueue)) {
                var o = e.updateQueue;
                ((o.lastEffect = null),
                    (o.events = null),
                    (o.stores = null),
                    null != o.memoCache && (o.memoCache.index = 0));
            }
            ((N.H = _s), (o = t(n, i)));
        } while (Ka);
        return o;
    }
    function ao() {
        var e = N.H,
            t = e.useState()[0];
        return (
            (t = 'function' == typeof t.then ? fo(t) : t),
            (e = e.useState()[0]),
            (null !== Qa ? Qa.memoizedState : null) !== e && ($a.flags |= 1024),
            t
        );
    }
    function oo() {
        var e = 0 !== Xa;
        return ((Xa = 0), e);
    }
    function so(e, t, n) {
        ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function lo(e) {
        if (qa) {
            for (e = e.memoizedState; null !== e; ) {
                var t = e.queue;
                (null !== t && (t.pending = null), (e = e.next));
            }
            qa = !1;
        }
        ((Fa = 0), (Ha = Qa = $a = null), (Ka = !1), (Ya = Xa = 0), (Ja = null));
    }
    function uo() {
        var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        return (null === Ha ? ($a.memoizedState = Ha = e) : (Ha = Ha.next = e), Ha);
    }
    function co() {
        if (null === Qa) {
            var e = $a.alternate;
            e = null !== e ? e.memoizedState : null;
        } else e = Qa.next;
        var t = null === Ha ? $a.memoizedState : Ha.next;
        if (null !== t) ((Ha = t), (Qa = e));
        else {
            if (null === e) {
                if (null === $a.alternate) throw Error(r(467));
                throw Error(r(310));
            }
            ((e = {
                memoizedState: (Qa = e).memoizedState,
                baseState: Qa.baseState,
                baseQueue: Qa.baseQueue,
                queue: Qa.queue,
                next: null,
            }),
                null === Ha ? ($a.memoizedState = Ha = e) : (Ha = Ha.next = e));
        }
        return Ha;
    }
    function fo(e) {
        var t = Ya;
        return (
            (Ya += 1),
            null === Ja && (Ja = []),
            (e = ia(Ja, e, t)),
            (t = $a),
            null === (null === Ha ? t.memoizedState : Ha.next) &&
                ((t = t.alternate), (N.H = null === t || null === t.memoizedState ? ms : bs)),
            e
        );
    }
    function ho(e) {
        if (null !== e && 'object' == typeof e) {
            if ('function' == typeof e.then) return fo(e);
            if (e.$$typeof === m) return ji(e);
        }
        throw Error(r(438, String(e)));
    }
    function po(e) {
        var t = null,
            n = $a.updateQueue;
        if ((null !== n && (t = n.memoCache), null == t)) {
            var r = $a.alternate;
            null !== r &&
                null !== (r = r.updateQueue) &&
                null != (r = r.memoCache) &&
                (t = {
                    data: r.data.map(function (e) {
                        return e.slice();
                    }),
                    index: 0,
                });
        }
        if (
            (null == t && (t = { data: [], index: 0 }),
            null === n &&
                ((n = { lastEffect: null, events: null, stores: null, memoCache: null }), ($a.updateQueue = n)),
            (n.memoCache = t),
            void 0 === (n = t.data[t.index]))
        )
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = E;
        return (t.index++, n);
    }
    function vo(e, t) {
        return 'function' == typeof t ? t(e) : t;
    }
    function yo(e) {
        return go(co(), Qa, e);
    }
    function go(e, t, n) {
        var i = e.queue;
        if (null === i) throw Error(r(311));
        i.lastRenderedReducer = n;
        var a = e.baseQueue,
            o = i.pending;
        if (null !== o) {
            if (null !== a) {
                var s = a.next;
                ((a.next = o.next), (o.next = s));
            }
            ((t.baseQueue = a = o), (i.pending = null));
        }
        if (((o = e.baseState), null === a)) e.memoizedState = o;
        else {
            var l = (s = null),
                u = null,
                c = (t = a.next),
                f = !1;
            do {
                var d = -536870913 & c.lane;
                if (d !== c.lane ? (mu & d) === d : (Fa & d) === d) {
                    var h = c.revertLane;
                    if (0 === h)
                        (null !== u &&
                            (u = u.next =
                                {
                                    lane: 0,
                                    revertLane: 0,
                                    gesture: null,
                                    action: c.action,
                                    hasEagerState: c.hasEagerState,
                                    eagerState: c.eagerState,
                                    next: null,
                                }),
                            d === Qi && (f = !0));
                    else {
                        if ((Fa & h) === h) {
                            ((c = c.next), h === Qi && (f = !0));
                            continue;
                        }
                        ((d = {
                            lane: 0,
                            revertLane: c.revertLane,
                            gesture: null,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null,
                        }),
                            null === u ? ((l = u = d), (s = o)) : (u = u.next = d),
                            ($a.lanes |= h),
                            (Ou |= h));
                    }
                    ((d = c.action), Ga && n(o, d), (o = c.hasEagerState ? c.eagerState : n(o, d)));
                } else
                    ((h = {
                        lane: d,
                        revertLane: c.revertLane,
                        gesture: c.gesture,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null,
                    }),
                        null === u ? ((l = u = h), (s = o)) : (u = u.next = h),
                        ($a.lanes |= d),
                        (Ou |= d));
                c = c.next;
            } while (null !== c && c !== t);
            if ((null === u ? (s = o) : (u.next = l), !er(o, e.memoizedState) && ((Ws = !0), f && null !== (n = Hi))))
                throw n;
            ((e.memoizedState = o), (e.baseState = s), (e.baseQueue = u), (i.lastRenderedState = o));
        }
        return (null === a && (i.lanes = 0), [e.memoizedState, i.dispatch]);
    }
    function mo(e) {
        var t = co(),
            n = t.queue;
        if (null === n) throw Error(r(311));
        n.lastRenderedReducer = e;
        var i = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
        if (null !== a) {
            n.pending = null;
            var s = (a = a.next);
            do {
                ((o = e(o, s.action)), (s = s.next));
            } while (s !== a);
            (er(o, t.memoizedState) || (Ws = !0),
                (t.memoizedState = o),
                null === t.baseQueue && (t.baseState = o),
                (n.lastRenderedState = o));
        }
        return [o, i];
    }
    function bo(e, t, n) {
        var i = $a,
            a = co(),
            o = hi;
        if (o) {
            if (void 0 === n) throw Error(r(407));
            n = n();
        } else n = t();
        var s = !er((Qa || a).memoizedState, n);
        if (
            (s && ((a.memoizedState = n), (Ws = !0)),
            (a = a.queue),
            $o(So.bind(null, i, a, e), [e]),
            a.getSnapshot !== t || s || (null !== Ha && 1 & Ha.memoizedState.tag))
        ) {
            if (((i.flags |= 2048), Mo(9, { destroy: void 0 }, wo.bind(null, i, a, n, t), null), null === yu))
                throw Error(r(349));
            o || 127 & Fa || _o(i, t, n);
        }
        return n;
    }
    function _o(e, t, n) {
        ((e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = $a.updateQueue)
                ? ((t = { lastEffect: null, events: null, stores: null, memoCache: null }),
                  ($a.updateQueue = t),
                  (t.stores = [e]))
                : null === (n = t.stores)
                  ? (t.stores = [e])
                  : n.push(e));
    }
    function wo(e, t, n, r) {
        ((t.value = n), (t.getSnapshot = r), ko(t) && xo(e));
    }
    function So(e, t, n) {
        return n(function () {
            ko(t) && xo(e);
        });
    }
    function ko(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !er(e, n);
        } catch (r) {
            return !0;
        }
    }
    function xo(e) {
        var t = Wr(e, 2);
        null !== t && Xu(t, e, 2);
    }
    function Eo(e) {
        var t = uo();
        if ('function' == typeof e) {
            var n = e;
            if (((e = n()), Ga)) {
                we(!0);
                try {
                    n();
                } finally {
                    we(!1);
                }
            }
        }
        return (
            (t.memoizedState = t.baseState = e),
            (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: vo, lastRenderedState: e }),
            t
        );
    }
    function Oo(e, t, n, r) {
        return ((e.baseState = n), go(e, Qa, 'function' == typeof r ? r : vo));
    }
    function Po(e, t, n, i, a) {
        if (ps(e)) throw Error(r(485));
        if (null !== (e = t.action)) {
            var o = {
                payload: a,
                action: e,
                next: null,
                isTransition: !0,
                status: 'pending',
                value: null,
                reason: null,
                listeners: [],
                then: function (e) {
                    o.listeners.push(e);
                },
            };
            (null !== N.T ? n(!0) : (o.isTransition = !1),
                i(o),
                null === (n = t.pending)
                    ? ((o.next = t.pending = o), To(t, o))
                    : ((o.next = n.next), (t.pending = n.next = o)));
        }
    }
    function To(e, t) {
        var n = t.action,
            r = t.payload,
            i = e.state;
        if (t.isTransition) {
            var a = N.T,
                o = {};
            N.T = o;
            try {
                var s = n(i, r),
                    l = N.S;
                (null !== l && l(o, s), Co(e, t, s));
            } catch (u) {
                No(e, t, u);
            } finally {
                (null !== a && null !== o.types && (a.types = o.types), (N.T = a));
            }
        } else
            try {
                Co(e, t, (a = n(i, r)));
            } catch (c) {
                No(e, t, c);
            }
    }
    function Co(e, t, n) {
        null !== n && 'object' == typeof n && 'function' == typeof n.then
            ? n.then(
                  function (n) {
                      Ao(e, t, n);
                  },
                  function (n) {
                      return No(e, t, n);
                  },
              )
            : Ao(e, t, n);
    }
    function Ao(e, t, n) {
        ((t.status = 'fulfilled'),
            (t.value = n),
            Uo(t),
            (e.state = n),
            null !== (t = e.pending) &&
                ((n = t.next) === t ? (e.pending = null) : ((n = n.next), (t.next = n), To(e, n))));
    }
    function No(e, t, n) {
        var r = e.pending;
        if (((e.pending = null), null !== r)) {
            r = r.next;
            do {
                ((t.status = 'rejected'), (t.reason = n), Uo(t), (t = t.next));
            } while (t !== r);
        }
        e.action = null;
    }
    function Uo(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Bo(e, t) {
        return t;
    }
    function jo(e, t) {
        if (hi) {
            var n = yu.formState;
            if (null !== n) {
                e: {
                    var r = $a;
                    if (hi) {
                        if (di) {
                            t: {
                                for (var i = di, a = vi; 8 !== i.nodeType; ) {
                                    if (!a) {
                                        i = null;
                                        break t;
                                    }
                                    if (null === (i = Lf(i.nextSibling))) {
                                        i = null;
                                        break t;
                                    }
                                }
                                i = 'F!' === (a = i.data) || 'F' === a ? i : null;
                            }
                            if (i) {
                                ((di = Lf(i.nextSibling)), (r = 'F!' === i.data));
                                break e;
                            }
                        }
                        gi(r);
                    }
                    r = !1;
                }
                r && (t = n[0]);
            }
        }
        return (
            ((n = uo()).memoizedState = n.baseState = t),
            (r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Bo, lastRenderedState: t }),
            (n.queue = r),
            (n = fs.bind(null, $a, r)),
            (r.dispatch = n),
            (r = Eo(!1)),
            (a = hs.bind(null, $a, !1, r.queue)),
            (i = { state: t, dispatch: null, action: e, pending: null }),
            ((r = uo()).queue = i),
            (n = Po.bind(null, $a, i, a, n)),
            (i.dispatch = n),
            (r.memoizedState = e),
            [t, n, !1]
        );
    }
    function Wo(e) {
        return Lo(co(), Qa, e);
    }
    function Lo(e, t, n) {
        if (((t = go(e, t, Bo)[0]), (e = yo(vo)[0]), 'object' == typeof t && null !== t && 'function' == typeof t.then))
            try {
                var r = fo(t);
            } catch (o) {
                if (o === Zi) throw ta;
                throw o;
            }
        else r = t;
        var i = (t = co()).queue,
            a = i.dispatch;
        return (
            n !== t.memoizedState && (($a.flags |= 2048), Mo(9, { destroy: void 0 }, zo.bind(null, i, n), null)),
            [r, a, e]
        );
    }
    function zo(e, t) {
        e.action = t;
    }
    function Ro(e) {
        var t = co(),
            n = Qa;
        if (null !== n) return Lo(t, n, e);
        (co(), (t = t.memoizedState));
        var r = (n = co()).queue.dispatch;
        return ((n.memoizedState = e), [t, r, !1]);
    }
    function Mo(e, t, n, r) {
        return (
            (e = { tag: e, create: n, deps: r, inst: t, next: null }),
            null === (t = $a.updateQueue) &&
                ((t = { lastEffect: null, events: null, stores: null, memoCache: null }), ($a.updateQueue = t)),
            null === (n = t.lastEffect)
                ? (t.lastEffect = e.next = e)
                : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
        );
    }
    function Do() {
        return co().memoizedState;
    }
    function Io(e, t, n, r) {
        var i = uo();
        (($a.flags |= e), (i.memoizedState = Mo(1 | t, { destroy: void 0 }, n, void 0 === r ? null : r)));
    }
    function Vo(e, t, n, r) {
        var i = co();
        r = void 0 === r ? null : r;
        var a = i.memoizedState.inst;
        null !== Qa && null !== r && to(r, Qa.memoizedState.deps)
            ? (i.memoizedState = Mo(t, a, n, r))
            : (($a.flags |= e), (i.memoizedState = Mo(1 | t, a, n, r)));
    }
    function Fo(e, t) {
        Io(8390656, 8, e, t);
    }
    function $o(e, t) {
        Vo(2048, 8, e, t);
    }
    function Qo(e) {
        var t = co().memoizedState;
        return (
            (function (e) {
                $a.flags |= 4;
                var t = $a.updateQueue;
                if (null === t)
                    ((t = { lastEffect: null, events: null, stores: null, memoCache: null }),
                        ($a.updateQueue = t),
                        (t.events = [e]));
                else {
                    var n = t.events;
                    null === n ? (t.events = [e]) : n.push(e);
                }
            })({ ref: t, nextImpl: e }),
            function () {
                if (2 & vu) throw Error(r(440));
                return t.impl.apply(void 0, arguments);
            }
        );
    }
    function Ho(e, t) {
        return Vo(4, 2, e, t);
    }
    function qo(e, t) {
        return Vo(4, 4, e, t);
    }
    function Ko(e, t) {
        if ('function' == typeof t) {
            e = e();
            var n = t(e);
            return function () {
                'function' == typeof n ? n() : t(null);
            };
        }
        if (null != t)
            return (
                (e = e()),
                (t.current = e),
                function () {
                    t.current = null;
                }
            );
    }
    function Go(e, t, n) {
        ((n = null != n ? n.concat([e]) : null), Vo(4, 4, Ko.bind(null, t, e), n));
    }
    function Xo() {}
    function Yo(e, t) {
        var n = co();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== t && to(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Jo(e, t) {
        var n = co();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        if (null !== t && to(t, r[1])) return r[0];
        if (((r = e()), Ga)) {
            we(!0);
            try {
                e();
            } finally {
                we(!1);
            }
        }
        return ((n.memoizedState = [r, t]), r);
    }
    function Zo(e, t, n) {
        return void 0 === n || (1073741824 & Fa && !(261930 & mu))
            ? (e.memoizedState = t)
            : ((e.memoizedState = n), (e = Gu()), ($a.lanes |= e), (Ou |= e), n);
    }
    function es(e, t, n, r) {
        return er(n, t)
            ? n
            : null !== Ca.current
              ? ((e = Zo(e, n, r)), er(e, t) || (Ws = !0), e)
              : 42 & Fa && (!(1073741824 & Fa) || 261930 & mu)
                ? ((e = Gu()), ($a.lanes |= e), (Ou |= e), t)
                : ((Ws = !0), (e.memoizedState = n));
    }
    function ts(e, t, n, r, i) {
        var a = U.p;
        U.p = 0 !== a && 8 > a ? a : 8;
        var o,
            s,
            l,
            u = N.T,
            c = {};
        ((N.T = c), hs(e, !1, t, n));
        try {
            var f = i(),
                d = N.S;
            if ((null !== d && d(c, f), null !== f && 'object' == typeof f && 'function' == typeof f.then))
                ds(
                    e,
                    t,
                    ((o = r),
                    (s = []),
                    (l = {
                        status: 'pending',
                        value: null,
                        reason: null,
                        then: function (e) {
                            s.push(e);
                        },
                    }),
                    f.then(
                        function () {
                            ((l.status = 'fulfilled'), (l.value = o));
                            for (var e = 0; e < s.length; e++) (0, s[e])(o);
                        },
                        function (e) {
                            for (l.status = 'rejected', l.reason = e, e = 0; e < s.length; e++) (0, s[e])(void 0);
                        },
                    ),
                    l),
                    Ku(),
                );
            else ds(e, t, r, Ku());
        } catch (h) {
            ds(e, t, { then: function () {}, status: 'rejected', reason: h }, Ku());
        } finally {
            ((U.p = a), null !== u && null !== c.types && (u.types = c.types), (N.T = u));
        }
    }
    function ns() {}
    function rs(e, t, n, i) {
        if (5 !== e.tag) throw Error(r(476));
        var a = is(e).queue;
        ts(
            e,
            a,
            t,
            B,
            null === n
                ? ns
                : function () {
                      return (as(e), n(i));
                  },
        );
    }
    function is(e) {
        var t = e.memoizedState;
        if (null !== t) return t;
        var n = {};
        return (
            ((t = {
                memoizedState: B,
                baseState: B,
                baseQueue: null,
                queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: vo, lastRenderedState: B },
                next: null,
            }).next = {
                memoizedState: n,
                baseState: n,
                baseQueue: null,
                queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: vo, lastRenderedState: n },
                next: null,
            }),
            (e.memoizedState = t),
            null !== (e = e.alternate) && (e.memoizedState = t),
            t
        );
    }
    function as(e) {
        var t = is(e);
        (null === t.next && (t = e.alternate.memoizedState), ds(e, t.next.queue, {}, Ku()));
    }
    function os() {
        return ji(hd);
    }
    function ss() {
        return co().memoizedState;
    }
    function ls() {
        return co().memoizedState;
    }
    function us(e) {
        for (var t = e.return; null !== t; ) {
            switch (t.tag) {
                case 24:
                case 3:
                    var n = Ku(),
                        r = wa(t, (e = _a(n)), n);
                    return (null !== r && (Xu(r, t, n), Sa(r, t, n)), (t = { cache: Ii() }), void (e.payload = t));
            }
            t = t.return;
        }
    }
    function cs(e, t, n) {
        var r = Ku();
        ((n = { lane: r, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null }),
            ps(e) ? vs(t, n) : null !== (n = jr(e, t, n, r)) && (Xu(n, e, r), ys(n, t, r)));
    }
    function fs(e, t, n) {
        ds(e, t, n, Ku());
    }
    function ds(e, t, n, r) {
        var i = { lane: r, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null };
        if (ps(e)) vs(t, i);
        else {
            var a = e.alternate;
            if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
                try {
                    var o = t.lastRenderedState,
                        s = a(o, n);
                    if (((i.hasEagerState = !0), (i.eagerState = s), er(s, o)))
                        return (Br(e, t, i, 0), null === yu && Ur(), !1);
                } catch (l) {}
            if (null !== (n = jr(e, t, i, r))) return (Xu(n, e, r), ys(n, t, r), !0);
        }
        return !1;
    }
    function hs(e, t, n, i) {
        if (
            ((i = {
                lane: 2,
                revertLane: $c(),
                gesture: null,
                action: i,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            }),
            ps(e))
        ) {
            if (t) throw Error(r(479));
        } else null !== (t = jr(e, n, i, 2)) && Xu(t, e, 2);
    }
    function ps(e) {
        var t = e.alternate;
        return e === $a || (null !== t && t === $a);
    }
    function vs(e, t) {
        Ka = qa = !0;
        var n = e.pending;
        (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
    }
    function ys(e, t, n) {
        if (4194048 & n) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), Le(e, n));
        }
    }
    var gs = {
        readContext: ji,
        use: ho,
        useCallback: eo,
        useContext: eo,
        useEffect: eo,
        useImperativeHandle: eo,
        useLayoutEffect: eo,
        useInsertionEffect: eo,
        useMemo: eo,
        useReducer: eo,
        useRef: eo,
        useState: eo,
        useDebugValue: eo,
        useDeferredValue: eo,
        useTransition: eo,
        useSyncExternalStore: eo,
        useId: eo,
        useHostTransitionStatus: eo,
        useFormState: eo,
        useActionState: eo,
        useOptimistic: eo,
        useMemoCache: eo,
        useCacheRefresh: eo,
    };
    gs.useEffectEvent = eo;
    var ms = {
            readContext: ji,
            use: ho,
            useCallback: function (e, t) {
                return ((uo().memoizedState = [e, void 0 === t ? null : t]), e);
            },
            useContext: ji,
            useEffect: Fo,
            useImperativeHandle: function (e, t, n) {
                ((n = null != n ? n.concat([e]) : null), Io(4194308, 4, Ko.bind(null, t, e), n));
            },
            useLayoutEffect: function (e, t) {
                return Io(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
                Io(4, 2, e, t);
            },
            useMemo: function (e, t) {
                var n = uo();
                t = void 0 === t ? null : t;
                var r = e();
                if (Ga) {
                    we(!0);
                    try {
                        e();
                    } finally {
                        we(!1);
                    }
                }
                return ((n.memoizedState = [r, t]), r);
            },
            useReducer: function (e, t, n) {
                var r = uo();
                if (void 0 !== n) {
                    var i = n(t);
                    if (Ga) {
                        we(!0);
                        try {
                            n(t);
                        } finally {
                            we(!1);
                        }
                    }
                } else i = t;
                return (
                    (r.memoizedState = r.baseState = i),
                    (e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: i }),
                    (r.queue = e),
                    (e = e.dispatch = cs.bind(null, $a, e)),
                    [r.memoizedState, e]
                );
            },
            useRef: function (e) {
                return ((e = { current: e }), (uo().memoizedState = e));
            },
            useState: function (e) {
                var t = (e = Eo(e)).queue,
                    n = fs.bind(null, $a, t);
                return ((t.dispatch = n), [e.memoizedState, n]);
            },
            useDebugValue: Xo,
            useDeferredValue: function (e, t) {
                return Zo(uo(), e, t);
            },
            useTransition: function () {
                var e = Eo(!1);
                return ((e = ts.bind(null, $a, e.queue, !0, !1)), (uo().memoizedState = e), [!1, e]);
            },
            useSyncExternalStore: function (e, t, n) {
                var i = $a,
                    a = uo();
                if (hi) {
                    if (void 0 === n) throw Error(r(407));
                    n = n();
                } else {
                    if (((n = t()), null === yu)) throw Error(r(349));
                    127 & mu || _o(i, t, n);
                }
                a.memoizedState = n;
                var o = { value: n, getSnapshot: t };
                return (
                    (a.queue = o),
                    Fo(So.bind(null, i, o, e), [e]),
                    (i.flags |= 2048),
                    Mo(9, { destroy: void 0 }, wo.bind(null, i, o, n, t), null),
                    n
                );
            },
            useId: function () {
                var e = uo(),
                    t = yu.identifierPrefix;
                if (hi) {
                    var n = ai;
                    ((t = '_' + t + 'R_' + (n = (ii & ~(1 << (32 - Se(ii) - 1))).toString(32) + n)),
                        0 < (n = Xa++) && (t += 'H' + n.toString(32)),
                        (t += '_'));
                } else t = '_' + t + 'r_' + (n = Za++).toString(32) + '_';
                return (e.memoizedState = t);
            },
            useHostTransitionStatus: os,
            useFormState: jo,
            useActionState: jo,
            useOptimistic: function (e) {
                var t = uo();
                t.memoizedState = t.baseState = e;
                var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
                return ((t.queue = n), (t = hs.bind(null, $a, !0, n)), (n.dispatch = t), [e, t]);
            },
            useMemoCache: po,
            useCacheRefresh: function () {
                return (uo().memoizedState = us.bind(null, $a));
            },
            useEffectEvent: function (e) {
                var t = uo(),
                    n = { impl: e };
                return (
                    (t.memoizedState = n),
                    function () {
                        if (2 & vu) throw Error(r(440));
                        return n.impl.apply(void 0, arguments);
                    }
                );
            },
        },
        bs = {
            readContext: ji,
            use: ho,
            useCallback: Yo,
            useContext: ji,
            useEffect: $o,
            useImperativeHandle: Go,
            useInsertionEffect: Ho,
            useLayoutEffect: qo,
            useMemo: Jo,
            useReducer: yo,
            useRef: Do,
            useState: function () {
                return yo(vo);
            },
            useDebugValue: Xo,
            useDeferredValue: function (e, t) {
                return es(co(), Qa.memoizedState, e, t);
            },
            useTransition: function () {
                var e = yo(vo)[0],
                    t = co().memoizedState;
                return ['boolean' == typeof e ? e : fo(e), t];
            },
            useSyncExternalStore: bo,
            useId: ss,
            useHostTransitionStatus: os,
            useFormState: Wo,
            useActionState: Wo,
            useOptimistic: function (e, t) {
                return Oo(co(), 0, e, t);
            },
            useMemoCache: po,
            useCacheRefresh: ls,
        };
    bs.useEffectEvent = Qo;
    var _s = {
        readContext: ji,
        use: ho,
        useCallback: Yo,
        useContext: ji,
        useEffect: $o,
        useImperativeHandle: Go,
        useInsertionEffect: Ho,
        useLayoutEffect: qo,
        useMemo: Jo,
        useReducer: mo,
        useRef: Do,
        useState: function () {
            return mo(vo);
        },
        useDebugValue: Xo,
        useDeferredValue: function (e, t) {
            var n = co();
            return null === Qa ? Zo(n, e, t) : es(n, Qa.memoizedState, e, t);
        },
        useTransition: function () {
            var e = mo(vo)[0],
                t = co().memoizedState;
            return ['boolean' == typeof e ? e : fo(e), t];
        },
        useSyncExternalStore: bo,
        useId: ss,
        useHostTransitionStatus: os,
        useFormState: Ro,
        useActionState: Ro,
        useOptimistic: function (e, t) {
            var n = co();
            return null !== Qa ? Oo(n, 0, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
        },
        useMemoCache: po,
        useCacheRefresh: ls,
    };
    function ws(e, t, n, r) {
        ((n = null == (n = n(r, (t = e.memoizedState))) ? t : c({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n));
    }
    _s.useEffectEvent = Qo;
    var Ss = {
        enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Ku(),
                i = _a(r);
            ((i.payload = t), null != n && (i.callback = n), null !== (t = wa(e, i, r)) && (Xu(t, e, r), Sa(t, e, r)));
        },
        enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Ku(),
                i = _a(r);
            ((i.tag = 1),
                (i.payload = t),
                null != n && (i.callback = n),
                null !== (t = wa(e, i, r)) && (Xu(t, e, r), Sa(t, e, r)));
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Ku(),
                r = _a(n);
            ((r.tag = 2), null != t && (r.callback = t), null !== (t = wa(e, r, n)) && (Xu(t, e, n), Sa(t, e, n)));
        },
    };
    function ks(e, t, n, r, i, a, o) {
        return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, o)
            : !t.prototype || !t.prototype.isPureReactComponent || !tr(n, r) || !tr(i, a);
    }
    function xs(e, t, n, r) {
        ((e = t.state),
            'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
            'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ss.enqueueReplaceState(t, t.state, null));
    }
    function Es(e, t) {
        var n = t;
        if ('ref' in t) for (var r in ((n = {}), t)) 'ref' !== r && (n[r] = t[r]);
        if ((e = e.defaultProps)) for (var i in (n === t && (n = c({}, n)), e)) void 0 === n[i] && (n[i] = e[i]);
        return n;
    }
    function Os(e) {
        Tr(e);
    }
    function Ps(e) {
        console.error(e);
    }
    function Ts(e) {
        Tr(e);
    }
    function Cs(e, t) {
        try {
            (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
        } catch (n) {
            setTimeout(function () {
                throw n;
            });
        }
    }
    function As(e, t, n) {
        try {
            (0, e.onCaughtError)(n.value, { componentStack: n.stack, errorBoundary: 1 === t.tag ? t.stateNode : null });
        } catch (r) {
            setTimeout(function () {
                throw r;
            });
        }
    }
    function Ns(e, t, n) {
        return (
            ((n = _a(n)).tag = 3),
            (n.payload = { element: null }),
            (n.callback = function () {
                Cs(e, t);
            }),
            n
        );
    }
    function Us(e) {
        return (((e = _a(e)).tag = 3), e);
    }
    function Bs(e, t, n, r) {
        var i = n.type.getDerivedStateFromError;
        if ('function' == typeof i) {
            var a = r.value;
            ((e.payload = function () {
                return i(a);
            }),
                (e.callback = function () {
                    As(t, n, r);
                }));
        }
        var o = n.stateNode;
        null !== o &&
            'function' == typeof o.componentDidCatch &&
            (e.callback = function () {
                (As(t, n, r), 'function' != typeof i && (null === Ru ? (Ru = new Set([this])) : Ru.add(this)));
                var e = r.stack;
                this.componentDidCatch(r.value, { componentStack: null !== e ? e : '' });
            });
    }
    var js = Error(r(461)),
        Ws = !1;
    function Ls(e, t, n, r) {
        t.child = null === e ? ya(t, null, n, r) : va(t, e.child, n, r);
    }
    function zs(e, t, n, r, i) {
        n = n.render;
        var a = t.ref;
        if ('ref' in r) {
            var o = {};
            for (var s in r) 'ref' !== s && (o[s] = r[s]);
        } else o = r;
        return (
            Bi(t),
            (r = no(e, t, n, o, a, i)),
            (s = oo()),
            null === e || Ws ? (hi && s && li(t), (t.flags |= 1), Ls(e, t, r, i), t.child) : (so(e, t, i), ol(e, t, i))
        );
    }
    function Rs(e, t, n, r, i) {
        if (null === e) {
            var a = n.type;
            return 'function' != typeof a || Ir(a) || void 0 !== a.defaultProps || null !== n.compare
                ? (((e = $r(n.type, null, r, t, t.mode, i)).ref = t.ref), (e.return = t), (t.child = e))
                : ((t.tag = 15), (t.type = a), Ms(e, t, a, r, i));
        }
        if (((a = e.child), !sl(e, i))) {
            var o = a.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : tr)(o, r) && e.ref === t.ref) return ol(e, t, i);
        }
        return ((t.flags |= 1), ((e = Vr(a, r)).ref = t.ref), (e.return = t), (t.child = e));
    }
    function Ms(e, t, n, r, i) {
        if (null !== e) {
            var a = e.memoizedProps;
            if (tr(a, r) && e.ref === t.ref) {
                if (((Ws = !1), (t.pendingProps = r = a), !sl(e, i))) return ((t.lanes = e.lanes), ol(e, t, i));
                131072 & e.flags && (Ws = !0);
            }
        }
        return Hs(e, t, n, r, i);
    }
    function Ds(e, t, n, r) {
        var i = r.children,
            a = null !== e ? e.memoizedState : null;
        if (
            (null === e &&
                null === t.stateNode &&
                (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
            'hidden' === r.mode)
        ) {
            if (128 & t.flags) {
                if (((a = null !== a ? a.baseLanes | n : n), null !== e)) {
                    for (r = t.child = e.child, i = 0; null !== r; )
                        ((i = i | r.lanes | r.childLanes), (r = r.sibling));
                    r = i & ~a;
                } else ((r = 0), (t.child = null));
                return Vs(e, t, a, n, r);
            }
            if (!(536870912 & n)) return ((r = t.lanes = 536870912), Vs(e, t, null !== a ? a.baseLanes | n : n, n, r));
            ((t.memoizedState = { baseLanes: 0, cachePool: null }),
                null !== e && Yi(0, null !== a ? a.cachePool : null),
                null !== a ? Na(t, a) : Ua(),
                Ra(t));
        } else
            null !== a
                ? (Yi(0, a.cachePool), Na(t, a), Ma(), (t.memoizedState = null))
                : (null !== e && Yi(0, null), Ua(), Ma());
        return (Ls(e, t, i, n), t.child);
    }
    function Is(e, t) {
        return (
            (null !== e && 22 === e.tag) ||
                null !== t.stateNode ||
                (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
            t.sibling
        );
    }
    function Vs(e, t, n, r, i) {
        var a = Xi();
        return (
            (a = null === a ? null : { parent: Di._currentValue, pool: a }),
            (t.memoizedState = { baseLanes: n, cachePool: a }),
            null !== e && Yi(0, null),
            Ua(),
            Ra(t),
            null !== e && Ni(e, t, r, !0),
            (t.childLanes = i),
            null
        );
    }
    function Fs(e, t) {
        return (
            ((t = tl({ mode: t.mode, children: t.children }, e.mode)).ref = e.ref),
            (e.child = t),
            (t.return = e),
            t
        );
    }
    function $s(e, t, n) {
        return (va(t, e.child, null, n), ((e = Fs(t, t.pendingProps)).flags |= 2), Da(t), (t.memoizedState = null), e);
    }
    function Qs(e, t) {
        var n = t.ref;
        if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
        else {
            if ('function' != typeof n && 'object' != typeof n) throw Error(r(284));
            (null !== e && e.ref === n) || (t.flags |= 4194816);
        }
    }
    function Hs(e, t, n, r, i) {
        return (
            Bi(t),
            (n = no(e, t, n, r, void 0, i)),
            (r = oo()),
            null === e || Ws ? (hi && r && li(t), (t.flags |= 1), Ls(e, t, n, i), t.child) : (so(e, t, i), ol(e, t, i))
        );
    }
    function qs(e, t, n, r, i, a) {
        return (
            Bi(t),
            (t.updateQueue = null),
            (n = io(t, r, n, i)),
            ro(e),
            (r = oo()),
            null === e || Ws ? (hi && r && li(t), (t.flags |= 1), Ls(e, t, n, a), t.child) : (so(e, t, a), ol(e, t, a))
        );
    }
    function Ks(e, t, n, r, i) {
        if ((Bi(t), null === t.stateNode)) {
            var a = Rr,
                o = n.contextType;
            ('object' == typeof o && null !== o && (a = ji(o)),
                (a = new n(r, a)),
                (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
                (a.updater = Ss),
                (t.stateNode = a),
                (a._reactInternals = t),
                ((a = t.stateNode).props = r),
                (a.state = t.memoizedState),
                (a.refs = {}),
                ma(t),
                (o = n.contextType),
                (a.context = 'object' == typeof o && null !== o ? ji(o) : Rr),
                (a.state = t.memoizedState),
                'function' == typeof (o = n.getDerivedStateFromProps) && (ws(t, n, o, r), (a.state = t.memoizedState)),
                'function' == typeof n.getDerivedStateFromProps ||
                    'function' == typeof a.getSnapshotBeforeUpdate ||
                    ('function' != typeof a.UNSAFE_componentWillMount && 'function' != typeof a.componentWillMount) ||
                    ((o = a.state),
                    'function' == typeof a.componentWillMount && a.componentWillMount(),
                    'function' == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
                    o !== a.state && Ss.enqueueReplaceState(a, a.state, null),
                    Oa(t, r, a, i),
                    Ea(),
                    (a.state = t.memoizedState)),
                'function' == typeof a.componentDidMount && (t.flags |= 4194308),
                (r = !0));
        } else if (null === e) {
            a = t.stateNode;
            var s = t.memoizedProps,
                l = Es(n, s);
            a.props = l;
            var u = a.context,
                c = n.contextType;
            ((o = Rr), 'object' == typeof c && null !== c && (o = ji(c)));
            var f = n.getDerivedStateFromProps;
            ((c = 'function' == typeof f || 'function' == typeof a.getSnapshotBeforeUpdate),
                (s = t.pendingProps !== s),
                c ||
                    ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
                        'function' != typeof a.componentWillReceiveProps) ||
                    ((s || u !== o) && xs(t, a, r, o)),
                (ga = !1));
            var d = t.memoizedState;
            ((a.state = d),
                Oa(t, r, a, i),
                Ea(),
                (u = t.memoizedState),
                s || d !== u || ga
                    ? ('function' == typeof f && (ws(t, n, f, r), (u = t.memoizedState)),
                      (l = ga || ks(t, n, l, r, d, u, o))
                          ? (c ||
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
                      (a.context = o),
                      (r = l))
                    : ('function' == typeof a.componentDidMount && (t.flags |= 4194308), (r = !1)));
        } else {
            ((a = t.stateNode),
                ba(e, t),
                (c = Es(n, (o = t.memoizedProps))),
                (a.props = c),
                (f = t.pendingProps),
                (d = a.context),
                (u = n.contextType),
                (l = Rr),
                'object' == typeof u && null !== u && (l = ji(u)),
                (u =
                    'function' == typeof (s = n.getDerivedStateFromProps) ||
                    'function' == typeof a.getSnapshotBeforeUpdate) ||
                    ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
                        'function' != typeof a.componentWillReceiveProps) ||
                    ((o !== f || d !== l) && xs(t, a, r, l)),
                (ga = !1),
                (d = t.memoizedState),
                (a.state = d),
                Oa(t, r, a, i),
                Ea());
            var h = t.memoizedState;
            o !== f || d !== h || ga || (null !== e && null !== e.dependencies && Ui(e.dependencies))
                ? ('function' == typeof s && (ws(t, n, s, r), (h = t.memoizedState)),
                  (c = ga || ks(t, n, c, r, d, h, l) || (null !== e && null !== e.dependencies && Ui(e.dependencies)))
                      ? (u ||
                            ('function' != typeof a.UNSAFE_componentWillUpdate &&
                                'function' != typeof a.componentWillUpdate) ||
                            ('function' == typeof a.componentWillUpdate && a.componentWillUpdate(r, h, l),
                            'function' == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, h, l)),
                        'function' == typeof a.componentDidUpdate && (t.flags |= 4),
                        'function' == typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024))
                      : ('function' != typeof a.componentDidUpdate ||
                            (o === e.memoizedProps && d === e.memoizedState) ||
                            (t.flags |= 4),
                        'function' != typeof a.getSnapshotBeforeUpdate ||
                            (o === e.memoizedProps && d === e.memoizedState) ||
                            (t.flags |= 1024),
                        (t.memoizedProps = r),
                        (t.memoizedState = h)),
                  (a.props = r),
                  (a.state = h),
                  (a.context = l),
                  (r = c))
                : ('function' != typeof a.componentDidUpdate ||
                      (o === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                  'function' != typeof a.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                  (r = !1));
        }
        return (
            (a = r),
            Qs(e, t),
            (r = !!(128 & t.flags)),
            a || r
                ? ((a = t.stateNode),
                  (n = r && 'function' != typeof n.getDerivedStateFromError ? null : a.render()),
                  (t.flags |= 1),
                  null !== e && r
                      ? ((t.child = va(t, e.child, null, i)), (t.child = va(t, null, n, i)))
                      : Ls(e, t, n, i),
                  (t.memoizedState = a.state),
                  (e = t.child))
                : (e = ol(e, t, i)),
            e
        );
    }
    function Gs(e, t, n, r) {
        return (wi(), (t.flags |= 256), Ls(e, t, n, r), t.child);
    }
    var Xs = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function Ys(e) {
        return { baseLanes: e, cachePool: Ji() };
    }
    function Js(e, t, n) {
        return ((e = null !== e ? e.childLanes & ~n : 0), t && (e |= Cu), e);
    }
    function Zs(e, t, n) {
        var i,
            a = t.pendingProps,
            o = !1,
            s = !!(128 & t.flags);
        if (
            ((i = s) || (i = (null === e || null !== e.memoizedState) && !!(2 & Ia.current)),
            i && ((o = !0), (t.flags &= -129)),
            (i = !!(32 & t.flags)),
            (t.flags &= -33),
            null === e)
        ) {
            if (hi) {
                if (
                    (o ? La(t) : Ma(),
                    (e = di)
                        ? null !== (e = null !== (e = Bf(e, vi)) && '&' !== e.data ? e : null) &&
                          ((t.memoizedState = {
                              dehydrated: e,
                              treeContext: null !== ri ? { id: ii, overflow: ai } : null,
                              retryLane: 536870912,
                              hydrationErrors: null,
                          }),
                          ((n = qr(e)).return = t),
                          (t.child = n),
                          (fi = t),
                          (di = null))
                        : (e = null),
                    null === e)
                )
                    throw gi(t);
                return (Wf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
            }
            var l = a.children;
            return (
                (a = a.fallback),
                o
                    ? (Ma(),
                      (l = tl({ mode: 'hidden', children: l }, (o = t.mode))),
                      (a = Qr(a, o, n, null)),
                      (l.return = t),
                      (a.return = t),
                      (l.sibling = a),
                      (t.child = l),
                      ((a = t.child).memoizedState = Ys(n)),
                      (a.childLanes = Js(e, i, n)),
                      (t.memoizedState = Xs),
                      Is(null, a))
                    : (La(t), el(t, l))
            );
        }
        var u = e.memoizedState;
        if (null !== u && null !== (l = u.dehydrated)) {
            if (s)
                256 & t.flags
                    ? (La(t), (t.flags &= -257), (t = nl(e, t, n)))
                    : null !== t.memoizedState
                      ? (Ma(), (t.child = e.child), (t.flags |= 128), (t = null))
                      : (Ma(),
                        (l = a.fallback),
                        (o = t.mode),
                        (a = tl({ mode: 'visible', children: a.children }, o)),
                        ((l = Qr(l, o, n, null)).flags |= 2),
                        (a.return = t),
                        (l.return = t),
                        (a.sibling = l),
                        (t.child = a),
                        va(t, e.child, null, n),
                        ((a = t.child).memoizedState = Ys(n)),
                        (a.childLanes = Js(e, i, n)),
                        (t.memoizedState = Xs),
                        (t = Is(null, a)));
            else if ((La(t), Wf(l))) {
                if ((i = l.nextSibling && l.nextSibling.dataset)) var c = i.dgst;
                ((i = c),
                    ((a = Error(r(419))).stack = ''),
                    (a.digest = i),
                    ki({ value: a, source: null, stack: null }),
                    (t = nl(e, t, n)));
            } else if ((Ws || Ni(e, t, n, !1), (i = 0 !== (n & e.childLanes)), Ws || i)) {
                if (null !== (i = yu) && 0 !== (a = ze(i, n)) && a !== u.retryLane)
                    throw ((u.retryLane = a), Wr(e, a), Xu(i, e, a), js);
                (jf(l) || lc(), (t = nl(e, t, n)));
            } else
                jf(l)
                    ? ((t.flags |= 192), (t.child = e.child), (t = null))
                    : ((e = u.treeContext),
                      (di = Lf(l.nextSibling)),
                      (fi = t),
                      (hi = !0),
                      (pi = null),
                      (vi = !1),
                      null !== e && ci(t, e),
                      ((t = el(t, a.children)).flags |= 4096));
            return t;
        }
        return o
            ? (Ma(),
              (l = a.fallback),
              (o = t.mode),
              (c = (u = e.child).sibling),
              ((a = Vr(u, { mode: 'hidden', children: a.children })).subtreeFlags = 65011712 & u.subtreeFlags),
              null !== c ? (l = Vr(c, l)) : ((l = Qr(l, o, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              Is(null, a),
              (a = t.child),
              null === (l = e.child.memoizedState)
                  ? (l = Ys(n))
                  : (null !== (o = l.cachePool)
                        ? ((u = Di._currentValue), (o = o.parent !== u ? { parent: u, pool: u } : o))
                        : (o = Ji()),
                    (l = { baseLanes: l.baseLanes | n, cachePool: o })),
              (a.memoizedState = l),
              (a.childLanes = Js(e, i, n)),
              (t.memoizedState = Xs),
              Is(e.child, a))
            : (La(t),
              (e = (n = e.child).sibling),
              ((n = Vr(n, { mode: 'visible', children: a.children })).return = t),
              (n.sibling = null),
              null !== e && (null === (i = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
              (t.child = n),
              (t.memoizedState = null),
              n);
    }
    function el(e, t) {
        return (((t = tl({ mode: 'visible', children: t }, e.mode)).return = e), (e.child = t));
    }
    function tl(e, t) {
        return (((e = Dr(22, e, null, t)).lanes = 0), e);
    }
    function nl(e, t, n) {
        return (
            va(t, e.child, null, n),
            ((e = el(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
        );
    }
    function rl(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        (null !== r && (r.lanes |= t), Ci(e.return, t, n));
    }
    function il(e, t, n, r, i, a) {
        var o = e.memoizedState;
        null === o
            ? (e.memoizedState = {
                  isBackwards: t,
                  rendering: null,
                  renderingStartTime: 0,
                  last: r,
                  tail: n,
                  tailMode: i,
                  treeForkCount: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = i),
              (o.treeForkCount = a));
    }
    function al(e, t, n) {
        var r = t.pendingProps,
            i = r.revealOrder,
            a = r.tail;
        r = r.children;
        var o = Ia.current,
            s = !!(2 & o);
        if (
            (s ? ((o = (1 & o) | 2), (t.flags |= 128)) : (o &= 1),
            R(Ia, o),
            Ls(e, t, r, n),
            (r = hi ? ei : 0),
            !s && null !== e && 128 & e.flags)
        )
            e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && rl(e, n, t);
                else if (19 === e.tag) rl(e, n, t);
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
        switch (i) {
            case 'forwards':
                for (n = t.child, i = null; null !== n; )
                    (null !== (e = n.alternate) && null === Va(e) && (i = n), (n = n.sibling));
                (null === (n = i) ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
                    il(t, !1, i, n, a, r));
                break;
            case 'backwards':
            case 'unstable_legacy-backwards':
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                    if (null !== (e = i.alternate) && null === Va(e)) {
                        t.child = i;
                        break;
                    }
                    ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
                }
                il(t, !0, n, null, a, r);
                break;
            case 'together':
                il(t, !1, null, null, void 0, r);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function ol(e, t, n) {
        if ((null !== e && (t.dependencies = e.dependencies), (Ou |= t.lanes), 0 === (n & t.childLanes))) {
            if (null === e) return null;
            if ((Ni(e, t, n, !1), 0 === (n & t.childLanes))) return null;
        }
        if (null !== e && t.child !== e.child) throw Error(r(153));
        if (null !== t.child) {
            for (n = Vr((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
                ((e = e.sibling), ((n = n.sibling = Vr(e, e.pendingProps)).return = t));
            n.sibling = null;
        }
        return t.child;
    }
    function sl(e, t) {
        return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !Ui(e));
    }
    function ll(e, t, n) {
        if (null !== e)
            if (e.memoizedProps !== t.pendingProps) Ws = !0;
            else {
                if (!(sl(e, n) || 128 & t.flags))
                    return (
                        (Ws = !1),
                        (function (e, t, n) {
                            switch (t.tag) {
                                case 3:
                                    (H(t, t.stateNode.containerInfo), Pi(0, Di, e.memoizedState.cache), wi());
                                    break;
                                case 27:
                                case 5:
                                    K(t);
                                    break;
                                case 4:
                                    H(t, t.stateNode.containerInfo);
                                    break;
                                case 10:
                                    Pi(0, t.type, t.memoizedProps.value);
                                    break;
                                case 31:
                                    if (null !== t.memoizedState) return ((t.flags |= 128), za(t), null);
                                    break;
                                case 13:
                                    var r = t.memoizedState;
                                    if (null !== r)
                                        return null !== r.dehydrated
                                            ? (La(t), (t.flags |= 128), null)
                                            : 0 !== (n & t.child.childLanes)
                                              ? Zs(e, t, n)
                                              : (La(t), null !== (e = ol(e, t, n)) ? e.sibling : null);
                                    La(t);
                                    break;
                                case 19:
                                    var i = !!(128 & e.flags);
                                    if (
                                        ((r = 0 !== (n & t.childLanes)) ||
                                            (Ni(e, t, n, !1), (r = 0 !== (n & t.childLanes))),
                                        i)
                                    ) {
                                        if (r) return al(e, t, n);
                                        t.flags |= 128;
                                    }
                                    if (
                                        (null !== (i = t.memoizedState) &&
                                            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                                        R(Ia, Ia.current),
                                        r)
                                    )
                                        break;
                                    return null;
                                case 22:
                                    return ((t.lanes = 0), Ds(e, t, n, t.pendingProps));
                                case 24:
                                    Pi(0, Di, e.memoizedState.cache);
                            }
                            return ol(e, t, n);
                        })(e, t, n)
                    );
                Ws = !!(131072 & e.flags);
            }
        else ((Ws = !1), hi && 1048576 & t.flags && si(t, ei, t.index));
        switch (((t.lanes = 0), t.tag)) {
            case 16:
                e: {
                    var i = t.pendingProps;
                    if (((e = aa(t.elementType)), (t.type = e), 'function' != typeof e)) {
                        if (null != e) {
                            var a = e.$$typeof;
                            if (a === b) {
                                ((t.tag = 11), (t = zs(null, t, e, i, n)));
                                break e;
                            }
                            if (a === S) {
                                ((t.tag = 14), (t = Rs(null, t, e, i, n)));
                                break e;
                            }
                        }
                        throw ((t = C(e) || e), Error(r(306, t, '')));
                    }
                    Ir(e)
                        ? ((i = Es(e, i)), (t.tag = 1), (t = Ks(null, t, e, i, n)))
                        : ((t.tag = 0), (t = Hs(null, t, e, i, n)));
                }
                return t;
            case 0:
                return Hs(e, t, t.type, t.pendingProps, n);
            case 1:
                return Ks(e, t, (i = t.type), (a = Es(i, t.pendingProps)), n);
            case 3:
                e: {
                    if ((H(t, t.stateNode.containerInfo), null === e)) throw Error(r(387));
                    i = t.pendingProps;
                    var o = t.memoizedState;
                    ((a = o.element), ba(e, t), Oa(t, i, null, n));
                    var s = t.memoizedState;
                    if (
                        ((i = s.cache),
                        Pi(0, Di, i),
                        i !== o.cache && Ai(t, [Di], n, !0),
                        Ea(),
                        (i = s.element),
                        o.isDehydrated)
                    ) {
                        if (
                            ((o = { element: i, isDehydrated: !1, cache: s.cache }),
                            (t.updateQueue.baseState = o),
                            (t.memoizedState = o),
                            256 & t.flags)
                        ) {
                            t = Gs(e, t, i, n);
                            break e;
                        }
                        if (i !== a) {
                            (ki((a = Xr(Error(r(424)), t))), (t = Gs(e, t, i, n)));
                            break e;
                        }
                        if (9 === (e = t.stateNode.containerInfo).nodeType) e = e.body;
                        else e = 'HTML' === e.nodeName ? e.ownerDocument.body : e;
                        for (
                            di = Lf(e.firstChild),
                                fi = t,
                                hi = !0,
                                pi = null,
                                vi = !0,
                                n = ya(t, null, i, n),
                                t.child = n;
                            n;
                        )
                            ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                    } else {
                        if ((wi(), i === a)) {
                            t = ol(e, t, n);
                            break e;
                        }
                        Ls(e, t, i, n);
                    }
                    t = t.child;
                }
                return t;
            case 26:
                return (
                    Qs(e, t),
                    null === e
                        ? (n = Kf(t.type, null, t.pendingProps, null))
                            ? (t.memoizedState = n)
                            : hi ||
                              ((n = t.type),
                              (e = t.pendingProps),
                              ((i = bf(F.current).createElement(n))[Fe] = t),
                              (i[$e] = e),
                              vf(i, n, e),
                              nt(i),
                              (t.stateNode = i))
                        : (t.memoizedState = Kf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
                    null
                );
            case 27:
                return (
                    K(t),
                    null === e &&
                        hi &&
                        ((i = t.stateNode = Df(t.type, t.pendingProps, F.current)),
                        (fi = t),
                        (vi = !0),
                        (a = di),
                        Cf(t.type) ? ((zf = a), (di = Lf(i.firstChild))) : (di = a)),
                    Ls(e, t, t.pendingProps.children, n),
                    Qs(e, t),
                    null === e && (t.flags |= 4194304),
                    t.child
                );
            case 5:
                return (
                    null === e &&
                        hi &&
                        ((a = i = di) &&
                            (null !==
                            (i = (function (e, t, n, r) {
                                for (; 1 === e.nodeType; ) {
                                    var i = n;
                                    if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                                        if (!r && ('INPUT' !== e.nodeName || 'hidden' !== e.type)) break;
                                    } else if (r) {
                                        if (!e[Xe])
                                            switch (t) {
                                                case 'meta':
                                                    if (!e.hasAttribute('itemprop')) break;
                                                    return e;
                                                case 'link':
                                                    if (
                                                        'stylesheet' === (a = e.getAttribute('rel')) &&
                                                        e.hasAttribute('data-precedence')
                                                    )
                                                        break;
                                                    if (
                                                        a !== i.rel ||
                                                        e.getAttribute('href') !==
                                                            (null == i.href || '' === i.href ? null : i.href) ||
                                                        e.getAttribute('crossorigin') !==
                                                            (null == i.crossOrigin ? null : i.crossOrigin) ||
                                                        e.getAttribute('title') !== (null == i.title ? null : i.title)
                                                    )
                                                        break;
                                                    return e;
                                                case 'style':
                                                    if (e.hasAttribute('data-precedence')) break;
                                                    return e;
                                                case 'script':
                                                    if (
                                                        ((a = e.getAttribute('src')) !==
                                                            (null == i.src ? null : i.src) ||
                                                            e.getAttribute('type') !==
                                                                (null == i.type ? null : i.type) ||
                                                            e.getAttribute('crossorigin') !==
                                                                (null == i.crossOrigin ? null : i.crossOrigin)) &&
                                                        a &&
                                                        e.hasAttribute('async') &&
                                                        !e.hasAttribute('itemprop')
                                                    )
                                                        break;
                                                    return e;
                                                default:
                                                    return e;
                                            }
                                    } else {
                                        if ('input' !== t || 'hidden' !== e.type) return e;
                                        var a = null == i.name ? null : '' + i.name;
                                        if ('hidden' === i.type && e.getAttribute('name') === a) return e;
                                    }
                                    if (null === (e = Lf(e.nextSibling))) break;
                                }
                                return null;
                            })(i, t.type, t.pendingProps, vi))
                                ? ((t.stateNode = i), (fi = t), (di = Lf(i.firstChild)), (vi = !1), (a = !0))
                                : (a = !1)),
                        a || gi(t)),
                    K(t),
                    (a = t.type),
                    (o = t.pendingProps),
                    (s = null !== e ? e.memoizedProps : null),
                    (i = o.children),
                    Sf(a, o) ? (i = null) : null !== s && Sf(a, s) && (t.flags |= 32),
                    null !== t.memoizedState && ((a = no(e, t, ao, null, null, n)), (hd._currentValue = a)),
                    Qs(e, t),
                    Ls(e, t, i, n),
                    t.child
                );
            case 6:
                return (
                    null === e &&
                        hi &&
                        ((e = n = di) &&
                            (null !==
                            (n = (function (e, t, n) {
                                if ('' === t) return null;
                                for (; 3 !== e.nodeType; ) {
                                    if ((1 !== e.nodeType || 'INPUT' !== e.nodeName || 'hidden' !== e.type) && !n)
                                        return null;
                                    if (null === (e = Lf(e.nextSibling))) return null;
                                }
                                return e;
                            })(n, t.pendingProps, vi))
                                ? ((t.stateNode = n), (fi = t), (di = null), (e = !0))
                                : (e = !1)),
                        e || gi(t)),
                    null
                );
            case 13:
                return Zs(e, t, n);
            case 4:
                return (
                    H(t, t.stateNode.containerInfo),
                    (i = t.pendingProps),
                    null === e ? (t.child = va(t, null, i, n)) : Ls(e, t, i, n),
                    t.child
                );
            case 11:
                return zs(e, t, t.type, t.pendingProps, n);
            case 7:
                return (Ls(e, t, t.pendingProps, n), t.child);
            case 8:
            case 12:
                return (Ls(e, t, t.pendingProps.children, n), t.child);
            case 10:
                return ((i = t.pendingProps), Pi(0, t.type, i.value), Ls(e, t, i.children, n), t.child);
            case 9:
                return (
                    (a = t.type._context),
                    (i = t.pendingProps.children),
                    Bi(t),
                    (i = i((a = ji(a)))),
                    (t.flags |= 1),
                    Ls(e, t, i, n),
                    t.child
                );
            case 14:
                return Rs(e, t, t.type, t.pendingProps, n);
            case 15:
                return Ms(e, t, t.type, t.pendingProps, n);
            case 19:
                return al(e, t, n);
            case 31:
                return (function (e, t, n) {
                    var i = t.pendingProps,
                        a = !!(128 & t.flags);
                    if (((t.flags &= -129), null === e)) {
                        if (hi) {
                            if ('hidden' === i.mode) return ((e = Fs(t, i)), (t.lanes = 536870912), Is(null, e));
                            if (
                                (za(t),
                                (e = di)
                                    ? null !== (e = null !== (e = Bf(e, vi)) && '&' === e.data ? e : null) &&
                                      ((t.memoizedState = {
                                          dehydrated: e,
                                          treeContext: null !== ri ? { id: ii, overflow: ai } : null,
                                          retryLane: 536870912,
                                          hydrationErrors: null,
                                      }),
                                      ((n = qr(e)).return = t),
                                      (t.child = n),
                                      (fi = t),
                                      (di = null))
                                    : (e = null),
                                null === e)
                            )
                                throw gi(t);
                            return ((t.lanes = 536870912), null);
                        }
                        return Fs(t, i);
                    }
                    var o = e.memoizedState;
                    if (null !== o) {
                        var s = o.dehydrated;
                        if ((za(t), a))
                            if (256 & t.flags) ((t.flags &= -257), (t = $s(e, t, n)));
                            else {
                                if (null === t.memoizedState) throw Error(r(558));
                                ((t.child = e.child), (t.flags |= 128), (t = null));
                            }
                        else if ((Ws || Ni(e, t, n, !1), (a = 0 !== (n & e.childLanes)), Ws || a)) {
                            if (null !== (i = yu) && 0 !== (s = ze(i, n)) && s !== o.retryLane)
                                throw ((o.retryLane = s), Wr(e, s), Xu(i, e, s), js);
                            (lc(), (t = $s(e, t, n)));
                        } else
                            ((e = o.treeContext),
                                (di = Lf(s.nextSibling)),
                                (fi = t),
                                (hi = !0),
                                (pi = null),
                                (vi = !1),
                                null !== e && ci(t, e),
                                ((t = Fs(t, i)).flags |= 4096));
                        return t;
                    }
                    return (
                        ((e = Vr(e.child, { mode: i.mode, children: i.children })).ref = t.ref),
                        (t.child = e),
                        (e.return = t),
                        e
                    );
                })(e, t, n);
            case 22:
                return Ds(e, t, n, t.pendingProps);
            case 24:
                return (
                    Bi(t),
                    (i = ji(Di)),
                    null === e
                        ? (null === (a = Xi()) &&
                              ((a = yu),
                              (o = Ii()),
                              (a.pooledCache = o),
                              o.refCount++,
                              null !== o && (a.pooledCacheLanes |= n),
                              (a = o)),
                          (t.memoizedState = { parent: i, cache: a }),
                          ma(t),
                          Pi(0, Di, a))
                        : (0 !== (e.lanes & n) && (ba(e, t), Oa(t, null, null, n), Ea()),
                          (a = e.memoizedState),
                          (o = t.memoizedState),
                          a.parent !== i
                              ? ((a = { parent: i, cache: i }),
                                (t.memoizedState = a),
                                0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = a),
                                Pi(0, Di, i))
                              : ((i = o.cache), Pi(0, Di, i), i !== a.cache && Ai(t, [Di], n, !0))),
                    Ls(e, t, t.pendingProps.children, n),
                    t.child
                );
            case 29:
                throw t.pendingProps;
        }
        throw Error(r(156, t.tag));
    }
    function ul(e) {
        e.flags |= 4;
    }
    function cl(e, t, n, r, i) {
        if (((t = !!(32 & e.mode)) && (t = !1), t)) {
            if (((e.flags |= 16777216), (335544128 & i) === i))
                if (e.stateNode.complete) e.flags |= 8192;
                else {
                    if (!ac()) throw ((oa = na), ea);
                    e.flags |= 8192;
                }
        } else e.flags &= -16777217;
    }
    function fl(e, t) {
        if ('stylesheet' !== t.type || 4 & t.state.loading) e.flags &= -16777217;
        else if (((e.flags |= 16777216), !sd(t))) {
            if (!ac()) throw ((oa = na), ea);
            e.flags |= 8192;
        }
    }
    function dl(e, t) {
        (null !== t && (e.flags |= 4),
            16384 & e.flags && ((t = 22 !== e.tag ? Ue() : 536870912), (e.lanes |= t), (Au |= t)));
    }
    function hl(e, t) {
        if (!hi)
            switch (e.tailMode) {
                case 'hidden':
                    t = e.tail;
                    for (var n = null; null !== t; ) (null !== t.alternate && (n = t), (t = t.sibling));
                    null === n ? (e.tail = null) : (n.sibling = null);
                    break;
                case 'collapsed':
                    n = e.tail;
                    for (var r = null; null !== n; ) (null !== n.alternate && (r = n), (n = n.sibling));
                    null === r
                        ? t || null === e.tail
                            ? (e.tail = null)
                            : (e.tail.sibling = null)
                        : (r.sibling = null);
            }
    }
    function pl(e) {
        var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
        if (t)
            for (var i = e.child; null !== i; )
                ((n |= i.lanes | i.childLanes),
                    (r |= 65011712 & i.subtreeFlags),
                    (r |= 65011712 & i.flags),
                    (i.return = e),
                    (i = i.sibling));
        else
            for (i = e.child; null !== i; )
                ((n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling));
        return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function vl(e, t, n) {
        var i = t.pendingProps;
        switch ((ui(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
                return (pl(t), null);
            case 3:
                return (
                    (n = t.stateNode),
                    (i = null),
                    null !== e && (i = e.memoizedState.cache),
                    t.memoizedState.cache !== i && (t.flags |= 2048),
                    Ti(Di),
                    q(),
                    n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
                    (null !== e && null !== e.child) ||
                        (_i(t)
                            ? ul(t)
                            : null === e ||
                              (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
                              ((t.flags |= 1024), Si())),
                    pl(t),
                    null
                );
            case 26:
                var a = t.type,
                    o = t.memoizedState;
                return (
                    null === e
                        ? (ul(t), null !== o ? (pl(t), fl(t, o)) : (pl(t), cl(t, a, 0, 0, n)))
                        : o
                          ? o !== e.memoizedState
                              ? (ul(t), pl(t), fl(t, o))
                              : (pl(t), (t.flags &= -16777217))
                          : ((e = e.memoizedProps) !== i && ul(t), pl(t), cl(t, a, 0, 0, n)),
                    null
                );
            case 27:
                if ((G(t), (n = F.current), (a = t.type), null !== e && null != t.stateNode))
                    e.memoizedProps !== i && ul(t);
                else {
                    if (!i) {
                        if (null === t.stateNode) throw Error(r(166));
                        return (pl(t), null);
                    }
                    ((e = I.current), _i(t) ? mi(t) : ((e = Df(a, i, n)), (t.stateNode = e), ul(t)));
                }
                return (pl(t), null);
            case 5:
                if ((G(t), (a = t.type), null !== e && null != t.stateNode)) e.memoizedProps !== i && ul(t);
                else {
                    if (!i) {
                        if (null === t.stateNode) throw Error(r(166));
                        return (pl(t), null);
                    }
                    if (((o = I.current), _i(t))) mi(t);
                    else {
                        var s = bf(F.current);
                        switch (o) {
                            case 1:
                                o = s.createElementNS('http://www.w3.org/2000/svg', a);
                                break;
                            case 2:
                                o = s.createElementNS('http://www.w3.org/1998/Math/MathML', a);
                                break;
                            default:
                                switch (a) {
                                    case 'svg':
                                        o = s.createElementNS('http://www.w3.org/2000/svg', a);
                                        break;
                                    case 'math':
                                        o = s.createElementNS('http://www.w3.org/1998/Math/MathML', a);
                                        break;
                                    case 'script':
                                        (((o = s.createElement('div')).innerHTML = '<script><\/script>'),
                                            (o = o.removeChild(o.firstChild)));
                                        break;
                                    case 'select':
                                        ((o =
                                            'string' == typeof i.is
                                                ? s.createElement('select', { is: i.is })
                                                : s.createElement('select')),
                                            i.multiple ? (o.multiple = !0) : i.size && (o.size = i.size));
                                        break;
                                    default:
                                        o =
                                            'string' == typeof i.is
                                                ? s.createElement(a, { is: i.is })
                                                : s.createElement(a);
                                }
                        }
                        ((o[Fe] = t), (o[$e] = i));
                        e: for (s = t.child; null !== s; ) {
                            if (5 === s.tag || 6 === s.tag) o.appendChild(s.stateNode);
                            else if (4 !== s.tag && 27 !== s.tag && null !== s.child) {
                                ((s.child.return = s), (s = s.child));
                                continue;
                            }
                            if (s === t) break e;
                            for (; null === s.sibling; ) {
                                if (null === s.return || s.return === t) break e;
                                s = s.return;
                            }
                            ((s.sibling.return = s.return), (s = s.sibling));
                        }
                        t.stateNode = o;
                        e: switch ((vf(o, a, i), a)) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                i = !!i.autoFocus;
                                break e;
                            case 'img':
                                i = !0;
                                break e;
                            default:
                                i = !1;
                        }
                        i && ul(t);
                    }
                }
                return (pl(t), cl(t, t.type, null === e || e.memoizedProps, t.pendingProps, n), null);
            case 6:
                if (e && null != t.stateNode) e.memoizedProps !== i && ul(t);
                else {
                    if ('string' != typeof i && null === t.stateNode) throw Error(r(166));
                    if (((e = F.current), _i(t))) {
                        if (((e = t.stateNode), (n = t.memoizedProps), (i = null), null !== (a = fi)))
                            switch (a.tag) {
                                case 27:
                                case 5:
                                    i = a.memoizedProps;
                            }
                        ((e[Fe] = t),
                            (e = !!(
                                e.nodeValue === n ||
                                (null !== i && !0 === i.suppressHydrationWarning) ||
                                df(e.nodeValue, n)
                            )) || gi(t, !0));
                    } else (((e = bf(e).createTextNode(i))[Fe] = t), (t.stateNode = e));
                }
                return (pl(t), null);
            case 31:
                if (((n = t.memoizedState), null === e || null !== e.memoizedState)) {
                    if (((i = _i(t)), null !== n)) {
                        if (null === e) {
                            if (!i) throw Error(r(318));
                            if (!(e = null !== (e = t.memoizedState) ? e.dehydrated : null)) throw Error(r(557));
                            e[Fe] = t;
                        } else (wi(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                        (pl(t), (e = !1));
                    } else
                        ((n = Si()),
                            null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = n),
                            (e = !0));
                    if (!e) return 256 & t.flags ? (Da(t), t) : (Da(t), null);
                    if (128 & t.flags) throw Error(r(558));
                }
                return (pl(t), null);
            case 13:
                if (
                    ((i = t.memoizedState),
                    null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
                ) {
                    if (((a = _i(t)), null !== i && null !== i.dehydrated)) {
                        if (null === e) {
                            if (!a) throw Error(r(318));
                            if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(r(317));
                            a[Fe] = t;
                        } else (wi(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                        (pl(t), (a = !1));
                    } else
                        ((a = Si()),
                            null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = a),
                            (a = !0));
                    if (!a) return 256 & t.flags ? (Da(t), t) : (Da(t), null);
                }
                return (
                    Da(t),
                    128 & t.flags
                        ? ((t.lanes = n), t)
                        : ((n = null !== i),
                          (e = null !== e && null !== e.memoizedState),
                          n &&
                              ((a = null),
                              null !== (i = t.child).alternate &&
                                  null !== i.alternate.memoizedState &&
                                  null !== i.alternate.memoizedState.cachePool &&
                                  (a = i.alternate.memoizedState.cachePool.pool),
                              (o = null),
                              null !== i.memoizedState &&
                                  null !== i.memoizedState.cachePool &&
                                  (o = i.memoizedState.cachePool.pool),
                              o !== a && (i.flags |= 2048)),
                          n !== e && n && (t.child.flags |= 8192),
                          dl(t, t.updateQueue),
                          pl(t),
                          null)
                );
            case 4:
                return (q(), null === e && tf(t.stateNode.containerInfo), pl(t), null);
            case 10:
                return (Ti(t.type), pl(t), null);
            case 19:
                if ((z(Ia), null === (i = t.memoizedState))) return (pl(t), null);
                if (((a = !!(128 & t.flags)), null === (o = i.rendering)))
                    if (a) hl(i, !1);
                    else {
                        if (0 !== Eu || (null !== e && 128 & e.flags))
                            for (e = t.child; null !== e; ) {
                                if (null !== (o = Va(e))) {
                                    for (
                                        t.flags |= 128,
                                            hl(i, !1),
                                            e = o.updateQueue,
                                            t.updateQueue = e,
                                            dl(t, e),
                                            t.subtreeFlags = 0,
                                            e = n,
                                            n = t.child;
                                        null !== n;
                                    )
                                        (Fr(n, e), (n = n.sibling));
                                    return (R(Ia, (1 & Ia.current) | 2), hi && oi(t, i.treeForkCount), t.child);
                                }
                                e = e.sibling;
                            }
                        null !== i.tail && ce() > Lu && ((t.flags |= 128), (a = !0), hl(i, !1), (t.lanes = 4194304));
                    }
                else {
                    if (!a)
                        if (null !== (e = Va(o))) {
                            if (
                                ((t.flags |= 128),
                                (a = !0),
                                (e = e.updateQueue),
                                (t.updateQueue = e),
                                dl(t, e),
                                hl(i, !0),
                                null === i.tail && 'hidden' === i.tailMode && !o.alternate && !hi)
                            )
                                return (pl(t), null);
                        } else
                            2 * ce() - i.renderingStartTime > Lu &&
                                536870912 !== n &&
                                ((t.flags |= 128), (a = !0), hl(i, !1), (t.lanes = 4194304));
                    i.isBackwards
                        ? ((o.sibling = t.child), (t.child = o))
                        : (null !== (e = i.last) ? (e.sibling = o) : (t.child = o), (i.last = o));
                }
                return null !== i.tail
                    ? ((e = i.tail),
                      (i.rendering = e),
                      (i.tail = e.sibling),
                      (i.renderingStartTime = ce()),
                      (e.sibling = null),
                      (n = Ia.current),
                      R(Ia, a ? (1 & n) | 2 : 1 & n),
                      hi && oi(t, i.treeForkCount),
                      e)
                    : (pl(t), null);
            case 22:
            case 23:
                return (
                    Da(t),
                    Ba(),
                    (i = null !== t.memoizedState),
                    null !== e ? (null !== e.memoizedState) !== i && (t.flags |= 8192) : i && (t.flags |= 8192),
                    i
                        ? !!(536870912 & n) && !(128 & t.flags) && (pl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                        : pl(t),
                    null !== (n = t.updateQueue) && dl(t, n.retryQueue),
                    (n = null),
                    null !== e &&
                        null !== e.memoizedState &&
                        null !== e.memoizedState.cachePool &&
                        (n = e.memoizedState.cachePool.pool),
                    (i = null),
                    null !== t.memoizedState &&
                        null !== t.memoizedState.cachePool &&
                        (i = t.memoizedState.cachePool.pool),
                    i !== n && (t.flags |= 2048),
                    null !== e && z(Gi),
                    null
                );
            case 24:
                return (
                    (n = null),
                    null !== e && (n = e.memoizedState.cache),
                    t.memoizedState.cache !== n && (t.flags |= 2048),
                    Ti(Di),
                    pl(t),
                    null
                );
            case 25:
            case 30:
                return null;
        }
        throw Error(r(156, t.tag));
    }
    function yl(e, t) {
        switch ((ui(t), t.tag)) {
            case 1:
                return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 3:
                return (Ti(Di), q(), 65536 & (e = t.flags) && !(128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null);
            case 26:
            case 27:
            case 5:
                return (G(t), null);
            case 31:
                if (null !== t.memoizedState) {
                    if ((Da(t), null === t.alternate)) throw Error(r(340));
                    wi();
                }
                return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 13:
                if ((Da(t), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                    if (null === t.alternate) throw Error(r(340));
                    wi();
                }
                return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 19:
                return (z(Ia), null);
            case 4:
                return (q(), null);
            case 10:
                return (Ti(t.type), null);
            case 22:
            case 23:
                return (
                    Da(t),
                    Ba(),
                    null !== e && z(Gi),
                    65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
                );
            case 24:
                return (Ti(Di), null);
            default:
                return null;
        }
    }
    function gl(e, t) {
        switch ((ui(t), t.tag)) {
            case 3:
                (Ti(Di), q());
                break;
            case 26:
            case 27:
            case 5:
                G(t);
                break;
            case 4:
                q();
                break;
            case 31:
                null !== t.memoizedState && Da(t);
                break;
            case 13:
                Da(t);
                break;
            case 19:
                z(Ia);
                break;
            case 10:
                Ti(t.type);
                break;
            case 22:
            case 23:
                (Da(t), Ba(), null !== e && z(Gi));
                break;
            case 24:
                Ti(Di);
        }
    }
    function ml(e, t) {
        try {
            var n = t.updateQueue,
                r = null !== n ? n.lastEffect : null;
            if (null !== r) {
                var i = r.next;
                n = i;
                do {
                    if ((n.tag & e) === e) {
                        r = void 0;
                        var a = n.create,
                            o = n.inst;
                        ((r = a()), (o.destroy = r));
                    }
                    n = n.next;
                } while (n !== i);
            }
        } catch (s) {
            Ec(t, t.return, s);
        }
    }
    function bl(e, t, n) {
        try {
            var r = t.updateQueue,
                i = null !== r ? r.lastEffect : null;
            if (null !== i) {
                var a = i.next;
                r = a;
                do {
                    if ((r.tag & e) === e) {
                        var o = r.inst,
                            s = o.destroy;
                        if (void 0 !== s) {
                            ((o.destroy = void 0), (i = t));
                            var l = n,
                                u = s;
                            try {
                                u();
                            } catch (c) {
                                Ec(i, l, c);
                            }
                        }
                    }
                    r = r.next;
                } while (r !== a);
            }
        } catch (c) {
            Ec(t, t.return, c);
        }
    }
    function _l(e) {
        var t = e.updateQueue;
        if (null !== t) {
            var n = e.stateNode;
            try {
                Ta(t, n);
            } catch (r) {
                Ec(e, e.return, r);
            }
        }
    }
    function wl(e, t, n) {
        ((n.props = Es(e.type, e.memoizedProps)), (n.state = e.memoizedState));
        try {
            n.componentWillUnmount();
        } catch (r) {
            Ec(e, t, r);
        }
    }
    function Sl(e, t) {
        try {
            var n = e.ref;
            if (null !== n) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var r = e.stateNode;
                        break;
                    default:
                        r = e.stateNode;
                }
                'function' == typeof n ? (e.refCleanup = n(r)) : (n.current = r);
            }
        } catch (i) {
            Ec(e, t, i);
        }
    }
    function kl(e, t) {
        var n = e.ref,
            r = e.refCleanup;
        if (null !== n)
            if ('function' == typeof r)
                try {
                    r();
                } catch (i) {
                    Ec(e, t, i);
                } finally {
                    ((e.refCleanup = null), null != (e = e.alternate) && (e.refCleanup = null));
                }
            else if ('function' == typeof n)
                try {
                    n(null);
                } catch (a) {
                    Ec(e, t, a);
                }
            else n.current = null;
    }
    function xl(e) {
        var t = e.type,
            n = e.memoizedProps,
            r = e.stateNode;
        try {
            e: switch (t) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                    n.autoFocus && r.focus();
                    break e;
                case 'img':
                    n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
            }
        } catch (i) {
            Ec(e, e.return, i);
        }
    }
    function El(e, t, n) {
        try {
            var i = e.stateNode;
            (!(function (e, t, n, i) {
                switch (t) {
                    case 'div':
                    case 'span':
                    case 'svg':
                    case 'path':
                    case 'a':
                    case 'g':
                    case 'p':
                    case 'li':
                        break;
                    case 'input':
                        var a = null,
                            o = null,
                            s = null,
                            l = null,
                            u = null,
                            c = null,
                            f = null;
                        for (p in n) {
                            var d = n[p];
                            if (n.hasOwnProperty(p) && null != d)
                                switch (p) {
                                    case 'checked':
                                    case 'value':
                                        break;
                                    case 'defaultValue':
                                        u = d;
                                    default:
                                        i.hasOwnProperty(p) || hf(e, t, p, null, i, d);
                                }
                        }
                        for (var h in i) {
                            var p = i[h];
                            if (((d = n[h]), i.hasOwnProperty(h) && (null != p || null != d)))
                                switch (h) {
                                    case 'type':
                                        o = p;
                                        break;
                                    case 'name':
                                        a = p;
                                        break;
                                    case 'checked':
                                        c = p;
                                        break;
                                    case 'defaultChecked':
                                        f = p;
                                        break;
                                    case 'value':
                                        s = p;
                                        break;
                                    case 'defaultValue':
                                        l = p;
                                        break;
                                    case 'children':
                                    case 'dangerouslySetInnerHTML':
                                        if (null != p) throw Error(r(137, t));
                                        break;
                                    default:
                                        p !== d && hf(e, t, h, p, i, d);
                                }
                        }
                        return void _t(e, s, l, u, c, f, o, a);
                    case 'select':
                        for (o in ((p = s = l = h = null), n))
                            if (((u = n[o]), n.hasOwnProperty(o) && null != u))
                                switch (o) {
                                    case 'value':
                                        break;
                                    case 'multiple':
                                        p = u;
                                    default:
                                        i.hasOwnProperty(o) || hf(e, t, o, null, i, u);
                                }
                        for (a in i)
                            if (((o = i[a]), (u = n[a]), i.hasOwnProperty(a) && (null != o || null != u)))
                                switch (a) {
                                    case 'value':
                                        h = o;
                                        break;
                                    case 'defaultValue':
                                        l = o;
                                        break;
                                    case 'multiple':
                                        s = o;
                                    default:
                                        o !== u && hf(e, t, a, o, i, u);
                                }
                        return (
                            (t = l),
                            (n = s),
                            (i = p),
                            void (null != h
                                ? kt(e, !!n, h, !1)
                                : !!i != !!n && (null != t ? kt(e, !!n, t, !0) : kt(e, !!n, n ? [] : '', !1)))
                        );
                    case 'textarea':
                        for (l in ((p = h = null), n))
                            if (((a = n[l]), n.hasOwnProperty(l) && null != a && !i.hasOwnProperty(l)))
                                switch (l) {
                                    case 'value':
                                    case 'children':
                                        break;
                                    default:
                                        hf(e, t, l, null, i, a);
                                }
                        for (s in i)
                            if (((a = i[s]), (o = n[s]), i.hasOwnProperty(s) && (null != a || null != o)))
                                switch (s) {
                                    case 'value':
                                        h = a;
                                        break;
                                    case 'defaultValue':
                                        p = a;
                                        break;
                                    case 'children':
                                        break;
                                    case 'dangerouslySetInnerHTML':
                                        if (null != a) throw Error(r(91));
                                        break;
                                    default:
                                        a !== o && hf(e, t, s, a, i, o);
                                }
                        return void xt(e, h, p);
                    case 'option':
                        for (var v in n)
                            if (((h = n[v]), n.hasOwnProperty(v) && null != h && !i.hasOwnProperty(v)))
                                if ('selected' === v) e.selected = !1;
                                else hf(e, t, v, null, i, h);
                        for (u in i)
                            if (((h = i[u]), (p = n[u]), i.hasOwnProperty(u) && h !== p && (null != h || null != p)))
                                if ('selected' === u) e.selected = h && 'function' != typeof h && 'symbol' != typeof h;
                                else hf(e, t, u, h, i, p);
                        return;
                    case 'img':
                    case 'link':
                    case 'area':
                    case 'base':
                    case 'br':
                    case 'col':
                    case 'embed':
                    case 'hr':
                    case 'keygen':
                    case 'meta':
                    case 'param':
                    case 'source':
                    case 'track':
                    case 'wbr':
                    case 'menuitem':
                        for (var y in n)
                            ((h = n[y]),
                                n.hasOwnProperty(y) && null != h && !i.hasOwnProperty(y) && hf(e, t, y, null, i, h));
                        for (c in i)
                            if (((h = i[c]), (p = n[c]), i.hasOwnProperty(c) && h !== p && (null != h || null != p)))
                                switch (c) {
                                    case 'children':
                                    case 'dangerouslySetInnerHTML':
                                        if (null != h) throw Error(r(137, t));
                                        break;
                                    default:
                                        hf(e, t, c, h, i, p);
                                }
                        return;
                    default:
                        if (At(t)) {
                            for (var g in n)
                                ((h = n[g]),
                                    n.hasOwnProperty(g) &&
                                        void 0 !== h &&
                                        !i.hasOwnProperty(g) &&
                                        pf(e, t, g, void 0, i, h));
                            for (f in i)
                                ((h = i[f]),
                                    (p = n[f]),
                                    !i.hasOwnProperty(f) ||
                                        h === p ||
                                        (void 0 === h && void 0 === p) ||
                                        pf(e, t, f, h, i, p));
                            return;
                        }
                }
                for (var m in n)
                    ((h = n[m]), n.hasOwnProperty(m) && null != h && !i.hasOwnProperty(m) && hf(e, t, m, null, i, h));
                for (d in i)
                    ((h = i[d]),
                        (p = n[d]),
                        !i.hasOwnProperty(d) || h === p || (null == h && null == p) || hf(e, t, d, h, i, p));
            })(i, e.type, n, t),
                (i[$e] = t));
        } catch (a) {
            Ec(e, e.return, a);
        }
    }
    function Ol(e) {
        return 5 === e.tag || 3 === e.tag || 26 === e.tag || (27 === e.tag && Cf(e.type)) || 4 === e.tag;
    }
    function Pl(e) {
        e: for (;;) {
            for (; null === e.sibling; ) {
                if (null === e.return || Ol(e.return)) return null;
                e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
                if (27 === e.tag && Cf(e.type)) continue e;
                if (2 & e.flags) continue e;
                if (null === e.child || 4 === e.tag) continue e;
                ((e.child.return = e), (e = e.child));
            }
            if (!(2 & e.flags)) return e.stateNode;
        }
    }
    function Tl(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r)
            ((e = e.stateNode),
                t
                    ? (9 === n.nodeType ? n.body : 'HTML' === n.nodeName ? n.ownerDocument.body : n).insertBefore(e, t)
                    : ((t = 9 === n.nodeType ? n.body : 'HTML' === n.nodeName ? n.ownerDocument.body : n).appendChild(
                          e,
                      ),
                      null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = jt)));
        else if (4 !== r && (27 === r && Cf(e.type) && ((n = e.stateNode), (t = null)), null !== (e = e.child)))
            for (Tl(e, t, n), e = e.sibling; null !== e; ) (Tl(e, t, n), (e = e.sibling));
    }
    function Cl(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
        else if (4 !== r && (27 === r && Cf(e.type) && (n = e.stateNode), null !== (e = e.child)))
            for (Cl(e, t, n), e = e.sibling; null !== e; ) (Cl(e, t, n), (e = e.sibling));
    }
    function Al(e) {
        var t = e.stateNode,
            n = e.memoizedProps;
        try {
            for (var r = e.type, i = t.attributes; i.length; ) t.removeAttributeNode(i[0]);
            (vf(t, r, n), (t[Fe] = e), (t[$e] = n));
        } catch (a) {
            Ec(e, e.return, a);
        }
    }
    var Nl = !1,
        Ul = !1,
        Bl = !1,
        jl = 'function' == typeof WeakSet ? WeakSet : Set,
        Wl = null;
    function Ll(e, t, n) {
        var r = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                (Xl(e, n), 4 & r && ml(5, n));
                break;
            case 1:
                if ((Xl(e, n), 4 & r))
                    if (((e = n.stateNode), null === t))
                        try {
                            e.componentDidMount();
                        } catch (o) {
                            Ec(n, n.return, o);
                        }
                    else {
                        var i = Es(n.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (s) {
                            Ec(n, n.return, s);
                        }
                    }
                (64 & r && _l(n), 512 & r && Sl(n, n.return));
                break;
            case 3:
                if ((Xl(e, n), 64 & r && null !== (e = n.updateQueue))) {
                    if (((t = null), null !== n.child))
                        switch (n.child.tag) {
                            case 27:
                            case 5:
                            case 1:
                                t = n.child.stateNode;
                        }
                    try {
                        Ta(e, t);
                    } catch (o) {
                        Ec(n, n.return, o);
                    }
                }
                break;
            case 27:
                null === t && 4 & r && Al(n);
            case 26:
            case 5:
                (Xl(e, n), null === t && 4 & r && xl(n), 512 & r && Sl(n, n.return));
                break;
            case 12:
                Xl(e, n);
                break;
            case 31:
                (Xl(e, n), 4 & r && Vl(e, n));
                break;
            case 13:
                (Xl(e, n),
                    4 & r && Fl(e, n),
                    64 & r &&
                        null !== (e = n.memoizedState) &&
                        null !== (e = e.dehydrated) &&
                        (function (e, t) {
                            var n = e.ownerDocument;
                            if ('$~' === e.data) e._reactRetry = t;
                            else if ('$?' !== e.data || 'loading' !== n.readyState) t();
                            else {
                                var r = function () {
                                    (t(), n.removeEventListener('DOMContentLoaded', r));
                                };
                                (n.addEventListener('DOMContentLoaded', r), (e._reactRetry = r));
                            }
                        })(e, (n = Cc.bind(null, n))));
                break;
            case 22:
                if (!(r = null !== n.memoizedState || Nl)) {
                    ((t = (null !== t && null !== t.memoizedState) || Ul), (i = Nl));
                    var a = Ul;
                    ((Nl = r), (Ul = t) && !a ? Jl(e, n, !!(8772 & n.subtreeFlags)) : Xl(e, n), (Nl = i), (Ul = a));
                }
                break;
            case 30:
                break;
            default:
                Xl(e, n);
        }
    }
    function zl(e) {
        var t = e.alternate;
        (null !== t && ((e.alternate = null), zl(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (t = e.stateNode) && Ye(t),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null));
    }
    var Rl = null,
        Ml = !1;
    function Dl(e, t, n) {
        for (n = n.child; null !== n; ) (Il(e, t, n), (n = n.sibling));
    }
    function Il(e, t, n) {
        if (_e && 'function' == typeof _e.onCommitFiberUnmount)
            try {
                _e.onCommitFiberUnmount(be, n);
            } catch (a) {}
        switch (n.tag) {
            case 26:
                (Ul || kl(n, t),
                    Dl(e, t, n),
                    n.memoizedState
                        ? n.memoizedState.count--
                        : n.stateNode && (n = n.stateNode).parentNode.removeChild(n));
                break;
            case 27:
                Ul || kl(n, t);
                var r = Rl,
                    i = Ml;
                (Cf(n.type) && ((Rl = n.stateNode), (Ml = !1)), Dl(e, t, n), If(n.stateNode), (Rl = r), (Ml = i));
                break;
            case 5:
                Ul || kl(n, t);
            case 6:
                if (((r = Rl), (i = Ml), (Rl = null), Dl(e, t, n), (Ml = i), null !== (Rl = r)))
                    if (Ml)
                        try {
                            (9 === Rl.nodeType
                                ? Rl.body
                                : 'HTML' === Rl.nodeName
                                  ? Rl.ownerDocument.body
                                  : Rl
                            ).removeChild(n.stateNode);
                        } catch (o) {
                            Ec(n, t, o);
                        }
                    else
                        try {
                            Rl.removeChild(n.stateNode);
                        } catch (o) {
                            Ec(n, t, o);
                        }
                break;
            case 18:
                null !== Rl &&
                    (Ml
                        ? (Af(
                              9 === (e = Rl).nodeType ? e.body : 'HTML' === e.nodeName ? e.ownerDocument.body : e,
                              n.stateNode,
                          ),
                          qd(e))
                        : Af(Rl, n.stateNode));
                break;
            case 4:
                ((r = Rl), (i = Ml), (Rl = n.stateNode.containerInfo), (Ml = !0), Dl(e, t, n), (Rl = r), (Ml = i));
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                (bl(2, n, t), Ul || bl(4, n, t), Dl(e, t, n));
                break;
            case 1:
                (Ul || (kl(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount && wl(n, t, r)),
                    Dl(e, t, n));
                break;
            case 21:
                Dl(e, t, n);
                break;
            case 22:
                ((Ul = (r = Ul) || null !== n.memoizedState), Dl(e, t, n), (Ul = r));
                break;
            default:
                Dl(e, t, n);
        }
    }
    function Vl(e, t) {
        if (null === t.memoizedState && null !== (e = t.alternate) && null !== (e = e.memoizedState)) {
            e = e.dehydrated;
            try {
                qd(e);
            } catch (n) {
                Ec(t, t.return, n);
            }
        }
    }
    function Fl(e, t) {
        if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState) &&
            null !== (e = e.dehydrated)
        )
            try {
                qd(e);
            } catch (n) {
                Ec(t, t.return, n);
            }
    }
    function $l(e, t) {
        var n = (function (e) {
            switch (e.tag) {
                case 31:
                case 13:
                case 19:
                    var t = e.stateNode;
                    return (null === t && (t = e.stateNode = new jl()), t);
                case 22:
                    return (null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new jl()), t);
                default:
                    throw Error(r(435, e.tag));
            }
        })(e);
        t.forEach(function (t) {
            if (!n.has(t)) {
                n.add(t);
                var r = Ac.bind(null, e, t);
                t.then(r, r);
            }
        });
    }
    function Ql(e, t) {
        var n = t.deletions;
        if (null !== n)
            for (var i = 0; i < n.length; i++) {
                var a = n[i],
                    o = e,
                    s = t,
                    l = s;
                e: for (; null !== l; ) {
                    switch (l.tag) {
                        case 27:
                            if (Cf(l.type)) {
                                ((Rl = l.stateNode), (Ml = !1));
                                break e;
                            }
                            break;
                        case 5:
                            ((Rl = l.stateNode), (Ml = !1));
                            break e;
                        case 3:
                        case 4:
                            ((Rl = l.stateNode.containerInfo), (Ml = !0));
                            break e;
                    }
                    l = l.return;
                }
                if (null === Rl) throw Error(r(160));
                (Il(o, s, a),
                    (Rl = null),
                    (Ml = !1),
                    null !== (o = a.alternate) && (o.return = null),
                    (a.return = null));
            }
        if (13886 & t.subtreeFlags) for (t = t.child; null !== t; ) (ql(t, e), (t = t.sibling));
    }
    var Hl = null;
    function ql(e, t) {
        var n = e.alternate,
            i = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                (Ql(t, e), Kl(e), 4 & i && (bl(3, e, e.return), ml(3, e), bl(5, e, e.return)));
                break;
            case 1:
                (Ql(t, e),
                    Kl(e),
                    512 & i && (Ul || null === n || kl(n, n.return)),
                    64 & i &&
                        Nl &&
                        null !== (e = e.updateQueue) &&
                        null !== (i = e.callbacks) &&
                        ((n = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = null === n ? i : n.concat(i))));
                break;
            case 26:
                var a = Hl;
                if ((Ql(t, e), Kl(e), 512 & i && (Ul || null === n || kl(n, n.return)), 4 & i)) {
                    var o = null !== n ? n.memoizedState : null;
                    if (((i = e.memoizedState), null === n))
                        if (null === i)
                            if (null === e.stateNode) {
                                e: {
                                    ((i = e.type), (n = e.memoizedProps), (a = a.ownerDocument || a));
                                    t: switch (i) {
                                        case 'title':
                                            ((!(o = a.getElementsByTagName('title')[0]) ||
                                                o[Xe] ||
                                                o[Fe] ||
                                                'http://www.w3.org/2000/svg' === o.namespaceURI ||
                                                o.hasAttribute('itemprop')) &&
                                                ((o = a.createElement(i)),
                                                a.head.insertBefore(o, a.querySelector('head > title'))),
                                                vf(o, i, n),
                                                (o[Fe] = e),
                                                nt(o),
                                                (i = o));
                                            break e;
                                        case 'link':
                                            var s = ad('link', 'href', a).get(i + (n.href || ''));
                                            if (s)
                                                for (var l = 0; l < s.length; l++)
                                                    if (
                                                        (o = s[l]).getAttribute('href') ===
                                                            (null == n.href || '' === n.href ? null : n.href) &&
                                                        o.getAttribute('rel') === (null == n.rel ? null : n.rel) &&
                                                        o.getAttribute('title') ===
                                                            (null == n.title ? null : n.title) &&
                                                        o.getAttribute('crossorigin') ===
                                                            (null == n.crossOrigin ? null : n.crossOrigin)
                                                    ) {
                                                        s.splice(l, 1);
                                                        break t;
                                                    }
                                            (vf((o = a.createElement(i)), i, n), a.head.appendChild(o));
                                            break;
                                        case 'meta':
                                            if ((s = ad('meta', 'content', a).get(i + (n.content || ''))))
                                                for (l = 0; l < s.length; l++)
                                                    if (
                                                        (o = s[l]).getAttribute('content') ===
                                                            (null == n.content ? null : '' + n.content) &&
                                                        o.getAttribute('name') === (null == n.name ? null : n.name) &&
                                                        o.getAttribute('property') ===
                                                            (null == n.property ? null : n.property) &&
                                                        o.getAttribute('http-equiv') ===
                                                            (null == n.httpEquiv ? null : n.httpEquiv) &&
                                                        o.getAttribute('charset') ===
                                                            (null == n.charSet ? null : n.charSet)
                                                    ) {
                                                        s.splice(l, 1);
                                                        break t;
                                                    }
                                            (vf((o = a.createElement(i)), i, n), a.head.appendChild(o));
                                            break;
                                        default:
                                            throw Error(r(468, i));
                                    }
                                    ((o[Fe] = e), nt(o), (i = o));
                                }
                                e.stateNode = i;
                            } else od(a, e.type, e.stateNode);
                        else e.stateNode = ed(a, i, e.memoizedProps);
                    else
                        o !== i
                            ? (null === o
                                  ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n)
                                  : o.count--,
                              null === i ? od(a, e.type, e.stateNode) : ed(a, i, e.memoizedProps))
                            : null === i && null !== e.stateNode && El(e, e.memoizedProps, n.memoizedProps);
                }
                break;
            case 27:
                (Ql(t, e),
                    Kl(e),
                    512 & i && (Ul || null === n || kl(n, n.return)),
                    null !== n && 4 & i && El(e, e.memoizedProps, n.memoizedProps));
                break;
            case 5:
                if ((Ql(t, e), Kl(e), 512 & i && (Ul || null === n || kl(n, n.return)), 32 & e.flags)) {
                    a = e.stateNode;
                    try {
                        Ot(a, '');
                    } catch (v) {
                        Ec(e, e.return, v);
                    }
                }
                (4 & i && null != e.stateNode && El(e, (a = e.memoizedProps), null !== n ? n.memoizedProps : a),
                    1024 & i && (Bl = !0));
                break;
            case 6:
                if ((Ql(t, e), Kl(e), 4 & i)) {
                    if (null === e.stateNode) throw Error(r(162));
                    ((i = e.memoizedProps), (n = e.stateNode));
                    try {
                        n.nodeValue = i;
                    } catch (v) {
                        Ec(e, e.return, v);
                    }
                }
                break;
            case 3:
                if (
                    ((id = null),
                    (a = Hl),
                    (Hl = $f(t.containerInfo)),
                    Ql(t, e),
                    (Hl = a),
                    Kl(e),
                    4 & i && null !== n && n.memoizedState.isDehydrated)
                )
                    try {
                        qd(t.containerInfo);
                    } catch (v) {
                        Ec(e, e.return, v);
                    }
                Bl && ((Bl = !1), Gl(e));
                break;
            case 4:
                ((i = Hl), (Hl = $f(e.stateNode.containerInfo)), Ql(t, e), Kl(e), (Hl = i));
                break;
            case 12:
            default:
                (Ql(t, e), Kl(e));
                break;
            case 31:
            case 19:
                (Ql(t, e), Kl(e), 4 & i && null !== (i = e.updateQueue) && ((e.updateQueue = null), $l(e, i)));
                break;
            case 13:
                (Ql(t, e),
                    Kl(e),
                    8192 & e.child.flags &&
                        (null !== e.memoizedState) != (null !== n && null !== n.memoizedState) &&
                        (ju = ce()),
                    4 & i && null !== (i = e.updateQueue) && ((e.updateQueue = null), $l(e, i)));
                break;
            case 22:
                a = null !== e.memoizedState;
                var u = null !== n && null !== n.memoizedState,
                    c = Nl,
                    f = Ul;
                if (((Nl = c || a), (Ul = f || u), Ql(t, e), (Ul = f), (Nl = c), Kl(e), 8192 & i))
                    e: for (
                        t = e.stateNode,
                            t._visibility = a ? -2 & t._visibility : 1 | t._visibility,
                            a && (null === n || u || Nl || Ul || Yl(e)),
                            n = null,
                            t = e;
                        ;
                    ) {
                        if (5 === t.tag || 26 === t.tag) {
                            if (null === n) {
                                u = n = t;
                                try {
                                    if (((o = u.stateNode), a))
                                        'function' == typeof (s = o.style).setProperty
                                            ? s.setProperty('display', 'none', 'important')
                                            : (s.display = 'none');
                                    else {
                                        l = u.stateNode;
                                        var d = u.memoizedProps.style,
                                            h = null != d && d.hasOwnProperty('display') ? d.display : null;
                                        l.style.display = null == h || 'boolean' == typeof h ? '' : ('' + h).trim();
                                    }
                                } catch (v) {
                                    Ec(u, u.return, v);
                                }
                            }
                        } else if (6 === t.tag) {
                            if (null === n) {
                                u = t;
                                try {
                                    u.stateNode.nodeValue = a ? '' : u.memoizedProps;
                                } catch (v) {
                                    Ec(u, u.return, v);
                                }
                            }
                        } else if (18 === t.tag) {
                            if (null === n) {
                                u = t;
                                try {
                                    var p = u.stateNode;
                                    a ? Nf(p, !0) : Nf(u.stateNode, !1);
                                } catch (v) {
                                    Ec(u, u.return, v);
                                }
                            }
                        } else if (
                            ((22 !== t.tag && 23 !== t.tag) || null === t.memoizedState || t === e) &&
                            null !== t.child
                        ) {
                            ((t.child.return = t), (t = t.child));
                            continue;
                        }
                        if (t === e) break e;
                        for (; null === t.sibling; ) {
                            if (null === t.return || t.return === e) break e;
                            (n === t && (n = null), (t = t.return));
                        }
                        (n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling));
                    }
                4 & i &&
                    null !== (i = e.updateQueue) &&
                    null !== (n = i.retryQueue) &&
                    ((i.retryQueue = null), $l(e, n));
            case 30:
            case 21:
        }
    }
    function Kl(e) {
        var t = e.flags;
        if (2 & t) {
            try {
                for (var n, i = e.return; null !== i; ) {
                    if (Ol(i)) {
                        n = i;
                        break;
                    }
                    i = i.return;
                }
                if (null == n) throw Error(r(160));
                switch (n.tag) {
                    case 27:
                        var a = n.stateNode;
                        Cl(e, Pl(e), a);
                        break;
                    case 5:
                        var o = n.stateNode;
                        (32 & n.flags && (Ot(o, ''), (n.flags &= -33)), Cl(e, Pl(e), o));
                        break;
                    case 3:
                    case 4:
                        var s = n.stateNode.containerInfo;
                        Tl(e, Pl(e), s);
                        break;
                    default:
                        throw Error(r(161));
                }
            } catch (l) {
                Ec(e, e.return, l);
            }
            e.flags &= -3;
        }
        4096 & t && (e.flags &= -4097);
    }
    function Gl(e) {
        if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e; ) {
                var t = e;
                (Gl(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), (e = e.sibling));
            }
    }
    function Xl(e, t) {
        if (8772 & t.subtreeFlags) for (t = t.child; null !== t; ) (Ll(e, t.alternate, t), (t = t.sibling));
    }
    function Yl(e) {
        for (e = e.child; null !== e; ) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    (bl(4, t, t.return), Yl(t));
                    break;
                case 1:
                    kl(t, t.return);
                    var n = t.stateNode;
                    ('function' == typeof n.componentWillUnmount && wl(t, t.return, n), Yl(t));
                    break;
                case 27:
                    If(t.stateNode);
                case 26:
                case 5:
                    (kl(t, t.return), Yl(t));
                    break;
                case 22:
                    null === t.memoizedState && Yl(t);
                    break;
                default:
                    Yl(t);
            }
            e = e.sibling;
        }
    }
    function Jl(e, t, n) {
        for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t; ) {
            var r = t.alternate,
                i = e,
                a = t,
                o = a.flags;
            switch (a.tag) {
                case 0:
                case 11:
                case 15:
                    (Jl(i, a, n), ml(4, a));
                    break;
                case 1:
                    if ((Jl(i, a, n), 'function' == typeof (i = (r = a).stateNode).componentDidMount))
                        try {
                            i.componentDidMount();
                        } catch (u) {
                            Ec(r, r.return, u);
                        }
                    if (null !== (i = (r = a).updateQueue)) {
                        var s = r.stateNode;
                        try {
                            var l = i.shared.hiddenCallbacks;
                            if (null !== l) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) Pa(l[i], s);
                        } catch (u) {
                            Ec(r, r.return, u);
                        }
                    }
                    (n && 64 & o && _l(a), Sl(a, a.return));
                    break;
                case 27:
                    Al(a);
                case 26:
                case 5:
                    (Jl(i, a, n), n && null === r && 4 & o && xl(a), Sl(a, a.return));
                    break;
                case 12:
                    Jl(i, a, n);
                    break;
                case 31:
                    (Jl(i, a, n), n && 4 & o && Vl(i, a));
                    break;
                case 13:
                    (Jl(i, a, n), n && 4 & o && Fl(i, a));
                    break;
                case 22:
                    (null === a.memoizedState && Jl(i, a, n), Sl(a, a.return));
                    break;
                case 30:
                    break;
                default:
                    Jl(i, a, n);
            }
            t = t.sibling;
        }
    }
    function Zl(e, t) {
        var n = null;
        (null !== e &&
            null !== e.memoizedState &&
            null !== e.memoizedState.cachePool &&
            (n = e.memoizedState.cachePool.pool),
            (e = null),
            null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool),
            e !== n && (null != e && e.refCount++, null != n && Vi(n)));
    }
    function eu(e, t) {
        ((e = null),
            null !== t.alternate && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Vi(e)));
    }
    function tu(e, t, n, r) {
        if (10256 & t.subtreeFlags) for (t = t.child; null !== t; ) (nu(e, t, n, r), (t = t.sibling));
    }
    function nu(e, t, n, r) {
        var i = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                (tu(e, t, n, r), 2048 & i && ml(9, t));
                break;
            case 1:
            case 31:
            case 13:
            default:
                tu(e, t, n, r);
                break;
            case 3:
                (tu(e, t, n, r),
                    2048 & i &&
                        ((e = null),
                        null !== t.alternate && (e = t.alternate.memoizedState.cache),
                        (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Vi(e))));
                break;
            case 12:
                if (2048 & i) {
                    (tu(e, t, n, r), (e = t.stateNode));
                    try {
                        var a = t.memoizedProps,
                            o = a.id,
                            s = a.onPostCommit;
                        'function' == typeof s &&
                            s(o, null === t.alternate ? 'mount' : 'update', e.passiveEffectDuration, -0);
                    } catch (l) {
                        Ec(t, t.return, l);
                    }
                } else tu(e, t, n, r);
                break;
            case 23:
                break;
            case 22:
                ((a = t.stateNode),
                    (o = t.alternate),
                    null !== t.memoizedState
                        ? 2 & a._visibility
                            ? tu(e, t, n, r)
                            : iu(e, t)
                        : 2 & a._visibility
                          ? tu(e, t, n, r)
                          : ((a._visibility |= 2), ru(e, t, n, r, !!(10256 & t.subtreeFlags) || !1)),
                    2048 & i && Zl(o, t));
                break;
            case 24:
                (tu(e, t, n, r), 2048 & i && eu(t.alternate, t));
        }
    }
    function ru(e, t, n, r, i) {
        for (i = i && (!!(10256 & t.subtreeFlags) || !1), t = t.child; null !== t; ) {
            var a = e,
                o = t,
                s = n,
                l = r,
                u = o.flags;
            switch (o.tag) {
                case 0:
                case 11:
                case 15:
                    (ru(a, o, s, l, i), ml(8, o));
                    break;
                case 23:
                    break;
                case 22:
                    var c = o.stateNode;
                    (null !== o.memoizedState
                        ? 2 & c._visibility
                            ? ru(a, o, s, l, i)
                            : iu(a, o)
                        : ((c._visibility |= 2), ru(a, o, s, l, i)),
                        i && 2048 & u && Zl(o.alternate, o));
                    break;
                case 24:
                    (ru(a, o, s, l, i), i && 2048 & u && eu(o.alternate, o));
                    break;
                default:
                    ru(a, o, s, l, i);
            }
            t = t.sibling;
        }
    }
    function iu(e, t) {
        if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) {
                var n = e,
                    r = t,
                    i = r.flags;
                switch (r.tag) {
                    case 22:
                        (iu(n, r), 2048 & i && Zl(r.alternate, r));
                        break;
                    case 24:
                        (iu(n, r), 2048 & i && eu(r.alternate, r));
                        break;
                    default:
                        iu(n, r);
                }
                t = t.sibling;
            }
    }
    var au = 8192;
    function ou(e, t, n) {
        if (e.subtreeFlags & au) for (e = e.child; null !== e; ) (su(e, t, n), (e = e.sibling));
    }
    function su(e, t, n) {
        switch (e.tag) {
            case 26:
                (ou(e, t, n),
                    e.flags & au &&
                        null !== e.memoizedState &&
                        (function (e, t, n, r) {
                            if (
                                !(
                                    'stylesheet' !== n.type ||
                                    ('string' == typeof r.media && !1 === matchMedia(r.media).matches) ||
                                    4 & n.state.loading
                                )
                            ) {
                                if (null === n.instance) {
                                    var i = Gf(r.href),
                                        a = t.querySelector(Xf(i));
                                    if (a)
                                        return (
                                            null !== (t = a._p) &&
                                                'object' == typeof t &&
                                                'function' == typeof t.then &&
                                                (e.count++, (e = ud.bind(e)), t.then(e, e)),
                                            (n.state.loading |= 4),
                                            (n.instance = a),
                                            void nt(a)
                                        );
                                    ((a = t.ownerDocument || t),
                                        (r = Yf(r)),
                                        (i = Vf.get(i)) && nd(r, i),
                                        nt((a = a.createElement('link'))));
                                    var o = a;
                                    ((o._p = new Promise(function (e, t) {
                                        ((o.onload = e), (o.onerror = t));
                                    })),
                                        vf(a, 'link', r),
                                        (n.instance = a));
                                }
                                (null === e.stylesheets && (e.stylesheets = new Map()),
                                    e.stylesheets.set(n, t),
                                    (t = n.state.preload) &&
                                        !(3 & n.state.loading) &&
                                        (e.count++,
                                        (n = ud.bind(e)),
                                        t.addEventListener('load', n),
                                        t.addEventListener('error', n)));
                            }
                        })(n, Hl, e.memoizedState, e.memoizedProps));
                break;
            case 5:
            default:
                ou(e, t, n);
                break;
            case 3:
            case 4:
                var r = Hl;
                ((Hl = $f(e.stateNode.containerInfo)), ou(e, t, n), (Hl = r));
                break;
            case 22:
                null === e.memoizedState &&
                    (null !== (r = e.alternate) && null !== r.memoizedState
                        ? ((r = au), (au = 16777216), ou(e, t, n), (au = r))
                        : ou(e, t, n));
        }
    }
    function lu(e) {
        var t = e.alternate;
        if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
                ((t = e.sibling), (e.sibling = null), (e = t));
            } while (null !== e);
        }
    }
    function uu(e) {
        var t = e.deletions;
        if (16 & e.flags) {
            if (null !== t)
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((Wl = r), du(r, e));
                }
            lu(e);
        }
        if (10256 & e.subtreeFlags) for (e = e.child; null !== e; ) (cu(e), (e = e.sibling));
    }
    function cu(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                (uu(e), 2048 & e.flags && bl(9, e, e.return));
                break;
            case 3:
            case 12:
            default:
                uu(e);
                break;
            case 22:
                var t = e.stateNode;
                null !== e.memoizedState && 2 & t._visibility && (null === e.return || 13 !== e.return.tag)
                    ? ((t._visibility &= -3), fu(e))
                    : uu(e);
        }
    }
    function fu(e) {
        var t = e.deletions;
        if (16 & e.flags) {
            if (null !== t)
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((Wl = r), du(r, e));
                }
            lu(e);
        }
        for (e = e.child; null !== e; ) {
            switch ((t = e).tag) {
                case 0:
                case 11:
                case 15:
                    (bl(8, t, t.return), fu(t));
                    break;
                case 22:
                    2 & (n = t.stateNode)._visibility && ((n._visibility &= -3), fu(t));
                    break;
                default:
                    fu(t);
            }
            e = e.sibling;
        }
    }
    function du(e, t) {
        for (; null !== Wl; ) {
            var n = Wl;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    bl(8, n, t);
                    break;
                case 23:
                case 22:
                    if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                        var r = n.memoizedState.cachePool.pool;
                        null != r && r.refCount++;
                    }
                    break;
                case 24:
                    Vi(n.memoizedState.cache);
            }
            if (null !== (r = n.child)) ((r.return = n), (Wl = r));
            else
                e: for (n = e; null !== Wl; ) {
                    var i = (r = Wl).sibling,
                        a = r.return;
                    if ((zl(r), r === n)) {
                        Wl = null;
                        break e;
                    }
                    if (null !== i) {
                        ((i.return = a), (Wl = i));
                        break e;
                    }
                    Wl = a;
                }
        }
    }
    var hu = {
            getCacheForType: function (e) {
                var t = ji(Di),
                    n = t.data.get(e);
                return (void 0 === n && ((n = e()), t.data.set(e, n)), n);
            },
            cacheSignal: function () {
                return ji(Di).controller.signal;
            },
        },
        pu = 'function' == typeof WeakMap ? WeakMap : Map,
        vu = 0,
        yu = null,
        gu = null,
        mu = 0,
        bu = 0,
        _u = null,
        wu = !1,
        Su = !1,
        ku = !1,
        xu = 0,
        Eu = 0,
        Ou = 0,
        Pu = 0,
        Tu = 0,
        Cu = 0,
        Au = 0,
        Nu = null,
        Uu = null,
        Bu = !1,
        ju = 0,
        Wu = 0,
        Lu = 1 / 0,
        zu = null,
        Ru = null,
        Mu = 0,
        Du = null,
        Iu = null,
        Vu = 0,
        Fu = 0,
        $u = null,
        Qu = null,
        Hu = 0,
        qu = null;
    function Ku() {
        return 2 & vu && 0 !== mu ? mu & -mu : null !== N.T ? $c() : De();
    }
    function Gu() {
        if (0 === Cu)
            if (536870912 & mu && !hi) Cu = 536870912;
            else {
                var e = Oe;
                (!(3932160 & (Oe <<= 1)) && (Oe = 262144), (Cu = e));
            }
        return (null !== (e = ja.current) && (e.flags |= 32), Cu);
    }
    function Xu(e, t, n) {
        (((e !== yu || (2 !== bu && 9 !== bu)) && null === e.cancelPendingCommit) || (rc(e, 0), ec(e, mu, Cu, !1)),
            je(e, n),
            (2 & vu && e === yu) || (e === yu && (!(2 & vu) && (Pu |= n), 4 === Eu && ec(e, mu, Cu, !1)), zc(e)));
    }
    function Yu(e, t, n) {
        if (6 & vu) throw Error(r(327));
        for (
            var i = (!n && !(127 & t) && 0 === (t & e.expiredLanes)) || Ae(e, t),
                a = i
                    ? (function (e, t) {
                          var n = vu;
                          vu |= 2;
                          var i = oc(),
                              a = sc();
                          yu !== e || mu !== t ? ((zu = null), (Lu = ce() + 500), rc(e, t)) : (Su = Ae(e, t));
                          e: for (;;)
                              try {
                                  if (0 !== bu && null !== gu) {
                                      t = gu;
                                      var o = _u;
                                      t: switch (bu) {
                                          case 1:
                                              ((bu = 0), (_u = null), pc(e, t, o, 1));
                                              break;
                                          case 2:
                                          case 9:
                                              if (ra(o)) {
                                                  ((bu = 0), (_u = null), hc(t));
                                                  break;
                                              }
                                              ((t = function () {
                                                  ((2 !== bu && 9 !== bu) || yu !== e || (bu = 7), zc(e));
                                              }),
                                                  o.then(t, t));
                                              break e;
                                          case 3:
                                              bu = 7;
                                              break e;
                                          case 4:
                                              bu = 5;
                                              break e;
                                          case 7:
                                              ra(o)
                                                  ? ((bu = 0), (_u = null), hc(t))
                                                  : ((bu = 0), (_u = null), pc(e, t, o, 7));
                                              break;
                                          case 5:
                                              var s = null;
                                              switch (gu.tag) {
                                                  case 26:
                                                      s = gu.memoizedState;
                                                  case 5:
                                                  case 27:
                                                      var l = gu;
                                                      if (s ? sd(s) : l.stateNode.complete) {
                                                          ((bu = 0), (_u = null));
                                                          var u = l.sibling;
                                                          if (null !== u) gu = u;
                                                          else {
                                                              var c = l.return;
                                                              null !== c ? ((gu = c), vc(c)) : (gu = null);
                                                          }
                                                          break t;
                                                      }
                                              }
                                              ((bu = 0), (_u = null), pc(e, t, o, 5));
                                              break;
                                          case 6:
                                              ((bu = 0), (_u = null), pc(e, t, o, 6));
                                              break;
                                          case 8:
                                              (nc(), (Eu = 6));
                                              break e;
                                          default:
                                              throw Error(r(462));
                                      }
                                  }
                                  fc();
                                  break;
                              } catch (f) {
                                  ic(e, f);
                              }
                          return (
                              (Oi = Ei = null),
                              (N.H = i),
                              (N.A = a),
                              (vu = n),
                              null !== gu ? 0 : ((yu = null), (mu = 0), Ur(), Eu)
                          );
                      })(e, t)
                    : uc(e, t, !0),
                o = i;
            ;
        ) {
            if (0 === a) {
                Su && !i && ec(e, t, 0, !1);
                break;
            }
            if (((n = e.current.alternate), !o || Zu(n))) {
                if (2 === a) {
                    if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
                    else s = 0 !== (s = -536870913 & e.pendingLanes) ? s : 536870912 & s ? 536870912 : 0;
                    if (0 !== s) {
                        t = s;
                        e: {
                            var l = e;
                            a = Nu;
                            var u = l.current.memoizedState.isDehydrated;
                            if ((u && (rc(l, s).flags |= 256), 2 !== (s = uc(l, s, !1)))) {
                                if (ku && !u) {
                                    ((l.errorRecoveryDisabledLanes |= o), (Pu |= o), (a = 4));
                                    break e;
                                }
                                ((o = Uu), (Uu = a), null !== o && (null === Uu ? (Uu = o) : Uu.push.apply(Uu, o)));
                            }
                            a = s;
                        }
                        if (((o = !1), 2 !== a)) continue;
                    }
                }
                if (1 === a) {
                    (rc(e, 0), ec(e, t, 0, !0));
                    break;
                }
                e: {
                    switch (((i = e), (o = a))) {
                        case 0:
                        case 1:
                            throw Error(r(345));
                        case 4:
                            if ((4194048 & t) !== t) break;
                        case 6:
                            ec(i, t, Cu, !wu);
                            break e;
                        case 2:
                            Uu = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(r(329));
                    }
                    if ((62914560 & t) === t && 10 < (a = ju + 300 - ce())) {
                        if ((ec(i, t, Cu, !wu), 0 !== Ce(i, 0, !0))) break e;
                        ((Vu = t),
                            (i.timeoutHandle = xf(
                                Ju.bind(null, i, n, Uu, zu, Bu, t, Cu, Pu, Au, wu, o, 'Throttled', -0, 0),
                                a,
                            )));
                    } else Ju(i, n, Uu, zu, Bu, t, Cu, Pu, Au, wu, o, null, -0, 0);
                }
                break;
            }
            ((a = uc(e, t, !1)), (o = !1));
        }
        zc(e);
    }
    function Ju(e, t, n, r, i, a, o, s, l, u, c, f, d, h) {
        if (((e.timeoutHandle = -1), 8192 & (f = t.subtreeFlags) || !(16785408 & ~f))) {
            su(
                t,
                a,
                (f = {
                    stylesheets: null,
                    count: 0,
                    imgCount: 0,
                    imgBytes: 0,
                    suspenseyImages: [],
                    waitingForImages: !0,
                    waitingForViewTransition: !1,
                    unsuspend: jt,
                }),
            );
            var p = (62914560 & a) === a ? ju - ce() : (4194048 & a) === a ? Wu - ce() : 0;
            if (
                null !==
                (p = (function (e, t) {
                    return (
                        e.stylesheets && 0 === e.count && fd(e, e.stylesheets),
                        0 < e.count || 0 < e.imgCount
                            ? function (n) {
                                  var r = setTimeout(function () {
                                      if ((e.stylesheets && fd(e, e.stylesheets), e.unsuspend)) {
                                          var t = e.unsuspend;
                                          ((e.unsuspend = null), t());
                                      }
                                  }, 6e4 + t);
                                  0 < e.imgBytes &&
                                      0 === ld &&
                                      (ld =
                                          62500 *
                                          (function () {
                                              if ('function' == typeof performance.getEntriesByType) {
                                                  for (
                                                      var e = 0,
                                                          t = 0,
                                                          n = performance.getEntriesByType('resource'),
                                                          r = 0;
                                                      r < n.length;
                                                      r++
                                                  ) {
                                                      var i = n[r],
                                                          a = i.transferSize,
                                                          o = i.initiatorType,
                                                          s = i.duration;
                                                      if (a && s && yf(o)) {
                                                          for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
                                                              var l = n[r],
                                                                  u = l.startTime;
                                                              if (u > s) break;
                                                              var c = l.transferSize,
                                                                  f = l.initiatorType;
                                                              c &&
                                                                  yf(f) &&
                                                                  (o +=
                                                                      c *
                                                                      ((l = l.responseEnd) < s
                                                                          ? 1
                                                                          : (s - u) / (l - u)));
                                                          }
                                                          if (
                                                              (--r, (t += (8 * (a + o)) / (i.duration / 1e3)), 10 < ++e)
                                                          )
                                                              break;
                                                      }
                                                  }
                                                  if (0 < e) return t / e / 1e6;
                                              }
                                              return navigator.connection &&
                                                  'number' == typeof (e = navigator.connection.downlink)
                                                  ? e
                                                  : 5;
                                          })());
                                  var i = setTimeout(
                                      function () {
                                          if (
                                              ((e.waitingForImages = !1),
                                              0 === e.count && (e.stylesheets && fd(e, e.stylesheets), e.unsuspend))
                                          ) {
                                              var t = e.unsuspend;
                                              ((e.unsuspend = null), t());
                                          }
                                      },
                                      (e.imgBytes > ld ? 50 : 800) + t,
                                  );
                                  return (
                                      (e.unsuspend = n),
                                      function () {
                                          ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                                      }
                                  );
                              }
                            : null
                    );
                })(f, p))
            )
                return (
                    (Vu = a),
                    (e.cancelPendingCommit = p(gc.bind(null, e, t, a, n, r, i, o, s, l, c, f, null, d, h))),
                    void ec(e, a, o, !u)
                );
        }
        gc(e, t, a, n, r, i, o, s, l);
    }
    function Zu(e) {
        for (var t = e; ; ) {
            var n = t.tag;
            if (
                (0 === n || 11 === n || 15 === n) &&
                16384 & t.flags &&
                null !== (n = t.updateQueue) &&
                null !== (n = n.stores)
            )
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        a = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!er(a(), i)) return !1;
                    } catch (o) {
                        return !1;
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
    }
    function ec(e, t, n, r) {
        ((t &= ~Tu),
            (t &= ~Pu),
            (e.suspendedLanes |= t),
            (e.pingedLanes &= ~t),
            r && (e.warmLanes |= t),
            (r = e.expirationTimes));
        for (var i = t; 0 < i; ) {
            var a = 31 - Se(i),
                o = 1 << a;
            ((r[a] = -1), (i &= ~o));
        }
        0 !== n && We(e, n, t);
    }
    function tc() {
        return !!(6 & vu) || (Rc(0), !1);
    }
    function nc() {
        if (null !== gu) {
            if (0 === bu) var e = gu.return;
            else ((Oi = Ei = null), lo((e = gu)), (ua = null), (ca = 0), (e = gu));
            for (; null !== e; ) (gl(e.alternate, e), (e = e.return));
            gu = null;
        }
    }
    function rc(e, t) {
        var n = e.timeoutHandle;
        (-1 !== n && ((e.timeoutHandle = -1), Ef(n)),
            null !== (n = e.cancelPendingCommit) && ((e.cancelPendingCommit = null), n()),
            (Vu = 0),
            nc(),
            (yu = e),
            (gu = n = Vr(e.current, null)),
            (mu = t),
            (bu = 0),
            (_u = null),
            (wu = !1),
            (Su = Ae(e, t)),
            (ku = !1),
            (Au = Cu = Tu = Pu = Ou = Eu = 0),
            (Uu = Nu = null),
            (Bu = !1),
            8 & t && (t |= 32 & t));
        var r = e.entangledLanes;
        if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r; ) {
                var i = 31 - Se(r),
                    a = 1 << i;
                ((t |= e[i]), (r &= ~a));
            }
        return ((xu = t), Ur(), n);
    }
    function ic(e, t) {
        (($a = null),
            (N.H = gs),
            t === Zi || t === ta
                ? ((t = sa()), (bu = 3))
                : t === ea
                  ? ((t = sa()), (bu = 4))
                  : (bu = t === js ? 8 : null !== t && 'object' == typeof t && 'function' == typeof t.then ? 6 : 1),
            (_u = t),
            null === gu && ((Eu = 1), Cs(e, Xr(t, e.current))));
    }
    function ac() {
        var e = ja.current;
        return (
            null === e ||
            ((4194048 & mu) === mu ? null === Wa : !!((62914560 & mu) === mu || 536870912 & mu) && e === Wa)
        );
    }
    function oc() {
        var e = N.H;
        return ((N.H = gs), null === e ? gs : e);
    }
    function sc() {
        var e = N.A;
        return ((N.A = hu), e);
    }
    function lc() {
        ((Eu = 4),
            wu || ((4194048 & mu) !== mu && null !== ja.current) || (Su = !0),
            (!(134217727 & Ou) && !(134217727 & Pu)) || null === yu || ec(yu, mu, Cu, !1));
    }
    function uc(e, t, n) {
        var r = vu;
        vu |= 2;
        var i = oc(),
            a = sc();
        ((yu === e && mu === t) || ((zu = null), rc(e, t)), (t = !1));
        var o = Eu;
        e: for (;;)
            try {
                if (0 !== bu && null !== gu) {
                    var s = gu,
                        l = _u;
                    switch (bu) {
                        case 8:
                            (nc(), (o = 6));
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            null === ja.current && (t = !0);
                            var u = bu;
                            if (((bu = 0), (_u = null), pc(e, s, l, u), n && Su)) {
                                o = 0;
                                break e;
                            }
                            break;
                        default:
                            ((u = bu), (bu = 0), (_u = null), pc(e, s, l, u));
                    }
                }
                (cc(), (o = Eu));
                break;
            } catch (c) {
                ic(e, c);
            }
        return (
            t && e.shellSuspendCounter++,
            (Oi = Ei = null),
            (vu = r),
            (N.H = i),
            (N.A = a),
            null === gu && ((yu = null), (mu = 0), Ur()),
            o
        );
    }
    function cc() {
        for (; null !== gu; ) dc(gu);
    }
    function fc() {
        for (; null !== gu && !se(); ) dc(gu);
    }
    function dc(e) {
        var t = ll(e.alternate, e, xu);
        ((e.memoizedProps = e.pendingProps), null === t ? vc(e) : (gu = t));
    }
    function hc(e) {
        var t = e,
            n = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = qs(n, t, t.pendingProps, t.type, void 0, mu);
                break;
            case 11:
                t = qs(n, t, t.pendingProps, t.type.render, t.ref, mu);
                break;
            case 5:
                lo(t);
            default:
                (gl(n, t), (t = ll(n, (t = gu = Fr(t, xu)), xu)));
        }
        ((e.memoizedProps = e.pendingProps), null === t ? vc(e) : (gu = t));
    }
    function pc(e, t, n, i) {
        ((Oi = Ei = null), lo(t), (ua = null), (ca = 0));
        var a = t.return;
        try {
            if (
                (function (e, t, n, i, a) {
                    if (((n.flags |= 32768), null !== i && 'object' == typeof i && 'function' == typeof i.then)) {
                        if ((null !== (t = n.alternate) && Ni(t, n, a, !0), null !== (n = ja.current))) {
                            switch (n.tag) {
                                case 31:
                                case 13:
                                    return (
                                        null === Wa ? lc() : null === n.alternate && 0 === Eu && (Eu = 3),
                                        (n.flags &= -257),
                                        (n.flags |= 65536),
                                        (n.lanes = a),
                                        i === na
                                            ? (n.flags |= 16384)
                                            : (null === (t = n.updateQueue) ? (n.updateQueue = new Set([i])) : t.add(i),
                                              Oc(e, i, a)),
                                        !1
                                    );
                                case 22:
                                    return (
                                        (n.flags |= 65536),
                                        i === na
                                            ? (n.flags |= 16384)
                                            : (null === (t = n.updateQueue)
                                                  ? ((t = {
                                                        transitions: null,
                                                        markerInstances: null,
                                                        retryQueue: new Set([i]),
                                                    }),
                                                    (n.updateQueue = t))
                                                  : null === (n = t.retryQueue)
                                                    ? (t.retryQueue = new Set([i]))
                                                    : n.add(i),
                                              Oc(e, i, a)),
                                        !1
                                    );
                            }
                            throw Error(r(435, n.tag));
                        }
                        return (Oc(e, i, a), lc(), !1);
                    }
                    if (hi)
                        return (
                            null !== (t = ja.current)
                                ? (!(65536 & t.flags) && (t.flags |= 256),
                                  (t.flags |= 65536),
                                  (t.lanes = a),
                                  i !== yi && ki(Xr((e = Error(r(422), { cause: i })), n)))
                                : (i !== yi && ki(Xr((t = Error(r(423), { cause: i })), n)),
                                  ((e = e.current.alternate).flags |= 65536),
                                  (a &= -a),
                                  (e.lanes |= a),
                                  (i = Xr(i, n)),
                                  ka(e, (a = Ns(e.stateNode, i, a))),
                                  4 !== Eu && (Eu = 2)),
                            !1
                        );
                    var o = Error(r(520), { cause: i });
                    if (((o = Xr(o, n)), null === Nu ? (Nu = [o]) : Nu.push(o), 4 !== Eu && (Eu = 2), null === t))
                        return !0;
                    ((i = Xr(i, n)), (n = t));
                    do {
                        switch (n.tag) {
                            case 3:
                                return (
                                    (n.flags |= 65536),
                                    (e = a & -a),
                                    (n.lanes |= e),
                                    ka(n, (e = Ns(n.stateNode, i, e))),
                                    !1
                                );
                            case 1:
                                if (
                                    ((t = n.type),
                                    (o = n.stateNode),
                                    !(
                                        128 & n.flags ||
                                        ('function' != typeof t.getDerivedStateFromError &&
                                            (null === o ||
                                                'function' != typeof o.componentDidCatch ||
                                                (null !== Ru && Ru.has(o))))
                                    ))
                                )
                                    return (
                                        (n.flags |= 65536),
                                        (a &= -a),
                                        (n.lanes |= a),
                                        Bs((a = Us(a)), e, n, i),
                                        ka(n, a),
                                        !1
                                    );
                        }
                        n = n.return;
                    } while (null !== n);
                    return !1;
                })(e, a, t, n, mu)
            )
                return ((Eu = 1), Cs(e, Xr(n, e.current)), void (gu = null));
        } catch (o) {
            if (null !== a) throw ((gu = a), o);
            return ((Eu = 1), Cs(e, Xr(n, e.current)), void (gu = null));
        }
        32768 & t.flags
            ? (hi || 1 === i
                  ? (e = !0)
                  : Su || 536870912 & mu
                    ? (e = !1)
                    : ((wu = e = !0),
                      (2 === i || 9 === i || 3 === i || 6 === i) &&
                          null !== (i = ja.current) &&
                          13 === i.tag &&
                          (i.flags |= 16384)),
              yc(t, e))
            : vc(t);
    }
    function vc(e) {
        var t = e;
        do {
            if (32768 & t.flags) return void yc(t, wu);
            e = t.return;
            var n = vl(t.alternate, t, xu);
            if (null !== n) return void (gu = n);
            if (null !== (t = t.sibling)) return void (gu = t);
            gu = t = e;
        } while (null !== t);
        0 === Eu && (Eu = 5);
    }
    function yc(e, t) {
        do {
            var n = yl(e.alternate, e);
            if (null !== n) return ((n.flags &= 32767), void (gu = n));
            if (
                (null !== (n = e.return) && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
                !t && null !== (e = e.sibling))
            )
                return void (gu = e);
            gu = e = n;
        } while (null !== e);
        ((Eu = 6), (gu = null));
    }
    function gc(e, t, n, i, a, o, s, l, u) {
        e.cancelPendingCommit = null;
        do {
            Sc();
        } while (0 !== Mu);
        if (6 & vu) throw Error(r(327));
        if (null !== t) {
            if (t === e.current) throw Error(r(177));
            if (
                ((o = t.lanes | t.childLanes),
                (function (e, t, n, r, i, a) {
                    var o = e.pendingLanes;
                    ((e.pendingLanes = n),
                        (e.suspendedLanes = 0),
                        (e.pingedLanes = 0),
                        (e.warmLanes = 0),
                        (e.expiredLanes &= n),
                        (e.entangledLanes &= n),
                        (e.errorRecoveryDisabledLanes &= n),
                        (e.shellSuspendCounter = 0));
                    var s = e.entanglements,
                        l = e.expirationTimes,
                        u = e.hiddenUpdates;
                    for (n = o & ~n; 0 < n; ) {
                        var c = 31 - Se(n),
                            f = 1 << c;
                        ((s[c] = 0), (l[c] = -1));
                        var d = u[c];
                        if (null !== d)
                            for (u[c] = null, c = 0; c < d.length; c++) {
                                var h = d[c];
                                null !== h && (h.lane &= -536870913);
                            }
                        n &= ~f;
                    }
                    (0 !== r && We(e, r, 0), 0 !== a && 0 === i && 0 !== e.tag && (e.suspendedLanes |= a & ~(o & ~t)));
                })(e, n, (o |= Nr), s, l, u),
                e === yu && ((gu = yu = null), (mu = 0)),
                (Iu = t),
                (Du = e),
                (Vu = n),
                (Fu = o),
                ($u = a),
                (Qu = i),
                10256 & t.subtreeFlags || 10256 & t.flags
                    ? ((e.callbackNode = null),
                      (e.callbackPriority = 0),
                      ae(pe, function () {
                          return (kc(), null);
                      }))
                    : ((e.callbackNode = null), (e.callbackPriority = 0)),
                (i = !!(13878 & t.flags)),
                13878 & t.subtreeFlags || i)
            ) {
                ((i = N.T), (N.T = null), (a = U.p), (U.p = 2), (s = vu), (vu |= 4));
                try {
                    !(function (e, t) {
                        if (((e = e.containerInfo), (gf = Sd), or((e = ar(e))))) {
                            if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
                            else
                                e: {
                                    var i =
                                        (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection &&
                                        n.getSelection();
                                    if (i && 0 !== i.rangeCount) {
                                        n = i.anchorNode;
                                        var a = i.anchorOffset,
                                            o = i.focusNode;
                                        i = i.focusOffset;
                                        try {
                                            (n.nodeType, o.nodeType);
                                        } catch (y) {
                                            n = null;
                                            break e;
                                        }
                                        var s = 0,
                                            l = -1,
                                            u = -1,
                                            c = 0,
                                            f = 0,
                                            d = e,
                                            h = null;
                                        t: for (;;) {
                                            for (
                                                var p;
                                                d !== n || (0 !== a && 3 !== d.nodeType) || (l = s + a),
                                                    d !== o || (0 !== i && 3 !== d.nodeType) || (u = s + i),
                                                    3 === d.nodeType && (s += d.nodeValue.length),
                                                    null !== (p = d.firstChild);
                                            )
                                                ((h = d), (d = p));
                                            for (;;) {
                                                if (d === e) break t;
                                                if (
                                                    (h === n && ++c === a && (l = s),
                                                    h === o && ++f === i && (u = s),
                                                    null !== (p = d.nextSibling))
                                                )
                                                    break;
                                                h = (d = h).parentNode;
                                            }
                                            d = p;
                                        }
                                        n = -1 === l || -1 === u ? null : { start: l, end: u };
                                    } else n = null;
                                }
                            n = n || { start: 0, end: 0 };
                        } else n = null;
                        for (mf = { focusedElem: e, selectionRange: n }, Sd = !1, Wl = t; null !== Wl; )
                            if (((e = (t = Wl).child), 1028 & t.subtreeFlags && null !== e)) ((e.return = t), (Wl = e));
                            else
                                for (; null !== Wl; ) {
                                    switch (((o = (t = Wl).alternate), (e = t.flags), t.tag)) {
                                        case 0:
                                            if (4 & e && null !== (e = null !== (e = t.updateQueue) ? e.events : null))
                                                for (n = 0; n < e.length; n++) (a = e[n]).ref.impl = a.nextImpl;
                                            break;
                                        case 11:
                                        case 15:
                                        case 5:
                                        case 26:
                                        case 27:
                                        case 6:
                                        case 4:
                                        case 17:
                                            break;
                                        case 1:
                                            if (1024 & e && null !== o) {
                                                ((e = void 0),
                                                    (n = t),
                                                    (a = o.memoizedProps),
                                                    (o = o.memoizedState),
                                                    (i = n.stateNode));
                                                try {
                                                    var v = Es(n.type, a);
                                                    ((e = i.getSnapshotBeforeUpdate(v, o)),
                                                        (i.__reactInternalSnapshotBeforeUpdate = e));
                                                } catch (g) {
                                                    Ec(n, n.return, g);
                                                }
                                            }
                                            break;
                                        case 3:
                                            if (1024 & e)
                                                if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) Uf(e);
                                                else if (1 === n)
                                                    switch (e.nodeName) {
                                                        case 'HEAD':
                                                        case 'HTML':
                                                        case 'BODY':
                                                            Uf(e);
                                                            break;
                                                        default:
                                                            e.textContent = '';
                                                    }
                                            break;
                                        default:
                                            if (1024 & e) throw Error(r(163));
                                    }
                                    if (null !== (e = t.sibling)) {
                                        ((e.return = t.return), (Wl = e));
                                        break;
                                    }
                                    Wl = t.return;
                                }
                    })(e, t);
                } finally {
                    ((vu = s), (U.p = a), (N.T = i));
                }
            }
            ((Mu = 1), mc(), bc(), _c());
        }
    }
    function mc() {
        if (1 === Mu) {
            Mu = 0;
            var e = Du,
                t = Iu,
                n = !!(13878 & t.flags);
            if (13878 & t.subtreeFlags || n) {
                ((n = N.T), (N.T = null));
                var r = U.p;
                U.p = 2;
                var i = vu;
                vu |= 4;
                try {
                    ql(t, e);
                    var a = mf,
                        o = ar(e.containerInfo),
                        s = a.focusedElem,
                        l = a.selectionRange;
                    if (o !== s && s && s.ownerDocument && ir(s.ownerDocument.documentElement, s)) {
                        if (null !== l && or(s)) {
                            var u = l.start,
                                c = l.end;
                            if ((void 0 === c && (c = u), 'selectionStart' in s))
                                ((s.selectionStart = u), (s.selectionEnd = Math.min(c, s.value.length)));
                            else {
                                var f = s.ownerDocument || document,
                                    d = (f && f.defaultView) || window;
                                if (d.getSelection) {
                                    var h = d.getSelection(),
                                        p = s.textContent.length,
                                        v = Math.min(l.start, p),
                                        y = void 0 === l.end ? v : Math.min(l.end, p);
                                    !h.extend && v > y && ((o = y), (y = v), (v = o));
                                    var g = rr(s, v),
                                        m = rr(s, y);
                                    if (
                                        g &&
                                        m &&
                                        (1 !== h.rangeCount ||
                                            h.anchorNode !== g.node ||
                                            h.anchorOffset !== g.offset ||
                                            h.focusNode !== m.node ||
                                            h.focusOffset !== m.offset)
                                    ) {
                                        var b = f.createRange();
                                        (b.setStart(g.node, g.offset),
                                            h.removeAllRanges(),
                                            v > y
                                                ? (h.addRange(b), h.extend(m.node, m.offset))
                                                : (b.setEnd(m.node, m.offset), h.addRange(b)));
                                    }
                                }
                            }
                        }
                        for (f = [], h = s; (h = h.parentNode); )
                            1 === h.nodeType && f.push({ element: h, left: h.scrollLeft, top: h.scrollTop });
                        for ('function' == typeof s.focus && s.focus(), s = 0; s < f.length; s++) {
                            var _ = f[s];
                            ((_.element.scrollLeft = _.left), (_.element.scrollTop = _.top));
                        }
                    }
                    ((Sd = !!gf), (mf = gf = null));
                } finally {
                    ((vu = i), (U.p = r), (N.T = n));
                }
            }
            ((e.current = t), (Mu = 2));
        }
    }
    function bc() {
        if (2 === Mu) {
            Mu = 0;
            var e = Du,
                t = Iu,
                n = !!(8772 & t.flags);
            if (8772 & t.subtreeFlags || n) {
                ((n = N.T), (N.T = null));
                var r = U.p;
                U.p = 2;
                var i = vu;
                vu |= 4;
                try {
                    Ll(e, t.alternate, t);
                } finally {
                    ((vu = i), (U.p = r), (N.T = n));
                }
            }
            Mu = 3;
        }
    }
    function _c() {
        if (4 === Mu || 3 === Mu) {
            ((Mu = 0), ue());
            var e = Du,
                t = Iu,
                n = Vu,
                r = Qu;
            10256 & t.subtreeFlags || 10256 & t.flags ? (Mu = 5) : ((Mu = 0), (Iu = Du = null), wc(e, e.pendingLanes));
            var i = e.pendingLanes;
            if ((0 === i && (Ru = null), Me(n), (t = t.stateNode), _e && 'function' == typeof _e.onCommitFiberRoot))
                try {
                    _e.onCommitFiberRoot(be, t, void 0, !(128 & ~t.current.flags));
                } catch (l) {}
            if (null !== r) {
                ((t = N.T), (i = U.p), (U.p = 2), (N.T = null));
                try {
                    for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
                        var s = r[o];
                        a(s.value, { componentStack: s.stack });
                    }
                } finally {
                    ((N.T = t), (U.p = i));
                }
            }
            (3 & Vu && Sc(),
                zc(e),
                (i = e.pendingLanes),
                261930 & n && 42 & i ? (e === qu ? Hu++ : ((Hu = 0), (qu = e))) : (Hu = 0),
                Rc(0));
        }
    }
    function wc(e, t) {
        0 === (e.pooledCacheLanes &= t) && null != (t = e.pooledCache) && ((e.pooledCache = null), Vi(t));
    }
    function Sc() {
        return (mc(), bc(), _c(), kc());
    }
    function kc() {
        if (5 !== Mu) return !1;
        var e = Du,
            t = Fu;
        Fu = 0;
        var n = Me(Vu),
            i = N.T,
            a = U.p;
        try {
            ((U.p = 32 > n ? 32 : n), (N.T = null), (n = $u), ($u = null));
            var o = Du,
                s = Vu;
            if (((Mu = 0), (Iu = Du = null), (Vu = 0), 6 & vu)) throw Error(r(331));
            var l = vu;
            if (
                ((vu |= 4),
                cu(o.current),
                nu(o, o.current, s, n),
                (vu = l),
                Rc(0, !1),
                _e && 'function' == typeof _e.onPostCommitFiberRoot)
            )
                try {
                    _e.onPostCommitFiberRoot(be, o);
                } catch (u) {}
            return !0;
        } finally {
            ((U.p = a), (N.T = i), wc(e, t));
        }
    }
    function xc(e, t, n) {
        ((t = Xr(n, t)), null !== (e = wa(e, (t = Ns(e.stateNode, t, 2)), 2)) && (je(e, 2), zc(e)));
    }
    function Ec(e, t, n) {
        if (3 === e.tag) xc(e, e, n);
        else
            for (; null !== t; ) {
                if (3 === t.tag) {
                    xc(t, e, n);
                    break;
                }
                if (1 === t.tag) {
                    var r = t.stateNode;
                    if (
                        'function' == typeof t.type.getDerivedStateFromError ||
                        ('function' == typeof r.componentDidCatch && (null === Ru || !Ru.has(r)))
                    ) {
                        ((e = Xr(n, e)), null !== (r = wa(t, (n = Us(2)), 2)) && (Bs(n, r, t, e), je(r, 2), zc(r)));
                        break;
                    }
                }
                t = t.return;
            }
    }
    function Oc(e, t, n) {
        var r = e.pingCache;
        if (null === r) {
            r = e.pingCache = new pu();
            var i = new Set();
            r.set(t, i);
        } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
        i.has(n) || ((ku = !0), i.add(n), (e = Pc.bind(null, e, t, n)), t.then(e, e));
    }
    function Pc(e, t, n) {
        var r = e.pingCache;
        (null !== r && r.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            yu === e &&
                (mu & n) === n &&
                (4 === Eu || (3 === Eu && (62914560 & mu) === mu && 300 > ce() - ju)
                    ? !(2 & vu) && rc(e, 0)
                    : (Tu |= n),
                Au === mu && (Au = 0)),
            zc(e));
    }
    function Tc(e, t) {
        (0 === t && (t = Ue()), null !== (e = Wr(e, t)) && (je(e, t), zc(e)));
    }
    function Cc(e) {
        var t = e.memoizedState,
            n = 0;
        (null !== t && (n = t.retryLane), Tc(e, n));
    }
    function Ac(e, t) {
        var n = 0;
        switch (e.tag) {
            case 31:
            case 13:
                var i = e.stateNode,
                    a = e.memoizedState;
                null !== a && (n = a.retryLane);
                break;
            case 19:
                i = e.stateNode;
                break;
            case 22:
                i = e.stateNode._retryCache;
                break;
            default:
                throw Error(r(314));
        }
        (null !== i && i.delete(t), Tc(e, n));
    }
    var Nc = null,
        Uc = null,
        Bc = !1,
        jc = !1,
        Wc = !1,
        Lc = 0;
    function zc(e) {
        (e !== Uc && null === e.next && (null === Uc ? (Nc = Uc = e) : (Uc = Uc.next = e)),
            (jc = !0),
            Bc ||
                ((Bc = !0),
                Pf(function () {
                    6 & vu ? ae(de, Mc) : Dc();
                })));
    }
    function Rc(e, t) {
        if (!Wc && jc) {
            Wc = !0;
            do {
                for (var n = !1, r = Nc; null !== r; ) {
                    if (0 !== e) {
                        var i = r.pendingLanes;
                        if (0 === i) var a = 0;
                        else {
                            var o = r.suspendedLanes,
                                s = r.pingedLanes;
                            ((a = (1 << (31 - Se(42 | e) + 1)) - 1),
                                (a = 201326741 & (a &= i & ~(o & ~s)) ? (201326741 & a) | 1 : a ? 2 | a : 0));
                        }
                        0 !== a && ((n = !0), Fc(r, a));
                    } else
                        ((a = mu),
                            !(
                                3 &
                                (a = Ce(r, r === yu ? a : 0, null !== r.cancelPendingCommit || -1 !== r.timeoutHandle))
                            ) ||
                                Ae(r, a) ||
                                ((n = !0), Fc(r, a)));
                    r = r.next;
                }
            } while (n);
            Wc = !1;
        }
    }
    function Mc() {
        Dc();
    }
    function Dc() {
        jc = Bc = !1;
        var e = 0;
        0 !== Lc &&
            (function () {
                var e = window.event;
                if (e && 'popstate' === e.type) return e !== kf && ((kf = e), !0);
                return ((kf = null), !1);
            })() &&
            (e = Lc);
        for (var t = ce(), n = null, r = Nc; null !== r; ) {
            var i = r.next,
                a = Ic(r, t);
            (0 === a
                ? ((r.next = null), null === n ? (Nc = i) : (n.next = i), null === i && (Uc = n))
                : ((n = r), (0 !== e || 3 & a) && (jc = !0)),
                (r = i));
        }
        ((0 !== Mu && 5 !== Mu) || Rc(e), 0 !== Lc && (Lc = 0));
    }
    function Ic(e, t) {
        for (
            var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = -62914561 & e.pendingLanes;
            0 < a;
        ) {
            var o = 31 - Se(a),
                s = 1 << o,
                l = i[o];
            (-1 === l ? (0 !== (s & n) && 0 === (s & r)) || (i[o] = Ne(s, t)) : l <= t && (e.expiredLanes |= s),
                (a &= ~s));
        }
        if (
            ((n = mu),
            (n = Ce(e, e === (t = yu) ? n : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)),
            (r = e.callbackNode),
            0 === n || (e === t && (2 === bu || 9 === bu)) || null !== e.cancelPendingCommit)
        )
            return (null !== r && null !== r && oe(r), (e.callbackNode = null), (e.callbackPriority = 0));
        if (!(3 & n) || Ae(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch ((null !== r && oe(r), Me(n))) {
                case 2:
                case 8:
                    n = he;
                    break;
                case 32:
                default:
                    n = pe;
                    break;
                case 268435456:
                    n = ye;
            }
            return ((r = Vc.bind(null, e)), (n = ae(n, r)), (e.callbackPriority = t), (e.callbackNode = n), t);
        }
        return (null !== r && null !== r && oe(r), (e.callbackPriority = 2), (e.callbackNode = null), 2);
    }
    function Vc(e, t) {
        if (0 !== Mu && 5 !== Mu) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
        var n = e.callbackNode;
        if (Sc() && e.callbackNode !== n) return null;
        var r = mu;
        return 0 === (r = Ce(e, e === yu ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle))
            ? null
            : (Yu(e, r, t), Ic(e, ce()), null != e.callbackNode && e.callbackNode === n ? Vc.bind(null, e) : null);
    }
    function Fc(e, t) {
        if (Sc()) return null;
        Yu(e, t, !0);
    }
    function $c() {
        if (0 === Lc) {
            var e = Qi;
            (0 === e && ((e = Ee), !(261888 & (Ee <<= 1)) && (Ee = 256)), (Lc = e));
        }
        return Lc;
    }
    function Qc(e) {
        return null == e || 'symbol' == typeof e || 'boolean' == typeof e
            ? null
            : 'function' == typeof e
              ? e
              : Bt('' + e);
    }
    function Hc(e, t) {
        var n = t.ownerDocument.createElement('input');
        return (
            (n.name = t.name),
            (n.value = t.value),
            e.id && n.setAttribute('form', e.id),
            t.parentNode.insertBefore(n, t),
            (e = new FormData(e)),
            n.parentNode.removeChild(n),
            e
        );
    }
    for (var qc = 0; qc < Or.length; qc++) {
        var Kc = Or[qc];
        Pr(Kc.toLowerCase(), 'on' + (Kc[0].toUpperCase() + Kc.slice(1)));
    }
    (Pr(mr, 'onAnimationEnd'),
        Pr(br, 'onAnimationIteration'),
        Pr(_r, 'onAnimationStart'),
        Pr('dblclick', 'onDoubleClick'),
        Pr('focusin', 'onFocus'),
        Pr('focusout', 'onBlur'),
        Pr(wr, 'onTransitionRun'),
        Pr(Sr, 'onTransitionStart'),
        Pr(kr, 'onTransitionCancel'),
        Pr(xr, 'onTransitionEnd'),
        ot('onMouseEnter', ['mouseout', 'mouseover']),
        ot('onMouseLeave', ['mouseout', 'mouseover']),
        ot('onPointerEnter', ['pointerout', 'pointerover']),
        ot('onPointerLeave', ['pointerout', 'pointerover']),
        at('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
        at(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '),
        ),
        at('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
        at('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
        at('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
        at('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
    var Gc =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
                ' ',
            ),
        Xc = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Gc));
    function Yc(e, t) {
        t = !!(4 & t);
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = r.event;
            r = r.listeners;
            e: {
                var a = void 0;
                if (t)
                    for (var o = r.length - 1; 0 <= o; o--) {
                        var s = r[o],
                            l = s.instance,
                            u = s.currentTarget;
                        if (((s = s.listener), l !== a && i.isPropagationStopped())) break e;
                        ((a = s), (i.currentTarget = u));
                        try {
                            a(i);
                        } catch (c) {
                            Tr(c);
                        }
                        ((i.currentTarget = null), (a = l));
                    }
                else
                    for (o = 0; o < r.length; o++) {
                        if (
                            ((l = (s = r[o]).instance),
                            (u = s.currentTarget),
                            (s = s.listener),
                            l !== a && i.isPropagationStopped())
                        )
                            break e;
                        ((a = s), (i.currentTarget = u));
                        try {
                            a(i);
                        } catch (c) {
                            Tr(c);
                        }
                        ((i.currentTarget = null), (a = l));
                    }
            }
        }
    }
    function Jc(e, t) {
        var n = t[He];
        void 0 === n && (n = t[He] = new Set());
        var r = e + '__bubble';
        n.has(r) || (nf(t, e, 2, !1), n.add(r));
    }
    function Zc(e, t, n) {
        var r = 0;
        (t && (r |= 4), nf(n, e, r, t));
    }
    var ef = '_reactListening' + Math.random().toString(36).slice(2);
    function tf(e) {
        if (!e[ef]) {
            ((e[ef] = !0),
                rt.forEach(function (t) {
                    'selectionchange' !== t && (Xc.has(t) || Zc(t, !1, e), Zc(t, !0, e));
                }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[ef] || ((t[ef] = !0), Zc('selectionchange', !1, t));
        }
    }
    function nf(e, t, n, r) {
        switch (Cd(t)) {
            case 2:
                var i = kd;
                break;
            case 8:
                i = xd;
                break;
            default:
                i = Ed;
        }
        ((n = i.bind(null, t, n, e)),
            (i = void 0),
            !$t || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (i = !0),
            r
                ? void 0 !== i
                    ? e.addEventListener(t, n, { capture: !0, passive: i })
                    : e.addEventListener(t, n, !0)
                : void 0 !== i
                  ? e.addEventListener(t, n, { passive: i })
                  : e.addEventListener(t, n, !1));
    }
    function rf(e, t, n, r, i) {
        var o = r;
        if (!(1 & t || 2 & t || null === r))
            e: for (;;) {
                if (null === r) return;
                var s = r.tag;
                if (3 === s || 4 === s) {
                    var l = r.stateNode.containerInfo;
                    if (l === i) break;
                    if (4 === s)
                        for (s = r.return; null !== s; ) {
                            var u = s.tag;
                            if ((3 === u || 4 === u) && s.stateNode.containerInfo === i) return;
                            s = s.return;
                        }
                    for (; null !== l; ) {
                        if (null === (s = Je(l))) return;
                        if (5 === (u = s.tag) || 6 === u || 26 === u || 27 === u) {
                            r = o = s;
                            continue e;
                        }
                        l = l.parentNode;
                    }
                }
                r = r.return;
            }
        It(function () {
            var r = o,
                i = Lt(n),
                s = [];
            e: {
                var l = Er.get(e);
                if (void 0 !== l) {
                    var u = an,
                        c = e;
                    switch (e) {
                        case 'keypress':
                            if (0 === Xt(n)) break e;
                        case 'keydown':
                        case 'keyup':
                            u = _n;
                            break;
                        case 'focusin':
                            ((c = 'focus'), (u = fn));
                            break;
                        case 'focusout':
                            ((c = 'blur'), (u = fn));
                            break;
                        case 'beforeblur':
                        case 'afterblur':
                            u = fn;
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
                            u = un;
                            break;
                        case 'drag':
                        case 'dragend':
                        case 'dragenter':
                        case 'dragexit':
                        case 'dragleave':
                        case 'dragover':
                        case 'dragstart':
                        case 'drop':
                            u = cn;
                            break;
                        case 'touchcancel':
                        case 'touchend':
                        case 'touchmove':
                        case 'touchstart':
                            u = Sn;
                            break;
                        case mr:
                        case br:
                        case _r:
                            u = dn;
                            break;
                        case xr:
                            u = kn;
                            break;
                        case 'scroll':
                        case 'scrollend':
                            u = sn;
                            break;
                        case 'wheel':
                            u = xn;
                            break;
                        case 'copy':
                        case 'cut':
                        case 'paste':
                            u = hn;
                            break;
                        case 'gotpointercapture':
                        case 'lostpointercapture':
                        case 'pointercancel':
                        case 'pointerdown':
                        case 'pointermove':
                        case 'pointerout':
                        case 'pointerover':
                        case 'pointerup':
                            u = wn;
                            break;
                        case 'toggle':
                        case 'beforetoggle':
                            u = En;
                    }
                    var f = !!(4 & t),
                        d = !f && ('scroll' === e || 'scrollend' === e),
                        h = f ? (null !== l ? l + 'Capture' : null) : l;
                    f = [];
                    for (var p, v = r; null !== v; ) {
                        var y = v;
                        if (
                            ((p = y.stateNode),
                            (5 !== (y = y.tag) && 26 !== y && 27 !== y) ||
                                null === p ||
                                null === h ||
                                (null != (y = Vt(v, h)) && f.push(af(v, y, p))),
                            d)
                        )
                            break;
                        v = v.return;
                    }
                    0 < f.length && ((l = new u(l, c, null, n, i)), s.push({ event: l, listeners: f }));
                }
            }
            if (!(7 & t)) {
                if (
                    ((u = 'mouseout' === e || 'pointerout' === e),
                    (!(l = 'mouseover' === e || 'pointerover' === e) ||
                        n === Wt ||
                        !(c = n.relatedTarget || n.fromElement) ||
                        (!Je(c) && !c[Qe])) &&
                        (u || l) &&
                        ((l = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window),
                        u
                            ? ((u = r),
                              null !== (c = (c = n.relatedTarget || n.toElement) ? Je(c) : null) &&
                                  ((d = a(c)), (f = c.tag), c !== d || (5 !== f && 27 !== f && 6 !== f)) &&
                                  (c = null))
                            : ((u = null), (c = r)),
                        u !== c))
                ) {
                    if (
                        ((f = un),
                        (y = 'onMouseLeave'),
                        (h = 'onMouseEnter'),
                        (v = 'mouse'),
                        ('pointerout' !== e && 'pointerover' !== e) ||
                            ((f = wn), (y = 'onPointerLeave'), (h = 'onPointerEnter'), (v = 'pointer')),
                        (d = null == u ? l : et(u)),
                        (p = null == c ? l : et(c)),
                        ((l = new f(y, v + 'leave', u, n, i)).target = d),
                        (l.relatedTarget = p),
                        (y = null),
                        Je(i) === r &&
                            (((f = new f(h, v + 'enter', c, n, i)).target = p), (f.relatedTarget = d), (y = f)),
                        (d = y),
                        u && c)
                    )
                        e: {
                            for (f = sf, v = c, p = 0, y = h = u; y; y = f(y)) p++;
                            y = 0;
                            for (var g = v; g; g = f(g)) y++;
                            for (; 0 < p - y; ) ((h = f(h)), p--);
                            for (; 0 < y - p; ) ((v = f(v)), y--);
                            for (; p--; ) {
                                if (h === v || (null !== v && h === v.alternate)) {
                                    f = h;
                                    break e;
                                }
                                ((h = f(h)), (v = f(v)));
                            }
                            f = null;
                        }
                    else f = null;
                    (null !== u && lf(s, l, u, f, !1), null !== c && null !== d && lf(s, d, c, f, !0));
                }
                if (
                    'select' === (u = (l = r ? et(r) : window).nodeName && l.nodeName.toLowerCase()) ||
                    ('input' === u && 'file' === l.type)
                )
                    var m = Fn;
                else if (zn(l))
                    if ($n) m = Zn;
                    else {
                        m = Yn;
                        var b = Xn;
                    }
                else
                    !(u = l.nodeName) || 'input' !== u.toLowerCase() || ('checkbox' !== l.type && 'radio' !== l.type)
                        ? r && At(r.elementType) && (m = Fn)
                        : (m = Jn);
                switch (
                    (m && (m = m(e, r))
                        ? Rn(s, m, n, i)
                        : (b && b(e, l, r),
                          'focusout' === e &&
                              r &&
                              'number' === l.type &&
                              null != r.memoizedProps.value &&
                              St(l, 'number', l.value)),
                    (b = r ? et(r) : window),
                    e)
                ) {
                    case 'focusin':
                        (zn(b) || 'true' === b.contentEditable) && ((lr = b), (ur = r), (cr = null));
                        break;
                    case 'focusout':
                        cr = ur = lr = null;
                        break;
                    case 'mousedown':
                        fr = !0;
                        break;
                    case 'contextmenu':
                    case 'mouseup':
                    case 'dragend':
                        ((fr = !1), dr(s, n, i));
                        break;
                    case 'selectionchange':
                        if (sr) break;
                    case 'keydown':
                    case 'keyup':
                        dr(s, n, i);
                }
                var _;
                if (Pn)
                    e: {
                        switch (e) {
                            case 'compositionstart':
                                var w = 'onCompositionStart';
                                break e;
                            case 'compositionend':
                                w = 'onCompositionEnd';
                                break e;
                            case 'compositionupdate':
                                w = 'onCompositionUpdate';
                                break e;
                        }
                        w = void 0;
                    }
                else
                    Wn
                        ? Bn(e, n) && (w = 'onCompositionEnd')
                        : 'keydown' === e && 229 === n.keyCode && (w = 'onCompositionStart');
                (w &&
                    (An &&
                        'ko' !== n.locale &&
                        (Wn || 'onCompositionStart' !== w
                            ? 'onCompositionEnd' === w && Wn && (_ = Gt())
                            : ((qt = 'value' in (Ht = i) ? Ht.value : Ht.textContent), (Wn = !0))),
                    0 < (b = of(r, w)).length &&
                        ((w = new pn(w, e, null, n, i)),
                        s.push({ event: w, listeners: b }),
                        _ ? (w.data = _) : null !== (_ = jn(n)) && (w.data = _))),
                    (_ = Cn
                        ? (function (e, t) {
                              switch (e) {
                                  case 'compositionend':
                                      return jn(t);
                                  case 'keypress':
                                      return 32 !== t.which ? null : ((Un = !0), Nn);
                                  case 'textInput':
                                      return (e = t.data) === Nn && Un ? null : e;
                                  default:
                                      return null;
                              }
                          })(e, n)
                        : (function (e, t) {
                              if (Wn)
                                  return 'compositionend' === e || (!Pn && Bn(e, t))
                                      ? ((e = Gt()), (Kt = qt = Ht = null), (Wn = !1), e)
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
                                      return An && 'ko' !== t.locale ? null : t.data;
                              }
                          })(e, n)) &&
                        0 < (w = of(r, 'onBeforeInput')).length &&
                        ((b = new pn('onBeforeInput', 'beforeinput', null, n, i)),
                        s.push({ event: b, listeners: w }),
                        (b.data = _)),
                    (function (e, t, n, r, i) {
                        if ('submit' === t && n && n.stateNode === i) {
                            var a = Qc((i[$e] || null).action),
                                o = r.submitter;
                            o &&
                                null !== (t = (t = o[$e] || null) ? Qc(t.formAction) : o.getAttribute('formAction')) &&
                                ((a = t), (o = null));
                            var s = new an('action', 'action', null, r, i);
                            e.push({
                                event: s,
                                listeners: [
                                    {
                                        instance: null,
                                        listener: function () {
                                            if (r.defaultPrevented) {
                                                if (0 !== Lc) {
                                                    var e = o ? Hc(i, o) : new FormData(i);
                                                    rs(
                                                        n,
                                                        { pending: !0, data: e, method: i.method, action: a },
                                                        null,
                                                        e,
                                                    );
                                                }
                                            } else
                                                'function' == typeof a &&
                                                    (s.preventDefault(),
                                                    (e = o ? Hc(i, o) : new FormData(i)),
                                                    rs(n, { pending: !0, data: e, method: i.method, action: a }, a, e));
                                        },
                                        currentTarget: i,
                                    },
                                ],
                            });
                        }
                    })(s, e, r, n, i));
            }
            Yc(s, t);
        });
    }
    function af(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
    }
    function of(e, t) {
        for (var n = t + 'Capture', r = []; null !== e; ) {
            var i = e,
                a = i.stateNode;
            if (
                ((5 !== (i = i.tag) && 26 !== i && 27 !== i) ||
                    null === a ||
                    (null != (i = Vt(e, n)) && r.unshift(af(e, i, a)), null != (i = Vt(e, t)) && r.push(af(e, i, a))),
                3 === e.tag)
            )
                return r;
            e = e.return;
        }
        return [];
    }
    function sf(e) {
        if (null === e) return null;
        do {
            e = e.return;
        } while (e && 5 !== e.tag && 27 !== e.tag);
        return e || null;
    }
    function lf(e, t, n, r, i) {
        for (var a = t._reactName, o = []; null !== n && n !== r; ) {
            var s = n,
                l = s.alternate,
                u = s.stateNode;
            if (((s = s.tag), null !== l && l === r)) break;
            ((5 !== s && 26 !== s && 27 !== s) ||
                null === u ||
                ((l = u),
                i
                    ? null != (u = Vt(n, a)) && o.unshift(af(n, u, l))
                    : i || (null != (u = Vt(n, a)) && o.push(af(n, u, l)))),
                (n = n.return));
        }
        0 !== o.length && e.push({ event: t, listeners: o });
    }
    var uf = /\r\n?/g,
        cf = /\u0000|\uFFFD/g;
    function ff(e) {
        return ('string' == typeof e ? e : '' + e).replace(uf, '\n').replace(cf, '');
    }
    function df(e, t) {
        return ((t = ff(t)), ff(e) === t);
    }
    function hf(e, t, n, i, a, o) {
        switch (n) {
            case 'children':
                'string' == typeof i
                    ? 'body' === t || ('textarea' === t && '' === i) || Ot(e, i)
                    : ('number' == typeof i || 'bigint' == typeof i) && 'body' !== t && Ot(e, '' + i);
                break;
            case 'className':
                ft(e, 'class', i);
                break;
            case 'tabIndex':
                ft(e, 'tabindex', i);
                break;
            case 'dir':
            case 'role':
            case 'viewBox':
            case 'width':
            case 'height':
                ft(e, n, i);
                break;
            case 'style':
                Ct(e, i, o);
                break;
            case 'data':
                if ('object' !== t) {
                    ft(e, 'data', i);
                    break;
                }
            case 'src':
            case 'href':
                if ('' === i && ('a' !== t || 'href' !== n)) {
                    e.removeAttribute(n);
                    break;
                }
                if (null == i || 'function' == typeof i || 'symbol' == typeof i || 'boolean' == typeof i) {
                    e.removeAttribute(n);
                    break;
                }
                ((i = Bt('' + i)), e.setAttribute(n, i));
                break;
            case 'action':
            case 'formAction':
                if ('function' == typeof i) {
                    e.setAttribute(
                        n,
                        "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
                    );
                    break;
                }
                if (
                    ('function' == typeof o &&
                        ('formAction' === n
                            ? ('input' !== t && hf(e, t, 'name', a.name, a, null),
                              hf(e, t, 'formEncType', a.formEncType, a, null),
                              hf(e, t, 'formMethod', a.formMethod, a, null),
                              hf(e, t, 'formTarget', a.formTarget, a, null))
                            : (hf(e, t, 'encType', a.encType, a, null),
                              hf(e, t, 'method', a.method, a, null),
                              hf(e, t, 'target', a.target, a, null))),
                    null == i || 'symbol' == typeof i || 'boolean' == typeof i)
                ) {
                    e.removeAttribute(n);
                    break;
                }
                ((i = Bt('' + i)), e.setAttribute(n, i));
                break;
            case 'onClick':
                null != i && (e.onclick = jt);
                break;
            case 'onScroll':
                null != i && Jc('scroll', e);
                break;
            case 'onScrollEnd':
                null != i && Jc('scrollend', e);
                break;
            case 'dangerouslySetInnerHTML':
                if (null != i) {
                    if ('object' != typeof i || !('__html' in i)) throw Error(r(61));
                    if (null != (n = i.__html)) {
                        if (null != a.children) throw Error(r(60));
                        e.innerHTML = n;
                    }
                }
                break;
            case 'multiple':
                e.multiple = i && 'function' != typeof i && 'symbol' != typeof i;
                break;
            case 'muted':
                e.muted = i && 'function' != typeof i && 'symbol' != typeof i;
                break;
            case 'suppressContentEditableWarning':
            case 'suppressHydrationWarning':
            case 'defaultValue':
            case 'defaultChecked':
            case 'innerHTML':
            case 'ref':
            case 'autoFocus':
                break;
            case 'xlinkHref':
                if (null == i || 'function' == typeof i || 'boolean' == typeof i || 'symbol' == typeof i) {
                    e.removeAttribute('xlink:href');
                    break;
                }
                ((n = Bt('' + i)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
                break;
            case 'contentEditable':
            case 'spellCheck':
            case 'draggable':
            case 'value':
            case 'autoReverse':
            case 'externalResourcesRequired':
            case 'focusable':
            case 'preserveAlpha':
                null != i && 'function' != typeof i && 'symbol' != typeof i
                    ? e.setAttribute(n, '' + i)
                    : e.removeAttribute(n);
                break;
            case 'inert':
            case 'allowFullScreen':
            case 'async':
            case 'autoPlay':
            case 'controls':
            case 'default':
            case 'defer':
            case 'disabled':
            case 'disablePictureInPicture':
            case 'disableRemotePlayback':
            case 'formNoValidate':
            case 'hidden':
            case 'loop':
            case 'noModule':
            case 'noValidate':
            case 'open':
            case 'playsInline':
            case 'readOnly':
            case 'required':
            case 'reversed':
            case 'scoped':
            case 'seamless':
            case 'itemScope':
                i && 'function' != typeof i && 'symbol' != typeof i ? e.setAttribute(n, '') : e.removeAttribute(n);
                break;
            case 'capture':
            case 'download':
                !0 === i
                    ? e.setAttribute(n, '')
                    : !1 !== i && null != i && 'function' != typeof i && 'symbol' != typeof i
                      ? e.setAttribute(n, i)
                      : e.removeAttribute(n);
                break;
            case 'cols':
            case 'rows':
            case 'size':
            case 'span':
                null != i && 'function' != typeof i && 'symbol' != typeof i && !isNaN(i) && 1 <= i
                    ? e.setAttribute(n, i)
                    : e.removeAttribute(n);
                break;
            case 'rowSpan':
            case 'start':
                null == i || 'function' == typeof i || 'symbol' == typeof i || isNaN(i)
                    ? e.removeAttribute(n)
                    : e.setAttribute(n, i);
                break;
            case 'popover':
                (Jc('beforetoggle', e), Jc('toggle', e), ct(e, 'popover', i));
                break;
            case 'xlinkActuate':
                dt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', i);
                break;
            case 'xlinkArcrole':
                dt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', i);
                break;
            case 'xlinkRole':
                dt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', i);
                break;
            case 'xlinkShow':
                dt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', i);
                break;
            case 'xlinkTitle':
                dt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', i);
                break;
            case 'xlinkType':
                dt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', i);
                break;
            case 'xmlBase':
                dt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', i);
                break;
            case 'xmlLang':
                dt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', i);
                break;
            case 'xmlSpace':
                dt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', i);
                break;
            case 'is':
                ct(e, 'is', i);
                break;
            case 'innerText':
            case 'textContent':
                break;
            default:
                (!(2 < n.length) || ('o' !== n[0] && 'O' !== n[0]) || ('n' !== n[1] && 'N' !== n[1])) &&
                    ct(e, (n = Nt.get(n) || n), i);
        }
    }
    function pf(e, t, n, i, a, o) {
        switch (n) {
            case 'style':
                Ct(e, i, o);
                break;
            case 'dangerouslySetInnerHTML':
                if (null != i) {
                    if ('object' != typeof i || !('__html' in i)) throw Error(r(61));
                    if (null != (n = i.__html)) {
                        if (null != a.children) throw Error(r(60));
                        e.innerHTML = n;
                    }
                }
                break;
            case 'children':
                'string' == typeof i ? Ot(e, i) : ('number' == typeof i || 'bigint' == typeof i) && Ot(e, '' + i);
                break;
            case 'onScroll':
                null != i && Jc('scroll', e);
                break;
            case 'onScrollEnd':
                null != i && Jc('scrollend', e);
                break;
            case 'onClick':
                null != i && (e.onclick = jt);
                break;
            case 'suppressContentEditableWarning':
            case 'suppressHydrationWarning':
            case 'innerHTML':
            case 'ref':
            case 'innerText':
            case 'textContent':
                break;
            default:
                it.hasOwnProperty(n) ||
                    ('o' !== n[0] ||
                    'n' !== n[1] ||
                    ((a = n.endsWith('Capture')),
                    (t = n.slice(2, a ? n.length - 7 : void 0)),
                    'function' == typeof (o = null != (o = e[$e] || null) ? o[n] : null) &&
                        e.removeEventListener(t, o, a),
                    'function' != typeof i)
                        ? n in e
                            ? (e[n] = i)
                            : !0 === i
                              ? e.setAttribute(n, '')
                              : ct(e, n, i)
                        : ('function' != typeof o &&
                              null !== o &&
                              (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                          e.addEventListener(t, i, a)));
        }
    }
    function vf(e, t, n) {
        switch (t) {
            case 'div':
            case 'span':
            case 'svg':
            case 'path':
            case 'a':
            case 'g':
            case 'p':
            case 'li':
                break;
            case 'img':
                (Jc('error', e), Jc('load', e));
                var i,
                    a = !1,
                    o = !1;
                for (i in n)
                    if (n.hasOwnProperty(i)) {
                        var s = n[i];
                        if (null != s)
                            switch (i) {
                                case 'src':
                                    a = !0;
                                    break;
                                case 'srcSet':
                                    o = !0;
                                    break;
                                case 'children':
                                case 'dangerouslySetInnerHTML':
                                    throw Error(r(137, t));
                                default:
                                    hf(e, t, i, s, n, null);
                            }
                    }
                return (o && hf(e, t, 'srcSet', n.srcSet, n, null), void (a && hf(e, t, 'src', n.src, n, null)));
            case 'input':
                Jc('invalid', e);
                var l = (i = s = o = null),
                    u = null,
                    c = null;
                for (a in n)
                    if (n.hasOwnProperty(a)) {
                        var f = n[a];
                        if (null != f)
                            switch (a) {
                                case 'name':
                                    o = f;
                                    break;
                                case 'type':
                                    s = f;
                                    break;
                                case 'checked':
                                    u = f;
                                    break;
                                case 'defaultChecked':
                                    c = f;
                                    break;
                                case 'value':
                                    i = f;
                                    break;
                                case 'defaultValue':
                                    l = f;
                                    break;
                                case 'children':
                                case 'dangerouslySetInnerHTML':
                                    if (null != f) throw Error(r(137, t));
                                    break;
                                default:
                                    hf(e, t, a, f, n, null);
                            }
                    }
                return void wt(e, i, l, u, c, s, o, !1);
            case 'select':
                for (o in (Jc('invalid', e), (a = s = i = null), n))
                    if (n.hasOwnProperty(o) && null != (l = n[o]))
                        switch (o) {
                            case 'value':
                                i = l;
                                break;
                            case 'defaultValue':
                                s = l;
                                break;
                            case 'multiple':
                                a = l;
                            default:
                                hf(e, t, o, l, n, null);
                        }
                return (
                    (t = i),
                    (n = s),
                    (e.multiple = !!a),
                    void (null != t ? kt(e, !!a, t, !1) : null != n && kt(e, !!a, n, !0))
                );
            case 'textarea':
                for (s in (Jc('invalid', e), (i = o = a = null), n))
                    if (n.hasOwnProperty(s) && null != (l = n[s]))
                        switch (s) {
                            case 'value':
                                a = l;
                                break;
                            case 'defaultValue':
                                o = l;
                                break;
                            case 'children':
                                i = l;
                                break;
                            case 'dangerouslySetInnerHTML':
                                if (null != l) throw Error(r(91));
                                break;
                            default:
                                hf(e, t, s, l, n, null);
                        }
                return void Et(e, a, o, i);
            case 'option':
                for (u in n)
                    if (n.hasOwnProperty(u) && null != (a = n[u]))
                        if ('selected' === u) e.selected = a && 'function' != typeof a && 'symbol' != typeof a;
                        else hf(e, t, u, a, n, null);
                return;
            case 'dialog':
                (Jc('beforetoggle', e), Jc('toggle', e), Jc('cancel', e), Jc('close', e));
                break;
            case 'iframe':
            case 'object':
                Jc('load', e);
                break;
            case 'video':
            case 'audio':
                for (a = 0; a < Gc.length; a++) Jc(Gc[a], e);
                break;
            case 'image':
                (Jc('error', e), Jc('load', e));
                break;
            case 'details':
                Jc('toggle', e);
                break;
            case 'embed':
            case 'source':
            case 'link':
                (Jc('error', e), Jc('load', e));
            case 'area':
            case 'base':
            case 'br':
            case 'col':
            case 'hr':
            case 'keygen':
            case 'meta':
            case 'param':
            case 'track':
            case 'wbr':
            case 'menuitem':
                for (c in n)
                    if (n.hasOwnProperty(c) && null != (a = n[c]))
                        switch (c) {
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                throw Error(r(137, t));
                            default:
                                hf(e, t, c, a, n, null);
                        }
                return;
            default:
                if (At(t)) {
                    for (f in n) n.hasOwnProperty(f) && void 0 !== (a = n[f]) && pf(e, t, f, a, n, void 0);
                    return;
                }
        }
        for (l in n) n.hasOwnProperty(l) && null != (a = n[l]) && hf(e, t, l, a, n, null);
    }
    function yf(e) {
        switch (e) {
            case 'css':
            case 'script':
            case 'font':
            case 'img':
            case 'image':
            case 'input':
            case 'link':
                return !0;
            default:
                return !1;
        }
    }
    var gf = null,
        mf = null;
    function bf(e) {
        return 9 === e.nodeType ? e : e.ownerDocument;
    }
    function _f(e) {
        switch (e) {
            case 'http://www.w3.org/2000/svg':
                return 1;
            case 'http://www.w3.org/1998/Math/MathML':
                return 2;
            default:
                return 0;
        }
    }
    function wf(e, t) {
        if (0 === e)
            switch (t) {
                case 'svg':
                    return 1;
                case 'math':
                    return 2;
                default:
                    return 0;
            }
        return 1 === e && 'foreignObject' === t ? 0 : e;
    }
    function Sf(e, t) {
        return (
            'textarea' === e ||
            'noscript' === e ||
            'string' == typeof t.children ||
            'number' == typeof t.children ||
            'bigint' == typeof t.children ||
            ('object' == typeof t.dangerouslySetInnerHTML &&
                null !== t.dangerouslySetInnerHTML &&
                null != t.dangerouslySetInnerHTML.__html)
        );
    }
    var kf = null;
    var xf = 'function' == typeof setTimeout ? setTimeout : void 0,
        Ef = 'function' == typeof clearTimeout ? clearTimeout : void 0,
        Of = 'function' == typeof Promise ? Promise : void 0,
        Pf =
            'function' == typeof queueMicrotask
                ? queueMicrotask
                : void 0 !== Of
                  ? function (e) {
                        return Of.resolve(null).then(e).catch(Tf);
                    }
                  : xf;
    function Tf(e) {
        setTimeout(function () {
            throw e;
        });
    }
    function Cf(e) {
        return 'head' === e;
    }
    function Af(e, t) {
        var n = t,
            r = 0;
        do {
            var i = n.nextSibling;
            if ((e.removeChild(n), i && 8 === i.nodeType))
                if ('/$' === (n = i.data) || '/&' === n) {
                    if (0 === r) return (e.removeChild(i), void qd(t));
                    r--;
                } else if ('$' === n || '$?' === n || '$~' === n || '$!' === n || '&' === n) r++;
                else if ('html' === n) If(e.ownerDocument.documentElement);
                else if ('head' === n) {
                    If((n = e.ownerDocument.head));
                    for (var a = n.firstChild; a; ) {
                        var o = a.nextSibling,
                            s = a.nodeName;
                        (a[Xe] ||
                            'SCRIPT' === s ||
                            'STYLE' === s ||
                            ('LINK' === s && 'stylesheet' === a.rel.toLowerCase()) ||
                            n.removeChild(a),
                            (a = o));
                    }
                } else 'body' === n && If(e.ownerDocument.body);
            n = i;
        } while (n);
        qd(t);
    }
    function Nf(e, t) {
        var n = e;
        e = 0;
        do {
            var r = n.nextSibling;
            if (
                (1 === n.nodeType
                    ? t
                        ? ((n._stashedDisplay = n.style.display), (n.style.display = 'none'))
                        : ((n.style.display = n._stashedDisplay || ''),
                          '' === n.getAttribute('style') && n.removeAttribute('style'))
                    : 3 === n.nodeType &&
                      (t ? ((n._stashedText = n.nodeValue), (n.nodeValue = '')) : (n.nodeValue = n._stashedText || '')),
                r && 8 === r.nodeType)
            )
                if ('/$' === (n = r.data)) {
                    if (0 === e) break;
                    e--;
                } else ('$' !== n && '$?' !== n && '$~' !== n && '$!' !== n) || e++;
            n = r;
        } while (n);
    }
    function Uf(e) {
        var t = e.firstChild;
        for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
                case 'HTML':
                case 'HEAD':
                case 'BODY':
                    (Uf(n), Ye(n));
                    continue;
                case 'SCRIPT':
                case 'STYLE':
                    continue;
                case 'LINK':
                    if ('stylesheet' === n.rel.toLowerCase()) continue;
            }
            e.removeChild(n);
        }
    }
    function Bf(e, t) {
        for (; 8 !== e.nodeType; ) {
            if ((1 !== e.nodeType || 'INPUT' !== e.nodeName || 'hidden' !== e.type) && !t) return null;
            if (null === (e = Lf(e.nextSibling))) return null;
        }
        return e;
    }
    function jf(e) {
        return '$?' === e.data || '$~' === e.data;
    }
    function Wf(e) {
        return '$!' === e.data || ('$?' === e.data && 'loading' !== e.ownerDocument.readyState);
    }
    function Lf(e) {
        for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
                if (
                    '$' === (t = e.data) ||
                    '$!' === t ||
                    '$?' === t ||
                    '$~' === t ||
                    '&' === t ||
                    'F!' === t ||
                    'F' === t
                )
                    break;
                if ('/$' === t || '/&' === t) return null;
            }
        }
        return e;
    }
    var zf = null;
    function Rf(e) {
        e = e.nextSibling;
        for (var t = 0; e; ) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ('/$' === n || '/&' === n) {
                    if (0 === t) return Lf(e.nextSibling);
                    t--;
                } else ('$' !== n && '$!' !== n && '$?' !== n && '$~' !== n && '&' !== n) || t++;
            }
            e = e.nextSibling;
        }
        return null;
    }
    function Mf(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ('$' === n || '$!' === n || '$?' === n || '$~' === n || '&' === n) {
                    if (0 === t) return e;
                    t--;
                } else ('/$' !== n && '/&' !== n) || t++;
            }
            e = e.previousSibling;
        }
        return null;
    }
    function Df(e, t, n) {
        switch (((t = bf(n)), e)) {
            case 'html':
                if (!(e = t.documentElement)) throw Error(r(452));
                return e;
            case 'head':
                if (!(e = t.head)) throw Error(r(453));
                return e;
            case 'body':
                if (!(e = t.body)) throw Error(r(454));
                return e;
            default:
                throw Error(r(451));
        }
    }
    function If(e) {
        for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
        Ye(e);
    }
    var Vf = new Map(),
        Ff = new Set();
    function $f(e) {
        return 'function' == typeof e.getRootNode ? e.getRootNode() : 9 === e.nodeType ? e : e.ownerDocument;
    }
    var Qf = U.d;
    U.d = {
        f: function () {
            var e = Qf.f(),
                t = tc();
            return e || t;
        },
        r: function (e) {
            var t = Ze(e);
            null !== t && 5 === t.tag && 'form' === t.type ? as(t) : Qf.r(e);
        },
        D: function (e) {
            (Qf.D(e), qf('dns-prefetch', e, null));
        },
        C: function (e, t) {
            (Qf.C(e, t), qf('preconnect', e, t));
        },
        L: function (e, t, n) {
            Qf.L(e, t, n);
            var r = Hf;
            if (r && e && t) {
                var i = 'link[rel="preload"][as="' + bt(t) + '"]';
                'image' === t && n && n.imageSrcSet
                    ? ((i += '[imagesrcset="' + bt(n.imageSrcSet) + '"]'),
                      'string' == typeof n.imageSizes && (i += '[imagesizes="' + bt(n.imageSizes) + '"]'))
                    : (i += '[href="' + bt(e) + '"]');
                var a = i;
                switch (t) {
                    case 'style':
                        a = Gf(e);
                        break;
                    case 'script':
                        a = Jf(e);
                }
                Vf.has(a) ||
                    ((e = c({ rel: 'preload', href: 'image' === t && n && n.imageSrcSet ? void 0 : e, as: t }, n)),
                    Vf.set(a, e),
                    null !== r.querySelector(i) ||
                        ('style' === t && r.querySelector(Xf(a))) ||
                        ('script' === t && r.querySelector(Zf(a))) ||
                        (vf((t = r.createElement('link')), 'link', e), nt(t), r.head.appendChild(t)));
            }
        },
        m: function (e, t) {
            Qf.m(e, t);
            var n = Hf;
            if (n && e) {
                var r = t && 'string' == typeof t.as ? t.as : 'script',
                    i = 'link[rel="modulepreload"][as="' + bt(r) + '"][href="' + bt(e) + '"]',
                    a = i;
                switch (r) {
                    case 'audioworklet':
                    case 'paintworklet':
                    case 'serviceworker':
                    case 'sharedworker':
                    case 'worker':
                    case 'script':
                        a = Jf(e);
                }
                if (
                    !Vf.has(a) &&
                    ((e = c({ rel: 'modulepreload', href: e }, t)), Vf.set(a, e), null === n.querySelector(i))
                ) {
                    switch (r) {
                        case 'audioworklet':
                        case 'paintworklet':
                        case 'serviceworker':
                        case 'sharedworker':
                        case 'worker':
                        case 'script':
                            if (n.querySelector(Zf(a))) return;
                    }
                    (vf((r = n.createElement('link')), 'link', e), nt(r), n.head.appendChild(r));
                }
            }
        },
        X: function (e, t) {
            Qf.X(e, t);
            var n = Hf;
            if (n && e) {
                var r = tt(n).hoistableScripts,
                    i = Jf(e),
                    a = r.get(i);
                a ||
                    ((a = n.querySelector(Zf(i))) ||
                        ((e = c({ src: e, async: !0 }, t)),
                        (t = Vf.get(i)) && rd(e, t),
                        nt((a = n.createElement('script'))),
                        vf(a, 'link', e),
                        n.head.appendChild(a)),
                    (a = { type: 'script', instance: a, count: 1, state: null }),
                    r.set(i, a));
            }
        },
        S: function (e, t, n) {
            Qf.S(e, t, n);
            var r = Hf;
            if (r && e) {
                var i = tt(r).hoistableStyles,
                    a = Gf(e);
                t = t || 'default';
                var o = i.get(a);
                if (!o) {
                    var s = { loading: 0, preload: null };
                    if ((o = r.querySelector(Xf(a)))) s.loading = 5;
                    else {
                        ((e = c({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)), (n = Vf.get(a)) && nd(e, n));
                        var l = (o = r.createElement('link'));
                        (nt(l),
                            vf(l, 'link', e),
                            (l._p = new Promise(function (e, t) {
                                ((l.onload = e), (l.onerror = t));
                            })),
                            l.addEventListener('load', function () {
                                s.loading |= 1;
                            }),
                            l.addEventListener('error', function () {
                                s.loading |= 2;
                            }),
                            (s.loading |= 4),
                            td(o, t, r));
                    }
                    ((o = { type: 'stylesheet', instance: o, count: 1, state: s }), i.set(a, o));
                }
            }
        },
        M: function (e, t) {
            Qf.M(e, t);
            var n = Hf;
            if (n && e) {
                var r = tt(n).hoistableScripts,
                    i = Jf(e),
                    a = r.get(i);
                a ||
                    ((a = n.querySelector(Zf(i))) ||
                        ((e = c({ src: e, async: !0, type: 'module' }, t)),
                        (t = Vf.get(i)) && rd(e, t),
                        nt((a = n.createElement('script'))),
                        vf(a, 'link', e),
                        n.head.appendChild(a)),
                    (a = { type: 'script', instance: a, count: 1, state: null }),
                    r.set(i, a));
            }
        },
    };
    var Hf = 'undefined' == typeof document ? null : document;
    function qf(e, t, n) {
        var r = Hf;
        if (r && 'string' == typeof t && t) {
            var i = bt(t);
            ((i = 'link[rel="' + e + '"][href="' + i + '"]'),
                'string' == typeof n && (i += '[crossorigin="' + n + '"]'),
                Ff.has(i) ||
                    (Ff.add(i),
                    (e = { rel: e, crossOrigin: n, href: t }),
                    null === r.querySelector(i) &&
                        (vf((t = r.createElement('link')), 'link', e), nt(t), r.head.appendChild(t))));
        }
    }
    function Kf(e, t, n, i) {
        var a,
            o,
            s,
            l,
            u = (u = F.current) ? $f(u) : null;
        if (!u) throw Error(r(446));
        switch (e) {
            case 'meta':
            case 'title':
                return null;
            case 'style':
                return 'string' == typeof n.precedence && 'string' == typeof n.href
                    ? ((t = Gf(n.href)),
                      (i = (n = tt(u).hoistableStyles).get(t)) ||
                          ((i = { type: 'style', instance: null, count: 0, state: null }), n.set(t, i)),
                      i)
                    : { type: 'void', instance: null, count: 0, state: null };
            case 'link':
                if ('stylesheet' === n.rel && 'string' == typeof n.href && 'string' == typeof n.precedence) {
                    e = Gf(n.href);
                    var c = tt(u).hoistableStyles,
                        f = c.get(e);
                    if (
                        (f ||
                            ((u = u.ownerDocument || u),
                            (f = {
                                type: 'stylesheet',
                                instance: null,
                                count: 0,
                                state: { loading: 0, preload: null },
                            }),
                            c.set(e, f),
                            (c = u.querySelector(Xf(e))) && !c._p && ((f.instance = c), (f.state.loading = 5)),
                            Vf.has(e) ||
                                ((n = {
                                    rel: 'preload',
                                    as: 'style',
                                    href: n.href,
                                    crossOrigin: n.crossOrigin,
                                    integrity: n.integrity,
                                    media: n.media,
                                    hrefLang: n.hrefLang,
                                    referrerPolicy: n.referrerPolicy,
                                }),
                                Vf.set(e, n),
                                c ||
                                    ((a = u),
                                    (o = e),
                                    (s = n),
                                    (l = f.state),
                                    a.querySelector('link[rel="preload"][as="style"][' + o + ']')
                                        ? (l.loading = 1)
                                        : ((o = a.createElement('link')),
                                          (l.preload = o),
                                          o.addEventListener('load', function () {
                                              return (l.loading |= 1);
                                          }),
                                          o.addEventListener('error', function () {
                                              return (l.loading |= 2);
                                          }),
                                          vf(o, 'link', s),
                                          nt(o),
                                          a.head.appendChild(o))))),
                        t && null === i)
                    )
                        throw Error(r(528, ''));
                    return f;
                }
                if (t && null !== i) throw Error(r(529, ''));
                return null;
            case 'script':
                return (
                    (t = n.async),
                    'string' == typeof (n = n.src) && t && 'function' != typeof t && 'symbol' != typeof t
                        ? ((t = Jf(n)),
                          (i = (n = tt(u).hoistableScripts).get(t)) ||
                              ((i = { type: 'script', instance: null, count: 0, state: null }), n.set(t, i)),
                          i)
                        : { type: 'void', instance: null, count: 0, state: null }
                );
            default:
                throw Error(r(444, e));
        }
    }
    function Gf(e) {
        return 'href="' + bt(e) + '"';
    }
    function Xf(e) {
        return 'link[rel="stylesheet"][' + e + ']';
    }
    function Yf(e) {
        return c({}, e, { 'data-precedence': e.precedence, precedence: null });
    }
    function Jf(e) {
        return '[src="' + bt(e) + '"]';
    }
    function Zf(e) {
        return 'script[async]' + e;
    }
    function ed(e, t, n) {
        if ((t.count++, null === t.instance))
            switch (t.type) {
                case 'style':
                    var i = e.querySelector('style[data-href~="' + bt(n.href) + '"]');
                    if (i) return ((t.instance = i), nt(i), i);
                    var a = c({}, n, {
                        'data-href': n.href,
                        'data-precedence': n.precedence,
                        href: null,
                        precedence: null,
                    });
                    return (
                        nt((i = (e.ownerDocument || e).createElement('style'))),
                        vf(i, 'style', a),
                        td(i, n.precedence, e),
                        (t.instance = i)
                    );
                case 'stylesheet':
                    a = Gf(n.href);
                    var o = e.querySelector(Xf(a));
                    if (o) return ((t.state.loading |= 4), (t.instance = o), nt(o), o);
                    ((i = Yf(n)), (a = Vf.get(a)) && nd(i, a), nt((o = (e.ownerDocument || e).createElement('link'))));
                    var s = o;
                    return (
                        (s._p = new Promise(function (e, t) {
                            ((s.onload = e), (s.onerror = t));
                        })),
                        vf(o, 'link', i),
                        (t.state.loading |= 4),
                        td(o, n.precedence, e),
                        (t.instance = o)
                    );
                case 'script':
                    return (
                        (o = Jf(n.src)),
                        (a = e.querySelector(Zf(o)))
                            ? ((t.instance = a), nt(a), a)
                            : ((i = n),
                              (a = Vf.get(o)) && rd((i = c({}, n)), a),
                              nt((a = (e = e.ownerDocument || e).createElement('script'))),
                              vf(a, 'link', i),
                              e.head.appendChild(a),
                              (t.instance = a))
                    );
                case 'void':
                    return null;
                default:
                    throw Error(r(443, t.type));
            }
        else
            'stylesheet' === t.type &&
                !(4 & t.state.loading) &&
                ((i = t.instance), (t.state.loading |= 4), td(i, n.precedence, e));
        return t.instance;
    }
    function td(e, t, n) {
        for (
            var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
                i = r.length ? r[r.length - 1] : null,
                a = i,
                o = 0;
            o < r.length;
            o++
        ) {
            var s = r[o];
            if (s.dataset.precedence === t) a = s;
            else if (a !== i) break;
        }
        a
            ? a.parentNode.insertBefore(e, a.nextSibling)
            : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
    }
    function nd(e, t) {
        (null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.title && (e.title = t.title));
    }
    function rd(e, t) {
        (null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.integrity && (e.integrity = t.integrity));
    }
    var id = null;
    function ad(e, t, n) {
        if (null === id) {
            var r = new Map(),
                i = (id = new Map());
            i.set(n, r);
        } else (r = (i = id).get(n)) || ((r = new Map()), i.set(n, r));
        if (r.has(e)) return r;
        for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
            var a = n[i];
            if (
                !(a[Xe] || a[Fe] || ('link' === e && 'stylesheet' === a.getAttribute('rel'))) &&
                'http://www.w3.org/2000/svg' !== a.namespaceURI
            ) {
                var o = a.getAttribute(t) || '';
                o = e + o;
                var s = r.get(o);
                s ? s.push(a) : r.set(o, [a]);
            }
        }
        return r;
    }
    function od(e, t, n) {
        (e = e.ownerDocument || e).head.insertBefore(n, 'title' === t ? e.querySelector('head > title') : null);
    }
    function sd(e) {
        return !!('stylesheet' !== e.type || 3 & e.state.loading);
    }
    var ld = 0;
    function ud() {
        if ((this.count--, 0 === this.count && (0 === this.imgCount || !this.waitingForImages)))
            if (this.stylesheets) fd(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                ((this.unsuspend = null), e());
            }
    }
    var cd = null;
    function fd(e, t) {
        ((e.stylesheets = null),
            null !== e.unsuspend && (e.count++, (cd = new Map()), t.forEach(dd, e), (cd = null), ud.call(e)));
    }
    function dd(e, t) {
        if (!(4 & t.state.loading)) {
            var n = cd.get(e);
            if (n) var r = n.get(null);
            else {
                ((n = new Map()), cd.set(e, n));
                for (
                    var i = e.querySelectorAll('link[data-precedence],style[data-precedence]'), a = 0;
                    a < i.length;
                    a++
                ) {
                    var o = i[a];
                    ('LINK' !== o.nodeName && 'not all' === o.getAttribute('media')) ||
                        (n.set(o.dataset.precedence, o), (r = o));
                }
                r && n.set(null, r);
            }
            ((o = (i = t.instance).getAttribute('data-precedence')),
                (a = n.get(o) || r) === r && n.set(null, i),
                n.set(o, i),
                this.count++,
                (r = ud.bind(this)),
                i.addEventListener('load', r),
                i.addEventListener('error', r),
                a
                    ? a.parentNode.insertBefore(i, a.nextSibling)
                    : (e = 9 === e.nodeType ? e.head : e).insertBefore(i, e.firstChild),
                (t.state.loading |= 4));
        }
    }
    var hd = { $$typeof: m, Provider: null, Consumer: null, _currentValue: B, _currentValue2: B, _threadCount: 0 };
    function pd(e, t, n, r, i, a, o, s, l) {
        ((this.tag = 1),
            (this.containerInfo = e),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
            (this.callbackPriority = 0),
            (this.expirationTimes = Be(-1)),
            (this.entangledLanes =
                this.shellSuspendCounter =
                this.errorRecoveryDisabledLanes =
                this.expiredLanes =
                this.warmLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = Be(0)),
            (this.hiddenUpdates = Be(null)),
            (this.identifierPrefix = r),
            (this.onUncaughtError = i),
            (this.onCaughtError = a),
            (this.onRecoverableError = o),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = l),
            (this.incompleteTransitions = new Map()));
    }
    function vd(e, t, n, r, i, a, o, s, l, u, c, f) {
        return (
            (e = new pd(e, t, n, o, l, u, c, f, s)),
            (t = 1),
            !0 === a && (t |= 24),
            (a = Dr(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (t = Ii()).refCount++,
            (e.pooledCache = t),
            t.refCount++,
            (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
            ma(a),
            e
        );
    }
    function yd(e) {
        return e ? (e = Rr) : Rr;
    }
    function gd(e, t, n, r, i, a) {
        ((i = yd(i)),
            null === r.context ? (r.context = i) : (r.pendingContext = i),
            ((r = _a(t)).payload = { element: n }),
            null !== (a = void 0 === a ? null : a) && (r.callback = a),
            null !== (n = wa(e, r, t)) && (Xu(n, 0, t), Sa(n, e, t)));
    }
    function md(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
        }
    }
    function bd(e, t) {
        (md(e, t), (e = e.alternate) && md(e, t));
    }
    function _d(e) {
        if (13 === e.tag || 31 === e.tag) {
            var t = Wr(e, 67108864);
            (null !== t && Xu(t, 0, 67108864), bd(e, 67108864));
        }
    }
    function wd(e) {
        if (13 === e.tag || 31 === e.tag) {
            var t = Ku(),
                n = Wr(e, (t = Re(t)));
            (null !== n && Xu(n, 0, t), bd(e, t));
        }
    }
    var Sd = !0;
    function kd(e, t, n, r) {
        var i = N.T;
        N.T = null;
        var a = U.p;
        try {
            ((U.p = 2), Ed(e, t, n, r));
        } finally {
            ((U.p = a), (N.T = i));
        }
    }
    function xd(e, t, n, r) {
        var i = N.T;
        N.T = null;
        var a = U.p;
        try {
            ((U.p = 8), Ed(e, t, n, r));
        } finally {
            ((U.p = a), (N.T = i));
        }
    }
    function Ed(e, t, n, r) {
        if (Sd) {
            var i = Od(r);
            if (null === i) (rf(e, t, r, Pd, n), Rd(e, r));
            else if (
                (function (e, t, n, r, i) {
                    switch (t) {
                        case 'focusin':
                            return ((Nd = Md(Nd, e, t, n, r, i)), !0);
                        case 'dragenter':
                            return ((Ud = Md(Ud, e, t, n, r, i)), !0);
                        case 'mouseover':
                            return ((Bd = Md(Bd, e, t, n, r, i)), !0);
                        case 'pointerover':
                            var a = i.pointerId;
                            return (jd.set(a, Md(jd.get(a) || null, e, t, n, r, i)), !0);
                        case 'gotpointercapture':
                            return ((a = i.pointerId), Wd.set(a, Md(Wd.get(a) || null, e, t, n, r, i)), !0);
                    }
                    return !1;
                })(i, e, t, n, r)
            )
                r.stopPropagation();
            else if ((Rd(e, r), 4 & t && -1 < zd.indexOf(e))) {
                for (; null !== i; ) {
                    var a = Ze(i);
                    if (null !== a)
                        switch (a.tag) {
                            case 3:
                                if ((a = a.stateNode).current.memoizedState.isDehydrated) {
                                    var o = Te(a.pendingLanes);
                                    if (0 !== o) {
                                        var s = a;
                                        for (s.pendingLanes |= 2, s.entangledLanes |= 2; o; ) {
                                            var l = 1 << (31 - Se(o));
                                            ((s.entanglements[1] |= l), (o &= ~l));
                                        }
                                        (zc(a), !(6 & vu) && ((Lu = ce() + 500), Rc(0)));
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                (null !== (s = Wr(a, 2)) && Xu(s, 0, 2), tc(), bd(a, 2));
                        }
                    if ((null === (a = Od(r)) && rf(e, t, r, Pd, n), a === i)) break;
                    i = a;
                }
                null !== i && r.stopPropagation();
            } else rf(e, t, r, null, n);
        }
    }
    function Od(e) {
        return Td((e = Lt(e)));
    }
    var Pd = null;
    function Td(e) {
        if (((Pd = null), null !== (e = Je(e)))) {
            var t = a(e);
            if (null === t) e = null;
            else {
                var n = t.tag;
                if (13 === n) {
                    if (null !== (e = o(t))) return e;
                    e = null;
                } else if (31 === n) {
                    if (null !== (e = s(t))) return e;
                    e = null;
                } else if (3 === n) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return 3 === t.tag ? t.stateNode.containerInfo : null;
                    e = null;
                } else t !== e && (e = null);
            }
        }
        return ((Pd = e), null);
    }
    function Cd(e) {
        switch (e) {
            case 'beforetoggle':
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
            case 'toggle':
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
                return 2;
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
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
                return 8;
            case 'message':
                switch (fe()) {
                    case de:
                        return 2;
                    case he:
                        return 8;
                    case pe:
                    case ve:
                        return 32;
                    case ye:
                        return 268435456;
                    default:
                        return 32;
                }
            default:
                return 32;
        }
    }
    var Ad = !1,
        Nd = null,
        Ud = null,
        Bd = null,
        jd = new Map(),
        Wd = new Map(),
        Ld = [],
        zd =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
                ' ',
            );
    function Rd(e, t) {
        switch (e) {
            case 'focusin':
            case 'focusout':
                Nd = null;
                break;
            case 'dragenter':
            case 'dragleave':
                Ud = null;
                break;
            case 'mouseover':
            case 'mouseout':
                Bd = null;
                break;
            case 'pointerover':
            case 'pointerout':
                jd.delete(t.pointerId);
                break;
            case 'gotpointercapture':
            case 'lostpointercapture':
                Wd.delete(t.pointerId);
        }
    }
    function Md(e, t, n, r, i, a) {
        return null === e || e.nativeEvent !== a
            ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }),
              null !== t && null !== (t = Ze(t)) && _d(t),
              e)
            : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== i && -1 === t.indexOf(i) && t.push(i), e);
    }
    function Dd(e) {
        var t = Je(e.target);
        if (null !== t) {
            var n = a(t);
            if (null !== n)
                if (13 === (t = n.tag)) {
                    if (null !== (t = o(n)))
                        return (
                            (e.blockedOn = t),
                            void Ie(e.priority, function () {
                                wd(n);
                            })
                        );
                } else if (31 === t) {
                    if (null !== (t = s(n)))
                        return (
                            (e.blockedOn = t),
                            void Ie(e.priority, function () {
                                wd(n);
                            })
                        );
                } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                    return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
    }
    function Id(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Od(e.nativeEvent);
            if (null !== n) return (null !== (t = Ze(n)) && _d(t), (e.blockedOn = n), !1);
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            ((Wt = r), n.target.dispatchEvent(r), (Wt = null), t.shift());
        }
        return !0;
    }
    function Vd(e, t, n) {
        Id(e) && n.delete(t);
    }
    function Fd() {
        ((Ad = !1),
            null !== Nd && Id(Nd) && (Nd = null),
            null !== Ud && Id(Ud) && (Ud = null),
            null !== Bd && Id(Bd) && (Bd = null),
            jd.forEach(Vd),
            Wd.forEach(Vd));
    }
    function $d(t, n) {
        t.blockedOn === n &&
            ((t.blockedOn = null), Ad || ((Ad = !0), e.unstable_scheduleCallback(e.unstable_NormalPriority, Fd)));
    }
    var Qd = null;
    function Hd(t) {
        Qd !== t &&
            ((Qd = t),
            e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
                Qd === t && (Qd = null);
                for (var e = 0; e < t.length; e += 3) {
                    var n = t[e],
                        r = t[e + 1],
                        i = t[e + 2];
                    if ('function' != typeof r) {
                        if (null === Td(r || n)) continue;
                        break;
                    }
                    var a = Ze(n);
                    null !== a &&
                        (t.splice(e, 3), (e -= 3), rs(a, { pending: !0, data: i, method: n.method, action: r }, r, i));
                }
            }));
    }
    function qd(e) {
        function t(t) {
            return $d(t, e);
        }
        (null !== Nd && $d(Nd, e), null !== Ud && $d(Ud, e), null !== Bd && $d(Bd, e), jd.forEach(t), Wd.forEach(t));
        for (var n = 0; n < Ld.length; n++) {
            var r = Ld[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
        for (; 0 < Ld.length && null === (n = Ld[0]).blockedOn; ) (Dd(n), null === n.blockedOn && Ld.shift());
        if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
                var i = n[r],
                    a = n[r + 1],
                    o = i[$e] || null;
                if ('function' == typeof a) o || Hd(n);
                else if (o) {
                    var s = null;
                    if (a && a.hasAttribute('formAction')) {
                        if (((i = a), (o = a[$e] || null))) s = o.formAction;
                        else if (null !== Td(i)) continue;
                    } else s = o.action;
                    ('function' == typeof s ? (n[r + 1] = s) : (n.splice(r, 3), (r -= 3)), Hd(n));
                }
            }
    }
    function Kd() {
        function e(e) {
            e.canIntercept &&
                'react-transition' === e.info &&
                e.intercept({
                    handler: function () {
                        return new Promise(function (e) {
                            return (i = e);
                        });
                    },
                    focusReset: 'manual',
                    scroll: 'manual',
                });
        }
        function t() {
            (null !== i && (i(), (i = null)), r || setTimeout(n, 20));
        }
        function n() {
            if (!r && !navigation.transition) {
                var e = navigation.currentEntry;
                e &&
                    null != e.url &&
                    navigation.navigate(e.url, { state: e.getState(), info: 'react-transition', history: 'replace' });
            }
        }
        if ('object' == typeof navigation) {
            var r = !1,
                i = null;
            return (
                navigation.addEventListener('navigate', e),
                navigation.addEventListener('navigatesuccess', t),
                navigation.addEventListener('navigateerror', t),
                setTimeout(n, 100),
                function () {
                    ((r = !0),
                        navigation.removeEventListener('navigate', e),
                        navigation.removeEventListener('navigatesuccess', t),
                        navigation.removeEventListener('navigateerror', t),
                        null !== i && (i(), (i = null)));
                }
            );
        }
    }
    function Gd(e) {
        this._internalRoot = e;
    }
    function Xd(e) {
        this._internalRoot = e;
    }
    ((Xd.prototype.render = Gd.prototype.render =
        function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(r(409));
            gd(t.current, Ku(), e, t, null, null);
        }),
        (Xd.prototype.unmount = Gd.prototype.unmount =
            function () {
                var e = this._internalRoot;
                if (null !== e) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    (gd(e.current, 2, null, e, null, null), tc(), (t[Qe] = null));
                }
            }),
        (Xd.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
                var t = De();
                e = { blockedOn: null, target: e, priority: t };
                for (var n = 0; n < Ld.length && 0 !== t && t < Ld[n].priority; n++);
                (Ld.splice(n, 0, e), 0 === n && Dd(e));
            }
        }));
    var Yd = t.version;
    if ('19.2.3' !== Yd) throw Error(r(527, Yd, '19.2.3'));
    U.findDOMNode = function (e) {
        var t = e._reactInternals;
        if (void 0 === t) {
            if ('function' == typeof e.render) throw Error(r(188));
            throw ((e = Object.keys(e).join(',')), Error(r(268, e)));
        }
        return (
            (e = (function (e) {
                var t = e.alternate;
                if (!t) {
                    if (null === (t = a(e))) throw Error(r(188));
                    return t !== e ? null : e;
                }
                for (var n = e, i = t; ; ) {
                    var o = n.return;
                    if (null === o) break;
                    var s = o.alternate;
                    if (null === s) {
                        if (null !== (i = o.return)) {
                            n = i;
                            continue;
                        }
                        break;
                    }
                    if (o.child === s.child) {
                        for (s = o.child; s; ) {
                            if (s === n) return (l(o), e);
                            if (s === i) return (l(o), t);
                            s = s.sibling;
                        }
                        throw Error(r(188));
                    }
                    if (n.return !== i.return) ((n = o), (i = s));
                    else {
                        for (var u = !1, c = o.child; c; ) {
                            if (c === n) {
                                ((u = !0), (n = o), (i = s));
                                break;
                            }
                            if (c === i) {
                                ((u = !0), (i = o), (n = s));
                                break;
                            }
                            c = c.sibling;
                        }
                        if (!u) {
                            for (c = s.child; c; ) {
                                if (c === n) {
                                    ((u = !0), (n = s), (i = o));
                                    break;
                                }
                                if (c === i) {
                                    ((u = !0), (i = s), (n = o));
                                    break;
                                }
                                c = c.sibling;
                            }
                            if (!u) throw Error(r(189));
                        }
                    }
                    if (n.alternate !== i) throw Error(r(190));
                }
                if (3 !== n.tag) throw Error(r(188));
                return n.stateNode.current === n ? e : t;
            })(t)),
            (e = null === (e = null !== e ? u(e) : null) ? null : e.stateNode)
        );
    };
    var Jd = {
        bundleType: 0,
        version: '19.2.3',
        rendererPackageName: 'react-dom',
        currentDispatcherRef: N,
        reconcilerVersion: '19.2.3',
    };
    if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var Zd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Zd.isDisabled && Zd.supportsFiber)
            try {
                ((be = Zd.inject(Jd)), (_e = Zd));
            } catch (th) {}
    }
    return (
        (Y.createRoot = function (e, t) {
            if (!i(e)) throw Error(r(299));
            var n = !1,
                a = '',
                o = Os,
                s = Ps,
                l = Ts;
            return (
                null != t &&
                    (!0 === t.unstable_strictMode && (n = !0),
                    void 0 !== t.identifierPrefix && (a = t.identifierPrefix),
                    void 0 !== t.onUncaughtError && (o = t.onUncaughtError),
                    void 0 !== t.onCaughtError && (s = t.onCaughtError),
                    void 0 !== t.onRecoverableError && (l = t.onRecoverableError)),
                (t = vd(e, 1, !1, null, 0, n, a, null, o, s, l, Kd)),
                (e[Qe] = t.current),
                tf(e),
                new Gd(t)
            );
        }),
        (Y.hydrateRoot = function (e, t, n) {
            if (!i(e)) throw Error(r(299));
            var a = !1,
                o = '',
                s = Os,
                l = Ps,
                u = Ts,
                c = null;
            return (
                null != n &&
                    (!0 === n.unstable_strictMode && (a = !0),
                    void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                    void 0 !== n.onUncaughtError && (s = n.onUncaughtError),
                    void 0 !== n.onCaughtError && (l = n.onCaughtError),
                    void 0 !== n.onRecoverableError && (u = n.onRecoverableError),
                    void 0 !== n.formState && (c = n.formState)),
                ((t = vd(e, 1, !0, t, 0, a, o, c, s, l, u, Kd)).context = yd(null)),
                (n = t.current),
                ((o = _a((a = Re((a = Ku()))))).callback = null),
                wa(n, o, a),
                (n = a),
                (t.current.lanes = n),
                je(t, n),
                zc(t),
                (e[Qe] = t.current),
                tf(e),
                new Xd(t)
            );
        }),
        (Y.version = '19.2.3'),
        Y
    );
}
const ce = e(
    (ie ||
        ((ie = 1),
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
        (X.exports = ue())),
    X.exports),
);
function fe(e) {
    var t,
        n,
        r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++) e[t] && (n = fe(e[t])) && (r && (r += ' '), (r += n));
        } else for (n in e) e[n] && (r && (r += ' '), (r += n));
    return r;
}
function de() {
    for (var e, t, n = 0, r = '', i = arguments.length; n < i; n++)
        (e = arguments[n]) && (t = fe(e)) && (r && (r += ' '), (r += t));
    return r;
}
function he(e) {
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
var pe = {};
function ve() {
    return 'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : pe;
}
var ye = Object.assign,
    ge = Object.getOwnPropertyDescriptor,
    me = Object.defineProperty,
    be = Object.prototype,
    _e = [];
Object.freeze(_e);
var we = {};
Object.freeze(we);
var Se = 'undefined' != typeof Proxy,
    ke = Object.toString();
function xe() {
    Se || he('Proxy not available');
}
function Ee(e) {
    var t = !1;
    return function () {
        if (!t) return ((t = !0), e.apply(this, arguments));
    };
}
var Oe = function () {};
function Pe(e) {
    return 'function' == typeof e;
}
function Te(e) {
    switch (typeof e) {
        case 'string':
        case 'symbol':
        case 'number':
            return !0;
    }
    return !1;
}
function Ce(e) {
    return null !== e && 'object' == typeof e;
}
function Ae(e) {
    if (!Ce(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (null == t) return !0;
    var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n.toString() === ke;
}
function Ne(e) {
    var t = null == e ? void 0 : e.constructor;
    return !!t && ('GeneratorFunction' === t.name || 'GeneratorFunction' === t.displayName);
}
function Ue(e, t, n) {
    me(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function Be(e, t, n) {
    me(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function je(e, t) {
    var n = 'isMobX' + e;
    return (
        (t.prototype[n] = !0),
        function (e) {
            return Ce(e) && !0 === e[n];
        }
    );
}
function We(e) {
    return null != e && '[object Map]' === Object.prototype.toString.call(e);
}
function Le(e) {
    return null != e && '[object Set]' === Object.prototype.toString.call(e);
}
var ze = void 0 !== Object.getOwnPropertySymbols;
var Re =
    'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : ze
          ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            }
          : Object.getOwnPropertyNames;
function Me(e) {
    return null === e ? null : 'object' == typeof e ? '' + e : e;
}
function De(e, t) {
    return be.hasOwnProperty.call(e, t);
}
var Ie =
    Object.getOwnPropertyDescriptors ||
    function (e) {
        var t = {};
        return (
            Re(e).forEach(function (n) {
                t[n] = ge(e, n);
            }),
            t
        );
    };
function Ve(e, t) {
    return !!(e & t);
}
function Fe(e, t, n) {
    return (n ? (e |= t) : (e &= ~t), e);
}
function $e(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function Qe(e, t, n) {
    return (
        t &&
            (function (e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(e, Xe(r.key), r));
                }
            })(e.prototype, t),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function He(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
        Array.isArray(e) ||
        (n = (function (e, t) {
            if (e) {
                if ('string' == typeof e) return $e(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? $e(e, t)
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
function qe() {
    return (
        (qe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        qe.apply(null, arguments)
    );
}
function Ke(e, t) {
    ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Ge(e, t));
}
function Ge(e, t) {
    return (Ge = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return ((e.__proto__ = t), e);
          })(e, t);
}
function Xe(e) {
    var t = (function (e, t) {
        if ('object' != typeof e || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t);
            if ('object' != typeof r) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return String(e);
    })(e, 'string');
    return 'symbol' == typeof t ? t : t + '';
}
var Ye = Symbol('mobx-stored-annotations');
function Je(e) {
    return Object.assign(function (t, n) {
        if (et(n)) return e.decorate_20223_(t, n);
        Ze(t, n, e);
    }, e);
}
function Ze(e, t, n) {
    (De(e, Ye) || Ue(e, Ye, qe({}, e[Ye])),
        (function (e) {
            return e.annotationType_ === lt;
        })(n) || (e[Ye][t] = n));
}
function et(e) {
    return 'object' == typeof e && 'string' == typeof e.kind;
}
var tt = Symbol('mobx administration'),
    nt = (function () {
        function e(e) {
            (void 0 === e && (e = 'Atom'),
                (this.name_ = void 0),
                (this.flags_ = 0),
                (this.observers_ = new Set()),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = sn.NOT_TRACKING_),
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
                return Un(this);
            }),
            (t.reportChanged = function () {
                (An(), Bn(this), Nn());
            }),
            (t.toString = function () {
                return this.name_;
            }),
            Qe(e, [
                {
                    key: 'isBeingObserved',
                    get: function () {
                        return Ve(this.flags_, e.isBeingObservedMask_);
                    },
                    set: function (t) {
                        this.flags_ = Fe(this.flags_, e.isBeingObservedMask_, t);
                    },
                },
                {
                    key: 'isPendingUnobservation',
                    get: function () {
                        return Ve(this.flags_, e.isPendingUnobservationMask_);
                    },
                    set: function (t) {
                        this.flags_ = Fe(this.flags_, e.isPendingUnobservationMask_, t);
                    },
                },
                {
                    key: 'diffValue',
                    get: function () {
                        return Ve(this.flags_, e.diffValueMask_) ? 1 : 0;
                    },
                    set: function (t) {
                        this.flags_ = Fe(this.flags_, e.diffValueMask_, 1 === t);
                    },
                },
            ])
        );
    })();
((nt.isBeingObservedMask_ = 1), (nt.isPendingUnobservationMask_ = 2), (nt.diffValueMask_ = 4));
var rt = je('Atom', nt);
function it(e, t, n) {
    (void 0 === t && (t = Oe), void 0 === n && (n = Oe));
    var r,
        i = new nt(e);
    return (t !== Oe && ir(tr, i, t, r), n !== Oe && rr(i, n), i);
}
var at = {
    structural: function (e, t) {
        return ki(e, t);
    },
    default: function (e, t) {
        return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
};
function ot(e, t, n) {
    return mr(e)
        ? e
        : Array.isArray(e)
          ? Qt.array(e, { name: n })
          : Ae(e)
            ? Qt.object(e, void 0, { name: n })
            : We(e)
              ? Qt.map(e, { name: n })
              : Le(e)
                ? Qt.set(e, { name: n })
                : 'function' != typeof e || Xn(e) || vr(e)
                  ? e
                  : Ne(e)
                    ? hr(e)
                    : Gn(n, e);
}
function st(e) {
    return e;
}
var lt = 'override';
function ut(e, t) {
    return { annotationType_: e, options_: t, make_: ct, extend_: ft, decorate_20223_: dt };
}
function ct(e, t, n, r) {
    var i;
    if (null != (i = this.options_) && i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (Xn(n.value)) return 1;
    var a = ht(e, this, t, n, !1);
    return (me(r, t, a), 2);
}
function ft(e, t, n, r) {
    var i = ht(e, this, t, n);
    return e.defineProperty_(t, i, r);
}
function dt(e, t) {
    var n,
        r = t.kind,
        i = t.name,
        a = t.addInitializer,
        o = this,
        s = function (e) {
            var t, n, r, a;
            return en(
                null != (t = null == (n = o.options_) ? void 0 : n.name) ? t : i.toString(),
                e,
                null != (r = null == (a = o.options_) ? void 0 : a.autoAction) && r,
            );
        };
    return 'field' == r
        ? function (e) {
              var t,
                  n = e;
              return (
                  Xn(n) || (n = s(n)),
                  null != (t = o.options_) && t.bound && ((n = n.bind(this)).isMobxAction = !0),
                  n
              );
          }
        : 'method' == r
          ? (Xn(e) || (e = s(e)),
            null != (n = this.options_) &&
                n.bound &&
                a(function () {
                    var e = this,
                        t = e[i].bind(e);
                    ((t.isMobxAction = !0), (e[i] = t));
                }),
            e)
          : void he(
                "Cannot apply '" +
                    o.annotationType_ +
                    "' to '" +
                    String(i) +
                    "' (kind: " +
                    r +
                    "):\n'" +
                    o.annotationType_ +
                    "' can only be used on properties with a function value.",
            );
}
function ht(e, t, n, r, i) {
    var a, o, s, l, u, c, f, d;
    (void 0 === i && (i = On.safeDescriptors), (d = r), t.annotationType_, d.value);
    var h,
        p = r.value;
    null != (a = t.options_) && a.bound && (p = p.bind(null != (h = e.proxy_) ? h : e.target_));
    return {
        value: en(
            null != (o = null == (s = t.options_) ? void 0 : s.name) ? o : n.toString(),
            p,
            null != (l = null == (u = t.options_) ? void 0 : u.autoAction) && l,
            null != (c = t.options_) && c.bound ? (null != (f = e.proxy_) ? f : e.target_) : void 0,
        ),
        configurable: !i || e.isPlainObject_,
        enumerable: !1,
        writable: !i,
    };
}
function pt(e, t) {
    return { annotationType_: e, options_: t, make_: vt, extend_: yt, decorate_20223_: gt };
}
function vt(e, t, n, r) {
    var i;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (
        null != (i = this.options_) &&
        i.bound &&
        (!De(e.target_, t) || !vr(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
    )
        return 0;
    if (vr(n.value)) return 1;
    var a = mt(e, this, t, n, !1, !1);
    return (me(r, t, a), 2);
}
function yt(e, t, n, r) {
    var i,
        a = mt(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
    return e.defineProperty_(t, a, r);
}
function gt(e, t) {
    var n,
        r = t.name,
        i = t.addInitializer;
    return (
        vr(e) || (e = hr(e)),
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
function mt(e, t, n, r, i, a) {
    var o;
    (void 0 === a && (a = On.safeDescriptors), (o = r), t.annotationType_, o.value);
    var s,
        l = r.value;
    (vr(l) || (l = hr(l)), i) && ((l = l.bind(null != (s = e.proxy_) ? s : e.target_)).isMobXFlow = !0);
    return { value: l, configurable: !a || e.isPlainObject_, enumerable: !1, writable: !a };
}
function bt(e, t) {
    return { annotationType_: e, options_: t, make_: _t, extend_: wt, decorate_20223_: St };
}
function _t(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function wt(e, t, n, r) {
    var i;
    return (
        (i = n),
        this.annotationType_,
        i.get,
        e.defineComputedProperty_(t, qe({}, this.options_, { get: n.get, set: n.set }), r)
    );
}
function St(e, t) {
    var n = this,
        r = t.name;
    return (
        (0, t.addInitializer)(function () {
            var t = ti(this)[tt],
                i = qe({}, n.options_, { get: e, context: this });
            (i.name || (i.name = 'ObservableObject.' + r.toString()), t.values_.set(r, new on(i)));
        }),
        function () {
            return this[tt].getObservablePropValue_(r);
        }
    );
}
function kt(e, t) {
    return { annotationType_: e, options_: t, make_: xt, extend_: Et, decorate_20223_: Ot };
}
function xt(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
}
function Et(e, t, n, r) {
    var i, a;
    return (
        this.annotationType_,
        e.defineObservableProperty_(
            t,
            n.value,
            null != (i = null == (a = this.options_) ? void 0 : a.enhancer) ? i : ot,
            r,
        )
    );
}
function Ot(e, t) {
    var n = this,
        r = t.kind,
        i = t.name,
        a = new WeakSet();
    function o(e, t) {
        var r,
            o,
            s = ti(e)[tt],
            l = new an(
                t,
                null != (r = null == (o = n.options_) ? void 0 : o.enhancer) ? r : ot,
                'ObservableObject.' + i.toString(),
                !1,
            );
        (s.values_.set(i, l), a.add(e));
    }
    if ('accessor' == r)
        return {
            get: function () {
                return (a.has(this) || o(this, e.get.call(this)), this[tt].getObservablePropValue_(i));
            },
            set: function (e) {
                return (a.has(this) || o(this, e), this[tt].setObservablePropValue_(i, e));
            },
            init: function (e) {
                return (a.has(this) || o(this, e), e);
            },
        };
}
var Pt = 'true',
    Tt = Ct();
function Ct(e) {
    return { annotationType_: Pt, options_: e, make_: At, extend_: Nt, decorate_20223_: Ut };
}
function At(e, t, n, r) {
    var i, a, o, s;
    if (n.get) return Gt.make_(e, t, n, r);
    if (n.set) {
        var l = Xn(n.set) ? n.set : en(t.toString(), n.set);
        return r === e.target_
            ? null === e.defineProperty_(t, { configurable: !On.safeDescriptors || e.isPlainObject_, set: l })
                ? 0
                : 2
            : (me(r, t, { configurable: !0, set: l }), 2);
    }
    if (r !== e.target_ && 'function' == typeof n.value)
        return Ne(n.value)
            ? (null != (s = this.options_) && s.autoBind ? hr.bound : hr).make_(e, t, n, r)
            : (null != (o = this.options_) && o.autoBind ? Gn.bound : Gn).make_(e, t, n, r);
    var u,
        c = !1 === (null == (i = this.options_) ? void 0 : i.deep) ? Qt.ref : Qt;
    'function' == typeof n.value &&
        null != (a = this.options_) &&
        a.autoBind &&
        (n.value = n.value.bind(null != (u = e.proxy_) ? u : e.target_));
    return c.make_(e, t, n, r);
}
function Nt(e, t, n, r) {
    var i, a, o;
    if (n.get) return Gt.extend_(e, t, n, r);
    if (n.set)
        return e.defineProperty_(
            t,
            { configurable: !On.safeDescriptors || e.isPlainObject_, set: en(t.toString(), n.set) },
            r,
        );
    'function' == typeof n.value &&
        null != (i = this.options_) &&
        i.autoBind &&
        (n.value = n.value.bind(null != (o = e.proxy_) ? o : e.target_));
    return (!1 === (null == (a = this.options_) ? void 0 : a.deep) ? Qt.ref : Qt).extend_(e, t, n, r);
}
function Ut(e, t) {
    he("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Bt = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
function jt(e) {
    return e || Bt;
}
Object.freeze(Bt);
var Wt = kt('observable'),
    Lt = kt('observable.ref', { enhancer: st }),
    zt = kt('observable.shallow', {
        enhancer: function (e, t, n) {
            return null == e || ii(e) || Ir(e) || Hr(e) || Xr(e)
                ? e
                : Array.isArray(e)
                  ? Qt.array(e, { name: n, deep: !1 })
                  : Ae(e)
                    ? Qt.object(e, void 0, { name: n, deep: !1 })
                    : We(e)
                      ? Qt.map(e, { name: n, deep: !1 })
                      : Le(e)
                        ? Qt.set(e, { name: n, deep: !1 })
                        : void 0;
        },
    }),
    Rt = kt('observable.struct', {
        enhancer: function (e, t) {
            return ki(e, t) ? t : e;
        },
    }),
    Mt = Je(Wt);
function Dt(e) {
    return !0 === e.deep
        ? ot
        : !1 === e.deep
          ? st
          : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
            ? n
            : ot;
    var t, n, r;
}
function It(e, t, n) {
    return et(t)
        ? Wt.decorate_20223_(e, t)
        : Te(t)
          ? void Ze(e, t, Wt)
          : mr(e)
            ? e
            : Ae(e)
              ? Qt.object(e, t, n)
              : Array.isArray(e)
                ? Qt.array(e, t)
                : We(e)
                  ? Qt.map(e, t)
                  : Le(e)
                    ? Qt.set(e, t)
                    : 'object' == typeof e && null !== e
                      ? e
                      : Qt.box(e, t);
}
ye(It, Mt);
var Vt,
    Ft,
    $t = {
        box: function (e, t) {
            var n = jt(t);
            return new an(e, Dt(n), n.name, !0, n.equals);
        },
        array: function (e, t) {
            var n = jt(t);
            return (!1 === On.useProxies || !1 === n.proxy ? yi : jr)(e, Dt(n), n.name);
        },
        map: function (e, t) {
            var n = jt(t);
            return new Qr(e, Dt(n), n.name);
        },
        set: function (e, t) {
            var n = jt(t);
            return new Gr(e, Dt(n), n.name);
        },
        object: function (e, t, n) {
            return _i(function () {
                return sr(
                    !1 === On.useProxies || !1 === (null == n ? void 0 : n.proxy)
                        ? ti({}, n)
                        : (function (e, t) {
                              var n, r;
                              return (
                                  xe(),
                                  (e = ti(e, t)),
                                  null != (r = (n = e[tt]).proxy_) ? r : (n.proxy_ = new Proxy(e, Sr))
                              );
                          })({}, n),
                    e,
                    t,
                );
            });
        },
        ref: Je(Lt),
        shallow: Je(zt),
        deep: Mt,
        struct: Je(Rt),
    },
    Qt = ye(It, $t),
    Ht = 'computed',
    qt = bt(Ht),
    Kt = bt('computed.struct', { equals: at.structural }),
    Gt = function (e, t) {
        if (et(t)) return qt.decorate_20223_(e, t);
        if (Te(t)) return Ze(e, t, qt);
        if (Ae(e)) return Je(bt(Ht, e));
        var n = Ae(t) ? t : {};
        return ((n.get = e), n.name || (n.name = e.name || ''), new on(n));
    };
(Object.assign(Gt, qt), (Gt.struct = Je(Kt)));
var Xt = 0,
    Yt = 1,
    Jt = null != (Vt = null == (Ft = ge(function () {}, 'name')) ? void 0 : Ft.configurable) && Vt,
    Zt = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
function en(e, t, n, r) {
    function i() {
        return tn(e, n, t, r || this, arguments);
    }
    return (
        void 0 === n && (n = !1),
        (i.isMobxAction = !0),
        (i.toString = function () {
            return t.toString();
        }),
        Jt && ((Zt.value = e), me(i, 'name', Zt)),
        i
    );
}
function tn(e, t, n, r, i) {
    var a = (function (e, t) {
        var n = !1,
            r = 0,
            i = On.trackingDerivation,
            a = !t || !i;
        An();
        var o = On.allowStateChanges;
        a && (mn(), (o = nn(!0)));
        var s = _n(!0),
            l = {
                runAsAction_: a,
                prevDerivation_: i,
                prevAllowStateChanges_: o,
                prevAllowStateReads_: s,
                notifySpy_: n,
                startTime_: r,
                actionId_: Yt++,
                parentActionId_: Xt,
            };
        return ((Xt = l.actionId_), l);
    })(0, t);
    try {
        return n.apply(r, i);
    } catch (o) {
        throw ((a.error_ = o), o);
    } finally {
        !(function (e) {
            Xt !== e.actionId_ && he(30);
            ((Xt = e.parentActionId_), void 0 !== e.error_ && (On.suppressReactionErrors = !0));
            (rn(e.prevAllowStateChanges_), wn(e.prevAllowStateReads_), Nn(), e.runAsAction_ && bn(e.prevDerivation_));
            On.suppressReactionErrors = !1;
        })(a);
    }
}
function nn(e) {
    var t = On.allowStateChanges;
    return ((On.allowStateChanges = e), t);
}
function rn(e) {
    On.allowStateChanges = e;
}
var an = (function (e) {
        function t(t, n, r, i, a) {
            var o;
            return (
                void 0 === r && (r = 'ObservableValue'),
                void 0 === a && (a = at.default),
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
        Ke(t, e);
        var n = t.prototype;
        return (
            (n.dehanceValue = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
                (this.value_, (e = this.prepareNewValue_(e)) !== On.UNCHANGED && this.setNewValue_(e));
            }),
            (n.prepareNewValue_ = function (e) {
                if (kr(this)) {
                    var t = Er(this, { object: this, type: Nr, newValue: e });
                    if (!t) return On.UNCHANGED;
                    e = t.newValue;
                }
                return (
                    (e = this.enhancer(e, this.value_, this.name_)),
                    this.equals(this.value_, e) ? On.UNCHANGED : e
                );
            }),
            (n.setNewValue_ = function (e) {
                var t = this.value_;
                ((this.value_ = e),
                    this.reportChanged(),
                    Or(this) && Tr(this, { type: Nr, object: this, newValue: e, oldValue: t }));
            }),
            (n.get = function () {
                return (this.reportObserved(), this.dehanceValue(this.value_));
            }),
            (n.intercept_ = function (e) {
                return xr(this, e);
            }),
            (n.observe_ = function (e, t) {
                return (
                    t &&
                        e({
                            observableKind: 'value',
                            debugObjectName: this.name_,
                            object: this,
                            type: Nr,
                            newValue: this.value_,
                            oldValue: void 0,
                        }),
                    Pr(this, e)
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
                return Me(this.get());
            }),
            (n[Symbol.toPrimitive] = function () {
                return this.valueOf();
            }),
            t
        );
    })(nt),
    on = (function () {
        function e(e) {
            ((this.dependenciesState_ = sn.NOT_TRACKING_),
                (this.observing_ = []),
                (this.newObserving_ = null),
                (this.observers_ = new Set()),
                (this.runId_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = sn.UP_TO_DATE_),
                (this.unboundDepsCount_ = 0),
                (this.value_ = new dn(null)),
                (this.name_ = void 0),
                (this.triggeredBy_ = void 0),
                (this.flags_ = 0),
                (this.derivation = void 0),
                (this.setter_ = void 0),
                (this.isTracing_ = un.NONE),
                (this.scope_ = void 0),
                (this.equals_ = void 0),
                (this.requiresReaction_ = void 0),
                (this.keepAlive_ = void 0),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                e.get || he(31),
                (this.derivation = e.get),
                (this.name_ = e.name || 'ComputedValue'),
                e.set && (this.setter_ = en('ComputedValue-setter', e.set)),
                (this.equals_ = e.equals || (e.compareStructural || e.struct ? at.structural : at.default)),
                (this.scope_ = e.context),
                (this.requiresReaction_ = e.requiresReaction),
                (this.keepAlive_ = !!e.keepAlive));
        }
        var t = e.prototype;
        return (
            (t.onBecomeStale_ = function () {
                !(function (e) {
                    if (e.lowestObserverState_ !== sn.UP_TO_DATE_) return;
                    ((e.lowestObserverState_ = sn.POSSIBLY_STALE_),
                        e.observers_.forEach(function (e) {
                            e.dependenciesState_ === sn.UP_TO_DATE_ &&
                                ((e.dependenciesState_ = sn.POSSIBLY_STALE_), e.onBecomeStale_());
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
                    (this.isComputing && he(32, this.name_, this.derivation),
                    0 !== On.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                ) {
                    if ((Un(this), pn(this))) {
                        var e = On.trackingContext;
                        (this.keepAlive_ && !e && (On.trackingContext = this),
                            this.trackAndCompute() &&
                                (function (e) {
                                    if (e.lowestObserverState_ === sn.STALE_) return;
                                    ((e.lowestObserverState_ = sn.STALE_),
                                        e.observers_.forEach(function (t) {
                                            t.dependenciesState_ === sn.POSSIBLY_STALE_
                                                ? (t.dependenciesState_ = sn.STALE_)
                                                : t.dependenciesState_ === sn.UP_TO_DATE_ &&
                                                  (e.lowestObserverState_ = sn.UP_TO_DATE_);
                                        }));
                                })(this),
                            (On.trackingContext = e));
                    }
                } else pn(this) && (this.warnAboutUntrackedRead_(), An(), (this.value_ = this.computeValue_(!1)), Nn());
                var t = this.value_;
                if (hn(t)) throw t.cause;
                return t;
            }),
            (t.set = function (e) {
                if (this.setter_) {
                    (this.isRunningSetter && he(33, this.name_), (this.isRunningSetter = !0));
                    try {
                        this.setter_.call(this.scope_, e);
                    } finally {
                        this.isRunningSetter = !1;
                    }
                } else he(34, this.name_);
            }),
            (t.trackAndCompute = function () {
                var e = this.value_,
                    t = this.dependenciesState_ === sn.NOT_TRACKING_,
                    n = this.computeValue_(!0),
                    r = t || hn(e) || hn(n) || !this.equals_(e, n);
                return (r && (this.value_ = n), r);
            }),
            (t.computeValue_ = function (e) {
                this.isComputing = !0;
                var t,
                    n = nn(!1);
                if (e) t = vn(this, this.derivation, this.scope_);
                else if (!0 === On.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                else
                    try {
                        t = this.derivation.call(this.scope_);
                    } catch (r) {
                        t = new dn(r);
                    }
                return (rn(n), (this.isComputing = !1), t);
            }),
            (t.suspend_ = function () {
                this.keepAlive_ || (yn(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
                var n = this,
                    r = !0,
                    i = void 0;
                return Yn(function () {
                    var a = n.get();
                    if (!r || t) {
                        var o = mn();
                        (e({
                            observableKind: 'computed',
                            debugObjectName: n.name_,
                            type: Nr,
                            object: n,
                            newValue: a,
                            oldValue: i,
                        }),
                            bn(o));
                    }
                    ((r = !1), (i = a));
                });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
                return this.name_ + '[' + this.derivation.toString() + ']';
            }),
            (t.valueOf = function () {
                return Me(this.get());
            }),
            (t[Symbol.toPrimitive] = function () {
                return this.valueOf();
            }),
            Qe(e, [
                {
                    key: 'isComputing',
                    get: function () {
                        return Ve(this.flags_, e.isComputingMask_);
                    },
                    set: function (t) {
                        this.flags_ = Fe(this.flags_, e.isComputingMask_, t);
                    },
                },
                {
                    key: 'isRunningSetter',
                    get: function () {
                        return Ve(this.flags_, e.isRunningSetterMask_);
                    },
                    set: function (t) {
                        this.flags_ = Fe(this.flags_, e.isRunningSetterMask_, t);
                    },
                },
                {
                    key: 'isBeingObserved',
                    get: function () {
                        return Ve(this.flags_, e.isBeingObservedMask_);
                    },
                    set: function (t) {
                        this.flags_ = Fe(this.flags_, e.isBeingObservedMask_, t);
                    },
                },
                {
                    key: 'isPendingUnobservation',
                    get: function () {
                        return Ve(this.flags_, e.isPendingUnobservationMask_);
                    },
                    set: function (t) {
                        this.flags_ = Fe(this.flags_, e.isPendingUnobservationMask_, t);
                    },
                },
                {
                    key: 'diffValue',
                    get: function () {
                        return Ve(this.flags_, e.diffValueMask_) ? 1 : 0;
                    },
                    set: function (t) {
                        this.flags_ = Fe(this.flags_, e.diffValueMask_, 1 === t);
                    },
                },
            ])
        );
    })();
((on.isComputingMask_ = 1),
    (on.isRunningSetterMask_ = 2),
    (on.isBeingObservedMask_ = 4),
    (on.isPendingUnobservationMask_ = 8),
    (on.diffValueMask_ = 16));
var sn,
    ln,
    un,
    cn,
    fn = je('ComputedValue', on);
(((ln = sn || (sn = {}))[(ln.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
    (ln[(ln.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
    (ln[(ln.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
    (ln[(ln.STALE_ = 2)] = 'STALE_'),
    ((cn = un || (un = {}))[(cn.NONE = 0)] = 'NONE'),
    (cn[(cn.LOG = 1)] = 'LOG'),
    (cn[(cn.BREAK = 2)] = 'BREAK'));
var dn = function (e) {
    ((this.cause = void 0), (this.cause = e));
};
function hn(e) {
    return e instanceof dn;
}
function pn(e) {
    switch (e.dependenciesState_) {
        case sn.UP_TO_DATE_:
            return !1;
        case sn.NOT_TRACKING_:
        case sn.STALE_:
            return !0;
        case sn.POSSIBLY_STALE_:
            for (var t = _n(!0), n = mn(), r = e.observing_, i = r.length, a = 0; a < i; a++) {
                var o = r[a];
                if (fn(o)) {
                    if (On.disableErrorBoundaries) o.get();
                    else
                        try {
                            o.get();
                        } catch (s) {
                            return (bn(n), wn(t), !0);
                        }
                    if (e.dependenciesState_ === sn.STALE_) return (bn(n), wn(t), !0);
                }
            }
            return (Sn(e), bn(n), wn(t), !1);
    }
}
function vn(e, t, n) {
    var r = _n(!0);
    (Sn(e),
        (e.newObserving_ = new Array(0 === e.runId_ ? 100 : e.observing_.length)),
        (e.unboundDepsCount_ = 0),
        (e.runId_ = ++On.runId));
    var i,
        a = On.trackingDerivation;
    if (((On.trackingDerivation = e), On.inBatch++, !0 === On.disableErrorBoundaries)) i = t.call(n);
    else
        try {
            i = t.call(n);
        } catch (o) {
            i = new dn(o);
        }
    return (
        On.inBatch--,
        (On.trackingDerivation = a),
        (function (e) {
            for (
                var t = e.observing_,
                    n = (e.observing_ = e.newObserving_),
                    r = sn.UP_TO_DATE_,
                    i = 0,
                    a = e.unboundDepsCount_,
                    o = 0;
                o < a;
                o++
            ) {
                var s = n[o];
                (0 === s.diffValue && ((s.diffValue = 1), i !== o && (n[i] = s), i++),
                    s.dependenciesState_ > r && (r = s.dependenciesState_));
            }
            ((n.length = i), (e.newObserving_ = null), (a = t.length));
            for (; a--; ) {
                var l = t[a];
                (0 === l.diffValue && Tn(l, e), (l.diffValue = 0));
            }
            for (; i--; ) {
                var u = n[i];
                1 === u.diffValue && ((u.diffValue = 0), Pn(u, e));
            }
            r !== sn.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        wn(r),
        i
    );
}
function yn(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) Tn(t[n], e);
    e.dependenciesState_ = sn.NOT_TRACKING_;
}
function gn(e) {
    var t = mn();
    try {
        return e();
    } finally {
        bn(t);
    }
}
function mn() {
    var e = On.trackingDerivation;
    return ((On.trackingDerivation = null), e);
}
function bn(e) {
    On.trackingDerivation = e;
}
function _n(e) {
    var t = On.allowStateReads;
    return ((On.allowStateReads = e), t);
}
function wn(e) {
    On.allowStateReads = e;
}
function Sn(e) {
    if (e.dependenciesState_ !== sn.UP_TO_DATE_) {
        e.dependenciesState_ = sn.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = sn.UP_TO_DATE_;
    }
}
var kn = function () {
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
    xn = !0,
    En = !1,
    On = (function () {
        var e = ve();
        return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (xn = !1),
            e.__mobxGlobals && e.__mobxGlobals.version !== new kn().version && (xn = !1),
            xn
                ? e.__mobxGlobals
                    ? ((e.__mobxInstanceCount += 1),
                      e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                      e.__mobxGlobals)
                    : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new kn()))
                : (setTimeout(function () {
                      En || he(35);
                  }, 1),
                  new kn())
        );
    })();
function Pn(e, t) {
    (e.observers_.add(t),
        e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_));
}
function Tn(e, t) {
    (e.observers_.delete(t), 0 === e.observers_.size && Cn(e));
}
function Cn(e) {
    !1 === e.isPendingUnobservation && ((e.isPendingUnobservation = !0), On.pendingUnobservations.push(e));
}
function An() {
    On.inBatch++;
}
function Nn() {
    if (0 === --On.inBatch) {
        zn();
        for (var e = On.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            ((n.isPendingUnobservation = !1),
                0 === n.observers_.size &&
                    (n.isBeingObserved && ((n.isBeingObserved = !1), n.onBUO()), n instanceof on && n.suspend_()));
        }
        On.pendingUnobservations = [];
    }
}
function Un(e) {
    var t = On.trackingDerivation;
    return null !== t
        ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved && On.trackingContext && ((e.isBeingObserved = !0), e.onBO())),
          e.isBeingObserved)
        : (0 === e.observers_.size && On.inBatch > 0 && Cn(e), !1);
}
function Bn(e) {
    e.lowestObserverState_ !== sn.STALE_ &&
        ((e.lowestObserverState_ = sn.STALE_),
        e.observers_.forEach(function (e) {
            (e.dependenciesState_ === sn.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = sn.STALE_));
        }));
}
var jn = (function () {
    function e(e, t, n, r) {
        (void 0 === e && (e = 'Reaction'),
            (this.name_ = void 0),
            (this.onInvalidate_ = void 0),
            (this.errorHandler_ = void 0),
            (this.requiresObservable_ = void 0),
            (this.observing_ = []),
            (this.newObserving_ = []),
            (this.dependenciesState_ = sn.NOT_TRACKING_),
            (this.runId_ = 0),
            (this.unboundDepsCount_ = 0),
            (this.flags_ = 0),
            (this.isTracing_ = un.NONE),
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
            this.isScheduled || ((this.isScheduled = !0), On.pendingReactions.push(this), zn());
        }),
        (t.runReaction_ = function () {
            if (!this.isDisposed) {
                (An(), (this.isScheduled = !1));
                var e = On.trackingContext;
                if (((On.trackingContext = this), pn(this))) {
                    this.isTrackPending = !0;
                    try {
                        this.onInvalidate_();
                    } catch (t) {
                        this.reportExceptionInDerivation_(t);
                    }
                }
                ((On.trackingContext = e), Nn());
            }
        }),
        (t.track = function (e) {
            if (!this.isDisposed) {
                (An(), (this.isRunning = !0));
                var t = On.trackingContext;
                On.trackingContext = this;
                var n = vn(this, e, void 0);
                ((On.trackingContext = t),
                    (this.isRunning = !1),
                    (this.isTrackPending = !1),
                    this.isDisposed && yn(this),
                    hn(n) && this.reportExceptionInDerivation_(n.cause),
                    Nn());
            }
        }),
        (t.reportExceptionInDerivation_ = function (e) {
            var t = this;
            if (this.errorHandler_) this.errorHandler_(e, this);
            else {
                if (On.disableErrorBoundaries) throw e;
                var n = "[mobx] uncaught error in '" + this + "'";
                (On.suppressReactionErrors || console.error(n, e),
                    On.globalReactionErrorHandlers.forEach(function (n) {
                        return n(e, t);
                    }));
            }
        }),
        (t.dispose = function () {
            this.isDisposed || ((this.isDisposed = !0), this.isRunning || (An(), yn(this), Nn()));
        }),
        (t.getDisposer_ = function (e) {
            var t = this,
                n = function n() {
                    (t.dispose(), null == e || null == e.removeEventListener || e.removeEventListener('abort', n));
                };
            return (
                null == e || null == e.addEventListener || e.addEventListener('abort', n),
                (n[tt] = this),
                'dispose' in Symbol && 'symbol' == typeof Symbol.dispose && (n[Symbol.dispose] = n),
                n
            );
        }),
        (t.toString = function () {
            return 'Reaction[' + this.name_ + ']';
        }),
        (t.trace = function (e) {}),
        Qe(e, [
            {
                key: 'isDisposed',
                get: function () {
                    return Ve(this.flags_, e.isDisposedMask_);
                },
                set: function (t) {
                    this.flags_ = Fe(this.flags_, e.isDisposedMask_, t);
                },
            },
            {
                key: 'isScheduled',
                get: function () {
                    return Ve(this.flags_, e.isScheduledMask_);
                },
                set: function (t) {
                    this.flags_ = Fe(this.flags_, e.isScheduledMask_, t);
                },
            },
            {
                key: 'isTrackPending',
                get: function () {
                    return Ve(this.flags_, e.isTrackPendingMask_);
                },
                set: function (t) {
                    this.flags_ = Fe(this.flags_, e.isTrackPendingMask_, t);
                },
            },
            {
                key: 'isRunning',
                get: function () {
                    return Ve(this.flags_, e.isRunningMask_);
                },
                set: function (t) {
                    this.flags_ = Fe(this.flags_, e.isRunningMask_, t);
                },
            },
            {
                key: 'diffValue',
                get: function () {
                    return Ve(this.flags_, e.diffValueMask_) ? 1 : 0;
                },
                set: function (t) {
                    this.flags_ = Fe(this.flags_, e.diffValueMask_, 1 === t);
                },
            },
        ])
    );
})();
((jn.isDisposedMask_ = 1),
    (jn.isScheduledMask_ = 2),
    (jn.isTrackPendingMask_ = 4),
    (jn.isRunningMask_ = 8),
    (jn.diffValueMask_ = 16));
var Wn = 100,
    Ln = function (e) {
        return e();
    };
function zn() {
    On.inBatch > 0 || On.isRunningReactions || Ln(Rn);
}
function Rn() {
    On.isRunningReactions = !0;
    for (var e = On.pendingReactions, t = 0; e.length > 0; ) {
        ++t === Wn && (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
    }
    On.isRunningReactions = !1;
}
var Mn = je('Reaction', jn);
var Dn = 'action',
    In = 'autoAction',
    Vn = '<unnamed action>',
    Fn = ut(Dn),
    $n = ut('action.bound', { bound: !0 }),
    Qn = ut(In, { autoAction: !0 }),
    Hn = ut('autoAction.bound', { autoAction: !0, bound: !0 });
function qn(e) {
    return function (t, n) {
        return Pe(t)
            ? en(t.name || Vn, t, e)
            : Pe(n)
              ? en(t, n, e)
              : et(n)
                ? (e ? Qn : Fn).decorate_20223_(t, n)
                : Te(n)
                  ? Ze(t, n, e ? Qn : Fn)
                  : Te(t)
                    ? Je(ut(e ? In : Dn, { name: t, autoAction: e }))
                    : void 0;
    };
}
var Kn = qn(!1);
Object.assign(Kn, Fn);
var Gn = qn(!0);
function Xn(e) {
    return Pe(e) && !0 === e.isMobxAction;
}
function Yn(e, t) {
    var n, r, i, a;
    void 0 === t && (t = we);
    var o,
        s = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun';
    if (!t.scheduler && !t.delay)
        o = new jn(
            s,
            function () {
                this.track(c);
            },
            t.onError,
            t.requiresObservable,
        );
    else {
        var l = Zn(t),
            u = !1;
        o = new jn(
            s,
            function () {
                u ||
                    ((u = !0),
                    l(function () {
                        ((u = !1), o.isDisposed || o.track(c));
                    }));
            },
            t.onError,
            t.requiresObservable,
        );
    }
    function c() {
        e(o);
    }
    return (
        (null != (i = t) && null != (i = i.signal) && i.aborted) || o.schedule_(),
        o.getDisposer_(null == (a = t) ? void 0 : a.signal)
    );
}
(Object.assign(Gn, Qn), (Kn.bound = Je($n)), (Gn.bound = Je(Hn)));
var Jn = function (e) {
    return e();
};
function Zn(e) {
    return e.scheduler
        ? e.scheduler
        : e.delay
          ? function (t) {
                return setTimeout(t, e.delay);
            }
          : Jn;
}
function er(e, t, n) {
    var r, i, a;
    void 0 === n && (n = we);
    var o,
        s,
        l,
        u = null != (r = n.name) ? r : 'Reaction',
        c = Kn(
            u,
            n.onError
                ? ((o = n.onError),
                  (s = t),
                  function () {
                      try {
                          return s.apply(this, arguments);
                      } catch (e) {
                          o.call(this, e);
                      }
                  })
                : t,
        ),
        f = !n.scheduler && !n.delay,
        d = Zn(n),
        h = !0,
        p = !1,
        v = n.compareStructural ? at.structural : n.equals || at.default,
        y = new jn(
            u,
            function () {
                h || f ? g() : p || ((p = !0), d(g));
            },
            n.onError,
            n.requiresObservable,
        );
    function g() {
        if (((p = !1), !y.isDisposed)) {
            var t = !1,
                r = l;
            (y.track(function () {
                var n = (function (e, t) {
                    var n = nn(e);
                    try {
                        return t();
                    } finally {
                        rn(n);
                    }
                })(!1, function () {
                    return e(y);
                });
                ((t = h || !v(l, n)), (l = n));
            }),
                ((h && n.fireImmediately) || (!h && t)) && c(l, r, y),
                (h = !1));
        }
    }
    return (
        (null != (i = n) && null != (i = i.signal) && i.aborted) || y.schedule_(),
        y.getDisposer_(null == (a = n) ? void 0 : a.signal)
    );
}
var tr = 'onBO',
    nr = 'onBUO';
function rr(e, t, n) {
    return ir(nr, e, t, n);
}
function ir(e, t, n, r) {
    var i = gi(t),
        a = Pe(r) ? r : n,
        o = e + 'L';
    return (
        i[o] ? i[o].add(a) : (i[o] = new Set([a])),
        function () {
            var e = i[o];
            e && (e.delete(a), 0 === e.size && delete i[o]);
        }
    );
}
var ar = 'always';
function or(e) {
    !0 === e.isolateGlobalState &&
        (function () {
            if (((On.pendingReactions.length || On.inBatch || On.isRunningReactions) && he(36), (En = !0), xn)) {
                var e = ve();
                (0 === --e.__mobxInstanceCount && (e.__mobxGlobals = void 0), (On = new kn()));
            }
        })();
    var t,
        n,
        r = e.useProxies,
        i = e.enforceActions;
    if (
        (void 0 !== r && (On.useProxies = r === ar || ('never' !== r && 'undefined' != typeof Proxy)),
        'ifavailable' === r && (On.verifyProxies = !0),
        void 0 !== i)
    ) {
        var a = i === ar ? ar : 'observed' === i;
        ((On.enforceActions = a), (On.allowStateChanges = !0 !== a && a !== ar));
    }
    ([
        'computedRequiresReaction',
        'reactionRequiresObservable',
        'observableRequiresReaction',
        'disableErrorBoundaries',
        'safeDescriptors',
    ].forEach(function (t) {
        t in e && (On[t] = !!e[t]);
    }),
        (On.allowStateReads = !On.observableRequiresReaction),
        e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = Ln),
            (Ln = function (e) {
                return t(function () {
                    return n(e);
                });
            })));
}
function sr(e, t, n, r) {
    var i = Ie(t);
    return (
        _i(function () {
            var t = ti(e, r)[tt];
            Re(i).forEach(function (e) {
                t.extend_(e, i[e], !n || !(e in n) || n[e]);
            });
        }),
        e
    );
}
function lr(e) {
    var t,
        n = { name: e.name_ };
    return (
        e.observing_ &&
            e.observing_.length > 0 &&
            (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(lr)),
        n
    );
}
var ur = 0;
function cr() {
    this.message = 'FLOW_CANCELLED';
}
cr.prototype = Object.create(Error.prototype);
var fr = pt('flow'),
    dr = pt('flow.bound', { bound: !0 }),
    hr = Object.assign(function (e, t) {
        if (et(t)) return fr.decorate_20223_(e, t);
        if (Te(t)) return Ze(e, t, fr);
        var n = e,
            r = n.name || '<unnamed flow>',
            i = function () {
                var e,
                    t = arguments,
                    i = ++ur,
                    a = Kn(r + ' - runid: ' + i + ' - init', n).apply(this, t),
                    o = void 0,
                    s = new Promise(function (t, n) {
                        var s = 0;
                        function l(e) {
                            var t;
                            o = void 0;
                            try {
                                t = Kn(r + ' - runid: ' + i + ' - yield ' + s++, a.next).call(a, e);
                            } catch (l) {
                                return n(l);
                            }
                            c(t);
                        }
                        function u(e) {
                            var t;
                            o = void 0;
                            try {
                                t = Kn(r + ' - runid: ' + i + ' - yield ' + s++, a.throw).call(a, e);
                            } catch (l) {
                                return n(l);
                            }
                            c(t);
                        }
                        function c(e) {
                            if (!Pe(null == e ? void 0 : e.then))
                                return e.done ? t(e.value) : (o = Promise.resolve(e.value)).then(l, u);
                            e.then(c, n);
                        }
                        ((e = n), l(void 0));
                    });
                return (
                    (s.cancel = Kn(r + ' - runid: ' + i + ' - cancel', function () {
                        try {
                            o && pr(o);
                            var t = a.return(void 0),
                                n = Promise.resolve(t.value);
                            (n.then(Oe, Oe), pr(n), e(new cr()));
                        } catch (r) {
                            e(r);
                        }
                    })),
                    s
                );
            };
        return ((i.isMobXFlow = !0), i);
    }, fr);
function pr(e) {
    Pe(e.cancel) && e.cancel();
}
function vr(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
}
function yr(e, t) {
    if (void 0 === t) return fn(e);
    if (!1 === ii(e)) return !1;
    if (!e[tt].values_.has(t)) return !1;
    var n = gi(e, t);
    return fn(n);
}
function gr(e, t) {
    return yr(e, t);
}
function mr(e) {
    return (function (e) {
        return !!e && (ii(e) || !!e[tt] || rt(e) || Mn(e) || fn(e));
    })(e);
}
function br(e, t, n, r) {
    return Pe(n)
        ? (function (e, t, n, r) {
              return mi(e, t).observe_(n, r);
          })(e, t, n, r)
        : (function (e, t, n) {
              return mi(e).observe_(t, n);
          })(e, t, n);
}
function _r(e, t) {
    (void 0 === t && (t = void 0), An());
    try {
        return e.apply(t);
    } finally {
        Nn();
    }
}
function wr(e) {
    return e[tt];
}
hr.bound = Je(dr);
var Sr = {
    has: function (e, t) {
        return wr(e).has_(t);
    },
    get: function (e, t) {
        return wr(e).get_(t);
    },
    set: function (e, t, n) {
        var r;
        return !!Te(t) && (null == (r = wr(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
        var n;
        return !!Te(t) && (null == (n = wr(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
        var r;
        return null == (r = wr(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
        return wr(e).ownKeys_();
    },
    preventExtensions: function (e) {
        he(13);
    },
};
function kr(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
}
function xr(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
        n.push(t),
        Ee(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function Er(e, t) {
    var n = mn();
    try {
        for (
            var r = [].concat(e.interceptors_ || []), i = 0, a = r.length;
            i < a && ((t = r[i](t)) && !t.type && he(14), t);
            i++
        );
        return t;
    } finally {
        bn(n);
    }
}
function Or(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
}
function Pr(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
        n.push(t),
        Ee(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        })
    );
}
function Tr(e, t) {
    var n = mn(),
        r = e.changeListeners_;
    if (r) {
        for (var i = 0, a = (r = r.slice()).length; i < a; i++) r[i](t);
        bn(n);
    }
}
function Cr(e, t, n) {
    return (
        _i(function () {
            var r = ti(e, n)[tt];
            (null != t ||
                (t = (function (e) {
                    return (De(e, Ye) || Ue(e, Ye, qe({}, e[Ye])), e[Ye]);
                })(e)),
                Re(t).forEach(function (e) {
                    return r.make_(e, t[e]);
                }));
        }),
        e
    );
}
var Ar = 'splice',
    Nr = 'update',
    Ur = {
        get: function (e, t) {
            var n = e[tt];
            return t === tt
                ? n
                : 'length' === t
                  ? n.getArrayLength_()
                  : 'string' != typeof t || isNaN(t)
                    ? De(Wr, t)
                        ? Wr[t]
                        : e[t]
                    : n.get_(parseInt(t));
        },
        set: function (e, t, n) {
            var r = e[tt];
            return (
                'length' === t && r.setArrayLength_(n),
                'symbol' == typeof t || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n),
                !0
            );
        },
        preventExtensions: function () {
            he(15);
        },
    },
    Br = (function () {
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
                (this.atom_ = new nt(e)),
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
                return xr(this, e);
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
                    Pr(this, e)
                );
            }),
            (t.getArrayLength_ = function () {
                return (this.atom_.reportObserved(), this.values_.length);
            }),
            (t.setArrayLength_ = function (e) {
                ('number' != typeof e || isNaN(e) || e < 0) && he('Out of range: ' + e);
                var t = this.values_.length;
                if (e !== t)
                    if (e > t) {
                        for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
                        this.spliceWithArray_(t, 0, n);
                    } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
                (e !== this.lastKnownLength_ && he(16),
                    (this.lastKnownLength_ += t),
                    this.legacyMode_ && t > 0 && vi(e + t + 1));
            }),
            (t.spliceWithArray_ = function (e, t, n) {
                var r = this;
                this.atom_;
                var i = this.values_.length;
                if (
                    (void 0 === e ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
                    (t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e))),
                    void 0 === n && (n = _e),
                    kr(this))
                ) {
                    var a = Er(this, { object: this.proxy_, type: Ar, index: e, removedCount: t, added: n });
                    if (!a) return _e;
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
                var s = this.spliceItemsIntoValues_(e, t, n);
                return ((0 === t && 0 === n.length) || this.notifyArraySplice_(e, n, s), this.dehanceValues_(s));
            }),
            (t.spliceItemsIntoValues_ = function (e, t, n) {
                var r;
                if (n.length < 1e4) return (r = this.values_).splice.apply(r, [e, t].concat(n));
                var i = this.values_.slice(e, e + t),
                    a = this.values_.slice(e + t);
                this.values_.length += n.length - t;
                for (var o = 0; o < n.length; o++) this.values_[e + o] = n[o];
                for (var s = 0; s < a.length; s++) this.values_[e + n.length + s] = a[s];
                return i;
            }),
            (t.notifyArrayChildUpdate_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    i = Or(this),
                    a =
                        i || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  type: Nr,
                                  debugObjectName: this.atom_.name_,
                                  index: e,
                                  newValue: t,
                                  oldValue: n,
                              }
                            : null;
                (this.atom_.reportChanged(), i && Tr(this, a));
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
                var r = !this.owned_ && !1,
                    i = Or(this),
                    a =
                        i || r
                            ? {
                                  observableKind: 'array',
                                  object: this.proxy_,
                                  debugObjectName: this.atom_.name_,
                                  type: Ar,
                                  index: e,
                                  removed: n,
                                  added: t,
                                  removedCount: n.length,
                                  addedCount: t.length,
                              }
                            : null;
                (this.atom_.reportChanged(), i && Tr(this, a));
            }),
            (t.get_ = function (e) {
                if (!(this.legacyMode_ && e >= this.values_.length))
                    return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]));
                console.warn('[mobx] Out of bounds read: ' + e);
            }),
            (t.set_ = function (e, t) {
                var n = this.values_;
                if ((this.legacyMode_ && e > n.length && he(17, e, n.length), e < n.length)) {
                    this.atom_;
                    var r = n[e];
                    if (kr(this)) {
                        var i = Er(this, { type: Nr, object: this.proxy_, index: e, newValue: t });
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
function jr(e, t, n, r) {
    return (
        void 0 === n && (n = 'ObservableArray'),
        void 0 === r && (r = !1),
        xe(),
        _i(function () {
            var i = new Br(n, t, r, !1);
            Be(i.values_, tt, i);
            var a = new Proxy(i.values_, Ur);
            return ((i.proxy_ = a), e && e.length && i.spliceWithArray_(0, 0, e), a);
        })
    );
}
var Wr = {
    clear: function () {
        return this.splice(0);
    },
    replace: function (e) {
        var t = this[tt];
        return t.spliceWithArray_(0, t.values_.length, e);
    },
    toJSON: function () {
        return this.slice();
    },
    splice: function (e, t) {
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
        var a = this[tt];
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
        return this[tt].spliceWithArray_(e, t, n);
    },
    push: function () {
        for (var e = this[tt], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(e.values_.length, 0, n), e.values_.length);
    },
    pop: function () {
        return this.splice(Math.max(this[tt].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        for (var e = this[tt], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return (e.spliceWithArray_(0, 0, n), e.values_.length);
    },
    reverse: function () {
        return (On.trackingDerivation && he(37, 'reverse'), this.replace(this.slice().reverse()), this);
    },
    sort: function () {
        On.trackingDerivation && he(37, 'sort');
        var e = this.slice();
        return (e.sort.apply(e, arguments), this.replace(e), this);
    },
    remove: function (e) {
        var t = this[tt],
            n = t.dehanceValues_(t.values_).indexOf(e);
        return n > -1 && (this.splice(n, 1), !0);
    },
};
function Lr(e, t) {
    'function' == typeof Array.prototype[e] && (Wr[e] = t(e));
}
function zr(e) {
    return function () {
        var t = this[tt];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments);
    };
}
function Rr(e) {
    return function (t, n) {
        var r = this,
            i = this[tt];
        return (
            i.atom_.reportObserved(),
            i.dehanceValues_(i.values_)[e](function (e, i) {
                return t.call(n, e, i, r);
            })
        );
    };
}
function Mr(e) {
    return function () {
        var t = this,
            n = this[tt];
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
(Lr('at', zr),
    Lr('concat', zr),
    Lr('flat', zr),
    Lr('includes', zr),
    Lr('indexOf', zr),
    Lr('join', zr),
    Lr('lastIndexOf', zr),
    Lr('slice', zr),
    Lr('toString', zr),
    Lr('toLocaleString', zr),
    Lr('toSorted', zr),
    Lr('toSpliced', zr),
    Lr('with', zr),
    Lr('every', Rr),
    Lr('filter', Rr),
    Lr('find', Rr),
    Lr('findIndex', Rr),
    Lr('findLast', Rr),
    Lr('findLastIndex', Rr),
    Lr('flatMap', Rr),
    Lr('forEach', Rr),
    Lr('map', Rr),
    Lr('some', Rr),
    Lr('toReversed', Rr),
    Lr('reduce', Mr),
    Lr('reduceRight', Mr));
var Dr = je('ObservableArrayAdministration', Br);
function Ir(e) {
    return Ce(e) && Dr(e[tt]);
}
var Vr = {},
    Fr = 'add',
    $r = 'delete',
    Qr = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = ot),
                void 0 === n && (n = 'ObservableMap'),
                (this.enhancer_ = void 0),
                (this.name_ = void 0),
                (this[tt] = Vr),
                (this.data_ = void 0),
                (this.hasMap_ = void 0),
                (this.keysAtom_ = void 0),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = t),
                (this.name_ = n),
                Pe(Map) || he(18),
                _i(function () {
                    ((r.keysAtom_ = it('ObservableMap.keys()')),
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
                if (!On.trackingDerivation) return this.has_(e);
                var n = this.hasMap_.get(e);
                if (!n) {
                    var r = (n = new an(this.has_(e), st, 'ObservableMap.key?', !1));
                    (this.hasMap_.set(e, r),
                        rr(r, function () {
                            return t.hasMap_.delete(e);
                        }));
                }
                return n.get();
            }),
            (t.set = function (e, t) {
                var n = this.has_(e);
                if (kr(this)) {
                    var r = Er(this, { type: n ? Nr : Fr, object: this, newValue: t, name: e });
                    if (!r) return this;
                    t = r.newValue;
                }
                return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
            }),
            (t.delete = function (e) {
                var t = this;
                if ((this.keysAtom_, kr(this)) && !Er(this, { type: $r, object: this, name: e })) return !1;
                if (this.has_(e)) {
                    var n = Or(this),
                        r = n
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: $r,
                                  object: this,
                                  oldValue: this.data_.get(e).value_,
                                  name: e,
                              }
                            : null;
                    return (
                        _r(function () {
                            var n;
                            (t.keysAtom_.reportChanged(),
                                null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                                t.data_.get(e).setNewValue_(void 0),
                                t.data_.delete(e));
                        }),
                        n && Tr(this, r),
                        !0
                    );
                }
                return !1;
            }),
            (t.updateValue_ = function (e, t) {
                var n = this.data_.get(e);
                if ((t = n.prepareNewValue_(t)) !== On.UNCHANGED) {
                    var r = Or(this),
                        i = r
                            ? {
                                  observableKind: 'map',
                                  debugObjectName: this.name_,
                                  type: Nr,
                                  object: this,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), r && Tr(this, i));
                }
            }),
            (t.addValue_ = function (e, t) {
                var n = this;
                (this.keysAtom_,
                    _r(function () {
                        var r,
                            i = new an(t, n.enhancer_, 'ObservableMap.key', !1);
                        (n.data_.set(e, i),
                            (t = i.value_),
                            null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                            n.keysAtom_.reportChanged());
                    }));
                var r = Or(this),
                    i = r
                        ? {
                              observableKind: 'map',
                              debugObjectName: this.name_,
                              type: Fr,
                              object: this,
                              name: e,
                              newValue: t,
                          }
                        : null;
                r && Tr(this, i);
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
                return qr({
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
                return qr({
                    next: function () {
                        var n = t.next(),
                            r = n.done,
                            i = n.value;
                        return { done: r, value: r ? void 0 : [i, e.get(i)] };
                    },
                });
            }),
            (t[Symbol.iterator] = function () {
                return this.entries();
            }),
            (t.forEach = function (e, t) {
                for (var n, r = He(this); !(n = r()).done; ) {
                    var i = n.value,
                        a = i[0],
                        o = i[1];
                    e.call(t, o, a, this);
                }
            }),
            (t.merge = function (e) {
                var t = this;
                return (
                    Hr(e) && (e = new Map(e)),
                    _r(function () {
                        var n, r, i;
                        Ae(e)
                            ? (function (e) {
                                  var t = Object.keys(e);
                                  if (!ze) return t;
                                  var n = Object.getOwnPropertySymbols(e);
                                  return n.length
                                      ? [].concat(
                                            t,
                                            n.filter(function (t) {
                                                return be.propertyIsEnumerable.call(e, t);
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
                              : We(e)
                                ? ((n = e),
                                  (r = Object.getPrototypeOf(n)),
                                  (i = Object.getPrototypeOf(r)),
                                  null !== Object.getPrototypeOf(i) && he(19, e),
                                  e.forEach(function (e, n) {
                                      return t.set(n, e);
                                  }))
                                : null != e && he(20, e);
                    }),
                    this
                );
            }),
            (t.clear = function () {
                var e = this;
                _r(function () {
                    gn(function () {
                        for (var t, n = He(e.keys()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    _r(function () {
                        for (
                            var n,
                                r = (function (e) {
                                    if (We(e) || Hr(e)) return e;
                                    if (Array.isArray(e)) return new Map(e);
                                    if (Ae(e)) {
                                        var t = new Map();
                                        for (var n in e) t.set(n, e[n]);
                                        return t;
                                    }
                                    return he(21, e);
                                })(e),
                                i = new Map(),
                                a = !1,
                                o = He(t.data_.keys());
                            !(n = o()).done;
                        ) {
                            var s = n.value;
                            if (!r.has(s))
                                if (t.delete(s)) a = !0;
                                else {
                                    var l = t.data_.get(s);
                                    i.set(s, l);
                                }
                        }
                        for (var u, c = He(r.entries()); !(u = c()).done; ) {
                            var f = u.value,
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
                return Pr(this, e);
            }),
            (t.intercept_ = function (e) {
                return xr(this, e);
            }),
            Qe(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.keysAtom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: Symbol.toStringTag,
                    get: function () {
                        return 'Map';
                    },
                },
            ])
        );
    })(),
    Hr = je('ObservableMap', Qr);
function qr(e) {
    return ((e[Symbol.toStringTag] = 'MapIterator'), Pi(e));
}
var Kr = {},
    Gr = (function () {
        function e(e, t, n) {
            var r = this;
            (void 0 === t && (t = ot),
                void 0 === n && (n = 'ObservableSet'),
                (this.name_ = void 0),
                (this[tt] = Kr),
                (this.data_ = new Set()),
                (this.atom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = void 0),
                (this.name_ = n),
                Pe(Set) || he(22),
                (this.enhancer_ = function (e, r) {
                    return t(e, r, n);
                }),
                _i(function () {
                    ((r.atom_ = it(r.name_)), e && r.replace(e));
                }));
        }
        var t = e.prototype;
        return (
            (t.dehanceValue_ = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
                var e = this;
                _r(function () {
                    gn(function () {
                        for (var t, n = He(e.data_.values()); !(t = n()).done; ) {
                            var r = t.value;
                            e.delete(r);
                        }
                    });
                });
            }),
            (t.forEach = function (e, t) {
                for (var n, r = He(this); !(n = r()).done; ) {
                    var i = n.value;
                    e.call(t, i, i, this);
                }
            }),
            (t.add = function (e) {
                var t = this;
                if ((this.atom_, kr(this))) {
                    var n = Er(this, { type: Fr, object: this, newValue: e });
                    if (!n) return this;
                    e = n.newValue;
                }
                if (!this.has(e)) {
                    _r(function () {
                        (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
                    });
                    var r = Or(this),
                        i = r
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: Fr,
                                  object: this,
                                  newValue: e,
                              }
                            : null;
                    r && Tr(this, i);
                }
                return this;
            }),
            (t.delete = function (e) {
                var t = this;
                if (kr(this) && !Er(this, { type: $r, object: this, oldValue: e })) return !1;
                if (this.has(e)) {
                    var n = Or(this),
                        r = n
                            ? {
                                  observableKind: 'set',
                                  debugObjectName: this.name_,
                                  type: $r,
                                  object: this,
                                  oldValue: e,
                              }
                            : null;
                    return (
                        _r(function () {
                            (t.atom_.reportChanged(), t.data_.delete(e));
                        }),
                        n && Tr(this, r),
                        !0
                    );
                }
                return !1;
            }),
            (t.has = function (e) {
                return (this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(e)));
            }),
            (t.entries = function () {
                var e = this.values();
                return Yr({
                    next: function () {
                        var t = e.next(),
                            n = t.value,
                            r = t.done;
                        return r ? { value: void 0, done: r } : { value: [n, n], done: r };
                    },
                });
            }),
            (t.keys = function () {
                return this.values();
            }),
            (t.values = function () {
                this.atom_.reportObserved();
                var e = this,
                    t = this.data_.values();
                return Yr({
                    next: function () {
                        var n = t.next(),
                            r = n.value,
                            i = n.done;
                        return i ? { value: void 0, done: i } : { value: e.dehanceValue_(r), done: i };
                    },
                });
            }),
            (t.intersection = function (e) {
                return Le(e) && !Xr(e) ? e.intersection(this) : new Set(this).intersection(e);
            }),
            (t.union = function (e) {
                return Le(e) && !Xr(e) ? e.union(this) : new Set(this).union(e);
            }),
            (t.difference = function (e) {
                return new Set(this).difference(e);
            }),
            (t.symmetricDifference = function (e) {
                return Le(e) && !Xr(e) ? e.symmetricDifference(this) : new Set(this).symmetricDifference(e);
            }),
            (t.isSubsetOf = function (e) {
                return new Set(this).isSubsetOf(e);
            }),
            (t.isSupersetOf = function (e) {
                return new Set(this).isSupersetOf(e);
            }),
            (t.isDisjointFrom = function (e) {
                return Le(e) && !Xr(e) ? e.isDisjointFrom(this) : new Set(this).isDisjointFrom(e);
            }),
            (t.replace = function (e) {
                var t = this;
                return (
                    Xr(e) && (e = new Set(e)),
                    _r(function () {
                        Array.isArray(e) || Le(e)
                            ? (t.clear(),
                              e.forEach(function (e) {
                                  return t.add(e);
                              }))
                            : null != e && he('Cannot initialize set from ' + e);
                    }),
                    this
                );
            }),
            (t.observe_ = function (e, t) {
                return Pr(this, e);
            }),
            (t.intercept_ = function (e) {
                return xr(this, e);
            }),
            (t.toJSON = function () {
                return Array.from(this);
            }),
            (t.toString = function () {
                return '[object ObservableSet]';
            }),
            (t[Symbol.iterator] = function () {
                return this.values();
            }),
            Qe(e, [
                {
                    key: 'size',
                    get: function () {
                        return (this.atom_.reportObserved(), this.data_.size);
                    },
                },
                {
                    key: Symbol.toStringTag,
                    get: function () {
                        return 'Set';
                    },
                },
            ])
        );
    })(),
    Xr = je('ObservableSet', Gr);
function Yr(e) {
    return ((e[Symbol.toStringTag] = 'SetIterator'), Pi(e));
}
var Jr = Object.create(null),
    Zr = 'remove',
    ei = (function () {
        function e(e, t, n, r) {
            (void 0 === t && (t = new Map()),
                void 0 === r && (r = Tt),
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
                (this.keysAtom_ = new nt('ObservableObject.keys')),
                (this.isPlainObject_ = Ae(this.target_)));
        }
        var t = e.prototype;
        return (
            (t.getObservablePropValue_ = function (e) {
                return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
                var n = this.values_.get(e);
                if (n instanceof on) return (n.set(t), !0);
                if (kr(this)) {
                    var r = Er(this, { type: Nr, object: this.proxy_ || this.target_, name: e, newValue: t });
                    if (!r) return null;
                    t = r.newValue;
                }
                if ((t = n.prepareNewValue_(t)) !== On.UNCHANGED) {
                    var i = Or(this),
                        a = i
                            ? {
                                  type: Nr,
                                  observableKind: 'object',
                                  debugObjectName: this.name_,
                                  object: this.proxy_ || this.target_,
                                  oldValue: n.value_,
                                  name: e,
                                  newValue: t,
                              }
                            : null;
                    (n.setNewValue_(t), i && Tr(this, a));
                }
                return !0;
            }),
            (t.get_ = function (e) {
                return (On.trackingDerivation && !De(this.target_, e) && this.has_(e), this.target_[e]);
            }),
            (t.set_ = function (e, t, n) {
                return (
                    void 0 === n && (n = !1),
                    De(this.target_, e)
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
                if (!On.trackingDerivation) return e in this.target_;
                this.pendingKeys_ || (this.pendingKeys_ = new Map());
                var t = this.pendingKeys_.get(e);
                return (
                    t ||
                        ((t = new an(e in this.target_, st, 'ObservableObject.key?', !1)), this.pendingKeys_.set(e, t)),
                    t.get()
                );
            }),
            (t.make_ = function (e, t) {
                if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                    if (!(e in this.target_)) {
                        var n;
                        if (null != (n = this.target_[Ye]) && n[e]) return;
                        he(1, t.annotationType_, this.name_ + '.' + e.toString());
                    }
                    for (var r = this.target_; r && r !== be; ) {
                        var i = ge(r, e);
                        if (i) {
                            var a = t.make_(this, e, i, r);
                            if (0 === a) return;
                            if (1 === a) break;
                        }
                        r = Object.getPrototypeOf(r);
                    }
                    ai(this, t, e);
                }
            }),
            (t.extend_ = function (e, t, n, r) {
                if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                    return this.defineProperty_(e, t, r);
                var i = n.extend_(this, e, t, r);
                return (i && ai(this, n, e), i);
            }),
            (t.defineProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    An();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (kr(this)) {
                        var i = Er(this, { object: this.proxy_ || this.target_, name: e, type: Fr, newValue: t.value });
                        if (!i) return null;
                        var a = i.newValue;
                        t.value !== a && (t = qe({}, t, { value: a }));
                    }
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                    } else me(this.target_, e, t);
                    this.notifyPropertyAddition_(e, t.value);
                } finally {
                    Nn();
                }
                return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
                (void 0 === r && (r = !1), this.keysAtom_);
                try {
                    An();
                    var i = this.delete_(e);
                    if (!i) return i;
                    if (kr(this)) {
                        var a = Er(this, { object: this.proxy_ || this.target_, name: e, type: Fr, newValue: t });
                        if (!a) return null;
                        t = a.newValue;
                    }
                    var o = ri(e),
                        s = {
                            configurable: !On.safeDescriptors || this.isPlainObject_,
                            enumerable: !0,
                            get: o.get,
                            set: o.set,
                        };
                    if (r) {
                        if (!Reflect.defineProperty(this.target_, e, s)) return !1;
                    } else me(this.target_, e, s);
                    var l = new an(t, n, 'ObservableObject.key', !1);
                    (this.values_.set(e, l), this.notifyPropertyAddition_(e, l.value_));
                } finally {
                    Nn();
                }
                return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
                (void 0 === n && (n = !1), this.keysAtom_);
                try {
                    An();
                    var r = this.delete_(e);
                    if (!r) return r;
                    if (kr(this))
                        if (!Er(this, { object: this.proxy_ || this.target_, name: e, type: Fr, newValue: void 0 }))
                            return null;
                    (t.name || (t.name = 'ObservableObject.key'), (t.context = this.proxy_ || this.target_));
                    var i = ri(e),
                        a = {
                            configurable: !On.safeDescriptors || this.isPlainObject_,
                            enumerable: !1,
                            get: i.get,
                            set: i.set,
                        };
                    if (n) {
                        if (!Reflect.defineProperty(this.target_, e, a)) return !1;
                    } else me(this.target_, e, a);
                    (this.values_.set(e, new on(t)), this.notifyPropertyAddition_(e, void 0));
                } finally {
                    Nn();
                }
                return !0;
            }),
            (t.delete_ = function (e, t) {
                if ((void 0 === t && (t = !1), this.keysAtom_, !De(this.target_, e))) return !0;
                if (kr(this) && !Er(this, { object: this.proxy_ || this.target_, name: e, type: Zr })) return null;
                try {
                    var n;
                    An();
                    var r,
                        i = Or(this),
                        a = this.values_.get(e),
                        o = void 0;
                    if (!a && i) o = null == (r = ge(this.target_, e)) ? void 0 : r.value;
                    if (t) {
                        if (!Reflect.deleteProperty(this.target_, e)) return !1;
                    } else delete this.target_[e];
                    if (
                        (a && (this.values_.delete(e), a instanceof an && (o = a.value_), Bn(a)),
                        this.keysAtom_.reportChanged(),
                        null == (n = this.pendingKeys_) || null == (n = n.get(e)) || n.set(e in this.target_),
                        i)
                    ) {
                        var s = {
                            type: Zr,
                            observableKind: 'object',
                            object: this.proxy_ || this.target_,
                            debugObjectName: this.name_,
                            oldValue: o,
                            name: e,
                        };
                        (0, i && Tr(this, s));
                    }
                } finally {
                    Nn();
                }
                return !0;
            }),
            (t.observe_ = function (e, t) {
                return Pr(this, e);
            }),
            (t.intercept_ = function (e) {
                return xr(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
                var n,
                    r = Or(this);
                if (r) {
                    var i = r
                        ? {
                              type: Fr,
                              observableKind: 'object',
                              debugObjectName: this.name_,
                              object: this.proxy_ || this.target_,
                              name: e,
                              newValue: t,
                          }
                        : null;
                    r && Tr(this, i);
                }
                (null == (n = this.pendingKeys_) || null == (n = n.get(e)) || n.set(!0),
                    this.keysAtom_.reportChanged());
            }),
            (t.ownKeys_ = function () {
                return (this.keysAtom_.reportObserved(), Re(this.target_));
            }),
            (t.keys_ = function () {
                return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
            }),
            e
        );
    })();
function ti(e, t) {
    var n;
    if (De(e, tt)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
        i = new ei(
            e,
            new Map(),
            String(r),
            (function (e) {
                var t;
                return e ? (null != (t = e.defaultDecorator) ? t : Ct(e)) : void 0;
            })(t),
        );
    return (Ue(e, tt, i), e);
}
var ni = je('ObservableObjectAdministration', ei);
function ri(e) {
    return (
        Jr[e] ||
        (Jr[e] = {
            get: function () {
                return this[tt].getObservablePropValue_(e);
            },
            set: function (t) {
                return this[tt].setObservablePropValue_(e, t);
            },
        })
    );
}
function ii(e) {
    return !!Ce(e) && ni(e[tt]);
}
function ai(e, t, n) {
    var r;
    null == (r = e.target_[Ye]) || delete r[n];
}
var oi,
    si,
    li = hi(0),
    ui = (function () {
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
    ci = 0,
    fi = function () {};
((oi = fi),
    (si = Array.prototype),
    Object.setPrototypeOf
        ? Object.setPrototypeOf(oi.prototype, si)
        : void 0 !== oi.prototype.__proto__
          ? (oi.prototype.__proto__ = si)
          : (oi.prototype = si));
var di = (function (e) {
    function t(t, n, r, i) {
        var a;
        return (
            void 0 === r && (r = 'ObservableArray'),
            void 0 === i && (i = !1),
            (a = e.call(this) || this),
            _i(function () {
                var e = new Br(r, n, i, !0);
                ((e.proxy_ = a),
                    Be(a, tt, e),
                    t && t.length && a.spliceWithArray(0, 0, t),
                    ui && Object.defineProperty(a, '0', li));
            }),
            a
        );
    }
    Ke(t, e);
    var n = t.prototype;
    return (
        (n.concat = function () {
            this[tt].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return Array.prototype.concat.apply(
                this.slice(),
                t.map(function (e) {
                    return Ir(e) ? e.slice() : e;
                }),
            );
        }),
        (n[Symbol.iterator] = function () {
            var e = this,
                t = 0;
            return Pi({
                next: function () {
                    return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
                },
            });
        }),
        Qe(t, [
            {
                key: 'length',
                get: function () {
                    return this[tt].getArrayLength_();
                },
                set: function (e) {
                    this[tt].setArrayLength_(e);
                },
            },
            {
                key: Symbol.toStringTag,
                get: function () {
                    return 'Array';
                },
            },
        ])
    );
})(fi);
function hi(e) {
    return {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this[tt].get_(e);
        },
        set: function (t) {
            this[tt].set_(e, t);
        },
    };
}
function pi(e) {
    me(di.prototype, '' + e, hi(e));
}
function vi(e) {
    if (e > ci) {
        for (var t = ci; t < e + 100; t++) pi(t);
        ci = e;
    }
}
function yi(e, t, n) {
    return new di(e, t, n);
}
function gi(e, t) {
    if ('object' == typeof e && null !== e) {
        if (Ir(e)) return (void 0 !== t && he(23), e[tt].atom_);
        if (Xr(e)) return e.atom_;
        if (Hr(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return (n || he(25, t, bi(e)), n);
        }
        if (ii(e)) {
            if (!t) return he(26);
            var r = e[tt].values_.get(t);
            return (r || he(27, t, bi(e)), r);
        }
        if (rt(e) || fn(e) || Mn(e)) return e;
    } else if (Pe(e) && Mn(e[tt])) return e[tt];
    he(28);
}
function mi(e, t) {
    return (
        e || he(29),
        void 0 !== t ? mi(gi(e, t)) : rt(e) || fn(e) || Mn(e) || Hr(e) || Xr(e) ? e : e[tt] ? e[tt] : void he(24, e)
    );
}
function bi(e, t) {
    var n;
    if (void 0 !== t) n = gi(e, t);
    else {
        if (Xn(e)) return e.name;
        n = ii(e) || Hr(e) || Xr(e) ? mi(e) : gi(e);
    }
    return n.name_;
}
function _i(e) {
    var t = mn(),
        n = nn(!0);
    An();
    try {
        return e();
    } finally {
        (Nn(), rn(n), bn(t));
    }
}
(Object.entries(Wr).forEach(function (e) {
    var t = e[0],
        n = e[1];
    'concat' !== t && Ue(di.prototype, t, n);
}),
    vi(1e3));
var wi,
    Si = be.toString;
function ki(e, t, n) {
    return (void 0 === n && (n = -1), xi(e, t, n));
}
function xi(e, t, n, r, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var a = typeof e;
    if ('function' !== a && 'object' !== a && 'object' != typeof t) return !1;
    var o = Si.call(e);
    if (o !== Si.call(t)) return !1;
    switch (o) {
        case '[object RegExp]':
        case '[object String]':
            return '' + e == '' + t;
        case '[object Number]':
            return +e != +e ? +t != +t : 0 === +e ? 1 / +e == 1 / t : +e === +t;
        case '[object Date]':
        case '[object Boolean]':
            return +e === +t;
        case '[object Symbol]':
            return 'undefined' != typeof Symbol && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
        case '[object Map]':
        case '[object Set]':
            n >= 0 && n++;
    }
    ((e = Ei(e)), (t = Ei(t)));
    var s = '[object Array]' === o;
    if (!s) {
        if ('object' != typeof e || 'object' != typeof t) return !1;
        var l = e.constructor,
            u = t.constructor;
        if (
            l !== u &&
            !(Pe(l) && l instanceof l && Pe(u) && u instanceof u) &&
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
        for (; c--; ) if (!xi(e[c], t[c], n - 1, r, i)) return !1;
    } else {
        var f = Object.keys(e),
            d = f.length;
        if (Object.keys(t).length !== d) return !1;
        for (var h = 0; h < d; h++) {
            var p = f[h];
            if (!De(t, p) || !xi(e[p], t[p], n - 1, r, i)) return !1;
        }
    }
    return (r.pop(), i.pop(), !0);
}
function Ei(e) {
    return Ir(e) ? e.slice() : We(e) || Hr(e) || Le(e) || Xr(e) ? Array.from(e.entries()) : e;
}
var Oi = (null == (wi = ve().Iterator) ? void 0 : wi.prototype) || {};
function Pi(e) {
    return ((e[Symbol.iterator] = Ti), Object.assign(Object.create(Oi), e));
}
function Ti() {
    return this;
}
(['Symbol', 'Map', 'Set'].forEach(function (e) {
    void 0 === ve()[e] && he("MobX requires global '" + e + "' to be available or polyfilled");
}),
    'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
                return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
            },
            extras: { getDebugName: bi },
            $mobx: tt,
        }));
var Ci = Qi(),
    Ai = (e) => Ii(e, Ci),
    Ni = Qi();
Ai.write = (e) => Ii(e, Ni);
var Ui = Qi();
Ai.onStart = (e) => Ii(e, Ui);
var Bi = Qi();
Ai.onFrame = (e) => Ii(e, Bi);
var ji = Qi();
Ai.onFinish = (e) => Ii(e, ji);
var Wi = [];
Ai.setTimeout = (e, t) => {
    const n = Ai.now() + t,
        r = () => {
            const e = Wi.findIndex((e) => e.cancel == r);
            (~e && Wi.splice(e, 1), (Mi -= ~e ? 1 : 0));
        },
        i = { time: n, handler: e, cancel: r };
    return (Wi.splice(Li(n), 0, i), (Mi += 1), Vi(), i);
};
var Li = (e) => ~(~Wi.findIndex((t) => t.time > e) || ~Wi.length);
((Ai.cancel = (e) => {
    (Ui.delete(e), Bi.delete(e), ji.delete(e), Ci.delete(e), Ni.delete(e));
}),
    (Ai.sync = (e) => {
        ((Di = !0), Ai.batchedUpdates(e), (Di = !1));
    }),
    (Ai.throttle = (e) => {
        let t;
        function n() {
            try {
                e(...t);
            } finally {
                t = null;
            }
        }
        function r(...e) {
            ((t = e), Ai.onStart(n));
        }
        return (
            (r.handler = e),
            (r.cancel = () => {
                (Ui.delete(n), (t = null));
            }),
            r
        );
    }));
var zi = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
((Ai.use = (e) => (zi = e)),
    (Ai.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
    (Ai.batchedUpdates = (e) => e()),
    (Ai.catch = console.error),
    (Ai.frameLoop = 'always'),
    (Ai.advance = () => {
        'demand' !== Ai.frameLoop
            ? console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand')
            : $i();
    }));
var Ri = -1,
    Mi = 0,
    Di = !1;
function Ii(e, t) {
    Di ? (t.delete(e), e(0)) : (t.add(e), Vi());
}
function Vi() {
    Ri < 0 && ((Ri = 0), 'demand' !== Ai.frameLoop && zi(Fi));
}
function Fi() {
    ~Ri && (zi(Fi), Ai.batchedUpdates($i));
}
function $i() {
    const e = Ri;
    Ri = Ai.now();
    const t = Li(Ri);
    (t && (Hi(Wi.splice(0, t), (e) => e.handler()), (Mi -= t)),
        Mi ? (Ui.flush(), Ci.flush(e ? Math.min(64, Ri - e) : 16.667), Bi.flush(), Ni.flush(), ji.flush()) : (Ri = -1));
}
function Qi() {
    let e = new Set(),
        t = e;
    return {
        add(n) {
            ((Mi += t != e || e.has(n) ? 0 : 1), e.add(n));
        },
        delete: (n) => ((Mi -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
        flush(n) {
            t.size && ((e = new Set()), (Mi -= t.size), Hi(t, (t) => t(n) && e.add(t)), (Mi += e.size), (t = e));
        },
    };
}
function Hi(e, t) {
    e.forEach((e) => {
        try {
            t(e);
        } catch (n) {
            Ai.catch(n);
        }
    });
}
var qi = Object.defineProperty,
    Ki = {};
function Gi() {}
((e, t) => {
    for (var n in t) qi(e, n, { get: t[n], enumerable: !0 });
})(Ki, {
    assign: () => ua,
    colors: () => oa,
    createStringInterpolator: () => na,
    skipAnimation: () => sa,
    to: () => ra,
    willAdvance: () => la,
});
var Xi = {
    arr: Array.isArray,
    obj: (e) => !!e && 'Object' === e.constructor.name,
    fun: (e) => 'function' == typeof e,
    str: (e) => 'string' == typeof e,
    num: (e) => 'number' == typeof e,
    und: (e) => void 0 === e,
};
function Yi(e, t) {
    if (Xi.arr(e)) {
        if (!Xi.arr(t) || e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
    }
    return e === t;
}
var Ji = (e, t) => e.forEach(t);
function Zi(e, t, n) {
    if (Xi.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var ea = (e) => (Xi.und(e) ? [] : Xi.arr(e) ? e : [e]);
function ta(e, t) {
    if (e.size) {
        const n = Array.from(e);
        (e.clear(), Ji(n, t));
    }
}
var na,
    ra,
    ia = (e, ...t) => ta(e, (e) => e(...t)),
    aa = () =>
        'undefined' == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    oa = null,
    sa = !1,
    la = Gi,
    ua = (e) => {
        (e.to && (ra = e.to),
            e.now && (Ai.now = e.now),
            void 0 !== e.colors && (oa = e.colors),
            null != e.skipAnimation && (sa = e.skipAnimation),
            e.createStringInterpolator && (na = e.createStringInterpolator),
            e.requestAnimationFrame && Ai.use(e.requestAnimationFrame),
            e.batchedUpdates && (Ai.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (la = e.willAdvance),
            e.frameLoop && (Ai.frameLoop = e.frameLoop));
    },
    ca = new Set(),
    fa = [],
    da = [],
    ha = 0,
    pa = {
        get idle() {
            return !ca.size && !fa.length;
        },
        start(e) {
            ha > e.priority ? (ca.add(e), Ai.onStart(va)) : (ya(e), Ai(ma));
        },
        advance: ma,
        sort(e) {
            if (ha) Ai.onFrame(() => pa.sort(e));
            else {
                const t = fa.indexOf(e);
                ~t && (fa.splice(t, 1), ga(e));
            }
        },
        clear() {
            ((fa = []), ca.clear());
        },
    };
function va() {
    (ca.forEach(ya), ca.clear(), Ai(ma));
}
function ya(e) {
    fa.includes(e) || ga(e);
}
function ga(e) {
    fa.splice(
        (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
        })(fa, (t) => t.priority > e.priority),
        0,
        e,
    );
}
function ma(e) {
    const t = da;
    for (let n = 0; n < fa.length; n++) {
        const r = fa[n];
        ((ha = r.priority), r.idle || (la(r), r.advance(e), r.idle || t.push(r)));
    }
    return ((ha = 0), ((da = fa).length = 0), (fa = t).length > 0);
}
var ba = '[-+]?\\d*\\.?\\d+',
    _a = ba + '%';
function wa(...e) {
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var Sa = new RegExp('rgb' + wa(ba, ba, ba)),
    ka = new RegExp('rgba' + wa(ba, ba, ba, ba)),
    xa = new RegExp('hsl' + wa(ba, _a, _a)),
    Ea = new RegExp('hsla' + wa(ba, _a, _a, ba)),
    Oa = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    Pa = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    Ta = /^#([0-9a-fA-F]{6})$/,
    Ca = /^#([0-9a-fA-F]{8})$/;
function Aa(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function Na(e, t, n) {
    const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
        i = 2 * n - r,
        a = Aa(i, r, e + 1 / 3),
        o = Aa(i, r, e),
        s = Aa(i, r, e - 1 / 3);
    return (Math.round(255 * a) << 24) | (Math.round(255 * o) << 16) | (Math.round(255 * s) << 8);
}
function Ua(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Ba(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function ja(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function Wa(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function La(e) {
    let t = (function (e) {
        let t;
        return 'number' == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
                ? e
                : null
            : (t = Ta.exec(e))
              ? parseInt(t[1] + 'ff', 16) >>> 0
              : oa && void 0 !== oa[e]
                ? oa[e]
                : (t = Sa.exec(e))
                  ? ((Ua(t[1]) << 24) | (Ua(t[2]) << 16) | (Ua(t[3]) << 8) | 255) >>> 0
                  : (t = ka.exec(e))
                    ? ((Ua(t[1]) << 24) | (Ua(t[2]) << 16) | (Ua(t[3]) << 8) | ja(t[4])) >>> 0
                    : (t = Oa.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                      : (t = Ca.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = Pa.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                          : (t = xa.exec(e))
                            ? (255 | Na(Ba(t[1]), Wa(t[2]), Wa(t[3]))) >>> 0
                            : (t = Ea.exec(e))
                              ? (Na(Ba(t[1]), Wa(t[2]), Wa(t[3])) | ja(t[4])) >>> 0
                              : null;
    })(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
}
var za = (e, t, n) => {
    if (Xi.fun(e)) return e;
    if (Xi.arr(e)) return za({ range: e, output: t, extrapolate: n });
    if (Xi.str(e.output[0])) return na(e);
    const r = e,
        i = r.output,
        a = r.range || [0, 1],
        o = r.extrapolateLeft || r.extrapolate || 'extend',
        s = r.extrapolateRight || r.extrapolate || 'extend',
        l = r.easing || ((e) => e);
    return (e) => {
        const t = (function (e, t) {
            for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
            return n - 1;
        })(e, a);
        return (function (e, t, n, r, i, a, o, s, l) {
            let u = l ? l(e) : e;
            if (u < t) {
                if ('identity' === o) return u;
                'clamp' === o && (u = t);
            }
            if (u > n) {
                if ('identity' === s) return u;
                'clamp' === s && (u = n);
            }
            if (r === i) return r;
            if (t === n) return e <= t ? r : i;
            t === -1 / 0 ? (u = -u) : n === 1 / 0 ? (u -= t) : (u = (u - t) / (n - t));
            ((u = a(u)), r === -1 / 0 ? (u = -u) : i === 1 / 0 ? (u += r) : (u = u * (i - r) + r));
            return u;
        })(e, a[t], a[t + 1], i[t], i[t + 1], l, o, s, r.map);
    };
};
var Ra = Symbol.for('FluidValue.get'),
    Ma = Symbol.for('FluidValue.observers'),
    Da = (e) => Boolean(e && e[Ra]),
    Ia = (e) => (e && e[Ra] ? e[Ra]() : e),
    Va = (e) => e[Ma] || null;
function Fa(e, t) {
    const n = e[Ma];
    n &&
        n.forEach((e) => {
            !(function (e, t) {
                e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
        });
}
var $a = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error('Unknown getter');
            Qa(this, e);
        }
    },
    Qa = (e, t) => Ga(e, Ra, t);
function Ha(e, t) {
    if (e[Ra]) {
        let n = e[Ma];
        (n || Ga(e, Ma, (n = new Set())), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
    }
    return t;
}
function qa(e, t) {
    const n = e[Ma];
    if (n && n.has(t)) {
        const r = n.size - 1;
        (r ? n.delete(t) : (e[Ma] = null), e.observerRemoved && e.observerRemoved(r, t));
    }
}
var Ka,
    Ga = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
    Xa = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    Ya = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    Ja = new RegExp(`(${Xa.source})(%|[a-z]+)`, 'i'),
    Za = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    eo = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    to = (e) => {
        const [t, n] = no(e);
        if (!t || aa()) return e;
        const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (r) return r.trim();
        if (n && n.startsWith('--')) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e;
        }
        return n && eo.test(n) ? to(n) : n || e;
    },
    no = (e) => {
        const t = eo.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
    },
    ro = (e, t, n, r, i) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
    io = (e) => {
        Ka || (Ka = oa ? new RegExp(`(${Object.keys(oa).join('|')})(?!\\w)`, 'g') : /^\b$/);
        const t = e.output.map((e) => Ia(e).replace(eo, to).replace(Ya, La).replace(Ka, La)),
            n = t.map((e) => e.match(Xa).map(Number)),
            r = n[0]
                .map((e, t) =>
                    n.map((e) => {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    }),
                )
                .map((t) => za({ ...e, output: t }));
        return (e) => {
            const n = !Ja.test(t[0]) && t.find((e) => Ja.test(e))?.replace(Xa, '');
            let i = 0;
            return t[0].replace(Xa, () => `${r[i++](e)}${n || ''}`).replace(Za, ro);
        };
    },
    ao = 'react-spring: ',
    oo = (e) => {
        const t = e;
        let n = !1;
        if ('function' != typeof t) throw new TypeError(`${ao}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), (n = !0));
        };
    },
    so = oo(console.warn);
var lo = oo(console.warn);
function uo(e) {
    return Xi.str(e) && ('#' == e[0] || /\d/.test(e) || (!aa() && eo.test(e)) || e in (oa || {}));
}
var co = aa() ? H.useEffect : H.useLayoutEffect;
function fo() {
    const e = H.useState()[1],
        t = (() => {
            const e = H.useRef(!1);
            return (
                co(
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
var ho = (e) => H.useEffect(e, po),
    po = [];
function vo(e) {
    const t = H.useRef();
    return (
        H.useEffect(() => {
            t.current = e;
        }),
        t.current
    );
}
var yo = Symbol.for('Animated:node'),
    go = (e) => e && e[yo],
    mo = (e, t) => {
        return ((n = e), (r = yo), (i = t), Object.defineProperty(n, r, { value: i, writable: !0, configurable: !0 }));
        var n, r, i;
    },
    bo = (e) => e && e[yo] && e[yo].getPayload(),
    _o = class {
        constructor() {
            mo(this, this);
        }
        getPayload() {
            return this.payload || [];
        }
    },
    wo = class extends _o {
        constructor(e) {
            (super(),
                (this._value = e),
                (this.done = !0),
                (this.durationProgress = 0),
                Xi.num(this._value) && (this.lastPosition = this._value));
        }
        static create(e) {
            return new wo(e);
        }
        getPayload() {
            return [this];
        }
        getValue() {
            return this._value;
        }
        setValue(e, t) {
            return (
                Xi.num(e) &&
                    ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                this._value !== e && ((this._value = e), !0)
            );
        }
        reset() {
            const { done: e } = this;
            ((this.done = !1),
                Xi.num(this._value) &&
                    ((this.elapsedTime = 0),
                    (this.durationProgress = 0),
                    (this.lastPosition = this._value),
                    e && (this.lastVelocity = null),
                    (this.v0 = null)));
        }
    },
    So = class extends wo {
        constructor(e) {
            (super(0), (this._string = null), (this._toString = za({ output: [e, e] })));
        }
        static create(e) {
            return new So(e);
        }
        getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
            if (Xi.str(e)) {
                if (e == this._string) return !1;
                ((this._string = e), (this._value = 1));
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null;
            }
            return !0;
        }
        reset(e) {
            (e && (this._toString = za({ output: [this.getValue(), e] })), (this._value = 0), super.reset());
        }
    },
    ko = { dependencies: null },
    xo = class extends _o {
        constructor(e) {
            (super(), (this.source = e), this.setValue(e));
        }
        getValue(e) {
            const t = {};
            return (
                Zi(this.source, (n, r) => {
                    var i;
                    (i = n) && i[yo] === i ? (t[r] = n.getValue(e)) : Da(n) ? (t[r] = Ia(n)) : e || (t[r] = n);
                }),
                t
            );
        }
        setValue(e) {
            ((this.source = e), (this.payload = this._makePayload(e)));
        }
        reset() {
            this.payload && Ji(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
            if (e) {
                const t = new Set();
                return (Zi(e, this._addToPayload, t), Array.from(t));
            }
        }
        _addToPayload(e) {
            ko.dependencies && Da(e) && ko.dependencies.add(e);
            const t = bo(e);
            t && Ji(t, (e) => this.add(e));
        }
    },
    Eo = class extends xo {
        constructor(e) {
            super(e);
        }
        static create(e) {
            return new Eo(e);
        }
        getValue() {
            return this.source.map((e) => e.getValue());
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
                ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                : (super.setValue(e.map(Oo)), !0);
        }
    };
function Oo(e) {
    return (uo(e) ? So : wo).create(e);
}
function Po(e) {
    const t = go(e);
    return t ? t.constructor : Xi.arr(e) ? Eo : uo(e) ? So : wo;
}
var To = (e, t) => {
        const n = !Xi.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return H.forwardRef((r, i) => {
            const a = H.useRef(null),
                o =
                    n &&
                    H.useCallback(
                        (e) => {
                            a.current = (function (e, t) {
                                e && (Xi.fun(e) ? e(t) : (e.current = t));
                                return t;
                            })(i, e);
                        },
                        [i],
                    ),
                [s, l] = (function (e, t) {
                    const n = new Set();
                    ((ko.dependencies = n), e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }));
                    return ((e = new xo(e)), (ko.dependencies = null), [e, n]);
                })(r, t),
                u = fo(),
                c = () => {
                    const e = a.current;
                    if (n && !e) return;
                    !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && u();
                },
                f = new Co(c, l),
                d = H.useRef();
            (co(
                () => (
                    (d.current = f),
                    Ji(l, (e) => Ha(e, f)),
                    () => {
                        d.current && (Ji(d.current.deps, (e) => qa(e, d.current)), Ai.cancel(d.current.update));
                    }
                ),
            ),
                H.useEffect(c, []),
                ho(() => () => {
                    const e = d.current;
                    Ji(e.deps, (t) => qa(t, e));
                }));
            const h = t.getComponentProps(s.getValue());
            return H.createElement(e, { ...h, ref: o });
        });
    },
    Co = class {
        constructor(e, t) {
            ((this.update = e), (this.deps = t));
        }
        eventObserved(e) {
            'change' == e.type && Ai.write(this.update);
        }
    };
var Ao = Symbol.for('AnimatedComponent'),
    No = (e) => (Xi.str(e) ? e : e && Xi.str(e.displayName) ? e.displayName : (Xi.fun(e) && e.name) || null);
function Uo(e, ...t) {
    return Xi.fun(e) ? e(...t) : e;
}
var Bo = (e, t) => !0 === e || !!(t && e && (Xi.fun(e) ? e(t) : ea(e).includes(t))),
    jo = (e, t) => (Xi.obj(e) ? t && e[t] : e),
    Wo = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
    Lo = (e) => e,
    zo = (e, t = Lo) => {
        let n = Ro;
        e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
        const r = {};
        for (const i of n) {
            const n = t(e[i], i);
            Xi.und(n) || (r[i] = n);
        }
        return r;
    },
    Ro = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'],
    Mo = {
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
function Do(e) {
    const t = (function (e) {
        const t = {};
        let n = 0;
        if (
            (Zi(e, (e, r) => {
                Mo[r] || ((t[r] = e), n++);
            }),
            n)
        )
            return t;
    })(e);
    if (t) {
        const n = { to: t };
        return (Zi(e, (e, r) => r in t || (n[r] = e)), n);
    }
    return { ...e };
}
function Io(e) {
    return (
        (e = Ia(e)),
        Xi.arr(e) ? e.map(Io) : uo(e) ? Ki.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e
    );
}
function Vo(e) {
    return Xi.fun(e) || (Xi.arr(e) && Xi.obj(e[0]));
}
var Fo = { tension: 170, friction: 26, mass: 1, damping: 1, easing: (e) => e, clamp: !1 },
    $o = class {
        constructor() {
            ((this.velocity = 0), Object.assign(this, Fo));
        }
    };
function Qo(e, t) {
    if (Xi.und(t.decay)) {
        const n = !Xi.und(t.tension) || !Xi.und(t.friction);
        ((!n && Xi.und(t.frequency) && Xi.und(t.damping) && Xi.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0));
    } else e.duration = void 0;
}
var Ho = [],
    qo = class {
        constructor() {
            ((this.changed = !1),
                (this.values = Ho),
                (this.toValues = null),
                (this.fromValues = Ho),
                (this.config = new $o()),
                (this.immediate = !1));
        }
    };
function Ko(e, { key: t, props: n, defaultProps: r, state: i, actions: a }) {
    return new Promise((o, s) => {
        let l,
            u,
            c = Bo(n.cancel ?? r?.cancel, t);
        if (c) h();
        else {
            Xi.und(n.pause) || (i.paused = Bo(n.pause, t));
            let e = r?.pause;
            (!0 !== e && (e = i.paused || Bo(e, t)),
                (l = Uo(n.delay || 0, t)),
                e ? (i.resumeQueue.add(d), a.pause()) : (a.resume(), d()));
        }
        function f() {
            (i.resumeQueue.add(d), i.timeouts.delete(u), u.cancel(), (l = u.time - Ai.now()));
        }
        function d() {
            l > 0 && !Ki.skipAnimation
                ? ((i.delayed = !0), (u = Ai.setTimeout(h, l)), i.pauseQueue.add(f), i.timeouts.add(u))
                : h();
        }
        function h() {
            (i.delayed && (i.delayed = !1),
                i.pauseQueue.delete(f),
                i.timeouts.delete(u),
                e <= (i.cancelId || 0) && (c = !0));
            try {
                a.start({ ...n, callId: e, cancel: c }, o);
            } catch (t) {
                s(t);
            }
        }
    });
}
var Go = (e, t) =>
        1 == t.length
            ? t[0]
            : t.some((e) => e.cancelled)
              ? Jo(e.get())
              : t.every((e) => e.noop)
                ? Xo(e.get())
                : Yo(
                      e.get(),
                      t.every((e) => e.finished),
                  ),
    Xo = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
    Yo = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
    Jo = (e) => ({ value: e, cancelled: !0, finished: !1 });
function Zo(e, t, n, r) {
    const { callId: i, parentId: a, onRest: o } = t,
        { asyncTo: s, promise: l } = n;
    return a || e !== s || t.reset
        ? (n.promise = (async () => {
              ((n.asyncId = i), (n.asyncTo = e));
              const u = zo(t, (e, t) => ('onRest' === t ? void 0 : e));
              let c, f;
              const d = new Promise((e, t) => ((c = e), (f = t))),
                  h = (e) => {
                      const t = (i <= (n.cancelId || 0) && Jo(r)) || (i !== n.asyncId && Yo(r, !1));
                      if (t) throw ((e.result = t), f(e), e);
                  },
                  p = (e, t) => {
                      const a = new ts(),
                          o = new ns();
                      return (async () => {
                          if (Ki.skipAnimation) throw (es(n), (o.result = Yo(r, !1)), f(o), o);
                          h(a);
                          const s = Xi.obj(e) ? { ...e } : { ...t, to: e };
                          ((s.parentId = i),
                              Zi(u, (e, t) => {
                                  Xi.und(s[t]) && (s[t] = e);
                              }));
                          const l = await r.start(s);
                          return (
                              h(a),
                              n.paused &&
                                  (await new Promise((e) => {
                                      n.resumeQueue.add(e);
                                  })),
                              l
                          );
                      })();
                  };
              let v;
              if (Ki.skipAnimation) return (es(n), Yo(r, !1));
              try {
                  let t;
                  ((t = Xi.arr(e)
                      ? (async (e) => {
                            for (const t of e) await p(t);
                        })(e)
                      : Promise.resolve(e(p, r.stop.bind(r)))),
                      await Promise.all([t.then(c), d]),
                      (v = Yo(r.get(), !0, !1)));
              } catch (y) {
                  if (y instanceof ts) v = y.result;
                  else {
                      if (!(y instanceof ns)) throw y;
                      v = y.result;
                  }
              } finally {
                  i == n.asyncId && ((n.asyncId = a), (n.asyncTo = a ? s : void 0), (n.promise = a ? l : void 0));
              }
              return (
                  Xi.fun(o) &&
                      Ai.batchedUpdates(() => {
                          o(v, r, r.item);
                      }),
                  v
              );
          })())
        : l;
}
function es(e, t) {
    (ta(e.timeouts, (e) => e.cancel()),
        e.pauseQueue.clear(),
        e.resumeQueue.clear(),
        (e.asyncId = e.asyncTo = e.promise = void 0),
        t && (e.cancelId = t));
}
var ts = class extends Error {
        constructor() {
            super(
                'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
            );
        }
    },
    ns = class extends Error {
        constructor() {
            super('SkipAnimationSignal');
        }
    },
    rs = (e) => e instanceof as,
    is = 1,
    as = class extends $a {
        constructor() {
            (super(...arguments), (this.id = is++), (this._priority = 0));
        }
        get priority() {
            return this._priority;
        }
        set priority(e) {
            this._priority != e && ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
            const e = go(this);
            return e && e.getValue();
        }
        to(...e) {
            return Ki.to(this, e);
        }
        interpolate(...e) {
            return (so(`${ao}The "interpolate" function is deprecated in v9 (use "to" instead)`), Ki.to(this, e));
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
            Fa(this, { type: 'change', parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
            (this.idle || pa.sort(this), Fa(this, { type: 'priority', parent: this, priority: e }));
        }
    },
    os = Symbol.for('SpringPhase'),
    ss = (e) => (1 & e[os]) > 0,
    ls = (e) => (2 & e[os]) > 0,
    us = (e) => (4 & e[os]) > 0,
    cs = (e, t) => (t ? (e[os] |= 3) : (e[os] &= -3)),
    fs = (e, t) => (t ? (e[os] |= 4) : (e[os] &= -5)),
    ds = class extends as {
        constructor(e, t) {
            if (
                (super(),
                (this.animation = new qo()),
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
                !Xi.und(e) || !Xi.und(t))
            ) {
                const n = Xi.obj(e) ? { ...e } : { ...t, from: e };
                (Xi.und(n.default) && (n.default = !0), this.start(n));
            }
        }
        get idle() {
            return !(ls(this) || this._state.asyncTo) || us(this);
        }
        get goal() {
            return Ia(this.animation.to);
        }
        get velocity() {
            const e = go(this);
            return e instanceof wo ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
        }
        get hasAnimated() {
            return ss(this);
        }
        get isAnimating() {
            return ls(this);
        }
        get isPaused() {
            return us(this);
        }
        get isDelayed() {
            return this._state.delayed;
        }
        advance(e) {
            let t = !0,
                n = !1;
            const r = this.animation;
            let { toValues: i } = r;
            const { config: a } = r,
                o = bo(r.to);
            (!o && Da(r.to) && (i = ea(Ia(r.to))),
                r.values.forEach((s, l) => {
                    if (s.done) return;
                    const u = s.constructor == So ? 1 : o ? o[l].lastPosition : i[l];
                    let c = r.immediate,
                        f = u;
                    if (!c) {
                        if (((f = s.lastPosition), a.tension <= 0)) return void (s.done = !0);
                        let t = (s.elapsedTime += e);
                        const n = r.fromValues[l],
                            i = null != s.v0 ? s.v0 : (s.v0 = Xi.arr(a.velocity) ? a.velocity[l] : a.velocity);
                        let o;
                        const d = a.precision || (n == u ? 0.005 : Math.min(1, 0.001 * Math.abs(u - n)));
                        if (Xi.und(a.duration))
                            if (a.decay) {
                                const e = !0 === a.decay ? 0.998 : a.decay,
                                    r = Math.exp(-(1 - e) * t);
                                ((f = n + (i / (1 - e)) * (1 - r)),
                                    (c = Math.abs(s.lastPosition - f) <= d),
                                    (o = i * r));
                            } else {
                                o = null == s.lastVelocity ? i : s.lastVelocity;
                                const t = a.restVelocity || d / 10,
                                    r = a.clamp ? 0 : a.bounce,
                                    l = !Xi.und(r),
                                    h = n == u ? s.v0 > 0 : n < u;
                                let p,
                                    v = !1;
                                const y = 1,
                                    g = Math.ceil(e / y);
                                for (
                                    let e = 0;
                                    e < g && ((p = Math.abs(o) > t), p || ((c = Math.abs(u - f) <= d), !c));
                                    ++e
                                ) {
                                    l && ((v = f == u || f > u == h), v && ((o = -o * r), (f = u)));
                                    ((o += ((1e-6 * -a.tension * (f - u) + 0.001 * -a.friction * o) / a.mass) * y),
                                        (f += o * y));
                                }
                            }
                        else {
                            let r = 1;
                            (a.duration > 0 &&
                                (this._memoizedDuration !== a.duration &&
                                    ((this._memoizedDuration = a.duration),
                                    s.durationProgress > 0 &&
                                        ((s.elapsedTime = a.duration * s.durationProgress), (t = s.elapsedTime += e))),
                                (r = (a.progress || 0) + t / this._memoizedDuration),
                                (r = r > 1 ? 1 : r < 0 ? 0 : r),
                                (s.durationProgress = r)),
                                (f = n + a.easing(r) * (u - n)),
                                (o = (f - s.lastPosition) / e),
                                (c = 1 == r));
                        }
                        ((s.lastVelocity = o),
                            Number.isNaN(f) && (console.warn('Got NaN while animating:', this), (c = !0)));
                    }
                    (o && !o[l].done && (c = !1), c ? (s.done = !0) : (t = !1), s.setValue(f, a.round) && (n = !0));
                }));
            const s = go(this),
                l = s.getValue();
            if (t) {
                const e = Ia(r.to);
                ((l === e && !n) || a.decay ? n && a.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)),
                    this._stop());
            } else n && this._onChange(l);
        }
        set(e) {
            return (
                Ai.batchedUpdates(() => {
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
            if (ls(this)) {
                const { to: e, config: t } = this.animation;
                Ai.batchedUpdates(() => {
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
                Xi.und(e) ? ((n = this.queue || []), (this.queue = [])) : (n = [Xi.obj(e) ? e : { ...t, to: e }]),
                Promise.all(n.map((e) => this._update(e))).then((e) => Go(this, e))
            );
        }
        stop(e) {
            const { to: t } = this.animation;
            return (
                this._focus(this.get()),
                es(this._state, e && this._lastCallId),
                Ai.batchedUpdates(() => this._stop(t, e)),
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
            ((n = Xi.obj(n) ? n[t] : n),
                (null == n || Vo(n)) && (n = void 0),
                (r = Xi.obj(r) ? r[t] : r),
                null == r && (r = void 0));
            const i = { to: n, from: r };
            return (
                ss(this) ||
                    (e.reverse && ([n, r] = [r, n]), (r = Ia(r)), Xi.und(r) ? go(this) || this._set(n) : this._set(r)),
                i
            );
        }
        _update({ ...e }, t) {
            const { key: n, defaultProps: r } = this;
            (e.default &&
                Object.assign(
                    r,
                    zo(e, (e, t) => (/^on/.test(t) ? jo(e, n) : e)),
                ),
                bs(this, e, 'onProps'),
                _s(this, 'onProps', e, this));
            const i = this._prepareNode(e);
            if (Object.isFrozen(this))
                throw Error(
                    'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                );
            const a = this._state;
            return Ko(++this._lastCallId, {
                key: n,
                props: e,
                defaultProps: r,
                state: a,
                actions: {
                    pause: () => {
                        us(this) ||
                            (fs(this, !0),
                            ia(a.pauseQueue),
                            _s(this, 'onPause', Yo(this, hs(this, this.animation.to)), this));
                    },
                    resume: () => {
                        us(this) &&
                            (fs(this, !1),
                            ls(this) && this._resume(),
                            ia(a.resumeQueue),
                            _s(this, 'onResume', Yo(this, hs(this, this.animation.to)), this));
                    },
                    start: this._merge.bind(this, i),
                },
            }).then((n) => {
                if (e.loop && n.finished && (!t || !n.noop)) {
                    const t = ps(e);
                    if (t) return this._update(t, !0);
                }
                return n;
            });
        }
        _merge(e, t, n) {
            if (t.cancel) return (this.stop(!0), n(Jo(this)));
            const r = !Xi.und(e.to),
                i = !Xi.und(e.from);
            if (r || i) {
                if (!(t.callId > this._lastToId)) return n(Jo(this));
                this._lastToId = t.callId;
            }
            const { key: a, defaultProps: o, animation: s } = this,
                { to: l, from: u } = s;
            let { to: c = l, from: f = u } = e;
            (!i || r || (t.default && !Xi.und(c)) || (c = f), t.reverse && ([c, f] = [f, c]));
            const d = !Yi(f, u);
            (d && (s.from = f), (f = Ia(f)));
            const h = !Yi(c, l);
            h && this._focus(c);
            const p = Vo(t.to),
                { config: v } = s,
                { decay: y, velocity: g } = v;
            ((r || i) && (v.velocity = 0),
                t.config &&
                    !p &&
                    (function (e, t, n) {
                        (n && (Qo((n = { ...n }), t), (t = { ...n, ...t })), Qo(e, t), Object.assign(e, t));
                        for (const o in Fo) null == e[o] && (e[o] = Fo[o]);
                        let { frequency: r, damping: i } = e;
                        const { mass: a } = e;
                        Xi.und(r) ||
                            (r < 0.01 && (r = 0.01),
                            i < 0 && (i = 0),
                            (e.tension = Math.pow((2 * Math.PI) / r, 2) * a),
                            (e.friction = (4 * Math.PI * i * a) / r));
                    })(v, Uo(t.config, a), t.config !== o.config ? Uo(o.config, a) : void 0));
            let m = go(this);
            if (!m || Xi.und(c)) return n(Yo(this, !0));
            const b = Xi.und(t.reset) ? i && !t.default : !Xi.und(f) && Bo(t.reset, a),
                _ = b ? f : this.get(),
                w = Io(c),
                S = Xi.num(w) || Xi.arr(w) || uo(w),
                k = !p && (!S || Bo(o.immediate || t.immediate, a));
            if (h) {
                const e = Po(c);
                if (e !== m.constructor) {
                    if (!k)
                        throw Error(
                            `Cannot animate between ${m.constructor.name} and ${e.name}, as the "to" prop suggests`,
                        );
                    m = this._set(w);
                }
            }
            const x = m.constructor;
            let E = Da(c),
                O = !1;
            if (!E) {
                const e = b || (!ss(this) && d);
                ((h || e) && ((O = Yi(Io(_), w)), (E = !O)),
                    ((Yi(s.immediate, k) || k) && Yi(v.decay, y) && Yi(v.velocity, g)) || (E = !0));
            }
            if (
                (O && ls(this) && (s.changed && !b ? (E = !0) : E || this._stop(l)),
                !p &&
                    ((E || Da(l)) && ((s.values = m.getPayload()), (s.toValues = Da(c) ? null : x == So ? [1] : ea(w))),
                    s.immediate != k && ((s.immediate = k), k || b || this._set(l)),
                    E))
            ) {
                const { onRest: e } = s;
                Ji(ms, (e) => bs(this, t, e));
                const r = Yo(this, hs(this, l));
                (ia(this._pendingCalls, r),
                    this._pendingCalls.add(n),
                    s.changed &&
                        Ai.batchedUpdates(() => {
                            ((s.changed = !b), e?.(r, this), b ? Uo(o.onRest, r) : s.onStart?.(r, this));
                        }));
            }
            (b && this._set(_),
                p
                    ? n(Zo(t.to, t, this._state, this))
                    : E
                      ? this._start()
                      : ls(this) && !h
                        ? this._pendingCalls.add(n)
                        : n(Xo(_)));
        }
        _focus(e) {
            const t = this.animation;
            e !== t.to && (Va(this) && this._detach(), (t.to = e), Va(this) && this._attach());
        }
        _attach() {
            let e = 0;
            const { to: t } = this.animation;
            (Da(t) && (Ha(t, this), rs(t) && (e = t.priority + 1)), (this.priority = e));
        }
        _detach() {
            const { to: e } = this.animation;
            Da(e) && qa(e, this);
        }
        _set(e, t = !0) {
            const n = Ia(e);
            if (!Xi.und(n)) {
                const e = go(this);
                if (!e || !Yi(n, e.getValue())) {
                    const r = Po(n);
                    (e && e.constructor == r ? e.setValue(n) : mo(this, r.create(n)),
                        e &&
                            Ai.batchedUpdates(() => {
                                this._onChange(n, t);
                            }));
                }
            }
            return go(this);
        }
        _onStart() {
            const e = this.animation;
            e.changed || ((e.changed = !0), _s(this, 'onStart', Yo(this, hs(this, e.to)), this));
        }
        _onChange(e, t) {
            (t || (this._onStart(), Uo(this.animation.onChange, e, this)),
                Uo(this.defaultProps.onChange, e, this),
                super._onChange(e, t));
        }
        _start() {
            const e = this.animation;
            (go(this).reset(Ia(e.to)),
                e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                ls(this) || (cs(this, !0), us(this) || this._resume()));
        }
        _resume() {
            Ki.skipAnimation ? this.finish() : pa.start(this);
        }
        _stop(e, t) {
            if (ls(this)) {
                cs(this, !1);
                const n = this.animation;
                (Ji(n.values, (e) => {
                    e.done = !0;
                }),
                    n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                    Fa(this, { type: 'idle', parent: this }));
                const r = t ? Jo(this.get()) : Yo(this.get(), hs(this, e ?? n.to));
                (ia(this._pendingCalls, r), n.changed && ((n.changed = !1), _s(this, 'onRest', r, this)));
            }
        }
    };
function hs(e, t) {
    const n = Io(t);
    return Yi(Io(e.get()), n);
}
function ps(e, t = e.loop, n = e.to) {
    const r = Uo(t);
    if (r) {
        const i = !0 !== r && Do(r),
            a = (i || e).reverse,
            o = !i || i.reset;
        return vs({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !a || Vo(n) ? n : void 0,
            from: o ? e.from : void 0,
            reset: o,
            ...i,
        });
    }
}
function vs(e) {
    const { to: t, from: n } = (e = Do(e)),
        r = new Set();
    return (Xi.obj(t) && gs(t, r), Xi.obj(n) && gs(n, r), (e.keys = r.size ? Array.from(r) : null), e);
}
function ys(e) {
    const t = vs(e);
    return (Xi.und(t.default) && (t.default = zo(t)), t);
}
function gs(e, t) {
    Zi(e, (e, n) => null != e && t.add(n));
}
var ms = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
function bs(e, t, n) {
    e.animation[n] = t[n] !== Wo(t, n) ? jo(t[n], e.key) : void 0;
}
function _s(e, t, ...n) {
    (e.animation[t]?.(...n), e.defaultProps[t]?.(...n));
}
var ws = ['onStart', 'onChange', 'onRest'],
    Ss = 1,
    ks = class {
        constructor(e, t) {
            ((this.id = Ss++),
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
                Xi.und(n) || this.springs[t].set(n);
            }
        }
        update(e) {
            return (e && this.queue.push(vs(e)), this);
        }
        start(e) {
            let { queue: t } = this;
            return (
                e ? (t = ea(e).map(vs)) : (this.queue = []),
                this._flush ? this._flush(this, t) : (As(this, t), xs(this, t))
            );
        }
        stop(e, t) {
            if ((e !== !!e && (t = e), t)) {
                const n = this.springs;
                Ji(ea(t), (t) => n[t].stop(!!e));
            } else (es(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
            return this;
        }
        pause(e) {
            if (Xi.und(e)) this.start({ pause: !0 });
            else {
                const t = this.springs;
                Ji(ea(e), (e) => t[e].pause());
            }
            return this;
        }
        resume(e) {
            if (Xi.und(e)) this.start({ pause: !1 });
            else {
                const t = this.springs;
                Ji(ea(e), (e) => t[e].resume());
            }
            return this;
        }
        each(e) {
            Zi(this.springs, e);
        }
        _onFrame() {
            const { onStart: e, onChange: t, onRest: n } = this._events,
                r = this._active.size > 0,
                i = this._changed.size > 0;
            ((r && !this._started) || (i && !this._started)) &&
                ((this._started = !0),
                ta(e, ([e, t]) => {
                    ((t.value = this.get()), e(t, this, this._item));
                }));
            const a = !r && this._started,
                o = i || (a && n.size) ? this.get() : null;
            (i &&
                t.size &&
                ta(t, ([e, t]) => {
                    ((t.value = o), e(t, this, this._item));
                }),
                a &&
                    ((this._started = !1),
                    ta(n, ([e, t]) => {
                        ((t.value = o), e(t, this, this._item));
                    })));
        }
        eventObserved(e) {
            if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
            else {
                if ('idle' != e.type) return;
                this._active.delete(e.parent);
            }
            Ai.onFrame(this._onFrame);
        }
    };
function xs(e, t) {
    return Promise.all(t.map((t) => Es(e, t))).then((t) => Go(e, t));
}
async function Es(e, t, n) {
    const { keys: r, to: i, from: a, loop: o, onRest: s, onResolve: l } = t,
        u = Xi.obj(t.default) && t.default;
    (o && (t.loop = !1), !1 === i && (t.to = null), !1 === a && (t.from = null));
    const c = Xi.arr(i) || Xi.fun(i) ? i : void 0;
    c
        ? ((t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0))
        : Ji(ws, (n) => {
              const r = t[n];
              if (Xi.fun(r)) {
                  const i = e._events[n];
                  ((t[n] = ({ finished: e, cancelled: t }) => {
                      const n = i.get(r);
                      n
                          ? (e || (n.finished = !1), t && (n.cancelled = !0))
                          : i.set(r, { value: null, finished: e || !1, cancelled: t || !1 });
                  }),
                      u && (u[n] = t[n]));
              }
          });
    const f = e._state;
    t.pause === !f.paused
        ? ((f.paused = t.pause), ia(t.pause ? f.pauseQueue : f.resumeQueue))
        : f.paused && (t.pause = !0);
    const d = (r || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
        h = !0 === t.cancel || !0 === Wo(t, 'cancel');
    ((c || (h && f.asyncId)) &&
        d.push(
            Ko(++e._lastAsyncId, {
                props: t,
                state: f,
                actions: {
                    pause: Gi,
                    resume: Gi,
                    start(t, n) {
                        h ? (es(f, e._lastAsyncId), n(Jo(e))) : ((t.onRest = s), n(Zo(c, t, f, e)));
                    },
                },
            }),
        ),
        f.paused &&
            (await new Promise((e) => {
                f.resumeQueue.add(e);
            })));
    const p = Go(e, await Promise.all(d));
    if (o && p.finished && (!n || !p.noop)) {
        const n = ps(t, o, i);
        if (n) return (As(e, [n]), Es(e, n, !0));
    }
    return (l && Ai.batchedUpdates(() => l(p, e, e.item)), p);
}
function Os(e, t) {
    const n = { ...e.springs };
    return (
        t &&
            Ji(ea(t), (e) => {
                (Xi.und(e.keys) && (e = vs(e)), Xi.obj(e.to) || (e = { ...e, to: void 0 }), Cs(n, e, (e) => Ts(e)));
            }),
        Ps(e, n),
        n
    );
}
function Ps(e, t) {
    Zi(t, (t, n) => {
        e.springs[n] || ((e.springs[n] = t), Ha(t, e));
    });
}
function Ts(e, t) {
    const n = new ds();
    return ((n.key = e), t && Ha(n, t), n);
}
function Cs(e, t, n) {
    t.keys &&
        Ji(t.keys, (r) => {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function As(e, t) {
    Ji(t, (t) => {
        Cs(e.springs, t, (t) => Ts(t, e));
    });
}
var Ns,
    Us,
    Bs = ({ children: e, ...t }) => {
        const n = H.useContext(js),
            r = t.pause || !!n.pause,
            i = t.immediate || !!n.immediate;
        t = (function (e, t) {
            const [n] = H.useState(() => ({ inputs: t, result: e() })),
                r = H.useRef(),
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
                H.useEffect(() => {
                    ((r.current = a), i == n && (n.inputs = n.result = void 0));
                }, [a]),
                a.result
            );
        })(() => ({ pause: r, immediate: i }), [r, i]);
        const { Provider: a } = js;
        return H.createElement(a, { value: t }, e);
    },
    js =
        ((Ns = Bs),
        (Us = {}),
        Object.assign(Ns, H.createContext(Us)),
        (Ns.Provider._context = Ns),
        (Ns.Consumer._context = Ns),
        Ns);
((Bs.Provider = js.Provider), (Bs.Consumer = js.Consumer));
var Ws = () => {
    const e = [],
        t = function (t) {
            lo(
                `${ao}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
            );
            const r = [];
            return (
                Ji(e, (e, i) => {
                    if (Xi.und(t)) r.push(e.start());
                    else {
                        const a = n(t, e, i);
                        a && r.push(e.start(a));
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
            return (Ji(e, (e) => e.pause(...arguments)), this);
        }),
        (t.resume = function () {
            return (Ji(e, (e) => e.resume(...arguments)), this);
        }),
        (t.set = function (t) {
            Ji(e, (e, n) => {
                const r = Xi.fun(t) ? t(n, e) : t;
                r && e.set(r);
            });
        }),
        (t.start = function (t) {
            const n = [];
            return (
                Ji(e, (e, r) => {
                    if (Xi.und(t)) n.push(e.start());
                    else {
                        const i = this._getProps(t, e, r);
                        i && n.push(e.start(i));
                    }
                }),
                n
            );
        }),
        (t.stop = function () {
            return (Ji(e, (e) => e.stop(...arguments)), this);
        }),
        (t.update = function (t) {
            return (Ji(e, (e, n) => e.update(this._getProps(t, e, n))), this);
        }));
    const n = function (e, t, n) {
        return Xi.fun(e) ? e(n, t) : e;
    };
    return ((t._getProps = n), t);
};
function Ls(e, t) {
    const n = Xi.fun(e),
        [[r], i] = (function (e, t, n) {
            const r = Xi.fun(t) && t;
            r && !n && (n = []);
            const i = H.useMemo(() => (r || 3 == arguments.length ? Ws() : void 0), []),
                a = H.useRef(0),
                o = fo(),
                s = H.useMemo(
                    () => ({
                        ctrls: [],
                        queue: [],
                        flush(e, t) {
                            const n = Os(e, t);
                            return a.current > 0 && !s.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                                ? xs(e, t)
                                : new Promise((r) => {
                                      (Ps(e, n),
                                          s.queue.push(() => {
                                              r(xs(e, t));
                                          }),
                                          o());
                                  });
                        },
                    }),
                    [],
                ),
                l = H.useRef([...s.ctrls]),
                u = [],
                c = vo(e) || 0;
            function f(e, n) {
                for (let i = e; i < n; i++) {
                    const e = l.current[i] || (l.current[i] = new ks(null, s.flush)),
                        n = r ? r(i, e) : t[i];
                    n && (u[i] = ys(n));
                }
            }
            (H.useMemo(() => {
                (Ji(l.current.slice(e, c), (e) => {
                    (!(function (e, t) {
                        (e.ref?.delete(e), t?.delete(e));
                    })(e, i),
                        e.stop(!0));
                }),
                    (l.current.length = e),
                    f(c, e));
            }, [e]),
                H.useMemo(() => {
                    f(0, Math.min(c, e));
                }, n));
            const d = l.current.map((e, t) => Os(e, u[t])),
                h = H.useContext(Bs),
                p = vo(h),
                v =
                    h !== p &&
                    (function (e) {
                        for (const t in e) return !0;
                        return !1;
                    })(h);
            (co(() => {
                (a.current++, (s.ctrls = l.current));
                const { queue: e } = s;
                (e.length && ((s.queue = []), Ji(e, (e) => e())),
                    Ji(l.current, (e, t) => {
                        (i?.add(e), v && e.start({ default: h }));
                        const n = u[t];
                        n &&
                            ((function (e, t) {
                                t && e.ref !== t && (e.ref?.delete(e), t.add(e), (e.ref = t));
                            })(e, n.ref),
                            e.ref ? e.queue.push(n) : e.start(n));
                    }));
            }),
                ho(() => () => {
                    Ji(s.ctrls, (e) => e.stop(!0));
                }));
            const y = d.map((e) => ({ ...e }));
            return i ? [y, i] : y;
        })(1, n ? e : [e], n ? [] : t);
    return n || 2 == arguments.length ? [r, i] : r;
}
var zs = class extends as {
    constructor(e, t) {
        (super(), (this.source = e), (this.idle = !0), (this._active = new Set()), (this.calc = za(...t)));
        const n = this._get(),
            r = Po(n);
        mo(this, r.create(n));
    }
    advance(e) {
        const t = this._get();
        (Yi(t, this.get()) || (go(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && Ms(this._active) && Ds(this));
    }
    _get() {
        const e = Xi.arr(this.source) ? this.source.map(Ia) : ea(Ia(this.source));
        return this.calc(...e);
    }
    _start() {
        this.idle &&
            !Ms(this._active) &&
            ((this.idle = !1),
            Ji(bo(this), (e) => {
                e.done = !1;
            }),
            Ki.skipAnimation ? (Ai.batchedUpdates(() => this.advance()), Ds(this)) : pa.start(this));
    }
    _attach() {
        let e = 1;
        (Ji(ea(this.source), (t) => {
            (Da(t) && Ha(t, this), rs(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
        }),
            (this.priority = e),
            this._start());
    }
    _detach() {
        (Ji(ea(this.source), (e) => {
            Da(e) && qa(e, this);
        }),
            this._active.clear(),
            Ds(this));
    }
    eventObserved(e) {
        'change' == e.type
            ? e.idle
                ? this.advance()
                : (this._active.add(e.parent), this._start())
            : 'idle' == e.type
              ? this._active.delete(e.parent)
              : 'priority' == e.type &&
                (this.priority = ea(this.source).reduce((e, t) => Math.max(e, (rs(t) ? t.priority : 0) + 1), 0));
    }
};
function Rs(e) {
    return !1 !== e.idle;
}
function Ms(e) {
    return !e.size || Array.from(e).every(Rs);
}
function Ds(e) {
    e.idle ||
        ((e.idle = !0),
        Ji(bo(e), (e) => {
            e.done = !0;
        }),
        Fa(e, { type: 'idle', parent: e }));
}
Ki.assign({ createStringInterpolator: io, to: (e, t) => new zs(e, t) });
var Is = le(),
    Vs = /^--/;
function Fs(e, t) {
    return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : 'number' != typeof t || 0 === t || Vs.test(e) || (Qs.hasOwnProperty(e) && Qs[e])
          ? ('' + t).trim()
          : t + 'px';
}
var $s = {};
var Qs = {
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
    Hs = ['Webkit', 'Ms', 'Moz', 'O'];
Qs = Object.keys(Qs).reduce(
    (e, t) => (Hs.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e),
    Qs,
);
var qs = /^(matrix|translate|scale|rotate|skew)/,
    Ks = /^(translate)/,
    Gs = /^(rotate|skew)/,
    Xs = (e, t) => (Xi.num(e) && 0 !== e ? e + t : e),
    Ys = (e, t) => (Xi.arr(e) ? e.every((e) => Ys(e, t)) : Xi.num(e) ? e === t : parseFloat(e) === t),
    Js = class extends xo {
        constructor({ x: e, y: t, z: n, ...r }) {
            const i = [],
                a = [];
            ((e || t || n) &&
                (i.push([e || 0, t || 0, n || 0]),
                a.push((e) => [`translate3d(${e.map((e) => Xs(e, 'px')).join(',')})`, Ys(e, 0)])),
                Zi(r, (e, t) => {
                    if ('transform' === t) (i.push([e || '']), a.push((e) => [e, '' === e]));
                    else if (qs.test(t)) {
                        if ((delete r[t], Xi.und(e))) return;
                        const n = Ks.test(t) ? 'px' : Gs.test(t) ? 'deg' : '';
                        (i.push(ea(e)),
                            a.push(
                                'rotate3d' === t
                                    ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${Xs(i, n)})`, Ys(i, 0)]
                                    : (e) => [
                                          `${t}(${e.map((e) => Xs(e, n)).join(',')})`,
                                          Ys(e, t.startsWith('scale') ? 1 : 0),
                                      ],
                            ));
                    }
                }),
                i.length && (r.transform = new Zs(i, a)),
                super(r));
        }
    },
    Zs = class extends $a {
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
                Ji(this.inputs, (n, r) => {
                    const i = Ia(n[0]),
                        [a, o] = this.transforms[r](Xi.arr(i) ? i : n.map(Ia));
                    ((e += ' ' + a), (t = t && o));
                }),
                t ? 'none' : e
            );
        }
        observerAdded(e) {
            1 == e && Ji(this.inputs, (e) => Ji(e, (e) => Da(e) && Ha(e, this)));
        }
        observerRemoved(e) {
            0 == e && Ji(this.inputs, (e) => Ji(e, (e) => Da(e) && qa(e, this)));
        }
        eventObserved(e) {
            ('change' == e.type && (this._value = null), Fa(this, e));
        }
    };
Ki.assign({
    batchedUpdates: Is.unstable_batchedUpdates,
    createStringInterpolator: io,
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
var el = ((
    e,
    {
        applyAnimatedValues: t = () => !1,
        createAnimatedStyle: n = (e) => new xo(e),
        getComponentProps: r = (e) => e,
    } = {},
) => {
    const i = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: r },
        a = (e) => {
            const t = No(e) || 'Anonymous';
            return (
                ((e = Xi.str(e) ? a[e] || (a[e] = To(e, i)) : e[Ao] || (e[Ao] = To(e, i))).displayName =
                    `Animated(${t})`),
                e
            );
        };
    return (
        Zi(e, (t, n) => {
            (Xi.arr(e) && (n = No(t)), (a[n] = a(t)));
        }),
        { animated: a }
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
                { className: r, style: i, children: a, scrollTop: o, scrollLeft: s, viewBox: l, ...u } = t,
                c = Object.values(u),
                f = Object.keys(u).map((t) =>
                    n || e.hasAttribute(t) ? t : $s[t] || ($s[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                );
            void 0 !== a && (e.textContent = a);
            for (const d in i)
                if (i.hasOwnProperty(d)) {
                    const t = Fs(d, i[d]);
                    Vs.test(d) ? e.style.setProperty(d, t) : (e.style[d] = t);
                }
            (f.forEach((t, n) => {
                e.setAttribute(t, c[n]);
            }),
                void 0 !== r && (e.className = r),
                void 0 !== o && (e.scrollTop = o),
                void 0 !== s && (e.scrollLeft = s),
                void 0 !== l && e.setAttribute('viewBox', l));
        },
        createAnimatedStyle: (e) => new Js(e),
        getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
    },
).animated;
function tl(e, t) {
    (void 0 === t && (t = 'Illegal state'),
        e ||
            (function (e) {
                throw new Error('[mobx-utils] ' + e);
            })(t));
}
var nl,
    rl = function (e) {
        return e && e !== Object.prototype && Object.getOwnPropertyNames(e).concat(rl(Object.getPrototypeOf(e)) || []);
    },
    il = function (e) {
        return (function (e) {
            var t = rl(e);
            return t.filter(function (e, n) {
                return t.indexOf(e) === n;
            });
        })(e).filter(function (e) {
            return 'constructor' !== e && !~e.indexOf('__');
        });
    },
    al = 'pending',
    ol = 'fulfilled',
    sl = 'rejected';
function ll(e) {
    switch (this.state) {
        case al:
            return e.pending && e.pending(this.value);
        case sl:
            return e.rejected && e.rejected(this.value);
        case ol:
            return e.fulfilled ? e.fulfilled(this.value) : this.value;
    }
}
function ul(e, t) {
    if (
        (tl(arguments.length <= 2, 'fromPromise expects up to two arguments'),
        tl(
            'function' == typeof e || ('object' == typeof e && e && 'function' == typeof e.then),
            'Please pass a promise or function to fromPromise',
        ),
        !0 === e.isPromiseBasedObservable)
    )
        return e;
    'function' == typeof e && (e = new Promise(e));
    var n = e;
    (e.then(
        Kn('observableFromPromise-resolve', function (e) {
            ((n.value = e), (n.state = ol));
        }),
        Kn('observableFromPromise-reject', function (e) {
            ((n.value = e), (n.state = sl));
        }),
    ),
        (n.isPromiseBasedObservable = !0),
        (n.case = ll));
    var r = !t || (t.state !== ol && t.state !== al) ? void 0 : t.value;
    return (sr(n, { value: r, state: al }, {}, { deep: !1 }), n);
}
(((nl = ul || (ul = {})).reject = Kn('fromPromise.reject', function (e) {
    var t = nl(Promise.reject(e));
    return ((t.state = sl), (t.value = e), t);
})),
    (nl.resolve = Kn('fromPromise.resolve', function (e) {
        void 0 === e && (e = void 0);
        var t = nl(Promise.resolve(e));
        return ((t.state = ol), (t.value = e), t);
    })));
var cl = function (e, t, n, r) {
    var i,
        a = arguments.length,
        o = a < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
    else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
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
            Cr(this),
            (function (e) {
                tn(e.name, !1, e, this, void 0);
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
        cl([Qt.ref], e.prototype, 'current', void 0),
        cl([Kn.bound], e.prototype, 'next', null),
        cl([Kn.bound], e.prototype, 'complete', null),
        cl([Kn.bound], e.prototype, 'error', null));
})();
var fl = function () {
        return (
            (fl =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            fl.apply(this, arguments)
        );
    },
    dl = function (e, t, n, r) {
        var i,
            a = arguments.length,
            o = a < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
        return (a > 3 && o && Object.defineProperty(t, n, o), o);
    },
    hl = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
!(function () {
    function e(e) {
        var t = this;
        (Object.defineProperty(this, 'model', { enumerable: !0, configurable: !0, writable: !0, value: e }),
            Object.defineProperty(this, 'localValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: Qt.map({}),
            }),
            Object.defineProperty(this, 'localComputedValues', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: Qt.map({}),
            }),
            Object.defineProperty(this, 'isPropertyDirty', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    return t.localValues.has(e);
                },
            }),
            Cr(this),
            tl(ii(e), 'createViewModel expects an observable object'));
        var n = il(this);
        il(e).forEach(function (r) {
            var i;
            if (!n.includes(r) && r !== tt && '__mobxDidRunLazyInitializers' !== r) {
                if (
                    (tl(
                        -1 === hl.indexOf(r),
                        'The propertyname ' + r + ' is reserved and cannot be used with viewModels',
                    ),
                    gr(e, r))
                ) {
                    var a = mi(e, r),
                        o = a.derivation.bind(t),
                        s = null === (i = a.setter_) || void 0 === i ? void 0 : i.bind(t);
                    t.localComputedValues.set(r, Gt(o, { set: s }));
                }
                var l = Object.getOwnPropertyDescriptor(e, r),
                    u = l ? { enumerable: l.enumerable } : {};
                Object.defineProperty(
                    t,
                    r,
                    fl(fl({}, u), {
                        configurable: !0,
                        get: function () {
                            return gr(e, r)
                                ? t.localComputedValues.get(r).get()
                                : t.isPropertyDirty(r)
                                  ? t.localValues.get(r)
                                  : t.model[r];
                        },
                        set: Kn(function (n) {
                            gr(e, r)
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
                ii(e)
                    ? e[tt].keys_()
                    : Hr(e) || Xr(e)
                      ? Array.from(e.keys())
                      : Ir(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void he(5)).forEach(function (e) {
                    var n = t.localValues.get(e),
                        r = t.model[e];
                    Ir(r) ? r.replace(n) : Hr(r) ? (r.clear(), r.merge(n)) : yr(n) || (t.model[e] = n);
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
        dl([Gt], e.prototype, 'isDirty', null),
        dl([Gt], e.prototype, 'changedValues', null),
        dl([Kn.bound], e.prototype, 'submit', null),
        dl([Kn.bound], e.prototype, 'reset', null),
        dl([Kn.bound], e.prototype, 'resetProperty', null));
})();
var pl = (function () {
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
            s = i.keyToName,
            l =
                void 0 === s
                    ? function (e) {
                          return '' + e;
                      }
                    : s,
            u = e.call(this) || this;
        (Object.defineProperty(u, '_base', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(u, '_ogmInfoKey', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(u, '_groupBy', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(u, '_keyToName', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
            Object.defineProperty(u, '_disposeBaseObserver', {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
            }),
            (u._keyToName = l),
            (u._groupBy = n),
            (u._ogmInfoKey = Symbol('ogmInfo' + o)),
            (u._base = t));
        for (var c = 0; c < t.length; c++) u._addItem(t[c]);
        return (
            (u._disposeBaseObserver = br(u._base, function (e) {
                if ('splice' === e.type)
                    _r(function () {
                        for (var t = 0, n = e.removed; t < n.length; t++) {
                            var r = n[t];
                            u._removeItem(r);
                        }
                        for (var i = 0, a = e.added; i < a.length; i++) {
                            var o = a[i];
                            u._addItem(o);
                        }
                    });
                else {
                    if ('update' !== e.type) throw new Error('illegal state');
                    _r(function () {
                        (u._removeItem(e.oldValue), u._addItem(e.newValue));
                    });
                }
            })),
            u
        );
    }
    (pl(t, e),
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
                        ((n = Qt([], { name: 'GroupArray[' + this._keyToName(t) + ']', deep: !1 })),
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
                        reaction: er(
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
})(Qr);
var vl = (function () {
        function e(e, t, n, r) {
            (Object.defineProperty(this, 'base', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                Object.defineProperty(this, 'args', { enumerable: !0, configurable: !0, writable: !0, value: t }),
                Object.defineProperty(this, 'version', { enumerable: !0, configurable: !0, writable: !0, value: n }),
                Object.defineProperty(this, 'versionChecker', {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r,
                }),
                Object.defineProperty(this, 'root', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                Object.defineProperty(this, 'closest', {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0,
                }),
                Object.defineProperty(this, 'closestIdx', {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0,
                }));
            for (var i = (this.closest = this.root = e), a = 0; a < this.args.length - 1 && (i = i.get(t[a])); a++)
                this.closest = i;
            this.closestIdx = a;
        }
        return (
            Object.defineProperty(e.prototype, 'exists', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    this.assertCurrentVersion();
                    var e = this.args.length;
                    return this.closestIdx >= e - 1 && this.closest.has(this.args[e - 1]);
                },
            }),
            Object.defineProperty(e.prototype, 'get', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    if ((this.assertCurrentVersion(), !this.exists())) throw new Error("Entry doesn't exist");
                    return this.closest.get(this.args[this.args.length - 1]);
                },
            }),
            Object.defineProperty(e.prototype, 'set', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (e) {
                    this.assertCurrentVersion();
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
                    if ((this.assertCurrentVersion(), !this.exists())) throw new Error("Entry doesn't exist");
                    var e = this.args.length;
                    this.closest.delete(this.args[e - 1]);
                    for (var t = this.root, n = [t], r = 0; r < e - 1; r++) ((t = t.get(this.args[r])), n.push(t));
                    for (r = n.length - 1; r > 0; r--) 0 === n[r].size && n[r - 1].delete(this.args[r - 1]);
                },
            }),
            Object.defineProperty(e.prototype, 'assertCurrentVersion', {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                    if (!this.versionChecker(this.version)) throw new Error('Concurrent modification exception');
                },
            }),
            e
        );
    })(),
    yl = (function () {
        function e() {
            var e = this;
            (Object.defineProperty(this, 'store', { enumerable: !0, configurable: !0, writable: !0, value: new Map() }),
                Object.defineProperty(this, 'argsLength', {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: -1,
                }),
                Object.defineProperty(this, 'currentVersion', {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0,
                }),
                Object.defineProperty(this, 'checkVersion', {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: function (t) {
                        return e.currentVersion === t;
                    },
                }));
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
                    return (
                        this.currentVersion >= Number.MAX_SAFE_INTEGER && (this.currentVersion = 0),
                        this.currentVersion++,
                        new vl(this.store, e, this.currentVersion, this.checkVersion)
                    );
                },
            }),
            e
        );
    })(),
    gl = function () {
        return (
            (gl =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            gl.apply(this, arguments)
        );
    },
    ml = function () {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var r = Array(e),
            i = 0;
        for (t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
        return r;
    };
function bl(e, t) {
    if ((void 0 === t && (t = !1), Xn(e))) throw new Error("computedFn shouldn't be used on actions");
    var n = !1,
        r = 0,
        i = 'boolean' == typeof t ? { keepAlive: t } : t,
        a = new yl();
    return function () {
        for (var t, o = this, s = [], l = 0; l < arguments.length; l++) s[l] = arguments[l];
        var u,
            c = a.entry(s);
        if (c.exists()) return c.get().get();
        if (!i.keepAlive && null === On.trackingDerivation) {
            !n &&
                (null !== (t = i.requiresReaction) && void 0 !== t ? t : On.computedRequiresReaction) &&
                (console.warn(
                    "Invoking a computedFn from outside a reactive context won't be memoized and is cleaned up immediately, unless keepAlive is set.",
                ),
                (n = !0));
            var f = e.apply(this, s);
            return (i.onCleanup && i.onCleanup.apply(i, ml([f], s)), f);
        }
        var d = Gt(
            function () {
                return (u = e.apply(o, s));
            },
            gl(gl({}, i), { name: 'computedFn(' + (i.name || e.name) + '#' + ++r + ')' }),
        );
        return (
            c.set(d),
            i.keepAlive ||
                rr(d, function () {
                    (a.entry(s).delete(), i.onCleanup && i.onCleanup.apply(i, ml([u], s)), (u = void 0));
                }),
            d.get()
        );
    };
}
var _l,
    wl,
    Sl = { exports: {} };
const kl = e(
        (_l ||
            ((_l = 1),
            (wl = Sl),
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
                                for (var s in i) e.call(i, s) && i[s] && n.push(s);
                            }
                        }
                    }
                    return n.join(' ');
                }
                wl.exports ? ((t.default = t), (wl.exports = t)) : (window.classNames = t);
            })()),
        Sl.exports),
    ),
    xl = [
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
    El = {
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
    Ol = console.assert,
    Pl = 1,
    Tl = 3,
    Cl = 0,
    Al = 1,
    Nl = 2,
    Ul = 3,
    Bl = {
        AREA: Nl,
        BASE: Nl,
        BASEFONT: Nl,
        DATALIST: Nl,
        HEAD: Nl,
        LINK: Nl,
        META: Nl,
        NOEMBED: Nl,
        NOFRAMES: Nl,
        PARAM: Nl,
        RP: Nl,
        SCRIPT: Nl,
        STYLE: Nl,
        TEMPLATE: Nl,
        TITLE: Nl,
        NOSCRIPT: Nl,
        HR: Ul,
        LISTING: Nl,
        PLAINTEXT: Nl,
        PRE: Nl,
        XMP: Nl,
        BR: Ul,
        RT: Nl,
        INPUT: Nl,
        SELECT: Nl,
        BUTTON: Nl,
        TEXTAREA: Nl,
        ABBR: Nl,
        CODE: Nl,
        IFRAME: Nl,
        TIME: Nl,
        VAR: Nl,
    },
    jl = new Set([
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
class Wl {
    constructor(e) {
        ((this.textNodes = []), (this.element = e));
    }
    hasText() {
        return this.textNodes.length > 0;
    }
}
class Ll {
    constructor(e, t) {
        ((this.separator = '​'),
            (this.threshold = Ml),
            (this.parser_ = e),
            void 0 !== t &&
                (void 0 !== t.className && (this.className = t.className),
                void 0 !== t.separator && (this.separator = t.separator),
                void 0 !== t.threshold && (this.threshold = t.threshold)));
    }
    applyToElement(e) {
        for (const t of this.getBlocks(e)) (Ol(t.hasText()), this.applyToParagraph(t));
    }
    *getBlocks(e, t) {
        if ((Ol(e.nodeType === Pl), this.className && e.classList.contains(this.className))) return;
        const n = (function (e) {
            const t = e.nodeName,
                n = Bl[t];
            if (void 0 !== n) return n;
            if ('function' == typeof getComputedStyle) {
                const t = getComputedStyle(e);
                switch (t.whiteSpace) {
                    case 'nowrap':
                    case 'pre':
                        return Nl;
                }
                const n = t.display;
                if (n) return 'inline' === n ? Cl : Al;
            }
            return jl.has(t) ? Al : Cl;
        })(e);
        if (n === Nl) return;
        if (n === Ul) return (t && t.hasText() && (yield t, (t.textNodes = [])), void Ol(!e.firstChild));
        Ol(n === Al || n === Cl);
        const r = !t || n === Al,
            i = r ? new Wl(e) : t;
        Ol(i);
        for (const a of e.childNodes)
            switch (a.nodeType) {
                case Pl:
                    for (const e of this.getBlocks(a, i)) yield e;
                    break;
                case Tl:
                    i.textNodes.push(a);
            }
        r && i.hasText() && (yield i);
    }
    applyToParagraph(e) {
        const t = e.textNodes;
        Ol(t.length > 0);
        const n = t.map((e) => e.nodeValue).join('');
        if (/^\s*$/.test(n)) return;
        const r = this.parser_.parse(n, this.threshold);
        if ((Ol(r.length > 0), Ol(r.reduce((e, t) => e + t.length, 0) === n.length), r.length <= 1)) return;
        const i = [];
        let a = 0;
        for (const o of r) (Ol(o.length > 0), (a += o.length), i.push(a));
        (Ol(i[0] > 0),
            Ol(i[i.length - 1] === n.length),
            ++i[i.length - 1],
            Ol(i.length > 1),
            this.splitTextNodes(t, i),
            this.applyBlockStyle(e.element));
    }
    splitTextNodes(e, t) {
        Ol(t.length > 0);
        const n = e.reduce((e, t) => e + (t.nodeValue ? t.nodeValue.length : 0), 0);
        Ol(t[t.length - 1] > n);
        let r = 0,
            i = t[0];
        Ol(i > 0);
        let a = 0;
        for (const o of e) {
            const e = o.nodeValue;
            if (!e) continue;
            const n = a + e.length;
            if (i >= n) {
                a = n;
                continue;
            }
            const s = [];
            let l = 0;
            for (; i < n; ) {
                const n = i - a;
                (Ol(n >= l), s.push(e.substring(l, n)), (l = n), ++r, Ol(t[r] > i), (i = t[r]));
            }
            (Ol(s.length > 0), l < e.length && s.push(e.substring(l)), this.splitTextNode(o, s), (a = n));
        }
        (Ol(a === n), Ol(r < t.length), Ol(t[r] >= n));
    }
    splitTextNode(e, t) {
        (Ol(t.length > 1), Ol(e.nodeValue === t.join('')));
        const n = this.separator;
        if ('string' == typeof n) return void (e.nodeValue = t.join(n));
        const r = e.ownerDocument;
        let i = [];
        for (const a of t) (a && i.push(r.createTextNode(a)), i.push(null));
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
const zl = (e, t) => {
        const n = Math.floor(e.length / 2);
        return t === e[n]
            ? n + 1
            : t < e[n]
              ? 1 === e.length
                  ? 0
                  : zl(e.slice(0, n), t)
              : 1 === e.length
                ? 1
                : n + zl(e.slice(n), t);
    },
    Rl = '▔',
    Ml = 1e3,
    Dl = 3;
class Il {
    constructor(e) {
        this.model = e;
    }
    static getUnicodeBlockFeature(e) {
        if (!e || e === Rl) return Rl;
        const t = e.codePointAt(0);
        if (void 0 === t) return Rl;
        return `${zl(xl, t)}`.padStart(3, '0');
    }
    static getFeature(e, t, n, r, i, a, o, s, l) {
        const u = Il.getUnicodeBlockFeature(e),
            c = Il.getUnicodeBlockFeature(t),
            f = Il.getUnicodeBlockFeature(n),
            d = Il.getUnicodeBlockFeature(r),
            h = Il.getUnicodeBlockFeature(i),
            p = Il.getUnicodeBlockFeature(a),
            v = {
                UP1: o,
                UP2: s,
                UP3: l,
                BP1: o + s,
                BP2: s + l,
                UW1: e,
                UW2: t,
                UW3: n,
                UW4: r,
                UW5: i,
                UW6: a,
                BW1: t + n,
                BW2: n + r,
                BW3: r + i,
                TW1: e + t + n,
                TW2: t + n + r,
                TW3: n + r + i,
                TW4: r + i + a,
                UB1: u,
                UB2: c,
                UB3: f,
                UB4: d,
                UB5: h,
                UB6: p,
                BB1: c + f,
                BB2: f + d,
                BB3: d + h,
                TB1: u + c + f,
                TB2: c + f + d,
                TB3: f + d + h,
                TB4: d + h + p,
                UQ1: o + u,
                UQ2: s + c,
                UQ3: l + f,
                BQ1: s + c + f,
                BQ2: s + f + d,
                BQ3: l + c + f,
                BQ4: l + f + d,
                TQ1: s + u + c + f,
                TQ2: s + c + f + d,
                TQ3: l + u + c + f,
                TQ4: l + c + f + d,
            };
        return Object.entries(v)
            .filter((e) => !e[1].includes(Rl))
            .map(([e, t]) => `${e}:${t}`);
    }
    static hasChildTextNode(e) {
        for (const t of e.childNodes) if (t.nodeType === Dl) return !0;
        return !1;
    }
    parse(e, t = Ml) {
        if ('' === e) return [];
        let n = 'U',
            r = 'U',
            i = 'U';
        const a = [e[0]];
        for (let o = 1; o < e.length; o++) {
            const s = Il.getFeature(
                    e[o - 3] || Rl,
                    e[o - 2] || Rl,
                    e[o - 1],
                    e[o],
                    e[o + 1] || Rl,
                    e[o + 2] || Rl,
                    n,
                    r,
                    i,
                )
                    .map((e) => this.model.get(e) || 0)
                    .reduce((e, t) => e + t),
                l = s > 0 ? 'B' : 'O';
            (s > t && a.push(''), (a[a.length - 1] += e[o]), (n = r), (r = i), (i = l));
        }
        return a;
    }
    applyElement(e, t = Ml) {
        new Ll(this, { separator: e.ownerDocument.createElement('wbr'), threshold: t }).applyToElement(e);
    }
    translateHTMLString(e, t = Ml) {
        if ('' === e) return e;
        const n = ((e) => new DOMParser().parseFromString(e, 'text/html'))(e);
        if (Il.hasChildTextNode(n.body)) {
            const e = n.createElement('span');
            (e.append(...n.body.childNodes), n.body.append(e));
        }
        return (this.applyElement(n.body.childNodes[0], t), n.body.innerHTML);
    }
}
const Vl = () => new Il(new Map(Object.entries(El)));
if (!H.useState) throw new Error('mobx-react-lite requires React with Hooks support');
if (!Cr) throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
function Fl(e) {
    e();
}
function $l(e) {
    return lr(gi(e, t));
    var t;
}
var Ql,
    Hl,
    ql = (function () {
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
    })(),
    Kl = new ('undefined' != typeof FinalizationRegistry ? FinalizationRegistry : ql)(function (e) {
        var t;
        (null === (t = e.reaction) || void 0 === t || t.dispose(), (e.reaction = null));
    }),
    Gl = { exports: {} },
    Xl = {};
var Yl,
    Jl,
    Zl =
        (Hl ||
            ((Hl = 1),
            (Gl.exports = (function () {
                if (Ql) return Xl;
                Ql = 1;
                var e = Q(),
                    t =
                        'function' == typeof Object.is
                            ? Object.is
                            : function (e, t) {
                                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
                              },
                    n = e.useState,
                    r = e.useEffect,
                    i = e.useLayoutEffect,
                    a = e.useDebugValue;
                function o(e) {
                    var n = e.getSnapshot;
                    e = e.value;
                    try {
                        var r = n();
                        return !t(e, r);
                    } catch (i) {
                        return !0;
                    }
                }
                var s =
                    'undefined' == typeof window ||
                    void 0 === window.document ||
                    void 0 === window.document.createElement
                        ? function (e, t) {
                              return t();
                          }
                        : function (e, t) {
                              var s = t(),
                                  l = n({ inst: { value: s, getSnapshot: t } }),
                                  u = l[0].inst,
                                  c = l[1];
                              return (
                                  i(
                                      function () {
                                          ((u.value = s), (u.getSnapshot = t), o(u) && c({ inst: u }));
                                      },
                                      [e, s, t],
                                  ),
                                  r(
                                      function () {
                                          return (
                                              o(u) && c({ inst: u }),
                                              e(function () {
                                                  o(u) && c({ inst: u });
                                              })
                                          );
                                      },
                                      [e],
                                  ),
                                  a(s),
                                  s
                              );
                          };
                return ((Xl.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : s), Xl);
            })())),
        Gl.exports);
function eu(e) {
    e.reaction = new jn('observer'.concat(e.name), function () {
        var t;
        ((e.stateVersion = Symbol()), null === (t = e.onStoreChange) || void 0 === t || t.call(e));
    });
}
var tu = 'function' == typeof Symbol && Symbol.for,
    nu =
        null !==
            (Jl =
                null === (Yl = Object.getOwnPropertyDescriptor(function () {}, 'name')) || void 0 === Yl
                    ? void 0
                    : Yl.configurable) &&
        void 0 !== Jl &&
        Jl,
    ru = tu
        ? Symbol.for('react.forward_ref')
        : 'function' == typeof H.forwardRef &&
          H.forwardRef(function (e) {
              return null;
          }).$$typeof,
    iu = tu
        ? Symbol.for('react.memo')
        : 'function' == typeof H.memo &&
          H.memo(function (e) {
              return null;
          }).$$typeof;
function au(e, t) {
    if (iu && e.$$typeof === iu)
        throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
        );
    var n = !1,
        r = e,
        i = e.displayName || e.name;
    if (ru && e.$$typeof === ru && ((n = !0), 'function' != typeof (r = e.render)))
        throw new Error('[mobx-react-lite] `render` property of ForwardRef was not a function');
    var a = function (e, t) {
        return (function (e, t) {
            void 0 === t && (t = 'observed');
            var n = q.useRef(null);
            if (!n.current) {
                var r = {
                    reaction: null,
                    onStoreChange: null,
                    stateVersion: Symbol(),
                    name: t,
                    subscribe: function (e) {
                        return (
                            Kl.unregister(r),
                            (r.onStoreChange = e),
                            r.reaction || (eu(r), (r.stateVersion = Symbol())),
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
                (o.reaction || (eu(o), Kl.register(n, o, o)),
                q.useDebugValue(o.reaction, $l),
                Zl.useSyncExternalStore(o.subscribe, o.getSnapshot, o.getSnapshot),
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
        nu && Object.defineProperty(a, 'name', { value: e.name, writable: !0, configurable: !0 }),
        e.contextTypes && (a.contextTypes = e.contextTypes),
        n && (a = H.forwardRef(a)),
        (function (e, t) {
            Object.keys(e).forEach(function (n) {
                su[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
            });
        })(e, (a = H.memo(a))),
        a
    );
}
var ou,
    su = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
((ou = Is.unstable_batchedUpdates) || (ou = Fl), or({ reactionScheduler: ou }), Kl.finalizeAllImmediately);
var lu = function () {
    return (
        (lu =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
            }),
        lu.apply(this, arguments)
    );
};
function uu(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    }
    return n;
}
function cu(e) {
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
function fu(e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
        i,
        a = n.call(e),
        o = [];
    try {
        for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; ) o.push(r.value);
    } catch (s) {
        i = { error: s };
    } finally {
        try {
            r && !r.done && (n = a.return) && n.call(a);
        } finally {
            if (i) throw i.error;
        }
    }
    return o;
}
function du(e, t, n) {
    if (2 === arguments.length)
        for (var r, i = 0, a = t.length; i < a; i++)
            (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
    return e.concat(r || Array.prototype.slice.call(t));
}
var hu = {},
    pu = 'xstate.guard';
function vu(e) {
    return Object.keys(e);
}
function yu(e, t, n) {
    void 0 === n && (n = '.');
    var r = bu(e, n),
        i = bu(t, n);
    return Wu(i)
        ? !!Wu(r) && i === r
        : Wu(r)
          ? r in i
          : vu(r).every(function (e) {
                return e in i && yu(r[e], i[e]);
            });
}
function gu(e) {
    try {
        return Wu(e) || 'number' == typeof e ? ''.concat(e) : e.type;
    } catch (t) {
        throw new Error('Events must be strings or objects with a string event.type property.');
    }
}
function mu(e, t) {
    try {
        return Bu(e) ? e : e.toString().split(t);
    } catch (n) {
        throw new Error("'".concat(e, "' is not a valid state path."));
    }
}
function bu(e, t) {
    return 'object' == typeof (n = e) && 'value' in n && 'context' in n && 'event' in n && '_event' in n
        ? e.value
        : Bu(e)
          ? _u(e)
          : 'string' != typeof e
            ? e
            : _u(mu(e, t));
    var n;
}
function _u(e) {
    if (1 === e.length) return e[0];
    for (var t = {}, n = t, r = 0; r < e.length - 1; r++)
        r === e.length - 2 ? (n[e[r]] = e[r + 1]) : ((n[e[r]] = {}), (n = n[e[r]]));
    return t;
}
function wu(e, t) {
    for (var n = {}, r = vu(e), i = 0; i < r.length; i++) {
        var a = r[i];
        n[a] = t(e[a], a, e, i);
    }
    return n;
}
function Su(e, t, n) {
    var r,
        i,
        a = {};
    try {
        for (var o = cu(vu(e)), s = o.next(); !s.done; s = o.next()) {
            var l = s.value,
                u = e[l];
            n(u) && (a[l] = t(u, l, e));
        }
    } catch (c) {
        r = { error: c };
    } finally {
        try {
            s && !s.done && (i = o.return) && i.call(o);
        } finally {
            if (r) throw r.error;
        }
    }
    return a;
}
var ku = function (e) {
    return function (t) {
        var n,
            r,
            i = t;
        try {
            for (var a = cu(e), o = a.next(); !o.done; o = a.next()) {
                i = i[o.value];
            }
        } catch (s) {
            n = { error: s };
        } finally {
            try {
                o && !o.done && (r = a.return) && r.call(a);
            } finally {
                if (n) throw n.error;
            }
        }
        return i;
    };
};
function xu(e) {
    return e
        ? Wu(e)
            ? [[e]]
            : Eu(
                  vu(e).map(function (t) {
                      var n = e[t];
                      return 'string' == typeof n || (n && Object.keys(n).length)
                          ? xu(e[t]).map(function (e) {
                                return [t].concat(e);
                            })
                          : [[t]];
                  }),
              )
        : [[]];
}
function Eu(e) {
    var t;
    return (t = []).concat.apply(t, du([], fu(e), !1));
}
function Ou(e) {
    return Bu(e) ? e : [e];
}
function Pu(e) {
    return void 0 === e ? [] : Ou(e);
}
function Tu(e, t, n) {
    var r, i;
    if (ju(e)) return e(t, n.data);
    var a = {};
    try {
        for (var o = cu(Object.keys(e)), s = o.next(); !s.done; s = o.next()) {
            var l = s.value,
                u = e[l];
            ju(u) ? (a[l] = u(t, n.data)) : (a[l] = u);
        }
    } catch (c) {
        r = { error: c };
    } finally {
        try {
            s && !s.done && (i = o.return) && i.call(o);
        } finally {
            if (r) throw r.error;
        }
    }
    return a;
}
function Cu(e) {
    return e instanceof Promise || !(null === e || (!ju(e) && 'object' != typeof e) || !ju(e.then));
}
function Au(e, t) {
    var n,
        r,
        i = fu([[], []], 2),
        a = i[0],
        o = i[1];
    try {
        for (var s = cu(e), l = s.next(); !l.done; l = s.next()) {
            var u = l.value;
            t(u) ? a.push(u) : o.push(u);
        }
    } catch (c) {
        n = { error: c };
    } finally {
        try {
            l && !l.done && (r = s.return) && r.call(s);
        } finally {
            if (n) throw n.error;
        }
    }
    return [a, o];
}
function Nu(e, t) {
    return wu(e.states, function (e, n) {
        if (e) {
            var r = (Wu(t) ? void 0 : t[n]) || (e ? e.current : void 0);
            if (r) return { current: r, states: Nu(e, r) };
        }
    });
}
function Uu(e, t, n, r) {
    return e
        ? n.reduce(function (e, n) {
              var i,
                  a,
                  o = n.assignment,
                  s = { state: r, action: n, _event: t },
                  l = {};
              if (ju(o)) l = o(e, t.data, s);
              else
                  try {
                      for (var u = cu(vu(o)), c = u.next(); !c.done; c = u.next()) {
                          var f = c.value,
                              d = o[f];
                          l[f] = ju(d) ? d(e, t.data, s) : d;
                      }
                  } catch (h) {
                      i = { error: h };
                  } finally {
                      try {
                          c && !c.done && (a = u.return) && a.call(u);
                      } finally {
                          if (i) throw i.error;
                      }
                  }
              return Object.assign({}, e, l);
          }, e)
        : e;
}
function Bu(e) {
    return Array.isArray(e);
}
function ju(e) {
    return 'function' == typeof e;
}
function Wu(e) {
    return 'string' == typeof e;
}
function Lu(e, t) {
    if (e)
        return Wu(e)
            ? { type: pu, name: e, predicate: t ? t[e] : void 0 }
            : ju(e)
              ? { type: pu, name: e.name, predicate: e }
              : e;
}
var zu,
    Ru,
    Mu,
    Du,
    Iu = (function () {
        return ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    })();
function Vu(e) {
    try {
        return '__xstatenode' in e;
    } catch (t) {
        return !1;
    }
}
function Fu(e, t) {
    return Wu(e) || 'number' == typeof e ? lu({ type: e }, t) : e;
}
function $u(e, t) {
    if (!Wu(e) && '$$type' in e && 'scxml' === e.$$type) return e;
    var n = Fu(e);
    return lu({ name: n.type, data: n, $$type: 'scxml', type: 'external' }, t);
}
function Qu(e, t) {
    return Ou(t).map(function (t) {
        return void 0 === t || 'string' == typeof t || Vu(t) ? { target: t, event: e } : lu(lu({}, t), { event: e });
    });
}
function Hu(e, t, n, r, i) {
    var a = e.options.guards,
        o = { state: i, cond: t, _event: r };
    if (t.type === pu) return ((null == a ? void 0 : a[t.name]) || t.predicate)(n, r.data, o);
    var s = a[t.type];
    if (!s) throw new Error("Guard '".concat(t.type, "' is not implemented on machine '").concat(e.id, "'."));
    return s(n, r.data, o);
}
function qu(e) {
    return 'string' == typeof e ? { type: e } : e;
}
function Ku(e, t, n) {
    if ('object' == typeof e) return e;
    var r = function () {};
    return { next: e, error: t || r, complete: n || r };
}
(((Ru = zu || (zu = {})).Start = 'xstate.start'),
    (Ru.Stop = 'xstate.stop'),
    (Ru.Raise = 'xstate.raise'),
    (Ru.Send = 'xstate.send'),
    (Ru.Cancel = 'xstate.cancel'),
    (Ru.NullEvent = ''),
    (Ru.Assign = 'xstate.assign'),
    (Ru.After = 'xstate.after'),
    (Ru.DoneState = 'done.state'),
    (Ru.DoneInvoke = 'done.invoke'),
    (Ru.Log = 'xstate.log'),
    (Ru.Init = 'xstate.init'),
    (Ru.Invoke = 'xstate.invoke'),
    (Ru.ErrorExecution = 'error.execution'),
    (Ru.ErrorCommunication = 'error.communication'),
    (Ru.ErrorPlatform = 'error.platform'),
    (Ru.ErrorCustom = 'xstate.error'),
    (Ru.Update = 'xstate.update'),
    (Ru.Pure = 'xstate.pure'),
    (Ru.Choose = 'xstate.choose'),
    ((Du = Mu || (Mu = {})).Parent = '#_parent'),
    (Du.Internal = '#_internal'));
var Gu = zu.Start,
    Xu = zu.Stop,
    Yu = zu.Raise,
    Ju = zu.Send,
    Zu = zu.Cancel,
    ec = zu.NullEvent,
    tc = zu.Assign;
(zu.After, zu.DoneState);
var nc = zu.Log,
    rc = zu.Init,
    ic = zu.Invoke;
zu.ErrorExecution;
var ac = zu.ErrorPlatform,
    oc = zu.ErrorCustom,
    sc = zu.Update,
    lc = zu.Choose,
    uc = zu.Pure,
    cc = $u({ type: rc });
function fc(e, t) {
    return (t && t[e]) || void 0;
}
function dc(e, t) {
    var n;
    if (Wu(e) || 'number' == typeof e) n = ju((r = fc(e, t))) ? { type: e, exec: r } : r || { type: e, exec: void 0 };
    else if (ju(e)) n = { type: e.name || e.toString(), exec: e };
    else {
        var r;
        if (ju((r = fc(e.type, t)))) n = lu(lu({}, e), { exec: r });
        else if (r) {
            var i = r.type || e.type;
            n = lu(lu(lu({}, r), e), { type: i });
        } else n = e;
    }
    return n;
}
var hc = function (e, t) {
    return e
        ? (Bu(e) ? e : [e]).map(function (e) {
              return dc(e, t);
          })
        : [];
};
function pc(e) {
    var t = dc(e);
    return lu(lu({ id: Wu(e) ? e : t.id }, t), { type: t.type });
}
function vc(e) {
    return Wu(e) ? { type: Yu, event: e } : yc(e, { to: Mu.Internal });
}
function yc(e, t) {
    return {
        to: t ? t.to : void 0,
        type: Ju,
        event: ju(e) ? e : Fu(e),
        delay: t ? t.delay : void 0,
        id: t && void 0 !== t.id ? t.id : ju(e) ? e.name : gu(e),
    };
}
var gc = function (e) {
    return { type: tc, assignment: e };
};
function mc(e, t) {
    var n = ''.concat(zu.DoneState, '.').concat(e),
        r = {
            type: n,
            data: t,
            toString: function () {
                return n;
            },
        };
    return r;
}
function bc(e, t) {
    var n = ''.concat(zu.DoneInvoke, '.').concat(e),
        r = {
            type: n,
            data: t,
            toString: function () {
                return n;
            },
        };
    return r;
}
function _c(e, t) {
    var n = ''.concat(zu.ErrorPlatform, '.').concat(e),
        r = {
            type: n,
            data: t,
            toString: function () {
                return n;
            },
        };
    return r;
}
function wc(e, t, n, r, i, a) {
    void 0 === a && (a = !1);
    var o = fu(
            a
                ? [[], i]
                : Au(i, function (e) {
                      return e.type === tc;
                  }),
            2,
        ),
        s = o[0],
        l = o[1],
        u = s.length ? Uu(n, r, s, t) : n,
        c = a ? [n] : void 0,
        f = Eu(
            l
                .map(function (n) {
                    var i;
                    switch (n.type) {
                        case Yu:
                            return { type: Yu, _event: $u(n.event) };
                        case Ju:
                            var o = (function (e, t, n, r) {
                                var i,
                                    a = { _event: n },
                                    o = $u(ju(e.event) ? e.event(t, n.data, a) : e.event);
                                if (Wu(e.delay)) {
                                    var s = r && r[e.delay];
                                    i = ju(s) ? s(t, n.data, a) : s;
                                } else i = ju(e.delay) ? e.delay(t, n.data, a) : e.delay;
                                var l = ju(e.to) ? e.to(t, n.data, a) : e.to;
                                return lu(lu({}, e), { to: l, _event: o, event: o.data, delay: i });
                            })(n, u, r, e.options.delays);
                            return o;
                        case nc:
                            return (function (e, t, n) {
                                return lu(lu({}, e), { value: Wu(e.expr) ? e.expr : e.expr(t, n.data, { _event: n }) });
                            })(n, u, r);
                        case lc:
                            if (
                                !(d =
                                    null ===
                                        (i = n.conds.find(function (n) {
                                            var i = Lu(n.cond, e.options.guards);
                                            return !i || Hu(e, i, u, r, t);
                                        })) || void 0 === i
                                        ? void 0
                                        : i.actions)
                            )
                                return [];
                            var s = fu(wc(e, t, u, r, hc(Pu(d), e.options.actions), a), 2),
                                l = s[0],
                                f = s[1];
                            return ((u = f), null == c || c.push(u), l);
                        case uc:
                            var d;
                            if (!(d = n.get(u, r.data))) return [];
                            var h = fu(wc(e, t, u, r, hc(Pu(d), e.options.actions), a), 2),
                                p = h[0],
                                v = h[1];
                            return ((u = v), null == c || c.push(u), p);
                        case Xu:
                            return (function (e, t, n) {
                                var r = ju(e.activity) ? e.activity(t, n.data) : e.activity,
                                    i = 'string' == typeof r ? { id: r } : r;
                                return { type: zu.Stop, activity: i };
                            })(n, u, r);
                        case tc:
                            ((u = Uu(u, r, [n], t)), null == c || c.push(u));
                            break;
                        default:
                            var y = dc(n, e.options.actions),
                                g = y.exec;
                            if (g && c) {
                                var m = c.length - 1;
                                y = lu(lu({}, y), {
                                    exec: function (e) {
                                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                        g.apply(void 0, du([c[m]], fu(t), !1));
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
    return [f, u];
}
var Sc = function (e) {
    return 'atomic' === e.type || 'final' === e.type;
};
function kc(e) {
    return vu(e.states).map(function (t) {
        return e.states[t];
    });
}
function xc(e) {
    var t = [e];
    return Sc(e) ? t : t.concat(Eu(kc(e).map(xc)));
}
function Ec(e, t) {
    var n,
        r,
        i,
        a,
        o,
        s,
        l,
        u,
        c = Pc(new Set(e)),
        f = new Set(t);
    try {
        for (var d = cu(f), h = d.next(); !h.done; h = d.next())
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
    var v = Pc(f);
    try {
        for (var y = cu(f), g = y.next(); !g.done; g = y.next()) {
            if ('compound' !== (k = g.value).type || (v.get(k) && v.get(k).length)) {
                if ('parallel' === k.type)
                    try {
                        for (var m = ((o = void 0), cu(kc(k))), b = m.next(); !b.done; b = m.next()) {
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
                    } catch (E) {
                        o = { error: E };
                    } finally {
                        try {
                            b && !b.done && (s = m.return) && s.call(m);
                        } finally {
                            if (o) throw o.error;
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
    } catch (O) {
        i = { error: O };
    } finally {
        try {
            g && !g.done && (a = y.return) && a.call(y);
        } finally {
            if (i) throw i.error;
        }
    }
    try {
        for (var w = cu(f), S = w.next(); !S.done; S = w.next()) {
            var k;
            for (p = (k = S.value).parent; p && !f.has(p); ) (f.add(p), (p = p.parent));
        }
    } catch (P) {
        l = { error: P };
    } finally {
        try {
            S && !S.done && (u = w.return) && u.call(w);
        } finally {
            if (l) throw l.error;
        }
    }
    return f;
}
function Oc(e, t) {
    var n = t.get(e);
    if (!n) return {};
    if ('compound' === e.type) {
        var r = n[0];
        if (!r) return {};
        if (Sc(r)) return r.key;
    }
    var i = {};
    return (
        n.forEach(function (e) {
            i[e.key] = Oc(e, t);
        }),
        i
    );
}
function Pc(e) {
    var t,
        n,
        r = new Map();
    try {
        for (var i = cu(e), a = i.next(); !a.done; a = i.next()) {
            var o = a.value;
            (r.has(o) || r.set(o, []), o.parent && (r.has(o.parent) || r.set(o.parent, []), r.get(o.parent).push(o)));
        }
    } catch (s) {
        t = { error: s };
    } finally {
        try {
            a && !a.done && (n = i.return) && n.call(i);
        } finally {
            if (t) throw t.error;
        }
    }
    return r;
}
function Tc(e, t) {
    return Oc(e, Pc(Ec([e], t)));
}
function Cc(e, t) {
    return Array.isArray(e)
        ? e.some(function (e) {
              return e === t;
          })
        : e instanceof Set && e.has(t);
}
function Ac(e, t) {
    return 'compound' === t.type
        ? kc(t).some(function (t) {
              return 'final' === t.type && Cc(e, t);
          })
        : 'parallel' === t.type &&
              kc(t).every(function (t) {
                  return Ac(e, t);
              });
}
function Nc(e) {
    return new Set(
        Eu(
            e.map(function (e) {
                return e.tags;
            }),
        ),
    );
}
function Uc(e, t) {
    if (e === t) return !0;
    if (void 0 === e || void 0 === t) return !1;
    if (Wu(e) || Wu(t)) return e === t;
    var n = vu(e),
        r = vu(t);
    return (
        n.length === r.length &&
        n.every(function (n) {
            return Uc(e[n], t[n]);
        })
    );
}
var Bc = (function () {
        function e(e) {
            var t,
                n,
                r = this;
            ((this.actions = []),
                (this.activities = hu),
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
                (this.activities = e.activities || hu),
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
                            return du(
                                [],
                                fu(
                                    new Set(
                                        Eu(
                                            du(
                                                [],
                                                fu(
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
                          _event: cc,
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
                    var r = cc;
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
                if ((void 0 === e && (e = this.value), void 0 === t && (t = '.'), Wu(e))) return [e];
                var r = vu(e);
                return r.concat.apply(
                    r,
                    du(
                        [],
                        fu(
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
                var n = uu(e, ['configuration', 'transitions', 'tags', 'machine']);
                return lu(lu({}, n), { tags: Array.from(t) });
            }),
            (e.prototype.matches = function (e) {
                return yu(e, this.value);
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
    jc = function (e, t) {
        return t(e);
    };
function Wc(e) {
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
function Lc(e, t, n, r) {
    var i,
        a = qu(e.src),
        o = null === (i = null == t ? void 0 : t.options.services) || void 0 === i ? void 0 : i[a.type],
        s = e.data ? Tu(e.data, n, r) : void 0,
        l = o
            ? (function (e, t, n) {
                  var r = Wc(t);
                  if (((r.deferred = !0), Vu(e))) {
                      var i = (r.state = jc(void 0, function () {
                          return (n ? e.withContext(n) : e).initialState;
                      }));
                      r.getSnapshot = function () {
                          return i;
                      };
                  }
                  return r;
              })(o, e.id, s)
            : Wc(e.id);
    return ((l.meta = e), l);
}
function zc(e) {
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
function Rc(e) {
    return lu(lu({ type: ic }, e), {
        toJSON: function () {
            (e.onDone, e.onError);
            var t = uu(e, ['onDone', 'onError']);
            return lu(lu({}, t), { type: ic, src: zc(e.src) });
        },
    });
}
var Mc = {},
    Dc = function (e) {
        return '#' === e[0];
    },
    Ic = (function () {
        function e(t, n, r) {
            var i,
                a = this;
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
                (this.id = this.config.id || du([this.machine.key], fu(this.path), !1).join(this.delimiter)),
                (this.version = this.parent ? this.parent.version : this.config.version),
                (this.type =
                    this.config.type ||
                    (this.config.parallel
                        ? 'parallel'
                        : this.config.states && vu(this.config.states).length
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
                    ? wu(this.config.states, function (t, n) {
                          var r,
                              i = new e(t, { _parent: a, _key: n });
                          return (Object.assign(a.idMap, lu((((r = {})[i.id] = i), r), i.idMap)), i);
                      })
                    : Mc));
            var o = 0;
            (!(function e(t) {
                var n, r;
                t.order = o++;
                try {
                    for (var i = cu(kc(t)), a = i.next(); !a.done; a = i.next()) {
                        e(a.value);
                    }
                } catch (s) {
                    n = { error: s };
                } finally {
                    try {
                        a && !a.done && (r = i.return) && r.call(i);
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
                (this.onEntry = Pu(this.config.entry || this.config.onEntry).map(function (e) {
                    return dc(e);
                })),
                (this.onExit = Pu(this.config.exit || this.config.onExit).map(function (e) {
                    return dc(e);
                })),
                (this.meta = this.config.meta),
                (this.doneData = 'final' === this.type ? this.config.data : void 0),
                (this.invoke = Pu(this.config.invoke).map(function (e, t) {
                    var n, r;
                    if (Vu(e))
                        return (
                            (a.machine.options.services = lu((((n = {})[e.id] = e), n), a.machine.options.services)),
                            Rc({ src: e.id, id: e.id })
                        );
                    if (Wu(e.src)) return Rc(lu(lu({}, e), { id: e.id || e.src, src: e.src }));
                    if (Vu(e.src) || ju(e.src)) {
                        var i = ''.concat(a.id, ':invocation[').concat(t, ']');
                        return (
                            (a.machine.options.services = lu((((r = {})[i] = e.src), r), a.machine.options.services)),
                            Rc(lu(lu({ id: i }, e), { src: i }))
                        );
                    }
                    var o = e.src;
                    return Rc(lu(lu({ id: o.type }, e), { src: o }));
                })),
                (this.activities = Pu(this.config.activities)
                    .concat(this.invoke)
                    .map(function (e) {
                        return pc(e);
                    })),
                (this.transition = this.transition.bind(this)),
                (this.tags = Pu(this.config.tags)));
        }
        return (
            (e.prototype._init = function () {
                this.__cache.transitions ||
                    xc(this).forEach(function (e) {
                        return e.on;
                    });
            }),
            (e.prototype.withConfig = function (t, n) {
                var r = this.options,
                    i = r.actions,
                    a = r.activities,
                    o = r.guards,
                    s = r.services,
                    l = r.delays;
                return new e(
                    this.config,
                    {
                        actions: lu(lu({}, i), t.actions),
                        activities: lu(lu({}, a), t.activities),
                        guards: lu(lu({}, o), t.guards),
                        services: lu(lu({}, s), t.services),
                        delays: lu(lu({}, l), t.delays),
                    },
                    null != n ? n : this.context,
                );
            }),
            (e.prototype.withContext = function (t) {
                return new e(this.config, this.options, t);
            }),
            Object.defineProperty(e.prototype, 'context', {
                get: function () {
                    return ju(this._context) ? this._context() : this._context;
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
                        states: wu(this.states, function (e) {
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
                        return ''.concat(zu.After, '(').concat(e, ')').concat(n);
                    })(ju(t) ? ''.concat(e.id, ':delay[').concat(n, ']') : t, e.id);
                    return (e.onEntry.push(yc(r, { delay: t })), e.onExit.push({ type: Zu, sendId: r }), r);
                };
                return (
                    Bu(t)
                        ? t.map(function (e, t) {
                              var r = n(e.delay, t);
                              return lu(lu({}, e), { event: r });
                          })
                        : Eu(
                              vu(t).map(function (e, r) {
                                  var i = t[e],
                                      a = Wu(i) ? { target: i } : i,
                                      o = isNaN(+e) ? e : +e,
                                      s = n(o, r);
                                  return Pu(a).map(function (e) {
                                      return lu(lu({}, e), { event: s, delay: o });
                                  });
                              }),
                          )
                ).map(function (t) {
                    var n = t.delay;
                    return lu(lu({}, e.formatTransition(t)), { delay: n });
                });
            }),
            (e.prototype.getStateNodes = function (e) {
                var t,
                    n = this;
                if (!e) return [];
                var r = e instanceof Bc ? e.value : bu(e, this.delimiter);
                if (Wu(r)) {
                    var i = this.getStateNode(r).initial;
                    return void 0 !== i ? this.getStateNodes((((t = {})[r] = i), t)) : [this, this.states[r]];
                }
                var a = vu(r),
                    o = a.map(function (e) {
                        return n.getStateNode(e);
                    });
                return (
                    o.push(this),
                    o.concat(
                        a.reduce(function (e, t) {
                            var i = n.getStateNode(t).getStateNodes(r[t]);
                            return e.concat(i);
                        }, []),
                    )
                );
            }),
            (e.prototype.handles = function (e) {
                var t = gu(e);
                return this.events.includes(t);
            }),
            (e.prototype.resolveState = function (e) {
                var t = Array.from(Ec([], this.getStateNodes(e.value)));
                return new Bc(
                    lu(lu({}, e), { value: this.resolve(e.value), configuration: t, done: Ac(t, this), tags: Nc(t) }),
                );
            }),
            (e.prototype.transitionLeafNode = function (e, t, n) {
                var r = this.getStateNode(e).next(t, n);
                return r && r.transitions.length ? r : this.next(t, n);
            }),
            (e.prototype.transitionCompoundNode = function (e, t, n) {
                var r = vu(e),
                    i = this.getStateNode(r[0])._transition(e[r[0]], t, n);
                return i && i.transitions.length ? i : this.next(t, n);
            }),
            (e.prototype.transitionParallelNode = function (e, t, n) {
                var r,
                    i,
                    a = {};
                try {
                    for (var o = cu(vu(e)), s = o.next(); !s.done; s = o.next()) {
                        var l = s.value,
                            u = e[l];
                        if (u) {
                            var c = this.getStateNode(l)._transition(u, t, n);
                            c && (a[l] = c);
                        }
                    }
                } catch (v) {
                    r = { error: v };
                } finally {
                    try {
                        s && !s.done && (i = o.return) && i.call(o);
                    } finally {
                        if (r) throw r.error;
                    }
                }
                var f = vu(a).map(function (e) {
                        return a[e];
                    }),
                    d = Eu(
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
                var h = Eu(
                        f.map(function (e) {
                            return e.entrySet;
                        }),
                    ),
                    p = Eu(
                        vu(a).map(function (e) {
                            return a[e].configuration;
                        }),
                    );
                return {
                    transitions: d,
                    entrySet: h,
                    exitSet: Eu(
                        f.map(function (e) {
                            return e.exitSet;
                        }),
                    ),
                    configuration: p,
                    source: t,
                    actions: Eu(
                        vu(a).map(function (e) {
                            return a[e].actions;
                        }),
                    ),
                };
            }),
            (e.prototype._transition = function (e, t, n) {
                return Wu(e)
                    ? this.transitionLeafNode(e, t, n)
                    : 1 === vu(e).length
                      ? this.transitionCompoundNode(e, t, n)
                      : this.transitionParallelNode(e, t, n);
            }),
            (e.prototype.next = function (e, t) {
                var n,
                    r,
                    i,
                    a = this,
                    o = t.name,
                    s = [],
                    l = [];
                try {
                    for (var u = cu(this.getCandidates(o)), c = u.next(); !c.done; c = u.next()) {
                        var f = c.value,
                            d = f.cond,
                            h = f.in,
                            p = e.context,
                            v =
                                !h ||
                                (Wu(h) && Dc(h)
                                    ? e.matches(bu(this.getStateNodeById(h).path, this.delimiter))
                                    : yu(bu(h, this.delimiter), ku(this.path.slice(0, -2))(e.value))),
                            y = !1;
                        try {
                            y = !d || Hu(this.machine, d, p, t, e);
                        } catch (b) {
                            throw new Error(
                                "Unable to evaluate guard '"
                                    .concat(d.name || d.type, "' in transition for event '")
                                    .concat(o, "' in state node '")
                                    .concat(this.id, "':\n")
                                    .concat(b.message),
                            );
                        }
                        if (y && v) {
                            (void 0 !== f.target && (l = f.target),
                                s.push.apply(s, du([], fu(f.actions), !1)),
                                (i = f));
                            break;
                        }
                    }
                } catch (_) {
                    n = { error: _ };
                } finally {
                    try {
                        c && !c.done && (r = u.return) && r.call(u);
                    } finally {
                        if (n) throw n.error;
                    }
                }
                if (i) {
                    if (!l.length)
                        return {
                            transitions: [i],
                            entrySet: [],
                            exitSet: [],
                            configuration: e.value ? [this] : [],
                            source: e,
                            actions: s,
                        };
                    var g = Eu(
                            l.map(function (t) {
                                return a.getRelativeStateNodes(t, e.historyValue);
                            }),
                        ),
                        m = !!i.internal;
                    return {
                        transitions: [i],
                        entrySet: m
                            ? []
                            : Eu(
                                  g.map(function (e) {
                                      return a.nodesFromChild(e);
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
                    a,
                    o,
                    s,
                    l = Ec([], r ? this.getStateNodes(r.value) : [this]),
                    u = e.configuration.length ? Ec(l, e.configuration) : l;
                try {
                    for (var c = cu(u), f = c.next(); !f.done; f = c.next()) {
                        Cc(l, (p = f.value)) || e.entrySet.push(p);
                    }
                } catch (w) {
                    i = { error: w };
                } finally {
                    try {
                        f && !f.done && (a = c.return) && a.call(c);
                    } finally {
                        if (i) throw i.error;
                    }
                }
                try {
                    for (var d = cu(l), h = d.next(); !h.done; h = d.next()) {
                        var p;
                        (Cc(u, (p = h.value)) && !Cc(e.exitSet, p.parent)) || e.exitSet.push(p);
                    }
                } catch (S) {
                    o = { error: S };
                } finally {
                    try {
                        h && !h.done && (s = d.return) && s.call(d);
                    } finally {
                        if (o) throw o.error;
                    }
                }
                e.source || ((e.exitSet = []), e.entrySet.push(this));
                var v = Eu(
                    e.entrySet.map(function (r) {
                        var i = [];
                        if ('final' !== r.type) return i;
                        var a = r.parent;
                        if (!a.parent) return i;
                        i.push(mc(r.id, r.doneData), mc(a.id, r.doneData ? Tu(r.doneData, t, n) : void 0));
                        var o = a.parent;
                        return (
                            'parallel' === o.type &&
                                kc(o).every(function (t) {
                                    return Ac(e.configuration, t);
                                }) &&
                                i.push(mc(o.id)),
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
                    m = fu(
                        [
                            Eu(
                                Array.from(y).map(function (e) {
                                    return du(
                                        du(
                                            [],
                                            fu(
                                                e.activities.map(function (e) {
                                                    return (function (e) {
                                                        var t = pc(e);
                                                        return { type: zu.Start, activity: t, exec: void 0 };
                                                    })(e);
                                                }),
                                            ),
                                            !1,
                                        ),
                                        fu(e.onEntry),
                                        !1,
                                    );
                                }),
                            ).concat(v.map(vc)),
                            Eu(
                                Array.from(g).map(function (e) {
                                    return du(
                                        du([], fu(e.onExit), !1),
                                        fu(
                                            e.activities.map(function (e) {
                                                return (function (e) {
                                                    var t = ju(e) ? e : pc(e);
                                                    return { type: zu.Stop, activity: t, exec: void 0 };
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
                return hc(_.concat(e.actions).concat(b), this.machine.options.actions);
            }),
            (e.prototype.transition = function (e, t, n) {
                void 0 === e && (e = this.initialState);
                var r,
                    i,
                    a = $u(t);
                if (e instanceof Bc) r = void 0 === n ? e : this.resolveState(Bc.from(e, n));
                else {
                    var o = Wu(e) ? this.resolve(_u(this.getResolvedPath(e))) : this.resolve(e),
                        s = null != n ? n : this.machine.context;
                    r = this.resolveState(Bc.from(o, s));
                }
                if (this.strict && !this.events.includes(a.name) && ((i = a.name), !/^(done|error)\./.test(i)))
                    throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(a.name, "'"));
                var l = this._transition(r.value, r, a) || {
                        transitions: [],
                        configuration: [],
                        entrySet: [],
                        exitSet: [],
                        source: r,
                        actions: [],
                    },
                    u = Ec([], this.getStateNodes(r.value)),
                    c = l.configuration.length ? Ec(u, l.configuration) : u;
                return ((l.configuration = du([], fu(c), !1)), this.resolveTransition(l, r, a));
            }),
            (e.prototype.resolveRaisedTransition = function (e, t, n) {
                var r,
                    i = e.actions;
                return (
                    ((e = this.transition(e, t))._event = n),
                    (e.event = n.data),
                    (r = e.actions).unshift.apply(r, du([], fu(i), !1)),
                    e
                );
            }),
            (e.prototype.resolveTransition = function (e, t, n, r) {
                var i,
                    a,
                    o = this;
                (void 0 === n && (n = cc), void 0 === r && (r = this.machine.context));
                var s = e.configuration,
                    l = !t || e.transitions.length > 0,
                    u = l ? Tc(this.machine, s) : void 0,
                    c = t
                        ? t.historyValue
                            ? t.historyValue
                            : e.source
                              ? this.machine.historyValue(t.value)
                              : void 0
                        : void 0,
                    f = t ? t.context : r,
                    d = this.getActions(e, f, n, t),
                    h = t ? lu({}, t.activities) : {};
                try {
                    for (var p = cu(d), v = p.next(); !v.done; v = p.next()) {
                        var y = v.value;
                        y.type === Gu
                            ? (h[y.activity.id || y.activity.type] = y)
                            : y.type === Xu && (h[y.activity.id || y.activity.type] = !1);
                    }
                } catch (W) {
                    i = { error: W };
                } finally {
                    try {
                        v && !v.done && (a = p.return) && a.call(p);
                    } finally {
                        if (i) throw i.error;
                    }
                }
                var g,
                    m,
                    b = fu(wc(this, t, f, n, d, this.machine.config.preserveActionOrder), 2),
                    _ = b[0],
                    w = b[1],
                    S = fu(
                        Au(_, function (e) {
                            return e.type === Yu || (e.type === Ju && e.to === Mu.Internal);
                        }),
                        2,
                    ),
                    k = S[0],
                    x = S[1],
                    E = _.filter(function (e) {
                        var t;
                        return e.type === Gu && (null === (t = e.activity) || void 0 === t ? void 0 : t.type) === ic;
                    }).reduce(
                        function (e, t) {
                            return ((e[t.activity.id] = Lc(t.activity, o.machine, w, n)), e);
                        },
                        t ? lu({}, t.children) : {},
                    ),
                    O = u ? e.configuration : t ? t.configuration : [],
                    P = Ac(O, this),
                    T = new Bc({
                        value: u || t.value,
                        context: w,
                        _event: n,
                        _sessionid: t ? t._sessionid : null,
                        historyValue: u
                            ? c
                                ? ((g = c), (m = u), { current: m, states: Nu(g, m) })
                                : void 0
                            : t
                              ? t.historyValue
                              : void 0,
                        history: !u || e.source ? t : void 0,
                        actions: u ? x : [],
                        activities: u ? h : t ? t.activities : {},
                        events: [],
                        configuration: O,
                        transitions: e.transitions,
                        children: E,
                        done: P,
                        tags: null == t ? void 0 : t.tags,
                        machine: this,
                    }),
                    C = f !== w;
                T.changed = n.name === sc || C;
                var A = T.history;
                A && delete A.history;
                var N =
                    !P &&
                    (this._transient ||
                        s.some(function (e) {
                            return e._transient;
                        }));
                if (!(l || (N && '' !== n.name))) return T;
                var U = T;
                if (!P)
                    for (N && (U = this.resolveRaisedTransition(U, { type: ec }, n)); k.length; ) {
                        var B = k.shift();
                        U = this.resolveRaisedTransition(U, B._event, n);
                    }
                var j =
                    U.changed ||
                    (A ? !!U.actions.length || C || typeof A.value != typeof U.value || !Uc(U.value, A.value) : void 0);
                return ((U.changed = j), (U.history = A), (U.tags = Nc(U.configuration)), U);
            }),
            (e.prototype.getStateNode = function (e) {
                if (Dc(e)) return this.machine.getStateNodeById(e);
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
                var t = Dc(e) ? e.slice(1) : e;
                if (t === this.id) return this;
                var n = this.machine.idMap[t];
                if (!n)
                    throw new Error(
                        "Child state node '#".concat(t, "' does not exist on machine '").concat(this.id, "'"),
                    );
                return n;
            }),
            (e.prototype.getStateNodeByPath = function (e) {
                if ('string' == typeof e && Dc(e))
                    try {
                        return this.getStateNodeById(e.slice(1));
                    } catch (i) {}
                for (var t = mu(e, this.delimiter).slice(), n = this; t.length; ) {
                    var r = t.shift();
                    if (!r.length) break;
                    n = n.getStateNode(r);
                }
                return n;
            }),
            (e.prototype.resolve = function (e) {
                var t,
                    n = this;
                if (!e) return this.initialStateValue || Mc;
                switch (this.type) {
                    case 'parallel':
                        return wu(this.initialStateValue, function (t, r) {
                            return t ? n.getStateNode(r).resolve(e[r] || t) : Mc;
                        });
                    case 'compound':
                        if (Wu(e)) {
                            var r = this.getStateNode(e);
                            return 'parallel' === r.type || 'compound' === r.type
                                ? (((t = {})[e] = r.initialStateValue), t)
                                : e;
                        }
                        return vu(e).length
                            ? wu(e, function (e, t) {
                                  return e ? n.getStateNode(t).resolve(e) : Mc;
                              })
                            : this.initialStateValue || {};
                    default:
                        return e || Mc;
                }
            }),
            (e.prototype.getResolvedPath = function (e) {
                if (Dc(e)) {
                    var t = this.machine.idMap[e.slice(1)];
                    if (!t) throw new Error("Unable to find state node '".concat(e, "'"));
                    return t.path;
                }
                return mu(e, this.delimiter);
            }),
            Object.defineProperty(e.prototype, 'initialStateValue', {
                get: function () {
                    var e, t;
                    if (this.__cache.initialStateValue) return this.__cache.initialStateValue;
                    if ('parallel' === this.type)
                        t = Su(
                            this.states,
                            function (e) {
                                return e.initialStateValue || Mc;
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
                        t = Sc(this.states[this.initial])
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
                            Wu(t.target) && Dc(t.target)
                                ? _u(this.machine.getStateNodeById(t.target).path.slice(this.path.length - 1))
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
                    return Sc(this)
                        ? [this]
                        : 'compound' !== this.type || this.initial
                          ? Eu(
                                xu(this.initialStateValue).map(function (t) {
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
                var t = fu(e),
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
                if (vu(this.states).length)
                    return {
                        current: e || this.initialStateValue,
                        states: Su(
                            this.states,
                            function (t, n) {
                                if (!e) return t.historyValue();
                                var r = Wu(e) ? void 0 : e[n];
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
                        ? Eu(
                              xu(r).map(function (e) {
                                  return n.getFromRelativePath(e);
                              }),
                          )
                        : n.initialStateNodes;
                }
                var i,
                    a,
                    o = ((i = n.path),
                    (a = 'states'),
                    function (e) {
                        var t,
                            n,
                            r = e;
                        try {
                            for (var o = cu(i), s = o.next(); !s.done; s = o.next()) {
                                var l = s.value;
                                r = r[a][l];
                            }
                        } catch (u) {
                            t = { error: u };
                        } finally {
                            try {
                                s && !s.done && (n = o.return) && n.call(o);
                            } finally {
                                if (t) throw t.error;
                            }
                        }
                        return r;
                    })(e).current;
                return Wu(o)
                    ? [n.getStateNode(o)]
                    : Eu(
                          xu(o).map(function (e) {
                              return 'deep' === t.history ? n.getFromRelativePath(e) : [n.states[e[0]]];
                          }),
                      );
            }),
            Object.defineProperty(e.prototype, 'stateIds', {
                get: function () {
                    var e = this,
                        t = Eu(
                            vu(this.states).map(function (t) {
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
                        a = new Set(this.ownEvents);
                    if (i)
                        try {
                            for (var o = cu(vu(i)), s = o.next(); !s.done; s = o.next()) {
                                var l = i[s.value];
                                if (l.states)
                                    try {
                                        for (
                                            var u = ((n = void 0), cu(l.events)), c = u.next();
                                            !c.done;
                                            c = u.next()
                                        ) {
                                            var f = c.value;
                                            a.add(''.concat(f));
                                        }
                                    } catch (d) {
                                        n = { error: d };
                                    } finally {
                                        try {
                                            c && !c.done && (r = u.return) && r.call(u);
                                        } finally {
                                            if (n) throw n.error;
                                        }
                                    }
                            }
                        } catch (h) {
                            e = { error: h };
                        } finally {
                            try {
                                s && !s.done && (t = o.return) && t.call(o);
                            } finally {
                                if (e) throw e.error;
                            }
                        }
                    return (this.__cache.events = Array.from(a));
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
                        if (!Wu(e)) return e;
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
                        if (void 0 !== e && '' !== e) return Pu(e);
                    })(e.target),
                    r =
                        'internal' in e
                            ? e.internal
                            : !n ||
                              n.some(function (e) {
                                  return Wu(e) && e[0] === t.delimiter;
                              }),
                    i = this.machine.options.guards,
                    a = this.resolveTarget(n),
                    o = lu(lu({}, e), {
                        actions: hc(Pu(e.actions)),
                        cond: Lu(e.cond, i),
                        target: a,
                        source: this,
                        internal: r,
                        eventType: e.event,
                        toJSON: function () {
                            return lu(lu({}, o), {
                                target: o.target
                                    ? o.target.map(function (e) {
                                          return '#'.concat(e.id);
                                      })
                                    : void 0,
                                source: '#'.concat(t.id),
                            });
                        },
                    });
                return o;
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
                            a = '*',
                            o = i[a],
                            s = void 0 === o ? [] : o,
                            l = uu(i, ['*']);
                        n = Eu(
                            vu(l)
                                .map(function (e) {
                                    return Qu(e, l[e]);
                                })
                                .concat(Qu('*', s)),
                        );
                    }
                else n = [];
                var u = this.config.always ? Qu('', this.config.always) : [],
                    c = this.config.onDone ? Qu(String(mc(this.id)), this.config.onDone) : [],
                    f = Eu(
                        this.invoke.map(function (e) {
                            var t = [];
                            return (
                                e.onDone && t.push.apply(t, du([], fu(Qu(String(bc(e.id)), e.onDone)), !1)),
                                e.onError && t.push.apply(t, du([], fu(Qu(String(_c(e.id)), e.onError)), !1)),
                                t
                            );
                        }),
                    ),
                    d = this.after,
                    h = Eu(
                        du(du(du(du([], fu(c), !1), fu(f), !1), fu(n), !1), fu(u), !1).map(function (e) {
                            return Pu(e).map(function (e) {
                                return r.formatTransition(e);
                            });
                        }),
                    );
                try {
                    for (var p = cu(d), v = p.next(); !v.done; v = p.next()) {
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
function Vc(e, t) {
    return new Ic(e, t);
}
var Fc = { deferEvents: !1 },
    $c = (function () {
        function e(e) {
            ((this.processingEvent = !1),
                (this.queue = []),
                (this.initialized = !1),
                (this.options = lu(lu({}, Fc), e)));
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
    Qc = new Map(),
    Hc = 0,
    qc = function () {
        return 'x:'.concat(Hc++);
    },
    Kc = function (e, t) {
        return (Qc.set(e, t), e);
    },
    Gc = function (e) {
        return Qc.get(e);
    },
    Xc = function (e) {
        Qc.delete(e);
    };
function Yc() {
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
function Jc(e) {
    if (Yc()) {
        var t = (function () {
            var e = Yc();
            if (e && '__xstate__' in e) return e.__xstate__;
        })();
        t && t.register(e);
    }
}
function Zc(e, t) {
    void 0 === t && (t = {});
    var n,
        r = e.initialState,
        i = new Set(),
        a = [],
        o = !1,
        s =
            ((n = {
                id: t.id,
                send: function (t) {
                    (a.push(t),
                        (function () {
                            if (!o) {
                                for (o = !0; a.length > 0; ) {
                                    var t = a.shift();
                                    ((r = e.transition(r, t, l)),
                                        i.forEach(function (e) {
                                            return e.next(r);
                                        }));
                                }
                                o = !1;
                            }
                        })());
                },
                getSnapshot: function () {
                    return r;
                },
                subscribe: function (e, t, n) {
                    var a = Ku(e, t, n);
                    return (
                        i.add(a),
                        a.next(r),
                        {
                            unsubscribe: function () {
                                i.delete(a);
                            },
                        }
                    );
                },
            }),
            lu(
                {
                    subscribe: function () {
                        return { unsubscribe: function () {} };
                    },
                    id: 'anonymous',
                    getSnapshot: function () {},
                },
                n,
            )),
        l = { parent: t.parent, self: s, id: t.id || 'anonymous', observers: i };
    return ((r = e.start ? e.start(l) : r), s);
}
var ef,
    tf,
    nf = { sync: !1, autoForward: !1 };
(((tf = ef || (ef = {}))[(tf.NotStarted = 0)] = 'NotStarted'),
    (tf[(tf.Running = 1)] = 'Running'),
    (tf[(tf.Stopped = 2)] = 'Stopped'));
var rf = (function () {
    function e(t, n) {
        var r = this;
        (void 0 === n && (n = e.defaultOptions),
            (this.machine = t),
            (this.scheduler = new $c()),
            (this.delayedEventsMap = {}),
            (this.listeners = new Set()),
            (this.contextListeners = new Set()),
            (this.stopListeners = new Set()),
            (this.doneListeners = new Set()),
            (this.eventListeners = new Set()),
            (this.sendListeners = new Set()),
            (this.initialized = !1),
            (this.status = ef.NotStarted),
            (this.children = new Map()),
            (this.forwardTo = new Set()),
            (this.init = this.start),
            (this.send = function (e, t) {
                if (Bu(e)) return (r.batch(e), r.state);
                var n = $u(Fu(e, t));
                if (r.status === ef.Stopped) return r.state;
                if (r.status !== ef.Running && !r.options.deferEvents)
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
                    i = r.parent && (t === Mu.Parent || r.parent.id === t),
                    a = i
                        ? r.parent
                        : Wu(t)
                          ? r.children.get(t) || Gc(t)
                          : (n = t) && 'function' == typeof n.send
                            ? t
                            : void 0;
                if (a)
                    'machine' in a
                        ? a.send(
                              lu(lu({}, e), {
                                  name: e.name === oc ? ''.concat(_c(r.id)) : e.name,
                                  origin: r.sessionId,
                              }),
                          )
                        : a.send(e.data);
                else if (!i)
                    throw new Error("Unable to send event to child '".concat(t, "' from service '").concat(r.id, "'."));
            }));
        var i = lu(lu({}, e.defaultOptions), n),
            a = i.clock,
            o = i.logger,
            s = i.parent,
            l = i.id,
            u = void 0 !== l ? l : t.id;
        ((this.id = u),
            (this.logger = o),
            (this.clock = a),
            (this.parent = s),
            (this.options = i),
            (this.scheduler = new $c({ deferEvents: this.options.deferEvents })),
            (this.sessionId = qc()));
    }
    return (
        Object.defineProperty(e.prototype, 'initialState', {
            get: function () {
                var e = this;
                return this._initialState
                    ? this._initialState
                    : jc(this, function () {
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
                for (var i = cu(e.actions), a = i.next(); !a.done; a = i.next()) {
                    var o = a.value;
                    this.exec(o, e, t);
                }
            } catch (s) {
                n = { error: s };
            } finally {
                try {
                    a && !a.done && (r = i.return) && r.call(i);
                } finally {
                    if (n) throw n.error;
                }
            }
        }),
        (e.prototype.update = function (e, t) {
            var n,
                r,
                i,
                a,
                o,
                s,
                l,
                u,
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
                    for (var f = cu(this.eventListeners), d = f.next(); !d.done; d = f.next()) {
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
                for (var h = cu(this.listeners), p = h.next(); !p.done; p = h.next()) {
                    (0, p.value)(e, e.event);
                }
            } catch (k) {
                i = { error: k };
            } finally {
                try {
                    p && !p.done && (a = h.return) && a.call(h);
                } finally {
                    if (i) throw i.error;
                }
            }
            try {
                for (var v = cu(this.contextListeners), y = v.next(); !y.done; y = v.next()) {
                    (0, y.value)(this.state.context, this.state.history ? this.state.history.context : void 0);
                }
            } catch (x) {
                o = { error: x };
            } finally {
                try {
                    y && !y.done && (s = v.return) && s.call(v);
                } finally {
                    if (o) throw o.error;
                }
            }
            var g = Ac(e.configuration || [], this.machine);
            if (this.state.configuration && g) {
                var m = e.configuration.find(function (e) {
                        return 'final' === e.type && e.parent === c.machine;
                    }),
                    b = m && m.doneData ? Tu(m.doneData, e.context, t) : void 0;
                try {
                    for (var _ = cu(this.doneListeners), w = _.next(); !w.done; w = _.next()) {
                        (0, w.value)(bc(this.id, b));
                    }
                } catch (E) {
                    l = { error: E };
                } finally {
                    try {
                        w && !w.done && (u = _.return) && u.call(_);
                    } finally {
                        if (l) throw l.error;
                    }
                }
                this.stop();
            }
        }),
        (e.prototype.onTransition = function (e) {
            return (this.listeners.add(e), this.status === ef.Running && e(this.state, this.state.event), this);
        }),
        (e.prototype.subscribe = function (e, t, n) {
            var r,
                i = this;
            if (!e) return { unsubscribe: function () {} };
            var a = n;
            return (
                'function' == typeof e ? (r = e) : ((r = e.next.bind(e)), (a = e.complete.bind(e))),
                this.listeners.add(r),
                this.status === ef.Running && r(this.state),
                a && this.onDone(a),
                {
                    unsubscribe: function () {
                        (r && i.listeners.delete(r), a && i.doneListeners.delete(a));
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
            if (this.status === ef.Running) return this;
            (Kc(this.sessionId, this), (this.initialized = !0), (this.status = ef.Running));
            var n =
                void 0 === e
                    ? this.initialState
                    : jc(this, function () {
                          return !Wu((n = e)) && 'value' in n && 'history' in n
                              ? t.machine.resolveState(e)
                              : t.machine.resolveState(Bc.from(e, t.machine.context));
                          var n;
                      });
            return (
                this.options.devTools && this.attachDev(),
                this.scheduler.initialize(function () {
                    t.update(n, cc);
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
                a,
                o,
                s,
                l,
                u,
                c = this;
            try {
                for (var f = cu(this.listeners), d = f.next(); !d.done; d = f.next()) {
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
                for (var p = cu(this.stopListeners), v = p.next(); !v.done; v = p.next()) {
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
                for (var y = cu(this.contextListeners), g = y.next(); !g.done; g = y.next()) {
                    h = g.value;
                    this.contextListeners.delete(h);
                }
            } catch (E) {
                i = { error: E };
            } finally {
                try {
                    g && !g.done && (a = y.return) && a.call(y);
                } finally {
                    if (i) throw i.error;
                }
            }
            try {
                for (var m = cu(this.doneListeners), b = m.next(); !b.done; b = m.next()) {
                    h = b.value;
                    this.doneListeners.delete(h);
                }
            } catch (O) {
                o = { error: O };
            } finally {
                try {
                    b && !b.done && (s = m.return) && s.call(m);
                } finally {
                    if (o) throw o.error;
                }
            }
            if (!this.initialized) return this;
            (this.state.configuration.forEach(function (e) {
                var t, n;
                try {
                    for (var r = cu(e.definition.exit), i = r.next(); !i.done; i = r.next()) {
                        var a = i.value;
                        c.exec(a, c.state);
                    }
                } catch (o) {
                    t = { error: o };
                } finally {
                    try {
                        i && !i.done && (n = r.return) && n.call(r);
                    } finally {
                        if (t) throw t.error;
                    }
                }
            }),
                this.children.forEach(function (e) {
                    ju(e.stop) && e.stop();
                }));
            try {
                for (var _ = cu(vu(this.delayedEventsMap)), w = _.next(); !w.done; w = _.next()) {
                    var S = w.value;
                    this.clock.clearTimeout(this.delayedEventsMap[S]);
                }
            } catch (P) {
                l = { error: P };
            } finally {
                try {
                    w && !w.done && (u = _.return) && u.call(_);
                } finally {
                    if (l) throw l.error;
                }
            }
            return (
                this.scheduler.clear(),
                (this.initialized = !1),
                (this.status = ef.Stopped),
                Xc(this.sessionId),
                this
            );
        }),
        (e.prototype.batch = function (e) {
            var t = this;
            if (this.status === ef.NotStarted && this.options.deferEvents);
            else if (this.status !== ef.Running)
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
                    a = !1,
                    o = [],
                    s = function (e) {
                        var n = $u(e);
                        (t.forward(n),
                            (i = jc(t, function () {
                                return t.machine.transition(i, n);
                            })),
                            o.push.apply(
                                o,
                                du(
                                    [],
                                    fu(
                                        i.actions.map(function (e) {
                                            return (
                                                (n = i),
                                                (r = (t = e).exec),
                                                lu(lu({}, t), {
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
                            (a = a || !!i.changed));
                    };
                try {
                    for (var l = cu(e), u = l.next(); !u.done; u = l.next()) {
                        s(u.value);
                    }
                } catch (c) {
                    n = { error: c };
                } finally {
                    try {
                        u && !u.done && (r = l.return) && r.call(l);
                    } finally {
                        if (n) throw n.error;
                    }
                }
                ((i.changed = a), (i.actions = o), t.update(i, $u(e[e.length - 1])));
            });
        }),
        (e.prototype.sender = function (e) {
            return this.send.bind(this, e);
        }),
        (e.prototype.nextState = function (e) {
            var t = this,
                n = $u(e);
            if (
                0 === n.name.indexOf(ac) &&
                !this.state.nextEvents.some(function (e) {
                    return 0 === e.indexOf(ac);
                })
            )
                throw n.data.data;
            return jc(this, function () {
                return t.machine.transition(t.state, n);
            });
        }),
        (e.prototype.forward = function (e) {
            var t, n;
            try {
                for (var r = cu(this.forwardTo), i = r.next(); !i.done; i = r.next()) {
                    var a = i.value,
                        o = this.children.get(a);
                    if (!o)
                        throw new Error(
                            "Unable to forward event '"
                                .concat(e, "' from interpreter '")
                                .concat(this.id, "' to nonexistant child '")
                                .concat(a, "'."),
                        );
                    o.send(e);
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
                a = e.exec || fc(e.type, n),
                o = ju(a) ? a : a ? a.exec : e.exec;
            if (o)
                try {
                    return o(r, i.data, { action: e, state: this.state, _event: i });
                } catch (b) {
                    throw (this.parent && this.parent.send({ type: 'xstate.error', data: b }), b);
                }
            switch (e.type) {
                case Ju:
                    var s = e;
                    if ('number' == typeof s.delay) return void this.defer(s);
                    s.to ? this.sendTo(s._event, s.to) : this.send(s._event);
                    break;
                case Zu:
                    this.cancel(e.sendId);
                    break;
                case Gu:
                    var l = e.activity;
                    if (!this.state.activities[l.id || l.type]) break;
                    if (l.type === zu.Invoke) {
                        var u = qu(l.src),
                            c = this.machine.options.services ? this.machine.options.services[u.type] : void 0,
                            f = l.id,
                            d = l.data,
                            h = 'autoForward' in l ? l.autoForward : !!l.forward;
                        if (!c) return;
                        var p = d ? Tu(d, r, i) : void 0;
                        if ('string' == typeof c) return;
                        var v = ju(c) ? c(r, i.data, { data: p, src: u, meta: l.meta }) : c;
                        if (!v) return;
                        var y = void 0;
                        (Vu(v) && ((v = p ? v.withContext(p) : v), (y = { autoForward: h })), this.spawn(v, f, y));
                    } else this.spawnActivity(l);
                    break;
                case Xu:
                    this.stopChild(e.activity.id);
                    break;
                case nc:
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
            t && (this.removeChild(e), ju(t.stop) && t.stop());
        }),
        (e.prototype.spawn = function (e, t, n) {
            if (Cu(e)) return this.spawnPromise(Promise.resolve(e), t);
            if (ju(e)) return this.spawnCallback(e, t);
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
                        return 'subscribe' in e && ju(e.subscribe);
                    } catch (t) {
                        return !1;
                    }
                })(e)
            )
                return this.spawnObservable(e, t);
            if (Vu(e)) return this.spawnMachine(e, lu(lu({}, n), { id: t }));
            if (null !== (r = e) && 'object' == typeof r && 'transition' in r && 'function' == typeof r.transition)
                return this.spawnBehavior(e, t);
            throw new Error('Unable to spawn entity "'.concat(t, '" of type "').concat(typeof e, '".'));
            var r, i;
        }),
        (e.prototype.spawnMachine = function (t, n) {
            var r = this;
            void 0 === n && (n = {});
            var i = new e(t, lu(lu({}, this.options), { parent: this, id: n.id || t.id })),
                a = lu(lu({}, nf), n);
            a.sync &&
                i.onTransition(function (e) {
                    r.send(sc, { state: e, id: i.id });
                });
            var o = i;
            return (
                this.children.set(i.id, o),
                a.autoForward && this.forwardTo.add(i.id),
                i
                    .onDone(function (e) {
                        (r.removeChild(i.id), r.send($u(e, { origin: i.id })));
                    })
                    .start(),
                o
            );
        }),
        (e.prototype.spawnBehavior = function (e, t) {
            var n = Zc(e, { id: t, parent: this });
            return (this.children.set(t, n), n);
        }),
        (e.prototype.spawnPromise = function (e, t) {
            var n,
                r = this,
                i = !1;
            e.then(
                function (e) {
                    i || ((n = e), r.removeChild(t), r.send($u(bc(t, e), { origin: t })));
                },
                function (e) {
                    if (!i) {
                        r.removeChild(t);
                        var n = _c(t, e);
                        try {
                            r.send($u(n, { origin: t }));
                        } catch (a) {
                            (r.devTools && r.devTools.send(n, r.state), r.machine.strict && r.stop());
                        }
                    }
                },
            );
            var a = {
                id: t,
                send: function () {},
                subscribe: function (t, n, r) {
                    var i = Ku(t, n, r),
                        a = !1;
                    return (
                        e.then(
                            function (e) {
                                a || (i.next(e), a || i.complete());
                            },
                            function (e) {
                                a || i.error(e);
                            },
                        ),
                        {
                            unsubscribe: function () {
                                return (a = !0);
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
            return (this.children.set(t, a), a);
        }),
        (e.prototype.spawnCallback = function (e, t) {
            var n,
                r,
                i = this,
                a = !1,
                o = new Set(),
                s = new Set();
            try {
                r = e(
                    function (e) {
                        ((n = e),
                            s.forEach(function (t) {
                                return t(e);
                            }),
                            a || i.send($u(e, { origin: t })));
                    },
                    function (e) {
                        o.add(e);
                    },
                );
            } catch (u) {
                this.send(_c(t, u));
            }
            if (Cu(r)) return this.spawnPromise(r, t);
            var l = {
                id: t,
                send: function (e) {
                    return o.forEach(function (t) {
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
                    ((a = !0), ju(r) && r());
                },
                toJSON: function () {
                    return { id: t };
                },
                getSnapshot: function () {
                    return n;
                },
            };
            return (this.children.set(t, l), l);
        }),
        (e.prototype.spawnObservable = function (e, t) {
            var n,
                r = this,
                i = e.subscribe(
                    function (e) {
                        ((n = e), r.send($u(e, { origin: t })));
                    },
                    function (e) {
                        (r.removeChild(t), r.send($u(_c(t, e), { origin: t })));
                    },
                    function () {
                        (r.removeChild(t), r.send($u(bc(t), { origin: t })));
                    },
                ),
                a = {
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
            return (this.children.set(t, a), a);
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
            var e = Yc();
            if (this.options.devTools && e) {
                if (e.__REDUX_DEVTOOLS_EXTENSION__) {
                    var t = 'object' == typeof this.options.devTools ? this.options.devTools : void 0;
                    ((this.devTools = e.__REDUX_DEVTOOLS_EXTENSION__.connect(
                        lu(
                            lu(
                                {
                                    name: this.id,
                                    autoPause: !0,
                                    stateSanitizer: function (e) {
                                        return { value: e.value, context: e.context, actions: e.actions };
                                    },
                                },
                                t,
                            ),
                            { features: lu({ jump: !1, skip: !1 }, t ? t.features : void 0) },
                        ),
                        this.machine,
                    )),
                        this.devTools.init(this.state));
                }
                Jc(this);
            }
        }),
        (e.prototype.toJSON = function () {
            return { id: this.id };
        }),
        (e.prototype[Iu] = function () {
            return this;
        }),
        (e.prototype.getSnapshot = function () {
            return this.status === ef.NotStarted ? this.initialState : this._state;
        }),
        (e.defaultOptions = (function () {
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
        (e.interpret = af),
        e
    );
})();
function af(e, t) {
    return new rf(e, t);
}
var of = H.useLayoutEffect;
var sf,
    lf,
    uf,
    cf,
    ff = { exports: {} },
    df = {},
    hf = { exports: {} },
    pf = {};
function vf() {
    return (
        lf ||
            ((lf = 1),
            (hf.exports = (function () {
                if (sf) return pf;
                sf = 1;
                var e = Q(),
                    t =
                        'function' == typeof Object.is
                            ? Object.is
                            : function (e, t) {
                                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
                              },
                    n = e.useState,
                    r = e.useEffect,
                    i = e.useLayoutEffect,
                    a = e.useDebugValue;
                function o(e) {
                    var n = e.getSnapshot;
                    e = e.value;
                    try {
                        var r = n();
                        return !t(e, r);
                    } catch (i) {
                        return !0;
                    }
                }
                var s =
                    'undefined' == typeof window ||
                    void 0 === window.document ||
                    void 0 === window.document.createElement
                        ? function (e, t) {
                              return t();
                          }
                        : function (e, t) {
                              var s = t(),
                                  l = n({ inst: { value: s, getSnapshot: t } }),
                                  u = l[0].inst,
                                  c = l[1];
                              return (
                                  i(
                                      function () {
                                          ((u.value = s), (u.getSnapshot = t), o(u) && c({ inst: u }));
                                      },
                                      [e, s, t],
                                  ),
                                  r(
                                      function () {
                                          return (
                                              o(u) && c({ inst: u }),
                                              e(function () {
                                                  o(u) && c({ inst: u });
                                              })
                                          );
                                      },
                                      [e],
                                  ),
                                  a(s),
                                  s
                              );
                          };
                return ((pf.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : s), pf);
            })())),
        hf.exports
    );
}
var yf =
    (cf ||
        ((cf = 1),
        (ff.exports = (function () {
            if (uf) return df;
            uf = 1;
            var e = vf();
            return (
                (df.useSubscription = function (t) {
                    return e.useSyncExternalStore(t.subscribe, t.getCurrentValue);
                }),
                df
            );
        })())),
    ff.exports);
var gf = function (e, t) {
        return e === t;
    },
    mf = function (e) {
        return 'state' in (n = e) && 'machine' in n
            ? 0 !== ('status' in (t = e) ? t.status : t._status)
                ? t.state
                : t.machine.initialState
            : 'state' in e
              ? e.state
              : void 0;
        var t, n;
    };
function bf(e, t, n, r) {
    (void 0 === n && (n = gf), void 0 === r && (r = mf));
    var i = H.useRef(t),
        a = H.useMemo(
            function () {
                var a,
                    o = r(e),
                    s = t(o);
                return {
                    getSnapshot: function () {
                        return o;
                    },
                    getCurrentValue: function () {
                        return s;
                    },
                    setCurrentValue: function (e) {
                        ((s = e), null == a || a());
                    },
                    subscribe: function (t) {
                        a = t;
                        var r = e.subscribe(function (e) {
                            o = e;
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
        o = yf.useSubscription(a),
        s = !1;
    if (i.current !== t) {
        var l = t(a.getSnapshot());
        n(o, l) || ((s = !0), (o = l));
    }
    return (
        of(function () {
            ((i.current = t), s && a.setCurrentValue(o));
        }),
        o
    );
}
export {
    ks as C,
    q as R,
    E as a,
    P as b,
    R as c,
    O as d,
    de as e,
    Kn as f,
    ce as g,
    kl as h,
    Ls as i,
    a as j,
    el as k,
    Vl as l,
    bl as m,
    au as n,
    Qt as o,
    Yn as p,
    bf as q,
    H as r,
    af as s,
    Vc as t,
    gn as u,
    gc as v,
};
