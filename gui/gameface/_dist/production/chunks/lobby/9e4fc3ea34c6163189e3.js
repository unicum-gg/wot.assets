'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [596],
    {
        3457: (e, t, n) => {
            n.d(t, { L$: () => c.L, qE: () => c.q, u5: () => d });
            var s = n(6483),
                o = n.n(s),
                r = n(7727),
                a = n(7363),
                i = n.n(a),
                u = n(6880),
                c = n(2106);
            const l = ({
                children: e,
                size: t,
                isFocused: n,
                type: s,
                disabled: l,
                mixClass: d,
                soundHover: m,
                soundClick: _,
                onMouseEnter: p,
                onMouseMove: g,
                onMouseDown: f,
                onMouseUp: h,
                onMouseLeave: b,
                onClick: v,
            }) => {
                const E = (0, a.useRef)(null),
                    y = (0, a.useState)(n),
                    T = y[0],
                    P = y[1],
                    k = (0, a.useState)(!1),
                    w = k[0],
                    B = k[1];
                return (
                    (0, a.useEffect)(() => {
                        function e(e) {
                            T && null !== E.current && !E.current.contains(e.target) && P(!1);
                        }
                        return (
                            document.addEventListener('mousedown', e),
                            () => {
                                document.removeEventListener('mousedown', e);
                            }
                        );
                    }, [T]),
                    (0, a.useEffect)(() => {
                        P(n);
                    }, [n]),
                    i().createElement(
                        'div',
                        {
                            ref: E,
                            className: o()(
                                u.Z.base,
                                u.Z[`base__${s}`],
                                l && u.Z.base__disabled,
                                t && u.Z[`base__${t}`],
                                T && u.Z.base__focus,
                                w && u.Z.base__highlightActive,
                                d,
                            ),
                            onMouseEnter: function (e) {
                                l || (null !== m && (0, r.G)(m), p && p(e));
                            },
                            onMouseMove: function (e) {
                                g && g(e);
                            },
                            onMouseUp: function (e) {
                                l || (h && h(e), B(!1));
                            },
                            onMouseDown: function (e) {
                                l ||
                                    (null !== _ && (0, r.G)(_),
                                    f && f(e),
                                    n && (l || (E.current && (E.current.focus(), P(!0)))),
                                    B(!0));
                            },
                            onMouseLeave: function (e) {
                                l || (b && b(e), B(!1));
                            },
                            onClick: function (e) {
                                l || (v && v(e));
                            },
                        },
                        s !== c.L.ghost &&
                            i().createElement(
                                i().Fragment,
                                null,
                                i().createElement('div', { className: u.Z.back }),
                                i().createElement('span', { className: u.Z.texture }),
                            ),
                        i().createElement(
                            'span',
                            { className: o()(u.Z.state, u.Z.state__default) },
                            i().createElement('span', { className: u.Z.stateDisabled }),
                            i().createElement('span', { className: u.Z.stateHighlightHover }),
                            i().createElement('span', { className: u.Z.stateHighlightActive }),
                        ),
                        i().createElement(
                            'span',
                            { className: u.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                            e,
                        ),
                    )
                );
            };
            l.defaultProps = { type: c.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
            const d = l;
        },
        2106: (e, t, n) => {
            let s, o;
            (n.d(t, { L: () => s, q: () => o }),
                (function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(s || (s = {})),
                (function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'));
                })(o || (o = {})));
        },
        280: (e, t, n) => {
            n.d(t, { z: () => c });
            var s = n(6483),
                o = n.n(s),
                r = n(3649),
                a = n(7363),
                i = n.n(a),
                u = n(5287);
            const c = ({ binding: e, text: t = '', classMix: n, alignment: s = r.v2.left, formatWithBrackets: c }) => {
                if (null === t) return (console.error("FormatText was supplied with 'null'"), null);
                const l = c && e ? (0, r.WU)(t, e) : t;
                return i().createElement(
                    a.Fragment,
                    null,
                    l.split('\n').map((t, c) =>
                        i().createElement(
                            'div',
                            { className: o()(u.Z.base, n), key: `${t}-${c}` },
                            (0, r.Uw)(t, s, e).map((e, t) => i().createElement(a.Fragment, { key: `${t}-${e}` }, e)),
                        ),
                    ),
                );
            };
        },
        9766: (e, t, n) => {
            n.d(t, { z: () => s.z });
            var s = n(280);
            n(8082);
        },
        8082: (e, t, n) => {
            n(3649);
        },
        2862: (e, t, n) => {
            let s, o, r, a, i, u, c, l;
            (n.d(t, { E4: () => s, h2: () => r }),
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
                        (e.Attachment = 'attachment'));
                })(s || (s = {})),
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
                })(o || (o = {})),
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
                })(r || (r = {})),
                (function (e) {
                    ((e.MULTI = 'multi'),
                        (e.CURRENCY = 'currency'),
                        (e.PREMIUM_PLUS = 'premium_plus'),
                        (e.NUMBER = 'number'),
                        (e.STRING = 'string'));
                })(a || (a = {})),
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
                })(i || (i = {})),
                (function (e) {
                    e.BATTLE_BOOSTER = 'battleBooster';
                })(u || (u = {})),
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
                })(c || (c = {})),
                (function (e) {
                    ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                })(l || (l = {})));
            s.Attachment;
        },
        8089: (e, t, n) => {
            n.d(t, { A: () => d });
            var s = n(7363),
                o = n.n(s),
                r = n(6483),
                a = n.n(r),
                i = n(7727),
                u = n(7476);
            const c = [
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
            function l() {
                return (
                    (l =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
                            }
                            return e;
                        }),
                    l.apply(this, arguments)
                );
            }
            class d extends o().PureComponent {
                constructor(...e) {
                    (super(...e),
                        (this.state = { hover: !1, click: !1 }),
                        (this._onMouseEnter = (e) => (t) => {
                            (e && e(t),
                                this.setState({ hover: !0 }),
                                this.props.soundHover && (0, i.G)(this.props.soundHover));
                        }),
                        (this._onMouseLeave = (e) => (t) => {
                            (e && e(t), this.setState({ hover: !1, click: !1 }));
                        }),
                        (this._onMouseDown = (e) => (t) => {
                            (e && e(t),
                                this.setState({ click: !0 }),
                                this.props.soundClick && (0, i.G)(this.props.soundClick));
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
                        n = e.onClick,
                        s = e.goto,
                        r = e.side,
                        i = e.type,
                        d = e.classNames,
                        m = e.onMouseEnter,
                        _ = e.onMouseLeave,
                        p = e.onMouseDown,
                        g = e.onMouseUp,
                        f =
                            (e.soundClick,
                            e.soundHover,
                            (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    s,
                                    o = {},
                                    r = Object.keys(e);
                                for (s = 0; s < r.length; s++) ((n = r[s]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                return o;
                            })(e, c)),
                        h = a()(u.Z.base, u.Z[`base__${i}`], u.Z[`base__${r}`], null == d ? void 0 : d.base),
                        b = a()(u.Z.icon, u.Z[`icon__${i}`], u.Z[`icon__${r}`], null == d ? void 0 : d.icon),
                        v = a()(u.Z.glow, null == d ? void 0 : d.glow),
                        E = a()(u.Z.caption, u.Z[`caption__${i}`], null == d ? void 0 : d.caption),
                        y = a()(u.Z.goto, null == d ? void 0 : d.goto);
                    return o().createElement(
                        'div',
                        l(
                            {
                                className: h,
                                onMouseEnter: this._onMouseEnter(m),
                                onMouseLeave: this._onMouseLeave(_),
                                onMouseDown: this._onMouseDown(p),
                                onMouseUp: this._onMouseUp(g),
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur,
                                onClick: n,
                            },
                            f,
                        ),
                        'info' !== i && o().createElement('div', { className: u.Z.shine }),
                        o().createElement('div', { className: b }, o().createElement('div', { className: v })),
                        o().createElement('div', { className: E }, t),
                        s && o().createElement('div', { className: y }, s),
                    );
                }
            }
            d.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
        },
        2056: (e, t, n) => {
            n.d(t, { u: () => c });
            var s = n(7902),
                o = n(9916),
                r = n(7363);
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
            function i(e) {
                return Object.entries(e || {}).map(([e, t]) => {
                    const n = { __Type: 'GFValueProxy', name: e };
                    switch (typeof t) {
                        case 'number':
                            n.number = t;
                            break;
                        case 'boolean':
                            n.bool = t;
                            break;
                        case 'undefined':
                            break;
                        default:
                            n.string = t.toString();
                    }
                    return n;
                });
            }
            const u = (e, t, n = {}, s = 0) => {
                    viewEnv.handleViewEvent(
                        Object.assign(
                            {
                                __Type: 'GFViewEventProxy',
                                type: o.B0.TOOLTIP,
                                contentID: e,
                                decoratorID: t,
                                targetID: s,
                            },
                            n,
                        ),
                    );
                },
                c = (e) => {
                    let t = e.children,
                        n = e.contentId,
                        o = e.args,
                        c = e.onMouseEnter,
                        l = e.onMouseLeave,
                        d = e.onMouseDown,
                        m = e.onClick,
                        _ = e.ignoreShowDelay,
                        p = void 0 !== _ && _,
                        g = e.ignoreMouseClick,
                        f = void 0 !== g && g,
                        h = e.decoratorId,
                        b = void 0 === h ? 0 : h,
                        v = e.isEnabled,
                        E = void 0 === v || v,
                        y = e.targetId,
                        T = void 0 === y ? 0 : y,
                        P = e.onShow,
                        k = e.onHide,
                        w = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                s,
                                o = {},
                                r = Object.keys(e);
                            for (s = 0; s < r.length; s++) ((n = r[s]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                            return o;
                        })(e, a);
                    const R = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                        B = (0, r.useMemo)(() => T || (0, s.F)().resId, [T]),
                        S = (0, r.useCallback)(() => {
                            (R.current.isVisible && R.current.timeoutId) ||
                                (u(n, b, { isMouseEvent: !0, on: !0, arguments: i(o) }, B),
                                P && P(),
                                (R.current.isVisible = !0));
                        }, [n, b, o, B, P]),
                        x = (0, r.useCallback)(() => {
                            if (R.current.isVisible || R.current.timeoutId) {
                                const e = R.current.timeoutId;
                                (e > 0 && (clearTimeout(e), (R.current.timeoutId = 0)),
                                    u(n, b, { on: !1 }, B),
                                    R.current.isVisible && k && k(),
                                    (R.current.isVisible = !1));
                            }
                        }, [n, b, B, k]),
                        C = (0, r.useCallback)((e) => {
                            R.current.isVisible &&
                                ((R.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                (R.current.hideTimerId = window.setTimeout(() => {
                                    const t = document.elementFromPoint(e.clientX, e.clientY);
                                    t && !t.isSameNode(R.current.prevTarget) && x();
                                }, 200)));
                        }, []);
                    ((0, r.useEffect)(() => {
                        const e = R.current.hideTimerId;
                        return (
                            document.addEventListener('wheel', C, { capture: !0 }),
                            () => {
                                (document.removeEventListener('wheel', C, { capture: !0 }),
                                    e && window.clearTimeout(e));
                            }
                        );
                    }, []),
                        (0, r.useEffect)(() => {
                            !1 === E && x();
                        }, [E, x]),
                        (0, r.useEffect)(
                            () => (
                                window.addEventListener('mouseleave', x),
                                () => {
                                    (window.removeEventListener('mouseleave', x), x());
                                }
                            ),
                            [x],
                        ));
                    return E
                        ? (0, r.cloneElement)(
                              t,
                              Object.assign(
                                  {
                                      onMouseEnter:
                                          ((M = t.props.onMouseEnter),
                                          (e) => {
                                              (e.clientX === window.innerWidth && e.clientY === window.innerHeight) ||
                                                  ((R.current.timeoutId = window.setTimeout(S, p ? 100 : 400)),
                                                  c && c(e),
                                                  M && M(e));
                                          }),
                                      onMouseLeave: ((e) => (t) => {
                                          (x(), null == l || l(t), null == e || e(t));
                                      })(t.props.onMouseLeave),
                                      onClick: ((e) => (t) => {
                                          (!1 === f && x(), null == m || m(t), null == e || e(t));
                                      })(t.props.onClick),
                                      onMouseDown: ((e) => (t) => {
                                          (!1 === f && x(), null == d || d(t), null == e || e(t));
                                      })(t.props.onMouseDown),
                                  },
                                  w,
                              ),
                          )
                        : t;
                    var M;
                };
        },
        7412: (e, t, n) => {
            n.d(t, { n: () => p });
            var s = n(7515),
                o = n(1856),
                r = n(3138),
                a = n(6112),
                i = n(4598);
            var u = n(7363),
                c = n.n(u),
                l = n(2039);
            const d = [
                'src',
                'className',
                'autoplay',
                'style',
                'loop',
                'isPrebufferKeyframes',
                'keyframesNameConfig',
                'onClick',
            ];
            function m() {
                return (
                    (m =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
                            }
                            return e;
                        }),
                    m.apply(this, arguments)
                );
            }
            const _ = (0, u.forwardRef)(function (e, t) {
                    let n = e.src,
                        _ = e.className,
                        p = e.autoplay,
                        g = void 0 !== p && p,
                        f = e.style,
                        h = e.loop,
                        b = void 0 !== h && h,
                        v = e.isPrebufferKeyframes,
                        E = e.keyframesNameConfig,
                        y = e.onClick,
                        T = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                s,
                                o = {},
                                r = Object.keys(e);
                            for (s = 0; s < r.length; s++) ((n = r[s]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                            return o;
                        })(e, d);
                    const P = t,
                        k = (0, u.useRef)(null);
                    return (
                        (0, l.b)(() =>
                            r.O.view.events.onDisplayChanged((e, t) => {
                                var n, s;
                                t === a.W.hidden && (null == (n = k.current) || n.pause());
                                t === a.W.shown && (null == (s = k.current) || s.play());
                            }),
                        ),
                        (0, u.useEffect)(
                            () =>
                                (0, o.v)(() => {
                                    const e = k.current;
                                    if (!P || !e || !v)
                                        return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                    const t = e.cohGetKeyframeTimestamps();
                                    t.length > 0
                                        ? ((e.cohFastSeek = !0),
                                          t.map((t) => {
                                              null == e || e.cohPrebufferKeyframe(t);
                                          }))
                                        : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                }),
                            [v, P],
                        ),
                        (0, u.useEffect)(() => {
                            if (P && k.current) {
                                const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: i.ZT },
                                    t = () => {
                                        let t = 0;
                                        const n = (function (e) {
                                                let t = 0;
                                                return [
                                                    function n() {
                                                        (e(), (t = requestAnimationFrame(n)));
                                                    },
                                                    function () {
                                                        cancelAnimationFrame(t);
                                                    },
                                                ];
                                            })(() => {
                                                if (k.current) {
                                                    const n = k.current,
                                                        s = n.currentTime,
                                                        o = n.duration;
                                                    if (
                                                        (t !== s &&
                                                            (e.changeTimeHandlers.forEach((e) =>
                                                                e({ currentTime: s, duration: o }),
                                                            ),
                                                            (t = s)),
                                                        k.current.paused || !P || !v)
                                                    )
                                                        return;
                                                    const r = k.current.cohGetKeyframeTimestamps();
                                                    r.forEach((t, n) => {
                                                        s > r[n] - 0.02 &&
                                                            s < r[n] &&
                                                            e.changeKeyframeHandlers.forEach((e) => {
                                                                const s = Object.keys(null != E ? E : {})[n];
                                                                return e({ time: t, name: `${E ? s : `Point_${n}`}` });
                                                            });
                                                    });
                                                }
                                            }),
                                            s = n[0],
                                            o = n[1];
                                        return (s(), o);
                                    };
                                e.changeTimeLoop = t();
                                const n = (t) => (
                                        e.changeTimeHandlers.push(t),
                                        () => {
                                            const n = e.changeTimeHandlers,
                                                s = n.indexOf(t);
                                            s < 0
                                                ? console.warn(
                                                      "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                  )
                                                : n.splice(s, 1);
                                        }
                                    ),
                                    o = (t) => (
                                        e.changeKeyframeHandlers.push(t),
                                        () => {
                                            const n = e.changeKeyframeHandlers,
                                                s = n.indexOf(t);
                                            s < 0
                                                ? console.warn(
                                                      "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                  )
                                                : n.splice(s, 1);
                                        }
                                    ),
                                    r = () => {
                                        var e;
                                        return null == (e = k.current) ? void 0 : e.currentTime;
                                    },
                                    a = () => {
                                        var e;
                                        return null == (e = k.current) ? void 0 : e.duration;
                                    },
                                    u = (e) => {
                                        k.current && (k.current.currentTime = (0, s.u)(0, k.current.duration, e));
                                    },
                                    c = () => {
                                        var e;
                                        return null == (e = k.current) ? void 0 : e.play();
                                    },
                                    l = () => {
                                        var e;
                                        return null == (e = k.current) ? void 0 : e.pause();
                                    },
                                    d = () => {
                                        (l(), u(0));
                                    },
                                    m = () => {
                                        var e, t;
                                        return null !=
                                            (e = null == (t = k.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                            ? e
                                            : [];
                                    },
                                    _ = (e) => {
                                        (u(e), c());
                                    },
                                    p = (e) => {
                                        (u(e), l());
                                    },
                                    g = () => {
                                        ((e.changeTimeHandlers = []),
                                            (e.changeKeyframeHandlers = []),
                                            null == e.changeTimeLoop || e.changeTimeLoop());
                                    },
                                    f = (e, t) => {
                                        var n;
                                        return (
                                            null == (n = k.current) || n.addEventListener(e, t),
                                            () => {
                                                var n;
                                                return null == (n = k.current) ? void 0 : n.removeEventListener(e, t);
                                            }
                                        );
                                    },
                                    h = (e, t) => {
                                        var n;
                                        return (
                                            null == (n = k.current) || n.removeEventListener(e, t),
                                            () => {
                                                var n;
                                                return null == (n = k.current) ? void 0 : n.removeEventListener(e, t);
                                            }
                                        );
                                    };
                                return (
                                    (P.current = {
                                        on: f,
                                        off: h,
                                        play: c,
                                        pause: l,
                                        stop: d,
                                        cleanup: g,
                                        getCurrentTime: r,
                                        getDuration: a,
                                        getCachedKeyframes: m,
                                        goToAndPlay: _,
                                        goToAndStop: p,
                                        setCurrentTime: u,
                                        domRef: k.current,
                                        onChangeTime: n,
                                        onKeyframes: o,
                                    }),
                                    () => {
                                        (g(), (P.current = null));
                                    }
                                );
                            }
                        }, [E, P, v]),
                        (0, u.useEffect)(() => {
                            k.current && g && k.current.play();
                        }, [g, b]),
                        (0, u.useEffect)(() => {
                            if (k.current)
                                return () => {
                                    k.current && k.current.pause();
                                };
                        }, []),
                        c().createElement(
                            'video',
                            m({ src: n, className: _, style: f, loop: b, ref: k, onClick: y }, T),
                        )
                    );
                }),
                p = (0, u.memo)(_);
        },
        7515: (e, t, n) => {
            n.d(t, { u: () => s });
            const s = (e, t, n) => (n < e ? e : n > t ? t : n);
        },
        1856: (e, t, n) => {
            n.d(t, { v: () => s });
            const s = (e) => {
                let t,
                    n = null;
                return (
                    (n = requestAnimationFrame(() => {
                        n = requestAnimationFrame(() => {
                            ((n = null), (t = e()));
                        });
                    })),
                    () => {
                        ('function' == typeof t && t(), null !== n && cancelAnimationFrame(n));
                    }
                );
            };
        },
        122: (e, t, n) => {
            n.d(t, { F: () => s });
            const s = (e, t) => {
                let n;
                const s = setTimeout(() => {
                    n = e();
                }, t);
                return () => {
                    ('function' == typeof n && n(), clearTimeout(s));
                };
            };
        },
        7522: (e, t, n) => {
            n.d(t, { Z: () => s });
            const s = {
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
                easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
                easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                easeInOutCirc(e) {
                    const t = Math.sqrt,
                        n = Math.pow;
                    return e < 0.5 ? (1 - t(1 - n(2 * e, 2))) / 2 : (t(1 - n(-2 * e + 2, 2)) + 1) / 2;
                },
                easeOutBack(e) {
                    const t = 1.70158;
                    return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                },
                bezier: (e, t, n, s) => (o) =>
                    (1 - o) * (1 - o) * (1 - o) * e +
                    3 * (1 - o) * (1 - o) * o * t +
                    3 * (1 - o) * o * o * n +
                    o * o * o * s,
            };
        },
        7902: (e, t, n) => {
            n.d(t, { F: () => s });
            const s = (e = 1) => {
                const t = new Error().stack;
                let n,
                    s = R.invalid('resId'),
                    o = '';
                var r;
                t &&
                    ((o = (null == (r = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                    (n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                    window.__feature && window.__feature !== n && window.subViews[n] && (s = window.subViews[n].id));
                return { callerUrl: o, caller: n, stack: t, resId: s };
            };
        },
        9653: (e, t, n) => {
            n.d(t, { q: () => a });
            var s = n(7363);
            function o(e, t) {
                var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                if (n) return (n = n.call(e)).next.bind(n);
                if (
                    Array.isArray(e) ||
                    (n = (function (e, t) {
                        if (!e) return;
                        if ('string' == typeof e) return r(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === n && e.constructor && (n = e.constructor.name);
                        if ('Map' === n || 'Set' === n) return Array.from(e);
                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t);
                    })(e)) ||
                    (t && e && 'number' == typeof e.length)
                ) {
                    n && (e = n);
                    var s = 0;
                    return function () {
                        return s >= e.length ? { done: !0 } : { done: !1, value: e[s++] };
                    };
                }
                throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
            }
            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, s = new Array(t); n < t; n++) s[n] = e[n];
                return s;
            }
            const a = () => {
                const e = (0, s.useMemo)(() => ({}), []),
                    t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                    n = (e, n) => {
                        t(e).set(n, n);
                    },
                    r = (e, n) => {
                        t(e).delete(n);
                    },
                    a = (e, ...n) => {
                        for (var s, r = o(t(e).values()); !(s = r()).done;) {
                            (0, s.value)(...n);
                        }
                    };
                return (0, s.useMemo)(() => ({ on: n, off: r, trigger: a }), []);
            };
        },
        8526: (e, t, n) => {
            n.d(t, { I9: () => u, gd: () => i });
            var s = n(3138),
                o = n(5521),
                r = (n(9916), n(7363));
            const a = (e) => {
                console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
            };
            function i(e = o.n.NONE, t = a, n = !1, i = !1) {
                (0, r.useEffect)(() => {
                    if (e !== o.n.NONE)
                        return (
                            window.addEventListener('keydown', r, n),
                            () => {
                                window.removeEventListener('keydown', r, n);
                            }
                        );
                    function r(o) {
                        if (o.keyCode === e) {
                            if (!i && s.O.view.isEventHandled()) return;
                            (s.O.view.setEventHandled(), t(o), n && o.stopPropagation());
                        }
                    }
                }, [t, e, n, i]);
            }
            function u(e) {
                i(o.n.ESCAPE, e);
            }
        },
        2039: (e, t, n) => {
            n.d(t, { b: () => o, k: () => r });
            var s = n(7363);
            const o = (e) => {
                    (0, s.useEffect)(e, []);
                },
                r = (e) => {
                    (0, s.useEffect)(() => e, []);
                };
        },
        4489: (e, t, n) => {
            n.d(t, { f: () => r });
            var s = n(5139),
                o = n(7363);
            function r(e, t, n) {
                const r = (0, o.useMemo)(() => (0, s.Z)(n, e), t);
                return ((0, o.useEffect)(() => r.cancel, [r]), r);
            }
        },
        2691: (e, t, n) => {
            n.d(t, { R: () => s });
            const s = (e, t) => {
                let n = e;
                const s = t.split('.');
                for (let e = 0; e < s.length; e++) {
                    if (!n) return '';
                    if (('string' != typeof n && (n = n.$dyn(s[e])), 'string' == typeof n)) return n;
                }
                return '';
            };
        },
        7727: (e, t, n) => {
            function s(e) {
                engine.call('PlaySound', e).catch((t) => {
                    console.error('[lib/sounds.js] playSound(', e, '): ', t);
                });
            }
            n.d(t, { G: () => s });
        },
        5139: (e, t, n) => {
            function s(e, t, n, s) {
                let o,
                    r = !1,
                    a = 0;
                function i() {
                    o && clearTimeout(o);
                }
                function u(...u) {
                    const c = this,
                        l = Date.now() - a;
                    function d() {
                        ((a = Date.now()), n.apply(c, u));
                    }
                    r ||
                        (s && !o && d(),
                        i(),
                        void 0 === s && l > e
                            ? d()
                            : !0 !== t &&
                              (o = setTimeout(
                                  s
                                      ? function () {
                                            o = void 0;
                                        }
                                      : d,
                                  void 0 === s ? e - l : e,
                              )));
                }
                return (
                    'boolean' != typeof t && ((s = n), (n = t), (t = void 0)),
                    (u.cancel = function () {
                        (i(), (r = !0));
                    }),
                    u
                );
            }
            n.d(t, { Z: () => s });
        },
        6974: (e, t, n) => {
            n.d(t, { h: () => l });
            var s = n(6483),
                o = n.n(s),
                r = n(7363),
                a = n.n(r),
                i = n(845),
                u = n(5294);
            const c = 'Header_base_bd',
                l = ({ title: e, subTitle: t, subTitleAlignType: n = i.M.Left, className: s }) =>
                    a().createElement(
                        'div',
                        { className: o()(c, s) },
                        a().createElement(u.D, { text: e }),
                        t && a().createElement(i.D, { text: t, alignType: n }),
                    );
        },
        8958: (e, t, n) => {
            n.d(t, { f: () => s });
            const s = {
                HAS_BOXES: { context: 'model.hasBoxes' },
                NO_BOXES: { context: 'model.noBoxes' },
                SINGLE_REWARD: { context: 'model.singleBoxRewards' },
                MULTIPLE_REWARD: { context: 'model.multipleBoxesRewards' },
            };
        },
        845: (e, t, n) => {
            n.d(t, { M: () => u, D: () => c });
            var s = n(7363),
                o = n.n(s),
                r = n(6483),
                a = n.n(r);
            const i = {
                base: 'SubTitle_base_56',
                base__center: 'SubTitle_base__center_1b',
                base__left: 'SubTitle_base__left_df',
                base__right: 'SubTitle_base__right_5c',
            };
            let u;
            !(function (e) {
                ((e.Center = 'center'), (e.Left = 'left'), (e.Right = 'right'));
            })(u || (u = {}));
            const c = ({ text: e, alignType: t = u.Left, className: n }) =>
                o().createElement('div', { className: a()(i.base, i[`base__${t}`], n) }, e);
        },
        5294: (e, t, n) => {
            n.d(t, { D: () => a });
            var s = n(7363),
                o = n.n(s);
            const r = 'Title_base_82',
                a = ({ text: e }) => o().createElement('div', { className: r }, e);
        },
        3905: (e, t, n) => {
            n.d(t, { LI: () => c, N7: () => o, TP: () => i, _g: () => r, p6: () => u, qA: () => a });
            var s = n(114);
            let o, r, a;
            (!(function (e) {
                ((e.EntryPoint = 'ENTRY_POINT'),
                    (e.InfoPage = 'INFO_PAGE'),
                    (e.Rewards = 'REWARDS'),
                    (e.HasBoxesView = 'HAS_BOXES_VIEW'));
            })(o || (o = {})),
                (function (e) {
                    ((e.Videos = 'videos'),
                        (e.Images = 'images'),
                        (e.Texts = 'texts'),
                        (e.Sounds = 'sounds'),
                        (e.DynamicVideos = 'dynamicVideos'),
                        (e.DynamicImages = 'dynamicImages'),
                        (e.DynamicTexts = 'dynamicTexts'));
                })(r || (r = {})),
                (function (e) {
                    e.InfoPage = 'infoPage';
                })(a || (a = {})));
            const i = 'customizable/default',
                u = 2560 / 1440,
                c = [s.tB.attachment];
        },
        9674: (e, t, n) => {
            n.d(t, { T: () => s });
            const s = {
                entryHover: 'gui_lb_icon_hover',
                boxMouseEnter: 'gui_lb_highlight_on',
                boxMouseLeave: 'gui_lb_highlight_off',
                boxAppear: 'gui_lb_appear',
                purchaseHover: 'gui_lb_buy_more',
                purchaseClick: 'gui_lb_ingame_shop_box_buy',
                rareAnimation: 'gui_lb_rare_reward_fx',
                epicAnimation: 'gui_lb_epic_reward_fx',
                rewardAppear: 'gui_lb_reward_item_default',
                multiRewardAppear: 'gui_random_reward_appear',
                compensationAppear: 'gui_reward_screen_compensation',
                open: 'gui_lb_video_default_open',
                openRare: 'gui_lb_video_default_rare_open',
                switch: 'gui_lb_type_switch',
                statsOpen: 'gui_lb_stats_open',
                statsClose: 'gui_lb_stats_close',
                infoPageTabHover: 'gui_lb_infopage_box_highlight',
                infoPageTabClick: 'gui_lb_infopage_box_click',
            };
        },
        9623: (e, t, n) => {
            n.d(t, { $r: () => a, Vk: () => i, ff: () => r });
            var s = n(2691);
            const o = (e, t) => {
                    const n = (0, s.R)(R.images, e);
                    return n || t;
                },
                r = (e, t, n) =>
                    o(`gui.maps.icons.quests.bonuses.${e}.${t}`, `R.images.gui.maps.icons.quests.bonuses.${e}.${n}`),
                a = (e, t, n) =>
                    o(`gui.maps.vehicles.attachments.${e}.${t}`, `R.images.gui.maps.icons.quests.bonuses.${e}.${n}`),
                i = (e, t) => r(e, `lootBox_${t}`, 'lootBox_default');
        },
        114: (e, t, n) => {
            n.d(t, { rj: () => u, ry: () => i, tB: () => r });
            var s = n(2862),
                o = n(9623);
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
                },
                a = (e) => {
                    switch (e) {
                        case s.h2.S600x450:
                            return 'c_600x450';
                        case s.h2.S180x135:
                            return 'c_180x135';
                        default:
                            return e;
                    }
                },
                i = (e, t = s.h2.S180x135, n = !1) => {
                    const i = n ? e.compensation : e,
                        u = i.name,
                        c = i.icon,
                        l = i.value,
                        d = e.id,
                        m = e.isRent;
                    switch (u) {
                        case r.vehicles:
                            return m
                                ? `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles_rent`
                                : c
                                  ? `R.images.gui.maps.shop.vehicles.${a(t)}.${c}`
                                  : `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                        case r.customizations:
                            return (0, o.ff)(t, `${c}_${d}`, c);
                        case r.attachment:
                            return (0, o.$r)(t, c, u);
                        case r.basic:
                        case r.plus:
                        case r.premium:
                        case r.premiumPlus:
                        case r.items:
                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${c}`;
                        case r.blueprints:
                        case r.blueprintsAny:
                        case r.finalBlueprints:
                        case r.randomNationalBlueprint:
                            return `R.images.gui.maps.icons.blueprints.fragment.${t}.${c}`;
                        case r.tokens:
                        case r.styleProgress:
                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${c}`;
                        case r.crewBooks:
                        case r.randomNationalBrochure:
                        case r.randomNationalGuide:
                        case r.randomNationalCrewBook:
                            return `R.images.gui.maps.icons.crewBooks.books.${t}.${c}`;
                        case r.crewSkins:
                        case r.goodies:
                        case r.groups:
                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${c}`;
                        case r.dossierBadge:
                            return `R.images.gui.maps.icons.quests.bonuses.badges.${a(t)}.${c}`;
                        case r.dossierAchievement:
                            return `R.images.gui.maps.icons.achievement.${a(t)}.${c}`;
                        case r.xp:
                        case r.xpFactor:
                            return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                        case r.creditsFactor:
                            return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                        case r.crystal:
                            return `R.images.gui.maps.icons.quests.bonuses.${t}.crystal`;
                        case r.tankmenXPFactor:
                            return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                        case r.dailyXPFactor:
                        case r.freeXPFactor:
                            return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                        case r.tmanToken:
                        case r.battlePassSelectToken:
                            return (0, o.ff)(t, `${c}_${l}`, c);
                        case r.premiumTank:
                            return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                        case r.styleProgressToken:
                            return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                        case r.lootBox:
                            return (0, o.Vk)(t, c);
                        case r.collectionItem:
                            return `R.images.gui.maps.icons.collectionItems.${a(t)}.${c}`;
                        default:
                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${c}`;
                    }
                },
                u = (e, t, n) =>
                    t === r.attachment
                        ? `R.images.gui.maps.icons.customization.rarity.glowWithSign.${e}.${n}`
                        : `R.images.gui.maps.icons.quests.bonuses.${e}.${n}_overlay`;
        },
        7366: (e, t, n) => {
            n.d(t, { jh: () => c, kC: () => m });
            var s = n(2691),
                o = n(3905);
            const r = (e, t) => {
                    let n = e;
                    const s = t.split('.');
                    for (let e = 0; e < s.length && n; e++) {
                        const t = n.$dyn(s[e]);
                        (t && 'object' != typeof t) || (n = t);
                    }
                    return n;
                },
                a = (e, t) => {
                    if (t.includes('.dynamic.')) {
                        const n = t.replace('dynamic.', '');
                        return r(e, n);
                    }
                    return (0, s.R)(e, t);
                },
                i = ({ type: e, filePath: t, eventName: n }, s = !1) => {
                    const i = ((e, t, n) => {
                            const s = 'gui.maps.icons.lootBoxSystem.customizable',
                                r = 'lootbox.customizable';
                            switch (e) {
                                case o._g.Images:
                                case o._g.DynamicImages:
                                    return {
                                        parent: R.images,
                                        path: `${s}.${n}.${t}`,
                                        defaultPath: `${s}.default.${t}`,
                                    };
                                case o._g.Videos:
                                case o._g.DynamicVideos:
                                    return {
                                        parent: R.videos,
                                        path: `${r}.${n}.${t}`,
                                        defaultPath: `${r}.default.${t}`,
                                    };
                                case o._g.Texts:
                                case o._g.DynamicTexts:
                                    return {
                                        parent: R.strings,
                                        path: `lootbox_${n}.${t}`,
                                        defaultPath: `lootbox_system.${t}`,
                                    };
                                case o._g.Sounds:
                                    return { parent: R.sounds, path: `${t}_${n}`, defaultPath: `${t}` };
                                default:
                                    return (
                                        console.error(`Unreachable code: unknown ResourceType ${e}`),
                                        { parent: '', path: '', defaultPath: '' }
                                    );
                            }
                        })(e, t, n),
                        u = i.parent,
                        c = i.path,
                        l = i.defaultPath;
                    return u ? { eventResource: s ? r(u, c) : a(u, c), defaultResource: s ? r(u, l) : a(u, l) } : null;
                },
                u = ({ type: e, filePath: t, eventName: n }) => {
                    const s = i({ type: e, filePath: t, eventName: n });
                    if (!s || (!s.eventResource && !s.defaultResource))
                        return (console.info(`Unreachable code: unknown resource (${e} ${n} ${t})`), '');
                    const o = s.eventResource,
                        r = s.defaultResource;
                    return o || r;
                },
                c = (e, t) =>
                    Object.keys(e).reduce((n, s) => {
                        const o = e[s];
                        return o
                            ? ((n[s] = ((e, t, n) =>
                                  Object.keys(e).reduce(
                                      (s, o) => ((s[o] = u({ type: t, filePath: e[o], eventName: n })), s),
                                      {},
                                  ))(o, s, t)),
                              n)
                            : n;
                    }, {}),
                l = (e, t, n) => (e || t ? e || t : (console.warn(`Not found ${n}`), '')),
                d = (e, t, n) =>
                    Object.keys(e).reduce((s, o) => {
                        const r = e[o];
                        return (
                            (s[o] = ((e, t, n) => {
                                const s = `resource type: ${e}, path: ${t}`,
                                    o = i({ type: e, filePath: t, eventName: n }, !0);
                                return ((e, t, n) => ({
                                    dynOpt: (s, o = 'default') => {
                                        const r = (null == t ? void 0 : t.$dyn(s)) || (null == t ? void 0 : t.$dyn(o)),
                                            a = null == e ? void 0 : e.$dyn(o);
                                        return l(r, a, n);
                                    },
                                    dyn: (s) => {
                                        const o = null == t ? void 0 : t.$dyn(s),
                                            r = null == e ? void 0 : e.$dyn(s);
                                        return l(o, r, n);
                                    },
                                    plural: (s, o) => {
                                        const r = null == t ? void 0 : t.$plural(s, o),
                                            a = null == e ? void 0 : e.$plural(s, o);
                                        return l(r, a, n);
                                    },
                                }))(null == o ? void 0 : o.defaultResource, null == o ? void 0 : o.eventResource, s);
                            })(t, r, n)),
                            s
                        );
                    }, {}),
                m = (e, t) =>
                    Object.keys(e).reduce((n, s) => {
                        const o = e[s];
                        return o ? ((n[s] = d(o, s, t)), n) : n;
                    }, {});
        },
        4401: (e, t, n) => {
            n.d(t, { QH: () => o, XM: () => a, ZM: () => i, y0: () => u });
            var s = n(2862);
            const o = (e) => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&nbsp;'),
                r = ['style', 'style_3d'],
                a = (e) => {
                    const t = e.name,
                        n = e.icon;
                    switch (t) {
                        case s.E4.Vehicles:
                            return !0;
                        case s.E4.Customizations:
                            return r.includes(n);
                        default:
                            return !1;
                    }
                };
            let i;
            !(function (e) {
                ((e.Disable = 'disable'), (e.Active = 'active'), (e.Default = 'default'));
            })(i || (i = {}));
            const u = (e, t, n) => {
                switch (!0) {
                    case 0 === n:
                        return i.Disable;
                    case e === t:
                        return i.Active;
                    default:
                        return i.Default;
                }
            };
        },
        1354: (e, t, n) => {
            n.d(t, { _: () => a });
            var s = n(2344),
                o = n(7363),
                r = n(3138);
            const a = (e) => {
                const t = (0, s.eI)(),
                    n = (() => {
                        const e = (0, o.useState)(r.O.view.getScale()),
                            t = e[0],
                            n = e[1];
                        return (
                            (0, o.useEffect)(() => {
                                const e = () => {
                                    n(r.O.view.getScale());
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
                    a = viewEnv.pxToRem(t.width) * n,
                    i = viewEnv.pxToRem(t.height) * n,
                    u = a / i;
                return (0, o.useMemo)(
                    () =>
                        e >= u
                            ? { width: i * e + 'rem', height: `${i}rem` }
                            : { width: `${a}rem`, height: a / e + 'rem' },
                    [i, u, a, e],
                );
            };
        },
        6880: (e, t, n) => {
            n.d(t, { Z: () => s });
            const s = {
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
        5287: (e, t, n) => {
            n.d(t, { Z: () => s });
            const s = { base: 'FormatText_base_d0' };
        },
        7476: (e, t, n) => {
            n.d(t, { Z: () => s });
            const s = {
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
    },
]);
