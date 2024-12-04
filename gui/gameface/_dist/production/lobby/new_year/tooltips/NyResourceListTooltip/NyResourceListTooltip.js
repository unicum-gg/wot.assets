(() => {
    'use strict';
    var e,
        n = {
            8491: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => y, off: () => b, on: () => w, onResize: () => f, onScaleUpdated: () => p });
                var a = {};
                t.r(a),
                    t.d(a, {
                        events: () => r,
                        getMouseGlobalPosition: () => T,
                        getSize: () => N,
                        graphicsQuality: () => P,
                        playSound: () => h,
                        setRTPC: () => E,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => C, getTextureUrl: () => A });
                var o = {};
                t.r(o),
                    t.d(o, {
                        addModelObserver: () => W,
                        addPreloadTexture: () => K,
                        children: () => i,
                        displayStatus: () => z,
                        displayStatusIs: () => se,
                        events: () => F,
                        extraSize: () => le,
                        forceTriggerMouseMove: () => ae,
                        freezeTextureBeforeResize: () => q,
                        getBrowserTexturePath: () => $,
                        getDisplayStatus: () => ie,
                        getFontNames: () => oe,
                        getScale: () => Q,
                        getSize: () => U,
                        getViewGlobalPosition: () => X,
                        isEventHandled: () => re,
                        isFocused: () => ne,
                        pxToRem: () => Z,
                        remToPx: () => J,
                        resize: () => Y,
                        sendEvent: () => I,
                        setAnimateWindow: () => ee,
                        setEventHandled: () => te,
                        setInputPaddingsRem: () => B,
                        setSidePaddingsRem: () => H,
                        whenTutorialReady: () => ce,
                    });
                var s = t(6179),
                    l = t.n(s),
                    c = t(493),
                    u = t.n(c),
                    d = t(6483),
                    m = t.n(d);
                function v(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function _(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const f = v('clientResized'),
                    p = v('self.onScaleUpdated'),
                    w = (e, n) => engine.on(e, n),
                    b = (e, n) => engine.off(e, n),
                    g = { down: v('mousedown'), up: v('mouseup'), move: v('mousemove') };
                const y = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && _(!1);
                    }
                    function t() {
                        e.enabled && _(!0);
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
                            : _(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${n}`,
                                        o = g[n]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        r(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(t)),
                            n
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
                        },
                        enableOutside() {
                            e.enabled && _(!0);
                        },
                        disableOutside() {
                            e.enabled && _(!1);
                        },
                    });
                })();
                function h(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function E(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function N(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function T(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const P = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    S = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    x = Object.keys(S).reduce((e, n) => ((e[n] = () => h(S[n])), e), {}),
                    O = { play: Object.assign({}, x, { sound: h }), setRTPC: E };
                function A(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function C(e, n, t) {
                    return `url(${A(e, n, t)})`;
                }
                const z = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    F = {
                        onTextureFrozen: v('self.onTextureFrozen'),
                        onTextureReady: v('self.onTextureReady'),
                        onDomBuilt: v('self.onDomBuilt'),
                        onLoaded: v('self.onLoaded'),
                        onDisplayChanged: v('self.onShowingStatusChanged'),
                        onFocusUpdated: v('self.onFocusChanged'),
                        children: {
                            onAdded: v('children.onAdded'),
                            onLoaded: v('children.onLoaded'),
                            onRemoved: v('children.onRemoved'),
                            onAttached: v('children.onAttached'),
                            onTextureReady: v('children.onTextureReady'),
                            onRequestPosition: v('children.requestPosition'),
                        },
                    },
                    M = ['args'];
                const G = 2,
                    j = 16,
                    k = 32,
                    D = 64,
                    L = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const a = n.args,
                                i = (function (e, n) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (n.indexOf(r) >= 0) continue;
                                            t[r] = e[r];
                                        }
                                    return t;
                                })(n, M);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((r = a),
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
                    I = {
                        close(e) {
                            L('popover' === e ? G : k);
                        },
                        minimize() {
                            L(D);
                        },
                        move(e) {
                            L(j, { isMouseEvent: !0, on: e });
                        },
                    },
                    V = 15;
                function K(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function B(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, V);
                }
                function $(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function W(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, V);
                }
                function U(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function Y(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function X(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: J(n.x), y: J(n.y) };
                }
                function q() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function Q() {
                    return viewEnv.getScale();
                }
                function Z(e) {
                    return viewEnv.pxToRem(e);
                }
                function J(e) {
                    return viewEnv.remToPx(e);
                }
                function ee(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function ne() {
                    return viewEnv.isFocused();
                }
                function te() {
                    return viewEnv.setEventHandled();
                }
                function re() {
                    return viewEnv.isEventHandled();
                }
                function ae() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ie() {
                    return viewEnv.getShowingStatus();
                }
                const oe = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    se = Object.keys(z).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === z[n]), e), {}),
                    le = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ce = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : F.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ue = { view: o, client: a, sound: O };
                function de() {
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
                const me = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ve = ['children', 'className', 'theme'];
                function _e() {
                    return (
                        (_e = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                  }
                                  return e;
                              }),
                        _e.apply(null, arguments)
                    );
                }
                const fe = l().forwardRef(function (e, n) {
                    let t = e.children,
                        r = e.className,
                        a = e.theme,
                        i = void 0 === a ? 'default' : a,
                        o = (function (e, n) {
                            if (null == e) return {};
                            var t = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (n.indexOf(r) >= 0) continue;
                                    t[r] = e[r];
                                }
                            return t;
                        })(e, ve);
                    const c = de(),
                        u = l().useRef(null);
                    var d;
                    return (
                        (d = () => {
                            c.run(() => {
                                const e = u.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                ue.view.resize(n, t);
                                const r = window.getComputedStyle(e);
                                ue.view.setSidePaddingsRem({
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
                            _e({}, o, {
                                className: m()(me.base, me[`base__theme-${i}`], r),
                                ref: function (e) {
                                    (u.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                },
                            }),
                            l().createElement('div', { className: me.decorator }, t),
                        )
                    );
                });
                let pe, we, be, ge, ye, he, Ee;
                !(function (e) {
                    (e.Undefined = 'undefined'),
                        (e.NewYear = 'NewYear'),
                        (e.Christmas = 'Christmas'),
                        (e.Fairytale = 'Fairytale'),
                        (e.Oriental = 'Oriental'),
                        (e.Soviet = 'soviet'),
                        (e.TraditionalWestern = 'traditionalWestern'),
                        (e.ModernWestern = 'modernWestern'),
                        (e.Asian = 'asian'),
                        (e.Mega = 'Mega'),
                        (e.GiftSystem = 'GiftSystem'),
                        (e.Cat = 'Cat'),
                        (e.Atm = 'Atm'),
                        (e.Gift2 = 'Gift2'),
                        (e.Bro = 'Bro'),
                        (e.Dog = 'Dog'),
                        (e.Surprise = 'Surprise');
                })(pe || (pe = {})),
                    (function (e) {
                        (e.Crystal = 'ny_crystal'),
                            (e.Emerald = 'ny_emerald'),
                            (e.Amber = 'ny_amber'),
                            (e.Iron = 'ny_iron'),
                            (e.AnyResource = 'anyResource');
                    })(we || (we = {})),
                    (function (e) {
                        (e.XP = 'xpFactor'),
                            (e.TankmenXP = 'tankmenXPFactor'),
                            (e.FreeXp = 'freeXPFactor'),
                            (e.Credits = 'creditsFactor');
                    })(be || (be = {})),
                    (function (e) {
                        (e.NewYear = 'NewYear'),
                            (e.Christmas = 'Christmas'),
                            (e.Fairytale = 'Fairytale'),
                            (e.Oriental = 'Oriental');
                    })(ge || (ge = {})),
                    (function (e) {
                        (e.Level1 = 'level1'), (e.Level2 = 'level2'), (e.Level3 = 'level3'), (e.Level4 = 'level4');
                    })(ye || (ye = {})),
                    (function (e) {
                        (e.Zero = 'zero'), (e.Number = 'number'), (e.Default = 'default');
                    })(he || (he = {})),
                    (function (e) {
                        (e.Undefined = 'undefined'),
                            (e.ToEvent = 'toEvent'),
                            (e.ToGuestD = 'toGuestD'),
                            (e.ToGuestC = 'toGuestC'),
                            (e.ToMarkertplace = 'toMarkertplace'),
                            (e.ToGiftmachine = 'toGiftmachine'),
                            (e.ToRewards = 'toRewards');
                    })(Ee || (Ee = {}));
                const Re = {
                    base: 'ResourceName_base_75',
                    base__reverse: 'ResourceName_base__reverse_1b',
                    name: 'ResourceName_name_de',
                    icon: 'ResourceName_icon_dc',
                    base__24: 'ResourceName_base__24_72',
                    base__ny_crystal: 'ResourceName_base__ny_crystal_a6',
                    base__ny_emerald: 'ResourceName_base__ny_emerald_ff',
                    base__ny_amber: 'ResourceName_base__ny_amber_d4',
                    base__ny_iron: 'ResourceName_base__ny_iron_d4',
                    base__48: 'ResourceName_base__48_61',
                };
                let Ne;
                !(function (e) {
                    (e.s24 = '24'), (e.s48 = '48'), (e.Default = '24');
                })(Ne || (Ne = {}));
                const Te = ({ type: e, isReverse: n, classNames: t, size: r = Ne.Default }) =>
                    l().createElement(
                        'div',
                        {
                            className: m()(
                                Re.base,
                                Re[`base__${r}`],
                                Re[`base__${e}`],
                                n && Re.base__reverse,
                                null == t ? void 0 : t.base,
                            ),
                        },
                        l().createElement('div', { className: m()(Re.icon, null == t ? void 0 : t.icon) }),
                        l().createElement(
                            'div',
                            { className: m()(Re.name, null == t ? void 0 : t.name) },
                            R.strings.ny.resource.type.$dyn(e),
                        ),
                    );
                var Pe = t(5677);
                const Se = {
                        base: 'RewardKitName_base_1e',
                        name: 'RewardKitName_name_30',
                        icon: 'RewardKitName_icon_9c',
                        base__NewYear: 'RewardKitName_base__NewYear_7a',
                        base__Christmas: 'RewardKitName_base__Christmas_c5',
                        base__Fairytale: 'RewardKitName_base__Fairytale_47',
                        base__Oriental: 'RewardKitName_base__Oriental_7e',
                    },
                    xe = ({ type: e, classNames: n }) =>
                        l().createElement(
                            'div',
                            { className: m()(Se.base, Se[`base__${e}`], null == n ? void 0 : n.base) },
                            l().createElement(
                                'div',
                                { className: m()(Se.name, null == n ? void 0 : n.name) },
                                R.strings.ny.rewardKit.$dyn(e),
                            ),
                            l().createElement('div', { className: m()(Se.icon, null == n ? void 0 : n.icon) }),
                        ),
                    Oe = 'App_base_57',
                    Ae = 'App_title_24',
                    Ce = 'App_resourceListWrapper_71',
                    ze = 'App_row_76',
                    Fe = 'App_rowItem_10',
                    Me = 'App_rowItem__right_47',
                    Ge = 'App_icon_af',
                    je = 'App_name_75',
                    ke = 'App_separator_04',
                    De = 'App_menuInfo_86',
                    Le = 'App_bottomSeparator_bc',
                    Ie = 'App_footer_71',
                    Ve = R.strings.ny.resourceListTooltip,
                    Ke = [
                        { rewardKit: ge.NewYear, resource: we.Crystal },
                        { rewardKit: ge.Christmas, resource: we.Emerald },
                        { rewardKit: ge.Oriental, resource: we.Amber },
                        { rewardKit: ge.Fairytale, resource: we.Iron },
                    ],
                    Be = () =>
                        l().createElement(
                            fe,
                            null,
                            l().createElement(
                                'div',
                                { className: Oe },
                                l().createElement('div', { className: Ae }, Ve.title()),
                                l().createElement(
                                    'div',
                                    { className: Ce },
                                    Ke.map(({ rewardKit: e, resource: n }, t) =>
                                        l().createElement(
                                            'div',
                                            { key: t, className: ze },
                                            l().createElement(xe, {
                                                type: e,
                                                classNames: { base: m()(Fe, Me), icon: Ge },
                                            }),
                                            l().createElement('div', { className: ke }),
                                            l().createElement(Te, {
                                                type: n,
                                                size: Ne.s48,
                                                classNames: { base: Fe, name: je },
                                            }),
                                        ),
                                    ),
                                ),
                                l().createElement(
                                    Pe.v,
                                    { classNames: { base: De, bottomSeparator: Le } },
                                    l().createElement(
                                        'div',
                                        { className: Ie },
                                        R.strings.ny.resourceTooltip.forShop.footer(),
                                    ),
                                ),
                            ),
                        );
                engine.whenReady.then(() => {
                    u().render(l().createElement(Be, null), document.getElementById('root'));
                });
            },
            5677: (e, n, t) => {
                t.d(n, { v: () => u });
                var r = t(6483),
                    a = t.n(r),
                    i = t(6179),
                    o = t.n(i);
                const s = 'MenuInfo_base_30',
                    l = 'MenuInfo_background_e4',
                    c = 'MenuInfo_separator_6e',
                    u = ({ children: e, classNames: n }) =>
                        o().createElement(
                            'div',
                            { className: a()(s, null == n ? void 0 : n.base) },
                            o().createElement('div', { className: c }),
                            o().createElement('div', { className: l }, e),
                            o().createElement('div', { className: a()(c, null == n ? void 0 : n.bottomSeparator) }),
                        );
            },
        },
        t = {};
    function r(e) {
        var a = t[e];
        if (void 0 !== a) return a.exports;
        var i = (t[e] = { exports: {} });
        return n[e](i, i.exports, r), i.exports;
    }
    (r.m = n),
        (e = []),
        (r.O = (n, t, a, i) => {
            if (!t) {
                var o = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [t, a, i] = e[u], s = !0, l = 0; l < t.length; l++)
                        (!1 & i || o >= i) && Object.keys(r.O).every((e) => r.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((s = !1), i < o && (o = i));
                    if (s) {
                        e.splice(u--, 1);
                        var c = a();
                        void 0 !== c && (n = c);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [t, a, i];
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
        (r.j = 2920),
        (() => {
            var e = { 2920: 0, 4445: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var a,
                        i,
                        [o, s, l] = t,
                        c = 0;
                    if (o.some((n) => 0 !== e[n])) {
                        for (a in s) r.o(s, a) && (r.m[a] = s[a]);
                        if (l) var u = l(r);
                    }
                    for (n && n(t); c < o.length; c++) (i = o[c]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(u);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var a = r.O(void 0, [8360], () => r(8491));
    a = r.O(a);
})();
