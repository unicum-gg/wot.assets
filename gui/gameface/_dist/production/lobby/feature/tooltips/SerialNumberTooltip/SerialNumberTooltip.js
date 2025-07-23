(() => {
    'use strict';
    var e,
        t = {
            5752: (e, t, n) => {
                var r = {};
                (n.r(r),
                    n.d(r, { mouse: () => P, off: () => y, on: () => E, onResize: () => h, onScaleUpdated: () => b }));
                var o = {};
                (n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => O,
                        getSize: () => S,
                        graphicsQuality: () => C,
                        playSound: () => T,
                        setRTPC: () => x,
                    }));
                var i = {};
                (n.r(i), n.d(i, { getBgUrl: () => F, getTextureUrl: () => V }));
                var a = {};
                (n.r(a),
                    n.d(a, {
                        addModelObserver: () => U,
                        addPreloadTexture: () => G,
                        arabic2roman: () => se,
                        children: () => i,
                        displayStatus: () => A,
                        displayStatusIs: () => le,
                        events: () => D,
                        extraSize: () => ue,
                        forceTriggerMouseMove: () => oe,
                        freezeTextureBeforeResize: () => J,
                        getBrowserTexturePath: () => W,
                        getDisplayStatus: () => ie,
                        getFontNames: () => ae,
                        getScale: () => K,
                        getSize: () => q,
                        getViewGlobalPosition: () => X,
                        isEventHandled: () => re,
                        isFocused: () => te,
                        pxToRem: () => Y,
                        remToPx: () => Z,
                        resize: () => Q,
                        sendEvent: () => B,
                        setAnimateWindow: () => ee,
                        setEventHandled: () => ne,
                        setInputPaddingsRem: () => H,
                        setSidePaddingsRem: () => $,
                        whenTutorialReady: () => ce,
                    }));
                var s = n(7363),
                    l = n.n(s),
                    u = n(1533),
                    c = n.n(u);
                const d = {
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
                            { className: d.base },
                            l().createElement('div', { className: d.images }),
                            l().createElement(
                                'div',
                                { className: d.content },
                                l().createElement('div', { className: d.title }, v.title()),
                                l().createElement(
                                    'div',
                                    { className: d.descriptionBlock },
                                    l().createElement('div', { className: d.firstPart }, v.description.firstPart()),
                                    l().createElement('div', { className: d.secondPart }, v.description.secondPart()),
                                ),
                                l().createElement(
                                    'div',
                                    { className: d.separatorWrapper },
                                    l().createElement('div', { className: d.separator }),
                                ),
                                l().createElement('div', { className: d.moreInfo }, v.moreInfo()),
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
                const h = p('clientResized'),
                    b = p('self.onScaleUpdated'),
                    E = (e, t) => engine.on(e, t),
                    y = (e, t) => engine.off(e, t),
                    _ = { down: p('mousedown'), up: p('mouseup'), move: p('mousemove') },
                    P = (function () {
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
                                            a = _[t]((e) => n([e, 'outside']));
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
                function T(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function x(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function S(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function O(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const C = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    z = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    j = Object.keys(z).reduce((e, t) => ((e[t] = () => T(z[t])), e), {}),
                    N = { play: Object.assign({}, j, { sound: T }), setRTPC: x },
                    k = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    M = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function V(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function F(e, t, n) {
                    return `url(${V(e, t, n)})`;
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
                    L = (e, t) => {
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
                    B = {
                        close(e) {
                            L('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            L(64);
                        },
                        move(e) {
                            L(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function G(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function W(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function U(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function $(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function q(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function Q(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function X(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: Z(t.x), y: Z(t.y) };
                }
                function J() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function K() {
                    return viewEnv.getScale();
                }
                function Y(e) {
                    return viewEnv.pxToRem(e);
                }
                function Z(e) {
                    return viewEnv.remToPx(e);
                }
                function ee(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function te() {
                    return viewEnv.isFocused();
                }
                function ne() {
                    return viewEnv.setEventHandled();
                }
                function re() {
                    return viewEnv.isEventHandled();
                }
                function oe() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ie() {
                    return viewEnv.getShowingStatus();
                }
                const ae = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    se = function (e) {
                        let t = '';
                        for (let n = M.length - 1; n >= 0; n--) for (; e >= M[n]; ) ((t += k[n]), (e -= M[n]));
                        return t;
                    },
                    le = Object.keys(A).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === A[t]), e), {}),
                    ue = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ce = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : D.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    de = { view: a, client: o, sound: N };
                const ve = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    me = ['children', 'className', 'theme'];
                function fe() {
                    return (
                        (fe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        fe.apply(this, arguments)
                    );
                }
                const ge = l().forwardRef(function (e, t) {
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
                            })(e, me);
                        const u = (function () {
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
                                                            (t(), (e.current = 0));
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
                        var d;
                        return (
                            (d = () => {
                                u.run(() => {
                                    const e = c.current;
                                    if (!e) return;
                                    const t = e.scrollWidth,
                                        n = e.scrollHeight;
                                    de.view.resize(t, n);
                                    const r = window.getComputedStyle(e);
                                    de.view.setSidePaddingsRem({
                                        left: parseInt(r.getPropertyValue('padding-left'), 10),
                                        top: parseInt(r.getPropertyValue('padding-top'), 10),
                                        right: parseInt(r.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(d, []),
                            l().createElement(
                                'div',
                                fe({}, a, {
                                    className: g()(ve.base, ve[`base__theme-${i}`], r),
                                    ref: function (e) {
                                        ((c.current = e), 'function' == typeof t ? t(e) : t && (t.current = e));
                                    },
                                }),
                                l().createElement('div', { className: ve.decorator }, n),
                            )
                        );
                    }),
                    pe = () => l().createElement(ge, null, l().createElement(m, null));
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
                for (c = 0; c < e.length; c++) {
                    for (var [n, o, i] = e[c], s = !0, l = 0; l < n.length; l++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(c--, 1);
                        var u = o();
                        void 0 !== u && (t = u);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
            e[c] = [n, o, i];
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
                        u = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (l) var c = l(r);
                    }
                    for (t && t(n); u < a.length; u++) ((i = a[u]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return r.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var o = r.O(void 0, ['lib/resource_well.vendors'], () => r(5752));
    o = r.O(o);
})();
