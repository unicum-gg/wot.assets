(() => {
    'use strict';
    var e,
        n = {
            8274: (e, n, t) => {
                var r = {};
                (t.r(r),
                    t.d(r, { mouse: () => b, off: () => h, on: () => w, onResize: () => p, onScaleUpdated: () => g }));
                var i = {};
                (t.r(i),
                    t.d(i, {
                        events: () => r,
                        getMouseGlobalPosition: () => x,
                        getSize: () => P,
                        graphicsQuality: () => T,
                        playSound: () => y,
                        setRTPC: () => _,
                    }));
                var o = {};
                (t.r(o), t.d(o, { getBgUrl: () => j, getTextureUrl: () => A }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => I,
                        addPreloadTexture: () => D,
                        children: () => o,
                        displayStatus: () => N,
                        displayStatusIs: () => re,
                        events: () => C,
                        extraSize: () => ie,
                        forceTriggerMouseMove: () => ee,
                        freezeTextureBeforeResize: () => q,
                        getBrowserTexturePath: () => H,
                        getDisplayStatus: () => ne,
                        getFontNames: () => te,
                        getScale: () => Q,
                        getSize: () => B,
                        getViewGlobalPosition: () => U,
                        isEventHandled: () => Z,
                        isFocused: () => X,
                        pxToRem: () => W,
                        remToPx: () => J,
                        resize: () => $,
                        sendEvent: () => k,
                        setAnimateWindow: () => K,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => G,
                        setSidePaddingsRem: () => L,
                        whenTutorialReady: () => oe,
                    }));
                var s = t(7363),
                    l = t.n(s),
                    d = t(1533),
                    c = t.n(d),
                    u = t(6483),
                    v = t.n(u);
                function m(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function f(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const p = m('clientResized'),
                    g = m('self.onScaleUpdated'),
                    w = (e, n) => engine.on(e, n),
                    h = (e, n) => engine.off(e, n),
                    E = { down: m('mousedown'), up: m('mouseup'), move: m('mousemove') },
                    b = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function n() {
                            e.enabled && f(!1);
                        }
                        function t() {
                            e.enabled && f(!0);
                        }
                        function r() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', n),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', n),
                                      document.body.addEventListener('mouseleave', t))
                                : f(!1);
                        }
                        const i = ['down', 'up', 'move'].reduce(
                            (n, t) => (
                                (n[t] = (function (n) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let i = !0;
                                        const o = `mouse${n}`,
                                            a = E[n]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(o, s),
                                            r(),
                                            () => {
                                                i &&
                                                    (a(),
                                                    window.removeEventListener(o, s),
                                                    (e.listeners -= 1),
                                                    r(),
                                                    (i = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                n
                            ),
                            {},
                        );
                        return Object.assign({}, i, {
                            disable() {
                                ((e.enabled = !1), r());
                            },
                            enable() {
                                ((e.enabled = !0), r());
                            },
                            enableOutside() {
                                e.enabled && f(!0);
                            },
                            disableOutside() {
                                e.enabled && f(!1);
                            },
                        });
                    })();
                function y(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function _(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function P(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function x(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const T = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    S = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    O = Object.keys(S).reduce((e, n) => ((e[n] = () => y(S[n])), e), {}),
                    z = { play: Object.assign({}, O, { sound: y }), setRTPC: _ };
                function A(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function j(e, n, t) {
                    return `url(${A(e, n, t)})`;
                }
                const N = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    C = {
                        onTextureFrozen: m('self.onTextureFrozen'),
                        onTextureReady: m('self.onTextureReady'),
                        onDomBuilt: m('self.onDomBuilt'),
                        onLoaded: m('self.onLoaded'),
                        onDisplayChanged: m('self.onShowingStatusChanged'),
                        onFocusUpdated: m('self.onFocusChanged'),
                        children: {
                            onAdded: m('children.onAdded'),
                            onLoaded: m('children.onLoaded'),
                            onRemoved: m('children.onRemoved'),
                            onAttached: m('children.onAttached'),
                            onTextureReady: m('children.onTextureReady'),
                            onRequestPosition: m('children.requestPosition'),
                        },
                    },
                    F = ['args'],
                    M = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const i = n.args,
                                o = (function (e, n) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (n.indexOf(r) >= 0) continue;
                                            t[r] = e[r];
                                        }
                                    return t;
                                })(n, F);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((r = i),
                                              Object.entries(r).map(([e, n]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof n) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: n };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: n };
                                                      default:
                                                          return { __Type: t, name: e, string: n.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    k = {
                        close(e) {
                            M('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            M(64);
                        },
                        move(e) {
                            M(16, { isMouseEvent: !0, on: e });
                        },
                    },
                    V = 15;
                function D(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function G(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, V);
                }
                function H(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function I(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function L(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, V);
                }
                function B(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function $(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function U(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: J(n.x), y: J(n.y) };
                }
                function q() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function Q() {
                    return viewEnv.getScale();
                }
                function W(e) {
                    return viewEnv.pxToRem(e);
                }
                function J(e) {
                    return viewEnv.remToPx(e);
                }
                function K(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function X() {
                    return viewEnv.isFocused();
                }
                function Y() {
                    return viewEnv.setEventHandled();
                }
                function Z() {
                    return viewEnv.isEventHandled();
                }
                function ee() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ne() {
                    return viewEnv.getShowingStatus();
                }
                const te = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    re = Object.keys(N).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === N[n]), e), {}),
                    ie = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    oe = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : C.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ae = { view: a, client: i, sound: z };
                const se = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    le = ['children', 'className', 'theme'];
                function de() {
                    return (
                        (de = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                  }
                                  return e;
                              }),
                        de.apply(null, arguments)
                    );
                }
                const ce = l().forwardRef(function (e, n) {
                        let t = e.children,
                            r = e.className,
                            i = e.theme,
                            o = void 0 === i ? 'default' : i,
                            a = (function (e, n) {
                                if (null == e) return {};
                                var t = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (n.indexOf(r) >= 0) continue;
                                        t[r] = e[r];
                                    }
                                return t;
                            })(e, le);
                        const d = (function () {
                                const e = (0, s.useRef)(0);
                                var n;
                                return (
                                    (n = () => {
                                        window.cancelAnimationFrame(e.current);
                                    }),
                                    (0, s.useEffect)(() => n, []),
                                    (0, s.useMemo)(
                                        () => ({
                                            run: (n) => {
                                                (window.cancelAnimationFrame(e.current),
                                                    (e.current = window.requestAnimationFrame(() => {
                                                        e.current = window.requestAnimationFrame(() => {
                                                            (n(), (e.current = 0));
                                                        });
                                                    })));
                                            },
                                            clear: () => {
                                                (window.cancelAnimationFrame(e.current), (e.current = 0));
                                            },
                                            get isRunning() {
                                                return 0 !== e.current;
                                            },
                                        }),
                                        [],
                                    )
                                );
                            })(),
                            c = l().useRef(null);
                        var u;
                        return (
                            (u = () => {
                                d.run(() => {
                                    const e = c.current;
                                    if (!e) return;
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    ae.view.resize(n, t);
                                    const r = window.getComputedStyle(e);
                                    ae.view.setSidePaddingsRem({
                                        left: parseInt(r.getPropertyValue('padding-left'), 10),
                                        top: parseInt(r.getPropertyValue('padding-top'), 10),
                                        right: parseInt(r.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(u, []),
                            l().createElement(
                                'div',
                                de({}, a, {
                                    className: v()(se.base, se[`base__theme-${o}`], r),
                                    ref: function (e) {
                                        ((c.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                                    },
                                }),
                                l().createElement('div', { className: se.decorator }, t),
                            )
                        );
                    }),
                    ue = 'App_title_7e',
                    ve = 'App_perk_cd',
                    me = 'App_slotImage_56',
                    fe = R.strings.comp7_ext.crewMembersTooltip,
                    pe = () =>
                        l().createElement(
                            ce,
                            null,
                            l().createElement(
                                'div',
                                { className: v()('tooltips_base_e1', 'App_base_6c') },
                                l().createElement(
                                    'div',
                                    { className: 'tooltips_heading_92' },
                                    R.strings.comp7_ext.yearlyRewards.rewards.crew(),
                                ),
                                l().createElement(
                                    'div',
                                    { className: v()('tooltips_subHeading_de', 'tooltips_subHeading__topIndent_88') },
                                    fe.subHeading(),
                                ),
                                l().createElement('div', { className: 'App_crewIcon_11' }),
                                l().createElement(
                                    'div',
                                    { className: v()('tooltips_description_f6', 'tooltips_description__topIndent_e2') },
                                    fe.description(),
                                ),
                                l().createElement('div', { className: ue }, fe.zeroPerks()),
                                l().createElement('div', { className: 'App_zeroPerk_be' }),
                                l().createElement('div', { className: v()(ue, 'App_title__second_92') }, fe.perks()),
                                l().createElement(
                                    'div',
                                    { className: 'App_slots_12' },
                                    l().createElement(
                                        'div',
                                        { className: ve },
                                        l().createElement('div', { className: me }),
                                    ),
                                    l().createElement(
                                        'div',
                                        { className: ve },
                                        l().createElement('div', { className: me }),
                                    ),
                                ),
                            ),
                        );
                engine.whenReady.then(() => {
                    c().render(l().createElement(pe, null), document.getElementById('root'));
                });
            },
            7363: (e) => {
                e.exports = React;
            },
            1533: (e) => {
                e.exports = ReactDOM;
            },
        },
        t = {};
    function r(e) {
        var i = t[e];
        if (void 0 !== i) return i.exports;
        var o = (t[e] = { exports: {} });
        return (n[e](o, o.exports, r), o.exports);
    }
    ((r.m = n),
        (e = []),
        (r.O = (n, t, i, o) => {
            if (!t) {
                var a = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [t, i, o] = e[c], s = !0, l = 0; l < t.length; l++)
                        (!1 & o || a >= o) && Object.keys(r.O).every((e) => r.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((s = !1), o < a && (a = o));
                    if (s) {
                        e.splice(c--, 1);
                        var d = i();
                        void 0 !== d && (n = d);
                    }
                }
                return n;
            }
            o = o || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
            e[c] = [t, i, o];
        }),
        (r.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return (r.d(n, { a: n }), n);
        }),
        (r.d = (e, n) => {
            for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (r.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (r.j = 654),
        (() => {
            var e = { 654: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var i,
                        o,
                        [a, s, l] = t,
                        d = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (i in s) r.o(s, i) && (r.m[i] = s[i]);
                        if (l) var c = l(r);
                    }
                    for (n && n(t); d < a.length; d++) ((o = a[d]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
                    return r.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var i = r.O(void 0, [503], () => r(8274));
    i = r.O(i);
})();
