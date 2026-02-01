(() => {
    'use strict';
    var e,
        t = {
            4854: (e, t, n) => {
                var r = {};
                (n.r(r),
                    n.d(r, { mouse: () => y, off: () => h, on: () => w, onResize: () => g, onScaleUpdated: () => p }));
                var i = {};
                (n.r(i),
                    n.d(i, {
                        events: () => r,
                        getMouseGlobalPosition: () => _,
                        getSize: () => P,
                        graphicsQuality: () => T,
                        playSound: () => b,
                        setRTPC: () => x,
                    }));
                var o = {};
                (n.r(o), n.d(o, { getBgUrl: () => L, getTextureUrl: () => F }));
                var a = {};
                (n.r(a),
                    n.d(a, {
                        addModelObserver: () => Q,
                        addPreloadTexture: () => H,
                        arabic2roman: () => ue,
                        children: () => o,
                        displayStatus: () => k,
                        displayStatusIs: () => ve,
                        enableFullScreenModeSupported: () => ge,
                        events: () => V,
                        extraSize: () => me,
                        forceTriggerMouseMove: () => se,
                        freezeTextureBeforeResize: () => Z,
                        getBrowserTexturePath: () => q,
                        getDisplayStatus: () => le,
                        getExternalPaddingsRem: () => ce,
                        getFontNames: () => de,
                        getScale: () => ee,
                        getSize: () => J,
                        getViewGlobalPosition: () => Y,
                        initExternalPaddings: () => pe,
                        isEventHandled: () => ae,
                        isFocused: () => ie,
                        pxToRem: () => te,
                        remToPx: () => ne,
                        resize: () => K,
                        sendEvent: () => U,
                        setAnimateWindow: () => re,
                        setEventHandled: () => oe,
                        setInputPaddingsRem: () => W,
                        setSidePaddingsRem: () => X,
                        whenTutorialReady: () => fe,
                    }));
                var s = n(7363),
                    l = n.n(s),
                    d = n(1533),
                    u = n.n(d),
                    c = n(6483),
                    v = n.n(c);
                function m(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function f(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const g = m('clientResized'),
                    p = m('self.onScaleUpdated'),
                    w = (e, t) => engine.on(e, t),
                    h = (e, t) => engine.off(e, t),
                    E = { down: m('mousedown'), up: m('mouseup'), move: m('mousemove') };
                const y = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && f(!1);
                    }
                    function n() {
                        e.enabled && f(!0);
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
                            : f(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const o = `mouse${t}`,
                                        a = E[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
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
                            })(n)),
                            t
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
                function b(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function x(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function P(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const T = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    S = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    O = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    z = Object.keys(O).reduce((e, t) => ((e[t] = () => b(O[t])), e), {}),
                    C = { play: Object.assign({}, z, { sound: b }), setRTPC: x },
                    A = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    j = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function M(e) {
                    let t = '';
                    for (let n = j.length - 1; n >= 0; n--) for (; e >= j[n]; ) ((t += A[n]), (e -= j[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function F(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function L(e, t, n) {
                    return `url(${F(e, t, n)})`;
                }
                const k = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    V = {
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
                    N = ['args'];
                const D = 2,
                    G = 16,
                    B = 32,
                    I = 64,
                    $ = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        i = {},
                                        o = Object.keys(e);
                                    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                    return i;
                                })(t, N);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((r = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    U = {
                        close(e) {
                            $('popover' === e ? D : B);
                        },
                        minimize() {
                            $(I);
                        },
                        move(e) {
                            $(G, { isMouseEvent: !0, on: e });
                        },
                    };
                function H(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function W(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function q(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function Q(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function X(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function J(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function K(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function Y(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: ne(t.x), y: ne(t.y) };
                }
                function Z() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function ee() {
                    return viewEnv.getScale();
                }
                function te(e) {
                    return viewEnv.pxToRem(e);
                }
                function ne(e) {
                    return viewEnv.remToPx(e);
                }
                function re(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function ie() {
                    return viewEnv.isFocused();
                }
                function oe() {
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
                    ue = M;
                function ce() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const ve = Object.keys(k).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === k[t]), e), {}),
                    me = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    fe = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : V.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function ge() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function pe(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            r = t.right,
                            i = t.bottom,
                            o = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${i}rem`),
                            e.style.setProperty('--external-padding-left', `${o}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
                const we = { view: a, client: i, sound: C, intl: S };
                function he() {
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
                }
                const Ee = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ye = ['children', 'className', 'theme'];
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
                const xe = l().forwardRef(function (e, t) {
                        let n = e.children,
                            r = e.className,
                            i = e.theme,
                            o = void 0 === i ? 'default' : i,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                return i;
                            })(e, ye);
                        const d = he(),
                            u = l().useRef(null);
                        var c;
                        return (
                            (c = () => {
                                d.run(() => {
                                    const e = u.current;
                                    if (!e) return;
                                    const t = e.scrollWidth,
                                        n = e.scrollHeight;
                                    we.view.resize(t, n);
                                    const r = window.getComputedStyle(e);
                                    we.view.setSidePaddingsRem({
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
                                    className: v()(Ee.base, Ee[`base__theme-${o}`], r),
                                    ref: function (e) {
                                        ((u.current = e), 'function' == typeof t ? t(e) : t && (t.current = e));
                                    },
                                }),
                                l().createElement('div', { className: Ee.decorator }, n),
                            )
                        );
                    }),
                    Pe = 'App_base_e7',
                    _e = 'App_topBlock_f3',
                    Re = 'App_bottomBlock_ce',
                    Te = 'App_title_38',
                    Se = 'App_subTitle_5d',
                    Oe = 'App_description_f5',
                    ze = 'App_list_89',
                    Ce = 'App_item_3b',
                    Ae = 'App_divider_f7',
                    je = R.strings.achievements_page.tooltips.WTR.info,
                    Me = [je.list.text1(), je.list.text2(), je.list.text3(), je.list.text4()],
                    Fe = () =>
                        l().createElement(
                            xe,
                            null,
                            l().createElement(
                                'div',
                                { className: Pe },
                                l().createElement(
                                    'div',
                                    { className: _e },
                                    l().createElement('div', { className: Te }, je.title.main()),
                                    l().createElement('div', { className: Oe }, je.description.main()),
                                ),
                                l().createElement(
                                    'div',
                                    { className: Re },
                                    l().createElement('div', { className: Ae }),
                                    l().createElement('div', { className: Se }, je.title.about()),
                                    l().createElement('div', null, je.description.about()),
                                    l().createElement(
                                        'div',
                                        { className: ze },
                                        Me.map((e, t) => l().createElement('div', { className: Ce, key: t }, e)),
                                    ),
                                    l().createElement('div', null, je.caption()),
                                ),
                            ),
                        );
                engine.whenReady.then(() => {
                    u().render(l().createElement(Fe, null), document.getElementById('root'));
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
        var i = n[e];
        if (void 0 !== i) return i.exports;
        var o = (n[e] = { exports: {} });
        return (t[e](o, o.exports, r), o.exports);
    }
    ((r.m = t),
        (e = []),
        (r.O = (t, n, i, o) => {
            if (!n) {
                var a = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [n, i, o] = e[u], s = !0, l = 0; l < n.length; l++)
                        (!1 & o || a >= o) && Object.keys(r.O).every((e) => r.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((s = !1), o < a && (a = o));
                    if (s) {
                        e.splice(u--, 1);
                        var d = i();
                        void 0 !== d && (t = d);
                    }
                }
                return t;
            }
            o = o || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
            e[u] = [n, i, o];
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
        (r.j = 924),
        (() => {
            var e = { 924: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var i,
                        o,
                        [a, s, l] = n,
                        d = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (i in s) r.o(s, i) && (r.m[i] = s[i]);
                        if (l) var u = l(r);
                    }
                    for (t && t(n); d < a.length; d++) ((o = a[d]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
                    return r.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var i = r.O(void 0, [549], () => r(4854));
    i = r.O(i);
})();
