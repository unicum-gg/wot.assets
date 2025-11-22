(() => {
    'use strict';
    var e,
        t = {
            4385: (e, t, n) => {
                var r = {};
                (n.r(r),
                    n.d(r, { mouse: () => _, off: () => E, on: () => y, onResize: () => b, onScaleUpdated: () => h }));
                var o = {};
                (n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => C,
                        getSize: () => T,
                        graphicsQuality: () => O,
                        playSound: () => x,
                        setRTPC: () => S,
                    }));
                var i = {};
                (n.r(i), n.d(i, { getBgUrl: () => V, getTextureUrl: () => k }));
                var a = {};
                (n.r(a),
                    n.d(a, {
                        addModelObserver: () => W,
                        addPreloadTexture: () => $,
                        arabic2roman: () => le,
                        children: () => i,
                        displayStatus: () => A,
                        displayStatusIs: () => ue,
                        enableFullScreenModeSupported: () => me,
                        events: () => D,
                        extraSize: () => ce,
                        forceTriggerMouseMove: () => ie,
                        freezeTextureBeforeResize: () => K,
                        getBrowserTexturePath: () => H,
                        getDisplayStatus: () => ae,
                        getExternalPaddingsRem: () => de,
                        getFontNames: () => se,
                        getScale: () => Y,
                        getSize: () => Q,
                        getViewGlobalPosition: () => J,
                        initExternalPaddings: () => fe,
                        isEventHandled: () => oe,
                        isFocused: () => ne,
                        pxToRem: () => Z,
                        remToPx: () => ee,
                        resize: () => X,
                        sendEvent: () => G,
                        setAnimateWindow: () => te,
                        setEventHandled: () => re,
                        setInputPaddingsRem: () => U,
                        setSidePaddingsRem: () => q,
                        whenTutorialReady: () => ve,
                    }));
                var s = n(7363),
                    l = n.n(s),
                    d = n(1533),
                    u = n.n(d);
                const c = {
                        base: 'Content_base_ad',
                        images: 'Content_images_3b',
                        content: 'Content_content_72',
                        title: 'Content_title_75',
                        descriptionBlock: 'Content_descriptionBlock_19',
                        firstPart: 'Content_firstPart_30',
                        separatorWrapper: 'Content_separatorWrapper_c8',
                        separator: 'Content_separator_69',
                        moreInfo: 'Content_moreInfo_5a',
                    },
                    v = R.strings.resource_well.tooltips.uniq_style,
                    m = () =>
                        l().createElement(
                            'div',
                            { className: c.base },
                            l().createElement('div', { className: c.images }),
                            l().createElement(
                                'div',
                                { className: c.content },
                                l().createElement('div', { className: c.title }, v.title()),
                                l().createElement(
                                    'div',
                                    { className: c.descriptionBlock },
                                    l().createElement('div', { className: c.firstPart }, v.description.firstPart()),
                                    l().createElement('div', { className: c.secondPart }, v.description.secondPart()),
                                ),
                                l().createElement(
                                    'div',
                                    { className: c.separatorWrapper },
                                    l().createElement('div', { className: c.separator }),
                                ),
                                l().createElement('div', { className: c.moreInfo }, v.moreInfo()),
                            ),
                        );
                var f = n(6483),
                    g = n.n(f);
                function p(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function w(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const b = p('clientResized'),
                    h = p('self.onScaleUpdated'),
                    y = (e, t) => engine.on(e, t),
                    E = (e, t) => engine.off(e, t),
                    P = { down: p('mousedown'), up: p('mouseup'), move: p('mousemove') },
                    _ = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && w(!1);
                        }
                        function n() {
                            e.enabled && w(!0);
                        }
                        function r() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', n))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', n))
                                : w(!1);
                        }
                        const o = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let o = !0;
                                        const i = `mouse${t}`,
                                            a = P[t]((e) => n([e, 'outside']));
                                        function s(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, s),
                                            r(),
                                            () => {
                                                o &&
                                                    (a(),
                                                    window.removeEventListener(i, s),
                                                    (e.listeners -= 1),
                                                    r(),
                                                    (o = !1));
                                            }
                                        );
                                    };
                                })(n)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, o, {
                            disable() {
                                ((e.enabled = !1), r());
                            },
                            enable() {
                                ((e.enabled = !0), r());
                            },
                            enableOutside() {
                                e.enabled && w(!0);
                            },
                            disableOutside() {
                                e.enabled && w(!1);
                            },
                        });
                    })();
                function x(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function S(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function T(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function C(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const O = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    z = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    j = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    N = Object.keys(j).reduce((e, t) => ((e[t] = () => x(j[t])), e), {}),
                    M = { play: Object.assign({}, N, { sound: x }), setRTPC: S },
                    F = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    L = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function k(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function V(e, t, n) {
                    return `url(${k(e, t, n)})`;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const A = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    D = {
                        onTextureFrozen: p('self.onTextureFrozen'),
                        onTextureReady: p('self.onTextureReady'),
                        onDomBuilt: p('self.onDomBuilt'),
                        onLoaded: p('self.onLoaded'),
                        onDisplayChanged: p('self.onShowingStatusChanged'),
                        onFocusUpdated: p('self.onFocusChanged'),
                        children: {
                            onAdded: p('children.onAdded'),
                            onLoaded: p('children.onLoaded'),
                            onRemoved: p('children.onRemoved'),
                            onAttached: p('children.onAttached'),
                            onTextureReady: p('children.onTextureReady'),
                            onRequestPosition: p('children.requestPosition'),
                        },
                    },
                    I = ['args'],
                    B = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                    return o;
                                })(t, I);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = o),
                                              Object.entries(r).map(([e, t]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: n, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: n, name: e, bool: t };
                                                      default:
                                                          return { __Type: n, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    G = {
                        close(e) {
                            B('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            B(64);
                        },
                        move(e) {
                            B(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function $(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function U(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function H(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function W(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function q(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function Q(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function X(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function J(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: ee(t.x), y: ee(t.y) };
                }
                function K() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function Y() {
                    return viewEnv.getScale();
                }
                function Z(e) {
                    return viewEnv.pxToRem(e);
                }
                function ee(e) {
                    return viewEnv.remToPx(e);
                }
                function te(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function ne() {
                    return viewEnv.isFocused();
                }
                function re() {
                    return viewEnv.setEventHandled();
                }
                function oe() {
                    return viewEnv.isEventHandled();
                }
                function ie() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ae() {
                    return viewEnv.getShowingStatus();
                }
                const se = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    le = function (e) {
                        let t = '';
                        for (let n = L.length - 1; n >= 0; n--) for (; e >= L[n]; ) ((t += F[n]), (e -= L[n]));
                        return t;
                    };
                function de() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const ue = Object.keys(A).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === A[t]), e), {}),
                    ce = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ve = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : D.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function me() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function fe(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            r = t.right,
                            o = t.bottom,
                            i = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${o}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
                const ge = { view: a, client: o, sound: M, intl: z };
                const pe = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    we = ['children', 'className', 'theme'];
                function be() {
                    return (
                        (be =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        be.apply(this, arguments)
                    );
                }
                const he = l().forwardRef(function (e, t) {
                        let n = e.children,
                            r = e.className,
                            o = e.theme,
                            i = void 0 === o ? 'default' : o,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                return o;
                            })(e, we);
                        const d = (function () {
                                const e = (0, s.useRef)(0);
                                var t;
                                return (
                                    (t = () => {
                                        window.cancelAnimationFrame(e.current);
                                    }),
                                    (0, s.useEffect)(() => t, []),
                                    (0, s.useMemo)(
                                        () => ({
                                            run: (t) => {
                                                (window.cancelAnimationFrame(e.current),
                                                    (e.current = window.requestAnimationFrame(() => {
                                                        e.current = window.requestAnimationFrame(() => {
                                                            ((e.current = 0), t());
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
                            u = l().useRef(null);
                        var c;
                        return (
                            (c = () => {
                                d.run(() => {
                                    const e = u.current;
                                    if (!e) return;
                                    const t = e.scrollWidth,
                                        n = e.scrollHeight;
                                    ge.view.resize(t, n);
                                    const r = window.getComputedStyle(e);
                                    ge.view.setSidePaddingsRem({
                                        left: parseInt(r.getPropertyValue('padding-left'), 10),
                                        top: parseInt(r.getPropertyValue('padding-top'), 10),
                                        right: parseInt(r.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(c, []),
                            l().createElement(
                                'div',
                                be({}, a, {
                                    className: g()(pe.base, pe[`base__theme-${i}`], r),
                                    ref: function (e) {
                                        ((u.current = e), 'function' == typeof t ? t(e) : t && (t.current = e));
                                    },
                                }),
                                l().createElement('div', { className: pe.decorator }, n),
                            )
                        );
                    }),
                    ye = () => l().createElement(he, null, l().createElement(m, null));
                engine.whenReady.then(() => {
                    u().render(l().createElement(ye, null), document.getElementById('root'));
                });
            },
            7363: (e) => {
                e.exports = React;
            },
            1533: (e) => {
                e.exports = ReactDOM;
            },
        },
        n = {};
    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var i = (n[e] = { exports: {} });
        return (t[e](i, i.exports, r), i.exports);
    }
    ((r.m = t),
        (e = []),
        (r.O = (t, n, o, i) => {
            if (!n) {
                var a = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [n, o, i] = e[u], s = !0, l = 0; l < n.length; l++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(u--, 1);
                        var d = o();
                        void 0 !== d && (t = d);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [n, o, i];
        }),
        (r.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (r.d(t, { a: t }), t);
        }),
        (r.d = (e, t) => {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (r.j = 'lobby/feature/tooltips/SerialNumberTooltip/SerialNumberTooltip'),
        (() => {
            var e = { 'lobby/feature/tooltips/SerialNumberTooltip/SerialNumberTooltip': 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        i,
                        [a, s, l] = n,
                        d = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (l) var u = l(r);
                    }
                    for (t && t(n); d < a.length; d++) ((i = a[d]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return r.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var o = r.O(void 0, ['lib/resource_well.vendors'], () => r(4385));
    o = r.O(o);
})();
