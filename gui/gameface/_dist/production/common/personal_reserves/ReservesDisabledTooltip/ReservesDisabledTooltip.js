(() => {
    'use strict';
    var e,
        n = {
            192: (e, n, t) => {
                var o = {};
                (t.r(o),
                    t.d(o, { mouse: () => E, off: () => h, on: () => w, onResize: () => m, onScaleUpdated: () => p }));
                var r = {};
                (t.r(r),
                    t.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => T,
                        getSize: () => P,
                        graphicsQuality: () => _,
                        playSound: () => b,
                        setRTPC: () => x,
                    }));
                var i = {};
                (t.r(i), t.d(i, { getBgUrl: () => V, getTextureUrl: () => L }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => W,
                        addPreloadTexture: () => H,
                        arabic2roman: () => ue,
                        children: () => i,
                        displayStatus: () => A,
                        displayStatusIs: () => ve,
                        enableFullScreenModeSupported: () => me,
                        events: () => k,
                        extraSize: () => fe,
                        forceTriggerMouseMove: () => se,
                        freezeTextureBeforeResize: () => Z,
                        getBrowserTexturePath: () => Q,
                        getDisplayStatus: () => le,
                        getExternalPaddingsRem: () => ce,
                        getFontNames: () => de,
                        getScale: () => ee,
                        getSize: () => J,
                        getViewGlobalPosition: () => Y,
                        initExternalPaddings: () => pe,
                        isEventHandled: () => ae,
                        isFocused: () => re,
                        pxToRem: () => ne,
                        remToPx: () => te,
                        resize: () => K,
                        sendEvent: () => U,
                        setAnimateWindow: () => oe,
                        setEventHandled: () => ie,
                        setInputPaddingsRem: () => q,
                        setSidePaddingsRem: () => X,
                        whenTutorialReady: () => ge,
                    }));
                var s = t(363),
                    l = t.n(s),
                    d = t(533),
                    u = t.n(d),
                    c = t(483),
                    v = t.n(c);
                function f(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function g(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const m = f('clientResized'),
                    p = f('self.onScaleUpdated'),
                    w = (e, n) => engine.on(e, n),
                    h = (e, n) => engine.off(e, n),
                    y = { down: f('mousedown'), up: f('mouseup'), move: f('mousemove') };
                const E = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && g(!1);
                    }
                    function t() {
                        e.enabled && g(!0);
                    }
                    function o() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', n),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', n),
                                  document.body.addEventListener('mouseleave', t))
                            : g(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${n}`,
                                        a = y[n]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        o(),
                                        () => {
                                            r &&
                                                (a(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                o(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            n
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            ((e.enabled = !1), o());
                        },
                        enable() {
                            ((e.enabled = !0), o());
                        },
                        enableOutside() {
                            e.enabled && g(!0);
                        },
                        disableOutside() {
                            e.enabled && g(!1);
                        },
                    });
                })();
                function b(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function x(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function P(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function T(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const _ = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    S = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    O = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    z = Object.keys(O).reduce((e, n) => ((e[n] = () => b(O[n])), e), {}),
                    C = { play: Object.assign({}, z, { sound: b }), setRTPC: x },
                    j = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    M = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function F(e) {
                    let n = '';
                    for (let t = M.length - 1; t >= 0; t--) for (; e >= M[t]; ) ((n += j[t]), (e -= M[t]));
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function L(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function V(e, n, t) {
                    return `url(${L(e, n, t)})`;
                }
                const A = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    k = {
                        onTextureFrozen: f('self.onTextureFrozen'),
                        onTextureReady: f('self.onTextureReady'),
                        onDomBuilt: f('self.onDomBuilt'),
                        onLoaded: f('self.onLoaded'),
                        onDisplayChanged: f('self.onShowingStatusChanged'),
                        onFocusUpdated: f('self.onFocusChanged'),
                        children: {
                            onAdded: f('children.onAdded'),
                            onLoaded: f('children.onLoaded'),
                            onRemoved: f('children.onRemoved'),
                            onAttached: f('children.onAttached'),
                            onTextureReady: f('children.onTextureReady'),
                            onRequestPosition: f('children.requestPosition'),
                        },
                    },
                    D = ['args'];
                const G = 2,
                    N = 16,
                    B = 32,
                    I = 64,
                    $ = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const r = n.args,
                                i = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        o,
                                        r = {},
                                        i = Object.keys(e);
                                    for (o = 0; o < i.length; o++) ((t = i[o]), n.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(n, D);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([e, n]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var o;
                    },
                    U = {
                        close(e) {
                            $('popover' === e ? G : B);
                        },
                        minimize() {
                            $(I);
                        },
                        move(e) {
                            $(N, { isMouseEvent: !0, on: e });
                        },
                    };
                function H(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function q(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function Q(e, n, t, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, o);
                }
                function W(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function X(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function J(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function K(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function Y(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: te(n.x), y: te(n.y) };
                }
                function Z() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function ee() {
                    return viewEnv.getScale();
                }
                function ne(e) {
                    return viewEnv.pxToRem(e);
                }
                function te(e) {
                    return viewEnv.remToPx(e);
                }
                function oe(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function re() {
                    return viewEnv.isFocused();
                }
                function ie() {
                    return viewEnv.setEventHandled();
                }
                function ae() {
                    return viewEnv.isEventHandled();
                }
                function se() {
                    viewEnv.forceTriggerMouseMove();
                }
                function le() {
                    return viewEnv.getShowingStatus();
                }
                const de = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ue = F;
                function ce() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const ve = Object.keys(A).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === A[n]), e), {}),
                    fe = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ge = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : k.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function me() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function pe(e) {
                    function n() {
                        const n = viewEnv.getExternalPaddingsRem(),
                            t = n.top,
                            o = n.right,
                            r = n.bottom,
                            i = n.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${o}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (n(), engine.on('self.onPaddingsUpdated', () => n()));
                }
                const we = { view: a, client: r, sound: C, intl: S };
                function he() {
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
                }
                const ye = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    Ee = ['children', 'className', 'theme'];
                function be() {
                    return (
                        (be =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                }
                                return e;
                            }),
                        be.apply(this, arguments)
                    );
                }
                const xe = l().forwardRef(function (e, n) {
                        let t = e.children,
                            o = e.className,
                            r = e.theme,
                            i = void 0 === r ? 'default' : r,
                            a = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    o,
                                    r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) ((t = i[o]), n.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Ee);
                        const d = he(),
                            u = l().useRef(null);
                        var c;
                        return (
                            (c = () => {
                                d.run(() => {
                                    const e = u.current;
                                    if (!e) return;
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    we.view.resize(n, t);
                                    const o = window.getComputedStyle(e);
                                    we.view.setSidePaddingsRem({
                                        left: parseInt(o.getPropertyValue('padding-left'), 10),
                                        top: parseInt(o.getPropertyValue('padding-top'), 10),
                                        right: parseInt(o.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(o.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(c, []),
                            l().createElement(
                                'div',
                                be({}, a, {
                                    className: v()(ye.base, ye[`base__theme-${i}`], o),
                                    ref: function (e) {
                                        ((u.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                                    },
                                }),
                                l().createElement('div', { className: ye.decorator }, t),
                            )
                        );
                    }),
                    Pe = 'Tooltip_base_23',
                    Te = 'Tooltip_text_3a',
                    Re = 'Tooltip_seperator_cd',
                    _e = 'Tooltip_infoSection_94',
                    Se = 'Tooltip_infoSection_icon_92',
                    Oe = 'Tooltip_infoSection_text_dd',
                    ze = () =>
                        l().createElement(
                            xe,
                            null,
                            l().createElement(
                                'div',
                                { className: Pe },
                                l().createElement(
                                    'div',
                                    { className: Te },
                                    R.strings.personal_reserves.noReserveTooltip.text(),
                                ),
                                l().createElement('div', { className: Re }),
                                l().createElement(
                                    'div',
                                    { className: _e },
                                    l().createElement('div', { className: Se }),
                                    l().createElement(
                                        'div',
                                        { className: Oe },
                                        R.strings.personal_reserves.noReserveTooltip.infoText(),
                                    ),
                                ),
                            ),
                        );
                engine.whenReady.then(() => {
                    u().render(l().createElement(ze, null), document.getElementById('root'));
                });
            },
            363: (e) => {
                e.exports = React;
            },
            533: (e) => {
                e.exports = ReactDOM;
            },
        },
        t = {};
    function o(e) {
        var r = t[e];
        if (void 0 !== r) return r.exports;
        var i = (t[e] = { exports: {} });
        return (n[e](i, i.exports, o), i.exports);
    }
    ((o.m = n),
        (e = []),
        (o.O = (n, t, r, i) => {
            if (!t) {
                var a = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [t, r, i] = e[u], s = !0, l = 0; l < t.length; l++)
                        (!1 & i || a >= i) && Object.keys(o.O).every((e) => o.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(u--, 1);
                        var d = r();
                        void 0 !== d && (n = d);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [t, r, i];
        }),
        (o.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return (o.d(n, { a: n }), n);
        }),
        (o.d = (e, n) => {
            for (var t in n) o.o(n, t) && !o.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (o.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (o.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (o.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (o.j = 685),
        (() => {
            var e = { 685: 0 };
            o.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        i,
                        [a, s, l] = t,
                        d = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in s) o.o(s, r) && (o.m[r] = s[r]);
                        if (l) var u = l(o);
                    }
                    for (n && n(t); d < a.length; d++) ((i = a[d]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return o.O(u);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var r = o.O(void 0, [490], () => o(192));
    r = o.O(r);
})();
