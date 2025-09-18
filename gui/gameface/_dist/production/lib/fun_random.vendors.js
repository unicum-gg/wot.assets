/*! For license information please see fun_random.vendors.js.LICENSE.txt */
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    ['lib/fun_random.vendors'],
    {
        1686: (t, e, n) => {
            'use strict';
            n.d(e, {
                He: () => u,
                Ld: () => w,
                eC: () => d,
                f3: () => s,
                iG: () => l,
                rS: () => f,
                sb: () => y,
                ys: () => a,
            });
            var r = n(2810),
                i = n(7363);
            const o = Symbol.for('Animated:node'),
                a = (t) => t && t[o],
                s = (t, e) => (0, r.dE)(t, o, e),
                u = (t) => t && t[o] && t[o].getPayload();
            class c {
                constructor() {
                    ((this.payload = void 0), s(this, this));
                }
                getPayload() {
                    return this.payload || [];
                }
            }
            class l extends (/^lobby\/feature\/FunRandom((BattleResultsView\/FunRandomBattleResults|TierListView\/FunRandomTierList)View|Progression\/FunRandomProgression)$/.test(
                n.j,
            )
                ? c
                : null) {
                constructor(t) {
                    (super(),
                        (this.done = !0),
                        (this.elapsedTime = void 0),
                        (this.lastPosition = void 0),
                        (this.lastVelocity = void 0),
                        (this.v0 = void 0),
                        (this.durationProgress = 0),
                        (this._value = t),
                        r.is.num(this._value) && (this.lastPosition = this._value));
                }
                static create(t) {
                    return new l(t);
                }
                getPayload() {
                    return [this];
                }
                getValue() {
                    return this._value;
                }
                setValue(t, e) {
                    return (
                        r.is.num(t) &&
                            ((this.lastPosition = t),
                            e && ((t = Math.round(t / e) * e), this.done && (this.lastPosition = t))),
                        this._value !== t && ((this._value = t), !0)
                    );
                }
                reset() {
                    const t = this.done;
                    ((this.done = !1),
                        r.is.num(this._value) &&
                            ((this.elapsedTime = 0),
                            (this.durationProgress = 0),
                            (this.lastPosition = this._value),
                            t && (this.lastVelocity = null),
                            (this.v0 = null)));
                }
            }
            class d extends (/^lobby\/feature\/FunRandom((BattleResultsView\/FunRandomBattleResults|TierListView\/FunRandomTierList)View|Progression\/FunRandomProgression)$/.test(
                n.j,
            )
                ? l
                : null) {
                constructor(t) {
                    (super(0),
                        (this._string = null),
                        (this._toString = void 0),
                        (this._toString = (0, r.mD)({ output: [t, t] })));
                }
                static create(t) {
                    return new d(t);
                }
                getValue() {
                    let t = this._string;
                    return null == t ? (this._string = this._toString(this._value)) : t;
                }
                setValue(t) {
                    if (r.is.str(t)) {
                        if (t == this._string) return !1;
                        ((this._string = t), (this._value = 1));
                    } else {
                        if (!super.setValue(t)) return !1;
                        this._string = null;
                    }
                    return !0;
                }
                reset(t) {
                    (t && (this._toString = (0, r.mD)({ output: [this.getValue(), t] })),
                        (this._value = 0),
                        super.reset());
                }
            }
            const h = { dependencies: null };
            class f extends (/^lobby\/feature\/FunRandom((BattleResultsView\/FunRandomBattleResults|TierListView\/FunRandomTierList)View|Progression\/FunRandomProgression)$/.test(
                n.j,
            )
                ? c
                : null) {
                constructor(t) {
                    (super(), (this.source = t), this.setValue(t));
                }
                getValue(t) {
                    const e = {};
                    return (
                        (0, r.rU)(this.source, (n, i) => {
                            var a;
                            (a = n) && a[o] === a
                                ? (e[i] = n.getValue(t))
                                : (0, r.j$)(n)
                                  ? (e[i] = (0, r.je)(n))
                                  : t || (e[i] = n);
                        }),
                        e
                    );
                }
                setValue(t) {
                    ((this.source = t), (this.payload = this._makePayload(t)));
                }
                reset() {
                    this.payload && (0, r.S6)(this.payload, (t) => t.reset());
                }
                _makePayload(t) {
                    if (t) {
                        const e = new Set();
                        return ((0, r.rU)(t, this._addToPayload, e), Array.from(e));
                    }
                }
                _addToPayload(t) {
                    h.dependencies && (0, r.j$)(t) && h.dependencies.add(t);
                    const e = u(t);
                    e && (0, r.S6)(e, (t) => this.add(t));
                }
            }
            class p extends (/^lobby\/feature\/FunRandom((BattleResultsView\/FunRandomBattleResults|TierListView\/FunRandomTierList)View|Progression\/FunRandomProgression)$/.test(
                n.j,
            )
                ? f
                : null) {
                constructor(t) {
                    super(t);
                }
                static create(t) {
                    return new p(t);
                }
                getValue() {
                    return this.source.map((t) => t.getValue());
                }
                setValue(t) {
                    const e = this.getPayload();
                    return t.length == e.length
                        ? e.map((e, n) => e.setValue(t[n])).some(Boolean)
                        : (super.setValue(t.map(v)), !0);
                }
            }
            function v(t) {
                return ((0, r.Df)(t) ? d : l).create(t);
            }
            function y(t) {
                const e = a(t);
                return e ? e.constructor : r.is.arr(t) ? p : (0, r.Df)(t) ? d : l;
            }
            function g() {
                return (
                    (g =
                        Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                            }
                            return t;
                        }),
                    g.apply(this, arguments)
                );
            }
            const m = (t, e) => {
                const n = !r.is.fun(t) || (t.prototype && t.prototype.isReactComponent);
                return (0, i.forwardRef)((o, a) => {
                    const s = (0, i.useRef)(null),
                        u =
                            n &&
                            (0, i.useCallback)(
                                (t) => {
                                    s.current = (function (t, e) {
                                        return (t && (r.is.fun(t) ? t(e) : (t.current = e)), e);
                                    })(a, t);
                                },
                                [a],
                            ),
                        c = (function (t, e) {
                            const n = new Set();
                            return (
                                (h.dependencies = n),
                                t.style && (t = g({}, t, { style: e.createAnimatedStyle(t.style) })),
                                (t = new f(t)),
                                (h.dependencies = null),
                                [t, n]
                            );
                        })(o, e),
                        l = c[0],
                        d = c[1],
                        p = (0, r.NW)(),
                        v = () => {
                            const t = s.current;
                            (n && !t) || (!1 === (!!t && e.applyAnimatedValues(t, l.getValue(!0))) && p());
                        },
                        y = new b(v, d),
                        m = (0, i.useRef)();
                    ((0, r.bt)(() => {
                        const t = m.current;
                        ((m.current = y),
                            (0, r.S6)(d, (t) => (0, r.UI)(t, y)),
                            t && ((0, r.S6)(t.deps, (e) => (0, r.iL)(e, t)), r.Wn.cancel(t.update)));
                    }),
                        (0, i.useEffect)(v, []),
                        (0, r.tf)(() => () => {
                            const t = m.current;
                            (0, r.S6)(t.deps, (e) => (0, r.iL)(e, t));
                        }));
                    const _ = e.getComponentProps(l.getValue());
                    return i.createElement(t, g({}, _, { ref: u }));
                });
            };
            class b {
                constructor(t, e) {
                    ((this.update = t), (this.deps = e));
                }
                eventObserved(t) {
                    'change' == t.type && r.Wn.write(this.update);
                }
            }
            const _ = Symbol.for('AnimatedComponent'),
                w = (
                    t,
                    {
                        applyAnimatedValues: e = () => !1,
                        createAnimatedStyle: n = (t) => new f(t),
                        getComponentProps: i = (t) => t,
                    } = {},
                ) => {
                    const o = { applyAnimatedValues: e, createAnimatedStyle: n, getComponentProps: i },
                        a = (t) => {
                            const e = S(t) || 'Anonymous';
                            return (
                                ((t = r.is.str(t) ? a[t] || (a[t] = m(t, o)) : t[_] || (t[_] = m(t, o))).displayName =
                                    `Animated(${e})`),
                                t
                            );
                        };
                    return (
                        (0, r.rU)(t, (e, n) => {
                            (r.is.arr(t) && (n = S(e)), (a[n] = a(e)));
                        }),
                        { animated: a }
                    );
                },
                S = (t) =>
                    r.is.str(t) ? t : t && r.is.str(t.displayName) ? t.displayName : (r.is.fun(t) && t.name) || null;
        },
        9738: (t, e, n) => {
            'use strict';
            n.d(e, { Globals: () => r.OH, useSpring: () => wt });
            var r = n(2810),
                i = n(7363),
                o = n(1686);
            function a(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(r, i);
            }
            function s(t) {
                return function () {
                    var e = this,
                        n = arguments;
                    return new Promise(function (r, i) {
                        var o = t.apply(e, n);
                        function s(t) {
                            a(o, r, i, s, u, 'next', t);
                        }
                        function u(t) {
                            a(o, r, i, s, u, 'throw', t);
                        }
                        s(void 0);
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
                            if ('string' == typeof t) return c(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return (
                                'Object' === n && t.constructor && (n = t.constructor.name),
                                'Map' === n || 'Set' === n
                                    ? Array.from(t)
                                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                      ? c(t, e)
                                      : void 0
                            );
                        }
                    })(t)) ||
                    (e && t && 'number' == typeof t.length)
                ) {
                    n && (t = n);
                    var r = 0;
                    return function () {
                        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                    };
                }
                throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
            }
            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function l() {
                return (
                    (l =
                        Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                            }
                            return t;
                        }),
                    l.apply(this, arguments)
                );
            }
            function d(t, ...e) {
                return r.is.fun(t) ? t(...e) : t;
            }
            const h = (t, e) => !0 === t || !!(e && t && (r.is.fun(t) ? t(e) : (0, r.qo)(t).includes(e))),
                f = (t, e) => (r.is.obj(t) ? e && t[e] : t),
                p = (t, e) => (!0 === t.default ? t[e] : t.default ? t.default[e] : void 0),
                v = (t) => t,
                y = (t, e = v) => {
                    let n = g;
                    t.default && !0 !== t.default && ((t = t.default), (n = Object.keys(t)));
                    const i = {};
                    for (var o, a = u(n); !(o = a()).done; ) {
                        const n = o.value,
                            a = e(t[n], n);
                        r.is.und(a) || (i[n] = a);
                    }
                    return i;
                },
                g =
                    /^lobby\/feature\/FunRandom((BattleResultsView\/FunRandomBattleResults|TierListView\/FunRandomTierList)View|Progression\/FunRandomProgression)$/.test(
                        n.j,
                    )
                        ? ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest']
                        : null,
                m = {
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
                        ((0, r.rU)(t, (t, r) => {
                            m[r] || ((e[r] = t), n++);
                        }),
                        n)
                    )
                        return e;
                })(t);
                if (e) {
                    const n = { to: e };
                    return ((0, r.rU)(t, (t, r) => r in e || (n[r] = t)), n);
                }
                return l({}, t);
            }
            function _(t) {
                return (
                    (t = (0, r.je)(t)),
                    r.is.arr(t)
                        ? t.map(_)
                        : (0, r.Df)(t)
                          ? r.OH.createStringInterpolator({ range: [0, 1], output: [t, t] })(1)
                          : t
                );
            }
            function w(t) {
                for (const e in t) return !0;
                return !1;
            }
            function S(t) {
                return r.is.fun(t) || (r.is.arr(t) && r.is.obj(t[0]));
            }
            function O(t, e) {
                var n;
                (null == (n = t.ref) || n.delete(t), null == e || e.delete(t));
            }
            function x(t, e) {
                var n;
                e && t.ref !== e && (null == (n = t.ref) || n.delete(t), e.add(t), (t.ref = e));
            }
            const W = l({}, { tension: 170, friction: 26 }, { mass: 1, damping: 1, easing: (t) => t, clamp: !1 });
            class R {
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
                        Object.assign(this, W));
                }
            }
            function E(t, e) {
                if (r.is.und(e.decay)) {
                    const n = !r.is.und(e.tension) || !r.is.und(e.friction);
                    ((!n && r.is.und(e.frequency) && r.is.und(e.damping) && r.is.und(e.mass)) ||
                        ((t.duration = void 0), (t.decay = void 0)),
                        n && (t.frequency = void 0));
                } else t.duration = void 0;
            }
            const j =
                /^lobby\/feature\/FunRandom((BattleResultsView\/FunRandomBattleResults|TierListView\/FunRandomTierList)View|Progression\/FunRandomProgression)$/.test(
                    n.j,
                )
                    ? []
                    : null;
            class U {
                constructor() {
                    ((this.changed = !1),
                        (this.values = j),
                        (this.toValues = null),
                        (this.fromValues = j),
                        (this.to = void 0),
                        (this.from = void 0),
                        (this.config = new R()),
                        (this.immediate = !1));
                }
            }
            function T(t, { key: e, props: n, defaultProps: i, state: o, actions: a }) {
                return new Promise((s, u) => {
                    var c;
                    let f,
                        p,
                        v = h(null != (c = n.cancel) ? c : null == i ? void 0 : i.cancel, e);
                    if (v) m();
                    else {
                        r.is.und(n.pause) || (o.paused = h(n.pause, e));
                        let t = null == i ? void 0 : i.pause;
                        (!0 !== t && (t = o.paused || h(t, e)),
                            (f = d(n.delay || 0, e)),
                            t ? (o.resumeQueue.add(g), a.pause()) : (a.resume(), g()));
                    }
                    function y() {
                        (o.resumeQueue.add(g), o.timeouts.delete(p), p.cancel(), (f = p.time - r.Wn.now()));
                    }
                    function g() {
                        f > 0 ? ((p = r.Wn.setTimeout(m, f)), o.pauseQueue.add(y), o.timeouts.add(p)) : m();
                    }
                    function m() {
                        (o.pauseQueue.delete(y), o.timeouts.delete(p), t <= (o.cancelId || 0) && (v = !0));
                        try {
                            a.start(l({}, n, { callId: t, cancel: v }), s);
                        } catch (t) {
                            u(t);
                        }
                    }
                });
            }
            const A = (t, e) =>
                    1 == e.length
                        ? e[0]
                        : e.some((t) => t.cancelled)
                          ? V(t.get())
                          : e.every((t) => t.noop)
                            ? P(t.get())
                            : B(
                                  t.get(),
                                  e.every((t) => t.finished),
                              ),
                P = (t) => ({ value: t, noop: !0, finished: !0, cancelled: !1 }),
                B = (t, e, n = !1) => ({ value: t, finished: e, cancelled: n }),
                V = (t) => ({ value: t, cancelled: !0, finished: !1 });
            function M(t, e, n, i) {
                const o = e.callId,
                    a = e.parentId,
                    c = e.onRest,
                    d = n.asyncTo,
                    h = n.promise;
                return a || t !== d || e.reset
                    ? (n.promise = s(function* () {
                          ((n.asyncId = o), (n.asyncTo = t));
                          const f = y(e, (t, e) => ('onRest' === e ? void 0 : t));
                          let p, v;
                          const g = new Promise((t, e) => ((p = t), (v = e))),
                              m = (t) => {
                                  const e = (o <= (n.cancelId || 0) && V(i)) || (o !== n.asyncId && B(i, !1));
                                  if (e) throw ((t.result = e), v(t), t);
                              },
                              b = (t, e) => {
                                  const a = new F(),
                                      u = new C();
                                  return s(function* () {
                                      if (r.OH.skipAnimation) throw (k(n), (u.result = B(i, !1)), v(u), u);
                                      m(a);
                                      const s = r.is.obj(t) ? l({}, t) : l({}, e, { to: t });
                                      ((s.parentId = o),
                                          (0, r.rU)(f, (t, e) => {
                                              r.is.und(s[e]) && (s[e] = t);
                                          }));
                                      const c = yield i.start(s);
                                      return (
                                          m(a),
                                          n.paused &&
                                              (yield new Promise((t) => {
                                                  n.resumeQueue.add(t);
                                              })),
                                          c
                                      );
                                  })();
                              };
                          let _;
                          if (r.OH.skipAnimation) return (k(n), B(i, !1));
                          try {
                              let e;
                              ((e = r.is.arr(t)
                                  ? ((w = s(function* (t) {
                                        for (var e, n = u(t); !(e = n()).done; ) {
                                            const t = e.value;
                                            yield b(t);
                                        }
                                    })),
                                    function (t) {
                                        return w.apply(this, arguments);
                                    })(t)
                                  : Promise.resolve(t(b, i.stop.bind(i)))),
                                  yield Promise.all([e.then(p), g]),
                                  (_ = B(i.get(), !0, !1)));
                          } catch (t) {
                              if (t instanceof F) _ = t.result;
                              else {
                                  if (!(t instanceof C)) throw t;
                                  _ = t.result;
                              }
                          } finally {
                              o == n.asyncId &&
                                  ((n.asyncId = a), (n.asyncTo = a ? d : void 0), (n.promise = a ? h : void 0));
                          }
                          var w;
                          return (
                              r.is.fun(c) &&
                                  r.Wn.batchedUpdates(() => {
                                      c(_, i, i.item);
                                  }),
                              _
                          );
                      })())
                    : h;
            }
            function k(t, e) {
                ((0, r.yl)(t.timeouts, (t) => t.cancel()),
                    t.pauseQueue.clear(),
                    t.resumeQueue.clear(),
                    (t.asyncId = t.asyncTo = t.promise = void 0),
                    e && (t.cancelId = e));
            }
            class F extends Error {
                constructor() {
                    (super(
                        'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
                    ),
                        (this.result = void 0));
                }
            }
            class C extends Error {
                constructor() {
                    (super('SkipAnimationSignal'), (this.result = void 0));
                }
            }
            const N = (t) => t instanceof D;
            let H = 1;
            class D extends r.B0 {
                constructor(...t) {
                    (super(...t), (this.id = H++), (this.key = void 0), (this._priority = 0));
                }
                get priority() {
                    return this._priority;
                }
                set priority(t) {
                    this._priority != t && ((this._priority = t), this._onPriorityChange(t));
                }
                get() {
                    const t = (0, o.ys)(this);
                    return t && t.getValue();
                }
                to(...t) {
                    return r.OH.to(this, t);
                }
                interpolate(...t) {
                    return ((0, r.LW)(), r.OH.to(this, t));
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
                    (0, r.k0)(this, { type: 'change', parent: this, value: t, idle: e });
                }
                _onPriorityChange(t) {
                    (this.idle || r.fT.sort(this), (0, r.k0)(this, { type: 'priority', parent: this, priority: t }));
                }
            }
            const I = Symbol.for('SpringPhase'),
                L = (t) => (1 & t[I]) > 0,
                $ = (t) => (2 & t[I]) > 0,
                q = (t) => (4 & t[I]) > 0,
                Q = (t, e) => (e ? (t[I] |= 3) : (t[I] &= -3)),
                X = (t, e) => (e ? (t[I] |= 4) : (t[I] &= -5));
            class z extends (/^lobby\/feature\/FunRandom((BattleResultsView\/FunRandomBattleResults|TierListView\/FunRandomTierList)View|Progression\/FunRandomProgression)$/.test(
                n.j,
            )
                ? D
                : null) {
                constructor(t, e) {
                    if (
                        (super(),
                        (this.key = void 0),
                        (this.animation = new U()),
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
                        !r.is.und(t) || !r.is.und(e))
                    ) {
                        const n = r.is.obj(t) ? l({}, t) : l({}, e, { from: t });
                        (r.is.und(n.default) && (n.default = !0), this.start(n));
                    }
                }
                get idle() {
                    return !($(this) || this._state.asyncTo) || q(this);
                }
                get goal() {
                    return (0, r.je)(this.animation.to);
                }
                get velocity() {
                    const t = (0, o.ys)(this);
                    return t instanceof o.iG ? t.lastVelocity || 0 : t.getPayload().map((t) => t.lastVelocity || 0);
                }
                get hasAnimated() {
                    return L(this);
                }
                get isAnimating() {
                    return $(this);
                }
                get isPaused() {
                    return q(this);
                }
                advance(t) {
                    let e = !0,
                        n = !1;
                    const i = this.animation;
                    let a = i.config,
                        s = i.toValues;
                    const u = (0, o.He)(i.to);
                    (!u && (0, r.j$)(i.to) && (s = (0, r.qo)((0, r.je)(i.to))),
                        i.values.forEach((c, l) => {
                            if (c.done) return;
                            const d = c.constructor == o.eC ? 1 : u ? u[l].lastPosition : s[l];
                            let h = i.immediate,
                                f = d;
                            if (!h) {
                                if (((f = c.lastPosition), a.tension <= 0)) return void (c.done = !0);
                                let e = (c.elapsedTime += t);
                                const n = i.fromValues[l],
                                    o =
                                        null != c.v0
                                            ? c.v0
                                            : (c.v0 = r.is.arr(a.velocity) ? a.velocity[l] : a.velocity);
                                let s;
                                if (r.is.und(a.duration))
                                    if (a.decay) {
                                        const t = !0 === a.decay ? 0.998 : a.decay,
                                            r = Math.exp(-(1 - t) * e);
                                        ((f = n + (o / (1 - t)) * (1 - r)),
                                            (h = Math.abs(c.lastPosition - f) < 0.1),
                                            (s = o * r));
                                    } else {
                                        s = null == c.lastVelocity ? o : c.lastVelocity;
                                        const e =
                                                a.precision || (n == d ? 0.005 : Math.min(1, 0.001 * Math.abs(d - n))),
                                            i = a.restVelocity || e / 10,
                                            u = a.clamp ? 0 : a.bounce,
                                            l = !r.is.und(u),
                                            p = n == d ? c.v0 > 0 : n < d;
                                        let v,
                                            y = !1;
                                        const g = 1,
                                            m = Math.ceil(t / g);
                                        for (
                                            let t = 0;
                                            t < m && ((v = Math.abs(s) > i), v || ((h = Math.abs(d - f) <= e), !h));
                                            ++t
                                        )
                                            (l && ((y = f == d || f > d == p), y && ((s = -s * u), (f = d))),
                                                (s +=
                                                    ((1e-6 * -a.tension * (f - d) + 0.001 * -a.friction * s) / a.mass) *
                                                    g),
                                                (f += s * g));
                                    }
                                else {
                                    let r = 1;
                                    (a.duration > 0 &&
                                        (this._memoizedDuration !== a.duration &&
                                            ((this._memoizedDuration = a.duration),
                                            c.durationProgress > 0 &&
                                                ((c.elapsedTime = a.duration * c.durationProgress),
                                                (e = c.elapsedTime += t))),
                                        (r = (a.progress || 0) + e / this._memoizedDuration),
                                        (r = r > 1 ? 1 : r < 0 ? 0 : r),
                                        (c.durationProgress = r)),
                                        (f = n + a.easing(r) * (d - n)),
                                        (s = (f - c.lastPosition) / t),
                                        (h = 1 == r));
                                }
                                ((c.lastVelocity = s),
                                    Number.isNaN(f) && (console.warn('Got NaN while animating:', this), (h = !0)));
                            }
                            (u && !u[l].done && (h = !1),
                                h ? (c.done = !0) : (e = !1),
                                c.setValue(f, a.round) && (n = !0));
                        }));
                    const c = (0, o.ys)(this),
                        l = c.getValue();
                    if (e) {
                        const t = (0, r.je)(i.to);
                        ((l === t && !n) || a.decay
                            ? n && a.decay && this._onChange(l)
                            : (c.setValue(t), this._onChange(t)),
                            this._stop());
                    } else n && this._onChange(l);
                }
                set(t) {
                    return (
                        r.Wn.batchedUpdates(() => {
                            (this._stop(), this._focus(t), this._set(t));
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
                    if ($(this)) {
                        const t = this.animation,
                            e = t.to,
                            n = t.config;
                        r.Wn.batchedUpdates(() => {
                            (this._onStart(), n.decay || this._set(e, !1), this._stop());
                        });
                    }
                    return this;
                }
                update(t) {
                    return ((this.queue || (this.queue = [])).push(t), this);
                }
                start(t, e) {
                    let n;
                    return (
                        r.is.und(t)
                            ? ((n = this.queue || []), (this.queue = []))
                            : (n = [r.is.obj(t) ? t : l({}, e, { to: t })]),
                        Promise.all(n.map((t) => this._update(t))).then((t) => A(this, t))
                    );
                }
                stop(t) {
                    const e = this.animation.to;
                    return (
                        this._focus(this.get()),
                        k(this._state, t && this._lastCallId),
                        r.Wn.batchedUpdates(() => this._stop(e, t)),
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
                    ((n = r.is.obj(n) ? n[e] : n),
                        (null == n || S(n)) && (n = void 0),
                        (i = r.is.obj(i) ? i[e] : i),
                        null == i && (i = void 0));
                    const a = { to: n, from: i };
                    if (!L(this)) {
                        if (t.reverse) {
                            var s = [i, n];
                            ((n = s[0]), (i = s[1]));
                        }
                        ((i = (0, r.je)(i)), r.is.und(i) ? (0, o.ys)(this) || this._set(n) : this._set(i));
                    }
                    return a;
                }
                _update(t, e) {
                    let n = l({}, t);
                    const i = this.key,
                        o = this.defaultProps;
                    (n.default &&
                        Object.assign(
                            o,
                            y(n, (t, e) => (/^on/.test(e) ? f(t, i) : t)),
                        ),
                        et(this, n, 'onProps'),
                        nt(this, 'onProps', n, this));
                    const a = this._prepareNode(n);
                    if (Object.isFrozen(this))
                        throw Error(
                            'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                        );
                    const s = this._state;
                    return T(++this._lastCallId, {
                        key: i,
                        props: n,
                        defaultProps: o,
                        state: s,
                        actions: {
                            pause: () => {
                                q(this) ||
                                    (X(this, !0),
                                    (0, r.bl)(s.pauseQueue),
                                    nt(this, 'onPause', B(this, K(this, this.animation.to)), this));
                            },
                            resume: () => {
                                q(this) &&
                                    (X(this, !1),
                                    $(this) && this._resume(),
                                    (0, r.bl)(s.resumeQueue),
                                    nt(this, 'onResume', B(this, K(this, this.animation.to)), this));
                            },
                            start: this._merge.bind(this, a),
                        },
                    }).then((t) => {
                        if (n.loop && t.finished && (!e || !t.noop)) {
                            const t = G(n);
                            if (t) return this._update(t, !0);
                        }
                        return t;
                    });
                }
                _merge(t, e, n) {
                    if (e.cancel) return (this.stop(!0), n(V(this)));
                    const i = !r.is.und(t.to),
                        a = !r.is.und(t.from);
                    if (i || a) {
                        if (!(e.callId > this._lastToId)) return n(V(this));
                        this._lastToId = e.callId;
                    }
                    const s = this.key,
                        u = this.defaultProps,
                        c = this.animation,
                        f = c.to,
                        p = c.from;
                    let v = t.to,
                        y = void 0 === v ? f : v,
                        g = t.from,
                        m = void 0 === g ? p : g;
                    if ((!a || i || (e.default && !r.is.und(y)) || (y = m), e.reverse)) {
                        var b = [m, y];
                        ((y = b[0]), (m = b[1]));
                    }
                    const w = !(0, r.Xy)(m, p);
                    (w && (c.from = m), (m = (0, r.je)(m)));
                    const O = !(0, r.Xy)(y, f);
                    O && this._focus(y);
                    const x = S(e.to),
                        R = c.config,
                        j = R.decay,
                        U = R.velocity;
                    ((i || a) && (R.velocity = 0),
                        e.config &&
                            !x &&
                            (function (t, e, n) {
                                (n && (E((n = l({}, n)), e), (e = l({}, n, e))), E(t, e), Object.assign(t, e));
                                for (const e in W) null == t[e] && (t[e] = W[e]);
                                let i = t.mass,
                                    o = t.frequency,
                                    a = t.damping;
                                r.is.und(o) ||
                                    (o < 0.01 && (o = 0.01),
                                    a < 0 && (a = 0),
                                    (t.tension = Math.pow((2 * Math.PI) / o, 2) * i),
                                    (t.friction = (4 * Math.PI * a * i) / o));
                            })(R, d(e.config, s), e.config !== u.config ? d(u.config, s) : void 0));
                    let T = (0, o.ys)(this);
                    if (!T || r.is.und(y)) return n(B(this, !0));
                    const A = r.is.und(e.reset) ? a && !e.default : !r.is.und(m) && h(e.reset, s),
                        k = A ? m : this.get(),
                        F = _(y),
                        C = r.is.num(F) || r.is.arr(F) || (0, r.Df)(F),
                        N = !x && (!C || h(u.immediate || e.immediate, s));
                    if (O) {
                        const t = (0, o.sb)(y);
                        if (t !== T.constructor) {
                            if (!N)
                                throw Error(
                                    `Cannot animate between ${T.constructor.name} and ${t.name}, as the "to" prop suggests`,
                                );
                            T = this._set(F);
                        }
                    }
                    const H = T.constructor;
                    let D = (0, r.j$)(y),
                        I = !1;
                    if (!D) {
                        const t = A || (!L(this) && w);
                        ((O || t) && ((I = (0, r.Xy)(_(k), F)), (D = !I)),
                            (((0, r.Xy)(c.immediate, N) || N) && (0, r.Xy)(R.decay, j) && (0, r.Xy)(R.velocity, U)) ||
                                (D = !0));
                    }
                    if (
                        (I && $(this) && (c.changed && !A ? (D = !0) : D || this._stop(f)),
                        !x &&
                            ((D || (0, r.j$)(f)) &&
                                ((c.values = T.getPayload()),
                                (c.toValues = (0, r.j$)(y) ? null : H == o.eC ? [1] : (0, r.qo)(F))),
                            c.immediate != N && ((c.immediate = N), N || A || this._set(f)),
                            D))
                    ) {
                        const t = c.onRest;
                        (0, r.S6)(tt, (t) => et(this, e, t));
                        const i = B(this, K(this, f));
                        ((0, r.bl)(this._pendingCalls, i),
                            this._pendingCalls.add(n),
                            c.changed &&
                                r.Wn.batchedUpdates(() => {
                                    ((c.changed = !A),
                                        null == t || t(i, this),
                                        A ? d(u.onRest, i) : null == c.onStart || c.onStart(i, this));
                                }));
                    }
                    (A && this._set(k),
                        x
                            ? n(M(e.to, e, this._state, this))
                            : D
                              ? this._start()
                              : $(this) && !O
                                ? this._pendingCalls.add(n)
                                : n(P(k)));
                }
                _focus(t) {
                    const e = this.animation;
                    t !== e.to && ((0, r.Ll)(this) && this._detach(), (e.to = t), (0, r.Ll)(this) && this._attach());
                }
                _attach() {
                    let t = 0;
                    const e = this.animation.to;
                    ((0, r.j$)(e) && ((0, r.UI)(e, this), N(e) && (t = e.priority + 1)), (this.priority = t));
                }
                _detach() {
                    const t = this.animation.to;
                    (0, r.j$)(t) && (0, r.iL)(t, this);
                }
                _set(t, e = !0) {
                    const n = (0, r.je)(t);
                    if (!r.is.und(n)) {
                        const t = (0, o.ys)(this);
                        if (!t || !(0, r.Xy)(n, t.getValue())) {
                            const i = (0, o.sb)(n);
                            (t && t.constructor == i ? t.setValue(n) : (0, o.f3)(this, i.create(n)),
                                t &&
                                    r.Wn.batchedUpdates(() => {
                                        this._onChange(n, e);
                                    }));
                        }
                    }
                    return (0, o.ys)(this);
                }
                _onStart() {
                    const t = this.animation;
                    t.changed || ((t.changed = !0), nt(this, 'onStart', B(this, K(this, t.to)), this));
                }
                _onChange(t, e) {
                    (e || (this._onStart(), d(this.animation.onChange, t, this)),
                        d(this.defaultProps.onChange, t, this),
                        super._onChange(t, e));
                }
                _start() {
                    const t = this.animation;
                    ((0, o.ys)(this).reset((0, r.je)(t.to)),
                        t.immediate || (t.fromValues = t.values.map((t) => t.lastPosition)),
                        $(this) || (Q(this, !0), q(this) || this._resume()));
                }
                _resume() {
                    r.OH.skipAnimation ? this.finish() : r.fT.start(this);
                }
                _stop(t, e) {
                    if ($(this)) {
                        Q(this, !1);
                        const n = this.animation;
                        ((0, r.S6)(n.values, (t) => {
                            t.done = !0;
                        }),
                            n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                            (0, r.k0)(this, { type: 'idle', parent: this }));
                        const i = e ? V(this.get()) : B(this.get(), K(this, null != t ? t : n.to));
                        ((0, r.bl)(this._pendingCalls, i),
                            n.changed && ((n.changed = !1), nt(this, 'onRest', i, this)));
                    }
                }
            }
            function K(t, e) {
                const n = _(e),
                    i = _(t.get());
                return (0, r.Xy)(i, n);
            }
            function G(t, e = t.loop, n = t.to) {
                let r = d(e);
                if (r) {
                    const i = !0 !== r && b(r),
                        o = (i || t).reverse,
                        a = !i || i.reset;
                    return Z(
                        l(
                            {},
                            t,
                            {
                                loop: e,
                                default: !1,
                                pause: void 0,
                                to: !o || S(n) ? n : void 0,
                                from: a ? t.from : void 0,
                                reset: a,
                            },
                            i,
                        ),
                    );
                }
            }
            function Z(t) {
                const e = (t = b(t)),
                    n = e.to,
                    i = e.from,
                    o = new Set();
                return (r.is.obj(n) && Y(n, o), r.is.obj(i) && Y(i, o), (t.keys = o.size ? Array.from(o) : null), t);
            }
            function J(t) {
                const e = Z(t);
                return (r.is.und(e.default) && (e.default = y(e)), e);
            }
            function Y(t, e) {
                (0, r.rU)(t, (t, n) => null != t && e.add(n));
            }
            const tt =
                /^lobby\/feature\/FunRandom((BattleResultsView\/FunRandomBattleResults|TierListView\/FunRandomTierList)View|Progression\/FunRandomProgression)$/.test(
                    n.j,
                )
                    ? ['onStart', 'onRest', 'onChange', 'onPause', 'onResume']
                    : null;
            function et(t, e, n) {
                t.animation[n] = e[n] !== p(e, n) ? f(e[n], t.key) : void 0;
            }
            function nt(t, e, ...n) {
                var r, i, o, a;
                (null == (r = (i = t.animation)[e]) || r.call(i, ...n),
                    null == (o = (a = t.defaultProps)[e]) || o.call(a, ...n));
            }
            const rt =
                /^lobby\/feature\/FunRandom((BattleResultsView\/FunRandomBattleResults|TierListView\/FunRandomTierList)View|Progression\/FunRandomProgression)$/.test(
                    n.j,
                )
                    ? ['onStart', 'onChange', 'onRest']
                    : null;
            let it = 1;
            class ot {
                constructor(t, e) {
                    ((this.id = it++),
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
                        t && this.start(l({ default: !0 }, t)));
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
                    return (this.each((e, n) => (t[n] = e.get())), t);
                }
                set(t) {
                    for (const e in t) {
                        const n = t[e];
                        r.is.und(n) || this.springs[e].set(n);
                    }
                }
                update(t) {
                    return (t && this.queue.push(Z(t)), this);
                }
                start(t) {
                    let e = this.queue;
                    return (
                        t ? (e = (0, r.qo)(t).map(Z)) : (this.queue = []),
                        this._flush ? this._flush(this, e) : (ft(this, e), at(this, e))
                    );
                }
                stop(t, e) {
                    if ((t !== !!t && (e = t), e)) {
                        const n = this.springs;
                        (0, r.S6)((0, r.qo)(e), (e) => n[e].stop(!!t));
                    } else (k(this._state, this._lastAsyncId), this.each((e) => e.stop(!!t)));
                    return this;
                }
                pause(t) {
                    if (r.is.und(t)) this.start({ pause: !0 });
                    else {
                        const e = this.springs;
                        (0, r.S6)((0, r.qo)(t), (t) => e[t].pause());
                    }
                    return this;
                }
                resume(t) {
                    if (r.is.und(t)) this.start({ pause: !1 });
                    else {
                        const e = this.springs;
                        (0, r.S6)((0, r.qo)(t), (t) => e[t].resume());
                    }
                    return this;
                }
                each(t) {
                    (0, r.rU)(this.springs, t);
                }
                _onFrame() {
                    const t = this._events,
                        e = t.onStart,
                        n = t.onChange,
                        i = t.onRest,
                        o = this._active.size > 0,
                        a = this._changed.size > 0;
                    ((o && !this._started) || (a && !this._started)) &&
                        ((this._started = !0),
                        (0, r.yl)(e, ([t, e]) => {
                            ((e.value = this.get()), t(e, this, this._item));
                        }));
                    const s = !o && this._started,
                        u = a || (s && i.size) ? this.get() : null;
                    (a &&
                        n.size &&
                        (0, r.yl)(n, ([t, e]) => {
                            ((e.value = u), t(e, this, this._item));
                        }),
                        s &&
                            ((this._started = !1),
                            (0, r.yl)(i, ([t, e]) => {
                                ((e.value = u), t(e, this, this._item));
                            })));
                }
                eventObserved(t) {
                    if ('change' == t.type) (this._changed.add(t.parent), t.idle || this._active.add(t.parent));
                    else {
                        if ('idle' != t.type) return;
                        this._active.delete(t.parent);
                    }
                    r.Wn.onFrame(this._onFrame);
                }
            }
            function at(t, e) {
                return Promise.all(e.map((e) => st(t, e))).then((e) => A(t, e));
            }
            function st(t, e, n) {
                return ut.apply(this, arguments);
            }
            function ut() {
                return (
                    (ut = s(function* (t, e, n) {
                        const i = e.keys,
                            o = e.to,
                            a = e.from,
                            s = e.loop,
                            u = e.onRest,
                            c = e.onResolve,
                            l = r.is.obj(e.default) && e.default;
                        (s && (e.loop = !1), !1 === o && (e.to = null), !1 === a && (e.from = null));
                        const d = r.is.arr(o) || r.is.fun(o) ? o : void 0;
                        d
                            ? ((e.to = void 0), (e.onRest = void 0), l && (l.onRest = void 0))
                            : (0, r.S6)(rt, (n) => {
                                  const i = e[n];
                                  if (r.is.fun(i)) {
                                      const r = t._events[n];
                                      ((e[n] = ({ finished: t, cancelled: e }) => {
                                          const n = r.get(i);
                                          n
                                              ? (t || (n.finished = !1), e && (n.cancelled = !0))
                                              : r.set(i, { value: null, finished: t || !1, cancelled: e || !1 });
                                      }),
                                          l && (l[n] = e[n]));
                                  }
                              });
                        const h = t._state;
                        e.pause === !h.paused
                            ? ((h.paused = e.pause), (0, r.bl)(e.pause ? h.pauseQueue : h.resumeQueue))
                            : h.paused && (e.pause = !0);
                        const f = (i || Object.keys(t.springs)).map((n) => t.springs[n].start(e)),
                            v = !0 === e.cancel || !0 === p(e, 'cancel');
                        ((d || (v && h.asyncId)) &&
                            f.push(
                                T(++t._lastAsyncId, {
                                    props: e,
                                    state: h,
                                    actions: {
                                        pause: r.ZT,
                                        resume: r.ZT,
                                        start(e, n) {
                                            v ? (k(h, t._lastAsyncId), n(V(t))) : ((e.onRest = u), n(M(d, e, h, t)));
                                        },
                                    },
                                }),
                            ),
                            h.paused &&
                                (yield new Promise((t) => {
                                    h.resumeQueue.add(t);
                                })));
                        const y = A(t, yield Promise.all(f));
                        if (s && y.finished && (!n || !y.noop)) {
                            const n = G(e, s, o);
                            if (n) return (ft(t, [n]), st(t, n, !0));
                        }
                        return (c && r.Wn.batchedUpdates(() => c(y, t, t.item)), y);
                    })),
                    ut.apply(this, arguments)
                );
            }
            function ct(t, e) {
                const n = l({}, t.springs);
                return (
                    e &&
                        (0, r.S6)((0, r.qo)(e), (t) => {
                            (r.is.und(t.keys) && (t = Z(t)),
                                r.is.obj(t.to) || (t = l({}, t, { to: void 0 })),
                                ht(n, t, (t) => dt(t)));
                        }),
                    lt(t, n),
                    n
                );
            }
            function lt(t, e) {
                (0, r.rU)(e, (e, n) => {
                    t.springs[n] || ((t.springs[n] = e), (0, r.UI)(e, t));
                });
            }
            function dt(t, e) {
                const n = new z();
                return ((n.key = t), e && (0, r.UI)(n, e), n);
            }
            function ht(t, e, n) {
                e.keys &&
                    (0, r.S6)(e.keys, (r) => {
                        (t[r] || (t[r] = n(r)))._prepareNode(e);
                    });
            }
            function ft(t, e) {
                (0, r.S6)(e, (e) => {
                    ht(t.springs, e, (e) => dt(e, t));
                });
            }
            const pt = ['children'],
                vt = (t) => {
                    let e = t.children,
                        n = (function (t, e) {
                            if (null == t) return {};
                            var n,
                                r,
                                i = {},
                                o = Object.keys(t);
                            for (r = 0; r < o.length; r++) ((n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]));
                            return i;
                        })(t, pt);
                    const o = (0, i.useContext)(yt),
                        a = n.pause || !!o.pause,
                        s = n.immediate || !!o.immediate;
                    n = (0, r.Pr)(() => ({ pause: a, immediate: s }), [a, s]);
                    const u = yt.Provider;
                    return i.createElement(u, { value: n }, e);
                },
                yt =
                    ((gt = vt),
                    (mt = {}),
                    Object.assign(gt, i.createContext(mt)),
                    (gt.Provider._context = gt),
                    (gt.Consumer._context = gt),
                    gt);
            var gt, mt;
            ((vt.Provider = yt.Provider), (vt.Consumer = yt.Consumer));
            const bt = () => {
                const t = [],
                    e = function (e) {
                        (0, r.ZR)();
                        const i = [];
                        return (
                            (0, r.S6)(t, (t, o) => {
                                if (r.is.und(e)) i.push(t.start());
                                else {
                                    const r = n(e, t, o);
                                    r && i.push(t.start(r));
                                }
                            }),
                            i
                        );
                    };
                ((e.current = t),
                    (e.add = function (e) {
                        t.includes(e) || t.push(e);
                    }),
                    (e.delete = function (e) {
                        const n = t.indexOf(e);
                        ~n && t.splice(n, 1);
                    }),
                    (e.pause = function () {
                        return ((0, r.S6)(t, (t) => t.pause(...arguments)), this);
                    }),
                    (e.resume = function () {
                        return ((0, r.S6)(t, (t) => t.resume(...arguments)), this);
                    }),
                    (e.set = function (e) {
                        (0, r.S6)(t, (t) => t.set(e));
                    }),
                    (e.start = function (e) {
                        const n = [];
                        return (
                            (0, r.S6)(t, (t, i) => {
                                if (r.is.und(e)) n.push(t.start());
                                else {
                                    const r = this._getProps(e, t, i);
                                    r && n.push(t.start(r));
                                }
                            }),
                            n
                        );
                    }),
                    (e.stop = function () {
                        return ((0, r.S6)(t, (t) => t.stop(...arguments)), this);
                    }),
                    (e.update = function (e) {
                        return ((0, r.S6)(t, (t, n) => t.update(this._getProps(e, t, n))), this);
                    }));
                const n = function (t, e, n) {
                    return r.is.fun(t) ? t(n, e) : t;
                };
                return ((e._getProps = n), e);
            };
            function _t(t, e, n) {
                const o = r.is.fun(e) && e;
                o && !n && (n = []);
                const a = (0, i.useMemo)(() => (o || 3 == arguments.length ? bt() : void 0), []),
                    s = (0, i.useRef)(0),
                    u = (0, r.NW)(),
                    c = (0, i.useMemo)(
                        () => ({
                            ctrls: [],
                            queue: [],
                            flush(t, e) {
                                const n = ct(t, e);
                                return s.current > 0 && !c.queue.length && !Object.keys(n).some((e) => !t.springs[e])
                                    ? at(t, e)
                                    : new Promise((r) => {
                                          (lt(t, n),
                                              c.queue.push(() => {
                                                  r(at(t, e));
                                              }),
                                              u());
                                      });
                            },
                        }),
                        [],
                    ),
                    d = (0, i.useRef)([...c.ctrls]),
                    h = [],
                    f = (0, r.zH)(t) || 0;
                function p(t, n) {
                    for (let r = t; r < n; r++) {
                        const t = d.current[r] || (d.current[r] = new ot(null, c.flush)),
                            n = o ? o(r, t) : e[r];
                        n && (h[r] = J(n));
                    }
                }
                ((0, i.useMemo)(() => {
                    ((0, r.S6)(d.current.slice(t, f), (t) => {
                        (O(t, a), t.stop(!0));
                    }),
                        (d.current.length = t),
                        p(f, t));
                }, [t]),
                    (0, i.useMemo)(() => {
                        p(0, Math.min(f, t));
                    }, n));
                const v = d.current.map((t, e) => ct(t, h[e])),
                    y = (0, i.useContext)(vt),
                    g = (0, r.zH)(y),
                    m = y !== g && w(y);
                ((0, r.bt)(() => {
                    (s.current++, (c.ctrls = d.current));
                    const t = c.queue;
                    (t.length && ((c.queue = []), (0, r.S6)(t, (t) => t())),
                        (0, r.S6)(d.current, (t, e) => {
                            (null == a || a.add(t), m && t.start({ default: y }));
                            const n = h[e];
                            n && (x(t, n.ref), t.ref ? t.queue.push(n) : t.start(n));
                        }));
                }),
                    (0, r.tf)(() => () => {
                        (0, r.S6)(c.ctrls, (t) => t.stop(!0));
                    }));
                const b = v.map((t) => l({}, t));
                return a ? [b, a] : b;
            }
            function wt(t, e) {
                const n = r.is.fun(t),
                    i = _t(1, n ? t : [t], n ? e || [] : e),
                    o = i[0],
                    a = o[0],
                    s = i[1];
                return n || 2 == arguments.length ? [a, s] : a;
            }
            let St;
            !(function (t) {
                ((t.MOUNT = 'mount'), (t.ENTER = 'enter'), (t.UPDATE = 'update'), (t.LEAVE = 'leave'));
            })(St || (St = {}));
            class Ot extends D {
                constructor(t, e) {
                    (super(),
                        (this.key = void 0),
                        (this.idle = !0),
                        (this.calc = void 0),
                        (this._active = new Set()),
                        (this.source = t),
                        (this.calc = (0, r.mD)(...e)));
                    const n = this._get(),
                        i = (0, o.sb)(n);
                    (0, o.f3)(this, i.create(n));
                }
                advance(t) {
                    const e = this._get(),
                        n = this.get();
                    ((0, r.Xy)(e, n) || ((0, o.ys)(this).setValue(e), this._onChange(e, this.idle)),
                        !this.idle && Wt(this._active) && Rt(this));
                }
                _get() {
                    const t = r.is.arr(this.source) ? this.source.map(r.je) : (0, r.qo)((0, r.je)(this.source));
                    return this.calc(...t);
                }
                _start() {
                    this.idle &&
                        !Wt(this._active) &&
                        ((this.idle = !1),
                        (0, r.S6)((0, o.He)(this), (t) => {
                            t.done = !1;
                        }),
                        r.OH.skipAnimation ? (r.Wn.batchedUpdates(() => this.advance()), Rt(this)) : r.fT.start(this));
                }
                _attach() {
                    let t = 1;
                    ((0, r.S6)((0, r.qo)(this.source), (e) => {
                        ((0, r.j$)(e) && (0, r.UI)(e, this),
                            N(e) && (e.idle || this._active.add(e), (t = Math.max(t, e.priority + 1))));
                    }),
                        (this.priority = t),
                        this._start());
                }
                _detach() {
                    ((0, r.S6)((0, r.qo)(this.source), (t) => {
                        (0, r.j$)(t) && (0, r.iL)(t, this);
                    }),
                        this._active.clear(),
                        Rt(this));
                }
                eventObserved(t) {
                    'change' == t.type
                        ? t.idle
                            ? this.advance()
                            : (this._active.add(t.parent), this._start())
                        : 'idle' == t.type
                          ? this._active.delete(t.parent)
                          : 'priority' == t.type &&
                            (this.priority = (0, r.qo)(this.source).reduce(
                                (t, e) => Math.max(t, (N(e) ? e.priority : 0) + 1),
                                0,
                            ));
                }
            }
            function xt(t) {
                return !1 !== t.idle;
            }
            function Wt(t) {
                return !t.size || Array.from(t).every(xt);
            }
            function Rt(t) {
                t.idle ||
                    ((t.idle = !0),
                    (0, r.S6)((0, o.He)(t), (t) => {
                        t.done = !0;
                    }),
                    (0, r.k0)(t, { type: 'idle', parent: t }));
            }
            (r.OH.assign({ createStringInterpolator: r.qS, to: (t, e) => new Ot(t, e) }), r.fT.advance);
        },
        2810: (t, e, n) => {
            'use strict';
            n.d(e, {
                B0: () => bt,
                OH: () => k,
                UI: () => wt,
                k0: () => mt,
                O9: () => Q,
                mD: () => dt,
                qS: () => Tt,
                dE: () => O,
                ZR: () => kt,
                LW: () => Vt,
                S6: () => R,
                rU: () => E,
                yl: () => U,
                bl: () => T,
                fT: () => D,
                Ll: () => gt,
                je: () => yt,
                j$: () => vt,
                is: () => x,
                Df: () => Ft,
                Xy: () => W,
                ZT: () => S,
                Wn: () => i,
                iL: () => St,
                qo: () => j,
                NW: () => Ht,
                bt: () => $t,
                Pr: () => It,
                tf: () => Ct,
                zH: () => Lt,
            });
            let r = m();
            const i = (t) => p(t, r);
            let o = m();
            i.write = (t) => p(t, o);
            let a = m();
            i.onStart = (t) => p(t, a);
            let s = m();
            i.onFrame = (t) => p(t, s);
            let u = m();
            i.onFinish = (t) => p(t, u);
            let c = [];
            i.setTimeout = (t, e) => {
                let n = i.now() + e,
                    r = () => {
                        let t = c.findIndex((t) => t.cancel == r);
                        (~t && c.splice(t, 1), (_.count -= ~t ? 1 : 0));
                    },
                    o = { time: n, handler: t, cancel: r };
                return (c.splice(l(n), 0, o), (_.count += 1), v(), o);
            };
            let l = (t) => ~(~c.findIndex((e) => e.time > t) || ~c.length);
            ((i.cancel = (t) => {
                (r.delete(t), o.delete(t));
            }),
                (i.sync = (t) => {
                    ((f = !0), i.batchedUpdates(t), (f = !1));
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
                    function r(...t) {
                        ((e = t), i.onStart(n));
                    }
                    return (
                        (r.handler = t),
                        (r.cancel = () => {
                            (a.delete(n), (e = null));
                        }),
                        r
                    );
                }));
            let d = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
            ((i.use = (t) => (d = t)),
                (i.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
                (i.batchedUpdates = (t) => t()),
                (i.catch = console.error),
                (i.frameLoop = 'always'),
                (i.advance = () => {
                    'demand' !== i.frameLoop
                        ? console.warn(
                              'Cannot call the manual advancement of rafz whilst frameLoop is not set as demand',
                          )
                        : g();
                }));
            let h = -1,
                f = !1;
            function p(t, e) {
                f ? (e.delete(t), t(0)) : (e.add(t), v());
            }
            function v() {
                h < 0 && ((h = 0), 'demand' !== i.frameLoop && d(y));
            }
            function y() {
                ~h && (d(y), i.batchedUpdates(g));
            }
            function g() {
                let t = h;
                h = i.now();
                let e = l(h);
                (e && (b(c.splice(0, e), (t) => t.handler()), (_.count -= e)),
                    a.flush(),
                    r.flush(t ? Math.min(64, h - t) : 16.667),
                    s.flush(),
                    o.flush(),
                    u.flush());
            }
            function m() {
                let t = new Set(),
                    e = t;
                return {
                    add(n) {
                        ((_.count += e != t || t.has(n) ? 0 : 1), t.add(n));
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
                    ((h = -1), (c = []), (a = m()), (r = m()), (s = m()), (o = m()), (u = m()), (_.count = 0));
                },
            };
            var w = n(7363);
            function S() {}
            const O = (t, e, n) => Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 }),
                x = {
                    arr: Array.isArray,
                    obj: (t) => !!t && 'Object' === t.constructor.name,
                    fun: (t) => 'function' == typeof t,
                    str: (t) => 'string' == typeof t,
                    num: (t) => 'number' == typeof t,
                    und: (t) => void 0 === t,
                };
            function W(t, e) {
                if (x.arr(t)) {
                    if (!x.arr(e) || t.length !== e.length) return !1;
                    for (let n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
                    return !0;
                }
                return t === e;
            }
            const R = (t, e) => t.forEach(e);
            function E(t, e, n) {
                if (x.arr(t)) for (let r = 0; r < t.length; r++) e.call(n, t[r], `${r}`);
                else for (const r in t) t.hasOwnProperty(r) && e.call(n, t[r], r);
            }
            const j = (t) => (x.und(t) ? [] : x.arr(t) ? t : [t]);
            function U(t, e) {
                if (t.size) {
                    const n = Array.from(t);
                    (t.clear(), R(n, e));
                }
            }
            const T = (t, ...e) => U(t, (t) => t(...e));
            let A,
                P,
                B = null,
                V = !1,
                M = S;
            var k = Object.freeze({
                __proto__: null,
                get createStringInterpolator() {
                    return A;
                },
                get to() {
                    return P;
                },
                get colors() {
                    return B;
                },
                get skipAnimation() {
                    return V;
                },
                get willAdvance() {
                    return M;
                },
                assign: (t) => {
                    (t.to && (P = t.to),
                        t.now && (i.now = t.now),
                        void 0 !== t.colors && (B = t.colors),
                        null != t.skipAnimation && (V = t.skipAnimation),
                        t.createStringInterpolator && (A = t.createStringInterpolator),
                        t.requestAnimationFrame && i.use(t.requestAnimationFrame),
                        t.batchedUpdates && (i.batchedUpdates = t.batchedUpdates),
                        t.willAdvance && (M = t.willAdvance),
                        t.frameLoop && (i.frameLoop = t.frameLoop));
                },
            });
            const F = new Set();
            let C = [],
                N = [],
                H = 0;
            const D = {
                get idle() {
                    return !F.size && !C.length;
                },
                start(t) {
                    H > t.priority ? (F.add(t), i.onStart(I)) : (L(t), i(q));
                },
                advance: q,
                sort(t) {
                    if (H) i.onFrame(() => D.sort(t));
                    else {
                        const e = C.indexOf(t);
                        ~e && (C.splice(e, 1), $(t));
                    }
                },
                clear() {
                    ((C = []), F.clear());
                },
            };
            function I() {
                (F.forEach(L), F.clear(), i(q));
            }
            function L(t) {
                C.includes(t) || $(t);
            }
            function $(t) {
                C.splice(
                    (function (e, n) {
                        const r = e.findIndex((e) => e.priority > t.priority);
                        return r < 0 ? e.length : r;
                    })(C),
                    0,
                    t,
                );
            }
            function q(t) {
                const e = N;
                for (let n = 0; n < C.length; n++) {
                    const r = C[n];
                    ((H = r.priority), r.idle || (M(r), r.advance(t), r.idle || e.push(r)));
                }
                return ((H = 0), (N = C), (N.length = 0), (C = e), C.length > 0);
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
                X = '[-+]?\\d*\\.?\\d+',
                z = X + '%';
            function K(...t) {
                return '\\(\\s*(' + t.join(')\\s*,\\s*(') + ')\\s*\\)';
            }
            const G = new RegExp('rgb' + K(X, X, X)),
                Z = new RegExp('rgba' + K(X, X, X, X)),
                J = new RegExp('hsl' + K(X, z, z)),
                Y = new RegExp('hsla' + K(X, z, z, X)),
                tt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                et = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                nt = /^#([0-9a-fA-F]{6})$/,
                rt = /^#([0-9a-fA-F]{8})$/;
            function it(t, e, n) {
                return (
                    n < 0 && (n += 1),
                    n > 1 && (n -= 1),
                    n < 1 / 6 ? t + 6 * (e - t) * n : n < 0.5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
                );
            }
            function ot(t, e, n) {
                const r = n < 0.5 ? n * (1 + e) : n + e - n * e,
                    i = 2 * n - r,
                    o = it(i, r, t + 1 / 3),
                    a = it(i, r, t),
                    s = it(i, r, t - 1 / 3);
                return (Math.round(255 * o) << 24) | (Math.round(255 * a) << 16) | (Math.round(255 * s) << 8);
            }
            function at(t) {
                const e = parseInt(t, 10);
                return e < 0 ? 0 : e > 255 ? 255 : e;
            }
            function st(t) {
                return (((parseFloat(t) % 360) + 360) % 360) / 360;
            }
            function ut(t) {
                const e = parseFloat(t);
                return e < 0 ? 0 : e > 1 ? 255 : Math.round(255 * e);
            }
            function ct(t) {
                const e = parseFloat(t);
                return e < 0 ? 0 : e > 100 ? 1 : e / 100;
            }
            function lt(t) {
                let e = (function (t) {
                    let e;
                    return 'number' == typeof t
                        ? t >>> 0 === t && t >= 0 && t <= 4294967295
                            ? t
                            : null
                        : (e = nt.exec(t))
                          ? parseInt(e[1] + 'ff', 16) >>> 0
                          : B && void 0 !== B[t]
                            ? B[t]
                            : (e = G.exec(t))
                              ? ((at(e[1]) << 24) | (at(e[2]) << 16) | (at(e[3]) << 8) | 255) >>> 0
                              : (e = Z.exec(t))
                                ? ((at(e[1]) << 24) | (at(e[2]) << 16) | (at(e[3]) << 8) | ut(e[4])) >>> 0
                                : (e = tt.exec(t))
                                  ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + 'ff', 16) >>> 0
                                  : (e = rt.exec(t))
                                    ? parseInt(e[1], 16) >>> 0
                                    : (e = et.exec(t))
                                      ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + e[4] + e[4], 16) >>> 0
                                      : (e = J.exec(t))
                                        ? (255 | ot(st(e[1]), ct(e[2]), ct(e[3]))) >>> 0
                                        : (e = Y.exec(t))
                                          ? (ot(st(e[1]), ct(e[2]), ct(e[3])) | ut(e[4])) >>> 0
                                          : null;
                })(t);
                return null === e
                    ? t
                    : ((e = e || 0),
                      `rgba(${(4278190080 & e) >>> 24}, ${(16711680 & e) >>> 16}, ${(65280 & e) >>> 8}, ${(255 & e) / 255})`);
            }
            const dt = (t, e, n) => {
                if (x.fun(t)) return t;
                if (x.arr(t)) return dt({ range: t, output: e, extrapolate: n });
                if (x.str(t.output[0])) return A(t);
                const r = t,
                    i = r.output,
                    o = r.range || [0, 1],
                    a = r.extrapolateLeft || r.extrapolate || 'extend',
                    s = r.extrapolateRight || r.extrapolate || 'extend',
                    u = r.easing || ((t) => t);
                return (t) => {
                    const e = (function (t, e) {
                        for (var n = 1; n < e.length - 1 && !(e[n] >= t); ++n);
                        return n - 1;
                    })(t, o);
                    return (function (t, e, n, r, i, o, a, s, u) {
                        let c = u ? u(t) : t;
                        if (c < e) {
                            if ('identity' === a) return c;
                            'clamp' === a && (c = e);
                        }
                        if (c > n) {
                            if ('identity' === s) return c;
                            'clamp' === s && (c = n);
                        }
                        return r === i
                            ? r
                            : e === n
                              ? t <= e
                                  ? r
                                  : i
                              : (e === -1 / 0 ? (c = -c) : n === 1 / 0 ? (c -= e) : (c = (c - e) / (n - e)),
                                (c = o(c)),
                                r === -1 / 0 ? (c = -c) : i === 1 / 0 ? (c += r) : (c = c * (i - r) + r),
                                c);
                    })(t, o[e], o[e + 1], i[e], i[e + 1], u, a, s, r.map);
                };
            };
            function ht() {
                return (
                    (ht =
                        Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                            }
                            return t;
                        }),
                    ht.apply(this, arguments)
                );
            }
            const ft = Symbol.for('FluidValue.get'),
                pt = Symbol.for('FluidValue.observers'),
                vt = (t) => Boolean(t && t[ft]),
                yt = (t) => (t && t[ft] ? t[ft]() : t),
                gt = (t) => t[pt] || null;
            function mt(t, e) {
                let n = t[pt];
                n &&
                    n.forEach((t) => {
                        !(function (t, e) {
                            t.eventObserved ? t.eventObserved(e) : t(e);
                        })(t, e);
                    });
            }
            class bt {
                constructor(t) {
                    if (((this[ft] = void 0), (this[pt] = void 0), !t && !(t = this.get)))
                        throw Error('Unknown getter');
                    _t(this, t);
                }
            }
            const _t = (t, e) => Ot(t, ft, e);
            function wt(t, e) {
                if (t[ft]) {
                    let n = t[pt];
                    (n || Ot(t, pt, (n = new Set())),
                        n.has(e) || (n.add(e), t.observerAdded && t.observerAdded(n.size, e)));
                }
                return e;
            }
            function St(t, e) {
                let n = t[pt];
                if (n && n.has(e)) {
                    const r = n.size - 1;
                    (r ? n.delete(e) : (t[pt] = null), t.observerRemoved && t.observerRemoved(r, e));
                }
            }
            const Ot = (t, e, n) => Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 }),
                xt = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                Wt = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
                Rt = new RegExp(`(${xt.source})(%|[a-z]+)`, 'i');
            let Et;
            const jt = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
                Ut = (t, e, n, r, i) => `rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
                Tt = (t) => {
                    Et || (Et = B ? new RegExp(`(${Object.keys(B).join('|')})(?!\\w)`, 'g') : /^\b$/);
                    const e = t.output.map((t) => yt(t).replace(Wt, lt).replace(Et, lt)),
                        n = e.map((t) => t.match(xt).map(Number)),
                        r = n[0]
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
                            !Rt.test(e[0]) && (null == (n = e.find((t) => Rt.test(t))) ? void 0 : n.replace(xt, ''));
                        let o = 0;
                        return e[0].replace(xt, () => `${r[o++](t)}${i || ''}`).replace(jt, Ut);
                    };
                },
                At = 'react-spring: ',
                Pt = (t) => {
                    const e = t;
                    let n = !1;
                    if ('function' != typeof e) throw new TypeError(`${At}once requires a function parameter`);
                    return (...t) => {
                        n || (e(...t), (n = !0));
                    };
                },
                Bt = Pt(console.warn);
            function Vt() {
                Bt(`${At}The "interpolate" function is deprecated in v9 (use "to" instead)`);
            }
            const Mt = Pt(console.warn);
            function kt() {
                Mt(
                    `${At}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
                );
            }
            function Ft(t) {
                return x.str(t) && ('#' == t[0] || /\d/.test(t) || t in (B || {}));
            }
            const Ct = (t) => (0, w.useEffect)(t, Nt),
                Nt = [];
            function Ht() {
                const t = (0, w.useState)()[1],
                    e = (0, w.useState)(Dt)[0];
                return (
                    Ct(e.unmount),
                    () => {
                        e.current && t({});
                    }
                );
            }
            function Dt() {
                const t = {
                    current: !0,
                    unmount: () => () => {
                        t.current = !1;
                    },
                };
                return t;
            }
            function It(t, e) {
                const n = (0, w.useState)(() => ({ inputs: e, result: t() }))[0],
                    r = (0, w.useRef)(),
                    i = r.current;
                let o = i;
                return (
                    o
                        ? Boolean(
                              e &&
                                  o.inputs &&
                                  (function (t, e) {
                                      if (t.length !== e.length) return !1;
                                      for (let n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
                                      return !0;
                                  })(e, o.inputs),
                          ) || (o = { inputs: e, result: t() })
                        : (o = n),
                    (0, w.useEffect)(() => {
                        ((r.current = o), i == n && (n.inputs = n.result = void 0));
                    }, [o]),
                    o.result
                );
            }
            function Lt(t) {
                const e = (0, w.useRef)();
                return (
                    (0, w.useEffect)(() => {
                        e.current = t;
                    }),
                    e.current
                );
            }
            const $t =
                'undefined' != typeof window && window.document && window.document.createElement
                    ? w.useLayoutEffect
                    : w.useEffect;
        },
        7006: (t, e, n) => {
            'use strict';
            n.d(e, { animated: () => O, useSpring: () => r.useSpring });
            var r = n(9738),
                i = n(1533),
                o = n(2810),
                a = n(1686);
            function s(t, e) {
                if (null == t) return {};
                var n,
                    r,
                    i = {},
                    o = Object.keys(t);
                for (r = 0; r < o.length; r++) ((n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]));
                return i;
            }
            const u = ['style', 'children', 'scrollTop', 'scrollLeft'],
                c = /^--/;
            function l(t, e) {
                return null == e || 'boolean' == typeof e || '' === e
                    ? ''
                    : 'number' != typeof e || 0 === e || c.test(t) || (h.hasOwnProperty(t) && h[t])
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
            const f = ['Webkit', 'Ms', 'Moz', 'O'];
            h = Object.keys(h).reduce(
                (t, e) => (
                    f.forEach((n) => (t[((t, e) => t + e.charAt(0).toUpperCase() + e.substring(1))(n, e)] = t[e])),
                    t
                ),
                h,
            );
            const p = ['x', 'y', 'z'],
                v = /^(matrix|translate|scale|rotate|skew)/,
                y = /^(translate)/,
                g = /^(rotate|skew)/,
                m = (t, e) => (o.is.num(t) && 0 !== t ? t + e : t),
                b = (t, e) => (o.is.arr(t) ? t.every((t) => b(t, e)) : o.is.num(t) ? t === e : parseFloat(t) === e);
            class _ extends a.rS {
                constructor(t) {
                    let e = t.x,
                        n = t.y,
                        r = t.z,
                        i = s(t, p);
                    const a = [],
                        u = [];
                    ((e || n || r) &&
                        (a.push([e || 0, n || 0, r || 0]),
                        u.push((t) => [`translate3d(${t.map((t) => m(t, 'px')).join(',')})`, b(t, 0)])),
                        (0, o.rU)(i, (t, e) => {
                            if ('transform' === e) (a.push([t || '']), u.push((t) => [t, '' === t]));
                            else if (v.test(e)) {
                                if ((delete i[e], o.is.und(t))) return;
                                const n = y.test(e) ? 'px' : g.test(e) ? 'deg' : '';
                                (a.push((0, o.qo)(t)),
                                    u.push(
                                        'rotate3d' === e
                                            ? ([t, e, r, i]) => [`rotate3d(${t},${e},${r},${m(i, n)})`, b(i, 0)]
                                            : (t) => [
                                                  `${e}(${t.map((t) => m(t, n)).join(',')})`,
                                                  b(t, e.startsWith('scale') ? 1 : 0),
                                              ],
                                    ));
                            }
                        }),
                        a.length && (i.transform = new w(a, u)),
                        super(i));
                }
            }
            class w extends o.B0 {
                constructor(t, e) {
                    (super(), (this._value = null), (this.inputs = t), (this.transforms = e));
                }
                get() {
                    return this._value || (this._value = this._get());
                }
                _get() {
                    let t = '',
                        e = !0;
                    return (
                        (0, o.S6)(this.inputs, (n, r) => {
                            const i = (0, o.je)(n[0]),
                                a = this.transforms[r](o.is.arr(i) ? i : n.map(o.je)),
                                s = a[0],
                                u = a[1];
                            ((t += ' ' + s), (e = e && u));
                        }),
                        e ? 'none' : t
                    );
                }
                observerAdded(t) {
                    1 == t && (0, o.S6)(this.inputs, (t) => (0, o.S6)(t, (t) => (0, o.j$)(t) && (0, o.UI)(t, this)));
                }
                observerRemoved(t) {
                    0 == t && (0, o.S6)(this.inputs, (t) => (0, o.S6)(t, (t) => (0, o.j$)(t) && (0, o.iL)(t, this)));
                }
                eventObserved(t) {
                    ('change' == t.type && (this._value = null), (0, o.k0)(this, t));
                }
            }
            const S = ['scrollTop', 'scrollLeft'];
            r.Globals.assign({
                batchedUpdates: i.unstable_batchedUpdates,
                createStringInterpolator: o.qS,
                colors: o.O9,
            });
            const O = (0, a.Ld)(
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
                            r = e,
                            i = r.style,
                            o = r.children,
                            a = r.scrollTop,
                            h = r.scrollLeft,
                            f = s(r, u),
                            p = Object.values(f),
                            v = Object.keys(f).map((e) =>
                                n || t.hasAttribute(e)
                                    ? e
                                    : d[e] || (d[e] = e.replace(/([A-Z])/g, (t) => '-' + t.toLowerCase())),
                            );
                        void 0 !== o && (t.textContent = o);
                        for (let e in i)
                            if (i.hasOwnProperty(e)) {
                                const n = l(e, i[e]);
                                c.test(e) ? t.style.setProperty(e, n) : (t.style[e] = n);
                            }
                        (v.forEach((e, n) => {
                            t.setAttribute(e, p[n]);
                        }),
                            void 0 !== a && (t.scrollTop = a),
                            void 0 !== h && (t.scrollLeft = h));
                    },
                    createAnimatedStyle: (t) => new _(t),
                    getComponentProps: (t) => s(t, S),
                },
            ).animated;
        },
        8045: (t, e, n) => {
            'use strict';
            n.d(e, { Z: () => x });
            var r = (function () {
                    if ('undefined' != typeof Map) return Map;
                    function t(t, e) {
                        var n = -1;
                        return (
                            t.some(function (t, r) {
                                return t[0] === e && ((n = r), !0);
                            }),
                            n
                        );
                    }
                    return (function () {
                        function e() {
                            this.__entries__ = [];
                        }
                        return (
                            Object.defineProperty(e.prototype, 'size', {
                                get: function () {
                                    return this.__entries__.length;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            (e.prototype.get = function (e) {
                                var n = t(this.__entries__, e),
                                    r = this.__entries__[n];
                                return r && r[1];
                            }),
                            (e.prototype.set = function (e, n) {
                                var r = t(this.__entries__, e);
                                ~r ? (this.__entries__[r][1] = n) : this.__entries__.push([e, n]);
                            }),
                            (e.prototype.delete = function (e) {
                                var n = this.__entries__,
                                    r = t(n, e);
                                ~r && n.splice(r, 1);
                            }),
                            (e.prototype.has = function (e) {
                                return !!~t(this.__entries__, e);
                            }),
                            (e.prototype.clear = function () {
                                this.__entries__.splice(0);
                            }),
                            (e.prototype.forEach = function (t, e) {
                                void 0 === e && (e = null);
                                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                                    var i = r[n];
                                    t.call(e, i[1], i[0]);
                                }
                            }),
                            e
                        );
                    })();
                })(),
                i = 'undefined' != typeof window && 'undefined' != typeof document && window.document === document,
                o =
                    void 0 !== n.g && n.g.Math === Math
                        ? n.g
                        : 'undefined' != typeof self && self.Math === Math
                          ? self
                          : 'undefined' != typeof window && window.Math === Math
                            ? window
                            : Function('return this')(),
                a =
                    'function' == typeof requestAnimationFrame
                        ? requestAnimationFrame.bind(o)
                        : function (t) {
                              return setTimeout(function () {
                                  return t(Date.now());
                              }, 1e3 / 60);
                          },
                s = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
                u = 'undefined' != typeof MutationObserver,
                c = (function () {
                    function t() {
                        ((this.connected_ = !1),
                            (this.mutationEventsAdded_ = !1),
                            (this.mutationsObserver_ = null),
                            (this.observers_ = []),
                            (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                            (this.refresh = (function (t, e) {
                                var n = !1,
                                    r = !1,
                                    i = 0;
                                function o() {
                                    (n && ((n = !1), t()), r && u());
                                }
                                function s() {
                                    a(o);
                                }
                                function u() {
                                    var t = Date.now();
                                    if (n) {
                                        if (t - i < 2) return;
                                        r = !0;
                                    } else ((n = !0), (r = !1), setTimeout(s, 20));
                                    i = t;
                                }
                                return u;
                            })(this.refresh.bind(this))));
                    }
                    return (
                        (t.prototype.addObserver = function (t) {
                            (~this.observers_.indexOf(t) || this.observers_.push(t),
                                this.connected_ || this.connect_());
                        }),
                        (t.prototype.removeObserver = function (t) {
                            var e = this.observers_,
                                n = e.indexOf(t);
                            (~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_());
                        }),
                        (t.prototype.refresh = function () {
                            this.updateObservers_() && this.refresh();
                        }),
                        (t.prototype.updateObservers_ = function () {
                            var t = this.observers_.filter(function (t) {
                                return (t.gatherActive(), t.hasActive());
                            });
                            return (
                                t.forEach(function (t) {
                                    return t.broadcastActive();
                                }),
                                t.length > 0
                            );
                        }),
                        (t.prototype.connect_ = function () {
                            i &&
                                !this.connected_ &&
                                (document.addEventListener('transitionend', this.onTransitionEnd_),
                                window.addEventListener('resize', this.refresh),
                                u
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
                        (t.prototype.disconnect_ = function () {
                            i &&
                                this.connected_ &&
                                (document.removeEventListener('transitionend', this.onTransitionEnd_),
                                window.removeEventListener('resize', this.refresh),
                                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                                this.mutationEventsAdded_ &&
                                    document.removeEventListener('DOMSubtreeModified', this.refresh),
                                (this.mutationsObserver_ = null),
                                (this.mutationEventsAdded_ = !1),
                                (this.connected_ = !1));
                        }),
                        (t.prototype.onTransitionEnd_ = function (t) {
                            var e = t.propertyName,
                                n = void 0 === e ? '' : e;
                            s.some(function (t) {
                                return !!~n.indexOf(t);
                            }) && this.refresh();
                        }),
                        (t.getInstance = function () {
                            return (this.instance_ || (this.instance_ = new t()), this.instance_);
                        }),
                        (t.instance_ = null),
                        t
                    );
                })(),
                l = function (t, e) {
                    for (var n = 0, r = Object.keys(e); n < r.length; n++) {
                        var i = r[n];
                        Object.defineProperty(t, i, { value: e[i], enumerable: !1, writable: !1, configurable: !0 });
                    }
                    return t;
                },
                d = function (t) {
                    return (t && t.ownerDocument && t.ownerDocument.defaultView) || o;
                },
                h = g(0, 0, 0, 0);
            function f(t) {
                return parseFloat(t) || 0;
            }
            function p(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                return e.reduce(function (e, n) {
                    return e + f(t['border-' + n + '-width']);
                }, 0);
            }
            var v =
                'undefined' != typeof SVGGraphicsElement
                    ? function (t) {
                          return t instanceof d(t).SVGGraphicsElement;
                      }
                    : function (t) {
                          return t instanceof d(t).SVGElement && 'function' == typeof t.getBBox;
                      };
            function y(t) {
                return i
                    ? v(t)
                        ? (function (t) {
                              var e = t.getBBox();
                              return g(0, 0, e.width, e.height);
                          })(t)
                        : (function (t) {
                              var e = t.offsetWidth,
                                  n = t.offsetHeight;
                              if (!e && !n) return h;
                              var r = d(t).getComputedStyle(t),
                                  i = (function (t) {
                                      for (
                                          var e = {}, n = 0, r = ['top', 'right', 'bottom', 'left'];
                                          n < r.length;
                                          n++
                                      ) {
                                          var i = r[n],
                                              o = t['padding-' + i];
                                          e[i] = f(o);
                                      }
                                      return e;
                                  })(r),
                                  o = i.left + i.right,
                                  a = i.top + i.bottom,
                                  s = f(r.width),
                                  u = f(r.height);
                              if (
                                  ('border-box' === r.boxSizing &&
                                      (Math.round(s + o) !== e && (s -= p(r, 'left', 'right') + o),
                                      Math.round(u + a) !== n && (u -= p(r, 'top', 'bottom') + a)),
                                  !(function (t) {
                                      return t === d(t).document.documentElement;
                                  })(t))
                              ) {
                                  var c = Math.round(s + o) - e,
                                      l = Math.round(u + a) - n;
                                  (1 !== Math.abs(c) && (s -= c), 1 !== Math.abs(l) && (u -= l));
                              }
                              return g(i.left, i.top, s, u);
                          })(t)
                    : h;
            }
            function g(t, e, n, r) {
                return { x: t, y: e, width: n, height: r };
            }
            var m = (function () {
                    function t(t) {
                        ((this.broadcastWidth = 0),
                            (this.broadcastHeight = 0),
                            (this.contentRect_ = g(0, 0, 0, 0)),
                            (this.target = t));
                    }
                    return (
                        (t.prototype.isActive = function () {
                            var t = y(this.target);
                            return (
                                (this.contentRect_ = t),
                                t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
                            );
                        }),
                        (t.prototype.broadcastRect = function () {
                            var t = this.contentRect_;
                            return ((this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t);
                        }),
                        t
                    );
                })(),
                b = function (t, e) {
                    var n,
                        r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        c =
                            ((r = (n = e).x),
                            (i = n.y),
                            (o = n.width),
                            (a = n.height),
                            (s = 'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
                            (u = Object.create(s.prototype)),
                            l(u, { x: r, y: i, width: o, height: a, top: i, right: r + o, bottom: a + i, left: r }),
                            u);
                    l(this, { target: t, contentRect: c });
                },
                _ = (function () {
                    function t(t, e, n) {
                        if (((this.activeObservations_ = []), (this.observations_ = new r()), 'function' != typeof t))
                            throw new TypeError('The callback provided as parameter 1 is not a function.');
                        ((this.callback_ = t), (this.controller_ = e), (this.callbackCtx_ = n));
                    }
                    return (
                        (t.prototype.observe = function (t) {
                            if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                            if ('undefined' != typeof Element && Element instanceof Object) {
                                if (!(t instanceof d(t).Element))
                                    throw new TypeError('parameter 1 is not of type "Element".');
                                var e = this.observations_;
                                e.has(t) ||
                                    (e.set(t, new m(t)),
                                    this.controller_.addObserver(this),
                                    this.controller_.refresh());
                            }
                        }),
                        (t.prototype.unobserve = function (t) {
                            if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                            if ('undefined' != typeof Element && Element instanceof Object) {
                                if (!(t instanceof d(t).Element))
                                    throw new TypeError('parameter 1 is not of type "Element".');
                                var e = this.observations_;
                                e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this));
                            }
                        }),
                        (t.prototype.disconnect = function () {
                            (this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this));
                        }),
                        (t.prototype.gatherActive = function () {
                            var t = this;
                            (this.clearActive(),
                                this.observations_.forEach(function (e) {
                                    e.isActive() && t.activeObservations_.push(e);
                                }));
                        }),
                        (t.prototype.broadcastActive = function () {
                            if (this.hasActive()) {
                                var t = this.callbackCtx_,
                                    e = this.activeObservations_.map(function (t) {
                                        return new b(t.target, t.broadcastRect());
                                    });
                                (this.callback_.call(t, e, t), this.clearActive());
                            }
                        }),
                        (t.prototype.clearActive = function () {
                            this.activeObservations_.splice(0);
                        }),
                        (t.prototype.hasActive = function () {
                            return this.activeObservations_.length > 0;
                        }),
                        t
                    );
                })(),
                w = 'undefined' != typeof WeakMap ? new WeakMap() : new r(),
                S = function t(e) {
                    if (!(this instanceof t)) throw new TypeError('Cannot call a class as a function.');
                    if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                    var n = c.getInstance(),
                        r = new _(e, n, this);
                    w.set(this, r);
                };
            ['observe', 'unobserve', 'disconnect'].forEach(function (t) {
                S.prototype[t] = function () {
                    var e;
                    return (e = w.get(this))[t].apply(e, arguments);
                };
            });
            var O = void 0 !== o.ResizeObserver ? o.ResizeObserver : S;
            const x = 'lobby/feature/FunRandomModeSubSelector/FunRandomModeSubSelector' == n.j ? O : null;
        },
        6795: (t, e, n) => {
            'use strict';
            var r;
            (n.d(e, { B: () => r }),
                (function (t) {
                    ((t[(t.Effect = 1)] = 'Effect'), (t[(t.LayoutEffect = 2)] = 'LayoutEffect'));
                })(r || (r = {})));
        },
        4921: (t, e, n) => {
            'use strict';
            n.d(e, { Z: () => i });
            var r = n(7363);
            function i(t) {
                var e = r.useRef();
                return (e.current || (e.current = { v: t() }), e.current.v);
            }
        },
        367: (t, e, n) => {
            'use strict';
            (n.d(e, { k: () => c }), n(7363));
            var r = n(3407);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var i = n(8869);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var o = n(5516);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var a = n(4921);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var s = n(2519);
            var u = function () {
                return (
                    (u =
                        Object.assign ||
                        function (t) {
                            for (var e, n = 1, r = arguments.length; n < r; n++)
                                for (var i in (e = arguments[n]))
                                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                            return t;
                        }),
                    u.apply(this, arguments)
                );
            };
            function c(t, e, n) {
                void 0 === e && (e = {});
                var c = (0, a.Z)(function () {
                        return 'function' == typeof t ? t() : t;
                    }),
                    l = e.context,
                    d = e.guards,
                    h = e.actions,
                    f = e.activities,
                    p = e.services,
                    v = e.delays,
                    y = e.state,
                    g = (function (t, e) {
                        var n = {};
                        for (var r in t)
                            Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                        if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
                                e.indexOf(r[i]) < 0 &&
                                    Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                                    (n[r[i]] = t[r[i]]);
                        }
                        return n;
                    })(e, ['context', 'guards', 'actions', 'activities', 'services', 'delays', 'state']),
                    m = (0, a.Z)(function () {
                        var t = { context: l, guards: d, actions: h, activities: f, services: p, delays: v },
                            e = c.withConfig(t, function () {
                                return u(u({}, c.context), l);
                            });
                        return (0, i.kJ)(e, u({ deferEvents: !0 }, g));
                    });
                return (
                    (0, r.Z)(
                        function () {
                            var t;
                            return (
                                n &&
                                    (t = m.subscribe(
                                        (function (t, e, n) {
                                            if ('object' == typeof t) return t;
                                            var r = function () {};
                                            return { next: t, error: r, complete: r };
                                        })(n),
                                    )),
                                function () {
                                    null == t || t.unsubscribe();
                                }
                            );
                        },
                        [n],
                    ),
                    (0, r.Z)(function () {
                        return (
                            m.start(y ? o.ZM.create(y) : void 0),
                            function () {
                                m.stop();
                            }
                        );
                    }, []),
                    (0, r.Z)(
                        function () {
                            (Object.assign(m.machine.options.actions, h),
                                Object.assign(m.machine.options.guards, d),
                                Object.assign(m.machine.options.activities, f),
                                Object.assign(m.machine.options.services, p),
                                Object.assign(m.machine.options.delays, v));
                        },
                        [h, d, f, p, v],
                    ),
                    (0, s.W)(m),
                    m
                );
            }
        },
        9459: (t, e, n) => {
            'use strict';
            n.d(e, { eO: () => a });
            var r = n(7363);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var i = n(5516);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var o = n(367);
            function a(t, e) {
                void 0 === e && (e = {});
                var n = (0, r.useCallback)(function (t) {
                        var e = void 0 === t.changed && Object.keys(t.children).length;
                        (t.changed || e) && c(t);
                    }, []),
                    a = (0, o.k)(t, e, n),
                    s = (function (t, e) {
                        var n = 'function' == typeof Symbol && t[Symbol.iterator];
                        if (!n) return t;
                        var r,
                            i,
                            o = n.call(t),
                            a = [];
                        try {
                            for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; ) a.push(r.value);
                        } catch (t) {
                            i = { error: t };
                        } finally {
                            try {
                                r && !r.done && (n = o.return) && n.call(o);
                            } finally {
                                if (i) throw i.error;
                            }
                        }
                        return a;
                    })(
                        (0, r.useState)(function () {
                            var t = a.machine.initialState;
                            return e.state ? i.ZM.create(e.state) : t;
                        }),
                        2,
                    ),
                    u = s[0],
                    c = s[1];
                return [u, a.send, a];
            }
        },
        2519: (t, e, n) => {
            'use strict';
            n.d(e, { W: () => l });
            var r = n(7363),
                i = n(3407);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var o = n(6795);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var a = n(2518);
            var s = function (t, e) {
                    var n = 'function' == typeof Symbol && t[Symbol.iterator];
                    if (!n) return t;
                    var r,
                        i,
                        o = n.call(t),
                        a = [];
                    try {
                        for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; ) a.push(r.value);
                    } catch (t) {
                        i = { error: t };
                    } finally {
                        try {
                            r && !r.done && (n = o.return) && n.call(o);
                        } finally {
                            if (i) throw i.error;
                        }
                    }
                    return a;
                },
                u = function (t, e, n) {
                    if (n || 2 === arguments.length)
                        for (var r, i = 0, o = e.length; i < o; i++)
                            (!r && i in e) || (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
                    return t.concat(r || Array.prototype.slice.call(e));
                };
            function c(t, e) {
                (0, t.exec)(e.context, e._event.data, { action: t, state: e, _event: e._event })();
            }
            function l(t) {
                var e = (0, r.useRef)([]),
                    n = (0, r.useRef)([]);
                ((0, i.Z)(function () {
                    var r = t.subscribe(function (t) {
                        var r, i;
                        if (t.actions.length) {
                            var c = t.actions.filter(function (t) {
                                    return 'function' == typeof t.exec && '__effect' in t.exec;
                                }),
                                l = s(
                                    (0, a.u)(c, function (t) {
                                        return t.exec.__effect === o.B.Effect;
                                    }),
                                    2,
                                ),
                                d = l[0],
                                h = l[1];
                            ((r = e.current).push.apply(
                                r,
                                u(
                                    [],
                                    s(
                                        d.map(function (e) {
                                            return [e, t];
                                        }),
                                    ),
                                    !1,
                                ),
                            ),
                                (i = n.current).push.apply(
                                    i,
                                    u(
                                        [],
                                        s(
                                            h.map(function (e) {
                                                return [e, t];
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
                    (0, i.Z)(function () {
                        for (; n.current.length; ) {
                            var t = s(n.current.shift(), 2);
                            c(t[0], t[1]);
                        }
                    }),
                    (0, r.useEffect)(function () {
                        for (; e.current.length; ) {
                            var t = s(e.current.shift(), 2);
                            c(t[0], t[1]);
                        }
                    }));
            }
        },
        2518: (t, e, n) => {
            'use strict';
            n.d(e, { u: () => r });
            function r(t, e) {
                var n,
                    r,
                    i = (function (t, e) {
                        var n = 'function' == typeof Symbol && t[Symbol.iterator];
                        if (!n) return t;
                        var r,
                            i,
                            o = n.call(t),
                            a = [];
                        try {
                            for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; ) a.push(r.value);
                        } catch (t) {
                            i = { error: t };
                        } finally {
                            try {
                                r && !r.done && (n = o.return) && n.call(o);
                            } finally {
                                if (i) throw i.error;
                            }
                        }
                        return a;
                    })([[], []], 2),
                    o = i[0],
                    a = i[1];
                try {
                    for (
                        var s = (function (t) {
                                var e = 'function' == typeof Symbol && Symbol.iterator,
                                    n = e && t[e],
                                    r = 0;
                                if (n) return n.call(t);
                                if (t && 'number' == typeof t.length)
                                    return {
                                        next: function () {
                                            return (
                                                t && r >= t.length && (t = void 0),
                                                { value: t && t[r++], done: !t }
                                            );
                                        },
                                    };
                                throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
                            })(t),
                            u = s.next();
                        !u.done;
                        u = s.next()
                    ) {
                        var c = u.value;
                        e(c) ? o.push(c) : a.push(c);
                    }
                } catch (t) {
                    n = { error: t };
                } finally {
                    try {
                        u && !u.done && (r = s.return) && r.call(s);
                    } finally {
                        if (n) throw n.error;
                    }
                }
                return [o, a];
            }
        },
        9769: (t, e, n) => {
            'use strict';
            n.d(e, { A: () => r });
            const r =
                /^lobby\/feature\/FunRandom(EntryPointView\/FunRandomEntryPoint|RewardsView\/FunRandomRewards)View$/.test(
                    n.j,
                )
                    ? null
                    : [
                          0, 128, 256, 384, 592, 688, 768, 880, 1024, 1280, 1328, 1424, 1536, 1792, 1872, 1920, 1984,
                          2048, 2112, 2144, 2208, 2304, 2432, 2560, 2688, 2816, 2944, 3072, 3200, 3328, 3456, 3584,
                          3712, 3840, 4096, 4256, 4352, 4608, 4992, 5024, 5120, 5760, 5792, 5888, 5920, 5952, 5984,
                          6016, 6144, 6320, 6400, 6480, 6528, 6624, 6656, 6688, 6832, 6912, 7040, 7104, 7168, 7248,
                          7296, 7312, 7360, 7376, 7424, 7552, 7616, 7680, 7936, 8192, 8304, 8352, 8400, 8448, 8528,
                          8592, 8704, 8960, 9216, 9280, 9312, 9472, 9600, 9632, 9728, 9984, 10176, 10224, 10240, 10496,
                          10624, 10752, 11008, 11264, 11360, 11392, 11520, 11568, 11648, 11744, 11776, 11904, 12032,
                          12272, 12288, 12352, 12448, 12544, 12592, 12688, 12704, 12736, 12784, 12800, 13056, 13312,
                          19904, 19968, 40960, 42128, 42192, 42240, 42560, 42656, 42752, 42784, 43008, 43056, 43072,
                          43136, 43232, 43264, 43312, 43360, 43392, 43488, 43520, 43616, 43648, 43744, 43776, 43824,
                          43888, 43968, 44032, 55216, 55296, 56192, 56320, 57344, 63744, 64256, 64336, 65024, 65040,
                          65056, 65072, 65104, 65136, 65280, 65520, 65536, 65664, 65792, 65856, 65936, 66e3, 66176,
                          66208, 66272, 66304, 66352, 66384, 66432, 66464, 66560, 66640, 66688, 66736, 66816, 66864,
                          67072, 67584, 67648, 67680, 67712, 67808, 67840, 67872, 67968, 68e3, 68096, 68192, 68224,
                          68288, 68352, 68416, 68448, 68480, 68608, 68736, 68864, 69216, 69248, 69376, 69424, 69552,
                          69600, 69632, 69760, 69840, 69888, 69968, 70016, 70112, 70144, 70272, 70320, 70400, 70656,
                          70784, 71040, 71168, 71264, 71296, 71424, 71680, 71840, 71936, 72096, 72192, 72272, 72384,
                          72704, 72816, 72960, 73056, 73440, 73648, 73664, 73728, 74752, 74880, 77824, 78896, 82944,
                          92160, 92736, 92880, 92928, 93760, 93952, 94176, 94208, 100352, 101120, 101632, 110592,
                          110848, 110896, 110960, 113664, 113824, 118784, 119040, 119296, 119520, 119552, 119648,
                          119808, 120832, 122880, 123136, 123584, 124928, 125184, 126064, 126208, 126464, 126976,
                          127024, 127136, 127232, 127488, 127744, 128512, 128592, 128640, 128768, 128896, 129024,
                          129280, 129536, 129648, 129792, 131072, 173824, 177984, 178208, 183984, 194560, 196608,
                          917504, 917760, 983040, 1048576,
                      ];
        },
        6906: (t, e, n) => {
            'use strict';
            n.d(e, { X: () => r });
            const r = (t) => new DOMParser().parseFromString(t, 'text/html');
        },
        1281: (t, e, n) => {
            'use strict';
            if (
                (n.d(e, { D4: () => g }),
                !/^lobby\/feature\/FunRandom(EntryPointView\/FunRandomEntryPoint|RewardsView\/FunRandomRewards)View$/.test(
                    n.j,
                ))
            )
                var r = n(9769);
            const i = {
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
            };
            if (
                !/^lobby\/feature\/FunRandom(EntryPointView\/FunRandomEntryPoint|RewardsView\/FunRandomRewards)View$/.test(
                    n.j,
                )
            )
                var o = n(6906);
            function a(t, e) {
                var n = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                    Array.isArray(t) ||
                    (n = (function (t, e) {
                        if (t) {
                            if ('string' == typeof t) return s(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return (
                                'Object' === n && t.constructor && (n = t.constructor.name),
                                'Map' === n || 'Set' === n
                                    ? Array.from(t)
                                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                      ? s(t, e)
                                      : void 0
                            );
                        }
                    })(t)) ||
                    (e && t && 'number' == typeof t.length)
                ) {
                    n && (t = n);
                    var r = 0;
                    return function () {
                        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                    };
                }
                throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
            }
            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            const u = console.assert,
                c = {
                    AREA: 2,
                    BASE: 2,
                    BASEFONT: 2,
                    DATALIST: 2,
                    HEAD: 2,
                    LINK: 2,
                    META: 2,
                    NOEMBED: 2,
                    NOFRAMES: 2,
                    PARAM: 2,
                    RP: 2,
                    SCRIPT: 2,
                    STYLE: 2,
                    TEMPLATE: 2,
                    TITLE: 2,
                    NOSCRIPT: 2,
                    HR: 3,
                    LISTING: 2,
                    PLAINTEXT: 2,
                    PRE: 2,
                    XMP: 2,
                    BR: 3,
                    RT: 2,
                    INPUT: 2,
                    SELECT: 2,
                    BUTTON: 2,
                    TEXTAREA: 2,
                    ABBR: 2,
                    CODE: 2,
                    IFRAME: 2,
                    TIME: 2,
                    VAR: 2,
                },
                l = new Set([
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
            class d {
                constructor(t) {
                    ((this.textNodes = []), (this.element = t));
                }
                hasText() {
                    return this.textNodes.length > 0;
                }
            }
            class h {
                constructor(t, e) {
                    ((this.separator = '​'),
                        (this.threshold = v),
                        (this.parser_ = t),
                        void 0 !== e &&
                            (void 0 !== e.className && (this.className = e.className),
                            void 0 !== e.separator && (this.separator = e.separator),
                            void 0 !== e.threshold && (this.threshold = e.threshold)));
                }
                applyToElement(t) {
                    for (var e, n = a(this.getBlocks(t)); !(e = n()).done; ) {
                        const t = e.value;
                        (u(t.hasText()), this.applyToParagraph(t));
                    }
                }
                *getBlocks(t, e) {
                    if ((u(1 === t.nodeType), this.className && t.classList.contains(this.className))) return;
                    const n = (function (t) {
                        const e = t.nodeName,
                            n = c[e];
                        if (void 0 !== n) return n;
                        if ('function' == typeof getComputedStyle) {
                            const e = getComputedStyle(t);
                            switch (e.whiteSpace) {
                                case 'nowrap':
                                case 'pre':
                                    return 2;
                            }
                            const n = e.display;
                            if (n) return 'inline' === n ? 0 : 1;
                        }
                        return l.has(e) ? 1 : 0;
                    })(t);
                    if (2 === n) return;
                    if (3 === n) return (e && e.hasText() && (yield e, (e.textNodes = [])), void u(!t.firstChild));
                    u(1 === n || 0 === n);
                    const r = !e || 1 === n,
                        i = r ? new d(t) : e;
                    u(i);
                    for (var o, s = a(t.childNodes); !(o = s()).done; ) {
                        const t = o.value;
                        switch (t.nodeType) {
                            case 1:
                                for (var h, f = a(this.getBlocks(t, i)); !(h = f()).done; ) {
                                    const t = h.value;
                                    yield t;
                                }
                                break;
                            case 3:
                                i.textNodes.push(t);
                        }
                    }
                    r && i.hasText() && (yield i);
                }
                applyToParagraph(t) {
                    const e = t.textNodes;
                    u(e.length > 0);
                    const n = e.map((t) => t.nodeValue).join('');
                    if (/^\s*$/.test(n)) return;
                    const r = this.parser_.parse(n, this.threshold);
                    if ((u(r.length > 0), u(r.reduce((t, e) => t + e.length, 0) === n.length), r.length <= 1)) return;
                    const i = [];
                    let o = 0;
                    for (var s, c = a(r); !(s = c()).done; ) {
                        const t = s.value;
                        (u(t.length > 0), (o += t.length), i.push(o));
                    }
                    (u(i[0] > 0),
                        u(i[i.length - 1] === n.length),
                        ++i[i.length - 1],
                        u(i.length > 1),
                        this.splitTextNodes(e, i),
                        this.applyBlockStyle(t.element));
                }
                splitTextNodes(t, e) {
                    u(e.length > 0);
                    const n = t.reduce((t, e) => t + (e.nodeValue ? e.nodeValue.length : 0), 0);
                    u(e[e.length - 1] > n);
                    let r = 0,
                        i = e[0];
                    u(i > 0);
                    let o = 0;
                    for (var s, c = a(t); !(s = c()).done; ) {
                        const t = s.value,
                            n = t.nodeValue;
                        if (!n) continue;
                        const a = o + n.length;
                        if (i >= a) {
                            o = a;
                            continue;
                        }
                        const c = [];
                        let l = 0;
                        for (; i < a; ) {
                            const t = i - o;
                            (u(t >= l), c.push(n.substring(l, t)), (l = t), ++r, u(e[r] > i), (i = e[r]));
                        }
                        (u(c.length > 0), l < n.length && c.push(n.substring(l)), this.splitTextNode(t, c), (o = a));
                    }
                    (u(o === n), u(r < e.length), u(e[r] >= n));
                }
                splitTextNode(t, e) {
                    (u(e.length > 1), u(t.nodeValue === e.join('')));
                    const n = this.separator;
                    if ('string' == typeof n) return void (t.nodeValue = e.join(n));
                    const r = t.ownerDocument;
                    let i = [];
                    for (var o, s = a(e); !(o = s()).done; ) {
                        const t = o.value;
                        (t && i.push(r.createTextNode(t)), i.push(null));
                    }
                    (i.pop(), (i = i.map((t) => t || n.cloneNode(!0))), t.replaceWith(...i));
                }
                applyBlockStyle(t) {
                    if (this.className) return void t.classList.add(this.className);
                    const e = t.style;
                    ((e.wordBreak = 'keep-all'), (e.overflowWrap = 'break-word'));
                }
                static defineClassAs(t, e) {
                    const n = t.createElement('style');
                    ((n.textContent = `.${e} { word-break: keep-all; overflow-wrap: break-word; }`),
                        t.head.appendChild(n));
                }
            }
            if (
                !/^lobby\/feature\/FunRandom(EntryPointView\/FunRandomEntryPoint|RewardsView\/FunRandomRewards)View$/.test(
                    n.j,
                )
            )
                var f = n(3759);
            function p(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            const v = 1e3;
            class y {
                constructor(t) {
                    this.model = t;
                }
                static getUnicodeBlockFeature(t) {
                    if (!t || t === f.UI) return f.UI;
                    const e = t.codePointAt(0);
                    return void 0 === e ? f.UI : `${(0, f.ml)(r.A, e)}`.padStart(3, '0');
                }
                static getFeature(t, e, n, r, i, o, a, s, u) {
                    const c = y.getUnicodeBlockFeature(t),
                        l = y.getUnicodeBlockFeature(e),
                        d = y.getUnicodeBlockFeature(n),
                        h = y.getUnicodeBlockFeature(r),
                        p = y.getUnicodeBlockFeature(i),
                        v = y.getUnicodeBlockFeature(o),
                        g = {
                            UP1: a,
                            UP2: s,
                            UP3: u,
                            BP1: a + s,
                            BP2: s + u,
                            UW1: t,
                            UW2: e,
                            UW3: n,
                            UW4: r,
                            UW5: i,
                            UW6: o,
                            BW1: e + n,
                            BW2: n + r,
                            BW3: r + i,
                            TW1: t + e + n,
                            TW2: e + n + r,
                            TW3: n + r + i,
                            TW4: r + i + o,
                            UB1: c,
                            UB2: l,
                            UB3: d,
                            UB4: h,
                            UB5: p,
                            UB6: v,
                            BB1: l + d,
                            BB2: d + h,
                            BB3: h + p,
                            TB1: c + l + d,
                            TB2: l + d + h,
                            TB3: d + h + p,
                            TB4: h + p + v,
                            UQ1: a + c,
                            UQ2: s + l,
                            UQ3: u + d,
                            BQ1: s + l + d,
                            BQ2: s + d + h,
                            BQ3: u + l + d,
                            BQ4: u + d + h,
                            TQ1: s + c + l + d,
                            TQ2: s + l + d + h,
                            TQ3: u + c + l + d,
                            TQ4: u + l + d + h,
                        };
                    return Object.entries(g)
                        .filter((t) => !t[1].includes(f.UI))
                        .map(([t, e]) => `${t}:${e}`);
                }
                static hasChildTextNode(t) {
                    for (
                        var e,
                            n = (function (t, e) {
                                var n = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
                                if (n) return (n = n.call(t)).next.bind(n);
                                if (
                                    Array.isArray(t) ||
                                    (n = (function (t, e) {
                                        if (t) {
                                            if ('string' == typeof t) return p(t, e);
                                            var n = Object.prototype.toString.call(t).slice(8, -1);
                                            return (
                                                'Object' === n && t.constructor && (n = t.constructor.name),
                                                'Map' === n || 'Set' === n
                                                    ? Array.from(t)
                                                    : 'Arguments' === n ||
                                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                                      ? p(t, e)
                                                      : void 0
                                            );
                                        }
                                    })(t)) ||
                                    (e && t && 'number' == typeof t.length)
                                ) {
                                    n && (t = n);
                                    var r = 0;
                                    return function () {
                                        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                                    };
                                }
                                throw new TypeError(
                                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                );
                            })(t.childNodes);
                        !(e = n()).done;

                    )
                        if (3 === e.value.nodeType) return !0;
                    return !1;
                }
                parse(t, e = v) {
                    if ('' === t) return [];
                    let n = 'U',
                        r = 'U',
                        i = 'U';
                    const o = [t[0]];
                    for (let a = 1; a < t.length; a++) {
                        const s = y
                                .getFeature(
                                    t[a - 3] || f.UI,
                                    t[a - 2] || f.UI,
                                    t[a - 1],
                                    t[a],
                                    t[a + 1] || f.UI,
                                    t[a + 2] || f.UI,
                                    n,
                                    r,
                                    i,
                                )
                                .map((t) => this.model.get(t) || 0)
                                .reduce((t, e) => t + e),
                            u = s > 0 ? 'B' : 'O';
                        (s > e && o.push(''), (o[o.length - 1] += t[a]), (n = r), (r = i), (i = u));
                    }
                    return o;
                }
                applyElement(t, e = v) {
                    new h(this, { separator: t.ownerDocument.createElement('wbr'), threshold: e }).applyToElement(t);
                }
                translateHTMLString(t, e = v) {
                    if ('' === t) return t;
                    const n = (0, o.X)(t);
                    if (y.hasChildTextNode(n.body)) {
                        const t = n.createElement('span');
                        (t.append(...n.body.childNodes), n.body.append(t));
                    }
                    return (this.applyElement(n.body.childNodes[0], e), n.body.innerHTML);
                }
            }
            const g = () => new y(new Map(Object.entries(i)));
        },
        3759: (t, e, n) => {
            'use strict';
            n.d(e, { UI: () => i, ml: () => r });
            const r = (t, e) => {
                    const n = Math.floor(t.length / 2);
                    return e === t[n]
                        ? n + 1
                        : e < t[n]
                          ? 1 === t.length
                              ? 0
                              : r(t.slice(0, n), e)
                          : 1 === t.length
                            ? 1
                            : n + r(t.slice(n), e);
                },
                i = '▔';
        },
        6483: (t, e) => {
            var n;
            !(function () {
                'use strict';
                var r = {}.hasOwnProperty;
                function i() {
                    for (var t = [], e = 0; e < arguments.length; e++) {
                        var n = arguments[e];
                        if (n) {
                            var o = typeof n;
                            if ('string' === o || 'number' === o) t.push(n);
                            else if (Array.isArray(n) && n.length) {
                                var a = i.apply(null, n);
                                a && t.push(a);
                            } else if ('object' === o) for (var s in n) r.call(n, s) && n[s] && t.push(s);
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
        4070: (t, e, n) => {
            'use strict';
            function r(t, e) {
                return t.classList
                    ? !!e && t.classList.contains(e)
                    : -1 !== (' ' + (t.className.baseVal || t.className) + ' ').indexOf(' ' + e + ' ');
            }
            n.d(e, { Z: () => r });
        },
        8515: (t, e, n) => {
            'use strict';
            n.d(e, { Pi: () => w });
            var r = n(9174),
                i = n(7363),
                o = n.n(i);
            if (!i.useState) throw new Error('mobx-react-lite requires React with Hooks support');
            if (!r.rC) throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
            var a = n(1533);
            function s(t) {
                return (0, r.Gf)(t);
            }
            var u = 'undefined' == typeof FinalizationRegistry ? void 0 : FinalizationRegistry;
            function c(t) {
                return { reaction: t, mounted: !1, changedBeforeMount: !1, cleanAt: Date.now() + l };
            }
            var l = 1e4,
                d = u
                    ? (function (t) {
                          var e = new Map(),
                              n = 1,
                              r = new t(function (t) {
                                  var n = e.get(t);
                                  n && (n.reaction.dispose(), e.delete(t));
                              });
                          return {
                              addReactionToTrack: function (t, i, o) {
                                  var a = n++;
                                  return (
                                      r.register(o, a, t),
                                      (t.current = c(i)),
                                      (t.current.finalizationRegistryCleanupToken = a),
                                      e.set(a, t.current),
                                      t.current
                                  );
                              },
                              recordReactionAsCommitted: function (t) {
                                  (r.unregister(t),
                                      t.current &&
                                          t.current.finalizationRegistryCleanupToken &&
                                          e.delete(t.current.finalizationRegistryCleanupToken));
                              },
                              forceCleanupTimerToRunNowForTests: function () {},
                              resetCleanupScheduleForTests: function () {},
                          };
                      })(u)
                    : (function () {
                          var t,
                              e = new Set();
                          function n() {
                              void 0 === t && (t = setTimeout(r, 1e4));
                          }
                          function r() {
                              t = void 0;
                              var r = Date.now();
                              (e.forEach(function (t) {
                                  var n = t.current;
                                  n && r >= n.cleanAt && (n.reaction.dispose(), (t.current = null), e.delete(t));
                              }),
                                  e.size > 0 && n());
                          }
                          return {
                              addReactionToTrack: function (t, r, i) {
                                  var o;
                                  return ((t.current = c(r)), (o = t), e.add(o), n(), t.current);
                              },
                              recordReactionAsCommitted: function (t) {
                                  e.delete(t);
                              },
                              forceCleanupTimerToRunNowForTests: function () {
                                  t && (clearTimeout(t), r());
                              },
                              resetCleanupScheduleForTests: function () {
                                  var n, r;
                                  if (e.size > 0) {
                                      try {
                                          for (
                                              var i = (function (t) {
                                                      var e = 'function' == typeof Symbol && Symbol.iterator,
                                                          n = e && t[e],
                                                          r = 0;
                                                      if (n) return n.call(t);
                                                      if (t && 'number' == typeof t.length)
                                                          return {
                                                              next: function () {
                                                                  return (
                                                                      t && r >= t.length && (t = void 0),
                                                                      { value: t && t[r++], done: !t }
                                                                  );
                                                              },
                                                          };
                                                      throw new TypeError(
                                                          e
                                                              ? 'Object is not iterable.'
                                                              : 'Symbol.iterator is not defined.',
                                                      );
                                                  })(e),
                                                  o = i.next();
                                              !o.done;
                                              o = i.next()
                                          ) {
                                              var a = o.value,
                                                  s = a.current;
                                              s && (s.reaction.dispose(), (a.current = null));
                                          }
                                      } catch (t) {
                                          n = { error: t };
                                      } finally {
                                          try {
                                              o && !o.done && (r = i.return) && r.call(i);
                                          } finally {
                                              if (n) throw n.error;
                                          }
                                      }
                                      e.clear();
                                  }
                                  t && (clearTimeout(t), (t = void 0));
                              },
                          };
                      })(),
                h = d.addReactionToTrack,
                f = d.recordReactionAsCommitted,
                p = (d.resetCleanupScheduleForTests, d.forceCleanupTimerToRunNowForTests, !1);
            function v() {
                return p;
            }
            var y = function (t, e) {
                var n = 'function' == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r,
                    i,
                    o = n.call(t),
                    a = [];
                try {
                    for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; ) a.push(r.value);
                } catch (t) {
                    i = { error: t };
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o);
                    } finally {
                        if (i) throw i.error;
                    }
                }
                return a;
            };
            function g(t) {
                return 'observer' + t;
            }
            var m = function () {};
            function b() {
                return new m();
            }
            var _ = function () {
                return (
                    (_ =
                        Object.assign ||
                        function (t) {
                            for (var e, n = 1, r = arguments.length; n < r; n++)
                                for (var i in (e = arguments[n]))
                                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                            return t;
                        }),
                    _.apply(this, arguments)
                );
            };
            function w(t, e) {
                if (v()) return t;
                var n,
                    a,
                    u,
                    c = _({ forwardRef: !1 }, e),
                    l = t.displayName || t.name,
                    d = function (e, n) {
                        return (function (t, e) {
                            if ((void 0 === e && (e = 'observed'), v())) return t();
                            var n = y(o().useState(b), 1)[0],
                                i = y(o().useState(), 2)[1],
                                a = function () {
                                    return i([]);
                                },
                                u = o().useRef(null);
                            if (!u.current)
                                var c = new r.le(g(e), function () {
                                        l.mounted ? a() : (l.changedBeforeMount = !0);
                                    }),
                                    l = h(u, c, n);
                            var d,
                                p,
                                m = u.current.reaction;
                            if (
                                (o().useDebugValue(m, s),
                                o().useEffect(function () {
                                    return (
                                        f(u),
                                        u.current
                                            ? ((u.current.mounted = !0),
                                              u.current.changedBeforeMount &&
                                                  ((u.current.changedBeforeMount = !1), a()))
                                            : ((u.current = {
                                                  reaction: new r.le(g(e), function () {
                                                      a();
                                                  }),
                                                  mounted: !0,
                                                  changedBeforeMount: !1,
                                                  cleanAt: 1 / 0,
                                              }),
                                              a()),
                                        function () {
                                            (u.current.reaction.dispose(), (u.current = null));
                                        }
                                    );
                                }, []),
                                m.track(function () {
                                    try {
                                        d = t();
                                    } catch (t) {
                                        p = t;
                                    }
                                }),
                                p)
                            )
                                throw p;
                            return d;
                        })(function () {
                            return t(e, n);
                        }, l);
                    };
                return (
                    (d.displayName = l),
                    t.contextTypes && (d.contextTypes = t.contextTypes),
                    (n = c.forwardRef ? (0, i.memo)((0, i.forwardRef)(d)) : (0, i.memo)(d)),
                    (a = t),
                    (u = n),
                    Object.keys(a).forEach(function (t) {
                        O[t] || Object.defineProperty(u, t, Object.getOwnPropertyDescriptor(a, t));
                    }),
                    (n.displayName = l),
                    n
                );
            }
            var S,
                O = { $$typeof: !0, render: !0, compare: !0, type: !0 };
            ((S = a.unstable_batchedUpdates) ||
                (S = function (t) {
                    t();
                }),
                (0, r.jQ)({ reactionScheduler: S }));
        },
        3946: (t, e, n) => {
            'use strict';
            n.d(e, { Om: () => w });
            var r = n(9174);
            function i(t, e) {
                (void 0 === e && (e = 'Illegal state'),
                    t ||
                        (function (t) {
                            throw new Error('[mobx-utils] ' + t);
                        })(e));
            }
            var o = function t(e) {
                    return (
                        e &&
                        e !== Object.prototype &&
                        Object.getOwnPropertyNames(e).concat(t(Object.getPrototypeOf(e)) || [])
                    );
                },
                a = function (t) {
                    var e = o(t);
                    return e.filter(function (t, n) {
                        return e.indexOf(t) === n;
                    });
                },
                s = 'pending',
                u = 'fulfilled',
                c = 'rejected';
            function l(t) {
                switch (this.state) {
                    case s:
                        return t.pending && t.pending(this.value);
                    case c:
                        return t.rejected && t.rejected(this.value);
                    case u:
                        return t.fulfilled ? t.fulfilled(this.value) : this.value;
                }
            }
            function d(t, e) {
                if (
                    (i(arguments.length <= 2, 'fromPromise expects up to two arguments'),
                    i(
                        'function' == typeof t || ('object' == typeof t && t && 'function' == typeof t.then),
                        'Please pass a promise or function to fromPromise',
                    ),
                    !0 === t.isPromiseBasedObservable)
                )
                    return t;
                'function' == typeof t && (t = new Promise(t));
                var n = t;
                (t.then(
                    (0, r.aD)('observableFromPromise-resolve', function (t) {
                        ((n.value = t), (n.state = u));
                    }),
                    (0, r.aD)('observableFromPromise-reject', function (t) {
                        ((n.value = t), (n.state = c));
                    }),
                ),
                    (n.isPromiseBasedObservable = !0),
                    (n.case = l));
                var o = e && e.state === u ? e.value : void 0;
                return ((0, r.dw)(n, { value: o, state: s }, {}, { deep: !1 }), n);
            }
            !(function (t) {
                ((t.reject = (0, r.aD)('fromPromise.reject', function (e) {
                    var n = t(Promise.reject(e));
                    return ((n.state = c), (n.value = e), n);
                })),
                    (t.resolve = (0, r.aD)('fromPromise.resolve', function (e) {
                        void 0 === e && (e = void 0);
                        var n = t(Promise.resolve(e));
                        return ((n.state = u), (n.value = e), n);
                    })));
            })(d || (d = {}));
            var h = function (t, e, n, r) {
                var i,
                    o = arguments.length,
                    a = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    a = Reflect.decorate(t, e, n, r);
                else
                    for (var s = t.length - 1; s >= 0; s--)
                        (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a);
                return (o > 3 && a && Object.defineProperty(e, n, a), a);
            };
            !(function () {
                function t(t, e) {
                    var n = this;
                    (Object.defineProperty(this, 'current', {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0,
                    }),
                        Object.defineProperty(this, 'subscription', {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0,
                        }),
                        (0, r.rC)(this),
                        (0, r.z)(function () {
                            ((n.current = e), (n.subscription = t.subscribe(n)));
                        }));
                }
                (Object.defineProperty(t.prototype, 'dispose', {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function () {
                        this.subscription && this.subscription.unsubscribe();
                    },
                }),
                    Object.defineProperty(t.prototype, 'next', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (t) {
                            this.current = t;
                        },
                    }),
                    Object.defineProperty(t.prototype, 'complete', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            this.dispose();
                        },
                    }),
                    Object.defineProperty(t.prototype, 'error', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (t) {
                            ((this.current = t), this.dispose());
                        },
                    }),
                    h([r.LO.ref], t.prototype, 'current', void 0),
                    h([r.aD.bound], t.prototype, 'next', null),
                    h([r.aD.bound], t.prototype, 'complete', null),
                    h([r.aD.bound], t.prototype, 'error', null));
            })();
            var f = function () {
                    return (
                        (f =
                            Object.assign ||
                            function (t) {
                                for (var e, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in (e = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                return t;
                            }),
                        f.apply(this, arguments)
                    );
                },
                p = function (t, e, n, r) {
                    var i,
                        o = arguments.length,
                        a = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
                    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                        a = Reflect.decorate(t, e, n, r);
                    else
                        for (var s = t.length - 1; s >= 0; s--)
                            (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a);
                    return (o > 3 && a && Object.defineProperty(e, n, a), a);
                },
                v = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
            !(function () {
                function t(t) {
                    var e,
                        n = this;
                    (Object.defineProperty(this, 'model', { enumerable: !0, configurable: !0, writable: !0, value: t }),
                        Object.defineProperty(this, 'localValues', {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: r.LO.map({}),
                        }),
                        Object.defineProperty(this, 'localComputedValues', {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: r.LO.map({}),
                        }),
                        Object.defineProperty(this, 'isPropertyDirty', {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: function (t) {
                                return n.localValues.has(t);
                            },
                        }),
                        (0, r.rC)(this),
                        i((0, r.Pb)(t), 'createViewModel expects an observable object'),
                        ((e = t),
                        a(e).filter(function (t) {
                            return 'constructor' !== t && !~t.indexOf('__');
                        })).forEach(function (e) {
                            var o;
                            if (e !== r.so && '__mobxDidRunLazyInitializers' !== e) {
                                if (
                                    (i(
                                        -1 === v.indexOf(e),
                                        'The propertyname ' + e + ' is reserved and cannot be used with viewModels',
                                    ),
                                    (0, r.eJ)(t, e))
                                ) {
                                    var a = (0, r.kS)(t, e),
                                        s = a.derivation.bind(n),
                                        u = null === (o = a.setter_) || void 0 === o ? void 0 : o.bind(n);
                                    n.localComputedValues.set(e, (0, r.Fl)(s, { set: u }));
                                }
                                var c = Object.getOwnPropertyDescriptor(t, e),
                                    l = c ? { enumerable: c.enumerable } : {};
                                Object.defineProperty(
                                    n,
                                    e,
                                    f(f({}, l), {
                                        configurable: !0,
                                        get: function () {
                                            return (0, r.eJ)(t, e)
                                                ? n.localComputedValues.get(e).get()
                                                : n.isPropertyDirty(e)
                                                  ? n.localValues.get(e)
                                                  : n.model[e];
                                        },
                                        set: (0, r.aD)(function (i) {
                                            (0, r.eJ)(t, e)
                                                ? n.localComputedValues.get(e).set(i)
                                                : i !== n.model[e]
                                                  ? n.localValues.set(e, i)
                                                  : n.localValues.delete(e);
                                        }),
                                    }),
                                );
                            }
                        }));
                }
                (Object.defineProperty(t.prototype, 'isDirty', {
                    get: function () {
                        return this.localValues.size > 0;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    Object.defineProperty(t.prototype, 'changedValues', {
                        get: function () {
                            return new Map(this.localValues);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, 'submit', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            var t = this;
                            ((0, r.XP)(this.localValues).forEach(function (e) {
                                var n = t.localValues.get(e),
                                    i = t.model[e];
                                (0, r.Ei)(i)
                                    ? i.replace(n)
                                    : (0, r.LJ)(i)
                                      ? (i.clear(), i.merge(n))
                                      : (0, r.M5)(n) || (t.model[e] = n);
                            }),
                                this.localValues.clear());
                        },
                    }),
                    Object.defineProperty(t.prototype, 'reset', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            this.localValues.clear();
                        },
                    }),
                    Object.defineProperty(t.prototype, 'resetProperty', {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (t) {
                            this.localValues.delete(t);
                        },
                    }),
                    p([r.Fl], t.prototype, 'isDirty', null),
                    p([r.Fl], t.prototype, 'changedValues', null),
                    p([r.aD.bound], t.prototype, 'submit', null),
                    p([r.aD.bound], t.prototype, 'reset', null),
                    p([r.aD.bound], t.prototype, 'resetProperty', null));
            })();
            var y,
                g =
                    ((y = function (t, e) {
                        return (
                            (y =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                }),
                            y(t, e)
                        );
                    }),
                    function (t, e) {
                        function n() {
                            this.constructor = t;
                        }
                        (y(t, e),
                            (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n())));
                    }),
                m =
                    ((function (t) {
                        function e(e, n, i) {
                            var o = void 0 === i ? {} : i,
                                a = o.name,
                                s = void 0 === a ? 'ogm' + ((1e3 * Math.random()) | 0) : a,
                                u = o.keyToName,
                                c =
                                    void 0 === u
                                        ? function (t) {
                                              return '' + t;
                                          }
                                        : u,
                                l = t.call(this) || this;
                            (Object.defineProperty(l, '_base', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0,
                            }),
                                Object.defineProperty(l, '_ogmInfoKey', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: void 0,
                                }),
                                Object.defineProperty(l, '_groupBy', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: void 0,
                                }),
                                Object.defineProperty(l, '_keyToName', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: void 0,
                                }),
                                Object.defineProperty(l, '_disposeBaseObserver', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: void 0,
                                }),
                                (l._keyToName = c),
                                (l._groupBy = n),
                                (l._ogmInfoKey = Symbol('ogmInfo' + s)),
                                (l._base = e));
                            for (var d = 0; d < e.length; d++) l._addItem(e[d]);
                            return (
                                (l._disposeBaseObserver = (0, r.N7)(l._base, function (t) {
                                    if ('splice' === t.type)
                                        (0, r.PS)(function () {
                                            for (var e = 0, n = t.removed; e < n.length; e++) {
                                                var r = n[e];
                                                l._removeItem(r);
                                            }
                                            for (var i = 0, o = t.added; i < o.length; i++) {
                                                var a = o[i];
                                                l._addItem(a);
                                            }
                                        });
                                    else {
                                        if ('update' !== t.type) throw new Error('illegal state');
                                        (0, r.PS)(function () {
                                            (l._removeItem(t.oldValue), l._addItem(t.newValue));
                                        });
                                    }
                                })),
                                l
                            );
                        }
                        (g(e, t),
                            Object.defineProperty(e.prototype, 'clear', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function () {
                                    throw new Error('not supported');
                                },
                            }),
                            Object.defineProperty(e.prototype, 'delete', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (t) {
                                    throw new Error('not supported');
                                },
                            }),
                            Object.defineProperty(e.prototype, 'set', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (t, e) {
                                    throw new Error('not supported');
                                },
                            }),
                            Object.defineProperty(e.prototype, 'dispose', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function () {
                                    this._disposeBaseObserver();
                                    for (var t = 0; t < this._base.length; t++) {
                                        var e = this._base[t];
                                        (e[this._ogmInfoKey].reaction(), delete e[this._ogmInfoKey]);
                                    }
                                },
                            }),
                            Object.defineProperty(e.prototype, '_getGroupArr', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    var n = t.prototype.get.call(this, e);
                                    return (
                                        void 0 === n &&
                                            ((n = (0, r.LO)([], {
                                                name: 'GroupArray[' + this._keyToName(e) + ']',
                                                deep: !1,
                                            })),
                                            t.prototype.set.call(this, e, n)),
                                        n
                                    );
                                },
                            }),
                            Object.defineProperty(e.prototype, '_removeFromGroupArr', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e, n) {
                                    var r = t.prototype.get.call(this, e);
                                    1 === r.length
                                        ? t.prototype.delete.call(this, e)
                                        : (n === r.length - 1 ||
                                              ((r[n] = r[r.length - 1]), (r[n][this._ogmInfoKey].groupArrIndex = n)),
                                          r.length--);
                                },
                            }),
                            Object.defineProperty(e.prototype, '_addItem', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (t) {
                                    var e = this,
                                        n = this._groupBy(t),
                                        i = this._getGroupArr(n),
                                        o = {
                                            groupByValue: n,
                                            groupArrIndex: i.length,
                                            reaction: (0, r.U5)(
                                                function () {
                                                    return e._groupBy(t);
                                                },
                                                function (n, r) {
                                                    var i = t[e._ogmInfoKey];
                                                    e._removeFromGroupArr(i.groupByValue, i.groupArrIndex);
                                                    var o = e._getGroupArr(n),
                                                        a = o.length;
                                                    (o.push(t), (i.groupByValue = n), (i.groupArrIndex = a));
                                                },
                                            ),
                                        };
                                    (Object.defineProperty(t, this._ogmInfoKey, {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: o,
                                    }),
                                        i.push(t));
                                },
                            }),
                            Object.defineProperty(e.prototype, '_removeItem', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (t) {
                                    var e = t[this._ogmInfoKey];
                                    (this._removeFromGroupArr(e.groupByValue, e.groupArrIndex),
                                        e.reaction(),
                                        delete t[this._ogmInfoKey]);
                                },
                            }));
                    })(r.vP),
                    (function () {
                        function t(t, e) {
                            (Object.defineProperty(this, 'base', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t,
                            }),
                                Object.defineProperty(this, 'args', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: e,
                                }),
                                Object.defineProperty(this, 'root', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: void 0,
                                }),
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
                                }),
                                Object.defineProperty(this, 'isDisposed', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: !1,
                                }));
                            for (
                                var n = (this.closest = this.root = t), r = 0;
                                r < this.args.length - 1 && (n = n.get(e[r]));
                                r++
                            )
                                this.closest = n;
                            this.closestIdx = r;
                        }
                        return (
                            Object.defineProperty(t.prototype, 'exists', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function () {
                                    this.assertNotDisposed();
                                    var t = this.args.length;
                                    return this.closestIdx >= t - 1 && this.closest.has(this.args[t - 1]);
                                },
                            }),
                            Object.defineProperty(t.prototype, 'get', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function () {
                                    if ((this.assertNotDisposed(), !this.exists()))
                                        throw new Error("Entry doesn't exist");
                                    return this.closest.get(this.args[this.args.length - 1]);
                                },
                            }),
                            Object.defineProperty(t.prototype, 'set', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (t) {
                                    this.assertNotDisposed();
                                    for (
                                        var e = this.args.length, n = this.closest, r = this.closestIdx;
                                        r < e - 1;
                                        r++
                                    ) {
                                        var i = new Map();
                                        (n.set(this.args[r], i), (n = i));
                                    }
                                    ((this.closestIdx = e - 1), (this.closest = n), n.set(this.args[e - 1], t));
                                },
                            }),
                            Object.defineProperty(t.prototype, 'delete', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function () {
                                    if ((this.assertNotDisposed(), !this.exists()))
                                        throw new Error("Entry doesn't exist");
                                    var t = this.args.length;
                                    this.closest.delete(this.args[t - 1]);
                                    for (var e = this.root, n = [e], r = 0; r < t - 1; r++)
                                        ((e = e.get(this.args[r])), n.push(e));
                                    for (r = n.length - 1; r > 0; r--)
                                        0 === n[r].size && n[r - 1].delete(this.args[r - 1]);
                                    this.isDisposed = !0;
                                },
                            }),
                            Object.defineProperty(t.prototype, 'assertNotDisposed', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function () {
                                    if (this.isDisposed) throw new Error('Concurrent modification exception');
                                },
                            }),
                            t
                        );
                    })()),
                b = (function () {
                    function t() {
                        (Object.defineProperty(this, 'store', {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: new Map(),
                        }),
                            Object.defineProperty(this, 'argsLength', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: -1,
                            }),
                            Object.defineProperty(this, 'last', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0,
                            }));
                    }
                    return (
                        Object.defineProperty(t.prototype, 'entry', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (t) {
                                if (-1 === this.argsLength) this.argsLength = t.length;
                                else if (this.argsLength !== t.length)
                                    throw new Error(
                                        'DeepMap should be used with functions with a consistent length, expected: ' +
                                            this.argsLength +
                                            ', got: ' +
                                            t.length,
                                    );
                                return (this.last && (this.last.isDisposed = !0), (this.last = new m(this.store, t)));
                            },
                        }),
                        t
                    );
                })(),
                _ = function () {
                    return (
                        (_ =
                            Object.assign ||
                            function (t) {
                                for (var e, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in (e = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                return t;
                            }),
                        _.apply(this, arguments)
                    );
                };
            function w(t, e) {
                if ((void 0 === e && (e = !1), (0, r.LG)(t)))
                    throw new Error("computedFn shouldn't be used on actions");
                var n = !1,
                    i = 0,
                    o = 'boolean' == typeof e ? { keepAlive: e } : e,
                    a = new b();
                return function () {
                    for (var e = this, s = [], u = 0; u < arguments.length; u++) s[u] = arguments[u];
                    var c = a.entry(s);
                    if (c.exists()) return c.get().get();
                    if (!o.keepAlive && !(0, r.SW)())
                        return (
                            n ||
                                (console.warn(
                                    "invoking a computedFn from outside an reactive context won't be memoized, unless keepAlive is set",
                                ),
                                (n = !0)),
                            t.apply(this, s)
                        );
                    var l = (0, r.Fl)(
                        function () {
                            return t.apply(e, s);
                        },
                        _(_({}, o), { name: 'computedFn(' + (o.name || t.name) + '#' + ++i + ')' }),
                    );
                    return (
                        c.set(l),
                        o.keepAlive ||
                            (0, r.pA)(l, function () {
                                a.entry(s).delete();
                            }),
                        l.get()
                    );
                };
            }
        },
        9174: (t, e, n) => {
            'use strict';
            function r(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                    n[r - 1] = arguments[r];
                throw new Error(
                    'number' == typeof t
                        ? '[MobX] minified error nr: ' +
                          t +
                          (n.length ? ' ' + n.map(String).join(',') : '') +
                          '. Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts'
                        : '[MobX] ' + t,
                );
            }
            n.d(e, {
                EH: () => Te,
                Ei: () => Rn,
                Fl: () => Ut,
                Gf: () => He,
                LG: () => Ue,
                LJ: () => Bn,
                LO: () => Wt,
                M5: () => Ge,
                N7: () => tn,
                PS: () => nn,
                Pb: () => Ln,
                SW: () => zt,
                U5: () => Be,
                XP: () => Ye,
                aD: () => Re,
                dw: () => Ne,
                eJ: () => Ze,
                jQ: () => Ce,
                kS: () => tr,
                le: () => pe,
                pA: () => Me,
                rC: () => hn,
                so: () => I,
                vP: () => Pn,
                z: () => je,
            });
            var i = {};
            function o() {
                return 'undefined' != typeof globalThis
                    ? globalThis
                    : 'undefined' != typeof window
                      ? window
                      : void 0 !== n.g
                        ? n.g
                        : 'undefined' != typeof self
                          ? self
                          : i;
            }
            var a = Object.assign,
                s = Object.getOwnPropertyDescriptor,
                u = Object.defineProperty,
                c = Object.prototype,
                l = [];
            Object.freeze(l);
            var d = {};
            Object.freeze(d);
            var h = 'undefined' != typeof Proxy,
                f = Object.toString();
            function p() {
                h || r('Proxy not available');
            }
            function v(t) {
                var e = !1;
                return function () {
                    if (!e) return ((e = !0), t.apply(this, arguments));
                };
            }
            var y = function () {};
            function g(t) {
                return 'function' == typeof t;
            }
            function m(t) {
                switch (typeof t) {
                    case 'string':
                    case 'symbol':
                    case 'number':
                        return !0;
                }
                return !1;
            }
            function b(t) {
                return null !== t && 'object' == typeof t;
            }
            function _(t) {
                var e;
                if (!b(t)) return !1;
                var n = Object.getPrototypeOf(t);
                return null == n || (null == (e = n.constructor) ? void 0 : e.toString()) === f;
            }
            function w(t) {
                var e = null == t ? void 0 : t.constructor;
                return !!e && ('GeneratorFunction' === e.name || 'GeneratorFunction' === e.displayName);
            }
            function S(t, e, n) {
                u(t, e, { enumerable: !1, writable: !0, configurable: !0, value: n });
            }
            function O(t, e, n) {
                u(t, e, { enumerable: !1, writable: !1, configurable: !0, value: n });
            }
            function x(t, e) {
                var n = 'isMobX' + t;
                return (
                    (e.prototype[n] = !0),
                    function (t) {
                        return b(t) && !0 === t[n];
                    }
                );
            }
            function W(t) {
                return t instanceof Map;
            }
            function R(t) {
                return t instanceof Set;
            }
            var E = void 0 !== Object.getOwnPropertySymbols,
                j =
                    'undefined' != typeof Reflect && Reflect.ownKeys
                        ? Reflect.ownKeys
                        : E
                          ? function (t) {
                                return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
                            }
                          : Object.getOwnPropertyNames;
            function U(t) {
                return null === t ? null : 'object' == typeof t ? '' + t : t;
            }
            function T(t, e) {
                return c.hasOwnProperty.call(t, e);
            }
            var A =
                Object.getOwnPropertyDescriptors ||
                function (t) {
                    var e = {};
                    return (
                        j(t).forEach(function (n) {
                            e[n] = s(t, n);
                        }),
                        e
                    );
                };
            function P(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    ((r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r));
                }
            }
            function B(t, e, n) {
                return (e && P(t.prototype, e), n && P(t, n), t);
            }
            function V() {
                return (
                    (V =
                        Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                            }
                            return t;
                        }),
                    V.apply(this, arguments)
                );
            }
            function M(t, e) {
                ((t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e));
            }
            function k(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }
            function F(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function C(t, e) {
                var n;
                if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
                    if (
                        Array.isArray(t) ||
                        (n = (function (t, e) {
                            if (t) {
                                if ('string' == typeof t) return F(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return (
                                    'Object' === n && t.constructor && (n = t.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(t)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? F(t, e)
                                          : void 0
                                );
                            }
                        })(t)) ||
                        (e && t && 'number' == typeof t.length)
                    ) {
                        n && (t = n);
                        var r = 0;
                        return function () {
                            return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                return (n = t[Symbol.iterator]()).next.bind(n);
            }
            var N = Symbol('mobx-stored-annotations');
            function H(t) {
                return Object.assign(function (e, n) {
                    D(e, n, t);
                }, t);
            }
            function D(t, e, n) {
                (T(t, N) || S(t, N, V({}, t[N])),
                    (function (t) {
                        return t.annotationType_ === K;
                    })(n) || (t[N][e] = n));
            }
            var I = Symbol('mobx administration'),
                L = (function () {
                    function t(t) {
                        (void 0 === t && (t = 'Atom'),
                            (this.name_ = void 0),
                            (this.isPendingUnobservation_ = !1),
                            (this.isBeingObserved_ = !1),
                            (this.observers_ = new Set()),
                            (this.diffValue_ = 0),
                            (this.lastAccessedBy_ = 0),
                            (this.lowestObserverState_ = Dt.NOT_TRACKING_),
                            (this.onBOL = void 0),
                            (this.onBUOL = void 0),
                            (this.name_ = t));
                    }
                    var e = t.prototype;
                    return (
                        (e.onBO = function () {
                            this.onBOL &&
                                this.onBOL.forEach(function (t) {
                                    return t();
                                });
                        }),
                        (e.onBUO = function () {
                            this.onBUOL &&
                                this.onBUOL.forEach(function (t) {
                                    return t();
                                });
                        }),
                        (e.reportObserved = function () {
                            return he(this);
                        }),
                        (e.reportChanged = function () {
                            (le(), fe(this), de());
                        }),
                        (e.toString = function () {
                            return this.name_;
                        }),
                        t
                    );
                })(),
                $ = x('Atom', L);
            function q(t, e, n) {
                (void 0 === e && (e = y), void 0 === n && (n = y));
                var r = new L(t);
                return (e !== y && ke(Ve, r, e, undefined), n !== y && Me(r, n), r);
            }
            var Q = {
                identity: function (t, e) {
                    return t === e;
                },
                structural: function (t, e) {
                    return rr(t, e);
                },
                default: function (t, e) {
                    return Object.is ? Object.is(t, e) : t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
                },
                shallow: function (t, e) {
                    return rr(t, e, 1);
                },
            };
            function X(t, e, n) {
                return Je(t)
                    ? t
                    : Array.isArray(t)
                      ? Wt.array(t, { name: n })
                      : _(t)
                        ? Wt.object(t, void 0, { name: n })
                        : W(t)
                          ? Wt.map(t, { name: n })
                          : R(t)
                            ? Wt.set(t, { name: n })
                            : 'function' != typeof t || Ue(t) || ze(t)
                              ? t
                              : w(t)
                                ? Qe(t)
                                : Ee(n, t);
            }
            function z(t) {
                return t;
            }
            var K = 'override';
            function G(t, e) {
                return { annotationType_: t, options_: e, make_: Z, extend_: J };
            }
            function Z(t, e, n, r) {
                var i;
                if (null == (i = this.options_) ? void 0 : i.bound) return null === this.extend_(t, e, n, !1) ? 0 : 1;
                if (r === t.target_) return null === this.extend_(t, e, n, !1) ? 0 : 2;
                if (Ue(n.value)) return 1;
                var o = Y(t, this, e, n, !1);
                return (u(r, e, o), 2);
            }
            function J(t, e, n, r) {
                var i = Y(t, this, e, n);
                return t.defineProperty_(e, i, r);
            }
            function Y(t, e, n, r, i) {
                var o, a, s, u, c, l, d, h;
                (void 0 === i && (i = ae.safeDescriptors), (h = r), e.annotationType_, h.value);
                var f,
                    p = r.value;
                return (
                    (null == (o = e.options_) ? void 0 : o.bound) &&
                        (p = p.bind(null != (f = t.proxy_) ? f : t.target_)),
                    {
                        value: Mt(
                            null != (a = null == (s = e.options_) ? void 0 : s.name) ? a : n.toString(),
                            p,
                            null != (u = null == (c = e.options_) ? void 0 : c.autoAction) && u,
                            (null == (l = e.options_) ? void 0 : l.bound)
                                ? null != (d = t.proxy_)
                                    ? d
                                    : t.target_
                                : void 0,
                        ),
                        configurable: !i || t.isPlainObject_,
                        enumerable: !1,
                        writable: !i,
                    }
                );
            }
            function tt(t, e) {
                return { annotationType_: t, options_: e, make_: et, extend_: nt };
            }
            function et(t, e, n, r) {
                var i;
                if (r === t.target_) return null === this.extend_(t, e, n, !1) ? 0 : 2;
                if (
                    (null == (i = this.options_) ? void 0 : i.bound) &&
                    !ze(t.target_[e]) &&
                    null === this.extend_(t, e, n, !1)
                )
                    return 0;
                if (ze(n.value)) return 1;
                var o = rt(t, this, 0, n, !1, !1);
                return (u(r, e, o), 2);
            }
            function nt(t, e, n, r) {
                var i,
                    o = rt(t, this, 0, n, null == (i = this.options_) ? void 0 : i.bound);
                return t.defineProperty_(e, o, r);
            }
            function rt(t, e, n, r, i, o) {
                var a;
                (void 0 === o && (o = ae.safeDescriptors), (a = r), e.annotationType_, a.value);
                var s,
                    u = r.value;
                return (
                    i && (u = u.bind(null != (s = t.proxy_) ? s : t.target_)),
                    { value: Qe(u), configurable: !o || t.isPlainObject_, enumerable: !1, writable: !o }
                );
            }
            function it(t, e) {
                return { annotationType_: t, options_: e, make_: ot, extend_: at };
            }
            function ot(t, e, n) {
                return null === this.extend_(t, e, n, !1) ? 0 : 1;
            }
            function at(t, e, n, r) {
                return (
                    (i = n),
                    this.annotationType_,
                    i.get,
                    t.defineComputedProperty_(e, V({}, this.options_, { get: n.get, set: n.set }), r)
                );
                var i;
            }
            function st(t, e) {
                return { annotationType_: t, options_: e, make_: ut, extend_: ct };
            }
            function ut(t, e, n) {
                return null === this.extend_(t, e, n, !1) ? 0 : 1;
            }
            function ct(t, e, n, r) {
                var i, o;
                return (
                    this.annotationType_,
                    t.defineObservableProperty_(
                        e,
                        n.value,
                        null != (i = null == (o = this.options_) ? void 0 : o.enhancer) ? i : X,
                        r,
                    )
                );
            }
            var lt = dt();
            function dt(t) {
                return { annotationType_: 'true', options_: t, make_: ht, extend_: ft };
            }
            function ht(t, e, n, r) {
                var i, o, a, s;
                if (n.get) return Ut.make_(t, e, n, r);
                if (n.set) {
                    var c = Mt(e.toString(), n.set);
                    return r === t.target_
                        ? null ===
                          t.defineProperty_(e, { configurable: !ae.safeDescriptors || t.isPlainObject_, set: c })
                            ? 0
                            : 2
                        : (u(r, e, { configurable: !0, set: c }), 2);
                }
                if (r !== t.target_ && 'function' == typeof n.value)
                    return w(n.value)
                        ? ((null == (s = this.options_) ? void 0 : s.autoBind) ? Qe.bound : Qe).make_(t, e, n, r)
                        : ((null == (a = this.options_) ? void 0 : a.autoBind) ? Ee.bound : Ee).make_(t, e, n, r);
                var l,
                    d = !1 === (null == (i = this.options_) ? void 0 : i.deep) ? Wt.ref : Wt;
                return (
                    'function' == typeof n.value &&
                        (null == (o = this.options_) ? void 0 : o.autoBind) &&
                        (n.value = n.value.bind(null != (l = t.proxy_) ? l : t.target_)),
                    d.make_(t, e, n, r)
                );
            }
            function ft(t, e, n, r) {
                var i, o, a;
                return n.get
                    ? Ut.extend_(t, e, n, r)
                    : n.set
                      ? t.defineProperty_(
                            e,
                            { configurable: !ae.safeDescriptors || t.isPlainObject_, set: Mt(e.toString(), n.set) },
                            r,
                        )
                      : ('function' == typeof n.value &&
                            (null == (i = this.options_) ? void 0 : i.autoBind) &&
                            (n.value = n.value.bind(null != (a = t.proxy_) ? a : t.target_)),
                        (!1 === (null == (o = this.options_) ? void 0 : o.deep) ? Wt.ref : Wt).extend_(t, e, n, r));
            }
            var pt = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
            function vt(t) {
                return t || pt;
            }
            Object.freeze(pt);
            var yt = st('observable'),
                gt = st('observable.ref', { enhancer: z }),
                mt = st('observable.shallow', {
                    enhancer: function (t, e, n) {
                        return null == t || Ln(t) || Rn(t) || Bn(t) || kn(t)
                            ? t
                            : Array.isArray(t)
                              ? Wt.array(t, { name: n, deep: !1 })
                              : _(t)
                                ? Wt.object(t, void 0, { name: n, deep: !1 })
                                : W(t)
                                  ? Wt.map(t, { name: n, deep: !1 })
                                  : R(t)
                                    ? Wt.set(t, { name: n, deep: !1 })
                                    : void 0;
                    },
                }),
                bt = st('observable.struct', {
                    enhancer: function (t, e) {
                        return rr(t, e) ? e : t;
                    },
                }),
                _t = H(yt);
            function wt(t) {
                return !0 === t.deep
                    ? X
                    : !1 === t.deep
                      ? z
                      : (e = t.defaultDecorator) && null != (n = null == (r = e.options_) ? void 0 : r.enhancer)
                        ? n
                        : X;
                var e, n, r;
            }
            function St(t, e, n) {
                if (!m(e))
                    return Je(t)
                        ? t
                        : _(t)
                          ? Wt.object(t, e, n)
                          : Array.isArray(t)
                            ? Wt.array(t, e)
                            : W(t)
                              ? Wt.map(t, e)
                              : R(t)
                                ? Wt.set(t, e)
                                : 'object' == typeof t && null !== t
                                  ? t
                                  : Wt.box(t, e);
                D(t, e, yt);
            }
            Object.assign(St, _t);
            var Ot,
                xt,
                Wt = a(St, {
                    box: function (t, e) {
                        var n = vt(e);
                        return new Ht(t, wt(n), n.name, !0, n.equals);
                    },
                    array: function (t, e) {
                        var n = vt(e);
                        return (!1 === ae.useProxies || !1 === n.proxy ? Jn : gn)(t, wt(n), n.name);
                    },
                    map: function (t, e) {
                        var n = vt(e);
                        return new Pn(t, wt(n), n.name);
                    },
                    set: function (t, e) {
                        var n = vt(e);
                        return new Mn(t, wt(n), n.name);
                    },
                    object: function (t, e, n) {
                        return Ne(
                            !1 === ae.useProxies || !1 === (null == n ? void 0 : n.proxy)
                                ? Hn({}, n)
                                : (function (t, e) {
                                      var n, r;
                                      return (
                                          p(),
                                          null != (r = (n = (t = Hn(t, e))[I]).proxy_)
                                              ? r
                                              : (n.proxy_ = new Proxy(t, on))
                                      );
                                  })({}, n),
                            t,
                            e,
                        );
                    },
                    ref: H(gt),
                    shallow: H(mt),
                    deep: _t,
                    struct: H(bt),
                }),
                Rt = 'computed',
                Et = it(Rt),
                jt = it('computed.struct', { equals: Q.structural }),
                Ut = function (t, e) {
                    if (m(e)) return D(t, e, Et);
                    if (_(t)) return H(it(Rt, t));
                    var n = _(e) ? e : {};
                    return ((n.get = t), n.name || (n.name = t.name || ''), new Lt(n));
                };
            (Object.assign(Ut, Et), (Ut.struct = H(jt)));
            var Tt,
                At = 0,
                Pt = 1,
                Bt = null != (Ot = null == (xt = s(function () {}, 'name')) ? void 0 : xt.configurable) && Ot,
                Vt = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
            function Mt(t, e, n, r) {
                function i() {
                    return kt(0, n, e, r || this, arguments);
                }
                return (
                    void 0 === n && (n = !1),
                    (i.isMobxAction = !0),
                    Bt && ((Vt.value = t), Object.defineProperty(i, 'name', Vt)),
                    i
                );
            }
            function kt(t, e, n, i, o) {
                var a = (function (t, e, n, r) {
                    var i = ae.trackingDerivation,
                        o = !e || !i;
                    le();
                    var a = ae.allowStateChanges;
                    o && (Jt(), (a = Ft(!0)));
                    var s = {
                        runAsAction_: o,
                        prevDerivation_: i,
                        prevAllowStateChanges_: a,
                        prevAllowStateReads_: te(!0),
                        notifySpy_: !1,
                        startTime_: 0,
                        actionId_: Pt++,
                        parentActionId_: At,
                    };
                    return ((At = s.actionId_), s);
                })(0, e);
                try {
                    return n.apply(i, o);
                } catch (t) {
                    throw ((a.error_ = t), t);
                } finally {
                    !(function (t) {
                        (At !== t.actionId_ && r(30),
                            (At = t.parentActionId_),
                            void 0 !== t.error_ && (ae.suppressReactionErrors = !0),
                            Ct(t.prevAllowStateChanges_),
                            ee(t.prevAllowStateReads_),
                            de(),
                            t.runAsAction_ && Yt(t.prevDerivation_),
                            (ae.suppressReactionErrors = !1));
                    })(a);
                }
            }
            function Ft(t) {
                var e = ae.allowStateChanges;
                return ((ae.allowStateChanges = t), e);
            }
            function Ct(t) {
                ae.allowStateChanges = t;
            }
            Tt = Symbol.toPrimitive;
            var Nt,
                Ht = (function (t) {
                    function e(e, n, r, i, o) {
                        var a;
                        return (
                            void 0 === r && (r = 'ObservableValue'),
                            void 0 === i && (i = !0),
                            void 0 === o && (o = Q.default),
                            ((a = t.call(this, r) || this).enhancer = void 0),
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
                            (a.value_ = n(e, void 0, r)),
                            a
                        );
                    }
                    M(e, t);
                    var n = e.prototype;
                    return (
                        (n.dehanceValue = function (t) {
                            return void 0 !== this.dehancer ? this.dehancer(t) : t;
                        }),
                        (n.set = function (t) {
                            (this.value_, (t = this.prepareNewValue_(t)) !== ae.UNCHANGED && this.setNewValue_(t));
                        }),
                        (n.prepareNewValue_ = function (t) {
                            if (an(this)) {
                                var e = un(this, { object: this, type: pn, newValue: t });
                                if (!e) return ae.UNCHANGED;
                                t = e.newValue;
                            }
                            return (
                                (t = this.enhancer(t, this.value_, this.name_)),
                                this.equals(this.value_, t) ? ae.UNCHANGED : t
                            );
                        }),
                        (n.setNewValue_ = function (t) {
                            var e = this.value_;
                            ((this.value_ = t),
                                this.reportChanged(),
                                cn(this) && dn(this, { type: pn, object: this, newValue: t, oldValue: e }));
                        }),
                        (n.get = function () {
                            return (this.reportObserved(), this.dehanceValue(this.value_));
                        }),
                        (n.intercept_ = function (t) {
                            return sn(this, t);
                        }),
                        (n.observe_ = function (t, e) {
                            return (
                                e &&
                                    t({
                                        observableKind: 'value',
                                        debugObjectName: this.name_,
                                        object: this,
                                        type: pn,
                                        newValue: this.value_,
                                        oldValue: void 0,
                                    }),
                                ln(this, t)
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
                            return U(this.get());
                        }),
                        (n[Tt] = function () {
                            return this.valueOf();
                        }),
                        e
                    );
                })(L);
            Nt = Symbol.toPrimitive;
            var Dt,
                It,
                Lt = (function () {
                    function t(t) {
                        ((this.dependenciesState_ = Dt.NOT_TRACKING_),
                            (this.observing_ = []),
                            (this.newObserving_ = null),
                            (this.isBeingObserved_ = !1),
                            (this.isPendingUnobservation_ = !1),
                            (this.observers_ = new Set()),
                            (this.diffValue_ = 0),
                            (this.runId_ = 0),
                            (this.lastAccessedBy_ = 0),
                            (this.lowestObserverState_ = Dt.UP_TO_DATE_),
                            (this.unboundDepsCount_ = 0),
                            (this.value_ = new qt(null)),
                            (this.name_ = void 0),
                            (this.triggeredBy_ = void 0),
                            (this.isComputing_ = !1),
                            (this.isRunningSetter_ = !1),
                            (this.derivation = void 0),
                            (this.setter_ = void 0),
                            (this.isTracing_ = It.NONE),
                            (this.scope_ = void 0),
                            (this.equals_ = void 0),
                            (this.requiresReaction_ = void 0),
                            (this.keepAlive_ = void 0),
                            (this.onBOL = void 0),
                            (this.onBUOL = void 0),
                            t.get || r(31),
                            (this.derivation = t.get),
                            (this.name_ = t.name || 'ComputedValue'),
                            t.set && (this.setter_ = Mt('ComputedValue-setter', t.set)),
                            (this.equals_ = t.equals || (t.compareStructural || t.struct ? Q.structural : Q.default)),
                            (this.scope_ = t.context),
                            (this.requiresReaction_ = !!t.requiresReaction),
                            (this.keepAlive_ = !!t.keepAlive));
                    }
                    var e = t.prototype;
                    return (
                        (e.onBecomeStale_ = function () {
                            !(function (t) {
                                t.lowestObserverState_ === Dt.UP_TO_DATE_ &&
                                    ((t.lowestObserverState_ = Dt.POSSIBLY_STALE_),
                                    t.observers_.forEach(function (t) {
                                        t.dependenciesState_ === Dt.UP_TO_DATE_ &&
                                            ((t.dependenciesState_ = Dt.POSSIBLY_STALE_), t.onBecomeStale_());
                                    }));
                            })(this);
                        }),
                        (e.onBO = function () {
                            this.onBOL &&
                                this.onBOL.forEach(function (t) {
                                    return t();
                                });
                        }),
                        (e.onBUO = function () {
                            this.onBUOL &&
                                this.onBUOL.forEach(function (t) {
                                    return t();
                                });
                        }),
                        (e.get = function () {
                            if (
                                (this.isComputing_ && r(32, this.name_, this.derivation),
                                0 !== ae.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                            ) {
                                if ((he(this), Xt(this))) {
                                    var t = ae.trackingContext;
                                    (this.keepAlive_ && !t && (ae.trackingContext = this),
                                        this.trackAndCompute() &&
                                            (function (t) {
                                                t.lowestObserverState_ !== Dt.STALE_ &&
                                                    ((t.lowestObserverState_ = Dt.STALE_),
                                                    t.observers_.forEach(function (e) {
                                                        e.dependenciesState_ === Dt.POSSIBLY_STALE_
                                                            ? (e.dependenciesState_ = Dt.STALE_)
                                                            : e.dependenciesState_ === Dt.UP_TO_DATE_ &&
                                                              (t.lowestObserverState_ = Dt.UP_TO_DATE_);
                                                    }));
                                            })(this),
                                        (ae.trackingContext = t));
                                }
                            } else
                                Xt(this) &&
                                    (this.warnAboutUntrackedRead_(),
                                    le(),
                                    (this.value_ = this.computeValue_(!1)),
                                    de());
                            var e = this.value_;
                            if (Qt(e)) throw e.cause;
                            return e;
                        }),
                        (e.set = function (t) {
                            if (this.setter_) {
                                (this.isRunningSetter_ && r(33, this.name_), (this.isRunningSetter_ = !0));
                                try {
                                    this.setter_.call(this.scope_, t);
                                } finally {
                                    this.isRunningSetter_ = !1;
                                }
                            } else r(34, this.name_);
                        }),
                        (e.trackAndCompute = function () {
                            var t = this.value_,
                                e = this.dependenciesState_ === Dt.NOT_TRACKING_,
                                n = this.computeValue_(!0),
                                r = e || Qt(t) || Qt(n) || !this.equals_(t, n);
                            return (r && (this.value_ = n), r);
                        }),
                        (e.computeValue_ = function (t) {
                            this.isComputing_ = !0;
                            var e,
                                n = Ft(!1);
                            if (t) e = Kt(this, this.derivation, this.scope_);
                            else if (!0 === ae.disableErrorBoundaries) e = this.derivation.call(this.scope_);
                            else
                                try {
                                    e = this.derivation.call(this.scope_);
                                } catch (t) {
                                    e = new qt(t);
                                }
                            return (Ct(n), (this.isComputing_ = !1), e);
                        }),
                        (e.suspend_ = function () {
                            this.keepAlive_ || (Gt(this), (this.value_ = void 0));
                        }),
                        (e.observe_ = function (t, e) {
                            var n = this,
                                r = !0,
                                i = void 0;
                            return Te(function () {
                                var o = n.get();
                                if (!r || e) {
                                    var a = Jt();
                                    (t({
                                        observableKind: 'computed',
                                        debugObjectName: n.name_,
                                        type: pn,
                                        object: n,
                                        newValue: o,
                                        oldValue: i,
                                    }),
                                        Yt(a));
                                }
                                ((r = !1), (i = o));
                            });
                        }),
                        (e.warnAboutUntrackedRead_ = function () {}),
                        (e.toString = function () {
                            return this.name_ + '[' + this.derivation.toString() + ']';
                        }),
                        (e.valueOf = function () {
                            return U(this.get());
                        }),
                        (e[Nt] = function () {
                            return this.valueOf();
                        }),
                        t
                    );
                })(),
                $t = x('ComputedValue', Lt);
            (!(function (t) {
                ((t[(t.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
                    (t[(t.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
                    (t[(t.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
                    (t[(t.STALE_ = 2)] = 'STALE_'));
            })(Dt || (Dt = {})),
                (function (t) {
                    ((t[(t.NONE = 0)] = 'NONE'), (t[(t.LOG = 1)] = 'LOG'), (t[(t.BREAK = 2)] = 'BREAK'));
                })(It || (It = {})));
            var qt = function (t) {
                ((this.cause = void 0), (this.cause = t));
            };
            function Qt(t) {
                return t instanceof qt;
            }
            function Xt(t) {
                switch (t.dependenciesState_) {
                    case Dt.UP_TO_DATE_:
                        return !1;
                    case Dt.NOT_TRACKING_:
                    case Dt.STALE_:
                        return !0;
                    case Dt.POSSIBLY_STALE_:
                        for (var e = te(!0), n = Jt(), r = t.observing_, i = r.length, o = 0; o < i; o++) {
                            var a = r[o];
                            if ($t(a)) {
                                if (ae.disableErrorBoundaries) a.get();
                                else
                                    try {
                                        a.get();
                                    } catch (t) {
                                        return (Yt(n), ee(e), !0);
                                    }
                                if (t.dependenciesState_ === Dt.STALE_) return (Yt(n), ee(e), !0);
                            }
                        }
                        return (ne(t), Yt(n), ee(e), !1);
                }
            }
            function zt() {
                return null !== ae.trackingDerivation;
            }
            function Kt(t, e, n) {
                var r = te(!0);
                (ne(t),
                    (t.newObserving_ = new Array(t.observing_.length + 100)),
                    (t.unboundDepsCount_ = 0),
                    (t.runId_ = ++ae.runId));
                var i,
                    o = ae.trackingDerivation;
                if (((ae.trackingDerivation = t), ae.inBatch++, !0 === ae.disableErrorBoundaries)) i = e.call(n);
                else
                    try {
                        i = e.call(n);
                    } catch (t) {
                        i = new qt(t);
                    }
                return (
                    ae.inBatch--,
                    (ae.trackingDerivation = o),
                    (function (t) {
                        for (
                            var e = t.observing_,
                                n = (t.observing_ = t.newObserving_),
                                r = Dt.UP_TO_DATE_,
                                i = 0,
                                o = t.unboundDepsCount_,
                                a = 0;
                            a < o;
                            a++
                        ) {
                            var s = n[a];
                            (0 === s.diffValue_ && ((s.diffValue_ = 1), i !== a && (n[i] = s), i++),
                                s.dependenciesState_ > r && (r = s.dependenciesState_));
                        }
                        for (n.length = i, t.newObserving_ = null, o = e.length; o--; ) {
                            var u = e[o];
                            (0 === u.diffValue_ && ue(u, t), (u.diffValue_ = 0));
                        }
                        for (; i--; ) {
                            var c = n[i];
                            1 === c.diffValue_ && ((c.diffValue_ = 0), se(c, t));
                        }
                        r !== Dt.UP_TO_DATE_ && ((t.dependenciesState_ = r), t.onBecomeStale_());
                    })(t),
                    ee(r),
                    i
                );
            }
            function Gt(t) {
                var e = t.observing_;
                t.observing_ = [];
                for (var n = e.length; n--; ) ue(e[n], t);
                t.dependenciesState_ = Dt.NOT_TRACKING_;
            }
            function Zt(t) {
                var e = Jt();
                try {
                    return t();
                } finally {
                    Yt(e);
                }
            }
            function Jt() {
                var t = ae.trackingDerivation;
                return ((ae.trackingDerivation = null), t);
            }
            function Yt(t) {
                ae.trackingDerivation = t;
            }
            function te(t) {
                var e = ae.allowStateReads;
                return ((ae.allowStateReads = t), e);
            }
            function ee(t) {
                ae.allowStateReads = t;
            }
            function ne(t) {
                if (t.dependenciesState_ !== Dt.UP_TO_DATE_) {
                    t.dependenciesState_ = Dt.UP_TO_DATE_;
                    for (var e = t.observing_, n = e.length; n--; ) e[n].lowestObserverState_ = Dt.UP_TO_DATE_;
                }
            }
            var re = function () {
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
                ie = !0,
                oe = !1,
                ae = (function () {
                    var t = o();
                    return (
                        t.__mobxInstanceCount > 0 && !t.__mobxGlobals && (ie = !1),
                        t.__mobxGlobals && t.__mobxGlobals.version !== new re().version && (ie = !1),
                        ie
                            ? t.__mobxGlobals
                                ? ((t.__mobxInstanceCount += 1),
                                  t.__mobxGlobals.UNCHANGED || (t.__mobxGlobals.UNCHANGED = {}),
                                  t.__mobxGlobals)
                                : ((t.__mobxInstanceCount = 1), (t.__mobxGlobals = new re()))
                            : (setTimeout(function () {
                                  oe || r(35);
                              }, 1),
                              new re())
                    );
                })();
            function se(t, e) {
                (t.observers_.add(e),
                    t.lowestObserverState_ > e.dependenciesState_ && (t.lowestObserverState_ = e.dependenciesState_));
            }
            function ue(t, e) {
                (t.observers_.delete(e), 0 === t.observers_.size && ce(t));
            }
            function ce(t) {
                !1 === t.isPendingUnobservation_ &&
                    ((t.isPendingUnobservation_ = !0), ae.pendingUnobservations.push(t));
            }
            function le() {
                ae.inBatch++;
            }
            function de() {
                if (0 == --ae.inBatch) {
                    ye();
                    for (var t = ae.pendingUnobservations, e = 0; e < t.length; e++) {
                        var n = t[e];
                        ((n.isPendingUnobservation_ = !1),
                            0 === n.observers_.size &&
                                (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()),
                                n instanceof Lt && n.suspend_()));
                    }
                    ae.pendingUnobservations = [];
                }
            }
            function he(t) {
                var e = ae.trackingDerivation;
                return null !== e
                    ? (e.runId_ !== t.lastAccessedBy_ &&
                          ((t.lastAccessedBy_ = e.runId_),
                          (e.newObserving_[e.unboundDepsCount_++] = t),
                          !t.isBeingObserved_ && ae.trackingContext && ((t.isBeingObserved_ = !0), t.onBO())),
                      !0)
                    : (0 === t.observers_.size && ae.inBatch > 0 && ce(t), !1);
            }
            function fe(t) {
                t.lowestObserverState_ !== Dt.STALE_ &&
                    ((t.lowestObserverState_ = Dt.STALE_),
                    t.observers_.forEach(function (t) {
                        (t.dependenciesState_ === Dt.UP_TO_DATE_ && t.onBecomeStale_(),
                            (t.dependenciesState_ = Dt.STALE_));
                    }));
            }
            var pe = (function () {
                    function t(t, e, n, r) {
                        (void 0 === t && (t = 'Reaction'),
                            void 0 === r && (r = !1),
                            (this.name_ = void 0),
                            (this.onInvalidate_ = void 0),
                            (this.errorHandler_ = void 0),
                            (this.requiresObservable_ = void 0),
                            (this.observing_ = []),
                            (this.newObserving_ = []),
                            (this.dependenciesState_ = Dt.NOT_TRACKING_),
                            (this.diffValue_ = 0),
                            (this.runId_ = 0),
                            (this.unboundDepsCount_ = 0),
                            (this.isDisposed_ = !1),
                            (this.isScheduled_ = !1),
                            (this.isTrackPending_ = !1),
                            (this.isRunning_ = !1),
                            (this.isTracing_ = It.NONE),
                            (this.name_ = t),
                            (this.onInvalidate_ = e),
                            (this.errorHandler_ = n),
                            (this.requiresObservable_ = r));
                    }
                    var e = t.prototype;
                    return (
                        (e.onBecomeStale_ = function () {
                            this.schedule_();
                        }),
                        (e.schedule_ = function () {
                            this.isScheduled_ || ((this.isScheduled_ = !0), ae.pendingReactions.push(this), ye());
                        }),
                        (e.isScheduled = function () {
                            return this.isScheduled_;
                        }),
                        (e.runReaction_ = function () {
                            if (!this.isDisposed_) {
                                (le(), (this.isScheduled_ = !1));
                                var t = ae.trackingContext;
                                if (((ae.trackingContext = this), Xt(this))) {
                                    this.isTrackPending_ = !0;
                                    try {
                                        this.onInvalidate_();
                                    } catch (t) {
                                        this.reportExceptionInDerivation_(t);
                                    }
                                }
                                ((ae.trackingContext = t), de());
                            }
                        }),
                        (e.track = function (t) {
                            if (!this.isDisposed_) {
                                (le(), (this.isRunning_ = !0));
                                var e = ae.trackingContext;
                                ae.trackingContext = this;
                                var n = Kt(this, t, void 0);
                                ((ae.trackingContext = e),
                                    (this.isRunning_ = !1),
                                    (this.isTrackPending_ = !1),
                                    this.isDisposed_ && Gt(this),
                                    Qt(n) && this.reportExceptionInDerivation_(n.cause),
                                    de());
                            }
                        }),
                        (e.reportExceptionInDerivation_ = function (t) {
                            var e = this;
                            if (this.errorHandler_) this.errorHandler_(t, this);
                            else {
                                if (ae.disableErrorBoundaries) throw t;
                                var n = "[mobx] uncaught error in '" + this + "'";
                                (ae.suppressReactionErrors || console.error(n, t),
                                    ae.globalReactionErrorHandlers.forEach(function (n) {
                                        return n(t, e);
                                    }));
                            }
                        }),
                        (e.dispose = function () {
                            this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (le(), Gt(this), de()));
                        }),
                        (e.getDisposer_ = function () {
                            var t = this.dispose.bind(this);
                            return ((t[I] = this), t);
                        }),
                        (e.toString = function () {
                            return 'Reaction[' + this.name_ + ']';
                        }),
                        (e.trace = function (t) {
                            (void 0 === t && (t = !1),
                                (function () {
                                    r('trace() is not available in production builds');
                                    for (var t = !1, e = arguments.length, n = new Array(e), i = 0; i < e; i++)
                                        n[i] = arguments[i];
                                    'boolean' == typeof n[n.length - 1] && (t = n.pop());
                                    var o = en(n);
                                    if (!o)
                                        return r(
                                            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly",
                                        );
                                    (o.isTracing_ === It.NONE &&
                                        console.log("[mobx.trace] '" + o.name_ + "' tracing enabled"),
                                        (o.isTracing_ = t ? It.BREAK : It.LOG));
                                })(this, t));
                        }),
                        t
                    );
                })(),
                ve = function (t) {
                    return t();
                };
            function ye() {
                ae.inBatch > 0 || ae.isRunningReactions || ve(ge);
            }
            function ge() {
                ae.isRunningReactions = !0;
                for (var t = ae.pendingReactions, e = 0; t.length > 0; ) {
                    100 == ++e && (console.error('[mobx] cycle in reaction: ' + t[0]), t.splice(0));
                    for (var n = t.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
                }
                ae.isRunningReactions = !1;
            }
            var me = x('Reaction', pe),
                be = 'action',
                _e = 'autoAction',
                we = G(be),
                Se = G('action.bound', { bound: !0 }),
                Oe = G(_e, { autoAction: !0 }),
                xe = G('autoAction.bound', { autoAction: !0, bound: !0 });
            function We(t) {
                return function (e, n) {
                    return g(e)
                        ? Mt(e.name || '<unnamed action>', e, t)
                        : g(n)
                          ? Mt(e, n, t)
                          : m(n)
                            ? D(e, n, t ? Oe : we)
                            : m(e)
                              ? H(G(t ? _e : be, { name: e, autoAction: t }))
                              : void 0;
                };
            }
            var Re = We(!1);
            Object.assign(Re, we);
            var Ee = We(!0);
            function je(t) {
                return kt(t.name, !1, t, this, void 0);
            }
            function Ue(t) {
                return g(t) && !0 === t.isMobxAction;
            }
            function Te(t, e) {
                var n, r;
                void 0 === e && (e = d);
                var i,
                    o = null != (n = null == (r = e) ? void 0 : r.name) ? n : 'Autorun';
                if (e.scheduler || e.delay) {
                    var a = Pe(e),
                        s = !1;
                    i = new pe(
                        o,
                        function () {
                            s ||
                                ((s = !0),
                                a(function () {
                                    ((s = !1), i.isDisposed_ || i.track(u));
                                }));
                        },
                        e.onError,
                        e.requiresObservable,
                    );
                } else
                    i = new pe(
                        o,
                        function () {
                            this.track(u);
                        },
                        e.onError,
                        e.requiresObservable,
                    );
                function u() {
                    t(i);
                }
                return (i.schedule_(), i.getDisposer_());
            }
            (Object.assign(Ee, Oe), (Re.bound = H(Se)), (Ee.bound = H(xe)));
            var Ae = function (t) {
                return t();
            };
            function Pe(t) {
                return t.scheduler
                    ? t.scheduler
                    : t.delay
                      ? function (e) {
                            return setTimeout(e, t.delay);
                        }
                      : Ae;
            }
            function Be(t, e, n) {
                var r;
                void 0 === n && (n = d);
                var i,
                    o,
                    a,
                    s,
                    u = null != (r = n.name) ? r : 'Reaction',
                    c = Re(
                        u,
                        n.onError
                            ? ((i = n.onError),
                              (o = e),
                              function () {
                                  try {
                                      return o.apply(this, arguments);
                                  } catch (t) {
                                      i.call(this, t);
                                  }
                              })
                            : e,
                    ),
                    l = !n.scheduler && !n.delay,
                    h = Pe(n),
                    f = !0,
                    p = !1,
                    v = n.compareStructural ? Q.structural : n.equals || Q.default,
                    y = new pe(
                        u,
                        function () {
                            f || l ? g() : p || ((p = !0), h(g));
                        },
                        n.onError,
                        n.requiresObservable,
                    );
                function g() {
                    if (((p = !1), !y.isDisposed_)) {
                        var e = !1;
                        (y.track(function () {
                            var n = (function (t, e) {
                                var n = Ft(t);
                                try {
                                    return e();
                                } finally {
                                    Ct(n);
                                }
                            })(!1, function () {
                                return t(y);
                            });
                            ((e = f || !v(a, n)), (s = a), (a = n));
                        }),
                            ((f && n.fireImmediately) || (!f && e)) && c(a, s, y),
                            (f = !1));
                    }
                }
                return (y.schedule_(), y.getDisposer_());
            }
            var Ve = 'onBO';
            function Me(t, e, n) {
                return ke('onBUO', t, e, n);
            }
            function ke(t, e, n, r) {
                var i = 'function' == typeof r ? Yn(e, n) : Yn(e),
                    o = g(r) ? r : n,
                    a = t + 'L';
                return (
                    i[a] ? i[a].add(o) : (i[a] = new Set([o])),
                    function () {
                        var t = i[a];
                        t && (t.delete(o), 0 === t.size && delete i[a]);
                    }
                );
            }
            var Fe = 'always';
            function Ce(t) {
                !0 === t.isolateGlobalState &&
                    (function () {
                        if (
                            ((ae.pendingReactions.length || ae.inBatch || ae.isRunningReactions) && r(36),
                            (oe = !0),
                            ie)
                        ) {
                            var t = o();
                            (0 == --t.__mobxInstanceCount && (t.__mobxGlobals = void 0), (ae = new re()));
                        }
                    })();
                var e,
                    n,
                    i = t.useProxies,
                    a = t.enforceActions;
                if (
                    (void 0 !== i && (ae.useProxies = i === Fe || ('never' !== i && 'undefined' != typeof Proxy)),
                    'ifavailable' === i && (ae.verifyProxies = !0),
                    void 0 !== a)
                ) {
                    var s = a === Fe ? Fe : 'observed' === a;
                    ((ae.enforceActions = s), (ae.allowStateChanges = !0 !== s && s !== Fe));
                }
                ([
                    'computedRequiresReaction',
                    'reactionRequiresObservable',
                    'observableRequiresReaction',
                    'disableErrorBoundaries',
                    'safeDescriptors',
                ].forEach(function (e) {
                    e in t && (ae[e] = !!t[e]);
                }),
                    (ae.allowStateReads = !ae.observableRequiresReaction),
                    t.reactionScheduler &&
                        ((e = t.reactionScheduler),
                        (n = ve),
                        (ve = function (t) {
                            return e(function () {
                                return n(t);
                            });
                        })));
            }
            function Ne(t, e, n, r) {
                var i = A(e),
                    o = Hn(t, r)[I];
                le();
                try {
                    j(i).forEach(function (t) {
                        o.extend_(t, i[t], !n || !(t in n) || n[t]);
                    });
                } finally {
                    de();
                }
                return t;
            }
            function He(t, e) {
                return De(Yn(t, e));
            }
            function De(t) {
                var e,
                    n = { name: t.name_ };
                return (
                    t.observing_ &&
                        t.observing_.length > 0 &&
                        (n.dependencies = ((e = t.observing_), Array.from(new Set(e))).map(De)),
                    n
                );
            }
            var Ie = 0;
            function Le() {
                this.message = 'FLOW_CANCELLED';
            }
            Le.prototype = Object.create(Error.prototype);
            var $e = tt('flow'),
                qe = tt('flow.bound', { bound: !0 }),
                Qe = Object.assign(function (t, e) {
                    if (m(e)) return D(t, e, $e);
                    var n = t,
                        r = n.name || '<unnamed flow>',
                        i = function () {
                            var t,
                                e = this,
                                i = arguments,
                                o = ++Ie,
                                a = Re(r + ' - runid: ' + o + ' - init', n).apply(e, i),
                                s = void 0,
                                u = new Promise(function (e, n) {
                                    var i = 0;
                                    function u(t) {
                                        var e;
                                        s = void 0;
                                        try {
                                            e = Re(r + ' - runid: ' + o + ' - yield ' + i++, a.next).call(a, t);
                                        } catch (t) {
                                            return n(t);
                                        }
                                        l(e);
                                    }
                                    function c(t) {
                                        var e;
                                        s = void 0;
                                        try {
                                            e = Re(r + ' - runid: ' + o + ' - yield ' + i++, a.throw).call(a, t);
                                        } catch (t) {
                                            return n(t);
                                        }
                                        l(e);
                                    }
                                    function l(t) {
                                        if (!g(null == t ? void 0 : t.then))
                                            return t.done ? e(t.value) : (s = Promise.resolve(t.value)).then(u, c);
                                        t.then(l, n);
                                    }
                                    ((t = n), u(void 0));
                                });
                            return (
                                (u.cancel = Re(r + ' - runid: ' + o + ' - cancel', function () {
                                    try {
                                        s && Xe(s);
                                        var e = a.return(void 0),
                                            n = Promise.resolve(e.value);
                                        (n.then(y, y), Xe(n), t(new Le()));
                                    } catch (e) {
                                        t(e);
                                    }
                                })),
                                u
                            );
                        };
                    return ((i.isMobXFlow = !0), i);
                }, $e);
            function Xe(t) {
                g(t.cancel) && t.cancel();
            }
            function ze(t) {
                return !0 === (null == t ? void 0 : t.isMobXFlow);
            }
            function Ke(t, e) {
                if (void 0 === e) return $t(t);
                if (!1 === Ln(t)) return !1;
                if (!t[I].values_.has(e)) return !1;
                var n = Yn(t, e);
                return $t(n);
            }
            function Ge(t) {
                return Ke(t);
            }
            function Ze(t, e) {
                return Ke(t, e);
            }
            function Je(t) {
                return (function (t, e) {
                    return (
                        !!t &&
                        (void 0 !== e ? !!Ln(t) && t[I].values_.has(e) : Ln(t) || !!t[I] || $(t) || me(t) || $t(t))
                    );
                })(t);
            }
            function Ye(t) {
                return Ln(t)
                    ? t[I].keys_()
                    : Bn(t) || kn(t)
                      ? Array.from(t.keys())
                      : Rn(t)
                        ? t.map(function (t, e) {
                              return e;
                          })
                        : void r(5);
            }
            function tn(t, e, n, r) {
                return g(n)
                    ? (function (t, e, n, r) {
                          return tr(t, e).observe_(n, r);
                      })(t, e, n, r)
                    : (function (t, e, n) {
                          return tr(t).observe_(e, n);
                      })(t, e, n);
            }
            function en(t) {
                switch (t.length) {
                    case 0:
                        return ae.trackingDerivation;
                    case 1:
                        return Yn(t[0]);
                    case 2:
                        return Yn(t[0], t[1]);
                }
            }
            function nn(t, e) {
                (void 0 === e && (e = void 0), le());
                try {
                    return t.apply(e);
                } finally {
                    de();
                }
            }
            function rn(t) {
                return t[I];
            }
            Qe.bound = H(qe);
            var on = {
                has: function (t, e) {
                    return rn(t).has_(e);
                },
                get: function (t, e) {
                    return rn(t).get_(e);
                },
                set: function (t, e, n) {
                    var r;
                    return !!m(e) && (null == (r = rn(t).set_(e, n, !0)) || r);
                },
                deleteProperty: function (t, e) {
                    var n;
                    return !!m(e) && (null == (n = rn(t).delete_(e, !0)) || n);
                },
                defineProperty: function (t, e, n) {
                    var r;
                    return null == (r = rn(t).defineProperty_(e, n)) || r;
                },
                ownKeys: function (t) {
                    return rn(t).ownKeys_();
                },
                preventExtensions: function (t) {
                    r(13);
                },
            };
            function an(t) {
                return void 0 !== t.interceptors_ && t.interceptors_.length > 0;
            }
            function sn(t, e) {
                var n = t.interceptors_ || (t.interceptors_ = []);
                return (
                    n.push(e),
                    v(function () {
                        var t = n.indexOf(e);
                        -1 !== t && n.splice(t, 1);
                    })
                );
            }
            function un(t, e) {
                var n = Jt();
                try {
                    for (
                        var i = [].concat(t.interceptors_ || []), o = 0, a = i.length;
                        o < a && ((e = i[o](e)) && !e.type && r(14), e);
                        o++
                    );
                    return e;
                } finally {
                    Yt(n);
                }
            }
            function cn(t) {
                return void 0 !== t.changeListeners_ && t.changeListeners_.length > 0;
            }
            function ln(t, e) {
                var n = t.changeListeners_ || (t.changeListeners_ = []);
                return (
                    n.push(e),
                    v(function () {
                        var t = n.indexOf(e);
                        -1 !== t && n.splice(t, 1);
                    })
                );
            }
            function dn(t, e) {
                var n = Jt(),
                    r = t.changeListeners_;
                if (r) {
                    for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](e);
                    Yt(n);
                }
            }
            function hn(t, e, n) {
                var r = Hn(t, n)[I];
                le();
                try {
                    (null != e ||
                        (e = (function (t) {
                            return (T(t, N) || S(t, N, V({}, t[N])), t[N]);
                        })(t)),
                        j(e).forEach(function (t) {
                            return r.make_(t, e[t]);
                        }));
                } finally {
                    de();
                }
                return t;
            }
            var fn = 'splice',
                pn = 'update',
                vn = {
                    get: function (t, e) {
                        var n = t[I];
                        return e === I
                            ? n
                            : 'length' === e
                              ? n.getArrayLength_()
                              : 'string' != typeof e || isNaN(e)
                                ? T(mn, e)
                                    ? mn[e]
                                    : t[e]
                                : n.get_(parseInt(e));
                    },
                    set: function (t, e, n) {
                        var r = t[I];
                        return (
                            'length' === e && r.setArrayLength_(n),
                            'symbol' == typeof e || isNaN(e) ? (t[e] = n) : r.set_(parseInt(e), n),
                            !0
                        );
                    },
                    preventExtensions: function () {
                        r(15);
                    },
                },
                yn = (function () {
                    function t(t, e, n, r) {
                        (void 0 === t && (t = 'ObservableArray'),
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
                            (this.atom_ = new L(t)),
                            (this.enhancer_ = function (t, n) {
                                return e(t, n, 'ObservableArray[..]');
                            }));
                    }
                    var e = t.prototype;
                    return (
                        (e.dehanceValue_ = function (t) {
                            return void 0 !== this.dehancer ? this.dehancer(t) : t;
                        }),
                        (e.dehanceValues_ = function (t) {
                            return void 0 !== this.dehancer && t.length > 0 ? t.map(this.dehancer) : t;
                        }),
                        (e.intercept_ = function (t) {
                            return sn(this, t);
                        }),
                        (e.observe_ = function (t, e) {
                            return (
                                void 0 === e && (e = !1),
                                e &&
                                    t({
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
                                ln(this, t)
                            );
                        }),
                        (e.getArrayLength_ = function () {
                            return (this.atom_.reportObserved(), this.values_.length);
                        }),
                        (e.setArrayLength_ = function (t) {
                            ('number' != typeof t || isNaN(t) || t < 0) && r('Out of range: ' + t);
                            var e = this.values_.length;
                            if (t !== e)
                                if (t > e) {
                                    for (var n = new Array(t - e), i = 0; i < t - e; i++) n[i] = void 0;
                                    this.spliceWithArray_(e, 0, n);
                                } else this.spliceWithArray_(t, e - t);
                        }),
                        (e.updateArrayLength_ = function (t, e) {
                            (t !== this.lastKnownLength_ && r(16),
                                (this.lastKnownLength_ += e),
                                this.legacyMode_ && e > 0 && Zn(t + e + 1));
                        }),
                        (e.spliceWithArray_ = function (t, e, n) {
                            var r = this;
                            this.atom_;
                            var i = this.values_.length;
                            if (
                                (void 0 === t ? (t = 0) : t > i ? (t = i) : t < 0 && (t = Math.max(0, i + t)),
                                (e = 1 === arguments.length ? i - t : null == e ? 0 : Math.max(0, Math.min(e, i - t))),
                                void 0 === n && (n = l),
                                an(this))
                            ) {
                                var o = un(this, {
                                    object: this.proxy_,
                                    type: fn,
                                    index: t,
                                    removedCount: e,
                                    added: n,
                                });
                                if (!o) return l;
                                ((e = o.removedCount), (n = o.added));
                            }
                            if (
                                ((n =
                                    0 === n.length
                                        ? n
                                        : n.map(function (t) {
                                              return r.enhancer_(t, void 0);
                                          })),
                                this.legacyMode_)
                            ) {
                                var a = n.length - e;
                                this.updateArrayLength_(i, a);
                            }
                            var s = this.spliceItemsIntoValues_(t, e, n);
                            return (
                                (0 === e && 0 === n.length) || this.notifyArraySplice_(t, n, s),
                                this.dehanceValues_(s)
                            );
                        }),
                        (e.spliceItemsIntoValues_ = function (t, e, n) {
                            var r;
                            if (n.length < 1e4) return (r = this.values_).splice.apply(r, [t, e].concat(n));
                            var i = this.values_.slice(t, t + e),
                                o = this.values_.slice(t + e);
                            this.values_.length += n.length - e;
                            for (var a = 0; a < n.length; a++) this.values_[t + a] = n[a];
                            for (var s = 0; s < o.length; s++) this.values_[t + n.length + s] = o[s];
                            return i;
                        }),
                        (e.notifyArrayChildUpdate_ = function (t, e, n) {
                            var r = !this.owned_ && !1,
                                i = cn(this),
                                o =
                                    i || r
                                        ? {
                                              observableKind: 'array',
                                              object: this.proxy_,
                                              type: pn,
                                              debugObjectName: this.atom_.name_,
                                              index: t,
                                              newValue: e,
                                              oldValue: n,
                                          }
                                        : null;
                            (this.atom_.reportChanged(), i && dn(this, o));
                        }),
                        (e.notifyArraySplice_ = function (t, e, n) {
                            var r = !this.owned_ && !1,
                                i = cn(this),
                                o =
                                    i || r
                                        ? {
                                              observableKind: 'array',
                                              object: this.proxy_,
                                              debugObjectName: this.atom_.name_,
                                              type: fn,
                                              index: t,
                                              removed: n,
                                              added: e,
                                              removedCount: n.length,
                                              addedCount: e.length,
                                          }
                                        : null;
                            (this.atom_.reportChanged(), i && dn(this, o));
                        }),
                        (e.get_ = function (t) {
                            if (t < this.values_.length)
                                return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[t]));
                            console.warn(
                                '[mobx.array] Attempt to read an array index (' +
                                    t +
                                    ') that is out of bounds (' +
                                    this.values_.length +
                                    '). Please check length first. Out of bound indices will not be tracked by MobX',
                            );
                        }),
                        (e.set_ = function (t, e) {
                            var n = this.values_;
                            if (t < n.length) {
                                this.atom_;
                                var i = n[t];
                                if (an(this)) {
                                    var o = un(this, { type: pn, object: this.proxy_, index: t, newValue: e });
                                    if (!o) return;
                                    e = o.newValue;
                                }
                                (e = this.enhancer_(e, i)) !== i && ((n[t] = e), this.notifyArrayChildUpdate_(t, e, i));
                            } else t === n.length ? this.spliceWithArray_(t, 0, [e]) : r(17, t, n.length);
                        }),
                        t
                    );
                })();
            function gn(t, e, n, r) {
                (void 0 === n && (n = 'ObservableArray'), void 0 === r && (r = !1), p());
                var i = new yn(n, e, r, !1);
                O(i.values_, I, i);
                var o = new Proxy(i.values_, vn);
                if (((i.proxy_ = o), t && t.length)) {
                    var a = Ft(!0);
                    (i.spliceWithArray_(0, 0, t), Ct(a));
                }
                return o;
            }
            var mn = {
                clear: function () {
                    return this.splice(0);
                },
                replace: function (t) {
                    var e = this[I];
                    return e.spliceWithArray_(0, e.values_.length, t);
                },
                toJSON: function () {
                    return this.slice();
                },
                splice: function (t, e) {
                    for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
                        r[i - 2] = arguments[i];
                    var o = this[I];
                    switch (arguments.length) {
                        case 0:
                            return [];
                        case 1:
                            return o.spliceWithArray_(t);
                        case 2:
                            return o.spliceWithArray_(t, e);
                    }
                    return o.spliceWithArray_(t, e, r);
                },
                spliceWithArray: function (t, e, n) {
                    return this[I].spliceWithArray_(t, e, n);
                },
                push: function () {
                    for (var t = this[I], e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                        n[r] = arguments[r];
                    return (t.spliceWithArray_(t.values_.length, 0, n), t.values_.length);
                },
                pop: function () {
                    return this.splice(Math.max(this[I].values_.length - 1, 0), 1)[0];
                },
                shift: function () {
                    return this.splice(0, 1)[0];
                },
                unshift: function () {
                    for (var t = this[I], e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                        n[r] = arguments[r];
                    return (t.spliceWithArray_(0, 0, n), t.values_.length);
                },
                reverse: function () {
                    return (ae.trackingDerivation && r(37, 'reverse'), this.replace(this.slice().reverse()), this);
                },
                sort: function () {
                    ae.trackingDerivation && r(37, 'sort');
                    var t = this.slice();
                    return (t.sort.apply(t, arguments), this.replace(t), this);
                },
                remove: function (t) {
                    var e = this[I],
                        n = e.dehanceValues_(e.values_).indexOf(t);
                    return n > -1 && (this.splice(n, 1), !0);
                },
            };
            function bn(t, e) {
                'function' == typeof Array.prototype[t] && (mn[t] = e(t));
            }
            function _n(t) {
                return function () {
                    var e = this[I];
                    e.atom_.reportObserved();
                    var n = e.dehanceValues_(e.values_);
                    return n[t].apply(n, arguments);
                };
            }
            function wn(t) {
                return function (e, n) {
                    var r = this,
                        i = this[I];
                    return (
                        i.atom_.reportObserved(),
                        i.dehanceValues_(i.values_)[t](function (t, i) {
                            return e.call(n, t, i, r);
                        })
                    );
                };
            }
            function Sn(t) {
                return function () {
                    var e = this,
                        n = this[I];
                    n.atom_.reportObserved();
                    var r = n.dehanceValues_(n.values_),
                        i = arguments[0];
                    return (
                        (arguments[0] = function (t, n, r) {
                            return i(t, n, r, e);
                        }),
                        r[t].apply(r, arguments)
                    );
                };
            }
            (bn('concat', _n),
                bn('flat', _n),
                bn('includes', _n),
                bn('indexOf', _n),
                bn('join', _n),
                bn('lastIndexOf', _n),
                bn('slice', _n),
                bn('toString', _n),
                bn('toLocaleString', _n),
                bn('every', wn),
                bn('filter', wn),
                bn('find', wn),
                bn('findIndex', wn),
                bn('flatMap', wn),
                bn('forEach', wn),
                bn('map', wn),
                bn('some', wn),
                bn('reduce', Sn),
                bn('reduceRight', Sn));
            var On,
                xn,
                Wn = x('ObservableArrayAdministration', yn);
            function Rn(t) {
                return b(t) && Wn(t[I]);
            }
            var En = {},
                jn = 'add',
                Un = 'delete';
            ((On = Symbol.iterator), (xn = Symbol.toStringTag));
            var Tn,
                An,
                Pn = (function () {
                    function t(t, e, n) {
                        (void 0 === e && (e = X),
                            void 0 === n && (n = 'ObservableMap'),
                            (this.enhancer_ = void 0),
                            (this.name_ = void 0),
                            (this[I] = En),
                            (this.data_ = void 0),
                            (this.hasMap_ = void 0),
                            (this.keysAtom_ = void 0),
                            (this.interceptors_ = void 0),
                            (this.changeListeners_ = void 0),
                            (this.dehancer = void 0),
                            (this.enhancer_ = e),
                            (this.name_ = n),
                            g(Map) || r(18),
                            (this.keysAtom_ = q('ObservableMap.keys()')),
                            (this.data_ = new Map()),
                            (this.hasMap_ = new Map()),
                            this.merge(t));
                    }
                    var e = t.prototype;
                    return (
                        (e.has_ = function (t) {
                            return this.data_.has(t);
                        }),
                        (e.has = function (t) {
                            var e = this;
                            if (!ae.trackingDerivation) return this.has_(t);
                            var n = this.hasMap_.get(t);
                            if (!n) {
                                var r = (n = new Ht(this.has_(t), z, 'ObservableMap.key?', !1));
                                (this.hasMap_.set(t, r),
                                    Me(r, function () {
                                        return e.hasMap_.delete(t);
                                    }));
                            }
                            return n.get();
                        }),
                        (e.set = function (t, e) {
                            var n = this.has_(t);
                            if (an(this)) {
                                var r = un(this, { type: n ? pn : jn, object: this, newValue: e, name: t });
                                if (!r) return this;
                                e = r.newValue;
                            }
                            return (n ? this.updateValue_(t, e) : this.addValue_(t, e), this);
                        }),
                        (e.delete = function (t) {
                            var e = this;
                            if ((this.keysAtom_, an(this) && !un(this, { type: Un, object: this, name: t }))) return !1;
                            if (this.has_(t)) {
                                var n = cn(this),
                                    r = n
                                        ? {
                                              observableKind: 'map',
                                              debugObjectName: this.name_,
                                              type: Un,
                                              object: this,
                                              oldValue: this.data_.get(t).value_,
                                              name: t,
                                          }
                                        : null;
                                return (
                                    nn(function () {
                                        var n;
                                        (e.keysAtom_.reportChanged(),
                                            null == (n = e.hasMap_.get(t)) || n.setNewValue_(!1),
                                            e.data_.get(t).setNewValue_(void 0),
                                            e.data_.delete(t));
                                    }),
                                    n && dn(this, r),
                                    !0
                                );
                            }
                            return !1;
                        }),
                        (e.updateValue_ = function (t, e) {
                            var n = this.data_.get(t);
                            if ((e = n.prepareNewValue_(e)) !== ae.UNCHANGED) {
                                var r = cn(this),
                                    i = r
                                        ? {
                                              observableKind: 'map',
                                              debugObjectName: this.name_,
                                              type: pn,
                                              object: this,
                                              oldValue: n.value_,
                                              name: t,
                                              newValue: e,
                                          }
                                        : null;
                                (n.setNewValue_(e), r && dn(this, i));
                            }
                        }),
                        (e.addValue_ = function (t, e) {
                            var n = this;
                            (this.keysAtom_,
                                nn(function () {
                                    var r,
                                        i = new Ht(e, n.enhancer_, 'ObservableMap.key', !1);
                                    (n.data_.set(t, i),
                                        (e = i.value_),
                                        null == (r = n.hasMap_.get(t)) || r.setNewValue_(!0),
                                        n.keysAtom_.reportChanged());
                                }));
                            var r = cn(this),
                                i = r
                                    ? {
                                          observableKind: 'map',
                                          debugObjectName: this.name_,
                                          type: jn,
                                          object: this,
                                          name: t,
                                          newValue: e,
                                      }
                                    : null;
                            r && dn(this, i);
                        }),
                        (e.get = function (t) {
                            return this.has(t)
                                ? this.dehanceValue_(this.data_.get(t).get())
                                : this.dehanceValue_(void 0);
                        }),
                        (e.dehanceValue_ = function (t) {
                            return void 0 !== this.dehancer ? this.dehancer(t) : t;
                        }),
                        (e.keys = function () {
                            return (this.keysAtom_.reportObserved(), this.data_.keys());
                        }),
                        (e.values = function () {
                            var t = this,
                                e = this.keys();
                            return ar({
                                next: function () {
                                    var n = e.next(),
                                        r = n.done,
                                        i = n.value;
                                    return { done: r, value: r ? void 0 : t.get(i) };
                                },
                            });
                        }),
                        (e.entries = function () {
                            var t = this,
                                e = this.keys();
                            return ar({
                                next: function () {
                                    var n = e.next(),
                                        r = n.done,
                                        i = n.value;
                                    return { done: r, value: r ? void 0 : [i, t.get(i)] };
                                },
                            });
                        }),
                        (e[On] = function () {
                            return this.entries();
                        }),
                        (e.forEach = function (t, e) {
                            for (var n, r = C(this); !(n = r()).done; ) {
                                var i = n.value,
                                    o = i[0],
                                    a = i[1];
                                t.call(e, a, o, this);
                            }
                        }),
                        (e.merge = function (t) {
                            var e = this;
                            return (
                                Bn(t) && (t = new Map(t)),
                                nn(function () {
                                    _(t)
                                        ? (function (t) {
                                              var e = Object.keys(t);
                                              if (!E) return e;
                                              var n = Object.getOwnPropertySymbols(t);
                                              return n.length
                                                  ? [].concat(
                                                        e,
                                                        n.filter(function (e) {
                                                            return c.propertyIsEnumerable.call(t, e);
                                                        }),
                                                    )
                                                  : e;
                                          })(t).forEach(function (n) {
                                              return e.set(n, t[n]);
                                          })
                                        : Array.isArray(t)
                                          ? t.forEach(function (t) {
                                                var n = t[0],
                                                    r = t[1];
                                                return e.set(n, r);
                                            })
                                          : W(t)
                                            ? (t.constructor !== Map && r(19, t),
                                              t.forEach(function (t, n) {
                                                  return e.set(n, t);
                                              }))
                                            : null != t && r(20, t);
                                }),
                                this
                            );
                        }),
                        (e.clear = function () {
                            var t = this;
                            nn(function () {
                                Zt(function () {
                                    for (var e, n = C(t.keys()); !(e = n()).done; ) {
                                        var r = e.value;
                                        t.delete(r);
                                    }
                                });
                            });
                        }),
                        (e.replace = function (t) {
                            var e = this;
                            return (
                                nn(function () {
                                    for (
                                        var n,
                                            i = (function (t) {
                                                if (W(t) || Bn(t)) return t;
                                                if (Array.isArray(t)) return new Map(t);
                                                if (_(t)) {
                                                    var e = new Map();
                                                    for (var n in t) e.set(n, t[n]);
                                                    return e;
                                                }
                                                return r(21, t);
                                            })(t),
                                            o = new Map(),
                                            a = !1,
                                            s = C(e.data_.keys());
                                        !(n = s()).done;

                                    ) {
                                        var u = n.value;
                                        if (!i.has(u))
                                            if (e.delete(u)) a = !0;
                                            else {
                                                var c = e.data_.get(u);
                                                o.set(u, c);
                                            }
                                    }
                                    for (var l, d = C(i.entries()); !(l = d()).done; ) {
                                        var h = l.value,
                                            f = h[0],
                                            p = h[1],
                                            v = e.data_.has(f);
                                        if ((e.set(f, p), e.data_.has(f))) {
                                            var y = e.data_.get(f);
                                            (o.set(f, y), v || (a = !0));
                                        }
                                    }
                                    if (!a)
                                        if (e.data_.size !== o.size) e.keysAtom_.reportChanged();
                                        else
                                            for (
                                                var g = e.data_.keys(), m = o.keys(), b = g.next(), w = m.next();
                                                !b.done;

                                            ) {
                                                if (b.value !== w.value) {
                                                    e.keysAtom_.reportChanged();
                                                    break;
                                                }
                                                ((b = g.next()), (w = m.next()));
                                            }
                                    e.data_ = o;
                                }),
                                this
                            );
                        }),
                        (e.toString = function () {
                            return '[object ObservableMap]';
                        }),
                        (e.toJSON = function () {
                            return Array.from(this);
                        }),
                        (e.observe_ = function (t, e) {
                            return ln(this, t);
                        }),
                        (e.intercept_ = function (t) {
                            return sn(this, t);
                        }),
                        B(t, [
                            {
                                key: 'size',
                                get: function () {
                                    return (this.keysAtom_.reportObserved(), this.data_.size);
                                },
                            },
                            {
                                key: xn,
                                get: function () {
                                    return 'Map';
                                },
                            },
                        ]),
                        t
                    );
                })(),
                Bn = x('ObservableMap', Pn),
                Vn = {};
            ((Tn = Symbol.iterator), (An = Symbol.toStringTag));
            var Mn = (function () {
                    function t(t, e, n) {
                        (void 0 === e && (e = X),
                            void 0 === n && (n = 'ObservableSet'),
                            (this.name_ = void 0),
                            (this[I] = Vn),
                            (this.data_ = new Set()),
                            (this.atom_ = void 0),
                            (this.changeListeners_ = void 0),
                            (this.interceptors_ = void 0),
                            (this.dehancer = void 0),
                            (this.enhancer_ = void 0),
                            (this.name_ = n),
                            g(Set) || r(22),
                            (this.atom_ = q(this.name_)),
                            (this.enhancer_ = function (t, r) {
                                return e(t, r, n);
                            }),
                            t && this.replace(t));
                    }
                    var e = t.prototype;
                    return (
                        (e.dehanceValue_ = function (t) {
                            return void 0 !== this.dehancer ? this.dehancer(t) : t;
                        }),
                        (e.clear = function () {
                            var t = this;
                            nn(function () {
                                Zt(function () {
                                    for (var e, n = C(t.data_.values()); !(e = n()).done; ) {
                                        var r = e.value;
                                        t.delete(r);
                                    }
                                });
                            });
                        }),
                        (e.forEach = function (t, e) {
                            for (var n, r = C(this); !(n = r()).done; ) {
                                var i = n.value;
                                t.call(e, i, i, this);
                            }
                        }),
                        (e.add = function (t) {
                            var e = this;
                            if ((this.atom_, an(this) && !un(this, { type: jn, object: this, newValue: t })))
                                return this;
                            if (!this.has(t)) {
                                nn(function () {
                                    (e.data_.add(e.enhancer_(t, void 0)), e.atom_.reportChanged());
                                });
                                var n = cn(this),
                                    r = n
                                        ? {
                                              observableKind: 'set',
                                              debugObjectName: this.name_,
                                              type: jn,
                                              object: this,
                                              newValue: t,
                                          }
                                        : null;
                                n && dn(this, r);
                            }
                            return this;
                        }),
                        (e.delete = function (t) {
                            var e = this;
                            if (an(this) && !un(this, { type: Un, object: this, oldValue: t })) return !1;
                            if (this.has(t)) {
                                var n = cn(this),
                                    r = n
                                        ? {
                                              observableKind: 'set',
                                              debugObjectName: this.name_,
                                              type: Un,
                                              object: this,
                                              oldValue: t,
                                          }
                                        : null;
                                return (
                                    nn(function () {
                                        (e.atom_.reportChanged(), e.data_.delete(t));
                                    }),
                                    n && dn(this, r),
                                    !0
                                );
                            }
                            return !1;
                        }),
                        (e.has = function (t) {
                            return (this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(t)));
                        }),
                        (e.entries = function () {
                            var t = 0,
                                e = Array.from(this.keys()),
                                n = Array.from(this.values());
                            return ar({
                                next: function () {
                                    var r = t;
                                    return ((t += 1), r < n.length ? { value: [e[r], n[r]], done: !1 } : { done: !0 });
                                },
                            });
                        }),
                        (e.keys = function () {
                            return this.values();
                        }),
                        (e.values = function () {
                            this.atom_.reportObserved();
                            var t = this,
                                e = 0,
                                n = Array.from(this.data_.values());
                            return ar({
                                next: function () {
                                    return e < n.length ? { value: t.dehanceValue_(n[e++]), done: !1 } : { done: !0 };
                                },
                            });
                        }),
                        (e.replace = function (t) {
                            var e = this;
                            return (
                                kn(t) && (t = new Set(t)),
                                nn(function () {
                                    Array.isArray(t) || R(t)
                                        ? (e.clear(),
                                          t.forEach(function (t) {
                                              return e.add(t);
                                          }))
                                        : null != t && r('Cannot initialize set from ' + t);
                                }),
                                this
                            );
                        }),
                        (e.observe_ = function (t, e) {
                            return ln(this, t);
                        }),
                        (e.intercept_ = function (t) {
                            return sn(this, t);
                        }),
                        (e.toJSON = function () {
                            return Array.from(this);
                        }),
                        (e.toString = function () {
                            return '[object ObservableSet]';
                        }),
                        (e[Tn] = function () {
                            return this.values();
                        }),
                        B(t, [
                            {
                                key: 'size',
                                get: function () {
                                    return (this.atom_.reportObserved(), this.data_.size);
                                },
                            },
                            {
                                key: An,
                                get: function () {
                                    return 'Set';
                                },
                            },
                        ]),
                        t
                    );
                })(),
                kn = x('ObservableSet', Mn),
                Fn = Object.create(null),
                Cn = 'remove',
                Nn = (function () {
                    function t(t, e, n, r) {
                        (void 0 === e && (e = new Map()),
                            void 0 === r && (r = lt),
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
                            (this.target_ = t),
                            (this.values_ = e),
                            (this.name_ = n),
                            (this.defaultAnnotation_ = r),
                            (this.keysAtom_ = new L('ObservableObject.keys')),
                            (this.isPlainObject_ = _(this.target_)));
                    }
                    var e = t.prototype;
                    return (
                        (e.getObservablePropValue_ = function (t) {
                            return this.values_.get(t).get();
                        }),
                        (e.setObservablePropValue_ = function (t, e) {
                            var n = this.values_.get(t);
                            if (n instanceof Lt) return (n.set(e), !0);
                            if (an(this)) {
                                var r = un(this, {
                                    type: pn,
                                    object: this.proxy_ || this.target_,
                                    name: t,
                                    newValue: e,
                                });
                                if (!r) return null;
                                e = r.newValue;
                            }
                            if ((e = n.prepareNewValue_(e)) !== ae.UNCHANGED) {
                                var i = cn(this),
                                    o = i
                                        ? {
                                              type: pn,
                                              observableKind: 'object',
                                              debugObjectName: this.name_,
                                              object: this.proxy_ || this.target_,
                                              oldValue: n.value_,
                                              name: t,
                                              newValue: e,
                                          }
                                        : null;
                                (n.setNewValue_(e), i && dn(this, o));
                            }
                            return !0;
                        }),
                        (e.get_ = function (t) {
                            return (ae.trackingDerivation && !T(this.target_, t) && this.has_(t), this.target_[t]);
                        }),
                        (e.set_ = function (t, e, n) {
                            return (
                                void 0 === n && (n = !1),
                                T(this.target_, t)
                                    ? this.values_.has(t)
                                        ? this.setObservablePropValue_(t, e)
                                        : n
                                          ? Reflect.set(this.target_, t, e)
                                          : ((this.target_[t] = e), !0)
                                    : this.extend_(
                                          t,
                                          { value: e, enumerable: !0, writable: !0, configurable: !0 },
                                          this.defaultAnnotation_,
                                          n,
                                      )
                            );
                        }),
                        (e.has_ = function (t) {
                            if (!ae.trackingDerivation) return t in this.target_;
                            this.pendingKeys_ || (this.pendingKeys_ = new Map());
                            var e = this.pendingKeys_.get(t);
                            return (
                                e ||
                                    ((e = new Ht(t in this.target_, z, 'ObservableObject.key?', !1)),
                                    this.pendingKeys_.set(t, e)),
                                e.get()
                            );
                        }),
                        (e.make_ = function (t, e) {
                            if ((!0 === e && (e = this.defaultAnnotation_), !1 !== e)) {
                                if (!(t in this.target_)) {
                                    var n;
                                    if (null == (n = this.target_[N]) ? void 0 : n[t]) return;
                                    r(1, e.annotationType_, this.name_ + '.' + t.toString());
                                }
                                for (var i = this.target_; i && i !== c; ) {
                                    var o = s(i, t);
                                    if (o) {
                                        var a = e.make_(this, t, o, i);
                                        if (0 === a) return;
                                        if (1 === a) break;
                                    }
                                    i = Object.getPrototypeOf(i);
                                }
                                $n(this, 0, t);
                            }
                        }),
                        (e.extend_ = function (t, e, n, r) {
                            if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                                return this.defineProperty_(t, e, r);
                            var i = n.extend_(this, t, e, r);
                            return (i && $n(this, 0, t), i);
                        }),
                        (e.defineProperty_ = function (t, e, n) {
                            void 0 === n && (n = !1);
                            try {
                                le();
                                var r = this.delete_(t);
                                if (!r) return r;
                                if (an(this)) {
                                    var i = un(this, {
                                        object: this.proxy_ || this.target_,
                                        name: t,
                                        type: jn,
                                        newValue: e.value,
                                    });
                                    if (!i) return null;
                                    var o = i.newValue;
                                    e.value !== o && (e = V({}, e, { value: o }));
                                }
                                if (n) {
                                    if (!Reflect.defineProperty(this.target_, t, e)) return !1;
                                } else u(this.target_, t, e);
                                this.notifyPropertyAddition_(t, e.value);
                            } finally {
                                de();
                            }
                            return !0;
                        }),
                        (e.defineObservableProperty_ = function (t, e, n, r) {
                            void 0 === r && (r = !1);
                            try {
                                le();
                                var i = this.delete_(t);
                                if (!i) return i;
                                if (an(this)) {
                                    var o = un(this, {
                                        object: this.proxy_ || this.target_,
                                        name: t,
                                        type: jn,
                                        newValue: e,
                                    });
                                    if (!o) return null;
                                    e = o.newValue;
                                }
                                var a = In(t),
                                    s = {
                                        configurable: !ae.safeDescriptors || this.isPlainObject_,
                                        enumerable: !0,
                                        get: a.get,
                                        set: a.set,
                                    };
                                if (r) {
                                    if (!Reflect.defineProperty(this.target_, t, s)) return !1;
                                } else u(this.target_, t, s);
                                var c = new Ht(e, n, 'ObservableObject.key', !1);
                                (this.values_.set(t, c), this.notifyPropertyAddition_(t, c.value_));
                            } finally {
                                de();
                            }
                            return !0;
                        }),
                        (e.defineComputedProperty_ = function (t, e, n) {
                            void 0 === n && (n = !1);
                            try {
                                le();
                                var r = this.delete_(t);
                                if (!r) return r;
                                if (
                                    an(this) &&
                                    !un(this, {
                                        object: this.proxy_ || this.target_,
                                        name: t,
                                        type: jn,
                                        newValue: void 0,
                                    })
                                )
                                    return null;
                                (e.name || (e.name = 'ObservableObject.key'),
                                    (e.context = this.proxy_ || this.target_));
                                var i = In(t),
                                    o = {
                                        configurable: !ae.safeDescriptors || this.isPlainObject_,
                                        enumerable: !1,
                                        get: i.get,
                                        set: i.set,
                                    };
                                if (n) {
                                    if (!Reflect.defineProperty(this.target_, t, o)) return !1;
                                } else u(this.target_, t, o);
                                (this.values_.set(t, new Lt(e)), this.notifyPropertyAddition_(t, void 0));
                            } finally {
                                de();
                            }
                            return !0;
                        }),
                        (e.delete_ = function (t, e) {
                            if ((void 0 === e && (e = !1), !T(this.target_, t))) return !0;
                            if (an(this) && !un(this, { object: this.proxy_ || this.target_, name: t, type: Cn }))
                                return null;
                            try {
                                var n, r;
                                le();
                                var i,
                                    o = cn(this),
                                    a = this.values_.get(t),
                                    u = void 0;
                                if ((!a && o && (u = null == (i = s(this.target_, t)) ? void 0 : i.value), e)) {
                                    if (!Reflect.deleteProperty(this.target_, t)) return !1;
                                } else delete this.target_[t];
                                if (
                                    (a && (this.values_.delete(t), a instanceof Ht && (u = a.value_), fe(a)),
                                    this.keysAtom_.reportChanged(),
                                    null == (n = this.pendingKeys_) ||
                                        null == (r = n.get(t)) ||
                                        r.set(t in this.target_),
                                    o)
                                ) {
                                    var c = {
                                        type: Cn,
                                        observableKind: 'object',
                                        object: this.proxy_ || this.target_,
                                        debugObjectName: this.name_,
                                        oldValue: u,
                                        name: t,
                                    };
                                    o && dn(this, c);
                                }
                            } finally {
                                de();
                            }
                            return !0;
                        }),
                        (e.observe_ = function (t, e) {
                            return ln(this, t);
                        }),
                        (e.intercept_ = function (t) {
                            return sn(this, t);
                        }),
                        (e.notifyPropertyAddition_ = function (t, e) {
                            var n,
                                r,
                                i = cn(this);
                            if (i) {
                                var o = i
                                    ? {
                                          type: jn,
                                          observableKind: 'object',
                                          debugObjectName: this.name_,
                                          object: this.proxy_ || this.target_,
                                          name: t,
                                          newValue: e,
                                      }
                                    : null;
                                i && dn(this, o);
                            }
                            (null == (n = this.pendingKeys_) || null == (r = n.get(t)) || r.set(!0),
                                this.keysAtom_.reportChanged());
                        }),
                        (e.ownKeys_ = function () {
                            return (this.keysAtom_.reportObserved(), j(this.target_));
                        }),
                        (e.keys_ = function () {
                            return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
                        }),
                        t
                    );
                })();
            function Hn(t, e) {
                var n;
                if (T(t, I)) return t;
                var r = null != (n = null == e ? void 0 : e.name) ? n : 'ObservableObject',
                    i = new Nn(
                        t,
                        new Map(),
                        String(r),
                        (function (t) {
                            var e;
                            return t ? (null != (e = t.defaultDecorator) ? e : dt(t)) : void 0;
                        })(e),
                    );
                return (S(t, I, i), t);
            }
            var Dn = x('ObservableObjectAdministration', Nn);
            function In(t) {
                return (
                    Fn[t] ||
                    (Fn[t] = {
                        get: function () {
                            return this[I].getObservablePropValue_(t);
                        },
                        set: function (e) {
                            return this[I].setObservablePropValue_(t, e);
                        },
                    })
                );
            }
            function Ln(t) {
                return !!b(t) && Dn(t[I]);
            }
            function $n(t, e, n) {
                var r;
                null == (r = t.target_[N]) || delete r[n];
            }
            var qn,
                Qn,
                Xn = 0,
                zn = function () {};
            ((qn = zn),
                (Qn = Array.prototype),
                Object.setPrototypeOf
                    ? Object.setPrototypeOf(qn.prototype, Qn)
                    : void 0 !== qn.prototype.__proto__
                      ? (qn.prototype.__proto__ = Qn)
                      : (qn.prototype = Qn));
            var Kn = (function (t) {
                function e(e, n, r, i) {
                    var o;
                    (void 0 === r && (r = 'ObservableArray'), void 0 === i && (i = !1), (o = t.call(this) || this));
                    var a = new yn(r, n, i, !0);
                    if (((a.proxy_ = k(o)), O(k(o), I, a), e && e.length)) {
                        var s = Ft(!0);
                        (o.spliceWithArray(0, 0, e), Ct(s));
                    }
                    return o;
                }
                M(e, t);
                var n = e.prototype;
                return (
                    (n.concat = function () {
                        this[I].atom_.reportObserved();
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        return Array.prototype.concat.apply(
                            this.slice(),
                            e.map(function (t) {
                                return Rn(t) ? t.slice() : t;
                            }),
                        );
                    }),
                    (n[Symbol.iterator] = function () {
                        var t = this,
                            e = 0;
                        return ar({
                            next: function () {
                                return e < t.length ? { value: t[e++], done: !1 } : { done: !0, value: void 0 };
                            },
                        });
                    }),
                    B(e, [
                        {
                            key: 'length',
                            get: function () {
                                return this[I].getArrayLength_();
                            },
                            set: function (t) {
                                this[I].setArrayLength_(t);
                            },
                        },
                        {
                            key: Symbol.toStringTag,
                            get: function () {
                                return 'Array';
                            },
                        },
                    ]),
                    e
                );
            })(zn);
            function Gn(t) {
                u(
                    Kn.prototype,
                    '' + t,
                    (function (t) {
                        return {
                            enumerable: !1,
                            configurable: !0,
                            get: function () {
                                return this[I].get_(t);
                            },
                            set: function (e) {
                                this[I].set_(t, e);
                            },
                        };
                    })(t),
                );
            }
            function Zn(t) {
                if (t > Xn) {
                    for (var e = Xn; e < t + 100; e++) Gn(e);
                    Xn = t;
                }
            }
            function Jn(t, e, n) {
                return new Kn(t, e, n);
            }
            function Yn(t, e) {
                if ('object' == typeof t && null !== t) {
                    if (Rn(t)) return (void 0 !== e && r(23), t[I].atom_);
                    if (kn(t)) return t[I];
                    if (Bn(t)) {
                        if (void 0 === e) return t.keysAtom_;
                        var n = t.data_.get(e) || t.hasMap_.get(e);
                        return (n || r(25, e, er(t)), n);
                    }
                    if (Ln(t)) {
                        if (!e) return r(26);
                        var i = t[I].values_.get(e);
                        return (i || r(27, e, er(t)), i);
                    }
                    if ($(t) || $t(t) || me(t)) return t;
                } else if (g(t) && me(t[I])) return t[I];
                r(28);
            }
            function tr(t, e) {
                return (
                    t || r(29),
                    void 0 !== e
                        ? tr(Yn(t, e))
                        : $(t) || $t(t) || me(t) || Bn(t) || kn(t)
                          ? t
                          : t[I]
                            ? t[I]
                            : void r(24, t)
                );
            }
            function er(t, e) {
                var n;
                if (void 0 !== e) n = Yn(t, e);
                else {
                    if (Ue(t)) return t.name;
                    n = Ln(t) || Bn(t) || kn(t) ? tr(t) : Yn(t);
                }
                return n.name_;
            }
            (Object.entries(mn).forEach(function (t) {
                var e = t[0],
                    n = t[1];
                'concat' !== e && S(Kn.prototype, e, n);
            }),
                Zn(1e3));
            var nr = c.toString;
            function rr(t, e, n) {
                return (void 0 === n && (n = -1), ir(t, e, n));
            }
            function ir(t, e, n, r, i) {
                if (t === e) return 0 !== t || 1 / t == 1 / e;
                if (null == t || null == e) return !1;
                if (t != t) return e != e;
                var o = typeof t;
                if (!g(o) && 'object' !== o && 'object' != typeof e) return !1;
                var a = nr.call(t);
                if (a !== nr.call(e)) return !1;
                switch (a) {
                    case '[object RegExp]':
                    case '[object String]':
                        return '' + t == '' + e;
                    case '[object Number]':
                        return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
                    case '[object Date]':
                    case '[object Boolean]':
                        return +t == +e;
                    case '[object Symbol]':
                        return 'undefined' != typeof Symbol && Symbol.valueOf.call(t) === Symbol.valueOf.call(e);
                    case '[object Map]':
                    case '[object Set]':
                        n >= 0 && n++;
                }
                ((t = or(t)), (e = or(e)));
                var s = '[object Array]' === a;
                if (!s) {
                    if ('object' != typeof t || 'object' != typeof e) return !1;
                    var u = t.constructor,
                        c = e.constructor;
                    if (
                        u !== c &&
                        !(g(u) && u instanceof u && g(c) && c instanceof c) &&
                        'constructor' in t &&
                        'constructor' in e
                    )
                        return !1;
                }
                if (0 === n) return !1;
                (n < 0 && (n = -1), (i = i || []));
                for (var l = (r = r || []).length; l--; ) if (r[l] === t) return i[l] === e;
                if ((r.push(t), i.push(e), s)) {
                    if ((l = t.length) !== e.length) return !1;
                    for (; l--; ) if (!ir(t[l], e[l], n - 1, r, i)) return !1;
                } else {
                    var d,
                        h = Object.keys(t);
                    if (((l = h.length), Object.keys(e).length !== l)) return !1;
                    for (; l--; ) if (!T(e, (d = h[l])) || !ir(t[d], e[d], n - 1, r, i)) return !1;
                }
                return (r.pop(), i.pop(), !0);
            }
            function or(t) {
                return Rn(t) ? t.slice() : W(t) || Bn(t) || R(t) || kn(t) ? Array.from(t.entries()) : t;
            }
            function ar(t) {
                return ((t[Symbol.iterator] = sr), t);
            }
            function sr() {
                return this;
            }
            (['Symbol', 'Map', 'Set'].forEach(function (t) {
                void 0 === o()[t] && r("MobX requires global '" + t + "' to be available or polyfilled");
            }),
                'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
                    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
                        spy: function (t) {
                            return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
                        },
                        extras: { getDebugName: er },
                        $mobx: I,
                    }));
        },
        7030: (t, e, n) => {
            'use strict';
            n.d(e, { animated: () => r.animated });
            var r = n(7006);
            n.o(r, 'useSpring') &&
                n.d(e, {
                    useSpring: function () {
                        return r.useSpring;
                    },
                });
        },
        8475: (t, e, n) => {
            'use strict';
            n.d(e, { Z: () => f });
            var r = n(7669),
                i = n(4361),
                o = n(8846),
                a = n(4070);
            function s(t, e) {
                return t
                    .replace(new RegExp('(^|\\s)' + e + '(?:\\s|$)', 'g'), '$1')
                    .replace(/\s+/g, ' ')
                    .replace(/^\s*|\s*$/g, '');
            }
            var u = n(7363),
                c = n.n(u),
                l = n(7029),
                d = function (t, e) {
                    return (
                        t &&
                        e &&
                        e.split(' ').forEach(function (e) {
                            return (
                                (r = e),
                                void ((n = t).classList
                                    ? n.classList.remove(r)
                                    : 'string' == typeof n.className
                                      ? (n.className = s(n.className, r))
                                      : n.setAttribute('class', s((n.className && n.className.baseVal) || '', r)))
                            );
                            var n, r;
                        })
                    );
                },
                h = (function (t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (
                            ((e = t.call.apply(t, [this].concat(r)) || this).appliedClasses = {
                                appear: {},
                                enter: {},
                                exit: {},
                            }),
                            (e.onEnter = function (t, n) {
                                (e.removeClasses(t, 'exit'),
                                    e.addClass(t, n ? 'appear' : 'enter', 'base'),
                                    e.props.onEnter && e.props.onEnter(t, n));
                            }),
                            (e.onEntering = function (t, n) {
                                var r = n ? 'appear' : 'enter';
                                (e.addClass(t, r, 'active'), e.props.onEntering && e.props.onEntering(t, n));
                            }),
                            (e.onEntered = function (t, n) {
                                var r = n ? 'appear' : 'enter';
                                (e.removeClasses(t, r),
                                    e.addClass(t, r, 'done'),
                                    e.props.onEntered && e.props.onEntered(t, n));
                            }),
                            (e.onExit = function (t) {
                                (e.removeClasses(t, 'appear'),
                                    e.removeClasses(t, 'enter'),
                                    e.addClass(t, 'exit', 'base'),
                                    e.props.onExit && e.props.onExit(t));
                            }),
                            (e.onExiting = function (t) {
                                (e.addClass(t, 'exit', 'active'), e.props.onExiting && e.props.onExiting(t));
                            }),
                            (e.onExited = function (t) {
                                (e.removeClasses(t, 'exit'),
                                    e.addClass(t, 'exit', 'done'),
                                    e.props.onExited && e.props.onExited(t));
                            }),
                            (e.getClassNames = function (t) {
                                var n = e.props.classNames,
                                    r = 'string' == typeof n,
                                    i = r ? (r && n ? n + '-' : '') + t : n[t];
                                return {
                                    baseClassName: i,
                                    activeClassName: r ? i + '-active' : n[t + 'Active'],
                                    doneClassName: r ? i + '-done' : n[t + 'Done'],
                                };
                            }),
                            e
                        );
                    }
                    (0, o.Z)(e, t);
                    var n = e.prototype;
                    return (
                        (n.addClass = function (t, e, n) {
                            var r = this.getClassNames(e)[n + 'ClassName'];
                            ('appear' === e && 'done' === n && (r += ' ' + this.getClassNames('enter').doneClassName),
                                'active' === n && t && t.scrollTop,
                                (this.appliedClasses[e][n] = r),
                                (function (t, e) {
                                    t &&
                                        e &&
                                        e.split(' ').forEach(function (e) {
                                            return (
                                                (r = e),
                                                void ((n = t).classList
                                                    ? n.classList.add(r)
                                                    : (0, a.Z)(n, r) ||
                                                      ('string' == typeof n.className
                                                          ? (n.className = n.className + ' ' + r)
                                                          : n.setAttribute(
                                                                'class',
                                                                ((n.className && n.className.baseVal) || '') + ' ' + r,
                                                            )))
                                            );
                                            var n, r;
                                        });
                                })(t, r));
                        }),
                        (n.removeClasses = function (t, e) {
                            var n = this.appliedClasses[e],
                                r = n.base,
                                i = n.active,
                                o = n.done;
                            ((this.appliedClasses[e] = {}), r && d(t, r), i && d(t, i), o && d(t, o));
                        }),
                        (n.render = function () {
                            var t = this.props,
                                e = (t.classNames, (0, i.Z)(t, ['classNames']));
                            return c().createElement(
                                l.ZP,
                                (0, r.Z)({}, e, {
                                    onEnter: this.onEnter,
                                    onEntered: this.onEntered,
                                    onEntering: this.onEntering,
                                    onExit: this.onExit,
                                    onExiting: this.onExiting,
                                    onExited: this.onExited,
                                }),
                            );
                        }),
                        e
                    );
                })(c().Component);
            ((h.defaultProps = { classNames: '' }), (h.propTypes = {}));
            const f = h;
        },
        7029: (t, e, n) => {
            'use strict';
            n.d(e, { ZP: () => g });
            var r = n(4361),
                i = n(8846),
                o = n(7363),
                a = n.n(o),
                s = n(1533),
                u = n.n(s);
            var c = n(1507),
                l = 'unmounted',
                d = 'exited',
                h = 'entering',
                f = 'entered',
                p = 'exiting',
                v = (function (t) {
                    function e(e, n) {
                        var r;
                        r = t.call(this, e, n) || this;
                        var i,
                            o = n && !n.isMounting ? e.enter : e.appear;
                        return (
                            (r.appearStatus = null),
                            e.in
                                ? o
                                    ? ((i = d), (r.appearStatus = h))
                                    : (i = f)
                                : (i = e.unmountOnExit || e.mountOnEnter ? l : d),
                            (r.state = { status: i }),
                            (r.nextCallback = null),
                            r
                        );
                    }
                    ((0, i.Z)(e, t),
                        (e.getDerivedStateFromProps = function (t, e) {
                            return t.in && e.status === l ? { status: d } : null;
                        }));
                    var n = e.prototype;
                    return (
                        (n.componentDidMount = function () {
                            this.updateStatus(!0, this.appearStatus);
                        }),
                        (n.componentDidUpdate = function (t) {
                            var e = null;
                            if (t !== this.props) {
                                var n = this.state.status;
                                this.props.in ? n !== h && n !== f && (e = h) : (n !== h && n !== f) || (e = p);
                            }
                            this.updateStatus(!1, e);
                        }),
                        (n.componentWillUnmount = function () {
                            this.cancelNextCallback();
                        }),
                        (n.getTimeouts = function () {
                            var t,
                                e,
                                n,
                                r = this.props.timeout;
                            return (
                                (t = e = n = r),
                                null != r &&
                                    'number' != typeof r &&
                                    ((t = r.exit), (e = r.enter), (n = void 0 !== r.appear ? r.appear : e)),
                                { exit: t, enter: e, appear: n }
                            );
                        }),
                        (n.updateStatus = function (t, e) {
                            if ((void 0 === t && (t = !1), null !== e)) {
                                this.cancelNextCallback();
                                var n = u().findDOMNode(this);
                                e === h ? this.performEnter(n, t) : this.performExit(n);
                            } else this.props.unmountOnExit && this.state.status === d && this.setState({ status: l });
                        }),
                        (n.performEnter = function (t, e) {
                            var n = this,
                                r = this.props.enter,
                                i = this.context ? this.context.isMounting : e,
                                o = this.getTimeouts(),
                                a = i ? o.appear : o.enter;
                            e || r
                                ? (this.props.onEnter(t, i),
                                  this.safeSetState({ status: h }, function () {
                                      (n.props.onEntering(t, i),
                                          n.onTransitionEnd(t, a, function () {
                                              n.safeSetState({ status: f }, function () {
                                                  n.props.onEntered(t, i);
                                              });
                                          }));
                                  }))
                                : this.safeSetState({ status: f }, function () {
                                      n.props.onEntered(t);
                                  });
                        }),
                        (n.performExit = function (t) {
                            var e = this,
                                n = this.props.exit,
                                r = this.getTimeouts();
                            n
                                ? (this.props.onExit(t),
                                  this.safeSetState({ status: p }, function () {
                                      (e.props.onExiting(t),
                                          e.onTransitionEnd(t, r.exit, function () {
                                              e.safeSetState({ status: d }, function () {
                                                  e.props.onExited(t);
                                              });
                                          }));
                                  }))
                                : this.safeSetState({ status: d }, function () {
                                      e.props.onExited(t);
                                  });
                        }),
                        (n.cancelNextCallback = function () {
                            null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
                        }),
                        (n.safeSetState = function (t, e) {
                            ((e = this.setNextCallback(e)), this.setState(t, e));
                        }),
                        (n.setNextCallback = function (t) {
                            var e = this,
                                n = !0;
                            return (
                                (this.nextCallback = function (r) {
                                    n && ((n = !1), (e.nextCallback = null), t(r));
                                }),
                                (this.nextCallback.cancel = function () {
                                    n = !1;
                                }),
                                this.nextCallback
                            );
                        }),
                        (n.onTransitionEnd = function (t, e, n) {
                            this.setNextCallback(n);
                            var r = null == e && !this.props.addEndListener;
                            t && !r
                                ? (this.props.addEndListener && this.props.addEndListener(t, this.nextCallback),
                                  null != e && setTimeout(this.nextCallback, e))
                                : setTimeout(this.nextCallback, 0);
                        }),
                        (n.render = function () {
                            var t = this.state.status;
                            if (t === l) return null;
                            var e = this.props,
                                n = e.children,
                                i = (0, r.Z)(e, ['children']);
                            if (
                                (delete i.in,
                                delete i.mountOnEnter,
                                delete i.unmountOnExit,
                                delete i.appear,
                                delete i.enter,
                                delete i.exit,
                                delete i.timeout,
                                delete i.addEndListener,
                                delete i.onEnter,
                                delete i.onEntering,
                                delete i.onEntered,
                                delete i.onExit,
                                delete i.onExiting,
                                delete i.onExited,
                                'function' == typeof n)
                            )
                                return a().createElement(c.Z.Provider, { value: null }, n(t, i));
                            var o = a().Children.only(n);
                            return a().createElement(c.Z.Provider, { value: null }, a().cloneElement(o, i));
                        }),
                        e
                    );
                })(a().Component);
            function y() {}
            ((v.contextType = c.Z),
                (v.propTypes = {}),
                (v.defaultProps = {
                    in: !1,
                    mountOnEnter: !1,
                    unmountOnExit: !1,
                    appear: !1,
                    enter: !0,
                    exit: !0,
                    onEnter: y,
                    onEntering: y,
                    onEntered: y,
                    onExit: y,
                    onExiting: y,
                    onExited: y,
                }),
                (v.UNMOUNTED = 0),
                (v.EXITED = 1),
                (v.ENTERING = 2),
                (v.ENTERED = 3),
                (v.EXITING = 4));
            const g = v;
        },
        2558: (t, e, n) => {
            'use strict';
            n.d(e, { Z: () => v });
            var r = n(4361),
                i = n(7669),
                o = n(8846);
            function a(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }
            var s = n(7363),
                u = n.n(s),
                c = n(1507);
            function l(t, e) {
                var n = Object.create(null);
                return (
                    t &&
                        s.Children.map(t, function (t) {
                            return t;
                        }).forEach(function (t) {
                            n[t.key] = (function (t) {
                                return e && (0, s.isValidElement)(t) ? e(t) : t;
                            })(t);
                        }),
                    n
                );
            }
            function d(t, e, n) {
                return null != n[e] ? n[e] : t.props[e];
            }
            function h(t, e, n) {
                var r = l(t.children),
                    i = (function (t, e) {
                        function n(n) {
                            return n in e ? e[n] : t[n];
                        }
                        ((t = t || {}), (e = e || {}));
                        var r,
                            i = Object.create(null),
                            o = [];
                        for (var a in t) a in e ? o.length && ((i[a] = o), (o = [])) : o.push(a);
                        var s = {};
                        for (var u in e) {
                            if (i[u])
                                for (r = 0; r < i[u].length; r++) {
                                    var c = i[u][r];
                                    s[i[u][r]] = n(c);
                                }
                            s[u] = n(u);
                        }
                        for (r = 0; r < o.length; r++) s[o[r]] = n(o[r]);
                        return s;
                    })(e, r);
                return (
                    Object.keys(i).forEach(function (o) {
                        var a = i[o];
                        if ((0, s.isValidElement)(a)) {
                            var u = o in e,
                                c = o in r,
                                l = e[o],
                                h = (0, s.isValidElement)(l) && !l.props.in;
                            !c || (u && !h)
                                ? c || !u || h
                                    ? c &&
                                      u &&
                                      (0, s.isValidElement)(l) &&
                                      (i[o] = (0, s.cloneElement)(a, {
                                          onExited: n.bind(null, a),
                                          in: l.props.in,
                                          exit: d(a, 'exit', t),
                                          enter: d(a, 'enter', t),
                                      }))
                                    : (i[o] = (0, s.cloneElement)(a, { in: !1 }))
                                : (i[o] = (0, s.cloneElement)(a, {
                                      onExited: n.bind(null, a),
                                      in: !0,
                                      exit: d(a, 'exit', t),
                                      enter: d(a, 'enter', t),
                                  }));
                        }
                    }),
                    i
                );
            }
            var f =
                    Object.values ||
                    function (t) {
                        return Object.keys(t).map(function (e) {
                            return t[e];
                        });
                    },
                p = (function (t) {
                    function e(e, n) {
                        var r,
                            i = (r = t.call(this, e, n) || this).handleExited.bind(a(a(r)));
                        return ((r.state = { contextValue: { isMounting: !0 }, handleExited: i, firstRender: !0 }), r);
                    }
                    (0, o.Z)(e, t);
                    var n = e.prototype;
                    return (
                        (n.componentDidMount = function () {
                            ((this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } }));
                        }),
                        (n.componentWillUnmount = function () {
                            this.mounted = !1;
                        }),
                        (e.getDerivedStateFromProps = function (t, e) {
                            var n,
                                r,
                                i = e.children,
                                o = e.handleExited;
                            return {
                                children: e.firstRender
                                    ? ((n = t),
                                      (r = o),
                                      l(n.children, function (t) {
                                          return (0, s.cloneElement)(t, {
                                              onExited: r.bind(null, t),
                                              in: !0,
                                              appear: d(t, 'appear', n),
                                              enter: d(t, 'enter', n),
                                              exit: d(t, 'exit', n),
                                          });
                                      }))
                                    : h(t, i, o),
                                firstRender: !1,
                            };
                        }),
                        (n.handleExited = function (t, e) {
                            var n = l(this.props.children);
                            t.key in n ||
                                (t.props.onExited && t.props.onExited(e),
                                this.mounted &&
                                    this.setState(function (e) {
                                        var n = (0, i.Z)({}, e.children);
                                        return (delete n[t.key], { children: n });
                                    }));
                        }),
                        (n.render = function () {
                            var t = this.props,
                                e = t.component,
                                n = t.childFactory,
                                i = (0, r.Z)(t, ['component', 'childFactory']),
                                o = this.state.contextValue,
                                a = f(this.state.children).map(n);
                            return (
                                delete i.appear,
                                delete i.enter,
                                delete i.exit,
                                null === e
                                    ? u().createElement(c.Z.Provider, { value: o }, a)
                                    : u().createElement(c.Z.Provider, { value: o }, u().createElement(e, i, a))
                            );
                        }),
                        e
                    );
                })(u().Component);
            ((p.propTypes = {}),
                (p.defaultProps = {
                    component: 'div',
                    childFactory: function (t) {
                        return t;
                    },
                }));
            const v = p;
        },
        1507: (t, e, n) => {
            'use strict';
            n.d(e, { Z: () => i });
            var r = n(7363);
            const i = n.n(r)().createContext(null);
        },
        3407: (t, e, n) => {
            'use strict';
            n.d(e, { Z: () => i });
            var r = n(7363).useLayoutEffect;
            const i =
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
                    ? r
                    : null;
        },
        1067: (t, e, n) => {
            'use strict';
            if (
                (n.d(e, { f3: () => u, mu: () => s, vk: () => c }),
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                ))
            )
                var r = n(4564);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var i = n(4868);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var o = n(1329);
            function a(t) {
                return {
                    id: t,
                    send: function () {},
                    subscribe: function () {
                        return { unsubscribe: function () {} };
                    },
                    getSnapshot: function () {},
                    toJSON: function () {
                        return { id: t };
                    },
                };
            }
            function s(t, e, n, r) {
                var s,
                    u = (0, i.j)(t.src),
                    c = null === (s = null == e ? void 0 : e.options.services) || void 0 === s ? void 0 : s[u.type],
                    l = t.data ? (0, i.QX)(t.data, n, r) : void 0,
                    d = c
                        ? (function (t, e, n) {
                              var r = a(e);
                              if (((r.deferred = !0), (0, i.O4)(t))) {
                                  var s = (r.state = (0, o.J)(void 0, function () {
                                      return (n ? t.withContext(n) : t).initialState;
                                  }));
                                  r.getSnapshot = function () {
                                      return s;
                                  };
                              }
                              return r;
                          })(c, t.id, l)
                        : a(t.id);
                return ((d.meta = t), d);
            }
            function u(t) {
                return (
                    (function (t) {
                        try {
                            return 'function' == typeof t.send;
                        } catch (t) {
                            return !1;
                        }
                    })(t) && 'id' in t
                );
            }
            function c(t) {
                return (0, r.pi)(
                    {
                        subscribe: function () {
                            return { unsubscribe: function () {} };
                        },
                        id: 'anonymous',
                        getSnapshot: function () {},
                    },
                    t,
                );
            }
        },
        9762: (t, e, n) => {
            'use strict';
            if (
                (n.d(e, { C: () => i }),
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                ))
            )
                var r = n(7697);
            function i(t, e) {
                return new r.n(t, e);
            }
        },
        5516: (t, e, n) => {
            'use strict';
            if (
                (n.d(e, { LW: () => l, ZM: () => h, j1: () => d, j_: () => c }),
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                ))
            )
                var r = n(4564);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var i = n(4988);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var o = n(1024);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var a = n(4868);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var s = n(4243);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var u = n(6457);
            function c(t, e) {
                if (t === e) return !0;
                if (void 0 === t || void 0 === e) return !1;
                if ((0, a.HD)(t) || (0, a.HD)(e)) return t === e;
                var n = (0, a.XP)(t),
                    r = (0, a.XP)(e);
                return (
                    n.length === r.length &&
                    n.every(function (n) {
                        return c(t[n], e[n]);
                    })
                );
            }
            function l(t) {
                return !(0, a.HD)(t) && 'value' in t && 'history' in t;
            }
            function d(t, e) {
                var n = t.exec;
                return (0, r.pi)((0, r.pi)({}, t), {
                    exec:
                        void 0 !== n
                            ? function () {
                                  return n(e.context, e.event, { action: t, state: e, _event: e._event });
                              }
                            : void 0,
                });
            }
            var h =
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
                    ? (function () {
                          function t(t) {
                              var e,
                                  n = this;
                              ((this.actions = []),
                                  (this.activities = i.qP),
                                  (this.meta = {}),
                                  (this.events = []),
                                  (this.value = t.value),
                                  (this.context = t.context),
                                  (this._event = t._event),
                                  (this._sessionid = t._sessionid),
                                  (this.event = this._event.data),
                                  (this.historyValue = t.historyValue),
                                  (this.history = t.history),
                                  (this.actions = t.actions || []),
                                  (this.activities = t.activities || i.qP),
                                  (this.meta = (0, s.xZ)(t.configuration)),
                                  (this.events = t.events || []),
                                  (this.matches = this.matches.bind(this)),
                                  (this.toStrings = this.toStrings.bind(this)),
                                  (this.configuration = t.configuration),
                                  (this.transitions = t.transitions),
                                  (this.children = t.children),
                                  (this.done = !!t.done),
                                  (this.tags =
                                      null !== (e = Array.isArray(t.tags) ? new Set(t.tags) : t.tags) && void 0 !== e
                                          ? e
                                          : new Set()),
                                  (this.machine = t.machine),
                                  Object.defineProperty(this, 'nextEvents', {
                                      get: function () {
                                          return (0, s.nJ)(n.configuration);
                                      },
                                  }));
                          }
                          return (
                              (t.from = function (e, n) {
                                  return e instanceof t
                                      ? e.context !== n
                                          ? new t({
                                                value: e.value,
                                                context: n,
                                                _event: e._event,
                                                _sessionid: null,
                                                historyValue: e.historyValue,
                                                history: e.history,
                                                actions: [],
                                                activities: e.activities,
                                                meta: {},
                                                events: [],
                                                configuration: [],
                                                transitions: [],
                                                children: {},
                                            })
                                          : e
                                      : new t({
                                            value: e,
                                            context: n,
                                            _event: u.bf,
                                            _sessionid: null,
                                            historyValue: void 0,
                                            history: void 0,
                                            actions: [],
                                            activities: void 0,
                                            meta: void 0,
                                            events: [],
                                            configuration: [],
                                            transitions: [],
                                            children: {},
                                        });
                              }),
                              (t.create = function (e) {
                                  return new t(e);
                              }),
                              (t.inert = function (e, n) {
                                  if (e instanceof t) {
                                      if (!e.actions.length) return e;
                                      var r = u.bf;
                                      return new t({
                                          value: e.value,
                                          context: n,
                                          _event: r,
                                          _sessionid: null,
                                          historyValue: e.historyValue,
                                          history: e.history,
                                          activities: e.activities,
                                          configuration: e.configuration,
                                          transitions: [],
                                          children: {},
                                      });
                                  }
                                  return t.from(e, n);
                              }),
                              (t.prototype.toStrings = function (t, e) {
                                  var n = this;
                                  if ((void 0 === t && (t = this.value), void 0 === e && (e = '.'), (0, a.HD)(t)))
                                      return [t];
                                  var i = (0, a.XP)(t);
                                  return i.concat.apply(
                                      i,
                                      (0, r.ev)(
                                          [],
                                          (0, r.CR)(
                                              i.map(function (r) {
                                                  return n.toStrings(t[r], e).map(function (t) {
                                                      return r + e + t;
                                                  });
                                              }),
                                          ),
                                          !1,
                                      ),
                                  );
                              }),
                              (t.prototype.toJSON = function () {
                                  var t = this,
                                      e = (t.configuration, t.transitions, t.tags),
                                      n =
                                          (t.machine,
                                          (0, r._T)(t, ['configuration', 'transitions', 'tags', 'machine']));
                                  return (0, r.pi)((0, r.pi)({}, n), { tags: Array.from(e) });
                              }),
                              (t.prototype.matches = function (t) {
                                  return (0, a.W)(t, this.value);
                              }),
                              (t.prototype.hasTag = function (t) {
                                  return this.tags.has(t);
                              }),
                              (t.prototype.can = function (t) {
                                  var e;
                                  return (
                                      o.M &&
                                          (0, a.ZK)(
                                              !!this.machine,
                                              'state.can(...) used outside of a machine-created State object; this will always return false.',
                                          ),
                                      !!(null === (e = this.machine) || void 0 === e
                                          ? void 0
                                          : e.transition(this, t).changed)
                                  );
                              }),
                              t
                          );
                      })()
                    : null;
        },
        7697: (t, e, n) => {
            'use strict';
            if (
                (n.d(e, { n: () => m }),
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                ))
            )
                var r = n(4564);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var i = n(4988);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var o = n(1024);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var a = n(4868);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var s = n(2937);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var u = n(4243);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var c = n(2689);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var l = n(6457);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var d = n(5516);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var h = n(1067);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var f = n(8732);
            var p = '',
                v = '*',
                y = {},
                g = function (t) {
                    return '#' === t[0];
                },
                m =
                    /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                        n.j,
                    )
                        ? (function () {
                              function t(e, n, s) {
                                  var c,
                                      d = this;
                                  (void 0 === s && (s = 'context' in e ? e.context : void 0),
                                      (this.config = e),
                                      (this._context = s),
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
                                      (this.key =
                                          this.config.key || this.options._key || this.config.id || '(machine)'),
                                      (this.machine = this.parent ? this.parent.machine : this),
                                      (this.path = this.parent ? this.parent.path.concat(this.key) : []),
                                      (this.delimiter =
                                          this.config.delimiter || (this.parent ? this.parent.delimiter : i.iS)),
                                      (this.id =
                                          this.config.id ||
                                          (0, r.ev)([this.machine.key], (0, r.CR)(this.path), !1).join(this.delimiter)),
                                      (this.version = this.parent ? this.parent.version : this.config.version),
                                      (this.type =
                                          this.config.type ||
                                          (this.config.parallel
                                              ? 'parallel'
                                              : this.config.states && (0, a.XP)(this.config.states).length
                                                ? 'compound'
                                                : this.config.history
                                                  ? 'history'
                                                  : 'atomic')),
                                      (this.schema = this.parent
                                          ? this.machine.schema
                                          : null !== (c = this.config.schema) && void 0 !== c
                                            ? c
                                            : {}),
                                      (this.description = this.config.description),
                                      o.M ||
                                          (0, a.ZK)(
                                              !('parallel' in this.config),
                                              'The "parallel" property is deprecated and will be removed in version 4.1. '
                                                  .concat(
                                                      this.config.parallel
                                                          ? "Replace with `type: 'parallel'`"
                                                          : "Use `type: '".concat(this.type, "'`"),
                                                      " in the config for state node '",
                                                  )
                                                  .concat(this.id, "' instead."),
                                          ),
                                      (this.initial = this.config.initial),
                                      (this.states = this.config.states
                                          ? (0, a.Q8)(this.config.states, function (e, n) {
                                                var i,
                                                    o = new t(e, { _parent: d, _key: n });
                                                return (
                                                    Object.assign(
                                                        d.idMap,
                                                        (0, r.pi)((((i = {})[o.id] = o), i), o.idMap),
                                                    ),
                                                    o
                                                );
                                            })
                                          : y));
                                  var h = 0;
                                  (!(function t(e) {
                                      var n, i;
                                      e.order = h++;
                                      try {
                                          for (var o = (0, r.XA)((0, u.G)(e)), a = o.next(); !a.done; a = o.next())
                                              t(a.value);
                                      } catch (t) {
                                          n = { error: t };
                                      } finally {
                                          try {
                                              a && !a.done && (i = o.return) && i.call(o);
                                          } finally {
                                              if (n) throw n.error;
                                          }
                                      }
                                  })(this),
                                      (this.history =
                                          !0 === this.config.history ? 'shallow' : this.config.history || !1),
                                      (this._transient =
                                          !!this.config.always ||
                                          (!!this.config.on &&
                                              (Array.isArray(this.config.on)
                                                  ? this.config.on.some(function (t) {
                                                        return t.event === p;
                                                    })
                                                  : p in this.config.on))),
                                      (this.strict = !!this.config.strict),
                                      (this.onEntry = (0, a.qo)(this.config.entry || this.config.onEntry).map(
                                          function (t) {
                                              return (0, l.Q8)(t);
                                          },
                                      )),
                                      (this.onExit = (0, a.qo)(this.config.exit || this.config.onExit).map(
                                          function (t) {
                                              return (0, l.Q8)(t);
                                          },
                                      )),
                                      (this.meta = this.config.meta),
                                      (this.doneData = 'final' === this.type ? this.config.data : void 0),
                                      (this.invoke = (0, a.qo)(this.config.invoke).map(function (t, e) {
                                          var n, i;
                                          if ((0, a.O4)(t))
                                              return (
                                                  (d.machine.options.services = (0, r.pi)(
                                                      (((n = {})[t.id] = t), n),
                                                      d.machine.options.services,
                                                  )),
                                                  (0, f.H)({ src: t.id, id: t.id })
                                              );
                                          if ((0, a.HD)(t.src))
                                              return (0, f.H)(
                                                  (0, r.pi)((0, r.pi)({}, t), { id: t.id || t.src, src: t.src }),
                                              );
                                          if ((0, a.O4)(t.src) || (0, a.mf)(t.src)) {
                                              var o = ''.concat(d.id, ':invocation[').concat(e, ']');
                                              return (
                                                  (d.machine.options.services = (0, r.pi)(
                                                      (((i = {})[o] = t.src), i),
                                                      d.machine.options.services,
                                                  )),
                                                  (0, f.H)((0, r.pi)((0, r.pi)({ id: o }, t), { src: o }))
                                              );
                                          }
                                          var s = t.src;
                                          return (0, f.H)((0, r.pi)((0, r.pi)({ id: s.type }, t), { src: s }));
                                      })),
                                      (this.activities = (0, a.qo)(this.config.activities)
                                          .concat(this.invoke)
                                          .map(function (t) {
                                              return (0, l.XA)(t);
                                          })),
                                      (this.transition = this.transition.bind(this)),
                                      (this.tags = (0, a.qo)(this.config.tags)));
                              }
                              return (
                                  (t.prototype._init = function () {
                                      this.__cache.transitions ||
                                          (0, u.ac)(this).forEach(function (t) {
                                              return t.on;
                                          });
                                  }),
                                  (t.prototype.withConfig = function (e, n) {
                                      var i = this.options,
                                          o = i.actions,
                                          a = i.activities,
                                          s = i.guards,
                                          u = i.services,
                                          c = i.delays;
                                      return new t(
                                          this.config,
                                          {
                                              actions: (0, r.pi)((0, r.pi)({}, o), e.actions),
                                              activities: (0, r.pi)((0, r.pi)({}, a), e.activities),
                                              guards: (0, r.pi)((0, r.pi)({}, s), e.guards),
                                              services: (0, r.pi)((0, r.pi)({}, u), e.services),
                                              delays: (0, r.pi)((0, r.pi)({}, c), e.delays),
                                          },
                                          null != n ? n : this.context,
                                      );
                                  }),
                                  (t.prototype.withContext = function (e) {
                                      return new t(this.config, this.options, e);
                                  }),
                                  Object.defineProperty(t.prototype, 'context', {
                                      get: function () {
                                          return (0, a.mf)(this._context) ? this._context() : this._context;
                                      },
                                      enumerable: !1,
                                      configurable: !0,
                                  }),
                                  Object.defineProperty(t.prototype, 'definition', {
                                      get: function () {
                                          return {
                                              id: this.id,
                                              key: this.key,
                                              version: this.version,
                                              context: this.context,
                                              type: this.type,
                                              initial: this.initial,
                                              history: this.history,
                                              states: (0, a.Q8)(this.states, function (t) {
                                                  return t.definition;
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
                                  (t.prototype.toJSON = function () {
                                      return this.definition;
                                  }),
                                  Object.defineProperty(t.prototype, 'on', {
                                      get: function () {
                                          if (this.__cache.on) return this.__cache.on;
                                          var t = this.transitions;
                                          return (this.__cache.on = t.reduce(function (t, e) {
                                              return (
                                                  (t[e.eventType] = t[e.eventType] || []),
                                                  t[e.eventType].push(e),
                                                  t
                                              );
                                          }, {}));
                                      },
                                      enumerable: !1,
                                      configurable: !0,
                                  }),
                                  Object.defineProperty(t.prototype, 'after', {
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
                                  Object.defineProperty(t.prototype, 'transitions', {
                                      get: function () {
                                          return (
                                              this.__cache.transitions ||
                                              ((this.__cache.transitions = this.formatTransitions()),
                                              this.__cache.transitions)
                                          );
                                      },
                                      enumerable: !1,
                                      configurable: !0,
                                  }),
                                  (t.prototype.getCandidates = function (t) {
                                      if (this.__cache.candidates[t]) return this.__cache.candidates[t];
                                      var e = t === p,
                                          n = this.transitions.filter(function (n) {
                                              var r = n.eventType === t;
                                              return e ? r : r || n.eventType === v;
                                          });
                                      return ((this.__cache.candidates[t] = n), n);
                                  }),
                                  (t.prototype.getDelayedTransitions = function () {
                                      var t = this,
                                          e = this.config.after;
                                      if (!e) return [];
                                      var n = function (e, n) {
                                          var r = (0, a.mf)(e) ? ''.concat(t.id, ':delay[').concat(n, ']') : e,
                                              i = (0, l.e4)(r, t.id);
                                          return (
                                              t.onEntry.push((0, l.lW)(i, { delay: e })),
                                              t.onExit.push((0, l.al)(i)),
                                              i
                                          );
                                      };
                                      return (
                                          (0, a.kJ)(e)
                                              ? e.map(function (t, e) {
                                                    var i = n(t.delay, e);
                                                    return (0, r.pi)((0, r.pi)({}, t), { event: i });
                                                })
                                              : (0, a.xH)(
                                                    (0, a.XP)(e).map(function (t, i) {
                                                        var o = e[t],
                                                            s = (0, a.HD)(o) ? { target: o } : o,
                                                            u = isNaN(+t) ? t : +t,
                                                            c = n(u, i);
                                                        return (0, a.qo)(s).map(function (t) {
                                                            return (0, r.pi)((0, r.pi)({}, t), { event: c, delay: u });
                                                        });
                                                    }),
                                                )
                                      ).map(function (e) {
                                          var n = e.delay;
                                          return (0, r.pi)((0, r.pi)({}, t.formatTransition(e)), { delay: n });
                                      });
                                  }),
                                  (t.prototype.getStateNodes = function (t) {
                                      var e,
                                          n = this;
                                      if (!t) return [];
                                      var r = t instanceof d.ZM ? t.value : (0, a.WM)(t, this.delimiter);
                                      if ((0, a.HD)(r)) {
                                          var i = this.getStateNode(r).initial;
                                          return void 0 !== i
                                              ? this.getStateNodes((((e = {})[r] = i), e))
                                              : [this, this.states[r]];
                                      }
                                      var o = (0, a.XP)(r),
                                          s = o.map(function (t) {
                                              return n.getStateNode(t);
                                          });
                                      return (
                                          s.push(this),
                                          s.concat(
                                              o.reduce(function (t, e) {
                                                  var i = n.getStateNode(e).getStateNodes(r[e]);
                                                  return t.concat(i);
                                              }, []),
                                          )
                                      );
                                  }),
                                  (t.prototype.handles = function (t) {
                                      var e = (0, a.x6)(t);
                                      return this.events.includes(e);
                                  }),
                                  (t.prototype.resolveState = function (t) {
                                      var e = Array.from((0, u.P_)([], this.getStateNodes(t.value)));
                                      return new d.ZM(
                                          (0, r.pi)((0, r.pi)({}, t), {
                                              value: this.resolve(t.value),
                                              configuration: e,
                                              done: (0, u.Ij)(e, this),
                                              tags: (0, u.Oe)(e),
                                          }),
                                      );
                                  }),
                                  (t.prototype.transitionLeafNode = function (t, e, n) {
                                      var r = this.getStateNode(t).next(e, n);
                                      return r && r.transitions.length ? r : this.next(e, n);
                                  }),
                                  (t.prototype.transitionCompoundNode = function (t, e, n) {
                                      var r = (0, a.XP)(t),
                                          i = this.getStateNode(r[0])._transition(t[r[0]], e, n);
                                      return i && i.transitions.length ? i : this.next(e, n);
                                  }),
                                  (t.prototype.transitionParallelNode = function (t, e, n) {
                                      var i,
                                          o,
                                          s = {};
                                      try {
                                          for (var u = (0, r.XA)((0, a.XP)(t)), c = u.next(); !c.done; c = u.next()) {
                                              var l = c.value,
                                                  d = t[l];
                                              if (d) {
                                                  var h = this.getStateNode(l)._transition(d, e, n);
                                                  h && (s[l] = h);
                                              }
                                          }
                                      } catch (t) {
                                          i = { error: t };
                                      } finally {
                                          try {
                                              c && !c.done && (o = u.return) && o.call(u);
                                          } finally {
                                              if (i) throw i.error;
                                          }
                                      }
                                      var f = (0, a.XP)(s).map(function (t) {
                                              return s[t];
                                          }),
                                          p = (0, a.xH)(
                                              f.map(function (t) {
                                                  return t.transitions;
                                              }),
                                          );
                                      if (
                                          !f.some(function (t) {
                                              return t.transitions.length > 0;
                                          })
                                      )
                                          return this.next(e, n);
                                      var v = (0, a.xH)(
                                              f.map(function (t) {
                                                  return t.entrySet;
                                              }),
                                          ),
                                          y = (0, a.xH)(
                                              (0, a.XP)(s).map(function (t) {
                                                  return s[t].configuration;
                                              }),
                                          );
                                      return {
                                          transitions: p,
                                          entrySet: v,
                                          exitSet: (0, a.xH)(
                                              f.map(function (t) {
                                                  return t.exitSet;
                                              }),
                                          ),
                                          configuration: y,
                                          source: e,
                                          actions: (0, a.xH)(
                                              (0, a.XP)(s).map(function (t) {
                                                  return s[t].actions;
                                              }),
                                          ),
                                      };
                                  }),
                                  (t.prototype._transition = function (t, e, n) {
                                      return (0, a.HD)(t)
                                          ? this.transitionLeafNode(t, e, n)
                                          : 1 === (0, a.XP)(t).length
                                            ? this.transitionCompoundNode(t, e, n)
                                            : this.transitionParallelNode(t, e, n);
                                  }),
                                  (t.prototype.next = function (t, e) {
                                      var n,
                                          i,
                                          o,
                                          s = this,
                                          u = e.name,
                                          c = [],
                                          l = [];
                                      try {
                                          for (
                                              var d = (0, r.XA)(this.getCandidates(u)), h = d.next();
                                              !h.done;
                                              h = d.next()
                                          ) {
                                              var f = h.value,
                                                  p = f.cond,
                                                  v = f.in,
                                                  y = t.context,
                                                  m =
                                                      !v ||
                                                      ((0, a.HD)(v) && g(v)
                                                          ? t.matches(
                                                                (0, a.WM)(
                                                                    this.getStateNodeById(v).path,
                                                                    this.delimiter,
                                                                ),
                                                            )
                                                          : (0, a.W)(
                                                                (0, a.WM)(v, this.delimiter),
                                                                (0, a.ET)(this.path.slice(0, -2))(t.value),
                                                            )),
                                                  b = !1;
                                              try {
                                                  b = !p || (0, a.vx)(this.machine, p, y, e, t);
                                              } catch (t) {
                                                  throw new Error(
                                                      "Unable to evaluate guard '"
                                                          .concat(p.name || p.type, "' in transition for event '")
                                                          .concat(u, "' in state node '")
                                                          .concat(this.id, "':\n")
                                                          .concat(t.message),
                                                  );
                                              }
                                              if (b && m) {
                                                  (void 0 !== f.target && (l = f.target),
                                                      c.push.apply(c, (0, r.ev)([], (0, r.CR)(f.actions), !1)),
                                                      (o = f));
                                                  break;
                                              }
                                          }
                                      } catch (t) {
                                          n = { error: t };
                                      } finally {
                                          try {
                                              h && !h.done && (i = d.return) && i.call(d);
                                          } finally {
                                              if (n) throw n.error;
                                          }
                                      }
                                      if (o) {
                                          if (!l.length)
                                              return {
                                                  transitions: [o],
                                                  entrySet: [],
                                                  exitSet: [],
                                                  configuration: t.value ? [this] : [],
                                                  source: t,
                                                  actions: c,
                                              };
                                          var _ = (0, a.xH)(
                                                  l.map(function (e) {
                                                      return s.getRelativeStateNodes(e, t.historyValue);
                                                  }),
                                              ),
                                              w = !!o.internal;
                                          return {
                                              transitions: [o],
                                              entrySet: w
                                                  ? []
                                                  : (0, a.xH)(
                                                        _.map(function (t) {
                                                            return s.nodesFromChild(t);
                                                        }),
                                                    ),
                                              exitSet: w ? [] : [this],
                                              configuration: _,
                                              source: t,
                                              actions: c,
                                          };
                                      }
                                  }),
                                  (t.prototype.nodesFromChild = function (t) {
                                      if (t.escapes(this)) return [];
                                      for (var e = [], n = t; n && n !== this; ) (e.push(n), (n = n.parent));
                                      return (e.push(this), e);
                                  }),
                                  (t.prototype.escapes = function (t) {
                                      if (this === t) return !1;
                                      for (var e = this.parent; e; ) {
                                          if (e === t) return !1;
                                          e = e.parent;
                                      }
                                      return !0;
                                  }),
                                  (t.prototype.getActions = function (t, e, n, i) {
                                      var o,
                                          s,
                                          c,
                                          d,
                                          h = (0, u.P_)([], i ? this.getStateNodes(i.value) : [this]),
                                          f = t.configuration.length ? (0, u.P_)(h, t.configuration) : h;
                                      try {
                                          for (var p = (0, r.XA)(f), v = p.next(); !v.done; v = p.next()) {
                                              var y = v.value;
                                              (0, u.e$)(h, y) || t.entrySet.push(y);
                                          }
                                      } catch (t) {
                                          o = { error: t };
                                      } finally {
                                          try {
                                              v && !v.done && (s = p.return) && s.call(p);
                                          } finally {
                                              if (o) throw o.error;
                                          }
                                      }
                                      try {
                                          for (var g = (0, r.XA)(h), m = g.next(); !m.done; m = g.next())
                                              ((y = m.value),
                                                  ((0, u.e$)(f, y) && !(0, u.e$)(t.exitSet, y.parent)) ||
                                                      t.exitSet.push(y));
                                      } catch (t) {
                                          c = { error: t };
                                      } finally {
                                          try {
                                              m && !m.done && (d = g.return) && d.call(g);
                                          } finally {
                                              if (c) throw c.error;
                                          }
                                      }
                                      t.source || ((t.exitSet = []), t.entrySet.push(this));
                                      var b = (0, a.xH)(
                                          t.entrySet.map(function (r) {
                                              var i = [];
                                              if ('final' !== r.type) return i;
                                              var o = r.parent;
                                              if (!o.parent) return i;
                                              i.push(
                                                  (0, l.aT)(r.id, r.doneData),
                                                  (0, l.aT)(o.id, r.doneData ? (0, a.QX)(r.doneData, e, n) : void 0),
                                              );
                                              var s = o.parent;
                                              return (
                                                  'parallel' === s.type &&
                                                      (0, u.G)(s).every(function (e) {
                                                          return (0, u.Ij)(t.configuration, e);
                                                      }) &&
                                                      i.push((0, l.aT)(s.id)),
                                                  i
                                              );
                                          }),
                                      );
                                      (t.exitSet.sort(function (t, e) {
                                          return e.order - t.order;
                                      }),
                                          t.entrySet.sort(function (t, e) {
                                              return t.order - e.order;
                                          }));
                                      var _ = new Set(t.entrySet),
                                          w = new Set(t.exitSet),
                                          S = (0, r.CR)(
                                              [
                                                  (0, a.xH)(
                                                      Array.from(_).map(function (t) {
                                                          return (0, r.ev)(
                                                              (0, r.ev)(
                                                                  [],
                                                                  (0, r.CR)(
                                                                      t.activities.map(function (t) {
                                                                          return (0, l.BL)(t);
                                                                      }),
                                                                  ),
                                                                  !1,
                                                              ),
                                                              (0, r.CR)(t.onEntry),
                                                              !1,
                                                          );
                                                      }),
                                                  ).concat(b.map(l.OU)),
                                                  (0, a.xH)(
                                                      Array.from(w).map(function (t) {
                                                          return (0, r.ev)(
                                                              (0, r.ev)([], (0, r.CR)(t.onExit), !1),
                                                              (0, r.CR)(
                                                                  t.activities.map(function (t) {
                                                                      return (0, l.sT)(t);
                                                                  }),
                                                              ),
                                                              !1,
                                                          );
                                                      }),
                                                  ),
                                              ],
                                              2,
                                          ),
                                          O = S[0],
                                          x = S[1];
                                      return (0, l.AE)(x.concat(t.actions).concat(O), this.machine.options.actions);
                                  }),
                                  (t.prototype.transition = function (t, e, n) {
                                      void 0 === t && (t = this.initialState);
                                      var i,
                                          s = (0, a.g5)(e);
                                      if (t instanceof d.ZM) i = void 0 === n ? t : this.resolveState(d.ZM.from(t, n));
                                      else {
                                          var c = (0, a.HD)(t)
                                                  ? this.resolve((0, a.on)(this.getResolvedPath(t)))
                                                  : this.resolve(t),
                                              l = null != n ? n : this.machine.context;
                                          i = this.resolveState(d.ZM.from(c, l));
                                      }
                                      if (!o.M && s.name === v)
                                          throw new Error("An event cannot have the wildcard type ('".concat(v, "')"));
                                      if (this.strict && !this.events.includes(s.name) && !(0, a.JQ)(s.name))
                                          throw new Error(
                                              "Machine '"
                                                  .concat(this.id, "' does not accept event '")
                                                  .concat(s.name, "'"),
                                          );
                                      var h = this._transition(i.value, i, s) || {
                                              transitions: [],
                                              configuration: [],
                                              entrySet: [],
                                              exitSet: [],
                                              source: i,
                                              actions: [],
                                          },
                                          f = (0, u.P_)([], this.getStateNodes(i.value)),
                                          p = h.configuration.length ? (0, u.P_)(f, h.configuration) : f;
                                      return (
                                          (h.configuration = (0, r.ev)([], (0, r.CR)(p), !1)),
                                          this.resolveTransition(h, i, s)
                                      );
                                  }),
                                  (t.prototype.resolveRaisedTransition = function (t, e, n) {
                                      var i,
                                          o = t.actions;
                                      return (
                                          ((t = this.transition(t, e))._event = n),
                                          (t.event = n.data),
                                          (i = t.actions).unshift.apply(i, (0, r.ev)([], (0, r.CR)(o), !1)),
                                          t
                                      );
                                  }),
                                  (t.prototype.resolveTransition = function (t, e, n, i) {
                                      var o,
                                          f,
                                          v = this;
                                      (void 0 === n && (n = l.bf), void 0 === i && (i = this.machine.context));
                                      var y = t.configuration,
                                          g = !e || t.transitions.length > 0,
                                          m = g ? (0, u.NA)(this.machine, y) : void 0,
                                          b = e
                                              ? e.historyValue
                                                  ? e.historyValue
                                                  : t.source
                                                    ? this.machine.historyValue(e.value)
                                                    : void 0
                                              : void 0,
                                          _ = e ? e.context : i,
                                          w = this.getActions(t, _, n, e),
                                          S = e ? (0, r.pi)({}, e.activities) : {};
                                      try {
                                          for (var O = (0, r.XA)(w), x = O.next(); !x.done; x = O.next()) {
                                              var W = x.value;
                                              W.type === c.BL
                                                  ? (S[W.activity.id || W.activity.type] = W)
                                                  : W.type === c.sT && (S[W.activity.id || W.activity.type] = !1);
                                          }
                                      } catch (t) {
                                          o = { error: t };
                                      } finally {
                                          try {
                                              x && !x.done && (f = O.return) && f.call(O);
                                          } finally {
                                              if (o) throw o.error;
                                          }
                                      }
                                      var R = (0, r.CR)(
                                              (0, l.yC)(this, e, _, n, w, this.machine.config.preserveActionOrder),
                                              2,
                                          ),
                                          E = R[0],
                                          j = R[1],
                                          U = (0, r.CR)(
                                              (0, a.uK)(E, function (t) {
                                                  return t.type === c.OU || (t.type === c.lW && t.to === s.K.Internal);
                                              }),
                                              2,
                                          ),
                                          T = U[0],
                                          A = U[1],
                                          P = E.filter(function (t) {
                                              var e;
                                              return (
                                                  t.type === c.BL &&
                                                  (null === (e = t.activity) || void 0 === e ? void 0 : e.type) === c.dw
                                              );
                                          }),
                                          B = P.reduce(
                                              function (t, e) {
                                                  return (
                                                      (t[e.activity.id] = (0, h.mu)(e.activity, v.machine, j, n)),
                                                      t
                                                  );
                                              },
                                              e ? (0, r.pi)({}, e.children) : {},
                                          ),
                                          V = m ? t.configuration : e ? e.configuration : [],
                                          M = (0, u.Ij)(V, this),
                                          k = new d.ZM({
                                              value: m || e.value,
                                              context: j,
                                              _event: n,
                                              _sessionid: e ? e._sessionid : null,
                                              historyValue: m
                                                  ? b
                                                      ? (0, a.yv)(b, m)
                                                      : void 0
                                                  : e
                                                    ? e.historyValue
                                                    : void 0,
                                              history: !m || t.source ? e : void 0,
                                              actions: m ? A : [],
                                              activities: m ? S : e ? e.activities : {},
                                              events: [],
                                              configuration: V,
                                              transitions: t.transitions,
                                              children: B,
                                              done: M,
                                              tags: null == e ? void 0 : e.tags,
                                              machine: this,
                                          }),
                                          F = _ !== j;
                                      k.changed = n.name === c.Vx || F;
                                      var C = k.history;
                                      C && delete C.history;
                                      var N =
                                          !M &&
                                          (this._transient ||
                                              y.some(function (t) {
                                                  return t._transient;
                                              }));
                                      if (!(g || (N && n.name !== p))) return k;
                                      var H = k;
                                      if (!M)
                                          for (
                                              N && (H = this.resolveRaisedTransition(H, { type: c.IA }, n));
                                              T.length;

                                          ) {
                                              var D = T.shift();
                                              H = this.resolveRaisedTransition(H, D._event, n);
                                          }
                                      var I =
                                          H.changed ||
                                          (C
                                              ? !!H.actions.length ||
                                                F ||
                                                typeof C.value != typeof H.value ||
                                                !(0, d.j_)(H.value, C.value)
                                              : void 0);
                                      return (
                                          (H.changed = I),
                                          (H.history = C),
                                          (H.tags = (0, u.Oe)(H.configuration)),
                                          H
                                      );
                                  }),
                                  (t.prototype.getStateNode = function (t) {
                                      if (g(t)) return this.machine.getStateNodeById(t);
                                      if (!this.states)
                                          throw new Error(
                                              "Unable to retrieve child state '"
                                                  .concat(t, "' from '")
                                                  .concat(this.id, "'; no child states exist."),
                                          );
                                      var e = this.states[t];
                                      if (!e)
                                          throw new Error(
                                              "Child state '".concat(t, "' does not exist on '").concat(this.id, "'"),
                                          );
                                      return e;
                                  }),
                                  (t.prototype.getStateNodeById = function (t) {
                                      var e = g(t) ? t.slice('#'.length) : t;
                                      if (e === this.id) return this;
                                      var n = this.machine.idMap[e];
                                      if (!n)
                                          throw new Error(
                                              "Child state node '#"
                                                  .concat(e, "' does not exist on machine '")
                                                  .concat(this.id, "'"),
                                          );
                                      return n;
                                  }),
                                  (t.prototype.getStateNodeByPath = function (t) {
                                      if ('string' == typeof t && g(t))
                                          try {
                                              return this.getStateNodeById(t.slice(1));
                                          } catch (t) {}
                                      for (var e = (0, a.Q9)(t, this.delimiter).slice(), n = this; e.length; ) {
                                          var r = e.shift();
                                          if (!r.length) break;
                                          n = n.getStateNode(r);
                                      }
                                      return n;
                                  }),
                                  (t.prototype.resolve = function (t) {
                                      var e,
                                          n = this;
                                      if (!t) return this.initialStateValue || y;
                                      switch (this.type) {
                                          case 'parallel':
                                              return (0, a.Q8)(this.initialStateValue, function (e, r) {
                                                  return e ? n.getStateNode(r).resolve(t[r] || e) : y;
                                              });
                                          case 'compound':
                                              if ((0, a.HD)(t)) {
                                                  var r = this.getStateNode(t);
                                                  return 'parallel' === r.type || 'compound' === r.type
                                                      ? (((e = {})[t] = r.initialStateValue), e)
                                                      : t;
                                              }
                                              return (0, a.XP)(t).length
                                                  ? (0, a.Q8)(t, function (t, e) {
                                                        return t ? n.getStateNode(e).resolve(t) : y;
                                                    })
                                                  : this.initialStateValue || {};
                                          default:
                                              return t || y;
                                      }
                                  }),
                                  (t.prototype.getResolvedPath = function (t) {
                                      if (g(t)) {
                                          var e = this.machine.idMap[t.slice('#'.length)];
                                          if (!e) throw new Error("Unable to find state node '".concat(t, "'"));
                                          return e.path;
                                      }
                                      return (0, a.Q9)(t, this.delimiter);
                                  }),
                                  Object.defineProperty(t.prototype, 'initialStateValue', {
                                      get: function () {
                                          var t, e;
                                          if (this.__cache.initialStateValue) return this.__cache.initialStateValue;
                                          if ('parallel' === this.type)
                                              e = (0, a.ib)(
                                                  this.states,
                                                  function (t) {
                                                      return t.initialStateValue || y;
                                                  },
                                                  function (t) {
                                                      return !('history' === t.type);
                                                  },
                                              );
                                          else if (void 0 !== this.initial) {
                                              if (!this.states[this.initial])
                                                  throw new Error(
                                                      "Initial state '"
                                                          .concat(this.initial, "' not found on '")
                                                          .concat(this.key, "'"),
                                                  );
                                              e = (0, u.N9)(this.states[this.initial])
                                                  ? this.initial
                                                  : (((t = {})[this.initial] =
                                                        this.states[this.initial].initialStateValue),
                                                    t);
                                          } else e = {};
                                          return ((this.__cache.initialStateValue = e), this.__cache.initialStateValue);
                                      },
                                      enumerable: !1,
                                      configurable: !0,
                                  }),
                                  (t.prototype.getInitialState = function (t, e) {
                                      var n = this.getStateNodes(t);
                                      return this.resolveTransition(
                                          {
                                              configuration: n,
                                              entrySet: n,
                                              exitSet: [],
                                              transitions: [],
                                              source: void 0,
                                              actions: [],
                                          },
                                          void 0,
                                          void 0,
                                          e,
                                      );
                                  }),
                                  Object.defineProperty(t.prototype, 'initialState', {
                                      get: function () {
                                          this._init();
                                          var t = this.initialStateValue;
                                          if (!t)
                                              throw new Error(
                                                  "Cannot retrieve initial state from simple state '".concat(
                                                      this.id,
                                                      "'.",
                                                  ),
                                              );
                                          return this.getInitialState(t);
                                      },
                                      enumerable: !1,
                                      configurable: !0,
                                  }),
                                  Object.defineProperty(t.prototype, 'target', {
                                      get: function () {
                                          var t;
                                          if ('history' === this.type) {
                                              var e = this.config;
                                              t =
                                                  (0, a.HD)(e.target) && g(e.target)
                                                      ? (0, a.on)(
                                                            this.machine
                                                                .getStateNodeById(e.target)
                                                                .path.slice(this.path.length - 1),
                                                        )
                                                      : e.target;
                                          }
                                          return t;
                                      },
                                      enumerable: !1,
                                      configurable: !0,
                                  }),
                                  (t.prototype.getRelativeStateNodes = function (t, e, n) {
                                      return (
                                          void 0 === n && (n = !0),
                                          n ? ('history' === t.type ? t.resolveHistory(e) : t.initialStateNodes) : [t]
                                      );
                                  }),
                                  Object.defineProperty(t.prototype, 'initialStateNodes', {
                                      get: function () {
                                          var t = this;
                                          if ((0, u.N9)(this)) return [this];
                                          if ('compound' === this.type && !this.initial)
                                              return (
                                                  o.M ||
                                                      (0, a.ZK)(
                                                          !1,
                                                          "Compound state node '".concat(
                                                              this.id,
                                                              "' has no initial state.",
                                                          ),
                                                      ),
                                                  [this]
                                              );
                                          var e = (0, a.SA)(this.initialStateValue);
                                          return (0, a.xH)(
                                              e.map(function (e) {
                                                  return t.getFromRelativePath(e);
                                              }),
                                          );
                                      },
                                      enumerable: !1,
                                      configurable: !0,
                                  }),
                                  (t.prototype.getFromRelativePath = function (t) {
                                      if (!t.length) return [this];
                                      var e = (0, r.CR)(t),
                                          n = e[0],
                                          i = e.slice(1);
                                      if (!this.states)
                                          throw new Error(
                                              "Cannot retrieve subPath '".concat(n, "' from node with no states"),
                                          );
                                      var o = this.getStateNode(n);
                                      if ('history' === o.type) return o.resolveHistory();
                                      if (!this.states[n])
                                          throw new Error(
                                              "Child state '".concat(n, "' does not exist on '").concat(this.id, "'"),
                                          );
                                      return this.states[n].getFromRelativePath(i);
                                  }),
                                  (t.prototype.historyValue = function (t) {
                                      if ((0, a.XP)(this.states).length)
                                          return {
                                              current: t || this.initialStateValue,
                                              states: (0, a.ib)(
                                                  this.states,
                                                  function (e, n) {
                                                      if (!t) return e.historyValue();
                                                      var r = (0, a.HD)(t) ? void 0 : t[n];
                                                      return e.historyValue(r || e.initialStateValue);
                                                  },
                                                  function (t) {
                                                      return !t.history;
                                                  },
                                              ),
                                          };
                                  }),
                                  (t.prototype.resolveHistory = function (t) {
                                      var e = this;
                                      if ('history' !== this.type) return [this];
                                      var n = this.parent;
                                      if (!t) {
                                          var r = this.target;
                                          return r
                                              ? (0, a.xH)(
                                                    (0, a.SA)(r).map(function (t) {
                                                        return n.getFromRelativePath(t);
                                                    }),
                                                )
                                              : n.initialStateNodes;
                                      }
                                      var i = (0, a.gk)(n.path, 'states')(t).current;
                                      return (0, a.HD)(i)
                                          ? [n.getStateNode(i)]
                                          : (0, a.xH)(
                                                (0, a.SA)(i).map(function (t) {
                                                    return 'deep' === e.history
                                                        ? n.getFromRelativePath(t)
                                                        : [n.states[t[0]]];
                                                }),
                                            );
                                  }),
                                  Object.defineProperty(t.prototype, 'stateIds', {
                                      get: function () {
                                          var t = this,
                                              e = (0, a.xH)(
                                                  (0, a.XP)(this.states).map(function (e) {
                                                      return t.states[e].stateIds;
                                                  }),
                                              );
                                          return [this.id].concat(e);
                                      },
                                      enumerable: !1,
                                      configurable: !0,
                                  }),
                                  Object.defineProperty(t.prototype, 'events', {
                                      get: function () {
                                          var t, e, n, i;
                                          if (this.__cache.events) return this.__cache.events;
                                          var o = this.states,
                                              s = new Set(this.ownEvents);
                                          if (o)
                                              try {
                                                  for (
                                                      var u = (0, r.XA)((0, a.XP)(o)), c = u.next();
                                                      !c.done;
                                                      c = u.next()
                                                  ) {
                                                      var l = o[c.value];
                                                      if (l.states)
                                                          try {
                                                              for (
                                                                  var d = ((n = void 0), (0, r.XA)(l.events)),
                                                                      h = d.next();
                                                                  !h.done;
                                                                  h = d.next()
                                                              ) {
                                                                  var f = h.value;
                                                                  s.add(''.concat(f));
                                                              }
                                                          } catch (t) {
                                                              n = { error: t };
                                                          } finally {
                                                              try {
                                                                  h && !h.done && (i = d.return) && i.call(d);
                                                              } finally {
                                                                  if (n) throw n.error;
                                                              }
                                                          }
                                                  }
                                              } catch (e) {
                                                  t = { error: e };
                                              } finally {
                                                  try {
                                                      c && !c.done && (e = u.return) && e.call(u);
                                                  } finally {
                                                      if (t) throw t.error;
                                                  }
                                              }
                                          return (this.__cache.events = Array.from(s));
                                      },
                                      enumerable: !1,
                                      configurable: !0,
                                  }),
                                  Object.defineProperty(t.prototype, 'ownEvents', {
                                      get: function () {
                                          var t = new Set(
                                              this.transitions
                                                  .filter(function (t) {
                                                      return !(!t.target && !t.actions.length && t.internal);
                                                  })
                                                  .map(function (t) {
                                                      return t.eventType;
                                                  }),
                                          );
                                          return Array.from(t);
                                      },
                                      enumerable: !1,
                                      configurable: !0,
                                  }),
                                  (t.prototype.resolveTarget = function (t) {
                                      var e = this;
                                      if (void 0 !== t)
                                          return t.map(function (t) {
                                              if (!(0, a.HD)(t)) return t;
                                              var n = t[0] === e.delimiter;
                                              if (n && !e.parent) return e.getStateNodeByPath(t.slice(1));
                                              var r = n ? e.key + t : t;
                                              if (!e.parent) return e.getStateNodeByPath(r);
                                              try {
                                                  return e.parent.getStateNodeByPath(r);
                                              } catch (t) {
                                                  throw new Error(
                                                      "Invalid transition definition for state node '"
                                                          .concat(e.id, "':\n")
                                                          .concat(t.message),
                                                  );
                                              }
                                          });
                                  }),
                                  (t.prototype.formatTransition = function (t) {
                                      var e = this,
                                          n = (0, a.rg)(t.target),
                                          i =
                                              'internal' in t
                                                  ? t.internal
                                                  : !n ||
                                                    n.some(function (t) {
                                                        return (0, a.HD)(t) && t[0] === e.delimiter;
                                                    }),
                                          o = this.machine.options.guards,
                                          s = this.resolveTarget(n),
                                          u = (0, r.pi)((0, r.pi)({}, t), {
                                              actions: (0, l.AE)((0, a.qo)(t.actions)),
                                              cond: (0, a.Qi)(t.cond, o),
                                              target: s,
                                              source: this,
                                              internal: i,
                                              eventType: t.event,
                                              toJSON: function () {
                                                  return (0, r.pi)((0, r.pi)({}, u), {
                                                      target: u.target
                                                          ? u.target.map(function (t) {
                                                                return '#'.concat(t.id);
                                                            })
                                                          : void 0,
                                                      source: '#'.concat(e.id),
                                                  });
                                              },
                                          });
                                      return u;
                                  }),
                                  (t.prototype.formatTransitions = function () {
                                      var t,
                                          e,
                                          n,
                                          i = this;
                                      if (this.config.on)
                                          if (Array.isArray(this.config.on)) n = this.config.on;
                                          else {
                                              var s = this.config.on,
                                                  u = s['*'],
                                                  c = void 0 === u ? [] : u,
                                                  d = (0, r._T)(s, ['*']);
                                              n = (0, a.xH)(
                                                  (0, a.XP)(d)
                                                      .map(function (t) {
                                                          o.M ||
                                                              t !== p ||
                                                              (0, a.ZK)(
                                                                  !1,
                                                                  "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " +
                                                                      'Please check the `on` configuration for "#'.concat(
                                                                          i.id,
                                                                          '".',
                                                                      ),
                                                              );
                                                          var e = (0, a.jh)(t, d[t]);
                                                          return (
                                                              o.M ||
                                                                  (function (t, e, n) {
                                                                      var r = n.slice(0, -1).some(function (t) {
                                                                              return (
                                                                                  !('cond' in t) &&
                                                                                  !('in' in t) &&
                                                                                  ((0, a.HD)(t.target) ||
                                                                                      (0, a.O4)(t.target))
                                                                              );
                                                                          }),
                                                                          i =
                                                                              e === p
                                                                                  ? 'the transient event'
                                                                                  : "event '".concat(e, "'");
                                                                      (0, a.ZK)(
                                                                          !r,
                                                                          'One or more transitions for '
                                                                              .concat(i, " on state '")
                                                                              .concat(t.id, "' are unreachable. ") +
                                                                              'Make sure that the default transition is the last one defined.',
                                                                      );
                                                                  })(i, t, e),
                                                              e
                                                          );
                                                      })
                                                      .concat((0, a.jh)(v, c)),
                                              );
                                          }
                                      else n = [];
                                      var h = this.config.always ? (0, a.jh)('', this.config.always) : [],
                                          f = this.config.onDone
                                              ? (0, a.jh)(String((0, l.aT)(this.id)), this.config.onDone)
                                              : [];
                                      o.M ||
                                          (0, a.ZK)(
                                              !(this.config.onDone && !this.parent),
                                              'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(
                                                  this.id,
                                                  '".',
                                              ),
                                          );
                                      var y = (0, a.xH)(
                                              this.invoke.map(function (t) {
                                                  var e = [];
                                                  return (
                                                      t.onDone &&
                                                          e.push.apply(
                                                              e,
                                                              (0, r.ev)(
                                                                  [],
                                                                  (0, r.CR)(
                                                                      (0, a.jh)(String((0, l.Sl)(t.id)), t.onDone),
                                                                  ),
                                                                  !1,
                                                              ),
                                                          ),
                                                      t.onError &&
                                                          e.push.apply(
                                                              e,
                                                              (0, r.ev)(
                                                                  [],
                                                                  (0, r.CR)(
                                                                      (0, a.jh)(String((0, l.vU)(t.id)), t.onError),
                                                                  ),
                                                                  !1,
                                                              ),
                                                          ),
                                                      e
                                                  );
                                              }),
                                          ),
                                          g = this.after,
                                          m = (0, a.xH)(
                                              (0, r.ev)(
                                                  (0, r.ev)(
                                                      (0, r.ev)((0, r.ev)([], (0, r.CR)(f), !1), (0, r.CR)(y), !1),
                                                      (0, r.CR)(n),
                                                      !1,
                                                  ),
                                                  (0, r.CR)(h),
                                                  !1,
                                              ).map(function (t) {
                                                  return (0, a.qo)(t).map(function (t) {
                                                      return i.formatTransition(t);
                                                  });
                                              }),
                                          );
                                      try {
                                          for (var b = (0, r.XA)(g), _ = b.next(); !_.done; _ = b.next()) {
                                              var w = _.value;
                                              m.push(w);
                                          }
                                      } catch (e) {
                                          t = { error: e };
                                      } finally {
                                          try {
                                              _ && !_.done && (e = b.return) && e.call(b);
                                          } finally {
                                              if (t) throw t.error;
                                          }
                                      }
                                      return m;
                                  }),
                                  t
                              );
                          })()
                        : null;
        },
        4564: (t, e, n) => {
            'use strict';
            n.d(e, { CR: () => a, XA: () => o, _T: () => i, ev: () => s, pi: () => r });
            var r = function () {
                return (
                    (r =
                        Object.assign ||
                        function (t) {
                            for (var e, n = 1, r = arguments.length; n < r; n++)
                                for (var i in (e = arguments[n]))
                                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                            return t;
                        }),
                    r.apply(this, arguments)
                );
            };
            function i(t, e) {
                var n = {};
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
                        e.indexOf(r[i]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                            (n[r[i]] = t[r[i]]);
                }
                return n;
            }
            function o(t) {
                var e = 'function' == typeof Symbol && Symbol.iterator,
                    n = e && t[e],
                    r = 0;
                if (n) return n.call(t);
                if (t && 'number' == typeof t.length)
                    return {
                        next: function () {
                            return (t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t });
                        },
                    };
                throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
            }
            function a(t, e) {
                var n = 'function' == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r,
                    i,
                    o = n.call(t),
                    a = [];
                try {
                    for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; ) a.push(r.value);
                } catch (t) {
                    i = { error: t };
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o);
                    } finally {
                        if (i) throw i.error;
                    }
                }
                return a;
            }
            function s(t, e, n) {
                if (n || 2 === arguments.length)
                    for (var r, i = 0, o = e.length; i < o; i++)
                        (!r && i in e) || (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
                return t.concat(r || Array.prototype.slice.call(e));
            }
        },
        2689: (t, e, n) => {
            'use strict';
            n.d(e, {
                BL: () => i,
                IA: () => c,
                Le: () => m,
                Mg: () => p,
                OU: () => a,
                RN: () => g,
                S1: () => h,
                Vx: () => y,
                al: () => u,
                cM: () => d,
                dw: () => f,
                f0: () => l,
                lW: () => s,
                sT: () => o,
                vU: () => v,
            });
            var r = n(2937),
                i = r.M.Start,
                o = r.M.Stop,
                a = r.M.Raise,
                s = r.M.Send,
                u = r.M.Cancel,
                c = r.M.NullEvent,
                l = r.M.Assign,
                d = (r.M.After, r.M.DoneState, r.M.Log),
                h = r.M.Init,
                f = r.M.Invoke,
                p = (r.M.ErrorExecution, r.M.ErrorPlatform),
                v = r.M.ErrorCustom,
                y = r.M.Update,
                g = r.M.Choose,
                m = r.M.Pure;
        },
        6457: (t, e, n) => {
            'use strict';
            if (
                (n.d(e, {
                    AE: () => d,
                    BL: () => y,
                    OU: () => f,
                    Q8: () => l,
                    Sl: () => w,
                    XA: () => h,
                    aT: () => _,
                    al: () => v,
                    bf: () => u,
                    e4: () => b,
                    f0: () => m,
                    lW: () => p,
                    o$: () => c,
                    sT: () => g,
                    vU: () => S,
                    yC: () => O,
                }),
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                ))
            )
                var r = n(4564);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var i = n(1024);
            var o = n(4868);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var a = n(2937);
            var s = n(2689),
                u = (0, o.g5)({ type: s.S1 });
            function c(t, e) {
                return (e && e[t]) || void 0;
            }
            function l(t, e) {
                var n;
                if ((0, o.HD)(t) || 'number' == typeof t) {
                    var i = c(t, e);
                    n = (0, o.mf)(i) ? { type: t, exec: i } : i || { type: t, exec: void 0 };
                } else if ((0, o.mf)(t)) n = { type: t.name || t.toString(), exec: t };
                else if (((i = c(t.type, e)), (0, o.mf)(i))) n = (0, r.pi)((0, r.pi)({}, t), { exec: i });
                else if (i) {
                    var a = i.type || t.type;
                    n = (0, r.pi)((0, r.pi)((0, r.pi)({}, i), t), { type: a });
                } else n = t;
                return n;
            }
            var d = function (t, e) {
                return t
                    ? ((0, o.kJ)(t) ? t : [t]).map(function (t) {
                          return l(t, e);
                      })
                    : [];
            };
            function h(t) {
                var e = l(t);
                return (0, r.pi)((0, r.pi)({ id: (0, o.HD)(t) ? t : e.id }, e), { type: e.type });
            }
            function f(t) {
                return (0, o.HD)(t) ? { type: s.OU, event: t } : p(t, { to: a.K.Internal });
            }
            function p(t, e) {
                return {
                    to: e ? e.to : void 0,
                    type: s.lW,
                    event: (0, o.mf)(t) ? t : (0, o._v)(t),
                    delay: e ? e.delay : void 0,
                    id: e && void 0 !== e.id ? e.id : (0, o.mf)(t) ? t.name : (0, o.x6)(t),
                };
            }
            var v = function (t) {
                return { type: s.al, sendId: t };
            };
            function y(t) {
                var e = h(t);
                return { type: a.M.Start, activity: e, exec: void 0 };
            }
            function g(t) {
                var e = (0, o.mf)(t) ? t : h(t);
                return { type: a.M.Stop, activity: e, exec: void 0 };
            }
            var m = function (t) {
                return { type: s.f0, assignment: t };
            };
            function b(t, e) {
                var n = e ? '#'.concat(e) : '';
                return ''.concat(a.M.After, '(').concat(t, ')').concat(n);
            }
            function _(t, e) {
                var n = ''.concat(a.M.DoneState, '.').concat(t);
                return {
                    type: n,
                    data: e,
                    toString: function () {
                        return n;
                    },
                };
            }
            function w(t, e) {
                var n = ''.concat(a.M.DoneInvoke, '.').concat(t);
                return {
                    type: n,
                    data: e,
                    toString: function () {
                        return n;
                    },
                };
            }
            function S(t, e) {
                var n = ''.concat(a.M.ErrorPlatform, '.').concat(t);
                return {
                    type: n,
                    data: e,
                    toString: function () {
                        return n;
                    },
                };
            }
            function O(t, e, n, u, c, h) {
                void 0 === h && (h = !1);
                var f = (0, r.CR)(
                        h
                            ? [[], c]
                            : (0, o.uK)(c, function (t) {
                                  return t.type === s.f0;
                              }),
                        2,
                    ),
                    p = f[0],
                    v = f[1],
                    y = p.length ? (0, o.dt)(n, u, p, e) : n,
                    g = h ? [n] : void 0,
                    m = (0, o.xH)(
                        v
                            .map(function (n) {
                                var c, f;
                                switch (n.type) {
                                    case s.OU:
                                        return ((f = n), { type: s.OU, _event: (0, o.g5)(f.event) });
                                    case s.lW:
                                        var p = (function (t, e, n, i) {
                                            var a,
                                                s = { _event: n },
                                                u = (0, o.g5)((0, o.mf)(t.event) ? t.event(e, n.data, s) : t.event);
                                            if ((0, o.HD)(t.delay)) {
                                                var c = i && i[t.delay];
                                                a = (0, o.mf)(c) ? c(e, n.data, s) : c;
                                            } else a = (0, o.mf)(t.delay) ? t.delay(e, n.data, s) : t.delay;
                                            var l = (0, o.mf)(t.to) ? t.to(e, n.data, s) : t.to;
                                            return (0, r.pi)((0, r.pi)({}, t), {
                                                to: l,
                                                _event: u,
                                                event: u.data,
                                                delay: a,
                                            });
                                        })(n, y, u, t.options.delays);
                                        return (
                                            i.M ||
                                                (0, o.ZK)(
                                                    !(0, o.HD)(n.delay) || 'number' == typeof p.delay,
                                                    "No delay reference for delay expression '"
                                                        .concat(n.delay, "' was found on machine '")
                                                        .concat(t.id, "'"),
                                                ),
                                            p
                                        );
                                    case s.cM:
                                        return (function (t, e, n) {
                                            return (0, r.pi)((0, r.pi)({}, t), {
                                                value: (0, o.HD)(t.expr) ? t.expr : t.expr(e, n.data, { _event: n }),
                                            });
                                        })(n, y, u);
                                    case s.RN:
                                        if (
                                            !(_ =
                                                null ===
                                                    (c = n.conds.find(function (n) {
                                                        var r = (0, o.Qi)(n.cond, t.options.guards);
                                                        return !r || (0, o.vx)(t, r, y, u, e);
                                                    })) || void 0 === c
                                                    ? void 0
                                                    : c.actions)
                                        )
                                            return [];
                                        var v = (0, r.CR)(O(t, e, y, u, d((0, o.qo)(_), t.options.actions), h), 2),
                                            m = v[0],
                                            b = v[1];
                                        return ((y = b), null == g || g.push(y), m);
                                    case s.Le:
                                        var _;
                                        if (!(_ = n.get(y, u.data))) return [];
                                        var w = (0, r.CR)(O(t, e, y, u, d((0, o.qo)(_), t.options.actions), h), 2),
                                            S = w[0],
                                            x = w[1];
                                        return ((y = x), null == g || g.push(y), S);
                                    case s.sT:
                                        return (function (t, e, n) {
                                            var r = (0, o.mf)(t.activity) ? t.activity(e, n.data) : t.activity,
                                                i = 'string' == typeof r ? { id: r } : r;
                                            return { type: a.M.Stop, activity: i };
                                        })(n, y, u);
                                    case s.f0:
                                        ((y = (0, o.dt)(y, u, [n], e)), null == g || g.push(y));
                                        break;
                                    default:
                                        var W = l(n, t.options.actions),
                                            R = W.exec;
                                        if (R && g) {
                                            var E = g.length - 1;
                                            W = (0, r.pi)((0, r.pi)({}, W), {
                                                exec: function (t) {
                                                    for (var e = [], n = 1; n < arguments.length; n++)
                                                        e[n - 1] = arguments[n];
                                                    R.apply(void 0, (0, r.ev)([g[E]], (0, r.CR)(e), !1));
                                                },
                                            });
                                        }
                                        return W;
                                }
                            })
                            .filter(function (t) {
                                return !!t;
                            }),
                    );
                return [m, y];
            }
        },
        4312: (t, e, n) => {
            'use strict';
            if (
                (n.d(e, { Y: () => o }),
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                ))
            )
                var r = n(4868);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var i = n(1067);
            function o(t, e) {
                void 0 === e && (e = {});
                var n = t.initialState,
                    o = new Set(),
                    a = [],
                    s = !1,
                    u = (0, i.vk)({
                        id: e.id,
                        send: function (e) {
                            (a.push(e),
                                (function () {
                                    if (!s) {
                                        for (s = !0; a.length > 0; ) {
                                            var e = a.shift();
                                            ((n = t.transition(n, e, c)),
                                                o.forEach(function (t) {
                                                    return t.next(n);
                                                }));
                                        }
                                        s = !1;
                                    }
                                })());
                        },
                        getSnapshot: function () {
                            return n;
                        },
                        subscribe: function (t, e, i) {
                            var a = (0, r.zM)(t, e, i);
                            return (
                                o.add(a),
                                a.next(n),
                                {
                                    unsubscribe: function () {
                                        o.delete(a);
                                    },
                                }
                            );
                        },
                    }),
                    c = { parent: e.parent, self: u, id: e.id || 'anonymous', observers: o };
                return ((n = t.start ? t.start(c) : n), u);
            }
        },
        4988: (t, e, n) => {
            'use strict';
            n.d(e, { TV: () => o, iS: () => r, qP: () => i, rt: () => a });
            var r = '.',
                i = {},
                o = 'xstate.guard',
                a = '';
        },
        5606: (t, e, n) => {
            'use strict';
            function r() {
                return 'undefined' != typeof globalThis
                    ? globalThis
                    : 'undefined' != typeof self
                      ? self
                      : 'undefined' != typeof window
                        ? window
                        : void 0 !== n.g
                          ? n.g
                          : void 0;
            }
            function i(t) {
                if (r()) {
                    var e = (function () {
                        var t = r();
                        if (t && '__xstate__' in t) return t.__xstate__;
                    })();
                    e && e.register(t);
                }
            }
            n.d(e, { R: () => r, g: () => i });
        },
        1024: (t, e, n) => {
            'use strict';
            n.d(e, { M: () => r });
            var r =
                !!/^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                ) || null;
        },
        8869: (t, e, n) => {
            'use strict';
            if (
                (n.d(e, { kJ: () => _ }),
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                ))
            )
                var r = n(4564);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var i = n(1024);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var o = n(4868);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var a = n(2937);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var s = n(4243);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var u = n(2689);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var c = n(6457);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var l = n(5516);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var d = n(1329);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var h = n(1067);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var f = n(7441);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var p = n(6551);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var v = n(5606);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var y = n(4312);
            var g,
                m = { sync: !1, autoForward: !1 };
            !(function (t) {
                ((t[(t.NotStarted = 0)] = 'NotStarted'),
                    (t[(t.Running = 1)] = 'Running'),
                    (t[(t.Stopped = 2)] = 'Stopped'));
            })(g || (g = {}));
            var b =
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
                    ? (function () {
                          function t(e, n) {
                              var s = this;
                              (void 0 === n && (n = t.defaultOptions),
                                  (this.machine = e),
                                  (this.scheduler = new f.b()),
                                  (this.delayedEventsMap = {}),
                                  (this.listeners = new Set()),
                                  (this.contextListeners = new Set()),
                                  (this.stopListeners = new Set()),
                                  (this.doneListeners = new Set()),
                                  (this.eventListeners = new Set()),
                                  (this.sendListeners = new Set()),
                                  (this.initialized = !1),
                                  (this.status = g.NotStarted),
                                  (this.children = new Map()),
                                  (this.forwardTo = new Set()),
                                  (this.init = this.start),
                                  (this.send = function (t, e) {
                                      if ((0, o.kJ)(t)) return (s.batch(t), s.state);
                                      var n = (0, o.g5)((0, o._v)(t, e));
                                      if (s.status === g.Stopped)
                                          return (
                                              i.M ||
                                                  (0, o.ZK)(
                                                      !1,
                                                      'Event "'
                                                          .concat(n.name, '" was sent to stopped service "')
                                                          .concat(
                                                              s.machine.id,
                                                              '". This service has already reached its final state, and will not transition.\nEvent: ',
                                                          )
                                                          .concat(JSON.stringify(n.data)),
                                                  ),
                                              s.state
                                          );
                                      if (s.status !== g.Running && !s.options.deferEvents)
                                          throw new Error(
                                              'Event "'
                                                  .concat(n.name, '" was sent to uninitialized service "')
                                                  .concat(
                                                      s.machine.id,
                                                      '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: ',
                                                  )
                                                  .concat(JSON.stringify(n.data)),
                                          );
                                      return (
                                          s.scheduler.schedule(function () {
                                              s.forward(n);
                                              var t = s.nextState(n);
                                              s.update(t, n);
                                          }),
                                          s._state
                                      );
                                  }),
                                  (this.sendTo = function (t, e) {
                                      var n = s.parent && (e === a.K.Parent || s.parent.id === e),
                                          l = n
                                              ? s.parent
                                              : (0, o.HD)(e)
                                                ? s.children.get(e) || p.i.get(e)
                                                : (0, o.Bc)(e)
                                                  ? e
                                                  : void 0;
                                      if (l)
                                          'machine' in l
                                              ? l.send(
                                                    (0, r.pi)((0, r.pi)({}, t), {
                                                        name: t.name === u.vU ? ''.concat((0, c.vU)(s.id)) : t.name,
                                                        origin: s.sessionId,
                                                    }),
                                                )
                                              : l.send(t.data);
                                      else {
                                          if (!n)
                                              throw new Error(
                                                  "Unable to send event to child '"
                                                      .concat(e, "' from service '")
                                                      .concat(s.id, "'."),
                                              );
                                          i.M ||
                                              (0, o.ZK)(
                                                  !1,
                                                  "Service '"
                                                      .concat(s.id, "' has no parent: unable to send event ")
                                                      .concat(t.type),
                                              );
                                      }
                                  }));
                              var l = (0, r.pi)((0, r.pi)({}, t.defaultOptions), n),
                                  d = l.clock,
                                  h = l.logger,
                                  v = l.parent,
                                  y = l.id,
                                  m = void 0 !== y ? y : e.id;
                              ((this.id = m),
                                  (this.logger = h),
                                  (this.clock = d),
                                  (this.parent = v),
                                  (this.options = l),
                                  (this.scheduler = new f.b({ deferEvents: this.options.deferEvents })),
                                  (this.sessionId = p.i.bookId()));
                          }
                          return (
                              Object.defineProperty(t.prototype, 'initialState', {
                                  get: function () {
                                      var t = this;
                                      return this._initialState
                                          ? this._initialState
                                          : (0, d.J)(this, function () {
                                                return ((t._initialState = t.machine.initialState), t._initialState);
                                            });
                                  },
                                  enumerable: !1,
                                  configurable: !0,
                              }),
                              Object.defineProperty(t.prototype, 'state', {
                                  get: function () {
                                      return (
                                          i.M ||
                                              (0, o.ZK)(
                                                  this.status !== g.NotStarted,
                                                  "Attempted to read state from uninitialized service '".concat(
                                                      this.id,
                                                      "'. Make sure the service is started first.",
                                                  ),
                                              ),
                                          this._state
                                      );
                                  },
                                  enumerable: !1,
                                  configurable: !0,
                              }),
                              (t.prototype.execute = function (t, e) {
                                  var n, i;
                                  try {
                                      for (var o = (0, r.XA)(t.actions), a = o.next(); !a.done; a = o.next()) {
                                          var s = a.value;
                                          this.exec(s, t, e);
                                      }
                                  } catch (t) {
                                      n = { error: t };
                                  } finally {
                                      try {
                                          a && !a.done && (i = o.return) && i.call(o);
                                      } finally {
                                          if (n) throw n.error;
                                      }
                                  }
                              }),
                              (t.prototype.update = function (t, e) {
                                  var n,
                                      i,
                                      a,
                                      u,
                                      l,
                                      d,
                                      h,
                                      f,
                                      p = this;
                                  if (
                                      ((t._sessionid = this.sessionId),
                                      (this._state = t),
                                      this.options.execute && this.execute(this.state),
                                      this.children.forEach(function (t) {
                                          p.state.children[t.id] = t;
                                      }),
                                      this.devTools && this.devTools.send(e.data, t),
                                      t.event)
                                  )
                                      try {
                                          for (
                                              var v = (0, r.XA)(this.eventListeners), y = v.next();
                                              !y.done;
                                              y = v.next()
                                          )
                                              (0, y.value)(t.event);
                                      } catch (t) {
                                          n = { error: t };
                                      } finally {
                                          try {
                                              y && !y.done && (i = v.return) && i.call(v);
                                          } finally {
                                              if (n) throw n.error;
                                          }
                                      }
                                  try {
                                      for (var g = (0, r.XA)(this.listeners), m = g.next(); !m.done; m = g.next())
                                          (0, m.value)(t, t.event);
                                  } catch (t) {
                                      a = { error: t };
                                  } finally {
                                      try {
                                          m && !m.done && (u = g.return) && u.call(g);
                                      } finally {
                                          if (a) throw a.error;
                                      }
                                  }
                                  try {
                                      for (
                                          var b = (0, r.XA)(this.contextListeners), _ = b.next();
                                          !_.done;
                                          _ = b.next()
                                      )
                                          (0, _.value)(
                                              this.state.context,
                                              this.state.history ? this.state.history.context : void 0,
                                          );
                                  } catch (t) {
                                      l = { error: t };
                                  } finally {
                                      try {
                                          _ && !_.done && (d = b.return) && d.call(b);
                                      } finally {
                                          if (l) throw l.error;
                                      }
                                  }
                                  var w = (0, s.Ij)(t.configuration || [], this.machine);
                                  if (this.state.configuration && w) {
                                      var S = t.configuration.find(function (t) {
                                              return 'final' === t.type && t.parent === p.machine;
                                          }),
                                          O = S && S.doneData ? (0, o.QX)(S.doneData, t.context, e) : void 0;
                                      try {
                                          for (
                                              var x = (0, r.XA)(this.doneListeners), W = x.next();
                                              !W.done;
                                              W = x.next()
                                          )
                                              (0, W.value)((0, c.Sl)(this.id, O));
                                      } catch (t) {
                                          h = { error: t };
                                      } finally {
                                          try {
                                              W && !W.done && (f = x.return) && f.call(x);
                                          } finally {
                                              if (h) throw h.error;
                                          }
                                      }
                                      this.stop();
                                  }
                              }),
                              (t.prototype.onTransition = function (t) {
                                  return (
                                      this.listeners.add(t),
                                      this.status === g.Running && t(this.state, this.state.event),
                                      this
                                  );
                              }),
                              (t.prototype.subscribe = function (t, e, n) {
                                  var r,
                                      i = this;
                                  if (!t) return { unsubscribe: function () {} };
                                  var o = n;
                                  return (
                                      'function' == typeof t
                                          ? (r = t)
                                          : ((r = t.next.bind(t)), (o = t.complete.bind(t))),
                                      this.listeners.add(r),
                                      this.status === g.Running && r(this.state),
                                      o && this.onDone(o),
                                      {
                                          unsubscribe: function () {
                                              (r && i.listeners.delete(r), o && i.doneListeners.delete(o));
                                          },
                                      }
                                  );
                              }),
                              (t.prototype.onEvent = function (t) {
                                  return (this.eventListeners.add(t), this);
                              }),
                              (t.prototype.onSend = function (t) {
                                  return (this.sendListeners.add(t), this);
                              }),
                              (t.prototype.onChange = function (t) {
                                  return (this.contextListeners.add(t), this);
                              }),
                              (t.prototype.onStop = function (t) {
                                  return (this.stopListeners.add(t), this);
                              }),
                              (t.prototype.onDone = function (t) {
                                  return (this.doneListeners.add(t), this);
                              }),
                              (t.prototype.off = function (t) {
                                  return (
                                      this.listeners.delete(t),
                                      this.eventListeners.delete(t),
                                      this.sendListeners.delete(t),
                                      this.stopListeners.delete(t),
                                      this.doneListeners.delete(t),
                                      this.contextListeners.delete(t),
                                      this
                                  );
                              }),
                              (t.prototype.start = function (t) {
                                  var e = this;
                                  if (this.status === g.Running) return this;
                                  (p.i.register(this.sessionId, this),
                                      (this.initialized = !0),
                                      (this.status = g.Running));
                                  var n =
                                      void 0 === t
                                          ? this.initialState
                                          : (0, d.J)(this, function () {
                                                return (0, l.LW)(t)
                                                    ? e.machine.resolveState(t)
                                                    : e.machine.resolveState(l.ZM.from(t, e.machine.context));
                                            });
                                  return (
                                      this.options.devTools && this.attachDev(),
                                      this.scheduler.initialize(function () {
                                          e.update(n, c.bf);
                                      }),
                                      this
                                  );
                              }),
                              (t.prototype.stop = function () {
                                  var t,
                                      e,
                                      n,
                                      i,
                                      a,
                                      s,
                                      u,
                                      c,
                                      l,
                                      d,
                                      h = this;
                                  try {
                                      for (var f = (0, r.XA)(this.listeners), v = f.next(); !v.done; v = f.next()) {
                                          var y = v.value;
                                          this.listeners.delete(y);
                                      }
                                  } catch (e) {
                                      t = { error: e };
                                  } finally {
                                      try {
                                          v && !v.done && (e = f.return) && e.call(f);
                                      } finally {
                                          if (t) throw t.error;
                                      }
                                  }
                                  try {
                                      for (var m = (0, r.XA)(this.stopListeners), b = m.next(); !b.done; b = m.next())
                                          ((y = b.value)(), this.stopListeners.delete(y));
                                  } catch (t) {
                                      n = { error: t };
                                  } finally {
                                      try {
                                          b && !b.done && (i = m.return) && i.call(m);
                                      } finally {
                                          if (n) throw n.error;
                                      }
                                  }
                                  try {
                                      for (
                                          var _ = (0, r.XA)(this.contextListeners), w = _.next();
                                          !w.done;
                                          w = _.next()
                                      )
                                          ((y = w.value), this.contextListeners.delete(y));
                                  } catch (t) {
                                      a = { error: t };
                                  } finally {
                                      try {
                                          w && !w.done && (s = _.return) && s.call(_);
                                      } finally {
                                          if (a) throw a.error;
                                      }
                                  }
                                  try {
                                      for (var S = (0, r.XA)(this.doneListeners), O = S.next(); !O.done; O = S.next())
                                          ((y = O.value), this.doneListeners.delete(y));
                                  } catch (t) {
                                      u = { error: t };
                                  } finally {
                                      try {
                                          O && !O.done && (c = S.return) && c.call(S);
                                      } finally {
                                          if (u) throw u.error;
                                      }
                                  }
                                  if (!this.initialized) return this;
                                  (this.state.configuration.forEach(function (t) {
                                      var e, n;
                                      try {
                                          for (
                                              var i = (0, r.XA)(t.definition.exit), o = i.next();
                                              !o.done;
                                              o = i.next()
                                          ) {
                                              var a = o.value;
                                              h.exec(a, h.state);
                                          }
                                      } catch (t) {
                                          e = { error: t };
                                      } finally {
                                          try {
                                              o && !o.done && (n = i.return) && n.call(i);
                                          } finally {
                                              if (e) throw e.error;
                                          }
                                      }
                                  }),
                                      this.children.forEach(function (t) {
                                          (0, o.mf)(t.stop) && t.stop();
                                      }));
                                  try {
                                      for (
                                          var x = (0, r.XA)((0, o.XP)(this.delayedEventsMap)), W = x.next();
                                          !W.done;
                                          W = x.next()
                                      ) {
                                          var R = W.value;
                                          this.clock.clearTimeout(this.delayedEventsMap[R]);
                                      }
                                  } catch (t) {
                                      l = { error: t };
                                  } finally {
                                      try {
                                          W && !W.done && (d = x.return) && d.call(x);
                                      } finally {
                                          if (l) throw l.error;
                                      }
                                  }
                                  return (
                                      this.scheduler.clear(),
                                      (this.initialized = !1),
                                      (this.status = g.Stopped),
                                      p.i.free(this.sessionId),
                                      this
                                  );
                              }),
                              (t.prototype.batch = function (t) {
                                  var e = this;
                                  if (this.status === g.NotStarted && this.options.deferEvents)
                                      i.M ||
                                          (0, o.ZK)(
                                              !1,
                                              ''
                                                  .concat(t.length, ' event(s) were sent to uninitialized service "')
                                                  .concat(
                                                      this.machine.id,
                                                      '" and are deferred. Make sure .start() is called for this service.\nEvent: ',
                                                  )
                                                  .concat(JSON.stringify(event)),
                                          );
                                  else if (this.status !== g.Running)
                                      throw new Error(
                                          ''
                                              .concat(t.length, ' event(s) were sent to uninitialized service "')
                                              .concat(
                                                  this.machine.id,
                                                  '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.',
                                              ),
                                      );
                                  this.scheduler.schedule(function () {
                                      var n,
                                          i,
                                          a = e.state,
                                          s = !1,
                                          u = [],
                                          c = function (t) {
                                              var n = (0, o.g5)(t);
                                              (e.forward(n),
                                                  (a = (0, d.J)(e, function () {
                                                      return e.machine.transition(a, n);
                                                  })),
                                                  u.push.apply(
                                                      u,
                                                      (0, r.ev)(
                                                          [],
                                                          (0, r.CR)(
                                                              a.actions.map(function (t) {
                                                                  return (0, l.j1)(t, a);
                                                              }),
                                                          ),
                                                          !1,
                                                      ),
                                                  ),
                                                  (s = s || !!a.changed));
                                          };
                                      try {
                                          for (var h = (0, r.XA)(t), f = h.next(); !f.done; f = h.next()) c(f.value);
                                      } catch (t) {
                                          n = { error: t };
                                      } finally {
                                          try {
                                              f && !f.done && (i = h.return) && i.call(h);
                                          } finally {
                                              if (n) throw n.error;
                                          }
                                      }
                                      ((a.changed = s), (a.actions = u), e.update(a, (0, o.g5)(t[t.length - 1])));
                                  });
                              }),
                              (t.prototype.sender = function (t) {
                                  return this.send.bind(this, t);
                              }),
                              (t.prototype.nextState = function (t) {
                                  var e = this,
                                      n = (0, o.g5)(t);
                                  if (
                                      0 === n.name.indexOf(u.Mg) &&
                                      !this.state.nextEvents.some(function (t) {
                                          return 0 === t.indexOf(u.Mg);
                                      })
                                  )
                                      throw n.data.data;
                                  return (0, d.J)(this, function () {
                                      return e.machine.transition(e.state, n);
                                  });
                              }),
                              (t.prototype.forward = function (t) {
                                  var e, n;
                                  try {
                                      for (var i = (0, r.XA)(this.forwardTo), o = i.next(); !o.done; o = i.next()) {
                                          var a = o.value,
                                              s = this.children.get(a);
                                          if (!s)
                                              throw new Error(
                                                  "Unable to forward event '"
                                                      .concat(t, "' from interpreter '")
                                                      .concat(this.id, "' to nonexistant child '")
                                                      .concat(a, "'."),
                                              );
                                          s.send(t);
                                      }
                                  } catch (t) {
                                      e = { error: t };
                                  } finally {
                                      try {
                                          o && !o.done && (n = i.return) && n.call(i);
                                      } finally {
                                          if (e) throw e.error;
                                      }
                                  }
                              }),
                              (t.prototype.defer = function (t) {
                                  var e = this;
                                  this.delayedEventsMap[t.id] = this.clock.setTimeout(function () {
                                      t.to ? e.sendTo(t._event, t.to) : e.send(t._event);
                                  }, t.delay);
                              }),
                              (t.prototype.cancel = function (t) {
                                  (this.clock.clearTimeout(this.delayedEventsMap[t]), delete this.delayedEventsMap[t]);
                              }),
                              (t.prototype.exec = function (t, e, n) {
                                  void 0 === n && (n = this.machine.options.actions);
                                  var r = e.context,
                                      s = e._event,
                                      l = t.exec || (0, c.o$)(t.type, n),
                                      d = (0, o.mf)(l) ? l : l ? l.exec : t.exec;
                                  if (d)
                                      try {
                                          return d(r, s.data, { action: t, state: this.state, _event: s });
                                      } catch (t) {
                                          throw (this.parent && this.parent.send({ type: 'xstate.error', data: t }), t);
                                      }
                                  switch (t.type) {
                                      case u.lW:
                                          var h = t;
                                          if ('number' == typeof h.delay) return void this.defer(h);
                                          h.to ? this.sendTo(h._event, h.to) : this.send(h._event);
                                          break;
                                      case u.al:
                                          this.cancel(t.sendId);
                                          break;
                                      case u.BL:
                                          var f = t.activity;
                                          if (!this.state.activities[f.id || f.type]) break;
                                          if (f.type === a.M.Invoke) {
                                              var p = (0, o.j)(f.src),
                                                  v = this.machine.options.services
                                                      ? this.machine.options.services[p.type]
                                                      : void 0,
                                                  y = f.id,
                                                  g = f.data;
                                              i.M ||
                                                  (0, o.ZK)(
                                                      !('forward' in f),
                                                      "`forward` property is deprecated (found in invocation of '"
                                                          .concat(f.src, "' in in machine '")
                                                          .concat(this.machine.id, "'). ") +
                                                          'Please use `autoForward` instead.',
                                                  );
                                              var m = 'autoForward' in f ? f.autoForward : !!f.forward;
                                              if (!v)
                                                  return void (
                                                      i.M ||
                                                      (0, o.ZK)(
                                                          !1,
                                                          "No service found for invocation '"
                                                              .concat(f.src, "' in machine '")
                                                              .concat(this.machine.id, "'."),
                                                      )
                                                  );
                                              var b = g ? (0, o.QX)(g, r, s) : void 0;
                                              if ('string' == typeof v) return;
                                              var _ = (0, o.mf)(v)
                                                  ? v(r, s.data, { data: b, src: p, meta: f.meta })
                                                  : v;
                                              if (!_) return;
                                              var w = void 0;
                                              ((0, o.O4)(_) &&
                                                  ((_ = b ? _.withContext(b) : _), (w = { autoForward: m })),
                                                  this.spawn(_, y, w));
                                          } else this.spawnActivity(f);
                                          break;
                                      case u.sT:
                                          this.stopChild(t.activity.id);
                                          break;
                                      case u.cM:
                                          var S = t.label,
                                              O = t.value;
                                          S ? this.logger(S, O) : this.logger(O);
                                          break;
                                      default:
                                          i.M ||
                                              (0, o.ZK)(
                                                  !1,
                                                  "No implementation found for action type '".concat(t.type, "'"),
                                              );
                                  }
                              }),
                              (t.prototype.removeChild = function (t) {
                                  var e;
                                  (this.children.delete(t),
                                      this.forwardTo.delete(t),
                                      null === (e = this.state) || void 0 === e || delete e.children[t]);
                              }),
                              (t.prototype.stopChild = function (t) {
                                  var e = this.children.get(t);
                                  e && (this.removeChild(t), (0, o.mf)(e.stop) && e.stop());
                              }),
                              (t.prototype.spawn = function (t, e, n) {
                                  if ((0, o.y8)(t)) return this.spawnPromise(Promise.resolve(t), e);
                                  if ((0, o.mf)(t)) return this.spawnCallback(t, e);
                                  if ((0, h.f3)(t)) return this.spawnActor(t, e);
                                  if ((0, o.bi)(t)) return this.spawnObservable(t, e);
                                  if ((0, o.O4)(t)) return this.spawnMachine(t, (0, r.pi)((0, r.pi)({}, n), { id: e }));
                                  if ((0, o.HV)(t)) return this.spawnBehavior(t, e);
                                  throw new Error(
                                      'Unable to spawn entity "'.concat(e, '" of type "').concat(typeof t, '".'),
                                  );
                              }),
                              (t.prototype.spawnMachine = function (e, n) {
                                  var i = this;
                                  void 0 === n && (n = {});
                                  var a = new t(
                                          e,
                                          (0, r.pi)((0, r.pi)({}, this.options), { parent: this, id: n.id || e.id }),
                                      ),
                                      s = (0, r.pi)((0, r.pi)({}, m), n);
                                  s.sync &&
                                      a.onTransition(function (t) {
                                          i.send(u.Vx, { state: t, id: a.id });
                                      });
                                  var c = a;
                                  return (
                                      this.children.set(a.id, c),
                                      s.autoForward && this.forwardTo.add(a.id),
                                      a
                                          .onDone(function (t) {
                                              (i.removeChild(a.id), i.send((0, o.g5)(t, { origin: a.id })));
                                          })
                                          .start(),
                                      c
                                  );
                              }),
                              (t.prototype.spawnBehavior = function (t, e) {
                                  var n = (0, y.Y)(t, { id: e, parent: this });
                                  return (this.children.set(e, n), n);
                              }),
                              (t.prototype.spawnPromise = function (t, e) {
                                  var n,
                                      r = this,
                                      i = !1;
                                  t.then(
                                      function (t) {
                                          i ||
                                              ((n = t),
                                              r.removeChild(e),
                                              r.send((0, o.g5)((0, c.Sl)(e, t), { origin: e })));
                                      },
                                      function (t) {
                                          if (!i) {
                                              r.removeChild(e);
                                              var n = (0, c.vU)(e, t);
                                              try {
                                                  r.send((0, o.g5)(n, { origin: e }));
                                              } catch (i) {
                                                  ((0, o.v4)(t, i, e),
                                                      r.devTools && r.devTools.send(n, r.state),
                                                      r.machine.strict && r.stop());
                                              }
                                          }
                                      },
                                  );
                                  var a = {
                                      id: e,
                                      send: function () {},
                                      subscribe: function (e, n, r) {
                                          var i = (0, o.zM)(e, n, r),
                                              a = !1;
                                          return (
                                              t.then(
                                                  function (t) {
                                                      a || (i.next(t), a || i.complete());
                                                  },
                                                  function (t) {
                                                      a || i.error(t);
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
                                          return { id: e };
                                      },
                                      getSnapshot: function () {
                                          return n;
                                      },
                                  };
                                  return (this.children.set(e, a), a);
                              }),
                              (t.prototype.spawnCallback = function (t, e) {
                                  var n,
                                      r,
                                      i = this,
                                      a = !1,
                                      s = new Set(),
                                      u = new Set();
                                  try {
                                      r = t(
                                          function (t) {
                                              ((n = t),
                                                  u.forEach(function (e) {
                                                      return e(t);
                                                  }),
                                                  a || i.send((0, o.g5)(t, { origin: e })));
                                          },
                                          function (t) {
                                              s.add(t);
                                          },
                                      );
                                  } catch (t) {
                                      this.send((0, c.vU)(e, t));
                                  }
                                  if ((0, o.y8)(r)) return this.spawnPromise(r, e);
                                  var l = {
                                      id: e,
                                      send: function (t) {
                                          return s.forEach(function (e) {
                                              return e(t);
                                          });
                                      },
                                      subscribe: function (t) {
                                          return (
                                              u.add(t),
                                              {
                                                  unsubscribe: function () {
                                                      u.delete(t);
                                                  },
                                              }
                                          );
                                      },
                                      stop: function () {
                                          ((a = !0), (0, o.mf)(r) && r());
                                      },
                                      toJSON: function () {
                                          return { id: e };
                                      },
                                      getSnapshot: function () {
                                          return n;
                                      },
                                  };
                                  return (this.children.set(e, l), l);
                              }),
                              (t.prototype.spawnObservable = function (t, e) {
                                  var n,
                                      r = this,
                                      i = t.subscribe(
                                          function (t) {
                                              ((n = t), r.send((0, o.g5)(t, { origin: e })));
                                          },
                                          function (t) {
                                              (r.removeChild(e), r.send((0, o.g5)((0, c.vU)(e, t), { origin: e })));
                                          },
                                          function () {
                                              (r.removeChild(e), r.send((0, o.g5)((0, c.Sl)(e), { origin: e })));
                                          },
                                      ),
                                      a = {
                                          id: e,
                                          send: function () {},
                                          subscribe: function (e, n, r) {
                                              return t.subscribe(e, n, r);
                                          },
                                          stop: function () {
                                              return i.unsubscribe();
                                          },
                                          getSnapshot: function () {
                                              return n;
                                          },
                                          toJSON: function () {
                                              return { id: e };
                                          },
                                      };
                                  return (this.children.set(e, a), a);
                              }),
                              (t.prototype.spawnActor = function (t, e) {
                                  return (this.children.set(e, t), t);
                              }),
                              (t.prototype.spawnActivity = function (t) {
                                  var e =
                                      this.machine.options && this.machine.options.activities
                                          ? this.machine.options.activities[t.type]
                                          : void 0;
                                  if (e) {
                                      var n = e(this.state.context, t);
                                      this.spawnEffect(t.id, n);
                                  } else
                                      i.M ||
                                          (0, o.ZK)(!1, "No implementation found for activity '".concat(t.type, "'"));
                              }),
                              (t.prototype.spawnEffect = function (t, e) {
                                  this.children.set(t, {
                                      id: t,
                                      send: function () {},
                                      subscribe: function () {
                                          return { unsubscribe: function () {} };
                                      },
                                      stop: e || void 0,
                                      getSnapshot: function () {},
                                      toJSON: function () {
                                          return { id: t };
                                      },
                                  });
                              }),
                              (t.prototype.attachDev = function () {
                                  var t = (0, v.R)();
                                  if (this.options.devTools && t) {
                                      if (t.__REDUX_DEVTOOLS_EXTENSION__) {
                                          var e =
                                              'object' == typeof this.options.devTools ? this.options.devTools : void 0;
                                          ((this.devTools = t.__REDUX_DEVTOOLS_EXTENSION__.connect(
                                              (0, r.pi)(
                                                  (0, r.pi)(
                                                      {
                                                          name: this.id,
                                                          autoPause: !0,
                                                          stateSanitizer: function (t) {
                                                              return {
                                                                  value: t.value,
                                                                  context: t.context,
                                                                  actions: t.actions,
                                                              };
                                                          },
                                                      },
                                                      e,
                                                  ),
                                                  {
                                                      features: (0, r.pi)(
                                                          { jump: !1, skip: !1 },
                                                          e ? e.features : void 0,
                                                      ),
                                                  },
                                              ),
                                              this.machine,
                                          )),
                                              this.devTools.init(this.state));
                                      }
                                      (0, v.g)(this);
                                  }
                              }),
                              (t.prototype.toJSON = function () {
                                  return { id: this.id };
                              }),
                              (t.prototype[o.L$] = function () {
                                  return this;
                              }),
                              (t.prototype.getSnapshot = function () {
                                  return this.status === g.NotStarted ? this.initialState : this._state;
                              }),
                              (t.defaultOptions = (function (t) {
                                  return {
                                      execute: !0,
                                      deferEvents: !0,
                                      clock: {
                                          setTimeout: (function (t) {
                                              function e(e, n) {
                                                  return t.apply(this, arguments);
                                              }
                                              return (
                                                  (e.toString = function () {
                                                      return t.toString();
                                                  }),
                                                  e
                                              );
                                          })(function (t, e) {
                                              return setTimeout(t, e);
                                          }),
                                          clearTimeout: (function (t) {
                                              function e(e) {
                                                  return t.apply(this, arguments);
                                              }
                                              return (
                                                  (e.toString = function () {
                                                      return t.toString();
                                                  }),
                                                  e
                                              );
                                          })(function (t) {
                                              return clearTimeout(t);
                                          }),
                                      },
                                      logger: t.console.log.bind(console),
                                      devTools: !1,
                                  };
                              })('undefined' != typeof self ? self : n.g)),
                              (t.interpret = _),
                              t
                          );
                      })()
                    : null;
            function _(t, e) {
                return new b(t, e);
            }
        },
        8732: (t, e, n) => {
            'use strict';
            if (
                (n.d(e, { H: () => o }),
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                ))
            )
                var r = n(4564);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var i = n(2689);
            function o(t) {
                return (0, r.pi)((0, r.pi)({ type: i.dw }, t), {
                    toJSON: function () {
                        (t.onDone, t.onError);
                        var e,
                            n = (0, r._T)(t, ['onDone', 'onError']);
                        return (0, r.pi)((0, r.pi)({}, n), {
                            type: i.dw,
                            src:
                                ((e = t.src),
                                'string' == typeof e
                                    ? {
                                          type: e,
                                          toString: function () {
                                              return e;
                                          },
                                      }
                                    : e),
                        });
                    },
                });
            }
        },
        6551: (t, e, n) => {
            'use strict';
            n.d(e, { i: () => o });
            var r = new Map(),
                i = 0,
                o = {
                    bookId: function () {
                        return 'x:'.concat(i++);
                    },
                    register: function (t, e) {
                        return (r.set(t, e), t);
                    },
                    get: function (t) {
                        return r.get(t);
                    },
                    free: function (t) {
                        r.delete(t);
                    },
                };
        },
        7441: (t, e, n) => {
            'use strict';
            if (
                (n.d(e, { b: () => o }),
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                ))
            )
                var r = n(4564);
            var i = { deferEvents: !1 },
                o =
                    /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                        n.j,
                    )
                        ? (function () {
                              function t(t) {
                                  ((this.processingEvent = !1),
                                      (this.queue = []),
                                      (this.initialized = !1),
                                      (this.options = (0, r.pi)((0, r.pi)({}, i), t)));
                              }
                              return (
                                  (t.prototype.initialize = function (t) {
                                      if (((this.initialized = !0), t)) {
                                          if (!this.options.deferEvents) return void this.schedule(t);
                                          this.process(t);
                                      }
                                      this.flushEvents();
                                  }),
                                  (t.prototype.schedule = function (t) {
                                      if (this.initialized && !this.processingEvent) {
                                          if (0 !== this.queue.length)
                                              throw new Error(
                                                  'Event queue should be empty when it is not processing events',
                                              );
                                          (this.process(t), this.flushEvents());
                                      } else this.queue.push(t);
                                  }),
                                  (t.prototype.clear = function () {
                                      this.queue = [];
                                  }),
                                  (t.prototype.flushEvents = function () {
                                      for (var t = this.queue.shift(); t; ) (this.process(t), (t = this.queue.shift()));
                                  }),
                                  (t.prototype.process = function (t) {
                                      this.processingEvent = !0;
                                      try {
                                          t();
                                      } catch (t) {
                                          throw (this.clear(), t);
                                      } finally {
                                          this.processingEvent = !1;
                                      }
                                  }),
                                  t
                              );
                          })()
                        : null;
        },
        1329: (t, e, n) => {
            'use strict';
            n.d(e, { J: () => i });
            var r =
                    /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                        n.j,
                    )
                        ? []
                        : null,
                i = function (t, e) {
                    r.push(t);
                    var n = e(t);
                    return (r.pop(), n);
                };
        },
        4243: (t, e, n) => {
            'use strict';
            if (
                (n.d(e, {
                    G: () => a,
                    Ij: () => p,
                    N9: () => o,
                    NA: () => d,
                    Oe: () => y,
                    P_: () => u,
                    ac: () => s,
                    e$: () => h,
                    nJ: () => f,
                    xZ: () => v,
                }),
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                ))
            )
                var r = n(4564);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var i = n(4868);
            var o = function (t) {
                return 'atomic' === t.type || 'final' === t.type;
            };
            function a(t) {
                return (0, i.XP)(t.states).map(function (e) {
                    return t.states[e];
                });
            }
            function s(t) {
                var e = [t];
                return o(t) ? e : e.concat((0, i.xH)(a(t).map(s)));
            }
            function u(t, e) {
                var n,
                    i,
                    o,
                    s,
                    u,
                    c,
                    d,
                    h,
                    f = l(new Set(t)),
                    p = new Set(e);
                try {
                    for (var v = (0, r.XA)(p), y = v.next(); !y.done; y = v.next())
                        for (var g = (R = y.value).parent; g && !p.has(g); ) (p.add(g), (g = g.parent));
                } catch (t) {
                    n = { error: t };
                } finally {
                    try {
                        y && !y.done && (i = v.return) && i.call(v);
                    } finally {
                        if (n) throw n.error;
                    }
                }
                var m = l(p);
                try {
                    for (var b = (0, r.XA)(p), _ = b.next(); !_.done; _ = b.next())
                        if ('compound' !== (R = _.value).type || (m.get(R) && m.get(R).length)) {
                            if ('parallel' === R.type)
                                try {
                                    for (var w = ((u = void 0), (0, r.XA)(a(R))), S = w.next(); !S.done; S = w.next()) {
                                        var O = S.value;
                                        'history' !== O.type &&
                                            (p.has(O) ||
                                                (p.add(O),
                                                f.get(O)
                                                    ? f.get(O).forEach(function (t) {
                                                          return p.add(t);
                                                      })
                                                    : O.initialStateNodes.forEach(function (t) {
                                                          return p.add(t);
                                                      })));
                                    }
                                } catch (t) {
                                    u = { error: t };
                                } finally {
                                    try {
                                        S && !S.done && (c = w.return) && c.call(w);
                                    } finally {
                                        if (u) throw u.error;
                                    }
                                }
                        } else
                            f.get(R)
                                ? f.get(R).forEach(function (t) {
                                      return p.add(t);
                                  })
                                : R.initialStateNodes.forEach(function (t) {
                                      return p.add(t);
                                  });
                } catch (t) {
                    o = { error: t };
                } finally {
                    try {
                        _ && !_.done && (s = b.return) && s.call(b);
                    } finally {
                        if (o) throw o.error;
                    }
                }
                try {
                    for (var x = (0, r.XA)(p), W = x.next(); !W.done; W = x.next()) {
                        var R;
                        for (g = (R = W.value).parent; g && !p.has(g); ) (p.add(g), (g = g.parent));
                    }
                } catch (t) {
                    d = { error: t };
                } finally {
                    try {
                        W && !W.done && (h = x.return) && h.call(x);
                    } finally {
                        if (d) throw d.error;
                    }
                }
                return p;
            }
            function c(t, e) {
                var n = e.get(t);
                if (!n) return {};
                if ('compound' === t.type) {
                    var r = n[0];
                    if (!r) return {};
                    if (o(r)) return r.key;
                }
                var i = {};
                return (
                    n.forEach(function (t) {
                        i[t.key] = c(t, e);
                    }),
                    i
                );
            }
            function l(t) {
                var e,
                    n,
                    i = new Map();
                try {
                    for (var o = (0, r.XA)(t), a = o.next(); !a.done; a = o.next()) {
                        var s = a.value;
                        (i.has(s) || i.set(s, []),
                            s.parent && (i.has(s.parent) || i.set(s.parent, []), i.get(s.parent).push(s)));
                    }
                } catch (t) {
                    e = { error: t };
                } finally {
                    try {
                        a && !a.done && (n = o.return) && n.call(o);
                    } finally {
                        if (e) throw e.error;
                    }
                }
                return i;
            }
            function d(t, e) {
                return c(t, l(u([t], e)));
            }
            function h(t, e) {
                return Array.isArray(t)
                    ? t.some(function (t) {
                          return t === e;
                      })
                    : t instanceof Set && t.has(e);
            }
            function f(t) {
                return (0, r.ev)(
                    [],
                    (0, r.CR)(
                        new Set(
                            (0, i.xH)(
                                (0, r.ev)(
                                    [],
                                    (0, r.CR)(
                                        t.map(function (t) {
                                            return t.ownEvents;
                                        }),
                                    ),
                                    !1,
                                ),
                            ),
                        ),
                    ),
                    !1,
                );
            }
            function p(t, e) {
                return 'compound' === e.type
                    ? a(e).some(function (e) {
                          return 'final' === e.type && h(t, e);
                      })
                    : 'parallel' === e.type &&
                          a(e).every(function (e) {
                              return p(t, e);
                          });
            }
            function v(t) {
                return (
                    void 0 === t && (t = []),
                    t.reduce(function (t, e) {
                        return (void 0 !== e.meta && (t[e.id] = e.meta), t);
                    }, {})
                );
            }
            function y(t) {
                return new Set(
                    (0, i.xH)(
                        t.map(function (t) {
                            return t.tags;
                        }),
                    ),
                );
            }
        },
        2937: (t, e, n) => {
            'use strict';
            var r, i;
            (n.d(e, { K: () => i, M: () => r }),
                (function (t) {
                    ((t.Start = 'xstate.start'),
                        (t.Stop = 'xstate.stop'),
                        (t.Raise = 'xstate.raise'),
                        (t.Send = 'xstate.send'),
                        (t.Cancel = 'xstate.cancel'),
                        (t.NullEvent = ''),
                        (t.Assign = 'xstate.assign'),
                        (t.After = 'xstate.after'),
                        (t.DoneState = 'done.state'),
                        (t.DoneInvoke = 'done.invoke'),
                        (t.Log = 'xstate.log'),
                        (t.Init = 'xstate.init'),
                        (t.Invoke = 'xstate.invoke'),
                        (t.ErrorExecution = 'error.execution'),
                        (t.ErrorCommunication = 'error.communication'),
                        (t.ErrorPlatform = 'error.platform'),
                        (t.ErrorCustom = 'xstate.error'),
                        (t.Update = 'xstate.update'),
                        (t.Pure = 'xstate.pure'),
                        (t.Choose = 'xstate.choose'));
                })(r || (r = {})),
                (function (t) {
                    ((t.Parent = '#_parent'), (t.Internal = '#_internal'));
                })(i || (i = {})));
        },
        4868: (t, e, n) => {
            'use strict';
            if (
                (n.d(e, {
                    Bc: () => k,
                    ET: () => p,
                    HD: () => A,
                    HV: () => O,
                    JQ: () => w,
                    L$: () => V,
                    O4: () => M,
                    Q8: () => h,
                    Q9: () => c,
                    QX: () => _,
                    Qi: () => P,
                    SA: () => y,
                    W: () => s,
                    WM: () => l,
                    XP: () => a,
                    ZK: () => j,
                    _v: () => F,
                    bi: () => B,
                    dt: () => E,
                    g5: () => C,
                    gk: () => v,
                    ib: () => f,
                    j: () => L,
                    jh: () => N,
                    kJ: () => U,
                    mf: () => T,
                    on: () => d,
                    qo: () => b,
                    rg: () => H,
                    uK: () => x,
                    v4: () => D,
                    vx: () => I,
                    x6: () => u,
                    xH: () => g,
                    y8: () => S,
                    yv: () => R,
                    zM: () => $,
                }),
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                ))
            )
                var r = n(4564);
            if (
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
            )
                var i = n(4988);
            var o = n(1024);
            function a(t) {
                return Object.keys(t);
            }
            function s(t, e, n) {
                void 0 === n && (n = i.iS);
                var r = l(t, n),
                    o = l(e, n);
                return A(o)
                    ? !!A(r) && o === r
                    : A(r)
                      ? r in o
                      : a(r).every(function (t) {
                            return t in o && s(r[t], o[t]);
                        });
            }
            function u(t) {
                try {
                    return A(t) || 'number' == typeof t ? ''.concat(t) : t.type;
                } catch (t) {
                    throw new Error('Events must be strings or objects with a string event.type property.');
                }
            }
            function c(t, e) {
                try {
                    return U(t) ? t : t.toString().split(e);
                } catch (e) {
                    throw new Error("'".concat(t, "' is not a valid state path."));
                }
            }
            function l(t, e) {
                return 'object' == typeof (n = t) && 'value' in n && 'context' in n && 'event' in n && '_event' in n
                    ? t.value
                    : U(t)
                      ? d(t)
                      : 'string' != typeof t
                        ? t
                        : d(c(t, e));
                var n;
            }
            function d(t) {
                if (1 === t.length) return t[0];
                for (var e = {}, n = e, r = 0; r < t.length - 1; r++)
                    r === t.length - 2 ? (n[t[r]] = t[r + 1]) : ((n[t[r]] = {}), (n = n[t[r]]));
                return e;
            }
            function h(t, e) {
                for (var n = {}, r = a(t), i = 0; i < r.length; i++) {
                    var o = r[i];
                    n[o] = e(t[o], o, t, i);
                }
                return n;
            }
            function f(t, e, n) {
                var i,
                    o,
                    s = {};
                try {
                    for (var u = (0, r.XA)(a(t)), c = u.next(); !c.done; c = u.next()) {
                        var l = c.value,
                            d = t[l];
                        n(d) && (s[l] = e(d, l, t));
                    }
                } catch (t) {
                    i = { error: t };
                } finally {
                    try {
                        c && !c.done && (o = u.return) && o.call(u);
                    } finally {
                        if (i) throw i.error;
                    }
                }
                return s;
            }
            var p = function (t) {
                return function (e) {
                    var n,
                        i,
                        o = e;
                    try {
                        for (var a = (0, r.XA)(t), s = a.next(); !s.done; s = a.next()) o = o[s.value];
                    } catch (t) {
                        n = { error: t };
                    } finally {
                        try {
                            s && !s.done && (i = a.return) && i.call(a);
                        } finally {
                            if (n) throw n.error;
                        }
                    }
                    return o;
                };
            };
            function v(t, e) {
                return function (n) {
                    var i,
                        o,
                        a = n;
                    try {
                        for (var s = (0, r.XA)(t), u = s.next(); !u.done; u = s.next()) {
                            var c = u.value;
                            a = a[e][c];
                        }
                    } catch (t) {
                        i = { error: t };
                    } finally {
                        try {
                            u && !u.done && (o = s.return) && o.call(s);
                        } finally {
                            if (i) throw i.error;
                        }
                    }
                    return a;
                };
            }
            function y(t) {
                return t
                    ? A(t)
                        ? [[t]]
                        : g(
                              a(t).map(function (e) {
                                  var n = t[e];
                                  return 'string' == typeof n || (n && Object.keys(n).length)
                                      ? y(t[e]).map(function (t) {
                                            return [e].concat(t);
                                        })
                                      : [[e]];
                              }),
                          )
                    : [[]];
            }
            function g(t) {
                var e;
                return (e = []).concat.apply(e, (0, r.ev)([], (0, r.CR)(t), !1));
            }
            function m(t) {
                return U(t) ? t : [t];
            }
            function b(t) {
                return void 0 === t ? [] : m(t);
            }
            function _(t, e, n) {
                var i, o;
                if (T(t)) return t(e, n.data);
                var a = {};
                try {
                    for (var s = (0, r.XA)(Object.keys(t)), u = s.next(); !u.done; u = s.next()) {
                        var c = u.value,
                            l = t[c];
                        T(l) ? (a[c] = l(e, n.data)) : (a[c] = l);
                    }
                } catch (t) {
                    i = { error: t };
                } finally {
                    try {
                        u && !u.done && (o = s.return) && o.call(s);
                    } finally {
                        if (i) throw i.error;
                    }
                }
                return a;
            }
            function w(t) {
                return /^(done|error)\./.test(t);
            }
            function S(t) {
                return t instanceof Promise || !(null === t || (!T(t) && 'object' != typeof t) || !T(t.then));
            }
            function O(t) {
                return null !== t && 'object' == typeof t && 'transition' in t && 'function' == typeof t.transition;
            }
            function x(t, e) {
                var n,
                    i,
                    o = (0, r.CR)([[], []], 2),
                    a = o[0],
                    s = o[1];
                try {
                    for (var u = (0, r.XA)(t), c = u.next(); !c.done; c = u.next()) {
                        var l = c.value;
                        e(l) ? a.push(l) : s.push(l);
                    }
                } catch (t) {
                    n = { error: t };
                } finally {
                    try {
                        c && !c.done && (i = u.return) && i.call(u);
                    } finally {
                        if (n) throw n.error;
                    }
                }
                return [a, s];
            }
            function W(t, e) {
                return h(t.states, function (t, n) {
                    if (t) {
                        var r = (A(e) ? void 0 : e[n]) || (t ? t.current : void 0);
                        if (r) return { current: r, states: W(t, r) };
                    }
                });
            }
            function R(t, e) {
                return { current: e, states: W(t, e) };
            }
            function E(t, e, n, i) {
                return (
                    o.M || j(!!t, 'Attempting to update undefined context'),
                    t
                        ? n.reduce(function (t, n) {
                              var o,
                                  s,
                                  u = n.assignment,
                                  c = { state: i, action: n, _event: e },
                                  l = {};
                              if (T(u)) l = u(t, e.data, c);
                              else
                                  try {
                                      for (var d = (0, r.XA)(a(u)), h = d.next(); !h.done; h = d.next()) {
                                          var f = h.value,
                                              p = u[f];
                                          l[f] = T(p) ? p(t, e.data, c) : p;
                                      }
                                  } catch (t) {
                                      o = { error: t };
                                  } finally {
                                      try {
                                          h && !h.done && (s = d.return) && s.call(d);
                                      } finally {
                                          if (o) throw o.error;
                                      }
                                  }
                              return Object.assign({}, t, l);
                          }, t)
                        : t
                );
            }
            var j = function () {};
            function U(t) {
                return Array.isArray(t);
            }
            function T(t) {
                return 'function' == typeof t;
            }
            function A(t) {
                return 'string' == typeof t;
            }
            function P(t, e) {
                if (t)
                    return A(t)
                        ? { type: i.TV, name: t, predicate: e ? e[t] : void 0 }
                        : T(t)
                          ? { type: i.TV, name: t.name, predicate: t }
                          : t;
            }
            function B(t) {
                try {
                    return 'subscribe' in t && T(t.subscribe);
                } catch (t) {
                    return !1;
                }
            }
            o.M ||
                (j = function (t, e) {
                    var n = t instanceof Error ? t : void 0;
                    if ((n || !t) && void 0 !== console) {
                        var r = ['Warning: '.concat(e)];
                        (n && r.push(n), console.warn.apply(console, r));
                    }
                });
            var V =
                /^lobby\/feature\/FunRandom(HangarWidgetView\/FunRandomHangarWidgetView|ModeSubSelector\/FunRandomModeSubSelector)$/.test(
                    n.j,
                )
                    ? ('function' == typeof Symbol && Symbol.observable) || '@@observable'
                    : null;
            function M(t) {
                try {
                    return '__xstatenode' in t;
                } catch (t) {
                    return !1;
                }
            }
            function k(t) {
                return !!t && 'function' == typeof t.send;
            }
            function F(t, e) {
                return A(t) || 'number' == typeof t ? (0, r.pi)({ type: t }, e) : t;
            }
            function C(t, e) {
                if (!A(t) && '$$type' in t && 'scxml' === t.$$type) return t;
                var n = F(t);
                return (0, r.pi)({ name: n.type, data: n, $$type: 'scxml', type: 'external' }, e);
            }
            function N(t, e) {
                return m(e).map(function (e) {
                    return void 0 === e || 'string' == typeof e || M(e)
                        ? { target: e, event: t }
                        : (0, r.pi)((0, r.pi)({}, e), { event: t });
                });
            }
            function H(t) {
                if (void 0 !== t && t !== i.rt) return b(t);
            }
            function D(t, e, n) {
                if (!o.M) {
                    var r = t.stack ? " Stacktrace was '".concat(t.stack, "'") : '';
                    if (t === e)
                        console.error(
                            "Missing onError handler for invocation '"
                                .concat(n, "', error was '")
                                .concat(t, "'.")
                                .concat(r),
                        );
                    else {
                        var i = e.stack ? " Stacktrace was '".concat(e.stack, "'") : '';
                        console.error(
                            "Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(
                                n,
                                "'. ",
                            ) +
                                "Original error: '"
                                    .concat(t, "'. ")
                                    .concat(r, " Current error is '")
                                    .concat(e, "'.")
                                    .concat(i),
                        );
                    }
                }
            }
            function I(t, e, n, r, o) {
                var a = t.options.guards,
                    s = { state: o, cond: e, _event: r };
                if (e.type === i.TV) return ((null == a ? void 0 : a[e.name]) || e.predicate)(n, r.data, s);
                var u = a[e.type];
                if (!u)
                    throw new Error("Guard '".concat(e.type, "' is not implemented on machine '").concat(t.id, "'."));
                return u(n, r.data, s);
            }
            function L(t) {
                return 'string' == typeof t ? { type: t } : t;
            }
            function $(t, e, n) {
                if ('object' == typeof t) return t;
                var r = function () {};
                return { next: t, error: e || r, complete: n || r };
            }
        },
        7669: (t, e, n) => {
            'use strict';
            function r() {
                return (
                    (r =
                        Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                            }
                            return t;
                        }),
                    r.apply(this, arguments)
                );
            }
            n.d(e, { Z: () => r });
        },
        8846: (t, e, n) => {
            'use strict';
            if (
                (n.d(e, { Z: () => i }),
                /^lobby\/feature\/FunRandom(Progression\/FunRandomProgression|RewardsView\/FunRandomRewardsView)$/.test(
                    n.j,
                ))
            )
                var r = n(720);
            function i(t, e) {
                ((t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (0, r.Z)(t, e));
            }
        },
        4361: (t, e, n) => {
            'use strict';
            function r(t, e) {
                if (null == t) return {};
                var n,
                    r,
                    i = {},
                    o = Object.keys(t);
                for (r = 0; r < o.length; r++) ((n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]));
                return i;
            }
            n.d(e, { Z: () => r });
        },
        720: (t, e, n) => {
            'use strict';
            function r(t, e) {
                return (
                    (r =
                        Object.setPrototypeOf ||
                        function (t, e) {
                            return ((t.__proto__ = e), t);
                        }),
                    r(t, e)
                );
            }
            n.d(e, { Z: () => r });
        },
    },
]);
