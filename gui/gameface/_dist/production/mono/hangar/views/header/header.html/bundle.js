import {
    r as e,
    v as t,
    j as a,
    f as s,
    m as n,
    w as o,
    l as i,
    q as r,
    o as l,
    x as c,
    p as d,
} from '../../../chunks/vendor.js';
import {
    i as u,
    c as _,
    n as m,
    a as b,
    u as v,
    r as p,
    V as f,
    b as g,
    d as h,
    G as x,
    e as y,
    B as N,
    f as B,
    g as j,
    h as I,
    s as E,
    M as k,
    j as T,
    t as P,
    k as A,
    l as C,
    m as S,
    o as w,
    I as M,
    F as W,
    p as O,
    q as D,
    v as H,
    w as V,
    x as L,
    y as z,
    C as $,
    z as U,
    A as F,
    U as G,
    D as q,
    E as Y,
    H as J,
    J as K,
    T as Q,
    K as X,
    L as Z,
    N as ee,
    O as te,
    P as ae,
    Q as se,
    R as ne,
    S as oe,
    W as ie,
    X as re,
    Y as le,
    Z as ce,
    _ as de,
    $ as ue,
    a0 as _e,
    a1 as me,
    a2 as be,
    a3 as ve,
    a4 as pe,
    a5 as fe,
    a6 as ge,
    a7 as he,
    a8 as xe,
} from '../../../chunks/lib.js';
import { D as ye, a as Ne } from '../../../chunks/divider.js';
/* empty css                    */ var Be = ((e) => ((e.Hangar = 'hangar'), (e.Default = 'default'), e))(Be || {});
const [je, Ie] = u('HeaderStateModel')((e) => ({ ...e.observableModel.primitives(['type']) })),
    [Ee, ke] = u()(
        ({ observableModel: e }) => ({
            ...e.primitives(['pageTitle', 'backNavigationDescription', 'backNavigationAllowed']),
            infoButtons: e.arrayClone('infoButtons'),
        }),
        ({ externalModel: e }) => ({
            navigateTo: e.createCallback((e) => ({ name: e }), 'onNavigate'),
            doInfoAction: e.createCallback((e) => ({ index: e }), 'onInfoAction'),
        }),
    ),
    [Te, Pe] = u('CurrentVehicleInfoProvider')(({ observableModel: e }) => {
        const t = { vehicles: e.dictRef('vehicles') };
        return {
            vehicle: _.shallow(() => {
                try {
                    const e = t.vehicles.entries()[0];
                    if (e) {
                        const [, t] = e;
                        return JSON.parse(t.get());
                    }
                } catch (e) {
                    console.error('Error parsing JSON for current vehicle:', e);
                }
            }),
        };
    }, m),
    [Ae, Ce] = u('HeaderProvider')(({ observableModel: e }) => ({ ...e.primitives(['oldStyle']) }), m),
    Se = 'playerReady',
    we = 'battleStartAction',
    Me = 'searchingBattle',
    We = 'battleReady',
    Oe = 'BATTLE_ROYALE_TOURNAMENT',
    [De, He] = u('PrebattleProvider')(
        ({ observableModel: e }) => {
            const t = {
                    ...e.primitives([
                        'currentMode',
                        'currentModeId',
                        'battleStatus',
                        'queueType',
                        'battleButtonAlwaysOn',
                    ]),
                    states: e.dict('states'),
                    battleVehicle: e.transform((e) => {
                        if (b(e.type)) return { ...e, type: e.type };
                    }, 'battleVehicle'),
                },
                a = _.primitive(() => t.battleStatus.get() === Me),
                s = _.primitive(() => t.battleStatus.get() === We);
            return { ...t, computes: { isSearchingBattle: a, isBattleReady: s } };
        },
        ({ externalModel: e }) => ({ actionPrebattle: e.createCallback((e) => ({ action: e }), 'onAction') }),
    ),
    [Re, Ve] = u('PremiumShopProvider')(
        ({ observableModel: e }) => ({ ...e.primitives({ isPremiumShop: 'premiumShopEnabled' }) }),
        ({ externalModel: e }) => ({ openPremiumShop: e.createCallbackNoArgs('onOpenExternalPremiumShop') }),
    ),
    [Le, ze] = u('TutorialProvider')(
        ({ observableModel: e }) => {
            const t = { triggers: e.arrayClone('triggers.items') },
                a = _.primitive(() => t.triggers.get().length);
            return { ...t, computes: { triggersCount: a } };
        },
        ({ externalModel: e }) => ({
            onTriggerActivated: e.createCallback(
                (e, t, a) => ({ componentId: e, triggerType: t, state: a }),
                'onTriggerActivated',
            ),
        }),
    ),
    [$e, Ue] = u('BattleStartProvider')(({ observableModel: e }) => ({ ...e.primitives(['tooltip']) }), m);
const Fe = 'active',
    Ge = 'ready',
    qe = 'notReady',
    Ye = 'disabled';
const Je = {
        backgroundEffect: 'BackgroundEffects_backgroundEffect_7bb0c1b5',
        base: 'BackgroundEffects_47bdcaf9',
        backgroundEffect__rays: 'BackgroundEffects_backgroundEffect__rays_4ebbd8d0',
    },
    Ke = 'rays';
const Qe = e.memo(function ({ buttonState: e, className: o }) {
        const i = e === Fe ? [Ke] : [];
        const r = p.resolve('videos'),
            l = t(i, {
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                config: { duration: 100 },
                trail: 500,
            });
        return a.jsx('div', {
            className: s(Je.base, o),
            children: l((e, t) =>
                a.jsx(n.div, {
                    style: e,
                    children: a.jsx(
                        f,
                        {
                            loop: !0,
                            autoplay: !0,
                            src: r.readOrEmpty(`header_footer.battle_button.${t}`),
                            className: s(Je.backgroundEffect, Je[`backgroundEffect__${t}`]),
                        },
                        t,
                    ),
                }),
            ),
        });
    }),
    Xe = 'ButtonEffects_merged_86ab891d',
    Ze = 'ButtonEffects_bdb5411e',
    et = e.memo(function ({ className: e, onAnimationStarted: t }) {
        const n = p.resolve('videos'),
            o = g({ value: 'small' }, { large: { value: 'large' } });
        return a.jsx('div', {
            className: s(Ze, e),
            children: a.jsx(
                f,
                {
                    autoplay: !0,
                    loop: !0,
                    onPlay: t,
                    src: n.readOrEmpty(`header_footer.battle_button.foreground_${o.value}`),
                    className: Xe,
                },
                `glitterEffect-${o.value}`,
            ),
        });
    }),
    tt = {
        textGlow: 'ButtonText_textGlow_89301672',
        base: 'ButtonText_841a3b01',
        base__ready: 'ButtonText_base__ready_5e741ba3',
        breath: 'ButtonText_breath_5e741ba3',
        textWrapper: 'ButtonText_textWrapper_535d5dc6',
        base__disabled: 'ButtonText_base__disabled_5e741ba3',
        text: 'ButtonText_text_b56e6fa7',
        base__active: 'ButtonText_base__active_5e741ba3',
        base__notReady: 'ButtonText_base__notReady_5e741ba3',
        textOverlay: 'ButtonText_textOverlay_4859ce5c',
    };
