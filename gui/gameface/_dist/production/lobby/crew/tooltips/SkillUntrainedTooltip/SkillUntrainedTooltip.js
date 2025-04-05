(() => {
    'use strict';
    var e,
        n = {
            802: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => p, off: () => f, on: () => m, onResize: () => u, onScaleUpdated: () => v });
                var i = {};
                t.r(i),
                    t.d(i, {
                        events: () => r,
                        getMouseGlobalPosition: () => b,
                        getSize: () => E,
                        graphicsQuality: () => y,
                        playSound: () => w,
                        setRTPC: () => h,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => k, getTextureUrl: () => z });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => B,
                        addPreloadTexture: () => L,
                        arabic2roman: () => oe,
                        children: () => o,
                        displayStatus: () => j,
                        displayStatusIs: () => ae,
                        events: () => A,
                        extraSize: () => se,
                        forceTriggerMouseMove: () => te,
                        freezeTextureBeforeResize: () => W,
                        getBrowserTexturePath: () => H,
                        getDisplayStatus: () => re,
                        getFontNames: () => ie,
                        getScale: () => X,
                        getSize: () => $,
                        getViewGlobalPosition: () => Q,
                        isEventHandled: () => ne,
                        isFocused: () => Z,
                        pxToRem: () => J,
                        remToPx: () => K,
                        resize: () => q,
                        sendEvent: () => G,
                        setAnimateWindow: () => Y,
                        setEventHandled: () => ee,
                        setInputPaddingsRem: () => U,
                        setSidePaddingsRem: () => I,
                        whenTutorialReady: () => le,
                    });
                var s = t(6483),
                    l = t.n(s);
                function d(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function c(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const u = d('clientResized'),
                    v = d('self.onScaleUpdated'),
                    m = (e, n) => engine.on(e, n),
                    f = (e, n) => engine.off(e, n),
                    g = { down: d('mousedown'), up: d('mouseup'), move: d('mousemove') };
                const p = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && c(!1);
                    }
                    function t() {
                        e.enabled && c(!0);
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
                            : c(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const o = `mouse${n}`,
                                        a = g[n]((e) => t([e, 'outside']));
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
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
                        },
                        enableOutside() {
                            e.enabled && c(!0);
                        },
                        disableOutside() {
                            e.enabled && c(!1);
                        },
                    });
                })();
                function w(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function h(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const y = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    _ = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    x = Object.keys(_).reduce((e, n) => ((e[n] = () => w(_[n])), e), {}),
                    S = { play: Object.assign({}, x, { sound: w }), setRTPC: h },
                    P = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    T = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function O(e) {
                    let n = '';
                    for (let t = T.length - 1; t >= 0; t--) for (; e >= T[t]; ) (n += P[t]), (e -= T[t]);
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function z(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function k(e, n, t) {
                    return `url(${z(e, n, t)})`;
                }
                const j = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    A = {
                        onTextureFrozen: d('self.onTextureFrozen'),
                        onTextureReady: d('self.onTextureReady'),
                        onDomBuilt: d('self.onDomBuilt'),
                        onLoaded: d('self.onLoaded'),
                        onDisplayChanged: d('self.onShowingStatusChanged'),
                        onFocusUpdated: d('self.onFocusChanged'),
                        children: {
                            onAdded: d('children.onAdded'),
                            onLoaded: d('children.onLoaded'),
                            onRemoved: d('children.onRemoved'),
                            onAttached: d('children.onAttached'),
                            onTextureReady: d('children.onTextureReady'),
                            onRequestPosition: d('children.requestPosition'),
                        },
                    },
                    C = ['args'];
                const N = 2,
                    M = 16,
                    F = 32,
                    D = 64,
                    V = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const i = n.args,
                                o = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        i = {},
                                        o = Object.keys(e);
                                    for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                                    return i;
                                })(n, C);
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
                    G = {
                        close(e) {
                            V('popover' === e ? N : F);
                        },
                        minimize() {
                            V(D);
                        },
                        move(e) {
                            V(M, { isMouseEvent: !0, on: e });
                        },
                    };
                function L(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function U(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function H(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function B(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function $(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function q(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function Q(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: K(n.x), y: K(n.y) };
                }
                function W() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function X() {
                    return viewEnv.getScale();
                }
                function J(e) {
                    return viewEnv.pxToRem(e);
                }
                function K(e) {
                    return viewEnv.remToPx(e);
                }
                function Y(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function Z() {
                    return viewEnv.isFocused();
                }
                function ee() {
                    return viewEnv.setEventHandled();
                }
                function ne() {
                    return viewEnv.isEventHandled();
                }
                function te() {
                    viewEnv.forceTriggerMouseMove();
                }
                function re() {
                    return viewEnv.getShowingStatus();
                }
                const ie = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    oe = O,
                    ae = Object.keys(j).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === j[n]), e), {}),
                    se = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    le = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : A.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    de = { view: a, client: i, sound: S };
                var ce = t(7363),
                    ue = t.n(ce);
                function ve() {
                    const e = (0, ce.useRef)(0);
                    var n;
                    return (
                        (n = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, ce.useEffect)(() => n, []),
                        (0, ce.useMemo)(
                            () => ({
                                run: (n) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                n(), (e.current = 0);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(e.current), (e.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                const me = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    fe = ['children', 'className', 'theme'];
                function ge() {
                    return (
                        (ge =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ge.apply(this, arguments)
                    );
                }
                const pe = ue().forwardRef(function (e, n) {
                    let t = e.children,
                        r = e.className,
                        i = e.theme,
                        o = void 0 === i ? 'default' : i,
                        a = (function (e, n) {
                            if (null == e) return {};
                            var t,
                                r,
                                i = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                            return i;
                        })(e, fe);
                    const s = ve(),
                        d = ue().useRef(null);
                    var c;
                    return (
                        (c = () => {
                            s.run(() => {
                                const e = d.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                de.view.resize(n, t);
                                const r = window.getComputedStyle(e);
                                de.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, ce.useEffect)(c, []),
                        ue().createElement(
                            'div',
                            ge({}, a, {
                                className: l()(me.base, me[`base__theme-${o}`], r),
                                ref: function (e) {
                                    (d.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                },
                            }),
                            ue().createElement('div', { className: me.decorator }, t),
                        )
                    );
                });
                var we = t(1533),
                    he = t.n(we),
                    Ee = t(3403);
                const be = 'TooltipAdvancedFooter_base_d6',
                    ye = 'TooltipAdvancedFooter_altBtn_e0',
                    _e = ue().memo(function ({ classMix: e }) {
                        return ue().createElement(
                            'div',
                            { className: l()(be, e) },
                            ue().createElement('div', { className: ye }),
                            ue().createElement('div', null, R.strings.tooltips.advanced.info()),
                        );
                    }),
                    xe = 'GradientDecorator_base_ee',
                    Se = 'GradientDecorator_bg_21',
                    Re = 'GradientDecorator_divider_13',
                    Pe = (0, ce.memo)(({ className: e, children: n }) =>
                        ue().createElement(
                            'div',
                            { className: l()(xe, e) },
                            ue().createElement(
                                'div',
                                { className: Se },
                                ue().createElement('div', { className: Re }),
                                ue().createElement('div', { className: Re }),
                            ),
                            n,
                        ),
                    ),
                    Te = 'SkillUntrainedHeader_base_74',
                    Oe = 'SkillUntrainedHeader_gradient_03',
                    ze = 'SkillUntrainedHeader_icon_21',
                    ke = 'SkillUntrainedHeader_header_96',
                    je = (0, ce.memo)(({ className: e }) =>
                        ue().createElement(
                            'div',
                            { className: l()(Te, e) },
                            ue().createElement('div', { className: Oe }),
                            ue().createElement('div', { className: ze }),
                            ue().createElement('div', { className: ke }, R.strings.tooltips.skill.untrained.header()),
                        ),
                    ),
                    Ae = 'SkillUntrainedApp_base_1a',
                    Ce = 'SkillUntrainedApp_body_78',
                    Ne = 'SkillUntrainedApp_explanation_69',
                    Me = 'SkillUntrainedApp_footer_d8',
                    Fe = (0, Ee.Pi)(() =>
                        ue().createElement(
                            'div',
                            { className: Ae },
                            ue().createElement(je, null),
                            ue().createElement('div', { className: Ce }, R.strings.tooltips.skill.untrained.body()),
                            ue().createElement(
                                Pe,
                                null,
                                ue().createElement(
                                    'div',
                                    { className: Ne },
                                    R.strings.tooltips.skill.untrained.explanation(),
                                ),
                            ),
                            ue().createElement(_e, { classMix: Me }),
                        ),
                    );
                engine.whenReady.then(() => {
                    he().render(
                        ue().createElement(pe, null, ue().createElement(Fe, null)),
                        document.getElementById('root'),
                    );
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
        return n[e](o, o.exports, r), o.exports;
    }
    (r.m = n),
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
            return r.d(n, { a: n }), n;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (r.j = 6439),
        (() => {
            var e = { 6439: 0 };
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
                    for (n && n(t); d < a.length; d++) (o = a[d]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return r.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var i = r.O(void 0, [9056], () => r(802));
    i = r.O(i);
})();
