(() => {
    'use strict';
    var e,
        t = {
            395: (e, t, n) => {
                var r = {};
                n.r(r),
                    n.d(r, { mouse: () => E, off: () => v, on: () => m, onResize: () => d, onScaleUpdated: () => p });
                var o = {};
                n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => b,
                        getSize: () => P,
                        graphicsQuality: () => T,
                        playSound: () => f,
                        setRTPC: () => _,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => B, getTextureUrl: () => D });
                var a = {};
                n.r(a),
                    n.d(a, {
                        addModelObserver: () => X,
                        addPreloadTexture: () => L,
                        arabic2roman: () => ie,
                        children: () => i,
                        displayStatus: () => A,
                        displayStatusIs: () => ae,
                        events: () => k,
                        extraSize: () => se,
                        forceTriggerMouseMove: () => ne,
                        freezeTextureBeforeResize: () => Y,
                        getBrowserTexturePath: () => j,
                        getDisplayStatus: () => re,
                        getFontNames: () => oe,
                        getScale: () => H,
                        getSize: () => W,
                        getViewGlobalPosition: () => Q,
                        isEventHandled: () => te,
                        isFocused: () => K,
                        pxToRem: () => $,
                        remToPx: () => Z,
                        resize: () => V,
                        sendEvent: () => z,
                        setAnimateWindow: () => J,
                        setEventHandled: () => ee,
                        setInputPaddingsRem: () => F,
                        setSidePaddingsRem: () => q,
                        whenTutorialReady: () => le,
                    });
                var s = n(483),
                    l = n.n(s);
                function c(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function u(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const d = c('clientResized'),
                    p = c('self.onScaleUpdated'),
                    m = (e, t) => engine.on(e, t),
                    v = (e, t) => engine.off(e, t),
                    g = { down: c('mousedown'), up: c('mouseup'), move: c('mousemove') };
                const E = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && u(!1);
                    }
                    function n() {
                        e.enabled && u(!0);
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
                            : u(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${t}`,
                                        a = g[t]((e) => n([e, 'outside']));
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
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
                        },
                        enableOutside() {
                            e.enabled && u(!0);
                        },
                        disableOutside() {
                            e.enabled && u(!1);
                        },
                    });
                })();
                function f(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function _(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function P(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const T = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    h = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    y = Object.keys(h).reduce((e, t) => ((e[t] = () => f(h[t])), e), {}),
                    S = { play: Object.assign({}, y, { sound: f }), setRTPC: _ },
                    w = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    O = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function x(e) {
                    let t = '';
                    for (let n = O.length - 1; n >= 0; n--) for (; e >= O[n]; ) (t += w[n]), (e -= O[n]);
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function D(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function B(e, t, n) {
                    return `url(${D(e, t, n)})`;
                }
                const A = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    k = {
                        onTextureFrozen: c('self.onTextureFrozen'),
                        onTextureReady: c('self.onTextureReady'),
                        onDomBuilt: c('self.onDomBuilt'),
                        onLoaded: c('self.onLoaded'),
                        onDisplayChanged: c('self.onShowingStatusChanged'),
                        onFocusUpdated: c('self.onFocusChanged'),
                        children: {
                            onAdded: c('children.onAdded'),
                            onLoaded: c('children.onLoaded'),
                            onRemoved: c('children.onRemoved'),
                            onAttached: c('children.onAttached'),
                            onTextureReady: c('children.onTextureReady'),
                            onRequestPosition: c('children.requestPosition'),
                        },
                    },
                    C = ['args'];
                const U = 2,
                    I = 16,
                    N = 32,
                    M = 64,
                    G = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, C);
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
                    z = {
                        close(e) {
                            G('popover' === e ? U : N);
                        },
                        minimize() {
                            G(M);
                        },
                        move(e) {
                            G(I, { isMouseEvent: !0, on: e });
                        },
                    };
                function L(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function F(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function j(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function X(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function q(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function W(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function V(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function Q(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: Z(t.x), y: Z(t.y) };
                }
                function Y() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function H() {
                    return viewEnv.getScale();
                }
                function $(e) {
                    return viewEnv.pxToRem(e);
                }
                function Z(e) {
                    return viewEnv.remToPx(e);
                }
                function J(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function K() {
                    return viewEnv.isFocused();
                }
                function ee() {
                    return viewEnv.setEventHandled();
                }
                function te() {
                    return viewEnv.isEventHandled();
                }
                function ne() {
                    viewEnv.forceTriggerMouseMove();
                }
                function re() {
                    return viewEnv.getShowingStatus();
                }
                const oe = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ie = x,
                    ae = Object.keys(A).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === A[t]), e), {}),
                    se = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    le = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : k.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ce = { view: a, client: o, sound: S };
                var ue = n(363),
                    de = n.n(ue);
                function pe() {
                    const e = (0, ue.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, ue.useEffect)(() => t, []),
                        (0, ue.useMemo)(
                            () => ({
                                run: (t) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                t(), (e.current = 0);
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
                function ge() {
                    return (
                        (ge =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        ge.apply(this, arguments)
                    );
                }
                const Ee = de().forwardRef(function (e, t) {
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
                            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o;
                        })(e, ve);
                    const s = pe(),
                        c = de().useRef(null);
                    var u;
                    return (
                        (u = () => {
                            s.run(() => {
                                const e = c.current;
                                if (!e) return;
                                const t = e.scrollWidth,
                                    n = e.scrollHeight;
                                ce.view.resize(t, n);
                                const r = window.getComputedStyle(e);
                                ce.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, ue.useEffect)(u, []),
                        de().createElement(
                            'div',
                            ge({}, a, {
                                className: l()(me.base, me[`base__theme-${i}`], r),
                                ref: function (e) {
                                    (c.current = e), 'function' == typeof t ? t(e) : t && (t.current = e);
                                },
                            }),
                            de().createElement('div', { className: me.decorator }, n),
                        )
                    );
                });
                var fe = n(533),
                    _e = n.n(fe);
                let Pe, be, Te, he, ye, Se, we, Re, Oe;
                !(function (e) {
                    (e.Items = 'items'),
                        (e.Equipment = 'equipment'),
                        (e.Xp = 'xp'),
                        (e.XpFactor = 'xpFactor'),
                        (e.Blueprints = 'blueprints'),
                        (e.BlueprintsAny = 'blueprintsAny'),
                        (e.Goodies = 'goodies'),
                        (e.Berths = 'berths'),
                        (e.Slots = 'slots'),
                        (e.Tokens = 'tokens'),
                        (e.CrewSkins = 'crewSkins'),
                        (e.CrewBooks = 'crewBooks'),
                        (e.Customizations = 'customizations'),
                        (e.CreditsFactor = 'creditsFactor'),
                        (e.Tankman = 'tankman'),
                        (e.Tankwoman = 'tankwoman'),
                        (e.TankmenXp = 'tankmenXP'),
                        (e.TankmenXpFactor = 'tankmenXPFactor'),
                        (e.FreeXpFactor = 'freeXPFactor'),
                        (e.BattleToken = 'battleToken'),
                        (e.PremiumUniversal = 'premium_universal'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Crystal = 'crystal'),
                        (e.FreeXp = 'freeXP'),
                        (e.Premium = 'premium'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.BattlePassPoints = 'battlePassPoints'),
                        (e.BattlePassSelectToken = 'battlePassSelectToken'),
                        (e.BattlePassTicket = 'lootBox_commonTicket'),
                        (e.BattlePassTaler = 'bptaler'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.ModernizedDevicesT1Gift = 'modernized_devices_t1_gift'),
                        (e.ModernizedDevicesT2Gift = 'modernized_devices_t2_gift'),
                        (e.ModernizedDevicesT3Gift = 'modernized_devices_t3_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.EquipCoin = 'equipCoin'),
                        (e.LootBox = 'lootBox'),
                        (e.BrCoin = 'brcoin');
                })(Pe || (Pe = {})),
                    (function (e) {
                        (e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.Vehicles = 'vehicles'),
                            (e.Customizations = 'customizations'),
                            (e.Blueprints = 'blueprints'),
                            (e.BlueprintsAny = 'blueprintsAny'),
                            (e.BlueprintsFinal = 'finalBlueprints'),
                            (e.Goodies = 'goodies'),
                            (e.CrewSkins = 'crewSkins'),
                            (e.Xp = 'xp'),
                            (e.XpFactor = 'xpFactor'),
                            (e.FreeXp = 'freeXP'),
                            (e.FreeXPFactor = 'freeXPFactor'),
                            (e.TankmenXP = 'tankmenXP'),
                            (e.TankmenXPFactor = 'tankmenXPFactor'),
                            (e.DailyXPFactor = 'dailyXPFactor'),
                            (e.CreditsFactor = 'creditsFactor'),
                            (e.Items = 'items'),
                            (e.StrBonus = 'strBonus'),
                            (e.Groups = 'groups'),
                            (e.Berths = 'berths'),
                            (e.Slots = 'slots'),
                            (e.Meta = 'meta'),
                            (e.Tokens = 'tokens'),
                            (e.Dossier = 'dossier'),
                            (e.OneOf = 'oneof'),
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.BadgesGroup = 'badgesGroup'),
                            (e.Entitlements = 'entitlements'),
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement'),
                            (e.EquipCoin = 'equipCoin');
                    })(be || (be = {})),
                    (function (e) {
                        (e.Big = 'big'),
                            (e.Small = 'small'),
                            (e.Mini = 'mini'),
                            (e.S600x450 = 's600x450'),
                            (e.S400x300 = 's400x300'),
                            (e.S296x222 = 's296x222'),
                            (e.S232x174 = 's232x174'),
                            (e.S180x135 = 's180x135'),
                            (e.S128x100 = 's128x100'),
                            (e.S80x80 = 's80x80'),
                            (e.S64x64 = 's64x64'),
                            (e.S48x48 = 's48x48');
                    })(Te || (Te = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(he || (he = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(ye || (ye = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Se || (Se = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(we || (we = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(Re || (Re = {})),
                    (function (e) {
                        (e[(e.Inactive = 0)] = 'Inactive'),
                            (e[(e.Active = 1)] = 'Active'),
                            (e[(e.Canceled = 2)] = 'Canceled');
                    })(Oe || (Oe = {}));
                var xe = n(515);
                function De(e) {
                    return e;
                }
                function Be() {
                    return !1;
                }
                console.log;
                var Ae = n(174);
                function ke(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ce(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return Ce(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Ce(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const Ue = (e) => (0 === e ? window : window.subViews.get(e));
                var Ie = n(946);
                const Ne = ((e, t) => {
                        const n = (0, ue.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: i, mocks: a }) {
                                const s = (0, ue.useRef)([]),
                                    l = (n, r, o) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = Ue,
                                                context: r = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? o.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = o.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const o = n(t),
                                                        i = r.split('.').reduce((e, t) => e[t], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (n, i) => {
                                                        const s = 'string' == typeof i ? `${r}.${i}` : r,
                                                            l = ce.view.addModelObserver(s, t, !0);
                                                        return o.set(l, n), e && n(a(i)), l;
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, t) => {
                                                        const n = a(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = a(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, n = ke(o.keys()); !(e = n()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            l =
                                                'real' === n
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == o ? void 0 : o.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === n ? (null == o ? void 0 : o.getter(e)) : l.readByPath(e),
                                            u = (e) => s.current.push(e),
                                            d = e({
                                                mode: n,
                                                readByPath: c,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            o = Ae.LO.box(r, { equals: Be });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, Ae.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            o = Ae.LO.box(r, { equals: Be });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, Ae.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = c(t);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, t) => ((e[t] = Ae.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, Ae.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                o[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = e,
                                                                i = Object.entries(o),
                                                                a = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = Ae.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, Ae.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                a[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: u,
                                            }),
                                            p = { mode: n, model: d, externalModel: l, cleanup: u };
                                        return {
                                            model: d,
                                            controls: 'mocks' === n && o ? o.controls(p) : t(p),
                                            externalModel: l,
                                            mode: n,
                                        };
                                    },
                                    c = (0, ue.useRef)(!1),
                                    u = (0, ue.useState)(r),
                                    d = u[0],
                                    p = u[1],
                                    m = (0, ue.useState)(() => l(r, o, a)),
                                    v = m[0],
                                    g = m[1];
                                return (
                                    (0, ue.useEffect)(() => {
                                        c.current ? g(l(d, o, a)) : (c.current = !0);
                                    }, [a, d, o]),
                                    (0, ue.useEffect)(() => {
                                        p(r);
                                    }, [r]),
                                    (0, ue.useEffect)(
                                        () => () => {
                                            v.externalModel.dispose(), s.current.forEach((e) => e());
                                        },
                                        [v],
                                    ),
                                    de().createElement(n.Provider, { value: v }, i)
                                );
                            },
                            () => (0, ue.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    bonuses: e.array('bonuses', []),
                                    primitives: e.primitives(['nextCharge', 'expirationDate']),
                                },
                                n = (0, Ie.Om)(
                                    () => {
                                        return (
                                            (e = t.bonuses.get()),
                                            (n = De),
                                            Array.isArray(e)
                                                ? e.map(n)
                                                : e.map((e, t, r) => n(null == e ? void 0 : e.value, t, r))
                                        );
                                        var e, n;
                                    },
                                    { equals: Be },
                                );
                            return Object.assign({ computes: { getBonuses: n } }, t);
                        },
                        () => {},
                    ),
                    Me = Ne[0],
                    Ge = Ne[1],
                    ze = 'WotPlusTooltipApp_base_e0',
                    Le = 'WotPlusTooltipApp_headerBlock_55',
                    Fe = 'WotPlusTooltipApp_headerTitle_8e',
                    je = 'WotPlusTooltipApp_headerDesc_f7',
                    Xe = 'WotPlusTooltipApp_decorator_a3',
                    qe = 'WotPlusTooltipApp_gridBase_b7',
                    We = 'WotPlusTooltipApp_gridElement_18',
                    Ve = 'WotPlusTooltipApp_bonusImg_2a',
                    Qe = 'WotPlusTooltipApp_bonusName_f0',
                    Ye = 'WotPlusTooltipApp_statusBlock_d8',
                    He = 'WotPlusTooltipApp_status_e3',
                    $e = 'WotPlusTooltipApp_status__activated_ca',
                    Ze = 'WotPlusTooltipApp_status__suspended_a8',
                    Je = 'WotPlusTooltipApp_description_bd',
                    Ke = 'WotPlusTooltipApp_chargeBlock_69',
                    et = 'WotPlusTooltipApp_chargeText_54',
                    tt = 'WotPlusTooltipApp_chargeTime_29',
                    nt = () => R.strings.subscription.subscriptionCardTooltip,
                    rt = { [Oe.Inactive]: nt().desc.available(), [Oe.Canceled]: nt().desc.canceled() },
                    ot = {
                        [Oe.Active]: nt().active(),
                        [Oe.Inactive]: nt().available(),
                        [Oe.Canceled]: nt().canceled(),
                    },
                    it = () => R.images.gui.maps.icons.subscription.tooltip,
                    at = (e) => {
                        const t = e.state,
                            n = e.nextCharge,
                            r = e.expirationDate;
                        return t === Oe.Active && n
                            ? de().createElement(
                                  'div',
                                  { className: Ke },
                                  de().createElement('span', { className: et }, nt().chargeTime()),
                                  de().createElement('span', { className: tt }, n),
                              )
                            : [Oe.Canceled, Oe.Active].includes(t) && r
                              ? de().createElement(
                                    'div',
                                    { className: Ke },
                                    de().createElement('span', { className: et }, nt().activeUntil()),
                                    de().createElement('span', { className: tt }, r),
                                )
                              : null;
                    },
                    st = (0, xe.Pi)(() => {
                        const e = Ge().model,
                            t = e.root.get().state,
                            n = e.primitives.nextCharge.get(),
                            r = e.primitives.expirationDate.get(),
                            o = l()(He, t === Oe.Active && $e, t === Oe.Canceled && Ze),
                            i = ((e) => e.map((e) => ({ name: e.name, value: e.label, valueType: he.STRING })))(
                                e.computes.getBonuses(),
                            );
                        return de().createElement(
                            'div',
                            { className: ze },
                            de().createElement(
                                'div',
                                { className: Le },
                                de().createElement('span', { className: Fe }, nt().headerTitle()),
                                de().createElement('span', { className: je }, nt().headerDescription()),
                            ),
                            de().createElement(
                                'div',
                                { className: Xe },
                                de().createElement(
                                    'div',
                                    { className: qe, style: { '--column-size': Math.ceil(i.length / 2) } },
                                    i.map(
                                        (e, t) =>
                                            e.name in it() &&
                                            de().createElement(
                                                'div',
                                                { className: We, key: t },
                                                de().createElement('div', {
                                                    className: Ve,
                                                    style: { backgroundImage: `url(${it()[e.name]()})` },
                                                }),
                                                de().createElement('span', { className: Qe }, e.value),
                                            ),
                                    ),
                                ),
                            ),
                            de().createElement(
                                'div',
                                { className: Ye },
                                de().createElement('span', { className: o }, ot[t]),
                                de().createElement(at, { state: t, nextCharge: n, expirationDate: r }),
                                t !== Oe.Active && de().createElement('span', { className: Je }, rt[t]),
                            ),
                        );
                    }),
                    lt = (0, ue.memo)(st);
                engine.whenReady.then(() => {
                    _e().render(
                        de().createElement(Ee, null, de().createElement(Me, null, de().createElement(lt, null))),
                        document.getElementById('root'),
                    );
                });
            },
            363: (e) => {
                e.exports = React;
            },
            533: (e) => {
                e.exports = ReactDOM;
            },
        },
        n = {};
    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var i = (n[e] = { exports: {} });
        return t[e](i, i.exports, r), i.exports;
    }
    (r.m = t),
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
                        var c = o();
                        void 0 !== c && (t = c);
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
            return r.d(t, { a: t }), t;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (r.j = 865),
        (() => {
            var e = { 865: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        i,
                        [a, s, l] = n,
                        c = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (l) var u = l(r);
                    }
                    for (t && t(n); c < a.length; c++) (i = a[c]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var o = r.O(void 0, [174], () => r(395));
    o = r.O(o);
})();
