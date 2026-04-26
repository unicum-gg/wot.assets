(() => {
    var __webpack_modules__ = {
            2372: (u, e, t) => {
                'use strict';
                t.d(e, { A: () => a });
                var r = t(6179),
                    n = t.n(r),
                    o = t(4179);
                class a extends n().PureComponent {
                    render() {
                        let u;
                        u = 'gold' === this.props.format ? o.B3.GOLD : o.B3.INTEGRAL;
                        const e = o.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                a.defaultProps = { format: 'integral' };
            },
            3495: (u, e, t) => {
                'use strict';
                t.d(e, { Y: () => E });
                var r = t(3138),
                    n = t(6179),
                    o = t(1043),
                    a = t(5262);
                const i = r.O.client.getSize('rem'),
                    s = i.width,
                    l = i.height,
                    c = Object.assign({ width: s, height: l }, (0, a.T)(s, l, o.j)),
                    E = (0, n.createContext)(c);
            },
            1039: (u, e, t) => {
                'use strict';
                var r = t(6179),
                    n = t.n(r),
                    o = t(6536),
                    a = t(3495),
                    i = t(1043),
                    s = t(5262),
                    l = t(3138);
                (0, r.memo)(({ children: u }) => {
                    const e = (0, r.useContext)(a.Y),
                        t = (0, r.useState)(e),
                        c = t[0],
                        E = t[1],
                        A = (0, r.useCallback)((u, e) => {
                            const t = l.O.view.pxToRem(u),
                                r = l.O.view.pxToRem(e);
                            E(Object.assign({ width: t, height: r }, (0, s.T)(t, r, i.j)));
                        }, []);
                    ((0, o.Z)(() => {
                        engine.on('clientResized', A);
                    }),
                        (0, r.useEffect)(() => () => engine.off('clientResized', A), [A]));
                    const F = (0, r.useMemo)(() => Object.assign({}, c), [c]);
                    return n().createElement(a.Y.Provider, { value: F }, u);
                });
            },
            6010: (u, e, t) => {
                'use strict';
                var r = t(6179),
                    n = t(7382),
                    o = t(3495);
                const a = ['children'],
                    i = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    o = Object.keys(u);
                                for (r = 0; r < o.length; r++) ((t = o[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, a);
                        const i = (0, r.useContext)(o.Y),
                            s = i.extraLarge,
                            l = i.large,
                            c = i.medium,
                            E = i.small,
                            A = i.extraSmall,
                            F = i.extraLargeWidth,
                            _ = i.largeWidth,
                            d = i.mediumWidth,
                            m = i.smallWidth,
                            D = i.extraSmallWidth,
                            B = i.extraLargeHeight,
                            C = i.largeHeight,
                            g = i.mediumHeight,
                            p = i.smallHeight,
                            h = i.extraSmallHeight,
                            b = { extraLarge: B, large: C, medium: g, small: p, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && s) return e;
                            if (t.large && l) return e;
                            if (t.medium && c) return e;
                            if (t.small && E) return e;
                            if (t.extraSmall && A) return e;
                        } else {
                            if (t.extraLargeWidth && F) return (0, n.H)(e, t, b);
                            if (t.largeWidth && _) return (0, n.H)(e, t, b);
                            if (t.mediumWidth && d) return (0, n.H)(e, t, b);
                            if (t.smallWidth && m) return (0, n.H)(e, t, b);
                            if (t.extraSmallWidth && D) return (0, n.H)(e, t, b);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && B) return e;
                                if (t.largeHeight && C) return e;
                                if (t.mediumHeight && g) return e;
                                if (t.smallHeight && p) return e;
                                if (t.extraSmallHeight && h) return e;
                            }
                        }
                        return null;
                    };
                ((i.defaultProps = {
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
                }),
                    (0, r.memo)(i));
            },
            7382: (u, e, t) => {
                'use strict';
                t.d(e, { H: () => r });
                const r = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
            },
            7739: (u, e, t) => {
                'use strict';
                (t.d(e, { YN: () => r.Y }), t(6010), t(1039));
                var r = t(3495);
            },
            1043: (u, e, t) => {
                'use strict';
                t.d(e, { j: () => r });
                const r = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (u, e, t) => {
                'use strict';
                var r;
                function n(u, e, t) {
                    const r = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.width:
                                    return e.extraLarge.weight;
                                case u >= e.large.width && u < e.extraLarge.width:
                                    return e.large.weight;
                                case u >= e.medium.width && u < e.large.width:
                                    return e.medium.weight;
                                case u >= e.small.width && u < e.medium.width:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(u, t),
                        n = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.height:
                                    return e.extraLarge.weight;
                                case u >= e.large.height && u < e.extraLarge.height:
                                    return e.large.weight;
                                case u >= e.medium.height && u < e.large.height:
                                    return e.medium.weight;
                                case u >= e.small.height && u < e.medium.height:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(e, t),
                        o = Math.min(r, n);
                    return {
                        extraLarge: o === t.extraLarge.weight,
                        large: o === t.large.weight,
                        medium: o === t.medium.weight,
                        small: o === t.small.weight,
                        extraSmall: o === t.extraSmall.weight,
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
                (t.d(e, { T: () => n }),
                    (function (u) {
                        ((u.extraLarge = 'extraLarge'),
                            (u.large = 'large'),
                            (u.medium = 'medium'),
                            (u.small = 'small'),
                            (u.extraSmall = 'extraSmall'),
                            (u.extraLargeWidth = 'extraLargeWidth'),
                            (u.largeWidth = 'largeWidth'),
                            (u.mediumWidth = 'mediumWidth'),
                            (u.smallWidth = 'smallWidth'),
                            (u.extraSmallWidth = 'extraSmallWidth'),
                            (u.extraLargeHeight = 'extraLargeHeight'),
                            (u.largeHeight = 'largeHeight'),
                            (u.mediumHeight = 'mediumHeight'),
                            (u.smallHeight = 'smallHeight'),
                            (u.extraSmallHeight = 'extraSmallHeight'));
                    })(r || (r = {})));
            },
            7061: (u, e, t) => {
                'use strict';
                t.d(e, { M: () => A });
                var r = t(6483),
                    n = t.n(r),
                    o = t(7727),
                    a = t(6179),
                    i = t.n(a),
                    s = t(5612);
                const l = [
                    'label',
                    'isVisibleLabel',
                    'autofocus',
                    'soundHover',
                    'soundClick',
                    'size',
                    'classNames',
                    'onClick',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseDown',
                    'onMouseUp',
                    'onFocus',
                    'onBlur',
                ];
                function c() {
                    return (
                        (c =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        c.apply(this, arguments)
                    );
                }
                let E;
                !(function (u) {
                    ((u.SMALL = 'small'), (u.NORMAL = 'normal'));
                })(E || (E = {}));
                const A = (0, a.memo)((u) => {
                    let e = u.label,
                        t = u.isVisibleLabel,
                        r = void 0 !== t && t,
                        A = u.autofocus,
                        F = void 0 !== A && A,
                        _ = u.soundHover,
                        d = void 0 === _ ? 'highlight' : _,
                        m = u.soundClick,
                        D = void 0 === m ? 'play' : m,
                        B = u.size,
                        C = void 0 === B ? E.NORMAL : B,
                        g = u.classNames,
                        p = u.onClick,
                        h = u.onMouseEnter,
                        b = u.onMouseLeave,
                        S = u.onMouseDown,
                        v = u.onMouseUp,
                        w = u.onFocus,
                        x = u.onBlur,
                        f = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                o = Object.keys(u);
                            for (r = 0; r < o.length; r++) ((t = o[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                            return n;
                        })(u, l);
                    const R = (0, a.useState)(!1),
                        T = R[0],
                        L = R[1],
                        y = (0, a.useState)(!1),
                        P = y[0],
                        O = y[1],
                        k = (0, a.useState)(F),
                        M = k[0],
                        N = k[1],
                        I = (0, a.useRef)(null),
                        U = (0, a.useCallback)(() => {
                            I.current && (I.current.focus(), N(!0));
                        }, []),
                        H = (0, a.useCallback)(
                            (u) => {
                                M && null !== I.current && !I.current.contains(u.target) && N(!1);
                            },
                            [M],
                        );
                    ((0, a.useEffect)(
                        () => (
                            document.addEventListener('mousedown', H),
                            () => {
                                document.removeEventListener('mousedown', H);
                            }
                        ),
                        [H],
                    ),
                        (0, a.useEffect)(() => {
                            N(F);
                        }, [F]));
                    const G = (0, a.useCallback)(
                            (u) => {
                                p && p(u);
                            },
                            [p],
                        ),
                        W = (0, a.useCallback)(
                            (u) => {
                                (L(!0), S && S(u), D && (0, o.G)(D), F && U());
                            },
                            [F, S, U, D],
                        ),
                        X = (0, a.useCallback)(
                            (u) => {
                                (L(!1), v && v(u));
                            },
                            [v],
                        ),
                        V = (0, a.useCallback)(
                            (u) => {
                                (h && h(u), d && (0, o.G)(d), O(!0));
                            },
                            [h, d],
                        ),
                        j = (0, a.useCallback)(
                            (u) => {
                                (L(!1), O(!1), b && b(u));
                            },
                            [b],
                        ),
                        $ = (0, a.useCallback)(
                            (u) => {
                                (N(!0), w && w(u));
                            },
                            [w],
                        ),
                        q = (0, a.useCallback)(
                            (u) => {
                                (N(!1), x && x(u));
                            },
                            [x],
                        ),
                        Y = n()(
                            s.Z.base,
                            r && s.Z.base__visibleLabel,
                            T && s.Z.base__mouseDown,
                            P && s.Z.base__hovered,
                            M && s.Z.base__focused,
                            null == g ? void 0 : g.base,
                        ),
                        K = n()(s.Z.icon, s.Z[`icon__${C}`], null == g ? void 0 : g.icon),
                        z = n()(s.Z.label, null == g ? void 0 : g.label);
                    return i().createElement(
                        'div',
                        c(
                            {
                                ref: I,
                                className: Y,
                                onClick: G,
                                onMouseEnter: V,
                                onMouseLeave: j,
                                onMouseDown: W,
                                onMouseUp: X,
                                onFocus: $,
                                onBlur: q,
                            },
                            f,
                        ),
                        i().createElement('div', { className: K }),
                        i().createElement('div', { className: z }, e),
                    );
                });
            },
            5739: (u, e, t) => {
                'use strict';
                t.d(e, { Q: () => E });
                var r = t(6483),
                    n = t.n(r),
                    o = t(6179),
                    a = t.n(o),
                    i = t(3415),
                    s = t(2862),
                    l = t(729),
                    c = t(1609);
                const E = ({
                    name: u,
                    image: e,
                    isPeriodic: t = !1,
                    size: r = s.h2.Big,
                    special: o,
                    value: E,
                    valueType: A,
                    style: F,
                    className: _,
                    classNames: d,
                    tooltipArgs: m,
                    periodicIconTooltipArgs: D,
                }) => {
                    const B = (0, l.L_)(o),
                        C = (0, l.i2)(o),
                        g = (0, l.m9)(E, A);
                    return a().createElement(
                        'div',
                        { className: n()(c.Z.base, c.Z[`base__${r}`], _), style: F },
                        a().createElement(
                            i.l,
                            { tooltipArgs: m, className: c.Z.tooltipWrapper },
                            a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(
                                    'div',
                                    { className: n()(c.Z.image, null == d ? void 0 : d.image) },
                                    B &&
                                        a().createElement('div', {
                                            className: n()(c.Z.highlight, null == d ? void 0 : d.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${B}_highlight)`,
                                            },
                                        }),
                                    e &&
                                        a().createElement('div', {
                                            className: n()(c.Z.icon, null == d ? void 0 : d.rewardIcon),
                                            style: { backgroundImage: `url(${e})` },
                                        }),
                                    C &&
                                        a().createElement('div', {
                                            className: n()(c.Z.overlay, null == d ? void 0 : d.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${C}_overlay)`,
                                            },
                                        }),
                                ),
                                g &&
                                    a().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                c.Z.info,
                                                c.Z[`info__${u}`],
                                                A === s.$h.MULTI && c.Z.info__multi,
                                                null == d ? void 0 : d.info,
                                            ),
                                        },
                                        g,
                                    ),
                            ),
                        ),
                        t &&
                            a().createElement(
                                i.l,
                                { tooltipArgs: D },
                                a().createElement('div', {
                                    className: n()(c.Z.timer, null == d ? void 0 : d.periodicIcon),
                                }),
                            ),
                    );
                };
            },
            2862: (u, e, t) => {
                'use strict';
                let r, n, o, a, i, s, l;
                (t.d(e, { $h: () => a, A2: () => s, E4: () => r, h2: () => o, kK: () => i, sh: () => l }),
                    (function (u) {
                        ((u.Items = 'items'),
                            (u.Equipment = 'equipment'),
                            (u.Xp = 'xp'),
                            (u.XpFactor = 'xpFactor'),
                            (u.Blueprints = 'blueprints'),
                            (u.BlueprintsAny = 'blueprintsAny'),
                            (u.Goodies = 'goodies'),
                            (u.Berths = 'berths'),
                            (u.Slots = 'slots'),
                            (u.Tokens = 'tokens'),
                            (u.CrewSkins = 'crewSkins'),
                            (u.CrewBooks = 'crewBooks'),
                            (u.Customizations = 'customizations'),
                            (u.CreditsFactor = 'creditsFactor'),
                            (u.Currency = 'currency'),
                            (u.TankmenXp = 'tankmenXP'),
                            (u.TankmenXpFactor = 'tankmenXPFactor'),
                            (u.FreeXpFactor = 'freeXPFactor'),
                            (u.BattleToken = 'battleToken'),
                            (u.PremiumUniversal = 'premium_universal'),
                            (u.Gold = 'gold'),
                            (u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.FreeXp = 'freeXP'),
                            (u.Premium = 'premium'),
                            (u.PremiumPlus = 'premium_plus'),
                            (u.BattlePassPoints = 'battlePassPoints'),
                            (u.BattlePassSelectToken = 'battlePassSelectToken'),
                            (u.SelectableBonus = 'selectableBonus'),
                            (u.StyleProgressToken = 'styleProgressToken'),
                            (u.TmanToken = 'tmanToken'),
                            (u.NaturalCover = 'naturalCover'),
                            (u.BpCoin = 'bpcoin'),
                            (u.BattlaPassFinalAchievement = 'dossier_achievement'),
                            (u.BattleBadge = 'dossier_badge'),
                            (u.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                            (u.NewYearFillers = 'ny22Fillers'),
                            (u.NewYearInvoice = 'newYearInvoice'),
                            (u.NewYearToyFragments = 'ny22ToyFragments'),
                            (u.NewYearSlot = 'newYearSlot'),
                            (u.BonusX5 = 'battle_bonus_x5'),
                            (u.CrewBonusX3 = 'crew_bonus_x3'),
                            (u.Vehicles = 'vehicles'),
                            (u.EpicSelectToken = 'epicSelectToken'),
                            (u.CollectionItem = 'collectionItem'),
                            (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                            (u.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                            (u.BattleBoosterGift = 'battleBooster_gift'),
                            (u.CosmicLootboxSilver = 'lootBoxToken'),
                            (u.CosmicLootboxCommon = 'cosmic_2024_2'),
                            (u.Branch = 'branch'),
                            (u.VehicleSelect = 'vehicleSelect'),
                            (u.StyleProgress = 'styleProgress'),
                            (u.ParagonsUnlocks = 'paragonsUnlocks'),
                            (u.HistoricalBattleDiscount25 = 'historical_battles_main_discount'),
                            (u.LootBoxToken = 'lootBoxToken'),
                            (u.GoldenTicket = 'birthday2025_golden_ticket'),
                            (u.PostStamp = 'giftsystem_4_stamp'),
                            (u.Quests = 'quests'),
                            (u.ArmoryCoin = 'armory_coin'),
                            (u.PremiumPlusUniversal = 'premium_plus_universal'),
                            (u.DogTagType = 'dogTagComponents'));
                    })(r || (r = {})),
                    (function (u) {
                        ((u.Gold = 'gold'),
                            (u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.Premium = 'premium'),
                            (u.PremiumPlus = 'premium_plus'),
                            (u.Vehicles = 'vehicles'),
                            (u.Customizations = 'customizations'),
                            (u.Blueprints = 'blueprints'),
                            (u.BlueprintsAny = 'blueprintsAny'),
                            (u.BlueprintsFinal = 'finalBlueprints'),
                            (u.Goodies = 'goodies'),
                            (u.CrewSkins = 'crewSkins'),
                            (u.Xp = 'xp'),
                            (u.XpFactor = 'xpFactor'),
                            (u.FreeXp = 'freeXP'),
                            (u.FreeXPFactor = 'freeXPFactor'),
                            (u.TankmenXP = 'tankmenXP'),
                            (u.TankmenXPFactor = 'tankmenXPFactor'),
                            (u.DailyXPFactor = 'dailyXPFactor'),
                            (u.CreditsFactor = 'creditsFactor'),
                            (u.Items = 'items'),
                            (u.StrBonus = 'strBonus'),
                            (u.Groups = 'groups'),
                            (u.Berths = 'berths'),
                            (u.Slots = 'slots'),
                            (u.Meta = 'meta'),
                            (u.Tokens = 'tokens'),
                            (u.Dossier = 'dossier'),
                            (u.OneOf = 'oneof'),
                            (u.PremiumUniversal = 'premium_universal'),
                            (u.BadgesGroup = 'badgesGroup'),
                            (u.RankedDailyBattles = 'rankedDailyBattles'),
                            (u.RankedBonusBattles = 'rankedBonusBattles'),
                            (u.BattlePassPoints = 'battlePassPoints'),
                            (u.BattleBadge = 'dossier_badge'),
                            (u.BattleAchievement = 'dossier_achievement'));
                    })(n || (n = {})),
                    (function (u) {
                        ((u.Big = 'big'),
                            (u.Small = 'small'),
                            (u.Mini = 'mini'),
                            (u.S600x450 = 's600x450'),
                            (u.S400x300 = 's400x300'),
                            (u.S296x222 = 's296x222'),
                            (u.S232x174 = 's232x174'),
                            (u.S180x135 = 's180x135'),
                            (u.S128x100 = 's128x100'),
                            (u.S80x80 = 's80x80'),
                            (u.S48x48 = 's48x48'));
                    })(o || (o = {})),
                    (function (u) {
                        ((u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string'));
                    })(a || (a = {})),
                    (function (u) {
                        ((u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(i || (i = {})),
                    (function (u) {
                        u.BATTLE_BOOSTER = 'battleBooster';
                    })(s || (s = {})),
                    (function (u) {
                        ((u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(l || (l = {})));
            },
            729: (u, e, t) => {
                'use strict';
                t.d(e, { L_: () => D, i2: () => B, m9: () => C, p3: () => A, pI: () => m, ry: () => d });
                var r = t(2372),
                    n = t(6179),
                    o = t.n(n),
                    a = t(2862);
                const i = [
                        a.E4.Items,
                        a.E4.Equipment,
                        a.E4.Xp,
                        a.E4.XpFactor,
                        a.E4.Blueprints,
                        a.E4.BlueprintsAny,
                        a.E4.Goodies,
                        a.E4.Berths,
                        a.E4.Slots,
                        a.E4.Tokens,
                        a.E4.CrewSkins,
                        a.E4.CrewBooks,
                        a.E4.Customizations,
                        a.E4.CreditsFactor,
                        a.E4.TankmenXp,
                        a.E4.TankmenXpFactor,
                        a.E4.FreeXpFactor,
                        a.E4.BattleToken,
                        a.E4.PremiumUniversal,
                        a.E4.NaturalCover,
                        a.E4.BpCoin,
                        a.E4.BattlePassSelectToken,
                        a.E4.BattlaPassFinalAchievement,
                        a.E4.BattleBadge,
                        a.E4.BonusX5,
                        a.E4.CrewBonusX3,
                        a.E4.NewYearFillers,
                        a.E4.NewYearInvoice,
                        a.E4.EpicSelectToken,
                        a.E4.Comp7TokenWeeklyReward,
                        a.E4.Comp7TokenCouponReward,
                        a.E4.BattleBoosterGift,
                        a.E4.CosmicLootboxCommon,
                        a.E4.CosmicLootboxSilver,
                        a.E4.SelectableBonus,
                        a.E4.GoldenTicket,
                        a.E4.PostStamp,
                        a.E4.PremiumPlusUniversal,
                    ],
                    s = [a.E4.Gold, a.E4.Credits, a.E4.Crystal, a.E4.FreeXp],
                    l = [a.E4.BattlePassPoints],
                    c = [a.E4.PremiumPlus, a.E4.Premium];
                let E;
                !(function (u) {
                    ((u.s16 = '16'),
                        (u.s32 = '32'),
                        (u.s48 = '48'),
                        (u.s66 = '66'),
                        (u.s80 = '80'),
                        (u.s116 = '116'),
                        (u.s296 = '296'),
                        (u.s360 = '360'),
                        (u.s400 = '400'),
                        (u.s600 = '600'));
                })(E || (E = {}));
                const A = (u) =>
                        i.includes(u)
                            ? a.$h.MULTI
                            : s.includes(u)
                              ? a.$h.CURRENCY
                              : l.includes(u)
                                ? a.$h.NUMBER
                                : c.includes(u)
                                  ? a.$h.PREMIUM_PLUS
                                  : a.$h.STRING,
                    F = ['engravings', 'backgrounds'],
                    _ = ['engraving', 'background'],
                    d = (u, e = a.h2.Small) => {
                        const t = u.name,
                            r = u.type,
                            n = u.value,
                            o = u.icon,
                            i = u.item,
                            s = u.dogTagType,
                            l = ((u) => {
                                switch (u) {
                                    case a.h2.S600x450:
                                        return 'c_600x450';
                                    case a.h2.S400x300:
                                        return 'c_400x300';
                                    case a.h2.S296x222:
                                        return 'c_296x222';
                                    case a.h2.S232x174:
                                        return 'c_232x174';
                                    case a.h2.Big:
                                        return 'c_80x80';
                                    case a.h2.Small:
                                        return 'c_48x48';
                                    default:
                                        return u;
                                }
                            })(e);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${r}_${n}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_plus_${n}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${e}.${o}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((u, e) => {
                                    switch (e) {
                                        case a.h2.Big:
                                            return u.iconBig.replace('..', 'img://gui');
                                        case a.h2.Small:
                                            return u.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${e}.${u.icon}`;
                                    }
                                })(u, e);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${e}.${o}`;
                            case 'dogTagComponents':
                                return ((u, e, t) => {
                                    const r = F[u];
                                    if (r) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(e).$dyn(r),
                                            o = n.$dyn(t);
                                        return o ? `${o}` : `${n.$dyn(_[u])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(s, e, o);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${o}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((u) => {
                                    switch (u) {
                                        case a.h2.S600x450:
                                            return 'c_600x450';
                                        case a.h2.S400x300:
                                            return 'c_400x300';
                                        case a.h2.S296x222:
                                            return 'c_296x222';
                                        case a.h2.S232x174:
                                            return 'c_232x174';
                                        case a.h2.S180x135:
                                            return 'big';
                                        case a.h2.Big:
                                        case a.h2.S80x80:
                                            return 'c_80x80';
                                        case a.h2.Small:
                                        case a.h2.S48x48:
                                            return 'c_48x48';
                                        default:
                                            return u;
                                    }
                                })(e)}.${o}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.freeXP`;
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                            case 'groups':
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${o}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${o}`;
                            case 'premium_universal':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.premium_plus_universal`;
                            case 'armory_coin':
                                return `R.images.armory_yard.gui.maps.icons.token.sf${((u) => {
                                    switch (u) {
                                        case a.h2.Mini:
                                            return E.s32;
                                        case a.h2.Small:
                                        case a.h2.S48x48:
                                            return E.s48;
                                        case a.h2.S80x80:
                                        case a.h2.Big:
                                            return E.s80;
                                        case a.h2.S128x100:
                                            return E.s116;
                                        case a.h2.S180x135:
                                        case a.h2.S232x174:
                                        case a.h2.S296x222:
                                            return E.s296;
                                        case a.h2.S400x300:
                                            return E.s400;
                                        case a.h2.S600x450:
                                            return E.s600;
                                    }
                                })(e)}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}`;
                        }
                    },
                    m = (u, e, t) => {
                        const r = e && { contentId: e };
                        return Object.assign(
                            {
                                args: u,
                                isEnabled: Boolean((u && u.tooltipId) || e),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !e,
                            },
                            r,
                            t,
                        );
                    },
                    D = (u) => {
                        if (void 0 === u) return null;
                        switch (u) {
                            case a.kK.BATTLE_BOOSTER:
                            case a.kK.BATTLE_BOOSTER_REPLACE:
                                return a.A2.BATTLE_BOOSTER;
                        }
                    },
                    B = (u) => {
                        if (void 0 === u) return null;
                        switch (u) {
                            case a.kK.BATTLE_BOOSTER:
                                return a.sh.BATTLE_BOOSTER;
                            case a.kK.BATTLE_BOOSTER_REPLACE:
                                return a.sh.BATTLE_BOOSTER_REPLACE;
                            case a.kK.BUILT_IN_EQUIPMENT:
                                return a.sh.BUILT_IN_EQUIPMENT;
                            case a.kK.EQUIPMENT_PLUS:
                                return a.sh.EQUIPMENT_PLUS;
                            case a.kK.EQUIPMENT_TROPHY_BASIC:
                                return a.sh.EQUIPMENT_TROPHY_BASIC;
                            case a.kK.EQUIPMENT_TROPHY_UPGRADED:
                                return a.sh.EQUIPMENT_TROPHY_UPGRADED;
                            case a.kK.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                return a.sh.EQUIPMENT_MODERNIZED_UPGRADED_1;
                            case a.kK.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                return a.sh.EQUIPMENT_MODERNIZED_UPGRADED_2;
                            case a.kK.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                return a.sh.EQUIPMENT_MODERNIZED_UPGRADED_3;
                            case a.kK.PROGRESSION_STYLE_UPGRADED_1:
                                return a.sh.PROGRESSION_STYLE_UPGRADED_1;
                            case a.kK.PROGRESSION_STYLE_UPGRADED_2:
                                return a.sh.PROGRESSION_STYLE_UPGRADED_2;
                            case a.kK.PROGRESSION_STYLE_UPGRADED_3:
                                return a.sh.PROGRESSION_STYLE_UPGRADED_3;
                            case a.kK.PROGRESSION_STYLE_UPGRADED_4:
                                return a.sh.PROGRESSION_STYLE_UPGRADED_4;
                        }
                    },
                    C = (u, e) => {
                        if (void 0 === u) return null;
                        switch (e) {
                            case a.$h.MULTI: {
                                const e = Number(u);
                                return isFinite(e) && e > 1 ? `x${Math.floor(e)}` : null;
                            }
                            case a.$h.CURRENCY:
                            case a.$h.NUMBER:
                                return o().createElement(r.A, { format: 'integral', value: Number(u) });
                            case a.$h.PREMIUM_PLUS: {
                                const e = Number(u);
                                return isNaN(e) ? u : null;
                            }
                            default:
                                return u;
                        }
                    };
            },
            7078: (u, e, t) => {
                'use strict';
                t.d(e, { t: () => s });
                var r = t(6179),
                    n = t.n(r),
                    o = t(2056);
                const a = ['children'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const s = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                o = Object.keys(u);
                            for (r = 0; r < o.length; r++) ((t = o[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                            return n;
                        })(u, a);
                    return n().createElement(
                        o.u,
                        i(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            t,
                        ),
                        e,
                    );
                };
            },
            3415: (u, e, t) => {
                'use strict';
                t.d(e, { l: () => l });
                var r = t(6179),
                    n = t.n(r),
                    o = t(7078),
                    a = t(6373),
                    i = t(2056);
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const l = ({ children: u, tooltipArgs: e, className: t }) => {
                    if (!e) return u;
                    const r = n().createElement('div', { className: t }, u);
                    if (e.header || e.body) return n().createElement(a.i, e, r);
                    const l = e.contentId,
                        c = e.args,
                        E = null == c ? void 0 : c.contentId;
                    return l || E
                        ? n().createElement(i.u, s({}, e, { contentId: l || E }), r)
                        : n().createElement(o.t, e, r);
                };
            },
            6373: (u, e, t) => {
                'use strict';
                t.d(e, { i: () => l });
                var r = t(2056),
                    n = t(6179),
                    o = t.n(n);
                const a = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const s = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (u) => {
                        let e = u.children,
                            t = u.body,
                            l = u.header,
                            c = u.note,
                            E = u.alert,
                            A = u.args,
                            F = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    o = Object.keys(u);
                                for (r = 0; r < o.length; r++) ((t = o[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, a);
                        const _ = (0, n.useMemo)(() => {
                            const u = Object.assign({}, A, { body: t, header: l, note: c, alert: E });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [E, t, l, c, A]);
                        return o().createElement(
                            r.u,
                            i(
                                {
                                    contentId:
                                        ((d = null == A ? void 0 : A.hasHtmlContent),
                                        d ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: _,
                                },
                                F,
                            ),
                            e,
                        );
                        var d;
                    };
            },
            2056: (u, e, t) => {
                'use strict';
                t.d(e, { u: () => l });
                var r = t(7902),
                    n = t(4179),
                    o = t(6179);
                const a = [
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
                function i(u) {
                    return Object.entries(u || {}).map(([u, e]) => {
                        const t = { __Type: 'GFValueProxy', name: u };
                        switch (typeof e) {
                            case 'number':
                                t.number = e;
                                break;
                            case 'boolean':
                                t.bool = e;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = e.toString();
                        }
                        return t;
                    });
                }
                const s = (u, e, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    l = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            l = u.onMouseEnter,
                            c = u.onMouseLeave,
                            E = u.onMouseDown,
                            A = u.onClick,
                            F = u.ignoreShowDelay,
                            _ = void 0 !== F && F,
                            d = u.ignoreMouseClick,
                            m = void 0 !== d && d,
                            D = u.decoratorId,
                            B = void 0 === D ? 0 : D,
                            C = u.isEnabled,
                            g = void 0 === C || C,
                            p = u.targetId,
                            h = void 0 === p ? 0 : p,
                            b = u.onShow,
                            S = u.onHide,
                            v = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    o = Object.keys(u);
                                for (r = 0; r < o.length; r++) ((t = o[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, a);
                        const w = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            x = (0, o.useMemo)(() => h || (0, r.F)().resId, [h]),
                            f = (0, o.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (s(t, B, { isMouseEvent: !0, on: !0, arguments: i(n) }, x),
                                    b && b(),
                                    (w.current.isVisible = !0));
                            }, [t, B, n, x, b]),
                            R = (0, o.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const u = w.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (w.current.timeoutId = 0)),
                                        s(t, B, { on: !1 }, x),
                                        w.current.isVisible && S && S(),
                                        (w.current.isVisible = !1));
                                }
                            }, [t, B, x, S]),
                            T = (0, o.useCallback)((u) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(w.current.prevTarget) && R();
                                    }, 200)));
                            }, []);
                        return (
                            (0, o.useEffect)(() => {
                                const u = w.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', T, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', T, { capture: !0 }),
                                            u && window.clearTimeout(u));
                                    }
                                );
                            }, []),
                            (0, o.useEffect)(() => {
                                !1 === g && R();
                            }, [g, R]),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', R),
                                    () => {
                                        (window.removeEventListener('mouseleave', R), R());
                                    }
                                ),
                                [R],
                            ),
                            g
                                ? (0, o.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((L = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((w.current.timeoutId = window.setTimeout(f, _ ? 100 : 400)),
                                                          l && l(u),
                                                          L && L(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  (R(), null == c || c(e), null == u || u(e));
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  (!1 === m && R(), null == A || A(e), null == u || u(e));
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  (!1 === m && R(), null == E || E(e), null == u || u(e));
                                              })(e.props.onMouseDown),
                                          },
                                          v,
                                      ),
                                  )
                                : e
                        );
                        var L;
                    };
            },
            3532: (u) => {
                u.exports = {
                    BLACK_REAL: '#000000',
                    WHITE_REAL: '#FFFFFF',
                    WHITE: '#F2F2F7',
                    WHITE_ORANGE: '#FEFEEC',
                    WHITE_SPANISH: '#E9E2BF',
                    PAR: '#8C8C7E',
                    PAR_SECONDARY: '#595950',
                    PAR_TERTIARY: '#37362E',
                    INFO_RED: '#FF0000',
                    RED: '#FF2717',
                    RED_DARK: '#B70000',
                    YELLOW: '#FEAB34',
                    ORANGE: '#EE7000',
                    CREAM: '#FFDD99',
                    BROWN: '#CBAC77',
                    GREEN_BRIGHT: '#80D43A',
                    GREEN: '#7AB300',
                    GREEN_DARK: '#497212',
                    BLUE_BOOSTER: '#CCFFFF',
                    BLUE_TEAMKILLER: '#09E2FF',
                    CRED: '#CED9D9',
                    GOLD: '#FFC363',
                    BOND: '#C9C9B6',
                    PROM: '#A29B70',
                };
            },
            9887: (u) => {
                u.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            527: (u, e, t) => {
                'use strict';
                (t.r(e), t.d(e, { mouse: () => i, onResize: () => o }));
                var r = t(2472),
                    n = t(1176);
                const o = (0, r.E)('clientResized'),
                    a = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    i = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && (0, n.R)(!1);
                        }
                        function t() {
                            u.enabled && (0, n.R)(!0);
                        }
                        function r() {
                            u.enabled
                                ? u.listeners < 1
                                    ? ((u.initialized = !1),
                                      document.body.removeEventListener('mouseenter', e),
                                      document.body.removeEventListener('mouseleave', t))
                                    : u.initialized ||
                                      ((u.initialized = !0),
                                      document.body.addEventListener('mouseenter', e),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, n.R)(!1);
                        }
                        const o = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let n = !0;
                                        const o = `mouse${e}`,
                                            i = a[e]((u) => t([u, 'outside']));
                                        function s(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(o, s),
                                            r(),
                                            () => {
                                                n &&
                                                    (i(),
                                                    window.removeEventListener(o, s),
                                                    (u.listeners -= 1),
                                                    r(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                e
                            ),
                            {},
                        );
                        return Object.assign({}, o, {
                            disable() {
                                ((u.enabled = !1), r());
                            },
                            enable() {
                                ((u.enabled = !0), r());
                            },
                            enableOutside() {
                                u.enabled && (0, n.R)(!0);
                            },
                            disableOutside() {
                                u.enabled && (0, n.R)(!1);
                            },
                        });
                    })();
            },
            5959: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        events: () => r,
                        getMouseGlobalPosition: () => o,
                        getSize: () => n,
                        graphicsQuality: () => a,
                    }));
                var r = t(527);
                function n(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const a = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                'use strict';
                function r(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => r });
            },
            2472: (u, e, t) => {
                'use strict';
                function r(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => r });
            },
            3138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => n });
                var r = t(5959);
                const n = { view: t(7641), client: r };
            },
            3722: (u, e, t) => {
                'use strict';
                function r(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function n(u, e, t) {
                    return `url(${r(u, e, t)})`;
                }
                (t.r(e), t.d(e, { getBgUrl: () => n, getTextureUrl: () => r }));
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => n });
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
            7641: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => v,
                        events: () => o.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => d,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => S,
                        getScale: () => m,
                        getSize: () => A,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => h,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => F,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => x,
                    }));
                var r = t(3722),
                    n = t(6112),
                    o = t(6538),
                    a = t(8566);
                function i(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function s(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function l(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function c(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function E(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function _(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function d() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function m() {
                    return viewEnv.getScale();
                }
                function D(u) {
                    return viewEnv.pxToRem(u);
                }
                function B(u) {
                    return viewEnv.remToPx(u);
                }
                function C(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(n.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === n.W[e]), u),
                        {},
                    ),
                    w = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    x = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : o.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => o });
                const r = ['args'],
                    n = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const o = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        o = Object.keys(u);
                                    for (r = 0; r < o.length; r++) ((t = o[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(e, r);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((n = o),
                                              Object.entries(n).map(([u, e]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: t, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: t, name: u, bool: e };
                                                      default:
                                                          return { __Type: t, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    o = {
                        close(u) {
                            n('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(u) {
                            n(16, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            7902: (u, e, t) => {
                'use strict';
                t.d(e, { F: () => r });
                const r = (u = 1) => {
                    const e = new Error().stack;
                    let t,
                        r = R.invalid('resId');
                    return (
                        e &&
                            ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (r = window.subViews[t].id)),
                        { caller: t, stack: e, resId: r }
                    );
                };
            },
            6536: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => n });
                var r = t(6179);
                const n = (u) => {
                    const e = (0, r.useRef)(!1);
                    e.current || (u(), (e.current = !0));
                };
            },
            5415: (u, e, t) => {
                'use strict';
                t.d(e, { GS: () => l, cJ: () => a });
                var r = t(6179),
                    n = t(7739),
                    o = t(1043);
                let a, i, s;
                (!(function (u) {
                    ((u[(u.ExtraSmall = o.j.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = o.j.small.width)] = 'Small'),
                        (u[(u.Medium = o.j.medium.width)] = 'Medium'),
                        (u[(u.Large = o.j.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = o.j.extraLarge.width)] = 'ExtraLarge'));
                })(a || (a = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = o.j.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = o.j.small.width)] = 'Small'),
                            (u[(u.Medium = o.j.medium.width)] = 'Medium'),
                            (u[(u.Large = o.j.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = o.j.extraLarge.width)] = 'ExtraLarge'));
                    })(i || (i = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = o.j.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = o.j.small.height)] = 'Small'),
                            (u[(u.Medium = o.j.medium.height)] = 'Medium'),
                            (u[(u.Large = o.j.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = o.j.extraLarge.height)] = 'ExtraLarge'));
                    })(s || (s = {})));
                const l = () => {
                    const u = (0, r.useContext)(n.YN),
                        e = u.width,
                        t = u.height,
                        o = ((u) => {
                            switch (!0) {
                                case u.extraLarge:
                                    return a.ExtraLarge;
                                case u.large:
                                    return a.Large;
                                case u.medium:
                                    return a.Medium;
                                case u.small:
                                    return a.Small;
                                case u.extraSmall:
                                    return a.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), a.ExtraSmall);
                            }
                        })(u),
                        l = ((u) => {
                            switch (!0) {
                                case u.extraLargeWidth:
                                    return i.ExtraLarge;
                                case u.largeWidth:
                                    return i.Large;
                                case u.mediumWidth:
                                    return i.Medium;
                                case u.smallWidth:
                                    return i.Small;
                                case u.extraSmallWidth:
                                    return i.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), i.ExtraSmall);
                            }
                        })(u),
                        c = ((u) => {
                            switch (!0) {
                                case u.extraLargeHeight:
                                    return s.ExtraLarge;
                                case u.largeHeight:
                                    return s.Large;
                                case u.mediumHeight:
                                    return s.Medium;
                                case u.smallHeight:
                                    return s.Small;
                                case u.extraSmallHeight:
                                    return s.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), s.ExtraSmall);
                            }
                        })(u);
                    return { mediaSize: o, mediaWidth: l, mediaHeight: c, remScreenWidth: e, remScreenHeight: t };
                };
            },
            5521: (u, e, t) => {
                'use strict';
                let r, n;
                (t.d(e, { n: () => r }),
                    (function (u) {
                        ((u[(u.NONE = -1)] = 'NONE'),
                            (u[(u.ALT = 165)] = 'ALT'),
                            (u[(u.ENTER = 13)] = 'ENTER'),
                            (u[(u.ESCAPE = 27)] = 'ESCAPE'),
                            (u[(u.SPACE = 32)] = 'SPACE'),
                            (u[(u.END = 35)] = 'END'),
                            (u[(u.HOME = 36)] = 'HOME'),
                            (u[(u.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (u[(u.ARROW_UP = 38)] = 'ARROW_UP'),
                            (u[(u.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (u[(u.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (u[(u.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (u[(u.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (u[(u.PLUS = 187)] = 'PLUS'),
                            (u[(u.MINUS = 189)] = 'MINUS'),
                            (u[(u.PAGE_UP = 33)] = 'PAGE_UP'),
                            (u[(u.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (u[(u.BACKSPACE = 8)] = 'BACKSPACE'),
                            (u[(u.DELETE = 46)] = 'DELETE'),
                            (u[(u.TAB = 9)] = 'TAB'),
                            (u[(u.KEY_N = 78)] = 'KEY_N'),
                            (u[(u.KEY_0 = 48)] = 'KEY_0'),
                            (u[(u.KEY_1 = 49)] = 'KEY_1'),
                            (u[(u.KEY_2 = 50)] = 'KEY_2'),
                            (u[(u.KEY_3 = 51)] = 'KEY_3'),
                            (u[(u.KEY_4 = 52)] = 'KEY_4'),
                            (u[(u.KEY_5 = 53)] = 'KEY_5'),
                            (u[(u.KEY_6 = 54)] = 'KEY_6'),
                            (u[(u.KEY_7 = 55)] = 'KEY_7'),
                            (u[(u.KEY_8 = 56)] = 'KEY_8'),
                            (u[(u.KEY_9 = 57)] = 'KEY_9'),
                            (u[(u.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (u[(u.INSERT = 45)] = 'INSERT'),
                            (u[(u.F1 = 112)] = 'F1'),
                            (u[(u.F2 = 113)] = 'F2'),
                            (u[(u.F3 = 114)] = 'F3'),
                            (u[(u.F4 = 115)] = 'F4'),
                            (u[(u.F5 = 116)] = 'F5'),
                            (u[(u.F6 = 117)] = 'F6'),
                            (u[(u.F7 = 118)] = 'F7'),
                            (u[(u.F8 = 119)] = 'F8'),
                            (u[(u.F9 = 120)] = 'F9'),
                            (u[(u.F10 = 121)] = 'F10'),
                            (u[(u.F11 = 122)] = 'F11'),
                            (u[(u.F12 = 123)] = 'F12'),
                            (u[(u.SELECT = 93)] = 'SELECT'),
                            (u[(u.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (u[(u.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (u[(u.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (u[(u.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (u[(u.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (u[(u.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (u[(u.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (u[(u.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (u[(u.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (u[(u.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (u[(u.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (u[(u.STAR = 106)] = 'STAR'),
                            (u[(u.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (u[(u.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (u[(u.COMMA = 188)] = 'COMMA'),
                            (u[(u.DASH = 189)] = 'DASH'),
                            (u[(u.PERIOD = 190)] = 'PERIOD'));
                    })(r || (r = {})),
                    (function (u) {
                        ((u.ALT = 'Alt'),
                            (u.ALT_GRAPH = 'AltGraph'),
                            (u.CAPS_LOCK = 'CapsLock'),
                            (u.CONTROL = 'Control'),
                            (u.FN = 'Fn'),
                            (u.FN_LOCK = 'FnLock'),
                            (u.META = 'Meta'),
                            (u.NUM_LOCK = 'NumLock'),
                            (u.SCROLL_LOCK = 'ScrollLock'),
                            (u.SHIFT = 'Shift'),
                            (u.SYMBOL = 'Symbol'),
                            (u.SYMBOL_LOCK = 'SymbolLock'));
                    })(n || (n = {})));
            },
            7727: (u, e, t) => {
                'use strict';
                function r(u) {
                    engine.call('PlaySound', u);
                }
                t.d(e, { G: () => r });
            },
            3649: (u, e, t) => {
                'use strict';
                let r;
                function n(u) {
                    return u.replace(/-/g, '_');
                }
                (t.d(e, { BN: () => n, Uw: () => c, v2: () => r }),
                    (function (u) {
                        ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                    })(r || (r = {})));
                const o = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    a = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    i = (u, e, t = r.left) => u.split(e).reduce(t === r.left ? o : a, []),
                    s = (() => {
                        const u = new RegExp(
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
                        return (e) =>
                            e
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(u);
                    })(),
                    l = ['zh_cn', 'zh_sg', 'zh_tw'],
                    c = (u, e, t) =>
                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                            t && u in t
                                ? t[u]
                                : ((u, e = r.left) => {
                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return l.includes(t)
                                          ? s(u)
                                          : ((u, e = r.left) => {
                                                let t = [];
                                                const n =
                                                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                    o = u.replace(/&nbsp;/g, ' ');
                                                return (
                                                    i(o, /( )/, e).forEach((u) => (t = t.concat(i(u, n, r.left)))),
                                                    t
                                                );
                                            })(u, e);
                                  })(u, e),
                        );
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => o });
                var r = t(3138);
                class n {
                    constructor() {
                        ((this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (u) => {
                                this._views[u] &&
                                    (this._views[u].forEach((u) => {
                                        delete this._callbacks[u];
                                    }),
                                    delete this._views[u]);
                            }),
                            (this._callbacks = {}),
                            (this._views = {}),
                            (this._updateHandler = void 0));
                    }
                    static get instance() {
                        return (window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(u, e, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const o = r.O.view.addModelObserver(u, t, n);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(o) : (this._views[t] = [o])))
                                : console.error("Can't add callback for model:", u),
                            o
                        );
                    }
                    removeCallback(u, e = 0) {
                        let t = !1;
                        return (
                            void 0 !== u &&
                                void 0 !== this._callbacks[u] &&
                                ((t = viewEnv.removeDataChangedCallback(u, e)), delete this._callbacks[u]),
                            t || console.error("Can't remove callback by id:", u),
                            t
                        );
                    }
                    _emmitDataChanged(u, e, t) {
                        t.forEach((t) => {
                            const r = this._callbacks[t];
                            void 0 !== r && r(u, e);
                        });
                    }
                }
                n.__instance = void 0;
                const o = n;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
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
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    }));
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                (this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers());
                            }));
                    }
                    subscribe(u) {
                        (this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data));
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        (this.dataTracker.clear(), this.callbacks.clear());
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            4179: (u, e, t) => {
                'use strict';
                t.d(e, { B3: () => c, Z5: () => a, B0: () => s, ry: () => C });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let r = u.target;
                                    do {
                                        if (r === e) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(u, e) {
                        (this.addMouseListener(), this.entries.push({ container: u, callback: e }));
                    }
                    unregister(u, e) {
                        const t = u,
                            r = e;
                        ((this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== r)),
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
                r.__instance = void 0;
                const n = r;
                var o = t(1358);
                const a = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    i = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
                let s;
                var l;
                (((l = s || (s = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    F = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    d = t(3138);
                const m = ['args'];
                function D(u, e, t, r, n, o, a) {
                    try {
                        var i = u[o](a),
                            s = i.value;
                    } catch (u) {
                        return void t(u);
                    }
                    i.done ? e(s) : Promise.resolve(s).then(r, n);
                }
                const B = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    C = (function () {
                        var u,
                            e =
                                ((u = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((u) => {
                                            engine.on('Ready', u);
                                        })
                                    );
                                }),
                                function () {
                                    var e = this,
                                        t = arguments;
                                    return new Promise(function (r, n) {
                                        var o = u.apply(e, t);
                                        function a(u) {
                                            D(o, r, n, a, i, 'next', u);
                                        }
                                        function i(u) {
                                            D(o, r, n, a, i, 'throw', u);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    g = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                o = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        o = Object.keys(u);
                                    for (r = 0; r < o.length; r++) ((t = o[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(e, m);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, o, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([u, e]) => {
                                                  const t = { __Type: 'GFValueProxy', name: u };
                                                  switch (typeof e) {
                                                      case 'number':
                                                          t.number = e;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = e;
                                                          break;
                                                      default:
                                                          t.string = e.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, o));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    p = () => g(s.CLOSE),
                    h = (u, e) => {
                        u.keyCode === _.n.ESCAPE && e();
                    };
                var b = t(7572);
                const S = n.instance,
                    v = {
                        DataTracker: o.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: A,
                        DateFormatType: F,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => g(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => g(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            g(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, n = R.invalid('resId'), o) => {
                            const a = d.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                A = i.height,
                                F = {
                                    x: d.O.view.pxToRem(l) + a.x,
                                    y: d.O.view.pxToRem(c) + a.y,
                                    width: d.O.view.pxToRem(E),
                                    height: d.O.view.pxToRem(A),
                                };
                            g(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: B(F),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => h(e, u);
                            return (
                                window.addEventListener('keydown', e),
                                () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            h(u, p);
                        },
                        handleViewEvent: g,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    const n = Object.prototype.toString.call(e[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[r];
                                        t[r] = [];
                                        for (let e = 0; e < n.length; e++) t[r].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = u(e[r]))
                                            : (t[r] = e[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: S,
                        SystemLocale: a,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = v;
            },
            3458: (u, e, t) => {
                'use strict';
                let r;
                (t.d(e, { Z0: () => n, in: () => r, sx: () => o }),
                    (function (u) {
                        ((u[(u.NonSet = 0)] = 'NonSet'),
                            (u[(u.Debug = 10)] = 'Debug'),
                            (u[(u.Info = 20)] = 'Info'),
                            (u[(u.Warning = 30)] = 'Warning'));
                    })(r || (r = {})));
                const n = 'tooltip_watched',
                    o = 2;
                let a;
                !(function (u) {
                    ((u.Click = 'click'), (u.KeyDown = 'keydown'));
                })(a || (a = {}));
            },
            1943: (u, e, t) => {
                'use strict';
                t.d(e, { Jp: () => c, Sr: () => A });
                var r = t(6179),
                    n = t(3458);
                const o = ['action', 'timeLimit'],
                    a = 'metrics',
                    i = () => Date.now(),
                    s = ({ partnerID: u, item: e, parentScreen: t, itemState: r, info: n }) => ({
                        item: e,
                        partnerID: u || null,
                        parent_screen: t || null,
                        item_state: r || null,
                        additional_info: n || null,
                    }),
                    l = (u, e) => {
                        const t = (0, r.useCallback)(
                            (t, r = n.in.Info, o) => {
                                (o || (o = {}),
                                    Object.keys(o).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: u,
                                            group: e,
                                            action: t,
                                            logLevel: r,
                                            params: JSON.stringify(o),
                                        }));
                            },
                            [u, e],
                        );
                        return (u, e, r) => t(u, e, r);
                    },
                    c = (u) => {
                        const e = l(u, a),
                            t = (0, r.useCallback)(
                                (u) => {
                                    e(u.action, u.logLevel, s(u));
                                },
                                [e],
                            );
                        return (u) => t(u);
                    },
                    E = (u) => {
                        const e = ((u, e) => {
                                const t = l(u, e),
                                    n = (0, r.useRef)(new Map()),
                                    o = (0, r.useRef)(new Map()),
                                    a = (0, r.useCallback)(
                                        (u) => {
                                            if (!u) return;
                                            const e = n.current.get(u);
                                            (void 0 !== e && e > 0) || n.current.set(u, i());
                                        },
                                        [n],
                                    ),
                                    s = (0, r.useCallback)(() => {
                                        (n.current.clear(), o.current.clear());
                                    }, [n, o]),
                                    c = (0, r.useCallback)(
                                        (u) => {
                                            u &&
                                                void 0 !== n.current.get(u) &&
                                                void 0 === o.current.get(u) &&
                                                o.current.set(u, i());
                                        },
                                        [n, o],
                                    ),
                                    E = (0, r.useCallback)(
                                        (u) => {
                                            if (!u) return;
                                            const e = n.current.get(u);
                                            if (void 0 === e) return;
                                            const t = o.current.get(u);
                                            if (void 0 === t) return;
                                            o.current.delete(u);
                                            const r = i() - t;
                                            n.current.set(u, e + r);
                                        },
                                        [n, o],
                                    ),
                                    A = (0, r.useCallback)(
                                        (u, e = 0, r, a) => {
                                            const s = n.current.get(u);
                                            if (void 0 === s) return;
                                            (void 0 !== o.current.get(u) && E(u), n.current.delete(u));
                                            const l = (i() - s) / 1e3;
                                            l <= e ||
                                                ((a = ((u, e) => (void 0 === u && (u = {}), (u.timeSpent = e), u))(
                                                    a,
                                                    l,
                                                )),
                                                t(u, r, a));
                                        },
                                        [n, o, t, E],
                                    );
                                return [
                                    (u) => a(u),
                                    (u, e, t, r) => A(u, e, t, r),
                                    () => s(),
                                    (u) => c(u),
                                    (u) => E(u),
                                ];
                            })(u, a),
                            t = e[0],
                            n = e[1],
                            o = e[2],
                            c = e[3],
                            E = e[4],
                            A = (0, r.useCallback)(
                                (u) => {
                                    const e = u.action,
                                        t = u.timeLimit,
                                        r = u.logLevel;
                                    n(e, t, r, s(u));
                                },
                                [n],
                            );
                        return [(u) => t(u), (u) => A(u), () => o(), (u) => c(u), (u) => E(u)];
                    },
                    A = (u, e) => {
                        const t = E(u),
                            a = t[0],
                            i = t[1],
                            s = e.action,
                            l = e.timeLimit,
                            c = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    o = Object.keys(u);
                                for (r = 0; r < o.length; r++) ((t = o[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(e, o);
                        return (0, r.useMemo)(
                            () => ({
                                onShow: () => a(s || n.Z0),
                                onHide: () => i(Object.assign({ action: s || n.Z0, timeLimit: l || n.sx }, c)),
                            }),
                            [s, l, c, a, i],
                        );
                    };
            },
            4085: (u, e, t) => {
                'use strict';
                t.d(e, { L: () => A });
                var r = t(6483),
                    n = t.n(r),
                    o = t(6179),
                    a = t.n(o),
                    i = t(2372),
                    s = t(3415);
                const l = {
                    base: 'Compensation_base_8c',
                    currencyIcon: 'Compensation_currencyIcon_1c',
                    base__credits: 'Compensation_base__credits_63',
                    base__gold: 'Compensation_base__gold_c7',
                    value: 'Compensation_value_72',
                    compensationIcon: 'Compensation_compensationIcon_6b',
                };
                var c = t(729),
                    E = t(4891);
                const A = ({
                    value: u,
                    name: e,
                    tooltipId: t,
                    tooltipContentId: r,
                    parentScreen: o,
                    lootboxName: A,
                    lootboxID: F,
                }) => {
                    const _ = (0, c.pI)({ tooltipId: t }, Number(r)),
                        d = (0, E.B)({
                            parentScreen: o,
                            info: JSON.stringify({ reward: e, value: u, lootboxName: A, lootboxID: F }),
                        }).rewardSharedToopltipWatched;
                    return a().createElement(
                        s.l,
                        { tooltipArgs: Object.assign({}, _, d) },
                        a().createElement(
                            'div',
                            { className: n()(l.base, l[`base__${e}`]) },
                            a().createElement('div', { className: l.currencyIcon }),
                            a().createElement(
                                'div',
                                { className: l.value },
                                a().createElement(i.A, { value: Number(u) }),
                            ),
                            a().createElement('div', { className: l.compensationIcon }),
                        ),
                    );
                };
            },
            6760: (u, e, t) => {
                'use strict';
                t.d(e, { H: () => _ });
                var r = t(2862),
                    n = t(729),
                    o = t(5739),
                    a = t(6373),
                    i = t(5415),
                    s = t(6179),
                    l = t.n(s),
                    c = t(9409);
                var E = t(4891);
                function A() {
                    return (
                        (A =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        A.apply(this, arguments)
                    );
                }
                const F = R.strings.gui_lootboxes.probabilitiesOverlay,
                    _ = ({ reward: u, status: e, bigOnly: t, parentScreen: s, lootboxName: _, lootboxID: d }) => {
                        const m = (0, i.GS)().mediaSize < i.cJ.Medium && !t ? r.h2.Small : r.h2.Big,
                            D = (0, E.B)({
                                parentScreen: s,
                                info: JSON.stringify({ reward: u.name, value: u.value, lootboxName: _, lootboxID: d }),
                            }).rewardToopltipWatchedWithRotation;
                        return l().createElement(
                            'div',
                            { className: 'RotationReward_base_5c' },
                            l().createElement(
                                o.Q,
                                A({}, u, {
                                    tooltipArgs: Object.assign({}, u.tooltipArgs, D),
                                    valueType: (0, n.p3)(u.name),
                                    size: m,
                                    image: u.image(m),
                                }),
                            ),
                            l().createElement(
                                'div',
                                { className: 'RotationReward_label_da' },
                                e === c.H.Unavailable &&
                                    l().createElement(
                                        a.i,
                                        { body: F.blockedReward() },
                                        l().createElement(
                                            'div',
                                            { className: 'RotationReward_labelContent_44' },
                                            l().createElement('div', { className: 'RotationReward_lockIcon_39' }),
                                        ),
                                    ),
                            ),
                        );
                    };
            },
            8354: (u, e, t) => {
                'use strict';
                t.d(e, { A: () => d });
                var r = t(6483),
                    n = t.n(r),
                    o = t(7061),
                    a = t(3415),
                    i = t(6373),
                    s = t(3649),
                    l = t(6179),
                    c = t.n(l),
                    E = t(4891),
                    A = t(9409);
                const F = {
                        base: 'RotationVehicle_base_2f',
                        base__received: 'RotationVehicle_base__received_32',
                        iconWrapper: 'RotationVehicle_iconWrapper_cb',
                        icon: 'RotationVehicle_icon_41',
                        label: 'RotationVehicle_label_b8',
                        labelContent: 'RotationVehicle_labelContent_27',
                        lockIcon: 'RotationVehicle_lockIcon_78',
                        checkIcon: 'RotationVehicle_checkIcon_9e',
                        preview: 'RotationVehicle_preview_ec',
                        preview__opacity: 'RotationVehicle_preview__opacity_50',
                        preview__label: 'RotationVehicle_preview__label_28',
                    },
                    _ = R.strings.gui_lootboxes.probabilitiesOverlay,
                    d = ({
                        name: u,
                        vehicleName: e,
                        status: t,
                        lootboxName: r,
                        lootboxID: l,
                        tooltipArgs: d,
                        parentScreen: m,
                        intCD: D,
                        onPreviewClick: B,
                    }) => {
                        const C = R.images.gui_lootboxes.gui.maps.rewards.vehicles.$dyn(`${(0, s.BN)(u)}`),
                            g = R.images.gui.maps.icons.quests.bonuses.big.vehicles(),
                            p = t === A.H.Received,
                            h = (0, E.B)({
                                parentScreen: m,
                                info: JSON.stringify({ reward: u, value: e, lootboxName: r, lootboxID: l }),
                            }).rewardSharedToopltipWatched;
                        return c().createElement(
                            'div',
                            {
                                className: n()(F.base, F[`base__${t}`]),
                                onClick: () => {
                                    null == B || B(D);
                                },
                            },
                            c().createElement(
                                a.l,
                                { tooltipArgs: Object.assign({}, d, h) },
                                c().createElement(
                                    'div',
                                    { className: F.iconWrapper },
                                    c().createElement('div', {
                                        className: F.icon,
                                        style: { backgroundImage: `url(${null != C ? C : g})` },
                                    }),
                                    !p &&
                                        c().createElement(
                                            'div',
                                            { className: F.preview },
                                            c().createElement(o.M, {
                                                classNames: { base: F.preview__opacity, label: F.preview__label },
                                            }),
                                        ),
                                ),
                            ),
                            c().createElement(
                                'div',
                                { className: F.label },
                                t === A.H.Unavailable &&
                                    c().createElement(
                                        i.i,
                                        { body: _.blockedReward() },
                                        c().createElement(
                                            'div',
                                            { className: F.labelContent },
                                            c().createElement('div', { className: F.lockIcon }),
                                            e,
                                        ),
                                    ),
                                p &&
                                    c().createElement(
                                        c().Fragment,
                                        null,
                                        c().createElement('div', { className: F.checkIcon }),
                                        e,
                                    ),
                                t === A.H.Available && e,
                            ),
                        );
                    };
            },
            9409: (u, e, t) => {
                'use strict';
                let r;
                (t.d(e, { H: () => r }),
                    (function (u) {
                        ((u.Available = 'available'), (u.Unavailable = 'unavailable'), (u.Received = 'received'));
                    })(r || (r = {})));
            },
            7100: (u, e, t) => {
                'use strict';
                var r = t(6483),
                    n = t.n(r),
                    o = t(3138),
                    a = t(6179),
                    i = t.n(a);
                const s = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    l = ['children', 'className', 'theme'];
                function c() {
                    return (
                        (c =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        c.apply(this, arguments)
                    );
                }
                const E = i().forwardRef(function (u, e) {
                    let t = u.children,
                        r = u.className,
                        E = u.theme,
                        A = void 0 === E ? 'default' : E,
                        F = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                o = Object.keys(u);
                            for (r = 0; r < o.length; r++) ((t = o[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                            return n;
                        })(u, l);
                    const _ = (function () {
                            const u = (0, a.useRef)(0);
                            var e;
                            return (
                                (e = () => {
                                    window.cancelAnimationFrame(u.current);
                                }),
                                (0, a.useEffect)(() => e, []),
                                (0, a.useMemo)(
                                    () => ({
                                        run: (e) => {
                                            (window.cancelAnimationFrame(u.current),
                                                (u.current = window.requestAnimationFrame(() => {
                                                    u.current = window.requestAnimationFrame(() => {
                                                        (e(), (u.current = 0));
                                                    });
                                                })));
                                        },
                                        clear: () => {
                                            (window.cancelAnimationFrame(u.current), (u.current = 0));
                                        },
                                        get isRunning() {
                                            return 0 !== u.current;
                                        },
                                    }),
                                    [],
                                )
                            );
                        })(),
                        d = i().useRef(null);
                    var m;
                    return (
                        (m = () => {
                            _.run(() => {
                                const u = d.current;
                                if (!u) return;
                                const e = u.scrollWidth,
                                    t = u.scrollHeight;
                                o.O.view.resize(e, t);
                                const r = window.getComputedStyle(u);
                                o.O.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, a.useEffect)(m, []),
                        i().createElement(
                            'div',
                            c({}, F, {
                                className: n()(s.base, s[`base__theme-${A}`], r),
                                ref: function (u) {
                                    ((d.current = u), 'function' == typeof e ? e(u) : e && (e.current = u));
                                },
                            }),
                            i().createElement('div', { className: s.decorator }, t),
                        )
                    );
                });
                var A = t(493),
                    F = t.n(A),
                    _ = t(3282),
                    d = t(729);
                function m() {
                    return !1;
                }
                let D;
                (console.log,
                    (function (u) {
                        ((u.DEFAULT = 'DEFAULT'), (u.UNIQUE = 'UNIQUE'));
                    })(D || (D = {})));
                var B = t(3915);
                function C(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const g = (u) => (0 === u ? window : window.subViews.get(u));
                function p(u, e) {
                    var t;
                    if (!(e >= u.length)) return Array.isArray(u) ? u[e] : null == (t = u[e]) ? void 0 : t.value;
                }
                function h(u) {
                    var e;
                    return u && 'value' in u && null != (e = u.constructor) && e.name.includes('ArrayItem')
                        ? null == u
                            ? void 0
                            : u.value
                        : u;
                }
                function b(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, r) => e(null == u ? void 0 : u.value, t, r));
                }
                var S = t(6517),
                    v = t(2862),
                    w = t(3649);
                (v.E4.Vehicles, v.E4.TmanToken, v.E4.CollectionItem);
                var x = t(9409);
                const f = (u) => ({
                        name: u.name,
                        image: (e) =>
                            ((u, e = v.h2.Small) => {
                                const t = (0, w.BN)(u.vehicleName || '');
                                if (u.name === v.E4.Vehicles)
                                    switch (e) {
                                        case v.h2.Mini:
                                        case v.h2.Small:
                                        case v.h2.S48x48:
                                            return u.isRent
                                                ? 'R.images.gui.maps.icons.quests.bonuses.small.vehicles_rent'
                                                : 'R.images.gui.maps.icons.quests.bonuses.small.vehicles';
                                        case v.h2.Big:
                                        case v.h2.S80x80:
                                            return u.isRent
                                                ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles_rent'
                                                : 'R.images.gui.maps.icons.quests.bonuses.big.vehicles';
                                        case v.h2.S128x100:
                                        case v.h2.S180x135:
                                            return `R.images.gui.maps.shop.vehicles.c_180x135.${t}`;
                                        case v.h2.S232x174:
                                        case v.h2.S296x222:
                                            return `R.images.gui.maps.shop.vehicles.c_360x270.${t}`;
                                        case v.h2.S400x300:
                                        case v.h2.S600x450:
                                            return `R.images.gui.maps.shop.vehicles.c_600x450.${t}`;
                                        default:
                                            return (
                                                console.error('Unknown vehicle image size', e, u.vehicleName),
                                                'R.images.gui.maps.icons.quests.bonuses.big.vehicles'
                                            );
                                    }
                                if (u.name === v.E4.TmanToken)
                                    switch (e) {
                                        case v.h2.Mini:
                                        case v.h2.Small:
                                        case v.h2.S48x48:
                                        case v.h2.Big:
                                        case v.h2.S80x80:
                                            return `R.images.gui.maps.icons.tankmen.icons.s80x80.${u.icon}`;
                                        case v.h2.S128x100:
                                        case v.h2.S180x135:
                                        case v.h2.S232x174:
                                            return `R.images.gui.maps.icons.tankmen.icons.s232x174.${u.icon}`;
                                        case v.h2.S296x222:
                                            return `R.images.gui.maps.icons.tankmen.icons.s296x222.${u.icon}`;
                                        case v.h2.S400x300:
                                            return `R.images.gui.maps.icons.tankmen.icons.s400x300.${u.icon}`;
                                        case v.h2.S600x450:
                                            return `R.images.gui.maps.icons.tankmen.icons.s600x450.${u.icon}`;
                                        default:
                                            return (
                                                console.error('Unknown image size', e),
                                                'R.images.gui.maps.icons.tankmen.icons.s600x450.tankman'
                                            );
                                    }
                                if (u.name === v.E4.CollectionItem)
                                    switch (e) {
                                        case v.h2.Mini:
                                        case v.h2.Small:
                                        case v.h2.S48x48:
                                            return `R.images.gui.maps.icons.collectionItems.c_48x48.${u.icon}`;
                                        case v.h2.Big:
                                        case v.h2.S80x80:
                                            return `R.images.gui.maps.icons.collectionItems.c_80x80.${u.icon}`;
                                        case v.h2.S128x100:
                                        case v.h2.S180x135:
                                        case v.h2.S232x174:
                                            return `R.images.gui.maps.icons.collectionItems.c_232x174.${u.icon}`;
                                        case v.h2.S296x222:
                                            return `R.images.gui.maps.icons.collectionItems.c_296x222.${u.icon}`;
                                        case v.h2.S400x300:
                                            return `R.images.gui.maps.icons.collectionItems.c_400x300.${u.icon}`;
                                        case v.h2.S600x450:
                                            return `R.images.gui.maps.icons.collectionItems.c_600x450.${u.icon}`;
                                        default:
                                            console.error('Unknown image size', e);
                                    }
                                return (
                                    u.name === v.E4.DogTagType && e === v.h2.S180x135 && (e = v.h2.S232x174),
                                    (0, d.ry)(u, e)
                                );
                            })(u, e),
                        value: u.value,
                        valueType: (0, d.p3)(u.name),
                        label: u.label,
                        special: u.overlayType,
                        tooltipArgs: (0, d.pI)({ tooltipId: u.tooltipId }, Number(u.tooltipContentId)),
                        type: u.type,
                        isCompensation: u.isCompensation,
                        compensatedBonus: u.compensatedBonus,
                        toyID: u.toyID,
                        rankValue: u.rankValue,
                        icon: u.icon,
                        isNew: u.isNew,
                    }),
                    T = ((u, e) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: r, children: n, mocks: s }) {
                                const l = (0, a.useRef)([]),
                                    c = (u, t, r) => {
                                        var n;
                                        const a = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = g,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function a(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? n.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = n.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const i = (u) => {
                                                    const n = t(e),
                                                        o = r.split('.').reduce((u, e) => u[e], n);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? o
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, o);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const s = 'string' == typeof a ? `${r}.${a}` : r,
                                                            l = o.O.view.addModelObserver(s, e, !0);
                                                        return (n.set(l, t), u && t(i(a)), l);
                                                    },
                                                    readByPath: i,
                                                    createCallback: (u, e) => {
                                                        const t = i(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = i(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var u,
                                                                t = (function (u, e) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            u[Symbol.iterator]) ||
                                                                        u['@@iterator'];
                                                                    if (t) return (t = t.call(u)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(u) ||
                                                                        (t = (function (u, e) {
                                                                            if (u) {
                                                                                if ('string' == typeof u)
                                                                                    return C(u, e);
                                                                                var t = Object.prototype.toString
                                                                                    .call(u)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        u.constructor &&
                                                                                        (t = u.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(u)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? C(u, e)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(u)) ||
                                                                        (e && u && 'number' == typeof u.length)
                                                                    ) {
                                                                        t && (u = t);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= u.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: u[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(n.keys());
                                                            !(u = t()).done;
                                                        )
                                                            a(u.value, e);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(t),
                                            i =
                                                'real' === u
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            s = (e) =>
                                                'mocks' === u ? (null == r ? void 0 : r.getter(e)) : i.readByPath(e),
                                            c = (u) => l.current.push(u),
                                            E = (({ observableModel: u }) => {
                                                const e = {
                                                        root: u.object(),
                                                        compensation: u.object('compensation'),
                                                        vehicleStageList: u.array('vehicleStageList'),
                                                        rewardsStageList: u.array('rewardsStageList'),
                                                    },
                                                    t = (0, S.computedFn)(() => e.vehicleStageList.get(), {
                                                        equals: m,
                                                    }),
                                                    r = (0, S.computedFn)(() => e.rewardsStageList.get(), {
                                                        equals: m,
                                                    }),
                                                    n = (0, S.computedFn)(() => e.vehicleStageList.get().length),
                                                    o = (0, S.computedFn)((u) => p(t(), u), { equals: m }),
                                                    a = (0, S.computedFn)((u) => p(r(), u), { equals: m }),
                                                    i = (0, S.computedFn)(
                                                        (u) => {
                                                            const t = o(u);
                                                            return t
                                                                ? b(t, (t) => {
                                                                      let r = x.H.Available;
                                                                      return (
                                                                          (t.inInventory && !t.isRent) || t.wasSold
                                                                              ? (r = x.H.Received)
                                                                              : u >= e.root.get().stageRotation &&
                                                                                (r = x.H.Unavailable),
                                                                          Object.assign({}, t, { status: r })
                                                                      );
                                                                  })
                                                                : void 0;
                                                        },
                                                        { equals: m },
                                                    ),
                                                    s = (0, S.computedFn)(
                                                        (u) => {
                                                            const t = a(u);
                                                            return t
                                                                ? b(t, (t) => {
                                                                      let r = x.H.Available;
                                                                      return (
                                                                          u >= e.root.get().stageRotation &&
                                                                              (r = x.H.Unavailable),
                                                                          { status: r, reward: f(t) }
                                                                      );
                                                                  })
                                                                : void 0;
                                                        },
                                                        { equals: m },
                                                    ),
                                                    l = (0, S.computedFn)((u) => {
                                                        if (u === n() - 1) {
                                                            const t = (function (u, e) {
                                                                for (let t = 0; t < u.length; t++) {
                                                                    const r = h(u[t]);
                                                                    if (e(r, t, u)) return r;
                                                                }
                                                            })(i(u), (u) => u.inInventory);
                                                            return t ? e.compensation.get() : void 0;
                                                        }
                                                    });
                                                return Object.assign({}, e, {
                                                    computes: {
                                                        getStages: t,
                                                        getStagesLength: n,
                                                        getStage: o,
                                                        getStageBonuses: i,
                                                        getCompensation: l,
                                                        getStageRewardsBonuses: s,
                                                    },
                                                });
                                            })({
                                                mode: u,
                                                readByPath: s,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : s(e),
                                                            n = B.observable.box(r, { equals: m });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, B.action)((u) => n.set(u)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : s(e),
                                                            n = B.observable.box(r, { equals: m });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, B.action)((u) => n.set(u)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = s(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (u, e) => ((u[e] = B.observable.box(r[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, B.action)((u) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                o = Object.entries(n),
                                                                a = o.reduce(
                                                                    (u, [e, t]) => (
                                                                        (u[t] = B.observable.box(r[e], {})),
                                                                        u
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, B.action)((u) => {
                                                                            o.forEach(([e, t]) => {
                                                                                a[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            A = { mode: u, model: E, externalModel: i, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === u && r ? r.controls(A) : e(A),
                                            externalModel: i,
                                            mode: u,
                                        };
                                    },
                                    E = (0, a.useRef)(!1),
                                    A = (0, a.useState)(u),
                                    F = A[0],
                                    _ = A[1],
                                    d = (0, a.useState)(() => c(u, r, s)),
                                    D = d[0],
                                    v = d[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        E.current ? v(c(F, r, s)) : (E.current = !0);
                                    }, [s, F, r]),
                                    (0, a.useEffect)(() => {
                                        _(u);
                                    }, [u]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (D.externalModel.dispose(), l.current.forEach((u) => u()));
                                        },
                                        [D],
                                    ),
                                    i().createElement(t.Provider, { value: D }, n)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, function () {}),
                    L = T[0],
                    y = T[1];
                var P = t(9887),
                    O = t.n(P),
                    k = t(5415);
                const M = ['xl', 'lg', 'md', 'sm', 'xs'],
                    N = (u) => u.includes('_') && ((u) => M.includes(u))(u.split('_').at(-1)),
                    I = [k.cJ.ExtraLarge, k.cJ.Large, k.cJ.Medium, k.cJ.Small, k.cJ.ExtraSmall],
                    U = (u, e) =>
                        Object.keys(u).reduce((t, r) => {
                            if (r in t) return t;
                            if (N(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const o = I.indexOf(e),
                                    a = (-1 !== o ? M.slice(o) : [])
                                        .map((u) => n + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    i = a ? u[a] : void 0;
                                return ((t[n] = void 0 !== i ? i : u[n]), t);
                            }
                            const n = u[r];
                            return (
                                void 0 === n ||
                                    ((u, e) => M.some((t) => void 0 !== e[`${u}_${t}`]))(r, u) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    H = (u, e = U) => {
                        const t = (
                            (u, e = U) =>
                            (t) => {
                                const r = (0, k.GS)().mediaSize,
                                    n = (0, a.useMemo)(() => e(t, r), [t, r]);
                                return i().createElement(u, n);
                            }
                        )(u, e);
                        return i().memo((e) =>
                            Object.keys(e).some((u) => N(u) && void 0 !== e[u])
                                ? i().createElement(t, e)
                                : i().createElement(u, e),
                        );
                    },
                    G = {
                        mt__XS: 'Box_mt__XS_0c',
                        mt__SM: 'Box_mt__SM_eb',
                        mt__SMp: 'Box_mt__SMp_cf',
                        mt__MD: 'Box_mt__MD_25',
                        mt__MDp: 'Box_mt__MDp_49',
                        mt__LG: 'Box_mt__LG_e8',
                        mt__XL: 'Box_mt__XL_83',
                        mr__XS: 'Box_mr__XS_7c',
                        mr__SM: 'Box_mr__SM_08',
                        mr__SMp: 'Box_mr__SMp_06',
                        mr__MD: 'Box_mr__MD_4a',
                        mr__MDp: 'Box_mr__MDp_b6',
                        mr__LG: 'Box_mr__LG_d0',
                        mr__XL: 'Box_mr__XL_db',
                        mb__XS: 'Box_mb__XS_bb',
                        mb__SM: 'Box_mb__SM_83',
                        mb__SMp: 'Box_mb__SMp_04',
                        mb__MD: 'Box_mb__MD_ed',
                        mb__MDp: 'Box_mb__MDp_65',
                        mb__LG: 'Box_mb__LG_c8',
                        mb__XL: 'Box_mb__XL_f8',
                        ml__XS: 'Box_ml__XS_8a',
                        ml__SM: 'Box_ml__SM_e6',
                        ml__SMp: 'Box_ml__SMp_fb',
                        ml__MD: 'Box_ml__MD_2b',
                        ml__MDp: 'Box_ml__MDp_c7',
                        ml__LG: 'Box_ml__LG_39',
                        ml__XL: 'Box_ml__XL_4a',
                    },
                    W = [
                        'className',
                        'width',
                        'height',
                        'm',
                        'mt',
                        'mr',
                        'mb',
                        'ml',
                        'column',
                        'row',
                        'flexDirection',
                        'flexStart',
                        'center',
                        'flexEnd',
                        'spaceBetween',
                        'spaceAround',
                        'justifyContent',
                        'alignItems',
                        'alignSelf',
                        'wrap',
                        'flexWrap',
                        'grow',
                        'shrink',
                        'flex',
                        'style',
                        'children',
                    ];
                function X() {
                    return (
                        (X =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        X.apply(this, arguments)
                    );
                }
                Object.keys(O());
                const V = {
                        XL: { mt: G.mt__XL, mr: G.mr__XL, mb: G.mb__XL, ml: G.ml__XL },
                        LG: { mt: G.mt__LG, mr: G.mr__LG, mb: G.mb__LG, ml: G.ml__LG },
                        MDp: { mt: G.mt__MDp, mr: G.mr__MDp, mb: G.mb__MDp, ml: G.ml__MDp },
                        MD: { mt: G.mt__MD, mr: G.mr__MD, mb: G.mb__MD, ml: G.ml__MD },
                        SMp: { mt: G.mt__SMp, mr: G.mr__SMp, mb: G.mb__SMp, ml: G.ml__SMp },
                        SM: { mt: G.mt__SM, mr: G.mr__SM, mb: G.mb__SM, ml: G.ml__SM },
                        XS: { mt: G.mt__XS, mr: G.mr__XS, mb: G.mb__XS, ml: G.ml__XS },
                    },
                    j = (Object.keys(V), ['mt', 'mr', 'mb', 'ml']),
                    $ = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    q = H((u) => {
                        let e = u.className,
                            t = u.width,
                            r = u.height,
                            o = u.m,
                            s = u.mt,
                            l = void 0 === s ? o : s,
                            c = u.mr,
                            E = void 0 === c ? o : c,
                            A = u.mb,
                            F = void 0 === A ? o : A,
                            _ = u.ml,
                            d = void 0 === _ ? o : _,
                            m = u.column,
                            D = u.row,
                            B = u.flexDirection,
                            C = void 0 === B ? (m ? 'column' : D && 'row') || void 0 : B,
                            g = u.flexStart,
                            p = u.center,
                            h = u.flexEnd,
                            b = u.spaceBetween,
                            S = u.spaceAround,
                            v = u.justifyContent,
                            w =
                                void 0 === v
                                    ? (g ? 'flex-start' : p && 'center') ||
                                      (h && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (S && 'space-around') ||
                                      void 0
                                    : v,
                            x = u.alignItems,
                            f = void 0 === x ? (g ? 'flex-start' : p && 'center') || (h && 'flex-end') || void 0 : x,
                            R = u.alignSelf,
                            T = u.wrap,
                            L = u.flexWrap,
                            y = void 0 === L ? (T ? 'wrap' : void 0) : L,
                            P = u.grow,
                            O = u.shrink,
                            k = u.flex,
                            M = void 0 === k ? (P || O ? `${P ? 1 : 0} ${O ? 1 : 0} auto` : void 0) : k,
                            N = u.style,
                            I = u.children,
                            U = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    o = Object.keys(u);
                                for (r = 0; r < o.length; r++) ((t = o[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, W);
                        const H = (0, a.useMemo)(() => {
                                const u = { mt: l, mr: E, mb: F, ml: d },
                                    e = ((u) =>
                                        j.reduce((e, t) => {
                                            const r = u[t];
                                            return r && 'number' != typeof r ? e.concat(V[!0 === r ? 'MD' : r][t]) : e;
                                        }, []))(u),
                                    n = ((u) =>
                                        j.reduce((e, t) => {
                                            const r = u[t];
                                            return ('number' == typeof r && (e[$[t]] = r + 'rem'), e);
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, N, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: M,
                                        alignSelf: R,
                                        display: C || f ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: y,
                                        justifyContent: w,
                                        alignItems: f,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, r, l, E, F, d, N, M, R, C, y, w, f]),
                            q = H.computedStyle,
                            Y = H.computedClassNames;
                        return i().createElement('div', X({ className: n()(G.base, ...Y, e), style: q }, U), I);
                    }),
                    Y = ({ binding: u, text: e = '', classMix: t, alignment: r = w.v2.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : i().createElement(
                                  a.Fragment,
                                  null,
                                  e.split('\n').map((e, o) =>
                                      i().createElement(
                                          'div',
                                          { className: n()('FormatText_base_d0', t), key: `${e}-${o}` },
                                          (0, w.Uw)(e, r, u).map((u, e) =>
                                              i().createElement(a.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              );
                var K = t(3532),
                    z = t.n(K);
                const Z = {
                        'paragraph-P10': 'Text_paragraph-P10_2c',
                        'paragraph-P12': 'Text_paragraph-P12_22',
                        'paragraph-P14': 'Text_paragraph-P14_a7',
                        'paragraph-P16': 'Text_paragraph-P16_90',
                        'paragraph-P18': 'Text_paragraph-P18_50',
                        'paragraph-P24': 'Text_paragraph-P24_33',
                        'heading-H14': 'Text_heading-H14_8b',
                        'heading-H15': 'Text_heading-H15_9e',
                        'heading-H18': 'Text_heading-H18_b7',
                        'heading-H20R': 'Text_heading-H20R_f6',
                        'heading-H22': 'Text_heading-H22_27',
                        'heading-H24R': 'Text_heading-H24R_be',
                        'heading-H24': 'Text_heading-H24_0c',
                        'heading-H28': 'Text_heading-H28_78',
                        'heading-H36': 'Text_heading-H36_32',
                        'heading-H56': 'Text_heading-H56_c3',
                        'heading-H73': 'Text_heading-H73_8f',
                        'heading-H144': 'Text_heading-H144_a9',
                        BLACK_REAL: 'Text_BLACK_REAL_30',
                        WHITE_REAL: 'Text_WHITE_REAL_bc',
                        WHITE: 'Text_WHITE_62',
                        WHITE_ORANGE: 'Text_WHITE_ORANGE_54',
                        WHITE_SPANISH: 'Text_WHITE_SPANISH_df',
                        PAR: 'Text_PAR_15',
                        PAR_SECONDARY: 'Text_PAR_SECONDARY_5d',
                        PAR_TERTIARY: 'Text_PAR_TERTIARY_c9',
                        INFO_RED: 'Text_INFO_RED_30',
                        RED: 'Text_RED_66',
                        RED_DARK: 'Text_RED_DARK_d8',
                        YELLOW: 'Text_YELLOW_ed',
                        ORANGE: 'Text_ORANGE_be',
                        CREAM: 'Text_CREAM_57',
                        BROWN: 'Text_BROWN_18',
                        GREEN_BRIGHT: 'Text_GREEN_BRIGHT_3f',
                        GREEN: 'Text_GREEN_e3',
                        GREEN_DARK: 'Text_GREEN_DARK_f1',
                        BLUE_BOOSTER: 'Text_BLUE_BOOSTER_21',
                        BLUE_TEAMKILLER: 'Text_BLUE_TEAMKILLER_ab',
                        CRED: 'Text_CRED_f7',
                        GOLD: 'Text_GOLD_28',
                        BOND: 'Text_BOND_be',
                        PROM: 'Text_PROM_65',
                    },
                    Q = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function J() {
                    return (
                        (J =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        J.apply(this, arguments)
                    );
                }
                Object.keys(O());
                const uu = Object.keys(z()),
                    eu = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    tu = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    ru = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    nu =
                        (Object.keys({
                            XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                            LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                            MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                            MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                            SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                            SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                            XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                        }),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': eu,
                            'heading-H36': eu,
                            'heading-H28': tu,
                            'heading-H24': tu,
                            'heading-H24R': tu,
                            'heading-H22': tu,
                            'heading-H20R': tu,
                            'heading-H18': tu,
                            'heading-H15': ru,
                            'heading-H14': ru,
                            'paragraph-P24': tu,
                            'paragraph-P18': tu,
                            'paragraph-P16': tu,
                            'paragraph-P14': ru,
                            'paragraph-P12': ru,
                            'paragraph-P10': ru,
                        }),
                    ou =
                        (Object.keys(nu),
                        (u) =>
                            u
                                ? ((u) => uu.includes(u))(u)
                                    ? { colorClassName: Z[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    au = H((u) => {
                        let e = u.text,
                            t = u.variant,
                            r = u.className,
                            o = u.color,
                            s = u.m,
                            l = u.mt,
                            c = void 0 === l ? s : l,
                            E = u.mr,
                            A = void 0 === E ? s : E,
                            F = u.mb,
                            _ = void 0 === F ? s : F,
                            d = u.ml,
                            m = void 0 === d ? s : d,
                            D = u.style,
                            B = u.format,
                            C = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    o = Object.keys(u);
                                for (r = 0; r < o.length; r++) ((t = o[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, Q);
                        const g = (0, a.useMemo)(() => {
                                const u = ou(o),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, D, r), colorClassName: e };
                            }, [D, o]),
                            p = g.computedStyle,
                            h = g.colorClassName;
                        return i().createElement(
                            q,
                            J(
                                {
                                    className: n()(Z.base, t && Z[t], h, r),
                                    style: p,
                                    mt: !0 === c ? nu[t || 'paragraph-P16'].mt : c,
                                    mr: !0 === A ? nu[t || 'paragraph-P16'].mr : A,
                                    mb: !0 === _ ? nu[t || 'paragraph-P16'].mb : _,
                                    ml: !0 === m ? nu[t || 'paragraph-P16'].ml : m,
                                },
                                C,
                            ),
                            void 0 !== B ? i().createElement(Y, J({}, B, { text: e })) : e,
                        );
                    }),
                    iu = ['description1', 'description2', 'description3'],
                    su = R.strings.gui_lootboxes.lootboxRotationTooltip,
                    lu = () =>
                        i().createElement(
                            'div',
                            { className: 'Description_base_fe' },
                            iu.map((u, e) =>
                                i().createElement(
                                    'div',
                                    { className: 'Description_item_51', key: e },
                                    i().createElement('div', { className: 'Description_point_fe' }),
                                    i().createElement(au, {
                                        text: su.$dyn(u),
                                        format: { classMix: 'Description_description_a3' },
                                    }),
                                ),
                            ),
                        ),
                    cu = R.strings.gui_lootboxes,
                    Eu = () =>
                        i().createElement(
                            'div',
                            { className: 'Header_base_5f' },
                            i().createElement('div', { className: 'Header_headerImage_e0' }),
                            i().createElement(
                                'div',
                                { className: 'Header_headerDescriptionWrapper_a7' },
                                i().createElement(au, {
                                    text: cu.lootboxRotationTooltip.title(),
                                    format: { classMix: 'Header_headerTitle_e9' },
                                }),
                                i().createElement(au, {
                                    text: cu.lootboxRotationTooltip.caption(),
                                    format: { classMix: 'Header_headerDescription_8e' },
                                }),
                            ),
                        );
                var Au = t(4085),
                    Fu = t(6760),
                    _u = t(8354);
                const du = {
                        base: 'RotationVehicleList_base_7f',
                        bonusBlock: 'RotationVehicleList_bonusBlock_86',
                        currentBg: 'RotationVehicleList_currentBg_ca',
                        stage: 'RotationVehicleList_stage_7b',
                        stageLabel: 'RotationVehicleList_stageLabel_5d',
                        stageIcon: 'RotationVehicleList_stageIcon_4a',
                        stageIcon__1: 'RotationVehicleList_stageIcon__1_c0',
                        stageIcon__2: 'RotationVehicleList_stageIcon__2_de',
                        stageIcon__3: 'RotationVehicleList_stageIcon__3_60',
                    },
                    mu = R.strings.gui_lootboxes.lootboxRotationTooltip,
                    Du = (0, _.observer)(({ stageIndex: u }) => {
                        var e;
                        const t = y().model,
                            r = u + 1,
                            o = t.root.get().stageRotation === r,
                            a = t.computes.getCompensation(u),
                            s = t.computes.getStageRewardsBonuses(u);
                        return i().createElement(
                            'div',
                            { className: du.base },
                            o && i().createElement('div', { className: du.currentBg }),
                            i().createElement(
                                'div',
                                { className: du.stage },
                                i().createElement('div', { className: du.stageLabel }, mu.stage()),
                                i().createElement('div', { className: n()(du.stageIcon, du[`stageIcon__${r}`]) }),
                            ),
                            null == (e = t.computes.getStageBonuses(u))
                                ? void 0
                                : e.map((u, e) =>
                                      i().createElement(
                                          'div',
                                          { className: du.bonusBlock, key: e },
                                          i().createElement(_u.A, u),
                                      ),
                                  ),
                            s &&
                                s.map(({ reward: u, status: e }, t) =>
                                    i().createElement(
                                        'div',
                                        { className: du.bonusBlock, key: t },
                                        i().createElement(Fu.H, { status: e, reward: u, bigOnly: !0 }),
                                    ),
                                ),
                            a &&
                                '0' !== a.value &&
                                i().createElement('div', { className: du.bonusBlock }, i().createElement(Au.L, a)),
                        );
                    }),
                    Bu = 'App_divider_37',
                    Cu = (0, _.observer)(() => {
                        const u = y().model;
                        return i().createElement(
                            'div',
                            { className: 'App_base_70' },
                            i().createElement(Eu, null),
                            i().createElement('div', { className: Bu }),
                            i().createElement(lu, null),
                            ((u, e) => {
                                const t = [];
                                for (let r = 0; r < u; r++) t.push(e(r));
                                return t;
                            })(u.computes.getStagesLength(), (u) =>
                                i().createElement(
                                    a.Fragment,
                                    { key: u },
                                    i().createElement('div', { className: Bu }),
                                    i().createElement(Du, { stageIndex: u }),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    F().render(
                        i().createElement(L, null, i().createElement(E, null, i().createElement(Cu, null))),
                        document.getElementById('root'),
                    );
                });
            },
            4380: (u, e, t) => {
                'use strict';
                t.d(e, { AN: () => o, SS: () => n, de: () => i, eX: () => a, ob: () => s, sx: () => r });
                const r = 1,
                    n = 2;
                let o, a, i, s;
                (!(function (u) {
                    u.Lootbox = 'lootbox';
                })(o || (o = {})),
                    (function (u) {
                        ((u.TooltipWatched = 'tooltip_watched'),
                            (u.Click = 'click'),
                            (u.VideoStarted = 'video_started'),
                            (u.Show = 'show'));
                    })(a || (a = {})),
                    (function (u) {
                        ((u.Storage = 'storage'),
                            (u.Probability = 'probability'),
                            (u.Rewards = 'rewards'),
                            (u.LoseRewards = 'lose_rewards'),
                            (u.RewardVideo = 'reward_video'),
                            (u.Welcome = 'welcome'),
                            (u.LootBoxesShortStats = 'lootboxes_short_stats'),
                            (u.LootBoxesFullStats = 'lootboxes_full_stats'));
                    })(i || (i = {})),
                    (function (u) {
                        ((u.IconPossibleRewardGroup = 'icon_possible_reward_group'),
                            (u.CarouselLootbox = 'carousel_lootbox'),
                            (u.InfoIcon = 'info_icon'),
                            (u.ESCButton = 'esc_button'),
                            (u.BackButton = 'back_button'),
                            (u.ProbabilityPercent = 'probability_percent'),
                            (u.ProbabilityPercentWithGarant = 'probability_percent_with_garant'),
                            (u.ProbabilityReward = 'probability_reward'),
                            (u.MinorRewards = 'minor_rewards'),
                            (u.RewardVideo = 'reward_video'),
                            (u.RewardToopltip = 'reward_tooltip'),
                            (u.RewardRotationToopltip = 'reward_totation_tooltip'),
                            (u.ContinueButton = 'continue_button'),
                            (u.OpenOneMoreButton = 'open_one_more_button'),
                            (u.OpenMultiButton = 'open_multi_button'),
                            (u.OpenInHangarButton = 'open_in_hangar_button'),
                            (u.OKButton = 'ok_button'),
                            (u.CloseButton = 'close_button'),
                            (u.StatisticButton = 'statistic_button'),
                            (u.StatisticESCButton = 'statistic_esc_button'),
                            (u.statisticOutsideClick = 'statistic_outside_click'),
                            (u.DeadlineWidget = 'deadline_widget'),
                            (u.LootBoxesShortStatsTabs = 'lootboxes_short_stats_tabs'),
                            (u.LootBoxesShortStatsGroup = 'lootboxes_short_stats_group'),
                            (u.LootBoxesFullStatsSidebar = 'lootboxes_full_stats_sidebar'),
                            (u.lootBoxesFullStatsSelectAll = 'lootboxes_full_stats_select_all'),
                            (u.lootBoxesFullStatsSelect = 'lootboxes_full_stats_select'),
                            (u.lootBoxesFullStatsReward = 'lootboxes_full_stats_reward'));
                    })(s || (s = {})));
            },
            4891: (u, e, t) => {
                'use strict';
                t.d(e, { B: () => o });
                var r = t(1943),
                    n = t(4380);
                const o = (u) => {
                    const e = (0, r.Jp)(n.AN.Lootbox),
                        t = (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.RewardToopltip,
                            parentScreen: n.de.Probability,
                            timeLimit: n.sx,
                            info: null == u ? void 0 : u.info,
                        }),
                        o = (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.InfoIcon,
                            parentScreen: n.de.Storage,
                            timeLimit: n.sx,
                        }),
                        a = (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.ProbabilityPercent,
                            parentScreen: n.de.Probability,
                            timeLimit: n.sx,
                        }),
                        i = (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.ProbabilityPercentWithGarant,
                            parentScreen: n.de.Probability,
                            timeLimit: n.sx,
                        }),
                        s = (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.RewardToopltip,
                            parentScreen: n.de.Probability,
                            timeLimit: n.sx,
                            info: null == u ? void 0 : u.info,
                        }),
                        l = (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.MinorRewards,
                            parentScreen: n.de.Rewards,
                            timeLimit: n.sx,
                        }),
                        c = (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.RewardToopltip,
                            parentScreen: null == u ? void 0 : u.parentScreen,
                            timeLimit: n.sx,
                            info: null == u ? void 0 : u.info,
                        }),
                        E = (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.IconPossibleRewardGroup,
                            parentScreen: n.de.Storage,
                            timeLimit: n.sx,
                        }),
                        A = (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.RewardRotationToopltip,
                            parentScreen: null == u ? void 0 : u.parentScreen,
                            timeLimit: n.sx,
                            info: null == u ? void 0 : u.info,
                        });
                    return {
                        rewardToopltipWatched: t,
                        infoIconToopltipWatched: o,
                        probabilityPercentToopltipWatched: a,
                        probabilityPercentWithGarantToopltipWatched: i,
                        rewardVehicleToopltipWatched: s,
                        minorRewardsToopltipWatched: l,
                        rewardSharedToopltipWatched: c,
                        iconPossibleRewardGroupToopltipWatched: E,
                        carouselLootboxToopltipWatched: (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.CarouselLootbox,
                            parentScreen: n.de.Storage,
                            timeLimit: n.SS,
                        }),
                        rewardToopltipWatchedWithRotation: A,
                        statisticButtonToopltipWatched: (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.StatisticButton,
                            parentScreen: n.de.LootBoxesShortStats,
                            timeLimit: n.sx,
                        }),
                        deadlineWidgetToopltipWatched: (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.DeadlineWidget,
                            parentScreen: null == u ? void 0 : u.parentScreen,
                            timeLimit: n.sx,
                        }),
                        probabilityPercentWithGarantClick: () => {
                            e({
                                action: n.eX.Click,
                                parentScreen: n.de.Probability,
                                item: n.ob.ProbabilityPercentWithGarant,
                            });
                        },
                        probabilityPercentClick: () => {
                            e({ action: n.eX.Click, parentScreen: n.de.Probability, item: n.ob.ProbabilityPercent });
                        },
                        showLoseRewardsViewButton: (u, t) => {
                            e({
                                action: n.eX.Show,
                                parentScreen: n.de.LoseRewards,
                                item: u,
                                info: JSON.stringify({ lockpickCount: t }),
                            });
                        },
                        loseRewardsViewButtonClick: (u, t) => {
                            e({
                                action: n.eX.Click,
                                parentScreen: n.de.LoseRewards,
                                item: u,
                                info: JSON.stringify({ lockpickCount: t }),
                            });
                        },
                        showLoseRewardsViewCloseButton: (u) => {
                            e({
                                action: n.eX.Show,
                                parentScreen: n.de.LoseRewards,
                                item: n.ob.CloseButton,
                                info: JSON.stringify({ lockpickCount: u }),
                            });
                        },
                        loseRewardsViewCloseButtonClick: (u) => {
                            e({
                                action: n.eX.Click,
                                parentScreen: n.de.LoseRewards,
                                item: n.ob.CloseButton,
                                info: JSON.stringify({ lockpickCount: u }),
                            });
                        },
                        loseRewardsViewESCButtonClick: (u) => {
                            e({
                                action: n.eX.Click,
                                parentScreen: n.de.LoseRewards,
                                item: n.ob.ESCButton,
                                info: JSON.stringify({ lockpickCount: u }),
                            });
                        },
                        showRewardsViewCloseButton: (u) => {
                            e({
                                action: n.eX.Show,
                                parentScreen: n.de.Rewards,
                                item: n.ob.CloseButton,
                                info: JSON.stringify({ lootboxCount: u }),
                            });
                        },
                        rewardsViewCloseButtonClick: (u) => {
                            e({
                                action: n.eX.Click,
                                parentScreen: n.de.Rewards,
                                item: n.ob.CloseButton,
                                info: JSON.stringify({ lootboxCount: u }),
                            });
                        },
                        rewardsViewESCButtonClick: (u) => {
                            e({
                                action: n.eX.Click,
                                parentScreen: n.de.Rewards,
                                item: n.ob.ESCButton,
                                info: JSON.stringify({ lootboxCount: u }),
                            });
                        },
                        rewardsViewMinorRewardsShow: () => {
                            e({ action: n.eX.Show, parentScreen: n.de.Rewards, item: n.ob.MinorRewards });
                        },
                        showRewardsViewButton: (u, t) => {
                            e({
                                action: n.eX.Show,
                                parentScreen: n.de.Rewards,
                                item: u,
                                info: JSON.stringify({ lootboxCount: t }),
                            });
                        },
                        rewardsViewButtonClick: (u, t) => {
                            e({
                                action: n.eX.Click,
                                parentScreen: n.de.Rewards,
                                item: u,
                                info: JSON.stringify({ lootboxCount: t }),
                            });
                        },
                        rewardsVideoCloseClick: (u, t, r, o) => {
                            e({
                                action: n.eX.Click,
                                parentScreen: n.de.RewardVideo,
                                item: n.ob.CloseButton,
                                info: JSON.stringify({ duration: u, lootboxType: t, lootboxID: r, reward: o }),
                            });
                        },
                        rewardsVideoESCClick: (u, t, r, o) => {
                            e({
                                action: n.eX.Click,
                                parentScreen: n.de.RewardVideo,
                                item: n.ob.ESCButton,
                                info: JSON.stringify({ duration: u, lootboxType: t, lootboxID: r, reward: o }),
                            });
                        },
                        rewardsVideoStarted: (u, t, r) => {
                            e({
                                action: n.eX.VideoStarted,
                                parentScreen: n.de.RewardVideo,
                                item: n.ob.RewardVideo,
                                info: JSON.stringify({ lootboxID: t, lootboxType: u, reward: r }),
                            });
                        },
                        storageViewESCButtonClick: () => {
                            e({ action: n.eX.Click, parentScreen: n.de.Storage, item: n.ob.ESCButton });
                        },
                        iconPossibleRewardGroupClick: () => {
                            e({ action: n.eX.Click, parentScreen: n.de.Storage, item: n.ob.IconPossibleRewardGroup });
                        },
                        lootBoxesShortStatsViewESCButtonClick: (u) => {
                            e({
                                action: n.eX.Click,
                                parentScreen: n.de.LootBoxesShortStats,
                                item: n.ob.StatisticESCButton,
                                info: JSON.stringify({ tab: u }),
                            });
                        },
                        lootBoxesShortStatsOutsideClick: (u) => {
                            e({
                                action: n.eX.Click,
                                parentScreen: n.de.LootBoxesShortStats,
                                item: n.ob.statisticOutsideClick,
                                info: JSON.stringify({ tab: u }),
                            });
                        },
                        lootBoxesShortStatsTabsClick: (u) => {
                            e({
                                action: n.eX.Click,
                                parentScreen: n.de.LootBoxesShortStats,
                                item: n.ob.LootBoxesShortStatsTabs,
                                info: JSON.stringify({ tab: u }),
                            });
                        },
                        lootBoxesShortStatsGroupClick: (u) => {
                            e({
                                action: n.eX.Click,
                                parentScreen: n.de.LootBoxesShortStats,
                                item: n.ob.LootBoxesShortStatsGroup,
                                info: JSON.stringify({ category: u }),
                            });
                        },
                        lootBoxesFullStatsSidebarClick: (u) => {
                            e({
                                action: n.eX.Click,
                                parentScreen: n.de.LootBoxesFullStats,
                                item: n.ob.LootBoxesFullStatsSidebar,
                                info: JSON.stringify({ category: u }),
                            });
                        },
                        lootBoxesFullStatsSelectAllClick: (u) => {
                            e({
                                action: n.eX.Click,
                                parentScreen: n.de.LootBoxesFullStats,
                                item: n.ob.lootBoxesFullStatsSelectAll,
                                info: JSON.stringify({ isButtonActive: u }),
                            });
                        },
                        lootBoxesFullStatsSelectLootboxClick: (u, t) => {
                            e({
                                action: n.eX.Click,
                                parentScreen: n.de.LootBoxesFullStats,
                                item: n.ob.lootBoxesFullStatsSelect,
                                info: JSON.stringify({ lootboxID: u, isButtonActive: t }),
                            });
                        },
                        lootBoxesFullStatsRewardClick: (u) => {
                            e({
                                action: n.eX.Click,
                                parentScreen: n.de.LootBoxesFullStats,
                                item: n.ob.lootBoxesFullStatsReward,
                                info: JSON.stringify({ rewardType: u }),
                            });
                        },
                        storageViewBackButtonClick: () => {
                            e({ action: n.eX.Click, parentScreen: n.de.Storage, item: n.ob.BackButton });
                        },
                    };
                };
            },
            5612: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                const r = {
                    base: 'Preview_base_1f',
                    base__hovered: 'Preview_base__hovered_ee',
                    icon: 'Preview_icon_f3',
                    icon__small: 'Preview_icon__small_a1',
                    icon__normal: 'Preview_icon__normal_5c',
                    base__mouseDown: 'Preview_base__mouseDown_d0',
                    label: 'Preview_label_2e',
                    base__visibleLabel: 'Preview_base__visibleLabel_92',
                };
            },
            1609: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                const r = {
                    base: 'Reward_base_ea',
                    base__s48x48: 'Reward_base__s48x48_46',
                    base__small: 'Reward_base__small_c0',
                    base__s80x80: 'Reward_base__s80x80_ce',
                    base__big: 'Reward_base__big_e5',
                    base__s128x100: 'Reward_base__s128x100_c3',
                    base__s180x135: 'Reward_base__s180x135_7c',
                    base__s232x174: 'Reward_base__s232x174_67',
                    base__s296x222: 'Reward_base__s296x222_78',
                    base__s400x300: 'Reward_base__s400x300_07',
                    base__s600x450: 'Reward_base__s600x450_f8',
                    tooltipWrapper: 'Reward_tooltipWrapper_b5',
                    icon: 'Reward_icon_df',
                    overlay: 'Reward_overlay_68',
                    highlight: 'Reward_highlight_36',
                    image: 'Reward_image_89',
                    info: 'Reward_info_72',
                    info__multi: 'Reward_info__multi_63',
                    info__credits: 'Reward_info__credits_ef',
                    info__gold: 'Reward_info__gold_36',
                    info__crystal: 'Reward_info__crystal_36',
                    info__premiumTank: 'Reward_info__premiumTank_d3',
                    timer: 'Reward_timer_d3',
                };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return (__webpack_modules__[u].call(t.exports, t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, r] = deferred[s], o = !0, a = 0; a < e.length; a++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[a]))
                            ? e.splice(a--, 1)
                            : ((o = !1), r < n && (n = r));
                    if (o) {
                        deferred.splice(s--, 1);
                        var i = t();
                        void 0 !== i && (u = i);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > r; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, r];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return (__webpack_require__.d(e, { a: e }), e);
        }),
        (__webpack_require__.d = (u, e) => {
            for (var t in e)
                __webpack_require__.o(e, t) &&
                    !__webpack_require__.o(u, t) &&
                    Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (__webpack_require__.r = (u) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 }));
        }),
        (() => {
            var u = { 472: 0, 824: 0, 98: 0, 175: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        n,
                        [o, a, i] = t,
                        s = 0;
                    if (o.some((e) => 0 !== u[e])) {
                        for (r in a) __webpack_require__.o(a, r) && (__webpack_require__.m[r] = a[r]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (e && e(t); s < o.length; s++)
                        ((n = o[s]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(7100));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