function at({ buttonState: e, buttonText: t, animationActive: s, onAnimationEnded: o }) {
    const r = i({
        opacity: s ? 0.9 : 0,
        config: { duration: s ? 3600 : 1e3, easing: s ? y.easeInCirc : y.easeOutCirc },
        onRest: () => {
            s && o();
        },
    });
    return e === Fe
        ? a.jsx(n.div, { className: tt.textGlow, style: r, children: t })
        : e === Ge
          ? a.jsx('div', { className: tt.textGlow, children: t })
          : null;
}
const st = o(function ({ actionType: e, buttonState: t, animationActive: n, onAnimationEnded: o, className: i }) {
        const r = He(),
            l = p.resolve('strings'),
            c = h.toUpperCase(
                l.readOrEmpty(
                    (function (e, t) {
                        return e === we
                            ? 'menu.headerButtons.battle.button.battle'
                            : t
                              ? 'menu.headerButtons.notReady'
                              : 'menu.headerButtons.ready';
                    })(e, r.model.states.get(Se)),
                ),
            );
        return a.jsxs('div', {
            className: s(tt.base, tt[`base__${t}`], i),
            children: [
                a.jsx(x, {
                    classNames: { base: tt.textWrapper, text: tt.text, textOverlay: tt.textOverlay },
                    children: c,
                }),
                a.jsx(at, { buttonState: t, buttonText: c, animationActive: n, onAnimationEnded: o }),
            ],
        });
    }),
    nt = {
        background: 'ButtonWrapper_background_5f66b44f',
        border: 'ButtonWrapper_border_4e5ba0c2',
        button: 'ButtonWrapper_button_ac00a3ae',
        button__disabled: 'ButtonWrapper_button__disabled_5b8e9d9',
        background__disabled: 'ButtonWrapper_background__disabled_4ab5c051',
        background__notReady: 'ButtonWrapper_background__notReady_d27296f9',
        background__ready: 'ButtonWrapper_background__ready_2853577d',
        background__appear: 'ButtonWrapper_background__appear_22cf4f98',
        fadeIn: 'ButtonWrapper_fadeIn_d27296f9',
        background__dissapear: 'ButtonWrapper_background__dissapear_6a20b5f2',
        flicker: 'ButtonWrapper_flicker_d27296f9',
        content: 'ButtonWrapper_content_a523ce6e',
        button__ready: 'ButtonWrapper_button__ready_d27296f9',
        button__notReady: 'ButtonWrapper_button__notReady_d27296f9',
        overlay: 'ButtonWrapper_overlay_ccea80e8',
    },
    ot = [Ge, qe],
    it = o(function ({
        buttonState: e,
        transitionActive: t,
        transitionFromState: n,
        actionType: o,
        children: i,
        className: r,
    }) {
        const l = Ue(),
            c = He(),
            d = l.model.tooltip.get(),
            u = (function (e) {
                var t, a, s, n;
                const o = null == (t = e.match(/{HEADER}(.*?){\/HEADER}/)) ? void 0 : t[1],
                    i = null == (a = e.match(/{BODY}(.*?){\/BODY}/)) ? void 0 : a[1],
                    r = null == (s = e.match(/{NOTE}(.*?){\/NOTE}/)) ? void 0 : s[1],
                    l = null == (n = e.match(/{ATTENTION}(.*?){\/ATTENTION}/)) ? void 0 : n[1];
                return v({ header: o, body: i, alert: l, note: r, hasHtmlContent: !0, disabled: 0 === e.length });
            })(d),
            _ = e === Ye;
        const m = n && ot.includes(n) && ot.includes(e);
        return a.jsx('div', {
            ...(_ && d && u),
            className: r,
            children: a.jsxs(N, {
                theme: N.themes.custom,
                disabled: _,
                autoAlignContent: !1,
                onClick: function () {
                    _ || c.controls.actionPrebattle(o);
                },
                className: s(nt.button, nt[`button__${e}`]),
                classNames: {
                    background: s(nt.background, nt[`background__${e}`], t && !m && nt.background__appear),
                    content: nt.content,
                    border: nt.border,
                    overlay: nt.overlay,
                },
                'data-test-id': 'battleButton',
                soundTarget: 'battleButton',
                children: [
                    t &&
                        !m &&
                        a.jsx('div', { className: s(nt.background, nt.background__dissapear, nt[`background__${n}`]) }),
                    i,
                ],
            }),
        });
    }),
    rt = {
        hoverOverlay: 'BattleButton_hoverOverlay_5196983d',
        buttonEffects: 'BattleButton_buttonEffects_53b5d8e2',
        reflector: 'BattleButton_reflector_47e1d14b',
        backgroundEffects: 'BattleButton_backgroundEffects_815ae971',
        base: 'BattleButton_40c20cf8',
        fadeIn: 'BattleButton_fadeIn_ea4cde73',
        reflector__ready: 'BattleButton_reflector__ready_ea4cde73',
        reflector__notReady: 'BattleButton_reflector__notReady_a8ef3bf5',
        desaturation: 'BattleButton_desaturation_fb74a8a1',
        desaturation__hidden: 'BattleButton_desaturation__hidden_6167cc9c',
        buttonText: 'BattleButton_buttonText_8108fe79',
    },
    lt = 'FightButton',
    ct = B('BattleButton', rt.base),
    dt = o(function ({ classNames: t }) {
        const n = He(),
            [o, i] = e.useState(!1),
            [l, c] = e.useState(!1),
            [d, u] = e.useState(),
            { model: _, controls: m } = ze(),
            b = _.computes.triggersCount(),
            v = j(),
            p = n.model.queueType.get() === Oe,
            f = 'TRAINING' === n.model.currentMode.get(),
            g =
                (!n.model.states.get('playerCreator') && !f && n.model.states.get('readinessAvailable')) || p
                    ? 'readyAction'
                    : we,
            h = (function (e, t, a) {
                return t ? Ye : e === we ? Fe : a ? qe : Ge;
            })(g, !n.model.states.get('actionEnabled'), n.model.states.get(Se)),
            x = I(h),
            y = h === Ye;
        return (
            e.useEffect(
                () =>
                    r(() => {
                        const e = E(_.triggers.get(), (e) => e.componentId === lt);
                        ((b > 0 && e) || (x && h !== x)) && m.onTriggerActivated(lt, 'enabled_change', !0);
                    }),
                [h, m, _.triggers, x, b],
            ),
            e.useEffect(() => {
                x &&
                    h !== x &&
                    (c(!0),
                    u(x),
                    v.run(() => {
                        c(!1);
                    }, 600));
            }, [v, h, x]),
            a.jsxs(ct, {
                className: null == t ? void 0 : t.base,
                id: 'fight-button',
                children: [
                    a.jsx(Qe, { buttonState: h, className: s(rt.backgroundEffects, null == t ? void 0 : t.effect) }),
                    a.jsxs(it, {
                        actionType: g,
                        buttonState: h,
                        transitionActive: l,
                        transitionFromState: d,
                        className: null == t ? void 0 : t.content,
                        children: [
                            !y && a.jsx('div', { className: s(rt.reflector, rt[`reflector__${h}`]) }),
                            h === Fe && a.jsx(et, { className: rt.buttonEffects, onAnimationStarted: () => i(!0) }),
                            a.jsx('div', { className: rt.hoverOverlay }),
                            a.jsx('div', { className: s(rt.desaturation, !y && rt.desaturation__hidden) }),
                            a.jsx(st, {
                                actionType: g,
                                buttonState: h,
                                animationActive: o,
                                onAnimationEnded: () => i(!1),
                                className: rt.buttonText,
                            }),
                        ],
                    }),
                ],
            })
        );
    }),
    ut = e.memo(({ options: e, ...t }) => a.jsx($e, { options: e, children: a.jsx(dt, { ...t }) }));
var _t = ((e) => ((e.Personal = 'personal'), (e.Clan = 'clan'), (e.Event = 'event'), e))(_t || {}),
    mt = ((e) => ((e[(e.Inactive = 0)] = 'Inactive'), (e[(e.Active = 1)] = 'Active'), (e[(e.Used = 2)] = 'Used'), e))(
        mt || {},
    );
const bt = 'alert',
    vt = 'x24x24',
    pt = 'x32x32',
    ft = 'x96x96',
    gt = { [_t.Personal]: 0, [_t.Clan]: 1, [_t.Event]: 2 };
