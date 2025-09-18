(() => {
    'use strict';
    var e,
        n = {
            1413: (e, n, t) => {
                var r = {};
                (t.r(r),
                    t.d(r, { mouse: () => p, off: () => g, on: () => m, onResize: () => u, onScaleUpdated: () => v }));
                var i = {};
                (t.r(i),
                    t.d(i, {
                        events: () => r,
                        getMouseGlobalPosition: () => y,
                        getSize: () => E,
                        graphicsQuality: () => b,
                        playSound: () => w,
                        setRTPC: () => h,
                    }));
                var o = {};
                (t.r(o), t.d(o, { getBgUrl: () => C, getTextureUrl: () => k }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => I,
                        addPreloadTexture: () => G,
                        arabic2roman: () => ae,
                        children: () => o,
                        displayStatus: () => j,
                        displayStatusIs: () => le,
                        enableFullScreenModeSupported: () => ue,
                        events: () => A,
                        extraSize: () => de,
                        forceTriggerMouseMove: () => re,
                        freezeTextureBeforeResize: () => X,
                        getBrowserTexturePath: () => B,
                        getDisplayStatus: () => ie,
                        getExternalPaddingsRem: () => se,
                        getFontNames: () => oe,
                        getScale: () => J,
                        getSize: () => q,
                        getViewGlobalPosition: () => W,
                        initExternalPaddings: () => ve,
                        isEventHandled: () => te,
                        isFocused: () => ee,
                        pxToRem: () => K,
                        remToPx: () => Y,
                        resize: () => Q,
                        sendEvent: () => V,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => ne,
                        setInputPaddingsRem: () => H,
                        setSidePaddingsRem: () => $,
                        whenTutorialReady: () => ce,
                    }));
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
                    g = (e, n) => engine.off(e, n),
                    f = { down: d('mousedown'), up: d('mouseup'), move: d('mousemove') };
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
                                        a = f[n]((e) => t([e, 'outside']));
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
                function y(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const b = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    _ = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    x = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    P = Object.keys(x).reduce((e, n) => ((e[n] = () => w(x[n])), e), {}),
                    S = { play: Object.assign({}, P, { sound: w }), setRTPC: h },
                    T = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    O = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function z(e) {
                    let n = '';
                    for (let t = O.length - 1; t >= 0; t--) for (; e >= O[t]; ) ((n += T[t]), (e -= O[t]));
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function k(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function C(e, n, t) {
                    return `url(${k(e, n, t)})`;
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
                    M = ['args'];
                const N = 2,
                    F = 16,
                    L = 32,
                    D = 64,
                    U = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const i = n.args,
                                o = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        i = {},
                                        o = Object.keys(e);
                                    for (r = 0; r < o.length; r++) ((t = o[r]), n.indexOf(t) >= 0 || (i[t] = e[t]));
                                    return i;
                                })(n, M);
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
                    V = {
                        close(e) {
                            U('popover' === e ? N : L);
                        },
                        minimize() {
                            U(D);
                        },
                        move(e) {
                            U(F, { isMouseEvent: !0, on: e });
                        },
                    };
                function G(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function B(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function I(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function $(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function q(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function Q(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function W(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: Y(n.x), y: Y(n.y) };
                }
                function X() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function J() {
                    return viewEnv.getScale();
                }
                function K(e) {
                    return viewEnv.pxToRem(e);
                }
                function Y(e) {
                    return viewEnv.remToPx(e);
                }
                function Z(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function ee() {
                    return viewEnv.isFocused();
                }
                function ne() {
                    return viewEnv.setEventHandled();
                }
                function te() {
                    return viewEnv.isEventHandled();
                }
                function re() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ie() {
                    return viewEnv.getShowingStatus();
                }
                const oe = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ae = z;
                function se() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const le = Object.keys(j).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === j[n]), e), {}),
                    de = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ce = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : A.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function ue() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function ve(e) {
                    function n() {
                        const n = viewEnv.getExternalPaddingsRem(),
                            t = n.top,
                            r = n.right,
                            i = n.bottom,
                            o = n.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${i}rem`),
                            e.style.setProperty('--external-padding-left', `${o}rem`));
                    }
                    (n(), engine.on('self.onPaddingsUpdated', () => n()));
                }
                const me = { view: a, client: i, sound: S, intl: _ };
                var ge = t(7363),
                    fe = t.n(ge);
                function pe() {
                    const e = (0, ge.useRef)(0);
                    var n;
                    return (
                        (n = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, ge.useEffect)(() => n, []),
                        (0, ge.useMemo)(
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
                }
                const we = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    he = ['children', 'className', 'theme'];
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                const ye = fe().forwardRef(function (e, n) {
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
                            for (r = 0; r < o.length; r++) ((t = o[r]), n.indexOf(t) >= 0 || (i[t] = e[t]));
                            return i;
                        })(e, he);
                    const s = pe(),
                        d = fe().useRef(null);
                    var c;
                    return (
                        (c = () => {
                            s.run(() => {
                                const e = d.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                me.view.resize(n, t);
                                const r = window.getComputedStyle(e);
                                me.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, ge.useEffect)(c, []),
                        fe().createElement(
                            'div',
                            Ee({}, a, {
                                className: l()(we.base, we[`base__theme-${o}`], r),
                                ref: function (e) {
                                    ((d.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                                },
                            }),
                            fe().createElement('div', { className: we.decorator }, t),
                        )
                    );
                });
                var be = t(1533),
                    _e = t.n(be),
                    xe = t(3403);
                const Pe = 'TooltipAdvancedFooter_base_d6',
                    Se = 'TooltipAdvancedFooter_altBtn_e0',
                    Re = fe().memo(function ({ classMix: e }) {
                        return fe().createElement(
                            'div',
                            { className: l()(Pe, e) },
                            fe().createElement('div', { className: Se }),
                            fe().createElement('div', null, R.strings.tooltips.advanced.info()),
                        );
                    }),
                    Te = 'GradientDecorator_base_ee',
                    Oe = 'GradientDecorator_bg_21',
                    ze = 'GradientDecorator_divider_13',
                    ke = (0, ge.memo)(({ className: e, children: n }) =>
                        fe().createElement(
                            'div',
                            { className: l()(Te, e) },
                            fe().createElement(
                                'div',
                                { className: Oe },
                                fe().createElement('div', { className: ze }),
                                fe().createElement('div', { className: ze }),
                            ),
                            n,
                        ),
                    ),
                    Ce = 'SkillUntrainedHeader_base_74',
                    je = 'SkillUntrainedHeader_gradient_03',
                    Ae = 'SkillUntrainedHeader_icon_21',
                    Me = 'SkillUntrainedHeader_header_96',
                    Ne = (0, ge.memo)(({ className: e }) =>
                        fe().createElement(
                            'div',
                            { className: l()(Ce, e) },
                            fe().createElement('div', { className: je }),
                            fe().createElement('div', { className: Ae }),
                            fe().createElement('div', { className: Me }, R.strings.tooltips.skill.untrained.header()),
                        ),
                    ),
                    Fe = 'SkillUntrainedApp_base_1a',
                    Le = 'SkillUntrainedApp_body_78',
                    De = 'SkillUntrainedApp_explanation_69',
                    Ue = 'SkillUntrainedApp_footer_d8',
                    Ve = (0, xe.Pi)(() =>
                        fe().createElement(
                            'div',
                            { className: Fe },
                            fe().createElement(Ne, null),
                            fe().createElement('div', { className: Le }, R.strings.tooltips.skill.untrained.body()),
                            fe().createElement(
                                ke,
                                null,
                                fe().createElement(
                                    'div',
                                    { className: De },
                                    R.strings.tooltips.skill.untrained.explanation(),
                                ),
                            ),
                            fe().createElement(Re, { classMix: Ue }),
                        ),
                    );
                engine.whenReady.then(() => {
                    _e().render(
                        fe().createElement(ye, null, fe().createElement(Ve, null)),
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
                    for (n && n(t); d < a.length; d++) ((o = a[d]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
                    return r.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var i = r.O(void 0, [9056], () => r(1413));
    i = r.O(i);
})();
