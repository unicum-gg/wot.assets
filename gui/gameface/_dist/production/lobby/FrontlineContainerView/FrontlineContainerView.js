(() => {
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                'use strict';
                t.d(u, { L$: () => l.L, qE: () => l.q, u5: () => _ });
                var n = t(6483),
                    a = t.n(n),
                    r = t(7727),
                    s = t(6179),
                    o = t.n(s),
                    i = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: c,
                    mixClass: _,
                    soundHover: m,
                    soundClick: d,
                    onMouseEnter: E,
                    onMouseMove: A,
                    onMouseDown: F,
                    onMouseUp: p,
                    onMouseLeave: g,
                    onClick: D,
                }) => {
                    const B = (0, s.useRef)(null),
                        b = (0, s.useState)(t),
                        h = b[0],
                        C = b[1],
                        f = (0, s.useState)(!1),
                        v = f[0],
                        w = f[1],
                        S = (0, s.useState)(!1),
                        T = S[0],
                        y = S[1],
                        x = (0, s.useCallback)(() => {
                            c || (B.current && (B.current.focus(), C(!0)));
                        }, [c]),
                        k = (0, s.useCallback)(
                            (e) => {
                                h && null !== B.current && !B.current.contains(e.target) && C(!1);
                            },
                            [h],
                        ),
                        M = (0, s.useCallback)(
                            (e) => {
                                c || (D && D(e));
                            },
                            [c, D],
                        ),
                        N = (0, s.useCallback)(
                            (e) => {
                                c || (null !== m && (0, r.G)(m), E && E(e), y(!0));
                            },
                            [c, m, E],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                A && A(e);
                            },
                            [A],
                        ),
                        O = (0, s.useCallback)(
                            (e) => {
                                c || (p && p(e), w(!1));
                            },
                            [c, p],
                        ),
                        P = (0, s.useCallback)(
                            (e) => {
                                c || (null !== d && (0, r.G)(d), F && F(e), t && x(), w(!0));
                            },
                            [c, d, F, x, t],
                        ),
                        I = (0, s.useCallback)(
                            (e) => {
                                c || (g && g(e), w(!1));
                            },
                            [c, g],
                        ),
                        H = a()(
                            i.Z.base,
                            i.Z[`base__${n}`],
                            {
                                [i.Z.base__disabled]: c,
                                [i.Z[`base__${u}`]]: u,
                                [i.Z.base__focus]: h,
                                [i.Z.base__highlightActive]: v,
                                [i.Z.base__firstHover]: T,
                            },
                            _,
                        ),
                        U = a()(i.Z.state, i.Z.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', k),
                                () => {
                                    document.removeEventListener('mousedown', k);
                                }
                            ),
                            [k],
                        ),
                        (0, s.useEffect)(() => {
                            C(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: B,
                                className: H,
                                onMouseEnter: N,
                                onMouseMove: L,
                                onMouseUp: O,
                                onMouseDown: P,
                                onMouseLeave: I,
                                onClick: M,
                            },
                            n !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: i.Z.back }),
                                    o().createElement('span', { className: i.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: U },
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
                const _ = (0, s.memo)(c);
            },
            2106: (e, u, t) => {
                'use strict';
                let n, a;
                (t.d(u, { L: () => n, q: () => a }),
                    (function (e) {
                        ((e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(a || (a = {})));
            },
            4090: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => c });
                var n = t(6483),
                    a = t.n(n),
                    r = t(6179),
                    s = t.n(r);
                const o = {
                        base: 'Counter_base_9e',
                        show: 'Counter_show_be',
                        base__big: 'Counter_base__big_19',
                        base__small: 'Counter_base__small_3b',
                        base__empty: 'Counter_base__empty_98',
                        base__animated: 'Counter_base__animated_40',
                        base__hidden: 'Counter_base__hidden_56',
                        hide: 'Counter_hide_b6',
                        bg: 'Counter_bg_74',
                        value: 'Counter_value_3e',
                        value__text: 'Counter_value__text_d6',
                        base__pattern: 'Counter_base__pattern_71',
                        plus: 'Counter_plus_15',
                        pattern: 'Counter_pattern_83',
                    },
                    i = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (e) => {
                    let u = e.size,
                        t = e.value,
                        n = e.isEmpty,
                        r = e.fadeInAnimation,
                        c = e.hide,
                        _ = e.maximumNumber,
                        m = e.className,
                        d = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, i);
                    const E = n ? null : t,
                        A = 'string' == typeof E;
                    if ((E && !A && E < 0) || 0 === E) return null;
                    const F = E && !A && E > _,
                        p = a()(
                            o.base,
                            o[`base__${u}`],
                            r && o.base__animated,
                            c && o.base__hidden,
                            !E && o.base__pattern,
                            n && o.base__empty,
                            m,
                        );
                    return s().createElement(
                        'div',
                        l({ className: p }, d),
                        s().createElement('div', { className: o.bg }),
                        s().createElement('div', { className: o.pattern }),
                        s().createElement(
                            'div',
                            { className: a()(o.value, A && o.value__text) },
                            F ? _ : E,
                            F && s().createElement('span', { className: o.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var n = t(6179),
                    a = t.n(n),
                    r = t(6483),
                    s = t.n(r),
                    o = t(3649),
                    i = t(5287);
                const l = ({ binding: e, text: u = '', classMix: t, alignment: r = o.v2.left }) =>
                    null === u
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : a().createElement(
                              n.Fragment,
                              null,
                              u.split('\n').map((u, l) =>
                                  a().createElement(
                                      'div',
                                      { className: s()(i.Z.base, t), key: `${u}-${l}` },
                                      (0, o.Uw)(u, r, e).map((e, u) =>
                                          a().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => _ });
                var n = t(3138),
                    a = t(6179),
                    r = t(1043),
                    s = t(5262);
                const o = n.O.client.getSize('rem'),
                    i = o.width,
                    l = o.height,
                    c = Object.assign({ width: i, height: l }, (0, s.T)(i, l, r.j)),
                    _ = (0, a.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var n = t(6179),
                    a = t.n(n),
                    r = t(6536),
                    s = t(3495),
                    o = t(1043),
                    i = t(5262),
                    l = t(3138);
                const c = (0, n.memo)(({ children: e }) => {
                    const u = (0, n.useContext)(s.Y),
                        t = (0, n.useState)(u),
                        c = t[0],
                        _ = t[1],
                        m = (0, n.useCallback)((e, u) => {
                            const t = l.O.view.pxToRem(e),
                                n = l.O.view.pxToRem(u);
                            _(Object.assign({ width: t, height: n }, (0, i.T)(t, n, o.j)));
                        }, []);
                    ((0, r.Z)(() => {
                        engine.on('clientResized', m);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', m), [m]));
                    const d = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return a().createElement(s.Y.Provider, { value: d }, e);
                });
            },
            6010: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    a = t(7382),
                    r = t(3495);
                const s = ['children'],
                    o = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, s);
                        const o = (0, n.useContext)(r.Y),
                            i = o.extraLarge,
                            l = o.large,
                            c = o.medium,
                            _ = o.small,
                            m = o.extraSmall,
                            d = o.extraLargeWidth,
                            E = o.largeWidth,
                            A = o.mediumWidth,
                            F = o.smallWidth,
                            p = o.extraSmallWidth,
                            g = o.extraLargeHeight,
                            D = o.largeHeight,
                            B = o.mediumHeight,
                            b = o.smallHeight,
                            h = o.extraSmallHeight,
                            C = { extraLarge: g, large: D, medium: B, small: b, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && i) return u;
                            if (t.large && l) return u;
                            if (t.medium && c) return u;
                            if (t.small && _) return u;
                            if (t.extraSmall && m) return u;
                        } else {
                            if (t.extraLargeWidth && d) return (0, a.H)(u, t, C);
                            if (t.largeWidth && E) return (0, a.H)(u, t, C);
                            if (t.mediumWidth && A) return (0, a.H)(u, t, C);
                            if (t.smallWidth && F) return (0, a.H)(u, t, C);
                            if (t.extraSmallWidth && p) return (0, a.H)(u, t, C);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && g) return u;
                                if (t.largeHeight && D) return u;
                                if (t.mediumHeight && B) return u;
                                if (t.smallHeight && b) return u;
                                if (t.extraSmallHeight && h) return u;
                            }
                        }
                        return null;
                    };
                ((o.defaultProps = {
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
                    (0, n.memo)(o));
            },
            7382: (e, u, t) => {
                'use strict';
                t.d(u, { H: () => n });
                const n = (e, u, t) =>
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
                (t.d(u, { YN: () => a.Y, ZN: () => n.Z }), t(6010));
                var n = t(1039),
                    a = t(3495);
            },
            1043: (e, u, t) => {
                'use strict';
                t.d(u, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                'use strict';
                var n;
                function a(e, u, t) {
                    const n = (function (e, u) {
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
                        a = (function (e, u) {
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
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: a === t.extraLarge.weight,
                        largeHeight: a === t.large.weight,
                        mediumHeight: a === t.medium.weight,
                        smallHeight: a === t.small.weight,
                        extraSmallHeight: a === t.extraSmall.weight,
                    };
                }
                (t.d(u, { T: () => a }),
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
            2862: (e, u, t) => {
                'use strict';
                let n, a, r, s, o, i, l;
                (t.d(u, { $h: () => s, A2: () => i, E4: () => n, h2: () => r, kK: () => o, sh: () => l }),
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
                            (e.Entitlements = 'entitlements'),
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement'));
                    })(a || (a = {})),
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
                    })(o || (o = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(i || (i = {})),
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
            1558: (e, u, t) => {
                'use strict';
                t.d(u, { m9: () => B, L_: () => g, i2: () => D, ry: () => F, pI: () => p, p3: () => d });
                var n = t(6179),
                    a = t.n(n),
                    r = t(4179);
                class s extends a().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? r.B3.GOLD : r.B3.INTEGRAL;
                        const u = r.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                s.defaultProps = { format: 'integral' };
                var o = t(2862);
                const i = [
                        o.E4.Items,
                        o.E4.Equipment,
                        o.E4.Xp,
                        o.E4.XpFactor,
                        o.E4.Blueprints,
                        o.E4.BlueprintsAny,
                        o.E4.Goodies,
                        o.E4.Berths,
                        o.E4.Slots,
                        o.E4.Tokens,
                        o.E4.CrewSkins,
                        o.E4.CrewBooks,
                        o.E4.Customizations,
                        o.E4.CreditsFactor,
                        o.E4.TankmenXp,
                        o.E4.TankmenXpFactor,
                        o.E4.FreeXpFactor,
                        o.E4.BattleToken,
                        o.E4.PremiumUniversal,
                        o.E4.NaturalCover,
                        o.E4.BpCoin,
                        o.E4.BattlePassSelectToken,
                        o.E4.BattlaPassFinalAchievement,
                        o.E4.BattleBadge,
                        o.E4.BonusX5,
                        o.E4.CrewBonusX3,
                        o.E4.NewYearFillers,
                        o.E4.NewYearInvoice,
                        o.E4.EpicSelectToken,
                        o.E4.Comp7TokenWeeklyReward,
                        o.E4.Comp7TokenCouponReward,
                        o.E4.BattleBoosterGift,
                        o.E4.CosmicLootboxCommon,
                        o.E4.CosmicLootboxSilver,
                        o.E4.SelectableBonus,
                        o.E4.GoldenTicket,
                        o.E4.PostStamp,
                        o.E4.PremiumPlusUniversal,
                    ],
                    l = [o.E4.Gold, o.E4.Credits, o.E4.Crystal, o.E4.FreeXp],
                    c = [o.E4.BattlePassPoints],
                    _ = [o.E4.PremiumPlus, o.E4.Premium];
                let m;
                !(function (e) {
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
                })(m || (m = {}));
                const d = (e) =>
                        i.includes(e)
                            ? o.$h.MULTI
                            : l.includes(e)
                              ? o.$h.CURRENCY
                              : c.includes(e)
                                ? o.$h.NUMBER
                                : _.includes(e)
                                  ? o.$h.PREMIUM_PLUS
                                  : o.$h.STRING,
                    E = ['engravings', 'backgrounds'],
                    A = ['engraving', 'background'],
                    F = (e, u = o.h2.Small) => {
                        const t = e.name,
                            n = e.type,
                            a = e.value,
                            r = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case o.h2.S600x450:
                                        return 'c_600x450';
                                    case o.h2.S400x300:
                                        return 'c_400x300';
                                    case o.h2.S296x222:
                                        return 'c_296x222';
                                    case o.h2.S232x174:
                                        return 'c_232x174';
                                    case o.h2.Big:
                                        return 'c_80x80';
                                    case o.h2.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${a}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${a}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${r}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, u) => {
                                    switch (u) {
                                        case o.h2.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case o.h2.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${r}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = E[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            r = a.$dyn(t);
                                        return r ? `${r}` : `${a.$dyn(A[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case o.h2.S600x450:
                                            return 'c_600x450';
                                        case o.h2.S400x300:
                                            return 'c_400x300';
                                        case o.h2.S296x222:
                                            return 'c_296x222';
                                        case o.h2.S232x174:
                                            return 'c_232x174';
                                        case o.h2.S180x135:
                                            return 'big';
                                        case o.h2.Big:
                                        case o.h2.S80x80:
                                            return 'c_80x80';
                                        case o.h2.Small:
                                        case o.h2.S48x48:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(u)}.${r}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                            case 'groups':
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${r}`;
                            case 'premium_universal':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.premium_plus_universal`;
                            case 'armory_coin':
                                return `R.images.armory_yard.gui.maps.icons.token.sf${((e) => {
                                    switch (e) {
                                        case o.h2.Mini:
                                            return m.s32;
                                        case o.h2.Small:
                                        case o.h2.S48x48:
                                            return m.s48;
                                        case o.h2.S80x80:
                                        case o.h2.Big:
                                            return m.s80;
                                        case o.h2.S128x100:
                                            return m.s116;
                                        case o.h2.S180x135:
                                        case o.h2.S232x174:
                                        case o.h2.S296x222:
                                            return m.s296;
                                        case o.h2.S400x300:
                                            return m.s400;
                                        case o.h2.S600x450:
                                            return m.s600;
                                    }
                                })(u)}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    p = (e, u, t) => {
                        const n = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            n,
                            t,
                        );
                    },
                    g = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case o.kK.BATTLE_BOOSTER:
                            case o.kK.BATTLE_BOOSTER_REPLACE:
                                return o.A2.BATTLE_BOOSTER;
                        }
                    },
                    D = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case o.kK.BATTLE_BOOSTER:
                                return o.sh.BATTLE_BOOSTER;
                            case o.kK.BATTLE_BOOSTER_REPLACE:
                                return o.sh.BATTLE_BOOSTER_REPLACE;
                            case o.kK.BUILT_IN_EQUIPMENT:
                                return o.sh.BUILT_IN_EQUIPMENT;
                            case o.kK.EQUIPMENT_PLUS:
                                return o.sh.EQUIPMENT_PLUS;
                            case o.kK.EQUIPMENT_TROPHY_BASIC:
                                return o.sh.EQUIPMENT_TROPHY_BASIC;
                            case o.kK.EQUIPMENT_TROPHY_UPGRADED:
                                return o.sh.EQUIPMENT_TROPHY_UPGRADED;
                            case o.kK.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                return o.sh.EQUIPMENT_MODERNIZED_UPGRADED_1;
                            case o.kK.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                return o.sh.EQUIPMENT_MODERNIZED_UPGRADED_2;
                            case o.kK.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                return o.sh.EQUIPMENT_MODERNIZED_UPGRADED_3;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_1:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_1;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_2:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_2;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_3:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_3;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_4:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_4;
                        }
                    },
                    B = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case o.$h.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case o.$h.CURRENCY:
                            case o.$h.NUMBER:
                                return a().createElement(s, { format: 'integral', value: Number(e) });
                            case o.$h.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
            },
            8089: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => _ });
                var n = t(6179),
                    a = t.n(n),
                    r = t(6483),
                    s = t.n(r),
                    o = t(7727),
                    i = t(7476);
                const l = [
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
                function c() {
                    return (
                        (c =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                class _ extends a().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, o.G)(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, o.G)(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                (e && e(u), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            r = e.side,
                            o = e.type,
                            _ = e.classNames,
                            m = e.onMouseEnter,
                            d = e.onMouseLeave,
                            E = e.onMouseDown,
                            A = e.onMouseUp,
                            F =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(e, l)),
                            p = s()(i.Z.base, i.Z[`base__${o}`], i.Z[`base__${r}`], null == _ ? void 0 : _.base),
                            g = s()(i.Z.icon, i.Z[`icon__${o}`], i.Z[`icon__${r}`], null == _ ? void 0 : _.icon),
                            D = s()(i.Z.glow, null == _ ? void 0 : _.glow),
                            B = s()(i.Z.caption, i.Z[`caption__${o}`], null == _ ? void 0 : _.caption),
                            b = s()(i.Z.goto, null == _ ? void 0 : _.goto);
                        return a().createElement(
                            'div',
                            c(
                                {
                                    className: p,
                                    onMouseEnter: this._onMouseEnter(m),
                                    onMouseLeave: this._onMouseLeave(d),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(A),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                F,
                            ),
                            'info' !== o && a().createElement('div', { className: i.Z.shine }),
                            a().createElement('div', { className: g }, a().createElement('div', { className: D })),
                            a().createElement('div', { className: B }, u),
                            n && a().createElement('div', { className: b }, n),
                        );
                    }
                }
                _.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7078: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => i });
                var n = t(6179),
                    a = t.n(n),
                    r = t(2056);
                const s = ['children'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, s);
                    return a().createElement(
                        r.u,
                        o(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            t,
                        ),
                        u,
                    );
                };
            },
            3415: (e, u, t) => {
                'use strict';
                t.d(u, { l: () => l });
                var n = t(6179),
                    a = t.n(n),
                    r = t(7078),
                    s = t(6373),
                    o = t(2056);
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = a().createElement('div', { className: t }, e);
                    if (u.header || u.body) return a().createElement(s.i, u, n);
                    const l = u.contentId,
                        c = u.args,
                        _ = null == c ? void 0 : c.contentId;
                    return l || _
                        ? a().createElement(o.u, i({}, u, { contentId: l || _ }), n)
                        : a().createElement(r.t, u, n);
                };
            },
            6373: (e, u, t) => {
                'use strict';
                t.d(u, { i: () => l });
                var n = t(2056),
                    a = t(6179),
                    r = t.n(a);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            _ = e.alert,
                            m = e.args,
                            d = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, s);
                        const E = (0, a.useMemo)(() => {
                            const e = Object.assign({}, m, { body: t, header: l, note: c, alert: _ });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [_, t, l, c, m]);
                        return r().createElement(
                            n.u,
                            o(
                                {
                                    contentId:
                                        ((A = null == m ? void 0 : m.hasHtmlContent),
                                        A ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                d,
                            ),
                            u,
                        );
                        var A;
                    };
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var n = t(7902),
                    a = t(4179),
                    r = t(6179);
                const s = [
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
                function o(e) {
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
                const i = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: a.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    l = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            m = e.onClick,
                            d = e.ignoreShowDelay,
                            E = void 0 !== d && d,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            p = e.decoratorId,
                            g = void 0 === p ? 0 : p,
                            D = e.isEnabled,
                            B = void 0 === D || D,
                            b = e.targetId,
                            h = void 0 === b ? 0 : b,
                            C = e.onShow,
                            f = e.onHide,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, s);
                        const w = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, r.useMemo)(() => h || (0, n.F)().resId, [h]),
                            T = (0, r.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (i(t, g, { isMouseEvent: !0, on: !0, arguments: o(a) }, S),
                                    C && C(),
                                    (w.current.isVisible = !0));
                            }, [t, g, a, S, C]),
                            y = (0, r.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        i(t, g, { on: !1 }, S),
                                        w.current.isVisible && f && f(),
                                        (w.current.isVisible = !1));
                                }
                            }, [t, g, S, f]),
                            x = (0, r.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = w.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', x, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', x, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === B && y();
                            }, [B, y]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        (window.removeEventListener('mouseleave', y), y());
                                    }
                                ),
                                [y],
                            ),
                            B
                                ? (0, r.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((k = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((w.current.timeoutId = window.setTimeout(T, E ? 100 : 400)),
                                                          l && l(e),
                                                          k && k(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (y(), null == c || c(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === F && y(), null == m || m(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === F && y(), null == _ || _(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          v,
                                      ),
                                  )
                                : u
                        );
                        var k;
                    };
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
            3532: (e) => {
                e.exports = {
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
            9887: (e) => {
                e.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            122: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => n });
                const n = (e, u) => {
                    let t;
                    const n = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        ('function' == typeof t && t(), clearTimeout(n));
                    };
                };
            },
            8246: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => s });
                var n = t(3138);
                function a(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const r = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: u = 0, getRoot: t = r, context: s = 'model' } = {}) {
                    const o = new Map();
                    function i(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = o.get(u);
                                void 0 !== t && t(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = t(u),
                            a = s.split('.').reduce((e, u) => e[u], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, a);
                    };
                    return {
                        subscribe: (t, a) => {
                            const r = 'string' == typeof a ? `${s}.${a}` : s,
                                i = n.O.view.addModelObserver(r, u, !0);
                            return (o.set(i, t), e && t(l(a)), i);
                        },
                        readByPath: l,
                        createCallback: (e, u) => {
                            const t = l(u);
                            return (...u) => {
                                t(e(...u));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const u = l(e);
                            return () => {
                                u();
                            };
                        },
                        dispose: function () {
                            for (
                                var e,
                                    t = (function (e, u) {
                                        var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (t) return (t = t.call(e)).next.bind(t);
                                        if (
                                            Array.isArray(e) ||
                                            (t = (function (e, u) {
                                                if (e) {
                                                    if ('string' == typeof e) return a(e, u);
                                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === t && e.constructor && (t = e.constructor.name),
                                                        'Map' === t || 'Set' === t
                                                            ? Array.from(e)
                                                            : 'Arguments' === t ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                                              ? a(e, u)
                                                              : void 0
                                                    );
                                                }
                                            })(e)) ||
                                            (u && e && 'number' == typeof e.length)
                                        ) {
                                            t && (e = t);
                                            var n = 0;
                                            return function () {
                                                return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                                            };
                                        }
                                        throw new TypeError(
                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                        );
                                    })(o.keys());
                                !(e = t()).done;

                            )
                                i(e.value, u);
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (e, u, t) => {
                'use strict';
                t.d(u, { q: () => i });
                var n = t(4598),
                    a = t(9174),
                    r = t(6179),
                    s = t.n(r),
                    o = t(8246);
                const i = () => (e, u) => {
                    const t = (0, r.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: _ }) {
                            const m = (0, r.useRef)([]),
                                d = (t, r, s) => {
                                    var i;
                                    const l = o.U(r),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == s ? void 0 : s.getter) ? i : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === t ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        d = (e) => m.current.push(e),
                                        E = e({
                                            mode: t,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const r = null != u ? u : _(e),
                                                        s = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const r = null != u ? u : _(e),
                                                        s = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = _(u);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, u) => ((e[u] = a.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            r[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                    {
                                                        const r = e,
                                                            s = Object.entries(r),
                                                            o = s.reduce(
                                                                (e, [u, t]) => ((e[t] = a.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        s.forEach(([u, t]) => {
                                                                            o[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            o
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: d,
                                        }),
                                        A = { mode: t, model: E, externalModel: c, cleanup: d };
                                    return {
                                        model: E,
                                        controls: 'mocks' === t && s ? s.controls(A) : u(A),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                E = (0, r.useRef)(!1),
                                A = (0, r.useState)(i),
                                F = A[0],
                                p = A[1],
                                g = (0, r.useState)(() => d(i, l, _)),
                                D = g[0],
                                B = g[1];
                            return (
                                (0, r.useEffect)(() => {
                                    E.current ? B(d(F, l, _)) : (E.current = !0);
                                }, [_, F, l]),
                                (0, r.useEffect)(() => {
                                    p(i);
                                }, [i]),
                                (0, r.useEffect)(
                                    () => () => {
                                        (D.externalModel.dispose(), m.current.forEach((e) => e()));
                                    },
                                    [D],
                                ),
                                s().createElement(t.Provider, { value: D }, c)
                            );
                        },
                        () => (0, r.useContext)(t),
                    ];
                };
            },
            7044: (e, u, t) => {
                'use strict';
                (t.d(u, { IZ: () => r, e1: () => o, f8: () => s }), t(3649));
                var n = t(728),
                    a = t(4179);
                const r = 604800;
                function s(e = 0) {
                    let u = e;
                    const t = Math.trunc(u / 86400);
                    u -= 86400 * t;
                    const n = Math.trunc(u / 3600);
                    u -= 3600 * n;
                    const a = Math.trunc(u / 60);
                    return ((u -= 60 * a), { days: t, hours: n, minutes: a, seconds: u });
                }
                Date.now();
                const o = (e, u, t) => {
                    switch (u) {
                        case n.U.SHORT_DATE:
                            return t ? a.Z5.getDateFormat(e, a.kH.SHORT_FORMAT) : a.cy.getTimeFormat('%d.%m.%y', e, !0);
                        case n.U.SHORT_TIME:
                            return t ? a.Z5.getTimeFormat(e, a.lf.SHORT_FORMAT) : a.cy.getTimeFormat('%I:%M %p', e, !0);
                        case n.U.SHORT_DATE_TIME:
                            return t
                                ? `${a.Z5.getDateFormat(e, a.kH.SHORT_FORMAT)}, ${a.Z5.getTimeFormat(e, a.lf.SHORT_FORMAT)}`
                                : a.cy.getTimeFormat('%d.%m.%y, %I:%M %p', e, !0);
                        case n.U.FULL_DATE:
                            return t ? a.Z5.getDateFormat(e, a.kH.LONG_FORMAT) : a.cy.getTimeFormat('%B %d, %Y', e, !0);
                        case n.U.FULL_DATE_TIME:
                            return t
                                ? `${a.Z5.getDateFormat(e, a.kH.LONG_FORMAT)}, ${a.Z5.getTimeFormat(e, a.lf.SHORT_FORMAT)}`
                                : a.cy.getTimeFormat('%B %d, %Y, %I:%M %p', e, !0);
                        case n.U.MONTH:
                            return a.cy.getTimeFormat('%B', e, !0);
                        case n.U.MONTH_DATE:
                            return a.cy.getTimeFormat('%B %e', e, !0);
                        case n.U.DATE_MONTH:
                            return a.cy.getTimeFormat('%e %B', e, !0);
                        case n.U.MONTH_YEAR:
                            return a.cy.getTimeFormat('%B %Y', e, !0);
                        case n.U.WEEK_DAY:
                            return a.cy.getTimeFormat('%A', e, !0);
                        case n.U.WEEK_DAY_TIME:
                            return t
                                ? `${a.cy.getTimeFormat('%A', e, !0)} ${a.Z5.getTimeFormat(e, a.lf.SHORT_FORMAT)}`
                                : a.cy.getTimeFormat('%A, %I:%M %p', e, !0);
                        case n.U.YEAR:
                            return a.cy.getTimeFormat('%Y', e, !0);
                        case n.U.DATE_YEAR:
                            return a.cy.getTimeFormat('%d, %Y', e, !0);
                    }
                };
            },
            527: (e, u, t) => {
                'use strict';
                (t.r(u), t.d(u, { mouse: () => o, onResize: () => r }));
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    s = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    o = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, a.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, a.R)(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, a.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const r = `mouse${u}`,
                                            o = s[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, i),
                                            n(),
                                            () => {
                                                a &&
                                                    (o(),
                                                    window.removeEventListener(r, i),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (a = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
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
                                e.enabled && (0, a.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, a.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => a,
                        graphicsQuality: () => s,
                    }));
                var n = t(527);
                function a(e = 'px') {
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
            1176: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2472: (e, u, t) => {
                'use strict';
                function n(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => n });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => a });
                var n = t(5959);
                const a = { view: t(7641), client: n };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => a });
                var n = t(2472);
                const a = {
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
            7641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => v,
                        events: () => r.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getScale: () => F,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => h,
                        isFocused: () => B,
                        pxToRem: () => p,
                        remToPx: () => g,
                        resize: () => d,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => S,
                    }));
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    s = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function E(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: g(u.x), y: g(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function C() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => r });
                const n = ['args'],
                    a = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(u, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
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
                        var a;
                    },
                    r = {
                        close(e) {
                            a('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            a(64);
                        },
                        move(e) {
                            a(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                'use strict';
                function n() {}
                function a() {
                    return !1;
                }
                (t.d(u, { ZT: () => n, jv: () => a }), console.log);
            },
            7902: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => n });
                const n = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        n = R.invalid('resId');
                    return (
                        u &&
                            ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (n = window.subViews[t].id)),
                        { caller: t, stack: u, resId: n }
                    );
                };
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(6179);
                const a = (e) => {
                    const u = (0, n.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { Aq: () => i, GS: () => l, cJ: () => s, fd: () => o });
                var n = t(6179),
                    a = t(7739),
                    r = t(1043);
                let s, o, i;
                (!(function (e) {
                    ((e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.j.small.width)] = 'Small'),
                        (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                        (e[(e.Large = r.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge'));
                })(s || (s = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge'));
                    })(o || (o = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge'));
                    })(i || (i = {})));
                const l = () => {
                    const e = (0, n.useContext)(a.YN),
                        u = e.width,
                        t = e.height,
                        r = ((e) => {
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
                                    return (console.error('Unreachable media context resolution'), s.ExtraSmall);
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
                                    return (console.error('Unreachable media context resolution'), o.ExtraSmall);
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
                                    return (console.error('Unreachable media context resolution'), i.ExtraSmall);
                            }
                        })(e);
                    return { mediaSize: r, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            5521: (e, u, t) => {
                'use strict';
                let n, a;
                (t.d(u, { n: () => n }),
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
                    })(a || (a = {})));
            },
            9480: (e, u, t) => {
                'use strict';
                function n(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function a(e, u) {
                    for (let a = 0; a < e.length; a++) {
                        const r =
                            ((t = e[a]),
                            (n = void 0),
                            t && 'value' in t && null != (n = t.constructor) && n.name.includes('ArrayItem')
                                ? null == t
                                    ? void 0
                                    : t.value
                                : t);
                        if (u(r, a, e)) return r;
                    }
                    var t, n;
                }
                t.d(u, { UI: () => n, sE: () => a });
            },
            7727: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e);
                }
                t.d(u, { G: () => n });
            },
            3649: (e, u, t) => {
                'use strict';
                let n;
                function a(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function r(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                (t.d(u, { Eg: () => o, Uw: () => d, WU: () => a, uF: () => r, v2: () => n, z4: () => s }),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(n || (n = {})));
                const s = (e) => e.replace(/&nbsp;/g, ' '),
                    o = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    i = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    l = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    c = (e, u, t = n.left) => e.split(u).reduce(t === n.left ? i : l, []),
                    _ = (() => {
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
                    m = ['zh_cn', 'zh_sg', 'zh_tw'],
                    d = (e, u, t) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            t && e in t
                                ? t[e]
                                : ((e, u = n.left) => {
                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return m.includes(t)
                                          ? _(e)
                                          : ((e, u = n.left) => {
                                                let t = [];
                                                const a =
                                                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                    r = s(e);
                                                return (
                                                    c(r, /( )/, u).forEach((e) => (t = t.concat(c(e, a, n.left)))),
                                                    t
                                                );
                                            })(e, u);
                                  })(e, u),
                        );
            },
            728: (e, u, t) => {
                'use strict';
                let n;
                (t.d(u, { U: () => n }),
                    (function (e) {
                        ((e.SHORT_DATE = 'short-date'),
                            (e.SHORT_TIME = 'short-time'),
                            (e.SHORT_DATE_TIME = 'short-date-time'),
                            (e.FULL_DATE = 'full-date'),
                            (e.FULL_DATE_TIME = 'full-date-time'),
                            (e.MONTH = 'month'),
                            (e.MONTH_DATE = 'month-date'),
                            (e.DATE_MONTH = 'date-month'),
                            (e.MONTH_YEAR = 'month-year'),
                            (e.WEEK_DAY = 'week-day'),
                            (e.WEEK_DAY_TIME = 'week-day-time'),
                            (e.YEAR = 'year'),
                            (e.DATE_YEAR = 'date-year'));
                    })(n || (n = {})));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(3138);
                class a {
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
                        return (window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, u, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, t, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                a.__instance = void 0;
                const r = a;
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
            4179: (e, u, t) => {
                'use strict';
                t.d(u, {
                    Sw: () => r.Z,
                    kH: () => d,
                    B3: () => c,
                    Z5: () => s,
                    lf: () => m,
                    cy: () => o,
                    B0: () => i,
                    ry: () => D,
                });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                const a = n;
                var r = t(1358);
                const s = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let i;
                var l;
                (((l = i || (i = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    A = t(3138);
                const F = ['args'];
                function p(e, u, t, n, a, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(n, a);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(u, t);
                                        function s(e) {
                                            p(r, n, a, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            p(r, n, a, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(u, F);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    b = () => B(i.CLOSE),
                    h = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var C = t(7572);
                const f = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: C.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: _,
                        TimeFormatType: m,
                        DateFormatType: d,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => B(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => B(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const s = A.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                m = o.height,
                                d = {
                                    x: A.O.view.pxToRem(l) + s.x,
                                    y: A.O.view.pxToRem(c) + s.y,
                                    width: A.O.view.pxToRem(_),
                                    height: A.O.view.pxToRem(m),
                                };
                            B(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: g(d),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => h(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, b);
                        },
                        handleViewEvent: B,
                        onBindingsReady: D,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const a = Object.prototype.toString.call(u[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < a.length; u++) t[n].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = v;
            },
            1504: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => i });
                var n = t(7739),
                    a = t(6179),
                    r = t.n(a),
                    s = t(2849);
                const o = ['children'],
                    i = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, o);
                        return r().createElement(n.ZN, null, r().createElement(s.l, t, u));
                    };
            },
            2849: (e, u, t) => {
                'use strict';
                t.d(u, { l: () => A });
                var n = t(6483),
                    a = t.n(n),
                    r = t(926),
                    s = t.n(r),
                    o = t(6179),
                    i = t.n(o),
                    l = t(5415);
                const c = ['children', 'className'];
                function _() {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                }
                const m = {
                        [l.fd.ExtraSmall]: '',
                        [l.fd.Small]: s().SMALL_WIDTH,
                        [l.fd.Medium]: `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH}`,
                        [l.fd.Large]: `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH} ${s().LARGE_WIDTH}`,
                        [l.fd.ExtraLarge]:
                            `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH} ${s().LARGE_WIDTH} ${s().EXTRA_LARGE_WIDTH}`,
                    },
                    d = {
                        [l.Aq.ExtraSmall]: '',
                        [l.Aq.Small]: s().SMALL_HEIGHT,
                        [l.Aq.Medium]: `${s().SMALL_HEIGHT} ${s().MEDIUM_HEIGHT}`,
                        [l.Aq.Large]: `${s().SMALL_HEIGHT} ${s().MEDIUM_HEIGHT} ${s().LARGE_HEIGHT}`,
                        [l.Aq.ExtraLarge]:
                            `${s().SMALL_HEIGHT} ${s().MEDIUM_HEIGHT} ${s().LARGE_HEIGHT} ${s().EXTRA_LARGE_HEIGHT}`,
                    },
                    E = {
                        [l.cJ.ExtraSmall]: '',
                        [l.cJ.Small]: s().SMALL,
                        [l.cJ.Medium]: `${s().SMALL} ${s().MEDIUM}`,
                        [l.cJ.Large]: `${s().SMALL} ${s().MEDIUM} ${s().LARGE}`,
                        [l.cJ.ExtraLarge]: `${s().SMALL} ${s().MEDIUM} ${s().LARGE} ${s().EXTRA_LARGE}`,
                    },
                    A = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, c);
                        const r = (0, l.GS)(),
                            s = r.mediaWidth,
                            o = r.mediaHeight,
                            A = r.mediaSize;
                        return i().createElement('div', _({ className: a()(t, m[s], d[o], E[A]) }, n), u);
                    };
            },
            4029: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => n.z });
                var n = t(1504);
            },
            3458: (e, u, t) => {
                'use strict';
                let n;
                (t.d(u, { Z0: () => a, in: () => n, sx: () => r }),
                    (function (e) {
                        ((e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning'));
                    })(n || (n = {})));
                const a = 'tooltip_watched',
                    r = 2;
                let s;
                !(function (e) {
                    ((e.Click = 'click'), (e.KeyDown = 'keydown'));
                })(s || (s = {}));
            },
            5983: (e, u, t) => {
                'use strict';
                t.d(u, { D9: () => n, RM: () => a, ob: () => r });
                const n = 'epic_battle';
                let a, r, s;
                (!(function (e) {
                    ((e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view'));
                })(a || (a = {})),
                    (function (e) {
                        ((e.AbilitiesCheckboxTooltip = 'abilities_checkbox_tooltip'),
                            (e.EpicWidgetTooltip = 'epic_widget_tooltip'),
                            (e.BannerPerformance = 'banner_performance_tooltip'),
                            (e.SkillPointsTooltip = 'skill_points_tooltip'),
                            (e.AbilityLevelsTooltip = 'ability_levels_tooltip'),
                            (e.SkillOrderTooltip = 'skill_order_tooltip'),
                            (e.SkillLevelTab = 'skill_level_tab'),
                            (e.RewardsButton = 'rewards_button'),
                            (e.RewardsButtonTooltip = 'rewards_button_tooltip'),
                            (e.RewardTooltip = 'reward_tooltip'),
                            (e.AwardsOkButton = 'awards_ok'),
                            (e.AwardsView = 'awards_view'),
                            (e.RewardsSelectionView = 'rewards_selection_view'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.Click = 'click'), (e.Close = 'close'));
                    })(s || (s = {})));
            },
            405: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => o });
                var n = t(6179),
                    a = t(3458),
                    r = t(5983),
                    s = t(1943);
                const o = (e, u, t, o) => {
                    const i = (0, s.k2)(r.D9),
                        l = i[0],
                        c = i[1];
                    return [
                        (0, n.useCallback)(() => l(a.Z0), [l]),
                        (0, n.useCallback)(
                            () => c({ action: a.Z0, timeLimit: a.sx, item: e, parentScreen: u, itemState: t, info: o }),
                            [c, e, u, t, o],
                        ),
                    ];
                };
            },
            1943: (e, u, t) => {
                'use strict';
                t.d(u, { k2: () => o });
                var n = t(6179),
                    a = t(3458);
                const r = () => Date.now(),
                    s = (e, u) => {
                        const t = ((e, u) => {
                                const t = (0, n.useCallback)(
                                    (t, n = a.in.Info, r) => {
                                        (r || (r = {}),
                                            Object.keys(r).length >= 200 ||
                                                window.uiLoggerModel.log({
                                                    feature: e,
                                                    group: u,
                                                    action: t,
                                                    logLevel: n,
                                                    params: JSON.stringify(r),
                                                }));
                                    },
                                    [e, u],
                                );
                                return (e, u, n) => t(e, u, n);
                            })(e, u),
                            s = (0, n.useRef)(new Map()),
                            o = (0, n.useRef)(new Map()),
                            i = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = s.current.get(e);
                                    (void 0 !== u && u > 0) || s.current.set(e, r());
                                },
                                [s],
                            ),
                            l = (0, n.useCallback)(() => {
                                (s.current.clear(), o.current.clear());
                            }, [s, o]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== s.current.get(e) &&
                                        void 0 === o.current.get(e) &&
                                        o.current.set(e, r());
                                },
                                [s, o],
                            ),
                            _ = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = s.current.get(e);
                                    if (void 0 === u) return;
                                    const t = o.current.get(e);
                                    if (void 0 === t) return;
                                    o.current.delete(e);
                                    const n = r() - t;
                                    s.current.set(e, u + n);
                                },
                                [s, o],
                            ),
                            m = (0, n.useCallback)(
                                (e, u = 0, n, a) => {
                                    const i = s.current.get(e);
                                    if (void 0 === i) return;
                                    (void 0 !== o.current.get(e) && _(e), s.current.delete(e));
                                    const l = (r() - i) / 1e3;
                                    l <= u ||
                                        ((a = ((e, u) => (void 0 === e && (e = {}), (e.timeSpent = u), e))(a, l)),
                                        t(e, n, a));
                                },
                                [s, o, t, _],
                            );
                        return [(e) => i(e), (e, u, t, n) => m(e, u, t, n), () => l(), (e) => c(e), (e) => _(e)];
                    },
                    o = (e) => {
                        const u = s(e, 'metrics'),
                            t = u[0],
                            a = u[1],
                            r = u[2],
                            o = u[3],
                            i = u[4],
                            l = (0, n.useCallback)(
                                (e) => {
                                    const u = e.action,
                                        t = e.timeLimit,
                                        n = e.logLevel;
                                    a(
                                        u,
                                        t,
                                        n,
                                        (({ partnerID: e, item: u, parentScreen: t, itemState: n, info: a }) => ({
                                            item: u,
                                            partnerID: e || null,
                                            parent_screen: t || null,
                                            item_state: n || null,
                                            additional_info: a || null,
                                        }))(e),
                                    );
                                },
                                [a],
                            );
                        return [(e) => t(e), (e) => l(e), () => r(), (e) => o(e), (e) => i(e)];
                    };
            },
            4713: (e, u, t) => {
                'use strict';
                var n = t(4179),
                    a = t(4029),
                    r = t(6179),
                    s = t.n(r),
                    o = t(493),
                    i = t.n(o),
                    l = t(3215),
                    c = t(9174);
                const _ = (0, l.q)()(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            subViewActive: c.LO.box(
                                window.subViews.ids().includes(R.views.frontline.lobby.ProgressView('resId')),
                            ),
                        }),
                        ({ cleanup: e, model: u }) => {
                            const t = (function (e) {
                                    const u = {};
                                    for (const t in e)
                                        if (Object.prototype.hasOwnProperty.call(e, t)) {
                                            const n = e[t];
                                            u[t] = (0, c.aD)(n);
                                        }
                                    return u;
                                })({ updateSubViewId: (e) => u.subViewActive.set(e) }),
                                n = (e) => {
                                    e.includes(R.views.frontline.lobby.ProgressView('resId')) && t.updateSubViewId(!0);
                                },
                                a = (e) => {
                                    e.includes(R.views.frontline.lobby.ProgressView('resId')) && t.updateSubViewId(!1);
                                },
                                r = window.subViews.addChildChangedCallback(
                                    R.views.frontline.lobby.ProgressView('resId'),
                                );
                            return (
                                e(() => {
                                    (engine.off('subViews.onAdded', n),
                                        engine.off('subViews.onRemoved', a),
                                        window.subViews.removeChildChangedCallback(r));
                                }),
                                engine.on('subViews.onAdded', n),
                                engine.on('subViews.onRemoved', a),
                                {}
                            );
                        },
                    ),
                    m = _[0],
                    d = _[1];
                var E = t(8089),
                    A = t(6483),
                    F = t.n(A);
                const p = (e) => {
                    let u,
                        t = null;
                    return (
                        (t = requestAnimationFrame(() => {
                            t = requestAnimationFrame(() => {
                                ((t = null), (u = e()));
                            });
                        })),
                        () => {
                            ('function' == typeof u && u(), null !== t && cancelAnimationFrame(t));
                        }
                    );
                };
                var g = t(7030);
                const D = {
                        base: 'Frame_base_af',
                        base__small: 'Frame_base__small_f0',
                        base__medium: 'Frame_base__medium_05',
                        border: 'Frame_border_17',
                        border__top: 'Frame_border__top_f7',
                        border__bottom: 'Frame_border__bottom_52',
                        arrow: 'Frame_arrow_c3',
                    },
                    B = s().forwardRef(function ({ classNames: e, arrowRef: u, size: t = 'medium', className: n }, a) {
                        return s().createElement(
                            'div',
                            { className: F()(D.base, D[`base__${t}`], n), ref: a },
                            s().createElement('div', {
                                className: F()(
                                    D.border,
                                    D.border__top,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderTop,
                                ),
                            }),
                            s().createElement('div', {
                                className: F()(
                                    D.border,
                                    D.border__bottom,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderBottom,
                                ),
                            }),
                            s().createElement('div', { className: F()(D.arrow, null == e ? void 0 : e.arrow), ref: u }),
                        );
                    });
                var b = t(7727);
                const h = {
                        base: 'Tab_base_cd',
                        base__small: 'Tab_base__small_bf',
                        base__medium: 'Tab_base__medium_96',
                        base__active: 'Tab_base__active_7e',
                        highlight: 'Tab_highlight_b6',
                        icon: 'Tab_icon_28',
                        icon__small: 'Tab_icon__small_48',
                        icon__medium: 'Tab_icon__medium_73',
                        notification: 'Tab_notification_86',
                        notification__symbol: 'Tab_notification__symbol_9b',
                        notification__small: 'Tab_notification__small_92',
                        notification__dot: 'Tab_notification__dot_51',
                        notification__medium: 'Tab_notification__medium_e6',
                        notification__large: 'Tab_notification__large_6b',
                    },
                    C = { mouseEnter: 'highlight', click: 'play' },
                    f = s().forwardRef(function (
                        {
                            id: e,
                            isActive: u,
                            className: t,
                            classNames: n,
                            sounds: a = C,
                            notification: r,
                            icon: o,
                            size: i,
                            additionContent: l,
                            onClick: c,
                            onMouseEnter: _,
                            onMouseLeave: m,
                            WrapperElement: d,
                        },
                        E,
                    ) {
                        const A = (e, t) => {
                                !u && a[t] && (0, b.G)(a[t]);
                            },
                            p = s().createElement(
                                'div',
                                {
                                    className: F()(
                                        h.base,
                                        h[`base__${i}`],
                                        u && F()(h.base__active, null == n ? void 0 : n.activeTab),
                                        t,
                                    ),
                                    onClick: ((e) => () => {
                                        (A(0, 'click'), null == c || c(e));
                                    })(e),
                                    onMouseEnter: ((e) => () => {
                                        (A(0, 'mouseEnter'), null == _ || _(e));
                                    })(e),
                                    onMouseLeave: ((e) => () => {
                                        (A(0, 'mouseLeave'), null == m || m(e));
                                    })(e),
                                    ref: u ? E : null,
                                },
                                s().createElement('div', {
                                    className: F()(h.highlight, null == n ? void 0 : n.highlight),
                                }),
                                'function' == typeof o && i
                                    ? o(i)
                                    : s().createElement('div', {
                                          className: F()(h.icon, h[`icon__${i}`], null == n ? void 0 : n.icon),
                                          style: { backgroundImage: `url(${o})` },
                                      }),
                                l && l({ id: e, isActive: u, size: i }),
                                r &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: F()(
                                                h.notification,
                                                h[`notification__${r.type}`],
                                                r.size ? h[`notification__${r.size}`] : h.notification__medium,
                                                null == n ? void 0 : n.notification,
                                            ),
                                        },
                                        'dot' !== r.type && r.value,
                                    ),
                            );
                        return d ? s().createElement(d, { key: e, id: e }, p) : p;
                    }),
                    v = {
                        base: 'VerticalTabs_base_41',
                        title: 'VerticalTabs_title_8c',
                        group: 'VerticalTabs_group_08',
                        group__small: 'VerticalTabs_group__small_69',
                        group__medium: 'VerticalTabs_group__medium_68',
                    };
                var w = t(3138);
                const S = s().memo(function ({
                    active: e,
                    tabs: u,
                    sounds: t,
                    className: n,
                    classNames: a,
                    size: o = 'medium',
                    additionContent: i,
                    onClick: l,
                    onMouseEnter: c,
                    onMouseLeave: _,
                    WrapperElement: m,
                }) {
                    const d = (0, r.useRef)(null),
                        E = (0, r.useRef)(null),
                        A = (0, r.useRef)(null),
                        D = (0, r.useRef)(null),
                        b = (0, g.useSpring)(() => ({
                            marginLeft: 0,
                            onChange: (e) => {
                                const u = d.current;
                                u && (u.style.marginLeft = `${e.value.marginLeft}rem`);
                            },
                        }))[1],
                        h = (0, g.useSpring)(() => ({
                            opacity: 0,
                            onChange: (e) => {
                                const u = d.current;
                                u && (u.style.opacity = `${e.value.opacity}`);
                            },
                        }))[1],
                        C = (0, g.useSpring)(() => ({
                            position: 0,
                            onChange: (e) => {
                                const u = E.current;
                                u && (u.style.transform = `translateY(${e.value.position / w.O.view.getScale()}rem)`);
                            },
                            onStart: () => {
                                (b.start({ from: { marginLeft: 12 }, to: { marginLeft: 0 }, config: { duration: 50 } }),
                                    h.start({ from: { opacity: 1 }, to: { opacity: 0 }, config: { duration: 50 } }));
                            },
                            onRest: () => {
                                (b.start({
                                    from: { marginLeft: 0 },
                                    to: { marginLeft: 12 },
                                    config: { duration: 150 },
                                }),
                                    h.start({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 150 } }));
                            },
                        }))[1],
                        S = (0, r.useCallback)((e) => {
                            null !== A.current &&
                                null !== D.current &&
                                e(A.current.getBoundingClientRect().top - D.current.getBoundingClientRect().top);
                        }, []);
                    var T, y;
                    return (
                        (0, r.useEffect)(() => {
                            S((e) => {
                                C.start({ position: e, config: { duration: 200 } });
                            });
                        }, [C, e, S]),
                        (0, r.useEffect)(
                            () =>
                                p(() => {
                                    S((e) => {
                                        C.start({ position: e, immediate: !0 });
                                    });
                                }),
                            [C, S, o],
                        ),
                        (T = () => {
                            S((e) => {
                                C.start({ position: e, config: { duration: 200 } });
                            });
                        }),
                        (y = [C, S]),
                        (0, r.useEffect)(() => {
                            let e = () => {};
                            const u = () => {
                                (e(), (e = p(T)));
                            };
                            return (
                                window.addEventListener('resize', u),
                                () => {
                                    (e(), window.removeEventListener('resize', u));
                                }
                            );
                        }, y),
                        s().createElement(
                            'div',
                            { className: F()(v.base, n), ref: D },
                            u.map(({ id: u, items: n, title: r, groupClassNames: d }) =>
                                s().createElement(
                                    'div',
                                    { key: u, className: F()(v.group, v[`group__${o}`], null == d ? void 0 : d.group) },
                                    r &&
                                        s().createElement(
                                            'div',
                                            { className: F()(v.title, null == d ? void 0 : d.title) },
                                            r,
                                        ),
                                    n.map(({ id: u, icon: n, notification: r }) =>
                                        s().createElement(f, {
                                            key: u,
                                            id: u,
                                            icon: n,
                                            notification: r,
                                            ref: A,
                                            sounds: t,
                                            isActive: e === u,
                                            size: o,
                                            className: null == a ? void 0 : a.tab,
                                            classNames: a,
                                            additionContent: i,
                                            onMouseEnter: c,
                                            onMouseLeave: _,
                                            onClick: l,
                                            WrapperElement: m,
                                        }),
                                    ),
                                ),
                            ),
                            s().createElement(B, {
                                arrowRef: d,
                                ref: E,
                                size: o,
                                className: null == a ? void 0 : a.frame,
                                classNames: a,
                            }),
                        )
                    );
                });
                t(7044);
                var T = t(7902);
                const y = (e, u) => e.split('.').reduce((e, u) => e && e[u], u);
                var x = t(6536);
                const k = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    M = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    N = n.Sw.instance;
                let L;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(L || (L = {}));
                const O = (e = 'model', u = L.Deep) => {
                    const t = (0, r.useState)(0),
                        n = (t[0], t[1]),
                        a = (0, r.useMemo)(() => (0, T.F)(), []),
                        s = a.caller,
                        o = a.resId,
                        i = (0, r.useMemo)(
                            () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                            [s, e],
                        ),
                        l = (0, r.useState)(() =>
                            ((e) => {
                                const u = y(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return k(u) ? u.value : u;
                            })(
                                ((e) =>
                                    ((e, u) =>
                                        e.split('.').reduce((e, u) => {
                                            const t = y(`${e}.${u}`, window);
                                            return k(t) ? ((e, u) => `${e}.${u}.value`)(e, u) : `${e}.${u}`;
                                        }))(e))(i),
                            ),
                        ),
                        c = l[0],
                        _ = l[1],
                        m = (0, r.useRef)(-1);
                    return (
                        (0, x.Z)(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? L.Deep : L.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== L.None)
                            ) {
                                const t = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        u === L.Deep
                                            ? (e === c && n((e) => e + 1), _(e))
                                            : _(Object.assign([], e));
                                    },
                                    a = ((e) => {
                                        const u = ((e) => {
                                                const u = (0, T.F)(),
                                                    t = u.caller,
                                                    n = u.resId,
                                                    a =
                                                        window.__feature && window.__feature !== t && t
                                                            ? `subViews.${t}`
                                                            : '';
                                                return { modelPrefix: a, modelPath: M(a, ''), resId: n };
                                            })(),
                                            t = u.modelPrefix,
                                            n = e.split('.');
                                        if (n.length > 0) {
                                            const e = [n[0]];
                                            return (
                                                n.reduce((u, n) => {
                                                    const a = y(M(t, `${u}.${n}`), window);
                                                    return k(a)
                                                        ? (e.push(a.id), `${u}.${n}.value`)
                                                        : (e.push(n), `${u}.${n}`);
                                                }),
                                                e.reduce((e, u) => e + '.' + u)
                                            );
                                        }
                                        return '';
                                    })(e);
                                m.current = N.addCallback(a, t, o, u === L.Deep);
                            }
                        }),
                        (0, r.useEffect)(() => {
                            if (u !== L.None)
                                return () => {
                                    N.removeCallback(m.current, o);
                                };
                        }, [o, u]),
                        c
                    );
                };
                n.Sw.instance;
                var P = t(5521);
                const I = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function H(e = P.n.NONE, u = I, t = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== P.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (w.O.view.isEventHandled()) return;
                                (w.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                var U = t(5415),
                    $ = t(9480),
                    j = t(5983),
                    G = t(8154);
                const W = R.strings.fl_common.tab,
                    Y = (0, r.memo)(({ children: e, id: u }) => {
                        const t = O('model', L.None),
                            n = t.tabs,
                            a = t.currentTabId,
                            o = (0, r.useMemo)(() => {
                                const e = n.map(({ value: e }) => e).find((e) => e.id === u);
                                if (e) {
                                    const u = W.$dyn(e.type);
                                    return u
                                        ? {
                                              item: 'frontline_tab_tooltip',
                                              parentScreen: j.RM.ContainerView,
                                              info: e.type,
                                              header: u.$dyn('name'),
                                              body: u.$dyn('description'),
                                          }
                                        : null;
                                }
                                return null;
                            }, [u, n]);
                        return o
                            ? s().createElement(
                                  G.l,
                                  o,
                                  s().createElement(
                                      'div',
                                      { className: 'FrontlineContainerViewApp_tabWrapper_35' },
                                      0 === u &&
                                          0 !== a &&
                                          s().createElement(
                                              'div',
                                              { className: 'FrontlineContainerViewApp_blickWrapper_cb' },
                                              s().createElement('div', {
                                                  className: 'FrontlineContainerViewApp_blick_ee',
                                              }),
                                          ),
                                      e,
                                  ),
                              )
                            : e;
                    });
                var V = t(3403),
                    z = t(9321),
                    X = t(5660),
                    q = t(3860);
                const Z = ({ message: e, className: u, classNames: t }) =>
                    s().createElement(
                        'div',
                        { className: F()('Spinner_base_87', u) },
                        e &&
                            s().createElement(
                                'div',
                                { className: F()('Spinner_caption_cf', null == t ? void 0 : t.caption) },
                                e,
                            ),
                        s().createElement('div', { className: F()('Spinner_gear_c4', null == t ? void 0 : t.gear) }),
                        s().createElement('div', { className: F()('Spinner_logo_bf', null == t ? void 0 : t.logo) }),
                    );
                var K = t(3457);
                const Q = ({ errorBtnLabel: e, errorBtnClickHandler: u, errorMessage: t }) =>
                    s().createElement(
                        'div',
                        { className: 'Error_base_46' },
                        s().createElement('div', { className: 'Error_alertIcon_04' }),
                        s().createElement('div', { className: 'Error_errorCaption_f2' }, t),
                        s().createElement(K.u5, { size: K.qE.medium, mixClass: 'Error_button_cd', onClick: u }, e),
                    );
                Q.defaultProps = { errorBtnLabel: '', errorMessage: '' };
                const J = ({
                    message: e,
                    isError: u,
                    errorMessage: t,
                    errorBtnLabel: n,
                    errorBtnClickHandler: a,
                    overlayAlpha: o,
                }) => {
                    const i = s().createRef();
                    return (
                        (0, r.useEffect)(() => {
                            const e = i.current;
                            e && o && (e.style.opacity = o);
                        }, [i, o]),
                        s().createElement(
                            'div',
                            { className: 'Waiting_base_c5' },
                            s().createElement('div', { className: 'Waiting_blackOverlay_55', ref: i }),
                            u
                                ? s().createElement(Q, { errorBtnLabel: n, errorMessage: t, errorBtnClickHandler: a })
                                : s().createElement(Z, { message: e }),
                        )
                    );
                };
                J.defaultProps = {
                    isError: !1,
                    message: '',
                    overlayAlpha: '0.8',
                    errorBtnLabel: R.strings.dialogs.disconnected.cancel(),
                    errorMessage: '',
                };
                var ee = t(4598);
                const ue = (0, r.memo)(() =>
                        s().createElement(
                            'div',
                            { className: 'Loader_base_d7' },
                            s().createElement(J, {
                                errorBtnClickHandler: ee.ZT,
                                message: R.strings.fl_common.loading(),
                                overlayAlpha: '0.5',
                            }),
                        ),
                    ),
                    te = {
                        [q.R]: s().createElement(q.J, null),
                        [z.B]: s().createElement(z.t, null),
                        [X.o]: s().createElement(X.M, null),
                    },
                    ne = (0, V.Pi)(({ resId: e, className: u }) => {
                        const t = d().model.subViewActive.get();
                        if (!te[e]) throw new Error('View with specified id not found. ' + e);
                        return s().createElement(
                            'div',
                            { className: F()('ViewMapper_base_71', u) },
                            t ? te[e] : s().createElement(ue, null),
                        );
                    }),
                    ae = { notification: { type: 'dot' } },
                    re = R.strings.fl_common.button,
                    se = () => {
                        const e = (0, U.GS)().mediaSize,
                            u = O('model', L.Shallow),
                            t = u.currentTabId,
                            n = u.onTabChange,
                            a = u.onClose,
                            o = u.onInfo,
                            i = O('model.tabs'),
                            l = ((e, u) => {
                                var t;
                                return null == (t = $.sE(e, (e) => e.id === u)) ? void 0 : t.resId;
                            })(i, t),
                            c = (0, r.useCallback)((e) => n({ tabId: e }), [n]),
                            _ = (0, r.useCallback)(() => a(), [a]),
                            m = (0, r.useCallback)(() => o(), [o]),
                            d = ((e) => [
                                {
                                    id: 0,
                                    items: e.map(({ value: e }) => {
                                        const u = {
                                            id: e.id,
                                            icon: R.images.frontline.gui.maps.icons.tabs.c_64x64.$dyn(e.type),
                                        };
                                        return (e.isHighlighted && Object.assign(u, ae), u);
                                    }),
                                },
                            ])(i);
                        var A;
                        return (
                            (A = _),
                            H(P.n.ESCAPE, A),
                            s().createElement(
                                'div',
                                { className: 'FrontlineContainerViewApp_base_ee' },
                                0 !== t &&
                                    s().createElement(
                                        'div',
                                        { className: 'FrontlineContainerViewApp_closeButton_35' },
                                        s().createElement(E.A, {
                                            caption: re.close(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: _,
                                        }),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: 'FrontlineContainerViewApp_infoButton_90' },
                                    s().createElement(E.A, {
                                        caption: re.info(),
                                        type: 'info',
                                        side: 'left',
                                        onClick: m,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'FrontlineContainerViewApp_tabs_c9' },
                                    s().createElement(S, {
                                        tabs: d,
                                        size: e >= U.cJ.Small ? 'medium' : 'small',
                                        active: t,
                                        onClick: c,
                                        WrapperElement: Y,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'FrontlineContainerViewApp_content_85' },
                                    s().createElement(ne, {
                                        resId: l,
                                        className: 'FrontlineContainerViewApp_subView_df',
                                    }),
                                ),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    i().render(
                        s().createElement(a.z, null, s().createElement(m, null, s().createElement(se, null))),
                        document.getElementById('root'),
                    );
                });
            },
            9321: (e, u, t) => {
                'use strict';
                (t.d(u, { B: () => Ze, t: () => Ke }), t(4179));
                var n = t(6179),
                    a = t.n(n),
                    r = t(6483),
                    s = t.n(r),
                    o = t(4959),
                    i = t(3403),
                    l = t(3854);
                const c = (0, t(3215).q)()(
                        ({ observableModel: e }) => ({ root: e.object(), rewards: e.array('rewards') }),
                        ({ externalModel: e }) => ({ shopClick: e.createCallbackNoArgs('onShopClick') }),
                    ),
                    _ = c[0],
                    m = c[1],
                    d = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let E, A;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(E || (E = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(A || (A = {})));
                const F = ({ size: e = E.Default, classMix: u }) =>
                        a().createElement('div', { className: s()(d.background, d[`background__${e}`], u) }),
                    p = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    g = ({ size: e }) => {
                        const u = s()(p.base, p[`base__${e}`]);
                        return a().createElement('div', { className: u });
                    },
                    D = {
                        base: 'ProgressLineImpose_base_80',
                        base__disabled: 'ProgressLineImpose_base__disabled_cc',
                        base__finished: 'ProgressLineImpose_base__finished_d4',
                        base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_56',
                        pattern: 'ProgressLineImpose_pattern_1c',
                        base__small: 'ProgressLineImpose_base__small_55',
                        gradient: 'ProgressLineImpose_gradient_35',
                        glow: 'ProgressLineImpose_glow_a5',
                        glow__left: 'ProgressLineImpose_glow__left_d8',
                    },
                    B = (0, n.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: r, withoutBounce: o }) => {
                            const i = s()(
                                    D.base,
                                    D[`base__${e}`],
                                    t && D.base__disabled,
                                    r && D.base__finished,
                                    o && D.base__withoutBounce,
                                ),
                                l = !t && !r;
                            return a().createElement(
                                'div',
                                { className: i, style: n, ref: u },
                                a().createElement('div', { className: D.pattern }),
                                a().createElement('div', { className: D.gradient }),
                                l && a().createElement(g, { size: e }),
                            );
                        },
                    ),
                    b = ({ size: e, value: u, lineRef: t, disabled: r, onComplete: s }) => {
                        const o = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, n.useEffect)(() => {
                                i && s && s();
                            }, [i, s]),
                            a().createElement(B, { size: e, disabled: r, baseStyles: o, isComplete: i, lineRef: t })
                        );
                    };
                var h = t(122);
                let C, f;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(C || (C = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(f || (f = {})));
                const v = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < r,
                                _ = (0, n.useState)(f.Idle),
                                m = _[0],
                                d = _[1],
                                E = m === f.In,
                                A = m === f.End,
                                F = m === f.Idle,
                                p = (0, n.useCallback)(
                                    (e) => {
                                        (d(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, n.useEffect)(() => {
                                if (F && !t) {
                                    const e = u;
                                    return (0, h.F)(() => {
                                        p(f.In);
                                    }, e);
                                }
                            }, [p, t, F, u]),
                                (0, n.useEffect)(() => {
                                    if (E) {
                                        const t = e + u;
                                        return (0, h.F)(() => {
                                            (i && i(), p(f.End));
                                        }, t);
                                    }
                                }, [p, E, i, u, e]));
                            const D = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                B = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                b = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(r - o)}%`, left: `${c ? o : r}%` }),
                                    [r, c, o],
                                );
                            return A
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: b },
                                      a().createElement(
                                          'div',
                                          { style: F ? D : B, className: 'ProgressBarDeltaSimple_delta_99' },
                                          a().createElement(g, { size: s }),
                                      ),
                                  );
                        },
                    ),
                    w = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const _ = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(B, {
                                    size: u,
                                    lineRef: r,
                                    disabled: s,
                                    isComplete: o,
                                    baseStyles: _,
                                }),
                                t >= 0 &&
                                    a().createElement(v, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    S = (e) => (e ? { left: 0 } : { right: 0 }),
                    T = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    y = (e) => ({ transitionDuration: `${e}ms` }),
                    x = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: o,
                            to: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                            className: _,
                        }) => {
                            const m = i < r,
                                d = (0, n.useState)(C.Idle),
                                E = d[0],
                                A = d[1],
                                F = E === C.End,
                                p = E === C.Idle,
                                D = E === C.Grow,
                                B = E === C.Shrink,
                                b = (0, n.useCallback)(
                                    (e) => {
                                        (A(e), c && c(e));
                                    },
                                    [c],
                                ),
                                f = (0, n.useCallback)(
                                    (e, u) =>
                                        (0, h.F)(() => {
                                            b(e);
                                        }, u),
                                    [b],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return p
                                        ? f(C.Grow, u)
                                        : D
                                          ? f(C.Shrink, e)
                                          : B
                                            ? f(C.End, e)
                                            : void (F && l && l());
                            }, [f, t, F, D, p, B, l, u, e]);
                            const v = (0, n.useMemo)(() => Object.assign({ width: '100%' }, y(e), S(m)), [m, e]),
                                w = (0, n.useMemo)(() => Object.assign({ width: '0%' }, y(e), S(m)), [m, e]),
                                x = (0, n.useMemo)(() => Object.assign({ width: '0%' }, T(m, r), y(e)), [r, m, e]),
                                k = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - r)}%` }, T(m, r), y(e)),
                                    [r, m, i, e],
                                );
                            if (F) return null;
                            const R = s()(
                                'ProgressBarDeltaGrow_base_7e',
                                _,
                                m && 0 === i && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return a().createElement(
                                'div',
                                { style: p ? x : k, className: R },
                                a().createElement(
                                    'div',
                                    { style: B ? w : v, className: 'ProgressBarDeltaGrow_glow_68' },
                                    a().createElement(g, { size: o }),
                                ),
                            );
                        },
                    ),
                    k = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const _ = e < t,
                                m = (0, n.useState)(!1),
                                d = m[0],
                                E = m[1],
                                A = (0, n.useCallback)(
                                    (e) => {
                                        (e === C.Shrink && E(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                F = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                p = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(B, {
                                    size: u,
                                    lineRef: r,
                                    disabled: s,
                                    isComplete: o,
                                    withoutBounce: _ && 0 === e,
                                    baseStyles: d ? p : F,
                                }),
                                t >= 0 &&
                                    a().createElement(x, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: i.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    M = ['onComplete', 'onEndAnimation'];
                function N() {
                    return (
                        (N =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        N.apply(this, arguments)
                    );
                }
                const L = (0, n.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, M);
                        const s = (0, n.useState)(!1),
                            o = s[0],
                            i = s[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === r.to;
                                (e !== o && i(e), e && u && u(), t && t());
                            }, [o, u, t, r.to]);
                        switch (r.animationSettings.type) {
                            case A.Simple:
                                return a().createElement(w, N({}, r, { onEndAnimation: l, isComplete: o }));
                            case A.Growing:
                                return a().createElement(k, N({}, r, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    O = ['onEndAnimation'];
                function P() {
                    return (
                        (P =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        P.apply(this, arguments)
                    );
                }
                const I = (0, n.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, O);
                    const r = (0, n.useRef)({}),
                        s = (0, n.useCallback)(() => {
                            ((r.current.from = void 0), u && u());
                        }, [u]),
                        o = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = o),
                        a().createElement(L, P({}, t, { onEndAnimation: s, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function H() {
                    return (
                        (H =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        H.apply(this, arguments)
                    );
                }
                const U = (0, n.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: r,
                            animationSettings: s,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (r === u)
                                return a().createElement(b, {
                                    key: `${r}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: r,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: n,
                                animationSettings: s,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return s.withStack
                                ? a().createElement(I, c)
                                : a().createElement(L, H({ key: `${r}-${u}` }, c));
                        },
                    ),
                    $ = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    }),
                    j = (e, u, t) => (t < e ? e : t > u ? u : t),
                    G = (e, u, t) => ('number' == typeof t ? (j(0, u, t) / u) * 100 : e),
                    W = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#ffc',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    },
                    Y = {
                        freezed: !1,
                        withStack: !1,
                        type: A.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    V = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = W,
                            size: t = E.Default,
                            animationSettings: r = Y,
                            disabled: o = !1,
                            withoutBackground: i = !1,
                            progressBarBackgroundClassMix: l,
                            value: c,
                            deltaFrom: _,
                            lineRef: m,
                            onChangeAnimationState: A,
                            onEndAnimation: p,
                            onComplete: g,
                        }) => {
                            const D = ((e, u, t) =>
                                (0, n.useMemo)(() => {
                                    const n = (j(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: G(n, u, t) };
                                }, [t, u, e]))(c, e, _);
                            return a().createElement(
                                'div',
                                { className: s()(d.base, d[`base__${t}`]), style: $(u) },
                                !i && a().createElement(F, { size: t, classMix: l }),
                                a().createElement(U, {
                                    size: t,
                                    lineRef: m,
                                    disabled: o,
                                    value: D.value,
                                    deltaFrom: D.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: p,
                                    onChangeAnimationState: A,
                                    onComplete: g,
                                }),
                            );
                        },
                    );
                var z = t(3649),
                    X = t(2862),
                    q = t(1558),
                    Z = t(5415),
                    K = t(9480),
                    Q = t(5983),
                    J = t(5989);
                const ee = (0, i.Pi)(() => {
                        const e = m().model.rewards.get(),
                            u = (0, Z.GS)().mediaSize === Z.cJ.ExtraSmall ? X.h2.Small : X.h2.Big;
                        return a().createElement(
                            'div',
                            { className: 'Rewards_base_11' },
                            K.UI(e, (e, t) =>
                                a().createElement(
                                    'div',
                                    { key: t, className: 'Rewards_reward_f2' },
                                    a().createElement(J.I, {
                                        item: Q.ob.RewardTooltip,
                                        info: e.name,
                                        parentScreen: Q.RM.ProgressView,
                                        name: e.name,
                                        size: u,
                                        image: (0, q.ry)(e, u),
                                        value: e.value,
                                        valueType: (0, q.p3)(e.name),
                                        tooltipArgs: (0, q.pI)({ tooltipId: e.tooltipId }, Number(e.tooltipContentId), {
                                            targetId: R.views.frontline.lobby.ProgressView('resId'),
                                        }),
                                    }),
                                ),
                            ),
                        );
                    }),
                    ue = (0, n.memo)(ee),
                    te = 'Content_base_28',
                    ne = 'Content_base__infoContainer_5d',
                    ae = 'Content_infoLabel_f6',
                    re = (0, n.memo)(
                        ({ frontlineState: e, isMaxLevel: u, level: t, currentPoints: r, neededPoints: i }) => {
                            const l = t + 1,
                                c = e === o.c.Finished,
                                _ = e === o.c.Active || e === o.c.Frozen,
                                m = (0, n.useMemo)(() => (0, z.uF)(R.strings.fl_progress.rewardFor(), { lvl: l }), [l]);
                            return e === o.c.Announce
                                ? a().createElement(
                                      'div',
                                      { className: s()(te, ne) },
                                      a().createElement(
                                          'div',
                                          { className: ae },
                                          R.strings.fl_progress.info.gameplayDescription(),
                                      ),
                                      a().createElement(
                                          'div',
                                          { className: ae },
                                          R.strings.fl_progress.info.rewardsDescription(),
                                      ),
                                  )
                                : u
                                  ? a().createElement(
                                        'div',
                                        { className: s()(te, ne) },
                                        a().createElement(
                                            'div',
                                            { className: ae },
                                            R.strings.fl_progress.info.maxLevelReached(),
                                        ),
                                    )
                                  : a().createElement(
                                        'div',
                                        { className: s()(te, c && 'Content_base__finished_16') },
                                        a().createElement(
                                            'div',
                                            { className: 'Content_progressBar_4d' },
                                            a().createElement(
                                                'div',
                                                { className: 'Content_levels_aa' },
                                                a().createElement('div', { className: 'Content_levelCurrent_43' }, t),
                                                a().createElement(
                                                    'div',
                                                    { className: 'Content_exp_a4' },
                                                    a().createElement(
                                                        'div',
                                                        { className: 'Content_currentPoints_36' },
                                                        r + ' ',
                                                    ),
                                                    a().createElement(
                                                        'div',
                                                        { className: 'Content_needPoints_91' },
                                                        `/ ${i}`,
                                                    ),
                                                    a().createElement('div', { className: 'Content_levelIcon_86' }),
                                                ),
                                                a().createElement('div', { className: 'Content_levelNext_d3' }, l),
                                            ),
                                            a().createElement(V, { value: r, size: E.Big, maxValue: i, disabled: c }),
                                        ),
                                        _ &&
                                            a().createElement(
                                                a().Fragment,
                                                null,
                                                a().createElement('div', { className: 'Content_rewardText_60' }, m),
                                                a().createElement(ue, null),
                                            ),
                                    );
                        },
                    );
                let se, oe;
                var ie;
                let le, ce;
                (t(7078),
                    t(7739),
                    t(5262),
                    t(4090),
                    t(280),
                    (function (e) {
                        ((e.B0 = 'b0'),
                            (e.B1 = 'b1'),
                            (e.B2 = 'b2'),
                            (e.B3 = 'b3'),
                            (e.B4 = 'b4'),
                            (e.B5 = 'b5'),
                            (e.B6 = 'b6'));
                    })(se || (se = {})),
                    ((ie = oe || (oe = {})).Small = 'small'),
                    (ie.Medium = 'medium'),
                    (ie.Big = 'big'),
                    (function (e) {
                        ((e.Huge = 'huge'), (e.Big = 'big'), (e.Medium = 'medium'), (e.Small = 'small'));
                    })(le || (le = {})),
                    se.B4,
                    se.B5,
                    se.B6,
                    se.B0,
                    se.B1,
                    se.B2,
                    se.B0,
                    oe.Big,
                    le.Huge,
                    oe.Medium,
                    le.Huge,
                    oe.Small,
                    le.Big,
                    se.B1,
                    oe.Big,
                    le.Huge,
                    oe.Medium,
                    le.Huge,
                    oe.Small,
                    le.Big,
                    se.B2,
                    oe.Big,
                    le.Huge,
                    oe.Medium,
                    le.Huge,
                    oe.Small,
                    le.Big,
                    se.B3,
                    oe.Big,
                    le.Huge,
                    oe.Medium,
                    le.Big,
                    oe.Small,
                    le.Big,
                    se.B4,
                    oe.Big,
                    le.Big,
                    oe.Medium,
                    le.Big,
                    oe.Small,
                    le.Medium,
                    se.B5,
                    oe.Big,
                    le.Medium,
                    oe.Medium,
                    le.Medium,
                    oe.Small,
                    le.Small,
                    se.B6,
                    oe.Big,
                    le.Medium,
                    oe.Medium,
                    le.Small,
                    oe.Small,
                    le.Small,
                    (function (e) {
                        ((e.Icon1 = 'bg0'),
                            (e.Icon2 = 'bg1'),
                            (e.Icon3 = 'bg2'),
                            (e.Icon4 = 'bg3'),
                            (e.Icon5 = 'bg4'),
                            (e.Icon6 = 'bg5'));
                    })(ce || (ce = {})),
                    le.Huge,
                    le.Big,
                    le.Medium,
                    le.Small);
                const _e = {
                    [ce.Icon1]: [0],
                    [ce.Icon2]: [1, 2, 3, 4],
                    [ce.Icon3]: [5, 6, 7, 8, 9],
                    [ce.Icon4]: [10, 11, 12, 13, 14],
                    [ce.Icon5]: [15, 16, 17, 18, 19],
                    [ce.Icon6]: [20],
                };
                (se.B0, se.B1, se.B2);
                var me = t(8154);
                const de = {
                    base: 'Emblem_base_40',
                    icon: 'Emblem_icon_01',
                    glow: 'Emblem_glow_8f',
                    'glow-rotation': 'Emblem_glow-rotation_0f',
                    level: 'Emblem_level_c8',
                    icon__bg0: 'Emblem_icon__bg0_0b',
                    icon__bg1: 'Emblem_icon__bg1_ac',
                    icon__bg2: 'Emblem_icon__bg2_92',
                    icon__bg3: 'Emblem_icon__bg3_6b',
                    icon__bg4: 'Emblem_icon__bg4_04',
                    icon__bg5: 'Emblem_icon__bg5_49',
                };
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                const Ae = (0, n.memo)(({ level: e, isGlowVisible: u }) => {
                    const t = (0, n.useMemo)(
                            () => ({
                                header: R.strings.fl_progress.emblem.tooltip.header(),
                                body: (0, z.uF)(R.strings.fl_progress.emblem.tooltip.body(), { level: e }),
                            }),
                            [e],
                        ),
                        r = (0, n.useMemo)(
                            () => ((e) => Object.keys(_e).find((u) => _e[u].includes(e)) || ce.Icon1)(e),
                            [e],
                        ),
                        o = (0, n.useMemo)(
                            () => ({
                                backgroundImage: `url(${R.images.gui.maps.icons.epicBattles.metaLvls.c_320x320.$dyn(r)})`,
                            }),
                            [r],
                        );
                    return a().createElement(
                        'div',
                        { className: de.base },
                        a().createElement(
                            me.l,
                            Ee({}, t, { item: Q.ob.EpicWidgetTooltip, parentScreen: Q.RM.ProgressView }),
                            a().createElement(
                                'div',
                                null,
                                u && a().createElement('div', { className: de.glow }),
                                a().createElement(
                                    'div',
                                    { className: s()(de.icon, de[`icon__${r}`]), style: o },
                                    e > 0 && a().createElement('div', { className: de.level }, e),
                                ),
                            ),
                        ),
                    );
                });
                var Fe = t(3457);
                const pe = 'ShopBanner_line_0c',
                    ge = (0, n.memo)(() => {
                        const e = m().controls;
                        return a().createElement(
                            'div',
                            { className: 'ShopBanner_base_1c' },
                            a().createElement('div', { className: s()(pe, 'ShopBanner_line__top_0d') }),
                            a().createElement('div', { className: s()(pe, 'ShopBanner_line__bottom_6f') }),
                            a().createElement(
                                'div',
                                { className: 'ShopBanner_desc_5c' },
                                R.strings.fl_progress.banner.text(),
                            ),
                            a().createElement(
                                Fe.u5,
                                { onClick: e.shopClick, type: Fe.L$.main, mixClass: 'ShopBanner_button_9a' },
                                a().createElement(
                                    'div',
                                    { className: 'ShopBanner_label_0c' },
                                    ' ',
                                    R.strings.fl_progress.banner.button(),
                                ),
                            ),
                        );
                    });
                var De = t(7044),
                    Be = t(3415),
                    be = t(8045);
                let he, Ce, fe;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(he || (he = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(Ce || (Ce = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(fe || (fe = {})));
                const ve = { [fe.NBSP]: he.NoBreakSymbol, [fe.ZWNBSP]: he.NoBreakSymbol, [fe.NEW_LINE]: he.LineBreak },
                    we = {
                        blackReal: 'colors_blackReal_fc',
                        whiteReal: 'colors_whiteReal_31',
                        white: 'colors_white_45',
                        whiteOrange: 'colors_whiteOrange_81',
                        whiteSpanish: 'colors_whiteSpanish_c3',
                        par: 'colors_par_5b',
                        parSecondary: 'colors_parSecondary_fd',
                        parTertiary: 'colors_parTertiary_97',
                        red: 'colors_red_79',
                        redDark: 'colors_redDark_73',
                        yellow: 'colors_yellow_76',
                        orange: 'colors_orange_cd',
                        cream: 'colors_cream_0f',
                        brown: 'colors_brown_82',
                        greenBright: 'colors_greenBright_68',
                        green: 'colors_green_fa',
                        greenDark: 'colors_greenDark_a9',
                        blueBooster: 'colors_blueBooster_26',
                        blueTeamkiller: 'colors_blueTeamkiller_86',
                        cred: 'colors_cred_35',
                        gold: 'colors_gold_c3',
                        bond: 'colors_bond_ce',
                        prom: 'colors_prom_83',
                    },
                    Se = (e) => ({ color: `#${e}` }),
                    Te = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? we[n]
                                ? a().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: we[n] },
                                      e,
                                  )
                                : a().createElement('span', { key: t, 'data-block-type': u.blockType, style: Se(n) }, e)
                            : a().createElement('span', { key: t, 'data-block-type': u.blockType }, e);
                    },
                    ye = {
                        [he.Word]: Te,
                        [he.NoBreakSymbol]: Te,
                        [he.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            a().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => a().createElement(a().Fragment, { key: t }, e)),
                            ),
                        [he.LineBreak]: ({ key: e }) =>
                            a().createElement('span', {
                                key: e,
                                'data-block-type': he.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [he.NewLine]: ({ elementList: e, key: u }) =>
                            a().createElement(
                                'span',
                                { key: u, 'data-block-type': he.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [he.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            a().createElement(
                                'span',
                                {
                                    key: u,
                                    'data-block-type': he.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    xe = (e, u, t) => {
                        const n = [];
                        return (
                            e.childList.forEach((a, r) => {
                                const s = `${t}_${r}`;
                                if (((e) => void 0 !== e.childList)(a)) {
                                    const e = a,
                                        u = e.blockType,
                                        t = xe(e, ye[u], s);
                                    n.push(...t);
                                } else n.push(u({ elementList: [a], textBlock: e, key: s }));
                            }),
                            n
                        );
                    },
                    ke = (e, u, t, n) => {
                        let a = u.exec(e),
                            r = 0;
                        for (; a; ) (r !== a.index && t(e.slice(r, a.index)), n(a), (r = u.lastIndex), (a = u.exec(e)));
                        r !== e.length && t(e.slice(r));
                    },
                    Re = (e) => {
                        const u = /[\s\u002d]/g;
                        let t = u.exec(e);
                        if (!t) return [e];
                        const n = [];
                        let a = 0;
                        for (; t; ) (n.push(e.slice(a, u.lastIndex)), (a = u.lastIndex), (t = u.exec(e)));
                        return (a !== e.length && n.push(e.slice(a)), n);
                    },
                    Me = (e, u = '') => {
                        const t = [];
                        return (
                            ke(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    t.push({ blockType: he.Word, colorTag: u, childList: Re(e) });
                                },
                                (e) => {
                                    const n = e[0],
                                        a = ve[n.charAt(0)];
                                    a === he.LineBreak
                                        ? t.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: he.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: he.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(n),
                                          )
                                        : t.push({ blockType: a, colorTag: u, childList: [n] });
                                },
                            ),
                            t
                        );
                    },
                    Ne = (e, u, t = '') => {
                        const n = [];
                        return (
                            ke(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    n.push(...Me(e, t));
                                },
                                (e) => {
                                    const a = e[1],
                                        r = void 0 === u[a] ? e[0] : u[a];
                                    'string' == typeof r || 'number' == typeof r
                                        ? n.push(...Me(String(r), t))
                                        : n.push({ blockType: he.Binding, colorTag: t, childList: [r] });
                                },
                            ),
                            n
                        );
                    },
                    Le = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === he.NoBreakWrapper) (e.childList.push(n), t.push(e));
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && t.push(e),
                                t.push({ blockType: he.NoBreakWrapper, colorTag: '', childList: [u, n] }));
                        }
                        return (u.childList.length > 0 && t.push(u), t);
                    },
                    Oe = (e, u = {}) => {
                        if (!e) return [];
                        const t = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === he.NoBreakSymbol
                                        ? ((t = !0), u.push(...Le(u.pop(), e)))
                                        : (t ? u.push(...Le(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u) => {
                                const t = [];
                                return (
                                    ke(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            t.push(...Ne(e, u));
                                        },
                                        (e) => {
                                            t.push(...Ne(e[2], u, e[1]));
                                        },
                                    ),
                                    t
                                );
                            })((0, z.Eg)((0, z.z4)(e)), u),
                        );
                        return ((e) => {
                            const u = [];
                            return (
                                e.forEach((e, t) => {
                                    u.push(
                                        ...((e, u) => {
                                            const t = [],
                                                n = e.blockType,
                                                a = ye[n],
                                                r = xe(e, a, u);
                                            return (
                                                n === he.NoBreakWrapper
                                                    ? t.push(a({ elementList: r, textBlock: e, key: `${u}` }))
                                                    : t.push(...r),
                                                t
                                            );
                                        })(e, t),
                                    );
                                }),
                                u
                            );
                        })(t);
                    },
                    Pe = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    Ie = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    He = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = Ie(e, u),
                            a = e.textContent.length,
                            r = e.offsetWidth / a,
                            s = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / r);
                            return n >= t ? [!0, t + s] : [!1, n];
                        }
                        const o = Math.max(t + s, 0);
                        return a < o ? [!1, 0] : [!0, o];
                    },
                    Ue = (e, u, t, n, r, s) => {
                        let o = -1,
                            i = null;
                        for (let l = t; l >= 0; l--) {
                            const t = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === he.LineBreak || c === he.NewLine || c === he.Binding) continue;
                            const _ = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = He(t, n, r),
                                    c = e[0],
                                    m = e[1];
                                if (!c) {
                                    m > 0 && (r -= m);
                                    continue;
                                }
                                const d = _.slice(0, _.length - m) + s,
                                    E = u[l];
                                ((i = a().cloneElement(E, E.props, d)), (o = l));
                                break;
                            }
                            {
                                const e = t.children,
                                    c = u[l],
                                    m = c.props.children,
                                    d = Ue(e, m, e.length - 1, n, r, s),
                                    E = d[0],
                                    A = d[1];
                                if (!(E < 0)) {
                                    const e = m.slice(0, E);
                                    ((i = a().cloneElement(c, c.props, e, A)), (o = l));
                                    break;
                                }
                                r -= _.length;
                            }
                        }
                        return [o, i];
                    },
                    $e = a().memo(
                        ({
                            text: e,
                            classMix: u,
                            onSizeChanged: t,
                            binding: r,
                            isTooltipEnable: o = !1,
                            isTruncationAvailable: i = !1,
                            targetId: l,
                            justifyContent: c = Ce.FlexStart,
                            alignContent: _ = Ce.FlexStart,
                            truncateIdentify: m = '...',
                        }) => {
                            const d = (0, n.useRef)(null),
                                E = (0, n.useRef)({ height: 0, width: 0 }),
                                A = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                F = A[0],
                                p = A[1],
                                g = (0, n.useMemo)(() => Oe(e, r), [r, e]),
                                D = (0, n.useMemo)(() => {
                                    if (o && F.isTruncated)
                                        return {
                                            args: { text: e, stringifyKwargs: r ? JSON.stringify(r) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [r, o, l, e, F.isTruncated]),
                                B = (0, n.useCallback)(
                                    (e) => {
                                        ((E.current.width = e.contentRect.width),
                                            (E.current.height = e.contentRect.height));
                                        const u = ((e, u, t, n = '...') => {
                                                const a = [...u],
                                                    r = e.current;
                                                if (!r) return [a, !1];
                                                const s = t.height,
                                                    o = t.width,
                                                    i = r.lastElementChild;
                                                if (!Pe(i, s) && Ie(i, o) <= 0) return [a, !1];
                                                const l = r.children,
                                                    c = ((e, u) => {
                                                        let t = 0,
                                                            n = e.length - 1;
                                                        for (; n - t >= 0; ) {
                                                            const a = t + Math.ceil(0.5 * (n - t));
                                                            Pe(e[a], u) ? (n = a - 1) : (t = a + 1);
                                                        }
                                                        return t - 1;
                                                    })(l, s);
                                                if (c < 0) return [a, !1];
                                                const _ = Ue(l, a, c, o, n.length, n),
                                                    m = _[0],
                                                    d = _[1];
                                                return (d && (a.splice(m, 1, d), a.splice(m + 1)), [a, !0]);
                                            })(d, g, E.current, m),
                                            n = u[0],
                                            a = u[1];
                                        (p({ elementList: n, isTruncated: a, isTruncateFinished: !0 }), t && t(a));
                                    },
                                    [t, m, g],
                                ),
                                b = (0, n.useMemo)(() => ({ justifyContent: c, alignContent: _ }), [_, c]);
                            return (
                                ((e, u, t = !0) => {
                                    const a = (0, n.useCallback)(
                                        (e) => {
                                            const t = e[0];
                                            u && u(t);
                                        },
                                        [u],
                                    );
                                    (0, n.useEffect)(() => {
                                        if (!e.current || !t) return;
                                        const u = new be.Z((e) => a(e));
                                        return (
                                            u.observe(e.current),
                                            () => {
                                                u.disconnect();
                                            }
                                        );
                                    }, [a, t, e]);
                                })(d, B, i),
                                a().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            'ExtendedText_base_71',
                                            u,
                                            'ExtendedText_base__zeroPadding_25',
                                            i && 'ExtendedText_base__isTruncationAvailable_5b',
                                        ),
                                        style: b,
                                    },
                                    a().createElement('div', { className: 'ExtendedText_unTruncated_b8', ref: d }, g),
                                    a().createElement(
                                        Be.l,
                                        { tooltipArgs: D },
                                        a().createElement(
                                            'div',
                                            {
                                                className: s()(
                                                    'ExtendedText_truncated_97',
                                                    !F.isTruncateFinished && i && 'ExtendedText_truncated__hide_31',
                                                ),
                                                style: b,
                                            },
                                            F.isTruncateFinished && i ? F.elementList : g,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    je = (0, n.memo)(({ duration: e }) => {
                        const u =
                            e >= 0
                                ? (t = (0, De.f8)(e)).days > 0
                                    ? (0, z.WU)(R.strings.common.duration.days(), { days: t.days })
                                    : t.hours > 0
                                      ? (0, z.WU)(R.strings.common.duration.hours(), { hours: t.hours })
                                      : t.minutes > 0
                                        ? (0, z.WU)(R.strings.common.duration.minutes(), { minutes: t.minutes })
                                        : (0, z.WU)(R.strings.common.duration.seconds(), { seconds: t.seconds })
                                : R.strings.common.duration.unlimited();
                        var t;
                        return a().createElement('span', null, u);
                    });
                var Ge = t(728);
                const We = (0, n.memo)(({ isDateFormat: e, pendingDate: u, countdownSeconds: t }) =>
                        e
                            ? a().createElement(a().Fragment, null, (0, De.e1)(u, Ge.U.FULL_DATE, !0))
                            : a().createElement(je, { duration: t }),
                    ),
                    Ye = R.strings.fl_progress.subTitle,
                    Ve = {
                        [o.c.Announce]: Ye.announce,
                        [o.c.Active]: Ye.active,
                        [o.c.Frozen]: Ye.active,
                        [o.c.Finished]: Ye.finished,
                    },
                    ze = (0, n.memo)(({ pendingDate: e, countdownSeconds: u, frontlineState: t }) => {
                        const r = (0, n.useMemo)(() => {
                            if (t === o.c.Finished) return { text: Ye.finished() };
                            {
                                const n = u > De.IZ,
                                    r = Ve[t];
                                return {
                                    text: n ? r.at() : r.countdown(),
                                    binding: {
                                        left: a().createElement(We, {
                                            countdownSeconds: u,
                                            pendingDate: e,
                                            isDateFormat: n,
                                        }),
                                    },
                                };
                            }
                        }, [e, u, t]);
                        return a().createElement('div', { className: 'SubTitle_base_48' }, a().createElement($e, r));
                    }),
                    Xe = R.strings.fl_progress.title,
                    qe = (0, i.Pi)(() => {
                        const e = m().model.root.get(),
                            u = e.level,
                            t = e.isMaxLevel,
                            n = e.pendingDate,
                            r = e.countdownSeconds,
                            i = e.frontlineState,
                            c = e.neededPoints,
                            _ = e.currentPoints,
                            d = e.isShopBannerVisible,
                            E = i === o.c.Active || i === o.c.Frozen,
                            A = t && E;
                        return a().createElement(
                            'div',
                            { className: 'ProgressViewApp_base_3e' },
                            a().createElement(
                                l.V,
                                { text: t ? Xe.complete() : Xe.inProgress(), classMix: 'ProgressViewApp_pageTitle_5f' },
                                a().createElement(ze, {
                                    pendingDate: n,
                                    countdownSeconds: r,
                                    frontlineState: i,
                                    classMix: 'ProgressViewApp_subTitle_5e',
                                }),
                            ),
                            a().createElement(
                                'div',
                                {
                                    className: s()(
                                        'ProgressViewApp_content_73',
                                        d && 'ProgressViewApp_content__withBanner_09',
                                    ),
                                },
                                a().createElement(Ae, { level: _ > 0 || E ? u : 0, isGlowVisible: A }),
                                a().createElement(re, {
                                    frontlineState: i,
                                    isMaxLevel: t,
                                    level: u,
                                    neededPoints: c,
                                    currentPoints: _,
                                }),
                            ),
                            d &&
                                a().createElement(
                                    'div',
                                    { className: 'ProgressViewApp_banner_b8' },
                                    a().createElement(ge, null),
                                ),
                        );
                    }),
                    Ze = R.views.frontline.lobby.ProgressView('resId'),
                    Ke = () => a().createElement(_, { options: { rootId: Ze } }, a().createElement(qe, null));
            },
            5660: (e, u, t) => {
                'use strict';
                t.d(u, { o: () => I, M: () => H });
                var n = t(6179),
                    a = t.n(n),
                    r = t(5983),
                    s = t(6483),
                    o = t.n(s),
                    i = t(4090),
                    l = t(2056),
                    c = t(7727);
                const _ = {
                    base: 'FlatButton_base_36',
                    base__small: 'FlatButton_base__small_ec',
                    base__big: 'FlatButton_base__big_69',
                    base__disabled: 'FlatButton_base__disabled_1e',
                    base__hover: 'FlatButton_base__hover_41',
                    base__click: 'FlatButton_base__click_ab',
                    base__highlight: 'FlatButton_base__highlight_0b',
                    base__yellow: 'FlatButton_base__yellow_3a',
                    highlight: 'FlatButton_highlight_b0',
                    glowInner: 'FlatButton_glowInner_cb',
                    rotating: 'FlatButton_rotating_25',
                    glowInner__duplicate: 'FlatButton_glowInner__duplicate_f7',
                    glow: 'FlatButton_glow_12',
                    content: 'FlatButton_content_3f',
                    icon: 'FlatButton_icon_24',
                    label: 'FlatButton_label_a4',
                    count: 'FlatButton_count_17',
                    counter: 'FlatButton_counter_c3',
                    glowBorder: 'FlatButton_glowBorder_3e',
                    glowBorder__hover: 'FlatButton_glowBorder__hover_a7',
                    tokensCount: 'FlatButton_tokensCount_72',
                    disabledBackground: 'FlatButton_disabledBackground_f9',
                };
                let m;
                !(function (e) {
                    ((e.Small = 'small'), (e.Big = 'big'));
                })(m || (m = {}));
                const d = ({
                    label: e,
                    takeCount: u,
                    icon: t,
                    width: r,
                    height: s,
                    isDisabled: m,
                    isHighlighted: d,
                    isYellow: E,
                    size: A,
                    onClick: F,
                    onMouseUp: p,
                    onMouseEnter: g,
                    onMouseLeave: D,
                    onMouseDown: B,
                    children: b,
                    soundHover: h,
                    soundClick: C,
                    counter: f,
                    tokensCount: v = 0,
                }) => {
                    const w = (0, n.useState)(!1),
                        S = w[0],
                        T = w[1],
                        y = (0, n.useState)(!1),
                        x = y[0],
                        k = y[1],
                        M = (e, u) => {
                            e && u && e(u);
                        },
                        N = o()(
                            _.base,
                            A && _[`base__${A}`],
                            E && _.base__yellow,
                            m && _.base__disabled,
                            S && !m && _.base__hover,
                            x && _.base__click,
                            d && !m && _.base__highlight,
                        ),
                        L = o()(_.glowBorder, _.glowBorder__hover),
                        O = o()(_.glowInner, _.glowInner__duplicate),
                        P = (0, n.useMemo)(() => {
                            const e = {};
                            return (r && (e.width = `${r}rem`), s && (e.height = `${s}rem`), e);
                        }, [s, r]),
                        I = (0, n.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                    return a().createElement(
                        'div',
                        {
                            className: N,
                            style: P,
                            onMouseEnter:
                                ((H = g),
                                (e) => {
                                    m || (M(H, e), T(!0), (0, c.G)(h));
                                }),
                            onMouseLeave: ((e) => (u) => {
                                m || (M(e, u), T(!1), k(!1));
                            })(D),
                            onMouseDown: ((e) => (u) => {
                                m || (M(e, u), 0 === u.button && k(!0));
                            })(B),
                            onMouseUp: ((e) => (u) => {
                                m || (M(e, u), 0 === u.button && k(!1));
                            })(p),
                            onClick: ((e) => (u) => {
                                m || ((0, c.G)(C), M(e, u));
                            })(F),
                        },
                        d &&
                            !m &&
                            a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(
                                    'div',
                                    { className: _.glow },
                                    a().createElement('div', { className: _.glowInner }),
                                    a().createElement('div', { className: O }),
                                ),
                                a().createElement('div', { className: _.highlight }),
                                a().createElement('div', { className: _.glowBorder }),
                                a().createElement('div', { className: L }),
                            ),
                        a().createElement(
                            'div',
                            { className: _.content },
                            m && a().createElement('div', { className: _.disabledBackground }),
                            b ||
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    t
                                        ? a().createElement('div', { className: _.icon, style: I })
                                        : a().createElement('div', { className: _.count }, u),
                                    a().createElement('div', { className: _.label }, e),
                                ),
                            Boolean(f) &&
                                !m &&
                                a().createElement(
                                    'div',
                                    { className: _.counter },
                                    a().createElement(i.A, { value: f }),
                                ),
                            v > 0 &&
                                a().createElement(
                                    l.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassCoinTooltipView('resId'),
                                    },
                                    a().createElement('div', { className: _.tokensCount }, v),
                                ),
                        ),
                    );
                    var H;
                };
                d.defaultProps = {
                    isDisabled: !1,
                    isHighlighted: !1,
                    counter: !1,
                    soundHover: 'highlight',
                    soundClick: 'play',
                };
                var E = t(3403),
                    A = t(8154),
                    F = t(3854);
                const p = (0, t(3215).q)()(
                        ({ observableModel: e }) => ({ root: e.object(), rewards: e.array('rewards') }),
                        ({ externalModel: e }) => ({ claimRewards: e.createCallbackNoArgs('onClaimRewards') }),
                    ),
                    g = p[0],
                    D = p[1];
                var B = t(9480),
                    b = t(2862),
                    h = t(5415),
                    C = t(1558);
                let f;
                !(function (e) {
                    ((e.Static = 'static'), (e.Claimable = 'claimable'));
                })(f || (f = {}));
                var v = t(5989);
                const w = (0, n.memo)(
                        ({
                            claimState: e,
                            name: u,
                            icon: t,
                            rewardSize: n,
                            value: s,
                            tooltipId: i,
                            tooltipContentId: l,
                            isDisable: c,
                            isBattlePassRewardDisable: _,
                            classMix: m,
                        }) => {
                            const d = e === f.Claimable;
                            return a().createElement(
                                'div',
                                {
                                    className: o()(
                                        'FrontlineReward_base_e2',
                                        c && 'FrontlineReward_base__disable_dc',
                                        !c && _ && 'FrontlineReward_base__disableBattlePassReward_5a',
                                        m,
                                    ),
                                },
                                d &&
                                    a().createElement(
                                        'div',
                                        { className: 'FrontlineReward_animWrapper_23' },
                                        a().createElement('div', { className: 'FrontlineReward_glow_0d' }),
                                        a().createElement('div', { className: 'FrontlineReward_glowReverse_42' }),
                                    ),
                                a().createElement(v.I, {
                                    item: r.ob.RewardTooltip,
                                    info: u,
                                    parentScreen: r.RM.RewardsView,
                                    name: u,
                                    image: (0, C.ry)({ name: u, icon: t }, b.h2.Big),
                                    size: n,
                                    value: s.toString(),
                                    valueType: (0, C.p3)(u),
                                    tooltipArgs: (0, C.pI)({ tooltipId: i }, Number(l), {
                                        ignoreShowDelay: !0,
                                        targetId: R.views.frontline.lobby.RewardsView('resId'),
                                    }),
                                }),
                            );
                        },
                    ),
                    S = {
                        base: 'RewardsCol_base_74',
                        bg: 'RewardsCol_bg_12',
                        highlight: 'RewardsCol_highlight_2b',
                        highlight__white: 'RewardsCol_highlight__white_a8',
                        highlight__gold: 'RewardsCol_highlight__gold_c5',
                        levels: 'RewardsCol_levels_7a',
                        levels__disable: 'RewardsCol_levels__disable_d4',
                        reward: 'RewardsCol_reward_40',
                    };
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                var y;
                !(function (e) {
                    ((e.None = 'none'), (e.White = 'white'), (e.Gold = 'gold'));
                })(y || (y = {}));
                const x = ({ levelsRange: e, frontlineLevel: u, isBattlePassComplete: t, isLastCol: n }) => {
                        const r = (0, h.GS)(),
                            s = r.mediaSize,
                            i = r.remScreenHeight,
                            l = s === h.cJ.ExtraSmall || i < 844 ? b.h2.Small : b.h2.Big,
                            c = e.lvlStart,
                            _ = e.lvlEnd,
                            m = e.rewards,
                            d = ((e, u, t, n) => {
                                switch (!0) {
                                    case e <= t && t <= u:
                                        return y.Gold;
                                    case n:
                                        return y.White;
                                    default:
                                        return y.None;
                                }
                            })(c, _, u, n),
                            E = u < c;
                        return a().createElement(
                            'div',
                            { className: S.base },
                            a().createElement('div', { className: S.bg }),
                            d && a().createElement('div', { className: o()(S.highlight, S[`highlight__${d}`]) }),
                            a().createElement(
                                'span',
                                { className: o()(S.levels, E && S.levels__disable) },
                                c !== _ ? `${c}-${_}` : c,
                            ),
                            m.map(({ value: e, id: u }) =>
                                a().createElement(
                                    a().Fragment,
                                    { key: u },
                                    a().createElement(
                                        w,
                                        T({}, e, {
                                            rewardSize: l,
                                            classMix: S.reward,
                                            isDisable: E,
                                            isBattlePassRewardDisable: t && e.name === b.E4.BattlePassPoints,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    },
                    k = (0, E.Pi)(() => {
                        const e = D().model,
                            u = e.root.get(),
                            t = u.frontlineLevel,
                            n = u.isBattlePassComplete,
                            r = e.rewards.get();
                        return a().createElement(
                            'div',
                            { className: 'RewardTable_base_cf' },
                            B.UI(r, (e, u) =>
                                a().createElement(
                                    a().Fragment,
                                    { key: `${e.lvlStart}-${e.lvlEnd}` },
                                    a().createElement(x, {
                                        levelsRange: e,
                                        frontlineLevel: t,
                                        isBattlePassComplete: n,
                                        isLastCol: u === r.length - 1,
                                    }),
                                ),
                            ),
                        );
                    });
                var M = t(4959);
                const N = 'SubTitle_base_8d',
                    L = R.strings.fl_rewards.subtitle,
                    O = (0, n.memo)(({ level: e, rewardsCount: u, frontlineState: t }) =>
                        t !== M.c.Finished
                            ? a().createElement('div', { className: N }, L.active())
                            : a().createElement(
                                  'div',
                                  { className: N },
                                  L.finished.title(),
                                  e > 1 &&
                                      (u > 0
                                          ? L.finished.rewards()
                                          : a().createElement(
                                                'div',
                                                { className: 'SubTitle_noRewards_f1' },
                                                a().createElement('div', { className: 'SubTitle_icon_0f' }),
                                                ' ',
                                                L.finished.noRewards(),
                                            )),
                              ),
                    ),
                    P = (0, E.Pi)(() => {
                        const e = D(),
                            u = e.model,
                            t = e.controls,
                            s = u.root.get(),
                            o = s.selectableRewardsCount,
                            i = s.frontlineLevel,
                            l = s.frontlineState,
                            c = (0, n.useCallback)(() => {
                                t.claimRewards();
                            }, [t]);
                        return a().createElement(
                            'div',
                            { className: 'RewardsViewApp_base_1c' },
                            a().createElement(
                                F.V,
                                { text: R.strings.fl_rewards.title(), classMix: 'RewardsViewApp_pageTitle_61' },
                                a().createElement(O, { level: i, rewardsCount: o, frontlineState: l }),
                            ),
                            a().createElement(
                                'div',
                                { className: 'RewardsViewApp_table_32' },
                                a().createElement(k, null),
                            ),
                            a().createElement(
                                'div',
                                { className: 'RewardsViewApp_claimButton_3d' },
                                o > 0 &&
                                    a().createElement(
                                        A.l,
                                        {
                                            targetId: R.views.frontline.lobby.RewardsView('resId'),
                                            item: r.ob.RewardsButtonTooltip,
                                            parentScreen: r.RM.RewardsView,
                                            body: R.strings.fl_rewards.chooseRewards.tooltip(),
                                        },
                                        a().createElement(d, {
                                            label: R.strings.fl_rewards.chooseRewards.label(),
                                            counter: o,
                                            icon: R.images.frontline.gui.maps.icons.rewards.claim_all(),
                                            isHighlighted: !0,
                                            size: m.Big,
                                            onClick: c,
                                        }),
                                    ),
                            ),
                        );
                    }),
                    I = R.views.frontline.lobby.RewardsView('resId'),
                    H = () => a().createElement(g, { options: { rootId: I } }, a().createElement(P, null));
            },
            3860: (e, u, t) => {
                'use strict';
                t.d(u, { R: () => Ae, J: () => Fe });
                var n = t(4029),
                    a = t(6179),
                    r = t.n(a),
                    s = t(6483),
                    o = t.n(s),
                    i = t(9887),
                    l = t.n(i),
                    c = t(5415);
                const _ = ['xl', 'lg', 'md', 'sm', 'xs'],
                    m = (e) => e.includes('_') && ((e) => _.includes(e))(e.split('_').at(-1)),
                    d = [c.cJ.ExtraLarge, c.cJ.Large, c.cJ.Medium, c.cJ.Small, c.cJ.ExtraSmall],
                    E = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (m(n)) {
                                const a = n.split('_').slice(0, -1).join('_');
                                if (a in t) return t;
                                const r = d.indexOf(u),
                                    s = (-1 !== r ? _.slice(r) : [])
                                        .map((e) => a + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    o = s ? e[s] : void 0;
                                return ((t[a] = void 0 !== o ? o : e[a]), t);
                            }
                            const a = e[n];
                            return (
                                void 0 === a ||
                                    ((e, u) => _.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = a),
                                t
                            );
                        }, {}),
                    A = (e, u = E) => {
                        const t = (
                            (e, u = E) =>
                            (t) => {
                                const n = (0, c.GS)().mediaSize,
                                    s = (0, a.useMemo)(() => u(t, n), [t, n]);
                                return r().createElement(e, s);
                            }
                        )(e, u);
                        return r().memo((u) =>
                            Object.keys(u).some((e) => m(e) && void 0 !== u[e])
                                ? r().createElement(t, u)
                                : r().createElement(e, u),
                        );
                    },
                    F = {
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
                    p = [
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
                function g() {
                    return (
                        (g =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        g.apply(this, arguments)
                    );
                }
                Object.keys(l());
                const D = {
                        XL: { mt: F.mt__XL, mr: F.mr__XL, mb: F.mb__XL, ml: F.ml__XL },
                        LG: { mt: F.mt__LG, mr: F.mr__LG, mb: F.mb__LG, ml: F.ml__LG },
                        MDp: { mt: F.mt__MDp, mr: F.mr__MDp, mb: F.mb__MDp, ml: F.ml__MDp },
                        MD: { mt: F.mt__MD, mr: F.mr__MD, mb: F.mb__MD, ml: F.ml__MD },
                        SMp: { mt: F.mt__SMp, mr: F.mr__SMp, mb: F.mb__SMp, ml: F.ml__SMp },
                        SM: { mt: F.mt__SM, mr: F.mr__SM, mb: F.mb__SM, ml: F.ml__SM },
                        XS: { mt: F.mt__XS, mr: F.mr__XS, mb: F.mb__XS, ml: F.ml__XS },
                    },
                    B = (Object.keys(D), ['mt', 'mr', 'mb', 'ml']),
                    b = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    h = A((e) => {
                        let u = e.className,
                            t = e.width,
                            n = e.height,
                            s = e.m,
                            i = e.mt,
                            l = void 0 === i ? s : i,
                            c = e.mr,
                            _ = void 0 === c ? s : c,
                            m = e.mb,
                            d = void 0 === m ? s : m,
                            E = e.ml,
                            A = void 0 === E ? s : E,
                            h = e.column,
                            C = e.row,
                            f = e.flexDirection,
                            v = void 0 === f ? (h ? 'column' : C && 'row') || void 0 : f,
                            w = e.flexStart,
                            S = e.center,
                            T = e.flexEnd,
                            y = e.spaceBetween,
                            x = e.spaceAround,
                            k = e.justifyContent,
                            R =
                                void 0 === k
                                    ? (w ? 'flex-start' : S && 'center') ||
                                      (T && 'flex-end') ||
                                      (y && 'space-between') ||
                                      (x && 'space-around') ||
                                      void 0
                                    : k,
                            M = e.alignItems,
                            N = void 0 === M ? (w ? 'flex-start' : S && 'center') || (T && 'flex-end') || void 0 : M,
                            L = e.alignSelf,
                            O = e.wrap,
                            P = e.flexWrap,
                            I = void 0 === P ? (O ? 'wrap' : void 0) : P,
                            H = e.grow,
                            U = e.shrink,
                            $ = e.flex,
                            j = void 0 === $ ? (H || U ? `${H ? 1 : 0} ${U ? 1 : 0} auto` : void 0) : $,
                            G = e.style,
                            W = e.children,
                            Y = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, p);
                        const V = (0, a.useMemo)(() => {
                                const e = { mt: l, mr: _, mb: d, ml: A },
                                    u = ((e) =>
                                        B.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(D[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    a = ((e) =>
                                        B.reduce((u, t) => {
                                            const n = e[t];
                                            return ('number' == typeof n && (u[b[t]] = n + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, G, a, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: j,
                                        alignSelf: L,
                                        display: v || N ? 'flex' : void 0,
                                        flexDirection: v,
                                        flexWrap: I,
                                        justifyContent: R,
                                        alignItems: N,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, n, l, _, d, A, G, j, L, v, I, R, N]),
                            z = V.computedStyle,
                            X = V.computedClassNames;
                        return r().createElement('div', g({ className: o()(F.base, ...X, u), style: z }, Y), W);
                    });
                var C = t(280),
                    f = t(3532),
                    v = t.n(f);
                const w = {
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
                    S = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                Object.keys(l());
                const y = Object.keys(v()),
                    x = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    k = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    M = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    N =
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
                            'heading-H56': x,
                            'heading-H36': x,
                            'heading-H28': k,
                            'heading-H24': k,
                            'heading-H24R': k,
                            'heading-H22': k,
                            'heading-H20R': k,
                            'heading-H18': k,
                            'heading-H15': M,
                            'heading-H14': M,
                            'paragraph-P24': k,
                            'paragraph-P18': k,
                            'paragraph-P16': k,
                            'paragraph-P14': M,
                            'paragraph-P12': M,
                            'paragraph-P10': M,
                        }),
                    L =
                        (Object.keys(N),
                        (e) =>
                            e
                                ? ((e) => y.includes(e))(e)
                                    ? { colorClassName: w[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    O = A((e) => {
                        let u = e.text,
                            t = e.variant,
                            n = e.className,
                            s = e.color,
                            i = e.m,
                            l = e.mt,
                            c = void 0 === l ? i : l,
                            _ = e.mr,
                            m = void 0 === _ ? i : _,
                            d = e.mb,
                            E = void 0 === d ? i : d,
                            A = e.ml,
                            F = void 0 === A ? i : A,
                            p = e.style,
                            g = e.format,
                            D = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, S);
                        const B = (0, a.useMemo)(() => {
                                const e = L(s),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, p, n), colorClassName: u };
                            }, [p, s]),
                            b = B.computedStyle,
                            f = B.colorClassName;
                        return r().createElement(
                            h,
                            T(
                                {
                                    className: o()(w.base, t && w[t], f, n),
                                    style: b,
                                    mt: !0 === c ? N[t || 'paragraph-P16'].mt : c,
                                    mr: !0 === m ? N[t || 'paragraph-P16'].mr : m,
                                    mb: !0 === E ? N[t || 'paragraph-P16'].mb : E,
                                    ml: !0 === F ? N[t || 'paragraph-P16'].ml : F,
                                },
                                D,
                            ),
                            void 0 !== g ? r().createElement(C.z, T({}, g, { text: u })) : u,
                        );
                    });
                var P = t(8089),
                    I = t(3138);
                let H;
                !(function (e) {
                    ((e.None = 'none'),
                        (e.Pillbox = 'pillbox'),
                        (e.Mortar = 'mortar'),
                        (e.Flamer = 'flamer'),
                        (e.Airship = 'airship'));
                })(H || (H = {}));
                var U = t(3403);
                let $, j;
                (!(function (e) {
                    ((e[(e.W_1024 = 1024)] = 'W_1024'),
                        (e[(e.W_1280 = 1280)] = 'W_1280'),
                        (e[(e.W_2000 = 2e3)] = 'W_2000'),
                        (e[(e.W_2200 = 2200)] = 'W_2200'),
                        (e[(e.W_2560 = 2560)] = 'W_2560'));
                })($ || ($ = {})),
                    (function (e) {
                        e[(e.H_1200 = 1200)] = 'H_1200';
                    })(j || (j = {})));
                const G = {
                        DEFAULT_VALUES: {
                            mortar: {
                                stepX: -5,
                                stepYinX: -1.5,
                                stepInY: -4,
                                stepOutY: -3,
                                scaleY: 0.005,
                                scaleX: 0.005,
                            },
                            airship: { stepX: -5, stepYinX: -1, stepInY: -1, stepOutY: -1, scaleY: 0.01, scaleX: 0.01 },
                            flamer: { stepX: -5, stepYinX: 1, stepInY: 1, stepOutY: 3, scaleY: 0.01, scaleX: 0.005 },
                            pillbox: { stepX: -5, stepYinX: 0, stepInY: 0, stepOutY: 0, scaleY: 0.01, scaleX: 0.01 },
                        },
                        1600: {
                            mortar: { stepYinX: -2, stepInY: -5, stepOutY: -4 },
                            flamer: { stepInY: 2 },
                            pillbox: { stepInY: -1 },
                        },
                        1920: {
                            mortar: { stepYinX: -3, stepInY: -7, stepOutY: -5, scaleX: 0.01 },
                            airship: { stepYinX: -2, stepInY: -3, stepOutY: -3 },
                            flamer: { stepYinX: 2, stepInY: 4, stepOutY: 4, scaleY: 0.005 },
                            pillbox: { stepInY: 1, stepOutY: 1 },
                        },
                        2560: {
                            mortar: { stepYinX: -4.1, stepInY: -9, stepOutY: -7 },
                            flamer: { stepYinX: 3, stepOutY: 7, scaleY: 0.01, scaleX: 0.01 },
                            pillbox: { stepInY: -1, stepOutY: 0 },
                        },
                    },
                    W = {
                        DEFAULT_VALUES: { mortar: -4, airship: -2, flamer: 2, pillbox: -1 },
                        1920: { pillbox: 0 },
                        2560: { mortar: -10, flamer: 4, pillbox: -2 },
                    },
                    Y = R.strings.fl_supply_objects.page,
                    V = R.strings.fl_supply_objects.page.object,
                    z = R.images.frontline.gui.maps.icons.supplyObjects;
                var X = t(3215),
                    q = t(4598),
                    Z = t(9480);
                const K = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? Z.UI(e, (e) => ('object' == typeof e ? K(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? K(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? K(u) : u]),
                                    )
                            : e,
                    Q = (e) => K(e);
                var J = t(3946);
                const ee = (0, X.q)()(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    supplyObjects: e.array('supplyObjects'),
                                    supplyParams: e.array('supplyParams'),
                                },
                                t = (0, J.Om)(() => Q(u.supplyObjects.get()), { equals: q.jv }),
                                n = (0, J.Om)(() => Q(u.supplyParams.get()), { equals: q.jv });
                            return Object.assign({}, u, { computes: { getSupplyObjects: t, getSupplyParams: n } });
                        },
                        ({ externalModel: e }) => ({
                            onSupplySelected: e.createCallback((e) => ({ supplyId: e }), 'onSupplySelected'),
                            onClose: e.createCallbackNoArgs('onClose'),
                        }),
                    ),
                    ue = ee[0],
                    te = ee[1];
                var ne = t(2056),
                    ae = t(122);
                const re = {
                        base: 'DescriptionBlock_base_20',
                        closeButton: 'DescriptionBlock_closeButton_f9',
                        typeIcon: 'DescriptionBlock_typeIcon_84',
                        title: 'DescriptionBlock_title_44',
                        subTitle: 'DescriptionBlock_subTitle_ed',
                        image: 'DescriptionBlock_image_5d',
                        base__airship: 'DescriptionBlock_base__airship_35',
                        questsInfo: 'DescriptionBlock_questsInfo_98',
                        infoText: 'DescriptionBlock_infoText_ff',
                        infoIcon: 'DescriptionBlock_infoIcon_dc',
                        separator: 'DescriptionBlock_separator_3b',
                        separator__withTopMargin: 'DescriptionBlock_separator__withTopMargin_67',
                        separator__withBigMargin: 'DescriptionBlock_separator__withBigMargin_01',
                        descriptionText: 'DescriptionBlock_descriptionText_d3',
                        paramsBlock: 'DescriptionBlock_paramsBlock_7f',
                        paramsTitle: 'DescriptionBlock_paramsTitle_f8',
                        damageBlock: 'DescriptionBlock_damageBlock_22',
                        damageBlock__small: 'DescriptionBlock_damageBlock__small_33',
                        damageBlockIcon: 'DescriptionBlock_damageBlockIcon_74',
                        damageBlockText: 'DescriptionBlock_damageBlockText_73',
                        damageBlockText__big: 'DescriptionBlock_damageBlockText__big_93',
                        damageBlockText__param: 'DescriptionBlock_damageBlockText__param_c9',
                        damageBlockText__light: 'DescriptionBlock_damageBlockText__light_40',
                    },
                    se = R.strings.menu.tank_params,
                    oe = (0, a.memo)(({ item: e }) => {
                        const u = z.paramsIcon.$dyn(e.name) || R.images.gui.maps.icons.vehParams.big.$dyn(e.name),
                            t = V.vehParams.text.$dyn(e.name) || se.$dyn(e.name);
                        return r().createElement(
                            ne.u,
                            {
                                contentId: R.views.lobby.crew.tooltips.VehicleParamsTooltipView('resId'),
                                args: { paramName: e.name },
                            },
                            r().createElement(
                                'div',
                                { className: 'ParamItem_base_cd' },
                                r().createElement(O, { className: 'ParamItem_paramValue_1c', text: e.value }),
                                r().createElement('div', {
                                    className: 'ParamItem_paramIcon_f5',
                                    style: { backgroundImage: `url(${u})` },
                                }),
                                r().createElement(O, { className: 'ParamItem_paramName_05', text: t }),
                            ),
                        );
                    }),
                    ie = R.strings.fl_supply_objects.page.object.damageZones,
                    le = (0, U.Pi)(({ selectedObj: e, clearSelectedObj: u }) => {
                        const t = te().model,
                            n = (0, a.useState)(e),
                            s = n[0],
                            i = n[1],
                            l = t.computes.getSupplyParams(),
                            _ = z.objects.$dyn(s),
                            m = (0, c.GS)().mediaSize,
                            d = t.root.get(),
                            E = d.supplyTeam,
                            A = d.supplyHullDamageFactor,
                            F = d.supplyTurretDamageFactor,
                            p = z.$dyn(1 === E ? 'attack_icon' : 'protection_icon'),
                            g = 1 !== A || 1 !== F,
                            D = m <= c.cJ.Small;
                        return (
                            (0, a.useEffect)(() => {
                                if (e === H.None) return (0, ae.F)(() => i(e), 2e3);
                                i(e);
                            }, [e]),
                            r().createElement(
                                'div',
                                {
                                    className: o()(re.base, 'airship' === s && re.base__airship),
                                    onClick: (e) => {
                                        e.stopPropagation();
                                    },
                                },
                                r().createElement(
                                    'div',
                                    { className: re.closeButton },
                                    r().createElement(P.A, { caption: '', type: 'close', side: 'right', onClick: u }),
                                ),
                                r().createElement('div', {
                                    className: re.typeIcon,
                                    style: { backgroundImage: `url(${p})` },
                                }),
                                r().createElement(O, { className: re.title, text: V.title.$dyn(s) }),
                                r().createElement(O, { className: re.subTitle, text: V.description.subtitle.$dyn(s) }),
                                r().createElement('div', {
                                    className: re.image,
                                    style: { backgroundImage: `url(${_})` },
                                }),
                                r().createElement(
                                    ne.u,
                                    {
                                        contentId: R.views.frontline.lobby.tooltips.UnlockConditionsTooltip('resId'),
                                        args: { supplyObject: s },
                                    },
                                    r().createElement(
                                        'div',
                                        { className: re.questsInfo },
                                        r().createElement(O, { className: re.infoText, text: V.infoText() }),
                                        r().createElement('div', { className: re.infoIcon }),
                                    ),
                                ),
                                r().createElement('div', { className: re.separator }),
                                r().createElement(O, { className: re.descriptionText, text: V.description.$dyn(s) }),
                                r().createElement('div', { className: o()(re.separator, re.separator__withBigMargin) }),
                                r().createElement(
                                    'div',
                                    { className: re.paramsBlock },
                                    r().createElement(O, { className: re.paramsTitle, text: V.paramsTitle() }),
                                    r().createElement(
                                        'div',
                                        { className: re.tthContent },
                                        l.map((e) => r().createElement(oe, { key: `vehParam_${e.name}`, item: e })),
                                    ),
                                ),
                                g &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', {
                                            className: o()(re.separator, re.separator__withTopMargin),
                                        }),
                                        r().createElement(
                                            ne.u,
                                            {
                                                contentId: R.views.frontline.lobby.tooltips.DamageZonesTooltip('resId'),
                                                args: { supplyObject: s },
                                                isEnabled: D,
                                            },
                                            r().createElement(
                                                'div',
                                                { className: o()(re.damageBlock, D && re.damageBlock__small) },
                                                r().createElement('div', { className: re.damageBlockIcon }),
                                                r().createElement(
                                                    'div',
                                                    null,
                                                    r().createElement(O, {
                                                        className: o()(
                                                            re.damageBlockText,
                                                            !D && re.damageBlockText__big,
                                                        ),
                                                        text: D ? ie.shortTitle() : ie.title(),
                                                    }),
                                                    !D &&
                                                        r().createElement(
                                                            r().Fragment,
                                                            null,
                                                            r().createElement(O, {
                                                                className: o()(
                                                                    re.damageBlockText,
                                                                    re.damageBlockText__param,
                                                                ),
                                                                text: ie.hullText(),
                                                                format: {
                                                                    binding: {
                                                                        value: r().createElement(O, {
                                                                            className: re.damageBlockText__light,
                                                                            text: ie.percents(),
                                                                            format: {
                                                                                binding: {
                                                                                    number: String(Math.round(100 * A)),
                                                                                },
                                                                            },
                                                                        }),
                                                                    },
                                                                },
                                                            }),
                                                            r().createElement(O, {
                                                                className: o()(
                                                                    re.damageBlockText,
                                                                    re.damageBlockText__param,
                                                                ),
                                                                text: ie.turretText(),
                                                                format: {
                                                                    binding: {
                                                                        value: r().createElement(O, {
                                                                            className: re.damageBlockText__light,
                                                                            text: ie.percents(),
                                                                            format: {
                                                                                binding: {
                                                                                    number: String(Math.round(100 * F)),
                                                                                },
                                                                            },
                                                                        }),
                                                                    },
                                                                },
                                                            }),
                                                        ),
                                                ),
                                            ),
                                        ),
                                    ),
                            )
                        );
                    });
                var ce = t(7727);
                const _e = {
                        base: 'ObjectBlock_base_1d',
                        base__scaled: 'ObjectBlock_base__scaled_c8',
                        base__big: 'ObjectBlock_base__big_de',
                        objectImage: 'ObjectBlock_objectImage_4b',
                        mainImage: 'ObjectBlock_mainImage_97',
                        select: 'ObjectBlock_select_a0',
                        hover: 'ObjectBlock_hover_47',
                        description: 'ObjectBlock_description_35',
                        shadow: 'ObjectBlock_shadow_4c',
                        descriptionContent: 'ObjectBlock_descriptionContent_48',
                        descriptionIcon: 'ObjectBlock_descriptionIcon_42',
                        base__selected: 'ObjectBlock_base__selected_90',
                        descriptionTitle: 'ObjectBlock_descriptionTitle_86',
                        descriptionText: 'ObjectBlock_descriptionText_61',
                        lightningBlockWrapper: 'ObjectBlock_lightningBlockWrapper_f1',
                        lightningBlock: 'ObjectBlock_lightningBlock_9a',
                        pulsation: 'ObjectBlock_pulsation_5f',
                    },
                    me = (0, a.memo)(({ objectName: e, isBigBlock: u, isSelected: t, isHintShow: n, x: s, y: i }) => {
                        const l = z.objects,
                            _ = z.icons.$dyn(e),
                            m = z.icons.$dyn(`${e}_select`),
                            d = (0, c.GS)().mediaSize,
                            E = (() => {
                                const e = (0, a.useState)(I.O.view.getScale()),
                                    u = e[0],
                                    t = e[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        const e = () => {
                                            t(I.O.view.getScale());
                                        };
                                        return (
                                            window.addEventListener('resize', e),
                                            () => {
                                                window.removeEventListener('resize', e);
                                            }
                                        );
                                    }, []),
                                    u
                                );
                            })(),
                            A = ((e, u) => {
                                const t = G.DEFAULT_VALUES[u],
                                    n = (G[e] && G[e][u]) || {};
                                return Object.assign({}, t, n);
                            })(d, e),
                            F = ((e, u) => {
                                const t = W.DEFAULT_VALUES[u];
                                return (W[e] && W[e][u]) || t;
                            })(d, e),
                            p = s * A.stepX,
                            g = i * A.stepOutY - s * A.stepYinX,
                            D = i * A.stepInY - s * A.stepYinX,
                            B = i * A.scaleY,
                            b = 1 + B,
                            h = 1 - B,
                            C = o()(
                                _e.base,
                                u && _e.base__big,
                                t && _e.base__selected,
                                2 === E && _e.base__scaled,
                                _e[`base__${e}`],
                            );
                        return r().createElement(
                            'div',
                            {
                                className: C,
                                onMouseEnter: () => {
                                    t || (0, ce.G)('bp_highlight');
                                },
                                onClick: () => {
                                    (0, ce.G)('play');
                                },
                            },
                            r().createElement(
                                'div',
                                {
                                    className: _e.objectImage,
                                    style: {
                                        transform: `translate(${p}rem, ${i > 0 ? g : D}rem) scaleY(${i > 0 ? b : h})`,
                                    },
                                },
                                r().createElement('div', {
                                    className: _e.mainImage,
                                    style: { backgroundImage: `url(${l.$dyn(e)})` },
                                }),
                                t
                                    ? r().createElement('div', {
                                          className: _e.select,
                                          style: { backgroundImage: `url(${l.select.$dyn(e)})` },
                                      })
                                    : r().createElement('div', {
                                          className: _e.hover,
                                          style: { backgroundImage: `url(${l.hover.$dyn(e)})` },
                                      }),
                            ),
                            r().createElement(
                                'div',
                                {
                                    className: _e.description,
                                    style: { transform: `translate(${2 * -s}rem, ${i * F}rem)` },
                                },
                                r().createElement('div', { className: _e.shadow }),
                                r().createElement('div', {
                                    className: _e.descriptionIcon,
                                    style: { backgroundImage: `url(${t ? m : _})` },
                                }),
                                r().createElement(O, { text: V.title.$dyn(e), className: _e.descriptionTitle }),
                                r().createElement(O, { text: V.subtitle.$dyn(e), className: _e.descriptionText }),
                                !n &&
                                    r().createElement(
                                        'div',
                                        { className: _e.lightningBlockWrapper },
                                        r().createElement('div', { className: _e.lightningBlock }),
                                    ),
                            ),
                        );
                    }),
                    de = {
                        base: 'App_base_a6',
                        content: 'App_content_76',
                        base__customSmall: 'App_base__customSmall_fb',
                        base__customLarge: 'App_base__customLarge_7b',
                        base__scaled: 'App_base__scaled_66',
                        vignette: 'App_vignette_b1',
                        closeButton: 'App_closeButton_50',
                        title: 'App_title_8c',
                        parallaxWrapper: 'App_parallaxWrapper_69',
                        bg: 'App_bg_cd',
                        object: 'App_object_24',
                        object__attack1: 'App_object__attack1_de',
                        object__attack2: 'App_object__attack2_55',
                        object__def1: 'App_object__def1_61',
                        object__def2: 'App_object__def2_a1',
                        object__scaled: 'App_object__scaled_17',
                        object__custom: 'App_object__custom_bd',
                        infoBlock: 'App_infoBlock_c5',
                        infoContent: 'App_infoContent_b1',
                        infoSeparator: 'App_infoSeparator_33',
                        infoSeparator__top: 'App_infoSeparator__top_e9',
                        infoSeparator__bottom: 'App_infoSeparator__bottom_70',
                        infoBlockText: 'App_infoBlockText_d4',
                        descriptionBlock: 'App_descriptionBlock_ad',
                        descriptionBlock__visible: 'App_descriptionBlock__visible_02',
                    },
                    Ee = (0, U.Pi)(() => {
                        const e = te(),
                            u = e.model,
                            t = e.controls,
                            n = u.computes.getSupplyObjects(),
                            s = (0, a.useRef)(null),
                            i = (0, a.useState)({ x: 0, y: 0 }),
                            l = i[0],
                            _ = i[1],
                            m = (0, a.useState)(H.None),
                            d = m[0],
                            E = m[1],
                            A = (0, a.useState)(!1),
                            F = A[0],
                            p = A[1],
                            g = (() => {
                                const e = (0, c.GS)(),
                                    u = e.remScreenWidth,
                                    t = e.remScreenHeight;
                                return {
                                    isCustomSmall: u > $.W_1024 && u <= $.W_1280,
                                    isCustomLarge: u > $.W_2000 && u <= $.W_2560 && t > j.H_1200,
                                };
                            })(),
                            D = g.isCustomLarge,
                            B = g.isCustomSmall,
                            b = I.O.view.getScale(),
                            h = 1.5 === b,
                            C = 2 === b,
                            f = -1 !== n.findIndex((e) => !e.isHintShow);
                        ((0, a.useEffect)(() => {
                            t.onSupplySelected(d);
                        }, [t, d, n]),
                            (0, a.useEffect)(() => {
                                const e = s.current;
                                if (!e) return;
                                const u = (e) => {
                                    ((e) => {
                                        if (!s.current) return;
                                        const u = s.current.getBoundingClientRect(),
                                            t = u.left,
                                            n = u.top,
                                            a = u.width,
                                            r = u.height,
                                            o = 2 * ((e.clientX - t) / a - 0.5),
                                            i = 2 * ((e.clientY - n) / r - 0.5);
                                        _({ x: o, y: i });
                                    })(e);
                                };
                                return (
                                    e.addEventListener('mousemove', u),
                                    () => {
                                        e.removeEventListener('mousemove', u);
                                    }
                                );
                            }, []));
                        const v = () => {
                                (E(H.None), p(!1));
                            },
                            w = o()(
                                de.base,
                                C && de.base__scaled,
                                B && de.base__customSmall,
                                D && de.base__customLarge,
                            ),
                            S = -5 * l.x,
                            T = 1 + -0.02 * l.y,
                            y = 1 - 0.02 * l.y,
                            x = 1 + 0.01 * l.x;
                        return r().createElement(
                            'div',
                            { className: w, onClick: v },
                            r().createElement(
                                'div',
                                { className: de.content },
                                r().createElement(
                                    'div',
                                    { ref: s, className: de.parallaxWrapper },
                                    r().createElement('div', {
                                        className: de.bg,
                                        style: {
                                            transform: `translate(-50%, -50%) translateX(${S}rem) scaleY(${l.y > 0 ? T : y}) scaleY(${x})`,
                                        },
                                    }),
                                    n.map((e) =>
                                        r().createElement(
                                            'div',
                                            {
                                                key: `supObj_${e.object}`,
                                                className: o()(
                                                    de.object,
                                                    de[`object__${e.point}`],
                                                    C && de.object__scaled,
                                                    h && de.object__custom,
                                                ),
                                                onClick: (u) => {
                                                    return (
                                                        (t = u),
                                                        (n = e.object),
                                                        t.stopPropagation(),
                                                        p(!0),
                                                        void E(n)
                                                    );
                                                    var t, n;
                                                },
                                            },
                                            r().createElement(me, {
                                                isSelected: d === e.object,
                                                objectName: e.object,
                                                isBigBlock: e.object === H.Airship,
                                                isHintShow: e.isHintShow,
                                                x: l.x,
                                                y: l.y,
                                            }),
                                        ),
                                    ),
                                ),
                                r().createElement('div', { className: de.vignette }),
                            ),
                            r().createElement(O, { className: de.title, text: Y.title() }),
                            f &&
                                r().createElement(
                                    'div',
                                    { className: de.infoBlock },
                                    r().createElement(
                                        'div',
                                        { className: de.infoContent },
                                        r().createElement('div', {
                                            className: o()(de.infoSeparator, de.infoSeparator__top),
                                        }),
                                        r().createElement(O, { className: de.infoBlockText, text: Y.footer() }),
                                        r().createElement('div', {
                                            className: o()(de.infoSeparator, de.infoSeparator__bottom),
                                        }),
                                    ),
                                ),
                            r().createElement(
                                'div',
                                { className: de.closeButton },
                                r().createElement(P.A, {
                                    caption: R.strings.fl_common.button.close(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: t.onClose,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: o()(de.descriptionBlock, F && de.descriptionBlock__visible) },
                                r().createElement(le, { clearSelectedObj: v, selectedObj: d }),
                            ),
                        );
                    }),
                    Ae = R.views.frontline.lobby.SupplyObjectsView('resId'),
                    Fe = () =>
                        r().createElement(
                            ue,
                            { options: { rootId: Ae } },
                            r().createElement(n.z, null, r().createElement(Ee, null)),
                        );
            },
            5989: (e, u, t) => {
                'use strict';
                t.d(u, { I: () => A });
                var n = t(6483),
                    a = t.n(n),
                    r = t(6179),
                    s = t.n(r),
                    o = t(3415),
                    i = t(2862),
                    l = t(1558);
                const c = {
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
                    },
                    _ = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = i.h2.Big,
                        special: r,
                        value: _,
                        valueType: m,
                        style: d,
                        className: E,
                        classNames: A,
                        tooltipArgs: F,
                        periodicIconTooltipArgs: p,
                    }) => {
                        const g = (0, l.L_)(r),
                            D = (0, l.i2)(r),
                            B = (0, l.m9)(_, m);
                        return s().createElement(
                            'div',
                            { className: a()(c.base, c[`base__${n}`], E), style: d },
                            s().createElement(
                                o.l,
                                { tooltipArgs: F, className: c.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: a()(c.image, null == A ? void 0 : A.image) },
                                        g &&
                                            s().createElement('div', {
                                                className: a()(c.highlight, null == A ? void 0 : A.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${g}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: a()(c.icon, null == A ? void 0 : A.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        D &&
                                            s().createElement('div', {
                                                className: a()(c.overlay, null == A ? void 0 : A.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${D}_overlay)`,
                                                },
                                            }),
                                    ),
                                    B &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: a()(
                                                    c.info,
                                                    c[`info__${e}`],
                                                    m === i.$h.MULTI && c.info__multi,
                                                    null == A ? void 0 : A.info,
                                                ),
                                            },
                                            B,
                                        ),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    o.l,
                                    { tooltipArgs: p },
                                    s().createElement('div', {
                                        className: a()(c.timer, null == A ? void 0 : A.periodicIcon),
                                    }),
                                ),
                        );
                    };
                var m = t(405);
                const d = ['item', 'parentScreen', 'itemState', 'info', 'tooltipArgs'];
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                const A = (0, r.memo)((e) => {
                    let u = e.item,
                        t = e.parentScreen,
                        n = e.itemState,
                        a = e.info,
                        o = e.tooltipArgs,
                        i = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, d);
                    const l = (0, m.Y)(u, t, n, a),
                        c = l[0],
                        A = l[1],
                        F = (0, r.useMemo)(() => Object.assign({}, o, { onMouseEnter: c, onMouseLeave: A }), [o, c, A]);
                    return s().createElement(_, E({}, i, { tooltipArgs: F }));
                });
            },
            8154: (e, u, t) => {
                'use strict';
                t.d(u, { l: () => l });
                var n = t(6373),
                    a = t(6179),
                    r = t.n(a),
                    s = t(405);
                const o = ['children', 'item', 'parentScreen', 'itemState', 'info'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = (0, a.memo)((e) => {
                    let u = e.children,
                        t = e.item,
                        a = e.parentScreen,
                        l = e.itemState,
                        c = e.info,
                        _ = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, o);
                    const m = (0, s.Y)(t, a, l, c),
                        d = m[0],
                        E = m[1];
                    return r().createElement(n.i, i({}, _, { onMouseEnter: d, onMouseLeave: E }), u);
                });
            },
            3854: (e, u, t) => {
                'use strict';
                t.d(u, { V: () => i });
                var n = t(6483),
                    a = t.n(n),
                    r = t(6179),
                    s = t.n(r),
                    o = t(5577);
                const i = (0, r.memo)(({ text: e, children: u, classMix: t }) =>
                    s().createElement(
                        'div',
                        { className: a()(o.Z.base, t) },
                        s().createElement('span', { className: o.Z.title }, e),
                        u,
                    ),
                );
            },
            4959: (e, u, t) => {
                'use strict';
                let n;
                (t.d(u, { c: () => n }),
                    (function (e) {
                        ((e.Announce = 'announce'),
                            (e.Active = 'active'),
                            (e.Finished = 'finished'),
                            (e.Frozen = 'frozen'));
                    })(n || (n = {})));
            },
            6880: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
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
                    base__disabled: 'CButton_base__disabled_d9',
                    back: 'CButton_back_e5',
                    texture: 'CButton_texture_fe',
                    state: 'CButton_state_11',
                    base__focus: 'CButton_base__focus_83',
                    stateHighlightHover: 'CButton_stateHighlightHover_ff',
                    stateHighlightActive: 'CButton_stateHighlightActive_35',
                    stateDisabled: 'CButton_stateDisabled_54',
                    base__firstHover: 'CButton_base__firstHover_d5',
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };
            },
            5287: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = { base: 'FormatText_base_d0' };
            },
            7476: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
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
                };
            },
            5577: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = { base: 'PageTitle_base_ef', title: 'PageTitle_title_33' };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], r = !0, s = 0; s < u.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, n];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(u, { a: u }), u);
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
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (__webpack_require__.j = 66),
        (() => {
            var e = { 66: 0, 964: 0, 919: 0, 805: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, s, o] = t,
                        i = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < r.length; i++)
                        ((a = r[i]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(4713));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