function ht(e) {
    return gt[e] ?? 0;
}
function xt(e) {
    return Math.max(0, Math.floor(e - Date.now() / k));
}
const [yt, Nt] = u()(
        ({ observableModel: e }) => {
            const t = {
                    reserves: e.arrayClone('reserves'),
                    disabledCategories: e.arrayClone('disabledCategories'),
                    ...e.primitives({
                        totalReserves: 'allReserves',
                        totalLimitedReserves: 'limitedReserves',
                        expiringReserveWillExpireSoon: 'reserveExpire',
                    }),
                },
                a = _.primitive(() => E(t.reserves.get(), (e) => e.inactivationTime > 0)),
                s = _.shallow(() => {
                    const e = t.reserves.get();
                    return S(e, (e, t) => ht(e.reserveType) - ht(t.reserveType));
                }),
                n = _.shallow(() => t.disabledCategories.get().every((e) => e.isDisabled));
            return { ...t, computes: { visible: a, sortedBoosters: s, disabled: n } };
        },
        ({ externalModel: e }) => ({ openBooster: e.createCallbackNoArgs('openBoosterNavigation') }),
    ),
    Bt = 'Activate_d05a6105',
    jt = 'Activate_base__disabled_77f76d6c',
    It = 'Activate_wrapper_ea72f87a',
    Et = 'Activate_iconWrapper_b884eeb8',
    kt = 'Activate_icon_bfced9a9',
    Tt = 'Activate_icon__glow_6978c825',
    Pt = 'Activate_amount_262c55ed',
    At = 'Activate_text_6ca62bb4',
    Ct = 'Activate_text__limited_cd94941e',
    St = 'Activate_textOverlay_a5c8a675',
    wt = 'Activate_textOverlay__limited_4a7dd59b',
    Mt = 'Activate_hint_68b56ff6',
    Wt = 'Activate_hint__glow_24eef452',
    Ot = 'Activate_glow_d01917a6',
    Dt = 'Activate_glow__limited_5e88d41',
    Ht = 'Activate_glow__alert_8001ed30',
    Rt = 'Activate_sparks_718002e7',
    Vt = 'Activate_sparks__visible_842edf80',
    Lt = o(function () {
        const { model: e } = Nt(),
            t = p.resolve('strings'),
            n = p.resolve('intl'),
            o = e.computes.visible(),
            i = e.allReserves.get(),
            r = e.limitedReserves.get(),
            l = e.reserveExpire.get(),
            c = e.computes.disabled();
        return o
            ? null
            : a.jsxs('div', {
                  className: s(Bt, c && jt),
                  children: [
                      a.jsxs('div', {
                          className: It,
                          children: [
                              a.jsx('div', { className: s(Rt, l && Vt) }),
                              a.jsx('div', { className: s(Ot, r && Dt, l && Ht) }),
                              a.jsx('div', { className: Et, children: a.jsx('div', { className: s(kt, r && Tt) }) }),
                              a.jsx(x, {
                                  classNames: { base: Pt, text: s(At, r && Ct), textOverlay: s(St, r && wt) },
                                  children: n.formatNumber('integral', i),
                              }),
                          ],
                      }),
                      !c &&
                          a.jsx('div', {
                              className: s(Mt, r && Wt),
                              children: n.toUpperCase(
                                  t.readOrEmpty('menu.boostersWindow.boostersTableRenderer.activateBtnLabel'),
                              ),
                          }),
                  ],
              });
    }),
    zt = {
        background: 'Card_background_d014d7d',
        fill: 'Card_fill_68e6b048',
        fillPattern: 'Card_fillPattern_496f8980',
        base: 'Card_71731d1d',
        base__disabled: 'Card_base__disabled_530f6e06',
        background__personal: 'Card_background__personal_57d23cf4',
        background__clan: 'Card_background__clan_46c6fc44',
        background__alert: 'Card_background__alert_9b1dc5e1',
        alert: 'Card_alert_402bb5af',
        alert__visible: 'Card_alert__visible_bf4a84a5',
        icon: 'Card_icon_1eb606a6',
        premium: 'Card_premium_44855832',
        premium__visible: 'Card_premium__visible_bd677cbc',
        timer: 'Card_timer_27a2857b',
        timer__visible: 'Card_timer__visible_bd677cbc',
        timerGlow: 'Card_timerGlow_e2954b70',
        fillPattern__personal: 'Card_fillPattern__personal_487b5eeb',
        fillPattern__clan: 'Card_fillPattern__clan_d7903601',
        fillPattern__alert: 'Card_fillPattern__alert_fba99a76',
        fillBorderTop: 'Card_fillBorderTop_dc335322',
        fillBorderTop__alert: 'Card_fillBorderTop__alert_b2944931',
        fillBorderBottom: 'Card_fillBorderBottom_ab5451ef',
        fillBorderBottom__visible: 'Card_fillBorderBottom__visible_594e8c6a',
    },
    $t = o(function ({ type: t, timeLeft: n, timeTotal: o, icon: i, className: r }) {
        const { model: l } = Nt(),
            { minutesLeft: c, percentLeft: d } = (function (t, a) {
                const [s, n] = e.useState(xt(t));
                (e.useEffect(() => {
                    n(xt(t));
                }, [t]),
                    e.useEffect(() => {
                        if (0 === s) return;
                        const e = setTimeout(() => {
                            n(xt(t));
                        }, k);
                        return () => clearTimeout(e);
                    }, [s, t]));
                const o = C(s),
                    i = Math.ceil(P(o));
                return { minutesLeft: i, percentLeft: Math.max(0, Math.min(100, (i / (a / T)) * 100)) };
            })(n, o),
            u = l.computes.disabled(),
            _ = c <= 9,
            m = c <= 2,
            b = g({ size: vt }, { large: { size: pt } }),
            v = w(b.size, ft),
            p = i.includes('premium');
        return n <= 0
            ? null
            : a.jsxs('div', {
                  className: s(zt.base, u && zt.base__disabled, r),
                  style: { '--fill_percentage': `${d}%` },
                  children: [
                      a.jsx('div', { className: s(zt.background, zt[`background__${_ ? bt : t}`]) }),
                      a.jsx(M, { className: zt.icon, path: `personal_reserves.common.cards.${v}.${i}` }),
                      a.jsx(M, {
                          className: s(zt.premium, p && zt.premium__visible),
                          path: `personal_reserves.common.cards.${b.size}.premium_booster_glow`,
                      }),
                      a.jsxs('div', {
                          className: s(zt.timer, _ && zt.timer__visible),
                          children: [
                              a.jsx('div', { className: zt.timerGlow }),
                              a.jsx(W, {
                                  upgradeLegacy: !0,
                                  path: 'personal_reserves.hangarEntry.minute',
                                  params: { minutesLeft: c },
                              }),
                          ],
                      }),
                      a.jsx('div', { className: s(zt.alert, m && zt.alert__visible) }),
                      a.jsxs('div', {
                          className: zt.fill,
                          children: [
                              a.jsx('div', { className: s(zt.fillPattern, zt[`fillPattern__${_ ? bt : t}`]) }),
                              a.jsx('div', { className: s(zt.fillBorderTop, m && zt.fillBorderTop__alert) }),
                              a.jsx('div', { className: s(zt.fillBorderBottom, _ && zt.fillBorderBottom__visible) }),
                          ],
                      }),
                  ],
              });
    }),
    Ut = 'List_background_dc475fe4',
    Ft = 'List_border_59b5e8fe',
    Gt = 'List_borderShadow_776a55b9',
    qt = 'List_e706f6ab',
    Yt = 'List_base__disabled_8303c2c1',
    Jt = 'List_cards_efba95c2',
    Kt = 'List_card_d0063856',
    Qt = o(function () {
        const { model: e } = Nt(),
            t = e.computes.sortedBoosters(),
            n = e.computes.visible(),
            o = e.computes.disabled();
        return n
            ? a.jsxs('div', {
                  className: s(qt, o && Yt),
                  children: [
                      a.jsx('div', { className: Ut }),
                      a.jsx('div', { className: Ft }),
                      a.jsx('div', { className: Gt }),
                      a.jsx('div', {
                          className: Jt,
                          children: O(
                              t,
                              (e) => e.state === mt.Active,
                              (e) =>
                                  a.jsx(
                                      $t,
                                      {
                                          type: e.reserveType,
                                          timeLeft: e.inactivationTime,
                                          timeTotal: e.totalDuration,
                                          icon: e.iconId,
                                          className: Kt,
                                      },
                                      e.boosterID,
                                  ),
                          ),
                      }),
                  ],
              })
            : null;
    }),
    Xt = 'Reserves_43f2a7a7',
    Zt = 'Reserves_base__disabled_58e2c36d',
    ea = o(function () {
        const { model: e, controls: t } = Nt(),
            n = (function () {
                const e = p.resolve('views'),
                    t = p.resolve('aliases');
                return A({
                    resId: t.read((e) => e.lobby_header.default.ReservesEntryPoint('resId')),
                    contentId: e.read((e) => e.lobby.personal_reserves.PersonalReservesTooltip('resId')),
                });
            })(),
            o = D(),
            i = e.computes.disabled();
        return a.jsxs('div', {
            ...n,
            className: s(Xt, i && Zt),
            onClick: function (e) {
                (n.onClick(), i || (o.play('click', { target: 'reserves', original: e }), t.openBooster()));
            },
            onMouseEnter: function (e) {
                (n.onMouseEnter(e), i || o.play('mouse-enter', { target: 'reserves', original: e }));
            },
            'data-test-id': 'reservesButton',
            children: [a.jsx(Qt, {}), a.jsx(Lt, {})],
        });
    }),
    ta = e.memo(({ options: e, ...t }) => a.jsx(yt, { options: e, children: a.jsx(ea, { ...t }) })),
    [aa, sa] = u('WalletModel')(
        ({ observableModel: e }) => {
            const t = { currencies: e.dict('currencies') };
            return {
                ...t,
                list: _.shallow((e) =>
                    Array.from(t.currencies.keys.values()).sort((t, a) => {
                        const s = e.indexOf(t),
                            n = e.indexOf(a),
                            o = e.length;
                        return (-1 === s ? o : s) - (-1 === n ? o : n);
                    }),
                ),
            };
        },
        ({ externalModel: e }) => ({ currencyAction: e.createCallback((e) => ({ type: e }), 'onCurrencyAction') }),
    ),
    na = {
        base: 'Hint_e53dd99e',
        discountBackground: 'Hint_discountBackground_1de34646',
        discount: 'Hint_discount_94b7b9ff',
        onlyDiscount: 'Hint_onlyDiscount_8b648a0a',
        discountWithHintText: 'Hint_discountWithHintText_381cf018',
        onlyHintText: 'Hint_onlyHintText_751386e1',
        discountValue: 'Hint_discountValue_b1f389fc',
        discountHintTitle: 'Hint_discountHintTitle_939c55ad',
        hintText: 'Hint_hintText_6f3fa83f',
        hintTitle: 'Hint_hintTitle_135a3ed',
        discountValue__withHint: 'Hint_discountValue__withHint_e7bbe38f',
    };
