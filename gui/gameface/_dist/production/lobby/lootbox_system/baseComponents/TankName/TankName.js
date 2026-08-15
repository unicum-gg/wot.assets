(() => {
    'use strict';
    var e,
        t = {
            3495: (e, t, i) => {
                i.d(t, { Y: () => l });
                var n = i(3138),
                    r = i(7363),
                    a = i(1043),
                    o = i(5262);
                const s = (function (e = n.O.client.getSize('rem')) {
                        const t = e.width,
                            i = e.height;
                        return Object.assign({ width: t, height: i }, (0, o.T)(t, i, a.j));
                    })(),
                    l = (0, r.createContext)(s);
            },
            1039: (e, t, i) => {
                (i(3138), i(7363), i(3495));
            },
            6010: (e, t, i) => {
                var n = i(7363),
                    r = i(7382),
                    a = i(3495);
                const o = ['children'];
                (0, n.memo)((e) => {
                    let t = e.children,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var i,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((i = a[n]), t.indexOf(i) >= 0 || (r[i] = e[i]));
                            return r;
                        })(e, o);
                    const s = (0, n.useContext)(a.Y),
                        l = s.extraLarge,
                        d = s.large,
                        u = s.medium,
                        m = s.small,
                        g = s.extraSmall,
                        c = s.extraLargeWidth,
                        h = s.largeWidth,
                        E = s.mediumWidth,
                        p = s.smallWidth,
                        v = s.extraSmallWidth,
                        S = s.extraLargeHeight,
                        x = s.largeHeight,
                        w = s.mediumHeight,
                        f = s.smallHeight,
                        P = s.extraSmallHeight,
                        T = { extraLarge: S, large: x, medium: w, small: f, extraSmall: P };
                    if (i.extraLarge || i.large || i.medium || i.small || i.extraSmall) {
                        if (i.extraLarge && l) return t;
                        if (i.large && d) return t;
                        if (i.medium && u) return t;
                        if (i.small && m) return t;
                        if (i.extraSmall && g) return t;
                    } else {
                        if (i.extraLargeWidth && c) return (0, r.H)(t, i, T);
                        if (i.largeWidth && h) return (0, r.H)(t, i, T);
                        if (i.mediumWidth && E) return (0, r.H)(t, i, T);
                        if (i.smallWidth && p) return (0, r.H)(t, i, T);
                        if (i.extraSmallWidth && v) return (0, r.H)(t, i, T);
                        if (!(
                            i.extraLargeWidth ||
                            i.largeWidth ||
                            i.mediumWidth ||
                            i.smallWidth ||
                            i.extraSmallWidth
                        )) {
                            if (i.extraLargeHeight && S) return t;
                            if (i.largeHeight && x) return t;
                            if (i.mediumHeight && w) return t;
                            if (i.smallHeight && f) return t;
                            if (i.extraSmallHeight && P) return t;
                        }
                    }
                    return null;
                });
            },
            7382: (e, t, i) => {
                i.d(t, { H: () => n });
                const n = (e, t, i) =>
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
                (i(6010), i(1039), i(3495));
            },
            1043: (e, t, i) => {
                i.d(t, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, i) => {
                var n;
                function r(e, t, i) {
                    const n = (function (e, t) {
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
                        r = (function (e, t) {
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
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === i.extraLarge.weight,
                        large: a === i.large.weight,
                        medium: a === i.medium.weight,
                        small: a === i.small.weight,
                        extraSmall: a === i.extraSmall.weight,
                        extraLargeWidth: n === i.extraLarge.weight,
                        largeWidth: n === i.large.weight,
                        mediumWidth: n === i.medium.weight,
                        smallWidth: n === i.small.weight,
                        extraSmallWidth: n === i.extraSmall.weight,
                        extraLargeHeight: r === i.extraLarge.weight,
                        largeHeight: r === i.large.weight,
                        mediumHeight: r === i.medium.weight,
                        smallHeight: r === i.small.weight,
                        extraSmallHeight: r === i.extraSmall.weight,
                    };
                }
                (i.d(t, { T: () => r }),
                    (function (e) {
                        ((e.extraLarge = 'extraLarge'),
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
                            (e.extraSmallHeight = 'extraSmallHeight'));
                    })(n || (n = {})));
            },
            2862: (e, t, i) => {
                let n, r, a, o, s, l, d, u;
                (!(function (e) {
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
                        (e.BrCoin = 'brcoin'),
                        (e.Attachment = 'attachment'),
                        (e.Stamp = 'stamp'),
                        (e.WtEventLootbox = 'wtevent_lootBox'),
                        (e.WtEventTicket = 'wtevent_ticket'));
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
                            (e.Entitlements = 'entitlements'),
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement'),
                            (e.EquipCoin = 'equipCoin'));
                    })(r || (r = {})),
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
                            (e.S64x64 = 's64x64'),
                            (e.S48x48 = 's48x48'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(o || (o = {})),
                    (function (e) {
                        ((e.ATTACHMENT_RARE = 'rare'),
                            (e.ATTACHMENT_EPIC = 'epic'),
                            (e.ATTACHMENT_LEGENDARY = 'legendary'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(s || (s = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(l || (l = {})),
                    (function (e) {
                        ((e.ATTACHMENT_RARE = 'rare'),
                            (e.ATTACHMENT_EPIC = 'epic'),
                            (e.ATTACHMENT_LEGENDARY = 'legendary'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(d || (d = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(u || (u = {})));
                n.Attachment;
            },
            527: (e, t, i) => {
                (i.r(t),
                    i.d(t, { mouse: () => u, off: () => l, on: () => s, onResize: () => a, onScaleUpdated: () => o }));
                var n = i(2472),
                    r = i(1176);
                const a = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    d = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const u = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function i() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', i))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', i))
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, i) => (
                            (t[i] = (function (t) {
                                return (i) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${t}`,
                                        o = d[t]((e) => i([e, 'outside']));
                                    function s(e) {
                                        i([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        n(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(a, s),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
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
                            ((e.enabled = !1), n());
                        },
                        enable() {
                            ((e.enabled = !0), n());
                        },
                        enableOutside() {
                            e.enabled && (0, r.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, r.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, i) => {
                (i.r(t),
                    i.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => a,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var n = i(527),
                    r = i(2493);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, i) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                i.d(t, { R: () => n });
            },
            2493: (e, t, i) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((i) => {
                        console.error(`setRTPC('${e}', '${t}'): `, i);
                    });
                }
                i.d(t, { E: () => r, G: () => n });
            },
            2472: (e, t, i) => {
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                i.d(t, { E: () => n });
            },
            3138: (e, t, i) => {
                i.d(t, { O: () => o });
                var n = i(5959),
                    r = i(7698),
                    a = i(514);
                const o = { view: i(7641), client: n, sound: a.ZP, intl: r.N };
            },
            7698: (e, t, i) => {
                i.d(t, { N: () => n });
                const n = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, i) => {
                i.d(t, { ZP: () => o });
                var n = i(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, n.playSound)(r[t])), e), {}),
                    o = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, i) => {
                function n(e, t, i = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, i);
                }
                function r(e, t, i) {
                    return `url(${n(e, t, i)})`;
                }
                (i.r(t), i.d(t, { getBgUrl: () => r, getTextureUrl: () => n }));
            },
            6112: (e, t, i) => {
                i.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, i) => {
                i.d(t, { U: () => r });
                var n = i(2472);
                const r = {
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
            7641: (e, t, i) => {
                (i.r(t),
                    i.d(t, {
                        addModelObserver: () => m,
                        addPreloadTexture: () => l,
                        arabic2roman: () => b,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => L,
                        enableFullScreenModeSupported: () => D,
                        events: () => o.U,
                        extraSize: () => O,
                        forceTriggerMouseMove: () => _,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => R,
                        getExternalPaddingsRem: () => B,
                        getFontNames: () => y,
                        getScale: () => v,
                        getSize: () => c,
                        getViewGlobalPosition: () => E,
                        initExternalPaddings: () => U,
                        isEventHandled: () => T,
                        isFocused: () => f,
                        pxToRem: () => S,
                        remToPx: () => x,
                        resize: () => h,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => w,
                        setEventHandled: () => P,
                        setInputPaddingsRem: () => d,
                        setSidePaddingsRem: () => g,
                        whenTutorialReady: () => k,
                    }));
                var n = i(9690),
                    r = i(3722),
                    a = i(6112),
                    o = i(6538),
                    s = i(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function u(e, t, i, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, i, n);
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
                function v() {
                    return viewEnv.getScale();
                }
                function S(e) {
                    return viewEnv.pxToRem(e);
                }
                function x(e) {
                    return viewEnv.remToPx(e);
                }
                function w(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function P() {
                    return viewEnv.setEventHandled();
                }
                function T() {
                    return viewEnv.isEventHandled();
                }
                function _() {
                    viewEnv.forceTriggerMouseMove();
                }
                function R() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    b = n.cg;
                function B() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const L = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    O = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function D() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function U(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            i = t.top,
                            n = t.right,
                            r = t.bottom,
                            a = t.left;
                        (e.style.setProperty('--external-padding-top', `${i}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            8566: (e, t, i) => {
                i.d(t, { qP: () => d });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    o = 32,
                    s = 64,
                    l = (e, t) => {
                        const i = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var i,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((i = a[n]), t.indexOf(i) >= 0 || (r[i] = e[i]));
                                    return r;
                                })(t, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: i, type: e }, o, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
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
                        var r;
                    },
                    d = {
                        close(e) {
                            l('popover' === e ? r : o);
                        },
                        minimize() {
                            l(s);
                        },
                        move(e) {
                            l(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5415: (e, t, i) => {
                (i(7363), i(7739));
                var n = i(1043);
                let r, a, o;
                (!(function (e) {
                    ((e[(e.ExtraSmall = n.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = n.j.small.width)] = 'Small'),
                        (e[(e.Medium = n.j.medium.width)] = 'Medium'),
                        (e[(e.Large = n.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = n.j.extraLarge.width)] = 'ExtraLarge'));
                })(r || (r = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = n.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = n.j.small.width)] = 'Small'),
                            (e[(e.Medium = n.j.medium.width)] = 'Medium'),
                            (e[(e.Large = n.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = n.j.extraLarge.width)] = 'ExtraLarge'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = n.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = n.j.small.height)] = 'Small'),
                            (e[(e.Medium = n.j.medium.height)] = 'Medium'),
                            (e[(e.Large = n.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = n.j.extraLarge.height)] = 'ExtraLarge'));
                    })(o || (o = {})));
            },
            9690: (e, t, i) => {
                i.d(t, { cg: () => a });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let t = '';
                    for (let i = r.length - 1; i >= 0; i--) for (; e >= r[i];) ((t += n[i]), (e -= r[i]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            6845: (e, t, i) => {
                (i(6483), i(5415), i(9690), i(7363), i(3905));
            },
            3905: (e, t, i) => {
                var n = i(114);
                let r, a, o;
                (!(function (e) {
                    ((e.EntryPoint = 'ENTRY_POINT'),
                        (e.InfoPage = 'INFO_PAGE'),
                        (e.Rewards = 'REWARDS'),
                        (e.HasBoxesView = 'HAS_BOXES_VIEW'));
                })(r || (r = {})),
                    (function (e) {
                        ((e.Videos = 'videos'),
                            (e.Images = 'images'),
                            (e.Texts = 'texts'),
                            (e.Sounds = 'sounds'),
                            (e.DynamicVideos = 'dynamicVideos'),
                            (e.DynamicImages = 'dynamicImages'),
                            (e.DynamicTexts = 'dynamicTexts'));
                    })(a || (a = {})),
                    (function (e) {
                        e.InfoPage = 'infoPage';
                    })(o || (o = {})));
                n.tB.attachment;
            },
            114: (e, t, i) => {
                i.d(t, { tB: () => n });
                i(2862);
                const n = {
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
    function n(e) {
        var r = i[e];
        if (void 0 !== r) return r.exports;
        var a = (i[e] = { exports: {} });
        return (t[e](a, a.exports, n), a.exports);
    }
    ((n.m = t),
        (e = []),
        (n.O = (t, i, r, a) => {
            if (!i) {
                var o = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [i, r, a] = e[u], s = !0, l = 0; l < i.length; l++)
                        (!1 & a || o >= a) && Object.keys(n.O).every((e) => n.O[e](i[l]))
                            ? i.splice(l--, 1)
                            : ((s = !1), a < o && (o = a));
                    if (s) {
                        e.splice(u--, 1);
                        var d = r();
                        void 0 !== d && (t = d);
                    }
                }
                return t;
            }
            a = a || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
            e[u] = [i, r, a];
        }),
        (n.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (n.d(t, { a: t }), t);
        }),
        (n.d = (e, t) => {
            for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        }),
        (n.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (n.j = 35),
        (() => {
            var e = { 35: 0 };
            n.O.j = (t) => 0 === e[t];
            var t = (t, i) => {
                    var r,
                        a,
                        [o, s, l] = i,
                        d = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (r in s) n.o(s, r) && (n.m[r] = s[r]);
                        if (l) var u = l(n);
                    }
                    for (t && t(i); d < o.length; d++) ((a = o[d]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return n.O(u);
                },
                i = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i))));
        })());
    var r = n.O(void 0, [866], () => n(6845));
    r = n.O(r);
})();
