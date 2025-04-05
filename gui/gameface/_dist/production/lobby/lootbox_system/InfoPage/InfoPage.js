(() => {
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                'use strict';
                t.d(u, { u5: () => E });
                var r = t(6483),
                    n = t.n(r),
                    a = t(7727),
                    s = t(7363),
                    o = t.n(s),
                    i = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: c,
                    mixClass: E,
                    soundHover: d,
                    soundClick: A,
                    onMouseEnter: m,
                    onMouseMove: F,
                    onMouseDown: D,
                    onMouseUp: B,
                    onMouseLeave: _,
                    onClick: C,
                }) => {
                    const g = (0, s.useRef)(null),
                        h = (0, s.useState)(t),
                        p = h[0],
                        f = h[1],
                        v = (0, s.useState)(!1),
                        b = v[0],
                        w = v[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                p && null !== g.current && !g.current.contains(e.target) && f(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [p]),
                        (0, s.useEffect)(() => {
                            f(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: g,
                                className: n()(
                                    i.Z.base,
                                    i.Z[`base__${r}`],
                                    c && i.Z.base__disabled,
                                    u && i.Z[`base__${u}`],
                                    p && i.Z.base__focus,
                                    b && i.Z.base__highlightActive,
                                    E,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== d && (0, a.G)(d), m && m(e));
                                },
                                onMouseMove: function (e) {
                                    F && F(e);
                                },
                                onMouseUp: function (e) {
                                    c || (B && B(e), w(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== A && (0, a.G)(A),
                                        D && D(e),
                                        t && (c || (g.current && (g.current.focus(), f(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (_ && _(e), w(!1));
                                },
                                onClick: function (e) {
                                    c || (C && C(e));
                                },
                            },
                            r !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: i.Z.back }),
                                    o().createElement('span', { className: i.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: n()(i.Z.state, i.Z.state__default) },
                                o().createElement('span', { className: i.Z.stateDisabled }),
                                o().createElement('span', { className: i.Z.stateHighlightHover }),
                                o().createElement('span', { className: i.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: i.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const E = c;
            },
            2106: (e, u, t) => {
                'use strict';
                let r, n;
                t.d(u, { L: () => r }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(r || (r = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(n || (n = {}));
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => E });
                var r = t(3138),
                    n = t(7363),
                    a = t(1043),
                    s = t(5262);
                const o = r.O.client.getSize('rem'),
                    i = o.width,
                    l = o.height,
                    c = Object.assign({ width: i, height: l }, (0, s.T)(i, l, a.j)),
                    E = (0, n.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var r = t(3138),
                    n = t(6536),
                    a = t(7363),
                    s = t.n(a),
                    o = t(3495),
                    i = t(1043),
                    l = t(5262);
                const c = ({ children: e }) => {
                    const u = (0, a.useContext)(o.Y),
                        t = (0, a.useState)(u),
                        c = t[0],
                        E = t[1],
                        d = (0, a.useCallback)((e, u) => {
                            const t = r.O.view.pxToRem(e),
                                n = r.O.view.pxToRem(u);
                            E(Object.assign({ width: t, height: n }, (0, l.T)(t, n, i.j)));
                        }, []),
                        A = (0, a.useCallback)(() => {
                            const e = r.O.client.getSize('px');
                            d(e.width, e.height);
                        }, [d]);
                    (0, n.Z)(() => {
                        r.O.client.events.on('clientResized', d), r.O.client.events.on('self.onScaleUpdated', A);
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                r.O.client.events.off('clientResized', d),
                                    r.O.client.events.off('self.onScaleUpdated', A);
                            },
                            [d, A],
                        );
                    const m = (0, a.useMemo)(() => Object.assign({}, c), [c]);
                    return s().createElement(o.Y.Provider, { value: m }, e);
                };
            },
            6010: (e, u, t) => {
                'use strict';
                var r = t(7363),
                    n = t(7382),
                    a = t(3495);
                const s = ['children'];
                const o = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, s);
                    const o = (0, r.useContext)(a.Y),
                        i = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        E = o.small,
                        d = o.extraSmall,
                        A = o.extraLargeWidth,
                        m = o.largeWidth,
                        F = o.mediumWidth,
                        D = o.smallWidth,
                        B = o.extraSmallWidth,
                        _ = o.extraLargeHeight,
                        C = o.largeHeight,
                        g = o.mediumHeight,
                        h = o.smallHeight,
                        p = o.extraSmallHeight,
                        f = { extraLarge: _, large: C, medium: g, small: h, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && E) return u;
                        if (t.extraSmall && d) return u;
                    } else {
                        if (t.extraLargeWidth && A) return (0, n.H)(u, t, f);
                        if (t.largeWidth && m) return (0, n.H)(u, t, f);
                        if (t.mediumWidth && F) return (0, n.H)(u, t, f);
                        if (t.smallWidth && D) return (0, n.H)(u, t, f);
                        if (t.extraSmallWidth && B) return (0, n.H)(u, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && _) return u;
                            if (t.largeHeight && C) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && h) return u;
                            if (t.extraSmallHeight && p) return u;
                        }
                    }
                    return null;
                };
                o.defaultProps = {
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
                (0, r.memo)(o);
            },
            7382: (e, u, t) => {
                'use strict';
                t.d(u, { H: () => r });
                const r = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, u, t) => {
                'use strict';
                t.d(u, { YN: () => n.Y, ZN: () => r.Z });
                t(6010);
                var r = t(1039),
                    n = t(3495);
            },
            1043: (e, u, t) => {
                'use strict';
                t.d(u, { j: () => r });
                const r = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                'use strict';
                var r;
                function n(e, u, t) {
                    const r = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.width:
                                    return u.extraLarge.weight;
                                case e >= u.large.width && e < u.extraLarge.width:
                                    return u.large.weight;
                                case e >= u.medium.width && e < u.large.width:
                                    return u.medium.weight;
                                case e >= u.small.width && e < u.medium.width:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(e, t),
                        n = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.height:
                                    return u.extraLarge.weight;
                                case e >= u.large.height && e < u.extraLarge.height:
                                    return u.large.weight;
                                case e >= u.medium.height && e < u.large.height:
                                    return u.medium.weight;
                                case e >= u.small.height && e < u.medium.height:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(u, t),
                        a = Math.min(r, n);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
                    };
                }
                t.d(u, { T: () => n }),
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
            2862: (e, u, t) => {
                'use strict';
                let r, n, a, s, o, i, l, c;
                t.d(u, { E4: () => r, h2: () => a }),
                    (function (e) {
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
                    })(o || (o = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(i || (i = {})),
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
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(c || (c = {}));
            },
            926: (e) => {
                e.exports = {
                    SMALL_WIDTH: 'mediaSmallWidth',
                    MEDIUM_WIDTH: 'mediaMediumWidth',
                    LARGE_WIDTH: 'mediaLargeWidth',
                    EXTRA_LARGE_WIDTH: 'mediaExtraLargeWidth',
                    SMALL_HEIGHT: 'mediaSmallHeight',
                    MEDIUM_HEIGHT: 'mediaMediumHeight',
                    LARGE_HEIGHT: 'mediaLargeHeight',
                    EXTRA_LARGE_HEIGHT: 'mediaExtraLargeHeight',
                    SMALL: 'mediaSmall',
                    MEDIUM: 'mediaMedium',
                    LARGE: 'mediaLarge',
                    EXTRA_LARGE: 'mediaExtraLarge',
                };
            },
            527: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => i, on: () => o, onResize: () => a, onScaleUpdated: () => s });
                var r = t(2472),
                    n = t(1176);
                const a = (0, r.E)('clientResized'),
                    s = (0, r.E)('self.onScaleUpdated'),
                    o = (e, u) => engine.on(e, u),
                    i = (e, u) => engine.off(e, u),
                    l = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, n.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const a = `mouse${u}`,
                                        s = l[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        r(),
                                        () => {
                                            n &&
                                                (s(),
                                                window.removeEventListener(a, o),
                                                (e.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
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
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => r,
                        getMouseGlobalPosition: () => s,
                        getSize: () => a,
                        graphicsQuality: () => o,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    });
                var r = t(527),
                    n = t(2493);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => r });
            },
            2493: (e, u, t) => {
                'use strict';
                function r(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function n(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => n, G: () => r });
            },
            2472: (e, u, t) => {
                'use strict';
                function r(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => r });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => a });
                var r = t(5959),
                    n = t(514);
                const a = { view: t(7641), client: r, sound: n.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => o, hY: () => s });
                var r = t(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(n).reduce((e, u) => ((e[u] = () => (0, r.playSound)(n[u])), e), {}),
                    s = Object.assign({}, a, { sound: r.playSound }),
                    o = { play: s, setRTPC: r.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function r(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${r(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => r });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
                var r = t(2472);
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
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => i,
                        arabic2roman: () => y,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => x,
                        events: () => s.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => b,
                        getFontNames: () => w,
                        getScale: () => B,
                        getSize: () => A,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => f,
                        isFocused: () => h,
                        pxToRem: () => _,
                        remToPx: () => C,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => T,
                    });
                var r = t(9690),
                    n = t(3722),
                    a = t(6112),
                    s = t(6538),
                    o = t(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
                }
                function E(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function F(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: C(u.x), y: C(u.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function B() {
                    return viewEnv.getScale();
                }
                function _(e) {
                    return viewEnv.pxToRem(e);
                }
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function g(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    y = r.cg,
                    x = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    S = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const r = ['args'];
                const n = 2,
                    a = 16,
                    s = 32,
                    o = 64,
                    i = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof u) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: u };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: u };
                                                      default:
                                                          return { __Type: t, name: e, string: u.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? n : s);
                        },
                        minimize() {
                            i(o);
                        },
                        move(e) {
                            i(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var r = t(7363);
                const n = (e) => {
                    const u = (0, r.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { Aq: () => i, GS: () => l, cJ: () => s, fd: () => o });
                var r = t(7363),
                    n = t(7739),
                    a = t(1043);
                let s, o, i;
                !(function (e) {
                    (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = a.j.small.width)] = 'Small'),
                        (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                        (e[(e.Large = a.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.width)] = 'Small'),
                            (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                            (e[(e.Large = a.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                    })(o || (o = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.height)] = 'Small'),
                            (e[(e.Medium = a.j.medium.height)] = 'Medium'),
                            (e[(e.Large = a.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge');
                    })(i || (i = {}));
                const l = () => {
                    const e = (0, r.useContext)(n.YN),
                        u = e.width,
                        t = e.height,
                        a = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return s.ExtraLarge;
                                case e.large:
                                    return s.Large;
                                case e.medium:
                                    return s.Medium;
                                case e.small:
                                    return s.Small;
                                case e.extraSmall:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(e),
                        l = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return o.ExtraLarge;
                                case e.largeWidth:
                                    return o.Large;
                                case e.mediumWidth:
                                    return o.Medium;
                                case e.smallWidth:
                                    return o.Small;
                                case e.extraSmallWidth:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return i.ExtraLarge;
                                case e.largeHeight:
                                    return i.Large;
                                case e.mediumHeight:
                                    return i.Medium;
                                case e.smallHeight:
                                    return i.Small;
                                case e.extraSmallHeight:
                                    return i.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            5521: (e, u, t) => {
                'use strict';
                let r, n;
                t.d(u, { n: () => r }),
                    (function (e) {
                        (e[(e.NONE = -1)] = 'NONE'),
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
                            (e[(e.KEY_1 = 49)] = 'KEY_1'),
                            (e[(e.KEY_2 = 50)] = 'KEY_2'),
                            (e[(e.KEY_3 = 51)] = 'KEY_3'),
                            (e[(e.KEY_4 = 52)] = 'KEY_4'),
                            (e[(e.KEY_5 = 53)] = 'KEY_5'),
                            (e[(e.KEY_6 = 54)] = 'KEY_6'),
                            (e[(e.KEY_7 = 55)] = 'KEY_7'),
                            (e[(e.KEY_8 = 56)] = 'KEY_8'),
                            (e[(e.KEY_9 = 57)] = 'KEY_9');
                    })(r || (r = {})),
                    (function (e) {
                        (e.ALT = 'Alt'),
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
                            (e.SYMBOL_LOCK = 'SymbolLock');
                    })(n || (n = {}));
            },
            9690: (e, u, t) => {
                'use strict';
                t.d(u, { HG: () => o, cg: () => a });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let u = '';
                    for (let t = n.length - 1; t >= 0; t--) for (; e >= n[t]; ) (u += r[t]), (e -= n[t]);
                    return u;
                }
                const s = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    o = (e) => (s ? `${e}` : a(e));
            },
            2691: (e, u, t) => {
                'use strict';
                t.d(u, { R: () => r });
                const r = (e, u) => {
                    let t = e;
                    const r = u.split('.');
                    for (let e = 0; e < r.length; e++) {
                        if (!t) return '';
                        if (('string' != typeof t && (t = t.$dyn(r[e])), 'string' == typeof t)) return t;
                    }
                    return '';
                };
            },
            7727: (e, u, t) => {
                'use strict';
                function r(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                t.d(u, { G: () => r });
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var r = t(3138);
                class n {
                    constructor() {
                        (this._callbacks = void 0),
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
                            (this._updateHandler = void 0);
                    }
                    static get instance() {
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(e, t, n);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
                        );
                    }
                    removeCallback(e, u = 0) {
                        let t = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((t = viewEnv.removeDataChangedCallback(e, u)), delete this._callbacks[e]),
                            t || console.error("Can't remove callback by id:", e),
                            t
                        );
                    }
                    _emmitDataChanged(e, u, t) {
                        t.forEach((t) => {
                            const r = this._callbacks[t];
                            void 0 !== r && r(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const a = n;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9916);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((e) => {
                                        e(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((e) => {
                                        this._addCallback(path + '.' + e);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(e) {
                        this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data);
                    }
                    unsubscribe(e) {
                        this.callbacks.delete(e);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(e) {
                        this.dataTracker.addCallback(e, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            9916: (e, u, t) => {
                'use strict';
                t.d(u, { Gr: () => l, Z5: () => s.Z5, B0: () => o, ry: () => B });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let r = e.target;
                                    do {
                                        if (r === u) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            r = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== r)),
                            this.removeMouseListener();
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
                r.__instance = void 0;
                const n = r;
                var a = t(1358);
                var s = t(8613);
                let o;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(3138);
                const m = ['args'];
                function F(e, u, t, r, n, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(r, n);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    B = (function () {
                        var e,
                            u =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var u = this,
                                        t = arguments;
                                    return new Promise(function (r, n) {
                                        var a = e.apply(u, t);
                                        function s(e) {
                                            F(a, r, n, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            F(a, r, n, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    _ = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, m);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
                                                  const t = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof u) {
                                                      case 'number':
                                                          t.number = u;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = u;
                                                          break;
                                                      default:
                                                          t.string = u.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    C = () => _(o.CLOSE),
                    g = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var h = t(7572);
                const p = n.instance,
                    f = {
                        DataTracker: a.Z,
                        ViewModel: h.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => _(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => _(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            _(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, n = R.invalid('resId'), a) => {
                            const s = A.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                d = i.height,
                                m = {
                                    x: A.O.view.pxToRem(l) + s.x,
                                    y: A.O.view.pxToRem(c) + s.y,
                                    width: A.O.view.pxToRem(E),
                                    height: A.O.view.pxToRem(d),
                                };
                            _(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: D(m),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => g(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, C);
                        },
                        handleViewEvent: _,
                        onBindingsReady: B,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const r in u)
                                if (Object.prototype.hasOwnProperty.call(u, r)) {
                                    const n = Object.prototype.toString.call(u[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[r];
                                        t[r] = [];
                                        for (let u = 0; u < n.length; u++) t[r].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = e(u[r]))
                                            : (t[r] = u[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = f;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => a, Z5: () => r, cy: () => n });
                const r = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    a = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            3293: (e, u, t) => {
                'use strict';
                var r = {};
                t.r(r),
                    t.d(r, {
                        Area: () => ee,
                        Bar: () => K,
                        DefaultScroll: () => J,
                        Direction: () => N,
                        defaultSettings: () => M,
                        useHorizontalScrollApi: () => I,
                    });
                var n = {};
                t.r(n), t.d(n, { Area: () => _e, Bar: () => Fe, Default: () => Be, useVerticalScrollApi: () => ue });
                var a = t(7739),
                    s = t(7363),
                    o = t.n(s),
                    i = t(6483),
                    l = t.n(i),
                    c = t(926),
                    E = t.n(c),
                    d = t(5415);
                const A = ['children', 'className'];
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const F = {
                        [d.fd.ExtraSmall]: '',
                        [d.fd.Small]: E().SMALL_WIDTH,
                        [d.fd.Medium]: `${E().SMALL_WIDTH} ${E().MEDIUM_WIDTH}`,
                        [d.fd.Large]: `${E().SMALL_WIDTH} ${E().MEDIUM_WIDTH} ${E().LARGE_WIDTH}`,
                        [d.fd.ExtraLarge]:
                            `${E().SMALL_WIDTH} ${E().MEDIUM_WIDTH} ${E().LARGE_WIDTH} ${E().EXTRA_LARGE_WIDTH}`,
                    },
                    D = {
                        [d.Aq.ExtraSmall]: '',
                        [d.Aq.Small]: E().SMALL_HEIGHT,
                        [d.Aq.Medium]: `${E().SMALL_HEIGHT} ${E().MEDIUM_HEIGHT}`,
                        [d.Aq.Large]: `${E().SMALL_HEIGHT} ${E().MEDIUM_HEIGHT} ${E().LARGE_HEIGHT}`,
                        [d.Aq.ExtraLarge]:
                            `${E().SMALL_HEIGHT} ${E().MEDIUM_HEIGHT} ${E().LARGE_HEIGHT} ${E().EXTRA_LARGE_HEIGHT}`,
                    },
                    B = {
                        [d.cJ.ExtraSmall]: '',
                        [d.cJ.Small]: E().SMALL,
                        [d.cJ.Medium]: `${E().SMALL} ${E().MEDIUM}`,
                        [d.cJ.Large]: `${E().SMALL} ${E().MEDIUM} ${E().LARGE}`,
                        [d.cJ.ExtraLarge]: `${E().SMALL} ${E().MEDIUM} ${E().LARGE} ${E().EXTRA_LARGE}`,
                    },
                    _ = (e) => {
                        let u = e.children,
                            t = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, A);
                        const n = (0, d.GS)(),
                            a = n.mediaWidth,
                            s = n.mediaHeight,
                            i = n.mediaSize;
                        return o().createElement('div', m({ className: l()(t, F[a], D[s], B[i]) }, r), u);
                    },
                    C = ['children'];
                const g = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, C);
                    return o().createElement(a.ZN, null, o().createElement(_, t, u));
                };
                var h = t(1533),
                    p = t.n(h);
                const f = (e) => {
                        let u,
                            t = null;
                        return (
                            (t = requestAnimationFrame(() => {
                                t = requestAnimationFrame(() => {
                                    (t = null), (u = e());
                                });
                            })),
                            () => {
                                'function' == typeof u && u(), null !== t && cancelAnimationFrame(t);
                            }
                        );
                    },
                    v = (e, u, t) => (t < e ? e : t > u ? u : t);
                var b = t(3138);
                const w = [];
                function y(e) {
                    const u = (0, s.useRef)(e);
                    return (
                        (0, s.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, s.useCallback)((...e) => (0, u.current)(...e), w)
                    );
                }
                function x(e, u, t = []) {
                    const r = (0, s.useRef)(0),
                        n = (0, s.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, s.useEffect)(() => n, [n]);
                    const a = (null != t ? t : []).concat([u]);
                    return [
                        (0, s.useCallback)((t) => {
                            (r.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, a),
                        n,
                    ];
                }
                var S = t(7727);
                function T(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return k(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return k(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function k(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                function P(e, u, t) {
                    const r = (0, s.useMemo)(
                        () =>
                            (function (e, u, t, r) {
                                let n,
                                    a = !1,
                                    s = 0;
                                function o() {
                                    n && clearTimeout(n);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function E() {
                                        (s = Date.now()), t.apply(l, i);
                                    }
                                    a ||
                                        (r && !n && E(),
                                        o(),
                                        void 0 === r && c > e
                                            ? E()
                                            : !0 !== u &&
                                              (n = setTimeout(
                                                  r
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : E,
                                                  void 0 === r ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((r = t), (t = u), (u = void 0)),
                                    (i.cancel = function () {
                                        o(), (a = !0);
                                    }),
                                    i
                                );
                            })(t, e),
                        u,
                    );
                    return (0, s.useEffect)(() => r.cancel, [r]), r;
                }
                var L = t(7030);
                let N;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(N || (N = {}));
                const M = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    O = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        forceTriggerMouseMove: a,
                    }) => {
                        const o = (e, t) => {
                            const r = u(e),
                                n = r[0],
                                a = r[1];
                            return a <= n ? 0 : v(n, a, t);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? M : l,
                                E = (0, s.useRef)(null),
                                d = (0, s.useRef)(null),
                                A = (0, s.useRef)(!1),
                                m = (() => {
                                    const e = (0, s.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        r = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        n = (e, ...t) => {
                                            for (var r, n = T(u(e).values()); !(r = n()).done; ) (0, r.value)(...t);
                                        };
                                    return (0, s.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                                })(),
                                F = P(
                                    () => {
                                        a && a();
                                    },
                                    [],
                                    150,
                                ),
                                D = (0, L.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), m.trigger('change', e), a && A.current && F());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                B = D[0],
                                _ = D[1],
                                C = (0, s.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const n = B.scrollPosition.get(),
                                            a = (null != (r = B.scrollPosition.goal) ? r : 0) - n;
                                        return o(e, u * t + a + n);
                                    },
                                    [B.scrollPosition],
                                ),
                                g = (0, s.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = E.current;
                                        r &&
                                            _.start({
                                                scrollPosition: o(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(r, B.scrollPosition.get()) },
                                            });
                                    },
                                    [_, c.animationConfig, B.scrollPosition],
                                ),
                                h = (0, s.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = d.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            a = C(u, e, r);
                                        g(a);
                                    },
                                    [g, C, c.step],
                                ),
                                p = (0, s.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && h(r(e)),
                                            E.current && m.trigger('mouseWheel', e, B.scrollPosition, u(E.current));
                                    },
                                    [B.scrollPosition, h, m],
                                ),
                                v = ((e, u = []) => {
                                    const t = (0, s.useRef)(),
                                        r = (0, s.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, s.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        f(() => {
                                            const e = E.current;
                                            e &&
                                                (g(o(e, B.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [g, B.scrollPosition.goal],
                                ),
                                b = y(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = o(e, B.scrollPosition.goal);
                                    u !== B.scrollPosition.goal && g(u, { immediate: !0 }),
                                        m.trigger('recalculateContent');
                                });
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', v),
                                    () => {
                                        window.removeEventListener('resize', v);
                                    }
                                ),
                                [v],
                            ),
                                (0, s.useEffect)(() => {
                                    const e = E.current;
                                    if (!e || !a) return;
                                    const u = () => {
                                            A.current = !0;
                                        },
                                        t = () => {
                                            A.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', u),
                                        e.addEventListener('mouseleave', t),
                                        () => {
                                            e.removeEventListener('mouseenter', u),
                                                e.removeEventListener('mouseleave', t);
                                        }
                                    );
                                }, [E]);
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? n(d.current) : void 0),
                                    getContainerSize: () => (E.current ? e(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? u(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: p,
                                    applyScroll: g,
                                    applyStepTo: h,
                                    contentRef: E,
                                    wrapperRef: d,
                                    scrollPosition: _,
                                    animationScroll: B,
                                    recalculateContent: b,
                                    events: { on: m.on, off: m.off },
                                }),
                                [B.scrollPosition, g, h, m.off, m.on, b, p, _, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    I = O({
                        getBounds: (e) => {
                            var u, t;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (u = null == (t = e.parentElement) ? void 0 : t.offsetWidth) ? u : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, u) => {
                            e.style.transform = `translateX(-${u.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? N.Next : N.Prev),
                        forceTriggerMouseMove: b.O.view.forceTriggerMouseMove,
                    }),
                    H = 'HorizontalBar_base_49',
                    $ = 'HorizontalBar_base__nonActive_82',
                    G = 'HorizontalBar_leftButton_5f',
                    W = 'HorizontalBar_rightButton_03',
                    U = 'HorizontalBar_track_0d',
                    z = 'HorizontalBar_thumb_fd',
                    j = 'HorizontalBar_rail_32',
                    q = 'disable',
                    V = { pending: !1, offset: 0 },
                    X = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Y = () => {},
                    Z = (e, u) => Math.max(20, e.offsetWidth * u),
                    K = (0, s.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = X, onDrag: r = Y }) => {
                        const n = (0, s.useRef)(null),
                            a = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            E = (0, s.useRef)(null),
                            d = e.stepTimeout || 100,
                            A = (0, s.useState)(V),
                            m = A[0],
                            F = A[1],
                            D = (0, s.useCallback)(
                                (e) => {
                                    F(e),
                                        E.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [r],
                            ),
                            B = () => {
                                const u = c.current,
                                    t = E.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    l = v(0, 1, s / (n - r)),
                                    d = (u.offsetWidth - Z(u, o)) * l;
                                (t.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (a.current && i.current && c.current && E.current) {
                                            if (0 === e)
                                                return a.current.classList.add(q), void i.current.classList.remove(q);
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return a.current.classList.remove(q), void i.current.classList.add(q);
                                            var u, t;
                                            a.current.classList.remove(q), i.current.classList.remove(q);
                                        }
                                    })(d);
                            },
                            _ = y(() => {
                                (() => {
                                    const u = E.current,
                                        t = c.current,
                                        r = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && r && t)) return;
                                    const s = Math.min(1, r / a);
                                    (u.style.width = `${Z(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === s ? n.current.classList.add($) : n.current.classList.remove($));
                                })(),
                                    B();
                            });
                        (0, s.useEffect)(() => f(_)),
                            (0, s.useEffect)(
                                () =>
                                    f(() => {
                                        const u = () => {
                                            B();
                                        };
                                        let t = Y;
                                        const r = () => {
                                            t(), (t = f(_));
                                        };
                                        return (
                                            e.events.on('recalculateContent', _),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', _),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, s.useEffect)(() => {
                                if (!m.pending) return;
                                const u = b.O.client.events.mouse.move(([u, t]) => {
                                        var n;
                                        const a = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!a || !s) return;
                                        const o = c.current,
                                            i = E.current;
                                        if (!o || !i) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - m.offset - o.getBoundingClientRect().x,
                                            d = (l / o.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, d),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: d });
                                    }),
                                    t = b.O.client.events.mouse.up(() => {
                                        u(), D(V);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, m.offset, m.pending, r, D]);
                        const C = x((u) => e.applyStepTo(u), d, [e]),
                            g = C[0],
                            h = C[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const p = (e) => {
                            e.target.classList.contains(q) || (0, S.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(H, u.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(G, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(q) || 0 !== e.button || ((0, S.G)('play'), g(N.Next));
                                },
                                onMouseUp: h,
                                ref: a,
                                onMouseEnter: p,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(U, u.track),
                                    onMouseDown: (u) => {
                                        const r = E.current;
                                        if (r && 0 === u.button)
                                            if (((0, S.G)('play'), u.target === r))
                                                D({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const r = E.current,
                                                        n = e.contentRef.current;
                                                    if (!r || !n) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > r.getBoundingClientRect().x ? N.Prev : N.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: p,
                                },
                                o().createElement('div', { ref: E, className: l()(z, u.thumb) }),
                                o().createElement('div', { className: l()(j, u.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(W, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(q) || 0 !== e.button || ((0, S.G)('play'), g(N.Prev));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: p,
                            }),
                        );
                    }),
                    Q = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    J = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: a,
                        scrollClassName: i,
                        getStepByRailClick: c,
                        onDrag: E,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: l()(Q.base, e.base) });
                            }, [r]),
                            A = (0, s.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: l()(Q.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(Q.defaultScrollArea, n) },
                                o().createElement(ee, { className: i, api: A, classNames: a }, e),
                            ),
                            o().createElement(K, { getStepByRailClick: c, api: u, onDrag: E, classNames: d }),
                        );
                    },
                    ee = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, s.useEffect)(() => f(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(Q.base, u) },
                            o().createElement(
                                'div',
                                {
                                    className: l()(Q.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: l()(Q.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                (ee.Bar = K), (ee.Default = J);
                const ue = O({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? N.Next : N.Prev),
                    }),
                    te = 'VerticalBar_base_f3',
                    re = 'VerticalBar_base__nonActive_42',
                    ne = 'VerticalBar_topButton_d7',
                    ae = 'VerticalBar_bottomButton_06',
                    se = 'VerticalBar_track_df',
                    oe = 'VerticalBar_thumb_32',
                    ie = 'VerticalBar_rail_43',
                    le = 'disable',
                    ce = () => {},
                    Ee = { pending: !1, offset: 0 },
                    de = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Ae = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    me = (e, u) => Math.max(20, e.offsetHeight * u),
                    Fe = (0, s.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = de, onDrag: r = ce }) => {
                        const n = (0, s.useRef)(null),
                            a = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            E = (0, s.useRef)(null),
                            d = e.stepTimeout || 100,
                            A = (0, s.useState)(Ee),
                            m = A[0],
                            F = A[1],
                            D = (0, s.useCallback)(
                                (e) => {
                                    F(e),
                                        E.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [r],
                            ),
                            B = y(() => {
                                const u = E.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && a && u && t)) return;
                                const s = Math.min(1, r / a);
                                return (
                                    (u.style.height = `${me(t, s)}px`),
                                    (u.style.display = 'flex'),
                                    n.current &&
                                        (1 === s ? n.current.classList.add(re) : n.current.classList.remove(re)),
                                    s
                                );
                            }),
                            _ = y(() => {
                                const u = c.current,
                                    t = E.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    l = v(0, 1, s / (n - r)),
                                    d = (u.offsetHeight - me(u, o)) * l;
                                (t.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (a.current && i.current && c.current && E.current) {
                                            if (0 === Math.round(e))
                                                return a.current.classList.add(le), void i.current.classList.remove(le);
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return a.current.classList.remove(le), void i.current.classList.add(le);
                                            var u, t;
                                            a.current.classList.remove(le), i.current.classList.remove(le);
                                        }
                                    })(d);
                            }),
                            C = y(() => {
                                Ae(e, () => {
                                    B(), _();
                                });
                            });
                        (0, s.useEffect)(() => f(C)),
                            (0, s.useEffect)(() => {
                                const u = () => {
                                    Ae(e, () => {
                                        _();
                                    });
                                };
                                let t = ce;
                                const r = () => {
                                    t(), (t = f(C));
                                };
                                return (
                                    e.events.on('recalculateContent', C),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', C),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', r);
                                    }
                                );
                            }, [e]),
                            (0, s.useEffect)(() => {
                                if (!m.pending) return;
                                const u = b.O.client.events.mouse.up(() => {
                                        D(Ee);
                                    }),
                                    t = b.O.client.events.mouse.move(([u]) => {
                                        Ae(e, (t) => {
                                            const n = c.current,
                                                a = E.current,
                                                s = e.getContainerSize();
                                            if (!n || !a || !s) return;
                                            const o = u.screenY - m.offset - n.getBoundingClientRect().y,
                                                i = (o / n.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, m.offset, m.pending, r, D]);
                        const g = x((u) => e.applyStepTo(u), d, [e]),
                            h = g[0],
                            p = g[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const w = (e) => {
                            e.target.classList.contains(le) || (0, S.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(te, u.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(ne, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(le) || 0 !== e.button || ((0, S.G)('play'), h(N.Next));
                                },
                                ref: a,
                                onMouseEnter: w,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(se, u.track),
                                    onMouseDown: (u) => {
                                        const r = E.current;
                                        if (r && 0 === u.button)
                                            if (((0, S.G)('play'), u.target === r))
                                                D({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    E.current &&
                                                        Ae(e, (r) => {
                                                            if (!r) return;
                                                            const n = t(e),
                                                                a = e.clampPosition(r, r.scrollTop + n * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > r.getBoundingClientRect().y ? N.Prev : N.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: w,
                                },
                                o().createElement('div', { ref: E, className: l()(oe, u.thumb) }),
                                o().createElement('div', { className: l()(ie, u.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(ae, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(le) || 0 !== e.button || ((0, S.G)('play'), h(N.Prev));
                                },
                                onMouseUp: p,
                                ref: i,
                                onMouseEnter: w,
                            }),
                        );
                    }),
                    De = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Be = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: a,
                        scrollClassNames: i,
                        getStepByRailClick: c,
                        onDrag: E,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: l()(De.base, e.base) });
                            }, [r]),
                            A = (0, s.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: l()(De.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(De.area, n) },
                                o().createElement(_e, { className: a, classNames: i, api: A }, e),
                            ),
                            o().createElement(Fe, { getStepByRailClick: c, api: u, onDrag: E, classNames: d }),
                        );
                    },
                    _e = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, s.useEffect)(() => f(r.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(De.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(De.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                _e.Default = Be;
                const Ce = { Vertical: n, Horizontal: r },
                    ge = {
                        base: 'TextButton_base_b6',
                        base__right: 'TextButton_base__right_39',
                        icon: 'TextButton_icon_17',
                        icon__back: 'TextButton_icon__back_43',
                        icon__forward: 'TextButton_icon__forward_59',
                        icon__close: 'TextButton_icon__close_53',
                        icon__info: 'TextButton_icon__info_33',
                        glow: 'TextButton_glow_a4',
                        caption: 'TextButton_caption_82',
                        caption__back: 'TextButton_caption__back_b9',
                        caption__forward: 'TextButton_caption__forward_4e',
                        caption__close: 'TextButton_caption__close_36',
                        caption__info: 'TextButton_caption__info_23',
                        goto: 'TextButton_goto_e7',
                        base__left: 'TextButton_base__left_ff',
                        shine: 'TextButton_shine_e2',
                    },
                    he = [
                        'caption',
                        'onClick',
                        'goto',
                        'side',
                        'type',
                        'classNames',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'soundClick',
                        'soundHover',
                    ];
                function pe() {
                    return (
                        (pe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        pe.apply(this, arguments)
                    );
                }
                class fe extends o().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, S.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, S.G)(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            r = e.goto,
                            n = e.side,
                            a = e.type,
                            s = e.classNames,
                            i = e.onMouseEnter,
                            c = e.onMouseLeave,
                            E = e.onMouseDown,
                            d = e.onMouseUp,
                            A =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(e, he)),
                            m = l()(ge.base, ge[`base__${a}`], ge[`base__${n}`], null == s ? void 0 : s.base),
                            F = l()(ge.icon, ge[`icon__${a}`], ge[`icon__${n}`], null == s ? void 0 : s.icon),
                            D = l()(ge.glow, null == s ? void 0 : s.glow),
                            B = l()(ge.caption, ge[`caption__${a}`], null == s ? void 0 : s.caption),
                            _ = l()(ge.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            pe(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== a && o().createElement('div', { className: ge.shine }),
                            o().createElement('div', { className: F }, o().createElement('div', { className: D })),
                            o().createElement('div', { className: B }, u),
                            r && o().createElement('div', { className: _ }, r),
                        );
                    }
                }
                fe.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var ve = t(5521),
                    be = t(9916);
                const we = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ye(e = ve.n.NONE, u = we, t = !1, r = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== ve.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!r && b.O.view.isEventHandled()) return;
                                b.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t, r]);
                }
                var xe = t(3403);
                function Se() {
                    return !1;
                }
                console.log;
                var Te = t(9174);
                function ke(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Pe(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Pe(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Pe(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const Re = (e) => (0 === e ? window : window.subViews.get(e));
                function Le(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const Ne = Le;
                function Me(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function Oe(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, r) => u(null == e ? void 0 : e.value, t, r));
                }
                function Ie(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let r = t;
                    for (let t = 0; t < e.length; t++) {
                        r = u(r, Ne(e, t), t, e);
                    }
                    return r;
                }
                var He = t(3946),
                    $e = t(3905),
                    Ge = t(1281);
                let We;
                function Ue(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(We || (We = {}));
                const ze = (e) => e.replace(/&nbsp;/g, ' '),
                    je = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    qe = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Ve = (e, u, t = We.left) => e.split(u).reduce(t === We.left ? je : qe, []),
                    Xe = (() => {
                        const e = new RegExp(
                            /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                .source +
                                '|' +
                                /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                    .source +
                                '|' +
                                /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source +
                                '|' +
                                /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source,
                            'gum',
                        );
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    Ye = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Ze = (e, u = We.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Ye.includes(t)) return Xe(e);
                        if ('ja' === t) {
                            return (0, Ge.D4)()
                                .parse(e)
                                .map((e) => ze(e));
                        }
                        return ((e, u = We.left) => {
                            let t = [];
                            const r =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = ze(e);
                            return Ve(n, /( )/, u).forEach((e) => (t = t.concat(Ve(e, r, We.left)))), t;
                        })(e, u);
                    },
                    Ke = {
                        ENTRY_POINT: {
                            icon: { emptyIconBrightness: 0.3, boxesIconBrightness: 0.3 },
                            shine: {
                                opacityCustom: 0.15,
                                opacityCustomNewBox: 0.4,
                                opacityDiff: 0.15,
                                animationDuration: '40s',
                            },
                        },
                        HAS_BOXES_VIEW: {
                            hasIdle: !0,
                            vignette: { isEnabled: !0, opacity: 0.4 },
                            tabsGuaranteedCount: 10,
                            accentCount: 5,
                            hoverZone: {
                                width: '38%',
                                height: '39%',
                                horizontalOffset: '30.8%',
                                verticalOffset: '39%',
                            },
                            backgroundColor: '#111',
                        },
                        INFO_PAGE: { hasDescription: !0 },
                        REWARDS: { accentCount: 5 },
                    },
                    Qe = {
                        DEFAULT_CONFIG: Ke,
                        anniversaryCN: {
                            ENTRY_POINT: { icon: { emptyIconBrightness: 0.2 } },
                            HAS_BOXES_VIEW: { hasIdle: !1, tabsGuaranteedCount: 5 },
                            INFO_PAGE: { hasDescription: !0 },
                        },
                    },
                    Je = (e, u) => {
                        const t = Qe[((r = e), r.replace(/_\w/g, (e) => e[1].toUpperCase()))];
                        var r;
                        return t
                            ? ((e, u) => {
                                  const t = (e, u) => {
                                      const r = Object.assign({}, e);
                                      for (const e in r) {
                                          var n, a;
                                          u &&
                                              e in u &&
                                              ('object' == typeof r[e]
                                                  ? (r[e] = t(r[e], null != (n = u[e]) ? n : r[e]))
                                                  : (r[e] = null != (a = u[e]) ? a : r[e]));
                                      }
                                      return r;
                                  };
                                  return t(e, u);
                              })(Ke[u], t[u])
                            : Ke[u];
                    };
                var eu = t(2691);
                const uu = (e, u) => {
                        let t = e;
                        const r = u.split('.');
                        for (let e = 0; e < r.length && t; e++) {
                            const u = t.$dyn(r[e]);
                            (u && 'object' != typeof u) || (t = u);
                        }
                        return t;
                    },
                    tu = (e, u) => {
                        if (u.includes('.dynamic.')) {
                            const t = u.replace('dynamic.', '');
                            return uu(e, t);
                        }
                        return (0, eu.R)(e, u);
                    },
                    ru = ({ type: e, filePath: u, eventName: t }, r = !1) => {
                        const n = ((e, u, t) => {
                                const r = 'gui.maps.icons.lootBoxSystem.customizable',
                                    n = 'lootbox.customizable';
                                switch (e) {
                                    case $e._g.Images:
                                    case $e._g.DynamicImages:
                                        return {
                                            parent: R.images,
                                            path: `${r}.${t}.${u}`,
                                            defaultPath: `${r}.default.${u}`,
                                        };
                                    case $e._g.Videos:
                                    case $e._g.DynamicVideos:
                                        return {
                                            parent: R.videos,
                                            path: `${n}.${t}.${u}`,
                                            defaultPath: `${n}.default.${u}`,
                                        };
                                    case $e._g.Texts:
                                    case $e._g.DynamicTexts:
                                        return {
                                            parent: R.strings,
                                            path: `lootbox_${t}.${u}`,
                                            defaultPath: `lootbox_system.${u}`,
                                        };
                                    case $e._g.Sounds:
                                        return { parent: R.sounds, path: `${u}_${t}`, defaultPath: `${u}` };
                                    default:
                                        return (
                                            console.error(`Unreachable code: unknown ResourceType ${e}`),
                                            { parent: '', path: '', defaultPath: '' }
                                        );
                                }
                            })(e, u, t),
                            a = n.parent,
                            s = n.path,
                            o = n.defaultPath;
                        return a
                            ? { eventResource: r ? uu(a, s) : tu(a, s), defaultResource: r ? uu(a, o) : tu(a, o) }
                            : null;
                    },
                    nu = ({ type: e, filePath: u, eventName: t }) => {
                        const r = ru({ type: e, filePath: u, eventName: t });
                        if (!r || (!r.eventResource && !r.defaultResource))
                            return console.info(`Unreachable code: unknown resource (${e} ${t} ${u})`), '';
                        const n = r.eventResource,
                            a = r.defaultResource;
                        return n || a;
                    },
                    au = (e, u) =>
                        Object.keys(e).reduce((t, r) => {
                            const n = e[r];
                            return n
                                ? ((t[r] = ((e, u, t) =>
                                      Object.keys(e).reduce(
                                          (r, n) => ((r[n] = nu({ type: u, filePath: e[n], eventName: t })), r),
                                          {},
                                      ))(n, r, u)),
                                  t)
                                : t;
                        }, {}),
                    su = (e, u, t) => (e || u ? e || u : (console.warn(`Not found ${t}`), '')),
                    ou = (e, u, t) =>
                        Object.keys(e).reduce((r, n) => {
                            const a = e[n];
                            return (
                                (r[n] = ((e, u, t) => {
                                    const r = `resource type: ${e}, path: ${u}`,
                                        n = ru({ type: e, filePath: u, eventName: t }, !0);
                                    return ((e, u, t) => ({
                                        dynOpt: (r, n = 'default') => {
                                            const a =
                                                    (null == u ? void 0 : u.$dyn(r)) ||
                                                    (null == u ? void 0 : u.$dyn(n)),
                                                s = null == e ? void 0 : e.$dyn(n);
                                            return su(a, s, t);
                                        },
                                        dyn: (r) => {
                                            const n = null == u ? void 0 : u.$dyn(r),
                                                a = null == e ? void 0 : e.$dyn(r);
                                            return su(n, a, t);
                                        },
                                        plural: (r, n) => {
                                            const a = null == u ? void 0 : u.$plural(r, n),
                                                s = null == e ? void 0 : e.$plural(r, n);
                                            return su(a, s, t);
                                        },
                                    }))(
                                        null == n ? void 0 : n.defaultResource,
                                        null == n ? void 0 : n.eventResource,
                                        r,
                                    );
                                })(u, a, t)),
                                r
                            );
                        }, {}),
                    iu = {
                        images: {
                            background: 'infopage.background',
                            mask: 'infopage.mask',
                            checkmark: 'infopage.checkmark',
                            previewIcon: 'common.previewIcon',
                            externalLinkSmall: 'common.externalLinkSmall',
                            shadowLeft: 'infopage.shadowLeft',
                            shadowMiddle: 'infopage.shadowMiddle',
                            shadowRight: 'infopage.shadowRight',
                            tabShine: 'infopage.tabShine',
                        },
                        texts: {
                            backButton: 'common.backButton',
                            titleGuaranteed: 'infoPage.footer.title.guaranteed',
                            descriptionGuaranteed: 'infoPage.footer.description.guaranteed',
                            titleCompensation: 'infoPage.footer.title.compensation',
                            descriptionCompensation: 'infoPage.footer.description.compensation',
                            titleAutoOpen: 'infoPage.footer.title.autoOpen',
                            descriptionAutoOpen: 'infoPage.footer.description.autoOpen',
                            headerTitle: 'eventName.upperCase',
                            headerSubtitle: 'infoPage.header.subtitle',
                            headerDescription: 'infoPage.header.description',
                            lootListLink: 'infoPage.header.lootListLink',
                            headerShopButton: 'common.getButton.lowerCase',
                            headerVideoButtonText: 'infoPage.header.videoButtonText',
                            rewardsMultiplier: 'common.rewards.multiplier',
                            rewardsDivider: 'infoPage.rewards.divider',
                            rewardsPercent: 'infoPage.rewards.percent',
                        },
                        sounds: {
                            purchaseClick: 'gui_lb_ingame_shop_box_buy',
                            purchaseHover: 'gui_lb_buy_more',
                            infoPageTabClick: 'gui_lb_infopage_box_click',
                            infoPageTabHover: 'gui_lb_infopage_box_highlight',
                        },
                    },
                    lu = {
                        dynamicTexts: {
                            boxNames: 'common.boxCategory.lowerCase',
                            rewardsPremiumDay: 'common.rewards.premiumDay',
                        },
                    },
                    cu = ((e, u) => {
                        const t = (0, s.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: n, children: a, mocks: i }) {
                                const l = (0, s.useRef)([]),
                                    c = (t, r, n) => {
                                        var a;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Re,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function a(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = n.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const n = t(u),
                                                        a = r.split('.').reduce((e, u) => e[u], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const o = 'string' == typeof a ? `${r}.${a}` : r,
                                                            i = b.O.view.addModelObserver(o, u, !0);
                                                        return n.set(i, t), e && t(s(a)), i;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, u) => {
                                                        const t = s(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = s(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = ke(n.keys()); !(e = t()).done; ) a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(r),
                                            o =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            i = (e) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(e)) : o.readByPath(e),
                                            c = (e) => l.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: i,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const r = null != u ? u : i(e),
                                                            n = Te.LO.box(r, { equals: Se });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Te.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const r = null != u ? u : i(e),
                                                            n = Te.LO.box(r, { equals: Se });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Te.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const r = i(u);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, u) => ((e[u] = Te.LO.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, Te.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                a = Object.entries(n),
                                                                s = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = Te.LO.box(r[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, Te.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            d = { mode: t, model: E, externalModel: o, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && n ? n.controls(d) : u(d),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    E = (0, s.useRef)(!1),
                                    d = (0, s.useState)(r),
                                    A = d[0],
                                    m = d[1],
                                    F = (0, s.useState)(() => c(r, n, i)),
                                    D = F[0],
                                    B = F[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        E.current ? B(c(A, n, i)) : (E.current = !0);
                                    }, [i, A, n]),
                                    (0, s.useEffect)(() => {
                                        m(r);
                                    }, [r]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            D.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [D],
                                    ),
                                    o().createElement(t.Provider, { value: D }, a)
                                );
                            },
                            () => (0, s.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = e.object().get().eventName,
                                t = {
                                    root: e.object(),
                                    boxes: e.array('boxes'),
                                    hasDescription: Te.LO.box(Je(u, $e.N7.InfoPage).hasDescription),
                                    sticky: Te.LO.box(!1),
                                    activeCategory: Te.LO.box(''),
                                    eventName: u,
                                },
                                r = (0, He.Om)((e) => {
                                    const u = [];
                                    return (
                                        Oe(e, (e) => {
                                            if ($e.fR.includes(e.name)) {
                                                const t = (function (e, u) {
                                                    for (let t = 0; t < e.length; t++) if (u(Ne(e, t), t, e)) return t;
                                                })(u, (u) => u.name === e.name);
                                                if (void 0 !== t)
                                                    return void (function (e, u, t) {
                                                        if (Array.isArray(e)) return (e[u] = t), e;
                                                        throw new Error('Mutate CoherentArrayProxy is not available');
                                                    })(
                                                        u,
                                                        t,
                                                        Object.assign({}, u[t], {
                                                            value: `${u[t].value} %(divider) ${e.value}`,
                                                        }),
                                                    );
                                            }
                                            !(function (e, u) {
                                                if (Array.isArray(e)) return e.push(u), e;
                                                throw new Error('Mutate CoherentArrayProxy is not available');
                                            })(u, e);
                                        }),
                                        u
                                    );
                                }),
                                n = (0, He.Om)(
                                    (e) => {
                                        const u = (function (e, u) {
                                            for (let t = 0; t < e.length; t++) {
                                                const r = Me(e[t]);
                                                if (u(r, t, e)) return r;
                                            }
                                        })(t.boxes.get(), (u) => u.category === e);
                                        if (!u) throw new Error(`Box with category ${e} is not found`);
                                        return u;
                                    },
                                    { equals: Se },
                                ),
                                a = (0, He.Om)(
                                    (e) => {
                                        const u = n(e).slots;
                                        return u
                                            ? Oe(u, (e) => ({
                                                  probability: e.probability,
                                                  bonuses: r(e.bonuses.items),
                                              }))
                                            : [];
                                    },
                                    { equals: Se },
                                ),
                                s = (0, He.Om)((e) => n(e).guaranteedLimit, { equals: Se }),
                                o = (0, He.Om)(() => au(iu, u)),
                                i = (0, He.Om)(() =>
                                    ((e, u) =>
                                        Object.keys(e).reduce((t, r) => {
                                            const n = e[r];
                                            return n ? ((t[r] = ou(n, r, u)), t) : t;
                                        }, {}))(lu, u),
                                ),
                                l = (0, He.Om)(() => t.boxes.get().length > 1);
                            return Object.assign({}, t, {
                                computes: {
                                    getSlots: a,
                                    getGuaranteed: s,
                                    resources: o,
                                    dynamicResources: i,
                                    displayTabs: l,
                                },
                            });
                        },
                        ({ externalModel: e, model: u, cleanup: t }) => {
                            const r = (0, Te.aD)((e) => {
                                u.activeCategory.get() !== e && u.activeCategory.set(e);
                            });
                            return (
                                t(
                                    (0, Te.EH)(() => {
                                        const e = u.root.get().chosenCategory;
                                        r(e);
                                    }),
                                ),
                                {
                                    showShop: e.createCallbackNoArgs('onShowShop'),
                                    showVideo: e.createCallbackNoArgs('onShowVideo'),
                                    showLootList: e.createCallbackNoArgs('onShowLootList'),
                                    close: e.createCallbackNoArgs('onClose'),
                                    showPreview: e.createCallback((e) => e, 'onPreview'),
                                    saveCategory: e.createCallback((e) => ({ chosenCategory: e }), 'onChosenCategory'),
                                    setSticky: (0, Te.aD)((e) => u.sticky.set(e)),
                                }
                            );
                        },
                    ),
                    Eu = cu[0],
                    du = cu[1],
                    Au = 'App_base_c9',
                    mu = 'App_shadow_a6',
                    Fu = 'App_scroll_6c',
                    Du = 'App_scrollBar_3d',
                    Bu = 'App_scrollArea_97',
                    _u = 'App_content_2e',
                    Cu = 'App_stickyTabs_0e',
                    gu = 'App_stickyTabs__show_3d',
                    hu = 'App_backButton_60',
                    pu = 'FormatText_base_d0',
                    fu = ({ binding: e, text: u = '', classMix: t, alignment: r = We.left, formatWithBrackets: n }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const a = n && e ? Ue(u, e) : u;
                        return o().createElement(
                            s.Fragment,
                            null,
                            a.split('\n').map((u, n) =>
                                o().createElement(
                                    'div',
                                    { className: l()(pu, t), key: `${u}-${n}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : Ze(e, u))))(
                                        u,
                                        r,
                                        e,
                                    ).map((e, u) => o().createElement(s.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    vu = 'TextBlock_base_ce',
                    bu = 'TextBlock_title_d5',
                    wu = 'TextBlock_description_3c',
                    yu = ({ title: e, description: u, className: t }) =>
                        o().createElement(
                            'div',
                            { className: l()(vu, t) },
                            o().createElement('div', { className: bu }, e),
                            o().createElement('div', { className: wu }, u),
                        ),
                    xu = 'Footer_base_4c',
                    Su = 'Footer_text_07',
                    Tu = 'Footer_textBlock_8e',
                    ku = (0, xe.Pi)(() => {
                        const e = du().model,
                            u = e.computes.resources().texts,
                            t = e.boxes.get(),
                            r = e.computes.getGuaranteed;
                        return o().createElement(
                            'div',
                            { className: xu },
                            o().createElement(
                                'div',
                                { className: Su },
                                (function (e, u) {
                                    if (Array.isArray(e)) return e.some(u);
                                    for (let t = 0; t < e.length; t++) if (u(Ne(e, t), t, e)) return !0;
                                    return !1;
                                })(t, (e) => r(e.category) > 0) &&
                                    o().createElement(yu, {
                                        title: u.titleGuaranteed,
                                        description: o().createElement(fu, {
                                            text: u.descriptionGuaranteed,
                                            binding: Ie(t, (e, u, t) => ((e[`guaranteed${t}`] = r(u.category)), e), {}),
                                        }),
                                        className: Tu,
                                    }),
                                o().createElement(yu, {
                                    title: u.titleCompensation,
                                    description: u.descriptionCompensation,
                                    className: Tu,
                                }),
                                o().createElement(yu, {
                                    title: u.titleAutoOpen,
                                    description: u.descriptionAutoOpen,
                                    className: Tu,
                                }),
                            ),
                        );
                    });
                let Pu;
                !(function (e) {
                    (e.DayMonthNumeric = 'dayMonthNumeric'),
                        (e.DayMonthFull = 'dayMonthFull'),
                        (e.DayMonthFullTime = 'dayMonthFullTime'),
                        (e.DayMonthAbbreviated = 'dayMonthAbbreviated'),
                        (e.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
                        (e.ShortDate = 'shortDate'),
                        (e.ShortTime = 'ShortTime'),
                        (e.ShortDateTime = 'ShortDateTime'),
                        (e.FullDate = 'fullDate'),
                        (e.FullTime = 'fullTime'),
                        (e.FullDateTime = 'fullDateTime');
                })(Pu || (Pu = {}));
                var Ru = t(8613);
                Date.now();
                const Lu = Ru.Ew.getRegionalDateTime;
                Ru.Ew.getFormattedDateTime;
                var Nu = t(514),
                    Mu = t(1579);
                const Ou = 'VideoButton_base_ec',
                    Iu = 'VideoButton_videoIcon_61',
                    Hu = 'VideoButton_videoText_97',
                    $u = (0, xe.Pi)(({ onClick: e }) => {
                        const u = du().model.computes.resources().texts;
                        return o().createElement(
                            'div',
                            {
                                className: Ou,
                                onMouseEnter: () => {
                                    Nu.hY.highlight();
                                },
                                onClick: () => {
                                    Nu.hY.click(), e();
                                },
                            },
                            o().createElement('div', { className: Iu }),
                            o().createElement('div', { className: Hu }, u.headerVideoButtonText),
                        );
                    }),
                    Gu = 'LootListLink_base_86',
                    Wu = 'LootListLink_text_34',
                    Uu = 'LootListLink_icon_ae',
                    zu = ({ text: e, icon: u, onClick: t }) =>
                        o().createElement(
                            'div',
                            { className: Gu, onClick: t },
                            o().createElement('div', { className: Wu }, e),
                            o().createElement('div', { className: Uu, style: { backgroundImage: `url(${u})` } }),
                        ),
                    ju = 'Header_base_5e',
                    qu = 'Header_text_ce',
                    Vu = 'Header_title_df',
                    Xu = 'Header_subtitle_07',
                    Yu = 'Header_description_3f',
                    Zu = 'Header_lootListLink_4f',
                    Ku = 'Header_shopButton_76',
                    Qu = 'Header_videoButton_07',
                    Ju = (0, xe.Pi)(() => {
                        const e = du(),
                            u = e.model,
                            t = e.controls,
                            r = u.root.get(),
                            n = r.hasVideoButton,
                            a = r.hasShopButton,
                            s = r.startDate,
                            i = r.endDate,
                            l = r.hasLootListLink,
                            c = u.hasDescription.get(),
                            E = u.computes.resources(),
                            d = E.images,
                            A = E.texts,
                            m = E.sounds;
                        return o().createElement(
                            'div',
                            { className: ju },
                            o().createElement(
                                'div',
                                { className: qu },
                                o().createElement('div', { className: Vu }, A.headerTitle),
                                o().createElement(
                                    'div',
                                    { className: Xu },
                                    o().createElement(fu, {
                                        text: A.headerSubtitle,
                                        binding: { from: `${Lu(s, Pu.FullDate)}`, to: `${Lu(i, Pu.FullDate)}` },
                                    }),
                                ),
                                c &&
                                    o().createElement(
                                        'div',
                                        { className: Yu },
                                        o().createElement(fu, { text: A.headerDescription }),
                                    ),
                                l &&
                                    o().createElement(
                                        'div',
                                        { className: Zu },
                                        o().createElement(zu, {
                                            text: A.lootListLink,
                                            icon: d.externalLinkSmall,
                                            onClick: t.showLootList,
                                        }),
                                    ),
                                a &&
                                    o().createElement(
                                        'div',
                                        { className: Ku },
                                        o().createElement(Mu.X, {
                                            text: A.headerShopButton,
                                            onClick: () => {
                                                Nu.hY.sound(m.purchaseHover), t.showShop();
                                            },
                                            soundHover: m.purchaseHover,
                                        }),
                                    ),
                            ),
                            n &&
                                o().createElement(
                                    'div',
                                    { className: Qu },
                                    o().createElement($u, { onClick: t.showVideo }),
                                ),
                        );
                    }),
                    et = [
                        'children',
                        'contentId',
                        'args',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onClick',
                        'ignoreShowDelay',
                        'ignoreMouseClick',
                        'decoratorId',
                        'isEnabled',
                        'targetId',
                        'onShow',
                        'onHide',
                    ];
                function ut(e) {
                    return Object.entries(e || {}).map(([e, u]) => {
                        const t = { __Type: 'GFValueProxy', name: e };
                        switch (typeof u) {
                            case 'number':
                                t.number = u;
                                break;
                            case 'boolean':
                                t.bool = u;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = u.toString();
                        }
                        return t;
                    });
                }
                const tt = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: be.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    rt = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            a = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            A = e.decoratorId,
                            m = void 0 === A ? 0 : A,
                            F = e.isEnabled,
                            D = void 0 === F || F,
                            B = e.targetId,
                            _ = void 0 === B ? 0 : B,
                            C = e.onShow,
                            g = e.onHide,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, et);
                        const p = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, s.useMemo)(
                                () =>
                                    _ ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            r = R.invalid('resId'),
                                            n = '';
                                        var a;
                                        return (
                                            u &&
                                                ((n =
                                                    (null == (a = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) ||
                                                    ''),
                                                (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (r = window.subViews[t].id)),
                                            { callerUrl: n, caller: t, stack: u, resId: r }
                                        );
                                    })().resId,
                                [_],
                            ),
                            v = (0, s.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (tt(t, m, { isMouseEvent: !0, on: !0, arguments: ut(r) }, f),
                                    C && C(),
                                    (p.current.isVisible = !0));
                            }, [t, m, r, f, C]),
                            b = (0, s.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        tt(t, m, { on: !1 }, f),
                                        p.current.isVisible && g && g(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, m, f, g]),
                            w = (0, s.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        (0, s.useEffect)(() => {
                            const e = p.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, s.useEffect)(() => {
                                !1 === D && b();
                            }, [D, b]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            );
                        return D
                            ? (0, s.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((p.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      n && n(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              b(), null == a || a(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === d && b(), null == i || i(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === d && b(), null == o || o(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      h,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    nt = 'Shadow_base_33',
                    at = 'Shadow_shadowSlice_18',
                    st = 'Shadow_shadowSlice__middle_53',
                    ot = (0, xe.Pi)(() => {
                        const e = du().model.computes.resources().images;
                        return o().createElement(
                            'div',
                            { className: nt },
                            o().createElement('img', { className: at, src: e.shadowLeft }),
                            o().createElement('img', { className: l()(st, at), src: e.shadowMiddle }),
                            o().createElement('img', { className: at, src: e.shadowRight }),
                        );
                    });
                var it = t(9623);
                const lt = 'Tab_base_e0',
                    ct = 'Tab_image_a6',
                    Et = 'Tab_box_45',
                    dt = 'Tab_base__hover_8d',
                    At = 'Tab_base__active_b1',
                    mt = 'Tab_title_ac',
                    Ft = 'Tab_shine_96',
                    Dt = (0, xe.Pi)(({ category: e }) => {
                        const u = du(),
                            t = u.model,
                            r = u.controls,
                            n = t.computes.resources(),
                            a = n.images,
                            i = n.sounds,
                            c = t.computes.dynamicResources().dynamicTexts,
                            E = t.activeCategory.get() === e,
                            d = t.sticky.get(),
                            A = (0, s.useState)(!1),
                            m = A[0],
                            F = A[1],
                            D = () => {
                                E || (Nu.hY.sound(i.infoPageTabClick), r.saveCategory(e));
                            },
                            B = () => {
                                E || Nu.hY.sound(i.infoPageTabHover), F(!0);
                            };
                        return o().createElement(
                            'div',
                            { className: l()(lt, m && dt, E && At) },
                            o().createElement(
                                'div',
                                { className: ct },
                                o().createElement('div', {
                                    className: Et,
                                    style: { backgroundImage: `url(${(0, it.Vk)('s600x450', e)})` },
                                    onMouseEnter: B,
                                    onMouseLeave: () => F(!1),
                                    onClick: D,
                                }),
                            ),
                            o().createElement('div', {
                                className: Ft,
                                style: { backgroundImage: `url(${a.tabShine})` },
                            }),
                            !d &&
                                o().createElement(
                                    'div',
                                    { className: mt, onMouseEnter: B, onMouseLeave: () => F(!1), onClick: D },
                                    c.boxNames.dynOpt(e),
                                ),
                        );
                    }),
                    Bt = 'Tabs_base_0f',
                    _t = 'Tabs_tabs_60',
                    Ct = (0, xe.Pi)(({ className: e, forwardRef: u }) => {
                        const t = du().model,
                            r = t.boxes.get();
                        return o().createElement(
                            'div',
                            { className: l()(Bt, e), ref: u },
                            o().createElement(
                                'div',
                                { className: l()(_t) },
                                Oe(r, (e) =>
                                    o().createElement(
                                        rt,
                                        {
                                            contentId: R.views.lobby.lootbox_system.tooltips.BoxTooltip('resId'),
                                            args: { boxCategory: e.category, eventName: t.eventName },
                                            key: e.category,
                                        },
                                        o().createElement('div', null, o().createElement(Dt, { category: e.category })),
                                    ),
                                ),
                            ),
                            o().createElement(ot, null),
                        );
                    }),
                    gt = 'Divider_base_7b',
                    ht = 'Divider_base__first_e4',
                    pt = ({ isFirst: e = !1 }) => o().createElement('div', { className: l()(gt, e && ht) }),
                    ft = 'ComplexNumber_base_8f',
                    vt = 'ComplexNumber_integer_6d',
                    bt = 'ComplexNumber_fraction_3b',
                    wt = ({ probability: e }) => {
                        const u = ((e) => {
                                if (Number.isInteger(e)) return { integer: String(e), separator: '', fraction: '' };
                                const u = be.Z5.getRealFormat(e, be.Gr.FRACTIONAL),
                                    t = u.match(/[^0-9]/);
                                if (t) {
                                    const e = t[0],
                                        r = u.indexOf(e);
                                    return {
                                        integer: u.substring(0, r),
                                        separator: e,
                                        fraction: u.substring(r + 1).replace(/^|0+$/g, ''),
                                    };
                                }
                                return (
                                    console.warn(`number isn't an integer or contains an unsupported separator ${e}`),
                                    { integer: String(e), separator: '', fraction: '' }
                                );
                            })(e),
                            t = u.integer,
                            r = u.separator,
                            n = u.fraction;
                        return o().createElement(
                            'span',
                            { className: ft },
                            o().createElement('span', { className: vt }, t, r),
                            Boolean(n) && o().createElement('span', { className: bt }, n),
                        );
                    };
                var yt = t(2862),
                    xt = t(3633),
                    St = t(6845),
                    Tt = t(114);
                const kt = ['style', 'style_3d'],
                    Pt = (e) => {
                        const u = e.name,
                            t = e.icon;
                        switch (u) {
                            case yt.E4.Vehicles:
                                return !0;
                            case yt.E4.Customizations:
                                return kt.includes(t);
                            default:
                                return !1;
                        }
                    };
                let Rt;
                !(function (e) {
                    (e.Disable = 'disable'), (e.Active = 'active'), (e.Default = 'default');
                })(Rt || (Rt = {}));
                const Lt = {
                        base: 'Title_base_21',
                        title: 'Title_title_15',
                        name: 'Title_name_7a',
                        name__aligned: 'Title_name__aligned_a7',
                        base__credits: 'Title_base__credits_b5',
                        base__equipCoin: 'Title_base__equipCoin_a4',
                        base__freeXP: 'Title_base__freeXP_1b',
                        base__bptaler: 'Title_base__bptaler_4e',
                        base__crystal: 'Title_base__crystal_67',
                        base__gold: 'Title_base__gold_af',
                        base__premium_plus: 'Title_base__premium_plus_b9',
                        pluralText: 'Title_pluralText_b8',
                        label: 'Title_label_db',
                    },
                    Nt = (0, xe.Pi)(({ reward: e, className: u }) => {
                        const t = du().model,
                            r = t.computes.resources().texts,
                            n = t.computes.dynamicResources().dynamicTexts,
                            a = e.name,
                            s = e.value,
                            i = e.label,
                            c = a === yt.E4.PremiumPlus,
                            E = a === yt.E4.TmanToken,
                            d = s
                                .split(' %(divider) ')
                                .sort((e, u) => Number(e) - Number(u))
                                .join(' %(divider) ');
                        return o().createElement(
                            'div',
                            { className: l()(Lt.base, Lt[`base__${a}`], u) },
                            s &&
                                !E &&
                                o().createElement(
                                    'div',
                                    { className: Lt.title },
                                    o().createElement(fu, {
                                        text: ((A = d), A.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&nbsp;')),
                                        binding: {
                                            divider: o().createElement(
                                                'span',
                                                { className: Lt.label },
                                                r.rewardsDivider,
                                            ),
                                        },
                                        classMix: l()(Lt.name, c && Lt.name__aligned),
                                    }),
                                    c &&
                                        o().createElement(
                                            'span',
                                            { className: Lt.pluralText },
                                            n.rewardsPremiumDay.plural('premiumDay', Number(s.split(' ').at(-1))),
                                        ),
                                ),
                            o().createElement(fu, { text: i, classMix: Lt.label }),
                        );
                        var A;
                    }),
                    Mt = 'Reward_base_30',
                    Ot = 'Reward_rewardImage_eb',
                    It = 'Reward_icon_96',
                    Ht = 'Reward_icon__semiTransparent_e8',
                    $t = 'Reward_icon__hovered_70',
                    Gt = 'Reward_overlay_d4',
                    Wt = 'Reward_count_b2',
                    Ut = 'Reward_checkmark_51',
                    zt = 'Reward_loupeButton_26',
                    jt = 'Reward_loupeIcon_93',
                    qt = 'Reward_tankName_0b',
                    Vt = (0, xe.Pi)(({ reward: e }) => {
                        const u = du(),
                            t = u.model,
                            r = u.controls,
                            n = e.name,
                            a = e.id,
                            i = e.tooltipId,
                            c = e.tooltipContentId,
                            E = e.count,
                            d = e.overlayType,
                            A = e.styleID,
                            m = e.isInHangar,
                            F = e.icon,
                            D = t.computes.resources(),
                            B = D.images,
                            _ = D.texts,
                            C = (0, s.useState)(!1),
                            g = C[0],
                            h = C[1],
                            p = n === yt.E4.Vehicles;
                        return o().createElement(
                            'div',
                            { className: Mt },
                            o().createElement(
                                rt,
                                {
                                    ignoreShowDelay: !0,
                                    contentId: Number(c),
                                    args: { tooltipId: i, boxCategory: F, eventName: t.eventName },
                                },
                                o().createElement(
                                    'div',
                                    {
                                        className: Ot,
                                        onMouseEnter: () => {
                                            Pt(e) && h(!0);
                                        },
                                        onMouseLeave: () => h(!1),
                                    },
                                    o().createElement('div', {
                                        className: l()(It, m && Ht, g && $t),
                                        style: { backgroundImage: `url(${(0, Tt.ry)(e)})` },
                                    }),
                                    d &&
                                        o().createElement('div', {
                                            className: Gt,
                                            style: { backgroundImage: `url(${(0, Tt.rj)(yt.h2.S180x135, n, d)})` },
                                        }),
                                    m &&
                                        o().createElement('div', {
                                            className: Ut,
                                            style: { backgroundImage: `url(${B.checkmark})` },
                                        }),
                                    E > 1 &&
                                        o().createElement(
                                            'div',
                                            { className: Wt },
                                            ((f = _.rewardsMultiplier),
                                            (v = { count: E }),
                                            f.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                                const u = 0 === e.indexOf('%') ? 2 : 1;
                                                return String(v[e.slice(u, -u)]);
                                            })),
                                        ),
                                    Pt(e) &&
                                        o().createElement(xt.k, {
                                            className: zt,
                                            icon: { img: B.previewIcon, className: jt },
                                            onClick: () => {
                                                r.saveCategory(t.activeCategory.get()),
                                                    r.showPreview({ bonusType: n, bonusId: a || '', styleID: A });
                                            },
                                        }),
                                ),
                            ),
                            p
                                ? o().createElement(St.U, {
                                      reward: e,
                                      style: { nameHeight: '14rem' },
                                      className: qt,
                                      usagePlace: $e.qA.InfoPage,
                                  })
                                : o().createElement(Nt, { reward: e }),
                        );
                        var f, v;
                    }),
                    Xt = 'RewardBlock_base_ab',
                    Yt = 'RewardBlock_rewardBlock_1b',
                    Zt = 'RewardBlock_probabilityBlock_48',
                    Kt = 'RewardBlock_probability_66',
                    Qt = 'RewardBlock_probability__fraction_3b',
                    Jt = 'RewardBlock_percent_03',
                    er = 'RewardBlock_rewards_5c',
                    ur = (0, xe.Pi)(({ probability: e, bonuses: u }) => {
                        const t = du().model.computes.resources().texts,
                            r = e % 1 > 0;
                        return o().createElement(
                            'div',
                            { className: Xt },
                            o().createElement(
                                'div',
                                { className: Yt },
                                o().createElement(
                                    'div',
                                    { className: Zt },
                                    o().createElement(
                                        'div',
                                        { className: l()(Kt, r && Qt) },
                                        o().createElement(wt, { probability: e }),
                                        o().createElement('div', { className: l()(r && Jt) }, t.rewardsPercent),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: er },
                                    Oe(u, (e, u) => o().createElement(Vt, { key: u, reward: e })),
                                ),
                            ),
                            o().createElement(pt, null),
                        );
                    }),
                    tr = { base: 'Rewards_base_bf', tabs__hide: 'Rewards_tabs__hide_90' },
                    rr = (0, xe.Pi)(({ scrollApi: e }) => {
                        const u = du(),
                            t = u.model,
                            r = u.controls,
                            n = t.activeCategory.get(),
                            a = t.computes.getSlots(n),
                            i = t.computes.displayTabs(),
                            c = t.sticky.get(),
                            E = (0, s.useRef)(null);
                        return (
                            (0, s.useEffect)(() => {
                                const u = (e) => {
                                    r.setSticky(Boolean(E.current && e.value.scrollPosition >= E.current.offsetTop));
                                };
                                return (
                                    e.events.on('change', u),
                                    () => {
                                        e.events.off('change', u);
                                    }
                                );
                            }, [r, e.events]),
                            o().createElement(
                                'div',
                                { className: tr.base },
                                i
                                    ? o().createElement(Ct, {
                                          className: l()(tr.tabs, c && tr.tabs__hide),
                                          forwardRef: E,
                                      })
                                    : o().createElement(pt, { isFirst: !0 }),
                                o().createElement(
                                    'div',
                                    null,
                                    Oe(a, ({ probability: e, bonuses: u }, t) =>
                                        o().createElement(ur, { key: t, probability: e, bonuses: u }),
                                    ),
                                ),
                            )
                        );
                    }),
                    nr = (0, xe.Pi)(() => {
                        const e = du(),
                            u = e.model,
                            t = e.controls,
                            r = u.computes.resources(),
                            n = r.images,
                            a = r.texts,
                            s = ue(),
                            i = u.sticky.get(),
                            c = u.computes.displayTabs();
                        var E;
                        return (
                            (E = t.close),
                            ye(ve.n.ESCAPE, E),
                            o().createElement(
                                'div',
                                { className: Au, style: { backgroundImage: `url(${n.background})` } },
                                o().createElement(
                                    'div',
                                    { className: mu, style: { maskImage: `url(${n.mask})` } },
                                    o().createElement(
                                        Ce.Vertical.Default,
                                        {
                                            api: s,
                                            className: Fu,
                                            barClassNames: { base: Du },
                                            scrollClassNames: { content: Bu },
                                        },
                                        o().createElement(
                                            'div',
                                            { className: _u },
                                            o().createElement(Ju, null),
                                            o().createElement(rr, { scrollApi: s }),
                                            o().createElement(ku, null),
                                        ),
                                    ),
                                ),
                                c &&
                                    o().createElement(
                                        'div',
                                        { className: l()(Cu, i && gu) },
                                        o().createElement(Ct, null),
                                    ),
                                o().createElement(
                                    'div',
                                    { className: hu },
                                    o().createElement(fe, {
                                        caption: a.backButton,
                                        type: 'back',
                                        side: 'left',
                                        onClick: t.close,
                                    }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    p().render(
                        o().createElement(Eu, null, o().createElement(g, null, o().createElement(nr, null))),
                        document.getElementById('root'),
                    );
                });
            },
            1579: (e, u, t) => {
                'use strict';
                t.d(u, { X: () => l });
                var r = t(3457),
                    n = t(2106),
                    a = t(7363),
                    s = t.n(a);
                const o = 'BigButton_button_76',
                    i = 'BigButton_text_35',
                    l = ({ text: e, onClick: u, soundHover: t = null }) =>
                        s().createElement(
                            r.u5,
                            { type: n.L.main, soundHover: t, onClick: u, mixClass: o },
                            s().createElement('span', { className: i }, e),
                        );
            },
            3633: (e, u, t) => {
                'use strict';
                t.d(u, { k: () => c });
                var r = t(6483),
                    n = t.n(r),
                    a = t(514),
                    s = t(7363),
                    o = t.n(s);
                const i = 'LoupeButton_base_bb',
                    l = 'LoupeButton_icon_07',
                    c = ({ onClick: e, icon: u, className: t = '' }) =>
                        o().createElement(
                            'div',
                            {
                                className: n()(i, t),
                                onMouseEnter: () => {
                                    a.hY.highlight();
                                },
                                onClick: e,
                            },
                            o().createElement('div', {
                                className: n()(l, u.className),
                                style: { backgroundImage: `url(${u.img})` },
                            }),
                        );
            },
            6845: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => d });
                var r = t(6483),
                    n = t.n(r),
                    a = t(5415),
                    s = t(9690),
                    o = t(7363),
                    i = t.n(o),
                    l = t(3905);
                const c = { base: 'TankName_base_14', type: 'TankName_type_49' },
                    E = (e, u, t) => ({
                        backgroundImage: `url(${`R.images.gui.maps.icons.vehicleTypes.${t ? 'c_48x48' : 'c_24x24'}.${`${e.replace('-', '_')}${u ? '_elite' : ''}`}`})`,
                    }),
                    d = ({ reward: e, style: u, className: t = '', usagePlace: r }) => {
                        const o = (0, a.GS)().mediaSize,
                            d = e.label,
                            A = e.level,
                            m = e.type,
                            F = e.isElite,
                            D = e.vehicleShortName;
                        return i().createElement(
                            'div',
                            { className: n()(c.base, t), style: { fontSize: u.nameHeight } },
                            void 0 !== A && i().createElement('div', { className: c.level }, (0, s.HG)(A)),
                            void 0 !== m &&
                                void 0 !== F &&
                                i().createElement('div', { className: c.type, style: E(m, F, o >= a.cJ.Medium) }),
                            i().createElement('div', null, r === l.qA.InfoPage ? D : d),
                        );
                    };
            },
            3905: (e, u, t) => {
                'use strict';
                t.d(u, { N7: () => a, _g: () => s, fR: () => n, qA: () => o });
                var r = t(114);
                const n = ['gold', 'credits', 'premium_plus', 'freeXP', 'crystal', 'equipCoin'];
                let a, s, o;
                !(function (e) {
                    (e.EntryPoint = 'ENTRY_POINT'),
                        (e.InfoPage = 'INFO_PAGE'),
                        (e.Rewards = 'REWARDS'),
                        (e.HasBoxesView = 'HAS_BOXES_VIEW');
                })(a || (a = {})),
                    (function (e) {
                        (e.Videos = 'videos'),
                            (e.Images = 'images'),
                            (e.Texts = 'texts'),
                            (e.Sounds = 'sounds'),
                            (e.DynamicVideos = 'dynamicVideos'),
                            (e.DynamicImages = 'dynamicImages'),
                            (e.DynamicTexts = 'dynamicTexts');
                    })(s || (s = {})),
                    (function (e) {
                        e.InfoPage = 'infoPage';
                    })(o || (o = {}));
                r.tB.attachment;
            },
            9623: (e, u, t) => {
                'use strict';
                t.d(u, { $r: () => s, Vk: () => o, ff: () => a });
                var r = t(2691);
                const n = (e, u) => {
                        const t = (0, r.R)(R.images, e);
                        return t || u;
                    },
                    a = (e, u, t) =>
                        n(
                            `gui.maps.icons.quests.bonuses.${e}.${u}`,
                            `R.images.gui.maps.icons.quests.bonuses.${e}.${t}`,
                        ),
                    s = (e, u, t) =>
                        n(
                            `gui.maps.vehicles.attachments.${e}.${u}`,
                            `R.images.gui.maps.icons.quests.bonuses.${e}.${t}`,
                        ),
                    o = (e, u) => a(e, `lootBox_${u}`, 'lootBox_default');
            },
            114: (e, u, t) => {
                'use strict';
                t.d(u, { rj: () => i, ry: () => o, tB: () => a });
                var r = t(2862),
                    n = t(9623);
                const a = {
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
                    },
                    s = (e) => {
                        switch (e) {
                            case r.h2.S600x450:
                                return 'c_600x450';
                            case r.h2.S180x135:
                                return 'c_180x135';
                            default:
                                return e;
                        }
                    },
                    o = (e, u = r.h2.S180x135, t = !1) => {
                        const o = t ? e.compensation : e,
                            i = o.name,
                            l = o.icon,
                            c = o.value,
                            E = e.id,
                            d = e.isRent;
                        switch (i) {
                            case a.vehicles:
                                return d
                                    ? `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles_rent`
                                    : l
                                      ? `R.images.gui.maps.shop.vehicles.${s(u)}.${l}`
                                      : `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case a.customizations:
                                return (0, n.ff)(u, `${l}_${E}`, l);
                            case a.attachment:
                                return (0, n.$r)(u, l, i);
                            case a.basic:
                            case a.plus:
                            case a.premium:
                            case a.premiumPlus:
                            case a.items:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${l}`;
                            case a.blueprints:
                            case a.blueprintsAny:
                            case a.finalBlueprints:
                            case a.randomNationalBlueprint:
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${l}`;
                            case a.tokens:
                            case a.styleProgress:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${l}`;
                            case a.crewBooks:
                            case a.randomNationalBrochure:
                            case a.randomNationalGuide:
                            case a.randomNationalCrewBook:
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${l}`;
                            case a.crewSkins:
                            case a.goodies:
                            case a.groups:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${l}`;
                            case a.dossierBadge:
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${s(u)}.${l}`;
                            case a.dossierAchievement:
                                return `R.images.gui.maps.icons.achievement.${s(u)}.${l}`;
                            case a.xp:
                            case a.xpFactor:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                            case a.creditsFactor:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                            case a.crystal:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.crystal`;
                            case a.tankmenXPFactor:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                            case a.dailyXPFactor:
                            case a.freeXPFactor:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                            case a.tmanToken:
                            case a.battlePassSelectToken:
                                return (0, n.ff)(u, `${l}_${c}`, l);
                            case a.premiumTank:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case a.styleProgressToken:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case a.lootBox:
                                return (0, n.Vk)(u, l);
                            case a.collectionItem:
                                return `R.images.gui.maps.icons.collectionItems.${s(u)}.${l}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${l}`;
                        }
                    },
                    i = (e, u, t) =>
                        u === a.attachment
                            ? `R.images.gui.maps.icons.customization.rarity.glowWithSign.${e}.${t}`
                            : `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_overlay`;
            },
            6880: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = {
                    base: 'CButton_base_40',
                    base__main: 'CButton_base__main_42',
                    base__primary: 'CButton_base__primary_7f',
                    base__primaryGreen: 'CButton_base__primaryGreen_6f',
                    base__primaryRed: 'CButton_base__primaryRed_ec',
                    base__secondary: 'CButton_base__secondary_50',
                    base__ghost: 'CButton_base__ghost_ed',
                    base__extraSmall: 'CButton_base__extraSmall_27',
                    base__small: 'CButton_base__small_df',
                    base__medium: 'CButton_base__medium_74',
                    base__large: 'CButton_base__large_5c',
                    base__disabled: 'CButton_base__disabled_d9',
                    back: 'CButton_back_e5',
                    texture: 'CButton_texture_fe',
                    state: 'CButton_state_11',
                    base__focus: 'CButton_base__focus_83',
                    stateHighlightHover: 'CButton_stateHighlightHover_ff',
                    stateHighlightActive: 'CButton_stateHighlightActive_35',
                    stateDisabled: 'CButton_stateDisabled_54',
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };
            },
            7363: (e) => {
                'use strict';
                e.exports = React;
            },
            1533: (e) => {
                'use strict';
                e.exports = ReactDOM;
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, r) => {
            if (!u) {
                var n = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, r] = deferred[i], a = !0, s = 0; s < u.length; s++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > r; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, r];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(u, { a: u }), u;
        }),
        (__webpack_require__.d = (e, u) => {
            for (var t in u)
                __webpack_require__.o(u, t) &&
                    !__webpack_require__.o(e, t) &&
                    Object.defineProperty(e, t, { enumerable: !0, get: u[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, u) => Object.prototype.hasOwnProperty.call(e, u)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 686),
        (() => {
            var e = { 686: 0, 8: 0, 79: 0, 35: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        n,
                        [a, s, o] = t,
                        i = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < a.length; i++)
                        (n = a[i]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [866], () => __webpack_require__(3293));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