function oa({ classNames: e }) {
    const t = p.resolve('strings');
    return a.jsxs('div', {
        className: s(na.onlyDiscount, null == e ? void 0 : e.onlyDiscount),
        children: [
            a.jsx('div', { className: s(na.discountBackground, null == e ? void 0 : e.discountBackground) }),
            a.jsx(H.Root, {
                children: a.jsx(H.Value, {
                    value: t.readOrEmpty('common.common.percent'),
                    classNames: {
                        valueContainer: s(na.discount, null == e ? void 0 : e.discount),
                        value: s(na.discountValue, null == e ? void 0 : e.discountValue),
                    },
                }),
            }),
        ],
    });
}
function ia({ type: e, classNames: t }) {
    const n = p.resolve('intl'),
        o = p.resolve('strings');
    return a.jsx('div', {
        className: s(
            na.hintText,
            na.onlyHintText,
            null == t ? void 0 : t.hintText,
            null == t ? void 0 : t.onlyHintText,
        ),
        children: a.jsx(x, {
            classNames: null == t ? void 0 : t.textGradient,
            children: a.jsx('div', {
                className: s(na.hintTitle, null == t ? void 0 : t.hintTitle),
                children: n.toUpperCase(o.readOrEmpty(`menu.headerButtons.btnLabel.${e}`)),
            }),
        }),
    });
}
function ra({ classNames: e, type: t }) {
    const n = p.resolve('intl'),
        o = p.resolve('strings');
    return a.jsxs('div', {
        className: s(na.discountWithHintText, null == e ? void 0 : e.discountWithHintText),
        children: [
            a.jsx('div', { className: s(na.discountBackground, null == e ? void 0 : e.discountBackground) }),
            a.jsx('div', {
                className: s(na.discountHintTitle, null == e ? void 0 : e.discountHintTitle),
                children: n.toUpperCase(o.readOrEmpty(`menu.headerButtons.btnLabel.${t}`)),
            }),
            a.jsx(H.Root, {
                children: a.jsx(H.Value, {
                    value: o.readOrEmpty('common.common.percent'),
                    classNames: {
                        valueContainer: s(na.discount, null == e ? void 0 : e.discount),
                        value: s(na.discountValue, na.discountValue__withHint, null == e ? void 0 : e.discountValue),
                    },
                }),
            }),
        ],
    });
}
function la({ classNames: e, type: t }) {
    return a.jsxs('div', {
        className: s(na.base, null == e ? void 0 : e.base),
        children: [
            a.jsx(oa, {
                classNames: {
                    onlyDiscount: null == e ? void 0 : e.onlyDiscount,
                    discountBackground: null == e ? void 0 : e.discountBackground,
                    discount: null == e ? void 0 : e.discount,
                    discountValue: null == e ? void 0 : e.discountValue,
                },
            }),
            a.jsx(ia, {
                type: t,
                classNames: {
                    hintText: null == e ? void 0 : e.hintText,
                    textGradient: null == e ? void 0 : e.textGradient,
                    onlyHintText: null == e ? void 0 : e.onlyHintText,
                },
            }),
            a.jsx(ra, { classNames: e, type: t }),
        ],
    });
}
const ca = {
        base: 'Currency_92022680',
        hintWrapper: 'Currency_hintWrapper_530465b9',
        base__interactive: 'Currency_base__interactive_52396ddd',
        currencyWrapper: 'Currency_currencyWrapper_b13579ba',
        currencyIcon: 'Currency_currencyIcon_346f8c78',
        value: 'Currency_value_b1cf6531',
        value__unavailable: 'Currency_value__unavailable_3a328d4',
        dash: 'Currency_dash_2806b61e',
        formattedValue: 'Currency_formattedValue_b7cad7e0',
        hint: 'Currency_hint_f9d16bb2',
        text: 'Currency_text_2c4f0a4',
        text__overlay: 'Currency_text__overlay_64b93131',
        discountWithHintText: 'Currency_discountWithHintText_95e3324b',
        base__discount: 'Currency_base__discount_271064ec',
        onlyHintText: 'Currency_onlyHintText_61ecd7b0',
        onlyDiscount: 'Currency_onlyDiscount_61ecd7b0',
    },
    da = 1e6,
    ua = 1e5;
