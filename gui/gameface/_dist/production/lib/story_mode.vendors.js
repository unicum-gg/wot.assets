/*! For license information please see story_mode.vendors.js.LICENSE.txt */
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    ['lib/story_mode.vendors'],
    {
        1686: (e, t, n) => {
            'use strict';
            n.d(t, {
                He: () => u,
                Ld: () => w,
                eC: () => d,
                f3: () => a,
                iG: () => c,
                rS: () => f,
                sb: () => b,
                ys: () => s,
            });
            var r = n(2810),
                i = n(7363);
            const o = Symbol.for('Animated:node'),
                s = (e) => e && e[o],
                a = (e, t) => (0, r.dE)(e, o, t),
                u = (e) => e && e[o] && e[o].getPayload();
            class l {
                constructor() {
                    ((this.payload = void 0), a(this, this));
                }
                getPayload() {
                    return this.payload || [];
                }
            }
            class c extends (/^(lobby\/(BattleResultView\/BattleResult|EventWelcomeView\/EventWelcome|MissionSelectionView\/MissionSelection|NewbieAdvertisingView\/NewbieAdvertising)View|common\/CongratulationsWindow\/CongratulationsWindow)$/.test(
                n.j,
            )
                ? l
                : null) {
                constructor(e) {
                    (super(),
                        (this.done = !0),
                        (this.elapsedTime = void 0),
                        (this.lastPosition = void 0),
                        (this.lastVelocity = void 0),
                        (this.v0 = void 0),
                        (this.durationProgress = 0),
                        (this._value = e),
                        r.is.num(this._value) && (this.lastPosition = this._value));
                }
                static create(e) {
                    return new c(e);
                }
                getPayload() {
                    return [this];
                }
                getValue() {
                    return this._value;
                }
                setValue(e, t) {
                    return (
                        r.is.num(e) &&
                            ((this.lastPosition = e),
                            t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))),
                        this._value !== e && ((this._value = e), !0)
                    );
                }
                reset() {
                    const e = this.done;
                    ((this.done = !1),
                        r.is.num(this._value) &&
                            ((this.elapsedTime = 0),
                            (this.durationProgress = 0),
                            (this.lastPosition = this._value),
                            e && (this.lastVelocity = null),
                            (this.v0 = null)));
                }
            }
            class d extends (/^(lobby\/(BattleResultView\/BattleResult|EventWelcomeView\/EventWelcome|MissionSelectionView\/MissionSelection|NewbieAdvertisingView\/NewbieAdvertising)View|common\/CongratulationsWindow\/CongratulationsWindow)$/.test(
                n.j,
            )
                ? c
                : null) {
                constructor(e) {
                    (super(0),
                        (this._string = null),
                        (this._toString = void 0),
                        (this._toString = (0, r.mD)({ output: [e, e] })));
                }
                static create(e) {
                    return new d(e);
                }
                getValue() {
                    let e = this._string;
                    return null == e ? (this._string = this._toString(this._value)) : e;
                }
                setValue(e) {
                    if (r.is.str(e)) {
                        if (e == this._string) return !1;
                        ((this._string = e), (this._value = 1));
                    } else {
                        if (!super.setValue(e)) return !1;
                        this._string = null;
                    }
                    return !0;
                }
                reset(e) {
                    (e && (this._toString = (0, r.mD)({ output: [this.getValue(), e] })),
                        (this._value = 0),
                        super.reset());
                }
            }
            const h = { dependencies: null };
            class f extends (/^(lobby\/(BattleResultView\/BattleResult|EventWelcomeView\/EventWelcome|MissionSelectionView\/MissionSelection|NewbieAdvertisingView\/NewbieAdvertising)View|common\/CongratulationsWindow\/CongratulationsWindow)$/.test(
                n.j,
            )
                ? l
                : null) {
                constructor(e) {
                    (super(), (this.source = e), this.setValue(e));
                }
                getValue(e) {
                    const t = {};
                    return (
                        (0, r.rU)(this.source, (n, i) => {
                            var s;
                            (s = n) && s[o] === s
                                ? (t[i] = n.getValue(e))
                                : (0, r.j$)(n)
                                  ? (t[i] = (0, r.je)(n))
                                  : e || (t[i] = n);
                        }),
                        t
                    );
                }
                setValue(e) {
                    ((this.source = e), (this.payload = this._makePayload(e)));
                }
                reset() {
                    this.payload && (0, r.S6)(this.payload, (e) => e.reset());
                }
                _makePayload(e) {
                    if (e) {
                        const t = new Set();
                        return ((0, r.rU)(e, this._addToPayload, t), Array.from(t));
                    }
                }
                _addToPayload(e) {
                    h.dependencies && (0, r.j$)(e) && h.dependencies.add(e);
                    const t = u(e);
                    t && (0, r.S6)(t, (e) => this.add(e));
                }
            }
            class p extends (/^(lobby\/(BattleResultView\/BattleResult|EventWelcomeView\/EventWelcome|MissionSelectionView\/MissionSelection|NewbieAdvertisingView\/NewbieAdvertising)View|common\/CongratulationsWindow\/CongratulationsWindow)$/.test(
                n.j,
            )
                ? f
                : null) {
                constructor(e) {
                    super(e);
                }
                static create(e) {
                    return new p(e);
                }
                getValue() {
                    return this.source.map((e) => e.getValue());
                }
                setValue(e) {
                    const t = this.getPayload();
                    return e.length == t.length
                        ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
                        : (super.setValue(e.map(v)), !0);
                }
            }
            function v(e) {
                return ((0, r.Df)(e) ? d : c).create(e);
            }
            function b(e) {
                const t = s(e);
                return t ? t.constructor : r.is.arr(e) ? p : (0, r.Df)(e) ? d : c;
            }
            function g() {
                return (
                    (g =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    g.apply(this, arguments)
                );
            }
            const _ = (e, t) => {
                const n = !r.is.fun(e) || (e.prototype && e.prototype.isReactComponent);
                return (0, i.forwardRef)((o, s) => {
                    const a = (0, i.useRef)(null),
                        u =
                            n &&
                            (0, i.useCallback)(
                                (e) => {
                                    a.current = (function (e, t) {
                                        return (e && (r.is.fun(e) ? e(t) : (e.current = t)), t);
                                    })(s, e);
                                },
                                [s],
                            ),
                        l = (function (e, t) {
                            const n = new Set();
                            return (
                                (h.dependencies = n),
                                e.style && (e = g({}, e, { style: t.createAnimatedStyle(e.style) })),
                                (e = new f(e)),
                                (h.dependencies = null),
                                [e, n]
                            );
                        })(o, t),
                        c = l[0],
                        d = l[1],
                        p = (0, r.NW)(),
                        v = () => {
                            const e = a.current;
                            (n && !e) || (!1 === (!!e && t.applyAnimatedValues(e, c.getValue(!0))) && p());
                        },
                        b = new m(v, d),
                        _ = (0, i.useRef)();
                    ((0, r.bt)(() => {
                        const e = _.current;
                        ((_.current = b),
                            (0, r.S6)(d, (e) => (0, r.UI)(e, b)),
                            e && ((0, r.S6)(e.deps, (t) => (0, r.iL)(t, e)), r.Wn.cancel(e.update)));
                    }),
                        (0, i.useEffect)(v, []),
                        (0, r.tf)(() => () => {
                            const e = _.current;
                            (0, r.S6)(e.deps, (t) => (0, r.iL)(t, e));
                        }));
                    const y = t.getComponentProps(c.getValue());
                    return i.createElement(e, g({}, y, { ref: u }));
                });
            };
            class m {
                constructor(e, t) {
                    ((this.update = e), (this.deps = t));
                }
                eventObserved(e) {
                    'change' == e.type && r.Wn.write(this.update);
                }
            }
            const y = Symbol.for('AnimatedComponent'),
                w = (
                    e,
                    {
                        applyAnimatedValues: t = () => !1,
                        createAnimatedStyle: n = (e) => new f(e),
                        getComponentProps: i = (e) => e,
                    } = {},
                ) => {
                    const o = { applyAnimatedValues: t, createAnimatedStyle: n, getComponentProps: i },
                        s = (e) => {
                            const t = O(e) || 'Anonymous';
                            return (
                                ((e = r.is.str(e) ? s[e] || (s[e] = _(e, o)) : e[y] || (e[y] = _(e, o))).displayName =
                                    `Animated(${t})`),
                                e
                            );
                        };
                    return (
                        (0, r.rU)(e, (t, n) => {
                            (r.is.arr(e) && (n = O(t)), (s[n] = s(t)));
                        }),
                        { animated: s }
                    );
                },
                O = (e) =>
                    r.is.str(e) ? e : e && r.is.str(e.displayName) ? e.displayName : (r.is.fun(e) && e.name) || null;
        },
        9738: (e, t, n) => {
            'use strict';
            n.d(t, { Globals: () => r.OH, useSpring: () => we, useSpringRef: () => We, useTransition: () => Be });
            var r = n(2810),
                i = n(7363),
                o = n(1686);
            function s(e, t, n, r, i, o, s) {
                try {
                    var a = e[o](s),
                        u = a.value;
                } catch (e) {
                    return void n(e);
                }
                a.done ? t(u) : Promise.resolve(u).then(r, i);
            }
            function a(e) {
                return function () {
                    var t = this,
                        n = arguments;
                    return new Promise(function (r, i) {
                        var o = e.apply(t, n);
                        function a(e) {
                            s(o, r, i, a, u, 'next', e);
                        }
                        function u(e) {
                            s(o, r, i, a, u, 'throw', e);
                        }
                        a(void 0);
                    });
                };
            }
            function u(e, t) {
                var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                if (n) return (n = n.call(e)).next.bind(n);
                if (
                    Array.isArray(e) ||
                    (n = (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return l(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return (
                                'Object' === n && e.constructor && (n = e.constructor.name),
                                'Map' === n || 'Set' === n
                                    ? Array.from(e)
                                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                      ? l(e, t)
                                      : void 0
                            );
                        }
                    })(e)) ||
                    (t && e && 'number' == typeof e.length)
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
            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function c() {
                return (
                    (c =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    c.apply(this, arguments)
                );
            }
            function d(e, ...t) {
                return r.is.fun(e) ? e(...t) : e;
            }
            const h = (e, t) => !0 === e || !!(t && e && (r.is.fun(e) ? e(t) : (0, r.qo)(e).includes(t))),
                f = (e, t) => (r.is.obj(e) ? t && e[t] : e),
                p = (e, t) => (!0 === e.default ? e[t] : e.default ? e.default[t] : void 0),
                v = (e) => e,
                b = (e, t = v) => {
                    let n = g;
                    e.default && !0 !== e.default && ((e = e.default), (n = Object.keys(e)));
                    const i = {};
                    for (var o, s = u(n); !(o = s()).done; ) {
                        const n = o.value,
                            s = t(e[n], n);
                        r.is.und(s) || (i[n] = s);
                    }
                    return i;
                },
                g =
                    /^(lobby\/(BattleResultView\/BattleResult|EventWelcomeView\/EventWelcome|MissionSelectionView\/MissionSelection|NewbieAdvertisingView\/NewbieAdvertising)View|common\/CongratulationsWindow\/CongratulationsWindow)$/.test(
                        n.j,
                    )
                        ? ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest']
                        : null,
                _ = {
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
            function m(e) {
                const t = (function (e) {
                    const t = {};
                    let n = 0;
                    if (
                        ((0, r.rU)(e, (e, r) => {
                            _[r] || ((t[r] = e), n++);
                        }),
                        n)
                    )
                        return t;
                })(e);
                if (t) {
                    const n = { to: t };
                    return ((0, r.rU)(e, (e, r) => r in t || (n[r] = e)), n);
                }
                return c({}, e);
            }
            function y(e) {
                return (
                    (e = (0, r.je)(e)),
                    r.is.arr(e)
                        ? e.map(y)
                        : (0, r.Df)(e)
                          ? r.OH.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
                          : e
                );
            }
            function w(e) {
                for (const t in e) return !0;
                return !1;
            }
            function O(e) {
                return r.is.fun(e) || (r.is.arr(e) && r.is.obj(e[0]));
            }
            function W(e, t) {
                var n;
                (null == (n = e.ref) || n.delete(e), null == t || t.delete(e));
            }
            function U(e, t) {
                var n;
                t && e.ref !== t && (null == (n = e.ref) || n.delete(e), t.add(e), (e.ref = t));
            }
            const B = c({}, { tension: 170, friction: 26 }, { mass: 1, damping: 1, easing: (e) => e, clamp: !1 });
            class S {
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
                        Object.assign(this, B));
                }
            }
            function A(e, t) {
                if (r.is.und(t.decay)) {
                    const n = !r.is.und(t.tension) || !r.is.und(t.friction);
                    ((!n && r.is.und(t.frequency) && r.is.und(t.damping) && r.is.und(t.mass)) ||
                        ((e.duration = void 0), (e.decay = void 0)),
                        n && (e.frequency = void 0));
                } else e.duration = void 0;
            }
            const T =
                /^(lobby\/(BattleResultView\/BattleResult|EventWelcomeView\/EventWelcome|MissionSelectionView\/MissionSelection|NewbieAdvertisingView\/NewbieAdvertising)View|common\/CongratulationsWindow\/CongratulationsWindow)$/.test(
                    n.j,
                )
                    ? []
                    : null;
            class j {
                constructor() {
                    ((this.changed = !1),
                        (this.values = T),
                        (this.toValues = null),
                        (this.fromValues = T),
                        (this.to = void 0),
                        (this.from = void 0),
                        (this.config = new S()),
                        (this.immediate = !1));
                }
            }
            function P(e, { key: t, props: n, defaultProps: i, state: o, actions: s }) {
                return new Promise((a, u) => {
                    var l;
                    let f,
                        p,
                        v = h(null != (l = n.cancel) ? l : null == i ? void 0 : i.cancel, t);
                    if (v) _();
                    else {
                        r.is.und(n.pause) || (o.paused = h(n.pause, t));
                        let e = null == i ? void 0 : i.pause;
                        (!0 !== e && (e = o.paused || h(e, t)),
                            (f = d(n.delay || 0, t)),
                            e ? (o.resumeQueue.add(g), s.pause()) : (s.resume(), g()));
                    }
                    function b() {
                        (o.resumeQueue.add(g), o.timeouts.delete(p), p.cancel(), (f = p.time - r.Wn.now()));
                    }
                    function g() {
                        f > 0 ? ((p = r.Wn.setTimeout(_, f)), o.pauseQueue.add(b), o.timeouts.add(p)) : _();
                    }
                    function _() {
                        (o.pauseQueue.delete(b), o.timeouts.delete(p), e <= (o.cancelId || 0) && (v = !0));
                        try {
                            s.start(c({}, n, { callId: e, cancel: v }), a);
                        } catch (e) {
                            u(e);
                        }
                    }
                });
            }
            const E = (e, t) =>
                    1 == t.length
                        ? t[0]
                        : t.some((e) => e.cancelled)
                          ? V(e.get())
                          : t.every((e) => e.noop)
                            ? x(e.get())
                            : k(
                                  e.get(),
                                  t.every((e) => e.finished),
                              ),
                x = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
                k = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
                V = (e) => ({ value: e, cancelled: !0, finished: !1 });
            function R(e, t, n, i) {
                const o = t.callId,
                    s = t.parentId,
                    l = t.onRest,
                    d = n.asyncTo,
                    h = n.promise;
                return s || e !== d || t.reset
                    ? (n.promise = a(function* () {
                          ((n.asyncId = o), (n.asyncTo = e));
                          const f = b(t, (e, t) => ('onRest' === t ? void 0 : e));
                          let p, v;
                          const g = new Promise((e, t) => ((p = e), (v = t))),
                              _ = (e) => {
                                  const t = (o <= (n.cancelId || 0) && V(i)) || (o !== n.asyncId && k(i, !1));
                                  if (t) throw ((e.result = t), v(e), e);
                              },
                              m = (e, t) => {
                                  const s = new N(),
                                      u = new I();
                                  return a(function* () {
                                      if (r.OH.skipAnimation) throw (C(n), (u.result = k(i, !1)), v(u), u);
                                      _(s);
                                      const a = r.is.obj(e) ? c({}, e) : c({}, t, { to: e });
                                      ((a.parentId = o),
                                          (0, r.rU)(f, (e, t) => {
                                              r.is.und(a[t]) && (a[t] = e);
                                          }));
                                      const l = yield i.start(a);
                                      return (
                                          _(s),
                                          n.paused &&
                                              (yield new Promise((e) => {
                                                  n.resumeQueue.add(e);
                                              })),
                                          l
                                      );
                                  })();
                              };
                          let y;
                          if (r.OH.skipAnimation) return (C(n), k(i, !1));
                          try {
                              let t;
                              ((t = r.is.arr(e)
                                  ? ((w = a(function* (e) {
                                        for (var t, n = u(e); !(t = n()).done; ) {
                                            const e = t.value;
                                            yield m(e);
                                        }
                                    })),
                                    function (e) {
                                        return w.apply(this, arguments);
                                    })(e)
                                  : Promise.resolve(e(m, i.stop.bind(i)))),
                                  yield Promise.all([t.then(p), g]),
                                  (y = k(i.get(), !0, !1)));
                          } catch (e) {
                              if (e instanceof N) y = e.result;
                              else {
                                  if (!(e instanceof I)) throw e;
                                  y = e.result;
                              }
                          } finally {
                              o == n.asyncId &&
                                  ((n.asyncId = s), (n.asyncTo = s ? d : void 0), (n.promise = s ? h : void 0));
                          }
                          var w;
                          return (
                              r.is.fun(l) &&
                                  r.Wn.batchedUpdates(() => {
                                      l(y, i, i.item);
                                  }),
                              y
                          );
                      })())
                    : h;
            }
            function C(e, t) {
                ((0, r.yl)(e.timeouts, (e) => e.cancel()),
                    e.pauseQueue.clear(),
                    e.resumeQueue.clear(),
                    (e.asyncId = e.asyncTo = e.promise = void 0),
                    t && (e.cancelId = t));
            }
            class N extends Error {
                constructor() {
                    (super(
                        'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.',
                    ),
                        (this.result = void 0));
                }
            }
            class I extends Error {
                constructor() {
                    (super('SkipAnimationSignal'), (this.result = void 0));
                }
            }
            const M = (e) => e instanceof L;
            let D = 1;
            class L extends r.B0 {
                constructor(...e) {
                    (super(...e), (this.id = D++), (this.key = void 0), (this._priority = 0));
                }
                get priority() {
                    return this._priority;
                }
                set priority(e) {
                    this._priority != e && ((this._priority = e), this._onPriorityChange(e));
                }
                get() {
                    const e = (0, o.ys)(this);
                    return e && e.getValue();
                }
                to(...e) {
                    return r.OH.to(this, e);
                }
                interpolate(...e) {
                    return ((0, r.LW)(), r.OH.to(this, e));
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
                    (0, r.k0)(this, { type: 'change', parent: this, value: e, idle: t });
                }
                _onPriorityChange(e) {
                    (this.idle || r.fT.sort(this), (0, r.k0)(this, { type: 'priority', parent: this, priority: e }));
                }
            }
            const q = Symbol.for('SpringPhase'),
                Q = (e) => (1 & e[q]) > 0,
                F = (e) => (2 & e[q]) > 0,
                $ = (e) => (4 & e[q]) > 0,
                z = (e, t) => (t ? (e[q] |= 3) : (e[q] &= -3)),
                G = (e, t) => (t ? (e[q] |= 4) : (e[q] &= -5));
            class H extends (/^(lobby\/(BattleResultView\/BattleResult|EventWelcomeView\/EventWelcome|MissionSelectionView\/MissionSelection|NewbieAdvertisingView\/NewbieAdvertising)View|common\/CongratulationsWindow\/CongratulationsWindow)$/.test(
                n.j,
            )
                ? L
                : null) {
                constructor(e, t) {
                    if (
                        (super(),
                        (this.key = void 0),
                        (this.animation = new j()),
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
                        !r.is.und(e) || !r.is.und(t))
                    ) {
                        const n = r.is.obj(e) ? c({}, e) : c({}, t, { from: e });
                        (r.is.und(n.default) && (n.default = !0), this.start(n));
                    }
                }
                get idle() {
                    return !(F(this) || this._state.asyncTo) || $(this);
                }
                get goal() {
                    return (0, r.je)(this.animation.to);
                }
                get velocity() {
                    const e = (0, o.ys)(this);
                    return e instanceof o.iG ? e.lastVelocity || 0 : e.getPayload().map((e) => e.lastVelocity || 0);
                }
                get hasAnimated() {
                    return Q(this);
                }
                get isAnimating() {
                    return F(this);
                }
                get isPaused() {
                    return $(this);
                }
                advance(e) {
                    let t = !0,
                        n = !1;
                    const i = this.animation;
                    let s = i.config,
                        a = i.toValues;
                    const u = (0, o.He)(i.to);
                    (!u && (0, r.j$)(i.to) && (a = (0, r.qo)((0, r.je)(i.to))),
                        i.values.forEach((l, c) => {
                            if (l.done) return;
                            const d = l.constructor == o.eC ? 1 : u ? u[c].lastPosition : a[c];
                            let h = i.immediate,
                                f = d;
                            if (!h) {
                                if (((f = l.lastPosition), s.tension <= 0)) return void (l.done = !0);
                                let t = (l.elapsedTime += e);
                                const n = i.fromValues[c],
                                    o =
                                        null != l.v0
                                            ? l.v0
                                            : (l.v0 = r.is.arr(s.velocity) ? s.velocity[c] : s.velocity);
                                let a;
                                if (r.is.und(s.duration))
                                    if (s.decay) {
                                        const e = !0 === s.decay ? 0.998 : s.decay,
                                            r = Math.exp(-(1 - e) * t);
                                        ((f = n + (o / (1 - e)) * (1 - r)),
                                            (h = Math.abs(l.lastPosition - f) < 0.1),
                                            (a = o * r));
                                    } else {
                                        a = null == l.lastVelocity ? o : l.lastVelocity;
                                        const t =
                                                s.precision || (n == d ? 0.005 : Math.min(1, 0.001 * Math.abs(d - n))),
                                            i = s.restVelocity || t / 10,
                                            u = s.clamp ? 0 : s.bounce,
                                            c = !r.is.und(u),
                                            p = n == d ? l.v0 > 0 : n < d;
                                        let v,
                                            b = !1;
                                        const g = 1,
                                            _ = Math.ceil(e / g);
                                        for (
                                            let e = 0;
                                            e < _ && ((v = Math.abs(a) > i), v || ((h = Math.abs(d - f) <= t), !h));
                                            ++e
                                        )
                                            (c && ((b = f == d || f > d == p), b && ((a = -a * u), (f = d))),
                                                (a +=
                                                    ((1e-6 * -s.tension * (f - d) + 0.001 * -s.friction * a) / s.mass) *
                                                    g),
                                                (f += a * g));
                                    }
                                else {
                                    let r = 1;
                                    (s.duration > 0 &&
                                        (this._memoizedDuration !== s.duration &&
                                            ((this._memoizedDuration = s.duration),
                                            l.durationProgress > 0 &&
                                                ((l.elapsedTime = s.duration * l.durationProgress),
                                                (t = l.elapsedTime += e))),
                                        (r = (s.progress || 0) + t / this._memoizedDuration),
                                        (r = r > 1 ? 1 : r < 0 ? 0 : r),
                                        (l.durationProgress = r)),
                                        (f = n + s.easing(r) * (d - n)),
                                        (a = (f - l.lastPosition) / e),
                                        (h = 1 == r));
                                }
                                ((l.lastVelocity = a),
                                    Number.isNaN(f) && (console.warn('Got NaN while animating:', this), (h = !0)));
                            }
                            (u && !u[c].done && (h = !1),
                                h ? (l.done = !0) : (t = !1),
                                l.setValue(f, s.round) && (n = !0));
                        }));
                    const l = (0, o.ys)(this),
                        c = l.getValue();
                    if (t) {
                        const e = (0, r.je)(i.to);
                        ((c === e && !n) || s.decay
                            ? n && s.decay && this._onChange(c)
                            : (l.setValue(e), this._onChange(e)),
                            this._stop());
                    } else n && this._onChange(c);
                }
                set(e) {
                    return (
                        r.Wn.batchedUpdates(() => {
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
                    if (F(this)) {
                        const e = this.animation,
                            t = e.to,
                            n = e.config;
                        r.Wn.batchedUpdates(() => {
                            (this._onStart(), n.decay || this._set(t, !1), this._stop());
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
                        r.is.und(e)
                            ? ((n = this.queue || []), (this.queue = []))
                            : (n = [r.is.obj(e) ? e : c({}, t, { to: e })]),
                        Promise.all(n.map((e) => this._update(e))).then((e) => E(this, e))
                    );
                }
                stop(e) {
                    const t = this.animation.to;
                    return (
                        this._focus(this.get()),
                        C(this._state, e && this._lastCallId),
                        r.Wn.batchedUpdates(() => this._stop(t, e)),
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
                    let n = e.to,
                        i = e.from;
                    ((n = r.is.obj(n) ? n[t] : n),
                        (null == n || O(n)) && (n = void 0),
                        (i = r.is.obj(i) ? i[t] : i),
                        null == i && (i = void 0));
                    const s = { to: n, from: i };
                    if (!Q(this)) {
                        if (e.reverse) {
                            var a = [i, n];
                            ((n = a[0]), (i = a[1]));
                        }
                        ((i = (0, r.je)(i)), r.is.und(i) ? (0, o.ys)(this) || this._set(n) : this._set(i));
                    }
                    return s;
                }
                _update(e, t) {
                    let n = c({}, e);
                    const i = this.key,
                        o = this.defaultProps;
                    (n.default &&
                        Object.assign(
                            o,
                            b(n, (e, t) => (/^on/.test(t) ? f(e, i) : e)),
                        ),
                        te(this, n, 'onProps'),
                        ne(this, 'onProps', n, this));
                    const s = this._prepareNode(n);
                    if (Object.isFrozen(this))
                        throw Error(
                            'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?',
                        );
                    const a = this._state;
                    return P(++this._lastCallId, {
                        key: i,
                        props: n,
                        defaultProps: o,
                        state: a,
                        actions: {
                            pause: () => {
                                $(this) ||
                                    (G(this, !0),
                                    (0, r.bl)(a.pauseQueue),
                                    ne(this, 'onPause', k(this, K(this, this.animation.to)), this));
                            },
                            resume: () => {
                                $(this) &&
                                    (G(this, !1),
                                    F(this) && this._resume(),
                                    (0, r.bl)(a.resumeQueue),
                                    ne(this, 'onResume', k(this, K(this, this.animation.to)), this));
                            },
                            start: this._merge.bind(this, s),
                        },
                    }).then((e) => {
                        if (n.loop && e.finished && (!t || !e.noop)) {
                            const e = X(n);
                            if (e) return this._update(e, !0);
                        }
                        return e;
                    });
                }
                _merge(e, t, n) {
                    if (t.cancel) return (this.stop(!0), n(V(this)));
                    const i = !r.is.und(e.to),
                        s = !r.is.und(e.from);
                    if (i || s) {
                        if (!(t.callId > this._lastToId)) return n(V(this));
                        this._lastToId = t.callId;
                    }
                    const a = this.key,
                        u = this.defaultProps,
                        l = this.animation,
                        f = l.to,
                        p = l.from;
                    let v = e.to,
                        b = void 0 === v ? f : v,
                        g = e.from,
                        _ = void 0 === g ? p : g;
                    if ((!s || i || (t.default && !r.is.und(b)) || (b = _), t.reverse)) {
                        var m = [_, b];
                        ((b = m[0]), (_ = m[1]));
                    }
                    const w = !(0, r.Xy)(_, p);
                    (w && (l.from = _), (_ = (0, r.je)(_)));
                    const W = !(0, r.Xy)(b, f);
                    W && this._focus(b);
                    const U = O(t.to),
                        S = l.config,
                        T = S.decay,
                        j = S.velocity;
                    ((i || s) && (S.velocity = 0),
                        t.config &&
                            !U &&
                            (function (e, t, n) {
                                (n && (A((n = c({}, n)), t), (t = c({}, n, t))), A(e, t), Object.assign(e, t));
                                for (const t in B) null == e[t] && (e[t] = B[t]);
                                let i = e.mass,
                                    o = e.frequency,
                                    s = e.damping;
                                r.is.und(o) ||
                                    (o < 0.01 && (o = 0.01),
                                    s < 0 && (s = 0),
                                    (e.tension = Math.pow((2 * Math.PI) / o, 2) * i),
                                    (e.friction = (4 * Math.PI * s * i) / o));
                            })(S, d(t.config, a), t.config !== u.config ? d(u.config, a) : void 0));
                    let P = (0, o.ys)(this);
                    if (!P || r.is.und(b)) return n(k(this, !0));
                    const E = r.is.und(t.reset) ? s && !t.default : !r.is.und(_) && h(t.reset, a),
                        C = E ? _ : this.get(),
                        N = y(b),
                        I = r.is.num(N) || r.is.arr(N) || (0, r.Df)(N),
                        M = !U && (!I || h(u.immediate || t.immediate, a));
                    if (W) {
                        const e = (0, o.sb)(b);
                        if (e !== P.constructor) {
                            if (!M)
                                throw Error(
                                    `Cannot animate between ${P.constructor.name} and ${e.name}, as the "to" prop suggests`,
                                );
                            P = this._set(N);
                        }
                    }
                    const D = P.constructor;
                    let L = (0, r.j$)(b),
                        q = !1;
                    if (!L) {
                        const e = E || (!Q(this) && w);
                        ((W || e) && ((q = (0, r.Xy)(y(C), N)), (L = !q)),
                            (((0, r.Xy)(l.immediate, M) || M) && (0, r.Xy)(S.decay, T) && (0, r.Xy)(S.velocity, j)) ||
                                (L = !0));
                    }
                    if (
                        (q && F(this) && (l.changed && !E ? (L = !0) : L || this._stop(f)),
                        !U &&
                            ((L || (0, r.j$)(f)) &&
                                ((l.values = P.getPayload()),
                                (l.toValues = (0, r.j$)(b) ? null : D == o.eC ? [1] : (0, r.qo)(N))),
                            l.immediate != M && ((l.immediate = M), M || E || this._set(f)),
                            L))
                    ) {
                        const e = l.onRest;
                        (0, r.S6)(ee, (e) => te(this, t, e));
                        const i = k(this, K(this, f));
                        ((0, r.bl)(this._pendingCalls, i),
                            this._pendingCalls.add(n),
                            l.changed &&
                                r.Wn.batchedUpdates(() => {
                                    ((l.changed = !E),
                                        null == e || e(i, this),
                                        E ? d(u.onRest, i) : null == l.onStart || l.onStart(i, this));
                                }));
                    }
                    (E && this._set(C),
                        U
                            ? n(R(t.to, t, this._state, this))
                            : L
                              ? this._start()
                              : F(this) && !W
                                ? this._pendingCalls.add(n)
                                : n(x(C)));
                }
                _focus(e) {
                    const t = this.animation;
                    e !== t.to && ((0, r.Ll)(this) && this._detach(), (t.to = e), (0, r.Ll)(this) && this._attach());
                }
                _attach() {
                    let e = 0;
                    const t = this.animation.to;
                    ((0, r.j$)(t) && ((0, r.UI)(t, this), M(t) && (e = t.priority + 1)), (this.priority = e));
                }
                _detach() {
                    const e = this.animation.to;
                    (0, r.j$)(e) && (0, r.iL)(e, this);
                }
                _set(e, t = !0) {
                    const n = (0, r.je)(e);
                    if (!r.is.und(n)) {
                        const e = (0, o.ys)(this);
                        if (!e || !(0, r.Xy)(n, e.getValue())) {
                            const i = (0, o.sb)(n);
                            (e && e.constructor == i ? e.setValue(n) : (0, o.f3)(this, i.create(n)),
                                e &&
                                    r.Wn.batchedUpdates(() => {
                                        this._onChange(n, t);
                                    }));
                        }
                    }
                    return (0, o.ys)(this);
                }
                _onStart() {
                    const e = this.animation;
                    e.changed || ((e.changed = !0), ne(this, 'onStart', k(this, K(this, e.to)), this));
                }
                _onChange(e, t) {
                    (t || (this._onStart(), d(this.animation.onChange, e, this)),
                        d(this.defaultProps.onChange, e, this),
                        super._onChange(e, t));
                }
                _start() {
                    const e = this.animation;
                    ((0, o.ys)(this).reset((0, r.je)(e.to)),
                        e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
                        F(this) || (z(this, !0), $(this) || this._resume()));
                }
                _resume() {
                    r.OH.skipAnimation ? this.finish() : r.fT.start(this);
                }
                _stop(e, t) {
                    if (F(this)) {
                        z(this, !1);
                        const n = this.animation;
                        ((0, r.S6)(n.values, (e) => {
                            e.done = !0;
                        }),
                            n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                            (0, r.k0)(this, { type: 'idle', parent: this }));
                        const i = t ? V(this.get()) : k(this.get(), K(this, null != e ? e : n.to));
                        ((0, r.bl)(this._pendingCalls, i),
                            n.changed && ((n.changed = !1), ne(this, 'onRest', i, this)));
                    }
                }
            }
            function K(e, t) {
                const n = y(t),
                    i = y(e.get());
                return (0, r.Xy)(i, n);
            }
            function X(e, t = e.loop, n = e.to) {
                let r = d(t);
                if (r) {
                    const i = !0 !== r && m(r),
                        o = (i || e).reverse,
                        s = !i || i.reset;
                    return J(
                        c(
                            {},
                            e,
                            {
                                loop: t,
                                default: !1,
                                pause: void 0,
                                to: !o || O(n) ? n : void 0,
                                from: s ? e.from : void 0,
                                reset: s,
                            },
                            i,
                        ),
                    );
                }
            }
            function J(e) {
                const t = (e = m(e)),
                    n = t.to,
                    i = t.from,
                    o = new Set();
                return (r.is.obj(n) && Z(n, o), r.is.obj(i) && Z(i, o), (e.keys = o.size ? Array.from(o) : null), e);
            }
            function Y(e) {
                const t = J(e);
                return (r.is.und(t.default) && (t.default = b(t)), t);
            }
            function Z(e, t) {
                (0, r.rU)(e, (e, n) => null != e && t.add(n));
            }
            const ee =
                /^(lobby\/(BattleResultView\/BattleResult|EventWelcomeView\/EventWelcome|MissionSelectionView\/MissionSelection|NewbieAdvertisingView\/NewbieAdvertising)View|common\/CongratulationsWindow\/CongratulationsWindow)$/.test(
                    n.j,
                )
                    ? ['onStart', 'onRest', 'onChange', 'onPause', 'onResume']
                    : null;
            function te(e, t, n) {
                e.animation[n] = t[n] !== p(t, n) ? f(t[n], e.key) : void 0;
            }
            function ne(e, t, ...n) {
                var r, i, o, s;
                (null == (r = (i = e.animation)[t]) || r.call(i, ...n),
                    null == (o = (s = e.defaultProps)[t]) || o.call(s, ...n));
            }
            const re =
                /^(lobby\/(BattleResultView\/BattleResult|EventWelcomeView\/EventWelcome|MissionSelectionView\/MissionSelection|NewbieAdvertisingView\/NewbieAdvertising)View|common\/CongratulationsWindow\/CongratulationsWindow)$/.test(
                    n.j,
                )
                    ? ['onStart', 'onChange', 'onRest']
                    : null;
            let ie = 1;
            class oe {
                constructor(e, t) {
                    ((this.id = ie++),
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
                        t && (this._flush = t),
                        e && this.start(c({ default: !0 }, e)));
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
                        r.is.und(n) || this.springs[t].set(n);
                    }
                }
                update(e) {
                    return (e && this.queue.push(J(e)), this);
                }
                start(e) {
                    let t = this.queue;
                    return (
                        e ? (t = (0, r.qo)(e).map(J)) : (this.queue = []),
                        this._flush ? this._flush(this, t) : (fe(this, t), se(this, t))
                    );
                }
                stop(e, t) {
                    if ((e !== !!e && (t = e), t)) {
                        const n = this.springs;
                        (0, r.S6)((0, r.qo)(t), (t) => n[t].stop(!!e));
                    } else (C(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e)));
                    return this;
                }
                pause(e) {
                    if (r.is.und(e)) this.start({ pause: !0 });
                    else {
                        const t = this.springs;
                        (0, r.S6)((0, r.qo)(e), (e) => t[e].pause());
                    }
                    return this;
                }
                resume(e) {
                    if (r.is.und(e)) this.start({ pause: !1 });
                    else {
                        const t = this.springs;
                        (0, r.S6)((0, r.qo)(e), (e) => t[e].resume());
                    }
                    return this;
                }
                each(e) {
                    (0, r.rU)(this.springs, e);
                }
                _onFrame() {
                    const e = this._events,
                        t = e.onStart,
                        n = e.onChange,
                        i = e.onRest,
                        o = this._active.size > 0,
                        s = this._changed.size > 0;
                    ((o && !this._started) || (s && !this._started)) &&
                        ((this._started = !0),
                        (0, r.yl)(t, ([e, t]) => {
                            ((t.value = this.get()), e(t, this, this._item));
                        }));
                    const a = !o && this._started,
                        u = s || (a && i.size) ? this.get() : null;
                    (s &&
                        n.size &&
                        (0, r.yl)(n, ([e, t]) => {
                            ((t.value = u), e(t, this, this._item));
                        }),
                        a &&
                            ((this._started = !1),
                            (0, r.yl)(i, ([e, t]) => {
                                ((t.value = u), e(t, this, this._item));
                            })));
                }
                eventObserved(e) {
                    if ('change' == e.type) (this._changed.add(e.parent), e.idle || this._active.add(e.parent));
                    else {
                        if ('idle' != e.type) return;
                        this._active.delete(e.parent);
                    }
                    r.Wn.onFrame(this._onFrame);
                }
            }
            function se(e, t) {
                return Promise.all(t.map((t) => ae(e, t))).then((t) => E(e, t));
            }
            function ae(e, t, n) {
                return ue.apply(this, arguments);
            }
            function ue() {
                return (
                    (ue = a(function* (e, t, n) {
                        const i = t.keys,
                            o = t.to,
                            s = t.from,
                            a = t.loop,
                            u = t.onRest,
                            l = t.onResolve,
                            c = r.is.obj(t.default) && t.default;
                        (a && (t.loop = !1), !1 === o && (t.to = null), !1 === s && (t.from = null));
                        const d = r.is.arr(o) || r.is.fun(o) ? o : void 0;
                        d
                            ? ((t.to = void 0), (t.onRest = void 0), c && (c.onRest = void 0))
                            : (0, r.S6)(re, (n) => {
                                  const i = t[n];
                                  if (r.is.fun(i)) {
                                      const r = e._events[n];
                                      ((t[n] = ({ finished: e, cancelled: t }) => {
                                          const n = r.get(i);
                                          n
                                              ? (e || (n.finished = !1), t && (n.cancelled = !0))
                                              : r.set(i, { value: null, finished: e || !1, cancelled: t || !1 });
                                      }),
                                          c && (c[n] = t[n]));
                                  }
                              });
                        const h = e._state;
                        t.pause === !h.paused
                            ? ((h.paused = t.pause), (0, r.bl)(t.pause ? h.pauseQueue : h.resumeQueue))
                            : h.paused && (t.pause = !0);
                        const f = (i || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
                            v = !0 === t.cancel || !0 === p(t, 'cancel');
                        ((d || (v && h.asyncId)) &&
                            f.push(
                                P(++e._lastAsyncId, {
                                    props: t,
                                    state: h,
                                    actions: {
                                        pause: r.ZT,
                                        resume: r.ZT,
                                        start(t, n) {
                                            v ? (C(h, e._lastAsyncId), n(V(e))) : ((t.onRest = u), n(R(d, t, h, e)));
                                        },
                                    },
                                }),
                            ),
                            h.paused &&
                                (yield new Promise((e) => {
                                    h.resumeQueue.add(e);
                                })));
                        const b = E(e, yield Promise.all(f));
                        if (a && b.finished && (!n || !b.noop)) {
                            const n = X(t, a, o);
                            if (n) return (fe(e, [n]), ae(e, n, !0));
                        }
                        return (l && r.Wn.batchedUpdates(() => l(b, e, e.item)), b);
                    })),
                    ue.apply(this, arguments)
                );
            }
            function le(e, t) {
                const n = c({}, e.springs);
                return (
                    t &&
                        (0, r.S6)((0, r.qo)(t), (e) => {
                            (r.is.und(e.keys) && (e = J(e)),
                                r.is.obj(e.to) || (e = c({}, e, { to: void 0 })),
                                he(n, e, (e) => de(e)));
                        }),
                    ce(e, n),
                    n
                );
            }
            function ce(e, t) {
                (0, r.rU)(t, (t, n) => {
                    e.springs[n] || ((e.springs[n] = t), (0, r.UI)(t, e));
                });
            }
            function de(e, t) {
                const n = new H();
                return ((n.key = e), t && (0, r.UI)(n, t), n);
            }
            function he(e, t, n) {
                t.keys &&
                    (0, r.S6)(t.keys, (r) => {
                        (e[r] || (e[r] = n(r)))._prepareNode(t);
                    });
            }
            function fe(e, t) {
                (0, r.S6)(t, (t) => {
                    he(e.springs, t, (t) => de(t, e));
                });
            }
            const pe = ['children'],
                ve = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                            return i;
                        })(e, pe);
                    const o = (0, i.useContext)(be),
                        s = n.pause || !!o.pause,
                        a = n.immediate || !!o.immediate;
                    n = (0, r.Pr)(() => ({ pause: s, immediate: a }), [s, a]);
                    const u = be.Provider;
                    return i.createElement(u, { value: n }, t);
                },
                be =
                    ((ge = ve),
                    (_e = {}),
                    Object.assign(ge, i.createContext(_e)),
                    (ge.Provider._context = ge),
                    (ge.Consumer._context = ge),
                    ge);
            var ge, _e;
            ((ve.Provider = be.Provider), (ve.Consumer = be.Consumer));
            const me = () => {
                const e = [],
                    t = function (t) {
                        (0, r.ZR)();
                        const i = [];
                        return (
                            (0, r.S6)(e, (e, o) => {
                                if (r.is.und(t)) i.push(e.start());
                                else {
                                    const r = n(t, e, o);
                                    r && i.push(e.start(r));
                                }
                            }),
                            i
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
                        return ((0, r.S6)(e, (e) => e.pause(...arguments)), this);
                    }),
                    (t.resume = function () {
                        return ((0, r.S6)(e, (e) => e.resume(...arguments)), this);
                    }),
                    (t.set = function (t) {
                        (0, r.S6)(e, (e) => e.set(t));
                    }),
                    (t.start = function (t) {
                        const n = [];
                        return (
                            (0, r.S6)(e, (e, i) => {
                                if (r.is.und(t)) n.push(e.start());
                                else {
                                    const r = this._getProps(t, e, i);
                                    r && n.push(e.start(r));
                                }
                            }),
                            n
                        );
                    }),
                    (t.stop = function () {
                        return ((0, r.S6)(e, (e) => e.stop(...arguments)), this);
                    }),
                    (t.update = function (t) {
                        return ((0, r.S6)(e, (e, n) => e.update(this._getProps(t, e, n))), this);
                    }));
                const n = function (e, t, n) {
                    return r.is.fun(e) ? e(n, t) : e;
                };
                return ((t._getProps = n), t);
            };
            function ye(e, t, n) {
                const o = r.is.fun(t) && t;
                o && !n && (n = []);
                const s = (0, i.useMemo)(() => (o || 3 == arguments.length ? me() : void 0), []),
                    a = (0, i.useRef)(0),
                    u = (0, r.NW)(),
                    l = (0, i.useMemo)(
                        () => ({
                            ctrls: [],
                            queue: [],
                            flush(e, t) {
                                const n = le(e, t);
                                return a.current > 0 && !l.queue.length && !Object.keys(n).some((t) => !e.springs[t])
                                    ? se(e, t)
                                    : new Promise((r) => {
                                          (ce(e, n),
                                              l.queue.push(() => {
                                                  r(se(e, t));
                                              }),
                                              u());
                                      });
                            },
                        }),
                        [],
                    ),
                    d = (0, i.useRef)([...l.ctrls]),
                    h = [],
                    f = (0, r.zH)(e) || 0;
                function p(e, n) {
                    for (let r = e; r < n; r++) {
                        const e = d.current[r] || (d.current[r] = new oe(null, l.flush)),
                            n = o ? o(r, e) : t[r];
                        n && (h[r] = Y(n));
                    }
                }
                ((0, i.useMemo)(() => {
                    ((0, r.S6)(d.current.slice(e, f), (e) => {
                        (W(e, s), e.stop(!0));
                    }),
                        (d.current.length = e),
                        p(f, e));
                }, [e]),
                    (0, i.useMemo)(() => {
                        p(0, Math.min(f, e));
                    }, n));
                const v = d.current.map((e, t) => le(e, h[t])),
                    b = (0, i.useContext)(ve),
                    g = (0, r.zH)(b),
                    _ = b !== g && w(b);
                ((0, r.bt)(() => {
                    (a.current++, (l.ctrls = d.current));
                    const e = l.queue;
                    (e.length && ((l.queue = []), (0, r.S6)(e, (e) => e())),
                        (0, r.S6)(d.current, (e, t) => {
                            (null == s || s.add(e), _ && e.start({ default: b }));
                            const n = h[t];
                            n && (U(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
                        }));
                }),
                    (0, r.tf)(() => () => {
                        (0, r.S6)(l.ctrls, (e) => e.stop(!0));
                    }));
                const m = v.map((e) => c({}, e));
                return s ? [m, s] : m;
            }
            function we(e, t) {
                const n = r.is.fun(e),
                    i = ye(1, n ? e : [e], n ? t || [] : t),
                    o = i[0],
                    s = o[0],
                    a = i[1];
                return n || 2 == arguments.length ? [s, a] : s;
            }
            const Oe = () => me(),
                We = () => (0, i.useState)(Oe)[0];
            let Ue;
            function Be(e, t, n) {
                const o = r.is.fun(t) && t,
                    s = o ? o() : t,
                    a = s.reset,
                    u = s.sort,
                    l = s.trail,
                    h = void 0 === l ? 0 : l,
                    f = s.expires,
                    p = void 0 === f || f,
                    v = s.onDestroyed,
                    g = s.ref,
                    _ = s.config,
                    y = (0, i.useMemo)(() => (o || 3 == arguments.length ? me() : void 0), []),
                    O = (0, r.qo)(e),
                    B = [],
                    S = (0, i.useRef)(null),
                    A = a ? null : S.current;
                ((0, r.bt)(() => {
                    S.current = B;
                }),
                    (0, r.tf)(
                        () => () =>
                            (0, r.S6)(S.current, (e) => {
                                (e.expired && clearTimeout(e.expirationId), W(e.ctrl, y), e.ctrl.stop(!0));
                            }),
                    ));
                const T = Ae(O, o ? o() : t, A),
                    j = (a && S.current) || [];
                (0, r.bt)(() =>
                    (0, r.S6)(j, ({ ctrl: e, item: t, key: n }) => {
                        (W(e, y), d(v, t, n));
                    }),
                );
                const P = [];
                if (
                    (A &&
                        (0, r.S6)(A, (e, t) => {
                            e.expired
                                ? (clearTimeout(e.expirationId), j.push(e))
                                : ~(t = P[t] = T.indexOf(e.key)) && (B[t] = e);
                        }),
                    (0, r.S6)(O, (e, t) => {
                        B[t] ||
                            ((B[t] = { key: T[t], item: e, phase: Ue.MOUNT, ctrl: new oe() }), (B[t].ctrl.item = e));
                    }),
                    P.length)
                ) {
                    let e = -1;
                    const n = (o ? o() : t).leave;
                    (0, r.S6)(P, (t, r) => {
                        const i = A[r];
                        ~t ? ((e = B.indexOf(i)), (B[e] = c({}, i, { item: O[t] }))) : n && B.splice(++e, 0, i);
                    });
                }
                r.is.fun(u) && B.sort((e, t) => u(e.item, t.item));
                let E = -h;
                const x = (0, r.NW)(),
                    k = b(t),
                    V = new Map();
                (0, r.S6)(B, (e, n) => {
                    const i = e.key,
                        s = e.phase,
                        a = o ? o() : t;
                    let u,
                        l,
                        f = d(a.delay || 0, i);
                    if (s == Ue.MOUNT) ((u = a.enter), (l = Ue.ENTER));
                    else {
                        const e = T.indexOf(i) < 0;
                        if (s != Ue.LEAVE)
                            if (e) ((u = a.leave), (l = Ue.LEAVE));
                            else {
                                if (!(u = a.update)) return;
                                l = Ue.UPDATE;
                            }
                        else {
                            if (e) return;
                            ((u = a.enter), (l = Ue.ENTER));
                        }
                    }
                    if (((u = d(u, e.item, n)), (u = r.is.obj(u) ? m(u) : { to: u }), !u.config)) {
                        const t = _ || k.config;
                        u.config = d(t, e.item, n, l);
                    }
                    E += h;
                    const v = c({}, k, { delay: f + E, ref: g, immediate: a.immediate, reset: !1 }, u);
                    if (l == Ue.ENTER && r.is.und(v.from)) {
                        const i = o ? o() : t,
                            s = r.is.und(i.initial) || A ? i.from : i.initial;
                        v.from = d(s, e.item, n);
                    }
                    const b = v.onResolve;
                    v.onResolve = (e) => {
                        d(b, e);
                        const t = S.current,
                            n = t.find((e) => e.key === i);
                        if (n && (!e.cancelled || n.phase == Ue.UPDATE) && n.ctrl.idle) {
                            const e = t.every((e) => e.ctrl.idle);
                            if (n.phase == Ue.LEAVE) {
                                const t = d(p, n.item);
                                if (!1 !== t) {
                                    const r = !0 === t ? 0 : t;
                                    if (((n.expired = !0), !e && r > 0))
                                        return void (r <= 2147483647 && (n.expirationId = setTimeout(x, r)));
                                }
                            }
                            e && t.some((e) => e.expired) && x();
                        }
                    };
                    const y = le(e.ctrl, v);
                    V.set(e, { phase: l, springs: y, payload: v });
                });
                const R = (0, i.useContext)(ve),
                    C = (0, r.zH)(R),
                    N = R !== C && w(R);
                ((0, r.bt)(() => {
                    N &&
                        (0, r.S6)(B, (e) => {
                            e.ctrl.start({ default: R });
                        });
                }, [R]),
                    (0, r.bt)(
                        () => {
                            (0, r.S6)(V, ({ phase: e, payload: t }, n) => {
                                const r = n.ctrl;
                                ((n.phase = e),
                                    null == y || y.add(r),
                                    N && e == Ue.ENTER && r.start({ default: R }),
                                    t && (U(r, t.ref), r.ref ? r.update(t) : r.start(t)));
                            });
                        },
                        a ? void 0 : n,
                    ));
                const I = (e) =>
                    i.createElement(
                        i.Fragment,
                        null,
                        B.map((t, n) => {
                            const o = (V.get(t) || t.ctrl).springs,
                                s = e(c({}, o), t.item, t, n);
                            return s && s.type
                                ? i.createElement(
                                      s.type,
                                      c({}, s.props, {
                                          key: r.is.str(t.key) || r.is.num(t.key) ? t.key : t.ctrl.id,
                                          ref: s.ref,
                                      }),
                                  )
                                : s;
                        }),
                    );
                return y ? [I, y] : I;
            }
            !(function (e) {
                ((e.MOUNT = 'mount'), (e.ENTER = 'enter'), (e.UPDATE = 'update'), (e.LEAVE = 'leave'));
            })(Ue || (Ue = {}));
            let Se = 1;
            function Ae(e, { key: t, keys: n = t }, i) {
                if (null === n) {
                    const t = new Set();
                    return e.map((e) => {
                        const n = i && i.find((n) => n.item === e && n.phase !== Ue.LEAVE && !t.has(n));
                        return n ? (t.add(n), n.key) : Se++;
                    });
                }
                return r.is.und(n) ? e : r.is.fun(n) ? e.map(n) : (0, r.qo)(n);
            }
            class Te extends L {
                constructor(e, t) {
                    (super(),
                        (this.key = void 0),
                        (this.idle = !0),
                        (this.calc = void 0),
                        (this._active = new Set()),
                        (this.source = e),
                        (this.calc = (0, r.mD)(...t)));
                    const n = this._get(),
                        i = (0, o.sb)(n);
                    (0, o.f3)(this, i.create(n));
                }
                advance(e) {
                    const t = this._get(),
                        n = this.get();
                    ((0, r.Xy)(t, n) || ((0, o.ys)(this).setValue(t), this._onChange(t, this.idle)),
                        !this.idle && Pe(this._active) && Ee(this));
                }
                _get() {
                    const e = r.is.arr(this.source) ? this.source.map(r.je) : (0, r.qo)((0, r.je)(this.source));
                    return this.calc(...e);
                }
                _start() {
                    this.idle &&
                        !Pe(this._active) &&
                        ((this.idle = !1),
                        (0, r.S6)((0, o.He)(this), (e) => {
                            e.done = !1;
                        }),
                        r.OH.skipAnimation ? (r.Wn.batchedUpdates(() => this.advance()), Ee(this)) : r.fT.start(this));
                }
                _attach() {
                    let e = 1;
                    ((0, r.S6)((0, r.qo)(this.source), (t) => {
                        ((0, r.j$)(t) && (0, r.UI)(t, this),
                            M(t) && (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1))));
                    }),
                        (this.priority = e),
                        this._start());
                }
                _detach() {
                    ((0, r.S6)((0, r.qo)(this.source), (e) => {
                        (0, r.j$)(e) && (0, r.iL)(e, this);
                    }),
                        this._active.clear(),
                        Ee(this));
                }
                eventObserved(e) {
                    'change' == e.type
                        ? e.idle
                            ? this.advance()
                            : (this._active.add(e.parent), this._start())
                        : 'idle' == e.type
                          ? this._active.delete(e.parent)
                          : 'priority' == e.type &&
                            (this.priority = (0, r.qo)(this.source).reduce(
                                (e, t) => Math.max(e, (M(t) ? t.priority : 0) + 1),
                                0,
                            ));
                }
            }
            function je(e) {
                return !1 !== e.idle;
            }
            function Pe(e) {
                return !e.size || Array.from(e).every(je);
            }
            function Ee(e) {
                e.idle ||
                    ((e.idle = !0),
                    (0, r.S6)((0, o.He)(e), (e) => {
                        e.done = !0;
                    }),
                    (0, r.k0)(e, { type: 'idle', parent: e }));
            }
            (r.OH.assign({ createStringInterpolator: r.qS, to: (e, t) => new Te(e, t) }), r.fT.advance);
        },
        2810: (e, t, n) => {
            'use strict';
            n.d(t, {
                B0: () => me,
                OH: () => C,
                UI: () => we,
                k0: () => _e,
                O9: () => z,
                mD: () => de,
                qS: () => Pe,
                dE: () => W,
                ZR: () => Ce,
                LW: () => Ve,
                S6: () => S,
                rU: () => A,
                yl: () => j,
                bl: () => P,
                fT: () => L,
                Ll: () => ge,
                je: () => be,
                j$: () => ve,
                is: () => U,
                Df: () => Ne,
                Xy: () => B,
                ZT: () => O,
                Wn: () => i,
                iL: () => Oe,
                qo: () => T,
                NW: () => De,
                bt: () => Fe,
                Pr: () => qe,
                tf: () => Ie,
                zH: () => Qe,
            });
            let r = _();
            const i = (e) => p(e, r);
            let o = _();
            i.write = (e) => p(e, o);
            let s = _();
            i.onStart = (e) => p(e, s);
            let a = _();
            i.onFrame = (e) => p(e, a);
            let u = _();
            i.onFinish = (e) => p(e, u);
            let l = [];
            i.setTimeout = (e, t) => {
                let n = i.now() + t,
                    r = () => {
                        let e = l.findIndex((e) => e.cancel == r);
                        (~e && l.splice(e, 1), (y.count -= ~e ? 1 : 0));
                    },
                    o = { time: n, handler: e, cancel: r };
                return (l.splice(c(n), 0, o), (y.count += 1), v(), o);
            };
            let c = (e) => ~(~l.findIndex((t) => t.time > e) || ~l.length);
            ((i.cancel = (e) => {
                (r.delete(e), o.delete(e));
            }),
                (i.sync = (e) => {
                    ((f = !0), i.batchedUpdates(e), (f = !1));
                }),
                (i.throttle = (e) => {
                    let t;
                    function n() {
                        try {
                            e(...t);
                        } finally {
                            t = null;
                        }
                    }
                    function r(...e) {
                        ((t = e), i.onStart(n));
                    }
                    return (
                        (r.handler = e),
                        (r.cancel = () => {
                            (s.delete(n), (t = null));
                        }),
                        r
                    );
                }));
            let d = 'undefined' != typeof window ? window.requestAnimationFrame : () => {};
            ((i.use = (e) => (d = e)),
                (i.now = 'undefined' != typeof performance ? () => performance.now() : Date.now),
                (i.batchedUpdates = (e) => e()),
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
            function p(e, t) {
                f ? (t.delete(e), e(0)) : (t.add(e), v());
            }
            function v() {
                h < 0 && ((h = 0), 'demand' !== i.frameLoop && d(b));
            }
            function b() {
                ~h && (d(b), i.batchedUpdates(g));
            }
            function g() {
                let e = h;
                h = i.now();
                let t = c(h);
                (t && (m(l.splice(0, t), (e) => e.handler()), (y.count -= t)),
                    s.flush(),
                    r.flush(e ? Math.min(64, h - e) : 16.667),
                    a.flush(),
                    o.flush(),
                    u.flush());
            }
            function _() {
                let e = new Set(),
                    t = e;
                return {
                    add(n) {
                        ((y.count += t != e || e.has(n) ? 0 : 1), e.add(n));
                    },
                    delete: (n) => ((y.count -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
                    flush(n) {
                        t.size &&
                            ((e = new Set()),
                            (y.count -= t.size),
                            m(t, (t) => t(n) && e.add(t)),
                            (y.count += e.size),
                            (t = e));
                    },
                };
            }
            function m(e, t) {
                e.forEach((e) => {
                    try {
                        t(e);
                    } catch (e) {
                        i.catch(e);
                    }
                });
            }
            const y = {
                count: 0,
                clear() {
                    ((h = -1), (l = []), (s = _()), (r = _()), (a = _()), (o = _()), (u = _()), (y.count = 0));
                },
            };
            var w = n(7363);
            function O() {}
            const W = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
                U = {
                    arr: Array.isArray,
                    obj: (e) => !!e && 'Object' === e.constructor.name,
                    fun: (e) => 'function' == typeof e,
                    str: (e) => 'string' == typeof e,
                    num: (e) => 'number' == typeof e,
                    und: (e) => void 0 === e,
                };
            function B(e, t) {
                if (U.arr(e)) {
                    if (!U.arr(t) || e.length !== t.length) return !1;
                    for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                    return !0;
                }
                return e === t;
            }
            const S = (e, t) => e.forEach(t);
            function A(e, t, n) {
                if (U.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
                else for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
            }
            const T = (e) => (U.und(e) ? [] : U.arr(e) ? e : [e]);
            function j(e, t) {
                if (e.size) {
                    const n = Array.from(e);
                    (e.clear(), S(n, t));
                }
            }
            const P = (e, ...t) => j(e, (e) => e(...t));
            let E,
                x,
                k = null,
                V = !1,
                R = O;
            var C = Object.freeze({
                __proto__: null,
                get createStringInterpolator() {
                    return E;
                },
                get to() {
                    return x;
                },
                get colors() {
                    return k;
                },
                get skipAnimation() {
                    return V;
                },
                get willAdvance() {
                    return R;
                },
                assign: (e) => {
                    (e.to && (x = e.to),
                        e.now && (i.now = e.now),
                        void 0 !== e.colors && (k = e.colors),
                        null != e.skipAnimation && (V = e.skipAnimation),
                        e.createStringInterpolator && (E = e.createStringInterpolator),
                        e.requestAnimationFrame && i.use(e.requestAnimationFrame),
                        e.batchedUpdates && (i.batchedUpdates = e.batchedUpdates),
                        e.willAdvance && (R = e.willAdvance),
                        e.frameLoop && (i.frameLoop = e.frameLoop));
                },
            });
            const N = new Set();
            let I = [],
                M = [],
                D = 0;
            const L = {
                get idle() {
                    return !N.size && !I.length;
                },
                start(e) {
                    D > e.priority ? (N.add(e), i.onStart(q)) : (Q(e), i($));
                },
                advance: $,
                sort(e) {
                    if (D) i.onFrame(() => L.sort(e));
                    else {
                        const t = I.indexOf(e);
                        ~t && (I.splice(t, 1), F(e));
                    }
                },
                clear() {
                    ((I = []), N.clear());
                },
            };
            function q() {
                (N.forEach(Q), N.clear(), i($));
            }
            function Q(e) {
                I.includes(e) || F(e);
            }
            function F(e) {
                I.splice(
                    (function (t, n) {
                        const r = t.findIndex((t) => t.priority > e.priority);
                        return r < 0 ? t.length : r;
                    })(I),
                    0,
                    e,
                );
            }
            function $(e) {
                const t = M;
                for (let n = 0; n < I.length; n++) {
                    const r = I[n];
                    ((D = r.priority), r.idle || (R(r), r.advance(e), r.idle || t.push(r)));
                }
                return ((D = 0), (M = I), (M.length = 0), (I = t), I.length > 0);
            }
            const z = {
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
                H = G + '%';
            function K(...e) {
                return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
            }
            const X = new RegExp('rgb' + K(G, G, G)),
                J = new RegExp('rgba' + K(G, G, G, G)),
                Y = new RegExp('hsl' + K(G, H, H)),
                Z = new RegExp('hsla' + K(G, H, H, G)),
                ee = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                te = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                ne = /^#([0-9a-fA-F]{6})$/,
                re = /^#([0-9a-fA-F]{8})$/;
            function ie(e, t, n) {
                return (
                    n < 0 && (n += 1),
                    n > 1 && (n -= 1),
                    n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                );
            }
            function oe(e, t, n) {
                const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
                    i = 2 * n - r,
                    o = ie(i, r, e + 1 / 3),
                    s = ie(i, r, e),
                    a = ie(i, r, e - 1 / 3);
                return (Math.round(255 * o) << 24) | (Math.round(255 * s) << 16) | (Math.round(255 * a) << 8);
            }
            function se(e) {
                const t = parseInt(e, 10);
                return t < 0 ? 0 : t > 255 ? 255 : t;
            }
            function ae(e) {
                return (((parseFloat(e) % 360) + 360) % 360) / 360;
            }
            function ue(e) {
                const t = parseFloat(e);
                return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
            }
            function le(e) {
                const t = parseFloat(e);
                return t < 0 ? 0 : t > 100 ? 1 : t / 100;
            }
            function ce(e) {
                let t = (function (e) {
                    let t;
                    return 'number' == typeof e
                        ? e >>> 0 === e && e >= 0 && e <= 4294967295
                            ? e
                            : null
                        : (t = ne.exec(e))
                          ? parseInt(t[1] + 'ff', 16) >>> 0
                          : k && void 0 !== k[e]
                            ? k[e]
                            : (t = X.exec(e))
                              ? ((se(t[1]) << 24) | (se(t[2]) << 16) | (se(t[3]) << 8) | 255) >>> 0
                              : (t = J.exec(e))
                                ? ((se(t[1]) << 24) | (se(t[2]) << 16) | (se(t[3]) << 8) | ue(t[4])) >>> 0
                                : (t = ee.exec(e))
                                  ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
                                  : (t = re.exec(e))
                                    ? parseInt(t[1], 16) >>> 0
                                    : (t = te.exec(e))
                                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                                      : (t = Y.exec(e))
                                        ? (255 | oe(ae(t[1]), le(t[2]), le(t[3]))) >>> 0
                                        : (t = Z.exec(e))
                                          ? (oe(ae(t[1]), le(t[2]), le(t[3])) | ue(t[4])) >>> 0
                                          : null;
                })(e);
                return null === t
                    ? e
                    : ((t = t || 0),
                      `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`);
            }
            const de = (e, t, n) => {
                if (U.fun(e)) return e;
                if (U.arr(e)) return de({ range: e, output: t, extrapolate: n });
                if (U.str(e.output[0])) return E(e);
                const r = e,
                    i = r.output,
                    o = r.range || [0, 1],
                    s = r.extrapolateLeft || r.extrapolate || 'extend',
                    a = r.extrapolateRight || r.extrapolate || 'extend',
                    u = r.easing || ((e) => e);
                return (e) => {
                    const t = (function (e, t) {
                        for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
                        return n - 1;
                    })(e, o);
                    return (function (e, t, n, r, i, o, s, a, u) {
                        let l = u ? u(e) : e;
                        if (l < t) {
                            if ('identity' === s) return l;
                            'clamp' === s && (l = t);
                        }
                        if (l > n) {
                            if ('identity' === a) return l;
                            'clamp' === a && (l = n);
                        }
                        return r === i
                            ? r
                            : t === n
                              ? e <= t
                                  ? r
                                  : i
                              : (t === -1 / 0 ? (l = -l) : n === 1 / 0 ? (l -= t) : (l = (l - t) / (n - t)),
                                (l = o(l)),
                                r === -1 / 0 ? (l = -l) : i === 1 / 0 ? (l += r) : (l = l * (i - r) + r),
                                l);
                    })(e, o[t], o[t + 1], i[t], i[t + 1], u, s, a, r.map);
                };
            };
            function he() {
                return (
                    (he =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    he.apply(this, arguments)
                );
            }
            const fe = Symbol.for('FluidValue.get'),
                pe = Symbol.for('FluidValue.observers'),
                ve = (e) => Boolean(e && e[fe]),
                be = (e) => (e && e[fe] ? e[fe]() : e),
                ge = (e) => e[pe] || null;
            function _e(e, t) {
                let n = e[pe];
                n &&
                    n.forEach((e) => {
                        !(function (e, t) {
                            e.eventObserved ? e.eventObserved(t) : e(t);
                        })(e, t);
                    });
            }
            class me {
                constructor(e) {
                    if (((this[fe] = void 0), (this[pe] = void 0), !e && !(e = this.get)))
                        throw Error('Unknown getter');
                    ye(this, e);
                }
            }
            const ye = (e, t) => We(e, fe, t);
            function we(e, t) {
                if (e[fe]) {
                    let n = e[pe];
                    (n || We(e, pe, (n = new Set())),
                        n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t)));
                }
                return t;
            }
            function Oe(e, t) {
                let n = e[pe];
                if (n && n.has(t)) {
                    const r = n.size - 1;
                    (r ? n.delete(t) : (e[pe] = null), e.observerRemoved && e.observerRemoved(r, t));
                }
            }
            const We = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
                Ue = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                Be = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
                Se = new RegExp(`(${Ue.source})(%|[a-z]+)`, 'i');
            let Ae;
            const Te = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
                je = (e, t, n, r, i) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
                Pe = (e) => {
                    Ae || (Ae = k ? new RegExp(`(${Object.keys(k).join('|')})(?!\\w)`, 'g') : /^\b$/);
                    const t = e.output.map((e) => be(e).replace(Be, ce).replace(Ae, ce)),
                        n = t.map((e) => e.match(Ue).map(Number)),
                        r = n[0]
                            .map((e, t) =>
                                n.map((e) => {
                                    if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                                    return e[t];
                                }),
                            )
                            .map((t) => de(he({}, e, { output: t })));
                    return (e) => {
                        var n;
                        const i =
                            !Se.test(t[0]) && (null == (n = t.find((e) => Se.test(e))) ? void 0 : n.replace(Ue, ''));
                        let o = 0;
                        return t[0].replace(Ue, () => `${r[o++](e)}${i || ''}`).replace(Te, je);
                    };
                },
                Ee = 'react-spring: ',
                xe = (e) => {
                    const t = e;
                    let n = !1;
                    if ('function' != typeof t) throw new TypeError(`${Ee}once requires a function parameter`);
                    return (...e) => {
                        n || (t(...e), (n = !0));
                    };
                },
                ke = xe(console.warn);
            function Ve() {
                ke(`${Ee}The "interpolate" function is deprecated in v9 (use "to" instead)`);
            }
            const Re = xe(console.warn);
            function Ce() {
                Re(
                    `${Ee}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
                );
            }
            function Ne(e) {
                return U.str(e) && ('#' == e[0] || /\d/.test(e) || e in (k || {}));
            }
            const Ie = (e) => (0, w.useEffect)(e, Me),
                Me = [];
            function De() {
                const e = (0, w.useState)()[1],
                    t = (0, w.useState)(Le)[0];
                return (
                    Ie(t.unmount),
                    () => {
                        t.current && e({});
                    }
                );
            }
            function Le() {
                const e = {
                    current: !0,
                    unmount: () => () => {
                        e.current = !1;
                    },
                };
                return e;
            }
            function qe(e, t) {
                const n = (0, w.useState)(() => ({ inputs: t, result: e() }))[0],
                    r = (0, w.useRef)(),
                    i = r.current;
                let o = i;
                return (
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
                        : (o = n),
                    (0, w.useEffect)(() => {
                        ((r.current = o), i == n && (n.inputs = n.result = void 0));
                    }, [o]),
                    o.result
                );
            }
            function Qe(e) {
                const t = (0, w.useRef)();
                return (
                    (0, w.useEffect)(() => {
                        t.current = e;
                    }),
                    t.current
                );
            }
            const Fe =
                'undefined' != typeof window && window.document && window.document.createElement
                    ? w.useLayoutEffect
                    : w.useEffect;
        },
        7006: (e, t, n) => {
            'use strict';
            n.d(t, {
                animated: () => W,
                useSpring: () => r.useSpring,
                useSpringRef: () => r.useSpringRef,
                useTransition: () => r.useTransition,
            });
            var r = n(9738),
                i = n(1533),
                o = n(2810),
                s = n(1686);
            function a(e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                return i;
            }
            const u = ['style', 'children', 'scrollTop', 'scrollLeft'],
                l = /^--/;
            function c(e, t) {
                return null == t || 'boolean' == typeof t || '' === t
                    ? ''
                    : 'number' != typeof t || 0 === t || l.test(e) || (h.hasOwnProperty(e) && h[e])
                      ? ('' + t).trim()
                      : t + 'px';
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
                (e, t) => (
                    f.forEach((n) => (e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])),
                    e
                ),
                h,
            );
            const p = ['x', 'y', 'z'],
                v = /^(matrix|translate|scale|rotate|skew)/,
                b = /^(translate)/,
                g = /^(rotate|skew)/,
                _ = (e, t) => (o.is.num(e) && 0 !== e ? e + t : e),
                m = (e, t) => (o.is.arr(e) ? e.every((e) => m(e, t)) : o.is.num(e) ? e === t : parseFloat(e) === t);
            class y extends s.rS {
                constructor(e) {
                    let t = e.x,
                        n = e.y,
                        r = e.z,
                        i = a(e, p);
                    const s = [],
                        u = [];
                    ((t || n || r) &&
                        (s.push([t || 0, n || 0, r || 0]),
                        u.push((e) => [`translate3d(${e.map((e) => _(e, 'px')).join(',')})`, m(e, 0)])),
                        (0, o.rU)(i, (e, t) => {
                            if ('transform' === t) (s.push([e || '']), u.push((e) => [e, '' === e]));
                            else if (v.test(t)) {
                                if ((delete i[t], o.is.und(e))) return;
                                const n = b.test(t) ? 'px' : g.test(t) ? 'deg' : '';
                                (s.push((0, o.qo)(e)),
                                    u.push(
                                        'rotate3d' === t
                                            ? ([e, t, r, i]) => [`rotate3d(${e},${t},${r},${_(i, n)})`, m(i, 0)]
                                            : (e) => [
                                                  `${t}(${e.map((e) => _(e, n)).join(',')})`,
                                                  m(e, t.startsWith('scale') ? 1 : 0),
                                              ],
                                    ));
                            }
                        }),
                        s.length && (i.transform = new w(s, u)),
                        super(i));
                }
            }
            class w extends o.B0 {
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
                        (0, o.S6)(this.inputs, (n, r) => {
                            const i = (0, o.je)(n[0]),
                                s = this.transforms[r](o.is.arr(i) ? i : n.map(o.je)),
                                a = s[0],
                                u = s[1];
                            ((e += ' ' + a), (t = t && u));
                        }),
                        t ? 'none' : e
                    );
                }
                observerAdded(e) {
                    1 == e && (0, o.S6)(this.inputs, (e) => (0, o.S6)(e, (e) => (0, o.j$)(e) && (0, o.UI)(e, this)));
                }
                observerRemoved(e) {
                    0 == e && (0, o.S6)(this.inputs, (e) => (0, o.S6)(e, (e) => (0, o.j$)(e) && (0, o.iL)(e, this)));
                }
                eventObserved(e) {
                    ('change' == e.type && (this._value = null), (0, o.k0)(this, e));
                }
            }
            const O = ['scrollTop', 'scrollLeft'];
            r.Globals.assign({
                batchedUpdates: i.unstable_batchedUpdates,
                createStringInterpolator: o.qS,
                colors: o.O9,
            });
            const W = (0, s.Ld)(
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
                            i = r.style,
                            o = r.children,
                            s = r.scrollTop,
                            h = r.scrollLeft,
                            f = a(r, u),
                            p = Object.values(f),
                            v = Object.keys(f).map((t) =>
                                n || e.hasAttribute(t)
                                    ? t
                                    : d[t] || (d[t] = t.replace(/([A-Z])/g, (e) => '-' + e.toLowerCase())),
                            );
                        void 0 !== o && (e.textContent = o);
                        for (let t in i)
                            if (i.hasOwnProperty(t)) {
                                const n = c(t, i[t]);
                                l.test(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
                            }
                        (v.forEach((t, n) => {
                            e.setAttribute(t, p[n]);
                        }),
                            void 0 !== s && (e.scrollTop = s),
                            void 0 !== h && (e.scrollLeft = h));
                    },
                    createAnimatedStyle: (e) => new y(e),
                    getComponentProps: (e) => a(e, O),
                },
            ).animated;
        },
        8045: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => U });
            var r = (function () {
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
                i = 'undefined' != typeof window && 'undefined' != typeof document && window.document === document,
                o =
                    void 0 !== n.g && n.g.Math === Math
                        ? n.g
                        : 'undefined' != typeof self && self.Math === Math
                          ? self
                          : 'undefined' != typeof window && window.Math === Math
                            ? window
                            : Function('return this')(),
                s =
                    'function' == typeof requestAnimationFrame
                        ? requestAnimationFrame.bind(o)
                        : function (e) {
                              return setTimeout(function () {
                                  return e(Date.now());
                              }, 1e3 / 60);
                          },
                a = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
                u = 'undefined' != typeof MutationObserver,
                l = (function () {
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
                                    (n && ((n = !1), e()), r && u());
                                }
                                function a() {
                                    s(o);
                                }
                                function u() {
                                    var e = Date.now();
                                    if (n) {
                                        if (e - i < 2) return;
                                        r = !0;
                                    } else ((n = !0), (r = !1), setTimeout(a, 20));
                                    i = e;
                                }
                                return u;
                            })(this.refresh.bind(this))));
                    }
                    return (
                        (e.prototype.addObserver = function (e) {
                            (~this.observers_.indexOf(e) || this.observers_.push(e),
                                this.connected_ || this.connect_());
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
                        (e.prototype.disconnect_ = function () {
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
                        (e.prototype.onTransitionEnd_ = function (e) {
                            var t = e.propertyName,
                                n = void 0 === t ? '' : t;
                            a.some(function (e) {
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
                c = function (e, t) {
                    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                        var i = r[n];
                        Object.defineProperty(e, i, { value: t[i], enumerable: !1, writable: !1, configurable: !0 });
                    }
                    return e;
                },
                d = function (e) {
                    return (e && e.ownerDocument && e.ownerDocument.defaultView) || o;
                },
                h = g(0, 0, 0, 0);
            function f(e) {
                return parseFloat(e) || 0;
            }
            function p(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                return t.reduce(function (t, n) {
                    return t + f(e['border-' + n + '-width']);
                }, 0);
            }
            var v =
                'undefined' != typeof SVGGraphicsElement
                    ? function (e) {
                          return e instanceof d(e).SVGGraphicsElement;
                      }
                    : function (e) {
                          return e instanceof d(e).SVGElement && 'function' == typeof e.getBBox;
                      };
            function b(e) {
                return i
                    ? v(e)
                        ? (function (e) {
                              var t = e.getBBox();
                              return g(0, 0, t.width, t.height);
                          })(e)
                        : (function (e) {
                              var t = e.offsetWidth,
                                  n = e.offsetHeight;
                              if (!t && !n) return h;
                              var r = d(e).getComputedStyle(e),
                                  i = (function (e) {
                                      for (
                                          var t = {}, n = 0, r = ['top', 'right', 'bottom', 'left'];
                                          n < r.length;
                                          n++
                                      ) {
                                          var i = r[n],
                                              o = e['padding-' + i];
                                          t[i] = f(o);
                                      }
                                      return t;
                                  })(r),
                                  o = i.left + i.right,
                                  s = i.top + i.bottom,
                                  a = f(r.width),
                                  u = f(r.height);
                              if (
                                  ('border-box' === r.boxSizing &&
                                      (Math.round(a + o) !== t && (a -= p(r, 'left', 'right') + o),
                                      Math.round(u + s) !== n && (u -= p(r, 'top', 'bottom') + s)),
                                  !(function (e) {
                                      return e === d(e).document.documentElement;
                                  })(e))
                              ) {
                                  var l = Math.round(a + o) - t,
                                      c = Math.round(u + s) - n;
                                  (1 !== Math.abs(l) && (a -= l), 1 !== Math.abs(c) && (u -= c));
                              }
                              return g(i.left, i.top, a, u);
                          })(e)
                    : h;
            }
            function g(e, t, n, r) {
                return { x: e, y: t, width: n, height: r };
            }
            var _ = (function () {
                    function e(e) {
                        ((this.broadcastWidth = 0),
                            (this.broadcastHeight = 0),
                            (this.contentRect_ = g(0, 0, 0, 0)),
                            (this.target = e));
                    }
                    return (
                        (e.prototype.isActive = function () {
                            var e = b(this.target);
                            return (
                                (this.contentRect_ = e),
                                e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                            );
                        }),
                        (e.prototype.broadcastRect = function () {
                            var e = this.contentRect_;
                            return ((this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e);
                        }),
                        e
                    );
                })(),
                m = function (e, t) {
                    var n,
                        r,
                        i,
                        o,
                        s,
                        a,
                        u,
                        l =
                            ((r = (n = t).x),
                            (i = n.y),
                            (o = n.width),
                            (s = n.height),
                            (a = 'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
                            (u = Object.create(a.prototype)),
                            c(u, { x: r, y: i, width: o, height: s, top: i, right: r + o, bottom: s + i, left: r }),
                            u);
                    c(this, { target: e, contentRect: l });
                },
                y = (function () {
                    function e(e, t, n) {
                        if (((this.activeObservations_ = []), (this.observations_ = new r()), 'function' != typeof e))
                            throw new TypeError('The callback provided as parameter 1 is not a function.');
                        ((this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = n));
                    }
                    return (
                        (e.prototype.observe = function (e) {
                            if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                            if ('undefined' != typeof Element && Element instanceof Object) {
                                if (!(e instanceof d(e).Element))
                                    throw new TypeError('parameter 1 is not of type "Element".');
                                var t = this.observations_;
                                t.has(e) ||
                                    (t.set(e, new _(e)),
                                    this.controller_.addObserver(this),
                                    this.controller_.refresh());
                            }
                        }),
                        (e.prototype.unobserve = function (e) {
                            if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                            if ('undefined' != typeof Element && Element instanceof Object) {
                                if (!(e instanceof d(e).Element))
                                    throw new TypeError('parameter 1 is not of type "Element".');
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
                                        return new m(e.target, e.broadcastRect());
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
                w = 'undefined' != typeof WeakMap ? new WeakMap() : new r(),
                O = function e(t) {
                    if (!(this instanceof e)) throw new TypeError('Cannot call a class as a function.');
                    if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                    var n = l.getInstance(),
                        r = new y(t, n, this);
                    w.set(this, r);
                };
            ['observe', 'unobserve', 'disconnect'].forEach(function (e) {
                O.prototype[e] = function () {
                    var t;
                    return (t = w.get(this))[e].apply(t, arguments);
                };
            });
            var W = void 0 !== o.ResizeObserver ? o.ResizeObserver : O;
            const U =
                /^(battle\/(EpilogueWindow\/EpilogueWindo|OnboardingBattleResultView\/OnboardingBattleResultVie)w|common\/(CongratulationsWindow\/CongratulationsWindow|MedalTooltip\/MedalTooltip|OnboardingQueueView\/OnboardingQueueView)|lobby\/(MissionTooltip\/Mission|NewbieBannerTooltip\/NewbieBanner)Tooltip)$/.test(
                    n.j,
                )
                    ? null
                    : W;
        },
        9769: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => r });
            const r =
                /^(battle\/(EpilogueWindow\/Epilogu|PrebattleWindow\/Prebattl)eWindow|common\/(BadgeTooltip\/Badge|MedalTooltip\/Medal)Tooltip)$/.test(
                    n.j,
                )
                    ? [
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
                      ]
                    : null;
        },
        6906: (e, t, n) => {
            'use strict';
            n.d(t, { X: () => r });
            const r = (e) => new DOMParser().parseFromString(e, 'text/html');
        },
        1281: (e, t, n) => {
            'use strict';
            if (
                (n.d(t, { D4: () => g }),
                /^(battle\/(EpilogueWindow\/Epilogu|PrebattleWindow\/Prebattl)eWindow|common\/(BadgeTooltip\/Badge|MedalTooltip\/Medal)Tooltip)$/.test(
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
                /^(battle\/(EpilogueWindow\/Epilogu|PrebattleWindow\/Prebattl)eWindow|common\/(BadgeTooltip\/Badge|MedalTooltip\/Medal)Tooltip)$/.test(
                    n.j,
                )
            )
                var o = n(6906);
            function s(e, t) {
                var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                if (n) return (n = n.call(e)).next.bind(n);
                if (
                    Array.isArray(e) ||
                    (n = (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return a(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return (
                                'Object' === n && e.constructor && (n = e.constructor.name),
                                'Map' === n || 'Set' === n
                                    ? Array.from(e)
                                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                      ? a(e, t)
                                      : void 0
                            );
                        }
                    })(e)) ||
                    (t && e && 'number' == typeof e.length)
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
            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            const u = console.assert,
                l = {
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
                c = new Set([
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
                constructor(e) {
                    ((this.textNodes = []), (this.element = e));
                }
                hasText() {
                    return this.textNodes.length > 0;
                }
            }
            class h {
                constructor(e, t) {
                    ((this.separator = '​'),
                        (this.threshold = v),
                        (this.parser_ = e),
                        void 0 !== t &&
                            (void 0 !== t.className && (this.className = t.className),
                            void 0 !== t.separator && (this.separator = t.separator),
                            void 0 !== t.threshold && (this.threshold = t.threshold)));
                }
                applyToElement(e) {
                    for (var t, n = s(this.getBlocks(e)); !(t = n()).done; ) {
                        const e = t.value;
                        (u(e.hasText()), this.applyToParagraph(e));
                    }
                }
                *getBlocks(e, t) {
                    if ((u(1 === e.nodeType), this.className && e.classList.contains(this.className))) return;
                    const n = (function (e) {
                        const t = e.nodeName,
                            n = l[t];
                        if (void 0 !== n) return n;
                        if ('function' == typeof getComputedStyle) {
                            const t = getComputedStyle(e);
                            switch (t.whiteSpace) {
                                case 'nowrap':
                                case 'pre':
                                    return 2;
                            }
                            const n = t.display;
                            if (n) return 'inline' === n ? 0 : 1;
                        }
                        return c.has(t) ? 1 : 0;
                    })(e);
                    if (2 === n) return;
                    if (3 === n) return (t && t.hasText() && (yield t, (t.textNodes = [])), void u(!e.firstChild));
                    u(1 === n || 0 === n);
                    const r = !t || 1 === n,
                        i = r ? new d(e) : t;
                    u(i);
                    for (var o, a = s(e.childNodes); !(o = a()).done; ) {
                        const e = o.value;
                        switch (e.nodeType) {
                            case 1:
                                for (var h, f = s(this.getBlocks(e, i)); !(h = f()).done; ) {
                                    const e = h.value;
                                    yield e;
                                }
                                break;
                            case 3:
                                i.textNodes.push(e);
                        }
                    }
                    r && i.hasText() && (yield i);
                }
                applyToParagraph(e) {
                    const t = e.textNodes;
                    u(t.length > 0);
                    const n = t.map((e) => e.nodeValue).join('');
                    if (/^\s*$/.test(n)) return;
                    const r = this.parser_.parse(n, this.threshold);
                    if ((u(r.length > 0), u(r.reduce((e, t) => e + t.length, 0) === n.length), r.length <= 1)) return;
                    const i = [];
                    let o = 0;
                    for (var a, l = s(r); !(a = l()).done; ) {
                        const e = a.value;
                        (u(e.length > 0), (o += e.length), i.push(o));
                    }
                    (u(i[0] > 0),
                        u(i[i.length - 1] === n.length),
                        ++i[i.length - 1],
                        u(i.length > 1),
                        this.splitTextNodes(t, i),
                        this.applyBlockStyle(e.element));
                }
                splitTextNodes(e, t) {
                    u(t.length > 0);
                    const n = e.reduce((e, t) => e + (t.nodeValue ? t.nodeValue.length : 0), 0);
                    u(t[t.length - 1] > n);
                    let r = 0,
                        i = t[0];
                    u(i > 0);
                    let o = 0;
                    for (var a, l = s(e); !(a = l()).done; ) {
                        const e = a.value,
                            n = e.nodeValue;
                        if (!n) continue;
                        const s = o + n.length;
                        if (i >= s) {
                            o = s;
                            continue;
                        }
                        const l = [];
                        let c = 0;
                        for (; i < s; ) {
                            const e = i - o;
                            (u(e >= c), l.push(n.substring(c, e)), (c = e), ++r, u(t[r] > i), (i = t[r]));
                        }
                        (u(l.length > 0), c < n.length && l.push(n.substring(c)), this.splitTextNode(e, l), (o = s));
                    }
                    (u(o === n), u(r < t.length), u(t[r] >= n));
                }
                splitTextNode(e, t) {
                    (u(t.length > 1), u(e.nodeValue === t.join('')));
                    const n = this.separator;
                    if ('string' == typeof n) return void (e.nodeValue = t.join(n));
                    const r = e.ownerDocument;
                    let i = [];
                    for (var o, a = s(t); !(o = a()).done; ) {
                        const e = o.value;
                        (e && i.push(r.createTextNode(e)), i.push(null));
                    }
                    (i.pop(), (i = i.map((e) => e || n.cloneNode(!0))), e.replaceWith(...i));
                }
                applyBlockStyle(e) {
                    if (this.className) return void e.classList.add(this.className);
                    const t = e.style;
                    ((t.wordBreak = 'keep-all'), (t.overflowWrap = 'break-word'));
                }
                static defineClassAs(e, t) {
                    const n = e.createElement('style');
                    ((n.textContent = `.${t} { word-break: keep-all; overflow-wrap: break-word; }`),
                        e.head.appendChild(n));
                }
            }
            if (
                /^(battle\/(EpilogueWindow\/Epilogu|PrebattleWindow\/Prebattl)eWindow|common\/(BadgeTooltip\/Badge|MedalTooltip\/Medal)Tooltip)$/.test(
                    n.j,
                )
            )
                var f = n(3759);
            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            const v = 1e3;
            class b {
                constructor(e) {
                    this.model = e;
                }
                static getUnicodeBlockFeature(e) {
                    if (!e || e === f.UI) return f.UI;
                    const t = e.codePointAt(0);
                    return void 0 === t ? f.UI : `${(0, f.ml)(r.A, t)}`.padStart(3, '0');
                }
                static getFeature(e, t, n, r, i, o, s, a, u) {
                    const l = b.getUnicodeBlockFeature(e),
                        c = b.getUnicodeBlockFeature(t),
                        d = b.getUnicodeBlockFeature(n),
                        h = b.getUnicodeBlockFeature(r),
                        p = b.getUnicodeBlockFeature(i),
                        v = b.getUnicodeBlockFeature(o),
                        g = {
                            UP1: s,
                            UP2: a,
                            UP3: u,
                            BP1: s + a,
                            BP2: a + u,
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
                            UB3: d,
                            UB4: h,
                            UB5: p,
                            UB6: v,
                            BB1: c + d,
                            BB2: d + h,
                            BB3: h + p,
                            TB1: l + c + d,
                            TB2: c + d + h,
                            TB3: d + h + p,
                            TB4: h + p + v,
                            UQ1: s + l,
                            UQ2: a + c,
                            UQ3: u + d,
                            BQ1: a + c + d,
                            BQ2: a + d + h,
                            BQ3: u + c + d,
                            BQ4: u + d + h,
                            TQ1: a + l + c + d,
                            TQ2: a + c + d + h,
                            TQ3: u + l + c + d,
                            TQ4: u + c + d + h,
                        };
                    return Object.entries(g)
                        .filter((e) => !e[1].includes(f.UI))
                        .map(([e, t]) => `${e}:${t}`);
                }
                static hasChildTextNode(e) {
                    for (
                        var t,
                            n = (function (e, t) {
                                var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                if (n) return (n = n.call(e)).next.bind(n);
                                if (
                                    Array.isArray(e) ||
                                    (n = (function (e, t) {
                                        if (e) {
                                            if ('string' == typeof e) return p(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            return (
                                                'Object' === n && e.constructor && (n = e.constructor.name),
                                                'Map' === n || 'Set' === n
                                                    ? Array.from(e)
                                                    : 'Arguments' === n ||
                                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                                      ? p(e, t)
                                                      : void 0
                                            );
                                        }
                                    })(e)) ||
                                    (t && e && 'number' == typeof e.length)
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
                            })(e.childNodes);
                        !(t = n()).done;
                    )
                        if (3 === t.value.nodeType) return !0;
                    return !1;
                }
                parse(e, t = v) {
                    if ('' === e) return [];
                    let n = 'U',
                        r = 'U',
                        i = 'U';
                    const o = [e[0]];
                    for (let s = 1; s < e.length; s++) {
                        const a = b
                                .getFeature(
                                    e[s - 3] || f.UI,
                                    e[s - 2] || f.UI,
                                    e[s - 1],
                                    e[s],
                                    e[s + 1] || f.UI,
                                    e[s + 2] || f.UI,
                                    n,
                                    r,
                                    i,
                                )
                                .map((e) => this.model.get(e) || 0)
                                .reduce((e, t) => e + t),
                            u = a > 0 ? 'B' : 'O';
                        (a > t && o.push(''), (o[o.length - 1] += e[s]), (n = r), (r = i), (i = u));
                    }
                    return o;
                }
                applyElement(e, t = v) {
                    new h(this, { separator: e.ownerDocument.createElement('wbr'), threshold: t }).applyToElement(e);
                }
                translateHTMLString(e, t = v) {
                    if ('' === e) return e;
                    const n = (0, o.X)(e);
                    if (b.hasChildTextNode(n.body)) {
                        const e = n.createElement('span');
                        (e.append(...n.body.childNodes), n.body.append(e));
                    }
                    return (this.applyElement(n.body.childNodes[0], t), n.body.innerHTML);
                }
            }
            const g = () => new b(new Map(Object.entries(i)));
        },
        3759: (e, t, n) => {
            'use strict';
            n.d(t, { UI: () => i, ml: () => r });
            const r = (e, t) => {
                    const n = Math.floor(e.length / 2);
                    return t === e[n]
                        ? n + 1
                        : t < e[n]
                          ? 1 === e.length
                              ? 0
                              : r(e.slice(0, n), t)
                          : 1 === e.length
                            ? 1
                            : n + r(e.slice(n), t);
                },
                i = '▔';
        },
        6483: (e, t) => {
            var n;
            !(function () {
                'use strict';
                var r = {}.hasOwnProperty;
                function i() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var o = typeof n;
                            if ('string' === o || 'number' === o) e.push(n);
                            else if (Array.isArray(n) && n.length) {
                                var s = i.apply(null, n);
                                s && e.push(s);
                            } else if ('object' === o) for (var a in n) r.call(n, a) && n[a] && e.push(a);
                        }
                    }
                    return e.join(' ');
                }
                e.exports
                    ? ((i.default = i), (e.exports = i))
                    : void 0 ===
                          (n = function () {
                              return i;
                          }.apply(t, [])) || (e.exports = n);
            })();
        },
        3403: (e, t, n) => {
            'use strict';
            n.d(t, { Pi: () => m });
            var r = n(9174),
                i = n(7363),
                o = n.n(i);
            if (!i.useState) throw new Error('mobx-react-lite requires React with Hooks support');
            if (!r.rC) throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
            var s = n(1533);
            var a = n(5013),
                u = 'undefined' == typeof FinalizationRegistry ? void 0 : FinalizationRegistry,
                l = n(2373),
                c = u
                    ? (function (e) {
                          var t = new Map(),
                              n = 1,
                              r = new e(function (e) {
                                  var n = t.get(e);
                                  n && (n.reaction.dispose(), t.delete(e));
                              });
                          return {
                              addReactionToTrack: function (e, i, o) {
                                  var s = n++;
                                  return (
                                      r.register(o, s, e),
                                      (e.current = (0, l.Uy)(i)),
                                      (e.current.finalizationRegistryCleanupToken = s),
                                      t.set(s, e.current),
                                      e.current
                                  );
                              },
                              recordReactionAsCommitted: function (e) {
                                  (r.unregister(e),
                                      e.current &&
                                          e.current.finalizationRegistryCleanupToken &&
                                          t.delete(e.current.finalizationRegistryCleanupToken));
                              },
                              forceCleanupTimerToRunNowForTests: function () {},
                              resetCleanupScheduleForTests: function () {},
                          };
                      })(u)
                    : (function () {
                          var e,
                              t = new Set();
                          function n() {
                              void 0 === e && (e = setTimeout(r, l.Qs));
                          }
                          function r() {
                              e = void 0;
                              var r = Date.now();
                              (t.forEach(function (e) {
                                  var n = e.current;
                                  n && r >= n.cleanAt && (n.reaction.dispose(), (e.current = null), t.delete(e));
                              }),
                                  t.size > 0 && n());
                          }
                          return {
                              addReactionToTrack: function (e, r, i) {
                                  var o;
                                  return ((e.current = (0, l.Uy)(r)), (o = e), t.add(o), n(), e.current);
                              },
                              recordReactionAsCommitted: function (e) {
                                  t.delete(e);
                              },
                              forceCleanupTimerToRunNowForTests: function () {
                                  e && (clearTimeout(e), r());
                              },
                              resetCleanupScheduleForTests: function () {
                                  var n, r;
                                  if (t.size > 0) {
                                      try {
                                          for (
                                              var i = (function (e) {
                                                      var t = 'function' == typeof Symbol && Symbol.iterator,
                                                          n = t && e[t],
                                                          r = 0;
                                                      if (n) return n.call(e);
                                                      if (e && 'number' == typeof e.length)
                                                          return {
                                                              next: function () {
                                                                  return (
                                                                      e && r >= e.length && (e = void 0),
                                                                      { value: e && e[r++], done: !e }
                                                                  );
                                                              },
                                                          };
                                                      throw new TypeError(
                                                          t
                                                              ? 'Object is not iterable.'
                                                              : 'Symbol.iterator is not defined.',
                                                      );
                                                  })(t),
                                                  o = i.next();
                                              !o.done;
                                              o = i.next()
                                          ) {
                                              var s = o.value,
                                                  a = s.current;
                                              a && (a.reaction.dispose(), (s.current = null));
                                          }
                                      } catch (e) {
                                          n = { error: e };
                                      } finally {
                                          try {
                                              o && !o.done && (r = i.return) && r.call(i);
                                          } finally {
                                              if (n) throw n.error;
                                          }
                                      }
                                      t.clear();
                                  }
                                  e && (clearTimeout(e), (e = void 0));
                              },
                          };
                      })(),
                d = c.addReactionToTrack,
                h = c.recordReactionAsCommitted,
                f = (c.resetCleanupScheduleForTests, c.forceCleanupTimerToRunNowForTests, n(2286)),
                p = function (e, t) {
                    var n = 'function' == typeof Symbol && e[Symbol.iterator];
                    if (!n) return e;
                    var r,
                        i,
                        o = n.call(e),
                        s = [];
                    try {
                        for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; ) s.push(r.value);
                    } catch (e) {
                        i = { error: e };
                    } finally {
                        try {
                            r && !r.done && (n = o.return) && n.call(o);
                        } finally {
                            if (i) throw i.error;
                        }
                    }
                    return s;
                };
            function v(e) {
                return 'observer' + e;
            }
            var b = function () {};
            function g() {
                return new b();
            }
            var _ = function () {
                return (
                    (_ =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in (t = arguments[n]))
                                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e;
                        }),
                    _.apply(this, arguments)
                );
            };
            function m(e, t) {
                if ((0, f.F)()) return e;
                var n,
                    s,
                    u,
                    l = _({ forwardRef: !1 }, t),
                    c = e.displayName || e.name,
                    b = function (t, n) {
                        return (function (e, t) {
                            if ((void 0 === t && (t = 'observed'), (0, f.F)())) return e();
                            var n = p(o().useState(g), 1)[0],
                                i = p(o().useState(), 2)[1],
                                s = function () {
                                    return i([]);
                                },
                                u = o().useRef(null);
                            if (!u.current)
                                var l = new r.le(v(t), function () {
                                        c.mounted ? s() : (c.changedBeforeMount = !0);
                                    }),
                                    c = d(u, l, n);
                            var b,
                                _,
                                m = u.current.reaction;
                            if (
                                (o().useDebugValue(m, a.e),
                                o().useEffect(function () {
                                    return (
                                        h(u),
                                        u.current
                                            ? ((u.current.mounted = !0),
                                              u.current.changedBeforeMount &&
                                                  ((u.current.changedBeforeMount = !1), s()))
                                            : ((u.current = {
                                                  reaction: new r.le(v(t), function () {
                                                      s();
                                                  }),
                                                  mounted: !0,
                                                  changedBeforeMount: !1,
                                                  cleanAt: 1 / 0,
                                              }),
                                              s()),
                                        function () {
                                            (u.current.reaction.dispose(), (u.current = null));
                                        }
                                    );
                                }, []),
                                m.track(function () {
                                    try {
                                        b = e();
                                    } catch (e) {
                                        _ = e;
                                    }
                                }),
                                _)
                            )
                                throw _;
                            return b;
                        })(function () {
                            return e(t, n);
                        }, c);
                    };
                return (
                    (b.displayName = c),
                    e.contextTypes && (b.contextTypes = e.contextTypes),
                    (n = l.forwardRef ? (0, i.memo)((0, i.forwardRef)(b)) : (0, i.memo)(b)),
                    (s = e),
                    (u = n),
                    Object.keys(s).forEach(function (e) {
                        w[e] || Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(s, e));
                    }),
                    (n.displayName = c),
                    n
                );
            }
            var y,
                w = { $$typeof: !0, render: !0, compare: !0, type: !0 };
            ((y = s.unstable_batchedUpdates) ||
                (y = function (e) {
                    e();
                }),
                (0, r.jQ)({ reactionScheduler: y }));
        },
        2286: (e, t, n) => {
            'use strict';
            n.d(t, { F: () => r });
            function r() {
                return false;
            }
        },
        5013: (e, t, n) => {
            'use strict';
            if (
                (n.d(t, { e: () => i }),
                !/^(common\/(BadgeTooltip\/Badge|MedalTooltip\/Medal)Tooltip|lobby\/Newbie(AdvertisingView\/NewbieAdvertisingView|BannerTooltip\/NewbieBannerTooltip))$/.test(
                    n.j,
                ))
            )
                var r = n(9174);
            function i(e) {
                return (0, r.Gf)(e);
            }
        },
        2373: (e, t, n) => {
            'use strict';
            function r(e) {
                return { reaction: e, mounted: !1, changedBeforeMount: !1, cleanAt: Date.now() + i };
            }
            n.d(t, { Qs: () => o, Uy: () => r });
            var i = 1e4,
                o = 1e4;
        },
        3946: (e, t, n) => {
            'use strict';
            n.d(t, { Om: () => w });
            var r = n(9174);
            function i(e, t) {
                (void 0 === t && (t = 'Illegal state'),
                    e ||
                        (function (e) {
                            throw new Error('[mobx-utils] ' + e);
                        })(t));
            }
            var o = function e(t) {
                    return (
                        t &&
                        t !== Object.prototype &&
                        Object.getOwnPropertyNames(t).concat(e(Object.getPrototypeOf(t)) || [])
                    );
                },
                s = function (e) {
                    var t = o(e);
                    return t.filter(function (e, n) {
                        return t.indexOf(e) === n;
                    });
                },
                a = 'pending',
                u = 'fulfilled',
                l = 'rejected';
            function c(e) {
                switch (this.state) {
                    case a:
                        return e.pending && e.pending(this.value);
                    case l:
                        return e.rejected && e.rejected(this.value);
                    case u:
                        return e.fulfilled ? e.fulfilled(this.value) : this.value;
                }
            }
            function d(e, t) {
                if (
                    (i(arguments.length <= 2, 'fromPromise expects up to two arguments'),
                    i(
                        'function' == typeof e || ('object' == typeof e && e && 'function' == typeof e.then),
                        'Please pass a promise or function to fromPromise',
                    ),
                    !0 === e.isPromiseBasedObservable)
                )
                    return e;
                'function' == typeof e && (e = new Promise(e));
                var n = e;
                (e.then(
                    (0, r.aD)('observableFromPromise-resolve', function (e) {
                        ((n.value = e), (n.state = u));
                    }),
                    (0, r.aD)('observableFromPromise-reject', function (e) {
                        ((n.value = e), (n.state = l));
                    }),
                ),
                    (n.isPromiseBasedObservable = !0),
                    (n.case = c));
                var o = t && t.state === u ? t.value : void 0;
                return ((0, r.dw)(n, { value: o, state: a }, {}, { deep: !1 }), n);
            }
            !(function (e) {
                ((e.reject = (0, r.aD)('fromPromise.reject', function (t) {
                    var n = e(Promise.reject(t));
                    return ((n.state = l), (n.value = t), n);
                })),
                    (e.resolve = (0, r.aD)('fromPromise.resolve', function (t) {
                        void 0 === t && (t = void 0);
                        var n = e(Promise.resolve(t));
                        return ((n.state = u), (n.value = t), n);
                    })));
            })(d || (d = {}));
            var h = function (e, t, n, r) {
                var i,
                    o = arguments.length,
                    s = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
                if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                    s = Reflect.decorate(e, t, n, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
                return (o > 3 && s && Object.defineProperty(t, n, s), s);
            };
            !(function () {
                function e(e, t) {
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
                    h([r.LO.ref], e.prototype, 'current', void 0),
                    h([r.aD.bound], e.prototype, 'next', null),
                    h([r.aD.bound], e.prototype, 'complete', null),
                    h([r.aD.bound], e.prototype, 'error', null));
            })();
            var f = function () {
                    return (
                        (f =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e;
                            }),
                        f.apply(this, arguments)
                    );
                },
                p = function (e, t, n, r) {
                    var i,
                        o = arguments.length,
                        s = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
                    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                        s = Reflect.decorate(e, t, n, r);
                    else
                        for (var a = e.length - 1; a >= 0; a--)
                            (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
                    return (o > 3 && s && Object.defineProperty(t, n, s), s);
                },
                v = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
            !(function () {
                function e(e) {
                    var t,
                        n = this;
                    (Object.defineProperty(this, 'model', { enumerable: !0, configurable: !0, writable: !0, value: e }),
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
                            value: function (e) {
                                return n.localValues.has(e);
                            },
                        }),
                        (0, r.rC)(this),
                        i((0, r.Pb)(e), 'createViewModel expects an observable object'),
                        ((t = e),
                        s(t).filter(function (e) {
                            return 'constructor' !== e && !~e.indexOf('__');
                        })).forEach(function (t) {
                            var o;
                            if (t !== r.so && '__mobxDidRunLazyInitializers' !== t) {
                                if (
                                    (i(
                                        -1 === v.indexOf(t),
                                        'The propertyname ' + t + ' is reserved and cannot be used with viewModels',
                                    ),
                                    (0, r.eJ)(e, t))
                                ) {
                                    var s = (0, r.kS)(e, t),
                                        a = s.derivation.bind(n),
                                        u = null === (o = s.setter_) || void 0 === o ? void 0 : o.bind(n);
                                    n.localComputedValues.set(t, (0, r.Fl)(a, { set: u }));
                                }
                                var l = Object.getOwnPropertyDescriptor(e, t),
                                    c = l ? { enumerable: l.enumerable } : {};
                                Object.defineProperty(
                                    n,
                                    t,
                                    f(f({}, c), {
                                        configurable: !0,
                                        get: function () {
                                            return (0, r.eJ)(e, t)
                                                ? n.localComputedValues.get(t).get()
                                                : n.isPropertyDirty(t)
                                                  ? n.localValues.get(t)
                                                  : n.model[t];
                                        },
                                        set: (0, r.aD)(function (i) {
                                            (0, r.eJ)(e, t)
                                                ? n.localComputedValues.get(t).set(i)
                                                : i !== n.model[t]
                                                  ? n.localValues.set(t, i)
                                                  : n.localValues.delete(t);
                                        }),
                                    }),
                                );
                            }
                        }));
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
                            var e = this;
                            ((0, r.XP)(this.localValues).forEach(function (t) {
                                var n = e.localValues.get(t),
                                    i = e.model[t];
                                (0, r.Ei)(i)
                                    ? i.replace(n)
                                    : (0, r.LJ)(i)
                                      ? (i.clear(), i.merge(n))
                                      : (0, r.M5)(n) || (e.model[t] = n);
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
                    p([r.Fl], e.prototype, 'isDirty', null),
                    p([r.Fl], e.prototype, 'changedValues', null),
                    p([r.aD.bound], e.prototype, 'submit', null),
                    p([r.aD.bound], e.prototype, 'reset', null),
                    p([r.aD.bound], e.prototype, 'resetProperty', null));
            })();
            var b,
                g =
                    ((b = function (e, t) {
                        return (
                            (b =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }),
                            b(e, t)
                        );
                    }),
                    function (e, t) {
                        function n() {
                            this.constructor = e;
                        }
                        (b(e, t),
                            (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())));
                    }),
                _ =
                    ((function (e) {
                        function t(t, n, i) {
                            var o = void 0 === i ? {} : i,
                                s = o.name,
                                a = void 0 === s ? 'ogm' + ((1e3 * Math.random()) | 0) : s,
                                u = o.keyToName,
                                l =
                                    void 0 === u
                                        ? function (e) {
                                              return '' + e;
                                          }
                                        : u,
                                c = e.call(this) || this;
                            (Object.defineProperty(c, '_base', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: void 0,
                            }),
                                Object.defineProperty(c, '_ogmInfoKey', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: void 0,
                                }),
                                Object.defineProperty(c, '_groupBy', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: void 0,
                                }),
                                Object.defineProperty(c, '_keyToName', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: void 0,
                                }),
                                Object.defineProperty(c, '_disposeBaseObserver', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: void 0,
                                }),
                                (c._keyToName = l),
                                (c._groupBy = n),
                                (c._ogmInfoKey = Symbol('ogmInfo' + a)),
                                (c._base = t));
                            for (var d = 0; d < t.length; d++) c._addItem(t[d]);
                            return (
                                (c._disposeBaseObserver = (0, r.N7)(c._base, function (e) {
                                    if ('splice' === e.type)
                                        (0, r.PS)(function () {
                                            for (var t = 0, n = e.removed; t < n.length; t++) {
                                                var r = n[t];
                                                c._removeItem(r);
                                            }
                                            for (var i = 0, o = e.added; i < o.length; i++) {
                                                var s = o[i];
                                                c._addItem(s);
                                            }
                                        });
                                    else {
                                        if ('update' !== e.type) throw new Error('illegal state');
                                        (0, r.PS)(function () {
                                            (c._removeItem(e.oldValue), c._addItem(e.newValue));
                                        });
                                    }
                                })),
                                c
                            );
                        }
                        (g(t, e),
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
                                            ((n = (0, r.LO)([], {
                                                name: 'GroupArray[' + this._keyToName(t) + ']',
                                                deep: !1,
                                            })),
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
                                        : (n === r.length - 1 ||
                                              ((r[n] = r[r.length - 1]), (r[n][this._ogmInfoKey].groupArrIndex = n)),
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
                                        i = this._getGroupArr(n),
                                        o = {
                                            groupByValue: n,
                                            groupArrIndex: i.length,
                                            reaction: (0, r.U5)(
                                                function () {
                                                    return t._groupBy(e);
                                                },
                                                function (n, r) {
                                                    var i = e[t._ogmInfoKey];
                                                    t._removeFromGroupArr(i.groupByValue, i.groupArrIndex);
                                                    var o = t._getGroupArr(n),
                                                        s = o.length;
                                                    (o.push(e), (i.groupByValue = n), (i.groupArrIndex = s));
                                                },
                                            ),
                                        };
                                    (Object.defineProperty(e, this._ogmInfoKey, {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: o,
                                    }),
                                        i.push(e));
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
                    })(r.vP),
                    (function () {
                        function e(e, t) {
                            (Object.defineProperty(this, 'base', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: e,
                            }),
                                Object.defineProperty(this, 'args', {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: t,
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
                                var n = (this.closest = this.root = e), r = 0;
                                r < this.args.length - 1 && (n = n.get(t[r]));
                                r++
                            )
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
                                    if ((this.assertNotDisposed(), !this.exists()))
                                        throw new Error("Entry doesn't exist");
                                    return this.closest.get(this.args[this.args.length - 1]);
                                },
                            }),
                            Object.defineProperty(e.prototype, 'set', {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    this.assertNotDisposed();
                                    for (
                                        var t = this.args.length, n = this.closest, r = this.closestIdx;
                                        r < t - 1;
                                        r++
                                    ) {
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
                                    if ((this.assertNotDisposed(), !this.exists()))
                                        throw new Error("Entry doesn't exist");
                                    var e = this.args.length;
                                    this.closest.delete(this.args[e - 1]);
                                    for (var t = this.root, n = [t], r = 0; r < e - 1; r++)
                                        ((t = t.get(this.args[r])), n.push(t));
                                    for (r = n.length - 1; r > 0; r--)
                                        0 === n[r].size && n[r - 1].delete(this.args[r - 1]);
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
                    })()),
                m = (function () {
                    function e() {
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
                                return (this.last && (this.last.isDisposed = !0), (this.last = new _(this.store, e)));
                            },
                        }),
                        e
                    );
                })(),
                y = function () {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                };
            function w(e, t) {
                if ((void 0 === t && (t = !1), (0, r.LG)(e)))
                    throw new Error("computedFn shouldn't be used on actions");
                var n = !1,
                    i = 0,
                    o = 'boolean' == typeof t ? { keepAlive: t } : t,
                    s = new m();
                return function () {
                    for (var t = this, a = [], u = 0; u < arguments.length; u++) a[u] = arguments[u];
                    var l = s.entry(a);
                    if (l.exists()) return l.get().get();
                    if (!o.keepAlive && !(0, r.SW)())
                        return (
                            n ||
                                (console.warn(
                                    "invoking a computedFn from outside an reactive context won't be memoized, unless keepAlive is set",
                                ),
                                (n = !0)),
                            e.apply(this, a)
                        );
                    var c = (0, r.Fl)(
                        function () {
                            return e.apply(t, a);
                        },
                        y(y({}, o), { name: 'computedFn(' + (o.name || e.name) + '#' + ++i + ')' }),
                    );
                    return (
                        l.set(c),
                        o.keepAlive ||
                            (0, r.pA)(c, function () {
                                s.entry(a).delete();
                            }),
                        c.get()
                    );
                };
            }
        },
        9174: (e, t, n) => {
            'use strict';
            function r(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                throw new Error(
                    'number' == typeof e
                        ? '[MobX] minified error nr: ' +
                              e +
                              (n.length ? ' ' + n.map(String).join(',') : '') +
                              '. Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts'
                        : '[MobX] ' + e,
                );
            }
            n.d(t, {
                Ei: () => Bn,
                Fl: () => je,
                Gf: () => Mt,
                LG: () => jt,
                LJ: () => xn,
                LO: () => Be,
                M5: () => Kt,
                N7: () => Zt,
                PS: () => tn,
                Pb: () => qn,
                SW: () => He,
                U5: () => xt,
                XP: () => Yt,
                aD: () => St,
                dw: () => It,
                eJ: () => Xt,
                jQ: () => Nt,
                kS: () => Zn,
                le: () => pt,
                pA: () => Vt,
                rC: () => dn,
                so: () => q,
                vP: () => En,
                z: () => Tt,
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
            var s = Object.assign,
                a = Object.getOwnPropertyDescriptor,
                u = Object.defineProperty,
                l = Object.prototype,
                c = [];
            Object.freeze(c);
            var d = {};
            Object.freeze(d);
            var h = 'undefined' != typeof Proxy,
                f = Object.toString();
            function p() {
                h || r('Proxy not available');
            }
            function v(e) {
                var t = !1;
                return function () {
                    if (!t) return ((t = !0), e.apply(this, arguments));
                };
            }
            var b = function () {};
            function g(e) {
                return 'function' == typeof e;
            }
            function _(e) {
                switch (typeof e) {
                    case 'string':
                    case 'symbol':
                    case 'number':
                        return !0;
                }
                return !1;
            }
            function m(e) {
                return null !== e && 'object' == typeof e;
            }
            function y(e) {
                var t;
                if (!m(e)) return !1;
                var n = Object.getPrototypeOf(e);
                return null == n || (null == (t = n.constructor) ? void 0 : t.toString()) === f;
            }
            function w(e) {
                var t = null == e ? void 0 : e.constructor;
                return !!t && ('GeneratorFunction' === t.name || 'GeneratorFunction' === t.displayName);
            }
            function O(e, t, n) {
                u(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
            }
            function W(e, t, n) {
                u(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
            }
            function U(e, t) {
                var n = 'isMobX' + e;
                return (
                    (t.prototype[n] = !0),
                    function (e) {
                        return m(e) && !0 === e[n];
                    }
                );
            }
            function B(e) {
                return e instanceof Map;
            }
            function S(e) {
                return e instanceof Set;
            }
            var A = void 0 !== Object.getOwnPropertySymbols,
                T =
                    'undefined' != typeof Reflect && Reflect.ownKeys
                        ? Reflect.ownKeys
                        : A
                          ? function (e) {
                                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                            }
                          : Object.getOwnPropertyNames;
            function j(e) {
                return null === e ? null : 'object' == typeof e ? '' + e : e;
            }
            function P(e, t) {
                return l.hasOwnProperty.call(e, t);
            }
            var E =
                Object.getOwnPropertyDescriptors ||
                function (e) {
                    var t = {};
                    return (
                        T(e).forEach(function (n) {
                            t[n] = a(e, n);
                        }),
                        t
                    );
                };
            function x(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    ((r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r));
                }
            }
            function k(e, t, n) {
                return (t && x(e.prototype, t), n && x(e, n), e);
            }
            function V() {
                return (
                    (V =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    V.apply(this, arguments)
                );
            }
            function R(e, t) {
                ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t));
            }
            function C(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function I(e, t) {
                var n;
                if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return N(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? N(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
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
                return (n = e[Symbol.iterator]()).next.bind(n);
            }
            var M = Symbol('mobx-stored-annotations');
            function D(e) {
                return Object.assign(function (t, n) {
                    L(t, n, e);
                }, e);
            }
            function L(e, t, n) {
                (P(e, M) || O(e, M, V({}, e[M])),
                    (function (e) {
                        return e.annotationType_ === K;
                    })(n) || (e[M][t] = n));
            }
            var q = Symbol('mobx administration'),
                Q = (function () {
                    function e(e) {
                        (void 0 === e && (e = 'Atom'),
                            (this.name_ = void 0),
                            (this.isPendingUnobservation_ = !1),
                            (this.isBeingObserved_ = !1),
                            (this.observers_ = new Set()),
                            (this.diffValue_ = 0),
                            (this.lastAccessedBy_ = 0),
                            (this.lowestObserverState_ = Le.NOT_TRACKING_),
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
                            return ht(this);
                        }),
                        (t.reportChanged = function () {
                            (ct(), ft(this), dt());
                        }),
                        (t.toString = function () {
                            return this.name_;
                        }),
                        e
                    );
                })(),
                F = U('Atom', Q);
            function $(e, t, n) {
                (void 0 === t && (t = b), void 0 === n && (n = b));
                var r = new Q(e);
                return (t !== b && Rt(kt, r, t, undefined), n !== b && Vt(r, n), r);
            }
            var z = {
                identity: function (e, t) {
                    return e === t;
                },
                structural: function (e, t) {
                    return nr(e, t);
                },
                default: function (e, t) {
                    return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
                },
                shallow: function (e, t) {
                    return nr(e, t, 1);
                },
            };
            function G(e, t, n) {
                return Jt(e)
                    ? e
                    : Array.isArray(e)
                      ? Be.array(e, { name: n })
                      : y(e)
                        ? Be.object(e, void 0, { name: n })
                        : B(e)
                          ? Be.map(e, { name: n })
                          : S(e)
                            ? Be.set(e, { name: n })
                            : 'function' != typeof e || jt(e) || Gt(e)
                              ? e
                              : w(e)
                                ? $t(e)
                                : At(n, e);
            }
            function H(e) {
                return e;
            }
            var K = 'override';
            function X(e, t) {
                return { annotationType_: e, options_: t, make_: J, extend_: Y };
            }
            function J(e, t, n, r) {
                var i;
                if (null == (i = this.options_) ? void 0 : i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
                if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
                if (jt(n.value)) return 1;
                var o = Z(e, this, t, n, !1);
                return (u(r, t, o), 2);
            }
            function Y(e, t, n, r) {
                var i = Z(e, this, t, n);
                return e.defineProperty_(t, i, r);
            }
            function Z(e, t, n, r, i) {
                var o, s, a, u, l, c, d, h;
                (void 0 === i && (i = st.safeDescriptors), (h = r), t.annotationType_, h.value);
                var f,
                    p = r.value;
                return (
                    (null == (o = t.options_) ? void 0 : o.bound) &&
                        (p = p.bind(null != (f = e.proxy_) ? f : e.target_)),
                    {
                        value: Re(
                            null != (s = null == (a = t.options_) ? void 0 : a.name) ? s : n.toString(),
                            p,
                            null != (u = null == (l = t.options_) ? void 0 : l.autoAction) && u,
                            (null == (c = t.options_) ? void 0 : c.bound)
                                ? null != (d = e.proxy_)
                                    ? d
                                    : e.target_
                                : void 0,
                        ),
                        configurable: !i || e.isPlainObject_,
                        enumerable: !1,
                        writable: !i,
                    }
                );
            }
            function ee(e, t) {
                return { annotationType_: e, options_: t, make_: te, extend_: ne };
            }
            function te(e, t, n, r) {
                var i;
                if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
                if (
                    (null == (i = this.options_) ? void 0 : i.bound) &&
                    !Gt(e.target_[t]) &&
                    null === this.extend_(e, t, n, !1)
                )
                    return 0;
                if (Gt(n.value)) return 1;
                var o = re(e, this, 0, n, !1, !1);
                return (u(r, t, o), 2);
            }
            function ne(e, t, n, r) {
                var i,
                    o = re(e, this, 0, n, null == (i = this.options_) ? void 0 : i.bound);
                return e.defineProperty_(t, o, r);
            }
            function re(e, t, n, r, i, o) {
                var s;
                (void 0 === o && (o = st.safeDescriptors), (s = r), t.annotationType_, s.value);
                var a,
                    u = r.value;
                return (
                    i && (u = u.bind(null != (a = e.proxy_) ? a : e.target_)),
                    { value: $t(u), configurable: !o || e.isPlainObject_, enumerable: !1, writable: !o }
                );
            }
            function ie(e, t) {
                return { annotationType_: e, options_: t, make_: oe, extend_: se };
            }
            function oe(e, t, n) {
                return null === this.extend_(e, t, n, !1) ? 0 : 1;
            }
            function se(e, t, n, r) {
                return (
                    (i = n),
                    this.annotationType_,
                    i.get,
                    e.defineComputedProperty_(t, V({}, this.options_, { get: n.get, set: n.set }), r)
                );
                var i;
            }
            function ae(e, t) {
                return { annotationType_: e, options_: t, make_: ue, extend_: le };
            }
            function ue(e, t, n) {
                return null === this.extend_(e, t, n, !1) ? 0 : 1;
            }
            function le(e, t, n, r) {
                var i, o;
                return (
                    this.annotationType_,
                    e.defineObservableProperty_(
                        t,
                        n.value,
                        null != (i = null == (o = this.options_) ? void 0 : o.enhancer) ? i : G,
                        r,
                    )
                );
            }
            var ce = de();
            function de(e) {
                return { annotationType_: 'true', options_: e, make_: he, extend_: fe };
            }
            function he(e, t, n, r) {
                var i, o, s, a;
                if (n.get) return je.make_(e, t, n, r);
                if (n.set) {
                    var l = Re(t.toString(), n.set);
                    return r === e.target_
                        ? null ===
                          e.defineProperty_(t, { configurable: !st.safeDescriptors || e.isPlainObject_, set: l })
                            ? 0
                            : 2
                        : (u(r, t, { configurable: !0, set: l }), 2);
                }
                if (r !== e.target_ && 'function' == typeof n.value)
                    return w(n.value)
                        ? ((null == (a = this.options_) ? void 0 : a.autoBind) ? $t.bound : $t).make_(e, t, n, r)
                        : ((null == (s = this.options_) ? void 0 : s.autoBind) ? At.bound : At).make_(e, t, n, r);
                var c,
                    d = !1 === (null == (i = this.options_) ? void 0 : i.deep) ? Be.ref : Be;
                return (
                    'function' == typeof n.value &&
                        (null == (o = this.options_) ? void 0 : o.autoBind) &&
                        (n.value = n.value.bind(null != (c = e.proxy_) ? c : e.target_)),
                    d.make_(e, t, n, r)
                );
            }
            function fe(e, t, n, r) {
                var i, o, s;
                return n.get
                    ? je.extend_(e, t, n, r)
                    : n.set
                      ? e.defineProperty_(
                            t,
                            { configurable: !st.safeDescriptors || e.isPlainObject_, set: Re(t.toString(), n.set) },
                            r,
                        )
                      : ('function' == typeof n.value &&
                            (null == (i = this.options_) ? void 0 : i.autoBind) &&
                            (n.value = n.value.bind(null != (s = e.proxy_) ? s : e.target_)),
                        (!1 === (null == (o = this.options_) ? void 0 : o.deep) ? Be.ref : Be).extend_(e, t, n, r));
            }
            var pe = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
            function ve(e) {
                return e || pe;
            }
            Object.freeze(pe);
            var be = ae('observable'),
                ge = ae('observable.ref', { enhancer: H }),
                _e = ae('observable.shallow', {
                    enhancer: function (e, t, n) {
                        return null == e || qn(e) || Bn(e) || xn(e) || Rn(e)
                            ? e
                            : Array.isArray(e)
                              ? Be.array(e, { name: n, deep: !1 })
                              : y(e)
                                ? Be.object(e, void 0, { name: n, deep: !1 })
                                : B(e)
                                  ? Be.map(e, { name: n, deep: !1 })
                                  : S(e)
                                    ? Be.set(e, { name: n, deep: !1 })
                                    : void 0;
                    },
                }),
                me = ae('observable.struct', {
                    enhancer: function (e, t) {
                        return nr(e, t) ? t : e;
                    },
                }),
                ye = D(be);
            function we(e) {
                return !0 === e.deep
                    ? G
                    : !1 === e.deep
                      ? H
                      : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
                        ? n
                        : G;
                var t, n, r;
            }
            function Oe(e, t, n) {
                if (!_(t))
                    return Jt(e)
                        ? e
                        : y(e)
                          ? Be.object(e, t, n)
                          : Array.isArray(e)
                            ? Be.array(e, t)
                            : B(e)
                              ? Be.map(e, t)
                              : S(e)
                                ? Be.set(e, t)
                                : 'object' == typeof e && null !== e
                                  ? e
                                  : Be.box(e, t);
                L(e, t, be);
            }
            Object.assign(Oe, ye);
            var We,
                Ue,
                Be = s(Oe, {
                    box: function (e, t) {
                        var n = ve(t);
                        return new De(e, we(n), n.name, !0, n.equals);
                    },
                    array: function (e, t) {
                        var n = ve(t);
                        return (!1 === st.useProxies || !1 === n.proxy ? Jn : bn)(e, we(n), n.name);
                    },
                    map: function (e, t) {
                        var n = ve(t);
                        return new En(e, we(n), n.name);
                    },
                    set: function (e, t) {
                        var n = ve(t);
                        return new Vn(e, we(n), n.name);
                    },
                    object: function (e, t, n) {
                        return It(
                            !1 === st.useProxies || !1 === (null == n ? void 0 : n.proxy)
                                ? Mn({}, n)
                                : (function (e, t) {
                                      var n, r;
                                      return (
                                          p(),
                                          null != (r = (n = (e = Mn(e, t))[q]).proxy_)
                                              ? r
                                              : (n.proxy_ = new Proxy(e, rn))
                                      );
                                  })({}, n),
                            e,
                            t,
                        );
                    },
                    ref: D(ge),
                    shallow: D(_e),
                    deep: ye,
                    struct: D(me),
                }),
                Se = 'computed',
                Ae = ie(Se),
                Te = ie('computed.struct', { equals: z.structural }),
                je = function (e, t) {
                    if (_(t)) return L(e, t, Ae);
                    if (y(e)) return D(ie(Se, e));
                    var n = y(t) ? t : {};
                    return ((n.get = e), n.name || (n.name = e.name || ''), new Qe(n));
                };
            (Object.assign(je, Ae), (je.struct = D(Te)));
            var Pe,
                Ee = 0,
                xe = 1,
                ke = null != (We = null == (Ue = a(function () {}, 'name')) ? void 0 : Ue.configurable) && We,
                Ve = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
            function Re(e, t, n, r) {
                function i() {
                    return Ce(0, n, t, r || this, arguments);
                }
                return (
                    void 0 === n && (n = !1),
                    (i.isMobxAction = !0),
                    ke && ((Ve.value = e), Object.defineProperty(i, 'name', Ve)),
                    i
                );
            }
            function Ce(e, t, n, i, o) {
                var s = (function (e, t, n, r) {
                    var i = st.trackingDerivation,
                        o = !t || !i;
                    ct();
                    var s = st.allowStateChanges;
                    o && (Ye(), (s = Ne(!0)));
                    var a = {
                        runAsAction_: o,
                        prevDerivation_: i,
                        prevAllowStateChanges_: s,
                        prevAllowStateReads_: et(!0),
                        notifySpy_: !1,
                        startTime_: 0,
                        actionId_: xe++,
                        parentActionId_: Ee,
                    };
                    return ((Ee = a.actionId_), a);
                })(0, t);
                try {
                    return n.apply(i, o);
                } catch (e) {
                    throw ((s.error_ = e), e);
                } finally {
                    !(function (e) {
                        (Ee !== e.actionId_ && r(30),
                            (Ee = e.parentActionId_),
                            void 0 !== e.error_ && (st.suppressReactionErrors = !0),
                            Ie(e.prevAllowStateChanges_),
                            tt(e.prevAllowStateReads_),
                            dt(),
                            e.runAsAction_ && Ze(e.prevDerivation_),
                            (st.suppressReactionErrors = !1));
                    })(s);
                }
            }
            function Ne(e) {
                var t = st.allowStateChanges;
                return ((st.allowStateChanges = e), t);
            }
            function Ie(e) {
                st.allowStateChanges = e;
            }
            Pe = Symbol.toPrimitive;
            var Me,
                De = (function (e) {
                    function t(t, n, r, i, o) {
                        var s;
                        return (
                            void 0 === r && (r = 'ObservableValue'),
                            void 0 === i && (i = !0),
                            void 0 === o && (o = z.default),
                            ((s = e.call(this, r) || this).enhancer = void 0),
                            (s.name_ = void 0),
                            (s.equals = void 0),
                            (s.hasUnreportedChange_ = !1),
                            (s.interceptors_ = void 0),
                            (s.changeListeners_ = void 0),
                            (s.value_ = void 0),
                            (s.dehancer = void 0),
                            (s.enhancer = n),
                            (s.name_ = r),
                            (s.equals = o),
                            (s.value_ = n(t, void 0, r)),
                            s
                        );
                    }
                    R(t, e);
                    var n = t.prototype;
                    return (
                        (n.dehanceValue = function (e) {
                            return void 0 !== this.dehancer ? this.dehancer(e) : e;
                        }),
                        (n.set = function (e) {
                            (this.value_, (e = this.prepareNewValue_(e)) !== st.UNCHANGED && this.setNewValue_(e));
                        }),
                        (n.prepareNewValue_ = function (e) {
                            if (on(this)) {
                                var t = an(this, { object: this, type: fn, newValue: e });
                                if (!t) return st.UNCHANGED;
                                e = t.newValue;
                            }
                            return (
                                (e = this.enhancer(e, this.value_, this.name_)),
                                this.equals(this.value_, e) ? st.UNCHANGED : e
                            );
                        }),
                        (n.setNewValue_ = function (e) {
                            var t = this.value_;
                            ((this.value_ = e),
                                this.reportChanged(),
                                un(this) && cn(this, { type: fn, object: this, newValue: e, oldValue: t }));
                        }),
                        (n.get = function () {
                            return (this.reportObserved(), this.dehanceValue(this.value_));
                        }),
                        (n.intercept_ = function (e) {
                            return sn(this, e);
                        }),
                        (n.observe_ = function (e, t) {
                            return (
                                t &&
                                    e({
                                        observableKind: 'value',
                                        debugObjectName: this.name_,
                                        object: this,
                                        type: fn,
                                        newValue: this.value_,
                                        oldValue: void 0,
                                    }),
                                ln(this, e)
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
                            return j(this.get());
                        }),
                        (n[Pe] = function () {
                            return this.valueOf();
                        }),
                        t
                    );
                })(Q);
            Me = Symbol.toPrimitive;
            var Le,
                qe,
                Qe = (function () {
                    function e(e) {
                        ((this.dependenciesState_ = Le.NOT_TRACKING_),
                            (this.observing_ = []),
                            (this.newObserving_ = null),
                            (this.isBeingObserved_ = !1),
                            (this.isPendingUnobservation_ = !1),
                            (this.observers_ = new Set()),
                            (this.diffValue_ = 0),
                            (this.runId_ = 0),
                            (this.lastAccessedBy_ = 0),
                            (this.lowestObserverState_ = Le.UP_TO_DATE_),
                            (this.unboundDepsCount_ = 0),
                            (this.value_ = new $e(null)),
                            (this.name_ = void 0),
                            (this.triggeredBy_ = void 0),
                            (this.isComputing_ = !1),
                            (this.isRunningSetter_ = !1),
                            (this.derivation = void 0),
                            (this.setter_ = void 0),
                            (this.isTracing_ = qe.NONE),
                            (this.scope_ = void 0),
                            (this.equals_ = void 0),
                            (this.requiresReaction_ = void 0),
                            (this.keepAlive_ = void 0),
                            (this.onBOL = void 0),
                            (this.onBUOL = void 0),
                            e.get || r(31),
                            (this.derivation = e.get),
                            (this.name_ = e.name || 'ComputedValue'),
                            e.set && (this.setter_ = Re('ComputedValue-setter', e.set)),
                            (this.equals_ = e.equals || (e.compareStructural || e.struct ? z.structural : z.default)),
                            (this.scope_ = e.context),
                            (this.requiresReaction_ = !!e.requiresReaction),
                            (this.keepAlive_ = !!e.keepAlive));
                    }
                    var t = e.prototype;
                    return (
                        (t.onBecomeStale_ = function () {
                            !(function (e) {
                                e.lowestObserverState_ === Le.UP_TO_DATE_ &&
                                    ((e.lowestObserverState_ = Le.POSSIBLY_STALE_),
                                    e.observers_.forEach(function (e) {
                                        e.dependenciesState_ === Le.UP_TO_DATE_ &&
                                            ((e.dependenciesState_ = Le.POSSIBLY_STALE_), e.onBecomeStale_());
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
                                (this.isComputing_ && r(32, this.name_, this.derivation),
                                0 !== st.inBatch || 0 !== this.observers_.size || this.keepAlive_)
                            ) {
                                if ((ht(this), Ge(this))) {
                                    var e = st.trackingContext;
                                    (this.keepAlive_ && !e && (st.trackingContext = this),
                                        this.trackAndCompute() &&
                                            (function (e) {
                                                e.lowestObserverState_ !== Le.STALE_ &&
                                                    ((e.lowestObserverState_ = Le.STALE_),
                                                    e.observers_.forEach(function (t) {
                                                        t.dependenciesState_ === Le.POSSIBLY_STALE_
                                                            ? (t.dependenciesState_ = Le.STALE_)
                                                            : t.dependenciesState_ === Le.UP_TO_DATE_ &&
                                                              (e.lowestObserverState_ = Le.UP_TO_DATE_);
                                                    }));
                                            })(this),
                                        (st.trackingContext = e));
                                }
                            } else
                                Ge(this) &&
                                    (this.warnAboutUntrackedRead_(),
                                    ct(),
                                    (this.value_ = this.computeValue_(!1)),
                                    dt());
                            var t = this.value_;
                            if (ze(t)) throw t.cause;
                            return t;
                        }),
                        (t.set = function (e) {
                            if (this.setter_) {
                                (this.isRunningSetter_ && r(33, this.name_), (this.isRunningSetter_ = !0));
                                try {
                                    this.setter_.call(this.scope_, e);
                                } finally {
                                    this.isRunningSetter_ = !1;
                                }
                            } else r(34, this.name_);
                        }),
                        (t.trackAndCompute = function () {
                            var e = this.value_,
                                t = this.dependenciesState_ === Le.NOT_TRACKING_,
                                n = this.computeValue_(!0),
                                r = t || ze(e) || ze(n) || !this.equals_(e, n);
                            return (r && (this.value_ = n), r);
                        }),
                        (t.computeValue_ = function (e) {
                            this.isComputing_ = !0;
                            var t,
                                n = Ne(!1);
                            if (e) t = Ke(this, this.derivation, this.scope_);
                            else if (!0 === st.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                            else
                                try {
                                    t = this.derivation.call(this.scope_);
                                } catch (e) {
                                    t = new $e(e);
                                }
                            return (Ie(n), (this.isComputing_ = !1), t);
                        }),
                        (t.suspend_ = function () {
                            this.keepAlive_ || (Xe(this), (this.value_ = void 0));
                        }),
                        (t.observe_ = function (e, t) {
                            var n = this,
                                r = !0,
                                i = void 0;
                            return (function (e, t) {
                                var n, r;
                                void 0 === t && (t = d);
                                var i,
                                    o = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun';
                                if (t.scheduler || t.delay) {
                                    var s = Et(t),
                                        a = !1;
                                    i = new pt(
                                        o,
                                        function () {
                                            a ||
                                                ((a = !0),
                                                s(function () {
                                                    ((a = !1), i.isDisposed_ || i.track(u));
                                                }));
                                        },
                                        t.onError,
                                        t.requiresObservable,
                                    );
                                } else
                                    i = new pt(
                                        o,
                                        function () {
                                            this.track(u);
                                        },
                                        t.onError,
                                        t.requiresObservable,
                                    );
                                function u() {
                                    e(i);
                                }
                                return (i.schedule_(), i.getDisposer_());
                            })(function () {
                                var o = n.get();
                                if (!r || t) {
                                    var s = Ye();
                                    (e({
                                        observableKind: 'computed',
                                        debugObjectName: n.name_,
                                        type: fn,
                                        object: n,
                                        newValue: o,
                                        oldValue: i,
                                    }),
                                        Ze(s));
                                }
                                ((r = !1), (i = o));
                            });
                        }),
                        (t.warnAboutUntrackedRead_ = function () {}),
                        (t.toString = function () {
                            return this.name_ + '[' + this.derivation.toString() + ']';
                        }),
                        (t.valueOf = function () {
                            return j(this.get());
                        }),
                        (t[Me] = function () {
                            return this.valueOf();
                        }),
                        e
                    );
                })(),
                Fe = U('ComputedValue', Qe);
            (!(function (e) {
                ((e[(e.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
                    (e[(e.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
                    (e[(e.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
                    (e[(e.STALE_ = 2)] = 'STALE_'));
            })(Le || (Le = {})),
                (function (e) {
                    ((e[(e.NONE = 0)] = 'NONE'), (e[(e.LOG = 1)] = 'LOG'), (e[(e.BREAK = 2)] = 'BREAK'));
                })(qe || (qe = {})));
            var $e = function (e) {
                ((this.cause = void 0), (this.cause = e));
            };
            function ze(e) {
                return e instanceof $e;
            }
            function Ge(e) {
                switch (e.dependenciesState_) {
                    case Le.UP_TO_DATE_:
                        return !1;
                    case Le.NOT_TRACKING_:
                    case Le.STALE_:
                        return !0;
                    case Le.POSSIBLY_STALE_:
                        for (var t = et(!0), n = Ye(), r = e.observing_, i = r.length, o = 0; o < i; o++) {
                            var s = r[o];
                            if (Fe(s)) {
                                if (st.disableErrorBoundaries) s.get();
                                else
                                    try {
                                        s.get();
                                    } catch (e) {
                                        return (Ze(n), tt(t), !0);
                                    }
                                if (e.dependenciesState_ === Le.STALE_) return (Ze(n), tt(t), !0);
                            }
                        }
                        return (nt(e), Ze(n), tt(t), !1);
                }
            }
            function He() {
                return null !== st.trackingDerivation;
            }
            function Ke(e, t, n) {
                var r = et(!0);
                (nt(e),
                    (e.newObserving_ = new Array(e.observing_.length + 100)),
                    (e.unboundDepsCount_ = 0),
                    (e.runId_ = ++st.runId));
                var i,
                    o = st.trackingDerivation;
                if (((st.trackingDerivation = e), st.inBatch++, !0 === st.disableErrorBoundaries)) i = t.call(n);
                else
                    try {
                        i = t.call(n);
                    } catch (e) {
                        i = new $e(e);
                    }
                return (
                    st.inBatch--,
                    (st.trackingDerivation = o),
                    (function (e) {
                        for (
                            var t = e.observing_,
                                n = (e.observing_ = e.newObserving_),
                                r = Le.UP_TO_DATE_,
                                i = 0,
                                o = e.unboundDepsCount_,
                                s = 0;
                            s < o;
                            s++
                        ) {
                            var a = n[s];
                            (0 === a.diffValue_ && ((a.diffValue_ = 1), i !== s && (n[i] = a), i++),
                                a.dependenciesState_ > r && (r = a.dependenciesState_));
                        }
                        for (n.length = i, e.newObserving_ = null, o = t.length; o--; ) {
                            var u = t[o];
                            (0 === u.diffValue_ && ut(u, e), (u.diffValue_ = 0));
                        }
                        for (; i--; ) {
                            var l = n[i];
                            1 === l.diffValue_ && ((l.diffValue_ = 0), at(l, e));
                        }
                        r !== Le.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
                    })(e),
                    tt(r),
                    i
                );
            }
            function Xe(e) {
                var t = e.observing_;
                e.observing_ = [];
                for (var n = t.length; n--; ) ut(t[n], e);
                e.dependenciesState_ = Le.NOT_TRACKING_;
            }
            function Je(e) {
                var t = Ye();
                try {
                    return e();
                } finally {
                    Ze(t);
                }
            }
            function Ye() {
                var e = st.trackingDerivation;
                return ((st.trackingDerivation = null), e);
            }
            function Ze(e) {
                st.trackingDerivation = e;
            }
            function et(e) {
                var t = st.allowStateReads;
                return ((st.allowStateReads = e), t);
            }
            function tt(e) {
                st.allowStateReads = e;
            }
            function nt(e) {
                if (e.dependenciesState_ !== Le.UP_TO_DATE_) {
                    e.dependenciesState_ = Le.UP_TO_DATE_;
                    for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = Le.UP_TO_DATE_;
                }
            }
            var rt = function () {
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
                it = !0,
                ot = !1,
                st = (function () {
                    var e = o();
                    return (
                        e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (it = !1),
                        e.__mobxGlobals && e.__mobxGlobals.version !== new rt().version && (it = !1),
                        it
                            ? e.__mobxGlobals
                                ? ((e.__mobxInstanceCount += 1),
                                  e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                                  e.__mobxGlobals)
                                : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new rt()))
                            : (setTimeout(function () {
                                  ot || r(35);
                              }, 1),
                              new rt())
                    );
                })();
            function at(e, t) {
                (e.observers_.add(t),
                    e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_));
            }
            function ut(e, t) {
                (e.observers_.delete(t), 0 === e.observers_.size && lt(e));
            }
            function lt(e) {
                !1 === e.isPendingUnobservation_ &&
                    ((e.isPendingUnobservation_ = !0), st.pendingUnobservations.push(e));
            }
            function ct() {
                st.inBatch++;
            }
            function dt() {
                if (0 == --st.inBatch) {
                    bt();
                    for (var e = st.pendingUnobservations, t = 0; t < e.length; t++) {
                        var n = e[t];
                        ((n.isPendingUnobservation_ = !1),
                            0 === n.observers_.size &&
                                (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()),
                                n instanceof Qe && n.suspend_()));
                    }
                    st.pendingUnobservations = [];
                }
            }
            function ht(e) {
                var t = st.trackingDerivation;
                return null !== t
                    ? (t.runId_ !== e.lastAccessedBy_ &&
                          ((e.lastAccessedBy_ = t.runId_),
                          (t.newObserving_[t.unboundDepsCount_++] = e),
                          !e.isBeingObserved_ && st.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
                      !0)
                    : (0 === e.observers_.size && st.inBatch > 0 && lt(e), !1);
            }
            function ft(e) {
                e.lowestObserverState_ !== Le.STALE_ &&
                    ((e.lowestObserverState_ = Le.STALE_),
                    e.observers_.forEach(function (e) {
                        (e.dependenciesState_ === Le.UP_TO_DATE_ && e.onBecomeStale_(),
                            (e.dependenciesState_ = Le.STALE_));
                    }));
            }
            var pt = (function () {
                    function e(e, t, n, r) {
                        (void 0 === e && (e = 'Reaction'),
                            void 0 === r && (r = !1),
                            (this.name_ = void 0),
                            (this.onInvalidate_ = void 0),
                            (this.errorHandler_ = void 0),
                            (this.requiresObservable_ = void 0),
                            (this.observing_ = []),
                            (this.newObserving_ = []),
                            (this.dependenciesState_ = Le.NOT_TRACKING_),
                            (this.diffValue_ = 0),
                            (this.runId_ = 0),
                            (this.unboundDepsCount_ = 0),
                            (this.isDisposed_ = !1),
                            (this.isScheduled_ = !1),
                            (this.isTrackPending_ = !1),
                            (this.isRunning_ = !1),
                            (this.isTracing_ = qe.NONE),
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
                            this.isScheduled_ || ((this.isScheduled_ = !0), st.pendingReactions.push(this), bt());
                        }),
                        (t.isScheduled = function () {
                            return this.isScheduled_;
                        }),
                        (t.runReaction_ = function () {
                            if (!this.isDisposed_) {
                                (ct(), (this.isScheduled_ = !1));
                                var e = st.trackingContext;
                                if (((st.trackingContext = this), Ge(this))) {
                                    this.isTrackPending_ = !0;
                                    try {
                                        this.onInvalidate_();
                                    } catch (e) {
                                        this.reportExceptionInDerivation_(e);
                                    }
                                }
                                ((st.trackingContext = e), dt());
                            }
                        }),
                        (t.track = function (e) {
                            if (!this.isDisposed_) {
                                (ct(), (this.isRunning_ = !0));
                                var t = st.trackingContext;
                                st.trackingContext = this;
                                var n = Ke(this, e, void 0);
                                ((st.trackingContext = t),
                                    (this.isRunning_ = !1),
                                    (this.isTrackPending_ = !1),
                                    this.isDisposed_ && Xe(this),
                                    ze(n) && this.reportExceptionInDerivation_(n.cause),
                                    dt());
                            }
                        }),
                        (t.reportExceptionInDerivation_ = function (e) {
                            var t = this;
                            if (this.errorHandler_) this.errorHandler_(e, this);
                            else {
                                if (st.disableErrorBoundaries) throw e;
                                var n = "[mobx] uncaught error in '" + this + "'";
                                (st.suppressReactionErrors || console.error(n, e),
                                    st.globalReactionErrorHandlers.forEach(function (n) {
                                        return n(e, t);
                                    }));
                            }
                        }),
                        (t.dispose = function () {
                            this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (ct(), Xe(this), dt()));
                        }),
                        (t.getDisposer_ = function () {
                            var e = this.dispose.bind(this);
                            return ((e[q] = this), e);
                        }),
                        (t.toString = function () {
                            return 'Reaction[' + this.name_ + ']';
                        }),
                        (t.trace = function (e) {
                            (void 0 === e && (e = !1),
                                (function () {
                                    r('trace() is not available in production builds');
                                    for (var e = !1, t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                                        n[i] = arguments[i];
                                    'boolean' == typeof n[n.length - 1] && (e = n.pop());
                                    var o = en(n);
                                    if (!o)
                                        return r(
                                            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly",
                                        );
                                    (o.isTracing_ === qe.NONE &&
                                        console.log("[mobx.trace] '" + o.name_ + "' tracing enabled"),
                                        (o.isTracing_ = e ? qe.BREAK : qe.LOG));
                                })(this, e));
                        }),
                        e
                    );
                })(),
                vt = function (e) {
                    return e();
                };
            function bt() {
                st.inBatch > 0 || st.isRunningReactions || vt(gt);
            }
            function gt() {
                st.isRunningReactions = !0;
                for (var e = st.pendingReactions, t = 0; e.length > 0; ) {
                    100 == ++t && (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
                    for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
                }
                st.isRunningReactions = !1;
            }
            var _t = U('Reaction', pt),
                mt = 'action',
                yt = 'autoAction',
                wt = X(mt),
                Ot = X('action.bound', { bound: !0 }),
                Wt = X(yt, { autoAction: !0 }),
                Ut = X('autoAction.bound', { autoAction: !0, bound: !0 });
            function Bt(e) {
                return function (t, n) {
                    return g(t)
                        ? Re(t.name || '<unnamed action>', t, e)
                        : g(n)
                          ? Re(t, n, e)
                          : _(n)
                            ? L(t, n, e ? Wt : wt)
                            : _(t)
                              ? D(X(e ? yt : mt, { name: t, autoAction: e }))
                              : void 0;
                };
            }
            var St = Bt(!1);
            Object.assign(St, wt);
            var At = Bt(!0);
            function Tt(e) {
                return Ce(e.name, !1, e, this, void 0);
            }
            function jt(e) {
                return g(e) && !0 === e.isMobxAction;
            }
            (Object.assign(At, Wt), (St.bound = D(Ot)), (At.bound = D(Ut)));
            var Pt = function (e) {
                return e();
            };
            function Et(e) {
                return e.scheduler
                    ? e.scheduler
                    : e.delay
                      ? function (t) {
                            return setTimeout(t, e.delay);
                        }
                      : Pt;
            }
            function xt(e, t, n) {
                var r;
                void 0 === n && (n = d);
                var i,
                    o,
                    s,
                    a,
                    u = null != (r = n.name) ? r : 'Reaction',
                    l = St(
                        u,
                        n.onError
                            ? ((i = n.onError),
                              (o = t),
                              function () {
                                  try {
                                      return o.apply(this, arguments);
                                  } catch (e) {
                                      i.call(this, e);
                                  }
                              })
                            : t,
                    ),
                    c = !n.scheduler && !n.delay,
                    h = Et(n),
                    f = !0,
                    p = !1,
                    v = n.compareStructural ? z.structural : n.equals || z.default,
                    b = new pt(
                        u,
                        function () {
                            f || c ? g() : p || ((p = !0), h(g));
                        },
                        n.onError,
                        n.requiresObservable,
                    );
                function g() {
                    if (((p = !1), !b.isDisposed_)) {
                        var t = !1;
                        (b.track(function () {
                            var n = (function (e, t) {
                                var n = Ne(e);
                                try {
                                    return t();
                                } finally {
                                    Ie(n);
                                }
                            })(!1, function () {
                                return e(b);
                            });
                            ((t = f || !v(s, n)), (a = s), (s = n));
                        }),
                            ((f && n.fireImmediately) || (!f && t)) && l(s, a, b),
                            (f = !1));
                    }
                }
                return (b.schedule_(), b.getDisposer_());
            }
            var kt = 'onBO';
            function Vt(e, t, n) {
                return Rt('onBUO', e, t, n);
            }
            function Rt(e, t, n, r) {
                var i = 'function' == typeof r ? Yn(t, n) : Yn(t),
                    o = g(r) ? r : n,
                    s = e + 'L';
                return (
                    i[s] ? i[s].add(o) : (i[s] = new Set([o])),
                    function () {
                        var e = i[s];
                        e && (e.delete(o), 0 === e.size && delete i[s]);
                    }
                );
            }
            var Ct = 'always';
            function Nt(e) {
                !0 === e.isolateGlobalState &&
                    (function () {
                        if (
                            ((st.pendingReactions.length || st.inBatch || st.isRunningReactions) && r(36),
                            (ot = !0),
                            it)
                        ) {
                            var e = o();
                            (0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0), (st = new rt()));
                        }
                    })();
                var t,
                    n,
                    i = e.useProxies,
                    s = e.enforceActions;
                if (
                    (void 0 !== i && (st.useProxies = i === Ct || ('never' !== i && 'undefined' != typeof Proxy)),
                    'ifavailable' === i && (st.verifyProxies = !0),
                    void 0 !== s)
                ) {
                    var a = s === Ct ? Ct : 'observed' === s;
                    ((st.enforceActions = a), (st.allowStateChanges = !0 !== a && a !== Ct));
                }
                ([
                    'computedRequiresReaction',
                    'reactionRequiresObservable',
                    'observableRequiresReaction',
                    'disableErrorBoundaries',
                    'safeDescriptors',
                ].forEach(function (t) {
                    t in e && (st[t] = !!e[t]);
                }),
                    (st.allowStateReads = !st.observableRequiresReaction),
                    e.reactionScheduler &&
                        ((t = e.reactionScheduler),
                        (n = vt),
                        (vt = function (e) {
                            return t(function () {
                                return n(e);
                            });
                        })));
            }
            function It(e, t, n, r) {
                var i = E(t),
                    o = Mn(e, r)[q];
                ct();
                try {
                    T(i).forEach(function (e) {
                        o.extend_(e, i[e], !n || !(e in n) || n[e]);
                    });
                } finally {
                    dt();
                }
                return e;
            }
            function Mt(e, t) {
                return Dt(Yn(e, t));
            }
            function Dt(e) {
                var t,
                    n = { name: e.name_ };
                return (
                    e.observing_ &&
                        e.observing_.length > 0 &&
                        (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(Dt)),
                    n
                );
            }
            var Lt = 0;
            function qt() {
                this.message = 'FLOW_CANCELLED';
            }
            qt.prototype = Object.create(Error.prototype);
            var Qt = ee('flow'),
                Ft = ee('flow.bound', { bound: !0 }),
                $t = Object.assign(function (e, t) {
                    if (_(t)) return L(e, t, Qt);
                    var n = e,
                        r = n.name || '<unnamed flow>',
                        i = function () {
                            var e,
                                t = this,
                                i = arguments,
                                o = ++Lt,
                                s = St(r + ' - runid: ' + o + ' - init', n).apply(t, i),
                                a = void 0,
                                u = new Promise(function (t, n) {
                                    var i = 0;
                                    function u(e) {
                                        var t;
                                        a = void 0;
                                        try {
                                            t = St(r + ' - runid: ' + o + ' - yield ' + i++, s.next).call(s, e);
                                        } catch (e) {
                                            return n(e);
                                        }
                                        c(t);
                                    }
                                    function l(e) {
                                        var t;
                                        a = void 0;
                                        try {
                                            t = St(r + ' - runid: ' + o + ' - yield ' + i++, s.throw).call(s, e);
                                        } catch (e) {
                                            return n(e);
                                        }
                                        c(t);
                                    }
                                    function c(e) {
                                        if (!g(null == e ? void 0 : e.then))
                                            return e.done ? t(e.value) : (a = Promise.resolve(e.value)).then(u, l);
                                        e.then(c, n);
                                    }
                                    ((e = n), u(void 0));
                                });
                            return (
                                (u.cancel = St(r + ' - runid: ' + o + ' - cancel', function () {
                                    try {
                                        a && zt(a);
                                        var t = s.return(void 0),
                                            n = Promise.resolve(t.value);
                                        (n.then(b, b), zt(n), e(new qt()));
                                    } catch (t) {
                                        e(t);
                                    }
                                })),
                                u
                            );
                        };
                    return ((i.isMobXFlow = !0), i);
                }, Qt);
            function zt(e) {
                g(e.cancel) && e.cancel();
            }
            function Gt(e) {
                return !0 === (null == e ? void 0 : e.isMobXFlow);
            }
            function Ht(e, t) {
                if (void 0 === t) return Fe(e);
                if (!1 === qn(e)) return !1;
                if (!e[q].values_.has(t)) return !1;
                var n = Yn(e, t);
                return Fe(n);
            }
            function Kt(e) {
                return Ht(e);
            }
            function Xt(e, t) {
                return Ht(e, t);
            }
            function Jt(e) {
                return (function (e, t) {
                    return (
                        !!e &&
                        (void 0 !== t ? !!qn(e) && e[q].values_.has(t) : qn(e) || !!e[q] || F(e) || _t(e) || Fe(e))
                    );
                })(e);
            }
            function Yt(e) {
                return qn(e)
                    ? e[q].keys_()
                    : xn(e) || Rn(e)
                      ? Array.from(e.keys())
                      : Bn(e)
                        ? e.map(function (e, t) {
                              return t;
                          })
                        : void r(5);
            }
            function Zt(e, t, n, r) {
                return g(n)
                    ? (function (e, t, n, r) {
                          return Zn(e, t).observe_(n, r);
                      })(e, t, n, r)
                    : (function (e, t, n) {
                          return Zn(e).observe_(t, n);
                      })(e, t, n);
            }
            function en(e) {
                switch (e.length) {
                    case 0:
                        return st.trackingDerivation;
                    case 1:
                        return Yn(e[0]);
                    case 2:
                        return Yn(e[0], e[1]);
                }
            }
            function tn(e, t) {
                (void 0 === t && (t = void 0), ct());
                try {
                    return e.apply(t);
                } finally {
                    dt();
                }
            }
            function nn(e) {
                return e[q];
            }
            $t.bound = D(Ft);
            var rn = {
                has: function (e, t) {
                    return nn(e).has_(t);
                },
                get: function (e, t) {
                    return nn(e).get_(t);
                },
                set: function (e, t, n) {
                    var r;
                    return !!_(t) && (null == (r = nn(e).set_(t, n, !0)) || r);
                },
                deleteProperty: function (e, t) {
                    var n;
                    return !!_(t) && (null == (n = nn(e).delete_(t, !0)) || n);
                },
                defineProperty: function (e, t, n) {
                    var r;
                    return null == (r = nn(e).defineProperty_(t, n)) || r;
                },
                ownKeys: function (e) {
                    return nn(e).ownKeys_();
                },
                preventExtensions: function (e) {
                    r(13);
                },
            };
            function on(e) {
                return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
            }
            function sn(e, t) {
                var n = e.interceptors_ || (e.interceptors_ = []);
                return (
                    n.push(t),
                    v(function () {
                        var e = n.indexOf(t);
                        -1 !== e && n.splice(e, 1);
                    })
                );
            }
            function an(e, t) {
                var n = Ye();
                try {
                    for (
                        var i = [].concat(e.interceptors_ || []), o = 0, s = i.length;
                        o < s && ((t = i[o](t)) && !t.type && r(14), t);
                        o++
                    );
                    return t;
                } finally {
                    Ze(n);
                }
            }
            function un(e) {
                return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
            }
            function ln(e, t) {
                var n = e.changeListeners_ || (e.changeListeners_ = []);
                return (
                    n.push(t),
                    v(function () {
                        var e = n.indexOf(t);
                        -1 !== e && n.splice(e, 1);
                    })
                );
            }
            function cn(e, t) {
                var n = Ye(),
                    r = e.changeListeners_;
                if (r) {
                    for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](t);
                    Ze(n);
                }
            }
            function dn(e, t, n) {
                var r = Mn(e, n)[q];
                ct();
                try {
                    (null != t ||
                        (t = (function (e) {
                            return (P(e, M) || O(e, M, V({}, e[M])), e[M]);
                        })(e)),
                        T(t).forEach(function (e) {
                            return r.make_(e, t[e]);
                        }));
                } finally {
                    dt();
                }
                return e;
            }
            var hn = 'splice',
                fn = 'update',
                pn = {
                    get: function (e, t) {
                        var n = e[q];
                        return t === q
                            ? n
                            : 'length' === t
                              ? n.getArrayLength_()
                              : 'string' != typeof t || isNaN(t)
                                ? P(gn, t)
                                    ? gn[t]
                                    : e[t]
                                : n.get_(parseInt(t));
                    },
                    set: function (e, t, n) {
                        var r = e[q];
                        return (
                            'length' === t && r.setArrayLength_(n),
                            'symbol' == typeof t || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n),
                            !0
                        );
                    },
                    preventExtensions: function () {
                        r(15);
                    },
                },
                vn = (function () {
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
                            (this.atom_ = new Q(e)),
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
                            return sn(this, e);
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
                                ln(this, e)
                            );
                        }),
                        (t.getArrayLength_ = function () {
                            return (this.atom_.reportObserved(), this.values_.length);
                        }),
                        (t.setArrayLength_ = function (e) {
                            ('number' != typeof e || isNaN(e) || e < 0) && r('Out of range: ' + e);
                            var t = this.values_.length;
                            if (e !== t)
                                if (e > t) {
                                    for (var n = new Array(e - t), i = 0; i < e - t; i++) n[i] = void 0;
                                    this.spliceWithArray_(t, 0, n);
                                } else this.spliceWithArray_(e, t - e);
                        }),
                        (t.updateArrayLength_ = function (e, t) {
                            (e !== this.lastKnownLength_ && r(16),
                                (this.lastKnownLength_ += t),
                                this.legacyMode_ && t > 0 && Xn(e + t + 1));
                        }),
                        (t.spliceWithArray_ = function (e, t, n) {
                            var r = this;
                            this.atom_;
                            var i = this.values_.length;
                            if (
                                (void 0 === e ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
                                (t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e))),
                                void 0 === n && (n = c),
                                on(this))
                            ) {
                                var o = an(this, {
                                    object: this.proxy_,
                                    type: hn,
                                    index: e,
                                    removedCount: t,
                                    added: n,
                                });
                                if (!o) return c;
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
                                var s = n.length - t;
                                this.updateArrayLength_(i, s);
                            }
                            var a = this.spliceItemsIntoValues_(e, t, n);
                            return (
                                (0 === t && 0 === n.length) || this.notifyArraySplice_(e, n, a),
                                this.dehanceValues_(a)
                            );
                        }),
                        (t.spliceItemsIntoValues_ = function (e, t, n) {
                            var r;
                            if (n.length < 1e4) return (r = this.values_).splice.apply(r, [e, t].concat(n));
                            var i = this.values_.slice(e, e + t),
                                o = this.values_.slice(e + t);
                            this.values_.length += n.length - t;
                            for (var s = 0; s < n.length; s++) this.values_[e + s] = n[s];
                            for (var a = 0; a < o.length; a++) this.values_[e + n.length + a] = o[a];
                            return i;
                        }),
                        (t.notifyArrayChildUpdate_ = function (e, t, n) {
                            var r = !this.owned_ && !1,
                                i = un(this),
                                o =
                                    i || r
                                        ? {
                                              observableKind: 'array',
                                              object: this.proxy_,
                                              type: fn,
                                              debugObjectName: this.atom_.name_,
                                              index: e,
                                              newValue: t,
                                              oldValue: n,
                                          }
                                        : null;
                            (this.atom_.reportChanged(), i && cn(this, o));
                        }),
                        (t.notifyArraySplice_ = function (e, t, n) {
                            var r = !this.owned_ && !1,
                                i = un(this),
                                o =
                                    i || r
                                        ? {
                                              observableKind: 'array',
                                              object: this.proxy_,
                                              debugObjectName: this.atom_.name_,
                                              type: hn,
                                              index: e,
                                              removed: n,
                                              added: t,
                                              removedCount: n.length,
                                              addedCount: t.length,
                                          }
                                        : null;
                            (this.atom_.reportChanged(), i && cn(this, o));
                        }),
                        (t.get_ = function (e) {
                            if (e < this.values_.length)
                                return (this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]));
                            console.warn(
                                '[mobx.array] Attempt to read an array index (' +
                                    e +
                                    ') that is out of bounds (' +
                                    this.values_.length +
                                    '). Please check length first. Out of bound indices will not be tracked by MobX',
                            );
                        }),
                        (t.set_ = function (e, t) {
                            var n = this.values_;
                            if (e < n.length) {
                                this.atom_;
                                var i = n[e];
                                if (on(this)) {
                                    var o = an(this, { type: fn, object: this.proxy_, index: e, newValue: t });
                                    if (!o) return;
                                    t = o.newValue;
                                }
                                (t = this.enhancer_(t, i)) !== i && ((n[e] = t), this.notifyArrayChildUpdate_(e, t, i));
                            } else e === n.length ? this.spliceWithArray_(e, 0, [t]) : r(17, e, n.length);
                        }),
                        e
                    );
                })();
            function bn(e, t, n, r) {
                (void 0 === n && (n = 'ObservableArray'), void 0 === r && (r = !1), p());
                var i = new vn(n, t, r, !1);
                W(i.values_, q, i);
                var o = new Proxy(i.values_, pn);
                if (((i.proxy_ = o), e && e.length)) {
                    var s = Ne(!0);
                    (i.spliceWithArray_(0, 0, e), Ie(s));
                }
                return o;
            }
            var gn = {
                clear: function () {
                    return this.splice(0);
                },
                replace: function (e) {
                    var t = this[q];
                    return t.spliceWithArray_(0, t.values_.length, e);
                },
                toJSON: function () {
                    return this.slice();
                },
                splice: function (e, t) {
                    for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
                        r[i - 2] = arguments[i];
                    var o = this[q];
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
                    return this[q].spliceWithArray_(e, t, n);
                },
                push: function () {
                    for (var e = this[q], t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    return (e.spliceWithArray_(e.values_.length, 0, n), e.values_.length);
                },
                pop: function () {
                    return this.splice(Math.max(this[q].values_.length - 1, 0), 1)[0];
                },
                shift: function () {
                    return this.splice(0, 1)[0];
                },
                unshift: function () {
                    for (var e = this[q], t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    return (e.spliceWithArray_(0, 0, n), e.values_.length);
                },
                reverse: function () {
                    return (st.trackingDerivation && r(37, 'reverse'), this.replace(this.slice().reverse()), this);
                },
                sort: function () {
                    st.trackingDerivation && r(37, 'sort');
                    var e = this.slice();
                    return (e.sort.apply(e, arguments), this.replace(e), this);
                },
                remove: function (e) {
                    var t = this[q],
                        n = t.dehanceValues_(t.values_).indexOf(e);
                    return n > -1 && (this.splice(n, 1), !0);
                },
            };
            function _n(e, t) {
                'function' == typeof Array.prototype[e] && (gn[e] = t(e));
            }
            function mn(e) {
                return function () {
                    var t = this[q];
                    t.atom_.reportObserved();
                    var n = t.dehanceValues_(t.values_);
                    return n[e].apply(n, arguments);
                };
            }
            function yn(e) {
                return function (t, n) {
                    var r = this,
                        i = this[q];
                    return (
                        i.atom_.reportObserved(),
                        i.dehanceValues_(i.values_)[e](function (e, i) {
                            return t.call(n, e, i, r);
                        })
                    );
                };
            }
            function wn(e) {
                return function () {
                    var t = this,
                        n = this[q];
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
            (_n('concat', mn),
                _n('flat', mn),
                _n('includes', mn),
                _n('indexOf', mn),
                _n('join', mn),
                _n('lastIndexOf', mn),
                _n('slice', mn),
                _n('toString', mn),
                _n('toLocaleString', mn),
                _n('every', yn),
                _n('filter', yn),
                _n('find', yn),
                _n('findIndex', yn),
                _n('flatMap', yn),
                _n('forEach', yn),
                _n('map', yn),
                _n('some', yn),
                _n('reduce', wn),
                _n('reduceRight', wn));
            var On,
                Wn,
                Un = U('ObservableArrayAdministration', vn);
            function Bn(e) {
                return m(e) && Un(e[q]);
            }
            var Sn = {},
                An = 'add',
                Tn = 'delete';
            ((On = Symbol.iterator), (Wn = Symbol.toStringTag));
            var jn,
                Pn,
                En = (function () {
                    function e(e, t, n) {
                        (void 0 === t && (t = G),
                            void 0 === n && (n = 'ObservableMap'),
                            (this.enhancer_ = void 0),
                            (this.name_ = void 0),
                            (this[q] = Sn),
                            (this.data_ = void 0),
                            (this.hasMap_ = void 0),
                            (this.keysAtom_ = void 0),
                            (this.interceptors_ = void 0),
                            (this.changeListeners_ = void 0),
                            (this.dehancer = void 0),
                            (this.enhancer_ = t),
                            (this.name_ = n),
                            g(Map) || r(18),
                            (this.keysAtom_ = $('ObservableMap.keys()')),
                            (this.data_ = new Map()),
                            (this.hasMap_ = new Map()),
                            this.merge(e));
                    }
                    var t = e.prototype;
                    return (
                        (t.has_ = function (e) {
                            return this.data_.has(e);
                        }),
                        (t.has = function (e) {
                            var t = this;
                            if (!st.trackingDerivation) return this.has_(e);
                            var n = this.hasMap_.get(e);
                            if (!n) {
                                var r = (n = new De(this.has_(e), H, 'ObservableMap.key?', !1));
                                (this.hasMap_.set(e, r),
                                    Vt(r, function () {
                                        return t.hasMap_.delete(e);
                                    }));
                            }
                            return n.get();
                        }),
                        (t.set = function (e, t) {
                            var n = this.has_(e);
                            if (on(this)) {
                                var r = an(this, { type: n ? fn : An, object: this, newValue: t, name: e });
                                if (!r) return this;
                                t = r.newValue;
                            }
                            return (n ? this.updateValue_(e, t) : this.addValue_(e, t), this);
                        }),
                        (t.delete = function (e) {
                            var t = this;
                            if ((this.keysAtom_, on(this) && !an(this, { type: Tn, object: this, name: e }))) return !1;
                            if (this.has_(e)) {
                                var n = un(this),
                                    r = n
                                        ? {
                                              observableKind: 'map',
                                              debugObjectName: this.name_,
                                              type: Tn,
                                              object: this,
                                              oldValue: this.data_.get(e).value_,
                                              name: e,
                                          }
                                        : null;
                                return (
                                    tn(function () {
                                        var n;
                                        (t.keysAtom_.reportChanged(),
                                            null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                                            t.data_.get(e).setNewValue_(void 0),
                                            t.data_.delete(e));
                                    }),
                                    n && cn(this, r),
                                    !0
                                );
                            }
                            return !1;
                        }),
                        (t.updateValue_ = function (e, t) {
                            var n = this.data_.get(e);
                            if ((t = n.prepareNewValue_(t)) !== st.UNCHANGED) {
                                var r = un(this),
                                    i = r
                                        ? {
                                              observableKind: 'map',
                                              debugObjectName: this.name_,
                                              type: fn,
                                              object: this,
                                              oldValue: n.value_,
                                              name: e,
                                              newValue: t,
                                          }
                                        : null;
                                (n.setNewValue_(t), r && cn(this, i));
                            }
                        }),
                        (t.addValue_ = function (e, t) {
                            var n = this;
                            (this.keysAtom_,
                                tn(function () {
                                    var r,
                                        i = new De(t, n.enhancer_, 'ObservableMap.key', !1);
                                    (n.data_.set(e, i),
                                        (t = i.value_),
                                        null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                                        n.keysAtom_.reportChanged());
                                }));
                            var r = un(this),
                                i = r
                                    ? {
                                          observableKind: 'map',
                                          debugObjectName: this.name_,
                                          type: An,
                                          object: this,
                                          name: e,
                                          newValue: t,
                                      }
                                    : null;
                            r && cn(this, i);
                        }),
                        (t.get = function (e) {
                            return this.has(e)
                                ? this.dehanceValue_(this.data_.get(e).get())
                                : this.dehanceValue_(void 0);
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
                            return or({
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
                            return or({
                                next: function () {
                                    var n = t.next(),
                                        r = n.done,
                                        i = n.value;
                                    return { done: r, value: r ? void 0 : [i, e.get(i)] };
                                },
                            });
                        }),
                        (t[On] = function () {
                            return this.entries();
                        }),
                        (t.forEach = function (e, t) {
                            for (var n, r = I(this); !(n = r()).done; ) {
                                var i = n.value,
                                    o = i[0],
                                    s = i[1];
                                e.call(t, s, o, this);
                            }
                        }),
                        (t.merge = function (e) {
                            var t = this;
                            return (
                                xn(e) && (e = new Map(e)),
                                tn(function () {
                                    y(e)
                                        ? (function (e) {
                                              var t = Object.keys(e);
                                              if (!A) return t;
                                              var n = Object.getOwnPropertySymbols(e);
                                              return n.length
                                                  ? [].concat(
                                                        t,
                                                        n.filter(function (t) {
                                                            return l.propertyIsEnumerable.call(e, t);
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
                                          : B(e)
                                            ? (e.constructor !== Map && r(19, e),
                                              e.forEach(function (e, n) {
                                                  return t.set(n, e);
                                              }))
                                            : null != e && r(20, e);
                                }),
                                this
                            );
                        }),
                        (t.clear = function () {
                            var e = this;
                            tn(function () {
                                Je(function () {
                                    for (var t, n = I(e.keys()); !(t = n()).done; ) {
                                        var r = t.value;
                                        e.delete(r);
                                    }
                                });
                            });
                        }),
                        (t.replace = function (e) {
                            var t = this;
                            return (
                                tn(function () {
                                    for (
                                        var n,
                                            i = (function (e) {
                                                if (B(e) || xn(e)) return e;
                                                if (Array.isArray(e)) return new Map(e);
                                                if (y(e)) {
                                                    var t = new Map();
                                                    for (var n in e) t.set(n, e[n]);
                                                    return t;
                                                }
                                                return r(21, e);
                                            })(e),
                                            o = new Map(),
                                            s = !1,
                                            a = I(t.data_.keys());
                                        !(n = a()).done;
                                    ) {
                                        var u = n.value;
                                        if (!i.has(u))
                                            if (t.delete(u)) s = !0;
                                            else {
                                                var l = t.data_.get(u);
                                                o.set(u, l);
                                            }
                                    }
                                    for (var c, d = I(i.entries()); !(c = d()).done; ) {
                                        var h = c.value,
                                            f = h[0],
                                            p = h[1],
                                            v = t.data_.has(f);
                                        if ((t.set(f, p), t.data_.has(f))) {
                                            var b = t.data_.get(f);
                                            (o.set(f, b), v || (s = !0));
                                        }
                                    }
                                    if (!s)
                                        if (t.data_.size !== o.size) t.keysAtom_.reportChanged();
                                        else
                                            for (
                                                var g = t.data_.keys(), _ = o.keys(), m = g.next(), w = _.next();
                                                !m.done;
                                            ) {
                                                if (m.value !== w.value) {
                                                    t.keysAtom_.reportChanged();
                                                    break;
                                                }
                                                ((m = g.next()), (w = _.next()));
                                            }
                                    t.data_ = o;
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
                            return ln(this, e);
                        }),
                        (t.intercept_ = function (e) {
                            return sn(this, e);
                        }),
                        k(e, [
                            {
                                key: 'size',
                                get: function () {
                                    return (this.keysAtom_.reportObserved(), this.data_.size);
                                },
                            },
                            {
                                key: Wn,
                                get: function () {
                                    return 'Map';
                                },
                            },
                        ]),
                        e
                    );
                })(),
                xn = U('ObservableMap', En),
                kn = {};
            ((jn = Symbol.iterator), (Pn = Symbol.toStringTag));
            var Vn = (function () {
                    function e(e, t, n) {
                        (void 0 === t && (t = G),
                            void 0 === n && (n = 'ObservableSet'),
                            (this.name_ = void 0),
                            (this[q] = kn),
                            (this.data_ = new Set()),
                            (this.atom_ = void 0),
                            (this.changeListeners_ = void 0),
                            (this.interceptors_ = void 0),
                            (this.dehancer = void 0),
                            (this.enhancer_ = void 0),
                            (this.name_ = n),
                            g(Set) || r(22),
                            (this.atom_ = $(this.name_)),
                            (this.enhancer_ = function (e, r) {
                                return t(e, r, n);
                            }),
                            e && this.replace(e));
                    }
                    var t = e.prototype;
                    return (
                        (t.dehanceValue_ = function (e) {
                            return void 0 !== this.dehancer ? this.dehancer(e) : e;
                        }),
                        (t.clear = function () {
                            var e = this;
                            tn(function () {
                                Je(function () {
                                    for (var t, n = I(e.data_.values()); !(t = n()).done; ) {
                                        var r = t.value;
                                        e.delete(r);
                                    }
                                });
                            });
                        }),
                        (t.forEach = function (e, t) {
                            for (var n, r = I(this); !(n = r()).done; ) {
                                var i = n.value;
                                e.call(t, i, i, this);
                            }
                        }),
                        (t.add = function (e) {
                            var t = this;
                            if ((this.atom_, on(this) && !an(this, { type: An, object: this, newValue: e })))
                                return this;
                            if (!this.has(e)) {
                                tn(function () {
                                    (t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged());
                                });
                                var n = un(this),
                                    r = n
                                        ? {
                                              observableKind: 'set',
                                              debugObjectName: this.name_,
                                              type: An,
                                              object: this,
                                              newValue: e,
                                          }
                                        : null;
                                n && cn(this, r);
                            }
                            return this;
                        }),
                        (t.delete = function (e) {
                            var t = this;
                            if (on(this) && !an(this, { type: Tn, object: this, oldValue: e })) return !1;
                            if (this.has(e)) {
                                var n = un(this),
                                    r = n
                                        ? {
                                              observableKind: 'set',
                                              debugObjectName: this.name_,
                                              type: Tn,
                                              object: this,
                                              oldValue: e,
                                          }
                                        : null;
                                return (
                                    tn(function () {
                                        (t.atom_.reportChanged(), t.data_.delete(e));
                                    }),
                                    n && cn(this, r),
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
                            return or({
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
                            return or({
                                next: function () {
                                    return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
                                },
                            });
                        }),
                        (t.replace = function (e) {
                            var t = this;
                            return (
                                Rn(e) && (e = new Set(e)),
                                tn(function () {
                                    Array.isArray(e) || S(e)
                                        ? (t.clear(),
                                          e.forEach(function (e) {
                                              return t.add(e);
                                          }))
                                        : null != e && r('Cannot initialize set from ' + e);
                                }),
                                this
                            );
                        }),
                        (t.observe_ = function (e, t) {
                            return ln(this, e);
                        }),
                        (t.intercept_ = function (e) {
                            return sn(this, e);
                        }),
                        (t.toJSON = function () {
                            return Array.from(this);
                        }),
                        (t.toString = function () {
                            return '[object ObservableSet]';
                        }),
                        (t[jn] = function () {
                            return this.values();
                        }),
                        k(e, [
                            {
                                key: 'size',
                                get: function () {
                                    return (this.atom_.reportObserved(), this.data_.size);
                                },
                            },
                            {
                                key: Pn,
                                get: function () {
                                    return 'Set';
                                },
                            },
                        ]),
                        e
                    );
                })(),
                Rn = U('ObservableSet', Vn),
                Cn = Object.create(null),
                Nn = 'remove',
                In = (function () {
                    function e(e, t, n, r) {
                        (void 0 === t && (t = new Map()),
                            void 0 === r && (r = ce),
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
                            (this.keysAtom_ = new Q('ObservableObject.keys')),
                            (this.isPlainObject_ = y(this.target_)));
                    }
                    var t = e.prototype;
                    return (
                        (t.getObservablePropValue_ = function (e) {
                            return this.values_.get(e).get();
                        }),
                        (t.setObservablePropValue_ = function (e, t) {
                            var n = this.values_.get(e);
                            if (n instanceof Qe) return (n.set(t), !0);
                            if (on(this)) {
                                var r = an(this, {
                                    type: fn,
                                    object: this.proxy_ || this.target_,
                                    name: e,
                                    newValue: t,
                                });
                                if (!r) return null;
                                t = r.newValue;
                            }
                            if ((t = n.prepareNewValue_(t)) !== st.UNCHANGED) {
                                var i = un(this),
                                    o = i
                                        ? {
                                              type: fn,
                                              observableKind: 'object',
                                              debugObjectName: this.name_,
                                              object: this.proxy_ || this.target_,
                                              oldValue: n.value_,
                                              name: e,
                                              newValue: t,
                                          }
                                        : null;
                                (n.setNewValue_(t), i && cn(this, o));
                            }
                            return !0;
                        }),
                        (t.get_ = function (e) {
                            return (st.trackingDerivation && !P(this.target_, e) && this.has_(e), this.target_[e]);
                        }),
                        (t.set_ = function (e, t, n) {
                            return (
                                void 0 === n && (n = !1),
                                P(this.target_, e)
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
                            if (!st.trackingDerivation) return e in this.target_;
                            this.pendingKeys_ || (this.pendingKeys_ = new Map());
                            var t = this.pendingKeys_.get(e);
                            return (
                                t ||
                                    ((t = new De(e in this.target_, H, 'ObservableObject.key?', !1)),
                                    this.pendingKeys_.set(e, t)),
                                t.get()
                            );
                        }),
                        (t.make_ = function (e, t) {
                            if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                                if (!(e in this.target_)) {
                                    var n;
                                    if (null == (n = this.target_[M]) ? void 0 : n[e]) return;
                                    r(1, t.annotationType_, this.name_ + '.' + e.toString());
                                }
                                for (var i = this.target_; i && i !== l; ) {
                                    var o = a(i, e);
                                    if (o) {
                                        var s = t.make_(this, e, o, i);
                                        if (0 === s) return;
                                        if (1 === s) break;
                                    }
                                    i = Object.getPrototypeOf(i);
                                }
                                Qn(this, 0, e);
                            }
                        }),
                        (t.extend_ = function (e, t, n, r) {
                            if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n))
                                return this.defineProperty_(e, t, r);
                            var i = n.extend_(this, e, t, r);
                            return (i && Qn(this, 0, e), i);
                        }),
                        (t.defineProperty_ = function (e, t, n) {
                            void 0 === n && (n = !1);
                            try {
                                ct();
                                var r = this.delete_(e);
                                if (!r) return r;
                                if (on(this)) {
                                    var i = an(this, {
                                        object: this.proxy_ || this.target_,
                                        name: e,
                                        type: An,
                                        newValue: t.value,
                                    });
                                    if (!i) return null;
                                    var o = i.newValue;
                                    t.value !== o && (t = V({}, t, { value: o }));
                                }
                                if (n) {
                                    if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                                } else u(this.target_, e, t);
                                this.notifyPropertyAddition_(e, t.value);
                            } finally {
                                dt();
                            }
                            return !0;
                        }),
                        (t.defineObservableProperty_ = function (e, t, n, r) {
                            void 0 === r && (r = !1);
                            try {
                                ct();
                                var i = this.delete_(e);
                                if (!i) return i;
                                if (on(this)) {
                                    var o = an(this, {
                                        object: this.proxy_ || this.target_,
                                        name: e,
                                        type: An,
                                        newValue: t,
                                    });
                                    if (!o) return null;
                                    t = o.newValue;
                                }
                                var s = Ln(e),
                                    a = {
                                        configurable: !st.safeDescriptors || this.isPlainObject_,
                                        enumerable: !0,
                                        get: s.get,
                                        set: s.set,
                                    };
                                if (r) {
                                    if (!Reflect.defineProperty(this.target_, e, a)) return !1;
                                } else u(this.target_, e, a);
                                var l = new De(t, n, 'ObservableObject.key', !1);
                                (this.values_.set(e, l), this.notifyPropertyAddition_(e, l.value_));
                            } finally {
                                dt();
                            }
                            return !0;
                        }),
                        (t.defineComputedProperty_ = function (e, t, n) {
                            void 0 === n && (n = !1);
                            try {
                                ct();
                                var r = this.delete_(e);
                                if (!r) return r;
                                if (
                                    on(this) &&
                                    !an(this, {
                                        object: this.proxy_ || this.target_,
                                        name: e,
                                        type: An,
                                        newValue: void 0,
                                    })
                                )
                                    return null;
                                (t.name || (t.name = 'ObservableObject.key'),
                                    (t.context = this.proxy_ || this.target_));
                                var i = Ln(e),
                                    o = {
                                        configurable: !st.safeDescriptors || this.isPlainObject_,
                                        enumerable: !1,
                                        get: i.get,
                                        set: i.set,
                                    };
                                if (n) {
                                    if (!Reflect.defineProperty(this.target_, e, o)) return !1;
                                } else u(this.target_, e, o);
                                (this.values_.set(e, new Qe(t)), this.notifyPropertyAddition_(e, void 0));
                            } finally {
                                dt();
                            }
                            return !0;
                        }),
                        (t.delete_ = function (e, t) {
                            if ((void 0 === t && (t = !1), !P(this.target_, e))) return !0;
                            if (on(this) && !an(this, { object: this.proxy_ || this.target_, name: e, type: Nn }))
                                return null;
                            try {
                                var n, r;
                                ct();
                                var i,
                                    o = un(this),
                                    s = this.values_.get(e),
                                    u = void 0;
                                if ((!s && o && (u = null == (i = a(this.target_, e)) ? void 0 : i.value), t)) {
                                    if (!Reflect.deleteProperty(this.target_, e)) return !1;
                                } else delete this.target_[e];
                                if (
                                    (s && (this.values_.delete(e), s instanceof De && (u = s.value_), ft(s)),
                                    this.keysAtom_.reportChanged(),
                                    null == (n = this.pendingKeys_) ||
                                        null == (r = n.get(e)) ||
                                        r.set(e in this.target_),
                                    o)
                                ) {
                                    var l = {
                                        type: Nn,
                                        observableKind: 'object',
                                        object: this.proxy_ || this.target_,
                                        debugObjectName: this.name_,
                                        oldValue: u,
                                        name: e,
                                    };
                                    o && cn(this, l);
                                }
                            } finally {
                                dt();
                            }
                            return !0;
                        }),
                        (t.observe_ = function (e, t) {
                            return ln(this, e);
                        }),
                        (t.intercept_ = function (e) {
                            return sn(this, e);
                        }),
                        (t.notifyPropertyAddition_ = function (e, t) {
                            var n,
                                r,
                                i = un(this);
                            if (i) {
                                var o = i
                                    ? {
                                          type: An,
                                          observableKind: 'object',
                                          debugObjectName: this.name_,
                                          object: this.proxy_ || this.target_,
                                          name: e,
                                          newValue: t,
                                      }
                                    : null;
                                i && cn(this, o);
                            }
                            (null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(!0),
                                this.keysAtom_.reportChanged());
                        }),
                        (t.ownKeys_ = function () {
                            return (this.keysAtom_.reportObserved(), T(this.target_));
                        }),
                        (t.keys_ = function () {
                            return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
                        }),
                        e
                    );
                })();
            function Mn(e, t) {
                var n;
                if (P(e, q)) return e;
                var r = null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
                    i = new In(
                        e,
                        new Map(),
                        String(r),
                        (function (e) {
                            var t;
                            return e ? (null != (t = e.defaultDecorator) ? t : de(e)) : void 0;
                        })(t),
                    );
                return (O(e, q, i), e);
            }
            var Dn = U('ObservableObjectAdministration', In);
            function Ln(e) {
                return (
                    Cn[e] ||
                    (Cn[e] = {
                        get: function () {
                            return this[q].getObservablePropValue_(e);
                        },
                        set: function (t) {
                            return this[q].setObservablePropValue_(e, t);
                        },
                    })
                );
            }
            function qn(e) {
                return !!m(e) && Dn(e[q]);
            }
            function Qn(e, t, n) {
                var r;
                null == (r = e.target_[M]) || delete r[n];
            }
            var Fn,
                $n,
                zn = 0,
                Gn = function () {};
            ((Fn = Gn),
                ($n = Array.prototype),
                Object.setPrototypeOf
                    ? Object.setPrototypeOf(Fn.prototype, $n)
                    : void 0 !== Fn.prototype.__proto__
                      ? (Fn.prototype.__proto__ = $n)
                      : (Fn.prototype = $n));
            var Hn = (function (e) {
                function t(t, n, r, i) {
                    var o;
                    (void 0 === r && (r = 'ObservableArray'), void 0 === i && (i = !1), (o = e.call(this) || this));
                    var s = new vn(r, n, i, !0);
                    if (((s.proxy_ = C(o)), W(C(o), q, s), t && t.length)) {
                        var a = Ne(!0);
                        (o.spliceWithArray(0, 0, t), Ie(a));
                    }
                    return o;
                }
                R(t, e);
                var n = t.prototype;
                return (
                    (n.concat = function () {
                        this[q].atom_.reportObserved();
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return Array.prototype.concat.apply(
                            this.slice(),
                            t.map(function (e) {
                                return Bn(e) ? e.slice() : e;
                            }),
                        );
                    }),
                    (n[Symbol.iterator] = function () {
                        var e = this,
                            t = 0;
                        return or({
                            next: function () {
                                return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
                            },
                        });
                    }),
                    k(t, [
                        {
                            key: 'length',
                            get: function () {
                                return this[q].getArrayLength_();
                            },
                            set: function (e) {
                                this[q].setArrayLength_(e);
                            },
                        },
                        {
                            key: Symbol.toStringTag,
                            get: function () {
                                return 'Array';
                            },
                        },
                    ]),
                    t
                );
            })(Gn);
            function Kn(e) {
                u(
                    Hn.prototype,
                    '' + e,
                    (function (e) {
                        return {
                            enumerable: !1,
                            configurable: !0,
                            get: function () {
                                return this[q].get_(e);
                            },
                            set: function (t) {
                                this[q].set_(e, t);
                            },
                        };
                    })(e),
                );
            }
            function Xn(e) {
                if (e > zn) {
                    for (var t = zn; t < e + 100; t++) Kn(t);
                    zn = e;
                }
            }
            function Jn(e, t, n) {
                return new Hn(e, t, n);
            }
            function Yn(e, t) {
                if ('object' == typeof e && null !== e) {
                    if (Bn(e)) return (void 0 !== t && r(23), e[q].atom_);
                    if (Rn(e)) return e[q];
                    if (xn(e)) {
                        if (void 0 === t) return e.keysAtom_;
                        var n = e.data_.get(t) || e.hasMap_.get(t);
                        return (n || r(25, t, er(e)), n);
                    }
                    if (qn(e)) {
                        if (!t) return r(26);
                        var i = e[q].values_.get(t);
                        return (i || r(27, t, er(e)), i);
                    }
                    if (F(e) || Fe(e) || _t(e)) return e;
                } else if (g(e) && _t(e[q])) return e[q];
                r(28);
            }
            function Zn(e, t) {
                return (
                    e || r(29),
                    void 0 !== t
                        ? Zn(Yn(e, t))
                        : F(e) || Fe(e) || _t(e) || xn(e) || Rn(e)
                          ? e
                          : e[q]
                            ? e[q]
                            : void r(24, e)
                );
            }
            function er(e, t) {
                var n;
                if (void 0 !== t) n = Yn(e, t);
                else {
                    if (jt(e)) return e.name;
                    n = qn(e) || xn(e) || Rn(e) ? Zn(e) : Yn(e);
                }
                return n.name_;
            }
            (Object.entries(gn).forEach(function (e) {
                var t = e[0],
                    n = e[1];
                'concat' !== t && O(Hn.prototype, t, n);
            }),
                Xn(1e3));
            var tr = l.toString;
            function nr(e, t, n) {
                return (void 0 === n && (n = -1), rr(e, t, n));
            }
            function rr(e, t, n, r, i) {
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                if (null == e || null == t) return !1;
                if (e != e) return t != t;
                var o = typeof e;
                if (!g(o) && 'object' !== o && 'object' != typeof t) return !1;
                var s = tr.call(e);
                if (s !== tr.call(t)) return !1;
                switch (s) {
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
                ((e = ir(e)), (t = ir(t)));
                var a = '[object Array]' === s;
                if (!a) {
                    if ('object' != typeof e || 'object' != typeof t) return !1;
                    var u = e.constructor,
                        l = t.constructor;
                    if (
                        u !== l &&
                        !(g(u) && u instanceof u && g(l) && l instanceof l) &&
                        'constructor' in e &&
                        'constructor' in t
                    )
                        return !1;
                }
                if (0 === n) return !1;
                (n < 0 && (n = -1), (i = i || []));
                for (var c = (r = r || []).length; c--; ) if (r[c] === e) return i[c] === t;
                if ((r.push(e), i.push(t), a)) {
                    if ((c = e.length) !== t.length) return !1;
                    for (; c--; ) if (!rr(e[c], t[c], n - 1, r, i)) return !1;
                } else {
                    var d,
                        h = Object.keys(e);
                    if (((c = h.length), Object.keys(t).length !== c)) return !1;
                    for (; c--; ) if (!P(t, (d = h[c])) || !rr(e[d], t[d], n - 1, r, i)) return !1;
                }
                return (r.pop(), i.pop(), !0);
            }
            function ir(e) {
                return Bn(e) ? e.slice() : B(e) || xn(e) || S(e) || Rn(e) ? Array.from(e.entries()) : e;
            }
            function or(e) {
                return ((e[Symbol.iterator] = sr), e);
            }
            function sr() {
                return this;
            }
            (['Symbol', 'Map', 'Set'].forEach(function (e) {
                void 0 === o()[e] && r("MobX requires global '" + e + "' to be available or polyfilled");
            }),
                'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
                    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
                        spy: function (e) {
                            return (console.warn('[mobx.spy] Is a no-op in production builds'), function () {});
                        },
                        extras: { getDebugName: er },
                        $mobx: q,
                    }));
        },
        7030: (e, t, n) => {
            'use strict';
            n.d(t, { animated: () => r.animated });
            var r = n(7006);
            (n.o(r, 'useSpring') &&
                n.d(t, {
                    useSpring: function () {
                        return r.useSpring;
                    },
                }),
                n.o(r, 'useSpringRef') &&
                    n.d(t, {
                        useSpringRef: function () {
                            return r.useSpringRef;
                        },
                    }),
                n.o(r, 'useTransition') &&
                    n.d(t, {
                        useTransition: function () {
                            return r.useTransition;
                        },
                    }));
        },
    },
]);
