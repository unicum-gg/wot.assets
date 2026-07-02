(() => {
    var __webpack_modules__ = {
            3457: (e, t, u) => {
                'use strict';
                u.d(t, { L$: () => l.L, qE: () => l.q, u5: () => m });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7727),
                    s = u(6179),
                    o = u.n(s),
                    i = u(6880),
                    l = u(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: n,
                    disabled: c,
                    mixClass: m,
                    soundHover: _,
                    soundClick: d,
                    onMouseEnter: E,
                    onMouseMove: g,
                    onMouseDown: A,
                    onMouseUp: p,
                    onMouseLeave: F,
                    onClick: B,
                }) => {
                    const D = (0, s.useRef)(null),
                        b = (0, s.useState)(u),
                        f = b[0],
                        h = b[1],
                        C = (0, s.useState)(!1),
                        v = C[0],
                        w = C[1],
                        S = (0, s.useState)(!1),
                        y = S[0],
                        T = S[1],
                        x = (0, s.useCallback)(() => {
                            c || (D.current && (D.current.focus(), h(!0)));
                        }, [c]),
                        k = (0, s.useCallback)(
                            (e) => {
                                f && null !== D.current && !D.current.contains(e.target) && h(!1);
                            },
                            [f],
                        ),
                        M = (0, s.useCallback)(
                            (e) => {
                                c || (B && B(e));
                            },
                            [c, B],
                        ),
                        N = (0, s.useCallback)(
                            (e) => {
                                c || (null !== _ && (0, a.G)(_), E && E(e), T(!0));
                            },
                            [c, _, E],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                g && g(e);
                            },
                            [g],
                        ),
                        P = (0, s.useCallback)(
                            (e) => {
                                c || (p && p(e), w(!1));
                            },
                            [c, p],
                        ),
                        O = (0, s.useCallback)(
                            (e) => {
                                c || (null !== d && (0, a.G)(d), A && A(e), u && x(), w(!0));
                            },
                            [c, d, A, x, u],
                        ),
                        I = (0, s.useCallback)(
                            (e) => {
                                c || (F && F(e), w(!1));
                            },
                            [c, F],
                        ),
                        H = r()(
                            i.Z.base,
                            i.Z[`base__${n}`],
                            {
                                [i.Z.base__disabled]: c,
                                [i.Z[`base__${t}`]]: t,
                                [i.Z.base__focus]: f,
                                [i.Z.base__highlightActive]: v,
                                [i.Z.base__firstHover]: y,
                            },
                            m,
                        ),
                        U = r()(i.Z.state, i.Z.state__default);
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
                            h(u);
                        }, [u]),
                        o().createElement(
                            'div',
                            {
                                ref: D,
                                className: H,
                                onMouseEnter: N,
                                onMouseMove: L,
                                onMouseUp: P,
                                onMouseDown: O,
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
                const m = (0, s.memo)(c);
            },
            2106: (e, t, u) => {
                'use strict';
                let n, r;
                (u.d(t, { L: () => n, q: () => r }),
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
                    })(r || (r = {})));
            },
            4090: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => c });
                var n = u(6483),
                    r = u.n(n),
                    a = u(6179),
                    s = u.n(a);
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
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (e) => {
                    let t = e.size,
                        u = e.value,
                        n = e.isEmpty,
                        a = e.fadeInAnimation,
                        c = e.hide,
                        m = e.maximumNumber,
                        _ = e.className,
                        d = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, i);
                    const E = n ? null : u,
                        g = 'string' == typeof E;
                    if ((E && !g && E < 0) || 0 === E) return null;
                    const A = E && !g && E > m,
                        p = r()(
                            o.base,
                            o[`base__${t}`],
                            a && o.base__animated,
                            c && o.base__hidden,
                            !E && o.base__pattern,
                            n && o.base__empty,
                            _,
                        );
                    return s().createElement(
                        'div',
                        l({ className: p }, d),
                        s().createElement('div', { className: o.bg }),
                        s().createElement('div', { className: o.pattern }),
                        s().createElement(
                            'div',
                            { className: r()(o.value, g && o.value__text) },
                            A ? m : E,
                            A && s().createElement('span', { className: o.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            280: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => l });
                var n = u(6179),
                    r = u.n(n),
                    a = u(6483),
                    s = u.n(a),
                    o = u(3649),
                    i = u(5287);
                const l = ({ binding: e, text: t = '', classMix: u, alignment: a = o.v2.left }) =>
                    null === t
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : r().createElement(
                              n.Fragment,
                              null,
                              t.split('\n').map((t, l) =>
                                  r().createElement(
                                      'div',
                                      { className: s()(i.Z.base, u), key: `${t}-${l}` },
                                      (0, o.Uw)(t, a, e).map((e, t) =>
                                          r().createElement(n.Fragment, { key: `${t}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => m });
                var n = u(3138),
                    r = u(6179),
                    a = u(1043),
                    s = u(5262);
                const o = n.O.client.getSize('rem'),
                    i = o.width,
                    l = o.height,
                    c = Object.assign({ width: i, height: l }, (0, s.T)(i, l, a.j)),
                    m = (0, r.createContext)(c);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => c });
                var n = u(6179),
                    r = u.n(n),
                    a = u(6536),
                    s = u(3495),
                    o = u(1043),
                    i = u(5262),
                    l = u(3138);
                const c = (0, n.memo)(({ children: e }) => {
                    const t = (0, n.useContext)(s.Y),
                        u = (0, n.useState)(t),
                        c = u[0],
                        m = u[1],
                        _ = (0, n.useCallback)((e, t) => {
                            const u = l.O.view.pxToRem(e),
                                n = l.O.view.pxToRem(t);
                            m(Object.assign({ width: u, height: n }, (0, i.T)(u, n, o.j)));
                        }, []);
                    ((0, a.Z)(() => {
                        engine.on('clientResized', _);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', _), [_]));
                    const d = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return r().createElement(s.Y.Provider, { value: d }, e);
                });
            },
            6010: (e, t, u) => {
                'use strict';
                var n = u(6179),
                    r = u(7382),
                    a = u(3495);
                const s = ['children'],
                    o = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, s);
                        const o = (0, n.useContext)(a.Y),
                            i = o.extraLarge,
                            l = o.large,
                            c = o.medium,
                            m = o.small,
                            _ = o.extraSmall,
                            d = o.extraLargeWidth,
                            E = o.largeWidth,
                            g = o.mediumWidth,
                            A = o.smallWidth,
                            p = o.extraSmallWidth,
                            F = o.extraLargeHeight,
                            B = o.largeHeight,
                            D = o.mediumHeight,
                            b = o.smallHeight,
                            f = o.extraSmallHeight,
                            h = { extraLarge: F, large: B, medium: D, small: b, extraSmall: f };
                        if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                            if (u.extraLarge && i) return t;
                            if (u.large && l) return t;
                            if (u.medium && c) return t;
                            if (u.small && m) return t;
                            if (u.extraSmall && _) return t;
                        } else {
                            if (u.extraLargeWidth && d) return (0, r.H)(t, u, h);
                            if (u.largeWidth && E) return (0, r.H)(t, u, h);
                            if (u.mediumWidth && g) return (0, r.H)(t, u, h);
                            if (u.smallWidth && A) return (0, r.H)(t, u, h);
                            if (u.extraSmallWidth && p) return (0, r.H)(t, u, h);
                            if (!(
                                u.extraLargeWidth ||
                                u.largeWidth ||
                                u.mediumWidth ||
                                u.smallWidth ||
                                u.extraSmallWidth
                            )) {
                                if (u.extraLargeHeight && F) return t;
                                if (u.largeHeight && B) return t;
                                if (u.mediumHeight && D) return t;
                                if (u.smallHeight && b) return t;
                                if (u.extraSmallHeight && f) return t;
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
            7382: (e, t, u) => {
                'use strict';
                u.d(t, { H: () => n });
                const n = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, u) => {
                'use strict';
                (u.d(t, { YN: () => r.Y, ZN: () => n.Z }), u(6010));
                var n = u(1039),
                    r = u(3495);
            },
            1043: (e, t, u) => {
                'use strict';
                u.d(t, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, u) => {
                'use strict';
                var n;
                function r(e, t, u) {
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
                        })(e, u),
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
                        })(t, u),
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === u.extraLarge.weight,
                        large: a === u.large.weight,
                        medium: a === u.medium.weight,
                        small: a === u.small.weight,
                        extraSmall: a === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: r === u.extraLarge.weight,
                        largeHeight: r === u.large.weight,
                        mediumHeight: r === u.medium.weight,
                        smallHeight: r === u.small.weight,
                        extraSmallHeight: r === u.extraSmall.weight,
                    };
                }
                (u.d(t, { T: () => r }),
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
            2862: (e, t, u) => {
                'use strict';
                let n, r, a, s, o, i, l, c, m;
                (u.d(t, { $h: () => s, A2: () => i, E4: () => n, h2: () => a, kK: () => o, sh: () => l, ye: () => m }),
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
                            (e.PostStamp = 'giftsystem_5_stamp'),
                            (e.Quests = 'quests'),
                            (e.ArmoryCoin = 'armory_coin'),
                            (e.PremiumPlusUniversal = 'premium_plus_universal'),
                            (e.DogTagType = 'dogTagComponents'),
                            (e.GoldenTicket = 'goldenticket'),
                            (e.LbStyleProgress = 'lbStyleProgress'),
                            (e.RewardsSlots = 'rewardsSlots'));
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
                            (e.S48x48 = 's48x48'));
                    })(a || (a = {})),
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
                    })(l || (l = {})),
                    (function (e) {
                        ((e.Small = '400x300'), (e.Big = '600x450'));
                    })(c || (c = {})),
                    (function (e) {
                        e.ProgressionStyle = 'progressionStyle';
                    })(m || (m = {})));
            },
            1558: (e, t, u) => {
                'use strict';
                u.d(t, { m9: () => D, L_: () => F, i2: () => B, ry: () => A, pI: () => p, p3: () => d });
                var n = u(6179),
                    r = u.n(n),
                    a = u(4179);
                class s extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? a.B3.GOLD : a.B3.INTEGRAL;
                        const t = a.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                s.defaultProps = { format: 'integral' };
                var o = u(2862);
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
                        o.E4.PostStamp,
                        o.E4.PremiumPlusUniversal,
                        o.E4.GoldenTicket,
                        o.E4.RewardsSlots,
                    ],
                    l = [o.E4.Gold, o.E4.Credits, o.E4.Crystal, o.E4.FreeXp],
                    c = [o.E4.BattlePassPoints],
                    m = [o.E4.PremiumPlus, o.E4.Premium];
                let _;
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
                })(_ || (_ = {}));
                const d = (e) =>
                        i.includes(e)
                            ? o.$h.MULTI
                            : l.includes(e)
                              ? o.$h.CURRENCY
                              : c.includes(e)
                                ? o.$h.NUMBER
                                : m.includes(e)
                                  ? o.$h.PREMIUM_PLUS
                                  : o.$h.STRING,
                    E = ['engravings', 'backgrounds'],
                    g = ['engraving', 'background'],
                    A = (e, t = o.h2.Small) => {
                        const u = e.name,
                            n = e.type,
                            r = e.value,
                            a = e.icon,
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
                            })(t);
                        switch (u) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${r}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_plus_${r}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${a}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, t) => {
                                    switch (t) {
                                        case o.h2.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case o.h2.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                                    }
                                })(e, t);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${a}`;
                            case 'dogTagComponents':
                                return ((e, t, u) => {
                                    const n = E[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                            a = r.$dyn(u);
                                        return a ? `${a}` : `${r.$dyn(g[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, t, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${a}`;
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
                                })(t)}.${a}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                            case 'groups':
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${a}`;
                            case 'premium_universal':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.premium_plus_universal`;
                            case 'armory_coin':
                                return `R.images.armory_yard.gui.maps.icons.token.sf${((e) => {
                                    switch (e) {
                                        case o.h2.Mini:
                                            return _.s32;
                                        case o.h2.Small:
                                        case o.h2.S48x48:
                                            return _.s48;
                                        case o.h2.S80x80:
                                        case o.h2.Big:
                                            return _.s80;
                                        case o.h2.S128x100:
                                            return _.s116;
                                        case o.h2.S180x135:
                                        case o.h2.S232x174:
                                        case o.h2.S296x222:
                                            return _.s296;
                                        case o.h2.S400x300:
                                            return _.s400;
                                        case o.h2.S600x450:
                                            return _.s600;
                                    }
                                })(t)}`;
                            case o.E4.StyleProgress:
                            case o.E4.LbStyleProgress:
                                return b(a, t, o.ye.ProgressionStyle);
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                        }
                    },
                    p = (e, t, u) => {
                        const n = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            n,
                            u,
                        );
                    },
                    F = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case o.kK.BATTLE_BOOSTER:
                            case o.kK.BATTLE_BOOSTER_REPLACE:
                                return o.A2.BATTLE_BOOSTER;
                        }
                    },
                    B = (e) => {
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
                    D = (e, t) => {
                        if (void 0 === e) return null;
                        switch (t) {
                            case o.$h.MULTI: {
                                const t = Number(e);
                                return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                            }
                            case o.$h.CURRENCY:
                            case o.$h.NUMBER:
                                return r().createElement(s, { format: 'integral', value: Number(e) });
                            case o.$h.PREMIUM_PLUS: {
                                const t = Number(e);
                                return isNaN(t) ? e : null;
                            }
                            default:
                                return e;
                        }
                    },
                    b = (e, t, u) => {
                        const n = R.images.gui.maps.icons.quests.bonuses.$dyn(t),
                            r = n.$dyn(e);
                        return String(null != r ? r : n.$dyn(u));
                    };
            },
            8089: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => m });
                var n = u(6179),
                    r = u.n(n),
                    a = u(6483),
                    s = u.n(a),
                    o = u(7727),
                    i = u(7476);
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
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                class m extends r().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, o.G)(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                (e && e(t), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, o.G)(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                (e && e(t), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            u = e.onClick,
                            n = e.goto,
                            a = e.side,
                            o = e.type,
                            m = e.classNames,
                            _ = e.onMouseEnter,
                            d = e.onMouseLeave,
                            E = e.onMouseDown,
                            g = e.onMouseUp,
                            A =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                    return r;
                                })(e, l)),
                            p = s()(i.Z.base, i.Z[`base__${o}`], i.Z[`base__${a}`], null == m ? void 0 : m.base),
                            F = s()(i.Z.icon, i.Z[`icon__${o}`], i.Z[`icon__${a}`], null == m ? void 0 : m.icon),
                            B = s()(i.Z.glow, null == m ? void 0 : m.glow),
                            D = s()(i.Z.caption, i.Z[`caption__${o}`], null == m ? void 0 : m.caption),
                            b = s()(i.Z.goto, null == m ? void 0 : m.goto);
                        return r().createElement(
                            'div',
                            c(
                                {
                                    className: p,
                                    onMouseEnter: this._onMouseEnter(_),
                                    onMouseLeave: this._onMouseLeave(d),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(g),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                A,
                            ),
                            'info' !== o && r().createElement('div', { className: i.Z.shine }),
                            r().createElement('div', { className: F }, r().createElement('div', { className: B })),
                            r().createElement('div', { className: D }, t),
                            n && r().createElement('div', { className: b }, n),
                        );
                    }
                }
                m.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7078: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => i });
                var n = u(6179),
                    r = u.n(n),
                    a = u(2056);
                const s = ['children'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, s);
                    return r().createElement(
                        a.u,
                        o(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            u,
                        ),
                        t,
                    );
                };
            },
            3415: (e, t, u) => {
                'use strict';
                u.d(t, { l: () => l });
                var n = u(6179),
                    r = u.n(n),
                    a = u(7078),
                    s = u(6373),
                    o = u(2056);
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = r().createElement('div', { className: u }, e);
                    if (t.header || t.body) return r().createElement(s.i, t, n);
                    const l = t.contentId,
                        c = t.args,
                        m = null == c ? void 0 : c.contentId;
                    return l || m
                        ? r().createElement(o.u, i({}, t, { contentId: l || m }), n)
                        : r().createElement(a.t, t, n);
                };
            },
            6373: (e, t, u) => {
                'use strict';
                u.d(t, { i: () => l });
                var n = u(2056),
                    r = u(6179),
                    a = u.n(r);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            u = e.body,
                            l = e.header,
                            c = e.note,
                            m = e.alert,
                            _ = e.args,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, s);
                        const E = (0, r.useMemo)(() => {
                            const e = Object.assign({}, _, { body: u, header: l, note: c, alert: m });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [m, u, l, c, _]);
                        return a().createElement(
                            n.u,
                            o(
                                {
                                    contentId:
                                        ((g = null == _ ? void 0 : _.hasHtmlContent),
                                        g ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                d,
                            ),
                            t,
                        );
                        var g;
                    };
            },
            2056: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => l });
                var n = u(7902),
                    r = u(4179),
                    a = u(6179);
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
                    return Object.entries(e || {}).map(([e, t]) => {
                        const u = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                u.number = t;
                                break;
                            case 'boolean':
                                u.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                u.string = t.toString();
                        }
                        return u;
                    });
                }
                const i = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            m = e.onMouseDown,
                            _ = e.onClick,
                            d = e.ignoreShowDelay,
                            E = void 0 !== d && d,
                            g = e.ignoreMouseClick,
                            A = void 0 !== g && g,
                            p = e.decoratorId,
                            F = void 0 === p ? 0 : p,
                            B = e.isEnabled,
                            D = void 0 === B || B,
                            b = e.targetId,
                            f = void 0 === b ? 0 : b,
                            h = e.onShow,
                            C = e.onHide,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, s);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, a.useMemo)(() => f || (0, n.F)().resId, [f]),
                            y = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (i(u, F, { isMouseEvent: !0, on: !0, arguments: o(r) }, S),
                                    h && h(),
                                    (w.current.isVisible = !0));
                            }, [u, F, r, S, h]),
                            T = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        i(u, F, { on: !1 }, S),
                                        w.current.isVisible && C && C(),
                                        (w.current.isVisible = !1));
                                }
                            }, [u, F, S, C]),
                            x = (0, a.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && T();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = w.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', x, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', x, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === D && T();
                            }, [D, T]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', T),
                                    () => {
                                        (window.removeEventListener('mouseleave', T), T());
                                    }
                                ),
                                [T],
                            ),
                            D
                                ? (0, a.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((R = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((w.current.timeoutId = window.setTimeout(y, E ? 100 : 400)),
                                                          l && l(e),
                                                          R && R(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (T(), null == c || c(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === A && T(), null == _ || _(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === A && T(), null == m || m(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          v,
                                      ),
                                  )
                                : t
                        );
                        var R;
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
            7515: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => n });
                const n = (e, t, u) => (u < e ? e : u > t ? t : u);
            },
            1856: (e, t, u) => {
                'use strict';
                u.d(t, { v: () => n });
                const n = (e) => {
                    let t,
                        u = null;
                    return (
                        (u = requestAnimationFrame(() => {
                            u = requestAnimationFrame(() => {
                                ((u = null), (t = e()));
                            });
                        })),
                        () => {
                            ('function' == typeof t && t(), null !== u && cancelAnimationFrame(u));
                        }
                    );
                };
            },
            122: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => n });
                const n = (e, t) => {
                    let u;
                    const n = setTimeout(() => {
                        u = e();
                    }, t);
                    return () => {
                        ('function' == typeof u && u(), clearTimeout(n));
                    };
                };
            },
            8246: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => s });
                var n = u(3138);
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const a = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: t = 0, getRoot: u = a, context: s = 'model' } = {}) {
                    const o = new Map();
                    function i(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, u) => {
                            u.forEach((t) => {
                                const u = o.get(t);
                                void 0 !== u && u(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = u(t),
                            r = s.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, t) => {
                                  const u = e[t];
                                  return 'function' == typeof u ? u.bind(e) : u;
                              }, r);
                    };
                    return {
                        subscribe: (u, r) => {
                            const a = 'string' == typeof r ? `${s}.${r}` : s,
                                i = n.O.view.addModelObserver(a, t, !0);
                            return (o.set(i, u), e && u(l(r)), i);
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const u = l(t);
                            return (...t) => {
                                u(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = l(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (
                                var e,
                                    u = (function (e, t) {
                                        var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (u) return (u = u.call(e)).next.bind(u);
                                        if (
                                            Array.isArray(e) ||
                                            (u = (function (e, t) {
                                                if (e) {
                                                    if ('string' == typeof e) return r(e, t);
                                                    var u = Object.prototype.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === u && e.constructor && (u = e.constructor.name),
                                                        'Map' === u || 'Set' === u
                                                            ? Array.from(e)
                                                            : 'Arguments' === u ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
                                                              ? r(e, t)
                                                              : void 0
                                                    );
                                                }
                                            })(e)) ||
                                            (t && e && 'number' == typeof e.length)
                                        ) {
                                            u && (e = u);
                                            var n = 0;
                                            return function () {
                                                return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                                            };
                                        }
                                        throw new TypeError(
                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                        );
                                    })(o.keys());
                                !(e = u()).done;
                            )
                                i(e.value, t);
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (e, t, u) => {
                'use strict';
                u.d(t, { q: () => i });
                var n = u(4598),
                    r = u(9174),
                    a = u(6179),
                    s = u.n(a),
                    o = u(8246);
                const i = () => (e, t) => {
                    const u = (0, a.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: m }) {
                            const _ = (0, a.useRef)([]),
                                d = (u, a, s) => {
                                    var i;
                                    const l = o.U(a),
                                        c =
                                            'real' === u
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == s ? void 0 : s.getter) ? i : () => {},
                                                  }),
                                        m = (e) =>
                                            'mocks' === u ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        d = (e) => _.current.push(e),
                                        E = e({
                                            mode: u,
                                            readByPath: m,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const a = null != t ? t : m(e),
                                                        s = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const a = null != t ? t : m(e),
                                                        s = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = m(t);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, t) => ((e[t] = r.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, r.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            a[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = e,
                                                            s = Object.entries(a),
                                                            o = s.reduce(
                                                                (e, [t, u]) => ((e[u] = r.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        s.forEach(([t, u]) => {
                                                                            o[u].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: d,
                                        }),
                                        g = { mode: u, model: E, externalModel: c, cleanup: d };
                                    return {
                                        model: E,
                                        controls: 'mocks' === u && s ? s.controls(g) : t(g),
                                        externalModel: c,
                                        mode: u,
                                    };
                                },
                                E = (0, a.useRef)(!1),
                                g = (0, a.useState)(i),
                                A = g[0],
                                p = g[1],
                                F = (0, a.useState)(() => d(i, l, m)),
                                B = F[0],
                                D = F[1];
                            return (
                                (0, a.useEffect)(() => {
                                    E.current ? D(d(A, l, m)) : (E.current = !0);
                                }, [m, A, l]),
                                (0, a.useEffect)(() => {
                                    p(i);
                                }, [i]),
                                (0, a.useEffect)(
                                    () => () => {
                                        (B.externalModel.dispose(), _.current.forEach((e) => e()));
                                    },
                                    [B],
                                ),
                                s().createElement(u.Provider, { value: B }, c)
                            );
                        },
                        () => (0, a.useContext)(u),
                    ];
                };
            },
            7044: (e, t, u) => {
                'use strict';
                (u.d(t, { IZ: () => a, e1: () => o, f8: () => s }), u(3649));
                var n = u(728),
                    r = u(4179);
                const a = 604800;
                function s(e = 0) {
                    let t = e;
                    const u = Math.trunc(t / 86400);
                    t -= 86400 * u;
                    const n = Math.trunc(t / 3600);
                    t -= 3600 * n;
                    const r = Math.trunc(t / 60);
                    return ((t -= 60 * r), { days: u, hours: n, minutes: r, seconds: t });
                }
                Date.now();
                const o = (e, t, u) => {
                    switch (t) {
                        case n.U.SHORT_DATE:
                            return u ? r.Z5.getDateFormat(e, r.kH.SHORT_FORMAT) : r.cy.getTimeFormat('%d.%m.%y', e, !0);
                        case n.U.SHORT_TIME:
                            return u ? r.Z5.getTimeFormat(e, r.lf.SHORT_FORMAT) : r.cy.getTimeFormat('%I:%M %p', e, !0);
                        case n.U.SHORT_DATE_TIME:
                            return u
                                ? `${r.Z5.getDateFormat(e, r.kH.SHORT_FORMAT)}, ${r.Z5.getTimeFormat(e, r.lf.SHORT_FORMAT)}`
                                : r.cy.getTimeFormat('%d.%m.%y, %I:%M %p', e, !0);
                        case n.U.FULL_DATE:
                            return u ? r.Z5.getDateFormat(e, r.kH.LONG_FORMAT) : r.cy.getTimeFormat('%B %d, %Y', e, !0);
                        case n.U.FULL_DATE_TIME:
                            return u
                                ? `${r.Z5.getDateFormat(e, r.kH.LONG_FORMAT)}, ${r.Z5.getTimeFormat(e, r.lf.SHORT_FORMAT)}`
                                : r.cy.getTimeFormat('%B %d, %Y, %I:%M %p', e, !0);
                        case n.U.MONTH:
                            return r.cy.getTimeFormat('%B', e, !0);
                        case n.U.MONTH_DATE:
                            return r.cy.getTimeFormat('%B %e', e, !0);
                        case n.U.DATE_MONTH:
                            return r.cy.getTimeFormat('%e %B', e, !0);
                        case n.U.MONTH_YEAR:
                            return r.cy.getTimeFormat('%B %Y', e, !0);
                        case n.U.WEEK_DAY:
                            return r.cy.getTimeFormat('%A', e, !0);
                        case n.U.WEEK_DAY_TIME:
                            return u
                                ? `${r.cy.getTimeFormat('%A', e, !0)} ${r.Z5.getTimeFormat(e, r.lf.SHORT_FORMAT)}`
                                : r.cy.getTimeFormat('%A, %I:%M %p', e, !0);
                        case n.U.YEAR:
                            return r.cy.getTimeFormat('%Y', e, !0);
                        case n.U.DATE_YEAR:
                            return r.cy.getTimeFormat('%d, %Y', e, !0);
                    }
                };
            },
            527: (e, t, u) => {
                'use strict';
                (u.r(t), u.d(t, { mouse: () => o, onResize: () => a }));
                var n = u(2472),
                    r = u(1176);
                const a = (0, n.E)('clientResized'),
                    s = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    o = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function u() {
                            e.enabled && (0, r.R)(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', u))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', u))
                                : (0, r.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (t, u) => (
                                (t[u] = (function (t) {
                                    return (u) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const a = `mouse${t}`,
                                            o = s[t]((e) => u([e, 'outside']));
                                        function i(e) {
                                            u([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, i),
                                            n(),
                                            () => {
                                                r &&
                                                    (o(),
                                                    window.removeEventListener(a, i),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(u)),
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
            5959: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => a,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    }));
                var n = u(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2472: (e, t, u) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => n });
            },
            3138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => r });
                var n = u(5959);
                const r = { view: u(7641), client: n };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function r(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                (u.r(t), u.d(t, { getBgUrl: () => r, getTextureUrl: () => n }));
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => r });
                var n = u(2472);
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
            7641: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => a.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => A,
                        getSize: () => _,
                        getViewGlobalPosition: () => E,
                        isClientAccessible: () => b,
                        isEventHandled: () => h,
                        isFocused: () => D,
                        pxToRem: () => p,
                        remToPx: () => F,
                        resize: () => d,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => y,
                    }));
                var n = u(3722),
                    r = u(6112),
                    a = u(6538),
                    s = u(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function c(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: F(t.x), y: F(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function A() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function D() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.isClientAccessible();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function C() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    S = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => a });
                const n = ['args'],
                    r = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                    return r;
                                })(t, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, s, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
                                                  const u = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: u, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: u, name: e, bool: t };
                                                      default:
                                                          return { __Type: u, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var r;
                    },
                    a = {
                        close(e) {
                            r('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(e) {
                            r(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, u) => {
                'use strict';
                function n() {}
                function r() {
                    return !1;
                }
                (u.d(t, { ZT: () => n, jv: () => r }), console.log);
            },
            7902: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => n });
                const n = (e = 1) => {
                    const t = new Error().stack;
                    let u,
                        n = R.invalid('resId');
                    return (
                        t &&
                            ((u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== u &&
                                window.subViews[u] &&
                                (n = window.subViews[u].id)),
                        { caller: u, stack: t, resId: n }
                    );
                };
            },
            6536: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(6179);
                const r = (e) => {
                    const t = (0, n.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            5415: (e, t, u) => {
                'use strict';
                u.d(t, { Aq: () => i, GS: () => l, cJ: () => s, fd: () => o });
                var n = u(6179),
                    r = u(7739),
                    a = u(1043);
                let s, o, i;
                (!(function (e) {
                    ((e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = a.j.small.width)] = 'Small'),
                        (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                        (e[(e.Large = a.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge'));
                })(s || (s = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.width)] = 'Small'),
                            (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                            (e[(e.Large = a.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge'));
                    })(o || (o = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.height)] = 'Small'),
                            (e[(e.Medium = a.j.medium.height)] = 'Medium'),
                            (e[(e.Large = a.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge'));
                    })(i || (i = {})));
                const l = () => {
                    const e = (0, n.useContext)(r.YN),
                        t = e.width,
                        u = e.height,
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
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: u };
                };
            },
            5521: (e, t, u) => {
                'use strict';
                let n, r;
                (u.d(t, { n: () => n }),
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
                    })(r || (r = {})));
            },
            9480: (e, t, u) => {
                'use strict';
                function n(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function r(e, t) {
                    for (let r = 0; r < e.length; r++) {
                        const a =
                            ((u = e[r]),
                            (n = void 0),
                            u && 'value' in u && null != (n = u.constructor) && n.name.includes('ArrayItem')
                                ? null == u
                                    ? void 0
                                    : u.value
                                : u);
                        if (t(a, r, e)) return a;
                    }
                    var u, n;
                }
                u.d(t, { UI: () => n, sE: () => r });
            },
            7727: (e, t, u) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e);
                }
                u.d(t, { G: () => n });
            },
            3649: (e, t, u) => {
                'use strict';
                let n;
                function r(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function a(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                (u.d(t, { Eg: () => o, Uw: () => d, WU: () => r, uF: () => a, v2: () => n, z4: () => s }),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(n || (n = {})));
                const s = (e) => e.replace(/&nbsp;/g, ' '),
                    o = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    i = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    l = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    c = (e, t, u = n.left) => e.split(t).reduce(u === n.left ? i : l, []),
                    m = (() => {
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
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    _ = ['zh_cn', 'zh_sg', 'zh_tw'],
                    d = (e, t, u) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            u && e in u
                                ? u[e]
                                : ((e, t = n.left) => {
                                      const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return _.includes(u)
                                          ? m(e)
                                          : ((e, t = n.left) => {
                                                let u = [];
                                                const r =
                                                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                    a = s(e);
                                                return (
                                                    c(a, /( )/, t).forEach((e) => (u = u.concat(c(e, r, n.left)))),
                                                    u
                                                );
                                            })(e, t);
                                  })(e, t),
                        );
            },
            728: (e, t, u) => {
                'use strict';
                let n;
                (u.d(t, { U: () => n }),
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
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                var n = u(3138);
                class r {
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
                        return (window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, t, u = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, u, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(a) : (this._views[u] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
                        );
                    }
                    removeCallback(e, t = 0) {
                        let u = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((u = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            u || console.error("Can't remove callback by id:", e),
                            u
                        );
                    }
                    _emmitDataChanged(e, t, u) {
                        u.forEach((u) => {
                            const n = this._callbacks[u];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const a = r;
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
            4179: (e, t, u) => {
                'use strict';
                u.d(t, {
                    Sw: () => a.Z,
                    kH: () => d,
                    B3: () => c,
                    Z5: () => s,
                    lf: () => _,
                    cy: () => o,
                    B0: () => i,
                    ry: () => B,
                });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    u();
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
                        const u = e,
                            n = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== n)),
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
                const r = n;
                var a = u(1358);
                const s = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
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
                    m = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = u(5521),
                    g = u(3138);
                const A = ['args'];
                function p(e, t, u, n, r, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(n, r);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    B = (function () {
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
                                        u = arguments;
                                    return new Promise(function (n, r) {
                                        var a = e.apply(t, u);
                                        function s(e) {
                                            p(a, n, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            p(a, n, r, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    D = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                    return r;
                                })(t, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
                                                  const u = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          u.number = t;
                                                          break;
                                                      case 'boolean':
                                                          u.bool = t;
                                                          break;
                                                      default:
                                                          u.string = t.toString();
                                                  }
                                                  return u;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    b = () => D(i.CLOSE),
                    f = (e, t) => {
                        e.keyCode === E.n.ESCAPE && t();
                    };
                var h = u(7572);
                const C = r.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: h.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: m,
                        TimeFormatType: _,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => D(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => D(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            D(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, r = R.invalid('resId'), a) => {
                            const s = g.O.view.getViewGlobalPosition(),
                                o = u.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                m = o.width,
                                _ = o.height,
                                d = {
                                    x: g.O.view.pxToRem(l) + s.x,
                                    y: g.O.view.pxToRem(c) + s.y,
                                    width: g.O.view.pxToRem(m),
                                    height: g.O.view.pxToRem(_),
                                };
                            D(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: F(d),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, b);
                        },
                        handleViewEvent: D,
                        onBindingsReady: B,
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
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < r.length; t++) u[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: C,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = v;
            },
            1504: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => i });
                var n = u(7739),
                    r = u(6179),
                    a = u.n(r),
                    s = u(2849);
                const o = ['children'],
                    i = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, o);
                        return a().createElement(n.ZN, null, a().createElement(s.l, u, t));
                    };
            },
            2849: (e, t, u) => {
                'use strict';
                u.d(t, { l: () => g });
                var n = u(6483),
                    r = u.n(n),
                    a = u(926),
                    s = u.n(a),
                    o = u(6179),
                    i = u.n(o),
                    l = u(5415);
                const c = ['children', 'className'];
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const _ = {
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
                    g = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, c);
                        const a = (0, l.GS)(),
                            s = a.mediaWidth,
                            o = a.mediaHeight,
                            g = a.mediaSize;
                        return i().createElement('div', m({ className: r()(u, _[s], d[o], E[g]) }, n), t);
                    };
            },
            4029: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => n.z });
                var n = u(1504);
            },
            3458: (e, t, u) => {
                'use strict';
                let n;
                (u.d(t, { Z0: () => r, in: () => n, sx: () => a }),
                    (function (e) {
                        ((e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning'));
                    })(n || (n = {})));
                const r = 'tooltip_watched',
                    a = 2;
                let s;
                !(function (e) {
                    ((e.Click = 'click'), (e.KeyDown = 'keydown'));
                })(s || (s = {}));
            },
            5983: (e, t, u) => {
                'use strict';
                u.d(t, { D9: () => n, RM: () => r, ob: () => a });
                const n = 'epic_battle';
                let r, a, s;
                (!(function (e) {
                    ((e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view'));
                })(r || (r = {})),
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
                    })(a || (a = {})),
                    (function (e) {
                        ((e.Click = 'click'), (e.Close = 'close'));
                    })(s || (s = {})));
            },
            405: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => o });
                var n = u(6179),
                    r = u(3458),
                    a = u(5983),
                    s = u(1943);
                const o = (e, t, u, o) => {
                    const i = (0, s.k2)(a.D9),
                        l = i[0],
                        c = i[1];
                    return [
                        (0, n.useCallback)(() => l(r.Z0), [l]),
                        (0, n.useCallback)(
                            () => c({ action: r.Z0, timeLimit: r.sx, item: e, parentScreen: t, itemState: u, info: o }),
                            [c, e, t, u, o],
                        ),
                    ];
                };
            },
            1943: (e, t, u) => {
                'use strict';
                u.d(t, { k2: () => o });
                var n = u(6179),
                    r = u(3458);
                const a = () => Date.now(),
                    s = (e, t) => {
                        const u = ((e, t) => {
                                const u = (0, n.useCallback)(
                                    (u, n = r.in.Info, a) => {
                                        (a || (a = {}),
                                            Object.keys(a).length >= 200 ||
                                                window.uiLoggerModel.log({
                                                    feature: e,
                                                    group: t,
                                                    action: u,
                                                    logLevel: n,
                                                    params: JSON.stringify(a),
                                                }));
                                    },
                                    [e, t],
                                );
                                return (e, t, n) => u(e, t, n);
                            })(e, t),
                            s = (0, n.useRef)(new Map()),
                            o = (0, n.useRef)(new Map()),
                            i = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = s.current.get(e);
                                    (void 0 !== t && t > 0) || s.current.set(e, a());
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
                                        o.current.set(e, a());
                                },
                                [s, o],
                            ),
                            m = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = s.current.get(e);
                                    if (void 0 === t) return;
                                    const u = o.current.get(e);
                                    if (void 0 === u) return;
                                    o.current.delete(e);
                                    const n = a() - u;
                                    s.current.set(e, t + n);
                                },
                                [s, o],
                            ),
                            _ = (0, n.useCallback)(
                                (e, t = 0, n, r) => {
                                    const i = s.current.get(e);
                                    if (void 0 === i) return;
                                    (void 0 !== o.current.get(e) && m(e), s.current.delete(e));
                                    const l = (a() - i) / 1e3;
                                    l <= t ||
                                        ((r = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(r, l)),
                                        u(e, n, r));
                                },
                                [s, o, u, m],
                            );
                        return [(e) => i(e), (e, t, u, n) => _(e, t, u, n), () => l(), (e) => c(e), (e) => m(e)];
                    },
                    o = (e) => {
                        const t = s(e, 'metrics'),
                            u = t[0],
                            r = t[1],
                            a = t[2],
                            o = t[3],
                            i = t[4],
                            l = (0, n.useCallback)(
                                (e) => {
                                    const t = e.action,
                                        u = e.timeLimit,
                                        n = e.logLevel;
                                    r(
                                        t,
                                        u,
                                        n,
                                        (({ partnerID: e, item: t, parentScreen: u, itemState: n, info: r }) => ({
                                            item: t,
                                            partnerID: e || null,
                                            parent_screen: u || null,
                                            item_state: n || null,
                                            additional_info: r || null,
                                        }))(e),
                                    );
                                },
                                [r],
                            );
                        return [(e) => u(e), (e) => l(e), () => a(), (e) => o(e), (e) => i(e)];
                    };
            },
            6014: (e, t, u) => {
                'use strict';
                var n = u(4179),
                    r = u(4029),
                    a = u(6179),
                    s = u.n(a),
                    o = u(493),
                    i = u.n(o),
                    l = u(3215),
                    c = u(9174);
                const m = (0, l.q)()(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            subViewActive: c.LO.box(
                                window.subViews.ids().includes(R.views.frontline.lobby.ProgressView('resId')),
                            ),
                        }),
                        ({ cleanup: e, model: t }) => {
                            const u = (function (e) {
                                    const t = {};
                                    for (const u in e)
                                        if (Object.prototype.hasOwnProperty.call(e, u)) {
                                            const n = e[u];
                                            t[u] = (0, c.aD)(n);
                                        }
                                    return t;
                                })({ updateSubViewId: (e) => t.subViewActive.set(e) }),
                                n = (e) => {
                                    e.includes(R.views.frontline.lobby.ProgressView('resId')) && u.updateSubViewId(!0);
                                },
                                r = (e) => {
                                    e.includes(R.views.frontline.lobby.ProgressView('resId')) && u.updateSubViewId(!1);
                                },
                                a = window.subViews.addChildChangedCallback(
                                    R.views.frontline.lobby.ProgressView('resId'),
                                );
                            return (
                                e(() => {
                                    (engine.off('subViews.onAdded', n),
                                        engine.off('subViews.onRemoved', r),
                                        window.subViews.removeChildChangedCallback(a));
                                }),
                                engine.on('subViews.onAdded', n),
                                engine.on('subViews.onRemoved', r),
                                {}
                            );
                        },
                    ),
                    _ = m[0],
                    d = m[1];
                var E = u(8089),
                    g = u(6483),
                    A = u.n(g),
                    p = u(1856),
                    F = u(7030);
                const B = {
                        base: 'Frame_base_af',
                        base__small: 'Frame_base__small_f0',
                        base__medium: 'Frame_base__medium_05',
                        border: 'Frame_border_17',
                        border__top: 'Frame_border__top_f7',
                        border__bottom: 'Frame_border__bottom_52',
                        arrow: 'Frame_arrow_c3',
                    },
                    D = s().forwardRef(function ({ classNames: e, arrowRef: t, size: u = 'medium', className: n }, r) {
                        return s().createElement(
                            'div',
                            { className: A()(B.base, B[`base__${u}`], n), ref: r },
                            s().createElement('div', {
                                className: A()(
                                    B.border,
                                    B.border__top,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderTop,
                                ),
                            }),
                            s().createElement('div', {
                                className: A()(
                                    B.border,
                                    B.border__bottom,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderBottom,
                                ),
                            }),
                            s().createElement('div', { className: A()(B.arrow, null == e ? void 0 : e.arrow), ref: t }),
                        );
                    });
                var b = u(7727);
                const f = {
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
                    h = { mouseEnter: 'highlight', click: 'play' },
                    C = s().forwardRef(function (
                        {
                            id: e,
                            isActive: t,
                            className: u,
                            classNames: n,
                            sounds: r = h,
                            notification: a,
                            icon: o,
                            size: i,
                            additionContent: l,
                            onClick: c,
                            onMouseEnter: m,
                            onMouseLeave: _,
                            WrapperElement: d,
                        },
                        E,
                    ) {
                        const g = (e, u) => {
                                !t && r[u] && (0, b.G)(r[u]);
                            },
                            p = s().createElement(
                                'div',
                                {
                                    className: A()(
                                        f.base,
                                        f[`base__${i}`],
                                        t && A()(f.base__active, null == n ? void 0 : n.activeTab),
                                        u,
                                    ),
                                    onClick: ((e) => () => {
                                        (g(0, 'click'), null == c || c(e));
                                    })(e),
                                    onMouseEnter: ((e) => () => {
                                        (g(0, 'mouseEnter'), null == m || m(e));
                                    })(e),
                                    onMouseLeave: ((e) => () => {
                                        (g(0, 'mouseLeave'), null == _ || _(e));
                                    })(e),
                                    ref: t ? E : null,
                                },
                                s().createElement('div', {
                                    className: A()(f.highlight, null == n ? void 0 : n.highlight),
                                }),
                                'function' == typeof o && i
                                    ? o(i)
                                    : s().createElement('div', {
                                          className: A()(f.icon, f[`icon__${i}`], null == n ? void 0 : n.icon),
                                          style: { backgroundImage: `url(${o})` },
                                      }),
                                l && l({ id: e, isActive: t, size: i }),
                                a &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: A()(
                                                f.notification,
                                                f[`notification__${a.type}`],
                                                a.size ? f[`notification__${a.size}`] : f.notification__medium,
                                                null == n ? void 0 : n.notification,
                                            ),
                                        },
                                        'dot' !== a.type && a.value,
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
                var w = u(3138);
                const S = s().memo(function ({
                    active: e,
                    tabs: t,
                    sounds: u,
                    className: n,
                    classNames: r,
                    size: o = 'medium',
                    additionContent: i,
                    onClick: l,
                    onMouseEnter: c,
                    onMouseLeave: m,
                    WrapperElement: _,
                }) {
                    const d = (0, a.useRef)(null),
                        E = (0, a.useRef)(null),
                        g = (0, a.useRef)(null),
                        B = (0, a.useRef)(null),
                        b = (0, F.useSpring)(() => ({
                            marginLeft: 0,
                            onChange: (e) => {
                                const t = d.current;
                                t && (t.style.marginLeft = `${e.value.marginLeft}rem`);
                            },
                        }))[1],
                        f = (0, F.useSpring)(() => ({
                            opacity: 0,
                            onChange: (e) => {
                                const t = d.current;
                                t && (t.style.opacity = `${e.value.opacity}`);
                            },
                        }))[1],
                        h = (0, F.useSpring)(() => ({
                            position: 0,
                            onChange: (e) => {
                                const t = E.current;
                                t && (t.style.transform = `translateY(${e.value.position / w.O.view.getScale()}rem)`);
                            },
                            onStart: () => {
                                (b.start({ from: { marginLeft: 12 }, to: { marginLeft: 0 }, config: { duration: 50 } }),
                                    f.start({ from: { opacity: 1 }, to: { opacity: 0 }, config: { duration: 50 } }));
                            },
                            onRest: () => {
                                (b.start({
                                    from: { marginLeft: 0 },
                                    to: { marginLeft: 12 },
                                    config: { duration: 150 },
                                }),
                                    f.start({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 150 } }));
                            },
                        }))[1],
                        S = (0, a.useCallback)((e) => {
                            null !== g.current &&
                                null !== B.current &&
                                e(g.current.getBoundingClientRect().top - B.current.getBoundingClientRect().top);
                        }, []);
                    var y, T;
                    return (
                        (0, a.useEffect)(() => {
                            S((e) => {
                                h.start({ position: e, config: { duration: 200 } });
                            });
                        }, [h, e, S]),
                        (0, a.useEffect)(
                            () =>
                                (0, p.v)(() => {
                                    S((e) => {
                                        h.start({ position: e, immediate: !0 });
                                    });
                                }),
                            [h, S, o],
                        ),
                        (y = () => {
                            S((e) => {
                                h.start({ position: e, config: { duration: 200 } });
                            });
                        }),
                        (T = [h, S]),
                        (0, a.useEffect)(() => {
                            let e = () => {};
                            const t = () => {
                                (e(), (e = (0, p.v)(y)));
                            };
                            return (
                                window.addEventListener('resize', t),
                                () => {
                                    (e(), window.removeEventListener('resize', t));
                                }
                            );
                        }, T),
                        s().createElement(
                            'div',
                            { className: A()(v.base, n), ref: B },
                            t.map(({ id: t, items: n, title: a, groupClassNames: d }) =>
                                s().createElement(
                                    'div',
                                    { key: t, className: A()(v.group, v[`group__${o}`], null == d ? void 0 : d.group) },
                                    a &&
                                        s().createElement(
                                            'div',
                                            { className: A()(v.title, null == d ? void 0 : d.title) },
                                            a,
                                        ),
                                    n.map(({ id: t, icon: n, notification: a }) =>
                                        s().createElement(C, {
                                            key: t,
                                            id: t,
                                            icon: n,
                                            notification: a,
                                            ref: g,
                                            sounds: u,
                                            isActive: e === t,
                                            size: o,
                                            className: null == r ? void 0 : r.tab,
                                            classNames: r,
                                            additionContent: i,
                                            onMouseEnter: c,
                                            onMouseLeave: m,
                                            onClick: l,
                                            WrapperElement: _,
                                        }),
                                    ),
                                ),
                            ),
                            s().createElement(D, {
                                arrowRef: d,
                                ref: E,
                                size: o,
                                className: null == r ? void 0 : r.frame,
                                classNames: r,
                            }),
                        )
                    );
                });
                u(7044);
                var y = u(7902);
                const T = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                var x = u(6536);
                const k = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    M = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    N = n.Sw.instance;
                let L;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(L || (L = {}));
                const P = (e = 'model', t = L.Deep) => {
                    const u = (0, a.useState)(0),
                        n = (u[0], u[1]),
                        r = (0, a.useMemo)(() => (0, y.F)(), []),
                        s = r.caller,
                        o = r.resId,
                        i = (0, a.useMemo)(
                            () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                            [s, e],
                        ),
                        l = (0, a.useState)(() =>
                            ((e) => {
                                const t = T(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return k(t) ? t.value : t;
                            })(
                                ((e) =>
                                    ((e, t) =>
                                        e.split('.').reduce((e, t) => {
                                            const u = T(`${e}.${t}`, window);
                                            return k(u) ? ((e, t) => `${e}.${t}.value`)(e, t) : `${e}.${t}`;
                                        }))(e))(i),
                            ),
                        ),
                        c = l[0],
                        m = l[1],
                        _ = (0, a.useRef)(-1);
                    return (
                        (0, x.Z)(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? L.Deep : L.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== L.None)
                            ) {
                                const u = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === L.Deep
                                            ? (e === c && n((e) => e + 1), m(e))
                                            : m(Object.assign([], e));
                                    },
                                    r = ((e) => {
                                        const t = ((e) => {
                                                const t = (0, y.F)(),
                                                    u = t.caller,
                                                    n = t.resId,
                                                    r =
                                                        window.__feature && window.__feature !== u && u
                                                            ? `subViews.${u}`
                                                            : '';
                                                return { modelPrefix: r, modelPath: M(r, ''), resId: n };
                                            })(),
                                            u = t.modelPrefix,
                                            n = e.split('.');
                                        if (n.length > 0) {
                                            const e = [n[0]];
                                            return (
                                                n.reduce((t, n) => {
                                                    const r = T(M(u, `${t}.${n}`), window);
                                                    return k(r)
                                                        ? (e.push(r.id), `${t}.${n}.value`)
                                                        : (e.push(n), `${t}.${n}`);
                                                }),
                                                e.reduce((e, t) => e + '.' + t)
                                            );
                                        }
                                        return '';
                                    })(e);
                                _.current = N.addCallback(r, u, o, t === L.Deep);
                            }
                        }),
                        (0, a.useEffect)(() => {
                            if (t !== L.None)
                                return () => {
                                    N.removeCallback(_.current, o);
                                };
                        }, [o, t]),
                        c
                    );
                };
                n.Sw.instance;
                var O = u(5521);
                const I = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function H(e = O.n.NONE, t = I, u = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== O.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (w.O.view.isEventHandled()) return;
                                (w.O.view.setEventHandled(), t(n), u && n.stopPropagation());
                            }
                        }
                    }, [t, e, u]);
                }
                var U = u(5415),
                    $ = u(9480),
                    W = u(5983),
                    j = u(8154);
                const G = R.strings.fl_common.tab,
                    z = (0, a.memo)(({ children: e, id: t }) => {
                        const u = P('model', L.None),
                            n = u.tabs,
                            r = u.currentTabId,
                            o = (0, a.useMemo)(() => {
                                const e = n.map(({ value: e }) => e).find((e) => e.id === t);
                                if (e) {
                                    const t = G.$dyn(e.type);
                                    return t
                                        ? {
                                              item: 'frontline_tab_tooltip',
                                              parentScreen: W.RM.ContainerView,
                                              info: e.type,
                                              header: t.$dyn('name'),
                                              body: t.$dyn('description'),
                                          }
                                        : null;
                                }
                                return null;
                            }, [t, n]);
                        return o
                            ? s().createElement(
                                  j.l,
                                  o,
                                  s().createElement(
                                      'div',
                                      { className: 'FrontlineContainerViewApp_tabWrapper_35' },
                                      0 === t &&
                                          0 !== r &&
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
                var Y = u(3403),
                    V = u(3903),
                    X = u(5660),
                    q = u(3428);
                const Z = ({ message: e, className: t, classNames: u }) =>
                    s().createElement(
                        'div',
                        { className: A()('Spinner_base_87', t) },
                        e &&
                            s().createElement(
                                'div',
                                { className: A()('Spinner_caption_cf', null == u ? void 0 : u.caption) },
                                e,
                            ),
                        s().createElement('div', { className: A()('Spinner_gear_c4', null == u ? void 0 : u.gear) }),
                        s().createElement('div', { className: A()('Spinner_logo_bf', null == u ? void 0 : u.logo) }),
                    );
                var K = u(3457);
                const Q = ({ errorBtnLabel: e, errorBtnClickHandler: t, errorMessage: u }) =>
                    s().createElement(
                        'div',
                        { className: 'Error_base_46' },
                        s().createElement('div', { className: 'Error_alertIcon_04' }),
                        s().createElement('div', { className: 'Error_errorCaption_f2' }, u),
                        s().createElement(K.u5, { size: K.qE.medium, mixClass: 'Error_button_cd', onClick: t }, e),
                    );
                Q.defaultProps = { errorBtnLabel: '', errorMessage: '' };
                const J = ({
                    message: e,
                    isError: t,
                    errorMessage: u,
                    errorBtnLabel: n,
                    errorBtnClickHandler: r,
                    overlayAlpha: o,
                }) => {
                    const i = s().createRef();
                    return (
                        (0, a.useEffect)(() => {
                            const e = i.current;
                            e && o && (e.style.opacity = o);
                        }, [i, o]),
                        s().createElement(
                            'div',
                            { className: 'Waiting_base_c5' },
                            s().createElement('div', { className: 'Waiting_blackOverlay_55', ref: i }),
                            t
                                ? s().createElement(Q, { errorBtnLabel: n, errorMessage: u, errorBtnClickHandler: r })
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
                var ee = u(4598);
                const te = (0, a.memo)(() =>
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
                    ue = {
                        [q.R]: s().createElement(q.J, null),
                        [V.B]: s().createElement(V.t, null),
                        [X.o]: s().createElement(X.M, null),
                    },
                    ne = (0, Y.Pi)(({ resId: e, className: t }) => {
                        const u = d().model.subViewActive.get();
                        if (!ue[e]) throw new Error('View with specified id not found. ' + e);
                        return s().createElement(
                            'div',
                            { className: A()('ViewMapper_base_71', t) },
                            u ? ue[e] : s().createElement(te, null),
                        );
                    }),
                    re = { notification: { type: 'dot' } },
                    ae = R.strings.fl_common.button,
                    se = () => {
                        const e = (0, U.GS)().mediaSize,
                            t = P('model', L.Shallow),
                            u = t.currentTabId,
                            n = t.onTabChange,
                            r = t.onClose,
                            o = t.onInfo,
                            i = P('model.tabs'),
                            l = ((e, t) => {
                                var u;
                                return null == (u = $.sE(e, (e) => e.id === t)) ? void 0 : u.resId;
                            })(i, u),
                            c = (0, a.useCallback)((e) => n({ tabId: e }), [n]),
                            m = (0, a.useCallback)(() => r(), [r]),
                            _ = (0, a.useCallback)(() => o(), [o]),
                            d = ((e) => [
                                {
                                    id: 0,
                                    items: e.map(({ value: e }) => {
                                        const t = {
                                            id: e.id,
                                            icon: R.images.frontline.gui.maps.icons.tabs.c_64x64.$dyn(e.type),
                                        };
                                        return (e.isHighlighted && Object.assign(t, re), t);
                                    }),
                                },
                            ])(i);
                        var g;
                        return (
                            (g = m),
                            H(O.n.ESCAPE, g),
                            s().createElement(
                                'div',
                                { className: 'FrontlineContainerViewApp_base_ee' },
                                0 !== u &&
                                    s().createElement(
                                        'div',
                                        { className: 'FrontlineContainerViewApp_closeButton_35' },
                                        s().createElement(E.A, {
                                            caption: ae.close(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: m,
                                        }),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: 'FrontlineContainerViewApp_infoButton_90' },
                                    s().createElement(E.A, {
                                        caption: ae.info(),
                                        type: 'info',
                                        side: 'left',
                                        onClick: _,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'FrontlineContainerViewApp_tabs_c9' },
                                    s().createElement(S, {
                                        tabs: d,
                                        size: e >= U.cJ.Small ? 'medium' : 'small',
                                        active: u,
                                        onClick: c,
                                        WrapperElement: z,
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
                        s().createElement(r.z, null, s().createElement(_, null, s().createElement(se, null))),
                        document.getElementById('root'),
                    );
                });
            },
            3903: (e, t, u) => {
                'use strict';
                (u.d(t, { B: () => Ze, t: () => Ke }), u(4179));
                var n = u(6179),
                    r = u.n(n),
                    a = u(6483),
                    s = u.n(a),
                    o = u(4959),
                    i = u(3403),
                    l = u(3854);
                const c = (0, u(3215).q)()(
                        ({ observableModel: e }) => ({ root: e.object(), rewards: e.array('rewards') }),
                        ({ externalModel: e }) => ({ shopClick: e.createCallbackNoArgs('onShopClick') }),
                    ),
                    m = c[0],
                    _ = c[1],
                    d = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let E, g;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(E || (E = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(g || (g = {})));
                const A = ({ size: e = E.Default, classMix: t }) =>
                        r().createElement('div', { className: s()(d.background, d[`background__${e}`], t) }),
                    p = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    F = ({ size: e }) => {
                        const t = s()(p.base, p[`base__${e}`]);
                        return r().createElement('div', { className: t });
                    },
                    B = {
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
                    D = (0, n.memo)(
                        ({ size: e, lineRef: t, disabled: u, baseStyles: n, isComplete: a, withoutBounce: o }) => {
                            const i = s()(
                                    B.base,
                                    B[`base__${e}`],
                                    u && B.base__disabled,
                                    a && B.base__finished,
                                    o && B.base__withoutBounce,
                                ),
                                l = !u && !a;
                            return r().createElement(
                                'div',
                                { className: i, style: n, ref: t },
                                r().createElement('div', { className: B.pattern }),
                                r().createElement('div', { className: B.gradient }),
                                l && r().createElement(F, { size: e }),
                            );
                        },
                    ),
                    b = ({ size: e, value: t, lineRef: u, disabled: a, onComplete: s }) => {
                        const o = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            i = 100 === t;
                        return (
                            (0, n.useEffect)(() => {
                                i && s && s();
                            }, [i, s]),
                            r().createElement(D, { size: e, disabled: a, baseStyles: o, isComplete: i, lineRef: u })
                        );
                    };
                var f = u(122);
                let h, C;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(h || (h = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(C || (C = {})));
                const v = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < a,
                                m = (0, n.useState)(C.Idle),
                                _ = m[0],
                                d = m[1],
                                E = _ === C.In,
                                g = _ === C.End,
                                A = _ === C.Idle,
                                p = (0, n.useCallback)(
                                    (e) => {
                                        (d(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, n.useEffect)(() => {
                                if (A && !u) {
                                    const e = t;
                                    return (0, f.F)(() => {
                                        p(C.In);
                                    }, e);
                                }
                            }, [p, u, A, t]),
                                (0, n.useEffect)(() => {
                                    if (E) {
                                        const u = e + t;
                                        return (0, f.F)(() => {
                                            (i && i(), p(C.End));
                                        }, u);
                                    }
                                }, [p, E, i, t, e]));
                            const B = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                D = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                b = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(a - o)}%`, left: `${c ? o : a}%` }),
                                    [a, c, o],
                                );
                            return g
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: b },
                                      r().createElement(
                                          'div',
                                          { style: A ? B : D, className: 'ProgressBarDeltaSimple_delta_99' },
                                          r().createElement(F, { size: s }),
                                      ),
                                  );
                        },
                    ),
                    w = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(D, {
                                    size: t,
                                    lineRef: a,
                                    disabled: s,
                                    isComplete: o,
                                    baseStyles: m,
                                }),
                                u >= 0 &&
                                    r().createElement(v, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: u,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    S = (e) => (e ? { left: 0 } : { right: 0 }),
                    y = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    T = (e) => ({ transitionDuration: `${e}ms` }),
                    x = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: o,
                            to: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                            className: m,
                        }) => {
                            const _ = i < a,
                                d = (0, n.useState)(h.Idle),
                                E = d[0],
                                g = d[1],
                                A = E === h.End,
                                p = E === h.Idle,
                                B = E === h.Grow,
                                D = E === h.Shrink,
                                b = (0, n.useCallback)(
                                    (e) => {
                                        (g(e), c && c(e));
                                    },
                                    [c],
                                ),
                                C = (0, n.useCallback)(
                                    (e, t) =>
                                        (0, f.F)(() => {
                                            b(e);
                                        }, t),
                                    [b],
                                );
                            (0, n.useEffect)(() => {
                                if (!u)
                                    return p
                                        ? C(h.Grow, t)
                                        : B
                                          ? C(h.Shrink, e)
                                          : D
                                            ? C(h.End, e)
                                            : void (A && l && l());
                            }, [C, u, A, B, p, D, l, t, e]);
                            const v = (0, n.useMemo)(() => Object.assign({ width: '100%' }, T(e), S(_)), [_, e]),
                                w = (0, n.useMemo)(() => Object.assign({ width: '0%' }, T(e), S(_)), [_, e]),
                                x = (0, n.useMemo)(() => Object.assign({ width: '0%' }, y(_, a), T(e)), [a, _, e]),
                                R = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - a)}%` }, y(_, a), T(e)),
                                    [a, _, i, e],
                                );
                            if (A) return null;
                            const k = s()(
                                'ProgressBarDeltaGrow_base_7e',
                                m,
                                _ && 0 === i && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return r().createElement(
                                'div',
                                { style: p ? x : R, className: k },
                                r().createElement(
                                    'div',
                                    { style: D ? w : v, className: 'ProgressBarDeltaGrow_glow_68' },
                                    r().createElement(F, { size: o }),
                                ),
                            );
                        },
                    ),
                    k = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < u,
                                _ = (0, n.useState)(!1),
                                d = _[0],
                                E = _[1],
                                g = (0, n.useCallback)(
                                    (e) => {
                                        (e === h.Shrink && E(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                A = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                p = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(D, {
                                    size: t,
                                    lineRef: a,
                                    disabled: s,
                                    isComplete: o,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: d ? p : A,
                                }),
                                u >= 0 &&
                                    r().createElement(x, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: g,
                                        freezed: i.freezed,
                                        onEndAnimation: l,
                                        from: u,
                                        size: t,
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
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        N.apply(this, arguments)
                    );
                }
                const L = (0, n.memo)((e) => {
                        let t = e.onComplete,
                            u = e.onEndAnimation,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, M);
                        const s = (0, n.useState)(!1),
                            o = s[0],
                            i = s[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== o && i(e), e && t && t(), u && u());
                            }, [o, t, u, a.to]);
                        switch (a.animationSettings.type) {
                            case g.Simple:
                                return r().createElement(w, N({}, a, { onEndAnimation: l, isComplete: o }));
                            case g.Growing:
                                return r().createElement(k, N({}, a, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    P = ['onEndAnimation'];
                function O() {
                    return (
                        (O =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        O.apply(this, arguments)
                    );
                }
                const I = (0, n.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, P);
                    const a = (0, n.useRef)({}),
                        s = (0, n.useCallback)(() => {
                            ((a.current.from = void 0), t && t());
                        }, [t]),
                        o = 'number' == typeof a.current.from ? a.current.from : u.from;
                    return (
                        (a.current.from = o),
                        r().createElement(L, O({}, u, { onEndAnimation: s, key: `${o}-${u.to}`, from: o }))
                    );
                });
                function H() {
                    return (
                        (H =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        H.apply(this, arguments)
                    );
                }
                const U = (0, n.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: u,
                            disabled: n,
                            deltaFrom: a,
                            animationSettings: s,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (a === t)
                                return r().createElement(b, {
                                    key: `${a}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: u,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: a,
                                to: t,
                                size: e,
                                lineRef: u,
                                disabled: n,
                                animationSettings: s,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return s.withStack
                                ? r().createElement(I, c)
                                : r().createElement(L, H({ key: `${a}-${t}` }, c));
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
                    });
                var W = u(7515);
                const j = (e, t, u) => ('number' == typeof u ? ((0, W.u)(0, t, u) / t) * 100 : e),
                    G = {
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
                    z = {
                        freezed: !1,
                        withStack: !1,
                        type: g.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Y = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = G,
                            size: u = E.Default,
                            animationSettings: a = z,
                            disabled: o = !1,
                            withoutBackground: i = !1,
                            progressBarBackgroundClassMix: l,
                            value: c,
                            deltaFrom: m,
                            lineRef: _,
                            onChangeAnimationState: g,
                            onEndAnimation: p,
                            onComplete: F,
                        }) => {
                            const B = ((e, t, u) =>
                                (0, n.useMemo)(() => {
                                    const n = ((0, W.u)(0, t, e) / t) * 100;
                                    return { value: n, deltaFrom: j(n, t, u) };
                                }, [u, t, e]))(c, e, m);
                            return r().createElement(
                                'div',
                                { className: s()(d.base, d[`base__${u}`]), style: $(t) },
                                !i && r().createElement(A, { size: u, classMix: l }),
                                r().createElement(U, {
                                    size: u,
                                    lineRef: _,
                                    disabled: o,
                                    value: B.value,
                                    deltaFrom: B.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: p,
                                    onChangeAnimationState: g,
                                    onComplete: F,
                                }),
                            );
                        },
                    );
                var V = u(3649),
                    X = u(2862),
                    q = u(1558),
                    Z = u(5415),
                    K = u(9480),
                    Q = u(5983),
                    J = u(5989);
                const ee = (0, i.Pi)(() => {
                        const e = _().model.rewards.get(),
                            t = (0, Z.GS)().mediaSize === Z.cJ.ExtraSmall ? X.h2.Small : X.h2.Big;
                        return r().createElement(
                            'div',
                            { className: 'Rewards_base_11' },
                            K.UI(e, (e, u) =>
                                r().createElement(
                                    'div',
                                    { key: u, className: 'Rewards_reward_f2' },
                                    r().createElement(J.I, {
                                        item: Q.ob.RewardTooltip,
                                        info: e.name,
                                        parentScreen: Q.RM.ProgressView,
                                        name: e.name,
                                        size: t,
                                        image: (0, q.ry)(e, t),
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
                    te = (0, n.memo)(ee),
                    ue = 'Content_base_28',
                    ne = 'Content_base__infoContainer_5d',
                    re = 'Content_infoLabel_f6',
                    ae = (0, n.memo)(
                        ({ frontlineState: e, isMaxLevel: t, level: u, currentPoints: a, neededPoints: i }) => {
                            const l = u + 1,
                                c = e === o.c.Finished,
                                m = e === o.c.Active || e === o.c.Frozen,
                                _ = (0, n.useMemo)(() => (0, V.uF)(R.strings.fl_progress.rewardFor(), { lvl: l }), [l]);
                            return e === o.c.Announce
                                ? r().createElement(
                                      'div',
                                      { className: s()(ue, ne) },
                                      r().createElement(
                                          'div',
                                          { className: re },
                                          R.strings.fl_progress.info.gameplayDescription(),
                                      ),
                                      r().createElement(
                                          'div',
                                          { className: re },
                                          R.strings.fl_progress.info.rewardsDescription(),
                                      ),
                                  )
                                : t
                                  ? r().createElement(
                                        'div',
                                        { className: s()(ue, ne) },
                                        r().createElement(
                                            'div',
                                            { className: re },
                                            R.strings.fl_progress.info.maxLevelReached(),
                                        ),
                                    )
                                  : r().createElement(
                                        'div',
                                        { className: s()(ue, c && 'Content_base__finished_16') },
                                        r().createElement(
                                            'div',
                                            { className: 'Content_progressBar_4d' },
                                            r().createElement(
                                                'div',
                                                { className: 'Content_levels_aa' },
                                                r().createElement('div', { className: 'Content_levelCurrent_43' }, u),
                                                r().createElement(
                                                    'div',
                                                    { className: 'Content_exp_a4' },
                                                    r().createElement(
                                                        'div',
                                                        { className: 'Content_currentPoints_36' },
                                                        a + ' ',
                                                    ),
                                                    r().createElement(
                                                        'div',
                                                        { className: 'Content_needPoints_91' },
                                                        `/ ${i}`,
                                                    ),
                                                    r().createElement('div', { className: 'Content_levelIcon_86' }),
                                                ),
                                                r().createElement('div', { className: 'Content_levelNext_d3' }, l),
                                            ),
                                            r().createElement(Y, { value: a, size: E.Big, maxValue: i, disabled: c }),
                                        ),
                                        m &&
                                            r().createElement(
                                                r().Fragment,
                                                null,
                                                r().createElement('div', { className: 'Content_rewardText_60' }, _),
                                                r().createElement(te, null),
                                            ),
                                    );
                        },
                    );
                let se, oe;
                var ie;
                let le, ce;
                (u(7078),
                    u(7739),
                    u(5262),
                    u(4090),
                    u(280),
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
                const me = {
                    [ce.Icon1]: [0],
                    [ce.Icon2]: [1, 2, 3, 4],
                    [ce.Icon3]: [5, 6, 7, 8, 9],
                    [ce.Icon4]: [10, 11, 12, 13, 14],
                    [ce.Icon5]: [15, 16, 17, 18, 19],
                    [ce.Icon6]: [20],
                };
                (se.B0, se.B1, se.B2);
                var _e = u(8154);
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
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                const ge = (0, n.memo)(({ level: e, isGlowVisible: t }) => {
                    const u = (0, n.useMemo)(
                            () => ({
                                header: R.strings.fl_progress.emblem.tooltip.header(),
                                body: (0, V.uF)(R.strings.fl_progress.emblem.tooltip.body(), { level: e }),
                            }),
                            [e],
                        ),
                        a = (0, n.useMemo)(
                            () => ((e) => Object.keys(me).find((t) => me[t].includes(e)) || ce.Icon1)(e),
                            [e],
                        ),
                        o = (0, n.useMemo)(
                            () => ({
                                backgroundImage: `url(${R.images.gui.maps.icons.epicBattles.metaLvls.c_320x320.$dyn(a)})`,
                            }),
                            [a],
                        );
                    return r().createElement(
                        'div',
                        { className: de.base },
                        r().createElement(
                            _e.l,
                            Ee({}, u, { item: Q.ob.EpicWidgetTooltip, parentScreen: Q.RM.ProgressView }),
                            r().createElement(
                                'div',
                                null,
                                t && r().createElement('div', { className: de.glow }),
                                r().createElement(
                                    'div',
                                    { className: s()(de.icon, de[`icon__${a}`]), style: o },
                                    e > 0 && r().createElement('div', { className: de.level }, e),
                                ),
                            ),
                        ),
                    );
                });
                var Ae = u(3457);
                const pe = 'ShopBanner_line_0c',
                    Fe = (0, n.memo)(() => {
                        const e = _().controls;
                        return r().createElement(
                            'div',
                            { className: 'ShopBanner_base_1c' },
                            r().createElement('div', { className: s()(pe, 'ShopBanner_line__top_0d') }),
                            r().createElement('div', { className: s()(pe, 'ShopBanner_line__bottom_6f') }),
                            r().createElement(
                                'div',
                                { className: 'ShopBanner_desc_5c' },
                                R.strings.fl_progress.banner.text(),
                            ),
                            r().createElement(
                                Ae.u5,
                                { onClick: e.shopClick, type: Ae.L$.main, mixClass: 'ShopBanner_button_9a' },
                                r().createElement(
                                    'div',
                                    { className: 'ShopBanner_label_0c' },
                                    ' ',
                                    R.strings.fl_progress.banner.button(),
                                ),
                            ),
                        );
                    });
                var Be = u(7044),
                    De = u(3415),
                    be = u(8045);
                let fe, he, Ce;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(fe || (fe = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(he || (he = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(Ce || (Ce = {})));
                const ve = { [Ce.NBSP]: fe.NoBreakSymbol, [Ce.ZWNBSP]: fe.NoBreakSymbol, [Ce.NEW_LINE]: fe.LineBreak },
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
                    ye = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? we[n]
                                ? r().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: we[n] },
                                      e,
                                  )
                                : r().createElement('span', { key: u, 'data-block-type': t.blockType, style: Se(n) }, e)
                            : r().createElement('span', { key: u, 'data-block-type': t.blockType }, e);
                    },
                    Te = {
                        [fe.Word]: ye,
                        [fe.NoBreakSymbol]: ye,
                        [fe.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            r().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => r().createElement(r().Fragment, { key: u }, e)),
                            ),
                        [fe.LineBreak]: ({ key: e }) =>
                            r().createElement('span', {
                                key: e,
                                'data-block-type': fe.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [fe.NewLine]: ({ elementList: e, key: t }) =>
                            r().createElement(
                                'span',
                                { key: t, 'data-block-type': fe.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [fe.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            r().createElement(
                                'span',
                                {
                                    key: t,
                                    'data-block-type': fe.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    xe = (e, t, u) => {
                        const n = [];
                        return (
                            e.childList.forEach((r, a) => {
                                const s = `${u}_${a}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        t = e.blockType,
                                        u = xe(e, Te[t], s);
                                    n.push(...u);
                                } else n.push(t({ elementList: [r], textBlock: e, key: s }));
                            }),
                            n
                        );
                    },
                    Re = (e, t, u, n) => {
                        let r = t.exec(e),
                            a = 0;
                        for (; r;) (a !== r.index && u(e.slice(a, r.index)), n(r), (a = t.lastIndex), (r = t.exec(e)));
                        a !== e.length && u(e.slice(a));
                    },
                    ke = (e) => {
                        const t = /[\s\u002d]/g;
                        let u = t.exec(e);
                        if (!u) return [e];
                        const n = [];
                        let r = 0;
                        for (; u;) (n.push(e.slice(r, t.lastIndex)), (r = t.lastIndex), (u = t.exec(e)));
                        return (r !== e.length && n.push(e.slice(r)), n);
                    },
                    Me = (e, t = '') => {
                        const u = [];
                        return (
                            Re(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    u.push({ blockType: fe.Word, colorTag: t, childList: ke(e) });
                                },
                                (e) => {
                                    const n = e[0],
                                        r = ve[n.charAt(0)];
                                    r === fe.LineBreak
                                        ? u.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: fe.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: fe.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(n),
                                          )
                                        : u.push({ blockType: r, colorTag: t, childList: [n] });
                                },
                            ),
                            u
                        );
                    },
                    Ne = (e, t, u = '') => {
                        const n = [];
                        return (
                            Re(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    n.push(...Me(e, u));
                                },
                                (e) => {
                                    const r = e[1],
                                        a = void 0 === t[r] ? e[0] : t[r];
                                    'string' == typeof a || 'number' == typeof a
                                        ? n.push(...Me(String(a), u))
                                        : n.push({ blockType: fe.Binding, colorTag: u, childList: [a] });
                                },
                            ),
                            n
                        );
                    },
                    Le = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === fe.NoBreakWrapper) (e.childList.push(n), u.push(e));
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && u.push(e),
                                u.push({ blockType: fe.NoBreakWrapper, colorTag: '', childList: [t, n] }));
                        }
                        return (t.childList.length > 0 && u.push(t), u);
                    },
                    Pe = (e, t = {}) => {
                        if (!e) return [];
                        const u = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === fe.NoBreakSymbol
                                        ? ((u = !0), t.push(...Le(t.pop(), e)))
                                        : (u ? t.push(...Le(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t) => {
                                const u = [];
                                return (
                                    Re(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            u.push(...Ne(e, t));
                                        },
                                        (e) => {
                                            u.push(...Ne(e[2], t, e[1]));
                                        },
                                    ),
                                    u
                                );
                            })((0, V.Eg)((0, V.z4)(e)), t),
                        );
                        return ((e) => {
                            const t = [];
                            return (
                                e.forEach((e, u) => {
                                    t.push(
                                        ...((e, t) => {
                                            const u = [],
                                                n = e.blockType,
                                                r = Te[n],
                                                a = xe(e, r, t);
                                            return (
                                                n === fe.NoBreakWrapper
                                                    ? u.push(r({ elementList: a, textBlock: e, key: `${t}` }))
                                                    : u.push(...a),
                                                u
                                            );
                                        })(e, u),
                                    );
                                }),
                                t
                            );
                        })(u);
                    },
                    Oe = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    Ie = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    He = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = Ie(e, t),
                            r = e.textContent.length,
                            a = e.offsetWidth / r,
                            s = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / a);
                            return n >= u ? [!0, u + s] : [!1, n];
                        }
                        const o = Math.max(u + s, 0);
                        return r < o ? [!1, 0] : [!0, o];
                    },
                    Ue = (e, t, u, n, a, s) => {
                        let o = -1,
                            i = null;
                        for (let l = u; l >= 0; l--) {
                            const u = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === fe.LineBreak || c === fe.NewLine || c === fe.Binding) continue;
                            const m = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = He(u, n, a),
                                    c = e[0],
                                    _ = e[1];
                                if (!c) {
                                    _ > 0 && (a -= _);
                                    continue;
                                }
                                const d = m.slice(0, m.length - _) + s,
                                    E = t[l];
                                ((i = r().cloneElement(E, E.props, d)), (o = l));
                                break;
                            }
                            {
                                const e = u.children,
                                    c = t[l],
                                    _ = c.props.children,
                                    d = Ue(e, _, e.length - 1, n, a, s),
                                    E = d[0],
                                    g = d[1];
                                if (!(E < 0)) {
                                    const e = _.slice(0, E);
                                    ((i = r().cloneElement(c, c.props, e, g)), (o = l));
                                    break;
                                }
                                a -= m.length;
                            }
                        }
                        return [o, i];
                    },
                    $e = r().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: u,
                            binding: a,
                            isTooltipEnable: o = !1,
                            isTruncationAvailable: i = !1,
                            targetId: l,
                            justifyContent: c = he.FlexStart,
                            alignContent: m = he.FlexStart,
                            truncateIdentify: _ = '...',
                        }) => {
                            const d = (0, n.useRef)(null),
                                E = (0, n.useRef)({ height: 0, width: 0 }),
                                g = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                A = g[0],
                                p = g[1],
                                F = (0, n.useMemo)(() => Pe(e, a), [a, e]),
                                B = (0, n.useMemo)(() => {
                                    if (o && A.isTruncated)
                                        return {
                                            args: { text: e, stringifyKwargs: a ? JSON.stringify(a) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [a, o, l, e, A.isTruncated]),
                                D = (0, n.useCallback)(
                                    (e) => {
                                        ((E.current.width = e.contentRect.width),
                                            (E.current.height = e.contentRect.height));
                                        const t = ((e, t, u, n = '...') => {
                                                const r = [...t],
                                                    a = e.current;
                                                if (!a) return [r, !1];
                                                const s = u.height,
                                                    o = u.width,
                                                    i = a.lastElementChild;
                                                if (!Oe(i, s) && Ie(i, o) <= 0) return [r, !1];
                                                const l = a.children,
                                                    c = ((e, t) => {
                                                        let u = 0,
                                                            n = e.length - 1;
                                                        for (; n - u >= 0;) {
                                                            const r = u + Math.ceil(0.5 * (n - u));
                                                            Oe(e[r], t) ? (n = r - 1) : (u = r + 1);
                                                        }
                                                        return u - 1;
                                                    })(l, s);
                                                if (c < 0) return [r, !1];
                                                const m = Ue(l, r, c, o, n.length, n),
                                                    _ = m[0],
                                                    d = m[1];
                                                return (d && (r.splice(_, 1, d), r.splice(_ + 1)), [r, !0]);
                                            })(d, F, E.current, _),
                                            n = t[0],
                                            r = t[1];
                                        (p({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), u && u(r));
                                    },
                                    [u, _, F],
                                ),
                                b = (0, n.useMemo)(() => ({ justifyContent: c, alignContent: m }), [m, c]);
                            return (
                                ((e, t, u = !0) => {
                                    const r = (0, n.useCallback)(
                                        (e) => {
                                            const u = e[0];
                                            t && t(u);
                                        },
                                        [t],
                                    );
                                    (0, n.useEffect)(() => {
                                        if (!e.current || !u) return;
                                        const t = new be.Z((e) => r(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [r, u, e]);
                                })(d, D, i),
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            'ExtendedText_base_71',
                                            t,
                                            'ExtendedText_base__zeroPadding_25',
                                            i && 'ExtendedText_base__isTruncationAvailable_5b',
                                        ),
                                        style: b,
                                    },
                                    r().createElement('div', { className: 'ExtendedText_unTruncated_b8', ref: d }, F),
                                    r().createElement(
                                        De.l,
                                        { tooltipArgs: B },
                                        r().createElement(
                                            'div',
                                            {
                                                className: s()(
                                                    'ExtendedText_truncated_97',
                                                    !A.isTruncateFinished && i && 'ExtendedText_truncated__hide_31',
                                                ),
                                                style: b,
                                            },
                                            A.isTruncateFinished && i ? A.elementList : F,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    We = (0, n.memo)(({ duration: e }) => {
                        const t =
                            e >= 0
                                ? (u = (0, Be.f8)(e)).days > 0
                                    ? (0, V.WU)(R.strings.common.duration.days(), { days: u.days })
                                    : u.hours > 0
                                      ? (0, V.WU)(R.strings.common.duration.hours(), { hours: u.hours })
                                      : u.minutes > 0
                                        ? (0, V.WU)(R.strings.common.duration.minutes(), { minutes: u.minutes })
                                        : (0, V.WU)(R.strings.common.duration.seconds(), { seconds: u.seconds })
                                : R.strings.common.duration.unlimited();
                        var u;
                        return r().createElement('span', null, t);
                    });
                var je = u(728);
                const Ge = (0, n.memo)(({ isDateFormat: e, pendingDate: t, countdownSeconds: u }) =>
                        e
                            ? r().createElement(r().Fragment, null, (0, Be.e1)(t, je.U.FULL_DATE, !0))
                            : r().createElement(We, { duration: u }),
                    ),
                    ze = R.strings.fl_progress.subTitle,
                    Ye = {
                        [o.c.Announce]: ze.announce,
                        [o.c.Active]: ze.active,
                        [o.c.Frozen]: ze.active,
                        [o.c.Finished]: ze.finished,
                    },
                    Ve = (0, n.memo)(({ pendingDate: e, countdownSeconds: t, frontlineState: u }) => {
                        const a = (0, n.useMemo)(() => {
                            if (u === o.c.Finished) return { text: ze.finished() };
                            {
                                const n = t > Be.IZ,
                                    a = Ye[u];
                                return {
                                    text: n ? a.at() : a.countdown(),
                                    binding: {
                                        left: r().createElement(Ge, {
                                            countdownSeconds: t,
                                            pendingDate: e,
                                            isDateFormat: n,
                                        }),
                                    },
                                };
                            }
                        }, [e, t, u]);
                        return r().createElement('div', { className: 'SubTitle_base_48' }, r().createElement($e, a));
                    }),
                    Xe = R.strings.fl_progress.title,
                    qe = (0, i.Pi)(() => {
                        const e = _().model.root.get(),
                            t = e.level,
                            u = e.isMaxLevel,
                            n = e.pendingDate,
                            a = e.countdownSeconds,
                            i = e.frontlineState,
                            c = e.neededPoints,
                            m = e.currentPoints,
                            d = e.isShopBannerVisible,
                            E = i === o.c.Active || i === o.c.Frozen,
                            g = u && E;
                        return r().createElement(
                            'div',
                            { className: 'ProgressViewApp_base_3e' },
                            r().createElement(
                                l.V,
                                { text: u ? Xe.complete() : Xe.inProgress(), classMix: 'ProgressViewApp_pageTitle_5f' },
                                r().createElement(Ve, {
                                    pendingDate: n,
                                    countdownSeconds: a,
                                    frontlineState: i,
                                    classMix: 'ProgressViewApp_subTitle_5e',
                                }),
                            ),
                            r().createElement(
                                'div',
                                {
                                    className: s()(
                                        'ProgressViewApp_content_73',
                                        d && 'ProgressViewApp_content__withBanner_09',
                                    ),
                                },
                                r().createElement(ge, { level: m > 0 || E ? t : 0, isGlowVisible: g }),
                                r().createElement(ae, {
                                    frontlineState: i,
                                    isMaxLevel: u,
                                    level: t,
                                    neededPoints: c,
                                    currentPoints: m,
                                }),
                            ),
                            d &&
                                r().createElement(
                                    'div',
                                    { className: 'ProgressViewApp_banner_b8' },
                                    r().createElement(Fe, null),
                                ),
                        );
                    }),
                    Ze = R.views.frontline.lobby.ProgressView('resId'),
                    Ke = () => r().createElement(m, { options: { rootId: Ze } }, r().createElement(qe, null));
            },
            5660: (e, t, u) => {
                'use strict';
                u.d(t, { o: () => O, M: () => I });
                var n = u(6179),
                    r = u.n(n),
                    a = u(5983),
                    s = u(6483),
                    o = u.n(s),
                    i = u(4090),
                    l = u(2056),
                    c = u(7727);
                const m = {
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
                let _;
                !(function (e) {
                    ((e.Small = 'small'), (e.Big = 'big'));
                })(_ || (_ = {}));
                const d = ({
                    label: e,
                    takeCount: t,
                    icon: u,
                    width: a,
                    height: s,
                    isDisabled: _,
                    isHighlighted: d,
                    isYellow: E,
                    size: g,
                    onClick: A,
                    onMouseUp: p,
                    onMouseEnter: F,
                    onMouseLeave: B,
                    onMouseDown: D,
                    children: b,
                    soundHover: f,
                    soundClick: h,
                    counter: C,
                    tokensCount: v = 0,
                }) => {
                    const w = (0, n.useState)(!1),
                        S = w[0],
                        y = w[1],
                        T = (0, n.useState)(!1),
                        x = T[0],
                        k = T[1],
                        M = (e, t) => {
                            e && t && e(t);
                        },
                        N = o()(
                            m.base,
                            g && m[`base__${g}`],
                            E && m.base__yellow,
                            _ && m.base__disabled,
                            S && !_ && m.base__hover,
                            x && m.base__click,
                            d && !_ && m.base__highlight,
                        ),
                        L = o()(m.glowBorder, m.glowBorder__hover),
                        P = o()(m.glowInner, m.glowInner__duplicate),
                        O = (0, n.useMemo)(() => {
                            const e = {};
                            return (a && (e.width = `${a}rem`), s && (e.height = `${s}rem`), e);
                        }, [s, a]),
                        I = (0, n.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]);
                    return r().createElement(
                        'div',
                        {
                            className: N,
                            style: O,
                            onMouseEnter:
                                ((H = F),
                                (e) => {
                                    _ || (M(H, e), y(!0), (0, c.G)(f));
                                }),
                            onMouseLeave: ((e) => (t) => {
                                _ || (M(e, t), y(!1), k(!1));
                            })(B),
                            onMouseDown: ((e) => (t) => {
                                _ || (M(e, t), 0 === t.button && k(!0));
                            })(D),
                            onMouseUp: ((e) => (t) => {
                                _ || (M(e, t), 0 === t.button && k(!1));
                            })(p),
                            onClick: ((e) => (t) => {
                                _ || ((0, c.G)(h), M(e, t));
                            })(A),
                        },
                        d &&
                            !_ &&
                            r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(
                                    'div',
                                    { className: m.glow },
                                    r().createElement('div', { className: m.glowInner }),
                                    r().createElement('div', { className: P }),
                                ),
                                r().createElement('div', { className: m.highlight }),
                                r().createElement('div', { className: m.glowBorder }),
                                r().createElement('div', { className: L }),
                            ),
                        r().createElement(
                            'div',
                            { className: m.content },
                            _ && r().createElement('div', { className: m.disabledBackground }),
                            b ||
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    u
                                        ? r().createElement('div', { className: m.icon, style: I })
                                        : r().createElement('div', { className: m.count }, t),
                                    r().createElement('div', { className: m.label }, e),
                                ),
                            Boolean(C) &&
                                !_ &&
                                r().createElement(
                                    'div',
                                    { className: m.counter },
                                    r().createElement(i.A, { value: C }),
                                ),
                            v > 0 &&
                                r().createElement(
                                    l.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassCoinTooltipView('resId'),
                                    },
                                    r().createElement('div', { className: m.tokensCount }, v),
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
                var E = u(3403),
                    g = u(8154),
                    A = u(3854);
                const p = (0, u(3215).q)()(
                        ({ observableModel: e }) => ({ root: e.object(), rewards: e.array('rewards') }),
                        ({ externalModel: e }) => ({ claimRewards: e.createCallbackNoArgs('onClaimRewards') }),
                    ),
                    F = p[0],
                    B = p[1];
                var D = u(9480),
                    b = u(2862),
                    f = u(5415),
                    h = u(1558);
                let C;
                !(function (e) {
                    ((e.Static = 'static'), (e.Claimable = 'claimable'));
                })(C || (C = {}));
                var v = u(5989);
                const w = (0, n.memo)(
                        ({
                            claimState: e,
                            reward: t,
                            rewardSize: u,
                            isDisable: n,
                            isBattlePassRewardDisable: s,
                            classMix: i,
                        }) => {
                            const l = e === C.Claimable,
                                c = t.name,
                                m = t.value,
                                _ = t.tooltipId,
                                d = t.tooltipContentId;
                            return r().createElement(
                                'div',
                                {
                                    className: o()(
                                        'FrontlineReward_base_e2',
                                        n && 'FrontlineReward_base__disable_dc',
                                        !n && s && 'FrontlineReward_base__disableBattlePassReward_5a',
                                        i,
                                    ),
                                },
                                l &&
                                    r().createElement(
                                        'div',
                                        { className: 'FrontlineReward_animWrapper_23' },
                                        r().createElement('div', { className: 'FrontlineReward_glow_0d' }),
                                        r().createElement('div', { className: 'FrontlineReward_glowReverse_42' }),
                                    ),
                                r().createElement(v.I, {
                                    item: a.ob.RewardTooltip,
                                    info: c,
                                    parentScreen: a.RM.RewardsView,
                                    name: c,
                                    image: (0, h.ry)(t, b.h2.Big),
                                    size: u,
                                    value: m,
                                    valueType: (0, h.p3)(c),
                                    tooltipArgs: (0, h.pI)({ tooltipId: _ }, Number(d), {
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
                var y;
                !(function (e) {
                    ((e.None = 'none'), (e.White = 'white'), (e.Gold = 'gold'));
                })(y || (y = {}));
                const T = ({ levelsRange: e, frontlineLevel: t, isBattlePassComplete: u, isLastCol: n }) => {
                        const a = (0, f.GS)(),
                            s = a.mediaSize,
                            i = a.remScreenHeight,
                            l = s === f.cJ.ExtraSmall || i < 844 ? b.h2.Small : b.h2.Big,
                            c = e.lvlStart,
                            m = e.lvlEnd,
                            _ = e.rewards,
                            d = ((e, t, u, n) => {
                                switch (!0) {
                                    case e <= u && u <= t:
                                        return y.Gold;
                                    case n:
                                        return y.White;
                                    default:
                                        return y.None;
                                }
                            })(c, m, t, n),
                            E = t < c;
                        return r().createElement(
                            'div',
                            { className: S.base },
                            r().createElement('div', { className: S.bg }),
                            d && r().createElement('div', { className: o()(S.highlight, S[`highlight__${d}`]) }),
                            r().createElement(
                                'span',
                                { className: o()(S.levels, E && S.levels__disable) },
                                c !== m ? `${c}-${m}` : c,
                            ),
                            _.map(({ value: e, id: t }) =>
                                r().createElement(
                                    r().Fragment,
                                    { key: t },
                                    r().createElement(w, {
                                        reward: e,
                                        rewardSize: l,
                                        classMix: S.reward,
                                        isDisable: E,
                                        isBattlePassRewardDisable: u && e.name === b.E4.BattlePassPoints,
                                    }),
                                ),
                            ),
                        );
                    },
                    x = (0, E.Pi)(() => {
                        const e = B().model,
                            t = e.root.get(),
                            u = t.frontlineLevel,
                            n = t.isBattlePassComplete,
                            a = e.rewards.get();
                        return r().createElement(
                            'div',
                            { className: 'RewardTable_base_cf' },
                            D.UI(a, (e, t) =>
                                r().createElement(
                                    r().Fragment,
                                    { key: `${e.lvlStart}-${e.lvlEnd}` },
                                    r().createElement(T, {
                                        levelsRange: e,
                                        frontlineLevel: u,
                                        isBattlePassComplete: n,
                                        isLastCol: t === a.length - 1,
                                    }),
                                ),
                            ),
                        );
                    });
                var k = u(4959);
                const M = 'SubTitle_base_8d',
                    N = R.strings.fl_rewards.subtitle,
                    L = (0, n.memo)(({ level: e, rewardsCount: t, frontlineState: u }) =>
                        u !== k.c.Finished
                            ? r().createElement('div', { className: M }, N.active())
                            : r().createElement(
                                  'div',
                                  { className: M },
                                  N.finished.title(),
                                  e > 1 &&
                                      (t > 0
                                          ? N.finished.rewards()
                                          : r().createElement(
                                                'div',
                                                { className: 'SubTitle_noRewards_f1' },
                                                r().createElement('div', { className: 'SubTitle_icon_0f' }),
                                                ' ',
                                                N.finished.noRewards(),
                                            )),
                              ),
                    ),
                    P = (0, E.Pi)(() => {
                        const e = B(),
                            t = e.model,
                            u = e.controls,
                            s = t.root.get(),
                            o = s.selectableRewardsCount,
                            i = s.frontlineLevel,
                            l = s.frontlineState,
                            c = (0, n.useCallback)(() => {
                                u.claimRewards();
                            }, [u]);
                        return r().createElement(
                            'div',
                            { className: 'RewardsViewApp_base_1c' },
                            r().createElement(
                                A.V,
                                { text: R.strings.fl_rewards.title(), classMix: 'RewardsViewApp_pageTitle_61' },
                                r().createElement(L, { level: i, rewardsCount: o, frontlineState: l }),
                            ),
                            r().createElement(
                                'div',
                                { className: 'RewardsViewApp_table_32' },
                                r().createElement(x, null),
                            ),
                            r().createElement(
                                'div',
                                { className: 'RewardsViewApp_claimButton_3d' },
                                o > 0 &&
                                    r().createElement(
                                        g.l,
                                        {
                                            targetId: R.views.frontline.lobby.RewardsView('resId'),
                                            item: a.ob.RewardsButtonTooltip,
                                            parentScreen: a.RM.RewardsView,
                                            body: R.strings.fl_rewards.chooseRewards.tooltip(),
                                        },
                                        r().createElement(d, {
                                            label: R.strings.fl_rewards.chooseRewards.label(),
                                            counter: o,
                                            icon: R.images.frontline.gui.maps.icons.rewards.claim_all(),
                                            isHighlighted: !0,
                                            size: _.Big,
                                            onClick: c,
                                        }),
                                    ),
                            ),
                        );
                    }),
                    O = R.views.frontline.lobby.RewardsView('resId'),
                    I = () => r().createElement(F, { options: { rootId: O } }, r().createElement(P, null));
            },
            3428: (e, t, u) => {
                'use strict';
                u.d(t, { R: () => Qe, J: () => Je });
                var n = {};
                (u.r(n),
                    u.d(n, {
                        Area: () => we,
                        Bar: () => he,
                        DefaultScroll: () => ve,
                        Direction: () => de,
                        defaultSettings: () => Ee,
                        useHorizontalScrollApi: () => Ae,
                    }));
                var r = {};
                (u.r(r), u.d(r, { Area: () => Ie, Bar: () => Le, Default: () => Oe, useVerticalScrollApi: () => Se }));
                var a = u(4029),
                    s = u(6179),
                    o = u.n(s),
                    i = u(6483),
                    l = u.n(i),
                    c = u(9887),
                    m = u.n(c),
                    _ = u(5415);
                const d = ['xl', 'lg', 'md', 'sm', 'xs'],
                    E = (e) => e.includes('_') && ((e) => d.includes(e))(e.split('_').at(-1)),
                    g = [_.cJ.ExtraLarge, _.cJ.Large, _.cJ.Medium, _.cJ.Small, _.cJ.ExtraSmall],
                    A = (e, t) =>
                        Object.keys(e).reduce((u, n) => {
                            if (n in u) return u;
                            if (E(n)) {
                                const r = n.split('_').slice(0, -1).join('_');
                                if (r in u) return u;
                                const a = g.indexOf(t),
                                    s = (-1 !== a ? d.slice(a) : [])
                                        .map((e) => r + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    o = s ? e[s] : void 0;
                                return ((u[r] = void 0 !== o ? o : e[r]), u);
                            }
                            const r = e[n];
                            return (
                                void 0 === r ||
                                    ((e, t) => d.some((u) => void 0 !== t[`${e}_${u}`]))(n, e) ||
                                    (u[n] = r),
                                u
                            );
                        }, {}),
                    p = (e, t = A) => {
                        const u = (
                            (e, t = A) =>
                            (u) => {
                                const n = (0, _.GS)().mediaSize,
                                    r = (0, s.useMemo)(() => t(u, n), [u, n]);
                                return o().createElement(e, r);
                            }
                        )(e, t);
                        return o().memo((t) =>
                            Object.keys(t).some((e) => E(e) && void 0 !== t[e])
                                ? o().createElement(u, t)
                                : o().createElement(e, t),
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
                    B = [
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
                function D() {
                    return (
                        (D =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        D.apply(this, arguments)
                    );
                }
                Object.keys(m());
                const b = {
                        XL: { mt: F.mt__XL, mr: F.mr__XL, mb: F.mb__XL, ml: F.ml__XL },
                        LG: { mt: F.mt__LG, mr: F.mr__LG, mb: F.mb__LG, ml: F.ml__LG },
                        MDp: { mt: F.mt__MDp, mr: F.mr__MDp, mb: F.mb__MDp, ml: F.ml__MDp },
                        MD: { mt: F.mt__MD, mr: F.mr__MD, mb: F.mb__MD, ml: F.ml__MD },
                        SMp: { mt: F.mt__SMp, mr: F.mr__SMp, mb: F.mb__SMp, ml: F.ml__SMp },
                        SM: { mt: F.mt__SM, mr: F.mr__SM, mb: F.mb__SM, ml: F.ml__SM },
                        XS: { mt: F.mt__XS, mr: F.mr__XS, mb: F.mb__XS, ml: F.ml__XS },
                    },
                    f = (Object.keys(b), ['mt', 'mr', 'mb', 'ml']),
                    h = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    C = p((e) => {
                        let t = e.className,
                            u = e.width,
                            n = e.height,
                            r = e.m,
                            a = e.mt,
                            i = void 0 === a ? r : a,
                            c = e.mr,
                            m = void 0 === c ? r : c,
                            _ = e.mb,
                            d = void 0 === _ ? r : _,
                            E = e.ml,
                            g = void 0 === E ? r : E,
                            A = e.column,
                            p = e.row,
                            C = e.flexDirection,
                            v = void 0 === C ? (A ? 'column' : p && 'row') || void 0 : C,
                            w = e.flexStart,
                            S = e.center,
                            y = e.flexEnd,
                            T = e.spaceBetween,
                            x = e.spaceAround,
                            R = e.justifyContent,
                            k =
                                void 0 === R
                                    ? (w ? 'flex-start' : S && 'center') ||
                                      (y && 'flex-end') ||
                                      (T && 'space-between') ||
                                      (x && 'space-around') ||
                                      void 0
                                    : R,
                            M = e.alignItems,
                            N = void 0 === M ? (w ? 'flex-start' : S && 'center') || (y && 'flex-end') || void 0 : M,
                            L = e.alignSelf,
                            P = e.wrap,
                            O = e.flexWrap,
                            I = void 0 === O ? (P ? 'wrap' : void 0) : O,
                            H = e.grow,
                            U = e.shrink,
                            $ = e.flex,
                            W = void 0 === $ ? (H || U ? `${H ? 1 : 0} ${U ? 1 : 0} auto` : void 0) : $,
                            j = e.style,
                            G = e.children,
                            z = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, B);
                        const Y = (0, s.useMemo)(() => {
                                const e = { mt: i, mr: m, mb: d, ml: g },
                                    t = ((e) =>
                                        f.reduce((t, u) => {
                                            const n = e[u];
                                            return n && 'number' != typeof n ? t.concat(b[!0 === n ? 'MD' : n][u]) : t;
                                        }, []))(e),
                                    r = ((e) =>
                                        f.reduce((t, u) => {
                                            const n = e[u];
                                            return ('number' == typeof n && (t[h[u]] = n + 'rem'), t);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, j, r, {
                                        width: void 0 !== u && 'number' == typeof u ? u + 'rem' : u,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: W,
                                        alignSelf: L,
                                        display: v || N ? 'flex' : void 0,
                                        flexDirection: v,
                                        flexWrap: I,
                                        justifyContent: k,
                                        alignItems: N,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [u, n, i, m, d, g, j, W, L, v, I, k, N]),
                            V = Y.computedStyle,
                            X = Y.computedClassNames;
                        return o().createElement('div', D({ className: l()(F.base, ...X, t), style: V }, z), G);
                    });
                var v = u(280),
                    w = u(3532),
                    S = u.n(w);
                const y = {
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
                    T = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                Object.keys(m());
                const k = Object.keys(S()),
                    M = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    N = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    L = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    P =
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
                            'heading-H56': M,
                            'heading-H36': M,
                            'heading-H28': N,
                            'heading-H24': N,
                            'heading-H24R': N,
                            'heading-H22': N,
                            'heading-H20R': N,
                            'heading-H18': N,
                            'heading-H15': L,
                            'heading-H14': L,
                            'paragraph-P24': N,
                            'paragraph-P18': N,
                            'paragraph-P16': N,
                            'paragraph-P14': L,
                            'paragraph-P12': L,
                            'paragraph-P10': L,
                        }),
                    O =
                        (Object.keys(P),
                        (e) =>
                            e
                                ? ((e) => k.includes(e))(e)
                                    ? { colorClassName: y[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    I = p((e) => {
                        let t = e.text,
                            u = e.variant,
                            n = e.className,
                            r = e.color,
                            a = e.m,
                            i = e.mt,
                            c = void 0 === i ? a : i,
                            m = e.mr,
                            _ = void 0 === m ? a : m,
                            d = e.mb,
                            E = void 0 === d ? a : d,
                            g = e.ml,
                            A = void 0 === g ? a : g,
                            p = e.style,
                            F = e.format,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, T);
                        const D = (0, s.useMemo)(() => {
                                const e = O(r),
                                    t = e.colorClassName,
                                    u = e.colorStyle,
                                    n = void 0 === u ? {} : u;
                                return { computedStyle: Object.assign({}, p, n), colorClassName: t };
                            }, [p, r]),
                            b = D.computedStyle,
                            f = D.colorClassName;
                        return o().createElement(
                            C,
                            x(
                                {
                                    className: l()(y.base, u && y[u], f, n),
                                    style: b,
                                    mt: !0 === c ? P[u || 'paragraph-P16'].mt : c,
                                    mr: !0 === _ ? P[u || 'paragraph-P16'].mr : _,
                                    mb: !0 === E ? P[u || 'paragraph-P16'].mb : E,
                                    ml: !0 === A ? P[u || 'paragraph-P16'].ml : A,
                                },
                                B,
                            ),
                            void 0 !== F ? o().createElement(v.z, x({}, F, { text: t })) : t,
                        );
                    });
                var H = u(8089),
                    U = u(3138);
                let $;
                !(function (e) {
                    ((e.None = 'none'),
                        (e.Pillbox = 'pillbox'),
                        (e.Mortar = 'mortar'),
                        (e.Flamer = 'flamer'),
                        (e.Airship = 'airship'));
                })($ || ($ = {}));
                var W = u(3403);
                let j, G;
                (!(function (e) {
                    ((e[(e.W_1024 = 1024)] = 'W_1024'),
                        (e[(e.W_1280 = 1280)] = 'W_1280'),
                        (e[(e.W_2000 = 2e3)] = 'W_2000'),
                        (e[(e.W_2200 = 2200)] = 'W_2200'),
                        (e[(e.W_2560 = 2560)] = 'W_2560'));
                })(j || (j = {})),
                    (function (e) {
                        e[(e.H_1200 = 1200)] = 'H_1200';
                    })(G || (G = {})));
                const z = {
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
                    Y = {
                        DEFAULT_VALUES: { mortar: -4, airship: -2, flamer: 2, pillbox: -1 },
                        1920: { pillbox: 0 },
                        2560: { mortar: -10, flamer: 4, pillbox: -2 },
                    },
                    V = R.strings.fl_supply_objects.page,
                    X = R.strings.fl_supply_objects.page.object,
                    q = R.images.frontline.gui.maps.icons.supplyObjects;
                var Z = u(3215),
                    K = u(4598),
                    Q = u(9480);
                const J = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? Q.UI(e, (e) => ('object' == typeof e ? J(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? J(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, t]) => [e, 'object' == typeof t ? J(t) : t]),
                                    )
                            : e,
                    ee = (e) => J(e);
                var te = u(3946);
                const ue = (0, Z.q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    supplyObjects: e.array('supplyObjects'),
                                    supplyParams: e.array('supplyParams'),
                                },
                                u = (0, te.Om)(() => ee(t.supplyObjects.get()), { equals: K.jv }),
                                n = (0, te.Om)(() => ee(t.supplyParams.get()), { equals: K.jv });
                            return Object.assign({}, t, { computes: { getSupplyObjects: u, getSupplyParams: n } });
                        },
                        ({ externalModel: e }) => ({
                            onSupplySelected: e.createCallback((e) => ({ supplyId: e }), 'onSupplySelected'),
                            onClose: e.createCallbackNoArgs('onClose'),
                        }),
                    ),
                    ne = ue[0],
                    re = ue[1];
                var ae = u(1856),
                    se = u(7515);
                const oe = [];
                function ie(e) {
                    const t = (0, s.useRef)(e);
                    return (
                        (0, s.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, s.useCallback)((...e) => (0, t.current)(...e), oe)
                    );
                }
                function le(e, t, u = []) {
                    const n = (0, s.useRef)(0),
                        r = (0, s.useCallback)(() => window.clearInterval(n.current), u || []);
                    (0, s.useEffect)(() => r, [r]);
                    const a = (null != u ? u : []).concat([t]);
                    return [
                        (0, s.useCallback)((u) => {
                            ((n.current = window.setInterval(() => e(u, !0), t)), e(u, !1));
                        }, a),
                        r,
                    ];
                }
                var ce = u(7727);
                function me(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                var _e = u(7030);
                let de;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(de || (de = {}));
                const Ee = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    ge = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: a = !1,
                    }) => {
                        const o = (e, u) => {
                            const n = t(e),
                                r = n[0],
                                a = n[1];
                            return (0, se.u)(r, a, u);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? Ee : l,
                                m = (0, s.useRef)(null),
                                _ = (0, s.useRef)(null),
                                d = (() => {
                                    const e = (0, s.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        n = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        r = (e, ...u) => {
                                            for (
                                                var n,
                                                    r = (function (e, t) {
                                                        var u =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (u) return (u = u.call(e)).next.bind(u);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (u = (function (e, t) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return me(e, t);
                                                                    var u = Object.prototype.toString
                                                                        .call(e)
                                                                        .slice(8, -1);
                                                                    return (
                                                                        'Object' === u &&
                                                                            e.constructor &&
                                                                            (u = e.constructor.name),
                                                                        'Map' === u || 'Set' === u
                                                                            ? Array.from(e)
                                                                            : 'Arguments' === u ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    u,
                                                                                )
                                                                              ? me(e, t)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (t && e && 'number' == typeof e.length)
                                                        ) {
                                                            u && (e = u);
                                                            var n = 0;
                                                            return function () {
                                                                return n >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[n++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(t(e).values());
                                                !(n = r()).done;
                                            )
                                                (0, n.value)(...u);
                                        };
                                    return (0, s.useMemo)(() => ({ on: u, off: n, trigger: r }), []);
                                })(),
                                E = (function (e, t, u) {
                                    const n = (0, s.useMemo)(
                                        () =>
                                            (function (e, t, u, n) {
                                                let r,
                                                    a = !1,
                                                    s = 0;
                                                function o() {
                                                    r && clearTimeout(r);
                                                }
                                                function i(...i) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function m() {
                                                        ((s = Date.now()), u.apply(l, i));
                                                    }
                                                    a ||
                                                        (n && !r && m(),
                                                        o(),
                                                        void 0 === n && c > e
                                                            ? m()
                                                            : !0 !== t &&
                                                              (r = setTimeout(
                                                                  n
                                                                      ? function () {
                                                                            r = void 0;
                                                                        }
                                                                      : m,
                                                                  void 0 === n ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                                                    (i.cancel = function () {
                                                        (o(), (a = !0));
                                                    }),
                                                    i
                                                );
                                            })(u, e),
                                        t,
                                    );
                                    return ((0, s.useEffect)(() => n.cancel, [n]), n);
                                })(
                                    () => {
                                        U.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, _e.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (u(t, e), d.trigger('change', e), a && E());
                                    },
                                    onRest: (e) => d.trigger('rest', e),
                                    onStart: (e) => d.trigger('start', e),
                                    onPause: (e) => d.trigger('pause', e),
                                })),
                                A = g[0],
                                p = g[1],
                                F = (0, s.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const r = A.scrollPosition.get(),
                                            a = (null != (n = A.scrollPosition.goal) ? n : 0) - r;
                                        return o(e, t * u + a + r);
                                    },
                                    [A.scrollPosition],
                                ),
                                B = (0, s.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = m.current;
                                        n &&
                                            p.start({
                                                scrollPosition: o(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(n, A.scrollPosition.get()) },
                                            });
                                    },
                                    [p, c.animationConfig, A.scrollPosition],
                                ),
                                D = (0, s.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            u = _.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, c.step),
                                            a = F(t, e, n);
                                        B(a);
                                    },
                                    [B, F, c.step],
                                ),
                                b = (0, s.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && D(n(e)),
                                            m.current && d.trigger('mouseWheel', e, A.scrollPosition, t(m.current)));
                                    },
                                    [A.scrollPosition, D, d],
                                ),
                                f = ((e, t = []) => {
                                    const u = (0, s.useRef)(),
                                        n = (0, s.useCallback)((...t) => {
                                            (u.current && u.current(), (u.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, s.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        (0, ae.v)(() => {
                                            const e = m.current;
                                            e &&
                                                (B(o(e, A.scrollPosition.goal), { immediate: !0 }),
                                                d.trigger('resizeHandled'));
                                        }),
                                    [B, A.scrollPosition.goal],
                                ),
                                h = ie(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = o(e, A.scrollPosition.goal);
                                    (t !== A.scrollPosition.goal && B(t, { immediate: !0 }),
                                        d.trigger('recalculateContent'));
                                });
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', f),
                                    () => {
                                        window.removeEventListener('resize', f);
                                    }
                                ),
                                [f],
                            );
                            const C = (0, s.useCallback)((e) => d.trigger('isThumbDraggingChanged', e), [d]);
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? r(_.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? t(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: b,
                                    applyScroll: B,
                                    applyStepTo: D,
                                    contentRef: m,
                                    wrapperRef: _,
                                    scrollPosition: p,
                                    animationScroll: A,
                                    recalculateContent: h,
                                    handleIsThumbDragging: C,
                                    events: { on: d.on, off: d.off },
                                }),
                                [A.scrollPosition, B, D, C, d.off, d.on, h, b, p, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Ae = ge({
                        getBounds: (e) => {
                            var t, u;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (u = e.parentElement) ? void 0 : u.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? de.Next : de.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    pe = 'HorizontalBar_base__nonActive_82',
                    Fe = 'disable',
                    Be = { pending: !1, offset: 0 },
                    De = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    be = () => {},
                    fe = (e, t) => Math.max(20, e.offsetWidth * t),
                    he = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = De, onDrag: n = be }) => {
                        const r = (0, s.useRef)(null),
                            a = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            m = (0, s.useRef)(null),
                            _ = e.stepTimeout || 100,
                            d = (0, s.useState)(Be),
                            E = d[0],
                            g = d[1],
                            A = (0, s.useCallback)(
                                (e) => {
                                    (g(e),
                                        m.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current }));
                                },
                                [n],
                            ),
                            p = () => {
                                const t = c.current,
                                    u = m.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    l = (0, se.u)(0, 1, s / (r - n)),
                                    _ = (t.offsetWidth - fe(t, o)) * l;
                                ((u.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (a.current && i.current && c.current && m.current) {
                                            if (0 === e)
                                                return (
                                                    a.current.classList.add(Fe),
                                                    void i.current.classList.remove(Fe)
                                                );
                                            if (
                                                ((t = c.current),
                                                (u = m.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    a.current.classList.remove(Fe),
                                                    void i.current.classList.add(Fe)
                                                );
                                            var t, u;
                                            (a.current.classList.remove(Fe), i.current.classList.remove(Fe));
                                        }
                                    })(_));
                            },
                            F = ie(() => {
                                ((() => {
                                    const t = m.current,
                                        u = c.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && t && n && u)) return;
                                    const s = Math.min(1, n / a);
                                    ((t.style.width = `${fe(u, s)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(pe) : r.current.classList.remove(pe)));
                                })(),
                                    p());
                            });
                        ((0, s.useEffect)(() => (0, ae.v)(F)),
                            (0, s.useEffect)(
                                () =>
                                    (0, ae.v)(() => {
                                        const t = () => {
                                            p();
                                        };
                                        let u = be;
                                        const n = () => {
                                            (u(), (u = (0, ae.v)(F)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', F),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (u(),
                                                    e.events.off('recalculateContent', F),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, s.useEffect)(() => {
                                if (!E.pending) return;
                                const t = (t) => {
                                        var u;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const a = c.current,
                                            s = m.current;
                                        if (!r || !a || !s) return;
                                        const o = t.screenX - E.offset - a.getBoundingClientRect().x,
                                            i = (o / a.offsetWidth) * (null != (u = e.getContainerSize()) ? u : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i }));
                                    },
                                    u = () => {
                                        (window.removeEventListener('mousemove', t), A(Be));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u));
                                    }
                                );
                            }, [e, E.offset, E.pending, n, A]));
                        const B = le((t) => e.applyStepTo(t), _, [e]),
                            D = B[0],
                            b = B[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', b, !0),
                                () => document.removeEventListener('mouseup', b, !0)
                            ),
                            [b],
                        );
                        const f = (e) => {
                            e.target.classList.contains(Fe) || (0, ce.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()('HorizontalBar_base_49', t.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()('HorizontalBar_leftButton_5f', t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Fe) ||
                                        0 !== e.button ||
                                        ((0, ce.G)('play'), D(de.Next));
                                },
                                onMouseUp: b,
                                ref: a,
                                onMouseEnter: f,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()('HorizontalBar_track_0d', t.track),
                                    onMouseDown: (t) => {
                                        const n = m.current;
                                        n &&
                                            0 === t.button &&
                                            ((0, ce.G)('play'),
                                            t.target === n
                                                ? A({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x })
                                                : ((t) => {
                                                      const n = m.current,
                                                          r = e.contentRef.current;
                                                      if (!n || !r) return;
                                                      const a = u(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * t);
                                                  })(t.screenX > n.getBoundingClientRect().x ? de.Prev : de.Next));
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                o().createElement('div', { ref: m, className: l()('HorizontalBar_thumb_fd', t.thumb) }),
                                o().createElement('div', { className: l()('HorizontalBar_rail_32', t.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()('HorizontalBar_rightButton_03', t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Fe) ||
                                        0 !== e.button ||
                                        ((0, ce.G)('play'), D(de.Prev));
                                },
                                onMouseUp: b,
                                ref: i,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    Ce = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ve = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: a,
                        scrollClassName: i,
                        getStepByRailClick: c,
                        onDrag: m,
                    }) => {
                        const _ = (0, s.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: l()(Ce.base, e.base) });
                            }, [n]),
                            d = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: l()(Ce.defaultScroll, u), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(Ce.defaultScrollArea, r) },
                                o().createElement(we, { className: i, api: d, classNames: a }, e),
                            ),
                            o().createElement(he, { getStepByRailClick: c, api: t, onDrag: m, classNames: _ }),
                        );
                    },
                    we = ({ api: e, className: t, classNames: u, children: n, style: r }) => (
                        (0, s.useEffect)(() => (0, ae.v)(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(Ce.base, t), style: r },
                            o().createElement(
                                'div',
                                {
                                    className: l()(Ce.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: l()(Ce.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ((we.Bar = he),
                    (we.Default = ve),
                    (we.SeniorityAwards = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, s.useEffect)(() => (0, ae.v)(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(Ce.base, t) },
                            o().createElement(
                                'div',
                                { className: l()(Ce.wrapper, null == u ? void 0 : u.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: l()(Ce.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    )));
                const Se = ge({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? de.Next : de.Prev),
                    }),
                    ye = 'VerticalBar_base__nonActive_42',
                    Te = 'disable',
                    xe = () => {},
                    Re = { pending: !1, offset: 0 },
                    ke = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Me = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Ne = (e, t) => Math.max(20, e.offsetHeight * t),
                    Le = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = ke, onDrag: n = xe }) => {
                        const r = (0, s.useRef)(null),
                            a = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            m = (0, s.useRef)(null),
                            _ = e.stepTimeout || 100,
                            d = (0, s.useState)(Re),
                            E = d[0],
                            g = d[1],
                            A = (0, s.useCallback)(
                                (e) => {
                                    (g(e),
                                        m.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current }));
                                },
                                [n],
                            ),
                            p = ie(() => {
                                const t = m.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && t && u)) return;
                                const s = Math.min(1, n / a);
                                return (
                                    (t.style.height = `${Ne(u, s)}px`),
                                    t.classList.add('VerticalBar_thumb_32'),
                                    r.current &&
                                        (1 === s ? r.current.classList.add(ye) : r.current.classList.remove(ye)),
                                    s
                                );
                            }),
                            F = ie(() => {
                                const t = c.current,
                                    u = m.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    l = (0, se.u)(0, 1, s / (r - n)),
                                    _ = (t.offsetHeight - Ne(t, o)) * l;
                                ((u.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (a.current && i.current && c.current && m.current) {
                                            if (0 === e)
                                                return (
                                                    a.current.classList.add(Te),
                                                    void i.current.classList.remove(Te)
                                                );
                                            if (
                                                ((t = c.current),
                                                (u = m.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    a.current.classList.remove(Te),
                                                    void i.current.classList.add(Te)
                                                );
                                            var t, u;
                                            (a.current.classList.remove(Te), i.current.classList.remove(Te));
                                        }
                                    })(_));
                            }),
                            B = ie(() => {
                                Me(e, () => {
                                    (p(), F());
                                });
                            });
                        ((0, s.useEffect)(() => (0, ae.v)(B)),
                            (0, s.useEffect)(() => {
                                const t = () => {
                                    Me(e, () => {
                                        F();
                                    });
                                };
                                let u = xe;
                                const n = () => {
                                    (u(), (u = (0, ae.v)(B)));
                                };
                                return (
                                    e.events.on('recalculateContent', B),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (u(),
                                            e.events.off('recalculateContent', B),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, s.useEffect)(() => {
                                if (!E.pending) return;
                                const t = (t) => {
                                        Me(e, (u) => {
                                            const r = c.current,
                                                a = m.current,
                                                s = e.getContainerSize();
                                            if (!r || !a || !s) return;
                                            const o = t.screenY - E.offset - r.getBoundingClientRect().y,
                                                i = (o / r.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: i }));
                                        });
                                    },
                                    u = () => {
                                        (window.removeEventListener('mousemove', t),
                                            e.handleIsThumbDragging(!1),
                                            A(Re));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u));
                                    }
                                );
                            }, [e, E.offset, E.pending, n, A]));
                        const D = le((t) => e.applyStepTo(t), _, [e]),
                            b = D[0],
                            f = D[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const h = (e) => {
                            e.target.classList.contains(Te) || (0, ce.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()('VerticalBar_base_f3', t.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()('VerticalBar_topButton_d7', t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Te) ||
                                        0 !== e.button ||
                                        ((0, ce.G)('play'), b(de.Next));
                                },
                                ref: a,
                                onMouseEnter: h,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()('VerticalBar_track_df', t.track),
                                    onMouseDown: (t) => {
                                        const n = m.current;
                                        var r;
                                        n &&
                                            0 === t.button &&
                                            ((0, ce.G)('play'),
                                            t.target === n
                                                ? (e.handleIsThumbDragging(!0),
                                                  A({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y }))
                                                : ((r = t.screenY > n.getBoundingClientRect().y ? de.Prev : de.Next),
                                                  m.current &&
                                                      Me(e, (t) => {
                                                          if (!t) return;
                                                          const n = u(e),
                                                              a = e.clampPosition(t, t.scrollTop + n * r);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: h,
                                },
                                o().createElement('div', { ref: m, className: t.thumb }),
                                o().createElement('div', { className: l()('VerticalBar_rail_43', t.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()('VerticalBar_bottomButton_06', t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Te) ||
                                        0 !== e.button ||
                                        ((0, ce.G)('play'), b(de.Prev));
                                },
                                onMouseUp: f,
                                ref: i,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    Pe = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Oe = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: a,
                        scrollClassNames: i,
                        getStepByRailClick: c,
                        onDrag: m,
                    }) => {
                        const _ = (0, s.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: l()(Pe.base, e.base) });
                            }, [n]),
                            d = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: l()(Pe.defaultScroll, u), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(Pe.area, r) },
                                o().createElement(Ie, { className: a, classNames: i, api: d }, e),
                            ),
                            o().createElement(Le, { getStepByRailClick: c, api: t, onDrag: m, classNames: _ }),
                        );
                    },
                    Ie = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, s.useEffect)(() => (0, ae.v)(n.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(Pe.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(Pe.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                Ie.Default = Oe;
                const He = { Vertical: r, Horizontal: n };
                var Ue = u(2056),
                    $e = u(122);
                const We = { type: 'idle' };
                const je = {
                        base: 'DescriptionBlock_base_20',
                        scrollContent: 'DescriptionBlock_scrollContent_28',
                        container: 'DescriptionBlock_container_71',
                        closeButton: 'DescriptionBlock_closeButton_f9',
                        typeIcon: 'DescriptionBlock_typeIcon_84',
                        bottomShadow: 'DescriptionBlock_bottomShadow_3d',
                        bottomShadow__visible: 'DescriptionBlock_bottomShadow__visible_a3',
                        bottomShadow__firstRender: 'DescriptionBlock_bottomShadow__firstRender_fb',
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
                        damageBlockIcon: 'DescriptionBlock_damageBlockIcon_74',
                        damageBlockText: 'DescriptionBlock_damageBlockText_73',
                        damageBlockText__param: 'DescriptionBlock_damageBlockText__param_c9',
                        damageBlockText__light: 'DescriptionBlock_damageBlockText__light_40',
                    },
                    Ge = R.strings.menu.tank_params,
                    ze = (0, s.memo)(({ item: e }) => {
                        const t = q.paramsIcon.$dyn(e.name) || R.images.gui.maps.icons.vehParams.big.$dyn(e.name),
                            u = X.vehParams.text.$dyn(e.name) || Ge.$dyn(e.name);
                        return o().createElement(
                            Ue.u,
                            {
                                contentId: R.views.lobby.crew.tooltips.VehicleParamsTooltipView('resId'),
                                args: { paramName: e.name },
                            },
                            o().createElement(
                                'div',
                                { className: 'ParamItem_base_cd' },
                                o().createElement(I, { className: 'ParamItem_paramValue_1c', text: e.value }),
                                o().createElement('div', {
                                    className: 'ParamItem_paramIcon_f5',
                                    style: { backgroundImage: `url(${t})` },
                                }),
                                o().createElement(I, { className: 'ParamItem_paramName_05', text: u }),
                            ),
                        );
                    }),
                    Ye = R.strings.fl_supply_objects.page.object.damageZones,
                    Ve = (0, W.Pi)(({ selectedObj: e, clearSelectedObj: t }) => {
                        const u = re().model,
                            n = (0, s.useState)(!0),
                            r = n[0],
                            a = n[1],
                            i = (0, s.useState)(!0),
                            c = i[0],
                            m = i[1],
                            _ = (0, s.useState)(e),
                            d = _[0],
                            E = _[1],
                            g = (0, s.useRef)(null),
                            A = u.computes.getSupplyParams(),
                            p = q.objects.$dyn(d),
                            F = He.Vertical.useVerticalScrollApi(),
                            B = (function () {
                                const e = (0, s.useRef)(!0);
                                var t;
                                return (
                                    (t = () => {
                                        e.current = !1;
                                    }),
                                    (0, s.useEffect)(t, []),
                                    e.current
                                );
                            })();
                        (!(function (e, t) {
                            const u = e.contentRef,
                                n = e.wrapperRef,
                                r = e.scrollPosition,
                                a = e.clampPosition,
                                o = e.animationScroll,
                                i = e.events,
                                l = (0, s.useState)(We),
                                c = l[0],
                                m = l[1];
                            ((0, s.useEffect)(() => {
                                const e = u.current;
                                e && (e.style.cursor = 'dragging' === c.type ? 'grabbing' : 'grab');
                            }, [u, c.type]),
                                (0, s.useEffect)(() => {
                                    if ('dragging' !== c.type) return;
                                    const e = (e) => {
                                            const s = u.current,
                                                i = n.current;
                                            if (!s || !i) return;
                                            const l = c.positionFrom - e.screenY,
                                                m = c.previousScrollPosition + l;
                                            r.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: a(s, m),
                                                        from: { scrollPosition: o.scrollPosition.get() },
                                                    },
                                                    t,
                                                ),
                                            );
                                        },
                                        s = () => {
                                            (window.removeEventListener('mousemove', e), m({ type: 'scrollingToEnd' }));
                                        };
                                    return (
                                        window.addEventListener('mousemove', e),
                                        window.addEventListener('mouseup', s),
                                        () => {
                                            (window.removeEventListener('mousemove', e),
                                                window.removeEventListener('mouseup', s));
                                        }
                                    );
                                }, [o.scrollPosition, a, u, c, r, n, t]),
                                (0, s.useEffect)(() => {
                                    if ('scrollingToEnd' !== c.type) return;
                                    const e = () => {
                                        m(We);
                                    };
                                    return (o.scrollPosition.idle && e(), i.on('rest', e), () => i.off('rest', e));
                                }, [o.scrollPosition, c.type, i]),
                                (0, s.useEffect)(() => {
                                    const e = u.current;
                                    if (!e) return;
                                    const t = (e) => {
                                        (e.stopPropagation(),
                                            0 === e.button &&
                                                m({
                                                    type: 'dragging',
                                                    positionFrom: e.screenY,
                                                    previousScrollPosition: o.scrollPosition.get(),
                                                }));
                                    };
                                    return (
                                        e.addEventListener('mousedown', t),
                                        () => e.removeEventListener('mousedown', t)
                                    );
                                }, [o.scrollPosition, u]));
                        })(F),
                            (0, s.useEffect)(() => {
                                const e = () => {
                                        const e = F.getBounds()[1];
                                        a(Math.abs(e - F.animationScroll.scrollPosition.goal) > 0.1);
                                    },
                                    t = () => {
                                        const e = F.getContainerSize,
                                            t = (0, F.getWrapperSize)(),
                                            u = e();
                                        m(!(!t || !u) && u > t);
                                    };
                                return (
                                    F.events.on('resizeHandled', t),
                                    F.events.on('change', e),
                                    F.events.on('recalculateContent', e),
                                    () => {
                                        (F.events.off('resizeHandled', t),
                                            F.events.off('change', e),
                                            F.events.off('recalculateContent', e));
                                    }
                                );
                            }, [F]));
                        const D = u.root.get(),
                            b = D.supplyTeam,
                            f = D.supplyHullDamageFactor,
                            h = D.supplyTurretDamageFactor,
                            C = q.$dyn(1 === b ? 'attack_icon' : 'protection_icon'),
                            v = 1 !== f || 1 !== h;
                        return (
                            (0, s.useEffect)(() => {
                                if (e === $.None) return (0, $e.F)(() => E(e), 2e3);
                                E(e);
                            }, [e]),
                            o().createElement(
                                'div',
                                {
                                    className: l()(je.base, 'airship' === d && je.base__airship),
                                    onClick: (e) => {
                                        e.stopPropagation();
                                    },
                                },
                                o().createElement('div', {
                                    className: je.typeIcon,
                                    style: { backgroundImage: `url(${C})` },
                                }),
                                o().createElement(
                                    He.Vertical.Area,
                                    { api: F, classNames: { content: c ? '' : je.scrollContent } },
                                    o().createElement(
                                        'div',
                                        { className: je.container, ref: g },
                                        o().createElement(
                                            'div',
                                            { className: je.closeButton },
                                            o().createElement(H.A, {
                                                caption: '',
                                                type: 'close',
                                                side: 'right',
                                                onClick: t,
                                            }),
                                        ),
                                        o().createElement(I, { className: je.title, text: X.title.$dyn(d) }),
                                        o().createElement(I, {
                                            className: je.subTitle,
                                            text: X.description.subtitle.$dyn(d),
                                        }),
                                        o().createElement('div', {
                                            className: je.image,
                                            style: { backgroundImage: `url(${p})` },
                                        }),
                                        o().createElement(
                                            Ue.u,
                                            {
                                                contentId:
                                                    R.views.frontline.lobby.tooltips.UnlockConditionsTooltip('resId'),
                                                args: { supplyObject: d },
                                            },
                                            o().createElement(
                                                'div',
                                                { className: je.questsInfo },
                                                o().createElement(I, { className: je.infoText, text: X.infoText() }),
                                                o().createElement('div', { className: je.infoIcon }),
                                            ),
                                        ),
                                        o().createElement('div', { className: je.separator }),
                                        o().createElement(I, {
                                            className: je.descriptionText,
                                            text: X.description.$dyn(d),
                                        }),
                                        o().createElement('div', {
                                            className: l()(je.separator, je.separator__withBigMargin),
                                        }),
                                        o().createElement(
                                            'div',
                                            { className: je.paramsBlock },
                                            o().createElement(I, { className: je.paramsTitle, text: X.paramsTitle() }),
                                            o().createElement(
                                                'div',
                                                { className: je.tthContent },
                                                A.map((e) =>
                                                    o().createElement(ze, { key: `vehParam_${e.name}`, item: e }),
                                                ),
                                            ),
                                        ),
                                        v &&
                                            o().createElement(
                                                o().Fragment,
                                                null,
                                                o().createElement('div', {
                                                    className: l()(je.separator, je.separator__withTopMargin),
                                                }),
                                                o().createElement(
                                                    'div',
                                                    { className: je.damageBlock },
                                                    o().createElement('div', { className: je.damageBlockIcon }),
                                                    o().createElement(
                                                        'div',
                                                        null,
                                                        o().createElement(I, {
                                                            className: l()(je.damageBlockText, je.damageBlockText__big),
                                                            text: Ye.title(),
                                                        }),
                                                        o().createElement(I, {
                                                            className: l()(
                                                                je.damageBlockText,
                                                                je.damageBlockText__param,
                                                            ),
                                                            text: Ye.hullText(),
                                                            format: {
                                                                binding: {
                                                                    value: o().createElement(I, {
                                                                        className: je.damageBlockText__light,
                                                                        text: Ye.percents(),
                                                                        format: {
                                                                            binding: {
                                                                                number: String(Math.round(100 * f)),
                                                                            },
                                                                        },
                                                                    }),
                                                                },
                                                            },
                                                        }),
                                                        o().createElement(I, {
                                                            className: l()(
                                                                je.damageBlockText,
                                                                je.damageBlockText__param,
                                                            ),
                                                            text: Ye.turretText(),
                                                            format: {
                                                                binding: {
                                                                    value: o().createElement(I, {
                                                                        className: je.damageBlockText__light,
                                                                        text: Ye.percents(),
                                                                        format: {
                                                                            binding: {
                                                                                number: String(Math.round(100 * h)),
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
                                o().createElement('div', {
                                    className: l()(
                                        je.bottomShadow,
                                        r && je.bottomShadow__visible,
                                        B && je.bottomShadow__firstRender,
                                    ),
                                }),
                            )
                        );
                    }),
                    Xe = {
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
                    qe = (0, s.memo)(({ objectName: e, isBigBlock: t, isSelected: u, isHintShow: n, x: r, y: a }) => {
                        const i = q.objects,
                            c = q.icons.$dyn(e),
                            m = q.icons.$dyn(`${e}_select`),
                            d = (0, _.GS)().mediaSize,
                            E = (() => {
                                const e = (0, s.useState)(U.O.view.getScale()),
                                    t = e[0],
                                    u = e[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        const e = () => {
                                            u(U.O.view.getScale());
                                        };
                                        return (
                                            window.addEventListener('resize', e),
                                            () => {
                                                window.removeEventListener('resize', e);
                                            }
                                        );
                                    }, []),
                                    t
                                );
                            })(),
                            g = ((e, t) => {
                                const u = z.DEFAULT_VALUES[t],
                                    n = (z[e] && z[e][t]) || {};
                                return Object.assign({}, u, n);
                            })(d, e),
                            A = ((e, t) => {
                                const u = Y.DEFAULT_VALUES[t];
                                return (Y[e] && Y[e][t]) || u;
                            })(d, e),
                            p = r * g.stepX,
                            F = a * g.stepOutY - r * g.stepYinX,
                            B = a * g.stepInY - r * g.stepYinX,
                            D = a * g.scaleY,
                            b = 1 + D,
                            f = 1 - D,
                            h = l()(
                                Xe.base,
                                t && Xe.base__big,
                                u && Xe.base__selected,
                                2 === E && Xe.base__scaled,
                                Xe[`base__${e}`],
                            );
                        return o().createElement(
                            'div',
                            {
                                className: h,
                                onMouseEnter: () => {
                                    u || (0, ce.G)('bp_highlight');
                                },
                                onClick: () => {
                                    (0, ce.G)('play');
                                },
                            },
                            o().createElement(
                                'div',
                                {
                                    className: Xe.objectImage,
                                    style: {
                                        transform: `translate(${p}rem, ${a > 0 ? F : B}rem) scaleY(${a > 0 ? b : f})`,
                                    },
                                },
                                o().createElement('div', {
                                    className: Xe.mainImage,
                                    style: { backgroundImage: `url(${i.$dyn(e)})` },
                                }),
                                u
                                    ? o().createElement('div', {
                                          className: Xe.select,
                                          style: { backgroundImage: `url(${i.select.$dyn(e)})` },
                                      })
                                    : o().createElement('div', {
                                          className: Xe.hover,
                                          style: { backgroundImage: `url(${i.hover.$dyn(e)})` },
                                      }),
                            ),
                            o().createElement(
                                'div',
                                {
                                    className: Xe.description,
                                    style: { transform: `translate(${2 * -r}rem, ${a * A}rem)` },
                                },
                                o().createElement('div', { className: Xe.shadow }),
                                o().createElement('div', {
                                    className: Xe.descriptionIcon,
                                    style: { backgroundImage: `url(${u ? m : c})` },
                                }),
                                o().createElement(I, { text: X.title.$dyn(e), className: Xe.descriptionTitle }),
                                o().createElement(I, { text: X.subtitle.$dyn(e), className: Xe.descriptionText }),
                                !n &&
                                    o().createElement(
                                        'div',
                                        { className: Xe.lightningBlockWrapper },
                                        o().createElement('div', { className: Xe.lightningBlock }),
                                    ),
                            ),
                        );
                    }),
                    Ze = {
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
                    Ke = (0, W.Pi)(() => {
                        const e = re(),
                            t = e.model,
                            u = e.controls,
                            n = t.computes.getSupplyObjects(),
                            r = (0, s.useRef)(null),
                            a = (0, s.useState)({ x: 0, y: 0 }),
                            i = a[0],
                            c = a[1],
                            m = (0, s.useState)($.None),
                            d = m[0],
                            E = m[1],
                            g = (0, s.useState)(!1),
                            A = g[0],
                            p = g[1],
                            F = (() => {
                                const e = (0, _.GS)(),
                                    t = e.remScreenWidth,
                                    u = e.remScreenHeight;
                                return {
                                    isCustomSmall: t > j.W_1024 && t <= j.W_1280,
                                    isCustomLarge: t > j.W_2000 && t <= j.W_2560 && u > G.H_1200,
                                };
                            })(),
                            B = F.isCustomLarge,
                            D = F.isCustomSmall,
                            b = U.O.view.getScale(),
                            f = 1.5 === b,
                            h = 2 === b,
                            C = -1 !== n.findIndex((e) => !e.isHintShow);
                        ((0, s.useEffect)(() => {
                            u.onSupplySelected(d);
                        }, [u, d, n]),
                            (0, s.useEffect)(() => {
                                const e = r.current;
                                if (!e) return;
                                const t = (e) => {
                                    ((e) => {
                                        if (!r.current) return;
                                        const t = r.current.getBoundingClientRect(),
                                            u = t.left,
                                            n = t.top,
                                            a = t.width,
                                            s = t.height,
                                            o = 2 * ((e.clientX - u) / a - 0.5),
                                            i = 2 * ((e.clientY - n) / s - 0.5);
                                        c({ x: o, y: i });
                                    })(e);
                                };
                                return (
                                    e.addEventListener('mousemove', t),
                                    () => {
                                        e.removeEventListener('mousemove', t);
                                    }
                                );
                            }, []));
                        const v = () => {
                                (E($.None), p(!1));
                            },
                            w = l()(
                                Ze.base,
                                h && Ze.base__scaled,
                                D && Ze.base__customSmall,
                                B && Ze.base__customLarge,
                            ),
                            S = -5 * i.x,
                            y = 1 + -0.02 * i.y,
                            T = 1 - 0.02 * i.y,
                            x = 1 + 0.01 * i.x;
                        return o().createElement(
                            'div',
                            { className: w, onClick: v },
                            o().createElement(
                                'div',
                                { className: Ze.content },
                                o().createElement(
                                    'div',
                                    { ref: r, className: Ze.parallaxWrapper },
                                    o().createElement('div', {
                                        className: Ze.bg,
                                        style: {
                                            transform: `translate(-50%, -50%) translateX(${S}rem) scaleY(${i.y > 0 ? y : T}) scaleY(${x})`,
                                        },
                                    }),
                                    n.map((e) =>
                                        o().createElement(
                                            'div',
                                            {
                                                key: `supObj_${e.object}`,
                                                className: l()(
                                                    Ze.object,
                                                    Ze[`object__${e.point}`],
                                                    h && Ze.object__scaled,
                                                    f && Ze.object__custom,
                                                ),
                                                onClick: (t) => {
                                                    return (
                                                        (u = t),
                                                        (n = e.object),
                                                        u.stopPropagation(),
                                                        p(!0),
                                                        void E(n)
                                                    );
                                                    var u, n;
                                                },
                                            },
                                            o().createElement(qe, {
                                                isSelected: d === e.object,
                                                objectName: e.object,
                                                isBigBlock: e.object === $.Airship,
                                                isHintShow: e.isHintShow,
                                                x: i.x,
                                                y: i.y,
                                            }),
                                        ),
                                    ),
                                ),
                                o().createElement('div', { className: Ze.vignette }),
                            ),
                            o().createElement(I, { className: Ze.title, text: V.title() }),
                            C &&
                                o().createElement(
                                    'div',
                                    { className: Ze.infoBlock },
                                    o().createElement(
                                        'div',
                                        { className: Ze.infoContent },
                                        o().createElement('div', {
                                            className: l()(Ze.infoSeparator, Ze.infoSeparator__top),
                                        }),
                                        o().createElement(I, { className: Ze.infoBlockText, text: V.footer() }),
                                        o().createElement('div', {
                                            className: l()(Ze.infoSeparator, Ze.infoSeparator__bottom),
                                        }),
                                    ),
                                ),
                            o().createElement(
                                'div',
                                { className: Ze.closeButton },
                                o().createElement(H.A, {
                                    caption: R.strings.fl_common.button.close(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: u.onClose,
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: l()(Ze.descriptionBlock, A && Ze.descriptionBlock__visible) },
                                o().createElement(Ve, { clearSelectedObj: v, selectedObj: d }),
                            ),
                        );
                    }),
                    Qe = R.views.frontline.lobby.SupplyObjectsView('resId'),
                    Je = () =>
                        o().createElement(
                            ne,
                            { options: { rootId: Qe } },
                            o().createElement(a.z, null, o().createElement(Ke, null)),
                        );
            },
            5989: (e, t, u) => {
                'use strict';
                u.d(t, { I: () => g });
                var n = u(6483),
                    r = u.n(n),
                    a = u(6179),
                    s = u.n(a),
                    o = u(3415),
                    i = u(2862),
                    l = u(1558);
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
                    m = ({
                        name: e,
                        image: t,
                        isPeriodic: u = !1,
                        size: n = i.h2.Big,
                        special: a,
                        value: m,
                        valueType: _,
                        style: d,
                        className: E,
                        classNames: g,
                        tooltipArgs: A,
                        periodicIconTooltipArgs: p,
                    }) => {
                        const F = (0, l.L_)(a),
                            B = (0, l.i2)(a),
                            D = (0, l.m9)(m, _);
                        return s().createElement(
                            'div',
                            { className: r()(c.base, c[`base__${n}`], E), style: d },
                            s().createElement(
                                o.l,
                                { tooltipArgs: A, className: c.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: r()(c.image, null == g ? void 0 : g.image) },
                                        F &&
                                            s().createElement('div', {
                                                className: r()(c.highlight, null == g ? void 0 : g.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${F}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            s().createElement('div', {
                                                className: r()(c.icon, null == g ? void 0 : g.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        B &&
                                            s().createElement('div', {
                                                className: r()(c.overlay, null == g ? void 0 : g.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${B}_overlay)`,
                                                },
                                            }),
                                    ),
                                    D &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: r()(
                                                    c.info,
                                                    c[`info__${e}`],
                                                    _ === i.$h.MULTI && c.info__multi,
                                                    null == g ? void 0 : g.info,
                                                ),
                                            },
                                            D,
                                        ),
                                ),
                            ),
                            u &&
                                s().createElement(
                                    o.l,
                                    { tooltipArgs: p },
                                    s().createElement('div', {
                                        className: r()(c.timer, null == g ? void 0 : g.periodicIcon),
                                    }),
                                ),
                        );
                    };
                var _ = u(405);
                const d = ['item', 'parentScreen', 'itemState', 'info', 'tooltipArgs'];
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                const g = (0, a.memo)((e) => {
                    let t = e.item,
                        u = e.parentScreen,
                        n = e.itemState,
                        r = e.info,
                        o = e.tooltipArgs,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, d);
                    const l = (0, _.Y)(t, u, n, r),
                        c = l[0],
                        g = l[1],
                        A = (0, a.useMemo)(() => Object.assign({}, o, { onMouseEnter: c, onMouseLeave: g }), [o, c, g]);
                    return s().createElement(m, E({}, i, { tooltipArgs: A }));
                });
            },
            8154: (e, t, u) => {
                'use strict';
                u.d(t, { l: () => l });
                var n = u(6373),
                    r = u(6179),
                    a = u.n(r),
                    s = u(405);
                const o = ['children', 'item', 'parentScreen', 'itemState', 'info'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = (0, r.memo)((e) => {
                    let t = e.children,
                        u = e.item,
                        r = e.parentScreen,
                        l = e.itemState,
                        c = e.info,
                        m = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, o);
                    const _ = (0, s.Y)(u, r, l, c),
                        d = _[0],
                        E = _[1];
                    return a().createElement(n.i, i({}, m, { onMouseEnter: d, onMouseLeave: E }), t);
                });
            },
            3854: (e, t, u) => {
                'use strict';
                u.d(t, { V: () => i });
                var n = u(6483),
                    r = u.n(n),
                    a = u(6179),
                    s = u.n(a),
                    o = u(5577);
                const i = (0, a.memo)(({ text: e, children: t, classMix: u }) =>
                    s().createElement(
                        'div',
                        { className: r()(o.Z.base, u) },
                        s().createElement('span', { className: o.Z.title }, e),
                        t,
                    ),
                );
            },
            4959: (e, t, u) => {
                'use strict';
                let n;
                (u.d(t, { c: () => n }),
                    (function (e) {
                        ((e.Announce = 'announce'),
                            (e.Active = 'active'),
                            (e.Finished = 'finished'),
                            (e.Frozen = 'frozen'));
                    })(n || (n = {})));
            },
            6880: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
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
            5287: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = { base: 'FormatText_base_d0' };
            },
            7476: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
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
            5577: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = { base: 'PageTitle_base_ef', title: 'PageTitle_title_33' };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](u, u.exports, __webpack_require__), u.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, u, n] = deferred[i], a = !0, s = 0; s < t.length; s++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(i--, 1);
                        var o = u();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, u, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var u in t)
                __webpack_require__.o(t, u) &&
                    !__webpack_require__.o(e, u) &&
                    Object.defineProperty(e, u, { enumerable: !0, get: t[u] });
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
        (__webpack_require__.j = 66),
        (() => {
            var e = { 66: 0, 964: 0, 919: 0, 805: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        r,
                        [a, s, o] = u,
                        i = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(u); i < a.length; i++)
                        ((r = a[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(6014));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