function _a({ wgMoneyAvailable: t, value: n, type: o, classNames: i }) {
    const r = e.useRef(null),
        l = p.resolve('intl'),
        c = p.resolve('strings'),
        d = g(
            {
                displayValue: () =>
                    n >= da ? { abbreviated: !0, value: V(n, ua) / da } : { abbreviated: !1, value: n },
            },
            {
                medium: {
                    displayValue: () =>
                        n >= 1e7 ? { abbreviated: !0, value: V(n, ua) / da } : { abbreviated: !1, value: n },
                },
                large: {
                    displayValue: () =>
                        n >= 1e8 ? { abbreviated: !0, value: V(n, ua) / da } : { value: n, abbreviated: !1 },
                },
            },
        );
    if (!1 === t)
        return a.jsxs('div', {
            className: s(ca.value, ca.value__unavailable, null == i ? void 0 : i.value),
            children: [
                a.jsx('div', { className: ca.dash, children: c.readOrEmpty('common.common.semi_dash') }),
                a.jsx('div', { className: ca.dash, children: c.readOrEmpty('common.common.semi_dash') }),
            ],
        });
    const u = d.displayValue();
    return a.jsx('div', {
        ref: r,
        className: s(ca.value, null == i ? void 0 : i.base),
        children: u.abbreviated
            ? a.jsx(W, {
                  path: 'menu.hangar_header.million',
                  params: { value: u.value },
                  brackets: { start: '%(', end: ')s' },
                  className: s(ca.formattedValue, null == i ? void 0 : i.formattedValue),
              })
            : l.formatNumber(o === L.gold ? 'gold' : 'integral', u.value),
    });
}
const ma = o(function ({ currency: t, type: n, className: o, classNames: i }) {
        var r, l, c, d, u;
        const { controls: _ } = sa(),
            m = D(),
            b = 'AVAILABLE' === t.status,
            f = (function (t, a, s, n) {
                const o = p.resolve('strings'),
                    i = v({
                        header: o.readOrEmpty(`tooltips.header.buttons.${t}.header`),
                        body: o.readOrEmpty(`tooltips.header.buttons.${t}.body`),
                    }),
                    r = e.useMemo(() => ({ disabled: 'string' != typeof s || '' === s }), [s]),
                    l = U(
                        s,
                        e.useMemo(() => [n], [n]),
                        r,
                    );
                return !1 === a ? i : l;
            })(n, b, t.tooltipType, t.value),
            h = g({ size: z.extraSmall }, { large: { size: z.small }, extraLarge: { size: z.medium } }),
            x = w(h.size, z.small);
        return a.jsxs('div', {
            ...f,
            className: s(
                ca.base,
                b ? ca.base__interactive : ca.base__nonInteractive,
                t.discount > 0 && ca.base__discount,
                o,
            ),
            onMouseEnter: function (e) {
                (m.play('mouse-enter', { target: 'WalletCurrency', original: e }), f.onMouseEnter(e));
            },
            onClick: function (e) {
                (null == f || f.onClick(),
                    b && (m.play('click', { target: 'WalletCurrency', original: e }), _.currencyAction(n)));
            },
            children: [
                a.jsx('div', {
                    className: s(ca.currencyWrapper, null == i ? void 0 : i.currencyWrapper),
                    children: a.jsx($, {
                        reverse: !0,
                        classNames: {
                            ...(null == i ? void 0 : i.currency),
                            icon: s(ca.currencyIcon, null == (r = null == i ? void 0 : i.currency) ? void 0 : r.icon),
                        },
                        type: n,
                        size: x,
                        'data-test-id': n,
                        children: a.jsx(_a, {
                            wgMoneyAvailable: b,
                            value: t.value,
                            type: n,
                            classNames: null == i ? void 0 : i.currencyValue,
                        }),
                    }),
                }),
                b &&
                    a.jsx('div', {
                        className: s(ca.hintWrapper, null == i ? void 0 : i.hintWrapper),
                        children: a.jsx(la, {
                            type: n,
                            classNames: {
                                ...(null == i ? void 0 : i.hint),
                                discountWithHintText: s(
                                    ca.discountWithHintText,
                                    null == (l = null == i ? void 0 : i.hint) ? void 0 : l.discountWithHintText,
                                ),
                                onlyDiscount: s(
                                    ca.onlyDiscount,
                                    null == (c = null == i ? void 0 : i.hint) ? void 0 : c.onlyDiscount,
                                ),
                                onlyHintText: s(
                                    ca.onlyHintText,
                                    null == (d = null == i ? void 0 : i.hint) ? void 0 : d.onlyHintText,
                                ),
                                base: s(ca.hint, null == (u = null == i ? void 0 : i.hint) ? void 0 : u.base),
                                textGradient: { text: ca.text, textOverlay: s(ca.text, ca.text__overlay) },
                            },
                        }),
                    }),
            ],
        });
    }),
    ba = o(function (e) {
        const t = sa().model.currencies.get(e.type);
        return t
            ? a.jsx(ma, { ...e, currency: t })
            : (console.error(`Currency with type ${e.type} is not defined`), null);
    }),
    va = 'Wallet_fc600169',
    pa = [L.crystal, L.gold, L.credits],
    fa = o(function ({ className: e, classNames: t, currenciesOrder: n = pa }) {
        const { model: o } = sa(),
            i = o.list(n);
        return a.jsx('div', {
            'data-name': 'Wallet',
            className: s(va, e),
            children: i.map((e) => a.jsx(ba, { type: e, classNames: t }, e)),
        });
    }),
    ga = e.memo(({ className: e, classNames: t, currenciesOrder: s, ...n }) =>
        a.jsx(aa, { ...n, children: a.jsx(fa, { className: e, classNames: t, currenciesOrder: s }) }),
    ),
    ha = 'RightSide_3c6c89c0',
    xa = 'RightSide_separator_fea82003',
    ya = p.resolve('aliases'),
    Na = ya.read((e) => e.lobby_header.default.ReservesEntryPoint('resId')),
    Ba = ya.read((e) => e.lobby_header.default.Wallet('resId')),
    ja = function () {
        const e = F(Na),
            t = F(Ba);
        return a.jsx('div', {
            className: ha,
            children: a.jsxs(ye, {
                className: xa,
                children: [e && a.jsx(ta, { options: { rootId: Na } }), t && a.jsx(ga, { options: { rootId: Ba } })],
            }),
        });
    },
    Ia = {
        border: 'InfoButton_border_f3a2eae1',
        base: 'InfoButton_74c97479',
        base__smallSize: 'InfoButton_base__smallSize_c40e1b5c',
        base__mediumSize: 'InfoButton_base__mediumSize_f347ecd3',
        content: 'InfoButton_content_1cc251f9',
        label: 'InfoButton_label_7fc8e38b',
        icon: 'InfoButton_icon_c58f1a93',
    },
    Ea = { small: 'small', medium: 'medium' },
    ka = { [Ea.small]: 16, [Ea.medium]: 24 },
    Ta = e.forwardRef(function (
        { size: e, infoType: t, label: n, tooltipHeader: o, tooltipBody: i, classNames: r = {}, ...l },
        c,
    ) {
        const d = o || i,
            u = v({ header: o, body: i }),
            _ = w(e, G);
        return a.jsxs(N, {
            ...l,
            onClick: function (e) {
                var t;
                (d && u.onClick(), null == (t = l.onClick) || t.call(l, e));
            },
            onMouseEnter: function (e) {
                var t;
                (d && u.onMouseEnter(e), null == (t = l.onMouseEnter) || t.call(l, e));
            },
            onMouseLeave: function (e) {
                var t;
                (u.onMouseLeave(), null == (t = l.onMouseLeave) || t.call(l, e));
            },
            ref: c,
            size: N.sizes.small,
            theme: N.themes.secondary,
            autoAlignContent: !1,
            className: s(Ia.base, Ia[`base__${e}Size`], l.className),
            classNames: { ...r, content: s(Ia.content, null == r ? void 0 : r.content) },
            children: [
                a.jsx('div', { className: Ia.border }),
                a.jsx(M, {
                    className: Ia.icon,
                    path: `header_footer.info_icon_${t}_${_}`,
                    height: ka[e],
                    width: ka[e],
                }),
                n && a.jsx('div', { className: Ia.label, children: n }),
            ],
        });
    });
