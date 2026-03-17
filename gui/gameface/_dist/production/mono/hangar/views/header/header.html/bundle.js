import { r as e, w as t, j as a, f as s, m as n, v as o, l as i, q as r } from '../../../chunks/vendor.js';
import {
    i as l,
    c,
    n as d,
    G as u,
    u as _,
    r as m,
    V as b,
    m as v,
    H as p,
    I as f,
    K as g,
    B as h,
    M as x,
    N as y,
    e as N,
    O as B,
    P as j,
    Q as I,
    R as E,
    S as k,
    T as C,
    W as T,
    o as P,
    X as A,
    Y as S,
    Z as w,
    l as W,
    z as M,
    _ as O,
    $ as H,
    a0 as D,
    a1 as V,
    w as L,
    a2 as z,
    U as $,
    a3 as U,
    f as F,
    a4 as G,
    a5 as Q,
    a6 as q,
    a7 as Y,
    a8 as J,
    a9 as K,
    aa as X,
    ab as Z,
    C as ee,
    ac as te,
    ad as ae,
    ae as se,
    J as ne,
    E as oe,
    af as ie,
    F as re,
} from '../../../chunks/lib.js';
import { a as le, D as ce } from '../../../chunks/divider.js';
import { u as de, U as ue, W as _e, a as me } from '../../../chunks/user_account_model.js';
/* empty css                    */ var be = ((e) => ((e.Hangar = 'hangar'), (e.Default = 'default'), e))(be || {});
const [ve, pe] = l('HeaderStateModel')((e) => ({ ...e.observableModel.primitives(['type']) })),
    [fe, ge] = l()(
        ({ observableModel: e }) => ({
            ...e.primitives(['pageTitle', 'backNavigationDescription', 'backNavigationAllowed']),
            infoButtons: e.arrayClone('infoButtons'),
        }),
        ({ externalModel: e }) => ({
            navigateTo: e.createCallback((e) => ({ name: e }), 'onNavigate'),
            doInfoAction: e.createCallback((e) => ({ index: e }), 'onInfoAction'),
        }),
    ),
    [he, xe] = l('CurrentVehicleInfoProvider')(({ observableModel: e }) => {
        const t = { vehicles: e.dictRef('vehicles') };
        return {
            vehicle: c.shallow(() => {
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
    }, d),
    [ye, Ne] = l('HeaderProvider')(({ observableModel: e }) => ({ ...e.primitives(['oldStyle']) }), d),
    Be = 'playerReady',
    je = 'battleStartAction',
    Ie = 'searchingBattle',
    Ee = 'battleReady',
    ke = 'BATTLE_ROYALE_TOURNAMENT',
    [Ce, Te] = l('PrebattleProvider')(
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
                        if (u(e.type)) return { ...e, type: e.type };
                    }, 'battleVehicle'),
                },
                a = c.primitive(() => t.battleStatus.get() === Ie),
                s = c.primitive(() => t.battleStatus.get() === Ee);
            return { ...t, computes: { isSearchingBattle: a, isBattleReady: s } };
        },
        ({ externalModel: e }) => ({ actionPrebattle: e.createCallback((e) => ({ action: e }), 'onAction') }),
    ),
    [Pe, Ae] = l('PremiumShopProvider')(
        ({ observableModel: e }) => ({ ...e.primitives({ isPremiumShop: 'premiumShopEnabled' }) }),
        ({ externalModel: e }) => ({ openPremiumShop: e.createCallbackNoArgs('onOpenExternalPremiumShop') }),
    ),
    [Se, we] = l('TutorialProvider')(
        ({ observableModel: e }) => {
            const t = { triggers: e.arrayClone('triggers.items') },
                a = c.primitive(() => t.triggers.get().length);
            return { ...t, computes: { triggersCount: a } };
        },
        ({ externalModel: e }) => ({
            onTriggerActivated: e.createCallback(
                (e, t, a) => ({ componentId: e, triggerType: t, state: a }),
                'onTriggerActivated',
            ),
        }),
    ),
    [We, Me] = l('BattleStartProvider')(({ observableModel: e }) => ({ ...e.primitives(['tooltip']) }), d);
const Oe = 'active',
    Re = 'ready',
    He = 'notReady',
    De = 'disabled';
const Ve = {
        backgroundEffect: 'BackgroundEffects_backgroundEffect_7bb0c1b5',
        base: 'BackgroundEffects_47bdcaf9',
        backgroundEffect__rays: 'BackgroundEffects_backgroundEffect__rays_4ebbd8d0',
    },
    Le = 'rays';
