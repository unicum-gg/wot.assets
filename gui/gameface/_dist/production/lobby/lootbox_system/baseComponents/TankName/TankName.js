(() => {
    'use strict';
    var e,
        t = {
            3495: (e, t, i) => {
                i.d(t, { Y: () => m });
                var r = i(3138),
                    n = i(7363),
                    a = i(1043),
                    o = i(5262);
                const l = r.O.client.getSize('rem'),
                    s = l.width,
                    d = l.height,
                    u = Object.assign({ width: s, height: d }, (0, o.T)(s, d, a.j)),
                    m = (0, n.createContext)(u);
            },
            1039: (e, t, i) => {
                i(3138), i(6536), i(7363), i(3495), i(1043), i(5262);
            },
            6010: (e, t, i) => {
                var r = i(7363),
                    n = i(7382),
                    a = i(3495);
                const o = ['children'];
                const l = (e) => {
                    let t = e.children,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var i,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (i = a[r]), t.indexOf(i) >= 0 || (n[i] = e[i]);
                            return n;
                        })(e, o);
                    const l = (0, r.useContext)(a.Y),
                        s = l.extraLarge,
                        d = l.large,
                        u = l.medium,
                        m = l.small,
                        g = l.extraSmall,
                        c = l.extraLargeWidth,
                        h = l.largeWidth,
                        E = l.mediumWidth,
                        p = l.smallWidth,
                        S = l.extraSmallWidth,
                        v = l.extraLargeHeight,
                        x = l.largeHeight,
                        f = l.mediumHeight,
                        w = l.smallHeight,
                        P = l.extraSmallHeight,
                        _ = { extraLarge: v, large: x, medium: f, small: w, extraSmall: P };
                    if (i.extraLarge || i.large || i.medium || i.small || i.extraSmall) {
                        if (i.extraLarge && s) return t;
                        if (i.large && d) return t;
                        if (i.medium && u) return t;
                        if (i.small && m) return t;
                        if (i.extraSmall && g) return t;
                    } else {
                        if (i.extraLargeWidth && c) return (0, n.H)(t, i, _);
                        if (i.largeWidth && h) return (0, n.H)(t, i, _);
                        if (i.mediumWidth && E) return (0, n.H)(t, i, _);
                        if (i.smallWidth && p) return (0, n.H)(t, i, _);
                        if (i.extraSmallWidth && S) return (0, n.H)(t, i, _);
                        if (
                            !(i.extraLargeWidth || i.largeWidth || i.mediumWidth || i.smallWidth || i.extraSmallWidth)
                        ) {
                            if (i.extraLargeHeight && v) return t;
                            if (i.largeHeight && x) return t;
                            if (i.mediumHeight && f) return t;
                            if (i.smallHeight && w) return t;
                            if (i.extraSmallHeight && P) return t;
                        }
                    }
                    return null;
                };
                l.defaultProps = {
                    extraLarge: !1,
                    large: !1,
                    medium: !1,
                    small: !1,
                    extraSmall: !1,
                    extraLargeWidth: !1,
                    largeWidth: !1,
                    mediumWidth: !1,
                    smallWidth: !1,
                    extraSmallWidth: !1,
                    extraLargeHeight: !1,
                    largeHeight: !1,
                    mediumHeight: !1,
                    smallHeight: !1,
                    extraSmallHeight: !1,
                };
                (0, r.memo)(l);
            },
            7382: (e, t, i) => {
                i.d(t, { H: () => r });
                const r = (e, t, i) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && i.extraLarge) ||
                          (t.largeHeight && i.large) ||
                          (t.mediumHeight && i.medium) ||
                          (t.smallHeight && i.small) ||
                          (t.extraSmallHeight && i.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, i) => {
                i(6010), i(1039), i(3495);
            },
            1043: (e, t, i) => {
                i.d(t, { j: () => r });
                const r = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, i) => {
                var r;
                function n(e, t, i) {
                    const r = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.width:
                                    return t.extraLarge.weight;
                                case e >= t.large.width && e < t.extraLarge.width:
                                    return t.large.weight;
                                case e >= t.medium.width && e < t.large.width:
                                    return t.medium.weight;
                                case e >= t.small.width && e < t.medium.width:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(e, i),
                        n = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.height:
                                    return t.extraLarge.weight;
                                case e >= t.large.height && e < t.extraLarge.height:
                                    return t.large.weight;
                                case e >= t.medium.height && e < t.large.height:
                                    return t.medium.weight;
                                case e >= t.small.height && e < t.medium.height:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(t, i),
                        a = Math.min(r, n);
                    return {
                        extraLarge: a === i.extraLarge.weight,
                        large: a === i.large.weight,
                        medium: a === i.medium.weight,
                        small: a === i.small.weight,
                        extraSmall: a === i.extraSmall.weight,
                        extraLargeWidth: r === i.extraLarge.weight,
                        largeWidth: r === i.large.weight,
                        mediumWidth: r === i.medium.weight,
                        smallWidth: r === i.small.weight,
                        extraSmallWidth: r === i.extraSmall.weight,
                        extraLargeHeight: n === i.extraLarge.weight,
                        largeHeight: n === i.large.weight,
                        mediumHeight: n === i.medium.weight,
                        smallHeight: n === i.small.weight,
                        extraSmallHeight: n === i.extraSmall.weight,
                    };
                }
                i.d(t, { T: () => n }),
                    (function (e) {
                        (e.extraLarge = 'extraLarge'),
                            (e.large = 'large'),
                            (e.medium = 'medium'),
                            (e.small = 'small'),
                            (e.extraSmall = 'extraSmall'),
                            (e.extraLargeWidth = 'extraLargeWidth'),
                            (e.largeWidth = 'largeWidth'),
                            (e.mediumWidth = 'mediumWidth'),
                            (e.smallWidth = 'smallWidth'),
                            (e.extraSmallWidth = 'extraSmallWidth'),
                            (e.extraLargeHeight = 'extraLargeHeight'),
                            (e.largeHeight = 'largeHeight'),
                            (e.mediumHeight = 'mediumHeight'),
                            (e.smallHeight = 'smallHeight'),
                            (e.extraSmallHeight = 'extraSmallHeight');
                    })(r || (r = {}));
            },
            2862: (e, t, i) => {
                let r, n, a, o, l, s, d, u;
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
                })(r || (r = {})),
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
                    })(n || (n = {})),
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
                    })(a || (a = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(o || (o = {})),
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
                    })(l || (l = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(s || (s = {})),
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
                    })(d || (d = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(u || (u = {}));
            },
            527: (e, t, i) => {
                i.r(t),
                    i.d(t, { mouse: () => u, off: () => s, on: () => l, onResize: () => a, onScaleUpdated: () => o });
                var r = i(2472),
                    n = i(1176);
                const a = (0, r.E)('clientResized'),
                    o = (0, r.E)('self.onScaleUpdated'),
                    l = (e, t) => engine.on(e, t),
                    s = (e, t) => engine.off(e, t),
                    d = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const u = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function i() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', i))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', i))
                            : (0, n.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, i) => (
                            (t[i] = (function (t) {
                                return (i) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const a = `mouse${t}`,
                                        o = d[t]((e) => i([e, 'outside']));
                                    function l(e) {
                                        i([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, l),
                                        r(),
                                        () => {
                                            n &&
                                                (o(),
                                                window.removeEventListener(a, l),
                                                (e.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(i)),
                            t
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
                            e.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, i) => {
                i.r(t),
                    i.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => o,
                        getSize: () => a,
                        graphicsQuality: () => l,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    });
                var r = i(527),
                    n = i(2493);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const l = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, i) => {
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                i.d(t, { R: () => r });
            },
            2493: (e, t, i) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function n(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((i) => {
                        console.error(`setRTPC('${e}', '${t}'): `, i);
                    });
                }
                i.d(t, { E: () => n, G: () => r });
            },
            2472: (e, t, i) => {
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                i.d(t, { E: () => r });
            },
            3138: (e, t, i) => {
                i.d(t, { O: () => a });
                var r = i(5959),
                    n = i(514);
                const a = { view: i(7641), client: r, sound: n.ZP };
            },
            514: (e, t, i) => {
                i.d(t, { ZP: () => o });
                var r = i(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(n).reduce((e, t) => ((e[t] = () => (0, r.playSound)(n[t])), e), {}),
                    o = { play: Object.assign({}, a, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            3722: (e, t, i) => {
                function r(e, t, i = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, i);
                }
                function n(e, t, i) {
                    return `url(${r(e, t, i)})`;
                }
                i.r(t), i.d(t, { getBgUrl: () => n, getTextureUrl: () => r });
            },
            6112: (e, t, i) => {
                i.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, i) => {
                i.d(t, { U: () => n });
                var r = i(2472);
                const n = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, i) => {
                i.r(t),
                    i.d(t, {
                        addModelObserver: () => m,
                        addPreloadTexture: () => s,
                        arabic2roman: () => b,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => B,
                        events: () => o.U,
                        extraSize: () => L,
                        forceTriggerMouseMove: () => T,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => R,
                        getFontNames: () => y,
                        getScale: () => S,
                        getSize: () => c,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => _,
                        isFocused: () => w,
                        pxToRem: () => v,
                        remToPx: () => x,
                        resize: () => h,
                        sendEvent: () => l.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => P,
                        setInputPaddingsRem: () => d,
                        setSidePaddingsRem: () => g,
                        whenTutorialReady: () => O,
                    });
                var r = i(9690),
                    n = i(3722),
                    a = i(6112),
                    o = i(6538),
                    l = i(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function u(e, t, i, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, i, r);
                }
                function m(e, t, i) {
                    return viewEnv.addDataChangedCallback(e, t, i);
                }
                function g(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function c(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function h(e, t, i = 'px') {
                    return 'rem' === i ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: x(t.x), y: x(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function S() {
                    return viewEnv.getScale();
                }
                function v(e) {
                    return viewEnv.pxToRem(e);
                }
                function x(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function w() {
                    return viewEnv.isFocused();
                }
                function P() {
                    return viewEnv.setEventHandled();
                }
                function _() {
                    return viewEnv.isEventHandled();
                }
                function T() {
                    viewEnv.forceTriggerMouseMove();
                }
                function R() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    b = r.cg,
                    B = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    L = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    O = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, i) => {
                i.d(t, { qP: () => d });
                const r = ['args'];
                const n = 2,
                    a = 16,
                    o = 32,
                    l = 64,
                    s = (e, t) => {
                        const i = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var i,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (i = a[r]), t.indexOf(i) >= 0 || (n[i] = e[i]);
                                    return n;
                                })(t, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: i, type: e }, o, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const i = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: i, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: i, name: e, bool: t };
                                                      default:
                                                          return { __Type: i, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: i, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: i, type: e });
                        var n;
                    },
                    d = {
                        close(e) {
                            s('popover' === e ? n : o);
                        },
                        minimize() {
                            s(l);
                        },
                        move(e) {
                            s(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            6536: (e, t, i) => {
                i(7363);
            },
            5415: (e, t, i) => {
                i(7363), i(7739);
                var r = i(1043);
                let n, a, o;
                !(function (e) {
                    (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.j.small.width)] = 'Small'),
                        (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                        (e[(e.Large = r.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                })(n || (n = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                    })(a || (a = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge');
                    })(o || (o = {}));
            },
            9690: (e, t, i) => {
                i.d(t, { cg: () => a });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let t = '';
                    for (let i = n.length - 1; i >= 0; i--) for (; e >= n[i]; ) (t += r[i]), (e -= n[i]);
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            6845: (e, t, i) => {
                i(6483), i(5415), i(9690), i(7363), i(3905);
            },
            3905: (e, t, i) => {
                var r = i(114);
                let n, a, o;
                !(function (e) {
                    (e.EntryPoint = 'ENTRY_POINT'),
                        (e.InfoPage = 'INFO_PAGE'),
                        (e.Rewards = 'REWARDS'),
                        (e.HasBoxesView = 'HAS_BOXES_VIEW');
                })(n || (n = {})),
                    (function (e) {
                        (e.Videos = 'videos'),
                            (e.Images = 'images'),
                            (e.Texts = 'texts'),
                            (e.Sounds = 'sounds'),
                            (e.DynamicVideos = 'dynamicVideos'),
                            (e.DynamicImages = 'dynamicImages'),
                            (e.DynamicTexts = 'dynamicTexts');
                    })(a || (a = {})),
                    (function (e) {
                        e.InfoPage = 'infoPage';
                    })(o || (o = {}));
                r.tB.attachment;
            },
            114: (e, t, i) => {
                i.d(t, { tB: () => r });
                i(2862);
                const r = {
                    vehicles: 'vehicles',
                    customizations: 'customizations',
                    attachment: 'attachment',
                    basic: 'basic',
                    plus: 'plus',
                    premium: 'premium',
                    premiumPlus: 'premium_plus',
                    items: 'items',
                    blueprints: 'blueprints',
                    blueprintsAny: 'blueprintsAny',
                    finalBlueprints: 'finalBlueprints',
                    randomNationalBlueprint: 'randomNationalBlueprint',
                    tokens: 'tokens',
                    styleProgress: 'styleProgress',
                    crewBooks: 'crewBooks',
                    randomNationalBrochure: 'randomNationalBrochure',
                    randomNationalGuide: 'randomNationalGuide',
                    randomNationalCrewBook: 'randomNationalCrewBook',
                    crewSkins: 'crewSkins',
                    goodies: 'goodies',
                    groups: 'groups',
                    dossierBadge: 'dossier_badge',
                    dossierAchievement: 'dossier_achievement',
                    xp: 'xp',
                    xpFactor: 'xpFactor',
                    creditsFactor: 'creditsFactor',
                    crystal: 'crystal',
                    tankmenXPFactor: 'tankmenXPFactor',
                    dailyXPFactor: 'dailyXPFactor',
                    freeXPFactor: 'freeXPFactor',
                    tmanToken: 'tmanToken',
                    battlePassSelectToken: 'battlePassSelectToken',
                    premiumTank: 'premiumTank',
                    styleProgressToken: 'styleProgressToken',
                    lootBox: 'lootBox',
                    collectionItem: 'collectionItem',
                };
            },
            7363: (e) => {
                e.exports = React;
            },
        },
        i = {};
    function r(e) {
        var n = i[e];
        if (void 0 !== n) return n.exports;
        var a = (i[e] = { exports: {} });
        return t[e](a, a.exports, r), a.exports;
    }
    (r.m = t),
        (e = []),
        (r.O = (t, i, n, a) => {
            if (!i) {
                var o = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [i, n, a] = e[u], l = !0, s = 0; s < i.length; s++)
                        (!1 & a || o >= a) && Object.keys(r.O).every((e) => r.O[e](i[s]))
                            ? i.splice(s--, 1)
                            : ((l = !1), a < o && (o = a));
                    if (l) {
                        e.splice(u--, 1);
                        var d = n();
                        void 0 !== d && (t = d);
                    }
                }
                return t;
            }
            a = a || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
            e[u] = [i, n, a];
        }),
        (r.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, { a: t }), t;
        }),
        (r.d = (e, t) => {
            for (var i in t) r.o(t, i) && !r.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
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
        (r.j = 35),
        (() => {
            var e = { 35: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, i) => {
                    var n,
                        a,
                        [o, l, s] = i,
                        d = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (n in l) r.o(l, n) && (r.m[n] = l[n]);
                        if (s) var u = s(r);
                    }
                    for (t && t(i); d < o.length; d++) (a = o[d]), r.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return r.O(u);
                },
                i = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
        })();
    var n = r.O(void 0, [866], () => r(6845));
    n = r.O(n);
})();