Ta.sizes = Ea;
const Pa = 'NavigationBar_425ae997',
    Aa = 'NavigationBar_button_c5ece62',
    Ca = 'NavigationBar_button__backNavigation_7dc54008',
    Sa = 'NavigationBar_label_4840a20f',
    wa = 'NavigationBar_icon_95c9bdbb',
    Ma = 'NavigationBar_iconImage_e695cd8e',
    Wa = 'NavigationBar_iconImage__default_dfd5b7a7',
    Oa = 'NavigationBar_iconImage__hover_c132ba6f',
    Da = 'NavigationBar_iconImage__active_fbf5db52',
    Ha = 'NavigationBar_button__garageNavigation_69a10af0',
    Ra = 'NavigationBar_divider_7592acb0',
    Va = 'NavigationBar_pageTitle_5847696c',
    La = 'NavigationBar_hiddenLabel_1fa48c6e',
    za = 'NavigationBar_base__ready_69a10af0',
    $a = 'NavigationBar_base__animating_69a10af0',
    Ua = 'NavigationBar_hiddenLabelInner_8490d7c',
    Fa = 'NavigationBar_infoButton_8aaee3f9',
    Ga = 'NavigationBar_infoButton__last_efa963fb';
function qa({ classNames: e = {} }) {
    return a.jsxs('div', {
        className: s(wa, e.icon),
        children: [
            a.jsx('div', { className: s(Ma, Wa, e.iconImage, e.iconImage__default) }),
            a.jsx('div', { className: s(Ma, Oa, e.iconImage, e.iconImage__hover) }),
            a.jsx('div', { className: s(Ma, Da, e.iconImage, e.iconImage__active) }),
        ],
    });
}
const Ya = o(function ({ classNames: t = {}, className: n, garageNavigationAllowed: o, battleButtonVisible: i }) {
    const { model: r, controls: l } = ke(),
        c = D(),
        d = p.resolve('strings'),
        u = r.pageTitle.get(),
        _ = r.backNavigationAllowed.get(),
        m = r.backNavigationDescription.get(),
        b = r.infoButtons.get();
    function v(e) {
        c.play('mouse-enter', { target: 'NavigationButton', original: e });
    }
    function f(e) {
        return function () {
            l.doInfoAction(e);
        };
    }
    const h = q(),
        x = p.resolve('intl'),
        y = e.useRef(null),
        [N, B] = e.useState(0),
        [j, I] = e.useState(!1),
        [E, k] = e.useState(!1);
    Y(() => {
        var e, t;
        (I(!0),
            B(
                (null == (e = y.current) ? void 0 : e.offsetWidth)
                    ? (null == (t = y.current) ? void 0 : t.offsetWidth) + 1
                    : 0,
            ));
        const a = J(() => k(!0));
        return () => {
            (I(!1), B(0), k(!1), a());
        };
    }, [h.screenWidthRem, h.breakpoint.name, o, i, _, m, u]);
    const T = g({ value: Ta.sizes.small }, { extraLarge: { value: Ta.sizes.medium } });
    return a.jsxs('div', {
        className: s(Pa, j && za, E && $a, n, t.base),
        children: [
            a.jsxs(ye, {
                className: s(Ra, t.divider),
                children: [
                    o &&
                        a.jsxs('div', {
                            className: s(Aa, Ha, t.button, t.button__garageNavigation),
                            'data-test-id': 'garageButton',
                            onClick: function (e) {
                                (c.play('click', { target: 'NavigationButton', original: e }), l.navigateTo('garage'));
                            },
                            onMouseEnter: v,
                            children: [
                                a.jsx(qa, { classNames: t }),
                                a.jsx('div', {
                                    className: s(Sa, t.label),
                                    children: x.toUpperCase(d.readOrEmpty('menu.headerButtons.hangar')),
                                }),
                            ],
                        }),
                    _ &&
                        a.jsx(a.Fragment, {
                            children: a.jsxs('div', {
                                className: s(Aa, Ca, t.button, t.button__backNavigation),
                                onClick: function (e) {
                                    (c.play('click', { target: 'NavigationButton', original: e }),
                                        l.navigateTo('back'));
                                },
                                onMouseEnter: v,
                                children: [
                                    a.jsx(qa, { classNames: t }),
                                    a.jsx('div', {
                                        className: s(Sa, t.label),
                                        children: x.toUpperCase(d.readOrEmpty('menu.headerButtons.navigation.back')),
                                    }),
                                    m &&
                                        a.jsx('div', {
                                            ref: y,
                                            className: s(La, t.hiddenLabel),
                                            style: { '--width': `${N}px` },
                                            children: a.jsx(Q, { className: Ua, text: x.toUpperCase(m) }),
                                        }),
                                ],
                            }),
                        }),
                    u &&
                        a.jsx(a.Fragment, {
                            children: a.jsx('div', {
                                className: s(Va, t.title),
                                children: a.jsx(Q, { text: x.toUpperCase(u) }),
                            }),
                        }),
                ],
            }),
            b.length > 0 &&
                K(b, (e, n) =>
                    a.jsx(
                        'div',
                        {
                            className: s(Fa, n === b.length - 1 && Ga, null == t ? void 0 : t.infoButton),
                            children: a.jsx(Ta, {
                                size: T.value,
                                onClick: f(n),
                                infoType: e.type,
                                label: e.label,
                                tooltipHeader: e.tooltipHeader,
                                tooltipBody: e.tooltipBody,
                            }),
                        },
                        n,
                    ),
                ),
        ],
    });
});
var Ja = ((e) => (
    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
    (e[(e.ADD_NEEDED = 1)] = 'ADD_NEEDED'),
    (e[(e.ADDED = 2)] = 'ADDED'),
    (e[(e.CONFIRMATION_SENT = 3)] = 'CONFIRMATION_SENT'),
    (e[(e.CONFIRMED = 4)] = 'CONFIRMED'),
    (e[(e.PROCESSING = 5)] = 'PROCESSING'),
    e
))(Ja || {});
const Ka = X(
        le((e) => e > 0),
        re(C),
    ),
    Qa = [
        [te, ae],
        [se, ne],
        [P, oe],
        [ie, () => oe(1)],
    ];
