(() => {
    'use strict';
    var __webpack_modules__ = {
            2372: (e, t, o) => {
                var n = o(6179),
                    i = o.n(n),
                    r = o(4179);
                class s extends i().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? r.B3.GOLD : r.B3.INTEGRAL;
                        const t = r.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                s.defaultProps = { format: 'integral' };
            },
            2862: (e, t, o) => {
                let n, i, r, s, a, _, l;
                (o.d(t, { E4: () => n }),
                    (function (e) {
                        ((e.Items = 'items'),
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
                            (e.Currency = 'currency'),
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
                            (e.SelectableBonus = 'selectableBonus'),
                            (e.StyleProgressToken = 'styleProgressToken'),
                            (e.TmanToken = 'tmanToken'),
                            (e.NaturalCover = 'naturalCover'),
                            (e.BpCoin = 'bpcoin'),
                            (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                            (e.NewYearFillers = 'ny22Fillers'),
                            (e.NewYearInvoice = 'newYearInvoice'),
                            (e.NewYearToyFragments = 'ny22ToyFragments'),
                            (e.NewYearSlot = 'newYearSlot'),
                            (e.BonusX5 = 'battle_bonus_x5'),
                            (e.CrewBonusX3 = 'crew_bonus_x3'),
                            (e.Vehicles = 'vehicles'),
                            (e.EpicSelectToken = 'epicSelectToken'),
                            (e.CollectionItem = 'collectionItem'),
                            (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                            (e.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                            (e.BattleBoosterGift = 'battleBooster_gift'),
                            (e.CosmicLootboxSilver = 'lootBoxToken'),
                            (e.CosmicLootboxCommon = 'cosmic_2024_2'),
                            (e.Branch = 'branch'),
                            (e.VehicleSelect = 'vehicleSelect'),
                            (e.StyleProgress = 'styleProgress'),
                            (e.ParagonsUnlocks = 'paragonsUnlocks'),
                            (e.HistoricalBattleDiscount25 = 'historical_battles_main_discount'),
                            (e.LootBoxToken = 'lootBoxToken'),
                            (e.GoldenTicket = 'birthday2025_golden_ticket'),
                            (e.PostStamp = 'giftsystem_4_stamp'),
                            (e.Quests = 'quests'),
                            (e.ArmoryCoin = 'armory_coin'),
                            (e.PremiumPlusUniversal = 'premium_plus_universal'),
                            (e.DogTagType = 'dogTagComponents'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.Gold = 'gold'),
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
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement'));
                    })(i || (i = {})),
                    (function (e) {
                        ((e.Big = 'big'),
                            (e.Small = 'small'),
                            (e.Mini = 'mini'),
                            (e.S600x450 = 's600x450'),
                            (e.S400x300 = 's400x300'),
                            (e.S296x222 = 's296x222'),
                            (e.S232x174 = 's232x174'),
                            (e.S180x135 = 's180x135'),
                            (e.S128x100 = 's128x100'),
                            (e.S80x80 = 's80x80'),
                            (e.S48x48 = 's48x48'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(s || (s = {})),
                    (function (e) {
                        ((e.BATTLE_BOOSTER = 'battleBooster'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(a || (a = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(_ || (_ = {})),
                    (function (e) {
                        ((e.BATTLE_BOOSTER = 'battleBooster'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(l || (l = {})));
            },
            729: (e, t, o) => {
                (o(2372), o(6179));
                var n = o(2862);
                let i;
                (n.E4.Items,
                    n.E4.Equipment,
                    n.E4.Xp,
                    n.E4.XpFactor,
                    n.E4.Blueprints,
                    n.E4.BlueprintsAny,
                    n.E4.Goodies,
                    n.E4.Berths,
                    n.E4.Slots,
                    n.E4.Tokens,
                    n.E4.CrewSkins,
                    n.E4.CrewBooks,
                    n.E4.Customizations,
                    n.E4.CreditsFactor,
                    n.E4.TankmenXp,
                    n.E4.TankmenXpFactor,
                    n.E4.FreeXpFactor,
                    n.E4.BattleToken,
                    n.E4.PremiumUniversal,
                    n.E4.NaturalCover,
                    n.E4.BpCoin,
                    n.E4.BattlePassSelectToken,
                    n.E4.BattlaPassFinalAchievement,
                    n.E4.BattleBadge,
                    n.E4.BonusX5,
                    n.E4.CrewBonusX3,
                    n.E4.NewYearFillers,
                    n.E4.NewYearInvoice,
                    n.E4.EpicSelectToken,
                    n.E4.Comp7TokenWeeklyReward,
                    n.E4.Comp7TokenCouponReward,
                    n.E4.BattleBoosterGift,
                    n.E4.CosmicLootboxCommon,
                    n.E4.CosmicLootboxSilver,
                    n.E4.SelectableBonus,
                    n.E4.GoldenTicket,
                    n.E4.PostStamp,
                    n.E4.PremiumPlusUniversal,
                    n.E4.Gold,
                    n.E4.Credits,
                    n.E4.Crystal,
                    n.E4.FreeXp,
                    n.E4.BattlePassPoints,
                    n.E4.PremiumPlus,
                    n.E4.Premium,
                    (function (e) {
                        ((e.s16 = '16'),
                            (e.s32 = '32'),
                            (e.s48 = '48'),
                            (e.s66 = '66'),
                            (e.s80 = '80'),
                            (e.s116 = '116'),
                            (e.s296 = '296'),
                            (e.s360 = '360'),
                            (e.s400 = '400'),
                            (e.s600 = '600'));
                    })(i || (i = {})));
            },
            7078: (e, t, o) => {
                (o(6179), o(2056));
            },
            3415: (e, t, o) => {
                (o(6179), o(7078), o(6373), o(2056));
            },
            6373: (e, t, o) => {
                (o(2056), o(6179), R.views.common.tooltip_window.simple_tooltip_content);
            },
            2056: (e, t, o) => {
                (o(4179), o(6179));
            },
            527: (e, t, o) => {
                (o.r(t), o.d(t, { mouse: () => a, onResize: () => r }));
                var n = o(2472),
                    i = o(1176);
                const r = (0, n.E)('clientResized'),
                    s = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    a = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, i.R)(!1);
                        }
                        function o() {
                            e.enabled && (0, i.R)(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', o))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', o))
                                : (0, i.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (t, o) => (
                                (t[o] = (function (t) {
                                    return (o) => {
                                        e.listeners += 1;
                                        let i = !0;
                                        const r = `mouse${t}`,
                                            a = s[t]((e) => o([e, 'outside']));
                                        function _(e) {
                                            o([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, _),
                                            n(),
                                            () => {
                                                i &&
                                                    (a(),
                                                    window.removeEventListener(r, _),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (i = !1));
                                            }
                                        );
                                    };
                                })(o)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, r, {
                            disable() {
                                ((e.enabled = !1), n());
                            },
                            enable() {
                                ((e.enabled = !0), n());
                            },
                            enableOutside() {
                                e.enabled && (0, i.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, i.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, t, o) => {
                (o.r(t),
                    o.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => i,
                        graphicsQuality: () => s,
                    }));
                var n = o(527);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, o) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                o.d(t, { R: () => n });
            },
            2472: (e, t, o) => {
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                o.d(t, { E: () => n });
            },
            3138: (e, t, o) => {
                o.d(t, { O: () => i });
                var n = o(5959);
                const i = { view: o(7641), client: n };
            },
            3722: (e, t, o) => {
                function n(e, t, o = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, o);
                }
                function i(e, t, o) {
                    return `url(${n(e, t, o)})`;
                }
                (o.r(t), o.d(t, { getBgUrl: () => i, getTextureUrl: () => n }));
            },
            6112: (e, t, o) => {
                o.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, o) => {
                o.d(t, { U: () => i });
                var n = o(2472);
                const i = {
                    onTextureFrozen: (0, n.E)('self.onTextureFrozen'),
                    onTextureReady: (0, n.E)('self.onTextureReady'),
                    onDomBuilt: (0, n.E)('self.onDomBuilt'),
                    onLoaded: (0, n.E)('self.onLoaded'),
                    onDisplayChanged: (0, n.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, n.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, n.E)('children.onAdded'),
                        onLoaded: (0, n.E)('children.onLoaded'),
                        onRemoved: (0, n.E)('children.onRemoved'),
                        onAttached: (0, n.E)('children.onAttached'),
                        onTextureReady: (0, n.E)('children.onTextureReady'),
                        onRequestPosition: (0, n.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, o) => {
                (o.r(t),
                    o.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => a,
                        children: () => n,
                        displayStatus: () => i.W,
                        displayStatusIs: () => R,
                        events: () => r.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => S,
                        freezeTextureBeforeResize: () => m,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => O,
                        getScale: () => v,
                        getSize: () => u,
                        getViewGlobalPosition: () => p,
                        isEventHandled: () => g,
                        isFocused: () => h,
                        pxToRem: () => w,
                        remToPx: () => b,
                        resize: () => E,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => P,
                        setEventHandled: () => T,
                        setInputPaddingsRem: () => _,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => k,
                    }));
                var n = o(3722),
                    i = o(6112),
                    r = o(6538),
                    s = o(8566);
                function a(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, o, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, o, n);
                }
                function c(e, t, o) {
                    return viewEnv.addDataChangedCallback(e, t, o);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, o = 'px') {
                    return 'rem' === o ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function p(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
                }
                function m() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function v() {
                    return viewEnv.getScale();
                }
                function w(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function P(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function T() {
                    return viewEnv.setEventHandled();
                }
                function g() {
                    return viewEnv.isEventHandled();
                }
                function S() {
                    viewEnv.forceTriggerMouseMove();
                }
                function O() {
                    return viewEnv.getShowingStatus();
                }
                const R = Object.keys(i.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === i.W[t]), e),
                        {},
                    ),
                    f = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, o) => {
                o.d(t, { qP: () => r });
                const n = ['args'],
                    i = (e, t) => {
                        const o = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var o,
                                        n,
                                        i = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((o = r[n]), t.indexOf(o) >= 0 || (i[o] = e[o]));
                                    return i;
                                })(t, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: o, type: e }, s, {
                                          arguments:
                                              ((i = r),
                                              Object.entries(i).map(([e, t]) => {
                                                  const o = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: o, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: o, name: e, bool: t };
                                                      default:
                                                          return { __Type: o, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: o, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: o, type: e });
                        var i;
                    },
                    r = {
                        close(e) {
                            i('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            i(64);
                        },
                        move(e) {
                            i(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, o) => {
                let n, i;
                (o.d(t, { n: () => n }),
                    (function (e) {
                        ((e[(e.NONE = -1)] = 'NONE'),
                            (e[(e.ALT = 165)] = 'ALT'),
                            (e[(e.ENTER = 13)] = 'ENTER'),
                            (e[(e.ESCAPE = 27)] = 'ESCAPE'),
                            (e[(e.SPACE = 32)] = 'SPACE'),
                            (e[(e.END = 35)] = 'END'),
                            (e[(e.HOME = 36)] = 'HOME'),
                            (e[(e.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (e[(e.ARROW_UP = 38)] = 'ARROW_UP'),
                            (e[(e.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (e[(e.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (e[(e.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (e[(e.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (e[(e.PLUS = 187)] = 'PLUS'),
                            (e[(e.MINUS = 189)] = 'MINUS'),
                            (e[(e.PAGE_UP = 33)] = 'PAGE_UP'),
                            (e[(e.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (e[(e.BACKSPACE = 8)] = 'BACKSPACE'),
                            (e[(e.DELETE = 46)] = 'DELETE'),
                            (e[(e.TAB = 9)] = 'TAB'),
                            (e[(e.KEY_N = 78)] = 'KEY_N'),
                            (e[(e.KEY_0 = 48)] = 'KEY_0'),
                            (e[(e.KEY_1 = 49)] = 'KEY_1'),
                            (e[(e.KEY_2 = 50)] = 'KEY_2'),
                            (e[(e.KEY_3 = 51)] = 'KEY_3'),
                            (e[(e.KEY_4 = 52)] = 'KEY_4'),
                            (e[(e.KEY_5 = 53)] = 'KEY_5'),
                            (e[(e.KEY_6 = 54)] = 'KEY_6'),
                            (e[(e.KEY_7 = 55)] = 'KEY_7'),
                            (e[(e.KEY_8 = 56)] = 'KEY_8'),
                            (e[(e.KEY_9 = 57)] = 'KEY_9'),
                            (e[(e.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (e[(e.INSERT = 45)] = 'INSERT'),
                            (e[(e.F1 = 112)] = 'F1'),
                            (e[(e.F2 = 113)] = 'F2'),
                            (e[(e.F3 = 114)] = 'F3'),
                            (e[(e.F4 = 115)] = 'F4'),
                            (e[(e.F5 = 116)] = 'F5'),
                            (e[(e.F6 = 117)] = 'F6'),
                            (e[(e.F7 = 118)] = 'F7'),
                            (e[(e.F8 = 119)] = 'F8'),
                            (e[(e.F9 = 120)] = 'F9'),
                            (e[(e.F10 = 121)] = 'F10'),
                            (e[(e.F11 = 122)] = 'F11'),
                            (e[(e.F12 = 123)] = 'F12'),
                            (e[(e.SELECT = 93)] = 'SELECT'),
                            (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (e[(e.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (e[(e.STAR = 106)] = 'STAR'),
                            (e[(e.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (e[(e.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (e[(e.COMMA = 188)] = 'COMMA'),
                            (e[(e.DASH = 189)] = 'DASH'),
                            (e[(e.PERIOD = 190)] = 'PERIOD'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.ALT = 'Alt'),
                            (e.ALT_GRAPH = 'AltGraph'),
                            (e.CAPS_LOCK = 'CapsLock'),
                            (e.CONTROL = 'Control'),
                            (e.FN = 'Fn'),
                            (e.FN_LOCK = 'FnLock'),
                            (e.META = 'Meta'),
                            (e.NUM_LOCK = 'NumLock'),
                            (e.SCROLL_LOCK = 'ScrollLock'),
                            (e.SHIFT = 'Shift'),
                            (e.SYMBOL = 'Symbol'),
                            (e.SYMBOL_LOCK = 'SymbolLock'));
                    })(i || (i = {})));
            },
            1358: (e, t, o) => {
                o.d(t, { Z: () => r });
                var n = o(3138);
                class i {
                    constructor() {
                        ((this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (e) => {
                                this._views[e] &&
                                    (this._views[e].forEach((e) => {
                                        delete this._callbacks[e];
                                    }),
                                    delete this._views[e]);
                            }),
                            (this._callbacks = {}),
                            (this._views = {}),
                            (this._updateHandler = void 0));
                    }
                    static get instance() {
                        return (window.__dataTracker || (window.__dataTracker = new i()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, t, o = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, o, i);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  o > 0 && (this._views[o] ? this._views[o].push(r) : (this._views[o] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
                        );
                    }
                    removeCallback(e, t = 0) {
                        let o = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((o = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            o || console.error("Can't remove callback by id:", e),
                            o
                        );
                    }
                    _emmitDataChanged(e, t, o) {
                        o.forEach((o) => {
                            const n = this._callbacks[o];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                i.__instance = void 0;
                const r = i;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        ((this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                ((this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((e) => {
                                        e(this.data);
                                    }));
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                (this._addCallback(path),
                                    watchingFields.forEach((e) => {
                                        this._addCallback(path + '.' + e);
                                    }),
                                    this._notifyObservers());
                            }));
                    }
                    subscribe(e) {
                        (this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data));
                    }
                    unsubscribe(e) {
                        this.callbacks.delete(e);
                    }
                    destroy() {
                        (this.dataTracker.clear(), this.callbacks.clear());
                    }
                    _addCallback(e) {
                        this.dataTracker.addCallback(e, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            4179: (e, t, o) => {
                o.d(t, { B3: () => c, Z5: () => s, ry: () => P });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: o }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    o();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const o = e,
                            n = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== o || t !== n)),
                            this.removeMouseListener());
                    }
                    addMouseListener() {
                        this._listenMouse ||
                            (document.addEventListener('mousedown', this.onMouseDown), (this._listenMouse = !0));
                    }
                    removeMouseListener() {
                        this._listenMouse &&
                            0 === this.entries.length &&
                            (document.removeEventListener('mousedown', this.onMouseDown), (this._listenMouse = !1));
                    }
                }
                n.__instance = void 0;
                const i = n;
                var r = o(1358);
                const s = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, o) => userLocale.getTimeFormat(e, t, void 0 === o || o),
                        getTimeString: (e, t, o) => userLocale.getTimeString(e, t, void 0 === o || o),
                    };
                let _;
                var l;
                (((l = _ || (_ = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var p = o(5521),
                    m = o(3138);
                const v = ['args'];
                function w(e, t, o, n, i, r, s) {
                    try {
                        var a = e[r](s),
                            _ = a.value;
                    } catch (e) {
                        return void o(e);
                    }
                    a.done ? t(_) : Promise.resolve(_).then(n, i);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    P = (function () {
                        var e,
                            t =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var t = this,
                                        o = arguments;
                                    return new Promise(function (n, i) {
                                        var r = e.apply(t, o);
                                        function s(e) {
                                            w(r, n, i, s, a, 'next', e);
                                        }
                                        function a(e) {
                                            w(r, n, i, s, a, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    h = (e, t) => {
                        const o = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var o,
                                        n,
                                        i = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((o = r[n]), t.indexOf(o) >= 0 || (i[o] = e[o]));
                                    return i;
                                })(t, v);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: o, type: e }, r, {
                                          arguments:
                                              ((n = i),
                                              Object.entries(n).map(([e, t]) => {
                                                  const o = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          o.number = t;
                                                          break;
                                                      case 'boolean':
                                                          o.bool = t;
                                                          break;
                                                      default:
                                                          o.string = t.toString();
                                                  }
                                                  return o;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: o, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: o, type: e });
                        var n;
                    },
                    T = () => h(_.CLOSE),
                    g = (e, t) => {
                        e.keyCode === p.n.ESCAPE && t();
                    };
                var S = o(7572);
                const O = i.instance,
                    f = {
                        DataTracker: r.Z,
                        ViewModel: S.Z,
                        ViewEventType: _,
                        NumberFormatType: c,
                        RealFormatType: d,
                        TimeFormatType: u,
                        DateFormatType: E,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => h(_.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: T,
                        sendClosePopOverEvent: () => h(_.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, o = 0) => {
                            h(_.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: o, args: t });
                        },
                        sendShowPopOverEvent: (e, t, o, n, i = R.invalid('resId'), r) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                a = o.getBoundingClientRect(),
                                l = a.x,
                                c = a.y,
                                d = a.width,
                                u = a.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + s.x,
                                    y: m.O.view.pxToRem(c) + s.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(u),
                                };
                            h(_.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: i,
                                direction: t,
                                bbox: b(E),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => g(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, T);
                        },
                        handleViewEvent: h,
                        onBindingsReady: P,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(_.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(_.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(_.POP_OVER),
                        dumpViewModel: function e(t) {
                            const o = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const i = Object.prototype.toString.call(t[n]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = t[n];
                                        o[n] = [];
                                        for (let t = 0; t < i.length; t++) o[n].push({ value: e(i[t].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (o[n] = e(t[n]))
                                            : (o[n] = t[n]);
                                }
                            return o;
                        },
                        ClickOutsideManager: O,
                        SystemLocale: s,
                        UserLocale: a,
                    };
                window.ViewEnvHelper = f;
            },
            3458: (e, t, o) => {
                let n, i;
                (!(function (e) {
                    ((e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning'));
                })(n || (n = {})),
                    (function (e) {
                        ((e.Click = 'click'), (e.KeyDown = 'keydown'));
                    })(i || (i = {})));
            },
            1943: (e, t, o) => {
                (o(6179), o(3458));
            },
            4085: (e, t, o) => {
                (o(6483), o(6179), o(2372), o(3415), o(729), o(4891));
            },
            4380: (e, t, o) => {
                let n, i, r, s;
                (!(function (e) {
                    e.Lootbox = 'lootbox';
                })(n || (n = {})),
                    (function (e) {
                        ((e.TooltipWatched = 'tooltip_watched'),
                            (e.Click = 'click'),
                            (e.VideoStarted = 'video_started'),
                            (e.Show = 'show'));
                    })(i || (i = {})),
                    (function (e) {
                        ((e.Storage = 'storage'),
                            (e.Probability = 'probability'),
                            (e.Rewards = 'rewards'),
                            (e.LoseRewards = 'lose_rewards'),
                            (e.RewardVideo = 'reward_video'),
                            (e.Welcome = 'welcome'),
                            (e.LootBoxesShortStats = 'lootboxes_short_stats'),
                            (e.LootBoxesFullStats = 'lootboxes_full_stats'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.IconPossibleRewardGroup = 'icon_possible_reward_group'),
                            (e.CarouselLootbox = 'carousel_lootbox'),
                            (e.InfoIcon = 'info_icon'),
                            (e.ESCButton = 'esc_button'),
                            (e.BackButton = 'back_button'),
                            (e.ProbabilityPercent = 'probability_percent'),
                            (e.ProbabilityPercentWithGarant = 'probability_percent_with_garant'),
                            (e.ProbabilityReward = 'probability_reward'),
                            (e.MinorRewards = 'minor_rewards'),
                            (e.RewardVideo = 'reward_video'),
                            (e.RewardToopltip = 'reward_tooltip'),
                            (e.RewardRotationToopltip = 'reward_totation_tooltip'),
                            (e.ContinueButton = 'continue_button'),
                            (e.OpenOneMoreButton = 'open_one_more_button'),
                            (e.OpenMultiButton = 'open_multi_button'),
                            (e.OpenInHangarButton = 'open_in_hangar_button'),
                            (e.OKButton = 'ok_button'),
                            (e.CloseButton = 'close_button'),
                            (e.StatisticButton = 'statistic_button'),
                            (e.StatisticESCButton = 'statistic_esc_button'),
                            (e.statisticOutsideClick = 'statistic_outside_click'),
                            (e.DeadlineWidget = 'deadline_widget'),
                            (e.LootBoxesShortStatsTabs = 'lootboxes_short_stats_tabs'),
                            (e.LootBoxesShortStatsGroup = 'lootboxes_short_stats_group'),
                            (e.LootBoxesFullStatsSidebar = 'lootboxes_full_stats_sidebar'),
                            (e.lootBoxesFullStatsSelectAll = 'lootboxes_full_stats_select_all'),
                            (e.lootBoxesFullStatsSelect = 'lootboxes_full_stats_select'),
                            (e.lootBoxesFullStatsReward = 'lootboxes_full_stats_reward'));
                    })(s || (s = {})));
            },
            4891: (e, t, o) => {
                (o(1943), o(4380));
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var o = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e].call(o.exports, o, o.exports, __webpack_require__), o.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, o, n) => {
            if (!t) {
                var i = 1 / 0;
                for (_ = 0; _ < deferred.length; _++) {
                    for (var [t, o, n] = deferred[_], r = !0, s = 0; s < t.length; s++)
                        (!1 & n || i >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((r = !1), n < i && (i = n));
                    if (r) {
                        deferred.splice(_--, 1);
                        var a = o();
                        void 0 !== a && (e = a);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var _ = deferred.length; _ > 0 && deferred[_ - 1][2] > n; _--) deferred[_] = deferred[_ - 1];
            deferred[_] = [t, o, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var o in t)
                __webpack_require__.o(t, o) &&
                    !__webpack_require__.o(e, o) &&
                    Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (__webpack_require__.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (() => {
            var e = { 824: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, o) => {
                    var n,
                        i,
                        [r, s, a] = o,
                        _ = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (a) var l = a(__webpack_require__);
                    }
                    for (t && t(o); _ < r.length; _++)
                        ((i = r[_]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return __webpack_require__.O(l);
                },
                o = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(4085));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
