(() => {
    'use strict';
    var e,
        n = {
            6281: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => E, off: () => h, on: () => p, onResize: () => g, onScaleUpdated: () => w });
                var o = {};
                t.r(o),
                    t.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => P,
                        getSize: () => _,
                        graphicsQuality: () => T,
                        playSound: () => y,
                        setRTPC: () => x,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => F, getTextureUrl: () => V });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => Q,
                        addPreloadTexture: () => U,
                        arabic2roman: () => le,
                        children: () => i,
                        displayStatus: () => A,
                        displayStatusIs: () => de,
                        events: () => k,
                        extraSize: () => ce,
                        forceTriggerMouseMove: () => ae,
                        freezeTextureBeforeResize: () => Y,
                        getBrowserTexturePath: () => q,
                        getDisplayStatus: () => se,
                        getFontNames: () => ue,
                        getScale: () => Z,
                        getSize: () => X,
                        getViewGlobalPosition: () => K,
                        isEventHandled: () => ie,
                        isFocused: () => re,
                        pxToRem: () => ee,
                        remToPx: () => ne,
                        resize: () => J,
                        sendEvent: () => H,
                        setAnimateWindow: () => te,
                        setEventHandled: () => oe,
                        setInputPaddingsRem: () => $,
                        setSidePaddingsRem: () => W,
                        whenTutorialReady: () => ve,
                    });
                var s = t(7363),
                    u = t.n(s),
                    l = t(1533),
                    d = t.n(l),
                    c = t(6483),
                    v = t.n(c);
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
                const g = m('clientResized'),
                    w = m('self.onScaleUpdated'),
                    p = (e, n) => engine.on(e, n),
                    h = (e, n) => engine.off(e, n),
                    b = { down: m('mousedown'), up: m('mouseup'), move: m('mousemove') };
                const E = (function () {
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
                    const o = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${n}`,
                                        a = b[n]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
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
                            })(t)),
                            n
                        ),
                        {},
                    );
                    return Object.assign({}, o, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
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
                function x(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function P(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const T = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    S = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    O = Object.keys(S).reduce((e, n) => ((e[n] = () => y(S[n])), e), {}),
                    C = { play: Object.assign({}, O, { sound: y }), setRTPC: x },
                    z = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    j = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function M(e) {
                    let n = '';
                    for (let t = j.length - 1; t >= 0; t--) for (; e >= j[t]; ) (n += z[t]), (e -= j[t]);
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function V(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function F(e, n, t) {
                    return `url(${V(e, n, t)})`;
                }
                const A = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    k = {
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
                    D = ['args'];
                const L = 2,
                    N = 16,
                    G = 32,
                    B = 64,
                    I = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const o = n.args,
                                i = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                                    return o;
                                })(n, D);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((r = o),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    H = {
                        close(e) {
                            I('popover' === e ? L : G);
                        },
                        minimize() {
                            I(B);
                        },
                        move(e) {
                            I(N, { isMouseEvent: !0, on: e });
                        },
                    };
                function U(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function $(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function q(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function Q(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function W(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function X(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function J(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function K(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: ne(n.x), y: ne(n.y) };
                }
                function Y() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function Z() {
                    return viewEnv.getScale();
                }
                function ee(e) {
                    return viewEnv.pxToRem(e);
                }
                function ne(e) {
                    return viewEnv.remToPx(e);
                }
                function te(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function re() {
                    return viewEnv.isFocused();
                }
                function oe() {
                    return viewEnv.setEventHandled();
                }
                function ie() {
                    return viewEnv.isEventHandled();
                }
                function ae() {
                    viewEnv.forceTriggerMouseMove();
                }
                function se() {
                    return viewEnv.getShowingStatus();
                }
                const ue = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    le = M,
                    de = Object.keys(A).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === A[n]), e), {}),
                    ce = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ve = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : k.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    me = { view: a, client: o, sound: C };
                function fe() {
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
                const ge = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    we = ['children', 'className', 'theme'];
                function pe() {
                    return (
                        (pe =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        pe.apply(this, arguments)
                    );
                }
                const he = u().forwardRef(function (e, n) {
                        let t = e.children,
                            r = e.className,
                            o = e.theme,
                            i = void 0 === o ? 'default' : o,
                            a = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                                return o;
                            })(e, we);
                        const l = fe(),
                            d = u().useRef(null);
                        var c;
                        return (
                            (c = () => {
                                l.run(() => {
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
                            (0, s.useEffect)(c, []),
                            u().createElement(
                                'div',
                                pe({}, a, {
                                    className: v()(ge.base, ge[`base__theme-${i}`], r),
                                    ref: function (e) {
                                        (d.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                    },
                                }),
                                u().createElement('div', { className: ge.decorator }, t),
                            )
                        );
                    }),
                    be = 'Content_base_c2',
                    Ee = 'Content_separator_89',
                    ye = 'Content_image_47',
                    xe = 'Content_section_56',
                    _e = 'Content_title_54',
                    Pe = 'Content_text_30',
                    Te = 'Content_secondaryText_18',
                    Re = R.strings.battle_pass.tooltips.battlePassCoins,
                    Se = Re.title(),
                    Oe = Re.text(),
                    Ce = Re.secondaryText(),
                    ze = () =>
                        u().createElement(
                            'div',
                            { className: be },
                            u().createElement('div', { className: ye }),
                            u().createElement(
                                'div',
                                { className: xe },
                                u().createElement('div', { className: Ee }),
                                u().createElement('div', { className: _e }, Se),
                                u().createElement('div', { className: Pe }, Oe),
                                u().createElement('div', { className: Ee }),
                            ),
                            u().createElement('div', { className: Te }, Ce),
                        ),
                    je = () => u().createElement(he, null, u().createElement(ze, null)),
                    Me = document.createElement('div');
                (window.onload = () => document.body.appendChild(Me)), d().render(u().createElement(je, null), Me);
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
        var o = t[e];
        if (void 0 !== o) return o.exports;
        var i = (t[e] = { exports: {} });
        return n[e](i, i.exports, r), i.exports;
    }
    (r.m = n),
        (e = []),
        (r.O = (n, t, o, i) => {
            if (!t) {
                var a = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [t, o, i] = e[d], s = !0, u = 0; u < t.length; u++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(d--, 1);
                        var l = o();
                        void 0 !== l && (n = l);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
            e[d] = [t, o, i];
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
        (r.j = 9560),
        (() => {
            var e = { 9560: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var o,
                        i,
                        [a, s, u] = t,
                        l = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (u) var d = u(r);
                    }
                    for (n && n(t); l < a.length; l++) (i = a[l]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(d);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var o = r.O(void 0, [1519], () => r(6281));
    o = r.O(o);
})();