function Xa(e) {
    if (e) {
        const t = Z(e, ee());
        for (const [e, a] of Qa) {
            const s = Math.ceil(e(t));
            if (s > 0) return a(s);
        }
    }
}
const [Za, es] = u('UserAccountProvider')(
        ({ observableModel: e, cleanup: t }) => {
            const a = e.object('userInfo'),
                s = e.object('subscriptions'),
                n = {
                    basic: l.box(Xa(Ka(s.get().activePremiumExpiryTime))),
                    plus: l.box(Xa(Ka(s.get().wotPlusExpiryTime))),
                };
            const o = c(
                    () => s.get().activePremiumExpiryTime,
                    (e) => {
                        n.basic.set(Xa(Ka(e)));
                    },
                ),
                i = c(
                    () => s.get().wotPlusExpiryTime,
                    (e) => {
                        n.plus.set(Xa(Ka(e)));
                    },
                ),
                r = setInterval(function () {
                    d(() => {
                        (n.basic.set(Xa(Ka(s.get().activePremiumExpiryTime))),
                            n.plus.set(Xa(Ka(s.get().wotPlusExpiryTime))));
                    });
                }, 6e4);
            return (
                t(() => {
                    (clearInterval(r), o(), i());
                }),
                { userInfo: a, subscriptions: s, premiums: n }
            );
        },
        ({ externalModel: e }) => ({
            openAccountDashboard: e.createCallbackNoArgs('onOpenAccountDashboard'),
            openWotPlusSubscriptionPage: e.createCallbackNoArgs('subscriptions.onOpenWotPlus'),
            openPremiumSubscriptionPage: e.createCallbackNoArgs('subscriptions.onOpenPremium'),
        }),
    ),
    ts = 'PlayersProfile_b15b3eb3',
    as = 'PlayersProfile_playerInfo_89f70778',
    ss = 'PlayersProfile_playerInfoWrapper_2ed6c121',
    ns = 'PlayersProfile_badgeWrapper_5b9813ec',
    os = 'PlayersProfile_badge_4050c3e9',
    is = 'PlayersProfile_text_99417432',
    rs = 'PlayersProfile_text__name_2ed6c121',
    ls = 'PlayersProfile_text__teamKiller_8bf5e412',
    cs = 'PlayersProfile_base__alertVisible_9b40d452',
    ds = 'PlayersProfile_anonymizerIcon_8632eb46',
    us = 'PlayersProfile_alertIcon_b8de5d15',
    _s = p.resolve('strings'),
    ms = B('PlayersProfile', ts, { variants: { alertVisible: { true: cs } } }),
    bs = new Set([Ja.ADD_NEEDED, Ja.ADDED]),
    vs = o(function () {
        const t = D(),
            n = v({
                header: _s.readOrEmpty('tooltips.header.account.header'),
                body: _s.readOrEmpty('tooltips.header.account.body'),
            }),
            { model: o, controls: i } = es(),
            {
                userName: r,
                badgeID: l,
                isInClan: c,
                clanAbbrev: d,
                teamKiller: u,
                hasSteamAccount: _,
                steamEmailStatus: m,
                anonymized: b,
                email: p,
            } = o.userInfo.get(),
            f = ce(
                'AccountCompletion',
                e.useMemo(() => [p], [p]),
            ),
            g = _ && bs.has(m);
        const h = w(de.Badge.sizes.x48x48, de.Badge.sizes.x80x80);
        return a.jsxs(ms, {
            alertVisible: g,
            children: [
                a.jsxs(de, {
                    ...n,
                    className: as,
                    onClick: function (e) {
                        (t.play('click', { target: 'player-info', original: e }),
                            n.onClick(),
                            i.openAccountDashboard());
                    },
                    onMouseEnter: function (e) {
                        (t.play('mouse-enter', { target: 'player-info', original: e }), n.onMouseEnter(e));
                    },
                    children: [
                        l > 0 &&
                            a.jsx('div', {
                                className: ns,
                                children: a.jsx(de.Badge, {
                                    badgeId: String(l),
                                    width: 48,
                                    height: 48,
                                    size: h,
                                    className: os,
                                }),
                            }),
                        a.jsxs(de.Wrapper, {
                            className: ss,
                            children: [
                                a.jsx(de.Name, { className: s(is, rs, u && ls), children: a.jsx(Q, { text: r }) }),
                                c &&
                                    a.jsx(de.ClanTag, {
                                        className: is,
                                        children: a.jsx(W, {
                                            upgradeLegacy: !0,
                                            path: 'common.clanTag',
                                            params: { abbrev: d },
                                        }),
                                    }),
                            ],
                        }),
                        b && a.jsx('div', { className: ds }),
                    ],
                }),
                g && a.jsx('div', { ...f, className: us }),
            ],
        });
    }),
    ps = e.memo(({ options: e, ...t }) => a.jsx(Za, { options: e, children: a.jsx(vs, { ...t }) })),
    fs = {
        base: 'Premiums_e458a55f',
        base__clickable: 'Premiums_base__clickable_dd8e69b8',
        subscription: 'Premiums_subscription_5299180c',
        text: 'Premiums_text_82711911',
        text__premShop: 'Premiums_text__premShop_a067f33c',
        divider: 'Premiums_divider_268fb4cd',
        wotPlusImg: 'Premiums_wotPlusImg_195105fb',
        wotPlusImg__disabled: 'Premiums_wotPlusImg__disabled_8e8e6ceb',
        alertIcon: 'Premiums_alertIcon_da4f2f9b',
        premiumImg: 'Premiums_premiumImg_d5d73467',
        premiumImg__disabled: 'Premiums_premiumImg__disabled_12a94c05',
        premiumShopImg: 'Premiums_premiumShopImg_99a91f62',
    },
    gs = B('PremiumShop', s(fs.base, fs.base__clickable)),
    hs = p.resolve('strings');
function xs() {
    const { model: e, controls: t } = Ve(),
        n = D(),
        o = v({
            header: hs.readOrEmpty('tooltips.header.premShop.header'),
            body: hs.readOrEmpty('tooltips.header.premShop.body'),
        });
    if (e.premiumShopEnabled.get())
        return a.jsxs(gs, {
            ...o,
            onClick: function (e) {
                (o.onClick(), n.play('click', { target: 'premium-shop', original: e }), t.openPremiumShop());
            },
            onMouseEnter: function (e) {
                (o.onMouseEnter(e), n.play('mouse-enter', { target: 'premium-shop', original: e }));
            },
            children: [
                a.jsx('div', { className: fs.premiumShopImg }),
                a.jsx('div', {
                    className: s(fs.text, fs.text__premShop),
                    children: hs.readOrEmpty('menu.headerButtons.btnLabel.premShop'),
                }),
            ],
        });
}
const ys = B('Premiums', fs.base),
    Ns = 1,
    Bs = 2,
    js = p.resolve('strings'),
    Is = p.resolve('aliases'),
    Es = p.resolve('views');
const ks = o(function ({ className: e }) {
        const t = D(),
            n = A({
                resId: Is.read((e) => e.lobby_header.default.UserAccount('resId')),
                contentId: Es.read((e) => e.lobby.subscription.WotPlusTooltip('resId')),
            }),
            o = A({
                resId: Is.read((e) => e.lobby_header.default.UserAccount('resId')),
                contentId: Is.read((e) => e.common.tooltip.Backport('resId')),
                decoratorId: R.invalid('resId'),
                args: { tooltipId: 'ammunitionEmptySlot', tooltipArgs: '["#tooltips:header/premium_buy"]' },
            }),
            { model: i, controls: r } = es(),
            l = (function (e) {
                if (void 0 === e) return null;
                const { unit: t, value: a } = e;
                return 'days' === t
                    ? { unit: 'day', value: a }
                    : 'hours' === t
                      ? { unit: 'hour', value: a }
                      : { unit: 'hour', value: 1 };
            })(i.premiums.basic.get()),
            { premiumSubscriptionEnabled: c, wotPlusEnabled: d, wotPlusState: u } = i.subscriptions.get();
        const _ = d && u === Ns;
        return a.jsxs(ys, {
            className: e,
            children: [
                a.jsxs('div', {
                    ...n,
                    className: fs.subscription,
                    'data-test-id': 'wotPlus',
                    onClick: function (e) {
                        (n.onClick(),
                            t.play('click', { target: 'premiums:wot-plus', original: e }),
                            r.openWotPlusSubscriptionPage());
                    },
                    onMouseEnter: function (e) {
                        (n.onMouseEnter(e), t.play('mouse-enter', { target: 'premiums:wot-plus', original: e }));
                    },
                    children: [
                        a.jsx('div', { className: s(fs.wotPlusImg, !_ && fs.wotPlusImg__disabled) }),
                        a.jsx('div', {
                            className: fs.text,
                            children: js.readOrEmpty(
                                d
                                    ? 'subscription.headerButton.state.active'
                                    : 'subscription.headerButton.state.available',
                            ),
                        }),
                        u === Bs && a.jsx(M, { path: 'subscription.alert_icon', className: fs.alertIcon }),
                    ],
                }),
                a.jsx(Ne, { className: fs.divider }),
                a.jsxs('div', {
                    ...o,
                    className: fs.subscription,
                    'data-test-id': 'premium',
                    onClick: function (e) {
                        (o.onClick(),
                            t.play('click', { target: 'premiums:premium', original: e }),
                            r.openPremiumSubscriptionPage());
                    },
                    onMouseEnter: function (e) {
                        (o.onMouseEnter(e), t.play('mouse-enter', { target: 'premiums:premium', original: e }));
                    },
                    children: [
                        a.jsx('div', { className: s(fs.premiumImg, !c && fs.premiumImg__disabled) }),
                        a.jsx('div', {
                            className: fs.text,
                            children:
                                c && l
                                    ? a.jsx('span', {
                                          children: a.jsx(W, {
                                              path: `menu.timeLeft.short.${l.unit}`,
                                              params: { [l.unit]: Math.ceil(l.value) },
                                              upgradeLegacy: !0,
                                          }),
                                      })
                                    : a.jsx('span', { children: js.readOrEmpty('menu.common.premiumBuy') }),
                        }),
                    ],
                }),
            ],
        });
    }),
    Ts = e.memo(({ options: e, ...t }) => a.jsx(Za, { options: e, children: a.jsx(ks, { ...t }) })),
    Ps = 'UserProfile_2146e52',
    As = 'UserProfile_divider_4a395a41',
    Cs = p.resolve('aliases'),
    Ss = Cs.read((e) => e.lobby_header.default.UserAccount('resId')),
    ws = Cs.read((e) => e.lobby_header.default.PremShop('resId'));
