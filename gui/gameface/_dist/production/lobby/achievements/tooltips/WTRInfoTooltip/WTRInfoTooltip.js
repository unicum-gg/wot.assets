(() => {
    'use strict';
    var e,
        n = {
            1154: (e, n, t) => {
                var i = {};
                (t.r(i),
                    t.d(i, { mouse: () => E, off: () => h, on: () => w, onResize: () => g, onScaleUpdated: () => p }));
                var r = {};
                (t.r(r),
                    t.d(r, {
                        events: () => i,
                        getMouseGlobalPosition: () => P,
                        getSize: () => x,
                        graphicsQuality: () => T,
                        playSound: () => y,
                        setRTPC: () => _,
                    }));
                var o = {};
                (t.r(o), t.d(o, { getBgUrl: () => M, getTextureUrl: () => k }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => q,
                        addPreloadTexture: () => U,
                        arabic2roman: () => ue,
                        children: () => o,
                        displayStatus: () => V,
                        displayStatusIs: () => ce,
                        events: () => F,
                        extraSize: () => de,
                        forceTriggerMouseMove: () => ae,
                        freezeTextureBeforeResize: () => Y,
                        getBrowserTexturePath: () => W,
                        getDisplayStatus: () => se,
                        getFontNames: () => le,
                        getScale: () => Z,
                        getSize: () => X,
                        getViewGlobalPosition: () => K,
                        isEventHandled: () => oe,
                        isFocused: () => ie,
                        pxToRem: () => ee,
                        remToPx: () => ne,
                        resize: () => J,
                        sendEvent: () => H,
                        setAnimateWindow: () => te,
                        setEventHandled: () => re,
                        setInputPaddingsRem: () => $,
                        setSidePaddingsRem: () => Q,
                        whenTutorialReady: () => ve,
                    }));
                var s = t(7363),
                    l = t.n(s),
                    u = t(1533),
                    c = t.n(u),
                    d = t(6483),
                    v = t.n(d);
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
                    p = m('self.onScaleUpdated'),
                    w = (e, n) => engine.on(e, n),
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
                    function i() {
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
                    const r = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const o = `mouse${n}`,
                                        a = b[n]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, s),
                                        i(),
                                        () => {
                                            r &&
                                                (a(),
                                                window.removeEventListener(o, s),
                                                (e.listeners -= 1),
                                                i(),
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
                            ((e.enabled = !1), i());
                        },
                        enable() {
                            ((e.enabled = !0), i());
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
                function x(e = 'px') {
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
                    z = { play: Object.assign({}, O, { sound: y }), setRTPC: _ },
                    A = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    j = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function C(e) {
                    let n = '';
                    for (let t = j.length - 1; t >= 0; t--) for (; e >= j[t]; ) ((n += A[t]), (e -= j[t]));
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function k(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function M(e, n, t) {
                    return `url(${k(e, n, t)})`;
                }
                const V = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    F = {
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
                    L = 16,
                    G = 32,
                    B = 64,
                    I = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const r = n.args,
                                o = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        i,
                                        r = {},
                                        o = Object.keys(e);
                                    for (i = 0; i < o.length; i++) ((t = o[i]), n.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(n, N);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((i = r),
                                              Object.entries(i).map(([e, n]) => {
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
                        var i;
                    },
                    H = {
                        close(e) {
                            I('popover' === e ? D : G);
                        },
                        minimize() {
                            I(B);
                        },
                        move(e) {
                            I(L, { isMouseEvent: !0, on: e });
                        },
                    };
                function U(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function $(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function W(e, n, t, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, i);
                }
                function q(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function Q(e) {
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
                function ie() {
                    return viewEnv.isFocused();
                }
                function re() {
                    return viewEnv.setEventHandled();
                }
                function oe() {
                    return viewEnv.isEventHandled();
                }
                function ae() {
                    viewEnv.forceTriggerMouseMove();
                }
                function se() {
                    return viewEnv.getShowingStatus();
                }
                const le = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ue = C,
                    ce = Object.keys(V).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === V[n]), e), {}),
                    de = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ve = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : F.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    me = { view: a, client: r, sound: z };
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
                const ge = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    pe = ['children', 'className', 'theme'];
                function we() {
                    return (
                        (we =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                }
                                return e;
                            }),
                        we.apply(this, arguments)
                    );
                }
                const he = l().forwardRef(function (e, n) {
                        let t = e.children,
                            i = e.className,
                            r = e.theme,
                            o = void 0 === r ? 'default' : r,
                            a = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    i,
                                    r = {},
                                    o = Object.keys(e);
                                for (i = 0; i < o.length; i++) ((t = o[i]), n.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, pe);
                        const u = fe(),
                            c = l().useRef(null);
                        var d;
                        return (
                            (d = () => {
                                u.run(() => {
                                    const e = c.current;
                                    if (!e) return;
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    me.view.resize(n, t);
                                    const i = window.getComputedStyle(e);
                                    me.view.setSidePaddingsRem({
                                        left: parseInt(i.getPropertyValue('padding-left'), 10),
                                        top: parseInt(i.getPropertyValue('padding-top'), 10),
                                        right: parseInt(i.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(i.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(d, []),
                            l().createElement(
                                'div',
                                we({}, a, {
                                    className: v()(ge.base, ge[`base__theme-${o}`], i),
                                    ref: function (e) {
                                        ((c.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                                    },
                                }),
                                l().createElement('div', { className: ge.decorator }, t),
                            )
                        );
                    }),
                    be = 'App_base_e7',
                    Ee = 'App_topBlock_f3',
                    ye = 'App_bottomBlock_ce',
                    _e = 'App_title_38',
                    xe = 'App_subTitle_5d',
                    Pe = 'App_description_f5',
                    Re = 'App_list_89',
                    Te = 'App_item_3b',
                    Se = 'App_divider_f7',
                    Oe = R.strings.achievements_page.tooltips.WTR.info,
                    ze = [Oe.list.text1(), Oe.list.text2(), Oe.list.text3(), Oe.list.text4()],
                    Ae = () =>
                        l().createElement(
                            he,
                            null,
                            l().createElement(
                                'div',
                                { className: be },
                                l().createElement(
                                    'div',
                                    { className: Ee },
                                    l().createElement('div', { className: _e }, Oe.title.main()),
                                    l().createElement('div', { className: Pe }, Oe.description.main()),
                                ),
                                l().createElement(
                                    'div',
                                    { className: ye },
                                    l().createElement('div', { className: Se }),
                                    l().createElement('div', { className: xe }, Oe.title.about()),
                                    l().createElement('div', null, Oe.description.about()),
                                    l().createElement(
                                        'div',
                                        { className: Re },
                                        ze.map((e, n) => l().createElement('div', { className: Te, key: n }, e)),
                                    ),
                                    l().createElement('div', null, Oe.caption()),
                                ),
                            ),
                        );
                engine.whenReady.then(() => {
                    c().render(l().createElement(Ae, null), document.getElementById('root'));
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
    function i(e) {
        var r = t[e];
        if (void 0 !== r) return r.exports;
        var o = (t[e] = { exports: {} });
        return (n[e](o, o.exports, i), o.exports);
    }
    ((i.m = n),
        (e = []),
        (i.O = (n, t, r, o) => {
            if (!t) {
                var a = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [t, r, o] = e[c], s = !0, l = 0; l < t.length; l++)
                        (!1 & o || a >= o) && Object.keys(i.O).every((e) => i.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((s = !1), o < a && (a = o));
                    if (s) {
                        e.splice(c--, 1);
                        var u = r();
                        void 0 !== u && (n = u);
                    }
                }
                return n;
            }
            o = o || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
            e[c] = [t, r, o];
        }),
        (i.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return (i.d(n, { a: n }), n);
        }),
        (i.d = (e, n) => {
            for (var t in n) i.o(n, t) && !i.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (i.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (i.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (i.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (i.j = 924),
        (() => {
            var e = { 924: 0 };
            i.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        o,
                        [a, s, l] = t,
                        u = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in s) i.o(s, r) && (i.m[r] = s[r]);
                        if (l) var c = l(i);
                    }
                    for (n && n(t); u < a.length; u++) ((o = a[u]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
                    return i.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var r = i.O(void 0, [549], () => i(1154));
    r = i.O(r);
})();
