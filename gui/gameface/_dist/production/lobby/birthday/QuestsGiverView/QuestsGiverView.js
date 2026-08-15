(() => {
    var __webpack_modules__ = {
            3779: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => F });
                var r = t(6483),
                    n = t.n(r),
                    a = t(9887),
                    s = t.n(a),
                    o = t(3377),
                    i = t(6179),
                    l = t.n(i),
                    c = t(5026);
                const m = [
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
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                Object.keys(s());
                const _ = {
                        XL: { mt: c.Z.mt__XL, mr: c.Z.mr__XL, mb: c.Z.mb__XL, ml: c.Z.ml__XL },
                        LG: { mt: c.Z.mt__LG, mr: c.Z.mr__LG, mb: c.Z.mb__LG, ml: c.Z.ml__LG },
                        MDp: { mt: c.Z.mt__MDp, mr: c.Z.mr__MDp, mb: c.Z.mb__MDp, ml: c.Z.ml__MDp },
                        MD: { mt: c.Z.mt__MD, mr: c.Z.mr__MD, mb: c.Z.mb__MD, ml: c.Z.ml__MD },
                        SMp: { mt: c.Z.mt__SMp, mr: c.Z.mr__SMp, mb: c.Z.mb__SMp, ml: c.Z.ml__SMp },
                        SM: { mt: c.Z.mt__SM, mr: c.Z.mr__SM, mb: c.Z.mb__SM, ml: c.Z.ml__SM },
                        XS: { mt: c.Z.mt__XS, mr: c.Z.mr__XS, mb: c.Z.mb__XS, ml: c.Z.ml__XS },
                    },
                    d = (Object.keys(_), ['mt', 'mr', 'mb', 'ml']),
                    A = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    F = (0, o.ZP)((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            a = e.m,
                            s = e.mt,
                            o = void 0 === s ? a : s,
                            F = e.mr,
                            D = void 0 === F ? a : F,
                            g = e.mb,
                            p = void 0 === g ? a : g,
                            B = e.ml,
                            C = void 0 === B ? a : B,
                            h = e.column,
                            b = e.row,
                            v = e.flexDirection,
                            f = void 0 === v ? (h ? 'column' : b && 'row') || void 0 : v,
                            w = e.flexStart,
                            S = e.center,
                            x = e.flexEnd,
                            T = e.spaceBetween,
                            R = e.spaceAround,
                            y = e.justifyContent,
                            P =
                                void 0 === y
                                    ? (w ? 'flex-start' : S && 'center') ||
                                      (x && 'flex-end') ||
                                      (T && 'space-between') ||
                                      (R && 'space-around') ||
                                      void 0
                                    : y,
                            M = e.alignItems,
                            N = void 0 === M ? (w ? 'flex-start' : S && 'center') || (x && 'flex-end') || void 0 : M,
                            L = e.alignSelf,
                            O = e.wrap,
                            k = e.flexWrap,
                            I = void 0 === k ? (O ? 'wrap' : void 0) : k,
                            H = e.grow,
                            W = e.shrink,
                            U = e.flex,
                            G = void 0 === U ? (H || W ? `${H ? 1 : 0} ${W ? 1 : 0} auto` : void 0) : U,
                            q = e.style,
                            z = e.children,
                            $ = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, m);
                        const Z = (0, i.useMemo)(() => {
                                const e = { mt: o, mr: D, mb: p, ml: C },
                                    u = ((e) =>
                                        d.reduce((u, t) => {
                                            const r = e[t];
                                            return r && 'number' != typeof r ? u.concat(_[!0 === r ? 'MD' : r][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        d.reduce((u, t) => {
                                            const r = e[t];
                                            return ('number' == typeof r && (u[A[t]] = r + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, q, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: G,
                                        alignSelf: L,
                                        display: f || N ? 'flex' : void 0,
                                        flexDirection: f,
                                        flexWrap: I,
                                        justifyContent: P,
                                        alignItems: N,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, o, D, p, C, q, G, L, f, I, P, N]),
                            Q = Z.computedStyle,
                            j = Z.computedClassNames;
                        return l().createElement('div', E({ className: n()(c.Z.base, ...j, u), style: Q }, $), z);
                    });
            },
            126: (e, u, t) => {
                'use strict';
                function r(e) {
                    const u = e.chunk,
                        t = u.rows * u.columns;
                    return (r) => {
                        const n = r % t,
                            a = (n % u.columns) * e.width,
                            s = Math.trunc(n / u.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(r / t)), x: a, y: s };
                    };
                }
                t.d(u, { q: () => r });
            },
            2372: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => s });
                var r = t(6179),
                    n = t.n(r),
                    a = t(4179);
                class s extends n().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? a.B3.GOLD : a.B3.INTEGRAL;
                        const u = a.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                s.defaultProps = { format: 'integral' };
            },
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var r = t(6179),
                    n = t.n(r),
                    a = t(6483),
                    s = t.n(a),
                    o = t(3649),
                    i = t(5287);
                const l = ({ binding: e, text: u = '', classMix: t, alignment: a = o.v2.left }) =>
                    null === u
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : n().createElement(
                              r.Fragment,
                              null,
                              u.split('\n').map((u, l) =>
                                  n().createElement(
                                      'div',
                                      { className: s()(i.Z.base, t), key: `${u}-${l}` },
                                      (0, o.Uw)(u, a, e).map((e, u) =>
                                          n().createElement(r.Fragment, { key: `${u}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => m });
                var r = t(3138),
                    n = t(6179),
                    a = t(1043),
                    s = t(5262);
                const o = r.O.client.getSize('rem'),
                    i = o.width,
                    l = o.height,
                    c = Object.assign({ width: i, height: l }, (0, s.T)(i, l, a.j)),
                    m = (0, n.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                var r = t(6179),
                    n = t.n(r),
                    a = t(6536),
                    s = t(3495),
                    o = t(1043),
                    i = t(5262),
                    l = t(3138);
                (0, r.memo)(({ children: e }) => {
                    const u = (0, r.useContext)(s.Y),
                        t = (0, r.useState)(u),
                        c = t[0],
                        m = t[1],
                        E = (0, r.useCallback)((e, u) => {
                            const t = l.O.view.pxToRem(e),
                                r = l.O.view.pxToRem(u);
                            m(Object.assign({ width: t, height: r }, (0, i.T)(t, r, o.j)));
                        }, []);
                    ((0, a.Z)(() => {
                        engine.on('clientResized', E);
                    }),
                        (0, r.useEffect)(() => () => engine.off('clientResized', E), [E]));
                    const _ = (0, r.useMemo)(() => Object.assign({}, c), [c]);
                    return n().createElement(s.Y.Provider, { value: _ }, e);
                });
            },
            6010: (e, u, t) => {
                'use strict';
                var r = t(6179),
                    n = t(7382),
                    a = t(3495);
                const s = ['children'],
                    o = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, s);
                        const o = (0, r.useContext)(a.Y),
                            i = o.extraLarge,
                            l = o.large,
                            c = o.medium,
                            m = o.small,
                            E = o.extraSmall,
                            _ = o.extraLargeWidth,
                            d = o.largeWidth,
                            A = o.mediumWidth,
                            F = o.smallWidth,
                            D = o.extraSmallWidth,
                            g = o.extraLargeHeight,
                            p = o.largeHeight,
                            B = o.mediumHeight,
                            C = o.smallHeight,
                            h = o.extraSmallHeight,
                            b = { extraLarge: g, large: p, medium: B, small: C, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && i) return u;
                            if (t.large && l) return u;
                            if (t.medium && c) return u;
                            if (t.small && m) return u;
                            if (t.extraSmall && E) return u;
                        } else {
                            if (t.extraLargeWidth && _) return (0, n.H)(u, t, b);
                            if (t.largeWidth && d) return (0, n.H)(u, t, b);
                            if (t.mediumWidth && A) return (0, n.H)(u, t, b);
                            if (t.smallWidth && F) return (0, n.H)(u, t, b);
                            if (t.extraSmallWidth && D) return (0, n.H)(u, t, b);
                            if (!(
                                t.extraLargeWidth ||
                                t.largeWidth ||
                                t.mediumWidth ||
                                t.smallWidth ||
                                t.extraSmallWidth
                            )) {
                                if (t.extraLargeHeight && g) return u;
                                if (t.largeHeight && p) return u;
                                if (t.mediumHeight && B) return u;
                                if (t.smallHeight && C) return u;
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
                    (0, r.memo)(o));
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
                (t.d(u, { YN: () => r.Y }), t(6010), t(1039));
                var r = t(3495);
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
                (t.d(u, { T: () => n }),
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
                    })(r || (r = {})));
            },
            5739: (e, u, t) => {
                'use strict';
                t.d(u, { Q: () => m });
                var r = t(6483),
                    n = t.n(r),
                    a = t(6179),
                    s = t.n(a),
                    o = t(3415),
                    i = t(2862),
                    l = t(729),
                    c = t(1609);
                const m = ({
                    name: e,
                    image: u,
                    isPeriodic: t = !1,
                    size: r = i.h2.Big,
                    special: a,
                    value: m,
                    valueType: E,
                    style: _,
                    className: d,
                    classNames: A,
                    tooltipArgs: F,
                    periodicIconTooltipArgs: D,
                }) => {
                    const g = (0, l.L_)(a),
                        p = (0, l.i2)(a),
                        B = (0, l.m9)(m, E);
                    return s().createElement(
                        'div',
                        { className: n()(c.Z.base, c.Z[`base__${r}`], d), style: _ },
                        s().createElement(
                            o.l,
                            { tooltipArgs: F, className: c.Z.tooltipWrapper },
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(
                                    'div',
                                    { className: n()(c.Z.image, null == A ? void 0 : A.image) },
                                    g &&
                                        s().createElement('div', {
                                            className: n()(c.Z.highlight, null == A ? void 0 : A.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${g}_highlight)`,
                                            },
                                        }),
                                    u &&
                                        s().createElement('div', {
                                            className: n()(c.Z.icon, null == A ? void 0 : A.rewardIcon),
                                            style: { backgroundImage: `url(${u})` },
                                        }),
                                    p &&
                                        s().createElement('div', {
                                            className: n()(c.Z.overlay, null == A ? void 0 : A.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${p}_overlay)`,
                                            },
                                        }),
                                ),
                                B &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                c.Z.info,
                                                c.Z[`info__${e}`],
                                                E === i.$h.MULTI && c.Z.info__multi,
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
                                { tooltipArgs: D },
                                s().createElement('div', {
                                    className: n()(c.Z.timer, null == A ? void 0 : A.periodicIcon),
                                }),
                            ),
                    );
                };
            },
            2862: (e, u, t) => {
                'use strict';
                let r, n, a, s, o, i, l, c, m;
                (t.d(u, { $h: () => s, A2: () => i, E4: () => r, h2: () => a, kK: () => o, sh: () => l, ye: () => m }),
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
                    })(r || (r = {})),
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
                    })(n || (n = {})),
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
            729: (e, u, t) => {
                'use strict';
                t.d(u, { L_: () => D, i2: () => g, m9: () => p, p3: () => E, pI: () => F, ry: () => A });
                var r = t(2372),
                    n = t(6179),
                    a = t.n(n),
                    s = t(2862);
                const o = [
                        s.E4.Items,
                        s.E4.Equipment,
                        s.E4.Xp,
                        s.E4.XpFactor,
                        s.E4.Blueprints,
                        s.E4.BlueprintsAny,
                        s.E4.Goodies,
                        s.E4.Berths,
                        s.E4.Slots,
                        s.E4.Tokens,
                        s.E4.CrewSkins,
                        s.E4.CrewBooks,
                        s.E4.Customizations,
                        s.E4.CreditsFactor,
                        s.E4.TankmenXp,
                        s.E4.TankmenXpFactor,
                        s.E4.FreeXpFactor,
                        s.E4.BattleToken,
                        s.E4.PremiumUniversal,
                        s.E4.NaturalCover,
                        s.E4.BpCoin,
                        s.E4.BattlePassSelectToken,
                        s.E4.BattlaPassFinalAchievement,
                        s.E4.BattleBadge,
                        s.E4.BonusX5,
                        s.E4.CrewBonusX3,
                        s.E4.NewYearFillers,
                        s.E4.NewYearInvoice,
                        s.E4.EpicSelectToken,
                        s.E4.Comp7TokenWeeklyReward,
                        s.E4.Comp7TokenCouponReward,
                        s.E4.BattleBoosterGift,
                        s.E4.CosmicLootboxCommon,
                        s.E4.CosmicLootboxSilver,
                        s.E4.SelectableBonus,
                        s.E4.PostStamp,
                        s.E4.PremiumPlusUniversal,
                        s.E4.GoldenTicket,
                        s.E4.RewardsSlots,
                    ],
                    i = [s.E4.Gold, s.E4.Credits, s.E4.Crystal, s.E4.FreeXp],
                    l = [s.E4.BattlePassPoints],
                    c = [s.E4.PremiumPlus, s.E4.Premium];
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
                const E = (e) =>
                        o.includes(e)
                            ? s.$h.MULTI
                            : i.includes(e)
                              ? s.$h.CURRENCY
                              : l.includes(e)
                                ? s.$h.NUMBER
                                : c.includes(e)
                                  ? s.$h.PREMIUM_PLUS
                                  : s.$h.STRING,
                    _ = ['engravings', 'backgrounds'],
                    d = ['engraving', 'background'],
                    A = (e, u = s.h2.Small) => {
                        const t = e.name,
                            r = e.type,
                            n = e.value,
                            a = e.icon,
                            o = e.item,
                            i = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case s.h2.S600x450:
                                        return 'c_600x450';
                                    case s.h2.S400x300:
                                        return 'c_400x300';
                                    case s.h2.S296x222:
                                        return 'c_296x222';
                                    case s.h2.S232x174:
                                        return 'c_232x174';
                                    case s.h2.Big:
                                        return 'c_80x80';
                                    case s.h2.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}_${n}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${n}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${a}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, u) => {
                                    switch (u) {
                                        case s.h2.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case s.h2.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${a}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const r = _[e];
                                    if (r) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(r),
                                            a = n.$dyn(t);
                                        return a ? `${a}` : `${n.$dyn(d[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case s.h2.S600x450:
                                            return 'c_600x450';
                                        case s.h2.S400x300:
                                            return 'c_400x300';
                                        case s.h2.S296x222:
                                            return 'c_296x222';
                                        case s.h2.S232x174:
                                            return 'c_232x174';
                                        case s.h2.S180x135:
                                            return 'big';
                                        case s.h2.Big:
                                        case s.h2.S80x80:
                                            return 'c_80x80';
                                        case s.h2.Small:
                                        case s.h2.S48x48:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(u)}.${a}`;
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
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${a}`;
                            case 'premium_universal':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.premium_plus_universal`;
                            case 'armory_coin':
                                return `R.images.armory_yard.gui.maps.icons.token.sf${((e) => {
                                    switch (e) {
                                        case s.h2.Mini:
                                            return m.s32;
                                        case s.h2.Small:
                                        case s.h2.S48x48:
                                            return m.s48;
                                        case s.h2.S80x80:
                                        case s.h2.Big:
                                            return m.s80;
                                        case s.h2.S128x100:
                                            return m.s116;
                                        case s.h2.S180x135:
                                        case s.h2.S232x174:
                                        case s.h2.S296x222:
                                            return m.s296;
                                        case s.h2.S400x300:
                                            return m.s400;
                                        case s.h2.S600x450:
                                            return m.s600;
                                    }
                                })(u)}`;
                            case s.E4.StyleProgress:
                            case s.E4.LbStyleProgress:
                                return B(a, u, s.ye.ProgressionStyle);
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    F = (e, u, t) => {
                        const r = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            r,
                            t,
                        );
                    },
                    D = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case s.kK.BATTLE_BOOSTER:
                            case s.kK.BATTLE_BOOSTER_REPLACE:
                                return s.A2.BATTLE_BOOSTER;
                        }
                    },
                    g = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case s.kK.BATTLE_BOOSTER:
                                return s.sh.BATTLE_BOOSTER;
                            case s.kK.BATTLE_BOOSTER_REPLACE:
                                return s.sh.BATTLE_BOOSTER_REPLACE;
                            case s.kK.BUILT_IN_EQUIPMENT:
                                return s.sh.BUILT_IN_EQUIPMENT;
                            case s.kK.EQUIPMENT_PLUS:
                                return s.sh.EQUIPMENT_PLUS;
                            case s.kK.EQUIPMENT_TROPHY_BASIC:
                                return s.sh.EQUIPMENT_TROPHY_BASIC;
                            case s.kK.EQUIPMENT_TROPHY_UPGRADED:
                                return s.sh.EQUIPMENT_TROPHY_UPGRADED;
                            case s.kK.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                return s.sh.EQUIPMENT_MODERNIZED_UPGRADED_1;
                            case s.kK.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                return s.sh.EQUIPMENT_MODERNIZED_UPGRADED_2;
                            case s.kK.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                return s.sh.EQUIPMENT_MODERNIZED_UPGRADED_3;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_1:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_1;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_2:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_2;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_3:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_3;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_4:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_4;
                        }
                    },
                    p = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case s.$h.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case s.$h.CURRENCY:
                            case s.$h.NUMBER:
                                return a().createElement(r.A, { format: 'integral', value: Number(e) });
                            case s.$h.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    },
                    B = (e, u, t) => {
                        const r = R.images.gui.maps.icons.quests.bonuses.$dyn(u),
                            n = r.$dyn(e);
                        return String(null != n ? n : r.$dyn(t));
                    };
            },
            2773: (e, u, t) => {
                'use strict';
                t.d(u, { $Q: () => p });
                var r = t(6483),
                    n = t.n(r),
                    a = t(7515),
                    s = t(1856),
                    o = t(3815),
                    i = t(560),
                    l = t(7727),
                    c = t(6179),
                    m = t.n(c),
                    E = t(6358),
                    _ = t(372);
                const d = 'disable',
                    A = { pending: !1, offset: 0 },
                    F = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    D = () => {},
                    g = (e, u) => Math.max(20, e.offsetWidth * u),
                    p = (0, c.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = F, onDrag: r = D }) => {
                        const p = (0, c.useRef)(null),
                            B = (0, c.useRef)(null),
                            C = (0, c.useRef)(null),
                            h = (0, c.useRef)(null),
                            b = (0, c.useRef)(null),
                            v = e.stepTimeout || 100,
                            f = (0, c.useState)(A),
                            w = f[0],
                            S = f[1],
                            x = (0, c.useCallback)(
                                (e) => {
                                    (S(e),
                                        b.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: b.current }));
                                },
                                [r],
                            ),
                            T = () => {
                                const u = h.current,
                                    t = b.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    i = (0, a.u)(0, 1, s / (n - r)),
                                    l = (u.offsetWidth - g(u, o)) * i;
                                ((t.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (B.current && C.current && h.current && b.current) {
                                            if (0 === e)
                                                return (B.current.classList.add(d), void C.current.classList.remove(d));
                                            if (
                                                ((u = h.current),
                                                (t = b.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (B.current.classList.remove(d), void C.current.classList.add(d));
                                            var u, t;
                                            (B.current.classList.remove(d), C.current.classList.remove(d));
                                        }
                                    })(l));
                            },
                            R = (0, o.z)(() => {
                                ((() => {
                                    const u = b.current,
                                        t = h.current,
                                        r = e.getWrapperSize(),
                                        n = e.getContainerSize();
                                    if (!(n && u && r && t)) return;
                                    const a = Math.min(1, r / n);
                                    ((u.style.width = `${g(t, a)}px`),
                                        (u.style.display = 'flex'),
                                        p.current &&
                                            (1 === a
                                                ? p.current.classList.add(_.Z.base__nonActive)
                                                : p.current.classList.remove(_.Z.base__nonActive)));
                                })(),
                                    T());
                            });
                        ((0, c.useEffect)(() => (0, s.v)(R)),
                            (0, c.useEffect)(
                                () =>
                                    (0, s.v)(() => {
                                        const u = () => {
                                            T();
                                        };
                                        let t = D;
                                        const r = () => {
                                            (t(), (t = (0, s.v)(R)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', R),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', R),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, c.useEffect)(() => {
                                if (!w.pending) return;
                                const u = (u) => {
                                        var t;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const a = h.current,
                                            s = b.current;
                                        if (!n || !a || !s) return;
                                        const o = u.screenX - w.offset - a.getBoundingClientRect().x,
                                            i = (o / a.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), x(A));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, w.offset, w.pending, r, x]));
                        const y = (0, i.B)((u) => e.applyStepTo(u), v, [e]),
                            P = y[0],
                            M = y[1];
                        (0, c.useEffect)(
                            () => (
                                document.addEventListener('mouseup', M, !0),
                                () => document.removeEventListener('mouseup', M, !0)
                            ),
                            [M],
                        );
                        const N = (e) => {
                            e.target.classList.contains(d) || (0, l.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: n()(_.Z.base, u.base), ref: p, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: n()(_.Z.leftButton, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(d) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), P(E.Nm.Next));
                                },
                                onMouseUp: M,
                                ref: B,
                                onMouseEnter: N,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: n()(_.Z.track, u.track),
                                    onMouseDown: (u) => {
                                        const r = b.current;
                                        r &&
                                            0 === u.button &&
                                            ((0, l.G)('play'),
                                            u.target === r
                                                ? x({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const r = b.current,
                                                          n = e.contentRef.current;
                                                      if (!r || !n) return;
                                                      const a = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                  })(u.screenX > r.getBoundingClientRect().x ? E.Nm.Prev : E.Nm.Next));
                                    },
                                    ref: h,
                                    onMouseEnter: N,
                                },
                                m().createElement('div', { ref: b, className: n()(_.Z.thumb, u.thumb) }),
                                m().createElement('div', { className: n()(_.Z.rail, u.rail) }),
                            ),
                            m().createElement('div', {
                                className: n()(_.Z.rightButton, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(d) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), P(E.Nm.Prev));
                                },
                                onMouseUp: M,
                                ref: C,
                                onMouseEnter: N,
                            }),
                        );
                    });
            },
            2840: (e, u, t) => {
                'use strict';
                t.d(u, { K: () => c });
                var r = t(6483),
                    n = t.n(r),
                    a = t(6179),
                    s = t.n(a),
                    o = t(2773),
                    i = t(7950),
                    l = t(4682);
                const c = ({
                    children: e,
                    api: u,
                    className: t,
                    barClassNames: r,
                    areaClassName: c,
                    classNames: m,
                    scrollClassName: E,
                    getStepByRailClick: _,
                    onDrag: d,
                }) => {
                    const A = (0, a.useMemo)(() => {
                            const e = r || {};
                            return Object.assign({}, e, { base: n()(l.Z.base, e.base) });
                        }, [r]),
                        F = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                    return s().createElement(
                        'div',
                        { className: n()(l.Z.defaultScroll, t), onWheel: u.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: n()(l.Z.defaultScrollArea, c) },
                            s().createElement(i.Area, { className: E, api: F, classNames: m }, e),
                        ),
                        s().createElement(o.$Q, { getStepByRailClick: _, api: u, onDrag: d, classNames: A }),
                    );
                };
            },
            7950: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        Area: () => _,
                        Bar: () => i.$Q,
                        DefaultScroll: () => l.K,
                        Direction: () => E.Nm,
                        defaultSettings: () => E.he,
                        useHorizontalScrollApi: () => E.T5,
                    }));
                var r = t(6483),
                    n = t.n(r),
                    a = t(1856),
                    s = t(6179),
                    o = t.n(s),
                    i = t(2773),
                    l = t(2840),
                    c = t(4682),
                    m = t(8579),
                    E = t(6358);
                const _ = ({ api: e, className: u, classNames: t, children: r, style: i }) => (
                    (0, s.useEffect)(() => (0, a.v)(e.recalculateContent)),
                    o().createElement(
                        'div',
                        { className: n()(c.Z.base, u), style: i },
                        o().createElement(
                            'div',
                            {
                                className: n()(c.Z.wrapper, null == t ? void 0 : t.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            o().createElement(
                                'div',
                                { className: n()(c.Z.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                r,
                            ),
                        ),
                    )
                );
                ((_.Bar = i.$Q), (_.Default = l.K), (_.SeniorityAwards = m.Tm));
            },
            8579: (e, u, t) => {
                'use strict';
                t.d(u, { Tm: () => l });
                var r = t(6483),
                    n = t.n(r),
                    a = t(1856),
                    s = t(6179),
                    o = t.n(s),
                    i = (t(2773), t(2840), t(4682));
                t(6358);
                const l = ({ api: e, className: u, classNames: t, children: r }) => (
                    (0, s.useEffect)(() => (0, a.v)(e.recalculateContent)),
                    o().createElement(
                        'div',
                        { className: n()(i.Z.base, u) },
                        o().createElement(
                            'div',
                            { className: n()(i.Z.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                            o().createElement(
                                'div',
                                { className: n()(i.Z.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                r,
                            ),
                        ),
                    )
                );
            },
            6358: (e, u, t) => {
                'use strict';
                t.d(u, { Nm: () => r.Nm, T5: () => n, he: () => r.he });
                var r = t(7308);
                const n = (0, r.EO)({
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
                    getDirection: (e) => (e.deltaY > 1 ? r.Nm.Next : r.Nm.Prev),
                    triggerMouseMoveOnUpdate: !0,
                });
            },
            6225: (e, u, t) => {
                'use strict';
                t.d(u, { $Q: () => B });
                var r = t(6483),
                    n = t.n(r),
                    a = t(7515),
                    s = t(1856),
                    o = t(3815),
                    i = t(560),
                    l = t(7727),
                    c = t(6179),
                    m = t.n(c),
                    E = t(7701),
                    _ = t(9168);
                const d = 'disable',
                    A = () => {},
                    F = { pending: !1, offset: 0 },
                    D = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    g = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    p = (e, u) => Math.max(20, e.offsetHeight * u),
                    B = (0, c.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = D, onDrag: r = A }) => {
                        const B = (0, c.useRef)(null),
                            C = (0, c.useRef)(null),
                            h = (0, c.useRef)(null),
                            b = (0, c.useRef)(null),
                            v = (0, c.useRef)(null),
                            f = e.stepTimeout || 100,
                            w = (0, c.useState)(F),
                            S = w[0],
                            x = w[1],
                            T = (0, c.useCallback)(
                                (e) => {
                                    (x(e),
                                        v.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: v.current }));
                                },
                                [r],
                            ),
                            R = (0, o.z)(() => {
                                const u = v.current,
                                    t = b.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && n && u && t)) return;
                                const a = Math.min(1, r / n);
                                return (
                                    (u.style.height = `${p(t, a)}px`),
                                    u.classList.add(_.Z.thumb),
                                    B.current &&
                                        (1 === a
                                            ? B.current.classList.add(_.Z.base__nonActive)
                                            : B.current.classList.remove(_.Z.base__nonActive)),
                                    a
                                );
                            }),
                            y = (0, o.z)(() => {
                                const u = b.current,
                                    t = v.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    i = (0, a.u)(0, 1, s / (n - r)),
                                    l = (u.offsetHeight - p(u, o)) * i;
                                ((t.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (C.current && h.current && b.current && v.current) {
                                            if (0 === e)
                                                return (C.current.classList.add(d), void h.current.classList.remove(d));
                                            if (
                                                ((u = b.current),
                                                (t = v.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (C.current.classList.remove(d), void h.current.classList.add(d));
                                            var u, t;
                                            (C.current.classList.remove(d), h.current.classList.remove(d));
                                        }
                                    })(l));
                            }),
                            P = (0, o.z)(() => {
                                g(e, () => {
                                    (R(), y());
                                });
                            });
                        ((0, c.useEffect)(() => (0, s.v)(P)),
                            (0, c.useEffect)(() => {
                                const u = () => {
                                    g(e, () => {
                                        y();
                                    });
                                };
                                let t = A;
                                const r = () => {
                                    (t(), (t = (0, s.v)(P)));
                                };
                                return (
                                    e.events.on('recalculateContent', P),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', P),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', r));
                                    }
                                );
                            }, [e]),
                            (0, c.useEffect)(() => {
                                if (!S.pending) return;
                                const u = (u) => {
                                        g(e, (t) => {
                                            const n = b.current,
                                                a = v.current,
                                                s = e.getContainerSize();
                                            if (!n || !a || !s) return;
                                            const o = u.screenY - S.offset - n.getBoundingClientRect().y,
                                                i = (o / n.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: i }));
                                        });
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), e.handleIsThumbDragging(!1), T(F));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, S.offset, S.pending, r, T]));
                        const M = (0, i.B)((u) => e.applyStepTo(u), f, [e]),
                            N = M[0],
                            L = M[1];
                        (0, c.useEffect)(
                            () => (
                                document.addEventListener('mouseup', L, !0),
                                () => document.removeEventListener('mouseup', L, !0)
                            ),
                            [L],
                        );
                        const O = (e) => {
                            e.target.classList.contains(d) || (0, l.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: n()(_.Z.base, u.base), ref: B, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: n()(_.Z.topButton, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(d) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), N(E.Nm.Next));
                                },
                                ref: C,
                                onMouseEnter: O,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: n()(_.Z.track, u.track),
                                    onMouseDown: (u) => {
                                        const r = v.current;
                                        var n;
                                        r &&
                                            0 === u.button &&
                                            ((0, l.G)('play'),
                                            u.target === r
                                                ? (e.handleIsThumbDragging(!0),
                                                  T({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y }))
                                                : ((n =
                                                      u.screenY > r.getBoundingClientRect().y ? E.Nm.Prev : E.Nm.Next),
                                                  v.current &&
                                                      g(e, (u) => {
                                                          if (!u) return;
                                                          const r = t(e),
                                                              a = e.clampPosition(u, u.scrollTop + r * n);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: b,
                                    onMouseEnter: O,
                                },
                                m().createElement('div', { ref: v, className: u.thumb }),
                                m().createElement('div', { className: n()(_.Z.rail, u.rail) }),
                            ),
                            m().createElement('div', {
                                className: n()(_.Z.bottomButton, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(d) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), N(E.Nm.Prev));
                                },
                                onMouseUp: L,
                                ref: h,
                                onMouseEnter: O,
                            }),
                        );
                    });
            },
            1158: (e, u, t) => {
                'use strict';
                t.d(u, { K: () => c });
                var r = t(6483),
                    n = t.n(r),
                    a = t(6179),
                    s = t.n(a),
                    o = t(6225),
                    i = t(9605),
                    l = t(5636);
                const c = ({
                    children: e,
                    api: u,
                    className: t,
                    barClassNames: r,
                    areaClassName: c,
                    scrollClassName: m,
                    scrollClassNames: E,
                    getStepByRailClick: _,
                    onDrag: d,
                }) => {
                    const A = (0, a.useMemo)(() => {
                            const e = r || {};
                            return Object.assign({}, e, { base: n()(l.Z.base, e.base) });
                        }, [r]),
                        F = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                    return s().createElement(
                        'div',
                        { className: n()(l.Z.defaultScroll, t), onWheel: u.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: n()(l.Z.area, c) },
                            s().createElement(i.Area, { className: m, classNames: E, api: F }, e),
                        ),
                        s().createElement(o.$Q, { getStepByRailClick: _, api: u, onDrag: d, classNames: A }),
                    );
                };
            },
            9605: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, { Area: () => E, Bar: () => i.$Q, Default: () => l.K, useVerticalScrollApi: () => c.c4 }));
                var r = t(6483),
                    n = t.n(r),
                    a = t(1856),
                    s = t(6179),
                    o = t.n(s),
                    i = t(6225),
                    l = t(1158),
                    c = t(7701),
                    m = t(5636);
                const E = ({ className: e, classNames: u, children: t, api: r }) => (
                    (0, s.useEffect)(() => (0, a.v)(r.recalculateContent)),
                    o().createElement(
                        'div',
                        { className: n()(m.Z.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                        o().createElement(
                            'div',
                            { className: n()(m.Z.content, null == u ? void 0 : u.content), ref: r.contentRef },
                            t,
                        ),
                    )
                );
                E.Default = l.K;
            },
            7701: (e, u, t) => {
                'use strict';
                t.d(u, { Nm: () => r.Nm, c4: () => n });
                var r = t(7308);
                const n = (0, r.EO)({
                    getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                    getContainerSize: (e) => e.scrollHeight,
                    getWrapperSize: (e) => e.offsetHeight,
                    setScrollPosition: (e, u) => {
                        e.scrollTop = u.value.scrollPosition;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? r.Nm.Next : r.Nm.Prev),
                });
            },
            7308: (e, u, t) => {
                'use strict';
                t.d(u, { EO: () => d, Nm: () => E, he: () => _ });
                var r = t(7515),
                    n = t(1856),
                    a = t(3138),
                    s = t(4532),
                    o = t(9653),
                    i = t(3815),
                    l = t(4489),
                    c = t(6179),
                    m = t(7030);
                let E;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(E || (E = {}));
                const _ = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    d = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: E,
                        getWrapperSize: d,
                        triggerMouseMoveOnUpdate: A = !1,
                    }) => {
                        const F = (e, t) => {
                            const n = u(e),
                                a = n[0],
                                s = n[1];
                            return (0, r.u)(a, s, t);
                        };
                        return (r = {}) => {
                            const D = r.settings,
                                g = void 0 === D ? _ : D,
                                p = (0, c.useRef)(null),
                                B = (0, c.useRef)(null),
                                C = (0, o.q)(),
                                h = (0, l.f)(
                                    () => {
                                        a.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                b = (0, m.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = p.current;
                                        u && (t(u, e), C.trigger('change', e), A && h());
                                    },
                                    onRest: (e) => C.trigger('rest', e),
                                    onStart: (e) => C.trigger('start', e),
                                    onPause: (e) => C.trigger('pause', e),
                                })),
                                v = b[0],
                                f = b[1],
                                w = (0, c.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const n = v.scrollPosition.get(),
                                            a = (null != (r = v.scrollPosition.goal) ? r : 0) - n;
                                        return F(e, u * t + a + n);
                                    },
                                    [v.scrollPosition],
                                ),
                                S = (0, c.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = p.current;
                                        r &&
                                            f.start({
                                                scrollPosition: F(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: g.animationConfig,
                                                from: { scrollPosition: F(r, v.scrollPosition.get()) },
                                            });
                                    },
                                    [f, g.animationConfig, v.scrollPosition],
                                ),
                                x = (0, c.useCallback)(
                                    (e) => {
                                        const u = p.current,
                                            t = B.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return d(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, g.step),
                                            n = w(u, e, r);
                                        S(n);
                                    },
                                    [S, w, g.step],
                                ),
                                T = (0, c.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && x(E(e)),
                                            p.current && C.trigger('mouseWheel', e, v.scrollPosition, u(p.current)));
                                    },
                                    [v.scrollPosition, x, C],
                                ),
                                R = (0, s.M)(
                                    () =>
                                        (0, n.v)(() => {
                                            const e = p.current;
                                            e &&
                                                (S(F(e, v.scrollPosition.goal), { immediate: !0 }),
                                                C.trigger('resizeHandled'));
                                        }),
                                    [S, v.scrollPosition.goal],
                                ),
                                y = (0, i.z)(() => {
                                    const e = p.current;
                                    if (!e) return;
                                    const u = F(e, v.scrollPosition.goal);
                                    (u !== v.scrollPosition.goal && S(u, { immediate: !0 }),
                                        C.trigger('recalculateContent'));
                                });
                            (0, c.useEffect)(
                                () => (
                                    window.addEventListener('resize', R),
                                    () => {
                                        window.removeEventListener('resize', R);
                                    }
                                ),
                                [R],
                            );
                            const P = (0, c.useCallback)((e) => C.trigger('isThumbDraggingChanged', e), [C]);
                            return (0, c.useMemo)(
                                () => ({
                                    getWrapperSize: () => (B.current ? d(B.current) : void 0),
                                    getContainerSize: () => (p.current ? e(p.current) : void 0),
                                    getBounds: () =>
                                        p.current
                                            ? u(p.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: g.step.clampedArrowStepTimeout,
                                    clampPosition: F,
                                    handleMouseWheel: T,
                                    applyScroll: S,
                                    applyStepTo: x,
                                    contentRef: p,
                                    wrapperRef: B,
                                    scrollPosition: f,
                                    animationScroll: v,
                                    recalculateContent: y,
                                    handleIsThumbDragging: P,
                                    events: { on: C.on, off: C.off },
                                }),
                                [v.scrollPosition, S, x, P, C.off, C.on, y, T, f, g.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            794: (e, u, t) => {
                'use strict';
                t.d(u, { X: () => n });
                var r = t(7950);
                const n = { Vertical: t(9605), Horizontal: r };
            },
            7613: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => b });
                var r = t(6483),
                    n = t.n(r),
                    a = t(3779),
                    s = t(280),
                    o = t(3532),
                    i = t.n(o),
                    l = t(9887),
                    c = t.n(l),
                    m = t(3377),
                    E = t(6179),
                    _ = t.n(E),
                    d = t(3393);
                const A = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function F() {
                    return (
                        (F =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        F.apply(this, arguments)
                    );
                }
                Object.keys(c());
                const D = Object.keys(i()),
                    g = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    p = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    B = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    C =
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
                            'heading-H56': g,
                            'heading-H36': g,
                            'heading-H28': p,
                            'heading-H24': p,
                            'heading-H24R': p,
                            'heading-H22': p,
                            'heading-H20R': p,
                            'heading-H18': p,
                            'heading-H15': B,
                            'heading-H14': B,
                            'paragraph-P24': p,
                            'paragraph-P18': p,
                            'paragraph-P16': p,
                            'paragraph-P14': B,
                            'paragraph-P12': B,
                            'paragraph-P10': B,
                        }),
                    h =
                        (Object.keys(C),
                        (e) =>
                            e
                                ? ((e) => D.includes(e))(e)
                                    ? { colorClassName: d.Z[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    b = (0, m.ZP)((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            o = e.color,
                            i = e.m,
                            l = e.mt,
                            c = void 0 === l ? i : l,
                            m = e.mr,
                            D = void 0 === m ? i : m,
                            g = e.mb,
                            p = void 0 === g ? i : g,
                            B = e.ml,
                            b = void 0 === B ? i : B,
                            v = e.style,
                            f = e.format,
                            w = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, A);
                        const S = (0, E.useMemo)(() => {
                                const e = h(o),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, v, r), colorClassName: u };
                            }, [v, o]),
                            x = S.computedStyle,
                            T = S.colorClassName;
                        return _().createElement(
                            a.ZP,
                            F(
                                {
                                    className: n()(d.Z.base, t && d.Z[t], T, r),
                                    style: x,
                                    mt: !0 === c ? C[t || 'paragraph-P16'].mt : c,
                                    mr: !0 === D ? C[t || 'paragraph-P16'].mr : D,
                                    mb: !0 === p ? C[t || 'paragraph-P16'].mb : p,
                                    ml: !0 === b ? C[t || 'paragraph-P16'].ml : b,
                                },
                                w,
                            ),
                            void 0 !== f ? _().createElement(s.z, F({}, f, { text: u })) : u,
                        );
                    });
            },
            7078: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => i });
                var r = t(6179),
                    n = t.n(r),
                    a = t(2056);
                const s = ['children'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
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
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, s);
                    return n().createElement(
                        a.u,
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
                var r = t(6179),
                    n = t.n(r),
                    a = t(7078),
                    s = t(6373),
                    o = t(2056);
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const r = n().createElement('div', { className: t }, e);
                    if (u.header || u.body) return n().createElement(s.i, u, r);
                    const l = u.contentId,
                        c = u.args,
                        m = null == c ? void 0 : c.contentId;
                    return l || m
                        ? n().createElement(o.u, i({}, u, { contentId: l || m }), r)
                        : n().createElement(a.t, u, r);
                };
            },
            6373: (e, u, t) => {
                'use strict';
                t.d(u, { i: () => l });
                var r = t(2056),
                    n = t(6179),
                    a = t.n(n);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
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
                            m = e.alert,
                            E = e.args,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, s);
                        const d = (0, n.useMemo)(() => {
                            const e = Object.assign({}, E, { body: t, header: l, note: c, alert: m });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [m, t, l, c, E]);
                        return a().createElement(
                            r.u,
                            o(
                                {
                                    contentId:
                                        ((A = null == E ? void 0 : E.hasHtmlContent),
                                        A ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: d,
                                },
                                _,
                            ),
                            u,
                        );
                        var A;
                    };
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var r = t(7902),
                    n = t(4179),
                    a = t(6179);
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
                const i = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    l = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            m = e.onMouseDown,
                            E = e.onClick,
                            _ = e.ignoreShowDelay,
                            d = void 0 !== _ && _,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            D = e.decoratorId,
                            g = void 0 === D ? 0 : D,
                            p = e.isEnabled,
                            B = void 0 === p || p,
                            C = e.targetId,
                            h = void 0 === C ? 0 : C,
                            b = e.onShow,
                            v = e.onHide,
                            f = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, s);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, a.useMemo)(() => h || (0, r.F)().resId, [h]),
                            x = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (i(t, g, { isMouseEvent: !0, on: !0, arguments: o(n) }, S),
                                    b && b(),
                                    (w.current.isVisible = !0));
                            }, [t, g, n, S, b]),
                            T = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        i(t, g, { on: !1 }, S),
                                        w.current.isVisible && v && v(),
                                        (w.current.isVisible = !1));
                                }
                            }, [t, g, S, v]),
                            R = (0, a.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && T();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = w.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', R, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', R, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === B && T();
                            }, [B, T]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', T),
                                    () => {
                                        (window.removeEventListener('mouseleave', T), T());
                                    }
                                ),
                                [T],
                            ),
                            B
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((y = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((w.current.timeoutId = window.setTimeout(x, d ? 100 : 400)),
                                                          l && l(e),
                                                          y && y(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (T(), null == c || c(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === F && T(), null == E || E(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === F && T(), null == m || m(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          f,
                                      ),
                                  )
                                : u
                        );
                        var y;
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
            7515: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => r });
                const r = (e, u, t) => (t < e ? e : t > u ? u : t);
            },
            1856: (e, u, t) => {
                'use strict';
                t.d(u, { v: () => r });
                const r = (e) => {
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
            },
            122: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => r });
                const r = (e, u) => {
                    let t;
                    const r = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        ('function' == typeof t && t(), clearTimeout(r));
                    };
                };
            },
            8246: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => s });
                var r = t(3138);
                function n(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const a = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: u = 0, getRoot: t = a, context: s = 'model' } = {}) {
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
                        const r = t(u),
                            n = s.split('.').reduce((e, u) => e[u], r);
                        return 'string' != typeof e || 0 === e.length
                            ? n
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, n);
                    };
                    return {
                        subscribe: (t, n) => {
                            const a = 'string' == typeof n ? `${s}.${n}` : s,
                                i = r.O.view.addModelObserver(a, u, !0);
                            return (o.set(i, t), e && t(l(n)), i);
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
                                                    if ('string' == typeof e) return n(e, u);
                                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === t && e.constructor && (t = e.constructor.name),
                                                        'Map' === t || 'Set' === t
                                                            ? Array.from(e)
                                                            : 'Arguments' === t ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                                              ? n(e, u)
                                                              : void 0
                                                    );
                                                }
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
                var r = t(4598),
                    n = t(9174),
                    a = t(6179),
                    s = t.n(a),
                    o = t(8246);
                const i = () => (e, u) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: m }) {
                            const E = (0, a.useRef)([]),
                                _ = (t, a, s) => {
                                    var i;
                                    const l = o.U(a),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == s ? void 0 : s.getter) ? i : () => {},
                                                  }),
                                        m = (e) =>
                                            'mocks' === t ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        _ = (e) => E.current.push(e),
                                        d = e({
                                            mode: t,
                                            readByPath: m,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const a = null != u ? u : m(e),
                                                        s = n.LO.box(a, { equals: r.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const a = null != u ? u : m(e),
                                                        s = n.LO.box(a, { equals: r.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const r = m(u);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, u) => ((e[u] = n.LO.box(r[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, n.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            a[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = e,
                                                            s = Object.entries(a),
                                                            o = s.reduce(
                                                                (e, [u, t]) => ((e[t] = n.LO.box(r[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, n.aD)((e) => {
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
                                            cleanup: _,
                                        }),
                                        A = { mode: t, model: d, externalModel: c, cleanup: _ };
                                    return {
                                        model: d,
                                        controls: 'mocks' === t && s ? s.controls(A) : u(A),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                d = (0, a.useRef)(!1),
                                A = (0, a.useState)(i),
                                F = A[0],
                                D = A[1],
                                g = (0, a.useState)(() => _(i, l, m)),
                                p = g[0],
                                B = g[1];
                            return (
                                (0, a.useEffect)(() => {
                                    d.current ? B(_(F, l, m)) : (d.current = !0);
                                }, [m, F, l]),
                                (0, a.useEffect)(() => {
                                    D(i);
                                }, [i]),
                                (0, a.useEffect)(
                                    () => () => {
                                        (p.externalModel.dispose(), E.current.forEach((e) => e()));
                                    },
                                    [p],
                                ),
                                s().createElement(t.Provider, { value: p }, c)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
            },
            7044: (e, u, t) => {
                'use strict';
                (t.d(u, { f8: () => i, oG: () => r, s_: () => n, yR: () => a }), t(3649), t(728), t(4179));
                const r = 60,
                    n = 1e3,
                    a = 60,
                    s = 60 * a,
                    o = 24 * s;
                function i(e = 0) {
                    let u = e;
                    const t = Math.trunc(u / o);
                    u -= t * o;
                    const r = Math.trunc(u / s);
                    u -= r * s;
                    const n = Math.trunc(u / a);
                    return ((u -= n * a), { days: t, hours: r, minutes: n, seconds: u });
                }
                Date.now();
            },
            527: (e, u, t) => {
                'use strict';
                (t.r(u), t.d(u, { mouse: () => o, onResize: () => a }));
                var r = t(2472),
                    n = t(1176);
                const a = (0, r.E)('clientResized'),
                    s = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    o = (function () {
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
                                            o = s[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, i),
                                            r(),
                                            () => {
                                                n &&
                                                    (o(),
                                                    window.removeEventListener(a, i),
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
                                ((e.enabled = !1), r());
                            },
                            enable() {
                                ((e.enabled = !0), r());
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
                (t.r(u),
                    t.d(u, {
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => n,
                        graphicsQuality: () => s,
                    }));
                var r = t(527);
                function n(e = 'px') {
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
            1176: (e, u, t) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => r });
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
                t.d(u, { O: () => n });
                var r = t(5959);
                const n = { view: t(7641), client: r };
            },
            3722: (e, u, t) => {
                'use strict';
                function r(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${r(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => r }));
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
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => w,
                        events: () => a.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getScale: () => F,
                        getSize: () => E,
                        getViewGlobalPosition: () => d,
                        isClientAccessible: () => C,
                        isEventHandled: () => b,
                        isFocused: () => B,
                        pxToRem: () => D,
                        remToPx: () => g,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => x,
                    }));
                var r = t(3722),
                    n = t(6112),
                    a = t(6538),
                    s = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function d(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: g(u.x), y: g(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.isClientAccessible();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
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
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => a });
                const r = ['args'],
                    n = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
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
                    a = {
                        close(e) {
                            n('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(e) {
                            n(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                'use strict';
                function r() {
                    return !1;
                }
                (t.d(u, { jv: () => r }), console.log);
            },
            7902: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => r });
                const r = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        r = R.invalid('resId');
                    return (
                        u &&
                            ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (r = window.subViews[t].id)),
                        { caller: t, stack: u, resId: r }
                    );
                };
            },
            3377: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => c });
                var r = t(5415),
                    n = t(6179),
                    a = t.n(n);
                const s = ['xl', 'lg', 'md', 'sm', 'xs'],
                    o = (e) => e.includes('_') && ((e) => s.includes(e))(e.split('_').at(-1)),
                    i = [r.cJ.ExtraLarge, r.cJ.Large, r.cJ.Medium, r.cJ.Small, r.cJ.ExtraSmall],
                    l = (e, u) =>
                        Object.keys(e).reduce((t, r) => {
                            if (r in t) return t;
                            if (o(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const a = i.indexOf(u),
                                    o = (-1 !== a ? s.slice(a) : [])
                                        .map((e) => n + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    l = o ? e[o] : void 0;
                                return ((t[n] = void 0 !== l ? l : e[n]), t);
                            }
                            const n = e[r];
                            return (
                                void 0 === n ||
                                    ((e, u) => s.some((t) => void 0 !== u[`${e}_${t}`]))(r, e) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    c = (e, u = l) => {
                        const t = (
                            (e, u = l) =>
                            (t) => {
                                const s = (0, r.GS)().mediaSize,
                                    o = (0, n.useMemo)(() => u(t, s), [t, s]);
                                return a().createElement(e, o);
                            }
                        )(e, u);
                        return a().memo((u) =>
                            Object.keys(u).some((e) => o(e) && void 0 !== u[e])
                                ? a().createElement(t, u)
                                : a().createElement(e, u),
                        );
                    };
            },
            2344: (e, u, t) => {
                'use strict';
                (t.d(u, { au: () => n }), t(2790));
                var r = t(3469);
                (t(2133), t(579), t(5360), t(9056));
                const n = r.Z;
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var r = t(6179);
                const n = (e) => {
                    const u = (0, r.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            4532: (e, u, t) => {
                'use strict';
                t.d(u, { M: () => n });
                var r = t(6179);
                const n = (e, u = []) => {
                    const t = (0, r.useRef)(),
                        n = (0, r.useCallback)((...u) => {
                            (t.current && t.current(), (t.current = e(...u)));
                        }, u);
                    return (
                        (0, r.useEffect)(
                            () => () => {
                                t.current && t.current();
                            },
                            [n],
                        ),
                        n
                    );
                };
            },
            3469: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => s });
                var r = t(7044),
                    n = t(6179);
                const a = () => {},
                    s = (e = 0, u, t = 0, s = a) => {
                        const o = (0, n.useState)(e),
                            i = o[0],
                            l = o[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    l(e);
                                    const n = Date.now(),
                                        a = u || (e > 2 * r.yR ? r.yR : 1),
                                        o = setInterval(() => {
                                            const u = e - Math.floor((Date.now() - n) / r.s_);
                                            null !== t && u <= t ? (l(t), s && s(), clearInterval(o)) : l(u);
                                        }, a * r.s_);
                                    return () => {
                                        clearInterval(o);
                                    };
                                }
                                l(0);
                            }, [e, u, t, s]),
                            i
                        );
                    };
            },
            2133: (e, u, t) => {
                'use strict';
                t(6179);
            },
            9653: (e, u, t) => {
                'use strict';
                t.d(u, { q: () => a });
                var r = t(6179);
                function n(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const a = () => {
                    const e = (0, r.useMemo)(() => ({}), []),
                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                        t = (e, t) => {
                            u(e).set(t, t);
                        },
                        a = (e, t) => {
                            u(e).delete(t);
                        },
                        s = (e, ...t) => {
                            for (
                                var r,
                                    a = (function (e, u) {
                                        var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (t) return (t = t.call(e)).next.bind(t);
                                        if (
                                            Array.isArray(e) ||
                                            (t = (function (e, u) {
                                                if (e) {
                                                    if ('string' == typeof e) return n(e, u);
                                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === t && e.constructor && (t = e.constructor.name),
                                                        'Map' === t || 'Set' === t
                                                            ? Array.from(e)
                                                            : 'Arguments' === t ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                                              ? n(e, u)
                                                              : void 0
                                                    );
                                                }
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
                                    })(u(e).values());
                                !(r = a()).done;
                            )
                                (0, r.value)(...t);
                        };
                    return (0, r.useMemo)(() => ({ on: t, off: a, trigger: s }), []);
                };
            },
            3815: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => a });
                var r = t(6179);
                const n = [];
                function a(e) {
                    const u = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, u.current)(...e), n)
                    );
                }
            },
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { GS: () => l, cJ: () => s });
                var r = t(6179),
                    n = t(7739),
                    a = t(1043);
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
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            5360: (e, u, t) => {
                'use strict';
                t(6536);
                var r = t(4179);
                let n;
                (t(6179),
                    r.Sw.instance,
                    (function (e) {
                        ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                    })(n || (n = {})));
            },
            9056: (e, u, t) => {
                'use strict';
                var r = t(4179);
                (t(6179), r.Sw.instance);
            },
            2790: (e, u, t) => {
                'use strict';
                t(6179);
            },
            560: (e, u, t) => {
                'use strict';
                t.d(u, { B: () => n });
                var r = t(6179);
                function n(e, u, t = []) {
                    const n = (0, r.useRef)(0),
                        a = (0, r.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, r.useEffect)(() => a, [a]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, r.useCallback)((t) => {
                            ((n.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, s),
                        a,
                    ];
                }
            },
            9630: (e, u, t) => {
                'use strict';
                t.d(u, { a: () => n });
                var r = t(6179);
                function n(e, u) {
                    (0, r.useEffect)(
                        () => (window.addEventListener('resize', e), () => window.removeEventListener('resize', e)),
                        u,
                    );
                }
            },
            579: (e, u, t) => {
                'use strict';
                (t(3138), t(6179));
            },
            4489: (e, u, t) => {
                'use strict';
                t.d(u, { f: () => a });
                var r = t(5139),
                    n = t(6179);
                function a(e, u, t) {
                    const a = (0, n.useMemo)(() => (0, r.Z)(t, e), u);
                    return ((0, n.useEffect)(() => a.cancel, [a]), a);
                }
            },
            5521: (e, u, t) => {
                'use strict';
                let r, n;
                (t.d(u, { n: () => r }),
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
                    })(r || (r = {})),
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
                    })(n || (n = {})));
            },
            5175: (e, u, t) => {
                'use strict';
                t.d(u, { c: () => a });
                var r = t(9480);
                const n = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? r.UI(e, (e) => ('object' == typeof e ? n(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? n(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? n(u) : u]),
                                    )
                            : e,
                    a = (e) => n(e);
            },
            9480: (e, u, t) => {
                'use strict';
                function r(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, r) => u(null == e ? void 0 : e.value, t, r));
                }
                t.d(u, { UI: () => r });
            },
            7727: (e, u, t) => {
                'use strict';
                function r(e) {
                    engine.call('PlaySound', e);
                }
                t.d(u, { $: () => n, G: () => r });
                const n = {
                    playHighlight() {
                        r('highlight');
                    },
                    playClick() {
                        r('play');
                    },
                    playYes() {
                        r('yes1');
                    },
                };
            },
            3649: (e, u, t) => {
                'use strict';
                let r;
                function n(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                function a(e) {
                    return e.replace(/-/g, '_');
                }
                (t.d(u, { BN: () => a, Uw: () => m, uF: () => n, v2: () => r }),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(r || (r = {})));
                const s = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    o = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    i = (e, u, t = r.left) => e.split(u).reduce(t === r.left ? s : o, []),
                    l = (() => {
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
                    c = ['zh_cn', 'zh_sg', 'zh_tw'],
                    m = (e, u, t) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            t && e in t
                                ? t[e]
                                : ((e, u = r.left) => {
                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return c.includes(t)
                                          ? l(e)
                                          : ((e, u = r.left) => {
                                                let t = [];
                                                const n =
                                                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                    a = e.replace(/&nbsp;/g, ' ');
                                                return (
                                                    i(a, /( )/, u).forEach((e) => (t = t.concat(i(e, n, r.left)))),
                                                    t
                                                );
                                            })(e, u);
                                  })(e, u),
                        );
            },
            5139: (e, u, t) => {
                'use strict';
                function r(e, u, t, r) {
                    let n,
                        a = !1,
                        s = 0;
                    function o() {
                        n && clearTimeout(n);
                    }
                    function i(...i) {
                        const l = this,
                            c = Date.now() - s;
                        function m() {
                            ((s = Date.now()), t.apply(l, i));
                        }
                        a ||
                            (r && !n && m(),
                            o(),
                            void 0 === r && c > e
                                ? m()
                                : !0 !== u &&
                                  (n = setTimeout(
                                      r
                                          ? function () {
                                                n = void 0;
                                            }
                                          : m,
                                      void 0 === r ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof u && ((r = t), (t = u), (u = void 0)),
                        (i.cancel = function () {
                            (o(), (a = !0));
                        }),
                        i
                    );
                }
                t.d(u, { Z: () => r });
            },
            728: (e, u, t) => {
                'use strict';
                let r;
                !(function (e) {
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
                })(r || (r = {}));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var r = t(3138);
                class n {
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
                        return (window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
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
                t.d(u, { Sw: () => a.Z, B3: () => c, Gr: () => m, Z5: () => s, B0: () => i, ry: () => p });
                class r {
                    constructor() {
                        ((this.entries = []),
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
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            r = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== r)),
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
                var a = t(1358);
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
                    m = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(3138);
                const F = ['args'];
                function D(e, u, t, r, n, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(r, n);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                            D(a, r, n, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            D(a, r, n, s, o, 'throw', e);
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
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, F);
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
                    C = () => B(i.CLOSE),
                    h = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var b = t(7572);
                const v = n.instance,
                    f = {
                        DataTracker: a.Z,
                        ViewModel: b.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: m,
                        TimeFormatType: E,
                        DateFormatType: _,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => B(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => B(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, n = R.invalid('resId'), a) => {
                            const s = A.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                m = o.width,
                                E = o.height,
                                _ = {
                                    x: A.O.view.pxToRem(l) + s.x,
                                    y: A.O.view.pxToRem(c) + s.y,
                                    width: A.O.view.pxToRem(m),
                                    height: A.O.view.pxToRem(E),
                                };
                            B(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: g(_),
                                on: !0,
                                args: a,
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
                            h(e, C);
                        },
                        handleViewEvent: B,
                        onBindingsReady: p,
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
                        ClickOutsideManager: v,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = f;
            },
            7260: (e, u, t) => {
                'use strict';
                t.d(u, { B: () => c });
                var r = t(6179),
                    n = t.n(r),
                    a = t(280),
                    s = t(8852);
                const o = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    i = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    l = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    c = (0, r.memo)(({ text: e, binding: u, classMix: t }) => {
                        const c = (0, r.useCallback)((e) => ({ color: `#${e}` }), []),
                            m = (0, r.useMemo)(() => u || {}, [u]);
                        let E = o.exec(e),
                            _ = e,
                            d = 0;
                        for (; E;) {
                            const t = E[0],
                                r = i.exec(t),
                                A = l.exec(t),
                                F = E[1];
                            if (r && A) {
                                const e = r[0],
                                    o = e + d++ + e;
                                ((_ = _.replace(t, `%(${o})`)),
                                    (m[o] = s.Z[e]
                                        ? n().createElement(
                                              'span',
                                              { className: s.Z[e] },
                                              n().createElement(a.z, { text: F, binding: u }),
                                          )
                                        : n().createElement(
                                              'span',
                                              { style: c(e) },
                                              n().createElement(a.z, { text: F, binding: u }),
                                          )));
                            }
                            E = o.exec(e);
                        }
                        return n().createElement(a.z, { text: _, classMix: t, binding: m });
                    });
            },
            8933: (e, u, t) => {
                'use strict';
                let r, n;
                (t(2862).E4.Vehicles,
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.Colored = 'colored'), (e.White = 'white'), (e.WhiteSpanish = 'whiteSpanish'));
                    })(n || (n = {})));
            },
            2094: (e, u, t) => {
                'use strict';
                var r = t(6179),
                    n = t.n(r),
                    a = t(6483),
                    s = t.n(a),
                    o = t(7727);
                const i = n().memo,
                    l = {
                        base: 'HorizontalTabs_base_92',
                        tab: 'HorizontalTabs_tab_ca',
                        tab__medium: 'HorizontalTabs_tab__medium_88',
                        tab__active: 'HorizontalTabs_tab__active_3e',
                        tab__nonInteractive: 'HorizontalTabs_tab__nonInteractive_ce',
                        state: 'HorizontalTabs_state_3d',
                        highlight: 'HorizontalTabs_highlight_9e',
                        border: 'HorizontalTabs_border_08',
                        border__left: 'HorizontalTabs_border__left_64',
                        border__right: 'HorizontalTabs_border__right_45',
                        divider: 'HorizontalTabs_divider_6f',
                        title: 'HorizontalTabs_title_10',
                        notification: 'HorizontalTabs_notification_89',
                        notification__symbol: 'HorizontalTabs_notification__symbol_8b',
                        notification__small: 'HorizontalTabs_notification__small_7c',
                        notification__large: 'HorizontalTabs_notification__large_a2',
                        notification__dot: 'HorizontalTabs_notification__dot_d7',
                        notification__medium: 'HorizontalTabs_notification__medium_19',
                    },
                    c = { mouseEnter: 'highlight', click: 'play' },
                    m = (e, { active: u, enableInteractiveActiveTab: t = !1 }) => !!t || e !== u,
                    E = i(function (e) {
                        const u = e.active,
                            t = e.tabs,
                            r = e.onClick,
                            a = e.onMouseEnter,
                            i = e.onMouseLeave,
                            E = e.className,
                            _ = e.classNames,
                            d = e.sounds,
                            A = void 0 === d ? c : d,
                            F = (u) => () => {
                                m(u, e) && (A.click && (0, o.G)(A.click), null == r || r(u));
                            },
                            D = (u) => () => {
                                m(u, e) && (A.mouseEnter && (0, o.G)(A.mouseEnter), null == a || a(u));
                            },
                            g = (u) => () => {
                                m(u, e) && (A.mouseLeave && (0, o.G)(A.mouseLeave), null == i || i(u));
                            };
                        return n().createElement(
                            'div',
                            { className: s()(l.base, E) },
                            t.map(({ id: r, title: a, notification: o }, i) => {
                                var c;
                                return n().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            l.tab,
                                            r === u && s()(l.tab__active, null == _ ? void 0 : _.activeTab),
                                            !m(r, e) && l.tab__nonInteractive,
                                            null == _ ? void 0 : _.tab,
                                        ),
                                        key: r,
                                        onClick: F(r),
                                        onMouseEnter: D(r),
                                        onMouseLeave: g(r),
                                    },
                                    ((e, u) => !((e, u) => e.length - 1 === u)(e, u))(t, i) &&
                                        n().createElement('div', {
                                            className: s()(l.divider, null == _ ? void 0 : _.divider),
                                        }),
                                    n().createElement(
                                        'div',
                                        { className: s()(l.state, null == _ ? void 0 : _.state) },
                                        n().createElement('div', {
                                            className: s()(l.highlight, null == _ ? void 0 : _.highlight),
                                        }),
                                        n().createElement('div', {
                                            className: s()(
                                                l.border,
                                                l.border__left,
                                                null == _ ? void 0 : _.border,
                                                null == _ ? void 0 : _.borderLeft,
                                            ),
                                        }),
                                        n().createElement('div', {
                                            className: s()(
                                                l.border,
                                                l.border__right,
                                                null == _ ? void 0 : _.border,
                                                null == _ ? void 0 : _.borderRight,
                                            ),
                                        }),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: s()(l.title, null == _ ? void 0 : _.title) },
                                        a,
                                    ),
                                    void 0 !== o &&
                                        n().createElement(
                                            'div',
                                            {
                                                className: s()(
                                                    l.notification,
                                                    l[`notification__${o.type}`],
                                                    l[`notification__${null != (c = o.size) ? c : 'medium'}`],
                                                    null == _ ? void 0 : _.notification,
                                                ),
                                            },
                                            'dot' !== o.type && o.value,
                                        ),
                                );
                            }),
                        );
                    });
                var _ = t(794),
                    d = t(7701),
                    A = t(7613),
                    F = t(122);
                const D = {
                    linear: (e) => e,
                    easeInQuad: (e) => e * e,
                    easeOutQuad: (e) => e * (2 - e),
                    easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1),
                    easeInCubic: (e) => e * e * e,
                    easeOutCubic: (e) => --e * e * e + 1,
                    easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                    easeInQuart: (e) => e * e * e * e,
                    easeOutQuart: (e) => 1 - --e * e * e * e,
                    easeInOutQuart: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e),
                    easeInQuint: (e) => e * e * e * e * e,
                    easeOutQuint: (e) => 1 + --e * e * e * e * e,
                    easeInOutQuint: (e) => (e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e),
                };
                var g = t(5415),
                    p = t(9630),
                    B = t(3403),
                    C = t(7030),
                    h = t(7260);
                const b = {
                    base: 'App_base_2c',
                    fadeIn: 'App_fadeIn_c1',
                    button: 'App_button_6c',
                    contentWrapper: 'App_contentWrapper_e9',
                    base__general_1: 'App_base__general_1_34',
                    background: 'App_background_d7',
                    header: 'App_header_2a',
                    tabsWrapper: 'App_tabsWrapper_f4',
                    tab: 'App_tab_ff',
                    tabTitle: 'App_tabTitle_7f',
                    activeTab: 'App_activeTab_fe',
                    content: 'App_content_84',
                    person: 'App_person_50',
                    person__assignments: 'App_person__assignments_11',
                    person__challenge: 'App_person__challenge_43',
                    voice: 'App_voice_83',
                    personMessage: 'App_personMessage_09',
                    bulletinBoard: 'App_bulletinBoard_e6',
                    errorWrapper: 'App_errorWrapper_99',
                    info: 'App_info_28',
                    wrapperTimeLeft: 'App_wrapperTimeLeft_35',
                    wrapperTimeLeft__hide: 'App_wrapperTimeLeft__hide_ae',
                    slideAndFadeTime: 'App_slideAndFadeTime_1d',
                    wrapperTimeLeft__show: 'App_wrapperTimeLeft__show_6a',
                    slideAndShowTime: 'App_slideAndShowTime_6f',
                    wrapperCountQuests: 'App_wrapperCountQuests_66',
                    wrapperCountQuests__hide: 'App_wrapperCountQuests__hide_9a',
                    slideAndFade: 'App_slideAndFade_5d',
                    wrapperCountQuests__show: 'App_wrapperCountQuests__show_3f',
                    slideAndShow: 'App_slideAndShow_db',
                    timer: 'App_timer_2f',
                    counterQuests: 'App_counterQuests_bd',
                    countdown: 'App_countdown_11',
                    scrollWrapper: 'App_scrollWrapper_5a',
                    scrollWrapper__hide: 'App_scrollWrapper__hide_18',
                    hideQuests: 'App_hideQuests_d6',
                    topLip: 'App_topLip_dd',
                    base__hasTopLip: 'App_base__hasTopLip_d0',
                    bar: 'App_bar_66',
                    bar__hide: 'App_bar__hide_1e',
                    bottomButton: 'App_bottomButton_06',
                    questsList: 'App_questsList_97',
                    quest: 'App_quest_df',
                    showQuest: 'App_showQuest_25',
                    questOffAnimation: 'App_questOffAnimation_80',
                    fadeOut: 'App_fadeOut_7a',
                };
                var v = t(2056);
                const f = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    w = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    S = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    x = (e) =>
                        S
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = w.length - 1; t >= 0; t--) for (; e >= w[t];) ((u += f[t]), (e -= w[t]));
                                  return u;
                              })(e),
                    T = R.strings.mt_birthday.quests.rules,
                    y = R.images.gui.maps.icons,
                    P = (0, r.memo)(({ minLevel: e, maxLevel: u, battleTypes: t }) => {
                        const a = (0, r.useMemo)(() => t.slice(0, 3), [t]);
                        return n().createElement(
                            v.u,
                            {
                                contentId: R.views.mt_birthday.lobby.tooltips.DescriptionRulesTooltip('resId'),
                                args: { minLevel: e, maxLevel: u, battleTypes: t },
                                ignoreShowDelay: !0,
                            },
                            n().createElement(
                                'div',
                                { className: 'DescriptionRules_base_20' },
                                n().createElement(A.ZP, { className: 'DescriptionRules_modes_a6', text: T.modes() }),
                                a.map((e, u) =>
                                    n().createElement('div', {
                                        className: s()(
                                            'DescriptionRules_battleTypeIcon_8d',
                                            u === a.length - 1 && 'DescriptionRules_battleTypeIcon__last_4f',
                                        ),
                                        key: e,
                                        style: { backgroundImage: `url(${y.quests.prebattleConditions.$num(e)})` },
                                    }),
                                ),
                                t.length > 3 &&
                                    n().createElement(A.ZP, {
                                        className: 'DescriptionRules_ellipsis_83',
                                        text: T.ellipsis(),
                                    }),
                                n().createElement('div', { className: 'DescriptionRules_conditionSeparator_e9' }),
                                n().createElement(h.B, {
                                    text: T.vehicleLevel(),
                                    binding: { minLvl: x(e), maxLvl: x(u) },
                                    classMix: 'DescriptionRules_vehicleLevel_db',
                                }),
                            ),
                        );
                    });
                var M = t(7044),
                    N = t(2344);
                var L = t(3649);
                const O = R.strings.mt_birthday.countdown.timeLeft,
                    k = ({ hours: e, minutes: u }) =>
                        e > 0 || u === M.oG - 1
                            ? u === M.oG - 1
                                ? (0, L.uF)(O.hour(), { hours: e + 1 })
                                : (0, L.uF)(O.hours(), { hours: e, minutes: u + 1 })
                            : u > 0
                              ? (0, L.uF)(O.minutes(), { minutes: u + 1 })
                              : O.lessOneMin(),
                    I = (0, r.memo)(({ timeToUpdate: e, isCounter: u = !1 }) => {
                        const t = (0, N.au)(e);
                        return n().createElement(
                            'div',
                            { className: 'GiverCountdown_base_89' },
                            n().createElement('div', {
                                className: u ? 'GiverCountdown_iconCounter_70' : 'GiverCountdown_icon_7c',
                            }),
                            n().createElement(A.ZP, {
                                text: k((0, M.f8)(t)),
                                className: s()(
                                    'GiverCountdown_countdownText_54',
                                    u ? 'GiverCountdown_textFontCounter_72' : 'GiverCountdown_textFont_1a',
                                ),
                            }),
                        );
                    });
                var H = t(2862);
                let W;
                !(function (e) {
                    ((e.Done = 'done'), (e.Locked = 'notAvailable'), (e.Disabled = 'disabled'), (e.Active = 'active'));
                })(W || (W = {}));
                const U = {
                    [g.cJ.ExtraSmall]: { questDividerHeight: 50, questCardHeight: 120, questCardMarginBottom: 8 },
                    [g.cJ.Small]: { questDividerHeight: 50, questCardHeight: 120, questCardMarginBottom: 8 },
                    [g.cJ.Medium]: { questDividerHeight: 50, questCardHeight: 140, questCardMarginBottom: 10 },
                    [g.cJ.Large]: { questDividerHeight: 60, questCardHeight: 160, questCardMarginBottom: 16 },
                    [g.cJ.ExtraLarge]: { questDividerHeight: 60, questCardHeight: 200, questCardMarginBottom: 20 },
                };
                var G = t(5739);
                function q() {
                    return (
                        (q =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        q.apply(this, arguments)
                    );
                }
                const z = (0, r.memo)(({ data: e, size: u = H.h2.Small }) =>
                        n().createElement(
                            'div',
                            { className: 'RewardsList_base_ab' },
                            e.map((e, t) =>
                                n().createElement(
                                    'div',
                                    { key: t + e.name, className: 'RewardsList_reward_9f' },
                                    n().createElement(
                                        G.Q,
                                        q({ size: u, classNames: { info: 'RewardsList_info_8d' } }, e),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    $ = {
                        base: 'Quest_base_7c',
                        questCardWrapper: 'Quest_questCardWrapper_d0',
                        questCardWrapper__left: 'Quest_questCardWrapper__left_65',
                        increaseWidth: 'Quest_increaseWidth_bf',
                        gradientBg: 'Quest_gradientBg_2b',
                        questCardWrapper__right: 'Quest_questCardWrapper__right_68',
                        decreaseWidth: 'Quest_decreaseWidth_1f',
                        questCard: 'Quest_questCard_dd',
                        questCard__done: 'Quest_questCard__done_8b',
                        doneBg: 'Quest_doneBg_8d',
                        disabledBg: 'Quest_disabledBg_8c',
                        counterBlock: 'Quest_counterBlock_aa',
                        counterComplete: 'Quest_counterComplete_9d',
                        content: 'Quest_content_f0',
                        questCard__disableAllQuests: 'Quest_questCard__disableAllQuests_60',
                        questCard__hideAllContent: 'Quest_questCard__hideAllContent_49',
                        quests: 'Quest_quests_93',
                        rewards: 'Quest_rewards_f6',
                        separator: 'Quest_separator_ea',
                        lockedBlock: 'Quest_lockedBlock_77',
                        disabledBlock: 'Quest_disabledBlock_70',
                        lockedContent: 'Quest_lockedContent_65',
                        disabledContent: 'Quest_disabledContent_af',
                        iconDisabled: 'Quest_iconDisabled_9a',
                        lockedText: 'Quest_lockedText_5c',
                        disabledText: 'Quest_disabledText_e7',
                        disabledDescription: 'Quest_disabledDescription_c7',
                        fadeIn: 'Quest_fadeIn_d2',
                        fadeOut: 'Quest_fadeOut_c0',
                    },
                    Z = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Q, j;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(Q || (Q = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(j || (j = {})));
                const X = ({ size: e = Q.Default, classMix: u }) =>
                        n().createElement('div', { className: s()(Z.background, Z[`background__${e}`], u) }),
                    Y = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    V = ({ size: e }) => {
                        const u = s()(Y.base, Y[`base__${e}`]);
                        return n().createElement('div', { className: u });
                    },
                    K = {
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
                    J = (0, r.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: r, isComplete: a, withoutBounce: o }) => {
                            const i = s()(
                                    K.base,
                                    K[`base__${e}`],
                                    t && K.base__disabled,
                                    a && K.base__finished,
                                    o && K.base__withoutBounce,
                                ),
                                l = !t && !a;
                            return n().createElement(
                                'div',
                                { className: i, style: r, ref: u },
                                n().createElement('div', { className: K.pattern }),
                                n().createElement('div', { className: K.gradient }),
                                l && n().createElement(V, { size: e }),
                            );
                        },
                    ),
                    ee = ({ size: e, value: u, lineRef: t, disabled: a, onComplete: s }) => {
                        const o = (0, r.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, r.useEffect)(() => {
                                i && s && s();
                            }, [i, s]),
                            n().createElement(J, { size: e, disabled: a, baseStyles: o, isComplete: i, lineRef: t })
                        );
                    };
                let ue, te;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(ue || (ue = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(te || (te = {})));
                const re = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < a,
                                m = (0, r.useState)(te.Idle),
                                E = m[0],
                                _ = m[1],
                                d = E === te.In,
                                A = E === te.End,
                                D = E === te.Idle,
                                g = (0, r.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, r.useEffect)(() => {
                                if (D && !t) {
                                    const e = u;
                                    return (0, F.F)(() => {
                                        g(te.In);
                                    }, e);
                                }
                            }, [g, t, D, u]),
                                (0, r.useEffect)(() => {
                                    if (d) {
                                        const t = e + u;
                                        return (0, F.F)(() => {
                                            (i && i(), g(te.End));
                                        }, t);
                                    }
                                }, [g, d, i, u, e]));
                            const p = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                B = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                C = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(a - o)}%`, left: `${c ? o : a}%` }),
                                    [a, c, o],
                                );
                            return A
                                ? null
                                : n().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: C },
                                      n().createElement(
                                          'div',
                                          { style: D ? p : B, className: 'ProgressBarDeltaSimple_delta_99' },
                                          n().createElement(V, { size: s }),
                                      ),
                                  );
                        },
                    ),
                    ne = (0, r.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return n().createElement(
                                n().Fragment,
                                null,
                                n().createElement(J, {
                                    size: u,
                                    lineRef: a,
                                    disabled: s,
                                    isComplete: o,
                                    baseStyles: m,
                                }),
                                t >= 0 &&
                                    n().createElement(re, {
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
                    ae = (e) => (e ? { left: 0 } : { right: 0 }),
                    se = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    oe = (e) => ({ transitionDuration: `${e}ms` }),
                    ie = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: o,
                            to: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                            className: m,
                        }) => {
                            const E = i < a,
                                _ = (0, r.useState)(ue.Idle),
                                d = _[0],
                                A = _[1],
                                D = d === ue.End,
                                g = d === ue.Idle,
                                p = d === ue.Grow,
                                B = d === ue.Shrink,
                                C = (0, r.useCallback)(
                                    (e) => {
                                        (A(e), c && c(e));
                                    },
                                    [c],
                                ),
                                h = (0, r.useCallback)(
                                    (e, u) =>
                                        (0, F.F)(() => {
                                            C(e);
                                        }, u),
                                    [C],
                                );
                            (0, r.useEffect)(() => {
                                if (!t)
                                    return g
                                        ? h(ue.Grow, u)
                                        : p
                                          ? h(ue.Shrink, e)
                                          : B
                                            ? h(ue.End, e)
                                            : void (D && l && l());
                            }, [h, t, D, p, g, B, l, u, e]);
                            const b = (0, r.useMemo)(() => Object.assign({ width: '100%' }, oe(e), ae(E)), [E, e]),
                                v = (0, r.useMemo)(() => Object.assign({ width: '0%' }, oe(e), ae(E)), [E, e]),
                                f = (0, r.useMemo)(() => Object.assign({ width: '0%' }, se(E, a), oe(e)), [a, E, e]),
                                w = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - a)}%` }, se(E, a), oe(e)),
                                    [a, E, i, e],
                                );
                            if (D) return null;
                            const S = s()(
                                'ProgressBarDeltaGrow_base_7e',
                                m,
                                E && 0 === i && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return n().createElement(
                                'div',
                                { style: g ? f : w, className: S },
                                n().createElement(
                                    'div',
                                    { style: B ? v : b, className: 'ProgressBarDeltaGrow_glow_68' },
                                    n().createElement(V, { size: o }),
                                ),
                            );
                        },
                    ),
                    le = (0, r.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < t,
                                E = (0, r.useState)(!1),
                                _ = E[0],
                                d = E[1],
                                A = (0, r.useCallback)(
                                    (e) => {
                                        (e === ue.Shrink && d(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                F = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                D = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return n().createElement(
                                n().Fragment,
                                null,
                                n().createElement(J, {
                                    size: u,
                                    lineRef: a,
                                    disabled: s,
                                    isComplete: o,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: _ ? D : F,
                                }),
                                t >= 0 &&
                                    n().createElement(ie, {
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
                    ce = ['onComplete', 'onEndAnimation'];
                function me() {
                    return (
                        (me =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        me.apply(this, arguments)
                    );
                }
                const Ee = (0, r.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, ce);
                        const s = (0, r.useState)(!1),
                            o = s[0],
                            i = s[1],
                            l = (0, r.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== o && i(e), e && u && u(), t && t());
                            }, [o, u, t, a.to]);
                        switch (a.animationSettings.type) {
                            case j.Simple:
                                return n().createElement(ne, me({}, a, { onEndAnimation: l, isComplete: o }));
                            case j.Growing:
                                return n().createElement(le, me({}, a, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    _e = ['onEndAnimation'];
                function de() {
                    return (
                        (de =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        de.apply(this, arguments)
                    );
                }
                const Ae = (0, r.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, _e);
                    const a = (0, r.useRef)({}),
                        s = (0, r.useCallback)(() => {
                            ((a.current.from = void 0), u && u());
                        }, [u]),
                        o = 'number' == typeof a.current.from ? a.current.from : t.from;
                    return (
                        (a.current.from = o),
                        n().createElement(Ee, de({}, t, { onEndAnimation: s, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function Fe() {
                    return (
                        (Fe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Fe.apply(this, arguments)
                    );
                }
                const De = (0, r.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: r,
                            deltaFrom: a,
                            animationSettings: s,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (a === u)
                                return n().createElement(ee, {
                                    key: `${a}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: r,
                                    onComplete: l,
                                });
                            const c = {
                                from: a,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: r,
                                animationSettings: s,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return s.withStack
                                ? n().createElement(Ae, c)
                                : n().createElement(Ee, Fe({ key: `${a}-${u}` }, c));
                        },
                    ),
                    ge = (e) => ({
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
                var pe = t(7515);
                const Be = (e, u, t) => ('number' == typeof t ? ((0, pe.u)(0, u, t) / u) * 100 : e),
                    Ce = {
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
                    he = {
                        freezed: !1,
                        withStack: !1,
                        type: j.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    be = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Ce,
                            size: t = Q.Default,
                            animationSettings: a = he,
                            disabled: o = !1,
                            withoutBackground: i = !1,
                            progressBarBackgroundClassMix: l,
                            value: c,
                            deltaFrom: m,
                            lineRef: E,
                            onChangeAnimationState: _,
                            onEndAnimation: d,
                            onComplete: A,
                        }) => {
                            const F = ((e, u, t) =>
                                (0, r.useMemo)(() => {
                                    const r = ((0, pe.u)(0, u, e) / u) * 100;
                                    return { value: r, deltaFrom: Be(r, u, t) };
                                }, [t, u, e]))(c, e, m);
                            return n().createElement(
                                'div',
                                { className: s()(Z.base, Z[`base__${t}`]), style: ge(u) },
                                !i && n().createElement(X, { size: t, classMix: l }),
                                n().createElement(De, {
                                    size: t,
                                    lineRef: E,
                                    disabled: o,
                                    value: F.value,
                                    deltaFrom: F.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: d,
                                    onChangeAnimationState: _,
                                    onComplete: A,
                                }),
                            );
                        },
                    );
                var ve = t(4179);
                const fe = {
                        base: 'QuestProgress_base_d5',
                        conditionSeparator: 'QuestProgress_conditionSeparator_98',
                        condition: 'QuestProgress_condition_70',
                        base__done: 'QuestProgress_base__done_14',
                        conditionText: 'QuestProgress_conditionText_fb',
                        progressTotal: 'QuestProgress_progressTotal_78',
                        conditionIcon: 'QuestProgress_conditionIcon_a7',
                        progressBar: 'QuestProgress_progressBar_5d',
                        progressBg: 'QuestProgress_progressBg_d1',
                    },
                    we = R.strings.mt_birthday.quests,
                    Se = (0, r.memo)(({ state: e, current: u, total: t, earned: a, iconKey: o }) => {
                        const i = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: `url('R.images.gui.maps.icons.quests.battleCondition.c_90.${'icon_battle_condition_' + o + '_90x90'}')`,
                                }),
                                [o],
                            ),
                            l = ve.Z5.getRealFormat(u, ve.Gr.WO_ZERO_DIGITS),
                            c = '/ ' + ve.Z5.getRealFormat(t, ve.Gr.WO_ZERO_DIGITS);
                        return n().createElement(
                            'div',
                            { className: s()(fe.base, fe[`base__${e}`]) },
                            n().createElement(
                                'div',
                                { className: fe.condition },
                                n().createElement('div', { className: fe.conditionIcon, style: i }),
                                n().createElement(A.ZP, {
                                    text: we.progress(),
                                    className: fe.conditionText,
                                    format: {
                                        binding: {
                                            current: l,
                                            total: n().createElement(A.ZP, { className: fe.progressTotal, text: c }),
                                        },
                                    },
                                }),
                            ),
                            n().createElement(
                                'div',
                                { className: fe.progressBar },
                                n().createElement(be, {
                                    size: Q.Small,
                                    maxValue: t,
                                    value: u,
                                    disabled: e === W.Locked,
                                    deltaFrom: u - a,
                                }),
                                n().createElement('div', { className: fe.progressBg }),
                            ),
                        );
                    }),
                    xe = (0, r.memo)(({ quest: e }) => {
                        const u = e.bonusCondition.items[0];
                        return n().createElement(
                            'div',
                            { className: s()('QuestCondition_base_90') },
                            n().createElement(
                                'div',
                                { className: s()('QuestCondition_quest_0e') },
                                n().createElement(A.ZP, {
                                    className: 'QuestCondition_description_9b',
                                    text: e.description,
                                }),
                                n().createElement(
                                    'div',
                                    { className: 'QuestCondition_progressContainer_f0' },
                                    n().createElement(
                                        'div',
                                        { className: 'QuestCondition_questProgress_68' },
                                        n().createElement(Se, {
                                            state: e.status,
                                            current: u.current,
                                            total: u.total,
                                            iconKey: u.iconKey,
                                            earned: u.earned,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Te = R.strings.mt_birthday.quests,
                    Re = (0, r.memo)(({ quest: e, timeNewQuest: u, hasCounterComplete: t }) => {
                        const a = (0, g.GS)().mediaSize >= g.cJ.Large ? H.h2.Big : H.h2.Small,
                            o = e.status,
                            i = (0, r.useState)(''),
                            l = i[0],
                            c = i[1],
                            m = (0, r.useState)(!1),
                            E = m[0],
                            _ = m[1],
                            d = (0, r.useState)(!1),
                            D = d[0],
                            p = d[1],
                            B = o === W.Locked || l === W.Locked,
                            C = o === W.Disabled || l === W.Disabled,
                            b = o === W.Done,
                            v = o === W.Active,
                            f = t && (v || b);
                        return (
                            (0, r.useEffect)(() => {
                                if (l)
                                    return (
                                        l !== o &&
                                            (_(l === W.Disabled && o === W.Locked),
                                            p(l === W.Locked && o === W.Active)),
                                        (0, F.F)(() => {
                                            (c(o), _(!1), p(!1));
                                        }, 600)
                                    );
                                c(o);
                            }, [l, o]),
                            n().createElement(
                                'div',
                                { className: $.base },
                                (b || v) &&
                                    n().createElement(
                                        'div',
                                        { className: s()($.questCardWrapper, D && $.questCardWrapper__left) },
                                        n().createElement(
                                            'div',
                                            { className: s()($.questCard, $[`questCard__${o}`]) },
                                            f &&
                                                n().createElement(
                                                    'div',
                                                    { className: $.counterBlock },
                                                    n().createElement(h.B, {
                                                        text: b
                                                            ? Te.content.counterComplete()
                                                            : Te.content.counterActive(),
                                                        binding: {
                                                            currentComplete: e.bonusCount,
                                                            allComplete: e.bonusLimit,
                                                        },
                                                        classMix: $.counterComplete,
                                                    }),
                                                ),
                                            n().createElement(
                                                'div',
                                                { className: $.content },
                                                n().createElement(
                                                    'div',
                                                    { className: s()($.quests) },
                                                    n().createElement(xe, { quest: e }),
                                                ),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: $.rewards },
                                                n().createElement('div', { className: $.separator }),
                                                n().createElement(z, { size: a, data: e.rewards }),
                                            ),
                                            n().createElement('div', { className: $.doneBg }),
                                        ),
                                        n().createElement('div', { className: $.gradientBg }),
                                    ),
                                B &&
                                    n().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                $.questCardWrapper,
                                                D && $.questCardWrapper__right,
                                                E && $.questCardWrapper__left,
                                            ),
                                        },
                                        n().createElement(
                                            'div',
                                            { className: $.lockedBlock },
                                            n().createElement(
                                                'div',
                                                { className: $.lockedContent },
                                                n().createElement(I, { timeToUpdate: u }),
                                                n().createElement(A.ZP, {
                                                    className: $.lockedText,
                                                    text: Te.locked.text(),
                                                }),
                                            ),
                                            n().createElement('div', { className: $.disabledBg }),
                                        ),
                                        n().createElement('div', { className: $.gradientBg }),
                                    ),
                                C &&
                                    n().createElement(
                                        'div',
                                        { className: s()($.questCardWrapper, E && $.questCardWrapper__right) },
                                        n().createElement(
                                            'div',
                                            { className: $.disabledBlock },
                                            n().createElement(
                                                'div',
                                                { className: $.disabledContent },
                                                n().createElement('div', { className: $.iconDisabled }),
                                                n().createElement(A.ZP, {
                                                    className: $.disabledText,
                                                    text: Te.disabled.text(),
                                                }),
                                                n().createElement(A.ZP, {
                                                    className: $.disabledDescription,
                                                    text: Te.disabled.description(),
                                                }),
                                            ),
                                            n().createElement('div', { className: $.disabledBg }),
                                        ),
                                    ),
                            )
                        );
                    });
                (W.Active, W.Locked, W.Disabled, W.Done);
                var ye = t(3215),
                    Pe = t(4598),
                    Me = t(5175),
                    Ne = t(3946),
                    Le = t(4538);
                const Oe = (0, ye.q)()(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    assignmentsQuests: e.array('assignmentsQuests'),
                                    challengeQuests: e.array('challengeQuests'),
                                    battleTypes: e.array('battleTypes'),
                                },
                                t = (0, Ne.Om)(() =>
                                    (0, Me.c)(u.assignmentsQuests.get()).map((e) => (0, Le.gu)(e), { equals: Pe.jv }),
                                ),
                                r = (0, Ne.Om)(() =>
                                    (0, Me.c)(u.challengeQuests.get()).map((e) => (0, Le.gu)(e), { equals: Pe.jv }),
                                ),
                                n = (0, Ne.Om)(() => (0, Me.c)(u.battleTypes.get()), { equals: Pe.jv }),
                                a = (0, Ne.Om)(() => r().length, { equals: Pe.jv }),
                                s = (0, Ne.Om)(() => r().reduce((e, u) => (u.status === W.Done ? ++e : e), 0), {
                                    equals: Pe.jv,
                                });
                            return Object.assign({}, u, {
                                computes: {
                                    getAssignmentsQuests: t,
                                    getChallengeQuests: r,
                                    getBattleTypes: n,
                                    getCountChallengeQuests: a,
                                    getCountDoneQuests: s,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onTabVisited: e.createCallback((e) => ({ idTab: e }), 'onTabVisited'),
                            onSound: e.createCallbackNoArgs('onSoundClick'),
                            onTabActivate: e.createCallbackNoArgs('onTabActivate'),
                        }),
                    ),
                    ke = Oe[0],
                    Ie = Oe[1];
                var He = t(4042),
                    We = t(9417);
                const Ue = {
                        base: 'Sonar_base_91',
                        back: 'Sonar_back_8e',
                        fadeIn: 'Sonar_fadeIn_d9',
                        emitter: 'Sonar_emitter_c6',
                        wave: 'Sonar_wave_51',
                        wave__0: 'Sonar_wave__0_c9',
                        sonarWave: 'Sonar_sonarWave_60',
                        wave__1: 'Sonar_wave__1_92',
                        wave__2: 'Sonar_wave__2_c0',
                        wave__3: 'Sonar_wave__3_ab',
                        wave__4: 'Sonar_wave__4_bb',
                        wave__5: 'Sonar_wave__5_dc',
                        wave__6: 'Sonar_wave__6_94',
                        wave__7: 'Sonar_wave__7_6e',
                        wave__8: 'Sonar_wave__8_73',
                        wave__9: 'Sonar_wave__9_b0',
                        wave__10: 'Sonar_wave__10_d2',
                    },
                    Ge = (0, r.memo)(({ className: e }) =>
                        n().createElement(
                            'div',
                            { className: s()(Ue.base, e) },
                            n().createElement(
                                'div',
                                { className: Ue.emitter },
                                Array.from({ length: 10 }, (e, u) =>
                                    n().createElement('div', {
                                        key: `wave-${u}`,
                                        className: s()(Ue.wave, Ue[`wave__${u}`]),
                                    }),
                                ),
                            ),
                            n().createElement('div', { className: Ue.back }),
                        ),
                    ),
                    qe = (0, r.memo)(({ active: e, soundOn: u }) =>
                        n().createElement(
                            'div',
                            { className: s()('SoundBtn_base_75', (e || u) && 'SoundBtn_base__active_34') },
                            n().createElement(
                                'div',
                                { className: 'SoundBtn_content_60' },
                                n().createElement(
                                    'div',
                                    { className: 'SoundBtn_icoContainer_a8' },
                                    n().createElement('div', { className: 'SoundBtn_ico_d8' }),
                                ),
                            ),
                            n().createElement(Ge, {
                                className: s()('SoundBtn_sonar_55', u && 'SoundBtn_sonar__show_ad'),
                            }),
                        ),
                    ),
                    ze = R.strings.mt_birthday.quests,
                    $e = [
                        { id: 0, title: ze.tabs.assignments() },
                        { id: 1, title: ze.tabs.test() },
                    ],
                    Ze = (0, B.Pi)(({ currentTipName: e }) => {
                        const u = (0, g.GS)().mediaSize,
                            t = Ie(),
                            a = t.controls,
                            i = t.model,
                            l = i.computes.getAssignmentsQuests(),
                            c = i.computes.getChallengeQuests(),
                            m = i.computes.getBattleTypes(),
                            B = i.computes.getCountChallengeQuests(),
                            v = i.computes.getCountDoneQuests(),
                            f = i.root.get(),
                            w = f.timeUpdate,
                            S = f.timeNewQuest,
                            x = f.defaultTab,
                            T = f.minLevel,
                            R = f.maxLevel,
                            y = f.isQuestsError,
                            M = f.isQuestGiverError,
                            N = f.isSoundAnimationActive,
                            L = (0, r.useState)(!1),
                            O = L[0],
                            k = L[1],
                            H = (0, r.useState)(x),
                            W = H[0],
                            G = H[1],
                            q = (0, r.useState)(x ? c : l),
                            z = q[0],
                            $ = q[1],
                            Z = (0, r.useState)(!1),
                            Q = Z[0],
                            j = Z[1],
                            X = (0, r.useState)(!1),
                            Y = X[0],
                            V = X[1],
                            K = (0, r.useState)(!1),
                            J = K[0],
                            ee = K[1],
                            ue = (0, r.useState)(!1),
                            te = ue[0],
                            re = ue[1],
                            ne = Boolean(W) && !Q,
                            ae = u < g.cJ.Small;
                        ((0, r.useEffect)(
                            () =>
                                (0, F.F)(() => {
                                    J && (a.onTabVisited(W), $(W ? c : l), j(!1));
                                }, 500),
                            [l, c, a, W, J],
                        ),
                            (0, p.a)(
                                () => (
                                    k(!0),
                                    (0, F.F)(() => {
                                        k(!1);
                                    }, 0)
                                ),
                                [],
                            ));
                        const se = (0, r.useCallback)(
                            (e) => {
                                e !== W && (a.onTabActivate(), a.onTabVisited(W), G(e), j(!0), V(!0), ee(!0));
                            },
                            [a, W],
                        );
                        ((0, r.useEffect)(() => {
                            (ee(!1), j(!1), V(!1), $(W ? c : l));
                        }, [W, c, l]),
                            (0, r.useEffect)(() => {
                                'quests_2' === e && se(1);
                            }, [e, se]));
                        const oe = (0, d.c4)(),
                            ie = ((e, u = 3) => {
                                const t = (0, r.useState)(!1),
                                    n = t[0],
                                    a = t[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        const t = () => {
                                            const t = e.animationScroll.scrollPosition.goal;
                                            a(t > u);
                                        };
                                        return (
                                            e.events.on('recalculateContent', t),
                                            e.events.on('change', t),
                                            () => {
                                                (e.events.off('recalculateContent', t), e.events.off('change', t));
                                            }
                                        );
                                    }, [e, u]),
                                    [n]
                                );
                            })(oe, 3),
                            le = ie[0],
                            ce = (0, r.useMemo)(
                                () =>
                                    ((e, u) => {
                                        let t = 0;
                                        const r = U[u].questCardHeight + U[u].questCardMarginBottom;
                                        return e.map((e, u) => (u ? (t += r) : t));
                                    })(z, u),
                                [z, u],
                            ),
                            me = (0, C.useTransition)(
                                z.map((e, t) => {
                                    const r = z.length - 1 === t;
                                    return Object.assign(
                                        {},
                                        e,
                                        { y: `${ce[t]}rem` },
                                        r && { marginBottom: `${U[u].questCardMarginBottom}rem` },
                                        { index: t },
                                    );
                                }),
                                {
                                    key: (e) => e.id,
                                    enter: ({ y: e, marginBottom: u }) => ({ y: e, marginBottom: u }),
                                    update: ({ y: e, marginBottom: u }) => ({ y: e, marginBottom: u }),
                                    config: O ? { duration: 0 } : { duration: 400, easing: D.easeInCubic },
                                    delay: O ? 0 : 1e3,
                                },
                            );
                        return (
                            (0, r.useEffect)(() => {
                                ((0, o.G)('mt_bday_2026_quest_giver_enter'), a.onTabActivate(), a.onTabVisited(W));
                            }, []),
                            n().createElement(
                                'div',
                                { className: s()(b.base, le && b.base__hasTopLip, e && b[`base__${e}`]) },
                                n().createElement(
                                    'div',
                                    { className: b.contentWrapper },
                                    n().createElement(
                                        'div',
                                        { className: b.header },
                                        n().createElement(We.h, { title: ze.header(), subTitle: ze.description() }),
                                    ),
                                    M
                                        ? n().createElement(
                                              'div',
                                              { className: b.errorWrapper },
                                              n().createElement(He.C, {
                                                  title: ze.errorMainView.title(),
                                                  subTitle: ze.errorMainView.subTitle(),
                                              }),
                                          )
                                        : n().createElement(
                                              n().Fragment,
                                              null,
                                              n().createElement(
                                                  'div',
                                                  { className: b.tabsWrapper },
                                                  n().createElement(E, {
                                                      tabs: $e,
                                                      active: W,
                                                      onClick: se,
                                                      sounds: { click: 'yes1', mouseEnter: 'highlight' },
                                                      classNames: {
                                                          tab: b.tab,
                                                          title: b.tabTitle,
                                                          activeTab: b.activeTab,
                                                      },
                                                  }),
                                              ),
                                              n().createElement(
                                                  'div',
                                                  { className: b.content },
                                                  !e &&
                                                      n().createElement(
                                                          'div',
                                                          {
                                                              className: s()(
                                                                  b.person,
                                                                  W ? b.person__challenge : b.person__assignments,
                                                              ),
                                                          },
                                                          Boolean(W) &&
                                                              n().createElement(
                                                                  n().Fragment,
                                                                  null,
                                                                  n().createElement(
                                                                      'div',
                                                                      {
                                                                          className: b.voice,
                                                                          onClick: () => {
                                                                              N || (a.onSound && a.onSound());
                                                                          },
                                                                          onMouseEnter: () => {
                                                                              (o.$.playHighlight(), re(!0));
                                                                          },
                                                                          onMouseLeave: () => {
                                                                              re(!1);
                                                                          },
                                                                      },
                                                                      n().createElement(qe, { active: te, soundOn: N }),
                                                                  ),
                                                                  n().createElement(A.ZP, {
                                                                      className: b.personMessage,
                                                                      text: ze.content.personMessage(),
                                                                  }),
                                                              ),
                                                      ),
                                                  n().createElement(
                                                      'div',
                                                      { className: b.bulletinBoard },
                                                      y
                                                          ? n().createElement(
                                                                'div',
                                                                { className: b.errorWrapper },
                                                                n().createElement(He.C, {
                                                                    title: ze.errorQuestLoad.title(),
                                                                    subTitle: ze.errorQuestLoad.subTitle(),
                                                                }),
                                                            )
                                                          : n().createElement(
                                                                n().Fragment,
                                                                null,
                                                                n().createElement(
                                                                    'div',
                                                                    { className: b.info },
                                                                    n().createElement(P, {
                                                                        minLevel: T,
                                                                        maxLevel: R,
                                                                        battleTypes: m,
                                                                    }),
                                                                    n().createElement(
                                                                        'div',
                                                                        {
                                                                            className: s()(
                                                                                b.wrapperCountQuests,
                                                                                W && b.wrapperCountQuests__show,
                                                                                !W && b.wrapperCountQuests__hide,
                                                                            ),
                                                                        },
                                                                        n().createElement(h.B, {
                                                                            text: ze.content.questsDone(),
                                                                            binding: { currentQuests: v, allQuests: B },
                                                                            classMix: b.counterQuests,
                                                                        }),
                                                                    ),
                                                                    n().createElement(
                                                                        'div',
                                                                        {
                                                                            className: s()(
                                                                                b.wrapperTimeLeft,
                                                                                !W && b.wrapperTimeLeft__show,
                                                                                W && b.wrapperTimeLeft__hide,
                                                                            ),
                                                                        },
                                                                        n().createElement(A.ZP, {
                                                                            text: ae
                                                                                ? ze.content.timeLeftShort()
                                                                                : ze.content.timeLeft(),
                                                                            className: b.timer,
                                                                        }),
                                                                        n().createElement(
                                                                            'div',
                                                                            { className: b.countdown },
                                                                            n().createElement(I, {
                                                                                timeToUpdate: w,
                                                                                isCounter: !0,
                                                                            }),
                                                                        ),
                                                                    ),
                                                                ),
                                                                n().createElement(
                                                                    'div',
                                                                    {
                                                                        className: s()(
                                                                            b.scrollWrapper,
                                                                            Q && b.scrollWrapper__hide,
                                                                        ),
                                                                    },
                                                                    n().createElement('div', { className: b.topLip }),
                                                                    n().createElement(
                                                                        _.X.Vertical.Default,
                                                                        {
                                                                            api: oe,
                                                                            barClassNames: {
                                                                                base: ne ? b.bar : b.bar__hide,
                                                                                topButton: b.topButton,
                                                                                bottomButton: b.bottomButton,
                                                                            },
                                                                        },
                                                                        me((e, u) =>
                                                                            n().createElement(
                                                                                C.animated.div,
                                                                                { style: Object.assign({}, e) },
                                                                                n().createElement(
                                                                                    'div',
                                                                                    {
                                                                                        key: u.id,
                                                                                        className: Y
                                                                                            ? b.questOffAnimation
                                                                                            : b.quest,
                                                                                        style: {
                                                                                            animationDelay:
                                                                                                200 * u.index + 'ms',
                                                                                        },
                                                                                    },
                                                                                    n().createElement(Re, {
                                                                                        quest: u,
                                                                                        timeNewQuest: S,
                                                                                        hasCounterComplete: ne,
                                                                                    }),
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    ),
                                                                ),
                                                            ),
                                                  ),
                                              ),
                                          ),
                                ),
                                n().createElement('div', { className: b.background }),
                            )
                        );
                    });
                (0, r.memo)((e) => {
                    const u = (0, r.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                    return n().createElement(
                        ke,
                        { options: u },
                        n().createElement(Ze, { currentTipName: e.currentTipName }),
                    );
                });
            },
            4042: (e, u, t) => {
                'use strict';
                t.d(u, { C: () => s });
                var r = t(7613),
                    n = t(6179),
                    a = t.n(n);
                const s = (0, n.memo)(({ title: e, subTitle: u }) =>
                    a().createElement(
                        'div',
                        { className: 'ErrorScreen_base_31' },
                        a().createElement('div', { className: 'ErrorScreen_icon_d1' }),
                        a().createElement(r.ZP, { text: e, format: { classMix: 'ErrorScreen_title_a3' } }),
                        a().createElement(r.ZP, { text: u, format: { classMix: 'ErrorScreen_subTitle_6d' } }),
                    ),
                );
            },
            9417: (e, u, t) => {
                'use strict';
                t.d(u, { h: () => s });
                var r = t(7613),
                    n = t(6179),
                    a = t.n(n);
                const s = (0, n.memo)(({ title: e, subTitle: u }) =>
                    a().createElement(
                        'div',
                        { className: 'Header_base_f9' },
                        a().createElement(r.ZP, { format: { classMix: 'Header_headerTitle_c9' }, text: e }),
                        a().createElement(r.ZP, { format: { classMix: 'Header_headerDescription_c5' }, text: u }),
                    ),
                );
            },
            4538: (e, u, t) => {
                'use strict';
                t.d(u, { gu: () => d });
                var r = t(126),
                    n = t(2862),
                    a = t(729),
                    s = t(5415),
                    o = t(3649),
                    i = t(9990);
                t(8933);
                const l = (e, u = n.h2.Small) => {
                    const t = (0, o.BN)(e.vehicleName || '');
                    if (e.name === n.E4.Vehicles)
                        switch (u) {
                            case n.h2.Mini:
                            case n.h2.Small:
                            case n.h2.S48x48:
                                return e.isRent
                                    ? 'R.images.gui.maps.icons.quests.bonuses.small.vehicles_rent'
                                    : 'R.images.gui.maps.icons.quests.bonuses.small.vehicles';
                            case n.h2.Big:
                            case n.h2.S80x80:
                                return e.isRent
                                    ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles_rent'
                                    : 'R.images.gui.maps.icons.quests.bonuses.big.vehicles';
                            case n.h2.S128x100:
                            case n.h2.S180x135:
                                return `R.images.gui.maps.shop.vehicles.c_180x135.${t}`;
                            case n.h2.S232x174:
                            case n.h2.S296x222:
                                return `R.images.gui.maps.shop.vehicles.c_360x270.${t}`;
                            case n.h2.S400x300:
                            case n.h2.S600x450:
                                return `R.images.gui.maps.shop.vehicles.c_600x450.${t}`;
                            default:
                                return (
                                    console.error('Unknown vehicle image size', u, e.vehicleName),
                                    'R.images.gui.maps.icons.quests.bonuses.big.vehicles'
                                );
                        }
                    if (e.name === n.E4.TmanToken)
                        switch (u) {
                            case n.h2.Mini:
                            case n.h2.Small:
                            case n.h2.S48x48:
                            case n.h2.Big:
                            case n.h2.S80x80:
                                return `R.images.gui.maps.icons.tankmen.icons.s80x80.${e.icon}`;
                            case n.h2.S128x100:
                            case n.h2.S180x135:
                            case n.h2.S232x174:
                                return `R.images.gui.maps.icons.tankmen.icons.s232x174.${e.icon}`;
                            case n.h2.S296x222:
                                return `R.images.gui.maps.icons.tankmen.icons.s296x222.${e.icon}`;
                            case n.h2.S400x300:
                                return `R.images.gui.maps.icons.tankmen.icons.s400x300.${e.icon}`;
                            case n.h2.S600x450:
                                return `R.images.gui.maps.icons.tankmen.icons.s600x450.${e.icon}`;
                            default:
                                return (
                                    console.error('Unknown image size', u),
                                    'R.images.gui.maps.icons.tankmen.icons.s600x450.tankman'
                                );
                        }
                    if (e.name === n.E4.CollectionItem)
                        switch (u) {
                            case n.h2.Mini:
                            case n.h2.Small:
                            case n.h2.S48x48:
                                return `R.images.gui.maps.icons.collectionItems.c_48x48.${e.icon}`;
                            case n.h2.Big:
                            case n.h2.S80x80:
                                return `R.images.gui.maps.icons.collectionItems.c_80x80.${e.icon}`;
                            case n.h2.S128x100:
                            case n.h2.S180x135:
                            case n.h2.S232x174:
                                return `R.images.gui.maps.icons.collectionItems.c_232x174.${e.icon}`;
                            case n.h2.S296x222:
                                return `R.images.gui.maps.icons.collectionItems.c_296x222.${e.icon}`;
                            case n.h2.S400x300:
                                return `R.images.gui.maps.icons.collectionItems.c_400x300.${e.icon}`;
                            case n.h2.S600x450:
                                return `R.images.gui.maps.icons.collectionItems.c_600x450.${e.icon}`;
                            default:
                                console.error('Unknown image size', u);
                        }
                    if (e.name === n.E4.StyleProgress)
                        switch (u) {
                            case n.h2.Small:
                            case n.h2.Big:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.progressionStyle`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                        }
                    return (0, a.ry)(e, u);
                };
                let c, m, E, _;
                (!(function (e) {
                    ((e.Stamp = 'stamps'), (e.Presents = 'presents'), (e.Reward = 'rewards'));
                })(c || (c = {})),
                    Object.keys(c),
                    s.cJ.ExtraSmall,
                    s.cJ.Small,
                    s.cJ.Medium,
                    s.cJ.Large,
                    s.cJ.ExtraLarge,
                    (function (e) {
                        ((e.ASC = 'asc'), (e.DESC = 'desc'));
                    })(m || (m = {})),
                    (function (e) {
                        ((e.Player = 'userName'),
                            (e.Vehicle = 'vehicleShortName'),
                            (e.Damage = 'totalDamage'),
                            (e.Kills = 'kills'),
                            (e.Experience = 'xp'),
                            (e.Gift = 'gift'));
                    })(E || (E = {})),
                    Object.values(E),
                    E.Player,
                    (function (e) {
                        ((e.PLAY = 'play'), (e.STOP = 'stop'));
                    })(_ || (_ = {})),
                    (0, r.q)({
                        width: 640,
                        height: 400,
                        frameCount: 35,
                        chunk: { count: 1, rows: 6, columns: 6 },
                        getChunkPath: () => 'R.images.mt_birthday.gui.maps.icons.tankMail.boxCanvas',
                    }));
                const d = (e) =>
                    Object.assign({}, e, {
                        rewards: e.bonuses
                            .filter((e) => e.label.length > 0 || e.value.length > 0)
                            .map((e) =>
                                ((e) => ({
                                    name: e.name,
                                    image: l(e, n.h2.Big),
                                    value: e.value,
                                    valueType: (0, a.p3)(e.name),
                                    bonusType: (0, a.p3)(e.name),
                                    special: e.overlayType,
                                    tooltipArgs: (0, a.pI)(
                                        { tooltipId: e.tooltipId, tooltipType: 'mergedReward' },
                                        Number.parseInt(e.tooltipContentId),
                                    ),
                                }))(e),
                            ),
                    });
                let A;
                (i.T.mail,
                    i.T.quests,
                    i.T.gold_wagon,
                    i.T.ticket_exchange,
                    (function (e) {
                        ((e.general_1 = 'mt_bday_2026_onboard_intro'),
                            (e.mail_1 = 'mt_bday_2026_onboard_post_1'),
                            (e.mail_2 = 'mt_bday_2026_onboard_post_2'),
                            (e.quests_1 = 'mt_bday_2026_onboard_quest_giver_1'),
                            (e.quests_2 = 'mt_bday_2026_onboard_quest_giver_2'),
                            (e.gold_wagon_1 = 'mt_bday_2026_onboard_wagon_1'),
                            (e.gold_wagon_2 = 'mt_bday_2026_onboard_wagon_2'),
                            (e.ticket_exchange_1 = 'mt_bday_2026_onboard_tickets_1'),
                            (e.ticket_exchange_2 = 'mt_bday_2026_onboard_tickets_2'));
                    })(A || (A = {})));
            },
            9990: (e, u, t) => {
                'use strict';
                let r;
                (t.d(u, { T: () => r }),
                    (function (e) {
                        ((e[(e.mail = 0)] = 'mail'),
                            (e[(e.quests = 1)] = 'quests'),
                            (e[(e.rewards = 2)] = 'rewards'),
                            (e[(e.gold_wagon = 3)] = 'gold_wagon'),
                            (e[(e.ticket_exchange = 4)] = 'ticket_exchange'),
                            (e[(e.about = 5)] = 'about'));
                    })(r || (r = {})));
            },
            5026: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = {
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
                };
            },
            5287: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = { base: 'FormatText_base_d0' };
            },
            1609: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
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
            372: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = {
                    base: 'HorizontalBar_base_49',
                    base__nonActive: 'HorizontalBar_base__nonActive_82',
                    leftButton: 'HorizontalBar_leftButton_5f',
                    rightButton: 'HorizontalBar_rightButton_03',
                    track: 'HorizontalBar_track_0d',
                    thumb: 'HorizontalBar_thumb_fd',
                    rail: 'HorizontalBar_rail_32',
                };
            },
            4682: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                };
            },
            9168: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = {
                    base: 'VerticalBar_base_f3',
                    base__nonActive: 'VerticalBar_base__nonActive_42',
                    topButton: 'VerticalBar_topButton_d7',
                    bottomButton: 'VerticalBar_bottomButton_06',
                    track: 'VerticalBar_track_df',
                    thumb: 'VerticalBar_thumb_32',
                    rail: 'VerticalBar_rail_43',
                };
            },
            5636: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
                };
            },
            3393: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = {
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
                };
            },
            8852: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = {
                    blackReal: 'FormatTextWithColorTags_blackReal_3c',
                    whiteReal: 'FormatTextWithColorTags_whiteReal_8a',
                    white: 'FormatTextWithColorTags_white_16',
                    whiteOrange: 'FormatTextWithColorTags_whiteOrange_18',
                    whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_10',
                    par: 'FormatTextWithColorTags_par_ca',
                    parSecondary: 'FormatTextWithColorTags_parSecondary_8d',
                    parTertiary: 'FormatTextWithColorTags_parTertiary_a3',
                    red: 'FormatTextWithColorTags_red_60',
                    redDark: 'FormatTextWithColorTags_redDark_03',
                    yellow: 'FormatTextWithColorTags_yellow_ad',
                    orange: 'FormatTextWithColorTags_orange_e4',
                    cream: 'FormatTextWithColorTags_cream_cd',
                    brown: 'FormatTextWithColorTags_brown_c8',
                    greenBright: 'FormatTextWithColorTags_greenBright_f0',
                    green: 'FormatTextWithColorTags_green_c5',
                    greenDark: 'FormatTextWithColorTags_greenDark_af',
                    blueBooster: 'FormatTextWithColorTags_blueBooster_ac',
                    blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_6f',
                    cred: 'FormatTextWithColorTags_cred_4e',
                    gold: 'FormatTextWithColorTags_gold_90',
                    bond: 'FormatTextWithColorTags_bond_71',
                    prom: 'FormatTextWithColorTags_prom_dd',
                };
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
        (__webpack_require__.j = 552),
        (() => {
            var e = { 552: 0, 813: 0, 419: 0 };
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
                        ((n = a[i]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(2094));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