function Ms({ className: e }) {
    const t = F(Ss);
    return a.jsx('div', {
        className: s(Ps, e),
        children: a.jsxs(ye, {
            className: As,
            children: [
                t && a.jsx(ps, { options: { rootId: Ss } }),
                t && a.jsx(Ts, { options: { rootId: Ss } }),
                ws && a.jsx(xs, {}),
            ],
        }),
    });
}
const Ws = o(function ({ garageNavigationAllowed: e, battleButtonVisible: t, classNames: s }) {
        return Ie().model.type.get() === Be.Hangar
            ? a.jsx(Ms, { className: null == s ? void 0 : s.userProfile })
            : a.jsx(Ya, {
                  classNames: null == s ? void 0 : s.navigationBar,
                  garageNavigationAllowed: e,
                  battleButtonVisible: t,
              });
    }),
    Os = new Set([
        'random',
        'trainingsList',
        'tournament',
        'epicQueue',
        'comp7',
        'comp7Light',
        'winback',
        'strongholdsBattlesList',
        'specBattlesList',
    ]);
const Ds = 'VehicleInfo_4b77df3f',
    Hs = 'VehicleInfo_details_3cde71e7',
    Rs = 'VehicleInfo_vehicleType_5f8aaab4',
    Vs = o(function ({ className: e }) {
        const t = He(),
            n = Pe(),
            o = ((i = t.model.currentModeId.get()), t.model.queueType.get() !== Oe && Os.has(i));
        var i;
        const r = n.model.vehicle();
        if (void 0 !== r)
            return o
                ? a.jsx(W, {
                      className: s(Ds, e),
                      path: 'menu.headerButtons.battle.vehicleInfo',
                      params: {
                          mode: t.model.currentMode.get(),
                          level: a.jsx(_e, { value: r.level, className: Hs }),
                          type: a.jsx(ue, { className: Rs, type: r.type, size: ue.sizes.x24x24 }),
                          name: a.jsx('div', { className: Hs, children: r.shortName }),
                      },
                  })
                : a.jsx(W, {
                      className: s(Ds, e),
                      path: 'menu.headerButtons.battle.modeInfo',
                      params: { mode: t.model.currentMode.get() },
                  });
    }),
    Ls = {
        base: 'App_fe4b7101',
        base__oldStyle: 'App_base__oldStyle_ed955e9f',
        leftSide: 'App_leftSide_6c377b80',
        userProfile: 'App_userProfile_7aef8044',
        navigationBar: 'App_navigationBar_a5705175',
        navigationBar_button: 'App_navigationBar_button_0',
        navigationBar_title: 'App_navigationBar_title_e132fcfa',
        navigationBar_infoButton: 'App_navigationBar_infoButton_760d7047',
        navigationBar_button__garageNavigation: 'App_navigationBar_button__garageNavigation_e132fcfa',
        navigationBar_button__backNavigation: 'App_navigationBar_button__backNavigation_0',
        rightSide: 'App_rightSide_f929369b',
        base__battleButtonVisible: 'App_base__battleButtonVisible_0',
        battleButton: 'App_battleButton_d35d5318',
        battleButton__fadein: 'App_battleButton__fadein_18e051ce',
        battleButton__withoutFadein: 'App_battleButton__withoutFadein_4337493d',
        battleButtonEffects: 'App_battleButtonEffects_1da8cd9d',
        vehicleInfoWrapper: 'App_vehicleInfoWrapper_9f2ec684',
    },
    zs = B('Header', Ls.base, {
        variants: {
            oldStyle: { true: Ls.base__oldStyle },
            battleButtonVisible: { true: Ls.base__battleButtonVisible },
        },
    }),
    $s = p.resolve('aliases').read((e) => e.lobby_header.default.FightStart('resId')),
    Us = new Set([Me, We]),
    Fs = new Set(['mapsTraining']);
const Gs = o(function () {
        const t = me(0, 250),
            n = be(),
            o = Ie(),
            i = Ce(),
            r = He(),
            [l, c] = e.useState(!1),
            d = r.model.battleStatus.get(),
            u = r.model.battleButtonAlwaysOn.get(),
            _ = !r.model.computes.isSearchingBattle() && !r.model.computes.isBattleReady(),
            m = o.model.type.get(),
            b = Boolean(
                ve(n.location, { paths: ['/hangar/allVehicles', ':/hangar/allVehicles', '/postBattleResults'] }),
            ),
            v = n.location.includes('/postBattleResults'),
            p = F($s),
            f = r.model.currentModeId.get();
        return (
            e.useEffect(() => {
                p ? (v && Fs.has(f) ? c(!1) : u ? c(!0) : Us.has(d) ? c(!1) : c(m === Be.Hangar || b || v)) : c(!1);
            }, [u, d, m, b, v, p, f]),
            a.jsxs(zs, {
                ref: t,
                oldStyle: i.model.oldStyle.get(),
                battleButtonVisible: l,
                children: [
                    a.jsx('div', {
                        className: Ls.leftSide,
                        children: a.jsx(Ws, {
                            garageNavigationAllowed: _,
                            battleButtonVisible: l,
                            classNames: {
                                userProfile: Ls.userProfile,
                                navigationBar: {
                                    base: Ls.navigationBar,
                                    button: Ls.navigationBar_button,
                                    button__garageNavigation: Ls.navigationBar_button__garageNavigation,
                                    title: Ls.navigationBar_title,
                                    infoButton: Ls.navigationBar_infoButton,
                                    button__backNavigation: Ls.navigationBar_button__backNavigation,
                                },
                            },
                        }),
                    }),
                    l &&
                        a.jsxs(a.Fragment, {
                            children: [
                                a.jsx(ut, {
                                    options: { rootId: $s },
                                    classNames: {
                                        base: s(
                                            Ls.battleButton,
                                            m === Be.Hangar || b
                                                ? Ls.battleButton__withoutFadein
                                                : Ls.battleButton__fadein,
                                        ),
                                        effect: Ls.battleButtonEffects,
                                    },
                                }),
                                v && a.jsx('div', { className: Ls.vehicleInfoWrapper, children: a.jsx(Vs, {}) }),
                            ],
                        }),
                    a.jsx('div', {
                        className: s(Ls.rightSide, l && Ls.rightSide__battleButtonVisible),
                        children:
                            !r.model.computes.isSearchingBattle() && !r.model.computes.isBattleReady() && a.jsx(ja, {}),
                    }),
                ],
            })
        );
    }),
    qs = p.resolve('aliases'),
    Ys = pe({ click: { battleButton: 'gui_battle' } });
xe(
    new fe()
        .addWithProps(ge, { soundsOverrides: Ys })
        .add(Ae)
        .addWithProps(he, {
            context: 'model.router',
            rootId: qs.read((e) => e.lobby_header.default.HeaderState('resId')),
        })
        .addWithProps(Le, { options: { context: 'tutorialModel' } })
        .addWithProps(Re, { options: { rootId: qs.read((e) => e.lobby_header.default.PremShop('resId')) } })
        .addWithProps(De, { options: { rootId: qs.read((e) => e.lobby_header.default.Prebattle('resId')) } })
        .addWithProps(Te, { options: { rootId: qs.read((e) => e.lobby_header.default.CurrentVehicle('resId')) } })
        .addWithProps(je, { options: { rootId: qs.read((e) => e.lobby_header.default.HeaderState('resId')) } })
        .addWithProps(Ee, { options: { rootId: qs.read((e) => e.lobby_header.default.NavigationBar('resId')) } })
        .render(a.jsx(Gs, {})),
);