const ze = e.memo(function ({ buttonState: e, className: o }) {
        const i = e === Oe ? [Le] : [];
        const r = m.resolve('videos'),
            l = t(i, {
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                config: { duration: 100 },
                trail: 500,
            });
        return a.jsx('div', {
            className: s(Ve.base, o),
            children: l((e, t) =>
                a.jsx(n.div, {
                    style: e,
                    children: a.jsx(
                        b,
                        {
                            loop: !0,
                            autoplay: !0,
                            src: r.readOrEmpty(`header_footer.battle_button.${t}`),
                            className: s(Ve.backgroundEffect, Ve[`backgroundEffect__${t}`]),
                        },
                        t,
                    ),
                }),
            ),
        });
    }),
    $e = 'ButtonEffects_merged_86ab891d',
    Ue = 'ButtonEffects_bdb5411e',
    Fe = e.memo(function ({ className: e, onAnimationStarted: t }) {
        const n = m.resolve('videos'),
            o = v({ value: 'small' }, { large: { value: 'large' } });
        return a.jsx('div', {
            className: s(Ue, e),
            children: a.jsx(
                b,
                {
                    autoplay: !0,
                    loop: !0,
                    onPlay: t,
                    src: n.readOrEmpty(`header_footer.battle_button.foreground_${o.value}`),
                    className: $e,
                },
                `glitterEffect-${o.value}`,
            ),
        });
    }),
    Ge = {
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
function Qe({ buttonState: e, buttonText: t, animationActive: s, onAnimationEnded: o }) {
    const r = i({
        opacity: s ? 0.9 : 0,
        config: { duration: s ? 3600 : 1e3, easing: s ? g.easeInCirc : g.easeOutCirc },
        onRest: () => {
            s && o();
        },
    });
    return e === Oe
        ? a.jsx(n.div, { className: Ge.textGlow, style: r, children: t })
        : e === Re
          ? a.jsx('div', { className: Ge.textGlow, children: t })
          : null;
}
const qe = o(function ({ actionType: e, buttonState: t, animationActive: n, onAnimationEnded: o, className: i }) {
        const r = Te(),
            l = m.resolve('strings'),
            c = p.toUpperCase(
                l.readOrEmpty(
                    (function (e, t) {
                        return e === je
                            ? 'menu.headerButtons.battle.button.battle'
                            : t
                              ? 'menu.headerButtons.notReady'
                              : 'menu.headerButtons.ready';
                    })(e, r.model.states.get(Be)),
                ),
            );
        return a.jsxs('div', {
            className: s(Ge.base, Ge[`base__${t}`], i),
            children: [
                a.jsx(f, {
                    classNames: { base: Ge.textWrapper, text: Ge.text, textOverlay: Ge.textOverlay },
                    children: c,
                }),
                a.jsx(Qe, { buttonState: t, buttonText: c, animationActive: n, onAnimationEnded: o }),
            ],
        });
    }),
    Ye = {
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
    Je = [Re, He],
    Ke = o(function ({
        buttonState: e,
        transitionActive: t,
        transitionFromState: n,
        actionType: o,
        children: i,
        className: r,
    }) {
        const l = Me(),
            c = Te(),
            d = l.model.tooltip.get(),
            u = (function (e) {
                var t, a, s, n;
                const o = null == (t = e.match(/{HEADER}(.*?){\/HEADER}/)) ? void 0 : t[1],
                    i = null == (a = e.match(/{BODY}(.*?){\/BODY}/)) ? void 0 : a[1],
                    r = null == (s = e.match(/{NOTE}(.*?){\/NOTE}/)) ? void 0 : s[1],
                    l = null == (n = e.match(/{ATTENTION}(.*?){\/ATTENTION}/)) ? void 0 : n[1];
                return _({ header: o, body: i, alert: l, note: r, hasHtmlContent: !0, disabled: 0 === e.length });
            })(d),
            m = e === De;
        const b = n && Je.includes(n) && Je.includes(e);
        return a.jsx('div', {
            ...(m && d && u),
            className: r,
            children: a.jsxs(h, {
                theme: h.themes.custom,
                disabled: m,
                autoAlignContent: !1,
                onClick: function () {
                    m || c.controls.actionPrebattle(o);
                },
                className: s(Ye.button, Ye[`button__${e}`]),
                classNames: {
                    background: s(Ye.background, Ye[`background__${e}`], t && !b && Ye.background__appear),
                    content: Ye.content,
                    border: Ye.border,
                    overlay: Ye.overlay,
                },
                'data-test-id': 'battleButton',
                soundTarget: 'battleButton',
                children: [
                    t &&
                        !b &&
                        a.jsx('div', { className: s(Ye.background, Ye.background__dissapear, Ye[`background__${n}`]) }),
                    i,
                ],
            }),
        });
    }),
    Xe = {
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
    Ze = 'FightButton',
    et = x('BattleButton', Xe.base),
    tt = o(function ({ classNames: t }) {
        const n = Te(),
            [o, i] = e.useState(!1),
            [l, c] = e.useState(!1),
            [d, u] = e.useState(),
            { model: _, controls: m } = we(),
            b = _.computes.triggersCount(),
            v = y(),
            p = n.model.queueType.get() === ke,
            f = 'TRAINING' === n.model.currentMode.get(),
            g =
                (!n.model.states.get('playerCreator') && !f && n.model.states.get('readinessAvailable')) || p
                    ? 'readyAction'
                    : je,
            h = (function (e, t, a) {
                return t ? De : e === je ? Oe : a ? He : Re;
            })(g, !n.model.states.get('actionEnabled'), n.model.states.get(Be)),
            x = N(h),
            j = h === De;
        return (
            e.useEffect(
                () =>
                    r(() => {
                        const e = B(_.triggers.get(), (e) => e.componentId === Ze);
                        ((b > 0 && e) || (x && h !== x)) && m.onTriggerActivated(Ze, 'enabled_change', !0);
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
            a.jsxs(et, {
                className: null == t ? void 0 : t.base,
                id: 'fight-button',
                children: [
                    a.jsx(ze, { buttonState: h, className: s(Xe.backgroundEffects, null == t ? void 0 : t.effect) }),
                    a.jsxs(Ke, {
                        actionType: g,
                        buttonState: h,
                        transitionActive: l,
                        transitionFromState: d,
                        className: null == t ? void 0 : t.content,
                        children: [
                            !j && a.jsx('div', { className: s(Xe.reflector, Xe[`reflector__${h}`]) }),
                            h === Oe && a.jsx(Fe, { className: Xe.buttonEffects, onAnimationStarted: () => i(!0) }),
                            a.jsx('div', { className: Xe.hoverOverlay }),
                            a.jsx('div', { className: s(Xe.desaturation, !j && Xe.desaturation__hidden) }),
                            a.jsx(qe, {
                                actionType: g,
                                buttonState: h,
                                animationActive: o,
                                onAnimationEnded: () => i(!1),
                                className: Xe.buttonText,
                            }),
                        ],
                    }),
                ],
            })
        );
    }),
    at = e.memo(({ options: e, ...t }) => a.jsx(We, { options: e, children: a.jsx(tt, { ...t }) }));
var st = ((e) => ((e.Personal = 'personal'), (e.Clan = 'clan'), (e.Event = 'event'), e))(st || {}),
    nt = ((e) => ((e[(e.Inactive = 0)] = 'Inactive'), (e[(e.Active = 1)] = 'Active'), (e[(e.Used = 2)] = 'Used'), e))(
        nt || {},
    );
const ot = 'alert',
    it = 'x24x24',
    rt = 'x32x32',
    lt = 'x96x96',
    ct = { [st.Personal]: 0, [st.Clan]: 1, [st.Event]: 2 };
function dt(e) {
    return ct[e] ?? 0;
}
function ut(e) {
    return Math.max(0, Math.floor(e - Date.now() / j));
}
const [_t, mt] = l()(
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
                a = c.primitive(() => B(t.reserves.get(), (e) => e.inactivationTime > 0)),
                s = c.shallow(() => {
                    const e = t.reserves.get();
                    return T(e, (e, t) => dt(e.reserveType) - dt(t.reserveType));
                }),
                n = c.shallow(() => t.disabledCategories.get().every((e) => e.isDisabled));
            return { ...t, computes: { visible: a, sortedBoosters: s, disabled: n } };
        },
        ({ externalModel: e }) => ({ openBooster: e.createCallbackNoArgs('openBoosterNavigation') }),
    ),
    bt = 'Activate_d05a6105',
    vt = 'Activate_base__disabled_77f76d6c',
    pt = 'Activate_wrapper_ea72f87a',
    ft = 'Activate_iconWrapper_b884eeb8',
    gt = 'Activate_icon_bfced9a9',
    ht = 'Activate_icon__glow_6978c825',
    xt = 'Activate_amount_262c55ed',
    yt = 'Activate_text_6ca62bb4',
    Nt = 'Activate_text__limited_cd94941e',
    Bt = 'Activate_textOverlay_a5c8a675',
    jt = 'Activate_textOverlay__limited_4a7dd59b',
    It = 'Activate_hint_68b56ff6',
    Et = 'Activate_hint__glow_24eef452',
    kt = 'Activate_glow_d01917a6',
    Ct = 'Activate_glow__limited_5e88d41',
    Tt = 'Activate_glow__alert_8001ed30',
    Pt = 'Activate_sparks_718002e7',
    At = 'Activate_sparks__visible_842edf80',
    St = o(function () {
        const { model: e } = mt(),
            t = m.resolve('strings'),
            n = m.resolve('intl'),
            o = e.computes.visible(),
            i = e.allReserves.get(),
            r = e.limitedReserves.get(),
            l = e.reserveExpire.get(),
            c = e.computes.disabled();
        return o
            ? null
            : a.jsxs('div', {
                  className: s(bt, c && vt),
                  children: [
                      a.jsxs('div', {
                          className: pt,
                          children: [
                              a.jsx('div', { className: s(Pt, l && At) }),
                              a.jsx('div', { className: s(kt, r && Ct, l && Tt) }),
                              a.jsx('div', { className: ft, children: a.jsx('div', { className: s(gt, r && ht) }) }),
                              a.jsx(f, {
                                  classNames: { base: xt, text: s(yt, r && Nt), textOverlay: s(Bt, r && jt) },
                                  children: n.formatNumber('integral', i),
                              }),
                          ],
                      }),
                      !c &&
                          a.jsx('div', {
                              className: s(It, r && Et),
                              children: n.toUpperCase(
                                  t.readOrEmpty('menu.boostersWindow.boostersTableRenderer.activateBtnLabel'),
                              ),
                          }),
                  ],
              });
    }),
    wt = {
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
    Wt = o(function ({ type: t, timeLeft: n, timeTotal: o, icon: i, className: r }) {
        const { model: l } = mt(),
            { minutesLeft: c, percentLeft: d } = (function (t, a) {
                const [s, n] = e.useState(ut(t));
                (e.useEffect(() => {
                    n(ut(t));
                }, [t]),
                    e.useEffect(() => {
                        if (0 === s) return;
                        const e = setTimeout(() => {
                            n(ut(t));
                        }, j);
                        return () => clearTimeout(e);
                    }, [s, t]));
                const o = C(s),
                    i = Math.ceil(E(o));
                return { minutesLeft: i, percentLeft: Math.max(0, Math.min(100, (i / (a / I)) * 100)) };
            })(n, o),
            u = l.computes.disabled(),
            _ = c <= 9,
            m = c <= 2,
            b = v({ size: it }, { large: { size: rt } }),
            p = P(b.size, lt),
            f = i.includes('premium');
        return n <= 0
            ? null
            : a.jsxs('div', {
                  className: s(wt.base, u && wt.base__disabled, r),
                  style: { '--fill_percentage': `${d}%` },
                  children: [
                      a.jsx('div', { className: s(wt.background, wt[`background__${_ ? ot : t}`]) }),
                      a.jsx(A, { className: wt.icon, path: `personal_reserves.common.cards.${p}.${i}` }),
                      a.jsx(A, {
                          className: s(wt.premium, f && wt.premium__visible),
                          path: `personal_reserves.common.cards.${b.size}.premium_booster_glow`,
                      }),
                      a.jsxs('div', {
                          className: s(wt.timer, _ && wt.timer__visible),
                          children: [
                              a.jsx('div', { className: wt.timerGlow }),
                              a.jsx(S, {
                                  upgradeLegacy: !0,
                                  path: 'personal_reserves.hangarEntry.minute',
                                  params: { minutesLeft: c },
                              }),
                          ],
                      }),
                      a.jsx('div', { className: s(wt.alert, m && wt.alert__visible) }),
                      a.jsxs('div', {
                          className: wt.fill,
                          children: [
                              a.jsx('div', { className: s(wt.fillPattern, wt[`fillPattern__${_ ? ot : t}`]) }),
                              a.jsx('div', { className: s(wt.fillBorderTop, m && wt.fillBorderTop__alert) }),
                              a.jsx('div', { className: s(wt.fillBorderBottom, _ && wt.fillBorderBottom__visible) }),
                          ],
                      }),
                  ],
              });
    }),
    Mt = 'List_background_dc475fe4',
    Ot = 'List_border_59b5e8fe',
    Rt = 'List_borderShadow_776a55b9',
    Ht = 'List_e706f6ab',
    Dt = 'List_base__disabled_8303c2c1',
    Vt = 'List_cards_efba95c2',
    Lt = 'List_card_d0063856',
    zt = o(function () {
        const { model: e } = mt(),
            t = e.computes.sortedBoosters(),
            n = e.computes.visible(),
            o = e.computes.disabled();
        return n
            ? a.jsxs('div', {
                  className: s(Ht, o && Dt),
                  children: [
                      a.jsx('div', { className: Mt }),
                      a.jsx('div', { className: Ot }),
                      a.jsx('div', { className: Rt }),
                      a.jsx('div', {
                          className: Vt,
                          children: w(
                              t,
                              (e) => e.state === nt.Active,
                              (e) =>
                                  a.jsx(
                                      Wt,
                                      {
                                          type: e.reserveType,
                                          timeLeft: e.inactivationTime,
                                          timeTotal: e.totalDuration,
                                          icon: e.iconId,
                                          className: Lt,
                                      },
                                      e.boosterID,
                                  ),
                          ),
                      }),
                  ],
              })
            : null;
    }),
    $t = 'Reserves_43f2a7a7',
    Ut = 'Reserves_base__disabled_58e2c36d',
    Ft = o(function () {
        const { model: e, controls: t } = mt(),
            n = (function () {
                const e = m.resolve('views'),
                    t = m.resolve('aliases');
                return k({
                    resId: t.read((e) => e.lobby_header.default.ReservesEntryPoint('resId')),
                    contentId: e.read((e) => e.lobby.personal_reserves.PersonalReservesTooltip('resId')),
                });
            })(),
            o = W(),
            i = e.computes.disabled();
        return a.jsxs('div', {
            ...n,
            className: s($t, i && Ut),
            onClick: function (e) {
                (n.onClick(), i || (o.play('click', { target: 'reserves', original: e }), t.openBooster()));
            },
            onMouseEnter: function (e) {
                (n.onMouseEnter(e), i || o.play('mouse-enter', { target: 'reserves', original: e }));
            },
            'data-test-id': 'reservesButton',
            children: [a.jsx(zt, {}), a.jsx(St, {})],
        });
    }),
    Gt = e.memo(({ options: e, ...t }) => a.jsx(_t, { options: e, children: a.jsx(Ft, { ...t }) })),
    [Qt, qt] = l('WalletModel')(
        ({ observableModel: e }) => {
            const t = { currencies: e.dict('currencies') };
            return {
                ...t,
                list: c.shallow((e) =>
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
    Yt = {
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
function Jt({ classNames: e }) {
    const t = m.resolve('strings');
    return a.jsxs('div', {
        className: s(Yt.onlyDiscount, null == e ? void 0 : e.onlyDiscount),
        children: [
            a.jsx('div', { className: s(Yt.discountBackground, null == e ? void 0 : e.discountBackground) }),
            a.jsx(M.Root, {
                children: a.jsx(M.Value, {
                    value: t.readOrEmpty('common.common.percent'),
                    classNames: {
                        valueContainer: s(Yt.discount, null == e ? void 0 : e.discount),
                        value: s(Yt.discountValue, null == e ? void 0 : e.discountValue),
                    },
                }),
            }),
        ],
    });
}
function Kt({ type: e, classNames: t }) {
    const n = m.resolve('intl'),
        o = m.resolve('strings');
    return a.jsx('div', {
        className: s(
            Yt.hintText,
            Yt.onlyHintText,
            null == t ? void 0 : t.hintText,
            null == t ? void 0 : t.onlyHintText,
        ),
        children: a.jsx(f, {
            classNames: null == t ? void 0 : t.textGradient,
            children: a.jsx('div', {
                className: s(Yt.hintTitle, null == t ? void 0 : t.hintTitle),
                children: n.toUpperCase(o.readOrEmpty(`menu.headerButtons.btnLabel.${e}`)),
            }),
        }),
    });
}
function Xt({ classNames: e, type: t }) {
    const n = m.resolve('intl'),
        o = m.resolve('strings');
    return a.jsxs('div', {
        className: s(Yt.discountWithHintText, null == e ? void 0 : e.discountWithHintText),
        children: [
            a.jsx('div', { className: s(Yt.discountBackground, null == e ? void 0 : e.discountBackground) }),
            a.jsx('div', {
                className: s(Yt.discountHintTitle, null == e ? void 0 : e.discountHintTitle),
                children: n.toUpperCase(o.readOrEmpty(`menu.headerButtons.btnLabel.${t}`)),
            }),
            a.jsx(M.Root, {
                children: a.jsx(M.Value, {
                    value: o.readOrEmpty('common.common.percent'),
                    classNames: {
                        valueContainer: s(Yt.discount, null == e ? void 0 : e.discount),
                        value: s(Yt.discountValue, Yt.discountValue__withHint, null == e ? void 0 : e.discountValue),
                    },
                }),
            }),
        ],
    });
}
function Zt({ classNames: e, type: t }) {
    return a.jsxs('div', {
        className: s(Yt.base, null == e ? void 0 : e.base),
        children: [
            a.jsx(Jt, {
                classNames: {
                    onlyDiscount: null == e ? void 0 : e.onlyDiscount,
                    discountBackground: null == e ? void 0 : e.discountBackground,
                    discount: null == e ? void 0 : e.discount,
                    discountValue: null == e ? void 0 : e.discountValue,
                },
            }),
            a.jsx(Kt, {
                type: t,
                classNames: {
                    hintText: null == e ? void 0 : e.hintText,
                    textGradient: null == e ? void 0 : e.textGradient,
                    onlyHintText: null == e ? void 0 : e.onlyHintText,
                },
            }),
            a.jsx(Xt, { classNames: e, type: t }),
        ],
    });
}
const ea = {
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
    ta = 1e6,
    aa = 1e5;
function sa({ wgMoneyAvailable: t, value: n, type: o, classNames: i }) {
    const r = e.useRef(null),
        l = m.resolve('intl'),
        c = m.resolve('strings'),
        d = v(
            {
                displayValue: () =>
                    n >= ta ? { abbreviated: !0, value: O(n, aa) / ta } : { abbreviated: !1, value: n },
            },
            {
                medium: {
                    displayValue: () =>
                        n >= 1e7 ? { abbreviated: !0, value: O(n, aa) / ta } : { abbreviated: !1, value: n },
                },
                large: {
                    displayValue: () =>
                        n >= 1e8 ? { abbreviated: !0, value: O(n, aa) / ta } : { value: n, abbreviated: !1 },
                },
            },
        );
    if (!1 === t)
        return a.jsxs('div', {
            className: s(ea.value, ea.value__unavailable, null == i ? void 0 : i.value),
            children: [
                a.jsx('div', { className: ea.dash, children: c.readOrEmpty('common.common.semi_dash') }),
                a.jsx('div', { className: ea.dash, children: c.readOrEmpty('common.common.semi_dash') }),
            ],
        });
    const u = d.displayValue();
    return a.jsx('div', {
        ref: r,
        className: s(ea.value, null == i ? void 0 : i.base),
        children: u.abbreviated
            ? a.jsx(S, {
                  path: 'menu.hangar_header.million',
                  params: { value: u.value },
                  brackets: { start: '%(', end: ')s' },
                  className: s(ea.formattedValue, null == i ? void 0 : i.formattedValue),
              })
            : l.formatNumber(o === H.gold ? 'gold' : 'integral', u.value),
    });
}
const na = o(function ({ currency: t, type: n, className: o, classNames: i }) {
        var r, l, c, d, u;
        const { controls: b } = qt(),
            p = W(),
            f = 'AVAILABLE' === t.status,
            g = (function (t, a, s, n) {
                const o = m.resolve('strings'),
                    i = _({
                        header: o.readOrEmpty(`tooltips.header.buttons.${t}.header`),
                        body: o.readOrEmpty(`tooltips.header.buttons.${t}.body`),
                    }),
                    r = e.useMemo(() => ({ disabled: 'string' != typeof s || '' === s }), [s]),
                    l = L(
                        s,
                        e.useMemo(() => [n], [n]),
                        r,
                    );
                return !1 === a ? i : l;
            })(n, f, t.tooltipType, t.value),
            h = v({ size: D.extraSmall }, { large: { size: D.small }, extraLarge: { size: D.medium } }),
            x = P(h.size, D.small);
        return a.jsxs('div', {
            ...g,
            className: s(
                ea.base,
                f ? ea.base__interactive : ea.base__nonInteractive,
                t.discount > 0 && ea.base__discount,
                o,
            ),
            onMouseEnter: function (e) {
                (p.play('mouse-enter', { target: 'WalletCurrency', original: e }), g.onMouseEnter(e));
            },
            onClick: function (e) {
                (null == g || g.onClick(),
                    f && (p.play('click', { target: 'WalletCurrency', original: e }), b.currencyAction(n)));
            },
            children: [
                a.jsx('div', {
                    className: s(ea.currencyWrapper, null == i ? void 0 : i.currencyWrapper),
                    children: a.jsx(V, {
                        reverse: !0,
                        classNames: {
                            ...(null == i ? void 0 : i.currency),
                            icon: s(ea.currencyIcon, null == (r = null == i ? void 0 : i.currency) ? void 0 : r.icon),
                        },
                        type: n,
                        size: x,
                        'data-test-id': n,
                        children: a.jsx(sa, {
                            wgMoneyAvailable: f,
                            value: t.value,
                            type: n,
                            classNames: null == i ? void 0 : i.currencyValue,
                        }),
                    }),
                }),
                f &&
                    a.jsx('div', {
                        className: s(ea.hintWrapper, null == i ? void 0 : i.hintWrapper),
                        children: a.jsx(Zt, {
                            type: n,
                            classNames: {
                                ...(null == i ? void 0 : i.hint),
                                discountWithHintText: s(
                                    ea.discountWithHintText,
                                    null == (l = null == i ? void 0 : i.hint) ? void 0 : l.discountWithHintText,
                                ),
                                onlyDiscount: s(
                                    ea.onlyDiscount,
                                    null == (c = null == i ? void 0 : i.hint) ? void 0 : c.onlyDiscount,
                                ),
                                onlyHintText: s(
                                    ea.onlyHintText,
                                    null == (d = null == i ? void 0 : i.hint) ? void 0 : d.onlyHintText,
                                ),
                                base: s(ea.hint, null == (u = null == i ? void 0 : i.hint) ? void 0 : u.base),
                                textGradient: { text: ea.text, textOverlay: s(ea.text, ea.text__overlay) },
                            },
                        }),
                    }),
            ],
        });
    }),
    oa = o(function (e) {
        const t = qt().model.currencies.get(e.type);
        return t
            ? a.jsx(na, { ...e, currency: t })
            : (console.error(`Currency with type ${e.type} is not defined`), null);
    }),
    ia = 'Wallet_fc600169',
    ra = [H.crystal, H.gold, H.credits],
    la = o(function ({ className: e, classNames: t, currenciesOrder: n = ra }) {
        const { model: o } = qt(),
            i = o.list(n);
        return a.jsx('div', {
            'data-name': 'Wallet',
            className: s(ia, e),
            children: i.map((e) => a.jsx(oa, { type: e, classNames: t }, e)),
        });
    }),
    ca = e.memo(({ className: e, classNames: t, currenciesOrder: s, ...n }) =>
        a.jsx(Qt, { ...n, children: a.jsx(la, { className: e, classNames: t, currenciesOrder: s }) }),
    ),
    da = 'RightSide_3c6c89c0',
    ua = 'RightSide_separator_fea82003',
    _a = m.resolve('aliases'),
    ma = _a.read((e) => e.lobby_header.default.ReservesEntryPoint('resId')),
    ba = _a.read((e) => e.lobby_header.default.Wallet('resId')),
    va = function () {
        const e = z(ma),
            t = z(ba);
        return a.jsx('div', {
            className: da,
            children: a.jsxs(le, {
                className: ua,
                children: [e && a.jsx(Gt, { options: { rootId: ma } }), t && a.jsx(ca, { options: { rootId: ba } })],
            }),
        });
    },
    pa = {
        border: 'InfoButton_border_f3a2eae1',
        base: 'InfoButton_74c97479',
        base__smallSize: 'InfoButton_base__smallSize_c40e1b5c',
        base__mediumSize: 'InfoButton_base__mediumSize_f347ecd3',
        content: 'InfoButton_content_1cc251f9',
        label: 'InfoButton_label_7fc8e38b',
        icon: 'InfoButton_icon_c58f1a93',
    },
    fa = { small: 'small', medium: 'medium' },
    ga = { [fa.small]: 16, [fa.medium]: 24 },
    ha = e.forwardRef(function (
        { size: e, infoType: t, label: n, tooltipHeader: o, tooltipBody: i, classNames: r = {}, ...l },
        c,
    ) {
        const d = o || i,
            u = _({ header: o, body: i }),
            m = P(e, $);
        return a.jsxs(h, {
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
            size: h.sizes.small,
            theme: h.themes.secondary,
            autoAlignContent: !1,
            className: s(pa.base, pa[`base__${e}Size`], l.className),
            classNames: { ...r, content: s(pa.content, null == r ? void 0 : r.content) },
            children: [
                a.jsx('div', { className: pa.border }),
                a.jsx(A, {
                    className: pa.icon,
                    path: `header_footer.info_icon_${t}_${m}`,
                    height: ga[e],
                    width: ga[e],
                }),
                n && a.jsx('div', { className: pa.label, children: n }),
            ],
        });
    });
ha.sizes = fa;
const xa = 'NavigationBar_425ae997',
    ya = 'NavigationBar_button_c5ece62',
    Na = 'NavigationBar_button__backNavigation_7dc54008',
    Ba = 'NavigationBar_label_4840a20f',
    ja = 'NavigationBar_icon_95c9bdbb',
    Ia = 'NavigationBar_iconImage_e695cd8e',
    Ea = 'NavigationBar_iconImage__default_dfd5b7a7',
    ka = 'NavigationBar_iconImage__hover_c132ba6f',
    Ca = 'NavigationBar_iconImage__active_fbf5db52',
    Ta = 'NavigationBar_button__garageNavigation_69a10af0',
    Pa = 'NavigationBar_divider_7592acb0',
    Aa = 'NavigationBar_pageTitle_5847696c',
    Sa = 'NavigationBar_hiddenLabel_1fa48c6e',
    wa = 'NavigationBar_base__ready_69a10af0',
    Wa = 'NavigationBar_base__animating_69a10af0',
    Ma = 'NavigationBar_hiddenLabelInner_8490d7c',
    Oa = 'NavigationBar_infoButton_8aaee3f9',
    Ra = 'NavigationBar_infoButton__last_efa963fb';
function Ha({ classNames: e = {} }) {
    return a.jsxs('div', {
        className: s(ja, e.icon),
        children: [
            a.jsx('div', { className: s(Ia, Ea, e.iconImage, e.iconImage__default) }),
            a.jsx('div', { className: s(Ia, ka, e.iconImage, e.iconImage__hover) }),
            a.jsx('div', { className: s(Ia, Ca, e.iconImage, e.iconImage__active) }),
        ],
    });
}
const Da = o(function ({ classNames: t = {}, className: n, garageNavigationAllowed: o, battleButtonVisible: i }) {
    const { model: r, controls: l } = ge(),
        c = W(),
        d = m.resolve('strings'),
        u = r.pageTitle.get(),
        _ = r.backNavigationAllowed.get(),
        b = r.backNavigationDescription.get(),
        p = r.infoButtons.get();
    function f(e) {
        c.play('mouse-enter', { target: 'NavigationButton', original: e });
    }
    function g(e) {
        return function () {
            l.doInfoAction(e);
        };
    }
    const h = U(),
        x = m.resolve('intl'),
        y = e.useRef(null),
        [N, B] = e.useState(0),
        [j, I] = e.useState(!1),
        [E, k] = e.useState(!1);
    F(() => {
        var e, t;
        (I(!0),
            B(
                (null == (e = y.current) ? void 0 : e.offsetWidth)
                    ? (null == (t = y.current) ? void 0 : t.offsetWidth) + 1
                    : 0,
            ));
        const a = G(() => k(!0));
        return () => {
            (I(!1), B(0), k(!1), a());
        };
    }, [h.screenWidthRem, h.breakpoint.name, o, i, _, b, u]);
    const C = v({ value: ha.sizes.small }, { extraLarge: { value: ha.sizes.medium } });
    return a.jsxs('div', {
        className: s(xa, j && wa, E && Wa, n, t.base),
        children: [
            a.jsxs(le, {
                className: s(Pa, t.divider),
                children: [
                    o &&
                        a.jsxs('div', {
                            className: s(ya, Ta, t.button, t.button__garageNavigation),
                            'data-test-id': 'garageButton',
                            onClick: function (e) {
                                (c.play('click', { target: 'NavigationButton', original: e }), l.navigateTo('garage'));
                            },
                            onMouseEnter: f,
                            children: [
                                a.jsx(Ha, { classNames: t }),
                                a.jsx('div', {
                                    className: s(Ba, t.label),
                                    children: x.toUpperCase(d.readOrEmpty('menu.headerButtons.hangar')),
                                }),
                            ],
                        }),
                    _ &&
                        a.jsx(a.Fragment, {
                            children: a.jsxs('div', {
                                className: s(ya, Na, t.button, t.button__backNavigation),
                                onClick: function (e) {
                                    (c.play('click', { target: 'NavigationButton', original: e }),
                                        l.navigateTo('back'));
                                },
                                onMouseEnter: f,
                                children: [
                                    a.jsx(Ha, { classNames: t }),
                                    a.jsx('div', {
                                        className: s(Ba, t.label),
                                        children: x.toUpperCase(d.readOrEmpty('menu.headerButtons.navigation.back')),
                                    }),
                                    b &&
                                        a.jsx('div', {
                                            ref: y,
                                            className: s(Sa, t.hiddenLabel),
                                            style: { '--width': `${N}px` },
                                            children: a.jsx(q, { className: Ma, text: x.toUpperCase(b) }),
                                        }),
                                ],
                            }),
                        }),
                    u &&
                        a.jsx(a.Fragment, {
                            children: a.jsx('div', {
                                className: s(Aa, t.title),
                                children: a.jsx(q, { text: x.toUpperCase(u) }),
                            }),
                        }),
                ],
            }),
            p.length > 0 &&
                Q(p, (e, n) =>
                    a.jsx(
                        'div',
                        {
                            className: s(Oa, n === p.length - 1 && Ra, null == t ? void 0 : t.infoButton),
                            children: a.jsx(ha, {
                                size: C.value,
                                onClick: g(n),
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
var Va = ((e) => (
    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
    (e[(e.ADD_NEEDED = 1)] = 'ADD_NEEDED'),
    (e[(e.ADDED = 2)] = 'ADDED'),
    (e[(e.CONFIRMATION_SENT = 3)] = 'CONFIRMATION_SENT'),
    (e[(e.CONFIRMED = 4)] = 'CONFIRMED'),
    (e[(e.PROCESSING = 5)] = 'PROCESSING'),
    e
))(Va || {});
const La = 'PlayersProfile_b15b3eb3',
    za = 'PlayersProfile_playerInfo_89f70778',
    $a = 'PlayersProfile_playerInfoWrapper_2ed6c121',
    Ua = 'PlayersProfile_badgeWrapper_5b9813ec',
    Fa = 'PlayersProfile_badge_4050c3e9',
    Ga = 'PlayersProfile_text_99417432',
    Qa = 'PlayersProfile_text__name_2ed6c121',
    qa = 'PlayersProfile_text__teamKiller_8bf5e412',
    Ya = 'PlayersProfile_base__alertVisible_9b40d452',
    Ja = 'PlayersProfile_anonymizerIcon_8632eb46',
    Ka = 'PlayersProfile_alertIcon_b8de5d15',
    Xa = m.resolve('strings'),
    Za = x('PlayersProfile', La, { variants: { alertVisible: { true: Ya } } }),
    es = new Set([Va.ADD_NEEDED, Va.ADDED]),
    ts = o(function () {
        const t = W(),
            n = _({
                header: Xa.readOrEmpty('tooltips.header.account.header'),
                body: Xa.readOrEmpty('tooltips.header.account.body'),
            }),
            { model: o, controls: i } = de(),
            {
                userName: r,
                badgeID: l,
                isInClan: c,
                clanAbbrev: d,
                teamKiller: u,
                hasSteamAccount: m,
                steamEmailStatus: b,
                anonymized: v,
                email: p,
            } = o.userInfo.get(),
            f = Y(
                'AccountCompletion',
                e.useMemo(() => [p], [p]),
            ),
            g = m && es.has(b);
        const h = P(J.Badge.sizes.x48x48, J.Badge.sizes.x80x80);
        return a.jsxs(Za, {
            alertVisible: g,
            children: [
                a.jsxs(J, {
                    ...n,
                    className: za,
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
                                className: Ua,
                                children: a.jsx(J.Badge, {
                                    badgeId: String(l),
                                    width: 48,
                                    height: 48,
                                    size: h,
                                    className: Fa,
                                }),
                            }),
                        a.jsxs(J.Wrapper, {
                            className: $a,
                            children: [
                                a.jsx(J.Name, { className: s(Ga, Qa, u && qa), children: a.jsx(q, { text: r }) }),
                                c &&
                                    a.jsx(J.ClanTag, {
                                        className: Ga,
                                        children: a.jsx(S, {
                                            upgradeLegacy: !0,
                                            path: 'common.clanTag',
                                            params: { abbrev: d },
                                        }),
                                    }),
                            ],
                        }),
                        v && a.jsx('div', { className: Ja }),
                    ],
                }),
                g && a.jsx('div', { ...f, className: Ka }),
            ],
        });
    }),
    as = e.memo(({ options: e, ...t }) => a.jsx(ue, { options: e, children: a.jsx(ts, { ...t }) })),
    ss = {
        base: 'Premiums_e458a55f',
        base__clickable: 'Premiums_base__clickable_dd8e69b8',
        subscription: 'Premiums_subscription_5299180c',
        subscription__unavailable: 'Premiums_subscription__unavailable_86efdd6c',
        text: 'Premiums_text_82711911',
        text__premShop: 'Premiums_text__premShop_a067f33c',
        divider: 'Premiums_divider_268fb4cd',
        wotPlusImg: 'Premiums_wotPlusImg_195105fb',
        wotPlusImg__disabled: 'Premiums_wotPlusImg__disabled_8e8e6ceb',
        wotPlusImg__pro: 'Premiums_wotPlusImg__pro_798bc63',
        alertIcon: 'Premiums_alertIcon_da4f2f9b',
        premiumImg: 'Premiums_premiumImg_d5d73467',
        premiumImg__disabled: 'Premiums_premiumImg__disabled_12a94c05',
        premiumShopImg: 'Premiums_premiumShopImg_99a91f62',
    },
    ns = x('PremiumShop', s(ss.base, ss.base__clickable)),
    os = m.resolve('strings');
function is() {
    const { model: e, controls: t } = Ae(),
        n = W(),
        o = _({
            header: os.readOrEmpty('tooltips.header.premShop.header'),
            body: os.readOrEmpty('tooltips.header.premShop.body'),
        });
    if (e.premiumShopEnabled.get())
        return a.jsxs(ns, {
            ...o,
            onClick: function (e) {
                (o.onClick(), n.play('click', { target: 'premium-shop', original: e }), t.openPremiumShop());
            },
            onMouseEnter: function (e) {
                (o.onMouseEnter(e), n.play('mouse-enter', { target: 'premium-shop', original: e }));
            },
            children: [
                a.jsx('div', { className: ss.premiumShopImg }),
                a.jsx('div', {
                    className: s(ss.text, ss.text__premShop),
                    children: os.readOrEmpty('menu.headerButtons.btnLabel.premShop'),
                }),
            ],
        });
}
var rs = ((e) => ((e.Inactive = 'Inactive'), (e.Active = 'Active'), (e.Cancelled = 'Cancelled'), e))(rs || {});
const ls = x('Premiums', ss.base),
    cs = m.resolve('strings'),
    ds = m.resolve('aliases'),
    us = m.resolve('views');
const _s = o(function ({ className: e }) {
        const t = W(),
            n = k({
                resId: ds.read((e) => e.lobby_header.default.UserAccount('resId')),
                contentId: ds.read((e) => e.common.tooltip.Backport('resId')),
                decoratorId: R.invalid('resId'),
                args: { tooltipId: 'ammunitionEmptySlot', tooltipArgs: '["#tooltips:header/premium_buy"]' },
            }),
            { model: o, controls: i } = de(),
            r = o.wotPlus.get(),
            l = o.benefits.get(),
            c = o.proBenefits.get(),
            d = o.subscriptionPrimitives.isSteamPlatform.get(),
            u = o.subscriptionPrimitives.isCnRealm.get(),
            m = o.getTooltipVariant(),
            b = (function (e) {
                if (void 0 === e) return null;
                const { unit: t, value: a } = e;
                return 'days' === t
                    ? { unit: 'day', value: a }
                    : 'hours' === t
                      ? { unit: 'hour', value: a }
                      : { unit: 'hour', value: 1 };
            })(o.premiums.basic.get()),
            { type: v, state: p, isWotPlusEnabled: f } = r,
            { state: g } = o.premiumAccount.get(),
            h = K(
                'wot_plus_header_widget',
                {
                    ...r,
                    bonuses: l,
                    proBonuses: c,
                    isSteamPlatform: d,
                    isCnRegion: u,
                    tooltipVariant: m,
                    resId: us.read((e) => e.mono.hangar.tooltips('resId')),
                },
                { showDelay: 50 },
            ),
            x = _({ body: cs.readOrEmpty('subscription.headerButton.tooltip.unavailable') });
        const y = p && p === _e.Active;
        return a.jsxs(ls, {
            className: e,
            children: [
                a.jsxs('div', {
                    ...(f ? h : x),
                    className: s(ss.subscription, !f && ss.subscription__unavailable),
                    'data-test-id': 'wotPlus',
                    onClick: f
                        ? function (e) {
                              (h.onClick(),
                                  t.play('click', { target: 'premiums:wot-plus', original: e }),
                                  i.openWotPlusSubscriptionPage());
                          }
                        : void 0,
                    onMouseEnter: function (e) {
                        (f ? h.onMouseEnter(e) : x.onMouseEnter(e),
                            t.play('mouse-enter', { target: 'premiums:wot-plus', original: e }));
                    },
                    children: [
                        a.jsx('div', {
                            className: s(
                                ss.wotPlusImg,
                                !y && ss.wotPlusImg__disabled,
                                v === me.Pro && y && ss.wotPlusImg__pro,
                            ),
                        }),
                        a.jsx('div', {
                            className: ss.text,
                            children: cs.readOrEmpty(
                                p === _e.Active || p === _e.Cancelled
                                    ? 'subscription.headerButton.state.active'
                                    : 'subscription.headerButton.state.available',
                            ),
                        }),
                        p === _e.Cancelled && a.jsx(A, { path: 'subscription.alert_icon', className: ss.alertIcon }),
                    ],
                }),
                a.jsx(ce, { className: ss.divider }),
                a.jsxs('div', {
                    ...n,
                    className: ss.subscription,
                    'data-test-id': 'premium',
                    onClick: function (e) {
                        (n.onClick(),
                            t.play('click', { target: 'premiums:premium', original: e }),
                            i.openPremiumSubscriptionPage());
                    },
                    onMouseEnter: function (e) {
                        (n.onMouseEnter(e), t.play('mouse-enter', { target: 'premiums:premium', original: e }));
                    },
                    children: [
                        a.jsx('div', { className: s(ss.premiumImg, g === rs.Inactive && ss.premiumImg__disabled) }),
                        a.jsx('div', {
                            className: ss.text,
                            children:
                                g === rs.Active && b
                                    ? a.jsx('span', {
                                          children: a.jsx(S, {
                                              path: `menu.timeLeft.short.${b.unit}`,
                                              params: { [b.unit]: Math.ceil(b.value) },
                                              upgradeLegacy: !0,
                                          }),
                                      })
                                    : a.jsx('span', { children: cs.readOrEmpty('menu.common.premiumBuy') }),
                        }),
                    ],
                }),
            ],
        });
    }),
    ms = e.memo(({ options: e, ...t }) => a.jsx(ue, { options: e, children: a.jsx(_s, { ...t }) })),
    bs = 'UserProfile_2146e52',
    vs = 'UserProfile_divider_4a395a41',
    ps = m.resolve('aliases'),
    fs = ps.read((e) => e.lobby_header.default.UserAccount('resId')),
    gs = ps.read((e) => e.lobby_header.default.PremShop('resId'));
function hs({ className: e }) {
    const t = z(fs);
    return a.jsx('div', {
        className: s(bs, e),
        children: a.jsxs(le, {
            className: vs,
            children: [
                t && a.jsx(as, { options: { rootId: fs } }),
                t && a.jsx(ms, { options: { rootId: fs } }),
                gs && a.jsx(is, {}),
            ],
        }),
    });
}
const xs = o(function ({ garageNavigationAllowed: e, battleButtonVisible: t, classNames: s }) {
        return pe().model.type.get() === be.Hangar
            ? a.jsx(hs, { className: null == s ? void 0 : s.userProfile })
            : a.jsx(Da, {
                  classNames: null == s ? void 0 : s.navigationBar,
                  garageNavigationAllowed: e,
                  battleButtonVisible: t,
              });
    }),
    ys = 'battleRoyaleQueue',
    Ns = new Set([
        'random',
        'trainingsList',
        'tournament',
        'epicQueue',
        'comp7',
        'comp7Light',
        'winback',
        'strongholdsBattlesList',
        'specBattlesList',
        ys,
    ]);
function Bs(e) {
    return e !== ys;
}
const js = {
        base: 'VehicleInfo_4b77df3f',
        base__battleRoyaleQueue: 'VehicleInfo_base__battleRoyaleQueue_b5a06cbf',
        details: 'VehicleInfo_details_3cde71e7',
        vehicleType: 'VehicleInfo_vehicleType_5f8aaab4',
    },
    Is = o(function ({ className: e }) {
        const t = Te(),
            n = t.model.currentMode.get(),
            o = xe(),
            i = t.model.currentModeId.get(),
            r = ((l = i), t.model.queueType.get() !== ke && Ns.has(l));
        var l;
        const c = o.model.vehicle();
        if (void 0 !== c)
            return r
                ? a.jsx(S, {
                      className: s(js.base, js[`base__${i}`], e),
                      path: 'menu.headerButtons.battle.vehicleInfo',
                      params: {
                          mode: n,
                          level: Bs(i) ? a.jsx(Z, { value: c.level, className: js.details }) : '',
                          type: a.jsx(X, { className: js.vehicleType, type: c.type, size: X.sizes.x24x24 }),
                          name: a.jsx('div', { className: js.details, children: c.shortName }),
                      },
                  })
                : a.jsx(S, {
                      className: s(js.base, e),
                      path: 'menu.headerButtons.battle.modeInfo',
                      params: { mode: n },
                  });
    }),
    Es = {
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
    ks = x('Header', Es.base, {
        variants: {
            oldStyle: { true: Es.base__oldStyle },
            battleButtonVisible: { true: Es.base__battleButtonVisible },
        },
    }),
    Cs = m.resolve('aliases').read((e) => e.lobby_header.default.FightStart('resId')),
    Ts = new Set([Ie, Ee]),
    Ps = new Set(['mapsTraining']);
const As = o(function () {
        const t = ee(0, 250),
            n = te(),
            o = pe(),
            i = Ne(),
            r = Te(),
            [l, c] = e.useState(!1),
            d = r.model.battleStatus.get(),
            u = r.model.battleButtonAlwaysOn.get(),
            _ = !r.model.computes.isSearchingBattle() && !r.model.computes.isBattleReady(),
            m = o.model.type.get(),
            b = Boolean(
                ae(n.location, { paths: ['/hangar/allVehicles', ':/hangar/allVehicles', '/postBattleResults'] }),
            ),
            v = n.location.includes('/postBattleResults'),
            p = z(Cs),
            f = r.model.currentModeId.get();
        return (
            e.useEffect(() => {
                p ? (v && Ps.has(f) ? c(!1) : u ? c(!0) : Ts.has(d) ? c(!1) : c(m === be.Hangar || b || v)) : c(!1);
            }, [u, d, m, b, v, p, f]),
            a.jsxs(ks, {
                ref: t,
                oldStyle: i.model.oldStyle.get(),
                battleButtonVisible: l,
                children: [
                    a.jsx('div', {
                        className: Es.leftSide,
                        children: a.jsx(xs, {
                            garageNavigationAllowed: _,
                            battleButtonVisible: l,
                            classNames: {
                                userProfile: Es.userProfile,
                                navigationBar: {
                                    base: Es.navigationBar,
                                    button: Es.navigationBar_button,
                                    button__garageNavigation: Es.navigationBar_button__garageNavigation,
                                    title: Es.navigationBar_title,
                                    infoButton: Es.navigationBar_infoButton,
                                    button__backNavigation: Es.navigationBar_button__backNavigation,
                                },
                            },
                        }),
                    }),
                    l &&
                        a.jsxs(a.Fragment, {
                            children: [
                                a.jsx(at, {
                                    options: { rootId: Cs },
                                    classNames: {
                                        base: s(
                                            Es.battleButton,
                                            m === be.Hangar || b
                                                ? Es.battleButton__withoutFadein
                                                : Es.battleButton__fadein,
                                        ),
                                        effect: Es.battleButtonEffects,
                                    },
                                }),
                                v && a.jsx('div', { className: Es.vehicleInfoWrapper, children: a.jsx(Is, {}) }),
                            ],
                        }),
                    a.jsx('div', {
                        className: s(Es.rightSide, l && Es.rightSide__battleButtonVisible),
                        children:
                            !r.model.computes.isSearchingBattle() && !r.model.computes.isBattleReady() && a.jsx(va, {}),
                    }),
                ],
            })
        );
    }),
    Ss = m.resolve('aliases'),
    ws = se({ click: { battleButton: 'gui_battle' } });
re(
    new ne()
        .addWithProps(oe, { soundsOverrides: ws })
        .add(ye)
        .addWithProps(ie, {
            context: 'model.router',
            rootId: Ss.read((e) => e.lobby_header.default.HeaderState('resId')),
        })
        .addWithProps(Se, { options: { context: 'tutorialModel' } })
        .addWithProps(Pe, { options: { rootId: Ss.read((e) => e.lobby_header.default.PremShop('resId')) } })
        .addWithProps(Ce, { options: { rootId: Ss.read((e) => e.lobby_header.default.Prebattle('resId')) } })
        .addWithProps(he, { options: { rootId: Ss.read((e) => e.lobby_header.default.CurrentVehicle('resId')) } })
        .addWithProps(ve, { options: { rootId: Ss.read((e) => e.lobby_header.default.HeaderState('resId')) } })
        .addWithProps(fe, { options: { rootId: Ss.read((e) => e.lobby_header.default.NavigationBar('resId')) } })
        .render(a.jsx(As, {})),
);
