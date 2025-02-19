(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [678],
    {
        686: (t, e, n) => {
            'use strict';
            n.d(e, {
                He: () => u,
                Ld: () => w,
                eC: () => d,
                f3: () => a,
                iG: () => c,
                rS: () => p,
                sb: () => g,
                ys: () => o,
            });
            var s = n(810),
                i = n(363);
            const r = Symbol.for('Animated:node'),
                o = (t) => t && t[r],
                a = (t, e) => (0, s.dE)(t, r, e),
                u = (t) => t && t[r] && t[r].getPayload();
            class l {
                constructor() {
                    (this.payload = void 0), a(this, this);
                }
                getPayload() {
                    return this.payload || [];
                }
            }
            class c extends (698 == n.j ? l : null) {
                constructor(t) {
                    super(),
                        (this.done = !0),
                        (this.elapsedTime = void 0),
                        (this.lastPosition = void 0),
                        (this.lastVelocity = void 0),
                        (this.v0 = void 0),
                        (this.durationProgress = 0),
                        (this._value = t),
                        s.is.num(this._value) && (this.lastPosition = this._value);
                }
                static create(t) {
                    return new c(t);
                }
                getPayload() {
                    return [this];
                }
                getValue() {
                    return this._value;
                }
                setValue(t, e) {
                    return (
                        s.is.num(t) &&
                            ((this.lastPosition = t),
                            e && ((t = Math.round(t / e) * e), this.done && (this.lastPosition = t))),
                        this._value !== t && ((this._value = t), !0)
                    );
                }
                reset() {
                    const t = this.done;
                    (this.done = !1),
                        s.is.num(this._value) &&
                            ((this.elapsedTime = 0),
                            (this.durationProgress = 0),
                            (this.lastPosition = this._value),
                            t && (this.lastVelocity = null),
                            (this.v0 = null));
                }
            }
            class d extends (698 == n.j ? c : null) {
                constructor(t) {
                    super(0),
                        (this._string = null),
                        (this._toString = void 0),
                        (this._toString = (0, s.mD)({ output: [t, t] }));
                }
                static create(t) {
                    return new d(t);
                }
                getValue() {
                    let t = this._string;
                    return null == t ? (this._string = this._toString(this._value)) : t;
                }
                setValue(t) {
                    if (s.is.str(t)) {
                        if (t == this._string) return !1;
                        (this._string = t), (this._value = 1);
                    } else {
                        if (!super.setValue(t)) return !1;
                        this._string = null;
                    }
                    return !0;
                }
                reset(t) {
                    t && (this._toString = (0, s.mD)({ output: [this.getValue(), t] })),
                        (this._value = 0),
                        super.reset();
                }
            }
            const h = { dependencies: null };
            class p extends (698 == n.j ? l : null) {
                constructor(t) {
                    super(), (this.source = t), this.setValue(t);
                }
                getValue(t) {
                    const e = {};
                    return (
                        (0, s.rU)(this.source, (n, i) => {
                            var o;
                            (o = n) && o[r] === o
                                ? (e[i] = n.getValue(t))
                                : (0, s.j$)(n)
                                  ? (e[i] = (0, s.je)(n))
                                  : t || (e[i] = n);
                        }),
                        e
                    );
                }
                setValue(t) {
                    (this.source = t), (this.payload = this._makePayload(t));
                }
                reset() {
                    this.payload && (0, s.S6)(this.payload, (t) => t.reset());
                }
                _makePayload(t) {
                    if (t) {
                        const e = new Set();
                        return (0, s.rU)(t, this._addToPayload, e), Array.from(e);
                    }
                }
                _addToPayload(t) {
                    h.dependencies && (0, s.j$)(t) && h.dependencies.add(t);
                    const e = u(t);
                    e && (0, s.S6)(e, (t) => this.add(t));
                }
            }
            class f extends (698 == n.j ? p : null) {
                constructor(t) {
                    super(t);
                }
                static create(t) {
                    return new f(t);
                }
                getValue() {
                    return this.source.map((t) => t.getValue());
                }
                setValue(t) {
                    const e = this.getPayload();
                    return t.length == e.length
                        ? e.map((e, n) => e.setValue(t[n])).some(Boolean)
                        : (super.setValue(t.map(m)), !0);
                }
            }
            function m(t) {
                return ((0, s.Df)(t) ? d : c).create(t);
            }
            function g(t) {
                const e = o(t);
                return e ? e.constructor : s.is.arr(t) ? f : (0, s.Df)(t) ? d : c;
            }
            function y() {
                return (
                    (y =
                        Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
                            }
                            return t;
                        }),
                    y.apply(this, arguments)
                );
            }
            const v = (t, e) => {
                const n = !s.is.fun(t) || (t.prototype && t.prototype.isReactComponent);
                return (0, i.forwardRef)((r, o) => {
                    const a = (0, i.useRef)(null),
                        u =
                            n &&
                            (0, i.useCallback)(
                                (t) => {
                                    a.current = (function (t, e) {
                                        t && (s.is.fun(t) ? t(e) : (t.current = e));
                                        return e;
                                    })(o, t);
                                },
                                [o],
                            ),
                        l = (function (t, e) {
                            const n = new Set();
                            (h.dependencies = n), t.style && (t = y({}, t, { style: e.createAnimatedStyle(t.style) }));
                            return (t = new p(t)), (h.dependencies = null), [t, n];
                        })(r, e),
                        c = l[0],
                        d = l[1],
                        f = (0, s.NW)(),
                        m = () => {
                            const t = a.current;
                            if (n && !t) return;
                            !1 === (!!t && e.applyAnimatedValues(t, c.getValue(!0))) && f();
                        },
                        g = new b(m, d),
                        v = (0, i.useRef)();
                    (0, s.bt)(() => {
                        const t = v.current;
                        (v.current = g),
                            (0, s.S6)(d, (t) => (0, s.UI)(t, g)),
                            t && ((0, s.S6)(t.deps, (e) => (0, s.iL)(e, t)), s.Wn.cancel(t.update));
                    }),
                        (0, i.useEffect)(m, []),
                        (0, s.tf)(() => () => {
                            const t = v.current;
                            (0, s.S6)(t.deps, (e) => (0, s.iL)(e, t));
                        });
                    const _ = e.getComponentProps(c.getValue());
                    return i.createElement(t, y({}, _, { ref: u }));
                });
            };
            class b {
                constructor(t, e) {
                    (this.update = t), (this.deps = e);
                }
                eventObserved(t) {
                    'change' == t.type && s.Wn.write(this.update);
                }
            }
            const _ = Symbol.for('AnimatedComponent'),
                w = (
                    t,
                    {
                        applyAnimatedValues: e = () => !1,
                        createAnimatedStyle: n = (t) => new p(t),
                        getComponentProps: i = (t) => t,
                    } = {},
                ) => {
                    const r = { applyAnimatedValues: e, createAnimatedStyle: n, getComponentProps: i },
                        o = (t) => {
                            const e = S(t) || 'Anonymous';
                            return (
                                ((t = s.is.str(t) ? o[t] || (o[t] = v(t, r)) : t[_] || (t[_] = v(t, r))).displayName =
                                    `Animated(${e})`),
                                t
                            );
                        };
                    return (
                        (0, s.rU)(t, (e, n) => {
                            s.is.arr(t) && (n = S(e)), (o[n] = o(e));
                        }),
                        { animated: o }
                    );
                },
                S = (t) =>
                    s.is.str(t) ? t : t && s.is.str(t.displayName) ? t.displayName : (s.is.fun(t) && t.name) || null;
        },
        738: (t, e, n) => {
            'use strict';
            n.d(e, { Globals: () => s.OH, useSpring: () => St });
            var s = n(810),
                i = n(363),
                r = n(686);
            function o(t, e, n, s, i, r, o) {
                try {
                    var a = t[r](o),
                        u = a.value;
                } catch (t) {
                    return void n(t);
                }
                a.done ? e(u) : Promise.resolve(u).then(s, i);
            }
            function a(t) {
                return function () {
                    var e = this,
                        n = arguments;
                    return new Promise(function (s, i) {
                        var r = t.apply(e, n);
                        function a(t) {
                            o(r, s, i, a, u, 'next', t);
                        }
                        function u(t) {
                            o(r, s, i, a, u, 'throw', t);
                        }
                        a(void 0);
                    });
                };
            }
            function u(t, e) {
                var n = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                    Array.isArray(t) ||
                    (n = (function (t, e) {
                        if (t) {
                            if ('string' == typeof t) return l(t, e);
                            var n = {}.toString.call(t).slice(8, -1);
                            return (
                                'Object' === n && t.constructor && (n = t.constructor.name),
                                'Map' === n || 'Set' === n
                                    ? Array.from(t)
                                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                      ? l(t, e)
                                      : void 0
                            );
                        }
                    })(t)) ||
                    (e && t && 'number' == typeof t.length)
                ) {
                    n && (t = n);
                    var s = 0;
                    return function () {
                        return s >= t.length ? { done: !0 } : { done: !1, value: t[s++] };
                    };
                }
                throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
            }
            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, s = Array(e); n < e; n++) s[n] = t[n];
                return s;
            }
            function c() {
                return (
                    (c =
                        Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
                            }
                            return t;
                        }),
                    c.apply(this, arguments)
                );
            }
            function d(t, ...e) {
                return s.is.fun(t) ? t(...e) : t;
            }
            const h = (t, e) => !0 === t || !!(e && t && (s.is.fun(t) ? t(e) : (0, s.qo)(t).includes(e))),
                p = (t, e) => (s.is.obj(t) ? e && t[e] : t),
                f = (t, e) => (!0 === t.default ? t[e] : t.default ? t.default[e] : void 0),
                m = (t) => t,
                g = (t, e = m) => {
                    let n = y;
                    t.default && !0 !== t.default && ((t = t.default), (n = Object.keys(t)));
                    const i = {};
                    for (var r, o = u(n); !(r = o()).done; ) {
                        const n = r.value,
                            o = e(t[n], n);
                        s.is.und(o) || (i[n] = o);
                    }
                    return i;
                },
                y = 698 == n.j ? ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'] : null,
                v = {
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
            function b(t) {
                const e = (function (t) {
                    const e = {};
                    let n = 0;
                    if (
                        ((0, s.rU)(t, (t, s) => {
                            v[s] || ((e[s] = t), n++);
                        }),
                        n)
                    )
                        return e;
                })(t);
                if (e) {
                    const n = { to: e };
                    return (0, s.rU)(t, (t, s) => s in e || (n[s] = t)), n;
                }
                return c({}, t);
            }
            function _(t) {
                return (
                    (t = (0, s.je)(t)),
                    s.is.arr(t)
                        ? t.map(_)
                        : (0, s.Df)(t)
                          ? s.OH.createStringInterpolator({ range: [0, 1], output: [t, t] })(1)
                          : t
                );
            }
            function w(t) {
                for (const e in t) return !0;
                return !1;
            }
            function S(t) {
                return s.is.fun(t) || (s.is.arr(t) && s.is.obj(t[0]));
            }
            function k(t, e) {
                var n;
                null == (n = t.ref) || n.delete(t), null == e || e.delete(t);
            }
            function P(t, e) {
                var n;
                e && t.ref !== e && (null == (n = t.ref) || n.delete(t), e.add(t), (t.ref = e));
            }
            const j = c({}, { tension: 170, friction: 26 }, { mass: 1, damping: 1, easing: (t) => t, clamp: !1 });
            class A {
                constructor() {
                    (this.tension = void 0),
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
                        Object.assign(this, j);
                }
            }
            function O(t, e) {
                if (s.is.und(e.decay)) {
                    const n = !s.is.und(e.tension) || !s.is.und(e.friction);
                    (!n && s.is.und(e.frequency) && s.is.und(e.damping) && s.is.und(e.mass)) ||
                        ((t.duration = void 0), (t.decay = void 0)),
                        n && (t.frequency = void 0);
                } else t.duration = void 0;
            }
            const x = 698 == n.j ? [] : null;
            class I {
                constructor() {
                    (this.changed = !1),
                        (this.values = x),
                        (this.toValues = null),
                        (this.fromValues = x),
                        (this.to = void 0),
                        (this.from = void 0),
                        (this.config = new A()),
                        (this.immediate = !1);
                }
            }
            function C(t, { key: e, props: n, defaultProps: i, state: r, actions: o }) {
                return new Promise((a, u) => {
                    var l;
                    let p,
                        f,
                        m = h(null != (l = n.cancel) ? l : null == i ? void 0 : i.cancel, e);
                    if (m) v();
                    else {
                        s.is.und(n.pause) || (r.paused = h(n.pause, e));
                        let t = null == i ? void 0 : i.pause;
                        !0 !== t && (t = r.paused || h(t, e)),
                            (p = d(n.delay || 0, e)),
                            t ? (r.resumeQueue.add(y), o.pause()) : (o.resume(), y());
                    }
                    function g() {
                        r.resumeQueue.add(y), r.timeouts.delete(f), f.cancel(), (p = f.time - s.Wn.now());
                    }
                    function y() {
                        p > 0 ? ((f = s.Wn.setTimeout(v, p)), r.pauseQueue.add(g), r.timeouts.add(f)) : v();
                    }
                    function v() {
                        r.pauseQueue.delete(g), r.timeouts.delete(f), t <= (r.cancelId || 0) && (m = !0);
                        try {
                            o.start(c({}, n, { callId: t, cancel: m }), a);
                        } catch (t) {
                            u(t);
                        }
                    }
                });
            }
            const E = (t, e) =>
                    1 == e.length
                        ? e[0]
                        : e.some((t) => t.cancelled)
                          ? q(t.get())
                          : e.every((t) => t.noop)
                            ? R(t.get())
                            : T(
                                  t.get(),
                                  e.every((t) => t.finished),
                              ),
                R = (t) => ({ value: t, noop: !0, finished: !0, cancelled: !1 }),
                T = (t, e, n = !1) => ({ value: t, finished: e, cancelled: n }),
                q = (t) => ({ value: t, cancelled: !0, finished: !1 });
            function V(t, e, n, i) {
                const r = e.callId,
                    o = e.parentId,
                    l = e.onRest,
                    d = n.asyncTo,
                    h = n.promise;
                return o || t !== d || e.reset
                    ? (n.promise = a(function* () {
                          (n.asyncId = r), (n.asyncTo = t);
                          const p = g(e, (t, e) => ('onRest' === e ? void 0 : t));
                          let f, m;
                          const y = new Promise((t, e) => ((f = t), (m = e))),
                              v = (t) => {
                                  const e = (r <= (n.cancelId || 0) && q(i)) || (r !== n.asyncId && T(i, !1));
                                  if (e) throw ((t.result = e), m(t), t);
                              },
                              b = (t, e) => {
                                  const o = new $(),
                                      u = new L();
                                  return a(function* () {
                                      if (s.OH.skipAnimation) throw (U(n), (u.result = T(i, !1)), m(u), u);
                                      v(o);
                                      const a = s.is.obj(t) ? c({}, t) : c({}, e, { to: t });
                                      (a.parentId = r),
                                          (0, s.rU)(p, (t, e) => {
                                              s.is.und(a[e]) && (a[e] = t);
                                          });
                                      const l = yield i.start(a);
                                      return (
                                          v(o),
                                          n.paused &&
                                              (yield new Promise((t) => {
                                                  n.resumeQueue.add(t);
                                              })),
                                          l
                                      );
                                  })();
                              };
                          let _;
                          if (s.OH.skipAnimation) return U(n), T(i, !1);
                          try {
                              let e;
                              (e = s.is.arr(t)
                                  ? ((w = a(function* (t) {
                                        for (var e, n = u(t); !(e = n()).done; ) {
                                            const t = e.value;
                                            yield b(t);
                                        }
                                    })),
                                    function (t) {
                                        return w.apply(this, arguments);
                                    })(t)
                                  : Promise.resolve(t(b, i.stop.bind(i)))),
                                  yield Promise.all([e.then(f), y]),
                                  (_ = T(i.get(), !0, !1));
                          } catch (t) {
                              if (t instanceof $) _ = t.result;
                              else {
                                  if (!(t instanceof L)) throw t;
                                  _ = t.result;
                              }
                          } finally {
                              r == n.asyncId &&
                                  ((n.asyncId = o), (n.asyncTo = o ? d : void 0), (n.promise = o ? h : void 0));
                          }
                          var w;
                          return (
                              s.is.fun(l) &&
                                  s.Wn.batchedUpdates(() => {
                                      l(_, i, i.item);
                                  }),
                              _
                          );
                      })())
                    : h;
            }
            function U(t, e) {
                (0, s.yl)(t.timeouts, (t) => t.cancel()),
                    t.pauseQueue.clear(),
                    t.resumeQueue.clear(),
                    (t.asyncId = t.asyncTo = t.promise = void 0),
                    e && (t.cancelId = e);
            }
            class $ extends Error {
                constructor() {
                    super(
                        'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
                    ),
                        (this.result = void 0);
                }
            }
            class L extends Error {
                constructor() {
                    super('SkipAnimationSignal'), (this.result = void 0);
                }
            }
            const M = (t) => t instanceof F;
            let D = 1;
            class F extends s.B0 {
                constructor(...t) {
                    super(...t), (this.id = D++), (this.key = void 0), (this._priority = 0);
                }
                get priority() {
                    return this._priority;
                }
                set priority(t) {
                    this._priority != t && ((this._priority = t), this._onPriorityChange(t));
                }
                get() {
                    const t = (0, r.ys)(this);
                    return t && t.getValue();
                }
                to(...t) {
                    return s.OH.to(this, t);
                }
                interpolate(...t) {
                    return (0, s.LW)(), s.OH.to(this, t);
                }
                toJSON() {
                    return this.get();
                }
                observerAdded(t) {
                    1 == t && this._attach();
                }
                observerRemoved(t) {
                    0 == t && this._detach();
                }
                _attach() {}
                _detach() {}
                _onChange(t, e = !1) {
                    (0, s.k0)(this, { type: 'change', parent: this, value: t, idle: e });
                }
                _onPriorityChange(t) {
                    this.idle || s.fT.sort(this), (0, s.k0)(this, { type: 'priority', parent: this, priority: t });
                }
            }
            const z = Symbol.for('SpringPhase'),
                N = (t) => (1 & t[z]) > 0,
                H = (t) => (2 & t[z]) > 0,
                W = (t) => (4 & t[z]) > 0,
                Q = (t, e) => (e ? (t[z] |= 3) : (t[z] &= -3)),
                G = (t, e) => (e ? (t[z] |= 4) : (t[z] &= -5));
            class X extends (698 == n.j ? F : null) {
                constructor(t, e) {
                    if (
                        (super(),
                        (this.key = void 0),
                        (this.animation = new I()),
                        (this.queue = void 0),
                        (this.defaultProps = {}),
                        (this._state = {
                            paused: !1,
                            pauseQueue: new Set(),
                            resumeQueue: new Set(),
                            timeouts: new Set(),
                        }),
                        (this._pendingCalls = new Set()),
                        (this._lastCallId = 0),
                        (this._lastToId = 0),
                        (this._memoizedDuration = 0),
                        !s.is.und(t) || !s.is.und(e))
                    ) {
                        const n = s.is.obj(t) ? c({}, t) : c({}, e, { from: t });
                        s.is.und(n.default) && (n.default = !0), this.start(n);
                    }
                }
                get idle() {
                    return !(H(this) || this._state.asyncTo) || W(this);
                }
                get goal() {
                    return (0, s.je)(this.animation.to);
                }
                get velocity() {
                    const t = (0, r.ys)(this);
                    return t instanceof r.iG ? t.lastVelocity || 0 : t.getPayload().map((t) => t.lastVelocity || 0);
                }
                get hasAnimated() {
                    return N(this);
                }
                get isAnimating() {
                    return H(this);
                }
                get isPaused() {
                    return W(this);
                }
                advance(t) {
                    let e = !0,
                        n = !1;
                    const i = this.animation;
                    let o = i.config,
                        a = i.toValues;
                    const u = (0, r.He)(i.to);
                    !u && (0, s.j$)(i.to) && (a = (0, s.qo)((0, s.je)(i.to))),
                        i.values.forEach((l, c) => {
                            if (l.done) return;
                            const d = l.constructor == r.eC ? 1 : u ? u[c].lastPosition : a[c];
                            let h = i.immediate,
                                p = d;
                            if (!h) {
                                if (((p = l.lastPosition), o.tension <= 0)) return void (l.done = !0);
                                let e = (l.elapsedTime += t);
                                const n = i.fromValues[c],
                                    r =
                                        null != l.v0
                                            ? l.v0
                                            : (l.v0 = s.is.arr(o.velocity) ? o.velocity[c] : o.velocity);
                                let a;
                                if (s.is.und(o.duration))
                                    if (o.decay) {
                                        const t = !0 === o.decay ? 0.998 : o.decay,
                                            s = Math.exp(-(1 - t) * e);
                                        (p = n + (r / (1 - t)) * (1 - s)),
                                            (h = Math.abs(l.lastPosition - p) < 0.1),
                                            (a = r * s);
                                    } else {
                                        a = null == l.lastVelocity ? r : l.lastVelocity;
                                        const e =
                                                o.precision || (n == d ? 0.005 : Math.min(1, 0.001 * Math.abs(d - n))),
                                            i = o.restVelocity || e / 10,
                                            u = o.clamp ? 0 : o.bounce,
                                            c = !s.is.und(u),
                                            f = n == d ? l.v0 > 0 : n < d;
                                        let m,
                                            g = !1;
                                        const y = 1,
                                            v = Math.ceil(t / y);
                                        for (
                                            let t = 0;
                                            t < v && ((m = Math.abs(a) > i), m || ((h = Math.abs(d - p) <= e), !h));
                                            ++t
                                        ) {
                                            c && ((g = p == d || p > d == f), g && ((a = -a * u), (p = d)));
                                            (a +=
                                                ((1e-6 * -o.tension * (p - d) + 0.001 * -o.friction * a) / o.mass) * y),
                                                (p += a * y);
                                        }
                                    }
                                else {
                                    let s = 1;
                                    o.duration > 0 &&
                                        (this._memoizedDuration !== o.duration &&
                                            ((this._memoizedDuration = o.duration),
                                            l.durationProgress > 0 &&
                                                ((l.elapsedTime = o.duration * l.durationProgress),
                                                (e = l.elapsedTime += t))),
                                        (s = (o.progress || 0) + e / this._memoizedDuration),
                                        (s = s > 1 ? 1 : s < 0 ? 0 : s),
                                        (l.durationProgress = s)),
                                        (p = n + o.easing(s) * (d - n)),
                                        (a = (p - l.lastPosition) / t),
                                        (h = 1 == s);
                                }
                                (l.lastVelocity = a),
                                    Number.isNaN(p) && (console.warn('Got NaN while animating:', this), (h = !0));
                            }
                            u && !u[c].done && (h = !1),
                                h ? (l.done = !0) : (e = !1),
                                l.setValue(p, o.round) && (n = !0);
                        });
                    const l = (0, r.ys)(this),
                        c = l.getValue();
                    if (e) {
                        const t = (0, s.je)(i.to);
                        (c === t && !n) || o.decay
                            ? n && o.decay && this._onChange(c)
                            : (l.setValue(t), this._onChange(t)),
                            this._stop();
                    } else n && this._onChange(c);
                }
                set(t) {
                    return (
                        s.Wn.batchedUpdates(() => {
                            this._stop(), this._focus(t), this._set(t);
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
                    if (H(this)) {
                        const t = this.animation,
                            e = t.to,
                            n = t.config;
                        s.Wn.batchedUpdates(() => {
                            this._onStart(), n.decay || this._set(e, !1), this._stop();
                        });
                    }
                    return this;
                }
                update(t) {
                    return (this.queue || (this.queue = [])).push(t), this;
                }
                start(t, e) {
                    let n;
                    return (
                        s.is.und(t)
                            ? ((n = this.queue || []), (this.queue = []))
                            : (n = [s.is.obj(t) ? t : c({}, e, { to: t })]),
                        Promise.all(n.map((t) => this._update(t))).then((t) => E(this, t))
                    );
                }
                stop(t) {
                    const e = this.animation.to;
                    return (
                        this._focus(this.get()),
                        U(this._state, t && this._lastCallId),
                        s.Wn.batchedUpdates(() => this._stop(e, t)),
                        this
                    );
                }
                reset() {
                    this._update({ reset: !0 });
                }
                eventObserved(t) {
                    'change' == t.type ? this._start() : 'priority' == t.type && (this.priority = t.priority + 1);
                }
                _prepareNode(t) {
                    const e = this.key || '';
                    let n = t.to,
                        i = t.from;
                    (n = s.is.obj(n) ? n[e] : n),
                        (null == n || S(n)) && (n = void 0),
                        (i = s.is.obj(i) ? i[e] : i),
                        null == i && (i = void 0);
                    const o = { to: n, from: i };
                    if (!N(this)) {
                        if (t.reverse) {
                            var a = [i, n];
                            (n = a[0]), (i = a[1]);
                        }
                        (i = (0, s.je)(i)), s.is.und(i) ? (0, r.ys)(this) || this._set(n) : this._set(i);
                    }
                    return o;
                }
                _update(t, e) {
                    let n = c({}, t);
                    const i = this.key,
                        r = this.defaultProps;
                    n.default &&
                        Object.assign(
                            r,
                            g(n, (t, e) => (/^on/.test(e) ? p(t, i) : t)),
                        ),
                        et(this, n, 'onProps'),
                        nt(this, 'onProps', n, this);
                    const o = this._prepareNode(n);
                    if (Object.isFrozen(this))
                        throw Error(
                            'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                        );
                    const a = this._state;
                    return C(++this._lastCallId, {
                        key: i,
                        props: n,
                        defaultProps: r,
                        state: a,
                        actions: {
                            pause: () => {
                                W(this) ||
                                    (G(this, !0),
                                    (0, s.bl)(a.pauseQueue),
                                    nt(this, 'onPause', T(this, B(this, this.animation.to)), this));
                            },
                            resume: () => {
                                W(this) &&
                                    (G(this, !1),
                                    H(this) && this._resume(),
                                    (0, s.bl)(a.resumeQueue),
                                    nt(this, 'onResume', T(this, B(this, this.animation.to)), this));
                            },
                            start: this._merge.bind(this, o),
                        },
                    }).then((t) => {
                        if (n.loop && t.finished && (!e || !t.noop)) {
                            const t = Z(n);
                            if (t) return this._update(t, !0);
                        }
                        return t;
                    });
                }
                _merge(t, e, n) {
                    if (e.cancel) return this.stop(!0), n(q(this));
                    const i = !s.is.und(t.to),
                        o = !s.is.und(t.from);
                    if (i || o) {
                        if (!(e.callId > this._lastToId)) return n(q(this));
                        this._lastToId = e.callId;
                    }
                    const a = this.key,
                        u = this.defaultProps,
                        l = this.animation,
                        p = l.to,
                        f = l.from;
                    let m = t.to,
                        g = void 0 === m ? p : m,
                        y = t.from,
                        v = void 0 === y ? f : y;
                    if ((!o || i || (e.default && !s.is.und(g)) || (g = v), e.reverse)) {
                        var b = [v, g];
                        (g = b[0]), (v = b[1]);
                    }
                    const w = !(0, s.Xy)(v, f);
                    w && (l.from = v), (v = (0, s.je)(v));
                    const k = !(0, s.Xy)(g, p);
                    k && this._focus(g);
                    const P = S(e.to),
                        A = l.config,
                        x = A.decay,
                        I = A.velocity;
                    (i || o) && (A.velocity = 0),
                        e.config &&
                            !P &&
                            (function (t, e, n) {
                                n && (O((n = c({}, n)), e), (e = c({}, n, e))), O(t, e), Object.assign(t, e);
                                for (const e in j) null == t[e] && (t[e] = j[e]);
                                let i = t.mass,
                                    r = t.frequency,
                                    o = t.damping;
                                s.is.und(r) ||
                                    (r < 0.01 && (r = 0.01),
                                    o < 0 && (o = 0),
                                    (t.tension = Math.pow((2 * Math.PI) / r, 2) * i),
                                    (t.friction = (4 * Math.PI * o * i) / r));
                            })(A, d(e.config, a), e.config !== u.config ? d(u.config, a) : void 0);
                    let C = (0, r.ys)(this);
                    if (!C || s.is.und(g)) return n(T(this, !0));
                    const E = s.is.und(e.reset) ? o && !e.default : !s.is.und(v) && h(e.reset, a),
                        U = E ? v : this.get(),
                        $ = _(g),
                        L = s.is.num($) || s.is.arr($) || (0, s.Df)($),
                        M = !P && (!L || h(u.immediate || e.immediate, a));
                    if (k) {
                        const t = (0, r.sb)(g);
                        if (t !== C.constructor) {
                            if (!M)
                                throw Error(
                                    `Cannot animate between ${C.constructor.name} and ${t.name}, as the "to" prop suggests`,
                                );
                            C = this._set($);
                        }
                    }
                    const D = C.constructor;
                    let F = (0, s.j$)(g),
                        z = !1;
                    if (!F) {
                        const t = E || (!N(this) && w);
                        (k || t) && ((z = (0, s.Xy)(_(U), $)), (F = !z)),
                            (((0, s.Xy)(l.immediate, M) || M) && (0, s.Xy)(A.decay, x) && (0, s.Xy)(A.velocity, I)) ||
                                (F = !0);
                    }
                    if (
                        (z && H(this) && (l.changed && !E ? (F = !0) : F || this._stop(p)),
                        !P &&
                            ((F || (0, s.j$)(p)) &&
                                ((l.values = C.getPayload()),
                                (l.toValues = (0, s.j$)(g) ? null : D == r.eC ? [1] : (0, s.qo)($))),
                            l.immediate != M && ((l.immediate = M), M || E || this._set(p)),
                            F))
                    ) {
                        const t = l.onRest;
                        (0, s.S6)(tt, (t) => et(this, e, t));
                        const i = T(this, B(this, p));
                        (0, s.bl)(this._pendingCalls, i),
                            this._pendingCalls.add(n),
                            l.changed &&
                                s.Wn.batchedUpdates(() => {
                                    (l.changed = !E),
                                        null == t || t(i, this),
                                        E ? d(u.onRest, i) : null == l.onStart || l.onStart(i, this);
                                });
                    }
                    E && this._set(U),
                        P
                            ? n(V(e.to, e, this._state, this))
                            : F
                              ? this._start()
                              : H(this) && !k
                                ? this._pendingCalls.add(n)
                                : n(R(U));
                }
                _focus(t) {
                    const e = this.animation;
                    t !== e.to && ((0, s.Ll)(this) && this._detach(), (e.to = t), (0, s.Ll)(this) && this._attach());
                }
                _attach() {
                    let t = 0;
                    const e = this.animation.to;
                    (0, s.j$)(e) && ((0, s.UI)(e, this), M(e) && (t = e.priority + 1)), (this.priority = t);
                }
                _detach() {
                    const t = this.animation.to;
                    (0, s.j$)(t) && (0, s.iL)(t, this);
                }
                _set(t, e = !0) {
                    const n = (0, s.je)(t);
                    if (!s.is.und(n)) {
                        const t = (0, r.ys)(this);
                        if (!t || !(0, s.Xy)(n, t.getValue())) {
                            const i = (0, r.sb)(n);
                            t && t.constructor == i ? t.setValue(n) : (0, r.f3)(this, i.create(n)),
                                t &&
                                    s.Wn.batchedUpdates(() => {
                                        this._onChange(n, e);
                                    });
                        }
                    }
                    return (0, r.ys)(this);
                }
                _onStart() {
                    const t = this.animation;
                    t.changed || ((t.changed = !0), nt(this, 'onStart', T(this, B(this, t.to)), this));
                }
                _onChange(t, e) {
                    e || (this._onStart(), d(this.animation.onChange, t, this)),
                        d(this.defaultProps.onChange, t, this),
                        super._onChange(t, e);
                }
                _start() {
                    const t = this.animation;
                    (0, r.ys)(this).reset((0, s.je)(t.to)),
                        t.immediate || (t.fromValues = t.values.map((t) => t.lastPosition)),
                        H(this) || (Q(this, !0), W(this) || this._resume());
                }
                _resume() {
                    s.OH.skipAnimation ? this.finish() : s.fT.start(this);
                }
                _stop(t, e) {
                    if (H(this)) {
                        Q(this, !1);
                        const n = this.animation;
                        (0, s.S6)(n.values, (t) => {
                            t.done = !0;
                        }),
                            n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                            (0, s.k0)(this, { type: 'idle', parent: this });
                        const i = e ? q(this.get()) : T(this.get(), B(this, null != t ? t : n.to));
                        (0, s.bl)(this._pendingCalls, i), n.changed && ((n.changed = !1), nt(this, 'onRest', i, this));
                    }
                }
            }
            function B(t, e) {
                const n = _(e),
                    i = _(t.get());
                return (0, s.Xy)(i, n);
            }
            function Z(t, e = t.loop, n = t.to) {
                let s = d(e);
                if (s) {
                    const i = !0 !== s && b(s),
                        r = (i || t).reverse,
                        o = !i || i.reset;
                    return Y(
                        c(
                            {},
                            t,
                            {
                                loop: e,
                                default: !1,
                                pause: void 0,
                                to: !r || S(n) ? n : void 0,
                                from: o ? t.from : void 0,
                                reset: o,
                            },
                            i,
                        ),
                    );
                }
            }
            function Y(t) {
                const e = (t = b(t)),
                    n = e.to,
                    i = e.from,
                    r = new Set();
                return s.is.obj(n) && K(n, r), s.is.obj(i) && K(i, r), (t.keys = r.size ? Array.from(r) : null), t;
            }
            function J(t) {
                const e = Y(t);
                return s.is.und(e.default) && (e.default = g(e)), e;
            }
            function K(t, e) {
                (0, s.rU)(t, (t, n) => null != t && e.add(n));
            }
            const tt = 698 == n.j ? ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'] : null;
            function et(t, e, n) {
                t.animation[n] = e[n] !== f(e, n) ? p(e[n], t.key) : void 0;
            }
            function nt(t, e, ...n) {
                var s, i, r, o;
                null == (s = (i = t.animation)[e]) || s.call(i, ...n),
                    null == (r = (o = t.defaultProps)[e]) || r.call(o, ...n);
            }
            const st = 698 == n.j ? ['onStart', 'onChange', 'onRest'] : null;
            let it = 1;
            class rt {
                constructor(t, e) {
                    (this.id = it++),
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
                        (this._state = {
                            paused: !1,
                            pauseQueue: new Set(),
                            resumeQueue: new Set(),
                            timeouts: new Set(),
                        }),
                        (this._events = { onStart: new Map(), onChange: new Map(), onRest: new Map() }),
                        (this._onFrame = this._onFrame.bind(this)),
                        e && (this._flush = e),
                        t && this.start(c({ default: !0 }, t));
                }
                get idle() {
                    return !this._state.asyncTo && Object.values(this.springs).every((t) => t.idle);
                }
                get item() {
                    return this._item;
                }
                set item(t) {
                    this._item = t;
                }
                get() {
                    const t = {};
                    return this.each((e, n) => (t[n] = e.get())), t;
                }
                set(t) {
                    for (const e in t) {
                        const n = t[e];
                        s.is.und(n) || this.springs[e].set(n);
                    }
                }
                update(t) {
                    return t && this.queue.push(Y(t)), this;
                }
                start(t) {
                    let e = this.queue;
                    return (
                        t ? (e = (0, s.qo)(t).map(Y)) : (this.queue = []),
                        this._flush ? this._flush(this, e) : (pt(this, e), ot(this, e))
                    );
                }
                stop(t, e) {
                    if ((t !== !!t && (e = t), e)) {
                        const n = this.springs;
                        (0, s.S6)((0, s.qo)(e), (e) => n[e].stop(!!t));
                    } else U(this._state, this._lastAsyncId), this.each((e) => e.stop(!!t));
                    return this;
                }
                pause(t) {
                    if (s.is.und(t)) this.start({ pause: !0 });
                    else {
                        const e = this.springs;
                        (0, s.S6)((0, s.qo)(t), (t) => e[t].pause());
                    }
                    return this;
                }
                resume(t) {
                    if (s.is.und(t)) this.start({ pause: !1 });
                    else {
                        const e = this.springs;
                        (0, s.S6)((0, s.qo)(t), (t) => e[t].resume());
                    }
                    return this;
                }
                each(t) {
                    (0, s.rU)(this.springs, t);
                }
                _onFrame() {
                    const t = this._events,
                        e = t.onStart,
                        n = t.onChange,
                        i = t.onRest,
                        r = this._active.size > 0,
                        o = this._changed.size > 0;
                    ((r && !this._started) || (o && !this._started)) &&
                        ((this._started = !0),
                        (0, s.yl)(e, ([t, e]) => {
                            (e.value = this.get()), t(e, this, this._item);
                        }));
                    const a = !r && this._started,
                        u = o || (a && i.size) ? this.get() : null;
                    o &&
                        n.size &&
                        (0, s.yl)(n, ([t, e]) => {
                            (e.value = u), t(e, this, this._item);
                        }),
                        a &&
                            ((this._started = !1),
                            (0, s.yl)(i, ([t, e]) => {
                                (e.value = u), t(e, this, this._item);
                            }));
                }
                eventObserved(t) {
                    if ('change' == t.type) this._changed.add(t.parent), t.idle || this._active.add(t.parent);
                    else {
                        if ('idle' != t.type) return;
                        this._active.delete(t.parent);
                    }
                    s.Wn.onFrame(this._onFrame);
                }
            }
            function ot(t, e) {
                return Promise.all(e.map((e) => at(t, e))).then((e) => E(t, e));
            }
            function at(t, e, n) {
                return ut.apply(this, arguments);
            }
            function ut() {
                return (
                    (ut = a(function* (t, e, n) {
                        const i = e.keys,
                            r = e.to,
                            o = e.from,
                            a = e.loop,
                            u = e.onRest,
                            l = e.onResolve,
                            c = s.is.obj(e.default) && e.default;
                        a && (e.loop = !1), !1 === r && (e.to = null), !1 === o && (e.from = null);
                        const d = s.is.arr(r) || s.is.fun(r) ? r : void 0;
                        d
                            ? ((e.to = void 0), (e.onRest = void 0), c && (c.onRest = void 0))
                            : (0, s.S6)(st, (n) => {
                                  const i = e[n];
                                  if (s.is.fun(i)) {
                                      const s = t._events[n];
                                      (e[n] = ({ finished: t, cancelled: e }) => {
                                          const n = s.get(i);
                                          n
                                              ? (t || (n.finished = !1), e && (n.cancelled = !0))
                                              : s.set(i, { value: null, finished: t || !1, cancelled: e || !1 });
                                      }),
                                          c && (c[n] = e[n]);
                                  }
                              });
                        const h = t._state;
                        e.pause === !h.paused
                            ? ((h.paused = e.pause), (0, s.bl)(e.pause ? h.pauseQueue : h.resumeQueue))
                            : h.paused && (e.pause = !0);
                        const p = (i || Object.keys(t.springs)).map((n) => t.springs[n].start(e)),
                            m = !0 === e.cancel || !0 === f(e, 'cancel');
                        (d || (m && h.asyncId)) &&
                            p.push(
                                C(++t._lastAsyncId, {
                                    props: e,
                                    state: h,
                                    actions: {
                                        pause: s.ZT,
                                        resume: s.ZT,
                                        start(e, n) {
                                            m ? (U(h, t._lastAsyncId), n(q(t))) : ((e.onRest = u), n(V(d, e, h, t)));
                                        },
                                    },
                                }),
                            ),
                            h.paused &&
                                (yield new Promise((t) => {
                                    h.resumeQueue.add(t);
                                }));
                        const g = E(t, yield Promise.all(p));
                        if (a && g.finished && (!n || !g.noop)) {
                            const n = Z(e, a, r);
                            if (n) return pt(t, [n]), at(t, n, !0);
                        }
                        return l && s.Wn.batchedUpdates(() => l(g, t, t.item)), g;
                    })),
                    ut.apply(this, arguments)
                );
            }
            function lt(t, e) {
                const n = c({}, t.springs);
                return (
                    e &&
                        (0, s.S6)((0, s.qo)(e), (t) => {
                            s.is.und(t.keys) && (t = Y(t)),
                                s.is.obj(t.to) || (t = c({}, t, { to: void 0 })),
                                ht(n, t, (t) => dt(t));
                        }),
                    ct(t, n),
                    n
                );
            }
            function ct(t, e) {
                (0, s.rU)(e, (e, n) => {
                    t.springs[n] || ((t.springs[n] = e), (0, s.UI)(e, t));
                });
            }
            function dt(t, e) {
                const n = new X();
                return (n.key = t), e && (0, s.UI)(n, e), n;
            }
            function ht(t, e, n) {
                e.keys &&
                    (0, s.S6)(e.keys, (s) => {
                        (t[s] || (t[s] = n(s)))._prepareNode(e);
                    });
            }
            function pt(t, e) {
                (0, s.S6)(e, (e) => {
                    ht(t.springs, e, (e) => dt(e, t));
                });
            }
            function ft(t, e) {
                if (null == t) return {};
                var n,
                    s,
                    i = {},
                    r = Object.keys(t);
                for (s = 0; s < r.length; s++) (n = r[s]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                return i;
            }
            const mt = ['children'],
                gt = (t) => {
                    let e = t.children,
                        n = ft(t, mt);
                    const r = (0, i.useContext)(yt),
                        o = n.pause || !!r.pause,
                        a = n.immediate || !!r.immediate;
                    n = (0, s.Pr)(() => ({ pause: o, immediate: a }), [o, a]);
                    const u = yt.Provider;
                    return i.createElement(u, { value: n }, e);
                },
                yt =
                    ((vt = gt),
                    (bt = {}),
                    Object.assign(vt, i.createContext(bt)),
                    (vt.Provider._context = vt),
                    (vt.Consumer._context = vt),
                    vt);
            var vt, bt;
            (gt.Provider = yt.Provider), (gt.Consumer = yt.Consumer);
            const _t = () => {
                const t = [],
                    e = function (e) {
                        (0, s.ZR)();
                        const i = [];
                        return (
                            (0, s.S6)(t, (t, r) => {
                                if (s.is.und(e)) i.push(t.start());
                                else {
                                    const s = n(e, t, r);
                                    s && i.push(t.start(s));
                                }
                            }),
                            i
                        );
                    };
                (e.current = t),
                    (e.add = function (e) {
                        t.includes(e) || t.push(e);
                    }),
                    (e.delete = function (e) {
                        const n = t.indexOf(e);
                        ~n && t.splice(n, 1);
                    }),
                    (e.pause = function () {
                        return (0, s.S6)(t, (t) => t.pause(...arguments)), this;
                    }),
                    (e.resume = function () {
                        return (0, s.S6)(t, (t) => t.resume(...arguments)), this;
                    }),
                    (e.set = function (e) {
                        (0, s.S6)(t, (t) => t.set(e));
                    }),
                    (e.start = function (e) {
                        const n = [];
                        return (
                            (0, s.S6)(t, (t, i) => {
                                if (s.is.und(e)) n.push(t.start());
                                else {
                                    const s = this._getProps(e, t, i);
                                    s && n.push(t.start(s));
                                }
                            }),
                            n
                        );
                    }),
                    (e.stop = function () {
                        return (0, s.S6)(t, (t) => t.stop(...arguments)), this;
                    }),
                    (e.update = function (e) {
                        return (0, s.S6)(t, (t, n) => t.update(this._getProps(e, t, n))), this;
                    });
                const n = function (t, e, n) {
                    return s.is.fun(t) ? t(n, e) : t;
                };
                return (e._getProps = n), e;
            };
            function wt(t, e, n) {
                const r = s.is.fun(e) && e;
                r && !n && (n = []);
                const o = (0, i.useMemo)(() => (r || 3 == arguments.length ? _t() : void 0), []),
                    a = (0, i.useRef)(0),
                    u = (0, s.NW)(),
                    l = (0, i.useMemo)(
                        () => ({
                            ctrls: [],
                            queue: [],
                            flush(t, e) {
                                const n = lt(t, e);
                                return a.current > 0 && !l.queue.length && !Object.keys(n).some((e) => !t.springs[e])
                                    ? ot(t, e)
                                    : new Promise((s) => {
                                          ct(t, n),
                                              l.queue.push(() => {
                                                  s(ot(t, e));
                                              }),
                                              u();
                                      });
                            },
                        }),
                        [],
                    ),
                    d = (0, i.useRef)([...l.ctrls]),
                    h = [],
                    p = (0, s.zH)(t) || 0;
                function f(t, n) {
                    for (let s = t; s < n; s++) {
                        const t = d.current[s] || (d.current[s] = new rt(null, l.flush)),
                            n = r ? r(s, t) : e[s];
                        n && (h[s] = J(n));
                    }
                }
                (0, i.useMemo)(() => {
                    (0, s.S6)(d.current.slice(t, p), (t) => {
                        k(t, o), t.stop(!0);
                    }),
                        (d.current.length = t),
                        f(p, t);
                }, [t]),
                    (0, i.useMemo)(() => {
                        f(0, Math.min(p, t));
                    }, n);
                const m = d.current.map((t, e) => lt(t, h[e])),
                    g = (0, i.useContext)(gt),
                    y = (0, s.zH)(g),
                    v = g !== y && w(g);
                (0, s.bt)(() => {
                    a.current++, (l.ctrls = d.current);
                    const t = l.queue;
                    t.length && ((l.queue = []), (0, s.S6)(t, (t) => t())),
                        (0, s.S6)(d.current, (t, e) => {
                            null == o || o.add(t), v && t.start({ default: g });
                            const n = h[e];
                            n && (P(t, n.ref), t.ref ? t.queue.push(n) : t.start(n));
                        });
                }),
                    (0, s.tf)(() => () => {
                        (0, s.S6)(l.ctrls, (t) => t.stop(!0));
                    });
                const b = m.map((t) => c({}, t));
                return o ? [b, o] : b;
            }
            function St(t, e) {
                const n = s.is.fun(t),
                    i = wt(1, n ? t : [t], n ? e || [] : e),
                    r = i[0][0],
                    o = i[1];
                return n || 2 == arguments.length ? [r, o] : r;
            }
            let kt;
            !(function (t) {
                (t.MOUNT = 'mount'), (t.ENTER = 'enter'), (t.UPDATE = 'update'), (t.LEAVE = 'leave');
            })(kt || (kt = {}));
            class Pt extends F {
                constructor(t, e) {
                    super(),
                        (this.key = void 0),
                        (this.idle = !0),
                        (this.calc = void 0),
                        (this._active = new Set()),
                        (this.source = t),
                        (this.calc = (0, s.mD)(...e));
                    const n = this._get(),
                        i = (0, r.sb)(n);
                    (0, r.f3)(this, i.create(n));
                }
                advance(t) {
                    const e = this._get(),
                        n = this.get();
                    (0, s.Xy)(e, n) || ((0, r.ys)(this).setValue(e), this._onChange(e, this.idle)),
                        !this.idle && At(this._active) && Ot(this);
                }
                _get() {
                    const t = s.is.arr(this.source) ? this.source.map(s.je) : (0, s.qo)((0, s.je)(this.source));
                    return this.calc(...t);
                }
                _start() {
                    this.idle &&
                        !At(this._active) &&
                        ((this.idle = !1),
                        (0, s.S6)((0, r.He)(this), (t) => {
                            t.done = !1;
                        }),
                        s.OH.skipAnimation ? (s.Wn.batchedUpdates(() => this.advance()), Ot(this)) : s.fT.start(this));
                }
                _attach() {
                    let t = 1;
                    (0, s.S6)((0, s.qo)(this.source), (e) => {
                        (0, s.j$)(e) && (0, s.UI)(e, this),
                            M(e) && (e.idle || this._active.add(e), (t = Math.max(t, e.priority + 1)));
                    }),
                        (this.priority = t),
                        this._start();
                }
                _detach() {
                    (0, s.S6)((0, s.qo)(this.source), (t) => {
                        (0, s.j$)(t) && (0, s.iL)(t, this);
                    }),
                        this._active.clear(),
                        Ot(this);
                }
                eventObserved(t) {
                    'change' == t.type
                        ? t.idle
                            ? this.advance()
                            : (this._active.add(t.parent), this._start())
                        : 'idle' == t.type
                          ? this._active.delete(t.parent)
                          : 'priority' == t.type &&
                            (this.priority = (0, s.qo)(this.source).reduce(
                                (t, e) => Math.max(t, (M(e) ? e.priority : 0) + 1),
                                0,
                            ));
                }
            }
            function jt(t) {
                return !1 !== t.idle;
            }
            function At(t) {
                return !t.size || Array.from(t).every(jt);
            }
            function Ot(t) {
                t.idle ||
                    ((t.idle = !0),
                    (0, s.S6)((0, r.He)(t), (t) => {
                        t.done = !0;
                    }),
                    (0, s.k0)(t, { type: 'idle', parent: t }));
            }
            s.OH.assign({ createStringInterpolator: s.qS, to: (t, e) => new Pt(t, e) });
            s.fT.advance;
        },
        810: (t, e, n) => {
            'use strict';
            n.d(e, {
                B0: () => bt,
                OH: () => U,
                UI: () => wt,
                k0: () => vt,
                O9: () => Q,
                mD: () => dt,
                qS: () => Ct,
                dE: () => k,
                ZR: () => Ut,
                LW: () => qt,
                S6: () => A,
                rU: () => O,
                yl: () => I,
                bl: () => C,
                fT: () => F,
                Ll: () => yt,
                je: () => gt,
                j$: () => mt,
                is: () => P,
                Df: () => $t,
                Xy: () => j,
                ZT: () => S,
                Wn: () => i,
                iL: () => St,
                qo: () => x,
                NW: () => Dt,
                bt: () => Ht,
                Pr: () => zt,
                tf: () => Lt,
                zH: () => Nt,
            });
            let s = v();
            const i = (t) => f(t, s);
            let r = v();
            i.write = (t) => f(t, r);
            let o = v();
            i.onStart = (t) => f(t, o);
            let a = v();
            i.onFrame = (t) => f(t, a);
            let u = v();
            i.onFinish = (t) => f(t, u);
            let l = [];
            i.setTimeout = (t, e) => {
                let n = i.now() + e,
                    s = () => {
                        let t = l.findIndex((t) => t.cancel == s);
                        ~t && l.splice(t, 1), (_.count -= ~t ? 1 : 0);
                    },
                    r = { time: n, handler: t, cancel: s };
                return l.splice(c(n), 0, r), (_.count += 1), m(), r;
            };
            let c = (t) => ~(~l.findIndex((e) => e.time > t) || ~l.length);
            (i.cancel = (t) => {
                s.delete(t), r.delete(t);
            }),
                (i.sync = (t) => {
                    (p = !0), i.batchedUpdates(t), (p = !1);
                }),
                (i.throttle = (t) => {
                    let e;
                    function n() {
                        try {
                            t(...e);
                        } finally {
                            e = null;
                        }
                    }
                    function s(...t) {
                        (e = t), i.onStart(n);
                    }
                    return (
                        (s.handler = t),
                        (s.cancel = () => {
                            o.delete(n), (e = null);
                        }),
                        s
                    );
                });
            let d = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
            (i.use = (t) => (d = t)),
                (i.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
                (i.batchedUpdates = (t) => t()),
                (i.catch = console.error),
                (i.frameLoop = 'always'),
                (i.advance = () => {
                    'demand' !== i.frameLoop
                        ? console.warn(
                              'Cannot call the manual advancement of rafz whilst frameLoop is not set as demand',
                          )
                        : y();
                });
            let h = -1,
                p = !1;
            function f(t, e) {
                p ? (e.delete(t), t(0)) : (e.add(t), m());
            }
            function m() {
                h < 0 && ((h = 0), 'demand' !== i.frameLoop && d(g));
            }
            function g() {
                ~h && (d(g), i.batchedUpdates(y));
            }
            function y() {
                let t = h;
                h = i.now();
                let e = c(h);
                e && (b(l.splice(0, e), (t) => t.handler()), (_.count -= e)),
                    o.flush(),
                    s.flush(t ? Math.min(64, h - t) : 16.667),
                    a.flush(),
                    r.flush(),
                    u.flush();
            }
            function v() {
                let t = new Set(),
                    e = t;
                return {
                    add(n) {
                        (_.count += e != t || t.has(n) ? 0 : 1), t.add(n);
                    },
                    delete: (n) => ((_.count -= e == t && t.has(n) ? 1 : 0), t.delete(n)),
                    flush(n) {
                        e.size &&
                            ((t = new Set()),
                            (_.count -= e.size),
                            b(e, (e) => e(n) && t.add(e)),
                            (_.count += t.size),
                            (e = t));
                    },
                };
            }
            function b(t, e) {
                t.forEach((t) => {
                    try {
                        e(t);
                    } catch (t) {
                        i.catch(t);
                    }
                });
            }
            const _ = {
                count: 0,
                clear() {
                    (h = -1), (l = []), (o = v()), (s = v()), (a = v()), (r = v()), (u = v()), (_.count = 0);
                },
            };
            var w = n(363);
            function S() {}
            const k = (t, e, n) => Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 }),
                P = {
                    arr: Array.isArray,
                    obj: (t) => !!t && 'Object' === t.constructor.name,
                    fun: (t) => 'function' == typeof t,
                    str: (t) => 'string' == typeof t,
                    num: (t) => 'number' == typeof t,
                    und: (t) => void 0 === t,
                };
            function j(t, e) {
                if (P.arr(t)) {
                    if (!P.arr(e) || t.length !== e.length) return !1;
                    for (let n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
                    return !0;
                }
                return t === e;
            }
            const A = (t, e) => t.forEach(e);
            function O(t, e, n) {
                if (P.arr(t)) for (let s = 0; s < t.length; s++) e.call(n, t[s], `${s}`);
                else for (const s in t) t.hasOwnProperty(s) && e.call(n, t[s], s);
            }
            const x = (t) => (P.und(t) ? [] : P.arr(t) ? t : [t]);
            function I(t, e) {
                if (t.size) {
                    const n = Array.from(t);
                    t.clear(), A(n, e);
                }
            }
            const C = (t, ...e) => I(t, (t) => t(...e));
            let E,
                R,
                T = null,
                q = !1,
                V = S;
            var U = Object.freeze({
                __proto__: null,
                get createStringInterpolator() {
                    return E;
                },
                get to() {
                    return R;
                },
                get colors() {
                    return T;
                },
                get skipAnimation() {
                    return q;
                },
                get willAdvance() {
                    return V;
                },
                assign: (t) => {
                    t.to && (R = t.to),
                        t.now && (i.now = t.now),
                        void 0 !== t.colors && (T = t.colors),
                        null != t.skipAnimation && (q = t.skipAnimation),
                        t.createStringInterpolator && (E = t.createStringInterpolator),
                        t.requestAnimationFrame && i.use(t.requestAnimationFrame),
                        t.batchedUpdates && (i.batchedUpdates = t.batchedUpdates),
                        t.willAdvance && (V = t.willAdvance),
                        t.frameLoop && (i.frameLoop = t.frameLoop);
                },
            });
            const $ = new Set();
            let L = [],
                M = [],
                D = 0;
            const F = {
                get idle() {
                    return !$.size && !L.length;
                },
                start(t) {
                    D > t.priority ? ($.add(t), i.onStart(z)) : (N(t), i(W));
                },
                advance: W,
                sort(t) {
                    if (D) i.onFrame(() => F.sort(t));
                    else {
                        const e = L.indexOf(t);
                        ~e && (L.splice(e, 1), H(t));
                    }
                },
                clear() {
                    (L = []), $.clear();
                },
            };
            function z() {
                $.forEach(N), $.clear(), i(W);
            }
            function N(t) {
                L.includes(t) || H(t);
            }
            function H(t) {
                L.splice(
                    (function (t, e) {
                        const n = t.findIndex(e);
                        return n < 0 ? t.length : n;
                    })(L, (e) => e.priority > t.priority),
                    0,
                    t,
                );
            }
            function W(t) {
                const e = M;
                for (let n = 0; n < L.length; n++) {
                    const s = L[n];
                    (D = s.priority), s.idle || (V(s), s.advance(t), s.idle || e.push(s));
                }
                return (D = 0), (M = L), (M.length = 0), (L = e), L.length > 0;
            }
            const Q = {
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
                G = '[-+]?\\d*\\.?\\d+',
                X = G + '%';
            function B(...t) {
                return '\\(\\s*(' + t.join(')\\s*,\\s*(') + ')\\s*\\)';
            }
            const Z = new RegExp('rgb' + B(G, G, G)),
                Y = new RegExp('rgba' + B(G, G, G, G)),
                J = new RegExp('hsl' + B(G, X, X)),
                K = new RegExp('hsla' + B(G, X, X, G)),
                tt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                et = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                nt = /^#([0-9a-fA-F]{6})$/,
                st = /^#([0-9a-fA-F]{8})$/;
            function it(t, e, n) {
                return (
                    n < 0 && (n += 1),
                    n > 1 && (n -= 1),
                    n < 1 / 6 ? t + 6 * (e - t) * n : n < 0.5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
                );
            }
            function rt(t, e, n) {
                const s = n < 0.5 ? n * (1 + e) : n + e - n * e,
                    i = 2 * n - s,
                    r = it(i, s, t + 1 / 3),
                    o = it(i, s, t),
                    a = it(i, s, t - 1 / 3);
                return (Math.round(255 * r) << 24) | (Math.round(255 * o) << 16) | (Math.round(255 * a) << 8);
            }
            function ot(t) {
                const e = parseInt(t, 10);
                return e < 0 ? 0 : e > 255 ? 255 : e;
            }
            function at(t) {
                return (((parseFloat(t) % 360) + 360) % 360) / 360;
            }
            function ut(t) {
                const e = parseFloat(t);
                return e < 0 ? 0 : e > 1 ? 255 : Math.round(255 * e);
            }
            function lt(t) {
                const e = parseFloat(t);
                return e < 0 ? 0 : e > 100 ? 1 : e / 100;
            }
            function ct(t) {
                let e = (function (t) {
                    let e;
                    return 'number' == typeof t
                        ? t >>> 0 === t && t >= 0 && t <= 4294967295
                            ? t
                            : null
                        : (e = nt.exec(t))
                          ? parseInt(e[1] + 'ff', 16) >>> 0
                          : T && void 0 !== T[t]
                            ? T[t]
                            : (e = Z.exec(t))
                              ? ((ot(e[1]) << 24) | (ot(e[2]) << 16) | (ot(e[3]) << 8) | 255) >>> 0
                              : (e = Y.exec(t))
                                ? ((ot(e[1]) << 24) | (ot(e[2]) << 16) | (ot(e[3]) << 8) | ut(e[4])) >>> 0
                                : (e = tt.exec(t))
                                  ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + 'ff', 16) >>> 0
                                  : (e = st.exec(t))
                                    ? parseInt(e[1], 16) >>> 0
                                    : (e = et.exec(t))
                                      ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + e[4] + e[4], 16) >>> 0
                                      : (e = J.exec(t))
                                        ? (255 | rt(at(e[1]), lt(e[2]), lt(e[3]))) >>> 0
                                        : (e = K.exec(t))
                                          ? (rt(at(e[1]), lt(e[2]), lt(e[3])) | ut(e[4])) >>> 0
                                          : null;
                })(t);
                return null === e
                    ? t
                    : ((e = e || 0),
                      `rgba(${(4278190080 & e) >>> 24}, ${(16711680 & e) >>> 16}, ${(65280 & e) >>> 8}, ${(255 & e) / 255})`);
            }
            const dt = (t, e, n) => {
                if (P.fun(t)) return t;
                if (P.arr(t)) return dt({ range: t, output: e, extrapolate: n });
                if (P.str(t.output[0])) return E(t);
                const s = t,
                    i = s.output,
                    r = s.range || [0, 1],
                    o = s.extrapolateLeft || s.extrapolate || 'extend',
                    a = s.extrapolateRight || s.extrapolate || 'extend',
                    u = s.easing || ((t) => t);
                return (t) => {
                    const e = (function (t, e) {
                        for (var n = 1; n < e.length - 1 && !(e[n] >= t); ++n);
                        return n - 1;
                    })(t, r);
                    return (function (t, e, n, s, i, r, o, a, u) {
                        let l = u ? u(t) : t;
                        if (l < e) {
                            if ('identity' === o) return l;
                            'clamp' === o && (l = e);
                        }
                        if (l > n) {
                            if ('identity' === a) return l;
                            'clamp' === a && (l = n);
                        }
                        if (s === i) return s;
                        if (e === n) return t <= e ? s : i;
                        e === -1 / 0 ? (l = -l) : n === 1 / 0 ? (l -= e) : (l = (l - e) / (n - e));
                        (l = r(l)), s === -1 / 0 ? (l = -l) : i === 1 / 0 ? (l += s) : (l = l * (i - s) + s);
                        return l;
                    })(t, r[e], r[e + 1], i[e], i[e + 1], u, o, a, s.map);
                };
            };
            function ht() {
                return (
                    (ht =
                        Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
                            }
                            return t;
                        }),
                    ht.apply(this, arguments)
                );
            }
            const pt = Symbol.for('FluidValue.get'),
                ft = Symbol.for('FluidValue.observers'),
                mt = (t) => Boolean(t && t[pt]),
                gt = (t) => (t && t[pt] ? t[pt]() : t),
                yt = (t) => t[ft] || null;
            function vt(t, e) {
                let n = t[ft];
                n &&
                    n.forEach((t) => {
                        !(function (t, e) {
                            t.eventObserved ? t.eventObserved(e) : t(e);
                        })(t, e);
                    });
            }
            class bt {
                constructor(t) {
                    if (((this[pt] = void 0), (this[ft] = void 0), !t && !(t = this.get)))
                        throw Error('Unknown getter');
                    _t(this, t);
                }
            }
            const _t = (t, e) => kt(t, pt, e);
            function wt(t, e) {
                if (t[pt]) {
                    let n = t[ft];
                    n || kt(t, ft, (n = new Set())),
                        n.has(e) || (n.add(e), t.observerAdded && t.observerAdded(n.size, e));
                }
                return e;
            }
            function St(t, e) {
                let n = t[ft];
                if (n && n.has(e)) {
                    const s = n.size - 1;
                    s ? n.delete(e) : (t[ft] = null), t.observerRemoved && t.observerRemoved(s, e);
                }
            }
            const kt = (t, e, n) => Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 }),
                Pt = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                jt = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
                At = new RegExp(`(${Pt.source})(%|[a-z]+)`, 'i');
            let Ot;
            const xt = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
                It = (t, e, n, s, i) => `rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(s)}, ${i})`,
                Ct = (t) => {
                    Ot || (Ot = T ? new RegExp(`(${Object.keys(T).join('|')})(?!\\w)`, 'g') : /^\b$/);
                    const e = t.output.map((t) => gt(t).replace(jt, ct).replace(Ot, ct)),
                        n = e.map((t) => t.match(Pt).map(Number)),
                        s = n[0]
                            .map((t, e) =>
                                n.map((t) => {
                                    if (!(e in t)) throw Error('The arity of each "output" value must be equal');
                                    return t[e];
                                }),
                            )
                            .map((e) => dt(ht({}, t, { output: e })));
                    return (t) => {
                        var n;
                        const i =
                            !At.test(e[0]) && (null == (n = e.find((t) => At.test(t))) ? void 0 : n.replace(Pt, ''));
                        let r = 0;
                        return e[0].replace(Pt, () => `${s[r++](t)}${i || ''}`).replace(xt, It);
                    };
                },
                Et = 'react-spring: ',
                Rt = (t) => {
                    const e = t;
                    let n = !1;
                    if ('function' != typeof e) throw new TypeError(`${Et}once requires a function parameter`);
                    return (...t) => {
                        n || (e(...t), (n = !0));
                    };
                },
                Tt = Rt(console.warn);
            function qt() {
                Tt(`${Et}The "interpolate" function is deprecated in v9 (use "to" instead)`);
            }
            const Vt = Rt(console.warn);
            function Ut() {
                Vt(
                    `${Et}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
                );
            }
            function $t(t) {
                return P.str(t) && ('#' == t[0] || /\d/.test(t) || t in (T || {}));
            }
            const Lt = (t) => (0, w.useEffect)(t, Mt),
                Mt = [];
            function Dt() {
                const t = (0, w.useState)()[1],
                    e = (0, w.useState)(Ft)[0];
                return (
                    Lt(e.unmount),
                    () => {
                        e.current && t({});
                    }
                );
            }
            function Ft() {
                const t = {
                    current: !0,
                    unmount: () => () => {
                        t.current = !1;
                    },
                };
                return t;
            }
            function zt(t, e) {
                const n = (0, w.useState)(() => ({ inputs: e, result: t() }))[0],
                    s = (0, w.useRef)(),
                    i = s.current;
                let r = i;
                if (r) {
                    Boolean(
                        e &&
                            r.inputs &&
                            (function (t, e) {
                                if (t.length !== e.length) return !1;
                                for (let n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
                                return !0;
                            })(e, r.inputs),
                    ) || (r = { inputs: e, result: t() });
                } else r = n;
                return (
                    (0, w.useEffect)(() => {
                        (s.current = r), i == n && (n.inputs = n.result = void 0);
                    }, [r]),
                    r.result
                );
            }
            function Nt(t) {
                const e = (0, w.useRef)();
                return (
                    (0, w.useEffect)(() => {
                        e.current = t;
                    }),
                    e.current
                );
            }
            const Ht =
                'undefined' != typeof window && window.document && window.document.createElement
                    ? w.useLayoutEffect
                    : w.useEffect;
        },
        6: (t, e, n) => {
            'use strict';
            n.d(e, { useSpring: () => s.useSpring });
            var s = n(738),
                i = n(533),
                r = n(810),
                o = n(686);
            function a(t, e) {
                if (null == t) return {};
                var n,
                    s,
                    i = {},
                    r = Object.keys(t);
                for (s = 0; s < r.length; s++) (n = r[s]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                return i;
            }
            const u = ['style', 'children', 'scrollTop', 'scrollLeft'],
                l = /^--/;
            function c(t, e) {
                return null == e || 'boolean' == typeof e || '' === e
                    ? ''
                    : 'number' != typeof e || 0 === e || l.test(t) || (h.hasOwnProperty(t) && h[t])
                      ? ('' + e).trim()
                      : e + 'px';
            }
            const d = {};
            let h = {
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
            const p = ['Webkit', 'Ms', 'Moz', 'O'];
            h = Object.keys(h).reduce(
                (t, e) => (
                    p.forEach((n) => (t[((t, e) => t + e.charAt(0).toUpperCase() + e.substring(1))(n, e)] = t[e])), t
                ),
                h,
            );
            const f = ['x', 'y', 'z'],
                m = /^(matrix|translate|scale|rotate|skew)/,
                g = /^(translate)/,
                y = /^(rotate|skew)/,
                v = (t, e) => (r.is.num(t) && 0 !== t ? t + e : t),
                b = (t, e) => (r.is.arr(t) ? t.every((t) => b(t, e)) : r.is.num(t) ? t === e : parseFloat(t) === e);
            class _ extends o.rS {
                constructor(t) {
                    let e = t.x,
                        n = t.y,
                        s = t.z,
                        i = a(t, f);
                    const o = [],
                        u = [];
                    (e || n || s) &&
                        (o.push([e || 0, n || 0, s || 0]),
                        u.push((t) => [`translate3d(${t.map((t) => v(t, 'px')).join(',')})`, b(t, 0)])),
                        (0, r.rU)(i, (t, e) => {
                            if ('transform' === e) o.push([t || '']), u.push((t) => [t, '' === t]);
                            else if (m.test(e)) {
                                if ((delete i[e], r.is.und(t))) return;
                                const n = g.test(e) ? 'px' : y.test(e) ? 'deg' : '';
                                o.push((0, r.qo)(t)),
                                    u.push(
                                        'rotate3d' === e
                                            ? ([t, e, s, i]) => [`rotate3d(${t},${e},${s},${v(i, n)})`, b(i, 0)]
                                            : (t) => [
                                                  `${e}(${t.map((t) => v(t, n)).join(',')})`,
                                                  b(t, e.startsWith('scale') ? 1 : 0),
                                              ],
                                    );
                            }
                        }),
                        o.length && (i.transform = new w(o, u)),
                        super(i);
                }
            }
            class w extends r.B0 {
                constructor(t, e) {
                    super(), (this._value = null), (this.inputs = t), (this.transforms = e);
                }
                get() {
                    return this._value || (this._value = this._get());
                }
                _get() {
                    let t = '',
                        e = !0;
                    return (
                        (0, r.S6)(this.inputs, (n, s) => {
                            const i = (0, r.je)(n[0]),
                                o = this.transforms[s](r.is.arr(i) ? i : n.map(r.je)),
                                a = o[0],
                                u = o[1];
                            (t += ' ' + a), (e = e && u);
                        }),
                        e ? 'none' : t
                    );
                }
                observerAdded(t) {
                    1 == t && (0, r.S6)(this.inputs, (t) => (0, r.S6)(t, (t) => (0, r.j$)(t) && (0, r.UI)(t, this)));
                }
                observerRemoved(t) {
                    0 == t && (0, r.S6)(this.inputs, (t) => (0, r.S6)(t, (t) => (0, r.j$)(t) && (0, r.iL)(t, this)));
                }
                eventObserved(t) {
                    'change' == t.type && (this._value = null), (0, r.k0)(this, t);
                }
            }
            const S = ['scrollTop', 'scrollLeft'];
            s.Globals.assign({
                batchedUpdates: i.unstable_batchedUpdates,
                createStringInterpolator: r.qS,
                colors: r.O9,
            });
            (0, o.Ld)(
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
                    applyAnimatedValues: function (t, e) {
                        if (!t.nodeType || !t.setAttribute) return !1;
                        const n = 'filter' === t.nodeName || (t.parentNode && 'filter' === t.parentNode.nodeName),
                            s = e,
                            i = s.style,
                            r = s.children,
                            o = s.scrollTop,
                            h = s.scrollLeft,
                            p = a(s, u),
                            f = Object.values(p),
                            m = Object.keys(p).map((e) =>
                                n || t.hasAttribute(e)
                                    ? e
                                    : d[e] || (d[e] = e.replace(/([A-Z])/g, (t) => '-' + t.toLowerCase())),
                            );
                        void 0 !== r && (t.textContent = r);
                        for (let e in i)
                            if (i.hasOwnProperty(e)) {
                                const n = c(e, i[e]);
                                l.test(e) ? t.style.setProperty(e, n) : (t.style[e] = n);
                            }
                        m.forEach((e, n) => {
                            t.setAttribute(e, f[n]);
                        }),
                            void 0 !== o && (t.scrollTop = o),
                            void 0 !== h && (t.scrollLeft = h);
                    },
                    createAnimatedStyle: (t) => new _(t),
                    getComponentProps: (t) => a(t, S),
                },
            ).animated;
        },
        281: () => {
            'use strict';
            console.assert,
                new Set([
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
        },
        483: (t, e) => {
            var n;
            !(function () {
                'use strict';
                var s = {}.hasOwnProperty;
                function i() {
                    for (var t = [], e = 0; e < arguments.length; e++) {
                        var n = arguments[e];
                        if (n) {
                            var r = typeof n;
                            if ('string' === r || 'number' === r) t.push(n);
                            else if (Array.isArray(n) && n.length) {
                                var o = i.apply(null, n);
                                o && t.push(o);
                            } else if ('object' === r) for (var a in n) s.call(n, a) && n[a] && t.push(a);
                        }
                    }
                    return t.join(' ');
                }
                t.exports
                    ? ((i.default = i), (t.exports = i))
                    : void 0 ===
                          (n = function () {
                              return i;
                          }.apply(e, [])) || (t.exports = n);
            })();
        },
        30: (t, e, n) => {
            'use strict';
            var s = n(6);
            n.o(s, 'useSpring') &&
                n.d(e, {
                    useSpring: function () {
                        return s.useSpring;
                    },
                });
        },
    },
]);
