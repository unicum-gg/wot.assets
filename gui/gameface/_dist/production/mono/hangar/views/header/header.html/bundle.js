import {
    r as e,
    w as t,
    j as a,
    f as s,
    m as n,
    v as o,
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
    H as b,
    u as v,
    r as p,
    V as f,
    q as g,
    I as h,
    K as x,
    M as y,
    B as N,
    N as B,
    O as j,
    d as I,
    P as E,
    Q as k,
    R as P,
    S as T,
    T as A,
    W as C,
    X as S,
    v as M,
    Y as W,
    Z as w,
    _ as O,
    o as D,
    D as H,
    $ as V,
    a0 as L,
    a1 as z,
    a2 as $,
    y as U,
    a3 as F,
    U as G,
    a4 as q,
    j as Y,
    a5 as J,
    a6 as K,
    a7 as Q,
    a8 as X,
    a9 as Z,
    aa as ee,
    ab as te,
    ac as ae,
    ad as se,
    ae as ne,
    af as oe,
    ag as ie,
    ah as re,
    ai as le,
    aj as ce,
    ak as de,
    al as ue,
    am as _e,
    E as me,
    an as be,
    ao as ve,
    ap as pe,
    J as fe,
    F as ge,
    aq as he,
    G as xe,
} from '../../../chunks/lib.js';
import { a as ye, D as Ne } from '../../../chunks/divider.js';
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
    [Pe, Te] = u('CurrentVehicleInfoProvider')(({ observableModel: e }) => {
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
    Me = 'battleStartAction',
    We = 'searchingBattle',
    we = 'battleReady',
    [Oe, De] = u('PrebattleProvider')(
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
                a = _.primitive(() => t.battleStatus.get() === We),
                s = _.primitive(() => t.battleStatus.get() === we);
            return { ...t, computes: { isSearchingBattle: a, isBattleReady: s } };
        },
        ({ externalModel: e }) => ({ actionPrebattle: e.createCallback((e) => ({ action: e }), 'onAction') }),
    ),
    [He, Re] = u('PremiumShopProvider')(
        ({ observableModel: e }) => ({ ...e.primitives({ isPremiumShop: 'premiumShopEnabled' }) }),
        ({ externalModel: e }) => ({ openPremiumShop: e.createCallbackNoArgs('onOpenExternalPremiumShop') }),
    ),
    [Ve, Le] = u('TutorialProvider')(
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
    [ze, $e] = u('BattleStartProvider')(({ observableModel: e }) => ({ ...e.primitives(['tooltip']) }), m);
const Ue = 'active',
    Fe = 'ready',
    Ge = 'notReady',
    qe = 'disabled';
const Ye = {
        backgroundEffect: 'BackgroundEffects_backgroundEffect_7bb0c1b5',
        base: 'BackgroundEffects_47bdcaf9',
        backgroundEffect__rays: 'BackgroundEffects_backgroundEffect__rays_4ebbd8d0',
    },
    Je = 'rays';
const Ke = e.memo(function ({ buttonState: e, className: o }) {
        const i = e === Ue ? [Je] : [];
        const r = p.resolve('videos'),
            l = t(i, {
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                config: { duration: 100 },
                trail: 500,
            });
        return a.jsx('div', {
            className: s(Ye.base, o),
            children: l((e, t) =>
                a.jsx(n.div, {
                    style: e,
                    children: a.jsx(
                        f,
                        {
                            loop: !0,
                            autoplay: !0,
                            src: r.readOrEmpty(`header_footer.battle_button.${t}`),
                            className: s(Ye.backgroundEffect, Ye[`backgroundEffect__${t}`]),
                        },
                        t,
                    ),
                }),
            ),
        });
    }),
    Qe = 'ButtonEffects_merged_86ab891d',
    Xe = 'ButtonEffects_bdb5411e',
    Ze = e.memo(function ({ className: e, onAnimationStarted: t }) {
        const n = p.resolve('videos'),
            o = g({ value: 'small' }, { large: { value: 'large' } });
        return a.jsx('div', {
            className: s(Xe, e),
            children: a.jsx(
                f,
                {
                    autoplay: !0,
                    loop: !0,
                    onPlay: t,
                    src: n.readOrEmpty(`header_footer.battle_button.foreground_${o.value}`),
                    className: Qe,
                },
                `glitterEffect-${o.value}`,
            ),
        });
    }),
    et = {
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
function tt({ buttonState: e, buttonText: t, animationActive: s, onAnimationEnded: o }) {
    const r = i({
        opacity: s ? 0.9 : 0,
        config: { duration: s ? 3600 : 1e3, easing: s ? y.easeInCirc : y.easeOutCirc },
        onRest: () => {
            s && o();
        },
    });
    return e === Ue
        ? a.jsx(n.div, { className: et.textGlow, style: r, children: t })
        : e === Fe
          ? a.jsx('div', { className: et.textGlow, children: t })
          : null;
}
const at = o(function ({ actionType: e, buttonState: t, animationActive: n, onAnimationEnded: o, className: i }) {
        const r = De(),
            l = p.resolve('strings'),
            c = h.toUpperCase(
                l.readOrEmpty(
                    (function (e, t) {
                        return e === Me
                            ? 'menu.headerButtons.battle.button.battle'
                            : t
                              ? 'menu.headerButtons.notReady'
                              : 'menu.headerButtons.ready';
                    })(e, r.model.states.get(Se)),
                ),
            );
        return a.jsxs('div', {
            className: s(et.base, et[`base__${t}`], i),
            children: [
                a.jsx(x, {
                    classNames: { base: et.textWrapper, text: et.text, textOverlay: et.textOverlay },
                    children: c,
                }),
                a.jsx(tt, { buttonState: t, buttonText: c, animationActive: n, onAnimationEnded: o }),
            ],
        });
    }),
    st = {
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
    nt = [Fe, Ge],
    ot = o(function ({
        buttonState: e,
        transitionActive: t,
        transitionFromState: n,
        actionType: o,
        children: i,
        className: r,
    }) {
        const l = $e(),
            c = De(),
            d = l.model.tooltip.get(),
            u = (function (e) {
                var t, a, s, n;
                const o = null == (t = e.match(/{HEADER}(.*?){\/HEADER}/)) ? void 0 : t[1],
                    i = null == (a = e.match(/{BODY}(.*?){\/BODY}/)) ? void 0 : a[1],
                    r = null == (s = e.match(/{NOTE}(.*?){\/NOTE}/)) ? void 0 : s[1],
                    l = null == (n = e.match(/{ATTENTION}(.*?){\/ATTENTION}/)) ? void 0 : n[1];
                return v({ header: o, body: i, alert: l, note: r, hasHtmlContent: !0, disabled: 0 === e.length });
            })(d),
            _ = e === qe;
        const m = n && nt.includes(n) && nt.includes(e);
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
                className: s(st.button, st[`button__${e}`]),
                classNames: {
                    background: s(st.background, st[`background__${e}`], t && !m && st.background__appear),
                    content: st.content,
                    border: st.border,
                    overlay: st.overlay,
                },
                'data-test-id': 'battleButton',
                soundTarget: 'battleButton',
                children: [
                    t &&
                        !m &&
                        a.jsx('div', { className: s(st.background, st.background__dissapear, st[`background__${n}`]) }),
                    i,
                ],
            }),
        });
    }),
    it = {
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
    rt = 'FightButton',
    lt = B('BattleButton', it.base),
    ct = o(function ({ classNames: t }) {
        const n = De(),
            [o, i] = e.useState(!1),
            [l, c] = e.useState(!1),
            [d, u] = e.useState(),
            { model: _, controls: m } = Le(),
            b = _.computes.triggersCount(),
            v = j(),
            p = 'BATTLE_ROYALE_TOURNAMENT' === n.model.queueType.get(),
            f = 'TRAINING' === n.model.currentMode.get(),
            g =
                (!n.model.states.get('playerCreator') && !f && n.model.states.get('readinessAvailable')) || p
                    ? 'readyAction'
                    : Me,
            h = (function (e, t, a) {
                return t ? qe : e === Me ? Ue : a ? Ge : Fe;
            })(g, !n.model.states.get('actionEnabled'), n.model.states.get(Se)),
            x = I(h),
            y = h === qe;
        return (
            e.useEffect(
                () =>
                    r(() => {
                        const e = E(_.triggers.get(), (e) => e.componentId === rt);
                        ((b > 0 && e) || (x && h !== x)) && m.onTriggerActivated(rt, 'enabled_change', !0);
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
            a.jsxs(lt, {
                className: null == t ? void 0 : t.base,
                id: 'fight-button',
                children: [
                    a.jsx(Ke, { buttonState: h, className: s(it.backgroundEffects, null == t ? void 0 : t.effect) }),
                    a.jsxs(ot, {
                        actionType: g,
                        buttonState: h,
                        transitionActive: l,
                        transitionFromState: d,
                        className: null == t ? void 0 : t.content,
                        children: [
                            !y && a.jsx('div', { className: s(it.reflector, it[`reflector__${h}`]) }),
                            h === Ue && a.jsx(Ze, { className: it.buttonEffects, onAnimationStarted: () => i(!0) }),
                            a.jsx('div', { className: it.hoverOverlay }),
                            a.jsx('div', { className: s(it.desaturation, !y && it.desaturation__hidden) }),
                            a.jsx(at, {
                                actionType: g,
                                buttonState: h,
                                animationActive: o,
                                onAnimationEnded: () => i(!1),
                                className: it.buttonText,
                            }),
                        ],
                    }),
                ],
            })
        );
    }),
    dt = e.memo(({ options: e, ...t }) => a.jsx(ze, { options: e, children: a.jsx(ct, { ...t }) }));
var ut = ((e) => ((e.Personal = 'personal'), (e.Clan = 'clan'), (e.Event = 'event'), e))(ut || {}),
    _t = ((e) => ((e[(e.Inactive = 0)] = 'Inactive'), (e[(e.Active = 1)] = 'Active'), (e[(e.Used = 2)] = 'Used'), e))(
        _t || {},
    );
const mt = 'alert',
    bt = 'x24x24',
    vt = 'x32x32',
    pt = 'x96x96',
    ft = { [ut.Personal]: 0, [ut.Clan]: 1, [ut.Event]: 2 };
function gt(e) {
    return ft[e] ?? 0;
}
function ht(e) {
    return Math.max(0, Math.floor(e - Date.now() / k));
}
const [xt, yt] = u()(
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
                    return S(e, (e, t) => gt(e.reserveType) - gt(t.reserveType));
                }),
                n = _.shallow(() => t.disabledCategories.get().every((e) => e.isDisabled));
            return { ...t, computes: { visible: a, sortedBoosters: s, disabled: n } };
        },
        ({ externalModel: e }) => ({ openBooster: e.createCallbackNoArgs('openBoosterNavigation') }),
    ),
    Nt = 'Activate_d05a6105',
    Bt = 'Activate_base__disabled_77f76d6c',
    jt = 'Activate_wrapper_ea72f87a',
    It = 'Activate_iconWrapper_b884eeb8',
    Et = 'Activate_icon_bfced9a9',
    kt = 'Activate_icon__glow_6978c825',
    Pt = 'Activate_amount_262c55ed',
    Tt = 'Activate_text_6ca62bb4',
    At = 'Activate_text__limited_cd94941e',
    Ct = 'Activate_textOverlay_a5c8a675',
    St = 'Activate_textOverlay__limited_4a7dd59b',
    Mt = 'Activate_hint_68b56ff6',
    Wt = 'Activate_hint__glow_24eef452',
    wt = 'Activate_glow_d01917a6',
    Ot = 'Activate_glow__limited_5e88d41',
    Dt = 'Activate_glow__alert_8001ed30',
    Ht = 'Activate_sparks_718002e7',
    Rt = 'Activate_sparks__visible_842edf80',
    Vt = o(function () {
        const { model: e } = yt(),
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
                  className: s(Nt, c && Bt),
                  children: [
                      a.jsxs('div', {
                          className: jt,
                          children: [
                              a.jsx('div', { className: s(Ht, l && Rt) }),
                              a.jsx('div', { className: s(wt, r && Ot, l && Dt) }),
                              a.jsx('div', { className: It, children: a.jsx('div', { className: s(Et, r && kt) }) }),
                              a.jsx(x, {
                                  classNames: { base: Pt, text: s(Tt, r && At), textOverlay: s(Ct, r && St) },
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
    Lt = {
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
    zt = o(function ({ type: t, timeLeft: n, timeTotal: o, icon: i, className: r }) {
        const { model: l } = yt(),
            { minutesLeft: c, percentLeft: d } = (function (t, a) {
                const [s, n] = e.useState(ht(t));
                (e.useEffect(() => {
                    n(ht(t));
                }, [t]),
                    e.useEffect(() => {
                        if (0 === s) return;
                        const e = setTimeout(() => {
                            n(ht(t));
                        }, k);
                        return () => clearTimeout(e);
                    }, [s, t]));
                const o = C(s),
                    i = Math.ceil(T(o));
                return { minutesLeft: i, percentLeft: Math.max(0, Math.min(100, (i / (a / P)) * 100)) };
            })(n, o),
            u = l.computes.disabled(),
            _ = c <= 9,
            m = c <= 2,
            b = g({ size: bt }, { large: { size: vt } }),
            v = M(b.size, pt),
            p = i.includes('premium');
        return n <= 0
            ? null
            : a.jsxs('div', {
                  className: s(Lt.base, u && Lt.base__disabled, r),
                  style: { '--fill_percentage': `${d}%` },
                  children: [
                      a.jsx('div', { className: s(Lt.background, Lt[`background__${_ ? mt : t}`]) }),
                      a.jsx(W, { className: Lt.icon, path: `personal_reserves.common.cards.${v}.${i}` }),
                      a.jsx(W, {
                          className: s(Lt.premium, p && Lt.premium__visible),
                          path: `personal_reserves.common.cards.${b.size}.premium_booster_glow`,
                      }),
                      a.jsxs('div', {
                          className: s(Lt.timer, _ && Lt.timer__visible),
                          children: [
                              a.jsx('div', { className: Lt.timerGlow }),
                              a.jsx(w, {
                                  upgradeLegacy: !0,
                                  path: 'personal_reserves.hangarEntry.minute',
                                  params: { minutesLeft: c },
                              }),
                          ],
                      }),
                      a.jsx('div', { className: s(Lt.alert, m && Lt.alert__visible) }),
                      a.jsxs('div', {
                          className: Lt.fill,
                          children: [
                              a.jsx('div', { className: s(Lt.fillPattern, Lt[`fillPattern__${_ ? mt : t}`]) }),
                              a.jsx('div', { className: s(Lt.fillBorderTop, m && Lt.fillBorderTop__alert) }),
                              a.jsx('div', { className: s(Lt.fillBorderBottom, _ && Lt.fillBorderBottom__visible) }),
                          ],
                      }),
                  ],
              });
    }),
    $t = 'List_background_dc475fe4',
    Ut = 'List_border_59b5e8fe',
    Ft = 'List_borderShadow_776a55b9',
    Gt = 'List_e706f6ab',
    qt = 'List_base__disabled_8303c2c1',
    Yt = 'List_cards_efba95c2',
    Jt = 'List_card_d0063856',
    Kt = o(function () {
        const { model: e } = yt(),
            t = e.computes.sortedBoosters(),
            n = e.computes.visible(),
            o = e.computes.disabled();
        return n
            ? a.jsxs('div', {
                  className: s(Gt, o && qt),
                  children: [
                      a.jsx('div', { className: $t }),
                      a.jsx('div', { className: Ut }),
                      a.jsx('div', { className: Ft }),
                      a.jsx('div', {
                          className: Yt,
                          children: O(
                              t,
                              (e) => e.state === _t.Active,
                              (e) =>
                                  a.jsx(
                                      zt,
                                      {
                                          type: e.reserveType,
                                          timeLeft: e.inactivationTime,
                                          timeTotal: e.totalDuration,
                                          icon: e.iconId,
                                          className: Jt,
                                      },
                                      e.boosterID,
                                  ),
                          ),
                      }),
                  ],
              })
            : null;
    }),
    Qt = 'Reserves_43f2a7a7',
    Xt = 'Reserves_base__disabled_58e2c36d',
    Zt = o(function () {
        const { model: e, controls: t } = yt(),
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
            className: s(Qt, i && Xt),
            onClick: function (e) {
                (n.onClick(), i || (o.play('click', { target: 'reserves', original: e }), t.openBooster()));
            },
            onMouseEnter: function (e) {
                (n.onMouseEnter(e), i || o.play('mouse-enter', { target: 'reserves', original: e }));
            },
            'data-test-id': 'reservesButton',
            children: [a.jsx(Kt, {}), a.jsx(Vt, {})],
        });
    }),
    ea = e.memo(({ options: e, ...t }) => a.jsx(xt, { options: e, children: a.jsx(Zt, { ...t }) })),
    [ta, aa] = u('WalletModel')(
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
    sa = {
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
function na({ classNames: e }) {
    const t = p.resolve('strings');
    return a.jsxs('div', {
        className: s(sa.onlyDiscount, null == e ? void 0 : e.onlyDiscount),
        children: [
            a.jsx('div', { className: s(sa.discountBackground, null == e ? void 0 : e.discountBackground) }),
            a.jsx(H.Root, {
                children: a.jsx(H.Value, {
                    value: t.readOrEmpty('common.common.percent'),
                    classNames: {
                        valueContainer: s(sa.discount, null == e ? void 0 : e.discount),
                        value: s(sa.discountValue, null == e ? void 0 : e.discountValue),
                    },
                }),
            }),
        ],
    });
}
function oa({ type: e, classNames: t }) {
    const n = p.resolve('intl'),
        o = p.resolve('strings');
    return a.jsx('div', {
        className: s(
            sa.hintText,
            sa.onlyHintText,
            null == t ? void 0 : t.hintText,
            null == t ? void 0 : t.onlyHintText,
        ),
        children: a.jsx(x, {
            classNames: null == t ? void 0 : t.textGradient,
            children: a.jsx('div', {
                className: s(sa.hintTitle, null == t ? void 0 : t.hintTitle),
                children: n.toUpperCase(o.readOrEmpty(`menu.headerButtons.btnLabel.${e}`)),
            }),
        }),
    });
}
function ia({ classNames: e, type: t }) {
    const n = p.resolve('intl'),
        o = p.resolve('strings');
    return a.jsxs('div', {
        className: s(sa.discountWithHintText, null == e ? void 0 : e.discountWithHintText),
        children: [
            a.jsx('div', { className: s(sa.discountBackground, null == e ? void 0 : e.discountBackground) }),
            a.jsx('div', {
                className: s(sa.discountHintTitle, null == e ? void 0 : e.discountHintTitle),
                children: n.toUpperCase(o.readOrEmpty(`menu.headerButtons.btnLabel.${t}`)),
            }),
            a.jsx(H.Root, {
                children: a.jsx(H.Value, {
                    value: o.readOrEmpty('common.common.percent'),
                    classNames: {
                        valueContainer: s(sa.discount, null == e ? void 0 : e.discount),
                        value: s(sa.discountValue, sa.discountValue__withHint, null == e ? void 0 : e.discountValue),
                    },
                }),
            }),
        ],
    });
}
function ra({ classNames: e, type: t }) {
    return a.jsxs('div', {
        className: s(sa.base, null == e ? void 0 : e.base),
        children: [
            a.jsx(na, {
                classNames: {
                    onlyDiscount: null == e ? void 0 : e.onlyDiscount,
                    discountBackground: null == e ? void 0 : e.discountBackground,
                    discount: null == e ? void 0 : e.discount,
                    discountValue: null == e ? void 0 : e.discountValue,
                },
            }),
            a.jsx(oa, {
                type: t,
                classNames: {
                    hintText: null == e ? void 0 : e.hintText,
                    textGradient: null == e ? void 0 : e.textGradient,
                    onlyHintText: null == e ? void 0 : e.onlyHintText,
                },
            }),
            a.jsx(ia, { classNames: e, type: t }),
        ],
    });
}
const la = {
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
    ca = 1e6,
    da = 1e5;
function ua({ wgMoneyAvailable: t, value: n, type: o, classNames: i }) {
    const r = e.useRef(null),
        l = p.resolve('intl'),
        c = p.resolve('strings'),
        d = g(
            {
                displayValue: () =>
                    n >= ca ? { abbreviated: !0, value: V(n, da) / ca } : { abbreviated: !1, value: n },
            },
            {
                medium: {
                    displayValue: () =>
                        n >= 1e7 ? { abbreviated: !0, value: V(n, da) / ca } : { abbreviated: !1, value: n },
                },
                large: {
                    displayValue: () =>
                        n >= 1e8 ? { abbreviated: !0, value: V(n, da) / ca } : { value: n, abbreviated: !1 },
                },
            },
        );
    if (!1 === t)
        return a.jsxs('div', {
            className: s(la.value, la.value__unavailable, null == i ? void 0 : i.value),
            children: [
                a.jsx('div', { className: la.dash, children: c.readOrEmpty('common.common.semi_dash') }),
                a.jsx('div', { className: la.dash, children: c.readOrEmpty('common.common.semi_dash') }),
            ],
        });
    const u = d.displayValue();
    return a.jsx('div', {
        ref: r,
        className: s(la.value, null == i ? void 0 : i.base),
        children: u.abbreviated
            ? a.jsx(w, {
                  path: 'menu.hangar_header.million',
                  params: { value: u.value },
                  brackets: { start: '%(', end: ')s' },
                  className: s(la.formattedValue, null == i ? void 0 : i.formattedValue),
              })
            : l.formatNumber(o === L.gold ? 'gold' : 'integral', u.value),
    });
}
const _a = o(function ({ currency: t, type: n, className: o, classNames: i }) {
        var r, l, c, d, u;
        const { controls: _ } = aa(),
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
            x = M(h.size, z.small);
        return a.jsxs('div', {
            ...f,
            className: s(
                la.base,
                b ? la.base__interactive : la.base__nonInteractive,
                t.discount > 0 && la.base__discount,
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
                    className: s(la.currencyWrapper, null == i ? void 0 : i.currencyWrapper),
                    children: a.jsx($, {
                        reverse: !0,
                        classNames: {
                            ...(null == i ? void 0 : i.currency),
                            icon: s(la.currencyIcon, null == (r = null == i ? void 0 : i.currency) ? void 0 : r.icon),
                        },
                        type: n,
                        size: x,
                        'data-test-id': n,
                        children: a.jsx(ua, {
                            wgMoneyAvailable: b,
                            value: t.value,
                            type: n,
                            classNames: null == i ? void 0 : i.currencyValue,
                        }),
                    }),
                }),
                b &&
                    a.jsx('div', {
                        className: s(la.hintWrapper, null == i ? void 0 : i.hintWrapper),
                        children: a.jsx(ra, {
                            type: n,
                            classNames: {
                                ...(null == i ? void 0 : i.hint),
                                discountWithHintText: s(
                                    la.discountWithHintText,
                                    null == (l = null == i ? void 0 : i.hint) ? void 0 : l.discountWithHintText,
                                ),
                                onlyDiscount: s(
                                    la.onlyDiscount,
                                    null == (c = null == i ? void 0 : i.hint) ? void 0 : c.onlyDiscount,
                                ),
                                onlyHintText: s(
                                    la.onlyHintText,
                                    null == (d = null == i ? void 0 : i.hint) ? void 0 : d.onlyHintText,
                                ),
                                base: s(la.hint, null == (u = null == i ? void 0 : i.hint) ? void 0 : u.base),
                                textGradient: { text: la.text, textOverlay: s(la.text, la.text__overlay) },
                            },
                        }),
                    }),
            ],
        });
    }),
    ma = o(function (e) {
        const t = aa().model.currencies.get(e.type);
        return t
            ? a.jsx(_a, { ...e, currency: t })
            : (console.error(`Currency with type ${e.type} is not defined`), null);
    }),
    ba = 'Wallet_fc600169',
    va = [L.crystal, L.gold, L.credits],
    pa = o(function ({ className: e, classNames: t, currenciesOrder: n = va }) {
        const { model: o } = aa(),
            i = o.list(n);
        return a.jsx('div', {
            'data-name': 'Wallet',
            className: s(ba, e),
            children: i.map((e) => a.jsx(ma, { type: e, classNames: t }, e)),
        });
    }),
    fa = e.memo(({ className: e, classNames: t, currenciesOrder: s, ...n }) =>
        a.jsx(ta, { ...n, children: a.jsx(pa, { className: e, classNames: t, currenciesOrder: s }) }),
    ),
    ga = 'RightSide_3c6c89c0',
    ha = 'RightSide_separator_fea82003',
    xa = p.resolve('aliases'),
    ya = xa.read((e) => e.lobby_header.default.ReservesEntryPoint('resId')),
    Na = xa.read((e) => e.lobby_header.default.Wallet('resId')),
    Ba = function () {
        const e = F(ya),
            t = F(Na);
        return a.jsx('div', {
            className: ga,
            children: a.jsxs(ye, {
                className: ha,
                children: [e && a.jsx(ea, { options: { rootId: ya } }), t && a.jsx(fa, { options: { rootId: Na } })],
            }),
        });
    },
    ja = {
        border: 'InfoButton_border_f3a2eae1',
        base: 'InfoButton_74c97479',
        base__smallSize: 'InfoButton_base__smallSize_c40e1b5c',
        base__mediumSize: 'InfoButton_base__mediumSize_f347ecd3',
        content: 'InfoButton_content_1cc251f9',
        label: 'InfoButton_label_7fc8e38b',
        icon: 'InfoButton_icon_c58f1a93',
    },
    Ia = { small: 'small', medium: 'medium' },
    Ea = { [Ia.small]: 16, [Ia.medium]: 24 },
    ka = e.forwardRef(function (
        { size: e, infoType: t, label: n, tooltipHeader: o, tooltipBody: i, classNames: r = {}, ...l },
        c,
    ) {
        const d = o || i,
            u = v({ header: o, body: i }),
            _ = M(e, G);
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
            className: s(ja.base, ja[`base__${e}Size`], l.className),
            classNames: { ...r, content: s(ja.content, null == r ? void 0 : r.content) },
            children: [
                a.jsx('div', { className: ja.border }),
                a.jsx(W, {
                    className: ja.icon,
                    path: `header_footer.info_icon_${t}_${_}`,
                    height: Ea[e],
                    width: Ea[e],
                }),
                n && a.jsx('div', { className: ja.label, children: n }),
            ],
        });
    });
ka.sizes = Ia;
const Pa = 'NavigationBar_425ae997',
    Ta = 'NavigationBar_button_c5ece62',
    Aa = 'NavigationBar_button__backNavigation_7dc54008',
    Ca = 'NavigationBar_label_4840a20f',
    Sa = 'NavigationBar_icon_95c9bdbb',
    Ma = 'NavigationBar_iconImage_e695cd8e',
    Wa = 'NavigationBar_iconImage__default_dfd5b7a7',
    wa = 'NavigationBar_iconImage__hover_c132ba6f',
    Oa = 'NavigationBar_iconImage__active_fbf5db52',
    Da = 'NavigationBar_button__garageNavigation_69a10af0',
    Ha = 'NavigationBar_divider_7592acb0',
    Ra = 'NavigationBar_pageTitle_5847696c',
    Va = 'NavigationBar_hiddenLabel_1fa48c6e',
    La = 'NavigationBar_base__ready_69a10af0',
    za = 'NavigationBar_base__animating_69a10af0',
    $a = 'NavigationBar_hiddenLabelInner_8490d7c',
    Ua = 'NavigationBar_infoButton_8aaee3f9';
function Fa({ classNames: e = {} }) {
    return a.jsxs('div', {
        className: s(Sa, e.icon),
        children: [
            a.jsx('div', { className: s(Ma, Wa, e.iconImage, e.iconImage__default) }),
            a.jsx('div', { className: s(Ma, wa, e.iconImage, e.iconImage__hover) }),
            a.jsx('div', { className: s(Ma, Oa, e.iconImage, e.iconImage__active) }),
        ],
    });
}
const Ga = o(function ({ classNames: t = {}, className: n, garageNavigationAllowed: o, battleButtonVisible: i }) {
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
    const P = g({ value: ka.sizes.small }, { extraLarge: { value: ka.sizes.medium } });
    return a.jsxs('div', {
        className: s(Pa, j && La, E && za, n, t.base),
        children: [
            a.jsxs(ye, {
                className: s(Ha, t.divider),
                children: [
                    o &&
                        a.jsxs('div', {
                            className: s(Ta, Da, t.button, t.button__garageNavigation),
                            'data-test-id': 'garageButton',
                            onClick: function (e) {
                                (c.play('click', { target: 'NavigationButton', original: e }), l.navigateTo('garage'));
                            },
                            onMouseEnter: v,
                            children: [
                                a.jsx(Fa, { classNames: t }),
                                a.jsx('div', {
                                    className: s(Ca, t.label),
                                    children: x.toUpperCase(d.readOrEmpty('menu.headerButtons.hangar')),
                                }),
                            ],
                        }),
                    _ &&
                        a.jsx(a.Fragment, {
                            children: a.jsxs('div', {
                                className: s(Ta, Aa, t.button, t.button__backNavigation),
                                onClick: function (e) {
                                    (c.play('click', { target: 'NavigationButton', original: e }),
                                        l.navigateTo('back'));
                                },
                                onMouseEnter: v,
                                children: [
                                    a.jsx(Fa, { classNames: t }),
                                    a.jsx('div', {
                                        className: s(Ca, t.label),
                                        children: x.toUpperCase(d.readOrEmpty('menu.headerButtons.navigation.back')),
                                    }),
                                    m &&
                                        a.jsx('div', {
                                            ref: y,
                                            className: s(Va, t.hiddenLabel),
                                            style: { '--width': `${N}px` },
                                            children: a.jsx(Q, { className: $a, text: x.toUpperCase(m) }),
                                        }),
                                ],
                            }),
                        }),
                    u &&
                        a.jsx(a.Fragment, {
                            children: a.jsx('div', {
                                className: s(Ra, t.title),
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
                            className: s(Ua, null == t ? void 0 : t.infoButton),
                            children: a.jsx(ka, {
                                size: P.value,
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
var qa = ((e) => (
    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
    (e[(e.ADD_NEEDED = 1)] = 'ADD_NEEDED'),
    (e[(e.ADDED = 2)] = 'ADDED'),
    (e[(e.CONFIRMATION_SENT = 3)] = 'CONFIRMATION_SENT'),
    (e[(e.CONFIRMED = 4)] = 'CONFIRMED'),
    (e[(e.PROCESSING = 5)] = 'PROCESSING'),
    e
))(qa || {});
const Ya = X(
        le((e) => e > 0),
        re(C),
    ),
    Ja = [
        [te, ae],
        [se, ne],
        [T, oe],
        [ie, () => oe(1)],
    ];
function Ka(e) {
    if (e) {
        const t = Z(e, ee());
        for (const [e, a] of Ja) {
            const s = Math.ceil(e(t));
            if (s > 0) return a(s);
        }
    }
}
const [Qa, Xa] = u('UserAccountProvider')(
        ({ observableModel: e, cleanup: t }) => {
            const a = e.object('userInfo'),
                s = e.object('subscriptions'),
                n = {
                    basic: l.box(Ka(Ya(s.get().activePremiumExpiryTime))),
                    plus: l.box(Ka(Ya(s.get().wotPlusExpiryTime))),
                };
            const o = c(
                    () => s.get().activePremiumExpiryTime,
                    (e) => {
                        n.basic.set(Ka(Ya(e)));
                    },
                ),
                i = c(
                    () => s.get().wotPlusExpiryTime,
                    (e) => {
                        n.plus.set(Ka(Ya(e)));
                    },
                ),
                r = setInterval(function () {
                    d(() => {
                        (n.basic.set(Ka(Ya(s.get().activePremiumExpiryTime))),
                            n.plus.set(Ka(Ya(s.get().wotPlusExpiryTime))));
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
    Za = 'PlayersProfile_b15b3eb3',
    es = 'PlayersProfile_playerInfo_89f70778',
    ts = 'PlayersProfile_playerInfoWrapper_2ed6c121',
    as = 'PlayersProfile_badgeWrapper_5b9813ec',
    ss = 'PlayersProfile_badge_4050c3e9',
    ns = 'PlayersProfile_text_99417432',
    os = 'PlayersProfile_text__name_2ed6c121',
    is = 'PlayersProfile_text__teamKiller_8bf5e412',
    rs = 'PlayersProfile_base__alertVisible_9b40d452',
    ls = 'PlayersProfile_anonymizerIcon_8632eb46',
    cs = 'PlayersProfile_alertIcon_b8de5d15',
    ds = p.resolve('strings'),
    us = B('PlayersProfile', Za, { variants: { alertVisible: { true: rs } } }),
    _s = new Set([qa.ADD_NEEDED, qa.ADDED]),
    ms = o(function () {
        const t = D(),
            n = v({
                header: ds.readOrEmpty('tooltips.header.account.header'),
                body: ds.readOrEmpty('tooltips.header.account.body'),
            }),
            { model: o, controls: i } = Xa(),
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
            g = _ && _s.has(m);
        const h = M(de.Badge.sizes.x48x48, de.Badge.sizes.x80x80);
        return a.jsxs(us, {
            alertVisible: g,
            children: [
                a.jsxs(de, {
                    ...n,
                    className: es,
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
                                className: as,
                                children: a.jsx(de.Badge, {
                                    badgeId: String(l),
                                    width: 48,
                                    height: 48,
                                    size: h,
                                    className: ss,
                                }),
                            }),
                        a.jsxs(de.Wrapper, {
                            className: ts,
                            children: [
                                a.jsx(de.Name, { className: s(ns, os, u && is), children: a.jsx(Q, { text: r }) }),
                                c &&
                                    a.jsx(de.ClanTag, {
                                        className: ns,
                                        children: a.jsx(w, {
                                            upgradeLegacy: !0,
                                            path: 'common.clanTag',
                                            params: { abbrev: d },
                                        }),
                                    }),
                            ],
                        }),
                        b && a.jsx('div', { className: ls }),
                    ],
                }),
                g && a.jsx('div', { ...f, className: cs }),
            ],
        });
    }),
    bs = e.memo(({ options: e, ...t }) => a.jsx(Qa, { options: e, children: a.jsx(ms, { ...t }) })),
    vs = {
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
    ps = B('PremiumShop', s(vs.base, vs.base__clickable)),
    fs = p.resolve('strings');
function gs() {
    const { model: e, controls: t } = Re(),
        n = D(),
        o = v({
            header: fs.readOrEmpty('tooltips.header.premShop.header'),
            body: fs.readOrEmpty('tooltips.header.premShop.body'),
        });
    if (e.premiumShopEnabled.get())
        return a.jsxs(ps, {
            ...o,
            onClick: function (e) {
                (o.onClick(), n.play('click', { target: 'premium-shop', original: e }), t.openPremiumShop());
            },
            onMouseEnter: function (e) {
                (o.onMouseEnter(e), n.play('mouse-enter', { target: 'premium-shop', original: e }));
            },
            children: [
                a.jsx('div', { className: vs.premiumShopImg }),
                a.jsx('div', {
                    className: s(vs.text, vs.text__premShop),
                    children: fs.readOrEmpty('menu.headerButtons.btnLabel.premShop'),
                }),
            ],
        });
}
const hs = B('Premiums', vs.base),
    xs = 1,
    ys = 2,
    Ns = p.resolve('strings'),
    Bs = p.resolve('aliases'),
    js = p.resolve('views');
const Is = o(function ({ className: e }) {
        const t = D(),
            n = A({
                resId: Bs.read((e) => e.lobby_header.default.UserAccount('resId')),
                contentId: js.read((e) => e.lobby.subscription.WotPlusTooltip('resId')),
            }),
            o = A({
                resId: Bs.read((e) => e.lobby_header.default.UserAccount('resId')),
                contentId: Bs.read((e) => e.common.tooltip.Backport('resId')),
                decoratorId: R.invalid('resId'),
                args: { tooltipId: 'ammunitionEmptySlot', tooltipArgs: '["#tooltips:header/premium_buy"]' },
            }),
            { model: i, controls: r } = Xa(),
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
        const _ = d && u === xs;
        return a.jsxs(hs, {
            className: e,
            children: [
                a.jsxs('div', {
                    ...n,
                    className: vs.subscription,
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
                        a.jsx('div', { className: s(vs.wotPlusImg, !_ && vs.wotPlusImg__disabled) }),
                        a.jsx('div', {
                            className: vs.text,
                            children: Ns.readOrEmpty(
                                d
                                    ? 'subscription.headerButton.state.active'
                                    : 'subscription.headerButton.state.available',
                            ),
                        }),
                        u === ys && a.jsx(W, { path: 'subscription.alert_icon', className: vs.alertIcon }),
                    ],
                }),
                a.jsx(Ne, { className: vs.divider }),
                a.jsxs('div', {
                    ...o,
                    className: vs.subscription,
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
                        a.jsx('div', { className: s(vs.premiumImg, !c && vs.premiumImg__disabled) }),
                        a.jsx('div', {
                            className: vs.text,
                            children:
                                c && l
                                    ? a.jsx('span', {
                                          children: a.jsx(w, {
                                              path: `menu.timeLeft.short.${l.unit}`,
                                              params: { [l.unit]: Math.ceil(l.value) },
                                              upgradeLegacy: !0,
                                          }),
                                      })
                                    : a.jsx('span', { children: Ns.readOrEmpty('menu.common.premiumBuy') }),
                        }),
                    ],
                }),
            ],
        });
    }),
    Es = e.memo(({ options: e, ...t }) => a.jsx(Qa, { options: e, children: a.jsx(Is, { ...t }) })),
    ks = 'UserProfile_2146e52',
    Ps = 'UserProfile_divider_4a395a41',
    Ts = p.resolve('aliases'),
    As = Ts.read((e) => e.lobby_header.default.UserAccount('resId')),
    Cs = Ts.read((e) => e.lobby_header.default.PremShop('resId'));
function Ss({ className: e }) {
    const t = F(As);
    return a.jsx('div', {
        className: s(ks, e),
        children: a.jsxs(ye, {
            className: Ps,
            children: [
                t && a.jsx(bs, { options: { rootId: As } }),
                t && a.jsx(Es, { options: { rootId: As } }),
                Cs && a.jsx(gs, {}),
            ],
        }),
    });
}
const Ms = o(function ({ garageNavigationAllowed: e, battleButtonVisible: t, classNames: s }) {
        return Ie().model.type.get() === Be.Hangar
            ? a.jsx(Ss, { className: null == s ? void 0 : s.userProfile })
            : a.jsx(Ga, {
                  classNames: null == s ? void 0 : s.navigationBar,
                  garageNavigationAllowed: e,
                  battleButtonVisible: t,
              });
    }),
    Ws = new Set(['random', 'trainingsList', 'tournament', 'epicQueue', 'comp7', 'comp7Light', 'winback']),
    ws = 'VehicleInfo_4b77df3f',
    Os = 'VehicleInfo_details_3cde71e7',
    Ds = 'VehicleInfo_vehicleType_5f8aaab4',
    Hs = o(function ({ className: e }) {
        const t = De(),
            n = Te(),
            o = Ws.has(t.model.currentModeId.get()),
            i = n.model.vehicle();
        if (void 0 !== i)
            return o
                ? a.jsx(w, {
                      className: s(ws, e),
                      path: 'menu.headerButtons.battle.vehicleInfo',
                      params: {
                          mode: t.model.currentMode.get(),
                          level: a.jsx(_e, { value: i.level, className: Os }),
                          type: a.jsx(ue, { className: Ds, type: i.type, size: ue.sizes.x24x24 }),
                          name: a.jsx('div', { className: Os, children: i.shortName }),
                      },
                  })
                : a.jsx(w, {
                      className: s(ws, e),
                      path: 'menu.headerButtons.battle.modeInfo',
                      params: { mode: t.model.currentMode.get() },
                  });
    }),
    Rs = {
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
    Vs = B('Header', Rs.base, {
        variants: {
            oldStyle: { true: Rs.base__oldStyle },
            battleButtonVisible: { true: Rs.base__battleButtonVisible },
        },
    }),
    Ls = p.resolve('aliases').read((e) => e.lobby_header.default.FightStart('resId')),
    zs = new Set([We, we]),
    $s = new Set(['mapsTraining']);
const Us = o(function () {
        const t = me(0, 250),
            n = be(),
            o = Ie(),
            i = Ce(),
            r = De(),
            [l, c] = e.useState(!1),
            d = r.model.battleStatus.get(),
            u = r.model.battleButtonAlwaysOn.get(),
            _ = !r.model.computes.isSearchingBattle() && !r.model.computes.isBattleReady(),
            m = o.model.type.get(),
            b = Boolean(
                ve(n.location, { paths: ['/hangar/allVehicles', ':/hangar/allVehicles', '/postBattleResults'] }),
            ),
            v = n.location.includes('/postBattleResults'),
            p = F(Ls),
            f = r.model.currentModeId.get();
        return (
            e.useEffect(() => {
                p ? (v && $s.has(f) ? c(!1) : u ? c(!0) : zs.has(d) ? c(!1) : c(m === Be.Hangar || b || v)) : c(!1);
            }, [u, d, m, b, v, p, f]),
            a.jsxs(Vs, {
                ref: t,
                oldStyle: i.model.oldStyle.get(),
                battleButtonVisible: l,
                children: [
                    a.jsx('div', {
                        className: Rs.leftSide,
                        children: a.jsx(Ms, {
                            garageNavigationAllowed: _,
                            battleButtonVisible: l,
                            classNames: {
                                userProfile: Rs.userProfile,
                                navigationBar: {
                                    base: Rs.navigationBar,
                                    button: Rs.navigationBar_button,
                                    button__garageNavigation: Rs.navigationBar_button__garageNavigation,
                                    title: Rs.navigationBar_title,
                                    infoButton: Rs.navigationBar_infoButton,
                                    button__backNavigation: Rs.navigationBar_button__backNavigation,
                                },
                            },
                        }),
                    }),
                    l &&
                        a.jsxs(a.Fragment, {
                            children: [
                                a.jsx(dt, {
                                    options: { rootId: Ls },
                                    classNames: {
                                        base: s(
                                            Rs.battleButton,
                                            m === Be.Hangar || b
                                                ? Rs.battleButton__withoutFadein
                                                : Rs.battleButton__fadein,
                                        ),
                                        effect: Rs.battleButtonEffects,
                                    },
                                }),
                                v && a.jsx('div', { className: Rs.vehicleInfoWrapper, children: a.jsx(Hs, {}) }),
                            ],
                        }),
                    a.jsx('div', {
                        className: s(Rs.rightSide, l && Rs.rightSide__battleButtonVisible),
                        children:
                            !r.model.computes.isSearchingBattle() && !r.model.computes.isBattleReady() && a.jsx(Ba, {}),
                    }),
                ],
            })
        );
    }),
    Fs = p.resolve('aliases'),
    Gs = pe({ click: { battleButton: 'gui_battle' } });
xe(
    new fe()
        .addWithProps(ge, { soundsOverrides: Gs })
        .add(Ae)
        .addWithProps(he, {
            context: 'model.router',
            rootId: Fs.read((e) => e.lobby_header.default.HeaderState('resId')),
        })
        .addWithProps(Ve, { options: { context: 'tutorialModel' } })
        .addWithProps(He, { options: { rootId: Fs.read((e) => e.lobby_header.default.PremShop('resId')) } })
        .addWithProps(Oe, { options: { rootId: Fs.read((e) => e.lobby_header.default.Prebattle('resId')) } })
        .addWithProps(Pe, { options: { rootId: Fs.read((e) => e.lobby_header.default.CurrentVehicle('resId')) } })
        .addWithProps(je, { options: { rootId: Fs.read((e) => e.lobby_header.default.HeaderState('resId')) } })
        .addWithProps(Ee, { options: { rootId: Fs.read((e) => e.lobby_header.default.NavigationBar('resId')) } })
        .render(a.jsx(Us, {})),
);
