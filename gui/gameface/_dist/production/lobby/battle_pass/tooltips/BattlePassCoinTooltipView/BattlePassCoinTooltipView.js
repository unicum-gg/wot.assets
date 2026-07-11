(() => {
    'use strict';
    var e,
        n = {
            7485: (e, n, t) => {
                var o = {};
                (t.r(o),
                    t.d(o, {
                        mouse: () => E,
                        off: () => b,
                        on: () => h,
                        onMinimize: () => w,
                        onResize: () => m,
                        onScaleUpdated: () => p,
                    }));
                var i = {};
                (t.r(i),
                    t.d(i, {
                        events: () => o,
                        getMouseGlobalPosition: () => T,
                        getSize: () => _,
                        graphicsQuality: () => S,
                        playSound: () => x,
                        setRTPC: () => P,
                    }));
                var r = {};
                (t.r(r), t.d(r, { getBgUrl: () => N, getTextureUrl: () => D }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => J,
                        addPreloadTexture: () => W,
                        arabic2roman: () => ve,
                        children: () => r,
                        displayStatus: () => k,
                        displayStatusIs: () => ge,
                        enableFullScreenModeSupported: () => we,
                        events: () => F,
                        extraSize: () => me,
                        forceTriggerMouseMove: () => le,
                        freezeTextureBeforeResize: () => ne,
                        getBrowserTexturePath: () => q,
                        getDisplayStatus: () => ce,
                        getExternalPaddingsRem: () => fe,
                        getFontNames: () => ue,
                        getScale: () => te,
                        getSize: () => Y,
                        getViewGlobalPosition: () => ee,
                        initExternalPaddings: () => he,
                        isEventHandled: () => de,
                        isFocused: () => ae,
                        pxToRem: () => oe,
                        remToPx: () => ie,
                        resize: () => Z,
                        sendEvent: () => H,
                        setAnimateWindow: () => re,
                        setEventHandled: () => se,
                        setInputPaddingsRem: () => X,
                        setSidePaddingsRem: () => K,
                        whenTutorialReady: () => pe,
                    }));
                var s = t(7363),
                    d = t.n(s),
                    l = t(1533),
                    c = t.n(l),
                    u = t(9849),
                    v = t.n(u);
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
                    w = f('clientMinimized'),
                    h = (e, n) => engine.on(e, n),
                    b = (e, n) => engine.off(e, n),
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
                    const i = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const r = `mouse${n}`,
                                        a = y[n]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        o(),
                                        () => {
                                            i &&
                                                (a(),
                                                window.removeEventListener(r, s),
                                                (e.listeners -= 1),
                                                o(),
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
                function x(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function P(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function T(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const S = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    O = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    C = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    z = Object.keys(C).reduce((e, n) => ((e[n] = () => x(C[n])), e), {}),
                    M = { play: Object.assign({}, z, { sound: x }), setRTPC: P },
                    j = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    L = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function V(e) {
                    let n = '';
                    for (let t = L.length - 1; t >= 0; t--) for (; e >= L[t];) ((n += j[t]), (e -= L[t]));
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function D(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function N(e, n, t) {
                    return `url(${D(e, n, t)})`;
                }
                const k = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    F = {
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
                    G = ['args'];
                const A = 2,
                    U = 16,
                    $ = 32,
                    B = 64,
                    I = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const i = n.args,
                                r = (function (e, n) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var o in e)
                                        if ({}.hasOwnProperty.call(e, o)) {
                                            if (-1 !== n.indexOf(o)) continue;
                                            t[o] = e[o];
                                        }
                                    return t;
                                })(n, G);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((o = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var o;
                    },
                    H = {
                        close(e) {
                            I('popover' === e ? A : $);
                        },
                        minimize() {
                            I(B);
                        },
                        move(e) {
                            I(U, { isMouseEvent: !0, on: e });
                        },
                    },
                    Q = 15;
                function W(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function X(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, Q);
                }
                function q(e, n, t, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, o);
                }
                function J(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function K(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, Q);
                }
                function Y(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function Z(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function ee(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: ie(n.x), y: ie(n.y) };
                }
                function ne() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function te() {
                    return viewEnv.getScale();
                }
                function oe(e) {
                    return viewEnv.pxToRem(e);
                }
                function ie(e) {
                    return viewEnv.remToPx(e);
                }
                function re(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function ae() {
                    return viewEnv.isFocused();
                }
                function se() {
                    return viewEnv.setEventHandled();
                }
                function de() {
                    return viewEnv.isEventHandled();
                }
                function le() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ce() {
                    return viewEnv.getShowingStatus();
                }
                const ue = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ve = V;
                function fe() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const ge = Object.keys(k).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === k[n]), e), {}),
                    me = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    pe = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : F.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function we() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function he(e) {
                    function n() {
                        const n = viewEnv.getExternalPaddingsRem(),
                            t = n.top,
                            o = n.right,
                            i = n.bottom,
                            r = n.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${o}rem`),
                            e.style.setProperty('--external-padding-bottom', `${i}rem`),
                            e.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (n(), engine.on('self.onPaddingsUpdated', () => n()));
                }
                const be = { view: a, client: i, sound: M, intl: O };
                const ye = {
                        base: 'TooltipDecorator_base_bf61f',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_bf8f8',
                        decorator: 'TooltipDecorator_decorator_f4de8',
                    },
                    Ee = ['children', 'className', 'theme'];
                function xe() {
                    return (
                        (xe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var o in t) ({}).hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                  }
                                  return e;
                              }),
                        xe.apply(null, arguments)
                    );
                }
                const Pe = d().forwardRef(function (e, n) {
                        let t = e.children,
                            o = e.className,
                            i = e.theme,
                            r = void 0 === i ? 'default' : i,
                            a = (function (e, n) {
                                if (null == e) return {};
                                var t = {};
                                for (var o in e)
                                    if ({}.hasOwnProperty.call(e, o)) {
                                        if (-1 !== n.indexOf(o)) continue;
                                        t[o] = e[o];
                                    }
                                return t;
                            })(e, Ee);
                        const l = d().useRef(null);
                        var c;
                        return (
                            (c = () => {
                                const e = l.current;
                                if (!e)
                                    return void console.warn(
                                        'Uncexpected to have base div as not setup in ref to calculate and invoke resize',
                                    );
                                const n = new ResizeObserver(() => {
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    be.view.resize(n, t);
                                    const o = window.getComputedStyle(e);
                                    be.view.setSidePaddingsRem({
                                        left: parseInt(o.getPropertyValue('padding-left'), 10),
                                        top: parseInt(o.getPropertyValue('padding-top'), 10),
                                        right: parseInt(o.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(o.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                                return (n.observe(e), n.disconnect);
                            }),
                            (0, s.useEffect)(c, []),
                            d().createElement(
                                'div',
                                xe({}, a, {
                                    className: v()(ye.base, ye[`base__theme-${r}`], o),
                                    ref: function (e) {
                                        ((l.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                                    },
                                }),
                                d().createElement('div', { className: ye.decorator }, t),
                            )
                        );
                    }),
                    _e = 'Content_base_b7009',
                    Re = 'Content_separator_d717c',
                    Te = 'Content_image_dfa5e',
                    Se = 'Content_section_af55a',
                    Oe = 'Content_title_d05d5',
                    Ce = 'Content_text_dca54',
                    ze = 'Content_secondaryText_be256',
                    Me = R.strings.battle_pass.tooltips.battlePassCoins,
                    je = Me.title(),
                    Le = Me.text(),
                    Ve = Me.secondaryText(),
                    De = () =>
                        d().createElement(
                            'div',
                            { className: _e },
                            d().createElement('div', { className: Te }),
                            d().createElement(
                                'div',
                                { className: Se },
                                d().createElement('div', { className: Re }),
                                d().createElement('div', { className: Oe }, je),
                                d().createElement('div', { className: Ce }, Le),
                                d().createElement('div', { className: Re }),
                            ),
                            d().createElement('div', { className: ze }, Ve),
                        ),
                    Ne = () => d().createElement(Pe, null, d().createElement(De, null)),
                    ke = document.createElement('div');
                ((window.onload = () => document.body.appendChild(ke)), c().render(d().createElement(Ne, null), ke));
            },
            7363: (e) => {
                e.exports = React;
            },
            1533: (e) => {
                e.exports = ReactDOM;
            },
        },
        t = {};
    function o(e) {
        var i = t[e];
        if (void 0 !== i) return i.exports;
        var r = (t[e] = { exports: {} });
        return (n[e](r, r.exports, o), r.exports);
    }
    ((o.m = n),
        (e = []),
        (o.O = (n, t, i, r) => {
            if (!t) {
                var a = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [t, i, r] = e[c], s = !0, d = 0; d < t.length; d++)
                        (!1 & r || a >= r) && Object.keys(o.O).every((e) => o.O[e](t[d]))
                            ? t.splice(d--, 1)
                            : ((s = !1), r < a && (a = r));
                    if (s) {
                        e.splice(c--, 1);
                        var l = i();
                        void 0 !== l && (n = l);
                    }
                }
                return n;
            }
            r = r || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > r; c--) e[c] = e[c - 1];
            e[c] = [t, i, r];
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
        (o.j = 9560),
        (() => {
            var e = { 9560: 0 };
            o.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var i,
                        r,
                        [a, s, d] = t,
                        l = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (i in s) o.o(s, i) && (o.m[i] = s[i]);
                        if (d) var c = d(o);
                    }
                    for (n && n(t); l < a.length; l++) ((r = a[l]), o.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return o.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var i = o.O(void 0, [1519], () => o(7485));
    i = o.O(i);
})();
